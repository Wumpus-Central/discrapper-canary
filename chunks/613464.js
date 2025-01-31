n.d(t, { Z: () => N }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(749210),
    d = n(110924),
    u = n(410030),
    h = n(616780),
    p = n(100527),
    m = n(906732),
    f = n(527379),
    g = n(687158),
    _ = n(184301),
    C = n(502762),
    x = n(271383),
    v = n(594174),
    E = n(189357),
    I = n(718617),
    b = n(327250),
    Z = n(764948);
function N(e) {
    let { userId: t, guildId: n, onClose: a, className: N, infoPanelClassName: T, style: S } = e,
        j = (0, E.m)(n),
        A = (0, s.e7)([v.default], () => v.default.getUser(t), [t]),
        y = (0, s.e7)([x.ZP], () => x.ZP.getMember(n, t), [n, t]),
        [P, R] = l.useState(null == A || null == y),
        M = (0, d.Z)(y),
        L = l.useRef(null),
        { analyticsLocations: k } = (0, m.ZP)(p.Z.GUILD_MEMBER_MOD_VIEW),
        O = (0, g.ZP)(t, n),
        D = (0, u.ZP)();
    return (l.useEffect(() => {
        j || a();
    }, [j, a]),
    l.useEffect(() => {
        null == M || null != y || P || a();
    }, [P, y, a, M]),
    l.useEffect(() => {
        null != A && null != y && R(!1);
    }, [A, y]),
    l.useEffect(() => {
        let e = null == y;
        return (
            !P && e && (L.current = window.setTimeout(a, 500)),
            () => {
                null != L.current && window.clearTimeout(L.current);
            }
        );
    }, [P, y, a]),
    (0, h.$)({ [n]: [t] }),
    l.useEffect(() => {
        (async function () {
            let e = [
                c.Z.requestMembersById(n, [t]),
                (0, f.nb)(n, [t]),
                (0, _.Z)(t, void 0, {
                    guildId: n,
                    dispatchWait: !0
                })
            ];
            await Promise.all(e), R(!1);
        })();
    }, [n, t]),
    j)
        ? P || null == A || null == y
            ? (0, i.jsx)('div', {
                  className: r()(Z.sidebarContainer, Z.loadingContainer, N),
                  style: S,
                  children: (0, i.jsx)(o.$jN, {
                      animated: !0,
                      type: P ? o.$jN.Type.SPINNING_CIRCLE : o.$jN.Type.CHASING_DOTS
                  })
              })
            : (0, i.jsx)(m.Gt, {
                  value: k,
                  children: (0, i.jsx)('div', {
                      className: r()(Z.sidebarContainer, N),
                      style: S,
                      children: (0, i.jsx)(C.Z, {
                          user: A,
                          displayProfile: O,
                          profileType: null,
                          themeOverride: D,
                          forceShowPremium: !0,
                          className: Z.profileThemedContainer,
                          children: (0, i.jsxs)('div', {
                              className: Z.innerContainer,
                              children: [
                                  (0, i.jsx)(b.ZP, {
                                      userId: t,
                                      guildId: n,
                                      onClose: a
                                  }),
                                  (0, i.jsx)(I.Z, {
                                      userId: t,
                                      guildId: n,
                                      onClose: a,
                                      className: T
                                  })
                              ]
                          })
                      })
                  })
              })
        : null;
}
