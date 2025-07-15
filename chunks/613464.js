(n.d(t, { Z: () => S }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    s = n.n(i),
    a = n(442837),
    o = n(481060),
    u = n(749210),
    c = n(110924),
    E = n(410030),
    d = n(616780),
    _ = n(100527),
    A = n(906732),
    T = n(527379),
    I = n(687158),
    g = n(184301),
    m = n(502762),
    f = n(271383),
    O = n(594174),
    N = n(189357),
    h = n(718617),
    R = n(327250),
    p = n(50767);
function S(e) {
    let { userId: t, guildId: n, onClose: i, className: S, infoPanelClassName: C, style: b } = e,
        D = (0, N.m)(n),
        v = (0, a.e7)([O.default], () => O.default.getUser(t), [t]),
        U = (0, a.e7)([f.ZP], () => f.ZP.getMember(n, t), [n, t]),
        [L, M] = l.useState(null == v || null == U),
        x = (0, c.Z)(U),
        P = l.useRef(null),
        { analyticsLocations: j } = (0, A.ZP)(_.Z.GUILD_MEMBER_MOD_VIEW),
        y = (0, I.ZP)(t, n),
        w = (0, E.ZP)();
    return (l.useEffect(() => {
        D || i();
    }, [D, i]),
    l.useEffect(() => {
        null == x || null != U || L || i();
    }, [L, U, i, x]),
    l.useEffect(() => {
        null != v && null != U && M(!1);
    }, [v, U]),
    l.useEffect(() => {
        let e = null == U;
        return (
            !L && e && (P.current = window.setTimeout(i, 500)),
            () => {
                null != P.current && window.clearTimeout(P.current);
            }
        );
    }, [L, U, i]),
    (0, d.$)({ [n]: [t] }),
    l.useEffect(() => {
        !(async function () {
            let e = [
                u.Z.requestMembersById(n, [t]),
                (0, T.nb)(n, [t]),
                (0, g.Z)(t, void 0, {
                    guildId: n,
                    dispatchWait: !0
                })
            ];
            (await Promise.all(e), M(!1));
        })();
    }, [n, t]),
    D)
        ? L || null == v || null == U
            ? (0, r.jsx)('div', {
                  className: s()(p.sidebarContainer, p.loadingContainer, S),
                  style: b,
                  children: (0, r.jsx)(o.$jN, {
                      animated: !0,
                      type: L ? o.$jN.Type.SPINNING_CIRCLE : o.$jN.Type.CHASING_DOTS
                  })
              })
            : (0, r.jsx)(A.Gt, {
                  value: j,
                  children: (0, r.jsx)('div', {
                      className: s()(p.sidebarContainer, S),
                      style: b,
                      children: (0, r.jsx)(m.Z, {
                          user: v,
                          displayProfile: y,
                          themeType: null,
                          themeOverride: w,
                          forceShowPremium: !0,
                          className: p.profileThemedContainer,
                          children: (0, r.jsxs)('div', {
                              className: p.innerContainer,
                              children: [
                                  (0, r.jsx)(R.ZP, {
                                      userId: t,
                                      guildId: n,
                                      onClose: i
                                  }),
                                  (0, r.jsx)(h.Z, {
                                      userId: t,
                                      guildId: n,
                                      onClose: i,
                                      className: C
                                  })
                              ]
                          })
                      })
                  })
              })
        : null;
}
