n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120),
    n(653041);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(481060),
    s = n(424625),
    c = n(823379),
    d = n(246992),
    u = n(941469);
let h = a.forwardRef(function (e, t) {
    let { id: n, selected: a, onClick: l, children: s } = e;
    return (0, r.jsx)(o.Clickable, {
        className: i()(u.tabItem, { [u.selected]: a }),
        'data-tab-id': n,
        innerRef: t,
        onClick: l,
        children: s
    });
});
function m(e) {
    let { tabs: t, selectedTabId: n, onSelectTab: l } = e,
        i = a.useRef(null),
        m = a.useRef(0),
        x = a.useRef(new Map()),
        [f, p] = a.useState([]),
        b = a.useCallback(() => {
            var e, r, a, l;
            if (null == i.current) return;
            let o = [],
                s = i.current.getBoundingClientRect().width;
            if (s !== m.current) {
                for (let i of ((m.current = s), (s -= null !== (r = null === (e = x.current.get(n)) || void 0 === e ? void 0 : e.width) && void 0 !== r ? r : 0), t)) {
                    if (i.id !== n) (s -= null !== (l = null === (a = x.current.get(i.id)) || void 0 === a ? void 0 : a.width) && void 0 !== l ? l : 0) < 0 && o.push(i.id);
                }
                p(o);
            }
        }, [t, n]),
        g = a.useRef(null);
    a.useEffect(
        () => (
            (g.current = new ResizeObserver(() => b())),
            null != i.current && g.current.observe(i.current),
            () => {
                var e;
                null === (e = g.current) || void 0 === e || e.disconnect();
            }
        ),
        [b]
    );
    let v = a.useCallback(
        (e) => {
            let { closePopout: a } = e;
            return (0, r.jsx)(o.Menu, {
                navId: 'devtools-overflow',
                variant: 'fixed',
                onClose: a,
                'aria-label': 'Overflowed DevTools Tabs',
                onSelect: a,
                children: t
                    .map((e) => {
                        let { id: t, name: a } = e;
                        return f.includes(t) && n !== t
                            ? (0, r.jsx)(
                                  o.MenuItem,
                                  {
                                      id: t,
                                      label: a,
                                      action: () => l(t)
                                  },
                                  t
                              )
                            : null;
                    })
                    .filter(c.lm)
            });
        },
        [t, f, l, n]
    );
    return (0, r.jsxs)('div', {
        className: u.tabBar,
        ref: i,
        children: [
            t
                .map((e) => {
                    let { id: t, name: a } = e;
                    if (!f.includes(t))
                        return (0, r.jsx)(
                            h,
                            {
                                id: t,
                                selected: n === t,
                                ref: (e) => {
                                    var n, r, a;
                                    let l = null !== (r = null === (n = x.current.get(t)) || void 0 === n ? void 0 : n.width) && void 0 !== r ? r : 0;
                                    x.current.set(t, {
                                        node: e,
                                        width: null !== (a = null == e ? void 0 : e.getBoundingClientRect().width) && void 0 !== a ? a : l
                                    });
                                },
                                onClick: n !== t ? () => l(t) : void 0,
                                children: a
                            },
                            t
                        );
                })
                .filter(c.lm),
            f.length > 0 &&
                (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(o.Popout, {
                        layerContext: d.O$,
                        renderPopout: v,
                        position: 'bottom',
                        align: 'right',
                        spacing: 0,
                        children: (e) =>
                            (0, r.jsx)(o.Button, {
                                ...e,
                                className: u.overflowChevron,
                                size: o.Button.Sizes.ICON,
                                look: o.Button.Looks.BLANK,
                                children: (0, r.jsx)(s.Z, {
                                    className: u.__invalid_overflowIcon,
                                    width: 16,
                                    height: 16
                                })
                            })
                    })
                })
        ]
    });
}
function x(e, t) {
    var n, l, i;
    let { tabs: o, initialSelectedTabId: s, onChangeTab: c } = e,
        [d, u] = a.useState(null != s ? s : null === (n = o[0]) || void 0 === n ? void 0 : n.id),
        h = a.useCallback(
            () =>
                (0, r.jsx)(m, {
                    tabs: o,
                    selectedTabId: d,
                    onSelectTab: (e) => {
                        u(e), null == c || c(e);
                    }
                }),
            [d, u, c, ...t]
        );
    return {
        TabBar: h,
        renderSelectedTab: null !== (i = null === (l = o.find((e) => e.id === d)) || void 0 === l ? void 0 : l.render) && void 0 !== i ? i : () => null,
        selectedTabId: d
    };
}
