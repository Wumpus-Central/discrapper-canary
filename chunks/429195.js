"use strict";
n.d(t, { A: () => u });
var i = n(439372),
    r = n(328153),
    s = n(616356),
    a = n(495544),
    o = n(734066),
    l = n(572164),
    _ = n(696016);
class d extends i.A {
    callback = null;
    actions = { CLIPS_REMOTE_TRIGGER: (e) => this.handleRemoteClipTrigger(e) };
    registerCallback(e) {
        this.callback = e;
    }
    unregisterCallback() {
        this.callback = null;
    }
    handleRemoteClipTrigger(e) {
        let { userId: t, applicationId: n, partyId: i, remoteClipId: d } = e;
        !(0, o.J)() ||
            t === a.default.getId() ||
            (_.nx.info("Received remote clip trigger", { userId: t, applicationId: n, partyId: i }),
            null == r.Ay.getVisibleRunningGames().find((e) => e.id === n) ||
                (null != s.A.getCurrentUserActiveStream() && s.A.getStreamerActiveStreamMetadata()?.id !== n) ||
                ((null != s.A.getCurrentUserActiveStream() || (0, l.Ao)()) && this.callback?.(t, d)));
    }
}
let u = new d();
