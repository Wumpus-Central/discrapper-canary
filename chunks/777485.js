l.d(t, { h: () => j, i: () => v });
var n = l(477900),
    a = l(582128),
    r = l(834730),
    s = l(866665),
    i = l(290136),
    o = l(99018),
    c = l(407815),
    d = l(160844),
    u = l(559106),
    m = l(847374),
    x = l(556995);
function f(e) {
    let { children: t } = e;
    return (0, n.jsx)(o.kS, { className: x.nd, children: t });
}
function p(e) {
    let { children: t, ...l } = e,
        { isDisabled: a } = (0, c.CC)(d.k, "trigger");
    return (0, n.jsx)(u.vN, {
        children: (0, n.jsx)(d.$, {
            slot: "trigger",
            className: x.hZ,
            children: (0, n.jsxs)(r.E, {
                ...l,
                className: x.aQ,
                children: [t, !a && (0, n.jsx)(m.a, { size: "xs", color: "currentColor", className: x.ai })],
            }),
        }),
    });
}
var h = l(423389);
function j(e) {
    let {
            label: t,
            defaultExpanded: l = !1,
            onExpandedChange: r,
            isDisabled: s = !1,
            collapsedContent: i,
            children: c,
        } = e,
        [d, u] = a.useState(l),
        m = a.useCallback(
            (e) => {
                (u(e), null != r && r(e));
            },
            [r],
        );
    return (0, n.jsxs)(o.EN, {
        defaultExpanded: l,
        isDisabled: s,
        onExpandedChange: m,
        children: [
            (0, n.jsxs)("div", {
                className: h.wx,
                children: [
                    (0, n.jsx)(p, { variant: "text-md/medium", color: d ? "text-strong" : "text-muted", children: t }),
                    (!d || s) && i,
                ],
            }),
            (0, n.jsx)(f, { children: (0, n.jsx)("div", { className: h.CS, children: c }) }),
        ],
    });
}
function v(e) {
    let {
            label: t,
            labelSubText: l,
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
            let e = (0, n.jsxs)(r.E, {
                variant: "text-md/normal",
                color: d,
                className: h.U4,
                children: [null != u && (0, n.jsx)(u, { size: "xs" }), o],
            });
            return null == p
                ? e
                : (0, n.jsxs)("div", {
                      className: h.Lm,
                      children: [
                          e,
                          (0, n.jsx)(r.E, {
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
                null == l
                    ? t
                    : (0, n.jsxs)("div", {
                          children: [
                              t,
                              (0, n.jsx)(r.E, { variant: "text-xs/normal", color: "text-subtle", children: l }),
                          ],
                      }),
            [t, l],
        );
    return (0, n.jsxs)("div", {
        className: h.Yn,
        children: [
            (0, n.jsxs)(r.E, {
                variant: "text-md/normal",
                color: c,
                className: h.yB,
                children: [
                    m,
                    E,
                    null != x &&
                        (0, n.jsx)(s.m, {
                            text: x,
                            children: (0, n.jsx)(i.CircleQuestionIcon, { size: "xs", "aria-label": f }),
                        }),
                ],
            }),
            g,
        ],
    });
}
