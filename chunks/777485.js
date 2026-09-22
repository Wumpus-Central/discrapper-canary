n.d(t, { h: () => f, i: () => p });
var l = n(477900),
    r = n(582128),
    s = n(834730),
    a = n(866665),
    i = n(290136),
    o = n(99018),
    c = n(407815),
    d = n(160844),
    u = n(559106),
    m = n(847374),
    x = n(556995);
function j(e) {
    let { children: t } = e;
    return (0, l.jsx)(o.kS, { className: x.nd, children: t });
}
function h(e) {
    let { children: t, ...n } = e,
        { isDisabled: r } = (0, c.CC)(d.k, "trigger");
    return (0, l.jsx)(u.vN, {
        children: (0, l.jsx)(d.$, {
            slot: "trigger",
            className: x.hZ,
            children: (0, l.jsxs)(s.E, {
                ...n,
                className: x.aQ,
                children: [t, !r && (0, l.jsx)(m.a, { size: "xs", color: "currentColor", className: x.ai })],
            }),
        }),
    });
}
var v = n(423389);
function f(e) {
    let {
            label: t,
            defaultExpanded: n = !1,
            onExpandedChange: s,
            isDisabled: a = !1,
            collapsedContent: i,
            children: c,
        } = e,
        [d, u] = r.useState(n),
        m = r.useCallback(
            (e) => {
                (u(e), null != s && s(e));
            },
            [s],
        );
    return (0, l.jsxs)(o.EN, {
        defaultExpanded: n,
        isDisabled: a,
        onExpandedChange: m,
        children: [
            (0, l.jsxs)("div", {
                className: v.wx,
                children: [
                    (0, l.jsx)(h, { variant: "text-md/medium", color: d ? "text-strong" : "text-muted", children: t }),
                    (!d || a) && i,
                ],
            }),
            (0, l.jsx)(j, { children: (0, l.jsx)("div", { className: v.CS, children: c }) }),
        ],
    });
}
function p(e) {
    let {
            label: t,
            labelSubText: n,
            value: o,
            color: c = "text-muted",
            valueColor: d = "text-muted",
            valueIcon: u,
            icon: m,
            tooltip: x,
            tooltipAriaLabel: j,
            subText: h,
            subTextColor: f = "text-muted",
            subTextHasStrikethrough: p,
        } = e,
        g = r.useMemo(() => {
            let e = (0, l.jsxs)(s.E, {
                variant: "text-md/normal",
                color: d,
                className: v.U4,
                children: [null != u && (0, l.jsx)(u, { size: "xs" }), o],
            });
            return null == h
                ? e
                : (0, l.jsxs)("div", {
                      className: v.Lm,
                      children: [
                          e,
                          (0, l.jsx)(s.E, {
                              variant: "text-xs/medium",
                              color: f,
                              className: p ? v.tP : void 0,
                              children: h,
                          }),
                      ],
                  });
        }, [o, u, h, p, d, f]),
        E = r.useMemo(
            () =>
                null == n
                    ? t
                    : (0, l.jsxs)("div", {
                          children: [
                              t,
                              (0, l.jsx)(s.E, { variant: "text-xs/normal", color: "text-subtle", children: n }),
                          ],
                      }),
            [t, n],
        );
    return (0, l.jsxs)("div", {
        className: v.Yn,
        children: [
            (0, l.jsxs)(s.E, {
                variant: "text-md/normal",
                color: c,
                className: v.yB,
                children: [
                    m,
                    E,
                    null != x &&
                        (0, l.jsx)(a.m, {
                            text: x,
                            children: (0, l.jsx)(i.CircleQuestionIcon, { size: "xs", "aria-label": j }),
                        }),
                ],
            }),
            g,
        ],
    });
}
