i.d(n, {
    default: () => h,
}),
    i(896048);
var l = i(627968),
    e = i(64700),
    a = i(284009),
    s = i.n(a),
    r = i(158954),
    d = i(397927),
    o = i(608461),
    c = i(627363),
    u = i(130771),
    p = i(269927),
    g = i(985018);

function h(t) {
    var n, i;
    let { transitionState: a, application: h, onClose: m } = t,
        [x, v] = e.useState(null == h || null == (n = h.team) ? void 0 : n.id),
        { teams: C } = (0, u.A)(),
        b = e.useMemo(
            () =>
                C.filter((t) => t.payout_account_status === p.y.ACTIVE).map((t) => ({
                    id: t.id,
                    label: t.name,
                    value: t.id,
                })),
            [C],
        ),
        y = (null == h || null == (i = h.team) ? void 0 : i.id) !== x,
        [A, { loading: f, error: j }] = (0, o.A)(c.Ay.transferApplication),
        k = async () => {
            s()(null != h, "no application"),
                s()(null != x, "no team selected"),
                null !=
                    (await A({
                        applicationId: h.id,
                        teamId: x,
                    })) && m();
        },
        I = (null == h ? void 0 : h.team) != null;
    return (0, l.jsxs)(r.Modal, {
        transitionState: a,
        title: I ? g.intl.string(g.t["4TveVv"]) : g.intl.string(g.t.feBUAV),
        subtitle: I ? g.intl.string(g.t.c7HS0n) : g.intl.string(g.t.atZ50I),
        onClose: m,
        actions: [
            {
                variant: "secondary",
                text: g.intl.string(g.t["ETE/oC"]),
                onClick: m,
            },
            {
                variant: "critical-primary",
                text: g.intl.string(g.t["R3BPH+"]),
                loading: f,
                disabled: !y,
                onClick: k,
            },
        ],
        children: [
            I
                ? (0, l.jsxs)(d.po8, {
                      messageType: d.YCn.WARNING,
                      children: [
                          g.intl.string(g.t.Caz8nL),
                          (0, l.jsx)(d.hKd, {
                              size: 4,
                          }),
                          (0, l.jsx)(d.Text, {
                              variant: "text-sm/normal",
                              children: g.intl.string(g.t.u4ddHZ),
                          }),
                      ],
                  })
                : null,
            null != j
                ? (0, l.jsx)(d.wx6, {
                      type: "critical",
                      children: j.message,
                  })
                : null,
            (0, l.jsx)(d.hKd, {
                size: 16,
            }),
            (0, l.jsx)(d.l6P, {
                selectionMode: "single",
                label: I ? g.intl.string(g.t.xZ6ZL6) : g.intl.string(g.t.bfmKdK),
                required: !0,
                options: b,
                placeholder: g.intl.string(g.t.QXf93A),
                value: x,
                disabled: 0 === b.length,
                onSelectionChange: v,
            }),
        ],
    });
}
