t.d(l, { A: () => g });
var i = t(439372),
    a = t(15285),
    r = t(961350),
    s = t(461213),
    n = t(734066),
    c = t(652215);
class d extends i.A {
    callback = null;
    actions = { CLIPS_REMOTE_TRIGGER: (e) => this.handleRemoteClipTrigger(e) };
    registerCallback(e) {
        this.callback = e;
    }
    unregisterCallback() {
        this.callback = null;
    }
    handleRemoteClipTrigger(e, l) {
        let { userId: t, applicationId: i, partyId: d } = e;
        if (!(0, n.J)() || t === r.default.getId()) return;
        let g = s.A.getActivities().find(
                (e) => e.type === c.$pd.PLAYING && null != e.application_id && e.application_id === i,
            ),
            p = a.Ay.getVisibleGame(),
            u = null != g,
            h = p?.id === i;
        (u || h) && (null == d || g?.party?.id === d) && null != this.callback && null != l && this.callback(t, l);
    }
}
let g = new d();
