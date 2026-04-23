"use strict";
n.d(t, { A: () => d });
var i = n(439372),
    r = n(328153),
    s = n(495544),
    a = n(734066),
    o = n(696016);
class l extends i.A {
    callback = null;
    actions = { CLIPS_REMOTE_TRIGGER: (e) => this.handleRemoteClipTrigger(e) };
    registerCallback(e) {
        this.callback = e;
    }
    unregisterCallback() {
        this.callback = null;
    }
    handleRemoteClipTrigger(e) {
        let { userId: t, applicationId: n, partyId: i, remoteClipId: l } = e;
        (0, a.J)() &&
            t !== s.default.getId() &&
            (o.nx.info("Received remote clip trigger", { userId: t, applicationId: n, partyId: i }),
            null == r.Ay.getVisibleRunningGames().find((e) => e.id === n) || (null != l && this.callback?.(t, l)));
    }
}
let d = new l();
