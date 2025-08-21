i.d(n, { default: () => x }), i(388685);
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
function x(t) {
    var n, i;
    let { transitionState: a, application: x, onClose: m } = t,
        [h, v] = e.useState(null == x || null == (n = x.team) ? void 0 : n.id),
        { teams: C } = (0, c.Z)(),
        f = e.useMemo(
            () =>
                C.filter((t) => t.payout_account_status === p.C.ACTIVE).map((t) => ({
                    label: t.name,
                    value: t.id,
                })),
            [C],
        ),
        b = (null == x || null == (i = x.team) ? void 0 : i.id) !== h,
        [j, { loading: Z, error: k }] = (0, u.Z)(o.ZP.transferApplication),
        y = async () => {
            s()(null != x, "no application"),
                s()(null != h, "no team selected"),
                null !=
                    (await j({
                        applicationId: x.id,
                        teamId: h,
                    })) && m();
        },
        N = (null == x ? void 0 : x.team) != null;
    return (0, l.jsxs)(r.Modal, {
        transitionState: a,
        title: N ? g.intl.string(g.t["4TveVl"]) : g.intl.string(g.t.feBUAQ),
        subtitle: N ? g.intl.string(g.t.c7HS0t) : g.intl.string(g.t.atZ50N),
        onClose: m,
        actions: [
            {
                variant: "secondary",
                text: g.intl.string(g.t["ETE/oK"]),
                onClick: m,
            },
            {
                variant: "critical-primary",
                text: g.intl.string(g.t.R3BPHx),
                loading: Z,
                disabled: !b,
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
            (0, l.jsx)(d.xJW, {
                title: N ? g.intl.string(g.t.xZ6ZLy) : g.intl.string(g.t.bfmKdH),
                required: !0,
                children: (0, l.jsx)(d.q4e, {
                    options: f,
                    placeholder: g.intl.string(g.t.QXf93N),
                    value: h,
                    isDisabled: 0 === f.length,
                    onChange: (t) => v(t),
                    "aria-label": g.intl.string(g.t.QXf93N),
                }),
            }),
        ],
    });
}
