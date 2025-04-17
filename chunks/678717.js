n.r(t), n.d(t, { default: () => el }), n(539854), n(388685);
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    s = n(990547),
    o = n(442837),
    c = n(481060),
    d = n(347469),
    u = n(213609),
    m = n(213713),
    x = n(665149),
    h = n(906467),
    p = n(259580),
    b = n(31336),
    f = n(19759),
    v = n(432877);
n(381996);
var j = n(392750),
    g = n(926976),
    _ = n(592197),
    y = n(806240),
    C = n(789654),
    O = n(719672),
    N = n(691867),
    E = n(916790),
    T = n(645973),
    S = n(903502),
    P = n(604776),
    w = n(912072),
    k = n(272193),
    I = n(685560),
    R = n(735959),
    Z = n(246992),
    L = n(496025),
    A = n(442954),
    D = n(633001),
    z = n(702904),
    M = n(178821),
    U = n(891401),
    B = n(958328),
    F = n(315384),
    G = n(514866),
    V = n(384207),
    H = n(264603),
    W = n(678639),
    X = n(351930),
    K = n(771751),
    Y = n(596768),
    q = n(56706),
    J = n(621060),
    $ = n(388032),
    Q = n(736967),
    ee = n(616257);
function et(e) {
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
        className: Q.resizeHandle
    });
}
function en() {
    var e;
    let t = r.useMemo(() => {
            let e = [
                {
                    id: 'analytics',
                    name: 'Analytics',
                    group: J.v0.EXPERIMENTS,
                    render: () => (0, a.jsx)(g.Z, {})
                },
                {
                    id: 'triggers',
                    name: 'Triggers',
                    group: J.v0.EXPERIMENTS,
                    render: () => (0, a.jsx)(Y.Z, {})
                },
                {
                    id: 'stores',
                    name: 'Stores',
                    group: J.v0.EVENTS,
                    render: () => (0, a.jsx)(W.Z, {})
                },
                {
                    id: 'dispatcher',
                    name: 'Dispatcher',
                    group: J.v0.EVENTS,
                    render: () => (0, a.jsx)(E.Z, {})
                }
            ];
            return (
                h.Z.isDeveloper &&
                    (e.push({
                        id: 'shop',
                        name: 'Shop',
                        group: J.v0.BILLING,
                        render: () => (0, a.jsx)(V.C, {})
                    }),
                    e.push({
                        id: 'quick_actions',
                        name: 'Quick Actions',
                        group: J.v0.NONE,
                        render: () => (0, a.jsx)(G.Z, {})
                    }),
                    e.push({
                        id: 'end_to_end_encryption',
                        name: 'E2EE',
                        group: J.v0.DEVELOPMENT,
                        render: () => (0, a.jsx)(T.Z, {})
                    }),
                    e.push({
                        id: 'clans',
                        name: 'Clans',
                        group: J.v0.GUILDS,
                        render: () => (0, a.jsx)(y.Z, {})
                    }),
                    e.push({
                        id: 'performance',
                        name: 'Performance',
                        group: J.v0.DEVELOPMENT,
                        render: () => (0, a.jsx)(M.ZP, {})
                    }),
                    e.push({
                        id: 'feedback',
                        name: 'Feedback',
                        group: J.v0.USERS,
                        render: () => (0, a.jsx)(S.Z, {})
                    }),
                    e.push({
                        id: 'overlay',
                        name: 'Overlay v3',
                        group: J.v0.GAMES,
                        render: () => (0, a.jsx)(D.Z, {})
                    }),
                    e.push({
                        id: 'slayer_sdk',
                        name: 'Slayer SDK',
                        group: J.v0.GAMES,
                        render: () => (0, a.jsx)(H.Z, {})
                    })),
                e.push({
                    id: 'intl',
                    name: 'Intl',
                    group: J.v0.UI,
                    render: () => (0, a.jsx)(R.Z, {})
                }),
                e.push({
                    id: 'colors',
                    name: 'Colors',
                    group: J.v0.UI,
                    render: () => (0, a.jsx)(C.Z, {})
                }),
                e.push({
                    id: 'design_toggles',
                    name: 'Design Toggles',
                    group: J.v0.UI,
                    render: () => (0, a.jsx)(N.Z, {})
                }),
                e.push({
                    id: 'overlays',
                    name: 'Dev Overlays',
                    group: J.v0.DEVELOPMENT,
                    render: () => (0, a.jsx)(w.Z, { devSettingsCategory: v.zU.OVERLAYS })
                }),
                e.push({
                    id: 'messaging',
                    name: 'Messaging',
                    group: J.v0.USERS,
                    render: () => (0, a.jsx)(L.Z, {})
                }),
                e.push({
                    id: 'reporting',
                    name: 'Reporting',
                    group: J.v0.EXPERIMENTS,
                    render: () => (0, a.jsx)(w.Z, { devSettingsCategory: v.zU.REPORTING })
                }),
                e.push({
                    id: 'permissions',
                    name: 'Permissions',
                    group: J.v0.USERS,
                    render: () => (0, a.jsx)(B.Z, {})
                }),
                e.push({
                    id: 'modals',
                    name: 'Modals',
                    group: J.v0.UI,
                    render: () => (0, a.jsx)(A.Z, {})
                }),
                e.push({
                    id: 'affinity',
                    name: 'Affinity',
                    group: J.v0.USERS,
                    render: () => (0, a.jsx)(j.Z, {})
                }),
                h.Z.isDeveloper &&
                    e.push({
                        id: 'content_inventory',
                        name: 'Content Inventory',
                        group: J.v0.USERS,
                        render: () => (0, a.jsx)(m.Z, {})
                    }),
                e.push({
                    id: 'dcf',
                    name: 'DCF',
                    group: J.v0.EXPERIMENTS,
                    render: () => (0, a.jsx)(O.Z, {})
                }),
                e.push({
                    id: 'perks',
                    name: 'Perks',
                    group: J.v0.PREMIUM,
                    render: () => (0, a.jsx)(U.Z, {})
                }),
                e.push({
                    id: 'potions',
                    name: 'Potions',
                    group: J.v0.PREMIUM,
                    render: () => (0, a.jsx)(F.Z, {})
                }),
                window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith('staging') &&
                    (e.push({
                        id: 'trials',
                        name: 'Trials',
                        group: J.v0.PREMIUM,
                        render: () => (0, a.jsx)(K.Z, {})
                    }),
                    e.push({
                        id: 'payments',
                        name: 'Payments',
                        group: J.v0.BILLING,
                        render: () => (0, a.jsx)(z.Z, {})
                    }),
                    e.push({
                        id: 'subscriptions',
                        name: 'Subscriptions',
                        group: J.v0.PREMIUM,
                        render: () => (0, a.jsx)(X.Z, {})
                    }),
                    e.push({
                        id: 'billing',
                        name: 'Billing',
                        group: J.v0.BILLING,
                        render: () => (0, a.jsx)(_.Z, {})
                    }),
                    e.push({
                        id: 'fractional_nitro',
                        name: 'Fractional Nitro',
                        group: J.v0.PREMIUM,
                        render: () => (0, a.jsx)(P.Z, {})
                    })),
                e.push({
                    id: 'gifting_intent',
                    name: 'Gifting Intent',
                    group: J.v0.PREMIUM,
                    render: () => (0, a.jsx)(k.Z, {})
                }),
                e.push({
                    id: 'voice_filters',
                    name: 'Voice Filters',
                    group: J.v0.AUDIO_VIDEO,
                    render: () => (0, a.jsx)(q.Z, {})
                }),
                e.push({
                    id: 'skill_trees',
                    name: 'Skill Trees',
                    group: J.v0.GUILDS,
                    render: () => (0, a.jsx)(I.Z, {})
                }),
                e
            );
        }, []),
        {
            TabBar: n,
            renderSelectedTab: l,
            selectedTabId: i
        } = (0, J.ZP)(
            {
                tabs: t,
                initialSelectedTabId: null != (e = f.Z.lastOpenTabId) ? e : void 0,
                onChangeTab: (e) => {
                    (0, b.Qh)({ lastOpenTabId: e });
                }
            },
            [t]
        );
    return (
        (0, u.Z)({
            type: s.ImpressionTypes.PANE,
            name: s.ImpressionNames.VIEW_PANEL_DEVTOOLS,
            properties: { panel: i }
        }),
        (0, a.jsxs)(Z.Gk, {
            children: [
                (0, a.jsxs)(x.ZP, {
                    className: ee.headerBar,
                    toolbar: (0, a.jsx)(x.ZP.Icon, {
                        icon: c.Dio,
                        tooltip: $.NW.string($.t.cpT0Cg),
                        onClick: b.SO
                    }),
                    children: [
                        (0, a.jsx)(x.ZP.Icon, {
                            icon: c.Ymb,
                            tooltip: 'DevTools'
                        }),
                        (0, a.jsx)(x.ZP.Title, { children: 'DevTools' })
                    ]
                }),
                (0, a.jsx)(n, {}),
                l(),
                (0, a.jsx)(Z.Br, { className: Q.layerContainer })
            ]
        })
    );
}
function ea() {
    let e = r.useRef(null),
        t = (0, o.e7)([f.Z], () => f.Z.sidebarWidth),
        [n, l] = r.useState(null),
        i = r.useCallback((e) => (0, b.Qh)({ sidebarWidth: e }), []);
    return (r.useEffect(() => {
        null === n && null !== t && l(t);
    }, [t, n]),
    null === n)
        ? null
        : (0, a.jsxs)('div', {
              ref: e,
              className: Q.container,
              style: {
                  minWidth: f.h,
                  width: n
              },
              'data-app-right-panel': !0,
              children: [
                  (0, a.jsx)(et, {
                      resizableNode: e,
                      onResize: l,
                      onResizeEnd: i
                  }),
                  (0, a.jsx)('div', {
                      className: Q.sidebarContent,
                      children: (0, a.jsx)(en, {})
                  })
              ]
          });
}
function er() {
    return (0, o.e7)([f.Z], () => f.Z.displayTools)
        ? (0, a.jsx)('div', {
              className: i()(Q.container, Q.mobileContainerExpanded),
              children: (0, a.jsx)('div', {
                  className: Q.sidebarContent,
                  children: (0, a.jsx)(en, {})
              })
          })
        : (0, a.jsx)('div', {
              className: Q.container,
              children: (0, a.jsx)(c.P3F, {
                  onClick: b.SO,
                  children: (0, a.jsxs)(x.ZP, {
                      className: i()(ee.headerBar, Q.mobileHeaderCollapsed),
                      toolbar: (0, a.jsx)(p.Z, { direction: p.Z.Directions.UP }),
                      children: [
                          (0, a.jsx)(x.ZP.Icon, {
                              icon: c.Ymb,
                              tooltip: 'DevTools'
                          }),
                          (0, a.jsx)(x.ZP.Title, { children: 'DevTools' })
                      ]
                  })
              })
          });
}
function el(e) {
    let { mobile: t } = e;
    return t ? (0, a.jsx)(er, {}) : (0, a.jsx)(ea, {});
}
