a.d(t, { O: () => I, default: () => g });
var n = a(627968),
    r = a(64700),
    s = a(512750),
    i = a(834730),
    l = a(189213),
    o = a(150934),
    c = a(503852),
    d = a(661685),
    u = a(898190),
    m = a(490557),
    f = a(193157),
    b = a(568065),
    k = a(853513),
    p = a(985018),
    _ = a(832952);
function I(e) {
    let {
            size: t,
            title: a,
            body: s,
            warningText: c,
            acknowledgementText: d,
            error: u,
            isLoading: m,
            onDeactivate: f,
            ...b
        } = e,
        [I, g] = r.useState(!1);
    return (0, n.jsxs)(l.Modal, {
        ...b,
        size: t,
        title: p.intl.formatToPlainString(k.default.iEBw1M, { perk: a }),
        subtitle: p.intl.formatToPlainString(k.default["7o0K+2"], { perk: a }),
        actions: [
            { variant: "secondary", text: p.intl.string(p.t["ETE/oC"]), onClick: b.onClose },
            {
                variant: "critical-primary",
                text: p.intl.string(k.default.PYPdl4),
                loading: m,
                onClick: f,
                disabled: null != d && !I,
            },
        ],
        children: [
            s,
            (0, n.jsxs)("div", {
                className: _.UW,
                children: [
                    (0, n.jsx)(i.E, {
                        color: "text-feedback-critical",
                        variant: "eyebrow",
                        children: p.intl.string(k.default.OVt5CC),
                    }),
                    (0, n.jsx)(i.E, { className: _.i4, tag: "span", variant: "text-sm/medium", children: c }),
                ],
            }),
            null != u &&
                (0, n.jsx)(i.E, {
                    className: _.kc,
                    color: "text-feedback-critical",
                    variant: "text-sm/semibold",
                    children: u,
                }),
            null != d &&
                (0, n.jsx)("div", {
                    className: _.ud,
                    children: (0, n.jsx)(o.S, { checked: I, onChange: g, label: d, labelType: "secondary" }),
                }),
        ],
    });
}
function g(e) {
    let { guildId: t, powerup: a, ...l } = e,
        { onDeactivate: o, error: k, isLoading: p } = (0, u.A)(t, a),
        { onClose: g } = l,
        T = r.useCallback(
            (e) => {
                e.stopPropagation(),
                    o().then(() => {
                        g?.();
                    });
            },
            [g, o],
        ),
        x = (function (e, t) {
            let { warningText: a, vanityUrlWarning: l } = (0, d.A)(e, t);
            return r.useMemo(
                () =>
                    t.skuId === s.FB
                        ? (0, n.jsx)(i.E, { color: "text-feedback-critical", variant: "text-sm/semibold", children: a })
                        : null != l
                          ? (0, n.jsxs)(n.Fragment, {
                                children: [
                                    a,
                                    (0, n.jsx)(i.E, {
                                        color: "text-feedback-critical",
                                        variant: "text-sm/semibold",
                                        children: l,
                                    }),
                                ],
                            })
                          : a,
                [t.skuId, a, l],
            );
        })(t, a);
    return (
        (0, c.Z)(t, a, c.q.DEACTIVATE),
        (0, n.jsx)(I, {
            size: a.type === b.o9.LEVEL ? "md" : "sm",
            title: a.title,
            body: (() => {
                switch (a.type) {
                    case b.o9.LEVEL:
                        return (0, n.jsx)(f.A, { powerup: a });
                    case b.o9.PERK:
                        return (0, n.jsx)(m.l, { className: _.Sl, powerup: a });
                }
            })(),
            warningText: x,
            error: k,
            isLoading: p,
            onDeactivate: T,
            ...l,
        })
    );
}
