"use strict";
n.d(t, { A: () => A });
var l = n(627968),
    a = n(64700),
    s = n(503698),
    i = n.n(s),
    r = n(990078),
    o = n(253932),
    c = n(405269),
    u = n(355938),
    d = n(943815),
    m = n(985018),
    g = n(334211);
let h = a.memo(function (e) {
        let {
                children: t,
                className: n,
                compact: s = !1,
                timestamp: h,
                timestampFormat: A,
                isVisibleOnlyOnHover: _ = !1,
                cozyAlt: f = !1,
                isInline: v = !0,
                id: x,
                isEdited: C = !1,
                application: I,
                tooltipPosition: N,
            } = e,
            E = a.useMemo(() => new Date(h), [h]),
            b = a.useMemo(() => (0, c.K7)(E), [E]),
            T = o.PZ.useSetting(),
            S = a.useMemo(
                () => (null != A ? (0, c.i$)(E, A, T) : s ? (0, c.i$)(E, "LT", T) : (0, c.mk)(E, !0)),
                [E, A, s, T],
            ),
            y = a.useMemo(() => (s ? (0, d.A)(S) : null), [s, S]),
            j = a.useMemo(() => (C ? m.intl.formatToPlainString(m.t.CDzOFd, { timeFormatted: b }) : b), [C, b]);
        return (0, l.jsx)("span", {
            className: i()(n, y, { [g.vE]: !0, [g.ET]: _, [g.YQ]: v, [g.CC]: f }),
            children:
                null == I
                    ? (0, l.jsx)(r.m, {
                          asContainer: !0,
                          __unsupportedReactNodeAsText: (0, c.i$)(E, "LLLL"),
                          "aria-label": j,
                          position: N,
                          delay: 750,
                          children: (0, l.jsx)(p, { timeFormatted: S, timestamp: E, id: x, compact: s, children: t }),
                      })
                    : (0, l.jsx)(u.A, {
                          application: I,
                          compact: s,
                          children: (0, l.jsx)(p, { timeFormatted: S, timestamp: E, id: x, compact: s, children: t }),
                      }),
        });
    }),
    p = a.memo(function (e) {
        let { tooltipProps: t, timeFormatted: n, children: a, compact: s, timestamp: i, id: r } = e;
        return (0, l.jsx)("time", {
            ...t,
            id: r,
            dateTime: i.toISOString(),
            children:
                null != a
                    ? a
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("i", { className: g.me, "aria-hidden": !0, children: s ? "[" : " — " }),
                              n,
                              s && (0, l.jsxs)("i", { className: g.me, "aria-hidden": !0, children: ["]", " "] }),
                          ],
                      }),
        });
    }),
    A = h;
