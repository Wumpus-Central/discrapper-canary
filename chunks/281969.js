i.d(t, { A: () => s });
class n {
    visibility = new Map();
    listeners = new Set();
    isFramePooled(e) {
        return this.visibility.has(e);
    }
    isFrameVisible(e) {
        return !1 !== this.visibility.get(e);
    }
    subscribe(e) {
        return (
            this.listeners.add(e),
            () => {
                this.listeners.delete(e);
            }
        );
    }
    setFrameVisible(e, t) {
        this.visibility.get(e) !== t && (this.visibility.set(e, t), this.emit());
    }
    removeFrame(e) {
        this.visibility.delete(e) && this.emit();
    }
    emit() {
        for (let e of this.listeners) e();
    }
}
let s = new n();
