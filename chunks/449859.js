n.d(t, { A: () => b });
var a = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    l = n(990078),
    o = n(253932),
    c = n(405269),
    d = n(355938),
    u = n(943815),
    _ = n(985018),
    m = n(222590);
let p = i.memo(function (e) {
        let {
                children: t,
                className: n,
                compact: r = !1,
                timestamp: p,
                timestampFormat: b,
                isVisibleOnlyOnHover: h = !1,
                cozyAlt: g = !1,
                isInline: A = !0,
                id: x,
                isEdited: T = !1,
                application: C,
                tooltipPosition: I,
            } = e,
            S = i.useMemo(() => new Date(p), [p]),
            E = i.useMemo(() => (0, c.K7)(S), [S]),
            y = o.PZ.useSetting(),
            v = i.useMemo(
                () => (null != b ? (0, c.i$)(S, b, y) : r ? (0, c.i$)(S, "LT", y) : (0, c.mk)(S, !0)),
                [S, b, r, y],
            ),
            j = i.useMemo(() => (r ? (0, u.A)(v) : null), [r, v]),
            R = i.useMemo(() => (T ? _.intl.formatToPlainString(_.t.CDzOFd, { timeFormatted: E }) : E), [T, E]);
        return (0, a.jsx)("span", {
            className: s()(n, j, { [m.vE]: !0, [m.ET]: h, [m.YQ]: A, [m.CC]: g }),
            children:
                null == C
                    ? (0, a.jsx)(l.m, {
                          asContainer: !0,
                          __unsupportedReactNodeAsText: (0, c.i$)(S, "LLLL"),
                          "aria-label": R,
                          position: I,
                          delay: 750,
                          children: (0, a.jsx)(f, { timeFormatted: v, timestamp: S, id: x, compact: r, children: t }),
                      })
                    : (0, a.jsx)(d.A, {
                          application: C,
                          compact: r,
                          children: (0, a.jsx)(f, { timeFormatted: v, timestamp: S, id: x, compact: r, children: t }),
                      }),
        });
    }),
    f = i.memo(function (e) {
        let { tooltipProps: t, timeFormatted: n, children: i, compact: r, timestamp: s, id: l } = e;
        return (0, a.jsx)("time", {
            ...t,
            id: l,
            dateTime: s.toISOString(),
            children:
                null != i
                    ? i
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("i", { className: m.me, "aria-hidden": !0, children: r ? "[" : " — " }),
                              n,
                              r && (0, a.jsxs)("i", { className: m.me, "aria-hidden": !0, children: ["]", " "] }),
                          ],
                      }),
        });
    }),
    b = p;
