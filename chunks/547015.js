n.d(t, { A: () => C });
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(311907),
    o = n(397927),
    E = n(686956),
    u = n(475743),
    c = n(736653),
    _ = n(80682),
    d = n(793574),
    A = n(688810),
    g = n(221950),
    T = n(950191),
    I = n(454719),
    N = n(946356),
    h = n(696451),
    m = n(287809),
    S = n(985925),
    G = n(295191),
    O = n(586387),
    R = n(885858);
function C(e) {
    let { userId: t, guildId: n, onClose: a, className: C, infoPanelClassName: L, style: D, moderatorReportId: f } = e,
        x = (0, S.q)(n),
        M = (0, s.bG)([m.default], () => m.default.getUser(t), [t]),
        p = (0, s.bG)([h.Ay], () => h.Ay.getMember(n, t), [n, t]),
        [U, k] = r.useState(null == M || null == p),
        b = (0, u.A)(p),
        F = r.useRef(null),
        { analyticsLocations: j } = (0, A.Ay)(d.A.GUILD_MEMBER_MOD_VIEW),
        v = (0, T.Ay)(t, n),
        P = (0, c.Ay)();
    return (r.useEffect(() => {
        x || a();
    }, [x, a]),
    r.useEffect(() => {
        null == b || null != p || U || a();
    }, [U, p, a, b]),
    r.useEffect(() => {
        null != M && null != p && k(!1);
    }, [M, p]),
    r.useEffect(() => {
        let e = null == p;
        return (
            !U && e && (F.current = window.setTimeout(a, 500)),
            () => {
                null != F.current && window.clearTimeout(F.current);
            }
        );
    }, [U, p, a]),
    (0, _.Eq)({ [n]: [t] }, "GuildMemberModViewSidebar"),
    r.useEffect(() => {
        !(async function () {
            let e = [
                E.A.requestMembersById(n, [t]),
                (0, g.jo)(n, [t]),
                (0, I.A)(t, void 0, { guildId: n, dispatchWait: !0 }),
            ];
            await Promise.all(e), k(!1);
        })();
    }, [n, t]),
    x)
        ? U || null == M || null == p
            ? (0, l.jsx)("div", {
                  className: i()(R.so, R.g4, C),
                  style: D,
                  children: (0, l.jsx)(o.y$y, {
                      animated: !0,
                      type: U ? o.y$y.Type.SPINNING_CIRCLE : o.y$y.Type.CHASING_DOTS,
                  }),
              })
            : (0, l.jsx)(A.f5, {
                  value: j,
                  children: (0, l.jsx)("div", {
                      className: i()(R.so, C),
                      style: D,
                      children: (0, l.jsx)(N.A, {
                          user: M,
                          displayProfile: v,
                          themeType: null,
                          themeOverride: P,
                          forceShowPremium: !0,
                          className: R.a2,
                          children: (0, l.jsxs)("div", {
                              className: R.WH,
                              children: [
                                  (0, l.jsx)(O.Ay, { userId: t, guildId: n, onClose: a, moderatorReportId: f }),
                                  (0, l.jsx)(G.A, { userId: t, guildId: n, onClose: a, className: L }),
                              ],
                          }),
                      }),
                  }),
              })
        : null;
}
