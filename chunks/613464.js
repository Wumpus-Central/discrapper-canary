n.d(t, { Z: () => S }), n(388685);
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
    m = n(687158),
    I = n(184301),
    g = n(502762),
    N = n(271383),
    h = n(594174),
    f = n(189357),
    O = n(718617),
    p = n(327250),
    R = n(345226);
function S(e) {
    let { userId: t, guildId: n, onClose: i, className: S, infoPanelClassName: C, style: D } = e,
        L = (0, f.m)(n),
        U = (0, a.e7)([h.default], () => h.default.getUser(t), [t]),
        M = (0, a.e7)([N.ZP], () => N.ZP.getMember(n, t), [n, t]),
        [v, b] = l.useState(null == U || null == M),
        x = (0, c.Z)(M),
        P = l.useRef(null),
        { analyticsLocations: j } = (0, A.ZP)(_.Z.GUILD_MEMBER_MOD_VIEW),
        y = (0, m.ZP)(t, n),
        w = (0, E.ZP)();
    return (l.useEffect(() => {
        L || i();
    }, [L, i]),
    l.useEffect(() => {
        null == x || null != M || v || i();
    }, [v, M, i, x]),
    l.useEffect(() => {
        null != U && null != M && b(!1);
    }, [U, M]),
    l.useEffect(() => {
        let e = null == M;
        return (
            !v && e && (P.current = window.setTimeout(i, 500)),
            () => {
                null != P.current && window.clearTimeout(P.current);
            }
        );
    }, [v, M, i]),
    (0, d.$)({ [n]: [t] }),
    l.useEffect(() => {
        !(async function () {
            let e = [
                u.Z.requestMembersById(n, [t]),
                (0, T.nb)(n, [t]),
                (0, I.Z)(t, void 0, {
                    guildId: n,
                    dispatchWait: !0,
                }),
            ];
            await Promise.all(e), b(!1);
        })();
    }, [n, t]),
    L)
        ? v || null == U || null == M
            ? (0, r.jsx)("div", {
                  className: s()(R.sidebarContainer, R.loadingContainer, S),
                  style: D,
                  children: (0, r.jsx)(o.$jN, {
                      animated: !0,
                      type: v ? o.$jN.Type.SPINNING_CIRCLE : o.$jN.Type.CHASING_DOTS,
                  }),
              })
            : (0, r.jsx)(A.Gt, {
                  value: j,
                  children: (0, r.jsx)("div", {
                      className: s()(R.sidebarContainer, S),
                      style: D,
                      children: (0, r.jsx)(g.Z, {
                          user: U,
                          displayProfile: y,
                          themeType: null,
                          themeOverride: w,
                          forceShowPremium: !0,
                          className: R.profileThemedContainer,
                          children: (0, r.jsxs)("div", {
                              className: R.innerContainer,
                              children: [
                                  (0, r.jsx)(p.ZP, {
                                      userId: t,
                                      guildId: n,
                                      onClose: i,
                                  }),
                                  (0, r.jsx)(O.Z, {
                                      userId: t,
                                      guildId: n,
                                      onClose: i,
                                      className: C,
                                  }),
                              ],
                          }),
                      }),
                  }),
              })
        : null;
}
