"use strict";
n.d(t, { A: () => d });
var i = n(439372),
    r = n(952818),
    s = n(616356),
    a = n(495544),
    o = n(458977),
    l = n(572164),
    u = n(696016);
class c extends i.A {
    callback = null;
    actions = { CLIPS_REMOTE_TRIGGER: (e) => this.handleRemoteClipTrigger(e) };
    registerCallback(e) {
        this.callback = e;
    }
    unregisterCallback() {
        this.callback = null;
    }
    handleRemoteClipTrigger(e) {
        let { userId: t, applicationId: n, partyId: i, remoteClipId: c } = e;
        !o.A.getConfig({ location: "maybeSendRemoteClipTrigger" }).enableDistributedClips ||
            t === a.default.getId() ||
            (u.nx.info("Received remote clip trigger", { userId: t, applicationId: n, partyId: i }),
            null == r.Ay.getVisibleRunningGames().find((e) => e.id === n) ||
                (null != s.A.getCurrentUserActiveStream() && s.A.getStreamerActiveStreamMetadata()?.id !== n) ||
                ((null != s.A.getCurrentUserActiveStream() || (0, l.Ao)()) && this.callback?.(t, c)));
    }
}
let d = new c();
