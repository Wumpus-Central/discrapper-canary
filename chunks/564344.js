n.d(t, { Z: () => N });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(503089),
    u = n(18438),
    d = n(778825),
    f = n(851894),
    p = n(484459),
    _ = n(10298),
    m = n(216045),
    h = n(839469),
    g = n(25990),
    E = n(594174),
    b = n(585483),
    y = n(16703),
    O = n(785145),
    v = n(981631),
    S = n(647086),
    I = n(526761),
    T = n(726985),
    C = n(388032),
    A = n(37149);
function N() {
    let e = (0, s.e7)([d.Z], () => d.Z.getGuild()),
        t = (0, y.Z)(),
        n = (0, s.e7)([d.Z, g.Z], () => d.Z.showNotice() || g.Z.showNotice()),
        a = null != e ? e : t,
        N = (0, s.e7)([E.default], () => E.default.getCurrentUser()),
        { subsection: P, setSubsection: R } = (0, O.Z)(),
        w = h.R.useField("hasSearchResults"),
        D = h.R.useField("searchResults");
    function x(t) {
        if (P !== t) {
            if (n) {
                b.S.dispatch(v.CkL.SHAKE_APP, {
                    duration: 300,
                    intensity: c.$x,
                }),
                    b.S.dispatch(v.CkL.EMPHASIZE_NOTICE);
                return;
            }
            t === I.NB.GUILD && null == e && null != a && (0, u.Fq)(a), R(t);
        }
    }
    i.useEffect(() => {
        null != N &&
            (null == a ? void 0 : a.id) !== S._ &&
            (0, p.Z)(N.id, N.getAvatarURL(null == a ? void 0 : a.id, 80), { guildId: null == a ? void 0 : a.id });
    }, [null == a ? void 0 : a.id, N]);
    let L = !0,
        j = !0;
    return (
        w &&
            1 === D.length &&
            (D.includes(T.s6.PROFILE_SERVER_PROFILES)
                ? (x(I.NB.GUILD), (j = !1))
                : D.includes(T.s6.PROFILE_USER_PROFILE) && (x(I.NB.USER_PROFILE), (L = !1))),
        (0, r.jsxs)(_.N, {
            header: C.intl.string(C.t["vi7f+q"]),
            children: [
                (0, r.jsxs)(l.njP, {
                    className: A.tabBar,
                    type: "top",
                    look: "brand",
                    selectedItem: P,
                    onItemSelect: x,
                    children: [
                        j
                            ? (0, r.jsx)(
                                  l.njP.Item,
                                  {
                                      className: A.tabBarItem,
                                      id: I.NB.USER_PROFILE,
                                      children: C.intl.string(C.t["2p07FR"]),
                                  },
                                  I.NB.USER_PROFILE,
                              )
                            : null,
                        L
                            ? (0, r.jsx)(
                                  l.njP.Item,
                                  {
                                      className: o()(A.tabBarItem, A.guildTabBarItem),
                                      "aria-label": C.intl.string(C.t.kPHroX),
                                      id: I.NB.GUILD,
                                      children: C.intl.string(C.t.kPHroX),
                                  },
                                  I.NB.GUILD,
                              )
                            : null,
                    ],
                }),
                P === I.NB.GUILD ? (0, r.jsx)(f.Z, { selectedGuild: a }) : (0, r.jsx)(m.Z, {}),
            ],
        })
    );
}
