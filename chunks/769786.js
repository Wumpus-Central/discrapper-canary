n.d(t, { A: () => L }), n(321073);
var l = n(627968),
    a = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(417597),
    E = n(990078),
    _ = n(834730),
    u = n(939249),
    o = n(254138),
    c = n(827734),
    d = n(320448),
    A = n(950072),
    g = n(376092),
    T = n(317525),
    I = n(71393),
    N = n(558393),
    G = n(829887),
    m = n(595849),
    O = n(486974),
    S = n(652215),
    R = n(985018),
    D = n(830173);
function h(e) {
    let { permission: t, roleIds: n, guild: a, specMap: r } = e,
        d = S.xBc[t],
        I = r[d.toString()]?.title ?? (0, g.hx)(d),
        N = m.S2.has(d),
        G = (0, s.yK)([T.A], () => T.A.getManyRoles(a.id, n), [a.id, n]);
    return (0, l.jsx)(E.m, {
        "aria-label": R.intl.string(R.t["0g8Xd/"]),
        __unsupportedReactNodeAsText: (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(_.E, {
                    variant: "text-sm/normal",
                    children: N ? R.intl.string(R.t["GEuu/O"]) : R.intl.string(R.t.wgGiCk),
                }),
                G.map((e) =>
                    (0, l.jsx)("div", { className: D.Zf, children: (0, l.jsx)(A.A, { role: e, guildId: a.id }) }, e.id),
                ),
            ],
        }),
        children: (0, l.jsxs)(u.D, {
            className: i()(D.t2, { [D.aE]: N }),
            children: [
                N && (0, l.jsx)(o.m, { size: "custom", width: 16, height: 16, color: c.A.colors.TEXT_BRAND }),
                (0, l.jsx)(_.E, { variant: "text-xs/medium", color: "interactive-text-default", children: I }),
            ],
        }),
    });
}
let L = a.memo(function (e) {
    let { member: t, onNavigate: n } = e,
        r = (0, s.bG)([I.A], () => I.A.getGuild(t.guildId), [t.guildId]),
        E = (0, m.RP)(t.userId, t.guildId, m.yO),
        o = (0, m.RP)(t.userId, t.guildId, m.lp),
        c = Object.keys(E).length,
        A = Object.keys(o).length,
        g = a.useMemo(() => (null != r ? N.A.getGuildPermissionSpecMap(r) : null), [r]),
        T = a.useMemo(() => (null != r ? N.A.generateGuildPermissionSpec(r) : null), [r]),
        L = a.useMemo(() => {
            if (null == r || null == g) return null;
            if (0 === c)
                return (0, l.jsx)("div", {
                    className: i()(D.t2, D.FI),
                    children: (0, l.jsx)(_.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-positive",
                        children: R.intl.string(R.t.sXhykX),
                    }),
                });
            let e = [];
            return (
                T?.forEach((t) => {
                    t.permissions.forEach((t) => {
                        let n = t.flag,
                            a = m.lp.find((e) => S.xBc[e] === n);
                        if (null == a) return;
                        let i = E[a];
                        null != i && e.push((0, l.jsx)(h, { permission: a, roleIds: i, guild: r, specMap: g }, a));
                    });
                }),
                e
            );
        }, [r, c, E, T, g]);
    return null == r
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: D.N1,
                      children: [
                          (0, l.jsx)(_.E, {
                              variant: "eyebrow",
                              color: "text-default",
                              children: R.intl.string(R.t.ZCq2nC),
                          }),
                          (0, l.jsxs)(u.D, {
                              className: D.bz,
                              onClick: () => n(O.g.PERMISSIONS),
                              children: [
                                  (0, l.jsx)(_.E, {
                                      variant: "eyebrow",
                                      color: "interactive-text-default",
                                      children: R.intl.format(R.t["0x6aTm"], { count: A }),
                                  }),
                                  (0, l.jsx)(d._, { size: "custom", width: 16, height: 16 }),
                              ],
                          }),
                      ],
                  }),
                  (0, l.jsx)(G.SQ, {
                      children: (0, l.jsx)(G.RU, { description: (0, l.jsx)("div", { className: D.SL, children: L }) }),
                  }),
              ],
          });
});
