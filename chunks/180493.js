i.d(n, { default: () => C });
var e = i(477900),
    l = i(582128),
    a = i(284009),
    s = i.n(a),
    r = i(189213),
    o = i(683071),
    c = i(696986),
    d = i(691885),
    u = i(608461),
    p = i(627363),
    g = i(130771),
    m = i(269927),
    h = i(105292);
function C(t) {
    let { transitionState: n, application: i, onClose: a } = t,
        [C, b] = l.useState(i?.team?.id),
        { teams: f } = (0, g.A)(),
        x = l.useMemo(
            () =>
                f
                    .filter((t) => t.payout_account_status === m.y.ACTIVE)
                    .map((t) => ({ id: t.id, label: t.name, value: t.id })),
            [f],
        ),
        y = i?.team?.id !== C,
        [v, { loading: A, error: k }] = (0, u.A)(p.Ay.transferApplication);
    async function w() {
        (s()(null != i, "no application"),
            s()(null != C, "no team selected"),
            null != (await v({ applicationId: i.id, teamId: C })) && a());
    }
    let j = i?.team != null;
    return (0, e.jsxs)(r.a, {
        transitionState: n,
        title: j ? h.intl.string(h.t["4TveVv"]) : h.intl.string(h.t.feBUAV),
        subtitle: j ? h.intl.string(h.t.c7HS0n) : h.intl.string(h.t.atZ50I),
        onClose: a,
        actions: [
            { variant: "secondary", text: h.intl.string(h.t["ETE/oC"]), onClick: a },
            { variant: "critical-primary", text: h.intl.string(h.t["R3BPH+"]), loading: A, disabled: !y, onClick: w },
        ],
        children: [
            j
                ? (0, e.jsx)(o.w, {
                      type: "warning",
                      title: h.intl.string(h.t.Caz8nL),
                      message: h.intl.string(h.t.u4ddHZ),
                      role: "none",
                  })
                : null,
            null != k ? (0, e.jsx)(o.w, { type: "critical", message: k.message, role: "alert" }) : null,
            (0, e.jsx)(c.h, { size: 16 }),
            (0, e.jsx)(d.l, {
                selectionMode: "single",
                label: j ? h.intl.string(h.t.xZ6ZL6) : h.intl.string(h.t.bfmKdK),
                required: !0,
                options: x,
                placeholder: h.intl.string(h.t.QXf93A),
                value: C,
                disabled: 0 === x.length,
                onSelectionChange: b,
            }),
        ],
    });
}
