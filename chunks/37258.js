r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    o = r(40851),
    s = r(906732),
    l = r(785717),
    u = r(171368),
    c = r(981631),
    d = r(388032);
function f(e) {
    let { label: n, onAction: r, ...f } = e,
        { analyticsLocations: p } = (0, s.ZP)(),
        { context: h } = (0, l.KZ)(),
        _ = (0, o.Aq)();
    return (0, i.jsx)(a.MenuItem, {
        id: 'user-profile',
        label: null != n ? n : d.intl.string(d.t.LYju5O),
        action: () => {
            null == r || r(),
                (0, u.openUserProfileModal)({
                    sourceAnalyticsLocations: p,
                    ...h,
                    ...f
                }),
                _.dispatch(c.CkL.POPOUT_CLOSE);
        }
    });
}
