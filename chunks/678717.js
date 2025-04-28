n.r(t), n.d(t, { default: () => es }), n(539854), n(388685);
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
    C = n(789654),
    E = n(719672),
    N = n(691867),
    T = n(916790),
    S = n(645973),
    P = n(903502),
    w = n(604776),
    k = n(912072),
    I = n(272193),
    R = n(685560),
    Z = n(735959),
    L = n(246992),
    A = n(496025),
    D = n(442954),
    M = n(633001),
    z = n(702904),
    U = n(178821),
    B = n(891401),
    F = n(958328),
    G = n(315384),
    V = n(514866),
    H = n(384207),
    W = n(264603),
    X = n(678639),
    K = n(351930),
    Y = n(771751),
    J = n(596768),
    q = n(56706),
    $ = n(621060),
    Q = n(981631),
    ee = n(388032),
    et = n(736967),
    en = n(616257);
function ea(e) {
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
        className: et.resizeHandle
    });
}
function er(e) {
    var t;
    let { isPopout: n = !1 } = e,
        l = r.useMemo(() => {
            let e = [
                {
                    id: 'analytics',
                    name: 'Analytics',
                    group: $.v0.EXPERIMENTS,
                    render: () => (0, a.jsx)(y.Z, {})
                },
                {
                    id: 'triggers',
                    name: 'Triggers',
                    group: $.v0.EXPERIMENTS,
                    render: () => (0, a.jsx)(J.Z, {})
                },
                {
                    id: 'stores',
                    name: 'Stores',
                    group: $.v0.EVENTS,
                    render: () => (0, a.jsx)(X.Z, {})
                },
                {
                    id: 'dispatcher',
                    name: 'Dispatcher',
                    group: $.v0.EVENTS,
                    render: () => (0, a.jsx)(T.Z, {})
                }
            ];
            return (
                b.Z.isDeveloper &&
                    (e.push({
                        id: 'shop',
                        name: 'Shop',
                        group: $.v0.BILLING,
                        render: () => (0, a.jsx)(H.C, {})
                    }),
                    e.push({
                        id: 'quick_actions',
                        name: 'Quick Actions',
                        group: $.v0.NONE,
                        render: () => (0, a.jsx)(V.Z, {})
                    }),
                    e.push({
                        id: 'end_to_end_encryption',
                        name: 'E2EE',
                        group: $.v0.DEVELOPMENT,
                        render: () => (0, a.jsx)(S.Z, {})
                    }),
                    e.push({
                        id: 'performance',
                        name: 'Performance',
                        group: $.v0.DEVELOPMENT,
                        render: () => (0, a.jsx)(U.ZP, {})
                    }),
                    e.push({
                        id: 'feedback',
                        name: 'Feedback',
                        group: $.v0.USERS,
                        render: () => (0, a.jsx)(P.Z, {})
                    }),
                    e.push({
                        id: 'overlay',
                        name: 'Overlay v3',
                        group: $.v0.GAMES,
                        render: () => (0, a.jsx)(M.Z, {})
                    }),
                    e.push({
                        id: 'slayer_sdk',
                        name: 'Slayer SDK',
                        group: $.v0.GAMES,
                        render: () => (0, a.jsx)(W.Z, {})
                    })),
                e.push({
                    id: 'intl',
                    name: 'Intl',
                    group: $.v0.UI,
                    render: () => (0, a.jsx)(Z.Z, {})
                }),
                e.push({
                    id: 'colors',
                    name: 'Colors',
                    group: $.v0.UI,
                    render: () => (0, a.jsx)(C.Z, {})
                }),
                e.push({
                    id: 'design_toggles',
                    name: 'Design Toggles',
                    group: $.v0.UI,
                    render: () => (0, a.jsx)(N.Z, {})
                }),
                e.push({
                    id: 'overlays',
                    name: 'Dev Overlays',
                    group: $.v0.DEVELOPMENT,
                    render: () => (0, a.jsx)(k.Z, { devSettingsCategory: g.zU.OVERLAYS })
                }),
                e.push({
                    id: 'messaging',
                    name: 'Messaging',
                    group: $.v0.USERS,
                    render: () => (0, a.jsx)(A.Z, {})
                }),
                e.push({
                    id: 'reporting',
                    name: 'Reporting',
                    group: $.v0.EXPERIMENTS,
                    render: () => (0, a.jsx)(k.Z, { devSettingsCategory: g.zU.REPORTING })
                }),
                e.push({
                    id: 'permissions',
                    name: 'Permissions',
                    group: $.v0.USERS,
                    render: () => (0, a.jsx)(F.Z, {})
                }),
                e.push({
                    id: 'modals',
                    name: 'Modals',
                    group: $.v0.UI,
                    render: () => (0, a.jsx)(D.Z, {})
                }),
                e.push({
                    id: 'affinity',
                    name: 'Affinity',
                    group: $.v0.USERS,
                    render: () => (0, a.jsx)(_.Z, {})
                }),
                b.Z.isDeveloper &&
                    e.push({
                        id: 'content_inventory',
                        name: 'Content Inventory',
                        group: $.v0.USERS,
                        render: () => (0, a.jsx)(m.Z, {})
                    }),
                e.push({
                    id: 'dcf',
                    name: 'DCF',
                    group: $.v0.EXPERIMENTS,
                    render: () => (0, a.jsx)(E.Z, {})
                }),
                e.push({
                    id: 'perks',
                    name: 'Perks',
                    group: $.v0.PREMIUM,
                    render: () => (0, a.jsx)(B.Z, {})
                }),
                e.push({
                    id: 'potions',
                    name: 'Potions',
                    group: $.v0.PREMIUM,
                    render: () => (0, a.jsx)(G.Z, {})
                }),
                window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith('staging') &&
                    (e.push({
                        id: 'trials',
                        name: 'Trials',
                        group: $.v0.PREMIUM,
                        render: () => (0, a.jsx)(Y.Z, {})
                    }),
                    e.push({
                        id: 'payments',
                        name: 'Payments',
                        group: $.v0.BILLING,
                        render: () => (0, a.jsx)(z.Z, {})
                    }),
                    e.push({
                        id: 'subscriptions',
                        name: 'Subscriptions',
                        group: $.v0.PREMIUM,
                        render: () => (0, a.jsx)(K.Z, {})
                    }),
                    e.push({
                        id: 'billing',
                        name: 'Billing',
                        group: $.v0.BILLING,
                        render: () => (0, a.jsx)(O.Z, {})
                    }),
                    e.push({
                        id: 'fractional_nitro',
                        name: 'Fractional Nitro',
                        group: $.v0.PREMIUM,
                        render: () => (0, a.jsx)(w.Z, {})
                    })),
                e.push({
                    id: 'gifting_intent',
                    name: 'Gifting Intent',
                    group: $.v0.PREMIUM,
                    render: () => (0, a.jsx)(I.Z, {})
                }),
                e.push({
                    id: 'voice_filters',
                    name: 'Voice Filters',
                    group: $.v0.AUDIO_VIDEO,
                    render: () => (0, a.jsx)(q.Z, {})
                }),
                e.push({
                    id: 'skill_trees',
                    name: 'Skill Trees',
                    group: $.v0.GUILDS,
                    render: () => (0, a.jsx)(R.Z, {})
                }),
                e
            );
        }, []),
        {
            TabBar: i,
            renderSelectedTab: o,
            selectedTabId: d
        } = (0, $.ZP)(
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
        (0, a.jsxs)(L.Gk, {
            children: [
                (0, a.jsxs)(x.ZP, {
                    className: en.headerBar,
                    toolbar: n
                        ? null
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(x.ZP.Icon, {
                                      icon: c.rgF,
                                      tooltip: 'Pop Out',
                                      onClick: () => {
                                          (0, p.bA)(
                                              Q.KJ3.DEVTOOLS_POPOUT,
                                              () =>
                                                  (0, a.jsx)(h.Z, {
                                                      windowKey: Q.KJ3.DEVTOOLS_POPOUT,
                                                      title: 'DevTools',
                                                      withTitleBar: !0,
                                                      children: (0, a.jsx)(es, {
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
                                      tooltip: ee.intl.string(ee.t.cpT0Cg),
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
                (0, a.jsx)(L.Br, { className: et.layerContainer })
            ]
        })
    );
}
function el() {
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
              className: et.container,
              style: {
                  minWidth: j.h,
                  width: n
              },
              'data-app-right-panel': !0,
              children: [
                  (0, a.jsx)(ea, {
                      resizableNode: e,
                      onResize: l,
                      onResizeEnd: i
                  }),
                  (0, a.jsx)('div', {
                      className: et.sidebarContent,
                      children: (0, a.jsx)(er, {})
                  })
              ]
          });
}
function ei() {
    return (0, o.e7)([j.Z], () => j.Z.displayTools)
        ? (0, a.jsx)('div', {
              className: i()(et.container, et.mobileContainerExpanded),
              children: (0, a.jsx)('div', {
                  className: et.sidebarContent,
                  children: (0, a.jsx)(er, {})
              })
          })
        : (0, a.jsx)('div', {
              className: et.container,
              children: (0, a.jsx)(c.P3F, {
                  onClick: v.SO,
                  children: (0, a.jsxs)(x.ZP, {
                      className: i()(en.headerBar, et.mobileHeaderCollapsed),
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
function es(e) {
    let { mobile: t, isPopout: n = !1 } = e;
    return t
        ? (0, a.jsx)(ei, {})
        : n
          ? (0, a.jsx)('div', {
                className: et.popoutContainer,
                children: (0, a.jsx)(er, { isPopout: !0 })
            })
          : (0, a.jsx)(el, {});
}
