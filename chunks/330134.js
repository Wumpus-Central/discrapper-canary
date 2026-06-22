i.d(t, { D: () => b2 });
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
    L = i(395277);
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
    }),
    z = (e) => {
        let t = (0, B.lX)(e),
            i = F.useConfig({ location: e });
        return t || i.copyChanges;
    },
    X = (0, a.AK)(u.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
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
        let t,
            n = D._Z.getSetting();
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
            let { default: e } = await Promise.all([i.e("92164"), i.e("36281"), i.e("62041"), i.e("41996")]).then(
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
var eh = i(842449);
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
            (0, S.useEffect)(() => {
                u(a);
            }, [a]);
            let d = async (e) => {
                    u(e);
                    try {
                        await D.Pw.updateSetting(e);
                    } catch (e) {
                        u(a);
                    }
                },
                c = 0 !== o.length,
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
                        onClear: () => {
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
var eT = i(366189);
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
    ey = i(208963);
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
    e7 = i(389128);
let e5 = (e) => {
    e.preventDefault(), e.stopPropagation();
};
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
                r = !(0, tv.supportsLegacy)(),
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
    im = i(9025);
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
    iL = i(150717),
    iP = i(653307);
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
                                                      i.e("56600"),
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
var iB = i(424994);
let iF = (0, a.zZ)(u.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [iw, ip],
    useTitle: () => j.intl.string(j.t.jCOdvx),
    useSubtitle: () => j.intl.format(j.t.KPA3m9, { igdbLink: iB.s8 }),
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
var iW = i(564206);
let iZ = (0, a.E2)(u.X.REGISTERED_GAMES_ADD_GAME_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.GTCx0p)],
    Component: () => {
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
    ni = i(382677);
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
    nq = i(864386);
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
    }),
    n$ = (e) => `${e.toFixed(0)}px`,
    n0 = (0, a.sN)(u.X.APPEARANCE_FONT_SCALING, {
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
let n8 = (e) => `${e.toFixed(0)}px`,
    n9 = (0, a.sN)(u.X.APPEARANCE_MESSAGE_GROUP_SPACING, {
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
        onValueRender: (e) => `${e.toFixed(0)}%`,
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
        useOptions: () => [
            { name: j.intl.string(j.t.k86Soy), desc: j.intl.string(j.t.bSGTTZ), value: i7.IG.FLEXIBLE },
            { name: j.intl.string(j.t.bjwSOn), desc: j.intl.string(j.t.We36HX), value: i7.IG.CONDENSED },
            { name: j.intl.string(j.t.FDIKss), desc: j.intl.string(j.t["rclZL/"]), value: i7.IG.HIDDEN },
        ],
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
    li = i(335993);
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
    lM = i(412848);
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
    l3 = i(394459),
    l6 = i(364094);
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
    ru = i(746642);
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
var rN = i(581133);
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
var rk = i(117695);
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
    r8 = i(523896);
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
var ae = i(885959);
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
    as = i(739347);
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
        onChange: (e) => {
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
                        onClick: () => {
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
        onClick: () => t(1),
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
let ax = () =>
    i
        .e("4660")
        .then(i.t.bind(i, 662336, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
function ap(e) {
    let { onChangePage: t, setShowEnableAnimation: i } = e,
        n = (0, g.cf)([rH.A], () => rH.A.getState()),
        [s, l] = S.useState({ x: 0, y: 0 }),
        r = (0, ai.A)(),
        a = (e, t) => {
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
            1 === t && h && (0, rJ.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? n.shakeIntensity });
        },
        o = (e) => {
            l({ x: e.clientX, y: e.clientY });
        };
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
let af = (e) => (0 === e ? rZ.f.LEFT : rZ.f.RIGHT),
    aN = (0, a.E2)(u.X.POGGERMODE_SETTING, {
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
                            children: ((e, t, i) => {
                                let n = (e) => () => {
                                    t(e);
                                };
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
var aI = i(736170);
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
    aO = i(145339);
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
var aP = i(354594);
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
                    onSelectBackgroundOption: (i) => {
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
    oe = i(886964);
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
    oq = i(801102),
    oJ = i(160671);
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
                    let { default: e } = await Promise.all([i.e("31910"), i.e("10919")]).then(i.bind(i, 556506));
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
var us = i(371060);
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
    u_ = i(902460);
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
                                        subtextHook: (e) =>
                                            (0, E.jsx)(es.E, {
                                                variant: "text-xs/medium",
                                                color: "text-default",
                                                tag: "span",
                                                children: e,
                                            }),
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
var uv = i(384863);
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
    ds = i(593290);
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
    dx = i(546605),
    dp = i(423764),
    df = i(289873),
    dN = i(835245),
    d_ = i(465323),
    dI = i(37766),
    dC = i(194261),
    db = i(391048),
    dy = i(753390),
    dv = i(99696),
    dj = i(202613),
    dO = i(615405),
    dR = i(580630),
    dD = i(83617),
    dL = i(935208),
    dP = i(607399),
    dG = i(150934),
    dM = i(256006),
    dU = i(198970),
    dV = i(71532);
let dk = /[^0-9/]/g,
    dw = /[^0-9]/g;
class dB extends S.PureComponent {
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
                ((n = (i = e.replace(dk, "").split("/"))[0]),
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
            ? (u = u.replace(dw, ""))
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
var dF = i(832208),
    dz = i(536439);
let dX = [
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
                        getClassNameForLayout: () => dz.ep,
                        renderInput: (e) => (0, E.jsx)(dB, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    dY = function (e) {
        let { onCardInfoChange: t, className: i, expirationDate: n, error: s } = e,
            [l, r] = S.useState(!1),
            [a, o] = S.useState(null),
            [u, d] = S.useState(n);
        return (
            S.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, E.jsx)(dF.A, {
                className: i,
                form: dX,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: s,
                onFieldChange: function (e) {
                    l || "" === e || r(!0),
                        (l && "" === e) || !(0, dV.So)(e) ? o(j.intl.string(j.t["9/zZdl"])) : o(null),
                        d(e);
                },
            })
        );
    };
var dH = i(219887),
    dK = i(276589);
let dW = "isDefault";
class dZ extends S.PureComponent {
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
            expiresMonth: t instanceof dj.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof dj.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: i,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        sa.h.wait(() => {
            (0, dy.ey)(), (0, dy.tc)();
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
                      className: dK.zc,
                      children: (0, E.jsx)(Q.w, { type: "critical", children: t.message }),
                  })
                : null
            : (0, E.jsx)("div", {
                  className: dK.zc,
                  children: (0, E.jsx)(Q.w, { type: "critical", children: e.message }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: i } = this.props,
            n = (0, dM.g)(i);
        return (0, E.jsxs)("div", {
            className: dK.yV,
            children: [
                (0, E.jsx)(es.E, {
                    className: dK.bV,
                    variant: "text-sm/normal",
                    children: j.intl.string(j.t["50Auo2"]),
                }),
                (0, E.jsx)(dU.Ay, {
                    ...e,
                    mode: dU.Ay.Modes.EDIT,
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
            className: dK.yV,
            children: [
                (0, E.jsx)(es.E, { className: dK.bV, variant: "text-sm/normal", children: j.intl.string(j.t.Fo2YP7) }),
                (0, E.jsx)(dY, {
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
            className: dK.AU,
            children: (0, E.jsxs)(q.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, E.jsx)(ou.e, {
                        children: (0, E.jsxs)("div", {
                            className: dK.lH,
                            children: [
                                i
                                    ? (0, E.jsx)(tr.m, {
                                          text: j.intl.string(j.t["v6/z28"]),
                                          children: (0, E.jsx)("div", { "aria-hidden": !0, className: dK.dm }),
                                      })
                                    : null,
                                (0, E.jsx)(eG.$, {
                                    type: "button",
                                    disabled: i || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: dP.Fr ? "sm" : "md",
                                    text: dP.Fr ? j.intl.string(j.t.oyYWHE) : j.intl.string(j.t.yk5qfb),
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
                                size: dP.Fr ? "sm" : "md",
                                text: j.intl.string(j.t["ETE/oC"]),
                            }),
                            (0, E.jsx)(eG.$, {
                                loading: e,
                                disabled: !n || t || !s,
                                type: "submit",
                                variant: "active",
                                size: dP.Fr ? "sm" : "md",
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
            r = e instanceof dj.SJ;
        return (0, E.jsx)(eb.Z, {
            editable: !0,
            className: e6()(dK.Nr, n),
            children: (0, E.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, E.jsxs)("div", {
                        className: dK.__invalid_paymentSection,
                        children: [
                            (0, E.jsx)(dH.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: s,
                                locale: i,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, E.jsx)("div", { className: dK.Um, children: j.intl.string(j.t["3R0U0b"]) })
                                : null,
                            (0, E.jsx)("div", {
                                className: dK.Sv,
                                children: r
                                    ? j.intl.format(j.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : j.intl.string(j.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, E.jsx)("div", {
                        className: dK.D5,
                        children: (0, E.jsx)(dG.S, {
                            value: dW,
                            checked: l,
                            onChange: (e) => this.handleFieldChange(e, dW),
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
let dQ = g.Ay.connectStores([dO.A], () => ({ updateError: dO.A.editSourceError, removeError: dO.A.removeSourceError }))(
    dZ,
);
var dq = i(776409),
    dJ = i(447774),
    d$ = i(95322);
function d0() {
    (0, dv.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page", loadId: (0, dN.A)() });
}
class d1 extends S.PureComponent {
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
            ? (0, E.jsx)(dQ, {
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
                      n ? null : (0, E.jsx)(eM.c, { className: d$.__invalid_sourceDivider }),
                      (0, E.jsxs)("div", {
                          className: d$.Yb,
                          children: [
                              (0, E.jsx)(dH.A, {
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
let d2 = S.memo(function (e) {
    let { paymentSource: t, hideDivider: i, isForSubscription: n, locale: s, onRedeemClick: l } = e,
        [r, a] = S.useState(null),
        o = (0, g.bG)([io.default], () => io.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, g.bG)([dO.A], () => dO.A.ipCountryCode),
        d = S.useMemo(() => (0, d_.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        S.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : dy.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, E.jsxs)(E.Fragment, {
            children: [
                i ? null : (0, E.jsx)(eM.c, { className: d$.__invalid_sourceDivider }),
                (0, E.jsxs)("div", {
                    className: d$.Yb,
                    children: [
                        void 0 !== t
                            ? (0, E.jsx)(dH.A, {
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
                                      (0, E.jsx)(dI._, { size: "lg" }),
                                      (0, E.jsx)(es.E, {
                                          variant: "text-sm/medium",
                                          className: dJ.Wi,
                                          children: j.intl.string(dq.default["/FQWfA"]),
                                      }),
                                  ],
                              }),
                        (0, E.jsxs)("div", {
                            className: d$.zy,
                            children: [
                                (0, E.jsx)("div", {
                                    className: d$.Tq,
                                    children:
                                        null == r
                                            ? (0, E.jsx)(df.y, { type: df.y.Type.SPINNING_CIRCLE })
                                            : (0, E.jsx)(es.E, {
                                                  variant: "text-sm/medium",
                                                  children: (function () {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          i = t ?? d,
                                                          n = String(i).toUpperCase(),
                                                          s = (0, dR.$g)(e ?? 0, i, {
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
                                    text: j.intl.string(dq.default.iBFPMf),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class d3 extends S.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            await dy.Gr(e), this.setState({ editingPayment: e });
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            await dy.JQ(e), this.setState({ editingPayment: null });
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                await dy.Ps(e, t), this.setState({ editingPayment: null });
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, dD.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, K.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 362111));
                return (t) => (0, E.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, db.ET)();
                },
                onCloseRequest: U.tEg,
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, E.jsxs)("div", {
            className: d$.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, E.jsxs)("div", {
                          className: d$.z8,
                          children: [
                              (0, E.jsx)(es.E, { variant: "text-sm/normal", children: j.intl.string(j.t.aRHpAB) }),
                              (0, E.jsx)(es.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: d$.Sv,
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
                .sort((e, t) => (e.id === i ? -1 : t.id === i ? 1 : dL.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof dj.LQ)),
            c = u.filter((e) => e instanceof dj.LQ),
            g = this.state.editingPayment,
            m = d.findIndex((e) => e.id === g),
            A = d.map((e, t) =>
                (0, E.jsx)(
                    d1,
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
                              d2,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || m === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: s,
                                  onRedeemClick: d0,
                              },
                              e.id,
                          ),
                      )
                    : (0, E.jsx)(d2, {
                          hideDivider: 0 === d.length || m === d.length - 1,
                          isForSubscription: !1,
                          locale: s,
                          onRedeemClick: d0,
                      })),
            (0, E.jsxs)(E.Fragment, {
                children: [
                    t
                        ? (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsxs)(eP.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, E.jsx)(dC.X, { size: "sm", className: d$.hz }),
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
var d6 = i(459357),
    d4 = i(295405),
    d7 = i(166403),
    d5 = i(773669),
    d8 = i(589764);
function d9() {
    let e = (0, dx.vg)("PaymentMethodsHeader"),
        t = (0, g.bG)([io.default], () => io.default.getCurrentUser()?.storeCountry);
    return e && t?.country != null ? { country: t.country, countryName: (0, dp.Gw)(t.country) } : null;
}
let ce = (0, a.E2)(u.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                i = (0, g.bG)([dO.A], () => dO.A.isSyncing),
                n = (0, g.bG)([d4.A], () => d4.A.paymentSources),
                s = (0, g.bG)([d4.A], () => d4.A.defaultPaymentSourceId),
                l = (0, g.bG)([d5.default], () => d5.default.locale),
                r = (0, g.bG)([d7.A], () => d7.A.getPremiumTypeSubscription()),
                a = (0, g.bG)([dO.A], () => dO.A.isRemovingPaymentSource),
                o = (0, g.bG)([dO.A], () => dO.A.isUpdatingPaymentSource),
                { enabled: u } = (0, d6.c)({ location: "UserSettingsBilling" });
            return (S.useEffect(() => {
                dy.$o(), dy.hP();
            }, []),
            i && 0 === Object.keys(n).length)
                ? (0, E.jsx)("div", { className: d8.o, children: (0, E.jsx)(df.y, {}) })
                : (0, E.jsx)(d3, {
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
    ct = (0, a.zZ)(u.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.W26xGQ),
        useSubtitle: () => {
            let e = d9();
            return null != e ? j.intl.format(j.t.e2t1G5, { country: e.countryName }) : j.intl.string(j.t.h6V3uK);
        },
        useSubtitleDecoration: function () {
            return null == d9()
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
        buildLayout: () => [ce],
    });
var ci = i(817820),
    cn = i(545075);
let cs = (0, a.E2)(u.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            let e = (0, g.bG)([d5.default], () => d5.default.locale);
            return (0, E.jsxs)(E.Fragment, { children: [(0, E.jsx)(cn.kb, {}), (0, E.jsx)(ci.A, { locale: e })] });
        },
        useSearchTerms: () => [j.intl.string(j.t.obLrcK)],
    }),
    cl = (0, a.zZ)(u.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => j.intl.string(j.t.obLrcK),
        buildLayout: () => [cs],
    }),
    cr = (0, a.t_)(u.X.BILLING_PANEL, {
        useTitle: () => j.intl.string(j.t.oeUm2s),
        buildLayout: () => [ct, cl],
        useObscuredNotice: dT.L,
    }),
    ca = (0, a.i4)(u.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.oeUm2s),
        icon: dS.B,
        buildLayout: () => [cr],
    });
var co = i(597770),
    cu = i(962644),
    cd = i(35587),
    cc = i(86379);
let cg = (0, a.E2)(u.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: cn.uK,
        usePredicate: () => (0, cc.Hp)(),
        useSearchTerms: () => [j.intl.string(j.t.vwMEHS)],
    }),
    cm = (0, a.zZ)(u.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [cg] });
var cA = i(532446),
    ch = i(869038),
    cE = i(499454),
    cS = i(45938);
class cT extends S.Component {
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
                    await (0, dv.Qp)(i),
                        (0, dv.HF)({
                            initialCode: i,
                            withRedemptionSuccessModal: !0,
                            source: "user_settings_gift_code_redemption",
                            loadId: (0, dN.A)(),
                        }),
                        this.setState({ codeInput: "" });
                    return;
                } catch {}
            let e = (0, cS.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let n = await ch.A.resolveGiftCode(e);
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
                (0, cE.h)({ processedCode: e }),
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
                children: (0, E.jsxs)(cA.M, {
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
function cx(e) {
    let { redesign: t = !1 } = e,
        { enabled: i } = (0, d6.c)({ location: "UserSettingsBilling" }),
        n = S.useContext(G.AnalyticsContext),
        s = (0, g.bG)([eB.A], () => eB.A.enabled);
    return (0, E.jsx)(cT, { analyticsContext: n, obscureInput: s, acceptGiftCardRedemption: i, redesign: t });
}
let cp = (0, a.E2)(u.X.GIFT_CODE_REDEMPTION_SETTING, {
    Component: cx,
    usePredicate: () => !(0, cc.Hp)(),
    useSearchTerms: () => [j.intl.string(j.t["jcSP+g"]), j.intl.string(j.t["il+VCo"])],
});
var cf = i(725570),
    cN = i(707554),
    c_ = i(736653),
    cI = i(46054);
let cC = r4().duration(30, "days");
var cb = i(264779),
    cy = i(416052),
    cv = i(961302);
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
          ? (0, E.jsx)(df.y, { className: cv.Lq })
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
    cG = i(503787);
let cM = (e) => {
        let { children: t, className: i, splashArtURL: n } = e;
        return (0, E.jsxs)(rn.A, {
            className: e6()(cG.wx, i),
            align: rn.A.Align.CENTER,
            children: [
                (0, E.jsx)("div", { className: cG.Bn, style: null != n ? { backgroundImage: `url(${n})` } : void 0 }),
                t,
            ],
        });
    },
    cU = (e) => {
        let { children: t, className: i } = e;
        return (0, E.jsx)("div", { className: e6()(cG.rf, i), children: t });
    };
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
    cZ = i(86629);
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
        ch.A.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: i } = this.props;
        (0, cS.AK)(t, i),
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
                    value: (0, cS.Zq)(t.code),
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
            await ch.A.createGiftCode(t, i, n),
            this.setState({ isCreating: !1, isOpen: !0 });
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: i } = this.props,
            n = !this.state.isOpen;
        (null == i || null == this._loadedAt || i < this._loadedAt) && n && ch.A.fetchUserGiftCodesForSKU(e, t),
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
                              ? (0, E.jsx)(df.y, { className: cZ.u1 })
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
var c$ = i(928661);
function c0(e) {
    let { redesign: t = !1 } = e,
        i = (0, g.yK)([cL.A], () => cL.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null != t;
        }),
        n = (0, g.bG)([io.default], () => uT.Ay.isPremiumExactly(io.default.getCurrentUser(), sq.PremiumTypes.TIER_2)),
        s = (0, g.bG)([io.default], () => !uT.Ay.isPremium(io.default.getCurrentUser())),
        {
            activeOutboundPromotions: l,
            claimedEndedOutboundPromotions: r,
            claimedOutboundPromotionCodeMap: a,
        } = (0, cd.y7)(),
        o = i.find((e) => e.giftCodeBatchId === sq.FB && !e.consumed),
        u = i.filter((e) => e.giftCodeBatchId === sq.Bu && !e.consumed) ?? [],
        [d, c] = eZ().partition(u, (e) => {
            let { subscriptionPlanId: t } = e;
            return t === sq.gD.PREMIUM_YEAR_TIER_2;
        }),
        m = l.length + r.length > 0,
        A =
            t || !m
                ? null
                : (0, E.jsxs)("div", {
                      className: c$.N1,
                      children: [
                          (0, E.jsx)(eP.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.wFsj3B) }),
                          (0, E.jsx)(eM.c, { className: c$.yF }),
                      ],
                  }),
        h =
            s && m
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
            A,
            (0, E.jsx)(cD.A, {
                className: c$.Yj,
                isShown: s && m,
                type: cD.i.PREMIUM,
                hasBackground: !0,
                children: (0, E.jsxs)("div", {
                    className: c$.DE,
                    children: [
                        h,
                        r.map((e) => {
                            let { code: t, promotion: i } = e;
                            return (0, E.jsx)(c3, { outboundPromotion: i, code: t, disabled: !n }, i.id);
                        }),
                        l.map((e) => (0, E.jsx)(c3, { outboundPromotion: e, code: a[e.id], disabled: !n }, e.id)),
                        null != o
                            ? (0, E.jsx)(
                                  cJ,
                                  {
                                      skuId: o.skuId,
                                      subscriptionPlanId: o.subscriptionPlanId,
                                      entitlements: [o],
                                      giftCodeBatchId: sq.FB,
                                  },
                                  (0, cS.Kx)(o.skuId, o.subscriptionPlanId),
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
                                  (0, cS.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                        c.length > 0
                            ? (0, E.jsx)(
                                  cJ,
                                  {
                                      skuId: c[0].skuId,
                                      subscriptionPlanId: c[0].subscriptionPlanId,
                                      entitlements: c,
                                      giftCodeBatchId: sq.Bu,
                                  },
                                  (0, cS.Kx)(c[0].skuId, c[0].subscriptionPlanId),
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
        t = eZ().groupBy(e, (e) => (0, cS.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [i, n] = S.useState(!1);
    if (
        (S.useEffect(() => {
            sa.h.wait(() => {
                (0, c1.XJ)().then(() => n(!0));
            });
        }, []),
        !i)
    )
        return (0, E.jsx)(df.y, { className: c$.Lq });
    if (0 === Object.keys(t).length)
        return (0, E.jsxs)("div", {
            className: c$.p$,
            children: [
                (0, E.jsx)("div", { className: c$.QT }),
                (0, E.jsx)(cN.H, { className: c$.ks, children: j.intl.string(j.t.B1qgZn) }),
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
            let { skuId: i, subscriptionPlanId: n, giftStyle: s } = (0, cS.X6)(e);
            return (0, E.jsx)(cJ, { skuId: i, subscriptionPlanId: n, entitlements: t[e], giftStyle: s }, e);
        });
    return (0, E.jsx)(q.B, { gap: "lg", children: s });
}
function c3(e) {
    let t,
        { outboundPromotion: i, code: n, disabled: s } = e,
        [l, r] = S.useState(!1),
        [a, o] = S.useState(!1),
        u = () => r((e) => !e),
        d = (0, c_.Ay)(),
        c = (0, cb.WD)(i.id, d),
        g = null != n,
        m = S.useMemo(
            () =>
                (0, r7.i$)(
                    g
                        ? null != i.outboundRedemptionEndDate
                            ? r4()(i.outboundRedemptionEndDate)
                            : r4()(i.endDate).add(cC)
                        : r4()(i.endDate),
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
                                        children: (0, E.jsx)("img", { alt: "", src: c, className: c$.IJ }),
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
                            !s && (0, E.jsx)(eG.$, { text: A, onClick: () => o(!0), disabled: s, size: "sm" }),
                        ],
                    }),
                    l &&
                        (0, E.jsx)(es.E, {
                            className: c$.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: cI.A.parse(x, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            a &&
                (0, E.jsx)(cf.aF, {
                    renderModal: (e) =>
                        (0, E.jsx)(cO, {
                            ...e,
                            onClose: h,
                            onClaim: cu.Ay.addClaimedOutboundPromotionCode,
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
                    children: (0, E.jsxs)(cN.F, {
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
    usePredicate: () => !(0, cc.Hp)(),
    useSearchTerms: () => [j.intl.string(j.t["jcSP+g"]), j.intl.string(j.t["9KeUbY"])],
});
var c4 = i(89366),
    c7 = i(881489),
    c5 = i(374200),
    c8 = i(354670);
let c9 = (0, a.zZ)(u.X.MY_GIFTS_CATEGORY, {
        useTitle: gt,
        buildLayout: () => [ge],
        usePredicate: () => {
            let e = (0, c4.QQ)(),
                t = (0, g.bG)([c8.A], () => c8.A.hasAnyUnexpiredOffer()),
                i = (0, c7.ds)(),
                { claimedOutboundPromotionCodes: n, claimedOutboundPromotionCodesLoaded: s } = (0, g.cf)(
                    [c5.A],
                    () => ({
                        claimedOutboundPromotionCodes: c5.A.claimedOutboundPromotionCodes,
                        claimedOutboundPromotionCodesLoaded: c5.A.claimedOutboundPromotionCodesLoaded,
                    }),
                ),
                l = (0, cb.eN)(n),
                r = (0, cd.T1)(e, t, i, l),
                a = (0, cb.Wl)(n, r).length;
            return s && r.length + a > 0;
        },
    }),
    ge = (0, a.E2)(u.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [gt()],
        Component: () => (0, E.jsx)(c0, { redesign: !0 }),
    });
function gt() {
    return (0, o.ri)("MyGifts") ? j.intl.string(j.t.YzjdWJ) : j.intl.string(j.t.wFsj3B);
}
let gi = (0, a.zZ)(u.X.PURCHASED_GIFTS_CATEGORY, { useTitle: gs, buildLayout: () => [gn] }),
    gn = (0, a.E2)(u.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [gs()], Component: () => (0, E.jsx)(c2, {}) });
function gs() {
    return (0, o.ri)("PurchasedGifts") ? j.intl.string(j.t.FWe6CP) : j.intl.string(j.t["9KeUbY"]);
}
let gl = (0, a.zZ)(u.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => j.intl.string(j.t["il+VCo"]),
        buildLayout: () => [gr],
        usePredicate: () => !(0, cc.Hp)(),
    }),
    gr = (0, a.E2)(u.X.REDEEM_CODE_INPUT, {
        Component: () => (0, E.jsx)(cx, { redesign: !0 }),
        useSearchTerms: () => [j.intl.string(j.t["jcSP+g"]), j.intl.string(j.t["il+VCo"])],
    }),
    ga = (0, a.zZ)(u.X.GIFT_INVENTORY_LEGACY_CATEGORY, { buildLayout: () => [cp, c6, cg] }),
    go = (0, a.t_)(u.X.GIFT_PANEL, {
        useTitle: () => j.intl.string(j.t["jcSP+g"]),
        buildLayout: () => ((0, o.SB)("GiftPanel") ? [gl, c9, gi, cm] : [ga]),
        initialize: () => {
            (0, o.SB)("GiftPanel") && cu.Ay.fetchClaimedOutboundPromotionCodes();
        },
    }),
    gu = (0, a.i4)(u.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["jcSP+g"]),
        icon: co.o,
        usePersistentBadge: function () {
            return S.useMemo(() => ({ badgeType: h.Xi.COUNT, useCount: () => (0, cd.IO)().length }), []);
        },
        buildLayout: () => [go],
    });
var gd = i(659758),
    gc = i(741046),
    gg = i(815846);
let gm = (0, a.E2)(u.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, g.bG)([io.default], () => io.default.getCurrentUser());
            return (0, uT.YE)(e, sq.PremiumTypes.TIER_2) ? (0, E.jsx)(gg.A, {}) : (0, E.jsx)(gc.A, {});
        },
        useSearchTerms: () => [j.intl.string(j.t.Ipxkog)],
    }),
    gA = (0, a.zZ)(u.X.NITRO_CATEGORY, { buildLayout: () => [gm] }),
    gh = (0, a.t_)(u.X.NITRO_PANEL, {
        useTitle: () => j.intl.string(j.t.Ipxkog),
        useObscuredNotice: dT.L,
        buildLayout: () => [gA],
    }),
    gE = (0, a.i4)(u.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.Ipxkog),
        icon: uu.t,
        usePersistentBadge: function (e) {
            return S.useMemo(
                () => ({ badgeType: h.Xi.STRONGLY_DISCOURAGED_CUSTOM, useCustomBadge: () => (0, gd.e)(e) }),
                [e],
            );
        },
        buildLayout: () => [gh],
    });
var gS = i(104510),
    gT = i(820739),
    gx = i(73825),
    gp = i(160946);
let gf = (0, i(240921).Ay)({
    name: "2026-03-boosting-settings-refresh",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var gN = i(859241),
    g_ = i(531260),
    gI = i(369163),
    gC = i(957485),
    gb = i(926268),
    gy = i(106529),
    gv = i(93364);
function gj(e) {
    let { className: t, icon: i, children: n } = e;
    return (0, E.jsxs)("li", {
        className: e6()(gy.Nr, t),
        children: [
            (0, E.jsx)(i, { className: gy.Kk }),
            (0, E.jsx)(es.E, { className: gy.__invalid_description, variant: "text-sm/medium", children: n }),
        ],
    });
}
let gO = function (e) {
    let { cardClassName: t } = e;
    return (0, E.jsxs)("div", {
        className: gy.iE,
        children: [
            (0, E.jsxs)("div", {
                className: gy.Qs,
                children: [
                    (0, E.jsx)(eP.D, {
                        className: gy.R_,
                        color: "always-white",
                        variant: "heading-xxl/bold",
                        children: j.intl.string(j.t.IzKs3o),
                    }),
                    (0, E.jsxs)("ul", {
                        className: gy.kR,
                        children: [
                            (0, E.jsx)(gj, { className: t, icon: gI.v, children: j.intl.string(j.t.TZigSO) }),
                            (0, E.jsx)(gj, {
                                className: t,
                                icon: (e) =>
                                    (0, E.jsx)("img", { className: e6()(e.className, gy.Dp), src: gv, alt: "" }),
                                children: j.intl.string(j.t.hjQuV2),
                            }),
                            (0, E.jsx)(gj, { className: t, icon: gC.i, children: j.intl.string(j.t["2RUcaM"]) }),
                            (0, E.jsx)(gj, { className: t, icon: gb.C, children: j.intl.string(j.t.bJoZKV) }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)("div", { className: gy.JP }),
        ],
    });
};
var gR = i(834040),
    gD = i(811227);
let gL = [
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
    gP = function (e) {
        let { className: t } = e,
            [i, n] = S.useState(null);
        return (0, E.jsxs)("div", {
            className: e6()(gD.iE, t),
            children: [
                (0, E.jsx)(eP.D, {
                    className: gD.R_,
                    variant: "heading-xxl/bold",
                    children: j.intl.string(j.t.HPJ6Nj),
                }),
                (0, E.jsx)("ul", {
                    className: gD.p_,
                    children: gL.map((e, t) => {
                        let s = i === t;
                        return (0, E.jsxs)(
                            "div",
                            {
                                className: gD.Aw,
                                children: [
                                    (0, E.jsxs)(en.D, {
                                        className: e6()(gD.k7, { [gD.lo]: s }),
                                        onClick: () => n((e) => (e === t ? null : t)),
                                        tag: "li",
                                        children: [
                                            (0, E.jsx)(es.E, {
                                                className: gD.b1,
                                                variant: "text-lg/normal",
                                                children: e.getQuestion(),
                                            }),
                                            s
                                                ? (0, E.jsx)(gR.Q, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: gD.q4,
                                                  })
                                                : (0, E.jsx)(ay.j, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: gD.q4,
                                                  }),
                                        ],
                                    }),
                                    s &&
                                        (0, E.jsx)(es.E, {
                                            className: gD.ZF,
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
var gG = i(462887),
    gM = i(933832),
    gU = i(789645),
    gV = i(116891),
    gk = i(416676);
let gw = [
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
                resolution: (0, gV.eT)("GuildBoostingMarketingTierComparisonTable"),
                framerate: sq.TG[U.TVA.TIER_2].limits.screenShareQualityFramerate,
            }),
        getTier3Value: () =>
            j.intl.formatToPlainString(j.t.zZ6Rdi, {
                resolution: (0, gV.eT)("GuildBoostingMarketingTierComparisonTable"),
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
function gB(e) {
    let { children: t, className: i, tier: n } = e,
        s = n === U.TVA.NONE ? "text-muted" : "text-strong",
        l = n === U.TVA.NONE || null == n ? "heading-xl/normal" : "heading-xl/bold";
    return (0, E.jsxs)("th", {
        className: e6()(gk.PG, i),
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
function gF(e) {
    let t,
        { className: i, textVariant: n = "text-md/bold", value: s } = e;
    if ("boolean" == typeof s) {
        let e = e6()(gk.Jk, { [gk.I$]: s });
        t = s
            ? (0, E.jsx)(gM.A, { size: "md", color: "currentColor", className: e })
            : (0, E.jsx)(gU.P, { size: "md", color: "currentColor", className: e });
    } else t = (0, E.jsx)(es.E, { color: "interactive-text-active", variant: n, children: s });
    return (0, E.jsx)("td", { className: e6()(gk.xR, i), children: t });
}
function gz(e) {
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
              className: e6()(gk.ER, { [gk.GH]: i === U.TVA.TIER_2, [gk.z5]: i === U.TVA.TIER_3 }),
              children: (0, E.jsx)(es.E, {
                  className: gk.uQ,
                  color: "always-white",
                  variant: "text-xs/bold",
                  children: t === U.TVA.TIER_3 ? j.intl.string(j.t.d849Up) : j.intl.string(j.t.dZeX1z),
              }),
          });
}
function gX(e) {
    let { isFocused: t, handleFocus: i, handleRowBlur: n, theme: s, row: l, hideTier0: r } = e,
        a = S.useRef(null);
    return (0, E.jsxs)("tr", {
        className: gk.__invalid_tableRow,
        children: [
            (0, E.jsx)("th", {
                className: e6()(gk.xR, gk.uB),
                scope: "row",
                children: (0, E.jsx)(en.D, {
                    className: e6()(gk.VC, gk.xR, gk.Rk),
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
                                className: gk.Mz,
                                src: (0, gG.M)(s) ? l.getPerkPreviewDarkTheme() : l.getPerkPreviewLightTheme(),
                                alt: "",
                            }),
                        shouldShow: t,
                        spacing: 16,
                        children: () =>
                            (0, E.jsx)(es.E, { variant: "text-md/normal", ref: a, children: l.getPerkHeading() }),
                    }),
                }),
            }),
            !r && (0, E.jsx)(gF, { textVariant: "text-md/normal", value: l.getTier0Value() }),
            (0, E.jsx)(gF, { value: l.getTier1Value() }),
            (0, E.jsx)(gF, { value: l.getTier2Value() }),
            (0, E.jsx)(gF, { value: l.getTier3Value() }),
        ],
    });
}
let gY = function (e) {
    let t = (0, c_.Ay)(),
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
                    className: gk.R_,
                    variant: "heading-xxl/extrabold",
                    children: j.intl.string(j.t["9GGb9k"]),
                }),
            (0, E.jsxs)("div", {
                className: gk.wY,
                children: [
                    null != l && (0, E.jsx)(gz, { currentTier: l.premiumTier }),
                    (0, E.jsxs)("table", {
                        className: gk.tp,
                        cellPadding: 0,
                        cellSpacing: 0,
                        children: [
                            (0, E.jsx)("thead", {
                                children: (0, E.jsxs)("tr", {
                                    className: gk.__invalid_tableRow,
                                    children: [
                                        (0, E.jsx)(gB, { className: gk.VC, children: j.intl.string(j.t.F5MY0k) }),
                                        !a && (0, E.jsx)(gB, { tier: U.TVA.NONE, children: j.intl.string(j.t.mx8j2m) }),
                                        (0, E.jsx)(gB, { tier: U.TVA.TIER_1, children: j.intl.string(j.t.nzXtaS) }),
                                        (0, E.jsx)(gB, { tier: U.TVA.TIER_2, children: j.intl.string(j.t["h33/uW"]) }),
                                        (0, E.jsx)(gB, { tier: U.TVA.TIER_3, children: j.intl.string(j.t.BfF6ED) }),
                                    ],
                                }),
                            }),
                            (0, E.jsx)("tbody", {
                                className: gk.__invalid_tableBody,
                                children: gw.map((e, s) => {
                                    let l = i === s;
                                    return void 0 === e.predicate
                                        ? (0, E.jsx)(
                                              gX,
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
var gH = i(338548),
    gK = i(776096),
    gW = i(178368),
    gZ = i(308186),
    gQ = i(866323),
    gq = i(530005),
    gJ = i(443865),
    g$ = i(473145);
function g0(e) {
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
                      iconLeft: gJ.x,
                      leadingAccessory: { type: "icon", icon: gJ.x },
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
            (0, g$.I5)(t)
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
var g1 = i(545934),
    g2 = i(496431);
let g3 = function (e) {
    let { className: t, cooldown: i } = e,
        n = (0, g2.A)(i);
    return (0, E.jsx)(es.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, r7.uN)(n, { days: j.t.WUTPDc, hours: j.t.c1qodV, minutes: j.t["2+A3dv"] }),
    });
};
var g6 = i(482900);
let g4 = function (e) {
    let { className: t, imageClassName: n, boostInCooldown: s, useReducedMotion: l } = e;
    return (0, E.jsx)("div", {
        className: e6()(g6.h4, t, { [g6.K2]: s }),
        children: (0, E.jsx)("img", {
            className: e6()(g6.Sl, n, { [g6.x8]: s }),
            src: s
                ? i(650442)
                : l
                  ? i(742885)
                  : "https://cdn.discordapp.com/assets/content/86fd98fc22283647a8be93d0c503646b53c84e3cb25ca6562a38cecb84327e58.gif",
            alt: "",
        }),
    });
};
var g7 = i(583032);
let g5 = function (e) {
    let { className: t, hasCooldown: n, isCanceled: s, useReducedMotion: l } = e;
    return (0, E.jsxs)("div", {
        className: e6()(g7.sn, t),
        children: [
            s
                ? (0, E.jsx)("img", { className: e6()(g7.$J, g7.qX), src: i(728707), alt: "" })
                : (0, E.jsx)(g4, { className: g7.$J, boostInCooldown: n, useReducedMotion: l }),
            !s && n && (0, E.jsx)("img", { className: g7.De, src: i(438807), alt: "" }),
        ],
    });
};
var g8 = i(548118),
    g9 = i(85829),
    me = i(944304),
    mt = i(864310),
    mi = i(245390);
let mn = function (e) {
    let { className: t, guildId: i, boostingVariant: n } = e,
        s = (0, dt.bG)([ec.A], () => ec.A.getGuild(i), [i]),
        l = (0, mt.A)(s?.id).total;
    return null == s
        ? (0, E.jsx)("div", {
              className: e6()(t, mi.bo),
              children: (0, E.jsx)("div", {
                  className: mi.$g,
                  children: (0, E.jsx)(es.E, { variant: "text-lg/bold", children: j.intl.string(j.t["6Kwwuo"]) }),
              }),
          })
        : (0, E.jsxs)("div", {
              className: e6()(t, mi.bo),
              children: [
                  (0, E.jsx)(g8.Ay, { className: mi.__invalid_guildIcon, guild: s, size: g8.Ay.Sizes.LARGER }),
                  (0, E.jsxs)("div", {
                      className: mi.$g,
                      children: [
                          (0, E.jsx)(es.E, { variant: "text-lg/bold", children: s.name }),
                          (0, E.jsxs)("div", {
                              className: mi.TZ,
                              children: [
                                  (0, E.jsx)(gS._, {
                                      color: er.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                      className: mi.Me,
                                  }),
                                  (0, E.jsx)(es.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: j.intl.format(j.t["pob/cL"], { subscriptions: l }),
                                  }),
                                  (0, E.jsx)("div", { className: mi.me }),
                                  (0, E.jsx)(es.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: (0, g$.gb)(s.premiumTier, { useLevels: !1 }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  n
                      ? (0, E.jsx)(me.A, {
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
                                    (0, g9.K4)({
                                        guildId: s.id,
                                        location: { section: U.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA },
                                    });
                            },
                        }),
              ],
          });
};
var ms = i(85566);
function ml(e) {
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
            let e = null != i.premiumGuildSubscription ? dL.default.extractTimestamp(i.premiumGuildSubscription.id) : 0;
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
        u = (0, gQ.p)(n, { from: { opacity: 0 }, enter: { opacity: 1 }, leave: { opacity: 0 } }, "animate-always");
    return s || t === U.TVA.NONE
        ? (0, E.jsx)("div", {
              className: ms.xm,
              children: (0, E.jsx)(es.E, { variant: "text-sm/medium", color: "text-muted", children: a }),
          })
        : u((e, t) =>
              (0, E.jsx)(gZ.animated.div, {
                  style: e,
                  className: ms.xm,
                  children: (0, E.jsx)(es.E, { variant: "text-sm/medium", color: "text-muted", children: t ? o : a }),
              }),
          );
}
function mr(e) {
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
        d = (0, g$.I5)(i),
        c = (0, g_.A)(),
        g = S.useRef(null);
    return (0, E.jsxs)("div", {
        className: ms.PW,
        children: [
            (0, E.jsxs)("div", {
                className: ms.$U,
                children: [
                    (0, E.jsx)(g5, { isCanceled: d, hasCooldown: u, useReducedMotion: a }),
                    (0, E.jsx)("div", {
                        className: ms.vh,
                        children:
                            null != o && u && !d
                                ? (0, E.jsx)(g3, { className: ms.xm, cooldown: o.getTime() })
                                : (0, E.jsx)(ml, {
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
                            return (0, E.jsx)(g0, {
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
                                className: ms.oU,
                                children: (0, E.jsx)(gq.F, { size: "md", color: "currentColor" }),
                            }),
                    }),
                ],
            }),
            !r && (0, E.jsx)("div", { className: ms.eX }),
        ],
    });
}
function ma(e) {
    let {
            guildId: t,
            guildBoostSlotRecords: i,
            premiumSubscription: n,
            hasCancelableGuildBoostSlot: s,
            showAltText: l,
        } = e,
        r = (0, dt.bG)([ec.A], () => ec.A.getGuild(t), [t]);
    return (0, E.jsxs)("div", {
        className: ms.ag,
        children: [
            (0, E.jsx)(mn, { guildId: t, boostingVariant: !1 }),
            i.map((e, t) =>
                (0, E.jsx)(
                    mr,
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
function mo(e) {
    let { guildId: t, appliedGuildBoosts: i, premiumSubscription: n } = e,
        s = (0, dt.bG)([ec.A], () => ec.A.getGuild(t), [t]),
        l = dL.default.fromTimestamp(Date.now());
    if (
        (i.forEach((e) => {
            (null == l || 0 > dL.default.compare(e.id, l)) && (l = e.id);
        }),
        null == l)
    )
        return null;
    let r = g1.A.createFromServer(
        {
            id: dL.default.fromTimestamp(Date.now()),
            subscription_id: n.id,
            canceled: !1,
            premium_guild_subscription: { id: l, guild_id: t },
            cooldown_ends_at: null,
        },
        n,
    );
    return (0, E.jsxs)("div", {
        className: ms.ag,
        children: [
            (0, E.jsx)(mn, { guildId: t, boostingVariant: !1 }),
            i.map((e, t) =>
                (0, E.jsx)(
                    mr,
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
function mu(e) {
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
              className: ms.iE,
              children: [
                  (0, E.jsx)("div", {
                      className: ms.kL,
                      children: dL.default
                          .keys(n)
                          .map((e) =>
                              (0, E.jsx)(mo, { guildId: e, premiumSubscription: i, appliedGuildBoosts: n[e] }, e),
                          ),
                  }),
                  (0, E.jsx)("div", { className: ms.vK }),
              ],
          });
}
function md(e) {
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
                if ((!(0, g$.I5)(s) && e++, null != s.premiumGuildSubscription)) {
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
        className: ms.iE,
        children: [
            (0, E.jsx)("div", {
                className: ms.kL,
                children: dL.default
                    .keys(l)
                    .map((e) =>
                        (0, E.jsx)(
                            ma,
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
            (0, E.jsx)("div", { className: ms.vK }),
        ],
    });
}
var mc = i(520610);
let mg = function (e) {
    let { hasGuildBoostSlots: t, hasAppliedGuildBoosts: n, hasBoostPerk: s, canAddBoosts: l } = e;
    return (0, E.jsxs)("div", {
        className: mc.iE,
        children: [
            (0, E.jsx)("div", {
                className: mc.bj,
                children: (0, E.jsx)("img", { alt: "", className: mc.KV, src: i(742885) }),
            }),
            (0, E.jsxs)("div", {
                className: mc.D7,
                children: [
                    (0, E.jsx)(eP.D, {
                        variant: "display-md",
                        className: mc.R_,
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
                        className: mc.Mz,
                        children: (0, E.jsx)("path", {
                            d: "M101.3,45.5C57.5,45.9,15.9,82.2,0,99.5V210h660V53.5c-164-137-265.2,32.4-385.8,33.6  C177.7,88.1,158.1,45,101.3,45.5z",
                        }),
                    }),
                ],
            }),
        ],
    });
};
var mm = i(20218),
    mA = i(168482);
function mh() {
    return (0, E.jsxs)("div", {
        className: mm.iE,
        children: [
            (0, E.jsx)("img", { className: mm.Kk, alt: "", src: mA }),
            (0, E.jsxs)("div", {
                className: mm.pq,
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
                onClick: () => {
                    (0, s7.pX)(U.BVt.GUILD_DISCOVERY), (0, sH.default)();
                },
            }),
        ],
    });
}
var mE = i(502572),
    mS = i(614820),
    mT = i(987144),
    mx = i(805319);
let mp = function () {
    let e = S.useRef(null),
        { analyticsLocations: t } = (0, nZ.Ay)(),
        { fractionalState: n } = (0, g_.A)();
    function s(i) {
        null != e.current && (0, K.closeModal)(e.current),
            (0, mT.g)({
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
    let r = (0, g$.Nc)({ fractionalState: n });
    return (0, E.jsxs)("div", {
        className: mx.iE,
        children: [
            (0, E.jsx)(gS._, { color: er.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: mx.$J }),
            (0, E.jsx)(es.E, {
                className: mx.C,
                color: "text-default",
                variant: "text-sm/medium",
                children: j.intl.format(j.t.kqC5vq, {
                    boostAnyGuildHook: (e, t) => {
                        let i = null != r,
                            n = (0, mS.O)(e),
                            s = (0, E.jsx)("div", {
                                className: mx.lO,
                                children: (0, E.jsx)(
                                    ea.Q,
                                    { variant: "primary", onClick: i ? void 0 : l, text: n, disabled: i },
                                    t,
                                ),
                            });
                        return i
                            ? (0, E.jsx)(
                                  mE.A,
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
var mf = i(279574);
let mN = function (e) {
    let { canAddBoosts: t, canApplyBoosts: i } = e,
        n = (0, g.bG)([gK.A], () => gK.A.affinities),
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
              className: mf.iE,
              children: [
                  t &&
                      (0, E.jsx)(eP.D, {
                          variant: "heading-lg/semibold",
                          className: mf.wx,
                          children: j.intl.string(j.t.r90Wgo),
                      }),
                  l.map((e) => (0, E.jsx)(mn, { className: mf.ZS, guildId: e, boostingVariant: !0 }, e)),
                  s.length > 3 && i && (0, E.jsx)(mp, {}),
              ],
          });
};
var m_ = i(649327);
let mI = function (e) {
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
                a = (0, dR.CE)((0, dR.$g)(r.amount, r.currency), l.interval, l.intervalCount);
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
        className: m_.i,
        children: [
            (0, E.jsx)(eP.D, { variant: "heading-lg/bold", className: m_.V, children: l }),
            null != r && (0, E.jsx)(es.E, { variant: "text-sm/normal", children: r }),
        ],
    });
};
var mC = i(724624),
    mb = i(983511),
    my = i(342744),
    mv = i(87719),
    mj = i(354888);
function mO(e) {
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
        u = (0, g$.I5)(t),
        d = l?.isPaused === !0 && a === sq.xc.NONE,
        c = j.intl.string(j.t.mOWsF1);
    return (0, E.jsxs)(
        "li",
        {
            className: mj.Hp,
            children: [
                (0, E.jsxs)("div", {
                    className: mj.YL,
                    children: [
                        (0, E.jsx)(g5, {
                            className: mj.W6,
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
                              ? (0, E.jsx)(g3, { cooldown: o.getTime() })
                              : (0, E.jsx)(es.E, {
                                    className: mj.__invalid_unappliedGuildBoostSlotDescription,
                                    color: "text-muted",
                                    variant: "text-sm/medium",
                                    children: j.intl.string(j.t["2mcafz"]),
                                }),
                    ],
                }),
                (0, E.jsxs)("div", {
                    className: mj.E7,
                    children: [
                        i &&
                            !u &&
                            (0, E.jsx)(mE.A, {
                                shouldShow: d,
                                text: c,
                                "aria-label": c.toString(),
                                children: (e) =>
                                    (0, E.jsx)("div", {
                                        className: mj.LB,
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
                            (0, E.jsx)(mE.A, {
                                shouldShow: d,
                                text: c,
                                "aria-label": c.toString(),
                                children: (e) =>
                                    (0, E.jsx)("div", {
                                        className: mj.LB,
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
function mR(e) {
    (0, K.openModalLazy)(async () => (t) => (0, E.jsx)(mb.default, { ...t, guildBoostSlot: e }));
}
function mD(e) {
    (0, K.openModalLazy)(async () => (t) => (0, E.jsx)(my.default, { ...t, guildBoostSlotId: e.id }));
}
let mL = function (e) {
    let t,
        i,
        n,
        { guildBoostSlots: s } = e,
        l = (0, g.bG)([d7.A], () => d7.A.getPremiumTypeSubscription()),
        r = l?.isPausedOrPausePending === !0,
        { fractionalState: a } = (0, g_.A)(),
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
                    !(0, g$.I5)(s) && i++,
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
            for (let t = 0; t < I; t++) e.push((0, E.jsx)(g4, { className: mj.YA, useReducedMotion: o }, t));
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
        let e = (e, t) =>
            (0, E.jsx)(
                en.D,
                {
                    className: mj.nw,
                    tag: "span",
                    onClick: () => {
                        (0, mv.e)();
                    },
                    children: e,
                },
                t,
            );
        i = x
            ? j.intl.format(j.t.omcpSE, { learnMoreHook: e })
            : j.intl.format(j.t["5mAkVi"], { numUnappliedGuildBoostSlots: y, learnMoreHook: e });
    } else
        i = x
            ? j.intl.string(j.t["8pcUZi"])
            : j.intl.formatToPlainString(j.t.Kaw82o, { numUnappliedGuildBoostSlots: y });
    return (
        (n = r && a === sq.xc.NONE ? j.intl.string(j.t.mOWsF1) : j.intl.string(j.t.xr4m5B)),
        (0, E.jsx)("div", {
            className: mj.iE,
            children: (0, E.jsxs)("div", {
                className: e6()(mj.Qs, [mj.Yq]),
                children: [
                    (0, E.jsxs)("div", {
                        className: mj.wx,
                        children: [
                            (0, E.jsxs)("div", {
                                className: mj.RW,
                                children: [
                                    (0, E.jsx)("div", { className: mj.PS, children: C }),
                                    (0, E.jsxs)("div", {
                                        className: mj.__invalid_headerCopy,
                                        children: [
                                            (0, E.jsx)(eP.D, {
                                                className: mj.gg,
                                                variant: "heading-lg/bold",
                                                children: t,
                                            }),
                                            (0, E.jsx)(es.E, {
                                                className: mj.__invalid_headerSubheading,
                                                color: "text-strong",
                                                variant: "text-sm/normal",
                                                children: i,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, E.jsx)("div", {
                                className: mj.di,
                                children: (0, E.jsx)(mE.A, {
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
                                                                  (0, E.jsx)(mC.default, {
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
                            className: mj.LU,
                            children: A.map((e) =>
                                (0, E.jsx)(
                                    mO,
                                    {
                                        guildBoostSlot: e,
                                        isCancellable: N,
                                        onCancel: mR,
                                        onUncancel: mD,
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
var mP = i(616659);
function mG(e) {
    let { premiumSubscription: t } = e,
        i = (0, g.bG)([gW.A], () => gW.A.boostSlots),
        n = S.useMemo(() => Object.values(i), [i]),
        s = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
        l = uT.Ay.isPremium(s, sq.PremiumTypes.TIER_2),
        r = (0, g.bG)([gK.A], () => gK.A.affinities),
        a = (0, g.bG)([eg.Ay], () => eg.Ay.getFlattenedGuildIds()),
        o = r.length > 0 || a.length > 0,
        u = n.length > 0,
        d = S.useMemo(() => n.filter((e) => null != e.premiumGuildSubscription), [n]),
        c = d.length > 0,
        m = n.length > d.length,
        A = (0, g.bG)([gN.A], () => gN.A.getCurrentUserAppliedBoosts()),
        { fractionalState: h } = (0, g_.A)({ forceFetch: !0 }),
        T = s?.isPremiumGroupMember(),
        x = t?.isPausedOrPausePending === !0 && h === sq.xc.NONE,
        p = t?.isPausedOrPausePending !== !0 && h === sq.xc.NONE && !T,
        f = l && h === sq.xc.FP_SUB_PAUSED,
        N = h === sq.xc.NONE && !T;
    return (0, E.jsxs)("div", {
        className: mP.GO,
        children: [
            (0, E.jsx)(cn.kb, { className: mP.ek }),
            (0, E.jsx)(mg, { hasGuildBoostSlots: u, hasAppliedGuildBoosts: c, hasBoostPerk: f, canAddBoosts: p }),
            N &&
                (0, E.jsx)(mI, {
                    hasAppliedGuildBoosts: c,
                    hasBoostPerk: f,
                    hasGuildAffinitiesOrInGuild: o,
                    subscriptionIsPausedOrPausePending: x,
                }),
            T && (0, E.jsx)(gH.A, {}),
            !o && (0, E.jsx)(mh, {}),
            t?.isPaused && h !== sq.xc.FP_SUB_PAUSED
                ? (0, E.jsx)(mu, { appliedGuildBoosts: A, premiumSubscription: t })
                : (0, E.jsx)(md, { guildBoostSlots: i, premiumSubscription: t }),
            (0, E.jsx)(mL, { guildBoostSlots: n, fractionalPremiumState: h }),
            (0, E.jsx)(mN, { canAddBoosts: c && p, canApplyBoosts: m }),
            (0, E.jsx)(gY, { className: mP.e4, hideHeading: !0, hideTier0: !0 }),
            (0, E.jsx)(gO, { cardClassName: mP.KW }),
            (0, E.jsx)(gP, { className: mP.JL }),
        ],
    });
}
var mM = i(527113),
    mU = i(365199),
    mV = i(162286);
function mk(e) {
    let { guild: t, className: i } = e,
        { total: n } = (0, mt.A)(t.id);
    return (0, E.jsxs)("div", {
        className: i ?? mV.OA,
        children: [
            (0, E.jsx)(g8.Ay, { className: mV.$f, guild: t, size: g8.Ay.Sizes.MEDIUM }),
            (0, E.jsxs)("div", {
                className: mV.gI,
                children: [
                    (0, E.jsx)(es.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, E.jsxs)("div", {
                        className: mV.ew,
                        children: [
                            (0, E.jsxs)("div", {
                                className: mV.QW,
                                children: [
                                    (0, E.jsx)(gS._, {
                                        className: mV.Wz,
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
                                        (0, E.jsx)("div", { className: mV.zk }),
                                        (0, E.jsx)(es.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, g$.gb)(t.premiumTier, { useLevels: !1 }),
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
function mw(e) {
    let { guildId: t } = e,
        i = (0, g.bG)([ec.A], () => ec.A.getGuild(t), [t]);
    return null == i
        ? null
        : (0, E.jsxs)("div", {
              className: mV.Nr,
              children: [
                  (0, E.jsx)(mk, { guild: i }),
                  (0, E.jsx)(eG.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: gS._,
                      text: j.intl.string(j.t.aBHecF),
                      onClick: () => {
                          (0, mT.g)({
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
var mB = i(225334);
let mF =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function mz(e) {
    let { slot: t, guildTier: i, premiumSubscription: n, hasCancelableSlots: s, isLast: l } = e,
        r = S.useRef(null),
        a = (0, g$.I5)(t),
        o = S.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, g_.A)(),
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
            let e = null != t.premiumGuildSubscription ? dL.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return j.intl.formatToPlainString(j.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        m = S.useMemo(
            () => (a ? (n.isPausedForFractionalPremium ? d.endsAt.toDate() : n.currentPeriodEnd) : null),
            [a, n, d],
        );
    return (0, E.jsxs)("div", {
        className: e6()(mB.iq, { [mB.Mt]: l }),
        children: [
            (0, E.jsxs)("div", {
                className: mB.kd,
                children: [
                    (0, E.jsx)("img", { alt: "", className: mB.bB, src: mF }),
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
                                              (0, E.jsx)("div", { className: mB.zk }),
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
                                              (0, E.jsx)("div", { className: mB.zk }),
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
                    return (0, E.jsx)(g0, {
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
                        className: mB.Mj,
                        ...e,
                        children: (0, E.jsx)(mU.j, { size: "xs", color: er.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                    }),
            }),
        ],
    });
}
function mX(e) {
    let { guildId: t, slots: i, premiumSubscription: n, hasCancelableSlots: s } = e,
        l = (0, g.bG)([ec.A], () => ec.A.getGuild(t), [t]);
    return (0, E.jsxs)("div", {
        className: mB.Nr,
        children: [
            (0, E.jsx)("div", {
                className: mB.MY,
                children:
                    null != l
                        ? (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(mk, { guild: l, className: mB.OA }),
                                  (0, E.jsx)(eG.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: j.intl.string(j.t.KLOhbO),
                                      onClick: () => {
                                          (0, sH.default)(),
                                              (0, g9.K4)({
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
                              className: mB.OA,
                              children: (0, E.jsx)(eP.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: j.intl.string(j.t["6Kwwuo"]),
                              }),
                          }),
            }),
            i.map((e, t) =>
                (0, E.jsx)(
                    mz,
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
function mY(e) {
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
                                g1.A.createFromServer(
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
                if ((!(0, g$.I5)(n) && e++, null != n.premiumGuildSubscription)) {
                    let e = n.premiumGuildSubscription.guildId;
                    e in l || (l[e] = []), l[e].push(n);
                }
            }
            return { boostsByGuildId: l, numActiveSlots: e };
        }, [t, s, n, i]);
    if (null == i || 0 === Object.keys(l).length) return null;
    let a = r > uT.Ay.getNumIncludedPremiumGuildSubscriptionSlots(i.planId);
    return (0, E.jsx)("div", {
        className: mB.kR,
        children: dL.default
            .keys(l)
            .map((e) => (0, E.jsx)(mX, { guildId: e, slots: l[e], premiumSubscription: i, hasCancelableSlots: a }, e)),
    });
}
var mH = i(68179);
function mK(e) {
    let { guildBoostSlots: t, fractionalPremiumState: n } = e,
        s = (0, g.bG)([d7.A], () => d7.A.getPremiumTypeSubscription()),
        { unappliedSlots: l, numActiveSlots: r } = S.useMemo(() => {
            let e = [],
                i = 0;
            for (let n of t) !(0, g$.I5)(n) && i++, null == n.premiumGuildSubscription && e.push(n);
            return { unappliedSlots: e, numActiveSlots: i };
        }, [t]),
        a = r > (null != s ? uT.Ay.getNumIncludedPremiumGuildSubscriptionSlots(s.planId) : 0),
        o = s?.isPausedOrPausePending === !0 && n === sq.xc.NONE;
    return 0 === l.length
        ? null
        : (0, E.jsxs)("div", {
              className: mH.Nr,
              children: [
                  (0, E.jsxs)("div", {
                      className: mH.MY,
                      children: [
                          (0, E.jsxs)("div", {
                              className: mH._L,
                              children: [
                                  (0, E.jsxs)("div", {
                                      className: mH.MD,
                                      children: [
                                          (0, E.jsx)("img", { alt: "", className: mH.F8, src: mF }),
                                          (0, E.jsx)("div", {
                                              className: e6()(mH.qS, "theme-dark"),
                                              children: (0, E.jsx)("span", { className: mH.Vv, children: l.length }),
                                          }),
                                      ],
                                  }),
                                  (0, E.jsxs)("div", {
                                      className: mH.Qp,
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
                          (0, E.jsx)(mE.A, {
                              shouldShow: o,
                              text: j.intl.string(j.t.mOWsF1),
                              "aria-label": j.intl.string(j.t.mOWsF1),
                              children: (e) =>
                                  (0, E.jsx)(eG.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: gS._,
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
                                                              (0, mT.g)({
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
                          mW,
                          {
                              slot: e,
                              isLast: t === l.length - 1,
                              isCancelable: a && !(0, g$.I5)(e),
                              isCanceled: (0, g$.I5)(e),
                              premiumSubscription: s,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function mW(e) {
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
              ? (0, E.jsx)(g3, { cooldown: u.getTime() })
              : (0, E.jsx)(es.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: j.intl.string(j.t["2mcafz"]),
                });
    let d = s || l;
    return (0, E.jsxs)("div", {
        className: e6()(mH.iq, { [mH.Mt]: n }),
        children: [
            (0, E.jsxs)("div", {
                className: mH.kd,
                children: [(0, E.jsx)("img", { alt: "", className: mH.bB, src: mF }), t],
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
                                                        (0, E.jsx)(mb.default, { ...e, guildBoostSlot: i }),
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
                                                        (0, E.jsx)(my.default, { ...e, guildBoostSlotId: i.id }),
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
                            className: mH.Mj,
                            ...e,
                            children: (0, E.jsx)(mU.j, { size: "xs", color: er.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                        }),
                }),
        ],
    });
}
var mZ = i(185949);
function mQ(e) {
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
              className: mZ.i,
              children: [
                  (0, E.jsxs)("div", {
                      className: mZ.b,
                      children: [
                          (0, E.jsx)(eP.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.W5rDjW) }),
                          (0, E.jsx)(es.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: j.intl.format(j.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, E.jsx)(mY, {
                      guildBoostSlots: i,
                      premiumSubscription: n,
                      pausedAppliedGuildBoosts: s,
                      isPaused: a,
                  }),
                  (0, E.jsx)(mK, { guildBoostSlots: t, fractionalPremiumState: l }),
              ],
          })
        : null;
}
var mq = i(917064),
    mJ = i(438929);
function m$() {
    return (0, E.jsxs)("div", {
        className: mJ.iE,
        children: [
            (0, E.jsx)(eP.D, { variant: "heading-xl/normal", children: j.intl.string(j.t.IzKs3o) }),
            (0, E.jsx)("div", {
                className: mJ.kR,
                children: mq.s.map((e, t) => {
                    let i = e.icon;
                    return (0, E.jsxs)(
                        "div",
                        {
                            className: mJ.Nr,
                            children: [
                                (0, E.jsx)(i, { className: mJ.Kk }),
                                (0, E.jsx)(es.E, {
                                    className: mJ.h_,
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
var m0 = i(232122),
    m1 = i(539915);
function m2() {
    let [e, t] = S.useState(null),
        [i, n] = S.useState(null);
    return (0, E.jsxs)("div", {
        className: m1.iE,
        children: [
            (0, E.jsx)(eP.D, { variant: "heading-xl/normal", children: j.intl.string(j.t.HPJ6Nj) }),
            (0, E.jsx)("ul", {
                className: m1.p_,
                children: m0.m.map((s, l) => {
                    let r = e === l,
                        a = i === l,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, E.jsxs)(
                        en.D,
                        {
                            tag: "li",
                            className: e6()(m1.Aw, { [m1.$K]: r }),
                            onClick: () => t((e) => (e === l ? null : l)),
                            onMouseEnter: () => n(l),
                            onMouseLeave: () => n(null),
                            children: [
                                (0, E.jsxs)("div", {
                                    className: m1.k7,
                                    children: [
                                        (0, E.jsx)(es.E, {
                                            className: m1.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: s.getQuestion(),
                                        }),
                                        (0, E.jsx)(el.a, {
                                            size: "sm",
                                            color: er.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: m1.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, E.jsx)(es.E, {
                                        className: m1.ZF,
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
var m3 = i(182859),
    m6 = i(853513),
    m4 = i(560378);
function m7() {
    let e = tN.A.getArticleURL(U.MVz.GUILD_SUBSCRIPTIONS);
    return (0, E.jsxs)("div", {
        className: m4.wx,
        children: [
            (0, E.jsxs)("div", {
                className: m4.Qs,
                children: [
                    (0, E.jsxs)("div", {
                        className: m4.B5,
                        children: [
                            (0, E.jsx)("img", { alt: "", className: m4.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, E.jsx)(eP.D, {
                                variant: "heading-xl/normal",
                                children: j.intl.string(m6.default.hjvcLO),
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
            (0, E.jsx)(m3.A, {
                variant: "member",
                className: m4.iO,
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
var m5 = i(315629),
    m8 = i(780082);
function m9() {
    let e = (0, g.bG)([io.default], () => io.default.getCurrentUser());
    if (null == e || uT.Ay.hasFreeBoosts(e)) return null;
    let t = tN.A.getArticleURL(U.MVz.GUILD_BOOSTING_FAQ);
    return (0, E.jsxs)(m5.h, {
        color: "nitro-pink",
        className: m8.vK,
        children: [
            (0, E.jsxs)("div", {
                className: m8.nw,
                children: [
                    (0, E.jsx)("img", { alt: "", className: m8.q3, src: mF }),
                    (0, E.jsxs)("div", {
                        className: m8.Tm,
                        children: [
                            (0, E.jsx)(es.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: j.intl.format(j.t.Idh1Vs, { count: sq.M4, boostCount: sq.M4 }),
                            }),
                            (0, E.jsxs)("div", {
                                className: m8.xv,
                                children: [
                                    (0, E.jsx)(uu.t, { className: m8.nE }),
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
                onClick: mv.e,
            }),
        ],
    });
}
var Ae = i(894206);
function At() {
    let e = (0, g.bG)([gK.A], () => gK.A.affinities),
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
              className: Ae.i,
              children: [
                  (0, E.jsx)(eP.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.r90Wgo) }),
                  (0, E.jsx)("div", { className: Ae.k, children: i.map((e) => (0, E.jsx)(mw, { guildId: e }, e)) }),
              ],
          });
}
var Ai = i(140909);
function An(e) {
    let { count: t, disabledReason: n } = e,
        s = tN.A.getArticleURL(U.MVz.GUILD_BOOSTING_FAQ);
    return (0, E.jsxs)(m5.h, {
        color: "nitro-pink",
        className: Ai.vK,
        children: [
            (0, E.jsxs)("div", {
                className: Ai.nw,
                children: [
                    (0, E.jsxs)("div", {
                        className: Ai.MD,
                        children: [
                            (0, E.jsx)("img", { alt: "", className: Ai.F8, src: mF }),
                            (0, E.jsx)("div", {
                                className: e6()(Ai.qS, "theme-dark"),
                                children: (0, E.jsx)("span", { className: Ai.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, E.jsxs)("div", {
                        className: Ai.Tm,
                        children: [
                            (0, E.jsx)(es.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: j.intl.format(j.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, E.jsxs)("div", {
                                className: Ai.xv,
                                children: [
                                    (0, E.jsx)(uu.t, { className: Ai.nE }),
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
            (0, E.jsx)(mE.A, {
                shouldShow: null != n,
                text: n ?? "",
                "aria-label": n,
                children: (e) =>
                    (0, E.jsx)(eG.$, {
                        ...e,
                        variant: "primary",
                        size: "sm",
                        icon: gS._,
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
                                                (0, mT.g)({
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
function As(e) {
    let { premiumSubscription: t } = e,
        i = (0, g.bG)([gW.A], () => gW.A.boostSlots),
        n = S.useMemo(() => Object.values(i), [i]),
        s = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
        l = (0, g.bG)([gK.A], () => gK.A.affinities),
        r = (0, g.bG)([eg.Ay], () => eg.Ay.getFlattenedGuildIds()),
        a = l.length > 0 || r.length > 0,
        o = S.useMemo(() => n.filter((e) => null != e.premiumGuildSubscription), [n]).length,
        u = (0, g.bG)([gN.A], () => gN.A.getCurrentUserAppliedBoosts()),
        { fractionalState: d } = (0, g_.A)({ forceFetch: !0 }),
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
        className: mP.GO,
        children: [
            (0, E.jsx)(cn.kb, { className: mP.ek }),
            (0, E.jsx)(m7, {}),
            (0, E.jsx)(m9, {}),
            T > 0 && (0, E.jsx)(An, { count: T, disabledReason: h }),
            c && (0, E.jsx)(gH.A, {}),
            !a && (0, E.jsx)(mh, {}),
            (0, E.jsxs)("div", {
                className: mP.C_,
                children: [
                    (0, E.jsx)(mQ, {
                        guildBoostSlots: n,
                        guildBoostSlotsByGuildId: i,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: u,
                        fractionalPremiumState: d,
                    }),
                    (0, E.jsx)(At, {}),
                    (0, E.jsx)(mM.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, E.jsx)(m$, {}),
                    (0, E.jsx)(m2, {}),
                ],
            }),
        ],
    });
}
var Al = i(65188);
let Ar = (0, a.E2)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            let e = gf.useConfig({ location: "UserSettingsPremiumGuildSubscriptions" }).enabled;
            S.useEffect(() => {
                sa.h.wait(() => {
                    dy.hP(), dy.$o(), (0, gT.CD)(), (0, gx.zS)(null, null, U.tF5.DISCOVERY), (0, gT.tO)(!0);
                });
            }, []);
            let { hasFetchedSubscriptions: t, premiumSubscription: i } = (0, g.cf)([d7.A], () => ({
                    hasFetchedSubscriptions: d7.A.hasFetchedSubscriptions(),
                    premiumSubscription: d7.A.getPremiumTypeSubscription(),
                })),
                n = (0, gp.Y)(),
                s = (0, g.bG)([d4.A], () => d4.A.hasFetchedPaymentSources),
                l = (0, g.bG)([gN.A], () => gN.A.isFetchingCurrentUserAppliedBoosts),
                r = !t || !n || !s || l,
                [a, o] = S.useState(!1);
            return (r || a || o(!0), r && !a)
                ? (0, E.jsx)("div", { className: e6()(Al.kL, Al.Lq), children: (0, E.jsx)(df.y, {}) })
                : (0, E.jsxs)("div", {
                      className: Al.kL,
                      children: [
                          (0, E.jsx)("div", { className: Al.Tp }),
                          (0, E.jsx)("div", {
                              className: Al.Qs,
                              children: e
                                  ? (0, E.jsx)(As, { premiumSubscription: i })
                                  : (0, E.jsx)(mG, { premiumSubscription: i }),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t["+CbP2v"]), j.intl.string(j.t.Nn1lJy)],
    }),
    Aa = (0, a.zZ)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [Ar] }),
    Ao = (0, a.t_)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => j.intl.string(j.t["+CbP2v"]),
        buildLayout: () => [Aa],
    }),
    Au = (0, a.i4)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["+CbP2v"]),
        icon: gS._,
        buildLayout: () => [Ao],
    });
var Ad = i(153659),
    Ac = i(155984),
    Ag = i(357758),
    Am = i(262077),
    AA = i(696986),
    Ah = i(819411);
function AE(e) {
    let { onClickManageSubscription: t, count: i } = e;
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsx)(eP.D, { variant: "heading-md/bold", children: j.intl.string(j.t["KzCF/6"]) }),
            (0, E.jsx)(AA.h, { size: 4 }),
            (0, E.jsx)(es.E, { variant: "text-md/normal", className: Ah.yV, children: j.intl.string(j.t["3D7qCu"]) }),
            (0, E.jsx)(AA.h, { size: 24 }),
            (0, E.jsxs)("div", {
                className: Ah.Nr,
                children: [
                    (0, E.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: Ah.RI }),
                    (0, E.jsxs)("div", {
                        className: Ah.FS,
                        children: [
                            (0, E.jsx)(eP.D, {
                                variant: "heading-xl/semibold",
                                className: Ah.wx,
                                children: j.intl.string(j.t["KzCF/6"]),
                            }),
                            (0, E.jsx)(es.E, {
                                variant: "text-md/normal",
                                className: Ah.h_,
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
var AS = i(872351),
    AT = i(9113),
    Ax = i(599941),
    Ap = i(384684),
    Af = i(2242);
let AN = [];
var A_ = i(912851),
    AI = i(146795);
let AC = (e) => {
    let { label: t, onClick: i, submitting: n } = e;
    return (0, E.jsx)(en.D, {
        onClick: n ? void 0 : i,
        className: AI.x6,
        children: (0, E.jsxs)("div", {
            className: AI.hQ,
            children: [
                n
                    ? (0, E.jsx)(df.y, { type: df.y.Type.PULSING_ELLIPSIS, className: AI.__invalid_spinner })
                    : (0, E.jsx)(es.E, { variant: "text-md/medium", className: AI.Pf, children: t }),
                (0, E.jsx)(el.a, { size: "md", color: "currentColor", className: AI.UE }),
            ],
        }),
    });
};
var Ab = i(465932),
    Ay = i(543767),
    Av = i(420139),
    Aj = i(790284),
    AO = i(636194),
    AR = i(624456),
    AD = i(710144),
    AL = i(815332),
    AP = i(162093),
    AG = i(969389);
let AM = (e) => {
    let { transitionState: t, groupListing: i, listing: n, subscription: s, onClose: l } = e,
        r = (0, sZ.GV)(),
        { analyticsLocations: a } = (0, nZ.Ay)(e1.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
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
                        return i(!0), await dy.M2(t, e), !0;
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
        g = n.role_benefits.benefits.filter((e) => e.ref_type === Af.bN.CHANNEL),
        m = n.role_benefits.benefits.filter((e) => e.ref_type === Af.bN.INTANGIBLE),
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
                (0, E.jsx)(AP.x, { listingId: n.id, guildId: i.guild_id, className: AG.P }),
            ],
        }),
    });
};
var AU = i(319225),
    AV = i(746080),
    Ak = i(47685);
let Aw = (e) => {
        let { label: t, value: i, showInfoIcon: n, infoIconTooltipText: s } = e;
        return (0, E.jsxs)("div", {
            className: Ak.L0,
            children: [
                (0, E.jsxs)("div", {
                    className: Ak.a5,
                    children: [
                        (0, E.jsx)(eP.D, { variant: "heading-deprecated-12/semibold", className: Ak.HU, children: t }),
                        n &&
                            (0, E.jsx)(tr.m, {
                                text: s,
                                children: (0, E.jsx)(lJ.m, { size: "xs", color: "currentColor", className: Ak.Mo }),
                            }),
                    ],
                }),
                (0, E.jsx)(eP.D, { variant: "heading-xl/semibold", className: Ak.sx, children: i }),
            ],
        });
    },
    AB = (e) => {
        let { subscription: t } = e,
            { analyticsLocations: i } = (0, nZ.Ay)(),
            [n] = (0, Ay.YV)({
                subscriptionId: t.id,
                renewal: !0,
                analyticsLocations: i,
                analyticsLocation: e1.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
            }),
            s = (0, g.bG)([d4.A], () => d4.A.hasFetchedPaymentSources);
        return null != n && s ? (0, E.jsx)(Av.A, { subscription: t, currentInvoicePreview: n }) : (0, E.jsx)(df.y, {});
    },
    AF = (e) => {
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
                      className: Ak.__invalid_rowButtons,
                      children: i
                          ? (0, E.jsx)(eG.$, {
                                variant: "primary",
                                text: j.intl.string(j.t.y3mAE4),
                                onClick: r,
                                loading: n,
                            })
                          : (0, E.jsxs)(E.Fragment, {
                                children: [
                                    !t && !s && (0, E.jsx)(AC, { label: j.intl.string(j.t.FRbWR8), onClick: a }),
                                    (0, E.jsx)(AC, { label: j.intl.string(j.t.Dx0lF7), onClick: l }),
                                ],
                            }),
                  }),
              });
    },
    Az = (e) => {
        let { subscription: t } = e,
            {
                listing: i,
                groupListing: n,
                guild: s,
                expanded: l,
                handleToggleExpanded: r,
                subscriptionInfo: a,
            } = (function (e) {
                let t = (0, AR.M)(e),
                    i = (0, g.bG)([AO.A], () => AO.A.getSubscriptionListingForPlan(t)),
                    n = (0, g.bG)([AO.A], () =>
                        null != i ? AO.A.getSubscriptionGroupListingForSubscriptionListing(i.id) : null,
                    ),
                    s = (0, g.bG)([ec.A], () => ec.A.getGuild(n?.guild_id)),
                    [l, r] = S.useState(!1),
                    { fetchSubscriptionsSettings: a } = (0, Ax.XE)();
                S.useEffect(() => {
                    l && null != s && null == AO.A.getSubscriptionSettings(s.id) && a(s.id);
                }, [l, s, a]);
                let o =
                    null == i
                        ? void 0
                        : (function (e) {
                              let { subscription: t } = e,
                                  i = r4()(t.currentPeriodEnd).format("M/D/YY"),
                                  n = null != t.price ? (0, dR.$g)(t.price, t.currency) : "",
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
                    handleToggleExpanded: () => r((e) => !e),
                    listing: i,
                    groupListing: n,
                    subscriptionInfo: o,
                };
            })(t),
            [o, d] = S.useState(!1),
            c = (0, sZ.GV)(),
            { analyticsLocations: m } = (0, nZ.Ay)(),
            { shouldHideGuildPurchaseEntryPoints: A } = (0, Ab.MH)(s?.id),
            h = t?.isPurchasedViaAppleGeneric;
        if (null == n || null == i || null == a) return null;
        let T = async () => {
                try {
                    d(!0),
                        await dy.QP(t, m),
                        (0, AU.E)({ title: j.intl.string(j.t.oPV2cy), body: j.intl.string(j.t.DdRizV) });
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
            className: Ak.kL,
            children: [
                (0, E.jsx)(AD.A, {
                    onClick: r,
                    className: Ak.N1,
                    children: (e) => {
                        let { areaRef: t, handleStopPropagation: n } = e;
                        return (0, E.jsxs)(E.Fragment, {
                            children: [
                                null != s && (0, E.jsx)(g8.Ay, { guild: s, active: !0, size: g8.Ay.Sizes.MEDIUM }),
                                (0, E.jsxs)("div", {
                                    className: Ak.if,
                                    children: [
                                        (0, E.jsx)(es.E, {
                                            variant: "text-md/medium",
                                            className: Ak.J5,
                                            children: null != s ? s.name : j.intl.string(j.t["He+cmd"]),
                                        }),
                                        (0, E.jsxs)("div", {
                                            className: Ak.xp,
                                            children: [
                                                (0, E.jsx)(es.E, {
                                                    variant: "text-sm/normal",
                                                    className: Ak.KR,
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
                                                                      className: Ak.qc,
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
                                        className: e6()(Ak.D6, { [Ak.S7]: l }),
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
                              (0, E.jsx)("div", { className: Ak.yF }),
                              (0, E.jsx)(AL.A, { groupListingId: n.id, subscription: t, className: Ak.kE }),
                              (0, E.jsxs)("div", {
                                  className: Ak.Zx,
                                  children: [
                                      (0, E.jsx)(Aw, { label: I, value: _ }),
                                      (0, E.jsx)(Aw, {
                                          label: j.intl.string(j.t.dltUMH),
                                          value: f,
                                          showInfoIcon: C,
                                          infoIconTooltipText: C ? j.intl.string(j.t["/q6fpa"]) : void 0,
                                      }),
                                      (0, E.jsx)(Aw, { label: j.intl.string(j.t.AOcwWB), value: N }),
                                  ],
                              }),
                              (0, E.jsx)(AA.h, { size: 16 }),
                              !x &&
                                  !h &&
                                  (0, E.jsx)(s4.D, {
                                      label: j.intl.string(j.t.wmMFvA),
                                      children: (0, E.jsx)(AB, { subscription: t }),
                                  }),
                              !b &&
                                  (0, E.jsx)(AF, {
                                      isTrial: C,
                                      isCancelled: x,
                                      isResubscribing: o,
                                      shouldHideRoleSubscriptionEntryPoints: A,
                                      onCancelSubscriptionClick: () => {
                                          if (null != s) {
                                              var e;
                                              (e = { groupListing: n, listing: i, subscription: t }),
                                                  (0, K.openModal)((t) => (0, E.jsx)(AM, { ...t, ...e }));
                                          }
                                      },
                                      onChangePlanClick: () => {
                                          null != s &&
                                              ((0, s7.pX)(U.BVt.CHANNEL(s.id, AV.VV.ROLE_SUBSCRIPTIONS)),
                                              (0, sH.default)(),
                                              A_.A.show(
                                                  U.kqX.BACK_TO_PREVIOUS_SCREEN,
                                                  void 0,
                                                  j.intl.string(j.t.DvbaM4),
                                                  () => {
                                                      Aj.A.setState({ subsection: nw.nR }),
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
var AX = i(170272);
let AY = (e) => {
    let { onGoBack: t } = e,
        i = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, g.bG)([Ap.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [Ap.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                i = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (i = !0);
                            }),
                            i)
                                ? Af.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? Af.M_.NONE
                                  : Af.M_.IN_SUBSCRIPTION_SERVER;
                        })([Ap.A]),
                    ) === Af.M_.SUBSCRIBED,
                i = (0, g.bG)([d7.A], () => d7.A.getActiveGuildSubscriptions()),
                n = S.useRef(!1);
            return (
                S.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: i, hasRoleSubscriptions: n } = e,
                            s = d7.A.getActiveGuildSubscriptions();
                        return (
                            ((s?.length ?? 0) === 0 && !!n) || (!!t && !i) || (!i && !d7.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: n.current }) &&
                        ((n.current = !0), dy.hP());
                }, [e, t]),
                i ?? AN
            );
        })(),
        { loading: n } = (0, Ax.eb)(i);
    return ((0, AT.A)(dP.Fr ? "role-subscriptions-user-setting" : void 0), n)
        ? (0, E.jsx)(df.y, {})
        : 0 === i.length
          ? null
          : (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(eG.$, { text: j.intl.string(j.t.hqyhKQ), icon: AS.z, variant: "secondary", onClick: t }),
                    (0, E.jsx)(AA.h, { size: 10 }),
                    (0, E.jsx)(i_.n, {
                        label: j.intl.string(j.t["KzCF/6"]),
                        description: j.intl.string(j.t["Y+ucR7"]),
                        children: (0, E.jsx)("div", {
                            className: AX.A,
                            children: i.map((e) => (0, E.jsx)(Az, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var AH = i(327479),
    AK = i(334335);
function AW(e) {
    let { onClickManageSubscription: t, count: i } = e;
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsx)(eP.D, { variant: "heading-md/bold", children: j.intl.string(j.t["48ywCu"]) }),
            (0, E.jsx)(AA.h, { size: 4 }),
            (0, E.jsx)(es.E, { variant: "text-md/normal", className: AK.yV, children: j.intl.string(j.t.VWxmSo) }),
            (0, E.jsx)(AA.h, { size: 24 }),
            (0, E.jsxs)("div", {
                className: AK.Nr,
                children: [
                    (0, E.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: AK._e }),
                    (0, E.jsxs)("div", {
                        className: AK.FS,
                        children: [
                            (0, E.jsx)(eP.D, {
                                variant: "heading-xl/semibold",
                                className: AK.wx,
                                children: j.intl.string(j.t["48ywCu"]),
                            }),
                            (0, E.jsx)(es.E, {
                                variant: "text-md/normal",
                                className: AK.h_,
                                children: j.intl.format(j.t["/esXLj"], { numSubscriptions: i }),
                            }),
                        ],
                    }),
                    (0, E.jsx)(AH.A, { onClick: t, text: j.intl.string(j.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var AZ = i(548411),
    AQ = i(417098),
    Aq = i(143582),
    AJ = i(915043),
    A$ = i(920087);
function A0(e) {
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
        className: e6()(A$.iE, t),
        children: [
            (0, E.jsx)("div", { className: e6()(A$.wx, n), children: i }),
            l && (0, E.jsx)("div", { className: A$.Qs, children: s }),
        ],
    });
}
var A1 = i(885996),
    A2 = i(144165),
    A3 = i(664121),
    A6 = i(950305),
    A4 = i(943775),
    A7 = i(123791),
    A5 = i(900797),
    A8 = i(632510);
let A9 = S.createContext({ isOpen: !1, toggleOpen: () => {} });
function he(e) {
    let { children: t } = e,
        [i, n] = S.useReducer((e) => !e, !1),
        s = S.useMemo(() => ({ isOpen: i, toggleOpen: n }), [i]);
    return (0, E.jsx)(A9.Provider, { value: s, children: t(i) });
}
he.Toggle = function (e) {
    let { className: t, text: i } = e,
        { isOpen: n, toggleOpen: s } = S.useContext(A9),
        l = n ? A5.t : el.a,
        r = null != i ? i : n ? j.intl.string(j.t.fgq1gs) : j.intl.string(j.t.XJuakA);
    return (0, E.jsxs)(en.D, {
        className: e6()(A8.L, t),
        onClick: s,
        children: [
            (0, E.jsx)(es.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, E.jsx)(l, { size: "sm", color: "currentColor" }),
        ],
    });
};
var ht = i(243217),
    hi = i(328968),
    hn = i(163437),
    hs = i(3432);
function hl(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var hr = i(184451),
    ha = (((s = {})[(s.LOADING = 0)] = "LOADING"), (s[(s.DONE = 1)] = "DONE"), (s[(s.ERROR = 2)] = "ERROR"), s);
function ho(e) {
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
        } = (0, g.cf)([cX.A, cY.A, hi.A, ec.A], () => {
            let e,
                i = cX.A.get(r),
                n = null != i ? cY.A.get(i.skuId) : void 0,
                a = n?.applicationId,
                o = null != i ? hi.A.getForSKU(i.skuId) : null,
                u = null != o && (0, hn.PJ)(o.skuFlags),
                d = u && null != s ? ec.A.getGuild(s) : void 0,
                c = (0, hn.Uo)(t, n),
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
        f = S.useMemo(() => (null != p ? (0, A4.A)(p, 100) : null), [p]),
        N = m?.deleted ?? !1,
        _ = null != m && (0, hn.Se)(m),
        I = t.status === U.Dmq.PAST_DUE,
        { analyticsLocations: C } = (0, nZ.Ay)(),
        [b] = (0, Ay.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: C,
            analyticsLocation: e1.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        y = hl(t.currentPeriodEnd),
        v = 0 === n;
    return (0, E.jsxs)(A0, {
        headerClassName: hr.dL,
        header:
            !1 === v
                ? (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsxs)("div", {
                              className: hr.VW,
                              children: [
                                  null != f &&
                                      (0, E.jsx)(A2._, { src: f.href, imageClassName: hr.Z2, width: 40, height: 40 }),
                                  (0, E.jsxs)("div", {
                                      className: hr.aF,
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
                              className: hr.Pz,
                              children:
                                  null != p &&
                                  null != u &&
                                  null != m &&
                                  (0, E.jsx)(hm, {
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
                : (0, E.jsx)(df.y, { type: df.t.PULSING_ELLIPSIS }),
        children: [
            A &&
                (0, E.jsx)(hg, {
                    type: "warning",
                    title: _
                        ? j.intl.formatToPlainString(j.t.QOnM1y, { subscriptionPeriodEnd: y })
                        : j.intl.formatToPlainString(j.t.HOaZu8, { subscriptionPeriodEnd: y }),
                }),
            !A && h && (0, E.jsx)(hg, { type: "warning", title: j.intl.string(j.t.SmSP8Q) }),
            I && (0, E.jsx)(hg, { type: "danger", title: j.intl.string(j.t.fvOqBo) }),
            (0, E.jsxs)("div", {
                className: hr.zH,
                children: [
                    (0, E.jsx)(hc, {
                        title: j.intl.string(j.t["5D/KEH"]),
                        content: d
                            ? (0, E.jsxs)(E.Fragment, {
                                  children: [
                                      (0, E.jsxs)("span", {
                                          className: hr.yW,
                                          children: [(0, E.jsx)(A3.R, { size: "xs" }), j.intl.string(j.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, E.jsxs)("span", {
                                              className: hr._t,
                                              children: [
                                                  (0, E.jsx)(es.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: j.intl.format(j.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, E.jsx)(g8.Ay, { guild: c, size: g8.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, E.jsxs)("span", {
                                  className: hr.yW,
                                  children: [(0, E.jsx)(A6.n, { size: "xs" }), j.intl.string(j.t["6anEVv"])],
                              }),
                    }),
                    (0, E.jsx)(hu, { invoicePreview: b, subscriptionPlan: o }),
                    (0, E.jsx)(hc, {
                        title: j.intl.string(j.t.dnUzb6),
                        content: hl(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, E.jsx)(hd, { isCancelled: A, subscriptionPeriodEnd: y, renewalPlan: x }),
                ],
            }),
            (0, E.jsx)(hh, {
                subscription: t,
                currentInvoicePreview: b,
                loadingState: n,
                isDeleted: N,
                isCancelled: A,
            }),
            null != p &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, E.jsx)(hA, { appId: p.id, listingBenefits: u.benefits }),
        ],
    });
}
function hu(e) {
    let { subscriptionPlan: t, invoicePreview: i } = e;
    if (null == t) return (0, E.jsx)(hc, { title: j.intl.string(j.t.KI7ERx), content: "" });
    let n = (0, dR.CE)((0, dR.$g)(t.price, t.currency), t.interval, t.intervalCount),
        s = i?.findInvoiceItemByPlanId(t.id);
    if (null == s) return (0, E.jsx)(hc, { title: j.intl.string(j.t.KI7ERx), content: n });
    let l = (0, dR.CE)((0, dR.$g)(s.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, E.jsx)(hc, {
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
function hd(e) {
    let { isCancelled: t, subscriptionPeriodEnd: i, renewalPlan: n } = e;
    if (null != n) {
        let e = (0, dR.CE)((0, dR.$g)(n.price, n.currency), n.interval, n.intervalCount);
        return (0, E.jsx)(hc, {
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
    return (0, E.jsx)(hc, { title: t ? j.intl.string(j.t.enxcAl) : j.intl.string(j.t["Ms+6Zq"]), content: i });
}
function hc(e) {
    let { title: t, content: i } = e;
    return (0, E.jsxs)("div", {
        className: hr.nM,
        children: [
            (0, E.jsx)(es.E, { variant: "text-sm/medium", children: t }),
            (0, E.jsx)(es.E, { variant: "text-sm/medium", className: hr.u4, children: i }),
        ],
    });
}
function hg(e) {
    let { type: t, title: i } = e;
    return (0, E.jsx)(tf.p, {
        messageType: "warning" === t ? tf.Y.WARNING : tf.Y.ERROR,
        className: hr.Xm,
        children: (0, E.jsx)(es.E, { variant: "text-sm/normal", children: i }),
    });
}
function hm(e) {
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
        c = (0, hn.Se)(s),
        { analyticsLocations: m } = (0, nZ.Ay)(),
        [A, h] = S.useState(!1),
        T = (0, A7.C)(t.id),
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
        f = 0 !== p.length,
        N = async () => {
            try {
                h(!0);
                let { subscription: e } = await (0, dy.QP)(l, m);
                if (null == e) return;
                (0, K.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([i.e("47869"), i.e("52396")]).then(i.bind(i, 115623));
                    return (i) => (0, E.jsx)(t, { ...i, storeListing: n, subscription: ht.A.createFromServer(e) });
                });
            } finally {
                h(!1);
            }
        };
    return (0, E.jsxs)("div", {
        className: hr.fw,
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
                            (0, K.openModalLazy)(async () => {
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
function hA(e) {
    let { appId: t, listingBenefits: i } = e;
    return (0, E.jsx)(he, {
        children: (e) =>
            (0, E.jsxs)("div", {
                className: hr.PX,
                children: [
                    (0, E.jsxs)("div", {
                        className: hr.wV,
                        children: [
                            e && (0, E.jsx)(es.E, { variant: "text-sm/semibold", children: j.intl.string(j.t.mORL67) }),
                            (0, E.jsx)(he.Toggle, {
                                className: hr.Bh,
                                text: e ? j.intl.string(j.t.gsbFAw) : j.intl.string(j.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? i.map((e) => {
                              let { id: i, name: n, description: s, icon: l } = e;
                              return (0, E.jsx)(A1.FY, { header: n, icon: (0, hs.N)(t, l), description: s }, i);
                          })
                        : null,
                ],
            }),
    });
}
function hh(e) {
    let { subscription: t, currentInvoicePreview: i, loadingState: n, isDeleted: s, isCancelled: l } = e;
    return null == i
        ? null
        : 0 === n
          ? (0, E.jsx)("div", {
                className: hr.Ji,
                children: (0, E.jsx)(s4.D, {
                    label: j.intl.string(j.t.azZaZa),
                    children: (0, E.jsx)(df.y, { type: df.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === n
            ? (0, E.jsx)("div", {
                  className: hr.Ji,
                  children: (0, E.jsxs)(AQ.$T, {
                      color: AQ.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          j.intl.format(j.t.IIHUUF, { subscriptionId: t.id }),
                          (0, E.jsx)("br", {}),
                          j.intl.format(j.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, E.jsx)("div", {
                  className: hr.Ji,
                  children: (0, E.jsx)(s4.D, {
                      label: j.intl.string(j.t.azZaZa),
                      children: (0, E.jsx)(Av.A, { subscription: t, currentInvoicePreview: i, disabled: s || l }),
                  }),
              });
}
var hE = (((l = {}).HOME = "HOME"), (l.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), l);
i(938796);
var hS = i(38405);
let hT = (0, g.UT)(cX.A, {
    getQueryId: U.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = cX.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && hS.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, gx.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var hx = i(240248),
    hp = i(237218),
    hf = i(988325);
function hN(e) {
    let { children: t, lineClamp: i = 2, ...n } = e,
        [s, l] = S.useState(!1),
        [r, a] = S.useState(null),
        o =
            null != r &&
            (0, E.jsx)("button", {
                className: hf.x6,
                onClick: () => l((e) => !e),
                children: (0, E.jsxs)(es.E, {
                    className: hf.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        s ? j.intl.string(j.t["JQX/Pb"]) : j.intl.string(j.t.Fbrd8J),
                        s
                            ? (0, E.jsx)(A5.t, { color: er.A.colors.TEXT_BRAND, size: "xs" })
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
                    className: hf.Qs,
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
var h_ = i(827991);
function hI(e) {
    let { cta: t, storeListing: i, className: n } = e,
        { applicationId: s, benefits: l, description: r } = i,
        a = S.useMemo(() => (null == i.thumbnail ? null : (0, hp.t)(s, i.thumbnail, 256)), [s, i.thumbnail]),
        { data: o } = hT(i.skuId),
        u = S.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, dR._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, E.jsxs)(A0, {
              className: e6()(h_.iE, n),
              header: (0, E.jsxs)(E.Fragment, {
                  children: [
                      (0, E.jsxs)("div", {
                          className: h_.qd,
                          children: [
                              null != a &&
                                  (0, E.jsx)(A2._, { src: a.href, imageClassName: h_.rW, width: 48, height: 48 }),
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
                  !(0, hx.uJ)(r) &&
                      (0, E.jsx)("div", {
                          className: h_.h_,
                          children: (0, E.jsx)(hN, { variant: "text-sm/medium", children: r }),
                      }),
                  null != l &&
                      l.length > 0 &&
                      (0, E.jsx)("div", {
                          className: h_.PX,
                          children: l.map((e) => {
                              let { id: t, name: i, description: n, icon: l } = e;
                              return (0, E.jsx)(A1.FY, { header: i, icon: (0, hs.N)(s, l), description: n }, t);
                          }),
                      }),
              ],
          });
}
var hC = i(185438),
    hb = i(386011);
function hy(e) {
    let {
            app: t,
            currentSubscription: i,
            currentListing: n,
            alternativeListings: s,
            navigateToHome: l,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, A4.A)(t, 100),
        u = (0, hn.PJ)(r.flags),
        d = u ? A3.R : A6.n,
        c = u ? j.intl.string(j.t["46YF2D"]) : j.intl.string(j.t.fFyGiA),
        m = i.metadata?.application_subscription_guild_id,
        A = (0, g.bG)([ec.A], () => (u && null != m ? ec.A.getGuild(m) : void 0), [m, u]),
        h = (0, g.bG)([cY.A], () => {
            if (null != a) return cY.A.get(a);
        }, [a]),
        S = hl(i.currentPeriodEnd);
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsxs)("div", {
                className: hb.wx,
                children: [
                    null != o && (0, E.jsx)(A2._, { src: o.href, imageClassName: hb.Z2, width: 48, height: 48 }),
                    (0, E.jsxs)("div", {
                        children: [
                            (0, E.jsx)(eP.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, E.jsxs)("div", {
                                className: hb.p4,
                                children: [
                                    (0, E.jsxs)(eP.D, {
                                        variant: "heading-md/normal",
                                        className: hb.N4,
                                        children: [(0, E.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != A &&
                                        (0, E.jsxs)(E.Fragment, {
                                            children: [
                                                (0, E.jsx)(es.E, { variant: "text-md/normal", children: "\u2022" }),
                                                (0, E.jsxs)("span", {
                                                    className: hb.vP,
                                                    children: [
                                                        (0, E.jsx)(g8.Ay, { guild: A, size: g8.Ay.Sizes.SMOL }),
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
            (0, E.jsx)(he, {
                children: (e) =>
                    (0, E.jsxs)("div", {
                        className: hb._B,
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
                            (0, E.jsx)(he.Toggle, {
                                text: e ? j.intl.string(j.t["1Rkq/E"]) : j.intl.string(j.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, E.jsxs)("div", {
                className: hb.x0,
                children: [
                    (0, E.jsx)(hI, {
                        storeListing: n,
                        className: hb.o3,
                        cta: (0, E.jsxs)("div", {
                            className: hb.cJ,
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
                                  hI,
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
                            : (0, E.jsx)(hv, { storeListing: e, guildId: m, navigateToHome: l }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function hv(e) {
    let { storeListing: t, guildId: i, navigateToHome: n } = e,
        { openModal: s } = (0, hC.A)({
            analyticsLocation: U.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: i,
            disableGuildSelector: !0,
            onComplete: n,
        });
    return (0, E.jsx)(hI, {
        storeListing: t,
        cta: (0, E.jsx)(eG.$, { variant: "primary", size: "sm", text: j.intl.string(j.t["+KwmBt"]), onClick: s }),
    });
}
class hj extends S.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, E.jsxs)(AQ.$T, {
                  color: AQ.Hv.DANGER,
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
function hO(e) {
    let { subscriptions: t, updateHeader: i } = e,
        [n, s] = S.useState({ route: hE.HOME }),
        { route: l } = n,
        r = () => {
            s({ route: hE.HOME });
        },
        a = (e) => {
            s({ route: hE.SWITCH_APP_PLANS, ...e }), i(j.intl.string(j.t.VFqtkP), r);
        },
        [o, u] = S.useState({});
    S.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: ha.LOADING })),
                (0, Aq._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: ha.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: ha.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, AJ.E)(),
        c = d !== AJ.mJ.LOADED;
    switch (l) {
        case hE.HOME:
            return (0, E.jsx)(E.Fragment, {
                children: t.map((e) =>
                    (0, E.jsx)(
                        hj,
                        {
                            subscription: e,
                            children: (0, E.jsx)(ho, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? ha.LOADING : (o[e.id] ?? ha.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case hE.SWITCH_APP_PLANS:
            let { route: g, ...m } = n;
            return (0, E.jsx)(hy, { ...m, navigateToHome: r });
        default:
            (0, N.xb)(l);
    }
}
var hR = i(470464);
function hD(e) {
    let { onGoBack: t } = e,
        i = (0, g.yK)(
            [d7.A],
            () =>
                d7.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [n, s] = S.useState();
    return (
        null == n && (n = (0, E.jsx)(hL, { onBack: t, title: j.intl.string(j.t["DB/m9a"]) })),
        (0, E.jsxs)("div", {
            children: [
                n,
                (0, E.jsx)("div", {
                    className: hR.A,
                    children: (0, E.jsx)(hO, {
                        subscriptions: i,
                        updateHeader: (e, t) => {
                            s(
                                (0, E.jsx)(hL, {
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
function hL(e) {
    let { onBack: t, title: i } = e;
    return (0, E.jsxs)("div", {
        className: hR.D,
        children: [
            (0, E.jsx)(lQ.K, {
                "aria-label": j.intl.string(j.t["13/7kX"]),
                icon: () => (0, E.jsx)(AZ.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, E.jsx)(eP.D, { variant: "heading-lg/semibold", children: i }),
        ],
    });
}
var hP = i(366999),
    hG = i(466919),
    hM = i(441924);
function hU(e) {
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
        ? ((t = j.intl.string(hG.default["/S02sx"])), (i = j.intl.string(hG.default.OPJNST)))
        : n
          ? ((t = j.intl.string(j.t["hT6i/0"])),
            (i = null != a ? j.intl.format(j.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = j.intl.string(j.t["3G0CTC"])),
            (i = r === sq.xc.FP_SUB_PAUSED ? j.intl.format(j.t.MMvaIG, { resumeDate: l.toDate() }) : null));
    let u = e6()({ [hM.Hs]: n, [hM.mT]: !n }),
        d = e6()({ [hM.CQ]: n, [hM.ZM]: !n }),
        c = e6()({ [hM.EM]: !n });
    return (0, E.jsxs)("div", {
        className: hM.r6,
        children: [
            (0, E.jsxs)("div", {
                className: hM.Nv,
                children: [
                    (0, E.jsx)(eP.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== i && (0, E.jsx)(es.E, { variant: "text-sm/normal", children: i }),
                ],
            }),
            !o &&
                (0, E.jsx)("div", {
                    className: hM.ZS,
                    children: (0, E.jsx)("div", {
                        className: u,
                        children: (0, E.jsx)(es.E, { variant: "text-sm/semibold", className: d, children: s }),
                    }),
                }),
        ],
    });
}
let hV = function (e) {
    let { fractionalPremiumInfo: t, className: i, activationDate: n, hasPremiumGroup: s } = e,
        l = (0, uT.kX)(t),
        r = l.length > 0,
        a = (0, hP.Ay)(t.endsAt, hP.yE.SHORT_TIME),
        o = r ? l : a;
    return (0, E.jsx)("div", {
        children: (0, E.jsxs)("div", {
            className: e6()(i, hM.f8),
            children: [
                (0, E.jsx)("div", {
                    className: hM.J_,
                    children: (0, E.jsxs)("div", {
                        className: hM.Bh,
                        children: [
                            (0, E.jsx)("div", {
                                className: hM.xt,
                                children: (0, E.jsx)(uu.t, { size: "md", color: "white", className: hM.T8 }),
                            }),
                            (0, E.jsx)("div", {
                                className: hM.pt,
                                children: (0, E.jsx)(eP.D, {
                                    variant: "heading-md/semibold",
                                    children: j.intl.string(j.t.DFMPWS),
                                }),
                            }),
                            (0, E.jsx)(es.E, {
                                className: hM.PJ,
                                variant: "text-md/semibold",
                                children: l.length > 0 ? l : j.intl.string(j.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, E.jsx)(hU, {
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
var hk = i(868942);
function hw(e) {
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
    if (a) t = j.intl.string(hG.default["5asczk"]);
    else if (c && null != l) {
        let e;
        e = new Date(l.status === U.Dmq.PAUSED && null != l.pauseEndsAt ? l.pauseEndsAt : l.currentPeriodEnd);
        let i = (0, uT._e)(e, r);
        t = j.intl.formatToPlainString(j.t["5CNRRA"], { date: i ?? 0 });
    } else t = j.intl.formatToPlainString(j.t.eNXZ5O, { planName: m });
    let A = i.hasFreePremium() || (null != l && l.isPurchasedExternally);
    return (0, E.jsxs)("div", {
        className: hM.Bh,
        children: [
            (0, E.jsx)("div", {
                className: e6()({
                    [hM.sr]: o.skuId === sq.pe.TIER_0,
                    [hM.lP]: o.skuId === sq.pe.TIER_1,
                    [hM.eb]: o.skuId === sq.pe.TIER_2,
                }),
                children: (0, E.jsx)(uu.t, { size: "md", color: "currentColor", className: hM.Kk }),
            }),
            (0, E.jsxs)("div", {
                className: hM.pt,
                children: [
                    (0, E.jsx)(eP.D, {
                        variant: "heading-md/semibold",
                        children: j.intl.format(j.t.LzobT9, { planName: m }),
                    }),
                    !A &&
                        (0, E.jsx)(eP.D, {
                            className: hM.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, E.jsx)(es.E, {
                className: hM.PJ,
                variant: "text-md/semibold",
                children: j.intl.format(j.t["ess/xl"], { count: s }),
            }),
        ],
    });
}
let hB = function (e) {
    let { className: t, entitlements: i } = e,
        n = eZ()(Array.from(i))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: i, consumed: n } = e;
                return null != t && null != i && !n;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        s = (0, g.yK)([cL.A], () => cL.A.getUnactivatedFractionalPremiumUnits()),
        l = (0, g.bG)([d7.A], () => d7.A.getPremiumSubscription()),
        r = (0, g.bG)([d7.A], () => null == d7.A.getPremiumTypeSubscription()),
        a = Object.keys(n).some((e) => e === sq.gD.PREMIUM_MONTH_TIER_1),
        o = (0, g.bG)([io.default], () => io.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsx)("div", {
                className: e6()(t, hM.xF, hM.J_),
                children: Object.keys(n).map((e) =>
                    (0, E.jsx)(
                        hw,
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
                            className: hM.eT,
                            variant: "text-md/normal",
                            children: j.intl.string(j.t["VNr4+O"]),
                        }),
                        (0, E.jsx)(hk.i, {}),
                    ],
                }),
        ],
    });
};
var hF = i(50919);
function hz(e) {
    let t,
        { subscription: i, withOverheadSeparator: n } = e,
        { analyticsLocations: s } = (0, nZ.Ay)(),
        [l] = (0, Ay.YV)({
            subscriptionId: i.id,
            renewal: !0,
            analyticsLocations: s,
            analyticsLocation: e1.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == l) return null;
    let r = n ? hF.r : hF.a,
        a = l.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, uT.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = cX.A.get(o);
    tz()(null != u, "Missing plan");
    let d = (0, dR.$g)(l.total, l.currency);
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
function hX(e) {
    let { subscription: t, withOverheadSeparator: i } = e;
    return t.status === U.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, E.jsx)(hz, { subscription: t, withOverheadSeparator: i });
}
var hY = i(37397),
    hH = i(558808);
let hK = { [nw.nR]: "role_subscriptions_panel", [nw.PZ]: "application_subscriptions_panel" };
function hW() {
    return (0, E.jsx)(eb.Z, {
        className: hH.wb,
        type: eb.Z.Types.CUSTOM,
        children: (0, E.jsxs)(rn.A, {
            align: rn.A.Align.CENTER,
            children: [
                (0, E.jsx)(p.A, { game: null, size: p.M.SMALL, className: hH.pV }),
                (0, E.jsx)("span", { className: hH.O, children: j.intl.string(j.t["jy/hyj"]) }),
            ],
        }),
    });
}
function hZ(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, Ag._)(e, t));
}
function hQ() {
    let e = (0, g.bG)([cL.A], () => cL.A.getForApplication(sq.tv), [], hZ);
    return (
        S.useEffect(() => {
            (0, c1.LM)(sq.tv);
        }, []),
        (0, E.jsx)(i_.n, {
            label: j.intl.string(j.t["2GKrvn"]),
            description: j.intl.string(j.t.kNEjGm),
            children:
                null != e && uT.Ay.hasAccountCredit(e)
                    ? (0, E.jsx)(hB, { className: hH.fX, entitlements: e })
                    : (0, E.jsx)(hW, {}),
        })
    );
}
function hq() {
    return (0, E.jsx)("hr", { className: hH.hr });
}
let hJ = function () {
        var e;
        let t = (0, g.bG)([d7.A], () => d7.A.getPremiumTypeSubscription()),
            i = (0, Am.A)({ subscriptionFilter: (e) => hY.Hy.has(e.status) }),
            n = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
            s = i.length > 1,
            l = (0, g.bG)(
                [d4.A],
                () => (null != t && null != t.paymentSourceId ? d4.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, g.bG)([d7.A], () => d7.A.hasFetchedSubscriptions()),
            a = (0, g.bG)([dO.A], () => dO.A.isBusy),
            o = (0, gp.Y)(),
            d = Aj.A.useField("subsection");
        S.useEffect(() => {
            (0, rq._)(null != d ? hK[d] : u.X.SUBSCRIPTIONS_PANEL);
        }, [d]);
        let c = (0, g.bG)([d7.A], () => d7.A.getActiveApplicationSubscriptions()?.length ?? 0),
            m = (0, g.bG)(
                [d7.A],
                () =>
                    Object.values(d7.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === U.rzx.GUILD)
                        .filter((e) => e.status !== U.Dmq.ENDED).length,
            ),
            A = (0, g_.A)({ forceFetch: !0 }),
            h = (0, c7.ds)(),
            T = null !== t ? t.currentPeriodEnd : void 0,
            x =
                !(h && !(A.unactivatedUnits.length > 0)) &&
                (A.fractionalState !== sq.xc.NONE || A.unactivatedUnits.length > 0);
        return (S.useEffect(
            () => (
                sa.h.wait(() => {
                    (0, gx.zS)(), dy.hP(), (0, gT.CD)(), dy.$o();
                }),
                function () {
                    Aj.A.resetState();
                }
            ),
            [],
        ),
        eB.A.enabled)
            ? (0, E.jsx)(dT.A, {})
            : r && o
              ? d === nw.nR
                  ? (0, E.jsx)(AY, { onGoBack: () => Aj.A.setState({ subsection: null }) })
                  : d === nw.PZ
                    ? (0, E.jsx)(hD, { onGoBack: () => Aj.A.setState({ subsection: null }) })
                    : (0, E.jsx)("div", {
                          className: hH.kL,
                          children: (0, E.jsxs)("div", {
                              className: hH.Qs,
                              children: [
                                  s ? (0, E.jsx)(hY.Sb, {}) : null,
                                  null != t
                                      ? (0, E.jsx)(hY.Ay, {
                                            subscription: t,
                                            paymentSource: l,
                                            busy: a,
                                            subscriptions: i,
                                        })
                                      : (0, E.jsx)(hY.TC, {}),
                                  x &&
                                      ((e = !!n?.isPremiumWithPremiumGroup()),
                                      (0, E.jsxs)("section", {
                                          children: [
                                              (0, E.jsx)(eP.D, {
                                                  variant: "heading-md/bold",
                                                  className: hH.HL,
                                                  children: j.intl.string(j.t.Obre8v),
                                              }),
                                              (0, E.jsx)(es.E, {
                                                  variant: "text-md/normal",
                                                  className: hH.JU,
                                                  children: j.intl.format(j.t["7Zi06b"], {
                                                      helpCenterLink: tN.A.getArticleURL(
                                                          U.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, E.jsx)(hV, {
                                                  className: hH.fX,
                                                  fractionalPremiumInfo: A,
                                                  activationDate: T,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, E.jsx)(hQ, {}),
                                  m > 0 &&
                                      (0, E.jsxs)(E.Fragment, {
                                          children: [
                                              (0, E.jsx)(hq, {}),
                                              (0, E.jsx)(AE, {
                                                  count: m,
                                                  onClickManageSubscription: () => Aj.A.setState({ subsection: nw.nR }),
                                              }),
                                          ],
                                      }),
                                  c > 0 &&
                                      (0, E.jsxs)(E.Fragment, {
                                          children: [
                                              (0, E.jsx)(hq, {}),
                                              (0, E.jsx)(AW, {
                                                  count: c,
                                                  onClickManageSubscription: () => {
                                                      Aj.A.setState({ subsection: nw.PZ }),
                                                          G.default.track(
                                                              U.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                          );
                                                  },
                                              }),
                                          ],
                                      }),
                                  (0, E.jsx)(hq, {}),
                                  null != t ? (0, E.jsx)(hX, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, E.jsx)("div", { className: e6()(hH.kL, hH.Lq), children: (0, E.jsx)(df.y, {}) });
    },
    h$ = (0, a.E2)(u.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [j.intl.string(j.t.trSpHX), j.intl.string(j.t["2GKrvn"])],
        Component: () => (0, E.jsx)(hJ, {}),
    }),
    h0 = (0, a.zZ)(u.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [j.intl.string(j.t.trSpHX), j.intl.string(j.t["2GKrvn"])],
        buildLayout: () => [h$],
    }),
    h1 = (0, a.t_)(u.X.SUBSCRIPTIONS_PANEL, { useTitle: () => j.intl.string(j.t.trSpHX), buildLayout: () => [h0] }),
    h2 = (0, a.i4)(u.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.trSpHX),
        icon: Ad.L,
        usePersistentBadge: function () {
            return S.useMemo(
                () => ({
                    badgeType: h.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    useCustomBadge: () =>
                        (0, Ac.l)() ? (0, E.jsx)(l2.E, { size: "xs", color: er.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [],
            );
        },
        buildLayout: () => [h1],
    }),
    h3 = (0, a.WI)(u.X.BILLING_SECTION, {
        useTitle: () => j.intl.string(j.t.oeUm2s),
        buildLayout: () => [gE, Au, h2, gu, ca],
    });
var h6 = i(540999),
    h4 = i(306471),
    h7 = i(964355),
    h5 = i(172272);
let h8 = (0, a.zD)(u.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, g.bG)([oC.default], () => oC.default.isAxeEnabled),
        setValue: (e) => (0, oI.x)({ axeEnabled: e }),
    }),
    h9 = (0, a.zD)(u.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, g.bG)([oC.default], () => oC.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, oI.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var Ee = i(276086),
    Et = i(354328);
let Ei = (0, a.zD)(u.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, Et.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, Ee.L)("highlight_mana_components", e);
        },
    }),
    En = (0, a.zD)(u.X.HIGHLIGHT_MANA_TEXT, {
        useTitle: () => "Mana Text Migration Highlighter",
        useSubtitle: () =>
            "Outlines Mana Text/Heading components in green and all other rendered text in red, to spot text not yet migrated to Mana.",
        useValue: () => (0, Et.A)("highlight_mana_text"),
        setValue: (e) => {
            (0, Ee.L)("highlight_mana_text", e);
        },
    }),
    Es = (0, a.zD)(u.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, Et.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, Ee.L)("highlight_void_toggleables", e);
        },
    }),
    El = (0, a.sN)(u.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, g.bG)([oC.default], () => oC.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: h5.YR,
        markers: Array.from({ length: h5.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => h5.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            h5.Or.getState().setHorizontalSpacing(e);
        },
    }),
    Er = (0, a.zD)(u.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, g.bG)([oC.default], () => oC.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, oI.x)({ layoutDebuggingEnabled: e });
        },
    }),
    Ea = (0, a.sN)(u.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, g.bG)([oC.default], () => oC.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: h5.YR,
        markers: Array.from({ length: h5.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => h5.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            h5.Or.getState().setVerticalSpacing(e);
        },
    }),
    Eo = (0, a.zZ)(u.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [h9, Er, El, Ea, Ei, En, Es, h8],
    }),
    Eu = (0, a.zD)(u.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => D.HZ.useSetting(),
        setValue: (e) => {
            D.HZ.updateSetting(e);
        },
    });
var Ed = i(173936),
    Ec = i(260598),
    Eg = i(148810),
    Em = i(380610),
    EA = i(986238),
    Eh = i(727201),
    EE = i(274446);
let ES = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    ET = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function Ex(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class Ep extends S.Component {
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
            className: e6()(Eh.oS, iU.SX, EE.N, Eh.nM),
            children: [
                (0, E.jsx)(iO.A, {
                    className: e6()(Eh.lL, { [Eh.zi]: n }),
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
                                options: ET,
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
                                className: Eh.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: s,
                            }),
                        (0, E.jsxs)(es.E, {
                            variant: "text-sm/normal",
                            className: Eh.AS,
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
class Ef extends S.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, Em.bD)();
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
        return eZ().without(ES, ...t);
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
        let t = await (0, Eg.Zk)(e);
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
        (0, K.openModal)((t) => (0, E.jsx)(EN, { ...t, buildOverrides: e }));
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
                      Ep,
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
                      icon: Ed.q,
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
                    disabled: Ex(t ?? {}),
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
            ? (0, E.jsx)(df.y, { className: iU.QX })
            : null != n && 0 === Object.keys(n).length
              ? this.renderEmpty()
              : this.renderItems();
        let s = !i && !t && this.getAvailableProjects().length > 0,
            l =
                Ex(n ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
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
class EN extends S.Component {
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
            t = await (0, Eg.SB)(e);
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
        return Ex(this.props.buildOverrides ?? {});
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
            d = EA.fL.find((t) => t.value === e),
            c = s.map((e) => ({ id: e, label: e, value: e }));
        return (0, E.jsxs)(q.B, {
            gap: 20,
            children: [
                (0, E.jsx)(lZ.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: EA.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, E.jsx)(lZ.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: EA.VP,
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
                    : (0, E.jsx)(Ec.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: i,
                          error: n,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                (0, E.jsx)(Ec.f, {
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
let E_ = (0, a.E2)(u.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: Ef });
var EI = i(256311),
    EC = i(883600);
let Eb = (0, a.E2)(u.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, g.bG)([EC.A], () => EC.A.overrideId()),
            t = async (e) => {
                let t = EC.A.getChangelog(e, "en-US");
                return null != t ? t : ((await EI.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
            };
        return (0, E.jsx)(EB, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => EI.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var Ey = i(506774);
let Ev = new Date("2018-01-01"),
    Ej = (0, a.Tf)(u.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => D.pK.useSetting() === dL.default.fromTimestamp(Ev.getTime()),
        onClick: () => (Ey.w.set("lastChangeLogDate", Ev), D.pK.updateSetting(dL.default.fromTimestamp(Ev.getTime()))),
    }),
    EO = (0, a.zD)(u.X.DISABLE_APP_COLLECTIONS_CACHE, {
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
    ER = (0, a.zD)(u.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, g.bG)([oC.default], () => oC.default.isForcedCanary),
        setValue: (e) => {
            (0, oI.x)({ canary: e });
        },
    }),
    ED = (0, a.zD)(u.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, g.bG)([oC.default], () => oC.default.sourceMapsEnabled),
        setValue: (e) => (0, oI.x)({ sourceMapsEnabled: e }),
    }),
    EL = (0, a.zD)(u.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, g.bG)([oC.default], () => oC.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, oI.x)({ onlyShowPreviewAppCollections: e }),
    });
var EP = i(10094),
    EG = i(683760);
let EM = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: sq.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: sq.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: sq.PremiumTypes.TIER_2 },
    ],
    EU = (0, a.Hn)(u.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => EM,
        clearable: !0,
        useValue: () =>
            (0, g.bG)([EG.A], () => {
                let e = EG.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, EP.O)(null, void 0)
                : null === e
                  ? (0, EP.O)(void 0, void 0)
                  : (0, EP.O)(0 === e ? null : e, void 0);
        },
    });
var EV = i(246605),
    Ek = i(274184);
let Ew = (0, a.E2)(u.X.SURVEY_OVERRIDE, {
    useSearchTerms: () => ["survey override"],
    Component: function () {
        let e = (0, g.bG)([Ek.Ay], () => Ek.Ay.getSurveyOverride());
        return (0, E.jsx)(EB, {
            label: "Survey Override",
            description: "Provide a survey ID to override the survey shown to this user.",
            placeholder: "Enter Survey ID...",
            overrideId: e ?? null,
            setOverride: (e) => EV.xr(e),
            fetchOverride: (e) => EV.BC(e, !0) ?? null,
        });
    },
});
function EB(e) {
    let { label: t, description: i, placeholder: n, overrideId: s, setOverride: l, fetchOverride: r } = e,
        [a, o] = S.useState(s ?? ""),
        u = S.useRef(null),
        [d, c] = S.useState(0),
        g = () => {
            null != u.current && (clearTimeout(u.current), (u.current = null));
        };
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
let EF = (0, a.zZ)(u.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [EU, Ew, Eb, Ej, ER, Eu, EL, EO, ED, E_],
        useInlineNotice: () => ({
            type: h.lT.INLINE_NOTICE,
            noticeType: "info",
            useText: () => j.intl.format(j.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    Ez = (0, a.zD)(u.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, g.bG)([oC.default], () => oC.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, oI.x)({ logAnalyticsEvents: e }),
    }),
    EX = (0, a.zD)(u.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, g.bG)([oC.default], () => oC.default.isLoggingGatewayEvents),
        setValue: (e) => (0, oI.x)({ logGatewayEvents: e }),
    }),
    EY = (0, a.zD)(u.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, g.bG)([oC.default], () => oC.default.preventPopoutClose),
        setValue: (e) => (0, oI.x)({ preventPopoutClose: e }),
    }),
    EH = (0, a.zD)(u.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, g.bG)([oC.default], () => oC.default.logKeyboardMismatches),
        setValue: (e) => (0, oI.x)({ logKeyboardMismatches: e }),
    }),
    EK = (0, a.zD)(u.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, g.bG)([oC.default], () => oC.default.isLoggingOverlayEvents),
        setValue: (e) => (0, oI.x)({ logOverlayEvents: e }),
    }),
    EW = (0, a.zD)(u.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, g.bG)([oC.default], () => oC.default.isLoggingQuestEvents),
        setValue: (e) => (0, oI.x)({ logQuestEvents: e }),
    }),
    EZ = (0, a.zD)(u.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, g.bG)([oC.default], () => oC.default.isTracingRequests),
        setValue: (e) => (0, oI.x)({ trace: e }),
    }),
    EQ = (0, a.zZ)(u.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [EX, EK, EZ, Ez, EH, EY, EW] }),
    Eq = (0, a.t_)(u.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [EF, EQ, Eo],
    }),
    EJ = (0, a.i4)(u.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: h4.V,
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
                } = (0, g.cf)([oC.default, h6.A, io.default], () => ({
                    layoutDebuggingEnabled: oC.default.layoutDebuggingEnabled,
                    isDeveloper: h6.A.isDeveloper,
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
                { horizontalSpacing: A, verticalSpacing: h } = (0, h5.Or)(),
                { setHorizontalSpacing: S, setVerticalSpacing: T } = h5.Or.getState(),
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
                                                          (0, E.jsx)(h7.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: A,
                                                              minValue: 0,
                                                              maxValue: h5.YR,
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
                                                          (0, E.jsx)(h7.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: h,
                                                              minValue: 0,
                                                              maxValue: h5.YR,
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
        buildLayout: () => [Eq],
    });
var E$ = i(127062),
    E0 = i(25044),
    E1 = i(80703),
    E2 = i(691540),
    E3 = i(857250),
    E6 = i(97483),
    E4 = i(100392),
    E7 = i(102609),
    E5 = i(271478),
    E8 = i(736056),
    E9 = i(386976),
    Se = i(257433),
    St = i(32523),
    Si = i(96919),
    Sn = i(688151),
    Ss = i(636566);
function Sl(e) {
    let { experiment: t, experimentId: i, overrideInfo: n, defaultOpen: s } = e,
        [l, r] = S.useState(s),
        [a, o] = S.useState(!1),
        u = S.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, g.bG)([cF.default], () => cF.default.getId()),
        c = (0, g.bG)([cF.default], () => {
            let e = cF.default.getInstallationForTracking();
            return null == e ? null : (0, E1.v)(e);
        }),
        m = "installation" === t.kind && null != c ? c : d,
        A = (0, Se.iN)(t, m),
        h = (0, Se.Fm)(t, m),
        T = (0, g.yK)([E8.A], () =>
            eZ()
                .sortBy(E8.A.getRecentExposures(Sn.Vh.USER, i), (e) => {
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
                (0, cK.C)((0, E4.yA)(i), () => {
                    (0, E2.P0)({
                        id: "experiment-link-copied",
                        message: "Copied experiment link",
                        type: E6.Ck.SUCCESS,
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
                className: Ss.DD,
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
                                        (0, E.jsx)(en.D, { onClick: x, children: (0, E.jsx)(Ed.q, { size: "xs" }) }),
                                ],
                            }),
                            (0, E.jsx)(es.E, { color: "text-muted", variant: "text-sm/normal", children: i }),
                        ],
                    }),
                    (0, E.jsx)("span", {
                        className: Ss.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!l) return (0, E.jsx)("div", { className: Ss.Os, children: p });
    let f = "";
    return (
        (f =
            t.system === E7.l5.LEGACY
                ? `Currently assigned to bucket ${A ?? Sn.RE.NOT_ELIGIBLE}`
                : null != A
                  ? `Currently assigned to variant ${A}`
                  : "Currently unassigned"),
        (0, E.jsxs)("div", {
            className: Ss.Os,
            children: [
                p,
                (0, E.jsx)("div", {
                    children: (0, E.jsx)(E5.g, {
                        label: t.system === E7.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: f,
                        experiment: t,
                        experimentId: i,
                        overrideInfo: n,
                    }),
                }),
                (0, E.jsx)("div", {
                    className: Ss.h_,
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
                                  className: Ss.id,
                                  children: "Server Descriptor",
                              }),
                              (0, E.jsx)(es.E, {
                                  variant: "code",
                                  className: Ss.AS,
                                  children: null == h ? "None" : JSON.stringify(h, void 0, 2),
                              }),
                              (0, E.jsx)(es.E, {
                                  variant: "text-lg/medium",
                                  className: Ss.id,
                                  children: "Override Descriptor",
                              }),
                              (0, E.jsx)(es.E, {
                                  variant: "code",
                                  className: Ss.AS,
                                  children:
                                      n?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(n.originalDescriptor, void 0, 2),
                              }),
                              (0, E.jsx)(es.E, {
                                  variant: "text-lg/medium",
                                  className: Ss.id,
                                  children: "Recent Exposures",
                              }),
                              (0, E.jsx)(es.E, {
                                  variant: "code",
                                  className: Ss.AS,
                                  children: 0 === T.length ? "None" : T.join("\n"),
                              }),
                          ],
                      })
                    : (0, E.jsx)("div", {
                          className: Ss.id,
                          children: (0, E.jsx)(ea.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, E.jsx)(eM.c, { className: Ss.yF }),
            ],
        })
    );
}
function Sr(e) {
    let { experiment: t, experimentId: i, overrideInfo: n } = e,
        [s, l] = S.useState(null != n),
        [r, a] = S.useState(!1),
        o = S.useCallback(() => {
            l((e) => !e);
        }, []),
        u = (0, g.bG)([E8.A], () => E8.A.getLoadedGuildExperiment(i)),
        d = (0, g.yK)([E8.A], () =>
            eZ()
                .sortBy(E8.A.getRecentExposures(Sn.Vh.GUILD, i), (e) => {
                    let [t, i] = e;
                    return -i;
                })
                .map((e) => {
                    let [t, i] = e;
                    return `${new Date(i).toLocaleString()} (${t})`;
                }),
        ),
        [c, m] = (0, g.yK)([ec.A, E8.A], () => {
            let e = eZ().sortBy(ec.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                t = {},
                n = [];
            for (let s of e) {
                let e = E8.A.getGuildExperimentDescriptor(i, s.id),
                    l = e?.bucket ?? Sn.RE.NOT_ELIGIBLE;
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
                className: Ss.DD,
                children: [
                    (0, E.jsxs)("div", {
                        children: [
                            (0, E.jsx)("span", { children: t.title }),
                            (0, E.jsx)(es.E, { color: "text-muted", variant: "text-sm/normal", children: i }),
                        ],
                    }),
                    (0, E.jsx)("span", { className: Ss.km, children: "Guild" }),
                ],
            }),
        });
    return s
        ? (0, E.jsxs)("div", {
              className: Ss.Os,
              children: [
                  A,
                  (0, E.jsx)(E5.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${m}`,
                      experiment: t,
                      experimentId: i,
                      overrideInfo: n,
                  }),
                  (0, E.jsx)("div", {
                      className: Ss.h_,
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
                                    className: Ss.id,
                                    children: "Guild Assignments",
                                }),
                                (0, E.jsx)(es.E, { variant: "code", className: Ss.AS, children: c }),
                                (0, E.jsx)(es.E, {
                                    variant: "text-lg/medium",
                                    className: Ss.id,
                                    children: "Server Descriptor",
                                }),
                                (0, E.jsx)(es.E, {
                                    variant: "code",
                                    className: Ss.AS,
                                    children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                }),
                                (0, E.jsx)(es.E, {
                                    variant: "text-lg/medium",
                                    className: Ss.id,
                                    children: "Override Descriptor",
                                }),
                                (0, E.jsx)(es.E, {
                                    variant: "code",
                                    className: Ss.AS,
                                    children:
                                        n?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(n.originalDescriptor, void 0, 2),
                                }),
                                (0, E.jsx)(es.E, {
                                    variant: "text-lg/medium",
                                    className: Ss.id,
                                    children: "Recent Exposures",
                                }),
                                (0, E.jsx)(es.E, {
                                    variant: "code",
                                    className: Ss.AS,
                                    children: 0 === d.length ? "None" : d.join("\n"),
                                }),
                            ],
                        })
                      : (0, E.jsx)("div", {
                            className: Ss.id,
                            children: (0, E.jsx)(ea.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, E.jsx)(eM.c, { className: Ss.yF }),
              ],
          })
        : (0, E.jsx)("div", { className: Ss.Os, children: A });
}
let Sa = (0, a.E2)(u.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, E9.op)(),
                { experiments: i, overridesInfo: n } = (0, St.hI)(),
                s = S.useMemo(() => ({ ...i, ...e }), [i, e]),
                l = S.useMemo(() => ({ ...n, ...t }), [n, t]),
                r = (0, g.bG)([cF.default], () => {
                    let e = cF.default.getInstallationForTracking();
                    return null == e ? null : (0, E1.v)(e);
                }),
                [a, o] = S.useState(""),
                u = (0, Si.oC)((0, Si.R3)((0, Si.Fm)(s), l), a);
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
                                                (0, E2.P0)((0, E3.o)("Installation ID copied!", E6.Ck.SUCCESS));
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, E.jsx)($.I, { placeholder: "Search experiments", query: a, onChange: o, onClear: () => o("") }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? Sr : Sl;
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
                              className: Ss.p$,
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
    So = (0, a.zZ)(u.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [Sa] }),
    Su = (0, a.t_)(u.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [So] }),
    Sd = (0, a.i4)(u.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: E$.c,
        useMenu: E0.A,
        buildLayout: () => [Su],
    }),
    Sc = (0, a.WI)(u.X.DEVELOPER_SECTION, {
        useTitle: () => j.intl.string(j.t["+gHUHA"]),
        usePredicate: () => h6.A.isDeveloper,
        buildLayout: () => [Sd, EJ],
    });
var Sg = i(824552),
    Sm = i(370997);
let SA = (0, a.E2)(u.X.AUTHORIZED_APPS_LIST_SETTING, {
    Component: Sm.Ay,
    useSearchTerms: () => [j.intl.string(j.t["f6kk+r"])],
});
var Sh = i(187322),
    SE = i(77468),
    SS = i(289498),
    ST = i(573648),
    Sx = i(941314),
    Sp = i(874490),
    Sf = i(370480),
    SN = i(968309);
let S_ = new Set([U.fg2.XBOX, U.fg2.PLAYSTATION, U.fg2.PLAYSTATION_STAGING, U.fg2.CRUNCHYROLL]);
var SI = i(169869),
    SC = i(235693),
    Sb = i(757036),
    Sy = i(555837),
    Sv = i(241524),
    Sj = i(346017),
    SO = i(212739),
    SR = i(30370),
    SD = i(968671),
    SL = i(674567),
    SP = i(237146),
    SG = i(594387),
    SM = i(34934);
function SU() {
    let e,
        t,
        n,
        s,
        l,
        { variant: r, showFooter: a } =
            ((e = (0, SL.V)()),
            (t = (0, SD.GM)("connectedAccountsBannerFooter")),
            (n = (0, SO.O)()),
            (l = null != (s = (0, g.bG)([SR.A], () => SR.A.getAccount(null, U.fg2.XBOX))) && !s.revoked),
            e === SL.s.NONE || e === SL.s.FREE_FRACTIONAL_NITRO || n
                ? { variant: SL.s.NONE, showFooter: !1 }
                : { variant: e, showFooter: t && e === SL.s.NON_NITRO && !l }),
        { analyticsLocations: o } = (0, nZ.Ay)(e1.A.XBOX_CONNECTED_ACCOUNTS_BANNER),
        u = (0, Sj.yW)(o),
        d = (0, Sv.A)("(max-width: 485px)");
    if (r === SL.s.NONE) return null;
    let c = d ? "md" : "sm",
        m = "",
        A = null;
    switch (r) {
        case SL.s.NITRO:
            (m = j.intl.string(SP.default["+QAvQz"])),
                (A = (0, E.jsx)(eG.$, {
                    variant: "overlay-primary",
                    size: c,
                    fullWidth: d,
                    text: j.intl.string(SP.default.CubeLC),
                    onClick: () => {
                        (0, K.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([i.e("16848"), i.e("77632")]).then(
                                i.bind(i, 836291),
                            );
                            return (t) => (0, E.jsx)(e, { ...t, sourceAnalyticsLocations: o });
                        });
                    },
                }));
            break;
        case SL.s.NON_NITRO:
        case SL.s.FREE_FRACTIONAL_NITRO:
            (m = j.intl.string(SP.default.NwkRTZ)),
                (A = (0, E.jsx)(sY.A, {
                    defaultTextOverride: j.intl.string(SP.default["0vY+ie"]),
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
                className: SM.bV,
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
                            className: SM.Nr,
                            children: [
                                (0, E.jsxs)("div", {
                                    className: SM.Tp,
                                    children: [
                                        (0, E.jsx)("div", {
                                            className: SM.Qw,
                                            style: {
                                                backgroundImage: `url(${a ? "https://cdn.discordapp.com/assets/content/1858990b1e56c7d51e887008753104d4663d06c0e0e296d8fe0ea85c7e3e8341.png" : "https://cdn.discordapp.com/assets/content/7308e937fbd3074b9de0ebba1fa3571fa7b10a2b88f384b382f711bae99f40e6.png"})`,
                                            },
                                        }),
                                        (0, E.jsx)("div", { className: SM.$h }),
                                        (0, E.jsx)("div", { className: SM.Rv }),
                                        (0, E.jsx)("div", { className: SM.Lw }),
                                    ],
                                }),
                                (0, E.jsxs)("div", {
                                    className: SM.Mn,
                                    children: [
                                        (0, E.jsxs)("div", {
                                            className: SM.mY,
                                            children: [
                                                (0, E.jsx)("img", {
                                                    className: SM.wm,
                                                    src: "https://cdn.discordapp.com/assets/content/c5fab2b5d1155c4c9bc088b07f8563b6db8d2d08666357486efc5aea6e97fbea.png",
                                                    alt: "Xbox Game Pass",
                                                }),
                                                (0, E.jsx)(es.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: SM.DD,
                                                    children: m,
                                                }),
                                            ],
                                        }),
                                        (0, E.jsx)("div", { className: SM.lO, children: A }),
                                    ],
                                }),
                                a &&
                                    (0, E.jsxs)(E.Fragment, {
                                        children: [
                                            (0, E.jsx)("div", { className: SM.yF }),
                                            (0, E.jsxs)("div", {
                                                className: SM.sQ,
                                                children: [
                                                    (0, E.jsx)(co.o, {
                                                        size: d ? "md" : "sm",
                                                        color: er.A.colors.ICON_STRONG,
                                                    }),
                                                    (0, E.jsx)(es.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-default",
                                                        children: j.intl.format(SG.default.mXY4Rb, {
                                                            onConnect: () => {
                                                                u(Sj.Hx.CONNECT),
                                                                    (0, SN.A)({
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
var SV = i(201718),
    Sk = i(321078),
    Sw = i(672130),
    SB = i(546183),
    SF = i(379848),
    Sz = i(96734);
let SX = (e) => {
        let { markAsDismissed: t } = e;
        return (
            S.useEffect(() => t(ig.i.UNKNOWN), [t]),
            (0, E.jsx)(sc.Lp, { className: Sz.Ad, text: j.intl.string(j.t.y2b7CA) })
        );
    },
    SY = (e) => {
        let { title: t, body: i, img: n, newIndicatorDismissibleContent: s, onClick: l } = e;
        return (0, E.jsxs)("div", {
            className: Sz.kL,
            children: [
                n,
                (0, E.jsxs)("div", {
                    className: Sz.FS,
                    children: [
                        (0, E.jsxs)("div", {
                            className: Sz.TK,
                            children: [
                                (0, E.jsx)(SF.Ay, {
                                    contentTypes: [s],
                                    children: (e) => {
                                        let { visibleContent: t, markAsDismissed: i } = e;
                                        return t === s ? (0, E.jsx)(SX, { markAsDismissed: i }) : null;
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
    },
    SH = () => {
        let e = tN.A.getArticleURL(U.MVz.PS_CONNECTION);
        return (0, E.jsx)(SY, {
            title: j.intl.string(j.t.v20wwm),
            body: j.intl.format(j.t.lTZBit, { help_article: e }),
            img: (0, E.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
            newIndicatorDismissibleContent: eU.M.PS_ONE_WAY_RECONNECT,
            onClick: () => (0, SN.A)({ platformType: U.fg2.PLAYSTATION, location: "PS two way upsell" }),
        });
    },
    SK = "/assets/9df988a227916145.png",
    SW = () =>
        (0, E.jsx)(SY, {
            title: j.intl.string(SG.default["9cLtDI"]),
            body: j.intl.format(SG.default["D+kUbg"], {
                learnMoreLink: tN.A.getArticleURL(U.MVz.XBOX_GAME_PASS_PERKS),
            }),
            img: (0, E.jsx)("img", { src: SK, width: "auto", height: "45", alt: "" }),
            newIndicatorDismissibleContent: eU.M.XBOX_PERKS_RECONNECT_UPSELL,
            onClick: () => (0, SN.A)({ platformType: U.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
        }),
    SZ = () => {
        let e = tN.A.getArticleURL(U.MVz.XBOX_CONNECTION);
        return (0, E.jsx)(SY, {
            title: j.intl.string(j.t["2okkZV"]),
            body: j.intl.format(j.t.OnERSS, { help_article: e }),
            img: (0, E.jsx)("img", { src: SK, width: "auto", height: "45", alt: "" }),
            newIndicatorDismissibleContent: eU.M.XBOX_ONE_WAY_RECONNECT,
            onClick: () => (0, SN.A)({ platformType: U.fg2.XBOX, location: "Xbox two way upsell" }),
        });
    };
var SQ = i(783419),
    Sq = i(534952),
    SJ = i(230451),
    S$ = i(781471);
let S0 = (e) => {
    let t,
        { integration: i } = e,
        {
            isJoining: n,
            joinErrorMessage: s,
            showJoinErrorMessage: l,
        } = (0, g.cf)(
            [SR.A],
            () => ({
                isJoining: SR.A.isJoining(i.id),
                joinErrorMessage:
                    "" === SR.A.joinErrorMessage(i.id) ? j.intl.string(j.t.j2d6Km) : SR.A.joinErrorMessage(i.id),
                showJoinErrorMessage: void 0 !== SR.A.joinErrorMessage(i.id),
            }),
            [i.id],
        );
    return (
        null != (0, g.bG)([ec.A], () => ec.A.getGuild(i.guild.id), [i.guild.id]) ||
            (t = (0, E.jsx)(eG.$, {
                size: "sm",
                onClick: function () {
                    SE.A.joinServer(i.id, () => {});
                },
                disabled: n,
                variant: "primary",
                text: n ? j.intl.string(j.t.RXvQQu) : j.intl.string(j.t.XpeFYr),
            })),
        (0, E.jsxs)("div", {
            className: S$.iA,
            children: [
                (0, E.jsxs)("div", {
                    className: S$.XX,
                    children: [
                        (0, E.jsx)(g8.Ay, { size: g8.Ay.Sizes.SMALL, guild: i.guild, className: S$.$f }),
                        (0, E.jsxs)("div", {
                            className: S$.Vn,
                            children: [
                                (0, E.jsx)(es.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: i.guild.name,
                                }),
                                (0, E.jsx)(di.Anchor, {
                                    href: ST.A.get(i.type)?.getPlatformUserUrl?.(i.account),
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
                        className: S$.R,
                        children: s,
                    }),
            ],
        })
    );
};
function S1(e) {
    var t;
    let i,
        n,
        { account: s } = e,
        l =
            ((t = s.id),
            (i = (0, Sy.G)({ location: "useShouldShowXboxPerksReconnectUpsell" })),
            (n = (0, Sb.L)(sq.PremiumTypes.TIER_2)),
            !i && !n && !/^\d+$/.test(t));
    return s.type === U.fg2.XBOX && l
        ? (0, E.jsx)(SW, {})
        : s.twoWayLink
          ? null
          : s.type === U.fg2.XBOX
            ? (0, E.jsx)(SZ, {})
            : s.type === U.fg2.PLAYSTATION
              ? (0, E.jsx)(SH, {})
              : null;
}
function S2(e) {
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
        R = (0, Sp.ML)(u.type),
        D = ST.A.get(R),
        L = (0, Sx.useIsRiotSocialSDKMigrationEnabled)({ location: "User Settings Connections" });
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
            null != e && (h(e), SE.A.setVisibility(u.type, u.id, e), _(null)),
                null != t && (x(t), SE.A.setMetadataVisibility(u.type, u.id, t), C(null));
        }, [u]),
        (0, E.jsxs)("div", {
            className: S$.FI,
            children: [
                ((t = ST.A.get(u.type)),
                (i = ST.A.get(R)),
                (n = "1" === (u.metadata ?? {})[SQ.pK.TWITTER_VERIFIED]),
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
                    className: S$.Il,
                    children: [
                        (0, E.jsx)("img", {
                            alt: i.name,
                            className: S$.gj,
                            src: (0, gG.M)(d) ? i.icon.darkSVG : i.icon.lightSVG,
                        }),
                        (0, E.jsxs)("div", {
                            children: [
                                (0, E.jsxs)("div", {
                                    className: S$.$p,
                                    children: [
                                        (0, E.jsx)(es.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: S$.RW,
                                            children: u.name,
                                        }),
                                        null != s && (0, E.jsx)("div", { className: S$.cG, children: s }),
                                    ],
                                }),
                                (0, E.jsx)(es.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: S$.Au,
                                    children:
                                        null != i.replacedBy && L
                                            ? j.intl.format(SJ.default.Glhokn, { platformName: i.name })
                                            : i.name,
                                }),
                            ],
                        }),
                        (0, E.jsx)(en.D, {
                            className: S$.uH,
                            onClick: function () {
                                let e = ST.A.get(u.type);
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
                                            S_.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, E.jsx)(sA.A, {
                                                children: j.intl.format(j.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": j.intl.string(j.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, E.jsx)(gU.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, E.jsx)(S1, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        i = null,
                        n = (0, Sf.An)(t[SQ.pK.CREATED_AT], c);
                    switch (e.type) {
                        case U.fg2.REDDIT:
                            i = (0, SI.xE)(t, S$.Nz);
                            break;
                        case U.fg2.STEAM:
                            i = (0, SI.dy)(t, S$.Nz);
                            break;
                        case U.fg2.BLUESKY:
                        case U.fg2.TWITTER:
                        case U.fg2.MASTODON:
                            i = (0, SI.ED)(t, S$.Nz);
                            break;
                        case U.fg2.EBAY:
                            i = (0, SI.ub)(t, S$.Nz);
                            break;
                        case U.fg2.PAYPAL:
                            i = (0, SI.gZ)(t, S$.Nz);
                            break;
                        case U.fg2.TIKTOK:
                            i = (0, SI.HU)(t, S$.Nz);
                    }
                    null !== n &&
                        (null == i && (i = []),
                        i?.push(
                            (0, E.jsx)(
                                es.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: S$.M4,
                                    children: j.intl.format(j.t["9rfonh"], { date: n }),
                                },
                                "member-since",
                            ),
                        ));
                    let s = v.includes(e.id),
                        l = j.intl.string(j.t.wzzjk9);
                    if (null == i || 0 === i.length)
                        if (!0 !== ST.A.get(e.type).hasMetadata) return null;
                        else
                            (i = [
                                (0, E.jsx)(sc.Lp, { className: S$.Z3, text: j.intl.string(j.t.y2b7CA) }, "badge"),
                                (0, E.jsx)(
                                    es.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: S$.vt,
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
                                    className: S$.jy,
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
                                                      SE.A.refresh(e.type, e.id).finally(() => {
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
                        (0, E.jsx)("div", { className: S$.tJ, children: i })
                    );
                })(u),
                (U.txh.has(u.type) &&
                    (l = (0, E.jsx)(J.d, {
                        label: j.intl.string(j.t["+KCMSi"]),
                        checked: g,
                        onChange: function (e) {
                            m(e), SE.A.setFriendSync(u.type, u.id, e);
                        },
                    })),
                U.ewM.has(u.type) &&
                    (r = (0, E.jsx)(J.d, {
                        label: j.intl.format(j.t["6u6J0q"], { platform: D.name }),
                        checked: p,
                        onChange: function (e) {
                            f(e), SE.A.setShowActivity(u.type, u.id, e);
                        },
                    })),
                ST.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, E.jsx)(J.d, {
                        label: j.intl.string(j.t.FYKGsL),
                        checked: 1 === T,
                        onChange: function (e) {
                            let { verified: t } = u,
                                i = +!!e;
                            if (e && !t) {
                                C(i), (0, SN.A)({ platformType: u.type, location: "User Settings" });
                                return;
                            }
                            x(i), SE.A.setMetadataVisibility(u.type, u.id, i);
                        },
                        disabled: 1 !== A || null == u.metadata,
                    })),
                (0, E.jsxs)("div", {
                    className: S$.HZ,
                    children: [
                        (0, E.jsx)(J.d, {
                            label: j.intl.string(j.t.f7yOAX),
                            checked: 1 === A,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    i = +!!e;
                                if (e && !t) {
                                    _(i), (0, SN.A)({ platformType: u.type, location: "User Settings" });
                                    return;
                                }
                                h(i), SE.A.setVisibility(u.type, u.id, i);
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
                                  (0, SN.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                      })
                    : u.integrations.length > 0
                      ? (0, E.jsx)(s4.D, {
                            label: j.intl.string(j.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, E.jsx)(S0, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, E.jsx)(SC.A, { partner: u.type }),
            ],
        })
    );
}
function S3(e) {
    let { appIdentity: t, oauth2Token: i } = e;
    return null == i
        ? null
        : (0, E.jsxs)("div", {
              className: S$.FI,
              children: [
                  (function (e, t) {
                      let { application: i } = t,
                          n = nt.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
                      return (0, E.jsxs)("div", {
                          className: S$.Il,
                          children: [
                              (0, E.jsx)("img", { alt: i.name, className: e6()(S$.gj, S$.sN), src: n }),
                              (0, E.jsxs)("div", {
                                  children: [
                                      (0, E.jsx)("div", {
                                          className: S$.$p,
                                          children: (0, E.jsx)(es.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: S$.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, E.jsx)(es.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: S$.Au,
                                          children: i.name,
                                      }),
                                  ],
                              }),
                              (0, E.jsx)(en.D, {
                                  className: S$.uH,
                                  onClick: () =>
                                      (0, Sm.d1)(i, t.scopes, () => {
                                          Sg.A.delete(t.id);
                                      }),
                                  "aria-label": j.intl.string(j.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, E.jsx)(gU.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, i),
                  (0, E.jsx)("div", {
                      className: S$.HZ,
                      children: (0, E.jsx)(J.d, {
                          label: j.intl.string(j.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              SV.A.updateApplicationIdentityConfig(i.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function S6(e) {
    let t = ST.A.get(e);
    (0, SN.A)({ platformType: t.type }),
        G.default.track(U.HAw.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        });
}
function S4() {
    let e = (0, Sp.gn)(),
        t = (0, Sx.useIsRiotSocialSDKMigrationEnabled)({ location: "User Settings Connections" }),
        i = (0, ti.A)(t ? Sq.tX : []);
    return (0, E.jsxs)("div", {
        className: S$.lA,
        children: [
            i.map(
                (e) =>
                    null != e &&
                    (0, E.jsx)(
                        Sw.A,
                        { application: e, className: S$.__invalid_accountButton, innerClassName: S$.U$ },
                        e.id,
                    ),
            ),
            e
                .slice(0, 10 - i.length)
                .map((e) =>
                    (0, E.jsx)(
                        SS.A,
                        { type: e.type, className: S$.__invalid_accountButton, innerClassName: S$.U$ },
                        e.type,
                    ),
                ),
            (0, E.jsx)(tr.m, {
                text: j.intl.string(j.t.QqTz8b),
                children: (0, E.jsx)("div", {
                    className: e6()(S$.ej, S$.__invalid_accountButton),
                    children: (0, E.jsx)(Sh.vN, {
                        children: (0, E.jsx)("button", {
                            className: e6()(S$.R8, S$.U$),
                            type: "button",
                            onClick: function () {
                                sa.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: S6 });
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
function S7(e) {
    let t,
        { fetching: i, accounts: n, appIdentities: s, authorizedApps: l, theme: r, locale: a } = e,
        u = (0, o.SV)("ConnectionsList"),
        d = S.useMemo(() => n.filter((e) => ST.A.isSupported(e.type)), [n]);
    return (
        (t = i
            ? (0, E.jsx)(df.y, { type: df.y.Type.SPINNING_CIRCLE })
            : 0 === d.length && 0 === s.length
              ? (0, E.jsx)(iN.pp, {
                    theme: r,
                    className: u ? S$.p$ : void 0,
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
                                S3,
                                { appIdentity: e, oauth2Token: l.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        d.map((e, t) =>
                            (0, E.jsx)(
                                S2,
                                {
                                    theme: r,
                                    account: e,
                                    locale: a,
                                    onDisconnect: () =>
                                        (function (e) {
                                            let { type: t, id: i } = e;
                                            SE.A.disconnect(t, i);
                                        })(e),
                                },
                                `connection-${t}`,
                            ),
                        ),
                    ],
                })),
        (0, E.jsx)("div", { className: S$.V, children: t })
    );
}
let S5 = (0, a.E2)(u.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            let e = (0, o.SV)("NewConnectSection");
            return (0, E.jsx)(s4.D, {
                label: j.intl.string(e ? j.t["t+aGse"] : j.t.ZeDrUf),
                description: e ? void 0 : j.intl.format(j.t["oYc+Gz"], { privacyPolicyUrl: U.X7G.PRIVACY }),
                children: (0, E.jsx)(S4, {}),
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
    S8 = (0, a.E2)(u.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, g.bG)([eB.A], () => eB.A.hidePersonalInformation),
                t = (0, g.bG)([SR.A], () => SR.A.isFetching()),
                i = (0, g.bG)([SR.A], () => SR.A.getAccounts()),
                { authorizedAppsFetchState: n, authorizedApps: s } = (0, g.cf)([SB.default], () => ({
                    authorizedAppsFetchState: SB.default.getFetchState(),
                    authorizedApps: SB.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: l, filteredAppIdentities: r } = (0, Sk.A)(io.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, c_.Ay)(),
                o = (0, g.bG)([d5.default], () => d5.default.locale);
            return (S.useEffect(() => {
                n === SB.FetchState.NOT_FETCHED && Sg.A.fetch();
            }, [n]),
            e)
                ? null
                : (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsx)(SU, {}),
                          (0, E.jsx)(S7, {
                              fetching: t || l || (r.length > 0 && n !== SB.FetchState.FETCHED),
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
            SE.A.fetch();
        },
        useSearchTerms: () => [
            j.intl.string(j.t["+/hZM/"]),
            j.intl.string(j.t.bsbMVz),
            j.intl.string(j.t.f7yOAX),
            j.intl.string(j.t.FYKGsL),
            j.intl.string(j.t["+KCMSi"]),
        ],
    });
var S9 = i(46225);
let Te = [U.fg2.LEAGUE_OF_LEGENDS, U.fg2.RIOT_GAMES];
function Tt() {
    let e = (0, g.bG)([SR.A], () => SR.A.getAccounts().find((e) => Te.includes(e.type))?.type),
        t = null != e ? ST.A.get(e) : null,
        i = (0, ti.h)(t?.replacedBy),
        { canStartAuthorization: n, hasAlreadyLinked: s, fetched: l } = (0, S9.RD)(i),
        r = j.intl.string(SJ.default["1S6oAo"]),
        a = (0, Sx.useIsRiotSocialSDKMigrationEnabled)({ location: "RiotDeprecationInlineNotice" });
    return S.useMemo(
        () =>
            a && null != t && n && i?.connectionEntrypointUrl != null && !s && l
                ? {
                      type: h.lT.INLINE_NOTICE,
                      noticeType: "info",
                      useText: () =>
                          j.intl.format(SJ.default.DeOsIl, {
                              connectionName: t.name,
                              applicationName: r,
                              connectionEntrypointUrl: i.connectionEntrypointUrl,
                          }),
                  }
                : null,
        [t, r, i, n, a, s, l],
    );
}
let Ti = (0, a.zZ)(u.X.CONNECTIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["3fe7U5"]),
        useSubtitle: () => j.intl.string(j.t.U22vw6),
        useInlineNotice: Tt,
        buildLayout: () => [S5, S8],
    }),
    Tn = (0, a.zZ)(u.X.AUTHORIZED_APPS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        useSubtitle: () => j.intl.string(j.t.G9JfLg),
        buildLayout: () => [SA],
        initialize: () => (
            Sg.A.fetch(),
            () => {
                Sm.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    Ts = (0, a.t_)(u.X.CONNECTED_APPS_PANEL, {
        useTitle: () => j.intl.string(j.t.lrVuZO),
        useObscuredNotice: dT.L,
        buildLayout: () => [Ti, Tn],
    }),
    Tl = (0, a.i4)(u.X.CONNECTED_APPS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.lrVuZO),
        icon: Ed.q,
        buildLayout: () => [Ts],
    }),
    Tr = (0, a.WI)(u.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => j.intl.string(j.t.BA9200),
        buildLayout: () => [i0, eR, iS, Tl],
    });
var Ta = i(631670),
    To = i(619499),
    Tu = i(836602),
    Td = i(591179),
    Tc = i(854627),
    Tg = i(975732),
    Tm = i(761508),
    TA = i(83257),
    Th = i(159001),
    TE = i(344346),
    TS = i(919395),
    TT = i(233641);
function Tx(e) {
    let { title: t, children: i } = e;
    return (0, E.jsxs)("div", {
        children: [(0, E.jsx)(eP.D, { variant: "text-md/medium", className: TT.Vf, children: t }), i],
    });
}
function Tp(e) {
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
        className: e6()(TT.UA, i),
        children: (0, E.jsxs)("div", {
            className: e6()(TT.yt, n),
            children: [
                (0, E.jsx)("div", {
                    className: e6()(TT.Fp, a && TT.Oz),
                    children: (0, E.jsxs)(E.Fragment, {
                        children: [
                            (0, E.jsx)(Tx, { title: l ?? j.intl.string(j.t.Zb06yP), children: s }),
                            null != r ? (0, E.jsx)(Tx, { title: j.intl.string(j.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, E.jsx)("div", { className: TT.oB, children: t }),
            ],
        }),
    });
}
var Tf = i(986687),
    TN = i(101058),
    T_ = i(841595),
    TI = i(696451),
    TC = i(10478);
function Tb() {
    return (0, E.jsxs)("div", {
        className: TC.p$,
        children: [
            (0, E.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: TC.Sl }),
            (0, E.jsx)(eP.D, {
                className: TC.h8,
                variant: "heading-lg/extrabold",
                children: j.intl.string(j.t.Z1OZCV),
            }),
            (0, E.jsx)(es.E, { className: TC.h8, variant: "text-md/normal", children: j.intl.string(j.t.ZSt4Tt) }),
            (0, E.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: TC.h8,
                children: (0, E.jsx)(eG.$, {
                    variant: "primary",
                    text: j.intl.string(j.t.jQ3pqt),
                    onClick: () => {
                        (0, s7.pX)(U.BVt.GUILD_DISCOVERY), (0, sH.default)();
                    },
                }),
            }),
        ],
    });
}
var Ty = i(81400),
    Tv = i(252732),
    Tj = i(355622),
    TO = i(408018),
    TR = i(138617),
    TD = i(158983);
let TL = (0, sZ.Ld)(),
    TP = (0, il.createChannelRecord)({ id: "1", type: U.rbe.DM }),
    TG = (0, sZ.Ld)();
function TM(e) {
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
        [d, c] = S.useState((0, TO.x7)(o)),
        g = S.useRef(r),
        m = S.useRef(!1);
    return (
        S.useEffect(() => {
            if (g.current !== r) {
                let e = (0, TO.x7)(r);
                u(r), c(e);
            }
            g.current = r;
        }, [r]),
        S.useEffect(() => {
            void 0 !== s || o === r || m.current || (u(r), c((0, TO.x7)(r)));
        }, [s, r, o]),
        (0, E.jsxs)(ug.A, {
            title: t,
            titleId: TL,
            description: j.intl.string(j.t.Bbw6Ac),
            errors: i,
            disabled: a,
            children: [
                (0, E.jsx)(TR.Ay, {
                    "aria-describedby": TG,
                    "aria-labelledby": TL,
                    className: TD.i,
                    innerClassName: TD.Z,
                    maxCharacterCount: U.NA2,
                    onChange: function (e, t, i) {
                        t !== o && (u(t), c(i), n(t));
                    },
                    placeholder: l,
                    channel: TP,
                    textValue: o,
                    richValue: d,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: eH.USER_SETTINGS_MODAL_KEY,
                    type: Tj.oU.PROFILE_BIO_INPUT,
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
                (0, E.jsx)(eo.A, { id: TG, children: j.intl.format(j.t["+DFxLc"], { maxLength: U.NA2 }) }),
            ],
        })
    );
}
var TU = i(930861),
    TV = i(821956),
    Tk = i(562819),
    Tw = i(84540),
    TB = i(408919);
function TF(e) {
    let { user: t, guild: i, className: n, sectionTitle: s, forcedDivider: l = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, nZ.Ay)(),
        o = (0, TS.a4)({ user: t, guildId: i?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, TS.CP)(i?.id),
        c = r ? TU.wL : oa.$n;
    return (0, E.jsx)(ug.A, {
        className: n,
        forcedDivider: l,
        hasBackground: !0,
        title: s,
        errors: d,
        children: (0, E.jsxs)("div", {
            className: TB.NC,
            children: [
                (0, E.jsx)(c, {
                    size: oa.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, Tk.L)({ analyticsLocations: a, guild: i });
                    },
                    className: e6()({ [TB.yj]: r }),
                    children: j.intl.string(j.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TB.DT,
                        children: (0, E.jsx)(eG.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, TV.uZ)(t, i) ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.OrokWm),
                            onClick: () => {
                                (0, Tw.p)({ guildId: i?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var Tz = i(339984),
    TX = i(114077);
let TY = [{ name: "gif", extensions: ["gif"] }];
function TH(e) {
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
        m = c ? TU.wL : oa.$n,
        A = S.useCallback(() => {
            (0, Tv.XD)({
                uploadType: Tz.HL.AVATAR,
                analyticsSource: g,
                filters: u ? TY : void 0,
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
            className: TX.NC,
            children: [
                (0, E.jsx)(m, {
                    className: e6()({ [TX.yj]: c }),
                    size: oa.$n.Sizes.SMALL,
                    onClick: A,
                    children: l ?? j.intl.string(j.t["4OynCD"]),
                }),
                t &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TX.DT,
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
var TK = i(152103);
function TW(e) {
    let { user: t, guildId: i, className: n } = e,
        s = uT.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: l } = (0, nZ.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, TS.B0)(t, i),
        d = (0, S.useCallback)(() => {
            G.default.track(U.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS), (0, nQ.L)({ analyticsLocations: l, guildId: i });
        }, [l, i]),
        c = (0, S.useCallback)(() => {
            (0, Tw.p)({ displayNameStyles: null }), G.default.track(U.HAw.DISPLAY_NAME_STYLES_REMOVED);
        }, []),
        g = (0, S.useCallback)(() => {
            (0, Tw.p)({ guildId: i, displayNameStyles: null });
        }, [i]),
        m = void 0 !== o ? o : null != i ? a : r;
    return (0, E.jsx)(ug.A, {
        title: j.intl.string(nq.default["86GtGH"]),
        className: n,
        showPremiumIcon: s,
        errors: u,
        children: (0, E.jsxs)("div", {
            className: TK.N,
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
var TZ = i(637193),
    TQ = i(727369);
function Tq(e) {
    let { user: t, guild: i, titleIcon: n } = e,
        { analyticsLocations: s } = (0, nZ.Ay)(),
        l = null != i,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, TS.rv)(t, i?.id),
        d = S.useCallback(() => {
            (0, TZ.p)({ analyticsLocations: s, guildId: i?.id });
        }, [s, i?.id]),
        c = S.useCallback(() => {
            (0, Tw.p)({ guildId: i?.id, nameplate: null });
        }, [i?.id]);
    return (0, E.jsx)(ug.A, {
        title: j.intl.string(j.t.x5CoXR),
        titleIcon: n,
        errors: u,
        children: (0, E.jsxs)("div", {
            className: TQ.u,
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
var TJ = i(33023);
function T$(e) {
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
        g = d ? TU.wL : oa.$n;
    return (0, E.jsx)(ug.A, {
        className: l,
        title: j.intl.string(j.t.Vgdusv),
        showPremiumIcon: a,
        errors: i,
        disabled: r,
        forcedDivider: u,
        children: (0, E.jsxs)("div", {
            className: TJ.NC,
            children: [
                (0, E.jsx)(g, {
                    className: e6()({ [TJ.yj]: d }),
                    size: oa.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, Tv.XD)({ uploadType: Tz.HL.BANNER, analyticsSource: c, guildId: s, isTryItOut: o }),
                    children: j.intl.string(j.t.N0bC3P),
                }),
                t &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TJ.DT,
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
var T0 = i(617061),
    T1 = i(872246);
function T2(e) {
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
        c = (0, TS.N2)({ user: t, guildId: i?.id }),
        { pendingProfileEffect: g, errors: m } = (0, TS.nZ)(i?.id);
    S.useEffect(() => {
        d &&
            G.default.track(U.HAw.PREMIUM_UPSELL_VIEWED, {
                type: sq.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            });
    }, [d, u]);
    let A = a ? TU.wL : oa.$n;
    return (0, E.jsx)(ug.A, {
        forcedDivider: r,
        borderType: cD.i.PREMIUM,
        hasBackground: !0,
        title: l,
        showBorder: o,
        errors: m,
        className: s,
        children: (0, E.jsxs)("div", {
            className: T1.NC,
            children: [
                (0, E.jsx)(A, {
                    size: oa.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, T0.W)({ analyticsLocations: u, guild: i, initialSelectedEffect: n });
                    },
                    className: e6()({ [T1.yj]: a }),
                    children: j.intl.string(j.t["/dRfCf"]),
                }),
                (void 0 === g ? null != c : null != g) &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: T1.DT,
                        children: (0, E.jsx)(eG.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != i ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.uMuafO),
                            onClick: () => {
                                (0, Tw.p)({ guildId: i?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var T3 = i(13875),
    T6 = i(515727),
    T4 = i(238780);
function T7(e) {
    let { user: t, guild: i, sectionTitle: n } = e,
        { analyticsLocations: s } = (0, nZ.Ay)(),
        l = (0, T3.sk)("ProfileFrameSection"),
        r = (0, TS.Xf)({ user: t, guildId: i?.id }),
        { pendingProfileFrame: a, errors: o } = (0, TS.Tu)(i?.id),
        [u, d] = (0, eV.kn)([eU.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        c = u === eU.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return l
        ? (0, E.jsx)(ug.A, {
              showBorder: c,
              borderType: c ? cD.i.NEW_UPSELL : cD.i.PREMIUM,
              hasBackground: c,
              title: n,
              titleBadge: c ? (0, E.jsx)(sc.Lp, { text: j.intl.string(j.t.y2b7CA), className: T4.Ad }) : void 0,
              description: c ? j.intl.string(j.t.yMoMAt) : void 0,
              errors: o,
              children: (0, E.jsxs)("div", {
                  className: T4.NC,
                  children: [
                      (0, E.jsx)(eG.$, {
                          variant: "primary",
                          size: "sm",
                          text: j.intl.string(j.t["9/hmle"]),
                          onClick: () => {
                              (0, T6.w)({ analyticsLocations: s, guild: i }), d(ig.i.TAKE_ACTION);
                          },
                      }),
                      (void 0 === a ? null != r : null != a) &&
                          (0, E.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: T4.DT,
                              children: (0, E.jsx)(eG.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: null != i ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.nQBruk),
                                  onClick: () => {
                                      (0, Tw.p)({ guildId: i?.id, profileFrame: null });
                                  },
                              }),
                          }),
                  ],
              }),
          })
        : null;
}
var T5 = i(602853),
    T8 = i(654107),
    T9 = i(999291),
    xe = i(101928),
    xt = i(317097),
    xi = i(508274),
    xn = i(919796),
    xs = i(773431);
function xl(e) {
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
        c = (0, T5.r)(er.A.colors.BACKGROUND_BASE_LOW).hex(),
        g = er.A.colors.BACKGROUND_MOD_MUTED.css,
        m = (0, Tv.sN)(n),
        A = (0, xt.Hl)(n),
        h = A === c ? g : A,
        T = m ? er.A.unsafe_rawColors.WHITE.css : er.A.unsafe_rawColors.PRIMARY_530.css,
        x = (0, xn.A)(a),
        p = (0, xn.A)(o),
        [f, N] = S.useState((0, dN.A)());
    return (
        S.useEffect(() => {
            (x !== a || p !== o) && N((0, dN.A)());
        }, [o, a, p, x]),
        (0, E.jsx)(ee.Y, {
            targetElementRef: d,
            positionKey: f,
            renderPopout: (e) =>
                (0, E.jsx)(xi.VN, {
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
                    className: e6()(xs.oP, { [xs.r9]: l }),
                    children: [
                        (0, E.jsx)(en.D, {
                            ...i,
                            tabIndex: l ? -1 : 0,
                            onClick: l ? U.tEg : t,
                            style: { backgroundColor: A, borderColor: h },
                            className: xs.nf,
                            "aria-label": j.intl.string(j.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, E.jsx)(uS.R, {
                                size: "custom",
                                className: xs.BW,
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
var xr = i(362656);
function xa(e) {
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
        c = (0, T9.Ay)(t.id, r),
        { primaryColor: g, secondaryColor: m } = (0, xe.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: n,
            isPreview: !0,
        }),
        A = uT.Ay.canUsePremiumProfileCustomization(t),
        h = null != i ? i : t.getAvatarURL(r, 80),
        S = (0, T5.r)(er.A.unsafe_rawColors.PRIMARY_530).hex(),
        T = (0, T8.rh)(h, S, !1);
    return null == g || null == m
        ? null
        : (0, E.jsx)(ug.A, {
              title: j.intl.string(j.t.DMeO2X),
              disabled: !A && !l,
              className: e6()(xr.__invalid_profileThemesSection, a),
              showPremiumIcon: o,
              forcedDivider: d,
              children: (0, E.jsxs)("div", {
                  className: xr.hd,
                  children: [
                      (0, E.jsx)("div", {
                          className: xr.YX,
                          children: (0, E.jsx)(xl, {
                              onChange: (e) => s([e, m]),
                              color: g,
                              suggestedColors: T,
                              showEyeDropper: !0,
                              label: (0, E.jsx)(es.E, {
                                  className: xr.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: j.intl.string(j.t.C3KTQk),
                              }),
                          }),
                      }),
                      (0, E.jsx)("div", {
                          className: xr.YX,
                          children: (0, E.jsx)(xl, {
                              onChange: (e) => s([g, e]),
                              color: m,
                              suggestedColors: T,
                              showEyeDropper: !0,
                              label: (0, E.jsx)(es.E, {
                                  className: xr.yz,
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
                              className: xr.WA,
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
function xo(e) {
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
var xu = i(427262),
    xd = i(684732),
    xc = i(576705),
    xg = i(376294);
function xm(e) {
    let { errors: t, pendingNick: i, currentNick: n, username: s, user: l, guild: r } = e,
        a = (0, g.bG)([xc.A], () => xc.A.can(U.xBc.CHANGE_NICKNAME, r) || xc.A.can(U.xBc.MANAGE_NICKNAMES, r)),
        o = (0, Sb.L)(sq.PremiumTypes.TIER_2);
    return (0, E.jsxs)(ug.A, {
        title: j.intl.string(j.t.me1lRk),
        errors: t,
        children: [
            (0, E.jsx)(l9.k, {
                value: i ?? n ?? "",
                placeholder: s,
                maxLength: U.d0r,
                onChange: function (e) {
                    (0, Tw.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : j.intl.string(j.t.gzjxQi),
            }),
            o && (0, E.jsx)(TW, { user: l, guildId: r.id, className: xg.F }),
        ],
    });
}
var xA = i(574173);
let xh = "/assets/b25da78aa7949feb.png";
function xE(e) {
    let { user: t, showOverlay: i, children: n } = e,
        s = (0, c_.Ay)(),
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
              className: xA.ry,
              children: [
                  (0, E.jsx)("div", { children: n }),
                  (0, E.jsxs)("div", {
                      className: xA.Wc,
                      children: [
                          (0, E.jsx)("img", {
                              className: xA.Tn,
                              alt: j.intl.string(j.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case U.NJ8.DARK:
                                      case U.NJ8.DARKER:
                                      case U.NJ8.MIDNIGHT:
                                          return xh;
                                      case U.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return xh;
                                  }
                              })(s),
                          }),
                          (0, E.jsxs)("div", {
                              className: xA._9,
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
var xS = i(887267);
function xT() {
    let e = (0, g.bG)([io.default], () => {
            let e = io.default.getCurrentUser();
            return tz()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        t = (0, Sb.L)(sq.PremiumTypes.TIER_2),
        i = (0, g.bG)([Tu.A, ec.A], () => ec.A.getGuild(Tu.A.selectedGuildId));
    tz()(null != i, "guild should not be null");
    let {
            pendingAvatar: n,
            pendingNickname: s,
            pendingBanner: l,
            pendingBio: r,
            pendingPronouns: a,
            pendingThemeColors: o,
            errors: u,
        } = (0, g.cf)([Tu.A], () => ({ ...Tu.A.getPendingChanges(i.id), errors: Tu.A.getErrors(i.id) })),
        d = (0, TN.V7)({ userId: e.id, image: n }),
        c = (0, Ty.EC)(i.id),
        m = (0, g.bG)([TI.Ay], () => (null == i.id ? null : TI.Ay.getMember(i.id, e.id))),
        A = (0, g.bG)([T_.A], () => T_.A.getGuildMemberProfile(e.id, i.id)),
        h = uT.Ay.canUsePremiumProfileCustomization(e),
        S = (0, TS.z5)(n, m?.avatar),
        T = (0, TS.Ac)(l, A?.banner),
        x = (0, xd.l)(o, A?.themeColors),
        p = A?.bio ?? "",
        f = A?.pronouns ?? "";
    return (0, E.jsxs)("div", {
        className: xS.Q,
        children: [
            (0, E.jsx)(
                xm,
                {
                    errors: u?.nick ?? c?.nick,
                    username: xu.Ay.getName(e),
                    pendingNick: s,
                    currentNick: m?.nick,
                    user: e,
                    guild: i,
                },
                "nick",
            ),
            (0, E.jsx)(
                xo,
                {
                    sectionTitle: j.intl.string(j.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, Tw.p)({ guildId: i.id, pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: f,
                },
                "pronouns",
            ),
            (0, E.jsxs)(xE, {
                user: e,
                showOverlay: !h,
                children: [
                    (0, E.jsx)(
                        TH,
                        {
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t.lqaIxI),
                                    (0, E.jsx)(tr.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(uu.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xS.a,
                                        }),
                                    }),
                                ],
                            }),
                            showRemoveAvatarButton: S,
                            onAvatarChange: (e) =>
                                (0, Tv.rM)(e, m?.avatar, (e) => (0, Tw.p)({ guildId: i.id, avatar: e })),
                            errors: u?.avatar,
                            guildId: i.id,
                            disabled: !h,
                        },
                        "avatar",
                    ),
                    (0, E.jsx)(
                        TF,
                        {
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t["7v0T9P"]),
                                    (0, E.jsx)(tr.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(uu.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xS.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: e,
                            guild: i,
                        },
                        "decoration",
                    ),
                    !t && (0, E.jsx)(TW, { user: e, guildId: i.id }),
                    (0, E.jsx)(
                        Tq,
                        {
                            user: e,
                            guild: i,
                            titleIcon: (0, E.jsx)(tr.m, {
                                text: j.intl.string(j.t["5AFxuK"]),
                                children: (0, E.jsx)(uu.t, { size: "md", color: "currentColor", className: xS.a }),
                            }),
                        },
                        "nameplate",
                    ),
                    (0, E.jsx)(
                        T2,
                        {
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t.wR5wOo),
                                    (0, E.jsx)(tr.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(uu.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xS.a,
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
                        T7,
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
                                            className: xS.a,
                                        }),
                                    }),
                                ],
                            }),
                        },
                        "frame",
                    ),
                    (0, E.jsx)(
                        T$,
                        {
                            showRemoveBannerButton: T,
                            errors: u?.banner,
                            onBannerChange: (e) =>
                                (0, Tv.rM)(e, A?.banner, (e) => (0, Tw.p)({ guildId: i.id, banner: e })),
                            guildId: i.id,
                            disabled: !h,
                        },
                        "banner",
                    ),
                    (0, E.jsx)(xa, {
                        user: e,
                        pendingAvatarSrc: d,
                        pendingColors: o,
                        onThemeColorsChange: (e) => (0, Tw.p)({ guildId: i.id, themeColors: e }),
                        guildId: i.id,
                        showResetThemeButton: x,
                    }),
                    (0, E.jsx)(
                        TM,
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
                                            className: xS.a,
                                        }),
                                    }),
                                ],
                            }),
                            onBioChange: (e) => (0, Tw.p)({ guildId: i.id, bio: e }),
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
var xx = i(405318);
function xp(e) {
    (0, K.openModalLazy)(async () => {
        let { default: t } = await Promise.all([i.e("51762"), i.e("66901"), i.e("61129")]).then(i.bind(i, 475312));
        return (i) => (0, E.jsx)(t, { source: { ...e, page: U.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...i });
    });
}
function xf(e) {
    let { selectedGuild: t, onGuildChange: i } = e,
        { analyticsLocations: n } = (0, nZ.Ay)(e1.A.USER_SETTINGS_GUILD_PROFILE),
        s = (0, g.bG)([io.default], () => {
            let e = io.default.getCurrentUser();
            return tz()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        l = (0, g.bG)([TI.Ay], () => (null != t ? TI.Ay.getMember(t.id, s.id) : null)),
        r = (0, g.bG)([T_.A], () => !T_.A.isFetchingProfile(s.id, t?.id)),
        a = (0, g.bG)([eB.A], () => eB.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, g.cf)([Tu.A], () => Tu.A.getPendingChanges(t?.id)),
        c = (0, TN.V7)({ userId: s.id, image: o }),
        m = (0, TS.lw)({
            pendingValue: u,
            userValue: s?.collectibles?.nameplate,
            guildValue: l?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: A } = (0, TS.B0)(s, t?.id);
    return (S.useEffect(() => () => sa.h.wait(Th.IM), []), a)
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
                                  (0, E.jsx)(Tp, {
                                      profilePreviewTitle: (0, E.jsx)(eP.D, {
                                          variant: "heading-md/medium",
                                          className: xx.YV,
                                          children: j.intl.formatToPlainString(j.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, E.jsx)(Tf.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: A,
                                          user: s,
                                          guild: t,
                                          canUsePremiumCustomization: uT.Ay.canUsePremiumProfileCustomization(s),
                                          onUpsellClick: xp,
                                          containerClassName: xx.ti,
                                      }),
                                      nameplatePreview: (0, E.jsx)(TE.A, {
                                          ...d,
                                          pendingDisplayNameStyles: A,
                                          user: s,
                                          guildId: t?.id,
                                          nameplate: m,
                                          className: null == m ? xx.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, E.jsx)(xT, {}),
                                  }),
                              ],
                          })
                        : (0, E.jsx)(Tb, {}),
                ],
            })
          : (0, E.jsx)(df.y, {});
}
var xN = i(903209),
    x_ = i(39409);
let xI = (e) => {
    let { children: t, notice: i } = e;
    return (0, E.jsxs)("div", { className: x_.r, children: [i, (0, E.jsx)("div", { children: t })] });
};
var xC = i(269115);
let xb = (0, w.mj)({
    name: "2026-06-edit-profile-collectibles-upsell-banner",
    kind: "user",
    defaultConfig: !0,
    variations: { 1: !1 },
});
var xy = i(823092),
    xv = i(564064),
    xj = i(379197),
    xO = i(488430),
    xR = i(457421),
    xD = i(940622),
    xL = i(559474),
    xP = i(144030);
let xG = () => {
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
        } = ((e = (0, xD.mb)(xL.RN.UPSELL_BANNER)),
        (t = (0, xD.mb)(xL.RN.UPSELL_BANNER_POPOUT)),
        (i = (0, g.bG)([xR.A], () => xR.A.getMarketingBySurface(xj.R.EDIT_PROFILE_SETTINGS))),
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
            () => ({ ...n, type: xO.G.BANNER, asset: e ?? n.asset, popoutAsset: t ?? n.popoutAsset }),
            [e, t, n],
        )),
        { navigateWithValidation: m } = (0, xy.L_)();
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
            className: xP.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, E.jsx)("div", {
                    className: xP.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, E.jsx)("img", { src: a, className: xP.Qw, alt: "" }),
                }),
                (0, E.jsxs)("div", {
                    className: xP.Em,
                    children: [
                        (0, E.jsx)(eP.D, {
                            variant: "heading-lg/extrabold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: xP.DD,
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
                    onClick: () => {
                        m(() =>
                            (0, xv.Cz)({
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
var xM = i(451909),
    xU = i(202639),
    xV = i(400669),
    xk = i(835071),
    xw = i(422936),
    xB = i(234419),
    xF = i(590180),
    xz = i(898461),
    xX = i(207803),
    xY = i(508425),
    xH = i(559949);
let xK = {
        above_the_clouds: {
            preset: "above_the_clouds",
            themeColors: [752280, 9215590],
            avatarDecorationSkuId: "1144059132517826601",
            displayNameStyles: { fontId: xH.x.CHICLE, effectId: xY.z.POP, colors: [959694] },
            getName: () => j.intl.string(j.t["TFc+iF"]),
            getHeaderSrc: () => i(702051).A,
            getBannerSrc: (e) => (e ? i(735161).A : i(887e3).A),
        },
        cyberpunk: {
            preset: "cyberpunk",
            themeColors: [1967991, 742532],
            avatarDecorationSkuId: null,
            displayNameStyles: { fontId: xH.x.PIXELIFY, effectId: xY.z.NEON, colors: [2949343] },
            getName: () => j.intl.string(j.t["4g+5bq"]),
            getHeaderSrc: () => i(272017).A,
            getBannerSrc: (e) => (e ? i(735271).A : i(208574).A),
        },
        shadow_realm: {
            preset: "shadow_realm",
            themeColors: [0, 4458504],
            avatarDecorationSkuId: "1144058522808614923",
            displayNameStyles: { fontId: xH.x.NEO_CASTEL, effectId: xY.z.TOON, colors: [0xff0000] },
            getName: () => j.intl.string(j.t.ycg1xj),
            getHeaderSrc: () => i(863653).A,
            getBannerSrc: (e) => (e ? i(538263).A : i(576974).A),
        },
        starlit_dream: {
            preset: "starlit_dream",
            themeColors: [5123751, 590625],
            avatarDecorationSkuId: "1144058844004233369",
            displayNameStyles: { fontId: xH.x.CHERRY_BOMB, effectId: xY.z.TOON, colors: [3343795] },
            getName: () => j.intl.string(j.t["9WLHvr"]),
            getHeaderSrc: () => i(434361).A,
            getBannerSrc: (e) => (e ? i(700309).A : i(135572).A),
        },
        neon_space: {
            preset: "neon_space",
            themeColors: [6094952, 1007678],
            avatarDecorationSkuId: null,
            displayNameStyles: { fontId: xH.x.MUSEO_MODERNO, effectId: xY.z.NEON, colors: [28737] },
            getName: () => j.intl.string(j.t.UdNuqi),
            getHeaderSrc: () => i(301928).A,
            getBannerSrc: (e) => (e ? i(285974).A : i(775627).A),
        },
    },
    xW = (e) => xK[e],
    xZ = Object.keys(xK),
    xQ = (e) => {
        let t = null == e ? xZ : xZ.filter((t) => t !== e);
        return t[Math.floor(Math.random() * t.length)];
    };
var xq = i(371912),
    xJ = i(674253);
function x$(e) {
    let { preset: t, onShuffle: i } = e,
        n = (0, g.bG)([i7.Ay], () => i7.Ay.useReducedMotion),
        s = (0, xq.Xf)({ useReducedMotion: n }),
        { name: l, header: r } = S.useMemo(() => {
            let e = xW(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, E.jsxs)("div", {
        className: xJ.kL,
        children: [
            (0, E.jsx)(en.D, {
                onClick: () => {
                    i(), s.startAnimation(!1);
                },
                className: xJ.x6,
                "aria-label": j.intl.string(j.t["44yJxh"]),
                children: s.render(),
            }),
            (0, E.jsxs)(en.D, {
                onClick: () => {
                    i(), s.startAnimation(!1);
                },
                "aria-label": `${l}: ${j.intl.string(j.t["44yJxh"])}`,
                className: xJ.Lt,
                children: [
                    (0, E.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: xJ.L_ }),
                    (0, E.jsx)(es.E, { className: xJ._e, variant: "text-sm/bold", color: "always-white", children: l }),
                ],
            }),
        ],
    });
}
var x0 = i(410516),
    x1 = i(811611),
    x2 = i(515718),
    x3 = i(507553);
function x6(e, t) {
    let i = x3.A.useField("scrollPosition"),
        n = (0, g.bG)([i7.Ay], () => i7.Ay.useReducedMotion);
    (0, S.useEffect)(() => {
        let s = e.current;
        if (null == s || i !== t) return;
        let l = requestAnimationFrame(() => {
            s.scrollIntoView({ behavior: n ? "auto" : "smooth" }), x3.A.setState({ scrollPosition: null });
        });
        return () => cancelAnimationFrame(l);
    }, [e, t, i, n]);
}
var x4 = i(844222),
    x7 = i(314649);
function x5(e) {
    let { user: t } = e,
        { reducedMotion: n } = S.useContext(x4.C),
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
        } = (0, g.cf)([Tu.A], () => {
            let e = Tu.A.getPendingChanges(),
                t = Tu.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        p = (0, TN.V7)({ userId: t.id, image: A ?? s });
    return (0, E.jsx)(Tf.A, {
        user: t,
        pendingPronouns: d,
        pendingBio: c,
        pendingBanner: h ?? l ?? i(636763),
        pendingDisplayNameStyles: x ?? o,
        pendingAvatar: p,
        pendingThemeColors: m ?? u,
        pendingAvatarDecoration: void 0 !== T ? T : r,
        pendingProfileEffect: a,
        avatarClassName: null != A || null != s || n.enabled ? void 0 : x7.WX,
        containerClassName: x7.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var x8 = i(461414);
function x9(e) {
    let { user: t, isVisible: i, shouldShow: n } = e,
        s = uT.Ay.isPremium(t),
        l = uT.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, g.cf)([Tu.A], () => {
            let e = Tu.A.getPendingChanges(),
                t = Tu.A.getErrors(),
                i = Tu.A.getTryItOutChanges();
            return { ...e, ...i, errors: t };
        }),
        { preset: c, onShuffle: m } = (function () {
            let e = (0, g.bG)([i7.Ay], () => i7.Ay.useReducedMotion),
                [t, i] = (0, S.useState)(xQ()),
                {
                    banner: n,
                    themeColors: s,
                    avatarDecorationSkuId: l,
                    displayNameStyles: r,
                } = (0, S.useMemo)(() => {
                    let i = xW(t);
                    return {
                        banner: i.getBannerSrc(e),
                        themeColors: i.themeColors,
                        avatarDecorationSkuId: i.avatarDecorationSkuId,
                        displayNameStyles: i.displayNameStyles,
                    };
                }, [t, e]),
                a = (0, g.bG)([xF.A], () => {
                    let e = xF.A.getProduct(l);
                    return (0, xz.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, S.useEffect)(() => {
                (0, xX.w5)({ banner: n, themeColors: s, avatarDecoration: a, displayNameStyles: r });
            }, [n, s, a, r]);
            let o = (0, S.useCallback)(() => {
                let e = xQ(t);
                i(e), G.default.track(U.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: e });
            }, [t]);
            return { preset: t, onShuffle: o };
        })(),
        A = S.useRef(null);
    x6(A, nw._F.TRY_IT_OUT);
    let { analyticsLocations: h, sourceAnalyticsLocations: T } = (0, nZ.Ay)(e1.A.USER_SETTINGS_TRY_OUT_PREMIUM),
        x = (e) => {
            e &&
                (d?.startsWith("https:") === !0
                    ? fetch(d)
                          .then((e) => e.blob())
                          .then((e) => (0, x2.We)(e))
                          .then((e) => {
                              (0, Tw.p)({ avatar: u, themeColors: o, banner: e });
                          })
                          .catch(() => {
                              (0, Tw.p)({ avatar: u, themeColors: o });
                          })
                    : null != d
                      ? (0, Tw.p)({ avatar: u, themeColors: o, banner: d })
                      : (0, Tw.p)({ avatar: u, themeColors: o }),
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
    let p = (0, xB.V)()?.subscription_trial?.sku_id === sq.pe.TIER_2,
        f = (0, xw.O)(),
        N = (0, x0.U9)(f, sq.pe.TIER_2);
    return n
        ? (0, E.jsx)(nZ.f5, {
              value: h,
              children: (0, E.jsxs)(cD.A, {
                  ref: A,
                  className: x8.MT,
                  type: cD.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, E.jsx)(Tp, {
                          stickyPreview: !1,
                          layoutClassName: x8.th,
                          profilePreviewTitle: (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(uu.t, { size: "md", color: "currentColor", className: x8.PC }),
                                  j.intl.string(j.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, E.jsxs)(E.Fragment, {
                              children: [(0, E.jsx)(x$, { preset: c, onShuffle: m }), (0, E.jsx)(x5, { user: t })],
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
                                              className: x8.h_,
                                              variant: "text-sm/normal",
                                              children: j.intl.string(j.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, E.jsx)(xa, {
                                      className: x8.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, TN.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: xX.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, E.jsx)(T$, {
                                      className: x8.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: xX.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !l &&
                                      (0, E.jsx)(TH, {
                                          className: x8.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: xX.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: j.intl.string(j.t["7z0D1c"]),
                                          sectionTitle: j.intl.string(j.t.vtFfPX),
                                      }),
                                  (0, E.jsx)(TW, { user: t, className: x8.fz }),
                                  !p &&
                                      (0, E.jsx)(es.E, {
                                          variant: "text-sm/normal",
                                          children: j.intl.string(j.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !p &&
                          (0, E.jsx)(xU.d, {
                              onSubscribeModalClose: x,
                              className: x8.Kv,
                              showUpsell: !0,
                              text: j.intl.format(j.t.TmfgI2, {
                                  onClick: () => {
                                      (0, xk.K)({ onSubscribeFinish: x });
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
                                  (0, E.jsx)("div", { className: x8.BU }),
                                  (0, E.jsx)(x1.Ay, {
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
var pe = i(814390),
    pt = i(909536),
    pi = i(843282),
    pn = i(145497),
    ps = i(685073),
    pl = i(534400),
    pr = i(581781),
    pa = i(743981),
    po = i(51358);
let pu = (0, sZ.Ld)(),
    pd = S.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: i, onChange: n } = e,
            s = S.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            l = (0, g.bG)([io.default], () => (0, ps.Zo)(io.default.getCurrentUser()?.primaryGuild).guildId),
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
                        : (0, E.jsx)(pr.A, {
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
                        : (0, E.jsx)(pn.j, {
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
                        : (0, E.jsx)(pl.o9, {
                              guildId: t.id,
                              guildTag: i,
                              guildBadge: t.profile?.badge ?? void 0,
                              badgeSize: pa.Sl.SIZE_16,
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
            x6(x, nw._F.GUILD_TAG),
            (0, E.jsxs)(ug.A, {
                title: j.intl.string(j.t.Pdd1nd),
                titleId: pu,
                ref: x,
                children: [
                    (0, E.jsx)(es.E, {
                        className: po.VA,
                        variant: "text-sm/normal",
                        children: j.intl.string(j.t.mlZ6Jx),
                    }),
                    (0, E.jsx)(pi.Pw, {
                        className: po.Lt,
                        optionClassName: po.S0,
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
var pc = i(318785),
    pg = i(556729);
let pm = (0, sZ.Ld)();
function pA(e) {
    let t = (0, Sb.L)(sq.PremiumTypes.TIER_2);
    return (0, E.jsxs)(ug.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: j.intl.string(j.t["9AjdkD"]),
        titleId: pm,
        children: [
            (0, E.jsx)("div", {
                children: (0, E.jsx)(l9.k, {
                    "aria-labelledby": pm,
                    placeholder: e.placeholder,
                    maxLength: U.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, E.jsx)(TW, { user: e.user, className: pg.F }),
        ],
    });
}
function ph(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: i } = e,
        n = D.m$.useSetting(),
        s = void 0 !== i ? i : n;
    return (0, E.jsx)(J.d, {
        label: j.intl.string(j.t["3cWDuO"]),
        description: s ? null : j.intl.formatToPlainString(j.t.aYhclf, { username: t }),
        checked: !s,
        onChange: (e) => {
            !e === n ? (0, Ta._e)() : (0, Tw.p)({ legacyUsernameDisabled: !e });
        },
    });
}
function pE(e) {
    let { user: t, savedUserColor: i, pendingColor: n, setPendingAccentColor: s } = e,
        l = t.getAvatarURL(null, 80),
        r = (0, T5.r)(er.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, T8.rh)(l, r, !1),
        o = (0, xt.LX)(a[0]);
    return (0, E.jsx)(ug.A, {
        title: j.intl.string(j.t["/X3fkf"]),
        children: (0, E.jsx)(xl, { onChange: (e) => s(e), color: n ?? i ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var pS = i(518477);
let pT = () => {
    let e = (0, g.bG)([cF.default], () => cF.default.getId());
    return (0, E.jsx)(ug.A, {
        title: j.intl.string(j.t.Jzj9q4),
        children: (0, E.jsx)(eG.$, {
            text: j.intl.string(j.t.Geikwq),
            onClick: () => {
                (0, Tg.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [e1.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: pS.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var px = i(594453);
function pp() {
    let e = (0, g.bG)([io.default], () => {
            let e = io.default.getCurrentUser();
            return tz()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e;
        }),
        t = (0, g.bG)([T_.A], () => T_.A.getUserProfile(e.id)),
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
        } = (0, g.cf)([Tu.A], () => {
            let e = Tu.A.getPendingChanges(),
                t = Tu.A.getErrors();
            return { ...e, errors: t };
        }),
        m = (0, TN.V7)({ userId: e.id, image: i }),
        A = (0, Ty.EC)(),
        h = uT.Ay.canUsePremiumProfileCustomization(e),
        S = (0, TS.z5)(i, e.avatar),
        T = (0, TS.Ac)(s, t?.banner),
        x = (0, T9.Ay)(e.id),
        p = x?.getLegacyUsername(),
        f = (c.global_name?.length ?? 0) > 0 ? c.global_name : (A?.nick ?? []),
        N = (c.bio?.length ?? 0) > 0 ? c.bio : (A?.bio ?? []),
        _ = (0, pc.b)();
    return (0, E.jsxs)("div", {
        className: px.Q,
        children: [
            (0, E.jsx)(pA, {
                placeholder: e.username,
                errors: f,
                currentGlobalName: e.globalName,
                pendingGlobalName: n,
                onGlobalNameChange: (e) => (0, Tw.p)({ globalName: e }),
                user: e,
            }),
            (0, E.jsx)(
                xo,
                {
                    sectionTitle: j.intl.string(j.t["+T3RI/"]),
                    errors: c.pronouns,
                    onPronounsChange: (e) => (0, Tw.p)({ pronouns: e }),
                    pendingPronouns: r,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, E.jsx)(pT, {}),
            (0, E.jsx)(
                TH,
                {
                    onAvatarChange: (e) => {
                        (0, Tw.p)({ avatar: e }), (0, TS.WU)(null == e ? "remove" : "set");
                    },
                    showRemoveAvatarButton: S,
                    errors: c.avatar,
                    sectionTitle: j.intl.string(j.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, E.jsx)(TF, { user: e, sectionTitle: j.intl.string(j.t["7v0T9P"]) }, "decoration"),
            (0, E.jsx)(Tq, { user: e }),
            (0, E.jsx)(T2, { user: e, sectionTitle: j.intl.string(j.t.wR5wOo) }, "effect"),
            (0, E.jsx)(T7, { user: e, sectionTitle: j.intl.string(j.t.GWrZOd) }, "frame"),
            h
                ? (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsx)(
                              T$,
                              {
                                  showRemoveBannerButton: T,
                                  errors: c.banner,
                                  onBannerChange: (e) => (0, Tw.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, E.jsx)(xa, {
                              user: e,
                              pendingAvatarSrc: m,
                              pendingColors: o,
                              onThemeColorsChange: (e) => (0, Tw.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, E.jsx)(
                      pE,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: a,
                          setPendingAccentColor: (e) => (0, Tw.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, E.jsx)(
                TM,
                {
                    sectionTitle: j.intl.string(j.t.ZzAR2Y),
                    errors: N,
                    onBioChange: (e) => (0, Tw.p)({ bio: e }),
                    pendingBio: l,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            _.length > 0 &&
                (0, E.jsx)(pd, {
                    availablePrimaryGuilds: _,
                    pendingPrimaryGuildId: d,
                    onChange: (e) => (0, Tw.p)({ primaryGuildId: e }),
                }),
            null != p && (0, E.jsx)(ph, { legacyUsername: p, pendingLegacyUsernameDisabled: u }, "legacy_username"),
        ],
    });
}
function pf() {
    (0, K.openModalLazy)(async () => {
        let { default: e } = await Promise.all([i.e("51762"), i.e("66901"), i.e("41704")]).then(i.bind(i, 562011));
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
var pN = i(743539);
function p_() {
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
        } = (0, g.cf)([Tu.A], () => ({ ...Tu.A.getPendingChanges(), showNotice: Tu.A.showNotice() })),
        a = (0, TN.V7)({ userId: e.id, image: n }),
        o = (0, TS.lw)({ pendingValue: s, userValue: e?.collectibles?.nameplate }),
        u = (0, pe.A)() && null != i ? xM.Ay.parse(void 0, i).content : i,
        d = uT.Ay.canUsePremiumProfileCustomization(e),
        c = (0, pt.St)("edit-profile-upsell"),
        { analyticsLocations: m } = (0, nZ.Ay)(e1.A.USER_SETTINGS_USER_PROFILE),
        A = xb.useConfig({ location: "edit-profile-upsell" });
    S.useEffect(() => () => sa.h.wait(Ta.IM), []);
    let [h, T] = S.useState(!1),
        x = !d,
        p = S.useRef(null);
    return t
        ? (0, E.jsx)(dT.A, {})
        : (0, E.jsxs)(nZ.f5, {
              value: m,
              children: [
                  A && (0, E.jsx)(xG, {}),
                  (0, E.jsx)(Tp, {
                      profilePreview: (0, E.jsx)(Tf.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: pf,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: pN.ti,
                      }),
                      nameplatePreview: (0, E.jsx)(TE.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? pN.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, E.jsx)(pp, {}),
                  }),
                  (0, E.jsx)(xC.L, {
                      innerRef: p,
                      onChange: (e) => T(e),
                      threshold: 0.25,
                      active: x,
                      children: (0, E.jsx)("div", {
                          ref: p,
                          children: (0, E.jsx)(x9, { user: e, shouldShow: x, isVisible: h }),
                      }),
                  }),
                  x &&
                      !l &&
                      (0, E.jsx)(xU.d, {
                          className: pN.EL,
                          showUpsell: !h,
                          text: j.intl.format(j.t.TmfgI2, { onClick: () => (0, xk.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: c
                              ? (0, E.jsx)(xV.l, { size: "md", location: e1.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL })
                              : void 0,
                          button: (0, E.jsx)("div", {
                              className: pN.Xl,
                              children: (0, E.jsx)(eG.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      G.default.track(U.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          p?.current?.scrollIntoView({ behavior: "smooth" });
                                  },
                                  text: j.intl.string(j.t.uw9zI7),
                                  icon: uu.t,
                              }),
                          }),
                      }),
              ],
          });
}
var pI = i(625494),
    pC = i(454078);
let pb = { [nw.Eq.USER_PROFILE]: "main_profile_tab", [nw.Eq.GUILD]: "guild_profile_tab" },
    py = (0, a.E2)(u.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, g.bG)([ra.A, eg.Ay, Tu.A], () => {
                    let e = Tu.A.selectedGuildId ?? ra.A.getGuildId();
                    return null == e || Tu._.has(e) ? eg.Ay.getFlattenedGuildIds().find((e) => !Tu._.has(e)) : e;
                }),
                t = (0, g.bG)([ec.A], () => ec.A.getGuild(e)),
                i = (0, g.bG)([Tu.A], () => Tu.A.showNotice()),
                n = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
                s = x3.A.useField("subsection");
            return (
                S.useEffect(() => {
                    (0, rq._)(pb[s]);
                }, [s]),
                S.useEffect(() => {
                    null != n && t?.id != null && (0, xN.A)(n.id, n.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, n]),
                (0, E.jsx)(xI, {
                    children: (0, E.jsxs)(cN.F, {
                        component: (0, E.jsx)(eo.A, {
                            children: (0, E.jsx)(eP.D, {
                                variant: "heading-xl/normal",
                                children: j.intl.string(j.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, E.jsxs)(Tm.V, {
                                className: pC.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: s,
                                onItemSelect: function (e) {
                                    if (s !== e) {
                                        if (i) {
                                            (0, rJ.fO)({ duration: 300, intensity: TA.n3 }),
                                                pI._.dispatch(U.jej.EMPHASIZE_NOTICE);
                                            return;
                                        }
                                        e === nw.Eq.GUILD && null != t && (0, Th.V2)(t.id),
                                            x3.A.setState({ subsection: e });
                                    }
                                },
                                children: [
                                    (0, E.jsx)(
                                        Tm.V.Item,
                                        {
                                            className: pC.YU,
                                            id: nw.Eq.USER_PROFILE,
                                            children: j.intl.string(j.t["2p07FR"]),
                                        },
                                        nw.Eq.USER_PROFILE,
                                    ),
                                    (0, E.jsx)(
                                        Tm.V.Item,
                                        {
                                            className: e6()(pC.YU, pC.HY),
                                            "aria-label": j.intl.string(j.t.kPHroX),
                                            id: nw.Eq.GUILD,
                                            children: j.intl.string(j.t.kPHroX),
                                        },
                                        nw.Eq.GUILD,
                                    ),
                                ],
                            }),
                            s === nw.Eq.GUILD
                                ? (0, E.jsx)(xf, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (i) {
                                              (0, rJ.fO)({ duration: 300, intensity: TA.n3 }),
                                                  pI._.dispatch(U.jej.EMPHASIZE_NOTICE);
                                              return;
                                          }
                                          null != e && (0, Th.JJ)(e.id);
                                      },
                                  })
                                : (0, E.jsx)(p_, {}),
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
    pv = (0, a.zZ)(u.X.PROFILE_CATEGORY, { buildLayout: () => [py] });
var pj = i(294666);
let pO = () => {
        let e = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
            { avatarSrc: t, avatarDecorationSrc: i } = (0, Tc.A)({ userId: e?.id, size: i4._3.SIZE_48 });
        return null == e
            ? null
            : (0, E.jsxs)("div", {
                  className: pj.a5,
                  children: [
                      (0, E.jsx)(i6.eu, {
                          src: t,
                          avatarDecoration: i,
                          size: i4._3.SIZE_48,
                          "aria-label": j.intl.string(j.t.lqaIxI),
                      }),
                      (0, E.jsxs)("div", {
                          className: pj.FS,
                          children: [
                              (0, E.jsx)(es.E, {
                                  color: "text-strong",
                                  variant: "text-md/medium",
                                  lineClamp: 1,
                                  children: e.globalName ?? e.username,
                              }),
                              (0, E.jsxs)("div", {
                                  className: pj.Fk,
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
    },
    pR = (0, a.t_)(u.X.PROFILE_PANEL, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        notice: { stores: [Tu.A], element: To.A },
        initialize: () => () =>
            sa.h.wait(() => {
                (0, Ta.F7)();
            }),
        buildLayout: () => [pv],
    }),
    pD = (0, a.i4)(u.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        icon: pP,
        StronglyDiscouragedCustomComponent: pO,
        usePredicate: () => !(0, Td.X)("user_settings_sidebar"),
        buildLayout: () => [pR],
    }),
    pL = (0, a.i4)(u.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        icon: pP,
        StronglyDiscouragedCustomComponent: pO,
        usePredicate: () => (0, Td.X)("user_settings_sidebar"),
        onClick: () => {
            let e = cF.default.getId();
            (0, Tg.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function pP() {
    let e = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: i } = (0, Tc.A)({ userId: e?.id, size: i4._3.SIZE_48 });
    return (0, E.jsx)(i6.eu, { src: t, avatarDecoration: i, size: i4._3.SIZE_20, "aria-hidden": !0 });
}
let pG = (0, a.WI)(u.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [pD, pL] });
var pM = i(98207),
    pU = (i(204925), i(818348));
let pV = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, K.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([i.e("40933"), i.e("19623"), i.e("21007")]).then(i.bind(i, 888363));
            return (i) => (0, E.jsx)(t, { claimRequired: e, ...i });
        },
        { onCloseRequest: e ? pU.tE : null, onCloseCallback: t },
    );
};
var pk = i(940856),
    pw = i(36149),
    pB = i(207560);
function pF(e) {
    let t = (0, pB.fk)(),
        i = (0, pw.b8)(),
        n = (0, pw.yM)(),
        s = (0, pw.Y2)();
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
var pz = i(516761);
function pX() {
    let e = j.intl.string(j.t.XxRj7f);
    return (0, E.jsxs)(es.E, {
        variant: "text-md/medium",
        children: [
            `${e} \u{2022} `,
            j.intl.format(pz.default.WM5adV, {
                handleOnHelpUrlHook: () => window.open(tN.A.getArticleURL(U.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank"),
            }),
        ],
    });
}
let pY = (0, a.Tf)(u.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, {
        usePredicate: () => pF("edit"),
        useTitle: () => j.intl.string(j.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: h._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: pX }),
        useLabel: () => j.intl.string(j.t.bt75uw),
        onClick: function () {
            (0, K.openModalLazy)(async () => {
                let { default: e } = await i.e("45361").then(i.bind(i, 151080));
                return (t) => (0, E.jsx)(e, { ...t });
            });
        },
    }),
    pH = (0, a.E2)(u.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, {
        usePredicate: () => pF("info"),
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
                                onClick: pU.tE,
                                text: j.intl.string(j.t.bt75uw),
                                "aria-hidden": !0,
                            }),
                        }),
                    ],
                }),
            });
        },
    });
var pK = i(139716),
    pW = i(847599);
function pZ() {
    return (0, pw.yM)() ? j.intl.string(j.t.sK0dmH) : j.intl.string(j.t.lKDPGA);
}
let pQ = (0, a.Tf)(u.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, {
        usePredicate: () => pF("verify"),
        useTitle: () => j.intl.string(j.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: h._1.TEXT, useText: pZ }),
        useLabel: function () {
            return (0, pw.yM)() ? j.intl.string(j.t["9KiIz6"]) : j.intl.string(j.t.DVywUB);
        },
        onClick: () => pK.A.showAgeVerificationGetStartedModal({ entryPoint: pW.q1.ACCOUNT_AGE_GROUP }),
    }),
    pq = (0, a.Tf)(u.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, g.bG)([io.default], () => io.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => j.intl.string(j.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: h._1.TEXT, useText: () => j.intl.string(j.t.qxk9zo) }),
        useLabel: () => j.intl.string(j.t.BleMPB),
        onClick: () => pV(),
    });
function pJ(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function p$(e) {
    let [t, i] = e.split("@");
    return `${"*".repeat(t.length)}@${i}`;
}
function p0(e) {
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
function p1() {
    let e = (0, g.bG)([io.default], () => io.default.getCurrentUser()?.email);
    return null == e
        ? (0, E.jsx)(es.E, { variant: "text-md/medium", children: j.intl.string(j.t["8SfTN/"]) })
        : (0, E.jsx)(p0, {
              text: e,
              censor: p$,
              revealLabel: j.intl.string(j.t["Zvx+yV"]),
              hideLabel: j.intl.string(j.t.nqTD4d),
              redesign: !0,
          });
}
let p2 = (0, a.Tf)(u.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, g.bG)([io.default], () => io.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => j.intl.string(j.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: h._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: p1 }),
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
            let { default: e } = await Promise.all([i.e("97570"), i.e("20577"), i.e("65861")]).then(i.bind(i, 97060));
            return (t) => (0, E.jsx)(e, { ...t });
        });
    },
});
var p3 = i(557722),
    p6 = i(53516);
function p4() {
    let e = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, E.jsx)(es.E, { variant: "text-md/medium", children: j.intl.string(j.t.I5kDqj) })
        : (0, E.jsx)(q.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, E.jsx)(p0, {
                  text: t,
                  censor: pJ,
                  revealLabel: j.intl.string(j.t.eY3xlT),
                  hideLabel: j.intl.string(j.t["jllbv+"]),
                  redesign: !0,
              }),
          });
}
let p7 = (0, a.Tf)(u.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, g.bG)([io.default], () => io.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => j.intl.string(j.t.kerONq),
    useAriaLabel: function () {
        return null == (0, g.bG)([io.default], () => io.default.getCurrentUser()?.phone)
            ? j.intl.string(j.t["SfUuE+"])
            : j.intl.string(j.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: h._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: p4 }),
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
                          i.e("56643"),
                          i.e("82662"),
                          i.e("89545"),
                          i.e("11493"),
                          i.e("84704"),
                          i.e("86197"),
                      ]).then(i.bind(i, 615715));
                      return (t) => (0, E.jsx)(e, { reason: p3.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: p6.V },
              )
            : (0, K.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([i.e("25866"), i.e("63314")]).then(i.bind(i, 660740));
                  return (t) => (0, E.jsx)(e, { ...t });
              });
    },
});
function p5() {
    let e = (0, g.bG)([io.default], () => io.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function p8() {
    let e = (0, Ty.EC)(),
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
let p9 = (0, a.Tf)(u.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => j.intl.string(j.t.qqhR3L),
        useTrailingContent: () => ({ type: h._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: p8 }),
        useLabel: () => j.intl.string(j.t.bt75uw),
        useAriaLabel: () => j.intl.string(j.t.JECa91),
        useSubtitle: () => (p5() ? j.intl.string(j.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: p5,
        onClick: function () {
            (0, K.openModalLazy)(async () => {
                let { default: e } = await Promise.all([i.e("38408"), i.e("20429"), i.e("43350")]).then(
                    i.bind(i, 667792),
                );
                return (t) => (0, E.jsx)(e, { ...t });
            });
        },
    }),
    fe = (0, a.zZ)(u.X.ACCOUNT_INFO_CATEGORY, {
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
                            button: { useText: () => j.intl.string(j.t.lm1UKt), onClick: () => (0, pk.S)(e) },
                        }
                  : {
                        type: h.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        useTitle: () => j.intl.string(j.t["/3qnL/"]),
                        useText: () => j.intl.string(j.t.qKs3vg),
                        button: { useText: () => j.intl.string(j.t["7psymi"]), onClick: () => pV() },
                    };
        },
        buildLayout: () => [p9, pq, p2, p7, pQ, pY, pH],
    });
var ft = i(398177);
let fi = (0, a.Tf)(u.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
    useTitle: () => j.intl.string(j.t["CIGa+7"]),
    useLabel: () => j.intl.string(j.t.bt75uw),
    useAriaLabel: () => j.intl.string(j.t["FRep5/"]),
    useVariant: () => "secondary",
    onClick: () => {
        (0, K.openModal)((e) => (0, E.jsx)(ft.default, { ...e, onSuccess: () => e.onClose() }));
    },
});
var fn = i(200921);
let fs = [];
function fl() {
    fs = [];
}
class fr extends g.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return fs;
    }
}
let fa = new fr(sa.h, {
    LOGOUT: fl,
    LOGIN_SUCCESS: fl,
    FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessions: t } = e;
        fs = t.map((e) => ({ ...e, approx_last_used_time: new Date(e.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessionIdHashes: t } = e,
            i = [...fs],
            n = !1;
        for (let e of t) {
            let t = i.findIndex((t) => t.id_hash === e);
            t >= 0 && (i.splice(t, 1), (n = !0));
        }
        if (!n) return !1;
        fs = i;
    },
});
function fo() {
    let e = (0, g.cf)([fa], () => fa.getSessions());
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
function fu(e) {
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? j.intl.string(j.t.TXCmfL) : r4()(e).fromNow();
}
var fd = i(176524),
    fc = i(646270),
    fg = i(738678),
    fm = i(490173);
function fA(e) {
    let { icon: t, label: i, subLabel: n, description: s, children: l, muted: r } = e;
    return (0, E.jsxs)(q.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, E.jsx)(fd.A, { Icon: t, color: r ? er.A.colors.ICON_MUTED : "currentColor" }),
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
function fh(e) {
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
                            return { text: e, icon: fc.u };
                        case "horizon os":
                            return { text: e, icon: fg.G };
                        default:
                            return { text: e, icon: to.k };
                    }
                })(e.client_info?.os);
            return { location: i, platform: n, os: s, Icon: l, lastActive: t ? null : fu(e.approx_last_used_time) };
        })(t, i),
        o = [n, a].filter(N.Vq);
    return (0, E.jsx)(fA, {
        icon: r,
        label: l,
        subLabel: s,
        description: o.join(" \xb7 "),
        children:
            !i &&
            (0, E.jsx)(en.D, {
                className: fm.X,
                onClick: () => (0, fn.U0)(t.id_hash),
                "aria-label": j.intl.string(j.t.E4MJNt),
                children: (0, E.jsx)(gU.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function fE(e) {
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
let fS = (0, a.E2)(u.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            let { currentSession: e } = fo();
            return null == e
                ? (0, E.jsx)(df.y, {})
                : (0, E.jsx)(fE, {
                      title: j.intl.string(j.t.LLS19o),
                      children: (0, E.jsx)(fh, { session: e, current: !0 }),
                  });
        },
        useSearchTerms: () => [],
    }),
    fT = (0, a.E2)(u.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = fo();
            return (0, E.jsx)(s4.D, {
                label: j.intl.string(j.t.Vij32M),
                description: j.intl.string(j.t.OTXyaf),
                children: (0, E.jsx)(eG.$, {
                    onClick: () => (0, fn.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: j.intl.string(j.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [j.intl.string(j.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = fo();
            return e.length > 0;
        },
    });
var fx = i(766928);
function fp() {
    return (0, E.jsx)(fA, {
        icon: fx.W,
        label: j.intl.string(j.t.iUa0sn),
        description: j.intl.format(j.t["044+8i"], {
            onClick: () =>
                (0, eH.openUserSettings)(u.X.ACCOUNT_PANEL, { analyticsLocations: [e1.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
let ff = (0, a.E2)(u.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = fo(),
                t = (0, g.bG)([io.default], () => io.default.getCurrentUser());
            return (0, E.jsxs)(fE, {
                title: j.intl.string(j.t.xx1MWc),
                children: [
                    e.map((e) => (0, E.jsx)(fh, { session: e }, e.id_hash)),
                    t?.mfaEnabled ? null : (0, E.jsx)(fp, {}),
                ],
            });
        },
        useSearchTerms: () => [j.intl.string(j.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = fo(),
                t = (0, g.bG)([io.default], () => io.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    fN = (0, a.zZ)(u.X.SESSIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.mEndXM),
        useSubtitle: () => j.intl.string(j.t.b7ZpTM),
        initialize: () => {
            (0, fn.GY)();
        },
        buildLayout: () => [fS, ff, fT],
        useSearchTerms: () => [
            j.intl.string(j.t["+1h0k/"]),
            j.intl.string(j.t.LLS19o),
            j.intl.string(j.t.xx1MWc),
            j.intl.string(j.t.lSWsrd),
        ],
    }),
    f_ = (0, a.t_)(u.X.SESSIONS_PANEL, {
        useTitle: () => j.intl.string(j.t.mEndXM),
        useObscuredNotice: dT.L,
        buildLayout: () => [fN],
    }),
    fI = (0, a.t0)(u.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [f_],
        initialize: () => {
            (0, fn.GY)();
        },
        useTrailingDecoration: () => ({
            type: h.xn.TEXT,
            useText: () => {
                let { currentSession: e, otherSessions: t } = fo(),
                    i = t.length + +(null != e);
                return i > 0 ? j.intl.formatToPlainString(j.t.G7zwOk, { count: i }) : j.intl.string(j.t.MKDeyL);
            },
        }),
    });
var fC = i(464477);
function fb(e) {
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
function fy() {
    return (0, dt.bG)([io.default], () => {
        let e = io.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
var fv =
    (((r = {}).AVAILABLE = "available"),
    (r.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (r.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    r);
function fj() {
    let e = (0, dt.bG)([io.default], () => io.default.getCurrentUser()?.verified);
    return fC.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function fO() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, dt.bG)([ec.A, xc.A, io.default], () =>
        io.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? j.intl.string(j.t.hxf9fX)
                : j.intl.string(j.t["3iKih7"])
            : ec.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(U.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        xc.A.can(U.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? j.intl.string(j.t.OYTCUh)
                  : j.intl.string(j.t.HC8uSZ)
              : null,
    );
}
var fR = i(466034);
let fD = (0, a.Tf)(u.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => j.intl.string(j.t.lQsY7B),
        useSubtitle: () => fO(!0),
        useDisabled: () => null !== fO(!0),
        useLabel: () => j.intl.string(j.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, g.bG)([cF.default], () => cF.default.hasTOTPEnabled()),
                t = fj() === fv.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, sg.A)({
                title: j.intl.string(j.t["D+aE7g"]),
                subtitle: j.intl.string(j.t.EA4ZEk),
                variant: "critical",
                confirmText: j.intl.string(j.t.N86XcP),
                onConfirm: () => pM.A.disable(),
            }),
    }),
    fL = (0, a.zZ)(u.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => j.intl.string(j.t.RumMFo),
        useSubtitle: () => j.intl.string(j.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, g.bG)([cF.default], () => cF.default.hasTOTPEnabled()),
                t = fj() === fv.AVAILABLE;
            if (!e && t)
                return {
                    type: h.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: h.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: j.intl.string(j.t.cTNUeD),
                            onClick: fR.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (fj()) {
                case fv.UNAVAILABLE_NO_CRYPTO:
                    return { type: h.lT.INLINE_NOTICE, noticeType: "info", useText: () => j.intl.string(j.t.PhHhsj) };
                case fv.UNAVAILABLE_UNVERIFIED:
                    return {
                        type: h.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        useText: () => j.intl.string(j.t.uggF7o),
                    };
                case fv.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [fD],
    });
var fP = i(670492),
    fG = i(32880),
    fM = i(663417),
    fU = i(658675),
    fV = i(900686);
function fk() {
    (0, K.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(i.bind(i, 662758));
        return (t) =>
            (0, E.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    pM.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                        var t;
                        return (
                            (t = e),
                            void (0, K.openModalLazy)(
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
var fw = i(203082);
function fB(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function fF() {
    let e = fP.A.getVerificationKey();
    try {
        await pM.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, E2.P0)({
            message: e.body?.message ?? j.intl.string(j.t.F8FvUy),
            type: E6.Ck.FAILURE,
            id: "backup-code-regen-failed",
        });
    }
}
function fz(e) {
    let {
            code: { code: t, consumed: i },
        } = e,
        n = fB(t),
        s = S.useRef(null),
        l = (0, E.jsxs)(E.Fragment, {
            children: [(0, E.jsx)(fU.P, { checked: i }), (0, E.jsx)(es.E, { variant: "text-md/normal", children: n })],
        });
    return cK.p5
        ? (0, E.jsx)(en.D, {
              tag: "li",
              className: e6()(fw.aY, fw.vk),
              innerRef: s,
              onKeyDown: (e) => {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, cK.C)(n), s?.current?.focus());
              },
              onClick: () => {
                  (0, cK.C)(n),
                      (0, E2.P0)({ message: j.intl.string(j.t.mGZ66D), type: E6.Ck.SUCCESS, id: "backup-code-copied" });
              },
              children: l,
          })
        : (0, E.jsx)("li", { className: fw.aY, children: l });
}
let fX = (0, a.zZ)(u.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.fC9qV0),
        useSubtitle: () =>
            (0, g.bG)([fP.A], () => fP.A.getBackupCodes().length > 0)
                ? j.intl.format(j.t.tp7zEK, {})
                : j.intl.string(j.t.LoOi4S),
        usePredicate: fy,
        buildLayout: () => [fY],
    }),
    fY = (0, a.E2)(u.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.fC9qV0)],
        Component: function () {
            let e = (0, g.bG)([fP.A], () => fP.A.getBackupCodes()),
                t = S.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: i } = e;
                                return `* ${fB(t)}` + (i ? ` (${j.intl.string(j.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, E.jsx)(eG.$, { text: j.intl.string(j.t.Jc2myK), size: "sm", variant: "secondary", onClick: fk })
                : (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsx)("ul", {
                              className: fw.E5,
                              children: e.map((e) => (0, E.jsx)(fz, { code: e }, e.code)),
                          }),
                          (0, E.jsxs)(ou.e, {
                              size: "sm",
                              children: [
                                  (0, E.jsx)(fV.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, E.jsx)(eG.$, {
                                          text: j.intl.string(j.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: fG.s,
                                      }),
                                  }),
                                  (0, E.jsx)(eG.$, {
                                      text: j.intl.string(j.t["3x962E"]),
                                      variant: "secondary",
                                      icon: fM.f,
                                      onClick: fF,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    fH = (0, a.Tf)(u.X.SMS_AUTH_DISABLE_BUTTON, {
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
                        handleSubmit: pM.A.disableSMS,
                        title: j.intl.string(j.t.KLWnit),
                        children: j.intl.string(j.t["W0/Duf"]),
                    });
            }),
    }),
    fK = (0, a.zZ)(u.X.SMS_AUTH_CATEGORY, {
        useTitle: () => j.intl.string(j.t.wuHuI5),
        useSubtitle: () => (0, g.bG)([io.default], () => fb(io.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, g.bG)([io.default], () => io.default.getCurrentUser()?.hasFlag(U.nhx.MFA_SMS) ?? !1),
                t = (0, g.bG)([io.default], () => null != fb(io.default.getCurrentUser()));
            if (!e)
                return {
                    type: h.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: h.UV.BUTTON,
                            id: "sms-setup-button",
                            text: j.intl.string(j.t.Age7yU),
                            onClick: fW,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = fj(),
                t = fy(),
                i = (0, g.bG)([cF.default], () => cF.default.hasTOTPEnabled());
            return e === fv.AVAILABLE && t && i;
        },
        buildLayout: () => [fH],
    });
function fW() {
    let e = io.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            (t = { reason: p3.d.USER_SETTINGS_UPDATE, onAddedPhone: pM.A.enableSMS }),
                (0, K.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            i.e("56643"),
                            i.e("82662"),
                            i.e("89545"),
                            i.e("11493"),
                            i.e("84704"),
                            i.e("86197"),
                        ]).then(i.bind(i, 615715));
                        return (i) => (0, E.jsx)(e, { ...i, ...t });
                    },
                    { modalKey: p6.V },
                );
        } else pM.A.enableSMS();
}
var fZ = i(665671),
    fQ = i(442433),
    fq = i(917136),
    fJ = i(976910),
    f$ = i(108666);
function f0(e) {
    let { credential: t } = e;
    return (0, E.jsxs)("li", {
        className: f$.e,
        children: [
            (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(es.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, E.jsx)(es.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: j.intl.format(j.t["7JgxF5"], { lastUsed: fu(t.last_used) }),
                        }),
                ],
            }),
            (0, E.jsx)(lQ.K, {
                icon: mU.j,
                variant: "icon-only",
                size: "sm",
                "aria-label": j.intl.string(j.t["+nrTbK"]),
                onClick: (e) => {
                    (0, fQ.L3)(e, async () => {
                        let { default: e } = await i.e("32529").then(i.bind(i, 41e3));
                        return (i) => (0, E.jsx)(e, { credential: t, ...i });
                    });
                },
            }),
        ],
    });
}
let f1 = (0, a.zZ)(u.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.IBq4Y3),
        useSubtitle: () => j.intl.string(j.t.yK9edS),
        useHeaderDecoration: function () {
            if (fj() === fv.AVAILABLE)
                return {
                    type: h.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: h.UV.BUTTON,
                            id: "add-security-key-button",
                            text: j.intl.string(j.t["Tzs/fw"]),
                            icon: ay.j,
                            onClick: fZ.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (fj()) {
                    case fv.UNAVAILABLE_NO_CRYPTO:
                        return {
                            type: h.lT.INLINE_NOTICE,
                            noticeType: "info",
                            useText: () => j.intl.string(j.t.bWCGI9),
                        };
                    case fv.UNAVAILABLE_UNVERIFIED:
                        return {
                            type: h.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            useText: () => j.intl.string(j.t.uggF7o),
                        };
                    case fv.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [f2],
    }),
    f2 = (0, a.E2)(u.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [j.intl.string(j.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, g.cf)([fJ.A], () => ({
                hasFetchedCredentials: fJ.A.hasFetchedCredentials(),
                credentials: fJ.A.getCredentials(),
            }));
            return (S.useEffect(() => {
                t || fq.JQ();
            }, [t]),
            t)
                ? (0, E.jsx)(q.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, E.jsx)(f0, { credential: e }, e.id)),
                  })
                : (0, E.jsx)(df.y, {});
        },
    }),
    f3 = (0, a.t_)(u.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => j.intl.string(j.t.m0FidJ),
        buildLayout: () => [f1, fL, fK, fX],
    }),
    f6 = (0, a.t0)(u.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => ({
            type: h.xn.TEXT,
            useText: () => (fy() ? j.intl.string(j.t.lQsY7B) : j.intl.string(j.t.WsUuTt)),
        }),
        buildLayout: () => [f3],
    }),
    f4 = (0, a.zZ)(u.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => j.intl.string(j.t["0iH2vc"]),
        buildLayout: () => [fi, f6, fI],
    });
var f7 = i(308645),
    f5 = i(271995),
    f8 = i(855267);
let f9 = (0, a.E2)(u.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["16r9jm"])],
        Component: f8.A,
    }),
    Ne = (0, a.zZ)(u.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [f9] }),
    Nt = (0, a.t_)(u.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => j.intl.string(j.t["16r9jm"]),
        buildLayout: () => [Ne],
    }),
    Ni = (0, a.zZ)(u.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: () => j.intl.string(j.t["16r9jm"]),
        buildLayout: () => [Nn],
    }),
    Nn = (0, a.t0)(u.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: f5.$b,
        useSubtitle: f5.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: i } = (0, f5._k)();
            return { type: h.Xy.ICON, icon: i, color: e, backgroundColor: t };
        },
        initialize: () => {
            f7.Yn();
        },
        buildLayout: () => [Nt],
    });
var Ns = i(834981),
    Nl = i(840387),
    Nr = i(718697),
    Na = i(602339);
let No = (0, a.E2)(u.X.FAMILY_CENTER_SETTING, {
        Component: Nr.p,
        useSearchTerms: () => [
            j.intl.string(Na.default.RZqaJn),
            j.intl.string(Na.default.bdBmqy),
            j.intl.string(Na.default["gVWG+6"]),
            j.intl.string(Na.default.ahKIJO),
            j.intl.string(Na.default["8SLtqb"]),
        ],
    }),
    Nu = (0, a.zZ)(u.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [No] }),
    Nd = (0, a.t_)(u.X.FAMILY_CENTER_PANEL, {
        useTitle: () => j.intl.string(Na.default.RZqaJn),
        buildLayout: () => [Nu],
    }),
    Nc = (0, a.zZ)(u.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => j.intl.string(Na.default.RZqaJn),
        usePersistentBadge: function () {
            return S.useMemo(() => ({ badgeType: h.Xi.COUNT, useCount: Ns.VT }), []);
        },
        buildLayout: () => [Ng],
    }),
    Ng = (0, a.t0)(u.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, Ns.Li)() ? j.intl.string(Na.default.IcMQUP) : j.intl.string(Na.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, Nl.Z)(),
                t = (0, Ns.Li)();
            return e
                ? t
                    ? j.intl.string(Na.default.G8lHFU)
                    : j.intl.string(Na.default.uOLNEZ)
                : j.intl.string(Na.default.Z53oSM);
        },
        buildLayout: () => [Nd],
    });
var Nm = i(425587),
    NA = i(662758);
function Nh(e) {
    if (e.body.code === U.t02.INVALID_PASSWORD) throw e;
    (0, or.A)({ title: j.intl.string(j.t.LX0nT8), subtitle: e.body.message });
}
async function NE() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = io.default.getCurrentUser();
    if (null == t) return;
    let i = [];
    try {
        i = (await Nm.A.fetchTeams(!0)).body;
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
                  (0, E.jsx)(NA.default, {
                      ...t,
                      handleSubmit: (t) => (0, Ta.U_)(t, e).then(U.tEg, Nh),
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
                  onConfirm: () => (0, Ta.U_)("", !0),
              });
}
let NS = (0, a.Tf)(u.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => j.intl.string(j.t["gIpzR+"]),
        useSubtitle: () => j.intl.string(j.t.Bd6dOf),
        useLabel: () => j.intl.string(j.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => NE(!0),
    }),
    NT = (0, a.Tf)(u.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => j.intl.string(j.t["p/Tjtp"]),
        useSubtitle: () => j.intl.string(j.t.YvDmKb),
        useLabel: () => j.intl.string(j.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => NE(!1),
        usePredicate: () => {
            let e = (0, g.bG)([io.default], () => io.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    Nx = (0, a.zZ)(u.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [NT, NS] }),
    Np = (0, a.t_)(u.X.ACCOUNT_PANEL, {
        useTitle: () => j.intl.string(j.t["ldCE/p"]),
        initialize: function () {
            return () => {
                pM.A.clearBackupCodes(), (0, Ta.Uo)();
            };
        },
        useObscuredNotice: dT.L,
        buildLayout: () => [fe, f4, Ni, Nc, Nx],
    }),
    Nf = (0, a.i4)(u.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["ldCE/p"]),
        icon: A6.n,
        buildLayout: () => [Np],
    });
var NN = i(323384);
let N_ = (0, a.zZ)(u.X.AUTHORIZED_APPS_CATEGORY, {
        buildLayout: () => [SA],
        initialize: () => (
            Sg.A.fetch(),
            () => {
                Sm.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    NI = (0, a.t_)(u.X.AUTHORIZED_APPS_PANEL, {
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        useObscuredNotice: dT.L,
        buildLayout: () => [N_],
    }),
    NC = (0, a.i4)(u.X.AUTHORIZED_APPS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        icon: NN.k,
        buildLayout: () => [NI],
    });
var Nb = i(176781),
    Ny = i(611371);
let Nv = () =>
    (0, E.jsx)(tr.m, { asContainer: !0, text: j.intl.string(j.t["/fgfWh"]), children: (0, E.jsx)(Ny.A, {}) });
var Nj = i(888916),
    NO = i(572164),
    NR = i(430795),
    ND = i(274372),
    NL = i(16590);
let NP = (0, a.zD)(u.X.CLIPS_ENABLE_AUTOCLIPPING, {
        useTitle: () => j.intl.string(NL.default.j29uJx),
        useSubtitle: () => j.intl.format(NL.default.UCzGcQ, { learnMoreLink: tN.A.getArticleURL(U.MVz.CLIPS) }),
        useValue: () => (0, g.bG)([ND.Ay], () => ND.Ay.getEnableAutoclipping()),
        setValue: NR.uL,
        useDisabled: Nj.Rt,
    }),
    NG = (0, a.zD)(u.X.CLIPS_ENABLE_GAME_SIGNALS, {
        useTitle: () => j.intl.string(j.t.iV6KcI),
        useSubtitle: () => j.intl.string(j.t["dJ2tX+"]),
        useValue: () => (0, g.bG)([ND.Ay], () => ND.Ay.getSettings().clipSignals.enableGameSignals),
        usePredicate: () => !1,
        setValue: (e) => {
            let t = ND.Ay.getSettings().clipSignals;
            NR.PW({ ...t, enableGameSignals: e });
        },
        useDisabled: Nj.A0,
    }),
    NM = (0, a.zY)(u.X.CLIPS_AUTOCLIPPING_CARD, { buildLayout: () => [NP, NG], headerSettingKey: NP.key }),
    NU = (0, a.zZ)(u.X.CLIPS_AUTOCLIPPING_CATEGORY, {
        useTitle: () => j.intl.string(NL.default.XWkJoi),
        useSubtitle: () => j.intl.string(NL.default["MJ/VsO"]),
        usePredicate: Nj.As,
        usePersistentBadge: () => ({ badgeType: h.Xi.BETA }),
        useInlineNotice: () =>
            (0, NO.Et)()
                ? null
                : {
                      type: h.lT.INLINE_NOTICE,
                      noticeType: "info",
                      iconAlign: "center",
                      useText: () => j.intl.string(NL.default.wUpqua),
                      button: {
                          variant: "primary",
                          size: "sm",
                          useText: () => j.intl.string(NL.default.qGgW4M),
                          onClick: () => NR.yO({ clipsEnabled: !0, trackAnalytics: !0 }),
                      },
                  },
        buildLayout: () => [NM],
    });
var NV = i(974293),
    Nk = i(458977),
    Nw = i(486925),
    NB = i(696016);
let NF = (() => {
        let e = [NB.wN];
        for (let t = 10; t <= NB.qh; t += 10) e.push(t);
        return e[e.length - 1] !== NB.qh && e.push(NB.qh), e;
    })(),
    Nz = (0, a.sN)(u.X.CLIPS_AUTO_CLIP_STORAGE_LIMIT, {
        usePredicate: () => !(0, Nw.M2)(),
        useTitle: () => j.intl.string(j.t.yfsrDI),
        useSubtitle: () => j.intl.string(j.t.vlDHdC),
        minValue: NB.wN,
        maxValue: NB.qh,
        getInitialValue: () => ND.Ay.getSettings().maxAutoClips,
        onValueRender: (e) => `${Math.floor(e)}`,
        asValueChanges: (e) => NR.e6(Math.floor(e)),
        markers: NF,
        onMarkerRender: (e) => `${Math.floor(e)}`,
        useDisabled: Nj.Rt,
    }),
    NX = (0, a.zZ)(u.X.CLIPS_AUTOMATIC_CLIPPING_CATEGORY, {
        useTitle: () => j.intl.string(j.t.sA0WKL),
        usePredicate: () => {
            let e = (0, Nj.As)(),
                t = (0, NV.aJ)("ClipsAutomaticClippingCategory"),
                i = Nk.A.useConfig({ location: "ClipsAutomaticClippingCategory" }).enableDistributedClips;
            return !e && (t || i);
        },
        buildLayout: () => [Nz, NG],
    });
var NY = i(753070);
let NH = (0, a.Hn)(u.X.CLIPS_FRAME_RATE, {
    useTitle: () => j.intl.string(j.t["2wScL1"]),
    useSubtitle: () => j.intl.string(j.t["Rf9+fy"]),
    useValue: () => (0, g.bG)([ND.Ay], () => ND.Ay.getSettings().clipsQuality.frameRate),
    setValue: (e) => {
        let { clipsQuality: t } = ND.Ay.getSettings();
        NR.GS({ resolution: t.resolution, frameRate: e });
    },
    useOptions: () => [
        { id: "15", value: NY.kn.FPS_15, label: j.intl.formatToPlainString(j.t.Qb44XH, { fps: NY.kn.FPS_15 }) },
        { id: "30", value: NY.kn.FPS_30, label: j.intl.formatToPlainString(j.t.Qb44XH, { fps: NY.kn.FPS_30 }) },
        { id: "60", value: NY.kn.FPS_60, label: j.intl.formatToPlainString(j.t.Qb44XH, { fps: NY.kn.FPS_60 }) },
    ],
    useDisabled: Nj.Rt,
});
var NK = i(372684);
let NW = (0, a.E2)(u.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
        useSearchTerms: () => [j.intl.string(j.t.SIxrIF)],
        usePredicate: () => (0, g.bG)([ND.Ay], () => ND.Ay.getHardwareClassification()) === NK.k9.BELOW_MINIMUM,
        Component: () => (0, E.jsx)(sA.A, { look: sA.k.WARNING, children: j.intl.string(j.t.SIxrIF) }),
    }),
    NZ = (0, a.Hn)(u.X.CLIPS_LENGTH, {
        useTitle: () => j.intl.string(j.t.OgfUio),
        useSubtitle: () => j.intl.string(j.t.H7j4tY),
        useValue: () => (0, g.bG)([ND.Ay], () => ND.Ay.getSettings().clipsLength),
        setValue: (e) => NR.h$(e),
        useOptions: () => [
            { id: "30s", value: NB.LX.SECONDS_30, label: j.intl.formatToPlainString(j.t["bTFv/3"], { count: 30 }) },
            { id: "1m", value: NB.LX.MINUTES_1, label: j.intl.formatToPlainString(j.t.ICo9Nk, { count: 1 }) },
            { id: "2m", value: NB.LX.MINUTES_2, label: j.intl.formatToPlainString(j.t.ICo9Nk, { count: 2 }) },
        ],
        useDisabled: Nj.Rt,
    }),
    NQ = (0, a.E2)(u.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [j.intl.string(j.t["Z+MfqT"])],
        Component: () => (0, E.jsx)(sA.A, { look: sA.k.INFO, children: j.intl.string(j.t["Z+MfqT"]) }),
    }),
    Nq = (0, a.Hn)(u.X.CLIPS_RESOLUTION, {
        useTitle: () => j.intl.string(j.t.aFudZJ),
        useSubtitle: () => j.intl.string(j.t.nIrkW5),
        useValue: () => (0, g.bG)([ND.Ay], () => ND.Ay.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = ND.Ay.getSettings();
            NR.GS({ resolution: e, frameRate: t.frameRate });
        },
        useOptions: () => [
            {
                id: "480p",
                value: NY.on.RESOLUTION_480,
                label: j.intl.formatToPlainString(j.t.TEOC0I, { resolution: NY.on.RESOLUTION_480 }),
            },
            {
                id: "720p",
                value: NY.on.RESOLUTION_720,
                label: j.intl.formatToPlainString(j.t.TEOC0I, { resolution: NY.on.RESOLUTION_720 }),
            },
            {
                id: "1080p",
                value: NY.on.RESOLUTION_1080,
                label: j.intl.formatToPlainString(j.t.TEOC0I, { resolution: NY.on.RESOLUTION_1080 }),
            },
            {
                id: "1440p",
                value: NY.on.RESOLUTION_1440,
                label: j.intl.formatToPlainString(j.t.TEOC0I, { resolution: NY.on.RESOLUTION_1440 }),
            },
            { id: "source", value: NY.on.RESOLUTION_SOURCE, label: j.intl.string(j.t.XjXqzh) },
        ],
        useDisabled: Nj.Rt,
    }),
    NJ = (0, a.zD)(u.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => j.intl.string(j.t["3zwNf6"]),
        useSubtitle: () => j.intl.string(j.t.m4Cjj9),
        useValue: () => (0, g.bG)([ND.Ay], () => ND.Ay.getSettings().remindersEnabled),
        setValue: (e) => NR.Mt(e),
        useDisabled: Nj.Rt,
    }),
    N$ = (0, a.zZ)(u.X.CLIPS_CAPTURE_SETTINGS_CATEGORY, {
        useTitle: () => j.intl.string(NL.default.TGwzMe),
        usePredicate: Nj.As,
        buildLayout: () => [NW, NZ, NH, Nq, NQ, NJ],
    }),
    N0 = (0, a.zD)(u.X.CLIPS_DEBUG_TOOLTIPS, {
        useTitle: () => "Show clips debug tooltips",
        useSubtitle: () =>
            "Show overlay tooltips for the clips engine starting, enabled features, auto-clip signals, and save errors. Intended for development and testing.",
        useValue: () => (0, g.bG)([ND.Ay], () => ND.Ay.getSettings().debugTooltipsEnabled),
        setValue: (e) => NR.YP(e),
    }),
    N1 = (0, a.zD)(u.X.CLIPS_SHOW_POV_CLIPS, {
        useTitle: () => "Show POV clips in Gallery",
        useSubtitle: () =>
            "Show clips automatically captured from your point of view when a teammate clips a shared moment. Dev-only for now.",
        useValue: () => (0, g.bG)([ND.Ay], () => ND.Ay.getSettings().showPovClipsInGallery),
        setValue: (e) => NR.Uh(e),
    }),
    N2 = (0, a.zZ)(u.X.CLIPS_DEVELOPER_CATEGORY, {
        useTitle: () => "Developer",
        usePredicate: () =>
            (0, g.bG)([io.default], () => {
                let e = io.default.getCurrentUser();
                return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
            }),
        buildLayout: () => [N0, N1],
    });
var N3 = i(417270),
    N6 = i(158278);
let N4 = (0, a.E2)(u.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [j.intl.string(j.t.pf54EU), j.intl.string(j.t["QyB/jK"])],
        Component: () => {
            let e = (0, g.bG)([eF.Ay], () => eF.Ay.getKeybindForAction(U.hCu.SAVE_CLIP, !0));
            tz()(null != e, "Save clip keybind unset");
            let t = (0, Nj.Rt)(),
                i = (0, Nj.As)(),
                n = S.useRef(null),
                s = S.useCallback(
                    (t) => {
                        tX.A.setKeybind({ ...e, shortcut: t });
                    },
                    [e],
                ),
                l = S.useCallback(() => {
                    tX.A.setKeybind({ ...e, shortcut: (0, eQ.OH)(NB.Ot) });
                }, [e]);
            return (0, E.jsx)(s4.D, {
                label: j.intl.string(j.t.pf54EU),
                description: j.intl.string(j.t["QyB/jK"]),
                layout: "horizontal-responsive",
                children: (0, E.jsx)("div", {
                    className: N6.g,
                    children: (0, E.jsx)(tY.A, {
                        ref: n,
                        disabled: t,
                        defaultValue: e.shortcut,
                        onChange: s,
                        trailingActions: i
                            ? (0, E.jsxs)(E.Fragment, {
                                  children: [
                                      (0, E.jsx)(tr.m, {
                                          text: j.intl.string(NL.default.bUtubv),
                                          position: "top",
                                          ariaHidden: !0,
                                          children: (0, E.jsx)(lQ.K, {
                                              icon: lW.F,
                                              size: "sm",
                                              variant: "secondary",
                                              disabled: t,
                                              "aria-label": j.intl.string(NL.default.bUtubv),
                                              onClick: (e) => {
                                                  e.stopPropagation(), n.current?.toggleRecordMode();
                                              },
                                          }),
                                      }),
                                      (0, E.jsx)(tr.m, {
                                          text: j.intl.string(NL.default.Kyk1Tp),
                                          position: "top",
                                          ariaHidden: !0,
                                          children: (0, E.jsx)(lQ.K, {
                                              icon: N3.m,
                                              size: "sm",
                                              variant: "secondary",
                                              disabled: t,
                                              "aria-label": j.intl.string(NL.default.Kyk1Tp),
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
    N7 = (0, a.E2)(u.X.CLIPS_SCREENSHOT_KEYBIND, {
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
                    className: N6.g,
                    children: (0, E.jsx)(tY.A, { defaultValue: t.shortcut, onChange: i }),
                }),
            });
        },
    }),
    N5 = (0, a.zD)(u.X.CLIPS_ENABLE, {
        useTitle: () => j.intl.string(j.t.h8rgrK),
        useSubtitle: () => j.intl.string(j.t["4Qw3NO"]),
        useValue: () => (0, NO.Et)(),
        setValue: (e) => NR.yO({ clipsEnabled: e, trackAnalytics: !0 }),
    });
var N8 = i(915618);
let N9 = (0, a.zD)(u.X.CLIPS_ENABLE_DECOUPLED_CLIPPING, {
        useTitle: () => j.intl.string(j.t.yXvykv),
        useSubtitle: () => j.intl.string(j.t.YP3ujk),
        useValue: NO.XT,
        setValue: (e) => NR.fd({ enabled: e, trackAnalytics: !0 }),
        usePredicate: () => {
            let e = (0, eY.isWindows)(),
                t = (0, N8.A)(l3.Ay),
                i = (0, Nj.As)();
            return e && t && !i;
        },
        useDisabled: Nj.Rt,
    }),
    _e = (0, a.zY)(u.X.CLIPS_GENERAL_CARD, { buildLayout: () => [N5, N9, N4, N7], headerSettingKey: N5.key }),
    _t = (0, a.zZ)(u.X.CLIPS_GENERAL_CATEGORY, {
        useTitle: () => j.intl.string(j.t.z2jK6X),
        useSubtitle: () => j.intl.format(NL.default["dh7g+S"], { learnMoreLink: tN.A.getArticleURL(U.MVz.CLIPS) }),
        usePredicate: Nj.As,
        buildLayout: () => [_e],
    }),
    _i = (0, a.E2)(u.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [j.intl.string(j.t.s4773E), j.intl.string(j.t.svjwGh)],
        Component: () => {
            let e = (0, g.bG)([ND.Ay], () => ND.Ay.getSettings().storageLocation),
                t = (0, Nj.Rt)(),
                i = S.useRef(!1),
                n = async () => {
                    if (!t && !i.current) {
                        i.current = !0;
                        try {
                            let e = await lN.A.fileManager.showOpenDialog({
                                properties: ["openDirectory", "createDirectory"],
                            });
                            e.length > 0 && NR.HU(e[0]);
                        } finally {
                            i.current = !1;
                        }
                    }
                };
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
                            text: j.intl.string(NL.default.yQAN6B),
                        }),
                    ],
                }),
            });
        },
    }),
    _n = (0, a.zZ)(u.X.CLIPS_RECORDING_CATEGORY, {
        useTitle: () => j.intl.string(j.t.iIwmV5),
        usePredicate: () => !(0, Nj.As)(),
        buildLayout: () => [NQ, NW, N5, N9, NJ, NZ, Nq, NH, N4, N7, _i],
    }),
    _s = (0, a.zZ)(u.X.CLIPS_STORAGE_CATEGORY, {
        useTitle: () => j.intl.string(NL.default["0Q+pdZ"]),
        usePredicate: Nj.As,
        buildLayout: () => [_i, Nz],
    }),
    _l = (0, a.t_)(u.X.CLIPS_PANEL, {
        useTitle: () => j.intl.string(j.t.z2jK6X),
        usePersistentBadge: () => ({
            badgeType: h.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            useCustomBadge: () => (0, E.jsx)(Nv, {}),
        }),
        usePredicate: rT.sw,
        buildLayout: () => [_t, NU, N$, _s, _n, NX, N2],
    }),
    _r = (0, a.i4)(u.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.z2jK6X),
        icon: Nb.x,
        buildLayout: () => [_l],
    }),
    _a = (0, a.zZ)(u.X.CONNECTIONS_ADD_CONNECTIONS_CATEGORY, { buildLayout: () => [S5], useInlineNotice: Tt }),
    _o = (0, a.zZ)(u.X.CONNECTIONS_CONNECTED_ACCOUNTS_CATEGORY, { buildLayout: () => [S8] }),
    _u = (0, a.t_)(u.X.CONNECTIONS_PANEL, {
        useTitle: () => j.intl.string(j.t["3fe7U5"]),
        useObscuredNotice: dT.L,
        buildLayout: () => [_a, _o],
    }),
    _d = (0, a.i4)(u.X.CONNECTIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["3fe7U5"]),
        icon: Ed.q,
        buildLayout: () => [_u],
    });
var _c = i(875444);
function _g(e, t) {
    let i = (0, g.bG)([SB.default], () => SB.default.getFetchState()),
        n = (0, g.bG)([SB.default], () =>
            e ? SB.default.getNewestTokensForNonChildrenApplications() : SB.default.getNewestTokens(),
        ),
        s = S.useMemo(
            () => (null == n ? [] : n.filter((e) => (0, _c.O)(e.application, e.scopes)).map((e) => e.application)),
            [n],
        );
    return (
        S.useEffect(() => {
            t || Sg.A.fetch();
        }, [t]),
        { showLoadingIndicator: i !== SB.FetchState.FETCHED && (null == n || 0 === n.length), slayerSdkApplications: s }
    );
}
var _m = i(998382);
function _A(e) {
    let { applications: t } = e,
        i = S.useMemo(() => t.sort((e, t) => dL.default.compare(t.id, e.id)), [t]),
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
                            children: (0, E.jsx)("img", { src: a, "aria-label": l, className: _m.Kk }),
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
                                className: _m.lK,
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
        className: _m.wx,
        children: [
            (0, E.jsxs)("div", {
                className: _m.kX,
                children: [
                    (0, E.jsx)(es.E, { variant: "text-md/normal", color: "text-strong", children: n }),
                    (0, E.jsxs)(en.D, {
                        onClick: () => {
                            (0, eH.openUserSettings)(u.X.AUTHORIZED_APPS_PANEL);
                        },
                        className: _m.bJ,
                        children: [
                            (0, E.jsx)(es.E, {
                                variant: "text-xs/normal",
                                color: "interactive-text-default",
                                children: j.intl.format(j.t.oYaYOe, {}),
                            }),
                            (0, E.jsx)(tO._, {
                                size: "xxs",
                                color: er.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                className: _m.g7,
                            }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)("div", { className: _m.yF }),
            (0, E.jsx)("div", { className: _m.lJ, children: s }),
        ],
    });
}
function _h() {
    return (0, E.jsxs)("div", {
        className: _m.do,
        children: [
            (0, E.jsx)(es.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: _m.xV,
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
function _E(e) {
    let { applications: t } = e;
    return t.length > 0 ? (0, E.jsx)(_A, { applications: t }) : (0, E.jsx)(_h, {});
}
let _S = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES, {
    useSearchTerms: () => [j.intl.string(j.t.YpCiMt)],
    Component: function () {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = _g(!0);
        return e ? (0, E.jsx)(df.y, {}) : (0, E.jsx)(_E, { applications: t });
    },
});
function _T() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = _g(!0, !0);
    return !e && t.length > 0;
}
let _x = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => ((0, o.SV)("GameFriendDMSetting") ? j.intl.string(j.t.W8JtfT) : j.intl.string(j.t.XpBObB)),
        useSubtitle: () =>
            (0, o.SV)("GameFriendDMSetting")
                ? j.intl.string(j.t.a99KKy)
                : j.intl.format(j.t.oZsHTD, { helpdeskArticle: tN.A.getArticleURL(U.MVz.SLAYER_GAME_FRIENDS) }),
        useSearchTerms: () => [j.intl.string(j.t["Uv/eTx"])],
        useValue: () => D.Zk.useSetting(),
        setValue: (e) => D.Zk.updateSetting(e),
        usePredicate: _T,
    }),
    _p = (0, a.Qx)(u.X.CONTENT_AND_SOCIAL_IN_GAME_DMS_SETTING, {
        useTitle: () => j.intl.string(j.t["ms+Tme"]),
        useSubtitle: () =>
            (0, o.SV)("InGameDMsSetting") ? j.intl.string(j.t["0ryspy"]) : j.intl.string(j.t["4NN4+/"]),
        useOptions: () => [
            { name: j.intl.string(j.t.JIFnN9), value: H.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
            { name: j.intl.string(j.t.rRdsk1), value: H.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
            {
                name: (0, o.SV)("InGameDMsSetting") ? j.intl.string(j.t.IVRPMX) : j.intl.string(j.t.AolKwN),
                value: H.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE,
            },
        ],
        useValue: () => {
            let e = D.TA.useSetting();
            return e === H.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? H.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e;
        },
        setValue: (e) => D.TA.updateSetting(e),
        usePredicate: _T,
    }),
    _f = (0, a.zZ)(u.X.CONNECTED_GAMES_CATEGORY, {
        useSearchTerms: () => [j.intl.string(j.t.YpCiMt)],
        buildLayout: () => [_S, _x, _p],
    });
var _N = i(687123),
    __ = i(444802),
    _I = i(558001);
i(866945);
var _C = i(835002);
function _b() {
    let e = (0, __.WX)();
    S.useEffect(() => {
        (0, _I.N)(_C.YA.AGE_CONFIRMATION_NOTICE, _C.YX.VIEWED);
    }, []);
    let t = S.useCallback(() => {
            window.open(tN.A.getArticleURL(e), "_blank"), (0, _I.N)(_C.YA.AGE_CONFIRMATION_NOTICE, _C.YX.LEARN_MORE);
        }, [e]),
        i = S.useCallback(() => {
            pK.A.showAgeVerificationGetStartedModal({ entryPoint: pW.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, _I.N)(_C.YA.AGE_CONFIRMATION_NOTICE, _C.YX.CONFIRM_AGE);
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
function _y() {
    let e = (0, pB.aX)(_N.t.REACTIVE_CHECK),
        t = (0, pw.b8)();
    return S.useMemo(() => {
        if (e && !t) return { type: h.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: _b };
    }, [e, t]);
}
var _v = i(308528),
    _j = i(171316);
function _O() {
    let e = (0, _j.uM)(),
        t = (0, Ns.vx)(),
        i = S.useCallback(() => {
            (0, sH.default)(),
                _v.A.openPrivateChannel({ recipientIds: t }),
                (0, _I.N)(_C.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _C.YX.LEARN_MORE);
        }, [t]),
        n = S.useCallback(() => {
            (0, _I.N)(_C.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _C.YX.VIEWED);
        }, []);
    return S.useMemo(() => {
        if (e)
            return {
                type: h.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: n,
                useText: () =>
                    j.intl.format(Na.default.i284fU, {
                        hook: (e, t) => (0, E.jsx)(di.Anchor, { onClick: i, children: e }, t),
                        count: t.length,
                    }),
            };
    }, [i, e, t.length, n]);
}
var _R = i(323073),
    _D = i(386171),
    _L = i(96607);
let _P = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_DM_SETTING, {
        useTitle: () =>
            (0, o.SV)("AgeRestrictedDMCommandsSetting") ? j.intl.string(j.t.gvC6q7) : j.intl.string(j.t.XahVjj),
        useSubtitle: () =>
            (0, o.SV)("AgeRestrictedDMCommandsSetting") ? j.intl.string(j.t.zirUC1) : j.intl.string(j.t.R9fXyS),
        useValue: _D.hT,
        useDisabled: () => {
            let e = (0, _L.A)() ?? !0,
                t = (0, _R.sP)(),
                i = (0, pw.yM)();
            return (!t || !!i) && !e;
        },
        setValue: (e) => {
            (0, _R.p5)() && e
                ? pK.A.showAgeVerificationGetStartedModal({ entryPoint: pW.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : D.Qe.updateSetting(e);
        },
    }),
    _G = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => j.intl.string(j.t["L+yTsa"]),
        useSubtitle: () =>
            (0, o.SV)("AgeRestrictediOSSetting") ? j.intl.string(j.t["t6i/jW"]) : j.intl.string(j.t.hiM8pU),
        useValue: _D.tI,
        useDisabled: () => {
            let e = (0, _L.A)() ?? !0,
                t = (0, _R.sP)(),
                i = (0, pw.yM)();
            return S.useMemo(() => (!t || !!i) && !e, [t, e, i]);
        },
        setValue: (e) => {
            (0, _R.p5)() && e
                ? pK.A.showAgeVerificationGetStartedModal({ entryPoint: pW.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : D.Kg.updateSetting(e);
        },
    }),
    _M = (0, a.AK)(u.X.CONTENT_FILTERS_APPEARANCE_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.hOXd45),
        destinationKey: u.X.APPEARANCE_MESSAGES_CATEGORY,
    }),
    _U = (0, a.gN)(u.X.CONTENT_FILTERS_RELATED_SETTINGS, { buildLayout: () => [_M] });
i(667532);
var _V = i(390248),
    _k = i(632119),
    _w = i(945276),
    _B = i(389737),
    _F = i(566769);
function _z() {
    let e,
        t = (0, _w.A)() ?? !0,
        i = (0, _j.uM)(),
        n = (0, _j.uM)(),
        {
            explicitContentGuilds: s,
            explicitContentFriendDm: l,
            explicitContentNonFriendDm: r,
        } = ((e = (0, dt.cf)([uy.A], () => uy.A.settings.textAndImages?.explicitContentSettings ?? (0, _k.C$)())),
        {
            explicitContentGuilds: (0, _k.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, _k.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, _k.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        }),
        a = (e) => {
            let t = Object.values(e);
            (0, _V.hK)() && t.includes(H.TO.SHOW)
                ? pK.A.showAgeVerificationGetStartedModal({ entryPoint: pW.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
                : (0, _k.Jz)(e);
        },
        o = [
            { value: H.TO.BLUR, label: j.intl.string(j.t.S49Uad) },
            { value: H.TO.BLOCK, label: j.intl.string(j.t["D/157Y"]) },
        ],
        u = [{ value: H.TO.BLUR, label: j.intl.string(j.t.S49Uad) }],
        d = { value: H.TO.SHOW, label: j.intl.string(j.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: n, tooltipText: i ? j.intl.string(Na.default["6Af/cw"]) : void 0 };
    return (0, E.jsxs)(_B.E, {
        description: j.intl.string(j.t.Wnojv1),
        children: [
            (0, E.jsx)(_F.A, {
                title: j.intl.string(j.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(_F.A, {
                title: j.intl.string(j.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(_F.A, {
                title: j.intl.string(j.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || n,
                tooltipText: i ? j.intl.string(Na.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function _X() {
    let e,
        t = (0, _w.A)() ?? !0,
        i = (0, _j.uM)(),
        n = (0, _j.uM)(),
        {
            goreContentGuilds: s,
            goreContentFriendDm: l,
            goreContentNonFriendDm: r,
        } = ((e = (0, dt.cf)([uy.A], () => uy.A.settings.textAndImages?.goreContentSettings ?? (0, __.T4)())),
        {
            goreContentGuilds: (0, __.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, __.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, __.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        }),
        a = (e) => {
            let t = Object.values(e);
            (0, _V.hK)() && t.includes(H.TO.SHOW)
                ? pK.A.showAgeVerificationGetStartedModal({ entryPoint: pW.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
                : (0, __.qY)(e);
        },
        o = [
            { value: H.TO.BLUR, label: j.intl.string(j.t.S49Uad) },
            { value: H.TO.BLOCK, label: j.intl.string(j.t["D/157Y"]) },
        ],
        u = [{ value: H.TO.BLUR, label: j.intl.string(j.t.S49Uad) }],
        d = { value: H.TO.SHOW, label: j.intl.string(j.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: n, tooltipText: i ? j.intl.string(Na.default["6Af/cw"]) : void 0 };
    return (0, E.jsxs)(_B.E, {
        description: j.intl.string(j.t.XgH9eh),
        children: [
            (0, E.jsx)(_F.A, {
                title: j.intl.string(j.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(_F.A, {
                title: j.intl.string(j.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(_F.A, {
                title: j.intl.string(j.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || n,
                options: u,
                tooltipText: i ? j.intl.string(Na.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var _Y = i(464946),
    _H = i(875162),
    _K = i(334859);
let _W = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, __.WX)(),
            t = S.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: j.intl.string(j.t.GYpoAq),
                        component: _z,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: j.intl.string(j.t["16/3Bi"]),
                        component: _X,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, E.jsxs)(_Y.h, {
            children: [
                (0, E.jsx)(_Y._, {
                    header: j.intl.string(j.t["Hj/But"]),
                    description: j.intl.format(j.t.dliU4j, { learnMoreLink: tN.A.getArticleURL(e) }),
                }),
                (0, E.jsx)(_H.A, { tabs: t, orientation: "vertical", tabsClassName: _K.v }),
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
var _Z = i(639555),
    _Q = i(617641),
    _q = i(546140),
    _J = i(406935),
    _$ = i(594061);
let _0 = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING, {
    useTitle: () => j.intl.string(j.t.qFsx5q),
    useSubtitle: () => j.intl.format(j.t.lunaRv, { learnMoreLink: tN.A.getArticleURL(U.MVz.SAFETY_ALERTS) }),
    useValue: _q.L,
    setValue: (e) =>
        _$.wc.updateAsync(
            "privacy",
            (t) => {
                t.inappropriateConversationWarnings = _J._t.create({ value: e });
            },
            _$.Sb.INFREQUENT_USER_ACTION,
        ),
    usePredicate: function () {
        let e = (0, _Q.Lc)({ location: "DMSafetyAlertsSetting" }),
            t = (0, _Z.Rv)({ location: "DMSafetyAlertsSetting" }),
            i = (0, _w.A)() ?? !0;
        return e && !i && !t;
    },
});
var _1 = i(809505),
    _2 = i(923457),
    _3 = i(750714);
let _6 = (0, a.Qx)(u.X.CONTENT_AND_SOCIAL_DM_SPAM_SETTING, {
        useTitle: () => ((0, o.SV)("DMSpamSetting") ? j.intl.string(j.t.puwSkY) : j.intl.string(j.t.tiCXaH)),
        useSubtitle: () =>
            (0, o.SV)("DMSpamSetting")
                ? j.intl.string(j.t["+sXN3T"])
                : j.intl.format(j.t.RvjRRI, { appealLink: tN.A.getArticleURL(U.MVz.SAFE_DIRECT_MESSAGING) }),
        useValue: function () {
            let e = D.he.useSetting(),
                t = D.cj.useSetting(),
                i = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
                n = (0, pB.yv)(_2.p.SPAM_FILTERS);
            return e !== H.he.DEFAULT_UNSET
                ? e
                : i?.nsfwAllowed === !1 && n
                  ? H.he.FRIENDS_AND_NON_FRIENDS
                  : (_3.xY.get(t) ?? H.he.NON_FRIENDS);
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
                        : (0, _1.YS)(),
                [e],
            );
        },
        useSearchTerms: () => [j.intl.string(j.t.JzaP4h), j.intl.string(j.t.H9XOl3), j.intl.string(j.t.k4W40P)],
    }),
    _4 = (0, a.zZ)(u.X.CONTENT_CATEGORY, {
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
                u = _O(),
                d =
                    ((e = (0, Nl.Z)()),
                    (t = (0, __.WX)()),
                    (i = S.useCallback(() => {
                        window.open(tN.A.getArticleURL(t), "_blank"),
                            (0, _I.N)(_C.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _C.YX.LEARN_MORE);
                    }, [t])),
                    (n = S.useCallback(() => {
                        (0, _I.N)(_C.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _C.YX.VIEWED);
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
                    ((s = (0, pB.SJ)()),
                    (l = (0, pw.b8)()),
                    (r = s && !l),
                    (a = S.useCallback(() => {
                        pK.A.showAgeVerificationGetStartedModal({ entryPoint: pW.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, _I.N)(_C.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _C.YX.LEARN_MORE);
                    }, [])),
                    (o = S.useCallback(() => {
                        (0, _I.N)(_C.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _C.YX.VIEWED);
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
                g = _y();
            return u ?? g ?? c ?? d;
        },
        buildLayout: () => ((0, o.Bv)("ContentCategory") ? [_W, _0, _P, _G, _U] : [_W, _6, _0, _P, _G]),
    });
var _7 = i(189883);
let _5 = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => j.intl.string(j.t["7x9dyE"]),
    useValue: () => {
        let e = D.FA.useSetting();
        return S.useMemo(() => (0, rJ.Lx)(e), [e]).all;
    },
    setValue: (e) => {
        D.FA.updateSetting(e ? U.yKI : U.yKI & ~U.dzt.NO_RELATION);
    },
    useDisabled: () => (0, _j.uM)(),
});
var _8 = i(665260);
let _9 = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => j.intl.string(j.t.NfeuZ3),
        useValue: () => {
            let e = D.FA.useSetting(),
                t = S.useMemo(() => (0, rJ.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: (e) => {
            let t = D.FA.getSetting();
            D.FA.updateSetting(e ? _8.UI(t, U.dzt.MUTUAL_FRIENDS) : _8.iE(t, U.dzt.MUTUAL_FRIENDS, U.dzt.NO_RELATION));
        },
        useDisabled: () => (0, _j.uM)(),
    }),
    Ie = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => j.intl.string(j.t.qsMfsH),
        useSubtitle: () => ((0, o.SV)("FriendRequestsMutualGuildsSetting") ? j.intl.string(j.t["6DqAp0"]) : void 0),
        useValue: () => {
            let e = D.FA.useSetting(),
                t = S.useMemo(() => (0, rJ.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: (e) => {
            let t = D.FA.getSetting();
            D.FA.updateSetting(e ? _8.UI(t, U.dzt.MUTUAL_GUILDS) : _8.iE(t, U.dzt.MUTUAL_GUILDS, U.dzt.NO_RELATION));
        },
        useDisabled: () => (0, _j.uM)(),
    }),
    It = (0, a.FW)(u.X.FRIEND_REQUESTS_FIELDSET, {
        useTitle: () => j.intl.string(j.t.wTdS6S),
        buildLayout: () => [_5, _9, Ie],
    }),
    Ii = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => j.intl.string(j.t["jK+wdr"]),
        useSubtitle: () => j.intl.string(j.t["RYh/pW"]),
        useValue: () => !D.Zd.useSetting(),
        setValue: (e) => {
            D.Zd.updateSetting(!e);
        },
        usePredicate: () => _7.A.useConfig({ location: "Friend Request Setting" }).enabled,
        usePersistentBadge: () => ({ badgeType: h.Xi.BETA }),
    }),
    In = () => {
        let { enabled: e } = _7.A.useConfig({ location: "Friend Request Setting" });
        return e ? j.intl.string(j.t.QVbF3l) : void 0;
    },
    Is = (0, a.zZ)(u.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["5gxWrt"]),
        useSubtitle: In,
        useSubnavLabel: () => j.intl.string(j.t.fyA115),
        useInlineNotice: _O,
        buildLayout: () => [It, Ii],
    }),
    Il = (0, a.zZ)(u.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.MNaVwq),
        useSubtitle: In,
        useInlineNotice: _O,
        buildLayout: () => [_5, _9, Ie, Ii],
    });
var Ir = i(994500),
    Ia = i(428678),
    Io = i(717398),
    Iu = i(730134),
    Id = i(753686);
function Ic(e) {
    let { listType: t, numberOfUsers: i } = e,
        n = "blocked" === t;
    return (0, E.jsxs)("div", {
        className: Id.wx,
        children: [
            (0, E.jsx)("div", { className: Id.zc, children: n ? (0, E.jsx)(Ia.K, {}) : (0, E.jsx)(iv.G, {}) }),
            (0, E.jsxs)("div", {
                className: Id.Qq,
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
function Ig(e) {
    let { userId: t, last: i } = e,
        n = (0, g.bG)([Ir.A], () => Ir.A.isBlocked(t)),
        s = (0, g.bG)([io.default], () => io.default.getUser(t)),
        [l, r] = S.useState(!1),
        a = S.useCallback(() => {
            r(!0),
                n
                    ? Io.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : Io.A.unignoreUser(t, e1.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      });
        }, [n, t]);
    return null == s
        ? null
        : (0, E.jsxs)("div", {
              className: e6()(Id.nM, { [Id.fW]: i }),
              children: [
                  (0, E.jsxs)("div", {
                      className: Id.eF,
                      children: [
                          (0, E.jsx)(Iu.A, { user: s, size: i4._3.SIZE_40 }),
                          (0, E.jsxs)("div", {
                              className: Id.Qq,
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
function Im(e) {
    let { userIds: t, listType: i } = e,
        [n, s] = S.useState(5);
    return (0, E.jsx)(_Y.h, {
        children: (0, E.jsxs)("div", {
            className: Id.Nr,
            children: [
                (0, E.jsx)(Ic, { listType: i, numberOfUsers: t.length }),
                (0, E.jsx)("div", {
                    className: Id.jS,
                    children: t.slice(0, n).map((e, i) => (0, E.jsx)(Ig, { userId: e, last: i === t.length - 1 }, e)),
                }),
                n < t.length
                    ? (0, E.jsx)("div", {
                          className: Id.vM,
                          children: (0, E.jsx)(en.D, {
                              onClick: () => {
                                  s((e) => e + 5);
                              },
                              className: Id.Qf,
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
let IA = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_BLOCKED_USERS, {
        useSearchTerms: () => [j.intl.string(j.t.PFOUKW)],
        usePredicate: () => (0, g.bG)([Ir.A], () => Ir.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, g.yK)([Ir.A], () => Ir.A.getBlockedIDs());
            return (0, E.jsx)(Im, { userIds: e, listType: "blocked" });
        },
    }),
    Ih = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_IGNORED_USERS, {
        useSearchTerms: () => [j.intl.string(j.t["93ZDWE"])],
        usePredicate: () => (0, g.bG)([Ir.A], () => Ir.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, g.yK)([Ir.A], () => Ir.A.getIgnoredIDs());
            return (0, E.jsx)(Im, { userIds: e, listType: "ignored" });
        },
    }),
    IE = (0, a.zZ)(u.X.RESTRICTED_USERS_CATEGORY, {
        useTitle: () =>
            (0, o.SV)("RestrictedUsersCategory") ? j.intl.string(j.t["+Iryf3"]) : j.intl.string(j.t.LVwR56),
        useSubtitle: () =>
            j.intl.format(j.t["0aNQo9"], { helpArticle: tN.A.getArticleURL(U.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [IA, Ih],
        usePredicate: () => {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, g.cf)([Ir.A], () => ({
                hasBlockedUsers: Ir.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: Ir.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var IS = i(22385),
    IT = i(556534),
    Ix = i(111159),
    Ip = i(152056),
    If = i(219714);
let IN = { label: () => j.intl.string(j.t["32u1Dx"]), value: IS.YG };
var I_ = i(954225);
let II = () => (0, IT.Tx)() !== IS.YG;
function IC() {
    return j.intl.string(j.t["T+nevN"]);
}
let Ib = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_JOIN_SETTING, {
        useTitle: IC,
        useSubtitle: () =>
            j.intl.format(j.t.jXKQCu, { helpdeskArticle: tN.A.getArticleURL(U.MVz.ACTIVITY_STATUS_SETTINGS) }),
        useValue: () => {
            let e = (0, IT.Tx)();
            return !D.pE.useSetting().includes(e);
        },
        setValue: (e) => {
            let t = IS.xk.getState().selectedGuildId,
                i = (0, rJ.CN)();
            e ? i.delete(t) : i.add(t),
                D.pE.updateSetting([...i]),
                G.default.track(U.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: I_.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
                    ingress: nw.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                });
        },
        usePredicate: II,
    }),
    Iy = () => (0, IT.Tx)() !== IS.YG;
function Iv() {
    return j.intl.string(L.default.WhdCGP);
}
let Ij = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_SHARE_SETTING, {
    useTitle: Iv,
    useSubtitle: () => j.intl.string(L.default.UQ9RHJ),
    useValue: () => {
        let e = (0, IT.Tx)();
        return !D.JG.useSetting().includes(e);
    },
    setValue: (e) => {
        let t = IS.xk.getState().selectedGuildId,
            i = (0, rJ.Kk)();
        e ? i.delete(t) : i.add(t),
            D.JG.updateSetting([...i]),
            G.default.track(U.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: I_.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
                ingress: nw.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    },
    usePredicate: Iy,
});
var IO = i(307863),
    IR = i(428031),
    ID = i(972737);
let IL = () => ((0, IO.e)() ? j.intl.string(j.t.PMsfcH) : j.intl.string(j.t.RAQUSN)),
    IP = () => {
        let e = (0, IT.Tx)(),
            t = (0, IT.q9)(),
            i = (0, IO.e)();
        return e === IS.YG
            ? i
                ? j.intl.string(j.t.XXGmuB)
                : j.intl.string(j.t.wbYDfT)
            : t
              ? j.intl.string(j.t.V0ka0Q)
              : i
                ? j.intl.string(j.t.F9WY3f)
                : j.intl.string(j.t.G7c3Xo);
    },
    IG = () => {
        let e = (0, IT.Tx)(),
            t = D.$s.useSetting().includes(e),
            i = (0, IR.K)();
        return e === IS.YG ? !i : !t;
    },
    IM = () => {
        let e = (0, _j.uM)();
        return (0, IT.Tx)() === IS.YG && e;
    },
    IU = (e, t) => {
        G.default.track(U.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t,
        });
    },
    IV = (e) => {
        let t = IS.xk.getState().selectedGuildId;
        if (t === IS.YG) {
            var i;
            (i = !e),
                (0, ID.O)({
                    header: j.intl.string(j.t["uUr+GR"]),
                    body: j.intl.string(j.t.hjGJBp),
                    confirmText: j.intl.string(j.t.gm1Vej),
                    cancelText: j.intl.string(j.t.p89ACt),
                    confirmButtonColor: oa.$n.Colors.BRAND,
                    onConfirm: () => {
                        D.n6.updateSetting(i), IU(i, !1);
                    },
                    onCancel: () => {
                        D.n6.updateSetting(i), D.$s.updateSetting(i ? ec.A.getGuildIds() : []), IU(i, !0);
                    },
                });
        } else {
            let i = (0, rJ.Tb)();
            e ? i.delete(t) : i.add(t),
                D.$s.updateSetting(Array.from(i)),
                G.default.track(U.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: I_.m.DIRECT_MESSAGES_TOGGLE,
                    ingress: nw.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                });
        }
    },
    Ik = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: IP,
        useValue: IG,
        useDisabled: IM,
        setValue: IV,
    }),
    Iw = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: IL,
        useSubtitle: IP,
        useValue: IG,
        useDisabled: IM,
        setValue: IV,
    });
var IB = i(953298);
let IF = (e, t) => {
    G.default.track(U.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
};
function Iz() {
    let e = (0, o.SV)("PermissionsMessageRequestsSetting"),
        t = (0, IT.q9)();
    if (e)
        if (t) return j.intl.string(j.t["982I7+"]);
        else return j.intl.string(j.t["3yHM5i"]);
    return j.intl.string(j.t["3o2ojh"]);
}
let IX = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: Iz,
        useSubtitle: () => {
            let e = (0, o.SV)("PermissionsMessageRequestsSetting"),
                t = (0, IT.q9)();
            return e
                ? j.intl.format(j.t.BoCjTy, { learnMoreUrl: tN.A.getArticleURL(U.MVz.MESSAGE_REQUESTS) })
                : t
                  ? j.intl.format(j.t.WpnWLc, { helpdeskArticle: tN.A.getArticleURL(U.MVz.MESSAGE_REQUESTS) })
                  : j.intl.format(j.t.wkm9a3, { helpdeskArticle: tN.A.getArticleURL(U.MVz.MESSAGE_REQUESTS) });
        },
        useValue: () => {
            let e = (0, IT.Tx)(),
                t = (0, IR.K)(),
                i = D.$s.useSetting().includes(e),
                n = D.YX.useSetting(),
                s = D.Zr.useSetting().includes(e);
            return e === IS.YG ? !t && !n : !i && !s;
        },
        useDisabled: () => {
            let e = (0, IT.Tx)(),
                t = (0, _j.uM)(),
                i = (0, IR.K)(),
                n = D.$s.useSetting().includes(e);
            return e === IS.YG ? i || t : n;
        },
        setValue: (e) => {
            let t = IS.xk.getState().selectedGuildId;
            if (!e && (0, IB.w)())
                return void pK.A.showAgeVerificationGetStartedModal({ entryPoint: pW.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === IS.YG) {
                var i;
                (i = !e),
                    (0, ID.O)({
                        header: j.intl.string(j.t.yAfu1p),
                        body: j.intl.string(j.t.Ry2z74),
                        confirmText: j.intl.string(j.t.gm1Vej),
                        cancelText: j.intl.string(j.t.p89ACt),
                        confirmButtonColor: oa.$n.Colors.BRAND,
                        onConfirm: () => {
                            D.YX.updateSetting(i), IF(i, !1);
                        },
                        onCancel: () => {
                            D.YX.updateSetting(i), D.Zr.updateSetting(i ? ec.A.getGuildIds() : []), IF(i, !0);
                        },
                    });
            } else {
                let i = (0, rJ.xo)();
                e ? i.delete(t) : i.add(t),
                    D.Zr.updateSetting(Array.from(i)),
                    G.default.track(U.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: I_.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: nw.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    });
            }
        },
    }),
    IY = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            let e = (0, o.SV)("GuildSelect"),
                t = [IL(), Iz()],
                i = Iv(),
                n = Iy();
            !e && n && t.push(i);
            let s = IC(),
                l = II();
            return !e && l && t.push(s), t;
        },
        Component: function () {
            let { selectedGuildId: e, setSelectedGuildId: t } = (0, IS.xk)(),
                i = (0, g.bG)([eg.Ay], () => eg.Ay.getFlattenedGuildIds()),
                n = (0, g.bG)([ec.A], () => ec.A.getGuilds()),
                s = i[0];
            S.useEffect(
                () =>
                    Ip.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, i) => {
                            let n = IS.xk.getState().selectedGuildId;
                            "" === i && "" !== e && n === IS.YG && null != s
                                ? t(s)
                                : "" === e && n !== IS.YG && t(IS.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [s, t],
            );
            let l = S.useMemo(() => {
                let e = [];
                return (
                    e.push({
                        ...IN,
                        id: IN.value,
                        label: IN.label(),
                        leading: (0, E.jsx)("div", {
                            className: If.KP,
                            children: (0, E.jsx)(Ix.p, {
                                size: "sm",
                                color: "white",
                                "aria-hidden": !0,
                                className: If.cl,
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
                                leading: (0, E.jsx)(g8.Ay, {
                                    className: If.cl,
                                    guild: i,
                                    size: g8.Ay.Sizes.SMALLER,
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
    });
function IH() {
    let e = _O(),
        t = _y();
    if ((0, IT.Tx)() === IS.YG) return e ?? t;
}
let IK = (0, a.zZ)(u.X.PERMISSIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Y5GYcX),
        useSubnavLabel: () => j.intl.string(j.t.YUU0RF),
        useInlineNotice: IH,
        buildLayout: () => [IY, Ik, IX],
    }),
    IW = (0, a.zZ)(u.X.PERMISSIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.eYaT7L),
        useInlineNotice: IH,
        buildLayout: () => [IY, Iw, IX, Ij, Ib],
    }),
    IZ = (0, a.dT)(u.X.CONTENT_AND_SOCIAL_MAIN_TAB, {
        getTitle: () => j.intl.string(j.t["/7xJCF"]),
        buildLayout: () => [_4, IW, Il, IE],
    }),
    IQ = (0, a.dT)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB, {
        initialize: () => {
            Sg.A.fetch();
        },
        getTitle: () => j.intl.string(j.t.YpCiMt),
        buildLayout: () => [_f],
    }),
    Iq = (0, a.t_)(u.X.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => j.intl.string(j.t["+o1pDZ"]),
        buildLayout: () => [IZ, IQ],
    }),
    IJ = (0, a.i4)(u.X.CONTENT_AND_SOCIAL_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["+o1pDZ"]),
        icon: gC.i,
        buildLayout: () => [Iq],
    });
var I$ = i(254138);
function I0() {
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
function I1(e) {
    return (0, Ta.$I)(e).then(
        (e) => (
            null != e && null != e.body && sa.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body }), e
        ),
    );
}
var I2 = i(157559),
    I3 = i(331887);
function I6() {
    let e = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
        t = (0, g.bG)([I3.A], () => I3.A.harvestType),
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
function I4(e) {
    let { onConfirm: t, ...n } = e;
    (0, K.openModalLazy)(async () => {
        let { default: e } = await i.e("92063").then(i.bind(i, 970018));
        return (i) => (0, E.jsx)(e, { modalProps: i, onConfirm: t });
    }, n);
}
var I7 = i(160427);
let I5 = (0, a.E2)(u.X.DATA_HARVEST_REQUEST_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.dmBSKo)],
        Component: function () {
            let e = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
                { currentHarvestType: t, awaitingInitialRequest: i } = (0, g.cf)([I3.A], () => ({
                    currentHarvestType: I3.A.harvestType,
                    awaitingInitialRequest: I3.A.requestingHarvest,
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
            return (0, E.jsxs)(_Y.h, {
                children: [
                    (0, E.jsx)(_Y._, {
                        header: j.intl.string(j.t.XAHCgJ),
                        description: j.intl.format(j.t.P3kNfr, {
                            helpdeskArticle: tN.A.getArticleURL(U.MVz.GDPR_REQUEST_DATA),
                        }),
                    }),
                    a
                        ? (0, E.jsx)(eb.Z, {
                              className: I7.N,
                              children: (0, E.jsx)(es.E, {
                                  variant: "text-md/normal",
                                  children: j.intl.format(j.t.RNDlV9, {
                                      date: r4()(t.created_at).add(U.n83, "days").format("MMMM Do YYYY"),
                                  }),
                              }),
                          })
                        : o
                          ? (0, E.jsx)(eb.Z, {
                                className: I7.N,
                                children: (0, E.jsx)(es.E, {
                                    variant: "text-md/normal",
                                    children: j.intl.string(j.t.ZPQLH2),
                                }),
                            })
                          : (0, E.jsxs)(E.Fragment, {
                                children: [
                                    u
                                        ? (0, E.jsx)(eb.Z, {
                                              className: I7.N,
                                              children: (0, E.jsx)(es.E, {
                                                  variant: "text-md/normal",
                                                  children: j.intl.string(j.t.c1f88z),
                                              }),
                                          })
                                        : null,
                                    (0, E.jsx)("div", {
                                        className: I7.x,
                                        children: (0, E.jsx)(eG.$, {
                                            variant: "primary",
                                            text: j.intl.string(j.t.dmBSKo),
                                            disabled: l,
                                            onClick: () => {
                                                I4({
                                                    onConfirm: (e) => {
                                                        s(!0),
                                                            I1(e)
                                                                .then(
                                                                    (e) => {
                                                                        null != e && null != e.body
                                                                            ? I2.A.show({
                                                                                  title: j.intl.string(j.t.i2iul5),
                                                                                  body: j.intl.string(j.t["6Nmv4i"]),
                                                                              })
                                                                            : I2.A.show({
                                                                                  title: j.intl.string(j.t.OjbtDm),
                                                                                  body: j.intl.string(j.t["0F5Jyt"]),
                                                                              });
                                                                    },
                                                                    (e) => {
                                                                        let t =
                                                                            e?.message ||
                                                                            e?.body?.message ||
                                                                            j.intl.string(j.t["0F5Jyt"]);
                                                                        I2.A.show({
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
    I8 = (0, a.zZ)(u.X.DATA_REQUEST_CATEGORY, {
        useTitle: () => j.intl.string(j.t.VjDjpb),
        initialize: () => {
            I0();
        },
        buildLayout: () => [I5],
    });
var I9 = i(290595),
    Ce = i(153488);
let Ct = (0, a.zD)(u.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
        useTitle: () => j.intl.string(j.t.AGDDkH),
        useSubtitle: () =>
            (0, o.ri)("ClipsAllowVoiceRecording") ? j.intl.string(j.t.kyo3dJ) : j.intl.string(j.t["wW9/zQ"]),
        useValue: () => D.Q$.useSetting(),
        setValue: (e) => NR.eQ({ allowVoiceRecording: e }),
    }),
    Ci = (0, a.Tf)(u.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => j.intl.string(j.t.qfFFos),
        useSubtitle: function () {
            let e = I6();
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
            I0();
        },
        useDisabled: () => !I6().allowed,
        useLoading: () => (0, g.bG)([I3.A], () => I3.A.requestingHarvest),
        useVariant: () => "secondary",
        useLabel: () => j.intl.string(j.t.dmBSKo),
        onClick: function () {
            return new Promise((e) => {
                let t = !0;
                I4({
                    onConfirm: (i) => {
                        (t = !1),
                            I1(i)
                                .then(
                                    (e) => {
                                        null != e && null != e.body
                                            ? I2.A.show({
                                                  title: j.intl.string(j.t.i2iul5),
                                                  body: j.intl.string(j.t["6Nmv4i"]),
                                              })
                                            : I2.A.show({
                                                  title: j.intl.string(j.t.OjbtDm),
                                                  body: j.intl.string(j.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || j.intl.string(j.t["0F5Jyt"]);
                                        I2.A.show({ title: j.intl.string(j.t.OjbtDm), body: t });
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
    Cn = (0, a.v_)(u.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => j.intl.string(j.t.D60Gfj),
        useSubtitle: () =>
            (0, o.ri)("DataUsageDisclaimer")
                ? j.intl.format(j.t.dszICC, {
                      onClickDisable: () => (0, eH.openUserSettings)(u.X.ACCOUNT_DISABLE_SETTING),
                      onClickDelete: () => (0, eH.openUserSettings)(u.X.ACCOUNT_DELETE_SETTING),
                  })
                : j.intl.format(j.t.R5N31P, { onClick: () => (0, eH.openUserSettings)(u.X.ACCOUNT_REMOVAL_CATEGORY) }),
    }),
    Cs = (0, a.zD)(u.X.DATA_USAGE_PERSONALIZATION_SETTING, {
        useTitle: () => j.intl.string(j.t.MNKzyg),
        useSubtitle: () => {
            let e = (0, o.ri)("DataUsagePersonalization");
            return j.intl.format(e ? j.t["2SiYln"] : j.t["eQL/Mr"], {
                helpdeskArticle: tN.A.getArticleURL(U.MVz.DATA_USED_FOR_RECOMMENDED),
            });
        },
        useValue: function () {
            return (0, g.bG)([Ce.A], () => Ce.A.hasConsented(U.YAq.PERSONALIZATION));
        },
        setValue: function (e) {
            e
                ? (0, I9.U)([U.YAq.PERSONALIZATION], []).catch(ID.i)
                : (0, ID.O)({
                      header: j.intl.string(j.t["9SNpzv"]),
                      confirmText: j.intl.string(j.t["9g5UGw"]),
                      cancelText: j.intl.string(j.t["+ZLPw9"]),
                      onConfirm: () => {
                          (0, I9.U)([], [U.YAq.PERSONALIZATION]).catch(ID.i);
                      },
                      body: j.intl.string(j.t.gJvDDh),
                  });
        },
        useDisabled: _j.uM,
    }),
    Cl = (0, a.zD)(u.X.DATA_USAGE_QUESTS_3P_SETTING, {
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
                t = (0, _j.uM)();
            return e || t;
        },
        useSearchTerms: () => [j.intl.string(j.t.CyLYKZ)],
    }),
    Cr = (0, a.zD)(u.X.DATA_USAGE_QUESTS_SETTING, {
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
        useDisabled: _j.uM,
    }),
    Ca = (0, a.AK)(u.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
        destinationKey: u.X.REGISTERED_GAMES_PANEL,
        useSubtitle: function () {
            let { names: e, totalCount: t } = y(2);
            return j.intl.format(j.t.GaTAYM, { count: t, nameCount: e.length, game1: e[0], game2: e[1] });
        },
        useTrailingDecoration: () => ({ type: h.wF.STACKED_ICONS, useIcons: v }),
        usePredicate: () => (0, g.bG)([m.Ay], () => m.Ay.getGamesSeen(!1).some((e) => !(0, A.n1)(e))) && (0, c.xl)(),
    }),
    Co = (0, a.gN)(u.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [Ca] }),
    Cu = (0, a.zD)(u.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => j.intl.string(j.t.XuADY2),
        useSubtitle: () => {
            let e = (0, o.ri)("DataUsageStatistics");
            return j.intl.format(e ? j.t.FNqmmX : j.t["igTSG/"], {
                helpdeskArticle: tN.A.getArticleURL(U.MVz.DATA_PRIVACY_CONTROLS),
            });
        },
        useValue: function () {
            return (0, g.bG)([Ce.A], () => Ce.A.hasConsented(U.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, I9.U)([U.YAq.USAGE_STATISTICS], []).catch(ID.i)
                : (0, ID.O)({
                      header: j.intl.string(j.t.OdPCbN),
                      body: j.intl.string(j.t.MGWabA),
                      confirmText: j.intl.string(j.t["D3+rU4"]),
                      cancelText: j.intl.string(j.t.kYpG0u),
                      onConfirm: () => (0, I9.U)([], [U.YAq.USAGE_STATISTICS]).catch(ID.i),
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t.XuADY2)],
        useDisabled: _j.uM,
    }),
    Cd = (0, a.zZ)(u.X.DATA_USAGE_CATEGORY, {
        useTitle: () => ((0, o.ri)("DataUsageCategory") ? j.intl.string(j.t.QDAriI) : j.intl.string(j.t.bvw42E)),
        useInlineNotice: _O,
        initialize: () => {
            Ce.A.fetchedConsents || (0, I9.Q)();
        },
        buildLayout: () =>
            (0, o.SB)("DataUsageCategory") ? [Cn, Cu, Cs, Cr, Cl, Ct, Ci, Co] : [Cu, Cr, Cl, Cs, Ct, Cn],
    }),
    Cc = (0, w.mj)({
        kind: "user",
        name: "2026-06-notify-friends-on-profile-update",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    Cg = (e) => Cc.useConfig({ location: e }).enabled;
var Cm = i(567926);
let CA = (0, a.zD)(u.X.NOTIFY_FRIENDS_ON_PROFILE_UPDATE_SETTING, {
    useTitle: () => j.intl.string(Cm.default.F3llsQ),
    useSubtitle: () => j.intl.string(Cm.default["6goWcz"]),
    useValue: D.Sy.useSetting,
    setValue: function (e) {
        D.Sy.updateSetting(e),
            G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: M.Y.ACCOUNT,
                notify_friends_on_profile_update: e,
            });
    },
    usePredicate: () => Cg("NotifyFriendsOnProfileUpdateSetting"),
});
function Ch() {
    let e = D.JG.useSetting();
    return (0, g.yK)([eg.Ay, ec.A], () => {
        let t = new Set(e);
        return eg.Ay.getFlattenedGuildIds().filter((e) => null != ec.A.getGuild(e) && !t.has(e));
    }, [e]);
}
let CE = {
        type: h.wF.STACKED_ICONS,
        useIcons: function () {
            let e = Ch(),
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
    CS = (0, a.AK)(u.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = Ch();
            if (0 === e.length) return j.intl.format(j.t.QJIJ5p, {});
            let t = ec.A.getGuild(e[0]),
                i = t?.name ?? "",
                n = e.length - 1;
            return 0 === n
                ? j.intl.format(j.t["T+8J4A"], { guildName: i })
                : j.intl.format(j.t["3JyODQ"], { guildName: i, count: n });
        },
        useTrailingDecoration: function () {
            return CE;
        },
        destinationKey: u.X.ACTIVITY_PRIVACY_PANEL,
    }),
    CT = (0, a.gN)(u.X.PROFILE_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, B.lX)("ProfilePrivacyRelatedSettings"),
        buildLayout: () => [CS],
    }),
    Cx = (0, a.Qx)(u.X.PROFILE_PRIVACY_SETTING, {
        usePredicate: () => (0, B.lX)("ProfilePrivacySetting"),
        useTitle: () => j.intl.string(j.t.Qnf32C),
        useOptions: () => [
            { name: j.intl.string(j.t.Boxc8R), desc: j.intl.string(j.t["nLj+nc"]), value: H.KP.FRIENDS_AND_ALL_GUILDS },
            { name: j.intl.string(j.t.YOIKBt), desc: j.intl.string(j.t.y0JZ4s), value: H.KP.FRIENDS_AND_SMALL_GUILDS },
            { name: j.intl.string(j.t.u0nlJv), desc: j.intl.string(j.t["4jnKHu"]), value: H.KP.FRIENDS_ONLY },
        ],
        useValue: D.KP.useSetting,
        setValue: function (e) {
            let t = D.KP.getSetting();
            if ((D.KP.updateSetting(e), !(0, B.W1)("ProfilePrivacySetting"))) return;
            let n = (0, W.gS)(t, e);
            null != n &&
                (0, K.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        i.e("92164"),
                        i.e("36281"),
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
    Cp = (0, a.zZ)(u.X.PROFILE_PRIVACY_CATEGORY, {
        usePredicate: () => {
            let e = (0, B.lX)("ProfilePrivacyCategory"),
                t = Cg("ProfilePrivacyCategory");
            return e || t;
        },
        useTitle: () => j.intl.string(j.t.ul884f),
        useSubtitle: () =>
            j.intl.format(j.t.N4jSgR, {
                learnMoreUrl: tN.A.getArticleURL("38859942749463-Profile-Privacy-Setting-on-Discord"),
            }),
        buildLayout: () => [Cx, CA, CT],
    });
var Cf = i(814278),
    CN = i(936388),
    C_ = i(714763);
let CI = (0, a.zD)(u.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => j.intl.string(j.t["opi/XK"]),
    useSubtitle: () => j.intl.format(j.t["/T+ZlP"], { helpArticle: (0, Cf.Lu)() }),
    useValue: function () {
        return (0, g.bG)([C_.A], () => C_.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        CN.A.updatePersistentCodesEnabled(e);
    },
});
var CC = i(787392);
function Cb() {
    return (0, g.yK)([CC.A], () => CC.A.getUserIds());
}
var Cy = i(803306),
    Cv = i(966327),
    Cj = i(146003);
function CO(e) {
    let { userId: t, count: i } = e,
        { analyticsLocations: n } = (0, nZ.Ay)(),
        s = (0, g.bG)([io.default], () => io.default.getUser(t)),
        l = xu.Ay.getFormattedName(s),
        r = S.useCallback(() => {
            (0, Cf.kj)(t);
        }, [t]),
        a = S.useCallback(() => (0, Tg.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: n }), [t, n]);
    return (
        S.useEffect(() => {
            (0, Cy.wz)(t);
        }, [t]),
        (0, E.jsxs)("div", {
            className: Cj.uW,
            children: [
                null != s && (0, E.jsx)(Cv.A, { className: Cj.my, user: s, size: i4._3.SIZE_40 }),
                (0, E.jsxs)("div", {
                    className: Cj.Qq,
                    children: [
                        (0, E.jsx)(en.D, {
                            className: Cj.Xh,
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
                (0, E.jsx)(en.D, { onClick: r, className: Cj.Qz, children: (0, E.jsx)(lq.u, { size: "xs" }) }),
            ],
        })
    );
}
function CR(e) {
    let { className: t, userId: i, verification: n, index: s } = e,
        l = (0, Cf.tC)(n.timestamp),
        r = S.useCallback(() => {
            (0, Cf.W0)(i, n.verifiedKey);
        }, [n.verifiedKey, i]);
    return (0, E.jsxs)("div", {
        className: t,
        children: [
            (0, E.jsxs)("div", {
                className: Cj.Qq,
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
                className: Cj.Kk,
                onClick: r,
                children: (0, E.jsx)(gU.P, { size: "md", color: er.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function CD(e) {
    let { userId: t } = e,
        i = (0, g.yK)([CC.A], () =>
            eZ()(CC.A.getUserVerifiedKeys(t))
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
            (0, E.jsx)(CO, { userId: t, count: i.length }),
            i.map((e, n) =>
                (0, E.jsxs)(
                    S.Fragment,
                    {
                        children: [
                            (0, E.jsx)(CR, { className: Cj.nM, userId: t, index: n, verification: e }),
                            n !== i.length - 1 && (0, E.jsx)("div", { className: Cj.yF }),
                        ],
                    },
                    `${n}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var CL = i(623161);
let CP = (0, a.E2)(u.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["5b3FNI"])],
        usePredicate: function () {
            let e = Cb();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = Cb();
            return (0, E.jsxs)(_Y.h, {
                children: [
                    (0, E.jsx)(_Y._, {
                        header: j.intl.string(j.t["5b3FNI"]),
                        description: j.intl.format(j.t.jrTSWU, { helpArticle: (0, Cf.dc)() }),
                    }),
                    e.map((e) => (0, E.jsx)("div", { className: CL.A, children: (0, E.jsx)(CD, { userId: e }) }, e)),
                ],
            });
        },
    }),
    CG = (0, a.zZ)(u.X.VOICE_SECURITY_CATEGORY, {
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
                              useText: () => j.intl.format(j.t["/6sFWa"], { helpArticle: (0, Cf.aW)() }),
                          },
                [e],
            );
        },
        usePredicate: () => (0, eY.isDesktop)(),
        buildLayout: () => [CI, CP],
    }),
    CM = (0, a.t_)(u.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => j.intl.string(j.t.OAuOHD),
        buildLayout: () => ((0, o.SB)("DataAndPrivacyPanel") ? [Cd, Cp, CG] : [Cd, Cp, I8, CG]),
    }),
    CU = (0, a.i4)(u.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.OAuOHD),
        icon: I$.m,
        buildLayout: () => [CM],
    });
var CV = i(476713);
let Ck = (0, a.AK)(u.X.CONNECTED_GAMES_AUTHORIZED_APPS_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.O65dzZ),
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        destinationKey: u.X.AUTHORIZED_APPS_CATEGORY,
    }),
    Cw = (0, a.gN)(u.X.CONNECTED_GAMES_RELATED_SETTINGS, { buildLayout: () => [Ck] }),
    CB = (0, a.E2)(u.X.CONNECTED_GAMES_UNAVAILABLE, {
        Component: function () {
            let { showLoadingIndicator: e } = _g(!0, !0);
            return e ? (0, E.jsx)(df.y, {}) : (0, E.jsx)(_h, {});
        },
        useSearchTerms: () => [j.intl.string(j.t["+0U77d"])],
        usePredicate: () => {
            let { showLoadingIndicator: e, slayerSdkApplications: t } = _g(!0, !0);
            return e || 0 === t.length;
        },
    });
function CF() {
    let { slayerSdkApplications: e, showLoadingIndicator: t } = _g(!0, !0);
    return {
        sortedGames: S.useMemo(() => e.toSorted((e, t) => dL.default.compare(t.id, e.id)), [e]),
        showLoadingIndicator: t,
    };
}
function Cz() {
    let { sortedGames: e } = CF();
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
let CX = (0, a.zZ)(u.X.SPAM_FILTERS_CATEGORY, { useTitle: () => j.intl.string(j.t.Qwuoic), buildLayout: () => [_6] }),
    CY = (0, a.zZ)(u.X.CONNECTED_GAMES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.RyvebU),
        useSubtitle: function () {
            let { sortedGames: e } = CF(),
                t = (e, t) =>
                    (0, E.jsx)(es.E, { tag: "span", variant: "text-sm/normal", color: "text-default", children: e }, t);
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
        useHeaderDecoration: () => ({ type: h.WX.STACKED_ICONS, useIcons: Cz }),
        useSearchTerms: () => [j.intl.string(j.t.YpCiMt)],
        initialize: () => {
            Sg.A.fetch();
        },
        buildLayout: () => [_x, _p, CB, Cw],
    }),
    CH = (0, a.t_)(u.X.MESSAGING_PERMISSIONS_PANEL, {
        useTitle: () => j.intl.string(j.t.Cz07t8),
        buildLayout: () => [_4, CX, IK, Is, CY, IE],
    }),
    CK = (0, a.i4)(u.X.MESSAGING_PERMISSIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.Cz07t8),
        icon: CV.l,
        buildLayout: () => [CH],
    });
var CW = i(782603),
    CZ = i(899847),
    CQ = i(695515),
    Cq = i(936926);
let CJ = (0, a.Hn)(u.X.MOBILE_NOTIFICATION_DELAY, {
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
    C$ = (0, a.zD)(u.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => j.intl.string(j.t["btbS+Z"]),
        useSubtitle: () =>
            j.intl.format(j.t.Q5crhR, { onClick: () => (0, eH.openUserSettings)(u.X.TTS_PLAYBACK_RATE) }),
        useValue: D.on.useSetting,
        setValue: D.on.updateSetting,
    }),
    C0 = (0, a.Qx)(u.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.JZxxGx),
        useSubtitle: () => j.intl.string(j.t.HDLtJl),
        useValue: () => (0, g.bG)([uU.A], () => uU.A.getTTSType()),
        setValue: (e) => uF.default.setTTSType(e),
        useOptions: () => [
            { name: j.intl.string(j.t.B1AGeJ), value: U.aVn.ALL_CHANNELS },
            { name: j.intl.string(j.t.uzZg9e), value: U.aVn.SELECTED_CHANNEL },
            { name: j.intl.string(j.t.DYO5Oi), value: U.aVn.NEVER },
        ],
        usePredicate: () => nu.$j,
    }),
    C1 = u.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    C2 = (0, a.bd)(C1, {
        useTitle: (e) => (e ? j.intl.string(j.t.RyimDk) : j.intl.string(j.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return sC(C1, {
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
        buildLayout: () => [CJ, C$, C0],
    }),
    C3 = (0, a.zZ)(u.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => j.intl.string(j.t["31DySj"]),
        buildLayout: () => [C2],
    }),
    C6 = (0, a.zD)(u.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => j.intl.string(j.t.VH8AIJ),
        useSubtitle: () => j.intl.string(j.t["9K4qwX"]),
        useValue: () => (0, g.bG)([uU.A], () => !uU.A.getDisableUnreadBadge()),
        setValue: (e) => uF.default.setDisableUnreadBadge(!e),
    }),
    C4 = (0, a.zZ)(u.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.l6w3Vj),
        buildLayout: () => [C6],
    });
var C7 = i(840559),
    C5 = i(997187),
    C8 = i(723923);
let C9 = C8.px.map((e) =>
        (0, a.zD)(`${u.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                ((e) => {
                    let { categories: t } = (0, g.cf)([C5.A], () => C5.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, C7.CA)(e.category, t),
        }),
    ),
    be = (0, a.Tf)(u.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => j.intl.string(j.t.Ra9Pwk),
        useSubtitle: () => j.intl.string(j.t.iYjQ8X),
        useLabel: () => j.intl.string(j.t.KT1pBA),
        useDisabled: () => {
            let { categories: e } = (0, g.cf)([C5.A], () => C5.A.getEmailSettings());
            return C8.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, C7.NI)(),
        useVariant: () => "critical-secondary",
    }),
    bt = (0, a.zZ)(u.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => j.intl.string(j.t["w/qqKK"]),
        initialize: function () {
            let { initialized: e } = C5.A.getEmailSettings();
            e || (0, C7.cR)();
        },
        buildLayout: () => [...C9, be],
    }),
    bi = (0, a.zD)(u.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t["/0WCll"]),
        useSubtitle: () => j.intl.string(j.t.wF9ih3),
        useValue: () => (0, g.bG)([uU.A], () => uU.A.getDesktopType()) !== U.nRU.NEVER,
        setValue: (e) => uF.default.setDesktopType(e ? U.nRU.ALL : U.nRU.NEVER),
    });
var bn = i(832712),
    bs = i(543465),
    bl = i(790782);
let br = (0, a.zD)(u.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => j.intl.string(j.t["k6m/si"]),
    useSubtitle: () => j.intl.string(j.t.LGynPs),
    useValue: () => (0, g.bG)([bs.Ay], () => bs.Ay.useNewNotifications),
    setValue: function (e) {
        bn.A.setAccountFlag(M.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (Ey.w.set("turnedOffNewNotifications", !0),
                G.default.track(U.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: ec.A.getGuildsArray().filter(
                        (e) => bs.Ay.resolveGuildUnreadSetting(e) === bl.e.ONLY_MENTIONS,
                    ).length,
                }));
    },
    usePredicate: () =>
        (0, g.bG)(
            [io.default, bs.Ay],
            () =>
                io.default.getCurrentUser()?.isStaff() ||
                io.default.getCurrentUser()?.isStaffPersonal() ||
                bs.Ay.useNewNotifications,
        ),
});
var ba = i(534654);
let bo = (0, a.zD)(u.X.SCREEN_DOWNTIME_REMINDER, {
        useTitle: () => j.intl.string(j.t.z9h8Ym),
        useSubtitle: () => j.intl.string(j.t.TummoQ),
        useValue: () => (0, g.bG)([uU.A], () => uU.A.screenDowntimeReminder),
        setValue: (e) => uF.default.setScreenDowntimeReminder(e),
        usePredicate: () => {
            let e = (0, Cq.Vh)({ location: "ScreenDowntimeReminderSetting" }),
                t = (0, ba.A)(),
                i = (0, Ns.Du)();
            return e && t && i;
        },
    }),
    bu = (0, a.zD)(u.X.SCREEN_DOWNTIME_SCHEDULE, {
        useTitle: () => j.intl.string(j.t.onrAy7),
        useSubtitle: () => j.intl.string(j.t["/071J7"]),
        useValue: D.gY.useSetting,
        setValue: (e) => D.gY.updateSetting(e),
        usePredicate: () => {
            let e = (0, Cq.Vh)({ location: "ScreenDowntimeScheduleSetting" }),
                t = (0, ba.A)(),
                i = (0, Ns.Du)();
            return e && t && i;
        },
    });
var bd = i(70730);
let bc = (0, a.zD)(u.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
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
            let { enabled: e } = bd.u.getConfig({ location: "FriendAnniversaryNotifications" });
            return e;
        },
    }),
    bg = (0, w.mj)({
        kind: "user",
        name: "2026-03-friend-is-online-v3",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    bm = (0, a.zD)(u.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.sQQgFj),
        useValue: D.NR.useSetting,
        setValue: function (e) {
            D.NR.updateSetting(e),
                G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: M.Y.ACCOUNT,
                    friend_online_notifications: e,
                });
        },
        usePredicate: () => bg.useConfig({ location: "FriendOnlineNotifications" }).showSettingsToggle,
    });
var bA = i(571524);
let bh = (0, a.zD)(u.X.GDM_ALL_REACTION_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.nvkXtr),
        useValue: D.c3.useSetting,
        setValue: function (e) {
            D.c3.updateSetting(e),
                G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: M.Y.ACCOUNT,
                    gdm_all_reaction_notifications: e,
                });
        },
        usePredicate: function () {
            return (0, bA.h)("GdmAllReactionNotification").showSettingsToggle;
        },
    }),
    bE = (0, a.zD)(u.X.GO_LIVE_NOTIFICATIONS, {
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
    bS = (0, w.mj)({
        kind: "user",
        name: "2026-01-profile-updates-notification",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 0: { showSettingsToggle: !1 }, 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    bT = (0, a.zD)(u.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.xBLMhQ),
        useValue: D.T3.useSetting,
        setValue: function (e) {
            D.T3.updateSetting(e),
                G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: M.Y.ACCOUNT,
                    profile_updates_notifications: e,
                });
        },
        usePredicate: () => bS.useConfig({ location: "user_settings.ProfileUpdatesNotifications" }).showSettingsToggle,
    });
var bx = i(815807);
let bp = (0, a.Hn)(u.X.REACTION_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: j.intl.string(j.t["9x/RtT"]), value: H.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: j.intl.string(j.t.fJAbQd), value: H.Tz.ONLY_DMS },
            { id: "disabled", label: j.intl.string(j.t["xu+UDU"]), value: H.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: D.Zp.useSetting,
        setValue: (e) => (0, bx.n4)(e, D.Zp.getSetting()),
    }),
    bf = (0, a.zD)(u.X.SERVER_TRENDING_NOTIFICATIONS, {
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
    bN = (0, w.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    b_ = (0, a.zD)(u.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.G8NPz6),
        useValue: D.zS.useSetting,
        setValue: function (e) {
            D.zS.updateSetting(e),
                G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: M.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                });
        },
        usePredicate: () => bN.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    bI = (0, a.FW)(u.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.FEVRDV),
        buildLayout: () => [bE, bc, bm, bf, b_, bT, bp, bh],
    }),
    bC = (0, a.zD)(u.X.TASK_BAR_FLASHING, {
        useTitle: () => j.intl.string(j.t.xSmFQG),
        useSubtitle: () => j.intl.string(j.t.bd4j4x),
        useValue: () => (0, g.bG)([uU.A], () => uU.A.taskbarFlash),
        setValue: (e) => uF.default.setTaskbarFlash(e),
        usePredicate: () => (0, c.uF)(),
    }),
    bb = (0, a.zZ)(u.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => j.intl.string(j.t["/dp6yY"]),
        buildLayout: () => [bi, bC, bI, br, bu, bo],
    });
var by = i(965957),
    bv = i(312671),
    bj = i(235079);
let bO = (0, a.zD)(u.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = uV.A.useHolidaySoundpack();
        return null == e ? "" : j.intl.format(j.t["E/OyBr"], { soundpack: j.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, g.bG)([bv.A], () => bv.A.getSoundpack()),
            t = uV.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = uV.A.getHolidaySoundpack();
        tz()(null != t, "predicate should fail if no soundpack is available"), (0, by.p)(e ? t : bj.i.CLASSIC);
    },
    usePredicate: uV.A.useIsEligible,
});
var bR = i(970931);
let bD = {
        useTitle: () => j.intl.string(j.t.jD1qzM),
        sound: "message1",
        useDisabled: bR.kB,
        useDisabledMessage: () => ((0, bR.kB)() ? j.intl.string(j.t.cIRG0s) : void 0),
    },
    bL = { useTitle: () => j.intl.string(j.t.XBrJT6), sound: "call_ringing" },
    bP = (0, a.zD)(u.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.TzjwV9),
        useSubtitle: () => j.intl.format(j.t.OOiGCM, { onClick: () => uY("message3") }),
        useValue: () =>
            (0, g.bG)([uU.A], () => uU.A.getNotifyMessagesInSelectedChannel() && !uU.A.getDisableAllSounds()),
        setValue: (e) => uF.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, g.bG)([uU.A], () => uU.A.getDisableAllSounds()),
    }),
    bG = (0, a.zD)(u.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => j.intl.string(j.t["2ZhCOd"]),
        useSubtitle: () => j.intl.string(j.t.EAKdPr),
        useValue: () => (0, g.bG)([uU.A], () => uU.A.getDisableAllSounds()),
        setValue: (e) => uF.default.toggleDisableAllSounds(e),
    }),
    bM = (0, a.D1)(u.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                uX();
            };
        },
        buildLayout: () => [uH(bD), bP, uH(bL), bG],
    }),
    bU = (0, a.AK)(u.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t["MMy+lm"]),
        useSearchTerms: () => [j.intl.string(j.t["MMy+lm"])],
        destinationKey: u.X.SOUNDS_CATEGORY,
    }),
    bV = (0, a.gN)(u.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [bU] }),
    bk = (0, a.zZ)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.LweOYy),
        buildLayout: () => [bO, bM, bV],
    }),
    bw = (0, a.t_)(u.X.NOTIFICATIONS_PANEL, {
        useTitle: () => j.intl.string(j.t.HcoRu0),
        initialize: () => {
            !(0, Cq.Eq)({ location: "NotificationsPanel" }) ||
                null != CQ.A.getAgeGroup() ||
                CQ.A.isLoading() ||
                (CQ.A.canRefetch() && CZ.Ay.initialPageLoad());
        },
        buildLayout: () => [bb, bk, C4, bt, C3],
    }),
    bB = (0, a.i4)(u.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.HcoRu0),
        icon: CW.X,
        buildLayout: () => [bw],
    }),
    bF = (0, a.WI)(u.X.USER_SECTION, {
        useTitle: () => j.intl.string(j.t.ShSTDe),
        hideTitle: !0,
        buildLayout: () => {
            let e = (0, o.Bv)("UserSection");
            return [Nf, ...(e ? [] : [IJ]), CU, ...(e ? [CK] : []), ...(e ? [] : [NC]), ...(e ? [] : [_d]), bB, _r];
        },
    });
var bz = i(387758),
    bX = i(271866),
    bY = i(147964),
    bH = i(868511);
let bK = (0, a.zD)(u.X.APPLICATION_TEST_MODE, {
        useTitle: () => j.intl.string(j.t.erOqlh),
        useSubtitle: () => j.intl.string(j.t["52hMnD"]),
        usePredicate: D.Q_.useSetting,
        useValue: () => (0, g.bG)([bY.A], () => null != bY.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, K.openModal)((e) => (0, E.jsx)(bH.A, { ...e })) : bX.cL();
        },
    }),
    bW = (0, a.zD)(u.X.DEVELOPER_MODE, {
        useTitle: () => j.intl.string(j.t.ObIb1Q),
        useSubtitle: () => j.intl.format(j.t["CY6q/Q"], { apiDocsUrl: U.X7G.API_DOCS }),
        useValue: D.Q_.useSetting,
        setValue: D.Q_.updateSetting,
        usePredicate: () => cK.p5,
    }),
    bZ = (0, a.zZ)(u.X.DEVELOPER_CATEGORY, { buildLayout: () => [bW, bK] }),
    bQ = (0, a.t_)(u.X.DEVELOPER_PANEL, { useTitle: () => j.intl.string(j.t["0BRxRp"]), buildLayout: () => [bZ] }),
    bq = (0, a.i4)(u.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: bz.G,
        useTitle: () => j.intl.string(j.t["0BRxRp"]),
        buildLayout: () => [bQ],
    });
var bJ = i(70688),
    b$ = i(830215);
let b0 = (0, a.i4)(u.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => j.intl.string(j.t["2jxGer"]),
        icon: bJ.o,
        onClick: () => {
            (0, sg.A)({
                title: j.intl.string(j.t["2jxGer"]),
                subtitle: j.intl.string(j.t.SUnWBB),
                confirmText: j.intl.string(j.t["2jxGer"]),
                onConfirm: () => {
                    b$.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    b1 = (0, a.WI)(u.X.UTILITY_SECTION, {
        useTitle: () => j.intl.string(j.t["2kOEFe"]),
        hideTitle: !0,
        buildLayout: () => [bq, b0],
    }),
    b2 = (0, a.Hr)({
        buildLayout: function () {
            return [pG, bF, h3, dE, (0, o.Bv)("UserSettingsRoot_buildLayout") ? Tr : i1, Sc, b1];
        },
        analyticsKey: "user_settings",
    });
