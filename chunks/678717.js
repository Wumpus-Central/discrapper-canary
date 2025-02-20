n.r(t), n.d(t, { default: () => ee }), n(653041), n(47120);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    o = n(990547),
    s = n(442837),
    c = n(481060),
    d = n(347469),
    u = n(213609),
    h = n(213713),
    m = n(665149),
    x = n(906467),
    p = n(259580),
    f = n(31336),
    b = n(19759),
    _ = n(432877);
n(381996);
var g = n(392750),
    v = n(926976),
    j = n(592197),
    C = n(806240),
    y = n(789654),
    O = n(719672),
    N = n(691867),
    T = n(916790),
    E = n(645973),
    S = n(903502),
    k = n(912072),
    I = n(272193),
    w = n(735959),
    R = n(246992),
    Z = n(496025),
    P = n(442954),
    A = n(633001),
    L = n(702904),
    D = n(178821),
    B = n(958328),
    M = n(315384),
    F = n(514866),
    U = n(678639),
    z = n(351930),
    G = n(771751),
    W = n(596768),
    H = n(56706),
    V = n(621060),
    Y = n(388032),
    X = n(215870),
    K = n(841699);
function J(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: a } = e,
        i = (0, d.Z)({
            minDimension: b.h,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: a,
            orientation: d.y.HORIZONTAL_LEFT
        });
    return (0, r.jsx)('div', {
        onMouseDown: i,
        className: X.resizeHandle
    });
}
function q() {
    var e;
    let t = a.useMemo(() => {
            let e = [
                {
                    id: 'analytics',
                    name: 'Analytics',
                    render: () => (0, r.jsx)(v.Z, {})
                },
                {
                    id: 'triggers',
                    name: 'Triggers',
                    render: () => (0, r.jsx)(W.Z, {})
                },
                {
                    id: 'stores',
                    name: 'Stores',
                    render: () => (0, r.jsx)(U.Z, {})
                },
                {
                    id: 'dispatcher',
                    name: 'Dispatcher',
                    render: () => (0, r.jsx)(T.Z, {})
                }
            ];
            return (
                x.Z.isDeveloper &&
                    e.push({
                        id: 'quick_actions',
                        name: 'Quick Actions',
                        render: () => (0, r.jsx)(F.Z, {})
                    }),
                x.Z.isDeveloper &&
                    (e.push({
                        id: 'end_to_end_encryption',
                        name: 'E2EE',
                        render: () => (0, r.jsx)(E.Z, {})
                    }),
                    e.push({
                        id: 'clans',
                        name: 'Clans',
                        render: () => (0, r.jsx)(C.Z, {})
                    }),
                    e.push({
                        id: 'performance',
                        name: 'Performance',
                        render: () => (0, r.jsx)(D.ZP, {})
                    }),
                    e.push({
                        id: 'feedback',
                        name: 'Feedback',
                        render: () => (0, r.jsx)(S.Z, {})
                    }),
                    e.push({
                        id: 'overlay',
                        name: 'Overlay v3',
                        render: () => (0, r.jsx)(A.Z, {})
                    })),
                e.push({
                    id: 'intl',
                    name: 'Intl',
                    render: () => (0, r.jsx)(w.Z, {})
                }),
                e.push({
                    id: 'colors',
                    name: 'Colors',
                    render: () => (0, r.jsx)(y.Z, {})
                }),
                e.push({
                    id: 'design_toggles',
                    name: 'Design Toggles',
                    render: () => (0, r.jsx)(N.Z, {})
                }),
                e.push({
                    id: 'overlays',
                    name: 'Dev Overlays',
                    render: () => (0, r.jsx)(k.Z, { devSettingsCategory: _.zU.OVERLAYS })
                }),
                e.push({
                    id: 'messaging',
                    name: 'Messaging',
                    render: () => (0, r.jsx)(Z.Z, {})
                }),
                e.push({
                    id: 'reporting',
                    name: 'Reporting',
                    render: () => (0, r.jsx)(k.Z, { devSettingsCategory: _.zU.REPORTING })
                }),
                e.push({
                    id: 'permissions',
                    name: 'Permissions',
                    render: () => (0, r.jsx)(B.Z, {})
                }),
                e.push({
                    id: 'modals',
                    name: 'Modals',
                    render: () => (0, r.jsx)(P.Z, {})
                }),
                e.push({
                    id: 'affinity',
                    name: 'Affinity',
                    render: () => (0, r.jsx)(g.Z, {})
                }),
                x.Z.isDeveloper &&
                    e.push({
                        id: 'content_inventory',
                        name: 'Content Inventory',
                        render: () => (0, r.jsx)(h.Z, {})
                    }),
                e.push({
                    id: 'dcf',
                    name: 'DCF',
                    render: () => (0, r.jsx)(O.Z, {})
                }),
                e.push({
                    id: 'potions',
                    name: 'Potions',
                    render: () => (0, r.jsx)(M.Z, {})
                }),
                window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith('staging') &&
                    (e.push({
                        id: 'trials',
                        name: 'Trials',
                        render: () => (0, r.jsx)(G.Z, {})
                    }),
                    e.push({
                        id: 'payments',
                        name: 'Payments',
                        render: () => (0, r.jsx)(L.Z, {})
                    }),
                    e.push({
                        id: 'subscriptions',
                        name: 'Subscriptions',
                        render: () => (0, r.jsx)(z.Z, {})
                    }),
                    e.push({
                        id: 'billing',
                        name: 'Billing',
                        render: () => (0, r.jsx)(j.Z, {})
                    })),
                e.push({
                    id: 'gifting_intent',
                    name: 'Gifting Intent',
                    render: () => (0, r.jsx)(I.Z, {})
                }),
                e.push({
                    id: 'voice_filters',
                    name: 'Voice Filters',
                    render: () => (0, r.jsx)(H.Z, {})
                }),
                e
            );
        }, []),
        {
            TabBar: n,
            renderSelectedTab: i,
            selectedTabId: l
        } = (0, V.Z)(
            {
                tabs: t,
                initialSelectedTabId: null !== (e = b.Z.lastOpenTabId) && void 0 !== e ? e : void 0,
                onChangeTab: (e) => {
                    (0, f.Qh)({ lastOpenTabId: e });
                }
            },
            [t]
        );
    return (
        (0, u.Z)({
            type: o.ImpressionTypes.PANE,
            name: o.ImpressionNames.VIEW_PANEL_DEVTOOLS,
            properties: { panel: l }
        }),
        (0, r.jsxs)(R.Gk, {
            children: [
                (0, r.jsxs)(m.ZP, {
                    className: K.headerBar,
                    toolbar: (0, r.jsx)(m.ZP.Icon, {
                        icon: c.Dio,
                        tooltip: Y.NW.string(Y.t.cpT0Cg),
                        onClick: f.SO
                    }),
                    children: [
                        (0, r.jsx)(m.ZP.Icon, {
                            icon: c.Ymb,
                            tooltip: 'DevTools'
                        }),
                        (0, r.jsx)(m.ZP.Title, { children: 'DevTools' })
                    ]
                }),
                (0, r.jsx)(n, {}),
                i(),
                (0, r.jsx)(R.Br, { className: X.layerContainer })
            ]
        })
    );
}
function $() {
    let e = a.useRef(null),
        t = (0, s.e7)([b.Z], () => b.Z.sidebarWidth),
        [n, i] = a.useState(null),
        o = a.useCallback((e) => (0, f.Qh)({ sidebarWidth: e }), []);
    return (a.useEffect(() => {
        null === n && null !== t && i(t);
    }, [t, n]),
    null === n)
        ? null
        : (0, r.jsxs)('div', {
              ref: e,
              className: l()(X.container),
              style: {
                  minWidth: b.h,
                  width: n
              },
              'data-app-right-panel': !0,
              children: [
                  (0, r.jsx)(J, {
                      resizableNode: e,
                      onResize: i,
                      onResizeEnd: o
                  }),
                  (0, r.jsx)('div', {
                      className: X.sidebarContent,
                      children: (0, r.jsx)(q, {})
                  })
              ]
          });
}
function Q() {
    return (0, s.e7)([b.Z], () => b.Z.displayTools)
        ? (0, r.jsx)('div', {
              className: l()(X.container, X.mobileContainerExpanded),
              children: (0, r.jsx)('div', {
                  className: X.sidebarContent,
                  children: (0, r.jsx)(q, {})
              })
          })
        : (0, r.jsx)('div', {
              className: X.container,
              children: (0, r.jsx)(c.P3F, {
                  onClick: f.SO,
                  children: (0, r.jsxs)(m.ZP, {
                      className: l()(K.headerBar, X.mobileHeaderCollapsed),
                      toolbar: (0, r.jsx)(p.Z, { direction: p.Z.Directions.UP }),
                      children: [
                          (0, r.jsx)(m.ZP.Icon, {
                              icon: c.Ymb,
                              tooltip: 'DevTools'
                          }),
                          (0, r.jsx)(m.ZP.Title, { children: 'DevTools' })
                      ]
                  })
              })
          });
}
function ee(e) {
    let { mobile: t } = e;
    return t ? (0, r.jsx)(Q, {}) : (0, r.jsx)($, {});
}
