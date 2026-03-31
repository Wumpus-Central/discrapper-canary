n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var l = n(417597),
    s = n(87001),
    a = n(811024),
    r = n(933958),
    o = n(969151),
    c = n(108959),
    d = n(829861),
    u = n(5867),
    h = n(652215);
function A(e) {
    let { maxHeight: t, renderExternalHeader: n } = e,
        {
            connectedChannelId: A,
            connectedActivity: _,
            activityPanelMode: m,
        } = (0, l.cf)([r.Ay], () => {
            let e = r.Ay.getConnectedActivityLocation(),
                t = r.Ay.getSelfEmbeddedActivityForLocation(e);
            return {
                connectedChannelId: (0, o.H)(e),
                connectedActivity: t,
                activityPanelMode: r.Ay.getActivityPanelMode(),
            };
        }),
        g = (0, l.bG)([s.A], () => s.A.getWindowOpen(h.MLl.ACTIVITY_POPOUT));
    if (!(0, a.Gp)(A)) return null;
    let p = _?.applicationId;
    return m !== u.Gd.PANEL || null == p || g || null == A || null == _ || (0, c.A)(A)
        ? null
        : (0, i.jsx)(d.A, { maxHeight: t, connectedLocation: _.location, renderExternalHeader: n });
}
