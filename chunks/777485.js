l.d(t, { h: () => g, i: () => p });
var s = l(477900),
    n = l(582128),
    a = l(834730),
    r = l(866665),
    i = l(290136),
    c = l(99018),
    d = l(407815),
    u = l(160844),
    o = l(559106),
    m = l(847374),
    x = l(556995);
function j(e) {
    let { children: t } = e;
    return (0, s.jsx)(c.kS, { className: x.nd, children: t });
}
function h(e) {
    let { children: t, ...l } = e,
        { isDisabled: n } = (0, d.CC)(u.k, "trigger");
    return (0, s.jsx)(o.vN, {
        children: (0, s.jsx)(u.$, {
            slot: "trigger",
            className: x.hZ,
            children: (0, s.jsxs)(a.E, {
                ...l,
                className: x.aQ,
                children: [t, !n && (0, s.jsx)(m.a, { size: "xs", color: "currentColor", className: x.ai })],
            }),
        }),
    });
}
var v = l(423389);
function g(e) {
    let {
            label: t,
            defaultExpanded: l = !1,
            onExpandedChange: a,
            isDisabled: r = !1,
            collapsedContent: i,
            children: d,
        } = e,
        [u, o] = n.useState(l),
        m = n.useCallback(
            (e) => {
                (o(e), null != a && a(e));
            },
            [a],
        );
    return (0, s.jsxs)(c.EN, {
        defaultExpanded: l,
        isDisabled: r,
        onExpandedChange: m,
        children: [
            (0, s.jsxs)("div", {
                className: v.wx,
                children: [
                    (0, s.jsx)(h, { variant: "text-md/medium", color: u ? "text-strong" : "text-muted", children: t }),
                    (!u || r) && i,
                ],
            }),
            (0, s.jsx)(j, { children: (0, s.jsx)("div", { className: v.CS, children: d }) }),
        ],
    });
}
function p(e) {
    let {
            label: t,
            labelSubText: l,
            value: c,
            color: d = "text-muted",
            valueColor: u = "text-muted",
            valueIcon: o,
            icon: m,
            tooltip: x,
            tooltipAriaLabel: j,
            subText: h,
            subTextColor: g = "text-muted",
            subTextHasStrikethrough: p,
        } = e,
        f = n.useMemo(() => {
            let e = (0, s.jsxs)(a.E, {
                variant: "text-md/normal",
                color: u,
                className: v.U4,
                children: [null != o && (0, s.jsx)(o, { size: "xs" }), c],
            });
            return null == h
                ? e
                : (0, s.jsxs)("div", {
                      className: v.Lm,
                      children: [
                          e,
                          (0, s.jsx)(a.E, {
                              variant: "text-xs/medium",
                              color: g,
                              className: p ? v.tP : void 0,
                              children: h,
                          }),
                      ],
                  });
        }, [c, o, h, p, u, g]),
        N = n.useMemo(
            () =>
                null == l
                    ? t
                    : (0, s.jsxs)("div", {
                          children: [
                              t,
                              (0, s.jsx)(a.E, { variant: "text-xs/normal", color: "text-subtle", children: l }),
                          ],
                      }),
            [t, l],
        );
    return (0, s.jsxs)("div", {
        className: v.Yn,
        children: [
            (0, s.jsxs)(a.E, {
                variant: "text-md/normal",
                color: d,
                className: v.yB,
                children: [
                    m,
                    N,
                    null != x &&
                        (0, s.jsx)(r.m, {
                            text: x,
                            children: (0, s.jsx)(i.CircleQuestionIcon, { size: "xs", "aria-label": j }),
                        }),
                ],
            }),
            f,
        ],
    });
}
