n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(40851),
    s = n(906732),
    o = n(785717),
    l = n(171368),
    u = n(981631),
    c = n(388032);
function d(e) {
    let { label: t, onAction: n, ...d } = e,
        { analyticsLocations: f } = (0, s.ZP)(),
        { context: _ } = (0, o.KZ)(),
        p = (0, a.Aq)();
    return (0, i.jsx)(r.sNh, {
        id: 'user-profile',
        label: null != t ? t : c.intl.string(c.t.LYju5O),
        action: () => {
            null == n || n(),
                (0, l.openUserProfileModal)({
                    sourceAnalyticsLocations: f,
                    ..._,
                    ...d
                }),
                p.dispatch(u.CkL.POPOUT_CLOSE);
        }
    });
}
