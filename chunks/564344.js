n.d(t, { Z: () => P });
var r = n(54381),
    i = n(473749),
    o = n(120356),
    a = n.n(o),
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
    C = n(726985),
    A = n(388032),
    N = n(455734);
function P() {
    u.Z.useExperiment({ location: "profile_customization_auto" });
    let e = (0, s.e7)([f.Z], () => f.Z.getGuild()),
        t = (0, O.Z)(),
        n = (0, s.e7)([f.Z, E.Z], () => f.Z.showNotice() || E.Z.showNotice()),
        o = null != e ? e : t,
        P = (0, s.e7)([b.default], () => b.default.getCurrentUser()),
        { subsection: R, setSubsection: w } = (0, v.Z)(),
        D = g.R.useField("hasSearchResults"),
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
            t === T.NB.GUILD && null == e && null != o && (0, d.Fq)(o), w(t);
        }
    }
    i.useEffect(() => {
        null != P &&
            (null == o ? void 0 : o.id) !== I._ &&
            (0, _.Z)(P.id, P.getAvatarURL(null == o ? void 0 : o.id, 80), { guildId: null == o ? void 0 : o.id });
    }, [null == o ? void 0 : o.id, P]);
    let j = !0,
        M = !0;
    return (
        D &&
            1 === x.length &&
            (x.includes(C.s6.PROFILE_SERVER_PROFILES)
                ? (L(T.NB.GUILD), (M = !1))
                : x.includes(C.s6.PROFILE_USER_PROFILE) && (L(T.NB.USER_PROFILE), (j = !1))),
        (0, r.jsxs)(m.N, {
            header: A.intl.string(A.t["vi7f+q"]),
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
                                      children: A.intl.string(A.t["2p07FR"]),
                                  },
                                  T.NB.USER_PROFILE,
                              )
                            : null,
                        j
                            ? (0, r.jsx)(
                                  l.njP.Item,
                                  {
                                      className: a()(N.tabBarItem, N.guildTabBarItem),
                                      "aria-label": A.intl.string(A.t.kPHroX),
                                      id: T.NB.GUILD,
                                      children: A.intl.string(A.t.kPHroX),
                                  },
                                  T.NB.GUILD,
                              )
                            : null,
                    ],
                }),
                R === T.NB.GUILD ? (0, r.jsx)(p.Z, { selectedGuild: o }) : (0, r.jsx)(h.Z, {}),
            ],
        })
    );
}
