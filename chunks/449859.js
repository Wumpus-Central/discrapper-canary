"use strict";
n.d(t, { A: () => A });
var l = n(627968),
    s = n(64700),
    i = n(503698),
    r = n.n(i),
    a = n(990078),
    o = n(253932),
    u = n(405269),
    c = n(355938),
    d = n(943815),
    m = n(985018),
    h = n(679740);
let g = s.memo(function (e) {
        let {
                children: t,
                className: n,
                compact: i = !1,
                timestamp: g,
                timestampFormat: A,
                isVisibleOnlyOnHover: f = !1,
                cozyAlt: x = !1,
                isInline: v = !0,
                id: N,
                isEdited: b = !1,
                application: j,
                tooltipPosition: C,
            } = e,
            E = s.useMemo(() => new Date(g), [g]),
            R = s.useMemo(() => (0, u.K7)(E), [E]),
            I = o.PZ.useSetting(),
            T = s.useMemo(
                () => (null != A ? (0, u.i$)(E, A, I) : i ? (0, u.i$)(E, "LT", I) : (0, u.mk)(E, !0)),
                [E, A, i, I],
            ),
            y = s.useMemo(() => (i ? (0, d.A)(T) : null), [i, T]),
            _ = s.useMemo(() => (b ? m.intl.formatToPlainString(m.t.CDzOFd, { timeFormatted: R }) : R), [b, R]);
        return (0, l.jsx)("span", {
            className: r()(n, y, { [h.vE]: !0, [h.ET]: f, [h.YQ]: v, [h.CC]: x }),
            children:
                null == j
                    ? (0, l.jsx)(a.m, {
                          asContainer: !0,
                          __unsupportedReactNodeAsText: (0, u.i$)(E, "LLLL"),
                          "aria-label": _,
                          position: C,
                          delay: 750,
                          children: (0, l.jsx)(p, { timeFormatted: T, timestamp: E, id: N, compact: i, children: t }),
                      })
                    : (0, l.jsx)(c.A, {
                          application: j,
                          compact: i,
                          children: (0, l.jsx)(p, { timeFormatted: T, timestamp: E, id: N, compact: i, children: t }),
                      }),
        });
    }),
    p = s.memo(function (e) {
        let { tooltipProps: t, timeFormatted: n, children: s, compact: i, timestamp: r, id: a } = e;
        return (0, l.jsx)("time", {
            ...t,
            id: a,
            dateTime: r.toISOString(),
            children:
                null != s
                    ? s
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("i", { className: h.me, "aria-hidden": !0, children: i ? "[" : " — " }),
                              n,
                              i && (0, l.jsxs)("i", { className: h.me, "aria-hidden": !0, children: ["]", " "] }),
                          ],
                      }),
        });
    }),
    A = g;
