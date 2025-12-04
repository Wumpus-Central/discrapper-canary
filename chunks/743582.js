i.d(n, { default: () => h }), i(388685);
var l = i(54381),
    a = i(473749),
    e = i(512722),
    s = i.n(e),
    r = i(793030),
    d = i(199849),
    u = i(481060),
    o = i(935369),
    c = i(728345),
    p = i(577275),
    g = i(829857),
    m = i(388032);
function h(t) {
    var n, i;
    let { transitionState: e, application: h, onClose: v } = t,
        [x, C] = a.useState(null == h || null == (n = h.team) ? void 0 : n.id),
        { teams: b } = (0, p.Z)(),
        f = a.useMemo(
            () =>
                b
                    .filter((t) => t.payout_account_status === g.C.ACTIVE)
                    .map((t) => ({
                        label: t.name,
                        value: t.id,
                    })),
            [b],
        ),
        Z = (null == h || null == (i = h.team) ? void 0 : i.id) !== x,
        [j, { loading: y, error: k }] = (0, o.Z)(c.ZP.transferApplication),
        A = async () => {
            s()(null != h, "no application"),
                s()(null != x, "no team selected"),
                null !=
                    (await j({
                        applicationId: h.id,
                        teamId: x,
                    })) && v();
        },
        I = (null == h ? void 0 : h.team) != null;
    return (0, l.jsxs)(r.Modal, {
        transitionState: e,
        title: I ? m.intl.string(m.t["4TveVv"]) : m.intl.string(m.t.feBUAV),
        subtitle: I ? m.intl.string(m.t.c7HS0n) : m.intl.string(m.t.atZ50I),
        onClose: v,
        actions: [
            {
                variant: "secondary",
                text: m.intl.string(m.t["ETE/oC"]),
                onClick: v,
            },
            {
                variant: "critical-primary",
                text: m.intl.string(m.t["R3BPH+"]),
                loading: y,
                disabled: !Z,
                onClick: A,
            },
        ],
        children: [
            I
                ? (0, l.jsxs)(u.Wn, {
                      messageType: u.QYI.WARNING,
                      children: [
                          m.intl.string(m.t.Caz8nL),
                          (0, l.jsx)(u.LZC, { size: 4 }),
                          (0, l.jsx)(u.Text, {
                              variant: "text-sm/normal",
                              children: m.intl.string(m.t.u4ddHZ),
                          }),
                      ],
                  })
                : null,
            null != k
                ? (0, l.jsx)(u.M14, {
                      type: "critical",
                      children: k.message,
                  })
                : null,
            (0, l.jsx)(u.LZC, { size: 16 }),
            (0, l.jsx)(d.y6, {
                label: I ? m.intl.string(m.t.xZ6ZL6) : m.intl.string(m.t.bfmKdK),
                required: !0,
                options: f,
                placeholder: m.intl.string(m.t.QXf93A),
                value: x,
                isDisabled: 0 === f.length,
                onChange: (t) => C(t),
                "aria-label": m.intl.string(m.t.QXf93A),
            }),
        ],
    });
}
