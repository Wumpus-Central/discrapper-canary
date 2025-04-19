n.d(t, { Z: () => S });
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(503089),
    o = n(254901),
    c = n(18438),
    d = n(778825),
    u = n(851894),
    m = n(484459),
    g = n(216045),
    p = n(839469),
    h = n(25990),
    f = n(594174),
    b = n(585483),
    _ = n(16703),
    N = n(785145),
    x = n(981631),
    E = n(526761),
    j = n(726985),
    C = n(388032),
    O = n(545784);
function S() {
    o.Z.useExperiment({ location: 'profile_customization_auto' });
    let e = (0, s.e7)([d.Z], () => d.Z.getGuild()),
        t = (0, _.Z)(),
        n = (0, s.e7)([d.Z, h.Z], () => d.Z.showNotice() || h.Z.showNotice()),
        S = null != e ? e : t,
        v = (0, s.e7)([f.default], () => f.default.getCurrentUser()),
        { subsection: T, setSubsection: I } = (0, N.Z)(),
        { hasSearchResults: y, searchResults: A } = (0, p.E)();
    function P(t) {
        if (T !== t) {
            if (n) {
                b.S.dispatch(x.CkL.SHAKE_APP, {
                    duration: 300,
                    intensity: l.$x
                }),
                    b.S.dispatch(x.CkL.EMPHASIZE_NOTICE);
                return;
            }
            t === E.NB.GUILD && null == e && null != S && (0, c.Fq)(S), I(t);
        }
    }
    i.useEffect(() => {
        null != v && (0, m.Z)(v.id, v.getAvatarURL(null == S ? void 0 : S.id, 80), { guildId: null == S ? void 0 : S.id });
    }, [null == S ? void 0 : S.id, v]);
    let R = !0,
        D = !0;
    return (
        y && 1 === A.length && (A.includes(j.s6.PROFILE_SERVER_PROFILES) ? (P(E.NB.GUILD), (D = !1)) : A.includes(j.s6.PROFILE_USER_PROFILE) && (P(E.NB.USER_PROFILE), (R = !1))),
        (0, r.jsxs)(a.y5t, {
            component: (0, r.jsx)(a.X6q, {
                variant: 'heading-lg/semibold',
                children: C.NW.string(C.t['vi7f+v'])
            }),
            children: [
                (0, r.jsxs)(a.njP, {
                    className: O.tabBar,
                    type: 'top',
                    look: 'brand',
                    selectedItem: T,
                    onItemSelect: P,
                    children: [
                        D
                            ? (0, r.jsx)(
                                  a.njP.Item,
                                  {
                                      className: O.tabBarItem,
                                      id: E.NB.USER_PROFILE,
                                      children: C.NW.string(C.t['2p07FR'])
                                  },
                                  E.NB.USER_PROFILE
                              )
                            : null,
                        R
                            ? (0, r.jsx)(
                                  a.njP.Item,
                                  {
                                      className: O.tabBarItem,
                                      id: E.NB.GUILD,
                                      children: C.NW.string(C.t.kPHroa)
                                  },
                                  E.NB.GUILD
                              )
                            : null
                    ]
                }),
                T === E.NB.GUILD ? (0, r.jsx)(u.Z, { selectedGuild: S }) : (0, r.jsx)(g.Z, {})
            ]
        })
    );
}
