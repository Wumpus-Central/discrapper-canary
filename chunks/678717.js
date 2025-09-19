n.r(t),
    n.d(t, {
        default: () => ev,
        useDevToolsTabConfig: () => ep,
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
    b = n(906467),
    g = n(259580),
    v = n(31336),
    j = n(19759),
    _ = n(432877);
n(381996);
var y = n(392750),
    C = n(926976),
    N = n(789654),
    E = n(866730),
    S = n(582344),
    O = n(691867),
    T = n(916790),
    k = n(645973),
    P = n(903502),
    R = n(604776),
    w = n(912072),
    I = n(272193),
    Z = n(685560),
    A = n(698901),
    D = n(735959),
    L = n(572444),
    M = n(636500),
    U = n(246992),
    F = n(484662),
    G = n(546895),
    z = n(496025),
    B = n(442954),
    V = n(925124),
    H = n(633001),
    W = n(702904),
    K = n(178821),
    q = n(891401),
    Y = n(958328),
    X = n(315384),
    J = n(107606),
    $ = n(514866),
    Q = n(763577),
    ee = n(384207),
    et = n(264603),
    en = n(678639),
    ea = n(596768),
    er = n(56706),
    ei = n(512313),
    el = n(820400),
    es = n(260950),
    eo = n(569157),
    ec = n(621060),
    ed = n(981631),
    eu = n(388032),
    em = n(552883),
    eh = n(451429);
function ep() {
    return r.useMemo(() => {
        let e = [
            {
                id: "analytics",
                name: "Analytics",
                group: ec.v0.EXPERIMENTS,
                render: () => (0, a.jsx)(C.Z, {}),
            },
            {
                id: "triggers",
                name: "Triggers",
                group: ec.v0.EXPERIMENTS,
                render: () => (0, a.jsx)(ea.Z, {}),
            },
            {
                id: "stores",
                name: "Stores",
                group: ec.v0.EVENTS,
                render: () => (0, a.jsx)(en.Z, {}),
            },
            {
                id: "dispatcher",
                name: "Dispatcher",
                group: ec.v0.EVENTS,
                render: () => (0, a.jsx)(T.Z, {}),
            },
        ];
        return (
            b.Z.isDeveloper &&
                (e.push({
                    id: "shop",
                    name: "Shop",
                    group: ec.v0.BILLING,
                    render: () => (0, a.jsx)(ee.C, {}),
                }),
                e.push({
                    id: "quick_actions",
                    name: "Quick Actions",
                    group: ec.v0.DEVELOPMENT,
                    render: () => (0, a.jsx)($.Z, {}),
                }),
                e.push({
                    id: "end_to_end_encryption",
                    name: "E2EE",
                    group: ec.v0.DEVELOPMENT,
                    render: () => (0, a.jsx)(k.Z, {}),
                }),
                e.push({
                    id: "performance",
                    name: "Performance",
                    group: ec.v0.DEVELOPMENT,
                    render: () => (0, a.jsx)(K.ZP, {}),
                }),
                e.push({
                    id: "feedback",
                    name: "Feedback",
                    group: ec.v0.USERS,
                    render: () => (0, a.jsx)(P.Z, {}),
                }),
                e.push({
                    id: "overlay",
                    name: "Overlay v3",
                    group: ec.v0.GAMES,
                    render: () => (0, a.jsx)(H.Z, {}),
                }),
                e.push({
                    id: "slayer_sdk",
                    name: "Slayer SDK",
                    group: ec.v0.GAMES,
                    render: () => (0, a.jsx)(et.Z, {}),
                }),
                e.push({
                    id: "quick_switcher",
                    name: "Quick Switcher",
                    group: ec.v0.USERS,
                    render: () => (0, a.jsx)(eo.Z, {}),
                })),
            e.push({
                id: "rive",
                name: "Rive",
                group: ec.v0.UI,
                render: () => (0, a.jsx)(Q.Z, {}),
            }),
            e.push({
                id: "lottie",
                name: "Lottie",
                group: ec.v0.UI,
                render: () => (0, a.jsx)(G.Z, {}),
            }),
            e.push({
                id: "intl",
                name: "Intl",
                group: ec.v0.UI,
                render: () => (0, a.jsx)(D.Z, {}),
            }),
            e.push({
                id: "colors",
                name: "Colors",
                group: ec.v0.UI,
                render: () => (0, a.jsx)(N.Z, {}),
            }),
            e.push({
                id: "design_toggles",
                name: "Design Toggles",
                group: ec.v0.UI,
                render: () => (0, a.jsx)(O.Z, {}),
            }),
            e.push({
                id: "appearance_randomizer",
                name: "Appearance Randomizer",
                group: ec.v0.UI,
                render: () => (0, a.jsx)(J.Z, {}),
            }),
            e.push({
                id: "overlays",
                name: "Dev Overlays",
                group: ec.v0.DEVELOPMENT,
                render: () => (0, a.jsx)(w.Z, { devSettingsCategory: _.zU.OVERLAYS }),
            }),
            e.push({
                id: "messaging",
                name: "Messaging",
                group: ec.v0.USERS,
                render: () => (0, a.jsx)(z.Z, {}),
            }),
            e.push({
                id: "reporting",
                name: "Reporting",
                group: ec.v0.EXPERIMENTS,
                render: () => (0, a.jsx)(w.Z, { devSettingsCategory: _.zU.REPORTING }),
            }),
            e.push({
                id: "permissions",
                name: "Permissions",
                group: ec.v0.USERS,
                render: () => (0, a.jsx)(Y.Z, {}),
            }),
            e.push({
                id: "modals",
                name: "Modals",
                group: ec.v0.UI,
                render: () => (0, a.jsx)(B.Z, {}),
            }),
            e.push({
                id: "layers",
                name: "Layers",
                group: ec.v0.UI,
                render: () => (0, a.jsx)(F.Z, {}),
            }),
            e.push({
                id: "affinity",
                name: "Affinity",
                group: ec.v0.USERS,
                render: () => (0, a.jsx)(y.Z, {}),
            }),
            e.push({
                id: "widgets",
                name: "Widgets",
                group: ec.v0.USERS,
                render: () => (0, a.jsx)(el.Z, {}),
            }),
            b.Z.isDeveloper &&
                (e.push({
                    id: "content_inventory",
                    name: "Content Inventory",
                    group: ec.v0.USERS,
                    render: () => (0, a.jsx)(m.Z, {}),
                }),
                e.push({
                    id: "notifications_inbox",
                    name: "Notifications Inbox",
                    group: ec.v0.USERS,
                    render: () => (0, a.jsx)(p.Z, {}),
                })),
            e.push({
                id: "dismissible_content",
                name: "DCF Overrides",
                group: ec.v0.DISMISSIBLE_CONTENT,
                render: () => (0, a.jsx)(S.Z, {}),
            }),
            e.push({
                id: "dcf",
                name: "DCF Events",
                group: ec.v0.DISMISSIBLE_CONTENT,
                render: () => (0, a.jsx)(E.Z, {}),
            }),
            e.push({
                id: "hotspots",
                name: "Hotspots",
                group: ec.v0.EXPERIMENTS,
                render: () => (0, a.jsx)(A.Z, {}),
            }),
            e.push({
                id: "perks",
                name: "Perks",
                group: ec.v0.PREMIUM,
                render: () => (0, a.jsx)(q.Z, {}),
            }),
            e.push({
                id: "potions",
                name: "Potions",
                group: ec.v0.PREMIUM,
                render: () => (0, a.jsx)(X.Z, {}),
            }),
            window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                (e.push({
                    id: "offers",
                    name: "Offers",
                    group: ec.v0.PREMIUM,
                    render: () => (0, a.jsx)(V.Z, {}),
                }),
                e.push({
                    id: "payments",
                    name: "Payments",
                    group: ec.v0.BILLING,
                    render: () => (0, a.jsx)(W.Z, {}),
                }),
                e.push({
                    id: "subscriptions",
                    name: "Subscriptions",
                    group: ec.v0.PREMIUM,
                    render: () => (0, a.jsx)(es.Z, {}),
                }),
                e.push({
                    id: "fractional_nitro",
                    name: "Fractional Nitro",
                    group: ec.v0.PREMIUM,
                    render: () => (0, a.jsx)(R.Z, {}),
                })),
            e.push({
                id: "gifting_intent",
                name: "Gifting Intent",
                group: ec.v0.PREMIUM,
                render: () => (0, a.jsx)(I.Z, {}),
            }),
            e.push({
                id: "voice_filters",
                name: "Voice Filters",
                group: ec.v0.AUDIO_VIDEO,
                render: () => (0, a.jsx)(er.Z, {}),
            }),
            e.push({
                id: "krisp_tester",
                name: "Krisp Tester",
                group: ec.v0.AUDIO_VIDEO,
                render: () => (0, a.jsx)(L.Z, {}),
            }),
            e.push({
                id: "skill_trees",
                name: "Skill Trees",
                group: ec.v0.GUILDS,
                render: () => (0, a.jsx)(Z.Z, {}),
            }),
            e.push({
                id: "language",
                name: "Language",
                group: ec.v0.UI,
                render: () => (0, a.jsx)(M.Z, {}),
            }),
            e.push({
                id: "web_setting_tree",
                name: "Web Setting Tree",
                group: ec.v0.DEVELOPMENT,
                render: () => (0, a.jsx)(ei.Z, {}),
            }),
            e
        );
    }, []);
}
function ex(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: r } = e,
        i = (0, d.Z)({
            minDimension: j.h,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: r,
            orientation: d.y.HORIZONTAL_LEFT,
        });
    return (0, a.jsx)("div", {
        onMouseDown: i,
        className: em.resizeHandle,
    });
}
function ef(e) {
    var t;
    let { isPopout: n = !1 } = e,
        r = ep(),
        {
            TabBar: i,
            renderSelectedTab: l,
            selectedTabId: o,
        } = (0, ec.ZP)(
            {
                tabs: r,
                initialSelectedTabId: null != (t = j.Z.lastOpenTabId) ? t : void 0,
                onChangeTab: (e) => {
                    (0, v.Qh)({ lastOpenTabId: e });
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
        (0, a.jsxs)(U.Gk, {
            children: [
                (0, a.jsxs)(h.ZP, {
                    className: eh.headerBar,
                    toolbar: n
                        ? null
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(h.ZP.Icon, {
                                      icon: c.rgF,
                                      tooltip: "Pop Out",
                                      onClick: () => {
                                          (0, f.bA)(
                                              ed.KJ3.DEVTOOLS_POPOUT,
                                              () =>
                                                  (0, a.jsx)(x.Z, {
                                                      windowKey: ed.KJ3.DEVTOOLS_POPOUT,
                                                      title: "DevTools",
                                                      withTitleBar: !0,
                                                      children: (0, a.jsx)(ev, {
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
                                      tooltip: eu.intl.string(eu.t.cpT0Cg),
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
                l(),
                (0, a.jsx)(U.Br, { className: em.layerContainer }),
            ],
        })
    );
}
function eb() {
    let e = r.useRef(null),
        t = (0, o.e7)([j.Z], () => j.Z.sidebarWidth),
        [n, i] = r.useState(null),
        l = r.useCallback((e) => (0, v.Qh)({ sidebarWidth: e }), []);
    return (r.useEffect(() => {
        null === n && null !== t && i(t);
    }, [t, n]),
    null === n)
        ? null
        : (0, a.jsxs)("div", {
              ref: e,
              className: em.container,
              style: {
                  minWidth: j.h,
                  width: n,
              },
              "data-app-right-panel": !0,
              children: [
                  (0, a.jsx)(ex, {
                      resizableNode: e,
                      onResize: i,
                      onResizeEnd: l,
                  }),
                  (0, a.jsx)("div", {
                      className: em.sidebarContent,
                      children: (0, a.jsx)(ef, {}),
                  }),
              ],
          });
}
function eg() {
    return (0, o.e7)([j.Z], () => j.Z.displayTools)
        ? (0, a.jsx)("div", {
              className: l()(em.container, em.mobileContainerExpanded),
              children: (0, a.jsx)("div", {
                  className: em.sidebarContent,
                  children: (0, a.jsx)(ef, {}),
              }),
          })
        : (0, a.jsx)("div", {
              className: em.container,
              children: (0, a.jsx)(c.P3F, {
                  onClick: v.SO,
                  children: (0, a.jsxs)(h.ZP, {
                      className: l()(eh.headerBar, em.mobileHeaderCollapsed),
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
function ev(e) {
    let { mobile: t, isPopout: n = !1 } = e;
    return t
        ? (0, a.jsx)(eg, {})
        : n
          ? (0, a.jsx)("div", {
                className: em.popoutContainer,
                children: (0, a.jsx)(ef, { isPopout: !0 }),
            })
          : (0, a.jsx)(eb, {});
}
