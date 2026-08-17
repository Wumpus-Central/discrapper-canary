i.d(t, { A: () => g });
var n = i(477900),
    a = i(582128),
    s = i(503698),
    l = i.n(s),
    r = i(866665),
    m = i(885386),
    o = i(58703),
    c = i(459192),
    d = i(939249),
    u = i(687966),
    h = i(769015),
    p = i(375708),
    x = i(509493);
function A(e) {
    let { application: t, children: i } = e;
    return (0, n.jsx)(c.u, {
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
        children: [
            i ? null : (0, n.jsx)(u.GameControllerIcon, { className: x.Gt, size: "custom", width: 14, height: 14 }),
            a,
        ],
    });
}
var N = i(943815),
    M = i(281867);
let I = a.memo(function (e) {
        let {
                children: t,
                className: i,
                compact: s = !1,
                timestamp: c,
                timestampFormat: d,
                isVisibleOnlyOnHover: u = !1,
                cozyAlt: h = !1,
                isInline: x = !0,
                id: A,
                isEdited: I = !1,
                application: g,
                tooltipPosition: C,
            } = e,
            T = a.useMemo(() => new Date(c), [c]),
            f = a.useMemo(() => (0, o.K7)(T), [T]),
            S = m.PZ.useSetting(),
            b = a.useMemo(
                () => (null != d ? (0, o.i$)(T, d, S) : s ? (0, o.i$)(T, "LT", S) : (0, o.mk)(T, !0)),
                [T, d, s, S],
            ),
            k = a.useMemo(() => (s ? (0, N.A)(b) : null), [s, b]),
            v = a.useMemo(() => (I ? p.intl.formatToPlainString(p.t.CDzOFd, { timeFormatted: f }) : f), [I, f]);
        return (0, n.jsx)("span", {
            className: l()(i, k, { [M.vE]: !0, [M.ET]: u, [M.YQ]: x, [M.CC]: h }),
            children:
                null == g
                    ? (0, n.jsx)(r.m, {
                          asContainer: !0,
                          __unsupportedReactNodeAsText: (0, o.i$)(T, "LLLL"),
                          "aria-label": v,
                          position: C,
                          delay: 750,
                          children: (0, n.jsx)(L, { timeFormatted: b, timestamp: T, id: A, compact: s, children: t }),
                      })
                    : (0, n.jsx)(j, {
                          application: g,
                          compact: s,
                          children: (0, n.jsx)(L, { timeFormatted: b, timestamp: T, id: A, compact: s, children: t }),
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
                              (0, n.jsx)("i", { className: M.me, "aria-hidden": !0, children: s ? "[" : " \u2014 " }),
                              i,
                              s && (0, n.jsxs)("i", { className: M.me, "aria-hidden": !0, children: ["]", " "] }),
                          ],
                      }),
        });
    }),
    g = I;
