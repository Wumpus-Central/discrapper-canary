n.d(t, { A: () => G }), n(321073);
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(417597),
    o = n(990078),
    E = n(397927),
    u = n(950072),
    c = n(376092),
    _ = n(317525),
    d = n(71393),
    A = n(558393),
    g = n(829887),
    T = n(595849),
    I = n(486974),
    N = n(652215),
    h = n(985018),
    m = n(249101);
function S(e) {
    let { permission: t, roleIds: n, guild: r, specMap: a } = e,
        d = N.xBc[t],
        A = a[d.toString()]?.title ?? (0, c.hx)(d),
        g = T.S2.has(d),
        I = (0, s.yK)([_.A], () => _.A.getManyRoles(r.id, n), [r.id, n]);
    return (0, l.jsx)(o.m, {
        "aria-label": h.intl.string(h.t["0g8Xd/"]),
        __unsupportedReactNodeAsText: (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(E.Text, {
                    variant: "text-sm/normal",
                    children: g ? h.intl.string(h.t["GEuu/O"]) : h.intl.string(h.t.wgGiCk),
                }),
                I.map((e) =>
                    (0, l.jsx)("div", { className: m.Zf, children: (0, l.jsx)(u.A, { role: e, guildId: r.id }) }, e.id),
                ),
            ],
        }),
        children: (0, l.jsxs)(E.DUT, {
            className: i()(m.t2, { [m.aE]: g }),
            children: [
                g && (0, l.jsx)(E.m5V, { size: "custom", width: 16, height: 16, color: E.LU0.colors.TEXT_BRAND }),
                (0, l.jsx)(E.Text, { variant: "text-xs/medium", color: "interactive-text-default", children: A }),
            ],
        }),
    });
}
let G = r.memo(function (e) {
    let { member: t, onNavigate: n } = e,
        a = (0, s.bG)([d.A], () => d.A.getGuild(t.guildId), [t.guildId]),
        o = (0, T.RP)(t.userId, t.guildId, T.yO),
        u = (0, T.RP)(t.userId, t.guildId, T.lp),
        c = Object.keys(o).length,
        _ = Object.keys(u).length,
        G = r.useMemo(() => (null != a ? A.A.getGuildPermissionSpecMap(a) : null), [a]),
        O = r.useMemo(() => (null != a ? A.A.generateGuildPermissionSpec(a) : null), [a]),
        R = r.useMemo(() => {
            if (null == a || null == G) return null;
            if (0 === c)
                return (0, l.jsx)("div", {
                    className: i()(m.t2, m.FI),
                    children: (0, l.jsx)(E.Text, {
                        variant: "text-sm/normal",
                        color: "text-feedback-positive",
                        children: h.intl.string(h.t.sXhykX),
                    }),
                });
            let e = [];
            return (
                O?.forEach((t) => {
                    t.permissions.forEach((t) => {
                        let n = t.flag,
                            r = T.lp.find((e) => N.xBc[e] === n);
                        if (null == r) return;
                        let i = o[r];
                        null != i && e.push((0, l.jsx)(S, { permission: r, roleIds: i, guild: a, specMap: G }, r));
                    });
                }),
                e
            );
        }, [a, c, o, O, G]);
    return null == a
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: m.N1,
                      children: [
                          (0, l.jsx)(E.Text, {
                              variant: "eyebrow",
                              color: "text-default",
                              children: h.intl.string(h.t.ZCq2nC),
                          }),
                          (0, l.jsxs)(E.DUT, {
                              className: m.bz,
                              onClick: () => n(I.g.PERMISSIONS),
                              children: [
                                  (0, l.jsx)(E.Text, {
                                      variant: "eyebrow",
                                      color: "interactive-text-default",
                                      children: h.intl.format(h.t["0x6aTm"], { count: _ }),
                                  }),
                                  (0, l.jsx)(E._BQ, { size: "custom", width: 16, height: 16 }),
                              ],
                          }),
                      ],
                  }),
                  (0, l.jsx)(g.SQ, {
                      children: (0, l.jsx)(g.RU, { description: (0, l.jsx)("div", { className: m.SL, children: R }) }),
                  }),
              ],
          });
});
