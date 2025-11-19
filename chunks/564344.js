n.d(t, { Z: () => R });
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
    T = n(647086),
    S = n(526761),
    A = n(726985),
    C = n(388032),
    N = n(683326);
function R() {
    u.Z.useExperiment({ location: "profile_customization_auto" });
    let e = (0, s.e7)([f.Z], () => f.Z.getGuild()),
        t = (0, O.Z)(),
        n = (0, s.e7)([f.Z, E.Z], () => f.Z.showNotice() || E.Z.showNotice()),
        a = null != e ? e : t,
        R = (0, s.e7)([b.default], () => b.default.getCurrentUser()),
        { subsection: P, setSubsection: D } = (0, v.Z)(),
        w = g.R.useField("hasSearchResults"),
        L = g.R.useField("searchResults");
    function x(t) {
        if (P !== t) {
            if (n) {
                y.S.dispatch(I.CkL.SHAKE_APP, {
                    duration: 300,
                    intensity: c.$x,
                }),
                    y.S.dispatch(I.CkL.EMPHASIZE_NOTICE);
                return;
            }
            t === S.NB.GUILD && null == e && null != a && (0, d.Fq)(a), D(t);
        }
    }
    i.useEffect(() => {
        null != R &&
            (null == a ? void 0 : a.id) !== T._ &&
            (0, p.Z)(R.id, R.getAvatarURL(null == a ? void 0 : a.id, 80), { guildId: null == a ? void 0 : a.id });
    }, [null == a ? void 0 : a.id, R]);
    let M = !0,
        j = !0;
    return (
        w &&
            1 === L.length &&
            (L.includes(A.s6.PROFILE_SERVER_PROFILES)
                ? (x(S.NB.GUILD), (j = !1))
                : L.includes(A.s6.PROFILE_USER_PROFILE) && (x(S.NB.USER_PROFILE), (M = !1))),
        (0, r.jsxs)(h.N, {
            header: C.intl.string(C.t["vi7f+q"]),
            children: [
                (0, r.jsxs)(l.njP, {
                    className: N.tabBar,
                    type: "top",
                    look: "brand",
                    selectedItem: P,
                    onItemSelect: x,
                    children: [
                        j
                            ? (0, r.jsx)(
                                  l.njP.Item,
                                  {
                                      className: N.tabBarItem,
                                      id: S.NB.USER_PROFILE,
                                      children: C.intl.string(C.t["2p07FR"]),
                                  },
                                  S.NB.USER_PROFILE,
                              )
                            : null,
                        M
                            ? (0, r.jsx)(
                                  l.njP.Item,
                                  {
                                      className: o()(N.tabBarItem, N.guildTabBarItem),
                                      "aria-label": C.intl.string(C.t.kPHroX),
                                      id: S.NB.GUILD,
                                      children: C.intl.string(C.t.kPHroX),
                                  },
                                  S.NB.GUILD,
                              )
                            : null,
                    ],
                }),
                P === S.NB.GUILD ? (0, r.jsx)(_.Z, { selectedGuild: a }) : (0, r.jsx)(m.Z, {}),
            ],
        })
    );
}
