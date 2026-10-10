n.d(i, { default: () => C });
var e = n(477900),
    l = n(582128),
    a = n(284009),
    s = n.n(a),
    r = n(189213),
    o = n(683071),
    c = n(696986),
    d = n(691885),
    u = n(608461),
    p = n(627363),
    g = n(130771),
    m = n(269927),
    h = n(660183);
function C(t) {
    let { transitionState: i, application: n, onClose: a } = t,
        [C, b] = l.useState(n?.team?.id),
        { teams: f } = (0, g.A)(),
        x = l.useMemo(
            () =>
                f
                    .filter((t) => t.payout_account_status === m.y.ACTIVE)
                    .map((t) => ({ id: t.id, label: t.name, value: t.id })),
            [f],
        ),
        y = n?.team?.id !== C,
        [v, { loading: A, error: k }] = (0, u.A)(p.Ay.transferApplication);
    async function w() {
        (s()(null != n, "no application"),
            s()(null != C, "no team selected"),
            null != (await v({ applicationId: n.id, teamId: C })) && a());
    }
    let j = n?.team != null;
    return (0, e.jsxs)(r.a, {
        transitionState: i,
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
                      role: "static",
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
