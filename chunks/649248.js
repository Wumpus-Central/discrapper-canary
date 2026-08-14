l.d(t, { A: () => o });
var n = l(256693),
    a = l(580954),
    i = l(812901);
let s = { [i.A.WithinAppContent]: 0, [i.A.AboveAppContent]: 1 };
class r {
    strategy = (0, i.G)();
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
        let n = this.targets.get(e);
        null == n && ((n = new Map()), this.targets.set(e, n)),
            n.set(t, { target: t, level: l, seq: this.attachSeq++ }),
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
            this.strategy.unplace(t.container), this.background(e);
            return;
        }
        this.cancelBackground(e), this.strategy.place(t.container, l.target, l.level);
    }
    pickWinner(e) {
        let t = this.targets.get(e);
        if (null == t) return null;
        let l = null;
        for (let e of t.values())
            (null == l || s[e.level] > s[l.level] || (s[e.level] === s[l.level] && e.seq > l.seq)) && (l = e);
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
        (this.cancelBackground(e), (0, n.fS)(e)) ? (0, n.aQ)(e) : (0, a.A)().leaveFrame(e);
    }
}
let o = new r();
