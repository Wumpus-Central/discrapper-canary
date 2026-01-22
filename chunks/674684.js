n.d(t, {
    A: () => d,
}),
    n(896048);
var r = n(442433),
    i = n(439372),
    a = n(267102),
    s = n(712687),
    o = n(203982),
    l = n(652215);

function c(e, t, n) {
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
class u extends i.A {
    constructor(...e) {
        super(...e),
            c(this, "actions", {
                OVERLAY_SET_INPUT_LOCKED: () => {
                    null != s.A.getContextMenu() && (0, r.Z_)();
                    let e = (0, a.rH)();
                    null != e && e.windowDispatch.dispatch(l.jej.POPOUT_CLOSE), o._.dispatch(l.jej.MODAL_CLOSE);
                },
            });
    }
}
let d = new u();
