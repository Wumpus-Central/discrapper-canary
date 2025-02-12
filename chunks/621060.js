n.d(t, { Z: () => x }), n(47120), n(653041);
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(481060),
    s = n(424625),
    c = n(823379),
    d = n(246992),
    u = n(658951);
let h = r.forwardRef(function (e, t) {
    let { id: n, selected: r, onClick: l, children: s } = e;
    return (0, a.jsx)(o.P3F, {
        className: i()(u.tabItem, { [u.selected]: r }),
        'data-tab-id': n,
        innerRef: t,
        onClick: l,
        children: s
    });
});
function m(e) {
    let { tabs: t, selectedTabId: n, onSelectTab: l } = e,
        i = r.useRef(null),
        m = r.useRef(0),
        x = r.useRef(new Map()),
        [_, p] = r.useState([]),
        f = r.useCallback(() => {
            var e, a, r, l;
            if (null == i.current) return;
            let o = [],
                s = i.current.getBoundingClientRect().width;
            if (s !== m.current) {
                for (let i of ((m.current = s), (s -= null !== (a = null === (e = x.current.get(n)) || void 0 === e ? void 0 : e.width) && void 0 !== a ? a : 0), t)) i.id !== n && (s -= null !== (l = null === (r = x.current.get(i.id)) || void 0 === r ? void 0 : r.width) && void 0 !== l ? l : 0) < 0 && o.push(i.id);
                p(o);
            }
        }, [t, n]),
        b = r.useRef(null);
    r.useEffect(
        () => (
            (b.current = new ResizeObserver(() => f())),
            null != i.current && b.current.observe(i.current),
            () => {
                var e;
                null === (e = b.current) || void 0 === e || e.disconnect();
            }
        ),
        [f]
    );
    let g = r.useCallback(
        (e) => {
            let { closePopout: r } = e;
            return (0, a.jsx)(o.v2r, {
                navId: 'devtools-overflow',
                variant: 'fixed',
                onClose: r,
                'aria-label': 'Overflowed DevTools Tabs',
                onSelect: r,
                children: t
                    .map((e) => {
                        let { id: t, name: r } = e;
                        return _.includes(t) && n !== t
                            ? (0, a.jsx)(
                                  o.sNh,
                                  {
                                      id: t,
                                      label: r,
                                      action: () => l(t)
                                  },
                                  t
                              )
                            : null;
                    })
                    .filter(c.lm)
            });
        },
        [t, _, l, n]
    );
    return (0, a.jsxs)('div', {
        className: u.tabBar,
        ref: i,
        children: [
            t
                .map((e) => {
                    let { id: t, name: r } = e;
                    if (!_.includes(t))
                        return (0, a.jsx)(
                            h,
                            {
                                id: t,
                                selected: n === t,
                                ref: (e) => {
                                    var n, a, r;
                                    let l = null !== (a = null === (n = x.current.get(t)) || void 0 === n ? void 0 : n.width) && void 0 !== a ? a : 0;
                                    x.current.set(t, {
                                        node: e,
                                        width: null !== (r = null == e ? void 0 : e.getBoundingClientRect().width) && void 0 !== r ? r : l
                                    });
                                },
                                onClick: n !== t ? () => l(t) : void 0,
                                children: r
                            },
                            t
                        );
                })
                .filter(c.lm),
            _.length > 0 &&
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
    var n, l, i;
    let { tabs: o, initialSelectedTabId: s, onChangeTab: c } = e,
        [d, u] = r.useState(null != s ? s : null === (n = o[0]) || void 0 === n ? void 0 : n.id);
    return {
        TabBar: r.useCallback(
            () =>
                (0, a.jsx)(m, {
                    tabs: o,
                    selectedTabId: d,
                    onSelectTab: (e) => {
                        u(e), null == c || c(e);
                    }
                }),
            [d, u, c, ...t]
        ),
        renderSelectedTab: null !== (i = null === (l = o.find((e) => e.id === d)) || void 0 === l ? void 0 : l.render) && void 0 !== i ? i : () => null,
        selectedTabId: d
    };
}
