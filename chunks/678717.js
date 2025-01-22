n.r(t),
    n.d(t, {
        default: function () {
            return ee;
        }
    }),
    n(653041),
    n(47120);
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
    f = n(259580),
    p = n(31336),
    b = n(19759),
    g = n(432877);
n(381996);
var v = n(392750),
    j = n(926976),
    _ = n(592197),
    C = n(806240),
    T = n(789654),
    N = n(719672),
    S = n(691867),
    y = n(916790),
    I = n(645973),
    E = n(903502),
    Z = n(912072),
    w = n(272193),
    k = n(735959),
    O = n(246992),
    R = n(496025),
    B = n(442954),
    P = n(633001),
    L = n(702904),
    A = n(178821),
    D = n(248526),
    F = n(958328),
    M = n(315384),
    H = n(514866),
    G = n(678639),
    U = n(351930),
    z = n(771751),
    V = n(596768),
    W = n(621060),
    K = n(388032),
    Y = n(771466),
    X = n(941469);
function $(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: r } = e,
        l = (0, d.Z)({
            minDimension: b.h,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: r,
            orientation: d.y.HORIZONTAL_LEFT
        });
    return (0, a.jsx)('div', {
        onMouseDown: l,
        className: Y.resizeHandle
    });
}
function q() {
    var e;
    let t = r.useMemo(() => {
            let e = [
                {
                    id: 'analytics',
                    name: 'Analytics',
                    render: () => (0, a.jsx)(j.Z, {})
                },
                {
                    id: 'triggers',
                    name: 'Triggers',
                    render: () => (0, a.jsx)(V.Z, {})
                },
                {
                    id: 'stores',
                    name: 'Stores',
                    render: () => (0, a.jsx)(G.Z, {})
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
                        render: () => (0, a.jsx)(H.Z, {})
                    }),
                    e.push({
                        id: 'perks_demos',
                        name: 'Perks Demos',
                        render: () => (0, a.jsx)(D.Z, {})
                    })),
                x.Z.isDeveloper &&
                    (e.push({
                        id: 'end_to_end_encryption',
                        name: 'E2EE',
                        render: () => (0, a.jsx)(I.Z, {})
                    }),
                    e.push({
                        id: 'clans',
                        name: 'Clans',
                        render: () => (0, a.jsx)(C.Z, {})
                    }),
                    e.push({
                        id: 'performance',
                        name: 'Performance',
                        render: () => (0, a.jsx)(A.ZP, {})
                    }),
                    e.push({
                        id: 'feedback',
                        name: 'Feedback',
                        render: () => (0, a.jsx)(E.Z, {})
                    }),
                    e.push({
                        id: 'overlay',
                        name: 'Overlay v3',
                        render: () => (0, a.jsx)(P.Z, {})
                    })),
                e.push({
                    id: 'intl',
                    name: 'Intl',
                    render: () => (0, a.jsx)(k.Z, {})
                }),
                e.push({
                    id: 'colors',
                    name: 'Colors',
                    render: () => (0, a.jsx)(T.Z, {})
                }),
                e.push({
                    id: 'design_toggles',
                    name: 'Design Toggles',
                    render: () => (0, a.jsx)(S.Z, {})
                }),
                e.push({
                    id: 'overlays',
                    name: 'Dev Overlays',
                    render: () => (0, a.jsx)(Z.Z, { devSettingsCategory: g.zU.OVERLAYS })
                }),
                e.push({
                    id: 'messaging',
                    name: 'Messaging',
                    render: () => (0, a.jsx)(R.Z, {})
                }),
                e.push({
                    id: 'reporting',
                    name: 'Reporting',
                    render: () => (0, a.jsx)(Z.Z, { devSettingsCategory: g.zU.REPORTING })
                }),
                e.push({
                    id: 'permissions',
                    name: 'Permissions',
                    render: () => (0, a.jsx)(F.Z, {})
                }),
                e.push({
                    id: 'modals',
                    name: 'Modals',
                    render: () => (0, a.jsx)(B.Z, {})
                }),
                e.push({
                    id: 'affinity',
                    name: 'Affinity',
                    render: () => (0, a.jsx)(v.Z, {})
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
                    render: () => (0, a.jsx)(N.Z, {})
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
                        render: () => (0, a.jsx)(z.Z, {})
                    }),
                    e.push({
                        id: 'payments',
                        name: 'Payments',
                        render: () => (0, a.jsx)(L.Z, {})
                    }),
                    e.push({
                        id: 'subscriptions',
                        name: 'Subscriptions',
                        render: () => (0, a.jsx)(U.Z, {})
                    }),
                    e.push({
                        id: 'billing',
                        name: 'Billing',
                        render: () => (0, a.jsx)(_.Z, {})
                    })),
                e.push({
                    id: 'gifting_intent',
                    name: 'Gifting Intent',
                    render: () => (0, a.jsx)(w.Z, {})
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
                initialSelectedTabId: null !== (e = b.Z.lastOpenTabId) && void 0 !== e ? e : void 0,
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
        (0, a.jsxs)(O.Gk, {
            children: [
                (0, a.jsxs)(m.ZP, {
                    className: X.headerBar,
                    toolbar: (0, a.jsx)(m.ZP.Icon, {
                        icon: c.XSmallIcon,
                        tooltip: K.intl.string(K.t.cpT0Cg),
                        onClick: p.SO
                    }),
                    children: [
                        (0, a.jsx)(m.ZP.Icon, {
                            icon: c.StaffBadgeIcon,
                            tooltip: 'DevTools'
                        }),
                        (0, a.jsx)(m.ZP.Title, { children: 'DevTools' })
                    ]
                }),
                (0, a.jsx)(n, {}),
                l(),
                (0, a.jsx)(O.Br, { className: Y.layerContainer })
            ]
        })
    );
}
function J() {
    let e = r.useRef(null),
        t = (0, s.e7)([b.Z], () => b.Z.sidebarWidth),
        [n, l] = r.useState(null),
        o = r.useCallback((e) => (0, p.Qh)({ sidebarWidth: e }), []);
    return (r.useEffect(() => {
        null === n && null !== t && l(t);
    }, [t, n]),
    null === n)
        ? null
        : (0, a.jsxs)('div', {
              ref: e,
              className: i()(Y.container),
              style: {
                  minWidth: b.h,
                  width: n
              },
              'data-app-right-panel': !0,
              children: [
                  (0, a.jsx)($, {
                      resizableNode: e,
                      onResize: l,
                      onResizeEnd: o
                  }),
                  (0, a.jsx)('div', {
                      className: Y.sidebarContent,
                      children: (0, a.jsx)(q, {})
                  })
              ]
          });
}
function Q() {
    let e = (0, s.e7)([b.Z], () => b.Z.displayTools);
    return e
        ? (0, a.jsx)('div', {
              className: i()(Y.container, Y.mobileContainerExpanded),
              children: (0, a.jsx)('div', {
                  className: Y.sidebarContent,
                  children: (0, a.jsx)(q, {})
              })
          })
        : (0, a.jsx)('div', {
              className: Y.container,
              children: (0, a.jsx)(c.Clickable, {
                  onClick: p.SO,
                  children: (0, a.jsxs)(m.ZP, {
                      className: i()(X.headerBar, Y.mobileHeaderCollapsed),
                      toolbar: (0, a.jsx)(f.Z, { direction: f.Z.Directions.UP }),
                      children: [
                          (0, a.jsx)(m.ZP.Icon, {
                              icon: c.StaffBadgeIcon,
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
    return t ? (0, a.jsx)(Q, {}) : (0, a.jsx)(J, {});
}
