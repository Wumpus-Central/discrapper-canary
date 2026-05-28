i.d(t, { D: () => br });
var n,
    s,
    l,
    r,
    a = i(419954),
    o = i(358776),
    u = i(780964),
    d = i(682348),
    c = i(574381),
    g = i(17928),
    m = i(952818),
    A = i(871633),
    h = i(933297),
    E = i(627968),
    S = i(64700),
    T = i(627363),
    x = i(587895),
    p = i(137177),
    f = i(751075),
    N = i(403362);
i(321073);
var _ = i(843402);
let I = (0, i(583613).L_)(function () {
    for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
    return new Set(t.map((e) => e.exePath));
});
function C() {
    let e = (0, g.yK)([m.Ay], () => m.Ay.getGamesSeen(!1)),
        t = (0, g.bG)([m.Ay], () => I(...m.Ay.getOverrides()));
    S.useEffect(() => ((0, _.a2)(), _.e0), []);
    let { gameHistory: i, robloxSubgameHistory: n } = S.useMemo(
        () =>
            e.reduce((e, t) => ((0, A.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                gameHistory: [],
                robloxSubgameHistory: [],
            }),
        [e],
    );
    return { gameHistory: i, robloxSubgameHistory: n, overrideExePaths: t };
}
function b(e) {
    let { gameHistory: t } = C();
    return {
        namedGames: S.useMemo(
            () =>
                t
                    .values()
                    .filter((e) => null != e.id && null != e.name)
                    .take(e)
                    .toArray(),
            [t, e],
        ),
        totalCount: t.length,
    };
}
function v(e) {
    let { namedGames: t, totalCount: i } = b(e);
    return { names: t.map((e) => e.name), totalCount: i };
}
function y() {
    let { namedGames: e } = b(2),
        [t, i] = S.useMemo(() => e.map((e) => e.id), [e]);
    S.useEffect(() => {
        T.Ay.fetchApplications([t, i].filter(N.Vq));
    }, [t, i]);
    let [n, s] = (0, g.yK)([x.A], () => [t, i].map(x.A.getApplication), [t, i]);
    return null == t
        ? null
        : {
              frontIcon: { icon: (0, E.jsx)(p.A, { game: n, size: p.M.MEDIUM_LARGE }), shape: f.e0.ROUNDED },
              backIcon:
                  null != i ? { icon: (0, E.jsx)(p.A, { game: s, size: p.M.MEDIUM }), shape: f.e0.ROUNDED } : null,
          };
}
var j = i(375708);
let O = (0, a.AK)(u.X.ACTIVITY_PRIVACY_TO_REGISTERED_GAMES_NAVIGATOR, {
        useSubtitle: function () {
            let { names: e, totalCount: t } = v(2);
            return j.intl.format(j.t["6nRCFl"], {
                also: "true",
                count: t,
                nameCount: e.length,
                game1: e[0],
                game2: e[1],
            });
        },
        useTrailingDecoration: () => ({ type: h.wF.STACKED_ICONS, useIcons: y }),
        destinationKey: u.X.REGISTERED_GAMES_PANEL,
        usePredicate: () => {
            let e = (0, o.SV)("ActivitySharingRelatedSettings"),
                t = (0, g.bG)([m.Ay], () => m.Ay.getGamesSeen(!1).some((e) => !(0, A.n1)(e)));
            return e && t && (0, c.xl)();
        },
    }),
    R = (0, a.gN)(u.X.ACTIVITY_SHARING_RELATED_SETTINGS, { buildLayout: () => [O] });
var L = i(885386),
    D = i(395277);
let P = (0, a.zD)(u.X.ACTIVITY_PRIVACY_SETTING, {
        useTitle: () => j.intl.string(D.default.WhdCGP),
        useSubtitle: () => j.intl.string(D.default.UQ9RHJ),
        useValue: L.tz.useSetting,
        setValue: L.tz.updateSetting,
    }),
    G = (0, a.zZ)(u.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () =>
            (0, o.SV)("ActivitySharingCategory") ? j.intl.string(j.t.WmsPis) : j.intl.string(j.t["6x5uWQ"]),
        useSearchTerms: () => [j.intl.string(j.t["8ka8li"])],
        buildLayout: () => [P, R],
    });
var M = i(945810),
    U = i(21973);
let V = (0, M.mj)({
        name: "2026-02-activity-privacy-matching",
        kind: "user",
        defaultConfig: { copyChanges: !1, upsell: !1 },
        variations: {
            0: { copyChanges: !1, upsell: !1 },
            1: { copyChanges: !0, upsell: !1 },
            2: { copyChanges: !0, upsell: !0 },
        },
    }),
    k = (e) => {
        let t = (0, U.lX)(e),
            i = V.useConfig({ location: e });
        return t || i.copyChanges;
    },
    w = (0, a.AK)(u.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.J0SFL2),
        destinationKey: u.X.DATA_AND_PRIVACY_PANEL,
    }),
    B = (0, a.gN)(u.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, U.lX)("ActivityPrivacyRelatedSettings"),
        buildLayout: () => [w],
    });
var F = i(873298),
    z = i(192308),
    Y = i(365258);
let X = (0, a.Qx)(u.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
    useTitle: () =>
        k("GuildActivitySharingDefaultSetting") ? j.intl.string(j.t.vpgck1) : j.intl.string(D.default["/LHVbt"]),
    useOptions: function () {
        let e = k("GuildActivitySharingDefaultSetting");
        return S.useMemo(
            () =>
                e
                    ? [
                          {
                              value: F.Qd.ACTIVITY_STATUS_OFF,
                              name: j.intl.string(j.t.FzgQna),
                              desc: j.intl.string(j.t.SQxoyc),
                          },
                          {
                              value: F.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                              name: j.intl.string(j.t["1hvuGH"]),
                              desc: j.intl.string(j.t.odUCPE),
                          },
                          { value: F.Qd.ACTIVITY_STATUS_ON, name: j.intl.string(j.t.fQc5la) },
                      ]
                    : [
                          { value: F.Qd.ACTIVITY_STATUS_ON, name: j.intl.string(j.t.UzGMH9) },
                          { value: F.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: j.intl.string(D.default["/sAeRY"]) },
                          { value: F.Qd.ACTIVITY_STATUS_OFF, name: j.intl.string(D.default.m3oL7Q) },
                      ],
            [e],
        );
    },
    useValue: L._Z.useSetting,
    setValue: function (e) {
        let t,
            n = L._Z.getSetting();
        if (
            (L._Z.updateSetting(e),
            (t = "GuildActivitySharingDefaultSetting"),
            !(0, U.W1)(t) && !V.getConfig({ location: t }).upsell)
        )
            return;
        let s = (0, Y.g8)(n, e);
        if (null == s) return;
        let l = (0, Y.Xc)(e);
        (0, z.openModalLazy)(async () => {
            let { default: e } = await Promise.all([i.e("92164"), i.e("62493"), i.e("62041"), i.e("41996")]).then(
                i.bind(i, 32167),
            );
            return (t) =>
                (0, E.jsx)(e, { ...t, direction: s.direction, affectedGuildIds: s.affectedGuildIds, settingName: l });
        });
    },
});
var H = i(683071),
    K = i(331322),
    W = i(243721),
    Z = i(892547),
    q = i(922016),
    Q = i(980707),
    J = i(477782),
    $ = i(939249),
    ee = i(834730),
    et = i(847374),
    ei = i(661531),
    en = i(123292),
    es = i(140735),
    el = i(498642),
    er = i(174459),
    ea = i(743790),
    eo = i(71393),
    eu = i(711014),
    ed =
        (((n = {}).SERVER_ORDER = "server-order"),
        (n.RECENTLY_JOINED = "recently-joined"),
        (n.ACTIVITY_SHARING_ON = "activity-sharing-on"),
        (n.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
        n);
let ec = {
    "recently-joined": (e) =>
        e
            .concat()
            .sort((e, t) =>
                null == e.joinedAt
                    ? -1
                    : null == t.joinedAt
                      ? 1
                      : e.joinedAt === t.joinedAt
                        ? 0
                        : new Date(t.joinedAt).getTime() - new Date(e.joinedAt).getTime(),
            ),
    "activity-sharing-on": (e, t) =>
        e.concat().sort((e, i) => {
            let n = t.includes(e.id),
                s = t.includes(i.id);
            return !n && s ? -1 : n && !s ? 1 : 0;
        }),
    "activity-sharing-off": (e, t) =>
        e.concat().sort((e, i) => {
            let n = t.includes(e.id),
                s = t.includes(i.id);
            return n && !s ? -1 : !n && s ? 1 : 0;
        }),
    "server-order": (e) => e,
};
var eg = i(652215),
    em = i(842449);
function eA(e) {
    let { guild: t, isActivityRestricted: i, onToggleActivityRestrictedGuild: n } = e,
        s = (0, g.bG)([el.A], () => el.A.getMemberCount(t.id));
    return (0, E.jsxs)(K.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, E.jsx)("div", { className: em.FO, children: (0, E.jsx)(ea.K, { guild: t, size: 48 }) }),
            (0, E.jsx)("div", {
                className: em.QH,
                children: (0, E.jsx)(W.d, {
                    label: t.name,
                    description: j.intl.format(j.t.zRl6XR, { count: s ?? 0 }),
                    checked: !i,
                    onChange: (e) => n({ checked: e, guildId: t.id }),
                }),
            }),
        ],
    });
}
let eh = function (e) {
    let { notice: t } = e,
        {
            guilds: i,
            searchQuery: n,
            setSearchQuery: s,
            sortOrder: l,
            setSortOrder: r,
            hasActivityRestrictedGuilds: a,
            onToggleAllActivityRestrictedGuilds: o,
            onToggleActivityRestrictedGuild: u,
            isActivityRestricted: d,
            numActivityRestrictedGuilds: c,
            numTotalGuilds: m,
        } = (function () {
            let [e, t] = (0, S.useState)(""),
                [i, n] = (0, S.useState)("server-order"),
                s = (0, g.bG)([eu.Ay], () => eu.Ay.getFlattenedGuildIds()),
                l = (0, g.bG)([eo.A], () => eo.A.getGuilds()),
                r = s.map((e) => l[e]).filter(Boolean),
                a = L.Pw.useSetting(),
                [o, u] = (0, S.useState)(a);
            (0, S.useEffect)(() => {
                u(a);
            }, [a]);
            let d = async (e) => {
                    u(e);
                    try {
                        await L.Pw.updateSetting(e);
                    } catch (e) {
                        u(a);
                    }
                },
                c = 0 !== o.length,
                [m, A] = (0, S.useState)(() => ec[i](r, a)),
                h = m.map((e) => l[e.id]).filter(Boolean);
            return {
                guilds: "" === e ? h : h.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
                sortOrder: i,
                searchQuery: e,
                setSortOrder: (e) => {
                    A(ec[e](r, a)), n(e);
                },
                setSearchQuery: t,
                onToggleActivityRestrictedGuild: (e) => {
                    let { checked: t, guildId: i } = e,
                        n = new Set(o);
                    t ? n.delete(i) : n.add(i), d([...n]);
                },
                isActivityRestricted: (e) => o.includes(e),
                hasActivityRestrictedGuilds: c,
                onToggleAllActivityRestrictedGuilds: () => {
                    c ? d([]) : d(s);
                },
                numTotalGuilds: s.length,
                numActivityRestrictedGuilds: o.length,
            };
        })(),
        A = (0, S.useId)(),
        h = (0, S.useRef)(null),
        T = (0, S.useMemo)(
            () => [
                { id: ed.SERVER_ORDER, label: j.intl.string(j.t.STMPJ2), value: ed.SERVER_ORDER },
                { id: ed.RECENTLY_JOINED, label: j.intl.string(j.t.CbaapP), value: ed.RECENTLY_JOINED },
                { id: ed.ACTIVITY_SHARING_ON, label: j.intl.string(D.default.ZI51JZ), value: ed.ACTIVITY_SHARING_ON },
                {
                    id: ed.ACTIVITY_SHARING_OFF,
                    label: j.intl.string(D.default["+kxafn"]),
                    value: ed.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        x = T.find((e) => e.value === l)?.label ?? "";
    return (0, E.jsxs)("div", {
        className: em.iE,
        children: [
            t,
            (0, E.jsxs)("div", {
                className: em.N1,
                children: [
                    (0, E.jsx)(Z.I, {
                        query: n,
                        onChange: s,
                        onClear: () => {
                            er.default.track(eg.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_cleared",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: m,
                            }),
                                s("");
                        },
                        onFocus: () =>
                            er.default.track(eg.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_focused",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: m,
                            }),
                        onBlur: () =>
                            er.default.track(eg.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_blurred",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: m,
                            }),
                        placeholder: j.intl.string(j.t["H+nRYw"]),
                        "aria-label": j.intl.string(j.t["5h0QOP"]),
                        inputProps: { "aria-controls": A, "aria-expanded": !0 },
                    }),
                    i.length > 0 &&
                        (0, E.jsxs)("div", {
                            className: em.gO,
                            children: [
                                (0, E.jsx)(q.Y, {
                                    targetElementRef: h,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, E.jsx)(Q.W, {
                                            navId: "guild-sort-order-menu",
                                            onClose: t,
                                            "aria-label": j.intl.string(j.t.LxVjvJ),
                                            onSelect: t,
                                            children: (0, E.jsx)(J.rX, {
                                                children: T.map((e) => {
                                                    let { id: t, label: i, value: n } = e;
                                                    return (0, E.jsx)(
                                                        J.iD,
                                                        {
                                                            id: t,
                                                            group: "sort-order",
                                                            label: i,
                                                            checked: l === n,
                                                            action: () => {
                                                                er.default.track(
                                                                    eg.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED,
                                                                    {
                                                                        interaction: "sort_order_changed",
                                                                        sort_order: n,
                                                                        activity_restricted_guild_count: c,
                                                                        total_guild_count: m,
                                                                    },
                                                                ),
                                                                    r(n);
                                                            },
                                                        },
                                                        t,
                                                    );
                                                }),
                                            }),
                                        });
                                    },
                                    children: (e) =>
                                        (0, E.jsxs)($.D, {
                                            ...e,
                                            innerRef: h,
                                            className: em.Ku,
                                            children: [
                                                (0, E.jsx)(ee.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: x,
                                                }),
                                                (0, E.jsx)(et.a, { size: "xs", color: ei.A.colors.TEXT_SUBTLE }),
                                            ],
                                        }),
                                }),
                                (0, E.jsx)(en.Q, {
                                    variant: "primary",
                                    textVariant: "text-sm/medium",
                                    onClick: o,
                                    text: a ? j.intl.string(j.t["7lxcLO"]) : j.intl.string(j.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, E.jsx)(es.A, {
                "aria-live": "polite",
                role: "region",
                children: j.intl.format(D.default.EvzDff, { count: i.length }),
            }),
            (0, E.jsxs)("ul", {
                className: em.X1,
                id: A,
                "aria-label": j.intl.string(j.t["7hB4kg"]),
                children: [
                    0 === i.length &&
                        (0, E.jsx)("div", {
                            className: em.pb,
                            children: (0, E.jsx)(ee.E, {
                                className: em.R$,
                                variant: "text-lg/medium",
                                children: j.intl.string(j.t["Xe+fJM"]),
                            }),
                        }),
                    i.map((e) =>
                        (0, E.jsx)(
                            eA,
                            { guild: e, isActivityRestricted: d(e.id), onToggleActivityRestrictedGuild: u },
                            e.id,
                        ),
                    ),
                ],
            }),
        ],
    });
};
var eE = i(366189);
let eS = (0, a.E2)(u.X.ACTIVITY_PRIVACY_PER_GUILD_SETTING, {
        useSearchTerms: () => [j.intl.string(D.default["/LHVbt"])],
        Component: function () {
            let e = L.tz.useSetting()
                ? null
                : (0, E.jsx)("div", {
                      className: eE.l,
                      children: (0, E.jsx)(H.w, { type: "warning", children: j.intl.string(D.default["xxI0/W"]) }),
                  });
            return (0, E.jsx)(eh, { notice: e });
        },
    }),
    eT = (0, a.zZ)(u.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () => {
            let e = (0, o.SV)("GuildActivitySharingCategory"),
                t = k("GuildActivitySharingCategory");
            return e
                ? j.intl.string(j.t["ymulT+"])
                : t
                  ? j.intl.string(j.t.VDcvrR)
                  : j.intl.string(D.default["1PougL"]);
        },
        useSubtitle: () => {
            let e = k("GuildActivitySharingCategory");
            return (0, o.SV)("GuildActivitySharingCategory")
                ? null
                : e
                  ? j.intl.string(j.t["/Go08F"])
                  : j.intl.string(D.default.OO17Lg);
        },
        buildLayout: () => ((0, o.Bv)("GuildActivitySharingCategory") ? [X, eS, B] : [X]),
    }),
    ex = (0, a.zZ)(u.X.ACTIVITY_PRIVACY_MY_SERVERS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.TqdOvC),
        useSubtitle: () => (k("MyServersCategory") ? j.intl.string(D.default.OO17Lg) : null),
        buildLayout: () => [eS, B],
    }),
    ep = (0, a.zD)(u.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => j.intl.string(D.default.khuuzv),
        useSubtitle: () => j.intl.string(D.default["8EWsJ8"]),
        useValue: () => L.e.useSetting(),
        setValue: (e) => L.e.updateSetting(e),
    }),
    ef = (0, a.E2)(u.X.ACTIVITY_PRIVACY_GAME_JOINING_BLURB, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, E.jsx)(ee.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: j.intl.format(j.t.Mf0720, {
                    privacySettingsHook: (e, t) =>
                        (0, E.jsx)(
                            ee.E,
                            { tag: "span", variant: "text-sm/semibold", color: "text-muted", children: e },
                            t,
                        ),
                }),
            });
        },
        usePredicate: () => (0, o.SV)("GameJoiningBlurb"),
    }),
    eN = (0, a.zD)(u.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => j.intl.string(D.default.Uz5Ipi),
        useSubtitle: () => j.intl.string(D.default.CZI2Gb),
        useValue: () => L.UM.useSetting(),
        setValue: (e) => L.UM.updateSetting(e),
    }),
    e_ = (0, a.zZ)(u.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => j.intl.string(D.default["89YBr5"]),
        useSubtitle: () => ((0, o.SV)("GameJoiningCategory") ? j.intl.string(j.t.uGDpgH) : null),
        buildLayout: () => [ep, eN, ef],
        useSearchTerms: () => [j.intl.string(j.t.VOszPA)],
    });
var eI = i(359778),
    eC = i(208963);
let eb = (0, a.E2)(u.X.ACTIVITY_PRIVACY_TERMS, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, E.jsx)(eI.Z, {
                type: eI.Z.Types.PRIMARY,
                className: eC.A,
                children: (0, E.jsx)(ee.E, {
                    variant: "text-sm/normal",
                    children: j.intl.format(j.t.xvCsx4, { termsLink: eg.X7G.TERMS, privacyLink: eg.X7G.PRIVACY }),
                }),
            });
        },
    }),
    ev = (0, a.zZ)(u.X.ACTIVITY_PRIVACY_TERMS_CATEGORY, {
        buildLayout: () => [eb],
        usePredicate: () => !(0, o.SV)("TermsCategory"),
    }),
    ey = (0, a.t_)(u.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => j.intl.string(j.t.Cq98yL),
        buildLayout: () => ((0, o.Bv)("ActivityPrivacyPanel") ? [G, eT, e_] : [G, eT, ex, e_, ev]),
    }),
    ej = (0, a.i4)(u.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.Cq98yL),
        icon: d._,
        buildLayout: () => [ey],
    });
var eO = i(935399),
    eR = i(625657),
    eL = i(534514),
    eD = i(821609),
    eP = i(404778),
    eG = i(554146),
    eM = i(131607),
    eU = i(589051),
    eV = i(592598),
    ek = i(351906),
    ew = i(532624),
    eB = i(773371),
    eF = i(184809),
    ez = i(723702),
    eY = i(766075),
    eX = i(999834),
    eH = i(735438),
    eK = i.n(eH),
    eW = i(350535),
    eZ = i(672396);
let eq = eJ(null);
function eQ() {
    var e;
    let t = eJ(eq);
    (e = eq),
        eK().isEqual(eK().omit(t, "old_enabled"), eK().omit(e, "old_enabled")) ||
            (er.default.track(eg.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (eq = t));
}
function eJ(e) {
    let t = eF.default.getNotificationPositionMode(),
        i = t !== eg.G6Q.DISABLED,
        n = ew.Ay.getOverlayKeybind(),
        s = ew.Ay.getOverlayChatKeybind();
    return {
        enabled: eB.default.enabled,
        notifications_enabled: i,
        notifications_position: i ? t : null,
        text_notifications_mode: eV.A.isNotificationDisabled(eZ.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != n ? (0, eW.dI)(n.shortcut) : null,
        text_activation_hotkey: null != s ? (0, eW.dI)(s.shortcut) : null,
        text_opacity_slider: eF.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? eB.default.enabled,
    };
}
var e$ = i(793574),
    e0 = i(237984),
    e1 = i(503698),
    e2 = i.n(e1),
    e3 = i(890856),
    e6 = i(389128);
let e4 = (e) => {
    e.preventDefault(), e.stopPropagation();
};
function e5(e) {
    let {
        header: t,
        icon: i,
        title: n,
        description: s,
        action: l,
        hint: r,
        warning: a,
        onClick: o,
        "aria-label": u,
        className: d,
    } = e;
    return (0, E.jsxs)("div", {
        className: e2()(e6.HS, d),
        children: [
            (0, E.jsxs)(e3.s, {
                "aria-label": u,
                onClick: o,
                children: [
                    null != t && (0, E.jsx)("div", { className: e6.x_, children: t }),
                    (0, E.jsxs)("div", {
                        className: e6.rN,
                        children: [
                            null != i && (0, E.jsx)("div", { className: e6.$t, children: i }),
                            (0, E.jsxs)("div", {
                                className: e6.c8,
                                children: [
                                    (0, E.jsx)(ee.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: e6.SZ,
                                        children: n,
                                    }),
                                    null != s &&
                                        (0, E.jsx)(ee.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: s,
                                        }),
                                    null != r &&
                                        (0, E.jsx)(ee.E, {
                                            variant: "text-xxs/medium",
                                            color: "text-muted",
                                            children: r,
                                        }),
                                ],
                            }),
                            (0, E.jsx)("div", { className: e6.a$, children: l }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)("div", { className: e6.Om, children: a }),
        ],
    });
}
let e7 = (0, a.E2)(u.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, E.jsx)(e5, {
            title: j.intl.string(j.t["z4/l+V"]),
            description: j.intl.string(j.t["3aZq/0"]),
            action: (0, E.jsx)(eD.$, {
                variant: "primary",
                text: j.intl.string(j.t.s2nVhG),
                onClick: () => {
                    (0, e0.b)(e$.A.USER_SETTINGS, eg.BRT.APP);
                },
            }),
            "aria-label": j.intl.string(j.t["z4/l+V"]),
        });
    },
    useSearchTerms: () => [j.intl.string(j.t["z4/l+V"])],
});
var e8 = i(812729),
    e9 = i.n(e8),
    te = i(429913),
    tt = i(616356);
function ti(e, t) {
    return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0;
}
function tn() {
    let e = (0, g.bG)([tt.A], () => tt.A.getStreamerActiveStreamMetadata()),
        t = (0, g.bG)(
            [m.Ay],
            () => {
                let e = m.Ay.getVisibleGame();
                return null != e ? m.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
            },
            [],
            e9(),
        ),
        [i] = (0, te.A)([ti(e, t)]);
    return { runningGame: t ?? void 0, runningGameApplication: i ?? void 0 };
}
var ts = i(990078),
    tl = i(478016),
    tr = i(31300),
    ta = i(780907),
    to = i(684013),
    tu = i(56562),
    td = i(964486),
    tc = i(814925),
    tg = i(810412),
    tm = i(41984),
    tA = i(296027),
    th = i(562519);
let tE = 5 * i(927813).A.Millis.DAY,
    tS = new th.A("overlay_survey_timestamps");
function tT(e, t) {
    let n, s;
    (n = Date.now()),
        (null != (s = Array.from(tS.values()).reduce((e, t) => Math.max(e, t), 0)) && n - s < tE) ||
            Array.from(tS.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, z.openModalLazy)(async () => {
                let n,
                    { default: s } = await Promise.all([i.e("76982"), i.e("82318")]).then(i.bind(i, 387101));
                return (n = Date.now()), tS.add(n), (i) => (0, E.jsx)(s, { ...i, clientSettingType: e, gameId: t });
            });
}
var tx = i(512950),
    tp = i(975571),
    tf = i(935671);
function tN() {
    (0, tf.sL)("overlay-settings");
}
function t_(e) {
    let { className: t, game: i } = e;
    return (0, tf.NP)() && null != i && i.elevated
        ? (0, E.jsx)("div", {
              className: t,
              children: (0, E.jsx)(tx.p, {
                  messageType: tx.Y.WARNING,
                  action: (0, E.jsx)(eD.$, {
                      variant: "secondary",
                      size: "sm",
                      text: j.intl.string(j.t["1iI46O"]),
                      onClick: tN,
                  }),
                  children: j.intl.format(j.t["LJzl+0"], { helpCenterLink: tp.A.getArticleURL(eg.MVz.SYSTEM_SERVICE) }),
              }),
          })
        : null;
}
var tI = i(760751),
    tC = i(189081),
    tb = i(9302),
    tv = i(311678),
    ty = i(320448);
let tj = new Set([
    tm.AR.INITIALIZING,
    tm.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
    tm.AR.WAITING_FOR_MODULE_TRACKING,
    tm.AR.WAITING_FOR_OVERLAY_OPEN,
    tm.AR.WAITING_FOR_POPOUT_OPEN,
    tm.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
    tm.AR.WAITING_FOR_REACT_INITIALIZATION,
    tm.AR.WAITING_FOR_PID_FOCUS,
    tm.AR.WAITING_FOR_SUCCESSFUL_SHOW,
]);
function tO(e) {
    let { children: t, className: i, onExpand: n, ...s } = e,
        [l, r] = S.useState(!1);
    return (0, E.jsx)(tv.N, {
        className: e6.uR,
        collapsibleContent: (0, E.jsx)("div", { className: e6.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, E.jsx)(e5, {
                ...s,
                onClick: (e) => {
                    var i;
                    r((i = !l)), n?.(i), t?.(e);
                },
                className: e2()(e6.AC, i),
                action: (0, E.jsxs)("div", {
                    className: e6.rc,
                    children: [
                        s.action,
                        l
                            ? (0, E.jsx)(et.a, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              })
                            : (0, E.jsx)(ty._, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              }),
                    ],
                }),
            });
        },
    });
}
let tR = (0, a.E2)(u.X.OVERLAY_CURRENT_GAME, {
    Component: function () {
        let { runningGame: e, runningGameApplication: t } = tn(),
            i = e?.pid,
            n = (0, g.bG)(
                [tA.default],
                () => (null == e || null == i ? null : tA.default.getTrackedGameByPid(i)),
                [e, i],
                e9(),
            ),
            { enabledLegacy: s, enabledOOP: l } = (0, g.cf)(
                [tI.A, tC.A],
                () =>
                    null == e && null == n
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: n?.legacyEnabled ?? !1, enabledOOP: n?.oopEnabled ?? !1 }
                          : (0, m.hw)(e, !1, [tI.A, tC.A]),
                [e, n],
            ),
            r = (0, g.bG)([m.Ay, tI.A, tC.A], () => (null == e ? null : (0, m.xU)(e, m.Ay, tI.A, tC.A)), [e], e9()),
            [a, o] = S.useState(l),
            [u, d] = S.useState(s),
            [c, A] = S.useState(!1);
        S.useEffect(() => {
            o(l), d(s);
        }, [l, s]);
        let h = !(0, tb.supportsLegacy)(),
            T = !(0, tb.supportsOutOfProcess)(),
            { legacyEnabled: x, oopEnabled: f } = (0, g.cf)([tA.default], () => tA.default.getGlobalEnabledStatus()),
            N = (t, i) => {
                if (null == e) return;
                let n = !1,
                    s = !1;
                switch (i) {
                    case tg.OverlayToggledClientSettingType.LEGACY_GAME:
                        d(t), ta.Ay.toggleOverlay(e, t, a), (n = !t && u);
                        break;
                    case tg.OverlayToggledClientSettingType.OOP_GAME:
                        o(t), ta.Ay.toggleOverlay(e, u, t), (s = !t && a);
                        break;
                    case tg.OverlayToggledClientSettingType.LEGACY:
                        to.A.setEnabled(t, f), (0, tg.Q3)(t, tg.OverlayToggledClientSettingType.LEGACY, e.id ?? null);
                        break;
                    case tg.OverlayToggledClientSettingType.OOP:
                        to.A.setEnabled(x, t), (0, tg.Q3)(t, tg.OverlayToggledClientSettingType.OOP, e.id ?? null);
                }
                (n || s) &&
                    tT(
                        n
                            ? tg.OverlayToggledClientSettingType.LEGACY_GAME
                            : tg.OverlayToggledClientSettingType.OOP_GAME,
                        e.id ?? null,
                    );
            },
            _ = h && T,
            I = !x && !f,
            C = !a && !x && u && !h,
            b = !u && !f && a && !T,
            v = n?.overlayMethod === tm.Ue.Disabled,
            y = n?.state === tm.AR.OVERLAY_RENDERING && !v,
            O = n?.state != null && tj.has(n.state) && !v,
            R = n?.overlayMethod === tm.Ue.OutOfProcess,
            L = n?.overlayMethod === tm.Ue.OutOfProcessLimitedInteraction,
            D = n?.overlayMethod === tm.Ue.Hook,
            P = n?.state === tm.AR.OVERLAY_CRASHED || n?.state === tm.AR.OVERLAY_CRASHED_DISABLED,
            G = !a && !u,
            [M, U] = (() => {
                switch (!0) {
                    case y && R:
                        return [
                            j.intl.format(j.t.hFVBIg, {
                                overlayMethod: j.intl.string(j.t.a3eXSw),
                                overlayMethodHook: function (e, t) {
                                    return (0, E.jsx)(
                                        ee.E,
                                        {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-feedback-positive",
                                            children: e,
                                        },
                                        t,
                                    );
                                },
                            }),
                            null,
                        ];
                    case y && L:
                        return [
                            j.intl.format(j.t.hFVBIg, {
                                overlayMethod: j.intl.string(j.t["506Aba"]),
                                overlayMethodHook: function (e, t) {
                                    return (0, E.jsx)(
                                        ee.E,
                                        {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-feedback-warning",
                                            children: e,
                                        },
                                        t,
                                    );
                                },
                            }),
                            null,
                        ];
                    case y && D:
                        return [
                            j.intl.format(j.t.hFVBIg, {
                                overlayMethod: j.intl.string(j.t.bvlpDR),
                                overlayMethodHook: function (e, t) {
                                    return (0, E.jsx)(
                                        ee.E,
                                        { tag: "span", variant: "text-sm/medium", color: "text-strong", children: e },
                                        t,
                                    );
                                },
                            }),
                            (function () {
                                switch (!0) {
                                    case n?.fullscreenType !== tu.aI.BORDERLESS_FULLSCREEN:
                                        return j.intl.string(j.t.mJmbeC);
                                    case T:
                                        return j.intl.string(j.t.C7bLTQ);
                                    case !n?.oopEnabled:
                                        return j.intl.string(j.t.WiY24u);
                                    case !f:
                                        return j.intl.string(j.t.cAFVsL);
                                    case !n?.supportsOutOfProcess:
                                        return j.intl.string(j.t.XcGEcs);
                                    default:
                                        return j.intl.string(j.t.bJXH2v);
                                }
                            })(),
                        ];
                    case P:
                        return [j.intl.string(j.t.OFC2aw), null];
                    case _:
                        return [j.intl.string(j.t.m7X4az), null];
                    case I:
                        return [j.intl.string(j.t["9DUS5l"]), null];
                    case G:
                        return [j.intl.string(j.t.nQ9EdJ), null];
                    case C:
                    case b:
                        return [j.intl.string(j.t.VWUn0a), null];
                    case O:
                        if (R) return [j.intl.string(j.t["s8+CFq"]), null];
                        if (D) return [j.intl.string(j.t.JEEdqt), null];
                        if (L) return [j.intl.string(j.t.pzBMwY), null];
                        return [j.intl.string(j.t["2Xhy9k"]), null];
                    case null == n:
                        return [j.intl.string(j.t.vwHPRi), null];
                    case v: {
                        let e = n?.fullscreenType === tu.aI.FULLSCREEN ? j.intl.string(j.t.mJmbeC) : null;
                        return [j.intl.string(j.t.VPW4XY), e];
                    }
                    default:
                        return [j.intl.string(j.t.ONovP5), null];
                }
            })();
        (0, td.Ay)(() => {
            ta.Ay.getDetectableGames();
        });
        let [V, k] = S.useMemo(
            () =>
                O
                    ? ["text-muted", ei.A.colors.TEXT_MUTED.css]
                    : y && L
                      ? ["text-feedback-warning", ei.A.colors.TEXT_FEEDBACK_WARNING.css]
                      : y && R
                        ? ["text-feedback-positive", ei.A.colors.TEXT_FEEDBACK_POSITIVE.css]
                        : y && D
                          ? ["text-strong", ei.A.colors.TEXT_STRONG.css]
                          : ["interactive-text-default", ei.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
            [O, y, L, R, D],
        );
        return null == e
            ? null
            : (0, E.jsxs)(tO, {
                  onExpand: A,
                  className: c ? e6.tx : void 0,
                  title: (0, E.jsxs)(E.Fragment, {
                      children: [
                          t?.name ?? r?.name ?? e?.gameName ?? "",
                          null != r && r.verified
                              ? (0, E.jsx)(ts.m, {
                                    text: j.intl.string(j.t["4PJP5p"]),
                                    children: (0, E.jsx)(tc.A, {
                                        size: 16,
                                        color: ei.A.colors.BACKGROUND_BRAND.css,
                                        children: (0, E.jsx)(tl.U, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: ei.A.colors.WHITE.css,
                                        }),
                                    }),
                                })
                              : null,
                      ],
                  }),
                  description: M,
                  hint: null != U ? U : void 0,
                  header: (0, E.jsxs)(E.Fragment, {
                      children: [
                          y || O
                              ? (0, E.jsx)(tr.k, { size: "xxs", color: k })
                              : (0, E.jsx)("div", { className: e6.W4 }),
                          (0, E.jsx)(ee.E, {
                              variant: "text-xs/semibold",
                              color: V,
                              children: j.intl.string(j.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, E.jsx)(p.A, { game: t, pid: e?.pid, size: p.M.MEDIUM }),
                  "aria-label": j.intl.string(j.t["87O5GC"]),
                  action: (0, E.jsx)($.D, {
                      onClick: (e) => e4(e),
                      children: (0, E.jsx)(W.d, {
                          checked: (a && f) || (u && x),
                          disabled: _,
                          onChange: (t) => {
                              ((t, i) => {
                                  if (null == e) return;
                                  let n = !1,
                                      s = !1;
                                  switch (i) {
                                      case "game":
                                          ta.Ay.toggleOverlay(e, t, t), d(t), o(t), (n = !t && u), (s = !t && a);
                                          break;
                                      case "global":
                                          to.A.setEnabled(t, t), (n = !t && x), (s = !t && f);
                                          break;
                                      case "both":
                                          to.A.setEnabled(t, t),
                                              ta.Ay.toggleOverlay(e, t, t),
                                              d(t),
                                              o(t),
                                              (n = (!t && x) || (!t && u)),
                                              (s = (!t && f) || (!t && a));
                                  }
                                  let l = null;
                                  n
                                      ? (l =
                                            "game" === i
                                                ? tg.OverlayToggledClientSettingType.LEGACY_GAME
                                                : tg.OverlayToggledClientSettingType.LEGACY)
                                      : s &&
                                        (l =
                                            "game" === i
                                                ? tg.OverlayToggledClientSettingType.OOP_GAME
                                                : tg.OverlayToggledClientSettingType.OOP),
                                      null != l && tT(l, e.id ?? null);
                              })(
                                  t,
                                  ((e, t) => {
                                      let i = !t && e,
                                          n = !f && a,
                                          s = !x && u,
                                          l = !a && f,
                                          r = !u && x;
                                      switch (!0) {
                                          case i && (n || s) && (l || r):
                                              return "both";
                                          case i && (n || s):
                                              return "global";
                                          default:
                                              return "game";
                                      }
                                  })(t, (a && f) || (u && x)),
                              );
                          },
                      }),
                  }),
                  warning: (0, E.jsx)(t_, { className: e6.Hh, game: e }),
                  children: [
                      (0, E.jsx)(e5, {
                          title: j.intl.string(j.t["7BlVIs"]),
                          description: j.intl.string(j.t.ndgADE),
                          hint: f ? void 0 : j.intl.string(j.t.cAFVsL),
                          "aria-label": j.intl.string(j.t["7BlVIs"]),
                          action: (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(W.d, {
                                      checked: a && f,
                                      disabled: T,
                                      onChange: (e) => {
                                          e && !f
                                              ? N(e, tg.OverlayToggledClientSettingType.OOP)
                                              : N(e, tg.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, E.jsx)("div", { className: e6.Kz }),
                              ],
                          }),
                      }),
                      (0, E.jsx)(e5, {
                          title: j.intl.string(j.t.BfFpW1),
                          description: j.intl.string(j.t.OzInYk),
                          hint: x ? void 0 : j.intl.string(j.t["3sYHXm"]),
                          "aria-label": j.intl.string(j.t.BfFpW1),
                          action: (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(W.d, {
                                      checked: u && x,
                                      disabled: h,
                                      onChange: (e) => {
                                          e && !x
                                              ? N(e, tg.OverlayToggledClientSettingType.LEGACY)
                                              : N(e, tg.OverlayToggledClientSettingType.LEGACY_GAME);
                                      },
                                  }),
                                  (0, E.jsx)("div", { className: e6.Kz }),
                              ],
                          }),
                      }),
                  ],
              });
    },
    usePredicate: () => {
        let { runningGame: e } = tn();
        return null != e;
    },
    useSearchTerms: () => [j.intl.string(j.t["9cb1Uz"])],
});
var tL = i(364522),
    tD = i(206885);
function tP(e) {
    let { game: t, gameApplication: i } = e,
        n = S.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        s = (0, g.bG)([x.A], () => (null != i ? i : x.A.getApplication(t?.id)), [i, t]);
    return (0, E.jsx)(p.A, { game: s, pid: n, size: p.M.SMALL });
}
function tG(e) {
    let {
            rawGame: t,
            gameApplication: i,
            supportDisabled: n,
            getEnabledFromStatus: s,
            onChange: l,
            clientSettingType: r,
            ariaLabel: a,
        } = e,
        o = (0, g.cf)([m.Ay, tI.A, tC.A], () => (0, m.xU)(t, m.Ay, tI.A, tC.A)),
        u = (0, g.cf)([tI.A, tC.A], () => (0, m.hw)(t, !1, [tI.A, tC.A]), [t]),
        d = s(u),
        [c, A] = S.useState(d);
    return (
        S.useEffect(() => {
            A(d);
        }, [d]),
        (0, E.jsx)(e5, {
            title: t.name,
            icon: (0, E.jsx)(tP, { game: o, gameApplication: i }),
            "aria-label": a,
            action: (0, E.jsxs)(E.Fragment, {
                children: [
                    (0, E.jsx)(W.d, {
                        checked: c,
                        disabled: n,
                        onChange: (e) => {
                            let i;
                            return (i = !e && c), void (A(e), l(e, o, u), i && tT(r, o.id ?? t?.id ?? null));
                        },
                    }),
                    (0, E.jsx)("div", { className: e6.Kz }),
                ],
            }),
        })
    );
}
let tM = (0, a.E2)(u.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = S.useState(!1),
                { legacyEnabled: i, oopEnabled: n } = (0, g.cf)([tA.default], () =>
                    tA.default.getGlobalEnabledStatus(),
                ),
                s = (0, g.yK)([m.Ay], () => m.Ay.getGamesSeen(!0)).filter((e) => !(0, A.n1)(e)),
                l = (0, te.A)(s.map((e) => e.id)),
                r = !(0, tb.supportsLegacy)(),
                a = (e) => {
                    to.A.setEnabled(e, n);
                    let t = m.Ay.getCurrentGameForAnalytics()?.id ?? null;
                    (0, tg.Q3)(e, tg.OverlayToggledClientSettingType.LEGACY, t),
                        !e && i && tT(tg.OverlayToggledClientSettingType.LEGACY, t);
                },
                o = (e, t, i) => {
                    let { enabledOOP: n } = i;
                    ta.Ay.toggleOverlay(t, e, n);
                },
                u = S.useMemo(
                    () =>
                        (0, tb.supportsLegacy)()
                            ? r
                                ? j.intl.string(j.t.r9jEVw)
                                : j.intl.string(j.t.OzInYk)
                            : j.intl.string(j.t["8Ox6/E"]),
                    [r],
                );
            return 0 === s.length
                ? (0, E.jsx)(e5, {
                      title: j.intl.string(j.t.BfFpW1),
                      description: u,
                      "aria-label": j.intl.string(j.t.BfFpW1),
                      className: e6.dA,
                      action: (0, E.jsxs)(E.Fragment, {
                          children: [
                              (0, E.jsx)(W.d, { checked: i, disabled: r, onChange: (e) => a(e) }),
                              tD.O && (0, E.jsx)("div", { className: e6.Kz }),
                          ],
                      }),
                  })
                : (0, E.jsxs)(tO, {
                      onExpand: t,
                      className: e ? e6.tx : void 0,
                      title: j.intl.string(j.t.BfFpW1),
                      description: u,
                      "aria-label": j.intl.string(j.t.BfFpW1),
                      action: (0, E.jsx)($.D, {
                          onClick: (e) => e4(e),
                          children: (0, E.jsx)(W.d, { checked: i, disabled: r, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, E.jsx)("div", {
                              className: e6.SC,
                              children: (0, E.jsx)(ee.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: j.intl.string(j.t.FzoWRo),
                              }),
                          }),
                          (0, E.jsx)(tL.Ip, {
                              className: e6.XG,
                              children: s.map((e, t) =>
                                  (0, E.jsx)(
                                      tG,
                                      {
                                          rawGame: e,
                                          clientSettingType: tg.OverlayToggledClientSettingType.LEGACY_GAME,
                                          supportDisabled: r,
                                          gameApplication: l[t],
                                          getEnabledFromStatus: (e) => {
                                              let { enabledLegacy: t } = e;
                                              return t;
                                          },
                                          onChange: o,
                                          ariaLabel: j.intl.format(j.t.hvPYsF, { gameName: e.name }).toString(),
                                      },
                                      e.id,
                                  ),
                              ),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t.BfFpW1)],
    }),
    tU = (0, a.E2)(u.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = S.useState(!1),
                { oopEnabled: i, legacyEnabled: n } = (0, g.cf)([tA.default], () =>
                    tA.default.getGlobalEnabledStatus(),
                ),
                s = !(0, tb.supportsOutOfProcess)(),
                l = (0, g.yK)([m.Ay], () => m.Ay.getGamesSeen(!0)).filter((e) => !(0, A.n1)(e)),
                r = (0, te.A)(l.map((e) => e.id)),
                a = (e) => {
                    let t = !e && i;
                    to.A.setEnabled(n, e);
                    let s = m.Ay.getCurrentGameForAnalytics()?.id ?? null;
                    (0, tg.Q3)(e, tg.OverlayToggledClientSettingType.OOP, s),
                        t && tT(tg.OverlayToggledClientSettingType.OOP, s);
                },
                o = (e, t, i) => {
                    let { enabledLegacy: n } = i;
                    ta.Ay.toggleOverlay(t, e, n);
                },
                u = S.useMemo(
                    () =>
                        tD.O ? (s ? j.intl.string(j.t.C7bLTQ) : j.intl.string(j.t.ndgADE)) : j.intl.string(j.t.m7X4az),
                    [s],
                );
            return 0 === l.length
                ? (0, E.jsx)(e5, {
                      title: j.intl.string(j.t["7BlVIs"]),
                      description: u,
                      "aria-label": j.intl.string(j.t["7BlVIs"]),
                      className: e6.dA,
                      action: (0, E.jsxs)(E.Fragment, {
                          children: [
                              (0, E.jsx)(W.d, { checked: i, disabled: s, onChange: (e) => a(e) }),
                              tD.O && (0, E.jsx)("div", { className: e6.Kz }),
                          ],
                      }),
                  })
                : (0, E.jsxs)(tO, {
                      onExpand: t,
                      className: e ? e6.tx : void 0,
                      title: j.intl.string(j.t["7BlVIs"]),
                      description: u,
                      "aria-label": j.intl.string(j.t["7BlVIs"]),
                      action: (0, E.jsx)($.D, {
                          onClick: (e) => e4(e),
                          children: (0, E.jsx)(W.d, { checked: i, disabled: s, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, E.jsx)("div", {
                              className: e6.SC,
                              children: (0, E.jsx)(ee.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: j.intl.string(j.t.FzoWRo),
                              }),
                          }),
                          (0, E.jsx)(tL.Ip, {
                              className: e6.XG,
                              children: l.map((e, t) =>
                                  (0, E.jsx)(
                                      tG,
                                      {
                                          rawGame: e,
                                          clientSettingType: tg.OverlayToggledClientSettingType.OOP_GAME,
                                          gameApplication: r[t],
                                          supportDisabled: s,
                                          getEnabledFromStatus: (e) => {
                                              let { enabledOOP: t } = e;
                                              return t;
                                          },
                                          onChange: o,
                                          ariaLabel: j.intl.format(j.t.nByTd3, { gameName: e.name }).toString(),
                                      },
                                      e.id,
                                  ),
                              ),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t["7BlVIs"])],
    }),
    tV = (0, a.zZ)(u.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => j.intl.string(j.t["/dp6yY"]),
        buildLayout: () => [tR, tU, tM, e7],
    }),
    tk = (0, a.zD)(u.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, g.bG)([eF.default], () => !eF.default.disableClickableRegions),
        setValue: (e) => {
            to.A.setDisableClickableRegions(!e);
        },
        useTitle: () => j.intl.string(j.t["+eFXxq"]),
        useSubtitle: () => j.intl.string(j.t.kivMAp),
    });
var tw = i(284009),
    tB = i.n(tw),
    tF = i(97260),
    tz = i(635242);
let tY = (0, a.E2)(u.X.OVERLAY_KEYBIND_SETTING, {
    Component: function () {
        let e = (0, g.bG)([ew.Ay], () => ew.Ay.getOverlayKeybind()),
            t = !(0, tb.supportsLegacy)(),
            i = !(0, tb.supportsOutOfProcess)(),
            [n, s] = (0, g.yK)([m.Ay], () => [m.Ay.canShowAdminWarning, m.Ay.getVisibleGame()], []),
            l = (0, tf.NP)(),
            r = null != s && s.elevated && n && !l,
            a = !(0, ew.DV)(e?.shortcut ?? []);
        return (0, E.jsx)("div", {
            className: e6.hc,
            children: (0, E.jsxs)("div", {
                className: e6.eH,
                children: [
                    (0, E.jsxs)("div", {
                        className: e6.Bu,
                        children: [
                            (0, E.jsx)(ee.E, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: j.intl.string(j.t.VsAZcC),
                            }),
                            r &&
                                (0, E.jsx)(ee.E, {
                                    variant: "text-xs/normal",
                                    color: "text-feedback-warning",
                                    className: e6.y7,
                                    children: j.intl.string(j.t.NsowVa),
                                }),
                            a &&
                                (0, E.jsx)(ee.E, {
                                    variant: "text-xs/normal",
                                    color: "text-feedback-warning",
                                    className: e6.y7,
                                    children: j.intl.string(j.t["UNoTw/"]),
                                }),
                        ],
                    }),
                    (0, E.jsx)("div", {
                        className: e6.IH,
                        children: (0, E.jsx)(tz.A, {
                            disabled: t && i,
                            defaultValue: null != e ? e.shortcut : [],
                            onChange: function (t) {
                                tB()(null != e, "Keybind should never be undefined"),
                                    tF.A.setKeybind({ ...e, shortcut: t });
                            },
                        }),
                    }),
                ],
            }),
        });
    },
    useSearchTerms: () => [j.intl.string(j.t.VsAZcC)],
});
var tX = i(515183),
    tH = i(682763);
let tK = (0, a.zD)(u.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
        usePredicate: () => {
            let { runningGameApplication: e } = tn();
            return e?.id != null;
        },
        useDisabled: () => {
            let { runningGame: e } = tn();
            return null != e && (0, tX.qJ)(e.pid);
        },
        useValue: () => {
            let { runningGame: e, runningGameApplication: t } = tn(),
                i = t?.id,
                n = (0, g.bG)([eV.A], () => eV.A.isLimitedInteractionOverrideEnabled(i)),
                s = null != e && (0, tX.qJ)(e.pid);
            return n || s;
        },
        setValue: (e) => {
            let t,
                i,
                n,
                s,
                { runningGameApplication: l } =
                    ((t = tt.A.getStreamerActiveStreamMetadata()),
                    (s = ti(
                        t,
                        (n =
                            null != (i = m.Ay.getVisibleGame()) ? m.Ay.getGameOrTransformedSubgameForPID(i.pid) : null),
                    )),
                    { runningGame: n ?? void 0, runningGameApplication: x.A.getApplication(s) ?? void 0 });
            null != l && (0, tH.x8)(l.id, e);
        },
        useTitle: () => j.intl.string(j.t.wgVQND),
        useSubtitle: () => j.intl.string(j.t["5SsyF5"]),
    }),
    tW = (0, a.zZ)(u.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [tY, tK, tk] });
var tZ = i(93465);
let tq = [
    {
        title: j.t.eVE4LX,
        description: j.t["72WNqk"],
        disabledSetting: tZ.M.TEXT_CHAT,
        key: u.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: j.t.oifnSh,
        description: j.t.bgU5r0,
        disabledSetting: tZ.M.WELCOME_GENERAL,
        key: u.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: j.t.hqsZJW,
        description: j.t.kHjdqc,
        disabledSetting: tZ.M.GO_LIVE_NUDGE,
        key: u.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: j.t.sop3rn,
        description: j.t.pjgffc,
        disabledSetting: tZ.M.GAME_ACTIVITY,
        key: u.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: j.t["2QVhbb"],
        description: j.t.wQ4ilB,
        disabledSetting: tZ.M.NOW_PLAYING,
        key: u.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: j.t.giM9fA,
        description: j.t.EhAfWj,
        disabledSetting: tZ.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: u.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, eU.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, g.bG)([eV.A], () => eV.A.isNotificationDisabledBySetting(tZ.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function tQ(e) {
    return (0, a.zD)(e.key, {
        useTitle: () => j.intl.string(e.title),
        useSubtitle: () => j.intl.string(e.description),
        useValue: () => !(0, g.bG)([eV.A], () => eV.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            to.A.setNotificationDisabledSetting(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let tJ = (0, a.FW)(u.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => tq.map(tQ),
    }),
    t$ = (0, a.zZ)(u.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.xOE5bA),
        buildLayout: () => [tJ],
    }),
    t0 = (0, a.Hn)(u.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
        useTitle: () => j.intl.string(j.t.dnvZSg),
        useValue: () => (0, g.bG)([eF.default], () => eF.default.getAvatarSizeMode()),
        setValue: (e) => {
            to.A.setAvatarSizeMode(e);
        },
        useOptions: () => [
            { id: "large", label: j.intl.string(j.t.YcOxtr), value: eg.OSZ.LARGE },
            { id: "small", label: j.intl.string(j.t.BKIKqx), value: eg.OSZ.SMALL },
        ],
    }),
    t1 = (0, a.Hn)(u.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => j.intl.string(j.t.J0dpcB),
        useValue: () => (0, g.bG)([eF.default], () => eF.default.getDisplayNameMode()),
        setValue: (e) => {
            to.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: j.intl.string(j.t.nBmDrT), value: eg.pwA.ALWAYS },
            { id: "speaking", label: j.intl.string(j.t["2OvIZY"]), value: eg.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: j.intl.string(j.t.ekjlPL), value: eg.pwA.NEVER },
        ],
    }),
    t2 = (0, a.Hn)(u.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => j.intl.string(j.t.swsWWC),
        useValue: () => (0, g.bG)([eF.default], () => eF.default.getDisplayUserMode()),
        setValue: (e) => {
            to.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: j.intl.string(j.t.nBmDrT), value: eg.f5z.ALWAYS },
            { id: "speaking", label: j.intl.string(j.t["2OvIZY"]), value: eg.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var t3 = i(391973),
    t6 = i(489277),
    t4 = i(897720),
    t5 = i(38502);
function t7() {
    let e = t6.A.getWidgetByType(eg.uss.VOICE_V3);
    if (null == e) return null;
    let t = t5.A.getWidget(e.id);
    return null != t && (0, t4.ZO)(t) ? t : null;
}
i(392164);
let t8 = (0, a.sN)(u.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => j.intl.string(j.t["X/Uyzc"]),
    minValue: 0,
    maxValue: 25,
    markers: [0, 5, 10, 15, 20, 25],
    onMarkerRender: (e) => (e < 1 ? j.intl.string(j.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = t7();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < 1 ? j.intl.string(j.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = t7();
        null != t &&
            (e < 1
                ? (0, t3.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, t3.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
var t9 = i(43990),
    ie = i(450740),
    it = i(968898),
    ii = i(95701),
    is = i(889227),
    il = i(288737),
    ir = i(287809);
function ia(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new il.A({
            channelId: "123",
            userId: s,
            sessionId: "789",
            mute: t,
            deaf: i,
            selfMute: !1,
            selfDeaf: !1,
            selfVideo: !1,
            selfStream: !1,
            discoverable: n,
        }),
        user: new is.A({ id: s, username: e }),
        member: {
            nick: e,
            userId: s,
            guildId: "890",
            roles: [],
            hoistRoleId: null,
            premiumSince: null,
            joinedAt: new Date().toISOString(),
            colorString: "#000000",
            colorStrings: { primaryColor: "#000000", secondaryColor: null, tertiaryColor: null },
        },
        nick: e,
        comparator: e,
        _isPlaceholder: !0,
    };
}
let io = (0, a.E2)(u.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
        Component: function () {
            let e,
                t = (0, g.bG)([ir.default], () => ir.default.getCurrentUser()),
                {
                    avatarSizeMode: i,
                    displayNameMode: n,
                    displayUserMode: s,
                } = (0, g.cf)([eF.default], () => ({
                    avatarSizeMode: eF.default.getAvatarSizeMode(),
                    displayNameMode: eF.default.getDisplayNameMode(),
                    displayUserMode: eF.default.getDisplayUserMode(),
                })),
                [l] = S.useState(() => [
                    ia(j.intl.string(j.t.C0ZDvo), !0, !1),
                    ia(j.intl.string(j.t.iOtj8E), !1, !1, !0),
                    ia(j.intl.string(j.t["0oqNgL"]), !1, !0),
                ]),
                r = (0, g.bG)([t6.A, t5.A], () => {
                    let e = t6.A.getWidgetByType(eg.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = t5.A.getWidget(e.id);
                    return null != t && (0, t4.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = ia(t.username)).user = t), e) : null, ...l].filter(N.Vq),
                u = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                d = (0, E.jsx)(t9.N, {
                    theme: eg.NJ8.MIDNIGHT,
                    children: (e) =>
                        (0, E.jsxs)("div", {
                            className: e2()(e6.Y5, e),
                            children: [
                                (0, E.jsx)("div", {
                                    className: e6.kJ,
                                    children: (0, E.jsx)(ie.DH, {
                                        id: "voice-widget",
                                        title: j.intl.string(j.t.KNJ6Vq),
                                        channel: (0, ii.createChannelRecord)({
                                            id: "123",
                                            name: "Test Channel",
                                            type: eg.rbe.GUILD_VOICE,
                                            guild_id: "456",
                                        }),
                                        overlayVoiceStates: u,
                                        displayNameMode: n,
                                        displayUserMode: s,
                                        avatarSizeMode: i,
                                        widget: eg.uss.VOICE,
                                        anchorLeft: !0,
                                        application: null,
                                        stream: null,
                                        streamApplication: null,
                                        streamMetadata: null,
                                        locked: !1,
                                        pinned: !1,
                                        isSettingsPreview: !0,
                                        isPreviewingInGame: !1,
                                        maxDisplayedVoiceStates: a,
                                    }),
                                }),
                                (0, E.jsxs)("div", {
                                    className: e6.R$,
                                    children: [
                                        (0, E.jsx)(it.Pl, { children: j.intl.string(j.t.KNJ6Vq) }),
                                        (0, E.jsx)(it.CS, {}),
                                        (0, E.jsx)(it.O0, { id: r?.id ?? "voice-widget", pinned: r?.pinned ?? !1 }),
                                    ],
                                }),
                            ],
                        }),
                });
            return (0, E.jsx)("div", { className: e6.F9, children: d });
        },
        useSearchTerms: () => [],
    }),
    iu = (0, a.zZ)(u.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => j.intl.string(j.t.r1TZfh),
        buildLayout: () => [io, t0, t1, t2, t8],
    });
var id = i(49999),
    ic = i(9025);
function ig() {
    let [e, t] = (0, eM.kn)([eG.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
    return ((0, eO.Ay)(() => () => {
        t(id.i.AUTO_DISMISS);
    }),
    e !== eG.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, E.jsxs)(E.Fragment, {
              children: [
                  (0, E.jsxs)("div", {
                      className: ic.xC,
                      children: [
                          (0, E.jsx)("div", {
                              children: (0, E.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/10b8ab47f3371360233219f4b20fa86155553ddb810ceb8688654738bf7e15d0.png",
                                  alt: j.intl.string(j.t.mdXZh1),
                                  className: ic.tl,
                              }),
                          }),
                          (0, E.jsx)("div", {
                              children: (0, E.jsxs)("div", {
                                  className: ic.vJ,
                                  children: [
                                      (0, E.jsx)(eL.D, {
                                          variant: "heading-xl/medium",
                                          color: "text-strong",
                                          children: j.intl.string(j.t.jzjJQg),
                                      }),
                                      (0, E.jsx)(ee.E, {
                                          variant: "text-md/normal",
                                          color: "text-muted",
                                          children: j.intl.string(j.t["5dOfxb"]),
                                      }),
                                  ],
                              }),
                          }),
                          (0, E.jsx)("div", {
                              children: (0, E.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/2aa57f16c71171fc8e0edb8cca60735f1192195344d17fa667de6d3ca8163ba0.png",
                                  alt: j.intl.string(j.t.mdXZh1),
                                  className: ic.lh,
                              }),
                          }),
                          (0, E.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: ic.VV,
                              children: (0, E.jsx)(eD.$, {
                                  variant: "primary",
                                  text: j.intl.string(j.t.Q26diF),
                                  onClick: () => void t(id.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, E.jsx)(eP.c, { className: ic.yF }),
              ],
          });
}
function im() {
    let e = (0, g.bG)([ek.A], () => ek.A.enabled),
        t = (0, eU.Mn)("OverlayStreamerModeNotice");
    return e && t
        ? (0, E.jsxs)(E.Fragment, {
              children: [
                  (0, E.jsx)(H.w, {
                      type: "warning",
                      children: j.intl.format(j.t.fuEX5B, {
                          onClick: () => (0, eY.openUserSettings)(u.X.STREAMER_MODE_CATEGORY),
                      }),
                  }),
                  (0, E.jsx)(eP.c, { className: ic.yF }),
              ],
          })
        : null;
}
let iA = (0, a.t_)(u.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                eQ(),
                ew.Ay.addChangeListener(eQ),
                eV.A.addChangeListener(eQ),
                eF.default.addChangeListener(eQ),
                eB.default.addChangeListener(eQ),
                ez.isPlatformEmbedded && (0, _.a2)(),
                () => {
                    ew.Ay.removeChangeListener(eQ),
                        eV.A.removeChangeListener(eQ),
                        eF.default.removeChangeListener(eQ),
                        eB.default.removeChangeListener(eQ),
                        ez.isPlatformEmbedded && (0, _.e0)();
                }
            );
        },
        useTitle: () => j.intl.string(j.t["9cb1Uz"]),
        decoration: {
            type: h.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, E.jsxs)(E.Fragment, { children: [(0, E.jsx)(ig, {}), (0, E.jsx)(im, {})] });
            },
        },
        buildLayout: () => [tV, tW, iu, t$],
    }),
    ih = (0, a.i4)(u.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["9cb1Uz"]),
        icon: eR.l,
        usePredicate: eX.b_,
        buildLayout: () => [iA],
    });
var iE = i(687966);
let iS = (0, a.AK)(u.X.REGISTERED_GAMES_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.OYYY6q),
        destinationKey: u.X.ACTIVITY_PRIVACY_PANEL,
    }),
    iT = (0, a.gN)(u.X.REGISTERED_GAMES_RELATED_SETTINGS, {
        usePredicate: () => (0, o.SV)("RegisteredGamesRelatedSettings"),
        buildLayout: () => [iS],
    });
var ix = i(396478),
    ip = i(270003),
    iN = i(227309),
    i_ = i(363195),
    iI = i(1215),
    iC = i(39623),
    ib = i(952270),
    iv = i(138134),
    iy = i(414079),
    ij = i(29160),
    iO = i(650583),
    iR = i(150717),
    iL = i(653307);
let iD = (0, ez.isWindows)();
function iP(e) {
    let { rawGame: t, nowPlaying: n = !1, isOverride: s, subgames: l, isSubgame: r = !1, parentGame: a } = e,
        o = (0, g.cf)([m.Ay, tI.A, tC.A], () => (0, m.xU)(t, m.Ay, tI.A, tC.A)),
        { canToggleDetection: u, isCurrentGameDetectionEnabled: d } = (0, g.cf)([m.Ay], () => ({
            canToggleDetection: null == a || m.Ay.isDetectionEnabled(a),
            isCurrentGameDetectionEnabled: m.Ay.isDetectionEnabled(o),
        })),
        c = (0, g.bG)([m.Ay], () => m.Ay.getVisibleGame()),
        [h, T] = S.useState(!1),
        x = S.useMemo(
            () =>
                (0, A.n1)(o)
                    ? r
                        ? o.gameName
                        : j.intl.formatToPlainString(j.t.G6BGdx, { subgameName: o.gameName })
                    : o.name,
            [o, r],
        ),
        [p, f] = S.useState(x ?? "???"),
        N = e2()(iL.tR, {
            [iR.LO]: !n,
            [iR.Rw]: n,
            [iR.FB]: null != o && n,
            [iR.xL]: r,
            [iR.fG]: null != l && l.length > 0,
        });
    function _() {
        null != l && l.length > 0 && d
            ? (0, z.openModalLazy)(async () => {
                  let { Modal: e } = await i.e("4823").then(i.bind(i, 158954));
                  return (t) =>
                      (0, E.jsx)(e, {
                          ...t,
                          title: j.intl.formatToPlainString(j.t.PZ4fKc, { platform: x }),
                          subtitle: j.intl.formatToPlainString(j.t.ZIQbfb, { platform: x }),
                          actions: [
                              { text: j.intl.string(j.t["ETE/oC"]), onClick: () => t.onClose(), variant: "secondary" },
                              {
                                  text: j.intl.string(j.t.Fmjztz),
                                  onClick: () => {
                                      ta.Ay.toggleDetection(o), t.onClose();
                                  },
                                  variant: "primary",
                              },
                          ],
                      });
              })
            : ta.Ay.toggleDetection(o);
    }
    let I = null != c && (0, m.Es)(o) === (0, m.Es)(c),
        C = (null != a && a.id === c?.id) || I || (null != l && l.some((e) => e.id === c?.id));
    return (0, E.jsxs)(E.Fragment, {
        children: [
            (0, E.jsxs)("div", {
                className: N,
                children: [
                    (0, E.jsxs)("div", {
                        className: e2()(iR.$K, iL.Vd),
                        children: [
                            o.verified && !s
                                ? (0, E.jsxs)("div", {
                                      className: iR.HS,
                                      children: [
                                          (0, E.jsx)("div", { className: iR.mO, children: x }),
                                          (0, E.jsx)(ts.m, {
                                              text: j.intl.string(j.t["4PJP5p"]),
                                              children: (0, E.jsx)(tc.A, {
                                                  className: iR.qf,
                                                  size: 18,
                                                  color: ei.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, E.jsx)(tl.U, {
                                                      size: "custom",
                                                      width: 18,
                                                      height: 18,
                                                      color: ei.A.unsafe_rawColors.WHITE.css,
                                                  }),
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, E.jsx)("input", {
                                      className: e2()(iR.mO, iR.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: p,
                                      onBlur: function () {
                                          o.name !== p && ta.Ay.editName(o, p);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === iO.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
                                      },
                                      onChange: (e) => f(e.target.value),
                                  }),
                            (function () {
                                let e,
                                    t,
                                    { played: i, exePath: s } = o;
                                return (
                                    n || I
                                        ? (e = j.intl.string(j.t.VbV5dv))
                                        : null != i && "" !== i && (e = j.intl.format(j.t["gGeOE+"], { when: i })),
                                    (0, E.jsx)("div", {
                                        className: iR.GN,
                                        children: (0, E.jsx)(ij.A, {
                                            hoverText:
                                                null != s && "" !== s
                                                    ? ((t = s.replace(/^file:\/\//i, "")),
                                                      (0, ez.isWindows)() && (t = t.toUpperCase()),
                                                      t)
                                                    : "",
                                            children: e,
                                        }),
                                    })
                                );
                            })(),
                        ],
                    }),
                    s || h
                        ? null
                        : (0, E.jsx)("div", {
                              className: e2()(iL.tR, iL.oA, iL.LT, iR.E3),
                              children: (0, E.jsx)(ts.m, {
                                  text: j.intl.string(j.t["y0B+lo"]),
                                  children: (0, E.jsx)($.D, {
                                      "aria-label": j.intl.string(j.t["y0B+lo"]),
                                      className: iR.ym,
                                      onClick: function () {
                                          if (h) return;
                                          let e = null != o.id ? tI.A.getDetectableGame(o.id) : null;
                                          er.default.track(eg.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
                                              application_id: e?.id,
                                              game_name: (0, A.n1)(o) ? o.gameName : o.name,
                                          }),
                                              T(!0),
                                              (0, z.openModalLazy)(async () => {
                                                  let { default: t } = await Promise.all([
                                                      i.e("56600"),
                                                      i.e("27495"),
                                                  ]).then(i.bind(i, 651930));
                                                  return (i) =>
                                                      (0, E.jsx)(t, {
                                                          ...i,
                                                          detectedActivity: {
                                                              name: o.name ?? "",
                                                              application_id: e?.id ?? o.id ?? void 0,
                                                              type: eg.$pd.PLAYING,
                                                          },
                                                          onSubmitted: () => {},
                                                      });
                                              });
                                      },
                                      children: (0, E.jsx)(iv.i, {
                                          size: "md",
                                          color: "currentColor",
                                          className: iR.Lj,
                                          colorClass: iR.GS,
                                      }),
                                  }),
                              }),
                          }),
                    (function () {
                        let { detectable: e } = o,
                            t =
                                e && u
                                    ? (0, E.jsx)(iC.b, {
                                          size: "md",
                                          color: "currentColor",
                                          className: iR.Lj,
                                          colorClass: iR.GS,
                                      })
                                    : (0, E.jsx)(ib.G, {
                                          size: "md",
                                          color: "currentColor",
                                          className: u ? iR.$V : iR.zN,
                                          colorClass: iR.GS,
                                      });
                        return (0, E.jsx)("div", {
                            className: e2()(iL.tR, iL.oA, iL.LT, iR.E3),
                            children: (0, E.jsx)(ts.m, {
                                text: j.intl.string(j.t.QmitzM),
                                children: u
                                    ? (0, E.jsx)($.D, {
                                          "aria-label": j.intl.string(j.t.QmitzM),
                                          className: iR.ym,
                                          onClick: _,
                                          children: t,
                                      })
                                    : t,
                            }),
                        });
                    })(),
                    (function () {
                        if (!iD || null != a) return null;
                        let { overlay: e, overlayWarn: t } = o,
                            i = e
                                ? (0, E.jsx)(tr.k, {
                                      size: "md",
                                      color: "currentColor",
                                      className: iR.Lj,
                                      colorClass: iR.GS,
                                  })
                                : (0, E.jsx)(iI.n, {
                                      size: "md",
                                      color: "currentColor",
                                      className: iR.$V,
                                      colorClass: iR.GS,
                                  }),
                            n = t
                                ? (0, E.jsx)(ts.m, {
                                      text: j.intl.string(j.t.Vfw2L5),
                                      children: (0, E.jsx)("i", { className: iR.kb }),
                                  })
                                : null;
                        return (0, E.jsxs)("div", {
                            className: e2()(iL.tR, iL.oA, iL.LT, iR.E3),
                            children: [
                                n,
                                (0, E.jsx)(ts.m, {
                                    text: j.intl.string(j.t["1+O+Tu"]),
                                    children: (0, E.jsx)($.D, {
                                        "aria-label": j.intl.string(j.t["1+O+Tu"]),
                                        className: iR.ym,
                                        onClick: () => {
                                            var t;
                                            return (t = !e), void ta.Ay.toggleOverlay(o, t, t);
                                        },
                                        children: i,
                                    }),
                                }),
                            ],
                        });
                    })(),
                    (n && !s) || C
                        ? null
                        : (0, E.jsx)(iy.A, {
                              className: iR.LS,
                              onClick: function () {
                                  ta.Ay.deleteEntry(o),
                                      l?.forEach((e) => {
                                          ta.Ay.deleteEntry(e);
                                      });
                              },
                          }),
                ],
            }),
            null != l &&
                l.length > 0 &&
                !n &&
                (0, E.jsx)("div", {
                    className: iR.AQ,
                    children: l.map((e, t) =>
                        (0, E.jsxs)(
                            S.Fragment,
                            {
                                children: [
                                    (0, E.jsx)(iP, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== l.length - 1 && (0, E.jsx)("div", { className: iR.PQ }),
                                ],
                            },
                            (0, m.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
var iG = i(818050);
function iM() {
    let e = (0, g.bG)([i_.A], () => i_.A.theme);
    return (0, E.jsxs)(ix.pp, {
        theme: e,
        className: iG.eT,
        children: [
            (0, E.jsx)(ix.G8, { darkSrc: i(839628), lightSrc: i(446404), width: 430, height: 250 }),
            (0, E.jsx)(ix.SG, { children: j.intl.string(j.t["1yiJwn"]) }),
        ],
    });
}
function iU() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: i } = C();
    return 0 === e.length
        ? (0, E.jsx)(iM, {})
        : (0, E.jsx)(ip.n, {
              children: (0, E.jsx)("div", {
                  children: e.map((e) =>
                      (0, E.jsx)(
                          iP,
                          { rawGame: e, isOverride: i.has(e.exePath), subgames: e.id === iN.a7 ? t : void 0 },
                          (0, m.Es)(e),
                      ),
                  ),
              }),
          });
}
let iV = (0, a.E2)(u.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, E.jsx)(iU, {}),
});
var ik = i(424994);
let iw = (0, a.zZ)(u.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [iV, iT],
    useTitle: () => j.intl.string(j.t.jCOdvx),
    useSubtitle: () => j.intl.format(j.t.KPA3m9, { igdbLink: ik.s8 }),
});
var iB = i(305866),
    iF = i(783878),
    iz = i(197287),
    iY = i(604949);
function iX(e) {
    let { onClose: t } = e,
        i = (0, g.bG)([m.Ay], () => m.Ay.getCandidateGames()),
        [n, s] = S.useState(null),
        l = i.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, E.jsxs)(iB.l, {
        className: e2()(iz.H, iY.Y_),
        "aria-label": j.intl.string(j.t.GTCx0p),
        children: [
            (0, E.jsx)(iF.Z, {
                selectionMode: "single",
                placeholder: j.intl.string(j.t.XqMe3N),
                value: n,
                options: l,
                onSelectionChange: function (e) {
                    s(e);
                },
            }),
            (0, E.jsx)(eP.c, { className: e2()(iG.Ot, iG.QB) }),
            (0, E.jsxs)("div", {
                className: e2()(iz.o, iL.xM),
                children: [
                    (0, E.jsx)(en.Q, { variant: "secondary", text: j.intl.string(j.t["ETE/oC"]), onClick: t }),
                    (0, E.jsx)(eD.$, {
                        variant: "primary",
                        text: j.intl.string(j.t.GTCx0p),
                        disabled: null == n,
                        onClick: function () {
                            null != n && (ta.Ay.addGame(n.pid, n.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
var iH = i(564206);
let iK = (0, a.E2)(u.X.REGISTERED_GAMES_ADD_GAME_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.GTCx0p)],
    Component: () => {
        let e = S.useRef(null);
        return (0, E.jsxs)("div", {
            className: e2()(iH.a, iG.Gf),
            children: [
                (0, E.jsx)("span", { children: j.intl.string(j.t.xwhoqM) }),
                (0, E.jsx)(q.Y, {
                    targetElementRef: e,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, E.jsx)(iX, { onClose: t });
                    },
                    align: "center",
                    position: "bottom",
                    children: (t) =>
                        (0, E.jsx)(en.Q, {
                            ...t,
                            buttonRef: e,
                            variant: "primary",
                            textVariant: "text-sm/medium",
                            text: j.intl.string(j.t.GjgdXe),
                        }),
                }),
            ],
        });
    },
});
function iW() {
    return (0, E.jsx)("div", {
        className: e2()(iL.tR, iR.eS, iR.Rw),
        children: (0, E.jsxs)("div", {
            className: e2()(iR.$K, iL.Vd),
            children: [
                (0, E.jsx)("div", { className: iR.mO, children: j.intl.string(j.t.H68X9x) }),
                (0, E.jsx)("div", { className: iR.GN, children: j.intl.string(j.t.T5Ilmw) }),
            ],
        }),
    });
}
let iZ = (0, a.E2)(u.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["MY9/Oe"])],
        Component: () => {
            let { robloxSubgameHistory: e, overrideExePaths: t } = C(),
                i = (0, g.bG)([m.Ay], () => m.Ay.getVisibleGame());
            return null != i
                ? (0, E.jsx)(
                      iP,
                      {
                          rawGame: i,
                          isOverride: t.has(i.exePath),
                          nowPlaying: !0,
                          subgames: i.id === iN.a7 ? e : void 0,
                      },
                      (0, m.Es)(i),
                  )
                : (0, E.jsx)(iW, {});
        },
    }),
    iq = (0, a.zZ)(u.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => j.intl.string(j.t["MY9/Oe"]),
        buildLayout: () => [iZ, iK],
    }),
    iQ = (0, a.t_)(u.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => j.intl.string(j.t.AVDyEj),
        buildLayout: () => [iq, iw],
    }),
    iJ = (0, a.i4)(u.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.AVDyEj),
        icon: iE._,
        usePredicate: eX.Pi,
        buildLayout: () => [iQ],
    }),
    i$ = (0, a.WI)(u.X.ACTIVITY_SECTION, {
        useTitle: () => j.intl.string(j.t.nVPpLM),
        buildLayout: () => [ej, iJ, ih],
    });
var i0 = i(550640),
    i1 = i(247928),
    i2 = i(97808),
    i3 = i(778712),
    i6 = i(775602),
    i4 = i(320095),
    i5 = i(963852),
    i7 = i(763754),
    i8 = i(20851),
    i9 = i(486020),
    ne = i(382677);
let nt = new ii.nA({ id: "1337", guild_id: "1337", type: eg.rbe.GUILD_TEXT, name: "preview" }),
    ni = [
        { status: eg.clD.IDLE, discriminator: "2" },
        { status: eg.clD.DND, discriminator: "3" },
        { status: eg.clD.ONLINE, mobile: !0, discriminator: "4" },
    ];
function nn(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (0, i4.rh)({ ...(0, i5.Ay)({ channelId: nt.id, content: e }), state: eg.cmJ.SENT, reactions: t });
}
var ns = i(856488);
let nl = (0, a.zD)(u.X.ENABLE_LEGACY_CHAT_INPUT, {
        useTitle: () => j.intl.string(j.t.TZ2hZH),
        useSubtitle: () => j.intl.string(j.t.Q7wgHc),
        useValue: () => L.D_.useSetting(),
        setValue: (e) => L.D_.updateSetting(e),
    }),
    nr = (0, a.zD)(u.X.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS, {
        useTitle: () => j.intl.string(j.t.XYvMIX),
        useSubtitle: () => j.intl.string(j.t.T0rbtM),
        useValue: L._z.useSetting,
        setValue: L._z.updateSetting,
    });
var na = i(100767),
    no = i(106236),
    nu = i(113494),
    nd = i(782134),
    nc = i(54570),
    ng = i(8880),
    nm = i(75804);
let nA = eK().debounce((e) => {
    (0, nc.zU)(e);
}, 250);
function nh() {
    let [e, t] = S.useState(!1);
    return (
        (0, eO.l0)(() => (0, nc.pr)()),
        (0, E.jsx)(eD.$, {
            text: j.intl.string(j.t.SKNnqq),
            icon: e ? nu.E : nd.u,
            size: "sm",
            onClick: () => {
                if (e) {
                    (0, nc.pr)(), t(!1);
                    return;
                }
                (0, nc.AU)(
                    j.intl.string(j.t.PKaNJL),
                    !0,
                    void 0,
                    () => t(!0),
                    () => t(!1),
                ),
                    t(!0);
            },
        })
    );
}
let nE = (0, a.E2)(u.X.TTS_PLAYBACK_RATE, {
        useSearchTerms: () => [j.intl.string(j.t.lsW5Ev)],
        Component: function () {
            let e = (0, g.bG)([ng.A], () => ng.A.speechRate);
            return (0, E.jsxs)(K.B, {
                gap: 16,
                children: [
                    (0, E.jsx)(no.A, {
                        label: j.intl.string(j.t.lsW5Ev),
                        description: j.intl.string(j.t.Ci4wMS),
                        markers: nm.P,
                        initialValue: e,
                        defaultValue: 1,
                        stickToMarkers: !0,
                        onValueChange: nA,
                        onValueRender: (e) => `x${e.toFixed(2)}`,
                        onMarkerRender: (e) =>
                            0 === e
                                ? (0, E.jsx)(ee.E, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: j.intl.string(j.t["493lwX"]),
                                  })
                                : 10 === e
                                  ? (0, E.jsx)(ee.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: j.intl.string(j.t.ZSZEdS),
                                    })
                                  : 1 === e
                                    ? (0, E.jsx)(ee.E, {
                                          variant: "text-xs/medium",
                                          color: "text-feedback-positive",
                                          children: "x1.0",
                                      })
                                    : e % 1 == 0
                                      ? ""
                                      : void 0,
                    }),
                    (0, E.jsx)(nh, {}),
                ],
            });
        },
        usePredicate: () => na.$j,
    }),
    nS = (0, a.zZ)(u.X.AUDIO_AND_SCREEN_READER_CATEGORY, {
        useTitle: () => j.intl.string(j.t.XVR0Rb),
        buildLayout: () => [nE, nr, nl],
    }),
    nT = (0, a.AK)(u.X.ACCESSIBILITY_TO_DISPLAY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.aTfeGK),
        destinationKey: u.X.APPEARANCE_PANEL,
    }),
    nx = (0, a.gN)(u.X.COLOR_AND_CONTRAST_RELATED_SETTINGS, { buildLayout: () => [nT] });
var np = i(955572);
let nf = (0, a.zD)(u.X.DESATURATE_CUSTOM_COLORS, {
    useTitle: () => j.intl.string(j.t.OCJg5f),
    useSubtitle: () => j.intl.string(j.t.HEO0s3),
    useValue: () => (0, g.bG)([i6.A], () => i6.A.desaturateUserColors),
    setValue: () => (0, np.YV)(),
});
var nN = i(652525);
let n_ = (0, a.zD)(u.X.ENABLE_CUSTOM_CURSOR, {
        useTitle: () => j.intl.string(j.t["+Isihb"]),
        useSubtitle: () => j.intl.string(j.t.nNZ1Tz),
        useValue: () => (0, g.bG)([i6.A], () => i6.A.enableCustomCursor),
        setValue: (e) => (0, np.ts)(e),
        usePredicate: () => (0, nN.t)("EnableCustomCursorSetting"),
    }),
    nI = (0, a.zD)(u.X.ENABLE_SWITCH_ICONS, {
        useTitle: () => j.intl.string(j.t["S3z+pV"]),
        useSubtitle: () => j.intl.string(j.t["3QuI9+"]),
        useValue: () => (0, g.bG)([i6.A], () => i6.A.isSwitchIconsEnabled),
        setValue: (e) => (0, np.Gm)(e),
        hasIcon: !0,
    }),
    nC = (0, a.zD)(u.X.HIGH_CONTRAST_MODE, {
        useTitle: () => j.intl.string(j.t.aZlePv),
        useSubtitle: () => j.intl.string(j.t["v2qF8+"]),
        useValue: () => (0, g.bG)([i6.A], () => i6.A.isHighContrastModeEnabled),
        setValue: (e) => (0, np.uh)(e ? i6._.HIGH : i6._.DEFAULT),
        getDismissibleBadges: () => [
            { badgeType: h.Xi.NEW, dismissibleContent: eG.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE },
        ],
    });
var nb = i(406360),
    nv = i(742023);
let ny = (0, a.Qx)(u.X.HIGH_DYNAMIC_RANGE, {
        useTitle: () => j.intl.string(j.t.nemtgW),
        useSubtitle: () => j.intl.string(j.t["O/Gjvn"]),
        usePersistentBadge: () => ({ badgeType: h.Xi.BETA }),
        useOptions: function () {
            return S.useMemo(
                () => [
                    { name: j.intl.string(j.t.D5Fma9), desc: j.intl.string(j.t.Qj75ck), value: "no-limit" },
                    { name: j.intl.string(j.t.ldcGIH), desc: j.intl.string(j.t["+V/bDk"]), value: "standard" },
                ],
                [],
            );
        },
        usePredicate: function () {
            return (0, nb.i)("HDRDynamicRangeSetting");
        },
        setValue: function (e) {
            (0, np.FU)(e);
        },
        useValue: function () {
            return (0, g.bG)([nv.Ay], () => nv.Ay.hdrDynamicRange);
        },
        useSearchTerms: () => ["HDR", j.intl.string(j.t["O/Gjvn"])],
    }),
    nj = (0, a.Hn)(u.X.ROLE_STYLE, {
        useTitle: () => j.intl.string(j.t.uSOPWm),
        useSubtitle: () => j.intl.string(j.t.u7fFKS),
        useOptions: () => [
            { id: "username", label: j.intl.string(j.t.eDdMzJ), value: "username" },
            { id: "dot", label: j.intl.string(j.t.rdmJp0), value: "dot" },
            { id: "hidden", label: j.intl.string(j.t.Ji2EVJ), value: "hidden" },
        ],
        useValue: () => (0, g.bG)([i6.A], () => i6.A.roleStyle),
        setValue: (e) => (0, np.IX)(e),
    });
(0, a.Qx)(u.X.ROLE_STYLE, {
    useTitle: () => j.intl.string(j.t.uSOPWm),
    useSubtitle: () => j.intl.string(j.t["86hjzQ"]),
    useOptions: () => [
        { name: j.intl.string(j.t.YEOEi6), value: "username" },
        { name: j.intl.string(j.t.mQaro3), value: "dot" },
        { name: j.intl.string(j.t.Ji2EVJ), value: "hidden" },
    ],
    useValue: () => (0, g.bG)([i6.A], () => i6.A.roleStyle),
    setValue: (e) => (0, np.IX)(e),
});
let nO = (0, a.sN)(u.X.SATURATION, {
    useTitle: () => j.intl.string(j.t["5PWWCY"]),
    useSubtitle: () => j.intl.string(j.t.xf5S6P),
    markers: eg.hH7.SATURATION_INCREMENTS,
    onMarkerRender: (e) => ((100 * e) % 2 == 0 ? `${100 * e}%` : void 0),
    stickToMarkers: !0,
    minValue: 0,
    maxValue: 1,
    getInitialValue: () => i6.A.saturation,
    asValueChanges: (e) => (0, np.HU)(e),
});
var nR = i(839214),
    nL = i(502229);
let nD = (0, nR.D)(() => ({ syncEnabled: null, updateTimeout: null })),
    nP = (0, a.zD)(u.X.SYNC_FORCED_COLORS, {
        useTitle: () => j.intl.string(j.t.cguiec),
        useSubtitle: () => j.intl.format(j.t.GwEVE2, { learnMoreLink: tp.A.getArticleURL(eg.MVz.FORCED_COLORS) }),
        useValue: () => {
            let e = (0, g.bG)([i6.A], () => i6.A.syncForcedColors);
            return (
                (0, td.Ay)(() => {
                    nD.setState({ syncEnabled: i6.A.syncForcedColors });
                }),
                nD.useState((e) => e.syncEnabled) ?? e
            );
        },
        setValue: (e) => {
            let { updateTimeout: t } = nD.getState();
            if (null != t) {
                clearTimeout(t), nD.setState({ syncEnabled: e, updateTimeout: null });
                return;
            }
            if (e === i6.A.syncForcedColors) return void nD.setState({ syncEnabled: e });
            let i = setTimeout(() => {
                (0, np.D3)(e), nD.setState({ updateTimeout: null });
            }, 150);
            nD.setState({ syncEnabled: e, updateTimeout: i });
        },
        usePredicate: () => (0, nL.D)(),
    }),
    nG = (0, a.zZ)(u.X.COLOR_AND_CONTRAST_CATEGORY, {
        useTitle: () => j.intl.string(j.t.JqvyiY),
        buildLayout: () => [nO, nf, nC, n_, nP, ny, nj, nI, nx],
    });
var nM = i(397438),
    nU = i(355097);
function nV(e) {
    return (0, g.bG)([nM.A], () =>
        (function (e) {
            switch (e) {
                case nU._A.REDUCED_MOTION:
                    return j.intl.format(j.t["1dT9V4"], {});
                case nU._A.REDUCED_MOTION_STICKERS:
                    return j.intl.string(j.t["2ExvRu"]);
                default:
                    return;
            }
        })(nM.A.getAppliedOverrideReasonKey(e)),
    );
}
let nk = (0, a.zD)(u.X.ANIMATE_EMOJIS, {
        useTitle: () => j.intl.string(j.t.iIaOlc),
        useSubtitle: () => nV("animateEmoji"),
        useValue: () => L.Sf.useSetting(),
        setValue: (e) => L.Sf.updateSetting(e),
    }),
    nw = (0, a.zD)(u.X.ANIMATE_GIFS, {
        useTitle: () => j.intl.string(j.t.wqsK7q),
        useSubtitle: () => nV("gifAutoPlay"),
        useValue: () => L.kt.useSetting(),
        setValue: (e) => L.kt.updateSetting(e),
    });
var nB = i(823894);
let nF = (0, a.Qx)(u.X.ANIMATE_STICKERS, {
        useTitle: () => j.intl.string(j.t.sBHIh0),
        useSubtitle: () => nV("animateStickers"),
        useOptions: () => [
            { name: j.intl.string(j.t["Xp+X2U"]), value: nB.BJ.ALWAYS_ANIMATE },
            { name: j.intl.string(j.t.IlLT7e), desc: j.intl.string(j.t.bIW9Tl), value: nB.BJ.ANIMATE_ON_INTERACTION },
            { name: j.intl.string(j.t.IGu8x3), value: nB.BJ.NEVER_ANIMATE },
        ],
        useValue: () => L.S0.useSetting(),
        setValue: (e) => L.S0.updateSetting(e),
    }),
    nz = (0, a.zD)(u.X.REDUCED_MOTION, {
        useTitle: () => j.intl.string(j.t.b3XBzg),
        useSubtitle: () => j.intl.format(j.t.XqvxJc, { helpdeskArticle: tp.A.getArticleURL(eg.MVz.REDUCED_MOTION) }),
        useValue: () => (0, g.bG)([i6.A], () => i6.A.useReducedMotion),
        setValue: (e) => (0, np.qz)(e ? "reduce" : "no-preference"),
    }),
    nY = (0, a.zD)(u.X.SYNC_REDUCED_MOTION, {
        useTitle: () => j.intl.string(j.t.oL55A6),
        useValue: () => (0, g.bG)([i6.A], () => "auto" === i6.A.rawPrefersReducedMotion),
        setValue: (e) => (0, np.qz)(e ? "auto" : i6.A.systemPrefersReducedMotion),
    }),
    nX = (0, a.zZ)(u.X.MOTION_CATEGORY, {
        useTitle: () => j.intl.string(j.t.e3TR1b),
        buildLayout: () => [nz, nY, nw, nk, nF],
    });
var nH = i(688810),
    nK = i(259065),
    nW = i(864386);
let nZ = (0, a.zD)(u.X.DISPLAY_NAME_STYLES, {
        useTitle: () => j.intl.string(nW.default["2gFUEw"]),
        useSubtitle: () => {
            let { analyticsLocations: e } = (0, nH.Ay)();
            return j.intl.format(nW.default.aEax6P, {
                onClickOpenModal() {
                    (0, nK.L)({ analyticsLocations: e });
                },
            });
        },
        useValue: () => (0, g.bG)([i6.A], () => i6.A.displayNameStylesEnabled),
        setValue: (e) => (0, np.Dm)(e),
    }),
    nq = (e) => `${e.toFixed(0)}px`,
    nQ = (0, a.sN)(u.X.APPEARANCE_FONT_SCALING, {
        useTitle: () => j.intl.string(j.t.rT3Pq5),
        useSubtitle: () => j.intl.string(j.t.LXUhen),
        markers: eg.hH7.FONT_SIZES,
        stickToMarkers: !0,
        minValue: eg.hH7.FONT_SIZES["0"],
        maxValue: eg.hH7.FONT_SIZES[eg.hH7.FONT_SIZES.length - 1],
        useDefaultValue: () => eg.hH7.FONT_SIZE_DEFAULT,
        getInitialValue: () => i6.A.fontSize,
        onValueRender: nq,
        onMarkerRender: nq,
        asValueChanges: (e) => (0, np.XS)(e),
    }),
    nJ = (0, a.zD)(u.X.UNDERLINE_LINKS, {
        useTitle: () => j.intl.string(j.t.OLZFB8),
        useSubtitle: () => j.intl.string(j.t.DIX3ke),
        useValue: () => (0, g.bG)([i6.A], () => i6.A.alwaysShowLinkDecorations),
        setValue: (e) => (0, np.kI)(e),
    }),
    n$ = (0, a.zZ)(u.X.TEXT_READABILITY_CATEGORY, {
        useTitle: () => j.intl.string(j.t["bxh/R7"]),
        buildLayout: () => [nQ, nJ, nZ],
    }),
    n0 = (0, a.Qx)(u.X.APPEARANCE_UI_DENSITY, {
        useTitle: () => j.intl.string(j.t["C/5V0A"]),
        useSubtitle: () => j.intl.string(j.t.QLZhYk),
        useSearchTerms: () => ["List Spacing"],
        useOptions: () => [
            { name: j.intl.string(j.t["7iegX4"]), value: F.NS.COMPACT },
            { name: j.intl.string(j.t.bBvAEH), value: F.NS.DEFAULT },
            { name: j.intl.string(j.t["4cuYHx"]), value: F.NS.COZY },
        ],
        useValue: () => L.Xi.useSetting(),
        setValue: (e) => {
            e !== F.NS.UNSET_UI_DENSITY && L.Xi.updateSetting(e);
        },
    }),
    n1 = "cozy",
    n2 = "compact",
    n3 = (0, a.Qx)(u.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
        useTitle: () => j.intl.string(j.t.nKRoPv),
        useSubtitle: () => j.intl.string(j.t.QntEEG),
        useSearchTerms: () => [j.intl.string(j.t.ZEoGMd)],
        useOptions: () => [
            { name: j.intl.string(j.t.Jqj4cZ), value: n1 },
            { name: j.intl.string(j.t["1JNcPS"]), value: n2 },
        ],
        useValue: () => (L.hH.useSetting() ? n2 : n1),
        setValue: (e) => {
            L.hH.updateSetting(e === n2), (0, np.AC)();
        },
    });
var n6 = i(381941);
let n4 = (e) => `${e.toFixed(0)}px`,
    n5 = (0, a.sN)(u.X.APPEARANCE_MESSAGE_GROUP_SPACING, {
        useTitle: () => j.intl.string(j.t.Q6lKkg),
        useSubtitle: () => j.intl.string(j.t.p7eUrb),
        markers: n6.qh,
        stickToMarkers: !0,
        minValue: n6.qh["0"],
        maxValue: n6.qh[n6.qh.length - 1],
        useDefaultValue: () => (L.hH.useSetting() ? n6.y5 : n6.ES),
        useExternalValue: () => (0, g.bG)([i6.A], () => i6.A.messageGroupSpacing),
        getInitialValue: () => i6.A.messageGroupSpacing,
        onValueRender: n4,
        onMarkerRender: n4,
        asValueChanges: (e) => {
            switch (e) {
                case 0:
                case 4:
                case 8:
                case 16:
                case 24:
                    (0, np.AC)(e);
            }
        },
    });
var n7 = i(775121);
let n8 = (0, a.sN)(u.X.APPEARANCE_ZOOM, {
        usePredicate: () => ez.isPlatformEmbedded,
        useTitle: () => j.intl.string(j.t.i19n5L),
        useSubtitle: () => j.intl.format(j.t["x9PK/3"], { modKey: n7.A.modKey }),
        markers: eg.hH7.ZOOM_SCALES,
        stickToMarkers: !0,
        minValue: eg.hH7.ZOOM_SCALES["0"],
        maxValue: eg.hH7.ZOOM_SCALES[eg.hH7.ZOOM_SCALES.length - 1],
        useDefaultValue: () => eg.hH7.ZOOM_DEFAULT,
        getInitialValue: () => i6.A.zoom,
        useExternalValue: () => (0, g.bG)([i6.A], () => i6.A.zoom),
        onValueRender: (e) => `${e.toFixed(0)}%`,
        setValue: (e) => (0, np.Qp)(e),
        useSearchTerms: () => [j.intl.string(j.t.ip0uSf)],
    }),
    n9 = (0, a.zZ)(u.X.VISUAL_DENSITY_CATEGORY, {
        useTitle: () => j.intl.string(j.t.VKYWk8),
        buildLayout: () => [n0, n3, n5, n8],
    }),
    se = (0, a.t_)(u.X.ACCESSIBILITY_PANEL, {
        useTitle: () => j.intl.string(j.t.G0neg7),
        buildLayout: () => [n$, n9, nG, nX, nS],
        decoration: {
            type: h.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                let e = L.hH.useSetting(),
                    t = L.jW.useSetting(),
                    i = S.useMemo(
                        () => [
                            nn(
                                j.intl.formatToPlainString(j.t.BknJRT, {}),
                                t
                                    ? [
                                          {
                                              emoji: { id: null, name: "\uD83E\uDD40", animated: !1 },
                                              me: !0,
                                              count: 3,
                                              me_burst: !1,
                                              burst_count: 0,
                                          },
                                          {
                                              emoji: { id: null, name: "\uD83E\uDEA4", animated: !1 },
                                              me: !1,
                                              count: 1,
                                              me_burst: !1,
                                              burst_count: 0,
                                          },
                                      ]
                                    : [],
                            ),
                            nn(
                                j.intl.formatToPlainString(j.t["4rDfgM"], {
                                    link: "https://discord.com/accessibility",
                                }),
                            ),
                        ],
                        [t],
                    ),
                    n = (0, g.bG)([i6.A], () => i6.A.messageGroupSpacing);
                return (0, E.jsx)(i1.M, {
                    "aria-hidden": !0,
                    children: (0, E.jsxs)("section", {
                        children: [
                            (0, E.jsx)(eL.D, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                className: ne.Vf,
                                children: j.intl.string(j.t.RC22qg),
                            }),
                            (0, E.jsxs)(tL.Ip, {
                                className: ne.VH,
                                children: [
                                    (0, E.jsx)("ol", {
                                        className: ne.DZ,
                                        style: { gap: n },
                                        "aria-label": j.intl.string(j.t.xfjsEV),
                                        children: i.map((t) =>
                                            (0, E.jsx)(
                                                "li",
                                                {
                                                    children: (0, E.jsx)(i8.A, {
                                                        message: t,
                                                        channel: nt,
                                                        compact: e,
                                                        author: { ...(0, i7.p_)(t), colorString: "#dd80f4" },
                                                    }),
                                                },
                                                t.id,
                                            ),
                                        ),
                                    }),
                                    (0, E.jsxs)("div", {
                                        className: ne.Jb,
                                        children: [
                                            (0, E.jsx)("div", {
                                                className: ne.HD,
                                                children: ni.map((e) => {
                                                    let { status: t, discriminator: i, mobile: n = !1 } = e;
                                                    return (0, E.jsx)(
                                                        i2.eu,
                                                        {
                                                            status: t,
                                                            isMobile: n,
                                                            size: i3._3.SIZE_32,
                                                            src: i9.Ay.getDefaultAvatarURL(void 0, i),
                                                            "aria-label": j.intl.string(j.t.VKE5TK),
                                                        },
                                                        t,
                                                    );
                                                }),
                                            }),
                                            (0, E.jsx)(eD.$, {
                                                text: j.intl.string(j.t["2RHHgz"]),
                                                size: "sm",
                                                variant: "primary",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            },
            sticky: !0,
        },
    }),
    st = (0, a.i4)(u.X.ACCESSIBILITY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.G0neg7),
        icon: i0.c,
        useMenu: ns.A,
        buildLayout: () => [se],
    });
var si = i(650809),
    sn = i(636537),
    ss = i(228366),
    sl = i(74396),
    sr = i(269880),
    sa = i(55619),
    so = i(777666),
    su = i(314116),
    sd = i(19575),
    sc = i(546385);
let sg = (0, a.E2)(u.X.HARDWARE_ACCELERATION, {
    usePredicate: () => c.Av && !(0, c.cX)(),
    useSearchTerms: () => [j.intl.string(j.t["/HIxyY"]), j.intl.string(j.t.B0hqpb)],
    Component: function () {
        let [e] = S.useState(() => sd.Ay.getEnableHardwareAcceleration()),
            t = j.intl.string(j.t["/HIxyY"]),
            i = j.intl.string(j.t.B0hqpb);
        return (0, E.jsxs)(K.B, {
            children: [
                (0, E.jsx)(W.d, { label: t, description: i, checked: e, onChange: sm }),
                !e && (0, E.jsx)(sc.A, { look: sc.k.WARNING, children: j.intl.string(j.t.j7S6IX) }),
            ],
        });
    },
});
function sm(e) {
    let t = e ? j.intl.format(j.t.LYXRxL, {}) : j.intl.format(j.t.uDP3Kz, {});
    (0, su.A)({
        title: j.intl.string(j.t.aqpAvn),
        subtitle: t,
        confirmText: j.intl.string(j.t.vT7ckk),
        onConfirm: () => {
            sd.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
let sA = (0, a.zD)(u.X.SHOW_GAME_LIBRARY, {
        usePredicate: () => (0, g.bG)([tC.A], () => tC.A.hasLibraryApplication()),
        useTitle: () => j.intl.string(j.t.fi3UQN),
        useSubtitle: () => j.intl.string(j.t["8mYp37"]),
        useValue: () => !L.l_.useSetting(),
        setValue: (e) => L.l_.updateSetting(!e),
    }),
    sh = (0, a.zZ)(u.X.APPEARANCE_ADVANCED_CATEGORY, {
        useTitle: () => j.intl.string(j.t["8/udY0"]),
        buildLayout: () => [sg, sA],
    });
var sE = i(565645);
let sS = (0, a.zD)(u.X.CHAT_EMOJI_CONVERT_EMOTICONS, {
        useTitle: () => j.intl.string(j.t["79qal8"]),
        useSubtitle: () =>
            j.intl.format(j.t.GejoQK, { emojiHook: (e, t) => (0, E.jsx)(sE.A, { emojiName: "\uD83D\uDE42" }, t) }),
        useValue: L.j7.useSetting,
        setValue: L.j7.updateSetting,
    }),
    sT = (0, a.zD)(u.X.ENABLE_SEND_BUTTON, {
        useTitle: () => j.intl.string(j.t["I/5LyL"]),
        useValue: () => (0, g.bG)([i6.A], () => i6.A.isSubmitButtonEnabled),
        setValue: () => (0, np.Xt)(),
    }),
    sx = (0, a.zD)(u.X.CHAT_TEXT_BOX_PREVIEWS, {
        useTitle: () => j.intl.string(j.t.AqGrEI),
        useValue: L.SI.useSetting,
        setValue: (e) => {
            er.default.track(eg.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: e,
                location: { section: eg.JJy.SETTINGS_TEXT_AND_IMAGES },
            }),
                L.SI.updateSetting(e);
        },
    }),
    sp = (0, a.zD)(u.X.CHAT_STICKERS_AUTOCOMPLETE, {
        useTitle: () => j.intl.string(j.t["d+It2U"]),
        useValue: L.ML.useSetting,
        setValue: (e) => {
            er.default.track(eg.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                enabled: e,
                location: { section: eg.JJy.SETTINGS_TEXT_AND_IMAGES },
                location_stack: [e$.A.TEXT_AND_IMAGES],
            }),
                L.ML.updateSetting(e);
        },
    }),
    sf = (0, a.zZ)(u.X.APPEARANCE_CHAT_BOX_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Ob7VMB),
        useSearchTerms: () => [j.intl.string(j.t.onqU6o)],
        buildLayout: () => [sx, sS, sp, sT],
    });
var sN = i(526162),
    s_ = i(793943),
    sI = i(792656),
    sC = i(830543),
    sb = i(785007),
    sv = i(806932),
    sy = i(915089),
    sj = i(174197),
    sO = i(788868);
let sR = (0, a.E2)(u.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [j.intl.string(j.t.gnwxvT)],
    Component: function () {
        let e = (0, sy.GV)(),
            { ref: t, ...i } = (0, sb._u)({ orientation: "horizontal", labelledBy: e }),
            n = (0, g.bG)([sN.A], () => sN.A.isUpsellPreview);
        return (
            (0, eO.Ay)(() => {
                n &&
                    er.default.track(eg.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: sO.e.APP_ICON_UPSELL,
                        location_stack: [e$.A.USER_SETTINGS],
                    });
            }),
            (0, E.jsx)("div", {
                ...i,
                ref: t,
                children: (0, E.jsx)(K.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    children: (0, E.jsx)(sv.m, { disabled: n, size: sj.N8.SIZE_48 }),
                }),
            })
        );
    },
});
function sL() {
    (0, s_.nf)(s_.HP.APP_ICON), (0, sC.default)();
}
function sD() {
    return (0, E.jsx)(sI.A, {
        subscriptionTier: sO.pe.TIER_2,
        defaultTextOverride: j.intl.string(j.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: eg.ZSU.BUTTON_CTA, objectType: eg.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
let sP = (0, a.zZ)(u.X.APPEARANCE_IN_APP_ICON_CATEGORY, {
        useTitle: () => j.intl.string(j.t.RPh2ou),
        useSubtitle: () => j.intl.string(j.t.IgENJo),
        useHeaderDecoration: function () {
            let e = (0, g.bG)([sN.A], () => sN.A.isUpsellPreview);
            return S.useMemo(() => {
                let t = [];
                return (
                    t.push({
                        id: "preview-icon-button",
                        type: h.UV.BUTTON,
                        text: j.intl.string(j.t["6acvnZ"]),
                        onClick: sL,
                    }),
                    e && t.push({ id: "upsell-button", type: h.UV.STRONGLY_DISCOURAGED_CUSTOM, button: sD }),
                    { type: h.WX.BUTTON_GROUP, buttons: t }
                );
            }, [e]);
        },
        buildLayout: () => [sR],
    }),
    sG = (0, a.AK)(u.X.APPEARANCE_CHAT_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.UDr3Iy),
        useSearchTerms: () => [j.intl.string(j.t.UDr3Iy)],
        destinationKey: u.X.ACCESSIBILITY_PANEL,
    }),
    sM = (0, a.gN)(u.X.APPEARANCE_CHAT_RELATED_SETTINGS, { buildLayout: () => [sG] });
var sU = i(379587),
    sV = i(452027),
    sk = i(976860),
    sw = i(474090),
    sB = i(181079),
    sF = i(422258),
    sz = i(668267),
    sY = i(313281),
    sX = i(335993);
let sH = tp.A.getArticleURL(eg.MVz.FAVORITES_GUILD);
function sK() {
    let { analyticsLocations: e } = (0, nH.Ay)(e$.A.USER_SETTINGS_FAVORITES),
        t = S.useCallback(() => {
            (0, sz.mv)("settings_page"), (0, sk.uh)(eg.YYv), (0, sC.default)();
        }, []);
    return (0, E.jsx)(nH.f5, {
        value: e,
        children: (0, E.jsx)(sV.D, {
            label: j.intl.string(sX.default.OT1NK5),
            description: j.intl.format(sX.default.GR2KOG, { helpCenterLink: sH }),
            layout: "horizontal-responsive",
            badge: "beta",
            children: (0, E.jsxs)(K.B, {
                direction: "horizontal",
                gap: 8,
                fullWidth: !1,
                children: [
                    (0, E.jsx)(eD.$, { variant: "secondary", text: j.intl.string(sX.default["7WwLnr"]), onClick: t }),
                    (0, E.jsx)(sI.A, {
                        subscriptionTier: sO.pe.TIER_2,
                        defaultTextOverride: j.intl.string(sX.default["20sYUU"]),
                    }),
                ],
            }),
        }),
    });
}
let sW = (0, a.E2)(u.X.CHAT_FAVORITES_TOGGLE, {
        usePredicate: () => (0, sU.m)({ location: "FavoritesGuildToggle" }).enabled,
        useSearchTerms: () => [j.intl.string(sX.default.OT1NK5)],
        Component: function () {
            let e = (0, g.bG)([sB.A], () => sB.A.favoriteGuildEnabled),
                t = (0, g.bG)([ir.default], () => {
                    let e = ir.default.getCurrentUser();
                    return null != e && sw.Ay.isPremiumExactly(e, sO.PremiumTypes.TIER_2);
                }),
                i = (0, sY.DZ)(),
                n = S.useCallback(
                    (e) => {
                        (0, sF.tV)(e, "settings_page"), !e && i && (0, sk.pX)(eg.BVt.ME);
                    },
                    [i],
                );
            return t
                ? (0, E.jsx)(W.d, {
                      checked: e,
                      description: j.intl.format(sX.default.GR2KOG, { helpCenterLink: sH }),
                      onChange: n,
                      label: j.intl.string(sX.default.OT1NK5),
                      badge: "beta",
                  })
                : (0, E.jsx)(sK, {});
        },
    }),
    sZ = (0, a.zD)(u.X.CHAT_INLINE_MEDIA_LINKS, {
        useTitle: () => j.intl.string(j.t.U47N1p),
        useValue: L.hD.useSetting,
        setValue: L.hD.updateSetting,
    }),
    sq = (0, a.zD)(u.X.CHAT_INLINE_MEDIA_UPLOADS, {
        useTitle: () => j.intl.string(j.t.VP11No),
        useValue: L.X6.useSetting,
        setValue: L.X6.updateSetting,
    }),
    sQ = (0, a.FW)(u.X.CHAT_INLINE_FIELD_SET, {
        useTitle: () => j.intl.string(j.t["9nyle0"]),
        buildLayout: () => [sZ, sq],
    }),
    sJ = (0, a.zD)(u.X.CHAT_EMBEDS_RENDER_EMBEDS, {
        useTitle: () => j.intl.string(j.t["5bK9vw"]),
        useValue: L.rs.useSetting,
        setValue: L.rs.updateSetting,
    }),
    s$ = (0, a.zD)(u.X.CHAT_EMOJI_RENDER_REACTIONS, {
        useTitle: () => j.intl.string(j.t["zge/fP"]),
        useValue: L.jW.useSetting,
        setValue: L.jW.updateSetting,
    });
var s0 = i(817281);
let s1 = (0, a.zD)(u.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
        useTitle: () => j.intl.string(j.t.JgjNG3),
        useSubtitle: () => {
            if (!L.hH.useSetting())
                return j.intl.format(j.t["31PRaj"], {
                    a11yHook: (e, t) =>
                        (0, E.jsx)(
                            $.D,
                            {
                                tag: "a",
                                onClick: () => (0, eY.openUserSettings)(u.X.APPEARANCE_MESSAGE_DISPLAY_MODE),
                                children: e,
                            },
                            t,
                        ),
                });
        },
        useDisabled: () => !L.hH.useSetting(),
        useValue: () => {
            let e = (0, g.bG)([nv.Ay], () => nv.Ay.displayCompactAvatars);
            return !L.hH.useSetting() || e;
        },
        setValue: (e) => {
            s0.Ay.updatedUnsyncedSettings({ displayCompactAvatars: e });
        },
    }),
    s2 = (0, a.Hn)(u.X.CHAT_SPOILERS_SHOW_SPOILERS, {
        useTitle: () => j.intl.string(j.t.QgwmVz),
        useOptions: () => [
            { value: eg.P6Q.ON_CLICK, id: eg.P6Q.ON_CLICK, label: j.intl.string(j.t["KFH/me"]) },
            { value: eg.P6Q.ALWAYS, id: eg.P6Q.ALWAYS, label: j.intl.string(j.t.Pe1RbL) },
            { value: eg.P6Q.IF_MODERATOR, id: eg.P6Q.IF_MODERATOR, label: j.intl.string(j.t.K5VTBE) },
        ],
        useValue: L.gs.useSetting,
        setValue: L.gs.updateSetting,
    }),
    s3 = (0, a.zD)(u.X.CHAT_THREADS_SPLIT_VIEW, {
        useTitle: () => j.intl.string(j.t.AInv5m),
        useValue: L.SY.useSetting,
        setValue: L.SY.updateSetting,
    }),
    s6 = (0, a.zZ)(u.X.APPEARANCE_MESSAGES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.OIgYlQ),
        useSearchTerms: () => [j.intl.string(j.t["/VQax8"])],
        buildLayout: () => [sQ, sJ, s$, s2, s3, s1, sW, sM],
    });
var s4 = i(753806),
    s5 = i(145331);
let s7 = (0, a.Qx)(u.X.MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
        useTitle: () => j.intl.string(j.t.VkoLsy),
        useSearchTerms: () => [j.intl.string(j.t["t4+fbe"])],
        useOptions: function () {
            return [
                { name: j.intl.string(j.t.E9JM4J), value: 0 },
                { name: j.intl.string(j.t["Kr+lPi"]), value: 1 },
            ];
        },
        useValue: () => +!!L.Hu.useSetting(),
        setValue: (e) => {
            let t = 1 === e;
            t ? s4.A.cleanUpPrivateChannelSearchState() : s4.A.cleanUpSearchState({ type: eg.I4_.DMS }),
                (0, s5._k)({
                    prevIsCrossDMSettingEnabled: L.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: s5.vy.USER_SETTINGS,
                }),
                L.Hu.updateSetting(t);
        },
    }),
    s8 = (0, a.zZ)(u.X.APPEARANCE_SEARCH_CATEGORY, {
        useTitle: () => j.intl.string(j.t["5h0QOP"]),
        buildLayout: () => [s7],
    }),
    s9 = (0, a.zD)(u.X.STREAMING_AUTO_STREAMER_MODE, {
        useTitle: () => j.intl.string(j.t.IxjaoF),
        useValue: function () {
            return (0, g.bG)([ek.A], () => {
                let { autoToggle: e } = ek.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            sa.A.update({ autoToggle: e });
        },
        usePredicate: function () {
            return c.Av;
        },
    }),
    le = (0, a.zD)(u.X.STREAMING_STREAMER_MODE, {
        useTitle: () => j.intl.string(j.t.TGNg6T),
        useSubtitle: () => j.intl.string(j.t["4nXLnE"]),
        useValue: function () {
            return (0, g.bG)([ek.A], () => {
                let { enabled: e } = ek.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            sa.A.update({ enabled: e });
        },
    });
var lt = i(77729),
    li = i(349230);
let ln = [],
    ls = (0, a.Hn)(u.X.STREAMER_MODE_HIDE_OVERLAY_WIDGETS, {
        selectionMode: "multiple",
        useTitle: () => j.intl.string(j.t.VCDSLW),
        useSearchTerms: () => [j.intl.string(j.t.VCDSLW)],
        usePredicate: () => {
            let e = (0, eX.b_)(),
                t = (0, eU.Mn)("StreamerModeSettings");
            return e && t;
        },
        useOptions: function () {
            return S.useMemo(() => {
                let e = [];
                for (let [t, i] of Object.entries(li.A))
                    null != i.streamerModeLabel &&
                        (null == i.predicate || i.predicate()) &&
                        e.push({ id: t, value: t, label: i.streamerModeLabel() });
                return e;
            }, []);
        },
        useValue: function () {
            return (0, g.bG)([ek.A], () => ek.A.getSettings().disabledOverlayWidgets ?? ln);
        },
        setValue: (e) => sa.A.update({ disabledOverlayWidgets: e }),
        closeOnSelect: !1,
        wrapTags: !0,
    }),
    ll = (0, a.zD)(u.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => j.intl.string(j.t.LSBUGR),
        useValue: () =>
            (0, g.bG)([ek.A], () => {
                let { hidePersonalInformation: e } = ek.A.getSettings();
                return e;
            }),
        setValue: (e) => sa.A.update({ hidePersonalInformation: e }),
    }),
    lr = (0, a.zD)(u.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => j.intl.string(j.t.uWBOri),
        useValue: () =>
            (0, g.bG)([ek.A], () => {
                let { hideInstantInvites: e } = ek.A.getSettings();
                return e;
            }),
        setValue: (e) => sa.A.update({ hideInstantInvites: e }),
    }),
    la = (0, a.zD)(u.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => j.intl.string(j.t.OrqYDP),
        useValue: () =>
            (0, g.bG)([ek.A], () => {
                let { disableSounds: e } = ek.A.getSettings();
                return e;
            }),
        setValue: (e) => sa.A.update({ disableSounds: e }),
    }),
    lo = (0, a.zD)(u.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.sUAbLd),
        useValue: () =>
            (0, g.bG)([ek.A], () => {
                let { disableNotifications: e } = ek.A.getSettings();
                return e;
            }),
        setValue: (e) => sa.A.update({ disableNotifications: e }),
    }),
    lu = (0, a.zD)(u.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => j.intl.string(j.t["iA81+a"]),
        useSubtitle: () => j.intl.string(j.t.P4vj0h),
        useValue: () =>
            (0, g.bG)([ek.A], () => {
                let { enableContentProtection: e } = ek.A.getSettings();
                return e;
            }),
        setValue: (e) => sa.A.update({ enableContentProtection: e }),
        usePredicate: () => lt.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    ld = (0, a.FW)(u.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.xYhOEh),
        buildLayout: () => [ll, lr, la, lo, lu, ls],
    }),
    lc = (0, a.zZ)(u.X.STREAMER_MODE_CATEGORY, {
        useTitle: () => j.intl.string(j.t.S5GfOW),
        buildLayout: () => [le, s9, ld],
    });
var lg = i(47671),
    lm = i(665267),
    lA = i(414133),
    lh = i(412848);
let lE = (0, a.Hn)(u.X.APPEARANCE_GUILD_THEME_DEFAULT_PREFERENCE, {
        useTitle: () => j.intl.string(j.t.Q7mm4g),
        useSearchTerms: () => [j.intl.string(lh.default["/6NbRv"])],
        useOptions: () => [
            { id: "guild", label: j.intl.string(j.t["hrS/Pc"]), value: F.tI.GUILD },
            { id: "personal", label: j.intl.string(j.t.mlvXIq), value: F.tI.PERSONAL },
        ],
        useValue: () => L.zY.useSetting(),
        setValue: L.zY.updateSetting,
        usePredicate: () => (0, lA.OS)("GuildThemeDefaultPreferenceSetting"),
    }),
    lS = (0, a.zD)(u.X.SYNC_PROFILE_THEMES, {
        useTitle: () => j.intl.string(j.t.C00w4l),
        useValue: () => (0, g.bG)([i6.A], () => i6.A.syncProfileThemeWithUserTheme),
        setValue: () => (0, np.M1)(),
    });
var lT = i(284016);
let lx = (0, a.zD)(u.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => j.intl.string(j.t["/B+kEV"]),
    useSearchTerms: () => [j.intl.string(j.t.Ksh3ik)],
    useValue: function () {
        return (0, g.bG)([lT.A], () => !1 !== lT.A.shouldSync("appearance"));
    },
    setValue: function (e) {
        var t;
        let i = i_.A.theme,
            n = lg.A.gradientPreset?.id ?? null,
            s = L.eh.getSetting()?.customUserThemeSettings != null;
        (t = eg.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
            ss.h.dispatch({
                type: "TRACK",
                event: t,
                properties: { is_sync_enabled: e, base_theme: i, client_theme: n, has_custom_theme: s },
            }),
            s0.Ay.setShouldSyncAppearanceSettings(e);
    },
});
var lp = i(98596);
let lf = (0, a.AK)(u.X.APPEARANCE_THEME_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.nhVQDJ),
        useSearchTerms: () => [j.intl.string(j.t.nhVQDJ)],
        destinationKey: u.X.ACCESSIBILITY_PANEL,
    }),
    lN = (0, a.gN)(u.X.APPEARANCE_THEME_RELATED_SETTINGS, { buildLayout: () => [lf] }),
    l_ = (0, a.zZ)(u.X.APPEARANCE_THEME_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Ksh3ik),
        useInlineNotice: function () {
            return (0, g.bG)([i6.A], () => i6.A.useForcedColors)
                ? {
                      type: h.lT.INLINE_NOTICE,
                      noticeType: "info",
                      useText: () =>
                          (0, nL.D)()
                              ? j.intl.format(j.t.Jae48E, {
                                    onClick: () => {
                                        (0, eY.openUserSettings)(u.X.SYNC_FORCED_COLORS);
                                    },
                                })
                              : j.intl.string(j.t.AUMSZP),
                  }
                : null;
        },
        useHeaderDecoration: function () {
            return (0, g.bG)([lg.A, i6.A], () => i6.A.useForcedColors || lg.A.isPreview)
                ? null
                : {
                      type: h.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "open-client-themes-button",
                              type: h.UV.BUTTON,
                              text: j.intl.string(j.t["E+COuA"]),
                              onClick: lm.J3,
                          },
                      ],
                  };
        },
        buildLayout: () => [lp.k, lx, lS, lE, lN],
    }),
    lI = (0, a.t_)(u.X.APPEARANCE_PANEL, {
        initialize: function () {
            sl.A.isFetching() ||
                (ss.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_START" }),
                sn.Bo.get({ url: eg.Rsh.USERS_ME_CUSTOM_THEMES, oldFormErrors: !0, rejectWithError: !0 })
                    .then((e) => {
                        ss.h.dispatch({
                            type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS",
                            themes: e.body?.custom_themes ?? [],
                        });
                    })
                    .catch((e) => {
                        ss.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_FAILURE", error: e });
                    }));
        },
        useTitle: () => j.intl.string(j.t["iHH+ky"]),
        buildLayout: () => [l_, sP, s6, sf, s8, lc, sh],
    }),
    lC = [
        { badgeType: h.Xi.NEW, dismissibleContent: eG.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE },
        {
            badgeType: h.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: eG.M.FAVORITES_GUILD_NEW_BADGE,
            StronglyDiscouragedCustomComponent: function () {
                return (0, E.jsx)(so.JI, { text: j.intl.string(j.t.y2b7CA) });
            },
        },
    ],
    lb = (0, a.i4)(u.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["iHH+ky"]),
        icon: si.B,
        useMenu: function () {
            let e,
                t,
                i,
                n = (0, sr.A)(),
                s =
                    ((e = L.D_.useSetting()),
                    (t = L.SI.useSetting()),
                    e
                        ? null
                        : (0, E.jsx)(J.sL, {
                              id: "preview-markdown-toggle",
                              label: j.intl.string(j.t.sHJ9wZ),
                              action: () => {
                                  let e = !t;
                                  er.default.track(eg.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                                      enabled: e,
                                      location: { section: eg.JJy.SETTINGS_CONTEXT_MENU },
                                  }),
                                      L.SI.updateSetting(e);
                              },
                              checked: t,
                          })),
                l =
                    ((i = (0, g.bG)([ek.A], () => ek.A.enabled, [])),
                    (0, E.jsx)(J.sL, {
                        id: "streamer-mode-toggle",
                        label: j.intl.string(j.t.p9ZAJZ),
                        action: () => {
                            sa.A.setEnabled(!i);
                        },
                        checked: i,
                    }));
            return S.useMemo(() => {
                let e = [...n];
                return (
                    null != s &&
                        e.push((0, E.jsx)(J.rX, { label: j.intl.string(j.t.Ob7VMB), children: s }, "text-and-images")),
                    null != l && e.push((0, E.jsx)(J.rX, { children: l }, "streamer-mode")),
                    e
                );
            }, [n, s, l]);
        },
        getDismissibleBadges: () => lC,
        buildLayout: () => [lI],
    });
var lv = i(410767),
    ly = i(691885),
    lj = i(408278),
    lO = i(241326),
    lR = i(885574),
    lL = i(475358),
    lD = i(28647),
    lP = i(337371),
    lG = i(695366),
    lM = i(761853),
    lU = i(364094);
function lV(e) {
    let { game: t, application: i } = e;
    return null == t || null == i
        ? (0, E.jsx)("div", {
              className: lU.zc,
              children: (0, E.jsx)(lG.E, { size: "sm", color: ei.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, E.jsxs)("div", {
              className: lU.nt,
              children: [
                  (0, E.jsx)(p.A, { game: i, pid: t.pid, size: p.M.MEDIUM }),
                  (0, E.jsx)("div", {
                      className: lU.Am,
                      children: (0, E.jsx)(lG.E, { size: "sm", color: ei.A.colors.TEXT_FEEDBACK_WARNING }),
                  }),
              ],
          });
}
function lk(e) {
    let t = (0, g.bG)([lM.Ay], () => lM.Ay.getMode()),
        { runningGame: i, runningGameApplication: n } = tn();
    null == i || i.elevated || ((i = void 0), (n = void 0));
    let s = (0, tf.NP)(),
        l = s && null != i && t === eg.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? l : s, runningGame: i, runningGameApplication: n };
}
function lw(e) {
    let { className: t, sourcePage: i } = e,
        { canPrompt: n, runningGame: s, runningGameApplication: l } = lk(i);
    return n
        ? (0, E.jsxs)("div", {
              className: e2()(lU.kL, t),
              children: [
                  (0, E.jsx)(lV, { game: s, application: l }),
                  (0, E.jsxs)("div", {
                      className: lU.FS,
                      children: [
                          (0, E.jsx)(ee.E, {
                              variant: "text-sm/medium",
                              color: "text-strong",
                              children:
                                  "voice" === i
                                      ? j.intl.string(j.t.vxfv7v)
                                      : null != s
                                        ? j.intl.string(j.t.fAYU2G)
                                        : j.intl.string(j.t["9V4X/c"]),
                          }),
                          (0, E.jsx)(ee.E, {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              children: j.intl.format(j.t["/y6htt"], {
                                  helpCenterLink: tp.A.getArticleURL(eg.MVz.SYSTEM_SERVICE),
                              }),
                          }),
                      ],
                  }),
                  (0, E.jsx)(eD.$, {
                      variant: "secondary",
                      size: "sm",
                      text: j.intl.string(j.t["1iI46O"]),
                      onClick: function () {
                          (0, tf.sL)(i + (null != s ? "-with-game" : "-no-game"));
                      },
                  }),
              ],
          })
        : null;
}
var lB = i(189213),
    lF = i(292666),
    lz = i(320989),
    lY = i(978263);
let lX = [];
var lH = i(235986),
    lK = i(820785),
    lW = i(734057),
    lZ = i(808728),
    lq = i(967198),
    lQ = i(926140),
    lJ = i(746642);
function l$() {}
let l0 = [lQ.rD.VOICE_CHANNEL];
function l1(e) {
    e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0);
}
function l2() {
    return (0, E.jsx)("div", {
        className: lJ.i1,
        children: (0, E.jsx)(ee.E, {
            variant: "text-md/medium",
            color: "text-muted",
            className: lJ.GN,
            children: j.intl.string(j.t.zHjCd1),
        }),
    });
}
function l3(e) {
    let { keybind: t, className: i } = e,
        n = S.useRef(t);
    S.useEffect(() => {
        n.current = t;
    });
    let [s, l] = S.useState(t.params?.channelId ?? void 0),
        r = S.useCallback(() => {
            (0, z.openModalLazy)(
                async () => (e) =>
                    (0, E.jsx)(l6, {
                        ...e,
                        onSelect: (e) => {
                            l(e), tF.A.setKeybind({ ...n.current, params: { channelId: e } });
                        },
                    }),
            );
        }, []);
    return (0, E.jsx)("div", {
        className: e2()(lJ.a8, i),
        children: (0, E.jsx)(sV.D, {
            label: j.intl.string(j.t.q4JpM8),
            children: (0, E.jsxs)(lH.A, {
                align: lH.A.Align.STRETCH,
                children: [
                    (0, E.jsx)("div", { className: lJ.$X, children: (0, E.jsx)(l4, { channelId: s }) }),
                    (0, E.jsx)(lH.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, E.jsx)(eD.$, { variant: "primary", text: j.intl.string(j.t.Dm8O4e), onClick: r }),
                    }),
                ],
            }),
        }),
    });
}
function l6(e) {
    let t,
        i,
        { transitionState: n, onClose: s, onSelect: l } = e,
        r = S.useId(),
        a = S.useRef(null),
        {
            query: o,
            updateQuery: u,
            queryResults: d,
        } = (function (e) {
            let {
                    visible: t,
                    autocompleterResultTypes: i,
                    autocompleterOptions: n,
                    autocompleterBeforeCreateSearchContext: s,
                } = e,
                [l, r] = S.useState(""),
                [a, o] = S.useState(lX),
                u = S.useCallback((e, t) => {
                    "" === (t = t.trim()).trim() ? o(lX) : o(e);
                }, []);
            S.useEffect(
                () =>
                    lz.A.addRouteChangeListener(() => {
                        r("");
                    }),
                [],
            );
            let [d] = S.useState(() => new lY.A(u, i, void 0, n));
            return (
                S.useEffect(() => {
                    t ? (s?.(d), d.createSearchContext()) : (d.clean(), r(""));
                }, [t, d, s]),
                {
                    queryResults: a,
                    query: l,
                    updateQuery: S.useCallback(
                        (e) => {
                            r(e), d.search(e);
                        },
                        [d],
                    ),
                }
            );
        })({ visible: !0, autocompleterResultTypes: l0, autocompleterBeforeCreateSearchContext: l1 }),
        c =
            ((t = "" !== o),
            (i = (0, g.yK)([lZ.Ay, lW.A, lq.A], () => {
                let e = lq.A.getGuildId();
                if (t || null == e) return [];
                let i = [];
                for (let t of lZ.Ay.getVocalChannelIds(e)) {
                    let e = lW.A.getChannel(t);
                    null != e && i.push(e);
                }
                return i;
            }, [t])),
            t ? null : i),
        { focusedIndex: m, setFocusedIndex: A } = (function (e) {
            let [t, i] = S.useState(0),
                n = S.useRef(e);
            return (
                e !== n.current && 0 !== t && i(0),
                S.useEffect(() => {
                    n.current = e;
                }),
                { focusedIndex: t, setFocusedIndex: i }
            );
        })(o);
    S.useEffect(() => {
        let { current: e } = a;
        null == e || e.isItemVisible(0, m, !0) || e.scrollToIndex({ section: 0, row: m });
    }, [m]);
    let h = null != c ? c.length : d.length,
        T = (() => {
            if (null != c) return c[m]?.id;
            let e = d[m];
            if (e?.type === lQ.rD.VOICE_CHANNEL) return e.record.id;
        })(),
        x =
            h > 0 || "" === o
                ? {
                      innerId: r,
                      innerRole: "listbox",
                      innerAriaLabel: j.intl.string(j.t["+N3fW7"]),
                      ref: a,
                      sections: [h],
                      renderRow: function (e) {
                          let { row: t } = e,
                              i = (() => {
                                  if (null != c) return c[t];
                                  let e = d[t];
                                  if (e?.type === lQ.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == i) return null;
                          let n = null != i.parent_id ? lW.A.getChannel(i.parent_id) : void 0,
                              r = eo.A.getGuild(i.guild_id);
                          return (0, E.jsx)(
                              lK.c3,
                              {
                                  id: i.id,
                                  channel: i,
                                  category: n,
                                  focused: m === t,
                                  onMouseEnter: () => A(t),
                                  onClick: () => {
                                      l(i.id), s();
                                  },
                                  onFocus: () => A(t),
                                  children:
                                      null != r ? (0, E.jsx)("div", { className: lJ.J5, children: r.name }) : null,
                              },
                              i.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, E.jsx)(l2, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, E.jsx)(lB.Modal, {
        transitionState: n,
        onClose: s,
        title: j.intl.string(j.t.Dm8O4e),
        subtitle: j.intl.string(j.t.q4JpM8),
        actions: void 0,
        input: (0, E.jsx)(lF.k, {
            value: o,
            onChange: u,
            onKeyDown: function (e) {
                let t = e.key.toLowerCase();
                if ("arrowdown" === t || "arrowup" === t || "enter" === t || "escape" === t)
                    switch ((e.preventDefault(), t)) {
                        case "escape":
                            s();
                            break;
                        case "enter": {
                            let e = (() => {
                                if (null != c) return c[m];
                                let e = d[m];
                                if (e?.type === lQ.rD.VOICE_CHANNEL) return e.record;
                            })();
                            null == e ? l(void 0) : l(e.id), s();
                            break;
                        }
                        case "arrowup":
                            0 === m ? A(h - 1) : A(m - 1);
                            break;
                        case "arrowdown":
                            m >= h - 1 ? A(0) : A(m + 1);
                    }
            },
            placeholder: j.intl.string(j.t.tG0r7g),
            role: "combobox",
            "aria-controls": r,
            "aria-expanded": h > 0,
            "aria-activedescendant": h > 0 && null != T ? T : void 0,
            "aria-autocomplete": "list",
            spellCheck: !1,
            autoFocus: !0,
        }),
        listProps: x,
    });
}
function l4(e) {
    let { channelId: t } = e,
        {
            channel: i,
            category: n,
            guild: s,
        } = (0, g.cf)([lW.A, eo.A], () => {
            let e = null != t ? lW.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? lW.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? eo.A.getGuild(e.guild_id) : void 0,
                  }
                : { channel: void 0, category: void 0, guild: void 0 };
        });
    return null == i
        ? (0, E.jsx)(ee.E, {
              variant: "text-md/medium",
              color: "text-muted",
              className: lJ.GN,
              children: j.intl.string(j.t["/fYIK7"]),
          })
        : (0, E.jsx)(lK.c3, {
              channel: i,
              id: i.id,
              category: n,
              onClick: l$,
              onFocus: l$,
              onMouseEnter: l$,
              focused: !1,
              children: null != s ? (0, E.jsx)("div", { className: lJ.J5, children: s.name }) : null,
          });
}
function l5(e) {
    let { className: t, children: i } = e;
    return (0, E.jsx)("div", { className: t, children: (0, E.jsx)(K.B, { gap: 16, children: i }) });
}
var l7 = i(734066),
    l8 = i(880144),
    l9 = i(614455);
function re() {
    let e = (0, g.bG)([ew.Ay], () => ew.Ay.getState()),
        t = (0, g.bG)([lM.Ay], () => (0, l8.A)(lM.Ay)),
        i = (0, g.bG)([l9.A], () => l9.A.isSupported),
        n = (0, l7.sw)(),
        s = (0, l7.BW)(),
        l = (0, ez.isWindows)();
    return {
        customizableKeybinds: (function (e) {
            let { keybinds: t, enableClips: i, enableScreenshotKeybind: n, allowSoundboard: s } = e;
            return eK()(t)
                .reject(
                    (e) =>
                        e.managed &&
                        ![
                            eg.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                            eg.hCu.SAVE_CLIP,
                            eg.hCu.SAVE_SCREENSHOT,
                        ].includes(e.action),
                )
                .reject((e) => !i && (e.action === eg.hCu.SAVE_CLIP || e.action === eg.hCu.SAVE_SCREENSHOT))
                .reject((e) => !n && e.action === eg.hCu.SAVE_SCREENSHOT)
                .reject((e) => !s && (e.action === eg.hCu.SOUNDBOARD || e.action === eg.hCu.SOUNDBOARD_HOLD))
                .sortBy((e) => e.id)
                .sortBy((e) => (!0 === e.managed ? -1 : 0))
                .value();
        })({ keybinds: e, enableClips: n, enableScreenshotKeybind: s, allowSoundboard: l }),
        keybindActionTypes: (function (e) {
            let {
                    overlaySupported: t,
                    canGoLive: i,
                    allowSoundboard: n,
                    enableClips: s,
                    enableScreenshotKeybind: l,
                } = e,
                r = [
                    { id: "unassigned", value: eg.hCu.UNASSIGNED, label: j.intl.string(j.t["0Uh579"]) },
                    { id: "push-to-talk", value: eg.hCu.PUSH_TO_TALK, label: j.intl.string(j.t.Y5lgTP) },
                    {
                        id: "push-to-talk-priority",
                        value: eg.hCu.PUSH_TO_TALK_PRIORITY,
                        label: j.intl.string(j.t.DkSwJ2),
                    },
                    { id: "push-to-mute", value: eg.hCu.PUSH_TO_MUTE, label: j.intl.string(j.t.hSCRqd) },
                    { id: "vad-priority", value: eg.hCu.VAD_PRIORITY, label: j.intl.string(j.t["49d6Nd"]) },
                    { id: "toggle-mute", value: eg.hCu.TOGGLE_MUTE, label: j.intl.string(j.t.PlkYKD) },
                    { id: "toggle-deafen", value: eg.hCu.TOGGLE_DEAFEN, label: j.intl.string(j.t.NvGq1K) },
                    { id: "toggle-voice-mode", value: eg.hCu.TOGGLE_VOICE_MODE, label: j.intl.string(j.t.Wa5H9S) },
                    {
                        id: "toggle-streamer-mode",
                        value: eg.hCu.TOGGLE_STREAMER_MODE,
                        label: j.intl.string(j.t.BK0Ncc),
                    },
                    { id: "toggle-camera", value: eg.hCu.TOGGLE_CAMERA, label: j.intl.string(j.t.hf8JVT) },
                ];
            return (
                t &&
                    (r.push({
                        id: "toggle-overlay-input-lock",
                        value: eg.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
                        label: j.intl.string(j.t.VsAZcC),
                    }),
                    r.push({
                        id: "activate-overlay-region-text-widget",
                        value: eg.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                        label: j.intl.string(j.t.hurHWo),
                    })),
                i &&
                    ((0, ez.isWindows)() || lM.Ay.getUseSystemScreensharePicker()) &&
                    r.push({
                        id: "toggle-go-live-streaming",
                        value: eg.hCu.TOGGLE_GO_LIVE_STREAMING,
                        label: j.intl.string(j.t.ybdjJD),
                    }),
                (0, ez.isDesktop)() &&
                    (r.push(
                        { id: "navigate-back", value: eg.hCu.NAVIGATE_BACK, label: j.intl.string(j.t.gRSaOa) },
                        { id: "navigate-forward", value: eg.hCu.NAVIGATE_FORWARD, label: j.intl.string(j.t.zOXpjU) },
                        {
                            id: "switch-to-voice-channel",
                            value: eg.hCu.SWITCH_TO_VOICE_CHANNEL,
                            label: j.intl.string(j.t.ty7Lxy),
                        },
                        {
                            id: "disconnect-from-voice-channel",
                            value: eg.hCu.DISCONNECT_FROM_VOICE_CHANNEL,
                            label: j.intl.string(j.t.CV7mT7),
                        },
                    ),
                    n &&
                        r.push(
                            { id: "soundboard", value: eg.hCu.SOUNDBOARD, label: j.intl.string(j.t.yPH4xm) },
                            {
                                id: "soundboard-hold",
                                value: eg.hCu.SOUNDBOARD_HOLD,
                                label: j.intl.string(j.t["1xFbP/"]),
                            },
                        ),
                    s &&
                        (r.push({ id: "save-clip", value: eg.hCu.SAVE_CLIP, label: j.intl.string(j.t.U4URzP) }),
                        l &&
                            r.push({
                                id: "save-screenshot",
                                value: eg.hCu.SAVE_SCREENSHOT,
                                label: j.intl.string(j.t["+WloFH"]),
                            }))),
                r
            );
        })({ overlaySupported: i, canGoLive: t, allowSoundboard: l, enableClips: n, enableScreenshotKeybind: s }),
        keybindDescriptions: (function (e) {
            let { overlaySupported: t, canGoLive: i, enableClips: n, enableScreenshotKeybind: s } = e,
                l = {
                    [eg.hCu.UNASSIGNED]: j.intl.string(j.t.rvlNLv),
                    [eg.hCu.PUSH_TO_MUTE]: j.intl.string(j.t.xtESim),
                    [eg.hCu.PUSH_TO_TALK]: j.intl.string(j.t.wTcBSy),
                    [eg.hCu.PUSH_TO_TALK_PRIORITY]: j.intl.string(j.t.FhHvWH),
                    [eg.hCu.TOGGLE_MUTE]: j.intl.string(j.t.X2fbUm),
                    [eg.hCu.TOGGLE_DEAFEN]: j.intl.string(j.t.MjREZV),
                    [eg.hCu.TOGGLE_VOICE_MODE]: j.intl.string(j.t.snm5YW),
                    [eg.hCu.TOGGLE_STREAMER_MODE]: j.intl.string(j.t.YszLLx),
                    [eg.hCu.VAD_PRIORITY]: j.intl.string(j.t.rSe8IZ),
                    [eg.hCu.TOGGLE_CAMERA]: j.intl.string(j.t.v1JBtL),
                };
            return (
                t && (l[eg.hCu.TOGGLE_OVERLAY_INPUT_LOCK] = j.intl.string(j.t.IoP5vc)),
                i && (0, ez.isWindows)() && (l[eg.hCu.TOGGLE_GO_LIVE_STREAMING] = j.intl.string(j.t.s4C238)),
                (0, ez.isDesktop)() &&
                    ((l[eg.hCu.NAVIGATE_BACK] = j.intl.string(j.t.nKDlEt)),
                    (l[eg.hCu.NAVIGATE_FORWARD] = j.intl.string(j.t.DK0FFk)),
                    (l[eg.hCu.SOUNDBOARD] = (0, ez.isWindows)()
                        ? j.intl.string(j.t["5wJefL"])
                        : j.intl.string(j.t.gzjsSP)),
                    (l[eg.hCu.SOUNDBOARD_HOLD] = (0, ez.isWindows)()
                        ? j.intl.string(j.t.RRkZc9)
                        : j.intl.string(j.t.laNlTl)),
                    n &&
                        ((l[eg.hCu.SAVE_CLIP] = j.intl.string(j.t.z3Wbam)),
                        s && (l[eg.hCu.SAVE_SCREENSHOT] = j.intl.string(j.t.m0zd57)))),
                l
            );
        })({ overlaySupported: i, canGoLive: t, enableClips: n, enableScreenshotKeybind: s }),
    };
}
var rt = i(581133);
function ri(e) {
    let { children: t } = e;
    return t([lP.Q_.MESSAGE, lP.Q_.NAVIGATION, lP.Q_.DND, lP.Q_.CHAT, lP.Q_.VOICE_AND_VIDEO, lP.Q_.MISCELLANEOUS]);
}
class rn extends S.PureComponent {
    handleActionChanged = (e) => {
        tF.A.setKeybind({ ...this.props.keybind, action: e });
    };
    handleShortcutChange = (e) => {
        tF.A.setKeybind({ ...this.props.keybind, shortcut: e });
    };
    handleDeleteKeybind = () => {
        tF.A.deleteKeybind(this.props.keybind.id);
    };
    handleEnableDisable = () => {
        let { keybind: e } = this.props;
        tF.A.setKeybind({ ...this.props.keybind, enabled: !e.enabled });
    };
    renderMessage() {
        let { keybind: e } = this.props,
            t = eW.dI(e.shortcut);
        return n7.A.hasBind(t)
            ? (0, E.jsx)(tx.p, { messageType: tx.Y.ERROR, children: j.intl.string(j.t["7lQlw3"]) })
            : iO.Yy.has(t)
              ? (0, E.jsx)(tx.p, {
                    messageType: tx.Y.ERROR,
                    children: j.intl.format(j.t.MOIaNd, {
                        keyboardNavArticle: tp.A.getArticleURL(eg.MVz.KEYBOARD_NAVIGATION),
                    }),
                })
              : (0, E.jsx)(ee.E, {
                    variant: "text-md/normal",
                    className: rt.qD,
                    children: this.props.keybindDescriptions[e.action],
                });
    }
    render() {
        let { managed: e, enabled: t } = this.props.keybind;
        return (0, E.jsxs)("div", {
            className: rt.YI,
            children: [
                (0, E.jsxs)("div", {
                    className: rt.PO,
                    children: [
                        (0, E.jsx)("div", {
                            className: rt.AS,
                            children: (0, E.jsx)(ly.l, {
                                selectionMode: "single",
                                label: j.intl.string(j.t.UUpAD6),
                                value: this.props.keybind.action,
                                options: this.props.keybindActionTypes,
                                onSelectionChange: this.handleActionChanged,
                                disabled: e,
                            }),
                        }),
                        (0, E.jsx)("div", {
                            className: rt.AS,
                            children: (0, E.jsx)(sV.D, {
                                label: j.intl.string(j.t["1La4tC"]),
                                children: (0, E.jsx)(tz.A, {
                                    defaultValue: this.props.keybind.shortcut,
                                    onChange: this.handleShortcutChange,
                                }),
                            }),
                        }),
                        !e &&
                            (0, E.jsx)("div", {
                                className: rt.d9,
                                children: (0, E.jsx)(lj.K, {
                                    variant: "icon-only",
                                    onClick: this.handleDeleteKeybind,
                                    icon: lO.u,
                                    "aria-label": j.intl.string(j.t.qEHmmB),
                                }),
                            }),
                        (0, E.jsx)("div", {
                            className: rt.ZW,
                            children: (0, E.jsx)(ts.m, {
                                text: j.intl.string(j.t.uCD7qK),
                                children: (0, E.jsx)("div", {
                                    children: (0, E.jsx)(W.d, { checked: t, onChange: this.handleEnableDisable }),
                                }),
                            }),
                        }),
                    ],
                }),
                this.renderMessage(),
                this.renderExtraSettings(),
            ],
        });
    }
    renderExtraSettings() {
        let { action: e } = this.props.keybind;
        return e === eg.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, E.jsx)(l3, { keybind: this.props.keybind }) : void 0;
    }
}
class rs extends S.PureComponent {
    handleAddKeybind = () => {
        tF.A.addKeybind();
    };
    renderKeybinds(e, t, i) {
        return e.map((n, s) =>
            (0, E.jsxs)(
                S.Fragment,
                {
                    children: [
                        (0, E.jsx)(rn, { keybind: n, keybindDescriptions: t, keybindActionTypes: i }, n.id),
                        s !== e.length - 1 ? (0, E.jsx)(eP.c, {}) : null,
                    ],
                },
                n.id,
            ),
        );
    }
    renderKeybindWarning() {
        return (0, E.jsxs)("div", {
            className: rt.$e,
            children: [
                (0, E.jsx)(lR.m, { size: "xs", color: ei.A.colors.ICON_SUBTLE }),
                (0, E.jsx)(ee.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: j.intl.string(j.t.NoKjWP),
                }),
            ],
        });
    }
    render() {
        let { customizableKeybinds: e, keybindActionTypes: t, keybindDescriptions: i } = this.props;
        return (0, E.jsxs)(E.Fragment, {
            children: [
                (0, E.jsx)(l5, {
                    className: iG.IE,
                    children: ez.isPlatformEmbedded
                        ? (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsxs)("div", {
                                      className: rt.OQ,
                                      children: [
                                          this.renderKeybindWarning(),
                                          (0, E.jsx)("div", {
                                              className: rt.c9,
                                              children: (0, E.jsx)(eD.$, {
                                                  size: "md",
                                                  onClick: this.handleAddKeybind,
                                                  text: j.intl.string(j.t.zk6Xbs),
                                                  variant: "primary",
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, E.jsx)(lw, { className: rt.Qo, sourcePage: "keybinds" }),
                                  e.length > 0 &&
                                      (0, E.jsxs)(E.Fragment, {
                                          children: [(0, E.jsx)(eP.c, {}), this.renderKeybinds(e, i, t)],
                                      }),
                                  (0, E.jsx)(eP.c, {}),
                              ],
                          })
                        : (0, E.jsx)(tx.p, {
                              messageType: tx.Y.INFO,
                              className: rt.Ly,
                              children: j.intl.format(j.t.mPi3F3, { downloadLink: eg.X7G.DOWNLOAD }),
                          }),
                }),
                (0, E.jsx)(rl, {}),
            ],
        });
    }
}
function rl(e) {
    let { showHeader: t = !0 } = e,
        i = eK()((0, lP.Bx)())
            .filter((e) => e.description !== j.intl.string(j.t.HnNtEI))
            .groupBy((e) => e.group)
            .value();
    return (0, E.jsxs)(K.B, {
        gap: 48,
        children: [
            (0, E.jsx)(ip.n, {
                label: t ? j.intl.string(j.t.Lz5KHI) : void 0,
                children: (0, E.jsx)("div", {
                    className: rt.jh,
                    children: (0, E.jsxs)("div", {
                        className: rt.yZ,
                        children: [
                            (0, E.jsx)(ee.E, { variant: "text-md/normal", children: j.intl.string(j.t.sMWLBj) }),
                            (0, E.jsx)("div", {
                                className: rt.DM,
                                children: (0, E.jsx)(lL.e, { shortcut: lD.z.binds["0"], className: rt.LE }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, E.jsx)(ri, {
                children: (e) =>
                    (0, E.jsx)(E.Fragment, {
                        children: e.map((e, t) => {
                            let n = (0, lP.Gm)(e),
                                s = (0, lP.zF)(e),
                                l = i[e];
                            return (0, E.jsx)(
                                ip.n,
                                {
                                    label: n,
                                    description: s,
                                    children: (0, E.jsx)("div", {
                                        className: rt.jh,
                                        children: l.map((e, t) =>
                                            (0, E.jsxs)(
                                                S.Fragment,
                                                {
                                                    children: [
                                                        0 !== t && (0, E.jsx)(eP.c, {}),
                                                        (0, E.jsxs)("div", {
                                                            className: rt.yZ,
                                                            children: [
                                                                (0, E.jsx)(ee.E, {
                                                                    variant: "text-md/normal",
                                                                    children: e.description,
                                                                }),
                                                                (0, E.jsx)("div", {
                                                                    className: rt.DM,
                                                                    children: e.binds.map((e) =>
                                                                        (0, E.jsx)(
                                                                            lL.e,
                                                                            { shortcut: e, className: rt.LE },
                                                                            e,
                                                                        ),
                                                                    ),
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                },
                                                e.description,
                                            ),
                                        ),
                                    }),
                                },
                                t,
                            );
                        }),
                    }),
            }),
        ],
    });
}
let rr = (0, a.E2)(u.X.KEYBINDS_SETTING, {
        Component: function () {
            S.useEffect(
                () => (
                    tF.A.enableAll(!1),
                    () => {
                        tF.A.enableAll(!0);
                    }
                ),
                [],
            );
            let e = re();
            return (0, E.jsx)(rs, { ...e });
        },
        useSearchTerms: () => [j.intl.string(j.t.T9DA2K)],
    }),
    ra = (0, a.zZ)(u.X.KEYBINDS_CATEGORY, { buildLayout: () => [rr] }),
    ro = (0, a.t_)(u.X.KEYBINDS_PANEL, { useTitle: () => j.intl.string(j.t.T9DA2K), buildLayout: () => [ra] }),
    ru = (0, a.i4)(u.X.KEYBINDS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.T9DA2K),
        icon: lv.F,
        buildLayout: () => [ro],
    });
var rd = i(37646),
    rc = i(434404);
let rg = (0, a.t_)(u.X.LANGUAGE_AND_TIME_PANEL, {
        useTitle: () => j.intl.string(j.t.KyFVyi),
        buildLayout: () => [rc.F],
    }),
    rm = (0, a.i4)(u.X.LANGUAGE_AND_TIME_SIDEBAR_ITEM, {
        icon: rd.U,
        useTitle: () => j.intl.string(j.t.KyFVyi),
        buildLayout: () => [rg],
    }),
    rA = (0, nR.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 }));
async function rh() {
    let e = await sd.Ay.getOpenOnStart(),
        t = await sd.Ay.getSetting("START_MINIMIZED", !1),
        i = await sd.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
    rA.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: i });
}
let rE = (0, a.zD)(u.X.OS_OPEN_ON_STARTUP, {
        useTitle: () => j.intl.string(j.t["3BeZti"]),
        usePredicate: () => c.Av && !(0, c.cX)(),
        useValue: () => rA.useState((e) => e.openOnStartup),
        setValue: function (e) {
            rA.setState({ openOnStartup: e }), sd.Ay.send("TOGGLE_OPEN_ON_STARTUP", e);
        },
        initialize: () => {
            sd.Ay.getOpenOnStart().then((e) => rA.setState({ openOnStartup: e }));
        },
    }),
    rS = (0, a.zD)(u.X.OS_MINIMIZE_TO_TRAY, {
        useTitle: () => j.intl.string(j.t.dJ5MUh),
        useSubtitle: () => j.intl.string(j.t.nQavHr),
        usePredicate: () => c.Av && !(0, c.cX)(),
        useValue: () => rA.useState((e) => e.minimizeToTray),
        setValue: function (e) {
            rA.setState({ minimizeToTray: e }), sd.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e);
        },
        initialize: () => {
            sd.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => rA.setState({ minimizeToTray: e }));
        },
    });
var rT = i(117695);
function rx(e) {
    switch (e.state) {
        case "unknown":
            return j.intl.string(j.t["KW+nqT"]);
        case "disabled":
            return j.intl.string(j.t["Q/wAF7"]);
        case "disconnected":
            return j.intl.string(j.t.Xvs9IM);
        case "initializing":
            return j.intl.string(j.t.h4qz8W);
        case "connecting":
            return j.intl.string(j.t.fSu9XF);
        case "handshaking":
            return j.intl.string(j.t["00aYLJ"]);
        case "running":
            return j.intl.string(j.t["54TB7Z"]);
        case "waiting-for-retry":
            return j.intl.string(j.t["0FONwi"]);
        case "failure":
            return j.intl.string(j.t.Ic0nkd);
        default:
            (0, N.xb)(e.state);
    }
}
let rp = new Set(["failure", "unknown"]),
    rf = (0, a.E2)(u.X.OS_SYSTEM_SERVICE, {
        useSearchTerms: () => [j.intl.string(j.t.roHq80)],
        Component: function () {
            let [e, t] = S.useState(!1),
                [i, n] = S.useState(() => (0, tf.TC)()),
                s = (0, o.ri)("SystemService"),
                l = (0, g.bG)([m.Ay], () => m.Ay.getSystemServiceStatus("input-service")),
                r = S.useCallback(async () => {
                    t(!0),
                        i ? await (0, tf.z8)("windows-settings") : await (0, tf.sL)("windows-settings"),
                        t(!1),
                        n((0, tf.TC)());
                }, [i]),
                a = "running" === l.state;
            return (0, E.jsxs)("div", {
                className: rT.q,
                children: [
                    (0, E.jsxs)("div", {
                        className: rT.L,
                        children: [
                            (0, E.jsxs)(K.B, {
                                direction: "horizontal",
                                children: [
                                    (0, E.jsx)(ee.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: j.intl.string(j.t.roHq80),
                                    }),
                                    i &&
                                        s &&
                                        (0, E.jsxs)(E.Fragment, {
                                            children: [
                                                (0, E.jsx)(ee.E, {
                                                    variant: "text-md/medium",
                                                    color: "text-strong",
                                                    "aria-hidden": !0,
                                                    children: "\u2022",
                                                }),
                                                (0, E.jsx)(ee.E, {
                                                    variant: "text-md/medium",
                                                    color:
                                                        "running" === l.state
                                                            ? "text-feedback-positive"
                                                            : rp.has(l.state)
                                                              ? "text-feedback-critical"
                                                              : "text-feedback-warning",
                                                    children: rx(l),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, E.jsx)(ee.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: j.intl.format(j.t["8CAL+D"], {
                                    helpCenterLink: tp.A.getArticleURL(eg.MVz.SYSTEM_SERVICE),
                                }),
                            }),
                            i &&
                                !s &&
                                (0, E.jsx)(ee.E, {
                                    variant: "text-sm/normal",
                                    color: a ? "text-feedback-positive" : "text-feedback-warning",
                                    children: a
                                        ? j.intl.string(j.t.KHVMkW)
                                        : j.intl.format(j.t["5Rlr0b"], { status: rx(l) }),
                                }),
                        ],
                    }),
                    (0, E.jsx)(eD.$, {
                        variant: i ? "critical-secondary" : "primary",
                        loading: e,
                        onClick: r,
                        text: i ? j.intl.string(j.t.pAwbdL) : j.intl.string(j.t["1iI46O"]),
                    }),
                ],
            });
        },
        usePredicate: tf.XQ,
    }),
    rN = (0, a.zZ)(u.X.LINUX_CATEGORY, {
        buildLayout: () => [rE, rS, rf],
        initialize: () => {
            rh();
        },
    }),
    r_ = (0, a.t_)(u.X.LINUX_PANEL, { useTitle: () => j.intl.string(j.t["7pPjTW"]), buildLayout: () => [rN] }),
    rI = (0, a.i4)(u.X.LINUX_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["7pPjTW"]),
        icon: tr.k,
        usePredicate: () => ez.isPlatformEmbedded && (0, ez.isLinux)(),
        buildLayout: () => [r_],
    });
var rC = i(3137),
    rb = i(369606),
    rv = i(604121),
    ry = i(725951),
    rj = i(400492),
    rO = i(669067),
    rR = i(115063),
    rL = i(754692),
    rD = i(927018),
    rP = i(512599),
    rG = i(532197),
    rM = i(874486),
    rU = i(989349),
    rV = i.n(rU),
    rk = i(58703),
    rw = i(906688),
    rB = i(523896);
function rF(e) {
    let { achievementId: t, dateUnlocked: i } = e,
        n = (0, rD.vM)(t);
    if (null == n) return null;
    let s = null != i,
        { name: l, description: r, hideDescriptionUntilUnlock: a, onAction: o } = n,
        u = a && !s,
        d = s ? "text-strong" : "text-muted",
        c = s ? "text-default" : "text-muted",
        g = rV()(i),
        m = null != o && s,
        A = m ? $.D : "div";
    return (0, E.jsxs)(A, {
        className: e2()(rB.kL, m && rB.b),
        onClick: () => {
            m && o();
        },
        children: [
            (0, E.jsx)("div", {
                className: rB.zc,
                children: (0, E.jsx)(rw.A, { achievementId: t, size: rw.A.Sizes.SIZE_40, unlocked: s }),
            }),
            (0, E.jsxs)("div", {
                className: rB.VW,
                children: [
                    null != i &&
                        (0, E.jsx)(ee.E, {
                            variant: "text-xxs/semibold",
                            color: "text-muted",
                            className: rB.YR,
                            children: (0, rk.mk)(g),
                        }),
                    (0, E.jsx)(ee.E, { variant: "text-md/medium", color: d, children: l() }),
                    (0, E.jsx)(ee.E, { variant: "text-xs/normal", color: c, children: u ? "?????" : r() }),
                ],
            }),
        ],
    });
}
var rz = i(885959);
function rY(e) {
    let { onBackClick: t } = e,
        i = (0, g.bG)([rM.A], () => rM.A.getAllUnlockedAchievements()),
        n = S.useMemo(() => Object.values(i).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [i]),
        s = S.useMemo(
            () =>
                Object.values(rD.l0)
                    .filter(N.Vq)
                    .filter((e) => null == i[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [i],
        );
    return (0, E.jsxs)(E.Fragment, {
        children: [
            (0, E.jsxs)($.D, {
                onClick: t,
                className: rz.vv,
                children: [
                    (0, E.jsx)(rG.A, { direction: rG.A.Directions.LEFT, className: rz.Kk }),
                    (0, E.jsx)(ee.E, {
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: j.intl.string(j.t["13/7kX"]),
                    }),
                ],
            }),
            (0, E.jsxs)("div", {
                className: rz.N1,
                children: [
                    (0, E.jsxs)("div", {
                        className: rz.if,
                        children: [
                            (0, E.jsx)(eL.D, {
                                variant: "heading-lg/extrabold",
                                color: "text-strong",
                                children: j.intl.string(j.t["6jI0hd"]),
                            }),
                            (0, E.jsx)(ee.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: j.intl.string(j.t.GuUItX),
                            }),
                        ],
                    }),
                    (0, E.jsx)("div", {
                        className: rz.nr,
                        children: (0, E.jsx)(rb.O, {
                            size: "custom",
                            color: ei.A.unsafe_rawColors.ORANGE_345.css,
                            width: 40,
                            height: 40,
                        }),
                    }),
                ],
            }),
            n.length > 0 &&
                (0, E.jsx)("div", {
                    className: rz.yF,
                    children: (0, E.jsx)("div", {
                        className: rz.Eh,
                        children: n.map((e) => {
                            let { achievementId: t, dateUnlocked: i } = e;
                            return (0, E.jsx)(rF, { achievementId: t, dateUnlocked: i }, t);
                        }),
                    }),
                }),
            s.length > 0 &&
                (0, E.jsxs)("div", {
                    className: rz.yF,
                    children: [
                        (0, E.jsx)("div", {
                            className: rz.if,
                            children: (0, E.jsx)(ee.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                children: j.intl.string(j.t.GFyMg1),
                            }),
                        }),
                        (0, E.jsx)("div", {
                            className: rz.Eh,
                            children: s.map((e) => (0, E.jsx)(rF, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, E.jsx)("div", { className: rz.yF, children: (0, E.jsx)("div", { className: rz.F3 }) }),
        ],
    });
}
var rX = i(224964),
    rH = i(31408),
    rK = i(739347);
let rW = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    rZ = (0, eH.range)(0, 11),
    rq = (0, eH.range)(0, 2.25, 0.25),
    rQ = (0, eH.range)(1, 11),
    rJ = (0, eH.range)(1, 26),
    r$ = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function r0(e) {
    let { disabled: t, locations: i, settingsLocations: n, onChange: s } = e,
        l = i.map((e) =>
            (0, E.jsx)(
                W.d,
                {
                    label: e.title,
                    description: e.description,
                    checked: n[e.location],
                    disabled: t,
                    onChange: (t) => s({ ...n, [e.location]: t }),
                },
                e.location,
            ),
        );
    return (0, E.jsx)(ip.n, { label: j.intl.string(j.t.bWVN1D), children: l });
}
function r1(e) {
    let { children: t } = e;
    return (0, E.jsx)(ee.E, { className: rK.iF, variant: "text-sm/normal", color: "text-default", children: t });
}
function r2(e) {
    let {
            settings: { enabled: t, warningSeen: i },
            updateSettings: n,
        } = e,
        s = (0, g.bG)([i6.A], () => i6.A.useReducedMotion);
    return (0, E.jsx)(W.d, {
        label: j.intl.string(j.t.vuiXm9),
        description: j.intl.string(j.t.KuYbWN),
        checked: t,
        onChange: (e) => {
            e || (0, rL._)(rD.sn.DISABLE_POGGERMODE),
                e && (!i || s)
                    ? (0, su.A)({
                          title: s ? j.intl.string(j.t["FxT+p0"]) : j.intl.string(j.t.TAZ4F9),
                          subtitle: s ? j.intl.string(j.t.gmixrx) : j.intl.string(j.t.jN3t3K),
                          confirmText: j.intl.string(j.t.JFfins),
                          onConfirm: () => n(s ? rW : { enabled: !0, warningSeen: !0 }),
                      })
                    : n({ enabled: e });
        },
    });
}
function r3(e) {
    let {
            settings: {
                enabled: t,
                confettiEnabled: i,
                confettiCount: n,
                confettiSize: s,
                confettiEnabledLocations: l,
            },
            updateSettings: r,
        } = e,
        a = !t || !i;
    return (0, E.jsxs)(ip.n, {
        label: j.intl.string(j.t.mqxwJO),
        children: [
            (0, E.jsx)(W.d, {
                label: j.intl.string(j.t.s0KCgF),
                description: j.intl.string(j.t.O1Vflg),
                checked: i,
                disabled: !t,
                onChange: (e) => r({ confettiEnabled: e }, 0),
            }),
            (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(ee.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: rK.KF,
                        children: j.intl.string(j.t.vd0D81),
                    }),
                    (0, E.jsx)(r1, { children: j.intl.string(j.t.a18Sug) }),
                    (0, E.jsx)(no.A, {
                        disabled: a,
                        markers: rQ,
                        stickToMarkers: !0,
                        minValue: rQ[0],
                        maxValue: rQ[rQ.length - 1],
                        initialValue: n,
                        onValueChange: (e) => r({ confettiCount: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(ee.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: rK.KF,
                        children: j.intl.string(j.t.sPO3ij),
                    }),
                    (0, E.jsx)(r1, { children: j.intl.string(j.t.xoldVn) }),
                    (0, E.jsx)(no.A, {
                        disabled: a,
                        markers: rJ,
                        stickToMarkers: !0,
                        minValue: rJ[0],
                        maxValue: rJ[rJ.length - 1],
                        initialValue: s,
                        onValueChange: (e) => r({ confettiSize: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, E.jsx)(r0, {
                disabled: a,
                locations: [
                    {
                        location: rH.k.CHAT_INPUT,
                        title: j.intl.string(j.t.elTtyz),
                        description: j.intl.string(j.t.HtKfMi),
                    },
                    {
                        location: rH.k.REACTION,
                        title: j.intl.string(j.t.Ik4VIa),
                        description: j.intl.string(j.t.y4rqK0),
                    },
                    {
                        location: rH.k.MEMBER_USER,
                        title: j.intl.string(j.t.ZXBlAn),
                        description: j.intl.string(j.t["m9RD+c"]),
                    },
                    {
                        location: rH.k.CALL_TILE,
                        title: j.intl.string(j.t.V66giQ),
                        description: j.intl.string(j.t.fiHV7u),
                    },
                ],
                settingsLocations: l,
                onChange: (e) => r({ confettiEnabledLocations: e }, 0),
            }),
        ],
    });
}
function r6(e) {
    let {
            settings: { enabled: t, combosEnabled: i, comboSoundsEnabled: n, combosRequiredCount: s },
            updateSettings: l,
        } = e,
        r = !t || !i;
    return (0, E.jsxs)(ip.n, {
        label: j.intl.string(j.t.Xz0ole),
        children: [
            (0, E.jsx)(W.d, {
                label: j.intl.string(j.t.o3iV7B),
                description: j.intl.string(j.t["31Z8Ee"]),
                checked: i,
                disabled: !t,
                onChange: (e) => l({ combosEnabled: e }),
            }),
            (0, E.jsx)(W.d, {
                label: j.intl.string(j.t["Ax+IoW"]),
                description: j.intl.string(j.t["9rgQEr"]),
                checked: n,
                disabled: !t,
                onChange: (e) => l({ comboSoundsEnabled: e }),
            }),
            (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(ee.E, {
                        variant: "text-md/semibold",
                        color: r ? "text-muted" : "text-strong",
                        className: rK.KF,
                        children: j.intl.string(j.t.L0oQuh),
                    }),
                    (0, E.jsx)(r1, { children: j.intl.string(j.t["/OOFpL"]) }),
                    (0, E.jsx)(no.A, {
                        disabled: r,
                        markers: rZ,
                        stickToMarkers: !0,
                        minValue: rZ[0],
                        maxValue: rZ[rZ.length - 1],
                        initialValue: s,
                        onValueChange: (e) => l({ combosRequiredCount: e }),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
        ],
    });
}
function r4(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: i, shakeIntensity: n, screenshakeEnabledLocations: s },
            updateSettings: l,
        } = e,
        r = (0, g.bG)([i6.A], () => i6.A.useReducedMotion),
        a = !t || !i || r;
    return (0, E.jsxs)(ip.n, {
        label: j.intl.string(j.t.wVS5Sd),
        children: [
            (0, E.jsx)(W.d, {
                label: j.intl.string(j.t.N004zO),
                description: r ? j.intl.string(j.t.GckHGw) : j.intl.string(j.t.Qq5W3v),
                checked: i && !r,
                disabled: !t || r,
                onChange: (e) => l({ screenshakeEnabled: e }, 1),
            }),
            (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(ee.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: rK.KF,
                        children: j.intl.string(j.t.UxnnC4),
                    }),
                    (0, E.jsx)(r1, { children: j.intl.string(j.t.CEOEOb) }),
                    (0, E.jsx)(no.A, {
                        disabled: a,
                        markers: rq,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: rq[0],
                        maxValue: rq[rq.length - 1],
                        initialValue: n,
                        onValueChange: (e) => {
                            var t;
                            null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > n &&
                                (0, rL._)(rD.sn.MORE),
                                l(t, 1);
                        },
                        onMarkerRender: (e) => (e === rq[rq.length - 1] ? j.intl.string(j.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, E.jsx)(r0, {
                disabled: a,
                locations: [
                    {
                        location: rH.uD.CHAT_INPUT,
                        title: j.intl.string(j.t.vUcvPP),
                        description: j.intl.string(j.t.y00OrF),
                    },
                    {
                        location: rH.uD.VOICE_USER,
                        title: j.intl.string(j.t.TcRO54),
                        description: j.intl.string(j.t.YJCxVY),
                    },
                    {
                        location: rH.uD.MENTION,
                        title: j.intl.string(j.t.oW4shO),
                        description: j.intl.string(j.t["mqfw/H"]),
                    },
                ],
                settingsLocations: s,
                onChange: (e) => l({ screenshakeEnabledLocations: e }, 1),
            }),
        ],
    });
}
function r5(e) {
    let { updateSettings: t } = e;
    return (0, E.jsx)(ip.n, {
        label: j.intl.string(j.t.EuXv2q),
        children: (0, E.jsxs)(K.B, {
            gap: 16,
            children: [
                (0, E.jsx)("div", { children: j.intl.string(j.t["1SLnki"]) }),
                (0, E.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: rK.hw,
                    children: (0, E.jsx)(eD.$, {
                        variant: "primary",
                        size: "sm",
                        text: j.intl.string(j.t.qz65yY),
                        onClick: () => {
                            t({ enabled: !1, settingsVisible: !1 }), (0, sC.default)();
                        },
                    }),
                }),
            ],
        }),
    });
}
function r7(e) {
    let { onChangePage: t } = e;
    return (0, E.jsxs)($.D, {
        onClick: () => t(1),
        className: rK.Tq,
        children: [
            (0, E.jsx)("div", {
                className: rK.w1,
                children: (0, E.jsx)(rb.O, { size: "md", color: ei.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, E.jsxs)("div", {
                className: rK.qL,
                children: [
                    (0, E.jsx)(eL.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: j.intl.string(j.t["6jI0hd"]),
                    }),
                    (0, E.jsx)(ee.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: j.intl.string(j.t.GuUItX),
                    }),
                ],
            }),
            (0, E.jsx)(ty._, { size: "custom", color: "currentColor", width: 16, className: rK.nT }),
        ],
    });
}
let r8 = () =>
    i
        .e("4660")
        .then(i.t.bind(i, 662336, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
function r9(e) {
    let { onChangePage: t, setShowEnableAnimation: i } = e,
        n = (0, g.cf)([rC.A], () => rC.A.getState()),
        [s, l] = S.useState({ x: 0, y: 0 }),
        r = (0, rX.A)(),
        a = (e, t) => {
            var l, a, o, u, d, c, g, m;
            if (
                (e.enabled &&
                    !1 === n.enabled &&
                    (i(!0),
                    (0, rj.Ak)("poggermode_enabled"),
                    (0, rR.fO)({ duration: 2e3, intensity: e.shakeIntensity ?? n.shakeIntensity })),
                (0, rP.O9)(e),
                null == t)
            )
                return;
            let A =
                ((l = n.confettiEnabled),
                (a = e.confettiEnabled),
                (o = n.enabled),
                (u = e.enabled),
                (a ?? l) && (u ?? o));
            0 === t && A && r.fire(s.x, s.y, { settings: e });
            let h =
                ((d = n.screenshakeEnabled),
                (c = e.screenshakeEnabled),
                (g = n.enabled),
                (m = e.enabled),
                (c ?? d) && (m ?? g));
            1 === t && h && (0, rR.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? n.shakeIntensity });
        },
        o = (e) => {
            l({ x: e.clientX, y: e.clientY });
        };
    return (
        S.useEffect(
            () => (window.addEventListener("mousemove", o), () => window.removeEventListener("mousemove", o)),
            [],
        ),
        (0, E.jsxs)(K.B, {
            gap: 24,
            children: [
                (0, E.jsx)(r2, { settings: n, updateSettings: a }),
                (0, E.jsx)(r7, { onChangePage: t }),
                (0, E.jsx)(r6, { settings: n, updateSettings: a }),
                (0, E.jsx)(r4, { settings: n, updateSettings: a }),
                (0, E.jsx)(r3, { settings: n, updateSettings: a }),
                (0, E.jsx)(r5, { updateSettings: a }),
            ],
        })
    );
}
let ae = (e) => (0 === e ? ry.f.LEFT : ry.f.RIGHT),
    at = (0, a.E2)(u.X.POGGERMODE_SETTING, {
        Component: function () {
            let [e, t] = S.useState(0),
                [i, n] = S.useState(ae(e)),
                [s, l] = S.useState(!1),
                r = (0, g.bG)([i6.A], () => i6.A.useReducedMotion),
                a = s && !r;
            return (
                S.useEffect(() => {
                    let t = setTimeout(() => {
                        n(ae(e));
                    }, 500);
                    return () => clearTimeout(t);
                }, [e]),
                S.useEffect(() => {
                    (0, rO._)(r$[e]);
                }, [e]),
                S.useEffect(() => {
                    Math.random() > 0.99 && (0, rL._)(rD.sn.VISITOR_100);
                }, []),
                (0, E.jsxs)(E.Fragment, {
                    children: [
                        (0, E.jsx)(ry.A, {
                            className: rK.l3,
                            step: e,
                            direction: i,
                            children: ((e, t, i) => {
                                let n = (e) => () => {
                                    t(e);
                                };
                                switch (e) {
                                    case 0:
                                        return (0, E.jsx)(r9, { onChangePage: n(1), setShowEnableAnimation: i });
                                    case 1:
                                        return (0, E.jsx)(rY, { onBackClick: n(0) });
                                    default:
                                        return null;
                                }
                            })(e, t, l),
                        }),
                        (0, E.jsx)("div", {
                            className: a ? rK.Sr : rK.IP,
                            children: (0, E.jsx)(rv.a, {
                                className: rK.gT,
                                importData: r8,
                                shouldAnimate: a,
                                autoplay: !1,
                                resetOnPlay: !0,
                                loop: !1,
                                onComplete: () => l(!1),
                            }),
                        }),
                    ],
                })
            );
        },
        useSearchTerms: () => [
            j.intl.string(j.t.AtCukI),
            j.intl.string(j.t.mqxwJO),
            j.intl.string(j.t.wVS5Sd),
            j.intl.string(j.t.Xz0ole),
            j.intl.string(j.t["Ax+IoW"]),
            j.intl.string(j.t["6jI0hd"]),
            j.intl.string(j.t.s0KCgF),
        ],
    }),
    ai = (0, a.zZ)(u.X.POGGERMODE_CATEGORY, { buildLayout: () => [at] });
var an = i(736170);
let as = (0, a.t_)(u.X.POGGERMODE_PANEL, { useTitle: () => j.intl.string(j.t.AtCukI), buildLayout: () => [ai] }),
    al = (0, a.i4)(u.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.AtCukI),
        icon: () => (0, E.jsx)("img", { alt: "", src: i(724405), className: an.$ }),
        usePredicate: () => (0, g.bG)([rC.A], () => rC.A.settingsVisible),
        buildLayout: () => [as],
    });
var ar = i(307301);
let aa = (0, a.zD)(u.X.OS_START_MINIMIZED, {
    useTitle: () => j.intl.string(j.t.GfBL83),
    useSubtitle: () => j.intl.string(j.t.XGyhhc),
    usePredicate: () => (0, c.uF)(),
    useValue: () => rA.useState((e) => !!e.openOnStartup && e.startMinimized),
    setValue: function (e) {
        rA.setState({ startMinimized: e }), sd.Ay.send("TOGGLE_START_MINIMIZED", e);
    },
    useDisabled: () => !rA.useState((e) => e.openOnStartup),
    initialize: () => {
        sd.Ay.getSetting("START_MINIMIZED", !1).then((e) => rA.setState({ startMinimized: e }));
    },
});
var ao = i(839610),
    au = i(145339);
function ad(e) {
    let { keybind: t } = e,
        i = eW.dI(t.shortcut);
    return n7.A.hasBind(i)
        ? (0, E.jsx)("div", {
              className: au.$e,
              children: (0, E.jsx)(H.w, { type: "warning", children: j.intl.string(j.t["7lQlw3"]) }),
          })
        : iO.Yy.has(i)
          ? (0, E.jsx)("div", {
                className: au.$e,
                children: (0, E.jsx)(H.w, {
                    type: "warning",
                    children: j.intl.format(j.t.MOIaNd, {
                        keyboardNavArticle: tp.A.getArticleURL(eg.MVz.KEYBOARD_NAVIGATION),
                    }),
                }),
            })
          : void 0;
}
function ac(e) {
    let { keybind: t } = e;
    return t.action === eg.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, E.jsx)(l3, { keybind: t, className: au._M }) : null;
}
let ag = S.memo(function (e) {
    let { keybind: t, keybindDescriptions: i, keybindActionTypes: n } = e,
        s = S.useCallback((e) => tF.A.setKeybind({ ...t, action: e }), [t]),
        l = S.useCallback((e) => tF.A.setKeybind({ ...t, shortcut: e }), [t]),
        r = S.useCallback(() => tF.A.setKeybind({ ...t, enabled: !t.enabled }), [t]),
        a = S.useCallback(() => tF.A.deleteKeybind(t.id), [t.id]),
        o = S.useId(),
        u = S.useMemo(() => n.find((e) => e.value === t.action)?.label ?? t.action, [t.action, n]);
    return (0, E.jsxs)("div", {
        className: au.f_,
        children: [
            (0, E.jsx)(ad, { keybind: t }),
            (0, E.jsx)("div", {
                className: au.XI,
                children: (0, E.jsx)(ly.l, {
                    selectionMode: "single",
                    label: j.intl.string(j.t.XH5b12),
                    value: t.action,
                    options: n,
                    onSelectionChange: s,
                    disabled: t.managed,
                }),
            }),
            (0, E.jsx)("div", {
                className: au.LE,
                children: (0, E.jsx)(sV.D, {
                    label: j.intl.string(j.t["1La4tC"]),
                    layout: "vertical",
                    children: (0, E.jsx)(tz.A, { defaultValue: t.shortcut, onChange: l }),
                }),
            }),
            (0, E.jsxs)("div", {
                className: au.ne,
                children: [
                    !t.managed &&
                        (0, E.jsx)(lj.K, {
                            variant: "icon-only",
                            onClick: a,
                            icon: lO.u,
                            "aria-label": j.intl.string(j.t.qEHmmB),
                        }),
                    (0, E.jsx)(ts.m, {
                        text: j.intl.string(t.enabled ? j.t.pNYGbx : j.t["51DGkH"]),
                        ariaHidden: !0,
                        children: (0, E.jsxs)("div", {
                            children: [
                                (0, E.jsx)(es.A, {
                                    id: o,
                                    children: j.intl.format(t.enabled ? j.t["myr/Y0"] : j.t.lYhtPO, { actionName: u }),
                                }),
                                (0, E.jsx)(ao.I, { checked: t.enabled, onChange: r, labelledBy: o }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, E.jsx)(ee.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: au.h_,
                children: i[t.action],
            }),
            (0, E.jsx)(ac, { keybind: t }),
        ],
    });
});
var am = i(354594);
let aA = function () {
        let { customizableKeybinds: e, keybindDescriptions: t, keybindActionTypes: i } = re();
        return 0 === e.length
            ? (0, E.jsx)(ee.E, { variant: "text-sm/normal", color: "text-subtle", children: j.intl.string(j.t.vyYgWp) })
            : (0, E.jsx)("div", {
                  className: am.A,
                  children: e.map((n, s) =>
                      (0, E.jsxs)(
                          S.Fragment,
                          {
                              children: [
                                  (0, E.jsx)(ag, { keybind: n, keybindDescriptions: t, keybindActionTypes: i }),
                                  s < e.length - 1 ? (0, E.jsx)(eP.c, { className: am.y, gap: 24 }) : null,
                              ],
                          },
                          n.id,
                      ),
                  ),
              });
    },
    ah = (0, a.E2)(u.X.CUSTOM_KEYBINDS_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["069nVT"])],
        Component: function () {
            return c.Av
                ? (0, E.jsx)(aA, {})
                : (0, E.jsx)(H.w, {
                      type: "info",
                      children: j.intl.format(j.t.mPi3F3, { downloadLink: eg.X7G.DOWNLOAD }),
                  });
        },
    }),
    aE = (0, a.E2)(u.X.DEFAULT_KEYBINDS_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.Lz5KHI)],
        Component: () => (0, E.jsx)(rl, { showHeader: !1 }),
    }),
    aS = (0, a.zZ)(u.X.SYSTEM_GENERAL_CATEGORY, {
        useTitle: () => j.intl.string(j.t.cg6ltt),
        buildLayout: () => [rE, aa, rS],
        usePredicate: () => c.Av && ((0, c.uF)() || (0, c.j9)()),
        initialize: () => {
            rh();
        },
    }),
    aT = (0, a.zZ)(u.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["069nVT"]),
        useSubtitle: () => j.intl.string(j.t.T4LZVL),
        buildLayout: () => [ah],
        initialize: () => (tF.A.enableAll(!1), () => tF.A.enableAll(!0)),
        useInlineNotice: function () {
            return c.Av
                ? {
                      type: h.lT.STRONGLY_DISCOURAGED_CUSTOM,
                      notice: () =>
                          (0, E.jsxs)(K.B, {
                              direction: "vertical",
                              gap: "md",
                              children: [
                                  (0, E.jsx)(H.w, { type: "info", children: j.intl.string(j.t["5pkmHa"]) }),
                                  (0, E.jsx)(lw, { sourcePage: "keybinds" }),
                              ],
                          }),
                  }
                : null;
        },
        useHeaderDecoration: () =>
            c.Av
                ? {
                      type: h.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "add-keybind",
                              type: h.UV.BUTTON,
                              text: j.intl.string(j.t.zk6Xbs),
                              variant: "secondary",
                              icon: ar.j,
                              onClick: () => tF.A.addKeybind(),
                          },
                      ],
                  }
                : null,
    }),
    ax = (0, a.zZ)(u.X.SYSTEM_DEFAULT_KEYBINDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Lz5KHI),
        buildLayout: () => [aE],
    }),
    ap = (0, a.zZ)(u.X.SYSTEM_HELPER_CATEGORY, {
        useTitle: () => j.intl.string(j.t["+XZgmA"]),
        usePredicate: () => c.Av && ((0, c.uF)() || (0, c.j9)()),
        buildLayout: () => [rf],
    }),
    af = (0, a.t_)(u.X.SYSTEM_PANEL, {
        useTitle: () => j.intl.string(j.t["VJ/qKo"]),
        buildLayout: () => [aS, aT, ax, ap],
    }),
    aN = (0, a.i4)(u.X.SYSTEM_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["VJ/qKo"]),
        icon: lv.F,
        buildLayout: () => [af],
    });
var a_ = i(831544),
    aI = i(922795),
    aC = i(212245),
    ab = i(329551),
    av = i(285918),
    ay = i(413339),
    aj = i(952572),
    aO = i(382003);
let aR = (0, a.E2)(u.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.lZTUPs)],
        usePredicate: aj.A,
        Component: function () {
            let e = (0, aC.p)(),
                t = S.useRef(!1),
                i = (0, g.bG)([lM.Ay], () => lM.Ay.getVideoDeviceId()),
                [n, s] = S.useState((0, ab.i)(ir.default.getCurrentUser())),
                l = S.useRef(n);
            return (
                S.useEffect(
                    () => () => {
                        t.current && (0, av._C)(l.current);
                    },
                    [],
                ),
                (0, E.jsx)(aO.A, {
                    selectedBackgroundOption: n,
                    onSelectBackgroundOption: (i) => {
                        (t.current = !0), (l.current = i), s(i), (0, ay.gB)(i, { location: e.location }).catch(eg.tEg);
                    },
                    currentDeviceId: i,
                })
            );
        },
    }),
    aL = (0, a.zD)(u.X.CAMERA_PREVIEW_PREFERENCE, {
        useTitle: () => j.intl.string(j.t["3Ppr1h"]),
        useSubtitle: () => j.intl.string(j.t.WNbX4O),
        useValue: L.bm.useSetting,
        setValue: (e) => {
            L.bm.updateSetting(e), er.default.track(eg.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
        },
    });
var aD = i(625841),
    aP = i(74848),
    aG = i(204050);
let aM = (0, nR.D)(() => ({ previewEnabled: !1 }));
var aU = i(731854);
let aV = (0, a.E2)(u.X.CAMERA_SELECTION_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.FsQ3OR)],
    Component: function () {
        let e = (0, g.bG)([lM.Ay], () => lM.Ay.isVideoAvailable()),
            { id: t } = (0, aP.x5)(aU.oh.VIDEO_INPUT),
            { analyticsLocations: i } = (0, nH.Ay)();
        return (0, E.jsx)(aD.U, {
            label: j.intl.string(j.t.FsQ3OR),
            deviceType: aU.oh.VIDEO_INPUT,
            location: "UserSettingsCameraSelect",
            isDisabled: !e,
            helperText: (0, aG.p)()
                ? j.intl.format(j.t.aJYgRt, {
                      onCameraSettingsClick: () => {
                          aM.setState({ previewEnabled: !1 }),
                              window.open((0, aG.i)(t)),
                              er.default.track(eg.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: i });
                      },
                  })
                : void 0,
        });
    },
});
var ak = i(745317),
    aw = i(886964);
let aB = (0, a.E2)(u.X.CAMERA_VIDEO_PREVIEW, {
        useSearchTerms: () => [j.intl.string(j.t.JIf4v7)],
        Component: function () {
            let e = lM.Ay.getCameraComponent(),
                t = (0, g.bG)([lM.Ay], () => lM.Ay.getVideoDeviceId()),
                i = aM.useField("previewEnabled"),
                n = (0, g.bG)([lM.Ay], () => lM.Ay.isVideoAvailable());
            return ((0, td.l0)(() => {
                aM.setState({ previewEnabled: !1 });
            }),
            i)
                ? (0, E.jsx)("div", {
                      className: aw.T,
                      children: (0, E.jsxs)("div", {
                          className: aw.U,
                          children: [
                              (0, E.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !i }),
                              (0, E.jsx)(ak.k, {}),
                          ],
                      }),
                  })
                : (0, E.jsx)("div", {
                      className: aw.T,
                      children: (0, E.jsx)(ts.m, {
                          text: n ? null : j.intl.string(j.t["8jSzSe"]),
                          children: (0, E.jsx)(eD.$, {
                              variant: "primary",
                              text: j.intl.string(j.t.JIf4v7),
                              onClick: () => aM.setState({ previewEnabled: !0 }),
                              disabled: !n,
                          }),
                      }),
                  });
        },
    }),
    aF = (0, a.zZ)(u.X.CAMERA_CATEGORY, {
        useTitle: () => j.intl.string(j.t.uje3P9),
        usePredicate: () => (0, g.bG)([lM.Ay], () => lM.Ay.supports(aU.O5.VIDEO)),
        buildLayout: () => [aB, aL, aV, aR],
    });
function az() {
    ss.h.dispatch({ type: "DISCORD_STATS_POPOUT_WINDOW_OPEN" });
}
let aY = (0, a.Tf)(u.X.DISCORD_STATS_POPOUT, {
    useTitle: () => "Discord Stats",
    useSubtitle: () => "Open a floating panel showing live GPU, CPU, and memory usage.",
    useLabel: () => "Open",
    usePredicate: () => (0, g.bG)([ir.default], () => ir.default.getCurrentUser()?.isStaff() ?? !1),
    onClick: () => {
        az();
    },
});
var aX = i(827343);
let aH = (0, a.zD)(u.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => j.intl.string(j.t.qFphsa),
        useSubtitle: () => j.intl.string(j.t.cQfwyY),
        usePredicate: function () {
            return (0, c.j9)();
        },
        useValue: function () {
            return (0, g.bG)([lM.Ay], () => lM.Ay.getOpenH264Enabled());
        },
        setValue: function (e) {
            aX.A.setOpenH264Enabled(e),
                (0, su.A)({
                    title: j.intl.string(j.t["9jf31O"]),
                    subtitle: j.intl.string(j.t["J2wg+X"]),
                    confirmText: j.intl.string(j.t.BddRzS),
                    onConfirm: () => lt.A.app.relaunch(),
                });
        },
        useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
    }),
    aK = (0, a.zD)(u.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
        useTitle: () => j.intl.string(j.t["r6K+TL"]),
        useSubtitle: () => j.intl.string(j.t["xl9+I6"]),
        useValue: function () {
            return (0, g.bG)([lM.Ay], () => lM.Ay.getAecDump());
        },
        setValue: aX.A.setAecDump,
        usePredicate: function () {
            return (0, g.bG)([lM.Ay], () => lM.Ay.isAecDumpSupported());
        },
    });
var aW = i(139033),
    aZ = i(862482),
    aq = i(640238),
    aQ = i(825484),
    aJ = i(77138),
    a$ = i(487329),
    a0 = i(353835);
let a1 = (0, nR.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function a2() {
    let e = await lt.A.fileManager.getLogPath();
    lt.A.fileManager.showItemInFolder(e);
}
function a3(e) {
    (0, su.A)({
        title: j.intl.string(j.t["7UXEF2"]),
        subtitle: j.intl.string(j.t.IYPrRl),
        confirmText: j.intl.string(j.t.BddRzS),
        onConfirm: () => aX.A.setDebugLogging(e),
    });
}
async function a6(e) {
    let { onUploadStart: t, onUploadFinish: i } = e;
    t?.();
    try {
        let e, t;
        await lM.Ay.getMediaEngine().writeAudioDebugState(),
            await a0.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, aJ.a)(eg.Umv.RTC),
            (e = j.intl.string(j.t["fKBB8+"])),
            (t = j.intl.string(j.t.BvyxE7)),
            (0, aW.A)({ title: e, subtitle: t });
    } catch (l) {
        var n;
        let e, t, i, s;
        (n = l.displayMessage),
            (e = j.intl.string(j.t.QZg0J7)),
            (t = n ?? j.intl.string(j.t.VzHcSm)),
            (i = (0, a$.B1)(a$.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (s = j.intl.formatToPlainString(j.t.ejOT95, { errorCode: i })),
            (0, z.openModal)((i) =>
                (0, E.jsx)(aq.a, {
                    header: e,
                    confirmButtonColor: aZ.$n.Colors.BRAND,
                    confirmText: j.intl.string(j.t.BddRzS),
                    ...i,
                    children: (0, E.jsxs)("div", {
                        style: { display: "flex", flexDirection: "column", height: "100%" },
                        children: [
                            (0, E.jsx)(ee.E, { variant: "text-md/normal", children: t }),
                            (0, E.jsx)(ee.E, {
                                variant: "text-sm/semibold",
                                selectable: !0,
                                style: { marginTop: "auto" },
                                children: s,
                            }),
                        ],
                    }),
                }),
            );
    } finally {
        i?.();
    }
}
async function a4() {
    await a6({
        onUploadStart: () => a1.setState({ isUploading: !0 }),
        onUploadFinish: () => a1.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let a5 = (0, a.E2)(u.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [j.intl.string(j.t["726JHL"]), j.intl.string(j.t.EbwFfR), j.intl.string(j.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, g.bG)([lM.Ay], () => lM.Ay.supports(aU.O5.DEBUG_LOGGING));
        return c.Av && e && null != lt.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, g.bG)([lM.Ay], () => lM.Ay.getDebugLogging()),
            t = a1.useField("isUploading"),
            i = a1.useField("isDisabled"),
            n = S.useId();
        return (0, E.jsxs)("fieldset", {
            children: [
                (0, E.jsx)(es.A, { tag: "legend", id: n, children: j.intl.string(j.t["FjN+et"]) }),
                (0, E.jsxs)(K.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, E.jsx)(W.d, {
                            label: j.intl.string(j.t["726JHL"]),
                            description: j.intl.string(j.t["/7ak9Q"]),
                            checked: e,
                            onChange: a3,
                        }),
                        (0, E.jsx)("div", {
                            role: "group",
                            "aria-labelledby": n,
                            children: (0, E.jsxs)(aQ.e, {
                                children: [
                                    (0, E.jsx)(eD.$, {
                                        variant: "secondary",
                                        text: j.intl.string(j.t.EbwFfR),
                                        onClick: a4,
                                        loading: t,
                                        disabled: i,
                                        "aria-label": j.intl.string(j.t.aY1OH2),
                                    }),
                                    (0, E.jsx)(eD.$, {
                                        variant: "secondary",
                                        text: j.intl.string(j.t.nuPtYi),
                                        onClick: a2,
                                        "aria-label": j.intl.string(j.t["L/hFOe"]),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            ],
        });
    },
});
var a7 = i(233545),
    a8 = i(412780);
function a9() {
    return (0, g.bG)([ir.default, lM.Ay], () => {
        let e = ir.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            i = "canary" === sd.Ay.releaseChannel || "development" === sd.Ay.releaseChannel,
            n = lM.Ay.supports(aU.O5.CONNECTION_REPLAY);
        return t && i && n;
    });
}
let oe = (0, a.zD)(u.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => j.intl.string(j.t.U4FgFK),
        useSubtitle: () => j.intl.string(j.t.Lm72RU),
        useValue: function () {
            return (0, g.bG)([a8.Ay], () => a8.Ay.shouldRecordNextConnection());
        },
        setValue: a7.Et,
        usePredicate: a9,
    }),
    ot = (0, a.Tf)(u.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => j.intl.string(j.t.nJnOHO),
        useLabel: () => j.intl.string(j.t["3xjX0U"]),
        onClick: a7.YW,
        usePredicate: a9,
    });
var oi = i(926919),
    on = i(111162),
    os = i(855302);
let ol = (0, a.zD)(u.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
        useTitle: () => j.intl.string(j.t["0CEP6e"]),
        useSubtitle: () => j.intl.string(j.t["kBXuW+"]),
        useValue: function () {
            return (0, g.bG)([on.default], () => on.default.isStreamInfoOverlayEnabled);
        },
        setValue: function (e) {
            let t = on.default.isStreamInfoOverlayEnabled;
            (0, os.A)("stream_info_overlay_enabled", e, t), (0, oi.x)({ isStreamInfoOverlayEnabled: e });
        },
        usePredicate: function () {
            return L.Q_.useSetting();
        },
    }),
    or = (0, a.bd)(u.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? j.intl.string(j.t["/B4I8H"]) : j.intl.string(j.t.BTlsWH)),
        useCollapsedSubtitle: () => j.intl.string(j.t.la1Ys4),
        buildLayout: () => [ol, aK, oe, ot, a5],
    });
function oa(e, t, i) {
    (0, su.A)({ title: e, subtitle: t, confirmText: j.intl.string(j.t.BddRzS), onConfirm: i });
}
let oo = (0, a.Tf)(u.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => j.intl.string(j.t.SXfv1v),
        useSubtitle: () => j.intl.string(j.t["buA5/q"]),
        useLabel: () => j.intl.string(j.t.yBZMsQ),
        onClick: function () {
            oa(j.intl.string(j.t["4iKQ/3"]), j.intl.string(j.t.sQ42iT), aX.A.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    ou = (0, a.zZ)(u.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.UDAU9K),
        buildLayout: () => [aH, or, aY, oo],
    });
var od = i(347481),
    oc = i(852712),
    og = i(199966),
    om = i(963935);
function oA(e) {
    let { title: t } = e;
    return t;
}
function oh(e) {
    let { useTitle: t, settingKey: i, formatter: n, index: s } = e,
        l = t();
    return "string" == typeof l ? n({ title: l, index: s, key: i }) : l;
}
function oE(e) {
    let { setting: t, formatter: i, index: n } = e;
    return () => (0, E.jsx)(oh, { useTitle: t.useTitle, settingKey: t.key, formatter: i, index: n }, t.key);
}
function oS(e) {
    return e.type === om.Z6.LIST;
}
function oT(e, t) {
    let { limit: i = 2, formatter: n = oA } = t ?? {};
    tB()(i > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { visibleDirectory: s, accessibleDirectory: l } = (0, og._)(),
        r = s.get(e) ?? l.get(e);
    tB()(
        null != r && (r.type === om.Z6.ACCORDION || oS(r)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let a = oS(r) ? (r.collapseAfter ?? 0) : 0,
        o = r.layout;
    return S.useMemo(() => {
        let e = a,
            t = [];
        for (let i of o)
            if ("useTitle" in i && null != i.useTitle) {
                if (e > 0) {
                    e--;
                    continue;
                }
                t.push({ key: i.key, useTitle: i.useTitle });
            }
        if (0 === t.length) return "";
        let s = Math.min(i, 3);
        if (t.length <= s)
            if (1 === t.length)
                return j.intl.format(j.t["3H9tCW"], { settingOneHook: oE({ setting: t[0], formatter: n, index: 0 }) });
            else if (2 === t.length)
                return j.intl.format(j.t.MWryo6, {
                    settingOneHook: oE({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: oE({ setting: t[1], formatter: n, index: 1 }),
                });
            else
                return j.intl.format(j.t.a00b5G, {
                    settingOneHook: oE({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: oE({ setting: t[1], formatter: n, index: 1 }),
                    settingThreeHook: oE({ setting: t[2], formatter: n, index: 2 }),
                });
        return 1 === s
            ? j.intl.format(j.t.O8vNbS, { settingOneHook: oE({ setting: t[0], formatter: n, index: 0 }) })
            : 2 === s
              ? j.intl.format(j.t["acXG/W"], {
                    settingOneHook: oE({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: oE({ setting: t[1], formatter: n, index: 1 }),
                })
              : j.intl.format(j.t["5+ldWc"], {
                    settingOneHook: oE({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: oE({ setting: t[1], formatter: n, index: 1 }),
                    settingThreeHook: oE({ setting: t[2], formatter: n, index: 2 }),
                });
    }, [i, a, o, n]);
}
let ox = (0, a.zD)(u.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => j.intl.string(j.t.cUMdH0),
        useSubtitle: () => j.intl.string(j.t["6EjbvA"]),
        useValue: function () {
            return (0, g.bG)([lM.Ay], () => lM.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            aX.A.setAutomaticGainControl(e, { page: eg.liQ.USER_SETTINGS, section: eg.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, g.bG)([lM.Ay, od.A], () => {
                let e = lM.Ay.getInputDeviceId();
                return od.A.hasAutomaticGainControl(e);
            });
        },
        usePredicate: function () {
            return (0, g.bG)([lM.Ay], () => lM.Ay.isAutomaticGainControlSupported() && lM.Ay.isInputProfileCustom());
        },
    }),
    op = (0, a.sN)(u.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => j.intl.string(j.t.AlybXj),
        setValue: (e) =>
            aX.A.setAttenuation(e, lM.Ay.getAttenuateWhileSpeakingSelf(), lM.Ay.getAttenuateWhileSpeakingOthers()),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => lM.Ay.getAttenuation(),
    }),
    of = (0, a.zD)(u.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => j.intl.string(j.t["9dHxRY"]),
        useValue: () => (0, g.bG)([lM.Ay], () => lM.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => aX.A.setAttenuation(lM.Ay.getAttenuation(), e, lM.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    oN = (0, a.zD)(u.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => j.intl.string(j.t.SMt0Gr),
        useValue: () => (0, g.bG)([lM.Ay], () => lM.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => aX.A.setAttenuation(lM.Ay.getAttenuation(), lM.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    o_ = (0, a.FW)(u.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.oSdBvW),
        useSubtitle: () => j.intl.string(j.t["0A/8Rt"]),
        usePredicate: () => (0, g.bG)([lM.Ay], () => lM.Ay.supports(aU.O5.ATTENUATION)),
        buildLayout: () => [op, of, oN],
    });
var oI = i(801644);
let oC = (0, a.zD)(u.X.VOICE_HARDWARE_MUTE_SILENCE_ALERT_SETTING, {
        useTitle: () => j.intl.string(j.t.pZ0vr4),
        useSubtitle: () => j.intl.string(j.t.tVbzoZ),
        useValue: function () {
            return (0, g.bG)([nv.Ay], () => !nv.Ay.disableHardwareMuteSilenceAlert);
        },
        setValue: function (e) {
            (0, os.A)("hardware_mute_silence_alert_enabled", e, !nv.Ay.disableHardwareMuteSilenceAlert),
                s0.Ay.updatedUnsyncedSettings({ disableHardwareMuteSilenceAlert: !e });
        },
        usePredicate: function () {
            let { enableHardwareSilenceWarning: e } = oI.A.useConfig({ location: "HardwareMuteSilenceAlertSetting" });
            return e;
        },
    }),
    ob = (0, a.zD)(u.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => j.intl.string(j.t.DFPXIG),
        useSubtitle: () => j.intl.string(j.t["UyRX+C"]),
        useValue: function () {
            return (0, g.bG)([lM.Ay], () => lM.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            aX.A.setBypassSystemInputProcessing(e);
        },
        usePredicate: function () {
            return (0, g.bG)([lM.Ay], () => lM.Ay.showBypassSystemInputProcessing() && lM.Ay.isInputProfileCustom());
        },
    });
var ov = i(329139);
let oy = (0, a.zD)(u.X.SPATIAL_AUDIO_EXPERIMENT_OVERRIDE_SETTING, {
        useTitle: () => j.intl.string(ov.default.LGDPhA),
        useSubtitle: () => j.intl.string(ov.default.jZlI6g),
        useValue: function () {
            return (0, g.bG)([lM.Ay], () => lM.Ay.getAudioMixerSettings().experimentOverride);
        },
        setValue: function (e) {
            aX.A.setAudioMixerSettings({ ...lM.Ay.getAudioMixerSettings(), experimentOverride: e });
        },
        useDisabled: function () {
            return (0, g.bG)([lM.Ay], () => !lM.Ay.getMediaEngine().supports(aU.O5.SPATIAL_AUDIO));
        },
        useDisabledMessage: function () {
            return j.intl.string(ov.default["9qCMXb"]);
        },
        usePredicate: function () {
            return "canary" === window.GLOBAL_ENV.RELEASE_CHANNEL;
        },
    }),
    oj = (0, a.zD)(u.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
        useTitle: () => j.intl.string(j.t.jrWHD3),
        useSubtitle: () => j.intl.string(j.t.YCCMkJ),
        useValue: function () {
            return (0, g.bG)([nv.Ay], () => !nv.Ay.disableVoiceChannelChangeAlert);
        },
        setValue: function (e) {
            (0, os.A)("switch_channel_warning_enabled", e, !nv.Ay.disableVoiceChannelChangeAlert),
                s0.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e });
        },
    }),
    oO = (0, a.zD)(u.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
        useTitle: () => j.intl.string(j.t.BbESsg),
        useSubtitle: () => j.intl.string(j.t.LoOB1F),
        useValue: function () {
            return (0, g.bG)([lM.Ay], () => {
                let { vadUseKrisp: e } = lM.Ay.getModeOptions();
                return e;
            });
        },
        setValue: function (e) {
            let t = lM.Ay.getMode();
            aX.A.setMode(t, { vadUseKrisp: e });
        },
        useDisabled: function () {
            return (0, g.bG)([lM.Ay], () => {
                let e = lM.Ay.getMode(),
                    t = lM.Ay.getModeOptions().autoThreshold;
                return e === eg.TBI.VOICE_ACTIVITY && t;
            });
        },
        usePredicate: function () {
            return (0, g.bG)([lM.Ay], () => lM.Ay.isAdvancedVoiceActivitySupported() && lM.Ay.isInputProfileCustom());
        },
    }),
    oR = (0, a.Hn)(u.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => j.intl.string(j.t.wVBHr0),
        useValue: function () {
            return (0, g.bG)([lM.Ay], () => lM.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            oa(j.intl.string(j.t.uY7AcQ), j.intl.string(j.t.gBqik6), () => aX.A.setAudioSubsystem(e));
        },
        useOptions: function () {
            let {
                legacyAudioSubsystemSupported: e,
                experimentalAudioSubsystemSupported: t,
                automaticAudioSubsystemSupported: i,
            } = (0, g.cf)([lM.Ay], () => ({
                legacyAudioSubsystemSupported: lM.Ay.supports(aU.O5.LEGACY_AUDIO_SUBSYSTEM),
                experimentalAudioSubsystemSupported: lM.Ay.supports(aU.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
                automaticAudioSubsystemSupported: lM.Ay.supports(aU.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
            }));
            return S.useMemo(() => {
                let n;
                return (
                    (n = [{ id: aU.rB.STANDARD, value: aU.rB.STANDARD, label: j.intl.string(j.t.dqb2JZ) }]),
                    e && n.push({ id: aU.rB.LEGACY, value: aU.rB.LEGACY, label: j.intl.string(j.t["TYfH+5"]) }),
                    t &&
                        n.push({ id: aU.rB.EXPERIMENTAL, value: aU.rB.EXPERIMENTAL, label: j.intl.string(j.t.liQmtr) }),
                    i && n.push({ id: aU.rB.AUTOMATIC, value: aU.rB.AUTOMATIC, label: j.intl.string(j.t.qNgtO1) }),
                    n
                );
            }, [i, t, e]);
        },
        usePredicate: function () {
            return (0, g.bG)([lM.Ay], () => lM.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    oL = (0, a.zD)(u.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => j.intl.string(j.t.uancuJ),
        useSubtitle: () => j.intl.string(j.t.I1Eoqq),
        useValue: function () {
            return (0, g.bG)([lM.Ay], () => lM.Ay.getQoS());
        },
        setValue: function (e) {
            aX.A.setQoS(e);
        },
        usePredicate: function () {
            return (0, g.bG)([lM.Ay], () => lM.Ay.supports(aU.O5.QOS));
        },
    }),
    oD = (0, a.zD)(u.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => j.intl.string(j.t["4rsOPQ"]),
        useSubtitle: () => j.intl.string(j.t.jtiiCw),
        useValue: function () {
            return (0, g.bG)([lM.Ay], () => lM.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            aX.A.setSilenceWarning(e);
        },
        usePredicate: function () {
            return ez.isPlatformEmbedded;
        },
    }),
    oP = (0, a.bd)(u.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? j.intl.string(j.t.KHsSWK) : j.intl.string(j.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            oT(u.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, g.bG)([lM.Ay], () => lM.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [ox, oO, ob, oD, oC, oj, o_, oR, oL, oy],
    }),
    oG = (0, a.zD)(u.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => j.intl.string(j.t.iWTwu6),
        useValue: function () {
            return (0, g.bG)([lM.Ay], () => lM.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            aX.A.setEchoCancellation(e, { page: eg.liQ.USER_SETTINGS, section: eg.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, g.bG)([lM.Ay, od.A], () => {
                let e = lM.Ay.getInputDeviceId();
                return od.A.hasEchoCancellation(e);
            });
        },
        usePredicate: function () {
            return (0, g.bG)([lM.Ay], () => lM.Ay.isInputProfileCustom());
        },
    });
var oM = i(459838),
    oU = i(451988),
    oV = i(801102),
    ok = i(160671);
let ow = (0, sy.Ld)();
function oB(e) {
    let { isSpeaking: t, className: i, id: n, ariaDescribedBy: s, ariaLabelledBy: l, disabled: r } = e;
    return (0, E.jsx)("div", {
        role: "meter",
        className: e2()(oV.$I, i),
        id: n,
        "aria-describedby": s,
        "aria-labelledby": l,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? j.intl.string(j.t.haLKZ0) : j.intl.string(j.t.X2hJL7),
        children: (0, E.jsx)("div", { className: e2()(oV.Jx, oV.NU, { [oV.zY]: t && !r, [oV.r9]: r }) }),
    });
}
function oF(e) {
    let { volume: t, id: i, ariaDescribedBy: n, ariaLabelledBy: s, disabled: l } = e,
        { threshold: r, autoThreshold: a } = (0, g.cf)([lM.Ay], () => ({
            threshold: lM.Ay.getModeOptions().threshold,
            autoThreshold: lM.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, g.bG)([lM.Ay], () => lM.Ay.getMode());
    return (0, E.jsx)("section", {
        className: e2()(oV.Mo, oV.jW),
        id: i,
        "aria-describedby": n,
        "aria-labelledby": s,
        children: (0, E.jsx)(no.A, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return (t = -((100 - e) * 1)), void aX.A.setMode(o, { threshold: t, autoThreshold: a });
            },
            barStyles: { background: ei.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: ei.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": ow,
            disabled: l,
            children: (0, E.jsxs)("div", {
                className: e2()(oV.NU, oV.TL, oV.Jx, ok.bar),
                children: [
                    (0, E.jsx)("div", { className: e2()(oV.GS, oV.SH), style: { width: l ? 0 : t + 100 + "%" } }),
                    (0, E.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let oz = (0, a.E2)(u.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [j.intl.string(j.t["sqUm+k"]), j.intl.string(j.t.I1Zuq0), j.intl.string(j.t.nuFtHH)],
    usePredicate: () => (0, g.bG)([lM.Ay], () => lM.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, g.cf)([lM.Ay], () => ({
                autoThreshold: lM.Ay.getModeOptions().autoThreshold,
                disabled: lM.Ay.getMode() !== aU.TB.VOICE_ACTIVITY,
            })),
            i = S.useCallback((e) => {
                let t = lM.Ay.getMode(),
                    { threshold: i } = lM.Ay.getModeOptions();
                aX.A.setMode(t, { autoThreshold: e, threshold: i });
            }, []),
            n = (0, g.bG)([lM.Ay], () => lM.Ay.supports(aU.O5.AUTOMATIC_VAD)),
            { volume: s, isSpeaking: l } = (function () {
                let [e, t] = S.useState(-100),
                    [i, n] = S.useState(!1);
                function s(e, i) {
                    t(e), n((i & aU.ME.VOICE) === aU.ME.VOICE);
                }
                return (
                    S.useEffect(() => {
                        let e = new oU.Ep();
                        return (
                            e.start(1e3, () => {
                                lM.Ay.getMediaEngine().on(oM.bg.VoiceActivity, s), e.stop();
                            }),
                            () => {
                                lM.Ay.getMediaEngine().removeListener(oM.bg.VoiceActivity, s), e.stop();
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: i }
                );
            })(),
            r = (0, g.bG)([lM.Ay], () => lM.Ay.isEnabled()),
            a = S.useMemo(
                () =>
                    !r &&
                    (0, E.jsx)("div", {
                        className: oV.B4,
                        children: (0, E.jsx)(H.w, {
                            type: "warning",
                            children: j.intl.format(j.t["O13I+O"], { onEnableClick: () => aX.A.enable(!0) }),
                        }),
                    }),
                [r],
            ),
            o = S.useMemo(() => (e ? j.intl.string(j.t.JsbzjA) : j.intl.string(j.t.MLmyMY)), [e]),
            u = S.useId(),
            d = S.useId();
        return n
            ? (0, E.jsxs)("fieldset", {
                  "aria-describedby": d,
                  children: [
                      (0, E.jsx)(es.A, { tag: "legend", id: u, children: j.intl.string(j.t.GByLar) }),
                      (0, E.jsx)(es.A, { id: d, children: o }),
                      (0, E.jsxs)(K.B, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, E.jsx)(W.d, {
                                  disabled: t,
                                  label: j.intl.string(j.t.lY6j47),
                                  description: o,
                                  checked: e,
                                  onChange: i,
                              }),
                              e
                                  ? (0, E.jsx)(oB, {
                                        isSpeaking: l,
                                        className: oV.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, E.jsx)(oF, { volume: s, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
                              a,
                          ],
                      }),
                  ],
              })
            : (0, E.jsxs)(K.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, E.jsx)(sV.D, {
                          label: j.intl.string(j.t["sqUm+k"]),
                          description: o,
                          layout: "vertical",
                          children: (i) =>
                              e
                                  ? (0, E.jsx)(oB, {
                                        isSpeaking: l,
                                        className: oV.UJ,
                                        id: i.controlId,
                                        ariaDescribedBy: i.describedById,
                                        ariaLabelledBy: i.labelId,
                                        disabled: t,
                                    })
                                  : (0, E.jsx)(oF, {
                                        volume: s,
                                        id: i.controlId,
                                        ariaDescribedBy: i.describedById,
                                        ariaLabelledBy: i.labelId,
                                        disabled: t,
                                    }),
                      }),
                      a,
                  ],
              });
    },
});
var oY = i(366010);
let oX = i(993830),
    oH = i(413142),
    oK = { page: eg.liQ.USER_SETTINGS, section: eg.JJy.SETTINGS_VOICE_AND_VIDEO };
function oW() {
    let e = (0, g.bG)([i_.A], () => (0, oY.q)(i_.A.theme));
    return (0, E.jsx)("img", { src: e ? oX : oH, width: 48, height: 32, alt: "" });
}
let oZ = (0, a.E2)(u.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.t8Qhib), j.intl.string(j.t.hmfkCi)],
    usePredicate: function () {
        return (0, g.bG)([lM.Ay], () => lM.Ay.isInputProfileCustom() && lM.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = S.useCallback((e) => {
                aX.A.setNoiseCancellation("KRISP" === e, oK), aX.A.setNoiseSuppression("STANDARD" === e, oK);
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: i,
                isNoiseSuppressionSupported: n,
                isNoiseCancellationSupported: s,
            } = (0, g.cf)([lM.Ay], () => ({
                noiseCancellation: lM.Ay.getNoiseCancellation(),
                noiseSuppression: lM.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: lM.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: lM.Ay.isNoiseCancellationSupported(),
            })),
            l = S.useMemo(() => {
                let e = [];
                return (
                    s && e.push({ id: "krisp", label: j.intl.string(j.t.rdoNzt), value: "KRISP" }),
                    n && e.push({ id: "standard", label: j.intl.string(j.t.qXeYHw), value: "STANDARD" }),
                    e.push({ id: "disabled", label: j.intl.string(j.t.wkYAlz), value: "NONE" }),
                    e
                );
            }, [s, n]),
            r = s
                ? j.intl.format(j.t["1q5aTp"], { helpArticle: tp.A.getArticleURL(eg.MVz.NOISE_SUPPRESSION) })
                : j.intl.string(j.t.OWKjw5);
        return (0, E.jsxs)(K.B, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, E.jsx)(ly.l, {
                    label: j.intl.string(j.t.t8Qhib),
                    description: r,
                    layout: "horizontal",
                    value: t ? "KRISP" : i ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: l,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                s && (0, E.jsx)(oW, {}),
            ],
        });
    },
});
var oq = i(934729),
    oQ = i(621380);
let oJ = !c.Av;
function o$() {
    return (0, g.bG)([lM.Ay], () => lM.Ay.getMode() === aU.TB.PUSH_TO_TALK);
}
let o0 = (0, a.zD)(u.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return c.Av ? j.intl.string(j.t.tG4Np5) : j.intl.string(j.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, g.bG)([lM.Ay], () => lM.Ay.getMode());
        return S.useMemo(() => {
            if (!c.Av && e === aU.TB.PUSH_TO_TALK)
                return j.intl.format(j.t["VHI4+Y"], { onDownloadClick: () => (0, oq._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, g.bG)([lM.Ay], () => lM.Ay.getActiveInputProfile() !== oQ.m.STUDIO);
    },
    useValue: function () {
        return (0, g.bG)([lM.Ay], () => lM.Ay.getMode() === aU.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, n;
        (t = e ? aU.TB.PUSH_TO_TALK : aU.TB.VOICE_ACTIVITY),
            (n = [e$.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === aU.TB.PUSH_TO_TALK &&
                oJ &&
                (0, z.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([i.e("31910"), i.e("10919")]).then(i.bind(i, 556506));
                    return (t) =>
                        (0, E.jsx)(e, {
                            title: j.intl.string(j.t.Kdt0Gb),
                            confirmText: j.intl.string(j.t["1WjMbC"]),
                            cancelText: j.intl.string(j.t.BddRzS),
                            onConfirm: () => (0, oq._)("PTT Limited Modal"),
                            body: j.intl.string(j.t.NIozvt),
                            ...t,
                        });
                }),
            aX.A.setMode(t, void 0, void 0, { analyticsLocations: n });
    },
    useSearchTerms: () => [j.intl.string(j.t["pS+K2L"]), j.intl.string(j.t.nuFtHH)],
});
var o1 = i(371060);
let o2 = (0, a.E2)(u.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["pS+K2L"]), j.intl.string(j.t.nuFtHH)],
        usePredicate: o$,
        Component: function () {
            let e = (0, g.bG)([lM.Ay], () => {
                    let { shortcut: e } = lM.Ay.getModeOptions();
                    return e;
                }),
                t = j.intl.format(j.t.HVvn5T, { onClick: () => (0, eY.openUserSettings)(u.X.KEYBINDS_PANEL) });
            return (0, E.jsx)(sV.D, {
                label: j.intl.string(j.t["o+BJQR"]),
                description: t,
                layout: "horizontal-responsive",
                children: (0, E.jsx)("div", {
                    className: o1.e,
                    children: (0, E.jsx)(tz.A, {
                        defaultValue: e,
                        onChange: (e) => aX.A.setMode(eg.TBI.PUSH_TO_TALK, { shortcut: e }),
                    }),
                }),
            });
        },
    }),
    o3 = (0, a.sN)(u.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => j.intl.string(j.t.GCNMM8),
        useSearchTerms: () => [j.intl.string(j.t["pS+K2L"]), j.intl.string(j.t.nuFtHH)],
        setValue: function (e) {
            aX.A.setMode(eg.TBI.PUSH_TO_TALK, { delay: e });
        },
        minValue: 0,
        maxValue: eg.IjB,
        getInitialValue: function () {
            let { delay: e } = lM.Ay.getModeOptions();
            return e;
        },
        onValueRender: function (e) {
            return e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}\u00A0ms`;
        },
        usePredicate: o$,
    }),
    o6 = (0, a.Qx)(u.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => j.intl.string(j.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, oc._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [j.intl.string(j.t.nuFtHH), j.intl.string(j.t.VZPR0R), j.intl.string(j.t.cjPbpT)],
        useValue: function () {
            return (0, g.bG)([lM.Ay], () => lM.Ay.getActiveInputProfile() ?? oQ.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [e$.A.USER_SETTINGS_VOICE_AND_VIDEO];
            aX.A.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, oc.d)({ location: "InputProfileCategory" });
            return [
                { value: oQ.m.VOICE_ISOLATION, name: j.intl.string(j.t.cjPbpT), desc: j.intl.string(j.t.CzhvnE) },
                { value: oQ.m.STUDIO, name: j.intl.string(j.t.VZPR0R), desc: j.intl.string(j.t.ZaJksS) },
                { value: oQ.m.CUSTOM, name: j.intl.string(j.t["N/PQjv"]), desc: j.intl.string(j.t.SnBmuY) },
            ].filter((t) => {
                let { value: i } = t;
                return e.includes(i);
            });
        },
    }),
    o4 = (0, a.zZ)(u.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, g.bG)([od.A, lM.Ay], () => {
                let e = lM.Ay.getInputDeviceId();
                return (
                    (od.A.hasEchoCancellation(e) || od.A.hasNoiseSuppression(e) || od.A.hasAutomaticGainControl(e)) &&
                    lM.Ay.isInputProfileCustom()
                );
            });
            return S.useMemo(() => {
                if (e)
                    return {
                        type: h.lT.INLINE_NOTICE,
                        noticeType: "info",
                        useText: () => j.intl.string(j.t["/Whuzi"]),
                    };
            }, [e]);
        },
        buildLayout: () => [o6, oz, oZ, oG, o0, o2, o3, oP],
    });
var o5 = i(403581),
    o7 = i(983851),
    o8 = i(687021),
    o9 = i(128450),
    ue = i(796774),
    ut = i(209932),
    ui = i(813564),
    un = i(984813),
    us = i(22231),
    ul = i(428262),
    ur = i(792348),
    ua = i(674168),
    uo = i(277192),
    uu = i(805945),
    ud = i(902460);
function uc(e) {
    let { onSelect: t } = e,
        [i, n] = S.useState(!1),
        s = (0, g.bG)([ir.default], () => ir.default.getCurrentUser()),
        l = ul.Ay.canUseCustomCallSounds(s),
        r = S.useRef(null);
    function a(e) {
        l && (n(!1), t?.(e));
    }
    return (0, E.jsx)(q.Y, {
        targetElementRef: r,
        shouldShow: i,
        position: "left",
        onRequestClose: () => n(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, E.jsx)(iB.l, {
                children: (0, E.jsx)(uo.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: l ? null : (0, E.jsx)(ua.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, E.jsx)(uu.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    n(!i);
                },
                text: j.intl.string(j.t.uOe0Az),
                children: (0, E.jsx)(us.R, { size: "md", color: "currentColor", className: ud.Wo }),
            }),
    });
}
function ug(e) {
    let { sound: t } = e,
        { previewSound: i } = (0, ur.A)(t, null),
        n =
            0 === (0, ui.wH)()
                ? j.intl.string(j.t.OASXjt)
                : j.intl.formatToPlainString(j.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, E.jsx)(uu.dT, {
        onClick: i,
        text: n,
        children: (0, E.jsx)(o7.H, { size: "md", color: "currentColor", className: ud.wg }),
    });
}
function um(e) {
    let { sound: t, isGlobal: i, onSelect: n } = e,
        s = null != t,
        l = t?.emojiId,
        r = t?.emojiName,
        a = s && (null != r || null != l);
    return (0, E.jsxs)("div", {
        className: ud.D6,
        children: [
            (0, E.jsxs)("div", {
                className: ud.kL,
                children: [
                    a && (0, E.jsx)(sE.A, { emojiId: l, emojiName: r, className: ud.Zg }),
                    (0, E.jsx)(ee.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        className: ud.dj,
                        children:
                            null == t
                                ? j.intl.string(j.t.PoWNfe)
                                : i
                                  ? j.intl.format(j.t.B6HU6O, {
                                        soundName: t.name,
                                        subtextHook: (e) =>
                                            (0, E.jsx)(ee.E, {
                                                variant: "text-xs/medium",
                                                color: "text-default",
                                                tag: "span",
                                                children: e,
                                            }),
                                    })
                                  : t.name,
                    }),
                    s
                        ? (0, E.jsx)(ug, { sound: t })
                        : (0, E.jsx)(o7.H, { size: "md", color: "currentColor", className: ud.Gk }),
                ],
            }),
            (0, E.jsxs)("div", {
                className: ud.kL,
                children: [
                    (0, E.jsx)(uc, { onSelect: n }),
                    s &&
                        !i &&
                        (0, E.jsx)(uu.dT, {
                            onClick: () => n(null),
                            text: j.intl.string(j.t.jmtcGA),
                            children: (0, E.jsx)(lO.u, {
                                size: "md",
                                color: ei.A.unsafe_rawColors.RED_400.css,
                                className: ud.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var uA = i(617617);
i(980504);
var uh = i(384863);
function uE(e) {
    return (0, g.bG)([ut.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: i } = e;
        return ut.A.getSound("0" === t ? "0" : t, i);
    });
}
function uS(e) {
    let { guildId: t } = e,
        i = (0, g.bG)([uA.A], () => uA.A.settings.guilds?.guilds?.[t]?.joinSound),
        n = uE(i);
    if (null == i || null == n) return null;
    let { emojiId: s, emojiName: l } = n,
        r = null != s || null != l;
    return (0, E.jsxs)("div", {
        className: uh.Io,
        children: [
            r
                ? (0, E.jsx)(sE.A, { emojiId: s, emojiName: l, className: uh.nW })
                : (0, E.jsx)(o7.H, { size: "md", color: "currentColor", className: uh.nW }),
            (0, E.jsx)(ee.E, { className: uh.dK, variant: "text-xs/medium", children: n.name }),
        ],
    });
}
let uT = (0, a.E2)(u.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, nH.Ay)(),
            [t, i] = S.useState("0"),
            n = (0, un.mz)(t),
            s = uE(n),
            l = n?.type === un.PP.GLOBAL,
            r = (0, g.bG)([ut.A], () => ut.A.hasFetchedAllSounds()) && null != n && null == s;
        S.useEffect(() => {
            r && (0, ui.ND)({ location: e });
        }, [r, e]),
            S.useEffect(() => {
                (0, ue.E7)();
            }, []);
        let a = S.useCallback((e, t) => {
            let { inDropdown: i } = t;
            return null == e ? null : i ? (0, E.jsx)(uS, { guildId: e.value }) : null;
        }, []);
        return (0, E.jsxs)(ip.n, {
            label: j.intl.string(j.t.nzUc3B),
            description: j.intl.format(j.t.u9RWmv, { helpdeskArticle: tp.A.getArticleURL(eg.MVz.SOUNDBOARD) }),
            children: [
                (0, E.jsx)(o8.A, {
                    guildId: t,
                    className: uh.Dt,
                    globalOption: { label: j.intl.string(j.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        i(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, E.jsxs)(o9.A, {
                    title: j.intl.format(j.t.I2TsYN, {
                        nitroWheelHook: () => (0, E.jsx)(o5.t, { size: "md", color: "currentColor", className: uh.ax }),
                    }),
                    children: [
                        (0, E.jsx)(um, {
                            sound: s,
                            isGlobal: l,
                            onSelect: (i) => {
                                null == i ? (0, ui.Dv)(t, e) : (0, ui.un)(t, i, e);
                            },
                        }),
                        r &&
                            (0, E.jsx)(tx.p, {
                                className: uh.lm,
                                messageType: tx.Y.WARNING,
                                children: j.intl.string(j.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        });
    },
});
var ux = i(824744);
let up = (0, a.sN)(u.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => j.intl.string(j.t.kbFsAD),
    useSubtitle: () => j.intl.format(j.t.BPbGq7, { helpCenterArticle: tp.A.getArticleURL(eg.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [e$.A.USER_SETTINGS_VOICE_AND_VIDEO],
            i = (0, ux.w)(e);
        (0, ue.iy)(i, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, ui.wH)();
        return (0, ux.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var uf = i(864145);
let uN = (0, a.sN)(u.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => j.intl.string(j.t["2JbvKw"]),
        useSubtitle: () => j.intl.string(j.t.INenzY),
        setValue: function (e) {
            let t = (0, ux.w)(e);
            L.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = L.HO.getSetting();
            return (0, ux.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, uf.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    u_ = (0, a.zZ)(u.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => j.intl.string(j.t.ABjMWI),
        buildLayout: () => [up, uN, uT],
    });
var uI = i(803224),
    uC = i(552122);
let ub = (0, a.E2)(u.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [j.intl.string(j.t.fgSHf8)],
        usePredicate: () => null != uC.A.useHolidaySoundpack(),
        Component: () =>
            (0, E.jsx)(ee.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: j.intl.format(j.t.Eup6Wv, {
                    onClick: () => (0, eY.openUserSettings)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    uv = (0, a.AK)(u.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.eyGEE4),
        useSearchTerms: () => [j.intl.string(j.t.eyGEE4)],
        destinationKey: u.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    uy = (0, a.gN)(u.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [uv] });
var uj = i(264686);
let uO = (0, nR.D)(() => ({ currentPlayingSound: null }));
function uR() {
    let e = uO.getField("currentPlayingSound");
    e?.stop(), uO.setState({ currentPlayingSound: null });
}
function uL(e) {
    let t = uO.getField("currentPlayingSound");
    t?.stop();
    let i = (0, rj.Ak)(e);
    uO.setState({ currentPlayingSound: i });
}
function uD(e) {
    return (0, a.zD)(`${u.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => j.intl.format(j.t.OOiGCM, { onClick: () => uL(e.sound) }),
        useValue: () => {
            let t = (0, g.bG)([uI.A], () => uI.A.isSoundDisabled(e.sound)),
                i = e.useDisabled?.();
            return !t && !i;
        },
        setValue: (t) => {
            let i = uI.A.getDisabledSounds().filter((t) => t !== e.sound);
            t || i.push(e.sound), uj.default.setDisabledSounds(i);
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                i = (0, g.bG)([uI.A], () => uI.A.getDisableAllSounds());
            return t || i;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let uP = [
        { useTitle: () => j.intl.string(j.t.hK51Yg), sound: "deafen" },
        { useTitle: () => j.intl.string(j.t.XiejaJ), sound: "undeafen" },
        { useTitle: () => j.intl.string(j.t.w4m945), sound: "mute" },
        { useTitle: () => j.intl.string(j.t.YqAjXy), sound: "unmute" },
        { useTitle: () => j.intl.string(j.t.JoTq8n), sound: "camera_on" },
        { useTitle: () => j.intl.string(j.t["8P6tQ6"]), sound: "camera_off" },
        { useTitle: () => j.intl.string(j.t["juL9/L"]), sound: "disconnect" },
        { useTitle: () => j.intl.string(j.t.x98vQq), sound: "ptt_start" },
        { useTitle: () => j.intl.string(j.t["1HjRqC"]), sound: "ptt_stop" },
        { useTitle: () => j.intl.string(j.t["9JB1Ck"]), sound: "user_join" },
        { useTitle: () => j.intl.string(j.t.KUBBNt), sound: "user_leave" },
        { useTitle: () => j.intl.string(j.t.EZjqUT), sound: "user_moved" },
        { useTitle: () => j.intl.string(j.t.LnNlQh), sound: "call_calling" },
        { useTitle: () => j.intl.string(j.t.Nd8P5y), sound: "stream_started" },
        { useTitle: () => j.intl.string(j.t["9bYj+G"]), sound: "stream_ended" },
        { useTitle: () => j.intl.string(j.t.KccUI1), sound: "stream_user_joined" },
        { useTitle: () => j.intl.string(j.t.dsjkiN), sound: "stream_user_left" },
        { useTitle: () => j.intl.string(j.t.nFOcf9), sound: "activity_launch" },
        { useTitle: () => j.intl.string(j.t["a6lw/u"]), sound: "activity_end" },
        { useTitle: () => j.intl.string(j.t.KaFxrY), sound: "activity_user_join" },
        { useTitle: () => j.intl.string(j.t.S14z9n), sound: "activity_user_left" },
        { useTitle: () => j.intl.string(j.t.CP3DC3), sound: "reconnect" },
    ],
    uG = (0, a.D1)(u.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? j.intl.formatToPlainString(j.t["0JYT98"], { count: t })
                : j.intl.formatToPlainString(j.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => oT(u.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                uR();
            };
        },
        buildLayout: () => uP.map((e) => uD(e)),
    }),
    uM = (0, a.zZ)(u.X.SOUNDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, g.bG)([uI.A], () => uI.A.getDisableAllSounds());
            return S.useMemo(() => {
                if (e)
                    return {
                        type: h.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        useText: () =>
                            j.intl.format(j.t.fRvixS, {
                                onClick: () => (0, eY.openUserSettings)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                            }),
                    };
            }, [e]);
        },
        buildLayout: () => [uG, ub, uy],
    }),
    uU = (0, a.zD)(u.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => j.intl.string(j.t.e3Zz3F),
        useSubtitle: () => j.intl.string(j.t.RztTjP),
        useValue: function () {
            return !L.uh.useSetting();
        },
        setValue: function (e) {
            (0, os.A)("stream_previews_disabled", !e, L.uh.getSetting(), [e$.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                L.uh.updateSetting(!e);
        },
    }),
    uV = (0, a.zD)(u.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => j.intl.string(j.t.GmWk2E),
        useSearchTerms: () => [j.intl.string(j.t["Fj/xn1"])],
        useSubtitle: () => j.intl.string(j.t["Fj/xn1"]),
        useValue: function () {
            return (0, g.bG)([lM.Ay], () => lM.Ay.getVideoHook());
        },
        setValue: aX.A.setVideoHook,
        usePredicate: function () {
            return (0, g.bG)([lM.Ay], () => lM.Ay.supportsVideoHook());
        },
    }),
    uk = (0, a.zD)(u.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => j.intl.string(j.t["4I0qzZ"]),
        useValue: function () {
            return (0, g.bG)([lM.Ay], () => lM.Ay.getExperimentalSoundshare());
        },
        setValue: aX.A.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, g.bG)([lM.Ay], () => {
                let e = lM.Ay.supportsExperimentalSoundshare(),
                    t = lM.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    uw = (0, a.zD)(u.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => j.intl.string(j.t["/jwMtn"]),
        useSubtitle: () => j.intl.string(j.t.zlA23F),
        useValue: function () {
            return (0, g.bG)([lM.Ay], () => lM.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [e$.A.USER_SETTINGS_VOICE_AND_VIDEO];
            aX.A.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return lM.Ay.supports(aU.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    uB = (0, a.sN)(u.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => j.intl.string(j.t.fhEzfj),
        setValue: function (e) {
            let t = [e$.A.USER_SETTINGS_VOICE_AND_VIDEO];
            aX.A.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: lM.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            return lM.Ay.supports(aU.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    uF = (0, a.zD)(u.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
        useTitle: () => j.intl.string(j.t.lt8rRx),
        useSubtitle: () => j.intl.string(j.t.ie1mgY),
        useValue: function () {
            return (0, g.bG)([lM.Ay], () => lM.Ay.getUseSystemScreensharePicker());
        },
        setValue: function (e) {
            (0, c.cX)() && e
                ? (0, su.A)({
                      title: j.intl.string(j.t["9jf31O"]),
                      subtitle: j.intl.string(j.t.uBd6JW),
                      variant: "primary",
                      onConfirm: () => {
                          aX.A.setUseSystemScreensharePicker(e), lt.A.app.relaunch();
                      },
                      confirmText: j.intl.string(j.t.BddRzS),
                  })
                : aX.A.setUseSystemScreensharePicker(e);
        },
        usePredicate: function () {
            return (0, g.bG)([lM.Ay], () => lM.Ay.supportsSystemScreensharePicker() && (0, c.cX)());
        },
    }),
    uz = (0, a.bd)(u.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? j.intl.string(j.t.qrMyvm) : j.intl.string(j.t.LEtTNl)),
        useCollapsedSubtitle: () => oT(u.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [uw, uB, uF, uk, uV],
    }),
    uY = (0, a.zZ)(u.X.STREAMING_CATEGORY, { useTitle: () => j.intl.string(j.t.KDdjou), buildLayout: () => [uU, uz] }),
    uX = (0, a.E2)(u.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, E.jsx)(aD.U, {
                label: j.intl.string(j.t.UTM8VP),
                deviceType: aU.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !0,
            });
        },
    }),
    uH = (0, a.E2)(u.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, E.jsx)(aD.U, {
                label: j.intl.string(j.t.xuYQ0n),
                deviceType: aU.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !0,
            });
        },
    }),
    uK = (0, a.zC)(u.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [uX, uH] }),
    uW = (0, a.sN)(u.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => j.intl.string(j.t.Rtsr6w),
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = lM.Ay.getInputVolume();
            return (0, ux.M)(e);
        },
        asValueChanges: function (e) {
            let t = [e$.A.USER_SETTINGS_VOICE_AND_VIDEO],
                i = (0, ux.w)(e);
            aX.A.setInputVolume(i, { analyticsLocations: t });
        },
    }),
    uZ = (0, a.sN)(u.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => j.intl.string(j.t.aUJ062),
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = lM.Ay.getOutputVolume();
            return (0, ux.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [e$.A.USER_SETTINGS_VOICE_AND_VIDEO],
                i = (0, ux.w)(e);
            aX.A.setOutputVolume(i, { analyticsLocations: t });
        },
    }),
    uq = (0, a.zC)(u.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [uW, uZ] });
var uQ = i(702841),
    uJ = i(349288),
    u$ = i(152567),
    u0 = i(593290);
let u1 = `${tp.A.getArticleURL(eg.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    u2 = (0, a.E2)(u.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.nuFtHH)],
        usePredicate: function () {
            return (0, uQ.bG)([lM.Ay], () => lM.Ay.supports(aU.O5.LOOPBACK));
        },
        Component: function () {
            return (0, uQ.bG)([lM.Ay], () => lM.Ay.supports(aU.O5.LOOPBACK))
                ? (0, E.jsx)(u$.A, {
                      size: "md",
                      notchBackground: u$.V.GRAY,
                      captionVoice: j.intl.string(j.t.bp3JOV),
                      captionNoVoice: (0, E.jsxs)(E.Fragment, {
                          children: [
                              (0, E.jsx)(ee.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-default",
                                  children: j.intl.string(j.t.bgn75v),
                              }),
                              j.intl.string(j.t["MA+OZh"]),
                              (0, E.jsx)(uJ.Anchor, {
                                  className: u0.X,
                                  href: tp.A.getArticleURL(eg.MVz.NO_INPUT_DETECTED),
                                  children: j.intl.string(j.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: j.intl.format(j.t["V+B3FH"], { guideURL: u1 }),
                      buttonTest: j.intl.string(j.t.gyljWE),
                      buttonStop: j.intl.string(j.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: eg.liQ.USER_SETTINGS, section: eg.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    u3 = ez.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function u6(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: i } = e;
    return (0, E.jsxs)(K.B, {
        children: [
            i && (0, E.jsx)(lw, { sourcePage: "voice" }),
            t && (0, E.jsx)(sc.A, { look: sc.k.WARNING, children: j.intl.string(j.t.Ioz3gx) }),
        ],
    });
}
let u4 = (0, a.zZ)(u.X.VOICE_CATEGORY, {
        useTitle: () => j.intl.string(j.t.K3lovD),
        useSearchTerms: () => [
            j.intl.string(j.t.hHMYbb),
            j.intl.string(j.t.nuFtHH),
            j.intl.string(j.t.dl18zb),
            j.intl.string(j.t["3182VD"]),
            j.intl.string(j.t["DGq/PR"]),
            j.intl.string(j.t.eATD2B),
            j.intl.string(j.t.Rtsr6w),
            j.intl.string(j.t.aUJ062),
        ],
        useInlineNotice: function () {
            let e = lk("voice"),
                t = (0, aP.x5)(aU.oh.AUDIO_INPUT),
                i = (0, aP.x5)(aU.oh.AUDIO_OUTPUT),
                n = S.useMemo(() => {
                    let e = u3.some((e) => t?.hardwareId?.startsWith(e)),
                        n = u3.some((e) => i?.hardwareId?.startsWith(e));
                    return e && n && t?.containerId != null && t.containerId === i?.containerId;
                }, [t, i]);
            return S.useMemo(
                () =>
                    e.canPrompt || n
                        ? {
                              type: h.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, E.jsx)(u6, {
                                      inputAndOutputAreBluetooth: n,
                                      canPromptSystemServiceInstallForVoice: e.canPrompt,
                                  }),
                          }
                        : null,
                [e.canPrompt, n],
            );
        },
        buildLayout: () => [uK, uq, u2],
    }),
    u5 = (0, a.t_)(u.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => j.intl.string(j.t.B1fFpf),
        buildLayout: () => [u4, o4, aF, uY, uM, u_, ou],
    }),
    u7 = (0, a.i4)(u.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.B1fFpf),
        usePredicate: () => lM.Ay.isSupported(),
        icon: a_.c,
        useMenu: aI.A,
        buildLayout: () => [u5],
    }),
    u8 = (0, a.zZ)(u.X.WINDOWS_CATEGORY, {
        buildLayout: () => [rE, aa, rS, rf],
        initialize: () => {
            rh();
        },
    }),
    u9 = (0, a.t_)(u.X.WINDOWS_PANEL, { useTitle: () => j.intl.string(j.t.ZkDZov), buildLayout: () => [u8] }),
    de = (0, a.i4)(u.X.WINDOWS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.ZkDZov),
        icon: tr.k,
        usePredicate: () => ez.isPlatformEmbedded && (0, ez.isWindows)(),
        buildLayout: () => [u9],
    }),
    dt = (0, a.WI)(u.X.APP_SECTION, {
        useTitle: () => j.intl.string(j.t.gcyH1J),
        buildLayout: function () {
            let e = (0, o.SB)("AppSection_buildLayout");
            return [u7, lb, st, al, e ? aN : ru, rm, e ? null : de, e ? null : rI].filter(N.Vq);
        },
    });
var di = i(360669),
    dn = i(974544),
    ds = i(546605),
    dl = i(423764),
    dr = i(289873),
    da = i(465323),
    du = i(37766),
    dd = i(194261),
    dc = i(391048),
    dg = i(753390),
    dm = i(99696),
    dA = i(202613),
    dh = i(615405),
    dE = i(580630),
    dS = i(83617),
    dT = i(935208),
    dx = i(607399),
    dp = i(150934),
    df = i(256006),
    dN = i(198970),
    d_ = i(71532);
let dI = /[^0-9/]/g,
    dC = /[^0-9]/g;
class db extends S.PureComponent {
    _inputRef;
    selectionStart = 0;
    componentDidUpdate(e) {
        let t = this._inputRef;
        e.value !== this.props.value && null != t && t.setSelectionRange(this.selectionStart, this.selectionStart);
    }
    setRef = (e) => {
        let { inputRef: t } = this.props;
        (this._inputRef = e), null != t && t(e);
    };
    handleChange = (e, t) => {
        let i,
            n,
            s,
            l,
            { value: r, onChange: a } = this.props,
            o = this._inputRef;
        if (e === r || null == o || null == r) return;
        let u =
                ((n = (i = e.replace(dI, "").split("/"))[0]),
                (s = i[1]),
                (l = []),
                parseInt(n, 10) > 12 && (n = n.substring(0, 1)),
                l.push(n),
                (parseInt(n, 10) > 1 || 2 === n.length || (null != s && "" !== s)) && l.push("/"),
                null != s && "" !== s && parseInt(s, 10) > 99 && (s = (s + "").substring(0, 2)),
                l.push(s),
                l.join("")),
            d = o.selectionStart;
        u === r && u.length <= 3 && r.includes("/") && !e.includes("/")
            ? (u = u.replace(dC, ""))
            : u === r && e.includes("/") && !r.includes("/") && (u += "/"),
            u.length > e.length && (d += u.length - e.length),
            (this.selectionStart = d),
            null != a && a(u, t);
    };
    render() {
        return (0, E.jsx)(lF.k, {
            ...this.props,
            inputMode: "numeric",
            onChange: this.handleChange,
            inputRef: this.setRef,
        });
    }
}
var dv = i(832208),
    dy = i(536439);
let dj = [
        {
            fields: [
                {
                    expirationDate: {
                        name: "expirationDate",
                        id: (0, sy.Ld)(),
                        title: () => j.intl.string(j.t["CeBa/4"]),
                        autoComplete: "cc-exp",
                        placeholder: () => j.intl.string(j.t.xeEWQ6),
                        pattern: "\\d*",
                        getClassNameForLayout: () => dy.ep,
                        renderInput: (e) => (0, E.jsx)(db, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    dO = function (e) {
        let { onCardInfoChange: t, className: i, expirationDate: n, error: s } = e,
            [l, r] = S.useState(!1),
            [a, o] = S.useState(null),
            [u, d] = S.useState(n);
        return (
            S.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, E.jsx)(dv.A, {
                className: i,
                form: dj,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: s,
                onFieldChange: (e) => {
                    l || "" === e || r(!0),
                        (l && "" === e) || !(0, d_.So)(e) ? o(j.intl.string(j.t["9/zZdl"])) : o(null),
                        d(e);
                },
            })
        );
    };
var dR = i(219887),
    dL = i(276589);
let dD = "isDefault";
class dP extends S.PureComponent {
    static defaultProps = { onDelete: () => {}, onSubmit: () => {}, onCancel: () => {} };
    constructor(e) {
        super(e);
        const { paymentSource: t, isDefault: i } = e,
            n = t.billingAddress;
        this.state = {
            billingAddress: {
                name: n.name ?? "",
                line1: n.line1 ?? "",
                line2: n.line2 ?? "",
                country: n.country ?? "",
                state: n.state ?? "",
                city: n.city ?? "",
                postalCode: n.postalCode ?? "",
            },
            expiresMonth: t instanceof dA.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof dA.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: i,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        ss.h.wait(() => {
            (0, dg.ey)(), (0, dg.tc)();
        });
    }
    handleSubmit = (e) => {
        if ((e.preventDefault(), e.stopPropagation(), 0 === Object.values(this.state.dirtyFields).filter(N.Vq).length))
            this.props.onCancel();
        else {
            let { billingAddress: e, isDefault: t, expiresMonth: i, expiresYear: n } = this.state;
            this.props.onSubmit(this.props.paymentSource.id, {
                billingAddress: e,
                expiresMonth: i,
                expiresYear: n,
                isDefault: t,
            });
        }
    };
    handleCancel = () => {
        this.props.onCancel();
    };
    handleDelete = () => {
        let { onDelete: e, paymentSource: t } = this.props;
        e(t.id);
    };
    handleAddressUpdate = (e, t, i) => {
        this.setState({
            billingAddress: e,
            billingAddressValid: t,
            dirtyFields: { ...this.state.dirtyFields, billingAddress: i },
        });
    };
    handleExpirationDateUpdate = (e, t) => {
        let { expirationDate: i } = e;
        if ((this.setState({ expirationValid: t }), null == i || "" === i)) return;
        let [n, s] = i.split("/");
        this.handleFieldChange(Number(n), "expiresMonth"),
            this.handleFieldChange(Number(`${new Date().getFullYear().toString().slice(0, 2)}${s}`), "expiresYear");
    };
    handleFieldChange = (e, t) => {
        null != t && this.setState({ [t]: e, dirtyFields: { ...this.state.dirtyFields, [t]: !0 } });
    };
    renderError() {
        let { updateError: e, removeError: t } = this.props;
        return null == e || e.hasCardError() || e.hasAddressError()
            ? null != t
                ? (0, E.jsx)("div", {
                      className: dL.zc,
                      children: (0, E.jsx)(H.w, { type: "critical", children: t.message }),
                  })
                : null
            : (0, E.jsx)("div", {
                  className: dL.zc,
                  children: (0, E.jsx)(H.w, { type: "critical", children: e.message }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: i } = this.props,
            n = (0, df.g)(i);
        return (0, E.jsxs)("div", {
            className: dL.yV,
            children: [
                (0, E.jsx)(ee.E, {
                    className: dL.bV,
                    variant: "text-sm/normal",
                    children: j.intl.string(j.t["50Auo2"]),
                }),
                (0, E.jsx)(dN.Ay, {
                    ...e,
                    mode: dN.Ay.Modes.EDIT,
                    layout: n,
                    onBillingAddressChange: this.handleAddressUpdate,
                    error: t,
                }),
            ],
        });
    }
    renderCardExpirationSection() {
        let { expiresMonth: e, expiresYear: t } = this.state;
        if (null == e || null == t) return null;
        let i = `${e.toString().padStart(2, "0")}/${t.toString().padStart(2, "0").slice(-2)}`;
        return (0, E.jsxs)("div", {
            className: dL.yV,
            children: [
                (0, E.jsx)(ee.E, { className: dL.bV, variant: "text-sm/normal", children: j.intl.string(j.t.Fo2YP7) }),
                (0, E.jsx)(dO, {
                    expirationDate: i,
                    onCardInfoChange: this.handleExpirationDateUpdate,
                    error: this.props.updateError,
                }),
            ],
        });
    }
    renderActions() {
        let { submitting: e, removing: t, isForSubscription: i } = this.props,
            { billingAddressValid: n, expirationValid: s } = this.state;
        return (0, E.jsx)("div", {
            className: dL.AU,
            children: (0, E.jsxs)(K.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, E.jsx)(aQ.e, {
                        children: (0, E.jsxs)("div", {
                            className: dL.lH,
                            children: [
                                i
                                    ? (0, E.jsx)(ts.m, {
                                          text: j.intl.string(j.t["v6/z28"]),
                                          children: (0, E.jsx)("div", { "aria-hidden": !0, className: dL.dm }),
                                      })
                                    : null,
                                (0, E.jsx)(eD.$, {
                                    type: "button",
                                    disabled: i || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: dx.Fr ? "sm" : "md",
                                    text: dx.Fr ? j.intl.string(j.t.oyYWHE) : j.intl.string(j.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, E.jsxs)(aQ.e, {
                        children: [
                            (0, E.jsx)(eD.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: dx.Fr ? "sm" : "md",
                                text: j.intl.string(j.t["ETE/oC"]),
                            }),
                            (0, E.jsx)(eD.$, {
                                loading: e,
                                disabled: !n || t || !s,
                                type: "submit",
                                variant: "active",
                                size: dx.Fr ? "sm" : "md",
                                text: j.intl.string(j.t["R3BPH+"]),
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
    render() {
        let { paymentSource: e, isDefault: t, locale: i, className: n, isForSubscription: s } = this.props,
            { isDefault: l } = this.state,
            r = e instanceof dA.SJ;
        return (0, E.jsx)(eI.Z, {
            editable: !0,
            className: e2()(dL.Nr, n),
            children: (0, E.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, E.jsxs)("div", {
                        className: dL.__invalid_paymentSection,
                        children: [
                            (0, E.jsx)(dR.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: s,
                                locale: i,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, E.jsx)("div", { className: dL.Um, children: j.intl.string(j.t["3R0U0b"]) })
                                : null,
                            (0, E.jsx)("div", {
                                className: dL.Sv,
                                children: r
                                    ? j.intl.format(j.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : j.intl.string(j.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, E.jsx)("div", {
                        className: dL.D5,
                        children: (0, E.jsx)(dp.S, {
                            value: dD,
                            checked: l,
                            onChange: (e) => this.handleFieldChange(e, dD),
                            label: j.intl.string(j.t.nag9Og),
                            labelType: "secondary",
                        }),
                    }),
                    (0, E.jsx)(eP.c, {}),
                    this.renderActions(),
                ],
            }),
        });
    }
}
let dG = g.Ay.connectStores([dh.A], () => ({ updateError: dh.A.editSourceError, removeError: dh.A.removeSourceError }))(
    dP,
);
var dM = i(776409),
    dU = i(447774),
    dV = i(95322);
class dk extends S.PureComponent {
    static defaultProps = { isEditing: !1, hideDivider: !1, onEditClick: () => {} };
    handleEditClick = () => {
        this.props.onEditClick(this.props.paymentSource.id);
    };
    render() {
        let {
            paymentSource: e,
            isDefault: t,
            isEditing: i,
            hideDivider: n,
            isForSubscription: s,
            locale: l,
            removing: r,
            submitting: a,
            onSubmit: o,
            onCancel: u,
            onDelete: d,
        } = this.props;
        return i
            ? (0, E.jsx)(dG, {
                  paymentSource: e,
                  isDefault: t,
                  removing: r,
                  submitting: a,
                  locale: l,
                  isForSubscription: s,
                  onSubmit: o,
                  onCancel: u,
                  onDelete: d,
              })
            : (0, E.jsxs)(E.Fragment, {
                  children: [
                      n ? null : (0, E.jsx)(eP.c, { className: dV.__invalid_sourceDivider }),
                      (0, E.jsxs)("div", {
                          className: dV.Yb,
                          children: [
                              (0, E.jsx)(dR.A, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: s,
                                  locale: l,
                                  showSubtext: !0,
                                  showLabels: !0,
                                  showPaymentSourceIcon: !0,
                              }),
                              (0, E.jsx)(eD.$, {
                                  variant: "secondary",
                                  onClick: this.handleEditClick,
                                  size: "sm",
                                  text: j.intl.string(j.t.bt75uw),
                              }),
                          ],
                      }),
                  ],
              });
    }
}
let dw = S.memo(function (e) {
    let { paymentSource: t, hideDivider: i, isForSubscription: n, locale: s, onRedeemClick: l } = e,
        [r, a] = S.useState(null),
        o = (0, g.bG)([ir.default], () => ir.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, g.bG)([dh.A], () => dh.A.ipCountryCode),
        d = S.useMemo(() => (0, da.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        S.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : dg.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, E.jsxs)(E.Fragment, {
            children: [
                i ? null : (0, E.jsx)(eP.c, { className: dV.__invalid_sourceDivider }),
                (0, E.jsxs)("div", {
                    className: dV.Yb,
                    children: [
                        void 0 !== t
                            ? (0, E.jsx)(dR.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: n,
                                  locale: s,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, E.jsxs)(lH.A, {
                                  align: lH.A.Align.CENTER,
                                  children: [
                                      (0, E.jsx)(du._, { size: "lg" }),
                                      (0, E.jsx)(ee.E, {
                                          variant: "text-sm/medium",
                                          className: dU.Wi,
                                          children: j.intl.string(dM.default["/FQWfA"]),
                                      }),
                                  ],
                              }),
                        (0, E.jsxs)("div", {
                            className: dV.zy,
                            children: [
                                (0, E.jsx)("div", {
                                    className: dV.Tq,
                                    children:
                                        null == r
                                            ? (0, E.jsx)(dr.y, { type: dr.y.Type.SPINNING_CIRCLE })
                                            : (0, E.jsx)(ee.E, {
                                                  variant: "text-sm/medium",
                                                  children: (() => {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          i = t ?? d,
                                                          n = String(i).toUpperCase(),
                                                          s = (0, dE.$g)(e ?? 0, i, {
                                                              currencyDisplay: "narrowSymbol",
                                                          });
                                                      return `${n} ${s}`;
                                                  })(),
                                              }),
                                }),
                                (0, E.jsx)(eD.$, {
                                    variant: "secondary",
                                    onClick: l,
                                    size: "sm",
                                    text: j.intl.string(dM.default.iBFPMf),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class dB extends S.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            await dg.Gr(e), this.setState({ editingPayment: e });
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            await dg.JQ(e), this.setState({ editingPayment: null });
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                await dg.Ps(e, t), this.setState({ editingPayment: null });
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, dS.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, z.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 362111));
                return (t) => (0, E.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, dc.ET)();
                },
                onCloseRequest: eg.tEg,
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, E.jsxs)("div", {
            className: dV.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, E.jsxs)("div", {
                          className: dV.z8,
                          children: [
                              (0, E.jsx)(ee.E, { variant: "text-sm/normal", children: j.intl.string(j.t.aRHpAB) }),
                              (0, E.jsx)(ee.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: dV.Sv,
                                  children: j.intl.string(j.t.o9bOIl),
                              }),
                          ],
                      })
                    : null,
                (0, E.jsx)(eD.$, { onClick: this.handleAddPaymentMethod, text: j.intl.string(j.t.CpOiEO) }),
            ],
        });
    }
    render() {
        let e,
            {
                showHeader: t,
                defaultPaymentSourceId: i,
                paymentSources: n,
                locale: s,
                removing: l,
                submitting: r,
                premiumSubscriptionPaymentSourceId: a,
                showGiftCards: o,
            } = this.props,
            u = eK()
                .values(n)
                .sort((e, t) => (e.id === i ? -1 : t.id === i ? 1 : dT.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof dA.LQ)),
            c = u.filter((e) => e instanceof dA.LQ),
            g = this.state.editingPayment,
            m = d.findIndex((e) => e.id === g),
            A = d.map((e, t) =>
                (0, E.jsx)(
                    dk,
                    {
                        locale: s,
                        paymentSource: e,
                        isDefault: i === e.id,
                        onCancel: this.handleCancel,
                        onDelete: this.handleDelete,
                        isForSubscription: e.id === a,
                        hideDivider: 0 === t || m === t - 1,
                        onSubmit: this.handleSubmit,
                        submitting: r,
                        removing: l,
                        isEditing: g === e.id,
                        onEditClick: this.handleEditClick,
                    },
                    e.id,
                ),
            );
        return (
            (e =
                c.length > 0
                    ? c.map((e, t) =>
                          (0, E.jsx)(
                              dw,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || m === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: s,
                                  onRedeemClick: () =>
                                      (0, dm.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page" }),
                              },
                              e.id,
                          ),
                      )
                    : (0, E.jsx)(dw, {
                          hideDivider: 0 === d.length || m === d.length - 1,
                          isForSubscription: !1,
                          locale: s,
                          onRedeemClick: () =>
                              (0, dm.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page" }),
                      })),
            (0, E.jsxs)(E.Fragment, {
                children: [
                    t
                        ? (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsxs)(eL.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, E.jsx)(dd.X, { size: "sm", className: dV.hz }),
                                          " ",
                                          j.intl.string(j.t.W26xGQ),
                                      ],
                                  }),
                                  (0, E.jsx)(ee.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: j.intl.string(j.t.h6V3uK),
                                  }),
                              ],
                          })
                        : null,
                    A,
                    o && e,
                    m !== d.length - 1 || (o && c.length > 0) ? (0, E.jsx)(eP.c, {}) : null,
                    this.renderFooter(),
                ],
            })
        );
    }
}
var dF = i(459357),
    dz = i(295405),
    dY = i(166403),
    dX = i(773669),
    dH = i(589764);
function dK() {
    let e = (0, ds.vg)("PaymentMethodsHeader"),
        t = (0, g.bG)([ir.default], () => ir.default.getCurrentUser()?.storeCountry);
    return e && t?.country != null ? { country: t.country, countryName: (0, dl.Gw)(t.country) } : null;
}
let dW = (0, a.E2)(u.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                i = (0, g.bG)([dh.A], () => dh.A.isSyncing),
                n = (0, g.bG)([dz.A], () => dz.A.paymentSources),
                s = (0, g.bG)([dz.A], () => dz.A.defaultPaymentSourceId),
                l = (0, g.bG)([dX.default], () => dX.default.locale),
                r = (0, g.bG)([dY.A], () => dY.A.getPremiumTypeSubscription()),
                a = (0, g.bG)([dh.A], () => dh.A.isRemovingPaymentSource),
                o = (0, g.bG)([dh.A], () => dh.A.isUpdatingPaymentSource),
                { enabled: u } = (0, dF.c)({ location: "UserSettingsBilling" });
            return (S.useEffect(() => {
                dg.$o(), dg.hP();
            }, []),
            i && 0 === Object.keys(n).length)
                ? (0, E.jsx)("div", { className: dH.o, children: (0, E.jsx)(dr.y, {}) })
                : (0, E.jsx)(dB, {
                      showHeader: t,
                      paymentSources: n,
                      defaultPaymentSourceId: s,
                      premiumSubscriptionPaymentSourceId:
                          null != r && r.status !== eg.Dmq.CANCELED ? r.paymentSourceId : null,
                      locale: l,
                      removing: a,
                      submitting: o,
                      showGiftCards: u,
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t.W26xGQ), j.intl.string(j.t["3pIjBH"])],
    }),
    dZ = (0, a.zZ)(u.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.W26xGQ),
        useSubtitle: () => {
            let e = dK();
            return null != e ? j.intl.format(j.t.e2t1G5, { country: e.countryName }) : j.intl.string(j.t.h6V3uK);
        },
        useSubtitleDecoration: function () {
            return null == dK()
                ? null
                : {
                      type: h.p3.INFO_POPOVER,
                      ariaLabel: j.intl.string(j.t.PuB1W7),
                      popoverProps: {
                          title: "",
                          body: j.intl.string(j.t["21skUa"]),
                          size: "sm",
                          position: "top",
                          getActions: (e) => [
                              {
                                  text: j.intl.string(j.t.PuB1W7),
                                  variant: "primary",
                                  onClick: () => {
                                      window.open("https://support.discord.com/hc/articles/39799791912087", "_blank"),
                                          e();
                                  },
                              },
                          ],
                      },
                  };
        },
        buildLayout: () => [dW],
    });
var dq = i(549363),
    dQ = i(545075);
let dJ = (0, a.E2)(u.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            let e = (0, g.bG)([dX.default], () => dX.default.locale);
            return (0, E.jsxs)(E.Fragment, { children: [(0, E.jsx)(dQ.kb, {}), (0, E.jsx)(dq.A, { locale: e })] });
        },
        useSearchTerms: () => [j.intl.string(j.t.obLrcK)],
    }),
    d$ = (0, a.zZ)(u.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => j.intl.string(j.t.obLrcK),
        buildLayout: () => [dJ],
    }),
    d0 = (0, a.t_)(u.X.BILLING_PANEL, {
        useTitle: () => j.intl.string(j.t.oeUm2s),
        buildLayout: () => [dZ, d$],
        useObscuredNotice: dn.L,
    }),
    d1 = (0, a.i4)(u.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.oeUm2s),
        icon: di.B,
        buildLayout: () => [d0],
    });
var d2 = i(597770),
    d3 = i(962644),
    d6 = i(35587),
    d4 = i(86379);
let d5 = (0, a.E2)(u.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: dQ.uK,
        usePredicate: () => (0, d4.Hp)(),
        useSearchTerms: () => [j.intl.string(j.t.vwMEHS)],
    }),
    d7 = (0, a.zZ)(u.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [d5] });
var d8 = i(532446),
    d9 = i(869038),
    ce = i(499454),
    ct = i(45938);
class ci extends S.Component {
    state = { codeInput: "", submitting: !1, hasError: !1, isPromoCode: !1 };
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return { ...e, object: eg.ZSU.BUTTON_CTA };
    }
    handleChange = (e) => {
        this.setState({ codeInput: e, hasError: !1 });
    };
    handleSubmit = async (e) => {
        e.preventDefault();
        let { codeInput: t } = this.state;
        if ("" === t) return;
        let i = t.trim();
        this.setState({ submitting: !0 });
        try {
            if (this.props.acceptGiftCardRedemption)
                try {
                    await (0, dm.Qp)(i),
                        (0, dm.HF)({ initialCode: i, withRedemptionSuccessModal: !0 }),
                        this.setState({ codeInput: "" });
                    return;
                } catch {}
            let e = (0, ct.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let n = await d9.A.resolveGiftCode(e);
            if (null != n && null != n.giftCode.promotion)
                throw (this.setState({ isPromoCode: !0 }), Error("Cannnot redeem promotion code as gift"));
            er.default.track(eg.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: {
                    ...this.analyticsLocation,
                    section: eg.JJy.LIBRARY_INVENTORY_CODE_REDEMPTION,
                    object: eg.ZSU.BUTTON_CTA,
                },
            }),
                (0, ce.h)({ processedCode: e }),
                this.setState({ codeInput: "" });
        } catch (e) {
            this.setState({ hasError: !0 });
        } finally {
            this.setState({ submitting: !1 });
        }
    };
    render() {
        let { redesign: e, obscureInput: t } = this.props,
            { codeInput: i, submitting: n, hasError: s, isPromoCode: l } = this.state,
            r = e ? j.intl.string(j.t["hVEn/j"]) : j.intl.string(j.t.SeKIoS),
            a = e ? j.intl.string(j.t.epHMtp) : void 0;
        return (0, E.jsx)(ip.n, {
            label: e ? void 0 : j.intl.string(j.t["il+VCo"]),
            children: (0, E.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, E.jsxs)(d8.M, {
                    children: [
                        (0, E.jsx)(lF.k, {
                            label: r,
                            description: a,
                            type: t ? "password" : "text",
                            value: i,
                            onChange: this.handleChange,
                            placeholder: "WUMP-AAAAA-BBBBB-CCCCC",
                            error: !l && s ? j.intl.string(j.t.Y11a2u) : null,
                            helperText: l
                                ? j.intl.format(j.t.gPt3PE, {
                                      promoLink: () => {
                                          window.open(`https://discord.com/billing/promotions/${i}`);
                                      },
                                  })
                                : null,
                            fullWidth: !0,
                        }),
                        (0, E.jsx)(eD.$, {
                            variant: "primary",
                            text: j.intl.string(j.t.KIpp7M),
                            type: "submit",
                            loading: n,
                            disabled: e && 0 === i.length,
                        }),
                    ],
                }),
            }),
        });
    }
}
function cn(e) {
    let { redesign: t = !1 } = e,
        { enabled: i } = (0, dF.c)({ location: "UserSettingsBilling" }),
        n = S.useContext(er.AnalyticsContext),
        s = (0, g.bG)([ek.A], () => ek.A.enabled);
    return (0, E.jsx)(ci, { analyticsContext: n, obscureInput: s, acceptGiftCardRedemption: i, redesign: t });
}
let cs = (0, a.E2)(u.X.GIFT_CODE_REDEMPTION_SETTING, {
    Component: cn,
    usePredicate: () => !(0, d4.Hp)(),
    useSearchTerms: () => [j.intl.string(j.t["jcSP+g"]), j.intl.string(j.t["il+VCo"])],
});
var cl = i(725570),
    cr = i(707554),
    ca = i(736653),
    co = i(46054);
let cu = rV().duration(30, "days");
var cd = i(264779),
    cc = i(416052),
    cg = i(961302);
function cm(e) {
    let { onClose: t, transitionState: i } = e;
    return (0, E.jsx)(lB.Modal, {
        title: "",
        size: "md",
        input: (0, E.jsx)("div", { className: cg.aR }),
        onClose: async () => await t(),
        actions: [{ text: j.intl.string(j.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: i,
        children: (0, E.jsxs)("div", {
            className: cg.t4,
            children: [
                (0, E.jsx)(eL.D, { variant: "heading-xl/semibold", children: j.intl.string(j.t.iufib1) }),
                (0, E.jsx)(ee.E, { variant: "text-md/normal", className: cg.G3, children: j.intl.string(j.t.eAn6z2) }),
            ],
        }),
    });
}
let cA = function (e) {
    let { onClose: t, onClaim: i, code: n, outboundPromotion: s, transitionState: l } = e,
        [r, a] = S.useState(null),
        o = (0, sy.GV)(),
        { analyticsLocations: u } = (0, nH.Ay)(e$.A.USER_SETTINGS_GIFT_INVENTORY);
    return (S.useEffect(() => {
        null == n &&
            (0, cd.kd)({
                promotionId: s.id,
                promotionTitle: s.outboundTitle,
                partnerId: s.partnerId,
                analyticsLocations: u,
            })
                .then((e) => i(e))
                .catch((e) => a(e?.body?.code));
    }, [n, s.id, s.outboundTitle, s.partnerId, i, u]),
    null != r)
        ? (0, E.jsx)(cm, { onClose: t, transitionState: l })
        : null == n
          ? (0, E.jsx)(dr.y, { className: cg.Lq })
          : (0, E.jsx)(lB.Modal, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, E.jsxs)("div", {
                    className: cg.N1,
                    children: [
                        (0, E.jsx)("div", { className: cg.Qw }),
                        (0, E.jsx)(eL.D, { variant: "heading-xl/semibold", children: j.intl.string(j.t["23BfZh"]) }),
                        (0, E.jsx)(ee.E, {
                            variant: "text-md/normal",
                            className: cg.G3,
                            children: s.outboundRedemptionModalBody,
                        }),
                    ],
                }),
                actions: [
                    { text: j.intl.string(j.t.TulDPl), variant: "secondary", onClick: async () => await t() },
                    {
                        text: j.intl.string(j.t["+zx47d"]),
                        variant: "primary",
                        onClick: () => {
                            let e = (0, cd.kc)(n, s);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: l,
                "aria-label": o,
                children: (0, E.jsxs)("div", {
                    children: [
                        (0, E.jsx)(eP.c, { className: cg.M5 }),
                        (0, E.jsx)(sV.D, {
                            label: j.intl.string(j.t.s9LFQh),
                            helperText: j.intl.string(j.t["F+nFTZ"]),
                            children: (0, E.jsx)(cc.A, {
                                value: n,
                                buttonColor: aZ.$n.Colors.BRAND,
                                buttonLook: aZ.$n.Looks.FILLED,
                                delay: 1e3,
                            }),
                        }),
                    ],
                }),
            });
};
var ch = i(725807),
    cE = i(212168),
    cS = i(469778),
    cT = i(109802),
    cx = i(503787);
let cp = (e) => {
        let { children: t, className: i, splashArtURL: n } = e;
        return (0, E.jsxs)(lH.A, {
            className: e2()(cx.wx, i),
            align: lH.A.Align.CENTER,
            children: [
                (0, E.jsx)("div", { className: cx.Bn, style: null != n ? { backgroundImage: `url(${n})` } : void 0 }),
                t,
            ],
        });
    },
    cf = (e) => {
        let { children: t, className: i } = e;
        return (0, E.jsx)("div", { className: e2()(cx.rf, i), children: t });
    };
class cN extends S.PureComponent {
    static Header = cp;
    static Body = cf;
    render() {
        let { children: e, className: t, onMouseEnter: i, onMouseLeave: n } = this.props;
        return (0, E.jsx)("div", { className: e2()(cx.Nr, t), onMouseEnter: i, onMouseLeave: n, children: e });
    }
}
var c_ = i(165191),
    cI = i(871123),
    cC = i(366523),
    cb = i(495544),
    cv = i(30793),
    cy = i(97352),
    cj = i(67480),
    cO = i(147925),
    cR = i(957565),
    cL = i(615396),
    cD = i(86629);
class cP extends S.PureComponent {
    _copyModeTimeout = new oU.Ep();
    state = { copyMode: cT.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case cT.q.SUCCESS:
                return j.intl.string(j.t.XVvPjU);
            case cT.q.ERROR:
                return j.intl.string(j.t.i4GM3L);
            default:
                return j.intl.string(j.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        d9.A.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: i } = this.props;
        (0, ct.AK)(t, i),
            (0, cR.C)(
                e,
                () => this.setState({ copyMode: cT.q.SUCCESS }),
                () => this.setState({ copyMode: cT.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: cT.q.DEFAULT });
            });
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: i } = this.state;
        return (0, E.jsxs)(lH.A, {
            direction: lH.A.Direction.VERTICAL,
            className: cD.Gj,
            children: [
                (0, E.jsx)(cT.e, {
                    className: cD.ph,
                    value: (0, ct.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: i,
                    supportsCopy: cR.p5,
                    hideMessage: e ? j.intl.string(j.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: aZ.XD.BRAND,
                    buttonLook: aZ.pR.FILLED,
                }),
                (0, E.jsxs)("div", {
                    className: cD.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, E.jsxs)(S.Fragment, {
                                  children: [
                                      j.intl.format(j.t.ltVZcJ, { hours: t.expiresAt.diff(rV()(), "h") }),
                                      " \u2014\xa0",
                                  ],
                              })
                            : null,
                        (0, E.jsx)($.D, {
                            tag: "a",
                            onClick: () => this.handleRevoke(t.code),
                            children: j.intl.string(j.t.v6Yazx),
                        }),
                    ],
                }),
            ],
        });
    }
}
class cG extends S.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: i, giftStyle: n } = this.props;
        this.setState({ isCreating: !0 }),
            await d9.A.createGiftCode(t, i, n),
            this.setState({ isCreating: !1, isOpen: !0 });
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: i } = this.props,
            n = !this.state.isOpen;
        (null == i || null == this._loadedAt || i < this._loadedAt) && n && d9.A.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen });
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: i } = this.props;
        return (0, cI.bF)(e)
            ? (0, E.jsx)(cC.e, { shape: "square", sku: e, containerClassName: cD.ez })
            : null != t
              ? (0, E.jsx)(c_.A, { giftStyle: t, className: cD.ez, shouldAnimate: this.state.isHovered })
              : (0, E.jsx)(p.A, { game: i, size: p.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: i } = this.props;
        return (0, cI.bF)(e)
            ? (0, E.jsxs)("div", {
                  className: e2()(cD.Oc, cD.ic),
                  children: [
                      (0, E.jsx)(p.A, { game: i, size: p.M.XSMALL, skuId: e.id, className: cD._u }),
                      j.intl.format(j.t["6plpZi"], { applicationName: i.name, copies: t.length }),
                  ],
              })
            : (0, E.jsx)("div", { className: cD.Oc, children: j.intl.format(j.t.zMcvcA, { copies: t.length }) });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: i, giftCodeBatchId: n } = this.props;
        return (
            (e =
                n === sO.FB
                    ? j.intl.string(j.t.odsU6W)
                    : n === sO.Bu && null != i
                      ? j.intl.formatToPlainString(i.interval === sO.WT.MONTH ? j.t.uZjpiJ : j.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: i.intervalCount,
                        })
                      : null == i
                        ? t.name
                        : j.intl.formatToPlainString(i.interval === sO.WT.MONTH ? j.t.rCJvqo : j.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: i.intervalCount,
                          })),
            (0, E.jsx)("div", { className: cD.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, E.jsxs)(lH.A, {
            justify: lH.A.Justify.BETWEEN,
            align: lH.A.Align.CENTER,
            className: cD.pe,
            children: [
                (0, E.jsx)(ee.E, { variant: "text-md/normal", children: j.intl.string(j.t.lELyPj) }),
                (0, E.jsx)(eD.$, {
                    variant: "primary",
                    size: "sm",
                    text: j.intl.string(j.t.Q3Qguo),
                    loading: this.state.isCreating,
                    onClick: this.handleGenerateGiftCode,
                }),
            ],
        });
    }
    setIsHovered(e) {
        this.setState({ isHovered: e });
    }
    render() {
        let {
                entitlements: e,
                application: t,
                giftCodes: i,
                className: n,
                sku: s,
                isFetching: l,
                hideCodes: r,
            } = this.props,
            { isOpen: a } = this.state;
        return (0, E.jsxs)(cN, {
            className: n,
            children: [
                (0, E.jsx)($.D, {
                    onClick: this.handleToggleOpen,
                    className: cD.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, E.jsx)(cN.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, E.jsxs)("div", {
                            className: cD.MY,
                            children: [
                                (0, E.jsxs)(lH.A, {
                                    align: lH.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, E.jsxs)("div", {
                                            className: cD.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, E.jsx)(cO.A, {
                                    direction: a ? cO.A.Directions.UP : cO.A.Directions.DOWN,
                                    className: cD.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, E.jsx)(cN.Body, {
                          children: l
                              ? (0, E.jsx)(dr.y, { className: cD.u1 })
                              : (0, E.jsxs)(S.Fragment, {
                                    children: [
                                        i.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        i.map((e) => (0, E.jsx)(cP, { giftCode: e, sku: s, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let cM = g.Ay.connectStores([cj.A, ek.A, cv.A, x.A, cy.A, cb.default], (e) => {
    let { skuId: t, subscriptionPlanId: i, giftStyle: n } = e,
        s = cj.A.get(t);
    if (null == s) throw Error("SKU was unavailable while rendering gift.");
    let l = cv.A.getForGifterSKUAndPlan(cb.default.getId(), t, i)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === n);
    return {
        sku: s,
        hideCodes: ek.A.enabled,
        isFetching: cv.A.getUserGiftCodesFetchingForSKUAndPlan(t, i),
        loadedAt: cv.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, i),
        application: x.A.getApplication(s.applicationId),
        subscriptionPlan: null != i ? (0, cL.c9)(i) : null,
        giftCodes: l,
    };
})(cG);
var cU = i(928661);
function cV(e) {
    let { redesign: t = !1 } = e,
        i = (0, g.yK)([cS.A], () => cS.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null != t;
        }),
        n = (0, g.bG)([ir.default], () => ul.Ay.isPremiumExactly(ir.default.getCurrentUser(), sO.PremiumTypes.TIER_2)),
        s = (0, g.bG)([ir.default], () => !ul.Ay.isPremium(ir.default.getCurrentUser())),
        {
            activeOutboundPromotions: l,
            claimedEndedOutboundPromotions: r,
            claimedOutboundPromotionCodeMap: a,
        } = (0, d6.y7)(),
        o = i.find((e) => e.giftCodeBatchId === sO.FB && !e.consumed),
        u = i.filter((e) => e.giftCodeBatchId === sO.Bu && !e.consumed) ?? [],
        [d, c] = eK().partition(u, (e) => {
            let { subscriptionPlanId: t } = e;
            return t === sO.gD.PREMIUM_YEAR_TIER_2;
        }),
        m = l.length + r.length > 0,
        A =
            t || !m
                ? null
                : (0, E.jsxs)("div", {
                      className: cU.N1,
                      children: [
                          (0, E.jsx)(eL.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.wFsj3B) }),
                          (0, E.jsx)(eP.c, { className: cU.yF }),
                      ],
                  }),
        h =
            s && m
                ? (0, E.jsxs)("div", {
                      className: cU.uo,
                      children: [
                          (0, E.jsx)(o5.t, {
                              size: "md",
                              color: ei.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: cU.PC,
                          }),
                          (0, E.jsx)(ee.E, {
                              variant: "text-md/normal",
                              className: cU.Qw,
                              children: j.intl.format(j.t.G4fwxK, {
                                  onClick: () => {
                                      (0, sC.default)(), (0, sk.pX)(eg.BVt.APPLICATION_STORE);
                                  },
                              }),
                          }),
                          (0, E.jsx)(ch.A, {
                              showGradient: !0,
                              className: cU.aA,
                              subscriptionTier: sO.pe.TIER_2,
                              textOptions: { textOverride: j.intl.string(j.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
    return (0, E.jsxs)("div", {
        children: [
            A,
            (0, E.jsx)(cE.A, {
                className: cU.Yj,
                isShown: s && m,
                type: cE.i.PREMIUM,
                hasBackground: !0,
                children: (0, E.jsxs)("div", {
                    className: cU.DE,
                    children: [
                        h,
                        r.map((e) => {
                            let { code: t, promotion: i } = e;
                            return (0, E.jsx)(cB, { outboundPromotion: i, code: t, disabled: !n }, i.id);
                        }),
                        l.map((e) => (0, E.jsx)(cB, { outboundPromotion: e, code: a[e.id], disabled: !n }, e.id)),
                        null != o
                            ? (0, E.jsx)(
                                  cM,
                                  {
                                      skuId: o.skuId,
                                      subscriptionPlanId: o.subscriptionPlanId,
                                      entitlements: [o],
                                      giftCodeBatchId: sO.FB,
                                  },
                                  (0, ct.Kx)(o.skuId, o.subscriptionPlanId),
                              )
                            : null,
                        d.length > 0
                            ? (0, E.jsx)(
                                  cM,
                                  {
                                      skuId: d[0].skuId,
                                      subscriptionPlanId: d[0].subscriptionPlanId,
                                      entitlements: d,
                                      giftCodeBatchId: sO.Bu,
                                  },
                                  (0, ct.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                        c.length > 0
                            ? (0, E.jsx)(
                                  cM,
                                  {
                                      skuId: c[0].skuId,
                                      subscriptionPlanId: c[0].subscriptionPlanId,
                                      entitlements: c,
                                      giftCodeBatchId: sO.Bu,
                                  },
                                  (0, ct.Kx)(c[0].skuId, c[0].subscriptionPlanId),
                              )
                            : null,
                    ],
                }),
            }),
        ],
    });
}
var ck = i(339048);
function cw() {
    let e = (0, g.yK)([cS.A], () => cS.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        t = eK().groupBy(e, (e) => (0, ct.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [i, n] = S.useState(!1);
    if (
        (S.useEffect(() => {
            ss.h.wait(() => {
                (0, ck.XJ)().then(() => n(!0));
            });
        }, []),
        !i)
    )
        return (0, E.jsx)(dr.y, { className: cU.Lq });
    if (0 === Object.keys(t).length)
        return (0, E.jsxs)("div", {
            className: cU.p$,
            children: [
                (0, E.jsx)("div", { className: cU.QT }),
                (0, E.jsx)(cr.H, { className: cU.ks, children: j.intl.string(j.t.B1qgZn) }),
                (0, E.jsx)("p", {
                    className: cU.WO,
                    children: j.intl.format(j.t.HezvJ8, {
                        onClick: function () {
                            (0, eY.openUserSettings)(u.X.NITRO_PANEL);
                        },
                    }),
                }),
            ],
        });
    let s = eK()
        .keys(t)
        .map((e) => {
            let { skuId: i, subscriptionPlanId: n, giftStyle: s } = (0, ct.X6)(e);
            return (0, E.jsx)(cM, { skuId: i, subscriptionPlanId: n, entitlements: t[e], giftStyle: s }, e);
        });
    return (0, E.jsx)(K.B, { gap: "lg", children: s });
}
function cB(e) {
    let t,
        { outboundPromotion: i, code: n, disabled: s } = e,
        [l, r] = S.useState(!1),
        [a, o] = S.useState(!1),
        u = () => r((e) => !e),
        d = (0, ca.Ay)(),
        c = (0, cd.WD)(i.id, d),
        g = null != n,
        m = S.useMemo(
            () =>
                (0, rk.i$)(
                    g
                        ? null != i.outboundRedemptionEndDate
                            ? rV()(i.outboundRedemptionEndDate)
                            : rV()(i.endDate).add(cu)
                        : rV()(i.endDate),
                    "LL",
                ),
            [i, g],
        );
    g && l
        ? (t = j.intl.format(j.t.pkxVx6, { endDate: m, onClickDetails: u }))
        : g && !l
          ? (t = j.intl.format(j.t["4sFeob"], { endDate: m, onClickDetails: u }))
          : !g && l
            ? (t = j.intl.format(j.t["RBnE+l"], { endDate: m, onClickDetails: u }))
            : g || l || (t = j.intl.format(j.t["57+7Qn"], { endDate: m, onClickDetails: u }));
    let A = g ? j.intl.string(j.t["2cHUti"]) : j.intl.string(j.t.O13yhz),
        h = S.useCallback(() => o(!1), []),
        { outboundTitle: T, outboundTermsAndConditions: x } = i;
    return (0, E.jsxs)(E.Fragment, {
        children: [
            (0, E.jsxs)("div", {
                className: cU.AX,
                children: [
                    (0, E.jsxs)("div", {
                        className: cU.gE,
                        children: [
                            (0, E.jsxs)("div", {
                                className: cU.At,
                                children: [
                                    (0, E.jsx)("div", {
                                        className: cU.$G,
                                        children: (0, E.jsx)("img", { alt: "", src: c, className: cU.IJ }),
                                    }),
                                    (0, E.jsxs)("div", {
                                        children: [
                                            (0, E.jsx)(eL.D, { variant: "heading-md/semibold", children: T }),
                                            (0, E.jsx)(ee.E, {
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                children: t,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            !s && (0, E.jsx)(eD.$, { text: A, onClick: () => o(!0), disabled: s, size: "sm" }),
                        ],
                    }),
                    l &&
                        (0, E.jsx)(ee.E, {
                            className: cU.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: co.A.parse(x, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            a &&
                (0, E.jsx)(cl.aF, {
                    renderModal: (e) =>
                        (0, E.jsx)(cA, {
                            ...e,
                            onClose: h,
                            onClaim: d3.Ay.addClaimedOutboundPromotionCode,
                            code: n,
                            outboundPromotion: i,
                        }),
                    onCloseRequest: h,
                }),
        ],
    });
}
let cF = (0, a.E2)(u.X.GIFT_INVENTORY_LIST_SETTING, {
    Component: function () {
        return (0, E.jsxs)(K.B, {
            gap: "md",
            children: [
                (0, E.jsx)(cV, {}),
                (0, E.jsx)("div", {
                    className: cU.N1,
                    children: (0, E.jsxs)(cr.F, {
                        component: (0, E.jsx)(eL.D, {
                            variant: "heading-md/semibold",
                            children: j.intl.string(j.t["9KeUbY"]),
                        }),
                        children: [(0, E.jsx)(eP.c, { className: cU.yF }), (0, E.jsx)(cw, {})],
                    }),
                }),
            ],
        });
    },
    usePredicate: () => !(0, d4.Hp)(),
    useSearchTerms: () => [j.intl.string(j.t["jcSP+g"]), j.intl.string(j.t["9KeUbY"])],
});
var cz = i(89366),
    cY = i(881489),
    cX = i(374200),
    cH = i(354670);
let cK = (0, a.zZ)(u.X.MY_GIFTS_CATEGORY, {
        useTitle: cZ,
        buildLayout: () => [cW],
        usePredicate: () => {
            let e = (0, cz.QQ)(),
                t = (0, g.bG)([cH.A], () => cH.A.hasAnyUnexpiredOffer()),
                i = (0, cY.ds)(),
                { claimedOutboundPromotionCodes: n, claimedOutboundPromotionCodesLoaded: s } = (0, g.cf)(
                    [cX.A],
                    () => ({
                        claimedOutboundPromotionCodes: cX.A.claimedOutboundPromotionCodes,
                        claimedOutboundPromotionCodesLoaded: cX.A.claimedOutboundPromotionCodesLoaded,
                    }),
                ),
                l = (0, cd.eN)(n),
                r = (0, d6.T1)(e, t, i, l),
                a = (0, cd.Wl)(n, r).length;
            return s && r.length + a > 0;
        },
    }),
    cW = (0, a.E2)(u.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [cZ()],
        Component: () => (0, E.jsx)(cV, { redesign: !0 }),
    });
function cZ() {
    return (0, o.ri)("MyGifts") ? j.intl.string(j.t.YzjdWJ) : j.intl.string(j.t.wFsj3B);
}
let cq = (0, a.zZ)(u.X.PURCHASED_GIFTS_CATEGORY, { useTitle: cJ, buildLayout: () => [cQ] }),
    cQ = (0, a.E2)(u.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [cJ()], Component: () => (0, E.jsx)(cw, {}) });
function cJ() {
    return (0, o.ri)("PurchasedGifts") ? j.intl.string(j.t.FWe6CP) : j.intl.string(j.t["9KeUbY"]);
}
let c$ = (0, a.zZ)(u.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => j.intl.string(j.t["il+VCo"]),
        buildLayout: () => [c0],
        usePredicate: () => !(0, d4.Hp)(),
    }),
    c0 = (0, a.E2)(u.X.REDEEM_CODE_INPUT, {
        Component: () => (0, E.jsx)(cn, { redesign: !0 }),
        useSearchTerms: () => [j.intl.string(j.t["jcSP+g"]), j.intl.string(j.t["il+VCo"])],
    }),
    c1 = (0, a.zZ)(u.X.GIFT_INVENTORY_LEGACY_CATEGORY, { buildLayout: () => [cs, cF, d5] }),
    c2 = (0, a.t_)(u.X.GIFT_PANEL, {
        useTitle: c6,
        buildLayout: () => ((0, o.SB)("GiftPanel") ? [c$, cK, cq, d7] : [c1]),
        initialize: () => {
            (0, o.SB)("GiftPanel") && d3.Ay.fetchClaimedOutboundPromotionCodes();
        },
    }),
    c3 = (0, a.i4)(u.X.GIFT_SIDEBAR_ITEM, {
        useTitle: c6,
        icon: d2.o,
        usePersistentBadge: function () {
            return S.useMemo(() => ({ badgeType: h.Xi.COUNT, useCount: () => (0, d6.IO)().length }), []);
        },
        buildLayout: () => [c2],
    });
function c6() {
    return (0, o.ri)("GiftPanel") ? j.intl.string(j.t.QvIFi0) : j.intl.string(j.t["jcSP+g"]);
}
var c4 = i(659758),
    c5 = i(102581),
    c7 = i(815846);
let c8 = (0, a.E2)(u.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, g.bG)([ir.default], () => ir.default.getCurrentUser());
            return (0, ul.YE)(e, sO.PremiumTypes.TIER_2) ? (0, E.jsx)(c7.A, {}) : (0, E.jsx)(c5.A, {});
        },
        useSearchTerms: () => [j.intl.string(j.t.Ipxkog)],
    }),
    c9 = (0, a.zZ)(u.X.NITRO_CATEGORY, { buildLayout: () => [c8] }),
    ge = (0, a.t_)(u.X.NITRO_PANEL, {
        useTitle: () => j.intl.string(j.t.Ipxkog),
        useObscuredNotice: dn.L,
        buildLayout: () => [c9],
    }),
    gt = (0, a.i4)(u.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.Ipxkog),
        icon: o5.t,
        usePersistentBadge: function (e) {
            return S.useMemo(
                () => ({ badgeType: h.Xi.STRONGLY_DISCOURAGED_CUSTOM, useCustomBadge: () => (0, c4.e)(e) }),
                [e],
            );
        },
        buildLayout: () => [ge],
    });
var gi = i(104510),
    gn = i(820739),
    gs = i(73825),
    gl = i(160946);
let gr = (0, i(240921).Ay)({
    name: "2026-03-boosting-settings-refresh",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var ga = i(859241),
    go = i(531260),
    gu = i(369163),
    gd = i(957485),
    gc = i(926268),
    gg = i(106529),
    gm = i(93364);
function gA(e) {
    let { className: t, icon: i, children: n } = e;
    return (0, E.jsxs)("li", {
        className: e2()(gg.Nr, t),
        children: [
            (0, E.jsx)(i, { className: gg.Kk }),
            (0, E.jsx)(ee.E, { className: gg.__invalid_description, variant: "text-sm/medium", children: n }),
        ],
    });
}
let gh = function (e) {
    let { cardClassName: t } = e;
    return (0, E.jsxs)("div", {
        className: gg.iE,
        children: [
            (0, E.jsxs)("div", {
                className: gg.Qs,
                children: [
                    (0, E.jsx)(eL.D, {
                        className: gg.R_,
                        color: "always-white",
                        variant: "heading-xxl/bold",
                        children: j.intl.string(j.t.IzKs3o),
                    }),
                    (0, E.jsxs)("ul", {
                        className: gg.kR,
                        children: [
                            (0, E.jsx)(gA, { className: t, icon: gu.v, children: j.intl.string(j.t.TZigSO) }),
                            (0, E.jsx)(gA, {
                                className: t,
                                icon: (e) =>
                                    (0, E.jsx)("img", { className: e2()(e.className, gg.Dp), src: gm, alt: "" }),
                                children: j.intl.string(j.t.hjQuV2),
                            }),
                            (0, E.jsx)(gA, { className: t, icon: gd.i, children: j.intl.string(j.t["2RUcaM"]) }),
                            (0, E.jsx)(gA, { className: t, icon: gc.C, children: j.intl.string(j.t.bJoZKV) }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)("div", { className: gg.JP }),
        ],
    });
};
var gE = i(834040),
    gS = i(811227);
let gT = [
        { getQuestion: () => j.intl.string(j.t.C4J8UB), getAnswer: () => j.intl.string(j.t.nhkk6k) },
        {
            getQuestion: () => j.intl.string(j.t.ai4ym2),
            getAnswer: () =>
                j.intl.format(j.t["8zlqlD"], { helpCenterUrl: tp.A.getArticleURL(eg.MVz.GUILD_BOOSTING_FAQ) }),
        },
        { getQuestion: () => j.intl.string(j.t.kMVGsC), getAnswer: () => j.intl.string(j.t["Vz/SCQ"]) },
        { getQuestion: () => j.intl.string(j.t.kYmXWF), getAnswer: () => j.intl.string(j.t["+OURPp"]) },
        { getQuestion: () => j.intl.string(j.t["LsX/vb"]), getAnswer: () => j.intl.string(j.t["3TeauK"]) },
        { getQuestion: () => j.intl.string(j.t.fRlnXU), getAnswer: () => j.intl.string(j.t.bTRacj) },
        { getQuestion: () => j.intl.string(j.t["8Mu5Q9"]), getAnswer: () => j.intl.string(j.t["2T5iPo"]) },
        { getQuestion: () => j.intl.string(j.t["6EN+TZ"]), getAnswer: () => j.intl.string(j.t.NZax1u) },
        { getQuestion: () => j.intl.string(j.t.f5B4EW), getAnswer: () => j.intl.string(j.t.Aje8Pb) },
    ],
    gx = function (e) {
        let { className: t } = e,
            [i, n] = S.useState(null);
        return (0, E.jsxs)("div", {
            className: e2()(gS.iE, t),
            children: [
                (0, E.jsx)(eL.D, {
                    className: gS.R_,
                    variant: "heading-xxl/bold",
                    children: j.intl.string(j.t.HPJ6Nj),
                }),
                (0, E.jsx)("ul", {
                    className: gS.p_,
                    children: gT.map((e, t) => {
                        let s = i === t;
                        return (0, E.jsxs)(
                            "div",
                            {
                                className: gS.Aw,
                                children: [
                                    (0, E.jsxs)($.D, {
                                        className: e2()(gS.k7, { [gS.lo]: s }),
                                        onClick: () => n((e) => (e === t ? null : t)),
                                        tag: "li",
                                        children: [
                                            (0, E.jsx)(ee.E, {
                                                className: gS.b1,
                                                variant: "text-lg/normal",
                                                children: e.getQuestion(),
                                            }),
                                            s
                                                ? (0, E.jsx)(gE.Q, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: gS.q4,
                                                  })
                                                : (0, E.jsx)(ar.j, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: gS.q4,
                                                  }),
                                        ],
                                    }),
                                    s &&
                                        (0, E.jsx)(ee.E, {
                                            className: gS.ZF,
                                            color: "text-default",
                                            variant: "text-md/normal",
                                            children: e.getAnswer(),
                                        }),
                                ],
                            },
                            t,
                        );
                    }),
                }),
            ],
        });
    };
var gp = i(462887),
    gf = i(933832),
    gN = i(789645),
    g_ = i(116891),
    gI = i(416676);
let gC = [
    {
        getPerkHeading: () => j.intl.string(j.t.tIiwuj),
        getPerkPreviewLightTheme: () => i(604203),
        getPerkPreviewDarkTheme: () => i(878515),
        getTier0Value: () => sO.TG[eg.TVA.NONE].limits.emoji,
        getTier1Value: () => sO.TG[eg.TVA.TIER_1].limits.emoji,
        getTier2Value: () => sO.TG[eg.TVA.TIER_2].limits.emoji,
        getTier3Value: () => sO.TG[eg.TVA.TIER_3].limits.emoji,
    },
    {
        getPerkHeading: () => j.intl.string(j.t["3iccet"]),
        getPerkPreviewLightTheme: () => i(105732),
        getPerkPreviewDarkTheme: () => i(857020),
        getTier0Value: () => sO.TG[eg.TVA.NONE].limits.stickers,
        getTier1Value: () => sO.TG[eg.TVA.TIER_1].limits.stickers,
        getTier2Value: () => sO.TG[eg.TVA.TIER_2].limits.stickers,
        getTier3Value: () => sO.TG[eg.TVA.TIER_3].limits.stickers,
    },
    {
        getPerkHeading: () => j.intl.string(j.t["+smCv9"]),
        getPerkPreviewLightTheme: () => i(597890),
        getPerkPreviewDarkTheme: () => i(297642),
        getTier0Value: () => sO.TG[eg.TVA.NONE].limits.soundboardSounds,
        getTier1Value: () => sO.TG[eg.TVA.TIER_1].limits.soundboardSounds,
        getTier2Value: () => sO.TG[eg.TVA.TIER_2].limits.soundboardSounds,
        getTier3Value: () => sO.TG[eg.TVA.TIER_3].limits.soundboardSounds,
    },
    {
        getPerkHeading: () => j.intl.string(j.t.SMYauD),
        getPerkPreviewLightTheme: () => i(323091),
        getPerkPreviewDarkTheme: () => i(261835),
        getTier0Value: () =>
            j.intl.formatToPlainString(j.t.zZ6Rdi, {
                resolution: sO.TG[eg.TVA.NONE].limits.screenShareQualityResolution,
                framerate: sO.TG[eg.TVA.NONE].limits.screenShareQualityFramerate,
            }),
        getTier1Value: () =>
            j.intl.formatToPlainString(j.t.zZ6Rdi, {
                resolution: sO.TG[eg.TVA.TIER_1].limits.screenShareQualityResolution,
                framerate: sO.TG[eg.TVA.TIER_1].limits.screenShareQualityFramerate,
            }),
        getTier2Value: () =>
            j.intl.formatToPlainString(j.t.zZ6Rdi, {
                resolution: (0, g_.eT)("GuildBoostingMarketingTierComparisonTable"),
                framerate: sO.TG[eg.TVA.TIER_2].limits.screenShareQualityFramerate,
            }),
        getTier3Value: () =>
            j.intl.formatToPlainString(j.t.zZ6Rdi, {
                resolution: (0, g_.eT)("GuildBoostingMarketingTierComparisonTable"),
                framerate: sO.TG[eg.TVA.TIER_3].limits.screenShareQualityFramerate,
            }),
    },
    {
        getPerkHeading: () => j.intl.string(j.t["/79IDj"]),
        getPerkPreviewLightTheme: () => i(913997),
        getPerkPreviewDarkTheme: () => i(95781),
        getTier0Value: () =>
            j.intl.formatToPlainString(j.t.w1gmLt, { bitrate: sO.TG[eg.TVA.NONE].limits.bitrate / 1e3 }),
        getTier1Value: () =>
            j.intl.formatToPlainString(j.t.w1gmLt, { bitrate: sO.TG[eg.TVA.TIER_1].limits.bitrate / 1e3 }),
        getTier2Value: () =>
            j.intl.formatToPlainString(j.t.w1gmLt, { bitrate: sO.TG[eg.TVA.TIER_2].limits.bitrate / 1e3 }),
        getTier3Value: () =>
            j.intl.formatToPlainString(j.t.w1gmLt, { bitrate: sO.TG[eg.TVA.TIER_3].limits.bitrate / 1e3 }),
    },
    {
        getPerkHeading: () => j.intl.string(j.t.R1U2xC),
        getPerkPreviewLightTheme: () => i(389833),
        getPerkPreviewDarkTheme: () => i(754561),
        getTier0Value: () =>
            j.intl.formatToPlainString(j.t.pIn7Af, { size: sO.TG[eg.TVA.NONE].limits.fileSize / 1048576 }),
        getTier1Value: () =>
            j.intl.formatToPlainString(j.t.pIn7Af, { size: sO.TG[eg.TVA.TIER_1].limits.fileSize / 1048576 }),
        getTier2Value: () =>
            j.intl.formatToPlainString(j.t.pIn7Af, { size: sO.TG[eg.TVA.TIER_2].limits.fileSize / 1048576 }),
        getTier3Value: () =>
            j.intl.formatToPlainString(j.t.pIn7Af, { size: sO.TG[eg.TVA.TIER_3].limits.fileSize / 1048576 }),
    },
    {
        getPerkHeading: () => j.intl.string(j.t.f6vfso),
        getPerkPreviewLightTheme: () => i(735669),
        getPerkPreviewDarkTheme: () => i(283517),
        getTier0Value: () => sO.TG[eg.TVA.NONE].limits.stageVideoUsers,
        getTier1Value: () => sO.TG[eg.TVA.TIER_1].limits.stageVideoUsers,
        getTier2Value: () => sO.TG[eg.TVA.TIER_2].limits.stageVideoUsers,
        getTier3Value: () => sO.TG[eg.TVA.TIER_3].limits.stageVideoUsers,
    },
    {
        getPerkHeading: () => j.intl.string(j.t.qDqUME),
        getPerkPreviewLightTheme: () => i(970770),
        getPerkPreviewDarkTheme: () => i(416378),
        getTier0Value: () => !1,
        getTier1Value: () => !0,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkHeading: () => j.intl.string(j.t.uwqgbu),
        getPerkPreviewLightTheme: () => i(243580),
        getPerkPreviewDarkTheme: () => i(975940),
        getTier0Value: () => !1,
        getTier1Value: () => !0,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkHeading: () => j.intl.string(j.t.zxsDxc),
        getPerkPreviewLightTheme: () => i(435748),
        getPerkPreviewDarkTheme: () => i(978380),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => j.intl.string(j.t["2TNS3n"]),
        getTier3Value: () => j.intl.string(j.t["l+S46U"]),
    },
    {
        getPerkHeading: () => j.intl.string(j.t["bHa+Ee"]),
        getPerkPreviewLightTheme: () => i(329312),
        getPerkPreviewDarkTheme: () => i(800120),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkHeading: () => j.intl.string(j.t.QV6MZQ),
        getPerkPreviewLightTheme: () => i(463384),
        getPerkPreviewDarkTheme: () => i(481344),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => !1,
        getTier3Value: () => !0,
    },
];
function gb(e) {
    let { children: t, className: i, tier: n } = e,
        s = n === eg.TVA.NONE ? "text-muted" : "text-strong",
        l = n === eg.TVA.NONE || null == n ? "heading-xl/normal" : "heading-xl/bold";
    return (0, E.jsxs)("th", {
        className: e2()(gI.PG, i),
        scope: "col",
        children: [
            (0, E.jsx)(eL.D, { color: s, variant: l, children: t }),
            null != n &&
                (0, E.jsx)(ee.E, {
                    color: s,
                    variant: "text-md/normal",
                    children: j.intl.format(j.t["pob/cL"], { subscriptions: eg.M2T[n] }),
                }),
        ],
    });
}
function gv(e) {
    let t,
        { className: i, textVariant: n = "text-md/bold", value: s } = e;
    if ("boolean" == typeof s) {
        let e = e2()(gI.Jk, { [gI.I$]: s });
        t = s
            ? (0, E.jsx)(gf.A, { size: "md", color: "currentColor", className: e })
            : (0, E.jsx)(gN.P, { size: "md", color: "currentColor", className: e });
    } else t = (0, E.jsx)(ee.E, { color: "interactive-text-active", variant: n, children: s });
    return (0, E.jsx)("td", { className: e2()(gI.xR, i), children: t });
}
function gy(e) {
    let { currentTier: t } = e,
        i = (function (e) {
            switch (e) {
                case eg.TVA.NONE:
                case eg.TVA.TIER_1:
                    return eg.TVA.TIER_2;
                case eg.TVA.TIER_2:
                case eg.TVA.TIER_3:
                    return eg.TVA.TIER_3;
                default:
                    return null;
            }
        })(t);
    return null == i
        ? null
        : (0, E.jsx)("div", {
              className: e2()(gI.ER, { [gI.GH]: i === eg.TVA.TIER_2, [gI.z5]: i === eg.TVA.TIER_3 }),
              children: (0, E.jsx)(ee.E, {
                  className: gI.uQ,
                  color: "always-white",
                  variant: "text-xs/bold",
                  children: t === eg.TVA.TIER_3 ? j.intl.string(j.t.d849Up) : j.intl.string(j.t.dZeX1z),
              }),
          });
}
function gj(e) {
    let { isFocused: t, handleFocus: i, handleRowBlur: n, theme: s, row: l, hideTier0: r } = e,
        a = S.useRef(null);
    return (0, E.jsxs)("tr", {
        className: gI.__invalid_tableRow,
        children: [
            (0, E.jsx)("th", {
                className: e2()(gI.xR, gI.uB),
                scope: "row",
                children: (0, E.jsx)($.D, {
                    className: e2()(gI.VC, gI.xR, gI.Rk),
                    onFocus: i,
                    onBlur: n,
                    onMouseEnter: i,
                    onMouseLeave: n,
                    children: (0, E.jsx)(q.Y, {
                        targetElementRef: a,
                        align: "center",
                        disablePointerEvents: !0,
                        nudgeAlignIntoViewport: !0,
                        position: "bottom",
                        renderPopout: () =>
                            (0, E.jsx)("img", {
                                className: gI.Mz,
                                src: (0, gp.M)(s) ? l.getPerkPreviewDarkTheme() : l.getPerkPreviewLightTheme(),
                                alt: "",
                            }),
                        shouldShow: t,
                        spacing: 16,
                        children: () =>
                            (0, E.jsx)(ee.E, { variant: "text-md/normal", ref: a, children: l.getPerkHeading() }),
                    }),
                }),
            }),
            !r && (0, E.jsx)(gv, { textVariant: "text-md/normal", value: l.getTier0Value() }),
            (0, E.jsx)(gv, { value: l.getTier1Value() }),
            (0, E.jsx)(gv, { value: l.getTier2Value() }),
            (0, E.jsx)(gv, { value: l.getTier3Value() }),
        ],
    });
}
let gO = function (e) {
    let t = (0, ca.Ay)(),
        [i, n] = S.useState(null),
        { className: s, guild: l, hideHeading: r, hideTier0: a } = e;
    function o() {
        n(null);
    }
    return (0, E.jsxs)("div", {
        className: s,
        children: [
            !r &&
                (0, E.jsx)(eL.D, {
                    className: gI.R_,
                    variant: "heading-xxl/extrabold",
                    children: j.intl.string(j.t["9GGb9k"]),
                }),
            (0, E.jsxs)("div", {
                className: gI.wY,
                children: [
                    null != l && (0, E.jsx)(gy, { currentTier: l.premiumTier }),
                    (0, E.jsxs)("table", {
                        className: gI.tp,
                        cellPadding: 0,
                        cellSpacing: 0,
                        children: [
                            (0, E.jsx)("thead", {
                                children: (0, E.jsxs)("tr", {
                                    className: gI.__invalid_tableRow,
                                    children: [
                                        (0, E.jsx)(gb, { className: gI.VC, children: j.intl.string(j.t.F5MY0k) }),
                                        !a &&
                                            (0, E.jsx)(gb, { tier: eg.TVA.NONE, children: j.intl.string(j.t.mx8j2m) }),
                                        (0, E.jsx)(gb, { tier: eg.TVA.TIER_1, children: j.intl.string(j.t.nzXtaS) }),
                                        (0, E.jsx)(gb, { tier: eg.TVA.TIER_2, children: j.intl.string(j.t["h33/uW"]) }),
                                        (0, E.jsx)(gb, { tier: eg.TVA.TIER_3, children: j.intl.string(j.t.BfF6ED) }),
                                    ],
                                }),
                            }),
                            (0, E.jsx)("tbody", {
                                className: gI.__invalid_tableBody,
                                children: gC.map((e, s) => {
                                    let l = i === s;
                                    return void 0 === e.predicate
                                        ? (0, E.jsx)(
                                              gj,
                                              {
                                                  isFocused: l,
                                                  handleFocus: function () {
                                                      n(s);
                                                  },
                                                  handleRowBlur: o,
                                                  theme: t,
                                                  row: e,
                                                  hideTier0: a,
                                              },
                                              s,
                                          )
                                        : null;
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
var gR = i(338548),
    gL = i(776096),
    gD = i(178368),
    gP = i(873174),
    gG = i(866323),
    gM = i(530005),
    gU = i(443865),
    gV = i(473145);
function gk(e) {
    let {
            guildBoostSlot: t,
            onClose: n,
            hasCancelableGuildBoostSlot: s,
            premiumSubscription: l,
            onSelect: r,
            fractionalState: a,
        } = e,
        o = {
            transfer: {
                label: null != t.premiumGuildSubscription ? j.intl.string(j.t["PR0n//"]) : j.intl.string(j.t["+fmEYG"]),
                subtext: t.isOnCooldown() ? j.intl.string(j.t.XnB8M0) : null,
                disabled: t.isOnCooldown(),
            },
            cancel: { label: j.intl.string(j.t.twFU3R), subtext: s ? null : j.intl.string(j.t.oQ9lOh), disabled: !s },
            uncancel: { label: j.intl.string(j.t["2glQNp"]), subtext: null, disabled: !1 },
        };
    switch (l.status) {
        case eg.Dmq.PAST_DUE:
            (o.cancel.disabled = !0), (o.cancel.subtext = j.intl.string(j.t.WnL6DV)), (o.uncancel.disabled = !0);
            break;
        case eg.Dmq.PAUSE_PENDING:
        case eg.Dmq.PAUSED:
            a === sO.xc.NONE &&
                ((o.transfer.disabled = !0),
                (o.transfer.subtext = j.intl.string(j.t.LiLRRT)),
                (o.cancel.subtext = j.intl.string(j.t["1ywaWL"])),
                (o.cancel.disabled = !0),
                (o.uncancel.disabled = !0));
    }
    let d = S.useMemo(
        () =>
            l.isPausedOrPausePending && a === sO.xc.NONE
                ? (0, E.jsx)(J.Dr, {
                      id: "manage-subscription",
                      label: j.intl.string(j.t.obRG6Y),
                      action: () => (0, eY.openUserSettings)(u.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: gU.x,
                      leadingAccessory: { type: "icon", icon: gU.x },
                  })
                : null,
        [a, l],
    );
    return (0, E.jsxs)(Q.W, {
        "data-menu-migrated-auto": !0,
        onSelect: r,
        navId: "subscription-context",
        variant: "fixed",
        "aria-label": j.intl.string(j.t.ogxXGq),
        onClose: n,
        children: [
            (0, E.jsx)(J.Dr, {
                id: "apply",
                label: o.transfer.label,
                subtext: o.transfer.subtext,
                action: function () {
                    (0, z.openModalLazy)(async () => {
                        let { default: e } = await Promise.resolve().then(i.bind(i, 724624));
                        return (i) =>
                            (0, E.jsx)(e, { ...i, guildBoostSlots: [t], locationSection: eg.JJy.SETTINGS_PREMIUM });
                    });
                },
                disabled: o.transfer.disabled,
            }),
            (0, gV.I5)(t)
                ? (0, E.jsx)(J.Dr, {
                      id: "uncancel",
                      label: o.uncancel.label,
                      subtext: o.uncancel.subtext,
                      action: function () {
                          (0, z.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(i.bind(i, 342744));
                              return (i) => (0, E.jsx)(e, { ...i, guildBoostSlotId: t.id });
                          });
                      },
                      disabled: o.uncancel.disabled,
                  })
                : (0, E.jsx)(J.Dr, {
                      id: "cancel",
                      label: o.cancel.label,
                      subtext: o.cancel.subtext,
                      action: function () {
                          (0, z.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(i.bind(i, 983511));
                              return (i) => (0, E.jsx)(e, { ...i, guildBoostSlot: t });
                          });
                      },
                      disabled: o.cancel.disabled,
                      color: "danger",
                  }),
            d,
        ],
    });
}
var gw = i(545934),
    gB = i(496431);
let gF = function (e) {
    let { className: t, cooldown: i } = e,
        n = (0, gB.A)(i);
    return (0, E.jsx)(ee.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, rk.uN)(n, { days: j.t.WUTPDc, hours: j.t.c1qodV, minutes: j.t["2+A3dv"] }),
    });
};
var gz = i(482900);
let gY = function (e) {
    let { className: t, imageClassName: n, boostInCooldown: s, useReducedMotion: l } = e;
    return (0, E.jsx)("div", {
        className: e2()(gz.h4, t, { [gz.K2]: s }),
        children: (0, E.jsx)("img", {
            className: e2()(gz.Sl, n, { [gz.x8]: s }),
            src: s
                ? i(650442)
                : l
                  ? i(742885)
                  : "https://cdn.discordapp.com/assets/content/86fd98fc22283647a8be93d0c503646b53c84e3cb25ca6562a38cecb84327e58.gif",
            alt: "",
        }),
    });
};
var gX = i(583032);
let gH = function (e) {
    let { className: t, hasCooldown: n, isCanceled: s, useReducedMotion: l } = e;
    return (0, E.jsxs)("div", {
        className: e2()(gX.sn, t),
        children: [
            s
                ? (0, E.jsx)("img", { className: e2()(gX.$J, gX.qX), src: i(728707), alt: "" })
                : (0, E.jsx)(gY, { className: gX.$J, boostInCooldown: n, useReducedMotion: l }),
            !s && n && (0, E.jsx)("img", { className: gX.De, src: i(438807), alt: "" }),
        ],
    });
};
var gK = i(548118),
    gW = i(509536),
    gZ = i(944304),
    gq = i(864310),
    gQ = i(245390);
let gJ = function (e) {
    let { className: t, guildId: i, boostingVariant: n } = e,
        s = (0, uQ.bG)([eo.A], () => eo.A.getGuild(i), [i]),
        l = (0, gq.A)(s?.id).total;
    return null == s
        ? (0, E.jsx)("div", {
              className: e2()(t, gQ.bo),
              children: (0, E.jsx)("div", {
                  className: gQ.$g,
                  children: (0, E.jsx)(ee.E, { variant: "text-lg/bold", children: j.intl.string(j.t["6Kwwuo"]) }),
              }),
          })
        : (0, E.jsxs)("div", {
              className: e2()(t, gQ.bo),
              children: [
                  (0, E.jsx)(gK.Ay, { className: gQ.__invalid_guildIcon, guild: s, size: gK.Ay.Sizes.LARGER }),
                  (0, E.jsxs)("div", {
                      className: gQ.$g,
                      children: [
                          (0, E.jsx)(ee.E, { variant: "text-lg/bold", children: s.name }),
                          (0, E.jsxs)("div", {
                              className: gQ.TZ,
                              children: [
                                  (0, E.jsx)(gi._, {
                                      color: ei.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                      className: gQ.Me,
                                  }),
                                  (0, E.jsx)(ee.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: j.intl.format(j.t["pob/cL"], { subscriptions: l }),
                                  }),
                                  (0, E.jsx)("div", { className: gQ.me }),
                                  (0, E.jsx)(ee.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: (0, gV.gb)(s.premiumTier, { useLevels: !1 }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  n
                      ? (0, E.jsx)(gZ.A, {
                            guild: s,
                            analyticsLocation: {
                                page: eg.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                section: eg.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                object: eg.ZSU.BUTTON_CTA,
                                objectType: eg.AnalyticsObjectTypes.BUY,
                            },
                            pauseAnimation: !0,
                            size: aZ.$n.Sizes.MEDIUM,
                            color: aZ.$n.Colors.PRIMARY,
                            buttonText: j.intl.string(j.t.aBHecF),
                        })
                      : (0, E.jsx)(eD.$, {
                            variant: "secondary",
                            text: j.intl.string(j.t.KLOhbO),
                            onClick: () => {
                                (0, sC.default)(),
                                    (0, gW.K4)({
                                        guildId: s.id,
                                        location: {
                                            section: eg.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA,
                                        },
                                    });
                            },
                        }),
              ],
          });
};
var g$ = i(85566);
function g0(e) {
    let {
            guildTier: t,
            guildBoostSlot: i,
            showAltText: n,
            isCanceled: s,
            premiumSubscription: l,
            fractionalPremiumInfo: r,
        } = e,
        a = S.useMemo(() => {
            if (s) {
                let e = l.currentPeriodEnd;
                return (
                    l.isPausedForFractionalPremium && (e = r.endsAt.toDate()), j.intl.format(j.t.Z4ULRD, { date: e })
                );
            }
            let e = null != i.premiumGuildSubscription ? dT.default.extractTimestamp(i.premiumGuildSubscription.id) : 0;
            return j.intl.formatToPlainString(j.t.lY2Bur, { date: new Date(e) });
        }, [i, s, l, r]),
        o = S.useMemo(
            () =>
                (function (e) {
                    if (null == e || e === eg.TVA.NONE) return "";
                    let t = [
                        j.intl.formatToPlainString(j.t["dLlKX/"], { numEmojiSlots: sO.TG[e].limits.emoji }),
                        j.intl.formatToPlainString(j.t["+ANIfv"], { numStickerSlots: sO.TG[e].limits.stickers }),
                        j.intl.formatToPlainString(j.t["4gt60b"], {
                            numSoundboardSlots: sO.TG[e].limits.soundboardSounds,
                        }),
                        j.intl.formatToPlainString(j.t.XahSjZ, {
                            resolution: sO.TG[e].limits.screenShareQualityResolution,
                            framerate: sO.TG[e].limits.screenShareQualityFramerate,
                        }),
                        j.intl.formatToPlainString(j.t.NbNs7S, { bitrate: sO.TG[e].limits.bitrate / 1e3 }),
                        j.intl.formatToPlainString(j.t.VVKcpn, { filesize: sO.TG[e].limits.fileSize / 1024 / 1024 }),
                        j.intl.formatToPlainString(j.t.TbpCvv, { numVideoStageSeats: sO.TG[e].limits.stageVideoUsers }),
                        j.intl.string(j.t.LDyX3i),
                        j.intl.string(j.t.YtGlPW),
                    ];
                    e >= eg.TVA.TIER_2 && (t.push(j.intl.string(j.t.SztbtN)), t.push(j.intl.string(j.t["3GK91n"]))),
                        e >= eg.TVA.TIER_3 && t.push(j.intl.string(j.t["XUUJd+"]));
                    let i = t[Math.floor(Math.random() * t.length)];
                    return j.intl.format(j.t["/dOAmQ"], { perk: i });
                })(t),
            [t],
        ),
        u = (0, gG.p)(n, { from: { opacity: 0 }, enter: { opacity: 1 }, leave: { opacity: 0 } }, "animate-always");
    return s || t === eg.TVA.NONE
        ? (0, E.jsx)("div", {
              className: g$.xm,
              children: (0, E.jsx)(ee.E, { variant: "text-sm/medium", color: "text-muted", children: a }),
          })
        : u((e, t) =>
              (0, E.jsx)(gP.animated.div, {
                  style: e,
                  className: g$.xm,
                  children: (0, E.jsx)(ee.E, { variant: "text-sm/medium", color: "text-muted", children: t ? o : a }),
              }),
          );
}
function g1(e) {
    let {
            guildTier: t,
            guildBoostSlot: i,
            premiumSubscription: n,
            hasCancelableGuildBoostSlot: s,
            showAltText: l,
            isLastGuildBoostSlot: r,
        } = e,
        a = (0, uQ.bG)([i6.A], () => i6.A.useReducedMotion),
        o = S.useMemo(() => (null != i.cooldownEndsAt ? new Date(i.cooldownEndsAt) : null), [i]),
        u = S.useMemo(() => null != o && o > new Date(), [o]),
        d = (0, gV.I5)(i),
        c = (0, go.A)(),
        g = S.useRef(null);
    return (0, E.jsxs)("div", {
        className: g$.PW,
        children: [
            (0, E.jsxs)("div", {
                className: g$.$U,
                children: [
                    (0, E.jsx)(gH, { isCanceled: d, hasCooldown: u, useReducedMotion: a }),
                    (0, E.jsx)("div", {
                        className: g$.vh,
                        children:
                            null != o && u && !d
                                ? (0, E.jsx)(gF, { className: g$.xm, cooldown: o.getTime() })
                                : (0, E.jsx)(g0, {
                                      guildTier: t,
                                      guildBoostSlot: i,
                                      showAltText: l,
                                      isCanceled: d,
                                      premiumSubscription: n,
                                      fractionalPremiumInfo: c,
                                  }),
                    }),
                    (0, E.jsx)(q.Y, {
                        targetElementRef: g,
                        renderPopout: function (e) {
                            let { closePopout: t } = e;
                            return (0, E.jsx)(gk, {
                                onClose: t,
                                guildBoostSlot: i,
                                premiumSubscription: n,
                                hasCancelableGuildBoostSlot: s,
                                fractionalState: c.fractionalState,
                            });
                        },
                        position: "right",
                        align: "center",
                        children: (e) =>
                            (0, E.jsx)($.D, {
                                ...e,
                                innerRef: g,
                                "aria-label": j.intl.string(j.t.PdRCRg),
                                className: g$.oU,
                                children: (0, E.jsx)(gM.F, { size: "md", color: "currentColor" }),
                            }),
                    }),
                ],
            }),
            !r && (0, E.jsx)("div", { className: g$.eX }),
        ],
    });
}
function g2(e) {
    let {
            guildId: t,
            guildBoostSlotRecords: i,
            premiumSubscription: n,
            hasCancelableGuildBoostSlot: s,
            showAltText: l,
        } = e,
        r = (0, uQ.bG)([eo.A], () => eo.A.getGuild(t), [t]);
    return (0, E.jsxs)("div", {
        className: g$.ag,
        children: [
            (0, E.jsx)(gJ, { guildId: t, boostingVariant: !1 }),
            i.map((e, t) =>
                (0, E.jsx)(
                    g1,
                    {
                        guildTier: r?.premiumTier,
                        guildBoostSlot: e,
                        premiumSubscription: n,
                        hasCancelableGuildBoostSlot: s,
                        showAltText: l,
                        isLastGuildBoostSlot: t === i.length - 1,
                    },
                    e.id,
                ),
            ),
        ],
    });
}
function g3(e) {
    let { guildId: t, appliedGuildBoosts: i, premiumSubscription: n } = e,
        s = (0, uQ.bG)([eo.A], () => eo.A.getGuild(t), [t]),
        l = dT.default.fromTimestamp(Date.now());
    if (
        (i.forEach((e) => {
            (null == l || 0 > dT.default.compare(e.id, l)) && (l = e.id);
        }),
        null == l)
    )
        return null;
    let r = gw.A.createFromServer(
        {
            id: dT.default.fromTimestamp(Date.now()),
            subscription_id: n.id,
            canceled: !1,
            premium_guild_subscription: { id: l, guild_id: t },
            cooldown_ends_at: null,
        },
        n,
    );
    return (0, E.jsxs)("div", {
        className: g$.ag,
        children: [
            (0, E.jsx)(gJ, { guildId: t, boostingVariant: !1 }),
            i.map((e, t) =>
                (0, E.jsx)(
                    g1,
                    {
                        guildTier: s?.premiumTier,
                        guildBoostSlot: r,
                        premiumSubscription: n,
                        hasCancelableGuildBoostSlot: !1,
                        showAltText: !1,
                        isLastGuildBoostSlot: t === i.length - 1,
                    },
                    t,
                ),
            ),
        ],
    });
}
function g6(e) {
    let { appliedGuildBoosts: t, premiumSubscription: i } = e,
        n = S.useMemo(() => {
            let e = {};
            return (
                t.forEach((t) => {
                    let i = t.guildId;
                    i in e || (e[i] = []), e[i].push(t);
                }),
                e
            );
        }, [t]);
    return null == i || 0 === t.length
        ? null
        : (0, E.jsxs)("div", {
              className: g$.iE,
              children: [
                  (0, E.jsx)("div", {
                      className: g$.kL,
                      children: dT.default
                          .keys(n)
                          .map((e) =>
                              (0, E.jsx)(g3, { guildId: e, premiumSubscription: i, appliedGuildBoosts: n[e] }, e),
                          ),
                  }),
                  (0, E.jsx)("div", { className: g$.vK }),
              ],
          });
}
function g4(e) {
    let { guildBoostSlots: t, premiumSubscription: i } = e,
        [n, s] = S.useState(!1);
    S.useEffect(() => {
        let e = -1;
        return (
            null != i &&
                (e = setInterval(() => {
                    s((e) => !e);
                }, 3e3)),
            () => {
                clearInterval(e);
            }
        );
    }, [i]);
    let { boostsByGuildId: l, numActiveGuildBoostSlots: r } = S.useMemo(() => {
        let e = 0,
            i = {};
        return (
            Object.keys(t).forEach((n) => {
                let s = t[n];
                if ((!(0, gV.I5)(s) && e++, null != s.premiumGuildSubscription)) {
                    let e = s.premiumGuildSubscription.guildId;
                    e in i || (i[e] = []), i[e].push(s);
                }
            }),
            { boostsByGuildId: i, numActiveGuildBoostSlots: e }
        );
    }, [t]);
    if (null == i || 0 === Object.keys(l).length) return null;
    let a = r > ul.Ay.getNumIncludedPremiumGuildSubscriptionSlots(i.planId);
    return (0, E.jsxs)("div", {
        className: g$.iE,
        children: [
            (0, E.jsx)("div", {
                className: g$.kL,
                children: dT.default
                    .keys(l)
                    .map((e) =>
                        (0, E.jsx)(
                            g2,
                            {
                                guildId: e,
                                guildBoostSlotRecords: l[e],
                                premiumSubscription: i,
                                hasCancelableGuildBoostSlot: a,
                                showAltText: n,
                            },
                            e,
                        ),
                    ),
            }),
            (0, E.jsx)("div", { className: g$.vK }),
        ],
    });
}
var g5 = i(520610);
let g7 = function (e) {
    let { hasGuildBoostSlots: t, hasAppliedGuildBoosts: n, hasBoostPerk: s, canAddBoosts: l } = e;
    return (0, E.jsxs)("div", {
        className: g5.iE,
        children: [
            (0, E.jsx)("div", {
                className: g5.bj,
                children: (0, E.jsx)("img", { alt: "", className: g5.KV, src: i(742885) }),
            }),
            (0, E.jsxs)("div", {
                className: g5.D7,
                children: [
                    (0, E.jsx)(eL.D, {
                        variant: "display-md",
                        className: g5.R_,
                        children: (function (e) {
                            let {
                                hasGuildBoostSlots: t,
                                hasAppliedGuildBoosts: i,
                                hasBoostPerk: n,
                                canAddBoosts: s,
                            } = e;
                            return s
                                ? t
                                    ? n && !i
                                        ? j.intl.format(j.t.s9zQyG, {})
                                        : j.intl.format(j.t.Rb8Jhs, {})
                                    : j.intl.string(j.t["2rh0by"])
                                : j.intl.format(j.t.Rb8Jhs, {});
                        })({ hasGuildBoostSlots: t, hasBoostPerk: s, hasAppliedGuildBoosts: n, canAddBoosts: l }),
                    }),
                    (0, E.jsx)("svg", {
                        viewBox: "0 0 660 210",
                        className: g5.Mz,
                        children: (0, E.jsx)("path", {
                            d: "M101.3,45.5C57.5,45.9,15.9,82.2,0,99.5V210h660V53.5c-164-137-265.2,32.4-385.8,33.6  C177.7,88.1,158.1,45,101.3,45.5z",
                        }),
                    }),
                ],
            }),
        ],
    });
};
var g8 = i(20218),
    g9 = i(168482);
function me() {
    return (0, E.jsxs)("div", {
        className: g8.iE,
        children: [
            (0, E.jsx)("img", { className: g8.Kk, alt: "", src: g9 }),
            (0, E.jsxs)("div", {
                className: g8.pq,
                children: [
                    (0, E.jsx)(ee.E, { variant: "text-lg/bold", children: j.intl.string(j.t.ZHNSYf) }),
                    (0, E.jsx)(ee.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: j.intl.string(j.t.kCj5ps),
                    }),
                ],
            }),
            (0, E.jsx)(eD.$, {
                variant: "secondary",
                text: j.intl.string(j.t.JFlifp),
                onClick: () => {
                    (0, sk.pX)(eg.BVt.GUILD_DISCOVERY), (0, sC.default)();
                },
            }),
        ],
    });
}
var mt = i(502572),
    mi = i(614820),
    mn = i(987144),
    ms = i(805319);
let ml = function () {
    let e = S.useRef(null),
        { analyticsLocations: t } = (0, nH.Ay)(),
        { fractionalState: n } = (0, go.A)();
    function s(i) {
        null != e.current && (0, z.closeModal)(e.current),
            (0, mn.g)({
                analyticsLocation: {
                    page: eg.liQ.GUILD_BOOSTING_USER_SETTINGS,
                    section: eg.JJy.GUILD_BOOSTING_BOOST_ANY_GUILD_CTA,
                    object: eg.ZSU.BUTTON_CTA,
                    objectType: eg.AnalyticsObjectTypes.BUY,
                },
                analyticsLocations: t,
                guild: i,
            });
    }
    async function l() {
        e.current = await (0, z.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 770101));
                return (t) => (0, E.jsx)(e, { ...t, onSelectGuild: s });
            },
            {
                onCloseRequest: () => {
                    null != e.current && (0, z.closeModal)(e.current);
                },
            },
        );
    }
    let r = (0, gV.Nc)({ fractionalState: n });
    return (0, E.jsxs)("div", {
        className: ms.iE,
        children: [
            (0, E.jsx)(gi._, { color: ei.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: ms.$J }),
            (0, E.jsx)(ee.E, {
                className: ms.C,
                color: "text-default",
                variant: "text-sm/medium",
                children: j.intl.format(j.t.kqC5vq, {
                    boostAnyGuildHook: (e, t) => {
                        let i = null != r,
                            n = (0, mi.O)(e),
                            s = (0, E.jsx)("div", {
                                className: ms.lO,
                                children: (0, E.jsx)(
                                    en.Q,
                                    { variant: "primary", onClick: i ? void 0 : l, text: n, disabled: i },
                                    t,
                                ),
                            });
                        return i
                            ? (0, E.jsx)(
                                  mt.A,
                                  {
                                      text: r,
                                      "aria-label": r.toString(),
                                      children: (e) => (0, E.jsx)("span", { ...e, children: s }),
                                  },
                                  t,
                              )
                            : s;
                    },
                }),
            }),
        ],
    });
};
var mr = i(279574);
let ma = function (e) {
    let { canAddBoosts: t, canApplyBoosts: i } = e,
        n = (0, g.bG)([gL.A], () => gL.A.affinities),
        s = (0, g.bG)([eu.Ay], () => eu.Ay.getFlattenedGuildIds()),
        l = S.useMemo(() => {
            let e = n.slice(0, 3).map((e) => e.guildId);
            for (let t = 0; t < s.length && !(e.length >= 3); t++) {
                let i = s[t];
                e.includes(i) || e.push(i);
            }
            return e;
        }, [n, s]);
    return 0 === l.length
        ? null
        : (0, E.jsxs)("div", {
              className: mr.iE,
              children: [
                  t &&
                      (0, E.jsx)(eL.D, {
                          variant: "heading-lg/semibold",
                          className: mr.wx,
                          children: j.intl.string(j.t.r90Wgo),
                      }),
                  l.map((e) => (0, E.jsx)(gJ, { className: mr.ZS, guildId: e, boostingVariant: !0 }, e)),
                  s.length > 3 && i && (0, E.jsx)(ml, {}),
              ],
          });
};
var mo = i(649327);
let mu = function (e) {
    let {
            hasAppliedGuildBoosts: t,
            hasBoostPerk: i,
            hasGuildAffinitiesOrInGuild: n,
            subscriptionIsPausedOrPausePending: s,
        } = e,
        { subtitle: l, flavor: r } = (function (e) {
            let {
                hasAppliedGuildBoosts: t,
                hasBoostPerk: i,
                hasGuildAffinitiesOrInGuild: n,
                subscriptionIsPausedOrPausePending: s,
            } = e;
            if (s)
                return {
                    flavor: j.intl.format(j.t.doslJu, {
                        onClick: () => (0, eY.openUserSettings)(u.X.SUBSCRIPTIONS_PANEL),
                    }),
                };
            if (!n) return { subtitle: j.intl.string(j.t.oiWYAc) };
            if (t)
                return {
                    subtitle: j.intl.string(j.t.W5rDjW),
                    flavor: j.intl.format(j.t.cUHcaQ, {
                        helpdeskArticle: tp.A.getArticleURL(eg.MVz.GUILD_SUBSCRIPTIONS),
                    }),
                };
            let l = sO.hd[sO.gD.PREMIUM_MONTH_GUILD],
                r = ul.Ay.getDefaultPrice(l.id, i),
                a = (0, dE.CE)((0, dE.$g)(r.amount, r.currency), l.interval, l.intervalCount);
            return {
                subtitle: i ? j.intl.string(j.t.bhPzXR) : j.intl.string(j.t.Zs9h9Z),
                flavor: j.intl.formatToPlainString(j.t.PGgTdA, { monthlyGuildBoostPrice: a }),
            };
        })({
            hasAppliedGuildBoosts: t,
            hasBoostPerk: i,
            hasGuildAffinitiesOrInGuild: n,
            subscriptionIsPausedOrPausePending: s,
        });
    return (0, E.jsxs)("div", {
        className: mo.i,
        children: [
            (0, E.jsx)(eL.D, { variant: "heading-lg/bold", className: mo.V, children: l }),
            null != r && (0, E.jsx)(ee.E, { variant: "text-sm/normal", children: r }),
        ],
    });
};
var md = i(724624),
    mc = i(983511),
    mg = i(342744),
    mm = i(87719),
    mA = i(354888);
function mh(e) {
    let {
            guildBoostSlot: t,
            isCancellable: i,
            onCancel: n,
            onUncancel: s,
            premiumSubscription: l,
            useReducedMotion: r,
            fractionalState: a,
        } = e,
        o = S.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t]),
        u = (0, gV.I5)(t),
        d = l?.isPaused === !0 && a === sO.xc.NONE,
        c = j.intl.string(j.t.mOWsF1);
    return (0, E.jsxs)(
        "li",
        {
            className: mA.Hp,
            children: [
                (0, E.jsxs)("div", {
                    className: mA.YL,
                    children: [
                        (0, E.jsx)(gH, {
                            className: mA.W6,
                            hasCooldown: t.isOnCooldown(),
                            isCanceled: u,
                            useReducedMotion: r,
                        }),
                        u && null != l
                            ? (0, E.jsx)(ee.E, {
                                  color: "text-muted",
                                  variant: "text-sm/medium",
                                  children: j.intl.format(j.t.Z4ULRD, { date: l.currentPeriodEnd }),
                              })
                            : t.isOnCooldown() && null != o
                              ? (0, E.jsx)(gF, { cooldown: o.getTime() })
                              : (0, E.jsx)(ee.E, {
                                    className: mA.__invalid_unappliedGuildBoostSlotDescription,
                                    color: "text-muted",
                                    variant: "text-sm/medium",
                                    children: j.intl.string(j.t["2mcafz"]),
                                }),
                    ],
                }),
                (0, E.jsxs)("div", {
                    className: mA.E7,
                    children: [
                        i &&
                            !u &&
                            (0, E.jsx)(mt.A, {
                                shouldShow: d,
                                text: c,
                                "aria-label": c.toString(),
                                children: (e) =>
                                    (0, E.jsx)("div", {
                                        className: mA.LB,
                                        children: (0, E.jsx)(en.Q, {
                                            ...e,
                                            variant: "primary",
                                            text: j.intl.string(j.t.twFU3R),
                                            onClick: () => n(t),
                                            disabled: d,
                                            size: "sm",
                                        }),
                                    }),
                            }),
                        u &&
                            (0, E.jsx)(mt.A, {
                                shouldShow: d,
                                text: c,
                                "aria-label": c.toString(),
                                children: (e) =>
                                    (0, E.jsx)("div", {
                                        className: mA.LB,
                                        children: (0, E.jsx)(en.Q, {
                                            ...e,
                                            variant: "primary",
                                            text: j.intl.string(j.t["2glQNp"]),
                                            onClick: () => s(t),
                                            disabled: d,
                                            size: "sm",
                                        }),
                                    }),
                            }),
                    ],
                }),
            ],
        },
        t.id,
    );
}
function mE(e) {
    (0, z.openModalLazy)(async () => (t) => (0, E.jsx)(mc.default, { ...t, guildBoostSlot: e }));
}
function mS(e) {
    (0, z.openModalLazy)(async () => (t) => (0, E.jsx)(mg.default, { ...t, guildBoostSlotId: e.id }));
}
let mT = function (e) {
    let t,
        i,
        n,
        { guildBoostSlots: s } = e,
        l = (0, g.bG)([dY.A], () => dY.A.getPremiumTypeSubscription()),
        r = l?.isPausedOrPausePending === !0,
        { fractionalState: a } = (0, go.A)(),
        o = (0, g.bG)([i6.A], () => i6.A.useReducedMotion),
        u = (0, g.bG)([ir.default], () => ir.default.getCurrentUser()),
        d = a === sO.xc.FP_SUB_PAUSED,
        c = r && !d,
        {
            appliedGuildBoostSlots: m,
            unappliedGuildBoostSlots: A,
            numActiveGuildBoostSlots: h,
            hasCooldownBoosts: T,
            allGuildBoostsAreOnCooldown: x,
        } = S.useMemo(() => {
            let e = [],
                t = [],
                i = 0,
                n = !1,
                l = !0;
            return (
                s.forEach((s) => {
                    !(0, gV.I5)(s) && i++,
                        s.isOnCooldown() ? (n = !0) : (l = !1),
                        null != s.premiumGuildSubscription ? e.push(s) : t.push(s);
                }),
                {
                    appliedGuildBoostSlots: e,
                    unappliedGuildBoostSlots: t,
                    numActiveGuildBoostSlots: i,
                    hasCooldownBoosts: n,
                    allGuildBoostsAreOnCooldown: l,
                }
            );
        }, [s]),
        p = null != l ? ul.Ay.getNumIncludedPremiumGuildSubscriptionSlots(l.planId) : 0,
        f = Math.max(0, p - m.length),
        N = h > p,
        _ = p === s.length,
        I = _ ? f : 1,
        C = S.useMemo(() => {
            let e = [];
            for (let t = 0; t < I; t++) e.push((0, E.jsx)(gY, { className: mA.YA, useReducedMotion: o }, t));
            return e;
        }, [I, o]),
        b = S.useMemo(() => A.find((e) => e.isAvailable()), [A]);
    if (0 === A.length) return null;
    let v = A.length;
    if (
        ((t = _
            ? j.intl.formatToPlainString(x ? j.t["3DW6Dc"] : j.t["/u15Qc"], { numUnappliedGuildBoostSlots: v })
            : j.intl.formatToPlainString(x ? j.t["3DW6Dc"] : j.t.BPadnO, { numUnappliedGuildBoostSlots: v })),
        ul.Ay.isPremium(u))
    ) {
        let e = (e, t) =>
            (0, E.jsx)(
                $.D,
                {
                    className: mA.nw,
                    tag: "span",
                    onClick: () => {
                        (0, mm.e)();
                    },
                    children: e,
                },
                t,
            );
        i = x
            ? j.intl.format(j.t.omcpSE, { learnMoreHook: e })
            : j.intl.format(j.t["5mAkVi"], { numUnappliedGuildBoostSlots: v, learnMoreHook: e });
    } else
        i = x
            ? j.intl.string(j.t["8pcUZi"])
            : j.intl.formatToPlainString(j.t.Kaw82o, { numUnappliedGuildBoostSlots: v });
    return (
        (n = r && a === sO.xc.NONE ? j.intl.string(j.t.mOWsF1) : j.intl.string(j.t.xr4m5B)),
        (0, E.jsx)("div", {
            className: mA.iE,
            children: (0, E.jsxs)("div", {
                className: e2()(mA.Qs, [mA.Yq]),
                children: [
                    (0, E.jsxs)("div", {
                        className: mA.wx,
                        children: [
                            (0, E.jsxs)("div", {
                                className: mA.RW,
                                children: [
                                    (0, E.jsx)("div", { className: mA.PS, children: C }),
                                    (0, E.jsxs)("div", {
                                        className: mA.__invalid_headerCopy,
                                        children: [
                                            (0, E.jsx)(eL.D, {
                                                className: mA.gg,
                                                variant: "heading-lg/bold",
                                                children: t,
                                            }),
                                            (0, E.jsx)(ee.E, {
                                                className: mA.__invalid_headerSubheading,
                                                color: "text-strong",
                                                variant: "text-sm/normal",
                                                children: i,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, E.jsx)("div", {
                                className: mA.di,
                                children: (0, E.jsx)(mt.A, {
                                    shouldShow: null == b || c,
                                    text: n,
                                    "aria-label": n.toString(),
                                    children: (e) =>
                                        (0, E.jsx)(eD.$, {
                                            variant: "primary",
                                            text: j.intl.string(j.t.BMx1iy),
                                            ...e,
                                            disabled: null == b || c,
                                            onClick:
                                                null != b
                                                    ? () => {
                                                          (0, z.openModalLazy)(
                                                              async () => (e) =>
                                                                  (0, E.jsx)(md.default, {
                                                                      ...e,
                                                                      guildBoostSlots: [b],
                                                                      locationSection: eg.JJy.SETTINGS_PREMIUM,
                                                                  }),
                                                          );
                                                      }
                                                    : void 0,
                                        }),
                                }),
                            }),
                        ],
                    }),
                    (!_ || T) &&
                        (0, E.jsx)("ul", {
                            className: mA.LU,
                            children: A.map((e) =>
                                (0, E.jsx)(
                                    mh,
                                    {
                                        guildBoostSlot: e,
                                        isCancellable: N,
                                        onCancel: mE,
                                        onUncancel: mS,
                                        premiumSubscription: l,
                                        useReducedMotion: o,
                                        fractionalState: a,
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                ],
            }),
        })
    );
};
var mx = i(616659);
function mp(e) {
    let { premiumSubscription: t } = e,
        i = (0, g.bG)([gD.A], () => gD.A.boostSlots),
        n = S.useMemo(() => Object.values(i), [i]),
        s = (0, g.bG)([ir.default], () => ir.default.getCurrentUser()),
        l = ul.Ay.isPremium(s, sO.PremiumTypes.TIER_2),
        r = (0, g.bG)([gL.A], () => gL.A.affinities),
        a = (0, g.bG)([eu.Ay], () => eu.Ay.getFlattenedGuildIds()),
        o = r.length > 0 || a.length > 0,
        u = n.length > 0,
        d = S.useMemo(() => n.filter((e) => null != e.premiumGuildSubscription), [n]),
        c = d.length > 0,
        m = n.length > d.length,
        A = (0, g.bG)([ga.A], () => ga.A.getCurrentUserAppliedBoosts()),
        { fractionalState: h } = (0, go.A)({ forceFetch: !0 }),
        T = s?.isPremiumGroupMember(),
        x = t?.isPausedOrPausePending === !0 && h === sO.xc.NONE,
        p = t?.isPausedOrPausePending !== !0 && h === sO.xc.NONE && !T,
        f = l && h === sO.xc.FP_SUB_PAUSED,
        N = h === sO.xc.NONE && !T;
    return (0, E.jsxs)("div", {
        className: mx.GO,
        children: [
            (0, E.jsx)(dQ.kb, { className: mx.ek }),
            (0, E.jsx)(g7, { hasGuildBoostSlots: u, hasAppliedGuildBoosts: c, hasBoostPerk: f, canAddBoosts: p }),
            N &&
                (0, E.jsx)(mu, {
                    hasAppliedGuildBoosts: c,
                    hasBoostPerk: f,
                    hasGuildAffinitiesOrInGuild: o,
                    subscriptionIsPausedOrPausePending: x,
                }),
            T && (0, E.jsx)(gR.A, {}),
            !o && (0, E.jsx)(me, {}),
            t?.isPaused && h !== sO.xc.FP_SUB_PAUSED
                ? (0, E.jsx)(g6, { appliedGuildBoosts: A, premiumSubscription: t })
                : (0, E.jsx)(g4, { guildBoostSlots: i, premiumSubscription: t }),
            (0, E.jsx)(mT, { guildBoostSlots: n, fractionalPremiumState: h }),
            (0, E.jsx)(ma, { canAddBoosts: c && p, canApplyBoosts: m }),
            (0, E.jsx)(gO, { className: mx.e4, hideHeading: !0, hideTier0: !0 }),
            (0, E.jsx)(gh, { cardClassName: mx.KW }),
            (0, E.jsx)(gx, { className: mx.JL }),
        ],
    });
}
var mf = i(527113),
    mN = i(365199),
    m_ = i(162286);
function mI(e) {
    let { guild: t, className: i } = e,
        { total: n } = (0, gq.A)(t.id);
    return (0, E.jsxs)("div", {
        className: i ?? m_.OA,
        children: [
            (0, E.jsx)(gK.Ay, { className: m_.$f, guild: t, size: gK.Ay.Sizes.MEDIUM }),
            (0, E.jsxs)("div", {
                className: m_.gI,
                children: [
                    (0, E.jsx)(ee.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, E.jsxs)("div", {
                        className: m_.ew,
                        children: [
                            (0, E.jsxs)("div", {
                                className: m_.QW,
                                children: [
                                    (0, E.jsx)(gi._, {
                                        className: m_.Wz,
                                        color: ei.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                                    }),
                                    (0, E.jsx)(ee.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: j.intl.format(j.t["pob/cL"], { subscriptions: n }),
                                    }),
                                ],
                            }),
                            t.premiumTier !== eg.TVA.NONE &&
                                (0, E.jsxs)(E.Fragment, {
                                    children: [
                                        (0, E.jsx)("div", { className: m_.zk }),
                                        (0, E.jsx)(ee.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, gV.gb)(t.premiumTier, { useLevels: !1 }),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function mC(e) {
    let { guildId: t } = e,
        i = (0, g.bG)([eo.A], () => eo.A.getGuild(t), [t]);
    return null == i
        ? null
        : (0, E.jsxs)("div", {
              className: m_.Nr,
              children: [
                  (0, E.jsx)(mI, { guild: i }),
                  (0, E.jsx)(eD.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: gi._,
                      text: j.intl.string(j.t.aBHecF),
                      onClick: () => {
                          (0, mn.g)({
                              analyticsLocations: [],
                              analyticsLocation: {
                                  page: eg.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                  section: eg.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                  object: eg.ZSU.BUTTON_CTA,
                                  objectType: eg.AnalyticsObjectTypes.BUY,
                              },
                              guild: i,
                          });
                      },
                  }),
              ],
          });
}
var mb = i(225334);
let mv =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function my(e) {
    let { slot: t, guildTier: i, premiumSubscription: n, hasCancelableSlots: s, isLast: l } = e,
        r = S.useRef(null),
        a = (0, gV.I5)(t),
        o = S.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, go.A)(),
        c = S.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === eg.TVA.NONE) return "";
                    let i = [
                        j.intl.formatToPlainString(j.t["dLlKX/"], { numEmojiSlots: sO.TG[e].limits.emoji }),
                        j.intl.formatToPlainString(j.t["+ANIfv"], { numStickerSlots: sO.TG[e].limits.stickers }),
                        j.intl.formatToPlainString(j.t["4gt60b"], {
                            numSoundboardSlots: sO.TG[e].limits.soundboardSounds,
                        }),
                        j.intl.formatToPlainString(j.t.XahSjZ, {
                            resolution: sO.TG[e].limits.screenShareQualityResolution,
                            framerate: sO.TG[e].limits.screenShareQualityFramerate,
                        }),
                        j.intl.formatToPlainString(j.t.NbNs7S, { bitrate: sO.TG[e].limits.bitrate / 1e3 }),
                        j.intl.formatToPlainString(j.t.VVKcpn, { filesize: sO.TG[e].limits.fileSize / 1024 / 1024 }),
                        j.intl.formatToPlainString(j.t.TbpCvv, { numVideoStageSeats: sO.TG[e].limits.stageVideoUsers }),
                        j.intl.string(j.t.LDyX3i),
                        j.intl.string(j.t.YtGlPW),
                    ];
                    e >= eg.TVA.TIER_2 && (i.push(j.intl.string(j.t.SztbtN)), i.push(j.intl.string(j.t["3GK91n"]))),
                        e >= eg.TVA.TIER_3 && i.push(j.intl.string(j.t["XUUJd+"]));
                    let n = 0;
                    for (let e = 0; e < t.length; e++) n = (31 * n + t.charCodeAt(e)) | 0;
                    let s = i[Math.abs(n) % i.length];
                    return j.intl.formatToPlainString(j.t["/dOAmQ"], { perk: s });
                })(i, t.id),
            [i, t.id],
        ),
        g = S.useMemo(() => {
            if ("" !== c) return c;
            let e = null != t.premiumGuildSubscription ? dT.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return j.intl.formatToPlainString(j.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        m = S.useMemo(
            () => (a ? (n.isPausedForFractionalPremium ? d.endsAt.toDate() : n.currentPeriodEnd) : null),
            [a, n, d],
        );
    return (0, E.jsxs)("div", {
        className: e2()(mb.iq, { [mb.Mt]: l }),
        children: [
            (0, E.jsxs)("div", {
                className: mb.kd,
                children: [
                    (0, E.jsx)("img", { alt: "", className: mb.bB, src: mv }),
                    a && null != m
                        ? (0, E.jsx)(ee.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: j.intl.format(j.t.Z4ULRD, { date: m }),
                          })
                        : (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(ee.E, { variant: "text-sm/medium", color: "text-subtle", children: g }),
                                  u &&
                                      null != o &&
                                      (0, E.jsxs)(E.Fragment, {
                                          children: [
                                              (0, E.jsx)("div", { className: mb.zk }),
                                              (0, E.jsx)(ee.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-info",
                                                  children: j.intl.formatToPlainString(j.t.YJlswH, {
                                                      date: o.toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  !u &&
                                      null != n.trialEndsAt &&
                                      (0, E.jsxs)(E.Fragment, {
                                          children: [
                                              (0, E.jsx)("div", { className: mb.zk }),
                                              (0, E.jsx)(ee.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-warning",
                                                  children: j.intl.formatToPlainString(j.t.OdPSpk, {
                                                      date: new Date(n.trialEndsAt).toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                              ],
                          }),
                ],
            }),
            (0, E.jsx)(q.Y, {
                targetElementRef: r,
                renderPopout: (e) => {
                    let { closePopout: i } = e;
                    return (0, E.jsx)(gk, {
                        onClose: i,
                        guildBoostSlot: t,
                        premiumSubscription: n,
                        hasCancelableGuildBoostSlot: s,
                        fractionalState: d.fractionalState,
                    });
                },
                position: "right",
                align: "center",
                children: (e) =>
                    (0, E.jsx)($.D, {
                        innerRef: r,
                        "aria-label": j.intl.string(j.t.PdRCRg),
                        className: mb.Mj,
                        ...e,
                        children: (0, E.jsx)(mN.j, { size: "xs", color: ei.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                    }),
            }),
        ],
    });
}
function mj(e) {
    let { guildId: t, slots: i, premiumSubscription: n, hasCancelableSlots: s } = e,
        l = (0, g.bG)([eo.A], () => eo.A.getGuild(t), [t]);
    return (0, E.jsxs)("div", {
        className: mb.Nr,
        children: [
            (0, E.jsx)("div", {
                className: mb.MY,
                children:
                    null != l
                        ? (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(mI, { guild: l, className: mb.OA }),
                                  (0, E.jsx)(eD.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: j.intl.string(j.t.KLOhbO),
                                      onClick: () => {
                                          (0, sC.default)(),
                                              (0, gW.K4)({
                                                  guildId: l.id,
                                                  location: {
                                                      section:
                                                          eg.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA,
                                                  },
                                              });
                                      },
                                  }),
                              ],
                          })
                        : (0, E.jsx)("div", {
                              className: mb.OA,
                              children: (0, E.jsx)(eL.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: j.intl.string(j.t["6Kwwuo"]),
                              }),
                          }),
            }),
            i.map((e, t) =>
                (0, E.jsx)(
                    my,
                    {
                        slot: e,
                        guildTier: l?.premiumTier,
                        premiumSubscription: n,
                        hasCancelableSlots: s,
                        isLast: t === i.length - 1,
                    },
                    e.id,
                ),
            ),
        ],
    });
}
function mO(e) {
    let { guildBoostSlots: t, premiumSubscription: i, pausedAppliedGuildBoosts: n, isPaused: s } = e,
        { boostsByGuildId: l, numActiveSlots: r } = S.useMemo(() => {
            if (s && null != i)
                return {
                    boostsByGuildId: (function (e, t) {
                        let i = {};
                        for (let t of e) t.guildId in i || (i[t.guildId] = []), i[t.guildId].push(t);
                        let n = {};
                        for (let e of Object.keys(i)) {
                            let s = i[e];
                            n[e] = s.map((i) =>
                                gw.A.createFromServer(
                                    {
                                        id: i.id,
                                        subscription_id: t.id,
                                        canceled: !1,
                                        premium_guild_subscription: { id: i.id, guild_id: e },
                                        cooldown_ends_at: null,
                                    },
                                    t,
                                ),
                            );
                        }
                        return n;
                    })(n, i),
                    numActiveSlots: 0,
                };
            let e = 0,
                l = {};
            for (let i of Object.keys(t)) {
                let n = t[i];
                if ((!(0, gV.I5)(n) && e++, null != n.premiumGuildSubscription)) {
                    let e = n.premiumGuildSubscription.guildId;
                    e in l || (l[e] = []), l[e].push(n);
                }
            }
            return { boostsByGuildId: l, numActiveSlots: e };
        }, [t, s, n, i]);
    if (null == i || 0 === Object.keys(l).length) return null;
    let a = r > ul.Ay.getNumIncludedPremiumGuildSubscriptionSlots(i.planId);
    return (0, E.jsx)("div", {
        className: mb.kR,
        children: dT.default
            .keys(l)
            .map((e) => (0, E.jsx)(mj, { guildId: e, slots: l[e], premiumSubscription: i, hasCancelableSlots: a }, e)),
    });
}
var mR = i(68179);
function mL(e) {
    let { guildBoostSlots: t, fractionalPremiumState: n } = e,
        s = (0, g.bG)([dY.A], () => dY.A.getPremiumTypeSubscription()),
        { unappliedSlots: l, numActiveSlots: r } = S.useMemo(() => {
            let e = [],
                i = 0;
            for (let n of t) !(0, gV.I5)(n) && i++, null == n.premiumGuildSubscription && e.push(n);
            return { unappliedSlots: e, numActiveSlots: i };
        }, [t]),
        a = r > (null != s ? ul.Ay.getNumIncludedPremiumGuildSubscriptionSlots(s.planId) : 0),
        o = s?.isPausedOrPausePending === !0 && n === sO.xc.NONE;
    return 0 === l.length
        ? null
        : (0, E.jsxs)("div", {
              className: mR.Nr,
              children: [
                  (0, E.jsxs)("div", {
                      className: mR.MY,
                      children: [
                          (0, E.jsxs)("div", {
                              className: mR._L,
                              children: [
                                  (0, E.jsxs)("div", {
                                      className: mR.MD,
                                      children: [
                                          (0, E.jsx)("img", { alt: "", className: mR.F8, src: mv }),
                                          (0, E.jsx)("div", {
                                              className: e2()(mR.qS, "theme-dark"),
                                              children: (0, E.jsx)("span", { className: mR.Vv, children: l.length }),
                                          }),
                                      ],
                                  }),
                                  (0, E.jsxs)("div", {
                                      className: mR.Qp,
                                      children: [
                                          (0, E.jsx)(ee.E, {
                                              variant: "heading-md/semibold",
                                              color: "text-default",
                                              tag: "span",
                                              children: j.intl.format(j.t.BPadnO, {
                                                  numUnappliedGuildBoostSlots: l.length,
                                              }),
                                          }),
                                          (0, E.jsx)(ee.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-subtle",
                                              children: j.intl.format(j.t.Kaw82o, {
                                                  numUnappliedGuildBoostSlots: l.length,
                                              }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, E.jsx)(mt.A, {
                              shouldShow: o,
                              text: j.intl.string(j.t.mOWsF1),
                              "aria-label": j.intl.string(j.t.mOWsF1),
                              children: (e) =>
                                  (0, E.jsx)(eD.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: gi._,
                                      text: j.intl.string(j.t.BMx1iy),
                                      disabled: o,
                                      onClick: () => {
                                          (0, z.openModalLazy)(async () => {
                                              let { default: e } = await Promise.resolve().then(i.bind(i, 770101));
                                              return (t) =>
                                                  (0, E.jsx)(e, {
                                                      ...t,
                                                      onSelectGuild: (e) => {
                                                          t.onClose(),
                                                              (0, mn.g)({
                                                                  analyticsLocations: [],
                                                                  analyticsLocation: {
                                                                      page: eg.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                                      section: eg.JJy.SETTINGS_PREMIUM,
                                                                      object: eg.ZSU.BUTTON_CTA,
                                                                      objectType: eg.AnalyticsObjectTypes.BUY,
                                                                  },
                                                                  guild: e,
                                                              });
                                                      },
                                                  });
                                          });
                                      },
                                  }),
                          }),
                      ],
                  }),
                  l.map((e, t) =>
                      (0, E.jsx)(
                          mD,
                          {
                              slot: e,
                              isLast: t === l.length - 1,
                              isCancelable: a && !(0, gV.I5)(e),
                              isCanceled: (0, gV.I5)(e),
                              premiumSubscription: s,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function mD(e) {
    let t,
        { slot: i, isLast: n, isCancelable: s, isCanceled: l, premiumSubscription: r, modificationsDisabled: a } = e,
        o = S.useRef(null),
        u = S.useMemo(() => (null != i.cooldownEndsAt ? new Date(i.cooldownEndsAt) : null), [i.cooldownEndsAt]);
    t =
        l && null != r
            ? (0, E.jsx)(ee.E, {
                  variant: "text-sm/medium",
                  color: "text-subtle",
                  children: j.intl.format(j.t.Z4ULRD, { date: r.currentPeriodEnd }),
              })
            : i.isOnCooldown() && null != u
              ? (0, E.jsx)(gF, { cooldown: u.getTime() })
              : (0, E.jsx)(ee.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: j.intl.string(j.t["2mcafz"]),
                });
    let d = s || l;
    return (0, E.jsxs)("div", {
        className: e2()(mR.iq, { [mR.Mt]: n }),
        children: [
            (0, E.jsxs)("div", {
                className: mR.kd,
                children: [(0, E.jsx)("img", { alt: "", className: mR.bB, src: mv }), t],
            }),
            d &&
                (0, E.jsx)(q.Y, {
                    targetElementRef: o,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, E.jsxs)(Q.W, {
                            navId: "unapplied-boost-actions",
                            "aria-label": j.intl.string(j.t.ogxXGq),
                            onSelect: void 0,
                            onClose: t,
                            children: [
                                s &&
                                    (0, E.jsx)(J.Dr, {
                                        id: "cancel-boost",
                                        label: j.intl.string(j.t.twFU3R),
                                        color: "danger",
                                        disabled: a,
                                        subtext: a ? j.intl.string(j.t.mOWsF1) : void 0,
                                        action: () => {
                                            t(),
                                                (0, z.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, E.jsx)(mc.default, { ...e, guildBoostSlot: i }),
                                                );
                                        },
                                    }),
                                l &&
                                    (0, E.jsx)(J.Dr, {
                                        id: "uncancel-boost",
                                        label: j.intl.string(j.t["2glQNp"]),
                                        disabled: a,
                                        subtext: a ? j.intl.string(j.t.mOWsF1) : void 0,
                                        action: () => {
                                            t(),
                                                (0, z.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, E.jsx)(mg.default, { ...e, guildBoostSlotId: i.id }),
                                                );
                                        },
                                    }),
                            ],
                        });
                    },
                    align: "right",
                    position: "bottom",
                    children: (e) =>
                        (0, E.jsx)($.D, {
                            innerRef: o,
                            "aria-label": j.intl.string(j.t["UKOtz+"]),
                            className: mR.Mj,
                            ...e,
                            children: (0, E.jsx)(mN.j, { size: "xs", color: ei.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                        }),
                }),
        ],
    });
}
var mP = i(185949);
function mG(e) {
    let {
            guildBoostSlots: t,
            guildBoostSlotsByGuildId: i,
            premiumSubscription: n,
            pausedAppliedGuildBoosts: s,
            fractionalPremiumState: l,
        } = e,
        r = tp.A.getArticleURL(eg.MVz.GUILD_BOOSTING_FAQ),
        a = n?.isPaused === !0 && l !== sO.xc.FP_SUB_PAUSED,
        o = t.some((e) => null == e.premiumGuildSubscription),
        u = a && s.length > 0,
        d = a ? u : t.some((e) => null != e.premiumGuildSubscription);
    return o || d
        ? (0, E.jsxs)("div", {
              className: mP.i,
              children: [
                  (0, E.jsxs)("div", {
                      className: mP.b,
                      children: [
                          (0, E.jsx)(eL.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.W5rDjW) }),
                          (0, E.jsx)(ee.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: j.intl.format(j.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, E.jsx)(mO, {
                      guildBoostSlots: i,
                      premiumSubscription: n,
                      pausedAppliedGuildBoosts: s,
                      isPaused: a,
                  }),
                  (0, E.jsx)(mL, { guildBoostSlots: t, fractionalPremiumState: l }),
              ],
          })
        : null;
}
var mM = i(917064),
    mU = i(438929);
function mV() {
    return (0, E.jsxs)("div", {
        className: mU.iE,
        children: [
            (0, E.jsx)(eL.D, { variant: "heading-xl/normal", children: j.intl.string(j.t.IzKs3o) }),
            (0, E.jsx)("div", {
                className: mU.kR,
                children: mM.s.map((e, t) => {
                    let i = e.icon;
                    return (0, E.jsxs)(
                        "div",
                        {
                            className: mU.Nr,
                            children: [
                                (0, E.jsx)(i, { className: mU.Kk }),
                                (0, E.jsx)(ee.E, {
                                    className: mU.h_,
                                    color: "text-muted",
                                    variant: "text-sm/medium",
                                    children: e.getText(),
                                }),
                            ],
                        },
                        t,
                    );
                }),
            }),
        ],
    });
}
var mk = i(232122),
    mw = i(539915);
function mB() {
    let [e, t] = S.useState(null),
        [i, n] = S.useState(null);
    return (0, E.jsxs)("div", {
        className: mw.iE,
        children: [
            (0, E.jsx)(eL.D, { variant: "heading-xl/normal", children: j.intl.string(j.t.HPJ6Nj) }),
            (0, E.jsx)("ul", {
                className: mw.p_,
                children: mk.m.map((s, l) => {
                    let r = e === l,
                        a = i === l,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, E.jsxs)(
                        $.D,
                        {
                            tag: "li",
                            className: e2()(mw.Aw, { [mw.$K]: r }),
                            onClick: () => t((e) => (e === l ? null : l)),
                            onMouseEnter: () => n(l),
                            onMouseLeave: () => n(null),
                            children: [
                                (0, E.jsxs)("div", {
                                    className: mw.k7,
                                    children: [
                                        (0, E.jsx)(ee.E, {
                                            className: mw.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: s.getQuestion(),
                                        }),
                                        (0, E.jsx)(et.a, {
                                            size: "sm",
                                            color: ei.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: mw.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, E.jsx)(ee.E, {
                                        className: mw.ZF,
                                        color: "text-muted",
                                        variant: "text-sm/medium",
                                        children: s.getAnswer(),
                                    }),
                            ],
                        },
                        l,
                    );
                }),
            }),
        ],
    });
}
var mF = i(182859),
    mz = i(853513),
    mY = i(560378);
function mX() {
    let e = tp.A.getArticleURL(eg.MVz.GUILD_SUBSCRIPTIONS);
    return (0, E.jsxs)("div", {
        className: mY.wx,
        children: [
            (0, E.jsxs)("div", {
                className: mY.Qs,
                children: [
                    (0, E.jsxs)("div", {
                        className: mY.B5,
                        children: [
                            (0, E.jsx)("img", { alt: "", className: mY.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, E.jsx)(eL.D, {
                                variant: "heading-xl/normal",
                                children: j.intl.string(mz.default.hjvcLO),
                            }),
                        ],
                    }),
                    (0, E.jsx)(ee.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: j.intl.format(j.t.TUHyoA, { helpdeskArticle: e }),
                    }),
                ],
            }),
            (0, E.jsx)(mF.A, {
                variant: "member",
                className: mY.iO,
                analyticsLocation: {
                    page: eg.liQ.GUILD_BOOSTING_USER_SETTINGS,
                    section: eg.JJy.HERO,
                    object: eg.ZSU.CARD,
                },
                videoPlacement: "settings_header",
            }),
        ],
    });
}
var mH = i(315629),
    mK = i(780082);
function mW() {
    let e = (0, g.bG)([ir.default], () => ir.default.getCurrentUser());
    if (null == e || ul.Ay.hasFreeBoosts(e)) return null;
    let t = tp.A.getArticleURL(eg.MVz.GUILD_BOOSTING_FAQ);
    return (0, E.jsxs)(mH.h, {
        color: "nitro-pink",
        className: mK.vK,
        children: [
            (0, E.jsxs)("div", {
                className: mK.nw,
                children: [
                    (0, E.jsx)("img", { alt: "", className: mK.q3, src: mv }),
                    (0, E.jsxs)("div", {
                        className: mK.Tm,
                        children: [
                            (0, E.jsx)(ee.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: j.intl.format(j.t.Idh1Vs, { count: sO.M4, boostCount: sO.M4 }),
                            }),
                            (0, E.jsxs)("div", {
                                className: mK.xv,
                                children: [
                                    (0, E.jsx)(o5.t, { className: mK.nE }),
                                    (0, E.jsx)(ee.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: j.intl.format(j.t["6UAu+f"], {
                                            count: sO.M4,
                                            boostCount: sO.M4,
                                            helpdeskArticle: t,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)(eD.$, {
                variant: "expressive",
                size: "sm",
                icon: o5.t,
                text: j.intl.string(j.t["8x0jKT"]),
                onClick: mm.e,
            }),
        ],
    });
}
var mZ = i(894206);
function mq() {
    let e = (0, g.bG)([gL.A], () => gL.A.affinities),
        t = (0, g.bG)([eu.Ay], () => eu.Ay.getFlattenedGuildIds()),
        i = S.useMemo(() => {
            let i = e.slice(0, 3).map((e) => e.guildId);
            for (let e = 0; e < t.length && i.length < 3; e++) {
                let n = t[e];
                i.includes(n) || i.push(n);
            }
            return i;
        }, [e, t]);
    return 0 === i.length
        ? null
        : (0, E.jsxs)("div", {
              className: mZ.i,
              children: [
                  (0, E.jsx)(eL.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.r90Wgo) }),
                  (0, E.jsx)("div", { className: mZ.k, children: i.map((e) => (0, E.jsx)(mC, { guildId: e }, e)) }),
              ],
          });
}
var mQ = i(140909);
function mJ(e) {
    let { count: t, disabledReason: n } = e,
        s = tp.A.getArticleURL(eg.MVz.GUILD_BOOSTING_FAQ);
    return (0, E.jsxs)(mH.h, {
        color: "nitro-pink",
        className: mQ.vK,
        children: [
            (0, E.jsxs)("div", {
                className: mQ.nw,
                children: [
                    (0, E.jsxs)("div", {
                        className: mQ.MD,
                        children: [
                            (0, E.jsx)("img", { alt: "", className: mQ.F8, src: mv }),
                            (0, E.jsx)("div", {
                                className: e2()(mQ.qS, "theme-dark"),
                                children: (0, E.jsx)("span", { className: mQ.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, E.jsxs)("div", {
                        className: mQ.Tm,
                        children: [
                            (0, E.jsx)(ee.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: j.intl.format(j.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, E.jsxs)("div", {
                                className: mQ.xv,
                                children: [
                                    (0, E.jsx)(o5.t, { className: mQ.nE }),
                                    (0, E.jsx)(ee.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: j.intl.format(j.t["6UAu+f"], {
                                            count: sO.M4,
                                            boostCount: sO.M4,
                                            helpdeskArticle: s,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)(mt.A, {
                shouldShow: null != n,
                text: n ?? "",
                "aria-label": n,
                children: (e) =>
                    (0, E.jsx)(eD.$, {
                        ...e,
                        variant: "primary",
                        size: "sm",
                        icon: gi._,
                        text: j.intl.string(j.t.BMx1iy),
                        disabled: null != n,
                        onClick: () => {
                            (0, z.openModalLazy)(async () => {
                                let { default: e } = await Promise.resolve().then(i.bind(i, 770101));
                                return (t) =>
                                    (0, E.jsx)(e, {
                                        ...t,
                                        onSelectGuild: (e) => {
                                            t.onClose(),
                                                (0, mn.g)({
                                                    analyticsLocations: [],
                                                    analyticsLocation: {
                                                        page: eg.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                        section: eg.JJy.SETTINGS_PREMIUM,
                                                        object: eg.ZSU.BUTTON_CTA,
                                                        objectType: eg.AnalyticsObjectTypes.BUY,
                                                    },
                                                    guild: e,
                                                });
                                        },
                                    });
                            });
                        },
                    }),
            }),
        ],
    });
}
function m$(e) {
    let { premiumSubscription: t } = e,
        i = (0, g.bG)([gD.A], () => gD.A.boostSlots),
        n = S.useMemo(() => Object.values(i), [i]),
        s = (0, g.bG)([ir.default], () => ir.default.getCurrentUser()),
        l = (0, g.bG)([gL.A], () => gL.A.affinities),
        r = (0, g.bG)([eu.Ay], () => eu.Ay.getFlattenedGuildIds()),
        a = l.length > 0 || r.length > 0,
        o = S.useMemo(() => n.filter((e) => null != e.premiumGuildSubscription), [n]).length,
        u = (0, g.bG)([ga.A], () => ga.A.getCurrentUserAppliedBoosts()),
        { fractionalState: d } = (0, go.A)({ forceFetch: !0 }),
        c = s?.isPremiumGroupMember(),
        m = t?.isPausedOrPausePending === !0 && d === sO.xc.NONE,
        A = S.useMemo(() => n.some((e) => null == e.premiumGuildSubscription && e.isAvailable()), [n]),
        h = m ? j.intl.string(j.t.mOWsF1) : A ? void 0 : j.intl.string(j.t.xr4m5B),
        T = S.useMemo(() => {
            if (null == t) return 0;
            let e = ul.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== n.length ? 0 : Math.max(0, e - o);
        }, [t, n.length, o]);
    return (0, E.jsxs)("div", {
        className: mx.GO,
        children: [
            (0, E.jsx)(dQ.kb, { className: mx.ek }),
            (0, E.jsx)(mX, {}),
            (0, E.jsx)(mW, {}),
            T > 0 && (0, E.jsx)(mJ, { count: T, disabledReason: h }),
            c && (0, E.jsx)(gR.A, {}),
            !a && (0, E.jsx)(me, {}),
            (0, E.jsxs)("div", {
                className: mx.C_,
                children: [
                    (0, E.jsx)(mG, {
                        guildBoostSlots: n,
                        guildBoostSlotsByGuildId: i,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: u,
                        fractionalPremiumState: d,
                    }),
                    (0, E.jsx)(mq, {}),
                    (0, E.jsx)(mf.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, E.jsx)(mV, {}),
                    (0, E.jsx)(mB, {}),
                ],
            }),
        ],
    });
}
var m0 = i(65188);
let m1 = (0, a.E2)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            let e = gr.useConfig({ location: "UserSettingsPremiumGuildSubscriptions" }).enabled;
            S.useEffect(() => {
                ss.h.wait(() => {
                    dg.hP(), dg.$o(), (0, gn.CD)(), (0, gs.zS)(null, null, eg.tF5.DISCOVERY), (0, gn.tO)(!0);
                });
            }, []);
            let { hasFetchedSubscriptions: t, premiumSubscription: i } = (0, g.cf)([dY.A], () => ({
                    hasFetchedSubscriptions: dY.A.hasFetchedSubscriptions(),
                    premiumSubscription: dY.A.getPremiumTypeSubscription(),
                })),
                n = (0, gl.Y)(),
                s = (0, g.bG)([dz.A], () => dz.A.hasFetchedPaymentSources),
                l = (0, g.bG)([ga.A], () => ga.A.isFetchingCurrentUserAppliedBoosts),
                r = !t || !n || !s || l,
                [a, o] = S.useState(!1);
            return (r || a || o(!0), r && !a)
                ? (0, E.jsx)("div", { className: e2()(m0.kL, m0.Lq), children: (0, E.jsx)(dr.y, {}) })
                : (0, E.jsxs)("div", {
                      className: m0.kL,
                      children: [
                          (0, E.jsx)("div", { className: m0.Tp }),
                          (0, E.jsx)("div", {
                              className: m0.Qs,
                              children: e
                                  ? (0, E.jsx)(m$, { premiumSubscription: i })
                                  : (0, E.jsx)(mp, { premiumSubscription: i }),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t["+CbP2v"]), j.intl.string(j.t.Nn1lJy)],
    }),
    m2 = (0, a.zZ)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [m1] }),
    m3 = (0, a.t_)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => j.intl.string(j.t["+CbP2v"]),
        buildLayout: () => [m2],
    }),
    m6 = (0, a.i4)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["+CbP2v"]),
        icon: gi._,
        buildLayout: () => [m3],
    });
var m4 = i(153659),
    m5 = i(155984),
    m7 = i(357758),
    m8 = i(262077),
    m9 = i(696986),
    Ae = i(819411);
function At(e) {
    let { onClickManageSubscription: t, count: i } = e;
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsx)(eL.D, { variant: "heading-md/bold", children: j.intl.string(j.t["KzCF/6"]) }),
            (0, E.jsx)(m9.h, { size: 4 }),
            (0, E.jsx)(ee.E, { variant: "text-md/normal", className: Ae.yV, children: j.intl.string(j.t["3D7qCu"]) }),
            (0, E.jsx)(m9.h, { size: 24 }),
            (0, E.jsxs)("div", {
                className: Ae.Nr,
                children: [
                    (0, E.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: Ae.RI }),
                    (0, E.jsxs)("div", {
                        className: Ae.FS,
                        children: [
                            (0, E.jsx)(eL.D, {
                                variant: "heading-xl/semibold",
                                className: Ae.wx,
                                children: j.intl.string(j.t["KzCF/6"]),
                            }),
                            (0, E.jsx)(ee.E, {
                                variant: "text-md/normal",
                                className: Ae.h_,
                                children: j.intl.format(j.t["m+pcOO"], { numSubscriptions: i }),
                            }),
                        ],
                    }),
                    (0, E.jsx)(eD.$, {
                        size: "sm",
                        variant: "overlay-primary",
                        text: j.intl.string(j.t["3a8Xxj"]),
                        onClick: t,
                    }),
                ],
            }),
        ],
    });
}
var Ai = i(872351),
    An = i(9113),
    As = i(599941),
    Al = i(384684),
    Ar = i(2242);
let Aa = [];
var Ao = i(912851),
    Au = i(146795);
let Ad = (e) => {
    let { label: t, onClick: i, submitting: n } = e;
    return (0, E.jsx)($.D, {
        onClick: n ? void 0 : i,
        className: Au.x6,
        children: (0, E.jsxs)("div", {
            className: Au.hQ,
            children: [
                n
                    ? (0, E.jsx)(dr.y, { type: dr.y.Type.PULSING_ELLIPSIS, className: Au.__invalid_spinner })
                    : (0, E.jsx)(ee.E, { variant: "text-md/medium", className: Au.Pf, children: t }),
                (0, E.jsx)(et.a, { size: "md", color: "currentColor", className: Au.UE }),
            ],
        }),
    });
};
var Ac = i(465932),
    Ag = i(543767),
    Am = i(420139),
    AA = i(790284),
    Ah = i(636194),
    AE = i(624456),
    AS = i(710144),
    AT = i(815332),
    Ax = i(817649),
    Ap = i(969389);
let Af = (e) => {
    let { transitionState: t, groupListing: i, listing: n, subscription: s, onClose: l } = e,
        r = (0, sy.GV)(),
        { analyticsLocations: a } = (0, nH.Ay)(e$.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: o,
            error: u,
            submitting: d,
        } = ((e) => {
            let [t, i] = S.useState(!1),
                [n, s] = S.useState(null);
            return {
                cancelSubscription: async (t) => {
                    try {
                        return i(!0), await dg.M2(t, e), !0;
                    } catch (e) {
                        s(e);
                    } finally {
                        i(!1);
                    }
                },
                error: n,
                submitting: t,
            };
        })(a),
        c = async () => {
            (await o(s.id)) && l();
        },
        g = n.role_benefits.benefits.filter((e) => e.ref_type === Ar.bN.CHANNEL),
        m = n.role_benefits.benefits.filter((e) => e.ref_type === Ar.bN.INTANGIBLE),
        A = rV()(s.currentPeriodEnd).format("MMMM Do, YYYY"),
        h = j.intl.formatToPlainString(j.t.KsMRP5, {
            numChannels: g.length,
            numAdditionalBenefits: m.length,
            subscriptionEndDate: A,
        });
    return (0, E.jsx)(lB.Modal, {
        transitionState: t,
        "aria-labelledby": r,
        actions: [
            { text: j.intl.string(j.t.EP6EPb), variant: "secondary", onClick: l },
            { variant: "critical-primary", text: j.intl.string(j.t.F6lUDF), onClick: c, loading: d },
        ],
        title: j.intl.string(j.t.O6l5tM),
        subtitle: h,
        onClose: l,
        children: (0, E.jsxs)(K.B, {
            gap: 8,
            children: [
                null != u ? (0, E.jsx)(H.w, { type: "critical", children: u.message }) : null,
                (0, E.jsx)(Ax.x, { listingId: n.id, guildId: i.guild_id, className: Ap.P }),
            ],
        }),
    });
};
var AN = i(319225),
    A_ = i(746080),
    AI = i(47685);
let AC = (e) => {
        let { label: t, value: i, showInfoIcon: n, infoIconTooltipText: s } = e;
        return (0, E.jsxs)("div", {
            className: AI.L0,
            children: [
                (0, E.jsxs)("div", {
                    className: AI.a5,
                    children: [
                        (0, E.jsx)(eL.D, { variant: "heading-deprecated-12/semibold", className: AI.HU, children: t }),
                        n &&
                            (0, E.jsx)(ts.m, {
                                text: s,
                                children: (0, E.jsx)(lR.m, { size: "xs", color: "currentColor", className: AI.Mo }),
                            }),
                    ],
                }),
                (0, E.jsx)(eL.D, { variant: "heading-xl/semibold", className: AI.sx, children: i }),
            ],
        });
    },
    Ab = (e) => {
        let { subscription: t } = e,
            { analyticsLocations: i } = (0, nH.Ay)(),
            [n] = (0, Ag.YV)({
                subscriptionId: t.id,
                renewal: !0,
                analyticsLocations: i,
                analyticsLocation: e$.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
            }),
            s = (0, g.bG)([dz.A], () => dz.A.hasFetchedPaymentSources);
        return null != n && s
            ? (0, E.jsx)(Am.A, { subscription: t, currentInvoicePreview: n, dropdownClassName: AI.Nw })
            : (0, E.jsx)(dr.y, {});
    },
    Av = (e) => {
        let {
            isTrial: t,
            isCancelled: i,
            isResubscribing: n,
            shouldHideRoleSubscriptionEntryPoints: s,
            onCancelSubscriptionClick: l,
            onResubscribeClick: r,
            onChangePlanClick: a,
        } = e;
        return i && (t || s)
            ? null
            : (0, E.jsx)(sV.D, {
                  label: j.intl.string(j.t["4neDM+"]),
                  children: (0, E.jsx)("div", {
                      className: AI.__invalid_rowButtons,
                      children: i
                          ? (0, E.jsx)(eD.$, {
                                variant: "primary",
                                text: j.intl.string(j.t.y3mAE4),
                                onClick: r,
                                loading: n,
                            })
                          : (0, E.jsxs)(E.Fragment, {
                                children: [
                                    !t && !s && (0, E.jsx)(Ad, { label: j.intl.string(j.t.FRbWR8), onClick: a }),
                                    (0, E.jsx)(Ad, { label: j.intl.string(j.t.Dx0lF7), onClick: l }),
                                ],
                            }),
                  }),
              });
    },
    Ay = (e) => {
        let { subscription: t } = e,
            {
                listing: i,
                groupListing: n,
                guild: s,
                expanded: l,
                handleToggleExpanded: r,
                subscriptionInfo: a,
            } = (function (e) {
                let t = (0, AE.M)(e),
                    i = (0, g.bG)([Ah.A], () => Ah.A.getSubscriptionListingForPlan(t)),
                    n = (0, g.bG)([Ah.A], () =>
                        null != i ? Ah.A.getSubscriptionGroupListingForSubscriptionListing(i.id) : null,
                    ),
                    s = (0, g.bG)([eo.A], () => eo.A.getGuild(n?.guild_id)),
                    [l, r] = S.useState(!1),
                    { fetchSubscriptionsSettings: a } = (0, As.XE)();
                S.useEffect(() => {
                    l && null != s && null == Ah.A.getSubscriptionSettings(s.id) && a(s.id);
                }, [l, s, a]);
                let o =
                    null == i
                        ? void 0
                        : (function (e) {
                              let { subscription: t } = e,
                                  i = rV()(t.currentPeriodEnd).format("M/D/YY"),
                                  n = null != t.price ? (0, dE.$g)(t.price, t.currency) : "",
                                  s = rV()(t.createdAt).format("M/D/YY"),
                                  l = t.status === eg.Dmq.CANCELED,
                                  r = t.status === eg.Dmq.PAST_DUE,
                                  a = t.hasActiveTrial;
                              return {
                                  memberSince: s,
                                  nextRenewalDate: i,
                                  nextRenewalLabel: l ? j.intl.string(j.t.UAfot2) : j.intl.string(j.t.CVjLcM),
                                  subscriptionPrice: n,
                                  isCancelled: l,
                                  isPastDue: r,
                                  isTrial: a,
                              };
                          })({ subscription: e });
                return {
                    guild: s,
                    expanded: l,
                    handleToggleExpanded: () => r((e) => !e),
                    listing: i,
                    groupListing: n,
                    subscriptionInfo: o,
                };
            })(t),
            [o, d] = S.useState(!1),
            c = (0, sy.GV)(),
            { analyticsLocations: m } = (0, nH.Ay)(),
            { shouldHideGuildPurchaseEntryPoints: A } = (0, Ac.MH)(s?.id),
            h = t?.isPurchasedViaAppleGeneric;
        if (null == n || null == i || null == a) return null;
        let T = async () => {
                try {
                    d(!0),
                        await dg.QP(t, m),
                        (0, AN.E)({ title: j.intl.string(j.t.oPV2cy), body: j.intl.string(j.t.DdRizV) });
                } finally {
                    d(!1);
                }
            },
            {
                isCancelled: x,
                isPastDue: p,
                subscriptionPrice: f,
                memberSince: N,
                nextRenewalDate: _,
                nextRenewalLabel: I,
                isTrial: C,
            } = a,
            b = i.soft_deleted || null == s || h;
        return (0, E.jsxs)("div", {
            className: AI.kL,
            children: [
                (0, E.jsx)(AS.A, {
                    onClick: r,
                    className: AI.N1,
                    children: (e) => {
                        let { areaRef: t, handleStopPropagation: n } = e;
                        return (0, E.jsxs)(E.Fragment, {
                            children: [
                                null != s && (0, E.jsx)(gK.Ay, { guild: s, active: !0, size: gK.Ay.Sizes.MEDIUM }),
                                (0, E.jsxs)("div", {
                                    className: AI.if,
                                    children: [
                                        (0, E.jsx)(ee.E, {
                                            variant: "text-md/medium",
                                            className: AI.J5,
                                            children: null != s ? s.name : j.intl.string(j.t["He+cmd"]),
                                        }),
                                        (0, E.jsxs)("div", {
                                            className: AI.xp,
                                            children: [
                                                (0, E.jsx)(ee.E, {
                                                    variant: "text-sm/normal",
                                                    className: AI.KR,
                                                    children: i.name,
                                                }),
                                                x
                                                    ? (0, E.jsx)(so.Lp, { text: j.intl.string(j.t["7uFZGt"]) })
                                                    : C
                                                      ? (0, E.jsx)(so.Lp, {
                                                            text: j.intl.string(j.t["6anton"]),
                                                            color: ei.A.unsafe_rawColors.BRAND_500.css,
                                                        })
                                                      : p
                                                        ? (0, E.jsx)(ts.m, {
                                                              text: j.intl.string(j.t.eSuJE2),
                                                              children: (0, E.jsx)("div", {
                                                                  children: (0, E.jsx)(so.Lp, {
                                                                      className: AI.qc,
                                                                      text: j.intl.string(j.t.NrRwIl),
                                                                      color: ei.A.unsafe_rawColors.YELLOW_300.css,
                                                                  }),
                                                              }),
                                                          })
                                                        : null,
                                                h
                                                    ? (0, E.jsx)(ts.m, {
                                                          text: j.intl.string(j.t.nv1IqK),
                                                          children: (0, E.jsx)("div", {
                                                              children: (0, E.jsx)(so.Lp, {
                                                                  text: j.intl.string(j.t["sBl3X/"]),
                                                                  color: ei.A.colors.BACKGROUND_MOD_MUTED.css,
                                                              }),
                                                          }),
                                                      })
                                                    : null,
                                            ],
                                        }),
                                    ],
                                }),
                                (0, E.jsx)($.D, {
                                    onClick: n(r),
                                    "aria-label": j.intl.string(j.t.e5eQOy),
                                    "aria-controls": c,
                                    "aria-expanded": l,
                                    focusProps: { ringTarget: t },
                                    children: (0, E.jsx)(et.a, {
                                        size: "md",
                                        color: "currentColor",
                                        className: e2()(AI.D6, { [AI.S7]: l }),
                                    }),
                                }),
                            ],
                        });
                    },
                }),
                l
                    ? (0, E.jsxs)("div", {
                          id: c,
                          children: [
                              (0, E.jsx)("div", { className: AI.yF }),
                              (0, E.jsx)(AT.A, { groupListingId: n.id, subscription: t, className: AI.kE }),
                              (0, E.jsxs)("div", {
                                  className: AI.Zx,
                                  children: [
                                      (0, E.jsx)(AC, { label: I, value: _ }),
                                      (0, E.jsx)(AC, {
                                          label: j.intl.string(j.t.dltUMH),
                                          value: f,
                                          showInfoIcon: C,
                                          infoIconTooltipText: C ? j.intl.string(j.t["/q6fpa"]) : void 0,
                                      }),
                                      (0, E.jsx)(AC, { label: j.intl.string(j.t.AOcwWB), value: N }),
                                  ],
                              }),
                              (0, E.jsx)(m9.h, { size: 16 }),
                              !x &&
                                  !h &&
                                  (0, E.jsx)(sV.D, {
                                      label: j.intl.string(j.t.wmMFvA),
                                      children: (0, E.jsx)(Ab, { subscription: t }),
                                  }),
                              !b &&
                                  (0, E.jsx)(Av, {
                                      isTrial: C,
                                      isCancelled: x,
                                      isResubscribing: o,
                                      shouldHideRoleSubscriptionEntryPoints: A,
                                      onCancelSubscriptionClick: () => {
                                          if (null != s) {
                                              var e;
                                              (e = { groupListing: n, listing: i, subscription: t }),
                                                  (0, z.openModal)((t) => (0, E.jsx)(Af, { ...t, ...e }));
                                          }
                                      },
                                      onChangePlanClick: () => {
                                          null != s &&
                                              ((0, sk.pX)(eg.BVt.CHANNEL(s.id, A_.VV.ROLE_SUBSCRIPTIONS)),
                                              (0, sC.default)(),
                                              Ao.A.show(
                                                  eg.kqX.BACK_TO_PREVIOUS_SCREEN,
                                                  void 0,
                                                  j.intl.string(j.t.DvbaM4),
                                                  () => {
                                                      AA.A.setState({ subsection: nU.nR }),
                                                          (0, eY.openUserSettings)(u.X.SUBSCRIPTIONS_PANEL);
                                                  },
                                              ));
                                      },
                                      onResubscribeClick: T,
                                  }),
                          ],
                      })
                    : null,
            ],
        });
    };
var Aj = i(170272);
let AO = (e) => {
    let { onGoBack: t } = e,
        i = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, g.bG)([Al.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [Al.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                i = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (i = !0);
                            }),
                            i)
                                ? Ar.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? Ar.M_.NONE
                                  : Ar.M_.IN_SUBSCRIPTION_SERVER;
                        })([Al.A]),
                    ) === Ar.M_.SUBSCRIBED,
                i = (0, g.bG)([dY.A], () => dY.A.getActiveGuildSubscriptions()),
                n = S.useRef(!1);
            return (
                S.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: i, hasRoleSubscriptions: n } = e,
                            s = dY.A.getActiveGuildSubscriptions();
                        return (
                            ((s?.length ?? 0) === 0 && !!n) || (!!t && !i) || (!i && !dY.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: n.current }) &&
                        ((n.current = !0), dg.hP());
                }, [e, t]),
                i ?? Aa
            );
        })(),
        { loading: n } = (0, As.eb)(i);
    return ((0, An.A)(dx.Fr ? "role-subscriptions-user-setting" : void 0), n)
        ? (0, E.jsx)(dr.y, {})
        : 0 === i.length
          ? null
          : (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(eD.$, { text: j.intl.string(j.t.hqyhKQ), icon: Ai.z, variant: "secondary", onClick: t }),
                    (0, E.jsx)(m9.h, { size: 10 }),
                    (0, E.jsx)(ip.n, {
                        label: j.intl.string(j.t["KzCF/6"]),
                        description: j.intl.string(j.t["Y+ucR7"]),
                        children: (0, E.jsx)("div", {
                            className: Aj.A,
                            children: i.map((e) => (0, E.jsx)(Ay, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var AR = i(327479),
    AL = i(334335);
function AD(e) {
    let { onClickManageSubscription: t, count: i } = e;
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsx)(eL.D, { variant: "heading-md/bold", children: j.intl.string(j.t["48ywCu"]) }),
            (0, E.jsx)(m9.h, { size: 4 }),
            (0, E.jsx)(ee.E, { variant: "text-md/normal", className: AL.yV, children: j.intl.string(j.t.VWxmSo) }),
            (0, E.jsx)(m9.h, { size: 24 }),
            (0, E.jsxs)("div", {
                className: AL.Nr,
                children: [
                    (0, E.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: AL._e }),
                    (0, E.jsxs)("div", {
                        className: AL.FS,
                        children: [
                            (0, E.jsx)(eL.D, {
                                variant: "heading-xl/semibold",
                                className: AL.wx,
                                children: j.intl.string(j.t["48ywCu"]),
                            }),
                            (0, E.jsx)(ee.E, {
                                variant: "text-md/normal",
                                className: AL.h_,
                                children: j.intl.format(j.t["/esXLj"], { numSubscriptions: i }),
                            }),
                        ],
                    }),
                    (0, E.jsx)(AR.A, { onClick: t, text: j.intl.string(j.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var AP = i(548411),
    AG = i(417098),
    AM = i(143582),
    AU = i(915043),
    AV = i(920087);
function Ak(e) {
    let { className: t, header: i, headerClassName: n, children: s } = e,
        l = S.useMemo(() => {
            let e = !1;
            return (
                S.Children.forEach(s, (t) => {
                    null != t && (e = !0);
                }),
                e
            );
        }, [s]);
    return (0, E.jsxs)("div", {
        className: e2()(AV.iE, t),
        children: [
            (0, E.jsx)("div", { className: e2()(AV.wx, n), children: i }),
            l && (0, E.jsx)("div", { className: AV.Qs, children: s }),
        ],
    });
}
var Aw = i(885996),
    AB = i(144165),
    AF = i(664121),
    Az = i(950305),
    AY = i(943775),
    AX = i(123791),
    AH = i(900797),
    AK = i(632510);
let AW = S.createContext({ isOpen: !1, toggleOpen: () => {} });
function AZ(e) {
    let { children: t } = e,
        [i, n] = S.useReducer((e) => !e, !1),
        s = S.useMemo(() => ({ isOpen: i, toggleOpen: n }), [i]);
    return (0, E.jsx)(AW.Provider, { value: s, children: t(i) });
}
AZ.Toggle = function (e) {
    let { className: t, text: i } = e,
        { isOpen: n, toggleOpen: s } = S.useContext(AW),
        l = n ? AH.t : et.a,
        r = null != i ? i : n ? j.intl.string(j.t.fgq1gs) : j.intl.string(j.t.XJuakA);
    return (0, E.jsxs)($.D, {
        className: e2()(AK.L, t),
        onClick: s,
        children: [
            (0, E.jsx)(ee.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, E.jsx)(l, { size: "sm", color: "currentColor" }),
        ],
    });
};
var Aq = i(243217),
    AQ = i(328968),
    AJ = i(163437),
    A$ = i(3432);
function A0(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var A1 = i(184451),
    A2 = (((s = {})[(s.LOADING = 0)] = "LOADING"), (s[(s.DONE = 1)] = "DONE"), (s[(s.ERROR = 2)] = "ERROR"), s);
function A3(e) {
    let { subscription: t, navigateToSwitchPlan: i, loadingState: n } = e,
        s = t.metadata?.application_subscription_guild_id,
        { renewalMutations: l, planId: r } = t,
        {
            appId: a,
            plan: o,
            storeListing: u,
            isGuildSubscription: d,
            subscriptionForGuild: c,
            sku: m,
            isCancelled: A,
            isOrphanedGuildSubscription: h,
            renewalPlan: x,
        } = (0, g.cf)([cy.A, cj.A, AQ.A, eo.A], () => {
            let e,
                i = cy.A.get(r),
                n = null != i ? cj.A.get(i.skuId) : void 0,
                a = n?.applicationId,
                o = null != i ? AQ.A.getForSKU(i.skuId) : null,
                u = null != o && (0, AJ.PJ)(o.skuFlags),
                d = u && null != s ? eo.A.getGuild(s) : void 0,
                c = (0, AJ.Uo)(t, n),
                g = u && null != s && null == d;
            if (!1 === c && null != l && l.items.length > 0) {
                let t = l.items[0];
                e = cy.A.get(t.planId) ?? void 0;
            }
            return {
                appId: a,
                isGuildSubscription: u,
                isOrphanedGuildSubscription: g,
                plan: i,
                sku: n,
                storeListing: o,
                subscriptionForGuild: d,
                isCancelled: c,
                renewalPlan: e,
            };
        }, [s, r, l, t]),
        { data: p } = (0, T.YY)(a),
        f = S.useMemo(() => (null != p ? (0, AY.A)(p, 100) : null), [p]),
        N = m?.deleted ?? !1,
        _ = null != m && (0, AJ.Se)(m),
        I = t.status === eg.Dmq.PAST_DUE,
        { analyticsLocations: C } = (0, nH.Ay)(),
        [b] = (0, Ag.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: C,
            analyticsLocation: e$.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        v = A0(t.currentPeriodEnd),
        y = 0 === n;
    return (0, E.jsxs)(Ak, {
        headerClassName: A1.dL,
        header:
            !1 === y
                ? (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsxs)("div", {
                              className: A1.VW,
                              children: [
                                  null != f &&
                                      (0, E.jsx)(AB._, { src: f.href, imageClassName: A1.Z2, width: 40, height: 40 }),
                                  (0, E.jsxs)("div", {
                                      className: A1.aF,
                                      children: [
                                          (0, E.jsx)(eL.D, {
                                              variant: "heading-md/semibold",
                                              lineClamp: 1,
                                              children: p?.name ?? j.intl.string(j.t["7kqy7W"]),
                                          }),
                                          (0, E.jsx)(ee.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              lineClamp: 1,
                                              children: o?.name ?? j.intl.string(j.t.sqkbMK),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, E.jsx)("div", {
                              className: A1.Pz,
                              children:
                                  null != p &&
                                  null != u &&
                                  null != m &&
                                  (0, E.jsx)(A8, {
                                      subscription: t,
                                      app: p,
                                      guild: c,
                                      sku: m,
                                      storeListing: u,
                                      isCancelled: A,
                                      isOrphanedGuildSubscription: h,
                                      navigateToSwitchPlan: i,
                                      renewalSkuId: x?.skuId,
                                  }),
                          }),
                      ],
                  })
                : (0, E.jsx)(dr.y, { type: dr.t.PULSING_ELLIPSIS }),
        children: [
            A &&
                (0, E.jsx)(A7, {
                    type: "warning",
                    title: _
                        ? j.intl.formatToPlainString(j.t.QOnM1y, { subscriptionPeriodEnd: v })
                        : j.intl.formatToPlainString(j.t.HOaZu8, { subscriptionPeriodEnd: v }),
                }),
            !A && h && (0, E.jsx)(A7, { type: "warning", title: j.intl.string(j.t.SmSP8Q) }),
            I && (0, E.jsx)(A7, { type: "danger", title: j.intl.string(j.t.fvOqBo) }),
            (0, E.jsxs)("div", {
                className: A1.zH,
                children: [
                    (0, E.jsx)(A5, {
                        title: j.intl.string(j.t["5D/KEH"]),
                        content: d
                            ? (0, E.jsxs)(E.Fragment, {
                                  children: [
                                      (0, E.jsxs)("span", {
                                          className: A1.yW,
                                          children: [(0, E.jsx)(AF.R, { size: "xs" }), j.intl.string(j.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, E.jsxs)("span", {
                                              className: A1._t,
                                              children: [
                                                  (0, E.jsx)(ee.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: j.intl.format(j.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, E.jsx)(gK.Ay, { guild: c, size: gK.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, E.jsxs)("span", {
                                  className: A1.yW,
                                  children: [(0, E.jsx)(Az.n, { size: "xs" }), j.intl.string(j.t["6anEVv"])],
                              }),
                    }),
                    (0, E.jsx)(A6, { invoicePreview: b, subscriptionPlan: o }),
                    (0, E.jsx)(A5, {
                        title: j.intl.string(j.t.dnUzb6),
                        content: A0(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, E.jsx)(A4, { isCancelled: A, subscriptionPeriodEnd: v, renewalPlan: x }),
                ],
            }),
            (0, E.jsx)(he, {
                subscription: t,
                currentInvoicePreview: b,
                loadingState: n,
                isDeleted: N,
                isCancelled: A,
            }),
            null != p &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, E.jsx)(A9, { appId: p.id, listingBenefits: u.benefits }),
        ],
    });
}
function A6(e) {
    let { subscriptionPlan: t, invoicePreview: i } = e;
    if (null == t) return (0, E.jsx)(A5, { title: j.intl.string(j.t.KI7ERx), content: "" });
    let n = (0, dE.CE)((0, dE.$g)(t.price, t.currency), t.interval, t.intervalCount),
        s = i?.findInvoiceItemByPlanId(t.id);
    if (null == s) return (0, E.jsx)(A5, { title: j.intl.string(j.t.KI7ERx), content: n });
    let l = (0, dE.CE)((0, dE.$g)(s.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, E.jsx)(A5, {
        title: j.intl.string(j.t.KI7ERx),
        content: (0, E.jsxs)(E.Fragment, {
            children: [
                (0, E.jsx)(ee.E, { variant: "text-sm/semibold", children: l }),
                l !== n &&
                    (0, E.jsx)(ts.m, {
                        text: j.intl.format(j.t["6DoE57"], { listPrice: n }),
                        position: "bottom",
                        children: (0, E.jsx)(ee.E, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: (0, E.jsx)("s", { children: n }),
                        }),
                    }),
            ],
        }),
    });
}
function A4(e) {
    let { isCancelled: t, subscriptionPeriodEnd: i, renewalPlan: n } = e;
    if (null != n) {
        let e = (0, dE.CE)((0, dE.$g)(n.price, n.currency), n.interval, n.intervalCount);
        return (0, E.jsx)(A5, {
            title: j.intl.string(j.t.hIhAM3),
            content: (0, E.jsxs)(E.Fragment, {
                children: [
                    (0, E.jsx)(ee.E, { variant: "text-sm/medium", children: i }),
                    (0, E.jsx)(ee.E, {
                        variant: "text-sm/normal",
                        children: j.intl.format(j.t.MCLbvj, { planName: n.name, price: e }),
                    }),
                ],
            }),
        });
    }
    return (0, E.jsx)(A5, { title: t ? j.intl.string(j.t.enxcAl) : j.intl.string(j.t["Ms+6Zq"]), content: i });
}
function A5(e) {
    let { title: t, content: i } = e;
    return (0, E.jsxs)("div", {
        className: A1.nM,
        children: [
            (0, E.jsx)(ee.E, { variant: "text-sm/medium", children: t }),
            (0, E.jsx)(ee.E, { variant: "text-sm/medium", className: A1.u4, children: i }),
        ],
    });
}
function A7(e) {
    let { type: t, title: i } = e;
    return (0, E.jsx)(tx.p, {
        messageType: "warning" === t ? tx.Y.WARNING : tx.Y.ERROR,
        className: A1.Xm,
        children: (0, E.jsx)(ee.E, { variant: "text-sm/normal", children: i }),
    });
}
function A8(e) {
    let {
            app: t,
            storeListing: n,
            sku: s,
            subscription: l,
            isCancelled: r,
            isOrphanedGuildSubscription: a,
            guild: o,
            renewalSkuId: u,
            navigateToSwitchPlan: d,
        } = e,
        c = (0, AJ.Se)(s),
        { analyticsLocations: m } = (0, nH.Ay)(),
        [A, h] = S.useState(!1),
        T = (0, AX.C)(t.id),
        x = (0, g.bG)([cj.A], () => cj.A.getParentSKU(n.skuId), [n.skuId]),
        p = S.useMemo(() => {
            var e, t;
            let i;
            return null == x
                ? []
                : ((e = n.id),
                  (t = T.subscriptions),
                  (i = new Set(x.bundledSkuIds)),
                  t.filter((t) => t.id !== e && i.has(t.skuId)));
        }, [n.id, T, x]),
        f = 0 !== p.length,
        N = async () => {
            try {
                h(!0);
                let { subscription: e } = await (0, dg.QP)(l, m);
                if (null == e) return;
                (0, z.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([i.e("47869"), i.e("52396")]).then(i.bind(i, 115623));
                    return (i) => (0, E.jsx)(t, { ...i, storeListing: n, subscription: Aq.A.createFromServer(e) });
                });
            } finally {
                h(!1);
            }
        };
    return (0, E.jsxs)("div", {
        className: A1.fw,
        children: [
            c || (r && a)
                ? null
                : r
                  ? (0, E.jsx)(eD.$, {
                        variant: "secondary",
                        size: "sm",
                        text: j.intl.string(j.t.QtMnkW),
                        onClick: N,
                        loading: A,
                    })
                  : (0, E.jsx)(eD.$, {
                        variant: "secondary",
                        size: "sm",
                        text: j.intl.string(j.t["E8G/tr"]),
                        onClick: () => {
                            (0, z.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([i.e("1426"), i.e("22800")]).then(
                                    i.bind(i, 301139),
                                );
                                return (i) =>
                                    (0, E.jsx)(e, { ...i, application: t, storeListing: n, subscription: l, guild: o });
                            });
                        },
                    }),
            f &&
                null != x &&
                !1 === r &&
                !1 === a &&
                (0, E.jsx)(eD.$, {
                    variant: "primary",
                    size: "sm",
                    text: j.intl.string(j.t.R74ZBR),
                    onClick: () => {
                        d({
                            currentSubscription: l,
                            alternativeListings: p,
                            app: t,
                            subscriptionGroup: x,
                            currentListing: n,
                            renewalSkuId: u,
                        });
                    },
                }),
        ],
    });
}
function A9(e) {
    let { appId: t, listingBenefits: i } = e;
    return (0, E.jsx)(AZ, {
        children: (e) =>
            (0, E.jsxs)("div", {
                className: A1.PX,
                children: [
                    (0, E.jsxs)("div", {
                        className: A1.wV,
                        children: [
                            e && (0, E.jsx)(ee.E, { variant: "text-sm/semibold", children: j.intl.string(j.t.mORL67) }),
                            (0, E.jsx)(AZ.Toggle, {
                                className: A1.Bh,
                                text: e ? j.intl.string(j.t.gsbFAw) : j.intl.string(j.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? i.map((e) => {
                              let { id: i, name: n, description: s, icon: l } = e;
                              return (0, E.jsx)(Aw.FY, { header: n, icon: (0, A$.N)(t, l), description: s }, i);
                          })
                        : null,
                ],
            }),
    });
}
function he(e) {
    let { subscription: t, currentInvoicePreview: i, loadingState: n, isDeleted: s, isCancelled: l } = e;
    return null == i
        ? null
        : 0 === n
          ? (0, E.jsx)("div", {
                className: A1.Ji,
                children: (0, E.jsx)(sV.D, {
                    label: j.intl.string(j.t.azZaZa),
                    children: (0, E.jsx)(dr.y, { type: dr.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === n
            ? (0, E.jsx)("div", {
                  className: A1.Ji,
                  children: (0, E.jsxs)(AG.$T, {
                      color: AG.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          j.intl.format(j.t.IIHUUF, { subscriptionId: t.id }),
                          (0, E.jsx)("br", {}),
                          j.intl.format(j.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, E.jsx)("div", {
                  className: A1.Ji,
                  children: (0, E.jsx)(sV.D, {
                      label: j.intl.string(j.t.azZaZa),
                      children: (0, E.jsx)(Am.A, { subscription: t, currentInvoicePreview: i, disabled: s || l }),
                  }),
              });
}
var ht = (((l = {}).HOME = "HOME"), (l.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), l);
i(938796);
var hi = i(38405);
let hn = (0, g.UT)(cy.A, {
    getQueryId: eg.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = cy.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && hi.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, gs.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var hs = i(240248),
    hl = i(237218),
    hr = i(988325);
function ha(e) {
    let { children: t, lineClamp: i = 2, ...n } = e,
        [s, l] = S.useState(!1),
        [r, a] = S.useState(null),
        o =
            null != r &&
            (0, E.jsx)("button", {
                className: hr.x6,
                onClick: () => l((e) => !e),
                children: (0, E.jsxs)(ee.E, {
                    className: hr.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        s ? j.intl.string(j.t["JQX/Pb"]) : j.intl.string(j.t.Fbrd8J),
                        s
                            ? (0, E.jsx)(AH.t, { color: ei.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, E.jsx)(et.a, { color: ei.A.colors.TEXT_BRAND, size: "xs" }),
                    ],
                }),
            }),
        [u, d] = S.useState(null),
        c = S.useCallback(() => {
            if (null == u) return;
            let { scrollHeight: e, clientHeight: t } = u;
            e > t && a({ truncatedHeight: t, expandedHeight: e });
        }, [u]);
    S.useEffect(() => {
        requestAnimationFrame(c);
    }, [c, t, i]);
    let g = "auto";
    return (
        null != r && (g = s ? `${r.expandedHeight}px` : `${r.truncatedHeight}px`),
        (0, E.jsxs)("div", {
            children: [
                (0, E.jsx)(ee.E, {
                    ...n,
                    className: hr.Qs,
                    lineClamp: s ? void 0 : i,
                    ref: d,
                    style: { height: g },
                    children: t,
                }),
                o,
            ],
        })
    );
}
var ho = i(827991);
function hu(e) {
    let { cta: t, storeListing: i, className: n } = e,
        { applicationId: s, benefits: l, description: r } = i,
        a = S.useMemo(() => (null == i.thumbnail ? null : (0, hl.t)(s, i.thumbnail, 256)), [s, i.thumbnail]),
        { data: o } = hn(i.skuId),
        u = S.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, dE._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, E.jsxs)(Ak, {
              className: e2()(ho.iE, n),
              header: (0, E.jsxs)(E.Fragment, {
                  children: [
                      (0, E.jsxs)("div", {
                          className: ho.qd,
                          children: [
                              null != a &&
                                  (0, E.jsx)(AB._, { src: a.href, imageClassName: ho.rW, width: 48, height: 48 }),
                              (0, E.jsxs)("div", {
                                  children: [
                                      (0, E.jsx)(eL.D, { variant: "heading-md/bold", children: i.summary }),
                                      (0, E.jsx)(ee.E, { variant: "text-md/medium", children: u }),
                                  ],
                              }),
                          ],
                      }),
                      t,
                  ],
              }),
              children: [
                  !(0, hs.uJ)(r) &&
                      (0, E.jsx)("div", {
                          className: ho.h_,
                          children: (0, E.jsx)(ha, { variant: "text-sm/medium", children: r }),
                      }),
                  null != l &&
                      l.length > 0 &&
                      (0, E.jsx)("div", {
                          className: ho.PX,
                          children: l.map((e) => {
                              let { id: t, name: i, description: n, icon: l } = e;
                              return (0, E.jsx)(Aw.FY, { header: i, icon: (0, A$.N)(s, l), description: n }, t);
                          }),
                      }),
              ],
          });
}
var hd = i(185438),
    hc = i(386011);
function hg(e) {
    let {
            app: t,
            currentSubscription: i,
            currentListing: n,
            alternativeListings: s,
            navigateToHome: l,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, AY.A)(t, 100),
        u = (0, AJ.PJ)(r.flags),
        d = u ? AF.R : Az.n,
        c = u ? j.intl.string(j.t["46YF2D"]) : j.intl.string(j.t.fFyGiA),
        m = i.metadata?.application_subscription_guild_id,
        A = (0, g.bG)([eo.A], () => (u && null != m ? eo.A.getGuild(m) : void 0), [m, u]),
        h = (0, g.bG)([cj.A], () => {
            if (null != a) return cj.A.get(a);
        }, [a]),
        S = A0(i.currentPeriodEnd);
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsxs)("div", {
                className: hc.wx,
                children: [
                    null != o && (0, E.jsx)(AB._, { src: o.href, imageClassName: hc.Z2, width: 48, height: 48 }),
                    (0, E.jsxs)("div", {
                        children: [
                            (0, E.jsx)(eL.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, E.jsxs)("div", {
                                className: hc.p4,
                                children: [
                                    (0, E.jsxs)(eL.D, {
                                        variant: "heading-md/normal",
                                        className: hc.N4,
                                        children: [(0, E.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != A &&
                                        (0, E.jsxs)(E.Fragment, {
                                            children: [
                                                (0, E.jsx)(ee.E, { variant: "text-md/normal", children: "\u2022" }),
                                                (0, E.jsxs)("span", {
                                                    className: hc.vP,
                                                    children: [
                                                        (0, E.jsx)(gK.Ay, { guild: A, size: gK.Ay.Sizes.SMOL }),
                                                        (0, E.jsx)(eL.D, {
                                                            variant: "heading-md/semibold",
                                                            color: "text-muted",
                                                            children: j.intl.format(j.t["7ZD8p1"], {
                                                                guildName: A.name,
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)(AZ, {
                children: (e) =>
                    (0, E.jsxs)("div", {
                        className: hc._B,
                        children: [
                            (0, E.jsx)(ee.E, { variant: "text-md/normal", children: j.intl.string(j.t["goe+hk"]) }),
                            e &&
                                (0, E.jsxs)(E.Fragment, {
                                    children: [
                                        (0, E.jsx)(ee.E, {
                                            variant: "text-md/normal",
                                            children: j.intl.format(j.t["Q8qJ+5"], {}),
                                        }),
                                        (0, E.jsx)(ee.E, {
                                            variant: "text-md/normal",
                                            children: j.intl.format(j.t.sqowYz, {}),
                                        }),
                                    ],
                                }),
                            (0, E.jsx)(AZ.Toggle, {
                                text: e ? j.intl.string(j.t["1Rkq/E"]) : j.intl.string(j.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, E.jsxs)("div", {
                className: hc.x0,
                children: [
                    (0, E.jsx)(hu, {
                        storeListing: n,
                        className: hc.o3,
                        cta: (0, E.jsxs)("div", {
                            className: hc.cJ,
                            children: [
                                (0, E.jsx)(ee.E, {
                                    variant: "eyebrow",
                                    color: "text-brand",
                                    children: j.intl.string(j.t.fHIpOY),
                                }),
                                null != h &&
                                    (0, E.jsx)(ee.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: j.intl.format(j.t["OQk+jr"], { endDate: S }),
                                    }),
                            ],
                        }),
                    }),
                    s.map((e) =>
                        e.skuId === a
                            ? (0, E.jsx)(
                                  hu,
                                  {
                                      storeListing: e,
                                      cta: (0, E.jsx)(ee.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-subtle",
                                          children: j.intl.format(j.t.nn88hB, { startDate: S }),
                                      }),
                                  },
                                  e.id,
                              )
                            : (0, E.jsx)(hm, { storeListing: e, guildId: m, navigateToHome: l }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function hm(e) {
    let { storeListing: t, guildId: i, navigateToHome: n } = e,
        { openModal: s } = (0, hd.A)({
            analyticsLocation: eg.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: i,
            disableGuildSelector: !0,
            onComplete: n,
        });
    return (0, E.jsx)(hu, {
        storeListing: t,
        cta: (0, E.jsx)(eD.$, { variant: "primary", size: "sm", text: j.intl.string(j.t["+KwmBt"]), onClick: s }),
    });
}
class hA extends S.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, E.jsxs)(AG.$T, {
                  color: AG.Hv.DANGER,
                  style: { borderRadius: 0 },
                  children: [
                      j.intl.format(j.t.IIHUUF, { subscriptionId: this.props.subscription.id }),
                      " ",
                      j.intl.format(j.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                  ],
              })
            : this.props.children;
    }
}
function hh(e) {
    let { subscriptions: t, updateHeader: i } = e,
        [n, s] = S.useState({ route: ht.HOME }),
        { route: l } = n,
        r = () => {
            s({ route: ht.HOME });
        },
        a = (e) => {
            s({ route: ht.SWITCH_APP_PLANS, ...e }), i(j.intl.string(j.t.VFqtkP), r);
        },
        [o, u] = S.useState({});
    S.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: A2.LOADING })),
                (0, AM._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: A2.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: A2.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, AU.E)(),
        c = d !== AU.mJ.LOADED;
    switch (l) {
        case ht.HOME:
            return (0, E.jsx)(E.Fragment, {
                children: t.map((e) =>
                    (0, E.jsx)(
                        hA,
                        {
                            subscription: e,
                            children: (0, E.jsx)(A3, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? A2.LOADING : (o[e.id] ?? A2.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case ht.SWITCH_APP_PLANS:
            let { route: g, ...m } = n;
            return (0, E.jsx)(hg, { ...m, navigateToHome: r });
        default:
            (0, N.xb)(l);
    }
}
var hE = i(470464);
function hS(e) {
    let { onGoBack: t } = e,
        i = (0, g.yK)(
            [dY.A],
            () =>
                dY.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [n, s] = S.useState();
    return (
        null == n && (n = (0, E.jsx)(hT, { onBack: t, title: j.intl.string(j.t["DB/m9a"]) })),
        (0, E.jsxs)("div", {
            children: [
                n,
                (0, E.jsx)("div", {
                    className: hE.A,
                    children: (0, E.jsx)(hh, {
                        subscriptions: i,
                        updateHeader: (e, t) => {
                            s(
                                (0, E.jsx)(hT, {
                                    title: e,
                                    onBack: () => {
                                        t(), s(void 0);
                                    },
                                }),
                            );
                        },
                    }),
                }),
            ],
        })
    );
}
function hT(e) {
    let { onBack: t, title: i } = e;
    return (0, E.jsxs)("div", {
        className: hE.D,
        children: [
            (0, E.jsx)(lj.K, {
                "aria-label": j.intl.string(j.t["13/7kX"]),
                icon: () => (0, E.jsx)(AP.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, E.jsx)(eL.D, { variant: "heading-lg/semibold", children: i }),
        ],
    });
}
var hx = i(366999),
    hp = i(466919),
    hf = i(441924);
function hN(e) {
    let t,
        i,
        {
            showChargingUpState: n,
            rowValueText: s,
            endsAt: l,
            fractionalState: r,
            activationDate: a,
            hasPremiumGroup: o,
        } = e;
    o
        ? ((t = j.intl.string(hp.default["/S02sx"])), (i = j.intl.string(hp.default.OPJNST)))
        : n
          ? ((t = j.intl.string(j.t["hT6i/0"])),
            (i = null != a ? j.intl.format(j.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = j.intl.string(j.t["3G0CTC"])),
            (i = r === sO.xc.FP_SUB_PAUSED ? j.intl.format(j.t.MMvaIG, { resumeDate: l.toDate() }) : null));
    let u = e2()({ [hf.Hs]: n, [hf.mT]: !n }),
        d = e2()({ [hf.CQ]: n, [hf.ZM]: !n }),
        c = e2()({ [hf.EM]: !n });
    return (0, E.jsxs)("div", {
        className: hf.r6,
        children: [
            (0, E.jsxs)("div", {
                className: hf.Nv,
                children: [
                    (0, E.jsx)(eL.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== i && (0, E.jsx)(ee.E, { variant: "text-sm/normal", children: i }),
                ],
            }),
            !o &&
                (0, E.jsx)("div", {
                    className: hf.ZS,
                    children: (0, E.jsx)("div", {
                        className: u,
                        children: (0, E.jsx)(ee.E, { variant: "text-sm/semibold", className: d, children: s }),
                    }),
                }),
        ],
    });
}
let h_ = function (e) {
    let { fractionalPremiumInfo: t, className: i, activationDate: n, hasPremiumGroup: s } = e,
        l = (0, ul.kX)(t),
        r = l.length > 0,
        a = (0, hx.Ay)(t.endsAt, hx.yE.SHORT_TIME),
        o = r ? l : a;
    return (0, E.jsx)("div", {
        children: (0, E.jsxs)("div", {
            className: e2()(i, hf.f8),
            children: [
                (0, E.jsx)("div", {
                    className: hf.J_,
                    children: (0, E.jsxs)("div", {
                        className: hf.Bh,
                        children: [
                            (0, E.jsx)("div", {
                                className: hf.xt,
                                children: (0, E.jsx)(o5.t, { size: "md", color: "white", className: hf.T8 }),
                            }),
                            (0, E.jsx)("div", {
                                className: hf.pt,
                                children: (0, E.jsx)(eL.D, {
                                    variant: "heading-md/semibold",
                                    children: j.intl.string(j.t.DFMPWS),
                                }),
                            }),
                            (0, E.jsx)(ee.E, {
                                className: hf.PJ,
                                variant: "text-md/semibold",
                                children: l.length > 0 ? l : j.intl.string(j.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, E.jsx)(hN, {
                    showChargingUpState: r,
                    rowValueText: o,
                    endsAt: t.endsAt,
                    fractionalState: t.fractionalState,
                    activationDate: n,
                    hasPremiumGroup: s,
                }),
            ],
        }),
    });
};
var hI = i(868942);
function hC(e) {
    let t,
        {
            user: i,
            planId: n,
            count: s,
            userPremiumSubscription: l,
            unconsumedFractionalPremiumUnits: r = [],
            hasPremiumGroup: a,
        } = e,
        [o, u] = (0, g.yK)([cy.A], () => [cy.A.get(n), null != l ? cy.A.get(l.planId) : null]);
    if (null == o || ul.Ay.getInterval(n).intervalType !== sO.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        c = o.skuId === d,
        m = ul.Ay.getDisplayName(n);
    if (a) t = j.intl.string(hp.default["5asczk"]);
    else if (c && null != l) {
        let e;
        e = new Date(l.status === eg.Dmq.PAUSED && null != l.pauseEndsAt ? l.pauseEndsAt : l.currentPeriodEnd);
        let i = (0, ul._e)(e, r);
        t = j.intl.formatToPlainString(j.t["5CNRRA"], { date: i ?? 0 });
    } else t = j.intl.formatToPlainString(j.t.eNXZ5O, { planName: m });
    let A = i.hasFreePremium() || (null != l && l.isPurchasedExternally);
    return (0, E.jsxs)("div", {
        className: hf.Bh,
        children: [
            (0, E.jsx)("div", {
                className: e2()({
                    [hf.sr]: o.skuId === sO.pe.TIER_0,
                    [hf.lP]: o.skuId === sO.pe.TIER_1,
                    [hf.eb]: o.skuId === sO.pe.TIER_2,
                }),
                children: (0, E.jsx)(o5.t, { size: "md", color: "currentColor", className: hf.Kk }),
            }),
            (0, E.jsxs)("div", {
                className: hf.pt,
                children: [
                    (0, E.jsx)(eL.D, {
                        variant: "heading-md/semibold",
                        children: j.intl.format(j.t.LzobT9, { planName: m }),
                    }),
                    !A &&
                        (0, E.jsx)(eL.D, {
                            className: hf.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, E.jsx)(ee.E, {
                className: hf.PJ,
                variant: "text-md/semibold",
                children: j.intl.format(j.t["ess/xl"], { count: s }),
            }),
        ],
    });
}
let hb = function (e) {
    let { className: t, entitlements: i } = e,
        n = eK()(Array.from(i))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: i, consumed: n } = e;
                return null != t && null != i && !n;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        s = (0, g.yK)([cS.A], () => cS.A.getUnactivatedFractionalPremiumUnits()),
        l = (0, g.bG)([dY.A], () => dY.A.getPremiumSubscription()),
        r = (0, g.bG)([dY.A], () => null == dY.A.getPremiumTypeSubscription()),
        a = Object.keys(n).some((e) => e === sO.gD.PREMIUM_MONTH_TIER_1),
        o = (0, g.bG)([ir.default], () => ir.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsx)("div", {
                className: e2()(t, hf.xF, hf.J_),
                children: Object.keys(n).map((e) =>
                    (0, E.jsx)(
                        hC,
                        {
                            planId: e,
                            count: n[e].length,
                            userPremiumSubscription: l,
                            user: o,
                            unconsumedFractionalPremiumUnits: s,
                            hasPremiumGroup: u,
                        },
                        e,
                    ),
                ),
            }),
            a &&
                r &&
                (0, E.jsxs)("div", {
                    children: [
                        (0, E.jsx)(ee.E, {
                            className: hf.eT,
                            variant: "text-md/normal",
                            children: j.intl.string(j.t["VNr4+O"]),
                        }),
                        (0, E.jsx)(hI.i, {}),
                    ],
                }),
        ],
    });
};
var hv = i(50919);
function hy(e) {
    let t,
        { subscription: i, withOverheadSeparator: n } = e,
        { analyticsLocations: s } = (0, nH.Ay)(),
        [l] = (0, Ag.YV)({
            subscriptionId: i.id,
            renewal: !0,
            analyticsLocations: s,
            analyticsLocation: e$.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == l) return null;
    let r = n ? hv.r : hv.a,
        a = l.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, ul.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = cy.A.get(o);
    tB()(null != u, "Missing plan");
    let d = (0, dE.$g)(l.total, l.currency);
    return (
        u.interval === sO.WT.YEAR
            ? (t = j.intl.format(j.t["jPz/39"], {
                  price: d,
                  termsUrl: eg.X7G.TERMS,
                  paidURL: eg.X7G.PAID_TERMS,
                  privacyUrl: eg.X7G.PRIVACY,
              }))
            : u.interval === sO.WT.MONTH &&
              (t =
                  1 === u.intervalCount
                      ? j.intl.format(j.t.m27GpI, {
                            price: d,
                            termsUrl: eg.X7G.TERMS,
                            paidURL: eg.X7G.PAID_TERMS,
                            privacyUrl: eg.X7G.PRIVACY,
                        })
                      : j.intl.format(j.t["9xf5Vx"], {
                            price: d,
                            termsUrl: eg.X7G.TERMS,
                            paidURL: eg.X7G.PAID_TERMS,
                            privacyUrl: eg.X7G.PRIVACY,
                            intervalCount: u.intervalCount,
                        })),
        (0, E.jsx)(ee.E, { color: "text-muted", className: r, variant: "text-xs/normal", children: t })
    );
}
function hj(e) {
    let { subscription: t, withOverheadSeparator: i } = e;
    return t.status === eg.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, E.jsx)(hy, { subscription: t, withOverheadSeparator: i });
}
var hO = i(735912),
    hR = i(558808);
let hL = { [nU.nR]: "role_subscriptions_panel", [nU.PZ]: "application_subscriptions_panel" };
function hD() {
    return (0, E.jsx)(eI.Z, {
        className: hR.wb,
        type: eI.Z.Types.CUSTOM,
        children: (0, E.jsxs)(lH.A, {
            align: lH.A.Align.CENTER,
            children: [
                (0, E.jsx)(p.A, { game: null, size: p.M.SMALL, className: hR.pV }),
                (0, E.jsx)("span", { className: hR.O, children: j.intl.string(j.t["jy/hyj"]) }),
            ],
        }),
    });
}
function hP(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, m7._)(e, t));
}
function hG() {
    let e = (0, g.bG)([cS.A], () => cS.A.getForApplication(sO.tv), [], hP);
    return (
        S.useEffect(() => {
            (0, ck.LM)(sO.tv);
        }, []),
        (0, E.jsx)(ip.n, {
            label: j.intl.string(j.t["2GKrvn"]),
            description: j.intl.string(j.t.kNEjGm),
            children:
                null != e && ul.Ay.hasAccountCredit(e)
                    ? (0, E.jsx)(hb, { className: hR.fX, entitlements: e })
                    : (0, E.jsx)(hD, {}),
        })
    );
}
function hM() {
    return (0, E.jsx)("hr", { className: hR.hr });
}
let hU = function () {
        var e;
        let t = (0, g.bG)([dY.A], () => dY.A.getPremiumTypeSubscription()),
            i = (0, m8.A)({ subscriptionFilter: (e) => hO.Hy.has(e.status) }),
            n = (0, g.bG)([ir.default], () => ir.default.getCurrentUser()),
            s = i.length > 1,
            l = (0, g.bG)(
                [dz.A],
                () => (null != t && null != t.paymentSourceId ? dz.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, g.bG)([dY.A], () => dY.A.hasFetchedSubscriptions()),
            a = (0, g.bG)([dh.A], () => dh.A.isBusy),
            o = (0, gl.Y)(),
            d = AA.A.useField("subsection");
        S.useEffect(() => {
            (0, rO._)(null != d ? hL[d] : u.X.SUBSCRIPTIONS_PANEL);
        }, [d]);
        let c = (0, g.bG)([dY.A], () => dY.A.getActiveApplicationSubscriptions()?.length ?? 0),
            m = (0, g.bG)(
                [dY.A],
                () =>
                    Object.values(dY.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === eg.rzx.GUILD)
                        .filter((e) => e.status !== eg.Dmq.ENDED).length,
            ),
            A = (0, go.A)({ forceFetch: !0 }),
            h = (0, cY.ds)(),
            T = null !== t ? t.currentPeriodEnd : void 0,
            x =
                !(h && !(A.unactivatedUnits.length > 0)) &&
                (A.fractionalState !== sO.xc.NONE || A.unactivatedUnits.length > 0);
        return (S.useEffect(
            () => (
                ss.h.wait(() => {
                    (0, gs.zS)(), dg.hP(), (0, gn.CD)(), dg.$o();
                }),
                function () {
                    AA.A.resetState();
                }
            ),
            [],
        ),
        ek.A.enabled)
            ? (0, E.jsx)(dn.A, {})
            : r && o
              ? d === nU.nR
                  ? (0, E.jsx)(AO, { onGoBack: () => AA.A.setState({ subsection: null }) })
                  : d === nU.PZ
                    ? (0, E.jsx)(hS, { onGoBack: () => AA.A.setState({ subsection: null }) })
                    : (0, E.jsx)("div", {
                          className: hR.kL,
                          children: (0, E.jsxs)("div", {
                              className: hR.Qs,
                              children: [
                                  s ? (0, E.jsx)(hO.Sb, {}) : null,
                                  null != t
                                      ? (0, E.jsx)(hO.Ay, {
                                            subscription: t,
                                            paymentSource: l,
                                            busy: a,
                                            subscriptions: i,
                                        })
                                      : (0, E.jsx)(hO.TC, {}),
                                  x &&
                                      ((e = !!n?.isPremiumWithPremiumGroup()),
                                      (0, E.jsxs)("section", {
                                          children: [
                                              (0, E.jsx)(eL.D, {
                                                  variant: "heading-md/bold",
                                                  className: hR.HL,
                                                  children: j.intl.string(j.t.Obre8v),
                                              }),
                                              (0, E.jsx)(ee.E, {
                                                  variant: "text-md/normal",
                                                  className: hR.JU,
                                                  children: j.intl.format(j.t["7Zi06b"], {
                                                      helpCenterLink: tp.A.getArticleURL(
                                                          eg.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, E.jsx)(h_, {
                                                  className: hR.fX,
                                                  fractionalPremiumInfo: A,
                                                  activationDate: T,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, E.jsx)(hG, {}),
                                  m > 0 &&
                                      (0, E.jsxs)(E.Fragment, {
                                          children: [
                                              (0, E.jsx)(hM, {}),
                                              (0, E.jsx)(At, {
                                                  count: m,
                                                  onClickManageSubscription: () => AA.A.setState({ subsection: nU.nR }),
                                              }),
                                          ],
                                      }),
                                  c > 0 &&
                                      (0, E.jsxs)(E.Fragment, {
                                          children: [
                                              (0, E.jsx)(hM, {}),
                                              (0, E.jsx)(AD, {
                                                  count: c,
                                                  onClickManageSubscription: () => {
                                                      AA.A.setState({ subsection: nU.PZ }),
                                                          er.default.track(
                                                              eg.HAw
                                                                  .PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                          );
                                                  },
                                              }),
                                          ],
                                      }),
                                  (0, E.jsx)(hM, {}),
                                  null != t ? (0, E.jsx)(hj, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, E.jsx)("div", { className: e2()(hR.kL, hR.Lq), children: (0, E.jsx)(dr.y, {}) });
    },
    hV = (0, a.E2)(u.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [j.intl.string(j.t.trSpHX), j.intl.string(j.t["2GKrvn"])],
        Component: () => (0, E.jsx)(hU, {}),
    }),
    hk = (0, a.zZ)(u.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [j.intl.string(j.t.trSpHX), j.intl.string(j.t["2GKrvn"])],
        buildLayout: () => [hV],
    }),
    hw = (0, a.t_)(u.X.SUBSCRIPTIONS_PANEL, { useTitle: () => j.intl.string(j.t.trSpHX), buildLayout: () => [hk] }),
    hB = (0, a.i4)(u.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.trSpHX),
        icon: m4.L,
        usePersistentBadge: function () {
            return S.useMemo(
                () => ({
                    badgeType: h.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    useCustomBadge: () =>
                        (0, m5.l)() ? (0, E.jsx)(lG.E, { size: "xs", color: ei.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [],
            );
        },
        buildLayout: () => [hw],
    }),
    hF = (0, a.WI)(u.X.BILLING_SECTION, {
        useTitle: () => j.intl.string(j.t.oeUm2s),
        buildLayout: () => [gt, m6, hB, c3, d1],
    });
var hz = i(540999),
    hY = i(306471),
    hX = i(964355),
    hH = i(172272);
let hK = (0, a.zD)(u.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, g.bG)([on.default], () => on.default.isAxeEnabled),
        setValue: (e) => (0, oi.x)({ axeEnabled: e }),
    }),
    hW = (0, a.zD)(u.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, g.bG)([on.default], () => on.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, oi.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var hZ = i(276086),
    hq = i(354328);
let hQ = (0, a.zD)(u.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, hq.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, hZ.L)("highlight_mana_components", e);
        },
    }),
    hJ = (0, a.zD)(u.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, hq.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, hZ.L)("highlight_void_toggleables", e);
        },
    }),
    h$ = (0, a.sN)(u.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, g.bG)([on.default], () => on.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: hH.YR,
        markers: Array.from({ length: hH.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => hH.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            hH.Or.getState().setHorizontalSpacing(e);
        },
    }),
    h0 = (0, a.zD)(u.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, g.bG)([on.default], () => on.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, oi.x)({ layoutDebuggingEnabled: e });
        },
    }),
    h1 = (0, a.sN)(u.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, g.bG)([on.default], () => on.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: hH.YR,
        markers: Array.from({ length: hH.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => hH.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            hH.Or.getState().setVerticalSpacing(e);
        },
    }),
    h2 = (0, a.zZ)(u.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [hW, h0, h$, h1, hQ, hJ, hK],
    }),
    h3 = (0, a.zD)(u.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => L.HZ.useSetting(),
        setValue: (e) => {
            L.HZ.updateSetting(e);
        },
    });
var h6 = i(173936),
    h4 = i(260598),
    h5 = i(148810),
    h7 = i(380610),
    h8 = i(986238),
    h9 = i(727201),
    Ee = i(274446);
let Et = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    Ei = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function En(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class Es extends S.Component {
    handleRemoveBuildOverride = () => {
        this.props.onBuildOverrideRemoved(this.props.project);
    };
    handleOverrideIdChanged = (e) => {
        this.props.onBuildOverrideUpdated(this.props.project, { id: e });
    };
    handleOverrideTypeChanged = (e) => {
        this.props.onBuildOverrideUpdated(this.props.project, { type: e, id: "" });
    };
    render() {
        let { project: e, overrideType: t, overrideId: i, disabled: n, error: s } = this.props;
        return (0, E.jsxs)(lH.A, {
            direction: lH.A.Direction.VERTICAL,
            className: e2()(h9.oS, iG.SX, Ee.N, h9.nM),
            children: [
                (0, E.jsx)(iy.A, {
                    className: e2()(h9.lL, { [h9.zi]: n }),
                    onClick: n ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, E.jsxs)(lH.A, {
                    className: iG.QB,
                    children: [
                        (0, E.jsx)(lH.A.Child, {
                            basis: "50%",
                            children: (0, E.jsx)(ly.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: Ei,
                                onSelectionChange: this.handleOverrideTypeChanged,
                                value: t,
                                disabled: n,
                            }),
                        }),
                        (0, E.jsx)(lH.A.Child, {
                            wrap: !0,
                            basis: "50%",
                            children: (0, E.jsx)(lF.k, {
                                label: "branch" === t ? "Branch Name" : "Commit SHA",
                                value: i,
                                onChange: this.handleOverrideIdChanged,
                                disabled: n,
                            }),
                        }),
                    ],
                }),
                (0, E.jsxs)(lH.A.Child, {
                    children: [
                        null != s &&
                            "" !== s &&
                            (0, E.jsx)(ee.E, {
                                className: h9.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: s,
                            }),
                        (0, E.jsxs)(ee.E, {
                            variant: "text-sm/normal",
                            className: h9.AS,
                            children: [
                                "This controls the build that will be served for the ",
                                (0, E.jsx)("code", { children: e }),
                                " project.",
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
}
class El extends S.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, h7.bD)();
        this.setState({ loading: !1, buildOverrides: e, loadedBuildOverrides: eK().cloneDeep(e), errors: {} });
    }
    isDirty() {
        let { buildOverrides: e, loadedBuildOverrides: t } = this.state;
        return !eK().isEqual(e, t);
    }
    componentDidMount() {
        this.refreshBuildOverrides();
    }
    getAvailableProjects() {
        let { buildOverrides: e } = this.state;
        if (null == e) return [];
        let t = Object.keys(e);
        return eK().without(Et, ...t);
    }
    handleAddBuildOverride = (e) => {
        if (null == e) return;
        let t = { ...this.state.buildOverrides, [e]: { type: "branch", id: "" } };
        this.setState({ buildOverrides: t });
    };
    handleBuildOverrideUpdated = (e, t) => {
        let { buildOverrides: i } = this.state,
            n = { ...(null != i ? i[e] : {}), ...t },
            s = { ...this.state.buildOverrides, [e]: n };
        this.setState({ buildOverrides: s });
    };
    handleBuildOverrideRemoved = (e) => {
        let t = { ...this.state.buildOverrides };
        delete t[e], this.setState({ buildOverrides: t });
    };
    handleDiscardChanges = () => {
        this.setState({ buildOverrides: eK().cloneDeep(this.state.loadedBuildOverrides), errors: {}, didSave: !1 });
    };
    handleSaveChanges = async () => {
        let { buildOverrides: e } = this.state;
        if (null == e) return;
        this.setState({ saving: !0 });
        let t = await (0, h5.Zk)(e);
        if (200 === t.status) {
            let e = t.body;
            this.setState({
                buildOverrides: e,
                loadedBuildOverrides: eK().cloneDeep(e),
                errors: {},
                didSave: !0,
                saving: !1,
            });
        } else if (400 === t.status) {
            let e = t.body;
            this.setState({ errors: e, saving: !1, didSave: !1 });
        } else this.setState({ saving: !1, didSave: !1 });
    };
    handleLinkGeneration = () => {
        let { buildOverrides: e } = this.state;
        (0, z.openModal)((t) => (0, E.jsx)(Er, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, E.jsx)(ix.pp, {
            theme: i_.A.theme,
            className: e2()(iG.eT, iG.SX),
            children: (0, E.jsx)(ix.SG, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: i } = this.state;
        return null == e
            ? null
            : eK().map(e, (e, n) =>
                  (0, E.jsx)(
                      Es,
                      {
                          project: n,
                          overrideType: e.type,
                          overrideId: e.id,
                          disabled: t,
                          error: i[n],
                          onBuildOverrideUpdated: this.handleBuildOverrideUpdated,
                          onBuildOverrideRemoved: this.handleBuildOverrideRemoved,
                      },
                      n,
                  ),
              );
    }
    renderRefreshButton() {
        return !this.state.didSave || this.isDirty()
            ? null
            : (0, E.jsx)(eD.$, { variant: "secondary", text: "Reload App", onClick: () => location.reload() });
    }
    renderLinkButton() {
        let { buildOverrides: e } = this.state;
        return null == e || 0 === Object.keys(e).length
            ? null
            : (0, E.jsx)(ts.m, {
                  text: "Generate Public Link",
                  children: (0, E.jsx)(lj.K, {
                      variant: "secondary",
                      icon: h6.q,
                      "aria-label": "Generate Public Link",
                      onClick: this.handleLinkGeneration,
                  }),
              });
    }
    renderSaveButton() {
        if (!this.isDirty()) return null;
        let { saving: e, buildOverrides: t } = this.state;
        return (0, E.jsxs)(E.Fragment, {
            children: [
                (0, E.jsx)(eD.$, {
                    variant: "critical-primary",
                    text: "Discard Changes",
                    onClick: this.handleDiscardChanges,
                    disabled: e,
                }),
                (0, E.jsx)(eD.$, {
                    variant: "primary",
                    text: "Save Build Overrides",
                    disabled: En(t ?? {}),
                    onClick: this.handleSaveChanges,
                    loading: e,
                }),
            ],
        });
    }
    render() {
        let e,
            { loading: t, saving: i, buildOverrides: n } = this.state;
        e = t
            ? (0, E.jsx)(dr.y, { className: iG.QX })
            : null != n && 0 === Object.keys(n).length
              ? this.renderEmpty()
              : this.renderItems();
        let s = !i && !t && this.getAvailableProjects().length > 0,
            l =
                En(n ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, E.jsx)(ee.E, {
                          color: "text-feedback-critical",
                          variant: "text-md/normal",
                          children:
                              "Mobile build overrides must be generated using the desktop/web stable client for now!",
                      })
                    : null;
        return (0, E.jsx)(ip.n, {
            children: (0, E.jsxs)(K.B, {
                gap: 16,
                children: [
                    (0, E.jsx)(ly.l, {
                        selectionMode: "single",
                        label: "Add Build Override",
                        placeholder: "discord_project",
                        description: "Select a project to create a build override for.",
                        layout: "horizontal-responsive",
                        value: void 0,
                        options: this.getAvailableProjects().map((e) => ({ id: e, label: e, value: e })),
                        onSelectionChange: this.handleAddBuildOverride,
                        disabled: !s,
                    }),
                    l,
                    e,
                    (0, E.jsxs)(aQ.e, {
                        justify: "end",
                        children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                    }),
                ],
            }),
        });
    }
}
class Er extends S.Component {
    state = {
        ttlSeconds: 3600,
        releaseChannel: "all",
        userIds: new Set(),
        userIdEntry: "",
        userIdEntryError: null,
        allowedVersions: [],
        allowedVersionEntry: "",
        allowedVersionEntryError: null,
        publicLink: " ",
        statusText: null,
        status: 0,
        allowLoggedOut: !1,
    };
    setUserEntryError = (e) => {
        this.setState({ userIdEntryError: e });
    };
    setStatusMessage = (() => {
        var e = this;
        return function (t) {
            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            e.setState({ statusText: t, status: i });
        };
    })();
    handleUserIDEntry = (e) => {
        if (!/^[\d\s,]*$/.test(e)) return this.setUserEntryError("User IDs are numbers!");
        let t = new Set(e.split(/[,\s]+/).filter(Boolean));
        this.setState({ userIdEntry: e, userIds: t });
    };
    setAllowedVersionError = (e) => {
        this.setState({ allowedVersionEntryError: e });
    };
    handleAllowedVersionEntry = (e) => {
        this.setState({ allowedVersionEntry: e });
    };
    handleAllowedVersionEnter = (e) => {
        e.key === iO.dh.ENTER && this.handleAddAllowedVersion();
    };
    handleAddAllowedVersion = () => {
        let { allowedVersions: e, allowedVersionEntry: t } = this.state;
        return 0 === (t = t.trim()).length
            ? this.setAllowedVersionError("Enter a valid version number!")
            : e.indexOf(t) >= 0
              ? this.setAllowedVersionError("You already added that version!")
              : void this.setState({
                    allowedVersions: [...e, t],
                    allowedVersionEntry: "",
                    allowedVersionEntryError: "",
                });
    };
    handleRemoveAllowedVersion = (e) => {
        let { allowedVersions: t } = this.state;
        (t = t.filter((t) => t !== e)), this.setState({ allowedVersions: t });
    };
    handleAllowLoggedOut = (e) => {
        this.setState({ allowLoggedOut: e });
    };
    handleExpirationChange = (e) => {
        this.setState({ ttlSeconds: e });
    };
    handleReleaseChannelChange = (e) => {
        this.setState({ releaseChannel: e });
    };
    handleExperiments = (e) => {
        if (0 === e.trim().length) return void this.setState({ experimentsError: void 0 });
        try {
            let t = JSON.parse(e);
            for (let e in t) {
                if (null == e.match(/^[0-9]{4}\-[0-9]{2}(-|_)[a-z0-9_-]+$/))
                    return void this.setState({ experimentsError: `${e} is an invalid experiment name` });
                if ("number" != typeof t[e])
                    return void this.setState({ experimentsError: `${e} has an invalid bucket override` });
            }
        } catch (e) {
            this.setState({ experimentsError: `Unable to parse experiments ${e.message}` });
            return;
        }
        this.setState({ experiments: e, experimentsError: void 0 });
    };
    generatePayload = () => ({
        overrides: this.props.buildOverrides,
        meta: {
            release_channel: "all" === this.state.releaseChannel ? null : this.state.releaseChannel,
            ttl_seconds: this.state.ttlSeconds,
            user_ids: Array.from(this.state.userIds),
            allowed_versions: this.isMobile() ? this.state.allowedVersions : void 0,
            allow_logged_out: this.state.allowLoggedOut,
            experiments: null == this.state.experiments ? null : JSON.parse(this.state.experiments),
        },
    });
    handleGenerateLink = async () => {
        if (this.isMobile() && 0 === this.state.allowedVersions.length)
            return void this.setAllowedVersionError("You must add at least one allowed version for iOS");
        this.setStatusMessage(null);
        let e = this.generatePayload(),
            t = await (0, h5.SB)(e);
        !1 !== t.error
            ? this.setStatusMessage(JSON.stringify(t.error), 0)
            : (this.setState({ publicLink: t.url.toString() }),
              0 === e.meta.user_ids.length &&
                  this.setStatusMessage(
                      "Warning! No users added to the whitelist! This link could be used by anyone to override their build.",
                      1,
                  ));
    };
    isMobile() {
        return En(this.props.buildOverrides ?? {});
    }
    renderSettingsForm() {
        let {
                ttlSeconds: e,
                releaseChannel: t,
                userIdEntry: i,
                userIdEntryError: n,
                allowedVersions: s,
                allowedVersionEntry: l,
                allowedVersionEntryError: r,
                allowLoggedOut: a,
                experiments: o,
                experimentsError: u,
            } = this.state,
            d = h8.fL.find((t) => t.value === e),
            c = s.map((e) => ({ id: e, label: e, value: e }));
        return (0, E.jsxs)(K.B, {
            gap: 20,
            children: [
                (0, E.jsx)(ly.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: h8.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, E.jsx)(ly.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: h8.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, E.jsxs)(K.B, {
                          gap: 20,
                          children: [
                              (0, E.jsx)(lF.k, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: l,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: r,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: { icon: ar.j, onClick: this.handleAddAllowedVersion, "aria-label": "Add" },
                              }),
                              (0, E.jsx)(ly.l, {
                                  selectionMode: "single",
                                  label: "Remove allowed app version",
                                  value: void 0,
                                  options: c,
                                  onSelectionChange: this.handleRemoveAllowedVersion,
                                  disabled: 0 === s.length,
                              }),
                          ],
                      })
                    : null,
                this.isMobile()
                    ? null
                    : (0, E.jsx)(h4.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: i,
                          error: n,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                (0, E.jsx)(h4.f, {
                    label: "Client Experiment Override",
                    description:
                        "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.",
                    value: o,
                    error: u,
                    onChange: this.handleExperiments,
                    placeholder: '{"2022-01_threads":1}',
                }),
                (0, E.jsx)(W.d, { label: "Allow logged out users", checked: a, onChange: this.handleAllowLoggedOut }),
            ],
        });
    }
    renderHelpMessage() {
        let { statusText: e, status: t } = this.state;
        if (null == e) return (0, E.jsx)("div", {});
        let i = tx.Y.INFO;
        switch (t) {
            case 0:
                i = tx.Y.ERROR;
                break;
            case 1:
                i = tx.Y.WARNING;
        }
        return (0, E.jsx)(tx.p, { messageType: i, children: e });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props,
            { publicLink: i } = this.state;
        return (0, E.jsx)(lB.Modal, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, E.jsx)(cc.A, { value: i }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let Ea = (0, a.E2)(u.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: El });
var Eo = i(256311),
    Eu = i(883600);
let Ed = (0, a.E2)(u.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, g.bG)([Eu.A], () => Eu.A.overrideId()),
            t = async (e) => {
                let t = Eu.A.getChangelog(e, "en-US");
                return null != t ? t : ((await Eo.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
            };
        return (0, E.jsx)(EC, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => Eo.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var Ec = i(506774);
let Eg = new Date("2018-01-01"),
    Em = (0, a.Tf)(u.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => L.pK.useSetting() === dT.default.fromTimestamp(Eg.getTime()),
        onClick: () => (Ec.w.set("lastChangeLogDate", Eg), L.pK.updateSetting(dT.default.fromTimestamp(Eg.getTime()))),
    }),
    EA = (0, a.zD)(u.X.DISABLE_APP_COLLECTIONS_CACHE, {
        useTitle: () => "Disable Application Collections Cache",
        useSubtitle: () => "Forces application collection updates to be shown immediately.",
        useDisabled: () => (0, g.bG)([on.default], () => on.default.onlyShowPreviewAppCollections),
        useValue: () =>
            (0, g.bG)(
                [on.default],
                () => on.default.disableAppCollectionsCache || on.default.onlyShowPreviewAppCollections,
            ),
        setValue: (e) => (0, oi.x)({ disableAppCollectionsCache: e }),
    }),
    Eh = (0, a.zD)(u.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, g.bG)([on.default], () => on.default.isForcedCanary),
        setValue: (e) => {
            (0, oi.x)({ canary: e });
        },
    }),
    EE = (0, a.zD)(u.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, g.bG)([on.default], () => on.default.sourceMapsEnabled),
        setValue: (e) => (0, oi.x)({ sourceMapsEnabled: e }),
    }),
    ES = (0, a.zD)(u.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, g.bG)([on.default], () => on.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, oi.x)({ onlyShowPreviewAppCollections: e }),
    });
var ET = i(10094),
    Ex = i(683760);
let Ep = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: sO.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: sO.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: sO.PremiumTypes.TIER_2 },
    ],
    Ef = (0, a.Hn)(u.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => Ep,
        clearable: !0,
        useValue: () =>
            (0, g.bG)([Ex.A], () => {
                let e = Ex.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, ET.O)(null, void 0)
                : null === e
                  ? (0, ET.O)(void 0, void 0)
                  : (0, ET.O)(0 === e ? null : e, void 0);
        },
    });
var EN = i(246605),
    E_ = i(274184);
let EI = (0, a.E2)(u.X.SURVEY_OVERRIDE, {
    useSearchTerms: () => ["survey override"],
    Component: function () {
        let e = (0, g.bG)([E_.Ay], () => E_.Ay.getSurveyOverride());
        return (0, E.jsx)(EC, {
            label: "Survey Override",
            description: "Provide a survey ID to override the survey shown to this user.",
            placeholder: "Enter Survey ID...",
            overrideId: e ?? null,
            setOverride: (e) => EN.xr(e),
            fetchOverride: (e) => EN.BC(e, !0) ?? null,
        });
    },
});
function EC(e) {
    let { label: t, description: i, placeholder: n, overrideId: s, setOverride: l, fetchOverride: r } = e,
        [a, o] = S.useState(s ?? ""),
        u = S.useRef(null),
        [d, c] = S.useState(0),
        g = () => {
            null != u.current && (clearTimeout(u.current), (u.current = null));
        };
    return (
        S.useEffect(() => g, []),
        (0, E.jsx)(sV.D, {
            layout: "horizontal-responsive",
            label: t,
            description: i,
            children: (0, E.jsx)(lF.k, {
                placeholder: n,
                error: 2 === d ? "Failed to fetch override" : void 0,
                successMessage: 3 === d ? "Override applied" : void 0,
                value: a,
                onChange: (e) => {
                    if (!(e.length > 0) || /^[0-9]+$/.test(e)) {
                        if ((o(e), g(), 0 === e.length)) {
                            c(0), l(null);
                            return;
                        }
                        u.current = setTimeout(() => {
                            c(1),
                                r(e).then((t) => {
                                    c(null == t ? 2 : 3), null != t && l(e);
                                });
                        }, 500);
                    }
                },
                clearable: !0,
            }),
        })
    );
}
let Eb = (0, a.zZ)(u.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [Ef, EI, Ed, Em, Eh, h3, ES, EA, EE, Ea],
        useInlineNotice: () => ({
            type: h.lT.INLINE_NOTICE,
            noticeType: "info",
            useText: () => j.intl.format(j.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    Ev = (0, a.zD)(u.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, g.bG)([on.default], () => on.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, oi.x)({ logAnalyticsEvents: e }),
    }),
    Ey = (0, a.zD)(u.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, g.bG)([on.default], () => on.default.isLoggingGatewayEvents),
        setValue: (e) => (0, oi.x)({ logGatewayEvents: e }),
    }),
    Ej = (0, a.zD)(u.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, g.bG)([on.default], () => on.default.preventPopoutClose),
        setValue: (e) => (0, oi.x)({ preventPopoutClose: e }),
    }),
    EO = (0, a.zD)(u.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, g.bG)([on.default], () => on.default.logKeyboardMismatches),
        setValue: (e) => (0, oi.x)({ logKeyboardMismatches: e }),
    }),
    ER = (0, a.zD)(u.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, g.bG)([on.default], () => on.default.isLoggingOverlayEvents),
        setValue: (e) => (0, oi.x)({ logOverlayEvents: e }),
    }),
    EL = (0, a.zD)(u.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, g.bG)([on.default], () => on.default.isLoggingQuestEvents),
        setValue: (e) => (0, oi.x)({ logQuestEvents: e }),
    }),
    ED = (0, a.zD)(u.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, g.bG)([on.default], () => on.default.isTracingRequests),
        setValue: (e) => (0, oi.x)({ trace: e }),
    }),
    EP = (0, a.zZ)(u.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [Ey, ER, ED, Ev, EO, Ej, EL] }),
    EG = (0, a.t_)(u.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [Eb, EP, h2],
    }),
    EM = (0, a.i4)(u.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: hY.V,
        useMenu: function () {
            let {
                    layoutDebuggingEnabled: e,
                    isDeveloper: t,
                    isLoggingGatewayEvents: i,
                    isLoggingOverlayEvents: n,
                    isLoggingAnalyticsEvents: s,
                    isTracingRequests: l,
                    isForcedCanary: r,
                    isAxeEnabled: a,
                    preventPopoutClose: o,
                    onlyShowPreviewAppCollections: d,
                    disableAppCollectionsCache: c,
                    isStaff: m,
                } = (0, g.cf)([on.default, hz.A, ir.default], () => ({
                    layoutDebuggingEnabled: on.default.layoutDebuggingEnabled,
                    isDeveloper: hz.A.isDeveloper,
                    isLoggingGatewayEvents: on.default.isLoggingGatewayEvents,
                    isLoggingOverlayEvents: on.default.isLoggingOverlayEvents,
                    isLoggingAnalyticsEvents: on.default.isLoggingAnalyticsEvents,
                    isTracingRequests: on.default.isTracingRequests,
                    isForcedCanary: on.default.isForcedCanary,
                    isSourceMapsEnabled: on.default.sourceMapsEnabled,
                    isAxeEnabled: on.default.isAxeEnabled,
                    preventPopoutClose: on.default.preventPopoutClose,
                    onlyShowPreviewAppCollections: on.default.onlyShowPreviewAppCollections,
                    disableAppCollectionsCache: on.default.disableAppCollectionsCache,
                    isStaff: ir.default.getCurrentUser()?.isStaff() ?? !1,
                })),
                { horizontalSpacing: A, verticalSpacing: h } = (0, hH.Or)(),
                { setHorizontalSpacing: S, setVerticalSpacing: T } = hH.Or.getState(),
                x = L.HZ.useSetting();
            return t
                ? [
                      (0, E.jsxs)(
                          J.Dr,
                          {
                              id: "overrides",
                              label: "Overrides",
                              action: () => {
                                  (0, eY.openUserSettings)(u.X.DEV_OVERRIDES);
                              },
                              children: [
                                  (0, E.jsx)(
                                      J.sL,
                                      {
                                          id: "always-deliver",
                                          label: "Always Deliver Ads",
                                          checked: x,
                                          action: () => {
                                              L.HZ.updateSetting(!x);
                                          },
                                      },
                                      "always-deliver",
                                  ),
                                  (0, E.jsx)(
                                      J.sL,
                                      {
                                          id: "forced-canary",
                                          label: "Forced Canary",
                                          checked: r,
                                          action: () => {
                                              (0, oi.x)({ canary: !r });
                                          },
                                      },
                                      "forced-canary",
                                  ),
                                  (0, E.jsx)(
                                      J.sL,
                                      {
                                          id: "preview-collections",
                                          label: "Preview Unpublished Collections",
                                          checked: d,
                                          action: () => {
                                              (0, oi.x)({ onlyShowPreviewAppCollections: !d });
                                          },
                                      },
                                      "preview-collections",
                                  ),
                                  (0, E.jsx)(
                                      J.sL,
                                      {
                                          id: "disable-collections-cache",
                                          label: "Disable Collections Cache",
                                          checked: c,
                                          action: () => {
                                              (0, oi.x)({ disableAppCollectionsCache: !c });
                                          },
                                      },
                                      "disable-collections-cache",
                                  ),
                              ],
                          },
                          "overrides",
                      ),
                      (0, E.jsxs)(
                          J.Dr,
                          {
                              id: "logging",
                              label: "Logging",
                              action: () => {
                                  (0, eY.openUserSettings)(u.X.LOGGING);
                              },
                              children: [
                                  (0, E.jsx)(
                                      J.sL,
                                      {
                                          id: "gateway-events",
                                          label: "Gateway Events",
                                          checked: i,
                                          action: () => {
                                              (0, oi.x)({ logGatewayEvents: !i });
                                          },
                                      },
                                      "gateway-events",
                                  ),
                                  (0, E.jsx)(
                                      J.sL,
                                      {
                                          id: "overlay-events",
                                          label: "Overlay RPC Events",
                                          checked: n,
                                          action: () => {
                                              (0, oi.x)({ logOverlayEvents: !n });
                                          },
                                      },
                                      "overlay-events",
                                  ),
                                  (0, E.jsx)(
                                      J.sL,
                                      {
                                          id: "analytics-events",
                                          label: "Analytics Events",
                                          checked: s,
                                          action: () => {
                                              (0, oi.x)({ logAnalyticsEvents: !s });
                                          },
                                      },
                                      "analytics-events",
                                  ),
                                  (0, E.jsx)(
                                      J.sL,
                                      {
                                          id: "tracing-requests",
                                          label: "Tracing Requests",
                                          checked: l,
                                          action: () => {
                                              (0, oi.x)({ trace: !l });
                                          },
                                      },
                                      "tracing-requests",
                                  ),
                                  (0, E.jsx)(
                                      J.sL,
                                      {
                                          id: "prevent-popout-close",
                                          label: "Prevent Popouts From Closing",
                                          checked: o,
                                          action: () => {
                                              (0, oi.x)({ preventPopoutClose: !o });
                                          },
                                      },
                                      "prevent-popout-close",
                                  ),
                              ],
                          },
                          "logging",
                      ),
                      (0, E.jsxs)(
                          J.Dr,
                          {
                              id: "design-tools",
                              label: "Design/A11y Tools",
                              action: () => {
                                  (0, eY.openUserSettings)(u.X.DESIGN_TOOLS);
                              },
                              children: [
                                  (0, E.jsx)(
                                      J.sL,
                                      {
                                          id: "accessibility-auditing",
                                          label: "Accessibility Auditing",
                                          checked: a,
                                          action: () => {
                                              (0, oi.x)({ axeEnabled: !a });
                                          },
                                      },
                                      "accessibility-auditing",
                                  ),
                                  (0, E.jsx)(
                                      J.sL,
                                      {
                                          id: "layout-debugging",
                                          label: "Enable Layout Debugging",
                                          checked: e,
                                          action: () => {
                                              (0, oi.x)({ layoutDebuggingEnabled: !e });
                                          },
                                      },
                                      "layout-debugging",
                                  ),
                                  e &&
                                      (0, E.jsxs)(E.Fragment, {
                                          children: [
                                              (0, E.jsx)(
                                                  J.aK,
                                                  {
                                                      id: "horizontal-spacing",
                                                      label: "Horizontal Spacing",
                                                      control: (e, t) =>
                                                          (0, E.jsx)(hX.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: A,
                                                              minValue: 0,
                                                              maxValue: hH.YR,
                                                              onChange: (e) => S(e),
                                                              renderValue: (e) => `${Math.round(e)}px`,
                                                              "aria-label": "Horizontal Spacing",
                                                          }),
                                                  },
                                                  "horizontal-spacing",
                                              ),
                                              (0, E.jsx)(
                                                  J.aK,
                                                  {
                                                      id: "vertical-spacing",
                                                      label: "Vertical Spacing",
                                                      control: (e, t) =>
                                                          (0, E.jsx)(hX.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: h,
                                                              minValue: 0,
                                                              maxValue: hH.YR,
                                                              onChange: (e) => T(e),
                                                              "aria-label": "Vertical Spacing",
                                                              renderValue: (e) => `${Math.round(e)}px`,
                                                          }),
                                                  },
                                                  "vertical-spacing",
                                              ),
                                          ],
                                      }),
                              ],
                          },
                          "design-tools",
                      ),
                      m
                          ? (0, E.jsx)(
                                J.Dr,
                                { id: "discord-stats", label: "Discord Stats", action: () => az() },
                                "discord-stats",
                            )
                          : null,
                  ]
                : null;
        },
        buildLayout: () => [EG],
    });
var EU = i(127062),
    EV = i(25044),
    Ek = i(80703),
    Ew = i(691540),
    EB = i(857250),
    EF = i(97483),
    Ez = i(100392),
    EY = i(102609),
    EX = i(271478),
    EH = i(736056),
    EK = i(386976),
    EW = i(257433),
    EZ = i(32523),
    Eq = i(96919),
    EQ = i(688151),
    EJ = i(636566);
function E$(e) {
    let { experiment: t, experimentId: i, overrideInfo: n, defaultOpen: s } = e,
        [l, r] = S.useState(s),
        [a, o] = S.useState(!1),
        u = S.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, g.bG)([cb.default], () => cb.default.getId()),
        c = (0, g.bG)([cb.default], () => {
            let e = cb.default.getInstallationForTracking();
            return null == e ? null : (0, Ek.v)(e);
        }),
        m = "installation" === t.kind && null != c ? c : d,
        A = (0, EW.iN)(t, m),
        h = (0, EW.Fm)(t, m),
        T = (0, g.yK)([EH.A], () =>
            eK()
                .sortBy(EH.A.getRecentExposures(EQ.Vh.USER, i), (e) => {
                    let [t, i] = e;
                    return -i;
                })
                .map((e) => {
                    let [t, i] = e;
                    return `${new Date(i).toLocaleString()} (${t})`;
                }),
        ),
        x = S.useCallback(
            (e) => {
                (0, cR.C)((0, Ez.yA)(i), () => {
                    (0, Ew.P0)({
                        id: "experiment-link-copied",
                        message: "Copied experiment link",
                        type: EF.Ck.SUCCESS,
                    }),
                        e.preventDefault(),
                        e.stopPropagation();
                });
            },
            [i],
        ),
        p = (0, E.jsx)(e3.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, E.jsxs)(ee.E, {
                variant: "text-md/medium",
                className: EJ.DD,
                children: [
                    (0, E.jsxs)("div", {
                        children: [
                            (0, E.jsxs)(K.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    t.title,
                                    " ",
                                    cR.p5 &&
                                        (0, E.jsx)($.D, { onClick: x, children: (0, E.jsx)(h6.q, { size: "xs" }) }),
                                ],
                            }),
                            (0, E.jsx)(ee.E, { color: "text-muted", variant: "text-sm/normal", children: i }),
                        ],
                    }),
                    (0, E.jsx)("span", {
                        className: EJ.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!l) return (0, E.jsx)("div", { className: EJ.Os, children: p });
    let f = "";
    return (
        (f =
            t.system === EY.l5.LEGACY
                ? `Currently assigned to bucket ${A ?? EQ.RE.NOT_ELIGIBLE}`
                : null != A
                  ? `Currently assigned to variant ${A}`
                  : "Currently unassigned"),
        (0, E.jsxs)("div", {
            className: EJ.Os,
            children: [
                p,
                (0, E.jsx)("div", {
                    children: (0, E.jsx)(EX.g, {
                        label: t.system === EY.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: f,
                        experiment: t,
                        experimentId: i,
                        overrideInfo: n,
                    }),
                }),
                (0, E.jsx)("div", {
                    className: EJ.h_,
                    children:
                        null == h
                            ? (0, E.jsx)(ee.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children:
                                      'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.',
                              })
                            : null,
                }),
                a
                    ? (0, E.jsxs)("div", {
                          children: [
                              (0, E.jsx)(ee.E, {
                                  variant: "text-lg/medium",
                                  className: EJ.id,
                                  children: "Server Descriptor",
                              }),
                              (0, E.jsx)(ee.E, {
                                  variant: "code",
                                  className: EJ.AS,
                                  children: null == h ? "None" : JSON.stringify(h, void 0, 2),
                              }),
                              (0, E.jsx)(ee.E, {
                                  variant: "text-lg/medium",
                                  className: EJ.id,
                                  children: "Override Descriptor",
                              }),
                              (0, E.jsx)(ee.E, {
                                  variant: "code",
                                  className: EJ.AS,
                                  children:
                                      n?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(n.originalDescriptor, void 0, 2),
                              }),
                              (0, E.jsx)(ee.E, {
                                  variant: "text-lg/medium",
                                  className: EJ.id,
                                  children: "Recent Exposures",
                              }),
                              (0, E.jsx)(ee.E, {
                                  variant: "code",
                                  className: EJ.AS,
                                  children: 0 === T.length ? "None" : T.join("\n"),
                              }),
                          ],
                      })
                    : (0, E.jsx)("div", {
                          className: EJ.id,
                          children: (0, E.jsx)(en.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, E.jsx)(eP.c, { className: EJ.yF }),
            ],
        })
    );
}
function E0(e) {
    let { experiment: t, experimentId: i, overrideInfo: n } = e,
        [s, l] = S.useState(null != n),
        [r, a] = S.useState(!1),
        o = S.useCallback(() => {
            l((e) => !e);
        }, []),
        u = (0, g.bG)([EH.A], () => EH.A.getLoadedGuildExperiment(i)),
        d = (0, g.yK)([EH.A], () =>
            eK()
                .sortBy(EH.A.getRecentExposures(EQ.Vh.GUILD, i), (e) => {
                    let [t, i] = e;
                    return -i;
                })
                .map((e) => {
                    let [t, i] = e;
                    return `${new Date(i).toLocaleString()} (${t})`;
                }),
        ),
        [c, m] = (0, g.yK)([eo.A, EH.A], () => {
            let e = eK().sortBy(eo.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                t = {},
                n = [];
            for (let s of e) {
                let e = EH.A.getGuildExperimentDescriptor(i, s.id),
                    l = e?.bucket ?? EQ.RE.NOT_ELIGIBLE;
                l in t || (t[l] = 0), t[l]++, n.push(`${s.name}: ${l}`);
            }
            let s = eK()(t)
                .keys()
                .map(Number)
                .sort()
                .map((e) => `${t[e]} guilds in bucket ${e}`)
                .join(", ");
            return [n.join("\n"), s];
        }),
        A = (0, E.jsx)($.D, {
            onClick: o,
            children: (0, E.jsxs)(ee.E, {
                variant: "text-md/medium",
                className: EJ.DD,
                children: [
                    (0, E.jsxs)("div", {
                        children: [
                            (0, E.jsx)("span", { children: t.title }),
                            (0, E.jsx)(ee.E, { color: "text-muted", variant: "text-sm/normal", children: i }),
                        ],
                    }),
                    (0, E.jsx)("span", { className: EJ.km, children: "Guild" }),
                ],
            }),
        });
    return s
        ? (0, E.jsxs)("div", {
              className: EJ.Os,
              children: [
                  A,
                  (0, E.jsx)(EX.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${m}`,
                      experiment: t,
                      experimentId: i,
                      overrideInfo: n,
                  }),
                  (0, E.jsx)("div", {
                      className: EJ.h_,
                      children:
                          null == u
                              ? (0, E.jsx)(ee.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children:
                                        'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.',
                                })
                              : null,
                  }),
                  r
                      ? (0, E.jsxs)("div", {
                            children: [
                                (0, E.jsx)(ee.E, {
                                    variant: "text-lg/medium",
                                    className: EJ.id,
                                    children: "Guild Assignments",
                                }),
                                (0, E.jsx)(ee.E, { variant: "code", className: EJ.AS, children: c }),
                                (0, E.jsx)(ee.E, {
                                    variant: "text-lg/medium",
                                    className: EJ.id,
                                    children: "Server Descriptor",
                                }),
                                (0, E.jsx)(ee.E, {
                                    variant: "code",
                                    className: EJ.AS,
                                    children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                }),
                                (0, E.jsx)(ee.E, {
                                    variant: "text-lg/medium",
                                    className: EJ.id,
                                    children: "Override Descriptor",
                                }),
                                (0, E.jsx)(ee.E, {
                                    variant: "code",
                                    className: EJ.AS,
                                    children:
                                        n?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(n.originalDescriptor, void 0, 2),
                                }),
                                (0, E.jsx)(ee.E, {
                                    variant: "text-lg/medium",
                                    className: EJ.id,
                                    children: "Recent Exposures",
                                }),
                                (0, E.jsx)(ee.E, {
                                    variant: "code",
                                    className: EJ.AS,
                                    children: 0 === d.length ? "None" : d.join("\n"),
                                }),
                            ],
                        })
                      : (0, E.jsx)("div", {
                            className: EJ.id,
                            children: (0, E.jsx)(en.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, E.jsx)(eP.c, { className: EJ.yF }),
              ],
          })
        : (0, E.jsx)("div", { className: EJ.Os, children: A });
}
let E1 = (0, a.E2)(u.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, EK.op)(),
                { experiments: i, overridesInfo: n } = (0, EZ.hI)(),
                s = S.useMemo(() => ({ ...i, ...e }), [i, e]),
                l = S.useMemo(() => ({ ...n, ...t }), [n, t]),
                r = (0, g.bG)([cb.default], () => {
                    let e = cb.default.getInstallationForTracking();
                    return null == e ? null : (0, Ek.v)(e);
                }),
                [a, o] = S.useState(""),
                u = (0, Eq.oC)((0, Eq.R3)((0, Eq.Fm)(s), l), a);
            return (0, E.jsxs)("div", {
                "data-mtctest-ignore": "true",
                children: [
                    null != r &&
                        (0, E.jsxs)(K.B, {
                            style: { gap: 8, marginBottom: 16 },
                            children: [
                                (0, E.jsxs)(ee.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: ["Installation ID: ", r],
                                }),
                                cR.p5 &&
                                    (0, E.jsx)(en.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, cR.C)(r, () => {
                                                (0, Ew.P0)((0, EB.o)("Installation ID copied!", EF.Ck.SUCCESS));
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, E.jsx)(Z.I, { placeholder: "Search experiments", query: a, onChange: o, onClear: () => o("") }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? E0 : E$;
                              return (0, E.jsx)(
                                  t,
                                  {
                                      experiment: e.experiment,
                                      experimentId: e.id,
                                      overrideInfo: l[e.id],
                                      defaultOpen: null != l[e.id],
                                  },
                                  e.id,
                              );
                          })
                        : (0, E.jsx)("div", {
                              className: EJ.p$,
                              children: (0, E.jsx)(eL.D, {
                                  variant: "heading-md/semibold",
                                  children: "No Experiments Found",
                              }),
                          }),
                ],
            });
        },
        useSearchTerms: () => ["Experiments", "Bucket Override", "Variant Override"],
    }),
    E2 = (0, a.zZ)(u.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [E1] }),
    E3 = (0, a.t_)(u.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [E2] }),
    E6 = (0, a.i4)(u.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: EU.c,
        useMenu: EV.A,
        buildLayout: () => [E3],
    }),
    E4 = (0, a.WI)(u.X.DEVELOPER_SECTION, {
        useTitle: () => j.intl.string(j.t["+gHUHA"]),
        usePredicate: () => hz.A.isDeveloper,
        buildLayout: () => [E6, EM],
    });
var E5 = i(824552),
    E7 = i(370997);
let E8 = (0, a.E2)(u.X.AUTHORIZED_APPS_LIST_SETTING, {
    Component: E7.Ay,
    useSearchTerms: () => [j.intl.string(j.t["f6kk+r"])],
});
var E9 = i(187322),
    Se = i(77468),
    St = i(289498),
    Si = i(573648),
    Sn = i(941314),
    Ss = i(874490),
    Sl = i(370480),
    Sr = i(968309);
let Sa = new Set([eg.fg2.XBOX, eg.fg2.PLAYSTATION, eg.fg2.PLAYSTATION_STAGING, eg.fg2.CRUNCHYROLL]);
var So = i(169869),
    Su = i(235693),
    Sd = i(757036),
    Sc = i(555837),
    Sg = i(241524),
    Sm = i(346017),
    SA = i(212739),
    Sh = i(30370),
    SE = i(968671),
    SS = i(674567),
    ST = i(237146),
    Sx = i(594387),
    Sp = i(34934);
function Sf() {
    let e,
        t,
        n,
        s,
        l,
        { variant: r, showFooter: a } =
            ((e = (0, SS.V)()),
            (t = (0, SE.GM)("connectedAccountsBannerFooter")),
            (n = (0, SA.O)()),
            (l = null != (s = (0, g.bG)([Sh.A], () => Sh.A.getAccount(null, eg.fg2.XBOX))) && !s.revoked),
            e === SS.s.NONE || e === SS.s.FREE_FRACTIONAL_NITRO || (e === SS.s.NON_NITRO && n)
                ? { variant: SS.s.NONE, showFooter: !1 }
                : { variant: e, showFooter: t && e === SS.s.NON_NITRO && !l }),
        { analyticsLocations: o } = (0, nH.Ay)(e$.A.XBOX_CONNECTED_ACCOUNTS_BANNER),
        u = (0, Sm.yW)(o),
        d = (0, Sg.A)("(max-width: 485px)");
    if (r === SS.s.NONE) return null;
    let c = d ? "md" : "sm",
        m = "",
        A = null;
    switch (r) {
        case SS.s.NITRO:
            (m = j.intl.string(ST.default["+QAvQz"])),
                (A = (0, E.jsx)(eD.$, {
                    variant: "overlay-primary",
                    size: c,
                    fullWidth: d,
                    text: j.intl.string(ST.default.CubeLC),
                    onClick: () => {
                        (0, z.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([i.e("16848"), i.e("77632")]).then(
                                i.bind(i, 836291),
                            );
                            return (t) => (0, E.jsx)(e, { ...t, sourceAnalyticsLocations: o });
                        });
                    },
                }));
            break;
        case SS.s.NON_NITRO:
        case SS.s.FREE_FRACTIONAL_NITRO:
            (m = j.intl.string(ST.default.NwkRTZ)),
                (A = (0, E.jsx)(sI.A, {
                    defaultTextOverride: j.intl.string(ST.default["0vY+ie"]),
                    variantOverride: "overlay-primary",
                    size: c,
                    fullWidth: d,
                    subscriptionTier: sO.pe.TIER_2,
                }));
            break;
        default:
            (0, N.xb)(r);
    }
    return (0, E.jsxs)(nH.f5, {
        value: o,
        children: [
            (0, E.jsxs)("div", {
                className: Sp.bV,
                children: [
                    (0, E.jsx)(eL.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: j.intl.string(j.t.NG1e6l),
                    }),
                    (0, E.jsx)(o5.t, { size: "xs", color: "var(--icon-default)" }),
                ],
            }),
            (0, E.jsx)(t9.N, {
                theme: "dark",
                children: (e) =>
                    (0, E.jsx)("div", {
                        className: e,
                        children: (0, E.jsxs)("div", {
                            className: Sp.Nr,
                            children: [
                                (0, E.jsxs)("div", {
                                    className: Sp.Tp,
                                    children: [
                                        (0, E.jsx)("div", {
                                            className: Sp.Qw,
                                            style: {
                                                backgroundImage: `url(${a ? "https://cdn.discordapp.com/assets/content/1858990b1e56c7d51e887008753104d4663d06c0e0e296d8fe0ea85c7e3e8341.png" : "https://cdn.discordapp.com/assets/content/7308e937fbd3074b9de0ebba1fa3571fa7b10a2b88f384b382f711bae99f40e6.png"})`,
                                            },
                                        }),
                                        (0, E.jsx)("div", { className: Sp.$h }),
                                        (0, E.jsx)("div", { className: Sp.Rv }),
                                        (0, E.jsx)("div", { className: Sp.Lw }),
                                    ],
                                }),
                                (0, E.jsxs)("div", {
                                    className: Sp.Mn,
                                    children: [
                                        (0, E.jsxs)("div", {
                                            className: Sp.mY,
                                            children: [
                                                (0, E.jsx)("img", {
                                                    className: Sp.wm,
                                                    src: "https://cdn.discordapp.com/assets/content/c5fab2b5d1155c4c9bc088b07f8563b6db8d2d08666357486efc5aea6e97fbea.png",
                                                    alt: "Xbox Game Pass",
                                                }),
                                                (0, E.jsx)(ee.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: Sp.DD,
                                                    children: m,
                                                }),
                                            ],
                                        }),
                                        (0, E.jsx)("div", { className: Sp.lO, children: A }),
                                    ],
                                }),
                                a &&
                                    (0, E.jsxs)(E.Fragment, {
                                        children: [
                                            (0, E.jsx)("div", { className: Sp.yF }),
                                            (0, E.jsxs)("div", {
                                                className: Sp.sQ,
                                                children: [
                                                    (0, E.jsx)(d2.o, {
                                                        size: d ? "md" : "sm",
                                                        color: ei.A.colors.ICON_STRONG,
                                                    }),
                                                    (0, E.jsx)(ee.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-default",
                                                        children: j.intl.format(Sx.default.mXY4Rb, {
                                                            onConnect: () => {
                                                                u(Sm.Hx.CONNECT),
                                                                    (0, Sr.A)({
                                                                        platformType: eg.fg2.XBOX,
                                                                        location: "Connected Accounts Banner",
                                                                    });
                                                            },
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
            }),
        ],
    });
}
var SN = i(201718),
    S_ = i(321078),
    SI = i(672130),
    SC = i(546183),
    Sb = i(379848),
    Sv = i(96734);
let Sy = (e) => {
        let { markAsDismissed: t } = e;
        return (
            S.useEffect(() => t(id.i.UNKNOWN), [t]),
            (0, E.jsx)(so.Lp, { className: Sv.Ad, text: j.intl.string(j.t.y2b7CA) })
        );
    },
    Sj = (e) => {
        let { title: t, body: i, img: n, newIndicatorDismissibleContent: s, onClick: l } = e;
        return (0, E.jsxs)("div", {
            className: Sv.kL,
            children: [
                n,
                (0, E.jsxs)("div", {
                    className: Sv.FS,
                    children: [
                        (0, E.jsxs)("div", {
                            className: Sv.TK,
                            children: [
                                (0, E.jsx)(Sb.Ay, {
                                    contentTypes: [s],
                                    children: (e) => {
                                        let { visibleContent: t, markAsDismissed: i } = e;
                                        return t === s ? (0, E.jsx)(Sy, { markAsDismissed: i }) : null;
                                    },
                                }),
                                (0, E.jsx)(ee.E, { variant: "text-md/semibold", children: t }),
                            ],
                        }),
                        (0, E.jsx)(ee.E, { variant: "text-xs/normal", children: i }),
                    ],
                }),
                (0, E.jsx)(eD.$, { text: j.intl.string(j.t.vD60Pv), onClick: l }),
            ],
        });
    },
    SO = () => {
        let e = tp.A.getArticleURL(eg.MVz.PS_CONNECTION);
        return (0, E.jsx)(Sj, {
            title: j.intl.string(j.t.v20wwm),
            body: j.intl.format(j.t.lTZBit, { help_article: e }),
            img: (0, E.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
            newIndicatorDismissibleContent: eG.M.PS_ONE_WAY_RECONNECT,
            onClick: () => (0, Sr.A)({ platformType: eg.fg2.PLAYSTATION, location: "PS two way upsell" }),
        });
    },
    SR = "/assets/9df988a227916145.png",
    SL = () =>
        (0, E.jsx)(Sj, {
            title: j.intl.string(Sx.default["9cLtDI"]),
            body: j.intl.format(Sx.default["D+kUbg"], {
                learnMoreLink: tp.A.getArticleURL(eg.MVz.XBOX_GAME_PASS_PERKS),
            }),
            img: (0, E.jsx)("img", { src: SR, width: "auto", height: "45", alt: "" }),
            newIndicatorDismissibleContent: eG.M.XBOX_PERKS_RECONNECT_UPSELL,
            onClick: () => (0, Sr.A)({ platformType: eg.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
        }),
    SD = () => {
        let e = tp.A.getArticleURL(eg.MVz.XBOX_CONNECTION);
        return (0, E.jsx)(Sj, {
            title: j.intl.string(j.t["2okkZV"]),
            body: j.intl.format(j.t.OnERSS, { help_article: e }),
            img: (0, E.jsx)("img", { src: SR, width: "auto", height: "45", alt: "" }),
            newIndicatorDismissibleContent: eG.M.XBOX_ONE_WAY_RECONNECT,
            onClick: () => (0, Sr.A)({ platformType: eg.fg2.XBOX, location: "Xbox two way upsell" }),
        });
    };
var SP = i(783419),
    SG = i(534952),
    SM = i(230451),
    SU = i(781471);
let SV = (e) => {
    let t,
        { integration: i } = e,
        {
            isJoining: n,
            joinErrorMessage: s,
            showJoinErrorMessage: l,
        } = (0, g.cf)(
            [Sh.A],
            () => ({
                isJoining: Sh.A.isJoining(i.id),
                joinErrorMessage:
                    "" === Sh.A.joinErrorMessage(i.id) ? j.intl.string(j.t.j2d6Km) : Sh.A.joinErrorMessage(i.id),
                showJoinErrorMessage: void 0 !== Sh.A.joinErrorMessage(i.id),
            }),
            [i.id],
        );
    return (
        null != (0, g.bG)([eo.A], () => eo.A.getGuild(i.guild.id), [i.guild.id]) ||
            (t = (0, E.jsx)(eD.$, {
                size: "sm",
                onClick: function () {
                    Se.A.joinServer(i.id, () => {});
                },
                disabled: n,
                variant: "primary",
                text: n ? j.intl.string(j.t.RXvQQu) : j.intl.string(j.t.XpeFYr),
            })),
        (0, E.jsxs)("div", {
            className: SU.iA,
            children: [
                (0, E.jsxs)("div", {
                    className: SU.XX,
                    children: [
                        (0, E.jsx)(gK.Ay, { size: gK.Ay.Sizes.SMALL, guild: i.guild, className: SU.$f }),
                        (0, E.jsxs)("div", {
                            className: SU.Vn,
                            children: [
                                (0, E.jsx)(ee.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: i.guild.name,
                                }),
                                (0, E.jsx)(uJ.Anchor, {
                                    href: Si.A.get(i.type)?.getPlatformUserUrl?.(i.account),
                                    children: (0, E.jsx)(ee.E, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        children: i.account.name,
                                    }),
                                }),
                            ],
                        }),
                        t,
                    ],
                }),
                l &&
                    (0, E.jsx)(ee.E, {
                        variant: "text-xs/normal",
                        color: "text-feedback-critical",
                        className: SU.R,
                        children: s,
                    }),
            ],
        })
    );
};
function Sk(e) {
    var t;
    let i,
        n,
        { account: s } = e,
        l =
            ((t = s.id),
            (i = (0, Sc.G)({ location: "useShouldShowXboxPerksReconnectUpsell" })),
            (n = (0, Sd.L)(sO.PremiumTypes.TIER_2)),
            !i && !n && !/^\d+$/.test(t));
    return s.type === eg.fg2.XBOX && l
        ? (0, E.jsx)(SL, {})
        : s.twoWayLink
          ? null
          : s.type === eg.fg2.XBOX
            ? (0, E.jsx)(SD, {})
            : s.type === eg.fg2.PLAYSTATION
              ? (0, E.jsx)(SO, {})
              : null;
}
function Sw(e) {
    let t,
        i,
        n,
        s,
        l,
        r,
        a,
        { onDisconnect: o, account: u, theme: d, locale: c } = e,
        [g, m] = S.useState(u.friendSync),
        [A, h] = S.useState(u.visibility),
        [T, x] = S.useState(u.metadataVisibility),
        [p, f] = S.useState(u.showActivity),
        [N, _] = S.useState(null),
        [I, C] = S.useState(null),
        [b, v] = S.useState(!1),
        [y, O] = S.useState([]),
        R = (0, Ss.ML)(u.type),
        L = Si.A.get(R),
        D = (0, Sn.useIsRiotSocialSDKMigrationEnabled)({ location: "User Settings Connections" });
    S.useEffect(() => {
        m(u.friendSync), h(u.visibility), x(u.metadataVisibility), f(u.showActivity);
    }, [u]);
    let P = { inProgressVisibility: N, inProgressMetadataVisibility: I },
        G = S.useRef(P);
    return (
        S.useEffect(() => {
            G.current = P;
        }),
        S.useEffect(() => {
            if (!1 === u.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = G.current;
            null != e && (h(e), Se.A.setVisibility(u.type, u.id, e), _(null)),
                null != t && (x(t), Se.A.setMetadataVisibility(u.type, u.id, t), C(null));
        }, [u]),
        (0, E.jsxs)("div", {
            className: SU.FI,
            children: [
                ((t = Si.A.get(u.type)),
                (i = Si.A.get(R)),
                (n = "1" === (u.metadata ?? {})[SP.pK.TWITTER_VERIFIED]),
                (s = null),
                t.type === eg.fg2.TWITTER &&
                    n &&
                    (s = (0, E.jsx)(ts.m, {
                        text: j.intl.string(j.t.Jebrww),
                        children: (0, E.jsx)(tc.A, {
                            color: ei.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, E.jsx)(tl.U, { size: "xs", color: ei.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, E.jsxs)("div", {
                    className: SU.Il,
                    children: [
                        (0, E.jsx)("img", {
                            alt: i.name,
                            className: SU.gj,
                            src: (0, gp.M)(d) ? i.icon.darkSVG : i.icon.lightSVG,
                        }),
                        (0, E.jsxs)("div", {
                            children: [
                                (0, E.jsxs)("div", {
                                    className: SU.$p,
                                    children: [
                                        (0, E.jsx)(ee.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: SU.RW,
                                            children: u.name,
                                        }),
                                        null != s && (0, E.jsx)("div", { className: SU.cG, children: s }),
                                    ],
                                }),
                                (0, E.jsx)(ee.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: SU.Au,
                                    children:
                                        null != i.replacedBy && D
                                            ? j.intl.format(SM.default.Glhokn, { platformName: i.name })
                                            : i.name,
                                }),
                            ],
                        }),
                        (0, E.jsx)($.D, {
                            className: SU.uH,
                            onClick: function () {
                                let e = Si.A.get(u.type);
                                (0, z.openModal)((t) =>
                                    (0, E.jsx)(lB.Modal, {
                                        title: j.intl.formatToPlainString(j.t.U5x12f, { name: e.name }),
                                        subtitle: j.intl.format(j.t.VgqIPj, { provider: e.name }),
                                        actions: [
                                            {
                                                text: j.intl.string(j.t["ETE/oC"]),
                                                onClick: t.onClose,
                                                variant: "secondary",
                                            },
                                            {
                                                text: j.intl.string(j.t.bsbMVz),
                                                onClick: () => {
                                                    o(), t.onClose();
                                                },
                                                variant: "primary",
                                            },
                                        ],
                                        ...t,
                                        children:
                                            Sa.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, E.jsx)(sc.A, {
                                                children: j.intl.format(j.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": j.intl.string(j.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, E.jsx)(gN.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, E.jsx)(Sk, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        i = null,
                        n = (0, Sl.An)(t[SP.pK.CREATED_AT], c);
                    switch (e.type) {
                        case eg.fg2.REDDIT:
                            i = (0, So.xE)(t, SU.Nz);
                            break;
                        case eg.fg2.STEAM:
                            i = (0, So.dy)(t, SU.Nz);
                            break;
                        case eg.fg2.BLUESKY:
                        case eg.fg2.TWITTER:
                        case eg.fg2.MASTODON:
                            i = (0, So.ED)(t, SU.Nz);
                            break;
                        case eg.fg2.EBAY:
                            i = (0, So.ub)(t, SU.Nz);
                            break;
                        case eg.fg2.PAYPAL:
                            i = (0, So.gZ)(t, SU.Nz);
                            break;
                        case eg.fg2.TIKTOK:
                            i = (0, So.HU)(t, SU.Nz);
                    }
                    null !== n &&
                        (null == i && (i = []),
                        i?.push(
                            (0, E.jsx)(
                                ee.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: SU.M4,
                                    children: j.intl.format(j.t["9rfonh"], { date: n }),
                                },
                                "member-since",
                            ),
                        ));
                    let s = y.includes(e.id),
                        l = j.intl.string(j.t.wzzjk9);
                    if (null == i || 0 === i.length)
                        if (!0 !== Si.A.get(e.type).hasMetadata) return null;
                        else
                            (i = [
                                (0, E.jsx)(so.Lp, { className: SU.Z3, text: j.intl.string(j.t.y2b7CA) }, "badge"),
                                (0, E.jsx)(
                                    ee.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: SU.vt,
                                        children: j.intl.format(j.t.Up2ni7, {
                                            helpdeskUrl: tp.A.getArticleURL(eg.MVz.CONNECTION_DETAILS),
                                        }),
                                    },
                                    "label",
                                ),
                            ]),
                                (l = j.intl.string(j.t["LVh3/5"]));
                    return (
                        s && (l = j.intl.string(j.t.i4jeWR)),
                        i.push(
                            (0, E.jsx)(
                                "div",
                                {
                                    className: SU.jy,
                                    children: (0, E.jsx)(eD.$, {
                                        text: l,
                                        variant: "secondary",
                                        size: "sm",
                                        loading: b,
                                        disabled: s,
                                        "aria-label": j.intl.string(j.t.sCkLYH),
                                        onClick: s
                                            ? void 0
                                            : () => {
                                                  v(!0),
                                                      Se.A.refresh(e.type, e.id).finally(() => {
                                                          setTimeout(() => {
                                                              y.push(e.id), O(y), v(!1);
                                                          }, 2e3);
                                                      });
                                              },
                                    }),
                                },
                                "refresh-button",
                            ),
                        ),
                        (0, E.jsx)("div", { className: SU.tJ, children: i })
                    );
                })(u),
                (eg.txh.has(u.type) &&
                    (l = (0, E.jsx)(W.d, {
                        label: j.intl.string(j.t["+KCMSi"]),
                        checked: g,
                        onChange: function (e) {
                            m(e), Se.A.setFriendSync(u.type, u.id, e);
                        },
                    })),
                eg.ewM.has(u.type) &&
                    (r = (0, E.jsx)(W.d, {
                        label: j.intl.format(j.t["6u6J0q"], { platform: L.name }),
                        checked: p,
                        onChange: function (e) {
                            f(e), Se.A.setShowActivity(u.type, u.id, e);
                        },
                    })),
                Si.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, E.jsx)(W.d, {
                        label: j.intl.string(j.t.FYKGsL),
                        checked: 1 === T,
                        onChange: function (e) {
                            let { verified: t } = u,
                                i = +!!e;
                            if (e && !t) {
                                C(i), (0, Sr.A)({ platformType: u.type, location: "User Settings" });
                                return;
                            }
                            x(i), Se.A.setMetadataVisibility(u.type, u.id, i);
                        },
                        disabled: 1 !== A || null == u.metadata,
                    })),
                (0, E.jsxs)("div", {
                    className: SU.HZ,
                    children: [
                        (0, E.jsx)(W.d, {
                            label: j.intl.string(j.t.f7yOAX),
                            checked: 1 === A,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    i = +!!e;
                                if (e && !t) {
                                    _(i), (0, Sr.A)({ platformType: u.type, location: "User Settings" });
                                    return;
                                }
                                h(i), Se.A.setVisibility(u.type, u.id, i);
                            },
                        }),
                        a,
                        r,
                        l,
                    ],
                })),
                (function () {
                    if (u.revoked || u.integrations.length > 0) return (0, E.jsx)(eP.c, {});
                })(),
                u.revoked
                    ? (0, E.jsx)(tx.p, {
                          messageType: tx.Y.INFO,
                          children: j.intl.format(j.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, Sr.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                      })
                    : u.integrations.length > 0
                      ? (0, E.jsx)(sV.D, {
                            label: j.intl.string(j.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, E.jsx)(SV, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, E.jsx)(Su.A, { partner: u.type }),
            ],
        })
    );
}
function SB(e) {
    let { appIdentity: t, oauth2Token: i } = e;
    return null == i
        ? null
        : (0, E.jsxs)("div", {
              className: SU.FI,
              children: [
                  (function (e, t) {
                      let { application: i } = t,
                          n = i9.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
                      return (0, E.jsxs)("div", {
                          className: SU.Il,
                          children: [
                              (0, E.jsx)("img", { alt: i.name, className: e2()(SU.gj, SU.sN), src: n }),
                              (0, E.jsxs)("div", {
                                  children: [
                                      (0, E.jsx)("div", {
                                          className: SU.$p,
                                          children: (0, E.jsx)(ee.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: SU.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, E.jsx)(ee.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: SU.Au,
                                          children: i.name,
                                      }),
                                  ],
                              }),
                              (0, E.jsx)($.D, {
                                  className: SU.uH,
                                  onClick: () =>
                                      (0, E7.d1)(i, t.scopes, () => {
                                          E5.A.delete(t.id);
                                      }),
                                  "aria-label": j.intl.string(j.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, E.jsx)(gN.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, i),
                  (0, E.jsx)("div", {
                      className: SU.HZ,
                      children: (0, E.jsx)(W.d, {
                          label: j.intl.string(j.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              SN.A.updateApplicationIdentityConfig(i.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function SF(e) {
    let t = Si.A.get(e);
    (0, Sr.A)({ platformType: t.type }),
        er.default.track(eg.HAw.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        });
}
function Sz() {
    let e = (0, Ss.gn)(),
        t = (0, Sn.useIsRiotSocialSDKMigrationEnabled)({ location: "User Settings Connections" }),
        i = (0, te.A)(t ? SG.tX : []);
    return (0, E.jsxs)("div", {
        className: SU.lA,
        children: [
            i.map(
                (e) =>
                    null != e &&
                    (0, E.jsx)(
                        SI.A,
                        { application: e, className: SU.__invalid_accountButton, innerClassName: SU.U$ },
                        e.id,
                    ),
            ),
            e
                .slice(0, 10 - i.length)
                .map((e) =>
                    (0, E.jsx)(
                        St.A,
                        { type: e.type, className: SU.__invalid_accountButton, innerClassName: SU.U$ },
                        e.type,
                    ),
                ),
            (0, E.jsx)(ts.m, {
                text: j.intl.string(j.t.QqTz8b),
                children: (0, E.jsx)("div", {
                    className: e2()(SU.ej, SU.__invalid_accountButton),
                    children: (0, E.jsx)(E9.vN, {
                        children: (0, E.jsx)("button", {
                            className: e2()(SU.R8, SU.U$),
                            type: "button",
                            onClick: function () {
                                ss.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: SF });
                            },
                            "aria-label": j.intl.string(j.t.Zhcj9X),
                            children: (0, E.jsx)(ty._, {
                                color: "currentColor",
                                size: "md",
                                "aria-label": j.intl.string(j.t.QqTz8b),
                            }),
                        }),
                    }),
                }),
            }),
        ],
    });
}
function SY(e) {
    let t,
        { fetching: i, accounts: n, appIdentities: s, authorizedApps: l, theme: r, locale: a } = e,
        u = (0, o.SV)("ConnectionsList"),
        d = S.useMemo(() => n.filter((e) => Si.A.isSupported(e.type)), [n]);
    return (
        (t = i
            ? (0, E.jsx)(dr.y, { type: dr.y.Type.SPINNING_CIRCLE })
            : 0 === d.length && 0 === s.length
              ? (0, E.jsx)(ix.pp, {
                    theme: r,
                    className: u ? SU.p$ : void 0,
                    children: (0, E.jsx)(ix.SG, {
                        note: j.intl.string(j.t.WenGZ2),
                        children: j.intl.string(j.t.aoLS84),
                    }),
                })
              : (0, E.jsxs)(E.Fragment, {
                    children: [
                        u &&
                            (0, E.jsx)(eL.D, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                children: j.intl.format(j.t.AioIGb, { count: s.length + d.length }),
                            }),
                        s.map((e, t) =>
                            (0, E.jsx)(
                                SB,
                                { appIdentity: e, oauth2Token: l.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        d.map((e, t) =>
                            (0, E.jsx)(
                                Sw,
                                {
                                    theme: r,
                                    account: e,
                                    locale: a,
                                    onDisconnect: () =>
                                        (function (e) {
                                            let { type: t, id: i } = e;
                                            Se.A.disconnect(t, i);
                                        })(e),
                                },
                                `connection-${t}`,
                            ),
                        ),
                    ],
                })),
        (0, E.jsx)("div", { className: SU.V, children: t })
    );
}
let SX = (0, a.E2)(u.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            let e = (0, o.SV)("NewConnectSection");
            return (0, E.jsx)(sV.D, {
                label: j.intl.string(e ? j.t["t+aGse"] : j.t.ZeDrUf),
                description: e ? void 0 : j.intl.format(j.t["oYc+Gz"], { privacyPolicyUrl: eg.X7G.PRIVACY }),
                children: (0, E.jsx)(Sz, {}),
            });
        },
        useSearchTerms: () => [
            j.intl.string(j.t.ZeDrUf),
            j.intl.string(j.t.Zhcj9X),
            j.intl.string(j.t.QqTz8b),
            j.intl.string(j.t["+/hZM/"]),
            j.intl.string(j.t.bsbMVz),
            j.intl.string(j.t.f7yOAX),
            j.intl.string(j.t.FYKGsL),
            j.intl.string(j.t["+KCMSi"]),
        ],
    }),
    SH = (0, a.E2)(u.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, g.bG)([ek.A], () => ek.A.hidePersonalInformation),
                t = (0, g.bG)([Sh.A], () => Sh.A.isFetching()),
                i = (0, g.bG)([Sh.A], () => Sh.A.getAccounts()),
                { authorizedAppsFetchState: n, authorizedApps: s } = (0, g.cf)([SC.default], () => ({
                    authorizedAppsFetchState: SC.default.getFetchState(),
                    authorizedApps: SC.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: l, filteredAppIdentities: r } = (0, S_.A)(ir.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, ca.Ay)(),
                o = (0, g.bG)([dX.default], () => dX.default.locale);
            return (S.useEffect(() => {
                n === SC.FetchState.NOT_FETCHED && E5.A.fetch();
            }, [n]),
            e)
                ? null
                : (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsx)(Sf, {}),
                          (0, E.jsx)(SY, {
                              fetching: t || l || (r.length > 0 && n !== SC.FetchState.FETCHED),
                              accounts: i,
                              appIdentities: r,
                              authorizedApps: s,
                              theme: a,
                              locale: o,
                          }),
                      ],
                  });
        },
        initialize: () => {
            Se.A.fetch();
        },
        useSearchTerms: () => [
            j.intl.string(j.t["+/hZM/"]),
            j.intl.string(j.t.bsbMVz),
            j.intl.string(j.t.f7yOAX),
            j.intl.string(j.t.FYKGsL),
            j.intl.string(j.t["+KCMSi"]),
        ],
    });
var SK = i(46225);
let SW = [eg.fg2.LEAGUE_OF_LEGENDS, eg.fg2.RIOT_GAMES];
function SZ() {
    let e = (0, g.bG)([Sh.A], () => Sh.A.getAccounts().find((e) => SW.includes(e.type))?.type),
        t = null != e ? Si.A.get(e) : null,
        i = (0, te.h)(t?.replacedBy),
        { canStartAuthorization: n, hasAlreadyLinked: s, fetched: l } = (0, SK.RD)(i),
        r = j.intl.string(SM.default["1S6oAo"]),
        a = (0, Sn.useIsRiotSocialSDKMigrationEnabled)({ location: "RiotDeprecationInlineNotice" });
    return S.useMemo(
        () =>
            a && null != t && n && i?.connectionEntrypointUrl != null && !s && l
                ? {
                      type: h.lT.INLINE_NOTICE,
                      noticeType: "info",
                      useText: () =>
                          j.intl.format(SM.default.DeOsIl, {
                              connectionName: t.name,
                              applicationName: r,
                              connectionEntrypointUrl: i.connectionEntrypointUrl,
                          }),
                  }
                : null,
        [t, r, i, n, a, s, l],
    );
}
let Sq = (0, a.zZ)(u.X.CONNECTIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["3fe7U5"]),
        useSubtitle: () => j.intl.string(j.t.U22vw6),
        useInlineNotice: SZ,
        buildLayout: () => [SX, SH],
    }),
    SQ = (0, a.zZ)(u.X.AUTHORIZED_APPS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        useSubtitle: () => j.intl.string(j.t.G9JfLg),
        buildLayout: () => [E8],
        initialize: () => (
            E5.A.fetch(),
            () => {
                E7.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    SJ = (0, a.t_)(u.X.CONNECTED_APPS_PANEL, {
        useTitle: () => j.intl.string(j.t.lrVuZO),
        useObscuredNotice: dn.L,
        buildLayout: () => [Sq, SQ],
    }),
    S$ = (0, a.i4)(u.X.CONNECTED_APPS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.lrVuZO),
        icon: h6.q,
        buildLayout: () => [SJ],
    }),
    S0 = (0, a.WI)(u.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => j.intl.string(j.t.BA9200),
        buildLayout: () => [iJ, ej, ih, S$],
    });
var S1 = i(631670),
    S2 = i(619499),
    S3 = i(836602),
    S6 = i(591179),
    S4 = i(854627),
    S5 = i(975732),
    S7 = i(761508),
    S8 = i(83257),
    S9 = i(159001),
    Te = i(344346),
    Tt = i(919395),
    Ti = i(233641);
function Tn(e) {
    let { title: t, children: i } = e;
    return (0, E.jsxs)("div", {
        children: [(0, E.jsx)(eL.D, { variant: "text-md/medium", className: Ti.Vf, children: t }), i],
    });
}
function Ts(e) {
    let {
        children: t,
        className: i,
        layoutClassName: n,
        profilePreview: s,
        profilePreviewTitle: l,
        nameplatePreview: r,
        stickyPreview: a = !0,
    } = e;
    return (0, E.jsx)("div", {
        className: e2()(Ti.UA, i),
        children: (0, E.jsxs)("div", {
            className: e2()(Ti.yt, n),
            children: [
                (0, E.jsx)("div", {
                    className: e2()(Ti.Fp, a && Ti.Oz),
                    children: (0, E.jsxs)(E.Fragment, {
                        children: [
                            (0, E.jsx)(Tn, { title: l ?? j.intl.string(j.t.Zb06yP), children: s }),
                            null != r ? (0, E.jsx)(Tn, { title: j.intl.string(j.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, E.jsx)("div", { className: Ti.oB, children: t }),
            ],
        }),
    });
}
var Tl = i(986687),
    Tr = i(101058),
    Ta = i(841595),
    To = i(696451),
    Tu = i(10478);
function Td() {
    return (0, E.jsxs)("div", {
        className: Tu.p$,
        children: [
            (0, E.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: Tu.Sl }),
            (0, E.jsx)(eL.D, {
                className: Tu.h8,
                variant: "heading-lg/extrabold",
                children: j.intl.string(j.t.Z1OZCV),
            }),
            (0, E.jsx)(ee.E, { className: Tu.h8, variant: "text-md/normal", children: j.intl.string(j.t.ZSt4Tt) }),
            (0, E.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: Tu.h8,
                children: (0, E.jsx)(eD.$, {
                    variant: "primary",
                    text: j.intl.string(j.t.jQ3pqt),
                    onClick: () => {
                        (0, sk.pX)(eg.BVt.GUILD_DISCOVERY), (0, sC.default)();
                    },
                }),
            }),
        ],
    });
}
var Tc = i(81400),
    Tg = i(252732),
    Tm = i(355622),
    TA = i(408018),
    Th = i(201349),
    TE = i(158983);
let TS = (0, sy.Ld)(),
    TT = (0, ii.createChannelRecord)({ id: "1", type: eg.rbe.DM }),
    Tx = (0, sy.Ld)();
function Tp(e) {
    let {
            sectionTitle: t,
            errors: i,
            onBioChange: n,
            pendingBio: s,
            placeholder: l,
            currentBio: r,
            disabled: a = !1,
        } = e,
        [o, u] = S.useState(s ?? r),
        [d, c] = S.useState((0, TA.x7)(o)),
        g = S.useRef(r),
        m = S.useRef(!1);
    return (
        S.useEffect(() => {
            if (g.current !== r) {
                let e = (0, TA.x7)(r);
                u(r), c(e);
            }
            g.current = r;
        }, [r]),
        S.useEffect(() => {
            void 0 !== s || o === r || m.current || (u(r), c((0, TA.x7)(r)));
        }, [s, r, o]),
        (0, E.jsxs)(o9.A, {
            title: t,
            titleId: TS,
            description: j.intl.string(j.t.Bbw6Ac),
            errors: i,
            disabled: a,
            children: [
                (0, E.jsx)(Th.Ay, {
                    "aria-describedby": Tx,
                    "aria-labelledby": TS,
                    className: TE.i,
                    innerClassName: TE.Z,
                    maxCharacterCount: eg.NA2,
                    onChange: function (e, t, i) {
                        t !== o && (u(t), c(i), n(t));
                    },
                    placeholder: l,
                    channel: TT,
                    textValue: o,
                    richValue: d,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: eY.USER_SETTINGS_MODAL_KEY,
                    type: Tm.oU.PROFILE_BIO_INPUT,
                    onBlur: () => {
                        m.current = !1;
                    },
                    onFocus: () => {
                        m.current = !0;
                    },
                    focused: m.current,
                    onSubmit: function () {
                        return new Promise((e) => {
                            e({ shouldClear: !1, shouldRefocus: !0 });
                        });
                    },
                }),
                (0, E.jsx)(es.A, { id: Tx, children: j.intl.format(j.t["+DFxLc"], { maxLength: eg.NA2 }) }),
            ],
        })
    );
}
var Tf = i(930861),
    TN = i(821956),
    T_ = i(562819),
    TI = i(84540),
    TC = i(408919);
function Tb(e) {
    let { user: t, guild: i, className: n, sectionTitle: s, forcedDivider: l = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, nH.Ay)(),
        o = (0, Tt.a4)({ user: t, guildId: i?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, Tt.CP)(i?.id),
        c = r ? Tf.wL : aZ.$n;
    return (0, E.jsx)(o9.A, {
        className: n,
        forcedDivider: l,
        hasBackground: !0,
        title: s,
        errors: d,
        children: (0, E.jsxs)("div", {
            className: TC.NC,
            children: [
                (0, E.jsx)(c, {
                    size: aZ.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, T_.L)({ analyticsLocations: a, guild: i });
                    },
                    className: e2()({ [TC.yj]: r }),
                    children: j.intl.string(j.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TC.DT,
                        children: (0, E.jsx)(eD.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, TN.uZ)(t, i) ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.OrokWm),
                            onClick: () => {
                                (0, TI.p)({ guildId: i?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var Tv = i(339984),
    Ty = i(114077);
let Tj = [{ name: "gif", extensions: ["gif"] }];
function TO(e) {
    let {
            showRemoveAvatarButton: t,
            errors: i,
            onAvatarChange: n,
            sectionTitle: s,
            changeAvatarButtonText: l,
            guildId: r,
            className: a,
            disabled: o = !1,
            isTryItOut: u = !1,
            forcedDivider: d,
            withHighlight: c = !1,
        } = e,
        { newestAnalyticsLocation: g } = (0, nH.Ay)(),
        m = c ? Tf.wL : aZ.$n,
        A = S.useCallback(() => {
            (0, Tg.XD)({
                uploadType: Tv.HL.AVATAR,
                analyticsSource: g,
                filters: u ? Tj : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, g, u]);
    return (0, E.jsx)(o9.A, {
        className: a,
        title: s,
        errors: i,
        disabled: o,
        forcedDivider: d,
        children: (0, E.jsxs)("div", {
            className: Ty.NC,
            children: [
                (0, E.jsx)(m, {
                    className: e2()({ [Ty.yj]: c }),
                    size: aZ.$n.Sizes.SMALL,
                    onClick: A,
                    children: l ?? j.intl.string(j.t["4OynCD"]),
                }),
                t &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Ty.DT,
                        children: (0, E.jsx)(eD.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != r ? j.intl.string(j.t.TDjKDm) : j.intl.string(j.t.twB3fz),
                            onClick: () => n(null),
                        }),
                    }),
            ],
        }),
    });
}
var TR = i(152103);
function TL(e) {
    let { user: t, guildId: i, className: n } = e,
        s = ul.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: l } = (0, nH.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, Tt.B0)(t, i),
        d = (0, S.useCallback)(() => {
            er.default.track(eg.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, nK.L)({ analyticsLocations: l, guildId: i });
        }, [l, i]),
        c = (0, S.useCallback)(() => {
            (0, TI.p)({ displayNameStyles: null }), er.default.track(eg.HAw.DISPLAY_NAME_STYLES_REMOVED);
        }, []),
        g = (0, S.useCallback)(() => {
            (0, TI.p)({ guildId: i, displayNameStyles: null });
        }, [i]),
        m = void 0 !== o ? o : null != i ? a : r;
    return (0, E.jsx)(o9.A, {
        title: j.intl.string(nW.default["86GtGH"]),
        className: n,
        showPremiumIcon: s,
        errors: u,
        children: (0, E.jsxs)("div", {
            className: TR.N,
            children: [
                (0, E.jsx)(eD.$, {
                    variant: "primary",
                    size: "sm",
                    text: j.intl.string(nW.default.vJqrIg),
                    onClick: d,
                }),
                null == i &&
                    null != m &&
                    (0, E.jsx)(eD.$, {
                        variant: "secondary",
                        size: "sm",
                        text: j.intl.string(nW.default.ymq8WQ),
                        onClick: c,
                    }),
                null != i &&
                    null != m &&
                    (0, E.jsx)(eD.$, {
                        variant: "secondary",
                        size: "sm",
                        text: j.intl.string(nW.default["j/KRxc"]),
                        onClick: g,
                    }),
            ],
        }),
    });
}
var TD = i(637193),
    TP = i(727369);
function TG(e) {
    let { user: t, guild: i, titleIcon: n } = e,
        { analyticsLocations: s } = (0, nH.Ay)(),
        l = null != i,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, Tt.rv)(t, i?.id),
        d = S.useCallback(() => {
            (0, TD.p)({ analyticsLocations: s, guildId: i?.id });
        }, [s, i?.id]),
        c = S.useCallback(() => {
            (0, TI.p)({ guildId: i?.id, nameplate: null });
        }, [i?.id]);
    return (0, E.jsx)(o9.A, {
        title: j.intl.string(j.t.x5CoXR),
        titleIcon: n,
        errors: u,
        children: (0, E.jsxs)("div", {
            className: TP.u,
            children: [
                (0, E.jsx)(eD.$, { variant: "primary", size: "sm", text: j.intl.string(j.t.BwdeM1), onClick: d }),
                (void 0 === o ? (l ? a : r) != null : null != o) &&
                    (0, E.jsx)(eD.$, {
                        variant: "secondary",
                        size: "sm",
                        text: l ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t["9zwziY"]),
                        onClick: c,
                    }),
            ],
        }),
    });
}
var TM = i(33023);
function TU(e) {
    let {
            showRemoveBannerButton: t,
            errors: i,
            onBannerChange: n,
            guildId: s,
            className: l,
            disabled: r = !1,
            showPremiumIcon: a = !0,
            isTryItOut: o = !1,
            forcedDivider: u,
            withHighlight: d = !1,
        } = e,
        { newestAnalyticsLocation: c } = (0, nH.Ay)(),
        g = d ? Tf.wL : aZ.$n;
    return (0, E.jsx)(o9.A, {
        className: l,
        title: j.intl.string(j.t.Vgdusv),
        showPremiumIcon: a,
        errors: i,
        disabled: r,
        forcedDivider: u,
        children: (0, E.jsxs)("div", {
            className: TM.NC,
            children: [
                (0, E.jsx)(g, {
                    className: e2()({ [TM.yj]: d }),
                    size: aZ.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, Tg.XD)({ uploadType: Tv.HL.BANNER, analyticsSource: c, guildId: s, isTryItOut: o }),
                    children: j.intl.string(j.t.N0bC3P),
                }),
                t &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TM.DT,
                        children: (0, E.jsx)(eD.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != s ? j.intl.string(j.t.jHlJNS) : j.intl.string(j.t.tT9n7D),
                            onClick: () => n(null),
                        }),
                    }),
            ],
        }),
    });
}
var TV = i(617061),
    Tk = i(872246);
function Tw(e) {
    let {
            user: t,
            guild: i,
            initialSelectedEffect: n,
            className: s,
            sectionTitle: l,
            forcedDivider: r = !1,
            withTutorial: a = !1,
            showBorder: o = !1,
        } = e,
        { analyticsLocations: u } = (0, nH.Ay)(),
        d = ul.Ay.canUsePremiumProfileCustomization(t),
        c = (0, Tt.N2)({ user: t, guildId: i?.id }),
        { pendingProfileEffect: g, errors: m } = (0, Tt.nZ)(i?.id);
    S.useEffect(() => {
        d &&
            er.default.track(eg.HAw.PREMIUM_UPSELL_VIEWED, {
                type: sO.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            });
    }, [d, u]);
    let A = a ? Tf.wL : aZ.$n;
    return (0, E.jsx)(o9.A, {
        forcedDivider: r,
        borderType: cE.i.PREMIUM,
        hasBackground: !0,
        title: l,
        showBorder: o,
        errors: m,
        className: s,
        children: (0, E.jsxs)("div", {
            className: Tk.NC,
            children: [
                (0, E.jsx)(A, {
                    size: aZ.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, TV.W)({ analyticsLocations: u, guild: i, initialSelectedEffect: n });
                    },
                    className: e2()({ [Tk.yj]: a }),
                    children: j.intl.string(j.t["/dRfCf"]),
                }),
                (void 0 === g ? null != c : null != g) &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Tk.DT,
                        children: (0, E.jsx)(eD.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != i ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.uMuafO),
                            onClick: () => {
                                (0, TI.p)({ guildId: i?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var TB = i(13875),
    TF = i(515727),
    Tz = i(238780);
function TY(e) {
    let { user: t, guild: i, sectionTitle: n } = e,
        { analyticsLocations: s } = (0, nH.Ay)(),
        l = (0, TB.sk)("ProfileFrameSection"),
        r = (0, Tt.Xf)({ user: t, guildId: i?.id }),
        { pendingProfileFrame: a, errors: o } = (0, Tt.Tu)(i?.id),
        [u, d] = (0, eM.kn)([eG.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        c = u === eG.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return l
        ? (0, E.jsx)(o9.A, {
              showBorder: c,
              borderType: c ? cE.i.NEW_UPSELL : cE.i.PREMIUM,
              hasBackground: c,
              title: n,
              titleBadge: c ? (0, E.jsx)(so.Lp, { text: j.intl.string(j.t.y2b7CA), className: Tz.Ad }) : void 0,
              description: c ? j.intl.string(j.t.yMoMAt) : void 0,
              errors: o,
              children: (0, E.jsxs)("div", {
                  className: Tz.NC,
                  children: [
                      (0, E.jsx)(eD.$, {
                          variant: "primary",
                          size: "sm",
                          text: j.intl.string(j.t["9/hmle"]),
                          onClick: () => {
                              (0, TF.w)({ analyticsLocations: s, guild: i }), d(id.i.TAKE_ACTION);
                          },
                      }),
                      (void 0 === a ? null != r : null != a) &&
                          (0, E.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: Tz.DT,
                              children: (0, E.jsx)(eD.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: null != i ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.nQBruk),
                                  onClick: () => {
                                      (0, TI.p)({ guildId: i?.id, profileFrame: null });
                                  },
                              }),
                          }),
                  ],
              }),
          })
        : null;
}
var TX = i(33851),
    TH = i.n(TX),
    TK = i(602853),
    TW = i(654107),
    TZ = i(999291),
    Tq = i(101928),
    TQ = i(835245),
    TJ = i(317097),
    T$ = i(508274),
    T0 = i(919796),
    T1 = i(773431);
function T2(e) {
    let {
            onChange: t,
            onClose: i,
            color: n,
            suggestedColors: s,
            disabled: l,
            label: r,
            colorPickerMiddle: a,
            colorPickerFooter: o,
            showEyeDropper: u,
        } = e,
        d = S.useRef(null),
        c = (0, TK.r)(ei.A.colors.BACKGROUND_BASE_LOW).hex(),
        g = ei.A.colors.BACKGROUND_MOD_MUTED.css,
        m = (0, Tg.sN)(n),
        A = (0, TJ.Hl)(n),
        h = A === c ? g : A,
        T = m ? ei.A.unsafe_rawColors.WHITE.css : ei.A.unsafe_rawColors.PRIMARY_530.css,
        x = (0, T0.A)(a),
        p = (0, T0.A)(o),
        [f, N] = S.useState((0, TQ.A)());
    return (
        S.useEffect(() => {
            (x !== a || p !== o) && N((0, TQ.A)());
        }, [o, a, p, x]),
        (0, E.jsx)(q.Y, {
            targetElementRef: d,
            positionKey: f,
            renderPopout: (e) =>
                (0, E.jsx)(T$.VN, {
                    ...e,
                    value: n,
                    onChange: t,
                    suggestedColors: s,
                    middle: a,
                    footer: o,
                    showEyeDropper: u,
                }),
            onRequestClose: i,
            children: (e) => {
                let { onClick: t, ...i } = e;
                return (0, E.jsxs)("div", {
                    ref: d,
                    className: e2()(T1.oP, { [T1.r9]: l }),
                    children: [
                        (0, E.jsx)($.D, {
                            ...i,
                            tabIndex: l ? -1 : 0,
                            onClick: l ? eg.tEg : t,
                            style: { backgroundColor: A, borderColor: h },
                            className: T1.nf,
                            "aria-label": j.intl.string(j.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, E.jsx)(us.R, {
                                size: "custom",
                                className: T1.BW,
                                width: 14,
                                height: 14,
                                color: T,
                            }),
                        }),
                        r,
                    ],
                });
            },
        })
    );
}
var T3 = i(362656);
function T6(e) {
    let {
            user: t,
            pendingAvatarSrc: i,
            pendingColors: n,
            onThemeColorsChange: s,
            preventDisabled: l,
            guildId: r,
            className: a,
            showPremiumIcon: o = !0,
            showResetThemeButton: u = !1,
            forcedDivider: d,
        } = e,
        c = (0, TZ.Ay)(t.id, r),
        { primaryColor: g, secondaryColor: m } = (0, Tq.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: n,
            isPreview: !0,
        }),
        A = ul.Ay.canUsePremiumProfileCustomization(t),
        h = null != i ? i : t.getAvatarURL(r, 80),
        S = (0, TK.r)(ei.A.unsafe_rawColors.PRIMARY_530).hex(),
        T = (0, TW.rh)(h, S, !1);
    if (null == g || null == m) return null;
    let x = (e) => {
        s(TH()(e, c?.themeColors) ? void 0 : e);
    };
    return (0, E.jsx)(o9.A, {
        title: j.intl.string(j.t.DMeO2X),
        disabled: !A && !l,
        className: e2()(T3.__invalid_profileThemesSection, a),
        showPremiumIcon: o,
        forcedDivider: d,
        children: (0, E.jsxs)("div", {
            className: T3.hd,
            children: [
                (0, E.jsx)("div", {
                    className: T3.YX,
                    children: (0, E.jsx)(T2, {
                        onChange: (e) => x([e, m]),
                        color: g,
                        suggestedColors: T,
                        showEyeDropper: !0,
                        label: (0, E.jsx)(ee.E, {
                            className: T3.yz,
                            color: "text-default",
                            variant: "text-xs/normal",
                            "aria-hidden": !0,
                            children: j.intl.string(j.t.C3KTQk),
                        }),
                    }),
                }),
                (0, E.jsx)("div", {
                    className: T3.YX,
                    children: (0, E.jsx)(T2, {
                        onChange: (e) => x([g, e]),
                        color: m,
                        suggestedColors: T,
                        showEyeDropper: !0,
                        label: (0, E.jsx)(ee.E, {
                            className: T3.yz,
                            color: "text-default",
                            variant: "text-xs/normal",
                            "aria-hidden": !0,
                            children: j.intl.string(j.t["8elvy6"]),
                        }),
                    }),
                }),
                u &&
                    null != r &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: T3.WA,
                        children: (0, E.jsx)(eD.$, {
                            variant: "secondary",
                            size: "sm",
                            text: j.intl.string(j.t["L+GmoR"]),
                            onClick: () => x([null, null]),
                        }),
                    }),
            ],
        }),
    });
}
function T4(e) {
    let {
            sectionTitle: t,
            errors: i,
            onPronounsChange: n,
            pendingPronouns: s,
            placeholder: l,
            currentPronouns: r,
            disabled: a = !1,
        } = e,
        o = (0, sy.GV)();
    return (0, E.jsx)(o9.A, {
        title: t,
        titleId: o,
        errors: i,
        disabled: a,
        children: (0, E.jsx)(lF.k, {
            "aria-labelledby": o,
            placeholder: l ?? j.intl.string(j.t.NPEUUu),
            maxLength: 40,
            value: s ?? r,
            onChange: function (e) {
                n(e === r ? void 0 : e);
            },
            disabled: a,
        }),
    });
}
var T5 = i(427262),
    T7 = i(684732),
    T8 = i(576705),
    T9 = i(376294);
function xe(e) {
    let { errors: t, pendingNick: i, currentNick: n, username: s, user: l, guild: r } = e,
        a = (0, g.bG)([T8.A], () => T8.A.can(eg.xBc.CHANGE_NICKNAME, r) || T8.A.can(eg.xBc.MANAGE_NICKNAMES, r)),
        o = (0, Sd.L)(sO.PremiumTypes.TIER_2);
    return (0, E.jsxs)(o9.A, {
        title: j.intl.string(j.t.me1lRk),
        errors: t,
        children: [
            (0, E.jsx)(lF.k, {
                value: i ?? n ?? "",
                placeholder: s,
                maxLength: eg.d0r,
                onChange: function (e) {
                    (0, TI.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : j.intl.string(j.t.gzjxQi),
            }),
            o && (0, E.jsx)(TL, { user: l, guildId: r.id, className: T9.F }),
        ],
    });
}
var xt = i(574173);
let xi = "/assets/b25da78aa7949feb.png";
function xn(e) {
    let { user: t, showOverlay: i, children: n } = e,
        s = (0, ca.Ay)(),
        { analyticsLocations: l } = (0, nH.Ay)(e$.A.PREMIUM_UPSELL_OVERLAY);
    return (S.useEffect(() => {
        i &&
            er.default.track(eg.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: l,
                type: sO.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            });
    }, [i, l]),
    i)
        ? (0, E.jsxs)("div", {
              className: xt.ry,
              children: [
                  (0, E.jsx)("div", { children: n }),
                  (0, E.jsxs)("div", {
                      className: xt.Wc,
                      children: [
                          (0, E.jsx)("img", {
                              className: xt.Tn,
                              alt: j.intl.string(j.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case eg.NJ8.DARK:
                                      case eg.NJ8.DARKER:
                                      case eg.NJ8.MIDNIGHT:
                                          return xi;
                                      case eg.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return xi;
                                  }
                              })(s),
                          }),
                          (0, E.jsxs)("div", {
                              className: xt._9,
                              children: [
                                  (0, E.jsx)(ee.E, {
                                      variant: "text-lg/semibold",
                                      color: "always-white",
                                      children: j.intl.string(j.t.dMaDFX),
                                  }),
                                  (0, E.jsx)(ee.E, {
                                      variant: "text-sm/normal",
                                      color: "always-white",
                                      children: j.intl.string(j.t.F7sgFH),
                                  }),
                              ],
                          }),
                          (0, E.jsx)(ch.A, {
                              size: aZ.$n.Sizes.LARGE,
                              color: aZ.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: ul.Ay.isPremium(t)
                                      ? j.intl.string(j.t.AfRWI8)
                                      : j.intl.string(j.t.nkdUym),
                              },
                              subscriptionTier: sO.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : n;
}
var xs = i(887267);
function xl() {
    let e = (0, g.bG)([ir.default], () => {
            let e = ir.default.getCurrentUser();
            return tB()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        t = (0, Sd.L)(sO.PremiumTypes.TIER_2),
        i = (0, g.bG)([S3.A, eo.A], () => eo.A.getGuild(S3.A.selectedGuildId));
    tB()(null != i, "guild should not be null");
    let {
            pendingAvatar: n,
            pendingNickname: s,
            pendingBanner: l,
            pendingBio: r,
            pendingPronouns: a,
            pendingThemeColors: o,
            errors: u,
        } = (0, g.cf)([S3.A], () => ({ ...S3.A.getPendingChanges(i.id), errors: S3.A.getErrors(i.id) })),
        d = (0, Tr.V7)({ userId: e.id, image: n }),
        c = (0, Tc.EC)(i.id),
        m = (0, g.bG)([To.Ay], () => (null == i.id ? null : To.Ay.getMember(i.id, e.id))),
        A = (0, g.bG)([Ta.A], () => Ta.A.getGuildMemberProfile(e.id, i.id)),
        h = ul.Ay.canUsePremiumProfileCustomization(e),
        S = (0, Tt.z5)(n, m?.avatar),
        T = (0, Tt.Ac)(l, A?.banner),
        x = (0, T7.l)(o, A?.themeColors),
        p = A?.bio ?? "",
        f = A?.pronouns ?? "";
    return (0, E.jsxs)("div", {
        className: xs.Q,
        children: [
            (0, E.jsx)(
                xe,
                {
                    errors: u?.nick ?? c?.nick,
                    username: T5.Ay.getName(e),
                    pendingNick: s,
                    currentNick: m?.nick,
                    user: e,
                    guild: i,
                },
                "nick",
            ),
            (0, E.jsx)(
                T4,
                {
                    sectionTitle: j.intl.string(j.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, TI.p)({ guildId: i.id, pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: f,
                },
                "pronouns",
            ),
            (0, E.jsxs)(xn, {
                user: e,
                showOverlay: !h,
                children: [
                    (0, E.jsx)(
                        TO,
                        {
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t.lqaIxI),
                                    (0, E.jsx)(ts.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(o5.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xs.a,
                                        }),
                                    }),
                                ],
                            }),
                            showRemoveAvatarButton: S,
                            onAvatarChange: (e) =>
                                (0, Tg.rM)(e, m?.avatar, (e) => (0, TI.p)({ guildId: i.id, avatar: e })),
                            errors: u?.avatar,
                            guildId: i.id,
                            disabled: !h,
                        },
                        "avatar",
                    ),
                    (0, E.jsx)(
                        Tb,
                        {
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t["7v0T9P"]),
                                    (0, E.jsx)(ts.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(o5.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xs.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: e,
                            guild: i,
                        },
                        "decoration",
                    ),
                    !t && (0, E.jsx)(TL, { user: e, guildId: i.id }),
                    (0, E.jsx)(
                        TG,
                        {
                            user: e,
                            guild: i,
                            titleIcon: (0, E.jsx)(ts.m, {
                                text: j.intl.string(j.t["5AFxuK"]),
                                children: (0, E.jsx)(o5.t, { size: "md", color: "currentColor", className: xs.a }),
                            }),
                        },
                        "nameplate",
                    ),
                    (0, E.jsx)(
                        Tw,
                        {
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t.wR5wOo),
                                    (0, E.jsx)(ts.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(o5.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xs.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: e,
                            guild: i,
                        },
                        "effect",
                    ),
                    (0, E.jsx)(TY, { user: e, guild: i, sectionTitle: j.intl.string(j.t.GWrZOd) }, "frame"),
                    (0, E.jsx)(
                        TU,
                        {
                            showRemoveBannerButton: T,
                            errors: u?.banner,
                            onBannerChange: (e) =>
                                (0, Tg.rM)(e, A?.banner, (e) => (0, TI.p)({ guildId: i.id, banner: e })),
                            guildId: i.id,
                            disabled: !h,
                        },
                        "banner",
                    ),
                    (0, E.jsx)(T6, {
                        user: e,
                        pendingAvatarSrc: d,
                        pendingColors: o,
                        onThemeColorsChange: (e) => (0, TI.p)({ guildId: i.id, themeColors: e }),
                        guildId: i.id,
                        showResetThemeButton: x,
                    }),
                    (0, E.jsx)(
                        Tp,
                        {
                            placeholder: j.intl.string(j.t["/7NKgv"]),
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t.ZzAR2Y),
                                    (0, E.jsx)(ts.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(o5.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xs.a,
                                        }),
                                    }),
                                ],
                            }),
                            onBioChange: (e) => (0, TI.p)({ guildId: i.id, bio: e }),
                            errors: u?.bio ?? c?.bio,
                            pendingBio: r,
                            currentBio: p,
                            disabled: !h,
                        },
                        "about",
                    ),
                ],
            }),
        ],
    });
}
var xr = i(405318);
function xa(e) {
    (0, z.openModalLazy)(async () => {
        let { default: t } = await Promise.all([i.e("2125"), i.e("66901"), i.e("61129")]).then(i.bind(i, 475312));
        return (i) => (0, E.jsx)(t, { source: { ...e, page: eg.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...i });
    });
}
function xo(e) {
    let { selectedGuild: t, onGuildChange: i } = e,
        { analyticsLocations: n } = (0, nH.Ay)(e$.A.USER_SETTINGS_GUILD_PROFILE),
        s = (0, g.bG)([ir.default], () => {
            let e = ir.default.getCurrentUser();
            return tB()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        l = (0, g.bG)([To.Ay], () => (null != t ? To.Ay.getMember(t.id, s.id) : null)),
        r = (0, g.bG)([Ta.A], () => !Ta.A.isFetchingProfile(s.id, t?.id)),
        a = (0, g.bG)([ek.A], () => ek.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, g.cf)([S3.A], () => S3.A.getPendingChanges(t?.id)),
        c = (0, Tr.V7)({ userId: s.id, image: o }),
        m = (0, Tt.lw)({
            pendingValue: u,
            userValue: s?.collectibles?.nameplate,
            guildValue: l?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: A } = (0, Tt.B0)(s, t?.id);
    return (S.useEffect(() => () => ss.h.wait(S9.IM), []), a)
        ? (0, E.jsx)(dn.A, {})
        : r
          ? (0, E.jsxs)(nH.f5, {
                value: n,
                children: [
                    (0, E.jsx)(ee.E, {
                        variant: "text-sm/normal",
                        children: j.intl.format(j.t["/PTB2E"], {
                            helpCenterLink: tp.A.getArticleURL(eg.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(o8.A, { guildId: t.id, onChange: i }),
                                  (0, E.jsx)(Ts, {
                                      profilePreviewTitle: (0, E.jsx)(eL.D, {
                                          variant: "heading-md/medium",
                                          className: xr.YV,
                                          children: j.intl.formatToPlainString(j.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, E.jsx)(Tl.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: A,
                                          user: s,
                                          guild: t,
                                          canUsePremiumCustomization: ul.Ay.canUsePremiumProfileCustomization(s),
                                          onUpsellClick: xa,
                                          containerClassName: xr.ti,
                                      }),
                                      nameplatePreview: (0, E.jsx)(Te.A, {
                                          ...d,
                                          pendingDisplayNameStyles: A,
                                          user: s,
                                          guildId: t?.id,
                                          nameplate: m,
                                          className: null == m ? xr.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, E.jsx)(xl, {}),
                                  }),
                              ],
                          })
                        : (0, E.jsx)(Td, {}),
                ],
            })
          : (0, E.jsx)(dr.y, {});
}
var xu = i(903209),
    xd = i(39409);
let xc = (e) => {
    let { children: t, notice: i } = e;
    return (0, E.jsxs)("div", { className: xd.r, children: [i, (0, E.jsx)("div", { children: t })] });
};
var xg = i(269115),
    xm = i(823092),
    xA = i(859040),
    xh = i(379197),
    xE = i(488430),
    xS = i(457421),
    xT = i(940622),
    xx = i(559474),
    xp = i(144030);
let xf = () => {
    let e,
        t,
        i,
        n,
        { analyticsLocations: s } = (0, nH.Ay)(e$.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        l = S.useRef(null),
        {
            asset: r,
            popoutAsset: a,
            title: o,
            body: u,
            version: d,
            revertTextColor: c,
        } = ((e = (0, xT.mb)(xx.RN.UPSELL_BANNER)),
        (t = (0, xT.mb)(xx.RN.UPSELL_BANNER_POPOUT)),
        (i = (0, g.bG)([xS.A], () => xS.A.getMarketingBySurface(xh.R.EDIT_PROFILE_SETTINGS))),
        (n = S.useMemo(
            () =>
                null != i
                    ? i
                    : {
                          asset: "/assets/30e2c68819facd98.png",
                          popoutAsset: "/assets/c6d55507d7473057.png",
                          title: j.intl.string(j.t.QZVVBh),
                          body: j.intl.string(j.t.sajmAq),
                          version: 0,
                          revertTextColor: !1,
                      },
            [i],
        )),
        S.useMemo(
            () => ({ ...n, type: xE.G.BANNER, asset: e ?? n.asset, popoutAsset: t ?? n.popoutAsset }),
            [e, t, n],
        )),
        { navigateWithValidation: m } = (0, xm.L_)();
    return (
        S.useEffect(() => {
            er.default.track(eg.HAw.PREMIUM_UPSELL_VIEWED, {
                type: sO.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: s,
                version: d,
            });
        }, [s, d]),
        (0, E.jsxs)("div", {
            ref: l,
            className: xp.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, E.jsx)("div", {
                    className: xp.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, E.jsx)("img", { src: a, className: xp.Qw, alt: "" }),
                }),
                (0, E.jsxs)("div", {
                    className: xp.Em,
                    children: [
                        (0, E.jsx)(eL.D, {
                            variant: "heading-lg/extrabold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: xp.DD,
                            children: o,
                        }),
                        (0, E.jsx)(ee.E, {
                            variant: "text-sm/normal",
                            color: c ? "text-overlay-dark" : "currentColor",
                            children: u,
                        }),
                    ],
                }),
                (0, E.jsx)(eD.$, {
                    onClick: () => {
                        m(() =>
                            (0, xA.Cz)({
                                analyticsLocations: s,
                                analyticsSource: e$.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                            }),
                        );
                    },
                    variant: "overlay-primary",
                    text: j.intl.string(j.t.fYfGgK),
                }),
            ],
        })
    );
};
var xN = i(451909),
    x_ = i(202639),
    xI = i(400669),
    xC = i(835071),
    xb = i(422936),
    xv = i(234419),
    xy = i(590180),
    xj = i(898461),
    xO = i(207803),
    xR = i(508425),
    xL = i(559949);
let xD = {
        above_the_clouds: {
            preset: "above_the_clouds",
            themeColors: [752280, 9215590],
            avatarDecorationSkuId: "1144059132517826601",
            displayNameStyles: { fontId: xL.x.CHICLE, effectId: xR.z.POP, colors: [959694] },
            getName: () => j.intl.string(j.t["TFc+iF"]),
            getHeaderSrc: () => i(702051).A,
            getBannerSrc: (e) => (e ? i(735161).A : i(887e3).A),
        },
        cyberpunk: {
            preset: "cyberpunk",
            themeColors: [1967991, 742532],
            avatarDecorationSkuId: null,
            displayNameStyles: { fontId: xL.x.PIXELIFY, effectId: xR.z.NEON, colors: [2949343] },
            getName: () => j.intl.string(j.t["4g+5bq"]),
            getHeaderSrc: () => i(272017).A,
            getBannerSrc: (e) => (e ? i(735271).A : i(208574).A),
        },
        shadow_realm: {
            preset: "shadow_realm",
            themeColors: [0, 4458504],
            avatarDecorationSkuId: "1144058522808614923",
            displayNameStyles: { fontId: xL.x.NEO_CASTEL, effectId: xR.z.TOON, colors: [0xff0000] },
            getName: () => j.intl.string(j.t.ycg1xj),
            getHeaderSrc: () => i(863653).A,
            getBannerSrc: (e) => (e ? i(538263).A : i(576974).A),
        },
        starlit_dream: {
            preset: "starlit_dream",
            themeColors: [5123751, 590625],
            avatarDecorationSkuId: "1144058844004233369",
            displayNameStyles: { fontId: xL.x.CHERRY_BOMB, effectId: xR.z.TOON, colors: [3343795] },
            getName: () => j.intl.string(j.t["9WLHvr"]),
            getHeaderSrc: () => i(434361).A,
            getBannerSrc: (e) => (e ? i(700309).A : i(135572).A),
        },
        neon_space: {
            preset: "neon_space",
            themeColors: [6094952, 1007678],
            avatarDecorationSkuId: null,
            displayNameStyles: { fontId: xL.x.MUSEO_MODERNO, effectId: xR.z.NEON, colors: [28737] },
            getName: () => j.intl.string(j.t.UdNuqi),
            getHeaderSrc: () => i(301928).A,
            getBannerSrc: (e) => (e ? i(285974).A : i(775627).A),
        },
    },
    xP = (e) => xD[e],
    xG = Object.keys(xD),
    xM = (e) => {
        let t = null == e ? xG : xG.filter((t) => t !== e);
        return t[Math.floor(Math.random() * t.length)];
    };
var xU = i(371912),
    xV = i(674253);
function xk(e) {
    let { preset: t, onShuffle: i } = e,
        n = (0, g.bG)([i6.A], () => i6.A.useReducedMotion),
        s = (0, xU.Xf)({ useReducedMotion: n }),
        { name: l, header: r } = S.useMemo(() => {
            let e = xP(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, E.jsxs)("div", {
        className: xV.kL,
        children: [
            (0, E.jsx)($.D, {
                onClick: () => {
                    i(), s.startAnimation(!1);
                },
                className: xV.x6,
                "aria-label": j.intl.string(j.t["44yJxh"]),
                children: s.render(),
            }),
            (0, E.jsxs)($.D, {
                onClick: () => {
                    i(), s.startAnimation(!1);
                },
                "aria-label": `${l}: ${j.intl.string(j.t["44yJxh"])}`,
                className: xV.Lt,
                children: [
                    (0, E.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: xV.L_ }),
                    (0, E.jsx)(ee.E, { className: xV._e, variant: "text-sm/bold", color: "always-white", children: l }),
                ],
            }),
        ],
    });
}
var xw = i(410516),
    xB = i(811611),
    xF = i(515718),
    xz = i(507553);
function xY(e, t) {
    let i = xz.A.useField("scrollPosition"),
        n = (0, g.bG)([i6.A], () => i6.A.useReducedMotion);
    (0, S.useEffect)(() => {
        let s = e.current;
        if (null == s || i !== t) return;
        let l = requestAnimationFrame(() => {
            s.scrollIntoView({ behavior: n ? "auto" : "smooth" }), xz.A.setState({ scrollPosition: null });
        });
        return () => cancelAnimationFrame(l);
    }, [e, t, i, n]);
}
var xX = i(844222),
    xH = i(314649);
function xK(e) {
    let { user: t } = e,
        { reducedMotion: n } = S.useContext(xX.C),
        {
            pendingAvatar: s,
            pendingBanner: l,
            pendingAvatarDecoration: r,
            pendingProfileEffect: a,
            pendingDisplayNameStyles: o,
            pendingThemeColors: u,
            pendingPronouns: d,
            pendingBio: c,
            tryItOutThemeColors: m,
            tryItOutAvatar: A,
            tryItOutBanner: h,
            tryItOutAvatarDecoration: T,
            tryItOutDisplayNameStyles: x,
        } = (0, g.cf)([S3.A], () => {
            let e = S3.A.getPendingChanges(),
                t = S3.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        p = (0, Tr.V7)({ userId: t.id, image: A ?? s });
    return (0, E.jsx)(Tl.A, {
        user: t,
        pendingPronouns: d,
        pendingBio: c,
        pendingBanner: h ?? l ?? i(636763),
        pendingDisplayNameStyles: x ?? o,
        pendingAvatar: p,
        pendingThemeColors: m ?? u,
        pendingAvatarDecoration: void 0 !== T ? T : r,
        pendingProfileEffect: a,
        avatarClassName: null != A || null != s || n.enabled ? void 0 : xH.WX,
        containerClassName: xH.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var xW = i(461414);
function xZ(e) {
    let { user: t, isVisible: i, shouldShow: n } = e,
        s = ul.Ay.isPremium(t),
        l = ul.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, g.cf)([S3.A], () => {
            let e = S3.A.getPendingChanges(),
                t = S3.A.getErrors(),
                i = S3.A.getTryItOutChanges();
            return { ...e, ...i, errors: t };
        }),
        { preset: c, onShuffle: m } = (function () {
            let e = (0, g.bG)([i6.A], () => i6.A.useReducedMotion),
                [t, i] = (0, S.useState)(xM()),
                {
                    banner: n,
                    themeColors: s,
                    avatarDecorationSkuId: l,
                    displayNameStyles: r,
                } = (0, S.useMemo)(() => {
                    let i = xP(t);
                    return {
                        banner: i.getBannerSrc(e),
                        themeColors: i.themeColors,
                        avatarDecorationSkuId: i.avatarDecorationSkuId,
                        displayNameStyles: i.displayNameStyles,
                    };
                }, [t, e]),
                a = (0, g.bG)([xy.A], () => {
                    let e = xy.A.getProduct(l);
                    return (0, xj.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, S.useEffect)(() => {
                (0, xO.w5)({ banner: n, themeColors: s, avatarDecoration: a, displayNameStyles: r });
            }, [n, s, a, r]);
            let o = (0, S.useCallback)(() => {
                let e = xM(t);
                i(e), er.default.track(eg.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: e });
            }, [t]);
            return { preset: t, onShuffle: o };
        })(),
        A = S.useRef(null);
    xY(A, nU._F.TRY_IT_OUT);
    let { analyticsLocations: h, sourceAnalyticsLocations: T } = (0, nH.Ay)(e$.A.USER_SETTINGS_TRY_OUT_PREMIUM),
        x = (e) => {
            e &&
                (d?.startsWith("https:") === !0
                    ? fetch(d)
                          .then((e) => e.blob())
                          .then((e) => (0, xF.We)(e))
                          .then((e) => {
                              (0, TI.p)({ avatar: u, themeColors: o, banner: e });
                          })
                          .catch(() => {
                              (0, TI.p)({ avatar: u, themeColors: o });
                          })
                    : null != d
                      ? (0, TI.p)({ avatar: u, themeColors: o, banner: d })
                      : (0, TI.p)({ avatar: u, themeColors: o }),
                er.default.track(eg.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
        };
    S.useEffect(() => {
        i &&
            er.default.track(eg.HAw.PREMIUM_UPSELL_VIEWED, {
                type: sO.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: eg.liQ.USER_SETTINGS },
                location_stack: T,
            });
    }, [T, t, i]);
    let p = (0, xv.V)()?.subscription_trial?.sku_id === sO.pe.TIER_2,
        f = (0, xb.O)(),
        N = (0, xw.U9)(f, sO.pe.TIER_2);
    return n
        ? (0, E.jsx)(nH.f5, {
              value: h,
              children: (0, E.jsxs)(cE.A, {
                  ref: A,
                  className: xW.MT,
                  type: cE.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, E.jsx)(Ts, {
                          stickyPreview: !1,
                          layoutClassName: xW.th,
                          profilePreviewTitle: (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(o5.t, { size: "md", color: "currentColor", className: xW.PC }),
                                  j.intl.string(j.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, E.jsxs)(E.Fragment, {
                              children: [(0, E.jsx)(xk, { preset: c, onShuffle: m }), (0, E.jsx)(xK, { user: t })],
                          }),
                          children: (0, E.jsxs)("div", {
                              children: [
                                  (0, E.jsxs)("div", {
                                      children: [
                                          (0, E.jsx)(eL.D, {
                                              variant: "heading-xl/extrabold",
                                              children: j.intl.string(j.t["2zGdAW"]),
                                          }),
                                          (0, E.jsx)(ee.E, {
                                              className: xW.h_,
                                              variant: "text-sm/normal",
                                              children: j.intl.string(j.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, E.jsx)(T6, {
                                      className: xW.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, Tr.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: xO.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, E.jsx)(TU, {
                                      className: xW.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: xO.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !l &&
                                      (0, E.jsx)(TO, {
                                          className: xW.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: xO.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: j.intl.string(j.t["7z0D1c"]),
                                          sectionTitle: j.intl.string(j.t.vtFfPX),
                                      }),
                                  (0, E.jsx)(TL, { user: t, className: xW.fz }),
                                  !p &&
                                      (0, E.jsx)(ee.E, {
                                          variant: "text-sm/normal",
                                          children: j.intl.string(j.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !p &&
                          (0, E.jsx)(x_.d, {
                              onSubscribeModalClose: x,
                              className: xW.Kv,
                              showUpsell: !0,
                              text: j.intl.format(j.t.TmfgI2, {
                                  onClick: () => {
                                      (0, xC.K)({ onSubscribeFinish: x });
                                  },
                              }),
                              button: s
                                  ? j.intl.string(j.t.AfRWI8)
                                  : N
                                    ? j.intl.formatToPlainString(j.t.bkQ4bH, { percent: f?.discount.amount })
                                    : j.intl.string(j.t.pj0XBN),
                              position: "inline",
                          }),
                      p &&
                          (0, E.jsxs)("div", {
                              children: [
                                  (0, E.jsx)("div", { className: xW.BU }),
                                  (0, E.jsx)(xB.Ay, {
                                      type: sO.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: sO.pe.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
var xq = i(814390),
    xQ = i(909536),
    xJ = i(843282),
    x$ = i(145497),
    x0 = i(685073),
    x1 = i(534400),
    x2 = i(581781),
    x3 = i(743981),
    x6 = i(51358);
let x4 = (0, sy.Ld)(),
    x5 = S.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: i, onChange: n } = e,
            s = S.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            l = (0, g.bG)([ir.default], () => (0, x0.Zo)(ir.default.getCurrentUser()?.primaryGuild).guildId),
            r = void 0 !== i ? i : l,
            a = S.useMemo(
                () => t.reduce((e, t) => (t.profile?.tag != null && e.push({ label: t.name, value: t.id }), e), []),
                [t],
            ),
            o = S.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = s.get(e.value);
                    if (null == t) return null;
                    let i = t.profile?.tag;
                    return null == i
                        ? null
                        : (0, E.jsx)(x2.A, {
                              guildTag: i,
                              guildBadge: t.profile?.badge ?? void 0,
                              guildId: t.id,
                              guildName: e.label,
                              guildIcon: t.icon,
                              guildIconSize: 32,
                          });
                },
                [s],
            ),
            u = S.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = s.get(e.value);
                    return null == t || null == t.profile?.tag
                        ? null
                        : (0, E.jsx)(x$.j, {
                              guildId: t.id,
                              guildName: t.name,
                              guildIcon: t.icon,
                              iconSize: 32,
                              animate: !1,
                          });
                },
                [s],
            ),
            d = S.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = s.get(e.value);
                    if (null == t) return null;
                    let i = t.profile?.tag;
                    return null == i
                        ? null
                        : (0, E.jsx)(x1.o9, {
                              guildId: t.id,
                              guildTag: i,
                              guildBadge: t.profile?.badge ?? void 0,
                              badgeSize: x3.Sl.SIZE_16,
                              textColor: "interactive-text-default",
                              textVariant: "text-sm/semibold",
                          });
                },
                [s],
            ),
            c = S.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, E.jsx)(E.Fragment, { children: o(t) });
                },
                [o],
            ),
            m = S.useCallback(
                (e) => {
                    n?.(e);
                },
                [n],
            ),
            A = S.useCallback((e) => e === r, [r]),
            h = S.useCallback((e) => e, []),
            T = S.useCallback(() => {
                n?.(null);
            }, [n]),
            x = S.useRef(null);
        return (
            xY(x, nU._F.GUILD_TAG),
            (0, E.jsxs)(o9.A, {
                title: j.intl.string(j.t.Pdd1nd),
                titleId: x4,
                ref: x,
                children: [
                    (0, E.jsx)(ee.E, {
                        className: x6.VA,
                        variant: "text-sm/normal",
                        children: j.intl.string(j.t.mlZ6Jx),
                    }),
                    (0, E.jsx)(xJ.Pw, {
                        className: x6.Lt,
                        optionClassName: x6.S0,
                        isSelected: A,
                        options: a,
                        select: m,
                        renderLeading: u,
                        renderTrailing: d,
                        renderOptionValue: c,
                        serialize: h,
                        clear: T,
                        clearable: null != r,
                        maxVisibleItems: 8,
                        "data-migration-pending": !0,
                    }),
                ],
            })
        );
    });
var x7 = i(318785),
    x8 = i(556729);
let x9 = (0, sy.Ld)();
function pe(e) {
    let t = (0, Sd.L)(sO.PremiumTypes.TIER_2);
    return (0, E.jsxs)(o9.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: j.intl.string(j.t["9AjdkD"]),
        titleId: x9,
        children: [
            (0, E.jsx)("div", {
                children: (0, E.jsx)(lF.k, {
                    "aria-labelledby": x9,
                    placeholder: e.placeholder,
                    maxLength: eg.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, E.jsx)(TL, { user: e.user, className: x8.F }),
        ],
    });
}
function pt(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: i } = e,
        n = L.m$.useSetting(),
        s = void 0 !== i ? i : n;
    return (0, E.jsx)(W.d, {
        label: j.intl.string(j.t["3cWDuO"]),
        description: s ? null : j.intl.formatToPlainString(j.t.aYhclf, { username: t }),
        checked: !s,
        onChange: (e) => {
            !e === n ? (0, S1._e)() : (0, TI.p)({ legacyUsernameDisabled: !e });
        },
    });
}
function pi(e) {
    let { user: t, savedUserColor: i, pendingColor: n, setPendingAccentColor: s } = e,
        l = t.getAvatarURL(null, 80),
        r = (0, TK.r)(ei.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, TW.rh)(l, r, !1),
        o = (0, TJ.LX)(a[0]);
    return (0, E.jsx)(o9.A, {
        title: j.intl.string(j.t["/X3fkf"]),
        children: (0, E.jsx)(T2, { onChange: (e) => s(e), color: n ?? i ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var pn = i(518477);
let ps = () => {
    let e = (0, g.bG)([cb.default], () => cb.default.getId());
    return (0, E.jsx)(o9.A, {
        title: j.intl.string(j.t.Jzj9q4),
        children: (0, E.jsx)(eD.$, {
            text: j.intl.string(j.t.Geikwq),
            onClick: () => {
                (0, S5.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [e$.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: pn.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var pl = i(594453);
function pr() {
    let e = (0, g.bG)([ir.default], () => {
            let e = ir.default.getCurrentUser();
            return tB()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e;
        }),
        t = (0, g.bG)([Ta.A], () => Ta.A.getUserProfile(e.id)),
        {
            pendingAvatar: i,
            pendingGlobalName: n,
            pendingBanner: s,
            pendingBio: l,
            pendingPronouns: r,
            pendingAccentColor: a,
            pendingThemeColors: o,
            pendingLegacyUsernameDisabled: u,
            pendingPrimaryGuildId: d,
            errors: c,
        } = (0, g.cf)([S3.A], () => {
            let e = S3.A.getPendingChanges(),
                t = S3.A.getErrors();
            return { ...e, errors: t };
        }),
        m = (0, Tr.V7)({ userId: e.id, image: i }),
        A = (0, Tc.EC)(),
        h = ul.Ay.canUsePremiumProfileCustomization(e),
        S = (0, Tt.z5)(i, e.avatar),
        T = (0, Tt.Ac)(s, t?.banner),
        x = (0, TZ.Ay)(e.id),
        p = x?.getLegacyUsername(),
        f = (c.global_name?.length ?? 0) > 0 ? c.global_name : (A?.nick ?? []),
        N = (c.bio?.length ?? 0) > 0 ? c.bio : (A?.bio ?? []),
        _ = (0, x7.b)();
    return (0, E.jsxs)("div", {
        className: pl.Q,
        children: [
            (0, E.jsx)(pe, {
                placeholder: e.username,
                errors: f,
                currentGlobalName: e.globalName,
                pendingGlobalName: n,
                onGlobalNameChange: (e) => (0, TI.p)({ globalName: e }),
                user: e,
            }),
            (0, E.jsx)(
                T4,
                {
                    sectionTitle: j.intl.string(j.t["+T3RI/"]),
                    errors: c.pronouns,
                    onPronounsChange: (e) => (0, TI.p)({ pronouns: e }),
                    pendingPronouns: r,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, E.jsx)(ps, {}),
            (0, E.jsx)(
                TO,
                {
                    onAvatarChange: (e) => {
                        (0, TI.p)({ avatar: e }), (0, Tt.WU)(null == e ? "remove" : "set");
                    },
                    showRemoveAvatarButton: S,
                    errors: c.avatar,
                    sectionTitle: j.intl.string(j.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, E.jsx)(Tb, { user: e, sectionTitle: j.intl.string(j.t["7v0T9P"]) }, "decoration"),
            (0, E.jsx)(TG, { user: e }),
            (0, E.jsx)(Tw, { user: e, sectionTitle: j.intl.string(j.t.wR5wOo) }, "effect"),
            (0, E.jsx)(TY, { user: e, sectionTitle: j.intl.string(j.t.GWrZOd) }, "frame"),
            h
                ? (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsx)(
                              TU,
                              {
                                  showRemoveBannerButton: T,
                                  errors: c.banner,
                                  onBannerChange: (e) => (0, TI.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, E.jsx)(T6, {
                              user: e,
                              pendingAvatarSrc: m,
                              pendingColors: o,
                              onThemeColorsChange: (e) => (0, TI.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, E.jsx)(
                      pi,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: a,
                          setPendingAccentColor: (e) => (0, TI.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, E.jsx)(
                Tp,
                {
                    sectionTitle: j.intl.string(j.t.ZzAR2Y),
                    errors: N,
                    onBioChange: (e) => (0, TI.p)({ bio: e }),
                    pendingBio: l,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            _.length > 0 &&
                (0, E.jsx)(x5, {
                    availablePrimaryGuilds: _,
                    pendingPrimaryGuildId: d,
                    onChange: (e) => (0, TI.p)({ primaryGuildId: e }),
                }),
            null != p && (0, E.jsx)(pt, { legacyUsername: p, pendingLegacyUsernameDisabled: u }, "legacy_username"),
        ],
    });
}
function pa() {
    (0, z.openModalLazy)(async () => {
        let { default: e } = await Promise.all([i.e("2125"), i.e("66901"), i.e("41704")]).then(i.bind(i, 562011));
        return (t) =>
            (0, E.jsx)(e, {
                ...t,
                source: {
                    page: eg.liQ.USER_SETTINGS,
                    section: eg.JJy.SETTINGS_CUSTOMIZE_PROFILE,
                    object: eg.ZSU.BUTTON_CTA,
                    type: eg.AnalyticsObjectTypes.BUY,
                },
            });
    });
}
var po = i(743539);
function pu() {
    let e = (0, g.bG)([ir.default], () => {
            let e = ir.default.getCurrentUser();
            return tB()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        t = (0, g.bG)([ek.A], () => ek.A.hidePersonalInformation),
        {
            pendingBio: i,
            pendingAvatar: n,
            pendingNameplate: s,
            showNotice: l,
            ...r
        } = (0, g.cf)([S3.A], () => ({ ...S3.A.getPendingChanges(), showNotice: S3.A.showNotice() })),
        a = (0, Tr.V7)({ userId: e.id, image: n }),
        o = (0, Tt.lw)({ pendingValue: s, userValue: e?.collectibles?.nameplate }),
        u = (0, xq.A)() && null != i ? xN.Ay.parse(void 0, i).content : i,
        d = ul.Ay.canUsePremiumProfileCustomization(e),
        c = (0, xQ.St)("edit-profile-upsell"),
        { analyticsLocations: m } = (0, nH.Ay)(e$.A.USER_SETTINGS_USER_PROFILE);
    S.useEffect(() => () => ss.h.wait(S1.IM), []);
    let [A, h] = S.useState(!1),
        T = !d,
        x = S.useRef(null);
    return t
        ? (0, E.jsx)(dn.A, {})
        : (0, E.jsxs)(nH.f5, {
              value: m,
              children: [
                  (0, E.jsx)(xf, {}),
                  (0, E.jsx)(Ts, {
                      profilePreview: (0, E.jsx)(Tl.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: pa,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: po.ti,
                      }),
                      nameplatePreview: (0, E.jsx)(Te.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? po.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, E.jsx)(pr, {}),
                  }),
                  (0, E.jsx)(xg.L, {
                      innerRef: x,
                      onChange: (e) => h(e),
                      threshold: 0.25,
                      active: T,
                      children: (0, E.jsx)("div", {
                          ref: x,
                          children: (0, E.jsx)(xZ, { user: e, shouldShow: T, isVisible: A }),
                      }),
                  }),
                  T &&
                      !l &&
                      (0, E.jsx)(x_.d, {
                          className: po.EL,
                          showUpsell: !A,
                          text: j.intl.format(j.t.TmfgI2, { onClick: () => (0, xC.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: c
                              ? (0, E.jsx)(xI.l, { size: "md", location: e$.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL })
                              : void 0,
                          button: (0, E.jsx)("div", {
                              className: po.Xl,
                              children: (0, E.jsx)(eD.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      er.default.track(eg.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          x?.current?.scrollIntoView({ behavior: "smooth" });
                                  },
                                  text: j.intl.string(j.t.uw9zI7),
                                  icon: o5.t,
                              }),
                          }),
                      }),
              ],
          });
}
var pd = i(625494),
    pc = i(454078);
let pg = { [nU.Eq.USER_PROFILE]: "main_profile_tab", [nU.Eq.GUILD]: "guild_profile_tab" },
    pm = (0, a.E2)(u.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, g.bG)([lq.A, eu.Ay, S3.A], () => {
                    let e = S3.A.selectedGuildId ?? lq.A.getGuildId();
                    return null == e || S3._.has(e) ? eu.Ay.getFlattenedGuildIds().find((e) => !S3._.has(e)) : e;
                }),
                t = (0, g.bG)([eo.A], () => eo.A.getGuild(e)),
                i = (0, g.bG)([S3.A], () => S3.A.showNotice()),
                n = (0, g.bG)([ir.default], () => ir.default.getCurrentUser()),
                s = xz.A.useField("subsection");
            return (
                S.useEffect(() => {
                    (0, rO._)(pg[s]);
                }, [s]),
                S.useEffect(() => {
                    null != n && t?.id != null && (0, xu.A)(n.id, n.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, n]),
                (0, E.jsx)(xc, {
                    children: (0, E.jsxs)(cr.F, {
                        component: (0, E.jsx)(es.A, {
                            children: (0, E.jsx)(eL.D, {
                                variant: "heading-xl/normal",
                                children: j.intl.string(j.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, E.jsxs)(S7.V, {
                                className: pc.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: s,
                                onItemSelect: function (e) {
                                    if (s !== e) {
                                        if (i) {
                                            (0, rR.fO)({ duration: 300, intensity: S8.n3 }),
                                                pd._.dispatch(eg.jej.EMPHASIZE_NOTICE);
                                            return;
                                        }
                                        e === nU.Eq.GUILD && null != t && (0, S9.V2)(t.id),
                                            xz.A.setState({ subsection: e });
                                    }
                                },
                                children: [
                                    (0, E.jsx)(
                                        S7.V.Item,
                                        {
                                            className: pc.YU,
                                            id: nU.Eq.USER_PROFILE,
                                            children: j.intl.string(j.t["2p07FR"]),
                                        },
                                        nU.Eq.USER_PROFILE,
                                    ),
                                    (0, E.jsx)(
                                        S7.V.Item,
                                        {
                                            className: e2()(pc.YU, pc.HY),
                                            "aria-label": j.intl.string(j.t.kPHroX),
                                            id: nU.Eq.GUILD,
                                            children: j.intl.string(j.t.kPHroX),
                                        },
                                        nU.Eq.GUILD,
                                    ),
                                ],
                            }),
                            s === nU.Eq.GUILD
                                ? (0, E.jsx)(xo, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (i) {
                                              (0, rR.fO)({ duration: 300, intensity: S8.n3 }),
                                                  pd._.dispatch(eg.jej.EMPHASIZE_NOTICE);
                                              return;
                                          }
                                          null != e && (0, S9.JJ)(e.id);
                                      },
                                  })
                                : (0, E.jsx)(pu, {}),
                        ],
                    }),
                })
            );
        },
        useSearchTerms: () => [
            j.intl.string(j.t["vi7f+q"]),
            j.intl.string(j.t.Ip9nBS),
            j.intl.string(j.t["2p07FR"]),
            j.intl.string(j.t["7vhiqk"]),
            j.intl.string(j.t.kPHroX),
            j.intl.string(j.t.lqaIxI),
            j.intl.string(j.t.Vgdusv),
            j.intl.string(j.t.DMeO2X),
        ],
    }),
    pA = (0, a.zZ)(u.X.PROFILE_CATEGORY, { buildLayout: () => [pm] });
var ph = i(294666);
let pE = () => {
        let e = (0, g.bG)([ir.default], () => ir.default.getCurrentUser()),
            { avatarSrc: t, avatarDecorationSrc: i } = (0, S4.A)({ userId: e?.id, size: i3._3.SIZE_48 });
        return null == e
            ? null
            : (0, E.jsxs)("div", {
                  className: ph.a5,
                  children: [
                      (0, E.jsx)(i2.eu, {
                          src: t,
                          avatarDecoration: i,
                          size: i3._3.SIZE_48,
                          "aria-label": j.intl.string(j.t.lqaIxI),
                      }),
                      (0, E.jsxs)("div", {
                          className: ph.FS,
                          children: [
                              (0, E.jsx)(ee.E, {
                                  color: "text-strong",
                                  variant: "text-md/medium",
                                  lineClamp: 1,
                                  children: e.globalName ?? e.username,
                              }),
                              (0, E.jsxs)("div", {
                                  className: ph.Fk,
                                  children: [
                                      (0, E.jsx)(ee.E, {
                                          variant: "text-sm/normal",
                                          color: "currentColor",
                                          lineClamp: 1,
                                          children: j.intl.string(j.t.Ip9nBS),
                                      }),
                                      (0, E.jsx)(us.R, { size: "xxs", color: "currentColor" }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
    },
    pS = (0, a.t_)(u.X.PROFILE_PANEL, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        notice: { stores: [S3.A], element: S2.A },
        initialize: () => () =>
            ss.h.wait(() => {
                (0, S1.F7)();
            }),
        buildLayout: () => [pA],
    }),
    pT = (0, a.i4)(u.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        icon: pp,
        StronglyDiscouragedCustomComponent: pE,
        usePredicate: () => !(0, S6.X)("user_settings_sidebar"),
        buildLayout: () => [pS],
    }),
    px = (0, a.i4)(u.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        icon: pp,
        StronglyDiscouragedCustomComponent: pE,
        usePredicate: () => (0, S6.X)("user_settings_sidebar"),
        onClick: () => {
            let e = cb.default.getId();
            (0, S5.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function pp() {
    let e = (0, g.bG)([ir.default], () => ir.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: i } = (0, S4.A)({ userId: e?.id, size: i3._3.SIZE_48 });
    return (0, E.jsx)(i2.eu, { src: t, avatarDecoration: i, size: i3._3.SIZE_20, "aria-hidden": !0 });
}
let pf = (0, a.WI)(u.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [pT, px] });
var pN = i(98207),
    p_ = (i(204925), i(818348));
let pI = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, z.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([i.e("40933"), i.e("19623"), i.e("21007")]).then(i.bind(i, 888363));
            return (i) => (0, E.jsx)(t, { claimRequired: e, ...i });
        },
        { onCloseRequest: e ? p_.tE : null, onCloseCallback: t },
    );
};
var pC = i(940856),
    pb = i(36149),
    pv = i(207560);
function py(e) {
    let t = (0, pv.fk)(),
        i = (0, pb.b8)(),
        n = (0, pb.yM)(),
        s = (0, pb.Y2)();
    if (!t) return !1;
    let l = !i || n;
    switch (e) {
        case "verify":
            return l;
        case "edit":
            return !l && s;
        case "info":
            return !l && !s;
        default:
            return !1;
    }
}
var pj = i(516761);
function pO() {
    let e = j.intl.string(j.t.XxRj7f);
    return (0, E.jsxs)(ee.E, {
        variant: "text-md/medium",
        children: [
            `${e} \u{2022} `,
            j.intl.format(pj.default.WM5adV, {
                handleOnHelpUrlHook: () => window.open(tp.A.getArticleURL(eg.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank"),
            }),
        ],
    });
}
let pR = (0, a.Tf)(u.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, {
        usePredicate: () => py("edit"),
        useTitle: () => j.intl.string(j.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: h._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: pO }),
        useLabel: () => j.intl.string(j.t.bt75uw),
        onClick: function () {
            (0, z.openModalLazy)(async () => {
                let { default: e } = await i.e("45361").then(i.bind(i, 151080));
                return (t) => (0, E.jsx)(e, { ...t });
            });
        },
    }),
    pL = (0, a.E2)(u.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, {
        usePredicate: () => py("info"),
        useSearchTerms: () => [j.intl.string(j.t["/52UYy"])],
        Component: function () {
            return (0, E.jsx)(sV.D, {
                label: j.intl.string(j.t["/52UYy"]),
                layout: "horizontal",
                children: (0, E.jsxs)(K.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "end",
                    gap: "md",
                    children: [
                        (0, E.jsx)(ee.E, { variant: "text-md/medium", children: j.intl.string(j.t.XxRj7f) }),
                        (0, E.jsx)("div", {
                            style: { visibility: "hidden" },
                            children: (0, E.jsx)(eD.$, {
                                onClick: p_.tE,
                                text: j.intl.string(j.t.bt75uw),
                                "aria-hidden": !0,
                            }),
                        }),
                    ],
                }),
            });
        },
    });
var pD = i(139716),
    pP = i(847599);
function pG() {
    return (0, pb.yM)() ? j.intl.string(j.t.sK0dmH) : j.intl.string(j.t.lKDPGA);
}
let pM = (0, a.Tf)(u.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, {
        usePredicate: () => py("verify"),
        useTitle: () => j.intl.string(j.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: h._1.TEXT, useText: pG }),
        useLabel: function () {
            return (0, pb.yM)() ? j.intl.string(j.t["9KiIz6"]) : j.intl.string(j.t.DVywUB);
        },
        onClick: () => pD.A.showAgeVerificationGetStartedModal({ entryPoint: pP.q1.ACCOUNT_AGE_GROUP }),
    }),
    pU = (0, a.Tf)(u.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, g.bG)([ir.default], () => ir.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => j.intl.string(j.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: h._1.TEXT, useText: () => j.intl.string(j.t.qxk9zo) }),
        useLabel: () => j.intl.string(j.t.BleMPB),
        onClick: () => pI(),
    });
function pV(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function pk(e) {
    let [t, i] = e.split("@");
    return `${"*".repeat(t.length)}@${i}`;
}
function pw(e) {
    let { text: t, censor: i, revealLabel: n, hideLabel: s, redesign: l = !1 } = e,
        [r, a] = S.useState(!1),
        o = r ? t : i(t);
    return (0, E.jsxs)(K.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        justify: l ? "end" : "start",
        children: [
            l ? (0, E.jsx)(ee.E, { variant: "text-md/medium", children: o }) : o,
            (0, E.jsx)(en.Q, {
                variant: "primary",
                textVariant: l ? "text-md/medium" : "text-sm/medium",
                "aria-label": r ? s : n,
                onClick: () => a(!r),
                text: r ? j.intl.string(j.t.fgq1gs) : j.intl.string(j.t.dcztdU),
            }),
        ],
    });
}
function pB() {
    let e = (0, g.bG)([ir.default], () => ir.default.getCurrentUser()?.email);
    return null == e
        ? (0, E.jsx)(ee.E, { variant: "text-md/medium", children: j.intl.string(j.t["8SfTN/"]) })
        : (0, E.jsx)(pw, {
              text: e,
              censor: pk,
              revealLabel: j.intl.string(j.t["Zvx+yV"]),
              hideLabel: j.intl.string(j.t.nqTD4d),
              redesign: !0,
          });
}
let pF = (0, a.Tf)(u.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, g.bG)([ir.default], () => ir.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => j.intl.string(j.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: h._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: pB }),
    useLabel: function () {
        return null == (0, g.bG)([ir.default], () => ir.default.getCurrentUser()?.email)
            ? j.intl.string(j.t.OYkgVk)
            : j.intl.string(j.t.bt75uw);
    },
    useAriaLabel: function () {
        return null == (0, g.bG)([ir.default], () => ir.default.getCurrentUser()?.email)
            ? j.intl.string(j.t["pvBD+W"])
            : j.intl.string(j.t["8peUT0"]);
    },
    onClick: function () {
        (0, z.openModalLazy)(async () => {
            let { default: e } = await Promise.all([i.e("97570"), i.e("20577"), i.e("65861")]).then(i.bind(i, 97060));
            return (t) => (0, E.jsx)(e, { ...t });
        });
    },
});
var pz = i(557722),
    pY = i(53516);
function pX() {
    let e = (0, g.bG)([ir.default], () => ir.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, E.jsx)(ee.E, { variant: "text-md/medium", children: j.intl.string(j.t.I5kDqj) })
        : (0, E.jsx)(K.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, E.jsx)(pw, {
                  text: t,
                  censor: pV,
                  revealLabel: j.intl.string(j.t.eY3xlT),
                  hideLabel: j.intl.string(j.t["jllbv+"]),
                  redesign: !0,
              }),
          });
}
let pH = (0, a.Tf)(u.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, g.bG)([ir.default], () => ir.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => j.intl.string(j.t.kerONq),
    useAriaLabel: function () {
        return null == (0, g.bG)([ir.default], () => ir.default.getCurrentUser()?.phone)
            ? j.intl.string(j.t["SfUuE+"])
            : j.intl.string(j.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: h._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: pX }),
    useLabel: function () {
        return null == (0, g.bG)([ir.default], () => ir.default.getCurrentUser()?.phone)
            ? j.intl.string(j.t.OYkgVk)
            : j.intl.string(j.t.bt75uw);
    },
    onClick: function () {
        null == ir.default.getCurrentUser()?.phone
            ? (0, z.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.all([
                          i.e("58735"),
                          i.e("4782"),
                          i.e("89545"),
                          i.e("11493"),
                          i.e("84704"),
                          i.e("86197"),
                      ]).then(i.bind(i, 615715));
                      return (t) => (0, E.jsx)(e, { reason: pz.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: pY.V },
              )
            : (0, z.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([i.e("25866"), i.e("63314")]).then(i.bind(i, 660740));
                  return (t) => (0, E.jsx)(e, { ...t });
              });
    },
});
function pK() {
    let e = (0, g.bG)([ir.default], () => ir.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function pW() {
    let e = (0, Tc.EC)(),
        t = e?.nick?.[0] ?? null,
        i = (0, g.bG)([ir.default], () => ir.default.getCurrentUser());
    if (null == i) return null;
    let n = i.hasUniqueUsername() ? i.username : `${i.username}#${i.discriminator}`;
    return (0, E.jsxs)(E.Fragment, {
        children: [
            (0, E.jsx)(ee.E, { variant: "text-md/medium", children: n }),
            null != t &&
                (0, E.jsx)(ts.m, {
                    __unsupportedReactNodeAsText: t,
                    "aria-label": !1,
                    children: (0, E.jsx)(lG.E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: ei.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let pZ = (0, a.Tf)(u.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => j.intl.string(j.t.qqhR3L),
        useTrailingContent: () => ({ type: h._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: pW }),
        useLabel: () => j.intl.string(j.t.bt75uw),
        useAriaLabel: () => j.intl.string(j.t.JECa91),
        useSubtitle: () => (pK() ? j.intl.string(j.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: pK,
        onClick: function () {
            (0, z.openModalLazy)(async () => {
                let { default: e } = await Promise.all([i.e("38408"), i.e("20429"), i.e("20969")]).then(
                    i.bind(i, 667792),
                );
                return (t) => (0, E.jsx)(e, { ...t });
            });
        },
    }),
    pq = (0, a.zZ)(u.X.ACCOUNT_INFO_CATEGORY, {
        usePredicate: () => (0, g.bG)([ir.default], () => null != ir.default.getCurrentUser()),
        useTitle: () => j.intl.string(j.t.apNo4l),
        useInlineNotice: function () {
            let e = (0, g.bG)([ir.default], () => ir.default.getCurrentUser());
            return null == e
                ? null
                : e.isClaimed()
                  ? null == e.email || e.verified
                      ? null
                      : {
                            type: h.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            useTitle: () => j.intl.string(j.t.tuGzBT),
                            useText: () => j.intl.string(j.t.NAzplE),
                            button: { useText: () => j.intl.string(j.t.lm1UKt), onClick: () => (0, pC.S)(e) },
                        }
                  : {
                        type: h.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        useTitle: () => j.intl.string(j.t["/3qnL/"]),
                        useText: () => j.intl.string(j.t.qKs3vg),
                        button: { useText: () => j.intl.string(j.t["7psymi"]), onClick: () => pI() },
                    };
        },
        buildLayout: () => [pZ, pU, pF, pH, pM, pR, pL],
    });
var pQ = i(398177);
let pJ = (0, a.Tf)(u.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
    useTitle: () => j.intl.string(j.t["CIGa+7"]),
    useLabel: () => j.intl.string(j.t.bt75uw),
    useAriaLabel: () => j.intl.string(j.t["FRep5/"]),
    useVariant: () => "secondary",
    onClick: () => {
        (0, z.openModal)((e) => (0, E.jsx)(pQ.default, { ...e, onSuccess: () => e.onClose() }));
    },
});
var p$ = i(200921);
let p0 = [];
function p1() {
    p0 = [];
}
class p2 extends g.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return p0;
    }
}
let p3 = new p2(ss.h, {
    LOGOUT: p1,
    LOGIN_SUCCESS: p1,
    FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessions: t } = e;
        p0 = t.map((e) => ({ ...e, approx_last_used_time: new Date(e.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessionIdHashes: t } = e,
            i = [...p0],
            n = !1;
        for (let e of t) {
            let t = i.findIndex((t) => t.id_hash === e);
            t >= 0 && (i.splice(t, 1), (n = !0));
        }
        if (!n) return !1;
        p0 = i;
    },
});
function p6() {
    let e = (0, g.cf)([p3], () => p3.getSessions());
    return S.useMemo(() => {
        let t = [...e],
            i = null,
            n = cb.default.getAuthSessionIdHash();
        if (null != n) {
            let e = t.findIndex((e) => e.id_hash === n);
            e >= 0 && (i = t.splice(e, 1)[0]);
        }
        return (
            t.sort((e, t) => t.approx_last_used_time.valueOf() - e.approx_last_used_time.valueOf()),
            { currentSession: i, otherSessions: t }
        );
    }, [e]);
}
function p4(e) {
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? j.intl.string(j.t.TXCmfL) : rV()(e).fromNow();
}
var p5 = i(176524),
    p7 = i(646270),
    p8 = i(738678),
    p9 = i(490173);
function fe(e) {
    let { icon: t, label: i, subLabel: n, description: s, children: l, muted: r } = e;
    return (0, E.jsxs)(K.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, E.jsx)(p5.A, { Icon: t, color: r ? ei.A.colors.ICON_MUTED : "currentColor" }),
            (0, E.jsxs)(K.B, {
                direction: "vertical",
                gap: "xxs",
                children: [
                    (0, E.jsxs)(K.B, {
                        direction: "horizontal",
                        gap: "xs",
                        children: [
                            (0, E.jsx)(ee.E, { variant: "text-md/semibold", color: "text-strong", children: i }),
                            null != i &&
                                null != n &&
                                (0, E.jsx)(ee.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    "aria-hidden": !0,
                                    children: "\u2022",
                                }),
                            null != n &&
                                (0, E.jsx)(ee.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                        ],
                    }),
                    (0, E.jsx)(ee.E, { variant: "text-sm/normal", color: "text-muted", children: s }),
                ],
            }),
            l,
        ],
    });
}
function ft(e) {
    let { session: t, current: i } = e,
        {
            location: n,
            platform: s,
            os: l,
            Icon: r,
            lastActive: a,
        } = (function (e, t) {
            let i = e.client_info?.location ?? e.client_info?.ip,
                n = e.client_info?.platform,
                { text: s, icon: l } = (function (e) {
                    switch (e?.toLowerCase().trim()) {
                        case null:
                        case void 0:
                        case "":
                            return { text: j.intl.string(j.t.cDHCNY), icon: tr.k };
                        case "ios":
                        case "android":
                            return { text: e, icon: p7.u };
                        case "horizon os":
                            return { text: e, icon: p8.G };
                        default:
                            return { text: e, icon: tr.k };
                    }
                })(e.client_info?.os);
            return { location: i, platform: n, os: s, Icon: l, lastActive: t ? null : p4(e.approx_last_used_time) };
        })(t, i),
        o = [n, a].filter(N.Vq);
    return (0, E.jsx)(fe, {
        icon: r,
        label: l,
        subLabel: s,
        description: o.join(" \xb7 "),
        children:
            !i &&
            (0, E.jsx)($.D, {
                className: p9.X,
                onClick: () => (0, p$.U0)(t.id_hash),
                "aria-label": j.intl.string(j.t.E4MJNt),
                children: (0, E.jsx)(gN.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function fi(e) {
    let { title: t, children: i } = e,
        n = S.useId();
    return (0, E.jsxs)(K.B, {
        role: "group",
        "aria-labelledby": n,
        gap: "xl",
        padding: { top: 8, bottom: 8 },
        children: [
            (0, E.jsx)(eL.D, { id: n, variant: "heading-md/semibold", color: "text-muted", children: t }),
            (0, E.jsx)(K.B, { role: "list", gap: "xl", children: i }),
        ],
    });
}
let fn = (0, a.E2)(u.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            let { currentSession: e } = p6();
            return null == e
                ? (0, E.jsx)(dr.y, {})
                : (0, E.jsx)(fi, {
                      title: j.intl.string(j.t.LLS19o),
                      children: (0, E.jsx)(ft, { session: e, current: !0 }),
                  });
        },
        useSearchTerms: () => [],
    }),
    fs = (0, a.E2)(u.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = p6();
            return (0, E.jsx)(sV.D, {
                label: j.intl.string(j.t.Vij32M),
                description: j.intl.string(j.t.OTXyaf),
                children: (0, E.jsx)(eD.$, {
                    onClick: () => (0, p$.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: j.intl.string(j.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [j.intl.string(j.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = p6();
            return e.length > 0;
        },
    });
var fl = i(766928);
function fr() {
    return (0, E.jsx)(fe, {
        icon: fl.W,
        label: j.intl.string(j.t.iUa0sn),
        description: j.intl.format(j.t["044+8i"], {
            onClick: () =>
                (0, eY.openUserSettings)(u.X.ACCOUNT_PANEL, { analyticsLocations: [e$.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
let fa = (0, a.E2)(u.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = p6(),
                t = (0, g.bG)([ir.default], () => ir.default.getCurrentUser());
            return (0, E.jsxs)(fi, {
                title: j.intl.string(j.t.xx1MWc),
                children: [
                    e.map((e) => (0, E.jsx)(ft, { session: e }, e.id_hash)),
                    t?.mfaEnabled ? null : (0, E.jsx)(fr, {}),
                ],
            });
        },
        useSearchTerms: () => [j.intl.string(j.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = p6(),
                t = (0, g.bG)([ir.default], () => ir.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    fo = (0, a.zZ)(u.X.SESSIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.mEndXM),
        useSubtitle: () => j.intl.string(j.t.b7ZpTM),
        initialize: () => {
            (0, p$.GY)();
        },
        buildLayout: () => [fn, fa, fs],
        useSearchTerms: () => [
            j.intl.string(j.t["+1h0k/"]),
            j.intl.string(j.t.LLS19o),
            j.intl.string(j.t.xx1MWc),
            j.intl.string(j.t.lSWsrd),
        ],
    }),
    fu = (0, a.t_)(u.X.SESSIONS_PANEL, {
        useTitle: () => j.intl.string(j.t.mEndXM),
        useObscuredNotice: dn.L,
        buildLayout: () => [fo],
    }),
    fd = (0, a.t0)(u.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [fu],
        initialize: () => {
            (0, p$.GY)();
        },
        useTrailingDecoration: () => ({
            type: h.xn.TEXT,
            useText: () => {
                let { currentSession: e, otherSessions: t } = p6(),
                    i = t.length + +(null != e);
                return i > 0 ? j.intl.formatToPlainString(j.t.G7zwOk, { count: i }) : j.intl.string(j.t.MKDeyL);
            },
        }),
    });
var fc = i(464477);
function fg(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == e
        ? null
        : e.hasAnyStaffLevel()
          ? t
              ? j.intl.string(j.t.YJGvuD)
              : j.intl.string(j.t["3iKih7"])
          : e.hasFlag(eg.nhx.PARTNER)
            ? t
                ? j.intl.string(j.t["9UucjT"])
                : j.intl.string(j.t.Sq6Q1u)
            : null == e.email
              ? t
                  ? j.intl.string(j.t["9VWpT9"])
                  : j.intl.string(j.t.LfCBZG)
              : null;
}
function fm() {
    return (0, uQ.bG)([ir.default], () => {
        let e = ir.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
var fA =
    (((r = {}).AVAILABLE = "available"),
    (r.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (r.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    r);
function fh() {
    let e = (0, uQ.bG)([ir.default], () => ir.default.getCurrentUser()?.verified);
    return fc.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function fE() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, uQ.bG)([eo.A, T8.A, ir.default], () =>
        ir.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? j.intl.string(j.t.hxf9fX)
                : j.intl.string(j.t["3iKih7"])
            : eo.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(eg.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        T8.A.can(eg.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? j.intl.string(j.t.OYTCUh)
                  : j.intl.string(j.t.HC8uSZ)
              : null,
    );
}
var fS = i(466034);
let fT = (0, a.Tf)(u.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => j.intl.string(j.t.lQsY7B),
        useSubtitle: () => fE(!0),
        useDisabled: () => null !== fE(!0),
        useLabel: () => j.intl.string(j.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, g.bG)([cb.default], () => cb.default.hasTOTPEnabled()),
                t = fh() === fA.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, su.A)({
                title: j.intl.string(j.t["D+aE7g"]),
                subtitle: j.intl.string(j.t.EA4ZEk),
                variant: "critical",
                confirmText: j.intl.string(j.t.N86XcP),
                onConfirm: () => pN.A.disable(),
            }),
    }),
    fx = (0, a.zZ)(u.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => j.intl.string(j.t.RumMFo),
        useSubtitle: () => j.intl.string(j.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, g.bG)([cb.default], () => cb.default.hasTOTPEnabled()),
                t = fh() === fA.AVAILABLE;
            if (!e && t)
                return {
                    type: h.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: h.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: j.intl.string(j.t.cTNUeD),
                            onClick: fS.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (fh()) {
                case fA.UNAVAILABLE_NO_CRYPTO:
                    return { type: h.lT.INLINE_NOTICE, noticeType: "info", useText: () => j.intl.string(j.t.PhHhsj) };
                case fA.UNAVAILABLE_UNVERIFIED:
                    return {
                        type: h.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        useText: () => j.intl.string(j.t.uggF7o),
                    };
                case fA.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [fT],
    });
var fp = i(670492),
    ff = i(32880),
    fN = i(663417),
    f_ = i(658675),
    fI = i(900686);
function fC() {
    (0, z.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(i.bind(i, 662758));
        return (t) =>
            (0, E.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    pN.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                        var t;
                        return (
                            (t = e),
                            void (0, z.openModalLazy)(
                                async () => {
                                    let { default: e } = await Promise.all([i.e("30464"), i.e("96179")]).then(
                                        i.bind(i, 518142),
                                    );
                                    return (i) => (0, E.jsx)(e, { ...i, password: t });
                                },
                                { stackingBehavior: "stack" },
                            )
                        );
                    }),
                title: j.intl.string(j.t.PsQmzU),
                actionText: j.intl.string(j.t.ajkYcF),
            });
    });
}
var fb = i(203082);
function fv(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function fy() {
    let e = fp.A.getVerificationKey();
    try {
        await pN.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, Ew.P0)({
            message: e.body?.message ?? j.intl.string(j.t.F8FvUy),
            type: EF.Ck.FAILURE,
            id: "backup-code-regen-failed",
        });
    }
}
function fj(e) {
    let {
            code: { code: t, consumed: i },
        } = e,
        n = fv(t),
        s = S.useRef(null),
        l = (0, E.jsxs)(E.Fragment, {
            children: [(0, E.jsx)(f_.P, { checked: i }), (0, E.jsx)(ee.E, { variant: "text-md/normal", children: n })],
        });
    return cR.p5
        ? (0, E.jsx)($.D, {
              tag: "li",
              className: e2()(fb.aY, fb.vk),
              innerRef: s,
              onKeyDown: (e) => {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, cR.C)(n), s?.current?.focus());
              },
              onClick: () => {
                  (0, cR.C)(n),
                      (0, Ew.P0)({ message: j.intl.string(j.t.mGZ66D), type: EF.Ck.SUCCESS, id: "backup-code-copied" });
              },
              children: l,
          })
        : (0, E.jsx)("li", { className: fb.aY, children: l });
}
let fO = (0, a.zZ)(u.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.fC9qV0),
        useSubtitle: () =>
            (0, g.bG)([fp.A], () => fp.A.getBackupCodes().length > 0)
                ? j.intl.format(j.t.tp7zEK, {})
                : j.intl.string(j.t.LoOi4S),
        usePredicate: fm,
        buildLayout: () => [fR],
    }),
    fR = (0, a.E2)(u.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.fC9qV0)],
        Component: function () {
            let e = (0, g.bG)([fp.A], () => fp.A.getBackupCodes()),
                t = S.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: i } = e;
                                return `* ${fv(t)}` + (i ? ` (${j.intl.string(j.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, E.jsx)(eD.$, { text: j.intl.string(j.t.Jc2myK), size: "sm", variant: "secondary", onClick: fC })
                : (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsx)("ul", {
                              className: fb.E5,
                              children: e.map((e) => (0, E.jsx)(fj, { code: e }, e.code)),
                          }),
                          (0, E.jsxs)(aQ.e, {
                              size: "sm",
                              children: [
                                  (0, E.jsx)(fI.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, E.jsx)(eD.$, {
                                          text: j.intl.string(j.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: ff.s,
                                      }),
                                  }),
                                  (0, E.jsx)(eD.$, {
                                      text: j.intl.string(j.t["3x962E"]),
                                      variant: "secondary",
                                      icon: fN.f,
                                      onClick: fy,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    fL = (0, a.Tf)(u.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => j.intl.string(j.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = S.useState(!1),
                i = (0, g.bG)([ir.default], () => ir.default.getCurrentUser()?.phone);
            return null == i
                ? null
                : j.intl.format(e ? j.t["xDBk/I"] : j.t.bnKdnl, {
                      phone: e ? i : i.slice(-4),
                      toggleButton: () =>
                          (0, E.jsx)(en.Q, {
                              text: e ? j.intl.string(j.t.fgq1gs) : j.intl.string(j.t.dcztdU),
                              onClick: () => t(!e),
                          }),
                  });
        },
        useLabel: () => j.intl.string(j.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => (0, g.bG)([ir.default], () => ir.default.getCurrentUser()?.hasFlag(eg.nhx.MFA_SMS) ?? !1),
        onClick: () =>
            void (0, z.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 662758));
                return (t) =>
                    (0, E.jsx)(e, {
                        ...t,
                        handleSubmit: pN.A.disableSMS,
                        title: j.intl.string(j.t.KLWnit),
                        children: j.intl.string(j.t["W0/Duf"]),
                    });
            }),
    }),
    fD = (0, a.zZ)(u.X.SMS_AUTH_CATEGORY, {
        useTitle: () => j.intl.string(j.t.wuHuI5),
        useSubtitle: () => (0, g.bG)([ir.default], () => fg(ir.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, g.bG)([ir.default], () => ir.default.getCurrentUser()?.hasFlag(eg.nhx.MFA_SMS) ?? !1),
                t = (0, g.bG)([ir.default], () => null != fg(ir.default.getCurrentUser()));
            if (!e)
                return {
                    type: h.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: h.UV.BUTTON,
                            id: "sms-setup-button",
                            text: j.intl.string(j.t.Age7yU),
                            onClick: fP,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = fh(),
                t = fm(),
                i = (0, g.bG)([cb.default], () => cb.default.hasTOTPEnabled());
            return e === fA.AVAILABLE && t && i;
        },
        buildLayout: () => [fL],
    });
function fP() {
    let e = ir.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            (t = { reason: pz.d.USER_SETTINGS_UPDATE, onAddedPhone: pN.A.enableSMS }),
                (0, z.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            i.e("58735"),
                            i.e("4782"),
                            i.e("89545"),
                            i.e("11493"),
                            i.e("84704"),
                            i.e("86197"),
                        ]).then(i.bind(i, 615715));
                        return (i) => (0, E.jsx)(e, { ...i, ...t });
                    },
                    { modalKey: pY.V },
                );
        } else pN.A.enableSMS();
}
var fG = i(665671),
    fM = i(442433),
    fU = i(917136),
    fV = i(976910),
    fk = i(108666);
function fw(e) {
    let { credential: t } = e;
    return (0, E.jsxs)("li", {
        className: fk.e,
        children: [
            (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(ee.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, E.jsx)(ee.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: j.intl.format(j.t["7JgxF5"], { lastUsed: p4(t.last_used) }),
                        }),
                ],
            }),
            (0, E.jsx)(lj.K, {
                icon: mN.j,
                variant: "icon-only",
                size: "sm",
                "aria-label": j.intl.string(j.t["+nrTbK"]),
                onClick: (e) => {
                    (0, fM.L3)(e, async () => {
                        let { default: e } = await i.e("32529").then(i.bind(i, 41e3));
                        return (i) => (0, E.jsx)(e, { credential: t, ...i });
                    });
                },
            }),
        ],
    });
}
let fB = (0, a.zZ)(u.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.IBq4Y3),
        useSubtitle: () => j.intl.string(j.t.yK9edS),
        useHeaderDecoration: function () {
            if (fh() === fA.AVAILABLE)
                return {
                    type: h.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: h.UV.BUTTON,
                            id: "add-security-key-button",
                            text: j.intl.string(j.t["Tzs/fw"]),
                            icon: ar.j,
                            onClick: fG.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (fh()) {
                    case fA.UNAVAILABLE_NO_CRYPTO:
                        return {
                            type: h.lT.INLINE_NOTICE,
                            noticeType: "info",
                            useText: () => j.intl.string(j.t.bWCGI9),
                        };
                    case fA.UNAVAILABLE_UNVERIFIED:
                        return {
                            type: h.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            useText: () => j.intl.string(j.t.uggF7o),
                        };
                    case fA.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [fF],
    }),
    fF = (0, a.E2)(u.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [j.intl.string(j.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, g.cf)([fV.A], () => ({
                hasFetchedCredentials: fV.A.hasFetchedCredentials(),
                credentials: fV.A.getCredentials(),
            }));
            return (S.useEffect(() => {
                t || fU.JQ();
            }, [t]),
            t)
                ? (0, E.jsx)(K.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, E.jsx)(fw, { credential: e }, e.id)),
                  })
                : (0, E.jsx)(dr.y, {});
        },
    }),
    fz = (0, a.t_)(u.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => j.intl.string(j.t.m0FidJ),
        buildLayout: () => [fB, fx, fD, fO],
    }),
    fY = (0, a.t0)(u.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => ({
            type: h.xn.TEXT,
            useText: () => (fm() ? j.intl.string(j.t.lQsY7B) : j.intl.string(j.t.WsUuTt)),
        }),
        buildLayout: () => [fz],
    }),
    fX = (0, a.zZ)(u.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => j.intl.string(j.t["0iH2vc"]),
        buildLayout: () => [pJ, fY, fd],
    });
var fH = i(308645),
    fK = i(271995),
    fW = i(855267);
let fZ = (0, a.E2)(u.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["16r9jm"])],
        Component: fW.A,
    }),
    fq = (0, a.zZ)(u.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [fZ] }),
    fQ = (0, a.t_)(u.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => j.intl.string(j.t["16r9jm"]),
        buildLayout: () => [fq],
    }),
    fJ = (0, a.zZ)(u.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: () => j.intl.string(j.t["16r9jm"]),
        buildLayout: () => [f$],
    }),
    f$ = (0, a.t0)(u.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: fK.$b,
        useSubtitle: fK.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: i } = (0, fK._k)();
            return { type: h.Xy.ICON, icon: i, color: e, backgroundColor: t };
        },
        initialize: () => {
            fH.Yn();
        },
        buildLayout: () => [fQ],
    });
var f0 = i(834981),
    f1 = i(840387),
    f2 = i(986922),
    f3 = i(602339);
let f6 = (0, a.E2)(u.X.FAMILY_CENTER_SETTING, {
        Component: f2.p,
        useSearchTerms: () => [
            j.intl.string(f3.default.RZqaJn),
            j.intl.string(f3.default.bdBmqy),
            j.intl.string(f3.default["gVWG+6"]),
            j.intl.string(f3.default.ahKIJO),
            j.intl.string(f3.default["8SLtqb"]),
        ],
    }),
    f4 = (0, a.zZ)(u.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [f6] }),
    f5 = (0, a.t_)(u.X.FAMILY_CENTER_PANEL, {
        useTitle: () => j.intl.string(f3.default.RZqaJn),
        buildLayout: () => [f4],
    }),
    f7 = (0, a.zZ)(u.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => j.intl.string(f3.default.RZqaJn),
        usePersistentBadge: function () {
            return S.useMemo(() => ({ badgeType: h.Xi.COUNT, useCount: f0.VT }), []);
        },
        buildLayout: () => [f8],
    }),
    f8 = (0, a.t0)(u.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, f0.Li)() ? j.intl.string(f3.default.IcMQUP) : j.intl.string(f3.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, f1.Z)(),
                t = (0, f0.Li)();
            return e
                ? t
                    ? j.intl.string(f3.default.G8lHFU)
                    : j.intl.string(f3.default.uOLNEZ)
                : j.intl.string(f3.default.Z53oSM);
        },
        buildLayout: () => [f5],
    });
var f9 = i(425587),
    Ne = i(662758);
function Nt(e) {
    if (e.body.code === eg.t02.INVALID_PASSWORD) throw e;
    (0, aW.A)({ title: j.intl.string(j.t.LX0nT8), subtitle: e.body.message });
}
async function Ni() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = ir.default.getCurrentUser();
    if (null == t) return;
    let i = [];
    try {
        i = (await f9.A.fetchTeams(!0)).body;
    } catch {}
    i.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, aW.A)({
              title: j.intl.string(j.t["Y++oNe"]),
              subtitle: j.intl.format(j.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : eo.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, aW.A)({ title: j.intl.string(j.t.vJiTOL), subtitle: j.intl.string(j.t.UyVVan) })
          : t.isClaimed()
            ? (0, z.openModal)((t) =>
                  (0, E.jsx)(Ne.default, {
                      ...t,
                      handleSubmit: (t) => (0, S1.U_)(t, e).then(eg.tEg, Nt),
                      title: e ? j.intl.string(j.t.xca2ts) : j.intl.string(j.t.goXv9g),
                      actionText: e ? j.intl.string(j.t["8lQ2rR"]) : j.intl.string(j.t.jf5GGb),
                      variant: "critical-primary",
                      children: e ? j.intl.string(j.t.FB4H1D) : j.intl.string(j.t.gk7h32),
                  }),
              )
            : (0, su.A)({
                  title: j.intl.string(j.t.xca2ts),
                  subtitle: j.intl.string(j.t.FB4H1D),
                  confirmText: j.intl.string(j.t["8lQ2rR"]),
                  onConfirm: () => (0, S1.U_)("", !0),
              });
}
let Nn = (0, a.Tf)(u.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => j.intl.string(j.t["gIpzR+"]),
        useSubtitle: () => j.intl.string(j.t.Bd6dOf),
        useLabel: () => j.intl.string(j.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => Ni(!0),
    }),
    Ns = (0, a.Tf)(u.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => j.intl.string(j.t["p/Tjtp"]),
        useSubtitle: () => j.intl.string(j.t.YvDmKb),
        useLabel: () => j.intl.string(j.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => Ni(!1),
        usePredicate: () => {
            let e = (0, g.bG)([ir.default], () => ir.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    Nl = (0, a.zZ)(u.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [Ns, Nn] }),
    Nr = (0, a.t_)(u.X.ACCOUNT_PANEL, {
        useTitle: () => j.intl.string(j.t["ldCE/p"]),
        initialize: function () {
            return () => {
                pN.A.clearBackupCodes(), (0, S1.Uo)();
            };
        },
        useObscuredNotice: dn.L,
        buildLayout: () => [pq, fX, fJ, f7, Nl],
    }),
    Na = (0, a.i4)(u.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["ldCE/p"]),
        icon: Az.n,
        buildLayout: () => [Nr],
    });
var No = i(323384);
let Nu = (0, a.zZ)(u.X.AUTHORIZED_APPS_CATEGORY, {
        buildLayout: () => [E8],
        initialize: () => (
            E5.A.fetch(),
            () => {
                E7.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    Nd = (0, a.t_)(u.X.AUTHORIZED_APPS_PANEL, {
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        useObscuredNotice: dn.L,
        buildLayout: () => [Nu],
    }),
    Nc = (0, a.i4)(u.X.AUTHORIZED_APPS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        icon: No.k,
        buildLayout: () => [Nd],
    });
var Ng = i(176781),
    Nm = i(611371);
let NA = () =>
    (0, E.jsx)(ts.m, { asContainer: !0, text: j.intl.string(j.t["/fgfWh"]), children: (0, E.jsx)(Nm.A, {}) });
var Nh = i(274372),
    NE = i(315240),
    NS = i(696016);
let NT = (() => {
        let e = [NS.wN];
        for (let t = 10; t <= NS.qh; t += 10) e.push(t);
        return e[e.length - 1] !== NS.qh && e.push(NS.qh), e;
    })(),
    Nx = (0, a.sN)(u.X.CLIPS_AUTO_CLIP_STORAGE_LIMIT, {
        useTitle: () => j.intl.string(j.t.yfsrDI),
        useSubtitle: () => j.intl.string(j.t.vlDHdC),
        minValue: NS.wN,
        maxValue: NS.qh,
        getInitialValue: () => Nh.A.getSettings().maxAutoClips,
        onValueRender: (e) => `${Math.floor(e)}`,
        asValueChanges: (e) => NE.e6(Math.floor(e)),
        markers: NT,
        onMarkerRender: (e) => `${Math.floor(e)}`,
    }),
    Np = (0, a.zD)(u.X.CLIPS_ENABLE_GAME_SIGNALS, {
        useTitle: () => j.intl.string(j.t.iV6KcI),
        useSubtitle: () => j.intl.string(j.t["dJ2tX+"]),
        useValue: () => (0, g.bG)([Nh.A], () => Nh.A.getSettings().clipSignals.enableGameSignals),
        setValue: (e) => {
            let t = Nh.A.getSettings().clipSignals;
            NE.PW({ ...t, enableGameSignals: e });
        },
    }),
    Nf = (0, a.zZ)(u.X.CLIPS_AUTOMATIC_CLIPPING_CATEGORY, {
        useTitle: () => j.intl.string(j.t.sA0WKL),
        usePredicate: () => {
            let { enableAdvancedSignals: e } = l7.L_.useConfig({ location: "ClipsAutomaticClippingCategory" });
            return e;
        },
        buildLayout: () => [Nx, Np],
    }),
    NN = (0, a.zD)(u.X.CLIPS_DEBUG_TOOLTIPS, {
        useTitle: () => "Show clips debug tooltips",
        useSubtitle: () =>
            "Show overlay tooltips for the clips engine starting, enabled features, auto-clip signals, and save errors. Intended for development and testing.",
        useValue: () => (0, g.bG)([Nh.A], () => Nh.A.getSettings().debugTooltipsEnabled),
        setValue: (e) => NE.YP(e),
    }),
    N_ = (0, a.zZ)(u.X.CLIPS_DEVELOPER_CATEGORY, {
        useTitle: () => "Developer",
        usePredicate: () =>
            (0, g.bG)([ir.default], () => {
                let e = ir.default.getCurrentUser();
                return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
            }),
        buildLayout: () => [NN],
    });
var NI = i(753070);
let NC = (0, a.Hn)(u.X.CLIPS_FRAME_RATE, {
    useTitle: () => j.intl.string(j.t["2wScL1"]),
    useSubtitle: () => j.intl.string(j.t["Rf9+fy"]),
    useValue: () => (0, g.bG)([Nh.A], () => Nh.A.getSettings().clipsQuality.frameRate),
    setValue: (e) => {
        let { clipsQuality: t } = Nh.A.getSettings();
        NE.GS({ resolution: t.resolution, frameRate: e });
    },
    useOptions: () => [
        { id: "15", value: NI.kn.FPS_15, label: j.intl.formatToPlainString(j.t.Qb44XH, { fps: NI.kn.FPS_15 }) },
        { id: "30", value: NI.kn.FPS_30, label: j.intl.formatToPlainString(j.t.Qb44XH, { fps: NI.kn.FPS_30 }) },
        { id: "60", value: NI.kn.FPS_60, label: j.intl.formatToPlainString(j.t.Qb44XH, { fps: NI.kn.FPS_60 }) },
    ],
});
var Nb = i(372684);
let Nv = (0, a.E2)(u.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
    useSearchTerms: () => [j.intl.string(j.t.SIxrIF)],
    usePredicate: () => (0, g.bG)([Nh.A], () => Nh.A.getHardwareClassification()) === Nb.k9.BELOW_MINIMUM,
    Component: () => (0, E.jsx)(sc.A, { look: sc.k.WARNING, children: j.intl.string(j.t.SIxrIF) }),
});
var Ny = i(158278);
let Nj = (0, a.E2)(u.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [j.intl.string(j.t.pf54EU), j.intl.string(j.t["QyB/jK"])],
        Component: () => {
            let e = (0, g.bG)([ew.Ay], () => ew.Ay.getKeybindForAction(eg.hCu.SAVE_CLIP, !0));
            tB()(null != e, "Save clip keybind unset");
            let t = S.useCallback(
                (t) => {
                    tF.A.setKeybind({ ...e, shortcut: t });
                },
                [e],
            );
            return (0, E.jsx)(sV.D, {
                label: j.intl.string(j.t.pf54EU),
                description: j.intl.string(j.t["QyB/jK"]),
                layout: "horizontal",
                children: (0, E.jsx)("div", {
                    className: Ny.g,
                    children: (0, E.jsx)(tz.A, { defaultValue: e.shortcut, onChange: t }),
                }),
            });
        },
    }),
    NO = (0, a.Hn)(u.X.CLIPS_LENGTH, {
        useTitle: () => j.intl.string(j.t.OgfUio),
        useSubtitle: () => j.intl.string(j.t.H7j4tY),
        useValue: () => (0, g.bG)([Nh.A], () => Nh.A.getSettings().clipsLength),
        setValue: (e) => NE.h$(e),
        useOptions: () => [
            { id: "30s", value: NS.LX.SECONDS_30, label: j.intl.formatToPlainString(j.t["bTFv/3"], { count: 30 }) },
            { id: "1m", value: NS.LX.MINUTES_1, label: j.intl.formatToPlainString(j.t.ICo9Nk, { count: 1 }) },
            { id: "2m", value: NS.LX.MINUTES_2, label: j.intl.formatToPlainString(j.t.ICo9Nk, { count: 2 }) },
        ],
    }),
    NR = (0, a.E2)(u.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [j.intl.string(j.t["Z+MfqT"])],
        Component: () => (0, E.jsx)(sc.A, { look: sc.k.INFO, children: j.intl.string(j.t["Z+MfqT"]) }),
    }),
    NL = (0, a.Hn)(u.X.CLIPS_RESOLUTION, {
        useTitle: () => j.intl.string(j.t.aFudZJ),
        useSubtitle: () => j.intl.string(j.t.nIrkW5),
        useValue: () => (0, g.bG)([Nh.A], () => Nh.A.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = Nh.A.getSettings();
            NE.GS({ resolution: e, frameRate: t.frameRate });
        },
        useOptions: () => [
            {
                id: "480p",
                value: NI.on.RESOLUTION_480,
                label: j.intl.formatToPlainString(j.t.TEOC0I, { resolution: NI.on.RESOLUTION_480 }),
            },
            {
                id: "720p",
                value: NI.on.RESOLUTION_720,
                label: j.intl.formatToPlainString(j.t.TEOC0I, { resolution: NI.on.RESOLUTION_720 }),
            },
            {
                id: "1080p",
                value: NI.on.RESOLUTION_1080,
                label: j.intl.formatToPlainString(j.t.TEOC0I, { resolution: NI.on.RESOLUTION_1080 }),
            },
            {
                id: "1440p",
                value: NI.on.RESOLUTION_1440,
                label: j.intl.formatToPlainString(j.t.TEOC0I, { resolution: NI.on.RESOLUTION_1440 }),
            },
            { id: "source", value: NI.on.RESOLUTION_SOURCE, label: j.intl.string(j.t.XjXqzh) },
        ],
    }),
    ND = (0, a.E2)(u.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [j.intl.string(j.t["0U/hj7"]), j.intl.string(j.t["5zxkdo"])],
        usePredicate: l7.BW,
        Component: () => {
            let e = (0, g.bG)([ew.Ay], () => ew.Ay.getKeybindForAction(eg.hCu.SAVE_CLIP, !0)),
                t = (0, g.bG)([ew.Ay], () => ew.Ay.getKeybindForAction(eg.hCu.SAVE_SCREENSHOT, !0));
            tB()(null != e, "Save clip keybind unset"), tB()(null != t, "Save screenshot keybind unset");
            let i = S.useCallback(
                (e) => {
                    tF.A.setKeybind({ ...t, shortcut: e });
                },
                [t],
            );
            return (0, E.jsx)(sV.D, {
                label: j.intl.string(j.t["0U/hj7"]),
                description: j.intl.string(j.t["5zxkdo"]),
                layout: "horizontal",
                children: (0, E.jsx)("div", {
                    className: Ny.g,
                    children: (0, E.jsx)(tz.A, { defaultValue: t.shortcut, onChange: i }),
                }),
            });
        },
    }),
    NP = (0, a.E2)(u.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [j.intl.string(j.t.s4773E), j.intl.string(j.t.svjwGh)],
        Component: () => {
            let e = (0, g.bG)([Nh.A], () => Nh.A.getSettings().storageLocation),
                t = S.useRef(!1),
                i = async () => {
                    if (!t.current) {
                        t.current = !0;
                        try {
                            let e = await lt.A.fileManager.showOpenDialog({
                                properties: ["openDirectory", "createDirectory"],
                            });
                            e.length > 0 && NE.HU(e[0]);
                        } finally {
                            t.current = !1;
                        }
                    }
                };
            return (0, E.jsx)(sV.D, {
                label: j.intl.string(j.t.s4773E),
                description: j.intl.string(j.t.svjwGh),
                layout: "horizontal",
                children: (0, E.jsx)($.D, {
                    "aria-label": j.intl.formatToPlainString(j.t.iMONTj, { storageLocation: e }),
                    onClick: i,
                    children: (0, E.jsx)(lF.k, { tabIndex: -1, value: e, editable: !1, "aria-hidden": !0 }),
                }),
            });
        },
    });
var NG = i(572164);
let NM = (0, a.zD)(u.X.CLIPS_ENABLE, {
    useTitle: () => j.intl.string(j.t.h8rgrK),
    useSubtitle: () => j.intl.string(j.t["4Qw3NO"]),
    useValue: () => (0, NG.Et)(),
    setValue: (e) => NE.yO({ clipsEnabled: e, trackAnalytics: !0 }),
});
var NU = i(915618);
let NV = (0, a.zD)(u.X.CLIPS_ENABLE_DECOUPLED_CLIPPING, {
        useTitle: () => j.intl.string(j.t.yXvykv),
        useSubtitle: () => j.intl.string(j.t.YP3ujk),
        useValue: NG.XT,
        setValue: (e) => NE.fd({ enabled: e, trackAnalytics: !0 }),
        usePredicate: () => {
            let e = (0, ez.isWindows)(),
                t = (0, NU.A)(lM.Ay);
            return e && t;
        },
    }),
    Nk = (0, a.zD)(u.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => j.intl.string(j.t["3zwNf6"]),
        useSubtitle: () => j.intl.string(j.t.m4Cjj9),
        useValue: () => (0, g.bG)([Nh.A], () => Nh.A.getSettings().remindersEnabled),
        setValue: (e) => NE.Mt(e),
    }),
    Nw = (0, a.zZ)(u.X.CLIPS_RECORDING_CATEGORY, {
        useTitle: () => j.intl.string(j.t.iIwmV5),
        buildLayout: () => [NR, Nv, NM, NV, Nk, NO, NL, NC, Nj, ND, NP],
    }),
    NB = (0, a.t_)(u.X.CLIPS_PANEL, {
        useTitle: () => j.intl.string(j.t.z2jK6X),
        usePersistentBadge: () => ({
            badgeType: h.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            useCustomBadge: () => (0, E.jsx)(NA, {}),
        }),
        usePredicate: l7.sw,
        buildLayout: () => [Nw, Nf, N_],
    }),
    NF = (0, a.i4)(u.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.z2jK6X),
        icon: Ng.x,
        buildLayout: () => [NB],
    }),
    Nz = (0, a.zZ)(u.X.CONNECTIONS_ADD_CONNECTIONS_CATEGORY, { buildLayout: () => [SX], useInlineNotice: SZ }),
    NY = (0, a.zZ)(u.X.CONNECTIONS_CONNECTED_ACCOUNTS_CATEGORY, { buildLayout: () => [SH] }),
    NX = (0, a.t_)(u.X.CONNECTIONS_PANEL, {
        useTitle: () => j.intl.string(j.t["3fe7U5"]),
        useObscuredNotice: dn.L,
        buildLayout: () => [Nz, NY],
    }),
    NH = (0, a.i4)(u.X.CONNECTIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["3fe7U5"]),
        icon: h6.q,
        buildLayout: () => [NX],
    });
var NK = i(875444);
function NW(e, t) {
    let i = (0, g.bG)([SC.default], () => SC.default.getFetchState()),
        n = (0, g.bG)([SC.default], () =>
            e ? SC.default.getNewestTokensForNonChildrenApplications() : SC.default.getNewestTokens(),
        ),
        s = S.useMemo(
            () => (null == n ? [] : n.filter((e) => (0, NK.A)(e.application)).map((e) => e.application)),
            [n],
        );
    return (
        S.useEffect(() => {
            t || E5.A.fetch();
        }, [t]),
        { showLoadingIndicator: i !== SC.FetchState.FETCHED && (null == n || 0 === n.length), slayerSdkApplications: s }
    );
}
i(644151);
var NZ = i(464946);
i(750994);
var Nq = i(998382);
function NQ(e) {
    let { applications: t } = e,
        i = S.useMemo(() => t.sort((e, t) => dT.default.compare(t.id, e.id)), [t]),
        n = S.useMemo(() => {
            let e = [];
            for (let t = 0; t < 3; t++) {
                let n = i[t];
                if (null == n) break;
                e.push(n.name);
            }
            let t = e.join(", "),
                n = i.length - 3;
            return n > 0
                ? j.intl.format(j.t.sHFdTg, {
                      gameList: t,
                      plusMoreHook: (e, t) =>
                          (0, E.jsx)(
                              ee.E,
                              {
                                  tag: "span",
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: j.intl.format(j.t["EADv+4"], { count: n }),
                              },
                              t,
                          ),
                  })
                : e.join(", ");
        }, [i]),
        s = S.useMemo(() => {
            let e = [];
            for (let t = 0; t < 3; t++) {
                let n = i[t];
                if (null == n) break;
                let { icon: s, name: l, id: r } = n,
                    a = i9.Ay.getApplicationIconURL({ id: r, icon: s });
                e.push(
                    (0, E.jsx)(
                        ts.m,
                        {
                            __unsupportedReactNodeAsText: l,
                            children: (0, E.jsx)("img", { src: a, "aria-label": l, className: Nq.Kk }),
                        },
                        r,
                    ),
                );
            }
            let t = i.length - 3;
            return (
                t > 0 &&
                    e.push(
                        (0, E.jsx)(
                            "div",
                            {
                                className: Nq.lK,
                                children: (0, E.jsx)(ee.E, {
                                    variant: "text-xs/medium",
                                    color: "text-default",
                                    children: `+${t}`,
                                }),
                            },
                            "omitted",
                        ),
                    ),
                e
            );
        }, [i]);
    return (0, E.jsxs)("div", {
        className: Nq.wx,
        children: [
            (0, E.jsxs)("div", {
                className: Nq.kX,
                children: [
                    (0, E.jsx)(ee.E, { variant: "text-md/normal", color: "text-strong", children: n }),
                    (0, E.jsxs)($.D, {
                        onClick: () => {
                            (0, eY.openUserSettings)(u.X.AUTHORIZED_APPS_PANEL);
                        },
                        className: Nq.bJ,
                        children: [
                            (0, E.jsx)(ee.E, {
                                variant: "text-xs/normal",
                                color: "interactive-text-default",
                                children: j.intl.format(j.t.oYaYOe, {}),
                            }),
                            (0, E.jsx)(ty._, {
                                size: "xxs",
                                color: ei.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                className: Nq.g7,
                            }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)("div", { className: Nq.yF }),
            (0, E.jsx)("div", { className: Nq.lJ, children: s }),
        ],
    });
}
function NJ() {
    return (0, E.jsxs)("div", {
        className: Nq.do,
        children: [
            (0, E.jsx)(ee.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: Nq.xV,
                children: j.intl.string(j.t["+0U77d"]),
            }),
            (0, E.jsx)(ee.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: j.intl.format(j.t.V8wClM, {
                    helpdeskArticle: tp.A.getArticleURL(eg.MVz.SOCIAL_LAYER_CONNECTIONS),
                }),
            }),
        ],
    });
}
function N$(e) {
    let { applications: t } = e;
    return t.length > 0 ? (0, E.jsx)(NQ, { applications: t }) : (0, E.jsx)(NJ, {});
}
let N0 = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES, {
    useSearchTerms: () => [j.intl.string(j.t.YpCiMt)],
    Component: function () {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = NW(!0);
        return e ? (0, E.jsx)(dr.y, {}) : (0, E.jsx)(N$, { applications: t });
    },
});
function N1() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = NW(!0, !0);
    return !e && t.length > 0;
}
let N2 = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => j.intl.string(j.t.XpBObB),
        useSubtitle: () =>
            j.intl.format(j.t.oZsHTD, { helpdeskArticle: tp.A.getArticleURL(eg.MVz.SLAYER_GAME_FRIENDS) }),
        useSearchTerms: () => [j.intl.string(j.t["Uv/eTx"])],
        useValue: () => L.Zk.useSetting(),
        setValue: (e) => L.Zk.updateSetting(e),
        usePredicate: N1,
    }),
    N3 = (0, a.Qx)(u.X.CONTENT_AND_SOCIAL_IN_GAME_DMS_SETTING, {
        useTitle: () => j.intl.string(j.t["ms+Tme"]),
        useSubtitle: () => j.intl.string(j.t["4NN4+/"]),
        useOptions: () => [
            { name: j.intl.string(j.t.JIFnN9), value: F.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
            { name: j.intl.string(j.t.rRdsk1), value: F.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
            { name: j.intl.string(j.t.AolKwN), value: F.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
        ],
        useValue: () => {
            let e = L.TA.useSetting();
            return e === F.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? F.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e;
        },
        setValue: (e) => L.TA.updateSetting(e),
        usePredicate: N1,
    }),
    N6 = (0, a.zZ)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_CATEGORY, {
        useSearchTerms: () => [j.intl.string(j.t.YpCiMt)],
        buildLayout: () => [N0, N2, N3],
    });
var N4 = i(687123),
    N5 = i(444802),
    N7 = i(558001);
i(866945);
var N8 = i(835002);
function N9() {
    let e = (0, N5.WX)();
    S.useEffect(() => {
        (0, N7.N)(N8.YA.AGE_CONFIRMATION_NOTICE, N8.YX.VIEWED);
    }, []);
    let t = S.useCallback(() => {
            window.open(tp.A.getArticleURL(e), "_blank"), (0, N7.N)(N8.YA.AGE_CONFIRMATION_NOTICE, N8.YX.LEARN_MORE);
        }, [e]),
        i = S.useCallback(() => {
            pD.A.showAgeVerificationGetStartedModal({ entryPoint: pP.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, N7.N)(N8.YA.AGE_CONFIRMATION_NOTICE, N8.YX.CONFIRM_AGE);
        }, []);
    return (0, E.jsx)(tx.p, {
        messageType: tx.Y.INFO,
        action: (0, E.jsx)(en.Q, {
            variant: "secondary",
            size: "sm",
            textVariant: "text-sm/medium",
            text: j.intl.string(j.t.FDSSia),
            onClick: i,
        }),
        children: j.intl.format(j.t.mFgsfg, { hook: (e, i) => (0, E.jsx)(uJ.Anchor, { onClick: t, children: e }, i) }),
    });
}
function _e() {
    let e = (0, pv.aX)(N4.t.REACTIVE_CHECK),
        t = (0, pb.b8)();
    return S.useMemo(() => {
        if (e && !t) return { type: h.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: N9 };
    }, [e, t]);
}
var _t = i(308528),
    _i = i(171316);
function _n() {
    let e = (0, _i.uM)(),
        t = (0, f0.vx)(),
        i = S.useCallback(() => {
            (0, sC.default)(),
                _t.A.openPrivateChannel({ recipientIds: t }),
                (0, N7.N)(N8.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, N8.YX.LEARN_MORE);
        }, [t]),
        n = S.useCallback(() => {
            (0, N7.N)(N8.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, N8.YX.VIEWED);
        }, []);
    return S.useMemo(() => {
        if (e)
            return {
                type: h.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: n,
                useText: () =>
                    j.intl.format(f3.default.i284fU, {
                        hook: (e, t) => (0, E.jsx)(uJ.Anchor, { onClick: i, children: e }, t),
                        count: t.length,
                    }),
            };
    }, [i, e, t.length, n]);
}
var _s = i(323073),
    _l = i(386171),
    _r = i(96607);
let _a = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_DM_SETTING, {
        useTitle: () => j.intl.string(j.t.XahVjj),
        useSubtitle: () => j.intl.string(j.t.R9fXyS),
        useValue: _l.hT,
        useDisabled: () => {
            let e = (0, _r.A)() ?? !0,
                t = (0, _s.sP)(),
                i = (0, pb.yM)();
            return (!t || !!i) && !e;
        },
        setValue: (e) => {
            (0, _s.p5)() && e
                ? pD.A.showAgeVerificationGetStartedModal({ entryPoint: pP.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : L.Qe.updateSetting(e);
        },
    }),
    _o = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => j.intl.string(j.t["L+yTsa"]),
        useSubtitle: () => j.intl.string(j.t.hiM8pU),
        useValue: _l.tI,
        useDisabled: () => {
            let e = (0, _r.A)() ?? !0,
                t = (0, _s.sP)(),
                i = (0, pb.yM)();
            return S.useMemo(() => (!t || !!i) && !e, [t, e, i]);
        },
        setValue: (e) => {
            (0, _s.p5)() && e
                ? pD.A.showAgeVerificationGetStartedModal({ entryPoint: pP.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : L.Kg.updateSetting(e);
        },
    });
i(667532);
var _u = i(390248),
    _d = i(632119),
    _c = i(945276),
    _g = i(389737),
    _m = i(566769);
function _A() {
    let e,
        t = (0, _c.A)() ?? !0,
        i = (0, _i.uM)(),
        n = (0, _i.uM)(),
        {
            explicitContentGuilds: s,
            explicitContentFriendDm: l,
            explicitContentNonFriendDm: r,
        } = ((e = (0, uQ.cf)([uA.A], () => uA.A.settings.textAndImages?.explicitContentSettings ?? (0, _d.C$)())),
        {
            explicitContentGuilds: (0, _d.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, _d.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, _d.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        }),
        a = (e) => {
            let t = Object.values(e);
            (0, _u.hK)() && t.includes(F.TO.SHOW)
                ? pD.A.showAgeVerificationGetStartedModal({ entryPoint: pP.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
                : (0, _d.Jz)(e);
        },
        o = [
            { value: F.TO.BLUR, label: j.intl.string(j.t.S49Uad) },
            { value: F.TO.BLOCK, label: j.intl.string(j.t["D/157Y"]) },
        ],
        u = [{ value: F.TO.BLUR, label: j.intl.string(j.t.S49Uad) }],
        d = { value: F.TO.SHOW, label: j.intl.string(j.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: n, tooltipText: i ? j.intl.string(f3.default["6Af/cw"]) : void 0 };
    return (0, E.jsxs)(_g.E, {
        description: j.intl.string(j.t.Wnojv1),
        children: [
            (0, E.jsx)(_m.A, {
                title: j.intl.string(j.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(_m.A, {
                title: j.intl.string(j.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(_m.A, {
                title: j.intl.string(j.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || n,
                tooltipText: i ? j.intl.string(f3.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function _h() {
    let e,
        t = (0, _c.A)() ?? !0,
        i = (0, _i.uM)(),
        n = (0, _i.uM)(),
        {
            goreContentGuilds: s,
            goreContentFriendDm: l,
            goreContentNonFriendDm: r,
        } = ((e = (0, uQ.cf)([uA.A], () => uA.A.settings.textAndImages?.goreContentSettings ?? (0, N5.T4)())),
        {
            goreContentGuilds: (0, N5.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, N5.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, N5.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        }),
        a = (e) => {
            let t = Object.values(e);
            (0, _u.hK)() && t.includes(F.TO.SHOW)
                ? pD.A.showAgeVerificationGetStartedModal({ entryPoint: pP.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
                : (0, N5.qY)(e);
        },
        o = [
            { value: F.TO.BLUR, label: j.intl.string(j.t.S49Uad) },
            { value: F.TO.BLOCK, label: j.intl.string(j.t["D/157Y"]) },
        ],
        u = [{ value: F.TO.BLUR, label: j.intl.string(j.t.S49Uad) }],
        d = { value: F.TO.SHOW, label: j.intl.string(j.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: n, tooltipText: i ? j.intl.string(f3.default["6Af/cw"]) : void 0 };
    return (0, E.jsxs)(_g.E, {
        description: j.intl.string(j.t.XgH9eh),
        children: [
            (0, E.jsx)(_m.A, {
                title: j.intl.string(j.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(_m.A, {
                title: j.intl.string(j.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(_m.A, {
                title: j.intl.string(j.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || n,
                options: u,
                tooltipText: i ? j.intl.string(f3.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var _E = i(875162),
    _S = i(334859);
let _T = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, N5.WX)(),
            t = S.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: j.intl.string(j.t.GYpoAq),
                        component: _A,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: j.intl.string(j.t["16/3Bi"]),
                        component: _h,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, E.jsxs)(NZ.h, {
            children: [
                (0, E.jsx)(NZ._, {
                    header: j.intl.string(j.t["Hj/But"]),
                    description: j.intl.format(j.t.dliU4j, { learnMoreLink: tp.A.getArticleURL(e) }),
                }),
                (0, E.jsx)(_E.A, { tabs: t, orientation: "vertical", tabsClassName: _S.v }),
            ],
        });
    },
    useSearchTerms: () => [
        j.intl.string(j.t["Hj/But"]),
        j.intl.string(j.t["N/oRI+"]),
        j.intl.string(j.t.QVdYsK),
        j.intl.string(j.t["aWD+tu"]),
        j.intl.string(j.t["5mnTa7"]),
        j.intl.string(j.t["K0OWP+"]),
    ],
});
var _x = i(639555),
    _p = i(617641),
    _f = i(546140),
    _N = i(406935),
    __ = i(594061);
let _I = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING, {
    useTitle: () => j.intl.string(j.t.qFsx5q),
    useSubtitle: () => j.intl.format(j.t.lunaRv, { learnMoreLink: tp.A.getArticleURL(eg.MVz.SAFETY_ALERTS) }),
    useValue: _f.L,
    setValue: (e) =>
        __.wc.updateAsync(
            "privacy",
            (t) => {
                t.inappropriateConversationWarnings = _N._t.create({ value: e });
            },
            __.Sb.INFREQUENT_USER_ACTION,
        ),
    usePredicate: function () {
        let e = (0, _p.Lc)({ location: "DMSafetyAlertsSetting" }),
            t = (0, _x.Rv)({ location: "DMSafetyAlertsSetting" }),
            i = (0, _c.A)() ?? !0;
        return e && !i && !t;
    },
});
var _C = i(809505),
    _b = i(923457),
    _v = i(750714);
let _y = (0, a.Qx)(u.X.CONTENT_AND_SOCIAL_DM_SPAM_SETTING, {
        useTitle: () => j.intl.string(j.t.tiCXaH),
        useSubtitle: () => j.intl.format(j.t.RvjRRI, { appealLink: tp.A.getArticleURL(eg.MVz.SAFE_DIRECT_MESSAGING) }),
        useValue: function () {
            let e = L.he.useSetting(),
                t = L.cj.useSetting(),
                i = (0, g.bG)([ir.default], () => ir.default.getCurrentUser()),
                n = (0, pv.yv)(_b.p.SPAM_FILTERS);
            return e !== F.he.DEFAULT_UNSET
                ? e
                : i?.nsfwAllowed === !1 && n
                  ? F.he.FRIENDS_AND_NON_FRIENDS
                  : (_v.xY.get(t) ?? F.he.NON_FRIENDS);
        },
        setValue: (e) => L.he.updateSetting(e),
        useOptions: function () {
            return S.useMemo(() => (0, _C.YS)(), []);
        },
        useSearchTerms: () => [j.intl.string(j.t.JzaP4h), j.intl.string(j.t.H9XOl3), j.intl.string(j.t.k4W40P)],
    }),
    _j = (0, a.zZ)(u.X.CONTENT_AND_SOCIAL_CONTENT_CATEGORY, {
        useTitle: () => j.intl.string(j.t.xVRG4P),
        useInlineNotice: function () {
            let e,
                t,
                i,
                n,
                s,
                l,
                r,
                a,
                o,
                u = _n(),
                d =
                    ((e = (0, f1.Z)()),
                    (t = (0, N5.WX)()),
                    (i = S.useCallback(() => {
                        window.open(tp.A.getArticleURL(t), "_blank"),
                            (0, N7.N)(N8.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, N8.YX.LEARN_MORE);
                    }, [t])),
                    (n = S.useCallback(() => {
                        (0, N7.N)(N8.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, N8.YX.VIEWED);
                    }, [])),
                    S.useMemo(() => {
                        if (e)
                            return {
                                type: h.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: n,
                                useText: () =>
                                    j.intl.format(j.t.EUo0yj, {
                                        hook: (e, t) => (0, E.jsx)(uJ.Anchor, { onClick: i, children: e }, t),
                                    }),
                            };
                    }, [i, e, n])),
                c =
                    ((s = (0, pv.SJ)()),
                    (l = (0, pb.b8)()),
                    (r = s && !l),
                    (a = S.useCallback(() => {
                        pD.A.showAgeVerificationGetStartedModal({ entryPoint: pP.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, N7.N)(N8.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, N8.YX.LEARN_MORE);
                    }, [])),
                    (o = S.useCallback(() => {
                        (0, N7.N)(N8.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, N8.YX.VIEWED);
                    }, [])),
                    S.useMemo(() => {
                        if (r)
                            return {
                                type: h.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: o,
                                useText: () =>
                                    j.intl.format(j.t.OX4ybh, {
                                        hook: (e, t) => (0, E.jsx)(uJ.Anchor, { onClick: a, children: e }, t),
                                    }),
                            };
                    }, [a, r, o])),
                g = _e();
            return u ?? g ?? c ?? d;
        },
        buildLayout: () => [_T, _y, _I, _a, _o],
    });
var _O = i(189883);
let _R = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => j.intl.string(j.t["7x9dyE"]),
    useValue: () => {
        let e = L.FA.useSetting();
        return S.useMemo(() => (0, rR.Lx)(e), [e]).all;
    },
    setValue: (e) => {
        L.FA.updateSetting(e ? eg.yKI : eg.yKI & ~eg.dzt.NO_RELATION);
    },
    useDisabled: () => (0, _i.uM)(),
});
var _L = i(665260);
let _D = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => j.intl.string(j.t.NfeuZ3),
        useValue: () => {
            let e = L.FA.useSetting(),
                t = S.useMemo(() => (0, rR.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: (e) => {
            let t = L.FA.getSetting();
            L.FA.updateSetting(
                e ? _L.UI(t, eg.dzt.MUTUAL_FRIENDS) : _L.iE(t, eg.dzt.MUTUAL_FRIENDS, eg.dzt.NO_RELATION),
            );
        },
        useDisabled: () => (0, _i.uM)(),
    }),
    _P = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => j.intl.string(j.t.qsMfsH),
        useValue: () => {
            let e = L.FA.useSetting(),
                t = S.useMemo(() => (0, rR.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: (e) => {
            let t = L.FA.getSetting();
            L.FA.updateSetting(e ? _L.UI(t, eg.dzt.MUTUAL_GUILDS) : _L.iE(t, eg.dzt.MUTUAL_GUILDS, eg.dzt.NO_RELATION));
        },
        useDisabled: () => (0, _i.uM)(),
    }),
    _G = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => j.intl.string(j.t["jK+wdr"]),
        useSubtitle: () => j.intl.string(j.t["RYh/pW"]),
        useValue: () => !L.Zd.useSetting(),
        setValue: (e) => {
            L.Zd.updateSetting(!e);
        },
        usePredicate: () => _O.A.useConfig({ location: "Friend Request Setting" }).enabled,
        usePersistentBadge: () => ({ badgeType: h.Xi.BETA }),
    }),
    _M = (0, a.zZ)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.MNaVwq),
        useSubtitle: () => {
            let { enabled: e } = _O.A.useConfig({ location: "Friend Request Setting" });
            return e ? j.intl.string(j.t.QVbF3l) : void 0;
        },
        useInlineNotice: _n,
        buildLayout: () => [_R, _D, _P, _G],
    });
var _U = i(994500),
    _V = i(428678),
    _k = i(717398),
    _w = i(730134),
    _B = i(753686);
function _F(e) {
    let { listType: t, numberOfUsers: i } = e,
        n = "blocked" === t;
    return (0, E.jsxs)("div", {
        className: _B.wx,
        children: [
            (0, E.jsx)("div", { className: _B.zc, children: n ? (0, E.jsx)(_V.K, {}) : (0, E.jsx)(ib.G, {}) }),
            (0, E.jsxs)("div", {
                className: _B.Qq,
                children: [
                    (0, E.jsx)(ee.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: j.intl.string(n ? j.t.PFOUKW : j.t["93ZDWE"]),
                    }),
                    (0, E.jsx)(ee.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: n
                            ? j.intl.format(j.t["r91W/h"], { numberOfBlockedUsers: i })
                            : j.intl.format(j.t.rXUeOl, { numberOfIgnoredUsers: i }),
                    }),
                ],
            }),
        ],
    });
}
function _z(e) {
    let { userId: t, last: i } = e,
        n = (0, g.bG)([_U.A], () => _U.A.isBlocked(t)),
        s = (0, g.bG)([ir.default], () => ir.default.getUser(t)),
        [l, r] = S.useState(!1),
        a = S.useCallback(() => {
            r(!0),
                n
                    ? _k.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : _k.A.unignoreUser(t, e$.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      });
        }, [n, t]);
    return null == s
        ? null
        : (0, E.jsxs)("div", {
              className: e2()(_B.nM, { [_B.fW]: i }),
              children: [
                  (0, E.jsxs)("div", {
                      className: _B.eF,
                      children: [
                          (0, E.jsx)(_w.A, { user: s, size: i3._3.SIZE_40 }),
                          (0, E.jsxs)("div", {
                              className: _B.Qq,
                              children: [
                                  (0, E.jsx)(ee.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: s.globalName ?? s.username,
                                  }),
                                  (0, E.jsx)(ee.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: null != s.globalName ? s.username : null,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, E.jsx)(eD.$, {
                      variant: "secondary",
                      text: j.intl.string(n ? j.t.XyHpKH : j.t["8wXU9B"]),
                      onClick: a,
                      loading: l,
                  }),
              ],
          });
}
function _Y(e) {
    let { userIds: t, listType: i } = e,
        [n, s] = S.useState(5);
    return (0, E.jsx)(NZ.h, {
        children: (0, E.jsxs)("div", {
            className: _B.Nr,
            children: [
                (0, E.jsx)(_F, { listType: i, numberOfUsers: t.length }),
                (0, E.jsx)("div", {
                    className: _B.jS,
                    children: t.slice(0, n).map((e, i) => (0, E.jsx)(_z, { userId: e, last: i === t.length - 1 }, e)),
                }),
                n < t.length
                    ? (0, E.jsx)("div", {
                          className: _B.vM,
                          children: (0, E.jsx)($.D, {
                              onClick: () => {
                                  s((e) => e + 5);
                              },
                              className: _B.Qf,
                              children: (0, E.jsx)(ee.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: j.intl.format(j.t.jULEDr, {
                                      numberOfUsers: n + 5 < t.length ? 5 : t.length - n,
                                  }),
                              }),
                          }),
                      })
                    : null,
            ],
        }),
    });
}
let _X = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_BLOCKED_USERS, {
        useSearchTerms: () => [j.intl.string(j.t.PFOUKW)],
        usePredicate: () => (0, g.bG)([_U.A], () => _U.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, g.yK)([_U.A], () => _U.A.getBlockedIDs());
            return (0, E.jsx)(_Y, { userIds: e, listType: "blocked" });
        },
    }),
    _H = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_IGNORED_USERS, {
        useSearchTerms: () => [j.intl.string(j.t["93ZDWE"])],
        usePredicate: () => (0, g.bG)([_U.A], () => _U.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, g.yK)([_U.A], () => _U.A.getIgnoredIDs());
            return (0, E.jsx)(_Y, { userIds: e, listType: "ignored" });
        },
    }),
    _K = (0, a.zZ)(u.X.CONTENT_AND_SOCIAL_RESTRICTED_USERS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.LVwR56),
        useSubtitle: () =>
            j.intl.format(j.t["0aNQo9"], { helpArticle: tp.A.getArticleURL(eg.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [_X, _H],
        usePredicate: () => {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, g.cf)([_U.A], () => ({
                hasBlockedUsers: _U.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: _U.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var _W = i(22385),
    _Z = i(556534),
    _q = i(111159),
    _Q = i(152056),
    _J = i(219714);
let _$ = { label: () => j.intl.string(j.t["32u1Dx"]), value: _W.YG };
var _0 = i(954225);
let _1 = () => (0, _Z.Tx)() !== _W.YG;
function _2() {
    return j.intl.string(j.t["T+nevN"]);
}
let _3 = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_JOIN_SETTING, {
        useTitle: _2,
        useSubtitle: () =>
            j.intl.format(j.t.jXKQCu, { helpdeskArticle: tp.A.getArticleURL(eg.MVz.ACTIVITY_STATUS_SETTINGS) }),
        useValue: () => {
            let e = (0, _Z.Tx)();
            return !L.pE.useSetting().includes(e);
        },
        setValue: (e) => {
            let t = _W.xk.getState().selectedGuildId,
                i = (0, rR.CN)();
            e ? i.delete(t) : i.add(t),
                L.pE.updateSetting([...i]),
                er.default.track(eg.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: _0.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
                    ingress: nU.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                });
        },
        usePredicate: _1,
    }),
    _6 = () => (0, _Z.Tx)() !== _W.YG;
function _4() {
    return j.intl.string(D.default.WhdCGP);
}
let _5 = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_SHARE_SETTING, {
    useTitle: _4,
    useSubtitle: () => j.intl.string(D.default.UQ9RHJ),
    useValue: () => {
        let e = (0, _Z.Tx)();
        return !L.JG.useSetting().includes(e);
    },
    setValue: (e) => {
        let t = _W.xk.getState().selectedGuildId,
            i = (0, rR.Kk)();
        e ? i.delete(t) : i.add(t),
            L.JG.updateSetting([...i]),
            er.default.track(eg.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: _0.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
                ingress: nU.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    },
    usePredicate: _6,
});
var _7 = i(307863),
    _8 = i(428031),
    _9 = i(972737);
let Ie = () => ((0, _7.e)() ? j.intl.string(j.t.PMsfcH) : j.intl.string(j.t.RAQUSN)),
    It = (e, t) => {
        er.default.track(eg.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t,
        });
    },
    Ii = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: Ie,
        useSubtitle: () => {
            let e = (0, _Z.Tx)(),
                t = (0, _Z.q9)(),
                i = (0, _7.e)();
            return e === _W.YG
                ? i
                    ? j.intl.string(j.t.XXGmuB)
                    : j.intl.string(j.t.wbYDfT)
                : t
                  ? j.intl.string(j.t.V0ka0Q)
                  : i
                    ? j.intl.string(j.t.F9WY3f)
                    : j.intl.string(j.t.G7c3Xo);
        },
        useValue: () => {
            let e = (0, _Z.Tx)(),
                t = L.$s.useSetting().includes(e),
                i = (0, _8.K)();
            return e === _W.YG ? !i : !t;
        },
        useDisabled: () => {
            let e = (0, _i.uM)();
            return (0, _Z.Tx)() === _W.YG && e;
        },
        setValue: (e) => {
            let t = _W.xk.getState().selectedGuildId;
            if (t === _W.YG) {
                var i;
                (i = !e),
                    (0, _9.O)({
                        header: j.intl.string(j.t["uUr+GR"]),
                        body: j.intl.string(j.t.hjGJBp),
                        confirmText: j.intl.string(j.t.gm1Vej),
                        cancelText: j.intl.string(j.t.p89ACt),
                        confirmButtonColor: aZ.$n.Colors.BRAND,
                        onConfirm: () => {
                            L.n6.updateSetting(i), It(i, !1);
                        },
                        onCancel: () => {
                            L.n6.updateSetting(i), L.$s.updateSetting(i ? eo.A.getGuildIds() : []), It(i, !0);
                        },
                    });
            } else {
                let i = (0, rR.Tb)();
                e ? i.delete(t) : i.add(t),
                    L.$s.updateSetting(Array.from(i)),
                    er.default.track(eg.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: _0.m.DIRECT_MESSAGES_TOGGLE,
                        ingress: nU.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    });
            }
        },
    });
var In = i(953298);
let Is = (e, t) => {
    er.default.track(eg.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
};
function Il() {
    return j.intl.string(j.t["3o2ojh"]);
}
let Ir = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: Il,
        useSubtitle: () =>
            (0, _Z.q9)()
                ? j.intl.format(j.t.WpnWLc, { helpdeskArticle: tp.A.getArticleURL(eg.MVz.MESSAGE_REQUESTS) })
                : j.intl.format(j.t.wkm9a3, { helpdeskArticle: tp.A.getArticleURL(eg.MVz.MESSAGE_REQUESTS) }),
        useValue: () => {
            let e = (0, _Z.Tx)(),
                t = (0, _8.K)(),
                i = L.$s.useSetting().includes(e),
                n = L.YX.useSetting(),
                s = L.Zr.useSetting().includes(e);
            return e === _W.YG ? !t && !n : !i && !s;
        },
        useDisabled: () => {
            let e = (0, _Z.Tx)(),
                t = (0, _i.uM)(),
                i = (0, _8.K)(),
                n = L.$s.useSetting().includes(e);
            return e === _W.YG ? i || t : n;
        },
        setValue: (e) => {
            let t = _W.xk.getState().selectedGuildId;
            if (!e && (0, In.w)())
                return void pD.A.showAgeVerificationGetStartedModal({ entryPoint: pP.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === _W.YG) {
                var i;
                (i = !e),
                    (0, _9.O)({
                        header: j.intl.string(j.t.yAfu1p),
                        body: j.intl.string(j.t.Ry2z74),
                        confirmText: j.intl.string(j.t.gm1Vej),
                        cancelText: j.intl.string(j.t.p89ACt),
                        confirmButtonColor: aZ.$n.Colors.BRAND,
                        onConfirm: () => {
                            L.YX.updateSetting(i), Is(i, !1);
                        },
                        onCancel: () => {
                            L.YX.updateSetting(i), L.Zr.updateSetting(i ? eo.A.getGuildIds() : []), Is(i, !0);
                        },
                    });
            } else {
                let i = (0, rR.xo)();
                e ? i.delete(t) : i.add(t),
                    L.Zr.updateSetting(Array.from(i)),
                    er.default.track(eg.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: _0.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: nU.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    });
            }
        },
    }),
    Ia = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            let e = [Ie(), Il()],
                t = _4();
            _6() && e.push(t);
            let i = _2();
            return _1() && e.push(i), e;
        },
        Component: function () {
            let { selectedGuildId: e, setSelectedGuildId: t } = (0, _W.xk)(),
                i = (0, g.bG)([eu.Ay], () => eu.Ay.getFlattenedGuildIds()),
                n = (0, g.bG)([eo.A], () => eo.A.getGuilds()),
                s = i[0];
            S.useEffect(
                () =>
                    _Q.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, i) => {
                            let n = _W.xk.getState().selectedGuildId;
                            "" === i && "" !== e && n === _W.YG && null != s
                                ? t(s)
                                : "" === e && n !== _W.YG && t(_W.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [s, t],
            );
            let l = S.useMemo(() => {
                let e = [];
                return (
                    e.push({
                        ..._$,
                        id: _$.value,
                        label: _$.label(),
                        leading: (0, E.jsx)("div", {
                            className: _J.KP,
                            children: (0, E.jsx)(_q.p, {
                                size: "sm",
                                color: "white",
                                "aria-hidden": !0,
                                className: _J.cl,
                            }),
                        }),
                    }),
                    i.forEach((t) => {
                        let i = n[t];
                        null != i &&
                            e.push({
                                id: i.id,
                                label: i.name,
                                value: i.id,
                                leading: (0, E.jsx)(gK.Ay, {
                                    className: _J.cl,
                                    guild: i,
                                    size: gK.Ay.Sizes.SMALLER,
                                    active: !0,
                                }),
                            });
                    }),
                    e
                );
            }, [i, n]);
            return (0, E.jsx)(iF.Z, {
                selectionMode: "single",
                onSelectionChange: (e) => {
                    t(e);
                },
                value: e,
                options: l,
            });
        },
    }),
    Io = (0, a.zZ)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.eYaT7L),
        useInlineNotice: function () {
            let e = _n(),
                t = _e();
            if ((0, _Z.Tx)() === _W.YG) return e ?? t;
        },
        buildLayout: () => [Ia, Ii, Ir, _5, _3],
    }),
    Iu = (0, a.dT)(u.X.CONTENT_AND_SOCIAL_MAIN_TAB, {
        getTitle: () => j.intl.string(j.t["/7xJCF"]),
        buildLayout: () => [_j, Io, _M, _K],
    }),
    Id = (0, a.dT)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB, {
        initialize: () => {
            E5.A.fetch();
        },
        getTitle: () => j.intl.string(j.t.YpCiMt),
        buildLayout: () => [N6],
    }),
    Ic = (0, a.t_)(u.X.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => j.intl.string(j.t["+o1pDZ"]),
        buildLayout: () => [Iu, Id],
    }),
    Ig = (0, a.i4)(u.X.CONTENT_AND_SOCIAL_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["+o1pDZ"]),
        icon: gd.i,
        buildLayout: () => [Ic],
    });
var Im = i(254138);
function IA() {
    return (
        ss.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" }),
        sn.Bo.get({ url: eg.Rsh.USER_HARVEST, oldFormErrors: !0, rejectWithError: !1 })
            .then((e) => {
                ss.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body });
            })
            .catch((e) => {
                ss.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error: e });
            })
    );
}
function Ih(e) {
    return (0, S1.$I)(e).then(
        (e) => (
            null != e && null != e.body && ss.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body }), e
        ),
    );
}
var IE = i(157559),
    IS = i(331887);
function IT() {
    let e = (0, g.bG)([ir.default], () => ir.default.getCurrentUser()),
        t = (0, g.bG)([IS.A], () => IS.A.harvestType),
        [i, n] = S.useState(() => Date.now()),
        s = null == t ? i : new Date(t.created_at).getTime() + 2592e6,
        l = S.useRef(null);
    return (S.useEffect(() => {
        let e = s - Date.now();
        if (e > 0) {
            let t = setTimeout(() => n(Date.now()), e);
            clearTimeout(l.current), (l.current = t);
        }
        return () => clearTimeout(l.current);
    }, [s]),
    e?.verified)
        ? e.isStaff()
            ? { allowed: !1, reason: "staff" }
            : null == t
              ? { allowed: !0 }
              : s > i
                ? { allowed: !1, reason: "rate_limited", nextAllowed: new Date(s) }
                : { allowed: !0 }
        : { allowed: !1, reason: "not_verified" };
}
function Ix(e) {
    let { onConfirm: t, ...n } = e;
    (0, z.openModalLazy)(async () => {
        let { default: e } = await i.e("92063").then(i.bind(i, 970018));
        return (i) => (0, E.jsx)(e, { modalProps: i, onConfirm: t });
    }, n);
}
var Ip = i(160427);
let If = (0, a.E2)(u.X.DATA_HARVEST_REQUEST_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.dmBSKo)],
        Component: function () {
            let e = (0, g.bG)([ir.default], () => ir.default.getCurrentUser()),
                { currentHarvestType: t, awaitingInitialRequest: i } = (0, g.cf)([IS.A], () => ({
                    currentHarvestType: IS.A.harvestType,
                    awaitingInitialRequest: IS.A.requestingHarvest,
                })),
                [n, s] = S.useState(!1);
            if (null == e) return null;
            let l =
                    !!(!e.verified || e.isStaff()) ||
                    (null != t && 2592e6 > Date.now() - new Date(t.created_at).getTime()) ||
                    i,
                r = null != t && rV()().diff(rV()(t.created_at), "days") < eg.n83,
                a = l && r,
                o = e.isStaff(),
                u = !e.verified;
            return (0, E.jsxs)(NZ.h, {
                children: [
                    (0, E.jsx)(NZ._, {
                        header: j.intl.string(j.t.XAHCgJ),
                        description: j.intl.format(j.t.P3kNfr, {
                            helpdeskArticle: tp.A.getArticleURL(eg.MVz.GDPR_REQUEST_DATA),
                        }),
                    }),
                    a
                        ? (0, E.jsx)(eI.Z, {
                              className: Ip.N,
                              children: (0, E.jsx)(ee.E, {
                                  variant: "text-md/normal",
                                  children: j.intl.format(j.t.RNDlV9, {
                                      date: rV()(t.created_at).add(eg.n83, "days").format("MMMM Do YYYY"),
                                  }),
                              }),
                          })
                        : o
                          ? (0, E.jsx)(eI.Z, {
                                className: Ip.N,
                                children: (0, E.jsx)(ee.E, {
                                    variant: "text-md/normal",
                                    children: j.intl.string(j.t.ZPQLH2),
                                }),
                            })
                          : (0, E.jsxs)(E.Fragment, {
                                children: [
                                    u
                                        ? (0, E.jsx)(eI.Z, {
                                              className: Ip.N,
                                              children: (0, E.jsx)(ee.E, {
                                                  variant: "text-md/normal",
                                                  children: j.intl.string(j.t.c1f88z),
                                              }),
                                          })
                                        : null,
                                    (0, E.jsx)("div", {
                                        className: Ip.x,
                                        children: (0, E.jsx)(eD.$, {
                                            variant: "primary",
                                            text: j.intl.string(j.t.dmBSKo),
                                            disabled: l,
                                            onClick: () => {
                                                Ix({
                                                    onConfirm: (e) => {
                                                        s(!0),
                                                            Ih(e)
                                                                .then(
                                                                    (e) => {
                                                                        null != e && null != e.body
                                                                            ? IE.A.show({
                                                                                  title: j.intl.string(j.t.i2iul5),
                                                                                  body: j.intl.string(j.t["6Nmv4i"]),
                                                                              })
                                                                            : IE.A.show({
                                                                                  title: j.intl.string(j.t.OjbtDm),
                                                                                  body: j.intl.string(j.t["0F5Jyt"]),
                                                                              });
                                                                    },
                                                                    (e) => {
                                                                        let t =
                                                                            e?.message ||
                                                                            e?.body?.message ||
                                                                            j.intl.string(j.t["0F5Jyt"]);
                                                                        IE.A.show({
                                                                            title: j.intl.string(j.t.OjbtDm),
                                                                            body: t,
                                                                        });
                                                                    },
                                                                )
                                                                .finally(() => s(!1));
                                                    },
                                                });
                                            },
                                            loading: n || i,
                                        }),
                                    }),
                                ],
                            }),
                ],
            });
        },
    }),
    IN = (0, a.zZ)(u.X.DATA_REQUEST_CATEGORY, {
        useTitle: () => j.intl.string(j.t.VjDjpb),
        initialize: () => {
            IA();
        },
        buildLayout: () => [If],
    });
var I_ = i(290595),
    II = i(153488);
let IC = (0, a.zD)(u.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
        useTitle: () => j.intl.string(j.t.AGDDkH),
        useSubtitle: () =>
            (0, o.ri)("ClipsAllowVoiceRecording") ? j.intl.string(j.t.kyo3dJ) : j.intl.string(j.t["wW9/zQ"]),
        useValue: () => L.Q$.useSetting(),
        setValue: (e) => NE.eQ({ allowVoiceRecording: e }),
    }),
    Ib = (0, a.Tf)(u.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => j.intl.string(j.t.qfFFos),
        useSubtitle: function () {
            let e = IT();
            if (e.allowed) return j.intl.format(j.t.NRI6vt, { article: tp.A.getArticleURL(eg.MVz.GDPR_REQUEST_DATA) });
            if ("staff" === e.reason) return j.intl.string(j.t.hIbRso);
            if ("not_verified" === e.reason)
                return j.intl.format(j.t.rBqJDq, {
                    settingsLink: (e, t) =>
                        (0, E.jsx)(
                            $.D,
                            {
                                tag: "a",
                                onClick: () => (0, eY.openUserSettings)(u.X.ACCOUNT_INFO_EMAIL_SETTING),
                                children: e,
                            },
                            t,
                        ),
                });
            if ("rate_limited" === e.reason) {
                let t = rV()(e.nextAllowed).format("MMMM Do YYYY");
                return j.intl.format(j.t["VLMG1+"], { date: t });
            }
        },
        initialize: () => {
            IA();
        },
        useDisabled: () => !IT().allowed,
        useLoading: () => (0, g.bG)([IS.A], () => IS.A.requestingHarvest),
        useVariant: () => "secondary",
        useLabel: () => j.intl.string(j.t.dmBSKo),
        onClick: function () {
            return new Promise((e) => {
                let t = !0;
                Ix({
                    onConfirm: (i) => {
                        (t = !1),
                            Ih(i)
                                .then(
                                    (e) => {
                                        null != e && null != e.body
                                            ? IE.A.show({
                                                  title: j.intl.string(j.t.i2iul5),
                                                  body: j.intl.string(j.t["6Nmv4i"]),
                                              })
                                            : IE.A.show({
                                                  title: j.intl.string(j.t.OjbtDm),
                                                  body: j.intl.string(j.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || j.intl.string(j.t["0F5Jyt"]);
                                        IE.A.show({ title: j.intl.string(j.t.OjbtDm), body: t });
                                    },
                                )
                                .finally(e);
                    },
                    onCloseCallback: () => {
                        t && e();
                    },
                });
            });
        },
    }),
    Iv = (0, a.v_)(u.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => j.intl.string(j.t.D60Gfj),
        useSubtitle: () =>
            (0, o.ri)("DataUsageDisclaimer")
                ? j.intl.format(j.t.dszICC, {
                      onClickDisable: () => (0, eY.openUserSettings)(u.X.ACCOUNT_DISABLE_SETTING),
                      onClickDelete: () => (0, eY.openUserSettings)(u.X.ACCOUNT_DELETE_SETTING),
                  })
                : j.intl.format(j.t.R5N31P, { onClick: () => (0, eY.openUserSettings)(u.X.ACCOUNT_REMOVAL_CATEGORY) }),
    }),
    Iy = (0, a.zD)(u.X.DATA_USAGE_PERSONALIZATION_SETTING, {
        useTitle: () => j.intl.string(j.t.MNKzyg),
        useSubtitle: () => {
            let e = (0, o.ri)("DataUsagePersonalization");
            return j.intl.format(e ? j.t["2SiYln"] : j.t["eQL/Mr"], {
                helpdeskArticle: tp.A.getArticleURL(eg.MVz.DATA_USED_FOR_RECOMMENDED),
            });
        },
        useValue: function () {
            return (0, g.bG)([II.A], () => II.A.hasConsented(eg.YAq.PERSONALIZATION));
        },
        setValue: function (e) {
            e
                ? (0, I_.U)([eg.YAq.PERSONALIZATION], []).catch(_9.i)
                : (0, _9.O)({
                      header: j.intl.string(j.t["9SNpzv"]),
                      confirmText: j.intl.string(j.t["9g5UGw"]),
                      cancelText: j.intl.string(j.t["+ZLPw9"]),
                      onConfirm: () => {
                          (0, I_.U)([], [eg.YAq.PERSONALIZATION]).catch(_9.i);
                      },
                      body: j.intl.string(j.t.gJvDDh),
                  });
        },
        useDisabled: _i.uM,
    }),
    Ij = (0, a.zD)(u.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => j.intl.string(j.t.CyLYKZ),
        useSubtitle: () => {
            let e = (0, o.ri)("DataUsageQuests3P");
            return j.intl.format(e ? j.t["md5l4/"] : j.t["2QFDU/"], {
                helpdeskArticle: tp.A.getArticleURL(eg.MVz.QUESTS_PRIVACY_CONTROLS),
            });
        },
        useValue: function () {
            return !L.vf.useSetting();
        },
        setValue: function (e) {
            L.vf.updateSetting(!e);
        },
        useDisabled: function () {
            let e = L.H1.useSetting(),
                t = (0, _i.uM)();
            return e || t;
        },
        useSearchTerms: () => [j.intl.string(j.t.CyLYKZ)],
    }),
    IO = (0, a.zD)(u.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => j.intl.string(j.t.sJYh5t),
        useSubtitle: () =>
            (0, o.ri)("DataUsageQuests")
                ? j.intl.string(j.t.w4fvxe)
                : j.intl.format(j.t.cf9mvV, { helpdeskArticle: tp.A.getArticleURL(eg.MVz.QUESTS_PRIVACY_CONTROLS) }),
        useValue: function () {
            return !L.H1.useSetting();
        },
        setValue: function (e) {
            L.H1.updateSetting(!e);
        },
        useSearchTerms: () => [j.intl.string(j.t.VkS7Yd)],
        useDisabled: _i.uM,
    }),
    IR = (0, a.AK)(u.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
        destinationKey: u.X.REGISTERED_GAMES_PANEL,
        useSubtitle: function () {
            let { names: e, totalCount: t } = v(2);
            return j.intl.format(j.t.GaTAYM, { count: t, nameCount: e.length, game1: e[0], game2: e[1] });
        },
        useTrailingDecoration: () => ({ type: h.wF.STACKED_ICONS, useIcons: y }),
        usePredicate: () => (0, g.bG)([m.Ay], () => m.Ay.getGamesSeen(!1).some((e) => !(0, A.n1)(e))) && (0, c.xl)(),
    }),
    IL = (0, a.gN)(u.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [IR] }),
    ID = (0, a.zD)(u.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => j.intl.string(j.t.XuADY2),
        useSubtitle: () => {
            let e = (0, o.ri)("DataUsageStatistics");
            return j.intl.format(e ? j.t.FNqmmX : j.t["igTSG/"], {
                helpdeskArticle: tp.A.getArticleURL(eg.MVz.DATA_PRIVACY_CONTROLS),
            });
        },
        useValue: function () {
            return (0, g.bG)([II.A], () => II.A.hasConsented(eg.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, I_.U)([eg.YAq.USAGE_STATISTICS], []).catch(_9.i)
                : (0, _9.O)({
                      header: j.intl.string(j.t.OdPCbN),
                      body: j.intl.string(j.t.MGWabA),
                      confirmText: j.intl.string(j.t["D3+rU4"]),
                      cancelText: j.intl.string(j.t.kYpG0u),
                      onConfirm: () => (0, I_.U)([], [eg.YAq.USAGE_STATISTICS]).catch(_9.i),
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t.XuADY2)],
        useDisabled: _i.uM,
    }),
    IP = (0, a.zZ)(u.X.DATA_USAGE_CATEGORY, {
        useTitle: () => ((0, o.ri)("DataUsageCategory") ? j.intl.string(j.t.QDAriI) : j.intl.string(j.t.bvw42E)),
        useInlineNotice: _n,
        initialize: () => {
            II.A.fetchedConsents || (0, I_.Q)();
        },
        buildLayout: () =>
            (0, o.SB)("DataUsageCategory") ? [Iv, ID, Iy, IO, Ij, IC, Ib, IL] : [ID, IO, Ij, Iy, IC, Iv],
    });
function IG() {
    let e = L.JG.useSetting();
    return (0, g.yK)([eu.Ay, eo.A], () => {
        let t = new Set(e);
        return eu.Ay.getFlattenedGuildIds().filter((e) => null != eo.A.getGuild(e) && !t.has(e));
    }, [e]);
}
let IM = {
        type: h.wF.STACKED_ICONS,
        useIcons: function () {
            let e = IG(),
                t = (0, g.yK)(
                    [eo.A],
                    () =>
                        e
                            .slice(0, 2)
                            .map((e) => eo.A.getGuild(e))
                            .filter((e) => null != e),
                    [e],
                );
            return 0 === t.length
                ? null
                : t.length >= 2
                  ? {
                        frontIcon: { icon: (0, E.jsx)(ea.$, { guild: t[0], size: f.CD }), shape: f.e0.SQUIRCLE },
                        backIcon: { icon: (0, E.jsx)(ea.$, { guild: t[1], size: f.CD }), shape: f.e0.SQUIRCLE },
                    }
                  : { frontIcon: { icon: (0, E.jsx)(ea.$, { guild: t[0], size: f.CD }), shape: f.e0.SQUIRCLE } };
        },
    },
    IU = (0, a.AK)(u.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = IG();
            if (0 === e.length) return j.intl.format(j.t.QJIJ5p, {});
            let t = eo.A.getGuild(e[0]),
                i = t?.name ?? "",
                n = e.length - 1;
            return 0 === n
                ? j.intl.format(j.t["T+8J4A"], { guildName: i })
                : j.intl.format(j.t["3JyODQ"], { guildName: i, count: n });
        },
        useTrailingDecoration: function () {
            return IM;
        },
        destinationKey: u.X.ACTIVITY_PRIVACY_PANEL,
    }),
    IV = (0, a.gN)(u.X.PROFILE_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [IU] }),
    Ik = (0, a.Qx)(u.X.PROFILE_PRIVACY_SETTING, {
        useTitle: () => j.intl.string(j.t.Qnf32C),
        useOptions: () => [
            { name: j.intl.string(j.t.Boxc8R), desc: j.intl.string(j.t["nLj+nc"]), value: F.KP.FRIENDS_AND_ALL_GUILDS },
            { name: j.intl.string(j.t.YOIKBt), desc: j.intl.string(j.t.y0JZ4s), value: F.KP.FRIENDS_AND_SMALL_GUILDS },
            { name: j.intl.string(j.t.u0nlJv), desc: j.intl.string(j.t["4jnKHu"]), value: F.KP.FRIENDS_ONLY },
        ],
        useValue: L.KP.useSetting,
        setValue: function (e) {
            let t = L.KP.getSetting();
            if ((L.KP.updateSetting(e), !(0, U.W1)("ProfilePrivacySetting"))) return;
            let n = (0, Y.gS)(t, e);
            null != n &&
                (0, z.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        i.e("92164"),
                        i.e("62493"),
                        i.e("62041"),
                        i.e("63786"),
                    ]).then(i.bind(i, 413201));
                    return (t) =>
                        (0, E.jsx)(e, {
                            ...t,
                            direction: n.direction,
                            affectedGuildIds: n.affectedGuildIds,
                            settingName: n.settingName,
                            mappedActivityValue: n.mappedActivityValue,
                        });
                });
        },
        useSearchTerms: () => [j.intl.string(j.t.Qnf32C)],
    }),
    Iw = (0, a.zZ)(u.X.PROFILE_PRIVACY_CATEGORY, {
        usePredicate: () => (0, U.lX)("ProfilePrivacyCategory"),
        useTitle: () => j.intl.string(j.t.ul884f),
        useSubtitle: () => j.intl.string(j.t.J0SFL2),
        buildLayout: () => [Ik, IV],
    });
var IB = i(814278),
    IF = i(936388),
    Iz = i(714763);
let IY = (0, a.zD)(u.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => j.intl.string(j.t["opi/XK"]),
    useSubtitle: () => j.intl.format(j.t["/T+ZlP"], { helpArticle: (0, IB.Lu)() }),
    useValue: function () {
        return (0, g.bG)([Iz.A], () => Iz.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        IF.A.updatePersistentCodesEnabled(e);
    },
});
var IX = i(787392);
function IH() {
    return (0, g.yK)([IX.A], () => IX.A.getUserIds());
}
var IK = i(803306),
    IW = i(966327),
    IZ = i(146003);
function Iq(e) {
    let { userId: t, count: i } = e,
        { analyticsLocations: n } = (0, nH.Ay)(),
        s = (0, g.bG)([ir.default], () => ir.default.getUser(t)),
        l = T5.Ay.getFormattedName(s),
        r = S.useCallback(() => {
            (0, IB.kj)(t);
        }, [t]),
        a = S.useCallback(() => (0, S5.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: n }), [t, n]);
    return (
        S.useEffect(() => {
            (0, IK.wz)(t);
        }, [t]),
        (0, E.jsxs)("div", {
            className: IZ.uW,
            children: [
                null != s && (0, E.jsx)(IW.A, { className: IZ.my, user: s, size: i3._3.SIZE_40 }),
                (0, E.jsxs)("div", {
                    className: IZ.Qq,
                    children: [
                        (0, E.jsx)($.D, {
                            className: IZ.Xh,
                            onClick: a,
                            children: (0, E.jsx)(ee.E, {
                                variant: "text-md/semibold",
                                color: "interactive-text-active",
                                children: l,
                            }),
                        }),
                        (0, E.jsx)(ee.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: j.intl.format(j.t["/MBjYF"], { count: i }),
                        }),
                    ],
                }),
                (0, E.jsx)($.D, { onClick: r, className: IZ.Qz, children: (0, E.jsx)(lO.u, { size: "xs" }) }),
            ],
        })
    );
}
function IQ(e) {
    let { className: t, userId: i, verification: n, index: s } = e,
        l = (0, IB.tC)(n.timestamp),
        r = S.useCallback(() => {
            (0, IB.W0)(i, n.verifiedKey);
        }, [n.verifiedKey, i]);
    return (0, E.jsxs)("div", {
        className: t,
        children: [
            (0, E.jsxs)("div", {
                className: IZ.Qq,
                children: [
                    (0, E.jsx)(ee.E, {
                        variant: "text-sm/semibold",
                        color: "interactive-text-active",
                        children: j.intl.format(j.t.N4qBBO, { index: s + 1 }),
                    }),
                    (0, E.jsx)(ee.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                ],
            }),
            (0, E.jsx)($.D, {
                className: IZ.Kk,
                onClick: r,
                children: (0, E.jsx)(gN.P, { size: "md", color: ei.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function IJ(e) {
    let { userId: t } = e,
        i = (0, g.yK)([IX.A], () =>
            eK()(IX.A.getUserVerifiedKeys(t))
                .entries()
                .map((e) => {
                    let [t, i] = e;
                    return { verifiedKey: t, timestamp: i };
                })
                .sortBy((e) => -1 * e.timestamp)
                .value(),
        );
    return (0, E.jsxs)(E.Fragment, {
        children: [
            (0, E.jsx)(Iq, { userId: t, count: i.length }),
            i.map((e, n) =>
                (0, E.jsxs)(
                    S.Fragment,
                    {
                        children: [
                            (0, E.jsx)(IQ, { className: IZ.nM, userId: t, index: n, verification: e }),
                            n !== i.length - 1 && (0, E.jsx)("div", { className: IZ.yF }),
                        ],
                    },
                    `${n}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var I$ = i(623161);
let I0 = (0, a.E2)(u.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["5b3FNI"])],
        usePredicate: function () {
            let e = IH();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = IH();
            return (0, E.jsxs)(NZ.h, {
                children: [
                    (0, E.jsx)(NZ._, {
                        header: j.intl.string(j.t["5b3FNI"]),
                        description: j.intl.format(j.t.jrTSWU, { helpArticle: (0, IB.dc)() }),
                    }),
                    e.map((e) => (0, E.jsx)("div", { className: I$.A, children: (0, E.jsx)(IJ, { userId: e }) }, e)),
                ],
            });
        },
    }),
    I1 = (0, a.zZ)(u.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => ((0, o.ri)("VoiceSecurityCategory") ? j.intl.string(j.t.bTwjaz) : j.intl.string(j.t.xVk85F)),
        useInlineNotice: function () {
            let e = (0, o.ri)("VoiceSecurityCategory");
            return S.useMemo(
                () =>
                    e
                        ? null
                        : {
                              type: h.lT.INLINE_NOTICE,
                              noticeType: "info",
                              useText: () => j.intl.format(j.t["/6sFWa"], { helpArticle: (0, IB.aW)() }),
                          },
                [e],
            );
        },
        usePredicate: () => (0, ez.isDesktop)(),
        buildLayout: () => [IY, I0],
    }),
    I2 = (0, a.t_)(u.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => j.intl.string(j.t.OAuOHD),
        buildLayout: () => ((0, o.SB)("DataAndPrivacyPanel") ? [IP, Iw, I1] : [IP, Iw, IN, I1]),
    }),
    I3 = (0, a.i4)(u.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.OAuOHD),
        icon: Im.m,
        buildLayout: () => [I2],
    });
var I6 = i(782603),
    I4 = i(899847),
    I5 = i(695515),
    I7 = i(936926);
let I8 = (0, a.Hn)(u.X.MOBILE_NOTIFICATION_DELAY, {
        useTitle: () => j.intl.string(j.t["8rHeOr"]),
        useSubtitle: () => j.intl.string(j.t["eJE6+J"]),
        useValue: L.cU.useSetting,
        setValue: L.cU.updateSetting,
        useOptions: () =>
            eH
                .range(1, 11)
                .map((e) => ({
                    id: e.toString(),
                    value: 60 * e,
                    label: j.intl.formatToPlainString(j.t.iXLF9W, { minutes: e }),
                })),
    }),
    I9 = (0, a.zD)(u.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => j.intl.string(j.t["btbS+Z"]),
        useSubtitle: () =>
            j.intl.format(j.t.Q5crhR, { onClick: () => (0, eY.openUserSettings)(u.X.TTS_PLAYBACK_RATE) }),
        useValue: L.on.useSetting,
        setValue: L.on.updateSetting,
    }),
    Ce = (0, a.Qx)(u.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.JZxxGx),
        useSubtitle: () => j.intl.string(j.t.HDLtJl),
        useValue: () => (0, g.bG)([uI.A], () => uI.A.getTTSType()),
        setValue: (e) => uj.default.setTTSType(e),
        useOptions: () => [
            { name: j.intl.string(j.t.B1AGeJ), value: eg.aVn.ALL_CHANNELS },
            { name: j.intl.string(j.t.uzZg9e), value: eg.aVn.SELECTED_CHANNEL },
            { name: j.intl.string(j.t.DYO5Oi), value: eg.aVn.NEVER },
        ],
        usePredicate: () => na.$j,
    }),
    Ct = u.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    Ci = (0, a.bd)(Ct, {
        useTitle: (e) => (e ? j.intl.string(j.t.RyimDk) : j.intl.string(j.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return oT(Ct, {
                formatter: (e) => {
                    let { title: t, index: i } = e;
                    return "string" != typeof t
                        ? t
                        : 0 === i
                          ? `${t.charAt(0).toLocaleUpperCase()}${t.slice(1).toLocaleLowerCase()}`
                          : t.toLocaleLowerCase();
                },
            });
        },
        buildLayout: () => [I8, I9, Ce],
    }),
    Cn = (0, a.zZ)(u.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => j.intl.string(j.t["31DySj"]),
        buildLayout: () => [Ci],
    }),
    Cs = (0, a.zD)(u.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => j.intl.string(j.t.VH8AIJ),
        useSubtitle: () => j.intl.string(j.t["9K4qwX"]),
        useValue: () => (0, g.bG)([uI.A], () => !uI.A.getDisableUnreadBadge()),
        setValue: (e) => uj.default.setDisableUnreadBadge(!e),
    }),
    Cl = (0, a.zZ)(u.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.l6w3Vj),
        buildLayout: () => [Cs],
    });
var Cr = i(840559),
    Ca = i(997187),
    Co = i(723923);
let Cu = Co.px.map((e) =>
        (0, a.zD)(`${u.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                ((e) => {
                    let { categories: t } = (0, g.cf)([Ca.A], () => Ca.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, Cr.CA)(e.category, t),
        }),
    ),
    Cd = (0, a.Tf)(u.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => j.intl.string(j.t.Ra9Pwk),
        useSubtitle: () => j.intl.string(j.t.iYjQ8X),
        useLabel: () => j.intl.string(j.t.KT1pBA),
        useDisabled: () => {
            let { categories: e } = (0, g.cf)([Ca.A], () => Ca.A.getEmailSettings());
            return Co.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, Cr.NI)(),
        useVariant: () => "critical-secondary",
    }),
    Cc = (0, a.zZ)(u.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => j.intl.string(j.t["w/qqKK"]),
        initialize: function () {
            let { initialized: e } = Ca.A.getEmailSettings();
            e || (0, Cr.cR)();
        },
        buildLayout: () => [...Cu, Cd],
    }),
    Cg = (0, a.zD)(u.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t["/0WCll"]),
        useSubtitle: () => j.intl.string(j.t.wF9ih3),
        useValue: () => (0, g.bG)([uI.A], () => uI.A.getDesktopType()) !== eg.nRU.NEVER,
        setValue: (e) => uj.default.setDesktopType(e ? eg.nRU.ALL : eg.nRU.NEVER),
    });
var Cm = i(832712),
    CA = i(543465),
    Ch = i(406535),
    CE = i(790782);
let CS = (0, a.zD)(u.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => j.intl.string(j.t["k6m/si"]),
    useSubtitle: () => j.intl.string(j.t.LGynPs),
    useValue: () => (0, g.bG)([CA.Ay], () => CA.Ay.useNewNotifications),
    setValue: function (e) {
        Cm.A.setAccountFlag(Ch.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (Ec.w.set("turnedOffNewNotifications", !0),
                er.default.track(eg.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: eo.A.getGuildsArray().filter(
                        (e) => CA.Ay.resolveGuildUnreadSetting(e) === CE.e.ONLY_MENTIONS,
                    ).length,
                }));
    },
    usePredicate: () =>
        (0, g.bG)(
            [ir.default, CA.Ay],
            () =>
                ir.default.getCurrentUser()?.isStaff() ||
                ir.default.getCurrentUser()?.isStaffPersonal() ||
                CA.Ay.useNewNotifications,
        ),
});
var CT = i(534654);
let Cx = (0, a.zD)(u.X.SCREEN_DOWNTIME_REMINDER, {
        useTitle: () => j.intl.string(j.t.z9h8Ym),
        useSubtitle: () => j.intl.string(j.t.TummoQ),
        useValue: () => (0, g.bG)([uI.A], () => uI.A.screenDowntimeReminder),
        setValue: (e) => uj.default.setScreenDowntimeReminder(e),
        usePredicate: () => {
            let e = (0, I7.Vh)({ location: "ScreenDowntimeReminderSetting" }),
                t = (0, CT.A)(),
                i = (0, f0.Du)();
            return e && t && i;
        },
    }),
    Cp = (0, a.zD)(u.X.SCREEN_DOWNTIME_SCHEDULE, {
        useTitle: () => j.intl.string(j.t.onrAy7),
        useSubtitle: () => j.intl.string(j.t["/071J7"]),
        useValue: L.gY.useSetting,
        setValue: (e) => L.gY.updateSetting(e),
        usePredicate: () => {
            let e = (0, I7.Vh)({ location: "ScreenDowntimeScheduleSetting" }),
                t = (0, CT.A)(),
                i = (0, f0.Du)();
            return e && t && i;
        },
    });
var Cf = i(70730);
let CN = (0, a.zD)(u.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.NjOMvh),
        usePersistentBadge: () => ({ badgeType: h.Xi.BETA }),
        useValue: L.oz.useSetting,
        setValue: function (e) {
            L.oz.updateSetting(e),
                er.default.track(eg.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ch.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                });
        },
        useSearchTerms: () => [j.intl.string(j.t.hi4dSk)],
        usePredicate: () => {
            let { enabled: e, showDmPrompts: t } = Cf.u.getConfig({ location: "FriendAnniversaryNotifications" });
            return e && t;
        },
    }),
    C_ = (0, M.mj)({
        kind: "user",
        name: "2026-03-friend-is-online-v3",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    CI = (0, a.zD)(u.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.sQQgFj),
        useValue: L.NR.useSetting,
        setValue: function (e) {
            L.NR.updateSetting(e),
                er.default.track(eg.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ch.Y.ACCOUNT,
                    friend_online_notifications: e,
                });
        },
        usePredicate: () => C_.useConfig({ location: "FriendOnlineNotifications" }).showSettingsToggle,
    }),
    CC = (0, M.mj)({
        name: "2026-03-game-update-notification",
        kind: "user",
        defaultConfig: { showToggle: !1 },
        variations: { 0: { showToggle: !1 }, 1: { showToggle: !0 } },
    });
var Cb = i(275007);
let Cv = (0, a.zD)(u.X.GAME_UPDATE_NOTIFICATIONS, {
    useTitle: () => j.intl.string(Cb.default["ZZIP+o"]),
    useValue: L.JV.useSetting,
    setValue: function (e) {
        L.JV.updateSetting(e),
            er.default.track(eg.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: Ch.Y.ACCOUNT,
                game_update_notifications: e,
            });
    },
    usePredicate: () => CC.useConfig({ location: "SettingsRendererConfig" }).showToggle,
});
var Cy = i(571524);
let Cj = (0, a.zD)(u.X.GDM_ALL_REACTION_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.nvkXtr),
        useValue: L.c3.useSetting,
        setValue: function (e) {
            L.c3.updateSetting(e),
                er.default.track(eg.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ch.Y.ACCOUNT,
                    gdm_all_reaction_notifications: e,
                });
        },
        usePredicate: function () {
            return (0, Cy.h)("GdmAllReactionNotification").showSettingsToggle;
        },
    }),
    CO = (0, a.zD)(u.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.FSNIvs),
        useValue: L.Yh.useSetting,
        setValue: function (e) {
            L.Yh.updateSetting(e),
                er.default.track(eg.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ch.Y.ACCOUNT,
                    go_live_notifications: e,
                });
        },
    }),
    CR = (0, M.mj)({
        kind: "user",
        name: "2026-01-profile-updates-notification",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 0: { showSettingsToggle: !1 }, 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    CL = (0, a.zD)(u.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.xBLMhQ),
        useValue: L.T3.useSetting,
        setValue: function (e) {
            L.T3.updateSetting(e),
                er.default.track(eg.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ch.Y.ACCOUNT,
                    profile_updates_notifications: e,
                });
        },
        usePredicate: () => CR.useConfig({ location: "user_settings.ProfileUpdatesNotifications" }).showSettingsToggle,
    });
var CD = i(815807);
let CP = (0, a.Hn)(u.X.REACTION_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: j.intl.string(j.t["9x/RtT"]), value: F.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: j.intl.string(j.t.fJAbQd), value: F.Tz.ONLY_DMS },
            { id: "disabled", label: j.intl.string(j.t["xu+UDU"]), value: F.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: L.Zp.useSetting,
        setValue: (e) => (0, CD.n4)(e, L.Zp.getSetting()),
    }),
    CG = (0, a.zD)(u.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t["k51K1+"]),
        useValue: L.Qr.useSetting,
        setValue: function (e) {
            L.Qr.updateSetting(e),
                er.default.track(eg.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ch.Y.ACCOUNT,
                    server_trending_notifications: e,
                });
        },
        usePredicate: () => !1,
    }),
    CM = (0, M.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    CU = (0, a.zD)(u.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.G8NPz6),
        useValue: L.zS.useSetting,
        setValue: function (e) {
            L.zS.updateSetting(e),
                er.default.track(eg.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ch.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                });
        },
        usePredicate: () => CM.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    CV = (0, a.FW)(u.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.FEVRDV),
        buildLayout: () => [CO, CN, CI, CG, CU, Cv, CL, CP, Cj],
    }),
    Ck = (0, a.zD)(u.X.TASK_BAR_FLASHING, {
        useTitle: () => j.intl.string(j.t.xSmFQG),
        useSubtitle: () => j.intl.string(j.t.bd4j4x),
        useValue: () => (0, g.bG)([uI.A], () => uI.A.taskbarFlash),
        setValue: (e) => uj.default.setTaskbarFlash(e),
        usePredicate: () => (0, c.uF)(),
    }),
    Cw = (0, a.zZ)(u.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => j.intl.string(j.t["/dp6yY"]),
        buildLayout: () => [Cg, Ck, CV, CS, Cp, Cx],
    });
var CB = i(965957),
    CF = i(312671),
    Cz = i(235079);
let CY = (0, a.zD)(u.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = uC.A.useHolidaySoundpack();
        return null == e ? "" : j.intl.format(j.t["E/OyBr"], { soundpack: j.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, g.bG)([CF.A], () => CF.A.getSoundpack()),
            t = uC.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = uC.A.getHolidaySoundpack();
        tB()(null != t, "predicate should fail if no soundpack is available"), (0, CB.p)(e ? t : Cz.i.CLASSIC);
    },
    usePredicate: uC.A.useIsEligible,
});
var CX = i(970931);
let CH = {
        useTitle: () => j.intl.string(j.t.jD1qzM),
        sound: "message1",
        useDisabled: CX.kB,
        useDisabledMessage: () => ((0, CX.kB)() ? j.intl.string(j.t.cIRG0s) : void 0),
    },
    CK = { useTitle: () => j.intl.string(j.t.XBrJT6), sound: "call_ringing" },
    CW = (0, a.zD)(u.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.TzjwV9),
        useSubtitle: () => j.intl.format(j.t.OOiGCM, { onClick: () => uL("message3") }),
        useValue: () =>
            (0, g.bG)([uI.A], () => uI.A.getNotifyMessagesInSelectedChannel() && !uI.A.getDisableAllSounds()),
        setValue: (e) => uj.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, g.bG)([uI.A], () => uI.A.getDisableAllSounds()),
    }),
    CZ = (0, a.zD)(u.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => j.intl.string(j.t["2ZhCOd"]),
        useSubtitle: () => j.intl.string(j.t.EAKdPr),
        useValue: () => (0, g.bG)([uI.A], () => uI.A.getDisableAllSounds()),
        setValue: (e) => uj.default.toggleDisableAllSounds(e),
    }),
    Cq = (0, a.D1)(u.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                uR();
            };
        },
        buildLayout: () => [uD(CH), CW, uD(CK), CZ],
    }),
    CQ = (0, a.AK)(u.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t["MMy+lm"]),
        useSearchTerms: () => [j.intl.string(j.t["MMy+lm"])],
        destinationKey: u.X.SOUNDS_CATEGORY,
    }),
    CJ = (0, a.gN)(u.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [CQ] }),
    C$ = (0, a.zZ)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.LweOYy),
        buildLayout: () => [CY, Cq, CJ],
    }),
    C0 = (0, a.t_)(u.X.NOTIFICATIONS_PANEL, {
        useTitle: () => j.intl.string(j.t.HcoRu0),
        initialize: () => {
            !(0, I7.Eq)({ location: "NotificationsPanel" }) ||
                null != I5.A.getAgeGroup() ||
                I5.A.isLoading() ||
                (I5.A.canRefetch() && I4.Ay.initialPageLoad());
        },
        buildLayout: () => [Cw, C$, Cl, Cc, Cn],
    }),
    C1 = (0, a.i4)(u.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.HcoRu0),
        icon: I6.X,
        buildLayout: () => [C0],
    }),
    C2 = (0, a.WI)(u.X.USER_SECTION, {
        buildLayout: () => {
            let e = (0, o.Bv)("UserSection");
            return [Na, Ig, I3, ...(e ? [] : [Nc]), ...(e ? [] : [NH]), C1, NF];
        },
    });
var C3 = i(387758),
    C6 = i(271866),
    C4 = i(147964),
    C5 = i(868511);
let C7 = (0, a.zD)(u.X.APPLICATION_TEST_MODE, {
        useTitle: () => j.intl.string(j.t.erOqlh),
        useSubtitle: () => j.intl.string(j.t["52hMnD"]),
        usePredicate: L.Q_.useSetting,
        useValue: () => (0, g.bG)([C4.A], () => null != C4.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, z.openModal)((e) => (0, E.jsx)(C5.A, { ...e })) : C6.cL();
        },
    }),
    C8 = (0, a.zD)(u.X.DEVELOPER_MODE, {
        useTitle: () => j.intl.string(j.t.ObIb1Q),
        useSubtitle: () => j.intl.format(j.t["CY6q/Q"], { apiDocsUrl: eg.X7G.API_DOCS }),
        useValue: L.Q_.useSetting,
        setValue: L.Q_.updateSetting,
        usePredicate: () => cR.p5,
    }),
    C9 = (0, a.zZ)(u.X.DEVELOPER_CATEGORY, { buildLayout: () => [C8, C7] }),
    be = (0, a.t_)(u.X.DEVELOPER_PANEL, { useTitle: () => j.intl.string(j.t["0BRxRp"]), buildLayout: () => [C9] }),
    bt = (0, a.i4)(u.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: C3.G,
        useTitle: () => j.intl.string(j.t["0BRxRp"]),
        buildLayout: () => [be],
    });
var bi = i(70688),
    bn = i(830215);
let bs = (0, a.i4)(u.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => j.intl.string(j.t["2jxGer"]),
        icon: bi.o,
        onClick: () => {
            (0, su.A)({
                title: j.intl.string(j.t["2jxGer"]),
                subtitle: j.intl.string(j.t.SUnWBB),
                confirmText: j.intl.string(j.t["2jxGer"]),
                onConfirm: () => {
                    bn.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    bl = (0, a.WI)(u.X.UTILITY_SECTION, { buildLayout: () => [bt, bs] }),
    br = (0, a.Hr)({
        buildLayout: function () {
            return [pf, C2, hF, dt, (0, o.Bv)("UserSettingsRoot_buildLayout") ? S0 : i$, E4, bl];
        },
        analyticsKey: "user_settings",
    });
