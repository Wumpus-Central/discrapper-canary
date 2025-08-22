n.r(t), n.d(t, { default: () => eh }), n(539854), n(388685);
var a = n(951288),
    r = n(647438),
    l = n(120356),
    i = n.n(l),
    s = n(990547),
    o = n(442837),
    c = n(481060),
    d = n(347469),
    u = n(213609),
    m = n(213713),
    x = n(665149),
    h = n(611565),
    p = n(238246),
    f = n(788983),
    v = n(906467),
    b = n(259580),
    j = n(31336),
    g = n(19759),
    _ = n(432877);
n(381996);
var y = n(392750),
    C = n(926976),
    N = n(789654),
    E = n(719672),
    O = n(691867),
    T = n(916790),
    S = n(645973),
    P = n(903502),
    w = n(604776),
    k = n(912072),
    I = n(272193),
    R = n(685560),
    Z = n(735959),
    A = n(572444),
    D = n(636500),
    L = n(246992),
    M = n(484662),
    F = n(496025),
    U = n(442954),
    z = n(925124),
    B = n(633001),
    G = n(702904),
    V = n(178821),
    H = n(891401),
    W = n(958328),
    K = n(315384),
    X = n(107606),
    Y = n(514866),
    J = n(233807),
    q = n(763577),
    $ = n(384207),
    Q = n(264603),
    ee = n(678639),
    et = n(596768),
    en = n(56706),
    ea = n(820400),
    er = n(260950),
    el = n(621060),
    ei = n(981631),
    es = n(388032),
    eo = n(552883),
    ec = n(451429);
function ed(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: r } = e,
        l = (0, d.Z)({
            minDimension: g.h,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: r,
            orientation: d.y.HORIZONTAL_LEFT,
        });
    return (0, a.jsx)("div", {
        onMouseDown: l,
        className: eo.resizeHandle,
    });
}
function eu(e) {
    var t;
    let { isPopout: n = !1 } = e,
        l = r.useMemo(() => {
            let e = [
                {
                    id: "analytics",
                    name: "Analytics",
                    group: el.v0.EXPERIMENTS,
                    render: () => (0, a.jsx)(C.Z, {}),
                },
                {
                    id: "triggers",
                    name: "Triggers",
                    group: el.v0.EXPERIMENTS,
                    render: () => (0, a.jsx)(et.Z, {}),
                },
                {
                    id: "stores",
                    name: "Stores",
                    group: el.v0.EVENTS,
                    render: () => (0, a.jsx)(ee.Z, {}),
                },
                {
                    id: "dispatcher",
                    name: "Dispatcher",
                    group: el.v0.EVENTS,
                    render: () => (0, a.jsx)(T.Z, {}),
                },
            ];
            return (
                v.Z.isDeveloper &&
                    (e.push({
                        id: "shop",
                        name: "Shop",
                        group: el.v0.BILLING,
                        render: () => (0, a.jsx)($.C, {}),
                    }),
                    e.push({
                        id: "quick_actions",
                        name: "Quick Actions",
                        group: el.v0.DEVELOPMENT,
                        render: () => (0, a.jsx)(Y.Z, {}),
                    }),
                    e.push({
                        id: "end_to_end_encryption",
                        name: "E2EE",
                        group: el.v0.DEVELOPMENT,
                        render: () => (0, a.jsx)(S.Z, {}),
                    }),
                    e.push({
                        id: "performance",
                        name: "Performance",
                        group: el.v0.DEVELOPMENT,
                        render: () => (0, a.jsx)(V.ZP, {}),
                    }),
                    e.push({
                        id: "feedback",
                        name: "Feedback",
                        group: el.v0.USERS,
                        render: () => (0, a.jsx)(P.Z, {}),
                    }),
                    e.push({
                        id: "overlay",
                        name: "Overlay v3",
                        group: el.v0.GAMES,
                        render: () => (0, a.jsx)(B.Z, {}),
                    }),
                    e.push({
                        id: "slayer_sdk",
                        name: "Slayer SDK",
                        group: el.v0.GAMES,
                        render: () => (0, a.jsx)(Q.Z, {}),
                    }),
                    e.push({
                        id: "quick_switcher",
                        name: "Quick Switcher",
                        group: el.v0.USERS,
                        render: () => (0, a.jsx)(J.Z, {}),
                    })),
                e.push({
                    id: "rive",
                    name: "Rive",
                    group: el.v0.UI,
                    render: () => (0, a.jsx)(q.Z, {}),
                }),
                e.push({
                    id: "intl",
                    name: "Intl",
                    group: el.v0.UI,
                    render: () => (0, a.jsx)(Z.Z, {}),
                }),
                e.push({
                    id: "colors",
                    name: "Colors",
                    group: el.v0.UI,
                    render: () => (0, a.jsx)(N.Z, {}),
                }),
                e.push({
                    id: "design_toggles",
                    name: "Design Toggles",
                    group: el.v0.UI,
                    render: () => (0, a.jsx)(O.Z, {}),
                }),
                e.push({
                    id: "appearance_randomizer",
                    name: "Appearance Randomizer",
                    group: el.v0.UI,
                    render: () => (0, a.jsx)(X.Z, {}),
                }),
                e.push({
                    id: "overlays",
                    name: "Dev Overlays",
                    group: el.v0.DEVELOPMENT,
                    render: () => (0, a.jsx)(k.Z, { devSettingsCategory: _.zU.OVERLAYS }),
                }),
                e.push({
                    id: "messaging",
                    name: "Messaging",
                    group: el.v0.USERS,
                    render: () => (0, a.jsx)(F.Z, {}),
                }),
                e.push({
                    id: "reporting",
                    name: "Reporting",
                    group: el.v0.EXPERIMENTS,
                    render: () => (0, a.jsx)(k.Z, { devSettingsCategory: _.zU.REPORTING }),
                }),
                e.push({
                    id: "permissions",
                    name: "Permissions",
                    group: el.v0.USERS,
                    render: () => (0, a.jsx)(W.Z, {}),
                }),
                e.push({
                    id: "modals",
                    name: "Modals",
                    group: el.v0.UI,
                    render: () => (0, a.jsx)(U.Z, {}),
                }),
                e.push({
                    id: "layers",
                    name: "Layers",
                    group: el.v0.UI,
                    render: () => (0, a.jsx)(M.Z, {}),
                }),
                e.push({
                    id: "affinity",
                    name: "Affinity",
                    group: el.v0.USERS,
                    render: () => (0, a.jsx)(y.Z, {}),
                }),
                e.push({
                    id: "widgets",
                    name: "Widgets",
                    group: el.v0.USERS,
                    render: () => (0, a.jsx)(ea.Z, {}),
                }),
                v.Z.isDeveloper &&
                    (e.push({
                        id: "content_inventory",
                        name: "Content Inventory",
                        group: el.v0.USERS,
                        render: () => (0, a.jsx)(m.Z, {}),
                    }),
                    e.push({
                        id: "notifications_inbox",
                        name: "Notifications Inbox",
                        group: el.v0.USERS,
                        render: () => (0, a.jsx)(h.Z, {}),
                    })),
                e.push({
                    id: "dcf",
                    name: "DCF",
                    group: el.v0.EXPERIMENTS,
                    render: () => (0, a.jsx)(E.Z, {}),
                }),
                e.push({
                    id: "perks",
                    name: "Perks",
                    group: el.v0.PREMIUM,
                    render: () => (0, a.jsx)(H.Z, {}),
                }),
                e.push({
                    id: "potions",
                    name: "Potions",
                    group: el.v0.PREMIUM,
                    render: () => (0, a.jsx)(K.Z, {}),
                }),
                window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                    (e.push({
                        id: "offers",
                        name: "Offers",
                        group: el.v0.PREMIUM,
                        render: () => (0, a.jsx)(z.Z, {}),
                    }),
                    e.push({
                        id: "payments",
                        name: "Payments",
                        group: el.v0.BILLING,
                        render: () => (0, a.jsx)(G.Z, {}),
                    }),
                    e.push({
                        id: "subscriptions",
                        name: "Subscriptions",
                        group: el.v0.PREMIUM,
                        render: () => (0, a.jsx)(er.Z, {}),
                    }),
                    e.push({
                        id: "fractional_nitro",
                        name: "Fractional Nitro",
                        group: el.v0.PREMIUM,
                        render: () => (0, a.jsx)(w.Z, {}),
                    })),
                e.push({
                    id: "gifting_intent",
                    name: "Gifting Intent",
                    group: el.v0.PREMIUM,
                    render: () => (0, a.jsx)(I.Z, {}),
                }),
                e.push({
                    id: "voice_filters",
                    name: "Voice Filters",
                    group: el.v0.AUDIO_VIDEO,
                    render: () => (0, a.jsx)(en.Z, {}),
                }),
                e.push({
                    id: "krisp_tester",
                    name: "Krisp Tester",
                    group: el.v0.AUDIO_VIDEO,
                    render: () => (0, a.jsx)(A.Z, {}),
                }),
                e.push({
                    id: "skill_trees",
                    name: "Skill Trees",
                    group: el.v0.GUILDS,
                    render: () => (0, a.jsx)(R.Z, {}),
                }),
                e.push({
                    id: "language",
                    name: "Language",
                    group: el.v0.UI,
                    render: () => (0, a.jsx)(D.Z, {}),
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
        (0, a.jsxs)(L.Gk, {
            children: [
                (0, a.jsxs)(x.ZP, {
                    className: ec.headerBar,
                    toolbar: n
                        ? null
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(x.ZP.Icon, {
                                      icon: c.rgF,
                                      tooltip: "Pop Out",
                                      onClick: () => {
                                          (0, f.bA)(
                                              ei.KJ3.DEVTOOLS_POPOUT,
                                              () =>
                                                  (0, a.jsx)(p.Z, {
                                                      windowKey: ei.KJ3.DEVTOOLS_POPOUT,
                                                      title: "DevTools",
                                                      withTitleBar: !0,
                                                      children: (0, a.jsx)(eh, {
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
                                  (0, a.jsx)(x.ZP.Icon, {
                                      icon: c.Dio,
                                      tooltip: es.intl.string(es.t.cpT0Cg),
                                      onClick: j.SO,
                                  }),
                              ],
                          }),
                    children: [
                        (0, a.jsx)(x.ZP.Icon, {
                            icon: c.Ymb,
                            tooltip: "DevTools",
                        }),
                        (0, a.jsx)(x.ZP.Title, { children: "DevTools" }),
                    ],
                }),
                (0, a.jsx)(i, {}),
                o(),
                (0, a.jsx)(L.Br, { className: eo.layerContainer }),
            ],
        })
    );
}
function em() {
    let e = r.useRef(null),
        t = (0, o.e7)([g.Z], () => g.Z.sidebarWidth),
        [n, l] = r.useState(null),
        i = r.useCallback((e) => (0, j.Qh)({ sidebarWidth: e }), []);
    return (r.useEffect(() => {
        null === n && null !== t && l(t);
    }, [t, n]),
    null === n)
        ? null
        : (0, a.jsxs)("div", {
              ref: e,
              className: eo.container,
              style: {
                  minWidth: g.h,
                  width: n,
              },
              "data-app-right-panel": !0,
              children: [
                  (0, a.jsx)(ed, {
                      resizableNode: e,
                      onResize: l,
                      onResizeEnd: i,
                  }),
                  (0, a.jsx)("div", {
                      className: eo.sidebarContent,
                      children: (0, a.jsx)(eu, {}),
                  }),
              ],
          });
}
function ex() {
    return (0, o.e7)([g.Z], () => g.Z.displayTools)
        ? (0, a.jsx)("div", {
              className: i()(eo.container, eo.mobileContainerExpanded),
              children: (0, a.jsx)("div", {
                  className: eo.sidebarContent,
                  children: (0, a.jsx)(eu, {}),
              }),
          })
        : (0, a.jsx)("div", {
              className: eo.container,
              children: (0, a.jsx)(c.P3F, {
                  onClick: j.SO,
                  children: (0, a.jsxs)(x.ZP, {
                      className: i()(ec.headerBar, eo.mobileHeaderCollapsed),
                      toolbar: (0, a.jsx)(b.Z, { direction: b.Z.Directions.UP }),
                      children: [
                          (0, a.jsx)(x.ZP.Icon, {
                              icon: c.Ymb,
                              tooltip: "DevTools",
                          }),
                          (0, a.jsx)(x.ZP.Title, { children: "DevTools" }),
                      ],
                  }),
              }),
          });
}
function eh(e) {
    let { mobile: t, isPopout: n = !1 } = e;
    return t
        ? (0, a.jsx)(ex, {})
        : n
          ? (0, a.jsx)("div", {
                className: eo.popoutContainer,
                children: (0, a.jsx)(eu, { isPopout: !0 }),
            })
          : (0, a.jsx)(em, {});
}
