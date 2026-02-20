n.d(t, { A: () => b });
var a = n(627968),
    i = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(990078),
    o = n(253932),
    c = n(405269),
    d = n(355938),
    u = n(943815),
    _ = n(985018),
    m = n(679740);
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
                id: T,
                isEdited: x = !1,
                application: I,
                tooltipPosition: C,
            } = e,
            E = i.useMemo(() => new Date(p), [p]),
            S = i.useMemo(() => (0, c.K7)(E), [E]),
            y = o.PZ.useSetting(),
            v = i.useMemo(
                () => (null != b ? (0, c.i$)(E, b, y) : r ? (0, c.i$)(E, "LT", y) : (0, c.mk)(E, !0)),
                [E, b, r, y],
            ),
            j = i.useMemo(() => (r ? (0, u.A)(v) : null), [r, v]),
            R = i.useMemo(() => (x ? _.intl.formatToPlainString(_.t.CDzOFd, { timeFormatted: S }) : S), [x, S]);
        return (0, a.jsx)("span", {
            className: l()(n, j, { [m.vE]: !0, [m.ET]: h, [m.YQ]: A, [m.CC]: g }),
            children:
                null == I
                    ? (0, a.jsx)(s.m, {
                          asContainer: !0,
                          __unsupportedReactNodeAsText: (0, c.i$)(E, "LLLL"),
                          "aria-label": R,
                          position: C,
                          delay: 750,
                          children: (0, a.jsx)(f, { timeFormatted: v, timestamp: E, id: T, compact: r, children: t }),
                      })
                    : (0, a.jsx)(d.A, {
                          application: I,
                          compact: r,
                          children: (0, a.jsx)(f, { timeFormatted: v, timestamp: E, id: T, compact: r, children: t }),
                      }),
        });
    }),
    f = i.memo(function (e) {
        let { tooltipProps: t, timeFormatted: n, children: i, compact: r, timestamp: l, id: s } = e;
        return (0, a.jsx)("time", {
            ...t,
            id: s,
            dateTime: l.toISOString(),
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
