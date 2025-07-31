n.d(t, { Z: () => S });
var i = n(255367),
    r = n(73800),
    s = n(442837),
    a = n(481060),
    l = n(503089),
    o = n(254901),
    c = n(18438),
    d = n(778825),
    u = n(851894),
    m = n(484459),
    p = n(216045),
    g = n(839469),
    h = n(25990),
    f = n(594174),
    b = n(585483),
    x = n(16703),
    _ = n(785145),
    j = n(981631),
    O = n(526761),
    E = n(726985),
    C = n(388032),
    v = n(545784);
function S() {
    o.Z.useExperiment({ location: 'profile_customization_auto' });
    let e = (0, s.e7)([d.Z], () => d.Z.getGuild()),
        t = (0, x.Z)(),
        n = (0, s.e7)([d.Z, h.Z], () => d.Z.showNotice() || h.Z.showNotice()),
        S = null != e ? e : t,
        T = (0, s.e7)([f.default], () => f.default.getCurrentUser()),
        { subsection: N, setSubsection: I } = (0, _.Z)(),
        { hasSearchResults: y, searchResults: A } = (0, g.E)();
    function P(t) {
        if (N !== t) {
            if (n) {
                (b.S.dispatch(j.CkL.SHAKE_APP, {
                    duration: 300,
                    intensity: l.$x
                }),
                    b.S.dispatch(j.CkL.EMPHASIZE_NOTICE));
                return;
            }
            (t === O.NB.GUILD && null == e && null != S && (0, c.Fq)(S), I(t));
        }
    }
    r.useEffect(() => {
        null != T && (0, m.Z)(T.id, T.getAvatarURL(null == S ? void 0 : S.id, 80), { guildId: null == S ? void 0 : S.id });
    }, [null == S ? void 0 : S.id, T]);
    let R = !0,
        D = !0;
    return (
        y && 1 === A.length && (A.includes(E.s6.PROFILE_SERVER_PROFILES) ? (P(O.NB.GUILD), (D = !1)) : A.includes(E.s6.PROFILE_USER_PROFILE) && (P(O.NB.USER_PROFILE), (R = !1))),
        (0, i.jsxs)(a.y5t, {
            component: (0, i.jsx)(a.X6q, {
                variant: 'heading-lg/semibold',
                children: C.intl.string(C.t['vi7f+v'])
            }),
            children: [
                (0, i.jsxs)(a.njP, {
                    className: v.tabBar,
                    type: 'top',
                    look: 'brand',
                    selectedItem: N,
                    onItemSelect: P,
                    children: [
                        D
                            ? (0, i.jsx)(
                                  a.njP.Item,
                                  {
                                      className: v.tabBarItem,
                                      id: O.NB.USER_PROFILE,
                                      children: C.intl.string(C.t['2p07FR'])
                                  },
                                  O.NB.USER_PROFILE
                              )
                            : null,
                        R
                            ? (0, i.jsx)(
                                  a.njP.Item,
                                  {
                                      className: v.tabBarItem,
                                      id: O.NB.GUILD,
                                      children: C.intl.string(C.t.kPHroa)
                                  },
                                  O.NB.GUILD
                              )
                            : null
                    ]
                }),
                N === O.NB.GUILD ? (0, i.jsx)(u.Z, { selectedGuild: S }) : (0, i.jsx)(p.Z, {})
            ]
        })
    );
}
