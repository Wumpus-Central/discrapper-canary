n.d(t, {
    A: () => l,
}),
    n(896048);
var r = n(439372),
    i = n(954571),
    a = n(91242),
    s = n(652215);

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
class l extends r.A {
    constructor(...e) {
        super(...e),
            o(this, "actions", {
                RPC_APP_DISCONNECTED: (e) => {
                    this.handleRPCDisconnect(e);
                },
            }),
            o(this, "handleRPCDisconnect", (e) => {
                let { reason: t, application: n } = e,
                    r = n.id;
                if (null == r || null == t) return;
                let o = a.A.getConnectedFrame();
                (null == o ? void 0 : o.applicationId) === r &&
                    (this.leaveFrame({
                        applicationId: r,
                    }),
                    t.code !== s.YI$.CLOSE_NORMAL &&
                        (i.default.track(s.HAw.ACTIVITY_CLOSED_RPC_ERROR, {
                            rpc_close_code: t.code,
                            rpc_message: t.message,
                            application_id: r,
                        }),
                        this.showRPCDisconnectErrorUI(t)));
            });
    }
}
o(l, "displayName", "FramesManager");
