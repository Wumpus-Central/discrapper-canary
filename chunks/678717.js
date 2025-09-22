n.r(t),
    n.d(t, {
        default: () => eE,
        useDevToolsTabConfig: () => ej,
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
    m = n(213713),
    h = n(665149),
    p = n(611565),
    x = n(238246),
    f = n(788983),
    b = n(36243),
    g = n(51415),
    v = n(906467),
    j = n(259580),
    _ = n(31336),
    y = n(19759),
    C = n(432877);
n(381996);
var N = n(392750),
    E = n(926976),
    S = n(789654),
    O = n(866730),
    T = n(582344),
    P = n(691867),
    k = n(916790),
    w = n(645973),
    R = n(903502),
    I = n(604776),
    Z = n(912072),
    A = n(272193),
    D = n(685560),
    L = n(698901),
    M = n(735959),
    U = n(572444),
    F = n(636500),
    G = n(246992),
    B = n(484662),
    z = n(546895),
    V = n(496025),
    H = n(442954),
    W = n(925124),
    K = n(633001),
    q = n(778648),
    Y = n(702904),
    X = n(178821),
    J = n(891401),
    $ = n(958328),
    Q = n(315384),
    ee = n(107606),
    et = n(514866),
    en = n(763577),
    ea = n(384207),
    er = n(264603),
    ei = n(678639),
    el = n(596768),
    es = n(581302),
    eo = n(56706),
    ec = n(512313),
    ed = n(820400),
    eu = n(260950),
    em = n(63954),
    eh = n(569157),
    ep = n(621060),
    ex = n(981631),
    ef = n(46140),
    eb = n(388032),
    eg = n(552883),
    ev = n(451429);
function ej() {
    return r.useMemo(() => {
        let e = [
            {
                id: "analytics",
                name: "Analytics",
                group: ep.v0.EXPERIMENTS,
                render: () => (0, a.jsx)(E.Z, {}),
            },
            {
                id: "triggers",
                name: "Triggers",
                group: ep.v0.EXPERIMENTS,
                render: () => (0, a.jsx)(el.Z, {}),
            },
            {
                id: "stores",
                name: "Stores",
                group: ep.v0.EVENTS,
                render: () => (0, a.jsx)(ei.Z, {}),
            },
            {
                id: "dispatcher",
                name: "Dispatcher",
                group: ep.v0.EVENTS,
                render: () => (0, a.jsx)(k.Z, {}),
            },
        ];
        return (
            v.Z.isDeveloper &&
                (e.push({
                    id: "shop",
                    name: "Shop",
                    group: ep.v0.BILLING,
                    render: () => (0, a.jsx)(ea.C, {}),
                }),
                e.push({
                    id: "payment_flow_modals",
                    name: "Payment Flow Modals",
                    group: ep.v0.BILLING,
                    render: () => (0, a.jsx)(q.Z, {}),
                }),
                e.push({
                    id: "quick_actions",
                    name: "Quick Actions",
                    group: ep.v0.DEVELOPMENT,
                    render: () => (0, a.jsx)(et.Z, {}),
                }),
                e.push({
                    id: "end_to_end_encryption",
                    name: "E2EE",
                    group: ep.v0.DEVELOPMENT,
                    render: () => (0, a.jsx)(w.Z, {}),
                }),
                e.push({
                    id: "performance",
                    name: "Performance",
                    group: ep.v0.DEVELOPMENT,
                    render: () => (0, a.jsx)(X.ZP, {}),
                }),
                e.push({
                    id: "feedback",
                    name: "Feedback",
                    group: ep.v0.USERS,
                    render: () => (0, a.jsx)(R.Z, {}),
                }),
                e.push({
                    id: "overlay",
                    name: "Overlay v3",
                    group: ep.v0.GAMES,
                    render: () => (0, a.jsx)(K.Z, {}),
                }),
                e.push({
                    id: "slayer_sdk",
                    name: "Slayer SDK",
                    group: ep.v0.GAMES,
                    render: () => (0, a.jsx)(er.Z, {}),
                }),
                e.push({
                    id: "quick_switcher",
                    name: "Quick Switcher",
                    group: ep.v0.USERS,
                    render: () => (0, a.jsx)(eh.Z, {}),
                })),
            e.push({
                id: "rive",
                name: "Rive",
                group: ep.v0.UI,
                render: () => (0, a.jsx)(en.Z, {}),
            }),
            e.push({
                id: "lottie",
                name: "Lottie",
                group: ep.v0.UI,
                render: () => (0, a.jsx)(z.Z, {}),
            }),
            e.push({
                id: "intl",
                name: "Intl",
                group: ep.v0.UI,
                render: () => (0, a.jsx)(M.Z, {}),
            }),
            e.push({
                id: "colors",
                name: "Colors",
                group: ep.v0.UI,
                render: () => (0, a.jsx)(S.Z, {}),
            }),
            e.push({
                id: "design_toggles",
                name: "Design Toggles",
                group: ep.v0.UI,
                render: () => (0, a.jsx)(P.Z, {}),
            }),
            e.push({
                id: "appearance_randomizer",
                name: "Appearance Randomizer",
                group: ep.v0.UI,
                render: () => (0, a.jsx)(ee.Z, {}),
            }),
            e.push({
                id: "overlays",
                name: "Dev Overlays",
                group: ep.v0.DEVELOPMENT,
                render: () => (0, a.jsx)(Z.Z, { devSettingsCategory: C.zU.OVERLAYS }),
            }),
            e.push({
                id: "messaging",
                name: "Messaging",
                group: ep.v0.USERS,
                render: () => (0, a.jsx)(V.Z, {}),
            }),
            e.push({
                id: "reporting",
                name: "Reporting",
                group: ep.v0.EXPERIMENTS,
                render: () => (0, a.jsx)(Z.Z, { devSettingsCategory: C.zU.REPORTING }),
            }),
            e.push({
                id: "permissions",
                name: "Permissions",
                group: ep.v0.USERS,
                render: () => (0, a.jsx)($.Z, {}),
            }),
            e.push({
                id: "modals",
                name: "Modals",
                group: ep.v0.UI,
                render: () => (0, a.jsx)(H.Z, {}),
            }),
            e.push({
                id: "layers",
                name: "Layers",
                group: ep.v0.UI,
                render: () => (0, a.jsx)(B.Z, {}),
            }),
            e.push({
                id: "affinity",
                name: "Affinity",
                group: ep.v0.USERS,
                render: () => (0, a.jsx)(N.Z, {}),
            }),
            e.push({
                id: "widgets",
                name: "Widgets",
                group: ep.v0.USERS,
                render: () => (0, a.jsx)(ed.Z, {}),
            }),
            v.Z.isDeveloper &&
                (e.push({
                    id: "content_inventory",
                    name: "Content Inventory",
                    group: ep.v0.USERS,
                    render: () => (0, a.jsx)(m.Z, {}),
                }),
                e.push({
                    id: "notifications_inbox",
                    name: "Notifications Inbox",
                    group: ep.v0.USERS,
                    render: () => (0, a.jsx)(p.Z, {}),
                })),
            e.push({
                id: "dismissible_content",
                name: "DCF Overrides",
                group: ep.v0.DISMISSIBLE_CONTENT,
                render: () => (0, a.jsx)(T.Z, {}),
            }),
            e.push({
                id: "dcf",
                name: "DCF Events",
                group: ep.v0.DISMISSIBLE_CONTENT,
                render: () => (0, a.jsx)(O.Z, {}),
            }),
            e.push({
                id: "hotspots",
                name: "Hotspots",
                group: ep.v0.EXPERIMENTS,
                render: () => (0, a.jsx)(L.Z, {}),
            }),
            e.push({
                id: "perks",
                name: "Perks",
                group: ep.v0.PREMIUM,
                render: () => (0, a.jsx)(J.Z, {}),
            }),
            e.push({
                id: "potions",
                name: "Potions",
                group: ep.v0.PREMIUM,
                render: () => (0, a.jsx)(Q.Z, {}),
            }),
            window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                (e.push({
                    id: "offers",
                    name: "Offers",
                    group: ep.v0.PREMIUM,
                    render: () => (0, a.jsx)(W.Z, {}),
                }),
                e.push({
                    id: "payments",
                    name: "Payments",
                    group: ep.v0.BILLING,
                    render: () => (0, a.jsx)(Y.Z, {}),
                }),
                e.push({
                    id: "subscriptions",
                    name: "Subscriptions",
                    group: ep.v0.PREMIUM,
                    render: () => (0, a.jsx)(eu.Z, {}),
                }),
                e.push({
                    id: "fractional_nitro",
                    name: "Fractional Nitro",
                    group: ep.v0.PREMIUM,
                    render: () => (0, a.jsx)(I.Z, {}),
                })),
            e.push({
                id: "gifting_intent",
                name: "Gifting Intent",
                group: ep.v0.PREMIUM,
                render: () => (0, a.jsx)(A.Z, {}),
            }),
            e.push({
                id: "voice_filters",
                name: "Voice Filters",
                group: ep.v0.AUDIO_VIDEO,
                render: () => (0, a.jsx)(eo.Z, {}),
            }),
            e.push({
                id: "krisp_tester",
                name: "Krisp Tester",
                group: ep.v0.AUDIO_VIDEO,
                render: () => (0, a.jsx)(U.Z, {}),
            }),
            e.push({
                id: "skill_trees",
                name: "Skill Trees",
                group: ep.v0.GUILDS,
                render: () => (0, a.jsx)(D.Z, {}),
            }),
            e.push({
                id: "language",
                name: "Language",
                group: ep.v0.UI,
                render: () => (0, a.jsx)(F.Z, {}),
            }),
            e.push({
                id: "web_setting_tree",
                name: "Web Setting Tree",
                group: ep.v0.DEVELOPMENT,
                render: () => (0, a.jsx)(ec.Z, {}),
            }),
            e.push({
                id: "quest_minor_reward_capping_config",
                name: "Minor Reward Capping",
                group: ep.v0.QUESTS,
                render: () => (0, a.jsx)(g.Z, {}),
            }),
            e.push({
                id: "virtual_currency_config",
                name: "Virtual Currency Config",
                group: ep.v0.QUESTS,
                render: () => (0, a.jsx)(es.Z, {}),
            }),
            (0, b.X)({ location: ef.dr.QUEST_PREVIEW_TOOL }) &&
                e.push({
                    id: "quest_preview",
                    name: "Quest Preview",
                    group: ep.v0.QUESTS,
                    render: () => (0, a.jsx)(em.Z, {}),
                }),
            e
        );
    }, []);
}
function e_(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: r } = e,
        i = (0, d.Z)({
            minDimension: y.h,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: r,
            orientation: d.y.HORIZONTAL_LEFT,
        });
    return (0, a.jsx)("div", {
        onMouseDown: i,
        className: eg.resizeHandle,
    });
}
function ey(e) {
    var t;
    let { isPopout: n = !1 } = e,
        r = ej(),
        {
            TabBar: i,
            renderSelectedTab: l,
            selectedTabId: o,
        } = (0, ep.ZP)(
            {
                tabs: r,
                initialSelectedTabId: null != (t = y.Z.lastOpenTabId) ? t : void 0,
                onChangeTab: (e) => {
                    (0, _.Qh)({ lastOpenTabId: e });
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
                    className: ev.headerBar,
                    toolbar: n
                        ? null
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(h.ZP.Icon, {
                                      icon: c.rgF,
                                      tooltip: "Pop Out",
                                      onClick: () => {
                                          (0, f.bA)(
                                              ex.KJ3.DEVTOOLS_POPOUT,
                                              () =>
                                                  (0, a.jsx)(x.Z, {
                                                      windowKey: ex.KJ3.DEVTOOLS_POPOUT,
                                                      title: "DevTools",
                                                      withTitleBar: !0,
                                                      children: (0, a.jsx)(eE, {
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
                                      tooltip: eb.intl.string(eb.t.cpT0Cg),
                                      onClick: _.SO,
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
                (0, a.jsx)(G.Br, { className: eg.layerContainer }),
            ],
        })
    );
}
function eC() {
    let e = r.useRef(null),
        t = (0, o.e7)([y.Z], () => y.Z.sidebarWidth),
        [n, i] = r.useState(null),
        l = r.useCallback((e) => (0, _.Qh)({ sidebarWidth: e }), []);
    return (r.useEffect(() => {
        null === n && null !== t && i(t);
    }, [t, n]),
    null === n)
        ? null
        : (0, a.jsxs)("div", {
              ref: e,
              className: eg.container,
              style: {
                  minWidth: y.h,
                  width: n,
              },
              "data-app-right-panel": !0,
              children: [
                  (0, a.jsx)(e_, {
                      resizableNode: e,
                      onResize: i,
                      onResizeEnd: l,
                  }),
                  (0, a.jsx)("div", {
                      className: eg.sidebarContent,
                      children: (0, a.jsx)(ey, {}),
                  }),
              ],
          });
}
function eN() {
    return (0, o.e7)([y.Z], () => y.Z.displayTools)
        ? (0, a.jsx)("div", {
              className: l()(eg.container, eg.mobileContainerExpanded),
              children: (0, a.jsx)("div", {
                  className: eg.sidebarContent,
                  children: (0, a.jsx)(ey, {}),
              }),
          })
        : (0, a.jsx)("div", {
              className: eg.container,
              children: (0, a.jsx)(c.P3F, {
                  onClick: _.SO,
                  children: (0, a.jsxs)(h.ZP, {
                      className: l()(ev.headerBar, eg.mobileHeaderCollapsed),
                      toolbar: (0, a.jsx)(j.Z, { direction: j.Z.Directions.UP }),
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
function eE(e) {
    let { mobile: t, isPopout: n = !1 } = e;
    return t
        ? (0, a.jsx)(eN, {})
        : n
          ? (0, a.jsx)("div", {
                className: eg.popoutContainer,
                children: (0, a.jsx)(ey, { isPopout: !0 }),
            })
          : (0, a.jsx)(eC, {});
}
