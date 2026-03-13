"use strict";
n.d(t, { A: () => A });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(990078),
    o = n(253932),
    u = n(405269),
    c = n(355938),
    d = n(943815),
    m = n(985018),
    h = n(222590);
let g = i.memo(function (e) {
        let {
                children: t,
                className: n,
                compact: s = !1,
                timestamp: g,
                timestampFormat: A,
                isVisibleOnlyOnHover: x = !1,
                cozyAlt: f = !1,
                isInline: v = !0,
                id: j,
                isEdited: N = !1,
                application: C,
                tooltipPosition: b,
            } = e,
            E = i.useMemo(() => new Date(g), [g]),
            I = i.useMemo(() => (0, u.K7)(E), [E]),
            y = o.PZ.useSetting(),
            T = i.useMemo(
                () => (null != A ? (0, u.i$)(E, A, y) : s ? (0, u.i$)(E, "LT", y) : (0, u.mk)(E, !0)),
                [E, A, s, y],
            ),
            R = i.useMemo(() => (s ? (0, d.A)(T) : null), [s, T]),
            _ = i.useMemo(() => (N ? m.intl.formatToPlainString(m.t.CDzOFd, { timeFormatted: I }) : I), [N, I]);
        return (0, l.jsx)("span", {
            className: a()(n, R, { [h.vE]: !0, [h.ET]: x, [h.YQ]: v, [h.CC]: f }),
            children:
                null == C
                    ? (0, l.jsx)(r.m, {
                          asContainer: !0,
                          __unsupportedReactNodeAsText: (0, u.i$)(E, "LLLL"),
                          "aria-label": _,
                          position: b,
                          delay: 750,
                          children: (0, l.jsx)(p, { timeFormatted: T, timestamp: E, id: j, compact: s, children: t }),
                      })
                    : (0, l.jsx)(c.A, {
                          application: C,
                          compact: s,
                          children: (0, l.jsx)(p, { timeFormatted: T, timestamp: E, id: j, compact: s, children: t }),
                      }),
        });
    }),
    p = i.memo(function (e) {
        let { tooltipProps: t, timeFormatted: n, children: i, compact: s, timestamp: a, id: r } = e;
        return (0, l.jsx)("time", {
            ...t,
            id: r,
            dateTime: a.toISOString(),
            children:
                null != i
                    ? i
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("i", { className: h.me, "aria-hidden": !0, children: s ? "[" : " — " }),
                              n,
                              s && (0, l.jsxs)("i", { className: h.me, "aria-hidden": !0, children: ["]", " "] }),
                          ],
                      }),
        });
    }),
    A = g;
