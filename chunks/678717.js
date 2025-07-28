(a.r(t), a.d(t, { default: () => ed }), a(539854), a(388685));
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
    j = a(19759),
    g = a(432877);
a(381996);
var _ = a(392750),
    y = a(926976),
    C = a(789654),
    O = a(719672),
    N = a(691867),
    T = a(916790),
    E = a(645973),
    S = a(903502),
    P = a(604776),
    I = a(912072),
    w = a(272193),
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
    ee = a(260950),
    et = a(621060),
    ea = a(981631),
    en = a(388032),
    er = a(736967),
    el = a(616257);
function ei(e) {
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
        className: er.resizeHandle
    });
}
function es(e) {
    var t;
    let { isPopout: a = !1 } = e,
        l = r.useMemo(() => {
            let e = [
                {
                    id: 'analytics',
                    name: 'Analytics',
                    group: et.v0.EXPERIMENTS,
                    render: () => (0, n.jsx)(y.Z, {})
                },
                {
                    id: 'triggers',
                    name: 'Triggers',
                    group: et.v0.EXPERIMENTS,
                    render: () => (0, n.jsx)($.Z, {})
                },
                {
                    id: 'stores',
                    name: 'Stores',
                    group: et.v0.EVENTS,
                    render: () => (0, n.jsx)(q.Z, {})
                },
                {
                    id: 'dispatcher',
                    name: 'Dispatcher',
                    group: et.v0.EVENTS,
                    render: () => (0, n.jsx)(T.Z, {})
                }
            ];
            return (
                b.Z.isDeveloper &&
                    (e.push({
                        id: 'shop',
                        name: 'Shop',
                        group: et.v0.BILLING,
                        render: () => (0, n.jsx)(Y.C, {})
                    }),
                    e.push({
                        id: 'quick_actions',
                        name: 'Quick Actions',
                        group: et.v0.NONE,
                        render: () => (0, n.jsx)(K.Z, {})
                    }),
                    e.push({
                        id: 'end_to_end_encryption',
                        name: 'E2EE',
                        group: et.v0.DEVELOPMENT,
                        render: () => (0, n.jsx)(E.Z, {})
                    }),
                    e.push({
                        id: 'performance',
                        name: 'Performance',
                        group: et.v0.DEVELOPMENT,
                        render: () => (0, n.jsx)(G.ZP, {})
                    }),
                    e.push({
                        id: 'feedback',
                        name: 'Feedback',
                        group: et.v0.USERS,
                        render: () => (0, n.jsx)(S.Z, {})
                    }),
                    e.push({
                        id: 'overlay',
                        name: 'Overlay v3',
                        group: et.v0.GAMES,
                        render: () => (0, n.jsx)(B.Z, {})
                    }),
                    e.push({
                        id: 'slayer_sdk',
                        name: 'Slayer SDK',
                        group: et.v0.GAMES,
                        render: () => (0, n.jsx)(J.Z, {})
                    })),
                e.push({
                    id: 'rive',
                    name: 'Rive',
                    group: et.v0.UI,
                    render: () => (0, n.jsx)(X.Z, {})
                }),
                e.push({
                    id: 'intl',
                    name: 'Intl',
                    group: et.v0.UI,
                    render: () => (0, n.jsx)(k.Z, {})
                }),
                e.push({
                    id: 'colors',
                    name: 'Colors',
                    group: et.v0.UI,
                    render: () => (0, n.jsx)(C.Z, {})
                }),
                e.push({
                    id: 'design_toggles',
                    name: 'Design Toggles',
                    group: et.v0.UI,
                    render: () => (0, n.jsx)(N.Z, {})
                }),
                e.push({
                    id: 'overlays',
                    name: 'Dev Overlays',
                    group: et.v0.DEVELOPMENT,
                    render: () => (0, n.jsx)(I.Z, { devSettingsCategory: g.zU.OVERLAYS })
                }),
                e.push({
                    id: 'messaging',
                    name: 'Messaging',
                    group: et.v0.USERS,
                    render: () => (0, n.jsx)(M.Z, {})
                }),
                e.push({
                    id: 'reporting',
                    name: 'Reporting',
                    group: et.v0.EXPERIMENTS,
                    render: () => (0, n.jsx)(I.Z, { devSettingsCategory: g.zU.REPORTING })
                }),
                e.push({
                    id: 'permissions',
                    name: 'Permissions',
                    group: et.v0.USERS,
                    render: () => (0, n.jsx)(H.Z, {})
                }),
                e.push({
                    id: 'modals',
                    name: 'Modals',
                    group: et.v0.UI,
                    render: () => (0, n.jsx)(U.Z, {})
                }),
                e.push({
                    id: 'layers',
                    name: 'Layers',
                    group: et.v0.UI,
                    render: () => (0, n.jsx)(L.Z, {})
                }),
                e.push({
                    id: 'affinity',
                    name: 'Affinity',
                    group: et.v0.USERS,
                    render: () => (0, n.jsx)(_.Z, {})
                }),
                b.Z.isDeveloper &&
                    e.push({
                        id: 'content_inventory',
                        name: 'Content Inventory',
                        group: et.v0.USERS,
                        render: () => (0, n.jsx)(m.Z, {})
                    }),
                e.push({
                    id: 'dcf',
                    name: 'DCF',
                    group: et.v0.EXPERIMENTS,
                    render: () => (0, n.jsx)(O.Z, {})
                }),
                e.push({
                    id: 'perks',
                    name: 'Perks',
                    group: et.v0.PREMIUM,
                    render: () => (0, n.jsx)(V.Z, {})
                }),
                e.push({
                    id: 'potions',
                    name: 'Potions',
                    group: et.v0.PREMIUM,
                    render: () => (0, n.jsx)(W.Z, {})
                }),
                window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith('staging') &&
                    (e.push({
                        id: 'offers',
                        name: 'Offers',
                        group: et.v0.PREMIUM,
                        render: () => (0, n.jsx)(F.Z, {})
                    }),
                    e.push({
                        id: 'payments',
                        name: 'Payments',
                        group: et.v0.BILLING,
                        render: () => (0, n.jsx)(z.Z, {})
                    }),
                    e.push({
                        id: 'subscriptions',
                        name: 'Subscriptions',
                        group: et.v0.PREMIUM,
                        render: () => (0, n.jsx)(ee.Z, {})
                    }),
                    e.push({
                        id: 'fractional_nitro',
                        name: 'Fractional Nitro',
                        group: et.v0.PREMIUM,
                        render: () => (0, n.jsx)(P.Z, {})
                    })),
                e.push({
                    id: 'gifting_intent',
                    name: 'Gifting Intent',
                    group: et.v0.PREMIUM,
                    render: () => (0, n.jsx)(w.Z, {})
                }),
                e.push({
                    id: 'voice_filters',
                    name: 'Voice Filters',
                    group: et.v0.AUDIO_VIDEO,
                    render: () => (0, n.jsx)(Q.Z, {})
                }),
                e.push({
                    id: 'krisp_tester',
                    name: 'Krisp Tester',
                    group: et.v0.AUDIO_VIDEO,
                    render: () => (0, n.jsx)(A.Z, {})
                }),
                e.push({
                    id: 'skill_trees',
                    name: 'Skill Trees',
                    group: et.v0.GUILDS,
                    render: () => (0, n.jsx)(R.Z, {})
                }),
                e.push({
                    id: 'language',
                    name: 'Language',
                    group: et.v0.UI,
                    render: () => (0, n.jsx)(Z.Z, {})
                }),
                e
            );
        }, []),
        {
            TabBar: i,
            renderSelectedTab: o,
            selectedTabId: d
        } = (0, et.ZP)(
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
        (0, n.jsxs)(D.Gk, {
            children: [
                (0, n.jsxs)(x.ZP, {
                    className: el.headerBar,
                    toolbar: a
                        ? null
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(x.ZP.Icon, {
                                      icon: c.rgF,
                                      tooltip: 'Pop Out',
                                      onClick: () => {
                                          (0, h.bA)(
                                              ea.KJ3.DEVTOOLS_POPOUT,
                                              () =>
                                                  (0, n.jsx)(p.Z, {
                                                      windowKey: ea.KJ3.DEVTOOLS_POPOUT,
                                                      title: 'DevTools',
                                                      withTitleBar: !0,
                                                      children: (0, n.jsx)(ed, {
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
                                      tooltip: en.intl.string(en.t.cpT0Cg),
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
                (0, n.jsx)(D.Br, { className: er.layerContainer })
            ]
        })
    );
}
function eo() {
    let e = r.useRef(null),
        t = (0, o.e7)([j.Z], () => j.Z.sidebarWidth),
        [a, l] = r.useState(null),
        i = r.useCallback((e) => (0, v.Qh)({ sidebarWidth: e }), []);
    return (r.useEffect(() => {
        null === a && null !== t && l(t);
    }, [t, a]),
    null === a)
        ? null
        : (0, n.jsxs)('div', {
              ref: e,
              className: er.container,
              style: {
                  minWidth: j.h,
                  width: a
              },
              'data-app-right-panel': !0,
              children: [
                  (0, n.jsx)(ei, {
                      resizableNode: e,
                      onResize: l,
                      onResizeEnd: i
                  }),
                  (0, n.jsx)('div', {
                      className: er.sidebarContent,
                      children: (0, n.jsx)(es, {})
                  })
              ]
          });
}
function ec() {
    return (0, o.e7)([j.Z], () => j.Z.displayTools)
        ? (0, n.jsx)('div', {
              className: i()(er.container, er.mobileContainerExpanded),
              children: (0, n.jsx)('div', {
                  className: er.sidebarContent,
                  children: (0, n.jsx)(es, {})
              })
          })
        : (0, n.jsx)('div', {
              className: er.container,
              children: (0, n.jsx)(c.P3F, {
                  onClick: v.SO,
                  children: (0, n.jsxs)(x.ZP, {
                      className: i()(el.headerBar, er.mobileHeaderCollapsed),
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
function ed(e) {
    let { mobile: t, isPopout: a = !1 } = e;
    return t
        ? (0, n.jsx)(ec, {})
        : a
          ? (0, n.jsx)('div', {
                className: er.popoutContainer,
                children: (0, n.jsx)(es, { isPopout: !0 })
            })
          : (0, n.jsx)(eo, {});
}
