n.r(t), n.d(t, { default: () => ee }), n(653041), n(47120);
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(990547),
    s = n(442837),
    c = n(481060),
    d = n(347469),
    u = n(213609),
    h = n(213713),
    m = n(665149),
    x = n(906467),
    _ = n(259580),
    p = n(31336),
    f = n(19759),
    b = n(432877);
n(381996);
var g = n(392750),
    v = n(926976),
    j = n(592197),
    C = n(806240),
    N = n(789654),
    T = n(719672),
    E = n(691867),
    S = n(916790),
    y = n(645973),
    k = n(903502),
    I = n(912072),
    R = n(272193),
    O = n(735959),
    Z = n(246992),
    w = n(496025),
    A = n(442954),
    L = n(633001),
    P = n(702904),
    D = n(178821),
    B = n(958328),
    M = n(315384),
    F = n(514866),
    z = n(678639),
    U = n(351930),
    G = n(771751),
    H = n(596768),
    V = n(56706),
    W = n(621060),
    Y = n(388032),
    X = n(362793),
    K = n(617521);
function J(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: r } = e,
        l = (0, d.Z)({
            minDimension: f.h,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: r,
            orientation: d.y.HORIZONTAL_LEFT
        });
    return (0, a.jsx)('div', {
        onMouseDown: l,
        className: X.resizeHandle
    });
}
function q() {
    var e;
    let t = r.useMemo(() => {
            let e = [
                {
                    id: 'analytics',
                    name: 'Analytics',
                    render: () => (0, a.jsx)(v.Z, {})
                },
                {
                    id: 'triggers',
                    name: 'Triggers',
                    render: () => (0, a.jsx)(H.Z, {})
                },
                {
                    id: 'stores',
                    name: 'Stores',
                    render: () => (0, a.jsx)(z.Z, {})
                },
                {
                    id: 'dispatcher',
                    name: 'Dispatcher',
                    render: () => (0, a.jsx)(S.Z, {})
                }
            ];
            return (
                x.Z.isDeveloper &&
                    e.push({
                        id: 'quick_actions',
                        name: 'Quick Actions',
                        render: () => (0, a.jsx)(F.Z, {})
                    }),
                x.Z.isDeveloper &&
                    (e.push({
                        id: 'end_to_end_encryption',
                        name: 'E2EE',
                        render: () => (0, a.jsx)(y.Z, {})
                    }),
                    e.push({
                        id: 'clans',
                        name: 'Clans',
                        render: () => (0, a.jsx)(C.Z, {})
                    }),
                    e.push({
                        id: 'performance',
                        name: 'Performance',
                        render: () => (0, a.jsx)(D.ZP, {})
                    }),
                    e.push({
                        id: 'feedback',
                        name: 'Feedback',
                        render: () => (0, a.jsx)(k.Z, {})
                    }),
                    e.push({
                        id: 'overlay',
                        name: 'Overlay v3',
                        render: () => (0, a.jsx)(L.Z, {})
                    })),
                e.push({
                    id: 'intl',
                    name: 'Intl',
                    render: () => (0, a.jsx)(O.Z, {})
                }),
                e.push({
                    id: 'colors',
                    name: 'Colors',
                    render: () => (0, a.jsx)(N.Z, {})
                }),
                e.push({
                    id: 'design_toggles',
                    name: 'Design Toggles',
                    render: () => (0, a.jsx)(E.Z, {})
                }),
                e.push({
                    id: 'overlays',
                    name: 'Dev Overlays',
                    render: () => (0, a.jsx)(I.Z, { devSettingsCategory: b.zU.OVERLAYS })
                }),
                e.push({
                    id: 'messaging',
                    name: 'Messaging',
                    render: () => (0, a.jsx)(w.Z, {})
                }),
                e.push({
                    id: 'reporting',
                    name: 'Reporting',
                    render: () => (0, a.jsx)(I.Z, { devSettingsCategory: b.zU.REPORTING })
                }),
                e.push({
                    id: 'permissions',
                    name: 'Permissions',
                    render: () => (0, a.jsx)(B.Z, {})
                }),
                e.push({
                    id: 'modals',
                    name: 'Modals',
                    render: () => (0, a.jsx)(A.Z, {})
                }),
                e.push({
                    id: 'affinity',
                    name: 'Affinity',
                    render: () => (0, a.jsx)(g.Z, {})
                }),
                x.Z.isDeveloper &&
                    e.push({
                        id: 'content_inventory',
                        name: 'Content Inventory',
                        render: () => (0, a.jsx)(h.Z, {})
                    }),
                e.push({
                    id: 'dcf',
                    name: 'DCF',
                    render: () => (0, a.jsx)(T.Z, {})
                }),
                e.push({
                    id: 'potions',
                    name: 'Potions',
                    render: () => (0, a.jsx)(M.Z, {})
                }),
                window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith('staging') &&
                    (e.push({
                        id: 'trials',
                        name: 'Trials',
                        render: () => (0, a.jsx)(G.Z, {})
                    }),
                    e.push({
                        id: 'payments',
                        name: 'Payments',
                        render: () => (0, a.jsx)(P.Z, {})
                    }),
                    e.push({
                        id: 'subscriptions',
                        name: 'Subscriptions',
                        render: () => (0, a.jsx)(U.Z, {})
                    }),
                    e.push({
                        id: 'billing',
                        name: 'Billing',
                        render: () => (0, a.jsx)(j.Z, {})
                    })),
                e.push({
                    id: 'gifting_intent',
                    name: 'Gifting Intent',
                    render: () => (0, a.jsx)(R.Z, {})
                }),
                e.push({
                    id: 'voice_filters',
                    name: 'Voice Filters',
                    render: () => (0, a.jsx)(V.Z, {})
                }),
                e
            );
        }, []),
        {
            TabBar: n,
            renderSelectedTab: l,
            selectedTabId: i
        } = (0, W.Z)(
            {
                tabs: t,
                initialSelectedTabId: null !== (e = f.Z.lastOpenTabId) && void 0 !== e ? e : void 0,
                onChangeTab: (e) => {
                    (0, p.Qh)({ lastOpenTabId: e });
                }
            },
            [t]
        );
    return (
        (0, u.Z)({
            type: o.ImpressionTypes.PANE,
            name: o.ImpressionNames.VIEW_PANEL_DEVTOOLS,
            properties: { panel: i }
        }),
        (0, a.jsxs)(Z.Gk, {
            children: [
                (0, a.jsxs)(m.ZP, {
                    className: K.headerBar,
                    toolbar: (0, a.jsx)(m.ZP.Icon, {
                        icon: c.Dio,
                        tooltip: Y.intl.string(Y.t.cpT0Cg),
                        onClick: p.SO
                    }),
                    children: [
                        (0, a.jsx)(m.ZP.Icon, {
                            icon: c.Ymb,
                            tooltip: 'DevTools'
                        }),
                        (0, a.jsx)(m.ZP.Title, { children: 'DevTools' })
                    ]
                }),
                (0, a.jsx)(n, {}),
                l(),
                (0, a.jsx)(Z.Br, { className: X.layerContainer })
            ]
        })
    );
}
function $() {
    let e = r.useRef(null),
        t = (0, s.e7)([f.Z], () => f.Z.sidebarWidth),
        [n, l] = r.useState(null),
        o = r.useCallback((e) => (0, p.Qh)({ sidebarWidth: e }), []);
    return (r.useEffect(() => {
        null === n && null !== t && l(t);
    }, [t, n]),
    null === n)
        ? null
        : (0, a.jsxs)('div', {
              ref: e,
              className: i()(X.container),
              style: {
                  minWidth: f.h,
                  width: n
              },
              'data-app-right-panel': !0,
              children: [
                  (0, a.jsx)(J, {
                      resizableNode: e,
                      onResize: l,
                      onResizeEnd: o
                  }),
                  (0, a.jsx)('div', {
                      className: X.sidebarContent,
                      children: (0, a.jsx)(q, {})
                  })
              ]
          });
}
function Q() {
    return (0, s.e7)([f.Z], () => f.Z.displayTools)
        ? (0, a.jsx)('div', {
              className: i()(X.container, X.mobileContainerExpanded),
              children: (0, a.jsx)('div', {
                  className: X.sidebarContent,
                  children: (0, a.jsx)(q, {})
              })
          })
        : (0, a.jsx)('div', {
              className: X.container,
              children: (0, a.jsx)(c.P3F, {
                  onClick: p.SO,
                  children: (0, a.jsxs)(m.ZP, {
                      className: i()(K.headerBar, X.mobileHeaderCollapsed),
                      toolbar: (0, a.jsx)(_.Z, { direction: _.Z.Directions.UP }),
                      children: [
                          (0, a.jsx)(m.ZP.Icon, {
                              icon: c.Ymb,
                              tooltip: 'DevTools'
                          }),
                          (0, a.jsx)(m.ZP.Title, { children: 'DevTools' })
                      ]
                  })
              })
          });
}
function ee(e) {
    let { mobile: t } = e;
    return t ? (0, a.jsx)(Q, {}) : (0, a.jsx)($, {});
}
