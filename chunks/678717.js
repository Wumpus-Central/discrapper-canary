(a.r(t), a.d(t, { default: () => eu }), a(539854), a(388685));
var n = a(255367),
    r = a(73800),
    l = a(120356),
    i = a.n(l),
    s = a(990547),
    o = a(442837),
    c = a(481060),
    d = a(347469),
    u = a(213609),
    m = a(213713),
    x = a(665149),
    p = a(238246),
    h = a(788983),
    b = a(906467),
    f = a(259580),
    v = a(31336),
    g = a(19759),
    j = a(432877);
a(381996);
var _ = a(392750),
    y = a(926976),
    C = a(789654),
    O = a(719672),
    T = a(691867),
    N = a(916790),
    E = a(645973),
    S = a(903502),
    P = a(604776),
    w = a(912072),
    I = a(272193),
    R = a(685560),
    k = a(735959),
    A = a(572444),
    Z = a(636500),
    D = a(246992),
    L = a(484662),
    M = a(496025),
    U = a(442954),
    F = a(925124),
    B = a(633001),
    z = a(702904),
    G = a(178821),
    V = a(891401),
    H = a(958328),
    W = a(315384),
    K = a(514866),
    X = a(763577),
    Y = a(384207),
    J = a(264603),
    q = a(678639),
    $ = a(596768),
    Q = a(56706),
    ee = a(820400),
    et = a(260950),
    ea = a(621060),
    en = a(981631),
    er = a(388032),
    el = a(736967),
    ei = a(616257);
function es(e) {
    let { resizableNode: t, onResize: a, onResizeEnd: r } = e,
        l = (0, d.Z)({
            minDimension: g.h,
            resizableDomNodeRef: t,
            onElementResize: a,
            onElementResizeEnd: r,
            orientation: d.y.HORIZONTAL_LEFT
        });
    return (0, n.jsx)('div', {
        onMouseDown: l,
        className: el.resizeHandle
    });
}
function eo(e) {
    var t;
    let { isPopout: a = !1 } = e,
        l = r.useMemo(() => {
            let e = [
                {
                    id: 'analytics',
                    name: 'Analytics',
                    group: ea.v0.EXPERIMENTS,
                    render: () => (0, n.jsx)(y.Z, {})
                },
                {
                    id: 'triggers',
                    name: 'Triggers',
                    group: ea.v0.EXPERIMENTS,
                    render: () => (0, n.jsx)($.Z, {})
                },
                {
                    id: 'stores',
                    name: 'Stores',
                    group: ea.v0.EVENTS,
                    render: () => (0, n.jsx)(q.Z, {})
                },
                {
                    id: 'dispatcher',
                    name: 'Dispatcher',
                    group: ea.v0.EVENTS,
                    render: () => (0, n.jsx)(N.Z, {})
                }
            ];
            return (
                b.Z.isDeveloper &&
                    (e.push({
                        id: 'shop',
                        name: 'Shop',
                        group: ea.v0.BILLING,
                        render: () => (0, n.jsx)(Y.C, {})
                    }),
                    e.push({
                        id: 'quick_actions',
                        name: 'Quick Actions',
                        group: ea.v0.NONE,
                        render: () => (0, n.jsx)(K.Z, {})
                    }),
                    e.push({
                        id: 'end_to_end_encryption',
                        name: 'E2EE',
                        group: ea.v0.DEVELOPMENT,
                        render: () => (0, n.jsx)(E.Z, {})
                    }),
                    e.push({
                        id: 'performance',
                        name: 'Performance',
                        group: ea.v0.DEVELOPMENT,
                        render: () => (0, n.jsx)(G.ZP, {})
                    }),
                    e.push({
                        id: 'feedback',
                        name: 'Feedback',
                        group: ea.v0.USERS,
                        render: () => (0, n.jsx)(S.Z, {})
                    }),
                    e.push({
                        id: 'overlay',
                        name: 'Overlay v3',
                        group: ea.v0.GAMES,
                        render: () => (0, n.jsx)(B.Z, {})
                    }),
                    e.push({
                        id: 'slayer_sdk',
                        name: 'Slayer SDK',
                        group: ea.v0.GAMES,
                        render: () => (0, n.jsx)(J.Z, {})
                    })),
                e.push({
                    id: 'rive',
                    name: 'Rive',
                    group: ea.v0.UI,
                    render: () => (0, n.jsx)(X.Z, {})
                }),
                e.push({
                    id: 'intl',
                    name: 'Intl',
                    group: ea.v0.UI,
                    render: () => (0, n.jsx)(k.Z, {})
                }),
                e.push({
                    id: 'colors',
                    name: 'Colors',
                    group: ea.v0.UI,
                    render: () => (0, n.jsx)(C.Z, {})
                }),
                e.push({
                    id: 'design_toggles',
                    name: 'Design Toggles',
                    group: ea.v0.UI,
                    render: () => (0, n.jsx)(T.Z, {})
                }),
                e.push({
                    id: 'overlays',
                    name: 'Dev Overlays',
                    group: ea.v0.DEVELOPMENT,
                    render: () => (0, n.jsx)(w.Z, { devSettingsCategory: j.zU.OVERLAYS })
                }),
                e.push({
                    id: 'messaging',
                    name: 'Messaging',
                    group: ea.v0.USERS,
                    render: () => (0, n.jsx)(M.Z, {})
                }),
                e.push({
                    id: 'reporting',
                    name: 'Reporting',
                    group: ea.v0.EXPERIMENTS,
                    render: () => (0, n.jsx)(w.Z, { devSettingsCategory: j.zU.REPORTING })
                }),
                e.push({
                    id: 'permissions',
                    name: 'Permissions',
                    group: ea.v0.USERS,
                    render: () => (0, n.jsx)(H.Z, {})
                }),
                e.push({
                    id: 'modals',
                    name: 'Modals',
                    group: ea.v0.UI,
                    render: () => (0, n.jsx)(U.Z, {})
                }),
                e.push({
                    id: 'layers',
                    name: 'Layers',
                    group: ea.v0.UI,
                    render: () => (0, n.jsx)(L.Z, {})
                }),
                e.push({
                    id: 'affinity',
                    name: 'Affinity',
                    group: ea.v0.USERS,
                    render: () => (0, n.jsx)(_.Z, {})
                }),
                e.push({
                    id: 'widgets',
                    name: 'Widgets',
                    group: ea.v0.USERS,
                    render: () => (0, n.jsx)(ee.Z, {})
                }),
                b.Z.isDeveloper &&
                    e.push({
                        id: 'content_inventory',
                        name: 'Content Inventory',
                        group: ea.v0.USERS,
                        render: () => (0, n.jsx)(m.Z, {})
                    }),
                e.push({
                    id: 'dcf',
                    name: 'DCF',
                    group: ea.v0.EXPERIMENTS,
                    render: () => (0, n.jsx)(O.Z, {})
                }),
                e.push({
                    id: 'perks',
                    name: 'Perks',
                    group: ea.v0.PREMIUM,
                    render: () => (0, n.jsx)(V.Z, {})
                }),
                e.push({
                    id: 'potions',
                    name: 'Potions',
                    group: ea.v0.PREMIUM,
                    render: () => (0, n.jsx)(W.Z, {})
                }),
                window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith('staging') &&
                    (e.push({
                        id: 'offers',
                        name: 'Offers',
                        group: ea.v0.PREMIUM,
                        render: () => (0, n.jsx)(F.Z, {})
                    }),
                    e.push({
                        id: 'payments',
                        name: 'Payments',
                        group: ea.v0.BILLING,
                        render: () => (0, n.jsx)(z.Z, {})
                    }),
                    e.push({
                        id: 'subscriptions',
                        name: 'Subscriptions',
                        group: ea.v0.PREMIUM,
                        render: () => (0, n.jsx)(et.Z, {})
                    }),
                    e.push({
                        id: 'fractional_nitro',
                        name: 'Fractional Nitro',
                        group: ea.v0.PREMIUM,
                        render: () => (0, n.jsx)(P.Z, {})
                    })),
                e.push({
                    id: 'gifting_intent',
                    name: 'Gifting Intent',
                    group: ea.v0.PREMIUM,
                    render: () => (0, n.jsx)(I.Z, {})
                }),
                e.push({
                    id: 'voice_filters',
                    name: 'Voice Filters',
                    group: ea.v0.AUDIO_VIDEO,
                    render: () => (0, n.jsx)(Q.Z, {})
                }),
                e.push({
                    id: 'krisp_tester',
                    name: 'Krisp Tester',
                    group: ea.v0.AUDIO_VIDEO,
                    render: () => (0, n.jsx)(A.Z, {})
                }),
                e.push({
                    id: 'skill_trees',
                    name: 'Skill Trees',
                    group: ea.v0.GUILDS,
                    render: () => (0, n.jsx)(R.Z, {})
                }),
                e.push({
                    id: 'language',
                    name: 'Language',
                    group: ea.v0.UI,
                    render: () => (0, n.jsx)(Z.Z, {})
                }),
                e
            );
        }, []),
        {
            TabBar: i,
            renderSelectedTab: o,
            selectedTabId: d
        } = (0, ea.ZP)(
            {
                tabs: l,
                initialSelectedTabId: null != (t = g.Z.lastOpenTabId) ? t : void 0,
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
        (0, n.jsxs)(D.Gk, {
            children: [
                (0, n.jsxs)(x.ZP, {
                    className: ei.headerBar,
                    toolbar: a
                        ? null
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(x.ZP.Icon, {
                                      icon: c.rgF,
                                      tooltip: 'Pop Out',
                                      onClick: () => {
                                          (0, h.bA)(
                                              en.KJ3.DEVTOOLS_POPOUT,
                                              () =>
                                                  (0, n.jsx)(p.Z, {
                                                      windowKey: en.KJ3.DEVTOOLS_POPOUT,
                                                      title: 'DevTools',
                                                      withTitleBar: !0,
                                                      children: (0, n.jsx)(eu, {
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
                                  (0, n.jsx)(x.ZP.Icon, {
                                      icon: c.Dio,
                                      tooltip: er.intl.string(er.t.cpT0Cg),
                                      onClick: v.SO
                                  })
                              ]
                          }),
                    children: [
                        (0, n.jsx)(x.ZP.Icon, {
                            icon: c.Ymb,
                            tooltip: 'DevTools'
                        }),
                        (0, n.jsx)(x.ZP.Title, { children: 'DevTools' })
                    ]
                }),
                (0, n.jsx)(i, {}),
                o(),
                (0, n.jsx)(D.Br, { className: el.layerContainer })
            ]
        })
    );
}
function ec() {
    let e = r.useRef(null),
        t = (0, o.e7)([g.Z], () => g.Z.sidebarWidth),
        [a, l] = r.useState(null),
        i = r.useCallback((e) => (0, v.Qh)({ sidebarWidth: e }), []);
    return (r.useEffect(() => {
        null === a && null !== t && l(t);
    }, [t, a]),
    null === a)
        ? null
        : (0, n.jsxs)('div', {
              ref: e,
              className: el.container,
              style: {
                  minWidth: g.h,
                  width: a
              },
              'data-app-right-panel': !0,
              children: [
                  (0, n.jsx)(es, {
                      resizableNode: e,
                      onResize: l,
                      onResizeEnd: i
                  }),
                  (0, n.jsx)('div', {
                      className: el.sidebarContent,
                      children: (0, n.jsx)(eo, {})
                  })
              ]
          });
}
function ed() {
    return (0, o.e7)([g.Z], () => g.Z.displayTools)
        ? (0, n.jsx)('div', {
              className: i()(el.container, el.mobileContainerExpanded),
              children: (0, n.jsx)('div', {
                  className: el.sidebarContent,
                  children: (0, n.jsx)(eo, {})
              })
          })
        : (0, n.jsx)('div', {
              className: el.container,
              children: (0, n.jsx)(c.P3F, {
                  onClick: v.SO,
                  children: (0, n.jsxs)(x.ZP, {
                      className: i()(ei.headerBar, el.mobileHeaderCollapsed),
                      toolbar: (0, n.jsx)(f.Z, { direction: f.Z.Directions.UP }),
                      children: [
                          (0, n.jsx)(x.ZP.Icon, {
                              icon: c.Ymb,
                              tooltip: 'DevTools'
                          }),
                          (0, n.jsx)(x.ZP.Title, { children: 'DevTools' })
                      ]
                  })
              })
          });
}
function eu(e) {
    let { mobile: t, isPopout: a = !1 } = e;
    return t
        ? (0, n.jsx)(ed, {})
        : a
          ? (0, n.jsx)('div', {
                className: el.popoutContainer,
                children: (0, n.jsx)(eo, { isPopout: !0 })
            })
          : (0, n.jsx)(ec, {});
}
