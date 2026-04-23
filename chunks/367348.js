"use strict";
n.d(t, { A: () => o });
var r = n(439372),
    i = n(954571),
    s = n(91242),
    a = n(652215);
class o extends r.A {
    static displayName = "FramesManager";
    actions = {
        RPC_APP_DISCONNECTED: (e) => {
            this.handleRPCDisconnect(e);
        },
    };
    handleRPCDisconnect = (e) => {
        let { reason: t, application: n } = e,
            r = n.id;
        if (null == r || null == t) return;
        let o = s.A.getConnectedFrame();
        o?.applicationId === r &&
            (this.leaveFrame({ applicationId: r }),
            t.code !== a.YI$.CLOSE_NORMAL &&
                (i.default.track(a.HAw.ACTIVITY_CLOSED_RPC_ERROR, {
                    rpc_close_code: t.code,
                    rpc_message: t.message,
                    application_id: r,
                }),
                this.showRPCDisconnectErrorUI(t)));
    };
}
