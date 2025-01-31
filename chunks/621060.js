n.d(t, { Z: () => x }), n(47120), n(653041);
var a = n(200651),
    l = n(192379),
    r = n(120356),
    i = n.n(r),
    o = n(481060),
    s = n(424625),
    c = n(823379),
    d = n(246992),
    u = n(941469);
let m = l.forwardRef(function (e, t) {
    let { id: n, selected: l, onClick: r, children: s } = e;
    return (0, a.jsx)(o.P3F, {
        className: i()(u.tabItem, { [u.selected]: l }),
        'data-tab-id': n,
        innerRef: t,
        onClick: r,
        children: s
    });
});
function h(e) {
    let { tabs: t, selectedTabId: n, onSelectTab: r } = e,
        i = l.useRef(null),
        h = l.useRef(0),
        x = l.useRef(new Map()),
        [p, f] = l.useState([]),
        b = l.useCallback(() => {
            var e, a, l, r;
            if (null == i.current) return;
            let o = [],
                s = i.current.getBoundingClientRect().width;
            if (s !== h.current) {
                for (let i of ((h.current = s), (s -= null !== (a = null === (e = x.current.get(n)) || void 0 === e ? void 0 : e.width) && void 0 !== a ? a : 0), t)) i.id !== n && (s -= null !== (r = null === (l = x.current.get(i.id)) || void 0 === l ? void 0 : l.width) && void 0 !== r ? r : 0) < 0 && o.push(i.id);
                f(o);
            }
        }, [t, n]),
        _ = l.useRef(null);
    l.useEffect(
        () => (
            (_.current = new ResizeObserver(() => b())),
            null != i.current && _.current.observe(i.current),
            () => {
                var e;
                null === (e = _.current) || void 0 === e || e.disconnect();
            }
        ),
        [b]
    );
    let g = l.useCallback(
        (e) => {
            let { closePopout: l } = e;
            return (0, a.jsx)(o.v2r, {
                navId: 'devtools-overflow',
                variant: 'fixed',
                onClose: l,
                'aria-label': 'Overflowed DevTools Tabs',
                onSelect: l,
                children: t
                    .map((e) => {
                        let { id: t, name: l } = e;
                        return p.includes(t) && n !== t
                            ? (0, a.jsx)(
                                  o.sNh,
                                  {
                                      id: t,
                                      label: l,
                                      action: () => r(t)
                                  },
                                  t
                              )
                            : null;
                    })
                    .filter(c.lm)
            });
        },
        [t, p, r, n]
    );
    return (0, a.jsxs)('div', {
        className: u.tabBar,
        ref: i,
        children: [
            t
                .map((e) => {
                    let { id: t, name: l } = e;
                    if (!p.includes(t))
                        return (0, a.jsx)(
                            m,
                            {
                                id: t,
                                selected: n === t,
                                ref: (e) => {
                                    var n, a, l;
                                    let r = null !== (a = null === (n = x.current.get(t)) || void 0 === n ? void 0 : n.width) && void 0 !== a ? a : 0;
                                    x.current.set(t, {
                                        node: e,
                                        width: null !== (l = null == e ? void 0 : e.getBoundingClientRect().width) && void 0 !== l ? l : r
                                    });
                                },
                                onClick: n !== t ? () => r(t) : void 0,
                                children: l
                            },
                            t
                        );
                })
                .filter(c.lm),
            p.length > 0 &&
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(o.yRy, {
                        layerContext: d.O$,
                        renderPopout: g,
                        position: 'bottom',
                        align: 'right',
                        spacing: 0,
                        children: (e) =>
                            (0, a.jsx)(o.zxk, {
                                ...e,
                                className: u.overflowChevron,
                                size: o.zxk.Sizes.ICON,
                                look: o.zxk.Looks.BLANK,
                                children: (0, a.jsx)(s.Z, {
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
    var n, r, i;
    let { tabs: o, initialSelectedTabId: s, onChangeTab: c } = e,
        [d, u] = l.useState(null != s ? s : null === (n = o[0]) || void 0 === n ? void 0 : n.id);
    return {
        TabBar: l.useCallback(
            () =>
                (0, a.jsx)(h, {
                    tabs: o,
                    selectedTabId: d,
                    onSelectTab: (e) => {
                        u(e), null == c || c(e);
                    }
                }),
            [d, u, c, ...t]
        ),
        renderSelectedTab: null !== (i = null === (r = o.find((e) => e.id === d)) || void 0 === r ? void 0 : r.render) && void 0 !== i ? i : () => null,
        selectedTabId: d
    };
}
