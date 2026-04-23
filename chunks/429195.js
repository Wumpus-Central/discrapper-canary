"use strict";
n.d(t, { A: () => u });
var r = n(439372),
    i = n(15285),
    s = n(961350),
    a = n(734066),
    o = n(696016);
class l extends r.A {
    callback = null;
    actions = { CLIPS_REMOTE_TRIGGER: (e) => this.handleRemoteClipTrigger(e) };
    registerCallback(e) {
        this.callback = e;
    }
    unregisterCallback() {
        this.callback = null;
    }
    handleRemoteClipTrigger(e) {
        let { userId: t, applicationId: n, partyId: r, remoteClipId: l } = e;
        (0, a.J)() &&
            t !== s.default.getId() &&
            (o.nx.info("Received remote clip trigger", { userId: t, applicationId: n, partyId: r }),
            null == i.Ay.getVisibleRunningGames().find((e) => e.id === n) || (null != l && this.callback?.(t, l)));
    }
}
let u = new l();
