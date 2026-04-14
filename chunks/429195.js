"use strict";
n.d(t, { A: () => d });
var r = n(439372),
    i = n(15285),
    s = n(961350),
    a = n(461213),
    o = n(734066),
    l = n(696016),
    u = n(652215);
class c extends r.A {
    callback = null;
    actions = { CLIPS_REMOTE_TRIGGER: (e) => this.handleRemoteClipTrigger(e) };
    registerCallback(e) {
        this.callback = e;
    }
    unregisterCallback() {
        this.callback = null;
    }
    handleRemoteClipTrigger(e, t) {
        let { userId: n, applicationId: r, partyId: c } = e;
        if (!(0, o.J)() || n === s.default.getId()) return;
        l.nx.info("Received remote clip trigger", { userId: n, applicationId: r, partyId: c, triggerClipId: t });
        let d = a.A.getActivities().find(
                (e) => e.type === u.$pd.PLAYING && null != e.application_id && e.application_id === r,
            ),
            _ = i.Ay.getVisibleGame(),
            f = null != d,
            p = _?.id === r;
        (f || p) && (null == c || d?.party?.id === c) && null != this.callback && null != t && this.callback(n, t);
    }
}
let d = new c();
