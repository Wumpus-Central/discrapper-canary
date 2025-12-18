n.d(t, { Z: () => l }), n(388685);
var r = n(147913),
    i = n(594174),
    a = n(627097);
function o(e, t, n) {
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
class s extends r.Z {
    constructor(...e) {
        super(...e),
            o(this, "actions", { HAVEN_DISCONNECT: (e) => this.handleHavenDisconnect(e) }),
            o(this, "handleHavenDisconnect", (e) => {
                let t = i.default.getCurrentUser();
                e.userId === (null == t ? void 0 : t.id) && a.O.getState().resetPlayback();
            });
    }
}
let l = new s();
