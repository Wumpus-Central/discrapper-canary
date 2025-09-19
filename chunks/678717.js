n.r(t),
    n.d(t, {
        default: () => ej,
        useDevToolsTabConfig: () => ex,
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
    b = n(51415),
    g = n(906467),
    v = n(259580),
    j = n(31336),
    _ = n(19759),
    y = n(432877);
n(381996);
var C = n(392750),
    N = n(926976),
    E = n(789654),
    S = n(866730),
    O = n(582344),
    T = n(691867),
    k = n(916790),
    P = n(645973),
    R = n(903502),
    w = n(604776),
    I = n(912072),
    Z = n(272193),
    A = n(685560),
    D = n(698901),
    L = n(735959),
    M = n(572444),
    U = n(636500),
    F = n(246992),
    G = n(484662),
    z = n(546895),
    B = n(496025),
    V = n(442954),
    H = n(925124),
    W = n(633001),
    K = n(702904),
    q = n(178821),
    Y = n(891401),
    X = n(958328),
    J = n(315384),
    $ = n(107606),
    Q = n(514866),
    ee = n(763577),
    et = n(384207),
    en = n(264603),
    ea = n(678639),
    er = n(596768),
    ei = n(56706),
    el = n(512313),
    es = n(820400),
    eo = n(260950),
    ec = n(569157),
    ed = n(621060),
    eu = n(981631),
    em = n(388032),
    eh = n(552883),
    ep = n(451429);
function ex() {
    return r.useMemo(() => {
        let e = [
            {
                id: "analytics",
                name: "Analytics",
                group: ed.v0.EXPERIMENTS,
                render: () => (0, a.jsx)(N.Z, {}),
            },
            {
                id: "triggers",
                name: "Triggers",
                group: ed.v0.EXPERIMENTS,
                render: () => (0, a.jsx)(er.Z, {}),
            },
            {
                id: "stores",
                name: "Stores",
                group: ed.v0.EVENTS,
                render: () => (0, a.jsx)(ea.Z, {}),
            },
            {
                id: "dispatcher",
                name: "Dispatcher",
                group: ed.v0.EVENTS,
                render: () => (0, a.jsx)(k.Z, {}),
            },
        ];
        return (
            g.Z.isDeveloper &&
                (e.push({
                    id: "shop",
                    name: "Shop",
                    group: ed.v0.BILLING,
                    render: () => (0, a.jsx)(et.C, {}),
                }),
                e.push({
                    id: "quick_actions",
                    name: "Quick Actions",
                    group: ed.v0.DEVELOPMENT,
                    render: () => (0, a.jsx)(Q.Z, {}),
                }),
                e.push({
                    id: "end_to_end_encryption",
                    name: "E2EE",
                    group: ed.v0.DEVELOPMENT,
                    render: () => (0, a.jsx)(P.Z, {}),
                }),
                e.push({
                    id: "performance",
                    name: "Performance",
                    group: ed.v0.DEVELOPMENT,
                    render: () => (0, a.jsx)(q.ZP, {}),
                }),
                e.push({
                    id: "feedback",
                    name: "Feedback",
                    group: ed.v0.USERS,
                    render: () => (0, a.jsx)(R.Z, {}),
                }),
                e.push({
                    id: "overlay",
                    name: "Overlay v3",
                    group: ed.v0.GAMES,
                    render: () => (0, a.jsx)(W.Z, {}),
                }),
                e.push({
                    id: "slayer_sdk",
                    name: "Slayer SDK",
                    group: ed.v0.GAMES,
                    render: () => (0, a.jsx)(en.Z, {}),
                }),
                e.push({
                    id: "quick_switcher",
                    name: "Quick Switcher",
                    group: ed.v0.USERS,
                    render: () => (0, a.jsx)(ec.Z, {}),
                })),
            e.push({
                id: "rive",
                name: "Rive",
                group: ed.v0.UI,
                render: () => (0, a.jsx)(ee.Z, {}),
            }),
            e.push({
                id: "lottie",
                name: "Lottie",
                group: ed.v0.UI,
                render: () => (0, a.jsx)(z.Z, {}),
            }),
            e.push({
                id: "intl",
                name: "Intl",
                group: ed.v0.UI,
                render: () => (0, a.jsx)(L.Z, {}),
            }),
            e.push({
                id: "colors",
                name: "Colors",
                group: ed.v0.UI,
                render: () => (0, a.jsx)(E.Z, {}),
            }),
            e.push({
                id: "design_toggles",
                name: "Design Toggles",
                group: ed.v0.UI,
                render: () => (0, a.jsx)(T.Z, {}),
            }),
            e.push({
                id: "appearance_randomizer",
                name: "Appearance Randomizer",
                group: ed.v0.UI,
                render: () => (0, a.jsx)($.Z, {}),
            }),
            e.push({
                id: "overlays",
                name: "Dev Overlays",
                group: ed.v0.DEVELOPMENT,
                render: () => (0, a.jsx)(I.Z, { devSettingsCategory: y.zU.OVERLAYS }),
            }),
            e.push({
                id: "messaging",
                name: "Messaging",
                group: ed.v0.USERS,
                render: () => (0, a.jsx)(B.Z, {}),
            }),
            e.push({
                id: "reporting",
                name: "Reporting",
                group: ed.v0.EXPERIMENTS,
                render: () => (0, a.jsx)(I.Z, { devSettingsCategory: y.zU.REPORTING }),
            }),
            e.push({
                id: "permissions",
                name: "Permissions",
                group: ed.v0.USERS,
                render: () => (0, a.jsx)(X.Z, {}),
            }),
            e.push({
                id: "modals",
                name: "Modals",
                group: ed.v0.UI,
                render: () => (0, a.jsx)(V.Z, {}),
            }),
            e.push({
                id: "layers",
                name: "Layers",
                group: ed.v0.UI,
                render: () => (0, a.jsx)(G.Z, {}),
            }),
            e.push({
                id: "affinity",
                name: "Affinity",
                group: ed.v0.USERS,
                render: () => (0, a.jsx)(C.Z, {}),
            }),
            e.push({
                id: "widgets",
                name: "Widgets",
                group: ed.v0.USERS,
                render: () => (0, a.jsx)(es.Z, {}),
            }),
            g.Z.isDeveloper &&
                (e.push({
                    id: "content_inventory",
                    name: "Content Inventory",
                    group: ed.v0.USERS,
                    render: () => (0, a.jsx)(m.Z, {}),
                }),
                e.push({
                    id: "notifications_inbox",
                    name: "Notifications Inbox",
                    group: ed.v0.USERS,
                    render: () => (0, a.jsx)(p.Z, {}),
                })),
            e.push({
                id: "dismissible_content",
                name: "DCF Overrides",
                group: ed.v0.DISMISSIBLE_CONTENT,
                render: () => (0, a.jsx)(O.Z, {}),
            }),
            e.push({
                id: "dcf",
                name: "DCF Events",
                group: ed.v0.DISMISSIBLE_CONTENT,
                render: () => (0, a.jsx)(S.Z, {}),
            }),
            e.push({
                id: "hotspots",
                name: "Hotspots",
                group: ed.v0.EXPERIMENTS,
                render: () => (0, a.jsx)(D.Z, {}),
            }),
            e.push({
                id: "perks",
                name: "Perks",
                group: ed.v0.PREMIUM,
                render: () => (0, a.jsx)(Y.Z, {}),
            }),
            e.push({
                id: "potions",
                name: "Potions",
                group: ed.v0.PREMIUM,
                render: () => (0, a.jsx)(J.Z, {}),
            }),
            window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                (e.push({
                    id: "offers",
                    name: "Offers",
                    group: ed.v0.PREMIUM,
                    render: () => (0, a.jsx)(H.Z, {}),
                }),
                e.push({
                    id: "payments",
                    name: "Payments",
                    group: ed.v0.BILLING,
                    render: () => (0, a.jsx)(K.Z, {}),
                }),
                e.push({
                    id: "subscriptions",
                    name: "Subscriptions",
                    group: ed.v0.PREMIUM,
                    render: () => (0, a.jsx)(eo.Z, {}),
                }),
                e.push({
                    id: "fractional_nitro",
                    name: "Fractional Nitro",
                    group: ed.v0.PREMIUM,
                    render: () => (0, a.jsx)(w.Z, {}),
                })),
            e.push({
                id: "gifting_intent",
                name: "Gifting Intent",
                group: ed.v0.PREMIUM,
                render: () => (0, a.jsx)(Z.Z, {}),
            }),
            e.push({
                id: "voice_filters",
                name: "Voice Filters",
                group: ed.v0.AUDIO_VIDEO,
                render: () => (0, a.jsx)(ei.Z, {}),
            }),
            e.push({
                id: "krisp_tester",
                name: "Krisp Tester",
                group: ed.v0.AUDIO_VIDEO,
                render: () => (0, a.jsx)(M.Z, {}),
            }),
            e.push({
                id: "skill_trees",
                name: "Skill Trees",
                group: ed.v0.GUILDS,
                render: () => (0, a.jsx)(A.Z, {}),
            }),
            e.push({
                id: "language",
                name: "Language",
                group: ed.v0.UI,
                render: () => (0, a.jsx)(U.Z, {}),
            }),
            e.push({
                id: "web_setting_tree",
                name: "Web Setting Tree",
                group: ed.v0.DEVELOPMENT,
                render: () => (0, a.jsx)(el.Z, {}),
            }),
            e.push({
                id: "quest_minor_reward_capping_config",
                name: "Minor Reward Capping",
                group: ed.v0.QUESTS,
                render: () => (0, a.jsx)(b.Z, {}),
            }),
            e
        );
    }, []);
}
function ef(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: r } = e,
        i = (0, d.Z)({
            minDimension: _.h,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: r,
            orientation: d.y.HORIZONTAL_LEFT,
        });
    return (0, a.jsx)("div", {
        onMouseDown: i,
        className: eh.resizeHandle,
    });
}
function eb(e) {
    var t;
    let { isPopout: n = !1 } = e,
        r = ex(),
        {
            TabBar: i,
            renderSelectedTab: l,
            selectedTabId: o,
        } = (0, ed.ZP)(
            {
                tabs: r,
                initialSelectedTabId: null != (t = _.Z.lastOpenTabId) ? t : void 0,
                onChangeTab: (e) => {
                    (0, j.Qh)({ lastOpenTabId: e });
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
        (0, a.jsxs)(F.Gk, {
            children: [
                (0, a.jsxs)(h.ZP, {
                    className: ep.headerBar,
                    toolbar: n
                        ? null
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(h.ZP.Icon, {
                                      icon: c.rgF,
                                      tooltip: "Pop Out",
                                      onClick: () => {
                                          (0, f.bA)(
                                              eu.KJ3.DEVTOOLS_POPOUT,
                                              () =>
                                                  (0, a.jsx)(x.Z, {
                                                      windowKey: eu.KJ3.DEVTOOLS_POPOUT,
                                                      title: "DevTools",
                                                      withTitleBar: !0,
                                                      children: (0, a.jsx)(ej, {
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
                                      tooltip: em.intl.string(em.t.cpT0Cg),
                                      onClick: j.SO,
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
                (0, a.jsx)(F.Br, { className: eh.layerContainer }),
            ],
        })
    );
}
function eg() {
    let e = r.useRef(null),
        t = (0, o.e7)([_.Z], () => _.Z.sidebarWidth),
        [n, i] = r.useState(null),
        l = r.useCallback((e) => (0, j.Qh)({ sidebarWidth: e }), []);
    return (r.useEffect(() => {
        null === n && null !== t && i(t);
    }, [t, n]),
    null === n)
        ? null
        : (0, a.jsxs)("div", {
              ref: e,
              className: eh.container,
              style: {
                  minWidth: _.h,
                  width: n,
              },
              "data-app-right-panel": !0,
              children: [
                  (0, a.jsx)(ef, {
                      resizableNode: e,
                      onResize: i,
                      onResizeEnd: l,
                  }),
                  (0, a.jsx)("div", {
                      className: eh.sidebarContent,
                      children: (0, a.jsx)(eb, {}),
                  }),
              ],
          });
}
function ev() {
    return (0, o.e7)([_.Z], () => _.Z.displayTools)
        ? (0, a.jsx)("div", {
              className: l()(eh.container, eh.mobileContainerExpanded),
              children: (0, a.jsx)("div", {
                  className: eh.sidebarContent,
                  children: (0, a.jsx)(eb, {}),
              }),
          })
        : (0, a.jsx)("div", {
              className: eh.container,
              children: (0, a.jsx)(c.P3F, {
                  onClick: j.SO,
                  children: (0, a.jsxs)(h.ZP, {
                      className: l()(ep.headerBar, eh.mobileHeaderCollapsed),
                      toolbar: (0, a.jsx)(v.Z, { direction: v.Z.Directions.UP }),
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
function ej(e) {
    let { mobile: t, isPopout: n = !1 } = e;
    return t
        ? (0, a.jsx)(ev, {})
        : n
          ? (0, a.jsx)("div", {
                className: eh.popoutContainer,
                children: (0, a.jsx)(eb, { isPopout: !0 }),
            })
          : (0, a.jsx)(eg, {});
}
