i.d(t, { D: () => bO });
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
});
var G = i(802185);
let M = (0, a.zD)(u.X.ACTIVITY_PRIVACY_NOTIFY_FRIENDS_ONLINE_SETTING, {
        useTitle: () => j.intl.string(D.default.A0FVCV),
        useSubtitle: () => j.intl.string(D.default.vHX6RG),
        useValue: L.hV.useSetting,
        setValue: L.hV.updateSetting,
        usePredicate: () => G.A.useConfig({ location: "NotifyFriendsOnComeOnlineSetting" }).enabled,
    }),
    U = (0, a.zZ)(u.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () =>
            (0, o.SV)("ActivitySharingCategory") ? j.intl.string(j.t.WmsPis) : j.intl.string(j.t["6x5uWQ"]),
        useSearchTerms: () => [j.intl.string(j.t["8ka8li"])],
        buildLayout: () => [P, M, R],
    });
var V = i(945810),
    k = i(21973);
let w = (0, V.mj)({
        name: "2026-02-activity-privacy-matching",
        kind: "user",
        defaultConfig: { copyChanges: !1, upsell: !1 },
        variations: {
            0: { copyChanges: !1, upsell: !1 },
            1: { copyChanges: !0, upsell: !1 },
            2: { copyChanges: !0, upsell: !0 },
        },
    }),
    F = (e) => {
        let t = (0, k.lX)(e),
            i = w.useConfig({ location: e });
        return t || i.copyChanges;
    },
    B = (0, a.AK)(u.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.J0SFL2),
        destinationKey: u.X.DATA_AND_PRIVACY_PANEL,
    }),
    z = (0, a.gN)(u.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, k.lX)("ActivityPrivacyRelatedSettings"),
        buildLayout: () => [B],
    });
var X = i(873298),
    Y = i(192308),
    H = i(365258);
let K = (0, a.Qx)(u.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
    useTitle: () =>
        F("GuildActivitySharingDefaultSetting") ? j.intl.string(j.t.vpgck1) : j.intl.string(D.default["/LHVbt"]),
    useOptions: function () {
        let e = F("GuildActivitySharingDefaultSetting");
        return S.useMemo(
            () =>
                e
                    ? [
                          {
                              value: X.Qd.ACTIVITY_STATUS_OFF,
                              name: j.intl.string(j.t.FzgQna),
                              desc: j.intl.string(j.t.SQxoyc),
                          },
                          {
                              value: X.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                              name: j.intl.string(j.t["1hvuGH"]),
                              desc: j.intl.string(j.t.odUCPE),
                          },
                          { value: X.Qd.ACTIVITY_STATUS_ON, name: j.intl.string(j.t.fQc5la) },
                      ]
                    : [
                          { value: X.Qd.ACTIVITY_STATUS_ON, name: j.intl.string(j.t.UzGMH9) },
                          { value: X.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: j.intl.string(D.default["/sAeRY"]) },
                          { value: X.Qd.ACTIVITY_STATUS_OFF, name: j.intl.string(D.default.m3oL7Q) },
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
            !(0, k.W1)(t) && !w.getConfig({ location: t }).upsell)
        )
            return;
        let s = (0, H.g8)(n, e);
        if (null == s) return;
        let l = (0, H.Xc)(e);
        (0, Y.openModalLazy)(async () => {
            let { default: e } = await Promise.all([i.e("92164"), i.e("62493"), i.e("62041"), i.e("41996")]).then(
                i.bind(i, 32167),
            );
            return (t) =>
                (0, E.jsx)(e, { ...t, direction: s.direction, affectedGuildIds: s.affectedGuildIds, settingName: l });
        });
    },
});
var W = i(683071),
    Z = i(331322),
    q = i(243721),
    Q = i(892547),
    J = i(922016),
    $ = i(980707),
    ee = i(477782),
    et = i(939249),
    ei = i(834730),
    en = i(847374),
    es = i(661531),
    el = i(123292),
    er = i(140735),
    ea = i(498642),
    eo = i(174459),
    eu = i(743790),
    ed = i(71393),
    ec = i(711014),
    eg =
        (((n = {}).SERVER_ORDER = "server-order"),
        (n.RECENTLY_JOINED = "recently-joined"),
        (n.ACTIVITY_SHARING_ON = "activity-sharing-on"),
        (n.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
        n);
let em = {
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
var eA = i(652215),
    eh = i(842449);
function eE(e) {
    let { guild: t, isActivityRestricted: i, onToggleActivityRestrictedGuild: n } = e,
        s = (0, g.bG)([ea.A], () => ea.A.getMemberCount(t.id));
    return (0, E.jsxs)(Z.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, E.jsx)("div", { className: eh.FO, children: (0, E.jsx)(eu.K, { guild: t, size: 48 }) }),
            (0, E.jsx)("div", {
                className: eh.QH,
                children: (0, E.jsx)(q.d, {
                    label: t.name,
                    description: j.intl.format(j.t.zRl6XR, { count: s ?? 0 }),
                    checked: !i,
                    onChange: (e) => n({ checked: e, guildId: t.id }),
                }),
            }),
        ],
    });
}
let eS = function (e) {
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
                s = (0, g.bG)([ec.Ay], () => ec.Ay.getFlattenedGuildIds()),
                l = (0, g.bG)([ed.A], () => ed.A.getGuilds()),
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
                [m, A] = (0, S.useState)(() => em[i](r, a)),
                h = m.map((e) => l[e.id]).filter(Boolean);
            return {
                guilds: "" === e ? h : h.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
                sortOrder: i,
                searchQuery: e,
                setSortOrder: (e) => {
                    A(em[e](r, a)), n(e);
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
                { id: eg.SERVER_ORDER, label: j.intl.string(j.t.STMPJ2), value: eg.SERVER_ORDER },
                { id: eg.RECENTLY_JOINED, label: j.intl.string(j.t.CbaapP), value: eg.RECENTLY_JOINED },
                { id: eg.ACTIVITY_SHARING_ON, label: j.intl.string(D.default.ZI51JZ), value: eg.ACTIVITY_SHARING_ON },
                {
                    id: eg.ACTIVITY_SHARING_OFF,
                    label: j.intl.string(D.default["+kxafn"]),
                    value: eg.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        x = T.find((e) => e.value === l)?.label ?? "";
    return (0, E.jsxs)("div", {
        className: eh.iE,
        children: [
            t,
            (0, E.jsxs)("div", {
                className: eh.N1,
                children: [
                    (0, E.jsx)(Q.I, {
                        query: n,
                        onChange: s,
                        onClear: () => {
                            eo.default.track(eA.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_cleared",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: m,
                            }),
                                s("");
                        },
                        onFocus: () =>
                            eo.default.track(eA.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_focused",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: m,
                            }),
                        onBlur: () =>
                            eo.default.track(eA.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
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
                            className: eh.gO,
                            children: [
                                (0, E.jsx)(J.Y, {
                                    targetElementRef: h,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, E.jsx)($.W, {
                                            navId: "guild-sort-order-menu",
                                            onClose: t,
                                            "aria-label": j.intl.string(j.t.LxVjvJ),
                                            onSelect: t,
                                            children: (0, E.jsx)(ee.rX, {
                                                children: T.map((e) => {
                                                    let { id: t, label: i, value: n } = e;
                                                    return (0, E.jsx)(
                                                        ee.iD,
                                                        {
                                                            id: t,
                                                            group: "sort-order",
                                                            label: i,
                                                            checked: l === n,
                                                            action: () => {
                                                                eo.default.track(
                                                                    eA.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED,
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
                                        (0, E.jsxs)(et.D, {
                                            ...e,
                                            innerRef: h,
                                            className: eh.Ku,
                                            children: [
                                                (0, E.jsx)(ei.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: x,
                                                }),
                                                (0, E.jsx)(en.a, { size: "xs", color: es.A.colors.TEXT_SUBTLE }),
                                            ],
                                        }),
                                }),
                                (0, E.jsx)(el.Q, {
                                    variant: "primary",
                                    textVariant: "text-sm/medium",
                                    onClick: o,
                                    text: a ? j.intl.string(j.t["7lxcLO"]) : j.intl.string(j.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, E.jsx)(er.A, {
                "aria-live": "polite",
                role: "region",
                children: j.intl.format(D.default.EvzDff, { count: i.length }),
            }),
            (0, E.jsxs)("ul", {
                className: eh.X1,
                id: A,
                "aria-label": j.intl.string(j.t["7hB4kg"]),
                children: [
                    0 === i.length &&
                        (0, E.jsx)("div", {
                            className: eh.pb,
                            children: (0, E.jsx)(ei.E, {
                                className: eh.R$,
                                variant: "text-lg/medium",
                                children: j.intl.string(j.t["Xe+fJM"]),
                            }),
                        }),
                    i.map((e) =>
                        (0, E.jsx)(
                            eE,
                            { guild: e, isActivityRestricted: d(e.id), onToggleActivityRestrictedGuild: u },
                            e.id,
                        ),
                    ),
                ],
            }),
        ],
    });
};
var eT = i(366189);
let ex = (0, a.E2)(u.X.ACTIVITY_PRIVACY_PER_GUILD_SETTING, {
        useSearchTerms: () => [j.intl.string(D.default["/LHVbt"])],
        Component: function () {
            let e = L.tz.useSetting()
                ? null
                : (0, E.jsx)("div", {
                      className: eT.l,
                      children: (0, E.jsx)(W.w, { type: "warning", children: j.intl.string(D.default["xxI0/W"]) }),
                  });
            return (0, E.jsx)(eS, { notice: e });
        },
    }),
    ep = (0, a.zZ)(u.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () => {
            let e = (0, o.SV)("GuildActivitySharingCategory"),
                t = F("GuildActivitySharingCategory");
            return e
                ? j.intl.string(j.t["ymulT+"])
                : t
                  ? j.intl.string(j.t.VDcvrR)
                  : j.intl.string(D.default["1PougL"]);
        },
        useSubtitle: () => {
            let e = F("GuildActivitySharingCategory");
            return (0, o.SV)("GuildActivitySharingCategory")
                ? null
                : e
                  ? j.intl.string(j.t["/Go08F"])
                  : j.intl.string(D.default.OO17Lg);
        },
        buildLayout: () => ((0, o.Bv)("GuildActivitySharingCategory") ? [K, ex, z] : [K]),
    }),
    ef = (0, a.zZ)(u.X.ACTIVITY_PRIVACY_MY_SERVERS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.TqdOvC),
        useSubtitle: () => (F("MyServersCategory") ? j.intl.string(D.default.OO17Lg) : null),
        buildLayout: () => [ex, z],
    }),
    eN = (0, a.zD)(u.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => j.intl.string(D.default.khuuzv),
        useSubtitle: () => j.intl.string(D.default["8EWsJ8"]),
        useValue: () => L.e.useSetting(),
        setValue: (e) => L.e.updateSetting(e),
    }),
    e_ = (0, a.E2)(u.X.ACTIVITY_PRIVACY_GAME_JOINING_BLURB, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, E.jsx)(ei.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: j.intl.format(j.t.Mf0720, {
                    privacySettingsHook: (e, t) =>
                        (0, E.jsx)(
                            ei.E,
                            { tag: "span", variant: "text-sm/semibold", color: "text-muted", children: e },
                            t,
                        ),
                }),
            });
        },
        usePredicate: () => (0, o.SV)("GameJoiningBlurb"),
    }),
    eI = (0, a.zD)(u.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => j.intl.string(D.default.Uz5Ipi),
        useSubtitle: () => j.intl.string(D.default.CZI2Gb),
        useValue: () => L.UM.useSetting(),
        setValue: (e) => L.UM.updateSetting(e),
    }),
    eC = (0, a.zZ)(u.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => j.intl.string(D.default["89YBr5"]),
        useSubtitle: () => ((0, o.SV)("GameJoiningCategory") ? j.intl.string(j.t.uGDpgH) : null),
        buildLayout: () => [eN, eI, e_],
        useSearchTerms: () => [j.intl.string(j.t.VOszPA)],
    });
var eb = i(359778),
    ev = i(208963);
let ey = (0, a.E2)(u.X.ACTIVITY_PRIVACY_TERMS, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, E.jsx)(eb.Z, {
                type: eb.Z.Types.PRIMARY,
                className: ev.A,
                children: (0, E.jsx)(ei.E, {
                    variant: "text-sm/normal",
                    children: j.intl.format(j.t.xvCsx4, { termsLink: eA.X7G.TERMS, privacyLink: eA.X7G.PRIVACY }),
                }),
            });
        },
    }),
    ej = (0, a.zZ)(u.X.ACTIVITY_PRIVACY_TERMS_CATEGORY, {
        buildLayout: () => [ey],
        usePredicate: () => !(0, o.SV)("TermsCategory"),
    }),
    eO = (0, a.t_)(u.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => j.intl.string(j.t.Cq98yL),
        buildLayout: () => ((0, o.Bv)("ActivityPrivacyPanel") ? [U, ep, eC] : [U, ep, ef, eC, ej]),
    }),
    eR = (0, a.i4)(u.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.Cq98yL),
        icon: d._,
        buildLayout: () => [eO],
    });
var eL = i(935399),
    eD = i(625657),
    eP = i(534514),
    eG = i(821609),
    eM = i(404778),
    eU = i(554146),
    eV = i(131607),
    ek = i(589051),
    ew = i(592598),
    eF = i(351906),
    eB = i(532624),
    ez = i(773371),
    eX = i(184809),
    eY = i(723702),
    eH = i(766075),
    eK = i(999834),
    eW = i(735438),
    eZ = i.n(eW),
    eq = i(350535),
    eQ = i(672396);
let eJ = e0(null);
function e$() {
    var e;
    let t = e0(eJ);
    (e = eJ),
        eZ().isEqual(eZ().omit(t, "old_enabled"), eZ().omit(e, "old_enabled")) ||
            (eo.default.track(eA.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (eJ = t));
}
function e0(e) {
    let t = eX.default.getNotificationPositionMode(),
        i = t !== eA.G6Q.DISABLED,
        n = eB.Ay.getOverlayKeybind(),
        s = eB.Ay.getOverlayChatKeybind();
    return {
        enabled: ez.default.enabled,
        notifications_enabled: i,
        notifications_position: i ? t : null,
        text_notifications_mode: ew.A.isNotificationDisabled(eQ.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != n ? (0, eq.dI)(n.shortcut) : null,
        text_activation_hotkey: null != s ? (0, eq.dI)(s.shortcut) : null,
        text_opacity_slider: eX.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? ez.default.enabled,
    };
}
var e1 = i(793574),
    e2 = i(237984),
    e3 = i(503698),
    e6 = i.n(e3),
    e4 = i(890856),
    e7 = i(389128);
let e8 = (e) => {
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
        className: e6()(e7.HS, d),
        children: [
            (0, E.jsxs)(e4.s, {
                "aria-label": u,
                onClick: o,
                children: [
                    null != t && (0, E.jsx)("div", { className: e7.x_, children: t }),
                    (0, E.jsxs)("div", {
                        className: e7.rN,
                        children: [
                            null != i && (0, E.jsx)("div", { className: e7.$t, children: i }),
                            (0, E.jsxs)("div", {
                                className: e7.c8,
                                children: [
                                    (0, E.jsx)(ei.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: e7.SZ,
                                        children: n,
                                    }),
                                    null != s &&
                                        (0, E.jsx)(ei.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: s,
                                        }),
                                    null != r &&
                                        (0, E.jsx)(ei.E, {
                                            variant: "text-xxs/medium",
                                            color: "text-muted",
                                            children: r,
                                        }),
                                ],
                            }),
                            (0, E.jsx)("div", { className: e7.a$, children: l }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)("div", { className: e7.Om, children: a }),
        ],
    });
}
let e9 = (0, a.E2)(u.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, E.jsx)(e5, {
            title: j.intl.string(j.t["z4/l+V"]),
            description: j.intl.string(j.t["3aZq/0"]),
            action: (0, E.jsx)(eG.$, {
                variant: "primary",
                text: j.intl.string(j.t.s2nVhG),
                onClick: () => {
                    (0, e2.b)(e1.A.USER_SETTINGS, eA.BRT.APP);
                },
            }),
            "aria-label": j.intl.string(j.t["z4/l+V"]),
        });
    },
    useSearchTerms: () => [j.intl.string(j.t["z4/l+V"])],
});
var te = i(812729),
    tt = i.n(te),
    ti = i(429913),
    tn = i(616356);
function ts(e, t) {
    return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0;
}
function tl() {
    let e = (0, g.bG)([tn.A], () => tn.A.getStreamerActiveStreamMetadata()),
        t = (0, g.bG)(
            [m.Ay],
            () => {
                let e = m.Ay.getVisibleGame();
                return null != e ? m.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
            },
            [],
            tt(),
        ),
        [i] = (0, ti.A)([ts(e, t)]);
    return { runningGame: t ?? void 0, runningGameApplication: i ?? void 0 };
}
var tr = i(990078),
    ta = i(478016),
    to = i(31300),
    tu = i(780907),
    td = i(684013),
    tc = i(56562),
    tg = i(964486),
    tm = i(814925),
    tA = i(810412),
    th = i(41984),
    tE = i(296027),
    tS = i(562519);
let tT = 5 * i(927813).A.Millis.DAY,
    tx = new tS.A("overlay_survey_timestamps");
function tp(e, t) {
    let n, s;
    (n = Date.now()),
        (null != (s = Array.from(tx.values()).reduce((e, t) => Math.max(e, t), 0)) && n - s < tT) ||
            Array.from(tx.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, Y.openModalLazy)(async () => {
                let n,
                    { default: s } = await Promise.all([i.e("76982"), i.e("82318")]).then(i.bind(i, 387101));
                return (n = Date.now()), tx.add(n), (i) => (0, E.jsx)(s, { ...i, clientSettingType: e, gameId: t });
            });
}
var tf = i(512950),
    tN = i(975571),
    t_ = i(935671);
function tI() {
    (0, t_.sL)("overlay-settings");
}
function tC(e) {
    let { className: t, game: i } = e;
    return (0, t_.NP)() && null != i && i.elevated
        ? (0, E.jsx)("div", {
              className: t,
              children: (0, E.jsx)(tf.p, {
                  messageType: tf.Y.WARNING,
                  action: (0, E.jsx)(eG.$, {
                      variant: "secondary",
                      size: "sm",
                      text: j.intl.string(j.t["1iI46O"]),
                      onClick: tI,
                  }),
                  children: j.intl.format(j.t["LJzl+0"], { helpCenterLink: tN.A.getArticleURL(eA.MVz.SYSTEM_SERVICE) }),
              }),
          })
        : null;
}
var tb = i(760751),
    tv = i(189081),
    ty = i(9302),
    tj = i(311678),
    tO = i(320448);
let tR = new Set([
    th.AR.INITIALIZING,
    th.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
    th.AR.WAITING_FOR_MODULE_TRACKING,
    th.AR.WAITING_FOR_OVERLAY_OPEN,
    th.AR.WAITING_FOR_POPOUT_OPEN,
    th.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
    th.AR.WAITING_FOR_REACT_INITIALIZATION,
    th.AR.WAITING_FOR_PID_FOCUS,
    th.AR.WAITING_FOR_SUCCESSFUL_SHOW,
]);
function tL(e) {
    let { children: t, className: i, onExpand: n, ...s } = e,
        [l, r] = S.useState(!1);
    return (0, E.jsx)(tj.N, {
        className: e7.uR,
        collapsibleContent: (0, E.jsx)("div", { className: e7.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, E.jsx)(e5, {
                ...s,
                onClick: (e) => {
                    var i;
                    r((i = !l)), n?.(i), t?.(e);
                },
                className: e6()(e7.AC, i),
                action: (0, E.jsxs)("div", {
                    className: e7.rc,
                    children: [
                        s.action,
                        l
                            ? (0, E.jsx)(en.a, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              })
                            : (0, E.jsx)(tO._, {
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
let tD = (0, a.E2)(u.X.OVERLAY_CURRENT_GAME, {
    Component: function () {
        let { runningGame: e, runningGameApplication: t } = tl(),
            i = e?.pid,
            n = (0, g.bG)(
                [tE.default],
                () => (null == e || null == i ? null : tE.default.getTrackedGameByPid(i)),
                [e, i],
                tt(),
            ),
            { enabledLegacy: s, enabledOOP: l } = (0, g.cf)(
                [tb.A, tv.A],
                () =>
                    null == e && null == n
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: n?.legacyEnabled ?? !1, enabledOOP: n?.oopEnabled ?? !1 }
                          : (0, m.hw)(e, !1, [tb.A, tv.A]),
                [e, n],
            ),
            r = (0, g.bG)([m.Ay, tb.A, tv.A], () => (null == e ? null : (0, m.xU)(e, m.Ay, tb.A, tv.A)), [e], tt()),
            [a, o] = S.useState(l),
            [u, d] = S.useState(s),
            [c, A] = S.useState(!1);
        S.useEffect(() => {
            o(l), d(s);
        }, [l, s]);
        let h = !(0, ty.supportsLegacy)(),
            T = !(0, ty.supportsOutOfProcess)(),
            { legacyEnabled: x, oopEnabled: f } = (0, g.cf)([tE.default], () => tE.default.getGlobalEnabledStatus()),
            N = (t, i) => {
                if (null == e) return;
                let n = !1,
                    s = !1;
                switch (i) {
                    case tA.OverlayToggledClientSettingType.LEGACY_GAME:
                        d(t), tu.Ay.toggleOverlay(e, t, a), (n = !t && u);
                        break;
                    case tA.OverlayToggledClientSettingType.OOP_GAME:
                        o(t), tu.Ay.toggleOverlay(e, u, t), (s = !t && a);
                        break;
                    case tA.OverlayToggledClientSettingType.LEGACY:
                        td.A.setEnabled(t, f), (0, tA.Q3)(t, tA.OverlayToggledClientSettingType.LEGACY, e.id ?? null);
                        break;
                    case tA.OverlayToggledClientSettingType.OOP:
                        td.A.setEnabled(x, t), (0, tA.Q3)(t, tA.OverlayToggledClientSettingType.OOP, e.id ?? null);
                }
                (n || s) &&
                    tp(
                        n
                            ? tA.OverlayToggledClientSettingType.LEGACY_GAME
                            : tA.OverlayToggledClientSettingType.OOP_GAME,
                        e.id ?? null,
                    );
            },
            _ = h && T,
            I = !x && !f,
            C = !a && !x && u && !h,
            b = !u && !f && a && !T,
            v = n?.overlayMethod === th.Ue.Disabled,
            y = n?.state === th.AR.OVERLAY_RENDERING && !v,
            O = n?.state != null && tR.has(n.state) && !v,
            R = n?.overlayMethod === th.Ue.OutOfProcess,
            L = n?.overlayMethod === th.Ue.OutOfProcessLimitedInteraction,
            D = n?.overlayMethod === th.Ue.Hook,
            P = n?.state === th.AR.OVERLAY_CRASHED || n?.state === th.AR.OVERLAY_CRASHED_DISABLED,
            G = !a && !u,
            [M, U] = (() => {
                switch (!0) {
                    case y && R:
                        return [
                            j.intl.format(j.t.hFVBIg, {
                                overlayMethod: j.intl.string(j.t.a3eXSw),
                                overlayMethodHook: function (e, t) {
                                    return (0, E.jsx)(
                                        ei.E,
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
                                        ei.E,
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
                                        ei.E,
                                        { tag: "span", variant: "text-sm/medium", color: "text-strong", children: e },
                                        t,
                                    );
                                },
                            }),
                            (function () {
                                switch (!0) {
                                    case n?.fullscreenType !== tc.aI.BORDERLESS_FULLSCREEN:
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
                        let e = n?.fullscreenType === tc.aI.FULLSCREEN ? j.intl.string(j.t.mJmbeC) : null;
                        return [j.intl.string(j.t.VPW4XY), e];
                    }
                    default:
                        return [j.intl.string(j.t.ONovP5), null];
                }
            })();
        (0, tg.Ay)(() => {
            tu.Ay.getDetectableGames();
        });
        let [V, k] = S.useMemo(
            () =>
                O
                    ? ["text-muted", es.A.colors.TEXT_MUTED.css]
                    : y && L
                      ? ["text-feedback-warning", es.A.colors.TEXT_FEEDBACK_WARNING.css]
                      : y && R
                        ? ["text-feedback-positive", es.A.colors.TEXT_FEEDBACK_POSITIVE.css]
                        : y && D
                          ? ["text-strong", es.A.colors.TEXT_STRONG.css]
                          : ["interactive-text-default", es.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
            [O, y, L, R, D],
        );
        return null == e
            ? null
            : (0, E.jsxs)(tL, {
                  onExpand: A,
                  className: c ? e7.tx : void 0,
                  title: (0, E.jsxs)(E.Fragment, {
                      children: [
                          t?.name ?? r?.name ?? e?.gameName ?? "",
                          null != r && r.verified
                              ? (0, E.jsx)(tr.m, {
                                    text: j.intl.string(j.t["4PJP5p"]),
                                    children: (0, E.jsx)(tm.A, {
                                        size: 16,
                                        color: es.A.colors.BACKGROUND_BRAND.css,
                                        children: (0, E.jsx)(ta.U, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: es.A.colors.WHITE.css,
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
                              ? (0, E.jsx)(to.k, { size: "xxs", color: k })
                              : (0, E.jsx)("div", { className: e7.W4 }),
                          (0, E.jsx)(ei.E, {
                              variant: "text-xs/semibold",
                              color: V,
                              children: j.intl.string(j.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, E.jsx)(p.A, { game: t, pid: e?.pid, size: p.M.MEDIUM }),
                  "aria-label": j.intl.string(j.t["87O5GC"]),
                  action: (0, E.jsx)(et.D, {
                      onClick: (e) => e8(e),
                      children: (0, E.jsx)(q.d, {
                          checked: (a && f) || (u && x),
                          disabled: _,
                          onChange: (t) => {
                              ((t, i) => {
                                  if (null == e) return;
                                  let n = !1,
                                      s = !1;
                                  switch (i) {
                                      case "game":
                                          tu.Ay.toggleOverlay(e, t, t), d(t), o(t), (n = !t && u), (s = !t && a);
                                          break;
                                      case "global":
                                          td.A.setEnabled(t, t), (n = !t && x), (s = !t && f);
                                          break;
                                      case "both":
                                          td.A.setEnabled(t, t),
                                              tu.Ay.toggleOverlay(e, t, t),
                                              d(t),
                                              o(t),
                                              (n = (!t && x) || (!t && u)),
                                              (s = (!t && f) || (!t && a));
                                  }
                                  let l = null;
                                  n
                                      ? (l =
                                            "game" === i
                                                ? tA.OverlayToggledClientSettingType.LEGACY_GAME
                                                : tA.OverlayToggledClientSettingType.LEGACY)
                                      : s &&
                                        (l =
                                            "game" === i
                                                ? tA.OverlayToggledClientSettingType.OOP_GAME
                                                : tA.OverlayToggledClientSettingType.OOP),
                                      null != l && tp(l, e.id ?? null);
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
                  warning: (0, E.jsx)(tC, { className: e7.Hh, game: e }),
                  children: [
                      (0, E.jsx)(e5, {
                          title: j.intl.string(j.t["7BlVIs"]),
                          description: j.intl.string(j.t.ndgADE),
                          hint: f ? void 0 : j.intl.string(j.t.cAFVsL),
                          "aria-label": j.intl.string(j.t["7BlVIs"]),
                          action: (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(q.d, {
                                      checked: a && f,
                                      disabled: T,
                                      onChange: (e) => {
                                          e && !f
                                              ? N(e, tA.OverlayToggledClientSettingType.OOP)
                                              : N(e, tA.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, E.jsx)("div", { className: e7.Kz }),
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
                                  (0, E.jsx)(q.d, {
                                      checked: u && x,
                                      disabled: h,
                                      onChange: (e) => {
                                          e && !x
                                              ? N(e, tA.OverlayToggledClientSettingType.LEGACY)
                                              : N(e, tA.OverlayToggledClientSettingType.LEGACY_GAME);
                                      },
                                  }),
                                  (0, E.jsx)("div", { className: e7.Kz }),
                              ],
                          }),
                      }),
                  ],
              });
    },
    usePredicate: () => {
        let { runningGame: e } = tl();
        return null != e;
    },
    useSearchTerms: () => [j.intl.string(j.t["9cb1Uz"])],
});
var tP = i(364522),
    tG = i(206885);
function tM(e) {
    let { game: t, gameApplication: i } = e,
        n = S.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        s = (0, g.bG)([x.A], () => (null != i ? i : x.A.getApplication(t?.id)), [i, t]);
    return (0, E.jsx)(p.A, { game: s, pid: n, size: p.M.SMALL });
}
function tU(e) {
    let {
            rawGame: t,
            gameApplication: i,
            supportDisabled: n,
            getEnabledFromStatus: s,
            onChange: l,
            clientSettingType: r,
            ariaLabel: a,
        } = e,
        o = (0, g.cf)([m.Ay, tb.A, tv.A], () => (0, m.xU)(t, m.Ay, tb.A, tv.A)),
        u = (0, g.cf)([tb.A, tv.A], () => (0, m.hw)(t, !1, [tb.A, tv.A]), [t]),
        d = s(u),
        [c, A] = S.useState(d);
    return (
        S.useEffect(() => {
            A(d);
        }, [d]),
        (0, E.jsx)(e5, {
            title: t.name,
            icon: (0, E.jsx)(tM, { game: o, gameApplication: i }),
            "aria-label": a,
            action: (0, E.jsxs)(E.Fragment, {
                children: [
                    (0, E.jsx)(q.d, {
                        checked: c,
                        disabled: n,
                        onChange: (e) => {
                            let i;
                            return (i = !e && c), void (A(e), l(e, o, u), i && tp(r, o.id ?? t?.id ?? null));
                        },
                    }),
                    (0, E.jsx)("div", { className: e7.Kz }),
                ],
            }),
        })
    );
}
let tV = (0, a.E2)(u.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = S.useState(!1),
                { legacyEnabled: i, oopEnabled: n } = (0, g.cf)([tE.default], () =>
                    tE.default.getGlobalEnabledStatus(),
                ),
                s = (0, g.yK)([m.Ay], () => m.Ay.getGamesSeen(!0)).filter((e) => !(0, A.n1)(e)),
                l = (0, ti.A)(s.map((e) => e.id)),
                r = !(0, ty.supportsLegacy)(),
                a = (e) => {
                    td.A.setEnabled(e, n);
                    let t = m.Ay.getCurrentGameForAnalytics()?.id ?? null;
                    (0, tA.Q3)(e, tA.OverlayToggledClientSettingType.LEGACY, t),
                        !e && i && tp(tA.OverlayToggledClientSettingType.LEGACY, t);
                },
                o = (e, t, i) => {
                    let { enabledOOP: n } = i;
                    tu.Ay.toggleOverlay(t, e, n);
                },
                u = S.useMemo(
                    () =>
                        (0, ty.supportsLegacy)()
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
                      className: e7.dA,
                      action: (0, E.jsxs)(E.Fragment, {
                          children: [
                              (0, E.jsx)(q.d, { checked: i, disabled: r, onChange: (e) => a(e) }),
                              tG.O && (0, E.jsx)("div", { className: e7.Kz }),
                          ],
                      }),
                  })
                : (0, E.jsxs)(tL, {
                      onExpand: t,
                      className: e ? e7.tx : void 0,
                      title: j.intl.string(j.t.BfFpW1),
                      description: u,
                      "aria-label": j.intl.string(j.t.BfFpW1),
                      action: (0, E.jsx)(et.D, {
                          onClick: (e) => e8(e),
                          children: (0, E.jsx)(q.d, { checked: i, disabled: r, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, E.jsx)("div", {
                              className: e7.SC,
                              children: (0, E.jsx)(ei.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: j.intl.string(j.t.FzoWRo),
                              }),
                          }),
                          (0, E.jsx)(tP.Ip, {
                              className: e7.XG,
                              children: s.map((e, t) =>
                                  (0, E.jsx)(
                                      tU,
                                      {
                                          rawGame: e,
                                          clientSettingType: tA.OverlayToggledClientSettingType.LEGACY_GAME,
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
    tk = (0, a.E2)(u.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = S.useState(!1),
                { oopEnabled: i, legacyEnabled: n } = (0, g.cf)([tE.default], () =>
                    tE.default.getGlobalEnabledStatus(),
                ),
                s = !(0, ty.supportsOutOfProcess)(),
                l = (0, g.yK)([m.Ay], () => m.Ay.getGamesSeen(!0)).filter((e) => !(0, A.n1)(e)),
                r = (0, ti.A)(l.map((e) => e.id)),
                a = (e) => {
                    let t = !e && i;
                    td.A.setEnabled(n, e);
                    let s = m.Ay.getCurrentGameForAnalytics()?.id ?? null;
                    (0, tA.Q3)(e, tA.OverlayToggledClientSettingType.OOP, s),
                        t && tp(tA.OverlayToggledClientSettingType.OOP, s);
                },
                o = (e, t, i) => {
                    let { enabledLegacy: n } = i;
                    tu.Ay.toggleOverlay(t, e, n);
                },
                u = S.useMemo(
                    () =>
                        tG.O ? (s ? j.intl.string(j.t.C7bLTQ) : j.intl.string(j.t.ndgADE)) : j.intl.string(j.t.m7X4az),
                    [s],
                );
            return 0 === l.length
                ? (0, E.jsx)(e5, {
                      title: j.intl.string(j.t["7BlVIs"]),
                      description: u,
                      "aria-label": j.intl.string(j.t["7BlVIs"]),
                      className: e7.dA,
                      action: (0, E.jsxs)(E.Fragment, {
                          children: [
                              (0, E.jsx)(q.d, { checked: i, disabled: s, onChange: (e) => a(e) }),
                              tG.O && (0, E.jsx)("div", { className: e7.Kz }),
                          ],
                      }),
                  })
                : (0, E.jsxs)(tL, {
                      onExpand: t,
                      className: e ? e7.tx : void 0,
                      title: j.intl.string(j.t["7BlVIs"]),
                      description: u,
                      "aria-label": j.intl.string(j.t["7BlVIs"]),
                      action: (0, E.jsx)(et.D, {
                          onClick: (e) => e8(e),
                          children: (0, E.jsx)(q.d, { checked: i, disabled: s, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, E.jsx)("div", {
                              className: e7.SC,
                              children: (0, E.jsx)(ei.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: j.intl.string(j.t.FzoWRo),
                              }),
                          }),
                          (0, E.jsx)(tP.Ip, {
                              className: e7.XG,
                              children: l.map((e, t) =>
                                  (0, E.jsx)(
                                      tU,
                                      {
                                          rawGame: e,
                                          clientSettingType: tA.OverlayToggledClientSettingType.OOP_GAME,
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
    tw = (0, a.zZ)(u.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => j.intl.string(j.t["/dp6yY"]),
        buildLayout: () => [tD, tk, tV, e9],
    }),
    tF = (0, a.zD)(u.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, g.bG)([eX.default], () => !eX.default.disableClickableRegions),
        setValue: (e) => {
            td.A.setDisableClickableRegions(!e);
        },
        useTitle: () => j.intl.string(j.t["+eFXxq"]),
        useSubtitle: () => j.intl.string(j.t.kivMAp),
    });
var tB = i(284009),
    tz = i.n(tB),
    tX = i(97260),
    tY = i(635242);
let tH = (0, a.E2)(u.X.OVERLAY_KEYBIND_SETTING, {
    Component: function () {
        let e = (0, g.bG)([eB.Ay], () => eB.Ay.getOverlayKeybind()),
            t = !(0, ty.supportsLegacy)(),
            i = !(0, ty.supportsOutOfProcess)(),
            [n, s] = (0, g.yK)([m.Ay], () => [m.Ay.canShowAdminWarning, m.Ay.getVisibleGame()], []),
            l = (0, t_.NP)(),
            r = null != s && s.elevated && n && !l,
            a = !(0, eB.DV)(e?.shortcut ?? []);
        return (0, E.jsx)("div", {
            className: e7.hc,
            children: (0, E.jsxs)("div", {
                className: e7.eH,
                children: [
                    (0, E.jsxs)("div", {
                        className: e7.Bu,
                        children: [
                            (0, E.jsx)(ei.E, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: j.intl.string(j.t.VsAZcC),
                            }),
                            r &&
                                (0, E.jsx)(ei.E, {
                                    variant: "text-xs/normal",
                                    color: "text-feedback-warning",
                                    className: e7.y7,
                                    children: j.intl.string(j.t.NsowVa),
                                }),
                            a &&
                                (0, E.jsx)(ei.E, {
                                    variant: "text-xs/normal",
                                    color: "text-feedback-warning",
                                    className: e7.y7,
                                    children: j.intl.string(j.t["UNoTw/"]),
                                }),
                        ],
                    }),
                    (0, E.jsx)("div", {
                        className: e7.IH,
                        children: (0, E.jsx)(tY.A, {
                            disabled: t && i,
                            defaultValue: null != e ? e.shortcut : [],
                            onChange: function (t) {
                                tz()(null != e, "Keybind should never be undefined"),
                                    tX.A.setKeybind({ ...e, shortcut: t });
                            },
                        }),
                    }),
                ],
            }),
        });
    },
    useSearchTerms: () => [j.intl.string(j.t.VsAZcC)],
});
var tK = i(515183),
    tW = i(682763);
let tZ = (0, a.zD)(u.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
        usePredicate: () => {
            let { runningGameApplication: e } = tl();
            return e?.id != null;
        },
        useDisabled: () => {
            let { runningGame: e } = tl();
            return null != e && (0, tK.qJ)(e.pid);
        },
        useValue: () => {
            let { runningGame: e, runningGameApplication: t } = tl(),
                i = t?.id,
                n = (0, g.bG)([ew.A], () => ew.A.isLimitedInteractionOverrideEnabled(i)),
                s = null != e && (0, tK.qJ)(e.pid);
            return n || s;
        },
        setValue: (e) => {
            let t,
                i,
                n,
                s,
                { runningGameApplication: l } =
                    ((t = tn.A.getStreamerActiveStreamMetadata()),
                    (s = ts(
                        t,
                        (n =
                            null != (i = m.Ay.getVisibleGame()) ? m.Ay.getGameOrTransformedSubgameForPID(i.pid) : null),
                    )),
                    { runningGame: n ?? void 0, runningGameApplication: x.A.getApplication(s) ?? void 0 });
            null != l && (0, tW.x8)(l.id, e);
        },
        useTitle: () => j.intl.string(j.t.wgVQND),
        useSubtitle: () => j.intl.string(j.t["5SsyF5"]),
    }),
    tq = (0, a.zZ)(u.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [tH, tZ, tF] });
var tQ = i(93465);
let tJ = [
    {
        title: j.t.eVE4LX,
        description: j.t["72WNqk"],
        disabledSetting: tQ.M.TEXT_CHAT,
        key: u.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: j.t.oifnSh,
        description: j.t.bgU5r0,
        disabledSetting: tQ.M.WELCOME_GENERAL,
        key: u.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: j.t.hqsZJW,
        description: j.t.kHjdqc,
        disabledSetting: tQ.M.GO_LIVE_NUDGE,
        key: u.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: j.t.sop3rn,
        description: j.t.pjgffc,
        disabledSetting: tQ.M.GAME_ACTIVITY,
        key: u.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: j.t["2QVhbb"],
        description: j.t.wQ4ilB,
        disabledSetting: tQ.M.NOW_PLAYING,
        key: u.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: j.t.giM9fA,
        description: j.t.EhAfWj,
        disabledSetting: tQ.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: u.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, ek.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, g.bG)([ew.A], () => ew.A.isNotificationDisabledBySetting(tQ.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function t$(e) {
    return (0, a.zD)(e.key, {
        useTitle: () => j.intl.string(e.title),
        useSubtitle: () => j.intl.string(e.description),
        useValue: () => !(0, g.bG)([ew.A], () => ew.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            td.A.setNotificationDisabledSetting(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let t0 = (0, a.FW)(u.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => tJ.map(t$),
    }),
    t1 = (0, a.zZ)(u.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.xOE5bA),
        buildLayout: () => [t0],
    }),
    t2 = (0, a.Hn)(u.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
        useTitle: () => j.intl.string(j.t.dnvZSg),
        useValue: () => (0, g.bG)([eX.default], () => eX.default.getAvatarSizeMode()),
        setValue: (e) => {
            td.A.setAvatarSizeMode(e);
        },
        useOptions: () => [
            { id: "large", label: j.intl.string(j.t.YcOxtr), value: eA.OSZ.LARGE },
            { id: "small", label: j.intl.string(j.t.BKIKqx), value: eA.OSZ.SMALL },
        ],
    }),
    t3 = (0, a.Hn)(u.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => j.intl.string(j.t.J0dpcB),
        useValue: () => (0, g.bG)([eX.default], () => eX.default.getDisplayNameMode()),
        setValue: (e) => {
            td.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: j.intl.string(j.t.nBmDrT), value: eA.pwA.ALWAYS },
            { id: "speaking", label: j.intl.string(j.t["2OvIZY"]), value: eA.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: j.intl.string(j.t.ekjlPL), value: eA.pwA.NEVER },
        ],
    }),
    t6 = (0, a.Hn)(u.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => j.intl.string(j.t.swsWWC),
        useValue: () => (0, g.bG)([eX.default], () => eX.default.getDisplayUserMode()),
        setValue: (e) => {
            td.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: j.intl.string(j.t.nBmDrT), value: eA.f5z.ALWAYS },
            { id: "speaking", label: j.intl.string(j.t["2OvIZY"]), value: eA.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var t4 = i(391973),
    t7 = i(489277),
    t8 = i(897720),
    t5 = i(38502);
function t9() {
    let e = t7.A.getWidgetByType(eA.uss.VOICE_V3);
    if (null == e) return null;
    let t = t5.A.getWidget(e.id);
    return null != t && (0, t8.ZO)(t) ? t : null;
}
i(392164);
let ie = (0, a.sN)(u.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => j.intl.string(j.t["X/Uyzc"]),
    minValue: 0,
    maxValue: 25,
    markers: [0, 5, 10, 15, 20, 25],
    onMarkerRender: (e) => (e < 1 ? j.intl.string(j.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = t9();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < 1 ? j.intl.string(j.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = t9();
        null != t &&
            (e < 1
                ? (0, t4.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, t4.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
var it = i(43990),
    ii = i(450740),
    is = i(968898),
    il = i(95701),
    ir = i(889227),
    ia = i(288737),
    io = i(287809);
function iu(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new ia.A({
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
        user: new ir.A({ id: s, username: e }),
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
let id = (0, a.E2)(u.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
        Component: function () {
            let e,
                t = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
                {
                    avatarSizeMode: i,
                    displayNameMode: n,
                    displayUserMode: s,
                } = (0, g.cf)([eX.default], () => ({
                    avatarSizeMode: eX.default.getAvatarSizeMode(),
                    displayNameMode: eX.default.getDisplayNameMode(),
                    displayUserMode: eX.default.getDisplayUserMode(),
                })),
                [l] = S.useState(() => [
                    iu(j.intl.string(j.t.C0ZDvo), !0, !1),
                    iu(j.intl.string(j.t.iOtj8E), !1, !1, !0),
                    iu(j.intl.string(j.t["0oqNgL"]), !1, !0),
                ]),
                r = (0, g.bG)([t7.A, t5.A], () => {
                    let e = t7.A.getWidgetByType(eA.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = t5.A.getWidget(e.id);
                    return null != t && (0, t8.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = iu(t.username)).user = t), e) : null, ...l].filter(N.Vq),
                u = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                d = (0, E.jsx)(it.N, {
                    theme: eA.NJ8.MIDNIGHT,
                    children: (e) =>
                        (0, E.jsxs)("div", {
                            className: e6()(e7.Y5, e),
                            children: [
                                (0, E.jsx)("div", {
                                    className: e7.kJ,
                                    children: (0, E.jsx)(ii.DH, {
                                        id: "voice-widget",
                                        title: j.intl.string(j.t.KNJ6Vq),
                                        channel: (0, il.createChannelRecord)({
                                            id: "123",
                                            name: "Test Channel",
                                            type: eA.rbe.GUILD_VOICE,
                                            guild_id: "456",
                                        }),
                                        overlayVoiceStates: u,
                                        displayNameMode: n,
                                        displayUserMode: s,
                                        avatarSizeMode: i,
                                        widget: eA.uss.VOICE,
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
                                    className: e7.R$,
                                    children: [
                                        (0, E.jsx)(is.Pl, { children: j.intl.string(j.t.KNJ6Vq) }),
                                        (0, E.jsx)(is.CS, {}),
                                        (0, E.jsx)(is.O0, { id: r?.id ?? "voice-widget", pinned: r?.pinned ?? !1 }),
                                    ],
                                }),
                            ],
                        }),
                });
            return (0, E.jsx)("div", { className: e7.F9, children: d });
        },
        useSearchTerms: () => [],
    }),
    ic = (0, a.zZ)(u.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => j.intl.string(j.t.r1TZfh),
        buildLayout: () => [id, t2, t3, t6, ie],
    });
var ig = i(49999),
    im = i(9025);
function iA() {
    let [e, t] = (0, eV.kn)([eU.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
    return ((0, eL.Ay)(() => () => {
        t(ig.i.AUTO_DISMISS);
    }),
    e !== eU.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, E.jsxs)(E.Fragment, {
              children: [
                  (0, E.jsxs)("div", {
                      className: im.xC,
                      children: [
                          (0, E.jsx)("div", {
                              children: (0, E.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/10b8ab47f3371360233219f4b20fa86155553ddb810ceb8688654738bf7e15d0.png",
                                  alt: j.intl.string(j.t.mdXZh1),
                                  className: im.tl,
                              }),
                          }),
                          (0, E.jsx)("div", {
                              children: (0, E.jsxs)("div", {
                                  className: im.vJ,
                                  children: [
                                      (0, E.jsx)(eP.D, {
                                          variant: "heading-xl/medium",
                                          color: "text-strong",
                                          children: j.intl.string(j.t.jzjJQg),
                                      }),
                                      (0, E.jsx)(ei.E, {
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
                                  className: im.lh,
                              }),
                          }),
                          (0, E.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: im.VV,
                              children: (0, E.jsx)(eG.$, {
                                  variant: "primary",
                                  text: j.intl.string(j.t.Q26diF),
                                  onClick: () => void t(ig.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, E.jsx)(eM.c, { className: im.yF }),
              ],
          });
}
function ih() {
    let e = (0, g.bG)([eF.A], () => eF.A.enabled),
        t = (0, ek.Mn)("OverlayStreamerModeNotice");
    return e && t
        ? (0, E.jsxs)(E.Fragment, {
              children: [
                  (0, E.jsx)(W.w, {
                      type: "warning",
                      children: j.intl.format(j.t.fuEX5B, {
                          onClick: () => (0, eH.openUserSettings)(u.X.STREAMER_MODE_CATEGORY),
                      }),
                  }),
                  (0, E.jsx)(eM.c, { className: im.yF }),
              ],
          })
        : null;
}
let iE = (0, a.t_)(u.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                e$(),
                eB.Ay.addChangeListener(e$),
                ew.A.addChangeListener(e$),
                eX.default.addChangeListener(e$),
                ez.default.addChangeListener(e$),
                eY.isPlatformEmbedded && (0, _.a2)(),
                () => {
                    eB.Ay.removeChangeListener(e$),
                        ew.A.removeChangeListener(e$),
                        eX.default.removeChangeListener(e$),
                        ez.default.removeChangeListener(e$),
                        eY.isPlatformEmbedded && (0, _.e0)();
                }
            );
        },
        useTitle: () => j.intl.string(j.t["9cb1Uz"]),
        decoration: {
            type: h.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, E.jsxs)(E.Fragment, { children: [(0, E.jsx)(iA, {}), (0, E.jsx)(ih, {})] });
            },
        },
        buildLayout: () => [tw, tq, ic, t1],
    }),
    iS = (0, a.i4)(u.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["9cb1Uz"]),
        icon: eD.l,
        usePredicate: eK.b_,
        buildLayout: () => [iE],
    });
var iT = i(687966);
let ix = (0, a.AK)(u.X.REGISTERED_GAMES_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.OYYY6q),
        destinationKey: u.X.ACTIVITY_PRIVACY_PANEL,
    }),
    ip = (0, a.gN)(u.X.REGISTERED_GAMES_RELATED_SETTINGS, {
        usePredicate: () => (0, o.SV)("RegisteredGamesRelatedSettings"),
        buildLayout: () => [ix],
    });
var iN = i(396478),
    i_ = i(270003),
    iI = i(227309),
    iC = i(363195),
    ib = i(1215),
    iv = i(39623),
    iy = i(952270),
    ij = i(138134),
    iO = i(414079),
    iR = i(29160),
    iL = i(650583),
    iD = i(150717),
    iP = i(653307);
let iG = (0, eY.isWindows)();
function iM(e) {
    let { rawGame: t, nowPlaying: n = !1, isOverride: s, subgames: l, isSubgame: r = !1, parentGame: a } = e,
        o = (0, g.cf)([m.Ay, tb.A, tv.A], () => (0, m.xU)(t, m.Ay, tb.A, tv.A)),
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
        N = e6()(iP.tR, {
            [iD.LO]: !n,
            [iD.Rw]: n,
            [iD.FB]: null != o && n,
            [iD.xL]: r,
            [iD.fG]: null != l && l.length > 0,
        });
    function _() {
        null != l && l.length > 0 && d
            ? (0, Y.openModalLazy)(async () => {
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
                                      tu.Ay.toggleDetection(o), t.onClose();
                                  },
                                  variant: "primary",
                              },
                          ],
                      });
              })
            : tu.Ay.toggleDetection(o);
    }
    let I = null != c && (0, m.Es)(o) === (0, m.Es)(c),
        C = (null != a && a.id === c?.id) || I || (null != l && l.some((e) => e.id === c?.id));
    return (0, E.jsxs)(E.Fragment, {
        children: [
            (0, E.jsxs)("div", {
                className: N,
                children: [
                    (0, E.jsxs)("div", {
                        className: e6()(iD.$K, iP.Vd),
                        children: [
                            o.verified && !s
                                ? (0, E.jsxs)("div", {
                                      className: iD.HS,
                                      children: [
                                          (0, E.jsx)("div", { className: iD.mO, children: x }),
                                          (0, E.jsx)(tr.m, {
                                              text: j.intl.string(j.t["4PJP5p"]),
                                              children: (0, E.jsx)(tm.A, {
                                                  className: iD.qf,
                                                  size: 18,
                                                  color: es.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, E.jsx)(ta.U, {
                                                      size: "custom",
                                                      width: 18,
                                                      height: 18,
                                                      color: es.A.unsafe_rawColors.WHITE.css,
                                                  }),
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, E.jsx)("input", {
                                      className: e6()(iD.mO, iD.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: p,
                                      onBlur: function () {
                                          o.name !== p && tu.Ay.editName(o, p);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === iL.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
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
                                        className: iD.GN,
                                        children: (0, E.jsx)(iR.A, {
                                            hoverText:
                                                null != s && "" !== s
                                                    ? ((t = s.replace(/^file:\/\//i, "")),
                                                      (0, eY.isWindows)() && (t = t.toUpperCase()),
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
                              className: e6()(iP.tR, iP.oA, iP.LT, iD.E3),
                              children: (0, E.jsx)(tr.m, {
                                  text: j.intl.string(j.t["y0B+lo"]),
                                  children: (0, E.jsx)(et.D, {
                                      "aria-label": j.intl.string(j.t["y0B+lo"]),
                                      className: iD.ym,
                                      onClick: function () {
                                          if (h) return;
                                          let e = null != o.id ? tb.A.getDetectableGame(o.id) : null;
                                          eo.default.track(eA.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
                                              application_id: e?.id,
                                              game_name: (0, A.n1)(o) ? o.gameName : o.name,
                                          }),
                                              T(!0),
                                              (0, Y.openModalLazy)(async () => {
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
                                                              type: eA.$pd.PLAYING,
                                                          },
                                                          onSubmitted: () => {},
                                                      });
                                              });
                                      },
                                      children: (0, E.jsx)(ij.i, {
                                          size: "md",
                                          color: "currentColor",
                                          className: iD.Lj,
                                          colorClass: iD.GS,
                                      }),
                                  }),
                              }),
                          }),
                    (function () {
                        let { detectable: e } = o,
                            t =
                                e && u
                                    ? (0, E.jsx)(iv.b, {
                                          size: "md",
                                          color: "currentColor",
                                          className: iD.Lj,
                                          colorClass: iD.GS,
                                      })
                                    : (0, E.jsx)(iy.G, {
                                          size: "md",
                                          color: "currentColor",
                                          className: u ? iD.$V : iD.zN,
                                          colorClass: iD.GS,
                                      });
                        return (0, E.jsx)("div", {
                            className: e6()(iP.tR, iP.oA, iP.LT, iD.E3),
                            children: (0, E.jsx)(tr.m, {
                                text: j.intl.string(j.t.QmitzM),
                                children: u
                                    ? (0, E.jsx)(et.D, {
                                          "aria-label": j.intl.string(j.t.QmitzM),
                                          className: iD.ym,
                                          onClick: _,
                                          children: t,
                                      })
                                    : t,
                            }),
                        });
                    })(),
                    (function () {
                        if (!iG || null != a) return null;
                        let { overlay: e, overlayWarn: t } = o,
                            i = e
                                ? (0, E.jsx)(to.k, {
                                      size: "md",
                                      color: "currentColor",
                                      className: iD.Lj,
                                      colorClass: iD.GS,
                                  })
                                : (0, E.jsx)(ib.n, {
                                      size: "md",
                                      color: "currentColor",
                                      className: iD.$V,
                                      colorClass: iD.GS,
                                  }),
                            n = t
                                ? (0, E.jsx)(tr.m, {
                                      text: j.intl.string(j.t.Vfw2L5),
                                      children: (0, E.jsx)("i", { className: iD.kb }),
                                  })
                                : null;
                        return (0, E.jsxs)("div", {
                            className: e6()(iP.tR, iP.oA, iP.LT, iD.E3),
                            children: [
                                n,
                                (0, E.jsx)(tr.m, {
                                    text: j.intl.string(j.t["1+O+Tu"]),
                                    children: (0, E.jsx)(et.D, {
                                        "aria-label": j.intl.string(j.t["1+O+Tu"]),
                                        className: iD.ym,
                                        onClick: () => {
                                            var t;
                                            return (t = !e), void tu.Ay.toggleOverlay(o, t, t);
                                        },
                                        children: i,
                                    }),
                                }),
                            ],
                        });
                    })(),
                    (n && !s) || C
                        ? null
                        : (0, E.jsx)(iO.A, {
                              className: iD.LS,
                              onClick: function () {
                                  tu.Ay.deleteEntry(o),
                                      l?.forEach((e) => {
                                          tu.Ay.deleteEntry(e);
                                      });
                              },
                          }),
                ],
            }),
            null != l &&
                l.length > 0 &&
                !n &&
                (0, E.jsx)("div", {
                    className: iD.AQ,
                    children: l.map((e, t) =>
                        (0, E.jsxs)(
                            S.Fragment,
                            {
                                children: [
                                    (0, E.jsx)(iM, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== l.length - 1 && (0, E.jsx)("div", { className: iD.PQ }),
                                ],
                            },
                            (0, m.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
var iU = i(818050);
function iV() {
    let e = (0, g.bG)([iC.A], () => iC.A.theme);
    return (0, E.jsxs)(iN.pp, {
        theme: e,
        className: iU.eT,
        children: [
            (0, E.jsx)(iN.G8, { darkSrc: i(839628), lightSrc: i(446404), width: 430, height: 250 }),
            (0, E.jsx)(iN.SG, { children: j.intl.string(j.t["1yiJwn"]) }),
        ],
    });
}
function ik() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: i } = C();
    return 0 === e.length
        ? (0, E.jsx)(iV, {})
        : (0, E.jsx)(i_.n, {
              children: (0, E.jsx)("div", {
                  children: e.map((e) =>
                      (0, E.jsx)(
                          iM,
                          { rawGame: e, isOverride: i.has(e.exePath), subgames: e.id === iI.a7 ? t : void 0 },
                          (0, m.Es)(e),
                      ),
                  ),
              }),
          });
}
let iw = (0, a.E2)(u.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, E.jsx)(ik, {}),
});
var iF = i(424994);
let iB = (0, a.zZ)(u.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [iw, ip],
    useTitle: () => j.intl.string(j.t.jCOdvx),
    useSubtitle: () => j.intl.format(j.t.KPA3m9, { igdbLink: iF.s8 }),
});
var iz = i(305866),
    iX = i(783878),
    iY = i(197287),
    iH = i(604949);
function iK(e) {
    let { onClose: t } = e,
        i = (0, g.bG)([m.Ay], () => m.Ay.getCandidateGames()),
        [n, s] = S.useState(null),
        l = i.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, E.jsxs)(iz.l, {
        className: e6()(iY.H, iH.Y_),
        "aria-label": j.intl.string(j.t.GTCx0p),
        children: [
            (0, E.jsx)(iX.Z, {
                selectionMode: "single",
                placeholder: j.intl.string(j.t.XqMe3N),
                value: n,
                options: l,
                onSelectionChange: function (e) {
                    s(e);
                },
            }),
            (0, E.jsx)(eM.c, { className: e6()(iU.Ot, iU.QB) }),
            (0, E.jsxs)("div", {
                className: e6()(iY.o, iP.xM),
                children: [
                    (0, E.jsx)(el.Q, { variant: "secondary", text: j.intl.string(j.t["ETE/oC"]), onClick: t }),
                    (0, E.jsx)(eG.$, {
                        variant: "primary",
                        text: j.intl.string(j.t.GTCx0p),
                        disabled: null == n,
                        onClick: function () {
                            null != n && (tu.Ay.addGame(n.pid, n.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
var iW = i(564206);
let iZ = (0, a.E2)(u.X.REGISTERED_GAMES_ADD_GAME_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.GTCx0p)],
    Component: () => {
        let e = S.useRef(null);
        return (0, E.jsxs)("div", {
            className: e6()(iW.a, iU.Gf),
            children: [
                (0, E.jsx)("span", { children: j.intl.string(j.t.xwhoqM) }),
                (0, E.jsx)(J.Y, {
                    targetElementRef: e,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, E.jsx)(iK, { onClose: t });
                    },
                    align: "center",
                    position: "bottom",
                    children: (t) =>
                        (0, E.jsx)(el.Q, {
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
function iq() {
    return (0, E.jsx)("div", {
        className: e6()(iP.tR, iD.eS, iD.Rw),
        children: (0, E.jsxs)("div", {
            className: e6()(iD.$K, iP.Vd),
            children: [
                (0, E.jsx)("div", { className: iD.mO, children: j.intl.string(j.t.H68X9x) }),
                (0, E.jsx)("div", { className: iD.GN, children: j.intl.string(j.t.T5Ilmw) }),
            ],
        }),
    });
}
let iQ = (0, a.E2)(u.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["MY9/Oe"])],
        Component: () => {
            let { robloxSubgameHistory: e, overrideExePaths: t } = C(),
                i = (0, g.bG)([m.Ay], () => m.Ay.getVisibleGame());
            return null != i
                ? (0, E.jsx)(
                      iM,
                      {
                          rawGame: i,
                          isOverride: t.has(i.exePath),
                          nowPlaying: !0,
                          subgames: i.id === iI.a7 ? e : void 0,
                      },
                      (0, m.Es)(i),
                  )
                : (0, E.jsx)(iq, {});
        },
    }),
    iJ = (0, a.zZ)(u.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => j.intl.string(j.t["MY9/Oe"]),
        buildLayout: () => [iQ, iZ],
    }),
    i$ = (0, a.t_)(u.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => j.intl.string(j.t.AVDyEj),
        buildLayout: () => [iJ, iB],
    }),
    i0 = (0, a.i4)(u.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.AVDyEj),
        icon: iT._,
        usePredicate: eK.Pi,
        buildLayout: () => [i$],
    }),
    i1 = (0, a.WI)(u.X.ACTIVITY_SECTION, {
        useTitle: () => j.intl.string(j.t.nVPpLM),
        buildLayout: () => [eR, i0, iS],
    });
var i2 = i(550640),
    i3 = i(247928),
    i6 = i(97808),
    i4 = i(778712),
    i7 = i(775602),
    i8 = i(320095),
    i5 = i(963852),
    i9 = i(763754),
    ne = i(20851),
    nt = i(486020),
    ni = i(382677);
let nn = new il.nA({ id: "1337", guild_id: "1337", type: eA.rbe.GUILD_TEXT, name: "preview" }),
    ns = [
        { status: eA.clD.IDLE, discriminator: "2" },
        { status: eA.clD.DND, discriminator: "3" },
        { status: eA.clD.ONLINE, mobile: !0, discriminator: "4" },
    ];
function nl(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (0, i8.rh)({ ...(0, i5.Ay)({ channelId: nn.id, content: e }), state: eA.cmJ.SENT, reactions: t });
}
var nr = i(856488);
let na = (0, a.zD)(u.X.ENABLE_LEGACY_CHAT_INPUT, {
        useTitle: () => j.intl.string(j.t.TZ2hZH),
        useSubtitle: () => j.intl.string(j.t.Q7wgHc),
        useValue: () => L.D_.useSetting(),
        setValue: (e) => L.D_.updateSetting(e),
    }),
    no = (0, a.zD)(u.X.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS, {
        useTitle: () => j.intl.string(j.t.XYvMIX),
        useSubtitle: () => j.intl.string(j.t.T0rbtM),
        useValue: L._z.useSetting,
        setValue: L._z.updateSetting,
    });
var nu = i(100767),
    nd = i(106236),
    nc = i(113494),
    ng = i(782134),
    nm = i(54570),
    nA = i(8880),
    nh = i(75804);
let nE = eZ().debounce((e) => {
    (0, nm.zU)(e);
}, 250);
function nS() {
    let [e, t] = S.useState(!1);
    return (
        (0, eL.l0)(() => (0, nm.pr)()),
        (0, E.jsx)(eG.$, {
            text: j.intl.string(j.t.SKNnqq),
            icon: e ? nc.E : ng.u,
            size: "sm",
            onClick: () => {
                if (e) {
                    (0, nm.pr)(), t(!1);
                    return;
                }
                (0, nm.AU)(
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
let nT = (0, a.E2)(u.X.TTS_PLAYBACK_RATE, {
        useSearchTerms: () => [j.intl.string(j.t.lsW5Ev)],
        Component: function () {
            let e = (0, g.bG)([nA.A], () => nA.A.speechRate);
            return (0, E.jsxs)(Z.B, {
                gap: 16,
                children: [
                    (0, E.jsx)(nd.A, {
                        label: j.intl.string(j.t.lsW5Ev),
                        description: j.intl.string(j.t.Ci4wMS),
                        markers: nh.P,
                        initialValue: e,
                        defaultValue: 1,
                        stickToMarkers: !0,
                        onValueChange: nE,
                        onValueRender: (e) => `x${e.toFixed(2)}`,
                        onMarkerRender: (e) =>
                            0 === e
                                ? (0, E.jsx)(ei.E, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: j.intl.string(j.t["493lwX"]),
                                  })
                                : 10 === e
                                  ? (0, E.jsx)(ei.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: j.intl.string(j.t.ZSZEdS),
                                    })
                                  : 1 === e
                                    ? (0, E.jsx)(ei.E, {
                                          variant: "text-xs/medium",
                                          color: "text-feedback-positive",
                                          children: "x1.0",
                                      })
                                    : e % 1 == 0
                                      ? ""
                                      : void 0,
                    }),
                    (0, E.jsx)(nS, {}),
                ],
            });
        },
        usePredicate: () => nu.$j,
    }),
    nx = (0, a.zZ)(u.X.AUDIO_AND_SCREEN_READER_CATEGORY, {
        useTitle: () => j.intl.string(j.t.XVR0Rb),
        buildLayout: () => [nT, no, na],
    }),
    np = (0, a.AK)(u.X.ACCESSIBILITY_TO_DISPLAY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.aTfeGK),
        destinationKey: u.X.APPEARANCE_PANEL,
    }),
    nf = (0, a.gN)(u.X.COLOR_AND_CONTRAST_RELATED_SETTINGS, { buildLayout: () => [np] });
var nN = i(955572);
let n_ = (0, a.zD)(u.X.DESATURATE_CUSTOM_COLORS, {
    useTitle: () => j.intl.string(j.t.OCJg5f),
    useSubtitle: () => j.intl.string(j.t.HEO0s3),
    useValue: () => (0, g.bG)([i7.A], () => i7.A.desaturateUserColors),
    setValue: () => (0, nN.YV)(),
});
var nI = i(652525);
let nC = (0, a.zD)(u.X.ENABLE_CUSTOM_CURSOR, {
        useTitle: () => j.intl.string(j.t["+Isihb"]),
        useSubtitle: () => j.intl.string(j.t.nNZ1Tz),
        useValue: () => (0, g.bG)([i7.A], () => i7.A.enableCustomCursor),
        setValue: (e) => (0, nN.ts)(e),
        usePredicate: () => (0, nI.t)("EnableCustomCursorSetting"),
    }),
    nb = (0, a.zD)(u.X.ENABLE_SWITCH_ICONS, {
        useTitle: () => j.intl.string(j.t["S3z+pV"]),
        useSubtitle: () => j.intl.string(j.t["3QuI9+"]),
        useValue: () => (0, g.bG)([i7.A], () => i7.A.isSwitchIconsEnabled),
        setValue: (e) => (0, nN.Gm)(e),
        hasIcon: !0,
    }),
    nv = (0, a.zD)(u.X.HIGH_CONTRAST_MODE, {
        useTitle: () => j.intl.string(j.t.aZlePv),
        useSubtitle: () => j.intl.string(j.t["v2qF8+"]),
        useValue: () => (0, g.bG)([i7.A], () => i7.A.isHighContrastModeEnabled),
        setValue: (e) => (0, nN.uh)(e ? i7._.HIGH : i7._.DEFAULT),
        getDismissibleBadges: () => [
            { badgeType: h.Xi.NEW, dismissibleContent: eU.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE },
        ],
    });
var ny = i(406360),
    nj = i(742023);
let nO = (0, a.Qx)(u.X.HIGH_DYNAMIC_RANGE, {
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
            return (0, ny.i)("HDRDynamicRangeSetting");
        },
        setValue: function (e) {
            (0, nN.FU)(e);
        },
        useValue: function () {
            return (0, g.bG)([nj.Ay], () => nj.Ay.hdrDynamicRange);
        },
        useSearchTerms: () => ["HDR", j.intl.string(j.t["O/Gjvn"])],
    }),
    nR = (0, a.Hn)(u.X.ROLE_STYLE, {
        useTitle: () => j.intl.string(j.t.uSOPWm),
        useSubtitle: () => j.intl.string(j.t.u7fFKS),
        useOptions: () => [
            { id: "username", label: j.intl.string(j.t.eDdMzJ), value: "username" },
            { id: "dot", label: j.intl.string(j.t.rdmJp0), value: "dot" },
            { id: "hidden", label: j.intl.string(j.t.Ji2EVJ), value: "hidden" },
        ],
        useValue: () => (0, g.bG)([i7.A], () => i7.A.roleStyle),
        setValue: (e) => (0, nN.IX)(e),
    });
(0, a.Qx)(u.X.ROLE_STYLE, {
    useTitle: () => j.intl.string(j.t.uSOPWm),
    useSubtitle: () => j.intl.string(j.t["86hjzQ"]),
    useOptions: () => [
        { name: j.intl.string(j.t.YEOEi6), value: "username" },
        { name: j.intl.string(j.t.mQaro3), value: "dot" },
        { name: j.intl.string(j.t.Ji2EVJ), value: "hidden" },
    ],
    useValue: () => (0, g.bG)([i7.A], () => i7.A.roleStyle),
    setValue: (e) => (0, nN.IX)(e),
});
let nL = (0, a.sN)(u.X.SATURATION, {
    useTitle: () => j.intl.string(j.t["5PWWCY"]),
    useSubtitle: () => j.intl.string(j.t.xf5S6P),
    markers: eA.hH7.SATURATION_INCREMENTS,
    onMarkerRender: (e) => ((100 * e) % 2 == 0 ? `${100 * e}%` : void 0),
    stickToMarkers: !0,
    minValue: 0,
    maxValue: 1,
    getInitialValue: () => i7.A.saturation,
    asValueChanges: (e) => (0, nN.HU)(e),
});
var nD = i(839214),
    nP = i(502229);
let nG = (0, nD.D)(() => ({ syncEnabled: null, updateTimeout: null })),
    nM = (0, a.zD)(u.X.SYNC_FORCED_COLORS, {
        useTitle: () => j.intl.string(j.t.cguiec),
        useSubtitle: () => j.intl.format(j.t.GwEVE2, { learnMoreLink: tN.A.getArticleURL(eA.MVz.FORCED_COLORS) }),
        useValue: () => {
            let e = (0, g.bG)([i7.A], () => i7.A.syncForcedColors);
            return (
                (0, tg.Ay)(() => {
                    nG.setState({ syncEnabled: i7.A.syncForcedColors });
                }),
                nG.useState((e) => e.syncEnabled) ?? e
            );
        },
        setValue: (e) => {
            let { updateTimeout: t } = nG.getState();
            if (null != t) {
                clearTimeout(t), nG.setState({ syncEnabled: e, updateTimeout: null });
                return;
            }
            if (e === i7.A.syncForcedColors) return void nG.setState({ syncEnabled: e });
            let i = setTimeout(() => {
                (0, nN.D3)(e), nG.setState({ updateTimeout: null });
            }, 150);
            nG.setState({ syncEnabled: e, updateTimeout: i });
        },
        usePredicate: () => (0, nP.D)(),
    }),
    nU = (0, a.zZ)(u.X.COLOR_AND_CONTRAST_CATEGORY, {
        useTitle: () => j.intl.string(j.t.JqvyiY),
        buildLayout: () => [nL, n_, nv, nC, nM, nO, nR, nb, nf],
    });
var nV = i(397438),
    nk = i(355097);
function nw(e) {
    return (0, g.bG)([nV.A], () =>
        (function (e) {
            switch (e) {
                case nk._A.REDUCED_MOTION:
                    return j.intl.format(j.t["1dT9V4"], {});
                case nk._A.REDUCED_MOTION_STICKERS:
                    return j.intl.string(j.t["2ExvRu"]);
                default:
                    return;
            }
        })(nV.A.getAppliedOverrideReasonKey(e)),
    );
}
let nF = (0, a.zD)(u.X.ANIMATE_EMOJIS, {
        useTitle: () => j.intl.string(j.t.iIaOlc),
        useSubtitle: () => nw("animateEmoji"),
        useValue: () => L.Sf.useSetting(),
        setValue: (e) => L.Sf.updateSetting(e),
    }),
    nB = (0, a.zD)(u.X.ANIMATE_GIFS, {
        useTitle: () => j.intl.string(j.t.wqsK7q),
        useSubtitle: () => nw("gifAutoPlay"),
        useValue: () => L.kt.useSetting(),
        setValue: (e) => L.kt.updateSetting(e),
    });
var nz = i(823894);
let nX = (0, a.Qx)(u.X.ANIMATE_STICKERS, {
        useTitle: () => j.intl.string(j.t.sBHIh0),
        useSubtitle: () => nw("animateStickers"),
        useOptions: () => [
            { name: j.intl.string(j.t["Xp+X2U"]), value: nz.BJ.ALWAYS_ANIMATE },
            { name: j.intl.string(j.t.IlLT7e), desc: j.intl.string(j.t.bIW9Tl), value: nz.BJ.ANIMATE_ON_INTERACTION },
            { name: j.intl.string(j.t.IGu8x3), value: nz.BJ.NEVER_ANIMATE },
        ],
        useValue: () => L.S0.useSetting(),
        setValue: (e) => L.S0.updateSetting(e),
    }),
    nY = (0, a.zD)(u.X.REDUCED_MOTION, {
        useTitle: () => j.intl.string(j.t.b3XBzg),
        useSubtitle: () => j.intl.format(j.t.XqvxJc, { helpdeskArticle: tN.A.getArticleURL(eA.MVz.REDUCED_MOTION) }),
        useValue: () => (0, g.bG)([i7.A], () => i7.A.useReducedMotion),
        setValue: (e) => (0, nN.qz)(e ? "reduce" : "no-preference"),
    }),
    nH = (0, a.zD)(u.X.SYNC_REDUCED_MOTION, {
        useTitle: () => j.intl.string(j.t.oL55A6),
        useValue: () => (0, g.bG)([i7.A], () => "auto" === i7.A.rawPrefersReducedMotion),
        setValue: (e) => (0, nN.qz)(e ? "auto" : i7.A.systemPrefersReducedMotion),
    }),
    nK = (0, a.zZ)(u.X.MOTION_CATEGORY, {
        useTitle: () => j.intl.string(j.t.e3TR1b),
        buildLayout: () => [nY, nH, nB, nF, nX],
    });
var nW = i(688810),
    nZ = i(259065),
    nq = i(864386);
let nQ = (0, a.zD)(u.X.DISPLAY_NAME_STYLES, {
        useTitle: () => j.intl.string(nq.default["2gFUEw"]),
        useSubtitle: () => {
            let { analyticsLocations: e } = (0, nW.Ay)();
            return j.intl.format(nq.default.aEax6P, {
                onClickOpenModal() {
                    (0, nZ.L)({ analyticsLocations: e });
                },
            });
        },
        useValue: () => (0, g.bG)([i7.A], () => i7.A.displayNameStylesEnabled),
        setValue: (e) => (0, nN.Dm)(e),
    }),
    nJ = (e) => `${e.toFixed(0)}px`,
    n$ = (0, a.sN)(u.X.APPEARANCE_FONT_SCALING, {
        useTitle: () => j.intl.string(j.t.rT3Pq5),
        useSubtitle: () => j.intl.string(j.t.LXUhen),
        markers: eA.hH7.FONT_SIZES,
        stickToMarkers: !0,
        minValue: eA.hH7.FONT_SIZES["0"],
        maxValue: eA.hH7.FONT_SIZES[eA.hH7.FONT_SIZES.length - 1],
        useDefaultValue: () => eA.hH7.FONT_SIZE_DEFAULT,
        getInitialValue: () => i7.A.fontSize,
        onValueRender: nJ,
        onMarkerRender: nJ,
        asValueChanges: (e) => (0, nN.XS)(e),
    }),
    n0 = (0, a.zD)(u.X.UNDERLINE_LINKS, {
        useTitle: () => j.intl.string(j.t.OLZFB8),
        useSubtitle: () => j.intl.string(j.t.DIX3ke),
        useValue: () => (0, g.bG)([i7.A], () => i7.A.alwaysShowLinkDecorations),
        setValue: (e) => (0, nN.kI)(e),
    }),
    n1 = (0, a.zZ)(u.X.TEXT_READABILITY_CATEGORY, {
        useTitle: () => j.intl.string(j.t["bxh/R7"]),
        buildLayout: () => [n$, n0, nQ],
    }),
    n2 = (0, a.Qx)(u.X.APPEARANCE_UI_DENSITY, {
        useTitle: () => j.intl.string(j.t["C/5V0A"]),
        useSubtitle: () => j.intl.string(j.t.QLZhYk),
        useSearchTerms: () => ["List Spacing"],
        useOptions: () => [
            { name: j.intl.string(j.t["7iegX4"]), value: X.NS.COMPACT },
            { name: j.intl.string(j.t.bBvAEH), value: X.NS.DEFAULT },
            { name: j.intl.string(j.t["4cuYHx"]), value: X.NS.COZY },
        ],
        useValue: () => L.Xi.useSetting(),
        setValue: (e) => {
            e !== X.NS.UNSET_UI_DENSITY && L.Xi.updateSetting(e);
        },
    }),
    n3 = "cozy",
    n6 = "compact",
    n4 = (0, a.Qx)(u.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
        useTitle: () => j.intl.string(j.t.nKRoPv),
        useSubtitle: () => j.intl.string(j.t.QntEEG),
        useSearchTerms: () => [j.intl.string(j.t.ZEoGMd)],
        useOptions: () => [
            { name: j.intl.string(j.t.Jqj4cZ), value: n3 },
            { name: j.intl.string(j.t["1JNcPS"]), value: n6 },
        ],
        useValue: () => (L.hH.useSetting() ? n6 : n3),
        setValue: (e) => {
            L.hH.updateSetting(e === n6), (0, nN.AC)();
        },
    });
var n7 = i(381941);
let n8 = (e) => `${e.toFixed(0)}px`,
    n5 = (0, a.sN)(u.X.APPEARANCE_MESSAGE_GROUP_SPACING, {
        useTitle: () => j.intl.string(j.t.Q6lKkg),
        useSubtitle: () => j.intl.string(j.t.p7eUrb),
        markers: n7.qh,
        stickToMarkers: !0,
        minValue: n7.qh["0"],
        maxValue: n7.qh[n7.qh.length - 1],
        useDefaultValue: () => (L.hH.useSetting() ? n7.y5 : n7.ES),
        useExternalValue: () => (0, g.bG)([i7.A], () => i7.A.messageGroupSpacing),
        getInitialValue: () => i7.A.messageGroupSpacing,
        onValueRender: n8,
        onMarkerRender: n8,
        asValueChanges: (e) => {
            switch (e) {
                case 0:
                case 4:
                case 8:
                case 16:
                case 24:
                    (0, nN.AC)(e);
            }
        },
    });
var n9 = i(775121);
let se = (0, a.sN)(u.X.APPEARANCE_ZOOM, {
        usePredicate: () => eY.isPlatformEmbedded,
        useTitle: () => j.intl.string(j.t.i19n5L),
        useSubtitle: () => j.intl.format(j.t["x9PK/3"], { modKey: n9.A.modKey }),
        markers: eA.hH7.ZOOM_SCALES,
        stickToMarkers: !0,
        minValue: eA.hH7.ZOOM_SCALES["0"],
        maxValue: eA.hH7.ZOOM_SCALES[eA.hH7.ZOOM_SCALES.length - 1],
        useDefaultValue: () => eA.hH7.ZOOM_DEFAULT,
        getInitialValue: () => i7.A.zoom,
        useExternalValue: () => (0, g.bG)([i7.A], () => i7.A.zoom),
        onValueRender: (e) => `${e.toFixed(0)}%`,
        setValue: (e) => (0, nN.Qp)(e),
        useSearchTerms: () => [j.intl.string(j.t.ip0uSf)],
    }),
    st = (0, a.zZ)(u.X.VISUAL_DENSITY_CATEGORY, {
        useTitle: () => j.intl.string(j.t.VKYWk8),
        buildLayout: () => [n2, n4, n5, se],
    }),
    si = (0, a.t_)(u.X.ACCESSIBILITY_PANEL, {
        useTitle: () => j.intl.string(j.t.G0neg7),
        buildLayout: () => [n1, st, nU, nK, nx],
        decoration: {
            type: h.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                let e = L.hH.useSetting(),
                    t = L.jW.useSetting(),
                    i = S.useMemo(
                        () => [
                            nl(
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
                            nl(
                                j.intl.formatToPlainString(j.t["4rDfgM"], {
                                    link: "https://discord.com/accessibility",
                                }),
                            ),
                        ],
                        [t],
                    ),
                    n = (0, g.bG)([i7.A], () => i7.A.messageGroupSpacing);
                return (0, E.jsx)(i3.M, {
                    "aria-hidden": !0,
                    children: (0, E.jsxs)("section", {
                        children: [
                            (0, E.jsx)(eP.D, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                className: ni.Vf,
                                children: j.intl.string(j.t.RC22qg),
                            }),
                            (0, E.jsxs)(tP.Ip, {
                                className: ni.VH,
                                children: [
                                    (0, E.jsx)("ol", {
                                        className: ni.DZ,
                                        style: { gap: n },
                                        "aria-label": j.intl.string(j.t.xfjsEV),
                                        children: i.map((t) =>
                                            (0, E.jsx)(
                                                "li",
                                                {
                                                    children: (0, E.jsx)(ne.A, {
                                                        message: t,
                                                        channel: nn,
                                                        compact: e,
                                                        author: { ...(0, i9.p_)(t), colorString: "#dd80f4" },
                                                    }),
                                                },
                                                t.id,
                                            ),
                                        ),
                                    }),
                                    (0, E.jsxs)("div", {
                                        className: ni.Jb,
                                        children: [
                                            (0, E.jsx)("div", {
                                                className: ni.HD,
                                                children: ns.map((e) => {
                                                    let { status: t, discriminator: i, mobile: n = !1 } = e;
                                                    return (0, E.jsx)(
                                                        i6.eu,
                                                        {
                                                            status: t,
                                                            isMobile: n,
                                                            size: i4._3.SIZE_32,
                                                            src: nt.Ay.getDefaultAvatarURL(void 0, i),
                                                            "aria-label": j.intl.string(j.t.VKE5TK),
                                                        },
                                                        t,
                                                    );
                                                }),
                                            }),
                                            (0, E.jsx)(eG.$, {
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
    sn = (0, a.i4)(u.X.ACCESSIBILITY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.G0neg7),
        icon: i2.c,
        useMenu: nr.A,
        buildLayout: () => [si],
    });
var ss = i(650809),
    sl = i(636537),
    sr = i(228366),
    sa = i(74396),
    so = i(269880),
    su = i(55619),
    sd = i(777666),
    sc = i(314116),
    sg = i(19575),
    sm = i(546385);
let sA = (0, a.E2)(u.X.HARDWARE_ACCELERATION, {
    usePredicate: () => c.Av && !(0, c.cX)(),
    useSearchTerms: () => [j.intl.string(j.t["/HIxyY"]), j.intl.string(j.t.B0hqpb)],
    Component: function () {
        let [e] = S.useState(() => sg.Ay.getEnableHardwareAcceleration()),
            t = j.intl.string(j.t["/HIxyY"]),
            i = j.intl.string(j.t.B0hqpb);
        return (0, E.jsxs)(Z.B, {
            children: [
                (0, E.jsx)(q.d, { label: t, description: i, checked: e, onChange: sh }),
                !e && (0, E.jsx)(sm.A, { look: sm.k.WARNING, children: j.intl.string(j.t.j7S6IX) }),
            ],
        });
    },
});
function sh(e) {
    let t = e ? j.intl.format(j.t.LYXRxL, {}) : j.intl.format(j.t.uDP3Kz, {});
    (0, sc.A)({
        title: j.intl.string(j.t.aqpAvn),
        subtitle: t,
        confirmText: j.intl.string(j.t.vT7ckk),
        onConfirm: () => {
            sg.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
let sE = (0, a.zD)(u.X.SHOW_GAME_LIBRARY, {
        usePredicate: () => (0, g.bG)([tv.A], () => tv.A.hasLibraryApplication()),
        useTitle: () => j.intl.string(j.t.fi3UQN),
        useSubtitle: () => j.intl.string(j.t["8mYp37"]),
        useValue: () => !L.l_.useSetting(),
        setValue: (e) => L.l_.updateSetting(!e),
    }),
    sS = (0, a.zZ)(u.X.APPEARANCE_ADVANCED_CATEGORY, {
        useTitle: () => j.intl.string(j.t["8/udY0"]),
        buildLayout: () => [...((0, o.SB)("AppearanceAdvancedCategory_buildLayout") ? [] : [sA]), sE],
    });
var sT = i(565645);
let sx = (0, a.zD)(u.X.CHAT_EMOJI_CONVERT_EMOTICONS, {
        useTitle: () => j.intl.string(j.t["79qal8"]),
        useSubtitle: () =>
            j.intl.format(j.t.GejoQK, { emojiHook: (e, t) => (0, E.jsx)(sT.A, { emojiName: "\uD83D\uDE42" }, t) }),
        useValue: L.j7.useSetting,
        setValue: L.j7.updateSetting,
    }),
    sp = (0, a.zD)(u.X.ENABLE_SEND_BUTTON, {
        useTitle: () => j.intl.string(j.t["I/5LyL"]),
        useValue: () => (0, g.bG)([i7.A], () => i7.A.isSubmitButtonEnabled),
        setValue: () => (0, nN.Xt)(),
    }),
    sf = (0, a.zD)(u.X.CHAT_TEXT_BOX_PREVIEWS, {
        useTitle: () => j.intl.string(j.t.AqGrEI),
        useValue: L.SI.useSetting,
        setValue: (e) => {
            eo.default.track(eA.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: e,
                location: { section: eA.JJy.SETTINGS_TEXT_AND_IMAGES },
            }),
                L.SI.updateSetting(e);
        },
    }),
    sN = (0, a.zD)(u.X.CHAT_STICKERS_AUTOCOMPLETE, {
        useTitle: () => j.intl.string(j.t["d+It2U"]),
        useValue: L.ML.useSetting,
        setValue: (e) => {
            eo.default.track(eA.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                enabled: e,
                location: { section: eA.JJy.SETTINGS_TEXT_AND_IMAGES },
                location_stack: [e1.A.TEXT_AND_IMAGES],
            }),
                L.ML.updateSetting(e);
        },
    }),
    s_ = (0, a.zZ)(u.X.APPEARANCE_CHAT_BOX_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Ob7VMB),
        useSearchTerms: () => [j.intl.string(j.t.onqU6o)],
        buildLayout: () => [sf, sx, sN, sp],
    });
var sI = i(526162),
    sC = i(793943),
    sb = i(792656),
    sv = i(830543),
    sy = i(785007),
    sj = i(806932),
    sO = i(915089),
    sR = i(174197),
    sL = i(788868);
let sD = (0, a.E2)(u.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [j.intl.string(j.t.gnwxvT)],
    Component: function () {
        let e = (0, sO.GV)(),
            { ref: t, ...i } = (0, sy._u)({ orientation: "horizontal", labelledBy: e }),
            n = (0, g.bG)([sI.A], () => sI.A.isUpsellPreview);
        return (
            (0, eL.Ay)(() => {
                n &&
                    eo.default.track(eA.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: sL.e.APP_ICON_UPSELL,
                        location_stack: [e1.A.USER_SETTINGS],
                    });
            }),
            (0, E.jsx)("div", {
                ...i,
                ref: t,
                children: (0, E.jsx)(Z.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    children: (0, E.jsx)(sj.m, { disabled: n, size: sR.N8.SIZE_48 }),
                }),
            })
        );
    },
});
function sP() {
    (0, sC.nf)(sC.HP.APP_ICON), (0, sv.default)();
}
function sG() {
    return (0, E.jsx)(sb.A, {
        subscriptionTier: sL.pe.TIER_2,
        defaultTextOverride: j.intl.string(j.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: eA.ZSU.BUTTON_CTA, objectType: eA.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
let sM = (0, a.zZ)(u.X.APPEARANCE_IN_APP_ICON_CATEGORY, {
        useTitle: () => j.intl.string(j.t.RPh2ou),
        useSubtitle: () => j.intl.string(j.t.IgENJo),
        useHeaderDecoration: function () {
            let e = (0, g.bG)([sI.A], () => sI.A.isUpsellPreview);
            return S.useMemo(() => {
                let t = [];
                return (
                    t.push({
                        id: "preview-icon-button",
                        type: h.UV.BUTTON,
                        text: j.intl.string(j.t["6acvnZ"]),
                        onClick: sP,
                    }),
                    e && t.push({ id: "upsell-button", type: h.UV.STRONGLY_DISCOURAGED_CUSTOM, button: sG }),
                    { type: h.WX.BUTTON_GROUP, buttons: t }
                );
            }, [e]);
        },
        buildLayout: () => [sD],
    }),
    sU = (0, a.AK)(u.X.APPEARANCE_CHAT_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.UDr3Iy),
        useSearchTerms: () => [j.intl.string(j.t.UDr3Iy)],
        destinationKey: u.X.ACCESSIBILITY_PANEL,
    }),
    sV = (0, a.gN)(u.X.APPEARANCE_CHAT_RELATED_SETTINGS, { buildLayout: () => [sU] });
var sk = i(379587),
    sw = i(452027),
    sF = i(976860),
    sB = i(474090),
    sz = i(181079),
    sX = i(422258),
    sY = i(668267),
    sH = i(313281),
    sK = i(335993);
let sW = tN.A.getArticleURL(eA.MVz.FAVORITES_GUILD);
function sZ() {
    let { analyticsLocations: e } = (0, nW.Ay)(e1.A.USER_SETTINGS_FAVORITES),
        t = S.useCallback(() => {
            (0, sY.mv)("settings_page"), (0, sF.uh)(eA.YYv), (0, sv.default)();
        }, []);
    return (0, E.jsx)(nW.f5, {
        value: e,
        children: (0, E.jsx)(sw.D, {
            label: j.intl.string(sK.default.OT1NK5),
            description: j.intl.format(sK.default.GR2KOG, { helpCenterLink: sW }),
            layout: "horizontal-responsive",
            badge: "beta",
            children: (0, E.jsxs)(Z.B, {
                direction: "horizontal",
                gap: 8,
                fullWidth: !1,
                children: [
                    (0, E.jsx)(eG.$, { variant: "secondary", text: j.intl.string(sK.default["7WwLnr"]), onClick: t }),
                    (0, E.jsx)(sb.A, {
                        subscriptionTier: sL.pe.TIER_2,
                        defaultTextOverride: j.intl.string(sK.default["20sYUU"]),
                    }),
                ],
            }),
        }),
    });
}
let sq = (0, a.E2)(u.X.CHAT_FAVORITES_TOGGLE, {
        usePredicate: () => (0, sk.m)({ location: "FavoritesGuildToggle" }).enabled,
        useSearchTerms: () => [j.intl.string(sK.default.OT1NK5)],
        Component: function () {
            let e = (0, g.bG)([sz.A], () => sz.A.favoriteGuildEnabled),
                t = (0, g.bG)([io.default], () => {
                    let e = io.default.getCurrentUser();
                    return null != e && sB.Ay.isPremiumExactly(e, sL.PremiumTypes.TIER_2);
                }),
                i = (0, sH.DZ)(),
                n = S.useCallback(
                    (e) => {
                        (0, sX.tV)(e, "settings_page"), !e && i && (0, sF.pX)(eA.BVt.ME);
                    },
                    [i],
                );
            return t
                ? (0, E.jsx)(q.d, {
                      checked: e,
                      description: j.intl.format(sK.default.GR2KOG, { helpCenterLink: sW }),
                      onChange: n,
                      label: j.intl.string(sK.default.OT1NK5),
                      badge: "beta",
                  })
                : (0, E.jsx)(sZ, {});
        },
    }),
    sQ = (0, a.zD)(u.X.CHAT_INLINE_MEDIA_LINKS, {
        useTitle: () => j.intl.string(j.t.U47N1p),
        useValue: L.hD.useSetting,
        setValue: L.hD.updateSetting,
    }),
    sJ = (0, a.zD)(u.X.CHAT_INLINE_MEDIA_UPLOADS, {
        useTitle: () => j.intl.string(j.t.VP11No),
        useValue: L.X6.useSetting,
        setValue: L.X6.updateSetting,
    }),
    s$ = (0, a.FW)(u.X.CHAT_INLINE_FIELD_SET, {
        useTitle: () => j.intl.string(j.t["9nyle0"]),
        buildLayout: () => [sQ, sJ],
    }),
    s0 = (0, a.zD)(u.X.CHAT_EMBEDS_RENDER_EMBEDS, {
        useTitle: () => j.intl.string(j.t["5bK9vw"]),
        useValue: L.rs.useSetting,
        setValue: L.rs.updateSetting,
    }),
    s1 = (0, a.zD)(u.X.CHAT_EMOJI_RENDER_REACTIONS, {
        useTitle: () => j.intl.string(j.t["zge/fP"]),
        useValue: L.jW.useSetting,
        setValue: L.jW.updateSetting,
    });
var s2 = i(817281);
let s3 = (0, a.zD)(u.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
        useTitle: () => j.intl.string(j.t.JgjNG3),
        useSubtitle: () => {
            if (!L.hH.useSetting())
                return j.intl.format(j.t["31PRaj"], {
                    a11yHook: (e, t) =>
                        (0, E.jsx)(
                            et.D,
                            {
                                tag: "a",
                                onClick: () => (0, eH.openUserSettings)(u.X.APPEARANCE_MESSAGE_DISPLAY_MODE),
                                children: e,
                            },
                            t,
                        ),
                });
        },
        useDisabled: () => !L.hH.useSetting(),
        useValue: () => {
            let e = (0, g.bG)([nj.Ay], () => nj.Ay.displayCompactAvatars);
            return !L.hH.useSetting() || e;
        },
        setValue: (e) => {
            s2.Ay.updatedUnsyncedSettings({ displayCompactAvatars: e });
        },
    }),
    s6 = (0, a.Hn)(u.X.CHAT_SPOILERS_SHOW_SPOILERS, {
        useTitle: () => j.intl.string(j.t.QgwmVz),
        useOptions: () => [
            { value: eA.P6Q.ON_CLICK, id: eA.P6Q.ON_CLICK, label: j.intl.string(j.t["KFH/me"]) },
            { value: eA.P6Q.ALWAYS, id: eA.P6Q.ALWAYS, label: j.intl.string(j.t.Pe1RbL) },
            { value: eA.P6Q.IF_MODERATOR, id: eA.P6Q.IF_MODERATOR, label: j.intl.string(j.t.K5VTBE) },
        ],
        useValue: L.gs.useSetting,
        setValue: L.gs.updateSetting,
    }),
    s4 = (0, a.zD)(u.X.CHAT_THREADS_SPLIT_VIEW, {
        useTitle: () => j.intl.string(j.t.AInv5m),
        useValue: L.SY.useSetting,
        setValue: L.SY.updateSetting,
    }),
    s7 = (0, a.zZ)(u.X.APPEARANCE_MESSAGES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.OIgYlQ),
        useSearchTerms: () => [j.intl.string(j.t["/VQax8"])],
        buildLayout: () => [s$, s0, s1, s6, s4, s3, sq, sV],
    });
var s8 = i(753806),
    s5 = i(145331);
let s9 = (0, a.Qx)(u.X.MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
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
            t ? s8.A.cleanUpPrivateChannelSearchState() : s8.A.cleanUpSearchState({ type: eA.I4_.DMS }),
                (0, s5._k)({
                    prevIsCrossDMSettingEnabled: L.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: s5.vy.USER_SETTINGS,
                }),
                L.Hu.updateSetting(t);
        },
    }),
    le = (0, a.zZ)(u.X.APPEARANCE_SEARCH_CATEGORY, {
        useTitle: () => j.intl.string(j.t["5h0QOP"]),
        buildLayout: () => [s9],
    }),
    lt = (0, a.zD)(u.X.STREAMING_AUTO_STREAMER_MODE, {
        useTitle: () => j.intl.string(j.t.IxjaoF),
        useValue: function () {
            return (0, g.bG)([eF.A], () => {
                let { autoToggle: e } = eF.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            su.A.update({ autoToggle: e });
        },
        usePredicate: function () {
            return c.Av;
        },
    }),
    li = (0, a.zD)(u.X.STREAMING_STREAMER_MODE, {
        useTitle: () => j.intl.string(j.t.TGNg6T),
        useSubtitle: () => j.intl.string(j.t["4nXLnE"]),
        useValue: function () {
            return (0, g.bG)([eF.A], () => {
                let { enabled: e } = eF.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            su.A.update({ enabled: e });
        },
    });
var ln = i(77729),
    ls = i(349230);
let ll = [],
    lr = (0, a.Hn)(u.X.STREAMER_MODE_HIDE_OVERLAY_WIDGETS, {
        selectionMode: "multiple",
        useTitle: () => j.intl.string(j.t.VCDSLW),
        useSearchTerms: () => [j.intl.string(j.t.VCDSLW)],
        usePredicate: () => {
            let e = (0, eK.b_)(),
                t = (0, ek.Mn)("StreamerModeSettings");
            return e && t;
        },
        useOptions: function () {
            return S.useMemo(() => {
                let e = [];
                for (let [t, i] of Object.entries(ls.A))
                    null != i.streamerModeLabel &&
                        (null == i.predicate || i.predicate()) &&
                        e.push({ id: t, value: t, label: i.streamerModeLabel() });
                return e;
            }, []);
        },
        useValue: function () {
            return (0, g.bG)([eF.A], () => eF.A.getSettings().disabledOverlayWidgets ?? ll);
        },
        setValue: (e) => su.A.update({ disabledOverlayWidgets: e }),
        closeOnSelect: !1,
        wrapTags: !0,
    }),
    la = (0, a.zD)(u.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => j.intl.string(j.t.LSBUGR),
        useValue: () =>
            (0, g.bG)([eF.A], () => {
                let { hidePersonalInformation: e } = eF.A.getSettings();
                return e;
            }),
        setValue: (e) => su.A.update({ hidePersonalInformation: e }),
    }),
    lo = (0, a.zD)(u.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => j.intl.string(j.t.uWBOri),
        useValue: () =>
            (0, g.bG)([eF.A], () => {
                let { hideInstantInvites: e } = eF.A.getSettings();
                return e;
            }),
        setValue: (e) => su.A.update({ hideInstantInvites: e }),
    }),
    lu = (0, a.zD)(u.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => j.intl.string(j.t.OrqYDP),
        useValue: () =>
            (0, g.bG)([eF.A], () => {
                let { disableSounds: e } = eF.A.getSettings();
                return e;
            }),
        setValue: (e) => su.A.update({ disableSounds: e }),
    }),
    ld = (0, a.zD)(u.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.sUAbLd),
        useValue: () =>
            (0, g.bG)([eF.A], () => {
                let { disableNotifications: e } = eF.A.getSettings();
                return e;
            }),
        setValue: (e) => su.A.update({ disableNotifications: e }),
    }),
    lc = (0, a.zD)(u.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => j.intl.string(j.t["iA81+a"]),
        useSubtitle: () => j.intl.string(j.t.P4vj0h),
        useValue: () =>
            (0, g.bG)([eF.A], () => {
                let { enableContentProtection: e } = eF.A.getSettings();
                return e;
            }),
        setValue: (e) => su.A.update({ enableContentProtection: e }),
        usePredicate: () => ln.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    lg = (0, a.FW)(u.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.xYhOEh),
        buildLayout: () => [la, lo, lu, ld, lc, lr],
    }),
    lm = (0, a.zZ)(u.X.STREAMER_MODE_CATEGORY, {
        useTitle: () => j.intl.string(j.t.S5GfOW),
        buildLayout: () => [li, lt, lg],
    });
var lA = i(47671),
    lh = i(665267),
    lE = i(414133),
    lS = i(412848);
let lT = (0, a.Hn)(u.X.APPEARANCE_GUILD_THEME_DEFAULT_PREFERENCE, {
        useTitle: () => j.intl.string(j.t.Q7mm4g),
        useSearchTerms: () => [j.intl.string(lS.default["/6NbRv"])],
        useOptions: () => [
            { id: "guild", label: j.intl.string(j.t["hrS/Pc"]), value: X.tI.GUILD },
            { id: "personal", label: j.intl.string(j.t.mlvXIq), value: X.tI.PERSONAL },
        ],
        useValue: () => L.zY.useSetting(),
        setValue: L.zY.updateSetting,
        usePredicate: () => (0, lE.OS)("GuildThemeDefaultPreferenceSetting"),
    }),
    lx = (0, a.zD)(u.X.SYNC_PROFILE_THEMES, {
        useTitle: () => j.intl.string(j.t.C00w4l),
        useValue: () => (0, g.bG)([i7.A], () => i7.A.syncProfileThemeWithUserTheme),
        setValue: () => (0, nN.M1)(),
    });
var lp = i(284016);
let lf = (0, a.zD)(u.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => j.intl.string(j.t["/B+kEV"]),
    useSearchTerms: () => [j.intl.string(j.t.Ksh3ik)],
    useValue: function () {
        return (0, g.bG)([lp.A], () => !1 !== lp.A.shouldSync("appearance"));
    },
    setValue: function (e) {
        var t;
        let i = iC.A.theme,
            n = lA.A.gradientPreset?.id ?? null,
            s = L.eh.getSetting()?.customUserThemeSettings != null;
        (t = eA.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
            sr.h.dispatch({
                type: "TRACK",
                event: t,
                properties: { is_sync_enabled: e, base_theme: i, client_theme: n, has_custom_theme: s },
            }),
            s2.Ay.setShouldSyncAppearanceSettings(e);
    },
});
var lN = i(98596);
let l_ = (0, a.AK)(u.X.APPEARANCE_THEME_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.nhVQDJ),
        useSearchTerms: () => [j.intl.string(j.t.nhVQDJ)],
        destinationKey: u.X.ACCESSIBILITY_PANEL,
    }),
    lI = (0, a.gN)(u.X.APPEARANCE_THEME_RELATED_SETTINGS, { buildLayout: () => [l_] }),
    lC = (0, a.zZ)(u.X.APPEARANCE_THEME_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Ksh3ik),
        useInlineNotice: function () {
            return (0, g.bG)([i7.A], () => i7.A.useForcedColors)
                ? {
                      type: h.lT.INLINE_NOTICE,
                      noticeType: "info",
                      useText: () =>
                          (0, nP.D)()
                              ? j.intl.format(j.t.Jae48E, {
                                    onClick: () => {
                                        (0, eH.openUserSettings)(u.X.SYNC_FORCED_COLORS);
                                    },
                                })
                              : j.intl.string(j.t.AUMSZP),
                  }
                : null;
        },
        useHeaderDecoration: function () {
            return (0, g.bG)([lA.A, i7.A], () => i7.A.useForcedColors || lA.A.isPreview)
                ? null
                : {
                      type: h.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "open-client-themes-button",
                              type: h.UV.BUTTON,
                              text: j.intl.string(j.t["E+COuA"]),
                              onClick: lh.J3,
                          },
                      ],
                  };
        },
        buildLayout: () => [lN.k, lf, lx, lT, lI],
    }),
    lb = (0, a.t_)(u.X.APPEARANCE_PANEL, {
        initialize: function () {
            sa.A.isFetching() ||
                (sr.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_START" }),
                sl.Bo.get({ url: eA.Rsh.USERS_ME_CUSTOM_THEMES, oldFormErrors: !0, rejectWithError: !0 })
                    .then((e) => {
                        sr.h.dispatch({
                            type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS",
                            themes: e.body?.custom_themes ?? [],
                        });
                    })
                    .catch((e) => {
                        sr.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_FAILURE", error: e });
                    }));
        },
        useTitle: () => j.intl.string(j.t["iHH+ky"]),
        buildLayout: () => [lC, sM, s7, s_, le, lm, sS],
    }),
    lv = [
        { badgeType: h.Xi.NEW, dismissibleContent: eU.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE },
        {
            badgeType: h.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: eU.M.FAVORITES_GUILD_NEW_BADGE,
            StronglyDiscouragedCustomComponent: function () {
                return (0, E.jsx)(sd.JI, { text: j.intl.string(j.t.y2b7CA) });
            },
        },
    ],
    ly = (0, a.i4)(u.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["iHH+ky"]),
        icon: ss.B,
        useMenu: function () {
            let e,
                t,
                i,
                n = (0, so.A)(),
                s =
                    ((e = L.D_.useSetting()),
                    (t = L.SI.useSetting()),
                    e
                        ? null
                        : (0, E.jsx)(ee.sL, {
                              id: "preview-markdown-toggle",
                              label: j.intl.string(j.t.sHJ9wZ),
                              action: () => {
                                  let e = !t;
                                  eo.default.track(eA.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                                      enabled: e,
                                      location: { section: eA.JJy.SETTINGS_CONTEXT_MENU },
                                  }),
                                      L.SI.updateSetting(e);
                              },
                              checked: t,
                          })),
                l =
                    ((i = (0, g.bG)([eF.A], () => eF.A.enabled, [])),
                    (0, E.jsx)(ee.sL, {
                        id: "streamer-mode-toggle",
                        label: j.intl.string(j.t.p9ZAJZ),
                        action: () => {
                            su.A.setEnabled(!i);
                        },
                        checked: i,
                    }));
            return S.useMemo(() => {
                let e = [...n];
                return (
                    null != s &&
                        e.push((0, E.jsx)(ee.rX, { label: j.intl.string(j.t.Ob7VMB), children: s }, "text-and-images")),
                    null != l && e.push((0, E.jsx)(ee.rX, { children: l }, "streamer-mode")),
                    e
                );
            }, [n, s, l]);
        },
        getDismissibleBadges: () => lv,
        buildLayout: () => [lb],
    });
var lj = i(410767),
    lO = i(691885),
    lR = i(408278),
    lL = i(241326),
    lD = i(885574),
    lP = i(475358),
    lG = i(28647),
    lM = i(337371),
    lU = i(695366),
    lV = i(761853),
    lk = i(364094);
function lw(e) {
    let { game: t, application: i } = e;
    return null == t || null == i
        ? (0, E.jsx)("div", {
              className: lk.zc,
              children: (0, E.jsx)(lU.E, { size: "sm", color: es.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, E.jsxs)("div", {
              className: lk.nt,
              children: [
                  (0, E.jsx)(p.A, { game: i, pid: t.pid, size: p.M.MEDIUM }),
                  (0, E.jsx)("div", {
                      className: lk.Am,
                      children: (0, E.jsx)(lU.E, { size: "sm", color: es.A.colors.TEXT_FEEDBACK_WARNING }),
                  }),
              ],
          });
}
function lF(e) {
    let t = (0, g.bG)([lV.Ay], () => lV.Ay.getMode()),
        { runningGame: i, runningGameApplication: n } = tl();
    null == i || i.elevated || ((i = void 0), (n = void 0));
    let s = (0, t_.NP)(),
        l = s && null != i && t === eA.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? l : s, runningGame: i, runningGameApplication: n };
}
function lB(e) {
    let { className: t, sourcePage: i } = e,
        { canPrompt: n, runningGame: s, runningGameApplication: l } = lF(i);
    return n
        ? (0, E.jsxs)("div", {
              className: e6()(lk.kL, t),
              children: [
                  (0, E.jsx)(lw, { game: s, application: l }),
                  (0, E.jsxs)("div", {
                      className: lk.FS,
                      children: [
                          (0, E.jsx)(ei.E, {
                              variant: "text-sm/medium",
                              color: "text-strong",
                              children:
                                  "voice" === i
                                      ? j.intl.string(j.t.vxfv7v)
                                      : null != s
                                        ? j.intl.string(j.t.fAYU2G)
                                        : j.intl.string(j.t["9V4X/c"]),
                          }),
                          (0, E.jsx)(ei.E, {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              children: j.intl.format(j.t["/y6htt"], {
                                  helpCenterLink: tN.A.getArticleURL(eA.MVz.SYSTEM_SERVICE),
                              }),
                          }),
                      ],
                  }),
                  (0, E.jsx)(eG.$, {
                      variant: "secondary",
                      size: "sm",
                      text: j.intl.string(j.t["1iI46O"]),
                      onClick: function () {
                          (0, t_.sL)(i + (null != s ? "-with-game" : "-no-game"));
                      },
                  }),
              ],
          })
        : null;
}
var lz = i(189213),
    lX = i(292666),
    lY = i(320989),
    lH = i(978263);
let lK = [];
var lW = i(235986),
    lZ = i(820785),
    lq = i(734057),
    lQ = i(808728),
    lJ = i(967198),
    l$ = i(926140),
    l0 = i(746642);
function l1() {}
let l2 = [l$.rD.VOICE_CHANNEL];
function l3(e) {
    e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0);
}
function l6() {
    return (0, E.jsx)("div", {
        className: l0.i1,
        children: (0, E.jsx)(ei.E, {
            variant: "text-md/medium",
            color: "text-muted",
            className: l0.GN,
            children: j.intl.string(j.t.zHjCd1),
        }),
    });
}
function l4(e) {
    let { keybind: t, className: i } = e,
        n = S.useRef(t);
    S.useEffect(() => {
        n.current = t;
    });
    let [s, l] = S.useState(t.params?.channelId ?? void 0),
        r = S.useCallback(() => {
            (0, Y.openModalLazy)(
                async () => (e) =>
                    (0, E.jsx)(l7, {
                        ...e,
                        onSelect: (e) => {
                            l(e), tX.A.setKeybind({ ...n.current, params: { channelId: e } });
                        },
                    }),
            );
        }, []);
    return (0, E.jsx)("div", {
        className: e6()(l0.a8, i),
        children: (0, E.jsx)(sw.D, {
            label: j.intl.string(j.t.q4JpM8),
            children: (0, E.jsxs)(lW.A, {
                align: lW.A.Align.STRETCH,
                children: [
                    (0, E.jsx)("div", { className: l0.$X, children: (0, E.jsx)(l8, { channelId: s }) }),
                    (0, E.jsx)(lW.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, E.jsx)(eG.$, { variant: "primary", text: j.intl.string(j.t.Dm8O4e), onClick: r }),
                    }),
                ],
            }),
        }),
    });
}
function l7(e) {
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
                [a, o] = S.useState(lK),
                u = S.useCallback((e, t) => {
                    "" === (t = t.trim()).trim() ? o(lK) : o(e);
                }, []);
            S.useEffect(
                () =>
                    lY.A.addRouteChangeListener(() => {
                        r("");
                    }),
                [],
            );
            let [d] = S.useState(() => new lH.A(u, i, void 0, n));
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
        })({ visible: !0, autocompleterResultTypes: l2, autocompleterBeforeCreateSearchContext: l3 }),
        c =
            ((t = "" !== o),
            (i = (0, g.yK)([lQ.Ay, lq.A, lJ.A], () => {
                let e = lJ.A.getGuildId();
                if (t || null == e) return [];
                let i = [];
                for (let t of lQ.Ay.getVocalChannelIds(e)) {
                    let e = lq.A.getChannel(t);
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
            if (e?.type === l$.rD.VOICE_CHANNEL) return e.record.id;
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
                                  if (e?.type === l$.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == i) return null;
                          let n = null != i.parent_id ? lq.A.getChannel(i.parent_id) : void 0,
                              r = ed.A.getGuild(i.guild_id);
                          return (0, E.jsx)(
                              lZ.c3,
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
                                      null != r ? (0, E.jsx)("div", { className: l0.J5, children: r.name }) : null,
                              },
                              i.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, E.jsx)(l6, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, E.jsx)(lz.Modal, {
        transitionState: n,
        onClose: s,
        title: j.intl.string(j.t.Dm8O4e),
        subtitle: j.intl.string(j.t.q4JpM8),
        actions: void 0,
        input: (0, E.jsx)(lX.k, {
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
                                if (e?.type === l$.rD.VOICE_CHANNEL) return e.record;
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
function l8(e) {
    let { channelId: t } = e,
        {
            channel: i,
            category: n,
            guild: s,
        } = (0, g.cf)([lq.A, ed.A], () => {
            let e = null != t ? lq.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? lq.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? ed.A.getGuild(e.guild_id) : void 0,
                  }
                : { channel: void 0, category: void 0, guild: void 0 };
        });
    return null == i
        ? (0, E.jsx)(ei.E, {
              variant: "text-md/medium",
              color: "text-muted",
              className: l0.GN,
              children: j.intl.string(j.t["/fYIK7"]),
          })
        : (0, E.jsx)(lZ.c3, {
              channel: i,
              id: i.id,
              category: n,
              onClick: l1,
              onFocus: l1,
              onMouseEnter: l1,
              focused: !1,
              children: null != s ? (0, E.jsx)("div", { className: l0.J5, children: s.name }) : null,
          });
}
function l5(e) {
    let { className: t, children: i } = e;
    return (0, E.jsx)("div", { className: t, children: (0, E.jsx)(Z.B, { gap: 16, children: i }) });
}
var l9 = i(734066),
    re = i(880144),
    rt = i(614455);
function ri() {
    let e = (0, g.bG)([eB.Ay], () => eB.Ay.getState()),
        t = (0, g.bG)([lV.Ay], () => (0, re.A)(lV.Ay)),
        i = (0, g.bG)([rt.A], () => rt.A.isSupported),
        n = (0, l9.sw)(),
        s = (0, l9.BW)(),
        l = (0, eY.isWindows)();
    return {
        customizableKeybinds: (function (e) {
            let { keybinds: t, enableClips: i, enableScreenshotKeybind: n, allowSoundboard: s } = e;
            return eZ()(t)
                .reject(
                    (e) =>
                        e.managed &&
                        ![
                            eA.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                            eA.hCu.SAVE_CLIP,
                            eA.hCu.SAVE_SCREENSHOT,
                        ].includes(e.action),
                )
                .reject((e) => !i && (e.action === eA.hCu.SAVE_CLIP || e.action === eA.hCu.SAVE_SCREENSHOT))
                .reject((e) => !n && e.action === eA.hCu.SAVE_SCREENSHOT)
                .reject((e) => !s && (e.action === eA.hCu.SOUNDBOARD || e.action === eA.hCu.SOUNDBOARD_HOLD))
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
                    { id: "unassigned", value: eA.hCu.UNASSIGNED, label: j.intl.string(j.t["0Uh579"]) },
                    { id: "push-to-talk", value: eA.hCu.PUSH_TO_TALK, label: j.intl.string(j.t.Y5lgTP) },
                    {
                        id: "push-to-talk-priority",
                        value: eA.hCu.PUSH_TO_TALK_PRIORITY,
                        label: j.intl.string(j.t.DkSwJ2),
                    },
                    { id: "push-to-mute", value: eA.hCu.PUSH_TO_MUTE, label: j.intl.string(j.t.hSCRqd) },
                    { id: "vad-priority", value: eA.hCu.VAD_PRIORITY, label: j.intl.string(j.t["49d6Nd"]) },
                    { id: "toggle-mute", value: eA.hCu.TOGGLE_MUTE, label: j.intl.string(j.t.PlkYKD) },
                    { id: "toggle-deafen", value: eA.hCu.TOGGLE_DEAFEN, label: j.intl.string(j.t.NvGq1K) },
                    { id: "toggle-voice-mode", value: eA.hCu.TOGGLE_VOICE_MODE, label: j.intl.string(j.t.Wa5H9S) },
                    {
                        id: "toggle-streamer-mode",
                        value: eA.hCu.TOGGLE_STREAMER_MODE,
                        label: j.intl.string(j.t.BK0Ncc),
                    },
                    { id: "toggle-camera", value: eA.hCu.TOGGLE_CAMERA, label: j.intl.string(j.t.hf8JVT) },
                ];
            return (
                t &&
                    (r.push({
                        id: "toggle-overlay-input-lock",
                        value: eA.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
                        label: j.intl.string(j.t.VsAZcC),
                    }),
                    r.push({
                        id: "activate-overlay-region-text-widget",
                        value: eA.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                        label: j.intl.string(j.t.hurHWo),
                    })),
                i &&
                    ((0, eY.isWindows)() || lV.Ay.getUseSystemScreensharePicker()) &&
                    r.push({
                        id: "toggle-go-live-streaming",
                        value: eA.hCu.TOGGLE_GO_LIVE_STREAMING,
                        label: j.intl.string(j.t.ybdjJD),
                    }),
                (0, eY.isDesktop)() &&
                    (r.push(
                        { id: "navigate-back", value: eA.hCu.NAVIGATE_BACK, label: j.intl.string(j.t.gRSaOa) },
                        { id: "navigate-forward", value: eA.hCu.NAVIGATE_FORWARD, label: j.intl.string(j.t.zOXpjU) },
                        {
                            id: "switch-to-voice-channel",
                            value: eA.hCu.SWITCH_TO_VOICE_CHANNEL,
                            label: j.intl.string(j.t.ty7Lxy),
                        },
                        {
                            id: "disconnect-from-voice-channel",
                            value: eA.hCu.DISCONNECT_FROM_VOICE_CHANNEL,
                            label: j.intl.string(j.t.CV7mT7),
                        },
                    ),
                    n &&
                        r.push(
                            { id: "soundboard", value: eA.hCu.SOUNDBOARD, label: j.intl.string(j.t.yPH4xm) },
                            {
                                id: "soundboard-hold",
                                value: eA.hCu.SOUNDBOARD_HOLD,
                                label: j.intl.string(j.t["1xFbP/"]),
                            },
                        ),
                    s &&
                        (r.push({ id: "save-clip", value: eA.hCu.SAVE_CLIP, label: j.intl.string(j.t.U4URzP) }),
                        l &&
                            r.push({
                                id: "save-screenshot",
                                value: eA.hCu.SAVE_SCREENSHOT,
                                label: j.intl.string(j.t["+WloFH"]),
                            }))),
                r
            );
        })({ overlaySupported: i, canGoLive: t, allowSoundboard: l, enableClips: n, enableScreenshotKeybind: s }),
        keybindDescriptions: (function (e) {
            let { overlaySupported: t, canGoLive: i, enableClips: n, enableScreenshotKeybind: s } = e,
                l = {
                    [eA.hCu.UNASSIGNED]: j.intl.string(j.t.rvlNLv),
                    [eA.hCu.PUSH_TO_MUTE]: j.intl.string(j.t.xtESim),
                    [eA.hCu.PUSH_TO_TALK]: j.intl.string(j.t.wTcBSy),
                    [eA.hCu.PUSH_TO_TALK_PRIORITY]: j.intl.string(j.t.FhHvWH),
                    [eA.hCu.TOGGLE_MUTE]: j.intl.string(j.t.X2fbUm),
                    [eA.hCu.TOGGLE_DEAFEN]: j.intl.string(j.t.MjREZV),
                    [eA.hCu.TOGGLE_VOICE_MODE]: j.intl.string(j.t.snm5YW),
                    [eA.hCu.TOGGLE_STREAMER_MODE]: j.intl.string(j.t.YszLLx),
                    [eA.hCu.VAD_PRIORITY]: j.intl.string(j.t.rSe8IZ),
                    [eA.hCu.TOGGLE_CAMERA]: j.intl.string(j.t.v1JBtL),
                };
            return (
                t && (l[eA.hCu.TOGGLE_OVERLAY_INPUT_LOCK] = j.intl.string(j.t.IoP5vc)),
                i && (0, eY.isWindows)() && (l[eA.hCu.TOGGLE_GO_LIVE_STREAMING] = j.intl.string(j.t.s4C238)),
                (0, eY.isDesktop)() &&
                    ((l[eA.hCu.NAVIGATE_BACK] = j.intl.string(j.t.nKDlEt)),
                    (l[eA.hCu.NAVIGATE_FORWARD] = j.intl.string(j.t.DK0FFk)),
                    (l[eA.hCu.SOUNDBOARD] = (0, eY.isWindows)()
                        ? j.intl.string(j.t["5wJefL"])
                        : j.intl.string(j.t.gzjsSP)),
                    (l[eA.hCu.SOUNDBOARD_HOLD] = (0, eY.isWindows)()
                        ? j.intl.string(j.t.RRkZc9)
                        : j.intl.string(j.t.laNlTl)),
                    n &&
                        ((l[eA.hCu.SAVE_CLIP] = j.intl.string(j.t.z3Wbam)),
                        s && (l[eA.hCu.SAVE_SCREENSHOT] = j.intl.string(j.t.m0zd57)))),
                l
            );
        })({ overlaySupported: i, canGoLive: t, enableClips: n, enableScreenshotKeybind: s }),
    };
}
var rn = i(581133);
function rs(e) {
    let { children: t } = e;
    return t([lM.Q_.MESSAGE, lM.Q_.NAVIGATION, lM.Q_.DND, lM.Q_.CHAT, lM.Q_.VOICE_AND_VIDEO, lM.Q_.MISCELLANEOUS]);
}
class rl extends S.PureComponent {
    handleActionChanged = (e) => {
        tX.A.setKeybind({ ...this.props.keybind, action: e });
    };
    handleShortcutChange = (e) => {
        tX.A.setKeybind({ ...this.props.keybind, shortcut: e });
    };
    handleDeleteKeybind = () => {
        tX.A.deleteKeybind(this.props.keybind.id);
    };
    handleEnableDisable = () => {
        let { keybind: e } = this.props;
        tX.A.setKeybind({ ...this.props.keybind, enabled: !e.enabled });
    };
    renderMessage() {
        let { keybind: e } = this.props,
            t = eq.dI(e.shortcut);
        return n9.A.hasBind(t)
            ? (0, E.jsx)(tf.p, { messageType: tf.Y.ERROR, children: j.intl.string(j.t["7lQlw3"]) })
            : iL.Yy.has(t)
              ? (0, E.jsx)(tf.p, {
                    messageType: tf.Y.ERROR,
                    children: j.intl.format(j.t.MOIaNd, {
                        keyboardNavArticle: tN.A.getArticleURL(eA.MVz.KEYBOARD_NAVIGATION),
                    }),
                })
              : (0, E.jsx)(ei.E, {
                    variant: "text-md/normal",
                    className: rn.qD,
                    children: this.props.keybindDescriptions[e.action],
                });
    }
    render() {
        let { managed: e, enabled: t } = this.props.keybind;
        return (0, E.jsxs)("div", {
            className: rn.YI,
            children: [
                (0, E.jsxs)("div", {
                    className: rn.PO,
                    children: [
                        (0, E.jsx)("div", {
                            className: rn.AS,
                            children: (0, E.jsx)(lO.l, {
                                selectionMode: "single",
                                label: j.intl.string(j.t.UUpAD6),
                                value: this.props.keybind.action,
                                options: this.props.keybindActionTypes,
                                onSelectionChange: this.handleActionChanged,
                                disabled: e,
                            }),
                        }),
                        (0, E.jsx)("div", {
                            className: rn.AS,
                            children: (0, E.jsx)(sw.D, {
                                label: j.intl.string(j.t["1La4tC"]),
                                children: (0, E.jsx)(tY.A, {
                                    defaultValue: this.props.keybind.shortcut,
                                    onChange: this.handleShortcutChange,
                                }),
                            }),
                        }),
                        !e &&
                            (0, E.jsx)("div", {
                                className: rn.d9,
                                children: (0, E.jsx)(lR.K, {
                                    variant: "icon-only",
                                    onClick: this.handleDeleteKeybind,
                                    icon: lL.u,
                                    "aria-label": j.intl.string(j.t.qEHmmB),
                                }),
                            }),
                        (0, E.jsx)("div", {
                            className: rn.ZW,
                            children: (0, E.jsx)(tr.m, {
                                text: j.intl.string(j.t.uCD7qK),
                                children: (0, E.jsx)("div", {
                                    children: (0, E.jsx)(q.d, { checked: t, onChange: this.handleEnableDisable }),
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
        return e === eA.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, E.jsx)(l4, { keybind: this.props.keybind }) : void 0;
    }
}
class rr extends S.PureComponent {
    handleAddKeybind = () => {
        tX.A.addKeybind();
    };
    renderKeybinds(e, t, i) {
        return e.map((n, s) =>
            (0, E.jsxs)(
                S.Fragment,
                {
                    children: [
                        (0, E.jsx)(rl, { keybind: n, keybindDescriptions: t, keybindActionTypes: i }, n.id),
                        s !== e.length - 1 ? (0, E.jsx)(eM.c, {}) : null,
                    ],
                },
                n.id,
            ),
        );
    }
    renderKeybindWarning() {
        return (0, E.jsxs)("div", {
            className: rn.$e,
            children: [
                (0, E.jsx)(lD.m, { size: "xs", color: es.A.colors.ICON_SUBTLE }),
                (0, E.jsx)(ei.E, {
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
                    className: iU.IE,
                    children: eY.isPlatformEmbedded
                        ? (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsxs)("div", {
                                      className: rn.OQ,
                                      children: [
                                          this.renderKeybindWarning(),
                                          (0, E.jsx)("div", {
                                              className: rn.c9,
                                              children: (0, E.jsx)(eG.$, {
                                                  size: "md",
                                                  onClick: this.handleAddKeybind,
                                                  text: j.intl.string(j.t.zk6Xbs),
                                                  variant: "primary",
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, E.jsx)(lB, { className: rn.Qo, sourcePage: "keybinds" }),
                                  e.length > 0 &&
                                      (0, E.jsxs)(E.Fragment, {
                                          children: [(0, E.jsx)(eM.c, {}), this.renderKeybinds(e, i, t)],
                                      }),
                                  (0, E.jsx)(eM.c, {}),
                              ],
                          })
                        : (0, E.jsx)(tf.p, {
                              messageType: tf.Y.INFO,
                              className: rn.Ly,
                              children: j.intl.format(j.t.mPi3F3, { downloadLink: eA.X7G.DOWNLOAD }),
                          }),
                }),
                (0, E.jsx)(ra, {}),
            ],
        });
    }
}
function ra(e) {
    let { showHeader: t = !0 } = e,
        i = eZ()((0, lM.Bx)())
            .filter((e) => e.description !== j.intl.string(j.t.HnNtEI))
            .groupBy((e) => e.group)
            .value();
    return (0, E.jsxs)(Z.B, {
        gap: 48,
        children: [
            (0, E.jsx)(i_.n, {
                label: t ? j.intl.string(j.t.Lz5KHI) : void 0,
                children: (0, E.jsx)("div", {
                    className: rn.jh,
                    children: (0, E.jsxs)("div", {
                        className: rn.yZ,
                        children: [
                            (0, E.jsx)(ei.E, { variant: "text-md/normal", children: j.intl.string(j.t.sMWLBj) }),
                            (0, E.jsx)("div", {
                                className: rn.DM,
                                children: (0, E.jsx)(lP.e, { shortcut: lG.z.binds["0"], className: rn.LE }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, E.jsx)(rs, {
                children: (e) =>
                    (0, E.jsx)(E.Fragment, {
                        children: e.map((e, t) => {
                            let n = (0, lM.Gm)(e),
                                s = (0, lM.zF)(e),
                                l = i[e];
                            return (0, E.jsx)(
                                i_.n,
                                {
                                    label: n,
                                    description: s,
                                    children: (0, E.jsx)("div", {
                                        className: rn.jh,
                                        children: l.map((e, t) =>
                                            (0, E.jsxs)(
                                                S.Fragment,
                                                {
                                                    children: [
                                                        0 !== t && (0, E.jsx)(eM.c, {}),
                                                        (0, E.jsxs)("div", {
                                                            className: rn.yZ,
                                                            children: [
                                                                (0, E.jsx)(ei.E, {
                                                                    variant: "text-md/normal",
                                                                    children: e.description,
                                                                }),
                                                                (0, E.jsx)("div", {
                                                                    className: rn.DM,
                                                                    children: e.binds.map((e) =>
                                                                        (0, E.jsx)(
                                                                            lP.e,
                                                                            { shortcut: e, className: rn.LE },
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
let ro = (0, a.E2)(u.X.KEYBINDS_SETTING, {
        Component: function () {
            S.useEffect(
                () => (
                    tX.A.enableAll(!1),
                    () => {
                        tX.A.enableAll(!0);
                    }
                ),
                [],
            );
            let e = ri();
            return (0, E.jsx)(rr, { ...e });
        },
        useSearchTerms: () => [j.intl.string(j.t.T9DA2K)],
    }),
    ru = (0, a.zZ)(u.X.KEYBINDS_CATEGORY, { buildLayout: () => [ro] }),
    rd = (0, a.t_)(u.X.KEYBINDS_PANEL, { useTitle: () => j.intl.string(j.t.T9DA2K), buildLayout: () => [ru] }),
    rc = (0, a.i4)(u.X.KEYBINDS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.T9DA2K),
        icon: lj.F,
        buildLayout: () => [rd],
    });
var rg = i(37646),
    rm = i(434404);
let rA = (0, a.t_)(u.X.LANGUAGE_AND_TIME_PANEL, {
        useTitle: () => j.intl.string(j.t.KyFVyi),
        buildLayout: () => [rm.F],
    }),
    rh = (0, a.i4)(u.X.LANGUAGE_AND_TIME_SIDEBAR_ITEM, {
        icon: rg.U,
        useTitle: () => j.intl.string(j.t.KyFVyi),
        buildLayout: () => [rA],
    }),
    rE = (0, nD.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 }));
async function rS() {
    let e = await sg.Ay.getOpenOnStart(),
        t = await sg.Ay.getSetting("START_MINIMIZED", !1),
        i = await sg.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
    rE.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: i });
}
let rT = (0, a.zD)(u.X.OS_OPEN_ON_STARTUP, {
        useTitle: () => j.intl.string(j.t["3BeZti"]),
        usePredicate: () => c.Av && !(0, c.cX)(),
        useValue: () => rE.useState((e) => e.openOnStartup),
        setValue: function (e) {
            rE.setState({ openOnStartup: e }), sg.Ay.send("TOGGLE_OPEN_ON_STARTUP", e);
        },
        initialize: () => {
            sg.Ay.getOpenOnStart().then((e) => rE.setState({ openOnStartup: e }));
        },
    }),
    rx = (0, a.zD)(u.X.OS_MINIMIZE_TO_TRAY, {
        useTitle: () => j.intl.string(j.t.dJ5MUh),
        useSubtitle: () => j.intl.string(j.t.nQavHr),
        usePredicate: () => c.Av && !(0, c.cX)(),
        useValue: () => rE.useState((e) => e.minimizeToTray),
        setValue: function (e) {
            rE.setState({ minimizeToTray: e }), sg.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e);
        },
        initialize: () => {
            sg.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => rE.setState({ minimizeToTray: e }));
        },
    });
var rp = i(117695);
function rf(e) {
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
let rN = new Set(["failure", "unknown"]),
    r_ = (0, a.E2)(u.X.OS_SYSTEM_SERVICE, {
        useSearchTerms: () => [j.intl.string(j.t.roHq80)],
        Component: function () {
            let [e, t] = S.useState(!1),
                [i, n] = S.useState(() => (0, t_.TC)()),
                s = (0, o.ri)("SystemService"),
                l = (0, g.bG)([m.Ay], () => m.Ay.getSystemServiceStatus("input-service")),
                r = S.useCallback(async () => {
                    t(!0),
                        i ? await (0, t_.z8)("windows-settings") : await (0, t_.sL)("windows-settings"),
                        t(!1),
                        n((0, t_.TC)());
                }, [i]),
                a = "running" === l.state;
            return (0, E.jsxs)("div", {
                className: rp.q,
                children: [
                    (0, E.jsxs)("div", {
                        className: rp.L,
                        children: [
                            (0, E.jsxs)(Z.B, {
                                direction: "horizontal",
                                children: [
                                    (0, E.jsx)(ei.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: j.intl.string(j.t.roHq80),
                                    }),
                                    i &&
                                        s &&
                                        (0, E.jsxs)(E.Fragment, {
                                            children: [
                                                (0, E.jsx)(ei.E, {
                                                    variant: "text-md/medium",
                                                    color: "text-strong",
                                                    "aria-hidden": !0,
                                                    children: "\u2022",
                                                }),
                                                (0, E.jsx)(ei.E, {
                                                    variant: "text-md/medium",
                                                    color:
                                                        "running" === l.state
                                                            ? "text-feedback-positive"
                                                            : rN.has(l.state)
                                                              ? "text-feedback-critical"
                                                              : "text-feedback-warning",
                                                    children: rf(l),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, E.jsx)(ei.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: j.intl.format(j.t["8CAL+D"], {
                                    helpCenterLink: tN.A.getArticleURL(eA.MVz.SYSTEM_SERVICE),
                                }),
                            }),
                            i &&
                                !s &&
                                (0, E.jsx)(ei.E, {
                                    variant: "text-sm/normal",
                                    color: a ? "text-feedback-positive" : "text-feedback-warning",
                                    children: a
                                        ? j.intl.string(j.t.KHVMkW)
                                        : j.intl.format(j.t["5Rlr0b"], { status: rf(l) }),
                                }),
                        ],
                    }),
                    (0, E.jsx)(eG.$, {
                        variant: i ? "critical-secondary" : "primary",
                        loading: e,
                        onClick: r,
                        text: i ? j.intl.string(j.t.pAwbdL) : j.intl.string(j.t["1iI46O"]),
                    }),
                ],
            });
        },
        usePredicate: t_.XQ,
    }),
    rI = (0, a.zZ)(u.X.LINUX_CATEGORY, {
        buildLayout: () => [rT, rx, r_],
        initialize: () => {
            rS();
        },
    }),
    rC = (0, a.t_)(u.X.LINUX_PANEL, { useTitle: () => j.intl.string(j.t["7pPjTW"]), buildLayout: () => [rI] }),
    rb = (0, a.i4)(u.X.LINUX_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["7pPjTW"]),
        icon: to.k,
        usePredicate: () => eY.isPlatformEmbedded && (0, eY.isLinux)(),
        buildLayout: () => [rC],
    });
var rv = i(3137),
    ry = i(369606),
    rj = i(604121),
    rO = i(725951),
    rR = i(400492),
    rL = i(669067),
    rD = i(115063),
    rP = i(754692),
    rG = i(927018),
    rM = i(512599),
    rU = i(532197),
    rV = i(874486),
    rk = i(989349),
    rw = i.n(rk),
    rF = i(58703),
    rB = i(906688),
    rz = i(523896);
function rX(e) {
    let { achievementId: t, dateUnlocked: i } = e,
        n = (0, rG.vM)(t);
    if (null == n) return null;
    let s = null != i,
        { name: l, description: r, hideDescriptionUntilUnlock: a, onAction: o } = n,
        u = a && !s,
        d = s ? "text-strong" : "text-muted",
        c = s ? "text-default" : "text-muted",
        g = rw()(i),
        m = null != o && s,
        A = m ? et.D : "div";
    return (0, E.jsxs)(A, {
        className: e6()(rz.kL, m && rz.b),
        onClick: () => {
            m && o();
        },
        children: [
            (0, E.jsx)("div", {
                className: rz.zc,
                children: (0, E.jsx)(rB.A, { achievementId: t, size: rB.A.Sizes.SIZE_40, unlocked: s }),
            }),
            (0, E.jsxs)("div", {
                className: rz.VW,
                children: [
                    null != i &&
                        (0, E.jsx)(ei.E, {
                            variant: "text-xxs/semibold",
                            color: "text-muted",
                            className: rz.YR,
                            children: (0, rF.mk)(g),
                        }),
                    (0, E.jsx)(ei.E, { variant: "text-md/medium", color: d, children: l() }),
                    (0, E.jsx)(ei.E, { variant: "text-xs/normal", color: c, children: u ? "?????" : r() }),
                ],
            }),
        ],
    });
}
var rY = i(885959);
function rH(e) {
    let { onBackClick: t } = e,
        i = (0, g.bG)([rV.A], () => rV.A.getAllUnlockedAchievements()),
        n = S.useMemo(() => Object.values(i).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [i]),
        s = S.useMemo(
            () =>
                Object.values(rG.l0)
                    .filter(N.Vq)
                    .filter((e) => null == i[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [i],
        );
    return (0, E.jsxs)(E.Fragment, {
        children: [
            (0, E.jsxs)(et.D, {
                onClick: t,
                className: rY.vv,
                children: [
                    (0, E.jsx)(rU.A, { direction: rU.A.Directions.LEFT, className: rY.Kk }),
                    (0, E.jsx)(ei.E, {
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: j.intl.string(j.t["13/7kX"]),
                    }),
                ],
            }),
            (0, E.jsxs)("div", {
                className: rY.N1,
                children: [
                    (0, E.jsxs)("div", {
                        className: rY.if,
                        children: [
                            (0, E.jsx)(eP.D, {
                                variant: "heading-lg/extrabold",
                                color: "text-strong",
                                children: j.intl.string(j.t["6jI0hd"]),
                            }),
                            (0, E.jsx)(ei.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: j.intl.string(j.t.GuUItX),
                            }),
                        ],
                    }),
                    (0, E.jsx)("div", {
                        className: rY.nr,
                        children: (0, E.jsx)(ry.O, {
                            size: "custom",
                            color: es.A.unsafe_rawColors.ORANGE_345.css,
                            width: 40,
                            height: 40,
                        }),
                    }),
                ],
            }),
            n.length > 0 &&
                (0, E.jsx)("div", {
                    className: rY.yF,
                    children: (0, E.jsx)("div", {
                        className: rY.Eh,
                        children: n.map((e) => {
                            let { achievementId: t, dateUnlocked: i } = e;
                            return (0, E.jsx)(rX, { achievementId: t, dateUnlocked: i }, t);
                        }),
                    }),
                }),
            s.length > 0 &&
                (0, E.jsxs)("div", {
                    className: rY.yF,
                    children: [
                        (0, E.jsx)("div", {
                            className: rY.if,
                            children: (0, E.jsx)(ei.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                children: j.intl.string(j.t.GFyMg1),
                            }),
                        }),
                        (0, E.jsx)("div", {
                            className: rY.Eh,
                            children: s.map((e) => (0, E.jsx)(rX, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, E.jsx)("div", { className: rY.yF, children: (0, E.jsx)("div", { className: rY.F3 }) }),
        ],
    });
}
var rK = i(224964),
    rW = i(31408),
    rZ = i(739347);
let rq = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    rQ = (0, eW.range)(0, 11),
    rJ = (0, eW.range)(0, 2.25, 0.25),
    r$ = (0, eW.range)(1, 11),
    r0 = (0, eW.range)(1, 26),
    r1 = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function r2(e) {
    let { disabled: t, locations: i, settingsLocations: n, onChange: s } = e,
        l = i.map((e) =>
            (0, E.jsx)(
                q.d,
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
    return (0, E.jsx)(i_.n, { label: j.intl.string(j.t.bWVN1D), children: l });
}
function r3(e) {
    let { children: t } = e;
    return (0, E.jsx)(ei.E, { className: rZ.iF, variant: "text-sm/normal", color: "text-default", children: t });
}
function r6(e) {
    let {
            settings: { enabled: t, warningSeen: i },
            updateSettings: n,
        } = e,
        s = (0, g.bG)([i7.A], () => i7.A.useReducedMotion);
    return (0, E.jsx)(q.d, {
        label: j.intl.string(j.t.vuiXm9),
        description: j.intl.string(j.t.KuYbWN),
        checked: t,
        onChange: (e) => {
            e || (0, rP._)(rG.sn.DISABLE_POGGERMODE),
                e && (!i || s)
                    ? (0, sc.A)({
                          title: s ? j.intl.string(j.t["FxT+p0"]) : j.intl.string(j.t.TAZ4F9),
                          subtitle: s ? j.intl.string(j.t.gmixrx) : j.intl.string(j.t.jN3t3K),
                          confirmText: j.intl.string(j.t.JFfins),
                          onConfirm: () => n(s ? rq : { enabled: !0, warningSeen: !0 }),
                      })
                    : n({ enabled: e });
        },
    });
}
function r4(e) {
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
    return (0, E.jsxs)(i_.n, {
        label: j.intl.string(j.t.mqxwJO),
        children: [
            (0, E.jsx)(q.d, {
                label: j.intl.string(j.t.s0KCgF),
                description: j.intl.string(j.t.O1Vflg),
                checked: i,
                disabled: !t,
                onChange: (e) => r({ confettiEnabled: e }, 0),
            }),
            (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(ei.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: rZ.KF,
                        children: j.intl.string(j.t.vd0D81),
                    }),
                    (0, E.jsx)(r3, { children: j.intl.string(j.t.a18Sug) }),
                    (0, E.jsx)(nd.A, {
                        disabled: a,
                        markers: r$,
                        stickToMarkers: !0,
                        minValue: r$[0],
                        maxValue: r$[r$.length - 1],
                        initialValue: n,
                        onValueChange: (e) => r({ confettiCount: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(ei.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: rZ.KF,
                        children: j.intl.string(j.t.sPO3ij),
                    }),
                    (0, E.jsx)(r3, { children: j.intl.string(j.t.xoldVn) }),
                    (0, E.jsx)(nd.A, {
                        disabled: a,
                        markers: r0,
                        stickToMarkers: !0,
                        minValue: r0[0],
                        maxValue: r0[r0.length - 1],
                        initialValue: s,
                        onValueChange: (e) => r({ confettiSize: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, E.jsx)(r2, {
                disabled: a,
                locations: [
                    {
                        location: rW.k.CHAT_INPUT,
                        title: j.intl.string(j.t.elTtyz),
                        description: j.intl.string(j.t.HtKfMi),
                    },
                    {
                        location: rW.k.REACTION,
                        title: j.intl.string(j.t.Ik4VIa),
                        description: j.intl.string(j.t.y4rqK0),
                    },
                    {
                        location: rW.k.MEMBER_USER,
                        title: j.intl.string(j.t.ZXBlAn),
                        description: j.intl.string(j.t["m9RD+c"]),
                    },
                    {
                        location: rW.k.CALL_TILE,
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
function r7(e) {
    let {
            settings: { enabled: t, combosEnabled: i, comboSoundsEnabled: n, combosRequiredCount: s },
            updateSettings: l,
        } = e,
        r = !t || !i;
    return (0, E.jsxs)(i_.n, {
        label: j.intl.string(j.t.Xz0ole),
        children: [
            (0, E.jsx)(q.d, {
                label: j.intl.string(j.t.o3iV7B),
                description: j.intl.string(j.t["31Z8Ee"]),
                checked: i,
                disabled: !t,
                onChange: (e) => l({ combosEnabled: e }),
            }),
            (0, E.jsx)(q.d, {
                label: j.intl.string(j.t["Ax+IoW"]),
                description: j.intl.string(j.t["9rgQEr"]),
                checked: n,
                disabled: !t,
                onChange: (e) => l({ comboSoundsEnabled: e }),
            }),
            (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(ei.E, {
                        variant: "text-md/semibold",
                        color: r ? "text-muted" : "text-strong",
                        className: rZ.KF,
                        children: j.intl.string(j.t.L0oQuh),
                    }),
                    (0, E.jsx)(r3, { children: j.intl.string(j.t["/OOFpL"]) }),
                    (0, E.jsx)(nd.A, {
                        disabled: r,
                        markers: rQ,
                        stickToMarkers: !0,
                        minValue: rQ[0],
                        maxValue: rQ[rQ.length - 1],
                        initialValue: s,
                        onValueChange: (e) => l({ combosRequiredCount: e }),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
        ],
    });
}
function r8(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: i, shakeIntensity: n, screenshakeEnabledLocations: s },
            updateSettings: l,
        } = e,
        r = (0, g.bG)([i7.A], () => i7.A.useReducedMotion),
        a = !t || !i || r;
    return (0, E.jsxs)(i_.n, {
        label: j.intl.string(j.t.wVS5Sd),
        children: [
            (0, E.jsx)(q.d, {
                label: j.intl.string(j.t.N004zO),
                description: r ? j.intl.string(j.t.GckHGw) : j.intl.string(j.t.Qq5W3v),
                checked: i && !r,
                disabled: !t || r,
                onChange: (e) => l({ screenshakeEnabled: e }, 1),
            }),
            (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(ei.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: rZ.KF,
                        children: j.intl.string(j.t.UxnnC4),
                    }),
                    (0, E.jsx)(r3, { children: j.intl.string(j.t.CEOEOb) }),
                    (0, E.jsx)(nd.A, {
                        disabled: a,
                        markers: rJ,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: rJ[0],
                        maxValue: rJ[rJ.length - 1],
                        initialValue: n,
                        onValueChange: (e) => {
                            var t;
                            null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > n &&
                                (0, rP._)(rG.sn.MORE),
                                l(t, 1);
                        },
                        onMarkerRender: (e) => (e === rJ[rJ.length - 1] ? j.intl.string(j.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, E.jsx)(r2, {
                disabled: a,
                locations: [
                    {
                        location: rW.uD.CHAT_INPUT,
                        title: j.intl.string(j.t.vUcvPP),
                        description: j.intl.string(j.t.y00OrF),
                    },
                    {
                        location: rW.uD.VOICE_USER,
                        title: j.intl.string(j.t.TcRO54),
                        description: j.intl.string(j.t.YJCxVY),
                    },
                    {
                        location: rW.uD.MENTION,
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
    return (0, E.jsx)(i_.n, {
        label: j.intl.string(j.t.EuXv2q),
        children: (0, E.jsxs)(Z.B, {
            gap: 16,
            children: [
                (0, E.jsx)("div", { children: j.intl.string(j.t["1SLnki"]) }),
                (0, E.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: rZ.hw,
                    children: (0, E.jsx)(eG.$, {
                        variant: "primary",
                        size: "sm",
                        text: j.intl.string(j.t.qz65yY),
                        onClick: () => {
                            t({ enabled: !1, settingsVisible: !1 }), (0, sv.default)();
                        },
                    }),
                }),
            ],
        }),
    });
}
function r9(e) {
    let { onChangePage: t } = e;
    return (0, E.jsxs)(et.D, {
        onClick: () => t(1),
        className: rZ.Tq,
        children: [
            (0, E.jsx)("div", {
                className: rZ.w1,
                children: (0, E.jsx)(ry.O, { size: "md", color: es.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, E.jsxs)("div", {
                className: rZ.qL,
                children: [
                    (0, E.jsx)(eP.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: j.intl.string(j.t["6jI0hd"]),
                    }),
                    (0, E.jsx)(ei.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: j.intl.string(j.t.GuUItX),
                    }),
                ],
            }),
            (0, E.jsx)(tO._, { size: "custom", color: "currentColor", width: 16, className: rZ.nT }),
        ],
    });
}
let ae = () =>
    i
        .e("4660")
        .then(i.t.bind(i, 662336, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
function at(e) {
    let { onChangePage: t, setShowEnableAnimation: i } = e,
        n = (0, g.cf)([rv.A], () => rv.A.getState()),
        [s, l] = S.useState({ x: 0, y: 0 }),
        r = (0, rK.A)(),
        a = (e, t) => {
            var l, a, o, u, d, c, g, m;
            if (
                (e.enabled &&
                    !1 === n.enabled &&
                    (i(!0),
                    (0, rR.Ak)("poggermode_enabled"),
                    (0, rD.fO)({ duration: 2e3, intensity: e.shakeIntensity ?? n.shakeIntensity })),
                (0, rM.O9)(e),
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
            1 === t && h && (0, rD.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? n.shakeIntensity });
        },
        o = (e) => {
            l({ x: e.clientX, y: e.clientY });
        };
    return (
        S.useEffect(
            () => (window.addEventListener("mousemove", o), () => window.removeEventListener("mousemove", o)),
            [],
        ),
        (0, E.jsxs)(Z.B, {
            gap: 24,
            children: [
                (0, E.jsx)(r6, { settings: n, updateSettings: a }),
                (0, E.jsx)(r9, { onChangePage: t }),
                (0, E.jsx)(r7, { settings: n, updateSettings: a }),
                (0, E.jsx)(r8, { settings: n, updateSettings: a }),
                (0, E.jsx)(r4, { settings: n, updateSettings: a }),
                (0, E.jsx)(r5, { updateSettings: a }),
            ],
        })
    );
}
let ai = (e) => (0 === e ? rO.f.LEFT : rO.f.RIGHT),
    an = (0, a.E2)(u.X.POGGERMODE_SETTING, {
        Component: function () {
            let [e, t] = S.useState(0),
                [i, n] = S.useState(ai(e)),
                [s, l] = S.useState(!1),
                r = (0, g.bG)([i7.A], () => i7.A.useReducedMotion),
                a = s && !r;
            return (
                S.useEffect(() => {
                    let t = setTimeout(() => {
                        n(ai(e));
                    }, 500);
                    return () => clearTimeout(t);
                }, [e]),
                S.useEffect(() => {
                    (0, rL._)(r1[e]);
                }, [e]),
                S.useEffect(() => {
                    Math.random() > 0.99 && (0, rP._)(rG.sn.VISITOR_100);
                }, []),
                (0, E.jsxs)(E.Fragment, {
                    children: [
                        (0, E.jsx)(rO.A, {
                            className: rZ.l3,
                            step: e,
                            direction: i,
                            children: ((e, t, i) => {
                                let n = (e) => () => {
                                    t(e);
                                };
                                switch (e) {
                                    case 0:
                                        return (0, E.jsx)(at, { onChangePage: n(1), setShowEnableAnimation: i });
                                    case 1:
                                        return (0, E.jsx)(rH, { onBackClick: n(0) });
                                    default:
                                        return null;
                                }
                            })(e, t, l),
                        }),
                        (0, E.jsx)("div", {
                            className: a ? rZ.Sr : rZ.IP,
                            children: (0, E.jsx)(rj.a, {
                                className: rZ.gT,
                                importData: ae,
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
    as = (0, a.zZ)(u.X.POGGERMODE_CATEGORY, { buildLayout: () => [an] });
var al = i(736170);
let ar = (0, a.t_)(u.X.POGGERMODE_PANEL, { useTitle: () => j.intl.string(j.t.AtCukI), buildLayout: () => [as] }),
    aa = (0, a.i4)(u.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.AtCukI),
        icon: () => (0, E.jsx)("img", { alt: "", src: i(724405), className: al.$ }),
        usePredicate: () => (0, g.bG)([rv.A], () => rv.A.settingsVisible),
        buildLayout: () => [ar],
    });
var ao = i(307301);
let au = (0, a.zD)(u.X.OS_START_MINIMIZED, {
    useTitle: () => j.intl.string(j.t.GfBL83),
    useSubtitle: () => j.intl.string(j.t.XGyhhc),
    usePredicate: () => (0, c.uF)(),
    useValue: () => rE.useState((e) => !!e.openOnStartup && e.startMinimized),
    setValue: function (e) {
        rE.setState({ startMinimized: e }), sg.Ay.send("TOGGLE_START_MINIMIZED", e);
    },
    useDisabled: () => !rE.useState((e) => e.openOnStartup),
    initialize: () => {
        sg.Ay.getSetting("START_MINIMIZED", !1).then((e) => rE.setState({ startMinimized: e }));
    },
});
var ad = i(839610),
    ac = i(145339);
function ag(e) {
    let { keybind: t } = e,
        i = eq.dI(t.shortcut);
    return n9.A.hasBind(i)
        ? (0, E.jsx)("div", {
              className: ac.$e,
              children: (0, E.jsx)(W.w, { type: "warning", children: j.intl.string(j.t["7lQlw3"]) }),
          })
        : iL.Yy.has(i)
          ? (0, E.jsx)("div", {
                className: ac.$e,
                children: (0, E.jsx)(W.w, {
                    type: "warning",
                    children: j.intl.format(j.t.MOIaNd, {
                        keyboardNavArticle: tN.A.getArticleURL(eA.MVz.KEYBOARD_NAVIGATION),
                    }),
                }),
            })
          : void 0;
}
function am(e) {
    let { keybind: t } = e;
    return t.action === eA.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, E.jsx)(l4, { keybind: t, className: ac._M }) : null;
}
let aA = S.memo(function (e) {
    let { keybind: t, keybindDescriptions: i, keybindActionTypes: n } = e,
        s = S.useCallback((e) => tX.A.setKeybind({ ...t, action: e }), [t]),
        l = S.useCallback((e) => tX.A.setKeybind({ ...t, shortcut: e }), [t]),
        r = S.useCallback(() => tX.A.setKeybind({ ...t, enabled: !t.enabled }), [t]),
        a = S.useCallback(() => tX.A.deleteKeybind(t.id), [t.id]),
        o = S.useId(),
        u = S.useMemo(() => n.find((e) => e.value === t.action)?.label ?? t.action, [t.action, n]);
    return (0, E.jsxs)("div", {
        className: ac.f_,
        children: [
            (0, E.jsx)(ag, { keybind: t }),
            (0, E.jsx)("div", {
                className: ac.XI,
                children: (0, E.jsx)(lO.l, {
                    selectionMode: "single",
                    label: j.intl.string(j.t.XH5b12),
                    value: t.action,
                    options: n,
                    onSelectionChange: s,
                    disabled: t.managed,
                }),
            }),
            (0, E.jsx)("div", {
                className: ac.LE,
                children: (0, E.jsx)(sw.D, {
                    label: j.intl.string(j.t["1La4tC"]),
                    layout: "vertical",
                    children: (0, E.jsx)(tY.A, { defaultValue: t.shortcut, onChange: l }),
                }),
            }),
            (0, E.jsxs)("div", {
                className: ac.ne,
                children: [
                    !t.managed &&
                        (0, E.jsx)(lR.K, {
                            variant: "icon-only",
                            onClick: a,
                            icon: lL.u,
                            "aria-label": j.intl.string(j.t.qEHmmB),
                        }),
                    (0, E.jsx)(tr.m, {
                        text: j.intl.string(t.enabled ? j.t.pNYGbx : j.t["51DGkH"]),
                        ariaHidden: !0,
                        children: (0, E.jsxs)("div", {
                            children: [
                                (0, E.jsx)(er.A, {
                                    id: o,
                                    children: j.intl.format(t.enabled ? j.t["myr/Y0"] : j.t.lYhtPO, { actionName: u }),
                                }),
                                (0, E.jsx)(ad.I, { checked: t.enabled, onChange: r, labelledBy: o }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, E.jsx)(ei.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: ac.h_,
                children: i[t.action],
            }),
            (0, E.jsx)(am, { keybind: t }),
        ],
    });
});
var ah = i(354594);
let aE = function () {
        let { customizableKeybinds: e, keybindDescriptions: t, keybindActionTypes: i } = ri();
        return 0 === e.length
            ? (0, E.jsx)(ei.E, { variant: "text-sm/normal", color: "text-subtle", children: j.intl.string(j.t.vyYgWp) })
            : (0, E.jsx)("div", {
                  className: ah.A,
                  children: e.map((n, s) =>
                      (0, E.jsxs)(
                          S.Fragment,
                          {
                              children: [
                                  (0, E.jsx)(aA, { keybind: n, keybindDescriptions: t, keybindActionTypes: i }),
                                  s < e.length - 1 ? (0, E.jsx)(eM.c, { className: ah.y, gap: 24 }) : null,
                              ],
                          },
                          n.id,
                      ),
                  ),
              });
    },
    aS = (0, a.E2)(u.X.CUSTOM_KEYBINDS_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["069nVT"])],
        Component: function () {
            return c.Av
                ? (0, E.jsx)(aE, {})
                : (0, E.jsx)(W.w, {
                      type: "info",
                      children: j.intl.format(j.t.mPi3F3, { downloadLink: eA.X7G.DOWNLOAD }),
                  });
        },
    }),
    aT = (0, a.E2)(u.X.DEFAULT_KEYBINDS_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.Lz5KHI)],
        Component: () => (0, E.jsx)(ra, { showHeader: !1 }),
    }),
    ax = (0, a.zZ)(u.X.SYSTEM_GENERAL_CATEGORY, {
        useTitle: () => j.intl.string(j.t.cg6ltt),
        buildLayout: () => [rT, au, rx, sA],
        usePredicate: () => c.Av && ((0, c.uF)() || (0, c.j9)()),
        initialize: () => {
            rS();
        },
    }),
    ap = (0, a.zZ)(u.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["069nVT"]),
        useSubtitle: () => j.intl.string(j.t.T4LZVL),
        buildLayout: () => [aS],
        initialize: () => (tX.A.enableAll(!1), () => tX.A.enableAll(!0)),
        useInlineNotice: function () {
            return c.Av
                ? {
                      type: h.lT.STRONGLY_DISCOURAGED_CUSTOM,
                      notice: () =>
                          (0, E.jsxs)(Z.B, {
                              direction: "vertical",
                              gap: "md",
                              children: [
                                  (0, E.jsx)(W.w, { type: "info", children: j.intl.string(j.t["5pkmHa"]) }),
                                  (0, E.jsx)(lB, { sourcePage: "keybinds" }),
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
                              icon: ao.j,
                              onClick: () => tX.A.addKeybind(),
                          },
                      ],
                  }
                : null,
    }),
    af = (0, a.zZ)(u.X.SYSTEM_DEFAULT_KEYBINDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Lz5KHI),
        buildLayout: () => [aT],
    }),
    aN = (0, a.zZ)(u.X.SYSTEM_HELPER_CATEGORY, {
        useTitle: () => j.intl.string(j.t["+XZgmA"]),
        usePredicate: () => c.Av && ((0, c.uF)() || (0, c.j9)()),
        buildLayout: () => [r_],
    }),
    a_ = (0, a.t_)(u.X.SYSTEM_PANEL, {
        useTitle: () => j.intl.string(j.t["VJ/qKo"]),
        buildLayout: () => [ax, ap, af, aN],
    }),
    aI = (0, a.i4)(u.X.SYSTEM_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["VJ/qKo"]),
        icon: lj.F,
        buildLayout: () => [a_],
    });
var aC = i(831544),
    ab = i(922795),
    av = i(212245),
    ay = i(329551),
    aj = i(285918),
    aO = i(413339),
    aR = i(952572),
    aL = i(382003);
let aD = (0, a.E2)(u.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.lZTUPs)],
        usePredicate: aR.A,
        Component: function () {
            let e = (0, av.p)(),
                t = S.useRef(!1),
                i = (0, g.bG)([lV.Ay], () => lV.Ay.getVideoDeviceId()),
                [n, s] = S.useState((0, ay.i)(io.default.getCurrentUser())),
                l = S.useRef(n);
            return (
                S.useEffect(
                    () => () => {
                        t.current && (0, aj._C)(l.current);
                    },
                    [],
                ),
                (0, E.jsx)(aL.A, {
                    selectedBackgroundOption: n,
                    onSelectBackgroundOption: (i) => {
                        (t.current = !0), (l.current = i), s(i), (0, aO.gB)(i, { location: e.location }).catch(eA.tEg);
                    },
                    currentDeviceId: i,
                })
            );
        },
    }),
    aP = (0, a.zD)(u.X.CAMERA_PREVIEW_PREFERENCE, {
        useTitle: () => j.intl.string(j.t["3Ppr1h"]),
        useSubtitle: () => j.intl.string(j.t.WNbX4O),
        useValue: L.bm.useSetting,
        setValue: (e) => {
            L.bm.updateSetting(e), eo.default.track(eA.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
        },
    });
var aG = i(625841),
    aM = i(74848),
    aU = i(204050);
let aV = (0, nD.D)(() => ({ previewEnabled: !1 }));
var ak = i(731854);
let aw = (0, a.E2)(u.X.CAMERA_SELECTION_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.FsQ3OR)],
    Component: function () {
        let e = (0, g.bG)([lV.Ay], () => lV.Ay.isVideoAvailable()),
            { id: t } = (0, aM.x5)(ak.oh.VIDEO_INPUT),
            { analyticsLocations: i } = (0, nW.Ay)();
        return (0, E.jsx)(aG.U, {
            label: j.intl.string(j.t.FsQ3OR),
            deviceType: ak.oh.VIDEO_INPUT,
            location: "UserSettingsCameraSelect",
            isDisabled: !e,
            helperText: (0, aU.p)()
                ? j.intl.format(j.t.aJYgRt, {
                      onCameraSettingsClick: () => {
                          aV.setState({ previewEnabled: !1 }),
                              window.open((0, aU.i)(t)),
                              eo.default.track(eA.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: i });
                      },
                  })
                : void 0,
        });
    },
});
var aF = i(745317),
    aB = i(886964);
let az = (0, a.E2)(u.X.CAMERA_VIDEO_PREVIEW, {
        useSearchTerms: () => [j.intl.string(j.t.JIf4v7)],
        Component: function () {
            let e = lV.Ay.getCameraComponent(),
                t = (0, g.bG)([lV.Ay], () => lV.Ay.getVideoDeviceId()),
                i = aV.useField("previewEnabled"),
                n = (0, g.bG)([lV.Ay], () => lV.Ay.isVideoAvailable());
            return ((0, tg.l0)(() => {
                aV.setState({ previewEnabled: !1 });
            }),
            i)
                ? (0, E.jsx)("div", {
                      className: aB.T,
                      children: (0, E.jsxs)("div", {
                          className: aB.U,
                          children: [
                              (0, E.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !i }),
                              (0, E.jsx)(aF.k, {}),
                          ],
                      }),
                  })
                : (0, E.jsx)("div", {
                      className: aB.T,
                      children: (0, E.jsx)(tr.m, {
                          text: n ? null : j.intl.string(j.t["8jSzSe"]),
                          children: (0, E.jsx)(eG.$, {
                              variant: "primary",
                              text: j.intl.string(j.t.JIf4v7),
                              onClick: () => aV.setState({ previewEnabled: !0 }),
                              disabled: !n,
                          }),
                      }),
                  });
        },
    }),
    aX = (0, a.zZ)(u.X.CAMERA_CATEGORY, {
        useTitle: () => j.intl.string(j.t.uje3P9),
        usePredicate: () => (0, g.bG)([lV.Ay], () => lV.Ay.supports(ak.O5.VIDEO)),
        buildLayout: () => [az, aP, aw, aD],
    });
function aY() {
    sr.h.dispatch({ type: "DISCORD_STATS_POPOUT_WINDOW_OPEN" });
}
let aH = (0, a.Tf)(u.X.DISCORD_STATS_POPOUT, {
    useTitle: () => "Discord Stats",
    useSubtitle: () => "Open a floating panel showing live GPU, CPU, and memory usage.",
    useLabel: () => "Open",
    usePredicate: () => (0, g.bG)([io.default], () => io.default.getCurrentUser()?.isStaff() ?? !1),
    onClick: () => {
        aY();
    },
});
var aK = i(827343);
let aW = (0, a.zD)(u.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => j.intl.string(j.t.qFphsa),
        useSubtitle: () => j.intl.string(j.t.cQfwyY),
        usePredicate: function () {
            return (0, c.j9)();
        },
        useValue: function () {
            return (0, g.bG)([lV.Ay], () => lV.Ay.getOpenH264Enabled());
        },
        setValue: function (e) {
            aK.A.setOpenH264Enabled(e),
                (0, sc.A)({
                    title: j.intl.string(j.t["9jf31O"]),
                    subtitle: j.intl.string(j.t["J2wg+X"]),
                    confirmText: j.intl.string(j.t.BddRzS),
                    onConfirm: () => ln.A.app.relaunch(),
                });
        },
        useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
    }),
    aZ = (0, a.zD)(u.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
        useTitle: () => j.intl.string(j.t["r6K+TL"]),
        useSubtitle: () => j.intl.string(j.t["xl9+I6"]),
        useValue: function () {
            return (0, g.bG)([lV.Ay], () => lV.Ay.getAecDump());
        },
        setValue: aK.A.setAecDump,
        usePredicate: function () {
            return (0, g.bG)([lV.Ay], () => lV.Ay.isAecDumpSupported());
        },
    });
var aq = i(139033),
    aQ = i(862482),
    aJ = i(640238),
    a$ = i(825484),
    a0 = i(77138),
    a1 = i(487329),
    a2 = i(353835);
let a3 = (0, nD.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function a6() {
    let e = await ln.A.fileManager.getLogPath();
    ln.A.fileManager.showItemInFolder(e);
}
function a4(e) {
    (0, sc.A)({
        title: j.intl.string(j.t["7UXEF2"]),
        subtitle: j.intl.string(j.t.IYPrRl),
        confirmText: j.intl.string(j.t.BddRzS),
        onConfirm: () => aK.A.setDebugLogging(e),
    });
}
async function a7(e) {
    let { onUploadStart: t, onUploadFinish: i } = e;
    t?.();
    try {
        let e, t;
        await lV.Ay.getMediaEngine().writeAudioDebugState(),
            await a2.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, a0.a)(eA.Umv.RTC),
            (e = j.intl.string(j.t["fKBB8+"])),
            (t = j.intl.string(j.t.BvyxE7)),
            (0, aq.A)({ title: e, subtitle: t });
    } catch (l) {
        var n;
        let e, t, i, s;
        (n = l.displayMessage),
            (e = j.intl.string(j.t.QZg0J7)),
            (t = n ?? j.intl.string(j.t.VzHcSm)),
            (i = (0, a1.B1)(a1.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (s = j.intl.formatToPlainString(j.t.ejOT95, { errorCode: i })),
            (0, Y.openModal)((i) =>
                (0, E.jsx)(aJ.a, {
                    header: e,
                    confirmButtonColor: aQ.$n.Colors.BRAND,
                    confirmText: j.intl.string(j.t.BddRzS),
                    ...i,
                    children: (0, E.jsxs)("div", {
                        style: { display: "flex", flexDirection: "column", height: "100%" },
                        children: [
                            (0, E.jsx)(ei.E, { variant: "text-md/normal", children: t }),
                            (0, E.jsx)(ei.E, {
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
async function a8() {
    await a7({
        onUploadStart: () => a3.setState({ isUploading: !0 }),
        onUploadFinish: () => a3.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let a5 = (0, a.E2)(u.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [j.intl.string(j.t["726JHL"]), j.intl.string(j.t.EbwFfR), j.intl.string(j.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, g.bG)([lV.Ay], () => lV.Ay.supports(ak.O5.DEBUG_LOGGING));
        return c.Av && e && null != ln.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, g.bG)([lV.Ay], () => lV.Ay.getDebugLogging()),
            t = a3.useField("isUploading"),
            i = a3.useField("isDisabled"),
            n = S.useId();
        return (0, E.jsxs)("fieldset", {
            children: [
                (0, E.jsx)(er.A, { tag: "legend", id: n, children: j.intl.string(j.t["FjN+et"]) }),
                (0, E.jsxs)(Z.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, E.jsx)(q.d, {
                            label: j.intl.string(j.t["726JHL"]),
                            description: j.intl.string(j.t["/7ak9Q"]),
                            checked: e,
                            onChange: a4,
                        }),
                        (0, E.jsx)("div", {
                            role: "group",
                            "aria-labelledby": n,
                            children: (0, E.jsxs)(a$.e, {
                                children: [
                                    (0, E.jsx)(eG.$, {
                                        variant: "secondary",
                                        text: j.intl.string(j.t.EbwFfR),
                                        onClick: a8,
                                        loading: t,
                                        disabled: i,
                                        "aria-label": j.intl.string(j.t.aY1OH2),
                                    }),
                                    (0, E.jsx)(eG.$, {
                                        variant: "secondary",
                                        text: j.intl.string(j.t.nuPtYi),
                                        onClick: a6,
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
var a9 = i(233545),
    oe = i(412780);
function ot() {
    return (0, g.bG)([io.default, lV.Ay], () => {
        let e = io.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            i = "canary" === sg.Ay.releaseChannel || "development" === sg.Ay.releaseChannel,
            n = lV.Ay.supports(ak.O5.CONNECTION_REPLAY);
        return t && i && n;
    });
}
let oi = (0, a.zD)(u.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => j.intl.string(j.t.U4FgFK),
        useSubtitle: () => j.intl.string(j.t.Lm72RU),
        useValue: function () {
            return (0, g.bG)([oe.Ay], () => oe.Ay.shouldRecordNextConnection());
        },
        setValue: a9.Et,
        usePredicate: ot,
    }),
    on = (0, a.Tf)(u.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => j.intl.string(j.t.nJnOHO),
        useLabel: () => j.intl.string(j.t["3xjX0U"]),
        onClick: a9.YW,
        usePredicate: ot,
    });
var os = i(926919),
    ol = i(111162),
    or = i(855302);
let oa = (0, a.zD)(u.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
        useTitle: () => j.intl.string(j.t["0CEP6e"]),
        useSubtitle: () => j.intl.string(j.t["kBXuW+"]),
        useValue: function () {
            return (0, g.bG)([ol.default], () => ol.default.isStreamInfoOverlayEnabled);
        },
        setValue: function (e) {
            let t = ol.default.isStreamInfoOverlayEnabled;
            (0, or.A)("stream_info_overlay_enabled", e, t), (0, os.x)({ isStreamInfoOverlayEnabled: e });
        },
        usePredicate: function () {
            return L.Q_.useSetting();
        },
    }),
    oo = (0, a.bd)(u.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? j.intl.string(j.t["/B4I8H"]) : j.intl.string(j.t.BTlsWH)),
        useCollapsedSubtitle: () => j.intl.string(j.t.la1Ys4),
        buildLayout: () => [oa, aZ, oi, on, a5],
    });
function ou(e, t, i) {
    (0, sc.A)({ title: e, subtitle: t, confirmText: j.intl.string(j.t.BddRzS), onConfirm: i });
}
let od = (0, a.Tf)(u.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => j.intl.string(j.t.SXfv1v),
        useSubtitle: () => j.intl.string(j.t["buA5/q"]),
        useLabel: () => j.intl.string(j.t.yBZMsQ),
        onClick: function () {
            ou(j.intl.string(j.t["4iKQ/3"]), j.intl.string(j.t.sQ42iT), aK.A.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    oc = (0, a.zZ)(u.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.UDAU9K),
        buildLayout: () => [aW, oo, aH, od],
    });
var og = i(347481),
    om = i(852712),
    oA = i(199966),
    oh = i(963935);
function oE(e) {
    let { title: t } = e;
    return t;
}
function oS(e) {
    let { useTitle: t, settingKey: i, formatter: n, index: s } = e,
        l = t();
    return "string" == typeof l ? n({ title: l, index: s, key: i }) : l;
}
function oT(e) {
    let { setting: t, formatter: i, index: n } = e;
    return () => (0, E.jsx)(oS, { useTitle: t.useTitle, settingKey: t.key, formatter: i, index: n }, t.key);
}
function ox(e) {
    return e.type === oh.Z6.LIST;
}
function op(e, t) {
    let { limit: i = 2, formatter: n = oE } = t ?? {};
    tz()(i > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { visibleDirectory: s, accessibleDirectory: l } = (0, oA._)(),
        r = s.get(e) ?? l.get(e);
    tz()(
        null != r && (r.type === oh.Z6.ACCORDION || ox(r)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let a = ox(r) ? (r.collapseAfter ?? 0) : 0,
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
                return j.intl.format(j.t["3H9tCW"], { settingOneHook: oT({ setting: t[0], formatter: n, index: 0 }) });
            else if (2 === t.length)
                return j.intl.format(j.t.MWryo6, {
                    settingOneHook: oT({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: oT({ setting: t[1], formatter: n, index: 1 }),
                });
            else
                return j.intl.format(j.t.a00b5G, {
                    settingOneHook: oT({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: oT({ setting: t[1], formatter: n, index: 1 }),
                    settingThreeHook: oT({ setting: t[2], formatter: n, index: 2 }),
                });
        return 1 === s
            ? j.intl.format(j.t.O8vNbS, { settingOneHook: oT({ setting: t[0], formatter: n, index: 0 }) })
            : 2 === s
              ? j.intl.format(j.t["acXG/W"], {
                    settingOneHook: oT({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: oT({ setting: t[1], formatter: n, index: 1 }),
                })
              : j.intl.format(j.t["5+ldWc"], {
                    settingOneHook: oT({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: oT({ setting: t[1], formatter: n, index: 1 }),
                    settingThreeHook: oT({ setting: t[2], formatter: n, index: 2 }),
                });
    }, [i, a, o, n]);
}
let of = (0, a.zD)(u.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => j.intl.string(j.t.cUMdH0),
        useSubtitle: () => j.intl.string(j.t["6EjbvA"]),
        useValue: function () {
            return (0, g.bG)([lV.Ay], () => lV.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            aK.A.setAutomaticGainControl(e, { page: eA.liQ.USER_SETTINGS, section: eA.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, g.bG)([lV.Ay, og.A], () => {
                let e = lV.Ay.getInputDeviceId();
                return og.A.hasAutomaticGainControl(e);
            });
        },
        usePredicate: function () {
            return (0, g.bG)([lV.Ay], () => lV.Ay.isAutomaticGainControlSupported() && lV.Ay.isInputProfileCustom());
        },
    }),
    oN = (0, a.sN)(u.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => j.intl.string(j.t.AlybXj),
        setValue: (e) =>
            aK.A.setAttenuation(e, lV.Ay.getAttenuateWhileSpeakingSelf(), lV.Ay.getAttenuateWhileSpeakingOthers()),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => lV.Ay.getAttenuation(),
    }),
    o_ = (0, a.zD)(u.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => j.intl.string(j.t["9dHxRY"]),
        useValue: () => (0, g.bG)([lV.Ay], () => lV.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => aK.A.setAttenuation(lV.Ay.getAttenuation(), e, lV.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    oI = (0, a.zD)(u.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => j.intl.string(j.t.SMt0Gr),
        useValue: () => (0, g.bG)([lV.Ay], () => lV.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => aK.A.setAttenuation(lV.Ay.getAttenuation(), lV.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    oC = (0, a.FW)(u.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.oSdBvW),
        useSubtitle: () => j.intl.string(j.t["0A/8Rt"]),
        usePredicate: () => (0, g.bG)([lV.Ay], () => lV.Ay.supports(ak.O5.ATTENUATION)),
        buildLayout: () => [oN, o_, oI],
    });
var ob = i(801644);
let ov = (0, a.zD)(u.X.VOICE_HARDWARE_MUTE_SILENCE_ALERT_SETTING, {
        useTitle: () => j.intl.string(j.t.pZ0vr4),
        useSubtitle: () => j.intl.string(j.t.tVbzoZ),
        useValue: function () {
            return (0, g.bG)([nj.Ay], () => !nj.Ay.disableHardwareMuteSilenceAlert);
        },
        setValue: function (e) {
            (0, or.A)("hardware_mute_silence_alert_enabled", e, !nj.Ay.disableHardwareMuteSilenceAlert),
                s2.Ay.updatedUnsyncedSettings({ disableHardwareMuteSilenceAlert: !e });
        },
        usePredicate: function () {
            let { enableHardwareSilenceWarning: e } = ob.A.useConfig({ location: "HardwareMuteSilenceAlertSetting" });
            return e;
        },
    }),
    oy = (0, a.zD)(u.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => j.intl.string(j.t.DFPXIG),
        useSubtitle: () => j.intl.string(j.t["UyRX+C"]),
        useValue: function () {
            return (0, g.bG)([lV.Ay], () => lV.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            aK.A.setBypassSystemInputProcessing(e);
        },
        usePredicate: function () {
            return (0, g.bG)([lV.Ay], () => lV.Ay.showBypassSystemInputProcessing() && lV.Ay.isInputProfileCustom());
        },
    });
var oj = i(329139);
let oO = (0, a.zD)(u.X.SPATIAL_AUDIO_EXPERIMENT_OVERRIDE_SETTING, {
        useTitle: () => j.intl.string(oj.default.LGDPhA),
        useSubtitle: () => j.intl.string(oj.default.jZlI6g),
        useValue: function () {
            return (0, g.bG)([lV.Ay], () => lV.Ay.getAudioMixerSettings().experimentOverride);
        },
        setValue: function (e) {
            aK.A.setAudioMixerSettings({ ...lV.Ay.getAudioMixerSettings(), experimentOverride: e });
        },
        useDisabled: function () {
            return (0, g.bG)([lV.Ay], () => !lV.Ay.getMediaEngine().supports(ak.O5.SPATIAL_AUDIO));
        },
        useDisabledMessage: function () {
            return j.intl.string(oj.default["9qCMXb"]);
        },
        usePredicate: function () {
            return "canary" === window.GLOBAL_ENV.RELEASE_CHANNEL;
        },
    }),
    oR = (0, a.zD)(u.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
        useTitle: () => j.intl.string(j.t.jrWHD3),
        useSubtitle: () => j.intl.string(j.t.YCCMkJ),
        useValue: function () {
            return (0, g.bG)([nj.Ay], () => !nj.Ay.disableVoiceChannelChangeAlert);
        },
        setValue: function (e) {
            (0, or.A)("switch_channel_warning_enabled", e, !nj.Ay.disableVoiceChannelChangeAlert),
                s2.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e });
        },
    }),
    oL = (0, a.zD)(u.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
        useTitle: () => j.intl.string(j.t.BbESsg),
        useSubtitle: () => j.intl.string(j.t.LoOB1F),
        useValue: function () {
            return (0, g.bG)([lV.Ay], () => {
                let { vadUseKrisp: e } = lV.Ay.getModeOptions();
                return e;
            });
        },
        setValue: function (e) {
            let t = lV.Ay.getMode();
            aK.A.setMode(t, { vadUseKrisp: e });
        },
        useDisabled: function () {
            return (0, g.bG)([lV.Ay], () => {
                let e = lV.Ay.getMode(),
                    t = lV.Ay.getModeOptions().autoThreshold;
                return e === eA.TBI.VOICE_ACTIVITY && t;
            });
        },
        usePredicate: function () {
            return (0, g.bG)([lV.Ay], () => lV.Ay.isAdvancedVoiceActivitySupported() && lV.Ay.isInputProfileCustom());
        },
    }),
    oD = (0, a.Hn)(u.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => j.intl.string(j.t.wVBHr0),
        useValue: function () {
            return (0, g.bG)([lV.Ay], () => lV.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            ou(j.intl.string(j.t.uY7AcQ), j.intl.string(j.t.gBqik6), () => aK.A.setAudioSubsystem(e));
        },
        useOptions: function () {
            let {
                legacyAudioSubsystemSupported: e,
                experimentalAudioSubsystemSupported: t,
                automaticAudioSubsystemSupported: i,
            } = (0, g.cf)([lV.Ay], () => ({
                legacyAudioSubsystemSupported: lV.Ay.supports(ak.O5.LEGACY_AUDIO_SUBSYSTEM),
                experimentalAudioSubsystemSupported: lV.Ay.supports(ak.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
                automaticAudioSubsystemSupported: lV.Ay.supports(ak.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
            }));
            return S.useMemo(() => {
                let n;
                return (
                    (n = [{ id: ak.rB.STANDARD, value: ak.rB.STANDARD, label: j.intl.string(j.t.dqb2JZ) }]),
                    e && n.push({ id: ak.rB.LEGACY, value: ak.rB.LEGACY, label: j.intl.string(j.t["TYfH+5"]) }),
                    t &&
                        n.push({ id: ak.rB.EXPERIMENTAL, value: ak.rB.EXPERIMENTAL, label: j.intl.string(j.t.liQmtr) }),
                    i && n.push({ id: ak.rB.AUTOMATIC, value: ak.rB.AUTOMATIC, label: j.intl.string(j.t.qNgtO1) }),
                    n
                );
            }, [i, t, e]);
        },
        usePredicate: function () {
            return (0, g.bG)([lV.Ay], () => lV.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    oP = (0, a.zD)(u.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => j.intl.string(j.t.uancuJ),
        useSubtitle: () => j.intl.string(j.t.I1Eoqq),
        useValue: function () {
            return (0, g.bG)([lV.Ay], () => lV.Ay.getQoS());
        },
        setValue: function (e) {
            aK.A.setQoS(e);
        },
        usePredicate: function () {
            return (0, g.bG)([lV.Ay], () => lV.Ay.supports(ak.O5.QOS));
        },
    }),
    oG = (0, a.zD)(u.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => j.intl.string(j.t["4rsOPQ"]),
        useSubtitle: () => j.intl.string(j.t.jtiiCw),
        useValue: function () {
            return (0, g.bG)([lV.Ay], () => lV.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            aK.A.setSilenceWarning(e);
        },
        usePredicate: function () {
            return eY.isPlatformEmbedded;
        },
    }),
    oM = (0, a.bd)(u.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? j.intl.string(j.t.KHsSWK) : j.intl.string(j.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            op(u.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, g.bG)([lV.Ay], () => lV.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [of, oL, oy, oG, ov, oR, oC, oD, oP, oO],
    }),
    oU = (0, a.zD)(u.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => j.intl.string(j.t.iWTwu6),
        useValue: function () {
            return (0, g.bG)([lV.Ay], () => lV.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            aK.A.setEchoCancellation(e, { page: eA.liQ.USER_SETTINGS, section: eA.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, g.bG)([lV.Ay, og.A], () => {
                let e = lV.Ay.getInputDeviceId();
                return og.A.hasEchoCancellation(e);
            });
        },
        usePredicate: function () {
            return (0, g.bG)([lV.Ay], () => lV.Ay.isInputProfileCustom());
        },
    });
var oV = i(459838),
    ok = i(451988),
    ow = i(801102),
    oF = i(160671);
let oB = (0, sO.Ld)();
function oz(e) {
    let { isSpeaking: t, className: i, id: n, ariaDescribedBy: s, ariaLabelledBy: l, disabled: r } = e;
    return (0, E.jsx)("div", {
        role: "meter",
        className: e6()(ow.$I, i),
        id: n,
        "aria-describedby": s,
        "aria-labelledby": l,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? j.intl.string(j.t.haLKZ0) : j.intl.string(j.t.X2hJL7),
        children: (0, E.jsx)("div", { className: e6()(ow.Jx, ow.NU, { [ow.zY]: t && !r, [ow.r9]: r }) }),
    });
}
function oX(e) {
    let { volume: t, id: i, ariaDescribedBy: n, ariaLabelledBy: s, disabled: l } = e,
        { threshold: r, autoThreshold: a } = (0, g.cf)([lV.Ay], () => ({
            threshold: lV.Ay.getModeOptions().threshold,
            autoThreshold: lV.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, g.bG)([lV.Ay], () => lV.Ay.getMode());
    return (0, E.jsx)("section", {
        className: e6()(ow.Mo, ow.jW),
        id: i,
        "aria-describedby": n,
        "aria-labelledby": s,
        children: (0, E.jsx)(nd.A, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return (t = -((100 - e) * 1)), void aK.A.setMode(o, { threshold: t, autoThreshold: a });
            },
            barStyles: { background: es.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: es.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": oB,
            disabled: l,
            children: (0, E.jsxs)("div", {
                className: e6()(ow.NU, ow.TL, ow.Jx, oF.bar),
                children: [
                    (0, E.jsx)("div", { className: e6()(ow.GS, ow.SH), style: { width: l ? 0 : t + 100 + "%" } }),
                    (0, E.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let oY = (0, a.E2)(u.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [j.intl.string(j.t["sqUm+k"]), j.intl.string(j.t.I1Zuq0), j.intl.string(j.t.nuFtHH)],
    usePredicate: () => (0, g.bG)([lV.Ay], () => lV.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, g.cf)([lV.Ay], () => ({
                autoThreshold: lV.Ay.getModeOptions().autoThreshold,
                disabled: lV.Ay.getMode() !== ak.TB.VOICE_ACTIVITY,
            })),
            i = S.useCallback((e) => {
                let t = lV.Ay.getMode(),
                    { threshold: i } = lV.Ay.getModeOptions();
                aK.A.setMode(t, { autoThreshold: e, threshold: i });
            }, []),
            n = (0, g.bG)([lV.Ay], () => lV.Ay.supports(ak.O5.AUTOMATIC_VAD)),
            { volume: s, isSpeaking: l } = (function () {
                let [e, t] = S.useState(-100),
                    [i, n] = S.useState(!1);
                function s(e, i) {
                    t(e), n((i & ak.ME.VOICE) === ak.ME.VOICE);
                }
                return (
                    S.useEffect(() => {
                        let e = new ok.Ep();
                        return (
                            e.start(1e3, () => {
                                lV.Ay.getMediaEngine().on(oV.bg.VoiceActivity, s), e.stop();
                            }),
                            () => {
                                lV.Ay.getMediaEngine().removeListener(oV.bg.VoiceActivity, s), e.stop();
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: i }
                );
            })(),
            r = (0, g.bG)([lV.Ay], () => lV.Ay.isEnabled()),
            a = S.useMemo(
                () =>
                    !r &&
                    (0, E.jsx)("div", {
                        className: ow.B4,
                        children: (0, E.jsx)(W.w, {
                            type: "warning",
                            children: j.intl.format(j.t["O13I+O"], { onEnableClick: () => aK.A.enable(!0) }),
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
                      (0, E.jsx)(er.A, { tag: "legend", id: u, children: j.intl.string(j.t.GByLar) }),
                      (0, E.jsx)(er.A, { id: d, children: o }),
                      (0, E.jsxs)(Z.B, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, E.jsx)(q.d, {
                                  disabled: t,
                                  label: j.intl.string(j.t.lY6j47),
                                  description: o,
                                  checked: e,
                                  onChange: i,
                              }),
                              e
                                  ? (0, E.jsx)(oz, {
                                        isSpeaking: l,
                                        className: ow.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, E.jsx)(oX, { volume: s, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
                              a,
                          ],
                      }),
                  ],
              })
            : (0, E.jsxs)(Z.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, E.jsx)(sw.D, {
                          label: j.intl.string(j.t["sqUm+k"]),
                          description: o,
                          layout: "vertical",
                          children: (i) =>
                              e
                                  ? (0, E.jsx)(oz, {
                                        isSpeaking: l,
                                        className: ow.UJ,
                                        id: i.controlId,
                                        ariaDescribedBy: i.describedById,
                                        ariaLabelledBy: i.labelId,
                                        disabled: t,
                                    })
                                  : (0, E.jsx)(oX, {
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
var oH = i(366010);
let oK = i(993830),
    oW = i(413142),
    oZ = { page: eA.liQ.USER_SETTINGS, section: eA.JJy.SETTINGS_VOICE_AND_VIDEO };
function oq() {
    let e = (0, g.bG)([iC.A], () => (0, oH.q)(iC.A.theme));
    return (0, E.jsx)("img", { src: e ? oK : oW, width: 48, height: 32, alt: "" });
}
let oQ = (0, a.E2)(u.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.t8Qhib), j.intl.string(j.t.hmfkCi)],
    usePredicate: function () {
        return (0, g.bG)([lV.Ay], () => lV.Ay.isInputProfileCustom() && lV.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = S.useCallback((e) => {
                aK.A.setNoiseCancellation("KRISP" === e, oZ), aK.A.setNoiseSuppression("STANDARD" === e, oZ);
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: i,
                isNoiseSuppressionSupported: n,
                isNoiseCancellationSupported: s,
            } = (0, g.cf)([lV.Ay], () => ({
                noiseCancellation: lV.Ay.getNoiseCancellation(),
                noiseSuppression: lV.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: lV.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: lV.Ay.isNoiseCancellationSupported(),
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
                ? j.intl.format(j.t["1q5aTp"], { helpArticle: tN.A.getArticleURL(eA.MVz.NOISE_SUPPRESSION) })
                : j.intl.string(j.t.OWKjw5);
        return (0, E.jsxs)(Z.B, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, E.jsx)(lO.l, {
                    label: j.intl.string(j.t.t8Qhib),
                    description: r,
                    layout: "horizontal",
                    value: t ? "KRISP" : i ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: l,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                s && (0, E.jsx)(oq, {}),
            ],
        });
    },
});
var oJ = i(934729),
    o$ = i(621380);
let o0 = !c.Av;
function o1() {
    return (0, g.bG)([lV.Ay], () => lV.Ay.getMode() === ak.TB.PUSH_TO_TALK);
}
let o2 = (0, a.zD)(u.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return c.Av ? j.intl.string(j.t.tG4Np5) : j.intl.string(j.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, g.bG)([lV.Ay], () => lV.Ay.getMode());
        return S.useMemo(() => {
            if (!c.Av && e === ak.TB.PUSH_TO_TALK)
                return j.intl.format(j.t["VHI4+Y"], { onDownloadClick: () => (0, oJ._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, g.bG)([lV.Ay], () => lV.Ay.getActiveInputProfile() !== o$.m.STUDIO);
    },
    useValue: function () {
        return (0, g.bG)([lV.Ay], () => lV.Ay.getMode() === ak.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, n;
        (t = e ? ak.TB.PUSH_TO_TALK : ak.TB.VOICE_ACTIVITY),
            (n = [e1.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === ak.TB.PUSH_TO_TALK &&
                o0 &&
                (0, Y.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([i.e("31910"), i.e("10919")]).then(i.bind(i, 556506));
                    return (t) =>
                        (0, E.jsx)(e, {
                            title: j.intl.string(j.t.Kdt0Gb),
                            confirmText: j.intl.string(j.t["1WjMbC"]),
                            cancelText: j.intl.string(j.t.BddRzS),
                            onConfirm: () => (0, oJ._)("PTT Limited Modal"),
                            body: j.intl.string(j.t.NIozvt),
                            ...t,
                        });
                }),
            aK.A.setMode(t, void 0, void 0, { analyticsLocations: n });
    },
    useSearchTerms: () => [j.intl.string(j.t["pS+K2L"]), j.intl.string(j.t.nuFtHH)],
});
var o3 = i(371060);
let o6 = (0, a.E2)(u.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["pS+K2L"]), j.intl.string(j.t.nuFtHH)],
        usePredicate: o1,
        Component: function () {
            let e = (0, g.bG)([lV.Ay], () => {
                    let { shortcut: e } = lV.Ay.getModeOptions();
                    return e;
                }),
                t = j.intl.format(j.t.HVvn5T, { onClick: () => (0, eH.openUserSettings)(u.X.KEYBINDS_PANEL) });
            return (0, E.jsx)(sw.D, {
                label: j.intl.string(j.t["o+BJQR"]),
                description: t,
                layout: "horizontal-responsive",
                children: (0, E.jsx)("div", {
                    className: o3.e,
                    children: (0, E.jsx)(tY.A, {
                        defaultValue: e,
                        onChange: (e) => aK.A.setMode(eA.TBI.PUSH_TO_TALK, { shortcut: e }),
                    }),
                }),
            });
        },
    }),
    o4 = (0, a.sN)(u.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => j.intl.string(j.t.GCNMM8),
        useSearchTerms: () => [j.intl.string(j.t["pS+K2L"]), j.intl.string(j.t.nuFtHH)],
        setValue: function (e) {
            aK.A.setMode(eA.TBI.PUSH_TO_TALK, { delay: e });
        },
        minValue: 0,
        maxValue: eA.IjB,
        getInitialValue: function () {
            let { delay: e } = lV.Ay.getModeOptions();
            return e;
        },
        onValueRender: function (e) {
            return e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}\u00A0ms`;
        },
        usePredicate: o1,
    }),
    o7 = (0, a.Qx)(u.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => j.intl.string(j.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, om._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [j.intl.string(j.t.nuFtHH), j.intl.string(j.t.VZPR0R), j.intl.string(j.t.cjPbpT)],
        useValue: function () {
            return (0, g.bG)([lV.Ay], () => lV.Ay.getActiveInputProfile() ?? o$.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [e1.A.USER_SETTINGS_VOICE_AND_VIDEO];
            aK.A.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, om.d)({ location: "InputProfileCategory" });
            return [
                { value: o$.m.VOICE_ISOLATION, name: j.intl.string(j.t.cjPbpT), desc: j.intl.string(j.t.CzhvnE) },
                { value: o$.m.STUDIO, name: j.intl.string(j.t.VZPR0R), desc: j.intl.string(j.t.ZaJksS) },
                { value: o$.m.CUSTOM, name: j.intl.string(j.t["N/PQjv"]), desc: j.intl.string(j.t.SnBmuY) },
            ].filter((t) => {
                let { value: i } = t;
                return e.includes(i);
            });
        },
    }),
    o8 = (0, a.zZ)(u.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, g.bG)([og.A, lV.Ay], () => {
                let e = lV.Ay.getInputDeviceId();
                return (
                    (og.A.hasEchoCancellation(e) || og.A.hasNoiseSuppression(e) || og.A.hasAutomaticGainControl(e)) &&
                    lV.Ay.isInputProfileCustom()
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
        buildLayout: () => [o7, oY, oQ, oU, o2, o6, o4, oM],
    });
var o5 = i(403581),
    o9 = i(983851),
    ue = i(687021),
    ut = i(128450),
    ui = i(796774),
    un = i(209932),
    us = i(813564),
    ul = i(984813),
    ur = i(22231),
    ua = i(428262),
    uo = i(792348),
    uu = i(674168),
    ud = i(277192),
    uc = i(805945),
    ug = i(902460);
function um(e) {
    let { onSelect: t } = e,
        [i, n] = S.useState(!1),
        s = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
        l = ua.Ay.canUseCustomCallSounds(s),
        r = S.useRef(null);
    function a(e) {
        l && (n(!1), t?.(e));
    }
    return (0, E.jsx)(J.Y, {
        targetElementRef: r,
        shouldShow: i,
        position: "left",
        onRequestClose: () => n(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, E.jsx)(iz.l, {
                children: (0, E.jsx)(ud.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: l ? null : (0, E.jsx)(uu.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, E.jsx)(uc.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    n(!i);
                },
                text: j.intl.string(j.t.uOe0Az),
                children: (0, E.jsx)(ur.R, { size: "md", color: "currentColor", className: ug.Wo }),
            }),
    });
}
function uA(e) {
    let { sound: t } = e,
        { previewSound: i } = (0, uo.A)(t, null),
        n =
            0 === (0, us.wH)()
                ? j.intl.string(j.t.OASXjt)
                : j.intl.formatToPlainString(j.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, E.jsx)(uc.dT, {
        onClick: i,
        text: n,
        children: (0, E.jsx)(o9.H, { size: "md", color: "currentColor", className: ug.wg }),
    });
}
function uh(e) {
    let { sound: t, isGlobal: i, onSelect: n } = e,
        s = null != t,
        l = t?.emojiId,
        r = t?.emojiName,
        a = s && (null != r || null != l);
    return (0, E.jsxs)("div", {
        className: ug.D6,
        children: [
            (0, E.jsxs)("div", {
                className: ug.kL,
                children: [
                    a && (0, E.jsx)(sT.A, { emojiId: l, emojiName: r, className: ug.Zg }),
                    (0, E.jsx)(ei.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        className: ug.dj,
                        children:
                            null == t
                                ? j.intl.string(j.t.PoWNfe)
                                : i
                                  ? j.intl.format(j.t.B6HU6O, {
                                        soundName: t.name,
                                        subtextHook: (e) =>
                                            (0, E.jsx)(ei.E, {
                                                variant: "text-xs/medium",
                                                color: "text-default",
                                                tag: "span",
                                                children: e,
                                            }),
                                    })
                                  : t.name,
                    }),
                    s
                        ? (0, E.jsx)(uA, { sound: t })
                        : (0, E.jsx)(o9.H, { size: "md", color: "currentColor", className: ug.Gk }),
                ],
            }),
            (0, E.jsxs)("div", {
                className: ug.kL,
                children: [
                    (0, E.jsx)(um, { onSelect: n }),
                    s &&
                        !i &&
                        (0, E.jsx)(uc.dT, {
                            onClick: () => n(null),
                            text: j.intl.string(j.t.jmtcGA),
                            children: (0, E.jsx)(lL.u, {
                                size: "md",
                                color: es.A.unsafe_rawColors.RED_400.css,
                                className: ug.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var uE = i(617617);
i(980504);
var uS = i(384863);
function uT(e) {
    return (0, g.bG)([un.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: i } = e;
        return un.A.getSound("0" === t ? "0" : t, i);
    });
}
function ux(e) {
    let { guildId: t } = e,
        i = (0, g.bG)([uE.A], () => uE.A.settings.guilds?.guilds?.[t]?.joinSound),
        n = uT(i);
    if (null == i || null == n) return null;
    let { emojiId: s, emojiName: l } = n,
        r = null != s || null != l;
    return (0, E.jsxs)("div", {
        className: uS.Io,
        children: [
            r
                ? (0, E.jsx)(sT.A, { emojiId: s, emojiName: l, className: uS.nW })
                : (0, E.jsx)(o9.H, { size: "md", color: "currentColor", className: uS.nW }),
            (0, E.jsx)(ei.E, { className: uS.dK, variant: "text-xs/medium", children: n.name }),
        ],
    });
}
let up = (0, a.E2)(u.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, nW.Ay)(),
            [t, i] = S.useState("0"),
            n = (0, ul.mz)(t),
            s = uT(n),
            l = n?.type === ul.PP.GLOBAL,
            r = (0, g.bG)([un.A], () => un.A.hasFetchedAllSounds()) && null != n && null == s;
        S.useEffect(() => {
            r && (0, us.ND)({ location: e });
        }, [r, e]),
            S.useEffect(() => {
                (0, ui.E7)();
            }, []);
        let a = S.useCallback((e, t) => {
            let { inDropdown: i } = t;
            return null == e ? null : i ? (0, E.jsx)(ux, { guildId: e.value }) : null;
        }, []);
        return (0, E.jsxs)(i_.n, {
            label: j.intl.string(j.t.nzUc3B),
            description: j.intl.format(j.t.u9RWmv, { helpdeskArticle: tN.A.getArticleURL(eA.MVz.SOUNDBOARD) }),
            children: [
                (0, E.jsx)(ue.A, {
                    guildId: t,
                    className: uS.Dt,
                    globalOption: { label: j.intl.string(j.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        i(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, E.jsxs)(ut.A, {
                    title: j.intl.format(j.t.I2TsYN, {
                        nitroWheelHook: () => (0, E.jsx)(o5.t, { size: "md", color: "currentColor", className: uS.ax }),
                    }),
                    children: [
                        (0, E.jsx)(uh, {
                            sound: s,
                            isGlobal: l,
                            onSelect: (i) => {
                                null == i ? (0, us.Dv)(t, e) : (0, us.un)(t, i, e);
                            },
                        }),
                        r &&
                            (0, E.jsx)(tf.p, {
                                className: uS.lm,
                                messageType: tf.Y.WARNING,
                                children: j.intl.string(j.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        });
    },
});
var uf = i(824744);
let uN = (0, a.sN)(u.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => j.intl.string(j.t.kbFsAD),
    useSubtitle: () => j.intl.format(j.t.BPbGq7, { helpCenterArticle: tN.A.getArticleURL(eA.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [e1.A.USER_SETTINGS_VOICE_AND_VIDEO],
            i = (0, uf.w)(e);
        (0, ui.iy)(i, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, us.wH)();
        return (0, uf.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var u_ = i(864145);
let uI = (0, a.sN)(u.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => j.intl.string(j.t["2JbvKw"]),
        useSubtitle: () => j.intl.string(j.t.INenzY),
        setValue: function (e) {
            let t = (0, uf.w)(e);
            L.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = L.HO.getSetting();
            return (0, uf.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, u_.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    uC = (0, a.zZ)(u.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => j.intl.string(j.t.ABjMWI),
        buildLayout: () => [uN, uI, up],
    });
var ub = i(803224),
    uv = i(552122);
let uy = (0, a.E2)(u.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [j.intl.string(j.t.fgSHf8)],
        usePredicate: () => null != uv.A.useHolidaySoundpack(),
        Component: () =>
            (0, E.jsx)(ei.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: j.intl.format(j.t.Eup6Wv, {
                    onClick: () => (0, eH.openUserSettings)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    uj = (0, a.AK)(u.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.eyGEE4),
        useSearchTerms: () => [j.intl.string(j.t.eyGEE4)],
        destinationKey: u.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    uO = (0, a.gN)(u.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [uj] });
var uR = i(264686);
let uL = (0, nD.D)(() => ({ currentPlayingSound: null }));
function uD() {
    let e = uL.getField("currentPlayingSound");
    e?.stop(), uL.setState({ currentPlayingSound: null });
}
function uP(e) {
    let t = uL.getField("currentPlayingSound");
    t?.stop();
    let i = (0, rR.Ak)(e);
    uL.setState({ currentPlayingSound: i });
}
function uG(e) {
    return (0, a.zD)(`${u.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => j.intl.format(j.t.OOiGCM, { onClick: () => uP(e.sound) }),
        useSearchTerms: e.useSearchTerms,
        useValue: () => {
            let t = (0, g.bG)([ub.A], () => ub.A.isSoundDisabled(e.sound)),
                i = e.useDisabled?.();
            return !t && !i;
        },
        setValue: (t) => {
            let i = ub.A.getDisabledSounds().filter((t) => t !== e.sound);
            t || i.push(e.sound), uR.default.setDisabledSounds(i);
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                i = (0, g.bG)([ub.A], () => ub.A.getDisableAllSounds());
            return t || i;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let uM = [
        { useTitle: () => j.intl.string(j.t.hK51Yg), sound: "deafen" },
        { useTitle: () => j.intl.string(j.t.XiejaJ), sound: "undeafen" },
        { useTitle: () => j.intl.string(j.t.w4m945), sound: "mute" },
        { useTitle: () => j.intl.string(j.t.YqAjXy), sound: "unmute" },
        { useTitle: () => j.intl.string(j.t.JoTq8n), sound: "camera_on" },
        { useTitle: () => j.intl.string(j.t["8P6tQ6"]), sound: "camera_off" },
        { useTitle: () => j.intl.string(j.t["juL9/L"]), sound: "disconnect" },
        {
            useTitle: () => j.intl.string(j.t.x98vQq),
            useSearchTerms: () => [j.intl.string(j.t.Q8gkVL)],
            sound: "ptt_start",
        },
        {
            useTitle: () => j.intl.string(j.t["1HjRqC"]),
            useSearchTerms: () => [j.intl.string(j.t.Q8gkVL)],
            sound: "ptt_stop",
        },
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
    uU = (0, a.D1)(u.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? j.intl.formatToPlainString(j.t["0JYT98"], { count: t })
                : j.intl.formatToPlainString(j.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => op(u.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                uD();
            };
        },
        buildLayout: () => uM.map((e) => uG(e)),
    }),
    uV = (0, a.zZ)(u.X.SOUNDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, g.bG)([ub.A], () => ub.A.getDisableAllSounds());
            return S.useMemo(() => {
                if (e)
                    return {
                        type: h.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        useText: () =>
                            j.intl.format(j.t.fRvixS, {
                                onClick: () => (0, eH.openUserSettings)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                            }),
                    };
            }, [e]);
        },
        buildLayout: () => [uU, uy, uO],
    }),
    uk = (0, a.zD)(u.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => j.intl.string(j.t.e3Zz3F),
        useSubtitle: () => j.intl.string(j.t.RztTjP),
        useValue: function () {
            return !L.uh.useSetting();
        },
        setValue: function (e) {
            (0, or.A)("stream_previews_disabled", !e, L.uh.getSetting(), [e1.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                L.uh.updateSetting(!e);
        },
    }),
    uw = (0, a.zD)(u.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => j.intl.string(j.t.GmWk2E),
        useSearchTerms: () => [j.intl.string(j.t["Fj/xn1"])],
        useSubtitle: () => j.intl.string(j.t["Fj/xn1"]),
        useValue: function () {
            return (0, g.bG)([lV.Ay], () => lV.Ay.getVideoHook());
        },
        setValue: aK.A.setVideoHook,
        usePredicate: function () {
            return (0, g.bG)([lV.Ay], () => lV.Ay.supportsVideoHook());
        },
    }),
    uF = (0, a.zD)(u.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => j.intl.string(j.t["4I0qzZ"]),
        useValue: function () {
            return (0, g.bG)([lV.Ay], () => lV.Ay.getExperimentalSoundshare());
        },
        setValue: aK.A.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, g.bG)([lV.Ay], () => {
                let e = lV.Ay.supportsExperimentalSoundshare(),
                    t = lV.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    uB = (0, a.zD)(u.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => j.intl.string(j.t["/jwMtn"]),
        useSubtitle: () => j.intl.string(j.t.zlA23F),
        useValue: function () {
            return (0, g.bG)([lV.Ay], () => lV.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [e1.A.USER_SETTINGS_VOICE_AND_VIDEO];
            aK.A.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return lV.Ay.supports(ak.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    uz = (0, a.sN)(u.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => j.intl.string(j.t.fhEzfj),
        setValue: function (e) {
            let t = [e1.A.USER_SETTINGS_VOICE_AND_VIDEO];
            aK.A.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: lV.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            let e = (0, g.bG)([lV.Ay], () => lV.Ay.getSidechainCompression());
            return lV.Ay.supports(ak.O5.SIDECHAIN_COMPRESSION) && e;
        },
    }),
    uX = (0, a.zD)(u.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
        useTitle: () => j.intl.string(j.t.lt8rRx),
        useSubtitle: () => j.intl.string(j.t.ie1mgY),
        useValue: function () {
            return (0, g.bG)([lV.Ay], () => lV.Ay.getUseSystemScreensharePicker());
        },
        setValue: function (e) {
            (0, c.cX)() && e
                ? (0, sc.A)({
                      title: j.intl.string(j.t["9jf31O"]),
                      subtitle: j.intl.string(j.t.uBd6JW),
                      variant: "primary",
                      onConfirm: () => {
                          aK.A.setUseSystemScreensharePicker(e), ln.A.app.relaunch();
                      },
                      confirmText: j.intl.string(j.t.BddRzS),
                  })
                : aK.A.setUseSystemScreensharePicker(e);
        },
        usePredicate: function () {
            return (0, g.bG)([lV.Ay], () => lV.Ay.supportsSystemScreensharePicker() && (0, c.cX)());
        },
    }),
    uY = (0, a.bd)(u.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? j.intl.string(j.t.qrMyvm) : j.intl.string(j.t.LEtTNl)),
        useCollapsedSubtitle: () => op(u.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [uB, uz, uX, uF, uw],
    }),
    uH = (0, a.zZ)(u.X.STREAMING_CATEGORY, { useTitle: () => j.intl.string(j.t.KDdjou), buildLayout: () => [uk, uY] }),
    uK = (0, a.E2)(u.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, E.jsx)(aG.U, {
                label: j.intl.string(j.t.UTM8VP),
                deviceType: ak.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !0,
            });
        },
    }),
    uW = (0, a.E2)(u.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, E.jsx)(aG.U, {
                label: j.intl.string(j.t.xuYQ0n),
                deviceType: ak.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !0,
            });
        },
    }),
    uZ = (0, a.zC)(u.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [uK, uW] }),
    uq = (0, a.sN)(u.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => j.intl.string(j.t.Rtsr6w),
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = lV.Ay.getInputVolume();
            return (0, uf.M)(e);
        },
        asValueChanges: function (e) {
            let t = [e1.A.USER_SETTINGS_VOICE_AND_VIDEO],
                i = (0, uf.w)(e);
            aK.A.setInputVolume(i, { analyticsLocations: t });
        },
    }),
    uQ = (0, a.sN)(u.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => j.intl.string(j.t.aUJ062),
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = lV.Ay.getOutputVolume();
            return (0, uf.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [e1.A.USER_SETTINGS_VOICE_AND_VIDEO],
                i = (0, uf.w)(e);
            aK.A.setOutputVolume(i, { analyticsLocations: t });
        },
    }),
    uJ = (0, a.zC)(u.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [uq, uQ] });
var u$ = i(702841),
    u0 = i(349288),
    u1 = i(152567),
    u2 = i(593290);
let u3 = `${tN.A.getArticleURL(eA.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    u6 = (0, a.E2)(u.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.nuFtHH)],
        usePredicate: function () {
            return (0, u$.bG)([lV.Ay], () => lV.Ay.supports(ak.O5.LOOPBACK));
        },
        Component: function () {
            return (0, u$.bG)([lV.Ay], () => lV.Ay.supports(ak.O5.LOOPBACK))
                ? (0, E.jsx)(u1.A, {
                      size: "md",
                      notchBackground: u1.V.GRAY,
                      captionVoice: j.intl.string(j.t.bp3JOV),
                      captionNoVoice: (0, E.jsxs)(E.Fragment, {
                          children: [
                              (0, E.jsx)(ei.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-default",
                                  children: j.intl.string(j.t.bgn75v),
                              }),
                              j.intl.string(j.t["MA+OZh"]),
                              (0, E.jsx)(u0.Anchor, {
                                  className: u2.X,
                                  href: tN.A.getArticleURL(eA.MVz.NO_INPUT_DETECTED),
                                  children: j.intl.string(j.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: j.intl.format(j.t["V+B3FH"], { guideURL: u3 }),
                      buttonTest: j.intl.string(j.t.gyljWE),
                      buttonStop: j.intl.string(j.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: eA.liQ.USER_SETTINGS, section: eA.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    u4 = eY.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function u7(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: i } = e;
    return (0, E.jsxs)(Z.B, {
        children: [
            i && (0, E.jsx)(lB, { sourcePage: "voice" }),
            t && (0, E.jsx)(sm.A, { look: sm.k.WARNING, children: j.intl.string(j.t.Ioz3gx) }),
        ],
    });
}
let u8 = (0, a.zZ)(u.X.VOICE_CATEGORY, {
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
            let e = lF("voice"),
                t = (0, aM.x5)(ak.oh.AUDIO_INPUT),
                i = (0, aM.x5)(ak.oh.AUDIO_OUTPUT),
                n = S.useMemo(() => {
                    let e = u4.some((e) => t?.hardwareId?.startsWith(e)),
                        n = u4.some((e) => i?.hardwareId?.startsWith(e));
                    return e && n && t?.containerId != null && t.containerId === i?.containerId;
                }, [t, i]);
            return S.useMemo(
                () =>
                    e.canPrompt || n
                        ? {
                              type: h.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, E.jsx)(u7, {
                                      inputAndOutputAreBluetooth: n,
                                      canPromptSystemServiceInstallForVoice: e.canPrompt,
                                  }),
                          }
                        : null,
                [e.canPrompt, n],
            );
        },
        buildLayout: () => [uZ, uJ, u6],
    }),
    u5 = (0, a.t_)(u.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => j.intl.string(j.t.B1fFpf),
        buildLayout: () => [u8, o8, aX, uH, uV, uC, oc],
    }),
    u9 = (0, a.i4)(u.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.B1fFpf),
        usePredicate: () => lV.Ay.isSupported(),
        icon: aC.c,
        useMenu: ab.A,
        buildLayout: () => [u5],
    }),
    de = (0, a.zZ)(u.X.WINDOWS_CATEGORY, {
        buildLayout: () => [rT, au, rx, r_],
        initialize: () => {
            rS();
        },
    }),
    dt = (0, a.t_)(u.X.WINDOWS_PANEL, { useTitle: () => j.intl.string(j.t.ZkDZov), buildLayout: () => [de] }),
    di = (0, a.i4)(u.X.WINDOWS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.ZkDZov),
        icon: to.k,
        usePredicate: () => eY.isPlatformEmbedded && (0, eY.isWindows)(),
        buildLayout: () => [dt],
    }),
    dn = (0, a.WI)(u.X.APP_SECTION, {
        useTitle: () => j.intl.string(j.t.gcyH1J),
        buildLayout: function () {
            let e = (0, o.SB)("AppSection_buildLayout");
            return [u9, ly, sn, aa, e ? aI : rc, rh, e ? null : di, e ? null : rb].filter(N.Vq);
        },
    });
var ds = i(360669),
    dl = i(974544),
    dr = i(546605),
    da = i(423764),
    du = i(289873),
    dd = i(465323),
    dc = i(37766),
    dg = i(194261),
    dm = i(391048),
    dA = i(753390),
    dh = i(99696),
    dE = i(202613),
    dS = i(615405),
    dT = i(580630),
    dx = i(83617),
    dp = i(935208),
    df = i(607399),
    dN = i(150934),
    d_ = i(256006),
    dI = i(198970),
    dC = i(71532);
let db = /[^0-9/]/g,
    dv = /[^0-9]/g;
class dy extends S.PureComponent {
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
                ((n = (i = e.replace(db, "").split("/"))[0]),
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
            ? (u = u.replace(dv, ""))
            : u === r && e.includes("/") && !r.includes("/") && (u += "/"),
            u.length > e.length && (d += u.length - e.length),
            (this.selectionStart = d),
            null != a && a(u, t);
    };
    render() {
        return (0, E.jsx)(lX.k, {
            ...this.props,
            inputMode: "numeric",
            onChange: this.handleChange,
            inputRef: this.setRef,
        });
    }
}
var dj = i(832208),
    dO = i(536439);
let dR = [
        {
            fields: [
                {
                    expirationDate: {
                        name: "expirationDate",
                        id: (0, sO.Ld)(),
                        title: () => j.intl.string(j.t["CeBa/4"]),
                        autoComplete: "cc-exp",
                        placeholder: () => j.intl.string(j.t.xeEWQ6),
                        pattern: "\\d*",
                        getClassNameForLayout: () => dO.ep,
                        renderInput: (e) => (0, E.jsx)(dy, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    dL = function (e) {
        let { onCardInfoChange: t, className: i, expirationDate: n, error: s } = e,
            [l, r] = S.useState(!1),
            [a, o] = S.useState(null),
            [u, d] = S.useState(n);
        return (
            S.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, E.jsx)(dj.A, {
                className: i,
                form: dR,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: s,
                onFieldChange: (e) => {
                    l || "" === e || r(!0),
                        (l && "" === e) || !(0, dC.So)(e) ? o(j.intl.string(j.t["9/zZdl"])) : o(null),
                        d(e);
                },
            })
        );
    };
var dD = i(219887),
    dP = i(276589);
let dG = "isDefault";
class dM extends S.PureComponent {
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
            expiresMonth: t instanceof dE.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof dE.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: i,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        sr.h.wait(() => {
            (0, dA.ey)(), (0, dA.tc)();
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
                      className: dP.zc,
                      children: (0, E.jsx)(W.w, { type: "critical", children: t.message }),
                  })
                : null
            : (0, E.jsx)("div", {
                  className: dP.zc,
                  children: (0, E.jsx)(W.w, { type: "critical", children: e.message }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: i } = this.props,
            n = (0, d_.g)(i);
        return (0, E.jsxs)("div", {
            className: dP.yV,
            children: [
                (0, E.jsx)(ei.E, {
                    className: dP.bV,
                    variant: "text-sm/normal",
                    children: j.intl.string(j.t["50Auo2"]),
                }),
                (0, E.jsx)(dI.Ay, {
                    ...e,
                    mode: dI.Ay.Modes.EDIT,
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
            className: dP.yV,
            children: [
                (0, E.jsx)(ei.E, { className: dP.bV, variant: "text-sm/normal", children: j.intl.string(j.t.Fo2YP7) }),
                (0, E.jsx)(dL, {
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
            className: dP.AU,
            children: (0, E.jsxs)(Z.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, E.jsx)(a$.e, {
                        children: (0, E.jsxs)("div", {
                            className: dP.lH,
                            children: [
                                i
                                    ? (0, E.jsx)(tr.m, {
                                          text: j.intl.string(j.t["v6/z28"]),
                                          children: (0, E.jsx)("div", { "aria-hidden": !0, className: dP.dm }),
                                      })
                                    : null,
                                (0, E.jsx)(eG.$, {
                                    type: "button",
                                    disabled: i || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: df.Fr ? "sm" : "md",
                                    text: df.Fr ? j.intl.string(j.t.oyYWHE) : j.intl.string(j.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, E.jsxs)(a$.e, {
                        children: [
                            (0, E.jsx)(eG.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: df.Fr ? "sm" : "md",
                                text: j.intl.string(j.t["ETE/oC"]),
                            }),
                            (0, E.jsx)(eG.$, {
                                loading: e,
                                disabled: !n || t || !s,
                                type: "submit",
                                variant: "active",
                                size: df.Fr ? "sm" : "md",
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
            r = e instanceof dE.SJ;
        return (0, E.jsx)(eb.Z, {
            editable: !0,
            className: e6()(dP.Nr, n),
            children: (0, E.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, E.jsxs)("div", {
                        className: dP.__invalid_paymentSection,
                        children: [
                            (0, E.jsx)(dD.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: s,
                                locale: i,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, E.jsx)("div", { className: dP.Um, children: j.intl.string(j.t["3R0U0b"]) })
                                : null,
                            (0, E.jsx)("div", {
                                className: dP.Sv,
                                children: r
                                    ? j.intl.format(j.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : j.intl.string(j.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, E.jsx)("div", {
                        className: dP.D5,
                        children: (0, E.jsx)(dN.S, {
                            value: dG,
                            checked: l,
                            onChange: (e) => this.handleFieldChange(e, dG),
                            label: j.intl.string(j.t.nag9Og),
                            labelType: "secondary",
                        }),
                    }),
                    (0, E.jsx)(eM.c, {}),
                    this.renderActions(),
                ],
            }),
        });
    }
}
let dU = g.Ay.connectStores([dS.A], () => ({ updateError: dS.A.editSourceError, removeError: dS.A.removeSourceError }))(
    dM,
);
var dV = i(776409),
    dk = i(447774),
    dw = i(95322);
class dF extends S.PureComponent {
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
            ? (0, E.jsx)(dU, {
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
                      n ? null : (0, E.jsx)(eM.c, { className: dw.__invalid_sourceDivider }),
                      (0, E.jsxs)("div", {
                          className: dw.Yb,
                          children: [
                              (0, E.jsx)(dD.A, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: s,
                                  locale: l,
                                  showSubtext: !0,
                                  showLabels: !0,
                                  showPaymentSourceIcon: !0,
                              }),
                              (0, E.jsx)(eG.$, {
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
let dB = S.memo(function (e) {
    let { paymentSource: t, hideDivider: i, isForSubscription: n, locale: s, onRedeemClick: l } = e,
        [r, a] = S.useState(null),
        o = (0, g.bG)([io.default], () => io.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, g.bG)([dS.A], () => dS.A.ipCountryCode),
        d = S.useMemo(() => (0, dd.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        S.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : dA.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, E.jsxs)(E.Fragment, {
            children: [
                i ? null : (0, E.jsx)(eM.c, { className: dw.__invalid_sourceDivider }),
                (0, E.jsxs)("div", {
                    className: dw.Yb,
                    children: [
                        void 0 !== t
                            ? (0, E.jsx)(dD.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: n,
                                  locale: s,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, E.jsxs)(lW.A, {
                                  align: lW.A.Align.CENTER,
                                  children: [
                                      (0, E.jsx)(dc._, { size: "lg" }),
                                      (0, E.jsx)(ei.E, {
                                          variant: "text-sm/medium",
                                          className: dk.Wi,
                                          children: j.intl.string(dV.default["/FQWfA"]),
                                      }),
                                  ],
                              }),
                        (0, E.jsxs)("div", {
                            className: dw.zy,
                            children: [
                                (0, E.jsx)("div", {
                                    className: dw.Tq,
                                    children:
                                        null == r
                                            ? (0, E.jsx)(du.y, { type: du.y.Type.SPINNING_CIRCLE })
                                            : (0, E.jsx)(ei.E, {
                                                  variant: "text-sm/medium",
                                                  children: (() => {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          i = t ?? d,
                                                          n = String(i).toUpperCase(),
                                                          s = (0, dT.$g)(e ?? 0, i, {
                                                              currencyDisplay: "narrowSymbol",
                                                          });
                                                      return `${n} ${s}`;
                                                  })(),
                                              }),
                                }),
                                (0, E.jsx)(eG.$, {
                                    variant: "secondary",
                                    onClick: l,
                                    size: "sm",
                                    text: j.intl.string(dV.default.iBFPMf),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class dz extends S.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            await dA.Gr(e), this.setState({ editingPayment: e });
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            await dA.JQ(e), this.setState({ editingPayment: null });
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                await dA.Ps(e, t), this.setState({ editingPayment: null });
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, dx.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, Y.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 362111));
                return (t) => (0, E.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, dm.ET)();
                },
                onCloseRequest: eA.tEg,
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, E.jsxs)("div", {
            className: dw.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, E.jsxs)("div", {
                          className: dw.z8,
                          children: [
                              (0, E.jsx)(ei.E, { variant: "text-sm/normal", children: j.intl.string(j.t.aRHpAB) }),
                              (0, E.jsx)(ei.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: dw.Sv,
                                  children: j.intl.string(j.t.o9bOIl),
                              }),
                          ],
                      })
                    : null,
                (0, E.jsx)(eG.$, { onClick: this.handleAddPaymentMethod, text: j.intl.string(j.t.CpOiEO) }),
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
            u = eZ()
                .values(n)
                .sort((e, t) => (e.id === i ? -1 : t.id === i ? 1 : dp.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof dE.LQ)),
            c = u.filter((e) => e instanceof dE.LQ),
            g = this.state.editingPayment,
            m = d.findIndex((e) => e.id === g),
            A = d.map((e, t) =>
                (0, E.jsx)(
                    dF,
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
                              dB,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || m === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: s,
                                  onRedeemClick: () =>
                                      (0, dh.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page" }),
                              },
                              e.id,
                          ),
                      )
                    : (0, E.jsx)(dB, {
                          hideDivider: 0 === d.length || m === d.length - 1,
                          isForSubscription: !1,
                          locale: s,
                          onRedeemClick: () =>
                              (0, dh.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page" }),
                      })),
            (0, E.jsxs)(E.Fragment, {
                children: [
                    t
                        ? (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsxs)(eP.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, E.jsx)(dg.X, { size: "sm", className: dw.hz }),
                                          " ",
                                          j.intl.string(j.t.W26xGQ),
                                      ],
                                  }),
                                  (0, E.jsx)(ei.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: j.intl.string(j.t.h6V3uK),
                                  }),
                              ],
                          })
                        : null,
                    A,
                    o && e,
                    m !== d.length - 1 || (o && c.length > 0) ? (0, E.jsx)(eM.c, {}) : null,
                    this.renderFooter(),
                ],
            })
        );
    }
}
var dX = i(459357),
    dY = i(295405),
    dH = i(166403),
    dK = i(773669),
    dW = i(589764);
function dZ() {
    let e = (0, dr.vg)("PaymentMethodsHeader"),
        t = (0, g.bG)([io.default], () => io.default.getCurrentUser()?.storeCountry);
    return e && t?.country != null ? { country: t.country, countryName: (0, da.Gw)(t.country) } : null;
}
let dq = (0, a.E2)(u.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                i = (0, g.bG)([dS.A], () => dS.A.isSyncing),
                n = (0, g.bG)([dY.A], () => dY.A.paymentSources),
                s = (0, g.bG)([dY.A], () => dY.A.defaultPaymentSourceId),
                l = (0, g.bG)([dK.default], () => dK.default.locale),
                r = (0, g.bG)([dH.A], () => dH.A.getPremiumTypeSubscription()),
                a = (0, g.bG)([dS.A], () => dS.A.isRemovingPaymentSource),
                o = (0, g.bG)([dS.A], () => dS.A.isUpdatingPaymentSource),
                { enabled: u } = (0, dX.c)({ location: "UserSettingsBilling" });
            return (S.useEffect(() => {
                dA.$o(), dA.hP();
            }, []),
            i && 0 === Object.keys(n).length)
                ? (0, E.jsx)("div", { className: dW.o, children: (0, E.jsx)(du.y, {}) })
                : (0, E.jsx)(dz, {
                      showHeader: t,
                      paymentSources: n,
                      defaultPaymentSourceId: s,
                      premiumSubscriptionPaymentSourceId:
                          null != r && r.status !== eA.Dmq.CANCELED ? r.paymentSourceId : null,
                      locale: l,
                      removing: a,
                      submitting: o,
                      showGiftCards: u,
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t.W26xGQ), j.intl.string(j.t["3pIjBH"])],
    }),
    dQ = (0, a.zZ)(u.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.W26xGQ),
        useSubtitle: () => {
            let e = dZ();
            return null != e ? j.intl.format(j.t.e2t1G5, { country: e.countryName }) : j.intl.string(j.t.h6V3uK);
        },
        useSubtitleDecoration: function () {
            return null == dZ()
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
        buildLayout: () => [dq],
    });
var dJ = i(549363),
    d$ = i(545075);
let d0 = (0, a.E2)(u.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            let e = (0, g.bG)([dK.default], () => dK.default.locale);
            return (0, E.jsxs)(E.Fragment, { children: [(0, E.jsx)(d$.kb, {}), (0, E.jsx)(dJ.A, { locale: e })] });
        },
        useSearchTerms: () => [j.intl.string(j.t.obLrcK)],
    }),
    d1 = (0, a.zZ)(u.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => j.intl.string(j.t.obLrcK),
        buildLayout: () => [d0],
    }),
    d2 = (0, a.t_)(u.X.BILLING_PANEL, {
        useTitle: () => j.intl.string(j.t.oeUm2s),
        buildLayout: () => [dQ, d1],
        useObscuredNotice: dl.L,
    }),
    d3 = (0, a.i4)(u.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.oeUm2s),
        icon: ds.B,
        buildLayout: () => [d2],
    });
var d6 = i(597770),
    d4 = i(962644),
    d7 = i(35587),
    d8 = i(86379);
let d5 = (0, a.E2)(u.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: d$.uK,
        usePredicate: () => (0, d8.Hp)(),
        useSearchTerms: () => [j.intl.string(j.t.vwMEHS)],
    }),
    d9 = (0, a.zZ)(u.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [d5] });
var ce = i(532446),
    ct = i(869038),
    ci = i(499454),
    cn = i(45938);
class cs extends S.Component {
    state = { codeInput: "", submitting: !1, hasError: !1, isPromoCode: !1 };
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return { ...e, object: eA.ZSU.BUTTON_CTA };
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
                    await (0, dh.Qp)(i),
                        (0, dh.HF)({ initialCode: i, withRedemptionSuccessModal: !0 }),
                        this.setState({ codeInput: "" });
                    return;
                } catch {}
            let e = (0, cn.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let n = await ct.A.resolveGiftCode(e);
            if (null != n && null != n.giftCode.promotion)
                throw (this.setState({ isPromoCode: !0 }), Error("Cannnot redeem promotion code as gift"));
            eo.default.track(eA.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: {
                    ...this.analyticsLocation,
                    section: eA.JJy.LIBRARY_INVENTORY_CODE_REDEMPTION,
                    object: eA.ZSU.BUTTON_CTA,
                },
            }),
                (0, ci.h)({ processedCode: e }),
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
        return (0, E.jsx)(i_.n, {
            label: e ? void 0 : j.intl.string(j.t["il+VCo"]),
            children: (0, E.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, E.jsxs)(ce.M, {
                    children: [
                        (0, E.jsx)(lX.k, {
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
                        (0, E.jsx)(eG.$, {
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
function cl(e) {
    let { redesign: t = !1 } = e,
        { enabled: i } = (0, dX.c)({ location: "UserSettingsBilling" }),
        n = S.useContext(eo.AnalyticsContext),
        s = (0, g.bG)([eF.A], () => eF.A.enabled);
    return (0, E.jsx)(cs, { analyticsContext: n, obscureInput: s, acceptGiftCardRedemption: i, redesign: t });
}
let cr = (0, a.E2)(u.X.GIFT_CODE_REDEMPTION_SETTING, {
    Component: cl,
    usePredicate: () => !(0, d8.Hp)(),
    useSearchTerms: () => [j.intl.string(j.t["jcSP+g"]), j.intl.string(j.t["il+VCo"])],
});
var ca = i(725570),
    co = i(707554),
    cu = i(736653),
    cd = i(46054);
let cc = rw().duration(30, "days");
var cg = i(264779),
    cm = i(416052),
    cA = i(961302);
function ch(e) {
    let { onClose: t, transitionState: i } = e;
    return (0, E.jsx)(lz.Modal, {
        title: "",
        size: "md",
        input: (0, E.jsx)("div", { className: cA.aR }),
        onClose: async () => await t(),
        actions: [{ text: j.intl.string(j.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: i,
        children: (0, E.jsxs)("div", {
            className: cA.t4,
            children: [
                (0, E.jsx)(eP.D, { variant: "heading-xl/semibold", children: j.intl.string(j.t.iufib1) }),
                (0, E.jsx)(ei.E, { variant: "text-md/normal", className: cA.G3, children: j.intl.string(j.t.eAn6z2) }),
            ],
        }),
    });
}
let cE = function (e) {
    let { onClose: t, onClaim: i, code: n, outboundPromotion: s, transitionState: l } = e,
        [r, a] = S.useState(null),
        o = (0, sO.GV)(),
        { analyticsLocations: u } = (0, nW.Ay)(e1.A.USER_SETTINGS_GIFT_INVENTORY);
    return (S.useEffect(() => {
        null == n &&
            (0, cg.kd)({
                promotionId: s.id,
                promotionTitle: s.outboundTitle,
                partnerId: s.partnerId,
                analyticsLocations: u,
            })
                .then((e) => i(e))
                .catch((e) => a(e?.body?.code));
    }, [n, s.id, s.outboundTitle, s.partnerId, i, u]),
    null != r)
        ? (0, E.jsx)(ch, { onClose: t, transitionState: l })
        : null == n
          ? (0, E.jsx)(du.y, { className: cA.Lq })
          : (0, E.jsx)(lz.Modal, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, E.jsxs)("div", {
                    className: cA.N1,
                    children: [
                        (0, E.jsx)("div", { className: cA.Qw }),
                        (0, E.jsx)(eP.D, { variant: "heading-xl/semibold", children: j.intl.string(j.t["23BfZh"]) }),
                        (0, E.jsx)(ei.E, {
                            variant: "text-md/normal",
                            className: cA.G3,
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
                            let e = (0, cg.kc)(n, s);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: l,
                "aria-label": o,
                children: (0, E.jsxs)("div", {
                    children: [
                        (0, E.jsx)(eM.c, { className: cA.M5 }),
                        (0, E.jsx)(sw.D, {
                            label: j.intl.string(j.t.s9LFQh),
                            helperText: j.intl.string(j.t["F+nFTZ"]),
                            children: (0, E.jsx)(cm.A, {
                                value: n,
                                buttonColor: aQ.$n.Colors.BRAND,
                                buttonLook: aQ.$n.Looks.FILLED,
                                delay: 1e3,
                            }),
                        }),
                    ],
                }),
            });
};
var cS = i(725807),
    cT = i(212168),
    cx = i(469778),
    cp = i(109802),
    cf = i(503787);
let cN = (e) => {
        let { children: t, className: i, splashArtURL: n } = e;
        return (0, E.jsxs)(lW.A, {
            className: e6()(cf.wx, i),
            align: lW.A.Align.CENTER,
            children: [
                (0, E.jsx)("div", { className: cf.Bn, style: null != n ? { backgroundImage: `url(${n})` } : void 0 }),
                t,
            ],
        });
    },
    c_ = (e) => {
        let { children: t, className: i } = e;
        return (0, E.jsx)("div", { className: e6()(cf.rf, i), children: t });
    };
class cI extends S.PureComponent {
    static Header = cN;
    static Body = c_;
    render() {
        let { children: e, className: t, onMouseEnter: i, onMouseLeave: n } = this.props;
        return (0, E.jsx)("div", { className: e6()(cf.Nr, t), onMouseEnter: i, onMouseLeave: n, children: e });
    }
}
var cC = i(165191),
    cb = i(871123),
    cv = i(366523),
    cy = i(495544),
    cj = i(30793),
    cO = i(97352),
    cR = i(67480),
    cL = i(147925),
    cD = i(957565),
    cP = i(615396),
    cG = i(86629);
class cM extends S.PureComponent {
    _copyModeTimeout = new ok.Ep();
    state = { copyMode: cp.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case cp.q.SUCCESS:
                return j.intl.string(j.t.XVvPjU);
            case cp.q.ERROR:
                return j.intl.string(j.t.i4GM3L);
            default:
                return j.intl.string(j.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        ct.A.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: i } = this.props;
        (0, cn.AK)(t, i),
            (0, cD.C)(
                e,
                () => this.setState({ copyMode: cp.q.SUCCESS }),
                () => this.setState({ copyMode: cp.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: cp.q.DEFAULT });
            });
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: i } = this.state;
        return (0, E.jsxs)(lW.A, {
            direction: lW.A.Direction.VERTICAL,
            className: cG.Gj,
            children: [
                (0, E.jsx)(cp.e, {
                    className: cG.ph,
                    value: (0, cn.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: i,
                    supportsCopy: cD.p5,
                    hideMessage: e ? j.intl.string(j.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: aQ.XD.BRAND,
                    buttonLook: aQ.pR.FILLED,
                }),
                (0, E.jsxs)("div", {
                    className: cG.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, E.jsxs)(S.Fragment, {
                                  children: [
                                      j.intl.format(j.t.ltVZcJ, { hours: t.expiresAt.diff(rw()(), "h") }),
                                      " \u2014\xa0",
                                  ],
                              })
                            : null,
                        (0, E.jsx)(et.D, {
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
class cU extends S.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: i, giftStyle: n } = this.props;
        this.setState({ isCreating: !0 }),
            await ct.A.createGiftCode(t, i, n),
            this.setState({ isCreating: !1, isOpen: !0 });
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: i } = this.props,
            n = !this.state.isOpen;
        (null == i || null == this._loadedAt || i < this._loadedAt) && n && ct.A.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen });
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: i } = this.props;
        return (0, cb.bF)(e)
            ? (0, E.jsx)(cv.e, { shape: "square", sku: e, containerClassName: cG.ez })
            : null != t
              ? (0, E.jsx)(cC.A, { giftStyle: t, className: cG.ez, shouldAnimate: this.state.isHovered })
              : (0, E.jsx)(p.A, { game: i, size: p.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: i } = this.props;
        return (0, cb.bF)(e)
            ? (0, E.jsxs)("div", {
                  className: e6()(cG.Oc, cG.ic),
                  children: [
                      (0, E.jsx)(p.A, { game: i, size: p.M.XSMALL, skuId: e.id, className: cG._u }),
                      j.intl.format(j.t["6plpZi"], { applicationName: i.name, copies: t.length }),
                  ],
              })
            : (0, E.jsx)("div", { className: cG.Oc, children: j.intl.format(j.t.zMcvcA, { copies: t.length }) });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: i, giftCodeBatchId: n } = this.props;
        return (
            (e =
                n === sL.FB
                    ? j.intl.string(j.t.odsU6W)
                    : n === sL.Bu && null != i
                      ? j.intl.formatToPlainString(i.interval === sL.WT.MONTH ? j.t.uZjpiJ : j.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: i.intervalCount,
                        })
                      : null == i
                        ? t.name
                        : j.intl.formatToPlainString(i.interval === sL.WT.MONTH ? j.t.rCJvqo : j.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: i.intervalCount,
                          })),
            (0, E.jsx)("div", { className: cG.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, E.jsxs)(lW.A, {
            justify: lW.A.Justify.BETWEEN,
            align: lW.A.Align.CENTER,
            className: cG.pe,
            children: [
                (0, E.jsx)(ei.E, { variant: "text-md/normal", children: j.intl.string(j.t.lELyPj) }),
                (0, E.jsx)(eG.$, {
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
        return (0, E.jsxs)(cI, {
            className: n,
            children: [
                (0, E.jsx)(et.D, {
                    onClick: this.handleToggleOpen,
                    className: cG.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, E.jsx)(cI.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, E.jsxs)("div", {
                            className: cG.MY,
                            children: [
                                (0, E.jsxs)(lW.A, {
                                    align: lW.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, E.jsxs)("div", {
                                            className: cG.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, E.jsx)(cL.A, {
                                    direction: a ? cL.A.Directions.UP : cL.A.Directions.DOWN,
                                    className: cG.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, E.jsx)(cI.Body, {
                          children: l
                              ? (0, E.jsx)(du.y, { className: cG.u1 })
                              : (0, E.jsxs)(S.Fragment, {
                                    children: [
                                        i.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        i.map((e) => (0, E.jsx)(cM, { giftCode: e, sku: s, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let cV = g.Ay.connectStores([cR.A, eF.A, cj.A, x.A, cO.A, cy.default], (e) => {
    let { skuId: t, subscriptionPlanId: i, giftStyle: n } = e,
        s = cR.A.get(t);
    if (null == s) throw Error("SKU was unavailable while rendering gift.");
    let l = cj.A.getForGifterSKUAndPlan(cy.default.getId(), t, i)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === n);
    return {
        sku: s,
        hideCodes: eF.A.enabled,
        isFetching: cj.A.getUserGiftCodesFetchingForSKUAndPlan(t, i),
        loadedAt: cj.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, i),
        application: x.A.getApplication(s.applicationId),
        subscriptionPlan: null != i ? (0, cP.c9)(i) : null,
        giftCodes: l,
    };
})(cU);
var ck = i(928661);
function cw(e) {
    let { redesign: t = !1 } = e,
        i = (0, g.yK)([cx.A], () => cx.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null != t;
        }),
        n = (0, g.bG)([io.default], () => ua.Ay.isPremiumExactly(io.default.getCurrentUser(), sL.PremiumTypes.TIER_2)),
        s = (0, g.bG)([io.default], () => !ua.Ay.isPremium(io.default.getCurrentUser())),
        {
            activeOutboundPromotions: l,
            claimedEndedOutboundPromotions: r,
            claimedOutboundPromotionCodeMap: a,
        } = (0, d7.y7)(),
        o = i.find((e) => e.giftCodeBatchId === sL.FB && !e.consumed),
        u = i.filter((e) => e.giftCodeBatchId === sL.Bu && !e.consumed) ?? [],
        [d, c] = eZ().partition(u, (e) => {
            let { subscriptionPlanId: t } = e;
            return t === sL.gD.PREMIUM_YEAR_TIER_2;
        }),
        m = l.length + r.length > 0,
        A =
            t || !m
                ? null
                : (0, E.jsxs)("div", {
                      className: ck.N1,
                      children: [
                          (0, E.jsx)(eP.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.wFsj3B) }),
                          (0, E.jsx)(eM.c, { className: ck.yF }),
                      ],
                  }),
        h =
            s && m
                ? (0, E.jsxs)("div", {
                      className: ck.uo,
                      children: [
                          (0, E.jsx)(o5.t, {
                              size: "md",
                              color: es.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: ck.PC,
                          }),
                          (0, E.jsx)(ei.E, {
                              variant: "text-md/normal",
                              className: ck.Qw,
                              children: j.intl.format(j.t.G4fwxK, {
                                  onClick: () => {
                                      (0, sv.default)(), (0, sF.pX)(eA.BVt.APPLICATION_STORE);
                                  },
                              }),
                          }),
                          (0, E.jsx)(cS.A, {
                              showGradient: !0,
                              className: ck.aA,
                              subscriptionTier: sL.pe.TIER_2,
                              textOptions: { textOverride: j.intl.string(j.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
    return (0, E.jsxs)("div", {
        children: [
            A,
            (0, E.jsx)(cT.A, {
                className: ck.Yj,
                isShown: s && m,
                type: cT.i.PREMIUM,
                hasBackground: !0,
                children: (0, E.jsxs)("div", {
                    className: ck.DE,
                    children: [
                        h,
                        r.map((e) => {
                            let { code: t, promotion: i } = e;
                            return (0, E.jsx)(cz, { outboundPromotion: i, code: t, disabled: !n }, i.id);
                        }),
                        l.map((e) => (0, E.jsx)(cz, { outboundPromotion: e, code: a[e.id], disabled: !n }, e.id)),
                        null != o
                            ? (0, E.jsx)(
                                  cV,
                                  {
                                      skuId: o.skuId,
                                      subscriptionPlanId: o.subscriptionPlanId,
                                      entitlements: [o],
                                      giftCodeBatchId: sL.FB,
                                  },
                                  (0, cn.Kx)(o.skuId, o.subscriptionPlanId),
                              )
                            : null,
                        d.length > 0
                            ? (0, E.jsx)(
                                  cV,
                                  {
                                      skuId: d[0].skuId,
                                      subscriptionPlanId: d[0].subscriptionPlanId,
                                      entitlements: d,
                                      giftCodeBatchId: sL.Bu,
                                  },
                                  (0, cn.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                        c.length > 0
                            ? (0, E.jsx)(
                                  cV,
                                  {
                                      skuId: c[0].skuId,
                                      subscriptionPlanId: c[0].subscriptionPlanId,
                                      entitlements: c,
                                      giftCodeBatchId: sL.Bu,
                                  },
                                  (0, cn.Kx)(c[0].skuId, c[0].subscriptionPlanId),
                              )
                            : null,
                    ],
                }),
            }),
        ],
    });
}
var cF = i(339048);
function cB() {
    let e = (0, g.yK)([cx.A], () => cx.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        t = eZ().groupBy(e, (e) => (0, cn.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [i, n] = S.useState(!1);
    if (
        (S.useEffect(() => {
            sr.h.wait(() => {
                (0, cF.XJ)().then(() => n(!0));
            });
        }, []),
        !i)
    )
        return (0, E.jsx)(du.y, { className: ck.Lq });
    if (0 === Object.keys(t).length)
        return (0, E.jsxs)("div", {
            className: ck.p$,
            children: [
                (0, E.jsx)("div", { className: ck.QT }),
                (0, E.jsx)(co.H, { className: ck.ks, children: j.intl.string(j.t.B1qgZn) }),
                (0, E.jsx)("p", {
                    className: ck.WO,
                    children: j.intl.format(j.t.HezvJ8, {
                        onClick: function () {
                            (0, eH.openUserSettings)(u.X.NITRO_PANEL);
                        },
                    }),
                }),
            ],
        });
    let s = eZ()
        .keys(t)
        .map((e) => {
            let { skuId: i, subscriptionPlanId: n, giftStyle: s } = (0, cn.X6)(e);
            return (0, E.jsx)(cV, { skuId: i, subscriptionPlanId: n, entitlements: t[e], giftStyle: s }, e);
        });
    return (0, E.jsx)(Z.B, { gap: "lg", children: s });
}
function cz(e) {
    let t,
        { outboundPromotion: i, code: n, disabled: s } = e,
        [l, r] = S.useState(!1),
        [a, o] = S.useState(!1),
        u = () => r((e) => !e),
        d = (0, cu.Ay)(),
        c = (0, cg.WD)(i.id, d),
        g = null != n,
        m = S.useMemo(
            () =>
                (0, rF.i$)(
                    g
                        ? null != i.outboundRedemptionEndDate
                            ? rw()(i.outboundRedemptionEndDate)
                            : rw()(i.endDate).add(cc)
                        : rw()(i.endDate),
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
                className: ck.AX,
                children: [
                    (0, E.jsxs)("div", {
                        className: ck.gE,
                        children: [
                            (0, E.jsxs)("div", {
                                className: ck.At,
                                children: [
                                    (0, E.jsx)("div", {
                                        className: ck.$G,
                                        children: (0, E.jsx)("img", { alt: "", src: c, className: ck.IJ }),
                                    }),
                                    (0, E.jsxs)("div", {
                                        children: [
                                            (0, E.jsx)(eP.D, { variant: "heading-md/semibold", children: T }),
                                            (0, E.jsx)(ei.E, {
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                children: t,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            !s && (0, E.jsx)(eG.$, { text: A, onClick: () => o(!0), disabled: s, size: "sm" }),
                        ],
                    }),
                    l &&
                        (0, E.jsx)(ei.E, {
                            className: ck.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: cd.A.parse(x, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            a &&
                (0, E.jsx)(ca.aF, {
                    renderModal: (e) =>
                        (0, E.jsx)(cE, {
                            ...e,
                            onClose: h,
                            onClaim: d4.Ay.addClaimedOutboundPromotionCode,
                            code: n,
                            outboundPromotion: i,
                        }),
                    onCloseRequest: h,
                }),
        ],
    });
}
let cX = (0, a.E2)(u.X.GIFT_INVENTORY_LIST_SETTING, {
    Component: function () {
        return (0, E.jsxs)(Z.B, {
            gap: "md",
            children: [
                (0, E.jsx)(cw, {}),
                (0, E.jsx)("div", {
                    className: ck.N1,
                    children: (0, E.jsxs)(co.F, {
                        component: (0, E.jsx)(eP.D, {
                            variant: "heading-md/semibold",
                            children: j.intl.string(j.t["9KeUbY"]),
                        }),
                        children: [(0, E.jsx)(eM.c, { className: ck.yF }), (0, E.jsx)(cB, {})],
                    }),
                }),
            ],
        });
    },
    usePredicate: () => !(0, d8.Hp)(),
    useSearchTerms: () => [j.intl.string(j.t["jcSP+g"]), j.intl.string(j.t["9KeUbY"])],
});
var cY = i(89366),
    cH = i(881489),
    cK = i(374200),
    cW = i(354670);
let cZ = (0, a.zZ)(u.X.MY_GIFTS_CATEGORY, {
        useTitle: cQ,
        buildLayout: () => [cq],
        usePredicate: () => {
            let e = (0, cY.QQ)(),
                t = (0, g.bG)([cW.A], () => cW.A.hasAnyUnexpiredOffer()),
                i = (0, cH.ds)(),
                { claimedOutboundPromotionCodes: n, claimedOutboundPromotionCodesLoaded: s } = (0, g.cf)(
                    [cK.A],
                    () => ({
                        claimedOutboundPromotionCodes: cK.A.claimedOutboundPromotionCodes,
                        claimedOutboundPromotionCodesLoaded: cK.A.claimedOutboundPromotionCodesLoaded,
                    }),
                ),
                l = (0, cg.eN)(n),
                r = (0, d7.T1)(e, t, i, l),
                a = (0, cg.Wl)(n, r).length;
            return s && r.length + a > 0;
        },
    }),
    cq = (0, a.E2)(u.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [cQ()],
        Component: () => (0, E.jsx)(cw, { redesign: !0 }),
    });
function cQ() {
    return (0, o.ri)("MyGifts") ? j.intl.string(j.t.YzjdWJ) : j.intl.string(j.t.wFsj3B);
}
let cJ = (0, a.zZ)(u.X.PURCHASED_GIFTS_CATEGORY, { useTitle: c0, buildLayout: () => [c$] }),
    c$ = (0, a.E2)(u.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [c0()], Component: () => (0, E.jsx)(cB, {}) });
function c0() {
    return (0, o.ri)("PurchasedGifts") ? j.intl.string(j.t.FWe6CP) : j.intl.string(j.t["9KeUbY"]);
}
let c1 = (0, a.zZ)(u.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => j.intl.string(j.t["il+VCo"]),
        buildLayout: () => [c2],
        usePredicate: () => !(0, d8.Hp)(),
    }),
    c2 = (0, a.E2)(u.X.REDEEM_CODE_INPUT, {
        Component: () => (0, E.jsx)(cl, { redesign: !0 }),
        useSearchTerms: () => [j.intl.string(j.t["jcSP+g"]), j.intl.string(j.t["il+VCo"])],
    }),
    c3 = (0, a.zZ)(u.X.GIFT_INVENTORY_LEGACY_CATEGORY, { buildLayout: () => [cr, cX, d5] }),
    c6 = (0, a.t_)(u.X.GIFT_PANEL, {
        useTitle: c7,
        buildLayout: () => ((0, o.SB)("GiftPanel") ? [c1, cZ, cJ, d9] : [c3]),
        initialize: () => {
            (0, o.SB)("GiftPanel") && d4.Ay.fetchClaimedOutboundPromotionCodes();
        },
    }),
    c4 = (0, a.i4)(u.X.GIFT_SIDEBAR_ITEM, {
        useTitle: c7,
        icon: d6.o,
        usePersistentBadge: function () {
            return S.useMemo(() => ({ badgeType: h.Xi.COUNT, useCount: () => (0, d7.IO)().length }), []);
        },
        buildLayout: () => [c6],
    });
function c7() {
    return (0, o.ri)("GiftPanel") ? j.intl.string(j.t.QvIFi0) : j.intl.string(j.t["jcSP+g"]);
}
var c8 = i(659758),
    c5 = i(741046),
    c9 = i(815846);
let ge = (0, a.E2)(u.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, g.bG)([io.default], () => io.default.getCurrentUser());
            return (0, ua.YE)(e, sL.PremiumTypes.TIER_2) ? (0, E.jsx)(c9.A, {}) : (0, E.jsx)(c5.A, {});
        },
        useSearchTerms: () => [j.intl.string(j.t.Ipxkog)],
    }),
    gt = (0, a.zZ)(u.X.NITRO_CATEGORY, { buildLayout: () => [ge] }),
    gi = (0, a.t_)(u.X.NITRO_PANEL, {
        useTitle: () => j.intl.string(j.t.Ipxkog),
        useObscuredNotice: dl.L,
        buildLayout: () => [gt],
    }),
    gn = (0, a.i4)(u.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.Ipxkog),
        icon: o5.t,
        usePersistentBadge: function (e) {
            return S.useMemo(
                () => ({ badgeType: h.Xi.STRONGLY_DISCOURAGED_CUSTOM, useCustomBadge: () => (0, c8.e)(e) }),
                [e],
            );
        },
        buildLayout: () => [gi],
    });
var gs = i(104510),
    gl = i(820739),
    gr = i(73825),
    ga = i(160946);
let go = (0, i(240921).Ay)({
    name: "2026-03-boosting-settings-refresh",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var gu = i(859241),
    gd = i(531260),
    gc = i(369163),
    gg = i(957485),
    gm = i(926268),
    gA = i(106529),
    gh = i(93364);
function gE(e) {
    let { className: t, icon: i, children: n } = e;
    return (0, E.jsxs)("li", {
        className: e6()(gA.Nr, t),
        children: [
            (0, E.jsx)(i, { className: gA.Kk }),
            (0, E.jsx)(ei.E, { className: gA.__invalid_description, variant: "text-sm/medium", children: n }),
        ],
    });
}
let gS = function (e) {
    let { cardClassName: t } = e;
    return (0, E.jsxs)("div", {
        className: gA.iE,
        children: [
            (0, E.jsxs)("div", {
                className: gA.Qs,
                children: [
                    (0, E.jsx)(eP.D, {
                        className: gA.R_,
                        color: "always-white",
                        variant: "heading-xxl/bold",
                        children: j.intl.string(j.t.IzKs3o),
                    }),
                    (0, E.jsxs)("ul", {
                        className: gA.kR,
                        children: [
                            (0, E.jsx)(gE, { className: t, icon: gc.v, children: j.intl.string(j.t.TZigSO) }),
                            (0, E.jsx)(gE, {
                                className: t,
                                icon: (e) =>
                                    (0, E.jsx)("img", { className: e6()(e.className, gA.Dp), src: gh, alt: "" }),
                                children: j.intl.string(j.t.hjQuV2),
                            }),
                            (0, E.jsx)(gE, { className: t, icon: gg.i, children: j.intl.string(j.t["2RUcaM"]) }),
                            (0, E.jsx)(gE, { className: t, icon: gm.C, children: j.intl.string(j.t.bJoZKV) }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)("div", { className: gA.JP }),
        ],
    });
};
var gT = i(834040),
    gx = i(811227);
let gp = [
        { getQuestion: () => j.intl.string(j.t.C4J8UB), getAnswer: () => j.intl.string(j.t.nhkk6k) },
        {
            getQuestion: () => j.intl.string(j.t.ai4ym2),
            getAnswer: () =>
                j.intl.format(j.t["8zlqlD"], { helpCenterUrl: tN.A.getArticleURL(eA.MVz.GUILD_BOOSTING_FAQ) }),
        },
        { getQuestion: () => j.intl.string(j.t.kMVGsC), getAnswer: () => j.intl.string(j.t["Vz/SCQ"]) },
        { getQuestion: () => j.intl.string(j.t.kYmXWF), getAnswer: () => j.intl.string(j.t["+OURPp"]) },
        { getQuestion: () => j.intl.string(j.t["LsX/vb"]), getAnswer: () => j.intl.string(j.t["3TeauK"]) },
        { getQuestion: () => j.intl.string(j.t.fRlnXU), getAnswer: () => j.intl.string(j.t.bTRacj) },
        { getQuestion: () => j.intl.string(j.t["8Mu5Q9"]), getAnswer: () => j.intl.string(j.t["2T5iPo"]) },
        { getQuestion: () => j.intl.string(j.t["6EN+TZ"]), getAnswer: () => j.intl.string(j.t.NZax1u) },
        { getQuestion: () => j.intl.string(j.t.f5B4EW), getAnswer: () => j.intl.string(j.t.Aje8Pb) },
    ],
    gf = function (e) {
        let { className: t } = e,
            [i, n] = S.useState(null);
        return (0, E.jsxs)("div", {
            className: e6()(gx.iE, t),
            children: [
                (0, E.jsx)(eP.D, {
                    className: gx.R_,
                    variant: "heading-xxl/bold",
                    children: j.intl.string(j.t.HPJ6Nj),
                }),
                (0, E.jsx)("ul", {
                    className: gx.p_,
                    children: gp.map((e, t) => {
                        let s = i === t;
                        return (0, E.jsxs)(
                            "div",
                            {
                                className: gx.Aw,
                                children: [
                                    (0, E.jsxs)(et.D, {
                                        className: e6()(gx.k7, { [gx.lo]: s }),
                                        onClick: () => n((e) => (e === t ? null : t)),
                                        tag: "li",
                                        children: [
                                            (0, E.jsx)(ei.E, {
                                                className: gx.b1,
                                                variant: "text-lg/normal",
                                                children: e.getQuestion(),
                                            }),
                                            s
                                                ? (0, E.jsx)(gT.Q, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: gx.q4,
                                                  })
                                                : (0, E.jsx)(ao.j, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: gx.q4,
                                                  }),
                                        ],
                                    }),
                                    s &&
                                        (0, E.jsx)(ei.E, {
                                            className: gx.ZF,
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
var gN = i(462887),
    g_ = i(933832),
    gI = i(789645),
    gC = i(116891),
    gb = i(416676);
let gv = [
    {
        getPerkHeading: () => j.intl.string(j.t.tIiwuj),
        getPerkPreviewLightTheme: () => i(604203),
        getPerkPreviewDarkTheme: () => i(878515),
        getTier0Value: () => sL.TG[eA.TVA.NONE].limits.emoji,
        getTier1Value: () => sL.TG[eA.TVA.TIER_1].limits.emoji,
        getTier2Value: () => sL.TG[eA.TVA.TIER_2].limits.emoji,
        getTier3Value: () => sL.TG[eA.TVA.TIER_3].limits.emoji,
    },
    {
        getPerkHeading: () => j.intl.string(j.t["3iccet"]),
        getPerkPreviewLightTheme: () => i(105732),
        getPerkPreviewDarkTheme: () => i(857020),
        getTier0Value: () => sL.TG[eA.TVA.NONE].limits.stickers,
        getTier1Value: () => sL.TG[eA.TVA.TIER_1].limits.stickers,
        getTier2Value: () => sL.TG[eA.TVA.TIER_2].limits.stickers,
        getTier3Value: () => sL.TG[eA.TVA.TIER_3].limits.stickers,
    },
    {
        getPerkHeading: () => j.intl.string(j.t["+smCv9"]),
        getPerkPreviewLightTheme: () => i(597890),
        getPerkPreviewDarkTheme: () => i(297642),
        getTier0Value: () => sL.TG[eA.TVA.NONE].limits.soundboardSounds,
        getTier1Value: () => sL.TG[eA.TVA.TIER_1].limits.soundboardSounds,
        getTier2Value: () => sL.TG[eA.TVA.TIER_2].limits.soundboardSounds,
        getTier3Value: () => sL.TG[eA.TVA.TIER_3].limits.soundboardSounds,
    },
    {
        getPerkHeading: () => j.intl.string(j.t.SMYauD),
        getPerkPreviewLightTheme: () => i(323091),
        getPerkPreviewDarkTheme: () => i(261835),
        getTier0Value: () =>
            j.intl.formatToPlainString(j.t.zZ6Rdi, {
                resolution: sL.TG[eA.TVA.NONE].limits.screenShareQualityResolution,
                framerate: sL.TG[eA.TVA.NONE].limits.screenShareQualityFramerate,
            }),
        getTier1Value: () =>
            j.intl.formatToPlainString(j.t.zZ6Rdi, {
                resolution: sL.TG[eA.TVA.TIER_1].limits.screenShareQualityResolution,
                framerate: sL.TG[eA.TVA.TIER_1].limits.screenShareQualityFramerate,
            }),
        getTier2Value: () =>
            j.intl.formatToPlainString(j.t.zZ6Rdi, {
                resolution: (0, gC.eT)("GuildBoostingMarketingTierComparisonTable"),
                framerate: sL.TG[eA.TVA.TIER_2].limits.screenShareQualityFramerate,
            }),
        getTier3Value: () =>
            j.intl.formatToPlainString(j.t.zZ6Rdi, {
                resolution: (0, gC.eT)("GuildBoostingMarketingTierComparisonTable"),
                framerate: sL.TG[eA.TVA.TIER_3].limits.screenShareQualityFramerate,
            }),
    },
    {
        getPerkHeading: () => j.intl.string(j.t["/79IDj"]),
        getPerkPreviewLightTheme: () => i(913997),
        getPerkPreviewDarkTheme: () => i(95781),
        getTier0Value: () =>
            j.intl.formatToPlainString(j.t.w1gmLt, { bitrate: sL.TG[eA.TVA.NONE].limits.bitrate / 1e3 }),
        getTier1Value: () =>
            j.intl.formatToPlainString(j.t.w1gmLt, { bitrate: sL.TG[eA.TVA.TIER_1].limits.bitrate / 1e3 }),
        getTier2Value: () =>
            j.intl.formatToPlainString(j.t.w1gmLt, { bitrate: sL.TG[eA.TVA.TIER_2].limits.bitrate / 1e3 }),
        getTier3Value: () =>
            j.intl.formatToPlainString(j.t.w1gmLt, { bitrate: sL.TG[eA.TVA.TIER_3].limits.bitrate / 1e3 }),
    },
    {
        getPerkHeading: () => j.intl.string(j.t.R1U2xC),
        getPerkPreviewLightTheme: () => i(389833),
        getPerkPreviewDarkTheme: () => i(754561),
        getTier0Value: () =>
            j.intl.formatToPlainString(j.t.pIn7Af, { size: sL.TG[eA.TVA.NONE].limits.fileSize / 1048576 }),
        getTier1Value: () =>
            j.intl.formatToPlainString(j.t.pIn7Af, { size: sL.TG[eA.TVA.TIER_1].limits.fileSize / 1048576 }),
        getTier2Value: () =>
            j.intl.formatToPlainString(j.t.pIn7Af, { size: sL.TG[eA.TVA.TIER_2].limits.fileSize / 1048576 }),
        getTier3Value: () =>
            j.intl.formatToPlainString(j.t.pIn7Af, { size: sL.TG[eA.TVA.TIER_3].limits.fileSize / 1048576 }),
    },
    {
        getPerkHeading: () => j.intl.string(j.t.f6vfso),
        getPerkPreviewLightTheme: () => i(735669),
        getPerkPreviewDarkTheme: () => i(283517),
        getTier0Value: () => sL.TG[eA.TVA.NONE].limits.stageVideoUsers,
        getTier1Value: () => sL.TG[eA.TVA.TIER_1].limits.stageVideoUsers,
        getTier2Value: () => sL.TG[eA.TVA.TIER_2].limits.stageVideoUsers,
        getTier3Value: () => sL.TG[eA.TVA.TIER_3].limits.stageVideoUsers,
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
function gy(e) {
    let { children: t, className: i, tier: n } = e,
        s = n === eA.TVA.NONE ? "text-muted" : "text-strong",
        l = n === eA.TVA.NONE || null == n ? "heading-xl/normal" : "heading-xl/bold";
    return (0, E.jsxs)("th", {
        className: e6()(gb.PG, i),
        scope: "col",
        children: [
            (0, E.jsx)(eP.D, { color: s, variant: l, children: t }),
            null != n &&
                (0, E.jsx)(ei.E, {
                    color: s,
                    variant: "text-md/normal",
                    children: j.intl.format(j.t["pob/cL"], { subscriptions: eA.M2T[n] }),
                }),
        ],
    });
}
function gj(e) {
    let t,
        { className: i, textVariant: n = "text-md/bold", value: s } = e;
    if ("boolean" == typeof s) {
        let e = e6()(gb.Jk, { [gb.I$]: s });
        t = s
            ? (0, E.jsx)(g_.A, { size: "md", color: "currentColor", className: e })
            : (0, E.jsx)(gI.P, { size: "md", color: "currentColor", className: e });
    } else t = (0, E.jsx)(ei.E, { color: "interactive-text-active", variant: n, children: s });
    return (0, E.jsx)("td", { className: e6()(gb.xR, i), children: t });
}
function gO(e) {
    let { currentTier: t } = e,
        i = (function (e) {
            switch (e) {
                case eA.TVA.NONE:
                case eA.TVA.TIER_1:
                    return eA.TVA.TIER_2;
                case eA.TVA.TIER_2:
                case eA.TVA.TIER_3:
                    return eA.TVA.TIER_3;
                default:
                    return null;
            }
        })(t);
    return null == i
        ? null
        : (0, E.jsx)("div", {
              className: e6()(gb.ER, { [gb.GH]: i === eA.TVA.TIER_2, [gb.z5]: i === eA.TVA.TIER_3 }),
              children: (0, E.jsx)(ei.E, {
                  className: gb.uQ,
                  color: "always-white",
                  variant: "text-xs/bold",
                  children: t === eA.TVA.TIER_3 ? j.intl.string(j.t.d849Up) : j.intl.string(j.t.dZeX1z),
              }),
          });
}
function gR(e) {
    let { isFocused: t, handleFocus: i, handleRowBlur: n, theme: s, row: l, hideTier0: r } = e,
        a = S.useRef(null);
    return (0, E.jsxs)("tr", {
        className: gb.__invalid_tableRow,
        children: [
            (0, E.jsx)("th", {
                className: e6()(gb.xR, gb.uB),
                scope: "row",
                children: (0, E.jsx)(et.D, {
                    className: e6()(gb.VC, gb.xR, gb.Rk),
                    onFocus: i,
                    onBlur: n,
                    onMouseEnter: i,
                    onMouseLeave: n,
                    children: (0, E.jsx)(J.Y, {
                        targetElementRef: a,
                        align: "center",
                        disablePointerEvents: !0,
                        nudgeAlignIntoViewport: !0,
                        position: "bottom",
                        renderPopout: () =>
                            (0, E.jsx)("img", {
                                className: gb.Mz,
                                src: (0, gN.M)(s) ? l.getPerkPreviewDarkTheme() : l.getPerkPreviewLightTheme(),
                                alt: "",
                            }),
                        shouldShow: t,
                        spacing: 16,
                        children: () =>
                            (0, E.jsx)(ei.E, { variant: "text-md/normal", ref: a, children: l.getPerkHeading() }),
                    }),
                }),
            }),
            !r && (0, E.jsx)(gj, { textVariant: "text-md/normal", value: l.getTier0Value() }),
            (0, E.jsx)(gj, { value: l.getTier1Value() }),
            (0, E.jsx)(gj, { value: l.getTier2Value() }),
            (0, E.jsx)(gj, { value: l.getTier3Value() }),
        ],
    });
}
let gL = function (e) {
    let t = (0, cu.Ay)(),
        [i, n] = S.useState(null),
        { className: s, guild: l, hideHeading: r, hideTier0: a } = e;
    function o() {
        n(null);
    }
    return (0, E.jsxs)("div", {
        className: s,
        children: [
            !r &&
                (0, E.jsx)(eP.D, {
                    className: gb.R_,
                    variant: "heading-xxl/extrabold",
                    children: j.intl.string(j.t["9GGb9k"]),
                }),
            (0, E.jsxs)("div", {
                className: gb.wY,
                children: [
                    null != l && (0, E.jsx)(gO, { currentTier: l.premiumTier }),
                    (0, E.jsxs)("table", {
                        className: gb.tp,
                        cellPadding: 0,
                        cellSpacing: 0,
                        children: [
                            (0, E.jsx)("thead", {
                                children: (0, E.jsxs)("tr", {
                                    className: gb.__invalid_tableRow,
                                    children: [
                                        (0, E.jsx)(gy, { className: gb.VC, children: j.intl.string(j.t.F5MY0k) }),
                                        !a &&
                                            (0, E.jsx)(gy, { tier: eA.TVA.NONE, children: j.intl.string(j.t.mx8j2m) }),
                                        (0, E.jsx)(gy, { tier: eA.TVA.TIER_1, children: j.intl.string(j.t.nzXtaS) }),
                                        (0, E.jsx)(gy, { tier: eA.TVA.TIER_2, children: j.intl.string(j.t["h33/uW"]) }),
                                        (0, E.jsx)(gy, { tier: eA.TVA.TIER_3, children: j.intl.string(j.t.BfF6ED) }),
                                    ],
                                }),
                            }),
                            (0, E.jsx)("tbody", {
                                className: gb.__invalid_tableBody,
                                children: gv.map((e, s) => {
                                    let l = i === s;
                                    return void 0 === e.predicate
                                        ? (0, E.jsx)(
                                              gR,
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
var gD = i(338548),
    gP = i(776096),
    gG = i(178368),
    gM = i(922139),
    gU = i(866323),
    gV = i(530005),
    gk = i(443865),
    gw = i(473145);
function gF(e) {
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
        case eA.Dmq.PAST_DUE:
            (o.cancel.disabled = !0), (o.cancel.subtext = j.intl.string(j.t.WnL6DV)), (o.uncancel.disabled = !0);
            break;
        case eA.Dmq.PAUSE_PENDING:
        case eA.Dmq.PAUSED:
            a === sL.xc.NONE &&
                ((o.transfer.disabled = !0),
                (o.transfer.subtext = j.intl.string(j.t.LiLRRT)),
                (o.cancel.subtext = j.intl.string(j.t["1ywaWL"])),
                (o.cancel.disabled = !0),
                (o.uncancel.disabled = !0));
    }
    let d = S.useMemo(
        () =>
            l.isPausedOrPausePending && a === sL.xc.NONE
                ? (0, E.jsx)(ee.Dr, {
                      id: "manage-subscription",
                      label: j.intl.string(j.t.obRG6Y),
                      action: () => (0, eH.openUserSettings)(u.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: gk.x,
                      leadingAccessory: { type: "icon", icon: gk.x },
                  })
                : null,
        [a, l],
    );
    return (0, E.jsxs)($.W, {
        "data-menu-migrated-auto": !0,
        onSelect: r,
        navId: "subscription-context",
        variant: "fixed",
        "aria-label": j.intl.string(j.t.ogxXGq),
        onClose: n,
        children: [
            (0, E.jsx)(ee.Dr, {
                id: "apply",
                label: o.transfer.label,
                subtext: o.transfer.subtext,
                action: function () {
                    (0, Y.openModalLazy)(async () => {
                        let { default: e } = await Promise.resolve().then(i.bind(i, 724624));
                        return (i) =>
                            (0, E.jsx)(e, { ...i, guildBoostSlots: [t], locationSection: eA.JJy.SETTINGS_PREMIUM });
                    });
                },
                disabled: o.transfer.disabled,
            }),
            (0, gw.I5)(t)
                ? (0, E.jsx)(ee.Dr, {
                      id: "uncancel",
                      label: o.uncancel.label,
                      subtext: o.uncancel.subtext,
                      action: function () {
                          (0, Y.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(i.bind(i, 342744));
                              return (i) => (0, E.jsx)(e, { ...i, guildBoostSlotId: t.id });
                          });
                      },
                      disabled: o.uncancel.disabled,
                  })
                : (0, E.jsx)(ee.Dr, {
                      id: "cancel",
                      label: o.cancel.label,
                      subtext: o.cancel.subtext,
                      action: function () {
                          (0, Y.openModalLazy)(async () => {
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
var gB = i(545934),
    gz = i(496431);
let gX = function (e) {
    let { className: t, cooldown: i } = e,
        n = (0, gz.A)(i);
    return (0, E.jsx)(ei.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, rF.uN)(n, { days: j.t.WUTPDc, hours: j.t.c1qodV, minutes: j.t["2+A3dv"] }),
    });
};
var gY = i(482900);
let gH = function (e) {
    let { className: t, imageClassName: n, boostInCooldown: s, useReducedMotion: l } = e;
    return (0, E.jsx)("div", {
        className: e6()(gY.h4, t, { [gY.K2]: s }),
        children: (0, E.jsx)("img", {
            className: e6()(gY.Sl, n, { [gY.x8]: s }),
            src: s
                ? i(650442)
                : l
                  ? i(742885)
                  : "https://cdn.discordapp.com/assets/content/86fd98fc22283647a8be93d0c503646b53c84e3cb25ca6562a38cecb84327e58.gif",
            alt: "",
        }),
    });
};
var gK = i(583032);
let gW = function (e) {
    let { className: t, hasCooldown: n, isCanceled: s, useReducedMotion: l } = e;
    return (0, E.jsxs)("div", {
        className: e6()(gK.sn, t),
        children: [
            s
                ? (0, E.jsx)("img", { className: e6()(gK.$J, gK.qX), src: i(728707), alt: "" })
                : (0, E.jsx)(gH, { className: gK.$J, boostInCooldown: n, useReducedMotion: l }),
            !s && n && (0, E.jsx)("img", { className: gK.De, src: i(438807), alt: "" }),
        ],
    });
};
var gZ = i(548118),
    gq = i(509536),
    gQ = i(944304),
    gJ = i(864310),
    g$ = i(245390);
let g0 = function (e) {
    let { className: t, guildId: i, boostingVariant: n } = e,
        s = (0, u$.bG)([ed.A], () => ed.A.getGuild(i), [i]),
        l = (0, gJ.A)(s?.id).total;
    return null == s
        ? (0, E.jsx)("div", {
              className: e6()(t, g$.bo),
              children: (0, E.jsx)("div", {
                  className: g$.$g,
                  children: (0, E.jsx)(ei.E, { variant: "text-lg/bold", children: j.intl.string(j.t["6Kwwuo"]) }),
              }),
          })
        : (0, E.jsxs)("div", {
              className: e6()(t, g$.bo),
              children: [
                  (0, E.jsx)(gZ.Ay, { className: g$.__invalid_guildIcon, guild: s, size: gZ.Ay.Sizes.LARGER }),
                  (0, E.jsxs)("div", {
                      className: g$.$g,
                      children: [
                          (0, E.jsx)(ei.E, { variant: "text-lg/bold", children: s.name }),
                          (0, E.jsxs)("div", {
                              className: g$.TZ,
                              children: [
                                  (0, E.jsx)(gs._, {
                                      color: es.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                      className: g$.Me,
                                  }),
                                  (0, E.jsx)(ei.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: j.intl.format(j.t["pob/cL"], { subscriptions: l }),
                                  }),
                                  (0, E.jsx)("div", { className: g$.me }),
                                  (0, E.jsx)(ei.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: (0, gw.gb)(s.premiumTier, { useLevels: !1 }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  n
                      ? (0, E.jsx)(gQ.A, {
                            guild: s,
                            analyticsLocation: {
                                page: eA.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                section: eA.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                object: eA.ZSU.BUTTON_CTA,
                                objectType: eA.AnalyticsObjectTypes.BUY,
                            },
                            pauseAnimation: !0,
                            size: aQ.$n.Sizes.MEDIUM,
                            color: aQ.$n.Colors.PRIMARY,
                            buttonText: j.intl.string(j.t.aBHecF),
                        })
                      : (0, E.jsx)(eG.$, {
                            variant: "secondary",
                            text: j.intl.string(j.t.KLOhbO),
                            onClick: () => {
                                (0, sv.default)(),
                                    (0, gq.K4)({
                                        guildId: s.id,
                                        location: {
                                            section: eA.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA,
                                        },
                                    });
                            },
                        }),
              ],
          });
};
var g1 = i(85566);
function g2(e) {
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
            let e = null != i.premiumGuildSubscription ? dp.default.extractTimestamp(i.premiumGuildSubscription.id) : 0;
            return j.intl.formatToPlainString(j.t.lY2Bur, { date: new Date(e) });
        }, [i, s, l, r]),
        o = S.useMemo(
            () =>
                (function (e) {
                    if (null == e || e === eA.TVA.NONE) return "";
                    let t = [
                        j.intl.formatToPlainString(j.t["dLlKX/"], { numEmojiSlots: sL.TG[e].limits.emoji }),
                        j.intl.formatToPlainString(j.t["+ANIfv"], { numStickerSlots: sL.TG[e].limits.stickers }),
                        j.intl.formatToPlainString(j.t["4gt60b"], {
                            numSoundboardSlots: sL.TG[e].limits.soundboardSounds,
                        }),
                        j.intl.formatToPlainString(j.t.XahSjZ, {
                            resolution: sL.TG[e].limits.screenShareQualityResolution,
                            framerate: sL.TG[e].limits.screenShareQualityFramerate,
                        }),
                        j.intl.formatToPlainString(j.t.NbNs7S, { bitrate: sL.TG[e].limits.bitrate / 1e3 }),
                        j.intl.formatToPlainString(j.t.VVKcpn, { filesize: sL.TG[e].limits.fileSize / 1024 / 1024 }),
                        j.intl.formatToPlainString(j.t.TbpCvv, { numVideoStageSeats: sL.TG[e].limits.stageVideoUsers }),
                        j.intl.string(j.t.LDyX3i),
                        j.intl.string(j.t.YtGlPW),
                    ];
                    e >= eA.TVA.TIER_2 && (t.push(j.intl.string(j.t.SztbtN)), t.push(j.intl.string(j.t["3GK91n"]))),
                        e >= eA.TVA.TIER_3 && t.push(j.intl.string(j.t["XUUJd+"]));
                    let i = t[Math.floor(Math.random() * t.length)];
                    return j.intl.format(j.t["/dOAmQ"], { perk: i });
                })(t),
            [t],
        ),
        u = (0, gU.p)(n, { from: { opacity: 0 }, enter: { opacity: 1 }, leave: { opacity: 0 } }, "animate-always");
    return s || t === eA.TVA.NONE
        ? (0, E.jsx)("div", {
              className: g1.xm,
              children: (0, E.jsx)(ei.E, { variant: "text-sm/medium", color: "text-muted", children: a }),
          })
        : u((e, t) =>
              (0, E.jsx)(gM.animated.div, {
                  style: e,
                  className: g1.xm,
                  children: (0, E.jsx)(ei.E, { variant: "text-sm/medium", color: "text-muted", children: t ? o : a }),
              }),
          );
}
function g3(e) {
    let {
            guildTier: t,
            guildBoostSlot: i,
            premiumSubscription: n,
            hasCancelableGuildBoostSlot: s,
            showAltText: l,
            isLastGuildBoostSlot: r,
        } = e,
        a = (0, u$.bG)([i7.A], () => i7.A.useReducedMotion),
        o = S.useMemo(() => (null != i.cooldownEndsAt ? new Date(i.cooldownEndsAt) : null), [i]),
        u = S.useMemo(() => null != o && o > new Date(), [o]),
        d = (0, gw.I5)(i),
        c = (0, gd.A)(),
        g = S.useRef(null);
    return (0, E.jsxs)("div", {
        className: g1.PW,
        children: [
            (0, E.jsxs)("div", {
                className: g1.$U,
                children: [
                    (0, E.jsx)(gW, { isCanceled: d, hasCooldown: u, useReducedMotion: a }),
                    (0, E.jsx)("div", {
                        className: g1.vh,
                        children:
                            null != o && u && !d
                                ? (0, E.jsx)(gX, { className: g1.xm, cooldown: o.getTime() })
                                : (0, E.jsx)(g2, {
                                      guildTier: t,
                                      guildBoostSlot: i,
                                      showAltText: l,
                                      isCanceled: d,
                                      premiumSubscription: n,
                                      fractionalPremiumInfo: c,
                                  }),
                    }),
                    (0, E.jsx)(J.Y, {
                        targetElementRef: g,
                        renderPopout: function (e) {
                            let { closePopout: t } = e;
                            return (0, E.jsx)(gF, {
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
                            (0, E.jsx)(et.D, {
                                ...e,
                                innerRef: g,
                                "aria-label": j.intl.string(j.t.PdRCRg),
                                className: g1.oU,
                                children: (0, E.jsx)(gV.F, { size: "md", color: "currentColor" }),
                            }),
                    }),
                ],
            }),
            !r && (0, E.jsx)("div", { className: g1.eX }),
        ],
    });
}
function g6(e) {
    let {
            guildId: t,
            guildBoostSlotRecords: i,
            premiumSubscription: n,
            hasCancelableGuildBoostSlot: s,
            showAltText: l,
        } = e,
        r = (0, u$.bG)([ed.A], () => ed.A.getGuild(t), [t]);
    return (0, E.jsxs)("div", {
        className: g1.ag,
        children: [
            (0, E.jsx)(g0, { guildId: t, boostingVariant: !1 }),
            i.map((e, t) =>
                (0, E.jsx)(
                    g3,
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
function g4(e) {
    let { guildId: t, appliedGuildBoosts: i, premiumSubscription: n } = e,
        s = (0, u$.bG)([ed.A], () => ed.A.getGuild(t), [t]),
        l = dp.default.fromTimestamp(Date.now());
    if (
        (i.forEach((e) => {
            (null == l || 0 > dp.default.compare(e.id, l)) && (l = e.id);
        }),
        null == l)
    )
        return null;
    let r = gB.A.createFromServer(
        {
            id: dp.default.fromTimestamp(Date.now()),
            subscription_id: n.id,
            canceled: !1,
            premium_guild_subscription: { id: l, guild_id: t },
            cooldown_ends_at: null,
        },
        n,
    );
    return (0, E.jsxs)("div", {
        className: g1.ag,
        children: [
            (0, E.jsx)(g0, { guildId: t, boostingVariant: !1 }),
            i.map((e, t) =>
                (0, E.jsx)(
                    g3,
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
function g7(e) {
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
              className: g1.iE,
              children: [
                  (0, E.jsx)("div", {
                      className: g1.kL,
                      children: dp.default
                          .keys(n)
                          .map((e) =>
                              (0, E.jsx)(g4, { guildId: e, premiumSubscription: i, appliedGuildBoosts: n[e] }, e),
                          ),
                  }),
                  (0, E.jsx)("div", { className: g1.vK }),
              ],
          });
}
function g8(e) {
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
                if ((!(0, gw.I5)(s) && e++, null != s.premiumGuildSubscription)) {
                    let e = s.premiumGuildSubscription.guildId;
                    e in i || (i[e] = []), i[e].push(s);
                }
            }),
            { boostsByGuildId: i, numActiveGuildBoostSlots: e }
        );
    }, [t]);
    if (null == i || 0 === Object.keys(l).length) return null;
    let a = r > ua.Ay.getNumIncludedPremiumGuildSubscriptionSlots(i.planId);
    return (0, E.jsxs)("div", {
        className: g1.iE,
        children: [
            (0, E.jsx)("div", {
                className: g1.kL,
                children: dp.default
                    .keys(l)
                    .map((e) =>
                        (0, E.jsx)(
                            g6,
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
            (0, E.jsx)("div", { className: g1.vK }),
        ],
    });
}
var g5 = i(520610);
let g9 = function (e) {
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
                    (0, E.jsx)(eP.D, {
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
var me = i(20218),
    mt = i(168482);
function mi() {
    return (0, E.jsxs)("div", {
        className: me.iE,
        children: [
            (0, E.jsx)("img", { className: me.Kk, alt: "", src: mt }),
            (0, E.jsxs)("div", {
                className: me.pq,
                children: [
                    (0, E.jsx)(ei.E, { variant: "text-lg/bold", children: j.intl.string(j.t.ZHNSYf) }),
                    (0, E.jsx)(ei.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: j.intl.string(j.t.kCj5ps),
                    }),
                ],
            }),
            (0, E.jsx)(eG.$, {
                variant: "secondary",
                text: j.intl.string(j.t.JFlifp),
                onClick: () => {
                    (0, sF.pX)(eA.BVt.GUILD_DISCOVERY), (0, sv.default)();
                },
            }),
        ],
    });
}
var mn = i(502572),
    ms = i(614820),
    ml = i(987144),
    mr = i(805319);
let ma = function () {
    let e = S.useRef(null),
        { analyticsLocations: t } = (0, nW.Ay)(),
        { fractionalState: n } = (0, gd.A)();
    function s(i) {
        null != e.current && (0, Y.closeModal)(e.current),
            (0, ml.g)({
                analyticsLocation: {
                    page: eA.liQ.GUILD_BOOSTING_USER_SETTINGS,
                    section: eA.JJy.GUILD_BOOSTING_BOOST_ANY_GUILD_CTA,
                    object: eA.ZSU.BUTTON_CTA,
                    objectType: eA.AnalyticsObjectTypes.BUY,
                },
                analyticsLocations: t,
                guild: i,
            });
    }
    async function l() {
        e.current = await (0, Y.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 770101));
                return (t) => (0, E.jsx)(e, { ...t, onSelectGuild: s });
            },
            {
                onCloseRequest: () => {
                    null != e.current && (0, Y.closeModal)(e.current);
                },
            },
        );
    }
    let r = (0, gw.Nc)({ fractionalState: n });
    return (0, E.jsxs)("div", {
        className: mr.iE,
        children: [
            (0, E.jsx)(gs._, { color: es.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: mr.$J }),
            (0, E.jsx)(ei.E, {
                className: mr.C,
                color: "text-default",
                variant: "text-sm/medium",
                children: j.intl.format(j.t.kqC5vq, {
                    boostAnyGuildHook: (e, t) => {
                        let i = null != r,
                            n = (0, ms.O)(e),
                            s = (0, E.jsx)("div", {
                                className: mr.lO,
                                children: (0, E.jsx)(
                                    el.Q,
                                    { variant: "primary", onClick: i ? void 0 : l, text: n, disabled: i },
                                    t,
                                ),
                            });
                        return i
                            ? (0, E.jsx)(
                                  mn.A,
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
var mo = i(279574);
let mu = function (e) {
    let { canAddBoosts: t, canApplyBoosts: i } = e,
        n = (0, g.bG)([gP.A], () => gP.A.affinities),
        s = (0, g.bG)([ec.Ay], () => ec.Ay.getFlattenedGuildIds()),
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
              className: mo.iE,
              children: [
                  t &&
                      (0, E.jsx)(eP.D, {
                          variant: "heading-lg/semibold",
                          className: mo.wx,
                          children: j.intl.string(j.t.r90Wgo),
                      }),
                  l.map((e) => (0, E.jsx)(g0, { className: mo.ZS, guildId: e, boostingVariant: !0 }, e)),
                  s.length > 3 && i && (0, E.jsx)(ma, {}),
              ],
          });
};
var md = i(649327);
let mc = function (e) {
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
                        onClick: () => (0, eH.openUserSettings)(u.X.SUBSCRIPTIONS_PANEL),
                    }),
                };
            if (!n) return { subtitle: j.intl.string(j.t.oiWYAc) };
            if (t)
                return {
                    subtitle: j.intl.string(j.t.W5rDjW),
                    flavor: j.intl.format(j.t.cUHcaQ, {
                        helpdeskArticle: tN.A.getArticleURL(eA.MVz.GUILD_SUBSCRIPTIONS),
                    }),
                };
            let l = sL.hd[sL.gD.PREMIUM_MONTH_GUILD],
                r = ua.Ay.getDefaultPrice(l.id, i),
                a = (0, dT.CE)((0, dT.$g)(r.amount, r.currency), l.interval, l.intervalCount);
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
        className: md.i,
        children: [
            (0, E.jsx)(eP.D, { variant: "heading-lg/bold", className: md.V, children: l }),
            null != r && (0, E.jsx)(ei.E, { variant: "text-sm/normal", children: r }),
        ],
    });
};
var mg = i(724624),
    mm = i(983511),
    mA = i(342744),
    mh = i(87719),
    mE = i(354888);
function mS(e) {
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
        u = (0, gw.I5)(t),
        d = l?.isPaused === !0 && a === sL.xc.NONE,
        c = j.intl.string(j.t.mOWsF1);
    return (0, E.jsxs)(
        "li",
        {
            className: mE.Hp,
            children: [
                (0, E.jsxs)("div", {
                    className: mE.YL,
                    children: [
                        (0, E.jsx)(gW, {
                            className: mE.W6,
                            hasCooldown: t.isOnCooldown(),
                            isCanceled: u,
                            useReducedMotion: r,
                        }),
                        u && null != l
                            ? (0, E.jsx)(ei.E, {
                                  color: "text-muted",
                                  variant: "text-sm/medium",
                                  children: j.intl.format(j.t.Z4ULRD, { date: l.currentPeriodEnd }),
                              })
                            : t.isOnCooldown() && null != o
                              ? (0, E.jsx)(gX, { cooldown: o.getTime() })
                              : (0, E.jsx)(ei.E, {
                                    className: mE.__invalid_unappliedGuildBoostSlotDescription,
                                    color: "text-muted",
                                    variant: "text-sm/medium",
                                    children: j.intl.string(j.t["2mcafz"]),
                                }),
                    ],
                }),
                (0, E.jsxs)("div", {
                    className: mE.E7,
                    children: [
                        i &&
                            !u &&
                            (0, E.jsx)(mn.A, {
                                shouldShow: d,
                                text: c,
                                "aria-label": c.toString(),
                                children: (e) =>
                                    (0, E.jsx)("div", {
                                        className: mE.LB,
                                        children: (0, E.jsx)(el.Q, {
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
                            (0, E.jsx)(mn.A, {
                                shouldShow: d,
                                text: c,
                                "aria-label": c.toString(),
                                children: (e) =>
                                    (0, E.jsx)("div", {
                                        className: mE.LB,
                                        children: (0, E.jsx)(el.Q, {
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
function mT(e) {
    (0, Y.openModalLazy)(async () => (t) => (0, E.jsx)(mm.default, { ...t, guildBoostSlot: e }));
}
function mx(e) {
    (0, Y.openModalLazy)(async () => (t) => (0, E.jsx)(mA.default, { ...t, guildBoostSlotId: e.id }));
}
let mp = function (e) {
    let t,
        i,
        n,
        { guildBoostSlots: s } = e,
        l = (0, g.bG)([dH.A], () => dH.A.getPremiumTypeSubscription()),
        r = l?.isPausedOrPausePending === !0,
        { fractionalState: a } = (0, gd.A)(),
        o = (0, g.bG)([i7.A], () => i7.A.useReducedMotion),
        u = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
        d = a === sL.xc.FP_SUB_PAUSED,
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
                    !(0, gw.I5)(s) && i++,
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
        p = null != l ? ua.Ay.getNumIncludedPremiumGuildSubscriptionSlots(l.planId) : 0,
        f = Math.max(0, p - m.length),
        N = h > p,
        _ = p === s.length,
        I = _ ? f : 1,
        C = S.useMemo(() => {
            let e = [];
            for (let t = 0; t < I; t++) e.push((0, E.jsx)(gH, { className: mE.YA, useReducedMotion: o }, t));
            return e;
        }, [I, o]),
        b = S.useMemo(() => A.find((e) => e.isAvailable()), [A]);
    if (0 === A.length) return null;
    let v = A.length;
    if (
        ((t = _
            ? j.intl.formatToPlainString(x ? j.t["3DW6Dc"] : j.t["/u15Qc"], { numUnappliedGuildBoostSlots: v })
            : j.intl.formatToPlainString(x ? j.t["3DW6Dc"] : j.t.BPadnO, { numUnappliedGuildBoostSlots: v })),
        ua.Ay.isPremium(u))
    ) {
        let e = (e, t) =>
            (0, E.jsx)(
                et.D,
                {
                    className: mE.nw,
                    tag: "span",
                    onClick: () => {
                        (0, mh.e)();
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
        (n = r && a === sL.xc.NONE ? j.intl.string(j.t.mOWsF1) : j.intl.string(j.t.xr4m5B)),
        (0, E.jsx)("div", {
            className: mE.iE,
            children: (0, E.jsxs)("div", {
                className: e6()(mE.Qs, [mE.Yq]),
                children: [
                    (0, E.jsxs)("div", {
                        className: mE.wx,
                        children: [
                            (0, E.jsxs)("div", {
                                className: mE.RW,
                                children: [
                                    (0, E.jsx)("div", { className: mE.PS, children: C }),
                                    (0, E.jsxs)("div", {
                                        className: mE.__invalid_headerCopy,
                                        children: [
                                            (0, E.jsx)(eP.D, {
                                                className: mE.gg,
                                                variant: "heading-lg/bold",
                                                children: t,
                                            }),
                                            (0, E.jsx)(ei.E, {
                                                className: mE.__invalid_headerSubheading,
                                                color: "text-strong",
                                                variant: "text-sm/normal",
                                                children: i,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, E.jsx)("div", {
                                className: mE.di,
                                children: (0, E.jsx)(mn.A, {
                                    shouldShow: null == b || c,
                                    text: n,
                                    "aria-label": n.toString(),
                                    children: (e) =>
                                        (0, E.jsx)(eG.$, {
                                            variant: "primary",
                                            text: j.intl.string(j.t.BMx1iy),
                                            ...e,
                                            disabled: null == b || c,
                                            onClick:
                                                null != b
                                                    ? () => {
                                                          (0, Y.openModalLazy)(
                                                              async () => (e) =>
                                                                  (0, E.jsx)(mg.default, {
                                                                      ...e,
                                                                      guildBoostSlots: [b],
                                                                      locationSection: eA.JJy.SETTINGS_PREMIUM,
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
                            className: mE.LU,
                            children: A.map((e) =>
                                (0, E.jsx)(
                                    mS,
                                    {
                                        guildBoostSlot: e,
                                        isCancellable: N,
                                        onCancel: mT,
                                        onUncancel: mx,
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
var mf = i(616659);
function mN(e) {
    let { premiumSubscription: t } = e,
        i = (0, g.bG)([gG.A], () => gG.A.boostSlots),
        n = S.useMemo(() => Object.values(i), [i]),
        s = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
        l = ua.Ay.isPremium(s, sL.PremiumTypes.TIER_2),
        r = (0, g.bG)([gP.A], () => gP.A.affinities),
        a = (0, g.bG)([ec.Ay], () => ec.Ay.getFlattenedGuildIds()),
        o = r.length > 0 || a.length > 0,
        u = n.length > 0,
        d = S.useMemo(() => n.filter((e) => null != e.premiumGuildSubscription), [n]),
        c = d.length > 0,
        m = n.length > d.length,
        A = (0, g.bG)([gu.A], () => gu.A.getCurrentUserAppliedBoosts()),
        { fractionalState: h } = (0, gd.A)({ forceFetch: !0 }),
        T = s?.isPremiumGroupMember(),
        x = t?.isPausedOrPausePending === !0 && h === sL.xc.NONE,
        p = t?.isPausedOrPausePending !== !0 && h === sL.xc.NONE && !T,
        f = l && h === sL.xc.FP_SUB_PAUSED,
        N = h === sL.xc.NONE && !T;
    return (0, E.jsxs)("div", {
        className: mf.GO,
        children: [
            (0, E.jsx)(d$.kb, { className: mf.ek }),
            (0, E.jsx)(g9, { hasGuildBoostSlots: u, hasAppliedGuildBoosts: c, hasBoostPerk: f, canAddBoosts: p }),
            N &&
                (0, E.jsx)(mc, {
                    hasAppliedGuildBoosts: c,
                    hasBoostPerk: f,
                    hasGuildAffinitiesOrInGuild: o,
                    subscriptionIsPausedOrPausePending: x,
                }),
            T && (0, E.jsx)(gD.A, {}),
            !o && (0, E.jsx)(mi, {}),
            t?.isPaused && h !== sL.xc.FP_SUB_PAUSED
                ? (0, E.jsx)(g7, { appliedGuildBoosts: A, premiumSubscription: t })
                : (0, E.jsx)(g8, { guildBoostSlots: i, premiumSubscription: t }),
            (0, E.jsx)(mp, { guildBoostSlots: n, fractionalPremiumState: h }),
            (0, E.jsx)(mu, { canAddBoosts: c && p, canApplyBoosts: m }),
            (0, E.jsx)(gL, { className: mf.e4, hideHeading: !0, hideTier0: !0 }),
            (0, E.jsx)(gS, { cardClassName: mf.KW }),
            (0, E.jsx)(gf, { className: mf.JL }),
        ],
    });
}
var m_ = i(527113),
    mI = i(365199),
    mC = i(162286);
function mb(e) {
    let { guild: t, className: i } = e,
        { total: n } = (0, gJ.A)(t.id);
    return (0, E.jsxs)("div", {
        className: i ?? mC.OA,
        children: [
            (0, E.jsx)(gZ.Ay, { className: mC.$f, guild: t, size: gZ.Ay.Sizes.MEDIUM }),
            (0, E.jsxs)("div", {
                className: mC.gI,
                children: [
                    (0, E.jsx)(ei.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, E.jsxs)("div", {
                        className: mC.ew,
                        children: [
                            (0, E.jsxs)("div", {
                                className: mC.QW,
                                children: [
                                    (0, E.jsx)(gs._, {
                                        className: mC.Wz,
                                        color: es.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                                    }),
                                    (0, E.jsx)(ei.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: j.intl.format(j.t["pob/cL"], { subscriptions: n }),
                                    }),
                                ],
                            }),
                            t.premiumTier !== eA.TVA.NONE &&
                                (0, E.jsxs)(E.Fragment, {
                                    children: [
                                        (0, E.jsx)("div", { className: mC.zk }),
                                        (0, E.jsx)(ei.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, gw.gb)(t.premiumTier, { useLevels: !1 }),
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
function mv(e) {
    let { guildId: t } = e,
        i = (0, g.bG)([ed.A], () => ed.A.getGuild(t), [t]);
    return null == i
        ? null
        : (0, E.jsxs)("div", {
              className: mC.Nr,
              children: [
                  (0, E.jsx)(mb, { guild: i }),
                  (0, E.jsx)(eG.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: gs._,
                      text: j.intl.string(j.t.aBHecF),
                      onClick: () => {
                          (0, ml.g)({
                              analyticsLocations: [],
                              analyticsLocation: {
                                  page: eA.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                  section: eA.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                  object: eA.ZSU.BUTTON_CTA,
                                  objectType: eA.AnalyticsObjectTypes.BUY,
                              },
                              guild: i,
                          });
                      },
                  }),
              ],
          });
}
var my = i(225334);
let mj =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function mO(e) {
    let { slot: t, guildTier: i, premiumSubscription: n, hasCancelableSlots: s, isLast: l } = e,
        r = S.useRef(null),
        a = (0, gw.I5)(t),
        o = S.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, gd.A)(),
        c = S.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === eA.TVA.NONE) return "";
                    let i = [
                        j.intl.formatToPlainString(j.t["dLlKX/"], { numEmojiSlots: sL.TG[e].limits.emoji }),
                        j.intl.formatToPlainString(j.t["+ANIfv"], { numStickerSlots: sL.TG[e].limits.stickers }),
                        j.intl.formatToPlainString(j.t["4gt60b"], {
                            numSoundboardSlots: sL.TG[e].limits.soundboardSounds,
                        }),
                        j.intl.formatToPlainString(j.t.XahSjZ, {
                            resolution: sL.TG[e].limits.screenShareQualityResolution,
                            framerate: sL.TG[e].limits.screenShareQualityFramerate,
                        }),
                        j.intl.formatToPlainString(j.t.NbNs7S, { bitrate: sL.TG[e].limits.bitrate / 1e3 }),
                        j.intl.formatToPlainString(j.t.VVKcpn, { filesize: sL.TG[e].limits.fileSize / 1024 / 1024 }),
                        j.intl.formatToPlainString(j.t.TbpCvv, { numVideoStageSeats: sL.TG[e].limits.stageVideoUsers }),
                        j.intl.string(j.t.LDyX3i),
                        j.intl.string(j.t.YtGlPW),
                    ];
                    e >= eA.TVA.TIER_2 && (i.push(j.intl.string(j.t.SztbtN)), i.push(j.intl.string(j.t["3GK91n"]))),
                        e >= eA.TVA.TIER_3 && i.push(j.intl.string(j.t["XUUJd+"]));
                    let n = 0;
                    for (let e = 0; e < t.length; e++) n = (31 * n + t.charCodeAt(e)) | 0;
                    let s = i[Math.abs(n) % i.length];
                    return j.intl.formatToPlainString(j.t["/dOAmQ"], { perk: s });
                })(i, t.id),
            [i, t.id],
        ),
        g = S.useMemo(() => {
            if ("" !== c) return c;
            let e = null != t.premiumGuildSubscription ? dp.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return j.intl.formatToPlainString(j.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        m = S.useMemo(
            () => (a ? (n.isPausedForFractionalPremium ? d.endsAt.toDate() : n.currentPeriodEnd) : null),
            [a, n, d],
        );
    return (0, E.jsxs)("div", {
        className: e6()(my.iq, { [my.Mt]: l }),
        children: [
            (0, E.jsxs)("div", {
                className: my.kd,
                children: [
                    (0, E.jsx)("img", { alt: "", className: my.bB, src: mj }),
                    a && null != m
                        ? (0, E.jsx)(ei.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: j.intl.format(j.t.Z4ULRD, { date: m }),
                          })
                        : (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(ei.E, { variant: "text-sm/medium", color: "text-subtle", children: g }),
                                  u &&
                                      null != o &&
                                      (0, E.jsxs)(E.Fragment, {
                                          children: [
                                              (0, E.jsx)("div", { className: my.zk }),
                                              (0, E.jsx)(ei.E, {
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
                                              (0, E.jsx)("div", { className: my.zk }),
                                              (0, E.jsx)(ei.E, {
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
            (0, E.jsx)(J.Y, {
                targetElementRef: r,
                renderPopout: (e) => {
                    let { closePopout: i } = e;
                    return (0, E.jsx)(gF, {
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
                    (0, E.jsx)(et.D, {
                        innerRef: r,
                        "aria-label": j.intl.string(j.t.PdRCRg),
                        className: my.Mj,
                        ...e,
                        children: (0, E.jsx)(mI.j, { size: "xs", color: es.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                    }),
            }),
        ],
    });
}
function mR(e) {
    let { guildId: t, slots: i, premiumSubscription: n, hasCancelableSlots: s } = e,
        l = (0, g.bG)([ed.A], () => ed.A.getGuild(t), [t]);
    return (0, E.jsxs)("div", {
        className: my.Nr,
        children: [
            (0, E.jsx)("div", {
                className: my.MY,
                children:
                    null != l
                        ? (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(mb, { guild: l, className: my.OA }),
                                  (0, E.jsx)(eG.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: j.intl.string(j.t.KLOhbO),
                                      onClick: () => {
                                          (0, sv.default)(),
                                              (0, gq.K4)({
                                                  guildId: l.id,
                                                  location: {
                                                      section:
                                                          eA.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA,
                                                  },
                                              });
                                      },
                                  }),
                              ],
                          })
                        : (0, E.jsx)("div", {
                              className: my.OA,
                              children: (0, E.jsx)(eP.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: j.intl.string(j.t["6Kwwuo"]),
                              }),
                          }),
            }),
            i.map((e, t) =>
                (0, E.jsx)(
                    mO,
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
function mL(e) {
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
                                gB.A.createFromServer(
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
                if ((!(0, gw.I5)(n) && e++, null != n.premiumGuildSubscription)) {
                    let e = n.premiumGuildSubscription.guildId;
                    e in l || (l[e] = []), l[e].push(n);
                }
            }
            return { boostsByGuildId: l, numActiveSlots: e };
        }, [t, s, n, i]);
    if (null == i || 0 === Object.keys(l).length) return null;
    let a = r > ua.Ay.getNumIncludedPremiumGuildSubscriptionSlots(i.planId);
    return (0, E.jsx)("div", {
        className: my.kR,
        children: dp.default
            .keys(l)
            .map((e) => (0, E.jsx)(mR, { guildId: e, slots: l[e], premiumSubscription: i, hasCancelableSlots: a }, e)),
    });
}
var mD = i(68179);
function mP(e) {
    let { guildBoostSlots: t, fractionalPremiumState: n } = e,
        s = (0, g.bG)([dH.A], () => dH.A.getPremiumTypeSubscription()),
        { unappliedSlots: l, numActiveSlots: r } = S.useMemo(() => {
            let e = [],
                i = 0;
            for (let n of t) !(0, gw.I5)(n) && i++, null == n.premiumGuildSubscription && e.push(n);
            return { unappliedSlots: e, numActiveSlots: i };
        }, [t]),
        a = r > (null != s ? ua.Ay.getNumIncludedPremiumGuildSubscriptionSlots(s.planId) : 0),
        o = s?.isPausedOrPausePending === !0 && n === sL.xc.NONE;
    return 0 === l.length
        ? null
        : (0, E.jsxs)("div", {
              className: mD.Nr,
              children: [
                  (0, E.jsxs)("div", {
                      className: mD.MY,
                      children: [
                          (0, E.jsxs)("div", {
                              className: mD._L,
                              children: [
                                  (0, E.jsxs)("div", {
                                      className: mD.MD,
                                      children: [
                                          (0, E.jsx)("img", { alt: "", className: mD.F8, src: mj }),
                                          (0, E.jsx)("div", {
                                              className: e6()(mD.qS, "theme-dark"),
                                              children: (0, E.jsx)("span", { className: mD.Vv, children: l.length }),
                                          }),
                                      ],
                                  }),
                                  (0, E.jsxs)("div", {
                                      className: mD.Qp,
                                      children: [
                                          (0, E.jsx)(ei.E, {
                                              variant: "heading-md/semibold",
                                              color: "text-default",
                                              tag: "span",
                                              children: j.intl.format(j.t.BPadnO, {
                                                  numUnappliedGuildBoostSlots: l.length,
                                              }),
                                          }),
                                          (0, E.jsx)(ei.E, {
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
                          (0, E.jsx)(mn.A, {
                              shouldShow: o,
                              text: j.intl.string(j.t.mOWsF1),
                              "aria-label": j.intl.string(j.t.mOWsF1),
                              children: (e) =>
                                  (0, E.jsx)(eG.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: gs._,
                                      text: j.intl.string(j.t.BMx1iy),
                                      disabled: o,
                                      onClick: () => {
                                          (0, Y.openModalLazy)(async () => {
                                              let { default: e } = await Promise.resolve().then(i.bind(i, 770101));
                                              return (t) =>
                                                  (0, E.jsx)(e, {
                                                      ...t,
                                                      onSelectGuild: (e) => {
                                                          t.onClose(),
                                                              (0, ml.g)({
                                                                  analyticsLocations: [],
                                                                  analyticsLocation: {
                                                                      page: eA.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                                      section: eA.JJy.SETTINGS_PREMIUM,
                                                                      object: eA.ZSU.BUTTON_CTA,
                                                                      objectType: eA.AnalyticsObjectTypes.BUY,
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
                          mG,
                          {
                              slot: e,
                              isLast: t === l.length - 1,
                              isCancelable: a && !(0, gw.I5)(e),
                              isCanceled: (0, gw.I5)(e),
                              premiumSubscription: s,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function mG(e) {
    let t,
        { slot: i, isLast: n, isCancelable: s, isCanceled: l, premiumSubscription: r, modificationsDisabled: a } = e,
        o = S.useRef(null),
        u = S.useMemo(() => (null != i.cooldownEndsAt ? new Date(i.cooldownEndsAt) : null), [i.cooldownEndsAt]);
    t =
        l && null != r
            ? (0, E.jsx)(ei.E, {
                  variant: "text-sm/medium",
                  color: "text-subtle",
                  children: j.intl.format(j.t.Z4ULRD, { date: r.currentPeriodEnd }),
              })
            : i.isOnCooldown() && null != u
              ? (0, E.jsx)(gX, { cooldown: u.getTime() })
              : (0, E.jsx)(ei.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: j.intl.string(j.t["2mcafz"]),
                });
    let d = s || l;
    return (0, E.jsxs)("div", {
        className: e6()(mD.iq, { [mD.Mt]: n }),
        children: [
            (0, E.jsxs)("div", {
                className: mD.kd,
                children: [(0, E.jsx)("img", { alt: "", className: mD.bB, src: mj }), t],
            }),
            d &&
                (0, E.jsx)(J.Y, {
                    targetElementRef: o,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, E.jsxs)($.W, {
                            navId: "unapplied-boost-actions",
                            "aria-label": j.intl.string(j.t.ogxXGq),
                            onSelect: void 0,
                            onClose: t,
                            children: [
                                s &&
                                    (0, E.jsx)(ee.Dr, {
                                        id: "cancel-boost",
                                        label: j.intl.string(j.t.twFU3R),
                                        color: "danger",
                                        disabled: a,
                                        subtext: a ? j.intl.string(j.t.mOWsF1) : void 0,
                                        action: () => {
                                            t(),
                                                (0, Y.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, E.jsx)(mm.default, { ...e, guildBoostSlot: i }),
                                                );
                                        },
                                    }),
                                l &&
                                    (0, E.jsx)(ee.Dr, {
                                        id: "uncancel-boost",
                                        label: j.intl.string(j.t["2glQNp"]),
                                        disabled: a,
                                        subtext: a ? j.intl.string(j.t.mOWsF1) : void 0,
                                        action: () => {
                                            t(),
                                                (0, Y.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, E.jsx)(mA.default, { ...e, guildBoostSlotId: i.id }),
                                                );
                                        },
                                    }),
                            ],
                        });
                    },
                    align: "right",
                    position: "bottom",
                    children: (e) =>
                        (0, E.jsx)(et.D, {
                            innerRef: o,
                            "aria-label": j.intl.string(j.t["UKOtz+"]),
                            className: mD.Mj,
                            ...e,
                            children: (0, E.jsx)(mI.j, { size: "xs", color: es.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                        }),
                }),
        ],
    });
}
var mM = i(185949);
function mU(e) {
    let {
            guildBoostSlots: t,
            guildBoostSlotsByGuildId: i,
            premiumSubscription: n,
            pausedAppliedGuildBoosts: s,
            fractionalPremiumState: l,
        } = e,
        r = tN.A.getArticleURL(eA.MVz.GUILD_BOOSTING_FAQ),
        a = n?.isPaused === !0 && l !== sL.xc.FP_SUB_PAUSED,
        o = t.some((e) => null == e.premiumGuildSubscription),
        u = a && s.length > 0,
        d = a ? u : t.some((e) => null != e.premiumGuildSubscription);
    return o || d
        ? (0, E.jsxs)("div", {
              className: mM.i,
              children: [
                  (0, E.jsxs)("div", {
                      className: mM.b,
                      children: [
                          (0, E.jsx)(eP.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.W5rDjW) }),
                          (0, E.jsx)(ei.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: j.intl.format(j.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, E.jsx)(mL, {
                      guildBoostSlots: i,
                      premiumSubscription: n,
                      pausedAppliedGuildBoosts: s,
                      isPaused: a,
                  }),
                  (0, E.jsx)(mP, { guildBoostSlots: t, fractionalPremiumState: l }),
              ],
          })
        : null;
}
var mV = i(917064),
    mk = i(438929);
function mw() {
    return (0, E.jsxs)("div", {
        className: mk.iE,
        children: [
            (0, E.jsx)(eP.D, { variant: "heading-xl/normal", children: j.intl.string(j.t.IzKs3o) }),
            (0, E.jsx)("div", {
                className: mk.kR,
                children: mV.s.map((e, t) => {
                    let i = e.icon;
                    return (0, E.jsxs)(
                        "div",
                        {
                            className: mk.Nr,
                            children: [
                                (0, E.jsx)(i, { className: mk.Kk }),
                                (0, E.jsx)(ei.E, {
                                    className: mk.h_,
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
var mF = i(232122),
    mB = i(539915);
function mz() {
    let [e, t] = S.useState(null),
        [i, n] = S.useState(null);
    return (0, E.jsxs)("div", {
        className: mB.iE,
        children: [
            (0, E.jsx)(eP.D, { variant: "heading-xl/normal", children: j.intl.string(j.t.HPJ6Nj) }),
            (0, E.jsx)("ul", {
                className: mB.p_,
                children: mF.m.map((s, l) => {
                    let r = e === l,
                        a = i === l,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, E.jsxs)(
                        et.D,
                        {
                            tag: "li",
                            className: e6()(mB.Aw, { [mB.$K]: r }),
                            onClick: () => t((e) => (e === l ? null : l)),
                            onMouseEnter: () => n(l),
                            onMouseLeave: () => n(null),
                            children: [
                                (0, E.jsxs)("div", {
                                    className: mB.k7,
                                    children: [
                                        (0, E.jsx)(ei.E, {
                                            className: mB.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: s.getQuestion(),
                                        }),
                                        (0, E.jsx)(en.a, {
                                            size: "sm",
                                            color: es.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: mB.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, E.jsx)(ei.E, {
                                        className: mB.ZF,
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
var mX = i(182859),
    mY = i(853513),
    mH = i(560378);
function mK() {
    let e = tN.A.getArticleURL(eA.MVz.GUILD_SUBSCRIPTIONS);
    return (0, E.jsxs)("div", {
        className: mH.wx,
        children: [
            (0, E.jsxs)("div", {
                className: mH.Qs,
                children: [
                    (0, E.jsxs)("div", {
                        className: mH.B5,
                        children: [
                            (0, E.jsx)("img", { alt: "", className: mH.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, E.jsx)(eP.D, {
                                variant: "heading-xl/normal",
                                children: j.intl.string(mY.default.hjvcLO),
                            }),
                        ],
                    }),
                    (0, E.jsx)(ei.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: j.intl.format(j.t.TUHyoA, { helpdeskArticle: e }),
                    }),
                ],
            }),
            (0, E.jsx)(mX.A, {
                variant: "member",
                className: mH.iO,
                analyticsLocation: {
                    page: eA.liQ.GUILD_BOOSTING_USER_SETTINGS,
                    section: eA.JJy.HERO,
                    object: eA.ZSU.CARD,
                },
                videoPlacement: "settings_header",
            }),
        ],
    });
}
var mW = i(315629),
    mZ = i(780082);
function mq() {
    let e = (0, g.bG)([io.default], () => io.default.getCurrentUser());
    if (null == e || ua.Ay.hasFreeBoosts(e)) return null;
    let t = tN.A.getArticleURL(eA.MVz.GUILD_BOOSTING_FAQ);
    return (0, E.jsxs)(mW.h, {
        color: "nitro-pink",
        className: mZ.vK,
        children: [
            (0, E.jsxs)("div", {
                className: mZ.nw,
                children: [
                    (0, E.jsx)("img", { alt: "", className: mZ.q3, src: mj }),
                    (0, E.jsxs)("div", {
                        className: mZ.Tm,
                        children: [
                            (0, E.jsx)(ei.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: j.intl.format(j.t.Idh1Vs, { count: sL.M4, boostCount: sL.M4 }),
                            }),
                            (0, E.jsxs)("div", {
                                className: mZ.xv,
                                children: [
                                    (0, E.jsx)(o5.t, { className: mZ.nE }),
                                    (0, E.jsx)(ei.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: j.intl.format(j.t["6UAu+f"], {
                                            count: sL.M4,
                                            boostCount: sL.M4,
                                            helpdeskArticle: t,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)(eG.$, {
                variant: "expressive",
                size: "sm",
                icon: o5.t,
                text: j.intl.string(j.t["8x0jKT"]),
                onClick: mh.e,
            }),
        ],
    });
}
var mQ = i(894206);
function mJ() {
    let e = (0, g.bG)([gP.A], () => gP.A.affinities),
        t = (0, g.bG)([ec.Ay], () => ec.Ay.getFlattenedGuildIds()),
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
              className: mQ.i,
              children: [
                  (0, E.jsx)(eP.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.r90Wgo) }),
                  (0, E.jsx)("div", { className: mQ.k, children: i.map((e) => (0, E.jsx)(mv, { guildId: e }, e)) }),
              ],
          });
}
var m$ = i(140909);
function m0(e) {
    let { count: t, disabledReason: n } = e,
        s = tN.A.getArticleURL(eA.MVz.GUILD_BOOSTING_FAQ);
    return (0, E.jsxs)(mW.h, {
        color: "nitro-pink",
        className: m$.vK,
        children: [
            (0, E.jsxs)("div", {
                className: m$.nw,
                children: [
                    (0, E.jsxs)("div", {
                        className: m$.MD,
                        children: [
                            (0, E.jsx)("img", { alt: "", className: m$.F8, src: mj }),
                            (0, E.jsx)("div", {
                                className: e6()(m$.qS, "theme-dark"),
                                children: (0, E.jsx)("span", { className: m$.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, E.jsxs)("div", {
                        className: m$.Tm,
                        children: [
                            (0, E.jsx)(ei.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: j.intl.format(j.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, E.jsxs)("div", {
                                className: m$.xv,
                                children: [
                                    (0, E.jsx)(o5.t, { className: m$.nE }),
                                    (0, E.jsx)(ei.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: j.intl.format(j.t["6UAu+f"], {
                                            count: sL.M4,
                                            boostCount: sL.M4,
                                            helpdeskArticle: s,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)(mn.A, {
                shouldShow: null != n,
                text: n ?? "",
                "aria-label": n,
                children: (e) =>
                    (0, E.jsx)(eG.$, {
                        ...e,
                        variant: "primary",
                        size: "sm",
                        icon: gs._,
                        text: j.intl.string(j.t.BMx1iy),
                        disabled: null != n,
                        onClick: () => {
                            (0, Y.openModalLazy)(async () => {
                                let { default: e } = await Promise.resolve().then(i.bind(i, 770101));
                                return (t) =>
                                    (0, E.jsx)(e, {
                                        ...t,
                                        onSelectGuild: (e) => {
                                            t.onClose(),
                                                (0, ml.g)({
                                                    analyticsLocations: [],
                                                    analyticsLocation: {
                                                        page: eA.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                        section: eA.JJy.SETTINGS_PREMIUM,
                                                        object: eA.ZSU.BUTTON_CTA,
                                                        objectType: eA.AnalyticsObjectTypes.BUY,
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
function m1(e) {
    let { premiumSubscription: t } = e,
        i = (0, g.bG)([gG.A], () => gG.A.boostSlots),
        n = S.useMemo(() => Object.values(i), [i]),
        s = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
        l = (0, g.bG)([gP.A], () => gP.A.affinities),
        r = (0, g.bG)([ec.Ay], () => ec.Ay.getFlattenedGuildIds()),
        a = l.length > 0 || r.length > 0,
        o = S.useMemo(() => n.filter((e) => null != e.premiumGuildSubscription), [n]).length,
        u = (0, g.bG)([gu.A], () => gu.A.getCurrentUserAppliedBoosts()),
        { fractionalState: d } = (0, gd.A)({ forceFetch: !0 }),
        c = s?.isPremiumGroupMember(),
        m = t?.isPausedOrPausePending === !0 && d === sL.xc.NONE,
        A = S.useMemo(() => n.some((e) => null == e.premiumGuildSubscription && e.isAvailable()), [n]),
        h = m ? j.intl.string(j.t.mOWsF1) : A ? void 0 : j.intl.string(j.t.xr4m5B),
        T = S.useMemo(() => {
            if (null == t) return 0;
            let e = ua.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== n.length ? 0 : Math.max(0, e - o);
        }, [t, n.length, o]);
    return (0, E.jsxs)("div", {
        className: mf.GO,
        children: [
            (0, E.jsx)(d$.kb, { className: mf.ek }),
            (0, E.jsx)(mK, {}),
            (0, E.jsx)(mq, {}),
            T > 0 && (0, E.jsx)(m0, { count: T, disabledReason: h }),
            c && (0, E.jsx)(gD.A, {}),
            !a && (0, E.jsx)(mi, {}),
            (0, E.jsxs)("div", {
                className: mf.C_,
                children: [
                    (0, E.jsx)(mU, {
                        guildBoostSlots: n,
                        guildBoostSlotsByGuildId: i,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: u,
                        fractionalPremiumState: d,
                    }),
                    (0, E.jsx)(mJ, {}),
                    (0, E.jsx)(m_.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, E.jsx)(mw, {}),
                    (0, E.jsx)(mz, {}),
                ],
            }),
        ],
    });
}
var m2 = i(65188);
let m3 = (0, a.E2)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            let e = go.useConfig({ location: "UserSettingsPremiumGuildSubscriptions" }).enabled;
            S.useEffect(() => {
                sr.h.wait(() => {
                    dA.hP(), dA.$o(), (0, gl.CD)(), (0, gr.zS)(null, null, eA.tF5.DISCOVERY), (0, gl.tO)(!0);
                });
            }, []);
            let { hasFetchedSubscriptions: t, premiumSubscription: i } = (0, g.cf)([dH.A], () => ({
                    hasFetchedSubscriptions: dH.A.hasFetchedSubscriptions(),
                    premiumSubscription: dH.A.getPremiumTypeSubscription(),
                })),
                n = (0, ga.Y)(),
                s = (0, g.bG)([dY.A], () => dY.A.hasFetchedPaymentSources),
                l = (0, g.bG)([gu.A], () => gu.A.isFetchingCurrentUserAppliedBoosts),
                r = !t || !n || !s || l,
                [a, o] = S.useState(!1);
            return (r || a || o(!0), r && !a)
                ? (0, E.jsx)("div", { className: e6()(m2.kL, m2.Lq), children: (0, E.jsx)(du.y, {}) })
                : (0, E.jsxs)("div", {
                      className: m2.kL,
                      children: [
                          (0, E.jsx)("div", { className: m2.Tp }),
                          (0, E.jsx)("div", {
                              className: m2.Qs,
                              children: e
                                  ? (0, E.jsx)(m1, { premiumSubscription: i })
                                  : (0, E.jsx)(mN, { premiumSubscription: i }),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t["+CbP2v"]), j.intl.string(j.t.Nn1lJy)],
    }),
    m6 = (0, a.zZ)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [m3] }),
    m4 = (0, a.t_)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => j.intl.string(j.t["+CbP2v"]),
        buildLayout: () => [m6],
    }),
    m7 = (0, a.i4)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["+CbP2v"]),
        icon: gs._,
        buildLayout: () => [m4],
    });
var m8 = i(153659),
    m5 = i(155984),
    m9 = i(357758),
    Ae = i(262077),
    At = i(696986),
    Ai = i(819411);
function An(e) {
    let { onClickManageSubscription: t, count: i } = e;
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsx)(eP.D, { variant: "heading-md/bold", children: j.intl.string(j.t["KzCF/6"]) }),
            (0, E.jsx)(At.h, { size: 4 }),
            (0, E.jsx)(ei.E, { variant: "text-md/normal", className: Ai.yV, children: j.intl.string(j.t["3D7qCu"]) }),
            (0, E.jsx)(At.h, { size: 24 }),
            (0, E.jsxs)("div", {
                className: Ai.Nr,
                children: [
                    (0, E.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: Ai.RI }),
                    (0, E.jsxs)("div", {
                        className: Ai.FS,
                        children: [
                            (0, E.jsx)(eP.D, {
                                variant: "heading-xl/semibold",
                                className: Ai.wx,
                                children: j.intl.string(j.t["KzCF/6"]),
                            }),
                            (0, E.jsx)(ei.E, {
                                variant: "text-md/normal",
                                className: Ai.h_,
                                children: j.intl.format(j.t["m+pcOO"], { numSubscriptions: i }),
                            }),
                        ],
                    }),
                    (0, E.jsx)(eG.$, {
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
var As = i(872351),
    Al = i(9113),
    Ar = i(599941),
    Aa = i(384684),
    Ao = i(2242);
let Au = [];
var Ad = i(912851),
    Ac = i(146795);
let Ag = (e) => {
    let { label: t, onClick: i, submitting: n } = e;
    return (0, E.jsx)(et.D, {
        onClick: n ? void 0 : i,
        className: Ac.x6,
        children: (0, E.jsxs)("div", {
            className: Ac.hQ,
            children: [
                n
                    ? (0, E.jsx)(du.y, { type: du.y.Type.PULSING_ELLIPSIS, className: Ac.__invalid_spinner })
                    : (0, E.jsx)(ei.E, { variant: "text-md/medium", className: Ac.Pf, children: t }),
                (0, E.jsx)(en.a, { size: "md", color: "currentColor", className: Ac.UE }),
            ],
        }),
    });
};
var Am = i(465932),
    AA = i(543767),
    Ah = i(420139),
    AE = i(790284),
    AS = i(636194),
    AT = i(624456),
    Ax = i(710144),
    Ap = i(815332),
    Af = i(817649),
    AN = i(969389);
let A_ = (e) => {
    let { transitionState: t, groupListing: i, listing: n, subscription: s, onClose: l } = e,
        r = (0, sO.GV)(),
        { analyticsLocations: a } = (0, nW.Ay)(e1.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
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
                        return i(!0), await dA.M2(t, e), !0;
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
        g = n.role_benefits.benefits.filter((e) => e.ref_type === Ao.bN.CHANNEL),
        m = n.role_benefits.benefits.filter((e) => e.ref_type === Ao.bN.INTANGIBLE),
        A = rw()(s.currentPeriodEnd).format("MMMM Do, YYYY"),
        h = j.intl.formatToPlainString(j.t.KsMRP5, {
            numChannels: g.length,
            numAdditionalBenefits: m.length,
            subscriptionEndDate: A,
        });
    return (0, E.jsx)(lz.Modal, {
        transitionState: t,
        "aria-labelledby": r,
        actions: [
            { text: j.intl.string(j.t.EP6EPb), variant: "secondary", onClick: l },
            { variant: "critical-primary", text: j.intl.string(j.t.F6lUDF), onClick: c, loading: d },
        ],
        title: j.intl.string(j.t.O6l5tM),
        subtitle: h,
        onClose: l,
        children: (0, E.jsxs)(Z.B, {
            gap: 8,
            children: [
                null != u ? (0, E.jsx)(W.w, { type: "critical", children: u.message }) : null,
                (0, E.jsx)(Af.x, { listingId: n.id, guildId: i.guild_id, className: AN.P }),
            ],
        }),
    });
};
var AI = i(319225),
    AC = i(746080),
    Ab = i(47685);
let Av = (e) => {
        let { label: t, value: i, showInfoIcon: n, infoIconTooltipText: s } = e;
        return (0, E.jsxs)("div", {
            className: Ab.L0,
            children: [
                (0, E.jsxs)("div", {
                    className: Ab.a5,
                    children: [
                        (0, E.jsx)(eP.D, { variant: "heading-deprecated-12/semibold", className: Ab.HU, children: t }),
                        n &&
                            (0, E.jsx)(tr.m, {
                                text: s,
                                children: (0, E.jsx)(lD.m, { size: "xs", color: "currentColor", className: Ab.Mo }),
                            }),
                    ],
                }),
                (0, E.jsx)(eP.D, { variant: "heading-xl/semibold", className: Ab.sx, children: i }),
            ],
        });
    },
    Ay = (e) => {
        let { subscription: t } = e,
            { analyticsLocations: i } = (0, nW.Ay)(),
            [n] = (0, AA.YV)({
                subscriptionId: t.id,
                renewal: !0,
                analyticsLocations: i,
                analyticsLocation: e1.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
            }),
            s = (0, g.bG)([dY.A], () => dY.A.hasFetchedPaymentSources);
        return null != n && s
            ? (0, E.jsx)(Ah.A, { subscription: t, currentInvoicePreview: n, dropdownClassName: Ab.Nw })
            : (0, E.jsx)(du.y, {});
    },
    Aj = (e) => {
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
            : (0, E.jsx)(sw.D, {
                  label: j.intl.string(j.t["4neDM+"]),
                  children: (0, E.jsx)("div", {
                      className: Ab.__invalid_rowButtons,
                      children: i
                          ? (0, E.jsx)(eG.$, {
                                variant: "primary",
                                text: j.intl.string(j.t.y3mAE4),
                                onClick: r,
                                loading: n,
                            })
                          : (0, E.jsxs)(E.Fragment, {
                                children: [
                                    !t && !s && (0, E.jsx)(Ag, { label: j.intl.string(j.t.FRbWR8), onClick: a }),
                                    (0, E.jsx)(Ag, { label: j.intl.string(j.t.Dx0lF7), onClick: l }),
                                ],
                            }),
                  }),
              });
    },
    AO = (e) => {
        let { subscription: t } = e,
            {
                listing: i,
                groupListing: n,
                guild: s,
                expanded: l,
                handleToggleExpanded: r,
                subscriptionInfo: a,
            } = (function (e) {
                let t = (0, AT.M)(e),
                    i = (0, g.bG)([AS.A], () => AS.A.getSubscriptionListingForPlan(t)),
                    n = (0, g.bG)([AS.A], () =>
                        null != i ? AS.A.getSubscriptionGroupListingForSubscriptionListing(i.id) : null,
                    ),
                    s = (0, g.bG)([ed.A], () => ed.A.getGuild(n?.guild_id)),
                    [l, r] = S.useState(!1),
                    { fetchSubscriptionsSettings: a } = (0, Ar.XE)();
                S.useEffect(() => {
                    l && null != s && null == AS.A.getSubscriptionSettings(s.id) && a(s.id);
                }, [l, s, a]);
                let o =
                    null == i
                        ? void 0
                        : (function (e) {
                              let { subscription: t } = e,
                                  i = rw()(t.currentPeriodEnd).format("M/D/YY"),
                                  n = null != t.price ? (0, dT.$g)(t.price, t.currency) : "",
                                  s = rw()(t.createdAt).format("M/D/YY"),
                                  l = t.status === eA.Dmq.CANCELED,
                                  r = t.status === eA.Dmq.PAST_DUE,
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
            c = (0, sO.GV)(),
            { analyticsLocations: m } = (0, nW.Ay)(),
            { shouldHideGuildPurchaseEntryPoints: A } = (0, Am.MH)(s?.id),
            h = t?.isPurchasedViaAppleGeneric;
        if (null == n || null == i || null == a) return null;
        let T = async () => {
                try {
                    d(!0),
                        await dA.QP(t, m),
                        (0, AI.E)({ title: j.intl.string(j.t.oPV2cy), body: j.intl.string(j.t.DdRizV) });
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
            className: Ab.kL,
            children: [
                (0, E.jsx)(Ax.A, {
                    onClick: r,
                    className: Ab.N1,
                    children: (e) => {
                        let { areaRef: t, handleStopPropagation: n } = e;
                        return (0, E.jsxs)(E.Fragment, {
                            children: [
                                null != s && (0, E.jsx)(gZ.Ay, { guild: s, active: !0, size: gZ.Ay.Sizes.MEDIUM }),
                                (0, E.jsxs)("div", {
                                    className: Ab.if,
                                    children: [
                                        (0, E.jsx)(ei.E, {
                                            variant: "text-md/medium",
                                            className: Ab.J5,
                                            children: null != s ? s.name : j.intl.string(j.t["He+cmd"]),
                                        }),
                                        (0, E.jsxs)("div", {
                                            className: Ab.xp,
                                            children: [
                                                (0, E.jsx)(ei.E, {
                                                    variant: "text-sm/normal",
                                                    className: Ab.KR,
                                                    children: i.name,
                                                }),
                                                x
                                                    ? (0, E.jsx)(sd.Lp, { text: j.intl.string(j.t["7uFZGt"]) })
                                                    : C
                                                      ? (0, E.jsx)(sd.Lp, {
                                                            text: j.intl.string(j.t["6anton"]),
                                                            color: es.A.unsafe_rawColors.BRAND_500.css,
                                                        })
                                                      : p
                                                        ? (0, E.jsx)(tr.m, {
                                                              text: j.intl.string(j.t.eSuJE2),
                                                              children: (0, E.jsx)("div", {
                                                                  children: (0, E.jsx)(sd.Lp, {
                                                                      className: Ab.qc,
                                                                      text: j.intl.string(j.t.NrRwIl),
                                                                      color: es.A.unsafe_rawColors.YELLOW_300.css,
                                                                  }),
                                                              }),
                                                          })
                                                        : null,
                                                h
                                                    ? (0, E.jsx)(tr.m, {
                                                          text: j.intl.string(j.t.nv1IqK),
                                                          children: (0, E.jsx)("div", {
                                                              children: (0, E.jsx)(sd.Lp, {
                                                                  text: j.intl.string(j.t["sBl3X/"]),
                                                                  color: es.A.colors.BACKGROUND_MOD_MUTED.css,
                                                              }),
                                                          }),
                                                      })
                                                    : null,
                                            ],
                                        }),
                                    ],
                                }),
                                (0, E.jsx)(et.D, {
                                    onClick: n(r),
                                    "aria-label": j.intl.string(j.t.e5eQOy),
                                    "aria-controls": c,
                                    "aria-expanded": l,
                                    focusProps: { ringTarget: t },
                                    children: (0, E.jsx)(en.a, {
                                        size: "md",
                                        color: "currentColor",
                                        className: e6()(Ab.D6, { [Ab.S7]: l }),
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
                              (0, E.jsx)("div", { className: Ab.yF }),
                              (0, E.jsx)(Ap.A, { groupListingId: n.id, subscription: t, className: Ab.kE }),
                              (0, E.jsxs)("div", {
                                  className: Ab.Zx,
                                  children: [
                                      (0, E.jsx)(Av, { label: I, value: _ }),
                                      (0, E.jsx)(Av, {
                                          label: j.intl.string(j.t.dltUMH),
                                          value: f,
                                          showInfoIcon: C,
                                          infoIconTooltipText: C ? j.intl.string(j.t["/q6fpa"]) : void 0,
                                      }),
                                      (0, E.jsx)(Av, { label: j.intl.string(j.t.AOcwWB), value: N }),
                                  ],
                              }),
                              (0, E.jsx)(At.h, { size: 16 }),
                              !x &&
                                  !h &&
                                  (0, E.jsx)(sw.D, {
                                      label: j.intl.string(j.t.wmMFvA),
                                      children: (0, E.jsx)(Ay, { subscription: t }),
                                  }),
                              !b &&
                                  (0, E.jsx)(Aj, {
                                      isTrial: C,
                                      isCancelled: x,
                                      isResubscribing: o,
                                      shouldHideRoleSubscriptionEntryPoints: A,
                                      onCancelSubscriptionClick: () => {
                                          if (null != s) {
                                              var e;
                                              (e = { groupListing: n, listing: i, subscription: t }),
                                                  (0, Y.openModal)((t) => (0, E.jsx)(A_, { ...t, ...e }));
                                          }
                                      },
                                      onChangePlanClick: () => {
                                          null != s &&
                                              ((0, sF.pX)(eA.BVt.CHANNEL(s.id, AC.VV.ROLE_SUBSCRIPTIONS)),
                                              (0, sv.default)(),
                                              Ad.A.show(
                                                  eA.kqX.BACK_TO_PREVIOUS_SCREEN,
                                                  void 0,
                                                  j.intl.string(j.t.DvbaM4),
                                                  () => {
                                                      AE.A.setState({ subsection: nk.nR }),
                                                          (0, eH.openUserSettings)(u.X.SUBSCRIPTIONS_PANEL);
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
var AR = i(170272);
let AL = (e) => {
    let { onGoBack: t } = e,
        i = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, g.bG)([Aa.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [Aa.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                i = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (i = !0);
                            }),
                            i)
                                ? Ao.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? Ao.M_.NONE
                                  : Ao.M_.IN_SUBSCRIPTION_SERVER;
                        })([Aa.A]),
                    ) === Ao.M_.SUBSCRIBED,
                i = (0, g.bG)([dH.A], () => dH.A.getActiveGuildSubscriptions()),
                n = S.useRef(!1);
            return (
                S.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: i, hasRoleSubscriptions: n } = e,
                            s = dH.A.getActiveGuildSubscriptions();
                        return (
                            ((s?.length ?? 0) === 0 && !!n) || (!!t && !i) || (!i && !dH.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: n.current }) &&
                        ((n.current = !0), dA.hP());
                }, [e, t]),
                i ?? Au
            );
        })(),
        { loading: n } = (0, Ar.eb)(i);
    return ((0, Al.A)(df.Fr ? "role-subscriptions-user-setting" : void 0), n)
        ? (0, E.jsx)(du.y, {})
        : 0 === i.length
          ? null
          : (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(eG.$, { text: j.intl.string(j.t.hqyhKQ), icon: As.z, variant: "secondary", onClick: t }),
                    (0, E.jsx)(At.h, { size: 10 }),
                    (0, E.jsx)(i_.n, {
                        label: j.intl.string(j.t["KzCF/6"]),
                        description: j.intl.string(j.t["Y+ucR7"]),
                        children: (0, E.jsx)("div", {
                            className: AR.A,
                            children: i.map((e) => (0, E.jsx)(AO, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var AD = i(327479),
    AP = i(334335);
function AG(e) {
    let { onClickManageSubscription: t, count: i } = e;
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsx)(eP.D, { variant: "heading-md/bold", children: j.intl.string(j.t["48ywCu"]) }),
            (0, E.jsx)(At.h, { size: 4 }),
            (0, E.jsx)(ei.E, { variant: "text-md/normal", className: AP.yV, children: j.intl.string(j.t.VWxmSo) }),
            (0, E.jsx)(At.h, { size: 24 }),
            (0, E.jsxs)("div", {
                className: AP.Nr,
                children: [
                    (0, E.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: AP._e }),
                    (0, E.jsxs)("div", {
                        className: AP.FS,
                        children: [
                            (0, E.jsx)(eP.D, {
                                variant: "heading-xl/semibold",
                                className: AP.wx,
                                children: j.intl.string(j.t["48ywCu"]),
                            }),
                            (0, E.jsx)(ei.E, {
                                variant: "text-md/normal",
                                className: AP.h_,
                                children: j.intl.format(j.t["/esXLj"], { numSubscriptions: i }),
                            }),
                        ],
                    }),
                    (0, E.jsx)(AD.A, { onClick: t, text: j.intl.string(j.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var AM = i(548411),
    AU = i(417098),
    AV = i(143582),
    Ak = i(915043),
    Aw = i(920087);
function AF(e) {
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
        className: e6()(Aw.iE, t),
        children: [
            (0, E.jsx)("div", { className: e6()(Aw.wx, n), children: i }),
            l && (0, E.jsx)("div", { className: Aw.Qs, children: s }),
        ],
    });
}
var AB = i(885996),
    Az = i(144165),
    AX = i(664121),
    AY = i(950305),
    AH = i(943775),
    AK = i(123791),
    AW = i(900797),
    AZ = i(632510);
let Aq = S.createContext({ isOpen: !1, toggleOpen: () => {} });
function AQ(e) {
    let { children: t } = e,
        [i, n] = S.useReducer((e) => !e, !1),
        s = S.useMemo(() => ({ isOpen: i, toggleOpen: n }), [i]);
    return (0, E.jsx)(Aq.Provider, { value: s, children: t(i) });
}
AQ.Toggle = function (e) {
    let { className: t, text: i } = e,
        { isOpen: n, toggleOpen: s } = S.useContext(Aq),
        l = n ? AW.t : en.a,
        r = null != i ? i : n ? j.intl.string(j.t.fgq1gs) : j.intl.string(j.t.XJuakA);
    return (0, E.jsxs)(et.D, {
        className: e6()(AZ.L, t),
        onClick: s,
        children: [
            (0, E.jsx)(ei.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, E.jsx)(l, { size: "sm", color: "currentColor" }),
        ],
    });
};
var AJ = i(243217),
    A$ = i(328968),
    A0 = i(163437),
    A1 = i(3432);
function A2(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var A3 = i(184451),
    A6 = (((s = {})[(s.LOADING = 0)] = "LOADING"), (s[(s.DONE = 1)] = "DONE"), (s[(s.ERROR = 2)] = "ERROR"), s);
function A4(e) {
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
        } = (0, g.cf)([cO.A, cR.A, A$.A, ed.A], () => {
            let e,
                i = cO.A.get(r),
                n = null != i ? cR.A.get(i.skuId) : void 0,
                a = n?.applicationId,
                o = null != i ? A$.A.getForSKU(i.skuId) : null,
                u = null != o && (0, A0.PJ)(o.skuFlags),
                d = u && null != s ? ed.A.getGuild(s) : void 0,
                c = (0, A0.Uo)(t, n),
                g = u && null != s && null == d;
            if (!1 === c && null != l && l.items.length > 0) {
                let t = l.items[0];
                e = cO.A.get(t.planId) ?? void 0;
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
        f = S.useMemo(() => (null != p ? (0, AH.A)(p, 100) : null), [p]),
        N = m?.deleted ?? !1,
        _ = null != m && (0, A0.Se)(m),
        I = t.status === eA.Dmq.PAST_DUE,
        { analyticsLocations: C } = (0, nW.Ay)(),
        [b] = (0, AA.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: C,
            analyticsLocation: e1.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        v = A2(t.currentPeriodEnd),
        y = 0 === n;
    return (0, E.jsxs)(AF, {
        headerClassName: A3.dL,
        header:
            !1 === y
                ? (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsxs)("div", {
                              className: A3.VW,
                              children: [
                                  null != f &&
                                      (0, E.jsx)(Az._, { src: f.href, imageClassName: A3.Z2, width: 40, height: 40 }),
                                  (0, E.jsxs)("div", {
                                      className: A3.aF,
                                      children: [
                                          (0, E.jsx)(eP.D, {
                                              variant: "heading-md/semibold",
                                              lineClamp: 1,
                                              children: p?.name ?? j.intl.string(j.t["7kqy7W"]),
                                          }),
                                          (0, E.jsx)(ei.E, {
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
                              className: A3.Pz,
                              children:
                                  null != p &&
                                  null != u &&
                                  null != m &&
                                  (0, E.jsx)(he, {
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
                : (0, E.jsx)(du.y, { type: du.t.PULSING_ELLIPSIS }),
        children: [
            A &&
                (0, E.jsx)(A9, {
                    type: "warning",
                    title: _
                        ? j.intl.formatToPlainString(j.t.QOnM1y, { subscriptionPeriodEnd: v })
                        : j.intl.formatToPlainString(j.t.HOaZu8, { subscriptionPeriodEnd: v }),
                }),
            !A && h && (0, E.jsx)(A9, { type: "warning", title: j.intl.string(j.t.SmSP8Q) }),
            I && (0, E.jsx)(A9, { type: "danger", title: j.intl.string(j.t.fvOqBo) }),
            (0, E.jsxs)("div", {
                className: A3.zH,
                children: [
                    (0, E.jsx)(A5, {
                        title: j.intl.string(j.t["5D/KEH"]),
                        content: d
                            ? (0, E.jsxs)(E.Fragment, {
                                  children: [
                                      (0, E.jsxs)("span", {
                                          className: A3.yW,
                                          children: [(0, E.jsx)(AX.R, { size: "xs" }), j.intl.string(j.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, E.jsxs)("span", {
                                              className: A3._t,
                                              children: [
                                                  (0, E.jsx)(ei.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: j.intl.format(j.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, E.jsx)(gZ.Ay, { guild: c, size: gZ.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, E.jsxs)("span", {
                                  className: A3.yW,
                                  children: [(0, E.jsx)(AY.n, { size: "xs" }), j.intl.string(j.t["6anEVv"])],
                              }),
                    }),
                    (0, E.jsx)(A7, { invoicePreview: b, subscriptionPlan: o }),
                    (0, E.jsx)(A5, {
                        title: j.intl.string(j.t.dnUzb6),
                        content: A2(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, E.jsx)(A8, { isCancelled: A, subscriptionPeriodEnd: v, renewalPlan: x }),
                ],
            }),
            (0, E.jsx)(hi, {
                subscription: t,
                currentInvoicePreview: b,
                loadingState: n,
                isDeleted: N,
                isCancelled: A,
            }),
            null != p &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, E.jsx)(ht, { appId: p.id, listingBenefits: u.benefits }),
        ],
    });
}
function A7(e) {
    let { subscriptionPlan: t, invoicePreview: i } = e;
    if (null == t) return (0, E.jsx)(A5, { title: j.intl.string(j.t.KI7ERx), content: "" });
    let n = (0, dT.CE)((0, dT.$g)(t.price, t.currency), t.interval, t.intervalCount),
        s = i?.findInvoiceItemByPlanId(t.id);
    if (null == s) return (0, E.jsx)(A5, { title: j.intl.string(j.t.KI7ERx), content: n });
    let l = (0, dT.CE)((0, dT.$g)(s.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, E.jsx)(A5, {
        title: j.intl.string(j.t.KI7ERx),
        content: (0, E.jsxs)(E.Fragment, {
            children: [
                (0, E.jsx)(ei.E, { variant: "text-sm/semibold", children: l }),
                l !== n &&
                    (0, E.jsx)(tr.m, {
                        text: j.intl.format(j.t["6DoE57"], { listPrice: n }),
                        position: "bottom",
                        children: (0, E.jsx)(ei.E, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: (0, E.jsx)("s", { children: n }),
                        }),
                    }),
            ],
        }),
    });
}
function A8(e) {
    let { isCancelled: t, subscriptionPeriodEnd: i, renewalPlan: n } = e;
    if (null != n) {
        let e = (0, dT.CE)((0, dT.$g)(n.price, n.currency), n.interval, n.intervalCount);
        return (0, E.jsx)(A5, {
            title: j.intl.string(j.t.hIhAM3),
            content: (0, E.jsxs)(E.Fragment, {
                children: [
                    (0, E.jsx)(ei.E, { variant: "text-sm/medium", children: i }),
                    (0, E.jsx)(ei.E, {
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
        className: A3.nM,
        children: [
            (0, E.jsx)(ei.E, { variant: "text-sm/medium", children: t }),
            (0, E.jsx)(ei.E, { variant: "text-sm/medium", className: A3.u4, children: i }),
        ],
    });
}
function A9(e) {
    let { type: t, title: i } = e;
    return (0, E.jsx)(tf.p, {
        messageType: "warning" === t ? tf.Y.WARNING : tf.Y.ERROR,
        className: A3.Xm,
        children: (0, E.jsx)(ei.E, { variant: "text-sm/normal", children: i }),
    });
}
function he(e) {
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
        c = (0, A0.Se)(s),
        { analyticsLocations: m } = (0, nW.Ay)(),
        [A, h] = S.useState(!1),
        T = (0, AK.C)(t.id),
        x = (0, g.bG)([cR.A], () => cR.A.getParentSKU(n.skuId), [n.skuId]),
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
                let { subscription: e } = await (0, dA.QP)(l, m);
                if (null == e) return;
                (0, Y.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([i.e("47869"), i.e("52396")]).then(i.bind(i, 115623));
                    return (i) => (0, E.jsx)(t, { ...i, storeListing: n, subscription: AJ.A.createFromServer(e) });
                });
            } finally {
                h(!1);
            }
        };
    return (0, E.jsxs)("div", {
        className: A3.fw,
        children: [
            c || (r && a)
                ? null
                : r
                  ? (0, E.jsx)(eG.$, {
                        variant: "secondary",
                        size: "sm",
                        text: j.intl.string(j.t.QtMnkW),
                        onClick: N,
                        loading: A,
                    })
                  : (0, E.jsx)(eG.$, {
                        variant: "secondary",
                        size: "sm",
                        text: j.intl.string(j.t["E8G/tr"]),
                        onClick: () => {
                            (0, Y.openModalLazy)(async () => {
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
                (0, E.jsx)(eG.$, {
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
function ht(e) {
    let { appId: t, listingBenefits: i } = e;
    return (0, E.jsx)(AQ, {
        children: (e) =>
            (0, E.jsxs)("div", {
                className: A3.PX,
                children: [
                    (0, E.jsxs)("div", {
                        className: A3.wV,
                        children: [
                            e && (0, E.jsx)(ei.E, { variant: "text-sm/semibold", children: j.intl.string(j.t.mORL67) }),
                            (0, E.jsx)(AQ.Toggle, {
                                className: A3.Bh,
                                text: e ? j.intl.string(j.t.gsbFAw) : j.intl.string(j.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? i.map((e) => {
                              let { id: i, name: n, description: s, icon: l } = e;
                              return (0, E.jsx)(AB.FY, { header: n, icon: (0, A1.N)(t, l), description: s }, i);
                          })
                        : null,
                ],
            }),
    });
}
function hi(e) {
    let { subscription: t, currentInvoicePreview: i, loadingState: n, isDeleted: s, isCancelled: l } = e;
    return null == i
        ? null
        : 0 === n
          ? (0, E.jsx)("div", {
                className: A3.Ji,
                children: (0, E.jsx)(sw.D, {
                    label: j.intl.string(j.t.azZaZa),
                    children: (0, E.jsx)(du.y, { type: du.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === n
            ? (0, E.jsx)("div", {
                  className: A3.Ji,
                  children: (0, E.jsxs)(AU.$T, {
                      color: AU.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          j.intl.format(j.t.IIHUUF, { subscriptionId: t.id }),
                          (0, E.jsx)("br", {}),
                          j.intl.format(j.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, E.jsx)("div", {
                  className: A3.Ji,
                  children: (0, E.jsx)(sw.D, {
                      label: j.intl.string(j.t.azZaZa),
                      children: (0, E.jsx)(Ah.A, { subscription: t, currentInvoicePreview: i, disabled: s || l }),
                  }),
              });
}
var hn = (((l = {}).HOME = "HOME"), (l.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), l);
i(938796);
var hs = i(38405);
let hl = (0, g.UT)(cO.A, {
    getQueryId: eA.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = cO.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && hs.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, gr.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var hr = i(240248),
    ha = i(237218),
    ho = i(988325);
function hu(e) {
    let { children: t, lineClamp: i = 2, ...n } = e,
        [s, l] = S.useState(!1),
        [r, a] = S.useState(null),
        o =
            null != r &&
            (0, E.jsx)("button", {
                className: ho.x6,
                onClick: () => l((e) => !e),
                children: (0, E.jsxs)(ei.E, {
                    className: ho.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        s ? j.intl.string(j.t["JQX/Pb"]) : j.intl.string(j.t.Fbrd8J),
                        s
                            ? (0, E.jsx)(AW.t, { color: es.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, E.jsx)(en.a, { color: es.A.colors.TEXT_BRAND, size: "xs" }),
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
                (0, E.jsx)(ei.E, {
                    ...n,
                    className: ho.Qs,
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
var hd = i(827991);
function hc(e) {
    let { cta: t, storeListing: i, className: n } = e,
        { applicationId: s, benefits: l, description: r } = i,
        a = S.useMemo(() => (null == i.thumbnail ? null : (0, ha.t)(s, i.thumbnail, 256)), [s, i.thumbnail]),
        { data: o } = hl(i.skuId),
        u = S.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, dT._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, E.jsxs)(AF, {
              className: e6()(hd.iE, n),
              header: (0, E.jsxs)(E.Fragment, {
                  children: [
                      (0, E.jsxs)("div", {
                          className: hd.qd,
                          children: [
                              null != a &&
                                  (0, E.jsx)(Az._, { src: a.href, imageClassName: hd.rW, width: 48, height: 48 }),
                              (0, E.jsxs)("div", {
                                  children: [
                                      (0, E.jsx)(eP.D, { variant: "heading-md/bold", children: i.summary }),
                                      (0, E.jsx)(ei.E, { variant: "text-md/medium", children: u }),
                                  ],
                              }),
                          ],
                      }),
                      t,
                  ],
              }),
              children: [
                  !(0, hr.uJ)(r) &&
                      (0, E.jsx)("div", {
                          className: hd.h_,
                          children: (0, E.jsx)(hu, { variant: "text-sm/medium", children: r }),
                      }),
                  null != l &&
                      l.length > 0 &&
                      (0, E.jsx)("div", {
                          className: hd.PX,
                          children: l.map((e) => {
                              let { id: t, name: i, description: n, icon: l } = e;
                              return (0, E.jsx)(AB.FY, { header: i, icon: (0, A1.N)(s, l), description: n }, t);
                          }),
                      }),
              ],
          });
}
var hg = i(185438),
    hm = i(386011);
function hA(e) {
    let {
            app: t,
            currentSubscription: i,
            currentListing: n,
            alternativeListings: s,
            navigateToHome: l,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, AH.A)(t, 100),
        u = (0, A0.PJ)(r.flags),
        d = u ? AX.R : AY.n,
        c = u ? j.intl.string(j.t["46YF2D"]) : j.intl.string(j.t.fFyGiA),
        m = i.metadata?.application_subscription_guild_id,
        A = (0, g.bG)([ed.A], () => (u && null != m ? ed.A.getGuild(m) : void 0), [m, u]),
        h = (0, g.bG)([cR.A], () => {
            if (null != a) return cR.A.get(a);
        }, [a]),
        S = A2(i.currentPeriodEnd);
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsxs)("div", {
                className: hm.wx,
                children: [
                    null != o && (0, E.jsx)(Az._, { src: o.href, imageClassName: hm.Z2, width: 48, height: 48 }),
                    (0, E.jsxs)("div", {
                        children: [
                            (0, E.jsx)(eP.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, E.jsxs)("div", {
                                className: hm.p4,
                                children: [
                                    (0, E.jsxs)(eP.D, {
                                        variant: "heading-md/normal",
                                        className: hm.N4,
                                        children: [(0, E.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != A &&
                                        (0, E.jsxs)(E.Fragment, {
                                            children: [
                                                (0, E.jsx)(ei.E, { variant: "text-md/normal", children: "\u2022" }),
                                                (0, E.jsxs)("span", {
                                                    className: hm.vP,
                                                    children: [
                                                        (0, E.jsx)(gZ.Ay, { guild: A, size: gZ.Ay.Sizes.SMOL }),
                                                        (0, E.jsx)(eP.D, {
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
            (0, E.jsx)(AQ, {
                children: (e) =>
                    (0, E.jsxs)("div", {
                        className: hm._B,
                        children: [
                            (0, E.jsx)(ei.E, { variant: "text-md/normal", children: j.intl.string(j.t["goe+hk"]) }),
                            e &&
                                (0, E.jsxs)(E.Fragment, {
                                    children: [
                                        (0, E.jsx)(ei.E, {
                                            variant: "text-md/normal",
                                            children: j.intl.format(j.t["Q8qJ+5"], {}),
                                        }),
                                        (0, E.jsx)(ei.E, {
                                            variant: "text-md/normal",
                                            children: j.intl.format(j.t.sqowYz, {}),
                                        }),
                                    ],
                                }),
                            (0, E.jsx)(AQ.Toggle, {
                                text: e ? j.intl.string(j.t["1Rkq/E"]) : j.intl.string(j.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, E.jsxs)("div", {
                className: hm.x0,
                children: [
                    (0, E.jsx)(hc, {
                        storeListing: n,
                        className: hm.o3,
                        cta: (0, E.jsxs)("div", {
                            className: hm.cJ,
                            children: [
                                (0, E.jsx)(ei.E, {
                                    variant: "eyebrow",
                                    color: "text-brand",
                                    children: j.intl.string(j.t.fHIpOY),
                                }),
                                null != h &&
                                    (0, E.jsx)(ei.E, {
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
                                  hc,
                                  {
                                      storeListing: e,
                                      cta: (0, E.jsx)(ei.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-subtle",
                                          children: j.intl.format(j.t.nn88hB, { startDate: S }),
                                      }),
                                  },
                                  e.id,
                              )
                            : (0, E.jsx)(hh, { storeListing: e, guildId: m, navigateToHome: l }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function hh(e) {
    let { storeListing: t, guildId: i, navigateToHome: n } = e,
        { openModal: s } = (0, hg.A)({
            analyticsLocation: eA.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: i,
            disableGuildSelector: !0,
            onComplete: n,
        });
    return (0, E.jsx)(hc, {
        storeListing: t,
        cta: (0, E.jsx)(eG.$, { variant: "primary", size: "sm", text: j.intl.string(j.t["+KwmBt"]), onClick: s }),
    });
}
class hE extends S.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, E.jsxs)(AU.$T, {
                  color: AU.Hv.DANGER,
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
function hS(e) {
    let { subscriptions: t, updateHeader: i } = e,
        [n, s] = S.useState({ route: hn.HOME }),
        { route: l } = n,
        r = () => {
            s({ route: hn.HOME });
        },
        a = (e) => {
            s({ route: hn.SWITCH_APP_PLANS, ...e }), i(j.intl.string(j.t.VFqtkP), r);
        },
        [o, u] = S.useState({});
    S.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: A6.LOADING })),
                (0, AV._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: A6.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: A6.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, Ak.E)(),
        c = d !== Ak.mJ.LOADED;
    switch (l) {
        case hn.HOME:
            return (0, E.jsx)(E.Fragment, {
                children: t.map((e) =>
                    (0, E.jsx)(
                        hE,
                        {
                            subscription: e,
                            children: (0, E.jsx)(A4, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? A6.LOADING : (o[e.id] ?? A6.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case hn.SWITCH_APP_PLANS:
            let { route: g, ...m } = n;
            return (0, E.jsx)(hA, { ...m, navigateToHome: r });
        default:
            (0, N.xb)(l);
    }
}
var hT = i(470464);
function hx(e) {
    let { onGoBack: t } = e,
        i = (0, g.yK)(
            [dH.A],
            () =>
                dH.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [n, s] = S.useState();
    return (
        null == n && (n = (0, E.jsx)(hp, { onBack: t, title: j.intl.string(j.t["DB/m9a"]) })),
        (0, E.jsxs)("div", {
            children: [
                n,
                (0, E.jsx)("div", {
                    className: hT.A,
                    children: (0, E.jsx)(hS, {
                        subscriptions: i,
                        updateHeader: (e, t) => {
                            s(
                                (0, E.jsx)(hp, {
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
function hp(e) {
    let { onBack: t, title: i } = e;
    return (0, E.jsxs)("div", {
        className: hT.D,
        children: [
            (0, E.jsx)(lR.K, {
                "aria-label": j.intl.string(j.t["13/7kX"]),
                icon: () => (0, E.jsx)(AM.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, E.jsx)(eP.D, { variant: "heading-lg/semibold", children: i }),
        ],
    });
}
var hf = i(366999),
    hN = i(466919),
    h_ = i(441924);
function hI(e) {
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
        ? ((t = j.intl.string(hN.default["/S02sx"])), (i = j.intl.string(hN.default.OPJNST)))
        : n
          ? ((t = j.intl.string(j.t["hT6i/0"])),
            (i = null != a ? j.intl.format(j.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = j.intl.string(j.t["3G0CTC"])),
            (i = r === sL.xc.FP_SUB_PAUSED ? j.intl.format(j.t.MMvaIG, { resumeDate: l.toDate() }) : null));
    let u = e6()({ [h_.Hs]: n, [h_.mT]: !n }),
        d = e6()({ [h_.CQ]: n, [h_.ZM]: !n }),
        c = e6()({ [h_.EM]: !n });
    return (0, E.jsxs)("div", {
        className: h_.r6,
        children: [
            (0, E.jsxs)("div", {
                className: h_.Nv,
                children: [
                    (0, E.jsx)(eP.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== i && (0, E.jsx)(ei.E, { variant: "text-sm/normal", children: i }),
                ],
            }),
            !o &&
                (0, E.jsx)("div", {
                    className: h_.ZS,
                    children: (0, E.jsx)("div", {
                        className: u,
                        children: (0, E.jsx)(ei.E, { variant: "text-sm/semibold", className: d, children: s }),
                    }),
                }),
        ],
    });
}
let hC = function (e) {
    let { fractionalPremiumInfo: t, className: i, activationDate: n, hasPremiumGroup: s } = e,
        l = (0, ua.kX)(t),
        r = l.length > 0,
        a = (0, hf.Ay)(t.endsAt, hf.yE.SHORT_TIME),
        o = r ? l : a;
    return (0, E.jsx)("div", {
        children: (0, E.jsxs)("div", {
            className: e6()(i, h_.f8),
            children: [
                (0, E.jsx)("div", {
                    className: h_.J_,
                    children: (0, E.jsxs)("div", {
                        className: h_.Bh,
                        children: [
                            (0, E.jsx)("div", {
                                className: h_.xt,
                                children: (0, E.jsx)(o5.t, { size: "md", color: "white", className: h_.T8 }),
                            }),
                            (0, E.jsx)("div", {
                                className: h_.pt,
                                children: (0, E.jsx)(eP.D, {
                                    variant: "heading-md/semibold",
                                    children: j.intl.string(j.t.DFMPWS),
                                }),
                            }),
                            (0, E.jsx)(ei.E, {
                                className: h_.PJ,
                                variant: "text-md/semibold",
                                children: l.length > 0 ? l : j.intl.string(j.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, E.jsx)(hI, {
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
var hb = i(868942);
function hv(e) {
    let t,
        {
            user: i,
            planId: n,
            count: s,
            userPremiumSubscription: l,
            unconsumedFractionalPremiumUnits: r = [],
            hasPremiumGroup: a,
        } = e,
        [o, u] = (0, g.yK)([cO.A], () => [cO.A.get(n), null != l ? cO.A.get(l.planId) : null]);
    if (null == o || ua.Ay.getInterval(n).intervalType !== sL.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        c = o.skuId === d,
        m = ua.Ay.getDisplayName(n);
    if (a) t = j.intl.string(hN.default["5asczk"]);
    else if (c && null != l) {
        let e;
        e = new Date(l.status === eA.Dmq.PAUSED && null != l.pauseEndsAt ? l.pauseEndsAt : l.currentPeriodEnd);
        let i = (0, ua._e)(e, r);
        t = j.intl.formatToPlainString(j.t["5CNRRA"], { date: i ?? 0 });
    } else t = j.intl.formatToPlainString(j.t.eNXZ5O, { planName: m });
    let A = i.hasFreePremium() || (null != l && l.isPurchasedExternally);
    return (0, E.jsxs)("div", {
        className: h_.Bh,
        children: [
            (0, E.jsx)("div", {
                className: e6()({
                    [h_.sr]: o.skuId === sL.pe.TIER_0,
                    [h_.lP]: o.skuId === sL.pe.TIER_1,
                    [h_.eb]: o.skuId === sL.pe.TIER_2,
                }),
                children: (0, E.jsx)(o5.t, { size: "md", color: "currentColor", className: h_.Kk }),
            }),
            (0, E.jsxs)("div", {
                className: h_.pt,
                children: [
                    (0, E.jsx)(eP.D, {
                        variant: "heading-md/semibold",
                        children: j.intl.format(j.t.LzobT9, { planName: m }),
                    }),
                    !A &&
                        (0, E.jsx)(eP.D, {
                            className: h_.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, E.jsx)(ei.E, {
                className: h_.PJ,
                variant: "text-md/semibold",
                children: j.intl.format(j.t["ess/xl"], { count: s }),
            }),
        ],
    });
}
let hy = function (e) {
    let { className: t, entitlements: i } = e,
        n = eZ()(Array.from(i))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: i, consumed: n } = e;
                return null != t && null != i && !n;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        s = (0, g.yK)([cx.A], () => cx.A.getUnactivatedFractionalPremiumUnits()),
        l = (0, g.bG)([dH.A], () => dH.A.getPremiumSubscription()),
        r = (0, g.bG)([dH.A], () => null == dH.A.getPremiumTypeSubscription()),
        a = Object.keys(n).some((e) => e === sL.gD.PREMIUM_MONTH_TIER_1),
        o = (0, g.bG)([io.default], () => io.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsx)("div", {
                className: e6()(t, h_.xF, h_.J_),
                children: Object.keys(n).map((e) =>
                    (0, E.jsx)(
                        hv,
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
                        (0, E.jsx)(ei.E, {
                            className: h_.eT,
                            variant: "text-md/normal",
                            children: j.intl.string(j.t["VNr4+O"]),
                        }),
                        (0, E.jsx)(hb.i, {}),
                    ],
                }),
        ],
    });
};
var hj = i(50919);
function hO(e) {
    let t,
        { subscription: i, withOverheadSeparator: n } = e,
        { analyticsLocations: s } = (0, nW.Ay)(),
        [l] = (0, AA.YV)({
            subscriptionId: i.id,
            renewal: !0,
            analyticsLocations: s,
            analyticsLocation: e1.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == l) return null;
    let r = n ? hj.r : hj.a,
        a = l.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, ua.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = cO.A.get(o);
    tz()(null != u, "Missing plan");
    let d = (0, dT.$g)(l.total, l.currency);
    return (
        u.interval === sL.WT.YEAR
            ? (t = j.intl.format(j.t["jPz/39"], {
                  price: d,
                  termsUrl: eA.X7G.TERMS,
                  paidURL: eA.X7G.PAID_TERMS,
                  privacyUrl: eA.X7G.PRIVACY,
              }))
            : u.interval === sL.WT.MONTH &&
              (t =
                  1 === u.intervalCount
                      ? j.intl.format(j.t.m27GpI, {
                            price: d,
                            termsUrl: eA.X7G.TERMS,
                            paidURL: eA.X7G.PAID_TERMS,
                            privacyUrl: eA.X7G.PRIVACY,
                        })
                      : j.intl.format(j.t["9xf5Vx"], {
                            price: d,
                            termsUrl: eA.X7G.TERMS,
                            paidURL: eA.X7G.PAID_TERMS,
                            privacyUrl: eA.X7G.PRIVACY,
                            intervalCount: u.intervalCount,
                        })),
        (0, E.jsx)(ei.E, { color: "text-muted", className: r, variant: "text-xs/normal", children: t })
    );
}
function hR(e) {
    let { subscription: t, withOverheadSeparator: i } = e;
    return t.status === eA.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, E.jsx)(hO, { subscription: t, withOverheadSeparator: i });
}
var hL = i(735912),
    hD = i(558808);
let hP = { [nk.nR]: "role_subscriptions_panel", [nk.PZ]: "application_subscriptions_panel" };
function hG() {
    return (0, E.jsx)(eb.Z, {
        className: hD.wb,
        type: eb.Z.Types.CUSTOM,
        children: (0, E.jsxs)(lW.A, {
            align: lW.A.Align.CENTER,
            children: [
                (0, E.jsx)(p.A, { game: null, size: p.M.SMALL, className: hD.pV }),
                (0, E.jsx)("span", { className: hD.O, children: j.intl.string(j.t["jy/hyj"]) }),
            ],
        }),
    });
}
function hM(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, m9._)(e, t));
}
function hU() {
    let e = (0, g.bG)([cx.A], () => cx.A.getForApplication(sL.tv), [], hM);
    return (
        S.useEffect(() => {
            (0, cF.LM)(sL.tv);
        }, []),
        (0, E.jsx)(i_.n, {
            label: j.intl.string(j.t["2GKrvn"]),
            description: j.intl.string(j.t.kNEjGm),
            children:
                null != e && ua.Ay.hasAccountCredit(e)
                    ? (0, E.jsx)(hy, { className: hD.fX, entitlements: e })
                    : (0, E.jsx)(hG, {}),
        })
    );
}
function hV() {
    return (0, E.jsx)("hr", { className: hD.hr });
}
let hk = function () {
        var e;
        let t = (0, g.bG)([dH.A], () => dH.A.getPremiumTypeSubscription()),
            i = (0, Ae.A)({ subscriptionFilter: (e) => hL.Hy.has(e.status) }),
            n = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
            s = i.length > 1,
            l = (0, g.bG)(
                [dY.A],
                () => (null != t && null != t.paymentSourceId ? dY.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, g.bG)([dH.A], () => dH.A.hasFetchedSubscriptions()),
            a = (0, g.bG)([dS.A], () => dS.A.isBusy),
            o = (0, ga.Y)(),
            d = AE.A.useField("subsection");
        S.useEffect(() => {
            (0, rL._)(null != d ? hP[d] : u.X.SUBSCRIPTIONS_PANEL);
        }, [d]);
        let c = (0, g.bG)([dH.A], () => dH.A.getActiveApplicationSubscriptions()?.length ?? 0),
            m = (0, g.bG)(
                [dH.A],
                () =>
                    Object.values(dH.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === eA.rzx.GUILD)
                        .filter((e) => e.status !== eA.Dmq.ENDED).length,
            ),
            A = (0, gd.A)({ forceFetch: !0 }),
            h = (0, cH.ds)(),
            T = null !== t ? t.currentPeriodEnd : void 0,
            x =
                !(h && !(A.unactivatedUnits.length > 0)) &&
                (A.fractionalState !== sL.xc.NONE || A.unactivatedUnits.length > 0);
        return (S.useEffect(
            () => (
                sr.h.wait(() => {
                    (0, gr.zS)(), dA.hP(), (0, gl.CD)(), dA.$o();
                }),
                function () {
                    AE.A.resetState();
                }
            ),
            [],
        ),
        eF.A.enabled)
            ? (0, E.jsx)(dl.A, {})
            : r && o
              ? d === nk.nR
                  ? (0, E.jsx)(AL, { onGoBack: () => AE.A.setState({ subsection: null }) })
                  : d === nk.PZ
                    ? (0, E.jsx)(hx, { onGoBack: () => AE.A.setState({ subsection: null }) })
                    : (0, E.jsx)("div", {
                          className: hD.kL,
                          children: (0, E.jsxs)("div", {
                              className: hD.Qs,
                              children: [
                                  s ? (0, E.jsx)(hL.Sb, {}) : null,
                                  null != t
                                      ? (0, E.jsx)(hL.Ay, {
                                            subscription: t,
                                            paymentSource: l,
                                            busy: a,
                                            subscriptions: i,
                                        })
                                      : (0, E.jsx)(hL.TC, {}),
                                  x &&
                                      ((e = !!n?.isPremiumWithPremiumGroup()),
                                      (0, E.jsxs)("section", {
                                          children: [
                                              (0, E.jsx)(eP.D, {
                                                  variant: "heading-md/bold",
                                                  className: hD.HL,
                                                  children: j.intl.string(j.t.Obre8v),
                                              }),
                                              (0, E.jsx)(ei.E, {
                                                  variant: "text-md/normal",
                                                  className: hD.JU,
                                                  children: j.intl.format(j.t["7Zi06b"], {
                                                      helpCenterLink: tN.A.getArticleURL(
                                                          eA.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, E.jsx)(hC, {
                                                  className: hD.fX,
                                                  fractionalPremiumInfo: A,
                                                  activationDate: T,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, E.jsx)(hU, {}),
                                  m > 0 &&
                                      (0, E.jsxs)(E.Fragment, {
                                          children: [
                                              (0, E.jsx)(hV, {}),
                                              (0, E.jsx)(An, {
                                                  count: m,
                                                  onClickManageSubscription: () => AE.A.setState({ subsection: nk.nR }),
                                              }),
                                          ],
                                      }),
                                  c > 0 &&
                                      (0, E.jsxs)(E.Fragment, {
                                          children: [
                                              (0, E.jsx)(hV, {}),
                                              (0, E.jsx)(AG, {
                                                  count: c,
                                                  onClickManageSubscription: () => {
                                                      AE.A.setState({ subsection: nk.PZ }),
                                                          eo.default.track(
                                                              eA.HAw
                                                                  .PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                          );
                                                  },
                                              }),
                                          ],
                                      }),
                                  (0, E.jsx)(hV, {}),
                                  null != t ? (0, E.jsx)(hR, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, E.jsx)("div", { className: e6()(hD.kL, hD.Lq), children: (0, E.jsx)(du.y, {}) });
    },
    hw = (0, a.E2)(u.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [j.intl.string(j.t.trSpHX), j.intl.string(j.t["2GKrvn"])],
        Component: () => (0, E.jsx)(hk, {}),
    }),
    hF = (0, a.zZ)(u.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [j.intl.string(j.t.trSpHX), j.intl.string(j.t["2GKrvn"])],
        buildLayout: () => [hw],
    }),
    hB = (0, a.t_)(u.X.SUBSCRIPTIONS_PANEL, { useTitle: () => j.intl.string(j.t.trSpHX), buildLayout: () => [hF] }),
    hz = (0, a.i4)(u.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.trSpHX),
        icon: m8.L,
        usePersistentBadge: function () {
            return S.useMemo(
                () => ({
                    badgeType: h.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    useCustomBadge: () =>
                        (0, m5.l)() ? (0, E.jsx)(lU.E, { size: "xs", color: es.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [],
            );
        },
        buildLayout: () => [hB],
    }),
    hX = (0, a.WI)(u.X.BILLING_SECTION, {
        useTitle: () => j.intl.string(j.t.oeUm2s),
        buildLayout: () => [gn, m7, hz, c4, d3],
    });
var hY = i(540999),
    hH = i(306471),
    hK = i(964355),
    hW = i(172272);
let hZ = (0, a.zD)(u.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, g.bG)([ol.default], () => ol.default.isAxeEnabled),
        setValue: (e) => (0, os.x)({ axeEnabled: e }),
    }),
    hq = (0, a.zD)(u.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, g.bG)([ol.default], () => ol.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, os.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var hQ = i(276086),
    hJ = i(354328);
let h$ = (0, a.zD)(u.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, hJ.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, hQ.L)("highlight_mana_components", e);
        },
    }),
    h0 = (0, a.zD)(u.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, hJ.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, hQ.L)("highlight_void_toggleables", e);
        },
    }),
    h1 = (0, a.sN)(u.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, g.bG)([ol.default], () => ol.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: hW.YR,
        markers: Array.from({ length: hW.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => hW.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            hW.Or.getState().setHorizontalSpacing(e);
        },
    }),
    h2 = (0, a.zD)(u.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, g.bG)([ol.default], () => ol.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, os.x)({ layoutDebuggingEnabled: e });
        },
    }),
    h3 = (0, a.sN)(u.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, g.bG)([ol.default], () => ol.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: hW.YR,
        markers: Array.from({ length: hW.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => hW.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            hW.Or.getState().setVerticalSpacing(e);
        },
    }),
    h6 = (0, a.zZ)(u.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [hq, h2, h1, h3, h$, h0, hZ],
    }),
    h4 = (0, a.zD)(u.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => L.HZ.useSetting(),
        setValue: (e) => {
            L.HZ.updateSetting(e);
        },
    });
var h7 = i(173936),
    h8 = i(260598),
    h5 = i(148810),
    h9 = i(380610),
    Ee = i(986238),
    Et = i(727201),
    Ei = i(274446);
let En = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    Es = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function El(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class Er extends S.Component {
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
        return (0, E.jsxs)(lW.A, {
            direction: lW.A.Direction.VERTICAL,
            className: e6()(Et.oS, iU.SX, Ei.N, Et.nM),
            children: [
                (0, E.jsx)(iO.A, {
                    className: e6()(Et.lL, { [Et.zi]: n }),
                    onClick: n ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, E.jsxs)(lW.A, {
                    className: iU.QB,
                    children: [
                        (0, E.jsx)(lW.A.Child, {
                            basis: "50%",
                            children: (0, E.jsx)(lO.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: Es,
                                onSelectionChange: this.handleOverrideTypeChanged,
                                value: t,
                                disabled: n,
                            }),
                        }),
                        (0, E.jsx)(lW.A.Child, {
                            wrap: !0,
                            basis: "50%",
                            children: (0, E.jsx)(lX.k, {
                                label: "branch" === t ? "Branch Name" : "Commit SHA",
                                value: i,
                                onChange: this.handleOverrideIdChanged,
                                disabled: n,
                            }),
                        }),
                    ],
                }),
                (0, E.jsxs)(lW.A.Child, {
                    children: [
                        null != s &&
                            "" !== s &&
                            (0, E.jsx)(ei.E, {
                                className: Et.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: s,
                            }),
                        (0, E.jsxs)(ei.E, {
                            variant: "text-sm/normal",
                            className: Et.AS,
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
class Ea extends S.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, h9.bD)();
        this.setState({ loading: !1, buildOverrides: e, loadedBuildOverrides: eZ().cloneDeep(e), errors: {} });
    }
    isDirty() {
        let { buildOverrides: e, loadedBuildOverrides: t } = this.state;
        return !eZ().isEqual(e, t);
    }
    componentDidMount() {
        this.refreshBuildOverrides();
    }
    getAvailableProjects() {
        let { buildOverrides: e } = this.state;
        if (null == e) return [];
        let t = Object.keys(e);
        return eZ().without(En, ...t);
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
        this.setState({ buildOverrides: eZ().cloneDeep(this.state.loadedBuildOverrides), errors: {}, didSave: !1 });
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
                loadedBuildOverrides: eZ().cloneDeep(e),
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
        (0, Y.openModal)((t) => (0, E.jsx)(Eo, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, E.jsx)(iN.pp, {
            theme: iC.A.theme,
            className: e6()(iU.eT, iU.SX),
            children: (0, E.jsx)(iN.SG, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: i } = this.state;
        return null == e
            ? null
            : eZ().map(e, (e, n) =>
                  (0, E.jsx)(
                      Er,
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
            : (0, E.jsx)(eG.$, { variant: "secondary", text: "Reload App", onClick: () => location.reload() });
    }
    renderLinkButton() {
        let { buildOverrides: e } = this.state;
        return null == e || 0 === Object.keys(e).length
            ? null
            : (0, E.jsx)(tr.m, {
                  text: "Generate Public Link",
                  children: (0, E.jsx)(lR.K, {
                      variant: "secondary",
                      icon: h7.q,
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
                (0, E.jsx)(eG.$, {
                    variant: "critical-primary",
                    text: "Discard Changes",
                    onClick: this.handleDiscardChanges,
                    disabled: e,
                }),
                (0, E.jsx)(eG.$, {
                    variant: "primary",
                    text: "Save Build Overrides",
                    disabled: El(t ?? {}),
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
            ? (0, E.jsx)(du.y, { className: iU.QX })
            : null != n && 0 === Object.keys(n).length
              ? this.renderEmpty()
              : this.renderItems();
        let s = !i && !t && this.getAvailableProjects().length > 0,
            l =
                El(n ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, E.jsx)(ei.E, {
                          color: "text-feedback-critical",
                          variant: "text-md/normal",
                          children:
                              "Mobile build overrides must be generated using the desktop/web stable client for now!",
                      })
                    : null;
        return (0, E.jsx)(i_.n, {
            children: (0, E.jsxs)(Z.B, {
                gap: 16,
                children: [
                    (0, E.jsx)(lO.l, {
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
                    (0, E.jsxs)(a$.e, {
                        justify: "end",
                        children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                    }),
                ],
            }),
        });
    }
}
class Eo extends S.Component {
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
        e.key === iL.dh.ENTER && this.handleAddAllowedVersion();
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
        return El(this.props.buildOverrides ?? {});
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
            d = Ee.fL.find((t) => t.value === e),
            c = s.map((e) => ({ id: e, label: e, value: e }));
        return (0, E.jsxs)(Z.B, {
            gap: 20,
            children: [
                (0, E.jsx)(lO.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: Ee.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, E.jsx)(lO.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: Ee.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, E.jsxs)(Z.B, {
                          gap: 20,
                          children: [
                              (0, E.jsx)(lX.k, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: l,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: r,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: { icon: ao.j, onClick: this.handleAddAllowedVersion, "aria-label": "Add" },
                              }),
                              (0, E.jsx)(lO.l, {
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
                    : (0, E.jsx)(h8.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: i,
                          error: n,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                (0, E.jsx)(h8.f, {
                    label: "Client Experiment Override",
                    description:
                        "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.",
                    value: o,
                    error: u,
                    onChange: this.handleExperiments,
                    placeholder: '{"2022-01_threads":1}',
                }),
                (0, E.jsx)(q.d, { label: "Allow logged out users", checked: a, onChange: this.handleAllowLoggedOut }),
            ],
        });
    }
    renderHelpMessage() {
        let { statusText: e, status: t } = this.state;
        if (null == e) return (0, E.jsx)("div", {});
        let i = tf.Y.INFO;
        switch (t) {
            case 0:
                i = tf.Y.ERROR;
                break;
            case 1:
                i = tf.Y.WARNING;
        }
        return (0, E.jsx)(tf.p, { messageType: i, children: e });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props,
            { publicLink: i } = this.state;
        return (0, E.jsx)(lz.Modal, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, E.jsx)(cm.A, { value: i }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let Eu = (0, a.E2)(u.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: Ea });
var Ed = i(256311),
    Ec = i(883600);
let Eg = (0, a.E2)(u.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, g.bG)([Ec.A], () => Ec.A.overrideId()),
            t = async (e) => {
                let t = Ec.A.getChangelog(e, "en-US");
                return null != t ? t : ((await Ed.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
            };
        return (0, E.jsx)(Ev, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => Ed.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var Em = i(506774);
let EA = new Date("2018-01-01"),
    Eh = (0, a.Tf)(u.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => L.pK.useSetting() === dp.default.fromTimestamp(EA.getTime()),
        onClick: () => (Em.w.set("lastChangeLogDate", EA), L.pK.updateSetting(dp.default.fromTimestamp(EA.getTime()))),
    }),
    EE = (0, a.zD)(u.X.DISABLE_APP_COLLECTIONS_CACHE, {
        useTitle: () => "Disable Application Collections Cache",
        useSubtitle: () => "Forces application collection updates to be shown immediately.",
        useDisabled: () => (0, g.bG)([ol.default], () => ol.default.onlyShowPreviewAppCollections),
        useValue: () =>
            (0, g.bG)(
                [ol.default],
                () => ol.default.disableAppCollectionsCache || ol.default.onlyShowPreviewAppCollections,
            ),
        setValue: (e) => (0, os.x)({ disableAppCollectionsCache: e }),
    }),
    ES = (0, a.zD)(u.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, g.bG)([ol.default], () => ol.default.isForcedCanary),
        setValue: (e) => {
            (0, os.x)({ canary: e });
        },
    }),
    ET = (0, a.zD)(u.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, g.bG)([ol.default], () => ol.default.sourceMapsEnabled),
        setValue: (e) => (0, os.x)({ sourceMapsEnabled: e }),
    }),
    Ex = (0, a.zD)(u.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, g.bG)([ol.default], () => ol.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, os.x)({ onlyShowPreviewAppCollections: e }),
    });
var Ep = i(10094),
    Ef = i(683760);
let EN = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: sL.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: sL.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: sL.PremiumTypes.TIER_2 },
    ],
    E_ = (0, a.Hn)(u.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => EN,
        clearable: !0,
        useValue: () =>
            (0, g.bG)([Ef.A], () => {
                let e = Ef.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, Ep.O)(null, void 0)
                : null === e
                  ? (0, Ep.O)(void 0, void 0)
                  : (0, Ep.O)(0 === e ? null : e, void 0);
        },
    });
var EI = i(246605),
    EC = i(274184);
let Eb = (0, a.E2)(u.X.SURVEY_OVERRIDE, {
    useSearchTerms: () => ["survey override"],
    Component: function () {
        let e = (0, g.bG)([EC.Ay], () => EC.Ay.getSurveyOverride());
        return (0, E.jsx)(Ev, {
            label: "Survey Override",
            description: "Provide a survey ID to override the survey shown to this user.",
            placeholder: "Enter Survey ID...",
            overrideId: e ?? null,
            setOverride: (e) => EI.xr(e),
            fetchOverride: (e) => EI.BC(e, !0) ?? null,
        });
    },
});
function Ev(e) {
    let { label: t, description: i, placeholder: n, overrideId: s, setOverride: l, fetchOverride: r } = e,
        [a, o] = S.useState(s ?? ""),
        u = S.useRef(null),
        [d, c] = S.useState(0),
        g = () => {
            null != u.current && (clearTimeout(u.current), (u.current = null));
        };
    return (
        S.useEffect(() => g, []),
        (0, E.jsx)(sw.D, {
            layout: "horizontal-responsive",
            label: t,
            description: i,
            children: (0, E.jsx)(lX.k, {
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
let Ey = (0, a.zZ)(u.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [E_, Eb, Eg, Eh, ES, h4, Ex, EE, ET, Eu],
        useInlineNotice: () => ({
            type: h.lT.INLINE_NOTICE,
            noticeType: "info",
            useText: () => j.intl.format(j.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    Ej = (0, a.zD)(u.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, g.bG)([ol.default], () => ol.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, os.x)({ logAnalyticsEvents: e }),
    }),
    EO = (0, a.zD)(u.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, g.bG)([ol.default], () => ol.default.isLoggingGatewayEvents),
        setValue: (e) => (0, os.x)({ logGatewayEvents: e }),
    }),
    ER = (0, a.zD)(u.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, g.bG)([ol.default], () => ol.default.preventPopoutClose),
        setValue: (e) => (0, os.x)({ preventPopoutClose: e }),
    }),
    EL = (0, a.zD)(u.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, g.bG)([ol.default], () => ol.default.logKeyboardMismatches),
        setValue: (e) => (0, os.x)({ logKeyboardMismatches: e }),
    }),
    ED = (0, a.zD)(u.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, g.bG)([ol.default], () => ol.default.isLoggingOverlayEvents),
        setValue: (e) => (0, os.x)({ logOverlayEvents: e }),
    }),
    EP = (0, a.zD)(u.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, g.bG)([ol.default], () => ol.default.isLoggingQuestEvents),
        setValue: (e) => (0, os.x)({ logQuestEvents: e }),
    }),
    EG = (0, a.zD)(u.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, g.bG)([ol.default], () => ol.default.isTracingRequests),
        setValue: (e) => (0, os.x)({ trace: e }),
    }),
    EM = (0, a.zZ)(u.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [EO, ED, EG, Ej, EL, ER, EP] }),
    EU = (0, a.t_)(u.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [Ey, EM, h6],
    }),
    EV = (0, a.i4)(u.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: hH.V,
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
                } = (0, g.cf)([ol.default, hY.A, io.default], () => ({
                    layoutDebuggingEnabled: ol.default.layoutDebuggingEnabled,
                    isDeveloper: hY.A.isDeveloper,
                    isLoggingGatewayEvents: ol.default.isLoggingGatewayEvents,
                    isLoggingOverlayEvents: ol.default.isLoggingOverlayEvents,
                    isLoggingAnalyticsEvents: ol.default.isLoggingAnalyticsEvents,
                    isTracingRequests: ol.default.isTracingRequests,
                    isForcedCanary: ol.default.isForcedCanary,
                    isSourceMapsEnabled: ol.default.sourceMapsEnabled,
                    isAxeEnabled: ol.default.isAxeEnabled,
                    preventPopoutClose: ol.default.preventPopoutClose,
                    onlyShowPreviewAppCollections: ol.default.onlyShowPreviewAppCollections,
                    disableAppCollectionsCache: ol.default.disableAppCollectionsCache,
                    isStaff: io.default.getCurrentUser()?.isStaff() ?? !1,
                })),
                { horizontalSpacing: A, verticalSpacing: h } = (0, hW.Or)(),
                { setHorizontalSpacing: S, setVerticalSpacing: T } = hW.Or.getState(),
                x = L.HZ.useSetting();
            return t
                ? [
                      (0, E.jsxs)(
                          ee.Dr,
                          {
                              id: "overrides",
                              label: "Overrides",
                              action: () => {
                                  (0, eH.openUserSettings)(u.X.DEV_OVERRIDES);
                              },
                              children: [
                                  (0, E.jsx)(
                                      ee.sL,
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
                                      ee.sL,
                                      {
                                          id: "forced-canary",
                                          label: "Forced Canary",
                                          checked: r,
                                          action: () => {
                                              (0, os.x)({ canary: !r });
                                          },
                                      },
                                      "forced-canary",
                                  ),
                                  (0, E.jsx)(
                                      ee.sL,
                                      {
                                          id: "preview-collections",
                                          label: "Preview Unpublished Collections",
                                          checked: d,
                                          action: () => {
                                              (0, os.x)({ onlyShowPreviewAppCollections: !d });
                                          },
                                      },
                                      "preview-collections",
                                  ),
                                  (0, E.jsx)(
                                      ee.sL,
                                      {
                                          id: "disable-collections-cache",
                                          label: "Disable Collections Cache",
                                          checked: c,
                                          action: () => {
                                              (0, os.x)({ disableAppCollectionsCache: !c });
                                          },
                                      },
                                      "disable-collections-cache",
                                  ),
                              ],
                          },
                          "overrides",
                      ),
                      (0, E.jsxs)(
                          ee.Dr,
                          {
                              id: "logging",
                              label: "Logging",
                              action: () => {
                                  (0, eH.openUserSettings)(u.X.LOGGING);
                              },
                              children: [
                                  (0, E.jsx)(
                                      ee.sL,
                                      {
                                          id: "gateway-events",
                                          label: "Gateway Events",
                                          checked: i,
                                          action: () => {
                                              (0, os.x)({ logGatewayEvents: !i });
                                          },
                                      },
                                      "gateway-events",
                                  ),
                                  (0, E.jsx)(
                                      ee.sL,
                                      {
                                          id: "overlay-events",
                                          label: "Overlay RPC Events",
                                          checked: n,
                                          action: () => {
                                              (0, os.x)({ logOverlayEvents: !n });
                                          },
                                      },
                                      "overlay-events",
                                  ),
                                  (0, E.jsx)(
                                      ee.sL,
                                      {
                                          id: "analytics-events",
                                          label: "Analytics Events",
                                          checked: s,
                                          action: () => {
                                              (0, os.x)({ logAnalyticsEvents: !s });
                                          },
                                      },
                                      "analytics-events",
                                  ),
                                  (0, E.jsx)(
                                      ee.sL,
                                      {
                                          id: "tracing-requests",
                                          label: "Tracing Requests",
                                          checked: l,
                                          action: () => {
                                              (0, os.x)({ trace: !l });
                                          },
                                      },
                                      "tracing-requests",
                                  ),
                                  (0, E.jsx)(
                                      ee.sL,
                                      {
                                          id: "prevent-popout-close",
                                          label: "Prevent Popouts From Closing",
                                          checked: o,
                                          action: () => {
                                              (0, os.x)({ preventPopoutClose: !o });
                                          },
                                      },
                                      "prevent-popout-close",
                                  ),
                              ],
                          },
                          "logging",
                      ),
                      (0, E.jsxs)(
                          ee.Dr,
                          {
                              id: "design-tools",
                              label: "Design/A11y Tools",
                              action: () => {
                                  (0, eH.openUserSettings)(u.X.DESIGN_TOOLS);
                              },
                              children: [
                                  (0, E.jsx)(
                                      ee.sL,
                                      {
                                          id: "accessibility-auditing",
                                          label: "Accessibility Auditing",
                                          checked: a,
                                          action: () => {
                                              (0, os.x)({ axeEnabled: !a });
                                          },
                                      },
                                      "accessibility-auditing",
                                  ),
                                  (0, E.jsx)(
                                      ee.sL,
                                      {
                                          id: "layout-debugging",
                                          label: "Enable Layout Debugging",
                                          checked: e,
                                          action: () => {
                                              (0, os.x)({ layoutDebuggingEnabled: !e });
                                          },
                                      },
                                      "layout-debugging",
                                  ),
                                  e &&
                                      (0, E.jsxs)(E.Fragment, {
                                          children: [
                                              (0, E.jsx)(
                                                  ee.aK,
                                                  {
                                                      id: "horizontal-spacing",
                                                      label: "Horizontal Spacing",
                                                      control: (e, t) =>
                                                          (0, E.jsx)(hK.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: A,
                                                              minValue: 0,
                                                              maxValue: hW.YR,
                                                              onChange: (e) => S(e),
                                                              renderValue: (e) => `${Math.round(e)}px`,
                                                              "aria-label": "Horizontal Spacing",
                                                          }),
                                                  },
                                                  "horizontal-spacing",
                                              ),
                                              (0, E.jsx)(
                                                  ee.aK,
                                                  {
                                                      id: "vertical-spacing",
                                                      label: "Vertical Spacing",
                                                      control: (e, t) =>
                                                          (0, E.jsx)(hK.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: h,
                                                              minValue: 0,
                                                              maxValue: hW.YR,
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
                                ee.Dr,
                                { id: "discord-stats", label: "Discord Stats", action: () => aY() },
                                "discord-stats",
                            )
                          : null,
                  ]
                : null;
        },
        buildLayout: () => [EU],
    });
var Ek = i(127062),
    Ew = i(25044),
    EF = i(80703),
    EB = i(691540),
    Ez = i(857250),
    EX = i(97483),
    EY = i(100392),
    EH = i(102609),
    EK = i(271478),
    EW = i(736056),
    EZ = i(386976),
    Eq = i(257433),
    EQ = i(32523),
    EJ = i(96919),
    E$ = i(688151),
    E0 = i(636566);
function E1(e) {
    let { experiment: t, experimentId: i, overrideInfo: n, defaultOpen: s } = e,
        [l, r] = S.useState(s),
        [a, o] = S.useState(!1),
        u = S.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, g.bG)([cy.default], () => cy.default.getId()),
        c = (0, g.bG)([cy.default], () => {
            let e = cy.default.getInstallationForTracking();
            return null == e ? null : (0, EF.v)(e);
        }),
        m = "installation" === t.kind && null != c ? c : d,
        A = (0, Eq.iN)(t, m),
        h = (0, Eq.Fm)(t, m),
        T = (0, g.yK)([EW.A], () =>
            eZ()
                .sortBy(EW.A.getRecentExposures(E$.Vh.USER, i), (e) => {
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
                (0, cD.C)((0, EY.yA)(i), () => {
                    (0, EB.P0)({
                        id: "experiment-link-copied",
                        message: "Copied experiment link",
                        type: EX.Ck.SUCCESS,
                    }),
                        e.preventDefault(),
                        e.stopPropagation();
                });
            },
            [i],
        ),
        p = (0, E.jsx)(e4.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, E.jsxs)(ei.E, {
                variant: "text-md/medium",
                className: E0.DD,
                children: [
                    (0, E.jsxs)("div", {
                        children: [
                            (0, E.jsxs)(Z.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    t.title,
                                    " ",
                                    cD.p5 &&
                                        (0, E.jsx)(et.D, { onClick: x, children: (0, E.jsx)(h7.q, { size: "xs" }) }),
                                ],
                            }),
                            (0, E.jsx)(ei.E, { color: "text-muted", variant: "text-sm/normal", children: i }),
                        ],
                    }),
                    (0, E.jsx)("span", {
                        className: E0.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!l) return (0, E.jsx)("div", { className: E0.Os, children: p });
    let f = "";
    return (
        (f =
            t.system === EH.l5.LEGACY
                ? `Currently assigned to bucket ${A ?? E$.RE.NOT_ELIGIBLE}`
                : null != A
                  ? `Currently assigned to variant ${A}`
                  : "Currently unassigned"),
        (0, E.jsxs)("div", {
            className: E0.Os,
            children: [
                p,
                (0, E.jsx)("div", {
                    children: (0, E.jsx)(EK.g, {
                        label: t.system === EH.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: f,
                        experiment: t,
                        experimentId: i,
                        overrideInfo: n,
                    }),
                }),
                (0, E.jsx)("div", {
                    className: E0.h_,
                    children:
                        null == h
                            ? (0, E.jsx)(ei.E, {
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
                              (0, E.jsx)(ei.E, {
                                  variant: "text-lg/medium",
                                  className: E0.id,
                                  children: "Server Descriptor",
                              }),
                              (0, E.jsx)(ei.E, {
                                  variant: "code",
                                  className: E0.AS,
                                  children: null == h ? "None" : JSON.stringify(h, void 0, 2),
                              }),
                              (0, E.jsx)(ei.E, {
                                  variant: "text-lg/medium",
                                  className: E0.id,
                                  children: "Override Descriptor",
                              }),
                              (0, E.jsx)(ei.E, {
                                  variant: "code",
                                  className: E0.AS,
                                  children:
                                      n?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(n.originalDescriptor, void 0, 2),
                              }),
                              (0, E.jsx)(ei.E, {
                                  variant: "text-lg/medium",
                                  className: E0.id,
                                  children: "Recent Exposures",
                              }),
                              (0, E.jsx)(ei.E, {
                                  variant: "code",
                                  className: E0.AS,
                                  children: 0 === T.length ? "None" : T.join("\n"),
                              }),
                          ],
                      })
                    : (0, E.jsx)("div", {
                          className: E0.id,
                          children: (0, E.jsx)(el.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, E.jsx)(eM.c, { className: E0.yF }),
            ],
        })
    );
}
function E2(e) {
    let { experiment: t, experimentId: i, overrideInfo: n } = e,
        [s, l] = S.useState(null != n),
        [r, a] = S.useState(!1),
        o = S.useCallback(() => {
            l((e) => !e);
        }, []),
        u = (0, g.bG)([EW.A], () => EW.A.getLoadedGuildExperiment(i)),
        d = (0, g.yK)([EW.A], () =>
            eZ()
                .sortBy(EW.A.getRecentExposures(E$.Vh.GUILD, i), (e) => {
                    let [t, i] = e;
                    return -i;
                })
                .map((e) => {
                    let [t, i] = e;
                    return `${new Date(i).toLocaleString()} (${t})`;
                }),
        ),
        [c, m] = (0, g.yK)([ed.A, EW.A], () => {
            let e = eZ().sortBy(ed.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                t = {},
                n = [];
            for (let s of e) {
                let e = EW.A.getGuildExperimentDescriptor(i, s.id),
                    l = e?.bucket ?? E$.RE.NOT_ELIGIBLE;
                l in t || (t[l] = 0), t[l]++, n.push(`${s.name}: ${l}`);
            }
            let s = eZ()(t)
                .keys()
                .map(Number)
                .sort()
                .map((e) => `${t[e]} guilds in bucket ${e}`)
                .join(", ");
            return [n.join("\n"), s];
        }),
        A = (0, E.jsx)(et.D, {
            onClick: o,
            children: (0, E.jsxs)(ei.E, {
                variant: "text-md/medium",
                className: E0.DD,
                children: [
                    (0, E.jsxs)("div", {
                        children: [
                            (0, E.jsx)("span", { children: t.title }),
                            (0, E.jsx)(ei.E, { color: "text-muted", variant: "text-sm/normal", children: i }),
                        ],
                    }),
                    (0, E.jsx)("span", { className: E0.km, children: "Guild" }),
                ],
            }),
        });
    return s
        ? (0, E.jsxs)("div", {
              className: E0.Os,
              children: [
                  A,
                  (0, E.jsx)(EK.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${m}`,
                      experiment: t,
                      experimentId: i,
                      overrideInfo: n,
                  }),
                  (0, E.jsx)("div", {
                      className: E0.h_,
                      children:
                          null == u
                              ? (0, E.jsx)(ei.E, {
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
                                (0, E.jsx)(ei.E, {
                                    variant: "text-lg/medium",
                                    className: E0.id,
                                    children: "Guild Assignments",
                                }),
                                (0, E.jsx)(ei.E, { variant: "code", className: E0.AS, children: c }),
                                (0, E.jsx)(ei.E, {
                                    variant: "text-lg/medium",
                                    className: E0.id,
                                    children: "Server Descriptor",
                                }),
                                (0, E.jsx)(ei.E, {
                                    variant: "code",
                                    className: E0.AS,
                                    children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                }),
                                (0, E.jsx)(ei.E, {
                                    variant: "text-lg/medium",
                                    className: E0.id,
                                    children: "Override Descriptor",
                                }),
                                (0, E.jsx)(ei.E, {
                                    variant: "code",
                                    className: E0.AS,
                                    children:
                                        n?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(n.originalDescriptor, void 0, 2),
                                }),
                                (0, E.jsx)(ei.E, {
                                    variant: "text-lg/medium",
                                    className: E0.id,
                                    children: "Recent Exposures",
                                }),
                                (0, E.jsx)(ei.E, {
                                    variant: "code",
                                    className: E0.AS,
                                    children: 0 === d.length ? "None" : d.join("\n"),
                                }),
                            ],
                        })
                      : (0, E.jsx)("div", {
                            className: E0.id,
                            children: (0, E.jsx)(el.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, E.jsx)(eM.c, { className: E0.yF }),
              ],
          })
        : (0, E.jsx)("div", { className: E0.Os, children: A });
}
let E3 = (0, a.E2)(u.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, EZ.op)(),
                { experiments: i, overridesInfo: n } = (0, EQ.hI)(),
                s = S.useMemo(() => ({ ...i, ...e }), [i, e]),
                l = S.useMemo(() => ({ ...n, ...t }), [n, t]),
                r = (0, g.bG)([cy.default], () => {
                    let e = cy.default.getInstallationForTracking();
                    return null == e ? null : (0, EF.v)(e);
                }),
                [a, o] = S.useState(""),
                u = (0, EJ.oC)((0, EJ.R3)((0, EJ.Fm)(s), l), a);
            return (0, E.jsxs)("div", {
                "data-mtctest-ignore": "true",
                children: [
                    null != r &&
                        (0, E.jsxs)(Z.B, {
                            style: { gap: 8, marginBottom: 16 },
                            children: [
                                (0, E.jsxs)(ei.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: ["Installation ID: ", r],
                                }),
                                cD.p5 &&
                                    (0, E.jsx)(el.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, cD.C)(r, () => {
                                                (0, EB.P0)((0, Ez.o)("Installation ID copied!", EX.Ck.SUCCESS));
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, E.jsx)(Q.I, { placeholder: "Search experiments", query: a, onChange: o, onClear: () => o("") }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? E2 : E1;
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
                              className: E0.p$,
                              children: (0, E.jsx)(eP.D, {
                                  variant: "heading-md/semibold",
                                  children: "No Experiments Found",
                              }),
                          }),
                ],
            });
        },
        useSearchTerms: () => ["Experiments", "Bucket Override", "Variant Override"],
    }),
    E6 = (0, a.zZ)(u.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [E3] }),
    E4 = (0, a.t_)(u.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [E6] }),
    E7 = (0, a.i4)(u.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: Ek.c,
        useMenu: Ew.A,
        buildLayout: () => [E4],
    }),
    E8 = (0, a.WI)(u.X.DEVELOPER_SECTION, {
        useTitle: () => j.intl.string(j.t["+gHUHA"]),
        usePredicate: () => hY.A.isDeveloper,
        buildLayout: () => [E7, EV],
    });
var E5 = i(824552),
    E9 = i(370997);
let Se = (0, a.E2)(u.X.AUTHORIZED_APPS_LIST_SETTING, {
    Component: E9.Ay,
    useSearchTerms: () => [j.intl.string(j.t["f6kk+r"])],
});
var St = i(187322),
    Si = i(77468),
    Sn = i(289498),
    Ss = i(573648),
    Sl = i(941314),
    Sr = i(874490),
    Sa = i(370480),
    So = i(968309);
let Su = new Set([eA.fg2.XBOX, eA.fg2.PLAYSTATION, eA.fg2.PLAYSTATION_STAGING, eA.fg2.CRUNCHYROLL]);
var Sd = i(169869),
    Sc = i(235693),
    Sg = i(757036),
    Sm = i(555837),
    SA = i(241524),
    Sh = i(346017),
    SE = i(212739),
    SS = i(30370),
    ST = i(968671),
    Sx = i(674567),
    Sp = i(237146),
    Sf = i(594387),
    SN = i(34934);
function S_() {
    let e,
        t,
        n,
        s,
        l,
        { variant: r, showFooter: a } =
            ((e = (0, Sx.V)()),
            (t = (0, ST.GM)("connectedAccountsBannerFooter")),
            (n = (0, SE.O)()),
            (l = null != (s = (0, g.bG)([SS.A], () => SS.A.getAccount(null, eA.fg2.XBOX))) && !s.revoked),
            e === Sx.s.NONE || e === Sx.s.FREE_FRACTIONAL_NITRO || (e === Sx.s.NON_NITRO && n)
                ? { variant: Sx.s.NONE, showFooter: !1 }
                : { variant: e, showFooter: t && e === Sx.s.NON_NITRO && !l }),
        { analyticsLocations: o } = (0, nW.Ay)(e1.A.XBOX_CONNECTED_ACCOUNTS_BANNER),
        u = (0, Sh.yW)(o),
        d = (0, SA.A)("(max-width: 485px)");
    if (r === Sx.s.NONE) return null;
    let c = d ? "md" : "sm",
        m = "",
        A = null;
    switch (r) {
        case Sx.s.NITRO:
            (m = j.intl.string(Sp.default["+QAvQz"])),
                (A = (0, E.jsx)(eG.$, {
                    variant: "overlay-primary",
                    size: c,
                    fullWidth: d,
                    text: j.intl.string(Sp.default.CubeLC),
                    onClick: () => {
                        (0, Y.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([i.e("16848"), i.e("77632")]).then(
                                i.bind(i, 836291),
                            );
                            return (t) => (0, E.jsx)(e, { ...t, sourceAnalyticsLocations: o });
                        });
                    },
                }));
            break;
        case Sx.s.NON_NITRO:
        case Sx.s.FREE_FRACTIONAL_NITRO:
            (m = j.intl.string(Sp.default.NwkRTZ)),
                (A = (0, E.jsx)(sb.A, {
                    defaultTextOverride: j.intl.string(Sp.default["0vY+ie"]),
                    variantOverride: "overlay-primary",
                    size: c,
                    fullWidth: d,
                    subscriptionTier: sL.pe.TIER_2,
                }));
            break;
        default:
            (0, N.xb)(r);
    }
    return (0, E.jsxs)(nW.f5, {
        value: o,
        children: [
            (0, E.jsxs)("div", {
                className: SN.bV,
                children: [
                    (0, E.jsx)(eP.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: j.intl.string(j.t.NG1e6l),
                    }),
                    (0, E.jsx)(o5.t, { size: "xs", color: "var(--icon-default)" }),
                ],
            }),
            (0, E.jsx)(it.N, {
                theme: "dark",
                children: (e) =>
                    (0, E.jsx)("div", {
                        className: e,
                        children: (0, E.jsxs)("div", {
                            className: SN.Nr,
                            children: [
                                (0, E.jsxs)("div", {
                                    className: SN.Tp,
                                    children: [
                                        (0, E.jsx)("div", {
                                            className: SN.Qw,
                                            style: {
                                                backgroundImage: `url(${a ? "https://cdn.discordapp.com/assets/content/1858990b1e56c7d51e887008753104d4663d06c0e0e296d8fe0ea85c7e3e8341.png" : "https://cdn.discordapp.com/assets/content/7308e937fbd3074b9de0ebba1fa3571fa7b10a2b88f384b382f711bae99f40e6.png"})`,
                                            },
                                        }),
                                        (0, E.jsx)("div", { className: SN.$h }),
                                        (0, E.jsx)("div", { className: SN.Rv }),
                                        (0, E.jsx)("div", { className: SN.Lw }),
                                    ],
                                }),
                                (0, E.jsxs)("div", {
                                    className: SN.Mn,
                                    children: [
                                        (0, E.jsxs)("div", {
                                            className: SN.mY,
                                            children: [
                                                (0, E.jsx)("img", {
                                                    className: SN.wm,
                                                    src: "https://cdn.discordapp.com/assets/content/c5fab2b5d1155c4c9bc088b07f8563b6db8d2d08666357486efc5aea6e97fbea.png",
                                                    alt: "Xbox Game Pass",
                                                }),
                                                (0, E.jsx)(ei.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: SN.DD,
                                                    children: m,
                                                }),
                                            ],
                                        }),
                                        (0, E.jsx)("div", { className: SN.lO, children: A }),
                                    ],
                                }),
                                a &&
                                    (0, E.jsxs)(E.Fragment, {
                                        children: [
                                            (0, E.jsx)("div", { className: SN.yF }),
                                            (0, E.jsxs)("div", {
                                                className: SN.sQ,
                                                children: [
                                                    (0, E.jsx)(d6.o, {
                                                        size: d ? "md" : "sm",
                                                        color: es.A.colors.ICON_STRONG,
                                                    }),
                                                    (0, E.jsx)(ei.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-default",
                                                        children: j.intl.format(Sf.default.mXY4Rb, {
                                                            onConnect: () => {
                                                                u(Sh.Hx.CONNECT),
                                                                    (0, So.A)({
                                                                        platformType: eA.fg2.XBOX,
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
var SI = i(201718),
    SC = i(321078),
    Sb = i(672130),
    Sv = i(546183),
    Sy = i(379848),
    Sj = i(96734);
let SO = (e) => {
        let { markAsDismissed: t } = e;
        return (
            S.useEffect(() => t(ig.i.UNKNOWN), [t]),
            (0, E.jsx)(sd.Lp, { className: Sj.Ad, text: j.intl.string(j.t.y2b7CA) })
        );
    },
    SR = (e) => {
        let { title: t, body: i, img: n, newIndicatorDismissibleContent: s, onClick: l } = e;
        return (0, E.jsxs)("div", {
            className: Sj.kL,
            children: [
                n,
                (0, E.jsxs)("div", {
                    className: Sj.FS,
                    children: [
                        (0, E.jsxs)("div", {
                            className: Sj.TK,
                            children: [
                                (0, E.jsx)(Sy.Ay, {
                                    contentTypes: [s],
                                    children: (e) => {
                                        let { visibleContent: t, markAsDismissed: i } = e;
                                        return t === s ? (0, E.jsx)(SO, { markAsDismissed: i }) : null;
                                    },
                                }),
                                (0, E.jsx)(ei.E, { variant: "text-md/semibold", children: t }),
                            ],
                        }),
                        (0, E.jsx)(ei.E, { variant: "text-xs/normal", children: i }),
                    ],
                }),
                (0, E.jsx)(eG.$, { text: j.intl.string(j.t.vD60Pv), onClick: l }),
            ],
        });
    },
    SL = () => {
        let e = tN.A.getArticleURL(eA.MVz.PS_CONNECTION);
        return (0, E.jsx)(SR, {
            title: j.intl.string(j.t.v20wwm),
            body: j.intl.format(j.t.lTZBit, { help_article: e }),
            img: (0, E.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
            newIndicatorDismissibleContent: eU.M.PS_ONE_WAY_RECONNECT,
            onClick: () => (0, So.A)({ platformType: eA.fg2.PLAYSTATION, location: "PS two way upsell" }),
        });
    },
    SD = "/assets/9df988a227916145.png",
    SP = () =>
        (0, E.jsx)(SR, {
            title: j.intl.string(Sf.default["9cLtDI"]),
            body: j.intl.format(Sf.default["D+kUbg"], {
                learnMoreLink: tN.A.getArticleURL(eA.MVz.XBOX_GAME_PASS_PERKS),
            }),
            img: (0, E.jsx)("img", { src: SD, width: "auto", height: "45", alt: "" }),
            newIndicatorDismissibleContent: eU.M.XBOX_PERKS_RECONNECT_UPSELL,
            onClick: () => (0, So.A)({ platformType: eA.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
        }),
    SG = () => {
        let e = tN.A.getArticleURL(eA.MVz.XBOX_CONNECTION);
        return (0, E.jsx)(SR, {
            title: j.intl.string(j.t["2okkZV"]),
            body: j.intl.format(j.t.OnERSS, { help_article: e }),
            img: (0, E.jsx)("img", { src: SD, width: "auto", height: "45", alt: "" }),
            newIndicatorDismissibleContent: eU.M.XBOX_ONE_WAY_RECONNECT,
            onClick: () => (0, So.A)({ platformType: eA.fg2.XBOX, location: "Xbox two way upsell" }),
        });
    };
var SM = i(783419),
    SU = i(534952),
    SV = i(230451),
    Sk = i(781471);
let Sw = (e) => {
    let t,
        { integration: i } = e,
        {
            isJoining: n,
            joinErrorMessage: s,
            showJoinErrorMessage: l,
        } = (0, g.cf)(
            [SS.A],
            () => ({
                isJoining: SS.A.isJoining(i.id),
                joinErrorMessage:
                    "" === SS.A.joinErrorMessage(i.id) ? j.intl.string(j.t.j2d6Km) : SS.A.joinErrorMessage(i.id),
                showJoinErrorMessage: void 0 !== SS.A.joinErrorMessage(i.id),
            }),
            [i.id],
        );
    return (
        null != (0, g.bG)([ed.A], () => ed.A.getGuild(i.guild.id), [i.guild.id]) ||
            (t = (0, E.jsx)(eG.$, {
                size: "sm",
                onClick: function () {
                    Si.A.joinServer(i.id, () => {});
                },
                disabled: n,
                variant: "primary",
                text: n ? j.intl.string(j.t.RXvQQu) : j.intl.string(j.t.XpeFYr),
            })),
        (0, E.jsxs)("div", {
            className: Sk.iA,
            children: [
                (0, E.jsxs)("div", {
                    className: Sk.XX,
                    children: [
                        (0, E.jsx)(gZ.Ay, { size: gZ.Ay.Sizes.SMALL, guild: i.guild, className: Sk.$f }),
                        (0, E.jsxs)("div", {
                            className: Sk.Vn,
                            children: [
                                (0, E.jsx)(ei.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: i.guild.name,
                                }),
                                (0, E.jsx)(u0.Anchor, {
                                    href: Ss.A.get(i.type)?.getPlatformUserUrl?.(i.account),
                                    children: (0, E.jsx)(ei.E, {
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
                    (0, E.jsx)(ei.E, {
                        variant: "text-xs/normal",
                        color: "text-feedback-critical",
                        className: Sk.R,
                        children: s,
                    }),
            ],
        })
    );
};
function SF(e) {
    var t;
    let i,
        n,
        { account: s } = e,
        l =
            ((t = s.id),
            (i = (0, Sm.G)({ location: "useShouldShowXboxPerksReconnectUpsell" })),
            (n = (0, Sg.L)(sL.PremiumTypes.TIER_2)),
            !i && !n && !/^\d+$/.test(t));
    return s.type === eA.fg2.XBOX && l
        ? (0, E.jsx)(SP, {})
        : s.twoWayLink
          ? null
          : s.type === eA.fg2.XBOX
            ? (0, E.jsx)(SG, {})
            : s.type === eA.fg2.PLAYSTATION
              ? (0, E.jsx)(SL, {})
              : null;
}
function SB(e) {
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
        R = (0, Sr.ML)(u.type),
        L = Ss.A.get(R),
        D = (0, Sl.useIsRiotSocialSDKMigrationEnabled)({ location: "User Settings Connections" });
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
            null != e && (h(e), Si.A.setVisibility(u.type, u.id, e), _(null)),
                null != t && (x(t), Si.A.setMetadataVisibility(u.type, u.id, t), C(null));
        }, [u]),
        (0, E.jsxs)("div", {
            className: Sk.FI,
            children: [
                ((t = Ss.A.get(u.type)),
                (i = Ss.A.get(R)),
                (n = "1" === (u.metadata ?? {})[SM.pK.TWITTER_VERIFIED]),
                (s = null),
                t.type === eA.fg2.TWITTER &&
                    n &&
                    (s = (0, E.jsx)(tr.m, {
                        text: j.intl.string(j.t.Jebrww),
                        children: (0, E.jsx)(tm.A, {
                            color: es.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, E.jsx)(ta.U, { size: "xs", color: es.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, E.jsxs)("div", {
                    className: Sk.Il,
                    children: [
                        (0, E.jsx)("img", {
                            alt: i.name,
                            className: Sk.gj,
                            src: (0, gN.M)(d) ? i.icon.darkSVG : i.icon.lightSVG,
                        }),
                        (0, E.jsxs)("div", {
                            children: [
                                (0, E.jsxs)("div", {
                                    className: Sk.$p,
                                    children: [
                                        (0, E.jsx)(ei.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: Sk.RW,
                                            children: u.name,
                                        }),
                                        null != s && (0, E.jsx)("div", { className: Sk.cG, children: s }),
                                    ],
                                }),
                                (0, E.jsx)(ei.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: Sk.Au,
                                    children:
                                        null != i.replacedBy && D
                                            ? j.intl.format(SV.default.Glhokn, { platformName: i.name })
                                            : i.name,
                                }),
                            ],
                        }),
                        (0, E.jsx)(et.D, {
                            className: Sk.uH,
                            onClick: function () {
                                let e = Ss.A.get(u.type);
                                (0, Y.openModal)((t) =>
                                    (0, E.jsx)(lz.Modal, {
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
                                            Su.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, E.jsx)(sm.A, {
                                                children: j.intl.format(j.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": j.intl.string(j.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, E.jsx)(gI.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, E.jsx)(SF, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        i = null,
                        n = (0, Sa.An)(t[SM.pK.CREATED_AT], c);
                    switch (e.type) {
                        case eA.fg2.REDDIT:
                            i = (0, Sd.xE)(t, Sk.Nz);
                            break;
                        case eA.fg2.STEAM:
                            i = (0, Sd.dy)(t, Sk.Nz);
                            break;
                        case eA.fg2.BLUESKY:
                        case eA.fg2.TWITTER:
                        case eA.fg2.MASTODON:
                            i = (0, Sd.ED)(t, Sk.Nz);
                            break;
                        case eA.fg2.EBAY:
                            i = (0, Sd.ub)(t, Sk.Nz);
                            break;
                        case eA.fg2.PAYPAL:
                            i = (0, Sd.gZ)(t, Sk.Nz);
                            break;
                        case eA.fg2.TIKTOK:
                            i = (0, Sd.HU)(t, Sk.Nz);
                    }
                    null !== n &&
                        (null == i && (i = []),
                        i?.push(
                            (0, E.jsx)(
                                ei.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: Sk.M4,
                                    children: j.intl.format(j.t["9rfonh"], { date: n }),
                                },
                                "member-since",
                            ),
                        ));
                    let s = y.includes(e.id),
                        l = j.intl.string(j.t.wzzjk9);
                    if (null == i || 0 === i.length)
                        if (!0 !== Ss.A.get(e.type).hasMetadata) return null;
                        else
                            (i = [
                                (0, E.jsx)(sd.Lp, { className: Sk.Z3, text: j.intl.string(j.t.y2b7CA) }, "badge"),
                                (0, E.jsx)(
                                    ei.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: Sk.vt,
                                        children: j.intl.format(j.t.Up2ni7, {
                                            helpdeskUrl: tN.A.getArticleURL(eA.MVz.CONNECTION_DETAILS),
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
                                    className: Sk.jy,
                                    children: (0, E.jsx)(eG.$, {
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
                                                      Si.A.refresh(e.type, e.id).finally(() => {
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
                        (0, E.jsx)("div", { className: Sk.tJ, children: i })
                    );
                })(u),
                (eA.txh.has(u.type) &&
                    (l = (0, E.jsx)(q.d, {
                        label: j.intl.string(j.t["+KCMSi"]),
                        checked: g,
                        onChange: function (e) {
                            m(e), Si.A.setFriendSync(u.type, u.id, e);
                        },
                    })),
                eA.ewM.has(u.type) &&
                    (r = (0, E.jsx)(q.d, {
                        label: j.intl.format(j.t["6u6J0q"], { platform: L.name }),
                        checked: p,
                        onChange: function (e) {
                            f(e), Si.A.setShowActivity(u.type, u.id, e);
                        },
                    })),
                Ss.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, E.jsx)(q.d, {
                        label: j.intl.string(j.t.FYKGsL),
                        checked: 1 === T,
                        onChange: function (e) {
                            let { verified: t } = u,
                                i = +!!e;
                            if (e && !t) {
                                C(i), (0, So.A)({ platformType: u.type, location: "User Settings" });
                                return;
                            }
                            x(i), Si.A.setMetadataVisibility(u.type, u.id, i);
                        },
                        disabled: 1 !== A || null == u.metadata,
                    })),
                (0, E.jsxs)("div", {
                    className: Sk.HZ,
                    children: [
                        (0, E.jsx)(q.d, {
                            label: j.intl.string(j.t.f7yOAX),
                            checked: 1 === A,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    i = +!!e;
                                if (e && !t) {
                                    _(i), (0, So.A)({ platformType: u.type, location: "User Settings" });
                                    return;
                                }
                                h(i), Si.A.setVisibility(u.type, u.id, i);
                            },
                        }),
                        a,
                        r,
                        l,
                    ],
                })),
                (function () {
                    if (u.revoked || u.integrations.length > 0) return (0, E.jsx)(eM.c, {});
                })(),
                u.revoked
                    ? (0, E.jsx)(tf.p, {
                          messageType: tf.Y.INFO,
                          children: j.intl.format(j.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, So.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                      })
                    : u.integrations.length > 0
                      ? (0, E.jsx)(sw.D, {
                            label: j.intl.string(j.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, E.jsx)(Sw, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, E.jsx)(Sc.A, { partner: u.type }),
            ],
        })
    );
}
function Sz(e) {
    let { appIdentity: t, oauth2Token: i } = e;
    return null == i
        ? null
        : (0, E.jsxs)("div", {
              className: Sk.FI,
              children: [
                  (function (e, t) {
                      let { application: i } = t,
                          n = nt.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
                      return (0, E.jsxs)("div", {
                          className: Sk.Il,
                          children: [
                              (0, E.jsx)("img", { alt: i.name, className: e6()(Sk.gj, Sk.sN), src: n }),
                              (0, E.jsxs)("div", {
                                  children: [
                                      (0, E.jsx)("div", {
                                          className: Sk.$p,
                                          children: (0, E.jsx)(ei.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: Sk.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, E.jsx)(ei.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: Sk.Au,
                                          children: i.name,
                                      }),
                                  ],
                              }),
                              (0, E.jsx)(et.D, {
                                  className: Sk.uH,
                                  onClick: () =>
                                      (0, E9.d1)(i, t.scopes, () => {
                                          E5.A.delete(t.id);
                                      }),
                                  "aria-label": j.intl.string(j.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, E.jsx)(gI.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, i),
                  (0, E.jsx)("div", {
                      className: Sk.HZ,
                      children: (0, E.jsx)(q.d, {
                          label: j.intl.string(j.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              SI.A.updateApplicationIdentityConfig(i.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function SX(e) {
    let t = Ss.A.get(e);
    (0, So.A)({ platformType: t.type }),
        eo.default.track(eA.HAw.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        });
}
function SY() {
    let e = (0, Sr.gn)(),
        t = (0, Sl.useIsRiotSocialSDKMigrationEnabled)({ location: "User Settings Connections" }),
        i = (0, ti.A)(t ? SU.tX : []);
    return (0, E.jsxs)("div", {
        className: Sk.lA,
        children: [
            i.map(
                (e) =>
                    null != e &&
                    (0, E.jsx)(
                        Sb.A,
                        { application: e, className: Sk.__invalid_accountButton, innerClassName: Sk.U$ },
                        e.id,
                    ),
            ),
            e
                .slice(0, 10 - i.length)
                .map((e) =>
                    (0, E.jsx)(
                        Sn.A,
                        { type: e.type, className: Sk.__invalid_accountButton, innerClassName: Sk.U$ },
                        e.type,
                    ),
                ),
            (0, E.jsx)(tr.m, {
                text: j.intl.string(j.t.QqTz8b),
                children: (0, E.jsx)("div", {
                    className: e6()(Sk.ej, Sk.__invalid_accountButton),
                    children: (0, E.jsx)(St.vN, {
                        children: (0, E.jsx)("button", {
                            className: e6()(Sk.R8, Sk.U$),
                            type: "button",
                            onClick: function () {
                                sr.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: SX });
                            },
                            "aria-label": j.intl.string(j.t.Zhcj9X),
                            children: (0, E.jsx)(tO._, {
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
function SH(e) {
    let t,
        { fetching: i, accounts: n, appIdentities: s, authorizedApps: l, theme: r, locale: a } = e,
        u = (0, o.SV)("ConnectionsList"),
        d = S.useMemo(() => n.filter((e) => Ss.A.isSupported(e.type)), [n]);
    return (
        (t = i
            ? (0, E.jsx)(du.y, { type: du.y.Type.SPINNING_CIRCLE })
            : 0 === d.length && 0 === s.length
              ? (0, E.jsx)(iN.pp, {
                    theme: r,
                    className: u ? Sk.p$ : void 0,
                    children: (0, E.jsx)(iN.SG, {
                        note: j.intl.string(j.t.WenGZ2),
                        children: j.intl.string(j.t.aoLS84),
                    }),
                })
              : (0, E.jsxs)(E.Fragment, {
                    children: [
                        u &&
                            (0, E.jsx)(eP.D, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                children: j.intl.format(j.t.AioIGb, { count: s.length + d.length }),
                            }),
                        s.map((e, t) =>
                            (0, E.jsx)(
                                Sz,
                                { appIdentity: e, oauth2Token: l.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        d.map((e, t) =>
                            (0, E.jsx)(
                                SB,
                                {
                                    theme: r,
                                    account: e,
                                    locale: a,
                                    onDisconnect: () =>
                                        (function (e) {
                                            let { type: t, id: i } = e;
                                            Si.A.disconnect(t, i);
                                        })(e),
                                },
                                `connection-${t}`,
                            ),
                        ),
                    ],
                })),
        (0, E.jsx)("div", { className: Sk.V, children: t })
    );
}
let SK = (0, a.E2)(u.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            let e = (0, o.SV)("NewConnectSection");
            return (0, E.jsx)(sw.D, {
                label: j.intl.string(e ? j.t["t+aGse"] : j.t.ZeDrUf),
                description: e ? void 0 : j.intl.format(j.t["oYc+Gz"], { privacyPolicyUrl: eA.X7G.PRIVACY }),
                children: (0, E.jsx)(SY, {}),
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
    SW = (0, a.E2)(u.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, g.bG)([eF.A], () => eF.A.hidePersonalInformation),
                t = (0, g.bG)([SS.A], () => SS.A.isFetching()),
                i = (0, g.bG)([SS.A], () => SS.A.getAccounts()),
                { authorizedAppsFetchState: n, authorizedApps: s } = (0, g.cf)([Sv.default], () => ({
                    authorizedAppsFetchState: Sv.default.getFetchState(),
                    authorizedApps: Sv.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: l, filteredAppIdentities: r } = (0, SC.A)(io.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, cu.Ay)(),
                o = (0, g.bG)([dK.default], () => dK.default.locale);
            return (S.useEffect(() => {
                n === Sv.FetchState.NOT_FETCHED && E5.A.fetch();
            }, [n]),
            e)
                ? null
                : (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsx)(S_, {}),
                          (0, E.jsx)(SH, {
                              fetching: t || l || (r.length > 0 && n !== Sv.FetchState.FETCHED),
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
            Si.A.fetch();
        },
        useSearchTerms: () => [
            j.intl.string(j.t["+/hZM/"]),
            j.intl.string(j.t.bsbMVz),
            j.intl.string(j.t.f7yOAX),
            j.intl.string(j.t.FYKGsL),
            j.intl.string(j.t["+KCMSi"]),
        ],
    });
var SZ = i(46225);
let Sq = [eA.fg2.LEAGUE_OF_LEGENDS, eA.fg2.RIOT_GAMES];
function SQ() {
    let e = (0, g.bG)([SS.A], () => SS.A.getAccounts().find((e) => Sq.includes(e.type))?.type),
        t = null != e ? Ss.A.get(e) : null,
        i = (0, ti.h)(t?.replacedBy),
        { canStartAuthorization: n, hasAlreadyLinked: s, fetched: l } = (0, SZ.RD)(i),
        r = j.intl.string(SV.default["1S6oAo"]),
        a = (0, Sl.useIsRiotSocialSDKMigrationEnabled)({ location: "RiotDeprecationInlineNotice" });
    return S.useMemo(
        () =>
            a && null != t && n && i?.connectionEntrypointUrl != null && !s && l
                ? {
                      type: h.lT.INLINE_NOTICE,
                      noticeType: "info",
                      useText: () =>
                          j.intl.format(SV.default.DeOsIl, {
                              connectionName: t.name,
                              applicationName: r,
                              connectionEntrypointUrl: i.connectionEntrypointUrl,
                          }),
                  }
                : null,
        [t, r, i, n, a, s, l],
    );
}
let SJ = (0, a.zZ)(u.X.CONNECTIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["3fe7U5"]),
        useSubtitle: () => j.intl.string(j.t.U22vw6),
        useInlineNotice: SQ,
        buildLayout: () => [SK, SW],
    }),
    S$ = (0, a.zZ)(u.X.AUTHORIZED_APPS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        useSubtitle: () => j.intl.string(j.t.G9JfLg),
        buildLayout: () => [Se],
        initialize: () => (
            E5.A.fetch(),
            () => {
                E9.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    S0 = (0, a.t_)(u.X.CONNECTED_APPS_PANEL, {
        useTitle: () => j.intl.string(j.t.lrVuZO),
        useObscuredNotice: dl.L,
        buildLayout: () => [SJ, S$],
    }),
    S1 = (0, a.i4)(u.X.CONNECTED_APPS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.lrVuZO),
        icon: h7.q,
        buildLayout: () => [S0],
    }),
    S2 = (0, a.WI)(u.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => j.intl.string(j.t.BA9200),
        buildLayout: () => [i0, eR, iS, S1],
    });
var S3 = i(631670),
    S6 = i(619499),
    S4 = i(836602),
    S7 = i(591179),
    S8 = i(854627),
    S5 = i(975732),
    S9 = i(761508),
    Te = i(83257),
    Tt = i(159001),
    Ti = i(344346),
    Tn = i(919395),
    Ts = i(233641);
function Tl(e) {
    let { title: t, children: i } = e;
    return (0, E.jsxs)("div", {
        children: [(0, E.jsx)(eP.D, { variant: "text-md/medium", className: Ts.Vf, children: t }), i],
    });
}
function Tr(e) {
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
        className: e6()(Ts.UA, i),
        children: (0, E.jsxs)("div", {
            className: e6()(Ts.yt, n),
            children: [
                (0, E.jsx)("div", {
                    className: e6()(Ts.Fp, a && Ts.Oz),
                    children: (0, E.jsxs)(E.Fragment, {
                        children: [
                            (0, E.jsx)(Tl, { title: l ?? j.intl.string(j.t.Zb06yP), children: s }),
                            null != r ? (0, E.jsx)(Tl, { title: j.intl.string(j.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, E.jsx)("div", { className: Ts.oB, children: t }),
            ],
        }),
    });
}
var Ta = i(986687),
    To = i(101058),
    Tu = i(841595),
    Td = i(696451),
    Tc = i(10478);
function Tg() {
    return (0, E.jsxs)("div", {
        className: Tc.p$,
        children: [
            (0, E.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: Tc.Sl }),
            (0, E.jsx)(eP.D, {
                className: Tc.h8,
                variant: "heading-lg/extrabold",
                children: j.intl.string(j.t.Z1OZCV),
            }),
            (0, E.jsx)(ei.E, { className: Tc.h8, variant: "text-md/normal", children: j.intl.string(j.t.ZSt4Tt) }),
            (0, E.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: Tc.h8,
                children: (0, E.jsx)(eG.$, {
                    variant: "primary",
                    text: j.intl.string(j.t.jQ3pqt),
                    onClick: () => {
                        (0, sF.pX)(eA.BVt.GUILD_DISCOVERY), (0, sv.default)();
                    },
                }),
            }),
        ],
    });
}
var Tm = i(81400),
    TA = i(252732),
    Th = i(355622),
    TE = i(408018),
    TS = i(201349),
    TT = i(158983);
let Tx = (0, sO.Ld)(),
    Tp = (0, il.createChannelRecord)({ id: "1", type: eA.rbe.DM }),
    Tf = (0, sO.Ld)();
function TN(e) {
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
        [d, c] = S.useState((0, TE.x7)(o)),
        g = S.useRef(r),
        m = S.useRef(!1);
    return (
        S.useEffect(() => {
            if (g.current !== r) {
                let e = (0, TE.x7)(r);
                u(r), c(e);
            }
            g.current = r;
        }, [r]),
        S.useEffect(() => {
            void 0 !== s || o === r || m.current || (u(r), c((0, TE.x7)(r)));
        }, [s, r, o]),
        (0, E.jsxs)(ut.A, {
            title: t,
            titleId: Tx,
            description: j.intl.string(j.t.Bbw6Ac),
            errors: i,
            disabled: a,
            children: [
                (0, E.jsx)(TS.Ay, {
                    "aria-describedby": Tf,
                    "aria-labelledby": Tx,
                    className: TT.i,
                    innerClassName: TT.Z,
                    maxCharacterCount: eA.NA2,
                    onChange: function (e, t, i) {
                        t !== o && (u(t), c(i), n(t));
                    },
                    placeholder: l,
                    channel: Tp,
                    textValue: o,
                    richValue: d,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: eH.USER_SETTINGS_MODAL_KEY,
                    type: Th.oU.PROFILE_BIO_INPUT,
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
                (0, E.jsx)(er.A, { id: Tf, children: j.intl.format(j.t["+DFxLc"], { maxLength: eA.NA2 }) }),
            ],
        })
    );
}
var T_ = i(930861),
    TI = i(821956),
    TC = i(562819),
    Tb = i(84540),
    Tv = i(408919);
function Ty(e) {
    let { user: t, guild: i, className: n, sectionTitle: s, forcedDivider: l = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, nW.Ay)(),
        o = (0, Tn.a4)({ user: t, guildId: i?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, Tn.CP)(i?.id),
        c = r ? T_.wL : aQ.$n;
    return (0, E.jsx)(ut.A, {
        className: n,
        forcedDivider: l,
        hasBackground: !0,
        title: s,
        errors: d,
        children: (0, E.jsxs)("div", {
            className: Tv.NC,
            children: [
                (0, E.jsx)(c, {
                    size: aQ.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, TC.L)({ analyticsLocations: a, guild: i });
                    },
                    className: e6()({ [Tv.yj]: r }),
                    children: j.intl.string(j.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Tv.DT,
                        children: (0, E.jsx)(eG.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, TI.uZ)(t, i) ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.OrokWm),
                            onClick: () => {
                                (0, Tb.p)({ guildId: i?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var Tj = i(339984),
    TO = i(114077);
let TR = [{ name: "gif", extensions: ["gif"] }];
function TL(e) {
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
        { newestAnalyticsLocation: g } = (0, nW.Ay)(),
        m = c ? T_.wL : aQ.$n,
        A = S.useCallback(() => {
            (0, TA.XD)({
                uploadType: Tj.HL.AVATAR,
                analyticsSource: g,
                filters: u ? TR : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, g, u]);
    return (0, E.jsx)(ut.A, {
        className: a,
        title: s,
        errors: i,
        disabled: o,
        forcedDivider: d,
        children: (0, E.jsxs)("div", {
            className: TO.NC,
            children: [
                (0, E.jsx)(m, {
                    className: e6()({ [TO.yj]: c }),
                    size: aQ.$n.Sizes.SMALL,
                    onClick: A,
                    children: l ?? j.intl.string(j.t["4OynCD"]),
                }),
                t &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TO.DT,
                        children: (0, E.jsx)(eG.$, {
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
var TD = i(152103);
function TP(e) {
    let { user: t, guildId: i, className: n } = e,
        s = ua.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: l } = (0, nW.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, Tn.B0)(t, i),
        d = (0, S.useCallback)(() => {
            eo.default.track(eA.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, nZ.L)({ analyticsLocations: l, guildId: i });
        }, [l, i]),
        c = (0, S.useCallback)(() => {
            (0, Tb.p)({ displayNameStyles: null }), eo.default.track(eA.HAw.DISPLAY_NAME_STYLES_REMOVED);
        }, []),
        g = (0, S.useCallback)(() => {
            (0, Tb.p)({ guildId: i, displayNameStyles: null });
        }, [i]),
        m = void 0 !== o ? o : null != i ? a : r;
    return (0, E.jsx)(ut.A, {
        title: j.intl.string(nq.default["86GtGH"]),
        className: n,
        showPremiumIcon: s,
        errors: u,
        children: (0, E.jsxs)("div", {
            className: TD.N,
            children: [
                (0, E.jsx)(eG.$, {
                    variant: "primary",
                    size: "sm",
                    text: j.intl.string(nq.default.vJqrIg),
                    onClick: d,
                }),
                null == i &&
                    null != m &&
                    (0, E.jsx)(eG.$, {
                        variant: "secondary",
                        size: "sm",
                        text: j.intl.string(nq.default.ymq8WQ),
                        onClick: c,
                    }),
                null != i &&
                    null != m &&
                    (0, E.jsx)(eG.$, {
                        variant: "secondary",
                        size: "sm",
                        text: j.intl.string(nq.default["j/KRxc"]),
                        onClick: g,
                    }),
            ],
        }),
    });
}
var TG = i(637193),
    TM = i(727369);
function TU(e) {
    let { user: t, guild: i, titleIcon: n } = e,
        { analyticsLocations: s } = (0, nW.Ay)(),
        l = null != i,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, Tn.rv)(t, i?.id),
        d = S.useCallback(() => {
            (0, TG.p)({ analyticsLocations: s, guildId: i?.id });
        }, [s, i?.id]),
        c = S.useCallback(() => {
            (0, Tb.p)({ guildId: i?.id, nameplate: null });
        }, [i?.id]);
    return (0, E.jsx)(ut.A, {
        title: j.intl.string(j.t.x5CoXR),
        titleIcon: n,
        errors: u,
        children: (0, E.jsxs)("div", {
            className: TM.u,
            children: [
                (0, E.jsx)(eG.$, { variant: "primary", size: "sm", text: j.intl.string(j.t.BwdeM1), onClick: d }),
                (void 0 === o ? (l ? a : r) != null : null != o) &&
                    (0, E.jsx)(eG.$, {
                        variant: "secondary",
                        size: "sm",
                        text: l ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t["9zwziY"]),
                        onClick: c,
                    }),
            ],
        }),
    });
}
var TV = i(33023);
function Tk(e) {
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
        { newestAnalyticsLocation: c } = (0, nW.Ay)(),
        g = d ? T_.wL : aQ.$n;
    return (0, E.jsx)(ut.A, {
        className: l,
        title: j.intl.string(j.t.Vgdusv),
        showPremiumIcon: a,
        errors: i,
        disabled: r,
        forcedDivider: u,
        children: (0, E.jsxs)("div", {
            className: TV.NC,
            children: [
                (0, E.jsx)(g, {
                    className: e6()({ [TV.yj]: d }),
                    size: aQ.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, TA.XD)({ uploadType: Tj.HL.BANNER, analyticsSource: c, guildId: s, isTryItOut: o }),
                    children: j.intl.string(j.t.N0bC3P),
                }),
                t &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TV.DT,
                        children: (0, E.jsx)(eG.$, {
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
var Tw = i(617061),
    TF = i(872246);
function TB(e) {
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
        { analyticsLocations: u } = (0, nW.Ay)(),
        d = ua.Ay.canUsePremiumProfileCustomization(t),
        c = (0, Tn.N2)({ user: t, guildId: i?.id }),
        { pendingProfileEffect: g, errors: m } = (0, Tn.nZ)(i?.id);
    S.useEffect(() => {
        d &&
            eo.default.track(eA.HAw.PREMIUM_UPSELL_VIEWED, {
                type: sL.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            });
    }, [d, u]);
    let A = a ? T_.wL : aQ.$n;
    return (0, E.jsx)(ut.A, {
        forcedDivider: r,
        borderType: cT.i.PREMIUM,
        hasBackground: !0,
        title: l,
        showBorder: o,
        errors: m,
        className: s,
        children: (0, E.jsxs)("div", {
            className: TF.NC,
            children: [
                (0, E.jsx)(A, {
                    size: aQ.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, Tw.W)({ analyticsLocations: u, guild: i, initialSelectedEffect: n });
                    },
                    className: e6()({ [TF.yj]: a }),
                    children: j.intl.string(j.t["/dRfCf"]),
                }),
                (void 0 === g ? null != c : null != g) &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TF.DT,
                        children: (0, E.jsx)(eG.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != i ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.uMuafO),
                            onClick: () => {
                                (0, Tb.p)({ guildId: i?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var Tz = i(13875),
    TX = i(515727),
    TY = i(238780);
function TH(e) {
    let { user: t, guild: i, sectionTitle: n } = e,
        { analyticsLocations: s } = (0, nW.Ay)(),
        l = (0, Tz.sk)("ProfileFrameSection"),
        r = (0, Tn.Xf)({ user: t, guildId: i?.id }),
        { pendingProfileFrame: a, errors: o } = (0, Tn.Tu)(i?.id),
        [u, d] = (0, eV.kn)([eU.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        c = u === eU.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return l
        ? (0, E.jsx)(ut.A, {
              showBorder: c,
              borderType: c ? cT.i.NEW_UPSELL : cT.i.PREMIUM,
              hasBackground: c,
              title: n,
              titleBadge: c ? (0, E.jsx)(sd.Lp, { text: j.intl.string(j.t.y2b7CA), className: TY.Ad }) : void 0,
              description: c ? j.intl.string(j.t.yMoMAt) : void 0,
              errors: o,
              children: (0, E.jsxs)("div", {
                  className: TY.NC,
                  children: [
                      (0, E.jsx)(eG.$, {
                          variant: "primary",
                          size: "sm",
                          text: j.intl.string(j.t["9/hmle"]),
                          onClick: () => {
                              (0, TX.w)({ analyticsLocations: s, guild: i }), d(ig.i.TAKE_ACTION);
                          },
                      }),
                      (void 0 === a ? null != r : null != a) &&
                          (0, E.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: TY.DT,
                              children: (0, E.jsx)(eG.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: null != i ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.nQBruk),
                                  onClick: () => {
                                      (0, Tb.p)({ guildId: i?.id, profileFrame: null });
                                  },
                              }),
                          }),
                  ],
              }),
          })
        : null;
}
var TK = i(33851),
    TW = i.n(TK),
    TZ = i(602853),
    Tq = i(654107),
    TQ = i(999291),
    TJ = i(101928),
    T$ = i(835245),
    T0 = i(317097),
    T1 = i(508274),
    T2 = i(919796),
    T3 = i(773431);
function T6(e) {
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
        c = (0, TZ.r)(es.A.colors.BACKGROUND_BASE_LOW).hex(),
        g = es.A.colors.BACKGROUND_MOD_MUTED.css,
        m = (0, TA.sN)(n),
        A = (0, T0.Hl)(n),
        h = A === c ? g : A,
        T = m ? es.A.unsafe_rawColors.WHITE.css : es.A.unsafe_rawColors.PRIMARY_530.css,
        x = (0, T2.A)(a),
        p = (0, T2.A)(o),
        [f, N] = S.useState((0, T$.A)());
    return (
        S.useEffect(() => {
            (x !== a || p !== o) && N((0, T$.A)());
        }, [o, a, p, x]),
        (0, E.jsx)(J.Y, {
            targetElementRef: d,
            positionKey: f,
            renderPopout: (e) =>
                (0, E.jsx)(T1.VN, {
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
                    className: e6()(T3.oP, { [T3.r9]: l }),
                    children: [
                        (0, E.jsx)(et.D, {
                            ...i,
                            tabIndex: l ? -1 : 0,
                            onClick: l ? eA.tEg : t,
                            style: { backgroundColor: A, borderColor: h },
                            className: T3.nf,
                            "aria-label": j.intl.string(j.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, E.jsx)(ur.R, {
                                size: "custom",
                                className: T3.BW,
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
var T4 = i(362656);
function T7(e) {
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
        c = (0, TQ.Ay)(t.id, r),
        { primaryColor: g, secondaryColor: m } = (0, TJ.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: n,
            isPreview: !0,
        }),
        A = ua.Ay.canUsePremiumProfileCustomization(t),
        h = null != i ? i : t.getAvatarURL(r, 80),
        S = (0, TZ.r)(es.A.unsafe_rawColors.PRIMARY_530).hex(),
        T = (0, Tq.rh)(h, S, !1);
    if (null == g || null == m) return null;
    let x = (e) => {
        s(TW()(e, c?.themeColors) ? void 0 : e);
    };
    return (0, E.jsx)(ut.A, {
        title: j.intl.string(j.t.DMeO2X),
        disabled: !A && !l,
        className: e6()(T4.__invalid_profileThemesSection, a),
        showPremiumIcon: o,
        forcedDivider: d,
        children: (0, E.jsxs)("div", {
            className: T4.hd,
            children: [
                (0, E.jsx)("div", {
                    className: T4.YX,
                    children: (0, E.jsx)(T6, {
                        onChange: (e) => x([e, m]),
                        color: g,
                        suggestedColors: T,
                        showEyeDropper: !0,
                        label: (0, E.jsx)(ei.E, {
                            className: T4.yz,
                            color: "text-default",
                            variant: "text-xs/normal",
                            "aria-hidden": !0,
                            children: j.intl.string(j.t.C3KTQk),
                        }),
                    }),
                }),
                (0, E.jsx)("div", {
                    className: T4.YX,
                    children: (0, E.jsx)(T6, {
                        onChange: (e) => x([g, e]),
                        color: m,
                        suggestedColors: T,
                        showEyeDropper: !0,
                        label: (0, E.jsx)(ei.E, {
                            className: T4.yz,
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
                        className: T4.WA,
                        children: (0, E.jsx)(eG.$, {
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
function T8(e) {
    let {
            sectionTitle: t,
            errors: i,
            onPronounsChange: n,
            pendingPronouns: s,
            placeholder: l,
            currentPronouns: r,
            disabled: a = !1,
        } = e,
        o = (0, sO.GV)();
    return (0, E.jsx)(ut.A, {
        title: t,
        titleId: o,
        errors: i,
        disabled: a,
        children: (0, E.jsx)(lX.k, {
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
    T9 = i(684732),
    xe = i(576705),
    xt = i(376294);
function xi(e) {
    let { errors: t, pendingNick: i, currentNick: n, username: s, user: l, guild: r } = e,
        a = (0, g.bG)([xe.A], () => xe.A.can(eA.xBc.CHANGE_NICKNAME, r) || xe.A.can(eA.xBc.MANAGE_NICKNAMES, r)),
        o = (0, Sg.L)(sL.PremiumTypes.TIER_2);
    return (0, E.jsxs)(ut.A, {
        title: j.intl.string(j.t.me1lRk),
        errors: t,
        children: [
            (0, E.jsx)(lX.k, {
                value: i ?? n ?? "",
                placeholder: s,
                maxLength: eA.d0r,
                onChange: function (e) {
                    (0, Tb.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : j.intl.string(j.t.gzjxQi),
            }),
            o && (0, E.jsx)(TP, { user: l, guildId: r.id, className: xt.F }),
        ],
    });
}
var xn = i(574173);
let xs = "/assets/b25da78aa7949feb.png";
function xl(e) {
    let { user: t, showOverlay: i, children: n } = e,
        s = (0, cu.Ay)(),
        { analyticsLocations: l } = (0, nW.Ay)(e1.A.PREMIUM_UPSELL_OVERLAY);
    return (S.useEffect(() => {
        i &&
            eo.default.track(eA.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: l,
                type: sL.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            });
    }, [i, l]),
    i)
        ? (0, E.jsxs)("div", {
              className: xn.ry,
              children: [
                  (0, E.jsx)("div", { children: n }),
                  (0, E.jsxs)("div", {
                      className: xn.Wc,
                      children: [
                          (0, E.jsx)("img", {
                              className: xn.Tn,
                              alt: j.intl.string(j.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case eA.NJ8.DARK:
                                      case eA.NJ8.DARKER:
                                      case eA.NJ8.MIDNIGHT:
                                          return xs;
                                      case eA.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return xs;
                                  }
                              })(s),
                          }),
                          (0, E.jsxs)("div", {
                              className: xn._9,
                              children: [
                                  (0, E.jsx)(ei.E, {
                                      variant: "text-lg/semibold",
                                      color: "always-white",
                                      children: j.intl.string(j.t.dMaDFX),
                                  }),
                                  (0, E.jsx)(ei.E, {
                                      variant: "text-sm/normal",
                                      color: "always-white",
                                      children: j.intl.string(j.t.F7sgFH),
                                  }),
                              ],
                          }),
                          (0, E.jsx)(cS.A, {
                              size: aQ.$n.Sizes.LARGE,
                              color: aQ.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: ua.Ay.isPremium(t)
                                      ? j.intl.string(j.t.AfRWI8)
                                      : j.intl.string(j.t.nkdUym),
                              },
                              subscriptionTier: sL.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : n;
}
var xr = i(887267);
function xa() {
    let e = (0, g.bG)([io.default], () => {
            let e = io.default.getCurrentUser();
            return tz()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        t = (0, Sg.L)(sL.PremiumTypes.TIER_2),
        i = (0, g.bG)([S4.A, ed.A], () => ed.A.getGuild(S4.A.selectedGuildId));
    tz()(null != i, "guild should not be null");
    let {
            pendingAvatar: n,
            pendingNickname: s,
            pendingBanner: l,
            pendingBio: r,
            pendingPronouns: a,
            pendingThemeColors: o,
            errors: u,
        } = (0, g.cf)([S4.A], () => ({ ...S4.A.getPendingChanges(i.id), errors: S4.A.getErrors(i.id) })),
        d = (0, To.V7)({ userId: e.id, image: n }),
        c = (0, Tm.EC)(i.id),
        m = (0, g.bG)([Td.Ay], () => (null == i.id ? null : Td.Ay.getMember(i.id, e.id))),
        A = (0, g.bG)([Tu.A], () => Tu.A.getGuildMemberProfile(e.id, i.id)),
        h = ua.Ay.canUsePremiumProfileCustomization(e),
        S = (0, Tn.z5)(n, m?.avatar),
        T = (0, Tn.Ac)(l, A?.banner),
        x = (0, T9.l)(o, A?.themeColors),
        p = A?.bio ?? "",
        f = A?.pronouns ?? "";
    return (0, E.jsxs)("div", {
        className: xr.Q,
        children: [
            (0, E.jsx)(
                xi,
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
                T8,
                {
                    sectionTitle: j.intl.string(j.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, Tb.p)({ guildId: i.id, pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: f,
                },
                "pronouns",
            ),
            (0, E.jsxs)(xl, {
                user: e,
                showOverlay: !h,
                children: [
                    (0, E.jsx)(
                        TL,
                        {
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t.lqaIxI),
                                    (0, E.jsx)(tr.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(o5.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xr.a,
                                        }),
                                    }),
                                ],
                            }),
                            showRemoveAvatarButton: S,
                            onAvatarChange: (e) =>
                                (0, TA.rM)(e, m?.avatar, (e) => (0, Tb.p)({ guildId: i.id, avatar: e })),
                            errors: u?.avatar,
                            guildId: i.id,
                            disabled: !h,
                        },
                        "avatar",
                    ),
                    (0, E.jsx)(
                        Ty,
                        {
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t["7v0T9P"]),
                                    (0, E.jsx)(tr.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(o5.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xr.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: e,
                            guild: i,
                        },
                        "decoration",
                    ),
                    !t && (0, E.jsx)(TP, { user: e, guildId: i.id }),
                    (0, E.jsx)(
                        TU,
                        {
                            user: e,
                            guild: i,
                            titleIcon: (0, E.jsx)(tr.m, {
                                text: j.intl.string(j.t["5AFxuK"]),
                                children: (0, E.jsx)(o5.t, { size: "md", color: "currentColor", className: xr.a }),
                            }),
                        },
                        "nameplate",
                    ),
                    (0, E.jsx)(
                        TB,
                        {
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t.wR5wOo),
                                    (0, E.jsx)(tr.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(o5.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xr.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: e,
                            guild: i,
                        },
                        "effect",
                    ),
                    (0, E.jsx)(TH, { user: e, guild: i, sectionTitle: j.intl.string(j.t.GWrZOd) }, "frame"),
                    (0, E.jsx)(
                        Tk,
                        {
                            showRemoveBannerButton: T,
                            errors: u?.banner,
                            onBannerChange: (e) =>
                                (0, TA.rM)(e, A?.banner, (e) => (0, Tb.p)({ guildId: i.id, banner: e })),
                            guildId: i.id,
                            disabled: !h,
                        },
                        "banner",
                    ),
                    (0, E.jsx)(T7, {
                        user: e,
                        pendingAvatarSrc: d,
                        pendingColors: o,
                        onThemeColorsChange: (e) => (0, Tb.p)({ guildId: i.id, themeColors: e }),
                        guildId: i.id,
                        showResetThemeButton: x,
                    }),
                    (0, E.jsx)(
                        TN,
                        {
                            placeholder: j.intl.string(j.t["/7NKgv"]),
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t.ZzAR2Y),
                                    (0, E.jsx)(tr.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(o5.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xr.a,
                                        }),
                                    }),
                                ],
                            }),
                            onBioChange: (e) => (0, Tb.p)({ guildId: i.id, bio: e }),
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
var xo = i(405318);
function xu(e) {
    (0, Y.openModalLazy)(async () => {
        let { default: t } = await Promise.all([i.e("2125"), i.e("66901"), i.e("61129")]).then(i.bind(i, 475312));
        return (i) => (0, E.jsx)(t, { source: { ...e, page: eA.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...i });
    });
}
function xd(e) {
    let { selectedGuild: t, onGuildChange: i } = e,
        { analyticsLocations: n } = (0, nW.Ay)(e1.A.USER_SETTINGS_GUILD_PROFILE),
        s = (0, g.bG)([io.default], () => {
            let e = io.default.getCurrentUser();
            return tz()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        l = (0, g.bG)([Td.Ay], () => (null != t ? Td.Ay.getMember(t.id, s.id) : null)),
        r = (0, g.bG)([Tu.A], () => !Tu.A.isFetchingProfile(s.id, t?.id)),
        a = (0, g.bG)([eF.A], () => eF.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, g.cf)([S4.A], () => S4.A.getPendingChanges(t?.id)),
        c = (0, To.V7)({ userId: s.id, image: o }),
        m = (0, Tn.lw)({
            pendingValue: u,
            userValue: s?.collectibles?.nameplate,
            guildValue: l?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: A } = (0, Tn.B0)(s, t?.id);
    return (S.useEffect(() => () => sr.h.wait(Tt.IM), []), a)
        ? (0, E.jsx)(dl.A, {})
        : r
          ? (0, E.jsxs)(nW.f5, {
                value: n,
                children: [
                    (0, E.jsx)(ei.E, {
                        variant: "text-sm/normal",
                        children: j.intl.format(j.t["/PTB2E"], {
                            helpCenterLink: tN.A.getArticleURL(eA.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(ue.A, { guildId: t.id, onChange: i }),
                                  (0, E.jsx)(Tr, {
                                      profilePreviewTitle: (0, E.jsx)(eP.D, {
                                          variant: "heading-md/medium",
                                          className: xo.YV,
                                          children: j.intl.formatToPlainString(j.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, E.jsx)(Ta.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: A,
                                          user: s,
                                          guild: t,
                                          canUsePremiumCustomization: ua.Ay.canUsePremiumProfileCustomization(s),
                                          onUpsellClick: xu,
                                          containerClassName: xo.ti,
                                      }),
                                      nameplatePreview: (0, E.jsx)(Ti.A, {
                                          ...d,
                                          pendingDisplayNameStyles: A,
                                          user: s,
                                          guildId: t?.id,
                                          nameplate: m,
                                          className: null == m ? xo.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, E.jsx)(xa, {}),
                                  }),
                              ],
                          })
                        : (0, E.jsx)(Tg, {}),
                ],
            })
          : (0, E.jsx)(du.y, {});
}
var xc = i(903209),
    xg = i(39409);
let xm = (e) => {
    let { children: t, notice: i } = e;
    return (0, E.jsxs)("div", { className: xg.r, children: [i, (0, E.jsx)("div", { children: t })] });
};
var xA = i(269115),
    xh = i(823092),
    xE = i(859040),
    xS = i(379197),
    xT = i(488430),
    xx = i(457421),
    xp = i(940622),
    xf = i(559474),
    xN = i(144030);
let x_ = () => {
    let e,
        t,
        i,
        n,
        { analyticsLocations: s } = (0, nW.Ay)(e1.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        l = S.useRef(null),
        {
            asset: r,
            popoutAsset: a,
            title: o,
            body: u,
            version: d,
            revertTextColor: c,
        } = ((e = (0, xp.mb)(xf.RN.UPSELL_BANNER)),
        (t = (0, xp.mb)(xf.RN.UPSELL_BANNER_POPOUT)),
        (i = (0, g.bG)([xx.A], () => xx.A.getMarketingBySurface(xS.R.EDIT_PROFILE_SETTINGS))),
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
            () => ({ ...n, type: xT.G.BANNER, asset: e ?? n.asset, popoutAsset: t ?? n.popoutAsset }),
            [e, t, n],
        )),
        { navigateWithValidation: m } = (0, xh.L_)();
    return (
        S.useEffect(() => {
            eo.default.track(eA.HAw.PREMIUM_UPSELL_VIEWED, {
                type: sL.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: s,
                version: d,
            });
        }, [s, d]),
        (0, E.jsxs)("div", {
            ref: l,
            className: xN.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, E.jsx)("div", {
                    className: xN.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, E.jsx)("img", { src: a, className: xN.Qw, alt: "" }),
                }),
                (0, E.jsxs)("div", {
                    className: xN.Em,
                    children: [
                        (0, E.jsx)(eP.D, {
                            variant: "heading-lg/extrabold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: xN.DD,
                            children: o,
                        }),
                        (0, E.jsx)(ei.E, {
                            variant: "text-sm/normal",
                            color: c ? "text-overlay-dark" : "currentColor",
                            children: u,
                        }),
                    ],
                }),
                (0, E.jsx)(eG.$, {
                    onClick: () => {
                        m(() =>
                            (0, xE.Cz)({
                                analyticsLocations: s,
                                analyticsSource: e1.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
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
var xI = i(451909),
    xC = i(202639),
    xb = i(400669),
    xv = i(835071),
    xy = i(422936),
    xj = i(234419),
    xO = i(590180),
    xR = i(898461),
    xL = i(207803),
    xD = i(508425),
    xP = i(559949);
let xG = {
        above_the_clouds: {
            preset: "above_the_clouds",
            themeColors: [752280, 9215590],
            avatarDecorationSkuId: "1144059132517826601",
            displayNameStyles: { fontId: xP.x.CHICLE, effectId: xD.z.POP, colors: [959694] },
            getName: () => j.intl.string(j.t["TFc+iF"]),
            getHeaderSrc: () => i(702051).A,
            getBannerSrc: (e) => (e ? i(735161).A : i(887e3).A),
        },
        cyberpunk: {
            preset: "cyberpunk",
            themeColors: [1967991, 742532],
            avatarDecorationSkuId: null,
            displayNameStyles: { fontId: xP.x.PIXELIFY, effectId: xD.z.NEON, colors: [2949343] },
            getName: () => j.intl.string(j.t["4g+5bq"]),
            getHeaderSrc: () => i(272017).A,
            getBannerSrc: (e) => (e ? i(735271).A : i(208574).A),
        },
        shadow_realm: {
            preset: "shadow_realm",
            themeColors: [0, 4458504],
            avatarDecorationSkuId: "1144058522808614923",
            displayNameStyles: { fontId: xP.x.NEO_CASTEL, effectId: xD.z.TOON, colors: [0xff0000] },
            getName: () => j.intl.string(j.t.ycg1xj),
            getHeaderSrc: () => i(863653).A,
            getBannerSrc: (e) => (e ? i(538263).A : i(576974).A),
        },
        starlit_dream: {
            preset: "starlit_dream",
            themeColors: [5123751, 590625],
            avatarDecorationSkuId: "1144058844004233369",
            displayNameStyles: { fontId: xP.x.CHERRY_BOMB, effectId: xD.z.TOON, colors: [3343795] },
            getName: () => j.intl.string(j.t["9WLHvr"]),
            getHeaderSrc: () => i(434361).A,
            getBannerSrc: (e) => (e ? i(700309).A : i(135572).A),
        },
        neon_space: {
            preset: "neon_space",
            themeColors: [6094952, 1007678],
            avatarDecorationSkuId: null,
            displayNameStyles: { fontId: xP.x.MUSEO_MODERNO, effectId: xD.z.NEON, colors: [28737] },
            getName: () => j.intl.string(j.t.UdNuqi),
            getHeaderSrc: () => i(301928).A,
            getBannerSrc: (e) => (e ? i(285974).A : i(775627).A),
        },
    },
    xM = (e) => xG[e],
    xU = Object.keys(xG),
    xV = (e) => {
        let t = null == e ? xU : xU.filter((t) => t !== e);
        return t[Math.floor(Math.random() * t.length)];
    };
var xk = i(371912),
    xw = i(674253);
function xF(e) {
    let { preset: t, onShuffle: i } = e,
        n = (0, g.bG)([i7.A], () => i7.A.useReducedMotion),
        s = (0, xk.Xf)({ useReducedMotion: n }),
        { name: l, header: r } = S.useMemo(() => {
            let e = xM(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, E.jsxs)("div", {
        className: xw.kL,
        children: [
            (0, E.jsx)(et.D, {
                onClick: () => {
                    i(), s.startAnimation(!1);
                },
                className: xw.x6,
                "aria-label": j.intl.string(j.t["44yJxh"]),
                children: s.render(),
            }),
            (0, E.jsxs)(et.D, {
                onClick: () => {
                    i(), s.startAnimation(!1);
                },
                "aria-label": `${l}: ${j.intl.string(j.t["44yJxh"])}`,
                className: xw.Lt,
                children: [
                    (0, E.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: xw.L_ }),
                    (0, E.jsx)(ei.E, { className: xw._e, variant: "text-sm/bold", color: "always-white", children: l }),
                ],
            }),
        ],
    });
}
var xB = i(410516),
    xz = i(811611),
    xX = i(515718),
    xY = i(507553);
function xH(e, t) {
    let i = xY.A.useField("scrollPosition"),
        n = (0, g.bG)([i7.A], () => i7.A.useReducedMotion);
    (0, S.useEffect)(() => {
        let s = e.current;
        if (null == s || i !== t) return;
        let l = requestAnimationFrame(() => {
            s.scrollIntoView({ behavior: n ? "auto" : "smooth" }), xY.A.setState({ scrollPosition: null });
        });
        return () => cancelAnimationFrame(l);
    }, [e, t, i, n]);
}
var xK = i(844222),
    xW = i(314649);
function xZ(e) {
    let { user: t } = e,
        { reducedMotion: n } = S.useContext(xK.C),
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
        } = (0, g.cf)([S4.A], () => {
            let e = S4.A.getPendingChanges(),
                t = S4.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        p = (0, To.V7)({ userId: t.id, image: A ?? s });
    return (0, E.jsx)(Ta.A, {
        user: t,
        pendingPronouns: d,
        pendingBio: c,
        pendingBanner: h ?? l ?? i(636763),
        pendingDisplayNameStyles: x ?? o,
        pendingAvatar: p,
        pendingThemeColors: m ?? u,
        pendingAvatarDecoration: void 0 !== T ? T : r,
        pendingProfileEffect: a,
        avatarClassName: null != A || null != s || n.enabled ? void 0 : xW.WX,
        containerClassName: xW.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var xq = i(461414);
function xQ(e) {
    let { user: t, isVisible: i, shouldShow: n } = e,
        s = ua.Ay.isPremium(t),
        l = ua.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, g.cf)([S4.A], () => {
            let e = S4.A.getPendingChanges(),
                t = S4.A.getErrors(),
                i = S4.A.getTryItOutChanges();
            return { ...e, ...i, errors: t };
        }),
        { preset: c, onShuffle: m } = (function () {
            let e = (0, g.bG)([i7.A], () => i7.A.useReducedMotion),
                [t, i] = (0, S.useState)(xV()),
                {
                    banner: n,
                    themeColors: s,
                    avatarDecorationSkuId: l,
                    displayNameStyles: r,
                } = (0, S.useMemo)(() => {
                    let i = xM(t);
                    return {
                        banner: i.getBannerSrc(e),
                        themeColors: i.themeColors,
                        avatarDecorationSkuId: i.avatarDecorationSkuId,
                        displayNameStyles: i.displayNameStyles,
                    };
                }, [t, e]),
                a = (0, g.bG)([xO.A], () => {
                    let e = xO.A.getProduct(l);
                    return (0, xR.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, S.useEffect)(() => {
                (0, xL.w5)({ banner: n, themeColors: s, avatarDecoration: a, displayNameStyles: r });
            }, [n, s, a, r]);
            let o = (0, S.useCallback)(() => {
                let e = xV(t);
                i(e), eo.default.track(eA.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: e });
            }, [t]);
            return { preset: t, onShuffle: o };
        })(),
        A = S.useRef(null);
    xH(A, nk._F.TRY_IT_OUT);
    let { analyticsLocations: h, sourceAnalyticsLocations: T } = (0, nW.Ay)(e1.A.USER_SETTINGS_TRY_OUT_PREMIUM),
        x = (e) => {
            e &&
                (d?.startsWith("https:") === !0
                    ? fetch(d)
                          .then((e) => e.blob())
                          .then((e) => (0, xX.We)(e))
                          .then((e) => {
                              (0, Tb.p)({ avatar: u, themeColors: o, banner: e });
                          })
                          .catch(() => {
                              (0, Tb.p)({ avatar: u, themeColors: o });
                          })
                    : null != d
                      ? (0, Tb.p)({ avatar: u, themeColors: o, banner: d })
                      : (0, Tb.p)({ avatar: u, themeColors: o }),
                eo.default.track(eA.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
        };
    S.useEffect(() => {
        i &&
            eo.default.track(eA.HAw.PREMIUM_UPSELL_VIEWED, {
                type: sL.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: eA.liQ.USER_SETTINGS },
                location_stack: T,
            });
    }, [T, t, i]);
    let p = (0, xj.V)()?.subscription_trial?.sku_id === sL.pe.TIER_2,
        f = (0, xy.O)(),
        N = (0, xB.U9)(f, sL.pe.TIER_2);
    return n
        ? (0, E.jsx)(nW.f5, {
              value: h,
              children: (0, E.jsxs)(cT.A, {
                  ref: A,
                  className: xq.MT,
                  type: cT.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, E.jsx)(Tr, {
                          stickyPreview: !1,
                          layoutClassName: xq.th,
                          profilePreviewTitle: (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(o5.t, { size: "md", color: "currentColor", className: xq.PC }),
                                  j.intl.string(j.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, E.jsxs)(E.Fragment, {
                              children: [(0, E.jsx)(xF, { preset: c, onShuffle: m }), (0, E.jsx)(xZ, { user: t })],
                          }),
                          children: (0, E.jsxs)("div", {
                              children: [
                                  (0, E.jsxs)("div", {
                                      children: [
                                          (0, E.jsx)(eP.D, {
                                              variant: "heading-xl/extrabold",
                                              children: j.intl.string(j.t["2zGdAW"]),
                                          }),
                                          (0, E.jsx)(ei.E, {
                                              className: xq.h_,
                                              variant: "text-sm/normal",
                                              children: j.intl.string(j.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, E.jsx)(T7, {
                                      className: xq.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, To.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: xL.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, E.jsx)(Tk, {
                                      className: xq.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: xL.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !l &&
                                      (0, E.jsx)(TL, {
                                          className: xq.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: xL.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: j.intl.string(j.t["7z0D1c"]),
                                          sectionTitle: j.intl.string(j.t.vtFfPX),
                                      }),
                                  (0, E.jsx)(TP, { user: t, className: xq.fz }),
                                  !p &&
                                      (0, E.jsx)(ei.E, {
                                          variant: "text-sm/normal",
                                          children: j.intl.string(j.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !p &&
                          (0, E.jsx)(xC.d, {
                              onSubscribeModalClose: x,
                              className: xq.Kv,
                              showUpsell: !0,
                              text: j.intl.format(j.t.TmfgI2, {
                                  onClick: () => {
                                      (0, xv.K)({ onSubscribeFinish: x });
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
                                  (0, E.jsx)("div", { className: xq.BU }),
                                  (0, E.jsx)(xz.Ay, {
                                      type: sL.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: sL.pe.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
var xJ = i(814390),
    x$ = i(909536),
    x0 = i(843282),
    x1 = i(145497),
    x2 = i(685073),
    x3 = i(534400),
    x6 = i(581781),
    x4 = i(743981),
    x7 = i(51358);
let x8 = (0, sO.Ld)(),
    x5 = S.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: i, onChange: n } = e,
            s = S.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            l = (0, g.bG)([io.default], () => (0, x2.Zo)(io.default.getCurrentUser()?.primaryGuild).guildId),
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
                        : (0, E.jsx)(x6.A, {
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
                        : (0, E.jsx)(x1.j, {
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
                        : (0, E.jsx)(x3.o9, {
                              guildId: t.id,
                              guildTag: i,
                              guildBadge: t.profile?.badge ?? void 0,
                              badgeSize: x4.Sl.SIZE_16,
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
            xH(x, nk._F.GUILD_TAG),
            (0, E.jsxs)(ut.A, {
                title: j.intl.string(j.t.Pdd1nd),
                titleId: x8,
                ref: x,
                children: [
                    (0, E.jsx)(ei.E, {
                        className: x7.VA,
                        variant: "text-sm/normal",
                        children: j.intl.string(j.t.mlZ6Jx),
                    }),
                    (0, E.jsx)(x0.Pw, {
                        className: x7.Lt,
                        optionClassName: x7.S0,
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
var x9 = i(318785),
    pe = i(556729);
let pt = (0, sO.Ld)();
function pi(e) {
    let t = (0, Sg.L)(sL.PremiumTypes.TIER_2);
    return (0, E.jsxs)(ut.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: j.intl.string(j.t["9AjdkD"]),
        titleId: pt,
        children: [
            (0, E.jsx)("div", {
                children: (0, E.jsx)(lX.k, {
                    "aria-labelledby": pt,
                    placeholder: e.placeholder,
                    maxLength: eA.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, E.jsx)(TP, { user: e.user, className: pe.F }),
        ],
    });
}
function pn(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: i } = e,
        n = L.m$.useSetting(),
        s = void 0 !== i ? i : n;
    return (0, E.jsx)(q.d, {
        label: j.intl.string(j.t["3cWDuO"]),
        description: s ? null : j.intl.formatToPlainString(j.t.aYhclf, { username: t }),
        checked: !s,
        onChange: (e) => {
            !e === n ? (0, S3._e)() : (0, Tb.p)({ legacyUsernameDisabled: !e });
        },
    });
}
function ps(e) {
    let { user: t, savedUserColor: i, pendingColor: n, setPendingAccentColor: s } = e,
        l = t.getAvatarURL(null, 80),
        r = (0, TZ.r)(es.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, Tq.rh)(l, r, !1),
        o = (0, T0.LX)(a[0]);
    return (0, E.jsx)(ut.A, {
        title: j.intl.string(j.t["/X3fkf"]),
        children: (0, E.jsx)(T6, { onChange: (e) => s(e), color: n ?? i ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var pl = i(518477);
let pr = () => {
    let e = (0, g.bG)([cy.default], () => cy.default.getId());
    return (0, E.jsx)(ut.A, {
        title: j.intl.string(j.t.Jzj9q4),
        children: (0, E.jsx)(eG.$, {
            text: j.intl.string(j.t.Geikwq),
            onClick: () => {
                (0, S5.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [e1.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: pl.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var pa = i(594453);
function po() {
    let e = (0, g.bG)([io.default], () => {
            let e = io.default.getCurrentUser();
            return tz()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e;
        }),
        t = (0, g.bG)([Tu.A], () => Tu.A.getUserProfile(e.id)),
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
        } = (0, g.cf)([S4.A], () => {
            let e = S4.A.getPendingChanges(),
                t = S4.A.getErrors();
            return { ...e, errors: t };
        }),
        m = (0, To.V7)({ userId: e.id, image: i }),
        A = (0, Tm.EC)(),
        h = ua.Ay.canUsePremiumProfileCustomization(e),
        S = (0, Tn.z5)(i, e.avatar),
        T = (0, Tn.Ac)(s, t?.banner),
        x = (0, TQ.Ay)(e.id),
        p = x?.getLegacyUsername(),
        f = (c.global_name?.length ?? 0) > 0 ? c.global_name : (A?.nick ?? []),
        N = (c.bio?.length ?? 0) > 0 ? c.bio : (A?.bio ?? []),
        _ = (0, x9.b)();
    return (0, E.jsxs)("div", {
        className: pa.Q,
        children: [
            (0, E.jsx)(pi, {
                placeholder: e.username,
                errors: f,
                currentGlobalName: e.globalName,
                pendingGlobalName: n,
                onGlobalNameChange: (e) => (0, Tb.p)({ globalName: e }),
                user: e,
            }),
            (0, E.jsx)(
                T8,
                {
                    sectionTitle: j.intl.string(j.t["+T3RI/"]),
                    errors: c.pronouns,
                    onPronounsChange: (e) => (0, Tb.p)({ pronouns: e }),
                    pendingPronouns: r,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, E.jsx)(pr, {}),
            (0, E.jsx)(
                TL,
                {
                    onAvatarChange: (e) => {
                        (0, Tb.p)({ avatar: e }), (0, Tn.WU)(null == e ? "remove" : "set");
                    },
                    showRemoveAvatarButton: S,
                    errors: c.avatar,
                    sectionTitle: j.intl.string(j.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, E.jsx)(Ty, { user: e, sectionTitle: j.intl.string(j.t["7v0T9P"]) }, "decoration"),
            (0, E.jsx)(TU, { user: e }),
            (0, E.jsx)(TB, { user: e, sectionTitle: j.intl.string(j.t.wR5wOo) }, "effect"),
            (0, E.jsx)(TH, { user: e, sectionTitle: j.intl.string(j.t.GWrZOd) }, "frame"),
            h
                ? (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsx)(
                              Tk,
                              {
                                  showRemoveBannerButton: T,
                                  errors: c.banner,
                                  onBannerChange: (e) => (0, Tb.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, E.jsx)(T7, {
                              user: e,
                              pendingAvatarSrc: m,
                              pendingColors: o,
                              onThemeColorsChange: (e) => (0, Tb.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, E.jsx)(
                      ps,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: a,
                          setPendingAccentColor: (e) => (0, Tb.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, E.jsx)(
                TN,
                {
                    sectionTitle: j.intl.string(j.t.ZzAR2Y),
                    errors: N,
                    onBioChange: (e) => (0, Tb.p)({ bio: e }),
                    pendingBio: l,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            _.length > 0 &&
                (0, E.jsx)(x5, {
                    availablePrimaryGuilds: _,
                    pendingPrimaryGuildId: d,
                    onChange: (e) => (0, Tb.p)({ primaryGuildId: e }),
                }),
            null != p && (0, E.jsx)(pn, { legacyUsername: p, pendingLegacyUsernameDisabled: u }, "legacy_username"),
        ],
    });
}
function pu() {
    (0, Y.openModalLazy)(async () => {
        let { default: e } = await Promise.all([i.e("2125"), i.e("66901"), i.e("41704")]).then(i.bind(i, 562011));
        return (t) =>
            (0, E.jsx)(e, {
                ...t,
                source: {
                    page: eA.liQ.USER_SETTINGS,
                    section: eA.JJy.SETTINGS_CUSTOMIZE_PROFILE,
                    object: eA.ZSU.BUTTON_CTA,
                    type: eA.AnalyticsObjectTypes.BUY,
                },
            });
    });
}
var pd = i(743539);
function pc() {
    let e = (0, g.bG)([io.default], () => {
            let e = io.default.getCurrentUser();
            return tz()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        t = (0, g.bG)([eF.A], () => eF.A.hidePersonalInformation),
        {
            pendingBio: i,
            pendingAvatar: n,
            pendingNameplate: s,
            showNotice: l,
            ...r
        } = (0, g.cf)([S4.A], () => ({ ...S4.A.getPendingChanges(), showNotice: S4.A.showNotice() })),
        a = (0, To.V7)({ userId: e.id, image: n }),
        o = (0, Tn.lw)({ pendingValue: s, userValue: e?.collectibles?.nameplate }),
        u = (0, xJ.A)() && null != i ? xI.Ay.parse(void 0, i).content : i,
        d = ua.Ay.canUsePremiumProfileCustomization(e),
        c = (0, x$.St)("edit-profile-upsell"),
        { analyticsLocations: m } = (0, nW.Ay)(e1.A.USER_SETTINGS_USER_PROFILE);
    S.useEffect(() => () => sr.h.wait(S3.IM), []);
    let [A, h] = S.useState(!1),
        T = !d,
        x = S.useRef(null);
    return t
        ? (0, E.jsx)(dl.A, {})
        : (0, E.jsxs)(nW.f5, {
              value: m,
              children: [
                  (0, E.jsx)(x_, {}),
                  (0, E.jsx)(Tr, {
                      profilePreview: (0, E.jsx)(Ta.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: pu,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: pd.ti,
                      }),
                      nameplatePreview: (0, E.jsx)(Ti.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? pd.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, E.jsx)(po, {}),
                  }),
                  (0, E.jsx)(xA.L, {
                      innerRef: x,
                      onChange: (e) => h(e),
                      threshold: 0.25,
                      active: T,
                      children: (0, E.jsx)("div", {
                          ref: x,
                          children: (0, E.jsx)(xQ, { user: e, shouldShow: T, isVisible: A }),
                      }),
                  }),
                  T &&
                      !l &&
                      (0, E.jsx)(xC.d, {
                          className: pd.EL,
                          showUpsell: !A,
                          text: j.intl.format(j.t.TmfgI2, { onClick: () => (0, xv.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: c
                              ? (0, E.jsx)(xb.l, { size: "md", location: e1.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL })
                              : void 0,
                          button: (0, E.jsx)("div", {
                              className: pd.Xl,
                              children: (0, E.jsx)(eG.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      eo.default.track(eA.HAw.TRY_IT_OUT_PRESET_CLICKED, {
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
var pg = i(625494),
    pm = i(454078);
let pA = { [nk.Eq.USER_PROFILE]: "main_profile_tab", [nk.Eq.GUILD]: "guild_profile_tab" },
    ph = (0, a.E2)(u.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, g.bG)([lJ.A, ec.Ay, S4.A], () => {
                    let e = S4.A.selectedGuildId ?? lJ.A.getGuildId();
                    return null == e || S4._.has(e) ? ec.Ay.getFlattenedGuildIds().find((e) => !S4._.has(e)) : e;
                }),
                t = (0, g.bG)([ed.A], () => ed.A.getGuild(e)),
                i = (0, g.bG)([S4.A], () => S4.A.showNotice()),
                n = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
                s = xY.A.useField("subsection");
            return (
                S.useEffect(() => {
                    (0, rL._)(pA[s]);
                }, [s]),
                S.useEffect(() => {
                    null != n && t?.id != null && (0, xc.A)(n.id, n.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, n]),
                (0, E.jsx)(xm, {
                    children: (0, E.jsxs)(co.F, {
                        component: (0, E.jsx)(er.A, {
                            children: (0, E.jsx)(eP.D, {
                                variant: "heading-xl/normal",
                                children: j.intl.string(j.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, E.jsxs)(S9.V, {
                                className: pm.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: s,
                                onItemSelect: function (e) {
                                    if (s !== e) {
                                        if (i) {
                                            (0, rD.fO)({ duration: 300, intensity: Te.n3 }),
                                                pg._.dispatch(eA.jej.EMPHASIZE_NOTICE);
                                            return;
                                        }
                                        e === nk.Eq.GUILD && null != t && (0, Tt.V2)(t.id),
                                            xY.A.setState({ subsection: e });
                                    }
                                },
                                children: [
                                    (0, E.jsx)(
                                        S9.V.Item,
                                        {
                                            className: pm.YU,
                                            id: nk.Eq.USER_PROFILE,
                                            children: j.intl.string(j.t["2p07FR"]),
                                        },
                                        nk.Eq.USER_PROFILE,
                                    ),
                                    (0, E.jsx)(
                                        S9.V.Item,
                                        {
                                            className: e6()(pm.YU, pm.HY),
                                            "aria-label": j.intl.string(j.t.kPHroX),
                                            id: nk.Eq.GUILD,
                                            children: j.intl.string(j.t.kPHroX),
                                        },
                                        nk.Eq.GUILD,
                                    ),
                                ],
                            }),
                            s === nk.Eq.GUILD
                                ? (0, E.jsx)(xd, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (i) {
                                              (0, rD.fO)({ duration: 300, intensity: Te.n3 }),
                                                  pg._.dispatch(eA.jej.EMPHASIZE_NOTICE);
                                              return;
                                          }
                                          null != e && (0, Tt.JJ)(e.id);
                                      },
                                  })
                                : (0, E.jsx)(pc, {}),
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
    pE = (0, a.zZ)(u.X.PROFILE_CATEGORY, { buildLayout: () => [ph] });
var pS = i(294666);
let pT = () => {
        let e = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
            { avatarSrc: t, avatarDecorationSrc: i } = (0, S8.A)({ userId: e?.id, size: i4._3.SIZE_48 });
        return null == e
            ? null
            : (0, E.jsxs)("div", {
                  className: pS.a5,
                  children: [
                      (0, E.jsx)(i6.eu, {
                          src: t,
                          avatarDecoration: i,
                          size: i4._3.SIZE_48,
                          "aria-label": j.intl.string(j.t.lqaIxI),
                      }),
                      (0, E.jsxs)("div", {
                          className: pS.FS,
                          children: [
                              (0, E.jsx)(ei.E, {
                                  color: "text-strong",
                                  variant: "text-md/medium",
                                  lineClamp: 1,
                                  children: e.globalName ?? e.username,
                              }),
                              (0, E.jsxs)("div", {
                                  className: pS.Fk,
                                  children: [
                                      (0, E.jsx)(ei.E, {
                                          variant: "text-sm/normal",
                                          color: "currentColor",
                                          lineClamp: 1,
                                          children: j.intl.string(j.t.Ip9nBS),
                                      }),
                                      (0, E.jsx)(ur.R, { size: "xxs", color: "currentColor" }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
    },
    px = (0, a.t_)(u.X.PROFILE_PANEL, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        notice: { stores: [S4.A], element: S6.A },
        initialize: () => () =>
            sr.h.wait(() => {
                (0, S3.F7)();
            }),
        buildLayout: () => [pE],
    }),
    pp = (0, a.i4)(u.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        icon: pN,
        StronglyDiscouragedCustomComponent: pT,
        usePredicate: () => !(0, S7.X)("user_settings_sidebar"),
        buildLayout: () => [px],
    }),
    pf = (0, a.i4)(u.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        icon: pN,
        StronglyDiscouragedCustomComponent: pT,
        usePredicate: () => (0, S7.X)("user_settings_sidebar"),
        onClick: () => {
            let e = cy.default.getId();
            (0, S5.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function pN() {
    let e = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: i } = (0, S8.A)({ userId: e?.id, size: i4._3.SIZE_48 });
    return (0, E.jsx)(i6.eu, { src: t, avatarDecoration: i, size: i4._3.SIZE_20, "aria-hidden": !0 });
}
let p_ = (0, a.WI)(u.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [pp, pf] });
var pI = i(98207),
    pC = (i(204925), i(818348));
let pb = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, Y.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([i.e("40933"), i.e("19623"), i.e("21007")]).then(i.bind(i, 888363));
            return (i) => (0, E.jsx)(t, { claimRequired: e, ...i });
        },
        { onCloseRequest: e ? pC.tE : null, onCloseCallback: t },
    );
};
var pv = i(940856),
    py = i(36149),
    pj = i(207560);
function pO(e) {
    let t = (0, pj.fk)(),
        i = (0, py.b8)(),
        n = (0, py.yM)(),
        s = (0, py.Y2)();
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
var pR = i(516761);
function pL() {
    let e = j.intl.string(j.t.XxRj7f);
    return (0, E.jsxs)(ei.E, {
        variant: "text-md/medium",
        children: [
            `${e} \u{2022} `,
            j.intl.format(pR.default.WM5adV, {
                handleOnHelpUrlHook: () => window.open(tN.A.getArticleURL(eA.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank"),
            }),
        ],
    });
}
let pD = (0, a.Tf)(u.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, {
        usePredicate: () => pO("edit"),
        useTitle: () => j.intl.string(j.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: h._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: pL }),
        useLabel: () => j.intl.string(j.t.bt75uw),
        onClick: function () {
            (0, Y.openModalLazy)(async () => {
                let { default: e } = await i.e("45361").then(i.bind(i, 151080));
                return (t) => (0, E.jsx)(e, { ...t });
            });
        },
    }),
    pP = (0, a.E2)(u.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, {
        usePredicate: () => pO("info"),
        useSearchTerms: () => [j.intl.string(j.t["/52UYy"])],
        Component: function () {
            return (0, E.jsx)(sw.D, {
                label: j.intl.string(j.t["/52UYy"]),
                layout: "horizontal",
                children: (0, E.jsxs)(Z.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "end",
                    gap: "md",
                    children: [
                        (0, E.jsx)(ei.E, { variant: "text-md/medium", children: j.intl.string(j.t.XxRj7f) }),
                        (0, E.jsx)("div", {
                            style: { visibility: "hidden" },
                            children: (0, E.jsx)(eG.$, {
                                onClick: pC.tE,
                                text: j.intl.string(j.t.bt75uw),
                                "aria-hidden": !0,
                            }),
                        }),
                    ],
                }),
            });
        },
    });
var pG = i(139716),
    pM = i(847599);
function pU() {
    return (0, py.yM)() ? j.intl.string(j.t.sK0dmH) : j.intl.string(j.t.lKDPGA);
}
let pV = (0, a.Tf)(u.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, {
        usePredicate: () => pO("verify"),
        useTitle: () => j.intl.string(j.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: h._1.TEXT, useText: pU }),
        useLabel: function () {
            return (0, py.yM)() ? j.intl.string(j.t["9KiIz6"]) : j.intl.string(j.t.DVywUB);
        },
        onClick: () => pG.A.showAgeVerificationGetStartedModal({ entryPoint: pM.q1.ACCOUNT_AGE_GROUP }),
    }),
    pk = (0, a.Tf)(u.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, g.bG)([io.default], () => io.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => j.intl.string(j.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: h._1.TEXT, useText: () => j.intl.string(j.t.qxk9zo) }),
        useLabel: () => j.intl.string(j.t.BleMPB),
        onClick: () => pb(),
    });
function pw(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function pF(e) {
    let [t, i] = e.split("@");
    return `${"*".repeat(t.length)}@${i}`;
}
function pB(e) {
    let { text: t, censor: i, revealLabel: n, hideLabel: s, redesign: l = !1 } = e,
        [r, a] = S.useState(!1),
        o = r ? t : i(t);
    return (0, E.jsxs)(Z.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        justify: l ? "end" : "start",
        children: [
            l ? (0, E.jsx)(ei.E, { variant: "text-md/medium", children: o }) : o,
            (0, E.jsx)(el.Q, {
                variant: "primary",
                textVariant: l ? "text-md/medium" : "text-sm/medium",
                "aria-label": r ? s : n,
                onClick: () => a(!r),
                text: r ? j.intl.string(j.t.fgq1gs) : j.intl.string(j.t.dcztdU),
            }),
        ],
    });
}
function pz() {
    let e = (0, g.bG)([io.default], () => io.default.getCurrentUser()?.email);
    return null == e
        ? (0, E.jsx)(ei.E, { variant: "text-md/medium", children: j.intl.string(j.t["8SfTN/"]) })
        : (0, E.jsx)(pB, {
              text: e,
              censor: pF,
              revealLabel: j.intl.string(j.t["Zvx+yV"]),
              hideLabel: j.intl.string(j.t.nqTD4d),
              redesign: !0,
          });
}
let pX = (0, a.Tf)(u.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, g.bG)([io.default], () => io.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => j.intl.string(j.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: h._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: pz }),
    useLabel: function () {
        return null == (0, g.bG)([io.default], () => io.default.getCurrentUser()?.email)
            ? j.intl.string(j.t.OYkgVk)
            : j.intl.string(j.t.bt75uw);
    },
    useAriaLabel: function () {
        return null == (0, g.bG)([io.default], () => io.default.getCurrentUser()?.email)
            ? j.intl.string(j.t["pvBD+W"])
            : j.intl.string(j.t["8peUT0"]);
    },
    onClick: function () {
        (0, Y.openModalLazy)(async () => {
            let { default: e } = await Promise.all([i.e("97570"), i.e("20577"), i.e("65861")]).then(i.bind(i, 97060));
            return (t) => (0, E.jsx)(e, { ...t });
        });
    },
});
var pY = i(557722),
    pH = i(53516);
function pK() {
    let e = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, E.jsx)(ei.E, { variant: "text-md/medium", children: j.intl.string(j.t.I5kDqj) })
        : (0, E.jsx)(Z.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, E.jsx)(pB, {
                  text: t,
                  censor: pw,
                  revealLabel: j.intl.string(j.t.eY3xlT),
                  hideLabel: j.intl.string(j.t["jllbv+"]),
                  redesign: !0,
              }),
          });
}
let pW = (0, a.Tf)(u.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, g.bG)([io.default], () => io.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => j.intl.string(j.t.kerONq),
    useAriaLabel: function () {
        return null == (0, g.bG)([io.default], () => io.default.getCurrentUser()?.phone)
            ? j.intl.string(j.t["SfUuE+"])
            : j.intl.string(j.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: h._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: pK }),
    useLabel: function () {
        return null == (0, g.bG)([io.default], () => io.default.getCurrentUser()?.phone)
            ? j.intl.string(j.t.OYkgVk)
            : j.intl.string(j.t.bt75uw);
    },
    onClick: function () {
        null == io.default.getCurrentUser()?.phone
            ? (0, Y.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.all([
                          i.e("58735"),
                          i.e("4782"),
                          i.e("89545"),
                          i.e("11493"),
                          i.e("84704"),
                          i.e("86197"),
                      ]).then(i.bind(i, 615715));
                      return (t) => (0, E.jsx)(e, { reason: pY.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: pH.V },
              )
            : (0, Y.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([i.e("25866"), i.e("63314")]).then(i.bind(i, 660740));
                  return (t) => (0, E.jsx)(e, { ...t });
              });
    },
});
function pZ() {
    let e = (0, g.bG)([io.default], () => io.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function pq() {
    let e = (0, Tm.EC)(),
        t = e?.nick?.[0] ?? null,
        i = (0, g.bG)([io.default], () => io.default.getCurrentUser());
    if (null == i) return null;
    let n = i.hasUniqueUsername() ? i.username : `${i.username}#${i.discriminator}`;
    return (0, E.jsxs)(E.Fragment, {
        children: [
            (0, E.jsx)(ei.E, { variant: "text-md/medium", children: n }),
            null != t &&
                (0, E.jsx)(tr.m, {
                    __unsupportedReactNodeAsText: t,
                    "aria-label": !1,
                    children: (0, E.jsx)(lU.E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: es.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let pQ = (0, a.Tf)(u.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => j.intl.string(j.t.qqhR3L),
        useTrailingContent: () => ({ type: h._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: pq }),
        useLabel: () => j.intl.string(j.t.bt75uw),
        useAriaLabel: () => j.intl.string(j.t.JECa91),
        useSubtitle: () => (pZ() ? j.intl.string(j.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: pZ,
        onClick: function () {
            (0, Y.openModalLazy)(async () => {
                let { default: e } = await Promise.all([i.e("38408"), i.e("20429"), i.e("20969")]).then(
                    i.bind(i, 667792),
                );
                return (t) => (0, E.jsx)(e, { ...t });
            });
        },
    }),
    pJ = (0, a.zZ)(u.X.ACCOUNT_INFO_CATEGORY, {
        usePredicate: () => (0, g.bG)([io.default], () => null != io.default.getCurrentUser()),
        useTitle: () => j.intl.string(j.t.apNo4l),
        useInlineNotice: function () {
            let e = (0, g.bG)([io.default], () => io.default.getCurrentUser());
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
                            button: { useText: () => j.intl.string(j.t.lm1UKt), onClick: () => (0, pv.S)(e) },
                        }
                  : {
                        type: h.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        useTitle: () => j.intl.string(j.t["/3qnL/"]),
                        useText: () => j.intl.string(j.t.qKs3vg),
                        button: { useText: () => j.intl.string(j.t["7psymi"]), onClick: () => pb() },
                    };
        },
        buildLayout: () => [pQ, pk, pX, pW, pV, pD, pP],
    });
var p$ = i(398177);
let p0 = (0, a.Tf)(u.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
    useTitle: () => j.intl.string(j.t["CIGa+7"]),
    useLabel: () => j.intl.string(j.t.bt75uw),
    useAriaLabel: () => j.intl.string(j.t["FRep5/"]),
    useVariant: () => "secondary",
    onClick: () => {
        (0, Y.openModal)((e) => (0, E.jsx)(p$.default, { ...e, onSuccess: () => e.onClose() }));
    },
});
var p1 = i(200921);
let p2 = [];
function p3() {
    p2 = [];
}
class p6 extends g.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return p2;
    }
}
let p4 = new p6(sr.h, {
    LOGOUT: p3,
    LOGIN_SUCCESS: p3,
    FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessions: t } = e;
        p2 = t.map((e) => ({ ...e, approx_last_used_time: new Date(e.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessionIdHashes: t } = e,
            i = [...p2],
            n = !1;
        for (let e of t) {
            let t = i.findIndex((t) => t.id_hash === e);
            t >= 0 && (i.splice(t, 1), (n = !0));
        }
        if (!n) return !1;
        p2 = i;
    },
});
function p7() {
    let e = (0, g.cf)([p4], () => p4.getSessions());
    return S.useMemo(() => {
        let t = [...e],
            i = null,
            n = cy.default.getAuthSessionIdHash();
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
function p8(e) {
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? j.intl.string(j.t.TXCmfL) : rw()(e).fromNow();
}
var p5 = i(176524),
    p9 = i(646270),
    fe = i(738678),
    ft = i(490173);
function fi(e) {
    let { icon: t, label: i, subLabel: n, description: s, children: l, muted: r } = e;
    return (0, E.jsxs)(Z.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, E.jsx)(p5.A, { Icon: t, color: r ? es.A.colors.ICON_MUTED : "currentColor" }),
            (0, E.jsxs)(Z.B, {
                direction: "vertical",
                gap: "xxs",
                children: [
                    (0, E.jsxs)(Z.B, {
                        direction: "horizontal",
                        gap: "xs",
                        children: [
                            (0, E.jsx)(ei.E, { variant: "text-md/semibold", color: "text-strong", children: i }),
                            null != i &&
                                null != n &&
                                (0, E.jsx)(ei.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    "aria-hidden": !0,
                                    children: "\u2022",
                                }),
                            null != n &&
                                (0, E.jsx)(ei.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                        ],
                    }),
                    (0, E.jsx)(ei.E, { variant: "text-sm/normal", color: "text-muted", children: s }),
                ],
            }),
            l,
        ],
    });
}
function fn(e) {
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
                            return { text: j.intl.string(j.t.cDHCNY), icon: to.k };
                        case "ios":
                        case "android":
                            return { text: e, icon: p9.u };
                        case "horizon os":
                            return { text: e, icon: fe.G };
                        default:
                            return { text: e, icon: to.k };
                    }
                })(e.client_info?.os);
            return { location: i, platform: n, os: s, Icon: l, lastActive: t ? null : p8(e.approx_last_used_time) };
        })(t, i),
        o = [n, a].filter(N.Vq);
    return (0, E.jsx)(fi, {
        icon: r,
        label: l,
        subLabel: s,
        description: o.join(" \xb7 "),
        children:
            !i &&
            (0, E.jsx)(et.D, {
                className: ft.X,
                onClick: () => (0, p1.U0)(t.id_hash),
                "aria-label": j.intl.string(j.t.E4MJNt),
                children: (0, E.jsx)(gI.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function fs(e) {
    let { title: t, children: i } = e,
        n = S.useId();
    return (0, E.jsxs)(Z.B, {
        role: "group",
        "aria-labelledby": n,
        gap: "xl",
        padding: { top: 8, bottom: 8 },
        children: [
            (0, E.jsx)(eP.D, { id: n, variant: "heading-md/semibold", color: "text-muted", children: t }),
            (0, E.jsx)(Z.B, { role: "list", gap: "xl", children: i }),
        ],
    });
}
let fl = (0, a.E2)(u.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            let { currentSession: e } = p7();
            return null == e
                ? (0, E.jsx)(du.y, {})
                : (0, E.jsx)(fs, {
                      title: j.intl.string(j.t.LLS19o),
                      children: (0, E.jsx)(fn, { session: e, current: !0 }),
                  });
        },
        useSearchTerms: () => [],
    }),
    fr = (0, a.E2)(u.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = p7();
            return (0, E.jsx)(sw.D, {
                label: j.intl.string(j.t.Vij32M),
                description: j.intl.string(j.t.OTXyaf),
                children: (0, E.jsx)(eG.$, {
                    onClick: () => (0, p1.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: j.intl.string(j.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [j.intl.string(j.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = p7();
            return e.length > 0;
        },
    });
var fa = i(766928);
function fo() {
    return (0, E.jsx)(fi, {
        icon: fa.W,
        label: j.intl.string(j.t.iUa0sn),
        description: j.intl.format(j.t["044+8i"], {
            onClick: () =>
                (0, eH.openUserSettings)(u.X.ACCOUNT_PANEL, { analyticsLocations: [e1.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
let fu = (0, a.E2)(u.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = p7(),
                t = (0, g.bG)([io.default], () => io.default.getCurrentUser());
            return (0, E.jsxs)(fs, {
                title: j.intl.string(j.t.xx1MWc),
                children: [
                    e.map((e) => (0, E.jsx)(fn, { session: e }, e.id_hash)),
                    t?.mfaEnabled ? null : (0, E.jsx)(fo, {}),
                ],
            });
        },
        useSearchTerms: () => [j.intl.string(j.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = p7(),
                t = (0, g.bG)([io.default], () => io.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    fd = (0, a.zZ)(u.X.SESSIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.mEndXM),
        useSubtitle: () => j.intl.string(j.t.b7ZpTM),
        initialize: () => {
            (0, p1.GY)();
        },
        buildLayout: () => [fl, fu, fr],
        useSearchTerms: () => [
            j.intl.string(j.t["+1h0k/"]),
            j.intl.string(j.t.LLS19o),
            j.intl.string(j.t.xx1MWc),
            j.intl.string(j.t.lSWsrd),
        ],
    }),
    fc = (0, a.t_)(u.X.SESSIONS_PANEL, {
        useTitle: () => j.intl.string(j.t.mEndXM),
        useObscuredNotice: dl.L,
        buildLayout: () => [fd],
    }),
    fg = (0, a.t0)(u.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [fc],
        initialize: () => {
            (0, p1.GY)();
        },
        useTrailingDecoration: () => ({
            type: h.xn.TEXT,
            useText: () => {
                let { currentSession: e, otherSessions: t } = p7(),
                    i = t.length + +(null != e);
                return i > 0 ? j.intl.formatToPlainString(j.t.G7zwOk, { count: i }) : j.intl.string(j.t.MKDeyL);
            },
        }),
    });
var fm = i(464477);
function fA(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == e
        ? null
        : e.hasAnyStaffLevel()
          ? t
              ? j.intl.string(j.t.YJGvuD)
              : j.intl.string(j.t["3iKih7"])
          : e.hasFlag(eA.nhx.PARTNER)
            ? t
                ? j.intl.string(j.t["9UucjT"])
                : j.intl.string(j.t.Sq6Q1u)
            : null == e.email
              ? t
                  ? j.intl.string(j.t["9VWpT9"])
                  : j.intl.string(j.t.LfCBZG)
              : null;
}
function fh() {
    return (0, u$.bG)([io.default], () => {
        let e = io.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
var fE =
    (((r = {}).AVAILABLE = "available"),
    (r.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (r.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    r);
function fS() {
    let e = (0, u$.bG)([io.default], () => io.default.getCurrentUser()?.verified);
    return fm.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function fT() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, u$.bG)([ed.A, xe.A, io.default], () =>
        io.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? j.intl.string(j.t.hxf9fX)
                : j.intl.string(j.t["3iKih7"])
            : ed.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(eA.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        xe.A.can(eA.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? j.intl.string(j.t.OYTCUh)
                  : j.intl.string(j.t.HC8uSZ)
              : null,
    );
}
var fx = i(466034);
let fp = (0, a.Tf)(u.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => j.intl.string(j.t.lQsY7B),
        useSubtitle: () => fT(!0),
        useDisabled: () => null !== fT(!0),
        useLabel: () => j.intl.string(j.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, g.bG)([cy.default], () => cy.default.hasTOTPEnabled()),
                t = fS() === fE.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, sc.A)({
                title: j.intl.string(j.t["D+aE7g"]),
                subtitle: j.intl.string(j.t.EA4ZEk),
                variant: "critical",
                confirmText: j.intl.string(j.t.N86XcP),
                onConfirm: () => pI.A.disable(),
            }),
    }),
    ff = (0, a.zZ)(u.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => j.intl.string(j.t.RumMFo),
        useSubtitle: () => j.intl.string(j.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, g.bG)([cy.default], () => cy.default.hasTOTPEnabled()),
                t = fS() === fE.AVAILABLE;
            if (!e && t)
                return {
                    type: h.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: h.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: j.intl.string(j.t.cTNUeD),
                            onClick: fx.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (fS()) {
                case fE.UNAVAILABLE_NO_CRYPTO:
                    return { type: h.lT.INLINE_NOTICE, noticeType: "info", useText: () => j.intl.string(j.t.PhHhsj) };
                case fE.UNAVAILABLE_UNVERIFIED:
                    return {
                        type: h.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        useText: () => j.intl.string(j.t.uggF7o),
                    };
                case fE.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [fp],
    });
var fN = i(670492),
    f_ = i(32880),
    fI = i(663417),
    fC = i(658675),
    fb = i(900686);
function fv() {
    (0, Y.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(i.bind(i, 662758));
        return (t) =>
            (0, E.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    pI.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                        var t;
                        return (
                            (t = e),
                            void (0, Y.openModalLazy)(
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
var fy = i(203082);
function fj(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function fO() {
    let e = fN.A.getVerificationKey();
    try {
        await pI.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, EB.P0)({
            message: e.body?.message ?? j.intl.string(j.t.F8FvUy),
            type: EX.Ck.FAILURE,
            id: "backup-code-regen-failed",
        });
    }
}
function fR(e) {
    let {
            code: { code: t, consumed: i },
        } = e,
        n = fj(t),
        s = S.useRef(null),
        l = (0, E.jsxs)(E.Fragment, {
            children: [(0, E.jsx)(fC.P, { checked: i }), (0, E.jsx)(ei.E, { variant: "text-md/normal", children: n })],
        });
    return cD.p5
        ? (0, E.jsx)(et.D, {
              tag: "li",
              className: e6()(fy.aY, fy.vk),
              innerRef: s,
              onKeyDown: (e) => {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, cD.C)(n), s?.current?.focus());
              },
              onClick: () => {
                  (0, cD.C)(n),
                      (0, EB.P0)({ message: j.intl.string(j.t.mGZ66D), type: EX.Ck.SUCCESS, id: "backup-code-copied" });
              },
              children: l,
          })
        : (0, E.jsx)("li", { className: fy.aY, children: l });
}
let fL = (0, a.zZ)(u.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.fC9qV0),
        useSubtitle: () =>
            (0, g.bG)([fN.A], () => fN.A.getBackupCodes().length > 0)
                ? j.intl.format(j.t.tp7zEK, {})
                : j.intl.string(j.t.LoOi4S),
        usePredicate: fh,
        buildLayout: () => [fD],
    }),
    fD = (0, a.E2)(u.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.fC9qV0)],
        Component: function () {
            let e = (0, g.bG)([fN.A], () => fN.A.getBackupCodes()),
                t = S.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: i } = e;
                                return `* ${fj(t)}` + (i ? ` (${j.intl.string(j.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, E.jsx)(eG.$, { text: j.intl.string(j.t.Jc2myK), size: "sm", variant: "secondary", onClick: fv })
                : (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsx)("ul", {
                              className: fy.E5,
                              children: e.map((e) => (0, E.jsx)(fR, { code: e }, e.code)),
                          }),
                          (0, E.jsxs)(a$.e, {
                              size: "sm",
                              children: [
                                  (0, E.jsx)(fb.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, E.jsx)(eG.$, {
                                          text: j.intl.string(j.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: f_.s,
                                      }),
                                  }),
                                  (0, E.jsx)(eG.$, {
                                      text: j.intl.string(j.t["3x962E"]),
                                      variant: "secondary",
                                      icon: fI.f,
                                      onClick: fO,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    fP = (0, a.Tf)(u.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => j.intl.string(j.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = S.useState(!1),
                i = (0, g.bG)([io.default], () => io.default.getCurrentUser()?.phone);
            return null == i
                ? null
                : j.intl.format(e ? j.t["xDBk/I"] : j.t.bnKdnl, {
                      phone: e ? i : i.slice(-4),
                      toggleButton: () =>
                          (0, E.jsx)(el.Q, {
                              text: e ? j.intl.string(j.t.fgq1gs) : j.intl.string(j.t.dcztdU),
                              onClick: () => t(!e),
                          }),
                  });
        },
        useLabel: () => j.intl.string(j.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => (0, g.bG)([io.default], () => io.default.getCurrentUser()?.hasFlag(eA.nhx.MFA_SMS) ?? !1),
        onClick: () =>
            void (0, Y.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 662758));
                return (t) =>
                    (0, E.jsx)(e, {
                        ...t,
                        handleSubmit: pI.A.disableSMS,
                        title: j.intl.string(j.t.KLWnit),
                        children: j.intl.string(j.t["W0/Duf"]),
                    });
            }),
    }),
    fG = (0, a.zZ)(u.X.SMS_AUTH_CATEGORY, {
        useTitle: () => j.intl.string(j.t.wuHuI5),
        useSubtitle: () => (0, g.bG)([io.default], () => fA(io.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, g.bG)([io.default], () => io.default.getCurrentUser()?.hasFlag(eA.nhx.MFA_SMS) ?? !1),
                t = (0, g.bG)([io.default], () => null != fA(io.default.getCurrentUser()));
            if (!e)
                return {
                    type: h.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: h.UV.BUTTON,
                            id: "sms-setup-button",
                            text: j.intl.string(j.t.Age7yU),
                            onClick: fM,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = fS(),
                t = fh(),
                i = (0, g.bG)([cy.default], () => cy.default.hasTOTPEnabled());
            return e === fE.AVAILABLE && t && i;
        },
        buildLayout: () => [fP],
    });
function fM() {
    let e = io.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            (t = { reason: pY.d.USER_SETTINGS_UPDATE, onAddedPhone: pI.A.enableSMS }),
                (0, Y.openModalLazy)(
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
                    { modalKey: pH.V },
                );
        } else pI.A.enableSMS();
}
var fU = i(665671),
    fV = i(442433),
    fk = i(917136),
    fw = i(976910),
    fF = i(108666);
function fB(e) {
    let { credential: t } = e;
    return (0, E.jsxs)("li", {
        className: fF.e,
        children: [
            (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(ei.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, E.jsx)(ei.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: j.intl.format(j.t["7JgxF5"], { lastUsed: p8(t.last_used) }),
                        }),
                ],
            }),
            (0, E.jsx)(lR.K, {
                icon: mI.j,
                variant: "icon-only",
                size: "sm",
                "aria-label": j.intl.string(j.t["+nrTbK"]),
                onClick: (e) => {
                    (0, fV.L3)(e, async () => {
                        let { default: e } = await i.e("32529").then(i.bind(i, 41e3));
                        return (i) => (0, E.jsx)(e, { credential: t, ...i });
                    });
                },
            }),
        ],
    });
}
let fz = (0, a.zZ)(u.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.IBq4Y3),
        useSubtitle: () => j.intl.string(j.t.yK9edS),
        useHeaderDecoration: function () {
            if (fS() === fE.AVAILABLE)
                return {
                    type: h.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: h.UV.BUTTON,
                            id: "add-security-key-button",
                            text: j.intl.string(j.t["Tzs/fw"]),
                            icon: ao.j,
                            onClick: fU.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (fS()) {
                    case fE.UNAVAILABLE_NO_CRYPTO:
                        return {
                            type: h.lT.INLINE_NOTICE,
                            noticeType: "info",
                            useText: () => j.intl.string(j.t.bWCGI9),
                        };
                    case fE.UNAVAILABLE_UNVERIFIED:
                        return {
                            type: h.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            useText: () => j.intl.string(j.t.uggF7o),
                        };
                    case fE.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [fX],
    }),
    fX = (0, a.E2)(u.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [j.intl.string(j.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, g.cf)([fw.A], () => ({
                hasFetchedCredentials: fw.A.hasFetchedCredentials(),
                credentials: fw.A.getCredentials(),
            }));
            return (S.useEffect(() => {
                t || fk.JQ();
            }, [t]),
            t)
                ? (0, E.jsx)(Z.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, E.jsx)(fB, { credential: e }, e.id)),
                  })
                : (0, E.jsx)(du.y, {});
        },
    }),
    fY = (0, a.t_)(u.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => j.intl.string(j.t.m0FidJ),
        buildLayout: () => [fz, ff, fG, fL],
    }),
    fH = (0, a.t0)(u.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => ({
            type: h.xn.TEXT,
            useText: () => (fh() ? j.intl.string(j.t.lQsY7B) : j.intl.string(j.t.WsUuTt)),
        }),
        buildLayout: () => [fY],
    }),
    fK = (0, a.zZ)(u.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => j.intl.string(j.t["0iH2vc"]),
        buildLayout: () => [p0, fH, fg],
    });
var fW = i(308645),
    fZ = i(271995),
    fq = i(855267);
let fQ = (0, a.E2)(u.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["16r9jm"])],
        Component: fq.A,
    }),
    fJ = (0, a.zZ)(u.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [fQ] }),
    f$ = (0, a.t_)(u.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => j.intl.string(j.t["16r9jm"]),
        buildLayout: () => [fJ],
    }),
    f0 = (0, a.zZ)(u.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: () => j.intl.string(j.t["16r9jm"]),
        buildLayout: () => [f1],
    }),
    f1 = (0, a.t0)(u.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: fZ.$b,
        useSubtitle: fZ.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: i } = (0, fZ._k)();
            return { type: h.Xy.ICON, icon: i, color: e, backgroundColor: t };
        },
        initialize: () => {
            fW.Yn();
        },
        buildLayout: () => [f$],
    });
var f2 = i(834981),
    f3 = i(840387),
    f6 = i(986922),
    f4 = i(602339);
let f7 = (0, a.E2)(u.X.FAMILY_CENTER_SETTING, {
        Component: f6.p,
        useSearchTerms: () => [
            j.intl.string(f4.default.RZqaJn),
            j.intl.string(f4.default.bdBmqy),
            j.intl.string(f4.default["gVWG+6"]),
            j.intl.string(f4.default.ahKIJO),
            j.intl.string(f4.default["8SLtqb"]),
        ],
    }),
    f8 = (0, a.zZ)(u.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [f7] }),
    f5 = (0, a.t_)(u.X.FAMILY_CENTER_PANEL, {
        useTitle: () => j.intl.string(f4.default.RZqaJn),
        buildLayout: () => [f8],
    }),
    f9 = (0, a.zZ)(u.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => j.intl.string(f4.default.RZqaJn),
        usePersistentBadge: function () {
            return S.useMemo(() => ({ badgeType: h.Xi.COUNT, useCount: f2.VT }), []);
        },
        buildLayout: () => [Ne],
    }),
    Ne = (0, a.t0)(u.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, f2.Li)() ? j.intl.string(f4.default.IcMQUP) : j.intl.string(f4.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, f3.Z)(),
                t = (0, f2.Li)();
            return e
                ? t
                    ? j.intl.string(f4.default.G8lHFU)
                    : j.intl.string(f4.default.uOLNEZ)
                : j.intl.string(f4.default.Z53oSM);
        },
        buildLayout: () => [f5],
    });
var Nt = i(425587),
    Ni = i(662758);
function Nn(e) {
    if (e.body.code === eA.t02.INVALID_PASSWORD) throw e;
    (0, aq.A)({ title: j.intl.string(j.t.LX0nT8), subtitle: e.body.message });
}
async function Ns() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = io.default.getCurrentUser();
    if (null == t) return;
    let i = [];
    try {
        i = (await Nt.A.fetchTeams(!0)).body;
    } catch {}
    i.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, aq.A)({
              title: j.intl.string(j.t["Y++oNe"]),
              subtitle: j.intl.format(j.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : ed.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, aq.A)({ title: j.intl.string(j.t.vJiTOL), subtitle: j.intl.string(j.t.UyVVan) })
          : t.isClaimed()
            ? (0, Y.openModal)((t) =>
                  (0, E.jsx)(Ni.default, {
                      ...t,
                      handleSubmit: (t) => (0, S3.U_)(t, e).then(eA.tEg, Nn),
                      title: e ? j.intl.string(j.t.xca2ts) : j.intl.string(j.t.goXv9g),
                      actionText: e ? j.intl.string(j.t["8lQ2rR"]) : j.intl.string(j.t.jf5GGb),
                      variant: "critical-primary",
                      children: e ? j.intl.string(j.t.FB4H1D) : j.intl.string(j.t.gk7h32),
                  }),
              )
            : (0, sc.A)({
                  title: j.intl.string(j.t.xca2ts),
                  subtitle: j.intl.string(j.t.FB4H1D),
                  confirmText: j.intl.string(j.t["8lQ2rR"]),
                  onConfirm: () => (0, S3.U_)("", !0),
              });
}
let Nl = (0, a.Tf)(u.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => j.intl.string(j.t["gIpzR+"]),
        useSubtitle: () => j.intl.string(j.t.Bd6dOf),
        useLabel: () => j.intl.string(j.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => Ns(!0),
    }),
    Nr = (0, a.Tf)(u.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => j.intl.string(j.t["p/Tjtp"]),
        useSubtitle: () => j.intl.string(j.t.YvDmKb),
        useLabel: () => j.intl.string(j.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => Ns(!1),
        usePredicate: () => {
            let e = (0, g.bG)([io.default], () => io.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    Na = (0, a.zZ)(u.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [Nr, Nl] }),
    No = (0, a.t_)(u.X.ACCOUNT_PANEL, {
        useTitle: () => j.intl.string(j.t["ldCE/p"]),
        initialize: function () {
            return () => {
                pI.A.clearBackupCodes(), (0, S3.Uo)();
            };
        },
        useObscuredNotice: dl.L,
        buildLayout: () => [pJ, fK, f0, f9, Na],
    }),
    Nu = (0, a.i4)(u.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["ldCE/p"]),
        icon: AY.n,
        buildLayout: () => [No],
    });
var Nd = i(323384);
let Nc = (0, a.zZ)(u.X.AUTHORIZED_APPS_CATEGORY, {
        buildLayout: () => [Se],
        initialize: () => (
            E5.A.fetch(),
            () => {
                E9.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    Ng = (0, a.t_)(u.X.AUTHORIZED_APPS_PANEL, {
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        useObscuredNotice: dl.L,
        buildLayout: () => [Nc],
    }),
    Nm = (0, a.i4)(u.X.AUTHORIZED_APPS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        icon: Nd.k,
        buildLayout: () => [Ng],
    });
var NA = i(176781),
    Nh = i(611371);
let NE = () =>
    (0, E.jsx)(tr.m, { asContainer: !0, text: j.intl.string(j.t["/fgfWh"]), children: (0, E.jsx)(Nh.A, {}) });
var NS = i(274372),
    NT = i(315240),
    Nx = i(696016);
let Np = (() => {
        let e = [Nx.wN];
        for (let t = 10; t <= Nx.qh; t += 10) e.push(t);
        return e[e.length - 1] !== Nx.qh && e.push(Nx.qh), e;
    })(),
    Nf = (0, a.sN)(u.X.CLIPS_AUTO_CLIP_STORAGE_LIMIT, {
        useTitle: () => j.intl.string(j.t.yfsrDI),
        useSubtitle: () => j.intl.string(j.t.vlDHdC),
        minValue: Nx.wN,
        maxValue: Nx.qh,
        getInitialValue: () => NS.Ay.getSettings().maxAutoClips,
        onValueRender: (e) => `${Math.floor(e)}`,
        asValueChanges: (e) => NT.e6(Math.floor(e)),
        markers: Np,
        onMarkerRender: (e) => `${Math.floor(e)}`,
    }),
    NN = (0, a.zD)(u.X.CLIPS_ENABLE_GAME_SIGNALS, {
        useTitle: () => j.intl.string(j.t.iV6KcI),
        useSubtitle: () => j.intl.string(j.t["dJ2tX+"]),
        useValue: () => (0, g.bG)([NS.Ay], () => NS.Ay.getSettings().clipSignals.enableGameSignals),
        setValue: (e) => {
            let t = NS.Ay.getSettings().clipSignals;
            NT.PW({ ...t, enableGameSignals: e });
        },
    }),
    N_ = (0, a.zZ)(u.X.CLIPS_AUTOMATIC_CLIPPING_CATEGORY, {
        useTitle: () => j.intl.string(j.t.sA0WKL),
        usePredicate: () => {
            let { enableAdvancedSignals: e } = l9.L_.useConfig({ location: "ClipsAutomaticClippingCategory" });
            return e;
        },
        buildLayout: () => [Nf, NN],
    }),
    NI = (0, a.zD)(u.X.CLIPS_DEBUG_TOOLTIPS, {
        useTitle: () => "Show clips debug tooltips",
        useSubtitle: () =>
            "Show overlay tooltips for the clips engine starting, enabled features, auto-clip signals, and save errors. Intended for development and testing.",
        useValue: () => (0, g.bG)([NS.Ay], () => NS.Ay.getSettings().debugTooltipsEnabled),
        setValue: (e) => NT.YP(e),
    }),
    NC = (0, a.zZ)(u.X.CLIPS_DEVELOPER_CATEGORY, {
        useTitle: () => "Developer",
        usePredicate: () =>
            (0, g.bG)([io.default], () => {
                let e = io.default.getCurrentUser();
                return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
            }),
        buildLayout: () => [NI],
    });
var Nb = i(753070);
let Nv = (0, a.Hn)(u.X.CLIPS_FRAME_RATE, {
    useTitle: () => j.intl.string(j.t["2wScL1"]),
    useSubtitle: () => j.intl.string(j.t["Rf9+fy"]),
    useValue: () => (0, g.bG)([NS.Ay], () => NS.Ay.getSettings().clipsQuality.frameRate),
    setValue: (e) => {
        let { clipsQuality: t } = NS.Ay.getSettings();
        NT.GS({ resolution: t.resolution, frameRate: e });
    },
    useOptions: () => [
        { id: "15", value: Nb.kn.FPS_15, label: j.intl.formatToPlainString(j.t.Qb44XH, { fps: Nb.kn.FPS_15 }) },
        { id: "30", value: Nb.kn.FPS_30, label: j.intl.formatToPlainString(j.t.Qb44XH, { fps: Nb.kn.FPS_30 }) },
        { id: "60", value: Nb.kn.FPS_60, label: j.intl.formatToPlainString(j.t.Qb44XH, { fps: Nb.kn.FPS_60 }) },
    ],
});
var Ny = i(372684);
let Nj = (0, a.E2)(u.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
    useSearchTerms: () => [j.intl.string(j.t.SIxrIF)],
    usePredicate: () => (0, g.bG)([NS.Ay], () => NS.Ay.getHardwareClassification()) === Ny.k9.BELOW_MINIMUM,
    Component: () => (0, E.jsx)(sm.A, { look: sm.k.WARNING, children: j.intl.string(j.t.SIxrIF) }),
});
var NO = i(158278);
let NR = (0, a.E2)(u.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [j.intl.string(j.t.pf54EU), j.intl.string(j.t["QyB/jK"])],
        Component: () => {
            let e = (0, g.bG)([eB.Ay], () => eB.Ay.getKeybindForAction(eA.hCu.SAVE_CLIP, !0));
            tz()(null != e, "Save clip keybind unset");
            let t = S.useCallback(
                (t) => {
                    tX.A.setKeybind({ ...e, shortcut: t });
                },
                [e],
            );
            return (0, E.jsx)(sw.D, {
                label: j.intl.string(j.t.pf54EU),
                description: j.intl.string(j.t["QyB/jK"]),
                layout: "horizontal",
                children: (0, E.jsx)("div", {
                    className: NO.g,
                    children: (0, E.jsx)(tY.A, { defaultValue: e.shortcut, onChange: t }),
                }),
            });
        },
    }),
    NL = (0, a.Hn)(u.X.CLIPS_LENGTH, {
        useTitle: () => j.intl.string(j.t.OgfUio),
        useSubtitle: () => j.intl.string(j.t.H7j4tY),
        useValue: () => (0, g.bG)([NS.Ay], () => NS.Ay.getSettings().clipsLength),
        setValue: (e) => NT.h$(e),
        useOptions: () => [
            { id: "30s", value: Nx.LX.SECONDS_30, label: j.intl.formatToPlainString(j.t["bTFv/3"], { count: 30 }) },
            { id: "1m", value: Nx.LX.MINUTES_1, label: j.intl.formatToPlainString(j.t.ICo9Nk, { count: 1 }) },
            { id: "2m", value: Nx.LX.MINUTES_2, label: j.intl.formatToPlainString(j.t.ICo9Nk, { count: 2 }) },
        ],
    }),
    ND = (0, a.E2)(u.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [j.intl.string(j.t["Z+MfqT"])],
        Component: () => (0, E.jsx)(sm.A, { look: sm.k.INFO, children: j.intl.string(j.t["Z+MfqT"]) }),
    }),
    NP = (0, a.Hn)(u.X.CLIPS_RESOLUTION, {
        useTitle: () => j.intl.string(j.t.aFudZJ),
        useSubtitle: () => j.intl.string(j.t.nIrkW5),
        useValue: () => (0, g.bG)([NS.Ay], () => NS.Ay.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = NS.Ay.getSettings();
            NT.GS({ resolution: e, frameRate: t.frameRate });
        },
        useOptions: () => [
            {
                id: "480p",
                value: Nb.on.RESOLUTION_480,
                label: j.intl.formatToPlainString(j.t.TEOC0I, { resolution: Nb.on.RESOLUTION_480 }),
            },
            {
                id: "720p",
                value: Nb.on.RESOLUTION_720,
                label: j.intl.formatToPlainString(j.t.TEOC0I, { resolution: Nb.on.RESOLUTION_720 }),
            },
            {
                id: "1080p",
                value: Nb.on.RESOLUTION_1080,
                label: j.intl.formatToPlainString(j.t.TEOC0I, { resolution: Nb.on.RESOLUTION_1080 }),
            },
            {
                id: "1440p",
                value: Nb.on.RESOLUTION_1440,
                label: j.intl.formatToPlainString(j.t.TEOC0I, { resolution: Nb.on.RESOLUTION_1440 }),
            },
            { id: "source", value: Nb.on.RESOLUTION_SOURCE, label: j.intl.string(j.t.XjXqzh) },
        ],
    }),
    NG = (0, a.E2)(u.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [j.intl.string(j.t["0U/hj7"]), j.intl.string(j.t["5zxkdo"])],
        usePredicate: l9.BW,
        Component: () => {
            let e = (0, g.bG)([eB.Ay], () => eB.Ay.getKeybindForAction(eA.hCu.SAVE_CLIP, !0)),
                t = (0, g.bG)([eB.Ay], () => eB.Ay.getKeybindForAction(eA.hCu.SAVE_SCREENSHOT, !0));
            tz()(null != e, "Save clip keybind unset"), tz()(null != t, "Save screenshot keybind unset");
            let i = S.useCallback(
                (e) => {
                    tX.A.setKeybind({ ...t, shortcut: e });
                },
                [t],
            );
            return (0, E.jsx)(sw.D, {
                label: j.intl.string(j.t["0U/hj7"]),
                description: j.intl.string(j.t["5zxkdo"]),
                layout: "horizontal",
                children: (0, E.jsx)("div", {
                    className: NO.g,
                    children: (0, E.jsx)(tY.A, { defaultValue: t.shortcut, onChange: i }),
                }),
            });
        },
    }),
    NM = (0, a.E2)(u.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [j.intl.string(j.t.s4773E), j.intl.string(j.t.svjwGh)],
        Component: () => {
            let e = (0, g.bG)([NS.Ay], () => NS.Ay.getSettings().storageLocation),
                t = S.useRef(!1),
                i = async () => {
                    if (!t.current) {
                        t.current = !0;
                        try {
                            let e = await ln.A.fileManager.showOpenDialog({
                                properties: ["openDirectory", "createDirectory"],
                            });
                            e.length > 0 && NT.HU(e[0]);
                        } finally {
                            t.current = !1;
                        }
                    }
                };
            return (0, E.jsx)(sw.D, {
                label: j.intl.string(j.t.s4773E),
                description: j.intl.string(j.t.svjwGh),
                layout: "horizontal",
                children: (0, E.jsx)(et.D, {
                    "aria-label": j.intl.formatToPlainString(j.t.iMONTj, { storageLocation: e }),
                    onClick: i,
                    children: (0, E.jsx)(lX.k, { tabIndex: -1, value: e, editable: !1, "aria-hidden": !0 }),
                }),
            });
        },
    });
var NU = i(572164);
let NV = (0, a.zD)(u.X.CLIPS_ENABLE, {
    useTitle: () => j.intl.string(j.t.h8rgrK),
    useSubtitle: () => j.intl.string(j.t["4Qw3NO"]),
    useValue: () => (0, NU.Et)(),
    setValue: (e) => NT.yO({ clipsEnabled: e, trackAnalytics: !0 }),
});
var Nk = i(915618);
let Nw = (0, a.zD)(u.X.CLIPS_ENABLE_DECOUPLED_CLIPPING, {
        useTitle: () => j.intl.string(j.t.yXvykv),
        useSubtitle: () => j.intl.string(j.t.YP3ujk),
        useValue: NU.XT,
        setValue: (e) => NT.fd({ enabled: e, trackAnalytics: !0 }),
        usePredicate: () => {
            let e = (0, eY.isWindows)(),
                t = (0, Nk.A)(lV.Ay);
            return e && t;
        },
    }),
    NF = (0, a.zD)(u.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => j.intl.string(j.t["3zwNf6"]),
        useSubtitle: () => j.intl.string(j.t.m4Cjj9),
        useValue: () => (0, g.bG)([NS.Ay], () => NS.Ay.getSettings().remindersEnabled),
        setValue: (e) => NT.Mt(e),
    }),
    NB = (0, a.zZ)(u.X.CLIPS_RECORDING_CATEGORY, {
        useTitle: () => j.intl.string(j.t.iIwmV5),
        buildLayout: () => [ND, Nj, NV, Nw, NF, NL, NP, Nv, NR, NG, NM],
    }),
    Nz = (0, a.t_)(u.X.CLIPS_PANEL, {
        useTitle: () => j.intl.string(j.t.z2jK6X),
        usePersistentBadge: () => ({
            badgeType: h.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            useCustomBadge: () => (0, E.jsx)(NE, {}),
        }),
        usePredicate: l9.sw,
        buildLayout: () => [NB, N_, NC],
    }),
    NX = (0, a.i4)(u.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.z2jK6X),
        icon: NA.x,
        buildLayout: () => [Nz],
    }),
    NY = (0, a.zZ)(u.X.CONNECTIONS_ADD_CONNECTIONS_CATEGORY, { buildLayout: () => [SK], useInlineNotice: SQ }),
    NH = (0, a.zZ)(u.X.CONNECTIONS_CONNECTED_ACCOUNTS_CATEGORY, { buildLayout: () => [SW] }),
    NK = (0, a.t_)(u.X.CONNECTIONS_PANEL, {
        useTitle: () => j.intl.string(j.t["3fe7U5"]),
        useObscuredNotice: dl.L,
        buildLayout: () => [NY, NH],
    }),
    NW = (0, a.i4)(u.X.CONNECTIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["3fe7U5"]),
        icon: h7.q,
        buildLayout: () => [NK],
    });
var NZ = i(875444);
function Nq(e, t) {
    let i = (0, g.bG)([Sv.default], () => Sv.default.getFetchState()),
        n = (0, g.bG)([Sv.default], () =>
            e ? Sv.default.getNewestTokensForNonChildrenApplications() : Sv.default.getNewestTokens(),
        ),
        s = S.useMemo(
            () => (null == n ? [] : n.filter((e) => (0, NZ.A)(e.application)).map((e) => e.application)),
            [n],
        );
    return (
        S.useEffect(() => {
            t || E5.A.fetch();
        }, [t]),
        { showLoadingIndicator: i !== Sv.FetchState.FETCHED && (null == n || 0 === n.length), slayerSdkApplications: s }
    );
}
var NQ = i(998382);
function NJ(e) {
    let { applications: t } = e,
        i = S.useMemo(() => t.sort((e, t) => dp.default.compare(t.id, e.id)), [t]),
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
                              ei.E,
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
                    a = nt.Ay.getApplicationIconURL({ id: r, icon: s });
                e.push(
                    (0, E.jsx)(
                        tr.m,
                        {
                            __unsupportedReactNodeAsText: l,
                            children: (0, E.jsx)("img", { src: a, "aria-label": l, className: NQ.Kk }),
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
                                className: NQ.lK,
                                children: (0, E.jsx)(ei.E, {
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
        className: NQ.wx,
        children: [
            (0, E.jsxs)("div", {
                className: NQ.kX,
                children: [
                    (0, E.jsx)(ei.E, { variant: "text-md/normal", color: "text-strong", children: n }),
                    (0, E.jsxs)(et.D, {
                        onClick: () => {
                            (0, eH.openUserSettings)(u.X.AUTHORIZED_APPS_PANEL);
                        },
                        className: NQ.bJ,
                        children: [
                            (0, E.jsx)(ei.E, {
                                variant: "text-xs/normal",
                                color: "interactive-text-default",
                                children: j.intl.format(j.t.oYaYOe, {}),
                            }),
                            (0, E.jsx)(tO._, {
                                size: "xxs",
                                color: es.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                className: NQ.g7,
                            }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)("div", { className: NQ.yF }),
            (0, E.jsx)("div", { className: NQ.lJ, children: s }),
        ],
    });
}
function N$() {
    return (0, E.jsxs)("div", {
        className: NQ.do,
        children: [
            (0, E.jsx)(ei.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: NQ.xV,
                children: j.intl.string(j.t["+0U77d"]),
            }),
            (0, E.jsx)(ei.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: j.intl.format(j.t.V8wClM, {
                    helpdeskArticle: tN.A.getArticleURL(eA.MVz.SOCIAL_LAYER_CONNECTIONS),
                }),
            }),
        ],
    });
}
function N0(e) {
    let { applications: t } = e;
    return t.length > 0 ? (0, E.jsx)(NJ, { applications: t }) : (0, E.jsx)(N$, {});
}
let N1 = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES, {
    useSearchTerms: () => [j.intl.string(j.t.YpCiMt)],
    Component: function () {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = Nq(!0);
        return e ? (0, E.jsx)(du.y, {}) : (0, E.jsx)(N0, { applications: t });
    },
});
function N2() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = Nq(!0, !0);
    return !e && t.length > 0;
}
let N3 = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => ((0, o.SV)("GameFriendDMSetting") ? j.intl.string(j.t.W8JtfT) : j.intl.string(j.t.XpBObB)),
        useSubtitle: () =>
            (0, o.SV)("GameFriendDMSetting")
                ? j.intl.string(j.t.a99KKy)
                : j.intl.format(j.t.oZsHTD, { helpdeskArticle: tN.A.getArticleURL(eA.MVz.SLAYER_GAME_FRIENDS) }),
        useSearchTerms: () => [j.intl.string(j.t["Uv/eTx"])],
        useValue: () => L.Zk.useSetting(),
        setValue: (e) => L.Zk.updateSetting(e),
        usePredicate: N2,
    }),
    N6 = (0, a.Qx)(u.X.CONTENT_AND_SOCIAL_IN_GAME_DMS_SETTING, {
        useTitle: () => j.intl.string(j.t["ms+Tme"]),
        useSubtitle: () =>
            (0, o.SV)("InGameDMsSetting") ? j.intl.string(j.t["0ryspy"]) : j.intl.string(j.t["4NN4+/"]),
        useOptions: () => [
            { name: j.intl.string(j.t.JIFnN9), value: X.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
            { name: j.intl.string(j.t.rRdsk1), value: X.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
            {
                name: (0, o.SV)("InGameDMsSetting") ? j.intl.string(j.t.IVRPMX) : j.intl.string(j.t.AolKwN),
                value: X.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE,
            },
        ],
        useValue: () => {
            let e = L.TA.useSetting();
            return e === X.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? X.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e;
        },
        setValue: (e) => L.TA.updateSetting(e),
        usePredicate: N2,
    }),
    N4 = (0, a.zZ)(u.X.CONNECTED_GAMES_CATEGORY, {
        useSearchTerms: () => [j.intl.string(j.t.YpCiMt)],
        buildLayout: () => [N1, N3, N6],
    });
var N7 = i(687123),
    N8 = i(444802),
    N5 = i(558001);
i(866945);
var N9 = i(835002);
function _e() {
    let e = (0, N8.WX)();
    S.useEffect(() => {
        (0, N5.N)(N9.YA.AGE_CONFIRMATION_NOTICE, N9.YX.VIEWED);
    }, []);
    let t = S.useCallback(() => {
            window.open(tN.A.getArticleURL(e), "_blank"), (0, N5.N)(N9.YA.AGE_CONFIRMATION_NOTICE, N9.YX.LEARN_MORE);
        }, [e]),
        i = S.useCallback(() => {
            pG.A.showAgeVerificationGetStartedModal({ entryPoint: pM.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, N5.N)(N9.YA.AGE_CONFIRMATION_NOTICE, N9.YX.CONFIRM_AGE);
        }, []);
    return (0, E.jsx)(tf.p, {
        messageType: tf.Y.INFO,
        action: (0, E.jsx)(el.Q, {
            variant: "secondary",
            size: "sm",
            textVariant: "text-sm/medium",
            text: j.intl.string(j.t.FDSSia),
            onClick: i,
        }),
        children: j.intl.format(j.t.mFgsfg, { hook: (e, i) => (0, E.jsx)(u0.Anchor, { onClick: t, children: e }, i) }),
    });
}
function _t() {
    let e = (0, pj.aX)(N7.t.REACTIVE_CHECK),
        t = (0, py.b8)();
    return S.useMemo(() => {
        if (e && !t) return { type: h.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: _e };
    }, [e, t]);
}
var _i = i(308528),
    _n = i(171316);
function _s() {
    let e = (0, _n.uM)(),
        t = (0, f2.vx)(),
        i = S.useCallback(() => {
            (0, sv.default)(),
                _i.A.openPrivateChannel({ recipientIds: t }),
                (0, N5.N)(N9.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, N9.YX.LEARN_MORE);
        }, [t]),
        n = S.useCallback(() => {
            (0, N5.N)(N9.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, N9.YX.VIEWED);
        }, []);
    return S.useMemo(() => {
        if (e)
            return {
                type: h.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: n,
                useText: () =>
                    j.intl.format(f4.default.i284fU, {
                        hook: (e, t) => (0, E.jsx)(u0.Anchor, { onClick: i, children: e }, t),
                        count: t.length,
                    }),
            };
    }, [i, e, t.length, n]);
}
var _l = i(323073),
    _r = i(386171),
    _a = i(96607);
let _o = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_DM_SETTING, {
        useTitle: () =>
            (0, o.SV)("AgeRestrictedDMCommandsSetting") ? j.intl.string(j.t.gvC6q7) : j.intl.string(j.t.XahVjj),
        useSubtitle: () =>
            (0, o.SV)("AgeRestrictedDMCommandsSetting") ? j.intl.string(j.t.zirUC1) : j.intl.string(j.t.R9fXyS),
        useValue: _r.hT,
        useDisabled: () => {
            let e = (0, _a.A)() ?? !0,
                t = (0, _l.sP)(),
                i = (0, py.yM)();
            return (!t || !!i) && !e;
        },
        setValue: (e) => {
            (0, _l.p5)() && e
                ? pG.A.showAgeVerificationGetStartedModal({ entryPoint: pM.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : L.Qe.updateSetting(e);
        },
    }),
    _u = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => j.intl.string(j.t["L+yTsa"]),
        useSubtitle: () =>
            (0, o.SV)("AgeRestrictediOSSetting") ? j.intl.string(j.t["t6i/jW"]) : j.intl.string(j.t.hiM8pU),
        useValue: _r.tI,
        useDisabled: () => {
            let e = (0, _a.A)() ?? !0,
                t = (0, _l.sP)(),
                i = (0, py.yM)();
            return S.useMemo(() => (!t || !!i) && !e, [t, e, i]);
        },
        setValue: (e) => {
            (0, _l.p5)() && e
                ? pG.A.showAgeVerificationGetStartedModal({ entryPoint: pM.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : L.Kg.updateSetting(e);
        },
    }),
    _d = (0, a.AK)(u.X.CONTENT_FILTERS_APPEARANCE_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.hOXd45),
        destinationKey: u.X.APPEARANCE_MESSAGES_CATEGORY,
    }),
    _c = (0, a.gN)(u.X.CONTENT_FILTERS_RELATED_SETTINGS, { buildLayout: () => [_d] });
i(667532);
var _g = i(390248),
    _m = i(632119),
    _A = i(945276),
    _h = i(389737),
    _E = i(566769);
function _S() {
    let e,
        t = (0, _A.A)() ?? !0,
        i = (0, _n.uM)(),
        n = (0, _n.uM)(),
        {
            explicitContentGuilds: s,
            explicitContentFriendDm: l,
            explicitContentNonFriendDm: r,
        } = ((e = (0, u$.cf)([uE.A], () => uE.A.settings.textAndImages?.explicitContentSettings ?? (0, _m.C$)())),
        {
            explicitContentGuilds: (0, _m.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, _m.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, _m.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        }),
        a = (e) => {
            let t = Object.values(e);
            (0, _g.hK)() && t.includes(X.TO.SHOW)
                ? pG.A.showAgeVerificationGetStartedModal({ entryPoint: pM.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
                : (0, _m.Jz)(e);
        },
        o = [
            { value: X.TO.BLUR, label: j.intl.string(j.t.S49Uad) },
            { value: X.TO.BLOCK, label: j.intl.string(j.t["D/157Y"]) },
        ],
        u = [{ value: X.TO.BLUR, label: j.intl.string(j.t.S49Uad) }],
        d = { value: X.TO.SHOW, label: j.intl.string(j.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: n, tooltipText: i ? j.intl.string(f4.default["6Af/cw"]) : void 0 };
    return (0, E.jsxs)(_h.E, {
        description: j.intl.string(j.t.Wnojv1),
        children: [
            (0, E.jsx)(_E.A, {
                title: j.intl.string(j.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(_E.A, {
                title: j.intl.string(j.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(_E.A, {
                title: j.intl.string(j.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || n,
                tooltipText: i ? j.intl.string(f4.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function _T() {
    let e,
        t = (0, _A.A)() ?? !0,
        i = (0, _n.uM)(),
        n = (0, _n.uM)(),
        {
            goreContentGuilds: s,
            goreContentFriendDm: l,
            goreContentNonFriendDm: r,
        } = ((e = (0, u$.cf)([uE.A], () => uE.A.settings.textAndImages?.goreContentSettings ?? (0, N8.T4)())),
        {
            goreContentGuilds: (0, N8.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, N8.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, N8.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        }),
        a = (e) => {
            let t = Object.values(e);
            (0, _g.hK)() && t.includes(X.TO.SHOW)
                ? pG.A.showAgeVerificationGetStartedModal({ entryPoint: pM.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
                : (0, N8.qY)(e);
        },
        o = [
            { value: X.TO.BLUR, label: j.intl.string(j.t.S49Uad) },
            { value: X.TO.BLOCK, label: j.intl.string(j.t["D/157Y"]) },
        ],
        u = [{ value: X.TO.BLUR, label: j.intl.string(j.t.S49Uad) }],
        d = { value: X.TO.SHOW, label: j.intl.string(j.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: n, tooltipText: i ? j.intl.string(f4.default["6Af/cw"]) : void 0 };
    return (0, E.jsxs)(_h.E, {
        description: j.intl.string(j.t.XgH9eh),
        children: [
            (0, E.jsx)(_E.A, {
                title: j.intl.string(j.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(_E.A, {
                title: j.intl.string(j.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(_E.A, {
                title: j.intl.string(j.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || n,
                options: u,
                tooltipText: i ? j.intl.string(f4.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var _x = i(464946),
    _p = i(875162),
    _f = i(334859);
let _N = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, N8.WX)(),
            t = S.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: j.intl.string(j.t.GYpoAq),
                        component: _S,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: j.intl.string(j.t["16/3Bi"]),
                        component: _T,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, E.jsxs)(_x.h, {
            children: [
                (0, E.jsx)(_x._, {
                    header: j.intl.string(j.t["Hj/But"]),
                    description: j.intl.format(j.t.dliU4j, { learnMoreLink: tN.A.getArticleURL(e) }),
                }),
                (0, E.jsx)(_p.A, { tabs: t, orientation: "vertical", tabsClassName: _f.v }),
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
var __ = i(639555),
    _I = i(617641),
    _C = i(546140),
    _b = i(406935),
    _v = i(594061);
let _y = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING, {
    useTitle: () => j.intl.string(j.t.qFsx5q),
    useSubtitle: () => j.intl.format(j.t.lunaRv, { learnMoreLink: tN.A.getArticleURL(eA.MVz.SAFETY_ALERTS) }),
    useValue: _C.L,
    setValue: (e) =>
        _v.wc.updateAsync(
            "privacy",
            (t) => {
                t.inappropriateConversationWarnings = _b._t.create({ value: e });
            },
            _v.Sb.INFREQUENT_USER_ACTION,
        ),
    usePredicate: function () {
        let e = (0, _I.Lc)({ location: "DMSafetyAlertsSetting" }),
            t = (0, __.Rv)({ location: "DMSafetyAlertsSetting" }),
            i = (0, _A.A)() ?? !0;
        return e && !i && !t;
    },
});
var _j = i(809505),
    _O = i(923457),
    _R = i(750714);
let _L = (0, a.Qx)(u.X.CONTENT_AND_SOCIAL_DM_SPAM_SETTING, {
        useTitle: () => ((0, o.SV)("DMSpamSetting") ? j.intl.string(j.t.puwSkY) : j.intl.string(j.t.tiCXaH)),
        useSubtitle: () =>
            (0, o.SV)("DMSpamSetting")
                ? j.intl.string(j.t["+sXN3T"])
                : j.intl.format(j.t.RvjRRI, { appealLink: tN.A.getArticleURL(eA.MVz.SAFE_DIRECT_MESSAGING) }),
        useValue: function () {
            let e = L.he.useSetting(),
                t = L.cj.useSetting(),
                i = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
                n = (0, pj.yv)(_O.p.SPAM_FILTERS);
            return e !== X.he.DEFAULT_UNSET
                ? e
                : i?.nsfwAllowed === !1 && n
                  ? X.he.FRIENDS_AND_NON_FRIENDS
                  : (_R.xY.get(t) ?? X.he.NON_FRIENDS);
        },
        setValue: (e) => L.he.updateSetting(e),
        useOptions: function () {
            let e = (0, o.SV)("DMSpamSetting");
            return S.useMemo(
                () =>
                    e
                        ? [
                              { name: j.intl.string(j.t["+w5yKk"]), value: X.he.FRIENDS_AND_NON_FRIENDS },
                              { name: j.intl.string(j.t.yAPg6r), value: X.he.NON_FRIENDS },
                              { name: j.intl.string(j.t.FEXKsv), value: X.he.DISABLED },
                          ]
                        : (0, _j.YS)(),
                [e],
            );
        },
        useSearchTerms: () => [j.intl.string(j.t.JzaP4h), j.intl.string(j.t.H9XOl3), j.intl.string(j.t.k4W40P)],
    }),
    _D = (0, a.zZ)(u.X.CONTENT_CATEGORY, {
        useTitle: () => ((0, o.SV)("ContentCategory") ? j.intl.string(j.t["3upKU8"]) : j.intl.string(j.t.xVRG4P)),
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
                u = _s(),
                d =
                    ((e = (0, f3.Z)()),
                    (t = (0, N8.WX)()),
                    (i = S.useCallback(() => {
                        window.open(tN.A.getArticleURL(t), "_blank"),
                            (0, N5.N)(N9.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, N9.YX.LEARN_MORE);
                    }, [t])),
                    (n = S.useCallback(() => {
                        (0, N5.N)(N9.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, N9.YX.VIEWED);
                    }, [])),
                    S.useMemo(() => {
                        if (e)
                            return {
                                type: h.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: n,
                                useText: () =>
                                    j.intl.format(j.t.EUo0yj, {
                                        hook: (e, t) => (0, E.jsx)(u0.Anchor, { onClick: i, children: e }, t),
                                    }),
                            };
                    }, [i, e, n])),
                c =
                    ((s = (0, pj.SJ)()),
                    (l = (0, py.b8)()),
                    (r = s && !l),
                    (a = S.useCallback(() => {
                        pG.A.showAgeVerificationGetStartedModal({ entryPoint: pM.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, N5.N)(N9.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, N9.YX.LEARN_MORE);
                    }, [])),
                    (o = S.useCallback(() => {
                        (0, N5.N)(N9.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, N9.YX.VIEWED);
                    }, [])),
                    S.useMemo(() => {
                        if (r)
                            return {
                                type: h.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: o,
                                useText: () =>
                                    j.intl.format(j.t.OX4ybh, {
                                        hook: (e, t) => (0, E.jsx)(u0.Anchor, { onClick: a, children: e }, t),
                                    }),
                            };
                    }, [a, r, o])),
                g = _t();
            return u ?? g ?? c ?? d;
        },
        buildLayout: () => ((0, o.Bv)("ContentCategory") ? [_N, _y, _o, _u, _c] : [_N, _L, _y, _o, _u]),
    });
var _P = i(189883);
let _G = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => j.intl.string(j.t["7x9dyE"]),
    useValue: () => {
        let e = L.FA.useSetting();
        return S.useMemo(() => (0, rD.Lx)(e), [e]).all;
    },
    setValue: (e) => {
        L.FA.updateSetting(e ? eA.yKI : eA.yKI & ~eA.dzt.NO_RELATION);
    },
    useDisabled: () => (0, _n.uM)(),
});
var _M = i(665260);
let _U = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => j.intl.string(j.t.NfeuZ3),
        useValue: () => {
            let e = L.FA.useSetting(),
                t = S.useMemo(() => (0, rD.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: (e) => {
            let t = L.FA.getSetting();
            L.FA.updateSetting(
                e ? _M.UI(t, eA.dzt.MUTUAL_FRIENDS) : _M.iE(t, eA.dzt.MUTUAL_FRIENDS, eA.dzt.NO_RELATION),
            );
        },
        useDisabled: () => (0, _n.uM)(),
    }),
    _V = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => j.intl.string(j.t.qsMfsH),
        useValue: () => {
            let e = L.FA.useSetting(),
                t = S.useMemo(() => (0, rD.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: (e) => {
            let t = L.FA.getSetting();
            L.FA.updateSetting(e ? _M.UI(t, eA.dzt.MUTUAL_GUILDS) : _M.iE(t, eA.dzt.MUTUAL_GUILDS, eA.dzt.NO_RELATION));
        },
        useDisabled: () => (0, _n.uM)(),
    }),
    _k = (0, a.FW)(u.X.FRIEND_REQUESTS_FIELDSET, {
        useTitle: () => j.intl.string(j.t.wTdS6S),
        buildLayout: () => [_G, _U, _V],
    }),
    _w = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => j.intl.string(j.t["jK+wdr"]),
        useSubtitle: () => j.intl.string(j.t["RYh/pW"]),
        useValue: () => !L.Zd.useSetting(),
        setValue: (e) => {
            L.Zd.updateSetting(!e);
        },
        usePredicate: () => _P.A.useConfig({ location: "Friend Request Setting" }).enabled,
        usePersistentBadge: () => ({ badgeType: h.Xi.BETA }),
    }),
    _F = (0, a.zZ)(u.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () =>
            (0, o.SV)("FriendRequestsCategory") ? j.intl.string(j.t["5gxWrt"]) : j.intl.string(j.t.MNaVwq),
        useSubtitle: () => {
            let { enabled: e } = _P.A.useConfig({ location: "Friend Request Setting" });
            return e ? j.intl.string(j.t.QVbF3l) : void 0;
        },
        useInlineNotice: _s,
        buildLayout: () => ((0, o.Bv)("FriendRequestsCategory") ? [_k, _w] : [_G, _U, _V, _w]),
    });
var _B = i(994500),
    _z = i(428678),
    _X = i(717398),
    _Y = i(730134),
    _H = i(753686);
function _K(e) {
    let { listType: t, numberOfUsers: i } = e,
        n = "blocked" === t;
    return (0, E.jsxs)("div", {
        className: _H.wx,
        children: [
            (0, E.jsx)("div", { className: _H.zc, children: n ? (0, E.jsx)(_z.K, {}) : (0, E.jsx)(iy.G, {}) }),
            (0, E.jsxs)("div", {
                className: _H.Qq,
                children: [
                    (0, E.jsx)(ei.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: j.intl.string(n ? j.t.PFOUKW : j.t["93ZDWE"]),
                    }),
                    (0, E.jsx)(ei.E, {
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
function _W(e) {
    let { userId: t, last: i } = e,
        n = (0, g.bG)([_B.A], () => _B.A.isBlocked(t)),
        s = (0, g.bG)([io.default], () => io.default.getUser(t)),
        [l, r] = S.useState(!1),
        a = S.useCallback(() => {
            r(!0),
                n
                    ? _X.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : _X.A.unignoreUser(t, e1.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      });
        }, [n, t]);
    return null == s
        ? null
        : (0, E.jsxs)("div", {
              className: e6()(_H.nM, { [_H.fW]: i }),
              children: [
                  (0, E.jsxs)("div", {
                      className: _H.eF,
                      children: [
                          (0, E.jsx)(_Y.A, { user: s, size: i4._3.SIZE_40 }),
                          (0, E.jsxs)("div", {
                              className: _H.Qq,
                              children: [
                                  (0, E.jsx)(ei.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: s.globalName ?? s.username,
                                  }),
                                  (0, E.jsx)(ei.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: null != s.globalName ? s.username : null,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, E.jsx)(eG.$, {
                      variant: "secondary",
                      text: j.intl.string(n ? j.t.XyHpKH : j.t["8wXU9B"]),
                      onClick: a,
                      loading: l,
                  }),
              ],
          });
}
function _Z(e) {
    let { userIds: t, listType: i } = e,
        [n, s] = S.useState(5);
    return (0, E.jsx)(_x.h, {
        children: (0, E.jsxs)("div", {
            className: _H.Nr,
            children: [
                (0, E.jsx)(_K, { listType: i, numberOfUsers: t.length }),
                (0, E.jsx)("div", {
                    className: _H.jS,
                    children: t.slice(0, n).map((e, i) => (0, E.jsx)(_W, { userId: e, last: i === t.length - 1 }, e)),
                }),
                n < t.length
                    ? (0, E.jsx)("div", {
                          className: _H.vM,
                          children: (0, E.jsx)(et.D, {
                              onClick: () => {
                                  s((e) => e + 5);
                              },
                              className: _H.Qf,
                              children: (0, E.jsx)(ei.E, {
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
let _q = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_BLOCKED_USERS, {
        useSearchTerms: () => [j.intl.string(j.t.PFOUKW)],
        usePredicate: () => (0, g.bG)([_B.A], () => _B.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, g.yK)([_B.A], () => _B.A.getBlockedIDs());
            return (0, E.jsx)(_Z, { userIds: e, listType: "blocked" });
        },
    }),
    _Q = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_IGNORED_USERS, {
        useSearchTerms: () => [j.intl.string(j.t["93ZDWE"])],
        usePredicate: () => (0, g.bG)([_B.A], () => _B.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, g.yK)([_B.A], () => _B.A.getIgnoredIDs());
            return (0, E.jsx)(_Z, { userIds: e, listType: "ignored" });
        },
    }),
    _J = (0, a.zZ)(u.X.RESTRICTED_USERS_CATEGORY, {
        useTitle: () =>
            (0, o.SV)("RestrictedUsersCategory") ? j.intl.string(j.t["+Iryf3"]) : j.intl.string(j.t.LVwR56),
        useSubtitle: () =>
            j.intl.format(j.t["0aNQo9"], { helpArticle: tN.A.getArticleURL(eA.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [_q, _Q],
        usePredicate: () => {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, g.cf)([_B.A], () => ({
                hasBlockedUsers: _B.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: _B.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var _$ = i(22385),
    _0 = i(556534),
    _1 = i(111159),
    _2 = i(152056),
    _3 = i(219714);
let _6 = { label: () => j.intl.string(j.t["32u1Dx"]), value: _$.YG };
var _4 = i(954225);
let _7 = () => (0, _0.Tx)() !== _$.YG;
function _8() {
    return j.intl.string(j.t["T+nevN"]);
}
let _5 = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_JOIN_SETTING, {
        useTitle: _8,
        useSubtitle: () =>
            j.intl.format(j.t.jXKQCu, { helpdeskArticle: tN.A.getArticleURL(eA.MVz.ACTIVITY_STATUS_SETTINGS) }),
        useValue: () => {
            let e = (0, _0.Tx)();
            return !L.pE.useSetting().includes(e);
        },
        setValue: (e) => {
            let t = _$.xk.getState().selectedGuildId,
                i = (0, rD.CN)();
            e ? i.delete(t) : i.add(t),
                L.pE.updateSetting([...i]),
                eo.default.track(eA.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: _4.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
                    ingress: nk.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                });
        },
        usePredicate: _7,
    }),
    _9 = () => (0, _0.Tx)() !== _$.YG;
function Ie() {
    return j.intl.string(D.default.WhdCGP);
}
let It = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_SHARE_SETTING, {
    useTitle: Ie,
    useSubtitle: () => j.intl.string(D.default.UQ9RHJ),
    useValue: () => {
        let e = (0, _0.Tx)();
        return !L.JG.useSetting().includes(e);
    },
    setValue: (e) => {
        let t = _$.xk.getState().selectedGuildId,
            i = (0, rD.Kk)();
        e ? i.delete(t) : i.add(t),
            L.JG.updateSetting([...i]),
            eo.default.track(eA.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: _4.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
                ingress: nk.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    },
    usePredicate: _9,
});
var Ii = i(307863),
    In = i(428031),
    Is = i(972737);
let Il = () => ((0, Ii.e)() ? j.intl.string(j.t.PMsfcH) : j.intl.string(j.t.RAQUSN)),
    Ir = () => {
        let e = (0, _0.Tx)(),
            t = (0, _0.q9)(),
            i = (0, Ii.e)();
        return e === _$.YG
            ? i
                ? j.intl.string(j.t.XXGmuB)
                : j.intl.string(j.t.wbYDfT)
            : t
              ? j.intl.string(j.t.V0ka0Q)
              : i
                ? j.intl.string(j.t.F9WY3f)
                : j.intl.string(j.t.G7c3Xo);
    },
    Ia = () => {
        let e = (0, _0.Tx)(),
            t = L.$s.useSetting().includes(e),
            i = (0, In.K)();
        return e === _$.YG ? !i : !t;
    },
    Io = () => {
        let e = (0, _n.uM)();
        return (0, _0.Tx)() === _$.YG && e;
    },
    Iu = (e, t) => {
        eo.default.track(eA.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t,
        });
    },
    Id = (e) => {
        let t = _$.xk.getState().selectedGuildId;
        if (t === _$.YG) {
            var i;
            (i = !e),
                (0, Is.O)({
                    header: j.intl.string(j.t["uUr+GR"]),
                    body: j.intl.string(j.t.hjGJBp),
                    confirmText: j.intl.string(j.t.gm1Vej),
                    cancelText: j.intl.string(j.t.p89ACt),
                    confirmButtonColor: aQ.$n.Colors.BRAND,
                    onConfirm: () => {
                        L.n6.updateSetting(i), Iu(i, !1);
                    },
                    onCancel: () => {
                        L.n6.updateSetting(i), L.$s.updateSetting(i ? ed.A.getGuildIds() : []), Iu(i, !0);
                    },
                });
        } else {
            let i = (0, rD.Tb)();
            e ? i.delete(t) : i.add(t),
                L.$s.updateSetting(Array.from(i)),
                eo.default.track(eA.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: _4.m.DIRECT_MESSAGES_TOGGLE,
                    ingress: nk.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                });
        }
    },
    Ic = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: Ir,
        useValue: Ia,
        useDisabled: Io,
        setValue: Id,
    }),
    Ig = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: Il,
        useSubtitle: Ir,
        useValue: Ia,
        useDisabled: Io,
        setValue: Id,
    });
var Im = i(953298);
let IA = () => {
        let e = (0, _0.Tx)(),
            t = (0, In.K)(),
            i = L.$s.useSetting().includes(e),
            n = L.YX.useSetting(),
            s = L.Zr.useSetting().includes(e);
        return e === _$.YG ? !t && !n : !i && !s;
    },
    Ih = () => {
        let e = (0, _0.Tx)(),
            t = (0, _n.uM)(),
            i = (0, In.K)(),
            n = L.$s.useSetting().includes(e);
        return e === _$.YG ? i || t : n;
    },
    IE = (e, t) => {
        eo.default.track(eA.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t,
        });
    },
    IS = (e) => {
        let t = _$.xk.getState().selectedGuildId;
        if (!e && (0, Im.w)())
            return void pG.A.showAgeVerificationGetStartedModal({ entryPoint: pM.q1.MESSAGE_REQUESTS_SETTINGS });
        if (t === _$.YG) {
            var i;
            (i = !e),
                (0, Is.O)({
                    header: j.intl.string(j.t.yAfu1p),
                    body: j.intl.string(j.t.Ry2z74),
                    confirmText: j.intl.string(j.t.gm1Vej),
                    cancelText: j.intl.string(j.t.p89ACt),
                    confirmButtonColor: aQ.$n.Colors.BRAND,
                    onConfirm: () => {
                        L.YX.updateSetting(i), IE(i, !1);
                    },
                    onCancel: () => {
                        L.YX.updateSetting(i), L.Zr.updateSetting(i ? ed.A.getGuildIds() : []), IE(i, !0);
                    },
                });
        } else {
            let i = (0, rD.xo)();
            e ? i.delete(t) : i.add(t),
                L.Zr.updateSetting(Array.from(i)),
                eo.default.track(eA.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: _4.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                    ingress: nk.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                });
        }
    };
function IT() {
    return j.intl.string(j.t["3o2ojh"]);
}
let Ix = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: IT,
        useSubtitle: () =>
            (0, _0.q9)()
                ? j.intl.format(j.t.WpnWLc, { helpdeskArticle: tN.A.getArticleURL(eA.MVz.MESSAGE_REQUESTS) })
                : j.intl.format(j.t.wkm9a3, { helpdeskArticle: tN.A.getArticleURL(eA.MVz.MESSAGE_REQUESTS) }),
        useValue: IA,
        useDisabled: Ih,
        setValue: IS,
    }),
    Ip = (0, a.Qx)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: () => j.intl.string(j.t.gP9AzZ),
        useOptions: () => [
            { name: j.intl.string(j.t.RLRoEy), value: "filter" },
            { name: j.intl.string(j.t.I0oqyF), value: "no_filter" },
        ],
        useValue: () => (IA() ? "filter" : "no_filter"),
        useDisabled: Ih,
        setValue: (e) => IS("filter" === e),
        useHelperText: () => j.intl.format(j.t.BoCjTy, { learnMoreUrl: tN.A.getArticleURL(eA.MVz.MESSAGE_REQUESTS) }),
    }),
    If = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            let e = (0, o.SV)("GuildSelect"),
                t = [Il(), IT()],
                i = Ie(),
                n = _9();
            !e && n && t.push(i);
            let s = _8(),
                l = _7();
            return !e && l && t.push(s), t;
        },
        Component: function () {
            let { selectedGuildId: e, setSelectedGuildId: t } = (0, _$.xk)(),
                i = (0, g.bG)([ec.Ay], () => ec.Ay.getFlattenedGuildIds()),
                n = (0, g.bG)([ed.A], () => ed.A.getGuilds()),
                s = i[0];
            S.useEffect(
                () =>
                    _2.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, i) => {
                            let n = _$.xk.getState().selectedGuildId;
                            "" === i && "" !== e && n === _$.YG && null != s
                                ? t(s)
                                : "" === e && n !== _$.YG && t(_$.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [s, t],
            );
            let l = S.useMemo(() => {
                let e = [];
                return (
                    e.push({
                        ..._6,
                        id: _6.value,
                        label: _6.label(),
                        leading: (0, E.jsx)("div", {
                            className: _3.KP,
                            children: (0, E.jsx)(_1.p, {
                                size: "sm",
                                color: "white",
                                "aria-hidden": !0,
                                className: _3.cl,
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
                                leading: (0, E.jsx)(gZ.Ay, {
                                    className: _3.cl,
                                    guild: i,
                                    size: gZ.Ay.Sizes.SMALLER,
                                    active: !0,
                                }),
                            });
                    }),
                    e
                );
            }, [i, n]);
            return (0, E.jsx)(iX.Z, {
                selectionMode: "single",
                onSelectionChange: (e) => {
                    t(e);
                },
                value: e,
                options: l,
            });
        },
    }),
    IN = (0, a.zZ)(u.X.PERMISSIONS_CATEGORY, {
        useTitle: () =>
            (0, o.SV)("SocialPermissionsCategory") ? j.intl.string(j.t.Y5GYcX) : j.intl.string(j.t.eYaT7L),
        useInlineNotice: function () {
            let e = _s(),
                t = _t();
            if ((0, _0.Tx)() === _$.YG) return e ?? t;
        },
        buildLayout: () => [If, ...((0, o.Bv)("SocialPermissionsCategory") ? [Ic, Ip] : [Ig, Ix, It, _5])],
    }),
    I_ = (0, a.dT)(u.X.CONTENT_AND_SOCIAL_MAIN_TAB, {
        getTitle: () => j.intl.string(j.t["/7xJCF"]),
        buildLayout: () => [_D, IN, _F, _J],
    }),
    II = (0, a.dT)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB, {
        initialize: () => {
            E5.A.fetch();
        },
        getTitle: () => j.intl.string(j.t.YpCiMt),
        buildLayout: () => [N4],
    }),
    IC = (0, a.t_)(u.X.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => j.intl.string(j.t["+o1pDZ"]),
        buildLayout: () => [I_, II],
    }),
    Ib = (0, a.i4)(u.X.CONTENT_AND_SOCIAL_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["+o1pDZ"]),
        icon: gg.i,
        buildLayout: () => [IC],
    });
var Iv = i(254138);
function Iy() {
    return (
        sr.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" }),
        sl.Bo.get({ url: eA.Rsh.USER_HARVEST, oldFormErrors: !0, rejectWithError: !1 })
            .then((e) => {
                sr.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body });
            })
            .catch((e) => {
                sr.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error: e });
            })
    );
}
function Ij(e) {
    return (0, S3.$I)(e).then(
        (e) => (
            null != e && null != e.body && sr.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body }), e
        ),
    );
}
var IO = i(157559),
    IR = i(331887);
function IL() {
    let e = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
        t = (0, g.bG)([IR.A], () => IR.A.harvestType),
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
function ID(e) {
    let { onConfirm: t, ...n } = e;
    (0, Y.openModalLazy)(async () => {
        let { default: e } = await i.e("92063").then(i.bind(i, 970018));
        return (i) => (0, E.jsx)(e, { modalProps: i, onConfirm: t });
    }, n);
}
var IP = i(160427);
let IG = (0, a.E2)(u.X.DATA_HARVEST_REQUEST_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.dmBSKo)],
        Component: function () {
            let e = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
                { currentHarvestType: t, awaitingInitialRequest: i } = (0, g.cf)([IR.A], () => ({
                    currentHarvestType: IR.A.harvestType,
                    awaitingInitialRequest: IR.A.requestingHarvest,
                })),
                [n, s] = S.useState(!1);
            if (null == e) return null;
            let l =
                    !!(!e.verified || e.isStaff()) ||
                    (null != t && 2592e6 > Date.now() - new Date(t.created_at).getTime()) ||
                    i,
                r = null != t && rw()().diff(rw()(t.created_at), "days") < eA.n83,
                a = l && r,
                o = e.isStaff(),
                u = !e.verified;
            return (0, E.jsxs)(_x.h, {
                children: [
                    (0, E.jsx)(_x._, {
                        header: j.intl.string(j.t.XAHCgJ),
                        description: j.intl.format(j.t.P3kNfr, {
                            helpdeskArticle: tN.A.getArticleURL(eA.MVz.GDPR_REQUEST_DATA),
                        }),
                    }),
                    a
                        ? (0, E.jsx)(eb.Z, {
                              className: IP.N,
                              children: (0, E.jsx)(ei.E, {
                                  variant: "text-md/normal",
                                  children: j.intl.format(j.t.RNDlV9, {
                                      date: rw()(t.created_at).add(eA.n83, "days").format("MMMM Do YYYY"),
                                  }),
                              }),
                          })
                        : o
                          ? (0, E.jsx)(eb.Z, {
                                className: IP.N,
                                children: (0, E.jsx)(ei.E, {
                                    variant: "text-md/normal",
                                    children: j.intl.string(j.t.ZPQLH2),
                                }),
                            })
                          : (0, E.jsxs)(E.Fragment, {
                                children: [
                                    u
                                        ? (0, E.jsx)(eb.Z, {
                                              className: IP.N,
                                              children: (0, E.jsx)(ei.E, {
                                                  variant: "text-md/normal",
                                                  children: j.intl.string(j.t.c1f88z),
                                              }),
                                          })
                                        : null,
                                    (0, E.jsx)("div", {
                                        className: IP.x,
                                        children: (0, E.jsx)(eG.$, {
                                            variant: "primary",
                                            text: j.intl.string(j.t.dmBSKo),
                                            disabled: l,
                                            onClick: () => {
                                                ID({
                                                    onConfirm: (e) => {
                                                        s(!0),
                                                            Ij(e)
                                                                .then(
                                                                    (e) => {
                                                                        null != e && null != e.body
                                                                            ? IO.A.show({
                                                                                  title: j.intl.string(j.t.i2iul5),
                                                                                  body: j.intl.string(j.t["6Nmv4i"]),
                                                                              })
                                                                            : IO.A.show({
                                                                                  title: j.intl.string(j.t.OjbtDm),
                                                                                  body: j.intl.string(j.t["0F5Jyt"]),
                                                                              });
                                                                    },
                                                                    (e) => {
                                                                        let t =
                                                                            e?.message ||
                                                                            e?.body?.message ||
                                                                            j.intl.string(j.t["0F5Jyt"]);
                                                                        IO.A.show({
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
    IM = (0, a.zZ)(u.X.DATA_REQUEST_CATEGORY, {
        useTitle: () => j.intl.string(j.t.VjDjpb),
        initialize: () => {
            Iy();
        },
        buildLayout: () => [IG],
    });
var IU = i(290595),
    IV = i(153488);
let Ik = (0, a.zD)(u.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
        useTitle: () => j.intl.string(j.t.AGDDkH),
        useSubtitle: () =>
            (0, o.ri)("ClipsAllowVoiceRecording") ? j.intl.string(j.t.kyo3dJ) : j.intl.string(j.t["wW9/zQ"]),
        useValue: () => L.Q$.useSetting(),
        setValue: (e) => NT.eQ({ allowVoiceRecording: e }),
    }),
    Iw = (0, a.Tf)(u.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => j.intl.string(j.t.qfFFos),
        useSubtitle: function () {
            let e = IL();
            if (e.allowed) return j.intl.format(j.t.NRI6vt, { article: tN.A.getArticleURL(eA.MVz.GDPR_REQUEST_DATA) });
            if ("staff" === e.reason) return j.intl.string(j.t.hIbRso);
            if ("not_verified" === e.reason)
                return j.intl.format(j.t.rBqJDq, {
                    settingsLink: (e, t) =>
                        (0, E.jsx)(
                            et.D,
                            {
                                tag: "a",
                                onClick: () => (0, eH.openUserSettings)(u.X.ACCOUNT_INFO_EMAIL_SETTING),
                                children: e,
                            },
                            t,
                        ),
                });
            if ("rate_limited" === e.reason) {
                let t = rw()(e.nextAllowed).format("MMMM Do YYYY");
                return j.intl.format(j.t["VLMG1+"], { date: t });
            }
        },
        initialize: () => {
            Iy();
        },
        useDisabled: () => !IL().allowed,
        useLoading: () => (0, g.bG)([IR.A], () => IR.A.requestingHarvest),
        useVariant: () => "secondary",
        useLabel: () => j.intl.string(j.t.dmBSKo),
        onClick: function () {
            return new Promise((e) => {
                let t = !0;
                ID({
                    onConfirm: (i) => {
                        (t = !1),
                            Ij(i)
                                .then(
                                    (e) => {
                                        null != e && null != e.body
                                            ? IO.A.show({
                                                  title: j.intl.string(j.t.i2iul5),
                                                  body: j.intl.string(j.t["6Nmv4i"]),
                                              })
                                            : IO.A.show({
                                                  title: j.intl.string(j.t.OjbtDm),
                                                  body: j.intl.string(j.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || j.intl.string(j.t["0F5Jyt"]);
                                        IO.A.show({ title: j.intl.string(j.t.OjbtDm), body: t });
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
    IF = (0, a.v_)(u.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => j.intl.string(j.t.D60Gfj),
        useSubtitle: () =>
            (0, o.ri)("DataUsageDisclaimer")
                ? j.intl.format(j.t.dszICC, {
                      onClickDisable: () => (0, eH.openUserSettings)(u.X.ACCOUNT_DISABLE_SETTING),
                      onClickDelete: () => (0, eH.openUserSettings)(u.X.ACCOUNT_DELETE_SETTING),
                  })
                : j.intl.format(j.t.R5N31P, { onClick: () => (0, eH.openUserSettings)(u.X.ACCOUNT_REMOVAL_CATEGORY) }),
    }),
    IB = (0, a.zD)(u.X.DATA_USAGE_PERSONALIZATION_SETTING, {
        useTitle: () => j.intl.string(j.t.MNKzyg),
        useSubtitle: () => {
            let e = (0, o.ri)("DataUsagePersonalization");
            return j.intl.format(e ? j.t["2SiYln"] : j.t["eQL/Mr"], {
                helpdeskArticle: tN.A.getArticleURL(eA.MVz.DATA_USED_FOR_RECOMMENDED),
            });
        },
        useValue: function () {
            return (0, g.bG)([IV.A], () => IV.A.hasConsented(eA.YAq.PERSONALIZATION));
        },
        setValue: function (e) {
            e
                ? (0, IU.U)([eA.YAq.PERSONALIZATION], []).catch(Is.i)
                : (0, Is.O)({
                      header: j.intl.string(j.t["9SNpzv"]),
                      confirmText: j.intl.string(j.t["9g5UGw"]),
                      cancelText: j.intl.string(j.t["+ZLPw9"]),
                      onConfirm: () => {
                          (0, IU.U)([], [eA.YAq.PERSONALIZATION]).catch(Is.i);
                      },
                      body: j.intl.string(j.t.gJvDDh),
                  });
        },
        useDisabled: _n.uM,
    }),
    Iz = (0, a.zD)(u.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => j.intl.string(j.t.CyLYKZ),
        useSubtitle: () => {
            let e = (0, o.ri)("DataUsageQuests3P");
            return j.intl.format(e ? j.t["md5l4/"] : j.t["2QFDU/"], {
                helpdeskArticle: tN.A.getArticleURL(eA.MVz.QUESTS_PRIVACY_CONTROLS),
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
                t = (0, _n.uM)();
            return e || t;
        },
        useSearchTerms: () => [j.intl.string(j.t.CyLYKZ)],
    }),
    IX = (0, a.zD)(u.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => j.intl.string(j.t.sJYh5t),
        useSubtitle: () =>
            (0, o.ri)("DataUsageQuests")
                ? j.intl.string(j.t.w4fvxe)
                : j.intl.format(j.t.cf9mvV, { helpdeskArticle: tN.A.getArticleURL(eA.MVz.QUESTS_PRIVACY_CONTROLS) }),
        useValue: function () {
            return !L.H1.useSetting();
        },
        setValue: function (e) {
            L.H1.updateSetting(!e);
        },
        useSearchTerms: () => [j.intl.string(j.t.VkS7Yd)],
        useDisabled: _n.uM,
    }),
    IY = (0, a.AK)(u.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
        destinationKey: u.X.REGISTERED_GAMES_PANEL,
        useSubtitle: function () {
            let { names: e, totalCount: t } = v(2);
            return j.intl.format(j.t.GaTAYM, { count: t, nameCount: e.length, game1: e[0], game2: e[1] });
        },
        useTrailingDecoration: () => ({ type: h.wF.STACKED_ICONS, useIcons: y }),
        usePredicate: () => (0, g.bG)([m.Ay], () => m.Ay.getGamesSeen(!1).some((e) => !(0, A.n1)(e))) && (0, c.xl)(),
    }),
    IH = (0, a.gN)(u.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [IY] }),
    IK = (0, a.zD)(u.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => j.intl.string(j.t.XuADY2),
        useSubtitle: () => {
            let e = (0, o.ri)("DataUsageStatistics");
            return j.intl.format(e ? j.t.FNqmmX : j.t["igTSG/"], {
                helpdeskArticle: tN.A.getArticleURL(eA.MVz.DATA_PRIVACY_CONTROLS),
            });
        },
        useValue: function () {
            return (0, g.bG)([IV.A], () => IV.A.hasConsented(eA.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, IU.U)([eA.YAq.USAGE_STATISTICS], []).catch(Is.i)
                : (0, Is.O)({
                      header: j.intl.string(j.t.OdPCbN),
                      body: j.intl.string(j.t.MGWabA),
                      confirmText: j.intl.string(j.t["D3+rU4"]),
                      cancelText: j.intl.string(j.t.kYpG0u),
                      onConfirm: () => (0, IU.U)([], [eA.YAq.USAGE_STATISTICS]).catch(Is.i),
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t.XuADY2)],
        useDisabled: _n.uM,
    }),
    IW = (0, a.zZ)(u.X.DATA_USAGE_CATEGORY, {
        useTitle: () => ((0, o.ri)("DataUsageCategory") ? j.intl.string(j.t.QDAriI) : j.intl.string(j.t.bvw42E)),
        useInlineNotice: _s,
        initialize: () => {
            IV.A.fetchedConsents || (0, IU.Q)();
        },
        buildLayout: () =>
            (0, o.SB)("DataUsageCategory") ? [IF, IK, IB, IX, Iz, Ik, Iw, IH] : [IK, IX, Iz, IB, Ik, IF],
    });
function IZ() {
    let e = L.JG.useSetting();
    return (0, g.yK)([ec.Ay, ed.A], () => {
        let t = new Set(e);
        return ec.Ay.getFlattenedGuildIds().filter((e) => null != ed.A.getGuild(e) && !t.has(e));
    }, [e]);
}
let Iq = {
        type: h.wF.STACKED_ICONS,
        useIcons: function () {
            let e = IZ(),
                t = (0, g.yK)(
                    [ed.A],
                    () =>
                        e
                            .slice(0, 2)
                            .map((e) => ed.A.getGuild(e))
                            .filter((e) => null != e),
                    [e],
                );
            return 0 === t.length
                ? null
                : t.length >= 2
                  ? {
                        frontIcon: { icon: (0, E.jsx)(eu.$, { guild: t[0], size: f.CD }), shape: f.e0.SQUIRCLE },
                        backIcon: { icon: (0, E.jsx)(eu.$, { guild: t[1], size: f.CD }), shape: f.e0.SQUIRCLE },
                    }
                  : { frontIcon: { icon: (0, E.jsx)(eu.$, { guild: t[0], size: f.CD }), shape: f.e0.SQUIRCLE } };
        },
    },
    IQ = (0, a.AK)(u.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = IZ();
            if (0 === e.length) return j.intl.format(j.t.QJIJ5p, {});
            let t = ed.A.getGuild(e[0]),
                i = t?.name ?? "",
                n = e.length - 1;
            return 0 === n
                ? j.intl.format(j.t["T+8J4A"], { guildName: i })
                : j.intl.format(j.t["3JyODQ"], { guildName: i, count: n });
        },
        useTrailingDecoration: function () {
            return Iq;
        },
        destinationKey: u.X.ACTIVITY_PRIVACY_PANEL,
    }),
    IJ = (0, a.gN)(u.X.PROFILE_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [IQ] }),
    I$ = (0, a.Qx)(u.X.PROFILE_PRIVACY_SETTING, {
        useTitle: () => j.intl.string(j.t.Qnf32C),
        useOptions: () => [
            { name: j.intl.string(j.t.Boxc8R), desc: j.intl.string(j.t["nLj+nc"]), value: X.KP.FRIENDS_AND_ALL_GUILDS },
            { name: j.intl.string(j.t.YOIKBt), desc: j.intl.string(j.t.y0JZ4s), value: X.KP.FRIENDS_AND_SMALL_GUILDS },
            { name: j.intl.string(j.t.u0nlJv), desc: j.intl.string(j.t["4jnKHu"]), value: X.KP.FRIENDS_ONLY },
        ],
        useValue: L.KP.useSetting,
        setValue: function (e) {
            let t = L.KP.getSetting();
            if ((L.KP.updateSetting(e), !(0, k.W1)("ProfilePrivacySetting"))) return;
            let n = (0, H.gS)(t, e);
            null != n &&
                (0, Y.openModalLazy)(async () => {
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
    I0 = (0, a.zZ)(u.X.PROFILE_PRIVACY_CATEGORY, {
        usePredicate: () => (0, k.lX)("ProfilePrivacyCategory"),
        useTitle: () => j.intl.string(j.t.ul884f),
        useSubtitle: () => j.intl.string(j.t.J0SFL2),
        buildLayout: () => [I$, IJ],
    });
var I1 = i(814278),
    I2 = i(936388),
    I3 = i(714763);
let I6 = (0, a.zD)(u.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => j.intl.string(j.t["opi/XK"]),
    useSubtitle: () => j.intl.format(j.t["/T+ZlP"], { helpArticle: (0, I1.Lu)() }),
    useValue: function () {
        return (0, g.bG)([I3.A], () => I3.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        I2.A.updatePersistentCodesEnabled(e);
    },
});
var I4 = i(787392);
function I7() {
    return (0, g.yK)([I4.A], () => I4.A.getUserIds());
}
var I8 = i(803306),
    I5 = i(966327),
    I9 = i(146003);
function Ce(e) {
    let { userId: t, count: i } = e,
        { analyticsLocations: n } = (0, nW.Ay)(),
        s = (0, g.bG)([io.default], () => io.default.getUser(t)),
        l = T5.Ay.getFormattedName(s),
        r = S.useCallback(() => {
            (0, I1.kj)(t);
        }, [t]),
        a = S.useCallback(() => (0, S5.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: n }), [t, n]);
    return (
        S.useEffect(() => {
            (0, I8.wz)(t);
        }, [t]),
        (0, E.jsxs)("div", {
            className: I9.uW,
            children: [
                null != s && (0, E.jsx)(I5.A, { className: I9.my, user: s, size: i4._3.SIZE_40 }),
                (0, E.jsxs)("div", {
                    className: I9.Qq,
                    children: [
                        (0, E.jsx)(et.D, {
                            className: I9.Xh,
                            onClick: a,
                            children: (0, E.jsx)(ei.E, {
                                variant: "text-md/semibold",
                                color: "interactive-text-active",
                                children: l,
                            }),
                        }),
                        (0, E.jsx)(ei.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: j.intl.format(j.t["/MBjYF"], { count: i }),
                        }),
                    ],
                }),
                (0, E.jsx)(et.D, { onClick: r, className: I9.Qz, children: (0, E.jsx)(lL.u, { size: "xs" }) }),
            ],
        })
    );
}
function Ct(e) {
    let { className: t, userId: i, verification: n, index: s } = e,
        l = (0, I1.tC)(n.timestamp),
        r = S.useCallback(() => {
            (0, I1.W0)(i, n.verifiedKey);
        }, [n.verifiedKey, i]);
    return (0, E.jsxs)("div", {
        className: t,
        children: [
            (0, E.jsxs)("div", {
                className: I9.Qq,
                children: [
                    (0, E.jsx)(ei.E, {
                        variant: "text-sm/semibold",
                        color: "interactive-text-active",
                        children: j.intl.format(j.t.N4qBBO, { index: s + 1 }),
                    }),
                    (0, E.jsx)(ei.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                ],
            }),
            (0, E.jsx)(et.D, {
                className: I9.Kk,
                onClick: r,
                children: (0, E.jsx)(gI.P, { size: "md", color: es.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function Ci(e) {
    let { userId: t } = e,
        i = (0, g.yK)([I4.A], () =>
            eZ()(I4.A.getUserVerifiedKeys(t))
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
            (0, E.jsx)(Ce, { userId: t, count: i.length }),
            i.map((e, n) =>
                (0, E.jsxs)(
                    S.Fragment,
                    {
                        children: [
                            (0, E.jsx)(Ct, { className: I9.nM, userId: t, index: n, verification: e }),
                            n !== i.length - 1 && (0, E.jsx)("div", { className: I9.yF }),
                        ],
                    },
                    `${n}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var Cn = i(623161);
let Cs = (0, a.E2)(u.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["5b3FNI"])],
        usePredicate: function () {
            let e = I7();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = I7();
            return (0, E.jsxs)(_x.h, {
                children: [
                    (0, E.jsx)(_x._, {
                        header: j.intl.string(j.t["5b3FNI"]),
                        description: j.intl.format(j.t.jrTSWU, { helpArticle: (0, I1.dc)() }),
                    }),
                    e.map((e) => (0, E.jsx)("div", { className: Cn.A, children: (0, E.jsx)(Ci, { userId: e }) }, e)),
                ],
            });
        },
    }),
    Cl = (0, a.zZ)(u.X.VOICE_SECURITY_CATEGORY, {
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
                              useText: () => j.intl.format(j.t["/6sFWa"], { helpArticle: (0, I1.aW)() }),
                          },
                [e],
            );
        },
        usePredicate: () => (0, eY.isDesktop)(),
        buildLayout: () => [I6, Cs],
    }),
    Cr = (0, a.t_)(u.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => j.intl.string(j.t.OAuOHD),
        buildLayout: () => ((0, o.SB)("DataAndPrivacyPanel") ? [IW, I0, Cl] : [IW, I0, IM, Cl]),
    }),
    Ca = (0, a.i4)(u.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.OAuOHD),
        icon: Iv.m,
        buildLayout: () => [Cr],
    });
var Co = i(476713);
let Cu = (0, a.AK)(u.X.CONNECTED_GAMES_CONNECTIONS_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t["+Bi7xh"]),
        useTitle: () => j.intl.string(j.t["3fe7U5"]),
        destinationKey: u.X.CONNECTIONS_CATEGORY,
    }),
    Cd = (0, a.gN)(u.X.CONNECTED_GAMES_RELATED_SETTINGS, { buildLayout: () => [Cu] }),
    Cc = (0, a.E2)(u.X.CONNECTED_GAMES_UNAVAILABLE, {
        Component: function () {
            let { showLoadingIndicator: e } = Nq(!0, !0);
            return e ? (0, E.jsx)(du.y, {}) : (0, E.jsx)(N$, {});
        },
        useSearchTerms: () => [j.intl.string(j.t["+0U77d"])],
        usePredicate: () => {
            let { showLoadingIndicator: e, slayerSdkApplications: t } = Nq(!0, !0);
            return e || 0 === t.length;
        },
    });
function Cg() {
    let { slayerSdkApplications: e, showLoadingIndicator: t } = Nq(!0, !0);
    return {
        sortedGames: S.useMemo(() => e.toSorted((e, t) => dp.default.compare(t.id, e.id)), [e]),
        showLoadingIndicator: t,
    };
}
function Cm() {
    let { sortedGames: e } = Cg();
    return S.useMemo(() => {
        let t = e[0];
        if (null == t) return null;
        let i = e[1];
        return {
            frontIcon: {
                icon: (0, E.jsx)("img", {
                    src: nt.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                    alt: t.name,
                    width: f.CD,
                    height: f.CD,
                }),
                shape: f.e0.ROUNDED,
            },
            ...(null != i && {
                backIcon: {
                    icon: (0, E.jsx)("img", {
                        src: nt.Ay.getApplicationIconURL({ id: i.id, icon: i.icon }),
                        alt: i.name,
                        width: f.YP,
                        height: f.YP,
                    }),
                    shape: f.e0.ROUNDED,
                },
            }),
        };
    }, [e]);
}
i(839272);
let CA = (0, a.zZ)(u.X.SPAM_FILTERS_CATEGORY, { useTitle: () => j.intl.string(j.t.Qwuoic), buildLayout: () => [_L] }),
    Ch = (0, a.zZ)(u.X.CONNECTED_GAMES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.RyvebU),
        useSubtitle: function () {
            let { sortedGames: e } = Cg(),
                t = e.slice(0, 2).map((e) => e.name);
            return j.intl.format(j.t.ihVNdf, {
                nameCount: t.length,
                game1: t[0],
                game2: t[1],
                remaining: e.length - t.length,
                gameListHook: (e, t) =>
                    (0, E.jsx)(ei.E, { tag: "span", variant: "text-sm/normal", color: "text-default", children: e }, t),
            });
        },
        useHeaderDecoration: () => ({ type: h.WX.STACKED_ICONS, useIcons: Cm }),
        useSearchTerms: () => [j.intl.string(j.t.YpCiMt)],
        initialize: () => {
            E5.A.fetch();
        },
        buildLayout: () => [N3, N6, Cc, Cd],
    }),
    CE = (0, a.t_)(u.X.MESSAGING_PERMISSIONS_PANEL, {
        useTitle: () => j.intl.string(j.t.Cz07t8),
        buildLayout: () => [_D, CA, _F, IN, Ch, _J],
    }),
    CS = (0, a.i4)(u.X.MESSAGING_PERMISSIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.Cz07t8),
        icon: Co.l,
        buildLayout: () => [CE],
    });
var CT = i(782603),
    Cx = i(899847),
    Cp = i(695515),
    Cf = i(936926);
let CN = (0, a.Hn)(u.X.MOBILE_NOTIFICATION_DELAY, {
        useTitle: () => j.intl.string(j.t["8rHeOr"]),
        useSubtitle: () => j.intl.string(j.t["eJE6+J"]),
        useValue: L.cU.useSetting,
        setValue: L.cU.updateSetting,
        useOptions: () =>
            eW
                .range(1, 11)
                .map((e) => ({
                    id: e.toString(),
                    value: 60 * e,
                    label: j.intl.formatToPlainString(j.t.iXLF9W, { minutes: e }),
                })),
    }),
    C_ = (0, a.zD)(u.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => j.intl.string(j.t["btbS+Z"]),
        useSubtitle: () =>
            j.intl.format(j.t.Q5crhR, { onClick: () => (0, eH.openUserSettings)(u.X.TTS_PLAYBACK_RATE) }),
        useValue: L.on.useSetting,
        setValue: L.on.updateSetting,
    }),
    CI = (0, a.Qx)(u.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.JZxxGx),
        useSubtitle: () => j.intl.string(j.t.HDLtJl),
        useValue: () => (0, g.bG)([ub.A], () => ub.A.getTTSType()),
        setValue: (e) => uR.default.setTTSType(e),
        useOptions: () => [
            { name: j.intl.string(j.t.B1AGeJ), value: eA.aVn.ALL_CHANNELS },
            { name: j.intl.string(j.t.uzZg9e), value: eA.aVn.SELECTED_CHANNEL },
            { name: j.intl.string(j.t.DYO5Oi), value: eA.aVn.NEVER },
        ],
        usePredicate: () => nu.$j,
    }),
    CC = u.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    Cb = (0, a.bd)(CC, {
        useTitle: (e) => (e ? j.intl.string(j.t.RyimDk) : j.intl.string(j.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return op(CC, {
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
        buildLayout: () => [CN, C_, CI],
    }),
    Cv = (0, a.zZ)(u.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => j.intl.string(j.t["31DySj"]),
        buildLayout: () => [Cb],
    }),
    Cy = (0, a.zD)(u.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => j.intl.string(j.t.VH8AIJ),
        useSubtitle: () => j.intl.string(j.t["9K4qwX"]),
        useValue: () => (0, g.bG)([ub.A], () => !ub.A.getDisableUnreadBadge()),
        setValue: (e) => uR.default.setDisableUnreadBadge(!e),
    }),
    Cj = (0, a.zZ)(u.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.l6w3Vj),
        buildLayout: () => [Cy],
    });
var CO = i(840559),
    CR = i(997187),
    CL = i(723923);
let CD = CL.px.map((e) =>
        (0, a.zD)(`${u.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                ((e) => {
                    let { categories: t } = (0, g.cf)([CR.A], () => CR.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, CO.CA)(e.category, t),
        }),
    ),
    CP = (0, a.Tf)(u.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => j.intl.string(j.t.Ra9Pwk),
        useSubtitle: () => j.intl.string(j.t.iYjQ8X),
        useLabel: () => j.intl.string(j.t.KT1pBA),
        useDisabled: () => {
            let { categories: e } = (0, g.cf)([CR.A], () => CR.A.getEmailSettings());
            return CL.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, CO.NI)(),
        useVariant: () => "critical-secondary",
    }),
    CG = (0, a.zZ)(u.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => j.intl.string(j.t["w/qqKK"]),
        initialize: function () {
            let { initialized: e } = CR.A.getEmailSettings();
            e || (0, CO.cR)();
        },
        buildLayout: () => [...CD, CP],
    }),
    CM = (0, a.zD)(u.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t["/0WCll"]),
        useSubtitle: () => j.intl.string(j.t.wF9ih3),
        useValue: () => (0, g.bG)([ub.A], () => ub.A.getDesktopType()) !== eA.nRU.NEVER,
        setValue: (e) => uR.default.setDesktopType(e ? eA.nRU.ALL : eA.nRU.NEVER),
    });
var CU = i(832712),
    CV = i(543465),
    Ck = i(406535),
    Cw = i(790782);
let CF = (0, a.zD)(u.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => j.intl.string(j.t["k6m/si"]),
    useSubtitle: () => j.intl.string(j.t.LGynPs),
    useValue: () => (0, g.bG)([CV.Ay], () => CV.Ay.useNewNotifications),
    setValue: function (e) {
        CU.A.setAccountFlag(Ck.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (Em.w.set("turnedOffNewNotifications", !0),
                eo.default.track(eA.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: ed.A.getGuildsArray().filter(
                        (e) => CV.Ay.resolveGuildUnreadSetting(e) === Cw.e.ONLY_MENTIONS,
                    ).length,
                }));
    },
    usePredicate: () =>
        (0, g.bG)(
            [io.default, CV.Ay],
            () =>
                io.default.getCurrentUser()?.isStaff() ||
                io.default.getCurrentUser()?.isStaffPersonal() ||
                CV.Ay.useNewNotifications,
        ),
});
var CB = i(534654);
let Cz = (0, a.zD)(u.X.SCREEN_DOWNTIME_REMINDER, {
        useTitle: () => j.intl.string(j.t.z9h8Ym),
        useSubtitle: () => j.intl.string(j.t.TummoQ),
        useValue: () => (0, g.bG)([ub.A], () => ub.A.screenDowntimeReminder),
        setValue: (e) => uR.default.setScreenDowntimeReminder(e),
        usePredicate: () => {
            let e = (0, Cf.Vh)({ location: "ScreenDowntimeReminderSetting" }),
                t = (0, CB.A)(),
                i = (0, f2.Du)();
            return e && t && i;
        },
    }),
    CX = (0, a.zD)(u.X.SCREEN_DOWNTIME_SCHEDULE, {
        useTitle: () => j.intl.string(j.t.onrAy7),
        useSubtitle: () => j.intl.string(j.t["/071J7"]),
        useValue: L.gY.useSetting,
        setValue: (e) => L.gY.updateSetting(e),
        usePredicate: () => {
            let e = (0, Cf.Vh)({ location: "ScreenDowntimeScheduleSetting" }),
                t = (0, CB.A)(),
                i = (0, f2.Du)();
            return e && t && i;
        },
    });
var CY = i(70730);
let CH = (0, a.zD)(u.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.NjOMvh),
        useValue: L.oz.useSetting,
        setValue: function (e) {
            L.oz.updateSetting(e),
                eo.default.track(eA.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ck.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                });
        },
        useSearchTerms: () => [j.intl.string(j.t.hi4dSk)],
        usePredicate: () => {
            let { enabled: e } = CY.u.getConfig({ location: "FriendAnniversaryNotifications" });
            return e;
        },
    }),
    CK = (0, V.mj)({
        kind: "user",
        name: "2026-03-friend-is-online-v3",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    CW = (0, a.zD)(u.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.sQQgFj),
        useValue: L.NR.useSetting,
        setValue: function (e) {
            L.NR.updateSetting(e),
                eo.default.track(eA.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ck.Y.ACCOUNT,
                    friend_online_notifications: e,
                });
        },
        usePredicate: () => CK.useConfig({ location: "FriendOnlineNotifications" }).showSettingsToggle,
    }),
    CZ = (0, V.mj)({
        name: "2026-03-game-update-notification",
        kind: "user",
        defaultConfig: { showToggle: !1 },
        variations: { 0: { showToggle: !1 }, 1: { showToggle: !0 } },
    });
var Cq = i(275007);
let CQ = (0, a.zD)(u.X.GAME_UPDATE_NOTIFICATIONS, {
    useTitle: () => j.intl.string(Cq.default["ZZIP+o"]),
    useValue: L.JV.useSetting,
    setValue: function (e) {
        L.JV.updateSetting(e),
            eo.default.track(eA.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: Ck.Y.ACCOUNT,
                game_update_notifications: e,
            });
    },
    usePredicate: () => CZ.useConfig({ location: "SettingsRendererConfig" }).showToggle,
});
var CJ = i(571524);
let C$ = (0, a.zD)(u.X.GDM_ALL_REACTION_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.nvkXtr),
        useValue: L.c3.useSetting,
        setValue: function (e) {
            L.c3.updateSetting(e),
                eo.default.track(eA.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ck.Y.ACCOUNT,
                    gdm_all_reaction_notifications: e,
                });
        },
        usePredicate: function () {
            return (0, CJ.h)("GdmAllReactionNotification").showSettingsToggle;
        },
    }),
    C0 = (0, a.zD)(u.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.FSNIvs),
        useValue: L.Yh.useSetting,
        setValue: function (e) {
            L.Yh.updateSetting(e),
                eo.default.track(eA.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ck.Y.ACCOUNT,
                    go_live_notifications: e,
                });
        },
    }),
    C1 = (0, V.mj)({
        kind: "user",
        name: "2026-01-profile-updates-notification",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 0: { showSettingsToggle: !1 }, 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    C2 = (0, a.zD)(u.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.xBLMhQ),
        useValue: L.T3.useSetting,
        setValue: function (e) {
            L.T3.updateSetting(e),
                eo.default.track(eA.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ck.Y.ACCOUNT,
                    profile_updates_notifications: e,
                });
        },
        usePredicate: () => C1.useConfig({ location: "user_settings.ProfileUpdatesNotifications" }).showSettingsToggle,
    });
var C3 = i(815807);
let C6 = (0, a.Hn)(u.X.REACTION_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: j.intl.string(j.t["9x/RtT"]), value: X.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: j.intl.string(j.t.fJAbQd), value: X.Tz.ONLY_DMS },
            { id: "disabled", label: j.intl.string(j.t["xu+UDU"]), value: X.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: L.Zp.useSetting,
        setValue: (e) => (0, C3.n4)(e, L.Zp.getSetting()),
    }),
    C4 = (0, a.zD)(u.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t["k51K1+"]),
        useValue: L.Qr.useSetting,
        setValue: function (e) {
            L.Qr.updateSetting(e),
                eo.default.track(eA.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ck.Y.ACCOUNT,
                    server_trending_notifications: e,
                });
        },
        usePredicate: () => !1,
    }),
    C7 = (0, V.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    C8 = (0, a.zD)(u.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.G8NPz6),
        useValue: L.zS.useSetting,
        setValue: function (e) {
            L.zS.updateSetting(e),
                eo.default.track(eA.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ck.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                });
        },
        usePredicate: () => C7.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    C5 = (0, a.FW)(u.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.FEVRDV),
        buildLayout: () => [C0, CH, CW, C4, C8, CQ, C2, C6, C$],
    }),
    C9 = (0, a.zD)(u.X.TASK_BAR_FLASHING, {
        useTitle: () => j.intl.string(j.t.xSmFQG),
        useSubtitle: () => j.intl.string(j.t.bd4j4x),
        useValue: () => (0, g.bG)([ub.A], () => ub.A.taskbarFlash),
        setValue: (e) => uR.default.setTaskbarFlash(e),
        usePredicate: () => (0, c.uF)(),
    }),
    be = (0, a.zZ)(u.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => j.intl.string(j.t["/dp6yY"]),
        buildLayout: () => [CM, C9, C5, CF, CX, Cz],
    });
var bt = i(965957),
    bi = i(312671),
    bn = i(235079);
let bs = (0, a.zD)(u.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = uv.A.useHolidaySoundpack();
        return null == e ? "" : j.intl.format(j.t["E/OyBr"], { soundpack: j.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, g.bG)([bi.A], () => bi.A.getSoundpack()),
            t = uv.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = uv.A.getHolidaySoundpack();
        tz()(null != t, "predicate should fail if no soundpack is available"), (0, bt.p)(e ? t : bn.i.CLASSIC);
    },
    usePredicate: uv.A.useIsEligible,
});
var bl = i(970931);
let br = {
        useTitle: () => j.intl.string(j.t.jD1qzM),
        sound: "message1",
        useDisabled: bl.kB,
        useDisabledMessage: () => ((0, bl.kB)() ? j.intl.string(j.t.cIRG0s) : void 0),
    },
    ba = { useTitle: () => j.intl.string(j.t.XBrJT6), sound: "call_ringing" },
    bo = (0, a.zD)(u.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.TzjwV9),
        useSubtitle: () => j.intl.format(j.t.OOiGCM, { onClick: () => uP("message3") }),
        useValue: () =>
            (0, g.bG)([ub.A], () => ub.A.getNotifyMessagesInSelectedChannel() && !ub.A.getDisableAllSounds()),
        setValue: (e) => uR.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, g.bG)([ub.A], () => ub.A.getDisableAllSounds()),
    }),
    bu = (0, a.zD)(u.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => j.intl.string(j.t["2ZhCOd"]),
        useSubtitle: () => j.intl.string(j.t.EAKdPr),
        useValue: () => (0, g.bG)([ub.A], () => ub.A.getDisableAllSounds()),
        setValue: (e) => uR.default.toggleDisableAllSounds(e),
    }),
    bd = (0, a.D1)(u.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                uD();
            };
        },
        buildLayout: () => [uG(br), bo, uG(ba), bu],
    }),
    bc = (0, a.AK)(u.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t["MMy+lm"]),
        useSearchTerms: () => [j.intl.string(j.t["MMy+lm"])],
        destinationKey: u.X.SOUNDS_CATEGORY,
    }),
    bg = (0, a.gN)(u.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [bc] }),
    bm = (0, a.zZ)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.LweOYy),
        buildLayout: () => [bs, bd, bg],
    }),
    bA = (0, a.t_)(u.X.NOTIFICATIONS_PANEL, {
        useTitle: () => j.intl.string(j.t.HcoRu0),
        initialize: () => {
            !(0, Cf.Eq)({ location: "NotificationsPanel" }) ||
                null != Cp.A.getAgeGroup() ||
                Cp.A.isLoading() ||
                (Cp.A.canRefetch() && Cx.Ay.initialPageLoad());
        },
        buildLayout: () => [be, bm, Cj, CG, Cv],
    }),
    bh = (0, a.i4)(u.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.HcoRu0),
        icon: CT.X,
        buildLayout: () => [bA],
    }),
    bE = (0, a.WI)(u.X.USER_SECTION, {
        buildLayout: () => {
            let e = (0, o.Bv)("UserSection");
            return [Nu, ...(e ? [] : [Ib]), Ca, ...(e ? [CS] : []), ...(e ? [] : [Nm]), ...(e ? [] : [NW]), bh, NX];
        },
    });
var bS = i(387758),
    bT = i(271866),
    bx = i(147964),
    bp = i(868511);
let bf = (0, a.zD)(u.X.APPLICATION_TEST_MODE, {
        useTitle: () => j.intl.string(j.t.erOqlh),
        useSubtitle: () => j.intl.string(j.t["52hMnD"]),
        usePredicate: L.Q_.useSetting,
        useValue: () => (0, g.bG)([bx.A], () => null != bx.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, Y.openModal)((e) => (0, E.jsx)(bp.A, { ...e })) : bT.cL();
        },
    }),
    bN = (0, a.zD)(u.X.DEVELOPER_MODE, {
        useTitle: () => j.intl.string(j.t.ObIb1Q),
        useSubtitle: () => j.intl.format(j.t["CY6q/Q"], { apiDocsUrl: eA.X7G.API_DOCS }),
        useValue: L.Q_.useSetting,
        setValue: L.Q_.updateSetting,
        usePredicate: () => cD.p5,
    }),
    b_ = (0, a.zZ)(u.X.DEVELOPER_CATEGORY, { buildLayout: () => [bN, bf] }),
    bI = (0, a.t_)(u.X.DEVELOPER_PANEL, { useTitle: () => j.intl.string(j.t["0BRxRp"]), buildLayout: () => [b_] }),
    bC = (0, a.i4)(u.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: bS.G,
        useTitle: () => j.intl.string(j.t["0BRxRp"]),
        buildLayout: () => [bI],
    });
var bb = i(70688),
    bv = i(830215);
let by = (0, a.i4)(u.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => j.intl.string(j.t["2jxGer"]),
        icon: bb.o,
        onClick: () => {
            (0, sc.A)({
                title: j.intl.string(j.t["2jxGer"]),
                subtitle: j.intl.string(j.t.SUnWBB),
                confirmText: j.intl.string(j.t["2jxGer"]),
                onConfirm: () => {
                    bv.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    bj = (0, a.WI)(u.X.UTILITY_SECTION, { buildLayout: () => [bC, by] }),
    bO = (0, a.Hr)({
        buildLayout: function () {
            return [p_, bE, hX, dn, (0, o.Bv)("UserSettingsRoot_buildLayout") ? S2 : i1, E8, bj];
        },
        analyticsKey: "user_settings",
    });
