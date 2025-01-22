r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(47120);
var a = r(653041);
var o = r(570140);
function s(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class l {
    static flush(e, n) {
        for (let r of l.batchers) null != r.action && (null == e || r.shouldFlush(e, n)) && r.flush();
    }
    flush() {
        let { action: e } = this;
        (this.action = null),
            null != e &&
                o.Z.dispatch(e).catch((n) =>
                    this.socket.resetSocketOnError({
                        error: n,
                        action: e.type
                    })
                );
    }
    constructor(e, n, r) {
        s(this, 'socket', void 0),
            s(this, 'action', void 0),
            s(this, 'add', void 0),
            s(this, 'shouldFlush', void 0),
            (this.socket = e),
            (this.action = null),
            (this.shouldFlush = r),
            (this.add = (e) => {
                this.action = n(this.action, e);
            }),
            l.batchers.push(this);
    }
}
s(l, 'batchers', []);
