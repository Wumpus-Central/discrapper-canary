n.d(t, { A: () => d });
var i = n(256693),
    s = n(343030);
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
    registerFrameTarget(e, t, n, i) {
        let s = this.targets.get(e);
        (null == s && ((s = new Map()), this.targets.set(e, s)),
            s.set(t, { target: t, level: n, seq: this.attachSeq++, state: i }),
            this.reconcile(e));
    }
    updateFrameTargetState(e, t, n) {
        let i = this.targets.get(e)?.get(t);
        null != i && i.state !== n && ((i.state = n), this.emitChange());
    }
    removeFrameTarget(e, t) {
        let n = this.targets.get(e);
        null != n && n.delete(t) && this.reconcile(e);
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
        let n = null;
        for (let e of t.values())
            (null == n || s.p[e.level] > s.p[n.level] || (s.p[e.level] === s.p[n.level] && e.seq > n.seq)) && (n = e);
        return n;
    }
    background(e) {
        this.backgrounded.has(e) ||
            (this.backgrounded.set(e, { timer: this.armEviction(e, this.config.timeoutMs), condemned: !1 }),
            this.reconcileCondemned());
    }
    reconcileCondemned() {
        let e = this.backgrounded.size - this.config.maxBackgrounded,
            t = 0;
        for (let [n, i] of this.backgrounded) {
            let s = t < e;
            (s !== i.condemned &&
                (clearTimeout(i.timer),
                (i.timer = this.armEviction(n, s ? 3e3 : this.config.timeoutMs)),
                (i.condemned = s)),
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
var r = n(73153);
function a(e, t) {
    r.h.dispatch({ type: "FRAME_POOL_VISIBILITY_UPDATE", frameId: e, poolVisibility: t });
}
var o = n(457827),
    c = n(812901);
class h extends l {
    strategy = (0, c.G)();
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
        (super.removeFrameEntry(e), t?.container.remove(), (0, i.fS)(e) || a(e, "unpooled"));
    }
    place(e, t, n) {
        let l = this.getFrameEntry(e);
        null != l &&
            (this.strategy.place(l.container, t, n), (0, i.fS)(e) || a(e, n !== s.A.Backstage ? "visible" : "hidden"));
    }
    unplace(e) {
        let t = this.getFrameEntry(e);
        null != t && (this.strategy.unplace(t.container), (0, i.fS)(e) || a(e, "hidden"));
    }
    destroyFrame(e) {
        (0, i.fS)(e) ? (0, i.aQ)(e) : (0, o.r)(e);
    }
}
let d = new h();
