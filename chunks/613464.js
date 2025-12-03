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
    S = n(345226);
function p(e) {
    let { userId: t, guildId: n, onClose: i, className: p, infoPanelClassName: C, style: D, moderatorReportId: U } = e,
        L = (0, O.m)(n),
        M = (0, a.e7)([h.default], () => h.default.getUser(t), [t]),
        x = (0, a.e7)([N.ZP], () => N.ZP.getMember(n, t), [n, t]),
        [b, v] = l.useState(null == M || null == x),
        P = (0, c.Z)(x),
        j = l.useRef(null),
        { analyticsLocations: y } = (0, A.ZP)(_.Z.GUILD_MEMBER_MOD_VIEW),
        G = (0, I.ZP)(t, n),
        k = (0, E.ZP)();
    return (l.useEffect(() => {
        L || i();
    }, [L, i]),
    l.useEffect(() => {
        null == P || null != x || b || i();
    }, [b, x, i, P]),
    l.useEffect(() => {
        null != M && null != x && v(!1);
    }, [M, x]),
    l.useEffect(() => {
        let e = null == x;
        return (
            !b && e && (j.current = window.setTimeout(i, 500)),
            () => {
                null != j.current && window.clearTimeout(j.current);
            }
        );
    }, [b, x, i]),
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
        ? b || null == M || null == x
            ? (0, r.jsx)("div", {
                  className: s()(S.sidebarContainer, S.loadingContainer, p),
                  style: D,
                  children: (0, r.jsx)(o.$jN, {
                      animated: !0,
                      type: b ? o.$jN.Type.SPINNING_CIRCLE : o.$jN.Type.CHASING_DOTS,
                  }),
              })
            : (0, r.jsx)(A.Gt, {
                  value: y,
                  children: (0, r.jsx)("div", {
                      className: s()(S.sidebarContainer, p),
                      style: D,
                      children: (0, r.jsx)(g.Z, {
                          user: M,
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
                                      moderatorReportId: U,
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
