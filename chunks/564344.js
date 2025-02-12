n.d(t, { Z: () => v });
var i = n(200651),
    s = n(192379),
    l = n(442837),
    r = n(481060),
    a = n(503089),
    o = n(906732),
    c = n(254901),
    d = n(18438),
    u = n(778825),
    h = n(851894),
    m = n(484459),
    g = n(216045),
    x = n(839469),
    _ = n(25990),
    p = n(594174),
    E = n(585483),
    C = n(16703),
    f = n(785145),
    N = n(981631),
    I = n(526761),
    T = n(726985),
    S = n(388032),
    j = n(665932);
function v() {
    c.Z.useExperiment({ location: 'profile_customization_auto' });
    let e = (0, l.e7)([u.Z], () => u.Z.getGuild()),
        t = (0, C.Z)(),
        n = (0, l.e7)([u.Z, _.Z], () => u.Z.showNotice() || _.Z.showNotice()),
        v = null != e ? e : t,
        b = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
        { subsection: A, setSubsection: O } = (0, f.Z)(),
        { analyticsLocations: R } = (0, o.ZP)(),
        { hasSearchResults: D, searchResults: P } = (0, x.E)();
    function y(t) {
        if (A !== t) {
            if (n) {
                E.S.dispatch(N.CkL.SHAKE_APP, {
                    duration: 300,
                    intensity: a.$x
                }),
                    E.S.dispatch(N.CkL.EMPHASIZE_NOTICE);
                return;
            }
            t === I.NB.GUILD && null == e && null != v && (0, d.Fq)(v, R), O(t);
        }
    }
    s.useEffect(() => {
        null != b && (0, m.Z)(b.id, b.getAvatarURL(null == v ? void 0 : v.id, 80), { guildId: null == v ? void 0 : v.id });
    }, [null == v ? void 0 : v.id, b]);
    let Z = !0,
        L = !0;
    return (
        D && 1 === P.length && (P.includes(T.s6.PROFILE_SERVER_PROFILES) ? (y(I.NB.GUILD), (L = !1)) : P.includes(T.s6.PROFILE_USER_PROFILE) && (y(I.NB.USER_PROFILE), (Z = !1))),
        (0, i.jsx)(o.Gt, {
            value: R,
            children: (0, i.jsxs)(r.y5t, {
                component: (0, i.jsx)(r.X6q, {
                    variant: 'heading-lg/semibold',
                    children: S.intl.string(S.t['vi7f+v'])
                }),
                children: [
                    (0, i.jsxs)(r.njP, {
                        className: j.tabBar,
                        type: 'top',
                        look: 'brand',
                        selectedItem: A,
                        onItemSelect: y,
                        children: [
                            L
                                ? (0, i.jsx)(
                                      r.njP.Item,
                                      {
                                          className: j.tabBarItem,
                                          id: I.NB.USER_PROFILE,
                                          children: S.intl.string(S.t['OU3/Pj'])
                                      },
                                      I.NB.USER_PROFILE
                                  )
                                : null,
                            Z
                                ? (0, i.jsx)(
                                      r.njP.Item,
                                      {
                                          className: j.tabBarItem,
                                          id: I.NB.GUILD,
                                          children: S.intl.string(S.t.kPHroa)
                                      },
                                      I.NB.GUILD
                                  )
                                : null
                        ]
                    }),
                    A === I.NB.GUILD ? (0, i.jsx)(h.Z, { selectedGuild: v }) : (0, i.jsx)(g.Z, {})
                ]
            })
        })
    );
}
