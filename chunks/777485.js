l.d(t, { h: () => v, i: () => j });
var a = l(477900),
    n = l(582128),
    r = l(834730),
    s = l(866665),
    i = l(290136),
    o = l(239882),
    c = l(980807),
    d = l(51340),
    u = l(559106),
    m = l(847374),
    x = l(556995);
function f(e) {
    let { children: t } = e;
    return (0, a.jsx)(o.kS, { className: x.nd, children: t });
}
function p(e) {
    let { children: t, ...l } = e,
        { isDisabled: n } = (0, c.CC)(d.k, "trigger");
    return (0, a.jsx)(u.vN, {
        children: (0, a.jsx)(d.$, {
            slot: "trigger",
            className: x.hZ,
            children: (0, a.jsxs)(r.E, {
                ...l,
                className: x.aQ,
                children: [t, !n && (0, a.jsx)(m.a, { size: "xs", color: "currentColor", className: x.ai })],
            }),
        }),
    });
}
var h = l(423389);
function v(e) {
    let {
            label: t,
            defaultExpanded: l = !1,
            onExpandedChange: r,
            isDisabled: s = !1,
            collapsedContent: i,
            children: c,
        } = e,
        [d, u] = n.useState(l),
        m = n.useCallback(
            (e) => {
                (u(e), null != r && r(e));
            },
            [r],
        );
    return (0, a.jsxs)(o.EN, {
        defaultExpanded: l,
        isDisabled: s,
        onExpandedChange: m,
        children: [
            (0, a.jsxs)("div", {
                className: h.wx,
                children: [
                    (0, a.jsx)(p, { variant: "text-md/medium", color: d ? "text-strong" : "text-muted", children: t }),
                    (!d || s) && i,
                ],
            }),
            (0, a.jsx)(f, { children: (0, a.jsx)("div", { className: h.CS, children: c }) }),
        ],
    });
}
function j(e) {
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
            subTextColor: v = "text-muted",
            subTextHasStrikethrough: j,
        } = e,
        E = n.useMemo(() => {
            let e = (0, a.jsxs)(r.E, {
                variant: "text-md/normal",
                color: d,
                className: h.U4,
                children: [null != u && (0, a.jsx)(u, { size: "xs" }), o],
            });
            return null == p
                ? e
                : (0, a.jsxs)("div", {
                      className: h.Lm,
                      children: [
                          e,
                          (0, a.jsx)(r.E, {
                              variant: "text-xs/medium",
                              color: v,
                              className: j ? h.tP : void 0,
                              children: p,
                          }),
                      ],
                  });
        }, [o, u, p, j, d, v]),
        N = n.useId(),
        g = n.useMemo(() => {
            let e = (0, a.jsx)("span", { id: N, children: t });
            return null == l
                ? e
                : (0, a.jsxs)("div", {
                      children: [e, (0, a.jsx)(r.E, { variant: "text-xs/normal", color: "text-subtle", children: l })],
                  });
        }, [t, l, N]);
    return (0, a.jsxs)("div", {
        className: h.Yn,
        role: "group",
        "aria-labelledby": N,
        children: [
            (0, a.jsxs)(r.E, {
                variant: "text-md/normal",
                color: c,
                className: h.yB,
                children: [
                    m,
                    g,
                    null != x &&
                        (0, a.jsx)(s.m, {
                            text: x,
                            children: (0, a.jsx)(i.CircleQuestionIcon, { size: "xs", "aria-label": f }),
                        }),
                ],
            }),
            E,
        ],
    });
}
