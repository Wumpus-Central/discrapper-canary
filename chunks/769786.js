n.d(t, { A: () => m }), n(321073);
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(417597),
    o = n(990078),
    c = n(397927),
    u = n(950072),
    E = n(376092),
    d = n(317525),
    _ = n(71393),
    g = n(558393),
    A = n(829887),
    T = n(595849),
    f = n(486974),
    h = n(652215),
    I = n(985018),
    O = n(636376);
function N(e) {
    var t, n;
    let { permission: r, roleIds: a, guild: _, specMap: g } = e,
        A = h.xBc[r],
        f = null != (t = null == (n = g[A.toString()]) ? void 0 : n.title) ? t : (0, E.hx)(A),
        N = T.S2.has(A),
        m = (0, s.yK)([d.A], () => d.A.getManyRoles(_.id, a), [_.id, a]);
    return (0, l.jsx)(o.m, {
        "aria-label": I.intl.string(I.t["0g8Xd/"]),
        __unsupportedReactNodeAsText: (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    children: N ? I.intl.string(I.t["GEuu/O"]) : I.intl.string(I.t.wgGiCk),
                }),
                m.map((e) =>
                    (0, l.jsx)(
                        "div",
                        {
                            className: O.Zf,
                            children: (0, l.jsx)(u.A, {
                                role: e,
                                guildId: _.id,
                            }),
                        },
                        e.id,
                    ),
                ),
            ],
        }),
        children: (0, l.jsxs)(c.DUT, {
            className: i()(O.t2, { [O.aE]: N }),
            children: [
                N &&
                    (0, l.jsx)(c.m5V, {
                        size: "custom",
                        width: 16,
                        height: 16,
                        color: c.LU0.colors.TEXT_BRAND,
                    }),
                (0, l.jsx)(c.Text, {
                    variant: "text-xs/medium",
                    color: "interactive-text-default",
                    children: f,
                }),
            ],
        }),
    });
}
let m = r.memo(function (e) {
    let { member: t, onNavigate: n } = e,
        a = (0, s.bG)([_.A], () => _.A.getGuild(t.guildId), [t.guildId]),
        o = (0, T.RP)(t.userId, t.guildId, T.yO),
        u = (0, T.RP)(t.userId, t.guildId, T.lp),
        E = Object.keys(o).length,
        d = Object.keys(u).length,
        m = r.useMemo(() => (null != a ? g.A.getGuildPermissionSpecMap(a) : null), [a]),
        S = r.useMemo(() => (null != a ? g.A.generateGuildPermissionSpec(a) : null), [a]),
        p = r.useMemo(() => {
            if (null == a || null == m) return null;
            if (0 === E)
                return (0, l.jsx)("div", {
                    className: i()(O.t2, O.FI),
                    children: (0, l.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "text-feedback-positive",
                        children: I.intl.string(I.t.sXhykX),
                    }),
                });
            let e = [];
            return (
                null == S ||
                    S.forEach((t) => {
                        t.permissions.forEach((t) => {
                            let n = t.flag,
                                r = T.lp.find((e) => h.xBc[e] === n);
                            if (null == r) return;
                            let i = o[r];
                            null != i &&
                                e.push(
                                    (0, l.jsx)(
                                        N,
                                        {
                                            permission: r,
                                            roleIds: i,
                                            guild: a,
                                            specMap: m,
                                        },
                                        r,
                                    ),
                                );
                        });
                    }),
                e
            );
        }, [a, E, o, S, m]);
    return null == a
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: O.N1,
                      children: [
                          (0, l.jsx)(c.Text, {
                              variant: "eyebrow",
                              color: "text-default",
                              children: I.intl.string(I.t.ZCq2nC),
                          }),
                          (0, l.jsxs)(c.DUT, {
                              className: O.bz,
                              onClick: () => n(f.g.PERMISSIONS),
                              children: [
                                  (0, l.jsx)(c.Text, {
                                      variant: "eyebrow",
                                      color: "interactive-text-default",
                                      children: I.intl.format(I.t["0x6aTm"], { count: d }),
                                  }),
                                  (0, l.jsx)(c._BQ, {
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, l.jsx)(A.SQ, {
                      children: (0, l.jsx)(A.RU, {
                          description: (0, l.jsx)("div", {
                              className: O.SL,
                              children: p,
                          }),
                      }),
                  }),
              ],
          });
});
