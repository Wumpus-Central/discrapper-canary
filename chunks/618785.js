var n = l(477900),
    a = l(582128),
    r = l(189213),
    i = l(858899),
    s = l(192308),
    u = l(331322),
    o = l(691885),
    d = l(682163),
    c = l(125372),
    f = l(653036),
    m = l(191850),
    p = l(792996);
function g(e) {
    let { projectId: t, transitionState: l, onClose: g } = e,
        v = (0, c.A)(t),
        { appName: h, moving: x, guilds: b, guild: y, rows: j, pending: k, error: A } = v,
        S = a.useMemo(
            () =>
                b.map((e) => ({
                    id: e.id,
                    value: e.id,
                    label: e.name,
                    leading: (0, n.jsx)(d.Ay, { guild: e, size: d.Ay.Sizes.MINI, active: !0 }),
                })),
            [b],
        );
    return (0, n.jsx)(r.a, {
        transitionState: l,
        onClose: g,
        title: p.intl.formatToPlainString(x ? m.default.M4jq44 : m.default.PE4egI, { app: h }),
        notice: null != A ? { type: "critical", message: A, role: "alert" } : void 0,
        actions: [
            { text: p.intl.string(p.t["ETE/oC"]), variant: "secondary", onClick: g, disabled: k },
            {
                text: p.intl.string(x ? m.default.MHSKBb : m.default["+uQwxA"]),
                variant: "primary",
                onClick: async function () {
                    let e = await v.submit();
                    null != e && ((0, i.P0)({ text: e, variant: "success" }), (0, s.s7)());
                },
                loading: k,
                disabled: null == y || k,
            },
        ],
        children: (0, n.jsxs)(u.B, {
            gap: 16,
            children: [
                null != y
                    ? (0, n.jsx)(o.l, {
                          label: p.intl.string(m.default.Uq5hU9),
                          options: S,
                          value: y.id,
                          onSelectionChange: v.pickGuild,
                          selectionMode: "single",
                          disabled: k,
                          fullWidth: !0,
                      })
                    : null,
                j.length > 0 ? (0, n.jsx)(f.A, { rows: j }) : null,
            ],
        }),
    });
}
l.d(
    t,
    {},
    {
        A: function (e) {
            (0, s.qf)((t) => (0, n.jsx)(g, { ...t, ...e }));
        },
    },
);
