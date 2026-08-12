"use strict";
n.d(t, { A: () => o });
var i = n(256693),
    r = n(580954),
    a = n(812901);
let s = { [a.A.WithinAppContent]: 0, [a.A.AboveAppContent]: 1 };
class l {
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
    registerFrameTarget(e, t, n) {
        let i = this.targets.get(e);
        null == i && ((i = new Map()), this.targets.set(e, i)),
            i.set(t, { target: t, level: n, seq: this.attachSeq++ }),
            this.reconcile(e);
    }
    removeFrameTarget(e, t) {
        let n = this.targets.get(e);
        null != n && n.delete(t) && this.reconcile(e);
    }
    reconcile(e) {
        let t = this.entries.get(e);
        if (null == t) return;
        let n = this.pickWinner(e);
        if (null == n) {
            this.strategy.unplace(t.container), this.background(e);
            return;
        }
        this.cancelBackground(e), this.strategy.place(t.container, n.target, n.level);
    }
    pickWinner(e) {
        let t = this.targets.get(e);
        if (null == t) return null;
        let n = null;
        for (let e of t.values())
            (null == n || s[e.level] > s[n.level] || (s[e.level] === s[n.level] && e.seq > n.seq)) && (n = e);
        return n;
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
        (this.cancelBackground(e), (0, i.fS)(e)) ? (0, i.aQ)(e) : (0, r.A)().leaveFrame(e);
    }
}
let o = new l();
