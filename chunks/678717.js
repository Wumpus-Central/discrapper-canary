n.r(t), n.d(t, { default: () => eo }), n(539854), n(388685);
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
    h = n(238246),
    p = n(788983),
    b = n(906467),
    f = n(259580),
    v = n(31336),
    j = n(19759),
    g = n(432877);
n(381996);
var _ = n(392750),
    y = n(926976),
    O = n(592197),
    C = n(806240),
    E = n(789654),
    N = n(719672),
    T = n(691867),
    S = n(916790),
    P = n(645973),
    w = n(903502),
    k = n(604776),
    I = n(912072),
    R = n(272193),
    Z = n(685560),
    L = n(735959),
    A = n(246992),
    D = n(496025),
    M = n(442954),
    z = n(633001),
    U = n(702904),
    B = n(178821),
    F = n(891401),
    G = n(958328),
    V = n(315384),
    H = n(514866),
    W = n(384207),
    X = n(264603),
    K = n(678639),
    Y = n(351930),
    J = n(771751),
    q = n(596768),
    $ = n(56706),
    Q = n(621060),
    ee = n(981631),
    et = n(388032),
    en = n(736967),
    ea = n(616257);
function er(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: r } = e,
        l = (0, d.Z)({
            minDimension: j.h,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: r,
            orientation: d.y.HORIZONTAL_LEFT
        });
    return (0, a.jsx)('div', {
        onMouseDown: l,
        className: en.resizeHandle
    });
}
function el(e) {
    var t;
    let { isPopout: n = !1 } = e,
        l = r.useMemo(() => {
            let e = [
                {
                    id: 'analytics',
                    name: 'Analytics',
                    group: Q.v0.EXPERIMENTS,
                    render: () => (0, a.jsx)(y.Z, {})
                },
                {
                    id: 'triggers',
                    name: 'Triggers',
                    group: Q.v0.EXPERIMENTS,
                    render: () => (0, a.jsx)(q.Z, {})
                },
                {
                    id: 'stores',
                    name: 'Stores',
                    group: Q.v0.EVENTS,
                    render: () => (0, a.jsx)(K.Z, {})
                },
                {
                    id: 'dispatcher',
                    name: 'Dispatcher',
                    group: Q.v0.EVENTS,
                    render: () => (0, a.jsx)(S.Z, {})
                }
            ];
            return (
                b.Z.isDeveloper &&
                    (e.push({
                        id: 'shop',
                        name: 'Shop',
                        group: Q.v0.BILLING,
                        render: () => (0, a.jsx)(W.C, {})
                    }),
                    e.push({
                        id: 'quick_actions',
                        name: 'Quick Actions',
                        group: Q.v0.NONE,
                        render: () => (0, a.jsx)(H.Z, {})
                    }),
                    e.push({
                        id: 'end_to_end_encryption',
                        name: 'E2EE',
                        group: Q.v0.DEVELOPMENT,
                        render: () => (0, a.jsx)(P.Z, {})
                    }),
                    e.push({
                        id: 'clans',
                        name: 'Clans',
                        group: Q.v0.GUILDS,
                        render: () => (0, a.jsx)(C.Z, {})
                    }),
                    e.push({
                        id: 'performance',
                        name: 'Performance',
                        group: Q.v0.DEVELOPMENT,
                        render: () => (0, a.jsx)(B.ZP, {})
                    }),
                    e.push({
                        id: 'feedback',
                        name: 'Feedback',
                        group: Q.v0.USERS,
                        render: () => (0, a.jsx)(w.Z, {})
                    }),
                    e.push({
                        id: 'overlay',
                        name: 'Overlay v3',
                        group: Q.v0.GAMES,
                        render: () => (0, a.jsx)(z.Z, {})
                    }),
                    e.push({
                        id: 'slayer_sdk',
                        name: 'Slayer SDK',
                        group: Q.v0.GAMES,
                        render: () => (0, a.jsx)(X.Z, {})
                    })),
                e.push({
                    id: 'intl',
                    name: 'Intl',
                    group: Q.v0.UI,
                    render: () => (0, a.jsx)(L.Z, {})
                }),
                e.push({
                    id: 'colors',
                    name: 'Colors',
                    group: Q.v0.UI,
                    render: () => (0, a.jsx)(E.Z, {})
                }),
                e.push({
                    id: 'design_toggles',
                    name: 'Design Toggles',
                    group: Q.v0.UI,
                    render: () => (0, a.jsx)(T.Z, {})
                }),
                e.push({
                    id: 'overlays',
                    name: 'Dev Overlays',
                    group: Q.v0.DEVELOPMENT,
                    render: () => (0, a.jsx)(I.Z, { devSettingsCategory: g.zU.OVERLAYS })
                }),
                e.push({
                    id: 'messaging',
                    name: 'Messaging',
                    group: Q.v0.USERS,
                    render: () => (0, a.jsx)(D.Z, {})
                }),
                e.push({
                    id: 'reporting',
                    name: 'Reporting',
                    group: Q.v0.EXPERIMENTS,
                    render: () => (0, a.jsx)(I.Z, { devSettingsCategory: g.zU.REPORTING })
                }),
                e.push({
                    id: 'permissions',
                    name: 'Permissions',
                    group: Q.v0.USERS,
                    render: () => (0, a.jsx)(G.Z, {})
                }),
                e.push({
                    id: 'modals',
                    name: 'Modals',
                    group: Q.v0.UI,
                    render: () => (0, a.jsx)(M.Z, {})
                }),
                e.push({
                    id: 'affinity',
                    name: 'Affinity',
                    group: Q.v0.USERS,
                    render: () => (0, a.jsx)(_.Z, {})
                }),
                b.Z.isDeveloper &&
                    e.push({
                        id: 'content_inventory',
                        name: 'Content Inventory',
                        group: Q.v0.USERS,
                        render: () => (0, a.jsx)(m.Z, {})
                    }),
                e.push({
                    id: 'dcf',
                    name: 'DCF',
                    group: Q.v0.EXPERIMENTS,
                    render: () => (0, a.jsx)(N.Z, {})
                }),
                e.push({
                    id: 'perks',
                    name: 'Perks',
                    group: Q.v0.PREMIUM,
                    render: () => (0, a.jsx)(F.Z, {})
                }),
                e.push({
                    id: 'potions',
                    name: 'Potions',
                    group: Q.v0.PREMIUM,
                    render: () => (0, a.jsx)(V.Z, {})
                }),
                window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith('staging') &&
                    (e.push({
                        id: 'trials',
                        name: 'Trials',
                        group: Q.v0.PREMIUM,
                        render: () => (0, a.jsx)(J.Z, {})
                    }),
                    e.push({
                        id: 'payments',
                        name: 'Payments',
                        group: Q.v0.BILLING,
                        render: () => (0, a.jsx)(U.Z, {})
                    }),
                    e.push({
                        id: 'subscriptions',
                        name: 'Subscriptions',
                        group: Q.v0.PREMIUM,
                        render: () => (0, a.jsx)(Y.Z, {})
                    }),
                    e.push({
                        id: 'billing',
                        name: 'Billing',
                        group: Q.v0.BILLING,
                        render: () => (0, a.jsx)(O.Z, {})
                    }),
                    e.push({
                        id: 'fractional_nitro',
                        name: 'Fractional Nitro',
                        group: Q.v0.PREMIUM,
                        render: () => (0, a.jsx)(k.Z, {})
                    })),
                e.push({
                    id: 'gifting_intent',
                    name: 'Gifting Intent',
                    group: Q.v0.PREMIUM,
                    render: () => (0, a.jsx)(R.Z, {})
                }),
                e.push({
                    id: 'voice_filters',
                    name: 'Voice Filters',
                    group: Q.v0.AUDIO_VIDEO,
                    render: () => (0, a.jsx)($.Z, {})
                }),
                e.push({
                    id: 'skill_trees',
                    name: 'Skill Trees',
                    group: Q.v0.GUILDS,
                    render: () => (0, a.jsx)(Z.Z, {})
                }),
                e
            );
        }, []),
        {
            TabBar: i,
            renderSelectedTab: o,
            selectedTabId: d
        } = (0, Q.ZP)(
            {
                tabs: l,
                initialSelectedTabId: null != (t = j.Z.lastOpenTabId) ? t : void 0,
                onChangeTab: (e) => {
                    (0, v.Qh)({ lastOpenTabId: e });
                }
            },
            [l]
        );
    return (
        (0, u.Z)({
            type: s.ImpressionTypes.PANE,
            name: s.ImpressionNames.VIEW_PANEL_DEVTOOLS,
            properties: { panel: d }
        }),
        (0, a.jsxs)(A.Gk, {
            children: [
                (0, a.jsxs)(x.ZP, {
                    className: ea.headerBar,
                    toolbar: n
                        ? null
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(x.ZP.Icon, {
                                      icon: c.rgF,
                                      tooltip: 'Pop Out',
                                      onClick: () => {
                                          (0, p.bA)(
                                              ee.KJ3.DEVTOOLS_POPOUT,
                                              () =>
                                                  (0, a.jsx)(h.Z, {
                                                      windowKey: ee.KJ3.DEVTOOLS_POPOUT,
                                                      title: 'DevTools',
                                                      withTitleBar: !0,
                                                      children: (0, a.jsx)(eo, {
                                                          mobile: !1,
                                                          isPopout: !0
                                                      })
                                                  }),
                                              {
                                                  width: 800,
                                                  height: 600
                                              }
                                          );
                                      }
                                  }),
                                  (0, a.jsx)(x.ZP.Icon, {
                                      icon: c.Dio,
                                      tooltip: et.intl.string(et.t.cpT0Cg),
                                      onClick: v.SO
                                  })
                              ]
                          }),
                    children: [
                        (0, a.jsx)(x.ZP.Icon, {
                            icon: c.Ymb,
                            tooltip: 'DevTools'
                        }),
                        (0, a.jsx)(x.ZP.Title, { children: 'DevTools' })
                    ]
                }),
                (0, a.jsx)(i, {}),
                o(),
                (0, a.jsx)(A.Br, { className: en.layerContainer })
            ]
        })
    );
}
function ei() {
    let e = r.useRef(null),
        t = (0, o.e7)([j.Z], () => j.Z.sidebarWidth),
        [n, l] = r.useState(null),
        i = r.useCallback((e) => (0, v.Qh)({ sidebarWidth: e }), []);
    return (r.useEffect(() => {
        null === n && null !== t && l(t);
    }, [t, n]),
    null === n)
        ? null
        : (0, a.jsxs)('div', {
              ref: e,
              className: en.container,
              style: {
                  minWidth: j.h,
                  width: n
              },
              'data-app-right-panel': !0,
              children: [
                  (0, a.jsx)(er, {
                      resizableNode: e,
                      onResize: l,
                      onResizeEnd: i
                  }),
                  (0, a.jsx)('div', {
                      className: en.sidebarContent,
                      children: (0, a.jsx)(el, {})
                  })
              ]
          });
}
function es() {
    return (0, o.e7)([j.Z], () => j.Z.displayTools)
        ? (0, a.jsx)('div', {
              className: i()(en.container, en.mobileContainerExpanded),
              children: (0, a.jsx)('div', {
                  className: en.sidebarContent,
                  children: (0, a.jsx)(el, {})
              })
          })
        : (0, a.jsx)('div', {
              className: en.container,
              children: (0, a.jsx)(c.P3F, {
                  onClick: v.SO,
                  children: (0, a.jsxs)(x.ZP, {
                      className: i()(ea.headerBar, en.mobileHeaderCollapsed),
                      toolbar: (0, a.jsx)(f.Z, { direction: f.Z.Directions.UP }),
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
function eo(e) {
    let { mobile: t, isPopout: n = !1 } = e;
    return t
        ? (0, a.jsx)(es, {})
        : n
          ? (0, a.jsx)('div', {
                className: en.popoutContainer,
                children: (0, a.jsx)(el, { isPopout: !0 })
            })
          : (0, a.jsx)(ei, {});
}
