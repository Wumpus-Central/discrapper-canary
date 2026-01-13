n.d(t, { Z: () => l }), n(388685);
var r = n(147913),
    i = n(626135),
    a = n(591472),
    o = n(981631);
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
class l extends r.Z {
    constructor(...e) {
        super(...e),
            s(this, "actions", {
                RPC_APP_DISCONNECTED: (e) => {
                    this.handleRPCDisconnect(e);
                },
            }),
            s(this, "handleRPCDisconnect", (e) => {
                let { reason: t, application: n } = e,
                    r = n.id;
                if (null == r || null == t) return;
                let s = a.Z.getConnectedFrame();
                (null == s ? void 0 : s.applicationId) === r &&
                    (this.leaveFrame({ applicationId: r }),
                    t.code !== o.$VG.CLOSE_NORMAL &&
                        (i.default.track(o.rMx.ACTIVITY_CLOSED_RPC_ERROR, {
                            rpc_close_code: t.code,
                            rpc_message: t.message,
                            application_id: r,
                        }),
                        this.showRPCDisconnectErrorUI(t)));
            });
    }
}
s(l, "displayName", "FramesManager");
