"use strict";
n.d(t, { A: () => p });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(573648),
    s = n(688810),
    o = n(882997),
    l = n(962173),
    u = n(939496),
    c = n(993401),
    d = n(652215),
    _ = n(996988),
    f = n(985018);
function p(e) {
    let { platformType: t, icon: n, onAction: p } = e,
        { newestAnalyticsLocation: h } = (0, s.Ay)(),
        { themeType: m } = (0, u.E)(),
        g = m === _.d.MODAL_V2;
    if ((0, i.bG)([l.A], () => null != l.A.getAccount(null, t))) return null;
    let E = (e) => {
        e.stopPropagation();
        let n = t === d.fg2.XBOX;
        p?.({ action: n ? "PRESS_CONNECT_XBOX_BUTTON" : "PRESS_CONNECT_PLAYSTATION_BUTTON" }),
            (0, o.A)({ platformType: t, location: h });
    };
    return (0, r.jsx)(c.FD, {
        icon: n,
        text: f.intl.formatToPlainString(f.t.XWSHTb, { platform: a.A.get(t).name }),
        fullWidth: !g,
        onClick: E,
    });
}
