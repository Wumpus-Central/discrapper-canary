n.d(t, {
    A: () => D,
});
var r = n(627968),
    i = n(311907),
    a = n(195043),
    s = n(628965),
    o = n(740625),
    l = n(524738),
    c = n(378631),
    u = n(962789),
    d = n(476009),
    f = n(585052),
    p = n(831320),
    _ = n(965563),
    h = n(320134),
    m = n(604151),
    g = n(638130),
    E = n(389242),
    b = n(772538),
    y = n(61610),
    O = n(751461),
    A = n(638324),
    v = n(428854),
    S = n(531525),
    I = n(190363),
    T = n(652215),
    C = n(985018);
let N = () =>
        (0, r.jsxs)(h.A, {
            title: C.intl.string(C.t.xVRG4P),
            webSetting: S.H.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            children: [
                (0, r.jsx)(g.f, {}),
                (0, r.jsx)(f.A, {}),
                (0, r.jsx)(d.A, {}),
                (0, r.jsx)(c.A, {}),
                (0, r.jsx)(E.A, {}),
            ],
        }),
    R = () =>
        (0, r.jsxs)(h.A, {
            title: C.intl.string(C.t["y62Z/d"]),
            webSetting: S.H.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            children: [
                (0, r.jsx)(a.x, {
                    setting: S.H.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                    children: (0, r.jsx)(_.A, {}),
                }),
                (0, r.jsx)(O.A, {}),
                (0, r.jsx)(A.A, {}),
                (0, r.jsx)(y.A, {}),
                (0, r.jsx)(b.A, {}),
            ],
        }),
    w = () =>
        (0, r.jsxs)(h.A, {
            title: C.intl.string(C.t["1Qn8iV"]),
            webSetting: S.H.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
            children: [(0, r.jsx)(p.A, {}), (0, r.jsx)(m.Ay, {})],
        }),
    P = () =>
        (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(N, {}), (0, r.jsx)(R, {}), (0, r.jsx)(w, {})],
        });

function D() {
    let e = (0, i.bG)([s.A], () => s.A.getSubsection()),
        t = [
            {
                title: C.intl.string(C.t["/7xJCF"]),
                component: P,
                setting: S.H.CONTENT_SOCIAL_DISCORD_TAB,
            },
            {
                title: C.intl.string(C.t.YpCiMt),
                component: u.A,
                setting: S.H.CONTENT_SOCIAL_CONNECTED_GAMES,
            },
        ];
    return (0, r.jsx)(o.R, {
        header: C.intl.string(C.t["+o1pDZ"]),
        notice: (0, r.jsx)(v.A, {
            page: v.R.CONTENT_AND_SOCIAL,
        }),
        children: (0, r.jsx)(l.A, {
            parentSetting: S.H.CONTENT_SOCIAL,
            settingsSection: T.nc_.CONTENT_AND_SOCIAL,
            tabs: t,
            defaultTabIndex: e === I.k ? 1 : void 0,
        }),
    });
}
