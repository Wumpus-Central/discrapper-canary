function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
n.d(t, { I: () => r });
class r {
    schedule(e, t) {
        this.unschedule(),
            (this.timeoutId = setTimeout(() => {
                (this.timeoutId = null), e();
            }, t));
    }
    unschedule() {
        this.scheduled() && (clearTimeout(this.timeoutId), (this.timeoutId = null));
    }
    scheduled() {
        return null !== this.timeoutId;
    }
    constructor() {
        i(this, 'timeoutId', null);
    }
}
