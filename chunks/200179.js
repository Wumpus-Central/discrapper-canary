l.d(t, { h: () => j, i: () => v });
var n = l(477900),
    r = l(582128),
    a = l(834730),
    s = l(866665),
    i = l(290136),
    o = l(101396),
    c = l(980807),
    d = l(51340),
    u = l(559106),
    m = l(847374),
    x = l(556995);
function h(e) {
    let { children: t } = e;
    return (0, n.jsx)(o.kS, { className: x.nd, children: t });
}
function p(e) {
    let { children: t, ...l } = e,
        { isDisabled: r } = (0, c.CC)(d.k, "trigger");
    return (0, n.jsx)(u.vN, {
        children: (0, n.jsx)(d.$, {
            slot: "trigger",
            className: x.hZ,
            children: (0, n.jsxs)(a.E, {
                ...l,
                className: x.aQ,
                children: [t, !r && (0, n.jsx)(m.a, { size: "xs", color: "currentColor", className: x.ai })],
            }),
        }),
    });
}
var f = l(423389);
function j(e) {
    let {
            label: t,
            defaultExpanded: l = !1,
            onExpandedChange: a,
            isDisabled: s = !1,
            collapsedContent: i,
            children: c,
        } = e,
        [d, u] = r.useState(l),
        m = r.useCallback(
            (e) => {
                (u(e), null != a && a(e));
            },
            [a],
        );
    return (0, n.jsxs)(o.EN, {
        defaultExpanded: l,
        isDisabled: s,
        onExpandedChange: m,
        children: [
            (0, n.jsxs)("div", {
                className: f.wx,
                children: [
                    (0, n.jsx)(p, { variant: "body-md/medium", color: d ? "text-strong" : "text-muted", children: t }),
                    (!d || s) && i,
                ],
            }),
            (0, n.jsx)(h, { children: (0, n.jsx)("div", { className: f.CS, children: c }) }),
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
            tooltipAriaLabel: h,
            subText: p,
            subTextColor: j = "text-muted",
            subTextHasStrikethrough: v,
        } = e,
        b = r.useMemo(() => {
            let e = (0, n.jsxs)(a.E, {
                variant: "body-md/normal",
                color: d,
                className: f.U4,
                children: [null != u && (0, n.jsx)(u, { size: "xs" }), o],
            });
            return null == p
                ? e
                : (0, n.jsxs)("div", {
                      className: f.Lm,
                      children: [
                          e,
                          (0, n.jsx)(a.E, {
                              variant: "body-xs/medium",
                              color: j,
                              className: v ? f.tP : void 0,
                              children: p,
                          }),
                      ],
                  });
        }, [o, u, p, v, d, j]),
        g = r.useId(),
        E = r.useMemo(() => {
            let e = (0, n.jsx)("span", { id: g, children: t });
            return null == l
                ? e
                : (0, n.jsxs)("div", {
                      children: [e, (0, n.jsx)(a.E, { variant: "body-xs/normal", color: "text-subtle", children: l })],
                  });
        }, [t, l, g]);
    return (0, n.jsxs)("div", {
        className: f.Yn,
        role: "group",
        "aria-labelledby": g,
        children: [
            (0, n.jsxs)(a.E, {
                variant: "body-md/normal",
                color: c,
                className: f.yB,
                children: [
                    m,
                    E,
                    null != x &&
                        (0, n.jsx)(s.m, {
                            text: x,
                            children: (0, n.jsx)(i.CircleQuestionIcon, { size: "xs", "aria-label": h }),
                        }),
                ],
            }),
            b,
        ],
    });
}
