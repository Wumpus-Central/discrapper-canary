n.d(i, { default: () => h });
var e = n(627968),
    l = n(64700),
    a = n(284009),
    s = n.n(a),
    r = n(158954),
    d = n(397927),
    c = n(608461),
    o = n(627363),
    u = n(130771),
    p = n(269927),
    g = n(985018);
function h(t) {
    let { transitionState: i, application: n, onClose: a } = t,
        [h, m] = l.useState(n?.team?.id),
        { teams: x } = (0, u.A)(),
        C = l.useMemo(
            () =>
                x
                    .filter((t) => t.payout_account_status === p.y.ACTIVE)
                    .map((t) => ({ id: t.id, label: t.name, value: t.id })),
            [x],
        ),
        b = n?.team?.id !== h,
        [v, { loading: y, error: A }] = (0, c.A)(o.Ay.transferApplication),
        f = async () => {
            s()(null != n, "no application"),
                s()(null != h, "no team selected"),
                null != (await v({ applicationId: n.id, teamId: h })) && a();
        },
        j = n?.team != null;
    return (0, e.jsxs)(r.Modal, {
        transitionState: i,
        title: j ? g.intl.string(g.t["4TveVv"]) : g.intl.string(g.t.feBUAV),
        subtitle: j ? g.intl.string(g.t.c7HS0n) : g.intl.string(g.t.atZ50I),
        onClose: a,
        actions: [
            { variant: "secondary", text: g.intl.string(g.t["ETE/oC"]), onClick: a },
            { variant: "critical-primary", text: g.intl.string(g.t["R3BPH+"]), loading: y, disabled: !b, onClick: f },
        ],
        children: [
            j
                ? (0, e.jsxs)(d.po8, {
                      messageType: d.YCn.WARNING,
                      children: [
                          g.intl.string(g.t.Caz8nL),
                          (0, e.jsx)(d.hKd, { size: 4 }),
                          (0, e.jsx)(d.Text, { variant: "text-sm/normal", children: g.intl.string(g.t.u4ddHZ) }),
                      ],
                  })
                : null,
            null != A ? (0, e.jsx)(d.wx6, { type: "critical", children: A.message }) : null,
            (0, e.jsx)(d.hKd, { size: 16 }),
            (0, e.jsx)(d.l6P, {
                selectionMode: "single",
                label: j ? g.intl.string(g.t.xZ6ZL6) : g.intl.string(g.t.bfmKdK),
                required: !0,
                options: C,
                placeholder: g.intl.string(g.t.QXf93A),
                value: h,
                disabled: 0 === C.length,
                onSelectionChange: m,
            }),
        ],
    });
}
