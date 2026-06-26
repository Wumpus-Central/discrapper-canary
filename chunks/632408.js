i.d(t, { D: () => bq });
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
    p = i(769015),
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
function y(e) {
    let { namedGames: t, totalCount: i } = b(e);
    return { names: t.map((e) => e.name), totalCount: i };
}
function v() {
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
            let { names: e, totalCount: t } = y(2);
            return j.intl.format(j.t["6nRCFl"], {
                also: "true",
                count: t,
                nameCount: e.length,
                game1: e[0],
                game2: e[1],
            });
        },
        useTrailingDecoration: () => ({ type: h.wF.STACKED_ICONS, useIcons: v }),
        destinationKey: u.X.REGISTERED_GAMES_PANEL,
        usePredicate: () => {
            let e = (0, o.SV)("ActivitySharingRelatedSettings"),
                t = (0, g.bG)([m.Ay], () => m.Ay.getGamesSeen(!1).some((e) => !(0, A.n1)(e)));
            return e && t && (0, c.xl)();
        },
    }),
    R = (0, a.gN)(u.X.ACTIVITY_SHARING_RELATED_SETTINGS, { buildLayout: () => [O] });
var D = i(885386),
    L = i(900640);
let P = (0, a.zD)(u.X.ACTIVITY_PRIVACY_SETTING, {
    useTitle: () => j.intl.string(L.default.WhdCGP),
    useSubtitle: () => j.intl.string(L.default.UQ9RHJ),
    useValue: D.tz.useSetting,
    setValue: D.tz.updateSetting,
});
var G = i(174459),
    M = i(406535),
    U = i(652215);
let V = (0, a.zD)(u.X.ACTIVITY_PRIVACY_NOTIFY_FRIENDS_ONLINE_SETTING, {
        useTitle: () => j.intl.string(L.default.A0FVCV),
        useSubtitle: () => j.intl.string(L.default.vHX6RG),
        useValue: D.hV.useSetting,
        setValue: function (e) {
            D.hV.updateSetting(e),
                G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: M.Y.ACCOUNT,
                    notify_friends_on_come_online: e,
                });
        },
    }),
    k = (0, a.zZ)(u.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () =>
            (0, o.SV)("ActivitySharingCategory") ? j.intl.string(j.t.WmsPis) : j.intl.string(j.t["6x5uWQ"]),
        useSearchTerms: () => [j.intl.string(j.t["8ka8li"])],
        buildLayout: () => [P, V, R],
    });
var w = i(945810),
    B = i(106531);
let F = (0, w.mj)({
    name: "2026-02-activity-privacy-matching",
    kind: "user",
    defaultConfig: { copyChanges: !1, upsell: !1 },
    variations: {
        0: { copyChanges: !1, upsell: !1 },
        1: { copyChanges: !0, upsell: !1 },
        2: { copyChanges: !0, upsell: !0 },
    },
});
function z(e) {
    let t = (0, B.lX)(e),
        i = F.useConfig({ location: e });
    return t || i.copyChanges;
}
let X = (0, a.AK)(u.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.J0SFL2),
        destinationKey: u.X.DATA_AND_PRIVACY_PANEL,
    }),
    Y = (0, a.gN)(u.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, B.lX)("ActivityPrivacyRelatedSettings"),
        buildLayout: () => [X],
    });
var H = i(873298),
    K = i(192308),
    W = i(365258);
let Z = (0, a.Qx)(u.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
    useTitle: () => {
        let e = (0, o.SV)("GuildActivitySharingDefaultSetting");
        return z("GuildActivitySharingDefaultSetting") && !e
            ? j.intl.string(j.t.vpgck1)
            : j.intl.string(L.default["/LHVbt"]);
    },
    useSubtitle: () => ((0, o.SV)("GuildActivitySharingDefaultSetting") ? j.intl.string(j.t.L5IdzV) : null),
    useOptions: function () {
        let e = (0, o.SV)("GuildActivitySharingDefaultSetting"),
            t = z("GuildActivitySharingDefaultSetting");
        return S.useMemo(
            () =>
                e
                    ? [
                          { value: H.Qd.ACTIVITY_STATUS_OFF, name: j.intl.string(L.default.m3oL7Q) },
                          { value: H.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: j.intl.string(L.default["5+lnTA"]) },
                          { value: H.Qd.ACTIVITY_STATUS_ON, name: j.intl.string(L.default["egr+VZ"]) },
                      ]
                    : t
                      ? [
                            {
                                value: H.Qd.ACTIVITY_STATUS_OFF,
                                name: j.intl.string(j.t.FzgQna),
                                desc: j.intl.string(j.t.SQxoyc),
                            },
                            {
                                value: H.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                                name: j.intl.string(j.t["1hvuGH"]),
                                desc: j.intl.string(j.t.odUCPE),
                            },
                            { value: H.Qd.ACTIVITY_STATUS_ON, name: j.intl.string(j.t.fQc5la) },
                        ]
                      : [
                            { value: H.Qd.ACTIVITY_STATUS_ON, name: j.intl.string(j.t.UzGMH9) },
                            {
                                value: H.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                                name: j.intl.string(L.default["/sAeRY"]),
                            },
                            { value: H.Qd.ACTIVITY_STATUS_OFF, name: j.intl.string(L.default.m3oL7Q) },
                        ],
            [t, e],
        );
    },
    useValue: D._Z.useSetting,
    setValue: function (e) {
        var t;
        let n = D._Z.getSetting();
        if (
            (D._Z.updateSetting(e),
            (t = "GuildActivitySharingDefaultSetting"),
            !(0, B.W1)(t) && !F.getConfig({ location: t }).upsell)
        )
            return;
        let s = (0, W.g8)(n, e);
        if (null == s) return;
        let l = (0, W.Xc)(e);
        (0, K.openModalLazy)(async () => {
            let { default: e } = await Promise.all([i.e("5796"), i.e("73961"), i.e("62041"), i.e("41996")]).then(
                i.bind(i, 32167),
            );
            return (t) =>
                (0, E.jsx)(e, { ...t, direction: s.direction, affectedGuildIds: s.affectedGuildIds, settingName: l });
        });
    },
});
var Q = i(683071),
    q = i(331322),
    J = i(243721),
    $ = i(892547),
    ee = i(922016),
    et = i(980707),
    ei = i(477782),
    en = i(939249),
    es = i(834730),
    el = i(847374),
    er = i(661531),
    ea = i(123292),
    eo = i(140735),
    eu = i(498642),
    ed = i(743790),
    ec = i(71393),
    eg = i(711014),
    em =
        (((n = {}).SERVER_ORDER = "server-order"),
        (n.RECENTLY_JOINED = "recently-joined"),
        (n.ACTIVITY_SHARING_ON = "activity-sharing-on"),
        (n.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
        n);
let eA = {
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
var eh = i(267857);
function eE(e) {
    let { guild: t, isActivityRestricted: i, onToggleActivityRestrictedGuild: n } = e,
        s = (0, g.bG)([eu.A], () => eu.A.getMemberCount(t.id));
    return (0, E.jsxs)(q.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, E.jsx)("div", { className: eh.FO, children: (0, E.jsx)(ed.K, { guild: t, size: 48 }) }),
            (0, E.jsx)("div", {
                className: eh.QH,
                children: (0, E.jsx)(J.d, {
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
                s = (0, g.bG)([eg.Ay], () => eg.Ay.getFlattenedGuildIds()),
                l = (0, g.bG)([ec.A], () => ec.A.getGuilds()),
                r = s.map((e) => l[e]).filter(Boolean),
                a = D.Pw.useSetting(),
                [o, u] = (0, S.useState)(a);
            async function d(e) {
                u(e);
                try {
                    await D.Pw.updateSetting(e);
                } catch (e) {
                    u(a);
                }
            }
            (0, S.useEffect)(() => {
                u(a);
            }, [a]);
            let c = 0 !== o.length,
                [m, A] = (0, S.useState)(() => eA[i](r, a)),
                h = m.map((e) => l[e.id]).filter(Boolean);
            return {
                guilds: "" === e ? h : h.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
                sortOrder: i,
                searchQuery: e,
                setSortOrder: (e) => {
                    A(eA[e](r, a)), n(e);
                },
                setSearchQuery: t,
                onToggleActivityRestrictedGuild: function (e) {
                    let { checked: t, guildId: i } = e,
                        n = new Set(o);
                    t ? n.delete(i) : n.add(i), d([...n]);
                },
                isActivityRestricted: function (e) {
                    return o.includes(e);
                },
                hasActivityRestrictedGuilds: c,
                onToggleAllActivityRestrictedGuilds: function () {
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
                { id: em.SERVER_ORDER, label: j.intl.string(j.t.STMPJ2), value: em.SERVER_ORDER },
                { id: em.RECENTLY_JOINED, label: j.intl.string(j.t.CbaapP), value: em.RECENTLY_JOINED },
                { id: em.ACTIVITY_SHARING_ON, label: j.intl.string(L.default.ZI51JZ), value: em.ACTIVITY_SHARING_ON },
                {
                    id: em.ACTIVITY_SHARING_OFF,
                    label: j.intl.string(L.default["+kxafn"]),
                    value: em.ACTIVITY_SHARING_OFF,
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
                    (0, E.jsx)($.I, {
                        query: n,
                        onChange: s,
                        onClear: function () {
                            G.default.track(U.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_cleared",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: m,
                            }),
                                s("");
                        },
                        onFocus: () =>
                            G.default.track(U.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_focused",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: m,
                            }),
                        onBlur: () =>
                            G.default.track(U.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
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
                                (0, E.jsx)(ee.Y, {
                                    targetElementRef: h,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, E.jsx)(et.W, {
                                            navId: "guild-sort-order-menu",
                                            onClose: t,
                                            "aria-label": j.intl.string(j.t.LxVjvJ),
                                            onSelect: t,
                                            children: (0, E.jsx)(ei.rX, {
                                                children: T.map((e) => {
                                                    let { id: t, label: i, value: n } = e;
                                                    return (0, E.jsx)(
                                                        ei.iD,
                                                        {
                                                            id: t,
                                                            group: "sort-order",
                                                            label: i,
                                                            checked: l === n,
                                                            action: () => {
                                                                G.default.track(
                                                                    U.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED,
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
                                        (0, E.jsxs)(en.D, {
                                            ...e,
                                            innerRef: h,
                                            className: eh.Ku,
                                            children: [
                                                (0, E.jsx)(es.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: x,
                                                }),
                                                (0, E.jsx)(el.a, { size: "xs", color: er.A.colors.TEXT_SUBTLE }),
                                            ],
                                        }),
                                }),
                                (0, E.jsx)(ea.Q, {
                                    variant: "primary",
                                    textVariant: "text-sm/medium",
                                    onClick: o,
                                    text: a ? j.intl.string(j.t["7lxcLO"]) : j.intl.string(j.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, E.jsx)(eo.A, {
                "aria-live": "polite",
                role: "region",
                children: j.intl.format(L.default.EvzDff, { count: i.length }),
            }),
            (0, E.jsxs)("ul", {
                className: eh.X1,
                id: A,
                "aria-label": j.intl.string(j.t["7hB4kg"]),
                children: [
                    0 === i.length &&
                        (0, E.jsx)("div", {
                            className: eh.pb,
                            children: (0, E.jsx)(es.E, {
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
var eT = i(177325);
let ex = (0, a.E2)(u.X.ACTIVITY_PRIVACY_PER_GUILD_SETTING, {
        useSearchTerms: () => [j.intl.string(L.default["/LHVbt"])],
        Component: function () {
            let e = D.tz.useSetting()
                ? null
                : (0, E.jsx)("div", {
                      className: eT.l,
                      children: (0, E.jsx)(Q.w, { type: "warning", children: j.intl.string(L.default["xxI0/W"]) }),
                  });
            return (0, E.jsx)(eS, { notice: e });
        },
    }),
    ep = (0, a.zZ)(u.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () => {
            let e = (0, o.SV)("GuildActivitySharingCategory"),
                t = z("GuildActivitySharingCategory");
            return e ? j.intl.string(j.t.bwqjL9) : t ? j.intl.string(j.t.VDcvrR) : j.intl.string(L.default["1PougL"]);
        },
        useSubtitle: () => {
            let e = z("GuildActivitySharingCategory");
            return (0, o.SV)("GuildActivitySharingCategory")
                ? null
                : e
                  ? j.intl.string(j.t["/Go08F"])
                  : j.intl.string(L.default.OO17Lg);
        },
        buildLayout: () => ((0, o.Bv)("GuildActivitySharingCategory") ? [Z, ex, Y] : [Z]),
    }),
    ef = (0, a.zZ)(u.X.ACTIVITY_PRIVACY_MY_SERVERS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.TqdOvC),
        useSubtitle: () => (z("MyServersCategory") ? j.intl.string(L.default.OO17Lg) : null),
        buildLayout: () => [ex, Y],
    }),
    eN = (0, a.zD)(u.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => j.intl.string(L.default.khuuzv),
        useSubtitle: () => j.intl.string(L.default["8EWsJ8"]),
        useValue: () => D.e.useSetting(),
        setValue: (e) => D.e.updateSetting(e),
    }),
    e_ = (0, a.E2)(u.X.ACTIVITY_PRIVACY_GAME_JOINING_BLURB, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, E.jsx)(es.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: j.intl.format(j.t.Mf0720, {
                    privacySettingsHook: (e, t) =>
                        (0, E.jsx)(
                            es.E,
                            { tag: "span", variant: "text-sm/semibold", color: "text-muted", children: e },
                            t,
                        ),
                }),
            });
        },
        usePredicate: () => (0, o.SV)("GameJoiningBlurb"),
    }),
    eI = (0, a.zD)(u.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => j.intl.string(L.default.Uz5Ipi),
        useSubtitle: () => j.intl.string(L.default.CZI2Gb),
        useValue: () => D.UM.useSetting(),
        setValue: (e) => D.UM.updateSetting(e),
    }),
    eC = (0, a.zZ)(u.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => j.intl.string(L.default["89YBr5"]),
        useSubtitle: () => ((0, o.SV)("GameJoiningCategory") ? j.intl.string(j.t.uGDpgH) : null),
        buildLayout: () => [eN, eI, e_],
        useSearchTerms: () => [j.intl.string(j.t.VOszPA)],
    });
var eb = i(993077),
    ey = i(494915);
let ev = (0, a.E2)(u.X.ACTIVITY_PRIVACY_TERMS, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, E.jsx)(eb.Z, {
                type: eb.Z.Types.PRIMARY,
                className: ey.A,
                children: (0, E.jsx)(es.E, {
                    variant: "text-sm/normal",
                    children: j.intl.format(j.t.xvCsx4, { termsLink: U.X7G.TERMS, privacyLink: U.X7G.PRIVACY }),
                }),
            });
        },
    }),
    ej = (0, a.zZ)(u.X.ACTIVITY_PRIVACY_TERMS_CATEGORY, {
        buildLayout: () => [ev],
        usePredicate: () => !(0, o.SV)("TermsCategory"),
    }),
    eO = (0, a.t_)(u.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => j.intl.string(j.t.Cq98yL),
        buildLayout: () => ((0, o.Bv)("ActivityPrivacyPanel") ? [k, ep, eC] : [k, ep, ef, eC, ej]),
    }),
    eR = (0, a.i4)(u.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.Cq98yL),
        icon: d._,
        buildLayout: () => [eO],
    });
var eD = i(935399),
    eL = i(625657),
    eP = i(534514),
    eG = i(821609),
    eM = i(404778),
    eU = i(554146),
    eV = i(131607),
    ek = i(589051),
    ew = i(592598),
    eB = i(351906),
    eF = i(532624),
    ez = i(773371),
    eX = i(184809),
    eY = i(723702),
    eH = i(766075),
    eK = i(999834),
    eW = i(735438),
    eZ = i.n(eW),
    eQ = i(350535),
    eq = i(672396);
let eJ = e0(null);
function e$() {
    var e;
    let t = e0(eJ);
    (e = eJ),
        eZ().isEqual(eZ().omit(t, "old_enabled"), eZ().omit(e, "old_enabled")) ||
            (G.default.track(U.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (eJ = t));
}
function e0(e) {
    let t = eX.default.getNotificationPositionMode(),
        i = t !== U.G6Q.DISABLED,
        n = eF.Ay.getOverlayKeybind(),
        s = eF.Ay.getOverlayChatKeybind();
    return {
        enabled: ez.default.enabled,
        notifications_enabled: i,
        notifications_position: i ? t : null,
        text_notifications_mode: ew.A.isNotificationDisabled(eq.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != n ? (0, eQ.dI)(n.shortcut) : null,
        text_activation_hotkey: null != s ? (0, eQ.dI)(s.shortcut) : null,
        text_opacity_slider: eX.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? ez.default.enabled,
    };
}
var e1 = i(793574),
    e2 = i(237984),
    e3 = i(503698),
    e6 = i.n(e3),
    e4 = i(890856),
    e7 = i(92488);
function e5(e) {
    e.preventDefault(), e.stopPropagation();
}
function e8(e) {
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
                                    (0, E.jsx)(es.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: e7.SZ,
                                        children: n,
                                    }),
                                    null != s &&
                                        (0, E.jsx)(es.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: s,
                                        }),
                                    null != r &&
                                        (0, E.jsx)(es.E, {
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
        return (0, E.jsx)(e8, {
            title: j.intl.string(j.t["z4/l+V"]),
            description: j.intl.string(j.t["3aZq/0"]),
            action: (0, E.jsx)(eG.$, {
                variant: "primary",
                text: j.intl.string(j.t.s2nVhG),
                onClick: () => {
                    (0, e2.b)(e1.A.USER_SETTINGS, U.BRT.APP);
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
            (0, K.openModalLazy)(async () => {
                let n,
                    { default: s } = await Promise.all([i.e("59369"), i.e("82318")]).then(i.bind(i, 387101));
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
                  children: j.intl.format(j.t["LJzl+0"], { helpCenterLink: tN.A.getArticleURL(U.MVz.SYSTEM_SERVICE) }),
              }),
          })
        : null;
}
var tb = i(760751),
    ty = i(189081),
    tv = i(9302),
    tj = i(656513),
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
function tD(e) {
    let { children: t, className: i, onExpand: n, ...s } = e,
        [l, r] = S.useState(!1);
    return (0, E.jsx)(tj.N, {
        className: e7.uR,
        collapsibleContent: (0, E.jsx)("div", { className: e7.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, E.jsx)(e8, {
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
                            ? (0, E.jsx)(el.a, {
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
let tL = (0, a.E2)(u.X.OVERLAY_CURRENT_GAME, {
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
                [tb.A, ty.A],
                () =>
                    null == e && null == n
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: n?.legacyEnabled ?? !1, enabledOOP: n?.oopEnabled ?? !1 }
                          : (0, m.hw)(e, !1, [tb.A, ty.A]),
                [e, n],
            ),
            r = (0, g.bG)([m.Ay, tb.A, ty.A], () => (null == e ? null : (0, m.xU)(e, m.Ay, tb.A, ty.A)), [e], tt()),
            [a, o] = S.useState(l),
            [u, d] = S.useState(s),
            [c, A] = S.useState(!1);
        S.useEffect(() => {
            o(l), d(s);
        }, [l, s]);
        let h = !(0, tv.supportsLegacy)(),
            T = !(0, tv.supportsOutOfProcess)(),
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
            y = n?.overlayMethod === th.Ue.Disabled,
            v = n?.state === th.AR.OVERLAY_RENDERING && !y,
            O = n?.state != null && tR.has(n.state) && !y,
            R = n?.overlayMethod === th.Ue.OutOfProcess,
            D = n?.overlayMethod === th.Ue.OutOfProcessLimitedInteraction,
            L = n?.overlayMethod === th.Ue.Hook,
            P = n?.state === th.AR.OVERLAY_CRASHED || n?.state === th.AR.OVERLAY_CRASHED_DISABLED,
            G = !a && !u,
            [M, U] = (() => {
                switch (!0) {
                    case v && R:
                        return [
                            j.intl.format(j.t.hFVBIg, {
                                overlayMethod: j.intl.string(j.t.a3eXSw),
                                overlayMethodHook: function (e, t) {
                                    return (0, E.jsx)(
                                        es.E,
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
                    case v && D:
                        return [
                            j.intl.format(j.t.hFVBIg, {
                                overlayMethod: j.intl.string(j.t["506Aba"]),
                                overlayMethodHook: function (e, t) {
                                    return (0, E.jsx)(
                                        es.E,
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
                    case v && L:
                        return [
                            j.intl.format(j.t.hFVBIg, {
                                overlayMethod: j.intl.string(j.t.bvlpDR),
                                overlayMethodHook: function (e, t) {
                                    return (0, E.jsx)(
                                        es.E,
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
                        if (L) return [j.intl.string(j.t.JEEdqt), null];
                        if (D) return [j.intl.string(j.t.pzBMwY), null];
                        return [j.intl.string(j.t["2Xhy9k"]), null];
                    case null == n:
                        return [j.intl.string(j.t.vwHPRi), null];
                    case y: {
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
                    ? ["text-muted", er.A.colors.TEXT_MUTED.css]
                    : v && D
                      ? ["text-feedback-warning", er.A.colors.TEXT_FEEDBACK_WARNING.css]
                      : v && R
                        ? ["text-feedback-positive", er.A.colors.TEXT_FEEDBACK_POSITIVE.css]
                        : v && L
                          ? ["text-strong", er.A.colors.TEXT_STRONG.css]
                          : ["interactive-text-default", er.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
            [O, v, D, R, L],
        );
        return null == e
            ? null
            : (0, E.jsxs)(tD, {
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
                                        color: er.A.colors.BACKGROUND_BRAND.css,
                                        children: (0, E.jsx)(ta.U, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: er.A.colors.WHITE.css,
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
                          v || O
                              ? (0, E.jsx)(to.k, { size: "xxs", color: k })
                              : (0, E.jsx)("div", { className: e7.W4 }),
                          (0, E.jsx)(es.E, {
                              variant: "text-xs/semibold",
                              color: V,
                              children: j.intl.string(j.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, E.jsx)(p.A, { game: t, pid: e?.pid, size: p.M.MEDIUM }),
                  "aria-label": j.intl.string(j.t["87O5GC"]),
                  action: (0, E.jsx)(en.D, {
                      onClick: (e) => e5(e),
                      children: (0, E.jsx)(J.d, {
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
                                  (function (e, t) {
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
                      (0, E.jsx)(e8, {
                          title: j.intl.string(j.t["7BlVIs"]),
                          description: j.intl.string(j.t.ndgADE),
                          hint: f ? void 0 : j.intl.string(j.t.cAFVsL),
                          "aria-label": j.intl.string(j.t["7BlVIs"]),
                          action: (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(J.d, {
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
                      (0, E.jsx)(e8, {
                          title: j.intl.string(j.t.BfFpW1),
                          description: j.intl.string(j.t.OzInYk),
                          hint: x ? void 0 : j.intl.string(j.t["3sYHXm"]),
                          "aria-label": j.intl.string(j.t.BfFpW1),
                          action: (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(J.d, {
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
        o = (0, g.cf)([m.Ay, tb.A, ty.A], () => (0, m.xU)(t, m.Ay, tb.A, ty.A)),
        u = (0, g.cf)([tb.A, ty.A], () => (0, m.hw)(t, !1, [tb.A, ty.A]), [t]),
        d = s(u),
        [c, A] = S.useState(d);
    return (
        S.useEffect(() => {
            A(d);
        }, [d]),
        (0, E.jsx)(e8, {
            title: t.name,
            icon: (0, E.jsx)(tM, { game: o, gameApplication: i }),
            "aria-label": a,
            action: (0, E.jsxs)(E.Fragment, {
                children: [
                    (0, E.jsx)(J.d, {
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
                r = !(0, tv.supportsLegacy)();
            function a(e) {
                td.A.setEnabled(e, n);
                let t = m.Ay.getCurrentGameForAnalytics()?.id ?? null;
                (0, tA.Q3)(e, tA.OverlayToggledClientSettingType.LEGACY, t),
                    !e && i && tp(tA.OverlayToggledClientSettingType.LEGACY, t);
            }
            function o(e, t, i) {
                let { enabledOOP: n } = i;
                tu.Ay.toggleOverlay(t, e, n);
            }
            let u = S.useMemo(
                () =>
                    (0, tv.supportsLegacy)()
                        ? r
                            ? j.intl.string(j.t.r9jEVw)
                            : j.intl.string(j.t.OzInYk)
                        : j.intl.string(j.t["8Ox6/E"]),
                [r],
            );
            return 0 === s.length
                ? (0, E.jsx)(e8, {
                      title: j.intl.string(j.t.BfFpW1),
                      description: u,
                      "aria-label": j.intl.string(j.t.BfFpW1),
                      className: e7.dA,
                      action: (0, E.jsxs)(E.Fragment, {
                          children: [
                              (0, E.jsx)(J.d, { checked: i, disabled: r, onChange: (e) => a(e) }),
                              tG.O && (0, E.jsx)("div", { className: e7.Kz }),
                          ],
                      }),
                  })
                : (0, E.jsxs)(tD, {
                      onExpand: t,
                      className: e ? e7.tx : void 0,
                      title: j.intl.string(j.t.BfFpW1),
                      description: u,
                      "aria-label": j.intl.string(j.t.BfFpW1),
                      action: (0, E.jsx)(en.D, {
                          onClick: (e) => e5(e),
                          children: (0, E.jsx)(J.d, { checked: i, disabled: r, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, E.jsx)("div", {
                              className: e7.SC,
                              children: (0, E.jsx)(es.E, {
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
                s = !(0, tv.supportsOutOfProcess)(),
                l = (0, g.yK)([m.Ay], () => m.Ay.getGamesSeen(!0)).filter((e) => !(0, A.n1)(e)),
                r = (0, ti.A)(l.map((e) => e.id));
            function a(e) {
                let t = !e && i;
                td.A.setEnabled(n, e);
                let s = m.Ay.getCurrentGameForAnalytics()?.id ?? null;
                (0, tA.Q3)(e, tA.OverlayToggledClientSettingType.OOP, s),
                    t && tp(tA.OverlayToggledClientSettingType.OOP, s);
            }
            function o(e, t, i) {
                let { enabledLegacy: n } = i;
                tu.Ay.toggleOverlay(t, e, n);
            }
            let u = S.useMemo(
                () => (tG.O ? (s ? j.intl.string(j.t.C7bLTQ) : j.intl.string(j.t.ndgADE)) : j.intl.string(j.t.m7X4az)),
                [s],
            );
            return 0 === l.length
                ? (0, E.jsx)(e8, {
                      title: j.intl.string(j.t["7BlVIs"]),
                      description: u,
                      "aria-label": j.intl.string(j.t["7BlVIs"]),
                      className: e7.dA,
                      action: (0, E.jsxs)(E.Fragment, {
                          children: [
                              (0, E.jsx)(J.d, { checked: i, disabled: s, onChange: (e) => a(e) }),
                              tG.O && (0, E.jsx)("div", { className: e7.Kz }),
                          ],
                      }),
                  })
                : (0, E.jsxs)(tD, {
                      onExpand: t,
                      className: e ? e7.tx : void 0,
                      title: j.intl.string(j.t["7BlVIs"]),
                      description: u,
                      "aria-label": j.intl.string(j.t["7BlVIs"]),
                      action: (0, E.jsx)(en.D, {
                          onClick: (e) => e5(e),
                          children: (0, E.jsx)(J.d, { checked: i, disabled: s, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, E.jsx)("div", {
                              className: e7.SC,
                              children: (0, E.jsx)(es.E, {
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
        buildLayout: () => [tL, tk, tV, e9],
    }),
    tB = (0, a.zD)(u.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, g.bG)([eX.default], () => !eX.default.disableClickableRegions),
        setValue: (e) => {
            td.A.setDisableClickableRegions(!e);
        },
        useTitle: () => j.intl.string(j.t["+eFXxq"]),
        useSubtitle: () => j.intl.string(j.t.kivMAp),
    });
var tF = i(284009),
    tz = i.n(tF),
    tX = i(97260),
    tY = i(635242);
let tH = (0, a.E2)(u.X.OVERLAY_KEYBIND_SETTING, {
    Component: function () {
        let e = (0, g.bG)([eF.Ay], () => eF.Ay.getOverlayKeybind()),
            t = !(0, tv.supportsLegacy)(),
            i = !(0, tv.supportsOutOfProcess)(),
            [n, s] = (0, g.yK)([m.Ay], () => [m.Ay.canShowAdminWarning, m.Ay.getVisibleGame()], []),
            l = (0, t_.NP)(),
            r = null != s && s.elevated && n && !l,
            a = !(0, eF.DV)(e?.shortcut ?? []);
        return (0, E.jsx)("div", {
            className: e7.hc,
            children: (0, E.jsxs)("div", {
                className: e7.eH,
                children: [
                    (0, E.jsxs)("div", {
                        className: e7.Bu,
                        children: [
                            (0, E.jsx)(es.E, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: j.intl.string(j.t.VsAZcC),
                            }),
                            r &&
                                (0, E.jsx)(es.E, {
                                    variant: "text-xs/normal",
                                    color: "text-feedback-warning",
                                    className: e7.y7,
                                    children: j.intl.string(j.t.NsowVa),
                                }),
                            a &&
                                (0, E.jsx)(es.E, {
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
    tQ = (0, a.zZ)(u.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [tH, tZ, tB] });
var tq = i(93465);
let tJ = [
    {
        title: j.t.eVE4LX,
        description: j.t["72WNqk"],
        disabledSetting: tq.M.TEXT_CHAT,
        key: u.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: j.t.oifnSh,
        description: j.t.bgU5r0,
        disabledSetting: tq.M.WELCOME_GENERAL,
        key: u.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: j.t.hqsZJW,
        description: j.t.kHjdqc,
        disabledSetting: tq.M.GO_LIVE_NUDGE,
        key: u.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: j.t.sop3rn,
        description: j.t.pjgffc,
        disabledSetting: tq.M.GAME_ACTIVITY,
        key: u.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: j.t["2QVhbb"],
        description: j.t.wQ4ilB,
        disabledSetting: tq.M.NOW_PLAYING,
        key: u.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: j.t.giM9fA,
        description: j.t.EhAfWj,
        disabledSetting: tq.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: u.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, ek.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, g.bG)([ew.A], () => ew.A.isNotificationDisabledBySetting(tq.M.NOW_PLAYING));
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
            { id: "large", label: j.intl.string(j.t.YcOxtr), value: U.OSZ.LARGE },
            { id: "small", label: j.intl.string(j.t.BKIKqx), value: U.OSZ.SMALL },
        ],
    }),
    t3 = (0, a.Hn)(u.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => j.intl.string(j.t.J0dpcB),
        useValue: () => (0, g.bG)([eX.default], () => eX.default.getDisplayNameMode()),
        setValue: (e) => {
            td.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: j.intl.string(j.t.nBmDrT), value: U.pwA.ALWAYS },
            { id: "speaking", label: j.intl.string(j.t["2OvIZY"]), value: U.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: j.intl.string(j.t.ekjlPL), value: U.pwA.NEVER },
        ],
    }),
    t6 = (0, a.Hn)(u.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => j.intl.string(j.t.swsWWC),
        useValue: () => (0, g.bG)([eX.default], () => eX.default.getDisplayUserMode()),
        setValue: (e) => {
            td.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: j.intl.string(j.t.nBmDrT), value: U.f5z.ALWAYS },
            { id: "speaking", label: j.intl.string(j.t["2OvIZY"]), value: U.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var t4 = i(391973),
    t7 = i(489277),
    t5 = i(897720),
    t8 = i(38502);
function t9() {
    let e = t7.A.getWidgetByType(U.uss.VOICE_V3);
    if (null == e) return null;
    let t = t8.A.getWidget(e.id);
    return null != t && (0, t5.ZO)(t) ? t : null;
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
                r = (0, g.bG)([t7.A, t8.A], () => {
                    let e = t7.A.getWidgetByType(U.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = t8.A.getWidget(e.id);
                    return null != t && (0, t5.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = iu(t.username)).user = t), e) : null, ...l].filter(N.Vq),
                u = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                d = (0, E.jsx)(it.N, {
                    theme: U.NJ8.MIDNIGHT,
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
                                            type: U.rbe.GUILD_VOICE,
                                            guild_id: "456",
                                        }),
                                        overlayVoiceStates: u,
                                        displayNameMode: n,
                                        displayUserMode: s,
                                        avatarSizeMode: i,
                                        widget: U.uss.VOICE,
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
    im = i(294977);
function iA() {
    let [e, t] = (0, eV.kn)([eU.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
    return ((0, eD.Ay)(() => () => {
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
                                      (0, E.jsx)(es.E, {
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
    let e = (0, g.bG)([eB.A], () => eB.A.enabled),
        t = (0, ek.Mn)("OverlayStreamerModeNotice");
    return e && t
        ? (0, E.jsxs)(E.Fragment, {
              children: [
                  (0, E.jsx)(Q.w, {
                      type: "warning",
                      children: j.intl.format(j.t.fuEX5B, {
                          onClick: function () {
                              return (0, eH.openUserSettings)(u.X.STREAMER_MODE_CATEGORY);
                          },
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
                eF.Ay.addChangeListener(e$),
                ew.A.addChangeListener(e$),
                eX.default.addChangeListener(e$),
                ez.default.addChangeListener(e$),
                eY.isPlatformEmbedded && (0, _.a2)(),
                () => {
                    eF.Ay.removeChangeListener(e$),
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
        buildLayout: () => [tw, tQ, ic, t1],
    }),
    iS = (0, a.i4)(u.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["9cb1Uz"]),
        icon: eL.l,
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
    iy = i(39623),
    iv = i(952270),
    ij = i(138134),
    iO = i(414079),
    iR = i(29160),
    iD = i(650583),
    iL = i(272125),
    iP = i(489979);
let iG = (0, eY.isWindows)();
function iM(e) {
    let { rawGame: t, nowPlaying: n = !1, isOverride: s, subgames: l, isSubgame: r = !1, parentGame: a } = e,
        o = (0, g.cf)([m.Ay, tb.A, ty.A], () => (0, m.xU)(t, m.Ay, tb.A, ty.A)),
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
            [iL.LO]: !n,
            [iL.Rw]: n,
            [iL.FB]: null != o && n,
            [iL.xL]: r,
            [iL.fG]: null != l && l.length > 0,
        });
    function _() {
        null != l && l.length > 0 && d
            ? (0, K.openModalLazy)(async () => {
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
                        className: e6()(iL.$K, iP.Vd),
                        children: [
                            o.verified && !s
                                ? (0, E.jsxs)("div", {
                                      className: iL.HS,
                                      children: [
                                          (0, E.jsx)("div", { className: iL.mO, children: x }),
                                          (0, E.jsx)(tr.m, {
                                              text: j.intl.string(j.t["4PJP5p"]),
                                              children: (0, E.jsx)(tm.A, {
                                                  className: iL.qf,
                                                  size: 18,
                                                  color: er.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, E.jsx)(ta.U, {
                                                      size: "custom",
                                                      width: 18,
                                                      height: 18,
                                                      color: er.A.unsafe_rawColors.WHITE.css,
                                                  }),
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, E.jsx)("input", {
                                      className: e6()(iL.mO, iL.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: p,
                                      onBlur: function () {
                                          o.name !== p && tu.Ay.editName(o, p);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === iD.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
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
                                        className: iL.GN,
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
                              className: e6()(iP.tR, iP.oA, iP.LT, iL.E3),
                              children: (0, E.jsx)(tr.m, {
                                  text: j.intl.string(j.t["y0B+lo"]),
                                  children: (0, E.jsx)(en.D, {
                                      "aria-label": j.intl.string(j.t["y0B+lo"]),
                                      className: iL.ym,
                                      onClick: function () {
                                          if (h) return;
                                          let e = null != o.id ? tb.A.getDetectableGame(o.id) : null;
                                          G.default.track(U.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
                                              application_id: e?.id,
                                              game_name: (0, A.n1)(o) ? o.gameName : o.name,
                                          }),
                                              T(!0),
                                              (0, K.openModalLazy)(async () => {
                                                  let { default: t } = await Promise.all([
                                                      i.e("57656"),
                                                      i.e("27495"),
                                                  ]).then(i.bind(i, 651930));
                                                  return (i) =>
                                                      (0, E.jsx)(t, {
                                                          ...i,
                                                          detectedActivity: {
                                                              name: o.name ?? "",
                                                              application_id: e?.id ?? o.id ?? void 0,
                                                              type: U.$pd.PLAYING,
                                                          },
                                                          onSubmitted: () => {},
                                                      });
                                              });
                                      },
                                      children: (0, E.jsx)(ij.i, {
                                          size: "md",
                                          color: "currentColor",
                                          className: iL.Lj,
                                          colorClass: iL.GS,
                                      }),
                                  }),
                              }),
                          }),
                    (function () {
                        let { detectable: e } = o,
                            t =
                                e && u
                                    ? (0, E.jsx)(iy.b, {
                                          size: "md",
                                          color: "currentColor",
                                          className: iL.Lj,
                                          colorClass: iL.GS,
                                      })
                                    : (0, E.jsx)(iv.G, {
                                          size: "md",
                                          color: "currentColor",
                                          className: u ? iL.$V : iL.zN,
                                          colorClass: iL.GS,
                                      });
                        return (0, E.jsx)("div", {
                            className: e6()(iP.tR, iP.oA, iP.LT, iL.E3),
                            children: (0, E.jsx)(tr.m, {
                                text: j.intl.string(j.t.QmitzM),
                                children: u
                                    ? (0, E.jsx)(en.D, {
                                          "aria-label": j.intl.string(j.t.QmitzM),
                                          className: iL.ym,
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
                                      className: iL.Lj,
                                      colorClass: iL.GS,
                                  })
                                : (0, E.jsx)(ib.n, {
                                      size: "md",
                                      color: "currentColor",
                                      className: iL.$V,
                                      colorClass: iL.GS,
                                  }),
                            n = t
                                ? (0, E.jsx)(tr.m, {
                                      text: j.intl.string(j.t.Vfw2L5),
                                      children: (0, E.jsx)("i", { className: iL.kb }),
                                  })
                                : null;
                        return (0, E.jsxs)("div", {
                            className: e6()(iP.tR, iP.oA, iP.LT, iL.E3),
                            children: [
                                n,
                                (0, E.jsx)(tr.m, {
                                    text: j.intl.string(j.t["1+O+Tu"]),
                                    children: (0, E.jsx)(en.D, {
                                        "aria-label": j.intl.string(j.t["1+O+Tu"]),
                                        className: iL.ym,
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
                              className: iL.LS,
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
                    className: iL.AQ,
                    children: l.map((e, t) =>
                        (0, E.jsxs)(
                            S.Fragment,
                            {
                                children: [
                                    (0, E.jsx)(iM, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== l.length - 1 && (0, E.jsx)("div", { className: iL.PQ }),
                                ],
                            },
                            (0, m.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
var iU = i(373378);
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
var iB = i(424994);
let iF = (0, a.zZ)(u.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [iw, ip],
    useTitle: () => j.intl.string(j.t.jCOdvx),
    useSubtitle: () => j.intl.format(j.t.KPA3m9, { igdbLink: iB.s8 }),
});
var iz = i(305866),
    iX = i(783878),
    iY = i(599591),
    iH = i(794005);
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
                    (0, E.jsx)(ea.Q, { variant: "secondary", text: j.intl.string(j.t["ETE/oC"]), onClick: t }),
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
var iW = i(339118);
let iZ = (0, a.E2)(u.X.REGISTERED_GAMES_ADD_GAME_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.GTCx0p)],
    Component: function () {
        let e = S.useRef(null);
        return (0, E.jsxs)("div", {
            className: e6()(iW.a, iU.Gf),
            children: [
                (0, E.jsx)("span", { children: j.intl.string(j.t.xwhoqM) }),
                (0, E.jsx)(ee.Y, {
                    targetElementRef: e,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, E.jsx)(iK, { onClose: t });
                    },
                    align: "center",
                    position: "bottom",
                    children: (t) =>
                        (0, E.jsx)(ea.Q, {
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
function iQ() {
    return (0, E.jsx)("div", {
        className: e6()(iP.tR, iL.eS, iL.Rw),
        children: (0, E.jsxs)("div", {
            className: e6()(iL.$K, iP.Vd),
            children: [
                (0, E.jsx)("div", { className: iL.mO, children: j.intl.string(j.t.H68X9x) }),
                (0, E.jsx)("div", { className: iL.GN, children: j.intl.string(j.t.T5Ilmw) }),
            ],
        }),
    });
}
let iq = (0, a.E2)(u.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["MY9/Oe"])],
        Component: function () {
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
                : (0, E.jsx)(iQ, {});
        },
    }),
    iJ = (0, a.zZ)(u.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => j.intl.string(j.t["MY9/Oe"]),
        buildLayout: () => [iq, iZ],
    }),
    i$ = (0, a.t_)(u.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => j.intl.string(j.t.AVDyEj),
        buildLayout: () => [iJ, iF],
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
    i3 = i(346055),
    i6 = i(97808),
    i4 = i(778712),
    i7 = i(775602),
    i5 = i(320095),
    i8 = i(963852),
    i9 = i(763754),
    ne = i(20851),
    nt = i(486020),
    ni = i(525013);
let nn = new il.nA({ id: "1337", guild_id: "1337", type: U.rbe.GUILD_TEXT, name: "preview" }),
    ns = [
        { status: U.clD.IDLE, discriminator: "2" },
        { status: U.clD.DND, discriminator: "3" },
        { status: U.clD.ONLINE, mobile: !0, discriminator: "4" },
    ];
function nl(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (0, i5.rh)({ ...(0, i8.Ay)({ channelId: nn.id, content: e }), state: U.cmJ.SENT, reactions: t });
}
var nr = i(856488);
let na = (0, a.zD)(u.X.ENABLE_LEGACY_CHAT_INPUT, {
        useTitle: () => j.intl.string(j.t.TZ2hZH),
        useSubtitle: () => j.intl.string(j.t.Q7wgHc),
        useValue: () => D.D_.useSetting(),
        setValue: (e) => D.D_.updateSetting(e),
    }),
    no = (0, a.zD)(u.X.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS, {
        useTitle: () => j.intl.string(j.t.XYvMIX),
        useSubtitle: () => j.intl.string(j.t.T0rbtM),
        useValue: D._z.useSetting,
        setValue: D._z.updateSetting,
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
        (0, eD.l0)(() => (0, nm.pr)()),
        (0, E.jsx)(eG.$, {
            text: j.intl.string(j.t.SKNnqq),
            icon: e ? nc.E : ng.u,
            size: "sm",
            onClick: function () {
                if (e) {
                    (0, nm.pr)(), t(!1);
                    return;
                }
                (0, nm.AU)(
                    j.intl.string(j.t.PKaNJL),
                    !0,
                    void 0,
                    function () {
                        return t(!0);
                    },
                    function () {
                        return t(!1);
                    },
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
            return (0, E.jsxs)(q.B, {
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
                                ? (0, E.jsx)(es.E, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: j.intl.string(j.t["493lwX"]),
                                  })
                                : 10 === e
                                  ? (0, E.jsx)(es.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: j.intl.string(j.t.ZSZEdS),
                                    })
                                  : 1 === e
                                    ? (0, E.jsx)(es.E, {
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
    useValue: () => (0, g.bG)([i7.Ay], () => i7.Ay.desaturateUserColors),
    setValue: () => (0, nN.YV)(),
});
var nI = i(652525);
let nC = (0, a.zD)(u.X.ENABLE_CUSTOM_CURSOR, {
        useTitle: () => j.intl.string(j.t["+Isihb"]),
        useSubtitle: () => j.intl.string(j.t.nNZ1Tz),
        useValue: () => (0, g.bG)([i7.Ay], () => i7.Ay.enableCustomCursor),
        setValue: (e) => (0, nN.ts)(e),
        usePredicate: () => (0, nI.t)("EnableCustomCursorSetting"),
    }),
    nb = (0, a.zD)(u.X.ENABLE_SWITCH_ICONS, {
        useTitle: () => j.intl.string(j.t["S3z+pV"]),
        useSubtitle: () => j.intl.string(j.t["3QuI9+"]),
        useValue: () => (0, g.bG)([i7.Ay], () => i7.Ay.isSwitchIconsEnabled),
        setValue: (e) => (0, nN.Gm)(e),
        hasIcon: !0,
    }),
    ny = (0, a.zD)(u.X.HIGH_CONTRAST_MODE, {
        useTitle: () => j.intl.string(j.t.aZlePv),
        useSubtitle: () => j.intl.string(j.t["v2qF8+"]),
        useValue: () => (0, g.bG)([i7.Ay], () => i7.Ay.isHighContrastModeEnabled),
        setValue: (e) => (0, nN.uh)(e ? i7._1.HIGH : i7._1.DEFAULT),
        getDismissibleBadges: () => [
            { badgeType: h.Xi.NEW, dismissibleContent: eU.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE },
        ],
    });
var nv = i(406360),
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
            return (0, nv.i)("HDRDynamicRangeSetting");
        },
        setValue: function (e) {
            (0, nN.FU)(e);
        },
        useValue: function () {
            return (0, g.bG)([nj.Ay], () => nj.Ay.hdrDynamicRange);
        },
        useSearchTerms: () => ["HDR", j.intl.string(j.t["O/Gjvn"])],
    }),
    nR = (0, a.Hn)(u.X.OFFICIAL_MESSAGE_STYLE, {
        useTitle: () => j.intl.string(j.t.nC2XBl),
        useSubtitle: () => j.intl.string(j.t.a3IPrX),
        useOptions: () => [
            { id: "default", label: j.intl.string(j.t.ERaS6f), value: "default" },
            { id: "no_text_color", label: j.intl.string(j.t.JKfipk), value: "no_text_color" },
            { id: "no_gradient", label: j.intl.string(j.t.O2vBoY), value: "no_gradient" },
            { id: "hidden", label: j.intl.string(j.t["+loyQl"]), value: "hidden" },
        ],
        useValue: () => (0, g.bG)([i7.Ay], () => i7.Ay.officialMessageStyle),
        setValue: (e) => (0, nN.w_)(e),
    }),
    nD = (0, a.Hn)(u.X.ROLE_STYLE, {
        useTitle: () => j.intl.string(j.t.uSOPWm),
        useSubtitle: () => j.intl.string(j.t.u7fFKS),
        useOptions: () => [
            { id: "username", label: j.intl.string(j.t.eDdMzJ), value: "username" },
            { id: "dot", label: j.intl.string(j.t.rdmJp0), value: "dot" },
            { id: "hidden", label: j.intl.string(j.t.Ji2EVJ), value: "hidden" },
        ],
        useValue: () => (0, g.bG)([i7.Ay], () => i7.Ay.roleStyle),
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
    useValue: () => (0, g.bG)([i7.Ay], () => i7.Ay.roleStyle),
    setValue: (e) => (0, nN.IX)(e),
});
let nL = (0, a.sN)(u.X.SATURATION, {
    useTitle: () => j.intl.string(j.t["5PWWCY"]),
    useSubtitle: () => j.intl.string(j.t.xf5S6P),
    markers: U.hH7.SATURATION_INCREMENTS,
    onMarkerRender: (e) => ((100 * e) % 2 == 0 ? `${100 * e}%` : void 0),
    stickToMarkers: !0,
    minValue: 0,
    maxValue: 1,
    getInitialValue: () => i7.Ay.saturation,
    asValueChanges: (e) => (0, nN.HU)(e),
});
var nP = i(839214),
    nG = i(502229);
let nM = (0, nP.D)(() => ({ syncEnabled: null, updateTimeout: null })),
    nU = (0, a.zD)(u.X.SYNC_FORCED_COLORS, {
        useTitle: () => j.intl.string(j.t.cguiec),
        useSubtitle: () => j.intl.format(j.t.GwEVE2, { learnMoreLink: tN.A.getArticleURL(U.MVz.FORCED_COLORS) }),
        useValue: () => {
            let e = (0, g.bG)([i7.Ay], () => i7.Ay.syncForcedColors);
            return (
                (0, tg.Ay)(() => {
                    nM.setState({ syncEnabled: i7.Ay.syncForcedColors });
                }),
                nM.useState((e) => e.syncEnabled) ?? e
            );
        },
        setValue: (e) => {
            let { updateTimeout: t } = nM.getState();
            if (null != t) {
                clearTimeout(t), nM.setState({ syncEnabled: e, updateTimeout: null });
                return;
            }
            if (e === i7.Ay.syncForcedColors) return void nM.setState({ syncEnabled: e });
            let i = setTimeout(() => {
                (0, nN.D3)(e), nM.setState({ updateTimeout: null });
            }, 150);
            nM.setState({ syncEnabled: e, updateTimeout: i });
        },
        usePredicate: () => (0, nG.D)(),
    }),
    nV = (0, a.zZ)(u.X.COLOR_AND_CONTRAST_CATEGORY, {
        useTitle: () => j.intl.string(j.t.JqvyiY),
        buildLayout: () => [nL, n_, ny, nC, nU, nO, nD, nR, nb, nf],
    });
var nk = i(397438),
    nw = i(355097);
function nB(e) {
    return (0, g.bG)([nk.A], () =>
        (function (e) {
            switch (e) {
                case nw._A.REDUCED_MOTION:
                    return j.intl.format(j.t["1dT9V4"], {});
                case nw._A.REDUCED_MOTION_STICKERS:
                    return j.intl.string(j.t["2ExvRu"]);
                default:
                    return;
            }
        })(nk.A.getAppliedOverrideReasonKey(e)),
    );
}
let nF = (0, a.zD)(u.X.ANIMATE_EMOJIS, {
        useTitle: () => j.intl.string(j.t.iIaOlc),
        useSubtitle: () => nB("animateEmoji"),
        useValue: () => D.Sf.useSetting(),
        setValue: (e) => D.Sf.updateSetting(e),
    }),
    nz = (0, a.zD)(u.X.ANIMATE_GIFS, {
        useTitle: () => j.intl.string(j.t.wqsK7q),
        useSubtitle: () => nB("gifAutoPlay"),
        useValue: () => D.kt.useSetting(),
        setValue: (e) => D.kt.updateSetting(e),
    });
var nX = i(823894);
let nY = (0, a.Qx)(u.X.ANIMATE_STICKERS, {
        useTitle: () => j.intl.string(j.t.sBHIh0),
        useSubtitle: () => nB("animateStickers"),
        useOptions: () => [
            { name: j.intl.string(j.t["Xp+X2U"]), value: nX.BJ.ALWAYS_ANIMATE },
            { name: j.intl.string(j.t.IlLT7e), desc: j.intl.string(j.t.bIW9Tl), value: nX.BJ.ANIMATE_ON_INTERACTION },
            { name: j.intl.string(j.t.IGu8x3), value: nX.BJ.NEVER_ANIMATE },
        ],
        useValue: () => D.S0.useSetting(),
        setValue: (e) => D.S0.updateSetting(e),
    }),
    nH = (0, a.zD)(u.X.REDUCED_MOTION, {
        useTitle: () => j.intl.string(j.t.b3XBzg),
        useSubtitle: () => j.intl.format(j.t.XqvxJc, { helpdeskArticle: tN.A.getArticleURL(U.MVz.REDUCED_MOTION) }),
        useValue: () => (0, g.bG)([i7.Ay], () => i7.Ay.useReducedMotion),
        setValue: (e) => (0, nN.qz)(e ? "reduce" : "no-preference"),
    }),
    nK = (0, a.zD)(u.X.SYNC_REDUCED_MOTION, {
        useTitle: () => j.intl.string(j.t.oL55A6),
        useValue: () => (0, g.bG)([i7.Ay], () => "auto" === i7.Ay.rawPrefersReducedMotion),
        setValue: (e) => (0, nN.qz)(e ? "auto" : i7.Ay.systemPrefersReducedMotion),
    }),
    nW = (0, a.zZ)(u.X.MOTION_CATEGORY, {
        useTitle: () => j.intl.string(j.t.e3TR1b),
        buildLayout: () => [nH, nK, nz, nF, nY],
    });
var nZ = i(688810),
    nQ = i(259065),
    nq = i(745699);
let nJ = (0, a.zD)(u.X.DISPLAY_NAME_STYLES, {
    useTitle: () => j.intl.string(nq.default["2gFUEw"]),
    useSubtitle: () => {
        let { analyticsLocations: e } = (0, nZ.Ay)();
        return j.intl.format(nq.default.aEax6P, {
            onClickOpenModal() {
                (0, nQ.L)({ analyticsLocations: e });
            },
        });
    },
    useValue: () => (0, g.bG)([i7.Ay], () => i7.Ay.displayNameStylesEnabled),
    setValue: (e) => (0, nN.Dm)(e),
});
function n$(e) {
    return `${e.toFixed(0)}px`;
}
let n0 = (0, a.sN)(u.X.APPEARANCE_FONT_SCALING, {
        useTitle: () => j.intl.string(j.t.rT3Pq5),
        useSubtitle: () => j.intl.string(j.t.LXUhen),
        markers: U.hH7.FONT_SIZES,
        stickToMarkers: !0,
        minValue: U.hH7.FONT_SIZES["0"],
        maxValue: U.hH7.FONT_SIZES[U.hH7.FONT_SIZES.length - 1],
        useDefaultValue: () => U.hH7.FONT_SIZE_DEFAULT,
        getInitialValue: () => i7.Ay.fontSize,
        onValueRender: n$,
        onMarkerRender: n$,
        asValueChanges: (e) => (0, nN.XS)(e),
    }),
    n1 = (0, a.zD)(u.X.UNDERLINE_LINKS, {
        useTitle: () => j.intl.string(j.t.OLZFB8),
        useSubtitle: () => j.intl.string(j.t.DIX3ke),
        useValue: () => (0, g.bG)([i7.Ay], () => i7.Ay.alwaysShowLinkDecorations),
        setValue: (e) => (0, nN.kI)(e),
    }),
    n2 = (0, a.zZ)(u.X.TEXT_READABILITY_CATEGORY, {
        useTitle: () => j.intl.string(j.t["bxh/R7"]),
        buildLayout: () => [n0, n1, nJ],
    }),
    n3 = (0, a.Qx)(u.X.APPEARANCE_UI_DENSITY, {
        useTitle: () => j.intl.string(j.t["C/5V0A"]),
        useSubtitle: () => j.intl.string(j.t.QLZhYk),
        useSearchTerms: () => ["List Spacing"],
        useOptions: () => [
            { name: j.intl.string(j.t["7iegX4"]), value: H.NS.COMPACT },
            { name: j.intl.string(j.t.bBvAEH), value: H.NS.DEFAULT },
            { name: j.intl.string(j.t["4cuYHx"]), value: H.NS.COZY },
        ],
        useValue: () => D.Xi.useSetting(),
        setValue: (e) => {
            e !== H.NS.UNSET_UI_DENSITY && D.Xi.updateSetting(e);
        },
    }),
    n6 = "cozy",
    n4 = "compact",
    n7 = (0, a.Qx)(u.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
        useTitle: () => j.intl.string(j.t.nKRoPv),
        useSubtitle: () => j.intl.string(j.t.QntEEG),
        useSearchTerms: () => [j.intl.string(j.t.ZEoGMd)],
        useOptions: () => [
            { name: j.intl.string(j.t.Jqj4cZ), value: n6 },
            { name: j.intl.string(j.t["1JNcPS"]), value: n4 },
        ],
        useValue: () => (D.hH.useSetting() ? n4 : n6),
        setValue: (e) => {
            D.hH.updateSetting(e === n4), (0, nN.AC)();
        },
    });
var n5 = i(381941);
function n8(e) {
    return `${e.toFixed(0)}px`;
}
let n9 = (0, a.sN)(u.X.APPEARANCE_MESSAGE_GROUP_SPACING, {
    useTitle: () => j.intl.string(j.t.Q6lKkg),
    useSubtitle: () => j.intl.string(j.t.p7eUrb),
    markers: n5.qh,
    stickToMarkers: !0,
    minValue: n5.qh["0"],
    maxValue: n5.qh[n5.qh.length - 1],
    useDefaultValue: () => (D.hH.useSetting() ? n5.y5 : n5.ES),
    useExternalValue: () => (0, g.bG)([i7.Ay], () => i7.Ay.messageGroupSpacing),
    getInitialValue: () => i7.Ay.messageGroupSpacing,
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
var se = i(775121);
let st = (0, a.sN)(u.X.APPEARANCE_ZOOM, {
        usePredicate: () => eY.isPlatformEmbedded,
        useTitle: () => j.intl.string(j.t.i19n5L),
        useSubtitle: () => j.intl.format(j.t["x9PK/3"], { modKey: se.A.modKey }),
        markers: U.hH7.ZOOM_SCALES,
        stickToMarkers: !0,
        minValue: U.hH7.ZOOM_SCALES["0"],
        maxValue: U.hH7.ZOOM_SCALES[U.hH7.ZOOM_SCALES.length - 1],
        useDefaultValue: () => U.hH7.ZOOM_DEFAULT,
        getInitialValue: () => i7.Ay.zoom,
        useExternalValue: () => (0, g.bG)([i7.Ay], () => i7.Ay.zoom),
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        setValue: (e) => (0, nN.Qp)(e),
        useSearchTerms: () => [j.intl.string(j.t.ip0uSf)],
    }),
    si = (0, a.zZ)(u.X.VISUAL_DENSITY_CATEGORY, {
        useTitle: () => j.intl.string(j.t.VKYWk8),
        buildLayout: () => [n3, n7, n9, st],
    }),
    sn = (0, a.t_)(u.X.ACCESSIBILITY_PANEL, {
        useTitle: () => j.intl.string(j.t.G0neg7),
        buildLayout: () => [n2, si, nV, nW, nx],
        decoration: {
            type: h.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                let e = D.hH.useSetting(),
                    t = D.jW.useSetting(),
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
                    n = (0, g.bG)([i7.Ay], () => i7.Ay.messageGroupSpacing);
                return (0, E.jsx)(i3.M, {
                    children: (0, E.jsxs)("section", {
                        "aria-label": j.intl.string(j.t.RC22qg),
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
    ss = (0, a.i4)(u.X.ACCESSIBILITY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.G0neg7),
        icon: i2.c,
        useMenu: nr.A,
        buildLayout: () => [sn],
    });
var sl = i(650809),
    sr = i(636537),
    sa = i(228366),
    so = i(74396),
    su = i(269880),
    sd = i(55619),
    sc = i(812993),
    sg = i(314116),
    sm = i(19575),
    sA = i(546385);
let sh = (0, a.E2)(u.X.HARDWARE_ACCELERATION, {
    usePredicate: () => c.Av && !(0, c.cX)(),
    useSearchTerms: () => [j.intl.string(j.t["/HIxyY"]), j.intl.string(j.t.B0hqpb)],
    Component: function () {
        let [e] = S.useState(() => sm.Ay.getEnableHardwareAcceleration()),
            t = j.intl.string(j.t["/HIxyY"]),
            i = j.intl.string(j.t.B0hqpb);
        return (0, E.jsxs)(q.B, {
            children: [
                (0, E.jsx)(J.d, { label: t, description: i, checked: e, onChange: sE }),
                !e && (0, E.jsx)(sA.A, { look: sA.k.WARNING, children: j.intl.string(j.t.j7S6IX) }),
            ],
        });
    },
});
function sE(e) {
    let t = e ? j.intl.format(j.t.LYXRxL, {}) : j.intl.format(j.t.uDP3Kz, {});
    (0, sg.A)({
        title: j.intl.string(j.t.aqpAvn),
        subtitle: t,
        confirmText: j.intl.string(j.t.vT7ckk),
        onConfirm: () => {
            sm.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
let sS = (0, a.zD)(u.X.SHOW_GAME_LIBRARY, {
        usePredicate: () => (0, g.bG)([ty.A], () => ty.A.hasLibraryApplication()),
        useTitle: () => j.intl.string(j.t.fi3UQN),
        useSubtitle: () => j.intl.string(j.t["8mYp37"]),
        useValue: () => !D.l_.useSetting(),
        setValue: (e) => D.l_.updateSetting(!e),
    }),
    sT = (0, a.zZ)(u.X.APPEARANCE_ADVANCED_CATEGORY, {
        useTitle: () => j.intl.string(j.t["8/udY0"]),
        buildLayout: () => [...((0, o.SB)("AppearanceAdvancedCategory_buildLayout") ? [] : [sh]), sS],
    });
var sx = i(199966),
    sp = i(963935);
function sf(e) {
    let { title: t } = e;
    return t;
}
function sN(e) {
    let { useTitle: t, settingKey: i, formatter: n, index: s } = e,
        l = t();
    return "string" == typeof l ? n({ title: l, index: s, key: i }) : l;
}
function s_(e) {
    let { setting: t, formatter: i, index: n } = e;
    return () => (0, E.jsx)(sN, { useTitle: t.useTitle, settingKey: t.key, formatter: i, index: n }, t.key);
}
function sI(e) {
    return e.type === sp.Z6.LIST;
}
function sC(e, t) {
    let { limit: i = 2, formatter: n = sf } = t ?? {};
    tz()(i > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { visibleDirectory: s, accessibleDirectory: l } = (0, sx._)(),
        r = s.get(e) ?? l.get(e);
    tz()(
        null != r && (r.type === sp.Z6.ACCORDION || sI(r)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let a = sI(r) ? (r.collapseAfter ?? 0) : 0,
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
                return j.intl.format(j.t["3H9tCW"], { settingOneHook: s_({ setting: t[0], formatter: n, index: 0 }) });
            else if (2 === t.length)
                return j.intl.format(j.t.MWryo6, {
                    settingOneHook: s_({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: s_({ setting: t[1], formatter: n, index: 1 }),
                });
            else
                return j.intl.format(j.t.a00b5G, {
                    settingOneHook: s_({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: s_({ setting: t[1], formatter: n, index: 1 }),
                    settingThreeHook: s_({ setting: t[2], formatter: n, index: 2 }),
                });
        return 1 === s
            ? j.intl.format(j.t.O8vNbS, { settingOneHook: s_({ setting: t[0], formatter: n, index: 0 }) })
            : 2 === s
              ? j.intl.format(j.t["acXG/W"], {
                    settingOneHook: s_({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: s_({ setting: t[1], formatter: n, index: 1 }),
                })
              : j.intl.format(j.t["5+ldWc"], {
                    settingOneHook: s_({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: s_({ setting: t[1], formatter: n, index: 1 }),
                    settingThreeHook: s_({ setting: t[2], formatter: n, index: 2 }),
                });
    }, [i, a, o, n]);
}
var sb = i(951260);
let sy = (0, a.zD)(u.X.ENABLE_APPS_BUTTON, {
        useTitle: () => j.intl.string(j.t.ZTH4j4),
        useValue: () => (0, g.bG)([i7.Ay], () => i7.Ay.isAppsButtonEnabled),
        setValue: (e) => (0, nN.n8)({ appsButtonEnabled: e }),
    }),
    sv = {
        useTitle: () => j.intl.string(j.t["I/5LyL"]),
        useValue: () => (0, g.bG)([i7.Ay], () => i7.Ay.isSubmitButtonEnabled),
        setValue: () => (0, nN.Xt)(),
    },
    sj = (0, a.zD)(u.X.ENABLE_SEND_BUTTON, sv),
    sO = (0, a.zD)(u.X.ENABLE_SEND_BUTTON_OUTSIDE_EXPERIMENT, {
        ...sv,
        usePredicate: () => !(0, sb.n)("EnableSendButtonOutsideExperiment"),
    }),
    sR = (0, a.zD)(u.X.CONDENSE_PICKER_WHEN_NARROW, {
        useTitle: () => j.intl.string(j.t.WggFoO),
        useSubtitle: () => j.intl.string(j.t.XpErGj),
        useValue: () => (0, g.bG)([i7.Ay], () => i7.Ay.condensePickerWhenNarrow),
        setValue: (e) => (0, nN.n8)({ condensePickerWhenNarrow: e }),
        usePredicate: () => (0, g.bG)([i7.Ay], () => i7.Ay.expressionPickerFormat === i7.IG.FLEXIBLE),
    }),
    sD = (0, a.zD)(u.X.ENABLE_EMOJI_BUTTON, {
        useTitle: () => j.intl.string(j.t.YErWkD),
        useValue: () => (0, g.bG)([i7.Ay], () => i7.Ay.isEmojiButtonEnabled),
        setValue: (e) => (0, nN.n8)({ emojiButtonEnabled: e }),
        usePredicate: () => (0, g.bG)([i7.Ay], () => i7.Ay.expressionPickerFormat === i7.IG.FLEXIBLE),
    }),
    sL = (0, a.zD)(u.X.ENABLE_GIF_BUTTON, {
        useTitle: () => j.intl.string(j.t.k7oNEz),
        useValue: () => (0, g.bG)([i7.Ay], () => i7.Ay.isGifButtonEnabled),
        setValue: (e) => (0, nN.n8)({ gifButtonEnabled: e }),
        usePredicate: () => (0, g.bG)([i7.Ay], () => i7.Ay.expressionPickerFormat === i7.IG.FLEXIBLE),
    }),
    sP = (0, a.zD)(u.X.ENABLE_STICKER_BUTTON, {
        useTitle: () => j.intl.string(j.t.Ar0krj),
        useValue: () => (0, g.bG)([i7.Ay], () => i7.Ay.isStickerButtonEnabled),
        setValue: (e) => (0, nN.n8)({ stickerButtonEnabled: e }),
        usePredicate: () => (0, g.bG)([i7.Ay], () => i7.Ay.expressionPickerFormat === i7.IG.FLEXIBLE),
    }),
    sG = (0, a.Qx)(u.X.EXPRESSION_PICKER_FORMAT, {
        useTitle: () => j.intl.string(j.t.AxRAWt),
        useValue: () => (0, g.bG)([i7.Ay], () => i7.Ay.expressionPickerFormat),
        setValue: (e) => (0, nN.n8)({ expressionPickerFormat: e }),
        useOptions: function () {
            return [
                { name: j.intl.string(j.t.k86Soy), desc: j.intl.string(j.t.bSGTTZ), value: i7.IG.FLEXIBLE },
                { name: j.intl.string(j.t.bjwSOn), desc: j.intl.string(j.t.We36HX), value: i7.IG.CONDENSED },
                { name: j.intl.string(j.t.FDIKss), desc: j.intl.string(j.t["rclZL/"]), value: i7.IG.HIDDEN },
            ];
        },
    }),
    sM = (0, a.FW)(u.X.EXPRESSION_PICKER_FIELD_SET, {
        variant: "compact",
        isTitleHiddenVisually: !0,
        useTitle: () => j.intl.string(j.t["V9/cNN"]),
        buildLayout: () => [sG, sR, sD, sL, sP],
    }),
    sU = (0, a.bd)(u.X.CHAT_BAR_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? j.intl.string(j.t.IwVGQs) : j.intl.string(j.t.cFNDh5);
        },
        useCollapsedSubtitle: () => sC(u.X.CHAT_BAR_ADVANCED_ACCORDION),
        usePredicate: () => (0, sb.n)("ChatBarAdvancedAccordion"),
        buildLayout: () => [sj, sy, sM],
    });
var sV = i(565645);
let sk = (0, a.zD)(u.X.CHAT_EMOJI_CONVERT_EMOTICONS, {
        useTitle: () => j.intl.string(j.t["79qal8"]),
        useSubtitle: () =>
            j.intl.format(j.t.GejoQK, { emojiHook: (e, t) => (0, E.jsx)(sV.A, { emojiName: "\uD83D\uDE42" }, t) }),
        useValue: D.j7.useSetting,
        setValue: D.j7.updateSetting,
    }),
    sw = (0, a.zD)(u.X.CHAT_TEXT_BOX_PREVIEWS, {
        useTitle: () => j.intl.string(j.t.AqGrEI),
        useValue: D.SI.useSetting,
        setValue: (e) => {
            G.default.track(U.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: e,
                location: { section: U.JJy.SETTINGS_TEXT_AND_IMAGES },
            }),
                D.SI.updateSetting(e);
        },
    }),
    sB = (0, a.zD)(u.X.CHAT_STICKERS_AUTOCOMPLETE, {
        useTitle: () => j.intl.string(j.t["d+It2U"]),
        useValue: D.ML.useSetting,
        setValue: (e) => {
            G.default.track(U.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                enabled: e,
                location: { section: U.JJy.SETTINGS_TEXT_AND_IMAGES },
                location_stack: [e1.A.TEXT_AND_IMAGES],
            }),
                D.ML.updateSetting(e);
        },
    }),
    sF = (0, a.zZ)(u.X.APPEARANCE_CHAT_BOX_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Ob7VMB),
        useSearchTerms: () => [j.intl.string(j.t.onqU6o)],
        buildLayout: () => [sw, sk, sB, sO, sU],
    });
var sz = i(526162),
    sX = i(793943),
    sY = i(792656),
    sH = i(830543),
    sK = i(785007),
    sW = i(806932),
    sZ = i(915089),
    sQ = i(174197),
    sq = i(788868);
let sJ = (0, a.E2)(u.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [j.intl.string(j.t.gnwxvT)],
    Component: function () {
        let e = (0, sZ.GV)(),
            { ref: t, ...i } = (0, sK._u)({ orientation: "horizontal", labelledBy: e }),
            n = (0, g.bG)([sz.A], () => sz.A.isUpsellPreview);
        return (
            (0, eD.Ay)(() => {
                n &&
                    G.default.track(U.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: sq.e.APP_ICON_UPSELL,
                        location_stack: [e1.A.USER_SETTINGS],
                    });
            }),
            (0, E.jsx)("div", {
                ...i,
                ref: t,
                children: (0, E.jsx)(q.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    children: (0, E.jsx)(sW.m, { disabled: n, size: sQ.N8.SIZE_48 }),
                }),
            })
        );
    },
});
function s$() {
    (0, sX.nf)(sX.HP.APP_ICON), (0, sH.default)();
}
function s0() {
    return (0, E.jsx)(sY.A, {
        subscriptionTier: sq.pe.TIER_2,
        defaultTextOverride: j.intl.string(j.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: U.ZSU.BUTTON_CTA, objectType: U.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
let s1 = (0, a.zZ)(u.X.APPEARANCE_IN_APP_ICON_CATEGORY, {
        useTitle: () => j.intl.string(j.t.RPh2ou),
        useSubtitle: () => j.intl.string(j.t.IgENJo),
        useHeaderDecoration: function () {
            let e = (0, g.bG)([sz.A], () => sz.A.isUpsellPreview);
            return S.useMemo(() => {
                let t = [];
                return (
                    t.push({
                        id: "preview-icon-button",
                        type: h.UV.BUTTON,
                        text: j.intl.string(j.t["6acvnZ"]),
                        onClick: s$,
                    }),
                    e && t.push({ id: "upsell-button", type: h.UV.STRONGLY_DISCOURAGED_CUSTOM, button: s0 }),
                    { type: h.WX.BUTTON_GROUP, buttons: t }
                );
            }, [e]);
        },
        buildLayout: () => [sJ],
    }),
    s2 = (0, a.AK)(u.X.APPEARANCE_CHAT_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.UDr3Iy),
        useSearchTerms: () => [j.intl.string(j.t.UDr3Iy)],
        destinationKey: u.X.ACCESSIBILITY_PANEL,
    }),
    s3 = (0, a.gN)(u.X.APPEARANCE_CHAT_RELATED_SETTINGS, { buildLayout: () => [s2] });
var s6 = i(379587),
    s4 = i(452027),
    s7 = i(976860),
    s5 = i(474090),
    s8 = i(181079),
    s9 = i(422258),
    le = i(668267),
    lt = i(313281),
    li = i(574004);
let ln = tN.A.getArticleURL(U.MVz.FAVORITES_GUILD);
function ls() {
    let { analyticsLocations: e } = (0, nZ.Ay)(e1.A.USER_SETTINGS_FAVORITES),
        t = S.useCallback(() => {
            (0, le.mv)("settings_page"), (0, s7.uh)(U.YYv), (0, sH.default)();
        }, []);
    return (0, E.jsx)(nZ.f5, {
        value: e,
        children: (0, E.jsx)(s4.D, {
            label: j.intl.string(li.default.OT1NK5),
            description: j.intl.format(li.default.GR2KOG, { helpCenterLink: ln }),
            layout: "horizontal-responsive",
            badge: "beta",
            children: (0, E.jsxs)(q.B, {
                direction: "horizontal",
                gap: 8,
                fullWidth: !1,
                children: [
                    (0, E.jsx)(eG.$, { variant: "secondary", text: j.intl.string(li.default["7WwLnr"]), onClick: t }),
                    (0, E.jsx)(sY.A, {
                        subscriptionTier: sq.pe.TIER_2,
                        defaultTextOverride: j.intl.string(li.default["20sYUU"]),
                    }),
                ],
            }),
        }),
    });
}
let ll = (0, a.E2)(u.X.CHAT_FAVORITES_TOGGLE, {
        usePredicate: () => (0, s6.m)({ location: "FavoritesGuildToggle" }).enabled,
        useSearchTerms: () => [j.intl.string(li.default.OT1NK5)],
        Component: function () {
            let e = (0, g.bG)([s8.A], () => s8.A.favoriteGuildEnabled),
                t = (0, g.bG)([io.default], () => {
                    let e = io.default.getCurrentUser();
                    return null != e && s5.Ay.isPremiumExactly(e, sq.PremiumTypes.TIER_2);
                }),
                i = (0, lt.DZ)(),
                n = S.useCallback(
                    (e) => {
                        (0, s9.tV)(e, "settings_page"), !e && i && (0, s7.pX)(U.BVt.ME);
                    },
                    [i],
                );
            return t
                ? (0, E.jsx)(J.d, {
                      checked: e,
                      description: j.intl.format(li.default.GR2KOG, { helpCenterLink: ln }),
                      onChange: n,
                      label: j.intl.string(li.default.OT1NK5),
                      badge: "beta",
                  })
                : (0, E.jsx)(ls, {});
        },
    }),
    lr = (0, a.zD)(u.X.CHAT_INLINE_MEDIA_LINKS, {
        useTitle: () => j.intl.string(j.t.U47N1p),
        useValue: D.hD.useSetting,
        setValue: D.hD.updateSetting,
    }),
    la = (0, a.zD)(u.X.CHAT_INLINE_MEDIA_UPLOADS, {
        useTitle: () => j.intl.string(j.t.VP11No),
        useValue: D.X6.useSetting,
        setValue: D.X6.updateSetting,
    }),
    lo = (0, a.FW)(u.X.CHAT_INLINE_FIELD_SET, {
        useTitle: () => j.intl.string(j.t["9nyle0"]),
        buildLayout: () => [lr, la],
    }),
    lu = (0, a.zD)(u.X.CHAT_EMBEDS_RENDER_EMBEDS, {
        useTitle: () => j.intl.string(j.t["5bK9vw"]),
        useValue: D.rs.useSetting,
        setValue: D.rs.updateSetting,
    }),
    ld = (0, a.zD)(u.X.CHAT_EMOJI_RENDER_REACTIONS, {
        useTitle: () => j.intl.string(j.t["zge/fP"]),
        useValue: D.jW.useSetting,
        setValue: D.jW.updateSetting,
    });
var lc = i(817281);
let lg = (0, a.zD)(u.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
        useTitle: () => j.intl.string(j.t.JgjNG3),
        useSubtitle: () => {
            if (!D.hH.useSetting())
                return j.intl.format(j.t["31PRaj"], {
                    a11yHook: (e, t) =>
                        (0, E.jsx)(
                            en.D,
                            {
                                tag: "a",
                                onClick: () => (0, eH.openUserSettings)(u.X.APPEARANCE_MESSAGE_DISPLAY_MODE),
                                children: e,
                            },
                            t,
                        ),
                });
        },
        useDisabled: () => !D.hH.useSetting(),
        useValue: () => {
            let e = (0, g.bG)([nj.Ay], () => nj.Ay.displayCompactAvatars);
            return !D.hH.useSetting() || e;
        },
        setValue: (e) => {
            lc.Ay.updatedUnsyncedSettings({ displayCompactAvatars: e });
        },
    }),
    lm = (0, a.Hn)(u.X.CHAT_SPOILERS_SHOW_SPOILERS, {
        useTitle: () => j.intl.string(j.t.QgwmVz),
        useOptions: () => [
            { value: U.P6Q.ON_CLICK, id: U.P6Q.ON_CLICK, label: j.intl.string(j.t["KFH/me"]) },
            { value: U.P6Q.ALWAYS, id: U.P6Q.ALWAYS, label: j.intl.string(j.t.Pe1RbL) },
            { value: U.P6Q.IF_MODERATOR, id: U.P6Q.IF_MODERATOR, label: j.intl.string(j.t.K5VTBE) },
        ],
        useValue: D.gs.useSetting,
        setValue: D.gs.updateSetting,
    }),
    lA = (0, a.zD)(u.X.CHAT_THREADS_SPLIT_VIEW, {
        useTitle: () => j.intl.string(j.t.AInv5m),
        useValue: D.SY.useSetting,
        setValue: D.SY.updateSetting,
    }),
    lh = (0, a.zZ)(u.X.APPEARANCE_MESSAGES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.OIgYlQ),
        useSearchTerms: () => [j.intl.string(j.t["/VQax8"])],
        buildLayout: () => [lo, lu, ld, lm, lA, lg, ll, s3],
    });
var lE = i(753806),
    lS = i(145331);
let lT = (0, a.Qx)(u.X.MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
        useTitle: () => j.intl.string(j.t.VkoLsy),
        useSearchTerms: () => [j.intl.string(j.t["t4+fbe"])],
        useOptions: function () {
            return [
                { name: j.intl.string(j.t.E9JM4J), value: 0 },
                { name: j.intl.string(j.t["Kr+lPi"]), value: 1 },
            ];
        },
        useValue: () => +!!D.Hu.useSetting(),
        setValue: (e) => {
            let t = 1 === e;
            t ? lE.A.cleanUpPrivateChannelSearchState() : lE.A.cleanUpSearchState({ type: U.I4_.DMS }),
                (0, lS._k)({
                    prevIsCrossDMSettingEnabled: D.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: lS.vy.USER_SETTINGS,
                }),
                D.Hu.updateSetting(t);
        },
    }),
    lx = (0, a.zZ)(u.X.APPEARANCE_SEARCH_CATEGORY, {
        useTitle: () => j.intl.string(j.t["5h0QOP"]),
        buildLayout: () => [lT],
    }),
    lp = (0, a.zD)(u.X.STREAMING_AUTO_STREAMER_MODE, {
        useTitle: () => j.intl.string(j.t.IxjaoF),
        useValue: function () {
            return (0, g.bG)([eB.A], () => {
                let { autoToggle: e } = eB.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            sd.A.update({ autoToggle: e });
        },
        usePredicate: function () {
            return c.Av;
        },
    }),
    lf = (0, a.zD)(u.X.STREAMING_STREAMER_MODE, {
        useTitle: () => j.intl.string(j.t.TGNg6T),
        useSubtitle: () => j.intl.string(j.t["4nXLnE"]),
        useValue: function () {
            return (0, g.bG)([eB.A], () => {
                let { enabled: e } = eB.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            sd.A.update({ enabled: e });
        },
    });
var lN = i(77729),
    l_ = i(349230);
let lI = [],
    lC = (0, a.Hn)(u.X.STREAMER_MODE_HIDE_OVERLAY_WIDGETS, {
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
                for (let [t, i] of Object.entries(l_.A))
                    null != i.streamerModeLabel &&
                        (null == i.predicate || i.predicate()) &&
                        e.push({ id: t, value: t, label: i.streamerModeLabel() });
                return e;
            }, []);
        },
        useValue: function () {
            return (0, g.bG)([eB.A], () => eB.A.getSettings().disabledOverlayWidgets ?? lI);
        },
        setValue: (e) => sd.A.update({ disabledOverlayWidgets: e }),
        closeOnSelect: !1,
        wrapTags: !0,
    }),
    lb = (0, a.zD)(u.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => j.intl.string(j.t.LSBUGR),
        useValue: () =>
            (0, g.bG)([eB.A], () => {
                let { hidePersonalInformation: e } = eB.A.getSettings();
                return e;
            }),
        setValue: (e) => sd.A.update({ hidePersonalInformation: e }),
    }),
    ly = (0, a.zD)(u.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => j.intl.string(j.t.uWBOri),
        useValue: () =>
            (0, g.bG)([eB.A], () => {
                let { hideInstantInvites: e } = eB.A.getSettings();
                return e;
            }),
        setValue: (e) => sd.A.update({ hideInstantInvites: e }),
    }),
    lv = (0, a.zD)(u.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => j.intl.string(j.t.OrqYDP),
        useValue: () =>
            (0, g.bG)([eB.A], () => {
                let { disableSounds: e } = eB.A.getSettings();
                return e;
            }),
        setValue: (e) => sd.A.update({ disableSounds: e }),
    }),
    lj = (0, a.zD)(u.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.sUAbLd),
        useValue: () =>
            (0, g.bG)([eB.A], () => {
                let { disableNotifications: e } = eB.A.getSettings();
                return e;
            }),
        setValue: (e) => sd.A.update({ disableNotifications: e }),
    }),
    lO = (0, a.zD)(u.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => j.intl.string(j.t["iA81+a"]),
        useSubtitle: () => j.intl.string(j.t.P4vj0h),
        useValue: () =>
            (0, g.bG)([eB.A], () => {
                let { enableContentProtection: e } = eB.A.getSettings();
                return e;
            }),
        setValue: (e) => sd.A.update({ enableContentProtection: e }),
        usePredicate: () => lN.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    lR = (0, a.FW)(u.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.xYhOEh),
        buildLayout: () => [lb, ly, lv, lj, lO, lC],
    }),
    lD = (0, a.zZ)(u.X.STREAMER_MODE_CATEGORY, {
        useTitle: () => j.intl.string(j.t.S5GfOW),
        buildLayout: () => [lf, lp, lR],
    });
var lL = i(47671),
    lP = i(665267),
    lG = i(414133),
    lM = i(603773);
let lU = (0, a.Hn)(u.X.APPEARANCE_GUILD_THEME_DEFAULT_PREFERENCE, {
        useTitle: () => j.intl.string(j.t.Q7mm4g),
        useSearchTerms: () => [j.intl.string(lM.default["/6NbRv"])],
        useOptions: () => [
            { id: "guild", label: j.intl.string(j.t["hrS/Pc"]), value: H.tI.GUILD },
            { id: "personal", label: j.intl.string(j.t.mlvXIq), value: H.tI.PERSONAL },
        ],
        useValue: () => D.zY.useSetting(),
        setValue: D.zY.updateSetting,
        usePredicate: () => (0, lG.OS)("GuildThemeDefaultPreferenceSetting"),
    }),
    lV = (0, a.zD)(u.X.SYNC_PROFILE_THEMES, {
        useTitle: () => j.intl.string(j.t.C00w4l),
        useValue: () => (0, g.bG)([i7.Ay], () => i7.Ay.syncProfileThemeWithUserTheme),
        setValue: () => (0, nN.M1)(),
    });
var lk = i(284016);
let lw = (0, a.zD)(u.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => j.intl.string(j.t["/B+kEV"]),
    useSearchTerms: () => [j.intl.string(j.t.Ksh3ik)],
    useValue: function () {
        return (0, g.bG)([lk.A], () => !1 !== lk.A.shouldSync("appearance"));
    },
    setValue: function (e) {
        var t;
        let i = iC.A.theme,
            n = lL.A.gradientPreset?.id ?? null,
            s = D.eh.getSetting()?.customUserThemeSettings != null;
        (t = U.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
            sa.h.dispatch({
                type: "TRACK",
                event: t,
                properties: { is_sync_enabled: e, base_theme: i, client_theme: n, has_custom_theme: s },
            }),
            lc.Ay.setShouldSyncAppearanceSettings(e);
    },
});
var lB = i(98596);
let lF = (0, a.AK)(u.X.APPEARANCE_THEME_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.nhVQDJ),
        useSearchTerms: () => [j.intl.string(j.t.nhVQDJ)],
        destinationKey: u.X.ACCESSIBILITY_PANEL,
    }),
    lz = (0, a.gN)(u.X.APPEARANCE_THEME_RELATED_SETTINGS, { buildLayout: () => [lF] }),
    lX = (0, a.zZ)(u.X.APPEARANCE_THEME_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Ksh3ik),
        useInlineNotice: function () {
            return (0, g.bG)([i7.Ay], () => i7.Ay.useForcedColors)
                ? {
                      type: h.lT.INLINE_NOTICE,
                      noticeType: "info",
                      useText: () =>
                          (0, nG.D)()
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
            return (0, g.bG)([lL.A, i7.Ay], () => i7.Ay.useForcedColors || lL.A.isPreview)
                ? null
                : {
                      type: h.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "open-client-themes-button",
                              type: h.UV.BUTTON,
                              text: j.intl.string(j.t["E+COuA"]),
                              onClick: lP.J3,
                          },
                      ],
                  };
        },
        buildLayout: () => [lB.k, lw, lV, lU, lz],
    }),
    lY = (0, a.t_)(u.X.APPEARANCE_PANEL, {
        initialize: function () {
            so.A.isFetching() ||
                (sa.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_START" }),
                sr.Bo.get({ url: U.Rsh.USERS_ME_CUSTOM_THEMES, oldFormErrors: !0, rejectWithError: !0 })
                    .then((e) => {
                        sa.h.dispatch({
                            type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS",
                            themes: e.body?.custom_themes ?? [],
                        });
                    })
                    .catch((e) => {
                        sa.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_FAILURE", error: e });
                    }));
        },
        useTitle: () => j.intl.string(j.t["iHH+ky"]),
        buildLayout: () => [lX, s1, lh, sF, lx, lD, sT],
    }),
    lH = [
        { badgeType: h.Xi.NEW, dismissibleContent: eU.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE },
        {
            badgeType: h.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: eU.M.FAVORITES_GUILD_NEW_BADGE,
            StronglyDiscouragedCustomComponent: function () {
                return (0, E.jsx)(sc.JI, { text: j.intl.string(j.t.y2b7CA) });
            },
        },
    ],
    lK = (0, a.i4)(u.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["iHH+ky"]),
        icon: sl.B,
        useMenu: function () {
            let e,
                t,
                i,
                n = (0, su.A)(),
                s =
                    ((e = D.D_.useSetting()),
                    (t = D.SI.useSetting()),
                    e
                        ? null
                        : (0, E.jsx)(ei.sL, {
                              id: "preview-markdown-toggle",
                              label: j.intl.string(j.t.sHJ9wZ),
                              action: () => {
                                  let e = !t;
                                  G.default.track(U.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                                      enabled: e,
                                      location: { section: U.JJy.SETTINGS_CONTEXT_MENU },
                                  }),
                                      D.SI.updateSetting(e);
                              },
                              checked: t,
                          })),
                l =
                    ((i = (0, g.bG)([eB.A], () => eB.A.enabled, [])),
                    (0, E.jsx)(ei.sL, {
                        id: "streamer-mode-toggle",
                        label: j.intl.string(j.t.p9ZAJZ),
                        action: () => {
                            sd.A.setEnabled(!i);
                        },
                        checked: i,
                    }));
            return S.useMemo(() => {
                let e = [...n];
                return (
                    null != s &&
                        e.push((0, E.jsx)(ei.rX, { label: j.intl.string(j.t.Ob7VMB), children: s }, "text-and-images")),
                    null != l && e.push((0, E.jsx)(ei.rX, { children: l }, "streamer-mode")),
                    e
                );
            }, [n, s, l]);
        },
        getDismissibleBadges: () => lH,
        buildLayout: () => [lY],
    });
var lW = i(410767),
    lZ = i(691885),
    lQ = i(408278),
    lq = i(241326),
    lJ = i(885574),
    l$ = i(475358),
    l0 = i(28647),
    l1 = i(337371),
    l2 = i(695366),
    l3 = i(472444),
    l6 = i(766398);
function l4(e) {
    let { game: t, application: i } = e;
    return null == t || null == i
        ? (0, E.jsx)("div", {
              className: l6.zc,
              children: (0, E.jsx)(l2.E, { size: "sm", color: er.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, E.jsxs)("div", {
              className: l6.nt,
              children: [
                  (0, E.jsx)(p.A, { game: i, pid: t.pid, size: p.M.MEDIUM }),
                  (0, E.jsx)("div", {
                      className: l6.Am,
                      children: (0, E.jsx)(l2.E, { size: "sm", color: er.A.colors.TEXT_FEEDBACK_WARNING }),
                  }),
              ],
          });
}
function l7(e) {
    let t = (0, g.bG)([l3.Ay], () => l3.Ay.getMode()),
        { runningGame: i, runningGameApplication: n } = tl();
    null == i || i.elevated || ((i = void 0), (n = void 0));
    let s = (0, t_.NP)(),
        l = s && null != i && t === U.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? l : s, runningGame: i, runningGameApplication: n };
}
function l5(e) {
    let { className: t, sourcePage: i } = e,
        { canPrompt: n, runningGame: s, runningGameApplication: l } = l7(i);
    return n
        ? (0, E.jsxs)("div", {
              className: e6()(l6.kL, t),
              children: [
                  (0, E.jsx)(l4, { game: s, application: l }),
                  (0, E.jsxs)("div", {
                      className: l6.FS,
                      children: [
                          (0, E.jsx)(es.E, {
                              variant: "text-sm/medium",
                              color: "text-strong",
                              children:
                                  "voice" === i
                                      ? j.intl.string(j.t.vxfv7v)
                                      : null != s
                                        ? j.intl.string(j.t.fAYU2G)
                                        : j.intl.string(j.t["9V4X/c"]),
                          }),
                          (0, E.jsx)(es.E, {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              children: j.intl.format(j.t["/y6htt"], {
                                  helpCenterLink: tN.A.getArticleURL(U.MVz.SYSTEM_SERVICE),
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
var l8 = i(189213),
    l9 = i(292666),
    re = i(320989),
    rt = i(978263);
let ri = [];
var rn = i(235986),
    rs = i(820785),
    rl = i(734057),
    rr = i(808728),
    ra = i(967198),
    ro = i(926140),
    ru = i(181522);
function rd() {}
let rc = [ro.rD.VOICE_CHANNEL];
function rg(e) {
    e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0);
}
function rm() {
    return (0, E.jsx)("div", {
        className: ru.i1,
        children: (0, E.jsx)(es.E, {
            variant: "text-md/medium",
            color: "text-muted",
            className: ru.GN,
            children: j.intl.string(j.t.zHjCd1),
        }),
    });
}
function rA(e) {
    let { keybind: t, className: i } = e,
        n = S.useRef(t);
    S.useEffect(() => {
        n.current = t;
    });
    let [s, l] = S.useState(t.params?.channelId ?? void 0),
        r = S.useCallback(() => {
            (0, K.openModalLazy)(
                async () => (e) =>
                    (0, E.jsx)(rh, {
                        ...e,
                        onSelect: (e) => {
                            l(e), tX.A.setKeybind({ ...n.current, params: { channelId: e } });
                        },
                    }),
            );
        }, []);
    return (0, E.jsx)("div", {
        className: e6()(ru.a8, i),
        children: (0, E.jsx)(s4.D, {
            label: j.intl.string(j.t.q4JpM8),
            children: (0, E.jsxs)(rn.A, {
                align: rn.A.Align.STRETCH,
                children: [
                    (0, E.jsx)("div", { className: ru.$X, children: (0, E.jsx)(rE, { channelId: s }) }),
                    (0, E.jsx)(rn.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, E.jsx)(eG.$, { variant: "primary", text: j.intl.string(j.t.Dm8O4e), onClick: r }),
                    }),
                ],
            }),
        }),
    });
}
function rh(e) {
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
                [a, o] = S.useState(ri),
                u = S.useCallback((e, t) => {
                    "" === (t = t.trim()).trim() ? o(ri) : o(e);
                }, []);
            S.useEffect(
                () =>
                    re.A.addRouteChangeListener(() => {
                        r("");
                    }),
                [],
            );
            let [d] = S.useState(() => new rt.A(u, i, void 0, n));
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
        })({ visible: !0, autocompleterResultTypes: rc, autocompleterBeforeCreateSearchContext: rg }),
        c =
            ((t = "" !== o),
            (i = (0, g.yK)([rr.Ay, rl.A, ra.A], () => {
                let e = ra.A.getGuildId();
                if (t || null == e) return [];
                let i = [];
                for (let t of rr.Ay.getVocalChannelIds(e)) {
                    let e = rl.A.getChannel(t);
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
            if (e?.type === ro.rD.VOICE_CHANNEL) return e.record.id;
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
                                  if (e?.type === ro.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == i) return null;
                          let n = null != i.parent_id ? rl.A.getChannel(i.parent_id) : void 0,
                              r = ec.A.getGuild(i.guild_id);
                          return (0, E.jsx)(
                              rs.c3,
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
                                      null != r ? (0, E.jsx)("div", { className: ru.J5, children: r.name }) : null,
                              },
                              i.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, E.jsx)(rm, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, E.jsx)(l8.Modal, {
        transitionState: n,
        onClose: s,
        title: j.intl.string(j.t.Dm8O4e),
        subtitle: j.intl.string(j.t.q4JpM8),
        actions: void 0,
        input: (0, E.jsx)(l9.k, {
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
                                if (e?.type === ro.rD.VOICE_CHANNEL) return e.record;
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
function rE(e) {
    let { channelId: t } = e,
        {
            channel: i,
            category: n,
            guild: s,
        } = (0, g.cf)([rl.A, ec.A], () => {
            let e = null != t ? rl.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? rl.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? ec.A.getGuild(e.guild_id) : void 0,
                  }
                : { channel: void 0, category: void 0, guild: void 0 };
        });
    return null == i
        ? (0, E.jsx)(es.E, {
              variant: "text-md/medium",
              color: "text-muted",
              className: ru.GN,
              children: j.intl.string(j.t["/fYIK7"]),
          })
        : (0, E.jsx)(rs.c3, {
              channel: i,
              id: i.id,
              category: n,
              onClick: rd,
              onFocus: rd,
              onMouseEnter: rd,
              focused: !1,
              children: null != s ? (0, E.jsx)("div", { className: ru.J5, children: s.name }) : null,
          });
}
function rS(e) {
    let { className: t, children: i } = e;
    return (0, E.jsx)("div", { className: t, children: (0, E.jsx)(q.B, { gap: 16, children: i }) });
}
var rT = i(734066),
    rx = i(880144),
    rp = i(614455);
function rf() {
    let e = (0, g.bG)([eF.Ay], () => eF.Ay.getState()),
        t = (0, g.bG)([l3.Ay], () => (0, rx.A)(l3.Ay)),
        i = (0, g.bG)([rp.A], () => rp.A.isSupported),
        n = (0, rT.sw)(),
        s = (0, rT.BW)(),
        l = (0, eY.isWindows)();
    return {
        customizableKeybinds: (function (e) {
            let { keybinds: t, enableClips: i, enableScreenshotKeybind: n, allowSoundboard: s } = e;
            return eZ()(t)
                .reject(
                    (e) =>
                        e.managed &&
                        ![U.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, U.hCu.SAVE_CLIP, U.hCu.SAVE_SCREENSHOT].includes(
                            e.action,
                        ),
                )
                .reject((e) => !i && (e.action === U.hCu.SAVE_CLIP || e.action === U.hCu.SAVE_SCREENSHOT))
                .reject((e) => !n && e.action === U.hCu.SAVE_SCREENSHOT)
                .reject((e) => !s && (e.action === U.hCu.SOUNDBOARD || e.action === U.hCu.SOUNDBOARD_HOLD))
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
                    { id: "unassigned", value: U.hCu.UNASSIGNED, label: j.intl.string(j.t["0Uh579"]) },
                    { id: "push-to-talk", value: U.hCu.PUSH_TO_TALK, label: j.intl.string(j.t.Y5lgTP) },
                    {
                        id: "push-to-talk-priority",
                        value: U.hCu.PUSH_TO_TALK_PRIORITY,
                        label: j.intl.string(j.t.DkSwJ2),
                    },
                    { id: "push-to-mute", value: U.hCu.PUSH_TO_MUTE, label: j.intl.string(j.t.hSCRqd) },
                    { id: "vad-priority", value: U.hCu.VAD_PRIORITY, label: j.intl.string(j.t["49d6Nd"]) },
                    { id: "toggle-mute", value: U.hCu.TOGGLE_MUTE, label: j.intl.string(j.t.PlkYKD) },
                    { id: "toggle-deafen", value: U.hCu.TOGGLE_DEAFEN, label: j.intl.string(j.t.NvGq1K) },
                    { id: "toggle-voice-mode", value: U.hCu.TOGGLE_VOICE_MODE, label: j.intl.string(j.t.Wa5H9S) },
                    { id: "toggle-streamer-mode", value: U.hCu.TOGGLE_STREAMER_MODE, label: j.intl.string(j.t.BK0Ncc) },
                    { id: "toggle-camera", value: U.hCu.TOGGLE_CAMERA, label: j.intl.string(j.t.hf8JVT) },
                ];
            return (
                t &&
                    (r.push({
                        id: "toggle-overlay-input-lock",
                        value: U.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
                        label: j.intl.string(j.t.VsAZcC),
                    }),
                    r.push({
                        id: "activate-overlay-region-text-widget",
                        value: U.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                        label: j.intl.string(j.t.hurHWo),
                    })),
                i &&
                    ((0, eY.isWindows)() || l3.Ay.getUseSystemScreensharePicker()) &&
                    r.push({
                        id: "toggle-go-live-streaming",
                        value: U.hCu.TOGGLE_GO_LIVE_STREAMING,
                        label: j.intl.string(j.t.ybdjJD),
                    }),
                (0, eY.isDesktop)() &&
                    (r.push(
                        { id: "navigate-back", value: U.hCu.NAVIGATE_BACK, label: j.intl.string(j.t.gRSaOa) },
                        { id: "navigate-forward", value: U.hCu.NAVIGATE_FORWARD, label: j.intl.string(j.t.zOXpjU) },
                        {
                            id: "switch-to-voice-channel",
                            value: U.hCu.SWITCH_TO_VOICE_CHANNEL,
                            label: j.intl.string(j.t.ty7Lxy),
                        },
                        {
                            id: "disconnect-from-voice-channel",
                            value: U.hCu.DISCONNECT_FROM_VOICE_CHANNEL,
                            label: j.intl.string(j.t.CV7mT7),
                        },
                    ),
                    n &&
                        r.push(
                            { id: "soundboard", value: U.hCu.SOUNDBOARD, label: j.intl.string(j.t.yPH4xm) },
                            {
                                id: "soundboard-hold",
                                value: U.hCu.SOUNDBOARD_HOLD,
                                label: j.intl.string(j.t["1xFbP/"]),
                            },
                        ),
                    s &&
                        (r.push({ id: "save-clip", value: U.hCu.SAVE_CLIP, label: j.intl.string(j.t.U4URzP) }),
                        l &&
                            r.push({
                                id: "save-screenshot",
                                value: U.hCu.SAVE_SCREENSHOT,
                                label: j.intl.string(j.t["+WloFH"]),
                            }))),
                r
            );
        })({ overlaySupported: i, canGoLive: t, allowSoundboard: l, enableClips: n, enableScreenshotKeybind: s }),
        keybindDescriptions: (function (e) {
            let { overlaySupported: t, canGoLive: i, enableClips: n, enableScreenshotKeybind: s } = e,
                l = {
                    [U.hCu.UNASSIGNED]: j.intl.string(j.t.rvlNLv),
                    [U.hCu.PUSH_TO_MUTE]: j.intl.string(j.t.xtESim),
                    [U.hCu.PUSH_TO_TALK]: j.intl.string(j.t.wTcBSy),
                    [U.hCu.PUSH_TO_TALK_PRIORITY]: j.intl.string(j.t.FhHvWH),
                    [U.hCu.TOGGLE_MUTE]: j.intl.string(j.t.X2fbUm),
                    [U.hCu.TOGGLE_DEAFEN]: j.intl.string(j.t.MjREZV),
                    [U.hCu.TOGGLE_VOICE_MODE]: j.intl.string(j.t.snm5YW),
                    [U.hCu.TOGGLE_STREAMER_MODE]: j.intl.string(j.t.YszLLx),
                    [U.hCu.VAD_PRIORITY]: j.intl.string(j.t.rSe8IZ),
                    [U.hCu.TOGGLE_CAMERA]: j.intl.string(j.t.v1JBtL),
                };
            return (
                t && (l[U.hCu.TOGGLE_OVERLAY_INPUT_LOCK] = j.intl.string(j.t.IoP5vc)),
                i && (0, eY.isWindows)() && (l[U.hCu.TOGGLE_GO_LIVE_STREAMING] = j.intl.string(j.t.s4C238)),
                (0, eY.isDesktop)() &&
                    ((l[U.hCu.NAVIGATE_BACK] = j.intl.string(j.t.nKDlEt)),
                    (l[U.hCu.NAVIGATE_FORWARD] = j.intl.string(j.t.DK0FFk)),
                    (l[U.hCu.SOUNDBOARD] = (0, eY.isWindows)()
                        ? j.intl.string(j.t["5wJefL"])
                        : j.intl.string(j.t.gzjsSP)),
                    (l[U.hCu.SOUNDBOARD_HOLD] = (0, eY.isWindows)()
                        ? j.intl.string(j.t.RRkZc9)
                        : j.intl.string(j.t.laNlTl)),
                    n &&
                        ((l[U.hCu.SAVE_CLIP] = j.intl.string(j.t.z3Wbam)),
                        s && (l[U.hCu.SAVE_SCREENSHOT] = j.intl.string(j.t.m0zd57)))),
                l
            );
        })({ overlaySupported: i, canGoLive: t, enableClips: n, enableScreenshotKeybind: s }),
    };
}
var rN = i(768141);
function r_(e) {
    let { children: t } = e;
    return t([l1.Q_.MESSAGE, l1.Q_.NAVIGATION, l1.Q_.DND, l1.Q_.CHAT, l1.Q_.VOICE_AND_VIDEO, l1.Q_.MISCELLANEOUS]);
}
class rI extends S.PureComponent {
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
            t = eQ.dI(e.shortcut);
        return se.A.hasBind(t)
            ? (0, E.jsx)(tf.p, { messageType: tf.Y.ERROR, children: j.intl.string(j.t["7lQlw3"]) })
            : iD.Yy.has(t)
              ? (0, E.jsx)(tf.p, {
                    messageType: tf.Y.ERROR,
                    children: j.intl.format(j.t.MOIaNd, {
                        keyboardNavArticle: tN.A.getArticleURL(U.MVz.KEYBOARD_NAVIGATION),
                    }),
                })
              : (0, E.jsx)(es.E, {
                    variant: "text-md/normal",
                    className: rN.qD,
                    children: this.props.keybindDescriptions[e.action],
                });
    }
    render() {
        let { managed: e, enabled: t } = this.props.keybind;
        return (0, E.jsxs)("div", {
            className: rN.YI,
            children: [
                (0, E.jsxs)("div", {
                    className: rN.PO,
                    children: [
                        (0, E.jsx)("div", {
                            className: rN.AS,
                            children: (0, E.jsx)(lZ.l, {
                                selectionMode: "single",
                                label: j.intl.string(j.t.UUpAD6),
                                value: this.props.keybind.action,
                                options: this.props.keybindActionTypes,
                                onSelectionChange: this.handleActionChanged,
                                disabled: e,
                            }),
                        }),
                        (0, E.jsx)("div", {
                            className: rN.AS,
                            children: (0, E.jsx)(s4.D, {
                                label: j.intl.string(j.t["1La4tC"]),
                                children: (0, E.jsx)(tY.A, {
                                    defaultValue: this.props.keybind.shortcut,
                                    onChange: this.handleShortcutChange,
                                }),
                            }),
                        }),
                        !e &&
                            (0, E.jsx)("div", {
                                className: rN.d9,
                                children: (0, E.jsx)(lQ.K, {
                                    variant: "icon-only",
                                    onClick: this.handleDeleteKeybind,
                                    icon: lq.u,
                                    "aria-label": j.intl.string(j.t.qEHmmB),
                                }),
                            }),
                        (0, E.jsx)("div", {
                            className: rN.ZW,
                            children: (0, E.jsx)(tr.m, {
                                text: j.intl.string(j.t.uCD7qK),
                                children: (0, E.jsx)("div", {
                                    children: (0, E.jsx)(J.d, { checked: t, onChange: this.handleEnableDisable }),
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
        return e === U.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, E.jsx)(rA, { keybind: this.props.keybind }) : void 0;
    }
}
class rC extends S.PureComponent {
    handleAddKeybind = () => {
        tX.A.addKeybind();
    };
    renderKeybinds(e, t, i) {
        return e.map((n, s) =>
            (0, E.jsxs)(
                S.Fragment,
                {
                    children: [
                        (0, E.jsx)(rI, { keybind: n, keybindDescriptions: t, keybindActionTypes: i }, n.id),
                        s !== e.length - 1 ? (0, E.jsx)(eM.c, {}) : null,
                    ],
                },
                n.id,
            ),
        );
    }
    renderKeybindWarning() {
        return (0, E.jsxs)("div", {
            className: rN.$e,
            children: [
                (0, E.jsx)(lJ.m, { size: "xs", color: er.A.colors.ICON_SUBTLE }),
                (0, E.jsx)(es.E, {
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
                (0, E.jsx)(rS, {
                    className: iU.IE,
                    children: eY.isPlatformEmbedded
                        ? (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsxs)("div", {
                                      className: rN.OQ,
                                      children: [
                                          this.renderKeybindWarning(),
                                          (0, E.jsx)("div", {
                                              className: rN.c9,
                                              children: (0, E.jsx)(eG.$, {
                                                  size: "md",
                                                  onClick: this.handleAddKeybind,
                                                  text: j.intl.string(j.t.zk6Xbs),
                                                  variant: "primary",
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, E.jsx)(l5, { className: rN.Qo, sourcePage: "keybinds" }),
                                  e.length > 0 &&
                                      (0, E.jsxs)(E.Fragment, {
                                          children: [(0, E.jsx)(eM.c, {}), this.renderKeybinds(e, i, t)],
                                      }),
                                  (0, E.jsx)(eM.c, {}),
                              ],
                          })
                        : (0, E.jsx)(tf.p, {
                              messageType: tf.Y.INFO,
                              className: rN.Ly,
                              children: j.intl.format(j.t.mPi3F3, { downloadLink: U.X7G.DOWNLOAD }),
                          }),
                }),
                (0, E.jsx)(rb, {}),
            ],
        });
    }
}
function rb(e) {
    let { showHeader: t = !0 } = e,
        i = eZ()((0, l1.Bx)())
            .filter((e) => e.description !== j.intl.string(j.t.HnNtEI))
            .groupBy((e) => e.group)
            .value();
    return (0, E.jsxs)(q.B, {
        gap: 48,
        children: [
            (0, E.jsx)(i_.n, {
                label: t ? j.intl.string(j.t.Lz5KHI) : void 0,
                children: (0, E.jsx)("div", {
                    className: rN.jh,
                    children: (0, E.jsxs)("div", {
                        className: rN.yZ,
                        children: [
                            (0, E.jsx)(es.E, { variant: "text-md/normal", children: j.intl.string(j.t.sMWLBj) }),
                            (0, E.jsx)("div", {
                                className: rN.DM,
                                children: (0, E.jsx)(l$.e, { shortcut: l0.z.binds["0"], className: rN.LE }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, E.jsx)(r_, {
                children: (e) =>
                    (0, E.jsx)(E.Fragment, {
                        children: e.map((e, t) => {
                            let n = (0, l1.Gm)(e),
                                s = (0, l1.zF)(e),
                                l = i[e];
                            return (0, E.jsx)(
                                i_.n,
                                {
                                    label: n,
                                    description: s,
                                    children: (0, E.jsx)("div", {
                                        className: rN.jh,
                                        children: l.map((e, t) =>
                                            (0, E.jsxs)(
                                                S.Fragment,
                                                {
                                                    children: [
                                                        0 !== t && (0, E.jsx)(eM.c, {}),
                                                        (0, E.jsxs)("div", {
                                                            className: rN.yZ,
                                                            children: [
                                                                (0, E.jsx)(es.E, {
                                                                    variant: "text-md/normal",
                                                                    children: e.description,
                                                                }),
                                                                (0, E.jsx)("div", {
                                                                    className: rN.DM,
                                                                    children: e.binds.map((e) =>
                                                                        (0, E.jsx)(
                                                                            l$.e,
                                                                            { shortcut: e, className: rN.LE },
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
let ry = (0, a.E2)(u.X.KEYBINDS_SETTING, {
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
            let e = rf();
            return (0, E.jsx)(rC, { ...e });
        },
        useSearchTerms: () => [j.intl.string(j.t.T9DA2K)],
    }),
    rv = (0, a.zZ)(u.X.KEYBINDS_CATEGORY, { buildLayout: () => [ry] }),
    rj = (0, a.t_)(u.X.KEYBINDS_PANEL, { useTitle: () => j.intl.string(j.t.T9DA2K), buildLayout: () => [rv] }),
    rO = (0, a.i4)(u.X.KEYBINDS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.T9DA2K),
        icon: lW.F,
        buildLayout: () => [rj],
    });
var rR = i(37646),
    rD = i(434404);
let rL = (0, a.t_)(u.X.LANGUAGE_AND_TIME_PANEL, {
        useTitle: () => j.intl.string(j.t.KyFVyi),
        buildLayout: () => [rD.F],
    }),
    rP = (0, a.i4)(u.X.LANGUAGE_AND_TIME_SIDEBAR_ITEM, {
        icon: rR.U,
        useTitle: () => j.intl.string(j.t.KyFVyi),
        buildLayout: () => [rL],
    }),
    rG = (0, nP.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 }));
async function rM() {
    let e = await sm.Ay.getOpenOnStart(),
        t = await sm.Ay.getSetting("START_MINIMIZED", !1),
        i = await sm.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
    rG.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: i });
}
let rU = (0, a.zD)(u.X.OS_OPEN_ON_STARTUP, {
        useTitle: () => j.intl.string(j.t["3BeZti"]),
        usePredicate: () => c.Av && !(0, c.cX)(),
        useValue: () => rG.useState((e) => e.openOnStartup),
        setValue: function (e) {
            rG.setState({ openOnStartup: e }), sm.Ay.send("TOGGLE_OPEN_ON_STARTUP", e);
        },
        initialize: () => {
            sm.Ay.getOpenOnStart().then((e) => rG.setState({ openOnStartup: e }));
        },
    }),
    rV = (0, a.zD)(u.X.OS_MINIMIZE_TO_TRAY, {
        useTitle: () => j.intl.string(j.t.dJ5MUh),
        useSubtitle: () => j.intl.string(j.t.nQavHr),
        usePredicate: () => c.Av && !(0, c.cX)(),
        useValue: () => rG.useState((e) => e.minimizeToTray),
        setValue: function (e) {
            rG.setState({ minimizeToTray: e }), sm.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e);
        },
        initialize: () => {
            sm.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => rG.setState({ minimizeToTray: e }));
        },
    });
var rk = i(543103);
function rw(e) {
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
let rB = new Set(["failure", "unknown"]),
    rF = (0, a.E2)(u.X.OS_SYSTEM_SERVICE, {
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
                className: rk.q,
                children: [
                    (0, E.jsxs)("div", {
                        className: rk.L,
                        children: [
                            (0, E.jsxs)(q.B, {
                                direction: "horizontal",
                                children: [
                                    (0, E.jsx)(es.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: j.intl.string(j.t.roHq80),
                                    }),
                                    i &&
                                        s &&
                                        (0, E.jsxs)(E.Fragment, {
                                            children: [
                                                (0, E.jsx)(es.E, {
                                                    variant: "text-md/medium",
                                                    color: "text-strong",
                                                    "aria-hidden": !0,
                                                    children: "\u2022",
                                                }),
                                                (0, E.jsx)(es.E, {
                                                    variant: "text-md/medium",
                                                    color:
                                                        "running" === l.state
                                                            ? "text-feedback-positive"
                                                            : rB.has(l.state)
                                                              ? "text-feedback-critical"
                                                              : "text-feedback-warning",
                                                    children: rw(l),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, E.jsx)(es.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: j.intl.format(j.t["8CAL+D"], {
                                    helpCenterLink: tN.A.getArticleURL(U.MVz.SYSTEM_SERVICE),
                                }),
                            }),
                            i &&
                                !s &&
                                (0, E.jsx)(es.E, {
                                    variant: "text-sm/normal",
                                    color: a ? "text-feedback-positive" : "text-feedback-warning",
                                    children: a
                                        ? j.intl.string(j.t.KHVMkW)
                                        : j.intl.format(j.t["5Rlr0b"], { status: rw(l) }),
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
    rz = (0, a.zZ)(u.X.LINUX_CATEGORY, {
        buildLayout: () => [rU, rV, rF],
        initialize: () => {
            rM();
        },
    }),
    rX = (0, a.t_)(u.X.LINUX_PANEL, { useTitle: () => j.intl.string(j.t["7pPjTW"]), buildLayout: () => [rz] }),
    rY = (0, a.i4)(u.X.LINUX_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["7pPjTW"]),
        icon: to.k,
        usePredicate: () => eY.isPlatformEmbedded && (0, eY.isLinux)(),
        buildLayout: () => [rX],
    });
var rH = i(3137),
    rK = i(369606),
    rW = i(604121),
    rZ = i(725951),
    rQ = i(400492),
    rq = i(669067),
    rJ = i(115063),
    r$ = i(754692),
    r0 = i(927018),
    r1 = i(512599),
    r2 = i(532197),
    r3 = i(874486),
    r6 = i(989349),
    r4 = i.n(r6),
    r7 = i(58703),
    r5 = i(906688),
    r8 = i(776824);
function r9(e) {
    let { achievementId: t, dateUnlocked: i } = e,
        n = (0, r0.vM)(t);
    if (null == n) return null;
    let s = null != i,
        { name: l, description: r, hideDescriptionUntilUnlock: a, onAction: o } = n,
        u = a && !s,
        d = s ? "text-strong" : "text-muted",
        c = s ? "text-default" : "text-muted",
        g = r4()(i),
        m = null != o && s,
        A = m ? en.D : "div";
    return (0, E.jsxs)(A, {
        className: e6()(r8.kL, m && r8.b),
        onClick: () => {
            m && o();
        },
        children: [
            (0, E.jsx)("div", {
                className: r8.zc,
                children: (0, E.jsx)(r5.A, { achievementId: t, size: r5.A.Sizes.SIZE_40, unlocked: s }),
            }),
            (0, E.jsxs)("div", {
                className: r8.VW,
                children: [
                    null != i &&
                        (0, E.jsx)(es.E, {
                            variant: "text-xxs/semibold",
                            color: "text-muted",
                            className: r8.YR,
                            children: (0, r7.mk)(g),
                        }),
                    (0, E.jsx)(es.E, { variant: "text-md/medium", color: d, children: l() }),
                    (0, E.jsx)(es.E, { variant: "text-xs/normal", color: c, children: u ? "?????" : r() }),
                ],
            }),
        ],
    });
}
var ae = i(151111);
function at(e) {
    let { onBackClick: t } = e,
        i = (0, g.bG)([r3.A], () => r3.A.getAllUnlockedAchievements()),
        n = S.useMemo(() => Object.values(i).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [i]),
        s = S.useMemo(
            () =>
                Object.values(r0.l0)
                    .filter(N.Vq)
                    .filter((e) => null == i[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [i],
        );
    return (0, E.jsxs)(E.Fragment, {
        children: [
            (0, E.jsxs)(en.D, {
                onClick: t,
                className: ae.vv,
                children: [
                    (0, E.jsx)(r2.A, { direction: r2.A.Directions.LEFT, className: ae.Kk }),
                    (0, E.jsx)(es.E, {
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: j.intl.string(j.t["13/7kX"]),
                    }),
                ],
            }),
            (0, E.jsxs)("div", {
                className: ae.N1,
                children: [
                    (0, E.jsxs)("div", {
                        className: ae.if,
                        children: [
                            (0, E.jsx)(eP.D, {
                                variant: "heading-lg/extrabold",
                                color: "text-strong",
                                children: j.intl.string(j.t["6jI0hd"]),
                            }),
                            (0, E.jsx)(es.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: j.intl.string(j.t.GuUItX),
                            }),
                        ],
                    }),
                    (0, E.jsx)("div", {
                        className: ae.nr,
                        children: (0, E.jsx)(rK.O, {
                            size: "custom",
                            color: er.A.unsafe_rawColors.ORANGE_345.css,
                            width: 40,
                            height: 40,
                        }),
                    }),
                ],
            }),
            n.length > 0 &&
                (0, E.jsx)("div", {
                    className: ae.yF,
                    children: (0, E.jsx)("div", {
                        className: ae.Eh,
                        children: n.map((e) => {
                            let { achievementId: t, dateUnlocked: i } = e;
                            return (0, E.jsx)(r9, { achievementId: t, dateUnlocked: i }, t);
                        }),
                    }),
                }),
            s.length > 0 &&
                (0, E.jsxs)("div", {
                    className: ae.yF,
                    children: [
                        (0, E.jsx)("div", {
                            className: ae.if,
                            children: (0, E.jsx)(es.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                children: j.intl.string(j.t.GFyMg1),
                            }),
                        }),
                        (0, E.jsx)("div", {
                            className: ae.Eh,
                            children: s.map((e) => (0, E.jsx)(r9, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, E.jsx)("div", { className: ae.yF, children: (0, E.jsx)("div", { className: ae.F3 }) }),
        ],
    });
}
var ai = i(224964),
    an = i(31408),
    as = i(860755);
let al = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    ar = (0, eW.range)(0, 11),
    aa = (0, eW.range)(0, 2.25, 0.25),
    ao = (0, eW.range)(1, 11),
    au = (0, eW.range)(1, 26),
    ad = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function ac(e) {
    let { disabled: t, locations: i, settingsLocations: n, onChange: s } = e,
        l = i.map((e) =>
            (0, E.jsx)(
                J.d,
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
function ag(e) {
    let { children: t } = e;
    return (0, E.jsx)(es.E, { className: as.iF, variant: "text-sm/normal", color: "text-default", children: t });
}
function am(e) {
    let {
            settings: { enabled: t, warningSeen: i },
            updateSettings: n,
        } = e,
        s = (0, g.bG)([i7.Ay], () => i7.Ay.useReducedMotion);
    return (0, E.jsx)(J.d, {
        label: j.intl.string(j.t.vuiXm9),
        description: j.intl.string(j.t.KuYbWN),
        checked: t,
        onChange: function (e) {
            e || (0, r$._)(r0.sn.DISABLE_POGGERMODE),
                e && (!i || s)
                    ? (0, sg.A)({
                          title: s ? j.intl.string(j.t["FxT+p0"]) : j.intl.string(j.t.TAZ4F9),
                          subtitle: s ? j.intl.string(j.t.gmixrx) : j.intl.string(j.t.jN3t3K),
                          confirmText: j.intl.string(j.t.JFfins),
                          onConfirm: () => n(s ? al : { enabled: !0, warningSeen: !0 }),
                      })
                    : n({ enabled: e });
        },
    });
}
function aA(e) {
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
            (0, E.jsx)(J.d, {
                label: j.intl.string(j.t.s0KCgF),
                description: j.intl.string(j.t.O1Vflg),
                checked: i,
                disabled: !t,
                onChange: (e) => r({ confettiEnabled: e }, 0),
            }),
            (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(es.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: as.KF,
                        children: j.intl.string(j.t.vd0D81),
                    }),
                    (0, E.jsx)(ag, { children: j.intl.string(j.t.a18Sug) }),
                    (0, E.jsx)(nd.A, {
                        disabled: a,
                        markers: ao,
                        stickToMarkers: !0,
                        minValue: ao[0],
                        maxValue: ao[ao.length - 1],
                        initialValue: n,
                        onValueChange: (e) => r({ confettiCount: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(es.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: as.KF,
                        children: j.intl.string(j.t.sPO3ij),
                    }),
                    (0, E.jsx)(ag, { children: j.intl.string(j.t.xoldVn) }),
                    (0, E.jsx)(nd.A, {
                        disabled: a,
                        markers: au,
                        stickToMarkers: !0,
                        minValue: au[0],
                        maxValue: au[au.length - 1],
                        initialValue: s,
                        onValueChange: (e) => r({ confettiSize: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, E.jsx)(ac, {
                disabled: a,
                locations: [
                    {
                        location: an.k.CHAT_INPUT,
                        title: j.intl.string(j.t.elTtyz),
                        description: j.intl.string(j.t.HtKfMi),
                    },
                    {
                        location: an.k.REACTION,
                        title: j.intl.string(j.t.Ik4VIa),
                        description: j.intl.string(j.t.y4rqK0),
                    },
                    {
                        location: an.k.MEMBER_USER,
                        title: j.intl.string(j.t.ZXBlAn),
                        description: j.intl.string(j.t["m9RD+c"]),
                    },
                    {
                        location: an.k.CALL_TILE,
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
function ah(e) {
    let {
            settings: { enabled: t, combosEnabled: i, comboSoundsEnabled: n, combosRequiredCount: s },
            updateSettings: l,
        } = e,
        r = !t || !i;
    return (0, E.jsxs)(i_.n, {
        label: j.intl.string(j.t.Xz0ole),
        children: [
            (0, E.jsx)(J.d, {
                label: j.intl.string(j.t.o3iV7B),
                description: j.intl.string(j.t["31Z8Ee"]),
                checked: i,
                disabled: !t,
                onChange: (e) => l({ combosEnabled: e }),
            }),
            (0, E.jsx)(J.d, {
                label: j.intl.string(j.t["Ax+IoW"]),
                description: j.intl.string(j.t["9rgQEr"]),
                checked: n,
                disabled: !t,
                onChange: (e) => l({ comboSoundsEnabled: e }),
            }),
            (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(es.E, {
                        variant: "text-md/semibold",
                        color: r ? "text-muted" : "text-strong",
                        className: as.KF,
                        children: j.intl.string(j.t.L0oQuh),
                    }),
                    (0, E.jsx)(ag, { children: j.intl.string(j.t["/OOFpL"]) }),
                    (0, E.jsx)(nd.A, {
                        disabled: r,
                        markers: ar,
                        stickToMarkers: !0,
                        minValue: ar[0],
                        maxValue: ar[ar.length - 1],
                        initialValue: s,
                        onValueChange: (e) => l({ combosRequiredCount: e }),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
        ],
    });
}
function aE(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: i, shakeIntensity: n, screenshakeEnabledLocations: s },
            updateSettings: l,
        } = e,
        r = (0, g.bG)([i7.Ay], () => i7.Ay.useReducedMotion),
        a = !t || !i || r;
    return (0, E.jsxs)(i_.n, {
        label: j.intl.string(j.t.wVS5Sd),
        children: [
            (0, E.jsx)(J.d, {
                label: j.intl.string(j.t.N004zO),
                description: r ? j.intl.string(j.t.GckHGw) : j.intl.string(j.t.Qq5W3v),
                checked: i && !r,
                disabled: !t || r,
                onChange: (e) => l({ screenshakeEnabled: e }, 1),
            }),
            (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(es.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: as.KF,
                        children: j.intl.string(j.t.UxnnC4),
                    }),
                    (0, E.jsx)(ag, { children: j.intl.string(j.t.CEOEOb) }),
                    (0, E.jsx)(nd.A, {
                        disabled: a,
                        markers: aa,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: aa[0],
                        maxValue: aa[aa.length - 1],
                        initialValue: n,
                        onValueChange: (e) => {
                            var t;
                            null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > n &&
                                (0, r$._)(r0.sn.MORE),
                                l(t, 1);
                        },
                        onMarkerRender: (e) => (e === aa[aa.length - 1] ? j.intl.string(j.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, E.jsx)(ac, {
                disabled: a,
                locations: [
                    {
                        location: an.uD.CHAT_INPUT,
                        title: j.intl.string(j.t.vUcvPP),
                        description: j.intl.string(j.t.y00OrF),
                    },
                    {
                        location: an.uD.VOICE_USER,
                        title: j.intl.string(j.t.TcRO54),
                        description: j.intl.string(j.t.YJCxVY),
                    },
                    {
                        location: an.uD.MENTION,
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
function aS(e) {
    let { updateSettings: t } = e;
    return (0, E.jsx)(i_.n, {
        label: j.intl.string(j.t.EuXv2q),
        children: (0, E.jsxs)(q.B, {
            gap: 16,
            children: [
                (0, E.jsx)("div", { children: j.intl.string(j.t["1SLnki"]) }),
                (0, E.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: as.hw,
                    children: (0, E.jsx)(eG.$, {
                        variant: "primary",
                        size: "sm",
                        text: j.intl.string(j.t.qz65yY),
                        onClick: function () {
                            t({ enabled: !1, settingsVisible: !1 }), (0, sH.default)();
                        },
                    }),
                }),
            ],
        }),
    });
}
function aT(e) {
    let { onChangePage: t } = e;
    return (0, E.jsxs)(en.D, {
        onClick: function () {
            return t(1);
        },
        className: as.Tq,
        children: [
            (0, E.jsx)("div", {
                className: as.w1,
                children: (0, E.jsx)(rK.O, { size: "md", color: er.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, E.jsxs)("div", {
                className: as.qL,
                children: [
                    (0, E.jsx)(eP.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: j.intl.string(j.t["6jI0hd"]),
                    }),
                    (0, E.jsx)(es.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: j.intl.string(j.t.GuUItX),
                    }),
                ],
            }),
            (0, E.jsx)(tO._, { size: "custom", color: "currentColor", width: 16, className: as.nT }),
        ],
    });
}
function ax() {
    return i
        .e("4660")
        .then(i.t.bind(i, 662336, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function ap(e) {
    let { onChangePage: t, setShowEnableAnimation: i } = e,
        n = (0, g.cf)([rH.A], () => rH.A.getState()),
        [s, l] = S.useState({ x: 0, y: 0 }),
        r = (0, ai.A)();
    function a(e, t) {
        var l, a, o, u, d, c, g, m;
        if (
            (e.enabled &&
                !1 === n.enabled &&
                (i(!0),
                (0, rQ.Ak)("poggermode_enabled"),
                (0, rJ.fO)({ duration: 2e3, intensity: e.shakeIntensity ?? n.shakeIntensity })),
            (0, r1.O9)(e),
            null == t)
        )
            return;
        let A =
            ((l = n.confettiEnabled), (a = e.confettiEnabled), (o = n.enabled), (u = e.enabled), (a ?? l) && (u ?? o));
        0 === t && A && r.fire(s.x, s.y, { settings: e });
        let h =
            ((d = n.screenshakeEnabled),
            (c = e.screenshakeEnabled),
            (g = n.enabled),
            (m = e.enabled),
            (c ?? d) && (m ?? g));
        1 === t && h && (0, rJ.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? n.shakeIntensity });
    }
    function o(e) {
        l({ x: e.clientX, y: e.clientY });
    }
    return (
        S.useEffect(
            () => (window.addEventListener("mousemove", o), () => window.removeEventListener("mousemove", o)),
            [],
        ),
        (0, E.jsxs)(q.B, {
            gap: 24,
            children: [
                (0, E.jsx)(am, { settings: n, updateSettings: a }),
                (0, E.jsx)(aT, { onChangePage: t }),
                (0, E.jsx)(ah, { settings: n, updateSettings: a }),
                (0, E.jsx)(aE, { settings: n, updateSettings: a }),
                (0, E.jsx)(aA, { settings: n, updateSettings: a }),
                (0, E.jsx)(aS, { updateSettings: a }),
            ],
        })
    );
}
function af(e) {
    return 0 === e ? rZ.f.LEFT : rZ.f.RIGHT;
}
let aN = (0, a.E2)(u.X.POGGERMODE_SETTING, {
        Component: function () {
            let [e, t] = S.useState(0),
                [i, n] = S.useState(af(e)),
                [s, l] = S.useState(!1),
                r = (0, g.bG)([i7.Ay], () => i7.Ay.useReducedMotion),
                a = s && !r;
            return (
                S.useEffect(() => {
                    let t = setTimeout(() => {
                        n(af(e));
                    }, 500);
                    return () => clearTimeout(t);
                }, [e]),
                S.useEffect(() => {
                    (0, rq._)(ad[e]);
                }, [e]),
                S.useEffect(() => {
                    Math.random() > 0.99 && (0, r$._)(r0.sn.VISITOR_100);
                }, []),
                (0, E.jsxs)(E.Fragment, {
                    children: [
                        (0, E.jsx)(rZ.A, {
                            className: as.l3,
                            step: e,
                            direction: i,
                            children: (function (e, t, i) {
                                function n(e) {
                                    return () => {
                                        t(e);
                                    };
                                }
                                switch (e) {
                                    case 0:
                                        return (0, E.jsx)(ap, { onChangePage: n(1), setShowEnableAnimation: i });
                                    case 1:
                                        return (0, E.jsx)(at, { onBackClick: n(0) });
                                    default:
                                        return null;
                                }
                            })(e, t, l),
                        }),
                        (0, E.jsx)("div", {
                            className: a ? as.Sr : as.IP,
                            children: (0, E.jsx)(rW.a, {
                                className: as.gT,
                                importData: ax,
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
    a_ = (0, a.zZ)(u.X.POGGERMODE_CATEGORY, { buildLayout: () => [aN] });
var aI = i(842090);
let aC = (0, a.t_)(u.X.POGGERMODE_PANEL, { useTitle: () => j.intl.string(j.t.AtCukI), buildLayout: () => [a_] }),
    ab = (0, a.i4)(u.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.AtCukI),
        icon: () => (0, E.jsx)("img", { alt: "", src: i(724405), className: aI.$ }),
        usePredicate: () => (0, g.bG)([rH.A], () => rH.A.settingsVisible),
        buildLayout: () => [aC],
    });
var ay = i(307301);
let av = (0, a.zD)(u.X.OS_START_MINIMIZED, {
    useTitle: () => j.intl.string(j.t.GfBL83),
    useSubtitle: () => j.intl.string(j.t.XGyhhc),
    usePredicate: () => (0, c.uF)(),
    useValue: () => rG.useState((e) => !!e.openOnStartup && e.startMinimized),
    setValue: function (e) {
        rG.setState({ startMinimized: e }), sm.Ay.send("TOGGLE_START_MINIMIZED", e);
    },
    useDisabled: () => !rG.useState((e) => e.openOnStartup),
    initialize: () => {
        sm.Ay.getSetting("START_MINIMIZED", !1).then((e) => rG.setState({ startMinimized: e }));
    },
});
var aj = i(839610),
    aO = i(425192);
function aR(e) {
    let { keybind: t } = e,
        i = eQ.dI(t.shortcut);
    return se.A.hasBind(i)
        ? (0, E.jsx)("div", {
              className: aO.$e,
              children: (0, E.jsx)(Q.w, { type: "warning", children: j.intl.string(j.t["7lQlw3"]) }),
          })
        : iD.Yy.has(i)
          ? (0, E.jsx)("div", {
                className: aO.$e,
                children: (0, E.jsx)(Q.w, {
                    type: "warning",
                    children: j.intl.format(j.t.MOIaNd, {
                        keyboardNavArticle: tN.A.getArticleURL(U.MVz.KEYBOARD_NAVIGATION),
                    }),
                }),
            })
          : void 0;
}
function aD(e) {
    let { keybind: t } = e;
    return t.action === U.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, E.jsx)(rA, { keybind: t, className: aO._M }) : null;
}
let aL = S.memo(function (e) {
    let { keybind: t, keybindDescriptions: i, keybindActionTypes: n } = e,
        s = S.useCallback((e) => tX.A.setKeybind({ ...t, action: e }), [t]),
        l = S.useCallback((e) => tX.A.setKeybind({ ...t, shortcut: e }), [t]),
        r = S.useCallback(() => tX.A.setKeybind({ ...t, enabled: !t.enabled }), [t]),
        a = S.useCallback(() => tX.A.deleteKeybind(t.id), [t.id]),
        o = S.useId(),
        u = S.useMemo(() => n.find((e) => e.value === t.action)?.label ?? t.action, [t.action, n]);
    return (0, E.jsxs)("div", {
        className: aO.f_,
        children: [
            (0, E.jsx)(aR, { keybind: t }),
            (0, E.jsx)("div", {
                className: aO.XI,
                children: (0, E.jsx)(lZ.l, {
                    selectionMode: "single",
                    label: j.intl.string(j.t.XH5b12),
                    value: t.action,
                    options: n,
                    onSelectionChange: s,
                    disabled: t.managed,
                }),
            }),
            (0, E.jsx)("div", {
                className: aO.LE,
                children: (0, E.jsx)(s4.D, {
                    label: j.intl.string(j.t["1La4tC"]),
                    layout: "vertical",
                    children: (0, E.jsx)(tY.A, { defaultValue: t.shortcut, onChange: l }),
                }),
            }),
            (0, E.jsxs)("div", {
                className: aO.ne,
                children: [
                    !t.managed &&
                        (0, E.jsx)(lQ.K, {
                            variant: "icon-only",
                            onClick: a,
                            icon: lq.u,
                            "aria-label": j.intl.string(j.t.qEHmmB),
                        }),
                    (0, E.jsx)(tr.m, {
                        text: j.intl.string(t.enabled ? j.t.pNYGbx : j.t["51DGkH"]),
                        ariaHidden: !0,
                        children: (0, E.jsxs)("div", {
                            children: [
                                (0, E.jsx)(eo.A, {
                                    id: o,
                                    children: j.intl.format(t.enabled ? j.t["myr/Y0"] : j.t.lYhtPO, { actionName: u }),
                                }),
                                (0, E.jsx)(aj.I, { checked: t.enabled, onChange: r, labelledBy: o }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, E.jsx)(es.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: aO.h_,
                children: i[t.action],
            }),
            (0, E.jsx)(aD, { keybind: t }),
        ],
    });
});
var aP = i(655650);
let aG = function () {
        let { customizableKeybinds: e, keybindDescriptions: t, keybindActionTypes: i } = rf();
        return 0 === e.length
            ? (0, E.jsx)(es.E, { variant: "text-sm/normal", color: "text-subtle", children: j.intl.string(j.t.vyYgWp) })
            : (0, E.jsx)("div", {
                  className: aP.A,
                  children: e.map((n, s) =>
                      (0, E.jsxs)(
                          S.Fragment,
                          {
                              children: [
                                  (0, E.jsx)(aL, { keybind: n, keybindDescriptions: t, keybindActionTypes: i }),
                                  s < e.length - 1 ? (0, E.jsx)(eM.c, { className: aP.y, gap: 24 }) : null,
                              ],
                          },
                          n.id,
                      ),
                  ),
              });
    },
    aM = (0, a.E2)(u.X.CUSTOM_KEYBINDS_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["069nVT"])],
        Component: function () {
            return c.Av
                ? (0, E.jsx)(aG, {})
                : (0, E.jsx)(Q.w, {
                      type: "info",
                      children: j.intl.format(j.t.mPi3F3, { downloadLink: U.X7G.DOWNLOAD }),
                  });
        },
    }),
    aU = (0, a.E2)(u.X.DEFAULT_KEYBINDS_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.Lz5KHI)],
        Component: () => (0, E.jsx)(rb, { showHeader: !1 }),
    });
function aV() {
    sa.h.dispatch({ type: "DISCORD_STATS_POPOUT_WINDOW_OPEN" });
}
let ak = (0, a.Tf)(u.X.DISCORD_STATS_POPOUT, {
        useTitle: () => "Discord Stats",
        useSubtitle: () => "Open a floating panel showing live GPU, CPU, and memory usage.",
        useLabel: () => "Open",
        usePredicate: () => (0, g.bG)([io.default], () => io.default.getCurrentUser()?.isStaff() ?? !1),
        onClick: () => {
            aV();
        },
    }),
    aw = (0, a.zZ)(u.X.SYSTEM_ADVANCED_CATEGORY, {
        useTitle: () => j.intl.string(j.t["8/udY0"]),
        buildLayout: () => [ak],
    }),
    aB = (0, a.zZ)(u.X.SYSTEM_GENERAL_CATEGORY, {
        useTitle: () => j.intl.string(j.t.cg6ltt),
        buildLayout: () => [rU, av, rV, sh],
        usePredicate: () => c.Av && ((0, c.uF)() || (0, c.j9)()),
        initialize: () => {
            rM();
        },
    }),
    aF = (0, a.zZ)(u.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["069nVT"]),
        useSubtitle: () => j.intl.string(j.t.T4LZVL),
        buildLayout: () => [aM],
        initialize: () => (tX.A.enableAll(!1), () => tX.A.enableAll(!0)),
        useInlineNotice: function () {
            return c.Av
                ? {
                      type: h.lT.STRONGLY_DISCOURAGED_CUSTOM,
                      notice: () =>
                          (0, E.jsxs)(q.B, {
                              direction: "vertical",
                              gap: "md",
                              children: [
                                  (0, E.jsx)(Q.w, { type: "info", children: j.intl.string(j.t["5pkmHa"]) }),
                                  (0, E.jsx)(l5, { sourcePage: "keybinds" }),
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
                              icon: ay.j,
                              onClick: () => tX.A.addKeybind(),
                          },
                      ],
                  }
                : null,
    }),
    az = (0, a.zZ)(u.X.SYSTEM_DEFAULT_KEYBINDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Lz5KHI),
        buildLayout: () => [aU],
    }),
    aX = (0, a.zZ)(u.X.SYSTEM_HELPER_CATEGORY, {
        useTitle: () => j.intl.string(j.t["+XZgmA"]),
        usePredicate: () => c.Av && ((0, c.uF)() || (0, c.j9)()),
        buildLayout: () => [rF],
    }),
    aY = (0, a.t_)(u.X.SYSTEM_PANEL, {
        useTitle: () => j.intl.string(j.t["VJ/qKo"]),
        buildLayout: () => [aB, aF, az, aX, aw],
    }),
    aH = (0, a.i4)(u.X.SYSTEM_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["VJ/qKo"]),
        icon: lW.F,
        buildLayout: () => [aY],
    });
var aK = i(831544),
    aW = i(922795),
    aZ = i(212245),
    aQ = i(329551),
    aq = i(285918),
    aJ = i(413339),
    a$ = i(952572),
    a0 = i(382003);
let a1 = (0, a.E2)(u.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.lZTUPs)],
        usePredicate: a$.A,
        Component: function () {
            let e = (0, aZ.p)(),
                t = S.useRef(!1),
                i = (0, g.bG)([l3.Ay], () => l3.Ay.getVideoDeviceId()),
                [n, s] = S.useState((0, aQ.i)(io.default.getCurrentUser())),
                l = S.useRef(n);
            return (
                S.useEffect(
                    () => () => {
                        t.current && (0, aq._C)(l.current);
                    },
                    [],
                ),
                (0, E.jsx)(a0.A, {
                    selectedBackgroundOption: n,
                    onSelectBackgroundOption: function (i) {
                        (t.current = !0), (l.current = i), s(i), (0, aJ.gB)(i, { location: e.location }).catch(U.tEg);
                    },
                    currentDeviceId: i,
                })
            );
        },
    }),
    a2 = (0, a.zD)(u.X.CAMERA_PREVIEW_PREFERENCE, {
        useTitle: () => j.intl.string(j.t["3Ppr1h"]),
        useSubtitle: () => j.intl.string(j.t.WNbX4O),
        useValue: D.bm.useSetting,
        setValue: (e) => {
            D.bm.updateSetting(e), G.default.track(U.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
        },
    });
var a3 = i(625841),
    a6 = i(74848),
    a4 = i(204050);
let a7 = (0, nP.D)(() => ({ previewEnabled: !1 }));
var a5 = i(731854);
let a8 = (0, a.E2)(u.X.CAMERA_SELECTION_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.FsQ3OR)],
    Component: function () {
        let e = (0, g.bG)([l3.Ay], () => l3.Ay.isVideoAvailable()),
            { id: t } = (0, a6.x5)(a5.oh.VIDEO_INPUT),
            { analyticsLocations: i } = (0, nZ.Ay)();
        return (0, E.jsx)(a3.U, {
            label: j.intl.string(j.t.FsQ3OR),
            deviceType: a5.oh.VIDEO_INPUT,
            location: "UserSettingsCameraSelect",
            isDisabled: !e,
            helperText: (0, a4.p)()
                ? j.intl.format(j.t.aJYgRt, {
                      onCameraSettingsClick: () => {
                          a7.setState({ previewEnabled: !1 }),
                              window.open((0, a4.i)(t)),
                              G.default.track(U.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: i });
                      },
                  })
                : void 0,
        });
    },
});
var a9 = i(745317),
    oe = i(668468);
let ot = (0, a.E2)(u.X.CAMERA_VIDEO_PREVIEW, {
        useSearchTerms: () => [j.intl.string(j.t.JIf4v7)],
        Component: function () {
            let e = l3.Ay.getCameraComponent(),
                t = (0, g.bG)([l3.Ay], () => l3.Ay.getVideoDeviceId()),
                i = a7.useField("previewEnabled"),
                n = (0, g.bG)([l3.Ay], () => l3.Ay.isVideoAvailable());
            return ((0, tg.l0)(() => {
                a7.setState({ previewEnabled: !1 });
            }),
            i)
                ? (0, E.jsx)("div", {
                      className: oe.T9,
                      children: (0, E.jsxs)("div", {
                          className: oe.Xi,
                          children: [
                              (0, E.jsxs)("div", {
                                  className: oe.UI,
                                  children: [
                                      (0, E.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !i }),
                                      (0, E.jsx)(a9.kE, {}),
                                  ],
                              }),
                              (0, E.jsx)(a9.eK, {}),
                          ],
                      }),
                  })
                : (0, E.jsx)("div", {
                      className: oe.T9,
                      children: (0, E.jsx)(tr.m, {
                          text: n ? null : j.intl.string(j.t["8jSzSe"]),
                          children: (0, E.jsx)(eG.$, {
                              variant: "primary",
                              text: j.intl.string(j.t.JIf4v7),
                              onClick: () => a7.setState({ previewEnabled: !0 }),
                              disabled: !n,
                          }),
                      }),
                  });
        },
    }),
    oi = (0, a.zZ)(u.X.CAMERA_CATEGORY, {
        useTitle: () => j.intl.string(j.t.uje3P9),
        usePredicate: () => (0, g.bG)([l3.Ay], () => l3.Ay.supports(a5.O5.VIDEO)),
        buildLayout: () => [ot, a2, a8, a1],
    });
var on = i(827343);
let os = (0, a.zD)(u.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => j.intl.string(j.t.qFphsa),
        useSubtitle: () => j.intl.string(j.t.cQfwyY),
        usePredicate: function () {
            return (0, c.j9)();
        },
        useValue: function () {
            return (0, g.bG)([l3.Ay], () => l3.Ay.getOpenH264Enabled());
        },
        setValue: function (e) {
            on.A.setOpenH264Enabled(e),
                (0, sg.A)({
                    title: j.intl.string(j.t["9jf31O"]),
                    subtitle: j.intl.string(j.t["J2wg+X"]),
                    confirmText: j.intl.string(j.t.BddRzS),
                    onConfirm: () => lN.A.app.relaunch(),
                });
        },
        useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
    }),
    ol = (0, a.zD)(u.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
        useTitle: () => j.intl.string(j.t["r6K+TL"]),
        useSubtitle: () => j.intl.string(j.t["xl9+I6"]),
        useValue: function () {
            return (0, g.bG)([l3.Ay], () => l3.Ay.getAecDump());
        },
        setValue: on.A.setAecDump,
        usePredicate: function () {
            return (0, g.bG)([l3.Ay], () => l3.Ay.isAecDumpSupported());
        },
    });
var or = i(139033),
    oa = i(862482),
    oo = i(640238),
    ou = i(825484),
    od = i(77138),
    oc = i(487329),
    og = i(353835);
let om = (0, nP.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function oA() {
    let e = await lN.A.fileManager.getLogPath();
    lN.A.fileManager.showItemInFolder(e);
}
function oh(e) {
    (0, sg.A)({
        title: j.intl.string(j.t["7UXEF2"]),
        subtitle: j.intl.string(j.t.IYPrRl),
        confirmText: j.intl.string(j.t.BddRzS),
        onConfirm: () => on.A.setDebugLogging(e),
    });
}
async function oE(e) {
    let { onUploadStart: t, onUploadFinish: i } = e;
    t?.();
    try {
        let e, t;
        await l3.Ay.getMediaEngine().writeAudioDebugState(),
            await og.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, od.a)(U.Umv.RTC),
            (e = j.intl.string(j.t["fKBB8+"])),
            (t = j.intl.string(j.t.BvyxE7)),
            (0, or.A)({ title: e, subtitle: t });
    } catch (l) {
        var n;
        let e, t, i, s;
        (n = l.displayMessage),
            (e = j.intl.string(j.t.QZg0J7)),
            (t = n ?? j.intl.string(j.t.VzHcSm)),
            (i = (0, oc.B1)(oc.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (s = j.intl.formatToPlainString(j.t.ejOT95, { errorCode: i })),
            (0, K.openModal)((i) =>
                (0, E.jsx)(oo.a, {
                    header: e,
                    confirmButtonColor: oa.$n.Colors.BRAND,
                    confirmText: j.intl.string(j.t.BddRzS),
                    ...i,
                    children: (0, E.jsxs)("div", {
                        style: { display: "flex", flexDirection: "column", height: "100%" },
                        children: [
                            (0, E.jsx)(es.E, { variant: "text-md/normal", children: t }),
                            (0, E.jsx)(es.E, {
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
async function oS() {
    await oE({
        onUploadStart: () => om.setState({ isUploading: !0 }),
        onUploadFinish: () => om.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let oT = (0, a.E2)(u.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [j.intl.string(j.t["726JHL"]), j.intl.string(j.t.EbwFfR), j.intl.string(j.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, g.bG)([l3.Ay], () => l3.Ay.supports(a5.O5.DEBUG_LOGGING));
        return c.Av && e && null != lN.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, g.bG)([l3.Ay], () => l3.Ay.getDebugLogging()),
            t = om.useField("isUploading"),
            i = om.useField("isDisabled"),
            n = S.useId();
        return (0, E.jsxs)("fieldset", {
            children: [
                (0, E.jsx)(eo.A, { tag: "legend", id: n, children: j.intl.string(j.t["FjN+et"]) }),
                (0, E.jsxs)(q.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, E.jsx)(J.d, {
                            label: j.intl.string(j.t["726JHL"]),
                            description: j.intl.string(j.t["/7ak9Q"]),
                            checked: e,
                            onChange: oh,
                        }),
                        (0, E.jsx)("div", {
                            role: "group",
                            "aria-labelledby": n,
                            children: (0, E.jsxs)(ou.e, {
                                children: [
                                    (0, E.jsx)(eG.$, {
                                        variant: "secondary",
                                        text: j.intl.string(j.t.EbwFfR),
                                        onClick: oS,
                                        loading: t,
                                        disabled: i,
                                        "aria-label": j.intl.string(j.t.aY1OH2),
                                    }),
                                    (0, E.jsx)(eG.$, {
                                        variant: "secondary",
                                        text: j.intl.string(j.t.nuPtYi),
                                        onClick: oA,
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
var ox = i(233545),
    op = i(412780);
function of() {
    return (0, g.bG)([io.default, l3.Ay], () => {
        let e = io.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            i = "canary" === sm.Ay.releaseChannel || "development" === sm.Ay.releaseChannel,
            n = l3.Ay.supports(a5.O5.CONNECTION_REPLAY);
        return t && i && n;
    });
}
let oN = (0, a.zD)(u.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => j.intl.string(j.t.U4FgFK),
        useSubtitle: () => j.intl.string(j.t.Lm72RU),
        useValue: function () {
            return (0, g.bG)([op.Ay], () => op.Ay.shouldRecordNextConnection());
        },
        setValue: ox.Et,
        usePredicate: of,
    }),
    o_ = (0, a.Tf)(u.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => j.intl.string(j.t.nJnOHO),
        useLabel: () => j.intl.string(j.t["3xjX0U"]),
        onClick: ox.YW,
        usePredicate: of,
    });
var oI = i(926919),
    oC = i(111162),
    ob = i(855302);
let oy = (0, a.zD)(u.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
        useTitle: () => j.intl.string(j.t["0CEP6e"]),
        useSubtitle: () => j.intl.string(j.t["kBXuW+"]),
        useValue: function () {
            return (0, g.bG)([oC.default], () => oC.default.isStreamInfoOverlayEnabled);
        },
        setValue: function (e) {
            let t = oC.default.isStreamInfoOverlayEnabled;
            (0, ob.A)("stream_info_overlay_enabled", e, t), (0, oI.x)({ isStreamInfoOverlayEnabled: e });
        },
        usePredicate: function () {
            return D.Q_.useSetting();
        },
    }),
    ov = (0, a.bd)(u.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? j.intl.string(j.t["/B4I8H"]) : j.intl.string(j.t.BTlsWH)),
        useCollapsedSubtitle: () => j.intl.string(j.t.la1Ys4),
        buildLayout: () => [oy, ol, oN, o_, oT],
    });
function oj(e, t, i) {
    (0, sg.A)({ title: e, subtitle: t, confirmText: j.intl.string(j.t.BddRzS), onConfirm: i });
}
let oO = (0, a.Tf)(u.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => j.intl.string(j.t.SXfv1v),
        useSubtitle: () => j.intl.string(j.t["buA5/q"]),
        useLabel: () => j.intl.string(j.t.yBZMsQ),
        onClick: function () {
            oj(j.intl.string(j.t["4iKQ/3"]), j.intl.string(j.t.sQ42iT), on.A.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    oR = (0, a.zZ)(u.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.UDAU9K),
        buildLayout: () => [os, ov, oO],
    });
var oD = i(347481),
    oL = i(852712);
let oP = (0, a.zD)(u.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => j.intl.string(j.t.cUMdH0),
        useSubtitle: () => j.intl.string(j.t["6EjbvA"]),
        useValue: function () {
            return (0, g.bG)([l3.Ay], () => l3.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            on.A.setAutomaticGainControl(e, { page: U.liQ.USER_SETTINGS, section: U.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, g.bG)([l3.Ay, oD.A], () => {
                let e = l3.Ay.getInputDeviceId();
                return oD.A.hasAutomaticGainControl(e);
            });
        },
        usePredicate: function () {
            return (0, g.bG)([l3.Ay], () => l3.Ay.isAutomaticGainControlSupported() && l3.Ay.isInputProfileCustom());
        },
    }),
    oG = (0, a.sN)(u.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => j.intl.string(j.t.AlybXj),
        setValue: (e) =>
            on.A.setAttenuation(e, l3.Ay.getAttenuateWhileSpeakingSelf(), l3.Ay.getAttenuateWhileSpeakingOthers()),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => l3.Ay.getAttenuation(),
    }),
    oM = (0, a.zD)(u.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => j.intl.string(j.t["9dHxRY"]),
        useValue: () => (0, g.bG)([l3.Ay], () => l3.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => on.A.setAttenuation(l3.Ay.getAttenuation(), e, l3.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    oU = (0, a.zD)(u.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => j.intl.string(j.t.SMt0Gr),
        useValue: () => (0, g.bG)([l3.Ay], () => l3.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => on.A.setAttenuation(l3.Ay.getAttenuation(), l3.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    oV = (0, a.FW)(u.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.oSdBvW),
        useSubtitle: () => j.intl.string(j.t["0A/8Rt"]),
        usePredicate: () => (0, g.bG)([l3.Ay], () => l3.Ay.supports(a5.O5.ATTENUATION)),
        buildLayout: () => [oG, oM, oU],
    });
var ok = i(801644);
let ow = (0, a.zD)(u.X.VOICE_HARDWARE_MUTE_SILENCE_ALERT_SETTING, {
        useTitle: () => j.intl.string(j.t.pZ0vr4),
        useSubtitle: () => j.intl.string(j.t.tVbzoZ),
        useValue: function () {
            return (0, g.bG)([nj.Ay], () => !nj.Ay.disableHardwareMuteSilenceAlert);
        },
        setValue: function (e) {
            (0, ob.A)("hardware_mute_silence_alert_enabled", e, !nj.Ay.disableHardwareMuteSilenceAlert),
                lc.Ay.updatedUnsyncedSettings({ disableHardwareMuteSilenceAlert: !e });
        },
        usePredicate: function () {
            let { enableHardwareSilenceWarning: e } = ok.A.useConfig({ location: "HardwareMuteSilenceAlertSetting" });
            return e;
        },
    }),
    oB = (0, a.zD)(u.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => j.intl.string(j.t.DFPXIG),
        useSubtitle: () => j.intl.string(j.t["UyRX+C"]),
        useValue: function () {
            return (0, g.bG)([l3.Ay], () => l3.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            on.A.setBypassSystemInputProcessing(e);
        },
        usePredicate: function () {
            return (0, g.bG)([l3.Ay], () => l3.Ay.showBypassSystemInputProcessing() && l3.Ay.isInputProfileCustom());
        },
    }),
    oF = (0, a.zD)(u.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
        useTitle: () => j.intl.string(j.t.jrWHD3),
        useSubtitle: () => j.intl.string(j.t.YCCMkJ),
        useValue: function () {
            return (0, g.bG)([nj.Ay], () => !nj.Ay.disableVoiceChannelChangeAlert);
        },
        setValue: function (e) {
            (0, ob.A)("switch_channel_warning_enabled", e, !nj.Ay.disableVoiceChannelChangeAlert),
                lc.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e });
        },
    }),
    oz = (0, a.zD)(u.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
        useTitle: () => j.intl.string(j.t.BbESsg),
        useSubtitle: () => j.intl.string(j.t.LoOB1F),
        useValue: function () {
            return (0, g.bG)([l3.Ay], () => {
                let { vadUseKrisp: e } = l3.Ay.getModeOptions();
                return e;
            });
        },
        setValue: function (e) {
            let t = l3.Ay.getMode();
            on.A.setMode(t, { vadUseKrisp: e });
        },
        useDisabled: function () {
            return (0, g.bG)(
                [l3.Ay],
                () => l3.Ay.getMode() !== U.TBI.VOICE_ACTIVITY || !l3.Ay.getModeOptions().autoThreshold,
            );
        },
        usePredicate: function () {
            return (0, g.bG)([l3.Ay], () => l3.Ay.isAdvancedVoiceActivitySupported() && l3.Ay.isInputProfileCustom());
        },
    }),
    oX = (0, a.Hn)(u.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => j.intl.string(j.t.wVBHr0),
        useValue: function () {
            return (0, g.bG)([l3.Ay], () => l3.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            oj(j.intl.string(j.t.uY7AcQ), j.intl.string(j.t.gBqik6), () => on.A.setAudioSubsystem(e));
        },
        useOptions: function () {
            let {
                legacyAudioSubsystemSupported: e,
                experimentalAudioSubsystemSupported: t,
                automaticAudioSubsystemSupported: i,
            } = (0, g.cf)([l3.Ay], () => ({
                legacyAudioSubsystemSupported: l3.Ay.supports(a5.O5.LEGACY_AUDIO_SUBSYSTEM),
                experimentalAudioSubsystemSupported: l3.Ay.supports(a5.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
                automaticAudioSubsystemSupported: l3.Ay.supports(a5.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
            }));
            return S.useMemo(() => {
                let n;
                return (
                    (n = [{ id: a5.rB.STANDARD, value: a5.rB.STANDARD, label: j.intl.string(j.t.dqb2JZ) }]),
                    e && n.push({ id: a5.rB.LEGACY, value: a5.rB.LEGACY, label: j.intl.string(j.t["TYfH+5"]) }),
                    t &&
                        n.push({ id: a5.rB.EXPERIMENTAL, value: a5.rB.EXPERIMENTAL, label: j.intl.string(j.t.liQmtr) }),
                    i && n.push({ id: a5.rB.AUTOMATIC, value: a5.rB.AUTOMATIC, label: j.intl.string(j.t.qNgtO1) }),
                    n
                );
            }, [i, t, e]);
        },
        usePredicate: function () {
            return (0, g.bG)([l3.Ay], () => l3.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    oY = (0, a.zD)(u.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => j.intl.string(j.t.uancuJ),
        useSubtitle: () => j.intl.string(j.t.I1Eoqq),
        useValue: function () {
            return (0, g.bG)([l3.Ay], () => l3.Ay.getQoS());
        },
        setValue: function (e) {
            on.A.setQoS(e);
        },
        usePredicate: function () {
            return (0, g.bG)([l3.Ay], () => l3.Ay.supports(a5.O5.QOS));
        },
    }),
    oH = (0, a.zD)(u.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => j.intl.string(j.t["4rsOPQ"]),
        useSubtitle: () => j.intl.string(j.t.jtiiCw),
        useValue: function () {
            return (0, g.bG)([l3.Ay], () => l3.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            on.A.setSilenceWarning(e);
        },
        usePredicate: function () {
            return eY.isPlatformEmbedded;
        },
    }),
    oK = (0, a.bd)(u.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? j.intl.string(j.t.KHsSWK) : j.intl.string(j.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            sC(u.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, g.bG)([l3.Ay], () => l3.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [oP, oz, oB, oH, ow, oF, oV, oX, oY],
    }),
    oW = (0, a.zD)(u.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => j.intl.string(j.t.iWTwu6),
        useValue: function () {
            return (0, g.bG)([l3.Ay], () => l3.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            on.A.setEchoCancellation(e, { page: U.liQ.USER_SETTINGS, section: U.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, g.bG)([l3.Ay, oD.A], () => {
                let e = l3.Ay.getInputDeviceId();
                return oD.A.hasEchoCancellation(e);
            });
        },
        usePredicate: function () {
            return (0, g.bG)([l3.Ay], () => l3.Ay.isInputProfileCustom());
        },
    });
var oZ = i(459838),
    oQ = i(451988),
    oq = i(678414),
    oJ = i(266655);
let o$ = (0, sZ.Ld)();
function o0(e) {
    let { isSpeaking: t, className: i, id: n, ariaDescribedBy: s, ariaLabelledBy: l, disabled: r } = e;
    return (0, E.jsx)("div", {
        role: "meter",
        className: e6()(oq.$I, i),
        id: n,
        "aria-describedby": s,
        "aria-labelledby": l,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? j.intl.string(j.t.haLKZ0) : j.intl.string(j.t.X2hJL7),
        children: (0, E.jsx)("div", { className: e6()(oq.Jx, oq.NU, { [oq.zY]: t && !r, [oq.r9]: r }) }),
    });
}
function o1(e) {
    let { volume: t, id: i, ariaDescribedBy: n, ariaLabelledBy: s, disabled: l } = e,
        { threshold: r, autoThreshold: a } = (0, g.cf)([l3.Ay], () => ({
            threshold: l3.Ay.getModeOptions().threshold,
            autoThreshold: l3.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, g.bG)([l3.Ay], () => l3.Ay.getMode());
    return (0, E.jsx)("section", {
        className: e6()(oq.Mo, oq.jW),
        id: i,
        "aria-describedby": n,
        "aria-labelledby": s,
        children: (0, E.jsx)(nd.A, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return (t = -((100 - e) * 1)), void on.A.setMode(o, { threshold: t, autoThreshold: a });
            },
            barStyles: { background: er.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: er.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": o$,
            disabled: l,
            children: (0, E.jsxs)("div", {
                className: e6()(oq.NU, oq.TL, oq.Jx, oJ.bar),
                children: [
                    (0, E.jsx)("div", { className: e6()(oq.GS, oq.SH), style: { width: l ? 0 : t + 100 + "%" } }),
                    (0, E.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let o2 = (0, a.E2)(u.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [j.intl.string(j.t["sqUm+k"]), j.intl.string(j.t.I1Zuq0), j.intl.string(j.t.nuFtHH)],
    usePredicate: () => (0, g.bG)([l3.Ay], () => l3.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, g.cf)([l3.Ay], () => ({
                autoThreshold: l3.Ay.getModeOptions().autoThreshold,
                disabled: l3.Ay.getMode() !== a5.TB.VOICE_ACTIVITY,
            })),
            i = S.useCallback((e) => {
                let t = l3.Ay.getMode(),
                    { threshold: i } = l3.Ay.getModeOptions();
                on.A.setMode(t, { autoThreshold: e, threshold: i });
            }, []),
            n = (0, g.bG)([l3.Ay], () => l3.Ay.supports(a5.O5.AUTOMATIC_VAD)),
            { volume: s, isSpeaking: l } = (function () {
                let [e, t] = S.useState(-100),
                    [i, n] = S.useState(!1);
                function s(e, i) {
                    t(e), n((i & a5.ME.VOICE) === a5.ME.VOICE);
                }
                return (
                    S.useEffect(() => {
                        let e = new oQ.Ep();
                        return (
                            e.start(1e3, () => {
                                l3.Ay.getMediaEngine().on(oZ.bg.VoiceActivity, s), e.stop();
                            }),
                            () => {
                                l3.Ay.getMediaEngine().removeListener(oZ.bg.VoiceActivity, s), e.stop();
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: i }
                );
            })(),
            r = (0, g.bG)([l3.Ay], () => l3.Ay.isEnabled()),
            a = S.useMemo(
                () =>
                    !r &&
                    (0, E.jsx)("div", {
                        className: oq.B4,
                        children: (0, E.jsx)(Q.w, {
                            type: "warning",
                            children: j.intl.format(j.t["O13I+O"], { onEnableClick: () => on.A.enable(!0) }),
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
                      (0, E.jsx)(eo.A, { tag: "legend", id: u, children: j.intl.string(j.t.GByLar) }),
                      (0, E.jsx)(eo.A, { id: d, children: o }),
                      (0, E.jsxs)(q.B, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, E.jsx)(J.d, {
                                  disabled: t,
                                  label: j.intl.string(j.t.lY6j47),
                                  description: o,
                                  checked: e,
                                  onChange: i,
                              }),
                              e
                                  ? (0, E.jsx)(o0, {
                                        isSpeaking: l,
                                        className: oq.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, E.jsx)(o1, { volume: s, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
                              a,
                          ],
                      }),
                  ],
              })
            : (0, E.jsxs)(q.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, E.jsx)(s4.D, {
                          label: j.intl.string(j.t["sqUm+k"]),
                          description: o,
                          layout: "vertical",
                          children: (i) =>
                              e
                                  ? (0, E.jsx)(o0, {
                                        isSpeaking: l,
                                        className: oq.UJ,
                                        id: i.controlId,
                                        ariaDescribedBy: i.describedById,
                                        ariaLabelledBy: i.labelId,
                                        disabled: t,
                                    })
                                  : (0, E.jsx)(o1, {
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
var o3 = i(366010);
let o6 = i(993830),
    o4 = i(413142),
    o7 = { page: U.liQ.USER_SETTINGS, section: U.JJy.SETTINGS_VOICE_AND_VIDEO };
function o5() {
    let e = (0, g.bG)([iC.A], () => (0, o3.q)(iC.A.theme));
    return (0, E.jsx)("img", { src: e ? o6 : o4, width: 48, height: 32, alt: "" });
}
let o8 = (0, a.E2)(u.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.t8Qhib), j.intl.string(j.t.hmfkCi)],
    usePredicate: function () {
        return (0, g.bG)([l3.Ay], () => l3.Ay.isInputProfileCustom() && l3.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = S.useCallback((e) => {
                on.A.setNoiseCancellation("KRISP" === e, o7), on.A.setNoiseSuppression("STANDARD" === e, o7);
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: i,
                isNoiseSuppressionSupported: n,
                isNoiseCancellationSupported: s,
            } = (0, g.cf)([l3.Ay], () => ({
                noiseCancellation: l3.Ay.getNoiseCancellation(),
                noiseSuppression: l3.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: l3.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: l3.Ay.isNoiseCancellationSupported(),
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
                ? j.intl.format(j.t["1q5aTp"], { helpArticle: tN.A.getArticleURL(U.MVz.NOISE_SUPPRESSION) })
                : j.intl.string(j.t.OWKjw5);
        return (0, E.jsxs)(q.B, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, E.jsx)(lZ.l, {
                    label: j.intl.string(j.t.t8Qhib),
                    description: r,
                    layout: "horizontal",
                    value: t ? "KRISP" : i ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: l,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                s && (0, E.jsx)(o5, {}),
            ],
        });
    },
});
var o9 = i(934729),
    ue = i(621380);
let ut = !c.Av;
function ui() {
    return (0, g.bG)([l3.Ay], () => l3.Ay.getMode() === a5.TB.PUSH_TO_TALK);
}
let un = (0, a.zD)(u.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return c.Av ? j.intl.string(j.t.tG4Np5) : j.intl.string(j.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, g.bG)([l3.Ay], () => l3.Ay.getMode());
        return S.useMemo(() => {
            if (!c.Av && e === a5.TB.PUSH_TO_TALK)
                return j.intl.format(j.t["VHI4+Y"], { onDownloadClick: () => (0, o9._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, g.bG)([l3.Ay], () => l3.Ay.getActiveInputProfile() !== ue.m.STUDIO);
    },
    useValue: function () {
        return (0, g.bG)([l3.Ay], () => l3.Ay.getMode() === a5.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, n;
        (t = e ? a5.TB.PUSH_TO_TALK : a5.TB.VOICE_ACTIVITY),
            (n = [e1.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === a5.TB.PUSH_TO_TALK &&
                ut &&
                (0, K.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([i.e("80198"), i.e("10919")]).then(i.bind(i, 556506));
                    return (t) =>
                        (0, E.jsx)(e, {
                            title: j.intl.string(j.t.Kdt0Gb),
                            confirmText: j.intl.string(j.t["1WjMbC"]),
                            cancelText: j.intl.string(j.t.BddRzS),
                            onConfirm: () => (0, o9._)("PTT Limited Modal"),
                            body: j.intl.string(j.t.NIozvt),
                            ...t,
                        });
                }),
            on.A.setMode(t, void 0, void 0, { analyticsLocations: n });
    },
    useSearchTerms: () => [j.intl.string(j.t["pS+K2L"]), j.intl.string(j.t.nuFtHH)],
});
var us = i(93172);
let ul = (0, a.E2)(u.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["pS+K2L"]), j.intl.string(j.t.nuFtHH)],
        usePredicate: ui,
        Component: function () {
            let e = (0, g.bG)([l3.Ay], () => {
                    let { shortcut: e } = l3.Ay.getModeOptions();
                    return e;
                }),
                t = j.intl.format(j.t.HVvn5T, { onClick: () => (0, eH.openUserSettings)(u.X.KEYBINDS_PANEL) });
            return (0, E.jsx)(s4.D, {
                label: j.intl.string(j.t["o+BJQR"]),
                description: t,
                layout: "horizontal-responsive",
                children: (0, E.jsx)("div", {
                    className: us.e,
                    children: (0, E.jsx)(tY.A, {
                        defaultValue: e,
                        onChange: (e) => on.A.setMode(U.TBI.PUSH_TO_TALK, { shortcut: e }),
                    }),
                }),
            });
        },
    }),
    ur = (0, a.sN)(u.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => j.intl.string(j.t.GCNMM8),
        useSearchTerms: () => [j.intl.string(j.t["pS+K2L"]), j.intl.string(j.t.nuFtHH)],
        setValue: function (e) {
            on.A.setMode(U.TBI.PUSH_TO_TALK, { delay: e });
        },
        minValue: 0,
        maxValue: U.IjB,
        getInitialValue: function () {
            let { delay: e } = l3.Ay.getModeOptions();
            return e;
        },
        onValueRender: function (e) {
            return e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}\u00A0ms`;
        },
        usePredicate: ui,
    }),
    ua = (0, a.Qx)(u.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => j.intl.string(j.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, oL._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [j.intl.string(j.t.nuFtHH), j.intl.string(j.t.VZPR0R), j.intl.string(j.t.cjPbpT)],
        useValue: function () {
            return (0, g.bG)([l3.Ay], () => l3.Ay.getActiveInputProfile() ?? ue.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [e1.A.USER_SETTINGS_VOICE_AND_VIDEO];
            on.A.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, oL.d)({ location: "InputProfileCategory" });
            return [
                { value: ue.m.VOICE_ISOLATION, name: j.intl.string(j.t.cjPbpT), desc: j.intl.string(j.t.CzhvnE) },
                { value: ue.m.STUDIO, name: j.intl.string(j.t.VZPR0R), desc: j.intl.string(j.t.ZaJksS) },
                { value: ue.m.CUSTOM, name: j.intl.string(j.t["N/PQjv"]), desc: j.intl.string(j.t.SnBmuY) },
            ].filter((t) => {
                let { value: i } = t;
                return e.includes(i);
            });
        },
    }),
    uo = (0, a.zZ)(u.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, g.bG)([oD.A, l3.Ay], () => {
                let e = l3.Ay.getInputDeviceId();
                return (
                    (oD.A.hasEchoCancellation(e) || oD.A.hasNoiseSuppression(e) || oD.A.hasAutomaticGainControl(e)) &&
                    l3.Ay.isInputProfileCustom()
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
        buildLayout: () => [ua, o2, o8, oW, un, ul, ur, oK],
    });
var uu = i(403581),
    ud = i(983851),
    uc = i(687021),
    ug = i(128450),
    um = i(796774),
    uA = i(209932),
    uh = i(813564),
    uE = i(984813),
    uS = i(22231),
    uT = i(428262),
    ux = i(792348),
    up = i(674168),
    uf = i(277192),
    uN = i(805945),
    u_ = i(820988);
function uI(e) {
    let { onSelect: t } = e,
        [i, n] = S.useState(!1),
        s = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
        l = uT.Ay.canUseCustomCallSounds(s),
        r = S.useRef(null);
    function a(e) {
        l && (n(!1), t?.(e));
    }
    return (0, E.jsx)(ee.Y, {
        targetElementRef: r,
        shouldShow: i,
        position: "left",
        onRequestClose: () => n(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, E.jsx)(iz.l, {
                children: (0, E.jsx)(uf.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: l ? null : (0, E.jsx)(up.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, E.jsx)(uN.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    n(!i);
                },
                text: j.intl.string(j.t.uOe0Az),
                children: (0, E.jsx)(uS.R, { size: "md", color: "currentColor", className: u_.Wo }),
            }),
    });
}
function uC(e) {
    let { sound: t } = e,
        { previewSound: i } = (0, ux.A)(t, null),
        n =
            0 === (0, uh.wH)()
                ? j.intl.string(j.t.OASXjt)
                : j.intl.formatToPlainString(j.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, E.jsx)(uN.dT, {
        onClick: i,
        text: n,
        children: (0, E.jsx)(ud.H, { size: "md", color: "currentColor", className: u_.wg }),
    });
}
function ub(e) {
    let { sound: t, isGlobal: i, onSelect: n } = e,
        s = null != t,
        l = t?.emojiId,
        r = t?.emojiName,
        a = s && (null != r || null != l);
    return (0, E.jsxs)("div", {
        className: u_.D6,
        children: [
            (0, E.jsxs)("div", {
                className: u_.kL,
                children: [
                    a && (0, E.jsx)(sV.A, { emojiId: l, emojiName: r, className: u_.Zg }),
                    (0, E.jsx)(es.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        className: u_.dj,
                        children:
                            null == t
                                ? j.intl.string(j.t.PoWNfe)
                                : i
                                  ? j.intl.format(j.t.B6HU6O, {
                                        soundName: t.name,
                                        subtextHook: function (e) {
                                            return (0, E.jsx)(es.E, {
                                                variant: "text-xs/medium",
                                                color: "text-default",
                                                tag: "span",
                                                children: e,
                                            });
                                        },
                                    })
                                  : t.name,
                    }),
                    s
                        ? (0, E.jsx)(uC, { sound: t })
                        : (0, E.jsx)(ud.H, { size: "md", color: "currentColor", className: u_.Gk }),
                ],
            }),
            (0, E.jsxs)("div", {
                className: u_.kL,
                children: [
                    (0, E.jsx)(uI, { onSelect: n }),
                    s &&
                        !i &&
                        (0, E.jsx)(uN.dT, {
                            onClick: () => n(null),
                            text: j.intl.string(j.t.jmtcGA),
                            children: (0, E.jsx)(lq.u, {
                                size: "md",
                                color: er.A.unsafe_rawColors.RED_400.css,
                                className: u_.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var uy = i(617617);
i(980504);
var uv = i(221087);
function uj(e) {
    return (0, g.bG)([uA.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: i } = e;
        return uA.A.getSound("0" === t ? "0" : t, i);
    });
}
function uO(e) {
    let { guildId: t } = e,
        i = (0, g.bG)([uy.A], () => uy.A.settings.guilds?.guilds?.[t]?.joinSound),
        n = uj(i);
    if (null == i || null == n) return null;
    let { emojiId: s, emojiName: l } = n,
        r = null != s || null != l;
    return (0, E.jsxs)("div", {
        className: uv.Io,
        children: [
            r
                ? (0, E.jsx)(sV.A, { emojiId: s, emojiName: l, className: uv.nW })
                : (0, E.jsx)(ud.H, { size: "md", color: "currentColor", className: uv.nW }),
            (0, E.jsx)(es.E, { className: uv.dK, variant: "text-xs/medium", children: n.name }),
        ],
    });
}
let uR = (0, a.E2)(u.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, nZ.Ay)(),
            [t, i] = S.useState("0"),
            n = (0, uE.mz)(t),
            s = uj(n),
            l = n?.type === uE.PP.GLOBAL,
            r = (0, g.bG)([uA.A], () => uA.A.hasFetchedAllSounds()) && null != n && null == s;
        S.useEffect(() => {
            r && (0, uh.ND)({ location: e });
        }, [r, e]),
            S.useEffect(() => {
                (0, um.E7)();
            }, []);
        let a = S.useCallback((e, t) => {
            let { inDropdown: i } = t;
            return null == e ? null : i ? (0, E.jsx)(uO, { guildId: e.value }) : null;
        }, []);
        return (0, E.jsxs)(i_.n, {
            label: j.intl.string(j.t.nzUc3B),
            description: j.intl.format(j.t.u9RWmv, { helpdeskArticle: tN.A.getArticleURL(U.MVz.SOUNDBOARD) }),
            children: [
                (0, E.jsx)(uc.A, {
                    guildId: t,
                    className: uv.Dt,
                    globalOption: { label: j.intl.string(j.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        i(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, E.jsxs)(ug.A, {
                    title: j.intl.format(j.t.I2TsYN, {
                        nitroWheelHook: () => (0, E.jsx)(uu.t, { size: "md", color: "currentColor", className: uv.ax }),
                    }),
                    children: [
                        (0, E.jsx)(ub, {
                            sound: s,
                            isGlobal: l,
                            onSelect: (i) => {
                                null == i ? (0, uh.Dv)(t, e) : (0, uh.un)(t, i, e);
                            },
                        }),
                        r &&
                            (0, E.jsx)(tf.p, {
                                className: uv.lm,
                                messageType: tf.Y.WARNING,
                                children: j.intl.string(j.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        });
    },
});
var uD = i(824744);
let uL = (0, a.sN)(u.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => j.intl.string(j.t.kbFsAD),
    useSubtitle: () => j.intl.format(j.t.BPbGq7, { helpCenterArticle: tN.A.getArticleURL(U.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [e1.A.USER_SETTINGS_VOICE_AND_VIDEO],
            i = (0, uD.w)(e);
        (0, um.iy)(i, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, uh.wH)();
        return (0, uD.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var uP = i(864145);
let uG = (0, a.sN)(u.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => j.intl.string(j.t["2JbvKw"]),
        useSubtitle: () => j.intl.string(j.t.INenzY),
        setValue: function (e) {
            let t = (0, uD.w)(e);
            D.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = D.HO.getSetting();
            return (0, uD.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, uP.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    uM = (0, a.zZ)(u.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => j.intl.string(j.t.ABjMWI),
        buildLayout: () => [uL, uG, uR],
    });
var uU = i(803224),
    uV = i(552122);
let uk = (0, a.E2)(u.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [j.intl.string(j.t.fgSHf8)],
        usePredicate: () => null != uV.A.useHolidaySoundpack(),
        Component: () =>
            (0, E.jsx)(es.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: j.intl.format(j.t.Eup6Wv, {
                    onClick: () => (0, eH.openUserSettings)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    uw = (0, a.AK)(u.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.eyGEE4),
        useSearchTerms: () => [j.intl.string(j.t.eyGEE4)],
        destinationKey: u.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    uB = (0, a.gN)(u.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [uw] });
var uF = i(264686);
let uz = (0, nP.D)(() => ({ currentPlayingSound: null }));
function uX() {
    let e = uz.getField("currentPlayingSound");
    e?.stop(), uz.setState({ currentPlayingSound: null });
}
function uY(e) {
    let t = uz.getField("currentPlayingSound");
    t?.stop();
    let i = (0, rQ.Ak)(e);
    uz.setState({ currentPlayingSound: i });
}
function uH(e) {
    return (0, a.zD)(`${u.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => j.intl.format(j.t.OOiGCM, { onClick: () => uY(e.sound) }),
        useSearchTerms: e.useSearchTerms,
        useValue: () => {
            let t = (0, g.bG)([uU.A], () => uU.A.isSoundDisabled(e.sound)),
                i = e.useDisabled?.();
            return !t && !i;
        },
        setValue: (t) => {
            let i = uU.A.getDisabledSounds().filter((t) => t !== e.sound);
            t || i.push(e.sound), uF.default.setDisabledSounds(i);
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                i = (0, g.bG)([uU.A], () => uU.A.getDisableAllSounds());
            return t || i;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let uK = [
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
    uW = (0, a.D1)(u.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? j.intl.formatToPlainString(j.t["0JYT98"], { count: t })
                : j.intl.formatToPlainString(j.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => sC(u.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                uX();
            };
        },
        buildLayout: () => uK.map((e) => uH(e)),
    }),
    uZ = (0, a.zZ)(u.X.SOUNDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, g.bG)([uU.A], () => uU.A.getDisableAllSounds());
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
        buildLayout: () => [uW, uk, uB],
    }),
    uQ = (0, a.zD)(u.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => j.intl.string(j.t.e3Zz3F),
        useSubtitle: () => j.intl.string(j.t.RztTjP),
        useValue: function () {
            return !D.uh.useSetting();
        },
        setValue: function (e) {
            (0, ob.A)("stream_previews_disabled", !e, D.uh.getSetting(), [e1.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                D.uh.updateSetting(!e);
        },
    }),
    uq = (0, a.zD)(u.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => j.intl.string(j.t.GmWk2E),
        useSearchTerms: () => [j.intl.string(j.t["Fj/xn1"])],
        useSubtitle: () => j.intl.string(j.t["Fj/xn1"]),
        useValue: function () {
            return (0, g.bG)([l3.Ay], () => l3.Ay.getVideoHook());
        },
        setValue: on.A.setVideoHook,
        usePredicate: function () {
            return (0, g.bG)([l3.Ay], () => l3.Ay.supportsVideoHook());
        },
    }),
    uJ = (0, a.zD)(u.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => j.intl.string(j.t["4I0qzZ"]),
        useValue: function () {
            return (0, g.bG)([l3.Ay], () => l3.Ay.getExperimentalSoundshare());
        },
        setValue: on.A.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, g.bG)([l3.Ay], () => {
                let e = l3.Ay.supportsExperimentalSoundshare(),
                    t = l3.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    u$ = (0, a.zD)(u.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => j.intl.string(j.t["/jwMtn"]),
        useSubtitle: () => j.intl.string(j.t.zlA23F),
        useValue: function () {
            return (0, g.bG)([l3.Ay], () => l3.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [e1.A.USER_SETTINGS_VOICE_AND_VIDEO];
            on.A.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return l3.Ay.supports(a5.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    u0 = (0, a.sN)(u.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => j.intl.string(j.t.fhEzfj),
        setValue: function (e) {
            let t = [e1.A.USER_SETTINGS_VOICE_AND_VIDEO];
            on.A.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: l3.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            let e = (0, g.bG)([l3.Ay], () => l3.Ay.getSidechainCompression());
            return l3.Ay.supports(a5.O5.SIDECHAIN_COMPRESSION) && e;
        },
    }),
    u1 = (0, a.zD)(u.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
        useTitle: () => j.intl.string(j.t.lt8rRx),
        useSubtitle: () => j.intl.string(j.t.ie1mgY),
        useValue: function () {
            return (0, g.bG)([l3.Ay], () => l3.Ay.getUseSystemScreensharePicker());
        },
        setValue: function (e) {
            (0, c.cX)() && e
                ? (0, sg.A)({
                      title: j.intl.string(j.t["9jf31O"]),
                      subtitle: j.intl.string(j.t.uBd6JW),
                      variant: "primary",
                      onConfirm: () => {
                          on.A.setUseSystemScreensharePicker(e), lN.A.app.relaunch();
                      },
                      confirmText: j.intl.string(j.t.BddRzS),
                  })
                : on.A.setUseSystemScreensharePicker(e);
        },
        usePredicate: function () {
            return (0, g.bG)([l3.Ay], () => l3.Ay.supportsSystemScreensharePicker() && (0, c.cX)());
        },
    }),
    u2 = (0, a.bd)(u.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? j.intl.string(j.t.qrMyvm) : j.intl.string(j.t.LEtTNl)),
        useCollapsedSubtitle: () => sC(u.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [u$, u0, u1, uJ, uq],
    }),
    u3 = (0, a.zZ)(u.X.STREAMING_CATEGORY, { useTitle: () => j.intl.string(j.t.KDdjou), buildLayout: () => [uQ, u2] });
var u6 = i(106713);
let u4 = (0, a.E2)(u.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = u6.A.useConfig({ location: "MicrophoneInputSelect" });
            return (0, E.jsx)(a3.U, {
                label: j.intl.string(j.t.UTM8VP),
                deviceType: a5.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    u7 = (0, a.E2)(u.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = u6.A.useConfig({ location: "SpeakerOutputSelect" });
            return (0, E.jsx)(a3.U, {
                label: j.intl.string(j.t.xuYQ0n),
                deviceType: a5.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    u5 = (0, a.zC)(u.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [u4, u7] }),
    u8 = (0, a.sN)(u.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => j.intl.string(j.t.Rtsr6w),
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = l3.Ay.getInputVolume();
            return (0, uD.M)(e);
        },
        asValueChanges: function (e) {
            let t = [e1.A.USER_SETTINGS_VOICE_AND_VIDEO],
                i = (0, uD.w)(e);
            on.A.setInputVolume(i, { analyticsLocations: t });
        },
    }),
    u9 = (0, a.sN)(u.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => j.intl.string(j.t.aUJ062),
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = l3.Ay.getOutputVolume();
            return (0, uD.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [e1.A.USER_SETTINGS_VOICE_AND_VIDEO],
                i = (0, uD.w)(e);
            on.A.setOutputVolume(i, { analyticsLocations: t });
        },
    }),
    de = (0, a.zC)(u.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [u8, u9] });
var dt = i(702841),
    di = i(349288),
    dn = i(152567),
    ds = i(606026);
let dl = `${tN.A.getArticleURL(U.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    dr = (0, a.E2)(u.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.nuFtHH)],
        usePredicate: function () {
            return (0, dt.bG)([l3.Ay], () => l3.Ay.supports(a5.O5.LOOPBACK));
        },
        Component: function () {
            return (0, dt.bG)([l3.Ay], () => l3.Ay.supports(a5.O5.LOOPBACK))
                ? (0, E.jsx)(dn.A, {
                      size: "md",
                      notchBackground: dn.V.GRAY,
                      captionVoice: j.intl.string(j.t.bp3JOV),
                      captionNoVoice: (0, E.jsxs)(E.Fragment, {
                          children: [
                              (0, E.jsx)(es.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-default",
                                  children: j.intl.string(j.t.bgn75v),
                              }),
                              j.intl.string(j.t["MA+OZh"]),
                              (0, E.jsx)(di.Anchor, {
                                  className: ds.X,
                                  href: tN.A.getArticleURL(U.MVz.NO_INPUT_DETECTED),
                                  children: j.intl.string(j.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: j.intl.format(j.t["V+B3FH"], { guideURL: dl }),
                      buttonTest: j.intl.string(j.t.gyljWE),
                      buttonStop: j.intl.string(j.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: U.liQ.USER_SETTINGS, section: U.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    da = eY.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function du(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: i } = e;
    return (0, E.jsxs)(q.B, {
        children: [
            i && (0, E.jsx)(l5, { sourcePage: "voice" }),
            t && (0, E.jsx)(sA.A, { look: sA.k.WARNING, children: j.intl.string(j.t.Ioz3gx) }),
        ],
    });
}
let dd = (0, a.zZ)(u.X.VOICE_CATEGORY, {
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
            let e = l7("voice"),
                t = (0, a6.x5)(a5.oh.AUDIO_INPUT),
                i = (0, a6.x5)(a5.oh.AUDIO_OUTPUT),
                n = S.useMemo(() => {
                    let e = da.some((e) => t?.hardwareId?.startsWith(e)),
                        n = da.some((e) => i?.hardwareId?.startsWith(e));
                    return e && n && t?.containerId != null && t.containerId === i?.containerId;
                }, [t, i]);
            return S.useMemo(
                () =>
                    e.canPrompt || n
                        ? {
                              type: h.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, E.jsx)(du, {
                                      inputAndOutputAreBluetooth: n,
                                      canPromptSystemServiceInstallForVoice: e.canPrompt,
                                  }),
                          }
                        : null,
                [e.canPrompt, n],
            );
        },
        buildLayout: () => [u5, de, dr],
    }),
    dc = (0, a.t_)(u.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => j.intl.string(j.t.B1fFpf),
        buildLayout: () => [dd, uo, oi, u3, uZ, uM, oR],
    }),
    dg = (0, a.i4)(u.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.B1fFpf),
        usePredicate: () => l3.Ay.isSupported(),
        icon: aK.c,
        useMenu: aW.A,
        buildLayout: () => [dc],
    }),
    dm = (0, a.zZ)(u.X.WINDOWS_CATEGORY, {
        buildLayout: () => [rU, av, rV, rF],
        initialize: () => {
            rM();
        },
    }),
    dA = (0, a.t_)(u.X.WINDOWS_PANEL, { useTitle: () => j.intl.string(j.t.ZkDZov), buildLayout: () => [dm] }),
    dh = (0, a.i4)(u.X.WINDOWS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.ZkDZov),
        icon: to.k,
        usePredicate: () => eY.isPlatformEmbedded && (0, eY.isWindows)(),
        buildLayout: () => [dA],
    }),
    dE = (0, a.WI)(u.X.APP_SECTION, {
        useTitle: () => j.intl.string(j.t.gcyH1J),
        buildLayout: function () {
            let e = (0, o.SB)("AppSection_buildLayout");
            return [dg, lK, ss, ab, e ? aH : rO, rP, e ? null : dh, e ? null : rY].filter(N.Vq);
        },
    });
var dS = i(360669),
    dT = i(974544),
    dx = i(423764),
    dp = i(289873),
    df = i(835245),
    dN = i(465323),
    d_ = i(37766),
    dI = i(194261),
    dC = i(391048),
    db = i(277984),
    dy = i(99696),
    dv = i(202613),
    dj = i(615405),
    dO = i(580630),
    dR = i(83617),
    dD = i(935208),
    dL = i(607399),
    dP = i(150934),
    dG = i(256006),
    dM = i(198970),
    dU = i(71532);
let dV = /[^0-9/]/g,
    dk = /[^0-9]/g;
class dw extends S.PureComponent {
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
                ((n = (i = e.replace(dV, "").split("/"))[0]),
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
            ? (u = u.replace(dk, ""))
            : u === r && e.includes("/") && !r.includes("/") && (u += "/"),
            u.length > e.length && (d += u.length - e.length),
            (this.selectionStart = d),
            null != a && a(u, t);
    };
    render() {
        return (0, E.jsx)(l9.k, {
            ...this.props,
            inputMode: "numeric",
            onChange: this.handleChange,
            inputRef: this.setRef,
        });
    }
}
var dB = i(832208),
    dF = i(863991);
let dz = [
        {
            fields: [
                {
                    expirationDate: {
                        name: "expirationDate",
                        id: (0, sZ.Ld)(),
                        title: () => j.intl.string(j.t["CeBa/4"]),
                        autoComplete: "cc-exp",
                        placeholder: () => j.intl.string(j.t.xeEWQ6),
                        pattern: "\\d*",
                        getClassNameForLayout: () => dF.ep,
                        renderInput: (e) => (0, E.jsx)(dw, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    dX = function (e) {
        let { onCardInfoChange: t, className: i, expirationDate: n, error: s } = e,
            [l, r] = S.useState(!1),
            [a, o] = S.useState(null),
            [u, d] = S.useState(n);
        return (
            S.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, E.jsx)(dB.A, {
                className: i,
                form: dz,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: s,
                onFieldChange: function (e) {
                    l || "" === e || r(!0),
                        (l && "" === e) || !(0, dU.So)(e) ? o(j.intl.string(j.t["9/zZdl"])) : o(null),
                        d(e);
                },
            })
        );
    };
var dY = i(219887),
    dH = i(533741);
let dK = "isDefault";
class dW extends S.PureComponent {
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
            expiresMonth: t instanceof dv.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof dv.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: i,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        sa.h.wait(() => {
            (0, db.ey)(), (0, db.tc)();
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
                      className: dH.zc,
                      children: (0, E.jsx)(Q.w, { type: "critical", children: t.message }),
                  })
                : null
            : (0, E.jsx)("div", {
                  className: dH.zc,
                  children: (0, E.jsx)(Q.w, { type: "critical", children: e.message }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: i } = this.props,
            n = (0, dG.g)(i);
        return (0, E.jsxs)("div", {
            className: dH.yV,
            children: [
                (0, E.jsx)(es.E, {
                    className: dH.bV,
                    variant: "text-sm/normal",
                    children: j.intl.string(j.t["50Auo2"]),
                }),
                (0, E.jsx)(dM.Ay, {
                    ...e,
                    mode: dM.Ay.Modes.EDIT,
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
            className: dH.yV,
            children: [
                (0, E.jsx)(es.E, { className: dH.bV, variant: "text-sm/normal", children: j.intl.string(j.t.Fo2YP7) }),
                (0, E.jsx)(dX, {
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
            className: dH.AU,
            children: (0, E.jsxs)(q.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, E.jsx)(ou.e, {
                        children: (0, E.jsxs)("div", {
                            className: dH.lH,
                            children: [
                                i
                                    ? (0, E.jsx)(tr.m, {
                                          text: j.intl.string(j.t["v6/z28"]),
                                          children: (0, E.jsx)("div", { "aria-hidden": !0, className: dH.dm }),
                                      })
                                    : null,
                                (0, E.jsx)(eG.$, {
                                    type: "button",
                                    disabled: i || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: dL.Fr ? "sm" : "md",
                                    text: dL.Fr ? j.intl.string(j.t.oyYWHE) : j.intl.string(j.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, E.jsxs)(ou.e, {
                        children: [
                            (0, E.jsx)(eG.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: dL.Fr ? "sm" : "md",
                                text: j.intl.string(j.t["ETE/oC"]),
                            }),
                            (0, E.jsx)(eG.$, {
                                loading: e,
                                disabled: !n || t || !s,
                                type: "submit",
                                variant: "active",
                                size: dL.Fr ? "sm" : "md",
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
            r = e instanceof dv.SJ;
        return (0, E.jsx)(eb.Z, {
            editable: !0,
            className: e6()(dH.Nr, n),
            children: (0, E.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, E.jsxs)("div", {
                        className: dH.__invalid_paymentSection,
                        children: [
                            (0, E.jsx)(dY.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: s,
                                locale: i,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, E.jsx)("div", { className: dH.Um, children: j.intl.string(j.t["3R0U0b"]) })
                                : null,
                            (0, E.jsx)("div", {
                                className: dH.Sv,
                                children: r
                                    ? j.intl.format(j.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : j.intl.string(j.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, E.jsx)("div", {
                        className: dH.D5,
                        children: (0, E.jsx)(dP.S, {
                            value: dK,
                            checked: l,
                            onChange: (e) => this.handleFieldChange(e, dK),
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
let dZ = g.Ay.connectStores([dj.A], () => ({ updateError: dj.A.editSourceError, removeError: dj.A.removeSourceError }))(
    dW,
);
var dQ = i(743292),
    dq = i(744798),
    dJ = i(73178);
function d$() {
    (0, dy.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page", loadId: (0, df.A)() });
}
class d0 extends S.PureComponent {
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
            ? (0, E.jsx)(dZ, {
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
                      n ? null : (0, E.jsx)(eM.c, { className: dJ.__invalid_sourceDivider }),
                      (0, E.jsxs)("div", {
                          className: dJ.Yb,
                          children: [
                              (0, E.jsx)(dY.A, {
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
let d1 = S.memo(function (e) {
    let { paymentSource: t, hideDivider: i, isForSubscription: n, locale: s, onRedeemClick: l } = e,
        [r, a] = S.useState(null),
        o = (0, g.bG)([io.default], () => io.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, g.bG)([dj.A], () => dj.A.ipCountryCode),
        d = S.useMemo(() => (0, dN.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        S.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : db.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, E.jsxs)(E.Fragment, {
            children: [
                i ? null : (0, E.jsx)(eM.c, { className: dJ.__invalid_sourceDivider }),
                (0, E.jsxs)("div", {
                    className: dJ.Yb,
                    children: [
                        void 0 !== t
                            ? (0, E.jsx)(dY.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: n,
                                  locale: s,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, E.jsxs)(rn.A, {
                                  align: rn.A.Align.CENTER,
                                  children: [
                                      (0, E.jsx)(d_._, { size: "lg" }),
                                      (0, E.jsx)(es.E, {
                                          variant: "text-sm/medium",
                                          className: dq.Wi,
                                          children: j.intl.string(dQ.default["/FQWfA"]),
                                      }),
                                  ],
                              }),
                        (0, E.jsxs)("div", {
                            className: dJ.zy,
                            children: [
                                (0, E.jsx)("div", {
                                    className: dJ.Tq,
                                    children:
                                        null == r
                                            ? (0, E.jsx)(dp.y, { type: dp.y.Type.SPINNING_CIRCLE })
                                            : (0, E.jsx)(es.E, {
                                                  variant: "text-sm/medium",
                                                  children: (function () {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          i = t ?? d,
                                                          n = String(i).toUpperCase(),
                                                          s = (0, dO.$g)(e ?? 0, i, {
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
                                    text: j.intl.string(dQ.default.hnRau6),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class d2 extends S.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            await db.Gr(e), this.setState({ editingPayment: e });
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            await db.JQ(e), this.setState({ editingPayment: null });
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                await db.Ps(e, t), this.setState({ editingPayment: null });
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, dR.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, K.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 362111));
                return (t) => (0, E.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, dC.ET)();
                },
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, E.jsxs)("div", {
            className: dJ.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, E.jsxs)("div", {
                          className: dJ.z8,
                          children: [
                              (0, E.jsx)(es.E, { variant: "text-sm/normal", children: j.intl.string(j.t.aRHpAB) }),
                              (0, E.jsx)(es.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: dJ.Sv,
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
                .sort((e, t) => (e.id === i ? -1 : t.id === i ? 1 : dD.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof dv.LQ)),
            c = u.filter((e) => e instanceof dv.LQ),
            g = this.state.editingPayment,
            m = d.findIndex((e) => e.id === g),
            A = d.map((e, t) =>
                (0, E.jsx)(
                    d0,
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
                              d1,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || m === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: s,
                                  onRedeemClick: d$,
                              },
                              e.id,
                          ),
                      )
                    : (0, E.jsx)(d1, {
                          hideDivider: 0 === d.length || m === d.length - 1,
                          isForSubscription: !1,
                          locale: s,
                          onRedeemClick: d$,
                      })),
            (0, E.jsxs)(E.Fragment, {
                children: [
                    t
                        ? (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsxs)(eP.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, E.jsx)(dI.X, { size: "sm", className: dJ.hz }),
                                          " ",
                                          j.intl.string(j.t.W26xGQ),
                                      ],
                                  }),
                                  (0, E.jsx)(es.E, {
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
var d3 = i(459357),
    d6 = i(295405),
    d4 = i(166403),
    d7 = i(773669),
    d5 = i(364676);
function d8() {
    let e = (0, g.bG)([io.default], () => io.default.getCurrentUser()?.storeCountry);
    return e?.country == null ? null : { country: e.country, countryName: (0, dx.Gw)(e.country) };
}
let d9 = (0, a.E2)(u.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                i = (0, g.bG)([dj.A], () => dj.A.isSyncing),
                n = (0, g.bG)([d6.A], () => d6.A.paymentSources),
                s = (0, g.bG)([d6.A], () => d6.A.defaultPaymentSourceId),
                l = (0, g.bG)([d7.default], () => d7.default.locale),
                r = (0, g.bG)([d4.A], () => d4.A.getPremiumTypeSubscription()),
                a = (0, g.bG)([dj.A], () => dj.A.isRemovingPaymentSource),
                o = (0, g.bG)([dj.A], () => dj.A.isUpdatingPaymentSource),
                { enabled: u } = (0, d3.c)({ location: "UserSettingsBilling" });
            return (S.useEffect(() => {
                db.$o(), db.hP();
            }, []),
            i && 0 === Object.keys(n).length)
                ? (0, E.jsx)("div", { className: d5.o, children: (0, E.jsx)(dp.y, {}) })
                : (0, E.jsx)(d2, {
                      showHeader: t,
                      paymentSources: n,
                      defaultPaymentSourceId: s,
                      premiumSubscriptionPaymentSourceId:
                          null != r && r.status !== U.Dmq.CANCELED ? r.paymentSourceId : null,
                      locale: l,
                      removing: a,
                      submitting: o,
                      showGiftCards: u,
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t.W26xGQ), j.intl.string(j.t["3pIjBH"])],
    }),
    ce = (0, a.zZ)(u.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.W26xGQ),
        useSubtitle: () => {
            let e = d8();
            return null != e ? j.intl.format(j.t.e2t1G5, { country: e.countryName }) : j.intl.string(j.t.h6V3uK);
        },
        useSubtitleDecoration: function () {
            return null == d8()
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
        buildLayout: () => [d9],
    });
var ct = i(817820),
    ci = i(545075);
let cn = (0, a.E2)(u.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            let e = (0, g.bG)([d7.default], () => d7.default.locale);
            return (0, E.jsxs)(E.Fragment, { children: [(0, E.jsx)(ci.kb, {}), (0, E.jsx)(ct.A, { locale: e })] });
        },
        useSearchTerms: () => [j.intl.string(j.t.obLrcK)],
    }),
    cs = (0, a.zZ)(u.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => j.intl.string(j.t.obLrcK),
        buildLayout: () => [cn],
    }),
    cl = (0, a.t_)(u.X.BILLING_PANEL, {
        useTitle: () => j.intl.string(j.t.oeUm2s),
        buildLayout: () => [ce, cs],
        useObscuredNotice: dT.L,
    }),
    cr = (0, a.i4)(u.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.oeUm2s),
        icon: dS.B,
        buildLayout: () => [cl],
    });
var ca = i(597770),
    co = i(962644),
    cu = i(35587),
    cd = i(86379);
let cc = (0, a.E2)(u.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: ci.uK,
        usePredicate: () => (0, cd.Hp)(),
        useSearchTerms: () => [j.intl.string(j.t.vwMEHS)],
    }),
    cg = (0, a.zZ)(u.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [cc] });
var cm = i(532446),
    cA = i(869038),
    ch = i(499454),
    cE = i(45938);
class cS extends S.Component {
    state = { codeInput: "", submitting: !1, hasError: !1, isPromoCode: !1 };
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return { ...e, object: U.ZSU.BUTTON_CTA };
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
                    await (0, dy.Qp)(i),
                        (0, dy.HF)({
                            initialCode: i,
                            withRedemptionSuccessModal: !0,
                            source: "user_settings_gift_code_redemption",
                            loadId: (0, df.A)(),
                        }),
                        this.setState({ codeInput: "" });
                    return;
                } catch {}
            let e = (0, cE.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let n = await cA.A.resolveGiftCode(e);
            if (null != n && null != n.giftCode.promotion)
                throw (this.setState({ isPromoCode: !0 }), Error("Cannnot redeem promotion code as gift"));
            G.default.track(U.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: {
                    ...this.analyticsLocation,
                    section: U.JJy.LIBRARY_INVENTORY_CODE_REDEMPTION,
                    object: U.ZSU.BUTTON_CTA,
                },
            }),
                (0, ch.h)({ processedCode: e }),
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
                children: (0, E.jsxs)(cm.M, {
                    children: [
                        (0, E.jsx)(l9.k, {
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
function cT(e) {
    let { redesign: t = !1 } = e,
        { enabled: i } = (0, d3.c)({ location: "UserSettingsBilling" }),
        n = S.useContext(G.AnalyticsContext),
        s = (0, g.bG)([eB.A], () => eB.A.enabled);
    return (0, E.jsx)(cS, { analyticsContext: n, obscureInput: s, acceptGiftCardRedemption: i, redesign: t });
}
let cx = (0, a.E2)(u.X.GIFT_CODE_REDEMPTION_SETTING, {
    Component: cT,
    usePredicate: () => !(0, cd.Hp)(),
    useSearchTerms: () => [j.intl.string(j.t["jcSP+g"]), j.intl.string(j.t["il+VCo"])],
});
var cp = i(725570),
    cf = i(707554),
    cN = i(736653),
    c_ = i(46054);
let cI = r4().duration(30, "days");
var cC = i(3074),
    cb = i(264779),
    cy = i(416052),
    cv = i(879830);
function cj(e) {
    let { onClose: t, transitionState: i } = e;
    return (0, E.jsx)(l8.Modal, {
        title: "",
        size: "md",
        input: (0, E.jsx)("div", { className: cv.aR }),
        onClose: async () => await t(),
        actions: [{ text: j.intl.string(j.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: i,
        children: (0, E.jsxs)("div", {
            className: cv.t4,
            children: [
                (0, E.jsx)(eP.D, { variant: "heading-xl/semibold", children: j.intl.string(j.t.iufib1) }),
                (0, E.jsx)(es.E, { variant: "text-md/normal", className: cv.G3, children: j.intl.string(j.t.eAn6z2) }),
            ],
        }),
    });
}
let cO = function (e) {
    let { onClose: t, onClaim: i, code: n, outboundPromotion: s, transitionState: l } = e,
        [r, a] = S.useState(null),
        o = (0, sZ.GV)(),
        { analyticsLocations: u } = (0, nZ.Ay)(e1.A.USER_SETTINGS_GIFT_INVENTORY);
    return (S.useEffect(() => {
        null == n &&
            (0, cb.kd)({
                promotionId: s.id,
                promotionTitle: s.outboundTitle,
                partnerId: s.partnerId,
                analyticsLocations: u,
            })
                .then((e) => i(e))
                .catch((e) => a(e?.body?.code));
    }, [n, s.id, s.outboundTitle, s.partnerId, i, u]),
    null != r)
        ? (0, E.jsx)(cj, { onClose: t, transitionState: l })
        : null == n
          ? (0, E.jsx)(dp.y, { className: cv.Lq })
          : (0, E.jsx)(l8.Modal, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, E.jsxs)("div", {
                    className: cv.N1,
                    children: [
                        (0, E.jsx)("div", { className: cv.Qw }),
                        (0, E.jsx)(eP.D, { variant: "heading-xl/semibold", children: j.intl.string(j.t["23BfZh"]) }),
                        (0, E.jsx)(es.E, {
                            variant: "text-md/normal",
                            className: cv.G3,
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
                            let e = (0, cb.kc)(n, s);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: l,
                "aria-label": o,
                children: (0, E.jsxs)("div", {
                    children: [
                        (0, E.jsx)(eM.c, { className: cv.M5 }),
                        (0, E.jsx)(s4.D, {
                            label: j.intl.string(j.t.s9LFQh),
                            helperText: j.intl.string(j.t["F+nFTZ"]),
                            children: (0, E.jsx)(cy.A, {
                                value: n,
                                buttonColor: oa.$n.Colors.BRAND,
                                buttonLook: oa.$n.Looks.FILLED,
                                delay: 1e3,
                            }),
                        }),
                    ],
                }),
            });
};
var cR = i(725807),
    cD = i(212168),
    cL = i(469778),
    cP = i(109802),
    cG = i(316779);
function cM(e) {
    let { children: t, className: i, splashArtURL: n } = e;
    return (0, E.jsxs)(rn.A, {
        className: e6()(cG.wx, i),
        align: rn.A.Align.CENTER,
        children: [
            (0, E.jsx)("div", { className: cG.Bn, style: null != n ? { backgroundImage: `url(${n})` } : void 0 }),
            t,
        ],
    });
}
function cU(e) {
    let { children: t, className: i } = e;
    return (0, E.jsx)("div", { className: e6()(cG.rf, i), children: t });
}
class cV extends S.PureComponent {
    static Header = cM;
    static Body = cU;
    render() {
        let { children: e, className: t, onMouseEnter: i, onMouseLeave: n } = this.props;
        return (0, E.jsx)("div", { className: e6()(cG.Nr, t), onMouseEnter: i, onMouseLeave: n, children: e });
    }
}
var ck = i(165191),
    cw = i(871123),
    cB = i(366523),
    cF = i(495544),
    cz = i(30793),
    cX = i(97352),
    cY = i(67480),
    cH = i(147925),
    cK = i(957565),
    cW = i(615396),
    cZ = i(192549);
class cQ extends S.PureComponent {
    _copyModeTimeout = new oQ.Ep();
    state = { copyMode: cP.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case cP.q.SUCCESS:
                return j.intl.string(j.t.XVvPjU);
            case cP.q.ERROR:
                return j.intl.string(j.t.i4GM3L);
            default:
                return j.intl.string(j.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        cA.A.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: i } = this.props;
        (0, cE.AK)(t, i),
            (0, cK.C)(
                e,
                () => this.setState({ copyMode: cP.q.SUCCESS }),
                () => this.setState({ copyMode: cP.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: cP.q.DEFAULT });
            });
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: i } = this.state;
        return (0, E.jsxs)(rn.A, {
            direction: rn.A.Direction.VERTICAL,
            className: cZ.Gj,
            children: [
                (0, E.jsx)(cP.e, {
                    className: cZ.ph,
                    value: (0, cE.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: i,
                    supportsCopy: cK.p5,
                    hideMessage: e ? j.intl.string(j.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: oa.XD.BRAND,
                    buttonLook: oa.pR.FILLED,
                }),
                (0, E.jsxs)("div", {
                    className: cZ.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, E.jsxs)(S.Fragment, {
                                  children: [
                                      j.intl.format(j.t.ltVZcJ, { hours: t.expiresAt.diff(r4()(), "h") }),
                                      " \u2014\xa0",
                                  ],
                              })
                            : null,
                        (0, E.jsx)(en.D, {
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
class cq extends S.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: i, giftStyle: n } = this.props;
        this.setState({ isCreating: !0 }),
            await cA.A.createGiftCode(t, i, n),
            this.setState({ isCreating: !1, isOpen: !0 });
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: i } = this.props,
            n = !this.state.isOpen;
        (null == i || null == this._loadedAt || i < this._loadedAt) && n && cA.A.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen });
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: i } = this.props;
        return (0, cw.bF)(e)
            ? (0, E.jsx)(cB.e, { shape: "square", sku: e, containerClassName: cZ.ez })
            : null != t
              ? (0, E.jsx)(ck.A, { giftStyle: t, className: cZ.ez, shouldAnimate: this.state.isHovered })
              : (0, E.jsx)(p.A, { game: i, size: p.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: i } = this.props;
        return (0, cw.bF)(e)
            ? (0, E.jsxs)("div", {
                  className: e6()(cZ.Oc, cZ.ic),
                  children: [
                      (0, E.jsx)(p.A, { game: i, size: p.M.XSMALL, skuId: e.id, className: cZ._u }),
                      j.intl.format(j.t["6plpZi"], { applicationName: i.name, copies: t.length }),
                  ],
              })
            : (0, E.jsx)("div", { className: cZ.Oc, children: j.intl.format(j.t.zMcvcA, { copies: t.length }) });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: i, giftCodeBatchId: n } = this.props;
        return (
            (e =
                n === sq.FB
                    ? j.intl.string(j.t.odsU6W)
                    : n === sq.Bu && null != i
                      ? j.intl.formatToPlainString(i.interval === sq.WT.MONTH ? j.t.uZjpiJ : j.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: i.intervalCount,
                        })
                      : null == i
                        ? t.name
                        : j.intl.formatToPlainString(i.interval === sq.WT.MONTH ? j.t.rCJvqo : j.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: i.intervalCount,
                          })),
            (0, E.jsx)("div", { className: cZ.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, E.jsxs)(rn.A, {
            justify: rn.A.Justify.BETWEEN,
            align: rn.A.Align.CENTER,
            className: cZ.pe,
            children: [
                (0, E.jsx)(es.E, { variant: "text-md/normal", children: j.intl.string(j.t.lELyPj) }),
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
        return (0, E.jsxs)(cV, {
            className: n,
            children: [
                (0, E.jsx)(en.D, {
                    onClick: this.handleToggleOpen,
                    className: cZ.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, E.jsx)(cV.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, E.jsxs)("div", {
                            className: cZ.MY,
                            children: [
                                (0, E.jsxs)(rn.A, {
                                    align: rn.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, E.jsxs)("div", {
                                            className: cZ.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, E.jsx)(cH.A, {
                                    direction: a ? cH.A.Directions.UP : cH.A.Directions.DOWN,
                                    className: cZ.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, E.jsx)(cV.Body, {
                          children: l
                              ? (0, E.jsx)(dp.y, { className: cZ.u1 })
                              : (0, E.jsxs)(S.Fragment, {
                                    children: [
                                        i.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        i.map((e) => (0, E.jsx)(cQ, { giftCode: e, sku: s, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let cJ = g.Ay.connectStores([cY.A, eB.A, cz.A, x.A, cX.A, cF.default], (e) => {
    let { skuId: t, subscriptionPlanId: i, giftStyle: n } = e,
        s = cY.A.get(t);
    if (null == s) throw Error("SKU was unavailable while rendering gift.");
    let l = cz.A.getForGifterSKUAndPlan(cF.default.getId(), t, i)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === n);
    return {
        sku: s,
        hideCodes: eB.A.enabled,
        isFetching: cz.A.getUserGiftCodesFetchingForSKUAndPlan(t, i),
        loadedAt: cz.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, i),
        application: x.A.getApplication(s.applicationId),
        subscriptionPlan: null != i ? (0, cW.c9)(i) : null,
        giftCodes: l,
    };
})(cq);
var c$ = i(633429);
function c0(e) {
    let { redesign: t = !1 } = e,
        i = (0, g.yK)([cL.A], () => cL.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null != t;
        }),
        n = (0, cC.N)(),
        {
            activeOutboundPromotions: s,
            claimedEndedOutboundPromotions: l,
            claimedOutboundPromotionCodeMap: r,
        } = (0, cu.y7)(),
        a = i.find((e) => e.giftCodeBatchId === sq.FB && !e.consumed),
        o = i.filter((e) => e.giftCodeBatchId === sq.Bu && !e.consumed) ?? [],
        [u, d] = eZ().partition(o, (e) => {
            let { subscriptionPlanId: t } = e;
            return t === sq.gD.PREMIUM_YEAR_TIER_2;
        }),
        c = s.length + l.length > 0,
        m =
            t || !c
                ? null
                : (0, E.jsxs)("div", {
                      className: c$.N1,
                      children: [
                          (0, E.jsx)(eP.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.wFsj3B) }),
                          (0, E.jsx)(eM.c, { className: c$.yF }),
                      ],
                  }),
        A =
            !1 === n && c
                ? (0, E.jsxs)("div", {
                      className: c$.uo,
                      children: [
                          (0, E.jsx)(uu.t, {
                              size: "md",
                              color: er.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: c$.PC,
                          }),
                          (0, E.jsx)(es.E, {
                              variant: "text-md/normal",
                              className: c$.Qw,
                              children: j.intl.format(j.t.G4fwxK, {
                                  onClick: () => {
                                      (0, sH.default)(), (0, s7.pX)(U.BVt.APPLICATION_STORE);
                                  },
                              }),
                          }),
                          (0, E.jsx)(cR.A, {
                              showGradient: !0,
                              className: c$.aA,
                              subscriptionTier: sq.pe.TIER_2,
                              textOptions: { textOverride: j.intl.string(j.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
    return (0, E.jsxs)("div", {
        children: [
            m,
            (0, E.jsx)(cD.A, {
                className: c$.Yj,
                isShown: !1 === n && c,
                type: cD.i.PREMIUM,
                hasBackground: !0,
                children: (0, E.jsxs)("div", {
                    className: c$.DE,
                    children: [
                        A,
                        l.map((e) => {
                            let { code: t, promotion: i } = e;
                            return (0, E.jsx)(c3, { outboundPromotion: i, code: t }, i.id);
                        }),
                        s.map((e) => (0, E.jsx)(c3, { outboundPromotion: e, code: r[e.id] }, e.id)),
                        null != a
                            ? (0, E.jsx)(
                                  cJ,
                                  {
                                      skuId: a.skuId,
                                      subscriptionPlanId: a.subscriptionPlanId,
                                      entitlements: [a],
                                      giftCodeBatchId: sq.FB,
                                  },
                                  (0, cE.Kx)(a.skuId, a.subscriptionPlanId),
                              )
                            : null,
                        u.length > 0
                            ? (0, E.jsx)(
                                  cJ,
                                  {
                                      skuId: u[0].skuId,
                                      subscriptionPlanId: u[0].subscriptionPlanId,
                                      entitlements: u,
                                      giftCodeBatchId: sq.Bu,
                                  },
                                  (0, cE.Kx)(u[0].skuId, u[0].subscriptionPlanId),
                              )
                            : null,
                        d.length > 0
                            ? (0, E.jsx)(
                                  cJ,
                                  {
                                      skuId: d[0].skuId,
                                      subscriptionPlanId: d[0].subscriptionPlanId,
                                      entitlements: d,
                                      giftCodeBatchId: sq.Bu,
                                  },
                                  (0, cE.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                    ],
                }),
            }),
        ],
    });
}
var c1 = i(339048);
function c2() {
    let e = (0, g.yK)([cL.A], () => cL.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        t = eZ().groupBy(e, (e) => (0, cE.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [i, n] = S.useState(!1);
    if (
        (S.useEffect(() => {
            sa.h.wait(() => {
                (0, c1.XJ)().then(() => n(!0));
            });
        }, []),
        !i)
    )
        return (0, E.jsx)(dp.y, { className: c$.Lq });
    if (0 === Object.keys(t).length)
        return (0, E.jsxs)("div", {
            className: c$.p$,
            children: [
                (0, E.jsx)("div", { className: c$.QT }),
                (0, E.jsx)(cf.H, { className: c$.ks, children: j.intl.string(j.t.B1qgZn) }),
                (0, E.jsx)("p", {
                    className: c$.WO,
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
            let { skuId: i, subscriptionPlanId: n, giftStyle: s } = (0, cE.X6)(e);
            return (0, E.jsx)(cJ, { skuId: i, subscriptionPlanId: n, entitlements: t[e], giftStyle: s }, e);
        });
    return (0, E.jsx)(q.B, { gap: "lg", children: s });
}
function c3(e) {
    let t,
        { outboundPromotion: i, code: n } = e,
        [s, l] = S.useState(!1),
        [r, a] = S.useState(!1);
    function o() {
        return l((e) => !e);
    }
    let u = (0, cN.Ay)(),
        d = (0, cb.WD)(i.id, u),
        c = null != n,
        g = S.useMemo(
            () =>
                (0, r7.i$)(
                    c
                        ? null != i.outboundRedemptionEndDate
                            ? r4()(i.outboundRedemptionEndDate)
                            : r4()(i.endDate).add(cI)
                        : r4()(i.endDate),
                    "LL",
                ),
            [i, c],
        );
    c && s
        ? (t = j.intl.format(j.t.pkxVx6, { endDate: g, onClickDetails: o }))
        : c && !s
          ? (t = j.intl.format(j.t["4sFeob"], { endDate: g, onClickDetails: o }))
          : !c && s
            ? (t = j.intl.format(j.t["RBnE+l"], { endDate: g, onClickDetails: o }))
            : c || s || (t = j.intl.format(j.t["57+7Qn"], { endDate: g, onClickDetails: o }));
    let m = c ? j.intl.string(j.t["2cHUti"]) : j.intl.string(j.t.O13yhz),
        A = !0 === (0, cC.N)(i),
        h = S.useCallback(() => a(!1), []),
        { outboundTitle: T, outboundTermsAndConditions: x } = i;
    return (0, E.jsxs)(E.Fragment, {
        children: [
            (0, E.jsxs)("div", {
                className: c$.AX,
                children: [
                    (0, E.jsxs)("div", {
                        className: c$.gE,
                        children: [
                            (0, E.jsxs)("div", {
                                className: c$.At,
                                children: [
                                    (0, E.jsx)("div", {
                                        className: c$.$G,
                                        children: (0, E.jsx)("img", { alt: "", src: d, className: c$.IJ }),
                                    }),
                                    (0, E.jsxs)("div", {
                                        children: [
                                            (0, E.jsx)(eP.D, { variant: "heading-md/semibold", children: T }),
                                            (0, E.jsx)(es.E, {
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                children: t,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (c || A) && (0, E.jsx)(eG.$, { text: m, onClick: () => a(!0), size: "sm" }),
                        ],
                    }),
                    s &&
                        (0, E.jsx)(es.E, {
                            className: c$.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: c_.A.parse(x, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            r &&
                (0, E.jsx)(cp.aF, {
                    renderModal: (e) =>
                        (0, E.jsx)(cO, {
                            ...e,
                            onClose: h,
                            onClaim: co.Ay.addClaimedOutboundPromotionCode,
                            code: n,
                            outboundPromotion: i,
                        }),
                    onCloseRequest: h,
                }),
        ],
    });
}
let c6 = (0, a.E2)(u.X.GIFT_INVENTORY_LIST_SETTING, {
    Component: function () {
        return (0, E.jsxs)(q.B, {
            gap: "md",
            children: [
                (0, E.jsx)(c0, {}),
                (0, E.jsx)("div", {
                    className: c$.N1,
                    children: (0, E.jsxs)(cf.F, {
                        component: (0, E.jsx)(eP.D, {
                            variant: "heading-md/semibold",
                            children: j.intl.string(j.t["9KeUbY"]),
                        }),
                        children: [(0, E.jsx)(eM.c, { className: c$.yF }), (0, E.jsx)(c2, {})],
                    }),
                }),
            ],
        });
    },
    usePredicate: () => !(0, cd.Hp)(),
    useSearchTerms: () => [j.intl.string(j.t["jcSP+g"]), j.intl.string(j.t["9KeUbY"])],
});
var c4 = i(374200);
let c7 = (0, a.zZ)(u.X.MY_GIFTS_CATEGORY, {
        useTitle: c8,
        buildLayout: () => [c5],
        usePredicate: () => {
            let { claimedOutboundPromotionCodes: e, claimedOutboundPromotionCodesLoaded: t } = (0, g.cf)(
                    [c4.A],
                    () => ({
                        claimedOutboundPromotionCodes: c4.A.claimedOutboundPromotionCodes,
                        claimedOutboundPromotionCodesLoaded: c4.A.claimedOutboundPromotionCodesLoaded,
                    }),
                ),
                i = (0, cu.T1)({ includeClaimedPromotions: !0 }),
                n = (0, cb.Wl)(e, i).length;
            return t && i.length + n > 0;
        },
    }),
    c5 = (0, a.E2)(u.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [c8()],
        Component: () => (0, E.jsx)(c0, { redesign: !0 }),
    });
function c8() {
    return (0, o.ri)("MyGifts") ? j.intl.string(j.t.YzjdWJ) : j.intl.string(j.t.wFsj3B);
}
let c9 = (0, a.zZ)(u.X.PURCHASED_GIFTS_CATEGORY, { useTitle: gt, buildLayout: () => [ge] }),
    ge = (0, a.E2)(u.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [gt()], Component: () => (0, E.jsx)(c2, {}) });
function gt() {
    return (0, o.ri)("PurchasedGifts") ? j.intl.string(j.t.FWe6CP) : j.intl.string(j.t["9KeUbY"]);
}
let gi = (0, a.zZ)(u.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => j.intl.string(j.t["il+VCo"]),
        buildLayout: () => [gn],
        usePredicate: () => !(0, cd.Hp)(),
    }),
    gn = (0, a.E2)(u.X.REDEEM_CODE_INPUT, {
        Component: () => (0, E.jsx)(cT, { redesign: !0 }),
        useSearchTerms: () => [j.intl.string(j.t["jcSP+g"]), j.intl.string(j.t["il+VCo"])],
    }),
    gs = (0, a.zZ)(u.X.GIFT_INVENTORY_LEGACY_CATEGORY, { buildLayout: () => [cx, c6, cc] }),
    gl = (0, a.t_)(u.X.GIFT_PANEL, {
        useTitle: () => j.intl.string(j.t["jcSP+g"]),
        buildLayout: () => ((0, o.SB)("GiftPanel") ? [gi, c7, c9, cg] : [gs]),
        initialize: () => {
            (0, o.SB)("GiftPanel") && co.Ay.fetchClaimedOutboundPromotionCodes();
        },
    }),
    gr = (0, a.i4)(u.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["jcSP+g"]),
        icon: ca.o,
        usePersistentBadge: function () {
            return S.useMemo(() => ({ badgeType: h.Xi.COUNT, useCount: () => (0, cu.IO)().length }), []);
        },
        buildLayout: () => [gl],
    });
var ga = i(659758),
    go = i(741046),
    gu = i(815846);
let gd = (0, a.E2)(u.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, g.bG)([io.default], () => io.default.getCurrentUser());
            return (0, uT.YE)(e, sq.PremiumTypes.TIER_2) ? (0, E.jsx)(gu.A, {}) : (0, E.jsx)(go.A, {});
        },
        useSearchTerms: () => [j.intl.string(j.t.Ipxkog)],
    }),
    gc = (0, a.zZ)(u.X.NITRO_CATEGORY, { buildLayout: () => [gd] }),
    gg = (0, a.t_)(u.X.NITRO_PANEL, {
        useTitle: () => j.intl.string(j.t.Ipxkog),
        useObscuredNotice: dT.L,
        buildLayout: () => [gc],
    }),
    gm = (0, a.i4)(u.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.Ipxkog),
        icon: uu.t,
        usePersistentBadge: function (e) {
            return S.useMemo(
                () => ({ badgeType: h.Xi.STRONGLY_DISCOURAGED_CUSTOM, useCustomBadge: () => (0, ga.e)(e) }),
                [e],
            );
        },
        buildLayout: () => [gg],
    });
var gA = i(104510),
    gh = i(820739),
    gE = i(73825),
    gS = i(160946);
let gT = (0, i(240921).Ay)({
    name: "2026-03-boosting-settings-refresh",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var gx = i(859241),
    gp = i(531260),
    gf = i(369163),
    gN = i(957485),
    g_ = i(926268),
    gI = i(851617),
    gC = i(93364);
function gb(e) {
    let { className: t, icon: i, children: n } = e;
    return (0, E.jsxs)("li", {
        className: e6()(gI.Nr, t),
        children: [
            (0, E.jsx)(i, { className: gI.Kk }),
            (0, E.jsx)(es.E, { className: gI.__invalid_description, variant: "text-sm/medium", children: n }),
        ],
    });
}
let gy = function (e) {
    let { cardClassName: t } = e;
    return (0, E.jsxs)("div", {
        className: gI.iE,
        children: [
            (0, E.jsxs)("div", {
                className: gI.Qs,
                children: [
                    (0, E.jsx)(eP.D, {
                        className: gI.R_,
                        color: "always-white",
                        variant: "heading-xxl/bold",
                        children: j.intl.string(j.t.IzKs3o),
                    }),
                    (0, E.jsxs)("ul", {
                        className: gI.kR,
                        children: [
                            (0, E.jsx)(gb, { className: t, icon: gf.v, children: j.intl.string(j.t.TZigSO) }),
                            (0, E.jsx)(gb, {
                                className: t,
                                icon: (e) =>
                                    (0, E.jsx)("img", { className: e6()(e.className, gI.Dp), src: gC, alt: "" }),
                                children: j.intl.string(j.t.hjQuV2),
                            }),
                            (0, E.jsx)(gb, { className: t, icon: gN.i, children: j.intl.string(j.t["2RUcaM"]) }),
                            (0, E.jsx)(gb, { className: t, icon: g_.C, children: j.intl.string(j.t.bJoZKV) }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)("div", { className: gI.JP }),
        ],
    });
};
var gv = i(834040),
    gj = i(97179);
let gO = [
        { getQuestion: () => j.intl.string(j.t.C4J8UB), getAnswer: () => j.intl.string(j.t.nhkk6k) },
        {
            getQuestion: () => j.intl.string(j.t.ai4ym2),
            getAnswer: () =>
                j.intl.format(j.t["8zlqlD"], { helpCenterUrl: tN.A.getArticleURL(U.MVz.GUILD_BOOSTING_FAQ) }),
        },
        { getQuestion: () => j.intl.string(j.t.kMVGsC), getAnswer: () => j.intl.string(j.t["Vz/SCQ"]) },
        { getQuestion: () => j.intl.string(j.t.kYmXWF), getAnswer: () => j.intl.string(j.t["+OURPp"]) },
        { getQuestion: () => j.intl.string(j.t["LsX/vb"]), getAnswer: () => j.intl.string(j.t["3TeauK"]) },
        { getQuestion: () => j.intl.string(j.t.fRlnXU), getAnswer: () => j.intl.string(j.t.bTRacj) },
        { getQuestion: () => j.intl.string(j.t["8Mu5Q9"]), getAnswer: () => j.intl.string(j.t["2T5iPo"]) },
        { getQuestion: () => j.intl.string(j.t["6EN+TZ"]), getAnswer: () => j.intl.string(j.t.NZax1u) },
        { getQuestion: () => j.intl.string(j.t.f5B4EW), getAnswer: () => j.intl.string(j.t.Aje8Pb) },
    ],
    gR = function (e) {
        let { className: t } = e,
            [i, n] = S.useState(null);
        return (0, E.jsxs)("div", {
            className: e6()(gj.iE, t),
            children: [
                (0, E.jsx)(eP.D, {
                    className: gj.R_,
                    variant: "heading-xxl/bold",
                    children: j.intl.string(j.t.HPJ6Nj),
                }),
                (0, E.jsx)("ul", {
                    className: gj.p_,
                    children: gO.map((e, t) => {
                        let s = i === t;
                        return (0, E.jsxs)(
                            "div",
                            {
                                className: gj.Aw,
                                children: [
                                    (0, E.jsxs)(en.D, {
                                        className: e6()(gj.k7, { [gj.lo]: s }),
                                        onClick: () => n((e) => (e === t ? null : t)),
                                        tag: "li",
                                        children: [
                                            (0, E.jsx)(es.E, {
                                                className: gj.b1,
                                                variant: "text-lg/normal",
                                                children: e.getQuestion(),
                                            }),
                                            s
                                                ? (0, E.jsx)(gv.Q, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: gj.q4,
                                                  })
                                                : (0, E.jsx)(ay.j, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: gj.q4,
                                                  }),
                                        ],
                                    }),
                                    s &&
                                        (0, E.jsx)(es.E, {
                                            className: gj.ZF,
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
var gD = i(462887),
    gL = i(933832),
    gP = i(789645),
    gG = i(116891),
    gM = i(118180);
let gU = [
    {
        getPerkHeading: () => j.intl.string(j.t.tIiwuj),
        getPerkPreviewLightTheme: () => i(604203),
        getPerkPreviewDarkTheme: () => i(878515),
        getTier0Value: () => sq.TG[U.TVA.NONE].limits.emoji,
        getTier1Value: () => sq.TG[U.TVA.TIER_1].limits.emoji,
        getTier2Value: () => sq.TG[U.TVA.TIER_2].limits.emoji,
        getTier3Value: () => sq.TG[U.TVA.TIER_3].limits.emoji,
    },
    {
        getPerkHeading: () => j.intl.string(j.t["3iccet"]),
        getPerkPreviewLightTheme: () => i(105732),
        getPerkPreviewDarkTheme: () => i(857020),
        getTier0Value: () => sq.TG[U.TVA.NONE].limits.stickers,
        getTier1Value: () => sq.TG[U.TVA.TIER_1].limits.stickers,
        getTier2Value: () => sq.TG[U.TVA.TIER_2].limits.stickers,
        getTier3Value: () => sq.TG[U.TVA.TIER_3].limits.stickers,
    },
    {
        getPerkHeading: () => j.intl.string(j.t["+smCv9"]),
        getPerkPreviewLightTheme: () => i(597890),
        getPerkPreviewDarkTheme: () => i(297642),
        getTier0Value: () => sq.TG[U.TVA.NONE].limits.soundboardSounds,
        getTier1Value: () => sq.TG[U.TVA.TIER_1].limits.soundboardSounds,
        getTier2Value: () => sq.TG[U.TVA.TIER_2].limits.soundboardSounds,
        getTier3Value: () => sq.TG[U.TVA.TIER_3].limits.soundboardSounds,
    },
    {
        getPerkHeading: () => j.intl.string(j.t.SMYauD),
        getPerkPreviewLightTheme: () => i(323091),
        getPerkPreviewDarkTheme: () => i(261835),
        getTier0Value: () =>
            j.intl.formatToPlainString(j.t.zZ6Rdi, {
                resolution: sq.TG[U.TVA.NONE].limits.screenShareQualityResolution,
                framerate: sq.TG[U.TVA.NONE].limits.screenShareQualityFramerate,
            }),
        getTier1Value: () =>
            j.intl.formatToPlainString(j.t.zZ6Rdi, {
                resolution: sq.TG[U.TVA.TIER_1].limits.screenShareQualityResolution,
                framerate: sq.TG[U.TVA.TIER_1].limits.screenShareQualityFramerate,
            }),
        getTier2Value: () =>
            j.intl.formatToPlainString(j.t.zZ6Rdi, {
                resolution: (0, gG.eT)("GuildBoostingMarketingTierComparisonTable"),
                framerate: sq.TG[U.TVA.TIER_2].limits.screenShareQualityFramerate,
            }),
        getTier3Value: () =>
            j.intl.formatToPlainString(j.t.zZ6Rdi, {
                resolution: (0, gG.eT)("GuildBoostingMarketingTierComparisonTable"),
                framerate: sq.TG[U.TVA.TIER_3].limits.screenShareQualityFramerate,
            }),
    },
    {
        getPerkHeading: () => j.intl.string(j.t["/79IDj"]),
        getPerkPreviewLightTheme: () => i(913997),
        getPerkPreviewDarkTheme: () => i(95781),
        getTier0Value: () =>
            j.intl.formatToPlainString(j.t.w1gmLt, { bitrate: sq.TG[U.TVA.NONE].limits.bitrate / 1e3 }),
        getTier1Value: () =>
            j.intl.formatToPlainString(j.t.w1gmLt, { bitrate: sq.TG[U.TVA.TIER_1].limits.bitrate / 1e3 }),
        getTier2Value: () =>
            j.intl.formatToPlainString(j.t.w1gmLt, { bitrate: sq.TG[U.TVA.TIER_2].limits.bitrate / 1e3 }),
        getTier3Value: () =>
            j.intl.formatToPlainString(j.t.w1gmLt, { bitrate: sq.TG[U.TVA.TIER_3].limits.bitrate / 1e3 }),
    },
    {
        getPerkHeading: () => j.intl.string(j.t.R1U2xC),
        getPerkPreviewLightTheme: () => i(389833),
        getPerkPreviewDarkTheme: () => i(754561),
        getTier0Value: () =>
            j.intl.formatToPlainString(j.t.pIn7Af, { size: sq.TG[U.TVA.NONE].limits.fileSize / 1048576 }),
        getTier1Value: () =>
            j.intl.formatToPlainString(j.t.pIn7Af, { size: sq.TG[U.TVA.TIER_1].limits.fileSize / 1048576 }),
        getTier2Value: () =>
            j.intl.formatToPlainString(j.t.pIn7Af, { size: sq.TG[U.TVA.TIER_2].limits.fileSize / 1048576 }),
        getTier3Value: () =>
            j.intl.formatToPlainString(j.t.pIn7Af, { size: sq.TG[U.TVA.TIER_3].limits.fileSize / 1048576 }),
    },
    {
        getPerkHeading: () => j.intl.string(j.t.f6vfso),
        getPerkPreviewLightTheme: () => i(735669),
        getPerkPreviewDarkTheme: () => i(283517),
        getTier0Value: () => sq.TG[U.TVA.NONE].limits.stageVideoUsers,
        getTier1Value: () => sq.TG[U.TVA.TIER_1].limits.stageVideoUsers,
        getTier2Value: () => sq.TG[U.TVA.TIER_2].limits.stageVideoUsers,
        getTier3Value: () => sq.TG[U.TVA.TIER_3].limits.stageVideoUsers,
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
function gV(e) {
    let { children: t, className: i, tier: n } = e,
        s = n === U.TVA.NONE ? "text-muted" : "text-strong",
        l = n === U.TVA.NONE || null == n ? "heading-xl/normal" : "heading-xl/bold";
    return (0, E.jsxs)("th", {
        className: e6()(gM.PG, i),
        scope: "col",
        children: [
            (0, E.jsx)(eP.D, { color: s, variant: l, children: t }),
            null != n &&
                (0, E.jsx)(es.E, {
                    color: s,
                    variant: "text-md/normal",
                    children: j.intl.format(j.t["pob/cL"], { subscriptions: U.M2T[n] }),
                }),
        ],
    });
}
function gk(e) {
    let t,
        { className: i, textVariant: n = "text-md/bold", value: s } = e;
    if ("boolean" == typeof s) {
        let e = e6()(gM.Jk, { [gM.I$]: s });
        t = s
            ? (0, E.jsx)(gL.A, { size: "md", color: "currentColor", className: e })
            : (0, E.jsx)(gP.P, { size: "md", color: "currentColor", className: e });
    } else t = (0, E.jsx)(es.E, { color: "interactive-text-active", variant: n, children: s });
    return (0, E.jsx)("td", { className: e6()(gM.xR, i), children: t });
}
function gw(e) {
    let { currentTier: t } = e,
        i = (function (e) {
            switch (e) {
                case U.TVA.NONE:
                case U.TVA.TIER_1:
                    return U.TVA.TIER_2;
                case U.TVA.TIER_2:
                case U.TVA.TIER_3:
                    return U.TVA.TIER_3;
                default:
                    return null;
            }
        })(t);
    return null == i
        ? null
        : (0, E.jsx)("div", {
              className: e6()(gM.ER, { [gM.GH]: i === U.TVA.TIER_2, [gM.z5]: i === U.TVA.TIER_3 }),
              children: (0, E.jsx)(es.E, {
                  className: gM.uQ,
                  color: "always-white",
                  variant: "text-xs/bold",
                  children: t === U.TVA.TIER_3 ? j.intl.string(j.t.d849Up) : j.intl.string(j.t.dZeX1z),
              }),
          });
}
function gB(e) {
    let { isFocused: t, handleFocus: i, handleRowBlur: n, theme: s, row: l, hideTier0: r } = e,
        a = S.useRef(null);
    return (0, E.jsxs)("tr", {
        className: gM.__invalid_tableRow,
        children: [
            (0, E.jsx)("th", {
                className: e6()(gM.xR, gM.uB),
                scope: "row",
                children: (0, E.jsx)(en.D, {
                    className: e6()(gM.VC, gM.xR, gM.Rk),
                    onFocus: i,
                    onBlur: n,
                    onMouseEnter: i,
                    onMouseLeave: n,
                    children: (0, E.jsx)(ee.Y, {
                        targetElementRef: a,
                        align: "center",
                        disablePointerEvents: !0,
                        nudgeAlignIntoViewport: !0,
                        position: "bottom",
                        renderPopout: () =>
                            (0, E.jsx)("img", {
                                className: gM.Mz,
                                src: (0, gD.M)(s) ? l.getPerkPreviewDarkTheme() : l.getPerkPreviewLightTheme(),
                                alt: "",
                            }),
                        shouldShow: t,
                        spacing: 16,
                        children: () =>
                            (0, E.jsx)(es.E, { variant: "text-md/normal", ref: a, children: l.getPerkHeading() }),
                    }),
                }),
            }),
            !r && (0, E.jsx)(gk, { textVariant: "text-md/normal", value: l.getTier0Value() }),
            (0, E.jsx)(gk, { value: l.getTier1Value() }),
            (0, E.jsx)(gk, { value: l.getTier2Value() }),
            (0, E.jsx)(gk, { value: l.getTier3Value() }),
        ],
    });
}
let gF = function (e) {
    let t = (0, cN.Ay)(),
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
                    className: gM.R_,
                    variant: "heading-xxl/extrabold",
                    children: j.intl.string(j.t["9GGb9k"]),
                }),
            (0, E.jsxs)("div", {
                className: gM.wY,
                children: [
                    null != l && (0, E.jsx)(gw, { currentTier: l.premiumTier }),
                    (0, E.jsxs)("table", {
                        className: gM.tp,
                        cellPadding: 0,
                        cellSpacing: 0,
                        children: [
                            (0, E.jsx)("thead", {
                                children: (0, E.jsxs)("tr", {
                                    className: gM.__invalid_tableRow,
                                    children: [
                                        (0, E.jsx)(gV, { className: gM.VC, children: j.intl.string(j.t.F5MY0k) }),
                                        !a && (0, E.jsx)(gV, { tier: U.TVA.NONE, children: j.intl.string(j.t.mx8j2m) }),
                                        (0, E.jsx)(gV, { tier: U.TVA.TIER_1, children: j.intl.string(j.t.nzXtaS) }),
                                        (0, E.jsx)(gV, { tier: U.TVA.TIER_2, children: j.intl.string(j.t["h33/uW"]) }),
                                        (0, E.jsx)(gV, { tier: U.TVA.TIER_3, children: j.intl.string(j.t.BfF6ED) }),
                                    ],
                                }),
                            }),
                            (0, E.jsx)("tbody", {
                                className: gM.__invalid_tableBody,
                                children: gU.map((e, s) => {
                                    let l = i === s;
                                    return void 0 === e.predicate
                                        ? (0, E.jsx)(
                                              gB,
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
var gz = i(338548),
    gX = i(776096),
    gY = i(178368),
    gH = i(308186),
    gK = i(866323),
    gW = i(530005),
    gZ = i(443865),
    gQ = i(473145);
function gq(e) {
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
        case U.Dmq.PAST_DUE:
            (o.cancel.disabled = !0), (o.cancel.subtext = j.intl.string(j.t.WnL6DV)), (o.uncancel.disabled = !0);
            break;
        case U.Dmq.PAUSE_PENDING:
        case U.Dmq.PAUSED:
            a === sq.xc.NONE &&
                ((o.transfer.disabled = !0),
                (o.transfer.subtext = j.intl.string(j.t.LiLRRT)),
                (o.cancel.subtext = j.intl.string(j.t["1ywaWL"])),
                (o.cancel.disabled = !0),
                (o.uncancel.disabled = !0));
    }
    let d = S.useMemo(
        () =>
            l.isPausedOrPausePending && a === sq.xc.NONE
                ? (0, E.jsx)(ei.Dr, {
                      id: "manage-subscription",
                      label: j.intl.string(j.t.obRG6Y),
                      action: () => (0, eH.openUserSettings)(u.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: gZ.x,
                      leadingAccessory: { type: "icon", icon: gZ.x },
                  })
                : null,
        [a, l],
    );
    return (0, E.jsxs)(et.W, {
        "data-menu-migrated-auto": !0,
        onSelect: r,
        navId: "subscription-context",
        variant: "fixed",
        "aria-label": j.intl.string(j.t.ogxXGq),
        onClose: n,
        children: [
            (0, E.jsx)(ei.Dr, {
                id: "apply",
                label: o.transfer.label,
                subtext: o.transfer.subtext,
                action: function () {
                    (0, K.openModalLazy)(async () => {
                        let { default: e } = await Promise.resolve().then(i.bind(i, 724624));
                        return (i) =>
                            (0, E.jsx)(e, { ...i, guildBoostSlots: [t], locationSection: U.JJy.SETTINGS_PREMIUM });
                    });
                },
                disabled: o.transfer.disabled,
            }),
            (0, gQ.I5)(t)
                ? (0, E.jsx)(ei.Dr, {
                      id: "uncancel",
                      label: o.uncancel.label,
                      subtext: o.uncancel.subtext,
                      action: function () {
                          (0, K.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(i.bind(i, 342744));
                              return (i) => (0, E.jsx)(e, { ...i, guildBoostSlotId: t.id });
                          });
                      },
                      disabled: o.uncancel.disabled,
                  })
                : (0, E.jsx)(ei.Dr, {
                      id: "cancel",
                      label: o.cancel.label,
                      subtext: o.cancel.subtext,
                      action: function () {
                          (0, K.openModalLazy)(async () => {
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
var gJ = i(545934),
    g$ = i(496431);
let g0 = function (e) {
    let { className: t, cooldown: i } = e,
        n = (0, g$.A)(i);
    return (0, E.jsx)(es.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, r7.uN)(n, { days: j.t.WUTPDc, hours: j.t.c1qodV, minutes: j.t["2+A3dv"] }),
    });
};
var g1 = i(129044);
let g2 = function (e) {
    let { className: t, imageClassName: n, boostInCooldown: s, useReducedMotion: l } = e;
    return (0, E.jsx)("div", {
        className: e6()(g1.h4, t, { [g1.K2]: s }),
        children: (0, E.jsx)("img", {
            className: e6()(g1.Sl, n, { [g1.x8]: s }),
            src: s
                ? i(650442)
                : l
                  ? i(742885)
                  : "https://cdn.discordapp.com/assets/content/86fd98fc22283647a8be93d0c503646b53c84e3cb25ca6562a38cecb84327e58.gif",
            alt: "",
        }),
    });
};
var g3 = i(41464);
let g6 = function (e) {
    let { className: t, hasCooldown: n, isCanceled: s, useReducedMotion: l } = e;
    return (0, E.jsxs)("div", {
        className: e6()(g3.sn, t),
        children: [
            s
                ? (0, E.jsx)("img", { className: e6()(g3.$J, g3.qX), src: i(728707), alt: "" })
                : (0, E.jsx)(g2, { className: g3.$J, boostInCooldown: n, useReducedMotion: l }),
            !s && n && (0, E.jsx)("img", { className: g3.De, src: i(438807), alt: "" }),
        ],
    });
};
var g4 = i(548118),
    g7 = i(63152),
    g5 = i(944304),
    g8 = i(864310),
    g9 = i(891534);
let me = function (e) {
    let { className: t, guildId: i, boostingVariant: n } = e,
        s = (0, dt.bG)([ec.A], () => ec.A.getGuild(i), [i]),
        l = (0, g8.A)(s?.id).total;
    return null == s
        ? (0, E.jsx)("div", {
              className: e6()(t, g9.bo),
              children: (0, E.jsx)("div", {
                  className: g9.$g,
                  children: (0, E.jsx)(es.E, { variant: "text-lg/bold", children: j.intl.string(j.t["6Kwwuo"]) }),
              }),
          })
        : (0, E.jsxs)("div", {
              className: e6()(t, g9.bo),
              children: [
                  (0, E.jsx)(g4.Ay, { className: g9.__invalid_guildIcon, guild: s, size: g4.Ay.Sizes.LARGER }),
                  (0, E.jsxs)("div", {
                      className: g9.$g,
                      children: [
                          (0, E.jsx)(es.E, { variant: "text-lg/bold", children: s.name }),
                          (0, E.jsxs)("div", {
                              className: g9.TZ,
                              children: [
                                  (0, E.jsx)(gA._, {
                                      color: er.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                      className: g9.Me,
                                  }),
                                  (0, E.jsx)(es.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: j.intl.format(j.t["pob/cL"], { subscriptions: l }),
                                  }),
                                  (0, E.jsx)("div", { className: g9.me }),
                                  (0, E.jsx)(es.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: (0, gQ.gb)(s.premiumTier, { useLevels: !1 }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  n
                      ? (0, E.jsx)(g5.A, {
                            guild: s,
                            analyticsLocation: {
                                page: U.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                section: U.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                object: U.ZSU.BUTTON_CTA,
                                objectType: U.AnalyticsObjectTypes.BUY,
                            },
                            pauseAnimation: !0,
                            size: oa.$n.Sizes.MEDIUM,
                            color: oa.$n.Colors.PRIMARY,
                            buttonText: j.intl.string(j.t.aBHecF),
                        })
                      : (0, E.jsx)(eG.$, {
                            variant: "secondary",
                            text: j.intl.string(j.t.KLOhbO),
                            onClick: () => {
                                (0, sH.default)(),
                                    (0, g7.K4)({
                                        guildId: s.id,
                                        location: { section: U.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA },
                                    });
                            },
                        }),
              ],
          });
};
var mt = i(731710);
function mi(e) {
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
            let e = null != i.premiumGuildSubscription ? dD.default.extractTimestamp(i.premiumGuildSubscription.id) : 0;
            return j.intl.formatToPlainString(j.t.lY2Bur, { date: new Date(e) });
        }, [i, s, l, r]),
        o = S.useMemo(
            () =>
                (function (e) {
                    if (null == e || e === U.TVA.NONE) return "";
                    let t = [
                        j.intl.formatToPlainString(j.t["dLlKX/"], { numEmojiSlots: sq.TG[e].limits.emoji }),
                        j.intl.formatToPlainString(j.t["+ANIfv"], { numStickerSlots: sq.TG[e].limits.stickers }),
                        j.intl.formatToPlainString(j.t["4gt60b"], {
                            numSoundboardSlots: sq.TG[e].limits.soundboardSounds,
                        }),
                        j.intl.formatToPlainString(j.t.XahSjZ, {
                            resolution: sq.TG[e].limits.screenShareQualityResolution,
                            framerate: sq.TG[e].limits.screenShareQualityFramerate,
                        }),
                        j.intl.formatToPlainString(j.t.NbNs7S, { bitrate: sq.TG[e].limits.bitrate / 1e3 }),
                        j.intl.formatToPlainString(j.t.VVKcpn, { filesize: sq.TG[e].limits.fileSize / 1024 / 1024 }),
                        j.intl.formatToPlainString(j.t.TbpCvv, { numVideoStageSeats: sq.TG[e].limits.stageVideoUsers }),
                        j.intl.string(j.t.LDyX3i),
                        j.intl.string(j.t.YtGlPW),
                    ];
                    e >= U.TVA.TIER_2 && (t.push(j.intl.string(j.t.SztbtN)), t.push(j.intl.string(j.t["3GK91n"]))),
                        e >= U.TVA.TIER_3 && t.push(j.intl.string(j.t["XUUJd+"]));
                    let i = t[Math.floor(Math.random() * t.length)];
                    return j.intl.format(j.t["/dOAmQ"], { perk: i });
                })(t),
            [t],
        ),
        u = (0, gK.p)(n, { from: { opacity: 0 }, enter: { opacity: 1 }, leave: { opacity: 0 } }, "animate-always");
    return s || t === U.TVA.NONE
        ? (0, E.jsx)("div", {
              className: mt.xm,
              children: (0, E.jsx)(es.E, { variant: "text-sm/medium", color: "text-muted", children: a }),
          })
        : u((e, t) =>
              (0, E.jsx)(gH.animated.div, {
                  style: e,
                  className: mt.xm,
                  children: (0, E.jsx)(es.E, { variant: "text-sm/medium", color: "text-muted", children: t ? o : a }),
              }),
          );
}
function mn(e) {
    let {
            guildTier: t,
            guildBoostSlot: i,
            premiumSubscription: n,
            hasCancelableGuildBoostSlot: s,
            showAltText: l,
            isLastGuildBoostSlot: r,
        } = e,
        a = (0, dt.bG)([i7.Ay], () => i7.Ay.useReducedMotion),
        o = S.useMemo(() => (null != i.cooldownEndsAt ? new Date(i.cooldownEndsAt) : null), [i]),
        u = S.useMemo(() => null != o && o > new Date(), [o]),
        d = (0, gQ.I5)(i),
        c = (0, gp.A)(),
        g = S.useRef(null);
    return (0, E.jsxs)("div", {
        className: mt.PW,
        children: [
            (0, E.jsxs)("div", {
                className: mt.$U,
                children: [
                    (0, E.jsx)(g6, { isCanceled: d, hasCooldown: u, useReducedMotion: a }),
                    (0, E.jsx)("div", {
                        className: mt.vh,
                        children:
                            null != o && u && !d
                                ? (0, E.jsx)(g0, { className: mt.xm, cooldown: o.getTime() })
                                : (0, E.jsx)(mi, {
                                      guildTier: t,
                                      guildBoostSlot: i,
                                      showAltText: l,
                                      isCanceled: d,
                                      premiumSubscription: n,
                                      fractionalPremiumInfo: c,
                                  }),
                    }),
                    (0, E.jsx)(ee.Y, {
                        targetElementRef: g,
                        renderPopout: function (e) {
                            let { closePopout: t } = e;
                            return (0, E.jsx)(gq, {
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
                            (0, E.jsx)(en.D, {
                                ...e,
                                innerRef: g,
                                "aria-label": j.intl.string(j.t.PdRCRg),
                                className: mt.oU,
                                children: (0, E.jsx)(gW.F, { size: "md", color: "currentColor" }),
                            }),
                    }),
                ],
            }),
            !r && (0, E.jsx)("div", { className: mt.eX }),
        ],
    });
}
function ms(e) {
    let {
            guildId: t,
            guildBoostSlotRecords: i,
            premiumSubscription: n,
            hasCancelableGuildBoostSlot: s,
            showAltText: l,
        } = e,
        r = (0, dt.bG)([ec.A], () => ec.A.getGuild(t), [t]);
    return (0, E.jsxs)("div", {
        className: mt.ag,
        children: [
            (0, E.jsx)(me, { guildId: t, boostingVariant: !1 }),
            i.map((e, t) =>
                (0, E.jsx)(
                    mn,
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
function ml(e) {
    let { guildId: t, appliedGuildBoosts: i, premiumSubscription: n } = e,
        s = (0, dt.bG)([ec.A], () => ec.A.getGuild(t), [t]),
        l = dD.default.fromTimestamp(Date.now());
    if (
        (i.forEach((e) => {
            (null == l || 0 > dD.default.compare(e.id, l)) && (l = e.id);
        }),
        null == l)
    )
        return null;
    let r = gJ.A.createFromServer(
        {
            id: dD.default.fromTimestamp(Date.now()),
            subscription_id: n.id,
            canceled: !1,
            premium_guild_subscription: { id: l, guild_id: t },
            cooldown_ends_at: null,
        },
        n,
    );
    return (0, E.jsxs)("div", {
        className: mt.ag,
        children: [
            (0, E.jsx)(me, { guildId: t, boostingVariant: !1 }),
            i.map((e, t) =>
                (0, E.jsx)(
                    mn,
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
function mr(e) {
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
              className: mt.iE,
              children: [
                  (0, E.jsx)("div", {
                      className: mt.kL,
                      children: dD.default
                          .keys(n)
                          .map((e) =>
                              (0, E.jsx)(ml, { guildId: e, premiumSubscription: i, appliedGuildBoosts: n[e] }, e),
                          ),
                  }),
                  (0, E.jsx)("div", { className: mt.vK }),
              ],
          });
}
function ma(e) {
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
                if ((!(0, gQ.I5)(s) && e++, null != s.premiumGuildSubscription)) {
                    let e = s.premiumGuildSubscription.guildId;
                    e in i || (i[e] = []), i[e].push(s);
                }
            }),
            { boostsByGuildId: i, numActiveGuildBoostSlots: e }
        );
    }, [t]);
    if (null == i || 0 === Object.keys(l).length) return null;
    let a = r > uT.Ay.getNumIncludedPremiumGuildSubscriptionSlots(i.planId);
    return (0, E.jsxs)("div", {
        className: mt.iE,
        children: [
            (0, E.jsx)("div", {
                className: mt.kL,
                children: dD.default
                    .keys(l)
                    .map((e) =>
                        (0, E.jsx)(
                            ms,
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
            (0, E.jsx)("div", { className: mt.vK }),
        ],
    });
}
var mo = i(594018);
let mu = function (e) {
    let { hasGuildBoostSlots: t, hasAppliedGuildBoosts: n, hasBoostPerk: s, canAddBoosts: l } = e;
    return (0, E.jsxs)("div", {
        className: mo.iE,
        children: [
            (0, E.jsx)("div", {
                className: mo.bj,
                children: (0, E.jsx)("img", { alt: "", className: mo.KV, src: i(742885) }),
            }),
            (0, E.jsxs)("div", {
                className: mo.D7,
                children: [
                    (0, E.jsx)(eP.D, {
                        variant: "display-md",
                        className: mo.R_,
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
                        className: mo.Mz,
                        children: (0, E.jsx)("path", {
                            d: "M101.3,45.5C57.5,45.9,15.9,82.2,0,99.5V210h660V53.5c-164-137-265.2,32.4-385.8,33.6  C177.7,88.1,158.1,45,101.3,45.5z",
                        }),
                    }),
                ],
            }),
        ],
    });
};
var md = i(420026),
    mc = i(168482);
function mg() {
    return (0, E.jsxs)("div", {
        className: md.iE,
        children: [
            (0, E.jsx)("img", { className: md.Kk, alt: "", src: mc }),
            (0, E.jsxs)("div", {
                className: md.pq,
                children: [
                    (0, E.jsx)(es.E, { variant: "text-lg/bold", children: j.intl.string(j.t.ZHNSYf) }),
                    (0, E.jsx)(es.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: j.intl.string(j.t.kCj5ps),
                    }),
                ],
            }),
            (0, E.jsx)(eG.$, {
                variant: "secondary",
                text: j.intl.string(j.t.JFlifp),
                onClick: function () {
                    (0, s7.pX)(U.BVt.GUILD_DISCOVERY), (0, sH.default)();
                },
            }),
        ],
    });
}
var mm = i(502572),
    mA = i(614820),
    mh = i(987144),
    mE = i(23175);
let mS = function () {
    let e = S.useRef(null),
        { analyticsLocations: t } = (0, nZ.Ay)(),
        { fractionalState: n } = (0, gp.A)();
    function s(i) {
        null != e.current && (0, K.closeModal)(e.current),
            (0, mh.g)({
                analyticsLocation: {
                    page: U.liQ.GUILD_BOOSTING_USER_SETTINGS,
                    section: U.JJy.GUILD_BOOSTING_BOOST_ANY_GUILD_CTA,
                    object: U.ZSU.BUTTON_CTA,
                    objectType: U.AnalyticsObjectTypes.BUY,
                },
                analyticsLocations: t,
                guild: i,
            });
    }
    async function l() {
        e.current = await (0, K.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 770101));
                return (t) => (0, E.jsx)(e, { ...t, onSelectGuild: s });
            },
            {
                onCloseRequest: () => {
                    null != e.current && (0, K.closeModal)(e.current);
                },
            },
        );
    }
    let r = (0, gQ.Nc)({ fractionalState: n });
    return (0, E.jsxs)("div", {
        className: mE.iE,
        children: [
            (0, E.jsx)(gA._, { color: er.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: mE.$J }),
            (0, E.jsx)(es.E, {
                className: mE.C,
                color: "text-default",
                variant: "text-sm/medium",
                children: j.intl.format(j.t.kqC5vq, {
                    boostAnyGuildHook: (e, t) => {
                        let i = null != r,
                            n = (0, mA.O)(e),
                            s = (0, E.jsx)("div", {
                                className: mE.lO,
                                children: (0, E.jsx)(
                                    ea.Q,
                                    { variant: "primary", onClick: i ? void 0 : l, text: n, disabled: i },
                                    t,
                                ),
                            });
                        return i
                            ? (0, E.jsx)(
                                  mm.A,
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
var mT = i(738006);
let mx = function (e) {
    let { canAddBoosts: t, canApplyBoosts: i } = e,
        n = (0, g.bG)([gX.A], () => gX.A.affinities),
        s = (0, g.bG)([eg.Ay], () => eg.Ay.getFlattenedGuildIds()),
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
              className: mT.iE,
              children: [
                  t &&
                      (0, E.jsx)(eP.D, {
                          variant: "heading-lg/semibold",
                          className: mT.wx,
                          children: j.intl.string(j.t.r90Wgo),
                      }),
                  l.map((e) => (0, E.jsx)(me, { className: mT.ZS, guildId: e, boostingVariant: !0 }, e)),
                  s.length > 3 && i && (0, E.jsx)(mS, {}),
              ],
          });
};
var mp = i(861103);
let mf = function (e) {
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
                        helpdeskArticle: tN.A.getArticleURL(U.MVz.GUILD_SUBSCRIPTIONS),
                    }),
                };
            let l = sq.hd[sq.gD.PREMIUM_MONTH_GUILD],
                r = uT.Ay.getDefaultPrice(l.id, i),
                a = (0, dO.CE)((0, dO.$g)(r.amount, r.currency), l.interval, l.intervalCount);
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
        className: mp.i,
        children: [
            (0, E.jsx)(eP.D, { variant: "heading-lg/bold", className: mp.V, children: l }),
            null != r && (0, E.jsx)(es.E, { variant: "text-sm/normal", children: r }),
        ],
    });
};
var mN = i(724624),
    m_ = i(983511),
    mI = i(342744),
    mC = i(87719),
    mb = i(99976);
function my(e) {
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
        u = (0, gQ.I5)(t),
        d = l?.isPaused === !0 && a === sq.xc.NONE,
        c = j.intl.string(j.t.mOWsF1);
    return (0, E.jsxs)(
        "li",
        {
            className: mb.Hp,
            children: [
                (0, E.jsxs)("div", {
                    className: mb.YL,
                    children: [
                        (0, E.jsx)(g6, {
                            className: mb.W6,
                            hasCooldown: t.isOnCooldown(),
                            isCanceled: u,
                            useReducedMotion: r,
                        }),
                        u && null != l
                            ? (0, E.jsx)(es.E, {
                                  color: "text-muted",
                                  variant: "text-sm/medium",
                                  children: j.intl.format(j.t.Z4ULRD, { date: l.currentPeriodEnd }),
                              })
                            : t.isOnCooldown() && null != o
                              ? (0, E.jsx)(g0, { cooldown: o.getTime() })
                              : (0, E.jsx)(es.E, {
                                    className: mb.__invalid_unappliedGuildBoostSlotDescription,
                                    color: "text-muted",
                                    variant: "text-sm/medium",
                                    children: j.intl.string(j.t["2mcafz"]),
                                }),
                    ],
                }),
                (0, E.jsxs)("div", {
                    className: mb.E7,
                    children: [
                        i &&
                            !u &&
                            (0, E.jsx)(mm.A, {
                                shouldShow: d,
                                text: c,
                                "aria-label": c.toString(),
                                children: (e) =>
                                    (0, E.jsx)("div", {
                                        className: mb.LB,
                                        children: (0, E.jsx)(ea.Q, {
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
                            (0, E.jsx)(mm.A, {
                                shouldShow: d,
                                text: c,
                                "aria-label": c.toString(),
                                children: (e) =>
                                    (0, E.jsx)("div", {
                                        className: mb.LB,
                                        children: (0, E.jsx)(ea.Q, {
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
function mv(e) {
    (0, K.openModalLazy)(async () => (t) => (0, E.jsx)(m_.default, { ...t, guildBoostSlot: e }));
}
function mj(e) {
    (0, K.openModalLazy)(async () => (t) => (0, E.jsx)(mI.default, { ...t, guildBoostSlotId: e.id }));
}
let mO = function (e) {
    let t,
        i,
        n,
        { guildBoostSlots: s } = e,
        l = (0, g.bG)([d4.A], () => d4.A.getPremiumTypeSubscription()),
        r = l?.isPausedOrPausePending === !0,
        { fractionalState: a } = (0, gp.A)(),
        o = (0, g.bG)([i7.Ay], () => i7.Ay.useReducedMotion),
        u = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
        d = a === sq.xc.FP_SUB_PAUSED,
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
                    !(0, gQ.I5)(s) && i++,
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
        p = null != l ? uT.Ay.getNumIncludedPremiumGuildSubscriptionSlots(l.planId) : 0,
        f = Math.max(0, p - m.length),
        N = h > p,
        _ = p === s.length,
        I = _ ? f : 1,
        C = S.useMemo(() => {
            let e = [];
            for (let t = 0; t < I; t++) e.push((0, E.jsx)(g2, { className: mb.YA, useReducedMotion: o }, t));
            return e;
        }, [I, o]),
        b = S.useMemo(() => A.find((e) => e.isAvailable()), [A]);
    if (0 === A.length) return null;
    let y = A.length;
    if (
        ((t = _
            ? j.intl.formatToPlainString(x ? j.t["3DW6Dc"] : j.t["/u15Qc"], { numUnappliedGuildBoostSlots: y })
            : j.intl.formatToPlainString(x ? j.t["3DW6Dc"] : j.t.BPadnO, { numUnappliedGuildBoostSlots: y })),
        uT.Ay.isPremium(u))
    ) {
        function v(e, t) {
            return (0, E.jsx)(
                en.D,
                {
                    className: mb.nw,
                    tag: "span",
                    onClick: () => {
                        (0, mC.e)();
                    },
                    children: e,
                },
                t,
            );
        }
        i = x
            ? j.intl.format(j.t.omcpSE, { learnMoreHook: v })
            : j.intl.format(j.t["5mAkVi"], { numUnappliedGuildBoostSlots: y, learnMoreHook: v });
    } else
        i = x
            ? j.intl.string(j.t["8pcUZi"])
            : j.intl.formatToPlainString(j.t.Kaw82o, { numUnappliedGuildBoostSlots: y });
    return (
        (n = r && a === sq.xc.NONE ? j.intl.string(j.t.mOWsF1) : j.intl.string(j.t.xr4m5B)),
        (0, E.jsx)("div", {
            className: mb.iE,
            children: (0, E.jsxs)("div", {
                className: e6()(mb.Qs, [mb.Yq]),
                children: [
                    (0, E.jsxs)("div", {
                        className: mb.wx,
                        children: [
                            (0, E.jsxs)("div", {
                                className: mb.RW,
                                children: [
                                    (0, E.jsx)("div", { className: mb.PS, children: C }),
                                    (0, E.jsxs)("div", {
                                        className: mb.__invalid_headerCopy,
                                        children: [
                                            (0, E.jsx)(eP.D, {
                                                className: mb.gg,
                                                variant: "heading-lg/bold",
                                                children: t,
                                            }),
                                            (0, E.jsx)(es.E, {
                                                className: mb.__invalid_headerSubheading,
                                                color: "text-strong",
                                                variant: "text-sm/normal",
                                                children: i,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, E.jsx)("div", {
                                className: mb.di,
                                children: (0, E.jsx)(mm.A, {
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
                                                          (0, K.openModalLazy)(
                                                              async () => (e) =>
                                                                  (0, E.jsx)(mN.default, {
                                                                      ...e,
                                                                      guildBoostSlots: [b],
                                                                      locationSection: U.JJy.SETTINGS_PREMIUM,
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
                            className: mb.LU,
                            children: A.map((e) =>
                                (0, E.jsx)(
                                    my,
                                    {
                                        guildBoostSlot: e,
                                        isCancellable: N,
                                        onCancel: mv,
                                        onUncancel: mj,
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
var mR = i(902611);
function mD(e) {
    let { premiumSubscription: t } = e,
        i = (0, g.bG)([gY.A], () => gY.A.boostSlots),
        n = S.useMemo(() => Object.values(i), [i]),
        s = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
        l = uT.Ay.isPremium(s, sq.PremiumTypes.TIER_2),
        r = (0, g.bG)([gX.A], () => gX.A.affinities),
        a = (0, g.bG)([eg.Ay], () => eg.Ay.getFlattenedGuildIds()),
        o = r.length > 0 || a.length > 0,
        u = n.length > 0,
        d = S.useMemo(() => n.filter((e) => null != e.premiumGuildSubscription), [n]),
        c = d.length > 0,
        m = n.length > d.length,
        A = (0, g.bG)([gx.A], () => gx.A.getCurrentUserAppliedBoosts()),
        { fractionalState: h } = (0, gp.A)({ forceFetch: !0 }),
        T = s?.isPremiumGroupMember(),
        x = t?.isPausedOrPausePending === !0 && h === sq.xc.NONE,
        p = t?.isPausedOrPausePending !== !0 && h === sq.xc.NONE && !T,
        f = l && h === sq.xc.FP_SUB_PAUSED,
        N = h === sq.xc.NONE && !T;
    return (0, E.jsxs)("div", {
        className: mR.GO,
        children: [
            (0, E.jsx)(ci.kb, { className: mR.ek }),
            (0, E.jsx)(mu, { hasGuildBoostSlots: u, hasAppliedGuildBoosts: c, hasBoostPerk: f, canAddBoosts: p }),
            N &&
                (0, E.jsx)(mf, {
                    hasAppliedGuildBoosts: c,
                    hasBoostPerk: f,
                    hasGuildAffinitiesOrInGuild: o,
                    subscriptionIsPausedOrPausePending: x,
                }),
            T && (0, E.jsx)(gz.A, {}),
            !o && (0, E.jsx)(mg, {}),
            t?.isPaused && h !== sq.xc.FP_SUB_PAUSED
                ? (0, E.jsx)(mr, { appliedGuildBoosts: A, premiumSubscription: t })
                : (0, E.jsx)(ma, { guildBoostSlots: i, premiumSubscription: t }),
            (0, E.jsx)(mO, { guildBoostSlots: n, fractionalPremiumState: h }),
            (0, E.jsx)(mx, { canAddBoosts: c && p, canApplyBoosts: m }),
            (0, E.jsx)(gF, { className: mR.e4, hideHeading: !0, hideTier0: !0 }),
            (0, E.jsx)(gy, { cardClassName: mR.KW }),
            (0, E.jsx)(gR, { className: mR.JL }),
        ],
    });
}
var mL = i(527113),
    mP = i(365199),
    mG = i(562094);
function mM(e) {
    let { guild: t, className: i } = e,
        { total: n } = (0, g8.A)(t.id);
    return (0, E.jsxs)("div", {
        className: i ?? mG.OA,
        children: [
            (0, E.jsx)(g4.Ay, { className: mG.$f, guild: t, size: g4.Ay.Sizes.MEDIUM }),
            (0, E.jsxs)("div", {
                className: mG.gI,
                children: [
                    (0, E.jsx)(es.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, E.jsxs)("div", {
                        className: mG.ew,
                        children: [
                            (0, E.jsxs)("div", {
                                className: mG.QW,
                                children: [
                                    (0, E.jsx)(gA._, {
                                        className: mG.Wz,
                                        color: er.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                                    }),
                                    (0, E.jsx)(es.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: j.intl.format(j.t["pob/cL"], { subscriptions: n }),
                                    }),
                                ],
                            }),
                            t.premiumTier !== U.TVA.NONE &&
                                (0, E.jsxs)(E.Fragment, {
                                    children: [
                                        (0, E.jsx)("div", { className: mG.zk }),
                                        (0, E.jsx)(es.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, gQ.gb)(t.premiumTier, { useLevels: !1 }),
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
function mU(e) {
    let { guildId: t } = e,
        i = (0, g.bG)([ec.A], () => ec.A.getGuild(t), [t]);
    return null == i
        ? null
        : (0, E.jsxs)("div", {
              className: mG.Nr,
              children: [
                  (0, E.jsx)(mM, { guild: i }),
                  (0, E.jsx)(eG.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: gA._,
                      text: j.intl.string(j.t.aBHecF),
                      onClick: () => {
                          (0, mh.g)({
                              analyticsLocations: [],
                              analyticsLocation: {
                                  page: U.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                  section: U.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                  object: U.ZSU.BUTTON_CTA,
                                  objectType: U.AnalyticsObjectTypes.BUY,
                              },
                              guild: i,
                          });
                      },
                  }),
              ],
          });
}
var mV = i(182);
let mk =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function mw(e) {
    let { slot: t, guildTier: i, premiumSubscription: n, hasCancelableSlots: s, isLast: l } = e,
        r = S.useRef(null),
        a = (0, gQ.I5)(t),
        o = S.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, gp.A)(),
        c = S.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === U.TVA.NONE) return "";
                    let i = [
                        j.intl.formatToPlainString(j.t["dLlKX/"], { numEmojiSlots: sq.TG[e].limits.emoji }),
                        j.intl.formatToPlainString(j.t["+ANIfv"], { numStickerSlots: sq.TG[e].limits.stickers }),
                        j.intl.formatToPlainString(j.t["4gt60b"], {
                            numSoundboardSlots: sq.TG[e].limits.soundboardSounds,
                        }),
                        j.intl.formatToPlainString(j.t.XahSjZ, {
                            resolution: sq.TG[e].limits.screenShareQualityResolution,
                            framerate: sq.TG[e].limits.screenShareQualityFramerate,
                        }),
                        j.intl.formatToPlainString(j.t.NbNs7S, { bitrate: sq.TG[e].limits.bitrate / 1e3 }),
                        j.intl.formatToPlainString(j.t.VVKcpn, { filesize: sq.TG[e].limits.fileSize / 1024 / 1024 }),
                        j.intl.formatToPlainString(j.t.TbpCvv, { numVideoStageSeats: sq.TG[e].limits.stageVideoUsers }),
                        j.intl.string(j.t.LDyX3i),
                        j.intl.string(j.t.YtGlPW),
                    ];
                    e >= U.TVA.TIER_2 && (i.push(j.intl.string(j.t.SztbtN)), i.push(j.intl.string(j.t["3GK91n"]))),
                        e >= U.TVA.TIER_3 && i.push(j.intl.string(j.t["XUUJd+"]));
                    let n = 0;
                    for (let e = 0; e < t.length; e++) n = (31 * n + t.charCodeAt(e)) | 0;
                    let s = i[Math.abs(n) % i.length];
                    return j.intl.formatToPlainString(j.t["/dOAmQ"], { perk: s });
                })(i, t.id),
            [i, t.id],
        ),
        g = S.useMemo(() => {
            if ("" !== c) return c;
            let e = null != t.premiumGuildSubscription ? dD.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return j.intl.formatToPlainString(j.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        m = S.useMemo(
            () => (a ? (n.isPausedForFractionalPremium ? d.endsAt.toDate() : n.currentPeriodEnd) : null),
            [a, n, d],
        );
    return (0, E.jsxs)("div", {
        className: e6()(mV.iq, { [mV.Mt]: l }),
        children: [
            (0, E.jsxs)("div", {
                className: mV.kd,
                children: [
                    (0, E.jsx)("img", { alt: "", className: mV.bB, src: mk }),
                    a && null != m
                        ? (0, E.jsx)(es.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: j.intl.format(j.t.Z4ULRD, { date: m }),
                          })
                        : (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(es.E, { variant: "text-sm/medium", color: "text-subtle", children: g }),
                                  u &&
                                      null != o &&
                                      (0, E.jsxs)(E.Fragment, {
                                          children: [
                                              (0, E.jsx)("div", { className: mV.zk }),
                                              (0, E.jsx)(es.E, {
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
                                              (0, E.jsx)("div", { className: mV.zk }),
                                              (0, E.jsx)(es.E, {
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
            (0, E.jsx)(ee.Y, {
                targetElementRef: r,
                renderPopout: (e) => {
                    let { closePopout: i } = e;
                    return (0, E.jsx)(gq, {
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
                    (0, E.jsx)(en.D, {
                        innerRef: r,
                        "aria-label": j.intl.string(j.t.PdRCRg),
                        className: mV.Mj,
                        ...e,
                        children: (0, E.jsx)(mP.j, { size: "xs", color: er.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                    }),
            }),
        ],
    });
}
function mB(e) {
    let { guildId: t, slots: i, premiumSubscription: n, hasCancelableSlots: s } = e,
        l = (0, g.bG)([ec.A], () => ec.A.getGuild(t), [t]);
    return (0, E.jsxs)("div", {
        className: mV.Nr,
        children: [
            (0, E.jsx)("div", {
                className: mV.MY,
                children:
                    null != l
                        ? (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(mM, { guild: l, className: mV.OA }),
                                  (0, E.jsx)(eG.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: j.intl.string(j.t.KLOhbO),
                                      onClick: () => {
                                          (0, sH.default)(),
                                              (0, g7.K4)({
                                                  guildId: l.id,
                                                  location: {
                                                      section: U.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA,
                                                  },
                                              });
                                      },
                                  }),
                              ],
                          })
                        : (0, E.jsx)("div", {
                              className: mV.OA,
                              children: (0, E.jsx)(eP.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: j.intl.string(j.t["6Kwwuo"]),
                              }),
                          }),
            }),
            i.map((e, t) =>
                (0, E.jsx)(
                    mw,
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
function mF(e) {
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
                                gJ.A.createFromServer(
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
                if ((!(0, gQ.I5)(n) && e++, null != n.premiumGuildSubscription)) {
                    let e = n.premiumGuildSubscription.guildId;
                    e in l || (l[e] = []), l[e].push(n);
                }
            }
            return { boostsByGuildId: l, numActiveSlots: e };
        }, [t, s, n, i]);
    if (null == i || 0 === Object.keys(l).length) return null;
    let a = r > uT.Ay.getNumIncludedPremiumGuildSubscriptionSlots(i.planId);
    return (0, E.jsx)("div", {
        className: mV.kR,
        children: dD.default
            .keys(l)
            .map((e) => (0, E.jsx)(mB, { guildId: e, slots: l[e], premiumSubscription: i, hasCancelableSlots: a }, e)),
    });
}
var mz = i(383507);
function mX(e) {
    let { guildBoostSlots: t, fractionalPremiumState: n } = e,
        s = (0, g.bG)([d4.A], () => d4.A.getPremiumTypeSubscription()),
        { unappliedSlots: l, numActiveSlots: r } = S.useMemo(() => {
            let e = [],
                i = 0;
            for (let n of t) !(0, gQ.I5)(n) && i++, null == n.premiumGuildSubscription && e.push(n);
            return { unappliedSlots: e, numActiveSlots: i };
        }, [t]),
        a = r > (null != s ? uT.Ay.getNumIncludedPremiumGuildSubscriptionSlots(s.planId) : 0),
        o = s?.isPausedOrPausePending === !0 && n === sq.xc.NONE;
    return 0 === l.length
        ? null
        : (0, E.jsxs)("div", {
              className: mz.Nr,
              children: [
                  (0, E.jsxs)("div", {
                      className: mz.MY,
                      children: [
                          (0, E.jsxs)("div", {
                              className: mz._L,
                              children: [
                                  (0, E.jsxs)("div", {
                                      className: mz.MD,
                                      children: [
                                          (0, E.jsx)("img", { alt: "", className: mz.F8, src: mk }),
                                          (0, E.jsx)("div", {
                                              className: e6()(mz.qS, "theme-dark"),
                                              children: (0, E.jsx)("span", { className: mz.Vv, children: l.length }),
                                          }),
                                      ],
                                  }),
                                  (0, E.jsxs)("div", {
                                      className: mz.Qp,
                                      children: [
                                          (0, E.jsx)(es.E, {
                                              variant: "heading-md/semibold",
                                              color: "text-default",
                                              tag: "span",
                                              children: j.intl.format(j.t.BPadnO, {
                                                  numUnappliedGuildBoostSlots: l.length,
                                              }),
                                          }),
                                          (0, E.jsx)(es.E, {
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
                          (0, E.jsx)(mm.A, {
                              shouldShow: o,
                              text: j.intl.string(j.t.mOWsF1),
                              "aria-label": j.intl.string(j.t.mOWsF1),
                              children: (e) =>
                                  (0, E.jsx)(eG.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: gA._,
                                      text: j.intl.string(j.t.BMx1iy),
                                      disabled: o,
                                      onClick: () => {
                                          (0, K.openModalLazy)(async () => {
                                              let { default: e } = await Promise.resolve().then(i.bind(i, 770101));
                                              return (t) =>
                                                  (0, E.jsx)(e, {
                                                      ...t,
                                                      onSelectGuild: (e) => {
                                                          t.onClose(),
                                                              (0, mh.g)({
                                                                  analyticsLocations: [],
                                                                  analyticsLocation: {
                                                                      page: U.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                                      section: U.JJy.SETTINGS_PREMIUM,
                                                                      object: U.ZSU.BUTTON_CTA,
                                                                      objectType: U.AnalyticsObjectTypes.BUY,
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
                          mY,
                          {
                              slot: e,
                              isLast: t === l.length - 1,
                              isCancelable: a && !(0, gQ.I5)(e),
                              isCanceled: (0, gQ.I5)(e),
                              premiumSubscription: s,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function mY(e) {
    let t,
        { slot: i, isLast: n, isCancelable: s, isCanceled: l, premiumSubscription: r, modificationsDisabled: a } = e,
        o = S.useRef(null),
        u = S.useMemo(() => (null != i.cooldownEndsAt ? new Date(i.cooldownEndsAt) : null), [i.cooldownEndsAt]);
    t =
        l && null != r
            ? (0, E.jsx)(es.E, {
                  variant: "text-sm/medium",
                  color: "text-subtle",
                  children: j.intl.format(j.t.Z4ULRD, { date: r.currentPeriodEnd }),
              })
            : i.isOnCooldown() && null != u
              ? (0, E.jsx)(g0, { cooldown: u.getTime() })
              : (0, E.jsx)(es.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: j.intl.string(j.t["2mcafz"]),
                });
    let d = s || l;
    return (0, E.jsxs)("div", {
        className: e6()(mz.iq, { [mz.Mt]: n }),
        children: [
            (0, E.jsxs)("div", {
                className: mz.kd,
                children: [(0, E.jsx)("img", { alt: "", className: mz.bB, src: mk }), t],
            }),
            d &&
                (0, E.jsx)(ee.Y, {
                    targetElementRef: o,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, E.jsxs)(et.W, {
                            navId: "unapplied-boost-actions",
                            "aria-label": j.intl.string(j.t.ogxXGq),
                            onSelect: void 0,
                            onClose: t,
                            children: [
                                s &&
                                    (0, E.jsx)(ei.Dr, {
                                        id: "cancel-boost",
                                        label: j.intl.string(j.t.twFU3R),
                                        color: "danger",
                                        disabled: a,
                                        subtext: a ? j.intl.string(j.t.mOWsF1) : void 0,
                                        action: () => {
                                            t(),
                                                (0, K.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, E.jsx)(m_.default, { ...e, guildBoostSlot: i }),
                                                );
                                        },
                                    }),
                                l &&
                                    (0, E.jsx)(ei.Dr, {
                                        id: "uncancel-boost",
                                        label: j.intl.string(j.t["2glQNp"]),
                                        disabled: a,
                                        subtext: a ? j.intl.string(j.t.mOWsF1) : void 0,
                                        action: () => {
                                            t(),
                                                (0, K.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, E.jsx)(mI.default, { ...e, guildBoostSlotId: i.id }),
                                                );
                                        },
                                    }),
                            ],
                        });
                    },
                    align: "right",
                    position: "bottom",
                    children: (e) =>
                        (0, E.jsx)(en.D, {
                            innerRef: o,
                            "aria-label": j.intl.string(j.t["UKOtz+"]),
                            className: mz.Mj,
                            ...e,
                            children: (0, E.jsx)(mP.j, { size: "xs", color: er.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                        }),
                }),
        ],
    });
}
var mH = i(931037);
function mK(e) {
    let {
            guildBoostSlots: t,
            guildBoostSlotsByGuildId: i,
            premiumSubscription: n,
            pausedAppliedGuildBoosts: s,
            fractionalPremiumState: l,
        } = e,
        r = tN.A.getArticleURL(U.MVz.GUILD_BOOSTING_FAQ),
        a = n?.isPaused === !0 && l !== sq.xc.FP_SUB_PAUSED,
        o = t.some((e) => null == e.premiumGuildSubscription),
        u = a && s.length > 0,
        d = a ? u : t.some((e) => null != e.premiumGuildSubscription);
    return o || d
        ? (0, E.jsxs)("div", {
              className: mH.i,
              children: [
                  (0, E.jsxs)("div", {
                      className: mH.b,
                      children: [
                          (0, E.jsx)(eP.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.W5rDjW) }),
                          (0, E.jsx)(es.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: j.intl.format(j.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, E.jsx)(mF, {
                      guildBoostSlots: i,
                      premiumSubscription: n,
                      pausedAppliedGuildBoosts: s,
                      isPaused: a,
                  }),
                  (0, E.jsx)(mX, { guildBoostSlots: t, fractionalPremiumState: l }),
              ],
          })
        : null;
}
var mW = i(917064),
    mZ = i(344145);
function mQ() {
    return (0, E.jsxs)("div", {
        className: mZ.iE,
        children: [
            (0, E.jsx)(eP.D, { variant: "heading-xl/normal", children: j.intl.string(j.t.IzKs3o) }),
            (0, E.jsx)("div", {
                className: mZ.kR,
                children: mW.s.map((e, t) => {
                    let i = e.icon;
                    return (0, E.jsxs)(
                        "div",
                        {
                            className: mZ.Nr,
                            children: [
                                (0, E.jsx)(i, { className: mZ.Kk }),
                                (0, E.jsx)(es.E, {
                                    className: mZ.h_,
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
var mq = i(232122),
    mJ = i(177547);
function m$() {
    let [e, t] = S.useState(null),
        [i, n] = S.useState(null);
    return (0, E.jsxs)("div", {
        className: mJ.iE,
        children: [
            (0, E.jsx)(eP.D, { variant: "heading-xl/normal", children: j.intl.string(j.t.HPJ6Nj) }),
            (0, E.jsx)("ul", {
                className: mJ.p_,
                children: mq.m.map((s, l) => {
                    let r = e === l,
                        a = i === l,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, E.jsxs)(
                        en.D,
                        {
                            tag: "li",
                            className: e6()(mJ.Aw, { [mJ.$K]: r }),
                            onClick: () => t((e) => (e === l ? null : l)),
                            onMouseEnter: () => n(l),
                            onMouseLeave: () => n(null),
                            children: [
                                (0, E.jsxs)("div", {
                                    className: mJ.k7,
                                    children: [
                                        (0, E.jsx)(es.E, {
                                            className: mJ.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: s.getQuestion(),
                                        }),
                                        (0, E.jsx)(el.a, {
                                            size: "sm",
                                            color: er.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: mJ.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, E.jsx)(es.E, {
                                        className: mJ.ZF,
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
var m0 = i(182859),
    m1 = i(645704),
    m2 = i(367738);
function m3() {
    let e = tN.A.getArticleURL(U.MVz.GUILD_SUBSCRIPTIONS);
    return (0, E.jsxs)("div", {
        className: m2.wx,
        children: [
            (0, E.jsxs)("div", {
                className: m2.Qs,
                children: [
                    (0, E.jsxs)("div", {
                        className: m2.B5,
                        children: [
                            (0, E.jsx)("img", { alt: "", className: m2.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, E.jsx)(eP.D, {
                                variant: "heading-xl/normal",
                                children: j.intl.string(m1.default.hjvcLO),
                            }),
                        ],
                    }),
                    (0, E.jsx)(es.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: j.intl.format(j.t.TUHyoA, { helpdeskArticle: e }),
                    }),
                ],
            }),
            (0, E.jsx)(m0.A, {
                variant: "member",
                className: m2.iO,
                analyticsLocation: {
                    page: U.liQ.GUILD_BOOSTING_USER_SETTINGS,
                    section: U.JJy.HERO,
                    object: U.ZSU.CARD,
                },
                videoPlacement: "settings_header",
            }),
        ],
    });
}
var m6 = i(315629),
    m4 = i(922482);
function m7() {
    let e = (0, g.bG)([io.default], () => io.default.getCurrentUser());
    if (null == e || uT.Ay.hasFreeBoosts(e)) return null;
    let t = tN.A.getArticleURL(U.MVz.GUILD_BOOSTING_FAQ);
    return (0, E.jsxs)(m6.h, {
        color: "nitro-pink",
        className: m4.vK,
        children: [
            (0, E.jsxs)("div", {
                className: m4.nw,
                children: [
                    (0, E.jsx)("img", { alt: "", className: m4.q3, src: mk }),
                    (0, E.jsxs)("div", {
                        className: m4.Tm,
                        children: [
                            (0, E.jsx)(es.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: j.intl.format(j.t.Idh1Vs, { count: sq.M4, boostCount: sq.M4 }),
                            }),
                            (0, E.jsxs)("div", {
                                className: m4.xv,
                                children: [
                                    (0, E.jsx)(uu.t, { className: m4.nE }),
                                    (0, E.jsx)(es.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: j.intl.format(j.t["6UAu+f"], {
                                            count: sq.M4,
                                            boostCount: sq.M4,
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
                icon: uu.t,
                text: j.intl.string(j.t["8x0jKT"]),
                onClick: mC.e,
            }),
        ],
    });
}
var m5 = i(287870);
function m8() {
    let e = (0, g.bG)([gX.A], () => gX.A.affinities),
        t = (0, g.bG)([eg.Ay], () => eg.Ay.getFlattenedGuildIds()),
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
              className: m5.i,
              children: [
                  (0, E.jsx)(eP.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.r90Wgo) }),
                  (0, E.jsx)("div", { className: m5.k, children: i.map((e) => (0, E.jsx)(mU, { guildId: e }, e)) }),
              ],
          });
}
var m9 = i(617069);
function Ae(e) {
    let { count: t, disabledReason: n } = e,
        s = tN.A.getArticleURL(U.MVz.GUILD_BOOSTING_FAQ);
    return (0, E.jsxs)(m6.h, {
        color: "nitro-pink",
        className: m9.vK,
        children: [
            (0, E.jsxs)("div", {
                className: m9.nw,
                children: [
                    (0, E.jsxs)("div", {
                        className: m9.MD,
                        children: [
                            (0, E.jsx)("img", { alt: "", className: m9.F8, src: mk }),
                            (0, E.jsx)("div", {
                                className: e6()(m9.qS, "theme-dark"),
                                children: (0, E.jsx)("span", { className: m9.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, E.jsxs)("div", {
                        className: m9.Tm,
                        children: [
                            (0, E.jsx)(es.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: j.intl.format(j.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, E.jsxs)("div", {
                                className: m9.xv,
                                children: [
                                    (0, E.jsx)(uu.t, { className: m9.nE }),
                                    (0, E.jsx)(es.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: j.intl.format(j.t["6UAu+f"], {
                                            count: sq.M4,
                                            boostCount: sq.M4,
                                            helpdeskArticle: s,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)(mm.A, {
                shouldShow: null != n,
                text: n ?? "",
                "aria-label": n,
                children: (e) =>
                    (0, E.jsx)(eG.$, {
                        ...e,
                        variant: "primary",
                        size: "sm",
                        icon: gA._,
                        text: j.intl.string(j.t.BMx1iy),
                        disabled: null != n,
                        onClick: () => {
                            (0, K.openModalLazy)(async () => {
                                let { default: e } = await Promise.resolve().then(i.bind(i, 770101));
                                return (t) =>
                                    (0, E.jsx)(e, {
                                        ...t,
                                        onSelectGuild: (e) => {
                                            t.onClose(),
                                                (0, mh.g)({
                                                    analyticsLocations: [],
                                                    analyticsLocation: {
                                                        page: U.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                        section: U.JJy.SETTINGS_PREMIUM,
                                                        object: U.ZSU.BUTTON_CTA,
                                                        objectType: U.AnalyticsObjectTypes.BUY,
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
function At(e) {
    let { premiumSubscription: t } = e,
        i = (0, g.bG)([gY.A], () => gY.A.boostSlots),
        n = S.useMemo(() => Object.values(i), [i]),
        s = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
        l = (0, g.bG)([gX.A], () => gX.A.affinities),
        r = (0, g.bG)([eg.Ay], () => eg.Ay.getFlattenedGuildIds()),
        a = l.length > 0 || r.length > 0,
        o = S.useMemo(() => n.filter((e) => null != e.premiumGuildSubscription), [n]).length,
        u = (0, g.bG)([gx.A], () => gx.A.getCurrentUserAppliedBoosts()),
        { fractionalState: d } = (0, gp.A)({ forceFetch: !0 }),
        c = s?.isPremiumGroupMember(),
        m = t?.isPausedOrPausePending === !0 && d === sq.xc.NONE,
        A = S.useMemo(() => n.some((e) => null == e.premiumGuildSubscription && e.isAvailable()), [n]),
        h = m ? j.intl.string(j.t.mOWsF1) : A ? void 0 : j.intl.string(j.t.xr4m5B),
        T = S.useMemo(() => {
            if (null == t) return 0;
            let e = uT.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== n.length ? 0 : Math.max(0, e - o);
        }, [t, n.length, o]);
    return (0, E.jsxs)("div", {
        className: mR.GO,
        children: [
            (0, E.jsx)(ci.kb, { className: mR.ek }),
            (0, E.jsx)(m3, {}),
            (0, E.jsx)(m7, {}),
            T > 0 && (0, E.jsx)(Ae, { count: T, disabledReason: h }),
            c && (0, E.jsx)(gz.A, {}),
            !a && (0, E.jsx)(mg, {}),
            (0, E.jsxs)("div", {
                className: mR.C_,
                children: [
                    (0, E.jsx)(mK, {
                        guildBoostSlots: n,
                        guildBoostSlotsByGuildId: i,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: u,
                        fractionalPremiumState: d,
                    }),
                    (0, E.jsx)(m8, {}),
                    (0, E.jsx)(mL.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, E.jsx)(mQ, {}),
                    (0, E.jsx)(m$, {}),
                ],
            }),
        ],
    });
}
var Ai = i(283044);
let An = (0, a.E2)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            let e = gT.useConfig({ location: "UserSettingsPremiumGuildSubscriptions" }).enabled;
            S.useEffect(() => {
                sa.h.wait(() => {
                    db.hP(), db.$o(), (0, gh.CD)(), (0, gE.zS)(null, null, U.tF5.DISCOVERY), (0, gh.tO)(!0);
                });
            }, []);
            let { hasFetchedSubscriptions: t, premiumSubscription: i } = (0, g.cf)([d4.A], () => ({
                    hasFetchedSubscriptions: d4.A.hasFetchedSubscriptions(),
                    premiumSubscription: d4.A.getPremiumTypeSubscription(),
                })),
                n = (0, gS.Y)(),
                s = (0, g.bG)([d6.A], () => d6.A.hasFetchedPaymentSources),
                l = (0, g.bG)([gx.A], () => gx.A.isFetchingCurrentUserAppliedBoosts),
                r = !t || !n || !s || l,
                [a, o] = S.useState(!1);
            return (r || a || o(!0), r && !a)
                ? (0, E.jsx)("div", { className: e6()(Ai.kL, Ai.Lq), children: (0, E.jsx)(dp.y, {}) })
                : (0, E.jsxs)("div", {
                      className: Ai.kL,
                      children: [
                          (0, E.jsx)("div", { className: Ai.Tp }),
                          (0, E.jsx)("div", {
                              className: Ai.Qs,
                              children: e
                                  ? (0, E.jsx)(At, { premiumSubscription: i })
                                  : (0, E.jsx)(mD, { premiumSubscription: i }),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t["+CbP2v"]), j.intl.string(j.t.Nn1lJy)],
    }),
    As = (0, a.zZ)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [An] }),
    Al = (0, a.t_)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => j.intl.string(j.t["+CbP2v"]),
        buildLayout: () => [As],
    }),
    Ar = (0, a.i4)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["+CbP2v"]),
        icon: gA._,
        buildLayout: () => [Al],
    });
var Aa = i(153659),
    Ao = i(155984),
    Au = i(357758),
    Ad = i(262077),
    Ac = i(696986),
    Ag = i(811923);
function Am(e) {
    let { onClickManageSubscription: t, count: i } = e;
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsx)(eP.D, { variant: "heading-md/bold", children: j.intl.string(j.t["KzCF/6"]) }),
            (0, E.jsx)(Ac.h, { size: 4 }),
            (0, E.jsx)(es.E, { variant: "text-md/normal", className: Ag.yV, children: j.intl.string(j.t["3D7qCu"]) }),
            (0, E.jsx)(Ac.h, { size: 24 }),
            (0, E.jsxs)("div", {
                className: Ag.Nr,
                children: [
                    (0, E.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: Ag.RI }),
                    (0, E.jsxs)("div", {
                        className: Ag.FS,
                        children: [
                            (0, E.jsx)(eP.D, {
                                variant: "heading-xl/semibold",
                                className: Ag.wx,
                                children: j.intl.string(j.t["KzCF/6"]),
                            }),
                            (0, E.jsx)(es.E, {
                                variant: "text-md/normal",
                                className: Ag.h_,
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
var AA = i(872351),
    Ah = i(9113),
    AE = i(599941),
    AS = i(384684),
    AT = i(2242);
let Ax = [];
var Ap = i(912851),
    Af = i(990699);
let AN = function (e) {
    let { label: t, onClick: i, submitting: n } = e;
    return (0, E.jsx)(en.D, {
        onClick: n ? void 0 : i,
        className: Af.x6,
        children: (0, E.jsxs)("div", {
            className: Af.hQ,
            children: [
                n
                    ? (0, E.jsx)(dp.y, { type: dp.y.Type.PULSING_ELLIPSIS, className: Af.__invalid_spinner })
                    : (0, E.jsx)(es.E, { variant: "text-md/medium", className: Af.Pf, children: t }),
                (0, E.jsx)(el.a, { size: "md", color: "currentColor", className: Af.UE }),
            ],
        }),
    });
};
var A_ = i(465932),
    AI = i(543767),
    AC = i(420139),
    Ab = i(790284),
    Ay = i(636194),
    Av = i(624456),
    Aj = i(710144),
    AO = i(815332),
    AR = i(162093),
    AD = i(111789);
let AL = (e) => {
    let { transitionState: t, groupListing: i, listing: n, subscription: s, onClose: l } = e,
        r = (0, sZ.GV)(),
        { analyticsLocations: a } = (0, nZ.Ay)(e1.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: o,
            error: u,
            submitting: d,
        } = (function (e) {
            let [t, i] = S.useState(!1),
                [n, s] = S.useState(null);
            return {
                cancelSubscription: async function (t) {
                    try {
                        return i(!0), await db.M2(t, e), !0;
                    } catch (e) {
                        s(e);
                    } finally {
                        i(!1);
                    }
                },
                error: n,
                submitting: t,
            };
        })(a);
    async function c() {
        (await o(s.id)) && l();
    }
    let g = n.role_benefits.benefits.filter((e) => e.ref_type === AT.bN.CHANNEL),
        m = n.role_benefits.benefits.filter((e) => e.ref_type === AT.bN.INTANGIBLE),
        A = r4()(s.currentPeriodEnd).format("MMMM Do, YYYY"),
        h = j.intl.formatToPlainString(j.t.KsMRP5, {
            numChannels: g.length,
            numAdditionalBenefits: m.length,
            subscriptionEndDate: A,
        });
    return (0, E.jsx)(l8.Modal, {
        transitionState: t,
        "aria-labelledby": r,
        actions: [
            { text: j.intl.string(j.t.EP6EPb), variant: "secondary", onClick: l },
            { variant: "critical-primary", text: j.intl.string(j.t.F6lUDF), onClick: c, loading: d },
        ],
        title: j.intl.string(j.t.O6l5tM),
        subtitle: h,
        onClose: l,
        children: (0, E.jsxs)(q.B, {
            gap: 8,
            children: [
                null != u ? (0, E.jsx)(Q.w, { type: "critical", children: u.message }) : null,
                (0, E.jsx)(AR.x, { listingId: n.id, guildId: i.guild_id, className: AD.P }),
            ],
        }),
    });
};
var AP = i(319225),
    AG = i(746080),
    AM = i(506117);
function AU(e) {
    let { label: t, value: i, showInfoIcon: n, infoIconTooltipText: s } = e;
    return (0, E.jsxs)("div", {
        className: AM.L0,
        children: [
            (0, E.jsxs)("div", {
                className: AM.a5,
                children: [
                    (0, E.jsx)(eP.D, { variant: "heading-deprecated-12/semibold", className: AM.HU, children: t }),
                    n &&
                        (0, E.jsx)(tr.m, {
                            text: s,
                            children: (0, E.jsx)(lJ.m, { size: "xs", color: "currentColor", className: AM.Mo }),
                        }),
                ],
            }),
            (0, E.jsx)(eP.D, { variant: "heading-xl/semibold", className: AM.sx, children: i }),
        ],
    });
}
function AV(e) {
    let { subscription: t } = e,
        { analyticsLocations: i } = (0, nZ.Ay)(),
        [n] = (0, AI.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: i,
            analyticsLocation: e1.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        s = (0, g.bG)([d6.A], () => d6.A.hasFetchedPaymentSources);
    return null != n && s ? (0, E.jsx)(AC.A, { subscription: t, currentInvoicePreview: n }) : (0, E.jsx)(dp.y, {});
}
function Ak(e) {
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
        : (0, E.jsx)(s4.D, {
              label: j.intl.string(j.t["4neDM+"]),
              children: (0, E.jsx)("div", {
                  className: AM.__invalid_rowButtons,
                  children: i
                      ? (0, E.jsx)(eG.$, {
                            variant: "primary",
                            text: j.intl.string(j.t.y3mAE4),
                            onClick: r,
                            loading: n,
                        })
                      : (0, E.jsxs)(E.Fragment, {
                            children: [
                                !t && !s && (0, E.jsx)(AN, { label: j.intl.string(j.t.FRbWR8), onClick: a }),
                                (0, E.jsx)(AN, { label: j.intl.string(j.t.Dx0lF7), onClick: l }),
                            ],
                        }),
              }),
          });
}
let Aw = function (e) {
    let { subscription: t } = e,
        {
            listing: i,
            groupListing: n,
            guild: s,
            expanded: l,
            handleToggleExpanded: r,
            subscriptionInfo: a,
        } = (function (e) {
            let t = (0, Av.M)(e),
                i = (0, g.bG)([Ay.A], () => Ay.A.getSubscriptionListingForPlan(t)),
                n = (0, g.bG)([Ay.A], () =>
                    null != i ? Ay.A.getSubscriptionGroupListingForSubscriptionListing(i.id) : null,
                ),
                s = (0, g.bG)([ec.A], () => ec.A.getGuild(n?.guild_id)),
                [l, r] = S.useState(!1),
                { fetchSubscriptionsSettings: a } = (0, AE.XE)();
            S.useEffect(() => {
                l && null != s && null == Ay.A.getSubscriptionSettings(s.id) && a(s.id);
            }, [l, s, a]);
            let o =
                null == i
                    ? void 0
                    : (function (e) {
                          let { subscription: t } = e,
                              i = r4()(t.currentPeriodEnd).format("M/D/YY"),
                              n = null != t.price ? (0, dO.$g)(t.price, t.currency) : "",
                              s = r4()(t.createdAt).format("M/D/YY"),
                              l = t.status === U.Dmq.CANCELED,
                              r = t.status === U.Dmq.PAST_DUE,
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
                handleToggleExpanded: function () {
                    return r((e) => !e);
                },
                listing: i,
                groupListing: n,
                subscriptionInfo: o,
            };
        })(t),
        [o, d] = S.useState(!1),
        c = (0, sZ.GV)(),
        { analyticsLocations: m } = (0, nZ.Ay)(),
        { shouldHideGuildPurchaseEntryPoints: A } = (0, A_.MH)(s?.id),
        h = t?.isPurchasedViaAppleGeneric;
    if (null == n || null == i || null == a) return null;
    async function T() {
        try {
            d(!0), await db.QP(t, m), (0, AP.E)({ title: j.intl.string(j.t.oPV2cy), body: j.intl.string(j.t.DdRizV) });
        } finally {
            d(!1);
        }
    }
    let {
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
        className: AM.kL,
        children: [
            (0, E.jsx)(Aj.A, {
                onClick: r,
                className: AM.N1,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: n } = e;
                    return (0, E.jsxs)(E.Fragment, {
                        children: [
                            null != s && (0, E.jsx)(g4.Ay, { guild: s, active: !0, size: g4.Ay.Sizes.MEDIUM }),
                            (0, E.jsxs)("div", {
                                className: AM.if,
                                children: [
                                    (0, E.jsx)(es.E, {
                                        variant: "text-md/medium",
                                        className: AM.J5,
                                        children: null != s ? s.name : j.intl.string(j.t["He+cmd"]),
                                    }),
                                    (0, E.jsxs)("div", {
                                        className: AM.xp,
                                        children: [
                                            (0, E.jsx)(es.E, {
                                                variant: "text-sm/normal",
                                                className: AM.KR,
                                                children: i.name,
                                            }),
                                            x
                                                ? (0, E.jsx)(sc.Lp, { text: j.intl.string(j.t["7uFZGt"]) })
                                                : C
                                                  ? (0, E.jsx)(sc.Lp, {
                                                        text: j.intl.string(j.t["6anton"]),
                                                        color: er.A.unsafe_rawColors.BRAND_500.css,
                                                    })
                                                  : p
                                                    ? (0, E.jsx)(tr.m, {
                                                          text: j.intl.string(j.t.eSuJE2),
                                                          children: (0, E.jsx)("div", {
                                                              children: (0, E.jsx)(sc.Lp, {
                                                                  className: AM.qc,
                                                                  text: j.intl.string(j.t.NrRwIl),
                                                                  color: er.A.unsafe_rawColors.YELLOW_300.css,
                                                              }),
                                                          }),
                                                      })
                                                    : null,
                                            h
                                                ? (0, E.jsx)(tr.m, {
                                                      text: j.intl.string(j.t.nv1IqK),
                                                      children: (0, E.jsx)("div", {
                                                          children: (0, E.jsx)(sc.Lp, {
                                                              text: j.intl.string(j.t["sBl3X/"]),
                                                              color: er.A.colors.BACKGROUND_MOD_MUTED.css,
                                                          }),
                                                      }),
                                                  })
                                                : null,
                                        ],
                                    }),
                                ],
                            }),
                            (0, E.jsx)(en.D, {
                                onClick: n(r),
                                "aria-label": j.intl.string(j.t.e5eQOy),
                                "aria-controls": c,
                                "aria-expanded": l,
                                focusProps: { ringTarget: t },
                                children: (0, E.jsx)(el.a, {
                                    size: "md",
                                    color: "currentColor",
                                    className: e6()(AM.D6, { [AM.S7]: l }),
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
                          (0, E.jsx)("div", { className: AM.yF }),
                          (0, E.jsx)(AO.A, { groupListingId: n.id, subscription: t, className: AM.kE }),
                          (0, E.jsxs)("div", {
                              className: AM.Zx,
                              children: [
                                  (0, E.jsx)(AU, { label: I, value: _ }),
                                  (0, E.jsx)(AU, {
                                      label: j.intl.string(j.t.dltUMH),
                                      value: f,
                                      showInfoIcon: C,
                                      infoIconTooltipText: C ? j.intl.string(j.t["/q6fpa"]) : void 0,
                                  }),
                                  (0, E.jsx)(AU, { label: j.intl.string(j.t.AOcwWB), value: N }),
                              ],
                          }),
                          (0, E.jsx)(Ac.h, { size: 16 }),
                          !x &&
                              !h &&
                              (0, E.jsx)(s4.D, {
                                  label: j.intl.string(j.t.wmMFvA),
                                  children: (0, E.jsx)(AV, { subscription: t }),
                              }),
                          !b &&
                              (0, E.jsx)(Ak, {
                                  isTrial: C,
                                  isCancelled: x,
                                  isResubscribing: o,
                                  shouldHideRoleSubscriptionEntryPoints: A,
                                  onCancelSubscriptionClick: () => {
                                      if (null != s) {
                                          var e;
                                          (e = { groupListing: n, listing: i, subscription: t }),
                                              (0, K.openModal)((t) => (0, E.jsx)(AL, { ...t, ...e }));
                                      }
                                  },
                                  onChangePlanClick: () => {
                                      null != s &&
                                          ((0, s7.pX)(U.BVt.CHANNEL(s.id, AG.VV.ROLE_SUBSCRIPTIONS)),
                                          (0, sH.default)(),
                                          Ap.A.show(
                                              U.kqX.BACK_TO_PREVIOUS_SCREEN,
                                              void 0,
                                              j.intl.string(j.t.DvbaM4),
                                              () => {
                                                  Ab.A.setState({ subsection: nw.nR }),
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
var AB = i(490144);
let AF = function (e) {
    let { onGoBack: t } = e,
        i = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, g.bG)([AS.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [AS.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                i = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (i = !0);
                            }),
                            i)
                                ? AT.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? AT.M_.NONE
                                  : AT.M_.IN_SUBSCRIPTION_SERVER;
                        })([AS.A]),
                    ) === AT.M_.SUBSCRIBED,
                i = (0, g.bG)([d4.A], () => d4.A.getActiveGuildSubscriptions()),
                n = S.useRef(!1);
            return (
                S.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: i, hasRoleSubscriptions: n } = e,
                            s = d4.A.getActiveGuildSubscriptions();
                        return (
                            ((s?.length ?? 0) === 0 && !!n) || (!!t && !i) || (!i && !d4.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: n.current }) &&
                        ((n.current = !0), db.hP());
                }, [e, t]),
                i ?? Ax
            );
        })(),
        { loading: n } = (0, AE.eb)(i);
    return ((0, Ah.A)(dL.Fr ? "role-subscriptions-user-setting" : void 0), n)
        ? (0, E.jsx)(dp.y, {})
        : 0 === i.length
          ? null
          : (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(eG.$, { text: j.intl.string(j.t.hqyhKQ), icon: AA.z, variant: "secondary", onClick: t }),
                    (0, E.jsx)(Ac.h, { size: 10 }),
                    (0, E.jsx)(i_.n, {
                        label: j.intl.string(j.t["KzCF/6"]),
                        description: j.intl.string(j.t["Y+ucR7"]),
                        children: (0, E.jsx)("div", {
                            className: AB.A,
                            children: i.map((e) => (0, E.jsx)(Aw, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var Az = i(327479),
    AX = i(289087);
function AY(e) {
    let { onClickManageSubscription: t, count: i } = e;
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsx)(eP.D, { variant: "heading-md/bold", children: j.intl.string(j.t["48ywCu"]) }),
            (0, E.jsx)(Ac.h, { size: 4 }),
            (0, E.jsx)(es.E, { variant: "text-md/normal", className: AX.yV, children: j.intl.string(j.t.VWxmSo) }),
            (0, E.jsx)(Ac.h, { size: 24 }),
            (0, E.jsxs)("div", {
                className: AX.Nr,
                children: [
                    (0, E.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: AX._e }),
                    (0, E.jsxs)("div", {
                        className: AX.FS,
                        children: [
                            (0, E.jsx)(eP.D, {
                                variant: "heading-xl/semibold",
                                className: AX.wx,
                                children: j.intl.string(j.t["48ywCu"]),
                            }),
                            (0, E.jsx)(es.E, {
                                variant: "text-md/normal",
                                className: AX.h_,
                                children: j.intl.format(j.t["/esXLj"], { numSubscriptions: i }),
                            }),
                        ],
                    }),
                    (0, E.jsx)(Az.A, { onClick: t, text: j.intl.string(j.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var AH = i(548411),
    AK = i(417098),
    AW = i(143582),
    AZ = i(915043),
    AQ = i(621591);
function Aq(e) {
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
        className: e6()(AQ.iE, t),
        children: [
            (0, E.jsx)("div", { className: e6()(AQ.wx, n), children: i }),
            l && (0, E.jsx)("div", { className: AQ.Qs, children: s }),
        ],
    });
}
var AJ = i(885996),
    A$ = i(144165),
    A0 = i(664121),
    A1 = i(950305),
    A2 = i(943775),
    A3 = i(123791),
    A6 = i(900797),
    A4 = i(5502);
let A7 = S.createContext({ isOpen: !1, toggleOpen: () => {} });
function A5(e) {
    let { children: t } = e,
        [i, n] = S.useReducer((e) => !e, !1),
        s = S.useMemo(() => ({ isOpen: i, toggleOpen: n }), [i]);
    return (0, E.jsx)(A7.Provider, { value: s, children: t(i) });
}
A5.Toggle = function (e) {
    let { className: t, text: i } = e,
        { isOpen: n, toggleOpen: s } = S.useContext(A7),
        l = n ? A6.t : el.a,
        r = null != i ? i : n ? j.intl.string(j.t.fgq1gs) : j.intl.string(j.t.XJuakA);
    return (0, E.jsxs)(en.D, {
        className: e6()(A4.L, t),
        onClick: s,
        children: [
            (0, E.jsx)(es.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, E.jsx)(l, { size: "sm", color: "currentColor" }),
        ],
    });
};
var A8 = i(243217),
    A9 = i(328968),
    he = i(163437),
    ht = i(473545);
function hi(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var hn = i(830595),
    hs = (((s = {})[(s.LOADING = 0)] = "LOADING"), (s[(s.DONE = 1)] = "DONE"), (s[(s.ERROR = 2)] = "ERROR"), s);
function hl(e) {
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
        } = (0, g.cf)([cX.A, cY.A, A9.A, ec.A], () => {
            let e,
                i = cX.A.get(r),
                n = null != i ? cY.A.get(i.skuId) : void 0,
                a = n?.applicationId,
                o = null != i ? A9.A.getForSKU(i.skuId) : null,
                u = null != o && (0, he.PJ)(o.skuFlags),
                d = u && null != s ? ec.A.getGuild(s) : void 0,
                c = (0, he.Uo)(t, n),
                g = u && null != s && null == d;
            if (!1 === c && null != l && l.items.length > 0) {
                let t = l.items[0];
                e = cX.A.get(t.planId) ?? void 0;
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
        f = S.useMemo(() => (null != p ? (0, A2.A)(p, 100) : null), [p]),
        N = m?.deleted ?? !1,
        _ = null != m && (0, he.Se)(m),
        I = t.status === U.Dmq.PAST_DUE,
        { analyticsLocations: C } = (0, nZ.Ay)(),
        [b] = (0, AI.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: C,
            analyticsLocation: e1.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        y = hi(t.currentPeriodEnd),
        v = 0 === n;
    return (0, E.jsxs)(Aq, {
        headerClassName: hn.dL,
        header:
            !1 === v
                ? (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsxs)("div", {
                              className: hn.VW,
                              children: [
                                  null != f &&
                                      (0, E.jsx)(A$._, { src: f.href, imageClassName: hn.Z2, width: 40, height: 40 }),
                                  (0, E.jsxs)("div", {
                                      className: hn.aF,
                                      children: [
                                          (0, E.jsx)(eP.D, {
                                              variant: "heading-md/semibold",
                                              lineClamp: 1,
                                              children: p?.name ?? j.intl.string(j.t["7kqy7W"]),
                                          }),
                                          (0, E.jsx)(es.E, {
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
                              className: hn.Pz,
                              children:
                                  null != p &&
                                  null != u &&
                                  null != m &&
                                  (0, E.jsx)(hd, {
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
                : (0, E.jsx)(dp.y, { type: dp.t.PULSING_ELLIPSIS }),
        children: [
            A &&
                (0, E.jsx)(hu, {
                    type: "warning",
                    title: _
                        ? j.intl.formatToPlainString(j.t.QOnM1y, { subscriptionPeriodEnd: y })
                        : j.intl.formatToPlainString(j.t.HOaZu8, { subscriptionPeriodEnd: y }),
                }),
            !A && h && (0, E.jsx)(hu, { type: "warning", title: j.intl.string(j.t.SmSP8Q) }),
            I && (0, E.jsx)(hu, { type: "danger", title: j.intl.string(j.t.fvOqBo) }),
            (0, E.jsxs)("div", {
                className: hn.zH,
                children: [
                    (0, E.jsx)(ho, {
                        title: j.intl.string(j.t["5D/KEH"]),
                        content: d
                            ? (0, E.jsxs)(E.Fragment, {
                                  children: [
                                      (0, E.jsxs)("span", {
                                          className: hn.yW,
                                          children: [(0, E.jsx)(A0.R, { size: "xs" }), j.intl.string(j.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, E.jsxs)("span", {
                                              className: hn._t,
                                              children: [
                                                  (0, E.jsx)(es.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: j.intl.format(j.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, E.jsx)(g4.Ay, { guild: c, size: g4.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, E.jsxs)("span", {
                                  className: hn.yW,
                                  children: [(0, E.jsx)(A1.n, { size: "xs" }), j.intl.string(j.t["6anEVv"])],
                              }),
                    }),
                    (0, E.jsx)(hr, { invoicePreview: b, subscriptionPlan: o }),
                    (0, E.jsx)(ho, {
                        title: j.intl.string(j.t.dnUzb6),
                        content: hi(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, E.jsx)(ha, { isCancelled: A, subscriptionPeriodEnd: y, renewalPlan: x }),
                ],
            }),
            (0, E.jsx)(hg, {
                subscription: t,
                currentInvoicePreview: b,
                loadingState: n,
                isDeleted: N,
                isCancelled: A,
            }),
            null != p &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, E.jsx)(hc, { appId: p.id, listingBenefits: u.benefits }),
        ],
    });
}
function hr(e) {
    let { subscriptionPlan: t, invoicePreview: i } = e;
    if (null == t) return (0, E.jsx)(ho, { title: j.intl.string(j.t.KI7ERx), content: "" });
    let n = (0, dO.CE)((0, dO.$g)(t.price, t.currency), t.interval, t.intervalCount),
        s = i?.findInvoiceItemByPlanId(t.id);
    if (null == s) return (0, E.jsx)(ho, { title: j.intl.string(j.t.KI7ERx), content: n });
    let l = (0, dO.CE)((0, dO.$g)(s.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, E.jsx)(ho, {
        title: j.intl.string(j.t.KI7ERx),
        content: (0, E.jsxs)(E.Fragment, {
            children: [
                (0, E.jsx)(es.E, { variant: "text-sm/semibold", children: l }),
                l !== n &&
                    (0, E.jsx)(tr.m, {
                        text: j.intl.format(j.t["6DoE57"], { listPrice: n }),
                        position: "bottom",
                        children: (0, E.jsx)(es.E, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: (0, E.jsx)("s", { children: n }),
                        }),
                    }),
            ],
        }),
    });
}
function ha(e) {
    let { isCancelled: t, subscriptionPeriodEnd: i, renewalPlan: n } = e;
    if (null != n) {
        let e = (0, dO.CE)((0, dO.$g)(n.price, n.currency), n.interval, n.intervalCount);
        return (0, E.jsx)(ho, {
            title: j.intl.string(j.t.hIhAM3),
            content: (0, E.jsxs)(E.Fragment, {
                children: [
                    (0, E.jsx)(es.E, { variant: "text-sm/medium", children: i }),
                    (0, E.jsx)(es.E, {
                        variant: "text-sm/normal",
                        children: j.intl.format(j.t.MCLbvj, { planName: n.name, price: e }),
                    }),
                ],
            }),
        });
    }
    return (0, E.jsx)(ho, { title: t ? j.intl.string(j.t.enxcAl) : j.intl.string(j.t["Ms+6Zq"]), content: i });
}
function ho(e) {
    let { title: t, content: i } = e;
    return (0, E.jsxs)("div", {
        className: hn.nM,
        children: [
            (0, E.jsx)(es.E, { variant: "text-sm/medium", children: t }),
            (0, E.jsx)(es.E, { variant: "text-sm/medium", className: hn.u4, children: i }),
        ],
    });
}
function hu(e) {
    let { type: t, title: i } = e;
    return (0, E.jsx)(tf.p, {
        messageType: "warning" === t ? tf.Y.WARNING : tf.Y.ERROR,
        className: hn.Xm,
        children: (0, E.jsx)(es.E, { variant: "text-sm/normal", children: i }),
    });
}
function hd(e) {
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
        c = (0, he.Se)(s),
        { analyticsLocations: m } = (0, nZ.Ay)(),
        [A, h] = S.useState(!1),
        T = (0, A3.C)(t.id),
        x = (0, g.bG)([cY.A], () => cY.A.getParentSKU(n.skuId), [n.skuId]),
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
        f = 0 !== p.length;
    async function N() {
        try {
            h(!0);
            let { subscription: e } = await (0, db.QP)(l, m);
            if (null == e) return;
            (0, K.openModalLazy)(async () => {
                let { default: t } = await Promise.all([i.e("85501"), i.e("52396")]).then(i.bind(i, 115623));
                return (i) => (0, E.jsx)(t, { ...i, storeListing: n, subscription: A8.A.createFromServer(e) });
            });
        } finally {
            h(!1);
        }
    }
    return (0, E.jsxs)("div", {
        className: hn.fw,
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
                        onClick: function () {
                            (0, K.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([i.e("58994"), i.e("22800")]).then(
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
function hc(e) {
    let { appId: t, listingBenefits: i } = e;
    return (0, E.jsx)(A5, {
        children: (e) =>
            (0, E.jsxs)("div", {
                className: hn.PX,
                children: [
                    (0, E.jsxs)("div", {
                        className: hn.wV,
                        children: [
                            e && (0, E.jsx)(es.E, { variant: "text-sm/semibold", children: j.intl.string(j.t.mORL67) }),
                            (0, E.jsx)(A5.Toggle, {
                                className: hn.Bh,
                                text: e ? j.intl.string(j.t.gsbFAw) : j.intl.string(j.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? i.map((e) => {
                              let { id: i, name: n, description: s, icon: l } = e;
                              return (0, E.jsx)(AJ.FY, { header: n, icon: (0, ht.N)(t, l), description: s }, i);
                          })
                        : null,
                ],
            }),
    });
}
function hg(e) {
    let { subscription: t, currentInvoicePreview: i, loadingState: n, isDeleted: s, isCancelled: l } = e;
    return null == i
        ? null
        : 0 === n
          ? (0, E.jsx)("div", {
                className: hn.Ji,
                children: (0, E.jsx)(s4.D, {
                    label: j.intl.string(j.t.azZaZa),
                    children: (0, E.jsx)(dp.y, { type: dp.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === n
            ? (0, E.jsx)("div", {
                  className: hn.Ji,
                  children: (0, E.jsxs)(AK.$T, {
                      color: AK.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          j.intl.format(j.t.IIHUUF, { subscriptionId: t.id }),
                          (0, E.jsx)("br", {}),
                          j.intl.format(j.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, E.jsx)("div", {
                  className: hn.Ji,
                  children: (0, E.jsx)(s4.D, {
                      label: j.intl.string(j.t.azZaZa),
                      children: (0, E.jsx)(AC.A, { subscription: t, currentInvoicePreview: i, disabled: s || l }),
                  }),
              });
}
var hm = (((l = {}).HOME = "HOME"), (l.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), l);
i(938796);
var hA = i(38405);
let hh = (0, g.UT)(cX.A, {
    getQueryId: U.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = cX.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && hA.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, gE.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var hE = i(240248),
    hS = i(237218),
    hT = i(763237);
function hx(e) {
    let { children: t, lineClamp: i = 2, ...n } = e,
        [s, l] = S.useState(!1),
        [r, a] = S.useState(null),
        o =
            null != r &&
            (0, E.jsx)("button", {
                className: hT.x6,
                onClick: () => l((e) => !e),
                children: (0, E.jsxs)(es.E, {
                    className: hT.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        s ? j.intl.string(j.t["JQX/Pb"]) : j.intl.string(j.t.Fbrd8J),
                        s
                            ? (0, E.jsx)(A6.t, { color: er.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, E.jsx)(el.a, { color: er.A.colors.TEXT_BRAND, size: "xs" }),
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
                (0, E.jsx)(es.E, {
                    ...n,
                    className: hT.Qs,
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
var hp = i(478167);
function hf(e) {
    let { cta: t, storeListing: i, className: n } = e,
        { applicationId: s, benefits: l, description: r } = i,
        a = S.useMemo(() => (null == i.thumbnail ? null : (0, hS.t)(s, i.thumbnail, 256)), [s, i.thumbnail]),
        { data: o } = hh(i.skuId),
        u = S.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, dO._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, E.jsxs)(Aq, {
              className: e6()(hp.iE, n),
              header: (0, E.jsxs)(E.Fragment, {
                  children: [
                      (0, E.jsxs)("div", {
                          className: hp.qd,
                          children: [
                              null != a &&
                                  (0, E.jsx)(A$._, { src: a.href, imageClassName: hp.rW, width: 48, height: 48 }),
                              (0, E.jsxs)("div", {
                                  children: [
                                      (0, E.jsx)(eP.D, { variant: "heading-md/bold", children: i.summary }),
                                      (0, E.jsx)(es.E, { variant: "text-md/medium", children: u }),
                                  ],
                              }),
                          ],
                      }),
                      t,
                  ],
              }),
              children: [
                  !(0, hE.uJ)(r) &&
                      (0, E.jsx)("div", {
                          className: hp.h_,
                          children: (0, E.jsx)(hx, { variant: "text-sm/medium", children: r }),
                      }),
                  null != l &&
                      l.length > 0 &&
                      (0, E.jsx)("div", {
                          className: hp.PX,
                          children: l.map((e) => {
                              let { id: t, name: i, description: n, icon: l } = e;
                              return (0, E.jsx)(AJ.FY, { header: i, icon: (0, ht.N)(s, l), description: n }, t);
                          }),
                      }),
              ],
          });
}
var hN = i(185438),
    h_ = i(108123);
function hI(e) {
    let {
            app: t,
            currentSubscription: i,
            currentListing: n,
            alternativeListings: s,
            navigateToHome: l,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, A2.A)(t, 100),
        u = (0, he.PJ)(r.flags),
        d = u ? A0.R : A1.n,
        c = u ? j.intl.string(j.t["46YF2D"]) : j.intl.string(j.t.fFyGiA),
        m = i.metadata?.application_subscription_guild_id,
        A = (0, g.bG)([ec.A], () => (u && null != m ? ec.A.getGuild(m) : void 0), [m, u]),
        h = (0, g.bG)([cY.A], () => {
            if (null != a) return cY.A.get(a);
        }, [a]),
        S = hi(i.currentPeriodEnd);
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsxs)("div", {
                className: h_.wx,
                children: [
                    null != o && (0, E.jsx)(A$._, { src: o.href, imageClassName: h_.Z2, width: 48, height: 48 }),
                    (0, E.jsxs)("div", {
                        children: [
                            (0, E.jsx)(eP.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, E.jsxs)("div", {
                                className: h_.p4,
                                children: [
                                    (0, E.jsxs)(eP.D, {
                                        variant: "heading-md/normal",
                                        className: h_.N4,
                                        children: [(0, E.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != A &&
                                        (0, E.jsxs)(E.Fragment, {
                                            children: [
                                                (0, E.jsx)(es.E, { variant: "text-md/normal", children: "\u2022" }),
                                                (0, E.jsxs)("span", {
                                                    className: h_.vP,
                                                    children: [
                                                        (0, E.jsx)(g4.Ay, { guild: A, size: g4.Ay.Sizes.SMOL }),
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
            (0, E.jsx)(A5, {
                children: (e) =>
                    (0, E.jsxs)("div", {
                        className: h_._B,
                        children: [
                            (0, E.jsx)(es.E, { variant: "text-md/normal", children: j.intl.string(j.t["goe+hk"]) }),
                            e &&
                                (0, E.jsxs)(E.Fragment, {
                                    children: [
                                        (0, E.jsx)(es.E, {
                                            variant: "text-md/normal",
                                            children: j.intl.format(j.t["Q8qJ+5"], {}),
                                        }),
                                        (0, E.jsx)(es.E, {
                                            variant: "text-md/normal",
                                            children: j.intl.format(j.t.sqowYz, {}),
                                        }),
                                    ],
                                }),
                            (0, E.jsx)(A5.Toggle, {
                                text: e ? j.intl.string(j.t["1Rkq/E"]) : j.intl.string(j.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, E.jsxs)("div", {
                className: h_.x0,
                children: [
                    (0, E.jsx)(hf, {
                        storeListing: n,
                        className: h_.o3,
                        cta: (0, E.jsxs)("div", {
                            className: h_.cJ,
                            children: [
                                (0, E.jsx)(es.E, {
                                    variant: "eyebrow",
                                    color: "text-brand",
                                    children: j.intl.string(j.t.fHIpOY),
                                }),
                                null != h &&
                                    (0, E.jsx)(es.E, {
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
                                  hf,
                                  {
                                      storeListing: e,
                                      cta: (0, E.jsx)(es.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-subtle",
                                          children: j.intl.format(j.t.nn88hB, { startDate: S }),
                                      }),
                                  },
                                  e.id,
                              )
                            : (0, E.jsx)(hC, { storeListing: e, guildId: m, navigateToHome: l }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function hC(e) {
    let { storeListing: t, guildId: i, navigateToHome: n } = e,
        { openModal: s } = (0, hN.A)({
            analyticsLocation: U.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: i,
            disableGuildSelector: !0,
            onComplete: n,
        });
    return (0, E.jsx)(hf, {
        storeListing: t,
        cta: (0, E.jsx)(eG.$, { variant: "primary", size: "sm", text: j.intl.string(j.t["+KwmBt"]), onClick: s }),
    });
}
class hb extends S.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, E.jsxs)(AK.$T, {
                  color: AK.Hv.DANGER,
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
function hy(e) {
    let { subscriptions: t, updateHeader: i } = e,
        [n, s] = S.useState({ route: hm.HOME }),
        { route: l } = n;
    function r() {
        s({ route: hm.HOME });
    }
    let a = (e) => {
            s({ route: hm.SWITCH_APP_PLANS, ...e }), i(j.intl.string(j.t.VFqtkP), r);
        },
        [o, u] = S.useState({});
    S.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: hs.LOADING })),
                (0, AW._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: hs.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: hs.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, AZ.E)(),
        c = d !== AZ.mJ.LOADED;
    switch (l) {
        case hm.HOME:
            return (0, E.jsx)(E.Fragment, {
                children: t.map((e) =>
                    (0, E.jsx)(
                        hb,
                        {
                            subscription: e,
                            children: (0, E.jsx)(hl, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? hs.LOADING : (o[e.id] ?? hs.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case hm.SWITCH_APP_PLANS:
            let { route: g, ...m } = n;
            return (0, E.jsx)(hI, { ...m, navigateToHome: r });
        default:
            (0, N.xb)(l);
    }
}
var hv = i(731904);
function hj(e) {
    let { onGoBack: t } = e,
        i = (0, g.yK)(
            [d4.A],
            () =>
                d4.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [n, s] = S.useState();
    return (
        null == n && (n = (0, E.jsx)(hO, { onBack: t, title: j.intl.string(j.t["DB/m9a"]) })),
        (0, E.jsxs)("div", {
            children: [
                n,
                (0, E.jsx)("div", {
                    className: hv.A,
                    children: (0, E.jsx)(hy, {
                        subscriptions: i,
                        updateHeader: function (e, t) {
                            s(
                                (0, E.jsx)(hO, {
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
function hO(e) {
    let { onBack: t, title: i } = e;
    return (0, E.jsxs)("div", {
        className: hv.D,
        children: [
            (0, E.jsx)(lQ.K, {
                "aria-label": j.intl.string(j.t["13/7kX"]),
                icon: () => (0, E.jsx)(AH.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, E.jsx)(eP.D, { variant: "heading-lg/semibold", children: i }),
        ],
    });
}
var hR = i(881489),
    hD = i(366999),
    hL = i(963458),
    hP = i(740228);
function hG(e) {
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
        ? ((t = j.intl.string(hL.default["/S02sx"])), (i = j.intl.string(hL.default.OPJNST)))
        : n
          ? ((t = j.intl.string(j.t["hT6i/0"])),
            (i = null != a ? j.intl.format(j.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = j.intl.string(j.t["3G0CTC"])),
            (i = r === sq.xc.FP_SUB_PAUSED ? j.intl.format(j.t.MMvaIG, { resumeDate: l.toDate() }) : null));
    let u = e6()({ [hP.Hs]: n, [hP.mT]: !n }),
        d = e6()({ [hP.CQ]: n, [hP.ZM]: !n }),
        c = e6()({ [hP.EM]: !n });
    return (0, E.jsxs)("div", {
        className: hP.r6,
        children: [
            (0, E.jsxs)("div", {
                className: hP.Nv,
                children: [
                    (0, E.jsx)(eP.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== i && (0, E.jsx)(es.E, { variant: "text-sm/normal", children: i }),
                ],
            }),
            !o &&
                (0, E.jsx)("div", {
                    className: hP.ZS,
                    children: (0, E.jsx)("div", {
                        className: u,
                        children: (0, E.jsx)(es.E, { variant: "text-sm/semibold", className: d, children: s }),
                    }),
                }),
        ],
    });
}
let hM = function (e) {
    let { fractionalPremiumInfo: t, className: i, activationDate: n, hasPremiumGroup: s } = e,
        l = (0, uT.kX)(t),
        r = l.length > 0,
        a = (0, hD.Ay)(t.endsAt, hD.yE.SHORT_TIME),
        o = r ? l : a;
    return (0, E.jsx)("div", {
        children: (0, E.jsxs)("div", {
            className: e6()(i, hP.f8),
            children: [
                (0, E.jsx)("div", {
                    className: hP.J_,
                    children: (0, E.jsxs)("div", {
                        className: hP.Bh,
                        children: [
                            (0, E.jsx)("div", {
                                className: hP.xt,
                                children: (0, E.jsx)(uu.t, { size: "md", color: "white", className: hP.T8 }),
                            }),
                            (0, E.jsx)("div", {
                                className: hP.pt,
                                children: (0, E.jsx)(eP.D, {
                                    variant: "heading-md/semibold",
                                    children: j.intl.string(j.t.DFMPWS),
                                }),
                            }),
                            (0, E.jsx)(es.E, {
                                className: hP.PJ,
                                variant: "text-md/semibold",
                                children: l.length > 0 ? l : j.intl.string(j.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, E.jsx)(hG, {
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
var hU = i(868942);
function hV(e) {
    let t,
        {
            user: i,
            planId: n,
            count: s,
            userPremiumSubscription: l,
            unconsumedFractionalPremiumUnits: r = [],
            hasPremiumGroup: a,
        } = e,
        [o, u] = (0, g.yK)([cX.A], () => [cX.A.get(n), null != l ? cX.A.get(l.planId) : null]);
    if (null == o || uT.Ay.getInterval(n).intervalType !== sq.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        c = o.skuId === d,
        m = uT.Ay.getDisplayName(n);
    if (a) t = j.intl.string(hL.default["5asczk"]);
    else if (c && null != l) {
        let e;
        e = new Date(l.status === U.Dmq.PAUSED && null != l.pauseEndsAt ? l.pauseEndsAt : l.currentPeriodEnd);
        let i = (0, uT._e)(e, r);
        t = j.intl.formatToPlainString(j.t["5CNRRA"], { date: i ?? 0 });
    } else t = j.intl.formatToPlainString(j.t.eNXZ5O, { planName: m });
    let A = i.hasFreePremium() || (null != l && l.isPurchasedExternally);
    return (0, E.jsxs)("div", {
        className: hP.Bh,
        children: [
            (0, E.jsx)("div", {
                className: e6()({
                    [hP.sr]: o.skuId === sq.pe.TIER_0,
                    [hP.lP]: o.skuId === sq.pe.TIER_1,
                    [hP.eb]: o.skuId === sq.pe.TIER_2,
                }),
                children: (0, E.jsx)(uu.t, { size: "md", color: "currentColor", className: hP.Kk }),
            }),
            (0, E.jsxs)("div", {
                className: hP.pt,
                children: [
                    (0, E.jsx)(eP.D, {
                        variant: "heading-md/semibold",
                        children: j.intl.format(j.t.LzobT9, { planName: m }),
                    }),
                    !A &&
                        (0, E.jsx)(eP.D, {
                            className: hP.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, E.jsx)(es.E, {
                className: hP.PJ,
                variant: "text-md/semibold",
                children: j.intl.format(j.t["ess/xl"], { count: s }),
            }),
        ],
    });
}
let hk = function (e) {
    let { className: t, entitlements: i } = e,
        n = eZ()(Array.from(i))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: i, consumed: n } = e;
                return null != t && null != i && !n;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        s = (0, g.yK)([cL.A], () => cL.A.getUnactivatedFractionalPremiumUnits()),
        l = (0, g.bG)([d4.A], () => d4.A.getPremiumSubscription()),
        r = (0, g.bG)([d4.A], () => null == d4.A.getPremiumTypeSubscription()),
        a = Object.keys(n).some((e) => e === sq.gD.PREMIUM_MONTH_TIER_1),
        o = (0, g.bG)([io.default], () => io.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsx)("div", {
                className: e6()(t, hP.xF, hP.J_),
                children: Object.keys(n).map((e) =>
                    (0, E.jsx)(
                        hV,
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
                        (0, E.jsx)(es.E, {
                            className: hP.eT,
                            variant: "text-md/normal",
                            children: j.intl.string(j.t["VNr4+O"]),
                        }),
                        (0, E.jsx)(hU.i, {}),
                    ],
                }),
        ],
    });
};
var hw = i(825831);
function hB(e) {
    let t,
        { subscription: i, withOverheadSeparator: n } = e,
        { analyticsLocations: s } = (0, nZ.Ay)(),
        [l] = (0, AI.YV)({
            subscriptionId: i.id,
            renewal: !0,
            analyticsLocations: s,
            analyticsLocation: e1.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == l) return null;
    let r = n ? hw.r : hw.a,
        a = l.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, uT.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = cX.A.get(o);
    tz()(null != u, "Missing plan");
    let d = (0, dO.$g)(l.total, l.currency);
    return (
        u.interval === sq.WT.YEAR
            ? (t = j.intl.format(j.t["jPz/39"], {
                  price: d,
                  termsUrl: U.X7G.TERMS,
                  paidURL: U.X7G.PAID_TERMS,
                  privacyUrl: U.X7G.PRIVACY,
              }))
            : u.interval === sq.WT.MONTH &&
              (t =
                  1 === u.intervalCount
                      ? j.intl.format(j.t.m27GpI, {
                            price: d,
                            termsUrl: U.X7G.TERMS,
                            paidURL: U.X7G.PAID_TERMS,
                            privacyUrl: U.X7G.PRIVACY,
                        })
                      : j.intl.format(j.t["9xf5Vx"], {
                            price: d,
                            termsUrl: U.X7G.TERMS,
                            paidURL: U.X7G.PAID_TERMS,
                            privacyUrl: U.X7G.PRIVACY,
                            intervalCount: u.intervalCount,
                        })),
        (0, E.jsx)(es.E, { color: "text-muted", className: r, variant: "text-xs/normal", children: t })
    );
}
function hF(e) {
    let { subscription: t, withOverheadSeparator: i } = e;
    return t.status === U.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, E.jsx)(hB, { subscription: t, withOverheadSeparator: i });
}
var hz = i(37397),
    hX = i(536664);
let hY = { [nw.nR]: "role_subscriptions_panel", [nw.PZ]: "application_subscriptions_panel" };
function hH() {
    return (0, E.jsx)(eb.Z, {
        className: hX.wb,
        type: eb.Z.Types.CUSTOM,
        children: (0, E.jsxs)(rn.A, {
            align: rn.A.Align.CENTER,
            children: [
                (0, E.jsx)(p.A, { game: null, size: p.M.SMALL, className: hX.pV }),
                (0, E.jsx)("span", { className: hX.O, children: j.intl.string(j.t["jy/hyj"]) }),
            ],
        }),
    });
}
function hK(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, Au._)(e, t));
}
function hW() {
    let e = (0, g.bG)([cL.A], () => cL.A.getForApplication(sq.tv), [], hK);
    return (
        S.useEffect(() => {
            (0, c1.LM)(sq.tv);
        }, []),
        (0, E.jsx)(i_.n, {
            label: j.intl.string(j.t["2GKrvn"]),
            description: j.intl.string(j.t.kNEjGm),
            children:
                null != e && uT.Ay.hasAccountCredit(e)
                    ? (0, E.jsx)(hk, { className: hX.fX, entitlements: e })
                    : (0, E.jsx)(hH, {}),
        })
    );
}
function hZ() {
    return (0, E.jsx)("hr", { className: hX.hr });
}
let hQ = function () {
        var e;
        let t = (0, g.bG)([d4.A], () => d4.A.getPremiumTypeSubscription()),
            i = (0, Ad.A)({ subscriptionFilter: (e) => hz.Hy.has(e.status) }),
            n = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
            s = i.length > 1,
            l = (0, g.bG)(
                [d6.A],
                () => (null != t && null != t.paymentSourceId ? d6.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, g.bG)([d4.A], () => d4.A.hasFetchedSubscriptions()),
            a = (0, g.bG)([dj.A], () => dj.A.isBusy),
            o = (0, gS.Y)(),
            d = Ab.A.useField("subsection");
        S.useEffect(() => {
            (0, rq._)(null != d ? hY[d] : u.X.SUBSCRIPTIONS_PANEL);
        }, [d]);
        let c = (0, g.bG)([d4.A], () => d4.A.getActiveApplicationSubscriptions()?.length ?? 0),
            m = (0, g.bG)(
                [d4.A],
                () =>
                    Object.values(d4.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === U.rzx.GUILD)
                        .filter((e) => e.status !== U.Dmq.ENDED).length,
            ),
            A = (0, gp.A)({ forceFetch: !0 }),
            h = (0, hR.ds)(),
            T = null !== t ? t.currentPeriodEnd : void 0,
            x =
                !(h && !(A.unactivatedUnits.length > 0)) &&
                (A.fractionalState !== sq.xc.NONE || A.unactivatedUnits.length > 0);
        return (S.useEffect(
            () => (
                sa.h.wait(() => {
                    (0, gE.zS)(), db.hP(), (0, gh.CD)(), db.$o();
                }),
                function () {
                    Ab.A.resetState();
                }
            ),
            [],
        ),
        eB.A.enabled)
            ? (0, E.jsx)(dT.A, {})
            : r && o
              ? d === nw.nR
                  ? (0, E.jsx)(AF, { onGoBack: () => Ab.A.setState({ subsection: null }) })
                  : d === nw.PZ
                    ? (0, E.jsx)(hj, { onGoBack: () => Ab.A.setState({ subsection: null }) })
                    : (0, E.jsx)("div", {
                          className: hX.kL,
                          children: (0, E.jsxs)("div", {
                              className: hX.Qs,
                              children: [
                                  s ? (0, E.jsx)(hz.Sb, {}) : null,
                                  null != t
                                      ? (0, E.jsx)(hz.Ay, {
                                            subscription: t,
                                            paymentSource: l,
                                            busy: a,
                                            subscriptions: i,
                                        })
                                      : (0, E.jsx)(hz.TC, {}),
                                  x &&
                                      ((e = !!n?.isPremiumWithPremiumGroup()),
                                      (0, E.jsxs)("section", {
                                          children: [
                                              (0, E.jsx)(eP.D, {
                                                  variant: "heading-md/bold",
                                                  className: hX.HL,
                                                  children: j.intl.string(j.t.Obre8v),
                                              }),
                                              (0, E.jsx)(es.E, {
                                                  variant: "text-md/normal",
                                                  className: hX.JU,
                                                  children: j.intl.format(j.t["7Zi06b"], {
                                                      helpCenterLink: tN.A.getArticleURL(
                                                          U.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, E.jsx)(hM, {
                                                  className: hX.fX,
                                                  fractionalPremiumInfo: A,
                                                  activationDate: T,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, E.jsx)(hW, {}),
                                  m > 0 &&
                                      (0, E.jsxs)(E.Fragment, {
                                          children: [
                                              (0, E.jsx)(hZ, {}),
                                              (0, E.jsx)(Am, {
                                                  count: m,
                                                  onClickManageSubscription: () => Ab.A.setState({ subsection: nw.nR }),
                                              }),
                                          ],
                                      }),
                                  c > 0 &&
                                      (0, E.jsxs)(E.Fragment, {
                                          children: [
                                              (0, E.jsx)(hZ, {}),
                                              (0, E.jsx)(AY, {
                                                  count: c,
                                                  onClickManageSubscription: () => {
                                                      Ab.A.setState({ subsection: nw.PZ }),
                                                          G.default.track(
                                                              U.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                          );
                                                  },
                                              }),
                                          ],
                                      }),
                                  (0, E.jsx)(hZ, {}),
                                  null != t ? (0, E.jsx)(hF, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, E.jsx)("div", { className: e6()(hX.kL, hX.Lq), children: (0, E.jsx)(dp.y, {}) });
    },
    hq = (0, a.E2)(u.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [j.intl.string(j.t.trSpHX), j.intl.string(j.t["2GKrvn"])],
        Component: () => (0, E.jsx)(hQ, {}),
    }),
    hJ = (0, a.zZ)(u.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [j.intl.string(j.t.trSpHX), j.intl.string(j.t["2GKrvn"])],
        buildLayout: () => [hq],
    }),
    h$ = (0, a.t_)(u.X.SUBSCRIPTIONS_PANEL, { useTitle: () => j.intl.string(j.t.trSpHX), buildLayout: () => [hJ] }),
    h0 = (0, a.i4)(u.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.trSpHX),
        icon: Aa.L,
        usePersistentBadge: function () {
            return S.useMemo(
                () => ({
                    badgeType: h.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    useCustomBadge: () =>
                        (0, Ao.l)() ? (0, E.jsx)(l2.E, { size: "xs", color: er.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [],
            );
        },
        buildLayout: () => [h$],
    }),
    h1 = (0, a.WI)(u.X.BILLING_SECTION, {
        useTitle: () => j.intl.string(j.t.oeUm2s),
        buildLayout: () => [gm, Ar, h0, gr, cr],
    });
var h2 = i(540999),
    h3 = i(306471),
    h6 = i(964355),
    h4 = i(172272);
let h7 = (0, a.zD)(u.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, g.bG)([oC.default], () => oC.default.isAxeEnabled),
        setValue: (e) => (0, oI.x)({ axeEnabled: e }),
    }),
    h5 = (0, a.zD)(u.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, g.bG)([oC.default], () => oC.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, oI.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var h8 = i(276086),
    h9 = i(354328);
let Ee = (0, a.zD)(u.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, h9.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, h8.L)("highlight_mana_components", e);
        },
    }),
    Et = (0, a.zD)(u.X.HIGHLIGHT_MANA_TEXT, {
        useTitle: () => "Mana Text Migration Highlighter",
        useSubtitle: () =>
            "Outlines Mana Text/Heading components in green and all other rendered text in red, to spot text not yet migrated to Mana.",
        useValue: () => (0, h9.A)("highlight_mana_text"),
        setValue: (e) => {
            (0, h8.L)("highlight_mana_text", e);
        },
    }),
    Ei = (0, a.zD)(u.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, h9.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, h8.L)("highlight_void_toggleables", e);
        },
    }),
    En = (0, a.sN)(u.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, g.bG)([oC.default], () => oC.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: h4.YR,
        markers: Array.from({ length: h4.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => h4.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            h4.Or.getState().setHorizontalSpacing(e);
        },
    }),
    Es = (0, a.zD)(u.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, g.bG)([oC.default], () => oC.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, oI.x)({ layoutDebuggingEnabled: e });
        },
    }),
    El = (0, a.sN)(u.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, g.bG)([oC.default], () => oC.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: h4.YR,
        markers: Array.from({ length: h4.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => h4.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            h4.Or.getState().setVerticalSpacing(e);
        },
    }),
    Er = (0, a.zZ)(u.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [h5, Es, En, El, Ee, Et, Ei, h7],
    }),
    Ea = (0, a.zD)(u.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => D.HZ.useSetting(),
        setValue: (e) => {
            D.HZ.updateSetting(e);
        },
    });
var Eo = i(173936),
    Eu = i(260598),
    Ed = i(148810),
    Ec = i(380610),
    Eg = i(986238),
    Em = i(431969),
    EA = i(979854);
let Eh = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    EE = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function ES(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class ET extends S.Component {
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
        return (0, E.jsxs)(rn.A, {
            direction: rn.A.Direction.VERTICAL,
            className: e6()(Em.oS, iU.SX, EA.N, Em.nM),
            children: [
                (0, E.jsx)(iO.A, {
                    className: e6()(Em.lL, { [Em.zi]: n }),
                    onClick: n ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, E.jsxs)(rn.A, {
                    className: iU.QB,
                    children: [
                        (0, E.jsx)(rn.A.Child, {
                            basis: "50%",
                            children: (0, E.jsx)(lZ.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: EE,
                                onSelectionChange: this.handleOverrideTypeChanged,
                                value: t,
                                disabled: n,
                            }),
                        }),
                        (0, E.jsx)(rn.A.Child, {
                            wrap: !0,
                            basis: "50%",
                            children: (0, E.jsx)(l9.k, {
                                label: "branch" === t ? "Branch Name" : "Commit SHA",
                                value: i,
                                onChange: this.handleOverrideIdChanged,
                                disabled: n,
                            }),
                        }),
                    ],
                }),
                (0, E.jsxs)(rn.A.Child, {
                    children: [
                        null != s &&
                            "" !== s &&
                            (0, E.jsx)(es.E, {
                                className: Em.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: s,
                            }),
                        (0, E.jsxs)(es.E, {
                            variant: "text-sm/normal",
                            className: Em.AS,
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
class Ex extends S.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, Ec.bD)();
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
        return eZ().without(Eh, ...t);
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
        let t = await (0, Ed.Zk)(e);
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
        (0, K.openModal)((t) => (0, E.jsx)(Ep, { ...t, buildOverrides: e }));
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
                      ET,
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
                  children: (0, E.jsx)(lQ.K, {
                      variant: "secondary",
                      icon: Eo.q,
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
                    disabled: ES(t ?? {}),
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
            ? (0, E.jsx)(dp.y, { className: iU.QX })
            : null != n && 0 === Object.keys(n).length
              ? this.renderEmpty()
              : this.renderItems();
        let s = !i && !t && this.getAvailableProjects().length > 0,
            l =
                ES(n ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, E.jsx)(es.E, {
                          color: "text-feedback-critical",
                          variant: "text-md/normal",
                          children:
                              "Mobile build overrides must be generated using the desktop/web stable client for now!",
                      })
                    : null;
        return (0, E.jsx)(i_.n, {
            children: (0, E.jsxs)(q.B, {
                gap: 16,
                children: [
                    (0, E.jsx)(lZ.l, {
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
                    (0, E.jsxs)(ou.e, {
                        justify: "end",
                        children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                    }),
                ],
            }),
        });
    }
}
class Ep extends S.Component {
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
        e.key === iD.dh.ENTER && this.handleAddAllowedVersion();
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
            t = await (0, Ed.SB)(e);
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
        return ES(this.props.buildOverrides ?? {});
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
            d = Eg.fL.find((t) => t.value === e),
            c = s.map((e) => ({ id: e, label: e, value: e }));
        return (0, E.jsxs)(q.B, {
            gap: 20,
            children: [
                (0, E.jsx)(lZ.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: Eg.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, E.jsx)(lZ.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: Eg.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, E.jsxs)(q.B, {
                          gap: 20,
                          children: [
                              (0, E.jsx)(l9.k, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: l,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: r,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: { icon: ay.j, onClick: this.handleAddAllowedVersion, "aria-label": "Add" },
                              }),
                              (0, E.jsx)(lZ.l, {
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
                    : (0, E.jsx)(Eu.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: i,
                          error: n,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                (0, E.jsx)(Eu.f, {
                    label: "Client Experiment Override",
                    description:
                        "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.",
                    value: o,
                    error: u,
                    onChange: this.handleExperiments,
                    placeholder: '{"2022-01_threads":1}',
                }),
                (0, E.jsx)(J.d, { label: "Allow logged out users", checked: a, onChange: this.handleAllowLoggedOut }),
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
        return (0, E.jsx)(l8.Modal, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, E.jsx)(cy.A, { value: i }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let Ef = (0, a.E2)(u.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: Ex });
var EN = i(256311),
    E_ = i(883600);
let EI = (0, a.E2)(u.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, g.bG)([E_.A], () => E_.A.overrideId());
        async function t(e) {
            let t = E_.A.getChangelog(e, "en-US");
            return null != t ? t : ((await EN.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
        }
        return (0, E.jsx)(Ek, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => EN.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var EC = i(506774);
let Eb = new Date("2018-01-01"),
    Ey = (0, a.Tf)(u.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => D.pK.useSetting() === dD.default.fromTimestamp(Eb.getTime()),
        onClick: () => (EC.w.set("lastChangeLogDate", Eb), D.pK.updateSetting(dD.default.fromTimestamp(Eb.getTime()))),
    }),
    Ev = (0, a.zD)(u.X.DISABLE_APP_COLLECTIONS_CACHE, {
        useTitle: () => "Disable Application Collections Cache",
        useSubtitle: () => "Forces application collection updates to be shown immediately.",
        useDisabled: () => (0, g.bG)([oC.default], () => oC.default.onlyShowPreviewAppCollections),
        useValue: () =>
            (0, g.bG)(
                [oC.default],
                () => oC.default.disableAppCollectionsCache || oC.default.onlyShowPreviewAppCollections,
            ),
        setValue: (e) => (0, oI.x)({ disableAppCollectionsCache: e }),
    }),
    Ej = (0, a.zD)(u.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, g.bG)([oC.default], () => oC.default.isForcedCanary),
        setValue: (e) => {
            (0, oI.x)({ canary: e });
        },
    }),
    EO = (0, a.zD)(u.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, g.bG)([oC.default], () => oC.default.sourceMapsEnabled),
        setValue: (e) => (0, oI.x)({ sourceMapsEnabled: e }),
    }),
    ER = (0, a.zD)(u.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, g.bG)([oC.default], () => oC.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, oI.x)({ onlyShowPreviewAppCollections: e }),
    });
var ED = i(10094),
    EL = i(683760);
let EP = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: sq.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: sq.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: sq.PremiumTypes.TIER_2 },
    ],
    EG = (0, a.Hn)(u.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => EP,
        clearable: !0,
        useValue: () =>
            (0, g.bG)([EL.A], () => {
                let e = EL.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, ED.O)(null, void 0)
                : null === e
                  ? (0, ED.O)(void 0, void 0)
                  : (0, ED.O)(0 === e ? null : e, void 0);
        },
    });
var EM = i(246605),
    EU = i(274184);
let EV = (0, a.E2)(u.X.SURVEY_OVERRIDE, {
    useSearchTerms: () => ["survey override"],
    Component: function () {
        let e = (0, g.bG)([EU.Ay], () => EU.Ay.getSurveyOverride());
        return (0, E.jsx)(Ek, {
            label: "Survey Override",
            description: "Provide a survey ID to override the survey shown to this user.",
            placeholder: "Enter Survey ID...",
            overrideId: e ?? null,
            setOverride: (e) => EM.xr(e),
            fetchOverride: (e) => EM.BC(e, !0) ?? null,
        });
    },
});
function Ek(e) {
    let { label: t, description: i, placeholder: n, overrideId: s, setOverride: l, fetchOverride: r } = e,
        [a, o] = S.useState(s ?? ""),
        u = S.useRef(null),
        [d, c] = S.useState(0);
    function g() {
        null != u.current && (clearTimeout(u.current), (u.current = null));
    }
    return (
        S.useEffect(() => g, []),
        (0, E.jsx)(s4.D, {
            layout: "horizontal-responsive",
            label: t,
            description: i,
            children: (0, E.jsx)(l9.k, {
                placeholder: n,
                error: 2 === d ? "Failed to fetch override" : void 0,
                successMessage: 3 === d ? "Override applied" : void 0,
                value: a,
                onChange: function (e) {
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
let Ew = (0, a.zZ)(u.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [EG, EV, EI, Ey, Ej, Ea, ER, Ev, EO, Ef],
        useInlineNotice: () => ({
            type: h.lT.INLINE_NOTICE,
            noticeType: "info",
            useText: () => j.intl.format(j.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    EB = (0, a.zD)(u.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, g.bG)([oC.default], () => oC.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, oI.x)({ logAnalyticsEvents: e }),
    }),
    EF = (0, a.zD)(u.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, g.bG)([oC.default], () => oC.default.isLoggingGatewayEvents),
        setValue: (e) => (0, oI.x)({ logGatewayEvents: e }),
    }),
    Ez = (0, a.zD)(u.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, g.bG)([oC.default], () => oC.default.preventPopoutClose),
        setValue: (e) => (0, oI.x)({ preventPopoutClose: e }),
    }),
    EX = (0, a.zD)(u.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, g.bG)([oC.default], () => oC.default.logKeyboardMismatches),
        setValue: (e) => (0, oI.x)({ logKeyboardMismatches: e }),
    }),
    EY = (0, a.zD)(u.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, g.bG)([oC.default], () => oC.default.isLoggingOverlayEvents),
        setValue: (e) => (0, oI.x)({ logOverlayEvents: e }),
    }),
    EH = (0, a.zD)(u.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, g.bG)([oC.default], () => oC.default.isLoggingQuestEvents),
        setValue: (e) => (0, oI.x)({ logQuestEvents: e }),
    }),
    EK = (0, a.zD)(u.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, g.bG)([oC.default], () => oC.default.isTracingRequests),
        setValue: (e) => (0, oI.x)({ trace: e }),
    }),
    EW = (0, a.zZ)(u.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [EF, EY, EK, EB, EX, Ez, EH] }),
    EZ = (0, a.t_)(u.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [Ew, EW, Er],
    }),
    EQ = (0, a.i4)(u.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: h3.V,
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
                } = (0, g.cf)([oC.default, h2.A, io.default], () => ({
                    layoutDebuggingEnabled: oC.default.layoutDebuggingEnabled,
                    isDeveloper: h2.A.isDeveloper,
                    isLoggingGatewayEvents: oC.default.isLoggingGatewayEvents,
                    isLoggingOverlayEvents: oC.default.isLoggingOverlayEvents,
                    isLoggingAnalyticsEvents: oC.default.isLoggingAnalyticsEvents,
                    isTracingRequests: oC.default.isTracingRequests,
                    isForcedCanary: oC.default.isForcedCanary,
                    isSourceMapsEnabled: oC.default.sourceMapsEnabled,
                    isAxeEnabled: oC.default.isAxeEnabled,
                    preventPopoutClose: oC.default.preventPopoutClose,
                    onlyShowPreviewAppCollections: oC.default.onlyShowPreviewAppCollections,
                    disableAppCollectionsCache: oC.default.disableAppCollectionsCache,
                    isStaff: io.default.getCurrentUser()?.isStaff() ?? !1,
                })),
                { horizontalSpacing: A, verticalSpacing: h } = (0, h4.Or)(),
                { setHorizontalSpacing: S, setVerticalSpacing: T } = h4.Or.getState(),
                x = D.HZ.useSetting();
            return t
                ? [
                      (0, E.jsxs)(
                          ei.Dr,
                          {
                              id: "overrides",
                              label: "Overrides",
                              action: () => {
                                  (0, eH.openUserSettings)(u.X.DEV_OVERRIDES);
                              },
                              children: [
                                  (0, E.jsx)(
                                      ei.sL,
                                      {
                                          id: "always-deliver",
                                          label: "Always Deliver Ads",
                                          checked: x,
                                          action: () => {
                                              D.HZ.updateSetting(!x);
                                          },
                                      },
                                      "always-deliver",
                                  ),
                                  (0, E.jsx)(
                                      ei.sL,
                                      {
                                          id: "forced-canary",
                                          label: "Forced Canary",
                                          checked: r,
                                          action: () => {
                                              (0, oI.x)({ canary: !r });
                                          },
                                      },
                                      "forced-canary",
                                  ),
                                  (0, E.jsx)(
                                      ei.sL,
                                      {
                                          id: "preview-collections",
                                          label: "Preview Unpublished Collections",
                                          checked: d,
                                          action: () => {
                                              (0, oI.x)({ onlyShowPreviewAppCollections: !d });
                                          },
                                      },
                                      "preview-collections",
                                  ),
                                  (0, E.jsx)(
                                      ei.sL,
                                      {
                                          id: "disable-collections-cache",
                                          label: "Disable Collections Cache",
                                          checked: c,
                                          action: () => {
                                              (0, oI.x)({ disableAppCollectionsCache: !c });
                                          },
                                      },
                                      "disable-collections-cache",
                                  ),
                              ],
                          },
                          "overrides",
                      ),
                      (0, E.jsxs)(
                          ei.Dr,
                          {
                              id: "logging",
                              label: "Logging",
                              action: () => {
                                  (0, eH.openUserSettings)(u.X.LOGGING);
                              },
                              children: [
                                  (0, E.jsx)(
                                      ei.sL,
                                      {
                                          id: "gateway-events",
                                          label: "Gateway Events",
                                          checked: i,
                                          action: () => {
                                              (0, oI.x)({ logGatewayEvents: !i });
                                          },
                                      },
                                      "gateway-events",
                                  ),
                                  (0, E.jsx)(
                                      ei.sL,
                                      {
                                          id: "overlay-events",
                                          label: "Overlay RPC Events",
                                          checked: n,
                                          action: () => {
                                              (0, oI.x)({ logOverlayEvents: !n });
                                          },
                                      },
                                      "overlay-events",
                                  ),
                                  (0, E.jsx)(
                                      ei.sL,
                                      {
                                          id: "analytics-events",
                                          label: "Analytics Events",
                                          checked: s,
                                          action: () => {
                                              (0, oI.x)({ logAnalyticsEvents: !s });
                                          },
                                      },
                                      "analytics-events",
                                  ),
                                  (0, E.jsx)(
                                      ei.sL,
                                      {
                                          id: "tracing-requests",
                                          label: "Tracing Requests",
                                          checked: l,
                                          action: () => {
                                              (0, oI.x)({ trace: !l });
                                          },
                                      },
                                      "tracing-requests",
                                  ),
                                  (0, E.jsx)(
                                      ei.sL,
                                      {
                                          id: "prevent-popout-close",
                                          label: "Prevent Popouts From Closing",
                                          checked: o,
                                          action: () => {
                                              (0, oI.x)({ preventPopoutClose: !o });
                                          },
                                      },
                                      "prevent-popout-close",
                                  ),
                              ],
                          },
                          "logging",
                      ),
                      (0, E.jsxs)(
                          ei.Dr,
                          {
                              id: "design-tools",
                              label: "Design/A11y Tools",
                              action: () => {
                                  (0, eH.openUserSettings)(u.X.DESIGN_TOOLS);
                              },
                              children: [
                                  (0, E.jsx)(
                                      ei.sL,
                                      {
                                          id: "accessibility-auditing",
                                          label: "Accessibility Auditing",
                                          checked: a,
                                          action: () => {
                                              (0, oI.x)({ axeEnabled: !a });
                                          },
                                      },
                                      "accessibility-auditing",
                                  ),
                                  (0, E.jsx)(
                                      ei.sL,
                                      {
                                          id: "layout-debugging",
                                          label: "Enable Layout Debugging",
                                          checked: e,
                                          action: () => {
                                              (0, oI.x)({ layoutDebuggingEnabled: !e });
                                          },
                                      },
                                      "layout-debugging",
                                  ),
                                  e &&
                                      (0, E.jsxs)(E.Fragment, {
                                          children: [
                                              (0, E.jsx)(
                                                  ei.aK,
                                                  {
                                                      id: "horizontal-spacing",
                                                      label: "Horizontal Spacing",
                                                      control: (e, t) =>
                                                          (0, E.jsx)(h6.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: A,
                                                              minValue: 0,
                                                              maxValue: h4.YR,
                                                              onChange: (e) => S(e),
                                                              renderValue: (e) => `${Math.round(e)}px`,
                                                              "aria-label": "Horizontal Spacing",
                                                          }),
                                                  },
                                                  "horizontal-spacing",
                                              ),
                                              (0, E.jsx)(
                                                  ei.aK,
                                                  {
                                                      id: "vertical-spacing",
                                                      label: "Vertical Spacing",
                                                      control: (e, t) =>
                                                          (0, E.jsx)(h6.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: h,
                                                              minValue: 0,
                                                              maxValue: h4.YR,
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
                                ei.Dr,
                                { id: "discord-stats", label: "Discord Stats", action: () => aV() },
                                "discord-stats",
                            )
                          : null,
                  ]
                : null;
        },
        buildLayout: () => [EZ],
    });
var Eq = i(127062),
    EJ = i(25044),
    E$ = i(80703),
    E0 = i(691540),
    E1 = i(857250),
    E2 = i(97483),
    E3 = i(100392),
    E6 = i(102609),
    E4 = i(271478),
    E7 = i(736056),
    E5 = i(386976),
    E8 = i(257433),
    E9 = i(32523),
    Se = i(96919),
    St = i(688151),
    Si = i(922518);
function Sn(e) {
    let { experiment: t, experimentId: i, overrideInfo: n, defaultOpen: s } = e,
        [l, r] = S.useState(s),
        [a, o] = S.useState(!1),
        u = S.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, g.bG)([cF.default], () => cF.default.getId()),
        c = (0, g.bG)([cF.default], () => {
            let e = cF.default.getInstallationForTracking();
            return null == e ? null : (0, E$.v)(e);
        }),
        m = "installation" === t.kind && null != c ? c : d,
        A = (0, E8.iN)(t, m),
        h = (0, E8.Fm)(t, m),
        T = (0, g.yK)([E7.A], () =>
            eZ()
                .sortBy(E7.A.getRecentExposures(St.Vh.USER, i), (e) => {
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
                (0, cK.C)((0, E3.yA)(i), () => {
                    (0, E0.P0)({
                        id: "experiment-link-copied",
                        message: "Copied experiment link",
                        type: E2.Ck.SUCCESS,
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
            children: (0, E.jsxs)(es.E, {
                variant: "text-md/medium",
                className: Si.DD,
                children: [
                    (0, E.jsxs)("div", {
                        children: [
                            (0, E.jsxs)(q.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    t.title,
                                    " ",
                                    cK.p5 &&
                                        (0, E.jsx)(en.D, { onClick: x, children: (0, E.jsx)(Eo.q, { size: "xs" }) }),
                                ],
                            }),
                            (0, E.jsx)(es.E, { color: "text-muted", variant: "text-sm/normal", children: i }),
                        ],
                    }),
                    (0, E.jsx)("span", {
                        className: Si.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!l) return (0, E.jsx)("div", { className: Si.Os, children: p });
    let f = "";
    return (
        (f =
            t.system === E6.l5.LEGACY
                ? `Currently assigned to bucket ${A ?? St.RE.NOT_ELIGIBLE}`
                : null != A
                  ? `Currently assigned to variant ${A}`
                  : "Currently unassigned"),
        (0, E.jsxs)("div", {
            className: Si.Os,
            children: [
                p,
                (0, E.jsx)("div", {
                    children: (0, E.jsx)(E4.g, {
                        label: t.system === E6.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: f,
                        experiment: t,
                        experimentId: i,
                        overrideInfo: n,
                    }),
                }),
                (0, E.jsx)("div", {
                    className: Si.h_,
                    children:
                        null == h
                            ? (0, E.jsx)(es.E, {
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
                              (0, E.jsx)(es.E, {
                                  variant: "text-lg/medium",
                                  className: Si.id,
                                  children: "Server Descriptor",
                              }),
                              (0, E.jsx)(es.E, {
                                  variant: "code",
                                  className: Si.AS,
                                  children: null == h ? "None" : JSON.stringify(h, void 0, 2),
                              }),
                              (0, E.jsx)(es.E, {
                                  variant: "text-lg/medium",
                                  className: Si.id,
                                  children: "Override Descriptor",
                              }),
                              (0, E.jsx)(es.E, {
                                  variant: "code",
                                  className: Si.AS,
                                  children:
                                      n?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(n.originalDescriptor, void 0, 2),
                              }),
                              (0, E.jsx)(es.E, {
                                  variant: "text-lg/medium",
                                  className: Si.id,
                                  children: "Recent Exposures",
                              }),
                              (0, E.jsx)(es.E, {
                                  variant: "code",
                                  className: Si.AS,
                                  children: 0 === T.length ? "None" : T.join("\n"),
                              }),
                          ],
                      })
                    : (0, E.jsx)("div", {
                          className: Si.id,
                          children: (0, E.jsx)(ea.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, E.jsx)(eM.c, { className: Si.yF }),
            ],
        })
    );
}
function Ss(e) {
    let { experiment: t, experimentId: i, overrideInfo: n } = e,
        [s, l] = S.useState(null != n),
        [r, a] = S.useState(!1),
        o = S.useCallback(() => {
            l((e) => !e);
        }, []),
        u = (0, g.bG)([E7.A], () => E7.A.getLoadedGuildExperiment(i)),
        d = (0, g.yK)([E7.A], () =>
            eZ()
                .sortBy(E7.A.getRecentExposures(St.Vh.GUILD, i), (e) => {
                    let [t, i] = e;
                    return -i;
                })
                .map((e) => {
                    let [t, i] = e;
                    return `${new Date(i).toLocaleString()} (${t})`;
                }),
        ),
        [c, m] = (0, g.yK)([ec.A, E7.A], () => {
            let e = eZ().sortBy(ec.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                t = {},
                n = [];
            for (let s of e) {
                let e = E7.A.getGuildExperimentDescriptor(i, s.id),
                    l = e?.bucket ?? St.RE.NOT_ELIGIBLE;
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
        A = (0, E.jsx)(en.D, {
            onClick: o,
            children: (0, E.jsxs)(es.E, {
                variant: "text-md/medium",
                className: Si.DD,
                children: [
                    (0, E.jsxs)("div", {
                        children: [
                            (0, E.jsx)("span", { children: t.title }),
                            (0, E.jsx)(es.E, { color: "text-muted", variant: "text-sm/normal", children: i }),
                        ],
                    }),
                    (0, E.jsx)("span", { className: Si.km, children: "Guild" }),
                ],
            }),
        });
    return s
        ? (0, E.jsxs)("div", {
              className: Si.Os,
              children: [
                  A,
                  (0, E.jsx)(E4.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${m}`,
                      experiment: t,
                      experimentId: i,
                      overrideInfo: n,
                  }),
                  (0, E.jsx)("div", {
                      className: Si.h_,
                      children:
                          null == u
                              ? (0, E.jsx)(es.E, {
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
                                (0, E.jsx)(es.E, {
                                    variant: "text-lg/medium",
                                    className: Si.id,
                                    children: "Guild Assignments",
                                }),
                                (0, E.jsx)(es.E, { variant: "code", className: Si.AS, children: c }),
                                (0, E.jsx)(es.E, {
                                    variant: "text-lg/medium",
                                    className: Si.id,
                                    children: "Server Descriptor",
                                }),
                                (0, E.jsx)(es.E, {
                                    variant: "code",
                                    className: Si.AS,
                                    children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                }),
                                (0, E.jsx)(es.E, {
                                    variant: "text-lg/medium",
                                    className: Si.id,
                                    children: "Override Descriptor",
                                }),
                                (0, E.jsx)(es.E, {
                                    variant: "code",
                                    className: Si.AS,
                                    children:
                                        n?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(n.originalDescriptor, void 0, 2),
                                }),
                                (0, E.jsx)(es.E, {
                                    variant: "text-lg/medium",
                                    className: Si.id,
                                    children: "Recent Exposures",
                                }),
                                (0, E.jsx)(es.E, {
                                    variant: "code",
                                    className: Si.AS,
                                    children: 0 === d.length ? "None" : d.join("\n"),
                                }),
                            ],
                        })
                      : (0, E.jsx)("div", {
                            className: Si.id,
                            children: (0, E.jsx)(ea.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, E.jsx)(eM.c, { className: Si.yF }),
              ],
          })
        : (0, E.jsx)("div", { className: Si.Os, children: A });
}
let Sl = (0, a.E2)(u.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, E5.op)(),
                { experiments: i, overridesInfo: n } = (0, E9.hI)(),
                s = S.useMemo(() => ({ ...i, ...e }), [i, e]),
                l = S.useMemo(() => ({ ...n, ...t }), [n, t]),
                r = (0, g.bG)([cF.default], () => {
                    let e = cF.default.getInstallationForTracking();
                    return null == e ? null : (0, E$.v)(e);
                }),
                [a, o] = S.useState(""),
                u = (0, Se.oC)((0, Se.R3)((0, Se.Fm)(s), l), a);
            return (0, E.jsxs)("div", {
                "data-mtctest-ignore": "true",
                children: [
                    null != r &&
                        (0, E.jsxs)(q.B, {
                            style: { gap: 8, marginBottom: 16 },
                            children: [
                                (0, E.jsxs)(es.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: ["Installation ID: ", r],
                                }),
                                cK.p5 &&
                                    (0, E.jsx)(ea.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, cK.C)(r, () => {
                                                (0, E0.P0)((0, E1.o)("Installation ID copied!", E2.Ck.SUCCESS));
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, E.jsx)($.I, { placeholder: "Search experiments", query: a, onChange: o, onClear: () => o("") }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? Ss : Sn;
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
                              className: Si.p$,
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
    Sr = (0, a.zZ)(u.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [Sl] }),
    Sa = (0, a.t_)(u.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [Sr] }),
    So = (0, a.i4)(u.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: Eq.c,
        useMenu: EJ.A,
        buildLayout: () => [Sa],
    }),
    Su = (0, a.WI)(u.X.DEVELOPER_SECTION, {
        useTitle: () => j.intl.string(j.t["+gHUHA"]),
        usePredicate: () => h2.A.isDeveloper,
        buildLayout: () => [So, EQ],
    });
var Sd = i(824552),
    Sc = i(370997);
let Sg = (0, a.E2)(u.X.AUTHORIZED_APPS_LIST_SETTING, {
    Component: Sc.Ay,
    useSearchTerms: () => [j.intl.string(j.t["f6kk+r"])],
});
var Sm = i(187322),
    SA = i(77468),
    Sh = i(289498),
    SE = i(573648),
    SS = i(941314),
    ST = i(874490),
    Sx = i(370480),
    Sp = i(968309);
let Sf = new Set([U.fg2.XBOX, U.fg2.PLAYSTATION, U.fg2.PLAYSTATION_STAGING, U.fg2.CRUNCHYROLL]);
var SN = i(169869),
    S_ = i(235693),
    SI = i(757036),
    SC = i(555837),
    Sb = i(241524),
    Sy = i(346017),
    Sv = i(212739),
    Sj = i(30370),
    SO = i(968671),
    SR = i(674567),
    SD = i(151001),
    SL = i(865096),
    SP = i(437238);
function SG() {
    let e,
        t,
        n,
        s,
        l,
        { variant: r, showFooter: a } =
            ((e = (0, SR.V)()),
            (t = (0, SO.GM)("connectedAccountsBannerFooter")),
            (n = (0, Sv.O)()),
            (l = null != (s = (0, g.bG)([Sj.A], () => Sj.A.getAccount(null, U.fg2.XBOX))) && !s.revoked),
            e === SR.s.NONE || n
                ? { variant: SR.s.NONE, showFooter: !1 }
                : { variant: e, showFooter: t && e === SR.s.NO_ACCESS && !l }),
        { analyticsLocations: o } = (0, nZ.Ay)(e1.A.XBOX_CONNECTED_ACCOUNTS_BANNER),
        u = (0, Sy.yW)(o),
        d = (0, Sb.A)("(max-width: 485px)");
    if (r === SR.s.NONE) return null;
    let c = d ? "md" : "sm",
        m = "",
        A = null;
    switch (r) {
        case SR.s.HAS_ACCESS:
            (m = j.intl.string(SD.default["+QAvQz"])),
                (A = (0, E.jsx)(eG.$, {
                    variant: "overlay-primary",
                    size: c,
                    fullWidth: d,
                    text: j.intl.string(SD.default.CubeLC),
                    onClick: () => {
                        (0, K.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([i.e("30480"), i.e("55251")]).then(
                                i.bind(i, 836291),
                            );
                            return (t) => (0, E.jsx)(e, { ...t, sourceAnalyticsLocations: o });
                        });
                    },
                }));
            break;
        case SR.s.NO_ACCESS:
            (m = j.intl.string(SD.default.NwkRTZ)),
                (A = (0, E.jsx)(sY.A, {
                    defaultTextOverride: j.intl.string(SD.default["0vY+ie"]),
                    variantOverride: "overlay-primary",
                    size: c,
                    fullWidth: d,
                    subscriptionTier: sq.pe.TIER_2,
                }));
            break;
        default:
            (0, N.xb)(r);
    }
    return (0, E.jsxs)(nZ.f5, {
        value: o,
        children: [
            (0, E.jsxs)("div", {
                className: SP.bV,
                children: [
                    (0, E.jsx)(eP.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: j.intl.string(j.t.NG1e6l),
                    }),
                    (0, E.jsx)(uu.t, { size: "xs", color: "var(--icon-default)" }),
                ],
            }),
            (0, E.jsx)(it.N, {
                theme: "dark",
                children: (e) =>
                    (0, E.jsx)("div", {
                        className: e,
                        children: (0, E.jsxs)("div", {
                            className: SP.Nr,
                            children: [
                                (0, E.jsxs)("div", {
                                    className: SP.Tp,
                                    children: [
                                        (0, E.jsx)("div", {
                                            className: SP.Qw,
                                            style: {
                                                backgroundImage: `url(${a ? "https://cdn.discordapp.com/assets/content/1858990b1e56c7d51e887008753104d4663d06c0e0e296d8fe0ea85c7e3e8341.png" : "https://cdn.discordapp.com/assets/content/7308e937fbd3074b9de0ebba1fa3571fa7b10a2b88f384b382f711bae99f40e6.png"})`,
                                            },
                                        }),
                                        (0, E.jsx)("div", { className: SP.$h }),
                                        (0, E.jsx)("div", { className: SP.Rv }),
                                        (0, E.jsx)("div", { className: SP.Lw }),
                                    ],
                                }),
                                (0, E.jsxs)("div", {
                                    className: SP.Mn,
                                    children: [
                                        (0, E.jsxs)("div", {
                                            className: SP.mY,
                                            children: [
                                                (0, E.jsx)("img", {
                                                    className: SP.wm,
                                                    src: "https://cdn.discordapp.com/assets/content/c5fab2b5d1155c4c9bc088b07f8563b6db8d2d08666357486efc5aea6e97fbea.png",
                                                    alt: "Xbox Game Pass",
                                                }),
                                                (0, E.jsx)(es.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: SP.DD,
                                                    children: m,
                                                }),
                                            ],
                                        }),
                                        (0, E.jsx)("div", { className: SP.lO, children: A }),
                                    ],
                                }),
                                a &&
                                    (0, E.jsxs)(E.Fragment, {
                                        children: [
                                            (0, E.jsx)("div", { className: SP.yF }),
                                            (0, E.jsxs)("div", {
                                                className: SP.sQ,
                                                children: [
                                                    (0, E.jsx)(ca.o, {
                                                        size: d ? "md" : "sm",
                                                        color: er.A.colors.ICON_STRONG,
                                                    }),
                                                    (0, E.jsx)(es.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-default",
                                                        children: j.intl.format(SL.default.mXY4Rb, {
                                                            onConnect: () => {
                                                                u(Sy.Hx.CONNECT),
                                                                    (0, Sp.A)({
                                                                        platformType: U.fg2.XBOX,
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
var SM = i(201718),
    SU = i(321078),
    SV = i(672130),
    Sk = i(546183),
    Sw = i(379848),
    SB = i(746910);
function SF(e) {
    let { markAsDismissed: t } = e;
    return (
        S.useEffect(() => t(ig.i.UNKNOWN), [t]),
        (0, E.jsx)(sc.Lp, { className: SB.Ad, text: j.intl.string(j.t.y2b7CA) })
    );
}
function Sz(e) {
    let { title: t, body: i, img: n, newIndicatorDismissibleContent: s, onClick: l } = e;
    return (0, E.jsxs)("div", {
        className: SB.kL,
        children: [
            n,
            (0, E.jsxs)("div", {
                className: SB.FS,
                children: [
                    (0, E.jsxs)("div", {
                        className: SB.TK,
                        children: [
                            (0, E.jsx)(Sw.Ay, {
                                contentTypes: [s],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: i } = e;
                                    return t === s ? (0, E.jsx)(SF, { markAsDismissed: i }) : null;
                                },
                            }),
                            (0, E.jsx)(es.E, { variant: "text-md/semibold", children: t }),
                        ],
                    }),
                    (0, E.jsx)(es.E, { variant: "text-xs/normal", children: i }),
                ],
            }),
            (0, E.jsx)(eG.$, { text: j.intl.string(j.t.vD60Pv), onClick: l }),
        ],
    });
}
let SX = () => {
        let e = tN.A.getArticleURL(U.MVz.PS_CONNECTION);
        return (0, E.jsx)(Sz, {
            title: j.intl.string(j.t.v20wwm),
            body: j.intl.format(j.t.lTZBit, { help_article: e }),
            img: (0, E.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
            newIndicatorDismissibleContent: eU.M.PS_ONE_WAY_RECONNECT,
            onClick: () => (0, Sp.A)({ platformType: U.fg2.PLAYSTATION, location: "PS two way upsell" }),
        });
    },
    SY = "/assets/9df988a227916145.png",
    SH = () =>
        (0, E.jsx)(Sz, {
            title: j.intl.string(SL.default["9cLtDI"]),
            body: j.intl.format(SL.default["D+kUbg"], {
                learnMoreLink: tN.A.getArticleURL(U.MVz.XBOX_GAME_PASS_PERKS),
            }),
            img: (0, E.jsx)("img", { src: SY, width: "auto", height: "45", alt: "" }),
            newIndicatorDismissibleContent: eU.M.XBOX_PERKS_RECONNECT_UPSELL,
            onClick: () => (0, Sp.A)({ platformType: U.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
        }),
    SK = () => {
        let e = tN.A.getArticleURL(U.MVz.XBOX_CONNECTION);
        return (0, E.jsx)(Sz, {
            title: j.intl.string(j.t["2okkZV"]),
            body: j.intl.format(j.t.OnERSS, { help_article: e }),
            img: (0, E.jsx)("img", { src: SY, width: "auto", height: "45", alt: "" }),
            newIndicatorDismissibleContent: eU.M.XBOX_ONE_WAY_RECONNECT,
            onClick: () => (0, Sp.A)({ platformType: U.fg2.XBOX, location: "Xbox two way upsell" }),
        });
    };
var SW = i(783419),
    SZ = i(534952),
    SQ = i(566707),
    Sq = i(82527);
function SJ(e) {
    let t,
        { integration: i } = e,
        {
            isJoining: n,
            joinErrorMessage: s,
            showJoinErrorMessage: l,
        } = (0, g.cf)(
            [Sj.A],
            () => ({
                isJoining: Sj.A.isJoining(i.id),
                joinErrorMessage:
                    "" === Sj.A.joinErrorMessage(i.id) ? j.intl.string(j.t.j2d6Km) : Sj.A.joinErrorMessage(i.id),
                showJoinErrorMessage: void 0 !== Sj.A.joinErrorMessage(i.id),
            }),
            [i.id],
        );
    return (
        null != (0, g.bG)([ec.A], () => ec.A.getGuild(i.guild.id), [i.guild.id]) ||
            (t = (0, E.jsx)(eG.$, {
                size: "sm",
                onClick: function () {
                    SA.A.joinServer(i.id, () => {});
                },
                disabled: n,
                variant: "primary",
                text: n ? j.intl.string(j.t.RXvQQu) : j.intl.string(j.t.XpeFYr),
            })),
        (0, E.jsxs)("div", {
            className: Sq.iA,
            children: [
                (0, E.jsxs)("div", {
                    className: Sq.XX,
                    children: [
                        (0, E.jsx)(g4.Ay, { size: g4.Ay.Sizes.SMALL, guild: i.guild, className: Sq.$f }),
                        (0, E.jsxs)("div", {
                            className: Sq.Vn,
                            children: [
                                (0, E.jsx)(es.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: i.guild.name,
                                }),
                                (0, E.jsx)(di.Anchor, {
                                    href: SE.A.get(i.type)?.getPlatformUserUrl?.(i.account),
                                    children: (0, E.jsx)(es.E, {
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
                    (0, E.jsx)(es.E, {
                        variant: "text-xs/normal",
                        color: "text-feedback-critical",
                        className: Sq.R,
                        children: s,
                    }),
            ],
        })
    );
}
function S$(e) {
    var t;
    let i,
        n,
        { account: s } = e,
        l =
            ((t = s.id),
            (i = (0, SC.G)({ location: "useShouldShowXboxPerksReconnectUpsell" })),
            (n = (0, SI.L)(sq.PremiumTypes.TIER_2)),
            !i && !n && !/^\d+$/.test(t));
    return s.type === U.fg2.XBOX && l
        ? (0, E.jsx)(SH, {})
        : s.twoWayLink
          ? null
          : s.type === U.fg2.XBOX
            ? (0, E.jsx)(SK, {})
            : s.type === U.fg2.PLAYSTATION
              ? (0, E.jsx)(SX, {})
              : null;
}
function S0(e) {
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
        [b, y] = S.useState(!1),
        [v, O] = S.useState([]),
        R = (0, ST.ML)(u.type),
        D = SE.A.get(R),
        L = (0, SS.useIsRiotSocialSDKMigrationEnabled)({ location: "User Settings Connections" });
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
            null != e && (h(e), SA.A.setVisibility(u.type, u.id, e), _(null)),
                null != t && (x(t), SA.A.setMetadataVisibility(u.type, u.id, t), C(null));
        }, [u]),
        (0, E.jsxs)("div", {
            className: Sq.FI,
            children: [
                ((t = SE.A.get(u.type)),
                (i = SE.A.get(R)),
                (n = "1" === (u.metadata ?? {})[SW.pK.TWITTER_VERIFIED]),
                (s = null),
                t.type === U.fg2.TWITTER &&
                    n &&
                    (s = (0, E.jsx)(tr.m, {
                        text: j.intl.string(j.t.Jebrww),
                        children: (0, E.jsx)(tm.A, {
                            color: er.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, E.jsx)(ta.U, { size: "xs", color: er.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, E.jsxs)("div", {
                    className: Sq.Il,
                    children: [
                        (0, E.jsx)("img", {
                            alt: i.name,
                            className: Sq.gj,
                            src: (0, gD.M)(d) ? i.icon.darkSVG : i.icon.lightSVG,
                        }),
                        (0, E.jsxs)("div", {
                            children: [
                                (0, E.jsxs)("div", {
                                    className: Sq.$p,
                                    children: [
                                        (0, E.jsx)(es.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: Sq.RW,
                                            children: u.name,
                                        }),
                                        null != s && (0, E.jsx)("div", { className: Sq.cG, children: s }),
                                    ],
                                }),
                                (0, E.jsx)(es.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: Sq.Au,
                                    children:
                                        null != i.replacedBy && L
                                            ? j.intl.format(SQ.default.Glhokn, { platformName: i.name })
                                            : i.name,
                                }),
                            ],
                        }),
                        (0, E.jsx)(en.D, {
                            className: Sq.uH,
                            onClick: function () {
                                let e = SE.A.get(u.type);
                                (0, K.openModal)((t) =>
                                    (0, E.jsx)(l8.Modal, {
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
                                            Sf.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, E.jsx)(sA.A, {
                                                children: j.intl.format(j.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": j.intl.string(j.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, E.jsx)(gP.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, E.jsx)(S$, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        i = null,
                        n = (0, Sx.An)(t[SW.pK.CREATED_AT], c);
                    switch (e.type) {
                        case U.fg2.REDDIT:
                            i = (0, SN.xE)(t, Sq.Nz);
                            break;
                        case U.fg2.STEAM:
                            i = (0, SN.dy)(t, Sq.Nz);
                            break;
                        case U.fg2.BLUESKY:
                        case U.fg2.TWITTER:
                        case U.fg2.MASTODON:
                            i = (0, SN.ED)(t, Sq.Nz);
                            break;
                        case U.fg2.EBAY:
                            i = (0, SN.ub)(t, Sq.Nz);
                            break;
                        case U.fg2.PAYPAL:
                            i = (0, SN.gZ)(t, Sq.Nz);
                            break;
                        case U.fg2.TIKTOK:
                            i = (0, SN.HU)(t, Sq.Nz);
                    }
                    null !== n &&
                        (null == i && (i = []),
                        i?.push(
                            (0, E.jsx)(
                                es.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: Sq.M4,
                                    children: j.intl.format(j.t["9rfonh"], { date: n }),
                                },
                                "member-since",
                            ),
                        ));
                    let s = v.includes(e.id),
                        l = j.intl.string(j.t.wzzjk9);
                    if (null == i || 0 === i.length)
                        if (!0 !== SE.A.get(e.type).hasMetadata) return null;
                        else
                            (i = [
                                (0, E.jsx)(sc.Lp, { className: Sq.Z3, text: j.intl.string(j.t.y2b7CA) }, "badge"),
                                (0, E.jsx)(
                                    es.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: Sq.vt,
                                        children: j.intl.format(j.t.Up2ni7, {
                                            helpdeskUrl: tN.A.getArticleURL(U.MVz.CONNECTION_DETAILS),
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
                                    className: Sq.jy,
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
                                                  y(!0),
                                                      SA.A.refresh(e.type, e.id).finally(() => {
                                                          setTimeout(() => {
                                                              v.push(e.id), O(v), y(!1);
                                                          }, 2e3);
                                                      });
                                              },
                                    }),
                                },
                                "refresh-button",
                            ),
                        ),
                        (0, E.jsx)("div", { className: Sq.tJ, children: i })
                    );
                })(u),
                (U.txh.has(u.type) &&
                    (l = (0, E.jsx)(J.d, {
                        label: j.intl.string(j.t["+KCMSi"]),
                        checked: g,
                        onChange: function (e) {
                            m(e), SA.A.setFriendSync(u.type, u.id, e);
                        },
                    })),
                U.ewM.has(u.type) &&
                    (r = (0, E.jsx)(J.d, {
                        label: j.intl.format(j.t["6u6J0q"], { platform: D.name }),
                        checked: p,
                        onChange: function (e) {
                            f(e), SA.A.setShowActivity(u.type, u.id, e);
                        },
                    })),
                SE.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, E.jsx)(J.d, {
                        label: j.intl.string(j.t.FYKGsL),
                        checked: 1 === T,
                        onChange: function (e) {
                            let { verified: t } = u,
                                i = +!!e;
                            if (e && !t) {
                                C(i), (0, Sp.A)({ platformType: u.type, location: "User Settings" });
                                return;
                            }
                            x(i), SA.A.setMetadataVisibility(u.type, u.id, i);
                        },
                        disabled: 1 !== A || null == u.metadata,
                    })),
                (0, E.jsxs)("div", {
                    className: Sq.HZ,
                    children: [
                        (0, E.jsx)(J.d, {
                            label: j.intl.string(j.t.f7yOAX),
                            checked: 1 === A,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    i = +!!e;
                                if (e && !t) {
                                    _(i), (0, Sp.A)({ platformType: u.type, location: "User Settings" });
                                    return;
                                }
                                h(i), SA.A.setVisibility(u.type, u.id, i);
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
                                  (0, Sp.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                      })
                    : u.integrations.length > 0
                      ? (0, E.jsx)(s4.D, {
                            label: j.intl.string(j.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, E.jsx)(SJ, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, E.jsx)(S_.A, { partner: u.type }),
            ],
        })
    );
}
function S1(e) {
    let { appIdentity: t, oauth2Token: i } = e;
    return null == i
        ? null
        : (0, E.jsxs)("div", {
              className: Sq.FI,
              children: [
                  (function (e, t) {
                      let { application: i } = t,
                          n = nt.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
                      return (0, E.jsxs)("div", {
                          className: Sq.Il,
                          children: [
                              (0, E.jsx)("img", { alt: i.name, className: e6()(Sq.gj, Sq.sN), src: n }),
                              (0, E.jsxs)("div", {
                                  children: [
                                      (0, E.jsx)("div", {
                                          className: Sq.$p,
                                          children: (0, E.jsx)(es.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: Sq.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, E.jsx)(es.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: Sq.Au,
                                          children: i.name,
                                      }),
                                  ],
                              }),
                              (0, E.jsx)(en.D, {
                                  className: Sq.uH,
                                  onClick: () =>
                                      (0, Sc.d1)(i, t.scopes, () => {
                                          Sd.A.delete(t.id);
                                      }),
                                  "aria-label": j.intl.string(j.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, E.jsx)(gP.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, i),
                  (0, E.jsx)("div", {
                      className: Sq.HZ,
                      children: (0, E.jsx)(J.d, {
                          label: j.intl.string(j.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              SM.A.updateApplicationIdentityConfig(i.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function S2(e) {
    let t = SE.A.get(e);
    (0, Sp.A)({ platformType: t.type }),
        G.default.track(U.HAw.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        });
}
function S3() {
    let e = (0, ST.gn)(),
        t = (0, SS.useIsRiotSocialSDKMigrationEnabled)({ location: "User Settings Connections" }),
        i = (0, ti.A)(t ? SZ.tX : []);
    return (0, E.jsxs)("div", {
        className: Sq.lA,
        children: [
            i.map(
                (e) =>
                    null != e &&
                    (0, E.jsx)(
                        SV.A,
                        { application: e, className: Sq.__invalid_accountButton, innerClassName: Sq.U$ },
                        e.id,
                    ),
            ),
            e
                .slice(0, 10 - i.length)
                .map((e) =>
                    (0, E.jsx)(
                        Sh.A,
                        { type: e.type, className: Sq.__invalid_accountButton, innerClassName: Sq.U$ },
                        e.type,
                    ),
                ),
            (0, E.jsx)(tr.m, {
                text: j.intl.string(j.t.QqTz8b),
                children: (0, E.jsx)("div", {
                    className: e6()(Sq.ej, Sq.__invalid_accountButton),
                    children: (0, E.jsx)(Sm.vN, {
                        children: (0, E.jsx)("button", {
                            className: e6()(Sq.R8, Sq.U$),
                            type: "button",
                            onClick: function () {
                                sa.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: S2 });
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
function S6(e) {
    let t,
        { fetching: i, accounts: n, appIdentities: s, authorizedApps: l, theme: r, locale: a } = e,
        u = (0, o.SV)("ConnectionsList"),
        d = S.useMemo(() => n.filter((e) => SE.A.isSupported(e.type)), [n]);
    return (
        (t = i
            ? (0, E.jsx)(dp.y, { type: dp.y.Type.SPINNING_CIRCLE })
            : 0 === d.length && 0 === s.length
              ? (0, E.jsx)(iN.pp, {
                    theme: r,
                    className: u ? Sq.p$ : void 0,
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
                                S1,
                                { appIdentity: e, oauth2Token: l.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        d.map((e, t) =>
                            (0, E.jsx)(
                                S0,
                                {
                                    theme: r,
                                    account: e,
                                    locale: a,
                                    onDisconnect: () =>
                                        (function (e) {
                                            let { type: t, id: i } = e;
                                            SA.A.disconnect(t, i);
                                        })(e),
                                },
                                `connection-${t}`,
                            ),
                        ),
                    ],
                })),
        (0, E.jsx)("div", { className: Sq.V, children: t })
    );
}
let S4 = (0, a.E2)(u.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            let e = (0, o.SV)("NewConnectSection");
            return (0, E.jsx)(s4.D, {
                label: j.intl.string(e ? j.t["t+aGse"] : j.t.ZeDrUf),
                description: e ? void 0 : j.intl.format(j.t["oYc+Gz"], { privacyPolicyUrl: U.X7G.PRIVACY }),
                children: (0, E.jsx)(S3, {}),
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
    S7 = (0, a.E2)(u.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, g.bG)([eB.A], () => eB.A.hidePersonalInformation),
                t = (0, g.bG)([Sj.A], () => Sj.A.isFetching()),
                i = (0, g.bG)([Sj.A], () => Sj.A.getAccounts()),
                { authorizedAppsFetchState: n, authorizedApps: s } = (0, g.cf)([Sk.default], () => ({
                    authorizedAppsFetchState: Sk.default.getFetchState(),
                    authorizedApps: Sk.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: l, filteredAppIdentities: r } = (0, SU.A)(io.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, cN.Ay)(),
                o = (0, g.bG)([d7.default], () => d7.default.locale);
            return (S.useEffect(() => {
                n === Sk.FetchState.NOT_FETCHED && Sd.A.fetch();
            }, [n]),
            e)
                ? null
                : (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsx)(SG, {}),
                          (0, E.jsx)(S6, {
                              fetching: t || l || (r.length > 0 && n !== Sk.FetchState.FETCHED),
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
            SA.A.fetch();
        },
        useSearchTerms: () => [
            j.intl.string(j.t["+/hZM/"]),
            j.intl.string(j.t.bsbMVz),
            j.intl.string(j.t.f7yOAX),
            j.intl.string(j.t.FYKGsL),
            j.intl.string(j.t["+KCMSi"]),
        ],
    });
var S5 = i(46225);
let S8 = [U.fg2.LEAGUE_OF_LEGENDS, U.fg2.RIOT_GAMES];
function S9() {
    let e = (0, g.bG)([Sj.A], () => Sj.A.getAccounts().find((e) => S8.includes(e.type))?.type),
        t = null != e ? SE.A.get(e) : null,
        i = (0, ti.h)(t?.replacedBy),
        { canStartAuthorization: n, hasAlreadyLinked: s, fetched: l } = (0, S5.RD)(i),
        r = j.intl.string(SQ.default["1S6oAo"]),
        a = (0, SS.useIsRiotSocialSDKMigrationEnabled)({ location: "RiotDeprecationInlineNotice" });
    return S.useMemo(
        () =>
            a && null != t && n && i?.connectionEntrypointUrl != null && !s && l
                ? {
                      type: h.lT.INLINE_NOTICE,
                      noticeType: "info",
                      useText: () =>
                          j.intl.format(SQ.default.DeOsIl, {
                              connectionName: t.name,
                              applicationName: r,
                              connectionEntrypointUrl: i.connectionEntrypointUrl,
                          }),
                  }
                : null,
        [t, r, i, n, a, s, l],
    );
}
let Te = (0, a.zZ)(u.X.CONNECTIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["3fe7U5"]),
        useSubtitle: () => j.intl.string(j.t.U22vw6),
        useInlineNotice: S9,
        buildLayout: () => [S4, S7],
    }),
    Tt = (0, a.zZ)(u.X.AUTHORIZED_APPS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        useSubtitle: () => j.intl.string(j.t.G9JfLg),
        buildLayout: () => [Sg],
        initialize: () => (
            Sd.A.fetch(),
            () => {
                Sc.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    Ti = (0, a.t_)(u.X.CONNECTED_APPS_PANEL, {
        useTitle: () => j.intl.string(j.t.lrVuZO),
        useObscuredNotice: dT.L,
        buildLayout: () => [Te, Tt],
    }),
    Tn = (0, a.i4)(u.X.CONNECTED_APPS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.lrVuZO),
        icon: Eo.q,
        buildLayout: () => [Ti],
    }),
    Ts = (0, a.WI)(u.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => j.intl.string(j.t.BA9200),
        buildLayout: () => [i0, eR, iS, Tn],
    });
var Tl = i(631670),
    Tr = i(619499),
    Ta = i(836602),
    To = i(591179),
    Tu = i(854627),
    Td = i(975732),
    Tc = i(761508),
    Tg = i(83257),
    Tm = i(159001),
    TA = i(344346),
    Th = i(919395),
    TE = i(498793);
function TS(e) {
    let { title: t, children: i } = e;
    return (0, E.jsxs)("div", {
        children: [(0, E.jsx)(eP.D, { variant: "text-md/medium", className: TE.Vf, children: t }), i],
    });
}
function TT(e) {
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
        className: e6()(TE.UA, i),
        children: (0, E.jsxs)("div", {
            className: e6()(TE.yt, n),
            children: [
                (0, E.jsx)("div", {
                    className: e6()(TE.Fp, a && TE.Oz),
                    children: (0, E.jsxs)(E.Fragment, {
                        children: [
                            (0, E.jsx)(TS, { title: l ?? j.intl.string(j.t.Zb06yP), children: s }),
                            null != r ? (0, E.jsx)(TS, { title: j.intl.string(j.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, E.jsx)("div", { className: TE.oB, children: t }),
            ],
        }),
    });
}
var Tx = i(986687),
    Tp = i(101058),
    Tf = i(841595),
    TN = i(696451),
    T_ = i(305262);
function TI() {
    return (0, E.jsxs)("div", {
        className: T_.p$,
        children: [
            (0, E.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: T_.Sl }),
            (0, E.jsx)(eP.D, {
                className: T_.h8,
                variant: "heading-lg/extrabold",
                children: j.intl.string(j.t.Z1OZCV),
            }),
            (0, E.jsx)(es.E, { className: T_.h8, variant: "text-md/normal", children: j.intl.string(j.t.ZSt4Tt) }),
            (0, E.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: T_.h8,
                children: (0, E.jsx)(eG.$, {
                    variant: "primary",
                    text: j.intl.string(j.t.jQ3pqt),
                    onClick: function () {
                        (0, s7.pX)(U.BVt.GUILD_DISCOVERY), (0, sH.default)();
                    },
                }),
            }),
        ],
    });
}
var TC = i(81400),
    Tb = i(252732),
    Ty = i(355622),
    Tv = i(408018),
    Tj = i(138617),
    TO = i(424135);
let TR = (0, sZ.Ld)(),
    TD = (0, il.createChannelRecord)({ id: "1", type: U.rbe.DM }),
    TL = (0, sZ.Ld)();
function TP(e) {
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
        [d, c] = S.useState((0, Tv.x7)(o)),
        g = S.useRef(r),
        m = S.useRef(!1);
    return (
        S.useEffect(() => {
            if (g.current !== r) {
                let e = (0, Tv.x7)(r);
                u(r), c(e);
            }
            g.current = r;
        }, [r]),
        S.useEffect(() => {
            void 0 !== s || o === r || m.current || (u(r), c((0, Tv.x7)(r)));
        }, [s, r, o]),
        (0, E.jsxs)(ug.A, {
            title: t,
            titleId: TR,
            description: j.intl.string(j.t.Bbw6Ac),
            errors: i,
            disabled: a,
            children: [
                (0, E.jsx)(Tj.Ay, {
                    "aria-describedby": TL,
                    "aria-labelledby": TR,
                    className: TO.i,
                    innerClassName: TO.Z,
                    maxCharacterCount: U.NA2,
                    onChange: function (e, t, i) {
                        t !== o && (u(t), c(i), n(t));
                    },
                    placeholder: l,
                    channel: TD,
                    textValue: o,
                    richValue: d,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: eH.USER_SETTINGS_MODAL_KEY,
                    type: Ty.oU.PROFILE_BIO_INPUT,
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
                (0, E.jsx)(eo.A, { id: TL, children: j.intl.format(j.t["+DFxLc"], { maxLength: U.NA2 }) }),
            ],
        })
    );
}
var TG = i(930861),
    TM = i(821956),
    TU = i(562819),
    TV = i(84540),
    Tk = i(317783);
function Tw(e) {
    let { user: t, guild: i, className: n, sectionTitle: s, forcedDivider: l = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, nZ.Ay)(),
        o = (0, Th.a4)({ user: t, guildId: i?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, Th.CP)(i?.id),
        c = r ? TG.wL : oa.$n;
    return (0, E.jsx)(ug.A, {
        className: n,
        forcedDivider: l,
        hasBackground: !0,
        title: s,
        errors: d,
        children: (0, E.jsxs)("div", {
            className: Tk.NC,
            children: [
                (0, E.jsx)(c, {
                    size: oa.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, TU.L)({ analyticsLocations: a, guild: i });
                    },
                    className: e6()({ [Tk.yj]: r }),
                    children: j.intl.string(j.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Tk.DT,
                        children: (0, E.jsx)(eG.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, TM.uZ)(t, i) ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.OrokWm),
                            onClick: function () {
                                (0, TV.p)({ guildId: i?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var TB = i(339984),
    TF = i(290845);
let Tz = [{ name: "gif", extensions: ["gif"] }];
function TX(e) {
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
        { newestAnalyticsLocation: g } = (0, nZ.Ay)(),
        m = c ? TG.wL : oa.$n,
        A = S.useCallback(() => {
            (0, Tb.XD)({
                uploadType: TB.HL.AVATAR,
                analyticsSource: g,
                filters: u ? Tz : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, g, u]);
    return (0, E.jsx)(ug.A, {
        className: a,
        title: s,
        errors: i,
        disabled: o,
        forcedDivider: d,
        children: (0, E.jsxs)("div", {
            className: TF.NC,
            children: [
                (0, E.jsx)(m, {
                    className: e6()({ [TF.yj]: c }),
                    size: oa.$n.Sizes.SMALL,
                    onClick: A,
                    children: l ?? j.intl.string(j.t["4OynCD"]),
                }),
                t &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TF.DT,
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
var TY = i(446887);
function TH(e) {
    let { user: t, guildId: i, className: n } = e,
        s = uT.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: l } = (0, nZ.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, Th.B0)(t, i),
        d = (0, S.useCallback)(() => {
            G.default.track(U.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS), (0, nQ.L)({ analyticsLocations: l, guildId: i });
        }, [l, i]),
        c = (0, S.useCallback)(() => {
            (0, TV.p)({ displayNameStyles: null }), G.default.track(U.HAw.DISPLAY_NAME_STYLES_REMOVED);
        }, []),
        g = (0, S.useCallback)(() => {
            (0, TV.p)({ guildId: i, displayNameStyles: null });
        }, [i]),
        m = void 0 !== o ? o : null != i ? a : r;
    return (0, E.jsx)(ug.A, {
        title: j.intl.string(nq.default["86GtGH"]),
        className: n,
        showPremiumIcon: s,
        errors: u,
        children: (0, E.jsxs)("div", {
            className: TY.N,
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
var TK = i(637193),
    TW = i(784841);
function TZ(e) {
    let { user: t, guild: i, titleIcon: n } = e,
        { analyticsLocations: s } = (0, nZ.Ay)(),
        l = null != i,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, Th.rv)(t, i?.id),
        d = S.useCallback(() => {
            (0, TK.p)({ analyticsLocations: s, guildId: i?.id });
        }, [s, i?.id]),
        c = S.useCallback(() => {
            (0, TV.p)({ guildId: i?.id, nameplate: null });
        }, [i?.id]);
    return (0, E.jsx)(ug.A, {
        title: j.intl.string(j.t.x5CoXR),
        titleIcon: n,
        errors: u,
        children: (0, E.jsxs)("div", {
            className: TW.u,
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
var TQ = i(951551);
function Tq(e) {
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
        { newestAnalyticsLocation: c } = (0, nZ.Ay)(),
        g = d ? TG.wL : oa.$n;
    return (0, E.jsx)(ug.A, {
        className: l,
        title: j.intl.string(j.t.Vgdusv),
        showPremiumIcon: a,
        errors: i,
        disabled: r,
        forcedDivider: u,
        children: (0, E.jsxs)("div", {
            className: TQ.NC,
            children: [
                (0, E.jsx)(g, {
                    className: e6()({ [TQ.yj]: d }),
                    size: oa.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, Tb.XD)({ uploadType: TB.HL.BANNER, analyticsSource: c, guildId: s, isTryItOut: o }),
                    children: j.intl.string(j.t.N0bC3P),
                }),
                t &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TQ.DT,
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
var TJ = i(617061),
    T$ = i(790774);
function T0(e) {
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
        { analyticsLocations: u } = (0, nZ.Ay)(),
        d = uT.Ay.canUsePremiumProfileCustomization(t),
        c = (0, Th.N2)({ user: t, guildId: i?.id }),
        { pendingProfileEffect: g, errors: m } = (0, Th.nZ)(i?.id);
    S.useEffect(() => {
        d &&
            G.default.track(U.HAw.PREMIUM_UPSELL_VIEWED, {
                type: sq.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            });
    }, [d, u]);
    let A = a ? TG.wL : oa.$n;
    return (0, E.jsx)(ug.A, {
        forcedDivider: r,
        borderType: cD.i.PREMIUM,
        hasBackground: !0,
        title: l,
        showBorder: o,
        errors: m,
        className: s,
        children: (0, E.jsxs)("div", {
            className: T$.NC,
            children: [
                (0, E.jsx)(A, {
                    size: oa.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, TJ.W)({ analyticsLocations: u, guild: i, initialSelectedEffect: n });
                    },
                    className: e6()({ [T$.yj]: a }),
                    children: j.intl.string(j.t["/dRfCf"]),
                }),
                (void 0 === g ? null != c : null != g) &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: T$.DT,
                        children: (0, E.jsx)(eG.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != i ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.uMuafO),
                            onClick: function () {
                                (0, TV.p)({ guildId: i?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var T1 = i(13875),
    T2 = i(515727),
    T3 = i(524732);
function T6(e) {
    let { user: t, guild: i, sectionTitle: n } = e,
        { analyticsLocations: s } = (0, nZ.Ay)(),
        l = (0, T1.sk)("ProfileFrameSection"),
        r = (0, Th.Xf)({ user: t, guildId: i?.id }),
        { pendingProfileFrame: a, errors: o } = (0, Th.Tu)(i?.id),
        [u, d] = (0, eV.kn)([eU.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        c = u === eU.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return l
        ? (0, E.jsx)(ug.A, {
              showBorder: c,
              borderType: c ? cD.i.NEW_UPSELL : cD.i.PREMIUM,
              hasBackground: c,
              title: n,
              titleBadge: c ? (0, E.jsx)(sc.Lp, { text: j.intl.string(j.t.y2b7CA), className: T3.Ad }) : void 0,
              description: c ? j.intl.string(j.t.yMoMAt) : void 0,
              errors: o,
              children: (0, E.jsxs)("div", {
                  className: T3.NC,
                  children: [
                      (0, E.jsx)(eG.$, {
                          variant: "primary",
                          size: "sm",
                          text: j.intl.string(j.t["9/hmle"]),
                          onClick: function () {
                              (0, T2.w)({ analyticsLocations: s, guild: i }), d(ig.i.TAKE_ACTION);
                          },
                      }),
                      (void 0 === a ? null != r : null != a) &&
                          (0, E.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: T3.DT,
                              children: (0, E.jsx)(eG.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: null != i ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.nQBruk),
                                  onClick: function () {
                                      (0, TV.p)({ guildId: i?.id, profileFrame: null });
                                  },
                              }),
                          }),
                  ],
              }),
          })
        : null;
}
var T4 = i(602853),
    T7 = i(654107),
    T5 = i(999291),
    T8 = i(101928),
    T9 = i(317097),
    xe = i(508274),
    xt = i(919796),
    xi = i(378487);
function xn(e) {
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
        c = (0, T4.r)(er.A.colors.BACKGROUND_BASE_LOW).hex(),
        g = er.A.colors.BACKGROUND_MOD_MUTED.css,
        m = (0, Tb.sN)(n),
        A = (0, T9.Hl)(n),
        h = A === c ? g : A,
        T = m ? er.A.unsafe_rawColors.WHITE.css : er.A.unsafe_rawColors.PRIMARY_530.css,
        x = (0, xt.A)(a),
        p = (0, xt.A)(o),
        [f, N] = S.useState((0, df.A)());
    return (
        S.useEffect(() => {
            (x !== a || p !== o) && N((0, df.A)());
        }, [o, a, p, x]),
        (0, E.jsx)(ee.Y, {
            targetElementRef: d,
            positionKey: f,
            renderPopout: (e) =>
                (0, E.jsx)(xe.VN, {
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
                    className: e6()(xi.oP, { [xi.r9]: l }),
                    children: [
                        (0, E.jsx)(en.D, {
                            ...i,
                            tabIndex: l ? -1 : 0,
                            onClick: l ? U.tEg : t,
                            style: { backgroundColor: A, borderColor: h },
                            className: xi.nf,
                            "aria-label": j.intl.string(j.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, E.jsx)(uS.R, {
                                size: "custom",
                                className: xi.BW,
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
var xs = i(648608);
function xl(e) {
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
        c = (0, T5.Ay)(t.id, r),
        { primaryColor: g, secondaryColor: m } = (0, T8.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: n,
            isPreview: !0,
        }),
        A = uT.Ay.canUsePremiumProfileCustomization(t),
        h = null != i ? i : t.getAvatarURL(r, 80),
        S = (0, T4.r)(er.A.unsafe_rawColors.PRIMARY_530).hex(),
        T = (0, T7.rh)(h, S, !1);
    return null == g || null == m
        ? null
        : (0, E.jsx)(ug.A, {
              title: j.intl.string(j.t.DMeO2X),
              disabled: !A && !l,
              className: e6()(xs.__invalid_profileThemesSection, a),
              showPremiumIcon: o,
              forcedDivider: d,
              children: (0, E.jsxs)("div", {
                  className: xs.hd,
                  children: [
                      (0, E.jsx)("div", {
                          className: xs.YX,
                          children: (0, E.jsx)(xn, {
                              onChange: (e) => s([e, m]),
                              color: g,
                              suggestedColors: T,
                              showEyeDropper: !0,
                              label: (0, E.jsx)(es.E, {
                                  className: xs.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: j.intl.string(j.t.C3KTQk),
                              }),
                          }),
                      }),
                      (0, E.jsx)("div", {
                          className: xs.YX,
                          children: (0, E.jsx)(xn, {
                              onChange: (e) => s([g, e]),
                              color: m,
                              suggestedColors: T,
                              showEyeDropper: !0,
                              label: (0, E.jsx)(es.E, {
                                  className: xs.yz,
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
                              className: xs.WA,
                              children: (0, E.jsx)(eG.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: j.intl.string(j.t["L+GmoR"]),
                                  onClick: () => s([null, null]),
                              }),
                          }),
                  ],
              }),
          });
}
function xr(e) {
    let {
            sectionTitle: t,
            errors: i,
            onPronounsChange: n,
            pendingPronouns: s,
            placeholder: l,
            currentPronouns: r,
            disabled: a = !1,
        } = e,
        o = (0, sZ.GV)();
    return (0, E.jsx)(ug.A, {
        title: t,
        titleId: o,
        errors: i,
        disabled: a,
        children: (0, E.jsx)(l9.k, {
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
var xa = i(427262),
    xo = i(684732),
    xu = i(576705),
    xd = i(656358);
function xc(e) {
    let { errors: t, pendingNick: i, currentNick: n, username: s, user: l, guild: r } = e,
        a = (0, g.bG)([xu.A], () => xu.A.can(U.xBc.CHANGE_NICKNAME, r) || xu.A.can(U.xBc.MANAGE_NICKNAMES, r)),
        o = (0, SI.L)(sq.PremiumTypes.TIER_2);
    return (0, E.jsxs)(ug.A, {
        title: j.intl.string(j.t.me1lRk),
        errors: t,
        children: [
            (0, E.jsx)(l9.k, {
                value: i ?? n ?? "",
                placeholder: s,
                maxLength: U.d0r,
                onChange: function (e) {
                    (0, TV.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : j.intl.string(j.t.gzjxQi),
            }),
            o && (0, E.jsx)(TH, { user: l, guildId: r.id, className: xd.F }),
        ],
    });
}
var xg = i(753757);
let xm = "/assets/b25da78aa7949feb.png";
function xA(e) {
    let { user: t, showOverlay: i, children: n } = e,
        s = (0, cN.Ay)(),
        { analyticsLocations: l } = (0, nZ.Ay)(e1.A.PREMIUM_UPSELL_OVERLAY);
    return (S.useEffect(() => {
        i &&
            G.default.track(U.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: l,
                type: sq.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            });
    }, [i, l]),
    i)
        ? (0, E.jsxs)("div", {
              className: xg.ry,
              children: [
                  (0, E.jsx)("div", { children: n }),
                  (0, E.jsxs)("div", {
                      className: xg.Wc,
                      children: [
                          (0, E.jsx)("img", {
                              className: xg.Tn,
                              alt: j.intl.string(j.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case U.NJ8.DARK:
                                      case U.NJ8.DARKER:
                                      case U.NJ8.MIDNIGHT:
                                          return xm;
                                      case U.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return xm;
                                  }
                              })(s),
                          }),
                          (0, E.jsxs)("div", {
                              className: xg._9,
                              children: [
                                  (0, E.jsx)(es.E, {
                                      variant: "text-lg/semibold",
                                      color: "always-white",
                                      children: j.intl.string(j.t.dMaDFX),
                                  }),
                                  (0, E.jsx)(es.E, {
                                      variant: "text-sm/normal",
                                      color: "always-white",
                                      children: j.intl.string(j.t.F7sgFH),
                                  }),
                              ],
                          }),
                          (0, E.jsx)(cR.A, {
                              size: oa.$n.Sizes.LARGE,
                              color: oa.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: uT.Ay.isPremium(t)
                                      ? j.intl.string(j.t.AfRWI8)
                                      : j.intl.string(j.t.nkdUym),
                              },
                              subscriptionTier: sq.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : n;
}
var xh = i(188323);
function xE() {
    let e = (0, g.bG)([io.default], () => {
            let e = io.default.getCurrentUser();
            return tz()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        t = (0, SI.L)(sq.PremiumTypes.TIER_2),
        i = (0, g.bG)([Ta.A, ec.A], () => ec.A.getGuild(Ta.A.selectedGuildId));
    tz()(null != i, "guild should not be null");
    let {
            pendingAvatar: n,
            pendingNickname: s,
            pendingBanner: l,
            pendingBio: r,
            pendingPronouns: a,
            pendingThemeColors: o,
            errors: u,
        } = (0, g.cf)([Ta.A], () => ({ ...Ta.A.getPendingChanges(i.id), errors: Ta.A.getErrors(i.id) })),
        d = (0, Tp.V7)({ userId: e.id, image: n }),
        c = (0, TC.EC)(i.id),
        m = (0, g.bG)([TN.Ay], () => (null == i.id ? null : TN.Ay.getMember(i.id, e.id))),
        A = (0, g.bG)([Tf.A], () => Tf.A.getGuildMemberProfile(e.id, i.id)),
        h = uT.Ay.canUsePremiumProfileCustomization(e),
        S = (0, Th.z5)(n, m?.avatar),
        T = (0, Th.Ac)(l, A?.banner),
        x = (0, xo.l)(o, A?.themeColors),
        p = A?.bio ?? "",
        f = A?.pronouns ?? "";
    return (0, E.jsxs)("div", {
        className: xh.Q,
        children: [
            (0, E.jsx)(
                xc,
                {
                    errors: u?.nick ?? c?.nick,
                    username: xa.Ay.getName(e),
                    pendingNick: s,
                    currentNick: m?.nick,
                    user: e,
                    guild: i,
                },
                "nick",
            ),
            (0, E.jsx)(
                xr,
                {
                    sectionTitle: j.intl.string(j.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, TV.p)({ guildId: i.id, pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: f,
                },
                "pronouns",
            ),
            (0, E.jsxs)(xA, {
                user: e,
                showOverlay: !h,
                children: [
                    (0, E.jsx)(
                        TX,
                        {
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t.lqaIxI),
                                    (0, E.jsx)(tr.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(uu.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xh.a,
                                        }),
                                    }),
                                ],
                            }),
                            showRemoveAvatarButton: S,
                            onAvatarChange: (e) =>
                                (0, Tb.rM)(e, m?.avatar, (e) => (0, TV.p)({ guildId: i.id, avatar: e })),
                            errors: u?.avatar,
                            guildId: i.id,
                            disabled: !h,
                        },
                        "avatar",
                    ),
                    (0, E.jsx)(
                        Tw,
                        {
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t["7v0T9P"]),
                                    (0, E.jsx)(tr.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(uu.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xh.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: e,
                            guild: i,
                        },
                        "decoration",
                    ),
                    !t && (0, E.jsx)(TH, { user: e, guildId: i.id }),
                    (0, E.jsx)(
                        TZ,
                        {
                            user: e,
                            guild: i,
                            titleIcon: (0, E.jsx)(tr.m, {
                                text: j.intl.string(j.t["5AFxuK"]),
                                children: (0, E.jsx)(uu.t, { size: "md", color: "currentColor", className: xh.a }),
                            }),
                        },
                        "nameplate",
                    ),
                    (0, E.jsx)(
                        T0,
                        {
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t.wR5wOo),
                                    (0, E.jsx)(tr.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(uu.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xh.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: e,
                            guild: i,
                        },
                        "effect",
                    ),
                    (0, E.jsx)(
                        T6,
                        {
                            user: e,
                            guild: i,
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t.GWrZOd),
                                    (0, E.jsx)(tr.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(uu.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xh.a,
                                        }),
                                    }),
                                ],
                            }),
                        },
                        "frame",
                    ),
                    (0, E.jsx)(
                        Tq,
                        {
                            showRemoveBannerButton: T,
                            errors: u?.banner,
                            onBannerChange: (e) =>
                                (0, Tb.rM)(e, A?.banner, (e) => (0, TV.p)({ guildId: i.id, banner: e })),
                            guildId: i.id,
                            disabled: !h,
                        },
                        "banner",
                    ),
                    (0, E.jsx)(xl, {
                        user: e,
                        pendingAvatarSrc: d,
                        pendingColors: o,
                        onThemeColorsChange: (e) => (0, TV.p)({ guildId: i.id, themeColors: e }),
                        guildId: i.id,
                        showResetThemeButton: x,
                    }),
                    (0, E.jsx)(
                        TP,
                        {
                            placeholder: j.intl.string(j.t["/7NKgv"]),
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t.ZzAR2Y),
                                    (0, E.jsx)(tr.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(uu.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xh.a,
                                        }),
                                    }),
                                ],
                            }),
                            onBioChange: (e) => (0, TV.p)({ guildId: i.id, bio: e }),
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
var xS = i(9606);
function xT(e) {
    (0, K.openModalLazy)(async () => {
        let { default: t } = await Promise.all([i.e("85029"), i.e("66901"), i.e("61129")]).then(i.bind(i, 475312));
        return (i) => (0, E.jsx)(t, { source: { ...e, page: U.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...i });
    });
}
function xx(e) {
    let { selectedGuild: t, onGuildChange: i } = e,
        { analyticsLocations: n } = (0, nZ.Ay)(e1.A.USER_SETTINGS_GUILD_PROFILE),
        s = (0, g.bG)([io.default], () => {
            let e = io.default.getCurrentUser();
            return tz()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        l = (0, g.bG)([TN.Ay], () => (null != t ? TN.Ay.getMember(t.id, s.id) : null)),
        r = (0, g.bG)([Tf.A], () => !Tf.A.isFetchingProfile(s.id, t?.id)),
        a = (0, g.bG)([eB.A], () => eB.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, g.cf)([Ta.A], () => Ta.A.getPendingChanges(t?.id)),
        c = (0, Tp.V7)({ userId: s.id, image: o }),
        m = (0, Th.lw)({
            pendingValue: u,
            userValue: s?.collectibles?.nameplate,
            guildValue: l?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: A } = (0, Th.B0)(s, t?.id);
    return (S.useEffect(() => () => sa.h.wait(Tm.IM), []), a)
        ? (0, E.jsx)(dT.A, {})
        : r
          ? (0, E.jsxs)(nZ.f5, {
                value: n,
                children: [
                    (0, E.jsx)(es.E, {
                        variant: "text-sm/normal",
                        children: j.intl.format(j.t["/PTB2E"], {
                            helpCenterLink: tN.A.getArticleURL(U.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(uc.A, { guildId: t.id, onChange: i }),
                                  (0, E.jsx)(TT, {
                                      profilePreviewTitle: (0, E.jsx)(eP.D, {
                                          variant: "heading-md/medium",
                                          className: xS.YV,
                                          children: j.intl.formatToPlainString(j.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, E.jsx)(Tx.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: A,
                                          user: s,
                                          guild: t,
                                          canUsePremiumCustomization: uT.Ay.canUsePremiumProfileCustomization(s),
                                          onUpsellClick: xT,
                                          containerClassName: xS.ti,
                                      }),
                                      nameplatePreview: (0, E.jsx)(TA.A, {
                                          ...d,
                                          pendingDisplayNameStyles: A,
                                          user: s,
                                          guildId: t?.id,
                                          nameplate: m,
                                          className: null == m ? xS.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, E.jsx)(xE, {}),
                                  }),
                              ],
                          })
                        : (0, E.jsx)(TI, {}),
                ],
            })
          : (0, E.jsx)(dp.y, {});
}
var xp = i(903209),
    xf = i(702641);
function xN(e) {
    let { children: t, notice: i } = e;
    return (0, E.jsxs)("div", { className: xf.r, children: [i, (0, E.jsx)("div", { children: t })] });
}
var x_ = i(269115),
    xI = i(823092),
    xC = i(662388),
    xb = i(379197),
    xy = i(488430),
    xv = i(457421),
    xj = i(940622),
    xO = i(779982),
    xR = i(569438);
let xD = function () {
    let e,
        t,
        i,
        n,
        { analyticsLocations: s } = (0, nZ.Ay)(e1.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        l = S.useRef(null),
        {
            asset: r,
            popoutAsset: a,
            title: o,
            body: u,
            version: d,
            revertTextColor: c,
        } = ((e = (0, xj.mb)(xO.RN.UPSELL_BANNER)),
        (t = (0, xj.mb)(xO.RN.UPSELL_BANNER_POPOUT)),
        (i = (0, g.bG)([xv.A], () => xv.A.getMarketingBySurface(xb.R.EDIT_PROFILE_SETTINGS))),
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
            () => ({ ...n, type: xy.G.BANNER, asset: e ?? n.asset, popoutAsset: t ?? n.popoutAsset }),
            [e, t, n],
        )),
        { navigateWithValidation: m } = (0, xI.L_)();
    return (
        S.useEffect(() => {
            G.default.track(U.HAw.PREMIUM_UPSELL_VIEWED, {
                type: sq.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: s,
                version: d,
            });
        }, [s, d]),
        (0, E.jsxs)("div", {
            ref: l,
            className: xR.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, E.jsx)("div", {
                    className: xR.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, E.jsx)("img", { src: a, className: xR.Qw, alt: "" }),
                }),
                (0, E.jsxs)("div", {
                    className: xR.Em,
                    children: [
                        (0, E.jsx)(eP.D, {
                            variant: "heading-lg/extrabold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: xR.DD,
                            children: o,
                        }),
                        (0, E.jsx)(es.E, {
                            variant: "text-sm/normal",
                            color: c ? "text-overlay-dark" : "currentColor",
                            children: u,
                        }),
                    ],
                }),
                (0, E.jsx)(eG.$, {
                    onClick: function () {
                        m(() =>
                            (0, xC.Cz)({
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
var xL = i(451909),
    xP = i(202639),
    xG = i(400669),
    xM = i(835071),
    xU = i(422936),
    xV = i(234419),
    xk = i(590180),
    xw = i(898461),
    xB = i(207803),
    xF = i(508425),
    xz = i(559949);
let xX = {
        above_the_clouds: {
            preset: "above_the_clouds",
            themeColors: [752280, 9215590],
            avatarDecorationSkuId: "1144059132517826601",
            displayNameStyles: { fontId: xz.x.CHICLE, effectId: xF.z.POP, colors: [959694] },
            getName: () => j.intl.string(j.t["TFc+iF"]),
            getHeaderSrc: () => i(702051).A,
            getBannerSrc: (e) => (e ? i(735161).A : i(887e3).A),
        },
        cyberpunk: {
            preset: "cyberpunk",
            themeColors: [1967991, 742532],
            avatarDecorationSkuId: null,
            displayNameStyles: { fontId: xz.x.PIXELIFY, effectId: xF.z.NEON, colors: [2949343] },
            getName: () => j.intl.string(j.t["4g+5bq"]),
            getHeaderSrc: () => i(272017).A,
            getBannerSrc: (e) => (e ? i(735271).A : i(208574).A),
        },
        shadow_realm: {
            preset: "shadow_realm",
            themeColors: [0, 4458504],
            avatarDecorationSkuId: "1144058522808614923",
            displayNameStyles: { fontId: xz.x.NEO_CASTEL, effectId: xF.z.TOON, colors: [0xff0000] },
            getName: () => j.intl.string(j.t.ycg1xj),
            getHeaderSrc: () => i(863653).A,
            getBannerSrc: (e) => (e ? i(538263).A : i(576974).A),
        },
        starlit_dream: {
            preset: "starlit_dream",
            themeColors: [5123751, 590625],
            avatarDecorationSkuId: "1144058844004233369",
            displayNameStyles: { fontId: xz.x.CHERRY_BOMB, effectId: xF.z.TOON, colors: [3343795] },
            getName: () => j.intl.string(j.t["9WLHvr"]),
            getHeaderSrc: () => i(434361).A,
            getBannerSrc: (e) => (e ? i(700309).A : i(135572).A),
        },
        neon_space: {
            preset: "neon_space",
            themeColors: [6094952, 1007678],
            avatarDecorationSkuId: null,
            displayNameStyles: { fontId: xz.x.MUSEO_MODERNO, effectId: xF.z.NEON, colors: [28737] },
            getName: () => j.intl.string(j.t.UdNuqi),
            getHeaderSrc: () => i(301928).A,
            getBannerSrc: (e) => (e ? i(285974).A : i(775627).A),
        },
    },
    xY = Object.keys(xX);
function xH(e) {
    let t = null == e ? xY : xY.filter((t) => t !== e);
    return t[Math.floor(Math.random() * t.length)];
}
var xK = i(371912),
    xW = i(939405);
function xZ(e) {
    let { preset: t, onShuffle: i } = e,
        n = (0, g.bG)([i7.Ay], () => i7.Ay.useReducedMotion),
        s = (0, xK.Xf)({ useReducedMotion: n }),
        { name: l, header: r } = S.useMemo(() => {
            let e = xX[t];
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, E.jsxs)("div", {
        className: xW.kL,
        children: [
            (0, E.jsx)(en.D, {
                onClick: () => {
                    i(), s.startAnimation(!1);
                },
                className: xW.x6,
                "aria-label": j.intl.string(j.t["44yJxh"]),
                children: s.render(),
            }),
            (0, E.jsxs)(en.D, {
                onClick: () => {
                    i(), s.startAnimation(!1);
                },
                "aria-label": `${l}: ${j.intl.string(j.t["44yJxh"])}`,
                className: xW.Lt,
                children: [
                    (0, E.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: xW.L_ }),
                    (0, E.jsx)(es.E, { className: xW._e, variant: "text-sm/bold", color: "always-white", children: l }),
                ],
            }),
        ],
    });
}
var xQ = i(410516),
    xq = i(811611),
    xJ = i(515718),
    x$ = i(507553);
function x0(e, t) {
    let i = x$.A.useField("scrollPosition"),
        n = (0, g.bG)([i7.Ay], () => i7.Ay.useReducedMotion);
    (0, S.useEffect)(() => {
        let s = e.current;
        if (null == s || i !== t) return;
        let l = requestAnimationFrame(() => {
            s.scrollIntoView({ behavior: n ? "auto" : "smooth" }), x$.A.setState({ scrollPosition: null });
        });
        return () => cancelAnimationFrame(l);
    }, [e, t, i, n]);
}
var x1 = i(844222),
    x2 = i(420569);
function x3(e) {
    let { user: t } = e,
        { reducedMotion: n } = S.useContext(x1.C),
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
        } = (0, g.cf)([Ta.A], () => {
            let e = Ta.A.getPendingChanges(),
                t = Ta.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        p = (0, Tp.V7)({ userId: t.id, image: A ?? s });
    return (0, E.jsx)(Tx.A, {
        user: t,
        pendingPronouns: d,
        pendingBio: c,
        pendingBanner: h ?? l ?? i(636763),
        pendingDisplayNameStyles: x ?? o,
        pendingAvatar: p,
        pendingThemeColors: m ?? u,
        pendingAvatarDecoration: void 0 !== T ? T : r,
        pendingProfileEffect: a,
        avatarClassName: null != A || null != s || n.enabled ? void 0 : x2.WX,
        containerClassName: x2.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var x6 = i(896294);
function x4(e) {
    let { user: t, isVisible: i, shouldShow: n } = e,
        s = uT.Ay.isPremium(t),
        l = uT.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, g.cf)([Ta.A], () => {
            let e = Ta.A.getPendingChanges(),
                t = Ta.A.getErrors(),
                i = Ta.A.getTryItOutChanges();
            return { ...e, ...i, errors: t };
        }),
        { preset: c, onShuffle: m } = (function () {
            let e = (0, g.bG)([i7.Ay], () => i7.Ay.useReducedMotion),
                [t, i] = (0, S.useState)(xH()),
                {
                    banner: n,
                    themeColors: s,
                    avatarDecorationSkuId: l,
                    displayNameStyles: r,
                } = (0, S.useMemo)(() => {
                    let i = xX[t];
                    return {
                        banner: i.getBannerSrc(e),
                        themeColors: i.themeColors,
                        avatarDecorationSkuId: i.avatarDecorationSkuId,
                        displayNameStyles: i.displayNameStyles,
                    };
                }, [t, e]),
                a = (0, g.bG)([xk.A], () => {
                    let e = xk.A.getProduct(l);
                    return (0, xw.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, S.useEffect)(() => {
                (0, xB.w5)({ banner: n, themeColors: s, avatarDecoration: a, displayNameStyles: r });
            }, [n, s, a, r]);
            let o = (0, S.useCallback)(() => {
                let e = xH(t);
                i(e), G.default.track(U.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: e });
            }, [t]);
            return { preset: t, onShuffle: o };
        })(),
        A = S.useRef(null);
    x0(A, nw._F.TRY_IT_OUT);
    let { analyticsLocations: h, sourceAnalyticsLocations: T } = (0, nZ.Ay)(e1.A.USER_SETTINGS_TRY_OUT_PREMIUM),
        x = (e) => {
            e &&
                (d?.startsWith("https:") === !0
                    ? fetch(d)
                          .then((e) => e.blob())
                          .then((e) => (0, xJ.We)(e))
                          .then((e) => {
                              (0, TV.p)({ avatar: u, themeColors: o, banner: e });
                          })
                          .catch(() => {
                              (0, TV.p)({ avatar: u, themeColors: o });
                          })
                    : null != d
                      ? (0, TV.p)({ avatar: u, themeColors: o, banner: d })
                      : (0, TV.p)({ avatar: u, themeColors: o }),
                G.default.track(U.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
        };
    S.useEffect(() => {
        i &&
            G.default.track(U.HAw.PREMIUM_UPSELL_VIEWED, {
                type: sq.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: U.liQ.USER_SETTINGS },
                location_stack: T,
            });
    }, [T, t, i]);
    let p = (0, xV.V)()?.subscription_trial?.sku_id === sq.pe.TIER_2,
        f = (0, xU.O)(),
        N = (0, xQ.U9)(f, sq.pe.TIER_2);
    return n
        ? (0, E.jsx)(nZ.f5, {
              value: h,
              children: (0, E.jsxs)(cD.A, {
                  ref: A,
                  className: x6.MT,
                  type: cD.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, E.jsx)(TT, {
                          stickyPreview: !1,
                          layoutClassName: x6.th,
                          profilePreviewTitle: (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(uu.t, { size: "md", color: "currentColor", className: x6.PC }),
                                  j.intl.string(j.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, E.jsxs)(E.Fragment, {
                              children: [(0, E.jsx)(xZ, { preset: c, onShuffle: m }), (0, E.jsx)(x3, { user: t })],
                          }),
                          children: (0, E.jsxs)("div", {
                              children: [
                                  (0, E.jsxs)("div", {
                                      children: [
                                          (0, E.jsx)(eP.D, {
                                              variant: "heading-xl/extrabold",
                                              children: j.intl.string(j.t["2zGdAW"]),
                                          }),
                                          (0, E.jsx)(es.E, {
                                              className: x6.h_,
                                              variant: "text-sm/normal",
                                              children: j.intl.string(j.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, E.jsx)(xl, {
                                      className: x6.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, Tp.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: xB.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, E.jsx)(Tq, {
                                      className: x6.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: xB.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !l &&
                                      (0, E.jsx)(TX, {
                                          className: x6.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: xB.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: j.intl.string(j.t["7z0D1c"]),
                                          sectionTitle: j.intl.string(j.t.vtFfPX),
                                      }),
                                  (0, E.jsx)(TH, { user: t, className: x6.fz }),
                                  !p &&
                                      (0, E.jsx)(es.E, {
                                          variant: "text-sm/normal",
                                          children: j.intl.string(j.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !p &&
                          (0, E.jsx)(xP.d, {
                              onSubscribeModalClose: x,
                              className: x6.Kv,
                              showUpsell: !0,
                              text: j.intl.format(j.t.TmfgI2, {
                                  onClick: () => {
                                      (0, xM.K)({ onSubscribeFinish: x });
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
                                  (0, E.jsx)("div", { className: x6.BU }),
                                  (0, E.jsx)(xq.Ay, {
                                      type: sq.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: sq.pe.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
var x7 = i(814390),
    x5 = i(909536),
    x8 = i(843282),
    x9 = i(145497),
    pe = i(685073),
    pt = i(534400),
    pi = i(581781),
    pn = i(743981),
    ps = i(688990);
let pl = (0, sZ.Ld)(),
    pr = S.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: i, onChange: n } = e,
            s = S.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            l = (0, g.bG)([io.default], () => (0, pe.Zo)(io.default.getCurrentUser()?.primaryGuild).guildId),
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
                        : (0, E.jsx)(pi.A, {
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
                        : (0, E.jsx)(x9.j, {
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
                        : (0, E.jsx)(pt.o9, {
                              guildId: t.id,
                              guildTag: i,
                              guildBadge: t.profile?.badge ?? void 0,
                              badgeSize: pn.Sl.SIZE_16,
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
            x0(x, nw._F.GUILD_TAG),
            (0, E.jsxs)(ug.A, {
                title: j.intl.string(j.t.Pdd1nd),
                titleId: pl,
                ref: x,
                children: [
                    (0, E.jsx)(es.E, {
                        className: ps.VA,
                        variant: "text-sm/normal",
                        children: j.intl.string(j.t.mlZ6Jx),
                    }),
                    (0, E.jsx)(x8.Pw, {
                        className: ps.Lt,
                        optionClassName: ps.S0,
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
var pa = i(318785),
    po = i(992526),
    pu = i(470739);
let pd = function () {
    return (0, po.J9)({ location: "UserSettingsProfileCustomization" })
        ? (0, E.jsx)(ug.A, {
              title: j.intl.string(j.t.l6w3Vj),
              description: j.intl.string(j.t.joHqdj),
              children: (0, E.jsx)(eG.$, {
                  text: j.intl.string(j.t.wRraFx),
                  onClick: () => {
                      (0, pu._)();
                  },
                  size: "sm",
              }),
          })
        : null;
};
var pc = i(857785);
let pg = (0, sZ.Ld)();
function pm(e) {
    let t = (0, SI.L)(sq.PremiumTypes.TIER_2);
    return (0, E.jsxs)(ug.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: j.intl.string(j.t["9AjdkD"]),
        titleId: pg,
        children: [
            (0, E.jsx)("div", {
                children: (0, E.jsx)(l9.k, {
                    "aria-labelledby": pg,
                    placeholder: e.placeholder,
                    maxLength: U.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, E.jsx)(TH, { user: e.user, className: pc.F }),
        ],
    });
}
function pA(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: i } = e,
        n = D.m$.useSetting(),
        s = void 0 !== i ? i : n;
    return (0, E.jsx)(J.d, {
        label: j.intl.string(j.t["3cWDuO"]),
        description: s ? null : j.intl.formatToPlainString(j.t.aYhclf, { username: t }),
        checked: !s,
        onChange: (e) => {
            !e === n ? (0, Tl._e)() : (0, TV.p)({ legacyUsernameDisabled: !e });
        },
    });
}
function ph(e) {
    let { user: t, savedUserColor: i, pendingColor: n, setPendingAccentColor: s } = e,
        l = t.getAvatarURL(null, 80),
        r = (0, T4.r)(er.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, T7.rh)(l, r, !1),
        o = (0, T9.LX)(a[0]);
    return (0, E.jsx)(ug.A, {
        title: j.intl.string(j.t["/X3fkf"]),
        children: (0, E.jsx)(xn, { onChange: (e) => s(e), color: n ?? i ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var pE = i(518477);
let pS = function () {
    let e = (0, g.bG)([cF.default], () => cF.default.getId());
    return (0, E.jsx)(ug.A, {
        title: j.intl.string(j.t.Jzj9q4),
        children: (0, E.jsx)(eG.$, {
            text: j.intl.string(j.t.Geikwq),
            onClick: () => {
                (0, Td.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [e1.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: pE.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var pT = i(512981);
function px() {
    let e = (0, g.bG)([io.default], () => {
            let e = io.default.getCurrentUser();
            return tz()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e;
        }),
        t = (0, g.bG)([Tf.A], () => Tf.A.getUserProfile(e.id)),
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
        } = (0, g.cf)([Ta.A], () => {
            let e = Ta.A.getPendingChanges(),
                t = Ta.A.getErrors();
            return { ...e, errors: t };
        }),
        m = (0, Tp.V7)({ userId: e.id, image: i }),
        A = (0, TC.EC)(),
        h = uT.Ay.canUsePremiumProfileCustomization(e),
        S = (0, Th.z5)(i, e.avatar),
        T = (0, Th.Ac)(s, t?.banner),
        x = (0, T5.Ay)(e.id),
        p = x?.getLegacyUsername(),
        f = (c.global_name?.length ?? 0) > 0 ? c.global_name : (A?.nick ?? []),
        N = (c.bio?.length ?? 0) > 0 ? c.bio : (A?.bio ?? []),
        _ = (0, pa.b)();
    return (0, E.jsxs)("div", {
        className: pT.Q,
        children: [
            (0, E.jsx)(pm, {
                placeholder: e.username,
                errors: f,
                currentGlobalName: e.globalName,
                pendingGlobalName: n,
                onGlobalNameChange: (e) => (0, TV.p)({ globalName: e }),
                user: e,
            }),
            (0, E.jsx)(
                xr,
                {
                    sectionTitle: j.intl.string(j.t["+T3RI/"]),
                    errors: c.pronouns,
                    onPronounsChange: (e) => (0, TV.p)({ pronouns: e }),
                    pendingPronouns: r,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, E.jsx)(pS, {}),
            (0, E.jsx)(
                TX,
                {
                    onAvatarChange: (e) => {
                        (0, TV.p)({ avatar: e }), (0, Th.WU)(null == e ? "remove" : "set");
                    },
                    showRemoveAvatarButton: S,
                    errors: c.avatar,
                    sectionTitle: j.intl.string(j.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, E.jsx)(Tw, { user: e, sectionTitle: j.intl.string(j.t["7v0T9P"]) }, "decoration"),
            (0, E.jsx)(TZ, { user: e }),
            (0, E.jsx)(T0, { user: e, sectionTitle: j.intl.string(j.t.wR5wOo) }, "effect"),
            (0, E.jsx)(T6, { user: e, sectionTitle: j.intl.string(j.t.GWrZOd) }, "frame"),
            h
                ? (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsx)(
                              Tq,
                              {
                                  showRemoveBannerButton: T,
                                  errors: c.banner,
                                  onBannerChange: (e) => (0, TV.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, E.jsx)(xl, {
                              user: e,
                              pendingAvatarSrc: m,
                              pendingColors: o,
                              onThemeColorsChange: (e) => (0, TV.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, E.jsx)(
                      ph,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: a,
                          setPendingAccentColor: (e) => (0, TV.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, E.jsx)(
                TP,
                {
                    sectionTitle: j.intl.string(j.t.ZzAR2Y),
                    errors: N,
                    onBioChange: (e) => (0, TV.p)({ bio: e }),
                    pendingBio: l,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            _.length > 0 &&
                (0, E.jsx)(pr, {
                    availablePrimaryGuilds: _,
                    pendingPrimaryGuildId: d,
                    onChange: (e) => (0, TV.p)({ primaryGuildId: e }),
                }),
            null != p && (0, E.jsx)(pA, { legacyUsername: p, pendingLegacyUsernameDisabled: u }, "legacy_username"),
            (0, E.jsx)(pd, {}, "badges"),
        ],
    });
}
function pp() {
    (0, K.openModalLazy)(async () => {
        let { default: e } = await Promise.all([i.e("85029"), i.e("66901"), i.e("41704")]).then(i.bind(i, 562011));
        return (t) =>
            (0, E.jsx)(e, {
                ...t,
                source: {
                    page: U.liQ.USER_SETTINGS,
                    section: U.JJy.SETTINGS_CUSTOMIZE_PROFILE,
                    object: U.ZSU.BUTTON_CTA,
                    type: U.AnalyticsObjectTypes.BUY,
                },
            });
    });
}
var pf = i(38323);
function pN() {
    let e = (0, g.bG)([io.default], () => {
            let e = io.default.getCurrentUser();
            return tz()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        t = (0, g.bG)([eB.A], () => eB.A.hidePersonalInformation),
        {
            pendingBio: i,
            pendingAvatar: n,
            pendingNameplate: s,
            showNotice: l,
            ...r
        } = (0, g.cf)([Ta.A], () => ({ ...Ta.A.getPendingChanges(), showNotice: Ta.A.showNotice() })),
        a = (0, Tp.V7)({ userId: e.id, image: n }),
        o = (0, Th.lw)({ pendingValue: s, userValue: e?.collectibles?.nameplate }),
        u = (0, x7.A)() && null != i ? xL.Ay.parse(void 0, i).content : i,
        d = uT.Ay.canUsePremiumProfileCustomization(e),
        c = (0, x5.St)("edit-profile-upsell"),
        { analyticsLocations: m } = (0, nZ.Ay)(e1.A.USER_SETTINGS_USER_PROFILE);
    S.useEffect(() => () => sa.h.wait(Tl.IM), []);
    let [A, h] = S.useState(!1),
        T = !d,
        x = S.useRef(null);
    return t
        ? (0, E.jsx)(dT.A, {})
        : (0, E.jsxs)(nZ.f5, {
              value: m,
              children: [
                  (0, E.jsx)(xD, {}),
                  (0, E.jsx)(TT, {
                      profilePreview: (0, E.jsx)(Tx.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: pp,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: pf.ti,
                      }),
                      nameplatePreview: (0, E.jsx)(TA.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? pf.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, E.jsx)(px, {}),
                  }),
                  (0, E.jsx)(x_.L, {
                      innerRef: x,
                      onChange: (e) => h(e),
                      threshold: 0.25,
                      active: T,
                      children: (0, E.jsx)("div", {
                          ref: x,
                          children: (0, E.jsx)(x4, { user: e, shouldShow: T, isVisible: A }),
                      }),
                  }),
                  T &&
                      !l &&
                      (0, E.jsx)(xP.d, {
                          className: pf.EL,
                          showUpsell: !A,
                          text: j.intl.format(j.t.TmfgI2, { onClick: () => (0, xM.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: c
                              ? (0, E.jsx)(xG.l, { size: "md", location: e1.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL })
                              : void 0,
                          button: (0, E.jsx)("div", {
                              className: pf.Xl,
                              children: (0, E.jsx)(eG.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      G.default.track(U.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          x?.current?.scrollIntoView({ behavior: "smooth" });
                                  },
                                  text: j.intl.string(j.t.uw9zI7),
                                  icon: uu.t,
                              }),
                          }),
                      }),
              ],
          });
}
var p_ = i(625494),
    pI = i(879294);
let pC = { [nw.Eq.USER_PROFILE]: "main_profile_tab", [nw.Eq.GUILD]: "guild_profile_tab" },
    pb = (0, a.E2)(u.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, g.bG)([ra.A, eg.Ay, Ta.A], () => {
                    let e = Ta.A.selectedGuildId ?? ra.A.getGuildId();
                    return null == e || Ta._.has(e) ? eg.Ay.getFlattenedGuildIds().find((e) => !Ta._.has(e)) : e;
                }),
                t = (0, g.bG)([ec.A], () => ec.A.getGuild(e)),
                i = (0, g.bG)([Ta.A], () => Ta.A.showNotice()),
                n = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
                s = x$.A.useField("subsection");
            return (
                S.useEffect(() => {
                    (0, rq._)(pC[s]);
                }, [s]),
                S.useEffect(() => {
                    null != n && t?.id != null && (0, xp.A)(n.id, n.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, n]),
                (0, E.jsx)(xN, {
                    children: (0, E.jsxs)(cf.F, {
                        component: (0, E.jsx)(eo.A, {
                            children: (0, E.jsx)(eP.D, {
                                variant: "heading-xl/normal",
                                children: j.intl.string(j.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, E.jsxs)(Tc.V, {
                                className: pI.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: s,
                                onItemSelect: function (e) {
                                    if (s !== e) {
                                        if (i) {
                                            (0, rJ.fO)({ duration: 300, intensity: Tg.n3 }),
                                                p_._.dispatch(U.jej.EMPHASIZE_NOTICE);
                                            return;
                                        }
                                        e === nw.Eq.GUILD && null != t && (0, Tm.V2)(t.id),
                                            x$.A.setState({ subsection: e });
                                    }
                                },
                                children: [
                                    (0, E.jsx)(
                                        Tc.V.Item,
                                        {
                                            className: pI.YU,
                                            id: nw.Eq.USER_PROFILE,
                                            children: j.intl.string(j.t["2p07FR"]),
                                        },
                                        nw.Eq.USER_PROFILE,
                                    ),
                                    (0, E.jsx)(
                                        Tc.V.Item,
                                        {
                                            className: e6()(pI.YU, pI.HY),
                                            "aria-label": j.intl.string(j.t.kPHroX),
                                            id: nw.Eq.GUILD,
                                            children: j.intl.string(j.t.kPHroX),
                                        },
                                        nw.Eq.GUILD,
                                    ),
                                ],
                            }),
                            s === nw.Eq.GUILD
                                ? (0, E.jsx)(xx, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (i) {
                                              (0, rJ.fO)({ duration: 300, intensity: Tg.n3 }),
                                                  p_._.dispatch(U.jej.EMPHASIZE_NOTICE);
                                              return;
                                          }
                                          null != e && (0, Tm.JJ)(e.id);
                                      },
                                  })
                                : (0, E.jsx)(pN, {}),
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
    py = (0, a.zZ)(u.X.PROFILE_CATEGORY, { buildLayout: () => [pb] });
var pv = i(352138);
function pj() {
    let e = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: i } = (0, Tu.A)({ userId: e?.id, size: i4._3.SIZE_48 });
    return null == e
        ? null
        : (0, E.jsxs)("div", {
              className: pv.a5,
              children: [
                  (0, E.jsx)(i6.eu, {
                      src: t,
                      avatarDecoration: i,
                      size: i4._3.SIZE_48,
                      "aria-label": j.intl.string(j.t.lqaIxI),
                  }),
                  (0, E.jsxs)("div", {
                      className: pv.FS,
                      children: [
                          (0, E.jsx)(es.E, {
                              color: "text-strong",
                              variant: "text-md/medium",
                              lineClamp: 1,
                              children: e.globalName ?? e.username,
                          }),
                          (0, E.jsxs)("div", {
                              className: pv.Fk,
                              children: [
                                  (0, E.jsx)(es.E, {
                                      variant: "text-sm/normal",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: j.intl.string(j.t.Ip9nBS),
                                  }),
                                  (0, E.jsx)(uS.R, { size: "xxs", color: "currentColor" }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
let pO = (0, a.t_)(u.X.PROFILE_PANEL, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        notice: { stores: [Ta.A], element: Tr.A },
        initialize: () => () =>
            sa.h.wait(() => {
                (0, Tl.F7)();
            }),
        buildLayout: () => [py],
    }),
    pR = (0, a.i4)(u.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        icon: pL,
        StronglyDiscouragedCustomComponent: pj,
        usePredicate: () => !(0, To.X)("user_settings_sidebar"),
        buildLayout: () => [pO],
    }),
    pD = (0, a.i4)(u.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        icon: pL,
        StronglyDiscouragedCustomComponent: pj,
        usePredicate: () => (0, To.X)("user_settings_sidebar"),
        onClick: () => {
            let e = cF.default.getId();
            (0, Td.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function pL() {
    let e = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: i } = (0, Tu.A)({ userId: e?.id, size: i4._3.SIZE_48 });
    return (0, E.jsx)(i6.eu, { src: t, avatarDecoration: i, size: i4._3.SIZE_20, "aria-hidden": !0 });
}
let pP = (0, a.WI)(u.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [pR, pD] });
var pG = i(98207),
    pM = (i(204925), i(818348));
let pU = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, K.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([i.e("44293"), i.e("19623"), i.e("21007")]).then(i.bind(i, 888363));
            return (i) => (0, E.jsx)(t, { claimRequired: e, ...i });
        },
        { onCloseRequest: e ? pM.tE : null, onCloseCallback: t },
    );
};
var pV = i(940856),
    pk = i(36149),
    pw = i(207560);
function pB(e) {
    let t = (0, pw.fk)(),
        i = (0, pk.b8)(),
        n = (0, pk.yM)(),
        s = (0, pk.Y2)();
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
var pF = i(432632);
function pz() {
    let e = j.intl.string(j.t.XxRj7f);
    return (0, E.jsxs)(es.E, {
        variant: "text-md/medium",
        children: [
            `${e} \u{2022} `,
            j.intl.format(pF.default.WM5adV, {
                handleOnHelpUrlHook: function () {
                    return window.open(tN.A.getArticleURL(U.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank");
                },
            }),
        ],
    });
}
let pX = (0, a.Tf)(u.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, {
        usePredicate: () => pB("edit"),
        useTitle: () => j.intl.string(j.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: h._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: pz }),
        useLabel: () => j.intl.string(j.t.bt75uw),
        onClick: function () {
            (0, K.openModalLazy)(async () => {
                let { default: e } = await i.e("45361").then(i.bind(i, 151080));
                return (t) => (0, E.jsx)(e, { ...t });
            });
        },
    }),
    pY = (0, a.E2)(u.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, {
        usePredicate: () => pB("info"),
        useSearchTerms: () => [j.intl.string(j.t["/52UYy"])],
        Component: function () {
            return (0, E.jsx)(s4.D, {
                label: j.intl.string(j.t["/52UYy"]),
                layout: "horizontal",
                children: (0, E.jsxs)(q.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "end",
                    gap: "md",
                    children: [
                        (0, E.jsx)(es.E, { variant: "text-md/medium", children: j.intl.string(j.t.XxRj7f) }),
                        (0, E.jsx)("div", {
                            style: { visibility: "hidden" },
                            children: (0, E.jsx)(eG.$, {
                                onClick: pM.tE,
                                text: j.intl.string(j.t.bt75uw),
                                "aria-hidden": !0,
                            }),
                        }),
                    ],
                }),
            });
        },
    });
var pH = i(379257),
    pK = i(847599);
function pW() {
    return (0, pk.yM)() ? j.intl.string(j.t.sK0dmH) : j.intl.string(j.t.lKDPGA);
}
let pZ = (0, a.Tf)(u.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, {
        usePredicate: () => pB("verify"),
        useTitle: () => j.intl.string(j.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: h._1.TEXT, useText: pW }),
        useLabel: function () {
            return (0, pk.yM)() ? j.intl.string(j.t["9KiIz6"]) : j.intl.string(j.t.DVywUB);
        },
        onClick: () => pH.A.showAgeVerificationGetStartedModal({ entryPoint: pK.q1.ACCOUNT_AGE_GROUP }),
    }),
    pQ = (0, a.Tf)(u.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, g.bG)([io.default], () => io.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => j.intl.string(j.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: h._1.TEXT, useText: () => j.intl.string(j.t.qxk9zo) }),
        useLabel: () => j.intl.string(j.t.BleMPB),
        onClick: () => pU(),
    });
function pq(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function pJ(e) {
    let [t, i] = e.split("@");
    return `${"*".repeat(t.length)}@${i}`;
}
function p$(e) {
    let { text: t, censor: i, revealLabel: n, hideLabel: s, redesign: l = !1 } = e,
        [r, a] = S.useState(!1),
        o = r ? t : i(t);
    return (0, E.jsxs)(q.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        justify: l ? "end" : "start",
        children: [
            l ? (0, E.jsx)(es.E, { variant: "text-md/medium", children: o }) : o,
            (0, E.jsx)(ea.Q, {
                variant: "primary",
                textVariant: l ? "text-md/medium" : "text-sm/medium",
                "aria-label": r ? s : n,
                onClick: () => a(!r),
                text: r ? j.intl.string(j.t.fgq1gs) : j.intl.string(j.t.dcztdU),
            }),
        ],
    });
}
function p0() {
    let e = (0, g.bG)([io.default], () => io.default.getCurrentUser()?.email);
    return null == e
        ? (0, E.jsx)(es.E, { variant: "text-md/medium", children: j.intl.string(j.t["8SfTN/"]) })
        : (0, E.jsx)(p$, {
              text: e,
              censor: pJ,
              revealLabel: j.intl.string(j.t["Zvx+yV"]),
              hideLabel: j.intl.string(j.t.nqTD4d),
              redesign: !0,
          });
}
let p1 = (0, a.Tf)(u.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, g.bG)([io.default], () => io.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => j.intl.string(j.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: h._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: p0 }),
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
        (0, K.openModalLazy)(async () => {
            let { default: e } = await Promise.all([i.e("67746"), i.e("20577"), i.e("65861")]).then(i.bind(i, 97060));
            return (t) => (0, E.jsx)(e, { ...t });
        });
    },
});
var p2 = i(557722),
    p3 = i(53516);
function p6() {
    let e = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, E.jsx)(es.E, { variant: "text-md/medium", children: j.intl.string(j.t.I5kDqj) })
        : (0, E.jsx)(q.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, E.jsx)(p$, {
                  text: t,
                  censor: pq,
                  revealLabel: j.intl.string(j.t.eY3xlT),
                  hideLabel: j.intl.string(j.t["jllbv+"]),
                  redesign: !0,
              }),
          });
}
let p4 = (0, a.Tf)(u.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, g.bG)([io.default], () => io.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => j.intl.string(j.t.kerONq),
    useAriaLabel: function () {
        return null == (0, g.bG)([io.default], () => io.default.getCurrentUser()?.phone)
            ? j.intl.string(j.t["SfUuE+"])
            : j.intl.string(j.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: h._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: p6 }),
    useLabel: function () {
        return null == (0, g.bG)([io.default], () => io.default.getCurrentUser()?.phone)
            ? j.intl.string(j.t.OYkgVk)
            : j.intl.string(j.t.bt75uw);
    },
    onClick: function () {
        null == io.default.getCurrentUser()?.phone
            ? (0, K.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.all([
                          i.e("11183"),
                          i.e("72506"),
                          i.e("89545"),
                          i.e("11493"),
                          i.e("84704"),
                          i.e("86197"),
                      ]).then(i.bind(i, 615715));
                      return (t) => (0, E.jsx)(e, { reason: p2.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: p3.V },
              )
            : (0, K.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([i.e("96042"), i.e("40933")]).then(i.bind(i, 660740));
                  return (t) => (0, E.jsx)(e, { ...t });
              });
    },
});
function p7() {
    let e = (0, g.bG)([io.default], () => io.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function p5() {
    let e = (0, TC.EC)(),
        t = e?.nick?.[0] ?? null,
        i = (0, g.bG)([io.default], () => io.default.getCurrentUser());
    if (null == i) return null;
    let n = i.hasUniqueUsername() ? i.username : `${i.username}#${i.discriminator}`;
    return (0, E.jsxs)(E.Fragment, {
        children: [
            (0, E.jsx)(es.E, { variant: "text-md/medium", children: n }),
            null != t &&
                (0, E.jsx)(tr.m, {
                    __unsupportedReactNodeAsText: t,
                    "aria-label": !1,
                    children: (0, E.jsx)(l2.E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: er.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let p8 = (0, a.Tf)(u.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => j.intl.string(j.t.qqhR3L),
        useTrailingContent: () => ({ type: h._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: p5 }),
        useLabel: () => j.intl.string(j.t.bt75uw),
        useAriaLabel: () => j.intl.string(j.t.JECa91),
        useSubtitle: () => (p7() ? j.intl.string(j.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: p7,
        onClick: function () {
            (0, K.openModalLazy)(async () => {
                let { default: e } = await Promise.all([i.e("37960"), i.e("20429"), i.e("20969")]).then(
                    i.bind(i, 667792),
                );
                return (t) => (0, E.jsx)(e, { ...t });
            });
        },
    }),
    p9 = (0, a.zZ)(u.X.ACCOUNT_INFO_CATEGORY, {
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
                            button: { useText: () => j.intl.string(j.t.lm1UKt), onClick: () => (0, pV.S)(e) },
                        }
                  : {
                        type: h.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        useTitle: () => j.intl.string(j.t["/3qnL/"]),
                        useText: () => j.intl.string(j.t.qKs3vg),
                        button: { useText: () => j.intl.string(j.t["7psymi"]), onClick: () => pU() },
                    };
        },
        buildLayout: () => [p8, pQ, p1, p4, pZ, pX, pY],
    });
var fe = i(398177);
let ft = (0, a.Tf)(u.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
    useTitle: () => j.intl.string(j.t["CIGa+7"]),
    useLabel: () => j.intl.string(j.t.bt75uw),
    useAriaLabel: () => j.intl.string(j.t["FRep5/"]),
    useVariant: () => "secondary",
    onClick: () => {
        (0, K.openModal)((e) => (0, E.jsx)(fe.default, { ...e, onSuccess: () => e.onClose() }));
    },
});
var fi = i(200921);
let fn = [];
function fs() {
    fn = [];
}
class fl extends g.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return fn;
    }
}
let fr = new fl(sa.h, {
    LOGOUT: fs,
    LOGIN_SUCCESS: fs,
    FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessions: t } = e;
        fn = t.map((e) => ({ ...e, approx_last_used_time: new Date(e.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessionIdHashes: t } = e,
            i = [...fn],
            n = !1;
        for (let e of t) {
            let t = i.findIndex((t) => t.id_hash === e);
            t >= 0 && (i.splice(t, 1), (n = !0));
        }
        if (!n) return !1;
        fn = i;
    },
});
function fa() {
    let e = (0, g.cf)([fr], () => fr.getSessions());
    return S.useMemo(() => {
        let t = [...e],
            i = null,
            n = cF.default.getAuthSessionIdHash();
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
function fo(e) {
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? j.intl.string(j.t.TXCmfL) : r4()(e).fromNow();
}
var fu = i(176524),
    fd = i(646270),
    fc = i(738678),
    fg = i(892477);
function fm(e) {
    let { icon: t, label: i, subLabel: n, description: s, children: l, muted: r } = e;
    return (0, E.jsxs)(q.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, E.jsx)(fu.A, { Icon: t, color: r ? er.A.colors.ICON_MUTED : "currentColor" }),
            (0, E.jsxs)(q.B, {
                direction: "vertical",
                gap: "xxs",
                children: [
                    (0, E.jsxs)(q.B, {
                        direction: "horizontal",
                        gap: "xs",
                        children: [
                            (0, E.jsx)(es.E, { variant: "text-md/semibold", color: "text-strong", children: i }),
                            null != i &&
                                null != n &&
                                (0, E.jsx)(es.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    "aria-hidden": !0,
                                    children: "\u2022",
                                }),
                            null != n &&
                                (0, E.jsx)(es.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                        ],
                    }),
                    (0, E.jsx)(es.E, { variant: "text-sm/normal", color: "text-muted", children: s }),
                ],
            }),
            l,
        ],
    });
}
function fA(e) {
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
                            return { text: e, icon: fd.u };
                        case "horizon os":
                            return { text: e, icon: fc.G };
                        default:
                            return { text: e, icon: to.k };
                    }
                })(e.client_info?.os);
            return { location: i, platform: n, os: s, Icon: l, lastActive: t ? null : fo(e.approx_last_used_time) };
        })(t, i),
        o = [n, a].filter(N.Vq);
    return (0, E.jsx)(fm, {
        icon: r,
        label: l,
        subLabel: s,
        description: o.join(" \xb7 "),
        children:
            !i &&
            (0, E.jsx)(en.D, {
                className: fg.X,
                onClick: () => (0, fi.U0)(t.id_hash),
                "aria-label": j.intl.string(j.t.E4MJNt),
                children: (0, E.jsx)(gP.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function fh(e) {
    let { title: t, children: i } = e,
        n = S.useId();
    return (0, E.jsxs)(q.B, {
        role: "group",
        "aria-labelledby": n,
        gap: "xl",
        padding: { top: 8, bottom: 8 },
        children: [
            (0, E.jsx)(eP.D, { id: n, variant: "heading-md/semibold", color: "text-muted", children: t }),
            (0, E.jsx)(q.B, { role: "list", gap: "xl", children: i }),
        ],
    });
}
let fE = (0, a.E2)(u.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            let { currentSession: e } = fa();
            return null == e
                ? (0, E.jsx)(dp.y, {})
                : (0, E.jsx)(fh, {
                      title: j.intl.string(j.t.LLS19o),
                      children: (0, E.jsx)(fA, { session: e, current: !0 }),
                  });
        },
        useSearchTerms: () => [],
    }),
    fS = (0, a.E2)(u.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = fa();
            return (0, E.jsx)(s4.D, {
                label: j.intl.string(j.t.Vij32M),
                description: j.intl.string(j.t.OTXyaf),
                children: (0, E.jsx)(eG.$, {
                    onClick: () => (0, fi.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: j.intl.string(j.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [j.intl.string(j.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = fa();
            return e.length > 0;
        },
    });
var fT = i(766928);
function fx() {
    return (0, E.jsx)(fm, {
        icon: fT.W,
        label: j.intl.string(j.t.iUa0sn),
        description: j.intl.format(j.t["044+8i"], {
            onClick: () =>
                (0, eH.openUserSettings)(u.X.ACCOUNT_PANEL, { analyticsLocations: [e1.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
let fp = (0, a.E2)(u.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = fa(),
                t = (0, g.bG)([io.default], () => io.default.getCurrentUser());
            return (0, E.jsxs)(fh, {
                title: j.intl.string(j.t.xx1MWc),
                children: [
                    e.map((e) => (0, E.jsx)(fA, { session: e }, e.id_hash)),
                    t?.mfaEnabled ? null : (0, E.jsx)(fx, {}),
                ],
            });
        },
        useSearchTerms: () => [j.intl.string(j.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = fa(),
                t = (0, g.bG)([io.default], () => io.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    ff = (0, a.zZ)(u.X.SESSIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.mEndXM),
        useSubtitle: () => j.intl.string(j.t.b7ZpTM),
        initialize: () => {
            (0, fi.GY)();
        },
        buildLayout: () => [fE, fp, fS],
        useSearchTerms: () => [
            j.intl.string(j.t["+1h0k/"]),
            j.intl.string(j.t.LLS19o),
            j.intl.string(j.t.xx1MWc),
            j.intl.string(j.t.lSWsrd),
        ],
    }),
    fN = (0, a.t_)(u.X.SESSIONS_PANEL, {
        useTitle: () => j.intl.string(j.t.mEndXM),
        useObscuredNotice: dT.L,
        buildLayout: () => [ff],
    }),
    f_ = (0, a.t0)(u.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [fN],
        initialize: () => {
            (0, fi.GY)();
        },
        useTrailingDecoration: () => ({
            type: h.xn.TEXT,
            useText: () => {
                let { currentSession: e, otherSessions: t } = fa(),
                    i = t.length + +(null != e);
                return i > 0 ? j.intl.formatToPlainString(j.t.G7zwOk, { count: i }) : j.intl.string(j.t.MKDeyL);
            },
        }),
    });
var fI = i(464477);
function fC(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == e
        ? null
        : e.hasAnyStaffLevel()
          ? t
              ? j.intl.string(j.t.YJGvuD)
              : j.intl.string(j.t["3iKih7"])
          : e.hasFlag(U.nhx.PARTNER)
            ? t
                ? j.intl.string(j.t["9UucjT"])
                : j.intl.string(j.t.Sq6Q1u)
            : null == e.email
              ? t
                  ? j.intl.string(j.t["9VWpT9"])
                  : j.intl.string(j.t.LfCBZG)
              : null;
}
function fb() {
    return (0, dt.bG)([io.default], () => {
        let e = io.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
var fy =
    (((r = {}).AVAILABLE = "available"),
    (r.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (r.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    r);
function fv() {
    let e = (0, dt.bG)([io.default], () => io.default.getCurrentUser()?.verified);
    return fI.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function fj() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, dt.bG)([ec.A, xu.A, io.default], () =>
        io.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? j.intl.string(j.t.hxf9fX)
                : j.intl.string(j.t["3iKih7"])
            : ec.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(U.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        xu.A.can(U.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? j.intl.string(j.t.OYTCUh)
                  : j.intl.string(j.t.HC8uSZ)
              : null,
    );
}
var fO = i(466034);
let fR = (0, a.Tf)(u.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => j.intl.string(j.t.lQsY7B),
        useSubtitle: () => fj(!0),
        useDisabled: () => null !== fj(!0),
        useLabel: () => j.intl.string(j.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, g.bG)([cF.default], () => cF.default.hasTOTPEnabled()),
                t = fv() === fy.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, sg.A)({
                title: j.intl.string(j.t["D+aE7g"]),
                subtitle: j.intl.string(j.t.EA4ZEk),
                variant: "critical",
                confirmText: j.intl.string(j.t.N86XcP),
                onConfirm: () => pG.A.disable(),
            }),
    }),
    fD = (0, a.zZ)(u.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => j.intl.string(j.t.RumMFo),
        useSubtitle: () => j.intl.string(j.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, g.bG)([cF.default], () => cF.default.hasTOTPEnabled()),
                t = fv() === fy.AVAILABLE;
            if (!e && t)
                return {
                    type: h.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: h.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: j.intl.string(j.t.cTNUeD),
                            onClick: fO.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (fv()) {
                case fy.UNAVAILABLE_NO_CRYPTO:
                    return { type: h.lT.INLINE_NOTICE, noticeType: "info", useText: () => j.intl.string(j.t.PhHhsj) };
                case fy.UNAVAILABLE_UNVERIFIED:
                    return {
                        type: h.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        useText: () => j.intl.string(j.t.uggF7o),
                    };
                case fy.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [fR],
    });
var fL = i(670492),
    fP = i(32880),
    fG = i(663417),
    fM = i(658675),
    fU = i(900686);
function fV() {
    (0, K.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(i.bind(i, 662758));
        return (t) =>
            (0, E.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    pG.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                        var t;
                        return (
                            (t = e),
                            void (0, K.openModalLazy)(
                                async () => {
                                    let { default: e } = await Promise.all([i.e("6016"), i.e("96179")]).then(
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
var fk = i(345418);
function fw(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function fB() {
    let e = fL.A.getVerificationKey();
    try {
        await pG.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, E0.P0)({
            message: e.body?.message ?? j.intl.string(j.t.F8FvUy),
            type: E2.Ck.FAILURE,
            id: "backup-code-regen-failed",
        });
    }
}
function fF(e) {
    let {
            code: { code: t, consumed: i },
        } = e,
        n = fw(t),
        s = S.useRef(null),
        l = (0, E.jsxs)(E.Fragment, {
            children: [(0, E.jsx)(fM.P, { checked: i }), (0, E.jsx)(es.E, { variant: "text-md/normal", children: n })],
        });
    return cK.p5
        ? (0, E.jsx)(en.D, {
              tag: "li",
              className: e6()(fk.aY, fk.vk),
              innerRef: s,
              onKeyDown: function (e) {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, cK.C)(n), s?.current?.focus());
              },
              onClick: function () {
                  (0, cK.C)(n),
                      (0, E0.P0)({ message: j.intl.string(j.t.mGZ66D), type: E2.Ck.SUCCESS, id: "backup-code-copied" });
              },
              children: l,
          })
        : (0, E.jsx)("li", { className: fk.aY, children: l });
}
let fz = (0, a.zZ)(u.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.fC9qV0),
        useSubtitle: () =>
            (0, g.bG)([fL.A], () => fL.A.getBackupCodes().length > 0)
                ? j.intl.format(j.t.tp7zEK, {})
                : j.intl.string(j.t.LoOi4S),
        usePredicate: fb,
        buildLayout: () => [fX],
    }),
    fX = (0, a.E2)(u.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.fC9qV0)],
        Component: function () {
            let e = (0, g.bG)([fL.A], () => fL.A.getBackupCodes()),
                t = S.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: i } = e;
                                return `* ${fw(t)}` + (i ? ` (${j.intl.string(j.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, E.jsx)(eG.$, { text: j.intl.string(j.t.Jc2myK), size: "sm", variant: "secondary", onClick: fV })
                : (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsx)("ul", {
                              className: fk.E5,
                              children: e.map((e) => (0, E.jsx)(fF, { code: e }, e.code)),
                          }),
                          (0, E.jsxs)(ou.e, {
                              size: "sm",
                              children: [
                                  (0, E.jsx)(fU.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, E.jsx)(eG.$, {
                                          text: j.intl.string(j.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: fP.s,
                                      }),
                                  }),
                                  (0, E.jsx)(eG.$, {
                                      text: j.intl.string(j.t["3x962E"]),
                                      variant: "secondary",
                                      icon: fG.f,
                                      onClick: fB,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    fY = (0, a.Tf)(u.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => j.intl.string(j.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = S.useState(!1),
                i = (0, g.bG)([io.default], () => io.default.getCurrentUser()?.phone);
            return null == i
                ? null
                : j.intl.format(e ? j.t["xDBk/I"] : j.t.bnKdnl, {
                      phone: e ? i : i.slice(-4),
                      toggleButton: () =>
                          (0, E.jsx)(ea.Q, {
                              text: e ? j.intl.string(j.t.fgq1gs) : j.intl.string(j.t.dcztdU),
                              onClick: () => t(!e),
                          }),
                  });
        },
        useLabel: () => j.intl.string(j.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => (0, g.bG)([io.default], () => io.default.getCurrentUser()?.hasFlag(U.nhx.MFA_SMS) ?? !1),
        onClick: () =>
            void (0, K.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 662758));
                return (t) =>
                    (0, E.jsx)(e, {
                        ...t,
                        handleSubmit: pG.A.disableSMS,
                        title: j.intl.string(j.t.KLWnit),
                        children: j.intl.string(j.t["W0/Duf"]),
                    });
            }),
    }),
    fH = (0, a.zZ)(u.X.SMS_AUTH_CATEGORY, {
        useTitle: () => j.intl.string(j.t.wuHuI5),
        useSubtitle: () => (0, g.bG)([io.default], () => fC(io.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, g.bG)([io.default], () => io.default.getCurrentUser()?.hasFlag(U.nhx.MFA_SMS) ?? !1),
                t = (0, g.bG)([io.default], () => null != fC(io.default.getCurrentUser()));
            if (!e)
                return {
                    type: h.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: h.UV.BUTTON,
                            id: "sms-setup-button",
                            text: j.intl.string(j.t.Age7yU),
                            onClick: fK,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = fv(),
                t = fb(),
                i = (0, g.bG)([cF.default], () => cF.default.hasTOTPEnabled());
            return e === fy.AVAILABLE && t && i;
        },
        buildLayout: () => [fY],
    });
function fK() {
    let e = io.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            (t = { reason: p2.d.USER_SETTINGS_UPDATE, onAddedPhone: pG.A.enableSMS }),
                (0, K.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            i.e("11183"),
                            i.e("72506"),
                            i.e("89545"),
                            i.e("11493"),
                            i.e("84704"),
                            i.e("86197"),
                        ]).then(i.bind(i, 615715));
                        return (i) => (0, E.jsx)(e, { ...i, ...t });
                    },
                    { modalKey: p3.V },
                );
        } else pG.A.enableSMS();
}
var fW = i(665671),
    fZ = i(442433),
    fQ = i(917136),
    fq = i(976910),
    fJ = i(251002);
function f$(e) {
    let { credential: t } = e;
    return (0, E.jsxs)("li", {
        className: fJ.e,
        children: [
            (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(es.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, E.jsx)(es.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: j.intl.format(j.t["7JgxF5"], { lastUsed: fo(t.last_used) }),
                        }),
                ],
            }),
            (0, E.jsx)(lQ.K, {
                icon: mP.j,
                variant: "icon-only",
                size: "sm",
                "aria-label": j.intl.string(j.t["+nrTbK"]),
                onClick: (e) => {
                    (0, fZ.L3)(e, async () => {
                        let { default: e } = await i.e("32529").then(i.bind(i, 41e3));
                        return (i) => (0, E.jsx)(e, { credential: t, ...i });
                    });
                },
            }),
        ],
    });
}
let f0 = (0, a.zZ)(u.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.IBq4Y3),
        useSubtitle: () => j.intl.string(j.t.yK9edS),
        useHeaderDecoration: function () {
            if (fv() === fy.AVAILABLE)
                return {
                    type: h.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: h.UV.BUTTON,
                            id: "add-security-key-button",
                            text: j.intl.string(j.t["Tzs/fw"]),
                            icon: ay.j,
                            onClick: fW.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (fv()) {
                    case fy.UNAVAILABLE_NO_CRYPTO:
                        return {
                            type: h.lT.INLINE_NOTICE,
                            noticeType: "info",
                            useText: () => j.intl.string(j.t.bWCGI9),
                        };
                    case fy.UNAVAILABLE_UNVERIFIED:
                        return {
                            type: h.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            useText: () => j.intl.string(j.t.uggF7o),
                        };
                    case fy.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [f1],
    }),
    f1 = (0, a.E2)(u.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [j.intl.string(j.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, g.cf)([fq.A], () => ({
                hasFetchedCredentials: fq.A.hasFetchedCredentials(),
                credentials: fq.A.getCredentials(),
            }));
            return (S.useEffect(() => {
                t || fQ.JQ();
            }, [t]),
            t)
                ? (0, E.jsx)(q.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, E.jsx)(f$, { credential: e }, e.id)),
                  })
                : (0, E.jsx)(dp.y, {});
        },
    }),
    f2 = (0, a.t_)(u.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => j.intl.string(j.t.m0FidJ),
        buildLayout: () => [f0, fD, fH, fz],
    }),
    f3 = (0, a.t0)(u.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => ({
            type: h.xn.TEXT,
            useText: () => (fb() ? j.intl.string(j.t.lQsY7B) : j.intl.string(j.t.WsUuTt)),
        }),
        buildLayout: () => [f2],
    }),
    f6 = (0, a.zZ)(u.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => j.intl.string(j.t["0iH2vc"]),
        buildLayout: () => [ft, f3, f_],
    });
var f4 = i(308645),
    f7 = i(271995),
    f5 = i(855267);
let f8 = (0, a.E2)(u.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["16r9jm"])],
        Component: f5.A,
    }),
    f9 = (0, a.zZ)(u.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [f8] }),
    Ne = (0, a.t_)(u.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => j.intl.string(j.t["16r9jm"]),
        buildLayout: () => [f9],
    }),
    Nt = (0, a.zZ)(u.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: () => j.intl.string(j.t["16r9jm"]),
        buildLayout: () => [Ni],
    }),
    Ni = (0, a.t0)(u.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: f7.$b,
        useSubtitle: f7.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: i } = (0, f7._k)();
            return { type: h.Xy.ICON, icon: i, color: e, backgroundColor: t };
        },
        initialize: () => {
            f4.Yn();
        },
        buildLayout: () => [Ne],
    });
var Nn = i(834981),
    Ns = i(840387),
    Nl = i(865542),
    Nr = i(477480);
let Na = (0, a.E2)(u.X.FAMILY_CENTER_SETTING, {
        Component: Nl.p,
        useSearchTerms: () => [
            j.intl.string(Nr.default.RZqaJn),
            j.intl.string(Nr.default.bdBmqy),
            j.intl.string(Nr.default["gVWG+6"]),
            j.intl.string(Nr.default.ahKIJO),
            j.intl.string(Nr.default["8SLtqb"]),
        ],
    }),
    No = (0, a.zZ)(u.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [Na] }),
    Nu = (0, a.t_)(u.X.FAMILY_CENTER_PANEL, {
        useTitle: () => j.intl.string(Nr.default.RZqaJn),
        buildLayout: () => [No],
    }),
    Nd = (0, a.zZ)(u.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => j.intl.string(Nr.default.RZqaJn),
        usePersistentBadge: function () {
            return S.useMemo(() => ({ badgeType: h.Xi.COUNT, useCount: Nn.VT }), []);
        },
        buildLayout: () => [Nc],
    }),
    Nc = (0, a.t0)(u.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, Nn.Li)() ? j.intl.string(Nr.default.IcMQUP) : j.intl.string(Nr.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, Ns.Z)(),
                t = (0, Nn.Li)();
            return e
                ? t
                    ? j.intl.string(Nr.default.G8lHFU)
                    : j.intl.string(Nr.default.uOLNEZ)
                : j.intl.string(Nr.default.Z53oSM);
        },
        buildLayout: () => [Nu],
    });
var Ng = i(425587),
    Nm = i(662758);
function NA(e) {
    if (e.body.code === U.t02.INVALID_PASSWORD) throw e;
    (0, or.A)({ title: j.intl.string(j.t.LX0nT8), subtitle: e.body.message });
}
async function Nh() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = io.default.getCurrentUser();
    if (null == t) return;
    let i = [];
    try {
        i = (await Ng.A.fetchTeams(!0)).body;
    } catch {}
    i.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, or.A)({
              title: j.intl.string(j.t["Y++oNe"]),
              subtitle: j.intl.format(j.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : ec.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, or.A)({ title: j.intl.string(j.t.vJiTOL), subtitle: j.intl.string(j.t.UyVVan) })
          : t.isClaimed()
            ? (0, K.openModal)((t) =>
                  (0, E.jsx)(Nm.default, {
                      ...t,
                      handleSubmit: (t) => (0, Tl.U_)(t, e).then(U.tEg, NA),
                      title: e ? j.intl.string(j.t.xca2ts) : j.intl.string(j.t.goXv9g),
                      actionText: e ? j.intl.string(j.t["8lQ2rR"]) : j.intl.string(j.t.jf5GGb),
                      variant: "critical-primary",
                      children: e ? j.intl.string(j.t.FB4H1D) : j.intl.string(j.t.gk7h32),
                  }),
              )
            : (0, sg.A)({
                  title: j.intl.string(j.t.xca2ts),
                  subtitle: j.intl.string(j.t.FB4H1D),
                  confirmText: j.intl.string(j.t["8lQ2rR"]),
                  onConfirm: () => (0, Tl.U_)("", !0),
              });
}
let NE = (0, a.Tf)(u.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => j.intl.string(j.t["gIpzR+"]),
        useSubtitle: () => j.intl.string(j.t.Bd6dOf),
        useLabel: () => j.intl.string(j.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => Nh(!0),
    }),
    NS = (0, a.Tf)(u.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => j.intl.string(j.t["p/Tjtp"]),
        useSubtitle: () => j.intl.string(j.t.YvDmKb),
        useLabel: () => j.intl.string(j.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => Nh(!1),
        usePredicate: () => {
            let e = (0, g.bG)([io.default], () => io.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    NT = (0, a.zZ)(u.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [NS, NE] }),
    Nx = (0, a.t_)(u.X.ACCOUNT_PANEL, {
        useTitle: () => j.intl.string(j.t["ldCE/p"]),
        initialize: function () {
            return () => {
                pG.A.clearBackupCodes(), (0, Tl.Uo)();
            };
        },
        useObscuredNotice: dT.L,
        buildLayout: () => [p9, f6, Nt, Nd, NT],
    }),
    Np = (0, a.i4)(u.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["ldCE/p"]),
        icon: A1.n,
        buildLayout: () => [Nx],
    });
var Nf = i(323384);
let NN = (0, a.zZ)(u.X.AUTHORIZED_APPS_CATEGORY, {
        buildLayout: () => [Sg],
        initialize: () => (
            Sd.A.fetch(),
            () => {
                Sc.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    N_ = (0, a.t_)(u.X.AUTHORIZED_APPS_PANEL, {
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        useObscuredNotice: dT.L,
        buildLayout: () => [NN],
    }),
    NI = (0, a.i4)(u.X.AUTHORIZED_APPS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        icon: Nf.k,
        buildLayout: () => [N_],
    });
var NC = i(176781),
    Nb = i(888916),
    Ny = i(572164),
    Nv = i(430795),
    Nj = i(274372),
    NO = i(788077);
let NR = (0, a.zD)(u.X.CLIPS_ENABLE_AUTOCLIPPING, {
        useTitle: () => j.intl.string(NO.default.j29uJx),
        useSubtitle: () => j.intl.format(NO.default.UCzGcQ, { learnMoreLink: tN.A.getArticleURL(U.MVz.CLIPS) }),
        useValue: () => (0, g.bG)([Nj.Ay], () => Nj.Ay.getEnableAutoclipping()),
        setValue: Nv.uL,
        useDisabled: Nb.Rt,
    }),
    ND = (0, a.zD)(u.X.CLIPS_ENABLE_GAME_SIGNALS, {
        useTitle: () => j.intl.string(j.t.iV6KcI),
        useSubtitle: () => j.intl.string(j.t["dJ2tX+"]),
        useValue: () => (0, g.bG)([Nj.Ay], () => Nj.Ay.getSettings().clipSignals.enableGameSignals),
        usePredicate: () => !1,
        setValue: (e) => {
            let t = Nj.Ay.getSettings().clipSignals;
            Nv.PW({ ...t, enableGameSignals: e });
        },
        useDisabled: Nb.A0,
    }),
    NL = (0, a.zY)(u.X.CLIPS_AUTOCLIPPING_CARD, { buildLayout: () => [NR, ND], headerSettingKey: NR.key }),
    NP = (0, a.zZ)(u.X.CLIPS_AUTOCLIPPING_CATEGORY, {
        useTitle: () => j.intl.string(NO.default.XWkJoi),
        useSubtitle: () => j.intl.string(NO.default["MJ/VsO"]),
        usePredicate: Nb.As,
        usePersistentBadge: () => ({ badgeType: h.Xi.BETA }),
        useInlineNotice: () =>
            (0, Ny.Et)()
                ? null
                : {
                      type: h.lT.INLINE_NOTICE,
                      noticeType: "info",
                      iconAlign: "center",
                      useText: () => j.intl.string(NO.default.wUpqua),
                      button: {
                          variant: "primary",
                          size: "sm",
                          useText: () => j.intl.string(NO.default.qGgW4M),
                          onClick: () => Nv.yO({ clipsEnabled: !0, trackAnalytics: !0 }),
                      },
                  },
        buildLayout: () => [NL],
    });
var NG = i(974293),
    NM = i(458977),
    NU = i(486925),
    NV = i(696016);
let Nk = (() => {
        let e = [NV.wN];
        for (let t = 10; t <= NV.qh; t += 10) e.push(t);
        return e[e.length - 1] !== NV.qh && e.push(NV.qh), e;
    })(),
    Nw = (0, a.sN)(u.X.CLIPS_AUTO_CLIP_STORAGE_LIMIT, {
        usePredicate: () => !(0, NU.M2)(),
        useTitle: () => j.intl.string(j.t.yfsrDI),
        useSubtitle: () => j.intl.string(j.t.vlDHdC),
        minValue: NV.wN,
        maxValue: NV.qh,
        getInitialValue: () => Nj.Ay.getSettings().maxAutoClips,
        onValueRender: (e) => `${Math.floor(e)}`,
        asValueChanges: (e) => Nv.e6(Math.floor(e)),
        markers: Nk,
        onMarkerRender: (e) => `${Math.floor(e)}`,
        useDisabled: Nb.Rt,
    }),
    NB = (0, a.zZ)(u.X.CLIPS_AUTOMATIC_CLIPPING_CATEGORY, {
        useTitle: () => j.intl.string(j.t.sA0WKL),
        usePredicate: () => {
            let e = (0, Nb.As)(),
                t = (0, NG.aJ)("ClipsAutomaticClippingCategory"),
                i = NM.A.useConfig({ location: "ClipsAutomaticClippingCategory" }).enableDistributedClips;
            return !e && (t || i);
        },
        buildLayout: () => [Nw, ND],
    });
var NF = i(753070);
let Nz = (0, a.Hn)(u.X.CLIPS_FRAME_RATE, {
    useTitle: () => j.intl.string(j.t["2wScL1"]),
    useSubtitle: () => j.intl.string(j.t["Rf9+fy"]),
    useValue: () => (0, g.bG)([Nj.Ay], () => Nj.Ay.getSettings().clipsQuality.frameRate),
    setValue: (e) => {
        let { clipsQuality: t } = Nj.Ay.getSettings();
        Nv.GS({ resolution: t.resolution, frameRate: e });
    },
    useOptions: function () {
        return [
            { id: "15", value: NF.kn.FPS_15, label: j.intl.formatToPlainString(j.t.Qb44XH, { fps: NF.kn.FPS_15 }) },
            { id: "30", value: NF.kn.FPS_30, label: j.intl.formatToPlainString(j.t.Qb44XH, { fps: NF.kn.FPS_30 }) },
            { id: "60", value: NF.kn.FPS_60, label: j.intl.formatToPlainString(j.t.Qb44XH, { fps: NF.kn.FPS_60 }) },
        ];
    },
    useDisabled: Nb.Rt,
});
var NX = i(372684);
let NY = (0, a.E2)(u.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
        useSearchTerms: () => [j.intl.string(j.t.SIxrIF)],
        usePredicate: () => (0, g.bG)([Nj.Ay], () => Nj.Ay.getHardwareClassification()) === NX.k9.BELOW_MINIMUM,
        Component: () => (0, E.jsx)(sA.A, { look: sA.k.WARNING, children: j.intl.string(j.t.SIxrIF) }),
    }),
    NH = (0, a.Hn)(u.X.CLIPS_LENGTH, {
        useTitle: () => j.intl.string(j.t.OgfUio),
        useSubtitle: () => j.intl.string(j.t.H7j4tY),
        useValue: () => (0, g.bG)([Nj.Ay], () => Nj.Ay.getSettings().clipsLength),
        setValue: (e) => Nv.h$(e),
        useOptions: function () {
            return [
                { id: "30s", value: NV.LX.SECONDS_30, label: j.intl.formatToPlainString(j.t["bTFv/3"], { count: 30 }) },
                { id: "1m", value: NV.LX.MINUTES_1, label: j.intl.formatToPlainString(j.t.ICo9Nk, { count: 1 }) },
                { id: "2m", value: NV.LX.MINUTES_2, label: j.intl.formatToPlainString(j.t.ICo9Nk, { count: 2 }) },
            ];
        },
        useDisabled: Nb.Rt,
    }),
    NK = (0, a.E2)(u.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [j.intl.string(j.t["Z+MfqT"])],
        Component: () => (0, E.jsx)(sA.A, { look: sA.k.INFO, children: j.intl.string(j.t["Z+MfqT"]) }),
    }),
    NW = (0, a.Hn)(u.X.CLIPS_RESOLUTION, {
        useTitle: () => j.intl.string(j.t.aFudZJ),
        useSubtitle: () => j.intl.string(j.t.nIrkW5),
        useValue: () => (0, g.bG)([Nj.Ay], () => Nj.Ay.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = Nj.Ay.getSettings();
            Nv.GS({ resolution: e, frameRate: t.frameRate });
        },
        useOptions: function () {
            return [
                {
                    id: "480p",
                    value: NF.on.RESOLUTION_480,
                    label: j.intl.formatToPlainString(j.t.TEOC0I, { resolution: NF.on.RESOLUTION_480 }),
                },
                {
                    id: "720p",
                    value: NF.on.RESOLUTION_720,
                    label: j.intl.formatToPlainString(j.t.TEOC0I, { resolution: NF.on.RESOLUTION_720 }),
                },
                {
                    id: "1080p",
                    value: NF.on.RESOLUTION_1080,
                    label: j.intl.formatToPlainString(j.t.TEOC0I, { resolution: NF.on.RESOLUTION_1080 }),
                },
                {
                    id: "1440p",
                    value: NF.on.RESOLUTION_1440,
                    label: j.intl.formatToPlainString(j.t.TEOC0I, { resolution: NF.on.RESOLUTION_1440 }),
                },
                { id: "source", value: NF.on.RESOLUTION_SOURCE, label: j.intl.string(j.t.XjXqzh) },
            ];
        },
        useDisabled: Nb.Rt,
    }),
    NZ = (0, a.zD)(u.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => j.intl.string(j.t["3zwNf6"]),
        useSubtitle: () => j.intl.string(j.t.m4Cjj9),
        useValue: () => (0, g.bG)([Nj.Ay], () => Nj.Ay.getSettings().remindersEnabled),
        setValue: (e) => Nv.Mt(e),
        useDisabled: Nb.Rt,
    }),
    NQ = (0, a.zZ)(u.X.CLIPS_CAPTURE_SETTINGS_CATEGORY, {
        useTitle: () => j.intl.string(NO.default.TGwzMe),
        usePredicate: Nb.As,
        buildLayout: () => [NY, NH, Nz, NW, NK, NZ],
    }),
    Nq = (0, a.zD)(u.X.CLIPS_DEBUG_TOOLTIPS, {
        useTitle: () => "Show clips debug tooltips",
        useSubtitle: () =>
            "Show overlay tooltips for the clips engine starting, enabled features, auto-clip signals, and save errors. Intended for development and testing.",
        useValue: () => (0, g.bG)([Nj.Ay], () => Nj.Ay.getSettings().debugTooltipsEnabled),
        setValue: (e) => Nv.YP(e),
    }),
    NJ = (0, a.zD)(u.X.CLIPS_SHOW_POV_CLIPS, {
        useTitle: () => "Show POV clips in Gallery",
        useSubtitle: () =>
            "Show clips automatically captured from your point of view when a teammate clips a shared moment. Dev-only for now.",
        useValue: () => (0, g.bG)([Nj.Ay], () => Nj.Ay.getSettings().showPovClipsInGallery),
        setValue: (e) => Nv.Uh(e),
    }),
    N$ = (0, a.zZ)(u.X.CLIPS_DEVELOPER_CATEGORY, {
        useTitle: () => "Developer",
        usePredicate: () =>
            (0, g.bG)([io.default], () => {
                let e = io.default.getCurrentUser();
                return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
            }),
        buildLayout: () => [Nq, NJ],
    });
var N0 = i(417270),
    N1 = i(74438);
let N2 = (0, a.E2)(u.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [j.intl.string(j.t.pf54EU), j.intl.string(j.t["QyB/jK"])],
        Component: () => {
            let e = (0, g.bG)([eF.Ay], () => eF.Ay.getKeybindForAction(U.hCu.SAVE_CLIP, !0));
            tz()(null != e, "Save clip keybind unset");
            let t = (0, Nb.Rt)(),
                i = (0, Nb.As)(),
                n = S.useRef(null),
                s = S.useCallback(
                    (t) => {
                        tX.A.setKeybind({ ...e, shortcut: t });
                    },
                    [e],
                ),
                l = S.useCallback(() => {
                    tX.A.setKeybind({ ...e, shortcut: (0, eQ.OH)(NV.Ot) });
                }, [e]);
            return (0, E.jsx)(s4.D, {
                label: j.intl.string(j.t.pf54EU),
                description: j.intl.string(j.t["QyB/jK"]),
                layout: "horizontal-responsive",
                children: (0, E.jsx)("div", {
                    className: N1.g,
                    children: (0, E.jsx)(tY.A, {
                        ref: n,
                        disabled: t,
                        defaultValue: e.shortcut,
                        onChange: s,
                        trailingActions: i
                            ? (0, E.jsxs)(E.Fragment, {
                                  children: [
                                      (0, E.jsx)(tr.m, {
                                          text: j.intl.string(NO.default.bUtubv),
                                          position: "top",
                                          ariaHidden: !0,
                                          children: (0, E.jsx)(lQ.K, {
                                              icon: lW.F,
                                              size: "sm",
                                              variant: "secondary",
                                              disabled: t,
                                              "aria-label": j.intl.string(NO.default.bUtubv),
                                              onClick: (e) => {
                                                  e.stopPropagation(), n.current?.toggleRecordMode();
                                              },
                                          }),
                                      }),
                                      (0, E.jsx)(tr.m, {
                                          text: j.intl.string(NO.default.Kyk1Tp),
                                          position: "top",
                                          ariaHidden: !0,
                                          children: (0, E.jsx)(lQ.K, {
                                              icon: N0.m,
                                              size: "sm",
                                              variant: "secondary",
                                              disabled: t,
                                              "aria-label": j.intl.string(NO.default.Kyk1Tp),
                                              onClick: (e) => {
                                                  e.stopPropagation(), l();
                                              },
                                          }),
                                      }),
                                  ],
                              })
                            : void 0,
                    }),
                }),
            });
        },
    }),
    N3 = (0, a.E2)(u.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [j.intl.string(j.t["0U/hj7"]), j.intl.string(j.t["5zxkdo"])],
        usePredicate: rT.BW,
        Component: () => {
            let e = (0, g.bG)([eF.Ay], () => eF.Ay.getKeybindForAction(U.hCu.SAVE_CLIP, !0)),
                t = (0, g.bG)([eF.Ay], () => eF.Ay.getKeybindForAction(U.hCu.SAVE_SCREENSHOT, !0));
            tz()(null != e, "Save clip keybind unset"), tz()(null != t, "Save screenshot keybind unset");
            let i = S.useCallback(
                (e) => {
                    tX.A.setKeybind({ ...t, shortcut: e });
                },
                [t],
            );
            return (0, E.jsx)(s4.D, {
                label: j.intl.string(j.t["0U/hj7"]),
                description: j.intl.string(j.t["5zxkdo"]),
                layout: "horizontal",
                children: (0, E.jsx)("div", {
                    className: N1.g,
                    children: (0, E.jsx)(tY.A, { defaultValue: t.shortcut, onChange: i }),
                }),
            });
        },
    }),
    N6 = (0, a.zD)(u.X.CLIPS_ENABLE, {
        useTitle: () => j.intl.string(j.t.h8rgrK),
        useSubtitle: () => j.intl.string(j.t["4Qw3NO"]),
        useValue: () => (0, Ny.Et)(),
        setValue: (e) => Nv.yO({ clipsEnabled: e, trackAnalytics: !0 }),
    });
var N4 = i(915618);
let N7 = (0, a.zD)(u.X.CLIPS_ENABLE_DECOUPLED_CLIPPING, {
        useTitle: () => j.intl.string(j.t.yXvykv),
        useSubtitle: () => j.intl.string(j.t.YP3ujk),
        useValue: Ny.XT,
        setValue: (e) => Nv.fd({ enabled: e, trackAnalytics: !0 }),
        usePredicate: function () {
            let e = (0, eY.isWindows)(),
                t = (0, N4.A)(l3.Ay),
                i = (0, Nb.As)();
            return e && t && !i;
        },
        useDisabled: Nb.Rt,
    }),
    N5 = (0, a.zY)(u.X.CLIPS_GENERAL_CARD, { buildLayout: () => [N6, N7, N2, N3], headerSettingKey: N6.key }),
    N8 = (0, a.zZ)(u.X.CLIPS_GENERAL_CATEGORY, {
        useTitle: () => j.intl.string(j.t["rWKv+e"]),
        useSubtitle: () => j.intl.format(NO.default["dh7g+S"], { learnMoreLink: tN.A.getArticleURL(U.MVz.CLIPS) }),
        usePredicate: Nb.As,
        buildLayout: () => [N5],
    }),
    N9 = (0, a.E2)(u.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [j.intl.string(j.t.s4773E), j.intl.string(j.t.svjwGh)],
        Component: () => {
            let e = (0, g.bG)([Nj.Ay], () => Nj.Ay.getSettings().storageLocation),
                t = (0, Nb.Rt)(),
                i = S.useRef(!1);
            async function n() {
                if (!t && !i.current) {
                    i.current = !0;
                    try {
                        let e = await lN.A.fileManager.showOpenDialog({
                            properties: ["openDirectory", "createDirectory"],
                        });
                        e.length > 0 && Nv.HU(e[0]);
                    } finally {
                        i.current = !1;
                    }
                }
            }
            return (0, E.jsx)(s4.D, {
                label: j.intl.string(j.t.s4773E),
                description: j.intl.string(j.t.svjwGh),
                layout: "vertical",
                children: (0, E.jsxs)(q.B, {
                    direction: "horizontal",
                    align: "center",
                    gap: "sm",
                    children: [
                        (0, E.jsx)(l9.k, {
                            fullWidth: !0,
                            value: e,
                            editable: !1,
                            disabled: t,
                            "aria-label": j.intl.formatToPlainString(j.t.iMONTj, { storageLocation: e }),
                        }),
                        (0, E.jsx)(eG.$, {
                            variant: "secondary",
                            disabled: t,
                            onClick: n,
                            text: j.intl.string(NO.default.yQAN6B),
                        }),
                    ],
                }),
            });
        },
    }),
    _e = (0, a.zZ)(u.X.CLIPS_RECORDING_CATEGORY, {
        useTitle: () => j.intl.string(j.t.iIwmV5),
        usePredicate: () => !(0, Nb.As)(),
        buildLayout: () => [NK, NY, N6, N7, NZ, NH, NW, Nz, N2, N3, N9],
    }),
    _t = (0, a.zZ)(u.X.CLIPS_STORAGE_CATEGORY, {
        useTitle: () => j.intl.string(NO.default["0Q+pdZ"]),
        usePredicate: Nb.As,
        buildLayout: () => [N9, Nw],
    }),
    _i = (0, a.t_)(u.X.CLIPS_PANEL, {
        useTitle: () => j.intl.string(j.t.z2jK6X),
        usePredicate: rT.sw,
        buildLayout: () => [N8, NP, NQ, _t, _e, NB, N$],
    }),
    _n = (0, a.i4)(u.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.z2jK6X),
        icon: NC.x,
        buildLayout: () => [_i],
    }),
    _s = (0, a.zZ)(u.X.CONNECTIONS_ADD_CONNECTIONS_CATEGORY, { buildLayout: () => [S4], useInlineNotice: S9 }),
    _l = (0, a.zZ)(u.X.CONNECTIONS_CONNECTED_ACCOUNTS_CATEGORY, { buildLayout: () => [S7] }),
    _r = (0, a.t_)(u.X.CONNECTIONS_PANEL, {
        useTitle: () => j.intl.string(j.t["3fe7U5"]),
        useObscuredNotice: dT.L,
        buildLayout: () => [_s, _l],
    }),
    _a = (0, a.i4)(u.X.CONNECTIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["3fe7U5"]),
        icon: Eo.q,
        buildLayout: () => [_r],
    });
var _o = i(875444);
function _u(e, t) {
    let i = (0, g.bG)([Sk.default], () => Sk.default.getFetchState()),
        n = (0, g.bG)([Sk.default], () =>
            e ? Sk.default.getNewestTokensForNonChildrenApplications() : Sk.default.getNewestTokens(),
        ),
        s = S.useMemo(
            () => (null == n ? [] : n.filter((e) => (0, _o.O)(e.application, e.scopes)).map((e) => e.application)),
            [n],
        );
    return (
        S.useEffect(() => {
            t || Sd.A.fetch();
        }, [t]),
        { showLoadingIndicator: i !== Sk.FetchState.FETCHED && (null == n || 0 === n.length), slayerSdkApplications: s }
    );
}
var _d = i(699886);
function _c(e) {
    let { applications: t } = e,
        i = S.useMemo(() => t.sort((e, t) => dD.default.compare(t.id, e.id)), [t]),
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
                              es.E,
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
                            children: (0, E.jsx)("img", { src: a, "aria-label": l, className: _d.Kk }),
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
                                className: _d.lK,
                                children: (0, E.jsx)(es.E, {
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
        className: _d.wx,
        children: [
            (0, E.jsxs)("div", {
                className: _d.kX,
                children: [
                    (0, E.jsx)(es.E, { variant: "text-md/normal", color: "text-strong", children: n }),
                    (0, E.jsxs)(en.D, {
                        onClick: function () {
                            (0, eH.openUserSettings)(u.X.AUTHORIZED_APPS_PANEL);
                        },
                        className: _d.bJ,
                        children: [
                            (0, E.jsx)(es.E, {
                                variant: "text-xs/normal",
                                color: "interactive-text-default",
                                children: j.intl.format(j.t.oYaYOe, {}),
                            }),
                            (0, E.jsx)(tO._, {
                                size: "xxs",
                                color: er.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                className: _d.g7,
                            }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)("div", { className: _d.yF }),
            (0, E.jsx)("div", { className: _d.lJ, children: s }),
        ],
    });
}
function _g() {
    return (0, E.jsxs)("div", {
        className: _d.do,
        children: [
            (0, E.jsx)(es.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: _d.xV,
                children: j.intl.string(j.t["+0U77d"]),
            }),
            (0, E.jsx)(es.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: j.intl.format(j.t.V8wClM, {
                    helpdeskArticle: tN.A.getArticleURL(U.MVz.SOCIAL_LAYER_CONNECTIONS),
                }),
            }),
        ],
    });
}
function _m(e) {
    let { applications: t } = e;
    return t.length > 0 ? (0, E.jsx)(_c, { applications: t }) : (0, E.jsx)(_g, {});
}
let _A = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES, {
    useSearchTerms: () => [j.intl.string(j.t.YpCiMt)],
    Component: function () {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = _u(!0);
        return e ? (0, E.jsx)(dp.y, {}) : (0, E.jsx)(_m, { applications: t });
    },
});
function _h() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = _u(!0, !0);
    return !e && t.length > 0;
}
let _E = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => ((0, o.SV)("GameFriendDMSetting") ? j.intl.string(j.t.W8JtfT) : j.intl.string(j.t.XpBObB)),
        useSubtitle: () =>
            (0, o.SV)("GameFriendDMSetting")
                ? j.intl.string(j.t.a99KKy)
                : j.intl.format(j.t.oZsHTD, { helpdeskArticle: tN.A.getArticleURL(U.MVz.SLAYER_GAME_FRIENDS) }),
        useSearchTerms: () => [j.intl.string(j.t["Uv/eTx"])],
        useValue: () => D.Zk.useSetting(),
        setValue: (e) => D.Zk.updateSetting(e),
        usePredicate: _h,
    }),
    _S = (0, a.Qx)(u.X.CONTENT_AND_SOCIAL_IN_GAME_DMS_SETTING, {
        useTitle: () => j.intl.string(j.t["ms+Tme"]),
        useSubtitle: () =>
            (0, o.SV)("InGameDMsSetting") ? j.intl.string(j.t["0ryspy"]) : j.intl.string(j.t["4NN4+/"]),
        useOptions: function () {
            return [
                { name: j.intl.string(j.t.JIFnN9), value: H.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
                { name: j.intl.string(j.t.rRdsk1), value: H.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
                {
                    name: (0, o.SV)("InGameDMsSetting") ? j.intl.string(j.t.IVRPMX) : j.intl.string(j.t.AolKwN),
                    value: H.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE,
                },
            ];
        },
        useValue: function () {
            let e = D.TA.useSetting();
            return e === H.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? H.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e;
        },
        setValue: (e) => D.TA.updateSetting(e),
        usePredicate: _h,
    }),
    _T = (0, a.zZ)(u.X.CONNECTED_GAMES_CATEGORY, {
        useSearchTerms: () => [j.intl.string(j.t.YpCiMt)],
        buildLayout: () => [_A, _E, _S],
    });
var _x = i(687123),
    _p = i(444802),
    _f = i(558001);
i(866945);
var _N = i(835002);
function __() {
    let e = (0, _p.WX)();
    S.useEffect(() => {
        (0, _f.N)(_N.YA.AGE_CONFIRMATION_NOTICE, _N.YX.VIEWED);
    }, []);
    let t = S.useCallback(() => {
            window.open(tN.A.getArticleURL(e), "_blank"), (0, _f.N)(_N.YA.AGE_CONFIRMATION_NOTICE, _N.YX.LEARN_MORE);
        }, [e]),
        i = S.useCallback(() => {
            pH.A.showAgeVerificationGetStartedModal({ entryPoint: pK.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, _f.N)(_N.YA.AGE_CONFIRMATION_NOTICE, _N.YX.CONFIRM_AGE);
        }, []);
    return (0, E.jsx)(tf.p, {
        messageType: tf.Y.INFO,
        action: (0, E.jsx)(ea.Q, {
            variant: "secondary",
            size: "sm",
            textVariant: "text-sm/medium",
            text: j.intl.string(j.t.FDSSia),
            onClick: i,
        }),
        children: j.intl.format(j.t.mFgsfg, { hook: (e, i) => (0, E.jsx)(di.Anchor, { onClick: t, children: e }, i) }),
    });
}
function _I() {
    let e = (0, pw.aX)(_x.t.REACTIVE_CHECK),
        t = (0, pk.b8)();
    return S.useMemo(() => {
        if (e && !t) return { type: h.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: __ };
    }, [e, t]);
}
var _C = i(308528),
    _b = i(171316);
function _y() {
    let e = (0, _b.uM)(),
        t = (0, Nn.vx)(),
        i = S.useCallback(() => {
            (0, sH.default)(),
                _C.A.openPrivateChannel({ recipientIds: t }),
                (0, _f.N)(_N.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _N.YX.LEARN_MORE);
        }, [t]),
        n = S.useCallback(() => {
            (0, _f.N)(_N.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _N.YX.VIEWED);
        }, []);
    return S.useMemo(() => {
        if (e)
            return {
                type: h.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: n,
                useText: () =>
                    j.intl.format(Nr.default.i284fU, {
                        hook: (e, t) => (0, E.jsx)(di.Anchor, { onClick: i, children: e }, t),
                        count: t.length,
                    }),
            };
    }, [i, e, t.length, n]);
}
var _v = i(323073),
    _j = i(386171),
    _O = i(96607);
let _R = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_DM_SETTING, {
        useTitle: () =>
            (0, o.SV)("AgeRestrictedDMCommandsSetting") ? j.intl.string(j.t.gvC6q7) : j.intl.string(j.t.XahVjj),
        useSubtitle: () =>
            (0, o.SV)("AgeRestrictedDMCommandsSetting") ? j.intl.string(j.t.zirUC1) : j.intl.string(j.t.R9fXyS),
        useValue: _j.hT,
        useDisabled: function () {
            let e = (0, _O.A)() ?? !0,
                t = (0, _v.sP)(),
                i = (0, pk.yM)();
            return (!t || !!i) && !e;
        },
        setValue: function (e) {
            (0, _v.p5)() && e
                ? pH.A.showAgeVerificationGetStartedModal({ entryPoint: pK.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : D.Qe.updateSetting(e);
        },
    }),
    _D = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => j.intl.string(j.t["L+yTsa"]),
        useSubtitle: () =>
            (0, o.SV)("AgeRestrictediOSSetting") ? j.intl.string(j.t["t6i/jW"]) : j.intl.string(j.t.hiM8pU),
        useValue: _j.tI,
        useDisabled: function () {
            let e = (0, _O.A)() ?? !0,
                t = (0, _v.sP)(),
                i = (0, pk.yM)();
            return S.useMemo(() => (!t || !!i) && !e, [t, e, i]);
        },
        setValue: function (e) {
            (0, _v.p5)() && e
                ? pH.A.showAgeVerificationGetStartedModal({ entryPoint: pK.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : D.Kg.updateSetting(e);
        },
    }),
    _L = (0, a.AK)(u.X.CONTENT_FILTERS_APPEARANCE_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.hOXd45),
        destinationKey: u.X.APPEARANCE_MESSAGES_CATEGORY,
    }),
    _P = (0, a.gN)(u.X.CONTENT_FILTERS_RELATED_SETTINGS, { buildLayout: () => [_L] });
i(667532);
var _G = i(390248),
    _M = i(632119),
    _U = i(945276),
    _V = i(389737),
    _k = i(566769);
function _w() {
    let e,
        t = (0, _U.A)() ?? !0,
        i = (0, _b.uM)(),
        n = (0, _b.uM)(),
        {
            explicitContentGuilds: s,
            explicitContentFriendDm: l,
            explicitContentNonFriendDm: r,
        } = ((e = (0, dt.cf)([uy.A], () => uy.A.settings.textAndImages?.explicitContentSettings ?? (0, _M.C$)())),
        {
            explicitContentGuilds: (0, _M.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, _M.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, _M.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, _G.hK)() && t.includes(H.TO.SHOW)
            ? pH.A.showAgeVerificationGetStartedModal({ entryPoint: pK.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, _M.Jz)(e);
    }
    let o = [
            { value: H.TO.BLUR, label: j.intl.string(j.t.S49Uad) },
            { value: H.TO.BLOCK, label: j.intl.string(j.t["D/157Y"]) },
        ],
        u = [{ value: H.TO.BLUR, label: j.intl.string(j.t.S49Uad) }],
        d = { value: H.TO.SHOW, label: j.intl.string(j.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: n, tooltipText: i ? j.intl.string(Nr.default["6Af/cw"]) : void 0 };
    return (0, E.jsxs)(_V.E, {
        description: j.intl.string(j.t.Wnojv1),
        children: [
            (0, E.jsx)(_k.A, {
                title: j.intl.string(j.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(_k.A, {
                title: j.intl.string(j.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(_k.A, {
                title: j.intl.string(j.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || n,
                tooltipText: i ? j.intl.string(Nr.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function _B() {
    let e,
        t = (0, _U.A)() ?? !0,
        i = (0, _b.uM)(),
        n = (0, _b.uM)(),
        {
            goreContentGuilds: s,
            goreContentFriendDm: l,
            goreContentNonFriendDm: r,
        } = ((e = (0, dt.cf)([uy.A], () => uy.A.settings.textAndImages?.goreContentSettings ?? (0, _p.T4)())),
        {
            goreContentGuilds: (0, _p.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, _p.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, _p.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, _G.hK)() && t.includes(H.TO.SHOW)
            ? pH.A.showAgeVerificationGetStartedModal({ entryPoint: pK.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, _p.qY)(e);
    }
    let o = [
            { value: H.TO.BLUR, label: j.intl.string(j.t.S49Uad) },
            { value: H.TO.BLOCK, label: j.intl.string(j.t["D/157Y"]) },
        ],
        u = [{ value: H.TO.BLUR, label: j.intl.string(j.t.S49Uad) }],
        d = { value: H.TO.SHOW, label: j.intl.string(j.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: n, tooltipText: i ? j.intl.string(Nr.default["6Af/cw"]) : void 0 };
    return (0, E.jsxs)(_V.E, {
        description: j.intl.string(j.t.XgH9eh),
        children: [
            (0, E.jsx)(_k.A, {
                title: j.intl.string(j.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(_k.A, {
                title: j.intl.string(j.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(_k.A, {
                title: j.intl.string(j.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || n,
                options: u,
                tooltipText: i ? j.intl.string(Nr.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var _F = i(464946),
    _z = i(875162),
    _X = i(935307);
let _Y = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, _p.WX)(),
            t = S.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: j.intl.string(j.t.GYpoAq),
                        component: _w,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: j.intl.string(j.t["16/3Bi"]),
                        component: _B,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, E.jsxs)(_F.h, {
            children: [
                (0, E.jsx)(_F._, {
                    header: j.intl.string(j.t["Hj/But"]),
                    description: j.intl.format(j.t.dliU4j, { learnMoreLink: tN.A.getArticleURL(e) }),
                }),
                (0, E.jsx)(_z.A, { tabs: t, orientation: "vertical", tabsClassName: _X.v }),
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
var _H = i(639555),
    _K = i(617641),
    _W = i(546140),
    _Z = i(406935),
    _Q = i(594061);
let _q = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING, {
    useTitle: () => j.intl.string(j.t.qFsx5q),
    useSubtitle: () => j.intl.format(j.t.lunaRv, { learnMoreLink: tN.A.getArticleURL(U.MVz.SAFETY_ALERTS) }),
    useValue: _W.L,
    setValue: function (e) {
        return _Q.wc.updateAsync(
            "privacy",
            (t) => {
                t.inappropriateConversationWarnings = _Z._t.create({ value: e });
            },
            _Q.Sb.INFREQUENT_USER_ACTION,
        );
    },
    usePredicate: function () {
        let e = (0, _K.Lc)({ location: "DMSafetyAlertsSetting" }),
            t = (0, _H.Rv)({ location: "DMSafetyAlertsSetting" }),
            i = (0, _U.A)() ?? !0;
        return e && !i && !t;
    },
});
var _J = i(809505),
    _$ = i(923457),
    _0 = i(750714);
let _1 = (0, a.Qx)(u.X.CONTENT_AND_SOCIAL_DM_SPAM_SETTING, {
        useTitle: () => ((0, o.SV)("DMSpamSetting") ? j.intl.string(j.t.puwSkY) : j.intl.string(j.t.tiCXaH)),
        useSubtitle: () =>
            (0, o.SV)("DMSpamSetting")
                ? j.intl.string(j.t["+sXN3T"])
                : j.intl.format(j.t.RvjRRI, { appealLink: tN.A.getArticleURL(U.MVz.SAFE_DIRECT_MESSAGING) }),
        useValue: function () {
            let e = D.he.useSetting(),
                t = D.cj.useSetting(),
                i = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
                n = (0, pw.yv)(_$.p.SPAM_FILTERS);
            return e !== H.he.DEFAULT_UNSET
                ? e
                : i?.nsfwAllowed === !1 && n
                  ? H.he.FRIENDS_AND_NON_FRIENDS
                  : (_0.xY.get(t) ?? H.he.NON_FRIENDS);
        },
        setValue: (e) => D.he.updateSetting(e),
        useOptions: function () {
            let e = (0, o.SV)("DMSpamSetting");
            return S.useMemo(
                () =>
                    e
                        ? [
                              { name: j.intl.string(j.t["+w5yKk"]), value: H.he.FRIENDS_AND_NON_FRIENDS },
                              { name: j.intl.string(j.t.yAPg6r), value: H.he.NON_FRIENDS },
                              { name: j.intl.string(j.t.FEXKsv), value: H.he.DISABLED },
                          ]
                        : (0, _J.YS)(),
                [e],
            );
        },
        useSearchTerms: () => [j.intl.string(j.t.JzaP4h), j.intl.string(j.t.H9XOl3), j.intl.string(j.t.k4W40P)],
    }),
    _2 = (0, a.zZ)(u.X.CONTENT_CATEGORY, {
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
                u = _y(),
                d =
                    ((e = (0, Ns.Z)()),
                    (t = (0, _p.WX)()),
                    (i = S.useCallback(() => {
                        window.open(tN.A.getArticleURL(t), "_blank"),
                            (0, _f.N)(_N.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _N.YX.LEARN_MORE);
                    }, [t])),
                    (n = S.useCallback(() => {
                        (0, _f.N)(_N.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _N.YX.VIEWED);
                    }, [])),
                    S.useMemo(() => {
                        if (e)
                            return {
                                type: h.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: n,
                                useText: () =>
                                    j.intl.format(j.t.EUo0yj, {
                                        hook: (e, t) => (0, E.jsx)(di.Anchor, { onClick: i, children: e }, t),
                                    }),
                            };
                    }, [i, e, n])),
                c =
                    ((s = (0, pw.SJ)()),
                    (l = (0, pk.b8)()),
                    (r = s && !l),
                    (a = S.useCallback(() => {
                        pH.A.showAgeVerificationGetStartedModal({ entryPoint: pK.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, _f.N)(_N.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _N.YX.LEARN_MORE);
                    }, [])),
                    (o = S.useCallback(() => {
                        (0, _f.N)(_N.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _N.YX.VIEWED);
                    }, [])),
                    S.useMemo(() => {
                        if (r)
                            return {
                                type: h.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: o,
                                useText: () =>
                                    j.intl.format(j.t.OX4ybh, {
                                        hook: (e, t) => (0, E.jsx)(di.Anchor, { onClick: a, children: e }, t),
                                    }),
                            };
                    }, [a, r, o])),
                g = _I();
            return u ?? g ?? c ?? d;
        },
        buildLayout: () => ((0, o.Bv)("ContentCategory") ? [_Y, _q, _R, _D, _P] : [_Y, _1, _q, _R, _D]),
    });
var _3 = i(189883);
let _6 = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => j.intl.string(j.t["7x9dyE"]),
    useValue: function () {
        let e = D.FA.useSetting();
        return S.useMemo(() => (0, rJ.Lx)(e), [e]).all;
    },
    setValue: function (e) {
        D.FA.updateSetting(e ? U.yKI : U.yKI & ~U.dzt.NO_RELATION);
    },
    useDisabled: function () {
        return (0, _b.uM)();
    },
});
var _4 = i(665260);
let _7 = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => j.intl.string(j.t.NfeuZ3),
        useValue: function () {
            let e = D.FA.useSetting(),
                t = S.useMemo(() => (0, rJ.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: function (e) {
            let t = D.FA.getSetting();
            D.FA.updateSetting(e ? _4.UI(t, U.dzt.MUTUAL_FRIENDS) : _4.iE(t, U.dzt.MUTUAL_FRIENDS, U.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, _b.uM)();
        },
    }),
    _5 = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => j.intl.string(j.t.qsMfsH),
        useSubtitle: () => ((0, o.SV)("FriendRequestsMutualGuildsSetting") ? j.intl.string(j.t["6DqAp0"]) : void 0),
        useValue: function () {
            let e = D.FA.useSetting(),
                t = S.useMemo(() => (0, rJ.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: function (e) {
            let t = D.FA.getSetting();
            D.FA.updateSetting(e ? _4.UI(t, U.dzt.MUTUAL_GUILDS) : _4.iE(t, U.dzt.MUTUAL_GUILDS, U.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, _b.uM)();
        },
    }),
    _8 = (0, a.FW)(u.X.FRIEND_REQUESTS_FIELDSET, {
        useTitle: () => j.intl.string(j.t.wTdS6S),
        buildLayout: () => [_6, _7, _5],
    }),
    _9 = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => j.intl.string(j.t["jK+wdr"]),
        useSubtitle: () => j.intl.string(j.t["RYh/pW"]),
        useValue: () => !D.Zd.useSetting(),
        setValue: function (e) {
            D.Zd.updateSetting(!e);
        },
        usePredicate: () => _3.A.useConfig({ location: "Friend Request Setting" }).enabled,
        usePersistentBadge: () => ({ badgeType: h.Xi.BETA }),
    });
function Ie() {
    let { enabled: e } = _3.A.useConfig({ location: "Friend Request Setting" });
    return e ? j.intl.string(j.t.QVbF3l) : void 0;
}
let It = (0, a.zZ)(u.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["5gxWrt"]),
        useSubtitle: Ie,
        useSubnavLabel: () => j.intl.string(j.t.fyA115),
        useInlineNotice: _y,
        buildLayout: () => [_8, _9],
    }),
    Ii = (0, a.zZ)(u.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.MNaVwq),
        useSubtitle: Ie,
        useInlineNotice: _y,
        buildLayout: () => [_6, _7, _5, _9],
    });
var In = i(994500),
    Is = i(428678),
    Il = i(717398),
    Ir = i(730134),
    Ia = i(896086);
function Io(e) {
    let { listType: t, numberOfUsers: i } = e,
        n = "blocked" === t;
    return (0, E.jsxs)("div", {
        className: Ia.wx,
        children: [
            (0, E.jsx)("div", { className: Ia.zc, children: n ? (0, E.jsx)(Is.K, {}) : (0, E.jsx)(iv.G, {}) }),
            (0, E.jsxs)("div", {
                className: Ia.Qq,
                children: [
                    (0, E.jsx)(es.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: j.intl.string(n ? j.t.PFOUKW : j.t["93ZDWE"]),
                    }),
                    (0, E.jsx)(es.E, {
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
function Iu(e) {
    let { userId: t, last: i } = e,
        n = (0, g.bG)([In.A], () => In.A.isBlocked(t)),
        s = (0, g.bG)([io.default], () => io.default.getUser(t)),
        [l, r] = S.useState(!1),
        a = S.useCallback(() => {
            r(!0),
                n
                    ? Il.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : Il.A.unignoreUser(t, e1.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      });
        }, [n, t]);
    return null == s
        ? null
        : (0, E.jsxs)("div", {
              className: e6()(Ia.nM, { [Ia.fW]: i }),
              children: [
                  (0, E.jsxs)("div", {
                      className: Ia.eF,
                      children: [
                          (0, E.jsx)(Ir.A, { user: s, size: i4._3.SIZE_40 }),
                          (0, E.jsxs)("div", {
                              className: Ia.Qq,
                              children: [
                                  (0, E.jsx)(es.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: s.globalName ?? s.username,
                                  }),
                                  (0, E.jsx)(es.E, {
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
function Id(e) {
    let { userIds: t, listType: i } = e,
        [n, s] = S.useState(5);
    return (0, E.jsx)(_F.h, {
        children: (0, E.jsxs)("div", {
            className: Ia.Nr,
            children: [
                (0, E.jsx)(Io, { listType: i, numberOfUsers: t.length }),
                (0, E.jsx)("div", {
                    className: Ia.jS,
                    children: t.slice(0, n).map((e, i) => (0, E.jsx)(Iu, { userId: e, last: i === t.length - 1 }, e)),
                }),
                n < t.length
                    ? (0, E.jsx)("div", {
                          className: Ia.vM,
                          children: (0, E.jsx)(en.D, {
                              onClick: () => {
                                  s((e) => e + 5);
                              },
                              className: Ia.Qf,
                              children: (0, E.jsx)(es.E, {
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
let Ic = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_BLOCKED_USERS, {
        useSearchTerms: () => [j.intl.string(j.t.PFOUKW)],
        usePredicate: () => (0, g.bG)([In.A], () => In.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, g.yK)([In.A], () => In.A.getBlockedIDs());
            return (0, E.jsx)(Id, { userIds: e, listType: "blocked" });
        },
    }),
    Ig = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_IGNORED_USERS, {
        useSearchTerms: () => [j.intl.string(j.t["93ZDWE"])],
        usePredicate: () => (0, g.bG)([In.A], () => In.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, g.yK)([In.A], () => In.A.getIgnoredIDs());
            return (0, E.jsx)(Id, { userIds: e, listType: "ignored" });
        },
    }),
    Im = (0, a.zZ)(u.X.RESTRICTED_USERS_CATEGORY, {
        useTitle: () =>
            (0, o.SV)("RestrictedUsersCategory") ? j.intl.string(j.t["+Iryf3"]) : j.intl.string(j.t.LVwR56),
        useSubtitle: () =>
            j.intl.format(j.t["0aNQo9"], { helpArticle: tN.A.getArticleURL(U.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [Ic, Ig],
        usePredicate: function () {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, g.cf)([In.A], () => ({
                hasBlockedUsers: In.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: In.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var IA = i(22385),
    Ih = i(556534),
    IE = i(111159),
    IS = i(152056),
    IT = i(51394);
let Ix = { label: () => j.intl.string(j.t["32u1Dx"]), value: IA.YG };
var Ip = i(954225);
function If() {
    return (0, Ih.Tx)() !== IA.YG;
}
function IN() {
    return j.intl.string(j.t["T+nevN"]);
}
let I_ = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_JOIN_SETTING, {
    useTitle: IN,
    useSubtitle: () =>
        j.intl.format(j.t.jXKQCu, { helpdeskArticle: tN.A.getArticleURL(U.MVz.ACTIVITY_STATUS_SETTINGS) }),
    useValue: function () {
        let e = (0, Ih.Tx)();
        return !D.pE.useSetting().includes(e);
    },
    setValue: function (e) {
        let t = IA.xk.getState().selectedGuildId,
            i = (0, rJ.CN)();
        e ? i.delete(t) : i.add(t),
            D.pE.updateSetting([...i]),
            G.default.track(U.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: Ip.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
                ingress: nw.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    },
    usePredicate: If,
});
function II() {
    return (0, Ih.Tx)() !== IA.YG;
}
function IC() {
    return j.intl.string(L.default.WhdCGP);
}
let Ib = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_SHARE_SETTING, {
    useTitle: IC,
    useSubtitle: () => j.intl.string(L.default.UQ9RHJ),
    useValue: function () {
        let e = (0, Ih.Tx)();
        return !D.JG.useSetting().includes(e);
    },
    setValue: function (e) {
        let t = IA.xk.getState().selectedGuildId,
            i = (0, rJ.Kk)();
        e ? i.delete(t) : i.add(t),
            D.JG.updateSetting([...i]),
            G.default.track(U.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: Ip.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
                ingress: nw.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    },
    usePredicate: II,
});
var Iy = i(307863),
    Iv = i(428031),
    Ij = i(972737);
function IO() {
    return (0, Iy.e)() ? j.intl.string(j.t.PMsfcH) : j.intl.string(j.t.RAQUSN);
}
function IR() {
    let e = (0, Ih.Tx)(),
        t = (0, Ih.q9)(),
        i = (0, Iy.e)();
    return e === IA.YG
        ? i
            ? j.intl.string(j.t.XXGmuB)
            : j.intl.string(j.t.wbYDfT)
        : t
          ? j.intl.string(j.t.V0ka0Q)
          : i
            ? j.intl.string(j.t.F9WY3f)
            : j.intl.string(j.t.G7c3Xo);
}
function ID() {
    let e = (0, Ih.Tx)(),
        t = D.$s.useSetting().includes(e),
        i = (0, Iv.K)();
    return e === IA.YG ? !i : !t;
}
function IL() {
    let e = (0, _b.uM)();
    return (0, Ih.Tx)() === IA.YG && e;
}
function IP(e, t) {
    G.default.track(U.HAw.GUILD_DEFAULT_DMS_UPDATED, { default_guilds_restricted: e, applied_to_existing_guilds: t });
}
function IG(e) {
    let t = IA.xk.getState().selectedGuildId;
    if (t === IA.YG) {
        var i;
        (i = !e),
            (0, Ij.O)({
                header: j.intl.string(j.t["uUr+GR"]),
                body: j.intl.string(j.t.hjGJBp),
                confirmText: j.intl.string(j.t.gm1Vej),
                cancelText: j.intl.string(j.t.p89ACt),
                confirmButtonColor: oa.$n.Colors.BRAND,
                onConfirm: function () {
                    D.n6.updateSetting(i), IP(i, !1);
                },
                onCancel: function () {
                    D.n6.updateSetting(i), D.$s.updateSetting(i ? ec.A.getGuildIds() : []), IP(i, !0);
                },
            });
    } else {
        let i = (0, rJ.Tb)();
        e ? i.delete(t) : i.add(t),
            D.$s.updateSetting(Array.from(i)),
            G.default.track(U.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: Ip.m.DIRECT_MESSAGES_TOGGLE,
                ingress: nw.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    }
}
let IM = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: IR,
        useValue: ID,
        useDisabled: IL,
        setValue: IG,
    }),
    IU = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: IO,
        useSubtitle: IR,
        useValue: ID,
        useDisabled: IL,
        setValue: IG,
    });
var IV = i(953298);
function Ik(e, t) {
    G.default.track(U.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
}
function Iw() {
    let e = (0, o.SV)("PermissionsMessageRequestsSetting"),
        t = (0, Ih.q9)();
    if (e)
        if (t) return j.intl.string(j.t["982I7+"]);
        else return j.intl.string(j.t["3yHM5i"]);
    return j.intl.string(j.t["3o2ojh"]);
}
let IB = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: Iw,
        useSubtitle: function () {
            let e = (0, o.SV)("PermissionsMessageRequestsSetting"),
                t = (0, Ih.q9)();
            return e
                ? j.intl.format(j.t.BoCjTy, { learnMoreUrl: tN.A.getArticleURL(U.MVz.MESSAGE_REQUESTS) })
                : t
                  ? j.intl.format(j.t.WpnWLc, { helpdeskArticle: tN.A.getArticleURL(U.MVz.MESSAGE_REQUESTS) })
                  : j.intl.format(j.t.wkm9a3, { helpdeskArticle: tN.A.getArticleURL(U.MVz.MESSAGE_REQUESTS) });
        },
        useValue: function () {
            let e = (0, Ih.Tx)(),
                t = (0, Iv.K)(),
                i = D.$s.useSetting().includes(e),
                n = D.YX.useSetting(),
                s = D.Zr.useSetting().includes(e);
            return e === IA.YG ? !t && !n : !i && !s;
        },
        useDisabled: function () {
            let e = (0, Ih.Tx)(),
                t = (0, _b.uM)(),
                i = (0, Iv.K)(),
                n = D.$s.useSetting().includes(e);
            return e === IA.YG ? i || t : n;
        },
        setValue: function (e) {
            let t = IA.xk.getState().selectedGuildId;
            if (!e && (0, IV.w)())
                return void pH.A.showAgeVerificationGetStartedModal({ entryPoint: pK.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === IA.YG) {
                var i;
                (i = !e),
                    (0, Ij.O)({
                        header: j.intl.string(j.t.yAfu1p),
                        body: j.intl.string(j.t.Ry2z74),
                        confirmText: j.intl.string(j.t.gm1Vej),
                        cancelText: j.intl.string(j.t.p89ACt),
                        confirmButtonColor: oa.$n.Colors.BRAND,
                        onConfirm: function () {
                            D.YX.updateSetting(i), Ik(i, !1);
                        },
                        onCancel: function () {
                            D.YX.updateSetting(i), D.Zr.updateSetting(i ? ec.A.getGuildIds() : []), Ik(i, !0);
                        },
                    });
            } else {
                let i = (0, rJ.xo)();
                e ? i.delete(t) : i.add(t),
                    D.Zr.updateSetting(Array.from(i)),
                    G.default.track(U.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: Ip.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: nw.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    });
            }
        },
    }),
    IF = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            let e = (0, o.SV)("GuildSelect"),
                t = [IO(), Iw()],
                i = IC(),
                n = II();
            !e && n && t.push(i);
            let s = IN(),
                l = If();
            return !e && l && t.push(s), t;
        },
        Component: function () {
            let { selectedGuildId: e, setSelectedGuildId: t } = (0, IA.xk)(),
                i = (0, g.bG)([eg.Ay], () => eg.Ay.getFlattenedGuildIds()),
                n = (0, g.bG)([ec.A], () => ec.A.getGuilds()),
                s = i[0];
            S.useEffect(
                () =>
                    IS.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, i) => {
                            let n = IA.xk.getState().selectedGuildId;
                            "" === i && "" !== e && n === IA.YG && null != s
                                ? t(s)
                                : "" === e && n !== IA.YG && t(IA.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [s, t],
            );
            let l = S.useMemo(() => {
                let e = [];
                return (
                    e.push({
                        ...Ix,
                        id: Ix.value,
                        label: Ix.label(),
                        leading: (0, E.jsx)("div", {
                            className: IT.KP,
                            children: (0, E.jsx)(IE.p, {
                                size: "sm",
                                color: "white",
                                "aria-hidden": !0,
                                className: IT.cl,
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
                                leading: (0, E.jsx)(g4.Ay, {
                                    className: IT.cl,
                                    guild: i,
                                    size: g4.Ay.Sizes.SMALLER,
                                    active: !0,
                                }),
                            });
                    }),
                    e
                );
            }, [i, n]);
            return (0, E.jsx)(iX.Z, {
                selectionMode: "single",
                onSelectionChange: function (e) {
                    t(e);
                },
                value: e,
                options: l,
            });
        },
    });
function Iz() {
    let e = _y(),
        t = _I();
    if ((0, Ih.Tx)() === IA.YG) return e ?? t;
}
let IX = (0, a.zZ)(u.X.PERMISSIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Y5GYcX),
        useSubnavLabel: () => j.intl.string(j.t.YUU0RF),
        useInlineNotice: Iz,
        buildLayout: () => [IF, IM, IB],
    }),
    IY = (0, a.zZ)(u.X.PERMISSIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.eYaT7L),
        useInlineNotice: Iz,
        buildLayout: () => [IF, IU, IB, Ib, I_],
    }),
    IH = (0, a.dT)(u.X.CONTENT_AND_SOCIAL_MAIN_TAB, {
        getTitle: () => j.intl.string(j.t["/7xJCF"]),
        buildLayout: () => [_2, IY, Ii, Im],
    }),
    IK = (0, a.dT)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB, {
        initialize: () => {
            Sd.A.fetch();
        },
        getTitle: () => j.intl.string(j.t.YpCiMt),
        buildLayout: () => [_T],
    }),
    IW = (0, a.t_)(u.X.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => j.intl.string(j.t["+o1pDZ"]),
        buildLayout: () => [IH, IK],
    }),
    IZ = (0, a.i4)(u.X.CONTENT_AND_SOCIAL_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["+o1pDZ"]),
        icon: gN.i,
        buildLayout: () => [IW],
    });
var IQ = i(254138);
function Iq() {
    return (
        sa.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" }),
        sr.Bo.get({ url: U.Rsh.USER_HARVEST, oldFormErrors: !0, rejectWithError: !1 })
            .then((e) => {
                sa.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body });
            })
            .catch((e) => {
                sa.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error: e });
            })
    );
}
function IJ(e) {
    return (0, Tl.$I)(e).then(
        (e) => (
            null != e && null != e.body && sa.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body }), e
        ),
    );
}
var I$ = i(157559),
    I0 = i(331887);
function I1() {
    let e = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
        t = (0, g.bG)([I0.A], () => I0.A.harvestType),
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
function I2(e) {
    let { onConfirm: t, ...n } = e;
    (0, K.openModalLazy)(async () => {
        let { default: e } = await i.e("92063").then(i.bind(i, 970018));
        return (i) => (0, E.jsx)(e, { modalProps: i, onConfirm: t });
    }, n);
}
var I3 = i(302827);
let I6 = (0, a.E2)(u.X.DATA_HARVEST_REQUEST_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.dmBSKo)],
        Component: function () {
            let e = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
                { currentHarvestType: t, awaitingInitialRequest: i } = (0, g.cf)([I0.A], () => ({
                    currentHarvestType: I0.A.harvestType,
                    awaitingInitialRequest: I0.A.requestingHarvest,
                })),
                [n, s] = S.useState(!1);
            if (null == e) return null;
            let l =
                    !!(!e.verified || e.isStaff()) ||
                    (null != t && 2592e6 > Date.now() - new Date(t.created_at).getTime()) ||
                    i,
                r = null != t && r4()().diff(r4()(t.created_at), "days") < U.n83,
                a = l && r,
                o = e.isStaff(),
                u = !e.verified;
            return (0, E.jsxs)(_F.h, {
                children: [
                    (0, E.jsx)(_F._, {
                        header: j.intl.string(j.t.XAHCgJ),
                        description: j.intl.format(j.t.P3kNfr, {
                            helpdeskArticle: tN.A.getArticleURL(U.MVz.GDPR_REQUEST_DATA),
                        }),
                    }),
                    a
                        ? (0, E.jsx)(eb.Z, {
                              className: I3.N,
                              children: (0, E.jsx)(es.E, {
                                  variant: "text-md/normal",
                                  children: j.intl.format(j.t.RNDlV9, {
                                      date: r4()(t.created_at).add(U.n83, "days").format("MMMM Do YYYY"),
                                  }),
                              }),
                          })
                        : o
                          ? (0, E.jsx)(eb.Z, {
                                className: I3.N,
                                children: (0, E.jsx)(es.E, {
                                    variant: "text-md/normal",
                                    children: j.intl.string(j.t.ZPQLH2),
                                }),
                            })
                          : (0, E.jsxs)(E.Fragment, {
                                children: [
                                    u
                                        ? (0, E.jsx)(eb.Z, {
                                              className: I3.N,
                                              children: (0, E.jsx)(es.E, {
                                                  variant: "text-md/normal",
                                                  children: j.intl.string(j.t.c1f88z),
                                              }),
                                          })
                                        : null,
                                    (0, E.jsx)("div", {
                                        className: I3.x,
                                        children: (0, E.jsx)(eG.$, {
                                            variant: "primary",
                                            text: j.intl.string(j.t.dmBSKo),
                                            disabled: l,
                                            onClick: function () {
                                                I2({
                                                    onConfirm: (e) => {
                                                        s(!0),
                                                            IJ(e)
                                                                .then(
                                                                    (e) => {
                                                                        null != e && null != e.body
                                                                            ? I$.A.show({
                                                                                  title: j.intl.string(j.t.i2iul5),
                                                                                  body: j.intl.string(j.t["6Nmv4i"]),
                                                                              })
                                                                            : I$.A.show({
                                                                                  title: j.intl.string(j.t.OjbtDm),
                                                                                  body: j.intl.string(j.t["0F5Jyt"]),
                                                                              });
                                                                    },
                                                                    (e) => {
                                                                        let t =
                                                                            e?.message ||
                                                                            e?.body?.message ||
                                                                            j.intl.string(j.t["0F5Jyt"]);
                                                                        I$.A.show({
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
    I4 = (0, a.zZ)(u.X.DATA_REQUEST_CATEGORY, {
        useTitle: () => j.intl.string(j.t.VjDjpb),
        initialize: () => {
            Iq();
        },
        buildLayout: () => [I6],
    });
var I7 = i(290595),
    I5 = i(153488);
let I8 = (0, a.zD)(u.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
        useTitle: () => j.intl.string(j.t.AGDDkH),
        useSubtitle: () =>
            (0, o.ri)("ClipsAllowVoiceRecording") ? j.intl.string(j.t.kyo3dJ) : j.intl.string(j.t["wW9/zQ"]),
        useValue: () => D.Q$.useSetting(),
        setValue: (e) => Nv.eQ({ allowVoiceRecording: e }),
    }),
    I9 = (0, a.Tf)(u.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => j.intl.string(j.t.qfFFos),
        useSubtitle: function () {
            let e = I1();
            if (e.allowed) return j.intl.format(j.t.NRI6vt, { article: tN.A.getArticleURL(U.MVz.GDPR_REQUEST_DATA) });
            if ("staff" === e.reason) return j.intl.string(j.t.hIbRso);
            if ("not_verified" === e.reason)
                return j.intl.format(j.t.rBqJDq, {
                    settingsLink: (e, t) =>
                        (0, E.jsx)(
                            en.D,
                            {
                                tag: "a",
                                onClick: () => (0, eH.openUserSettings)(u.X.ACCOUNT_INFO_EMAIL_SETTING),
                                children: e,
                            },
                            t,
                        ),
                });
            if ("rate_limited" === e.reason) {
                let t = r4()(e.nextAllowed).format("MMMM Do YYYY");
                return j.intl.format(j.t["VLMG1+"], { date: t });
            }
        },
        initialize: () => {
            Iq();
        },
        useDisabled: () => !I1().allowed,
        useLoading: () => (0, g.bG)([I0.A], () => I0.A.requestingHarvest),
        useVariant: () => "secondary",
        useLabel: () => j.intl.string(j.t.dmBSKo),
        onClick: function () {
            return new Promise((e) => {
                let t = !0;
                I2({
                    onConfirm: (i) => {
                        (t = !1),
                            IJ(i)
                                .then(
                                    (e) => {
                                        null != e && null != e.body
                                            ? I$.A.show({
                                                  title: j.intl.string(j.t.i2iul5),
                                                  body: j.intl.string(j.t["6Nmv4i"]),
                                              })
                                            : I$.A.show({
                                                  title: j.intl.string(j.t.OjbtDm),
                                                  body: j.intl.string(j.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || j.intl.string(j.t["0F5Jyt"]);
                                        I$.A.show({ title: j.intl.string(j.t.OjbtDm), body: t });
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
    Ce = (0, a.v_)(u.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => j.intl.string(j.t.D60Gfj),
        useSubtitle: () =>
            (0, o.ri)("DataUsageDisclaimer")
                ? j.intl.format(j.t.dszICC, {
                      onClickDisable: () => (0, eH.openUserSettings)(u.X.ACCOUNT_DISABLE_SETTING),
                      onClickDelete: () => (0, eH.openUserSettings)(u.X.ACCOUNT_DELETE_SETTING),
                  })
                : j.intl.format(j.t.R5N31P, { onClick: () => (0, eH.openUserSettings)(u.X.ACCOUNT_REMOVAL_CATEGORY) }),
    }),
    Ct = (0, a.zD)(u.X.DATA_USAGE_PERSONALIZATION_SETTING, {
        useTitle: () => j.intl.string(j.t.MNKzyg),
        useSubtitle: () => {
            let e = (0, o.ri)("DataUsagePersonalization");
            return j.intl.format(e ? j.t["2SiYln"] : j.t["eQL/Mr"], {
                helpdeskArticle: tN.A.getArticleURL(U.MVz.DATA_USED_FOR_RECOMMENDED),
            });
        },
        useValue: function () {
            return (0, g.bG)([I5.A], () => I5.A.hasConsented(U.YAq.PERSONALIZATION));
        },
        setValue: function (e) {
            e
                ? (0, I7.U)([U.YAq.PERSONALIZATION], []).catch(Ij.i)
                : (0, Ij.O)({
                      header: j.intl.string(j.t["9SNpzv"]),
                      confirmText: j.intl.string(j.t["9g5UGw"]),
                      cancelText: j.intl.string(j.t["+ZLPw9"]),
                      onConfirm: () => {
                          (0, I7.U)([], [U.YAq.PERSONALIZATION]).catch(Ij.i);
                      },
                      body: j.intl.string(j.t.gJvDDh),
                  });
        },
        useDisabled: _b.uM,
    }),
    Ci = (0, a.zD)(u.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => j.intl.string(j.t.CyLYKZ),
        useSubtitle: () => {
            let e = (0, o.ri)("DataUsageQuests3P");
            return j.intl.format(e ? j.t["md5l4/"] : j.t["2QFDU/"], {
                helpdeskArticle: tN.A.getArticleURL(U.MVz.QUESTS_PRIVACY_CONTROLS),
            });
        },
        useValue: function () {
            return !D.vf.useSetting();
        },
        setValue: function (e) {
            D.vf.updateSetting(!e);
        },
        useDisabled: function () {
            let e = D.H1.useSetting(),
                t = (0, _b.uM)();
            return e || t;
        },
        useSearchTerms: () => [j.intl.string(j.t.CyLYKZ)],
    }),
    Cn = (0, a.zD)(u.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => j.intl.string(j.t.sJYh5t),
        useSubtitle: () =>
            (0, o.ri)("DataUsageQuests")
                ? j.intl.string(j.t.w4fvxe)
                : j.intl.format(j.t.cf9mvV, { helpdeskArticle: tN.A.getArticleURL(U.MVz.QUESTS_PRIVACY_CONTROLS) }),
        useValue: function () {
            return !D.H1.useSetting();
        },
        setValue: function (e) {
            D.H1.updateSetting(!e);
        },
        useSearchTerms: () => [j.intl.string(j.t.VkS7Yd)],
        useDisabled: _b.uM,
    }),
    Cs = (0, a.AK)(u.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
        destinationKey: u.X.REGISTERED_GAMES_PANEL,
        useSubtitle: function () {
            let { names: e, totalCount: t } = y(2);
            return j.intl.format(j.t.GaTAYM, { count: t, nameCount: e.length, game1: e[0], game2: e[1] });
        },
        useTrailingDecoration: () => ({ type: h.wF.STACKED_ICONS, useIcons: v }),
        usePredicate: () => (0, g.bG)([m.Ay], () => m.Ay.getGamesSeen(!1).some((e) => !(0, A.n1)(e))) && (0, c.xl)(),
    }),
    Cl = (0, a.gN)(u.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [Cs] }),
    Cr = (0, a.zD)(u.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => j.intl.string(j.t.XuADY2),
        useSubtitle: () => {
            let e = (0, o.ri)("DataUsageStatistics");
            return j.intl.format(e ? j.t.FNqmmX : j.t["igTSG/"], {
                helpdeskArticle: tN.A.getArticleURL(U.MVz.DATA_PRIVACY_CONTROLS),
            });
        },
        useValue: function () {
            return (0, g.bG)([I5.A], () => I5.A.hasConsented(U.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, I7.U)([U.YAq.USAGE_STATISTICS], []).catch(Ij.i)
                : (0, Ij.O)({
                      header: j.intl.string(j.t.OdPCbN),
                      body: j.intl.string(j.t.MGWabA),
                      confirmText: j.intl.string(j.t["D3+rU4"]),
                      cancelText: j.intl.string(j.t.kYpG0u),
                      onConfirm: () => (0, I7.U)([], [U.YAq.USAGE_STATISTICS]).catch(Ij.i),
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t.XuADY2)],
        useDisabled: _b.uM,
    }),
    Ca = (0, a.zZ)(u.X.DATA_USAGE_CATEGORY, {
        useTitle: () => ((0, o.ri)("DataUsageCategory") ? j.intl.string(j.t.QDAriI) : j.intl.string(j.t.bvw42E)),
        useInlineNotice: _y,
        initialize: () => {
            I5.A.fetchedConsents || (0, I7.Q)();
        },
        buildLayout: () =>
            (0, o.SB)("DataUsageCategory") ? [Ce, Cr, Ct, Cn, Ci, I8, I9, Cl] : [Cr, Cn, Ci, Ct, I8, Ce],
    }),
    Co = (0, w.mj)({
        kind: "user",
        name: "2026-06-notify-friends-on-profile-update",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
function Cu(e) {
    return Co.useConfig({ location: e }).enabled;
}
var Cd = i(289489);
let Cc = (0, a.zD)(u.X.NOTIFY_FRIENDS_ON_PROFILE_UPDATE_SETTING, {
    useTitle: () => j.intl.string(Cd.default.F3llsQ),
    useSubtitle: () => j.intl.string(Cd.default["6goWcz"]),
    useValue: D.Sy.useSetting,
    setValue: function (e) {
        D.Sy.updateSetting(e),
            G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: M.Y.ACCOUNT,
                notify_friends_on_profile_update: e,
            });
    },
    usePredicate: () => Cu("NotifyFriendsOnProfileUpdateSetting"),
});
function Cg() {
    let e = D.JG.useSetting();
    return (0, g.yK)([eg.Ay, ec.A], () => {
        let t = new Set(e);
        return eg.Ay.getFlattenedGuildIds().filter((e) => null != ec.A.getGuild(e) && !t.has(e));
    }, [e]);
}
let Cm = {
        type: h.wF.STACKED_ICONS,
        useIcons: function () {
            let e = Cg(),
                t = (0, g.yK)(
                    [ec.A],
                    () =>
                        e
                            .slice(0, 2)
                            .map((e) => ec.A.getGuild(e))
                            .filter((e) => null != e),
                    [e],
                );
            return 0 === t.length
                ? null
                : t.length >= 2
                  ? {
                        frontIcon: { icon: (0, E.jsx)(ed.$, { guild: t[0], size: f.CD }), shape: f.e0.SQUIRCLE },
                        backIcon: { icon: (0, E.jsx)(ed.$, { guild: t[1], size: f.CD }), shape: f.e0.SQUIRCLE },
                    }
                  : { frontIcon: { icon: (0, E.jsx)(ed.$, { guild: t[0], size: f.CD }), shape: f.e0.SQUIRCLE } };
        },
    },
    CA = (0, a.AK)(u.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = Cg();
            if (0 === e.length) return j.intl.format(j.t.QJIJ5p, {});
            let t = ec.A.getGuild(e[0]),
                i = t?.name ?? "",
                n = e.length - 1;
            return 0 === n
                ? j.intl.format(j.t["T+8J4A"], { guildName: i })
                : j.intl.format(j.t["3JyODQ"], { guildName: i, count: n });
        },
        useTrailingDecoration: function () {
            return Cm;
        },
        destinationKey: u.X.ACTIVITY_PRIVACY_PANEL,
    }),
    Ch = (0, a.gN)(u.X.PROFILE_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, B.lX)("ProfilePrivacyRelatedSettings"),
        buildLayout: () => [CA],
    }),
    CE = (0, a.Qx)(u.X.PROFILE_PRIVACY_SETTING, {
        usePredicate: () => (0, B.lX)("ProfilePrivacySetting"),
        useTitle: () => j.intl.string(j.t.Qnf32C),
        useOptions: function () {
            return [
                {
                    name: j.intl.string(j.t.Boxc8R),
                    desc: j.intl.string(j.t["nLj+nc"]),
                    value: H.KP.FRIENDS_AND_ALL_GUILDS,
                },
                {
                    name: j.intl.string(j.t.YOIKBt),
                    desc: j.intl.string(j.t.y0JZ4s),
                    value: H.KP.FRIENDS_AND_SMALL_GUILDS,
                },
                { name: j.intl.string(j.t.u0nlJv), desc: j.intl.string(j.t["4jnKHu"]), value: H.KP.FRIENDS_ONLY },
            ];
        },
        useValue: D.KP.useSetting,
        setValue: function (e) {
            let t = D.KP.getSetting();
            if ((D.KP.updateSetting(e), !(0, B.W1)("ProfilePrivacySetting"))) return;
            let n = (0, W.gS)(t, e);
            null != n &&
                (0, K.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        i.e("5796"),
                        i.e("73961"),
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
    CS = (0, a.zZ)(u.X.PROFILE_PRIVACY_CATEGORY, {
        usePredicate: () => {
            let e = (0, B.lX)("ProfilePrivacyCategory"),
                t = Cu("ProfilePrivacyCategory");
            return e || t;
        },
        useTitle: () => j.intl.string(j.t.ul884f),
        useSubtitle: () =>
            j.intl.format(j.t.N4jSgR, {
                learnMoreUrl: tN.A.getArticleURL("38859942749463-Profile-Privacy-Setting-on-Discord"),
            }),
        buildLayout: () => [CE, Cc, Ch],
    });
var CT = i(814278),
    Cx = i(936388),
    Cp = i(714763);
let Cf = (0, a.zD)(u.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => j.intl.string(j.t["opi/XK"]),
    useSubtitle: () => j.intl.format(j.t["/T+ZlP"], { helpArticle: (0, CT.Lu)() }),
    useValue: function () {
        return (0, g.bG)([Cp.A], () => Cp.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        Cx.A.updatePersistentCodesEnabled(e);
    },
});
var CN = i(787392);
function C_() {
    return (0, g.yK)([CN.A], () => CN.A.getUserIds());
}
var CI = i(803306),
    CC = i(966327),
    Cb = i(516179);
function Cy(e) {
    let { userId: t, count: i } = e,
        { analyticsLocations: n } = (0, nZ.Ay)(),
        s = (0, g.bG)([io.default], () => io.default.getUser(t)),
        l = xa.Ay.getFormattedName(s),
        r = S.useCallback(() => {
            (0, CT.kj)(t);
        }, [t]),
        a = S.useCallback(() => (0, Td.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: n }), [t, n]);
    return (
        S.useEffect(() => {
            (0, CI.wz)(t);
        }, [t]),
        (0, E.jsxs)("div", {
            className: Cb.uW,
            children: [
                null != s && (0, E.jsx)(CC.A, { className: Cb.my, user: s, size: i4._3.SIZE_40 }),
                (0, E.jsxs)("div", {
                    className: Cb.Qq,
                    children: [
                        (0, E.jsx)(en.D, {
                            className: Cb.Xh,
                            onClick: a,
                            children: (0, E.jsx)(es.E, {
                                variant: "text-md/semibold",
                                color: "interactive-text-active",
                                children: l,
                            }),
                        }),
                        (0, E.jsx)(es.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: j.intl.format(j.t["/MBjYF"], { count: i }),
                        }),
                    ],
                }),
                (0, E.jsx)(en.D, { onClick: r, className: Cb.Qz, children: (0, E.jsx)(lq.u, { size: "xs" }) }),
            ],
        })
    );
}
function Cv(e) {
    let { className: t, userId: i, verification: n, index: s } = e,
        l = (0, CT.tC)(n.timestamp),
        r = S.useCallback(() => {
            (0, CT.W0)(i, n.verifiedKey);
        }, [n.verifiedKey, i]);
    return (0, E.jsxs)("div", {
        className: t,
        children: [
            (0, E.jsxs)("div", {
                className: Cb.Qq,
                children: [
                    (0, E.jsx)(es.E, {
                        variant: "text-sm/semibold",
                        color: "interactive-text-active",
                        children: j.intl.format(j.t.N4qBBO, { index: s + 1 }),
                    }),
                    (0, E.jsx)(es.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                ],
            }),
            (0, E.jsx)(en.D, {
                className: Cb.Kk,
                onClick: r,
                children: (0, E.jsx)(gP.P, { size: "md", color: er.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function Cj(e) {
    let { userId: t } = e,
        i = (0, g.yK)([CN.A], () =>
            eZ()(CN.A.getUserVerifiedKeys(t))
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
            (0, E.jsx)(Cy, { userId: t, count: i.length }),
            i.map((e, n) =>
                (0, E.jsxs)(
                    S.Fragment,
                    {
                        children: [
                            (0, E.jsx)(Cv, { className: Cb.nM, userId: t, index: n, verification: e }),
                            n !== i.length - 1 && (0, E.jsx)("div", { className: Cb.yF }),
                        ],
                    },
                    `${n}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var CO = i(577913);
let CR = (0, a.E2)(u.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["5b3FNI"])],
        usePredicate: function () {
            let e = C_();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = C_();
            return (0, E.jsxs)(_F.h, {
                children: [
                    (0, E.jsx)(_F._, {
                        header: j.intl.string(j.t["5b3FNI"]),
                        description: j.intl.format(j.t.jrTSWU, { helpArticle: (0, CT.dc)() }),
                    }),
                    e.map((e) => (0, E.jsx)("div", { className: CO.A, children: (0, E.jsx)(Cj, { userId: e }) }, e)),
                ],
            });
        },
    }),
    CD = (0, a.zZ)(u.X.VOICE_SECURITY_CATEGORY, {
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
                              useText: () => j.intl.format(j.t["/6sFWa"], { helpArticle: (0, CT.aW)() }),
                          },
                [e],
            );
        },
        usePredicate: () => (0, eY.isDesktop)(),
        buildLayout: () => [Cf, CR],
    }),
    CL = (0, a.t_)(u.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => j.intl.string(j.t.OAuOHD),
        buildLayout: () => ((0, o.SB)("DataAndPrivacyPanel") ? [Ca, CS, CD] : [Ca, CS, I4, CD]),
    }),
    CP = (0, a.i4)(u.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.OAuOHD),
        icon: IQ.m,
        buildLayout: () => [CL],
    });
var CG = i(476713);
let CM = (0, a.AK)(u.X.CONNECTED_GAMES_AUTHORIZED_APPS_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.O65dzZ),
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        destinationKey: u.X.AUTHORIZED_APPS_CATEGORY,
    }),
    CU = (0, a.gN)(u.X.CONNECTED_GAMES_RELATED_SETTINGS, { buildLayout: () => [CM] }),
    CV = (0, a.E2)(u.X.CONNECTED_GAMES_UNAVAILABLE, {
        Component: function () {
            let { showLoadingIndicator: e } = _u(!0, !0);
            return e ? (0, E.jsx)(dp.y, {}) : (0, E.jsx)(_g, {});
        },
        useSearchTerms: () => [j.intl.string(j.t["+0U77d"])],
        usePredicate: () => {
            let { showLoadingIndicator: e, slayerSdkApplications: t } = _u(!0, !0);
            return e || 0 === t.length;
        },
    });
function Ck() {
    let { slayerSdkApplications: e, showLoadingIndicator: t } = _u(!0, !0);
    return {
        sortedGames: S.useMemo(() => e.toSorted((e, t) => dD.default.compare(t.id, e.id)), [e]),
        showLoadingIndicator: t,
    };
}
function Cw() {
    let { sortedGames: e } = Ck();
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
let CB = (0, a.zZ)(u.X.SPAM_FILTERS_CATEGORY, { useTitle: () => j.intl.string(j.t.Qwuoic), buildLayout: () => [_1] }),
    CF = (0, a.zZ)(u.X.CONNECTED_GAMES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.RyvebU),
        useSubtitle: function () {
            let { sortedGames: e } = Ck();
            function t(e, t) {
                return (0, E.jsx)(
                    es.E,
                    { tag: "span", variant: "text-sm/normal", color: "text-default", children: e },
                    t,
                );
            }
            return 0 === e.length
                ? j.intl.string(j.t.Amr1IZ)
                : 1 === e.length
                  ? j.intl.format(j.t["60IaC2"], { gameName: e[0].name, gameListHook: t })
                  : 2 === e.length
                    ? j.intl.format(j.t.lthjd7, { game1: e[0].name, game2: e[1].name, gameListHook: t })
                    : j.intl.format(j.t.RAUmQM, {
                          game1: e[0].name,
                          game2: e[1].name,
                          remaining: e.length - 2,
                          gameListHook: t,
                      });
        },
        useSubnavLabel: () => j.intl.string(j.t.YpCiMt),
        useHeaderDecoration: () => ({ type: h.WX.STACKED_ICONS, useIcons: Cw }),
        useSearchTerms: () => [j.intl.string(j.t.YpCiMt)],
        initialize: () => {
            Sd.A.fetch();
        },
        buildLayout: () => [_E, _S, CV, CU],
    }),
    Cz = (0, a.t_)(u.X.MESSAGING_PERMISSIONS_PANEL, {
        useTitle: () => j.intl.string(j.t.Cz07t8),
        buildLayout: () => [_2, CB, IX, It, CF, Im],
    }),
    CX = (0, a.i4)(u.X.MESSAGING_PERMISSIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.Cz07t8),
        icon: CG.l,
        buildLayout: () => [Cz],
    });
var CY = i(782603),
    CH = i(899847),
    CK = i(695515),
    CW = i(936926);
let CZ = (0, a.Hn)(u.X.MOBILE_NOTIFICATION_DELAY, {
        useTitle: () => j.intl.string(j.t["8rHeOr"]),
        useSubtitle: () => j.intl.string(j.t["eJE6+J"]),
        useValue: D.cU.useSetting,
        setValue: D.cU.updateSetting,
        useOptions: () =>
            eW
                .range(1, 11)
                .map((e) => ({
                    id: e.toString(),
                    value: 60 * e,
                    label: j.intl.formatToPlainString(j.t.iXLF9W, { minutes: e }),
                })),
    }),
    CQ = (0, a.zD)(u.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => j.intl.string(j.t["btbS+Z"]),
        useSubtitle: () =>
            j.intl.format(j.t.Q5crhR, { onClick: () => (0, eH.openUserSettings)(u.X.TTS_PLAYBACK_RATE) }),
        useValue: D.on.useSetting,
        setValue: D.on.updateSetting,
    }),
    Cq = (0, a.Qx)(u.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.JZxxGx),
        useSubtitle: () => j.intl.string(j.t.HDLtJl),
        useValue: () => (0, g.bG)([uU.A], () => uU.A.getTTSType()),
        setValue: (e) => uF.default.setTTSType(e),
        useOptions: function () {
            return [
                { name: j.intl.string(j.t.B1AGeJ), value: U.aVn.ALL_CHANNELS },
                { name: j.intl.string(j.t.uzZg9e), value: U.aVn.SELECTED_CHANNEL },
                { name: j.intl.string(j.t.DYO5Oi), value: U.aVn.NEVER },
            ];
        },
        usePredicate: () => nu.$j,
    }),
    CJ = u.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    C$ = (0, a.bd)(CJ, {
        useTitle: (e) => (e ? j.intl.string(j.t.RyimDk) : j.intl.string(j.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return sC(CJ, {
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
        buildLayout: () => [CZ, CQ, Cq],
    }),
    C0 = (0, a.zZ)(u.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => j.intl.string(j.t["31DySj"]),
        buildLayout: () => [C$],
    }),
    C1 = (0, a.zD)(u.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => j.intl.string(j.t.VH8AIJ),
        useSubtitle: () => j.intl.string(j.t["9K4qwX"]),
        useValue: function () {
            return (0, g.bG)([uU.A], () => !uU.A.getDisableUnreadBadge());
        },
        setValue: (e) => uF.default.setDisableUnreadBadge(!e),
    }),
    C2 = (0, a.zZ)(u.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.l6w3Vj),
        buildLayout: () => [C1],
    });
var C3 = i(840559),
    C6 = i(997187),
    C4 = i(723923);
let C7 = C4.px.map((e) =>
        (0, a.zD)(`${u.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                (function (e) {
                    let { categories: t } = (0, g.cf)([C6.A], () => C6.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, C3.CA)(e.category, t),
        }),
    ),
    C5 = (0, a.Tf)(u.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => j.intl.string(j.t.Ra9Pwk),
        useSubtitle: () => j.intl.string(j.t.iYjQ8X),
        useLabel: () => j.intl.string(j.t.KT1pBA),
        useDisabled: function () {
            let { categories: e } = (0, g.cf)([C6.A], () => C6.A.getEmailSettings());
            return C4.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, C3.NI)(),
        useVariant: () => "critical-secondary",
    }),
    C8 = (0, a.zZ)(u.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => j.intl.string(j.t["w/qqKK"]),
        initialize: function () {
            let { initialized: e } = C6.A.getEmailSettings();
            e || (0, C3.cR)();
        },
        buildLayout: () => [...C7, C5],
    }),
    C9 = (0, a.zD)(u.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t["/0WCll"]),
        useSubtitle: () => j.intl.string(j.t.wF9ih3),
        useValue: function () {
            return (0, g.bG)([uU.A], () => uU.A.getDesktopType()) !== U.nRU.NEVER;
        },
        setValue: (e) => uF.default.setDesktopType(e ? U.nRU.ALL : U.nRU.NEVER),
    });
var be = i(832712),
    bt = i(543465),
    bi = i(790782);
let bn = (0, a.zD)(u.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => j.intl.string(j.t["k6m/si"]),
    useSubtitle: () => j.intl.string(j.t.LGynPs),
    useValue: () => (0, g.bG)([bt.Ay], () => bt.Ay.useNewNotifications),
    setValue: function (e) {
        be.A.setAccountFlag(M.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (EC.w.set("turnedOffNewNotifications", !0),
                G.default.track(U.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: ec.A.getGuildsArray().filter(
                        (e) => bt.Ay.resolveGuildUnreadSetting(e) === bi.e.ONLY_MENTIONS,
                    ).length,
                }));
    },
    usePredicate: () =>
        (0, g.bG)(
            [io.default, bt.Ay],
            () =>
                io.default.getCurrentUser()?.isStaff() ||
                io.default.getCurrentUser()?.isStaffPersonal() ||
                bt.Ay.useNewNotifications,
        ),
});
var bs = i(534654);
let bl = (0, a.zD)(u.X.SCREEN_DOWNTIME_REMINDER, {
        useTitle: () => j.intl.string(j.t.z9h8Ym),
        useSubtitle: () => j.intl.string(j.t.TummoQ),
        useValue: () => (0, g.bG)([uU.A], () => uU.A.screenDowntimeReminder),
        setValue: (e) => uF.default.setScreenDowntimeReminder(e),
        usePredicate: function () {
            let e = (0, CW.Vh)({ location: "ScreenDowntimeReminderSetting" }),
                t = (0, bs.A)(),
                i = (0, Nn.Du)();
            return e && t && i;
        },
    }),
    br = (0, a.zD)(u.X.SCREEN_DOWNTIME_SCHEDULE, {
        useTitle: () => j.intl.string(j.t.onrAy7),
        useSubtitle: () => j.intl.string(j.t["/071J7"]),
        useValue: D.gY.useSetting,
        setValue: (e) => D.gY.updateSetting(e),
        usePredicate: function () {
            let e = (0, CW.Vh)({ location: "ScreenDowntimeScheduleSetting" }),
                t = (0, bs.A)(),
                i = (0, Nn.Du)();
            return e && t && i;
        },
    });
var ba = i(70730);
let bo = (0, a.zD)(u.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.NjOMvh),
        useValue: D.oz.useSetting,
        setValue: function (e) {
            D.oz.updateSetting(e),
                G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: M.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                });
        },
        useSearchTerms: () => [j.intl.string(j.t.hi4dSk)],
        usePredicate: () => {
            let { enabled: e } = ba.u.getConfig({ location: "FriendAnniversaryNotifications" });
            return e;
        },
    }),
    bu = (0, w.mj)({
        kind: "user",
        name: "2026-03-friend-is-online-v3",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    bd = (0, a.zD)(u.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.sQQgFj),
        useValue: D.NR.useSetting,
        setValue: function (e) {
            D.NR.updateSetting(e),
                G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: M.Y.ACCOUNT,
                    friend_online_notifications: e,
                });
        },
        usePredicate: () => bu.useConfig({ location: "FriendOnlineNotifications" }).showSettingsToggle,
    }),
    bc = (0, a.zD)(u.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.FSNIvs),
        useValue: D.Yh.useSetting,
        setValue: function (e) {
            D.Yh.updateSetting(e),
                G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: M.Y.ACCOUNT,
                    go_live_notifications: e,
                });
        },
    }),
    bg = (0, w.mj)({
        kind: "user",
        name: "2026-01-profile-updates-notification",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 0: { showSettingsToggle: !1 }, 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    bm = (0, a.zD)(u.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.xBLMhQ),
        useValue: D.T3.useSetting,
        setValue: function (e) {
            D.T3.updateSetting(e),
                G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: M.Y.ACCOUNT,
                    profile_updates_notifications: e,
                });
        },
        usePredicate: () => bg.useConfig({ location: "user_settings.ProfileUpdatesNotifications" }).showSettingsToggle,
    });
var bA = i(815807);
let bh = (0, a.Hn)(u.X.REACTION_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: j.intl.string(j.t["9x/RtT"]), value: H.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: j.intl.string(j.t.fJAbQd), value: H.Tz.ONLY_DMS },
            { id: "disabled", label: j.intl.string(j.t["xu+UDU"]), value: H.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: D.Zp.useSetting,
        setValue: (e) => (0, bA.n4)(e, D.Zp.getSetting()),
    }),
    bE = (0, a.zD)(u.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t["k51K1+"]),
        useValue: D.Qr.useSetting,
        setValue: function (e) {
            D.Qr.updateSetting(e),
                G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: M.Y.ACCOUNT,
                    server_trending_notifications: e,
                });
        },
        usePredicate: () => !1,
    }),
    bS = (0, w.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    bT = (0, a.zD)(u.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.G8NPz6),
        useValue: D.zS.useSetting,
        setValue: function (e) {
            D.zS.updateSetting(e),
                G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: M.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                });
        },
        usePredicate: () => bS.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    bx = (0, a.FW)(u.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.FEVRDV),
        buildLayout: () => [bc, bo, bd, bE, bT, bm, bh],
    }),
    bp = (0, a.zD)(u.X.TASK_BAR_FLASHING, {
        useTitle: () => j.intl.string(j.t.xSmFQG),
        useSubtitle: () => j.intl.string(j.t.bd4j4x),
        useValue: () => (0, g.bG)([uU.A], () => uU.A.taskbarFlash),
        setValue: (e) => uF.default.setTaskbarFlash(e),
        usePredicate: () => (0, c.uF)(),
    }),
    bf = (0, a.zZ)(u.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => j.intl.string(j.t["/dp6yY"]),
        buildLayout: () => [C9, bp, bx, bn, br, bl],
    });
var bN = i(965957),
    b_ = i(312671),
    bI = i(235079);
let bC = (0, a.zD)(u.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = uV.A.useHolidaySoundpack();
        return null == e ? "" : j.intl.format(j.t["E/OyBr"], { soundpack: j.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, g.bG)([b_.A], () => b_.A.getSoundpack()),
            t = uV.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = uV.A.getHolidaySoundpack();
        tz()(null != t, "predicate should fail if no soundpack is available"), (0, bN.p)(e ? t : bI.i.CLASSIC);
    },
    usePredicate: uV.A.useIsEligible,
});
var bb = i(970931);
let by = {
        useTitle: () => j.intl.string(j.t.jD1qzM),
        sound: "message1",
        useDisabled: bb.kB,
        useDisabledMessage: () => ((0, bb.kB)() ? j.intl.string(j.t.cIRG0s) : void 0),
    },
    bv = { useTitle: () => j.intl.string(j.t.XBrJT6), sound: "call_ringing" },
    bj = (0, a.zD)(u.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.TzjwV9),
        useSubtitle: () => j.intl.format(j.t.OOiGCM, { onClick: () => uY("message3") }),
        useValue: () =>
            (0, g.bG)([uU.A], () => uU.A.getNotifyMessagesInSelectedChannel() && !uU.A.getDisableAllSounds()),
        setValue: (e) => uF.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, g.bG)([uU.A], () => uU.A.getDisableAllSounds()),
    }),
    bO = (0, a.zD)(u.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => j.intl.string(j.t["2ZhCOd"]),
        useSubtitle: () => j.intl.string(j.t.EAKdPr),
        useValue: () => (0, g.bG)([uU.A], () => uU.A.getDisableAllSounds()),
        setValue: (e) => uF.default.toggleDisableAllSounds(e),
    }),
    bR = (0, a.D1)(u.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                uX();
            };
        },
        buildLayout: () => [uH(by), bj, uH(bv), bO],
    }),
    bD = (0, a.AK)(u.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t["MMy+lm"]),
        useSearchTerms: () => [j.intl.string(j.t["MMy+lm"])],
        destinationKey: u.X.SOUNDS_CATEGORY,
    }),
    bL = (0, a.gN)(u.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [bD] }),
    bP = (0, a.zZ)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.LweOYy),
        buildLayout: () => [bC, bR, bL],
    }),
    bG = (0, a.t_)(u.X.NOTIFICATIONS_PANEL, {
        useTitle: () => j.intl.string(j.t.HcoRu0),
        initialize: () => {
            !(0, CW.Eq)({ location: "NotificationsPanel" }) ||
                null != CK.A.getAgeGroup() ||
                CK.A.isLoading() ||
                (CK.A.canRefetch() && CH.Ay.initialPageLoad());
        },
        buildLayout: () => [bf, bP, C2, C8, C0],
    }),
    bM = (0, a.i4)(u.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.HcoRu0),
        icon: CY.X,
        buildLayout: () => [bG],
    }),
    bU = (0, a.WI)(u.X.USER_SECTION, {
        useTitle: () => j.intl.string(j.t.ShSTDe),
        hideTitle: !0,
        buildLayout: () => {
            let e = (0, o.Bv)("UserSection");
            return [Np, ...(e ? [] : [IZ]), CP, ...(e ? [CX] : []), ...(e ? [] : [NI]), ...(e ? [] : [_a]), bM, _n];
        },
    });
var bV = i(387758),
    bk = i(271866),
    bw = i(147964),
    bB = i(868511);
let bF = (0, a.zD)(u.X.APPLICATION_TEST_MODE, {
        useTitle: () => j.intl.string(j.t.erOqlh),
        useSubtitle: () => j.intl.string(j.t["52hMnD"]),
        usePredicate: D.Q_.useSetting,
        useValue: () => (0, g.bG)([bw.A], () => null != bw.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, K.openModal)((e) => (0, E.jsx)(bB.A, { ...e })) : bk.cL();
        },
    }),
    bz = (0, a.zD)(u.X.DEVELOPER_MODE, {
        useTitle: () => j.intl.string(j.t.ObIb1Q),
        useSubtitle: () => j.intl.format(j.t["CY6q/Q"], { apiDocsUrl: U.X7G.API_DOCS }),
        useValue: D.Q_.useSetting,
        setValue: D.Q_.updateSetting,
        usePredicate: () => cK.p5,
    }),
    bX = (0, a.zZ)(u.X.DEVELOPER_CATEGORY, { buildLayout: () => [bz, bF] }),
    bY = (0, a.t_)(u.X.DEVELOPER_PANEL, { useTitle: () => j.intl.string(j.t["0BRxRp"]), buildLayout: () => [bX] }),
    bH = (0, a.i4)(u.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: bV.G,
        useTitle: () => j.intl.string(j.t["0BRxRp"]),
        buildLayout: () => [bY],
    });
var bK = i(70688),
    bW = i(830215);
let bZ = (0, a.i4)(u.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => j.intl.string(j.t["2jxGer"]),
        icon: bK.o,
        onClick: () => {
            (0, sg.A)({
                title: j.intl.string(j.t["2jxGer"]),
                subtitle: j.intl.string(j.t.SUnWBB),
                confirmText: j.intl.string(j.t["2jxGer"]),
                onConfirm: () => {
                    bW.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    bQ = (0, a.WI)(u.X.UTILITY_SECTION, {
        useTitle: () => j.intl.string(j.t["2kOEFe"]),
        hideTitle: !0,
        buildLayout: () => [bH, bZ],
    }),
    bq = (0, a.Hr)({
        buildLayout: function () {
            return [pP, bU, h1, dE, (0, o.Bv)("UserSettingsRoot_buildLayout") ? Ts : i1, Su, bQ];
        },
        analyticsKey: "user_settings",
    });
