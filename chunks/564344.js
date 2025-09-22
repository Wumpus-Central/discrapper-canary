n.d(t, { Z: () => C });
var r = n(951288),
    i = n(647438),
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
    h = n(216045),
    m = n(839469),
    g = n(25990),
    E = n(594174),
    b = n(585483),
    y = n(16703),
    O = n(785145),
    v = n(981631),
    I = n(526761),
    T = n(726985),
    S = n(388032),
    A = n(455734);
function C() {
    u.Z.useExperiment({ location: "profile_customization_auto" });
    let e = (0, s.e7)([f.Z], () => f.Z.getGuild()),
        t = (0, y.Z)(),
        n = (0, s.e7)([f.Z, g.Z], () => f.Z.showNotice() || g.Z.showNotice()),
        a = null != e ? e : t,
        C = (0, s.e7)([E.default], () => E.default.getCurrentUser()),
        { subsection: N, setSubsection: R } = (0, O.Z)(),
        P = m.R.useField("hasSearchResults"),
        w = m.R.useField("searchResults");
    function D(t) {
        if (N !== t) {
            if (n) {
                b.S.dispatch(v.CkL.SHAKE_APP, {
                    duration: 300,
                    intensity: c.$x,
                }),
                    b.S.dispatch(v.CkL.EMPHASIZE_NOTICE);
                return;
            }
            t === I.NB.GUILD && null == e && null != a && (0, d.Fq)(a), R(t);
        }
    }
    i.useEffect(() => {
        null != C &&
            (0, p.Z)(C.id, C.getAvatarURL(null == a ? void 0 : a.id, 80), { guildId: null == a ? void 0 : a.id });
    }, [null == a ? void 0 : a.id, C]);
    let x = !0,
        L = !0;
    return (
        P &&
            1 === w.length &&
            (w.includes(T.s6.PROFILE_SERVER_PROFILES)
                ? (D(I.NB.GUILD), (L = !1))
                : w.includes(T.s6.PROFILE_USER_PROFILE) && (D(I.NB.USER_PROFILE), (x = !1))),
        (0, r.jsxs)(l.y5t, {
            component: (0, r.jsx)(l.X6q, {
                variant: "heading-lg/semibold",
                children: S.intl.string(S.t["vi7f+v"]),
            }),
            children: [
                (0, r.jsxs)(l.njP, {
                    className: A.tabBar,
                    type: "top",
                    look: "brand",
                    selectedItem: N,
                    onItemSelect: D,
                    children: [
                        L
                            ? (0, r.jsx)(
                                  l.njP.Item,
                                  {
                                      className: A.tabBarItem,
                                      id: I.NB.USER_PROFILE,
                                      children: S.intl.string(S.t["2p07FR"]),
                                  },
                                  I.NB.USER_PROFILE,
                              )
                            : null,
                        x
                            ? (0, r.jsx)(
                                  l.njP.Item,
                                  {
                                      className: o()(A.tabBarItem, A.guildTabBarItem),
                                      "aria-label": S.intl.string(S.t.kPHroa),
                                      id: I.NB.GUILD,
                                      children: S.intl.string(S.t.kPHroa),
                                  },
                                  I.NB.GUILD,
                              )
                            : null,
                    ],
                }),
                N === I.NB.GUILD ? (0, r.jsx)(_.Z, { selectedGuild: a }) : (0, r.jsx)(h.Z, {}),
            ],
        })
    );
}
