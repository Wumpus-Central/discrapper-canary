(n.r(t), n.d(t, { default: () => ec }), n(539854), n(388685));
var a = n(255367),
    r = n(73800),
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
    C = n(789654),
    O = n(719672),
    N = n(691867),
    T = n(916790),
    E = n(645973),
    S = n(903502),
    P = n(604776),
    w = n(912072),
    I = n(272193),
    k = n(685560),
    R = n(735959),
    A = n(572444),
    Z = n(246992),
    L = n(484662),
    D = n(496025),
    M = n(442954),
    z = n(633001),
    B = n(702904),
    F = n(178821),
    U = n(891401),
    G = n(958328),
    V = n(315384),
    H = n(514866),
    W = n(763577),
    K = n(384207),
    X = n(264603),
    Y = n(678639),
    J = n(771751),
    q = n(596768),
    $ = n(56706),
    Q = n(260950),
    ee = n(621060),
    et = n(981631),
    en = n(388032),
    ea = n(736967),
    er = n(616257);
function el(e) {
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
        className: ea.resizeHandle
    });
}
function ei(e) {
    var t;
    let { isPopout: n = !1 } = e,
        l = r.useMemo(() => {
            let e = [
                {
                    id: 'analytics',
                    name: 'Analytics',
                    group: ee.v0.EXPERIMENTS,
                    render: () => (0, a.jsx)(y.Z, {})
                },
                {
                    id: 'triggers',
                    name: 'Triggers',
                    group: ee.v0.EXPERIMENTS,
                    render: () => (0, a.jsx)(q.Z, {})
                },
                {
                    id: 'stores',
                    name: 'Stores',
                    group: ee.v0.EVENTS,
                    render: () => (0, a.jsx)(Y.Z, {})
                },
                {
                    id: 'dispatcher',
                    name: 'Dispatcher',
                    group: ee.v0.EVENTS,
                    render: () => (0, a.jsx)(T.Z, {})
                }
            ];
            return (
                b.Z.isDeveloper &&
                    (e.push({
                        id: 'shop',
                        name: 'Shop',
                        group: ee.v0.BILLING,
                        render: () => (0, a.jsx)(K.C, {})
                    }),
                    e.push({
                        id: 'quick_actions',
                        name: 'Quick Actions',
                        group: ee.v0.NONE,
                        render: () => (0, a.jsx)(H.Z, {})
                    }),
                    e.push({
                        id: 'end_to_end_encryption',
                        name: 'E2EE',
                        group: ee.v0.DEVELOPMENT,
                        render: () => (0, a.jsx)(E.Z, {})
                    }),
                    e.push({
                        id: 'performance',
                        name: 'Performance',
                        group: ee.v0.DEVELOPMENT,
                        render: () => (0, a.jsx)(F.ZP, {})
                    }),
                    e.push({
                        id: 'feedback',
                        name: 'Feedback',
                        group: ee.v0.USERS,
                        render: () => (0, a.jsx)(S.Z, {})
                    }),
                    e.push({
                        id: 'overlay',
                        name: 'Overlay v3',
                        group: ee.v0.GAMES,
                        render: () => (0, a.jsx)(z.Z, {})
                    }),
                    e.push({
                        id: 'slayer_sdk',
                        name: 'Slayer SDK',
                        group: ee.v0.GAMES,
                        render: () => (0, a.jsx)(X.Z, {})
                    })),
                e.push({
                    id: 'rive',
                    name: 'Rive',
                    group: ee.v0.UI,
                    render: () => (0, a.jsx)(W.Z, {})
                }),
                e.push({
                    id: 'intl',
                    name: 'Intl',
                    group: ee.v0.UI,
                    render: () => (0, a.jsx)(R.Z, {})
                }),
                e.push({
                    id: 'colors',
                    name: 'Colors',
                    group: ee.v0.UI,
                    render: () => (0, a.jsx)(C.Z, {})
                }),
                e.push({
                    id: 'design_toggles',
                    name: 'Design Toggles',
                    group: ee.v0.UI,
                    render: () => (0, a.jsx)(N.Z, {})
                }),
                e.push({
                    id: 'overlays',
                    name: 'Dev Overlays',
                    group: ee.v0.DEVELOPMENT,
                    render: () => (0, a.jsx)(w.Z, { devSettingsCategory: g.zU.OVERLAYS })
                }),
                e.push({
                    id: 'messaging',
                    name: 'Messaging',
                    group: ee.v0.USERS,
                    render: () => (0, a.jsx)(D.Z, {})
                }),
                e.push({
                    id: 'reporting',
                    name: 'Reporting',
                    group: ee.v0.EXPERIMENTS,
                    render: () => (0, a.jsx)(w.Z, { devSettingsCategory: g.zU.REPORTING })
                }),
                e.push({
                    id: 'permissions',
                    name: 'Permissions',
                    group: ee.v0.USERS,
                    render: () => (0, a.jsx)(G.Z, {})
                }),
                e.push({
                    id: 'modals',
                    name: 'Modals',
                    group: ee.v0.UI,
                    render: () => (0, a.jsx)(M.Z, {})
                }),
                e.push({
                    id: 'layers',
                    name: 'Layers',
                    group: ee.v0.UI,
                    render: () => (0, a.jsx)(L.Z, {})
                }),
                e.push({
                    id: 'affinity',
                    name: 'Affinity',
                    group: ee.v0.USERS,
                    render: () => (0, a.jsx)(_.Z, {})
                }),
                b.Z.isDeveloper &&
                    e.push({
                        id: 'content_inventory',
                        name: 'Content Inventory',
                        group: ee.v0.USERS,
                        render: () => (0, a.jsx)(m.Z, {})
                    }),
                e.push({
                    id: 'dcf',
                    name: 'DCF',
                    group: ee.v0.EXPERIMENTS,
                    render: () => (0, a.jsx)(O.Z, {})
                }),
                e.push({
                    id: 'perks',
                    name: 'Perks',
                    group: ee.v0.PREMIUM,
                    render: () => (0, a.jsx)(U.Z, {})
                }),
                e.push({
                    id: 'potions',
                    name: 'Potions',
                    group: ee.v0.PREMIUM,
                    render: () => (0, a.jsx)(V.Z, {})
                }),
                window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith('staging') &&
                    (e.push({
                        id: 'trials',
                        name: 'Trials',
                        group: ee.v0.PREMIUM,
                        render: () => (0, a.jsx)(J.Z, {})
                    }),
                    e.push({
                        id: 'payments',
                        name: 'Payments',
                        group: ee.v0.BILLING,
                        render: () => (0, a.jsx)(B.Z, {})
                    }),
                    e.push({
                        id: 'subscriptions',
                        name: 'Subscriptions',
                        group: ee.v0.PREMIUM,
                        render: () => (0, a.jsx)(Q.Z, {})
                    }),
                    e.push({
                        id: 'fractional_nitro',
                        name: 'Fractional Nitro',
                        group: ee.v0.PREMIUM,
                        render: () => (0, a.jsx)(P.Z, {})
                    })),
                e.push({
                    id: 'gifting_intent',
                    name: 'Gifting Intent',
                    group: ee.v0.PREMIUM,
                    render: () => (0, a.jsx)(I.Z, {})
                }),
                e.push({
                    id: 'voice_filters',
                    name: 'Voice Filters',
                    group: ee.v0.AUDIO_VIDEO,
                    render: () => (0, a.jsx)($.Z, {})
                }),
                e.push({
                    id: 'krisp_tester',
                    name: 'Krisp Tester',
                    group: ee.v0.AUDIO_VIDEO,
                    render: () => (0, a.jsx)(A.Z, {})
                }),
                e.push({
                    id: 'skill_trees',
                    name: 'Skill Trees',
                    group: ee.v0.GUILDS,
                    render: () => (0, a.jsx)(k.Z, {})
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
        (0, a.jsxs)(Z.Gk, {
            children: [
                (0, a.jsxs)(x.ZP, {
                    className: er.headerBar,
                    toolbar: n
                        ? null
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(x.ZP.Icon, {
                                      icon: c.rgF,
                                      tooltip: 'Pop Out',
                                      onClick: () => {
                                          (0, p.bA)(
                                              et.KJ3.DEVTOOLS_POPOUT,
                                              () =>
                                                  (0, a.jsx)(h.Z, {
                                                      windowKey: et.KJ3.DEVTOOLS_POPOUT,
                                                      title: 'DevTools',
                                                      withTitleBar: !0,
                                                      children: (0, a.jsx)(ec, {
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
                                      tooltip: en.intl.string(en.t.cpT0Cg),
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
                (0, a.jsx)(Z.Br, { className: ea.layerContainer })
            ]
        })
    );
}
function es() {
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
              className: ea.container,
              style: {
                  minWidth: j.h,
                  width: n
              },
              'data-app-right-panel': !0,
              children: [
                  (0, a.jsx)(el, {
                      resizableNode: e,
                      onResize: l,
                      onResizeEnd: i
                  }),
                  (0, a.jsx)('div', {
                      className: ea.sidebarContent,
                      children: (0, a.jsx)(ei, {})
                  })
              ]
          });
}
function eo() {
    return (0, o.e7)([j.Z], () => j.Z.displayTools)
        ? (0, a.jsx)('div', {
              className: i()(ea.container, ea.mobileContainerExpanded),
              children: (0, a.jsx)('div', {
                  className: ea.sidebarContent,
                  children: (0, a.jsx)(ei, {})
              })
          })
        : (0, a.jsx)('div', {
              className: ea.container,
              children: (0, a.jsx)(c.P3F, {
                  onClick: v.SO,
                  children: (0, a.jsxs)(x.ZP, {
                      className: i()(er.headerBar, ea.mobileHeaderCollapsed),
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
function ec(e) {
    let { mobile: t, isPopout: n = !1 } = e;
    return t
        ? (0, a.jsx)(eo, {})
        : n
          ? (0, a.jsx)('div', {
                className: ea.popoutContainer,
                children: (0, a.jsx)(ei, { isPopout: !0 })
            })
          : (0, a.jsx)(es, {});
}
