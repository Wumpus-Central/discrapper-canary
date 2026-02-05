"use strict";
n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(990078),
    l = n(405269),
    u = n(355938),
    c = n(943815),
    d = n(985018),
    _ = n(679740);
function f(e) {
    return new Date(e);
}
let p = i.memo(function (e) {
        let {
                children: t,
                className: n,
                compact: a = !1,
                timestamp: p,
                timestampFormat: m,
                isVisibleOnlyOnHover: g = !1,
                cozyAlt: E = !1,
                isInline: A = !0,
                id: I,
                isEdited: T = !1,
                application: y,
                tooltipPosition: S,
            } = e,
            v = i.useMemo(() => f(p), [p]),
            C = i.useMemo(() => (0, l.K7)(v), [v]),
            b = i.useMemo(() => (null != m ? (0, l.i$)(v, m) : a ? (0, l.i$)(v, "LT") : (0, l.mk)(v, !0)), [v, m, a]),
            N = i.useMemo(() => (a ? (0, c.A)(b) : null), [a, b]),
            R = i.useMemo(() => (T ? d.intl.formatToPlainString(d.t.CDzOFd, { timeFormatted: C }) : C), [T, C]);
        return (0, r.jsx)("span", {
            className: s()(n, N, { [_.vE]: !0, [_.ET]: g, [_.YQ]: A, [_.CC]: E }),
            children:
                null == y
                    ? (0, r.jsx)(o.m, {
                          asContainer: !0,
                          __unsupportedReactNodeAsText: (0, l.i$)(v, "LLLL"),
                          "aria-label": R,
                          position: S,
                          delay: 750,
                          children: (0, r.jsx)(h, { timeFormatted: b, timestamp: v, id: I, compact: a, children: t }),
                      })
                    : (0, r.jsx)(u.A, {
                          application: y,
                          compact: a,
                          children: (0, r.jsx)(h, { timeFormatted: b, timestamp: v, id: I, compact: a, children: t }),
                      }),
        });
    }),
    h = i.memo(function (e) {
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
                              (0, r.jsx)("i", { className: _.me, "aria-hidden": !0, children: a ? "[" : " — " }),
                              n,
                              a && (0, r.jsxs)("i", { className: _.me, "aria-hidden": !0, children: ["]", " "] }),
                          ],
                      }),
        });
    }),
    m = p;
