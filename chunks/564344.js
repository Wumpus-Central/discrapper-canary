n.d(t, { Z: () => P }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(704215),
    c = n(481060),
    u = n(503089),
    d = n(243778),
    f = n(254901),
    _ = n(18438),
    p = n(778825),
    h = n(851894),
    m = n(484459),
    g = n(216045),
    E = n(839469),
    b = n(25990),
    y = n(594174),
    O = n(585483),
    v = n(16703),
    I = n(785145),
    T = n(981631),
    S = n(921944),
    A = n(526761),
    C = n(726985),
    N = n(388032),
    R = n(455734);
function P() {
    f.Z.useExperiment({ location: "profile_customization_auto" });
    let e = (0, s.e7)([p.Z], () => p.Z.getGuild()),
        t = (0, v.Z)(),
        n = (0, s.e7)([p.Z, b.Z], () => p.Z.showNotice() || b.Z.showNotice()),
        a = null != e ? e : t,
        P = (0, s.e7)([y.default], () => y.default.getCurrentUser()),
        { subsection: w, setSubsection: D } = (0, I.Z)(),
        { hasSearchResults: x, searchResults: L } = (0, E.E)();
    i.useEffect(() => {
        null != P &&
            (0, m.Z)(P.id, P.getAvatarURL(null == a ? void 0 : a.id, 80), { guildId: null == a ? void 0 : a.id });
    }, [null == a ? void 0 : a.id, P]);
    let j = [l.z.NAMEPLATE_GUILD_SETTINGS_TAB_NEW_BADGE],
        [M, k] = (0, d.US)(j),
        U = M === l.z.NAMEPLATE_GUILD_SETTINGS_TAB_NEW_BADGE;
    function G(t) {
        if (w !== t) {
            if (n) {
                O.S.dispatch(T.CkL.SHAKE_APP, {
                    duration: 300,
                    intensity: u.$x,
                }),
                    O.S.dispatch(T.CkL.EMPHASIZE_NOTICE);
                return;
            }
            t === A.NB.GUILD && null == e && null != a && (0, _.Fq)(a), D(t);
        }
    }
    i.useEffect(() => {
        w === A.NB.GUILD && k(S.L.TAKE_ACTION);
    }, [w, k]);
    let B = !0,
        Z = !0;
    return (
        x &&
            1 === L.length &&
            (L.includes(C.s6.PROFILE_SERVER_PROFILES)
                ? (G(A.NB.GUILD), (Z = !1))
                : L.includes(C.s6.PROFILE_USER_PROFILE) && (G(A.NB.USER_PROFILE), (B = !1))),
        (0, r.jsxs)(c.y5t, {
            component: (0, r.jsx)(c.X6q, {
                variant: "heading-lg/semibold",
                children: N.intl.string(N.t["vi7f+v"]),
            }),
            children: [
                (0, r.jsxs)(c.njP, {
                    className: R.tabBar,
                    type: "top",
                    look: "brand",
                    selectedItem: w,
                    onItemSelect: G,
                    children: [
                        Z
                            ? (0, r.jsx)(
                                  c.njP.Item,
                                  {
                                      className: R.tabBarItem,
                                      id: A.NB.USER_PROFILE,
                                      children: N.intl.string(N.t["2p07FR"]),
                                  },
                                  A.NB.USER_PROFILE,
                              )
                            : null,
                        B
                            ? (0, r.jsxs)(
                                  c.njP.Item,
                                  {
                                      className: o()(R.tabBarItem, R.guildTabBarItem),
                                      "aria-label": N.intl.string(N.t.kPHroa),
                                      id: A.NB.GUILD,
                                      children: [
                                          N.intl.string(N.t.kPHroa),
                                          U &&
                                              w !== A.NB.GUILD &&
                                              (0, r.jsx)(c.IGR, { text: N.intl.string(N.t.y2b7CA) }),
                                      ],
                                  },
                                  A.NB.GUILD,
                              )
                            : null,
                    ],
                }),
                w === A.NB.GUILD ? (0, r.jsx)(h.Z, { selectedGuild: a }) : (0, r.jsx)(g.Z, {}),
            ],
        })
    );
}
