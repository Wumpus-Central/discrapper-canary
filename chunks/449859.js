n.d(t, { A: () => h });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    o = n.n(l),
    r = n(990078),
    s = n(253932),
    c = n(405269),
    d = n(355938),
    u = n(943815),
    m = n(985018),
    _ = n(679740);
let p = i.memo(function (e) {
        let {
                children: t,
                className: n,
                compact: l = !1,
                timestamp: p,
                timestampFormat: h,
                isVisibleOnlyOnHover: b = !1,
                cozyAlt: g = !1,
                isInline: A = !0,
                id: I,
                isEdited: y = !1,
                application: T,
                tooltipPosition: x,
            } = e,
            C = i.useMemo(() => new Date(p), [p]),
            E = i.useMemo(() => (0, c.K7)(C), [C]),
            S = s.PZ.useSetting(),
            v = i.useMemo(
                () => (null != h ? (0, c.i$)(C, h, S) : l ? (0, c.i$)(C, "LT", S) : (0, c.mk)(C, !0)),
                [C, h, l, S],
            ),
            j = i.useMemo(() => (l ? (0, u.A)(v) : null), [l, v]),
            w = i.useMemo(() => (y ? m.intl.formatToPlainString(m.t.CDzOFd, { timeFormatted: E }) : E), [y, E]);
        return (0, a.jsx)("span", {
            className: o()(n, j, { [_.vE]: !0, [_.ET]: b, [_.YQ]: A, [_.CC]: g }),
            children:
                null == T
                    ? (0, a.jsx)(r.m, {
                          asContainer: !0,
                          __unsupportedReactNodeAsText: (0, c.i$)(C, "LLLL"),
                          "aria-label": w,
                          position: x,
                          delay: 750,
                          children: (0, a.jsx)(f, { timeFormatted: v, timestamp: C, id: I, compact: l, children: t }),
                      })
                    : (0, a.jsx)(d.A, {
                          application: T,
                          compact: l,
                          children: (0, a.jsx)(f, { timeFormatted: v, timestamp: C, id: I, compact: l, children: t }),
                      }),
        });
    }),
    f = i.memo(function (e) {
        let { tooltipProps: t, timeFormatted: n, children: i, compact: l, timestamp: o, id: r } = e;
        return (0, a.jsx)("time", {
            ...t,
            id: r,
            dateTime: o.toISOString(),
            children:
                null != i
                    ? i
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("i", { className: _.me, "aria-hidden": !0, children: l ? "[" : " — " }),
                              n,
                              l && (0, a.jsxs)("i", { className: _.me, "aria-hidden": !0, children: ["]", " "] }),
                          ],
                      }),
        });
    }),
    h = p;
