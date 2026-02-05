a.d(t, { O: () => _, default: () => I });
var n = a(627968),
    r = a(64700),
    s = a(512750),
    i = a(158954),
    l = a(397927),
    o = a(503852),
    c = a(661685),
    d = a(898190),
    u = a(490557),
    m = a(193157),
    f = a(568065),
    b = a(333354),
    k = a(985018),
    p = a(438619);
function _(e) {
    let {
            size: t,
            title: a,
            body: s,
            warningText: o,
            acknowledgementText: c,
            error: d,
            isLoading: u,
            onDeactivate: m,
            ...f
        } = e,
        [_, I] = r.useState(!1);
    return (0, n.jsxs)(i.Modal, {
        ...f,
        size: t,
        title: k.intl.formatToPlainString(b.default.iEBw1M, { perk: a }),
        subtitle: k.intl.formatToPlainString(b.default["7o0K+2"], { perk: a }),
        actions: [
            { variant: "secondary", text: k.intl.string(k.t["ETE/oC"]), onClick: f.onClose },
            {
                variant: "critical-primary",
                text: k.intl.string(b.default.PYPdl4),
                loading: u,
                onClick: m,
                disabled: null != c && !_,
            },
        ],
        children: [
            s,
            (0, n.jsxs)("div", {
                className: p.UW,
                children: [
                    (0, n.jsx)(i.EYj, {
                        color: "text-feedback-critical",
                        variant: "eyebrow",
                        children: k.intl.string(b.default.OVt5CC),
                    }),
                    (0, n.jsx)(i.EYj, { className: p.i4, tag: "span", variant: "text-sm/medium", children: o }),
                ],
            }),
            null != d &&
                (0, n.jsx)(i.EYj, {
                    className: p.kc,
                    color: "text-feedback-critical",
                    variant: "text-sm/semibold",
                    children: d,
                }),
            null != c &&
                (0, n.jsx)("div", {
                    className: p.ud,
                    children: (0, n.jsx)(l.Checkbox, { checked: _, onChange: I, label: c, labelType: "secondary" }),
                }),
        ],
    });
}
function I(e) {
    let { guildId: t, powerup: a, ...l } = e,
        { onDeactivate: b, error: k, isLoading: I } = (0, d.A)(t, a),
        { onClose: g } = l,
        T = r.useCallback(
            (e) => {
                e.stopPropagation(),
                    b().then(() => {
                        g?.();
                    });
            },
            [g, b],
        ),
        x = (function (e, t) {
            let { warningText: a, vanityUrlWarning: l } = (0, c.A)(e, t);
            return r.useMemo(
                () =>
                    t.skuId === s.FB
                        ? (0, n.jsx)(i.EYj, {
                              color: "text-feedback-critical",
                              variant: "text-sm/semibold",
                              children: a,
                          })
                        : null != l
                          ? (0, n.jsxs)(n.Fragment, {
                                children: [
                                    a,
                                    (0, n.jsx)(i.EYj, {
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
        (0, o.Z)(t, a, o.q.DEACTIVATE),
        (0, n.jsx)(_, {
            size: a.type === f.o9.LEVEL ? "md" : "sm",
            title: a.title,
            body: (() => {
                switch (a.type) {
                    case f.o9.LEVEL:
                        return (0, n.jsx)(m.A, { powerup: a });
                    case f.o9.PERK:
                        return (0, n.jsx)(u.l, { className: p.Sl, powerup: a });
                }
            })(),
            warningText: x,
            error: k,
            isLoading: I,
            onDeactivate: T,
            ...l,
        })
    );
}
