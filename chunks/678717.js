a.r(t), a.d(t, { default: () => eh }), a(539854), a(388685);
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
    j = a(31336),
    g = a(19759),
    _ = a(432877),
    y = a(176038);
a(381996);
var C = a(392750),
    N = a(926976),
    O = a(789654),
    T = a(719672),
    E = a(691867),
    S = a(916790),
    P = a(645973),
    w = a(903502),
    I = a(604776),
    R = a(912072),
    k = a(272193),
    Z = a(685560),
    A = a(735959),
    L = a(572444),
    D = a(636500),
    B = a(246992),
    M = a(484662),
    F = a(496025),
    U = a(442954),
    G = a(925124),
    z = a(633001),
    V = a(702904),
    H = a(178821),
    W = a(891401),
    K = a(958328),
    X = a(315384),
    Y = a(107606),
    J = a(514866),
    q = a(763577),
    $ = a(384207),
    Q = a(264603),
    ee = a(678639),
    et = a(596768),
    ea = a(56706),
    en = a(820400),
    er = a(260950),
    el = a(621060),
    ei = a(981631),
    es = a(388032),
    eo = a(736967),
    ec = a(616257);
function ed(e) {
    let { resizableNode: t, onResize: a, onResizeEnd: r } = e,
        l = (0, d.Z)({
            minDimension: g.h,
            resizableDomNodeRef: t,
            onElementResize: a,
            onElementResizeEnd: r,
            orientation: d.y.HORIZONTAL_LEFT,
        });
    return (0, n.jsx)("div", {
        onMouseDown: l,
        className: eo.resizeHandle,
    });
}
function eu() {
    return (0, y.Z)(), null;
}
function em(e) {
    var t;
    let { isPopout: a = !1 } = e,
        l = r.useMemo(() => {
            let e = [
                {
                    id: "analytics",
                    name: "Analytics",
                    group: el.v0.EXPERIMENTS,
                    render: () => (0, n.jsx)(N.Z, {}),
                },
                {
                    id: "triggers",
                    name: "Triggers",
                    group: el.v0.EXPERIMENTS,
                    render: () => (0, n.jsx)(et.Z, {}),
                },
                {
                    id: "stores",
                    name: "Stores",
                    group: el.v0.EVENTS,
                    render: () => (0, n.jsx)(ee.Z, {}),
                },
                {
                    id: "dispatcher",
                    name: "Dispatcher",
                    group: el.v0.EVENTS,
                    render: () => (0, n.jsx)(S.Z, {}),
                },
            ];
            return (
                f.Z.isDeveloper &&
                    (e.push({
                        id: "shop",
                        name: "Shop",
                        group: el.v0.BILLING,
                        render: () => (0, n.jsx)($.C, {}),
                    }),
                    e.push({
                        id: "quick_actions",
                        name: "Quick Actions",
                        group: el.v0.DEVELOPMENT,
                        render: () => (0, n.jsx)(J.Z, {}),
                    }),
                    e.push({
                        id: "end_to_end_encryption",
                        name: "E2EE",
                        group: el.v0.DEVELOPMENT,
                        render: () => (0, n.jsx)(P.Z, {}),
                    }),
                    e.push({
                        id: "performance",
                        name: "Performance",
                        group: el.v0.DEVELOPMENT,
                        render: () => (0, n.jsx)(H.ZP, {}),
                    }),
                    e.push({
                        id: "feedback",
                        name: "Feedback",
                        group: el.v0.USERS,
                        render: () => (0, n.jsx)(w.Z, {}),
                    }),
                    e.push({
                        id: "overlay",
                        name: "Overlay v3",
                        group: el.v0.GAMES,
                        render: () => (0, n.jsx)(z.Z, {}),
                    }),
                    e.push({
                        id: "slayer_sdk",
                        name: "Slayer SDK",
                        group: el.v0.GAMES,
                        render: () => (0, n.jsx)(Q.Z, {}),
                    })),
                e.push({
                    id: "rive",
                    name: "Rive",
                    group: el.v0.UI,
                    render: () => (0, n.jsx)(q.Z, {}),
                }),
                e.push({
                    id: "intl",
                    name: "Intl",
                    group: el.v0.UI,
                    render: () => (0, n.jsx)(A.Z, {}),
                }),
                e.push({
                    id: "colors",
                    name: "Colors",
                    group: el.v0.UI,
                    render: () => (0, n.jsx)(O.Z, {}),
                }),
                e.push({
                    id: "design_toggles",
                    name: "Design Toggles",
                    group: el.v0.UI,
                    render: () => (0, n.jsx)(E.Z, {}),
                }),
                e.push({
                    id: "premium_feature_randomizer",
                    name: "Premium Feature Randomizer",
                    group: el.v0.UI,
                    render: () => (0, n.jsx)(Y.Z, {}),
                }),
                e.push({
                    id: "overlays",
                    name: "Dev Overlays",
                    group: el.v0.DEVELOPMENT,
                    render: () => (0, n.jsx)(R.Z, { devSettingsCategory: _.zU.OVERLAYS }),
                }),
                e.push({
                    id: "messaging",
                    name: "Messaging",
                    group: el.v0.USERS,
                    render: () => (0, n.jsx)(F.Z, {}),
                }),
                e.push({
                    id: "reporting",
                    name: "Reporting",
                    group: el.v0.EXPERIMENTS,
                    render: () => (0, n.jsx)(R.Z, { devSettingsCategory: _.zU.REPORTING }),
                }),
                e.push({
                    id: "permissions",
                    name: "Permissions",
                    group: el.v0.USERS,
                    render: () => (0, n.jsx)(K.Z, {}),
                }),
                e.push({
                    id: "modals",
                    name: "Modals",
                    group: el.v0.UI,
                    render: () => (0, n.jsx)(U.Z, {}),
                }),
                e.push({
                    id: "layers",
                    name: "Layers",
                    group: el.v0.UI,
                    render: () => (0, n.jsx)(M.Z, {}),
                }),
                e.push({
                    id: "affinity",
                    name: "Affinity",
                    group: el.v0.USERS,
                    render: () => (0, n.jsx)(C.Z, {}),
                }),
                e.push({
                    id: "widgets",
                    name: "Widgets",
                    group: el.v0.USERS,
                    render: () => (0, n.jsx)(en.Z, {}),
                }),
                f.Z.isDeveloper &&
                    (e.push({
                        id: "content_inventory",
                        name: "Content Inventory",
                        group: el.v0.USERS,
                        render: () => (0, n.jsx)(m.Z, {}),
                    }),
                    e.push({
                        id: "notifications_inbox",
                        name: "Notifications Inbox",
                        group: el.v0.USERS,
                        render: () => (0, n.jsx)(p.Z, {}),
                    })),
                e.push({
                    id: "dcf",
                    name: "DCF",
                    group: el.v0.EXPERIMENTS,
                    render: () => (0, n.jsx)(T.Z, {}),
                }),
                e.push({
                    id: "perks",
                    name: "Perks",
                    group: el.v0.PREMIUM,
                    render: () => (0, n.jsx)(W.Z, {}),
                }),
                e.push({
                    id: "potions",
                    name: "Potions",
                    group: el.v0.PREMIUM,
                    render: () => (0, n.jsx)(X.Z, {}),
                }),
                window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                    (e.push({
                        id: "offers",
                        name: "Offers",
                        group: el.v0.PREMIUM,
                        render: () => (0, n.jsx)(G.Z, {}),
                    }),
                    e.push({
                        id: "payments",
                        name: "Payments",
                        group: el.v0.BILLING,
                        render: () => (0, n.jsx)(V.Z, {}),
                    }),
                    e.push({
                        id: "subscriptions",
                        name: "Subscriptions",
                        group: el.v0.PREMIUM,
                        render: () => (0, n.jsx)(er.Z, {}),
                    }),
                    e.push({
                        id: "fractional_nitro",
                        name: "Fractional Nitro",
                        group: el.v0.PREMIUM,
                        render: () => (0, n.jsx)(I.Z, {}),
                    })),
                e.push({
                    id: "gifting_intent",
                    name: "Gifting Intent",
                    group: el.v0.PREMIUM,
                    render: () => (0, n.jsx)(k.Z, {}),
                }),
                e.push({
                    id: "voice_filters",
                    name: "Voice Filters",
                    group: el.v0.AUDIO_VIDEO,
                    render: () => (0, n.jsx)(ea.Z, {}),
                }),
                e.push({
                    id: "krisp_tester",
                    name: "Krisp Tester",
                    group: el.v0.AUDIO_VIDEO,
                    render: () => (0, n.jsx)(L.Z, {}),
                }),
                e.push({
                    id: "skill_trees",
                    name: "Skill Trees",
                    group: el.v0.GUILDS,
                    render: () => (0, n.jsx)(Z.Z, {}),
                }),
                e.push({
                    id: "language",
                    name: "Language",
                    group: el.v0.UI,
                    render: () => (0, n.jsx)(D.Z, {}),
                }),
                e
            );
        }, []),
        {
            TabBar: i,
            renderSelectedTab: d,
            selectedTabId: v,
        } = (0, el.ZP)(
            {
                tabs: l,
                initialSelectedTabId: null != (t = g.Z.lastOpenTabId) ? t : void 0,
                onChangeTab: (e) => {
                    (0, j.Qh)({ lastOpenTabId: e });
                },
            },
            [l],
        ),
        y = (0, o.e7)([g.Z], () => g.Z.isRandomlyChangingPremiumOptions);
    return (
        (0, u.Z)({
            type: s.ImpressionTypes.PANE,
            name: s.ImpressionNames.VIEW_PANEL_DEVTOOLS,
            properties: { panel: v },
        }),
        (0, n.jsxs)(B.Gk, {
            children: [
                (0, n.jsxs)(x.ZP, {
                    className: ec.headerBar,
                    toolbar: a
                        ? null
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(x.ZP.Icon, {
                                      icon: c.rgF,
                                      tooltip: "Pop Out",
                                      onClick: () => {
                                          (0, b.bA)(
                                              ei.KJ3.DEVTOOLS_POPOUT,
                                              () =>
                                                  (0, n.jsx)(h.Z, {
                                                      windowKey: ei.KJ3.DEVTOOLS_POPOUT,
                                                      title: "DevTools",
                                                      withTitleBar: !0,
                                                      children: (0, n.jsx)(eh, {
                                                          mobile: !1,
                                                          isPopout: !0,
                                                      }),
                                                  }),
                                              {
                                                  width: 800,
                                                  height: 600,
                                              },
                                          );
                                      },
                                  }),
                                  (0, n.jsx)(x.ZP.Icon, {
                                      icon: c.Dio,
                                      tooltip: es.intl.string(es.t.cpT0Cg),
                                      onClick: j.SO,
                                  }),
                              ],
                          }),
                    children: [
                        (0, n.jsx)(x.ZP.Icon, {
                            icon: c.Ymb,
                            tooltip: "DevTools",
                        }),
                        (0, n.jsx)(x.ZP.Title, { children: "DevTools" }),
                    ],
                }),
                (0, n.jsx)(i, {}),
                d(),
                (0, n.jsx)(B.Br, { className: eo.layerContainer }),
                y ? (0, n.jsx)(eu, {}) : null,
            ],
        })
    );
}
function ex() {
    let e = r.useRef(null),
        t = (0, o.e7)([g.Z], () => g.Z.sidebarWidth),
        [a, l] = r.useState(null),
        i = r.useCallback((e) => (0, j.Qh)({ sidebarWidth: e }), []);
    return (r.useEffect(() => {
        null === a && null !== t && l(t);
    }, [t, a]),
    null === a)
        ? null
        : (0, n.jsxs)("div", {
              ref: e,
              className: eo.container,
              style: {
                  minWidth: g.h,
                  width: a,
              },
              "data-app-right-panel": !0,
              children: [
                  (0, n.jsx)(ed, {
                      resizableNode: e,
                      onResize: l,
                      onResizeEnd: i,
                  }),
                  (0, n.jsx)("div", {
                      className: eo.sidebarContent,
                      children: (0, n.jsx)(em, {}),
                  }),
              ],
          });
}
function ep() {
    return (0, o.e7)([g.Z], () => g.Z.displayTools)
        ? (0, n.jsx)("div", {
              className: i()(eo.container, eo.mobileContainerExpanded),
              children: (0, n.jsx)("div", {
                  className: eo.sidebarContent,
                  children: (0, n.jsx)(em, {}),
              }),
          })
        : (0, n.jsx)("div", {
              className: eo.container,
              children: (0, n.jsx)(c.P3F, {
                  onClick: j.SO,
                  children: (0, n.jsxs)(x.ZP, {
                      className: i()(ec.headerBar, eo.mobileHeaderCollapsed),
                      toolbar: (0, n.jsx)(v.Z, { direction: v.Z.Directions.UP }),
                      children: [
                          (0, n.jsx)(x.ZP.Icon, {
                              icon: c.Ymb,
                              tooltip: "DevTools",
                          }),
                          (0, n.jsx)(x.ZP.Title, { children: "DevTools" }),
                      ],
                  }),
              }),
          });
}
function eh(e) {
    let { mobile: t, isPopout: a = !1 } = e;
    return t
        ? (0, n.jsx)(ep, {})
        : a
          ? (0, n.jsx)("div", {
                className: eo.popoutContainer,
                children: (0, n.jsx)(em, { isPopout: !0 }),
            })
          : (0, n.jsx)(ex, {});
}
