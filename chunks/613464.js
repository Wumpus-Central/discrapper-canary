(n.d(t, { Z: () => h }), n(388685));
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
    N = n(271383),
    O = n(594174),
    f = n(189357),
    R = n(718617),
    S = n(327250),
    C = n(50767);
function h(e) {
    let { userId: t, guildId: n, onClose: i, className: h, infoPanelClassName: p, style: D } = e,
        U = (0, f.m)(n),
        L = (0, a.e7)([O.default], () => O.default.getUser(t), [t]),
        v = (0, a.e7)([N.ZP], () => N.ZP.getMember(n, t), [n, t]),
        [b, M] = l.useState(null == L || null == v),
        x = (0, c.Z)(v),
        P = l.useRef(null),
        { analyticsLocations: j } = (0, A.ZP)(_.Z.GUILD_MEMBER_MOD_VIEW),
        y = (0, I.ZP)(t, n),
        G = (0, E.ZP)();
    return (l.useEffect(() => {
        U || i();
    }, [U, i]),
    l.useEffect(() => {
        null == x || null != v || b || i();
    }, [b, v, i, x]),
    l.useEffect(() => {
        null != L && null != v && M(!1);
    }, [L, v]),
    l.useEffect(() => {
        let e = null == v;
        return (
            !b && e && (P.current = window.setTimeout(i, 500)),
            () => {
                null != P.current && window.clearTimeout(P.current);
            }
        );
    }, [b, v, i]),
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
    U)
        ? b || null == L || null == v
            ? (0, r.jsx)('div', {
                  className: s()(C.sidebarContainer, C.loadingContainer, h),
                  style: D,
                  children: (0, r.jsx)(o.$jN, {
                      animated: !0,
                      type: b ? o.$jN.Type.SPINNING_CIRCLE : o.$jN.Type.CHASING_DOTS
                  })
              })
            : (0, r.jsx)(A.Gt, {
                  value: j,
                  children: (0, r.jsx)('div', {
                      className: s()(C.sidebarContainer, h),
                      style: D,
                      children: (0, r.jsx)(m.Z, {
                          user: L,
                          displayProfile: y,
                          themeType: null,
                          themeOverride: G,
                          forceShowPremium: !0,
                          className: C.profileThemedContainer,
                          children: (0, r.jsxs)('div', {
                              className: C.innerContainer,
                              children: [
                                  (0, r.jsx)(S.ZP, {
                                      userId: t,
                                      guildId: n,
                                      onClose: i
                                  }),
                                  (0, r.jsx)(R.Z, {
                                      userId: t,
                                      guildId: n,
                                      onClose: i,
                                      className: p
                                  })
                              ]
                          })
                      })
                  })
              })
        : null;
}
