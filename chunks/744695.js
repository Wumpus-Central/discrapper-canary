n.d(t, { Z: () => x }), n(388685);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(21260),
    o = n(481060),
    c = n(393903),
    d = n(984370),
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
function _(e, t) {
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
function f(e) {
    var { id: t, label: n, selected: i, handleTransition: a } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['id', 'label', 'selected', 'handleTransition']);
    return (0, r.jsx)(
        d.Z.Title,
        _(g({}, s), {
            onClick: () => a(t),
            wrapperClassName: h.tabWrapper,
            className: l()(h.tab, { [h.selected]: i }),
            children: n
        })
    );
}
function b(e) {
    let { onTabSelect: t, tabs: n, selectedTab: i, selected: a } = e;
    return (0, r.jsx)(o.yRy, {
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, r.jsx)(u.Z, {
                selectedTab: i,
                onClose: a,
                tabs: n,
                onTabSelect: t
            });
        },
        position: 'bottom',
        align: 'left',
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, r.jsxs)(
                d.Z.Title,
                _(g({}, e), {
                    wrapperClassName: h.tabWrapper,
                    className: l()(h.tab, h.more, { [h.selected]: a }),
                    id: p.GlobalDiscoverySharedTabId.MORE,
                    'aria-label': m.intl.string(m.t.UKOtz8),
                    children: [m.intl.string(m.t.UKOtz8), n ? (0, r.jsx)(o.u04, { size: 'xs' }) : (0, r.jsx)(o.CJ0, { size: 'xs' })]
                })
            );
        }
    });
}
function x(e) {
    let { className: t, selectedTab: n, tabs: a, onTabSelect: o, onAvailableWidthChange: d } = e,
        [u, p] = i.useState(0),
        m = i.useRef(u),
        {
            lastVisibleIndex: g,
            onItemLayout: _,
            overflowItemsRef: x,
            itemWidthsRef: v
        } = (0, s.zP)({
            items: a,
            itemGapPx: 24,
            maxLines: 1,
            containerWidth: u
        }),
        C = i.useMemo(() => a.slice(0, g + 1), [g, a]),
        j = i.useMemo(() => a.slice(g + 1), [g, a]),
        y = i.useRef(null),
        I = i.useCallback(
            (e) => {
                let t = e.contentRect.width;
                if (null == t || m.current === t) return;
                p(t), (m.current = t);
                let n = v.current.reduce((e, t, n) => e + t + 24 * (0 !== n));
                null == d || d(t - n);
            },
            [v, d]
        );
    (0, c.s)(y, I);
    let O = 0 !== u,
        P = j.some((e) => e.id === n);
    return (0, r.jsxs)('div', {
        className: l()(h.container, t),
        ref: y,
        children: [
            (0, r.jsxs)('div', {
                className: h.measurements,
                children: [
                    a.map((e, t) =>
                        (0, r.jsx)(
                            s.AJ,
                            {
                                index: t,
                                onItemLayout: _,
                                children: (0, r.jsx)(
                                    f,
                                    {
                                        id: e.id,
                                        label: e.label,
                                        selected: n === e.id,
                                        handleTransition: o
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
                            onTabSelect: o,
                            selectedTab: n,
                            selected: P
                        })
                    })
                ]
            }),
            O &&
                (0, r.jsxs)('div', {
                    className: h.tabs,
                    children: [
                        C.map((e) =>
                            (0, r.jsx)(
                                f,
                                {
                                    id: e.id,
                                    label: e.label,
                                    selected: n === e.id,
                                    handleTransition: o
                                },
                                e.id
                            )
                        ),
                        0 !== j.length
                            ? (0, r.jsx)(b, {
                                  tabs: j,
                                  onTabSelect: o,
                                  selectedTab: n,
                                  selected: P
                              })
                            : null
                    ]
                })
        ]
    });
}
