n.d(t, { A: () => u });
var i = n(439372),
    r = n(952818),
    a = n(616356),
    s = n(280450),
    l = n(458977),
    o = n(572164),
    d = n(696016);
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
        !l.A.getConfig({ location: "maybeSendRemoteClipTrigger" }).enableDistributedClips ||
            t === s.default.getId() ||
            (d.nx.info("Received remote clip trigger", { userId: t, applicationId: n, partyId: i }),
            null != r.Ay.getVisibleRunningGames().find((e) => e.id === n) &&
                (0, o.T)() &&
                (null == a.A.getCurrentUserActiveStream() || a.A.getStreamerActiveStreamMetadata()?.id === n) &&
                this.callback?.(t, c));
    }
}
let u = new c();
