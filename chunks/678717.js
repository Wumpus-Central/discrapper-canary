n.r(t),
    n.d(t, {
        default: () => eI,
        openDevToolsPopout: () => eT,
        useDevToolsTabConfig: () => eE,
    }),
    n(539854),
    n(388685);
var a = n(951288),
    r = n(647438),
    i = n(120356),
    l = n.n(i),
    s = n(990547),
    o = n(442837),
    c = n(481060),
    d = n(347469),
    u = n(213609),
    m = n(722332),
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
    E = n(432877);
n(381996);
var S = n(392750),
    T = n(926976),
    O = n(789654),
    N = n(866730),
    P = n(582344),
    I = n(691867),
    w = n(916790),
    R = n(645973),
    k = n(903502),
    A = n(604776),
    Z = n(895182),
    D = n(912072),
    M = n(272193),
    L = n(685560),
    U = n(698901),
    F = n(735959),
    B = n(572444),
    G = n(636500),
    z = n(246992),
    V = n(484662),
    H = n(546895),
    W = n(496025),
    K = n(442954),
    q = n(925124),
    Y = n(633001),
    J = n(778648),
    X = n(702904),
    Q = n(178821),
    $ = n(891401),
    ee = n(958328),
    et = n(315384),
    en = n(107606),
    ea = n(514866),
    er = n(763577),
    ei = n(384207),
    el = n(264603),
    es = n(678639),
    eo = n(596768),
    ec = n(581302),
    ed = n(56706),
    eu = n(512313),
    em = n(820400),
    ep = n(200178),
    eh = n(260950),
    ex = n(63954),
    ef = n(569157),
    eb = n(490007),
    eg = n(621060),
    ev = n(981631),
    ej = n(46140),
    e_ = n(388032),
    ey = n(552883),
    eC = n(451429);
function eE() {
    return r.useMemo(() => {
        let e = [
            {
                id: "analytics",
                name: "Analytics",
                group: eg.v0.EXPERIMENTS,
                render: () => (0, a.jsx)(T.Z, {}),
            },
            {
                id: "triggers",
                name: "Triggers",
                group: eg.v0.EXPERIMENTS,
                render: () => (0, a.jsx)(eo.Z, {}),
            },
            {
                id: "stores",
                name: "Stores",
                group: eg.v0.EVENTS,
                render: () => (0, a.jsx)(es.Z, {}),
            },
            {
                id: "dispatcher",
                name: "Dispatcher",
                group: eg.v0.EVENTS,
                render: () => (0, a.jsx)(w.Z, {}),
            },
        ];
        return (
            j.Z.isDeveloper &&
                (e.push({
                    id: "shop",
                    name: "Shop",
                    group: eg.v0.BILLING,
                    render: () => (0, a.jsx)(ei.C, {}),
                }),
                e.push({
                    id: "payment_flow_modals",
                    name: "Payment Flow Modals",
                    group: eg.v0.BILLING,
                    render: () => (0, a.jsx)(J.Z, {}),
                }),
                e.push({
                    id: "shop_keeper",
                    name: "Shop Keeper",
                    group: eg.v0.BILLING,
                    render: () => (0, a.jsx)(m.Z, {}),
                }),
                e.push({
                    id: "quick_actions",
                    name: "Quick Actions",
                    group: eg.v0.DEVELOPMENT,
                    render: () => (0, a.jsx)(ea.Z, {}),
                }),
                e.push({
                    id: "end_to_end_encryption",
                    name: "E2EE",
                    group: eg.v0.DEVELOPMENT,
                    render: () => (0, a.jsx)(R.Z, {}),
                }),
                e.push({
                    id: "performance",
                    name: "Performance",
                    group: eg.v0.DEVELOPMENT,
                    render: () => (0, a.jsx)(Q.ZP, {}),
                }),
                e.push({
                    id: "feedback",
                    name: "Feedback",
                    group: eg.v0.USERS,
                    render: () => (0, a.jsx)(k.Z, {}),
                }),
                e.push({
                    id: "overlay",
                    name: "Overlay v3",
                    group: eg.v0.GAMES,
                    render: () => (0, a.jsx)(Y.Z, {}),
                }),
                e.push({
                    id: "slayer_sdk",
                    name: "Slayer SDK",
                    group: eg.v0.GAMES,
                    render: () => (0, a.jsx)(el.Z, {}),
                }),
                e.push({
                    id: "quick_switcher",
                    name: "Quick Switcher",
                    group: eg.v0.USERS,
                    render: () => (0, a.jsx)(ef.Z, {}),
                })),
            e.push({
                id: "rive",
                name: "Rive",
                group: eg.v0.UI,
                render: () => (0, a.jsx)(er.Z, {}),
            }),
            e.push({
                id: "lottie",
                name: "Lottie",
                group: eg.v0.UI,
                render: () => (0, a.jsx)(H.Z, {}),
            }),
            e.push({
                id: "intl",
                name: "Intl",
                group: eg.v0.UI,
                render: () => (0, a.jsx)(F.Z, {}),
            }),
            e.push({
                id: "colors",
                name: "Colors",
                group: eg.v0.UI,
                render: () => (0, a.jsx)(O.Z, {}),
            }),
            e.push({
                id: "design_toggles",
                name: "Design Toggles",
                group: eg.v0.UI,
                render: () => (0, a.jsx)(I.Z, {}),
            }),
            e.push({
                id: "appearance_randomizer",
                name: "Appearance Randomizer",
                group: eg.v0.UI,
                render: () => (0, a.jsx)(en.Z, {}),
            }),
            e.push({
                id: "overlays",
                name: "Dev Overlays",
                group: eg.v0.DEVELOPMENT,
                render: () => (0, a.jsx)(D.Z, { devSettingsCategory: E.zU.OVERLAYS }),
            }),
            e.push({
                id: "messaging",
                name: "Messaging",
                group: eg.v0.USERS,
                render: () => (0, a.jsx)(W.Z, {}),
            }),
            e.push({
                id: "reporting",
                name: "Reporting",
                group: eg.v0.EXPERIMENTS,
                render: () => (0, a.jsx)(D.Z, { devSettingsCategory: E.zU.REPORTING }),
            }),
            e.push({
                id: "permissions",
                name: "Permissions",
                group: eg.v0.USERS,
                render: () => (0, a.jsx)(ee.Z, {}),
            }),
            e.push({
                id: "modals",
                name: "Modals",
                group: eg.v0.UI,
                render: () => (0, a.jsx)(K.Z, {}),
            }),
            e.push({
                id: "layers",
                name: "Layers",
                group: eg.v0.UI,
                render: () => (0, a.jsx)(V.Z, {}),
            }),
            e.push({
                id: "affinity",
                name: "Affinity",
                group: eg.v0.USERS,
                render: () => (0, a.jsx)(S.Z, {}),
            }),
            e.push({
                id: "widgets",
                name: "Widgets",
                group: eg.v0.USERS,
                render: () => (0, a.jsx)(em.Z, {}),
            }),
            j.Z.isDeveloper &&
                (e.push({
                    id: "content_inventory",
                    name: "Content Inventory",
                    group: eg.v0.USERS,
                    render: () => (0, a.jsx)(p.Z, {}),
                }),
                e.push({
                    id: "notifications_inbox",
                    name: "Notifications Inbox",
                    group: eg.v0.USERS,
                    render: () => (0, a.jsx)(x.Z, {}),
                })),
            e.push({
                id: "dismissible_content",
                name: "DCF Overrides",
                group: eg.v0.DISMISSIBLE_CONTENT,
                render: () => (0, a.jsx)(P.Z, {}),
            }),
            e.push({
                id: "dcf",
                name: "DCF Events",
                group: eg.v0.DISMISSIBLE_CONTENT,
                render: () => (0, a.jsx)(N.Z, {}),
            }),
            e.push({
                id: "hotspots",
                name: "Hotspots",
                group: eg.v0.EXPERIMENTS,
                render: () => (0, a.jsx)(U.Z, {}),
            }),
            e.push({
                id: "perks",
                name: "Perks",
                group: eg.v0.PREMIUM,
                render: () => (0, a.jsx)($.Z, {}),
            }),
            e.push({
                id: "potions",
                name: "Potions",
                group: eg.v0.PREMIUM,
                render: () => (0, a.jsx)(et.Z, {}),
            }),
            window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                (e.push({
                    id: "offers",
                    name: "Offers",
                    group: eg.v0.PREMIUM,
                    render: () => (0, a.jsx)(q.Z, {}),
                }),
                e.push({
                    id: "payments",
                    name: "Payments",
                    group: eg.v0.BILLING,
                    render: () => (0, a.jsx)(X.Z, {}),
                }),
                e.push({
                    id: "subscriptions",
                    name: "Subscriptions",
                    group: eg.v0.PREMIUM,
                    render: () => (0, a.jsx)(eh.Z, {}),
                }),
                e.push({
                    id: "fractional_nitro",
                    name: "Fractional Nitro",
                    group: eg.v0.PREMIUM,
                    render: () => (0, a.jsx)(A.Z, {}),
                })),
            e.push({
                id: "gifting_intent",
                name: "Gifting Intent",
                group: eg.v0.PREMIUM,
                render: () => (0, a.jsx)(M.Z, {}),
            }),
            e.push({
                id: "voice_filters",
                name: "Voice Filters",
                group: eg.v0.AUDIO_VIDEO,
                render: () => (0, a.jsx)(ed.Z, {}),
            }),
            e.push({
                id: "krisp_tester",
                name: "Krisp Tester",
                group: eg.v0.AUDIO_VIDEO,
                render: () => (0, a.jsx)(B.Z, {}),
            }),
            e.push({
                id: "skill_trees",
                name: "Skill Trees",
                group: eg.v0.BOOSTING,
                render: () => (0, a.jsx)(L.Z, {}),
            }),
            e.push({
                id: "game_server",
                name: "GameServer",
                group: eg.v0.BOOSTING,
                render: () => (0, a.jsx)(Z.Z, {}),
            }),
            e.push({
                id: "language",
                name: "Language",
                group: eg.v0.UI,
                render: () => (0, a.jsx)(G.Z, {}),
            }),
            e.push({
                id: "word_frequency",
                name: "Word Frequency",
                group: eg.v0.DEVELOPMENT,
                render: () => (0, a.jsx)(ep.Z, {}),
            }),
            e.push({
                id: "web_setting_tree",
                name: "Web Setting Tree",
                group: eg.v0.DEVELOPMENT,
                render: () => (0, a.jsx)(eu.Z, {}),
            }),
            e.push({
                id: "quest_minor_reward_capping_config",
                name: "Minor Reward Capping",
                group: eg.v0.QUESTS,
                render: () => (0, a.jsx)(v.Z, {}),
            }),
            e.push({
                id: "virtual_currency_config",
                name: "Virtual Currency Config",
                group: eg.v0.QUESTS,
                render: () => (0, a.jsx)(ec.Z, {}),
            }),
            e.push({
                id: "Revenue Storybook",
                name: "Revenue Storybook",
                group: eg.v0.BILLING,
                render: () => (0, a.jsx)(eb.Z, {}),
            }),
            (0, g.X)({ location: ej.dr.QUEST_PREVIEW_TOOL }) &&
                e.push({
                    id: "quest_preview",
                    name: "Quest Preview",
                    group: eg.v0.QUESTS,
                    render: () => (0, a.jsx)(ex.Z, {}),
                }),
            e
        );
    }, []);
}
function eS(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: r } = e,
        i = (0, d.Z)({
            minDimension: C.h,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: r,
            orientation: d.y.HORIZONTAL_LEFT,
        });
    return (0, a.jsx)("div", {
        onMouseDown: i,
        className: ey.resizeHandle,
    });
}
function eT() {
    (0, b.bA)(
        ev.KJ3.DEVTOOLS_POPOUT,
        () =>
            (0, a.jsx)(f.Z, {
                windowKey: ev.KJ3.DEVTOOLS_POPOUT,
                title: "DevTools",
                withTitleBar: !0,
                children: (0, a.jsx)(eI, {
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
function eO(e) {
    var t;
    let { isPopout: n = !1 } = e,
        r = eE(),
        {
            TabBar: i,
            renderSelectedTab: l,
            selectedTabId: o,
        } = (0, eg.ZP)(
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
            type: s.ImpressionTypes.PANE,
            name: s.ImpressionNames.VIEW_PANEL_DEVTOOLS,
            properties: { panel: o },
        }),
        (0, a.jsxs)(z.Gk, {
            children: [
                (0, a.jsxs)(h.ZP, {
                    className: eC.headerBar,
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
                                      tooltip: e_.intl.string(e_.t.cpT0Cg),
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
                (0, a.jsx)(i, {}),
                l(),
                (0, a.jsx)(z.Br, { className: ey.layerContainer }),
            ],
        })
    );
}
function eN() {
    let e = r.useRef(null),
        t = (0, o.e7)([C.Z], () => C.Z.sidebarWidth),
        [n, i] = r.useState(null),
        l = r.useCallback((e) => (0, y.Qh)({ sidebarWidth: e }), []);
    return (r.useEffect(() => {
        null === n && null !== t && i(t);
    }, [t, n]),
    null === n)
        ? null
        : (0, a.jsxs)("div", {
              ref: e,
              className: ey.container,
              style: {
                  minWidth: C.h,
                  width: n,
              },
              "data-app-right-panel": !0,
              children: [
                  (0, a.jsx)(eS, {
                      resizableNode: e,
                      onResize: i,
                      onResizeEnd: l,
                  }),
                  (0, a.jsx)("div", {
                      className: ey.sidebarContent,
                      children: (0, a.jsx)(eO, {}),
                  }),
              ],
          });
}
function eP() {
    return (0, o.e7)([C.Z], () => C.Z.displayTools)
        ? (0, a.jsx)("div", {
              className: l()(ey.container, ey.mobileContainerExpanded),
              children: (0, a.jsx)("div", {
                  className: ey.sidebarContent,
                  children: (0, a.jsx)(eO, {}),
              }),
          })
        : (0, a.jsx)("div", {
              className: ey.container,
              children: (0, a.jsx)(c.P3F, {
                  onClick: y.SO,
                  children: (0, a.jsxs)(h.ZP, {
                      className: l()(eC.headerBar, ey.mobileHeaderCollapsed),
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
function eI(e) {
    let { mobile: t, isPopout: n = !1 } = e;
    return t
        ? (0, a.jsx)(eP, {})
        : n
          ? (0, a.jsx)("div", {
                className: ey.popoutContainer,
                children: (0, a.jsx)(eO, { isPopout: !0 }),
            })
          : (0, a.jsx)(eN, {});
}
