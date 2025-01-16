n.d(t, {
    Z: function () {
        return v;
    }
});
var i = n(200651),
    r = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(503089),
    o = n(906732),
    c = n(254901),
    d = n(18438),
    u = n(778825),
    m = n(851894),
    g = n(484459),
    h = n(216045),
    p = n(839469),
    x = n(25990),
    f = n(594174),
    _ = n(585483),
    E = n(16703),
    C = n(785145),
    T = n(981631),
    S = n(526761),
    b = n(726985),
    I = n(388032),
    N = n(228615);
function v() {
    c.Z.useExperiment({ location: 'profile_customization_auto' });
    let e = (0, s.e7)([u.Z], () => u.Z.getGuild()),
        t = (0, E.Z)(),
        n = (0, s.e7)([u.Z, x.Z], () => u.Z.showNotice() || x.Z.showNotice()),
        v = null != e ? e : t,
        A = (0, s.e7)([f.default], () => f.default.getCurrentUser()),
        { subsection: j, setSubsection: O } = (0, C.Z)(),
        { analyticsLocations: R } = (0, o.ZP)(),
        { hasSearchResults: P, searchResults: y } = (0, p.E)();
    function B(t) {
        if (j !== t) {
            if (n) {
                _.S.dispatch(T.CkL.SHAKE_APP, {
                    duration: 300,
                    intensity: l.$x
                }),
                    _.S.dispatch(T.CkL.EMPHASIZE_NOTICE);
                return;
            }
            t === S.NB.GUILD && null == e && null != v && (0, d.Fq)(v, R), O(t);
        }
    }
    r.useEffect(() => {
        null != A && (0, g.Z)(A.id, A.getAvatarURL(null == v ? void 0 : v.id, 80), { guildId: null == v ? void 0 : v.id });
    }, [null == v ? void 0 : v.id, A]);
    let D = !0,
        Z = !0;
    return (
        P && 1 === y.length && (y.includes(b.s6.PROFILE_SERVER_PROFILES) ? (B(S.NB.GUILD), (Z = !1)) : y.includes(b.s6.PROFILE_USER_PROFILE) && (B(S.NB.USER_PROFILE), (D = !1))),
        (0, i.jsx)(o.Gt, {
            value: R,
            children: (0, i.jsxs)(a.HeadingLevel, {
                component: (0, i.jsx)(a.Heading, {
                    variant: 'heading-lg/semibold',
                    children: I.intl.string(I.t['vi7f+v'])
                }),
                children: [
                    (0, i.jsxs)(a.TabBar, {
                        className: N.tabBar,
                        type: 'top',
                        look: 'brand',
                        selectedItem: j,
                        onItemSelect: B,
                        children: [
                            Z
                                ? (0, i.jsx)(
                                      a.TabBar.Item,
                                      {
                                          className: N.tabBarItem,
                                          id: S.NB.USER_PROFILE,
                                          children: I.intl.string(I.t['OU3/Pj'])
                                      },
                                      S.NB.USER_PROFILE
                                  )
                                : null,
                            D
                                ? (0, i.jsx)(
                                      a.TabBar.Item,
                                      {
                                          className: N.tabBarItem,
                                          id: S.NB.GUILD,
                                          children: I.intl.string(I.t.kPHroa)
                                      },
                                      S.NB.GUILD
                                  )
                                : null
                        ]
                    }),
                    j === S.NB.GUILD ? (0, i.jsx)(m.Z, { selectedGuild: v }) : (0, i.jsx)(h.Z, {})
                ]
            })
        })
    );
}
