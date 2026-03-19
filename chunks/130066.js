n.d(t, { A: () => L });
var i = n(627968),
    s = n(311907),
    l = n(195043),
    a = n(628965),
    r = n(740625),
    o = n(524738),
    d = n(378631),
    c = n(962789),
    u = n(476009),
    _ = n(585052),
    m = n(831320),
    g = n(965563),
    A = n(320134),
    x = n(604151),
    h = n(638130),
    p = n(389242),
    T = n(772538),
    E = n(61610),
    S = n(751461),
    C = n(638324),
    f = n(998337),
    b = n(531525),
    N = n(190363),
    I = n(652215),
    v = n(985018);
let j = () =>
        (0, i.jsxs)(A.A, {
            title: v.intl.string(v.t.xVRG4P),
            webSetting: b.Ho.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            children: [
                (0, i.jsx)(h.f, {}),
                (0, i.jsx)(_.A, {}),
                (0, i.jsx)(u.A, {}),
                (0, i.jsx)(d.A, {}),
                (0, i.jsx)(p.A, {}),
            ],
        }),
    y = () =>
        (0, i.jsxs)(A.A, {
            title: v.intl.string(v.t["y62Z/d"]),
            webSetting: b.Ho.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            children: [
                (0, i.jsx)(l.x, { setting: b.Ho.PRIVACY_AND_SAFETY_SERVER_SELECTOR, children: (0, i.jsx)(g.A, {}) }),
                (0, i.jsx)(S.A, {}),
                (0, i.jsx)(C.A, {}),
                (0, i.jsx)(E.A, {}),
                (0, i.jsx)(T.A, {}),
            ],
        }),
    R = () =>
        (0, i.jsxs)(A.A, {
            title: v.intl.string(v.t["1Qn8iV"]),
            webSetting: b.Ho.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
            children: [(0, i.jsx)(m.A, {}), (0, i.jsx)(x.Ay, {})],
        }),
    O = () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(j, {}), (0, i.jsx)(y, {}), (0, i.jsx)(R, {})] });
function L() {
    let e = (0, s.bG)([a.A], () => a.A.getSubsection()),
        t = [
            { title: v.intl.string(v.t["/7xJCF"]), component: O, setting: b.Ho.CONTENT_SOCIAL_DISCORD_TAB },
            { title: v.intl.string(v.t.YpCiMt), component: c.A, setting: b.Ho.CONTENT_SOCIAL_CONNECTED_GAMES },
        ];
    return (0, i.jsx)(r.R, {
        header: v.intl.string(v.t["+o1pDZ"]),
        notice: (0, i.jsx)(f.A, { page: f.R.CONTENT_AND_SOCIAL }),
        children: (0, i.jsx)(o.A, {
            parentSetting: b.Ho.CONTENT_SOCIAL,
            settingsSection: I.nc_.CONTENT_AND_SOCIAL,
            tabs: t,
            defaultTabIndex: e === N.k ? 1 : void 0,
        }),
    });
}
