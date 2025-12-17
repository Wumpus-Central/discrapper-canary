n.d(t, { Z: () => p }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    s = n(442837),
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
    f = n(502762),
    g = n(271383),
    N = n(594174),
    h = n(189357),
    O = n(718617),
    R = n(327250),
    S = n(463573);
function p(e) {
    let { userId: t, guildId: n, onClose: i, className: p, infoPanelClassName: C, style: b, moderatorReportId: D } = e,
        U = (0, h.m)(n),
        L = (0, s.e7)([N.default], () => N.default.getUser(t), [t]),
        M = (0, s.e7)([g.ZP], () => g.ZP.getMember(n, t), [n, t]),
        [x, v] = l.useState(null == L || null == M),
        P = (0, c.Z)(M),
        j = l.useRef(null),
        { analyticsLocations: y } = (0, A.ZP)(_.Z.GUILD_MEMBER_MOD_VIEW),
        G = (0, I.ZP)(t, n),
        k = (0, E.ZP)();
    return (l.useEffect(() => {
        U || i();
    }, [U, i]),
    l.useEffect(() => {
        null == P || null != M || x || i();
    }, [x, M, i, P]),
    l.useEffect(() => {
        null != L && null != M && v(!1);
    }, [L, M]),
    l.useEffect(() => {
        let e = null == M;
        return (
            !x && e && (j.current = window.setTimeout(i, 500)),
            () => {
                null != j.current && window.clearTimeout(j.current);
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
    U)
        ? x || null == L || null == M
            ? (0, r.jsx)("div", {
                  className: a()(S.sidebarContainer, S.loadingContainer, p),
                  style: b,
                  children: (0, r.jsx)(o.$jN, {
                      animated: !0,
                      type: x ? o.$jN.Type.SPINNING_CIRCLE : o.$jN.Type.CHASING_DOTS,
                  }),
              })
            : (0, r.jsx)(A.Gt, {
                  value: y,
                  children: (0, r.jsx)("div", {
                      className: a()(S.sidebarContainer, p),
                      style: b,
                      children: (0, r.jsx)(f.Z, {
                          user: L,
                          displayProfile: G,
                          themeType: null,
                          themeOverride: k,
                          forceShowPremium: !0,
                          className: S.profileThemedContainer,
                          children: (0, r.jsxs)("div", {
                              className: S.innerContainer,
                              children: [
                                  (0, r.jsx)(R.ZP, {
                                      userId: t,
                                      guildId: n,
                                      onClose: i,
                                      moderatorReportId: D,
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
