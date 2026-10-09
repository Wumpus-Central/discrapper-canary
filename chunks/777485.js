n.d(t, { h: () => j, i: () => v });
var l = n(477900),
    a = n(582128),
    r = n(834730),
    s = n(866665),
    i = n(290136),
    o = n(99018),
    c = n(407815),
    d = n(160844),
    u = n(559106),
    m = n(847374),
    x = n(556995);
function f(e) {
    let { children: t } = e;
    return (0, l.jsx)(o.kS, { className: x.nd, children: t });
}
function p(e) {
    let { children: t, ...n } = e,
        { isDisabled: a } = (0, c.CC)(d.k, "trigger");
    return (0, l.jsx)(u.vN, {
        children: (0, l.jsx)(d.$, {
            slot: "trigger",
            className: x.hZ,
            children: (0, l.jsxs)(r.E, {
                ...n,
                className: x.aQ,
                children: [t, !a && (0, l.jsx)(m.a, { size: "xs", color: "currentColor", className: x.ai })],
            }),
        }),
    });
}
var h = n(423389);
function j(e) {
    let {
            label: t,
            defaultExpanded: n = !1,
            onExpandedChange: r,
            isDisabled: s = !1,
            collapsedContent: i,
            children: c,
        } = e,
        [d, u] = a.useState(n),
        m = a.useCallback(
            (e) => {
                (u(e), null != r && r(e));
            },
            [r],
        );
    return (0, l.jsxs)(o.EN, {
        defaultExpanded: n,
        isDisabled: s,
        onExpandedChange: m,
        children: [
            (0, l.jsxs)("div", {
                className: h.wx,
                children: [
                    (0, l.jsx)(p, { variant: "text-md/medium", color: d ? "text-strong" : "text-muted", children: t }),
                    (!d || s) && i,
                ],
            }),
            (0, l.jsx)(f, { children: (0, l.jsx)("div", { className: h.CS, children: c }) }),
        ],
    });
}
function v(e) {
    let {
            label: t,
            labelSubText: n,
            value: o,
            color: c = "text-muted",
            valueColor: d = "text-muted",
            valueIcon: u,
            icon: m,
            tooltip: x,
            tooltipAriaLabel: f,
            subText: p,
            subTextColor: j = "text-muted",
            subTextHasStrikethrough: v,
        } = e,
        g = a.useMemo(() => {
            let e = (0, l.jsxs)(r.E, {
                variant: "text-md/normal",
                color: d,
                className: h.U4,
                children: [null != u && (0, l.jsx)(u, { size: "xs" }), o],
            });
            return null == p
                ? e
                : (0, l.jsxs)("div", {
                      className: h.Lm,
                      children: [
                          e,
                          (0, l.jsx)(r.E, {
                              variant: "text-xs/medium",
                              color: j,
                              className: v ? h.tP : void 0,
                              children: p,
                          }),
                      ],
                  });
        }, [o, u, p, v, d, j]),
        E = a.useMemo(
            () =>
                null == n
                    ? t
                    : (0, l.jsxs)("div", {
                          children: [
                              t,
                              (0, l.jsx)(r.E, { variant: "text-xs/normal", color: "text-subtle", children: n }),
                          ],
                      }),
            [t, n],
        );
    return (0, l.jsxs)("div", {
        className: h.Yn,
        children: [
            (0, l.jsxs)(r.E, {
                variant: "text-md/normal",
                color: c,
                className: h.yB,
                children: [
                    m,
                    E,
                    null != x &&
                        (0, l.jsx)(s.m, {
                            text: x,
                            children: (0, l.jsx)(i.CircleQuestionIcon, { size: "xs", "aria-label": f }),
                        }),
                ],
            }),
            g,
        ],
    });
}
