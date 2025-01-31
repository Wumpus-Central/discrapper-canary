n.d(t, { Z: () => a }), n(47120), n(653041);
var i = n(570140);
function r(e, t, n) {
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
class a {
    static flush(e, t) {
        for (let n of a.batchers) null != n.action && (null == e || n.shouldFlush(e, t)) && n.flush();
    }
    flush() {
        let { action: e } = this;
        (this.action = null),
            null != e &&
                i.Z.dispatch(e).catch((t) =>
                    this.socket.resetSocketOnError({
                        error: t,
                        action: e.type
                    })
                );
    }
    constructor(e, t, n) {
        r(this, 'socket', void 0),
            r(this, 'action', void 0),
            r(this, 'add', void 0),
            r(this, 'shouldFlush', void 0),
            (this.socket = e),
            (this.action = null),
            (this.shouldFlush = n),
            (this.add = (e) => {
                this.action = t(this.action, e);
            }),
            a.batchers.push(this);
    }
}
r(a, 'batchers', []);
