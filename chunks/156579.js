n.d(t, {
    A: () => p,
});
var r = n(627968);
n(64700);
var l = n(417597),
    i = n(87001),
    a = n(811024),
    s = n(933958),
    o = n(969151),
    c = n(108959),
    u = n(829861),
    d = n(5867),
    f = n(652215);

function p(e) {
    let { maxHeight: t, renderExternalHeader: n } = e,
        {
            connectedChannelId: p,
            connectedActivity: h,
            activityPanelMode: b,
        } = (0, l.cf)([s.Ay], () => {
            let e = s.Ay.getConnectedActivityLocation(),
                t = s.Ay.getSelfEmbeddedActivityForLocation(e);
            return {
                connectedChannelId: (0, o.H)(e),
                connectedActivity: t,
                activityPanelMode: s.Ay.getActivityPanelMode(),
            };
        }),
        g = (0, l.bG)([i.A], () => i.A.getWindowOpen(f.MLl.ACTIVITY_POPOUT));
    if (!(0, a.Gp)(p)) return null;
    let m = null == h ? void 0 : h.applicationId;
    return b !== d.Gd.PANEL || null == m || g || null == p || null == h || (0, c.A)(p)
        ? null
        : (0, r.jsx)(u.A, {
              maxHeight: t,
              connectedLocation: h.location,
              renderExternalHeader: n,
          });
}
