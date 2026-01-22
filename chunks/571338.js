n.d(t, {
    A: () => v,
}),
    n(896048);
var l = n(627968),
    a = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(3666),
    c = n(397927),
    o = n(770178),
    d = n(742589),
    u = n(124589),
    p = n(488995),
    h = n(985018),
    m = n(402664);

function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}

function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function g(e) {
    let { id: t, label: n, selected: a, handleTransition: r } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                a,
                r = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (a = 0, n = Reflect.ownKeys(e); a < n.length; a++)
                    (l = n[a]),
                        !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l]);
                return r;
            }
            if (
                ((r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        l,
                        a = {},
                        r = Object.getOwnPropertyNames(e);
                    for (l = 0; l < r.length; l++)
                        (n = r[l]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
                    return a;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
                    (l = n[a]),
                        !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l]);
            return r;
        })(e, ["id", "label", "selected", "handleTransition"]);
    return (0, l.jsx)(
        d.A.Title,
        f(b({}, s), {
            onClick: () => r(t),
            wrapperClassName: m.Vn,
            className: i()(m.Mf, {
                [m.wH]: a,
            }),
            children: n,
        }),
    );
}

function x(e) {
    let { onTabSelect: t, tabs: n, selectedTab: r, selected: s } = e,
        o = a.useRef(null);
    return (0, l.jsx)(c.YNO, {
        targetElementRef: o,
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, l.jsx)(u.A, {
                selectedTab: r,
                onClose: a,
                tabs: n,
                onTabSelect: t,
            });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, l.jsxs)(
                d.A.Title,
                f(b({}, e), {
                    ref: o,
                    wrapperClassName: m.Vn,
                    className: i()(m.Mf, m.OS, {
                        [m.wH]: s,
                    }),
                    id: p.GlobalDiscoverySharedTabId.MORE,
                    "aria-label": h.intl.string(h.t["UKOtz+"]),
                    children: [
                        h.intl.string(h.t["UKOtz+"]),
                        n
                            ? (0, l.jsx)(c.tN5, {
                                  size: "xs",
                              })
                            : (0, l.jsx)(c.abt, {
                                  size: "xs",
                              }),
                    ],
                }),
            );
        },
    });
}

function v(e) {
    let { className: t, selectedTab: n, tabs: r, onTabSelect: c, onAvailableWidthChange: d } = e,
        [u, p] = a.useState(0),
        h = a.useRef(u),
        {
            lastVisibleIndex: b,
            onItemLayout: f,
            overflowItemsRef: v,
            itemWidthsRef: j,
        } = (0, s.Wv)({
            items: r,
            itemGapPx: 24,
            maxLines: 1,
            containerWidth: u,
        }),
        A = a.useMemo(() => r.slice(0, b + 1), [b, r]),
        _ = a.useMemo(() => r.slice(b + 1), [b, r]),
        y = a.useRef(null),
        O = a.useCallback(
            (e) => {
                let t = e.contentRect.width;
                if (null == t || h.current === t) return;
                p(t), (h.current = t);
                let n = j.current.reduce((e, t, n) => e + t + 24 * (0 !== n));
                null == d || d(t - n);
            },
            [j, d],
        );
    (0, o.g)(y, O);
    let S = 0 !== u,
        C = _.some((e) => e.id === n);
    return (0, l.jsxs)("div", {
        className: i()(m.kL, t),
        ref: y,
        children: [
            (0, l.jsxs)("div", {
                className: m.Kk,
                children: [
                    r.map((e, t) =>
                        (0, l.jsx)(
                            s.Ae,
                            {
                                index: t,
                                onItemLayout: f,
                                children: (0, l.jsx)(
                                    g,
                                    {
                                        id: e.id,
                                        label: e.label,
                                        selected: n === e.id,
                                        handleTransition: c,
                                    },
                                    e.id,
                                ),
                            },
                            e.id,
                        ),
                    ),
                    (0, l.jsx)("div", {
                        ref: v,
                        children: (0, l.jsx)(x, {
                            tabs: _,
                            onTabSelect: c,
                            selectedTab: n,
                            selected: C,
                        }),
                    }),
                ],
            }),
            S &&
                (0, l.jsxs)("div", {
                    className: m.vR,
                    children: [
                        A.map((e) =>
                            (0, l.jsx)(
                                g,
                                {
                                    id: e.id,
                                    label: e.label,
                                    selected: n === e.id,
                                    handleTransition: c,
                                },
                                e.id,
                            ),
                        ),
                        0 !== _.length
                            ? (0, l.jsx)(x, {
                                  tabs: _,
                                  onTabSelect: c,
                                  selectedTab: n,
                                  selected: C,
                              })
                            : null,
                    ],
                }),
        ],
    });
}
