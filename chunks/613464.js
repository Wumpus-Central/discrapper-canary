n.d(t, { Z: () => C }), n(388685);
var r = n(951288),
    l = n(647438),
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
    S = n(345226);
function C(e) {
    let { userId: t, guildId: n, onClose: i, className: C, infoPanelClassName: p, style: D } = e,
        L = (0, O.m)(n),
        U = (0, a.e7)([h.default], () => h.default.getUser(t), [t]),
        M = (0, a.e7)([N.ZP], () => N.ZP.getMember(n, t), [n, t]),
        [x, v] = l.useState(null == U || null == M),
        b = (0, c.Z)(M),
        P = l.useRef(null),
        { analyticsLocations: j } = (0, A.ZP)(_.Z.GUILD_MEMBER_MOD_VIEW),
        y = (0, I.ZP)(t, n),
        G = (0, E.ZP)();
    return (l.useEffect(() => {
        L || i();
    }, [L, i]),
    l.useEffect(() => {
        null == b || null != M || x || i();
    }, [x, M, i, b]),
    l.useEffect(() => {
        null != U && null != M && v(!1);
    }, [U, M]),
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
            await Promise.all(e), v(!1);
        })();
    }, [n, t]),
    L)
        ? x || null == U || null == M
            ? (0, r.jsx)("div", {
                  className: s()(S.sidebarContainer, S.loadingContainer, C),
                  style: D,
                  children: (0, r.jsx)(o.$jN, {
                      animated: !0,
                      type: x ? o.$jN.Type.SPINNING_CIRCLE : o.$jN.Type.CHASING_DOTS,
                  }),
              })
            : (0, r.jsx)(A.Gt, {
                  value: j,
                  children: (0, r.jsx)("div", {
                      className: s()(S.sidebarContainer, C),
                      style: D,
                      children: (0, r.jsx)(g.Z, {
                          user: U,
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
                                      className: p,
                                  }),
                              ],
                          }),
                      }),
                  }),
              })
        : null;
}
