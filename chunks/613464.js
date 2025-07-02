(n.d(t, { Z: () => S }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    s = n.n(i),
    a = n(442837),
    o = n(481060),
    u = n(749210),
    c = n(110924),
    d = n(410030),
    E = n(616780),
    _ = n(100527),
    A = n(906732),
    m = n(527379),
    T = n(687158),
    f = n(184301),
    g = n(502762),
    I = n(271383),
    h = n(594174),
    O = n(189357),
    N = n(718617),
    p = n(327250),
    R = n(50767);
function S(e) {
    let { userId: t, guildId: n, onClose: i, className: S, infoPanelClassName: C, style: b } = e,
        v = (0, O.m)(n),
        D = (0, a.e7)([h.default], () => h.default.getUser(t), [t]),
        x = (0, a.e7)([I.ZP], () => I.ZP.getMember(n, t), [n, t]),
        [L, M] = l.useState(null == D || null == x),
        U = (0, c.Z)(x),
        j = l.useRef(null),
        { analyticsLocations: P } = (0, A.ZP)(_.Z.GUILD_MEMBER_MOD_VIEW),
        y = (0, T.ZP)(t, n),
        w = (0, d.ZP)();
    return (l.useEffect(() => {
        v || i();
    }, [v, i]),
    l.useEffect(() => {
        null == U || null != x || L || i();
    }, [L, x, i, U]),
    l.useEffect(() => {
        null != D && null != x && M(!1);
    }, [D, x]),
    l.useEffect(() => {
        let e = null == x;
        return (
            !L && e && (j.current = window.setTimeout(i, 500)),
            () => {
                null != j.current && window.clearTimeout(j.current);
            }
        );
    }, [L, x, i]),
    (0, E.$)({ [n]: [t] }),
    l.useEffect(() => {
        !(async function () {
            let e = [
                u.Z.requestMembersById(n, [t]),
                (0, m.nb)(n, [t]),
                (0, f.Z)(t, void 0, {
                    guildId: n,
                    dispatchWait: !0
                })
            ];
            (await Promise.all(e), M(!1));
        })();
    }, [n, t]),
    v)
        ? L || null == D || null == x
            ? (0, r.jsx)('div', {
                  className: s()(R.sidebarContainer, R.loadingContainer, S),
                  style: b,
                  children: (0, r.jsx)(o.$jN, {
                      animated: !0,
                      type: L ? o.$jN.Type.SPINNING_CIRCLE : o.$jN.Type.CHASING_DOTS
                  })
              })
            : (0, r.jsx)(A.Gt, {
                  value: P,
                  children: (0, r.jsx)('div', {
                      className: s()(R.sidebarContainer, S),
                      style: b,
                      children: (0, r.jsx)(g.Z, {
                          user: D,
                          displayProfile: y,
                          themeType: null,
                          themeOverride: w,
                          forceShowPremium: !0,
                          className: R.profileThemedContainer,
                          children: (0, r.jsxs)('div', {
                              className: R.innerContainer,
                              children: [
                                  (0, r.jsx)(p.ZP, {
                                      userId: t,
                                      guildId: n,
                                      onClose: i
                                  }),
                                  (0, r.jsx)(N.Z, {
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
