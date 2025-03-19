n.r(t), n.d(t, { default: () => er }), n(653041), n(47120);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(990547),
    s = n(442837),
    c = n(481060),
    d = n(347469),
    u = n(213609),
    m = n(213713),
    h = n(665149),
    x = n(906467),
    p = n(259580),
    b = n(31336),
    f = n(19759),
    _ = n(432877);
n(381996);
var g = n(392750),
    v = n(926976),
    j = n(592197),
    y = n(806240),
    C = n(789654),
    T = n(719672),
    O = n(691867),
    S = n(916790),
    N = n(645973),
    k = n(903502),
    E = n(912072),
    w = n(272193),
    P = n(685560),
    I = n(735959),
    Z = n(246992),
    R = n(496025),
    L = n(442954),
    D = n(633001),
    A = n(702904),
    B = n(178821),
    z = n(958328),
    M = n(315384),
    G = n(514866),
    F = n(384207),
    W = n(264603),
    U = n(678639),
    H = n(351930),
    V = n(771751),
    X = n(596768),
    Y = n(56706),
    J = n(621060),
    K = n(388032),
    q = n(320316),
    $ = n(710662);
function Q(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: a } = e,
        l = (0, d.Z)({
            minDimension: f.h,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: a,
            orientation: d.y.HORIZONTAL_LEFT
        });
    return (0, r.jsx)('div', {
        onMouseDown: l,
        className: q.resizeHandle
    });
}
function ee() {
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
                    render: () => (0, r.jsx)(X.Z, {})
                },
                {
                    id: 'stores',
                    name: 'Stores',
                    render: () => (0, r.jsx)(U.Z, {})
                },
                {
                    id: 'dispatcher',
                    name: 'Dispatcher',
                    render: () => (0, r.jsx)(S.Z, {})
                }
            ];
            return (
                x.Z.isDeveloper &&
                    (e.push({
                        id: 'shop',
                        name: 'Shop',
                        render: () => (0, r.jsx)(F.C, {})
                    }),
                    e.push({
                        id: 'quick_actions',
                        name: 'Quick Actions',
                        render: () => (0, r.jsx)(G.Z, {})
                    }),
                    e.push({
                        id: 'end_to_end_encryption',
                        name: 'E2EE',
                        render: () => (0, r.jsx)(N.Z, {})
                    }),
                    e.push({
                        id: 'clans',
                        name: 'Clans',
                        render: () => (0, r.jsx)(y.Z, {})
                    }),
                    e.push({
                        id: 'performance',
                        name: 'Performance',
                        render: () => (0, r.jsx)(B.ZP, {})
                    }),
                    e.push({
                        id: 'feedback',
                        name: 'Feedback',
                        render: () => (0, r.jsx)(k.Z, {})
                    }),
                    e.push({
                        id: 'overlay',
                        name: 'Overlay v3',
                        render: () => (0, r.jsx)(D.Z, {})
                    }),
                    e.push({
                        id: 'slayer_sdk',
                        name: 'Slayer SDK',
                        render: () => (0, r.jsx)(W.Z, {})
                    })),
                e.push({
                    id: 'intl',
                    name: 'Intl',
                    render: () => (0, r.jsx)(I.Z, {})
                }),
                e.push({
                    id: 'colors',
                    name: 'Colors',
                    render: () => (0, r.jsx)(C.Z, {})
                }),
                e.push({
                    id: 'design_toggles',
                    name: 'Design Toggles',
                    render: () => (0, r.jsx)(O.Z, {})
                }),
                e.push({
                    id: 'overlays',
                    name: 'Dev Overlays',
                    render: () => (0, r.jsx)(E.Z, { devSettingsCategory: _.zU.OVERLAYS })
                }),
                e.push({
                    id: 'messaging',
                    name: 'Messaging',
                    render: () => (0, r.jsx)(R.Z, {})
                }),
                e.push({
                    id: 'reporting',
                    name: 'Reporting',
                    render: () => (0, r.jsx)(E.Z, { devSettingsCategory: _.zU.REPORTING })
                }),
                e.push({
                    id: 'permissions',
                    name: 'Permissions',
                    render: () => (0, r.jsx)(z.Z, {})
                }),
                e.push({
                    id: 'modals',
                    name: 'Modals',
                    render: () => (0, r.jsx)(L.Z, {})
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
                        render: () => (0, r.jsx)(m.Z, {})
                    }),
                e.push({
                    id: 'dcf',
                    name: 'DCF',
                    render: () => (0, r.jsx)(T.Z, {})
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
                        render: () => (0, r.jsx)(V.Z, {})
                    }),
                    e.push({
                        id: 'payments',
                        name: 'Payments',
                        render: () => (0, r.jsx)(A.Z, {})
                    }),
                    e.push({
                        id: 'subscriptions',
                        name: 'Subscriptions',
                        render: () => (0, r.jsx)(H.Z, {})
                    }),
                    e.push({
                        id: 'billing',
                        name: 'Billing',
                        render: () => (0, r.jsx)(j.Z, {})
                    })),
                e.push({
                    id: 'gifting_intent',
                    name: 'Gifting Intent',
                    render: () => (0, r.jsx)(w.Z, {})
                }),
                e.push({
                    id: 'voice_filters',
                    name: 'Voice Filters',
                    render: () => (0, r.jsx)(Y.Z, {})
                }),
                e.push({
                    id: 'skill_trees',
                    name: 'Skill Trees',
                    render: () => (0, r.jsx)(P.Z, {})
                }),
                e
            );
        }, []),
        {
            TabBar: n,
            renderSelectedTab: l,
            selectedTabId: i
        } = (0, J.Z)(
            {
                tabs: t,
                initialSelectedTabId: null !== (e = f.Z.lastOpenTabId) && void 0 !== e ? e : void 0,
                onChangeTab: (e) => {
                    (0, b.Qh)({ lastOpenTabId: e });
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
        (0, r.jsxs)(Z.Gk, {
            children: [
                (0, r.jsxs)(h.ZP, {
                    className: $.headerBar,
                    toolbar: (0, r.jsx)(h.ZP.Icon, {
                        icon: c.Dio,
                        tooltip: K.NW.string(K.t.cpT0Cg),
                        onClick: b.SO
                    }),
                    children: [
                        (0, r.jsx)(h.ZP.Icon, {
                            icon: c.Ymb,
                            tooltip: 'DevTools'
                        }),
                        (0, r.jsx)(h.ZP.Title, { children: 'DevTools' })
                    ]
                }),
                (0, r.jsx)(n, {}),
                l(),
                (0, r.jsx)(Z.Br, { className: q.layerContainer })
            ]
        })
    );
}
function et() {
    let e = a.useRef(null),
        t = (0, s.e7)([f.Z], () => f.Z.sidebarWidth),
        [n, l] = a.useState(null),
        i = a.useCallback((e) => (0, b.Qh)({ sidebarWidth: e }), []);
    return (a.useEffect(() => {
        null === n && null !== t && l(t);
    }, [t, n]),
    null === n)
        ? null
        : (0, r.jsxs)('div', {
              ref: e,
              className: q.container,
              style: {
                  minWidth: f.h,
                  width: n
              },
              'data-app-right-panel': !0,
              children: [
                  (0, r.jsx)(Q, {
                      resizableNode: e,
                      onResize: l,
                      onResizeEnd: i
                  }),
                  (0, r.jsx)('div', {
                      className: q.sidebarContent,
                      children: (0, r.jsx)(ee, {})
                  })
              ]
          });
}
function en() {
    return (0, s.e7)([f.Z], () => f.Z.displayTools)
        ? (0, r.jsx)('div', {
              className: i()(q.container, q.mobileContainerExpanded),
              children: (0, r.jsx)('div', {
                  className: q.sidebarContent,
                  children: (0, r.jsx)(ee, {})
              })
          })
        : (0, r.jsx)('div', {
              className: q.container,
              children: (0, r.jsx)(c.P3F, {
                  onClick: b.SO,
                  children: (0, r.jsxs)(h.ZP, {
                      className: i()($.headerBar, q.mobileHeaderCollapsed),
                      toolbar: (0, r.jsx)(p.Z, { direction: p.Z.Directions.UP }),
                      children: [
                          (0, r.jsx)(h.ZP.Icon, {
                              icon: c.Ymb,
                              tooltip: 'DevTools'
                          }),
                          (0, r.jsx)(h.ZP.Title, { children: 'DevTools' })
                      ]
                  })
              })
          });
}
function er(e) {
    let { mobile: t } = e;
    return t ? (0, r.jsx)(en, {}) : (0, r.jsx)(et, {});
}
