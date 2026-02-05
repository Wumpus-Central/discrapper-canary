n.d(t, { A: () => L });
var i = n(627968),
    l = n(311907),
    s = n(195043),
    a = n(628965),
    r = n(740625),
    o = n(524738),
    d = n(378631),
    c = n(962789),
    u = n(476009),
    h = n(585052),
    A = n(831320),
    g = n(965563),
    m = n(320134),
    p = n(604151),
    _ = n(638130),
    x = n(389242),
    f = n(772538),
    E = n(61610),
    C = n(751461),
    I = n(638324),
    S = n(428854),
    b = n(531525),
    N = n(190363),
    T = n(652215),
    j = n(985018);
let v = () =>
        (0, i.jsxs)(m.A, {
            title: j.intl.string(j.t.xVRG4P),
            webSetting: b.H.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            children: [
                (0, i.jsx)(_.f, {}),
                (0, i.jsx)(h.A, {}),
                (0, i.jsx)(u.A, {}),
                (0, i.jsx)(d.A, {}),
                (0, i.jsx)(x.A, {}),
            ],
        }),
    y = () =>
        (0, i.jsxs)(m.A, {
            title: j.intl.string(j.t["y62Z/d"]),
            webSetting: b.H.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            children: [
                (0, i.jsx)(s.x, { setting: b.H.PRIVACY_AND_SAFETY_SERVER_SELECTOR, children: (0, i.jsx)(g.A, {}) }),
                (0, i.jsx)(C.A, {}),
                (0, i.jsx)(I.A, {}),
                (0, i.jsx)(E.A, {}),
                (0, i.jsx)(f.A, {}),
            ],
        }),
    R = () =>
        (0, i.jsxs)(m.A, {
            title: j.intl.string(j.t["1Qn8iV"]),
            webSetting: b.H.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
            children: [(0, i.jsx)(A.A, {}), (0, i.jsx)(p.Ay, {})],
        }),
    O = () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(v, {}), (0, i.jsx)(y, {}), (0, i.jsx)(R, {})] });
function L() {
    let e = (0, l.bG)([a.A], () => a.A.getSubsection()),
        t = [
            { title: j.intl.string(j.t["/7xJCF"]), component: O, setting: b.H.CONTENT_SOCIAL_DISCORD_TAB },
            { title: j.intl.string(j.t.YpCiMt), component: c.A, setting: b.H.CONTENT_SOCIAL_CONNECTED_GAMES },
        ];
    return (0, i.jsx)(r.R, {
        header: j.intl.string(j.t["+o1pDZ"]),
        notice: (0, i.jsx)(S.A, { page: S.R.CONTENT_AND_SOCIAL }),
        children: (0, i.jsx)(o.A, {
            parentSetting: b.H.CONTENT_SOCIAL,
            settingsSection: T.nc_.CONTENT_AND_SOCIAL,
            tabs: t,
            defaultTabIndex: e === N.k ? 1 : void 0,
        }),
    });
}
