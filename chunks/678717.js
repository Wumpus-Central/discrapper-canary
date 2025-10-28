n.r(t),
    n.d(t, {
        default: () => ew,
        openDevToolsPopout: () => eT,
        useDevToolsTabConfig: () => eE,
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
    m = n(879434),
    p = n(213713),
    h = n(665149),
    x = n(611565),
    f = n(238246),
    b = n(788983),
    g = n(36243),
    v = n(51415),
    j = n(906467),
    _ = n(259580),
    y = n(31336),
    C = n(19759),
    S = n(432877);
n(381996);
var E = n(392750),
    O = n(926976),
    T = n(789654),
    N = n(866730),
    P = n(582344),
    I = n(691867),
    w = n(916790),
    k = n(645973),
    R = n(903502),
    A = n(604776),
    D = n(895182),
    Z = n(912072),
    M = n(691175),
    L = n(272193),
    U = n(685560),
    F = n(698901),
    B = n(735959),
    G = n(572444),
    z = n(636500),
    V = n(246992),
    H = n(484662),
    W = n(546895),
    K = n(496025),
    q = n(442954),
    Y = n(925124),
    J = n(633001),
    X = n(778648),
    Q = n(702904),
    $ = n(178821),
    ee = n(891401),
    et = n(958328),
    en = n(315384),
    ea = n(107606),
    er = n(514866),
    el = n(763577),
    ei = n(384207),
    eo = n(264603),
    es = n(678639),
    ec = n(596768),
    ed = n(581302),
    eu = n(56706),
    em = n(512313),
    ep = n(820400),
    eh = n(200178),
    ex = n(260950),
    ef = n(63954),
    eb = n(569157),
    eg = n(490007),
    ev = n(621060),
    ej = n(981631),
    e_ = n(46140),
    ey = n(388032),
    eC = n(552883),
    eS = n(451429);
function eE() {
    return r.useMemo(() => {
        let e = [
            {
                id: "analytics",
                name: "Analytics",
                group: ev.v0.EXPERIMENTS,
                render: () => (0, a.jsx)(O.Z, {}),
            },
            {
                id: "triggers",
                name: "Triggers",
                group: ev.v0.EXPERIMENTS,
                render: () => (0, a.jsx)(ec.Z, {}),
            },
            {
                id: "stores",
                name: "Stores",
                group: ev.v0.EVENTS,
                render: () => (0, a.jsx)(es.Z, {}),
            },
            {
                id: "dispatcher",
                name: "Dispatcher",
                group: ev.v0.EVENTS,
                render: () => (0, a.jsx)(w.Z, {}),
            },
        ];
        return (
            j.Z.isDeveloper &&
                (e.push({
                    id: "shop",
                    name: "Shop",
                    group: ev.v0.BILLING,
                    render: () => (0, a.jsx)(ei.C, {}),
                }),
                e.push({
                    id: "payment_flow_modals",
                    name: "Payment Flow Modals",
                    group: ev.v0.BILLING,
                    render: () => (0, a.jsx)(X.Z, {}),
                }),
                e.push({
                    id: "shop_collectibles",
                    name: "Shop Collectibles",
                    group: ev.v0.BILLING,
                    render: () => (0, a.jsx)(m.Z, {}),
                }),
                e.push({
                    id: "quick_actions",
                    name: "Quick Actions",
                    group: ev.v0.DEVELOPMENT,
                    render: () => (0, a.jsx)(er.Z, {}),
                }),
                e.push({
                    id: "end_to_end_encryption",
                    name: "E2EE",
                    group: ev.v0.DEVELOPMENT,
                    render: () => (0, a.jsx)(k.Z, {}),
                }),
                e.push({
                    id: "performance",
                    name: "Performance",
                    group: ev.v0.DEVELOPMENT,
                    render: () => (0, a.jsx)($.ZP, {}),
                }),
                e.push({
                    id: "feedback",
                    name: "Feedback",
                    group: ev.v0.USERS,
                    render: () => (0, a.jsx)(R.Z, {}),
                }),
                e.push({
                    id: "overlay",
                    name: "Overlay v3",
                    group: ev.v0.GAMES,
                    render: () => (0, a.jsx)(J.Z, {}),
                }),
                e.push({
                    id: "generated_test_user",
                    name: "Generated Test User",
                    group: ev.v0.DEVELOPMENT,
                    render: () => (0, a.jsx)(M.Z, {}),
                }),
                e.push({
                    id: "slayer_sdk",
                    name: "Slayer SDK",
                    group: ev.v0.GAMES,
                    render: () => (0, a.jsx)(eo.Z, {}),
                }),
                e.push({
                    id: "quick_switcher",
                    name: "Quick Switcher",
                    group: ev.v0.USERS,
                    render: () => (0, a.jsx)(eb.Z, {}),
                })),
            e.push({
                id: "rive",
                name: "Rive",
                group: ev.v0.UI,
                render: () => (0, a.jsx)(el.Z, {}),
            }),
            e.push({
                id: "lottie",
                name: "Lottie",
                group: ev.v0.UI,
                render: () => (0, a.jsx)(W.Z, {}),
            }),
            e.push({
                id: "intl",
                name: "Intl",
                group: ev.v0.UI,
                render: () => (0, a.jsx)(B.Z, {}),
            }),
            e.push({
                id: "colors",
                name: "Colors",
                group: ev.v0.UI,
                render: () => (0, a.jsx)(T.Z, {}),
            }),
            e.push({
                id: "design_toggles",
                name: "Design Toggles",
                group: ev.v0.UI,
                render: () => (0, a.jsx)(I.Z, {}),
            }),
            e.push({
                id: "appearance_randomizer",
                name: "Appearance Randomizer",
                group: ev.v0.UI,
                render: () => (0, a.jsx)(ea.Z, {}),
            }),
            e.push({
                id: "overlays",
                name: "Dev Overlays",
                group: ev.v0.DEVELOPMENT,
                render: () => (0, a.jsx)(Z.Z, { devSettingsCategory: S.zU.OVERLAYS }),
            }),
            e.push({
                id: "messaging",
                name: "Messaging",
                group: ev.v0.USERS,
                render: () => (0, a.jsx)(K.Z, {}),
            }),
            e.push({
                id: "reporting",
                name: "Reporting",
                group: ev.v0.EXPERIMENTS,
                render: () => (0, a.jsx)(Z.Z, { devSettingsCategory: S.zU.REPORTING }),
            }),
            e.push({
                id: "permissions",
                name: "Permissions",
                group: ev.v0.USERS,
                render: () => (0, a.jsx)(et.Z, {}),
            }),
            e.push({
                id: "modals",
                name: "Modals",
                group: ev.v0.UI,
                render: () => (0, a.jsx)(q.Z, {}),
            }),
            e.push({
                id: "layers",
                name: "Layers",
                group: ev.v0.UI,
                render: () => (0, a.jsx)(H.Z, {}),
            }),
            e.push({
                id: "affinity",
                name: "Affinity",
                group: ev.v0.USERS,
                render: () => (0, a.jsx)(E.Z, {}),
            }),
            e.push({
                id: "widgets",
                name: "Widgets",
                group: ev.v0.USERS,
                render: () => (0, a.jsx)(ep.Z, {}),
            }),
            j.Z.isDeveloper &&
                (e.push({
                    id: "content_inventory",
                    name: "Content Inventory",
                    group: ev.v0.USERS,
                    render: () => (0, a.jsx)(p.Z, {}),
                }),
                e.push({
                    id: "notifications_inbox",
                    name: "Notifications Inbox",
                    group: ev.v0.USERS,
                    render: () => (0, a.jsx)(x.Z, {}),
                })),
            e.push({
                id: "dismissible_content",
                name: "DCF Overrides",
                group: ev.v0.DISMISSIBLE_CONTENT,
                render: () => (0, a.jsx)(P.Z, {}),
            }),
            e.push({
                id: "dcf",
                name: "DCF Events",
                group: ev.v0.DISMISSIBLE_CONTENT,
                render: () => (0, a.jsx)(N.Z, {}),
            }),
            e.push({
                id: "hotspots",
                name: "Hotspots",
                group: ev.v0.EXPERIMENTS,
                render: () => (0, a.jsx)(F.Z, {}),
            }),
            e.push({
                id: "perks",
                name: "Perks",
                group: ev.v0.PREMIUM,
                render: () => (0, a.jsx)(ee.Z, {}),
            }),
            e.push({
                id: "potions",
                name: "Potions",
                group: ev.v0.PREMIUM,
                render: () => (0, a.jsx)(en.Z, {}),
            }),
            window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                (e.push({
                    id: "offers",
                    name: "Offers",
                    group: ev.v0.PREMIUM,
                    render: () => (0, a.jsx)(Y.Z, {}),
                }),
                e.push({
                    id: "payments",
                    name: "Payments",
                    group: ev.v0.BILLING,
                    render: () => (0, a.jsx)(Q.Z, {}),
                }),
                e.push({
                    id: "subscriptions",
                    name: "Subscriptions",
                    group: ev.v0.PREMIUM,
                    render: () => (0, a.jsx)(ex.Z, {}),
                }),
                e.push({
                    id: "fractional_nitro",
                    name: "Fractional Nitro",
                    group: ev.v0.PREMIUM,
                    render: () => (0, a.jsx)(A.Z, {}),
                })),
            e.push({
                id: "gifting_intent",
                name: "Gifting Intent",
                group: ev.v0.PREMIUM,
                render: () => (0, a.jsx)(L.Z, {}),
            }),
            e.push({
                id: "voice_filters",
                name: "Voice Filters",
                group: ev.v0.AUDIO_VIDEO,
                render: () => (0, a.jsx)(eu.Z, {}),
            }),
            e.push({
                id: "krisp_tester",
                name: "Krisp Tester",
                group: ev.v0.AUDIO_VIDEO,
                render: () => (0, a.jsx)(G.Z, {}),
            }),
            e.push({
                id: "skill_trees",
                name: "Skill Trees",
                group: ev.v0.BOOSTING,
                render: () => (0, a.jsx)(U.Z, {}),
            }),
            e.push({
                id: "game_server",
                name: "Game Server",
                group: ev.v0.BOOSTING,
                render: () => (0, a.jsx)(D.Z, {}),
            }),
            e.push({
                id: "language",
                name: "Language",
                group: ev.v0.UI,
                render: () => (0, a.jsx)(z.Z, {}),
            }),
            e.push({
                id: "word_frequency",
                name: "Word Frequency",
                group: ev.v0.DEVELOPMENT,
                render: () => (0, a.jsx)(eh.Z, {}),
            }),
            e.push({
                id: "web_setting_tree",
                name: "Web Setting Tree",
                group: ev.v0.DEVELOPMENT,
                render: () => (0, a.jsx)(em.Z, {}),
            }),
            e.push({
                id: "quest_minor_reward_capping_config",
                name: "Minor Reward Capping",
                group: ev.v0.QUESTS,
                render: () => (0, a.jsx)(v.Z, {}),
            }),
            e.push({
                id: "virtual_currency_config",
                name: "Virtual Currency Config",
                group: ev.v0.QUESTS,
                render: () => (0, a.jsx)(ed.Z, {}),
            }),
            e.push({
                id: "Revenue Storybook",
                name: "Revenue Storybook",
                group: ev.v0.BILLING,
                render: () => (0, a.jsx)(eg.Z, {}),
            }),
            (0, g.X)({ location: e_.dr.QUEST_PREVIEW_TOOL }) &&
                e.push({
                    id: "quest_preview",
                    name: "Quest Preview",
                    group: ev.v0.QUESTS,
                    render: () => (0, a.jsx)(ef.Z, {}),
                }),
            e
        );
    }, []);
}
function eO(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: r } = e,
        l = (0, d.Z)({
            minDimension: C.h,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: r,
            orientation: d.y.HORIZONTAL_LEFT,
        });
    return (0, a.jsx)("div", {
        onMouseDown: l,
        className: eC.resizeHandle,
    });
}
function eT() {
    (0, b.bA)(
        ej.KJ3.DEVTOOLS_POPOUT,
        () =>
            (0, a.jsx)(f.Z, {
                windowKey: ej.KJ3.DEVTOOLS_POPOUT,
                title: "DevTools",
                withTitleBar: !0,
                children: (0, a.jsx)(ew, {
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
function eN(e) {
    var t;
    let { isPopout: n = !1 } = e,
        r = eE(),
        {
            TabBar: l,
            renderSelectedTab: i,
            selectedTabId: s,
        } = (0, ev.ZP)(
            {
                tabs: r,
                initialSelectedTabId: null != (t = C.Z.lastOpenTabId) ? t : void 0,
                onChangeTab: (e) => {
                    (0, y.Qh)({ lastOpenTabId: e });
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
                (0, a.jsxs)(h.ZP, {
                    className: eS.headerBar,
                    toolbar: n
                        ? null
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(h.ZP.Icon, {
                                      icon: c.rgF,
                                      tooltip: "Pop Out",
                                      onClick: eT,
                                  }),
                                  (0, a.jsx)(h.ZP.Icon, {
                                      icon: c.Dio,
                                      tooltip: ey.intl.string(ey.t.cpT0Cq),
                                      onClick: y.SO,
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
                (0, a.jsx)(l, {}),
                i(),
                (0, a.jsx)(V.Br, { className: eC.layerContainer }),
            ],
        })
    );
}
function eP() {
    let e = r.useRef(null),
        t = (0, s.e7)([C.Z], () => C.Z.sidebarWidth),
        [n, l] = r.useState(null),
        i = r.useCallback((e) => (0, y.Qh)({ sidebarWidth: e }), []);
    return (r.useEffect(() => {
        null === n && null !== t && l(t);
    }, [t, n]),
    null === n)
        ? null
        : (0, a.jsxs)("div", {
              ref: e,
              className: eC.container,
              style: {
                  minWidth: C.h,
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
                      className: eC.sidebarContent,
                      children: (0, a.jsx)(eN, {}),
                  }),
              ],
          });
}
function eI() {
    return (0, s.e7)([C.Z], () => C.Z.displayTools)
        ? (0, a.jsx)("div", {
              className: i()(eC.container, eC.mobileContainerExpanded),
              children: (0, a.jsx)("div", {
                  className: eC.sidebarContent,
                  children: (0, a.jsx)(eN, {}),
              }),
          })
        : (0, a.jsx)("div", {
              className: eC.container,
              children: (0, a.jsx)(c.P3F, {
                  onClick: y.SO,
                  children: (0, a.jsxs)(h.ZP, {
                      className: i()(eS.headerBar, eC.mobileHeaderCollapsed),
                      toolbar: (0, a.jsx)(_.Z, { direction: _.Z.Directions.UP }),
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
function ew(e) {
    let { mobile: t, isPopout: n = !1 } = e;
    return t
        ? (0, a.jsx)(eI, {})
        : n
          ? (0, a.jsx)("div", {
                className: eC.popoutContainer,
                children: (0, a.jsx)(eN, { isPopout: !0 }),
            })
          : (0, a.jsx)(eP, {});
}
