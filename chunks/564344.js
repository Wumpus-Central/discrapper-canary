n.d(t, { Z: () => v });
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(503089),
    o = n(906732),
    c = n(254901),
    d = n(18438),
    u = n(778825),
    m = n(851894),
    g = n(484459),
    h = n(216045),
    x = n(839469),
    _ = n(25990),
    p = n(594174),
    E = n(585483),
    C = n(16703),
    f = n(785145),
    T = n(981631),
    N = n(526761),
    I = n(726985),
    S = n(388032),
    b = n(228615);
function v() {
    c.Z.useExperiment({ location: 'profile_customization_auto' });
    let e = (0, r.e7)([u.Z], () => u.Z.getGuild()),
        t = (0, C.Z)(),
        n = (0, r.e7)([u.Z, _.Z], () => u.Z.showNotice() || _.Z.showNotice()),
        v = null != e ? e : t,
        j = (0, r.e7)([p.default], () => p.default.getCurrentUser()),
        { subsection: A, setSubsection: O } = (0, f.Z)(),
        { analyticsLocations: R } = (0, o.ZP)(),
        { hasSearchResults: P, searchResults: D } = (0, x.E)();
    function y(t) {
        if (A !== t) {
            if (n) {
                E.S.dispatch(T.CkL.SHAKE_APP, {
                    duration: 300,
                    intensity: a.$x
                }),
                    E.S.dispatch(T.CkL.EMPHASIZE_NOTICE);
                return;
            }
            t === N.NB.GUILD && null == e && null != v && (0, d.Fq)(v, R), O(t);
        }
    }
    s.useEffect(() => {
        null != j && (0, g.Z)(j.id, j.getAvatarURL(null == v ? void 0 : v.id, 80), { guildId: null == v ? void 0 : v.id });
    }, [null == v ? void 0 : v.id, j]);
    let Z = !0,
        k = !0;
    return (
        P && 1 === D.length && (D.includes(I.s6.PROFILE_SERVER_PROFILES) ? (y(N.NB.GUILD), (k = !1)) : D.includes(I.s6.PROFILE_USER_PROFILE) && (y(N.NB.USER_PROFILE), (Z = !1))),
        (0, i.jsx)(o.Gt, {
            value: R,
            children: (0, i.jsxs)(l.y5t, {
                component: (0, i.jsx)(l.X6q, {
                    variant: 'heading-lg/semibold',
                    children: S.intl.string(S.t['vi7f+v'])
                }),
                children: [
                    (0, i.jsxs)(l.njP, {
                        className: b.tabBar,
                        type: 'top',
                        look: 'brand',
                        selectedItem: A,
                        onItemSelect: y,
                        children: [
                            k
                                ? (0, i.jsx)(
                                      l.njP.Item,
                                      {
                                          className: b.tabBarItem,
                                          id: N.NB.USER_PROFILE,
                                          children: S.intl.string(S.t['OU3/Pj'])
                                      },
                                      N.NB.USER_PROFILE
                                  )
                                : null,
                            Z
                                ? (0, i.jsx)(
                                      l.njP.Item,
                                      {
                                          className: b.tabBarItem,
                                          id: N.NB.GUILD,
                                          children: S.intl.string(S.t.kPHroa)
                                      },
                                      N.NB.GUILD
                                  )
                                : null
                        ]
                    }),
                    A === N.NB.GUILD ? (0, i.jsx)(m.Z, { selectedGuild: v }) : (0, i.jsx)(h.Z, {})
                ]
            })
        })
    );
}
