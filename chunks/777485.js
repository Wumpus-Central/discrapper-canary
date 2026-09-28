n.d(t, { h: () => v, i: () => j });
var l = n(477900),
    r = n(582128),
    a = n(834730),
    i = n(866665),
    s = n(290136),
    o = n(99018),
    c = n(407815),
    u = n(160844),
    d = n(559106),
    m = n(847374),
    x = n(556995);
function f(e) {
    let { children: t } = e;
    return (0, l.jsx)(o.kS, { className: x.nd, children: t });
}
function h(e) {
    let { children: t, ...n } = e,
        { isDisabled: r } = (0, c.CC)(u.k, "trigger");
    return (0, l.jsx)(d.vN, {
        children: (0, l.jsx)(u.$, {
            slot: "trigger",
            className: x.hZ,
            children: (0, l.jsxs)(a.E, {
                ...n,
                className: x.aQ,
                children: [t, !r && (0, l.jsx)(m.a, { size: "xs", color: "currentColor", className: x.ai })],
            }),
        }),
    });
}
var p = n(423389);
function v(e) {
    let {
            label: t,
            defaultExpanded: n = !1,
            onExpandedChange: a,
            isDisabled: i = !1,
            collapsedContent: s,
            children: c,
        } = e,
        [u, d] = r.useState(n),
        m = r.useCallback(
            (e) => {
                (d(e), null != a && a(e));
            },
            [a],
        );
    return (0, l.jsxs)(o.EN, {
        defaultExpanded: n,
        isDisabled: i,
        onExpandedChange: m,
        children: [
            (0, l.jsxs)("div", {
                className: p.wx,
                children: [
                    (0, l.jsx)(h, { variant: "text-md/medium", color: u ? "text-strong" : "text-muted", children: t }),
                    (!u || i) && s,
                ],
            }),
            (0, l.jsx)(f, { children: (0, l.jsx)("div", { className: p.CS, children: c }) }),
        ],
    });
}
function j(e) {
    let {
            label: t,
            labelSubText: n,
            value: o,
            color: c = "text-muted",
            valueColor: u = "text-muted",
            valueIcon: d,
            icon: m,
            tooltip: x,
            tooltipAriaLabel: f,
            subText: h,
            subTextColor: v = "text-muted",
            subTextHasStrikethrough: j,
        } = e,
        g = r.useMemo(() => {
            let e = (0, l.jsxs)(a.E, {
                variant: "text-md/normal",
                color: u,
                className: p.U4,
                children: [null != d && (0, l.jsx)(d, { size: "xs" }), o],
            });
            return null == h
                ? e
                : (0, l.jsxs)("div", {
                      className: p.Lm,
                      children: [
                          e,
                          (0, l.jsx)(a.E, {
                              variant: "text-xs/medium",
                              color: v,
                              className: j ? p.tP : void 0,
                              children: h,
                          }),
                      ],
                  });
        }, [o, d, h, j, u, v]),
        E = r.useMemo(
            () =>
                null == n
                    ? t
                    : (0, l.jsxs)("div", {
                          children: [
                              t,
                              (0, l.jsx)(a.E, { variant: "text-xs/normal", color: "text-subtle", children: n }),
                          ],
                      }),
            [t, n],
        );
    return (0, l.jsxs)("div", {
        className: p.Yn,
        children: [
            (0, l.jsxs)(a.E, {
                variant: "text-md/normal",
                color: c,
                className: p.yB,
                children: [
                    m,
                    E,
                    null != x &&
                        (0, l.jsx)(i.m, {
                            text: x,
                            children: (0, l.jsx)(s.CircleQuestionIcon, { size: "xs", "aria-label": f }),
                        }),
                ],
            }),
            g,
        ],
    });
}
