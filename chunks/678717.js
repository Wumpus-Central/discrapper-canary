n.r(t), n.d(t, { default: () => et }), n(653041), n(47120);
var a = n(200651),
    l = n(192379),
    r = n(120356),
    i = n.n(r),
    o = n(990547),
    s = n(442837),
    c = n(481060),
    d = n(347469),
    u = n(213609),
    m = n(213713),
    h = n(665149),
    x = n(906467),
    p = n(259580),
    f = n(31336),
    _ = n(19759),
    b = n(432877);
n(381996);
var g = n(392750),
    v = n(926976),
    j = n(592197),
    C = n(806240),
    N = n(789654),
    T = n(719672),
    E = n(691867),
    y = n(916790),
    S = n(645973),
    k = n(903502),
    I = n(912072),
    Z = n(272193),
    O = n(735959),
    w = n(246992),
    R = n(496025),
    P = n(442954),
    A = n(633001),
    L = n(702904),
    D = n(178821),
    B = n(248526),
    M = n(958328),
    z = n(315384),
    F = n(514866),
    U = n(678639),
    G = n(351930),
    H = n(771751),
    W = n(596768),
    V = n(56706),
    X = n(621060),
    Y = n(388032),
    K = n(771466),
    J = n(941469);
function q(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: l } = e,
        r = (0, d.Z)({
            minDimension: _.h,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: l,
            orientation: d.y.HORIZONTAL_LEFT
        });
    return (0, a.jsx)('div', {
        onMouseDown: r,
        className: K.resizeHandle
    });
}
function $() {
    var e;
    let t = l.useMemo(() => {
            let e = [
                {
                    id: 'analytics',
                    name: 'Analytics',
                    render: () => (0, a.jsx)(v.Z, {})
                },
                {
                    id: 'triggers',
                    name: 'Triggers',
                    render: () => (0, a.jsx)(W.Z, {})
                },
                {
                    id: 'stores',
                    name: 'Stores',
                    render: () => (0, a.jsx)(U.Z, {})
                },
                {
                    id: 'dispatcher',
                    name: 'Dispatcher',
                    render: () => (0, a.jsx)(y.Z, {})
                }
            ];
            return (
                x.Z.isDeveloper &&
                    (e.push({
                        id: 'quick_actions',
                        name: 'Quick Actions',
                        render: () => (0, a.jsx)(F.Z, {})
                    }),
                    e.push({
                        id: 'perks_demos',
                        name: 'Perks Demos',
                        render: () => (0, a.jsx)(B.Z, {})
                    })),
                x.Z.isDeveloper &&
                    (e.push({
                        id: 'end_to_end_encryption',
                        name: 'E2EE',
                        render: () => (0, a.jsx)(S.Z, {})
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
                        render: () => (0, a.jsx)(A.Z, {})
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
                    render: () => (0, a.jsx)(R.Z, {})
                }),
                e.push({
                    id: 'reporting',
                    name: 'Reporting',
                    render: () => (0, a.jsx)(I.Z, { devSettingsCategory: b.zU.REPORTING })
                }),
                e.push({
                    id: 'permissions',
                    name: 'Permissions',
                    render: () => (0, a.jsx)(M.Z, {})
                }),
                e.push({
                    id: 'modals',
                    name: 'Modals',
                    render: () => (0, a.jsx)(P.Z, {})
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
                        render: () => (0, a.jsx)(m.Z, {})
                    }),
                e.push({
                    id: 'dcf',
                    name: 'DCF',
                    render: () => (0, a.jsx)(T.Z, {})
                }),
                e.push({
                    id: 'potions',
                    name: 'Potions',
                    render: () => (0, a.jsx)(z.Z, {})
                }),
                window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith('staging') &&
                    (e.push({
                        id: 'trials',
                        name: 'Trials',
                        render: () => (0, a.jsx)(H.Z, {})
                    }),
                    e.push({
                        id: 'payments',
                        name: 'Payments',
                        render: () => (0, a.jsx)(L.Z, {})
                    }),
                    e.push({
                        id: 'subscriptions',
                        name: 'Subscriptions',
                        render: () => (0, a.jsx)(G.Z, {})
                    }),
                    e.push({
                        id: 'billing',
                        name: 'Billing',
                        render: () => (0, a.jsx)(j.Z, {})
                    })),
                e.push({
                    id: 'gifting_intent',
                    name: 'Gifting Intent',
                    render: () => (0, a.jsx)(Z.Z, {})
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
            renderSelectedTab: r,
            selectedTabId: i
        } = (0, X.Z)(
            {
                tabs: t,
                initialSelectedTabId: null !== (e = _.Z.lastOpenTabId) && void 0 !== e ? e : void 0,
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
            properties: { panel: i }
        }),
        (0, a.jsxs)(w.Gk, {
            children: [
                (0, a.jsxs)(h.ZP, {
                    className: J.headerBar,
                    toolbar: (0, a.jsx)(h.ZP.Icon, {
                        icon: c.Dio,
                        tooltip: Y.intl.string(Y.t.cpT0Cg),
                        onClick: f.SO
                    }),
                    children: [
                        (0, a.jsx)(h.ZP.Icon, {
                            icon: c.Ymb,
                            tooltip: 'DevTools'
                        }),
                        (0, a.jsx)(h.ZP.Title, { children: 'DevTools' })
                    ]
                }),
                (0, a.jsx)(n, {}),
                r(),
                (0, a.jsx)(w.Br, { className: K.layerContainer })
            ]
        })
    );
}
function Q() {
    let e = l.useRef(null),
        t = (0, s.e7)([_.Z], () => _.Z.sidebarWidth),
        [n, r] = l.useState(null),
        o = l.useCallback((e) => (0, f.Qh)({ sidebarWidth: e }), []);
    return (l.useEffect(() => {
        null === n && null !== t && r(t);
    }, [t, n]),
    null === n)
        ? null
        : (0, a.jsxs)('div', {
              ref: e,
              className: i()(K.container),
              style: {
                  minWidth: _.h,
                  width: n
              },
              'data-app-right-panel': !0,
              children: [
                  (0, a.jsx)(q, {
                      resizableNode: e,
                      onResize: r,
                      onResizeEnd: o
                  }),
                  (0, a.jsx)('div', {
                      className: K.sidebarContent,
                      children: (0, a.jsx)($, {})
                  })
              ]
          });
}
function ee() {
    return (0, s.e7)([_.Z], () => _.Z.displayTools)
        ? (0, a.jsx)('div', {
              className: i()(K.container, K.mobileContainerExpanded),
              children: (0, a.jsx)('div', {
                  className: K.sidebarContent,
                  children: (0, a.jsx)($, {})
              })
          })
        : (0, a.jsx)('div', {
              className: K.container,
              children: (0, a.jsx)(c.P3F, {
                  onClick: f.SO,
                  children: (0, a.jsxs)(h.ZP, {
                      className: i()(J.headerBar, K.mobileHeaderCollapsed),
                      toolbar: (0, a.jsx)(p.Z, { direction: p.Z.Directions.UP }),
                      children: [
                          (0, a.jsx)(h.ZP.Icon, {
                              icon: c.Ymb,
                              tooltip: 'DevTools'
                          }),
                          (0, a.jsx)(h.ZP.Title, { children: 'DevTools' })
                      ]
                  })
              })
          });
}
function et(e) {
    let { mobile: t } = e;
    return t ? (0, a.jsx)(ee, {}) : (0, a.jsx)(Q, {});
}
