i.d(t, { A: () => c });
var n = i(256693),
    s = i(281969),
    l = i(580954),
    r = i(812901);
let a = { [r.A.Backstage]: -1, [r.A.WithinAppContent]: 0, [r.A.AboveAppContent]: 1 };
class o {
    strategy = (0, r.G)();
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
            (0, n.fS)(e) || s.A.removeFrame(e),
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
    registerFrameTarget(e, t, i) {
        let n = this.targets.get(e);
        null == n && ((n = new Map()), this.targets.set(e, n)),
            n.set(t, { target: t, level: i, seq: this.attachSeq++ }),
            this.reconcile(e);
    }
    removeFrameTarget(e, t) {
        let i = this.targets.get(e);
        null != i && i.delete(t) && this.reconcile(e);
    }
    reconcile(e) {
        let t = this.entries.get(e);
        if (null == t) return;
        let i = this.pickWinner(e);
        if (null == i) {
            this.strategy.unplace(t.container), this.background(e), (0, n.fS)(e) || s.A.setFrameVisible(e, !1);
            return;
        }
        this.cancelBackground(e),
            this.strategy.place(t.container, i.target, i.level),
            (0, n.fS)(e) || s.A.setFrameVisible(e, i.level !== r.A.Backstage);
    }
    pickWinner(e) {
        let t = this.targets.get(e);
        if (null == t) return null;
        let i = null;
        for (let e of t.values())
            (null == i || a[e.level] > a[i.level] || (a[e.level] === a[i.level] && e.seq > i.seq)) && (i = e);
        return i;
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
        (this.cancelBackground(e), (0, n.fS)(e)) ? (0, n.aQ)(e) : (0, l.A)().leaveFrame(e);
    }
}
let c = new o();
