n.r(t), n.d(t, { default: () => ex }), n(539854), n(388685);
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
    h = n(665149),
    p = n(611565),
    x = n(238246),
    b = n(788983),
    f = n(906467),
    g = n(259580),
    v = n(31336),
    j = n(19759),
    _ = n(432877);
n(381996);
var y = n(392750),
    C = n(926976),
    N = n(789654),
    E = n(719672),
    T = n(691867),
    O = n(916790),
    S = n(645973),
    P = n(903502),
    k = n(604776),
    R = n(912072),
    w = n(272193),
    I = n(685560),
    Z = n(735959),
    A = n(572444),
    D = n(636500),
    L = n(246992),
    M = n(484662),
    U = n(546895),
    F = n(496025),
    G = n(442954),
    z = n(925124),
    B = n(633001),
    V = n(702904),
    H = n(178821),
    W = n(891401),
    K = n(958328),
    q = n(315384),
    Y = n(107606),
    X = n(514866),
    J = n(233807),
    $ = n(763577),
    Q = n(384207),
    ee = n(264603),
    et = n(678639),
    en = n(596768),
    ea = n(56706),
    er = n(820400),
    el = n(260950),
    ei = n(621060),
    es = n(981631),
    eo = n(388032),
    ec = n(246984),
    ed = n(866403);
function eu(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: r } = e,
        l = (0, d.Z)({
            minDimension: j.h,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: r,
            orientation: d.y.HORIZONTAL_LEFT,
        });
    return (0, a.jsx)("div", {
        onMouseDown: l,
        className: ec.resizeHandle,
    });
}
function em(e) {
    var t;
    let { isPopout: n = !1 } = e,
        l = r.useMemo(() => {
            let e = [
                {
                    id: "analytics",
                    name: "Analytics",
                    group: ei.v0.EXPERIMENTS,
                    render: () => (0, a.jsx)(C.Z, {}),
                },
                {
                    id: "triggers",
                    name: "Triggers",
                    group: ei.v0.EXPERIMENTS,
                    render: () => (0, a.jsx)(en.Z, {}),
                },
                {
                    id: "stores",
                    name: "Stores",
                    group: ei.v0.EVENTS,
                    render: () => (0, a.jsx)(et.Z, {}),
                },
                {
                    id: "dispatcher",
                    name: "Dispatcher",
                    group: ei.v0.EVENTS,
                    render: () => (0, a.jsx)(O.Z, {}),
                },
            ];
            return (
                f.Z.isDeveloper &&
                    (e.push({
                        id: "shop",
                        name: "Shop",
                        group: ei.v0.BILLING,
                        render: () => (0, a.jsx)(Q.C, {}),
                    }),
                    e.push({
                        id: "quick_actions",
                        name: "Quick Actions",
                        group: ei.v0.DEVELOPMENT,
                        render: () => (0, a.jsx)(X.Z, {}),
                    }),
                    e.push({
                        id: "end_to_end_encryption",
                        name: "E2EE",
                        group: ei.v0.DEVELOPMENT,
                        render: () => (0, a.jsx)(S.Z, {}),
                    }),
                    e.push({
                        id: "performance",
                        name: "Performance",
                        group: ei.v0.DEVELOPMENT,
                        render: () => (0, a.jsx)(H.ZP, {}),
                    }),
                    e.push({
                        id: "feedback",
                        name: "Feedback",
                        group: ei.v0.USERS,
                        render: () => (0, a.jsx)(P.Z, {}),
                    }),
                    e.push({
                        id: "overlay",
                        name: "Overlay v3",
                        group: ei.v0.GAMES,
                        render: () => (0, a.jsx)(B.Z, {}),
                    }),
                    e.push({
                        id: "slayer_sdk",
                        name: "Slayer SDK",
                        group: ei.v0.GAMES,
                        render: () => (0, a.jsx)(ee.Z, {}),
                    }),
                    e.push({
                        id: "quick_switcher",
                        name: "Quick Switcher",
                        group: ei.v0.USERS,
                        render: () => (0, a.jsx)(J.Z, {}),
                    })),
                e.push({
                    id: "rive",
                    name: "Rive",
                    group: ei.v0.UI,
                    render: () => (0, a.jsx)($.Z, {}),
                }),
                e.push({
                    id: "lottie",
                    name: "Lottie",
                    group: ei.v0.UI,
                    render: () => (0, a.jsx)(U.Z, {}),
                }),
                e.push({
                    id: "intl",
                    name: "Intl",
                    group: ei.v0.UI,
                    render: () => (0, a.jsx)(Z.Z, {}),
                }),
                e.push({
                    id: "colors",
                    name: "Colors",
                    group: ei.v0.UI,
                    render: () => (0, a.jsx)(N.Z, {}),
                }),
                e.push({
                    id: "design_toggles",
                    name: "Design Toggles",
                    group: ei.v0.UI,
                    render: () => (0, a.jsx)(T.Z, {}),
                }),
                e.push({
                    id: "appearance_randomizer",
                    name: "Appearance Randomizer",
                    group: ei.v0.UI,
                    render: () => (0, a.jsx)(Y.Z, {}),
                }),
                e.push({
                    id: "overlays",
                    name: "Dev Overlays",
                    group: ei.v0.DEVELOPMENT,
                    render: () => (0, a.jsx)(R.Z, { devSettingsCategory: _.zU.OVERLAYS }),
                }),
                e.push({
                    id: "messaging",
                    name: "Messaging",
                    group: ei.v0.USERS,
                    render: () => (0, a.jsx)(F.Z, {}),
                }),
                e.push({
                    id: "reporting",
                    name: "Reporting",
                    group: ei.v0.EXPERIMENTS,
                    render: () => (0, a.jsx)(R.Z, { devSettingsCategory: _.zU.REPORTING }),
                }),
                e.push({
                    id: "permissions",
                    name: "Permissions",
                    group: ei.v0.USERS,
                    render: () => (0, a.jsx)(K.Z, {}),
                }),
                e.push({
                    id: "modals",
                    name: "Modals",
                    group: ei.v0.UI,
                    render: () => (0, a.jsx)(G.Z, {}),
                }),
                e.push({
                    id: "layers",
                    name: "Layers",
                    group: ei.v0.UI,
                    render: () => (0, a.jsx)(M.Z, {}),
                }),
                e.push({
                    id: "affinity",
                    name: "Affinity",
                    group: ei.v0.USERS,
                    render: () => (0, a.jsx)(y.Z, {}),
                }),
                e.push({
                    id: "widgets",
                    name: "Widgets",
                    group: ei.v0.USERS,
                    render: () => (0, a.jsx)(er.Z, {}),
                }),
                f.Z.isDeveloper &&
                    (e.push({
                        id: "content_inventory",
                        name: "Content Inventory",
                        group: ei.v0.USERS,
                        render: () => (0, a.jsx)(m.Z, {}),
                    }),
                    e.push({
                        id: "notifications_inbox",
                        name: "Notifications Inbox",
                        group: ei.v0.USERS,
                        render: () => (0, a.jsx)(p.Z, {}),
                    })),
                e.push({
                    id: "dcf",
                    name: "DCF",
                    group: ei.v0.EXPERIMENTS,
                    render: () => (0, a.jsx)(E.Z, {}),
                }),
                e.push({
                    id: "perks",
                    name: "Perks",
                    group: ei.v0.PREMIUM,
                    render: () => (0, a.jsx)(W.Z, {}),
                }),
                e.push({
                    id: "potions",
                    name: "Potions",
                    group: ei.v0.PREMIUM,
                    render: () => (0, a.jsx)(q.Z, {}),
                }),
                window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                    (e.push({
                        id: "offers",
                        name: "Offers",
                        group: ei.v0.PREMIUM,
                        render: () => (0, a.jsx)(z.Z, {}),
                    }),
                    e.push({
                        id: "payments",
                        name: "Payments",
                        group: ei.v0.BILLING,
                        render: () => (0, a.jsx)(V.Z, {}),
                    }),
                    e.push({
                        id: "subscriptions",
                        name: "Subscriptions",
                        group: ei.v0.PREMIUM,
                        render: () => (0, a.jsx)(el.Z, {}),
                    }),
                    e.push({
                        id: "fractional_nitro",
                        name: "Fractional Nitro",
                        group: ei.v0.PREMIUM,
                        render: () => (0, a.jsx)(k.Z, {}),
                    })),
                e.push({
                    id: "gifting_intent",
                    name: "Gifting Intent",
                    group: ei.v0.PREMIUM,
                    render: () => (0, a.jsx)(w.Z, {}),
                }),
                e.push({
                    id: "voice_filters",
                    name: "Voice Filters",
                    group: ei.v0.AUDIO_VIDEO,
                    render: () => (0, a.jsx)(ea.Z, {}),
                }),
                e.push({
                    id: "krisp_tester",
                    name: "Krisp Tester",
                    group: ei.v0.AUDIO_VIDEO,
                    render: () => (0, a.jsx)(A.Z, {}),
                }),
                e.push({
                    id: "skill_trees",
                    name: "Skill Trees",
                    group: ei.v0.GUILDS,
                    render: () => (0, a.jsx)(I.Z, {}),
                }),
                e.push({
                    id: "language",
                    name: "Language",
                    group: ei.v0.UI,
                    render: () => (0, a.jsx)(D.Z, {}),
                }),
                e
            );
        }, []),
        {
            TabBar: i,
            renderSelectedTab: o,
            selectedTabId: d,
        } = (0, ei.ZP)(
            {
                tabs: l,
                initialSelectedTabId: null != (t = j.Z.lastOpenTabId) ? t : void 0,
                onChangeTab: (e) => {
                    (0, v.Qh)({ lastOpenTabId: e });
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
                (0, a.jsxs)(h.ZP, {
                    className: ed.headerBar,
                    toolbar: n
                        ? null
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(h.ZP.Icon, {
                                      icon: c.rgF,
                                      tooltip: "Pop Out",
                                      onClick: () => {
                                          (0, b.bA)(
                                              es.KJ3.DEVTOOLS_POPOUT,
                                              () =>
                                                  (0, a.jsx)(x.Z, {
                                                      windowKey: es.KJ3.DEVTOOLS_POPOUT,
                                                      title: "DevTools",
                                                      withTitleBar: !0,
                                                      children: (0, a.jsx)(ex, {
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
                                  (0, a.jsx)(h.ZP.Icon, {
                                      icon: c.Dio,
                                      tooltip: eo.intl.string(eo.t.cpT0Cg),
                                      onClick: v.SO,
                                  }),
                              ],
                          }),
                    children: [
                        (0, a.jsx)(h.ZP.Icon, {
                            icon: c.Ymb,
                            tooltip: "DevTools",
                        }),
                        (0, a.jsx)(h.ZP.Title, { children: "DevTools" }),
                    ],
                }),
                (0, a.jsx)(i, {}),
                o(),
                (0, a.jsx)(L.Br, { className: ec.layerContainer }),
            ],
        })
    );
}
function eh() {
    let e = r.useRef(null),
        t = (0, o.e7)([j.Z], () => j.Z.sidebarWidth),
        [n, l] = r.useState(null),
        i = r.useCallback((e) => (0, v.Qh)({ sidebarWidth: e }), []);
    return (r.useEffect(() => {
        null === n && null !== t && l(t);
    }, [t, n]),
    null === n)
        ? null
        : (0, a.jsxs)("div", {
              ref: e,
              className: ec.container,
              style: {
                  minWidth: j.h,
                  width: n,
              },
              "data-app-right-panel": !0,
              children: [
                  (0, a.jsx)(eu, {
                      resizableNode: e,
                      onResize: l,
                      onResizeEnd: i,
                  }),
                  (0, a.jsx)("div", {
                      className: ec.sidebarContent,
                      children: (0, a.jsx)(em, {}),
                  }),
              ],
          });
}
function ep() {
    return (0, o.e7)([j.Z], () => j.Z.displayTools)
        ? (0, a.jsx)("div", {
              className: i()(ec.container, ec.mobileContainerExpanded),
              children: (0, a.jsx)("div", {
                  className: ec.sidebarContent,
                  children: (0, a.jsx)(em, {}),
              }),
          })
        : (0, a.jsx)("div", {
              className: ec.container,
              children: (0, a.jsx)(c.P3F, {
                  onClick: v.SO,
                  children: (0, a.jsxs)(h.ZP, {
                      className: i()(ed.headerBar, ec.mobileHeaderCollapsed),
                      toolbar: (0, a.jsx)(g.Z, { direction: g.Z.Directions.UP }),
                      children: [
                          (0, a.jsx)(h.ZP.Icon, {
                              icon: c.Ymb,
                              tooltip: "DevTools",
                          }),
                          (0, a.jsx)(h.ZP.Title, { children: "DevTools" }),
                      ],
                  }),
              }),
          });
}
function ex(e) {
    let { mobile: t, isPopout: n = !1 } = e;
    return t
        ? (0, a.jsx)(ep, {})
        : n
          ? (0, a.jsx)("div", {
                className: ec.popoutContainer,
                children: (0, a.jsx)(em, { isPopout: !0 }),
            })
          : (0, a.jsx)(eh, {});
}
