n.d(t, { Z: () => R });
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
    _ = n(526665),
    m = n(10298),
    h = n(216045),
    g = n(839469),
    E = n(25990),
    b = n(594174),
    y = n(585483),
    O = n(88658),
    v = n(16703),
    S = n(785145),
    I = n(981631),
    T = n(647086),
    C = n(526761),
    A = n(726985),
    N = n(388032),
    P = n(37149);
function R() {
    let e = (0, _.gN)("ProfileCustomizationSettingsPage"),
        t = (0, s.e7)([d.Z], () => d.Z.getGuild()),
        n = (0, v.Z)(),
        a = (0, s.e7)([d.Z, E.Z], () => d.Z.showNotice() || E.Z.showNotice()),
        R = null != t ? t : n,
        w = (0, s.e7)([b.default], () => b.default.getCurrentUser()),
        { subsection: D, setSubsection: x } = (0, S.Z)(),
        L = g.R.useField("hasSearchResults"),
        j = g.R.useField("searchResults");
    function M(e) {
        if (D !== e) {
            if (a) {
                (0, O.Aj)({
                    duration: 300,
                    intensity: c.$x,
                }),
                    y.S.dispatch(I.CkL.EMPHASIZE_NOTICE);
                return;
            }
            e === C.NB.GUILD && null == t && null != R && (0, u.Fq)(R), x(e);
        }
    }
    i.useEffect(() => {
        null != w &&
            (null == R ? void 0 : R.id) !== T._ &&
            (0, p.Z)(w.id, w.getAvatarURL(null == R ? void 0 : R.id, 80), { guildId: null == R ? void 0 : R.id });
    }, [null == R ? void 0 : R.id, w]);
    let k = !0,
        U = !0;
    return (
        L &&
            1 === j.length &&
            (j.includes(A.s6.PROFILE_SERVER_PROFILES)
                ? (M(C.NB.GUILD), (U = !1))
                : j.includes(A.s6.PROFILE_USER_PROFILE) && (M(C.NB.USER_PROFILE), (k = !1))),
        (0, r.jsxs)(m.N, {
            header: N.intl.string(N.t["vi7f+q"]),
            children: [
                (0, r.jsxs)(l.njP, {
                    className: P.tabBar,
                    type: "top",
                    look: "brand",
                    selectedItem: D,
                    onItemSelect: M,
                    children: [
                        U || e
                            ? (0, r.jsx)(
                                  l.njP.Item,
                                  {
                                      className: P.tabBarItem,
                                      id: C.NB.USER_PROFILE,
                                      children: N.intl.string(N.t["2p07FR"]),
                                  },
                                  C.NB.USER_PROFILE,
                              )
                            : null,
                        k || e
                            ? (0, r.jsx)(
                                  l.njP.Item,
                                  {
                                      className: o()(P.tabBarItem, P.guildTabBarItem),
                                      "aria-label": N.intl.string(N.t.kPHroX),
                                      id: C.NB.GUILD,
                                      children: N.intl.string(N.t.kPHroX),
                                  },
                                  C.NB.GUILD,
                              )
                            : null,
                    ],
                }),
                D === C.NB.GUILD ? (0, r.jsx)(f.Z, { selectedGuild: R }) : (0, r.jsx)(h.Z, {}),
            ],
        })
    );
}
