n.d(t, { Z: () => A }), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(704215),
    c = n(481060),
    d = n(503089),
    u = n(243778),
    m = n(254901),
    p = n(18438),
    g = n(778825),
    h = n(851894),
    f = n(484459),
    b = n(216045),
    x = n(839469),
    _ = n(25990),
    j = n(594174),
    E = n(585483),
    C = n(16703),
    O = n(785145),
    v = n(981631),
    S = n(921944),
    T = n(526761),
    N = n(726985),
    I = n(388032),
    y = n(455734);
function A() {
    m.Z.useExperiment({ location: "profile_customization_auto" });
    let e = (0, l.e7)([g.Z], () => g.Z.getGuild()),
        t = (0, C.Z)(),
        n = (0, l.e7)([g.Z, _.Z], () => g.Z.showNotice() || _.Z.showNotice()),
        s = null != e ? e : t,
        A = (0, l.e7)([j.default], () => j.default.getCurrentUser()),
        { subsection: P, setSubsection: R } = (0, O.Z)(),
        { hasSearchResults: D, searchResults: Z } = (0, x.E)();
    r.useEffect(() => {
        null != A &&
            (0, f.Z)(A.id, A.getAvatarURL(null == s ? void 0 : s.id, 80), { guildId: null == s ? void 0 : s.id });
    }, [null == s ? void 0 : s.id, A]);
    let w = [o.z.NAMEPLATE_GUILD_SETTINGS_TAB_NEW_BADGE],
        [k, L] = (0, u.US)(w),
        B = k === o.z.NAMEPLATE_GUILD_SETTINGS_TAB_NEW_BADGE;
    function M(t) {
        if (P !== t) {
            if (n) {
                E.S.dispatch(v.CkL.SHAKE_APP, {
                    duration: 300,
                    intensity: d.$x,
                }),
                    E.S.dispatch(v.CkL.EMPHASIZE_NOTICE);
                return;
            }
            t === T.NB.GUILD && null == e && null != s && (0, p.Fq)(s), R(t);
        }
    }
    r.useEffect(() => {
        P === T.NB.GUILD && L(S.L.TAKE_ACTION);
    }, [P, L]);
    let U = !0,
        V = !0;
    return (
        D &&
            1 === Z.length &&
            (Z.includes(N.s6.PROFILE_SERVER_PROFILES)
                ? (M(T.NB.GUILD), (V = !1))
                : Z.includes(N.s6.PROFILE_USER_PROFILE) && (M(T.NB.USER_PROFILE), (U = !1))),
        (0, i.jsxs)(c.y5t, {
            component: (0, i.jsx)(c.X6q, {
                variant: "heading-lg/semibold",
                children: I.intl.string(I.t["vi7f+v"]),
            }),
            children: [
                (0, i.jsxs)(c.njP, {
                    className: y.tabBar,
                    type: "top",
                    look: "brand",
                    selectedItem: P,
                    onItemSelect: M,
                    children: [
                        V
                            ? (0, i.jsx)(
                                  c.njP.Item,
                                  {
                                      className: y.tabBarItem,
                                      id: T.NB.USER_PROFILE,
                                      children: I.intl.string(I.t["2p07FR"]),
                                  },
                                  T.NB.USER_PROFILE,
                              )
                            : null,
                        U
                            ? (0, i.jsxs)(
                                  c.njP.Item,
                                  {
                                      className: a()(y.tabBarItem, y.guildTabBarItem),
                                      "aria-label": I.intl.string(I.t.kPHroa),
                                      id: T.NB.GUILD,
                                      children: [
                                          I.intl.string(I.t.kPHroa),
                                          B &&
                                              P !== T.NB.GUILD &&
                                              (0, i.jsx)(c.IGR, { text: I.intl.string(I.t.y2b7CA) }),
                                      ],
                                  },
                                  T.NB.GUILD,
                              )
                            : null,
                    ],
                }),
                P === T.NB.GUILD ? (0, i.jsx)(h.Z, { selectedGuild: s }) : (0, i.jsx)(b.Z, {}),
            ],
        })
    );
}
