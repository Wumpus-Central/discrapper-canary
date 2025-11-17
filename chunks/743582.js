i.d(n, { default: () => m }), i(388685);
var l = i(54381),
    e = i(473749),
    a = i(512722),
    s = i.n(a),
    r = i(793030),
    d = i(481060),
    u = i(935369),
    o = i(728345),
    c = i(577275),
    p = i(829857),
    g = i(388032);
function m(t) {
    var n, i;
    let { transitionState: a, application: m, onClose: h } = t,
        [v, x] = e.useState(null == m || null == (n = m.team) ? void 0 : n.id),
        { teams: C } = (0, c.Z)(),
        b = e.useMemo(
            () =>
                C.filter((t) => t.payout_account_status === p.C.ACTIVE).map((t) => ({
                    label: t.name,
                    value: t.id,
                })),
            [C],
        ),
        f = (null == m || null == (i = m.team) ? void 0 : i.id) !== v,
        [Z, { loading: j, error: k }] = (0, u.Z)(o.ZP.transferApplication),
        y = async () => {
            s()(null != m, "no application"),
                s()(null != v, "no team selected"),
                null !=
                    (await Z({
                        applicationId: m.id,
                        teamId: v,
                    })) && h();
        },
        A = (null == m ? void 0 : m.team) != null;
    return (0, l.jsxs)(r.Modal, {
        transitionState: a,
        title: A ? g.intl.string(g.t["4TveVv"]) : g.intl.string(g.t.feBUAV),
        subtitle: A ? g.intl.string(g.t.c7HS0n) : g.intl.string(g.t.atZ50I),
        onClose: h,
        actions: [
            {
                variant: "secondary",
                text: g.intl.string(g.t["ETE/oC"]),
                onClick: h,
            },
            {
                variant: "critical-primary",
                text: g.intl.string(g.t["R3BPH+"]),
                loading: j,
                disabled: !f,
                onClick: y,
            },
        ],
        children: [
            A
                ? (0, l.jsxs)(d.Wn, {
                      messageType: d.QYI.WARNING,
                      children: [
                          g.intl.string(g.t.Caz8nL),
                          (0, l.jsx)(d.LZC, { size: 4 }),
                          (0, l.jsx)(d.Text, {
                              variant: "text-sm/normal",
                              children: g.intl.string(g.t.u4ddHZ),
                          }),
                      ],
                  })
                : null,
            null != k
                ? (0, l.jsx)(d.M14, {
                      type: "critical",
                      children: k.message,
                  })
                : null,
            (0, l.jsx)(d.LZC, { size: 16 }),
            (0, l.jsx)(d.q4e, {
                label: A ? g.intl.string(g.t.xZ6ZL6) : g.intl.string(g.t.bfmKdK),
                required: !0,
                options: b,
                placeholder: g.intl.string(g.t.QXf93A),
                value: v,
                isDisabled: 0 === b.length,
                onChange: (t) => x(t),
                "aria-label": g.intl.string(g.t.QXf93A),
            }),
        ],
    });
}
