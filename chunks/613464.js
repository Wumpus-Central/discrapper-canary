n.d(t, { Z: () => p }), n(388685);
var r = n(54381),
    l = n(473749),
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
    m = n(184301),
    g = n(502762),
    N = n(271383),
    h = n(594174),
    O = n(189357),
    f = n(718617),
    R = n(327250),
    S = n(250412);
function p(e) {
    let { userId: t, guildId: n, onClose: i, className: p, infoPanelClassName: C, style: D } = e,
        U = (0, O.m)(n),
        L = (0, a.e7)([h.default], () => h.default.getUser(t), [t]),
        M = (0, a.e7)([N.ZP], () => N.ZP.getMember(n, t), [n, t]),
        [x, b] = l.useState(null == L || null == M),
        v = (0, c.Z)(M),
        P = l.useRef(null),
        { analyticsLocations: j } = (0, A.ZP)(_.Z.GUILD_MEMBER_MOD_VIEW),
        y = (0, I.ZP)(t, n),
        G = (0, E.ZP)();
    return (l.useEffect(() => {
        U || i();
    }, [U, i]),
    l.useEffect(() => {
        null == v || null != M || x || i();
    }, [x, M, i, v]),
    l.useEffect(() => {
        null != L && null != M && b(!1);
    }, [L, M]),
    l.useEffect(() => {
        let e = null == M;
        return (
            !x && e && (P.current = window.setTimeout(i, 500)),
            () => {
                null != P.current && window.clearTimeout(P.current);
            }
        );
    }, [x, M, i]),
    (0, d.$)({ [n]: [t] }, "GuildMemberModViewSidebar"),
    l.useEffect(() => {
        !(async function () {
            let e = [
                u.Z.requestMembersById(n, [t]),
                (0, T.nb)(n, [t]),
                (0, m.Z)(t, void 0, {
                    guildId: n,
                    dispatchWait: !0,
                }),
            ];
            await Promise.all(e), b(!1);
        })();
    }, [n, t]),
    U)
        ? x || null == L || null == M
            ? (0, r.jsx)("div", {
                  className: s()(S.sidebarContainer, S.loadingContainer, p),
                  style: D,
                  children: (0, r.jsx)(o.$jN, {
                      animated: !0,
                      type: x ? o.$jN.Type.SPINNING_CIRCLE : o.$jN.Type.CHASING_DOTS,
                  }),
              })
            : (0, r.jsx)(A.Gt, {
                  value: j,
                  children: (0, r.jsx)("div", {
                      className: s()(S.sidebarContainer, p),
                      style: D,
                      children: (0, r.jsx)(g.Z, {
                          user: L,
                          displayProfile: y,
                          themeType: null,
                          themeOverride: G,
                          forceShowPremium: !0,
                          className: S.profileThemedContainer,
                          children: (0, r.jsxs)("div", {
                              className: S.innerContainer,
                              children: [
                                  (0, r.jsx)(R.ZP, {
                                      userId: t,
                                      guildId: n,
                                      onClose: i,
                                  }),
                                  (0, r.jsx)(f.Z, {
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
