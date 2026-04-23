n.r(t), n.d(t, { default: () => h });
var l = n(627968),
    a = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(311907),
    E = n(289873),
    _ = n(686956),
    u = n(475743),
    o = n(736653),
    c = n(80682),
    d = n(793574),
    A = n(688810),
    g = n(221950),
    T = n(950191),
    I = n(454719),
    N = n(946356),
    G = n(696451),
    m = n(287809),
    O = n(985925),
    S = n(295191),
    R = n(586387),
    D = n(271730);
function h(e) {
    let { userId: t, guildId: n, onClose: r, className: h, infoPanelClassName: L, style: C, moderatorReportId: M } = e,
        f = (0, O.q)(n),
        x = (0, s.bG)([m.default], () => m.default.getUser(t), [t]),
        U = (0, s.bG)([G.Ay], () => G.Ay.getMember(n, t), [n, t]),
        [p, b] = a.useState(null == x || null == U),
        F = (0, u.A)(U),
        k = a.useRef(null),
        { analyticsLocations: P } = (0, A.Ay)(d.A.GUILD_MEMBER_MOD_VIEW),
        j = (0, T.Ay)(t, n),
        v = (0, o.Ay)();
    return (a.useEffect(() => {
        f || r();
    }, [f, r]),
    a.useEffect(() => {
        null == F || null != U || p || r();
    }, [p, U, r, F]),
    a.useEffect(() => {
        null != x && null != U && b(!1);
    }, [x, U]),
    a.useEffect(() => {
        let e = null == U;
        return (
            !p && e && (k.current = window.setTimeout(r, 500)),
            () => {
                null != k.current && window.clearTimeout(k.current);
            }
        );
    }, [p, U, r]),
    (0, c.Eq)({ [n]: [t] }, "GuildMemberModViewSidebar"),
    a.useEffect(() => {
        !(async function () {
            let e = [
                _.A.requestMembersById(n, [t]),
                (0, g.jo)(n, [t]),
                (0, I.A)(t, void 0, { guildId: n, dispatchWait: !0 }),
            ];
            await Promise.all(e), b(!1);
        })();
    }, [n, t]),
    f)
        ? p || null == x || null == U
            ? (0, l.jsx)("div", {
                  className: i()(D.so, D.g4, h),
                  style: C,
                  children: (0, l.jsx)(E.y, {
                      animated: !0,
                      type: p ? E.y.Type.SPINNING_CIRCLE : E.y.Type.CHASING_DOTS,
                  }),
              })
            : (0, l.jsx)(A.f5, {
                  value: P,
                  children: (0, l.jsx)("div", {
                      className: i()(D.so, h),
                      style: C,
                      children: (0, l.jsx)(N.A, {
                          user: x,
                          displayProfile: j,
                          themeType: null,
                          themeOverride: v,
                          forceShowPremium: !0,
                          className: D.a2,
                          children: (0, l.jsxs)("div", {
                              className: D.WH,
                              children: [
                                  (0, l.jsx)(R.Ay, { userId: t, guildId: n, onClose: r, moderatorReportId: M }),
                                  (0, l.jsx)(S.A, { userId: t, guildId: n, onClose: r, className: L }),
                              ],
                          }),
                      }),
                  }),
              })
        : null;
}
