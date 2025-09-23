n.r(t),
    n.d(t, {
        default: () => eO,
        openDevToolsPopout: () => eE,
        useDevToolsTabConfig: () => ey,
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
var N = n(392750),
    T = n(926976),
    S = n(789654),
    O = n(866730),
    P = n(582344),
    I = n(691867),
    k = n(916790),
    w = n(645973),
    R = n(903502),
    A = n(604776),
    Z = n(912072),
    D = n(272193),
    L = n(685560),
    M = n(698901),
    U = n(735959),
    F = n(572444),
    B = n(636500),
    G = n(246992),
    z = n(484662),
    V = n(546895),
    H = n(496025),
    W = n(442954),
    q = n(925124),
    K = n(633001),
    Y = n(778648),
    X = n(702904),
    J = n(178821),
    $ = n(891401),
    Q = n(958328),
    ee = n(315384),
    et = n(107606),
    en = n(514866),
    ea = n(763577),
    er = n(384207),
    ei = n(264603),
    el = n(678639),
    es = n(596768),
    eo = n(581302),
    ec = n(56706),
    ed = n(512313),
    eu = n(820400),
    em = n(260950),
    ep = n(63954),
    eh = n(569157),
    ex = n(490007),
    ef = n(621060),
    eb = n(981631),
    eg = n(46140),
    ev = n(388032),
    ej = n(246984),
    e_ = n(866403);
function ey() {
    return r.useMemo(() => {
        let e = [
            {
                id: "analytics",
                name: "Analytics",
                group: ef.v0.EXPERIMENTS,
                render: () => (0, a.jsx)(T.Z, {}),
            },
            {
                id: "triggers",
                name: "Triggers",
                group: ef.v0.EXPERIMENTS,
                render: () => (0, a.jsx)(es.Z, {}),
            },
            {
                id: "stores",
                name: "Stores",
                group: ef.v0.EVENTS,
                render: () => (0, a.jsx)(el.Z, {}),
            },
            {
                id: "dispatcher",
                name: "Dispatcher",
                group: ef.v0.EVENTS,
                render: () => (0, a.jsx)(k.Z, {}),
            },
        ];
        return (
            j.Z.isDeveloper &&
                (e.push({
                    id: "shop",
                    name: "Shop",
                    group: ef.v0.BILLING,
                    render: () => (0, a.jsx)(er.C, {}),
                }),
                e.push({
                    id: "payment_flow_modals",
                    name: "Payment Flow Modals",
                    group: ef.v0.BILLING,
                    render: () => (0, a.jsx)(Y.Z, {}),
                }),
                e.push({
                    id: "shop_keeper",
                    name: "Shop Keeper",
                    group: ef.v0.BILLING,
                    render: () => (0, a.jsx)(m.Z, {}),
                }),
                e.push({
                    id: "quick_actions",
                    name: "Quick Actions",
                    group: ef.v0.DEVELOPMENT,
                    render: () => (0, a.jsx)(en.Z, {}),
                }),
                e.push({
                    id: "end_to_end_encryption",
                    name: "E2EE",
                    group: ef.v0.DEVELOPMENT,
                    render: () => (0, a.jsx)(w.Z, {}),
                }),
                e.push({
                    id: "performance",
                    name: "Performance",
                    group: ef.v0.DEVELOPMENT,
                    render: () => (0, a.jsx)(J.ZP, {}),
                }),
                e.push({
                    id: "feedback",
                    name: "Feedback",
                    group: ef.v0.USERS,
                    render: () => (0, a.jsx)(R.Z, {}),
                }),
                e.push({
                    id: "overlay",
                    name: "Overlay v3",
                    group: ef.v0.GAMES,
                    render: () => (0, a.jsx)(K.Z, {}),
                }),
                e.push({
                    id: "slayer_sdk",
                    name: "Slayer SDK",
                    group: ef.v0.GAMES,
                    render: () => (0, a.jsx)(ei.Z, {}),
                }),
                e.push({
                    id: "quick_switcher",
                    name: "Quick Switcher",
                    group: ef.v0.USERS,
                    render: () => (0, a.jsx)(eh.Z, {}),
                })),
            e.push({
                id: "rive",
                name: "Rive",
                group: ef.v0.UI,
                render: () => (0, a.jsx)(ea.Z, {}),
            }),
            e.push({
                id: "lottie",
                name: "Lottie",
                group: ef.v0.UI,
                render: () => (0, a.jsx)(V.Z, {}),
            }),
            e.push({
                id: "intl",
                name: "Intl",
                group: ef.v0.UI,
                render: () => (0, a.jsx)(U.Z, {}),
            }),
            e.push({
                id: "colors",
                name: "Colors",
                group: ef.v0.UI,
                render: () => (0, a.jsx)(S.Z, {}),
            }),
            e.push({
                id: "design_toggles",
                name: "Design Toggles",
                group: ef.v0.UI,
                render: () => (0, a.jsx)(I.Z, {}),
            }),
            e.push({
                id: "appearance_randomizer",
                name: "Appearance Randomizer",
                group: ef.v0.UI,
                render: () => (0, a.jsx)(et.Z, {}),
            }),
            e.push({
                id: "overlays",
                name: "Dev Overlays",
                group: ef.v0.DEVELOPMENT,
                render: () => (0, a.jsx)(Z.Z, { devSettingsCategory: E.zU.OVERLAYS }),
            }),
            e.push({
                id: "messaging",
                name: "Messaging",
                group: ef.v0.USERS,
                render: () => (0, a.jsx)(H.Z, {}),
            }),
            e.push({
                id: "reporting",
                name: "Reporting",
                group: ef.v0.EXPERIMENTS,
                render: () => (0, a.jsx)(Z.Z, { devSettingsCategory: E.zU.REPORTING }),
            }),
            e.push({
                id: "permissions",
                name: "Permissions",
                group: ef.v0.USERS,
                render: () => (0, a.jsx)(Q.Z, {}),
            }),
            e.push({
                id: "modals",
                name: "Modals",
                group: ef.v0.UI,
                render: () => (0, a.jsx)(W.Z, {}),
            }),
            e.push({
                id: "layers",
                name: "Layers",
                group: ef.v0.UI,
                render: () => (0, a.jsx)(z.Z, {}),
            }),
            e.push({
                id: "affinity",
                name: "Affinity",
                group: ef.v0.USERS,
                render: () => (0, a.jsx)(N.Z, {}),
            }),
            e.push({
                id: "widgets",
                name: "Widgets",
                group: ef.v0.USERS,
                render: () => (0, a.jsx)(eu.Z, {}),
            }),
            j.Z.isDeveloper &&
                (e.push({
                    id: "content_inventory",
                    name: "Content Inventory",
                    group: ef.v0.USERS,
                    render: () => (0, a.jsx)(p.Z, {}),
                }),
                e.push({
                    id: "notifications_inbox",
                    name: "Notifications Inbox",
                    group: ef.v0.USERS,
                    render: () => (0, a.jsx)(x.Z, {}),
                })),
            e.push({
                id: "dismissible_content",
                name: "DCF Overrides",
                group: ef.v0.DISMISSIBLE_CONTENT,
                render: () => (0, a.jsx)(P.Z, {}),
            }),
            e.push({
                id: "dcf",
                name: "DCF Events",
                group: ef.v0.DISMISSIBLE_CONTENT,
                render: () => (0, a.jsx)(O.Z, {}),
            }),
            e.push({
                id: "hotspots",
                name: "Hotspots",
                group: ef.v0.EXPERIMENTS,
                render: () => (0, a.jsx)(M.Z, {}),
            }),
            e.push({
                id: "perks",
                name: "Perks",
                group: ef.v0.PREMIUM,
                render: () => (0, a.jsx)($.Z, {}),
            }),
            e.push({
                id: "potions",
                name: "Potions",
                group: ef.v0.PREMIUM,
                render: () => (0, a.jsx)(ee.Z, {}),
            }),
            window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                (e.push({
                    id: "offers",
                    name: "Offers",
                    group: ef.v0.PREMIUM,
                    render: () => (0, a.jsx)(q.Z, {}),
                }),
                e.push({
                    id: "payments",
                    name: "Payments",
                    group: ef.v0.BILLING,
                    render: () => (0, a.jsx)(X.Z, {}),
                }),
                e.push({
                    id: "subscriptions",
                    name: "Subscriptions",
                    group: ef.v0.PREMIUM,
                    render: () => (0, a.jsx)(em.Z, {}),
                }),
                e.push({
                    id: "fractional_nitro",
                    name: "Fractional Nitro",
                    group: ef.v0.PREMIUM,
                    render: () => (0, a.jsx)(A.Z, {}),
                })),
            e.push({
                id: "gifting_intent",
                name: "Gifting Intent",
                group: ef.v0.PREMIUM,
                render: () => (0, a.jsx)(D.Z, {}),
            }),
            e.push({
                id: "voice_filters",
                name: "Voice Filters",
                group: ef.v0.AUDIO_VIDEO,
                render: () => (0, a.jsx)(ec.Z, {}),
            }),
            e.push({
                id: "krisp_tester",
                name: "Krisp Tester",
                group: ef.v0.AUDIO_VIDEO,
                render: () => (0, a.jsx)(F.Z, {}),
            }),
            e.push({
                id: "skill_trees",
                name: "Skill Trees",
                group: ef.v0.GUILDS,
                render: () => (0, a.jsx)(L.Z, {}),
            }),
            e.push({
                id: "language",
                name: "Language",
                group: ef.v0.UI,
                render: () => (0, a.jsx)(B.Z, {}),
            }),
            e.push({
                id: "web_setting_tree",
                name: "Web Setting Tree",
                group: ef.v0.DEVELOPMENT,
                render: () => (0, a.jsx)(ed.Z, {}),
            }),
            e.push({
                id: "quest_minor_reward_capping_config",
                name: "Minor Reward Capping",
                group: ef.v0.QUESTS,
                render: () => (0, a.jsx)(v.Z, {}),
            }),
            e.push({
                id: "virtual_currency_config",
                name: "Virtual Currency Config",
                group: ef.v0.QUESTS,
                render: () => (0, a.jsx)(eo.Z, {}),
            }),
            e.push({
                id: "Revenue Storybook",
                name: "Revenue Storybook",
                group: ef.v0.BILLING,
                render: () => (0, a.jsx)(ex.Z, {}),
            }),
            (0, g.X)({ location: eg.dr.QUEST_PREVIEW_TOOL }) &&
                e.push({
                    id: "quest_preview",
                    name: "Quest Preview",
                    group: ef.v0.QUESTS,
                    render: () => (0, a.jsx)(ep.Z, {}),
                }),
            e
        );
    }, []);
}
function eC(e) {
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
        className: ej.resizeHandle,
    });
}
function eE() {
    (0, b.bA)(
        eb.KJ3.DEVTOOLS_POPOUT,
        () =>
            (0, a.jsx)(f.Z, {
                windowKey: eb.KJ3.DEVTOOLS_POPOUT,
                title: "DevTools",
                withTitleBar: !0,
                children: (0, a.jsx)(eO, {
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
        r = ey(),
        {
            TabBar: i,
            renderSelectedTab: l,
            selectedTabId: o,
        } = (0, ef.ZP)(
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
        (0, a.jsxs)(G.Gk, {
            children: [
                (0, a.jsxs)(h.ZP, {
                    className: e_.headerBar,
                    toolbar: n
                        ? null
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(h.ZP.Icon, {
                                      icon: c.rgF,
                                      tooltip: "Pop Out",
                                      onClick: eE,
                                  }),
                                  (0, a.jsx)(h.ZP.Icon, {
                                      icon: c.Dio,
                                      tooltip: ev.intl.string(ev.t.cpT0Cg),
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
                (0, a.jsx)(G.Br, { className: ej.layerContainer }),
            ],
        })
    );
}
function eT() {
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
              className: ej.container,
              style: {
                  minWidth: C.h,
                  width: n,
              },
              "data-app-right-panel": !0,
              children: [
                  (0, a.jsx)(eC, {
                      resizableNode: e,
                      onResize: i,
                      onResizeEnd: l,
                  }),
                  (0, a.jsx)("div", {
                      className: ej.sidebarContent,
                      children: (0, a.jsx)(eN, {}),
                  }),
              ],
          });
}
function eS() {
    return (0, o.e7)([C.Z], () => C.Z.displayTools)
        ? (0, a.jsx)("div", {
              className: l()(ej.container, ej.mobileContainerExpanded),
              children: (0, a.jsx)("div", {
                  className: ej.sidebarContent,
                  children: (0, a.jsx)(eN, {}),
              }),
          })
        : (0, a.jsx)("div", {
              className: ej.container,
              children: (0, a.jsx)(c.P3F, {
                  onClick: y.SO,
                  children: (0, a.jsxs)(h.ZP, {
                      className: l()(e_.headerBar, ej.mobileHeaderCollapsed),
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
function eO(e) {
    let { mobile: t, isPopout: n = !1 } = e;
    return t
        ? (0, a.jsx)(eS, {})
        : n
          ? (0, a.jsx)("div", {
                className: ej.popoutContainer,
                children: (0, a.jsx)(eN, { isPopout: !0 }),
            })
          : (0, a.jsx)(eT, {});
}
