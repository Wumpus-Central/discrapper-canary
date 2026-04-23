n.d(t, { h: () => m, i: () => A });
var r = n(627968),
    a = n(64700),
    i = n(990078),
    o = n(834730),
    l = n(290136),
    s = n(353068),
    d = n(825913),
    u = n(197867),
    c = n(187322),
    _ = n(847374),
    p = n(167488);
function C(e) {
    let { children: t } = e;
    return (0, r.jsx)(s.kS, { className: p.nd, children: t });
}
function h(e) {
    let { children: t, ...n } = e,
        { isDisabled: a } = (0, d.CC)(u.k, "trigger");
    return (0, r.jsx)(c.vN, {
        children: (0, r.jsx)(u.$, {
            slot: "trigger",
            className: p.hZ,
            children: (0, r.jsxs)(o.E, {
                ...n,
                className: p.aQ,
                children: [t, !a && (0, r.jsx)(_.a, { size: "xs", color: "currentColor", className: p.ai })],
            }),
        }),
    });
}
var E = n(469362);
function m(e) {
    let {
            label: t,
            defaultExpanded: n = !1,
            onExpandedChange: i,
            isDisabled: o = !1,
            collapsedContent: l,
            children: d,
        } = e,
        [u, c] = a.useState(n),
        _ = a.useCallback(
            (e) => {
                c(e), null != i && i(e);
            },
            [i],
        );
    return (0, r.jsxs)(s.EN, {
        defaultExpanded: n,
        isDisabled: o,
        onExpandedChange: _,
        children: [
            (0, r.jsxs)("div", {
                className: E.wx,
                children: [
                    (0, r.jsx)(h, { variant: "text-md/medium", color: u ? "text-strong" : "text-muted", children: t }),
                    (!u || o) && l,
                ],
            }),
            (0, r.jsx)(C, { children: (0, r.jsx)("div", { className: E.CS, children: d }) }),
        ],
    });
}
function A(e) {
    let {
            label: t,
            labelSubText: n,
            value: s,
            color: d = "text-muted",
            valueColor: u = "text-muted",
            valueIcon: c,
            icon: _,
            tooltip: p,
            tooltipAriaLabel: C,
            subText: h,
            subTextColor: m = "text-muted",
            subTextHasStrikethrough: A,
        } = e,
        I = a.useMemo(() => {
            let e = (0, r.jsxs)(o.E, {
                variant: "text-md/normal",
                color: u,
                className: E.U4,
                children: [null != c && (0, r.jsx)(c, { size: "xs" }), s],
            });
            return null == h
                ? e
                : (0, r.jsxs)("div", {
                      className: E.Lm,
                      children: [
                          e,
                          (0, r.jsx)(o.E, {
                              variant: "text-xs/medium",
                              color: m,
                              className: A ? E.tP : void 0,
                              children: h,
                          }),
                      ],
                  });
        }, [s, c, h, A, u, m]),
        T = a.useMemo(
            () =>
                null == n
                    ? t
                    : (0, r.jsxs)("div", {
                          children: [
                              t,
                              (0, r.jsx)(o.E, { variant: "text-xs/normal", color: "text-subtle", children: n }),
                          ],
                      }),
            [t, n],
        );
    return (0, r.jsxs)("div", {
        className: E.Yn,
        children: [
            (0, r.jsxs)(o.E, {
                variant: "text-md/normal",
                color: d,
                className: E.yB,
                children: [
                    _,
                    T,
                    null != p &&
                        (0, r.jsx)(i.m, { text: p, children: (0, r.jsx)(l.c, { size: "xs", "aria-label": C }) }),
                ],
            }),
            I,
        ],
    });
}
