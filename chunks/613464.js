n.d(t, { Z: () => S }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    u = n(749210),
    c = n(110924),
    d = n(410030),
    E = n(616780),
    _ = n(100527),
    A = n(906732),
    m = n(527379),
    T = n(687158),
    I = n(184301),
    g = n(502762),
    f = n(271383),
    h = n(594174),
    N = n(189357),
    O = n(718617),
    p = n(327250),
    R = n(345226);
function S(e) {
    let { userId: t, guildId: n, onClose: i, className: S, infoPanelClassName: C, style: D } = e,
        L = (0, N.m)(n),
        b = (0, s.e7)([h.default], () => h.default.getUser(t), [t]),
        U = (0, s.e7)([f.ZP], () => f.ZP.getMember(n, t), [n, t]),
        [v, M] = l.useState(null == b || null == U),
        x = (0, c.Z)(U),
        P = l.useRef(null),
        { analyticsLocations: j } = (0, A.ZP)(_.Z.GUILD_MEMBER_MOD_VIEW),
        y = (0, T.ZP)(t, n),
        w = (0, d.ZP)();
    return (l.useEffect(() => {
        L || i();
    }, [L, i]),
    l.useEffect(() => {
        null == x || null != U || v || i();
    }, [v, U, i, x]),
    l.useEffect(() => {
        null != b && null != U && M(!1);
    }, [b, U]),
    l.useEffect(() => {
        let e = null == U;
        return (
            !v && e && (P.current = window.setTimeout(i, 500)),
            () => {
                null != P.current && window.clearTimeout(P.current);
            }
        );
    }, [v, U, i]),
    (0, E.$)({ [n]: [t] }, "GuildMemberModViewSidebar"),
    l.useEffect(() => {
        !(async function () {
            let e = [
                u.Z.requestMembersById(n, [t]),
                (0, m.nb)(n, [t]),
                (0, I.Z)(t, void 0, {
                    guildId: n,
                    dispatchWait: !0,
                }),
            ];
            await Promise.all(e), M(!1);
        })();
    }, [n, t]),
    L)
        ? v || null == b || null == U
            ? (0, r.jsx)("div", {
                  className: a()(R.sidebarContainer, R.loadingContainer, S),
                  style: D,
                  children: (0, r.jsx)(o.$jN, {
                      animated: !0,
                      type: v ? o.$jN.Type.SPINNING_CIRCLE : o.$jN.Type.CHASING_DOTS,
                  }),
              })
            : (0, r.jsx)(A.Gt, {
                  value: j,
                  children: (0, r.jsx)("div", {
                      className: a()(R.sidebarContainer, S),
                      style: D,
                      children: (0, r.jsx)(g.Z, {
                          user: b,
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
