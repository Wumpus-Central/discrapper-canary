n.d(t, { A: () => E });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(990078),
    o = n(253932),
    c = n(58703),
    d = n(459192),
    u = n(939249),
    m = n(687966),
    _ = n(137177),
    h = n(985018),
    p = n(873581);
function g(e) {
    let { application: t, children: n } = e;
    return (0, a.jsx)(d.u, {
        asset: (0, a.jsx)(_.A, { size: _.M.MEDIUM_LARGE, game: t }),
        body: h.intl.format(h.t.J3s8JP, { applicationName: t.name }),
        position: "top",
        asContainer: !0,
        "aria-label": h.intl.string(h.t["5nMcv1"]),
        children: (0, a.jsx)(u.D, { tag: "span", children: n }),
    });
}
function f(e) {
    let { application: t, compact: n, children: i } = e;
    return (0, a.jsxs)(g, {
        application: t,
        children: [n ? null : (0, a.jsx)(m._, { className: p.Gt, size: "custom", width: 14, height: 14 }), i],
    });
}
var A = n(943815),
    b = n(334211);
let T = i.memo(function (e) {
        let {
                children: t,
                className: n,
                compact: l = !1,
                timestamp: d,
                timestampFormat: u,
                isVisibleOnlyOnHover: m = !1,
                cozyAlt: _ = !1,
                isInline: p = !0,
                id: g,
                isEdited: T = !1,
                application: E,
                tooltipPosition: C,
            } = e,
            S = i.useMemo(() => new Date(d), [d]),
            y = i.useMemo(() => (0, c.K7)(S), [S]),
            x = o.PZ.useSetting(),
            v = i.useMemo(
                () => (null != u ? (0, c.i$)(S, u, x) : l ? (0, c.i$)(S, "LT", x) : (0, c.mk)(S, !0)),
                [S, u, l, x],
            ),
            O = i.useMemo(() => (l ? (0, A.A)(v) : null), [l, v]),
            N = i.useMemo(() => (T ? h.intl.formatToPlainString(h.t.CDzOFd, { timeFormatted: y }) : y), [T, y]);
        return (0, a.jsx)("span", {
            className: r()(n, O, { [b.vE]: !0, [b.ET]: m, [b.YQ]: p, [b.CC]: _ }),
            children:
                null == E
                    ? (0, a.jsx)(s.m, {
                          asContainer: !0,
                          __unsupportedReactNodeAsText: (0, c.i$)(S, "LLLL"),
                          "aria-label": N,
                          position: C,
                          delay: 750,
                          children: (0, a.jsx)(I, { timeFormatted: v, timestamp: S, id: g, compact: l, children: t }),
                      })
                    : (0, a.jsx)(f, {
                          application: E,
                          compact: l,
                          children: (0, a.jsx)(I, { timeFormatted: v, timestamp: S, id: g, compact: l, children: t }),
                      }),
        });
    }),
    I = i.memo(function (e) {
        let { tooltipProps: t, timeFormatted: n, children: i, compact: l, timestamp: r, id: s } = e;
        return (0, a.jsx)("time", {
            ...t,
            id: s,
            dateTime: r.toISOString(),
            children:
                null != i
                    ? i
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("i", { className: b.me, "aria-hidden": !0, children: l ? "[" : " — " }),
                              n,
                              l && (0, a.jsxs)("i", { className: b.me, "aria-hidden": !0, children: ["]", " "] }),
                          ],
                      }),
        });
    }),
    E = T;
