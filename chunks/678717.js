(a.r(t), a.d(t, { default: () => em }), a(539854), a(388685));
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
    p = a(611565),
    h = a(238246),
    b = a(788983),
    f = a(906467),
    v = a(259580),
    g = a(31336),
    j = a(19759),
    _ = a(432877);
a(381996);
var y = a(392750),
    C = a(926976),
    O = a(789654),
    N = a(719672),
    T = a(691867),
    E = a(916790),
    S = a(645973),
    P = a(903502),
    I = a(604776),
    w = a(912072),
    R = a(272193),
    A = a(685560),
    k = a(735959),
    Z = a(572444),
    D = a(636500),
    L = a(246992),
    M = a(484662),
    U = a(496025),
    F = a(442954),
    G = a(925124),
    B = a(633001),
    z = a(702904),
    V = a(178821),
    H = a(891401),
    W = a(958328),
    K = a(315384),
    X = a(514866),
    Y = a(763577),
    J = a(384207),
    q = a(264603),
    $ = a(678639),
    Q = a(596768),
    ee = a(56706),
    et = a(820400),
    ea = a(260950),
    en = a(621060),
    er = a(981631),
    el = a(388032),
    ei = a(736967),
    es = a(616257);
function eo(e) {
    let { resizableNode: t, onResize: a, onResizeEnd: r } = e,
        l = (0, d.Z)({
            minDimension: j.h,
            resizableDomNodeRef: t,
            onElementResize: a,
            onElementResizeEnd: r,
            orientation: d.y.HORIZONTAL_LEFT
        });
    return (0, n.jsx)('div', {
        onMouseDown: l,
        className: ei.resizeHandle
    });
}
function ec(e) {
    var t;
    let { isPopout: a = !1 } = e,
        l = r.useMemo(() => {
            let e = [
                {
                    id: 'analytics',
                    name: 'Analytics',
                    group: en.v0.EXPERIMENTS,
                    render: () => (0, n.jsx)(C.Z, {})
                },
                {
                    id: 'triggers',
                    name: 'Triggers',
                    group: en.v0.EXPERIMENTS,
                    render: () => (0, n.jsx)(Q.Z, {})
                },
                {
                    id: 'stores',
                    name: 'Stores',
                    group: en.v0.EVENTS,
                    render: () => (0, n.jsx)($.Z, {})
                },
                {
                    id: 'dispatcher',
                    name: 'Dispatcher',
                    group: en.v0.EVENTS,
                    render: () => (0, n.jsx)(E.Z, {})
                }
            ];
            return (
                f.Z.isDeveloper &&
                    (e.push({
                        id: 'shop',
                        name: 'Shop',
                        group: en.v0.BILLING,
                        render: () => (0, n.jsx)(J.C, {})
                    }),
                    e.push({
                        id: 'quick_actions',
                        name: 'Quick Actions',
                        group: en.v0.DEVELOPMENT,
                        render: () => (0, n.jsx)(X.Z, {})
                    }),
                    e.push({
                        id: 'end_to_end_encryption',
                        name: 'E2EE',
                        group: en.v0.DEVELOPMENT,
                        render: () => (0, n.jsx)(S.Z, {})
                    }),
                    e.push({
                        id: 'performance',
                        name: 'Performance',
                        group: en.v0.DEVELOPMENT,
                        render: () => (0, n.jsx)(V.ZP, {})
                    }),
                    e.push({
                        id: 'feedback',
                        name: 'Feedback',
                        group: en.v0.USERS,
                        render: () => (0, n.jsx)(P.Z, {})
                    }),
                    e.push({
                        id: 'overlay',
                        name: 'Overlay v3',
                        group: en.v0.GAMES,
                        render: () => (0, n.jsx)(B.Z, {})
                    }),
                    e.push({
                        id: 'slayer_sdk',
                        name: 'Slayer SDK',
                        group: en.v0.GAMES,
                        render: () => (0, n.jsx)(q.Z, {})
                    })),
                e.push({
                    id: 'rive',
                    name: 'Rive',
                    group: en.v0.UI,
                    render: () => (0, n.jsx)(Y.Z, {})
                }),
                e.push({
                    id: 'intl',
                    name: 'Intl',
                    group: en.v0.UI,
                    render: () => (0, n.jsx)(k.Z, {})
                }),
                e.push({
                    id: 'colors',
                    name: 'Colors',
                    group: en.v0.UI,
                    render: () => (0, n.jsx)(O.Z, {})
                }),
                e.push({
                    id: 'design_toggles',
                    name: 'Design Toggles',
                    group: en.v0.UI,
                    render: () => (0, n.jsx)(T.Z, {})
                }),
                e.push({
                    id: 'overlays',
                    name: 'Dev Overlays',
                    group: en.v0.DEVELOPMENT,
                    render: () => (0, n.jsx)(w.Z, { devSettingsCategory: _.zU.OVERLAYS })
                }),
                e.push({
                    id: 'messaging',
                    name: 'Messaging',
                    group: en.v0.USERS,
                    render: () => (0, n.jsx)(U.Z, {})
                }),
                e.push({
                    id: 'reporting',
                    name: 'Reporting',
                    group: en.v0.EXPERIMENTS,
                    render: () => (0, n.jsx)(w.Z, { devSettingsCategory: _.zU.REPORTING })
                }),
                e.push({
                    id: 'permissions',
                    name: 'Permissions',
                    group: en.v0.USERS,
                    render: () => (0, n.jsx)(W.Z, {})
                }),
                e.push({
                    id: 'modals',
                    name: 'Modals',
                    group: en.v0.UI,
                    render: () => (0, n.jsx)(F.Z, {})
                }),
                e.push({
                    id: 'layers',
                    name: 'Layers',
                    group: en.v0.UI,
                    render: () => (0, n.jsx)(M.Z, {})
                }),
                e.push({
                    id: 'affinity',
                    name: 'Affinity',
                    group: en.v0.USERS,
                    render: () => (0, n.jsx)(y.Z, {})
                }),
                e.push({
                    id: 'widgets',
                    name: 'Widgets',
                    group: en.v0.USERS,
                    render: () => (0, n.jsx)(et.Z, {})
                }),
                f.Z.isDeveloper &&
                    (e.push({
                        id: 'content_inventory',
                        name: 'Content Inventory',
                        group: en.v0.USERS,
                        render: () => (0, n.jsx)(m.Z, {})
                    }),
                    e.push({
                        id: 'notifications_inbox',
                        name: 'Notifications Inbox',
                        group: en.v0.USERS,
                        render: () => (0, n.jsx)(p.Z, {})
                    })),
                e.push({
                    id: 'dcf',
                    name: 'DCF',
                    group: en.v0.EXPERIMENTS,
                    render: () => (0, n.jsx)(N.Z, {})
                }),
                e.push({
                    id: 'perks',
                    name: 'Perks',
                    group: en.v0.PREMIUM,
                    render: () => (0, n.jsx)(H.Z, {})
                }),
                e.push({
                    id: 'potions',
                    name: 'Potions',
                    group: en.v0.PREMIUM,
                    render: () => (0, n.jsx)(K.Z, {})
                }),
                window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith('staging') &&
                    (e.push({
                        id: 'offers',
                        name: 'Offers',
                        group: en.v0.PREMIUM,
                        render: () => (0, n.jsx)(G.Z, {})
                    }),
                    e.push({
                        id: 'payments',
                        name: 'Payments',
                        group: en.v0.BILLING,
                        render: () => (0, n.jsx)(z.Z, {})
                    }),
                    e.push({
                        id: 'subscriptions',
                        name: 'Subscriptions',
                        group: en.v0.PREMIUM,
                        render: () => (0, n.jsx)(ea.Z, {})
                    }),
                    e.push({
                        id: 'fractional_nitro',
                        name: 'Fractional Nitro',
                        group: en.v0.PREMIUM,
                        render: () => (0, n.jsx)(I.Z, {})
                    })),
                e.push({
                    id: 'gifting_intent',
                    name: 'Gifting Intent',
                    group: en.v0.PREMIUM,
                    render: () => (0, n.jsx)(R.Z, {})
                }),
                e.push({
                    id: 'voice_filters',
                    name: 'Voice Filters',
                    group: en.v0.AUDIO_VIDEO,
                    render: () => (0, n.jsx)(ee.Z, {})
                }),
                e.push({
                    id: 'krisp_tester',
                    name: 'Krisp Tester',
                    group: en.v0.AUDIO_VIDEO,
                    render: () => (0, n.jsx)(Z.Z, {})
                }),
                e.push({
                    id: 'skill_trees',
                    name: 'Skill Trees',
                    group: en.v0.GUILDS,
                    render: () => (0, n.jsx)(A.Z, {})
                }),
                e.push({
                    id: 'language',
                    name: 'Language',
                    group: en.v0.UI,
                    render: () => (0, n.jsx)(D.Z, {})
                }),
                e
            );
        }, []),
        {
            TabBar: i,
            renderSelectedTab: o,
            selectedTabId: d
        } = (0, en.ZP)(
            {
                tabs: l,
                initialSelectedTabId: null != (t = j.Z.lastOpenTabId) ? t : void 0,
                onChangeTab: (e) => {
                    (0, g.Qh)({ lastOpenTabId: e });
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
        (0, n.jsxs)(L.Gk, {
            children: [
                (0, n.jsxs)(x.ZP, {
                    className: es.headerBar,
                    toolbar: a
                        ? null
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(x.ZP.Icon, {
                                      icon: c.rgF,
                                      tooltip: 'Pop Out',
                                      onClick: () => {
                                          (0, b.bA)(
                                              er.KJ3.DEVTOOLS_POPOUT,
                                              () =>
                                                  (0, n.jsx)(h.Z, {
                                                      windowKey: er.KJ3.DEVTOOLS_POPOUT,
                                                      title: 'DevTools',
                                                      withTitleBar: !0,
                                                      children: (0, n.jsx)(em, {
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
                                      tooltip: el.intl.string(el.t.cpT0Cg),
                                      onClick: g.SO
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
                (0, n.jsx)(L.Br, { className: ei.layerContainer })
            ]
        })
    );
}
function ed() {
    let e = r.useRef(null),
        t = (0, o.e7)([j.Z], () => j.Z.sidebarWidth),
        [a, l] = r.useState(null),
        i = r.useCallback((e) => (0, g.Qh)({ sidebarWidth: e }), []);
    return (r.useEffect(() => {
        null === a && null !== t && l(t);
    }, [t, a]),
    null === a)
        ? null
        : (0, n.jsxs)('div', {
              ref: e,
              className: ei.container,
              style: {
                  minWidth: j.h,
                  width: a
              },
              'data-app-right-panel': !0,
              children: [
                  (0, n.jsx)(eo, {
                      resizableNode: e,
                      onResize: l,
                      onResizeEnd: i
                  }),
                  (0, n.jsx)('div', {
                      className: ei.sidebarContent,
                      children: (0, n.jsx)(ec, {})
                  })
              ]
          });
}
function eu() {
    return (0, o.e7)([j.Z], () => j.Z.displayTools)
        ? (0, n.jsx)('div', {
              className: i()(ei.container, ei.mobileContainerExpanded),
              children: (0, n.jsx)('div', {
                  className: ei.sidebarContent,
                  children: (0, n.jsx)(ec, {})
              })
          })
        : (0, n.jsx)('div', {
              className: ei.container,
              children: (0, n.jsx)(c.P3F, {
                  onClick: g.SO,
                  children: (0, n.jsxs)(x.ZP, {
                      className: i()(es.headerBar, ei.mobileHeaderCollapsed),
                      toolbar: (0, n.jsx)(v.Z, { direction: v.Z.Directions.UP }),
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
function em(e) {
    let { mobile: t, isPopout: a = !1 } = e;
    return t
        ? (0, n.jsx)(eu, {})
        : a
          ? (0, n.jsx)('div', {
                className: ei.popoutContainer,
                children: (0, n.jsx)(ec, { isPopout: !0 })
            })
          : (0, n.jsx)(ed, {});
}
