n.d(t, { Z: () => v });
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(481060),
    a = n(503089),
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
    _ = n(16703),
    x = n(785145),
    E = n(981631),
    j = n(526761),
    C = n(726985),
    O = n(388032),
    S = n(545784);
function v() {
    o.Z.useExperiment({ location: 'profile_customization_auto' });
    let e = (0, s.e7)([d.Z], () => d.Z.getGuild()),
        t = (0, _.Z)(),
        n = (0, s.e7)([d.Z, h.Z], () => d.Z.showNotice() || h.Z.showNotice()),
        v = null != e ? e : t,
        T = (0, s.e7)([f.default], () => f.default.getCurrentUser()),
        { subsection: N, setSubsection: I } = (0, x.Z)(),
        { hasSearchResults: y, searchResults: A } = (0, g.E)();
    function P(t) {
        if (N !== t) {
            if (n) {
                b.S.dispatch(E.CkL.SHAKE_APP, {
                    duration: 300,
                    intensity: a.$x
                }),
                    b.S.dispatch(E.CkL.EMPHASIZE_NOTICE);
                return;
            }
            t === j.NB.GUILD && null == e && null != v && (0, c.Fq)(v), I(t);
        }
    }
    r.useEffect(() => {
        null != T && (0, m.Z)(T.id, T.getAvatarURL(null == v ? void 0 : v.id, 80), { guildId: null == v ? void 0 : v.id });
    }, [null == v ? void 0 : v.id, T]);
    let R = !0,
        D = !0;
    return (
        y && 1 === A.length && (A.includes(C.s6.PROFILE_SERVER_PROFILES) ? (P(j.NB.GUILD), (D = !1)) : A.includes(C.s6.PROFILE_USER_PROFILE) && (P(j.NB.USER_PROFILE), (R = !1))),
        (0, i.jsxs)(l.y5t, {
            component: (0, i.jsx)(l.X6q, {
                variant: 'heading-lg/semibold',
                children: O.intl.string(O.t['vi7f+v'])
            }),
            children: [
                (0, i.jsxs)(l.njP, {
                    className: S.tabBar,
                    type: 'top',
                    look: 'brand',
                    selectedItem: N,
                    onItemSelect: P,
                    children: [
                        D
                            ? (0, i.jsx)(
                                  l.njP.Item,
                                  {
                                      className: S.tabBarItem,
                                      id: j.NB.USER_PROFILE,
                                      children: O.intl.string(O.t['2p07FR'])
                                  },
                                  j.NB.USER_PROFILE
                              )
                            : null,
                        R
                            ? (0, i.jsx)(
                                  l.njP.Item,
                                  {
                                      className: S.tabBarItem,
                                      id: j.NB.GUILD,
                                      children: O.intl.string(O.t.kPHroa)
                                  },
                                  j.NB.GUILD
                              )
                            : null
                    ]
                }),
                N === j.NB.GUILD ? (0, i.jsx)(u.Z, { selectedGuild: v }) : (0, i.jsx)(p.Z, {})
            ]
        })
    );
}
