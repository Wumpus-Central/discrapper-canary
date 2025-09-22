i.d(n, { default: () => m }), i(388685);
var l = i(951288),
    e = i(647438),
    a = i(512722),
    s = i.n(a),
    r = i(82659),
    d = i(481060),
    u = i(935369),
    o = i(728345),
    c = i(577275),
    p = i(829857),
    g = i(388032);
function m(t) {
    var n, i;
    let { transitionState: a, application: m, onClose: x } = t,
        [h, v] = e.useState(null == m || null == (n = m.team) ? void 0 : n.id),
        { teams: C } = (0, c.Z)(),
        b = e.useMemo(
            () =>
                C.filter((t) => t.payout_account_status === p.C.ACTIVE).map((t) => ({
                    label: t.name,
                    value: t.id,
                })),
            [C],
        ),
        f = (null == m || null == (i = m.team) ? void 0 : i.id) !== h,
        [Z, { loading: j, error: k }] = (0, u.Z)(o.ZP.transferApplication),
        y = async () => {
            s()(null != m, "no application"),
                s()(null != h, "no team selected"),
                null !=
                    (await Z({
                        applicationId: m.id,
                        teamId: h,
                    })) && x();
        },
        N = (null == m ? void 0 : m.team) != null;
    return (0, l.jsxs)(r.Modal, {
        transitionState: a,
        title: N ? g.intl.string(g.t["4TveVl"]) : g.intl.string(g.t.feBUAQ),
        subtitle: N ? g.intl.string(g.t.c7HS0t) : g.intl.string(g.t.atZ50N),
        onClose: x,
        actions: [
            {
                variant: "secondary",
                text: g.intl.string(g.t["ETE/oK"]),
                onClick: x,
            },
            {
                variant: "critical-primary",
                text: g.intl.string(g.t.R3BPHx),
                loading: j,
                disabled: !f,
                onClick: y,
            },
        ],
        children: [
            N
                ? (0, l.jsxs)(d.Wn, {
                      messageType: d.QYI.WARNING,
                      children: [
                          g.intl.string(g.t.Caz8nJ),
                          (0, l.jsx)(d.LZC, { size: 4 }),
                          (0, l.jsx)(d.Text, {
                              variant: "text-sm/normal",
                              children: g.intl.string(g.t.u4ddHR),
                          }),
                      ],
                  })
                : null,
            null != k ? (0, l.jsx)(d.kzN, { children: k.message }) : null,
            (0, l.jsx)(d.LZC, { size: 16 }),
            (0, l.jsx)(d.q4e, {
                label: N ? g.intl.string(g.t.xZ6ZLy) : g.intl.string(g.t.bfmKdH),
                required: !0,
                options: b,
                placeholder: g.intl.string(g.t.QXf93N),
                value: h,
                isDisabled: 0 === b.length,
                onChange: (t) => v(t),
                "aria-label": g.intl.string(g.t.QXf93N),
            }),
        ],
    });
}
