n.r(t), n.d(t, { default: () => ea }), n(539854), n(388685);
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
    x = n(665149),
    h = n(906467),
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
    N = n(691867),
    S = n(916790),
    O = n(645973),
    E = n(903502),
    k = n(604776),
    w = n(912072),
    P = n(272193),
    I = n(685560),
    Z = n(735959),
    R = n(246992),
    L = n(496025),
    D = n(442954),
    A = n(633001),
    B = n(702904),
    z = n(178821),
    M = n(958328),
    F = n(315384),
    G = n(514866),
    U = n(384207),
    W = n(264603),
    H = n(678639),
    V = n(351930),
    X = n(771751),
    Y = n(596768),
    K = n(56706),
    J = n(621060),
    q = n(388032),
    $ = n(736967),
    Q = n(616257);
function ee(e) {
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
        className: $.resizeHandle
    });
}
function et() {
    var e;
    let t = a.useMemo(() => {
            let e = [
                {
                    id: 'analytics',
                    name: 'Analytics',
                    group: J.v0.EXPERIMENTS,
                    render: () => (0, r.jsx)(v.Z, {})
                },
                {
                    id: 'triggers',
                    name: 'Triggers',
                    group: J.v0.EXPERIMENTS,
                    render: () => (0, r.jsx)(Y.Z, {})
                },
                {
                    id: 'stores',
                    name: 'Stores',
                    group: J.v0.EVENTS,
                    render: () => (0, r.jsx)(H.Z, {})
                },
                {
                    id: 'dispatcher',
                    name: 'Dispatcher',
                    group: J.v0.EVENTS,
                    render: () => (0, r.jsx)(S.Z, {})
                }
            ];
            return (
                h.Z.isDeveloper &&
                    (e.push({
                        id: 'shop',
                        name: 'Shop',
                        group: J.v0.BILLING,
                        render: () => (0, r.jsx)(U.C, {})
                    }),
                    e.push({
                        id: 'quick_actions',
                        name: 'Quick Actions',
                        group: J.v0.NONE,
                        render: () => (0, r.jsx)(G.Z, {})
                    }),
                    e.push({
                        id: 'end_to_end_encryption',
                        name: 'E2EE',
                        group: J.v0.DEVELOPMENT,
                        render: () => (0, r.jsx)(O.Z, {})
                    }),
                    e.push({
                        id: 'clans',
                        name: 'Clans',
                        group: J.v0.GUILDS,
                        render: () => (0, r.jsx)(y.Z, {})
                    }),
                    e.push({
                        id: 'performance',
                        name: 'Performance',
                        group: J.v0.DEVELOPMENT,
                        render: () => (0, r.jsx)(z.ZP, {})
                    }),
                    e.push({
                        id: 'feedback',
                        name: 'Feedback',
                        group: J.v0.USERS,
                        render: () => (0, r.jsx)(E.Z, {})
                    }),
                    e.push({
                        id: 'overlay',
                        name: 'Overlay v3',
                        group: J.v0.GAMES,
                        render: () => (0, r.jsx)(A.Z, {})
                    }),
                    e.push({
                        id: 'slayer_sdk',
                        name: 'Slayer SDK',
                        group: J.v0.GAMES,
                        render: () => (0, r.jsx)(W.Z, {})
                    })),
                e.push({
                    id: 'intl',
                    name: 'Intl',
                    group: J.v0.UI,
                    render: () => (0, r.jsx)(Z.Z, {})
                }),
                e.push({
                    id: 'colors',
                    name: 'Colors',
                    group: J.v0.UI,
                    render: () => (0, r.jsx)(C.Z, {})
                }),
                e.push({
                    id: 'design_toggles',
                    name: 'Design Toggles',
                    group: J.v0.UI,
                    render: () => (0, r.jsx)(N.Z, {})
                }),
                e.push({
                    id: 'overlays',
                    name: 'Dev Overlays',
                    group: J.v0.DEVELOPMENT,
                    render: () => (0, r.jsx)(w.Z, { devSettingsCategory: _.zU.OVERLAYS })
                }),
                e.push({
                    id: 'messaging',
                    name: 'Messaging',
                    group: J.v0.USERS,
                    render: () => (0, r.jsx)(L.Z, {})
                }),
                e.push({
                    id: 'reporting',
                    name: 'Reporting',
                    group: J.v0.EXPERIMENTS,
                    render: () => (0, r.jsx)(w.Z, { devSettingsCategory: _.zU.REPORTING })
                }),
                e.push({
                    id: 'permissions',
                    name: 'Permissions',
                    group: J.v0.USERS,
                    render: () => (0, r.jsx)(M.Z, {})
                }),
                e.push({
                    id: 'modals',
                    name: 'Modals',
                    group: J.v0.UI,
                    render: () => (0, r.jsx)(D.Z, {})
                }),
                e.push({
                    id: 'affinity',
                    name: 'Affinity',
                    group: J.v0.USERS,
                    render: () => (0, r.jsx)(g.Z, {})
                }),
                h.Z.isDeveloper &&
                    e.push({
                        id: 'content_inventory',
                        name: 'Content Inventory',
                        group: J.v0.USERS,
                        render: () => (0, r.jsx)(m.Z, {})
                    }),
                e.push({
                    id: 'dcf',
                    name: 'DCF',
                    group: J.v0.EXPERIMENTS,
                    render: () => (0, r.jsx)(T.Z, {})
                }),
                e.push({
                    id: 'potions',
                    name: 'Potions',
                    group: J.v0.PREMIUM,
                    render: () => (0, r.jsx)(F.Z, {})
                }),
                window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith('staging') &&
                    (e.push({
                        id: 'trials',
                        name: 'Trials',
                        group: J.v0.PREMIUM,
                        render: () => (0, r.jsx)(X.Z, {})
                    }),
                    e.push({
                        id: 'payments',
                        name: 'Payments',
                        group: J.v0.BILLING,
                        render: () => (0, r.jsx)(B.Z, {})
                    }),
                    e.push({
                        id: 'subscriptions',
                        name: 'Subscriptions',
                        group: J.v0.PREMIUM,
                        render: () => (0, r.jsx)(V.Z, {})
                    }),
                    e.push({
                        id: 'billing',
                        name: 'Billing',
                        group: J.v0.BILLING,
                        render: () => (0, r.jsx)(j.Z, {})
                    }),
                    e.push({
                        id: 'fractional_nitro',
                        name: 'Fractional Nitro',
                        group: J.v0.PREMIUM,
                        render: () => (0, r.jsx)(k.Z, {})
                    })),
                e.push({
                    id: 'gifting_intent',
                    name: 'Gifting Intent',
                    group: J.v0.PREMIUM,
                    render: () => (0, r.jsx)(P.Z, {})
                }),
                e.push({
                    id: 'voice_filters',
                    name: 'Voice Filters',
                    group: J.v0.AUDIO_VIDEO,
                    render: () => (0, r.jsx)(K.Z, {})
                }),
                e.push({
                    id: 'skill_trees',
                    name: 'Skill Trees',
                    group: J.v0.GUILDS,
                    render: () => (0, r.jsx)(I.Z, {})
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
            type: o.ImpressionTypes.PANE,
            name: o.ImpressionNames.VIEW_PANEL_DEVTOOLS,
            properties: { panel: i }
        }),
        (0, r.jsxs)(R.Gk, {
            children: [
                (0, r.jsxs)(x.ZP, {
                    className: Q.headerBar,
                    toolbar: (0, r.jsx)(x.ZP.Icon, {
                        icon: c.Dio,
                        tooltip: q.NW.string(q.t.cpT0Cg),
                        onClick: b.SO
                    }),
                    children: [
                        (0, r.jsx)(x.ZP.Icon, {
                            icon: c.Ymb,
                            tooltip: 'DevTools'
                        }),
                        (0, r.jsx)(x.ZP.Title, { children: 'DevTools' })
                    ]
                }),
                (0, r.jsx)(n, {}),
                l(),
                (0, r.jsx)(R.Br, { className: $.layerContainer })
            ]
        })
    );
}
function en() {
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
              className: $.container,
              style: {
                  minWidth: f.h,
                  width: n
              },
              'data-app-right-panel': !0,
              children: [
                  (0, r.jsx)(ee, {
                      resizableNode: e,
                      onResize: l,
                      onResizeEnd: i
                  }),
                  (0, r.jsx)('div', {
                      className: $.sidebarContent,
                      children: (0, r.jsx)(et, {})
                  })
              ]
          });
}
function er() {
    return (0, s.e7)([f.Z], () => f.Z.displayTools)
        ? (0, r.jsx)('div', {
              className: i()($.container, $.mobileContainerExpanded),
              children: (0, r.jsx)('div', {
                  className: $.sidebarContent,
                  children: (0, r.jsx)(et, {})
              })
          })
        : (0, r.jsx)('div', {
              className: $.container,
              children: (0, r.jsx)(c.P3F, {
                  onClick: b.SO,
                  children: (0, r.jsxs)(x.ZP, {
                      className: i()(Q.headerBar, $.mobileHeaderCollapsed),
                      toolbar: (0, r.jsx)(p.Z, { direction: p.Z.Directions.UP }),
                      children: [
                          (0, r.jsx)(x.ZP.Icon, {
                              icon: c.Ymb,
                              tooltip: 'DevTools'
                          }),
                          (0, r.jsx)(x.ZP.Title, { children: 'DevTools' })
                      ]
                  })
              })
          });
}
function ea(e) {
    let { mobile: t } = e;
    return t ? (0, r.jsx)(er, {}) : (0, r.jsx)(en, {});
}
