a.r(t), a.d(t, { default: () => eh }), a(539854), a(388685);
var n = a(951288),
    r = a(647438),
    l = a(120356),
    i = a.n(l),
    s = a(990547),
    o = a(442837),
    c = a(481060),
    d = a(347469),
    u = a(213609),
    m = a(213713),
    x = a(665149),
    h = a(611565),
    p = a(238246),
    v = a(788983),
    b = a(906467),
    f = a(259580),
    j = a(31336),
    g = a(19759),
    _ = a(432877);
a(381996);
var y = a(392750),
    C = a(926976),
    N = a(789654),
    O = a(719672),
    E = a(691867),
    T = a(916790),
    S = a(645973),
    P = a(903502),
    w = a(604776),
    I = a(912072),
    k = a(272193),
    R = a(685560),
    Z = a(735959),
    A = a(572444),
    D = a(636500),
    L = a(246992),
    M = a(484662),
    F = a(496025),
    U = a(442954),
    z = a(925124),
    B = a(633001),
    G = a(702904),
    V = a(178821),
    H = a(891401),
    W = a(958328),
    K = a(315384),
    X = a(107606),
    Y = a(514866),
    J = a(233807),
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
    eo = a(552883),
    ec = a(451429);
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
function eu(e) {
    var t;
    let { isPopout: a = !1 } = e,
        l = r.useMemo(() => {
            let e = [
                {
                    id: "analytics",
                    name: "Analytics",
                    group: el.v0.EXPERIMENTS,
                    render: () => (0, n.jsx)(C.Z, {}),
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
                    render: () => (0, n.jsx)(T.Z, {}),
                },
            ];
            return (
                b.Z.isDeveloper &&
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
                        render: () => (0, n.jsx)(Y.Z, {}),
                    }),
                    e.push({
                        id: "end_to_end_encryption",
                        name: "E2EE",
                        group: el.v0.DEVELOPMENT,
                        render: () => (0, n.jsx)(S.Z, {}),
                    }),
                    e.push({
                        id: "performance",
                        name: "Performance",
                        group: el.v0.DEVELOPMENT,
                        render: () => (0, n.jsx)(V.ZP, {}),
                    }),
                    e.push({
                        id: "feedback",
                        name: "Feedback",
                        group: el.v0.USERS,
                        render: () => (0, n.jsx)(P.Z, {}),
                    }),
                    e.push({
                        id: "overlay",
                        name: "Overlay v3",
                        group: el.v0.GAMES,
                        render: () => (0, n.jsx)(B.Z, {}),
                    }),
                    e.push({
                        id: "slayer_sdk",
                        name: "Slayer SDK",
                        group: el.v0.GAMES,
                        render: () => (0, n.jsx)(Q.Z, {}),
                    }),
                    e.push({
                        id: "quick_switcher",
                        name: "Quick Switcher",
                        group: el.v0.USERS,
                        render: () => (0, n.jsx)(J.Z, {}),
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
                    render: () => (0, n.jsx)(Z.Z, {}),
                }),
                e.push({
                    id: "colors",
                    name: "Colors",
                    group: el.v0.UI,
                    render: () => (0, n.jsx)(N.Z, {}),
                }),
                e.push({
                    id: "design_toggles",
                    name: "Design Toggles",
                    group: el.v0.UI,
                    render: () => (0, n.jsx)(E.Z, {}),
                }),
                e.push({
                    id: "appearance_randomizer",
                    name: "Appearance Randomizer",
                    group: el.v0.UI,
                    render: () => (0, n.jsx)(X.Z, {}),
                }),
                e.push({
                    id: "overlays",
                    name: "Dev Overlays",
                    group: el.v0.DEVELOPMENT,
                    render: () => (0, n.jsx)(I.Z, { devSettingsCategory: _.zU.OVERLAYS }),
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
                    render: () => (0, n.jsx)(I.Z, { devSettingsCategory: _.zU.REPORTING }),
                }),
                e.push({
                    id: "permissions",
                    name: "Permissions",
                    group: el.v0.USERS,
                    render: () => (0, n.jsx)(W.Z, {}),
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
                    render: () => (0, n.jsx)(y.Z, {}),
                }),
                e.push({
                    id: "widgets",
                    name: "Widgets",
                    group: el.v0.USERS,
                    render: () => (0, n.jsx)(en.Z, {}),
                }),
                b.Z.isDeveloper &&
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
                        render: () => (0, n.jsx)(h.Z, {}),
                    })),
                e.push({
                    id: "dcf",
                    name: "DCF",
                    group: el.v0.EXPERIMENTS,
                    render: () => (0, n.jsx)(O.Z, {}),
                }),
                e.push({
                    id: "perks",
                    name: "Perks",
                    group: el.v0.PREMIUM,
                    render: () => (0, n.jsx)(H.Z, {}),
                }),
                e.push({
                    id: "potions",
                    name: "Potions",
                    group: el.v0.PREMIUM,
                    render: () => (0, n.jsx)(K.Z, {}),
                }),
                window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                    (e.push({
                        id: "offers",
                        name: "Offers",
                        group: el.v0.PREMIUM,
                        render: () => (0, n.jsx)(z.Z, {}),
                    }),
                    e.push({
                        id: "payments",
                        name: "Payments",
                        group: el.v0.BILLING,
                        render: () => (0, n.jsx)(G.Z, {}),
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
                        render: () => (0, n.jsx)(w.Z, {}),
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
                    render: () => (0, n.jsx)(A.Z, {}),
                }),
                e.push({
                    id: "skill_trees",
                    name: "Skill Trees",
                    group: el.v0.GUILDS,
                    render: () => (0, n.jsx)(R.Z, {}),
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
            renderSelectedTab: o,
            selectedTabId: d,
        } = (0, el.ZP)(
            {
                tabs: l,
                initialSelectedTabId: null != (t = g.Z.lastOpenTabId) ? t : void 0,
                onChangeTab: (e) => {
                    (0, j.Qh)({ lastOpenTabId: e });
                },
            },
            [l],
        );
    return (
        (0, u.Z)({
            type: s.ImpressionTypes.PANE,
            name: s.ImpressionNames.VIEW_PANEL_DEVTOOLS,
            properties: { panel: d },
        }),
        (0, n.jsxs)(L.Gk, {
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
                                          (0, v.bA)(
                                              ei.KJ3.DEVTOOLS_POPOUT,
                                              () =>
                                                  (0, n.jsx)(p.Z, {
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
                o(),
                (0, n.jsx)(L.Br, { className: eo.layerContainer }),
            ],
        })
    );
}
function em() {
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
                      children: (0, n.jsx)(eu, {}),
                  }),
              ],
          });
}
function ex() {
    return (0, o.e7)([g.Z], () => g.Z.displayTools)
        ? (0, n.jsx)("div", {
              className: i()(eo.container, eo.mobileContainerExpanded),
              children: (0, n.jsx)("div", {
                  className: eo.sidebarContent,
                  children: (0, n.jsx)(eu, {}),
              }),
          })
        : (0, n.jsx)("div", {
              className: eo.container,
              children: (0, n.jsx)(c.P3F, {
                  onClick: j.SO,
                  children: (0, n.jsxs)(x.ZP, {
                      className: i()(ec.headerBar, eo.mobileHeaderCollapsed),
                      toolbar: (0, n.jsx)(f.Z, { direction: f.Z.Directions.UP }),
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
        ? (0, n.jsx)(ex, {})
        : a
          ? (0, n.jsx)("div", {
                className: eo.popoutContainer,
                children: (0, n.jsx)(eu, { isPopout: !0 }),
            })
          : (0, n.jsx)(em, {});
}
