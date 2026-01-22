n.d(t, {
    A: () => l,
}),
    n(896048);
var r = n(439372),
    i = n(287809),
    a = n(38050);

function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class o extends r.A {
    constructor(...e) {
        super(...e),
            s(this, "actions", {
                HAVEN_DISCONNECT: (e) => this.handleHavenDisconnect(e),
            }),
            s(this, "handleHavenDisconnect", (e) => {
                let t = i.default.getCurrentUser();
                e.userId === (null == t ? void 0 : t.id) && a.n.getState().resetPlayback();
            });
    }
}
let l = new o();
