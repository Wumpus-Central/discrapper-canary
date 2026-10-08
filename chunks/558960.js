a.d(t, { A: () => h });
var s = a(256693),
    l = a(343030);
class n {
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
    registerFrameTarget(e, t, a, s) {
        let l = this.targets.get(e);
        (null == l && ((l = new Map()), this.targets.set(e, l)),
            l.set(t, { target: t, level: a, seq: this.attachSeq++, state: s }),
            this.reconcile(e));
    }
    updateFrameTargetState(e, t, a) {
        let s = this.targets.get(e)?.get(t);
        null != s && s.state !== a && ((s.state = a), this.emitChange());
    }
    removeFrameTarget(e, t) {
        let a = this.targets.get(e);
        null != a && a.delete(t) && this.reconcile(e);
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
        let a = null;
        for (let e of t.values())
            (null == a || l.p[e.level] > l.p[a.level] || (l.p[e.level] === l.p[a.level] && e.seq > a.seq)) && (a = e);
        return a;
    }
    background(e) {
        this.backgrounded.has(e) ||
            (this.backgrounded.set(e, { timer: this.armEviction(e, this.config.timeoutMs), condemned: !1 }),
            this.reconcileCondemned());
    }
    reconcileCondemned() {
        let e = this.backgrounded.size - this.config.maxBackgrounded,
            t = 0;
        for (let [a, s] of this.backgrounded) {
            let l = t < e;
            (l !== s.condemned &&
                (clearTimeout(s.timer),
                (s.timer = this.armEviction(a, l ? 3e3 : this.config.timeoutMs)),
                (s.condemned = l)),
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
var i = a(281969),
    r = a(457827);
let o = { [l.A.Backstage]: 0, [l.A.WithinAppContent]: 1, [l.A.WithinCallContent]: 3, [l.A.AboveAppContent]: 1002 };
class d {
    _pool = null;
    setPool(e) {
        this._pool = e;
    }
    get pool() {
        if (null == this._pool) throw Error("FramePlacementStrategy: pool accessed before setPool");
        return this._pool;
    }
}
class c extends d {
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
    place(e, t, a) {
        (this.placed.set(e, { target: t, level: a }), this.position(e, t, a), this.ensureTicking());
    }
    unplace(e) {
        (this.placed.delete(e), (e.style.display = "none"));
    }
    ensureTicking() {
        null == this.rafHandle && (this.rafHandle = requestAnimationFrame(this.tick));
    }
    position(e, t, a) {
        let s = t.getBoundingClientRect();
        ((e.style.display = "block"),
            (e.style.zIndex = String(o[a])),
            (e.style.transform = `translate(${s.left}px, ${s.top}px)`),
            (e.style.width = `${s.width}px`),
            (e.style.height = `${s.height}px`));
    }
    tick = () => {
        for (let [e, { target: t, level: a }] of this.placed) this.position(e, t, a);
        this.rafHandle = this.placed.size > 0 ? requestAnimationFrame(this.tick) : null;
    };
}
class u extends d {
    initialize(e) {
        ((e.style.width = "100%"),
            (e.style.height = "100%"),
            (e.style.pointerEvents = "none"),
            (e.style.display = "none"),
            this.pool.appendChild(e));
    }
    place(e, t, a) {
        (e.parentElement !== t && t.moveBefore(e, null), (e.style.display = "block"));
    }
    unplace(e) {
        (e.parentElement !== this.pool && this.pool.moveBefore(e, null), (e.style.display = "none"));
    }
}
class p extends n {
    strategy = "function" == typeof Element.prototype.moveBefore ? new u() : new c();
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
        (super.removeFrameEntry(e), t?.container.remove(), (0, s.fS)(e) || i.A.removeFrame(e));
    }
    place(e, t, a) {
        let n = this.getFrameEntry(e);
        null != n &&
            (this.strategy.place(n.container, t, a), (0, s.fS)(e) || i.A.setFrameVisible(e, a !== l.A.Backstage));
    }
    unplace(e) {
        let t = this.getFrameEntry(e);
        null != t && (this.strategy.unplace(t.container), (0, s.fS)(e) || i.A.setFrameVisible(e, !1));
    }
    destroyFrame(e) {
        (0, s.fS)(e) ? (0, s.aQ)(e) : (0, r.r)(e);
    }
}
let h = new p();
