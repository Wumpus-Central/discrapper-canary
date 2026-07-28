a.d(e, { O: () => k, default: () => E });
var i = a(477900),
    l = a(582128),
    n = a(834730),
    r = a(189213),
    s = a(150934),
    c = a(503852),
    o = a(661685),
    d = a(898190),
    u = a(490557),
    x = a(193157),
    m = a(568065),
    p = a(853513),
    h = a(375708),
    b = a(963264);
function k(t) {
    let {
            size: e,
            title: a,
            body: c,
            warningText: o,
            acknowledgementText: d,
            error: u,
            isLoading: x,
            onDeactivate: m,
            ...k
        } = t,
        [E, f] = l.useState(!1);
    return (0, i.jsxs)(r.Modal, {
        ...k,
        size: e,
        title: h.intl.formatToPlainString(p.default.iEBw1M, { perk: a }),
        subtitle: h.intl.formatToPlainString(p.default["7o0K+2"], { perk: a }),
        actions: [
            { variant: "secondary", text: h.intl.string(h.t["ETE/oC"]), onClick: k.onClose },
            {
                variant: "critical-primary",
                text: h.intl.string(p.default.PYPdl4),
                loading: x,
                onClick: m,
                disabled: null != d && !E,
            },
        ],
        children: [
            c,
            (0, i.jsxs)("div", {
                className: b.UW,
                children: [
                    (0, i.jsx)(n.E, {
                        color: "text-feedback-critical",
                        variant: "eyebrow",
                        children: h.intl.string(p.default.OVt5CC),
                    }),
                    (0, i.jsx)(n.E, { className: b.i4, tag: "span", variant: "text-sm/medium", children: o }),
                ],
            }),
            null != u &&
                (0, i.jsx)(n.E, {
                    className: b.kc,
                    color: "text-feedback-critical",
                    variant: "text-sm/semibold",
                    children: u,
                }),
            null != d &&
                (0, i.jsx)("div", {
                    className: b.ud,
                    children: (0, i.jsx)(s.S, { checked: E, onChange: f, label: d, labelType: "secondary" }),
                }),
        ],
    });
}
function E(t) {
    let e,
        { guildId: a, powerup: r, ...s } = t,
        { onDeactivate: p, error: h, isLoading: E } = (0, d.A)(a, r),
        { onClose: f } = s,
        g = l.useCallback(
            (t) => {
                t.stopPropagation(),
                    p().then(() => {
                        f?.();
                    });
            },
            [f, p],
        ),
        j =
            ((e = (0, o.A)(a, r)),
            l.useMemo(
                () =>
                    (0, i.jsx)(i.Fragment, {
                        children: e.map((t, e) =>
                            t.critical
                                ? (0, i.jsx)(
                                      n.E,
                                      {
                                          color: "text-feedback-critical",
                                          variant: "text-sm/semibold",
                                          children: t.text,
                                      },
                                      e,
                                  )
                                : (0, i.jsx)(l.Fragment, { children: t.text }, e),
                        ),
                    }),
                [e],
            ));
    return (
        (0, c.Z)(a, r, c.q.DEACTIVATE),
        (0, i.jsx)(k, {
            size: r.type === m.o9.LEVEL ? "md" : "sm",
            title: r.title,
            body: (function () {
                switch (r.type) {
                    case m.o9.LEVEL:
                        return (0, i.jsx)(x.A, { powerup: r });
                    case m.o9.PERK:
                        return (0, i.jsx)(u.l, { className: b.Sl, powerup: r });
                }
            })(),
            warningText: j,
            error: h,
            isLoading: E,
            onDeactivate: g,
            ...s,
        })
    );
}
