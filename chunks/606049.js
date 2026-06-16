i.d(t, { A: () => I });
var n = i(627968),
    a = i(64700),
    s = i(503698),
    l = i.n(s),
    r = i(990078),
    m = i(885386),
    c = i(58703),
    o = i(459192),
    d = i(939249),
    u = i(687966),
    h = i(137177),
    p = i(375708),
    x = i(873581);
function A(e) {
    let { application: t, children: i } = e;
    return (0, n.jsx)(o.u, {
        asset: (0, n.jsx)(h.A, { size: h.M.MEDIUM_LARGE, game: t }),
        body: p.intl.format(p.t.J3s8JP, { applicationName: t.name }),
        position: "top",
        asContainer: !0,
        "aria-label": p.intl.string(p.t["5nMcv1"]),
        children: (0, n.jsx)(d.D, { tag: "span", children: i }),
    });
}
function j(e) {
    let { application: t, compact: i, children: a } = e;
    return (0, n.jsxs)(A, {
        application: t,
        children: [i ? null : (0, n.jsx)(u._, { className: x.Gt, size: "custom", width: 14, height: 14 }), a],
    });
}
var N = i(943815),
    M = i(334211);
let L = a.memo(function (e) {
        let {
                children: t,
                className: i,
                compact: s = !1,
                timestamp: o,
                timestampFormat: d,
                isVisibleOnlyOnHover: u = !1,
                cozyAlt: h = !1,
                isInline: x = !0,
                id: A,
                isEdited: L = !1,
                application: I,
                tooltipPosition: T,
            } = e,
            C = a.useMemo(() => new Date(o), [o]),
            f = a.useMemo(() => (0, c.K7)(C), [C]),
            S = m.PZ.useSetting(),
            _ = a.useMemo(
                () => (null != d ? (0, c.i$)(C, d, S) : s ? (0, c.i$)(C, "LT", S) : (0, c.mk)(C, !0)),
                [C, d, s, S],
            ),
            b = a.useMemo(() => (s ? (0, N.A)(_) : null), [s, _]),
            k = a.useMemo(() => (L ? p.intl.formatToPlainString(p.t.CDzOFd, { timeFormatted: f }) : f), [L, f]);
        return (0, n.jsx)("span", {
            className: l()(i, b, { [M.vE]: !0, [M.ET]: u, [M.YQ]: x, [M.CC]: h }),
            children:
                null == I
                    ? (0, n.jsx)(r.m, {
                          asContainer: !0,
                          __unsupportedReactNodeAsText: (0, c.i$)(C, "LLLL"),
                          "aria-label": k,
                          position: T,
                          delay: 750,
                          children: (0, n.jsx)(g, { timeFormatted: _, timestamp: C, id: A, compact: s, children: t }),
                      })
                    : (0, n.jsx)(j, {
                          application: I,
                          compact: s,
                          children: (0, n.jsx)(g, { timeFormatted: _, timestamp: C, id: A, compact: s, children: t }),
                      }),
        });
    }),
    g = a.memo(function (e) {
        let { tooltipProps: t, timeFormatted: i, children: a, compact: s, timestamp: l, id: r } = e;
        return (0, n.jsx)("time", {
            ...t,
            id: r,
            dateTime: l.toISOString(),
            children:
                null != a
                    ? a
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("i", { className: M.me, "aria-hidden": !0, children: s ? "[" : " \u2014 " }),
                              i,
                              s && (0, n.jsxs)("i", { className: M.me, "aria-hidden": !0, children: ["]", " "] }),
                          ],
                      }),
        });
    }),
    I = L;
