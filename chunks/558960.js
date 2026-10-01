i.d(t, { A: () => u });
var n = i(256693),
    s = i(343030);
class l {
    config;
    entries = new Map();
    targets = new Map();
    backgrounded = new Map();
    changeListeners = new Set();
    attachSeq = 0;
    constructor(e) {
        this.config = e;
    }
    subscribe = (e) => (
        this.changeListeners.add(e),
        () => {
            this.changeListeners.delete(e);
        }
    );
    emitChange() {
        for (let e of this.changeListeners) e();
    }
    registerFrameEntry(e, t) {
        (this.entries.set(e, t), this.reconcile(e));
    }
    removeFrameEntry(e) {
        (this.unplace(e), this.entries.delete(e), this.clearTargets(e), this.emitChange());
    }
    getFrameEntry(e) {
        return this.entries.get(e) ?? null;
    }
    hasFrameEntry(e) {
        return this.entries.has(e);
    }
    registerFrameTarget(e, t, i, n) {
        let s = this.targets.get(e);
        (null == s && ((s = new Map()), this.targets.set(e, s)),
            s.set(t, { target: t, level: i, seq: this.attachSeq++, state: n }),
            this.reconcile(e));
    }
    updateFrameTargetState(e, t, i) {
        let n = this.targets.get(e)?.get(t);
        null != n && n.state !== i && ((n.state = i), this.emitChange());
    }
    removeFrameTarget(e, t) {
        let i = this.targets.get(e);
        null != i && i.delete(t) && this.reconcile(e);
    }
    getWinningTarget(e) {
        return this.hasFrameEntry(e) ? (this.pickWinner(e)?.target ?? null) : null;
    }
    getWinningTargetState(e) {
        return this.hasFrameEntry(e) ? (this.pickWinner(e)?.state ?? null) : null;
    }
    clearTargets(e) {
        (this.targets.delete(e), this.cancelBackground(e));
    }
    reconcile(e) {
        if (!this.hasFrameEntry(e)) return;
        let t = this.pickWinner(e);
        (null == t
            ? (this.unplace(e), this.background(e))
            : (this.cancelBackground(e), this.place(e, t.target, t.level)),
            this.emitChange());
    }
    pickWinner(e) {
        let t = this.targets.get(e);
        if (null == t) return null;
        let i = null;
        for (let e of t.values())
            (null == i || s.p[e.level] > s.p[i.level] || (s.p[e.level] === s.p[i.level] && e.seq > i.seq)) && (i = e);
        return i;
    }
    background(e) {
        this.backgrounded.has(e) ||
            (this.backgrounded.set(e, { timer: this.armEviction(e, this.config.timeoutMs), condemned: !1 }),
            this.reconcileCondemned());
    }
    reconcileCondemned() {
        let e = this.backgrounded.size - this.config.maxBackgrounded,
            t = 0;
        for (let [i, n] of this.backgrounded) {
            let s = t < e;
            (s !== n.condemned &&
                (clearTimeout(n.timer),
                (n.timer = this.armEviction(i, s ? 3e3 : this.config.timeoutMs)),
                (n.condemned = s)),
                t++);
        }
    }
    armEviction(e, t) {
        return setTimeout(() => this.evict(e), t);
    }
    cancelBackground(e) {
        let t = this.backgrounded.get(e);
        null != t && (clearTimeout(t.timer), this.backgrounded.delete(e), this.reconcileCondemned());
    }
    evict(e) {
        (this.cancelBackground(e), this.destroyFrame(e));
    }
}
var r = i(281969),
    a = i(580954);
let o = { [s.A.Backstage]: 0, [s.A.WithinAppContent]: 1, [s.A.WithinCallContent]: 3, [s.A.AboveAppContent]: 1002 };
class c {
    _pool = null;
    setPool(e) {
        this._pool = e;
    }
    get pool() {
        if (null == this._pool) throw Error("FramePlacementStrategy: pool accessed before setPool");
        return this._pool;
    }
}
class h extends c {
    placed = new Map();
    rafHandle = null;
    initialize(e) {
        ((e.style.position = "fixed"),
            (e.style.top = "0"),
            (e.style.left = "0"),
            (e.style.pointerEvents = "none"),
            (e.style.display = "none"),
            this.pool.appendChild(e));
    }
    place(e, t, i) {
        (this.placed.set(e, { target: t, level: i }), this.position(e, t, i), this.ensureTicking());
    }
    unplace(e) {
        (this.placed.delete(e), (e.style.display = "none"));
    }
    ensureTicking() {
        null == this.rafHandle && (this.rafHandle = requestAnimationFrame(this.tick));
    }
    position(e, t, i) {
        let n = t.getBoundingClientRect();
        ((e.style.display = "block"),
            (e.style.zIndex = String(o[i])),
            (e.style.transform = `translate(${n.left}px, ${n.top}px)`),
            (e.style.width = `${n.width}px`),
            (e.style.height = `${n.height}px`));
    }
    tick = () => {
        for (let [e, { target: t, level: i }] of this.placed) this.position(e, t, i);
        this.rafHandle = this.placed.size > 0 ? requestAnimationFrame(this.tick) : null;
    };
}
class d extends c {
    initialize(e) {
        ((e.style.width = "100%"),
            (e.style.height = "100%"),
            (e.style.pointerEvents = "none"),
            (e.style.display = "none"),
            this.pool.appendChild(e));
    }
    place(e, t, i) {
        (e.parentElement !== t && t.moveBefore(e, null), (e.style.display = "block"));
    }
    unplace(e) {
        (e.parentElement !== this.pool && this.pool.moveBefore(e, null), (e.style.display = "none"));
    }
}
class p extends l {
    strategy = "function" == typeof Element.prototype.moveBefore ? new d() : new h();
    constructor() {
        super({ maxBackgrounded: 3, timeoutMs: 3e5 });
    }
    setPool(e) {
        this.strategy.setPool(e);
    }
    registerFrameEntry(e, t) {
        (this.strategy.initialize(t.container), super.registerFrameEntry(e, t));
    }
    removeFrameEntry(e) {
        let t = this.getFrameEntry(e);
        (super.removeFrameEntry(e), t?.container.remove(), (0, n.fS)(e) || r.A.removeFrame(e));
    }
    place(e, t, i) {
        let l = this.getFrameEntry(e);
        null != l &&
            (this.strategy.place(l.container, t, i), (0, n.fS)(e) || r.A.setFrameVisible(e, i !== s.A.Backstage));
    }
    unplace(e) {
        let t = this.getFrameEntry(e);
        null != t && (this.strategy.unplace(t.container), (0, n.fS)(e) || r.A.setFrameVisible(e, !1));
    }
    destroyFrame(e) {
        (0, n.fS)(e) ? (0, n.aQ)(e) : (0, a.A)().leaveFrame(e);
    }
}
let u = new p();
