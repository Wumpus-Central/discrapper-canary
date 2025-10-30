n.r(t),
    n.d(t, {
        default: () => ek,
        openDevToolsPopout: () => eN,
        useDevToolsTabConfig: () => eT,
    }),
    n(539854),
    n(388685);
var a = n(951288),
    r = n(647438),
    l = n(120356),
    i = n.n(l),
    o = n(990547),
    s = n(442837),
    c = n(481060),
    d = n(347469),
    u = n(213609),
    m = n(680004),
    p = n(879434),
    h = n(213713),
    x = n(665149),
    g = n(611565),
    f = n(238246),
    b = n(788983),
    v = n(36243),
    j = n(51415),
    _ = n(906467),
    y = n(259580),
    C = n(31336),
    S = n(19759),
    E = n(432877);
n(381996);
var T = n(392750),
    O = n(926976),
    N = n(789654),
    P = n(866730),
    I = n(582344),
    w = n(691867),
    k = n(916790),
    R = n(645973),
    A = n(903502),
    D = n(604776),
    Z = n(895182),
    L = n(912072),
    M = n(691175),
    U = n(272193),
    B = n(685560),
    F = n(698901),
    G = n(735959),
    H = n(572444),
    z = n(636500),
    V = n(246992),
    W = n(484662),
    K = n(546895),
    q = n(496025),
    Y = n(442954),
    J = n(925124),
    X = n(633001),
    Q = n(778648),
    $ = n(702904),
    ee = n(178821),
    et = n(891401),
    en = n(958328),
    ea = n(315384),
    er = n(107606),
    el = n(514866),
    ei = n(763577),
    eo = n(384207),
    es = n(264603),
    ec = n(678639),
    ed = n(596768),
    eu = n(581302),
    em = n(56706),
    ep = n(512313),
    eh = n(820400),
    ex = n(200178),
    eg = n(260950),
    ef = n(63954),
    eb = n(569157),
    ev = n(490007),
    ej = n(621060),
    e_ = n(981631),
    ey = n(46140),
    eC = n(388032),
    eS = n(552883),
    eE = n(451429);
function eT() {
    return r.useMemo(() => {
        let e = [
            {
                id: "analytics",
                name: "Analytics",
                group: ej.v0.EXPERIMENTS,
                render: () => (0, a.jsx)(O.Z, {}),
            },
            {
                id: "triggers",
                name: "Triggers",
                group: ej.v0.EXPERIMENTS,
                render: () => (0, a.jsx)(ed.Z, {}),
            },
            {
                id: "stores",
                name: "Stores",
                group: ej.v0.EVENTS,
                render: () => (0, a.jsx)(ec.Z, {}),
            },
            {
                id: "dispatcher",
                name: "Dispatcher",
                group: ej.v0.EVENTS,
                render: () => (0, a.jsx)(k.Z, {}),
            },
        ];
        return (
            _.Z.isDeveloper &&
                (e.push({
                    id: "shop",
                    name: "Shop",
                    group: ej.v0.BILLING,
                    render: () => (0, a.jsx)(eo.C, {}),
                }),
                e.push({
                    id: "payment_flow_modals",
                    name: "Payment Flow Modals",
                    group: ej.v0.BILLING,
                    render: () => (0, a.jsx)(Q.Z, {}),
                }),
                e.push({
                    id: "shop_collectibles",
                    name: "Shop Collectibles",
                    group: ej.v0.BILLING,
                    render: () => (0, a.jsx)(p.Z, {}),
                }),
                e.push({
                    id: "quick_actions",
                    name: "Quick Actions",
                    group: ej.v0.DEVELOPMENT,
                    render: () => (0, a.jsx)(el.Z, {}),
                }),
                e.push({
                    id: "end_to_end_encryption",
                    name: "E2EE",
                    group: ej.v0.DEVELOPMENT,
                    render: () => (0, a.jsx)(R.Z, {}),
                }),
                e.push({
                    id: "performance",
                    name: "Performance",
                    group: ej.v0.DEVELOPMENT,
                    render: () => (0, a.jsx)(ee.ZP, {}),
                }),
                e.push({
                    id: "feedback",
                    name: "Feedback",
                    group: ej.v0.USERS,
                    render: () => (0, a.jsx)(A.Z, {}),
                }),
                e.push({
                    id: "overlay",
                    name: "Overlay v3",
                    group: ej.v0.GAMES,
                    render: () => (0, a.jsx)(X.Z, {}),
                }),
                e.push({
                    id: "generated_test_user",
                    name: "Generated Test Users",
                    group: ej.v0.DEVELOPMENT,
                    render: () => (0, a.jsx)(M.Z, {}),
                }),
                e.push({
                    id: "slayer_sdk",
                    name: "Slayer SDK",
                    group: ej.v0.GAMES,
                    render: () => (0, a.jsx)(es.Z, {}),
                }),
                e.push({
                    id: "quick_switcher",
                    name: "Quick Switcher",
                    group: ej.v0.USERS,
                    render: () => (0, a.jsx)(eb.Z, {}),
                }),
                e.push({
                    id: "clips",
                    name: "Clips",
                    group: ej.v0.AUDIO_VIDEO,
                    render: () => (0, a.jsx)(m.Z, {}),
                })),
            e.push({
                id: "rive",
                name: "Rive",
                group: ej.v0.UI,
                render: () => (0, a.jsx)(ei.Z, {}),
            }),
            e.push({
                id: "lottie",
                name: "Lottie",
                group: ej.v0.UI,
                render: () => (0, a.jsx)(K.Z, {}),
            }),
            e.push({
                id: "intl",
                name: "Intl",
                group: ej.v0.UI,
                render: () => (0, a.jsx)(G.Z, {}),
            }),
            e.push({
                id: "colors",
                name: "Colors",
                group: ej.v0.UI,
                render: () => (0, a.jsx)(N.Z, {}),
            }),
            e.push({
                id: "design_toggles",
                name: "Design Toggles",
                group: ej.v0.UI,
                render: () => (0, a.jsx)(w.Z, {}),
            }),
            e.push({
                id: "appearance_randomizer",
                name: "Appearance Randomizer",
                group: ej.v0.UI,
                render: () => (0, a.jsx)(er.Z, {}),
            }),
            e.push({
                id: "overlays",
                name: "Dev Overlays",
                group: ej.v0.DEVELOPMENT,
                render: () => (0, a.jsx)(L.Z, { devSettingsCategory: E.zU.OVERLAYS }),
            }),
            e.push({
                id: "messaging",
                name: "Messaging",
                group: ej.v0.USERS,
                render: () => (0, a.jsx)(q.Z, {}),
            }),
            e.push({
                id: "reporting",
                name: "Reporting",
                group: ej.v0.EXPERIMENTS,
                render: () => (0, a.jsx)(L.Z, { devSettingsCategory: E.zU.REPORTING }),
            }),
            e.push({
                id: "permissions",
                name: "Permissions",
                group: ej.v0.USERS,
                render: () => (0, a.jsx)(en.Z, {}),
            }),
            e.push({
                id: "modals",
                name: "Modals",
                group: ej.v0.UI,
                render: () => (0, a.jsx)(Y.Z, {}),
            }),
            e.push({
                id: "layers",
                name: "Layers",
                group: ej.v0.UI,
                render: () => (0, a.jsx)(W.Z, {}),
            }),
            e.push({
                id: "affinity",
                name: "Affinity",
                group: ej.v0.USERS,
                render: () => (0, a.jsx)(T.Z, {}),
            }),
            e.push({
                id: "widgets",
                name: "Widgets",
                group: ej.v0.USERS,
                render: () => (0, a.jsx)(eh.Z, {}),
            }),
            _.Z.isDeveloper &&
                (e.push({
                    id: "content_inventory",
                    name: "Content Inventory",
                    group: ej.v0.USERS,
                    render: () => (0, a.jsx)(h.Z, {}),
                }),
                e.push({
                    id: "notifications_inbox",
                    name: "Notifications Inbox",
                    group: ej.v0.USERS,
                    render: () => (0, a.jsx)(g.Z, {}),
                })),
            e.push({
                id: "dismissible_content",
                name: "DCF Overrides",
                group: ej.v0.DISMISSIBLE_CONTENT,
                render: () => (0, a.jsx)(I.Z, {}),
            }),
            e.push({
                id: "dcf",
                name: "DCF Events",
                group: ej.v0.DISMISSIBLE_CONTENT,
                render: () => (0, a.jsx)(P.Z, {}),
            }),
            e.push({
                id: "hotspots",
                name: "Hotspots",
                group: ej.v0.EXPERIMENTS,
                render: () => (0, a.jsx)(F.Z, {}),
            }),
            e.push({
                id: "perks",
                name: "Perks",
                group: ej.v0.PREMIUM,
                render: () => (0, a.jsx)(et.Z, {}),
            }),
            e.push({
                id: "potions",
                name: "Potions",
                group: ej.v0.PREMIUM,
                render: () => (0, a.jsx)(ea.Z, {}),
            }),
            window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                (e.push({
                    id: "offers",
                    name: "Offers",
                    group: ej.v0.PREMIUM,
                    render: () => (0, a.jsx)(J.Z, {}),
                }),
                e.push({
                    id: "payments",
                    name: "Payments",
                    group: ej.v0.BILLING,
                    render: () => (0, a.jsx)($.Z, {}),
                }),
                e.push({
                    id: "subscriptions",
                    name: "Subscriptions",
                    group: ej.v0.PREMIUM,
                    render: () => (0, a.jsx)(eg.Z, {}),
                }),
                e.push({
                    id: "fractional_nitro",
                    name: "Fractional Nitro",
                    group: ej.v0.PREMIUM,
                    render: () => (0, a.jsx)(D.Z, {}),
                })),
            e.push({
                id: "gifting_intent",
                name: "Gifting Intent",
                group: ej.v0.PREMIUM,
                render: () => (0, a.jsx)(U.Z, {}),
            }),
            e.push({
                id: "voice_filters",
                name: "Voice Filters",
                group: ej.v0.AUDIO_VIDEO,
                render: () => (0, a.jsx)(em.Z, {}),
            }),
            e.push({
                id: "krisp_tester",
                name: "Krisp Tester",
                group: ej.v0.AUDIO_VIDEO,
                render: () => (0, a.jsx)(H.Z, {}),
            }),
            e.push({
                id: "skill_trees",
                name: "Skill Trees",
                group: ej.v0.BOOSTING,
                render: () => (0, a.jsx)(B.Z, {}),
            }),
            e.push({
                id: "game_server",
                name: "Game Server",
                group: ej.v0.BOOSTING,
                render: () => (0, a.jsx)(Z.Z, {}),
            }),
            e.push({
                id: "language",
                name: "Language",
                group: ej.v0.UI,
                render: () => (0, a.jsx)(z.Z, {}),
            }),
            e.push({
                id: "word_frequency",
                name: "Word Frequency",
                group: ej.v0.DEVELOPMENT,
                render: () => (0, a.jsx)(ex.Z, {}),
            }),
            e.push({
                id: "web_setting_tree",
                name: "Web Setting Tree",
                group: ej.v0.DEVELOPMENT,
                render: () => (0, a.jsx)(ep.Z, {}),
            }),
            e.push({
                id: "quest_minor_reward_capping_config",
                name: "Minor Reward Capping",
                group: ej.v0.QUESTS,
                render: () => (0, a.jsx)(j.Z, {}),
            }),
            e.push({
                id: "virtual_currency_config",
                name: "Virtual Currency Config",
                group: ej.v0.QUESTS,
                render: () => (0, a.jsx)(eu.Z, {}),
            }),
            e.push({
                id: "Revenue Storybook",
                name: "Revenue Storybook",
                group: ej.v0.BILLING,
                render: () => (0, a.jsx)(ev.Z, {}),
            }),
            (0, v.X)({ location: ey.dr.QUEST_PREVIEW_TOOL }) &&
                e.push({
                    id: "quest_preview",
                    name: "Quest Preview",
                    group: ej.v0.QUESTS,
                    render: () => (0, a.jsx)(ef.Z, {}),
                }),
            e
        );
    }, []);
}
function eO(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: r } = e,
        l = (0, d.Z)({
            minDimension: S.h,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: r,
            orientation: d.y.HORIZONTAL_LEFT,
        });
    return (0, a.jsx)("div", {
        onMouseDown: l,
        className: eS.resizeHandle,
    });
}
function eN() {
    (0, b.bA)(
        e_.KJ3.DEVTOOLS_POPOUT,
        () =>
            (0, a.jsx)(f.Z, {
                windowKey: e_.KJ3.DEVTOOLS_POPOUT,
                title: "DevTools",
                withTitleBar: !0,
                children: (0, a.jsx)(ek, {
                    mobile: !1,
                    isPopout: !0,
                }),
            }),
        {
            width: 800,
            height: 600,
        },
    );
}
function eP(e) {
    var t;
    let { isPopout: n = !1 } = e,
        r = eT(),
        {
            TabBar: l,
            renderSelectedTab: i,
            selectedTabId: s,
        } = (0, ej.ZP)(
            {
                tabs: r,
                initialSelectedTabId: null != (t = S.Z.lastOpenTabId) ? t : void 0,
                onChangeTab: (e) => {
                    (0, C.Qh)({ lastOpenTabId: e });
                },
            },
            [r],
        );
    return (
        (0, u.Z)({
            type: o.ImpressionTypes.PANE,
            name: o.ImpressionNames.VIEW_PANEL_DEVTOOLS,
            properties: { panel: s },
        }),
        (0, a.jsxs)(V.Gk, {
            children: [
                (0, a.jsxs)(x.ZP, {
                    className: eE.headerBar,
                    toolbar: n
                        ? null
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(x.ZP.Icon, {
                                      icon: c.rgF,
                                      tooltip: "Pop Out",
                                      onClick: eN,
                                  }),
                                  (0, a.jsx)(x.ZP.Icon, {
                                      icon: c.Dio,
                                      tooltip: eC.intl.string(eC.t.cpT0Cq),
                                      onClick: C.SO,
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
                (0, a.jsx)(l, {}),
                i(),
                (0, a.jsx)(V.Br, { className: eS.layerContainer }),
            ],
        })
    );
}
function eI() {
    let e = r.useRef(null),
        t = (0, s.e7)([S.Z], () => S.Z.sidebarWidth),
        [n, l] = r.useState(null),
        i = r.useCallback((e) => (0, C.Qh)({ sidebarWidth: e }), []);
    return (r.useEffect(() => {
        null === n && null !== t && l(t);
    }, [t, n]),
    null === n)
        ? null
        : (0, a.jsxs)("div", {
              ref: e,
              className: eS.container,
              style: {
                  minWidth: S.h,
                  width: n,
              },
              "data-app-right-panel": !0,
              children: [
                  (0, a.jsx)(eO, {
                      resizableNode: e,
                      onResize: l,
                      onResizeEnd: i,
                  }),
                  (0, a.jsx)("div", {
                      className: eS.sidebarContent,
                      children: (0, a.jsx)(eP, {}),
                  }),
              ],
          });
}
function ew() {
    return (0, s.e7)([S.Z], () => S.Z.displayTools)
        ? (0, a.jsx)("div", {
              className: i()(eS.container, eS.mobileContainerExpanded),
              children: (0, a.jsx)("div", {
                  className: eS.sidebarContent,
                  children: (0, a.jsx)(eP, {}),
              }),
          })
        : (0, a.jsx)("div", {
              className: eS.container,
              children: (0, a.jsx)(c.P3F, {
                  onClick: C.SO,
                  children: (0, a.jsxs)(x.ZP, {
                      className: i()(eE.headerBar, eS.mobileHeaderCollapsed),
                      toolbar: (0, a.jsx)(y.Z, { direction: y.Z.Directions.UP }),
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
function ek(e) {
    let { mobile: t, isPopout: n = !1 } = e;
    return t
        ? (0, a.jsx)(ew, {})
        : n
          ? (0, a.jsx)("div", {
                className: eS.popoutContainer,
                children: (0, a.jsx)(eP, { isPopout: !0 }),
            })
          : (0, a.jsx)(eI, {});
}
