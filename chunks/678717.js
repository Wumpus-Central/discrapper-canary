(a.r(t), a.d(t, { default: () => ec }), a(539854), a(388685));
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
    N = a(719672),
    O = a(691867),
    T = a(916790),
    E = a(645973),
    S = a(903502),
    P = a(604776),
    w = a(912072),
    I = a(272193),
    R = a(685560),
    k = a(735959),
    Z = a(572444),
    A = a(246992),
    D = a(484662),
    L = a(496025),
    M = a(442954),
    F = a(633001),
    B = a(702904),
    z = a(178821),
    U = a(891401),
    G = a(958328),
    V = a(315384),
    H = a(514866),
    W = a(763577),
    K = a(384207),
    X = a(264603),
    Y = a(678639),
    J = a(771751),
    q = a(596768),
    $ = a(56706),
    Q = a(260950),
    ee = a(621060),
    et = a(981631),
    ea = a(388032),
    en = a(736967),
    er = a(616257);
function el(e) {
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
        className: en.resizeHandle
    });
}
function ei(e) {
    var t;
    let { isPopout: a = !1 } = e,
        l = r.useMemo(() => {
            let e = [
                {
                    id: 'analytics',
                    name: 'Analytics',
                    group: ee.v0.EXPERIMENTS,
                    render: () => (0, n.jsx)(y.Z, {})
                },
                {
                    id: 'triggers',
                    name: 'Triggers',
                    group: ee.v0.EXPERIMENTS,
                    render: () => (0, n.jsx)(q.Z, {})
                },
                {
                    id: 'stores',
                    name: 'Stores',
                    group: ee.v0.EVENTS,
                    render: () => (0, n.jsx)(Y.Z, {})
                },
                {
                    id: 'dispatcher',
                    name: 'Dispatcher',
                    group: ee.v0.EVENTS,
                    render: () => (0, n.jsx)(T.Z, {})
                }
            ];
            return (
                b.Z.isDeveloper &&
                    (e.push({
                        id: 'shop',
                        name: 'Shop',
                        group: ee.v0.BILLING,
                        render: () => (0, n.jsx)(K.C, {})
                    }),
                    e.push({
                        id: 'quick_actions',
                        name: 'Quick Actions',
                        group: ee.v0.NONE,
                        render: () => (0, n.jsx)(H.Z, {})
                    }),
                    e.push({
                        id: 'end_to_end_encryption',
                        name: 'E2EE',
                        group: ee.v0.DEVELOPMENT,
                        render: () => (0, n.jsx)(E.Z, {})
                    }),
                    e.push({
                        id: 'performance',
                        name: 'Performance',
                        group: ee.v0.DEVELOPMENT,
                        render: () => (0, n.jsx)(z.ZP, {})
                    }),
                    e.push({
                        id: 'feedback',
                        name: 'Feedback',
                        group: ee.v0.USERS,
                        render: () => (0, n.jsx)(S.Z, {})
                    }),
                    e.push({
                        id: 'overlay',
                        name: 'Overlay v3',
                        group: ee.v0.GAMES,
                        render: () => (0, n.jsx)(F.Z, {})
                    }),
                    e.push({
                        id: 'slayer_sdk',
                        name: 'Slayer SDK',
                        group: ee.v0.GAMES,
                        render: () => (0, n.jsx)(X.Z, {})
                    })),
                e.push({
                    id: 'rive',
                    name: 'Rive',
                    group: ee.v0.UI,
                    render: () => (0, n.jsx)(W.Z, {})
                }),
                e.push({
                    id: 'intl',
                    name: 'Intl',
                    group: ee.v0.UI,
                    render: () => (0, n.jsx)(k.Z, {})
                }),
                e.push({
                    id: 'colors',
                    name: 'Colors',
                    group: ee.v0.UI,
                    render: () => (0, n.jsx)(C.Z, {})
                }),
                e.push({
                    id: 'design_toggles',
                    name: 'Design Toggles',
                    group: ee.v0.UI,
                    render: () => (0, n.jsx)(O.Z, {})
                }),
                e.push({
                    id: 'overlays',
                    name: 'Dev Overlays',
                    group: ee.v0.DEVELOPMENT,
                    render: () => (0, n.jsx)(w.Z, { devSettingsCategory: g.zU.OVERLAYS })
                }),
                e.push({
                    id: 'messaging',
                    name: 'Messaging',
                    group: ee.v0.USERS,
                    render: () => (0, n.jsx)(L.Z, {})
                }),
                e.push({
                    id: 'reporting',
                    name: 'Reporting',
                    group: ee.v0.EXPERIMENTS,
                    render: () => (0, n.jsx)(w.Z, { devSettingsCategory: g.zU.REPORTING })
                }),
                e.push({
                    id: 'permissions',
                    name: 'Permissions',
                    group: ee.v0.USERS,
                    render: () => (0, n.jsx)(G.Z, {})
                }),
                e.push({
                    id: 'modals',
                    name: 'Modals',
                    group: ee.v0.UI,
                    render: () => (0, n.jsx)(M.Z, {})
                }),
                e.push({
                    id: 'layers',
                    name: 'Layers',
                    group: ee.v0.UI,
                    render: () => (0, n.jsx)(D.Z, {})
                }),
                e.push({
                    id: 'affinity',
                    name: 'Affinity',
                    group: ee.v0.USERS,
                    render: () => (0, n.jsx)(_.Z, {})
                }),
                b.Z.isDeveloper &&
                    e.push({
                        id: 'content_inventory',
                        name: 'Content Inventory',
                        group: ee.v0.USERS,
                        render: () => (0, n.jsx)(m.Z, {})
                    }),
                e.push({
                    id: 'dcf',
                    name: 'DCF',
                    group: ee.v0.EXPERIMENTS,
                    render: () => (0, n.jsx)(N.Z, {})
                }),
                e.push({
                    id: 'perks',
                    name: 'Perks',
                    group: ee.v0.PREMIUM,
                    render: () => (0, n.jsx)(U.Z, {})
                }),
                e.push({
                    id: 'potions',
                    name: 'Potions',
                    group: ee.v0.PREMIUM,
                    render: () => (0, n.jsx)(V.Z, {})
                }),
                window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith('staging') &&
                    (e.push({
                        id: 'trials',
                        name: 'Trials',
                        group: ee.v0.PREMIUM,
                        render: () => (0, n.jsx)(J.Z, {})
                    }),
                    e.push({
                        id: 'payments',
                        name: 'Payments',
                        group: ee.v0.BILLING,
                        render: () => (0, n.jsx)(B.Z, {})
                    }),
                    e.push({
                        id: 'subscriptions',
                        name: 'Subscriptions',
                        group: ee.v0.PREMIUM,
                        render: () => (0, n.jsx)(Q.Z, {})
                    }),
                    e.push({
                        id: 'fractional_nitro',
                        name: 'Fractional Nitro',
                        group: ee.v0.PREMIUM,
                        render: () => (0, n.jsx)(P.Z, {})
                    })),
                e.push({
                    id: 'gifting_intent',
                    name: 'Gifting Intent',
                    group: ee.v0.PREMIUM,
                    render: () => (0, n.jsx)(I.Z, {})
                }),
                e.push({
                    id: 'voice_filters',
                    name: 'Voice Filters',
                    group: ee.v0.AUDIO_VIDEO,
                    render: () => (0, n.jsx)($.Z, {})
                }),
                e.push({
                    id: 'krisp_tester',
                    name: 'Krisp Tester',
                    group: ee.v0.AUDIO_VIDEO,
                    render: () => (0, n.jsx)(Z.Z, {})
                }),
                e.push({
                    id: 'skill_trees',
                    name: 'Skill Trees',
                    group: ee.v0.GUILDS,
                    render: () => (0, n.jsx)(R.Z, {})
                }),
                e
            );
        }, []),
        {
            TabBar: i,
            renderSelectedTab: o,
            selectedTabId: d
        } = (0, ee.ZP)(
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
        (0, n.jsxs)(A.Gk, {
            children: [
                (0, n.jsxs)(x.ZP, {
                    className: er.headerBar,
                    toolbar: a
                        ? null
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(x.ZP.Icon, {
                                      icon: c.rgF,
                                      tooltip: 'Pop Out',
                                      onClick: () => {
                                          (0, h.bA)(
                                              et.KJ3.DEVTOOLS_POPOUT,
                                              () =>
                                                  (0, n.jsx)(p.Z, {
                                                      windowKey: et.KJ3.DEVTOOLS_POPOUT,
                                                      title: 'DevTools',
                                                      withTitleBar: !0,
                                                      children: (0, n.jsx)(ec, {
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
                                      tooltip: ea.intl.string(ea.t.cpT0Cg),
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
                (0, n.jsx)(A.Br, { className: en.layerContainer })
            ]
        })
    );
}
function es() {
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
              className: en.container,
              style: {
                  minWidth: j.h,
                  width: a
              },
              'data-app-right-panel': !0,
              children: [
                  (0, n.jsx)(el, {
                      resizableNode: e,
                      onResize: l,
                      onResizeEnd: i
                  }),
                  (0, n.jsx)('div', {
                      className: en.sidebarContent,
                      children: (0, n.jsx)(ei, {})
                  })
              ]
          });
}
function eo() {
    return (0, o.e7)([j.Z], () => j.Z.displayTools)
        ? (0, n.jsx)('div', {
              className: i()(en.container, en.mobileContainerExpanded),
              children: (0, n.jsx)('div', {
                  className: en.sidebarContent,
                  children: (0, n.jsx)(ei, {})
              })
          })
        : (0, n.jsx)('div', {
              className: en.container,
              children: (0, n.jsx)(c.P3F, {
                  onClick: v.SO,
                  children: (0, n.jsxs)(x.ZP, {
                      className: i()(er.headerBar, en.mobileHeaderCollapsed),
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
function ec(e) {
    let { mobile: t, isPopout: a = !1 } = e;
    return t
        ? (0, n.jsx)(eo, {})
        : a
          ? (0, n.jsx)('div', {
                className: en.popoutContainer,
                children: (0, n.jsx)(ei, { isPopout: !0 })
            })
          : (0, n.jsx)(es, {});
}
