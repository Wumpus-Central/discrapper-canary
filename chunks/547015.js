n.d(t, { A: () => b }), n(896048);
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(311907),
    o = n(397927),
    c = n(686956),
    u = n(475743),
    E = n(736653),
    d = n(80682),
    _ = n(793574),
    g = n(688810),
    A = n(221950),
    T = n(950191),
    f = n(454719),
    h = n(946356),
    I = n(696451),
    O = n(287809),
    N = n(985925),
    m = n(295191),
    S = n(586387),
    p = n(12999);
function b(e) {
    let { userId: t, guildId: n, onClose: a, className: b, infoPanelClassName: G, style: R, moderatorReportId: D } = e,
        L = (0, N.q)(n),
        x = (0, s.bG)([O.default], () => O.default.getUser(t), [t]),
        C = (0, s.bG)([I.Ay], () => I.Ay.getMember(n, t), [n, t]),
        [M, v] = r.useState(null == x || null == C),
        j = (0, u.A)(C),
        U = r.useRef(null),
        { analyticsLocations: y } = (0, g.Ay)(_.A.GUILD_MEMBER_MOD_VIEW),
        P = (0, T.Ay)(t, n),
        k = (0, E.Ay)();
    return (r.useEffect(() => {
        L || a();
    }, [L, a]),
    r.useEffect(() => {
        null == j || null != C || M || a();
    }, [M, C, a, j]),
    r.useEffect(() => {
        null != x && null != C && v(!1);
    }, [x, C]),
    r.useEffect(() => {
        let e = null == C;
        return (
            !M && e && (U.current = window.setTimeout(a, 500)),
            () => {
                null != U.current && window.clearTimeout(U.current);
            }
        );
    }, [M, C, a]),
    (0, d.E)({ [n]: [t] }, "GuildMemberModViewSidebar"),
    r.useEffect(() => {
        !(async function () {
            let e = [
                c.A.requestMembersById(n, [t]),
                (0, A.jo)(n, [t]),
                (0, f.A)(t, void 0, {
                    guildId: n,
                    dispatchWait: !0,
                }),
            ];
            await Promise.all(e), v(!1);
        })();
    }, [n, t]),
    L)
        ? M || null == x || null == C
            ? (0, l.jsx)("div", {
                  className: i()(p.so, p.g4, b),
                  style: R,
                  children: (0, l.jsx)(o.y$y, {
                      animated: !0,
                      type: M ? o.y$y.Type.SPINNING_CIRCLE : o.y$y.Type.CHASING_DOTS,
                  }),
              })
            : (0, l.jsx)(g.f5, {
                  value: y,
                  children: (0, l.jsx)("div", {
                      className: i()(p.so, b),
                      style: R,
                      children: (0, l.jsx)(h.A, {
                          user: x,
                          displayProfile: P,
                          themeType: null,
                          themeOverride: k,
                          forceShowPremium: !0,
                          className: p.a2,
                          children: (0, l.jsxs)("div", {
                              className: p.WH,
                              children: [
                                  (0, l.jsx)(S.Ay, {
                                      userId: t,
                                      guildId: n,
                                      onClose: a,
                                      moderatorReportId: D,
                                  }),
                                  (0, l.jsx)(m.A, {
                                      userId: t,
                                      guildId: n,
                                      onClose: a,
                                      className: G,
                                  }),
                              ],
                          }),
                      }),
                  }),
              })
        : null;
}
