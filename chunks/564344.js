n.d(t, { Z: () => N });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(503089),
    u = n(254901),
    d = n(18438),
    f = n(778825),
    _ = n(851894),
    p = n(484459),
    h = n(10298),
    m = n(216045),
    g = n(839469),
    E = n(25990),
    b = n(594174),
    y = n(585483),
    O = n(16703),
    v = n(785145),
    I = n(981631),
    T = n(526761),
    S = n(726985),
    A = n(388032),
    C = n(683326);
function N() {
    u.Z.useExperiment({ location: "profile_customization_auto" });
    let e = (0, s.e7)([f.Z], () => f.Z.getGuild()),
        t = (0, O.Z)(),
        n = (0, s.e7)([f.Z, E.Z], () => f.Z.showNotice() || E.Z.showNotice()),
        a = null != e ? e : t,
        N = (0, s.e7)([b.default], () => b.default.getCurrentUser()),
        { subsection: R, setSubsection: P } = (0, v.Z)(),
        w = g.R.useField("hasSearchResults"),
        D = g.R.useField("searchResults");
    function x(t) {
        if (R !== t) {
            if (n) {
                y.S.dispatch(I.CkL.SHAKE_APP, {
                    duration: 300,
                    intensity: c.$x,
                }),
                    y.S.dispatch(I.CkL.EMPHASIZE_NOTICE);
                return;
            }
            t === T.NB.GUILD && null == e && null != a && (0, d.Fq)(a), P(t);
        }
    }
    i.useEffect(() => {
        null != N &&
            (0, p.Z)(N.id, N.getAvatarURL(null == a ? void 0 : a.id, 80), { guildId: null == a ? void 0 : a.id });
    }, [null == a ? void 0 : a.id, N]);
    let L = !0,
        j = !0;
    return (
        w &&
            1 === D.length &&
            (D.includes(S.s6.PROFILE_SERVER_PROFILES)
                ? (x(T.NB.GUILD), (j = !1))
                : D.includes(S.s6.PROFILE_USER_PROFILE) && (x(T.NB.USER_PROFILE), (L = !1))),
        (0, r.jsxs)(h.N, {
            header: A.intl.string(A.t["vi7f+v"]),
            children: [
                (0, r.jsxs)(l.njP, {
                    className: C.tabBar,
                    type: "top",
                    look: "brand",
                    selectedItem: R,
                    onItemSelect: x,
                    children: [
                        j
                            ? (0, r.jsx)(
                                  l.njP.Item,
                                  {
                                      className: C.tabBarItem,
                                      id: T.NB.USER_PROFILE,
                                      children: A.intl.string(A.t["2p07FR"]),
                                  },
                                  T.NB.USER_PROFILE,
                              )
                            : null,
                        L
                            ? (0, r.jsx)(
                                  l.njP.Item,
                                  {
                                      className: o()(C.tabBarItem, C.guildTabBarItem),
                                      "aria-label": A.intl.string(A.t.kPHroa),
                                      id: T.NB.GUILD,
                                      children: A.intl.string(A.t.kPHroa),
                                  },
                                  T.NB.GUILD,
                              )
                            : null,
                    ],
                }),
                R === T.NB.GUILD ? (0, r.jsx)(_.Z, { selectedGuild: a }) : (0, r.jsx)(m.Z, {}),
            ],
        })
    );
}
