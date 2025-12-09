n.d(t, { Z: () => P });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(503089),
    u = n(254901),
    d = n(18438),
    f = n(778825),
    p = n(851894),
    _ = n(484459),
    m = n(10298),
    h = n(216045),
    g = n(839469),
    E = n(25990),
    b = n(594174),
    y = n(585483),
    O = n(16703),
    v = n(785145),
    S = n(981631),
    I = n(647086),
    T = n(526761),
    A = n(726985),
    C = n(388032),
    N = n(455734);
function P() {
    u.Z.useExperiment({ location: "profile_customization_auto" });
    let e = (0, s.e7)([f.Z], () => f.Z.getGuild()),
        t = (0, O.Z)(),
        n = (0, s.e7)([f.Z, E.Z], () => f.Z.showNotice() || E.Z.showNotice()),
        a = null != e ? e : t,
        P = (0, s.e7)([b.default], () => b.default.getCurrentUser()),
        { subsection: R, setSubsection: D } = (0, v.Z)(),
        w = g.R.useField("hasSearchResults"),
        x = g.R.useField("searchResults");
    function L(t) {
        if (R !== t) {
            if (n) {
                y.S.dispatch(S.CkL.SHAKE_APP, {
                    duration: 300,
                    intensity: c.$x,
                }),
                    y.S.dispatch(S.CkL.EMPHASIZE_NOTICE);
                return;
            }
            t === T.NB.GUILD && null == e && null != a && (0, d.Fq)(a), D(t);
        }
    }
    i.useEffect(() => {
        null != P &&
            (null == a ? void 0 : a.id) !== I._ &&
            (0, _.Z)(P.id, P.getAvatarURL(null == a ? void 0 : a.id, 80), { guildId: null == a ? void 0 : a.id });
    }, [null == a ? void 0 : a.id, P]);
    let j = !0,
        M = !0;
    return (
        w &&
            1 === x.length &&
            (x.includes(A.s6.PROFILE_SERVER_PROFILES)
                ? (L(T.NB.GUILD), (M = !1))
                : x.includes(A.s6.PROFILE_USER_PROFILE) && (L(T.NB.USER_PROFILE), (j = !1))),
        (0, r.jsxs)(m.N, {
            header: C.intl.string(C.t["vi7f+q"]),
            children: [
                (0, r.jsxs)(l.njP, {
                    className: N.tabBar,
                    type: "top",
                    look: "brand",
                    selectedItem: R,
                    onItemSelect: L,
                    children: [
                        M
                            ? (0, r.jsx)(
                                  l.njP.Item,
                                  {
                                      className: N.tabBarItem,
                                      id: T.NB.USER_PROFILE,
                                      children: C.intl.string(C.t["2p07FR"]),
                                  },
                                  T.NB.USER_PROFILE,
                              )
                            : null,
                        j
                            ? (0, r.jsx)(
                                  l.njP.Item,
                                  {
                                      className: o()(N.tabBarItem, N.guildTabBarItem),
                                      "aria-label": C.intl.string(C.t.kPHroX),
                                      id: T.NB.GUILD,
                                      children: C.intl.string(C.t.kPHroX),
                                  },
                                  T.NB.GUILD,
                              )
                            : null,
                    ],
                }),
                R === T.NB.GUILD ? (0, r.jsx)(p.Z, { selectedGuild: a }) : (0, r.jsx)(h.Z, {}),
            ],
        })
    );
}
