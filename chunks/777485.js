l.d(t, { h: () => h, i: () => j });
var n = l(477900),
    r = l(582128),
    a = l(834730),
    i = l(866665),
    s = l(290136),
    o = l(875031),
    c = l(760029),
    u = l(538790),
    d = l(259678),
    m = l(847374),
    x = l(796472);
function f(e) {
    let { children: t } = e;
    return (0, n.jsx)(o.kS, { className: x.nd, children: t });
}
function p(e) {
    let { children: t, ...l } = e,
        { isDisabled: r } = (0, c.CC)(u.k, "trigger");
    return (0, n.jsx)(d.vN, {
        children: (0, n.jsx)(u.$, {
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
var v = l(553562);
function h(e) {
    let {
            label: t,
            defaultExpanded: l = !1,
            onExpandedChange: a,
            isDisabled: i = !1,
            collapsedContent: s,
            children: c,
        } = e,
        [u, d] = r.useState(l),
        m = r.useCallback(
            (e) => {
                d(e), null != a && a(e);
            },
            [a],
        );
    return (0, n.jsxs)(o.EN, {
        defaultExpanded: l,
        isDisabled: i,
        onExpandedChange: m,
        children: [
            (0, n.jsxs)("div", {
                className: v.wx,
                children: [
                    (0, n.jsx)(p, { variant: "text-md/medium", color: u ? "text-strong" : "text-muted", children: t }),
                    (!u || i) && s,
                ],
            }),
            (0, n.jsx)(f, { children: (0, n.jsx)("div", { className: v.CS, children: c }) }),
        ],
    });
}
function j(e) {
    let {
            label: t,
            labelSubText: l,
            value: o,
            color: c = "text-muted",
            valueColor: u = "text-muted",
            valueIcon: d,
            icon: m,
            tooltip: x,
            tooltipAriaLabel: f,
            subText: p,
            subTextColor: h = "text-muted",
            subTextHasStrikethrough: j,
        } = e,
        g = r.useMemo(() => {
            let e = (0, n.jsxs)(a.E, {
                variant: "text-md/normal",
                color: u,
                className: v.U4,
                children: [null != d && (0, n.jsx)(d, { size: "xs" }), o],
            });
            return null == p
                ? e
                : (0, n.jsxs)("div", {
                      className: v.Lm,
                      children: [
                          e,
                          (0, n.jsx)(a.E, {
                              variant: "text-xs/medium",
                              color: h,
                              className: j ? v.tP : void 0,
                              children: p,
                          }),
                      ],
                  });
        }, [o, d, p, j, u, h]),
        N = r.useMemo(
            () =>
                null == l
                    ? t
                    : (0, n.jsxs)("div", {
                          children: [
                              t,
                              (0, n.jsx)(a.E, { variant: "text-xs/normal", color: "text-subtle", children: l }),
                          ],
                      }),
            [t, l],
        );
    return (0, n.jsxs)("div", {
        className: v.Yn,
        children: [
            (0, n.jsxs)(a.E, {
                variant: "text-md/normal",
                color: c,
                className: v.yB,
                children: [
                    m,
                    N,
                    null != x &&
                        (0, n.jsx)(i.m, {
                            text: x,
                            children: (0, n.jsx)(s.CircleQuestionIcon, { size: "xs", "aria-label": f }),
                        }),
                ],
            }),
            g,
        ],
    });
}
