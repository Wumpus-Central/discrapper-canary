n.d(i, { default: () => b });
var e = n(627968),
    l = n(64700),
    a = n(284009),
    s = n.n(a),
    r = n(189213),
    d = n(512950),
    c = n(696986),
    o = n(834730),
    u = n(683071),
    p = n(691885),
    g = n(608461),
    h = n(627363),
    m = n(130771),
    x = n(269927),
    C = n(985018);
function b(t) {
    let { transitionState: i, application: n, onClose: a } = t,
        [b, v] = l.useState(n?.team?.id),
        { teams: y } = (0, m.A)(),
        A = l.useMemo(
            () =>
                y
                    .filter((t) => t.payout_account_status === x.y.ACTIVE)
                    .map((t) => ({ id: t.id, label: t.name, value: t.id })),
            [y],
        ),
        f = n?.team?.id !== b,
        [j, { loading: k, error: I }] = (0, g.A)(h.Ay.transferApplication),
        w = async () => {
            s()(null != n, "no application"),
                s()(null != b, "no team selected"),
                null != (await j({ applicationId: n.id, teamId: b })) && a();
        },
        E = n?.team != null;
    return (0, e.jsxs)(r.Modal, {
        transitionState: i,
        title: E ? C.intl.string(C.t["4TveVv"]) : C.intl.string(C.t.feBUAV),
        subtitle: E ? C.intl.string(C.t.c7HS0n) : C.intl.string(C.t.atZ50I),
        onClose: a,
        actions: [
            { variant: "secondary", text: C.intl.string(C.t["ETE/oC"]), onClick: a },
            { variant: "critical-primary", text: C.intl.string(C.t["R3BPH+"]), loading: k, disabled: !f, onClick: w },
        ],
        children: [
            E
                ? (0, e.jsxs)(d.p, {
                      messageType: d.Y.WARNING,
                      children: [
                          C.intl.string(C.t.Caz8nL),
                          (0, e.jsx)(c.h, { size: 4 }),
                          (0, e.jsx)(o.E, { variant: "text-sm/normal", children: C.intl.string(C.t.u4ddHZ) }),
                      ],
                  })
                : null,
            null != I ? (0, e.jsx)(u.w, { type: "critical", children: I.message }) : null,
            (0, e.jsx)(c.h, { size: 16 }),
            (0, e.jsx)(p.l, {
                selectionMode: "single",
                label: E ? C.intl.string(C.t.xZ6ZL6) : C.intl.string(C.t.bfmKdK),
                required: !0,
                options: A,
                placeholder: C.intl.string(C.t.QXf93A),
                value: b,
                disabled: 0 === A.length,
                onSelectionChange: v,
            }),
        ],
    });
}
