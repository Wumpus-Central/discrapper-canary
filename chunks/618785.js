var n = l(477900),
    a = l(582128),
    r = l(189213),
    i = l(858899),
    s = l(192308),
    u = l(331322),
    o = l(691885),
    d = l(682163),
    c = l(777847),
    f = l(125372),
    m = l(653036),
    g = l(191850),
    p = l(792996);
function v(e) {
    let { projectId: t, transitionState: l, onClose: v } = e,
        h = (0, f.A)(t),
        { appName: x, moving: b, guilds: y, guild: j, rows: A, pending: k, error: w } = h,
        S = a.useMemo(
            () =>
                y.map((e) => ({
                    id: e.id,
                    value: e.id,
                    label: e.name,
                    leading: (0, n.jsx)(d.Ay, { guild: e, size: d.Ay.Sizes.MINI, active: !0 }),
                })),
            [y],
        );
    return (0, n.jsx)(r.a, {
        transitionState: l,
        onClose: v,
        title: p.intl.formatToPlainString(b ? g.default.M4jq44 : g.default.PE4egI, { app: x }),
        notice: null != w ? { type: "critical", message: w, role: "alert" } : void 0,
        actions: [
            { text: p.intl.string(p.t["ETE/oC"]), variant: "secondary", onClick: v, disabled: k },
            {
                text: p.intl.string(b ? g.default.MHSKBb : g.default["+uQwxA"]),
                variant: "primary",
                onClick: async function () {
                    let e = await h.submit();
                    null != e &&
                        null != j &&
                        ((0, i.P0)({ text: e, variant: "success" }),
                        (0, s.s7)(),
                        (0, c.n0)(t, x, { kind: "server", guildId: j.id, name: j.name }));
                },
                loading: k,
                disabled: null == j || k,
            },
        ],
        children: (0, n.jsxs)(u.B, {
            gap: 16,
            children: [
                null != j
                    ? (0, n.jsx)(o.l, {
                          label: p.intl.string(g.default.Uq5hU9),
                          options: S,
                          value: j.id,
                          onSelectionChange: h.pickGuild,
                          selectionMode: "single",
                          disabled: k,
                          fullWidth: !0,
                      })
                    : null,
                A.length > 0 ? (0, n.jsx)(m.A, { rows: A }) : null,
            ],
        }),
    });
}
l.d(
    t,
    {},
    {
        A: function (e) {
            (0, s.qf)((t) => (0, n.jsx)(v, { ...t, ...e }));
        },
    },
);
