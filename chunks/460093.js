n.d(t, { Z: () => _ }), n(388685);
var r = n(481060),
    i = n(147913),
    a = n(626135),
    o = n(48131),
    s = n(591472),
    l = n(981631),
    c = n(388032);
function u(e, t, n) {
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
function d(e) {
    let { reason: t, application: n } = e,
        r = n.id;
    if (null == r || null == t) return;
    let i = s.Z.getConnectedFrame();
    (null == i ? void 0 : i.applicationId) === r &&
        (o.Z.stopFrame({ applicationId: r }),
        t.code !== l.$VG.CLOSE_NORMAL &&
            (a.default.track(l.rMx.ACTIVITY_CLOSED_RPC_ERROR, {
                rpc_close_code: t.code,
                rpc_message: t.message,
                application_id: r,
            }),
            f(t)));
}
function f(e) {
    let { code: t, message: n } = e,
        i = "".concat(c.intl.formatToPlainString(c.t.hbiAO6, { code: t }), ": ").concat(n);
    (0, r.showToast)((0, r.createToast)(i, r.ToastType.FAILURE));
}
class p extends i.Z {
    constructor(...e) {
        super(...e),
            u(this, "actions", {
                RPC_APP_DISCONNECTED: (e) => {
                    d(e);
                },
            });
    }
}
u(p, "displayName", "FramesManager");
let _ = new p();
