l.d(t, { A: () => c });
var i = l(256693),
    s = l(281969),
    n = l(580954),
    a = l(812901);
let r = { [a.A.Backstage]: -1, [a.A.WithinAppContent]: 0, [a.A.AboveAppContent]: 1 };
class o {
    strategy = (0, a.G)();
    entries = new Map();
    entryListeners = new Set();
    targets = new Map();
    backgrounded = new Map();
    attachSeq = 0;
    setPool(e) {
        this.strategy.setPool(e);
    }
    registerPoolEntry(e, t) {
        this.entries.set(e, t), this.strategy.initialize(t.container), this.reconcile(e), this.emitEntryChange();
    }
    removePoolEntry(e) {
        let t = this.entries.get(e);
        null != t && (this.strategy.unplace(t.container), t.container.remove()),
            this.entries.delete(e),
            this.targets.delete(e),
            this.cancelBackground(e),
            (0, i.fS)(e) || s.A.removeFrame(e),
            this.emitEntryChange();
    }
    getPoolEntry(e) {
        return this.entries.get(e) ?? null;
    }
    subscribeEntries(e) {
        return (
            this.entryListeners.add(e),
            () => {
                this.entryListeners.delete(e);
            }
        );
    }
    emitEntryChange() {
        for (let e of this.entryListeners) e();
    }
    registerFrameTarget(e, t, l) {
        let i = this.targets.get(e);
        null == i && ((i = new Map()), this.targets.set(e, i)),
            i.set(t, { target: t, level: l, seq: this.attachSeq++ }),
            this.reconcile(e);
    }
    removeFrameTarget(e, t) {
        let l = this.targets.get(e);
        null != l && l.delete(t) && this.reconcile(e);
    }
    reconcile(e) {
        let t = this.entries.get(e);
        if (null == t) return;
        let l = this.pickWinner(e);
        if (null == l) {
            this.strategy.unplace(t.container), this.background(e), (0, i.fS)(e) || s.A.setFrameVisible(e, !1);
            return;
        }
        this.cancelBackground(e),
            this.strategy.place(t.container, l.target, l.level),
            (0, i.fS)(e) || s.A.setFrameVisible(e, l.level !== a.A.Backstage);
    }
    pickWinner(e) {
        let t = this.targets.get(e);
        if (null == t) return null;
        let l = null;
        for (let e of t.values())
            (null == l || r[e.level] > r[l.level] || (r[e.level] === r[l.level] && e.seq > l.seq)) && (l = e);
        return l;
    }
    background(e) {
        if (!this.backgrounded.has(e))
            for (
                this.backgrounded.set(
                    e,
                    setTimeout(() => this.evict(e), 3e5),
                );
                this.backgrounded.size > 3;
            ) {
                let e = this.backgrounded.keys().next().value;
                if (null == e) break;
                this.evict(e);
            }
    }
    cancelBackground(e) {
        let t = this.backgrounded.get(e);
        null != t && (clearTimeout(t), this.backgrounded.delete(e));
    }
    evict(e) {
        (this.cancelBackground(e), (0, i.fS)(e)) ? (0, i.aQ)(e) : (0, n.A)().leaveFrame(e);
    }
}
let c = new o();
