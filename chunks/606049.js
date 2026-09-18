i.d(t, { A: () => N });
var n = i(477900),
    a = i(582128),
    s = i(503698),
    l = i.n(s),
    r = i(866665),
    m = i(885386),
    o = i(58703),
    c = i(683063),
    d = i(939249),
    u = i(687966),
    p = i(769015),
    h = i(375708),
    x = i(263454);
function j(e) {
    let { application: t, children: i } = e;
    return (0, n.jsx)(c.u, {
        asset: (0, n.jsx)(p.A, { size: p.M.MEDIUM_LARGE, game: t }),
        body: h.intl.format(h.t.J3s8JP, { applicationName: t.name }),
        position: "top",
        asContainer: !0,
        "aria-label": h.intl.string(h.t["5nMcv1"]),
        children: (0, n.jsx)(d.D, { tag: "span", children: i }),
    });
}
function M(e) {
    let { application: t, compact: i, children: a } = e;
    return (0, n.jsxs)(j, {
        application: t,
        children: [
            i ? null : (0, n.jsx)(u.GameControllerIcon, { className: x.Gt, size: "custom", width: 14, height: 14 }),
            a,
        ],
    });
}
var g = i(943815),
    C = i(318626);
let f = a.memo(function (e) {
        let {
                children: t,
                className: i,
                compact: s = !1,
                timestamp: c,
                timestampFormat: d,
                isVisibleOnlyOnHover: u = !1,
                cozyAlt: p = !1,
                isInline: x = !0,
                id: j,
                isEdited: f = !1,
                application: N,
                tooltipPosition: b,
            } = e,
            k = a.useMemo(() => new Date(c), [c]),
            A = a.useMemo(() => (0, o.K7)(k), [k]),
            F = m.PZ.useSetting(),
            T = a.useMemo(
                () => (null != d ? (0, o.i$)(k, d, F) : s ? (0, o.i$)(k, "LT", F) : (0, o.mk)(k, !0)),
                [k, d, s, F],
            ),
            _ = a.useMemo(() => (s ? (0, g.A)(T) : null), [s, T]),
            v = a.useMemo(() => (f ? h.intl.formatToPlainString(h.t.CDzOFd, { timeFormatted: A }) : A), [f, A]);
        return (0, n.jsx)("span", {
            className: l()(i, _, { [C.vE]: !0, [C.ET]: u, [C.YQ]: x, [C.CC]: p }),
            children:
                null == N
                    ? (0, n.jsx)(r.m, {
                          asContainer: !0,
                          __unsupportedReactNodeAsText: (0, o.i$)(k, "LLLL"),
                          "aria-label": v,
                          position: b,
                          delay: 750,
                          children: (0, n.jsx)(L, { timeFormatted: T, timestamp: k, id: j, compact: s, children: t }),
                      })
                    : (0, n.jsx)(M, {
                          application: N,
                          compact: s,
                          children: (0, n.jsx)(L, { timeFormatted: T, timestamp: k, id: j, compact: s, children: t }),
                      }),
        });
    }),
    L = a.memo(function (e) {
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
                              (0, n.jsx)("i", { className: C.me, "aria-hidden": !0, children: s ? "[" : " \u2014 " }),
                              i,
                              s && (0, n.jsxs)("i", { className: C.me, "aria-hidden": !0, children: ["]", " "] }),
                          ],
                      }),
        });
    }),
    N = f;
