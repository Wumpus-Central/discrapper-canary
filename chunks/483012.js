n.d(t, { Z: () => o }), n(47120), n(653041);
var r = n(570140);
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
class o {
    static flush(e, t) {
        for (let n of o.batchers) null != n.action && (null == e || n.shouldFlush(e, t)) && n.flush();
    }
    flush() {
        let { action: e } = this;
        (this.action = null),
            null != e &&
                r.Z.dispatch(e).catch((t) =>
                    this.socket.resetSocketOnError({
                        error: t,
                        action: e.type
                    })
                );
    }
    constructor(e, t, n) {
        i(this, 'socket', void 0),
            i(this, 'action', void 0),
            i(this, 'add', void 0),
            i(this, 'shouldFlush', void 0),
            (this.socket = e),
            (this.action = null),
            (this.shouldFlush = n),
            (this.add = (e) => {
                this.action = t(this.action, e);
            }),
            o.batchers.push(this);
    }
}
i(o, 'batchers', []);
