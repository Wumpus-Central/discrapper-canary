l.d(t, { h: () => f, i: () => j });
var n = l(477900),
    r = l(582128),
    i = l(834730),
    s = l(866665),
    a = l(290136),
    u = l(99018),
    c = l(407815),
    o = l(160844),
    d = l(259678),
    m = l(847374),
    x = l(556995);
function h(e) {
    let { children: t } = e;
    return (0, n.jsx)(u.kS, { className: x.nd, children: t });
}
function p(e) {
    let { children: t, ...l } = e,
        { isDisabled: r } = (0, c.CC)(o.k, "trigger");
    return (0, n.jsx)(d.vN, {
        children: (0, n.jsx)(o.$, {
            slot: "trigger",
            className: x.hZ,
            children: (0, n.jsxs)(i.E, {
                ...l,
                className: x.aQ,
                children: [t, !r && (0, n.jsx)(m.a, { size: "xs", color: "currentColor", className: x.ai })],
            }),
        }),
    });
}
var v = l(423389);
function f(e) {
    let {
            label: t,
            defaultExpanded: l = !1,
            onExpandedChange: i,
            isDisabled: s = !1,
            collapsedContent: a,
            children: c,
        } = e,
        [o, d] = r.useState(l),
        m = r.useCallback(
            (e) => {
                d(e), null != i && i(e);
            },
            [i],
        );
    return (0, n.jsxs)(u.EN, {
        defaultExpanded: l,
        isDisabled: s,
        onExpandedChange: m,
        children: [
            (0, n.jsxs)("div", {
                className: v.wx,
                children: [
                    (0, n.jsx)(p, { variant: "text-md/medium", color: o ? "text-strong" : "text-muted", children: t }),
                    (!o || s) && a,
                ],
            }),
            (0, n.jsx)(h, { children: (0, n.jsx)("div", { className: v.CS, children: c }) }),
        ],
    });
}
function j(e) {
    let {
            label: t,
            labelSubText: l,
            value: u,
            color: c = "text-muted",
            valueColor: o = "text-muted",
            valueIcon: d,
            icon: m,
            tooltip: x,
            tooltipAriaLabel: h,
            subText: p,
            subTextColor: f = "text-muted",
            subTextHasStrikethrough: j,
        } = e,
        g = r.useMemo(() => {
            let e = (0, n.jsxs)(i.E, {
                variant: "text-md/normal",
                color: o,
                className: v.U4,
                children: [null != d && (0, n.jsx)(d, { size: "xs" }), u],
            });
            return null == p
                ? e
                : (0, n.jsxs)("div", {
                      className: v.Lm,
                      children: [
                          e,
                          (0, n.jsx)(i.E, {
                              variant: "text-xs/medium",
                              color: f,
                              className: j ? v.tP : void 0,
                              children: p,
                          }),
                      ],
                  });
        }, [u, d, p, j, o, f]),
        b = r.useMemo(
            () =>
                null == l
                    ? t
                    : (0, n.jsxs)("div", {
                          children: [
                              t,
                              (0, n.jsx)(i.E, { variant: "text-xs/normal", color: "text-subtle", children: l }),
                          ],
                      }),
            [t, l],
        );
    return (0, n.jsxs)("div", {
        className: v.Yn,
        children: [
            (0, n.jsxs)(i.E, {
                variant: "text-md/normal",
                color: c,
                className: v.yB,
                children: [
                    m,
                    b,
                    null != x &&
                        (0, n.jsx)(s.m, {
                            text: x,
                            children: (0, n.jsx)(a.CircleQuestionIcon, { size: "xs", "aria-label": h }),
                        }),
                ],
            }),
            g,
        ],
    });
}
