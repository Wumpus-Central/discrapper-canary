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
    p = l(191850),
    g = l(792996);
function v(e) {
    let { projectId: t, transitionState: l, onClose: v } = e,
        h = (0, f.A)(t),
        { appName: x, moving: b, guilds: y, guild: j, rows: k, pending: A, error: S } = h,
        w = a.useMemo(
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
        title: g.intl.formatToPlainString(b ? p.default.M4jq44 : p.default.PE4egI, { app: x }),
        notice: null != S ? { type: "critical", message: S, role: "alert" } : void 0,
        actions: [
            { text: g.intl.string(g.t["ETE/oC"]), variant: "secondary", onClick: v, disabled: A },
            {
                text: g.intl.string(b ? p.default.MHSKBb : p.default["+uQwxA"]),
                variant: "primary",
                onClick: async function () {
                    let e = await h.submit();
                    null != e &&
                        null != j &&
                        ((0, i.P0)({ text: e, variant: "success" }),
                        (0, s.s7)(),
                        (0, c.n0)(t, x, { kind: "server", guildId: j.id, name: j.name }));
                },
                loading: A,
                disabled: null == j || A,
            },
        ],
        children: (0, n.jsxs)(u.B, {
            gap: 16,
            children: [
                null != j
                    ? (0, n.jsx)(o.l, {
                          label: g.intl.string(p.default.Uq5hU9),
                          options: w,
                          value: j.id,
                          onSelectionChange: h.pickGuild,
                          selectionMode: "single",
                          disabled: A,
                          fullWidth: !0,
                      })
                    : null,
                k.length > 0 ? (0, n.jsx)(m.A, { rows: k }) : null,
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
