n.d(t, {
    A: () => _,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(573648),
    s = n(688810),
    o = n(882997),
    l = n(962173),
    c = n(939496),
    u = n(993401),
    d = n(652215),
    f = n(996988),
    p = n(985018);

function _(e) {
    let { platformType: t, icon: n, onAction: _ } = e,
        { newestAnalyticsLocation: h } = (0, s.Ay)(),
        { themeType: m } = (0, c.E)(),
        g = m === f.d.MODAL_V2;
    if ((0, i.bG)([l.A], () => null != l.A.getAccount(null, t))) return null;
    let E = (e) => {
        e.stopPropagation();
        let n = t === d.fg2.XBOX;
        null == _ ||
            _({
                action: n ? "PRESS_CONNECT_XBOX_BUTTON" : "PRESS_CONNECT_PLAYSTATION_BUTTON",
            }),
            (0, o.A)({
                platformType: t,
                location: h,
            });
    };
    return (0, r.jsx)(u.FD, {
        icon: n,
        text: p.intl.formatToPlainString(p.t.XWSHTb, {
            platform: a.A.get(t).name,
        }),
        fullWidth: !g,
        onClick: E,
    });
}
