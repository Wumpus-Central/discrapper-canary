n.d(t, { Z: () => x }), n(47120);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    o = n(21260),
    s = n(481060),
    c = n(984370),
    d = n(889711),
    u = n(79707),
    p = n(49898),
    m = n(388032),
    h = n(199462);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
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
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e) {
    var { id: t, label: n, selected: a, handleTransition: i } = e,
        o = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            }
            return a;
        })(e, ['id', 'label', 'selected', 'handleTransition']);
    return (0, r.jsx)(
        c.Z.Title,
        f(g({}, o), {
            onClick: () => i(t),
            wrapperClassName: h.tabWrapper,
            className: l()(h.tab, { [h.selected]: a }),
            children: n
        })
    );
}
function b(e) {
    let { onTabSelect: t, tabs: n, selectedTab: a, selected: i } = e;
    return (0, r.jsx)(s.yRy, {
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, r.jsx)(u.Z, {
                selectedTab: a,
                onClose: i,
                tabs: n,
                onTabSelect: t
            });
        },
        position: 'bottom',
        align: 'left',
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, r.jsxs)(
                c.Z.Title,
                f(g({}, e), {
                    wrapperClassName: h.tabWrapper,
                    className: l()(h.tab, h.more, { [h.selected]: i }),
                    id: p.GlobalDiscoverySharedTabId.MORE,
                    'aria-label': m.NW.string(m.t.UKOtz8),
                    children: [m.NW.string(m.t.UKOtz8), n ? (0, r.jsx)(s.u04, { size: 'xs' }) : (0, r.jsx)(s.CJ0, { size: 'xs' })]
                })
            );
        }
    });
}
function x(e) {
    let { className: t, selectedTab: n, tabs: i, onTabSelect: s, onAvailableWidthChange: c } = e,
        [u, p] = a.useState(0),
        m = a.useRef(u),
        {
            lastVisibleIndex: g,
            onItemLayout: f,
            overflowItemsRef: x,
            itemWidthsRef: v
        } = (0, o.zP)({
            items: i,
            itemGapPx: 24,
            maxLines: 1,
            containerWidth: u
        }),
        C = a.useMemo(() => i.slice(0, g + 1), [g, i]),
        j = a.useMemo(() => i.slice(g + 1), [g, i]),
        y = a.useRef(null),
        O = a.useCallback(() => {
            var e;
            let t = null == (e = y.current) ? void 0 : e.getBoundingClientRect();
            if (null == t || m.current === t.width) return;
            p(t.width), (m.current = t.width);
            let n = v.current.reduce((e, t, n) => e + t + 24 * (0 !== n)),
                r = t.width - n;
            null == c || c(r);
        }, [v, c]);
    a.useEffect(() => {
        let e = (0, d.pP)(O);
        return (0, d.YP)(e, document.body), () => (0, d.UC)(e, document.body);
    }, [O]);
    let I = 0 !== u,
        N = j.some((e) => e.id === n);
    return (0, r.jsxs)('div', {
        className: l()(h.container, t),
        ref: y,
        children: [
            (0, r.jsxs)('div', {
                className: h.measurements,
                children: [
                    i.map((e, t) =>
                        (0, r.jsx)(
                            o.AJ,
                            {
                                index: t,
                                onItemLayout: f,
                                children: (0, r.jsx)(
                                    _,
                                    {
                                        id: e.id,
                                        label: e.label,
                                        selected: n === e.id,
                                        handleTransition: s
                                    },
                                    e.id
                                )
                            },
                            e.id
                        )
                    ),
                    (0, r.jsx)('div', {
                        ref: x,
                        children: (0, r.jsx)(b, {
                            tabs: j,
                            onTabSelect: s,
                            selectedTab: n,
                            selected: N
                        })
                    })
                ]
            }),
            I &&
                (0, r.jsxs)('div', {
                    className: h.tabs,
                    children: [
                        C.map((e) =>
                            (0, r.jsx)(
                                _,
                                {
                                    id: e.id,
                                    label: e.label,
                                    selected: n === e.id,
                                    handleTransition: s
                                },
                                e.id
                            )
                        ),
                        0 !== j.length
                            ? (0, r.jsx)(b, {
                                  tabs: j,
                                  onTabSelect: s,
                                  selectedTab: n,
                                  selected: N
                              })
                            : null
                    ]
                })
        ]
    });
}
