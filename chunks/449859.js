"use strict";
n.d(t, { A: () => E });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(990078),
    l = n(253932),
    u = n(405269),
    c = n(355938),
    d = n(943815),
    _ = n(985018),
    f = n(679740);
function h(e) {
    return new Date(e);
}
let p = i.memo(function (e) {
        let {
                children: t,
                className: n,
                compact: a = !1,
                timestamp: p,
                timestampFormat: E,
                isVisibleOnlyOnHover: A = !1,
                cozyAlt: I = !1,
                isInline: T = !0,
                id: y,
                isEdited: S = !1,
                application: v,
                tooltipPosition: C,
            } = e,
            b = i.useMemo(() => h(p), [p]),
            N = i.useMemo(() => (0, u.K7)(b), [b]),
            R = l.PZ.useSetting(),
            O = i.useMemo(
                () => (null != E ? (0, u.i$)(b, E, R) : a ? (0, u.i$)(b, "LT", R) : (0, u.mk)(b, !0)),
                [b, E, a, R],
            ),
            D = i.useMemo(() => (a ? (0, d.A)(O) : null), [a, O]),
            L = i.useMemo(() => (S ? _.intl.formatToPlainString(_.t.CDzOFd, { timeFormatted: N }) : N), [S, N]);
        return (0, r.jsx)("span", {
            className: s()(n, D, { [f.vE]: !0, [f.ET]: A, [f.YQ]: T, [f.CC]: I }),
            children:
                null == v
                    ? (0, r.jsx)(o.m, {
                          asContainer: !0,
                          __unsupportedReactNodeAsText: (0, u.i$)(b, "LLLL"),
                          "aria-label": L,
                          position: C,
                          delay: 750,
                          children: (0, r.jsx)(g, { timeFormatted: O, timestamp: b, id: y, compact: a, children: t }),
                      })
                    : (0, r.jsx)(c.A, {
                          application: v,
                          compact: a,
                          children: (0, r.jsx)(g, { timeFormatted: O, timestamp: b, id: y, compact: a, children: t }),
                      }),
        });
    }),
    g = i.memo(function (e) {
        let { tooltipProps: t, timeFormatted: n, children: i, compact: a, timestamp: s, id: o } = e;
        return (0, r.jsx)("time", {
            ...t,
            id: o,
            dateTime: s.toISOString(),
            children:
                null != i
                    ? i
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("i", { className: f.me, "aria-hidden": !0, children: a ? "[" : " — " }),
                              n,
                              a && (0, r.jsxs)("i", { className: f.me, "aria-hidden": !0, children: ["]", " "] }),
                          ],
                      }),
        });
    }),
    E = p;
