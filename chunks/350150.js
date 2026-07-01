i.d(t, { D: () => yn });
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
var L = i(885386),
    D = i(395277);
let P = (0, a.zD)(u.X.ACTIVITY_PRIVACY_SETTING, {
    useTitle: () => j.intl.string(D.default.WhdCGP),
    useSubtitle: () => j.intl.string(D.default.UQ9RHJ),
    useValue: L.tz.useSetting,
    setValue: L.tz.updateSetting,
});
var G = i(174459),
    U = i(406535),
    M = i(652215);
let V = (0, a.zD)(u.X.ACTIVITY_PRIVACY_NOTIFY_FRIENDS_ONLINE_SETTING, {
        useTitle: () => j.intl.string(D.default.A0FVCV),
        useSubtitle: () => j.intl.string(D.default.vHX6RG),
        useValue: L.hV.useSetting,
        setValue: function (e) {
            L.hV.updateSetting(e),
                G.default.track(M.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: U.Y.ACCOUNT,
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
    F = i(106531);
let B = (0, w.mj)({
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
    let t = (0, F.lX)(e),
        i = B.useConfig({ location: e });
    return t || i.copyChanges;
}
let X = (0, a.AK)(u.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.J0SFL2),
        destinationKey: u.X.DATA_AND_PRIVACY_PANEL,
    }),
    Y = (0, a.gN)(u.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, F.lX)("ActivityPrivacyRelatedSettings"),
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
            : j.intl.string(D.default["/LHVbt"]);
    },
    useSubtitle: () => ((0, o.SV)("GuildActivitySharingDefaultSetting") ? j.intl.string(j.t.L5IdzV) : null),
    useOptions: function () {
        let e = (0, o.SV)("GuildActivitySharingDefaultSetting"),
            t = z("GuildActivitySharingDefaultSetting");
        return S.useMemo(
            () =>
                e
                    ? [
                          { value: H.Qd.ACTIVITY_STATUS_OFF, name: j.intl.string(D.default.m3oL7Q) },
                          { value: H.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: j.intl.string(D.default["5+lnTA"]) },
                          { value: H.Qd.ACTIVITY_STATUS_ON, name: j.intl.string(D.default["egr+VZ"]) },
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
                                name: j.intl.string(D.default["/sAeRY"]),
                            },
                            { value: H.Qd.ACTIVITY_STATUS_OFF, name: j.intl.string(D.default.m3oL7Q) },
                        ],
            [t, e],
        );
    },
    useValue: L._Z.useSetting,
    setValue: function (e) {
        var t;
        let n = L._Z.getSetting();
        if (
            (L._Z.updateSetting(e),
            (t = "GuildActivitySharingDefaultSetting"),
            !(0, F.W1)(t) && !B.getConfig({ location: t }).upsell)
        )
            return;
        let s = (0, W.g8)(n, e);
        if (null == s) return;
        let l = (0, W.Xc)(e);
        (0, K.openModalLazy)(async () => {
            let { default: e } = await Promise.all([i.e("92164"), i.e("36281"), i.e("84422"), i.e("41996")]).then(
                i.bind(i, 32167),
            );
            return (t) =>
                (0, E.jsx)(e, { ...t, direction: s.direction, affectedGuildIds: s.affectedGuildIds, settingName: l });
        });
    },
});
var q = i(683071),
    Q = i(331322),
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
    return (0, E.jsxs)(Q.B, {
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
                a = L.Pw.useSetting(),
                [o, u] = (0, S.useState)(a);
            async function d(e) {
                u(e);
                try {
                    await L.Pw.updateSetting(e);
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
                { id: em.ACTIVITY_SHARING_ON, label: j.intl.string(D.default.ZI51JZ), value: em.ACTIVITY_SHARING_ON },
                {
                    id: em.ACTIVITY_SHARING_OFF,
                    label: j.intl.string(D.default["+kxafn"]),
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
                            G.default.track(M.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_cleared",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: m,
                            }),
                                s("");
                        },
                        onFocus: () =>
                            G.default.track(M.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_focused",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: m,
                            }),
                        onBlur: () =>
                            G.default.track(M.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
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
                                                                    M.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED,
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
        useSearchTerms: () => [j.intl.string(D.default["/LHVbt"])],
        Component: function () {
            let e = L.tz.useSetting()
                ? null
                : (0, E.jsx)("div", {
                      className: eT.l,
                      children: (0, E.jsx)(q.w, { type: "warning", children: j.intl.string(D.default["xxI0/W"]) }),
                  });
            return (0, E.jsx)(eS, { notice: e });
        },
    }),
    ep = (0, a.zZ)(u.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () => {
            let e = (0, o.SV)("GuildActivitySharingCategory"),
                t = z("GuildActivitySharingCategory");
            return e ? j.intl.string(j.t.bwqjL9) : t ? j.intl.string(j.t.VDcvrR) : j.intl.string(D.default["1PougL"]);
        },
        useSubtitle: () => {
            let e = z("GuildActivitySharingCategory");
            return (0, o.SV)("GuildActivitySharingCategory")
                ? null
                : e
                  ? j.intl.string(j.t["/Go08F"])
                  : j.intl.string(D.default.OO17Lg);
        },
        buildLayout: () => ((0, o.Bv)("GuildActivitySharingCategory") ? [Z, ex, Y] : [Z]),
    }),
    ef = (0, a.zZ)(u.X.ACTIVITY_PRIVACY_MY_SERVERS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.TqdOvC),
        useSubtitle: () => (z("MyServersCategory") ? j.intl.string(D.default.OO17Lg) : null),
        buildLayout: () => [ex, Y],
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
                    children: j.intl.format(j.t.xvCsx4, { termsLink: M.X7G.TERMS, privacyLink: M.X7G.PRIVACY }),
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
var eL = i(935399),
    eD = i(625657),
    eP = i(534514),
    eG = i(821609),
    eU = i(404778),
    eM = i(554146),
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
            (G.default.track(M.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (eJ = t));
}
function e0(e) {
    let t = eX.default.getNotificationPositionMode(),
        i = t !== M.G6Q.DISABLED,
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
                    (0, e2.b)(e1.A.USER_SETTINGS, M.BRT.APP);
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
                  children: j.intl.format(j.t["LJzl+0"], { helpCenterLink: tN.A.getArticleURL(M.MVz.SYSTEM_SERVICE) }),
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
function tL(e) {
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
            L = n?.overlayMethod === th.Ue.OutOfProcessLimitedInteraction,
            D = n?.overlayMethod === th.Ue.Hook,
            P = n?.state === th.AR.OVERLAY_CRASHED || n?.state === th.AR.OVERLAY_CRASHED_DISABLED,
            G = !a && !u,
            [U, M] = (() => {
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
                    case v && L:
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
                    case v && D:
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
                        if (D) return [j.intl.string(j.t.JEEdqt), null];
                        if (L) return [j.intl.string(j.t.pzBMwY), null];
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
                    : v && L
                      ? ["text-feedback-warning", er.A.colors.TEXT_FEEDBACK_WARNING.css]
                      : v && R
                        ? ["text-feedback-positive", er.A.colors.TEXT_FEEDBACK_POSITIVE.css]
                        : v && D
                          ? ["text-strong", er.A.colors.TEXT_STRONG.css]
                          : ["interactive-text-default", er.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
            [O, v, L, R, D],
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
                  description: U,
                  hint: null != M ? M : void 0,
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
function tU(e) {
    let { game: t, gameApplication: i } = e,
        n = S.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        s = (0, g.bG)([x.A], () => (null != i ? i : x.A.getApplication(t?.id)), [i, t]);
    return (0, E.jsx)(p.A, { game: s, pid: n, size: p.M.SMALL });
}
function tM(e) {
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
            icon: (0, E.jsx)(tU, { game: o, gameApplication: i }),
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
                : (0, E.jsxs)(tL, {
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
                                      tM,
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
                : (0, E.jsxs)(tL, {
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
                                      tM,
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
            t = !(0, tv.supportsLegacy)(),
            i = !(0, tv.supportsOutOfProcess)(),
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
            { id: "large", label: j.intl.string(j.t.YcOxtr), value: M.OSZ.LARGE },
            { id: "small", label: j.intl.string(j.t.BKIKqx), value: M.OSZ.SMALL },
        ],
    }),
    t3 = (0, a.Hn)(u.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => j.intl.string(j.t.J0dpcB),
        useValue: () => (0, g.bG)([eX.default], () => eX.default.getDisplayNameMode()),
        setValue: (e) => {
            td.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: j.intl.string(j.t.nBmDrT), value: M.pwA.ALWAYS },
            { id: "speaking", label: j.intl.string(j.t["2OvIZY"]), value: M.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: j.intl.string(j.t.ekjlPL), value: M.pwA.NEVER },
        ],
    }),
    t6 = (0, a.Hn)(u.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => j.intl.string(j.t.swsWWC),
        useValue: () => (0, g.bG)([eX.default], () => eX.default.getDisplayUserMode()),
        setValue: (e) => {
            td.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: j.intl.string(j.t.nBmDrT), value: M.f5z.ALWAYS },
            { id: "speaking", label: j.intl.string(j.t["2OvIZY"]), value: M.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var t4 = i(391973),
    t7 = i(489277),
    t5 = i(897720),
    t8 = i(38502);
function t9() {
    let e = t7.A.getWidgetByType(M.uss.VOICE_V3);
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
                    let e = t7.A.getWidgetByType(M.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = t8.A.getWidget(e.id);
                    return null != t && (0, t5.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = iu(t.username)).user = t), e) : null, ...l].filter(N.Vq),
                u = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                d = (0, E.jsx)(it.N, {
                    theme: M.NJ8.MIDNIGHT,
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
                                            type: M.rbe.GUILD_VOICE,
                                            guild_id: "456",
                                        }),
                                        overlayVoiceStates: u,
                                        displayNameMode: n,
                                        displayUserMode: s,
                                        avatarSizeMode: i,
                                        widget: M.uss.VOICE,
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
    let [e, t] = (0, eV.kn)([eM.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
    return ((0, eL.Ay)(() => () => {
        t(ig.i.AUTO_DISMISS);
    }),
    e !== eM.M.OVERLAY_OOP_SETTINGS_NUX)
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
                  (0, E.jsx)(eU.c, { className: im.yF }),
              ],
          });
}
function ih() {
    let e = (0, g.bG)([eF.A], () => eF.A.enabled),
        t = (0, ek.Mn)("OverlayStreamerModeNotice");
    return e && t
        ? (0, E.jsxs)(E.Fragment, {
              children: [
                  (0, E.jsx)(q.w, {
                      type: "warning",
                      children: j.intl.format(j.t.fuEX5B, {
                          onClick: function () {
                              return (0, eH.openUserSettings)(u.X.STREAMER_MODE_CATEGORY);
                          },
                      }),
                  }),
                  (0, E.jsx)(eU.c, { className: im.yF }),
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
    iy = i(39623),
    iv = i(952270),
    ij = i(138134),
    iO = i(414079),
    iR = i(29160),
    iL = i(650583),
    iD = i(150717),
    iP = i(653307);
let iG = (0, eY.isWindows)();
function iU(e) {
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
            [iD.LO]: !n,
            [iD.Rw]: n,
            [iD.FB]: null != o && n,
            [iD.xL]: r,
            [iD.fG]: null != l && l.length > 0,
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
                                  children: (0, E.jsx)(en.D, {
                                      "aria-label": j.intl.string(j.t["y0B+lo"]),
                                      className: iD.ym,
                                      onClick: function () {
                                          if (h) return;
                                          let e = null != o.id ? tb.A.getDetectableGame(o.id) : null;
                                          G.default.track(M.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
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
                                                              type: M.$pd.PLAYING,
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
                                    ? (0, E.jsx)(iy.b, {
                                          size: "md",
                                          color: "currentColor",
                                          className: iD.Lj,
                                          colorClass: iD.GS,
                                      })
                                    : (0, E.jsx)(iv.G, {
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
                                    ? (0, E.jsx)(en.D, {
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
                                    children: (0, E.jsx)(en.D, {
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
                                    (0, E.jsx)(iU, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
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
var iM = i(818050);
function iV() {
    let e = (0, g.bG)([iC.A], () => iC.A.theme);
    return (0, E.jsxs)(iN.pp, {
        theme: e,
        className: iM.eT,
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
                          iU,
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
            (0, E.jsx)(eU.c, { className: e6()(iM.Ot, iM.QB) }),
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
    Component: function () {
        let e = S.useRef(null);
        return (0, E.jsxs)("div", {
            className: e6()(iW.a, iM.Gf),
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
        Component: function () {
            let { robloxSubgameHistory: e, overrideExePaths: t } = C(),
                i = (0, g.bG)([m.Ay], () => m.Ay.getVisibleGame());
            return null != i
                ? (0, E.jsx)(
                      iU,
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
let nn = new il.nA({ id: "1337", guild_id: "1337", type: M.rbe.GUILD_TEXT, name: "preview" }),
    ns = [
        { status: M.clD.IDLE, discriminator: "2" },
        { status: M.clD.DND, discriminator: "3" },
        { status: M.clD.ONLINE, mobile: !0, discriminator: "4" },
    ];
function nl(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (0, i5.rh)({ ...(0, i8.Ay)({ channelId: nn.id, content: e }), state: M.cmJ.SENT, reactions: t });
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
            return (0, E.jsxs)(Q.B, {
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
            { badgeType: h.Xi.NEW, dismissibleContent: eM.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE },
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
    nL = (0, a.Hn)(u.X.ROLE_STYLE, {
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
let nD = (0, a.sN)(u.X.SATURATION, {
    useTitle: () => j.intl.string(j.t["5PWWCY"]),
    useSubtitle: () => j.intl.string(j.t.xf5S6P),
    markers: M.hH7.SATURATION_INCREMENTS,
    onMarkerRender: (e) => ((100 * e) % 2 == 0 ? `${100 * e}%` : void 0),
    stickToMarkers: !0,
    minValue: 0,
    maxValue: 1,
    getInitialValue: () => i7.Ay.saturation,
    asValueChanges: (e) => (0, nN.HU)(e),
});
var nP = i(839214),
    nG = i(502229);
let nU = (0, nP.D)(() => ({ syncEnabled: null, updateTimeout: null })),
    nM = (0, a.zD)(u.X.SYNC_FORCED_COLORS, {
        useTitle: () => j.intl.string(j.t.cguiec),
        useSubtitle: () => j.intl.format(j.t.GwEVE2, { learnMoreLink: tN.A.getArticleURL(M.MVz.FORCED_COLORS) }),
        useValue: () => {
            let e = (0, g.bG)([i7.Ay], () => i7.Ay.syncForcedColors);
            return (
                (0, tg.Ay)(() => {
                    nU.setState({ syncEnabled: i7.Ay.syncForcedColors });
                }),
                nU.useState((e) => e.syncEnabled) ?? e
            );
        },
        setValue: (e) => {
            let { updateTimeout: t } = nU.getState();
            if (null != t) {
                clearTimeout(t), nU.setState({ syncEnabled: e, updateTimeout: null });
                return;
            }
            if (e === i7.Ay.syncForcedColors) return void nU.setState({ syncEnabled: e });
            let i = setTimeout(() => {
                (0, nN.D3)(e), nU.setState({ updateTimeout: null });
            }, 150);
            nU.setState({ syncEnabled: e, updateTimeout: i });
        },
        usePredicate: () => (0, nG.D)(),
    }),
    nV = (0, a.zZ)(u.X.COLOR_AND_CONTRAST_CATEGORY, {
        useTitle: () => j.intl.string(j.t.JqvyiY),
        buildLayout: () => [nD, n_, ny, nC, nM, nO, nL, nR, nb, nf],
    });
var nk = i(397438),
    nw = i(355097);
function nF(e) {
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
let nB = (0, a.zD)(u.X.ANIMATE_EMOJIS, {
        useTitle: () => j.intl.string(j.t.iIaOlc),
        useSubtitle: () => nF("animateEmoji"),
        useValue: () => L.Sf.useSetting(),
        setValue: (e) => L.Sf.updateSetting(e),
    }),
    nz = (0, a.zD)(u.X.ANIMATE_GIFS, {
        useTitle: () => j.intl.string(j.t.wqsK7q),
        useSubtitle: () => nF("gifAutoPlay"),
        useValue: () => L.kt.useSetting(),
        setValue: (e) => L.kt.updateSetting(e),
    });
var nX = i(823894);
let nY = (0, a.Qx)(u.X.ANIMATE_STICKERS, {
        useTitle: () => j.intl.string(j.t.sBHIh0),
        useSubtitle: () => nF("animateStickers"),
        useOptions: () => [
            { name: j.intl.string(j.t["Xp+X2U"]), value: nX.BJ.ALWAYS_ANIMATE },
            { name: j.intl.string(j.t.IlLT7e), desc: j.intl.string(j.t.bIW9Tl), value: nX.BJ.ANIMATE_ON_INTERACTION },
            { name: j.intl.string(j.t.IGu8x3), value: nX.BJ.NEVER_ANIMATE },
        ],
        useValue: () => L.S0.useSetting(),
        setValue: (e) => L.S0.updateSetting(e),
    }),
    nH = (0, a.zD)(u.X.REDUCED_MOTION, {
        useTitle: () => j.intl.string(j.t.b3XBzg),
        useSubtitle: () => j.intl.format(j.t.XqvxJc, { helpdeskArticle: tN.A.getArticleURL(M.MVz.REDUCED_MOTION) }),
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
        buildLayout: () => [nH, nK, nz, nB, nY],
    });
var nZ = i(688810),
    nq = i(259065),
    nQ = i(864386);
let nJ = (0, a.zD)(u.X.DISPLAY_NAME_STYLES, {
    useTitle: () => j.intl.string(nQ.default["2gFUEw"]),
    useSubtitle: () => {
        let { analyticsLocations: e } = (0, nZ.Ay)();
        return j.intl.format(nQ.default.aEax6P, {
            onClickOpenModal() {
                (0, nq.L)({ analyticsLocations: e });
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
        markers: M.hH7.FONT_SIZES,
        stickToMarkers: !0,
        minValue: M.hH7.FONT_SIZES["0"],
        maxValue: M.hH7.FONT_SIZES[M.hH7.FONT_SIZES.length - 1],
        useDefaultValue: () => M.hH7.FONT_SIZE_DEFAULT,
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
        useValue: () => L.Xi.useSetting(),
        setValue: (e) => {
            e !== H.NS.UNSET_UI_DENSITY && L.Xi.updateSetting(e);
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
        useValue: () => (L.hH.useSetting() ? n4 : n6),
        setValue: (e) => {
            L.hH.updateSetting(e === n4), (0, nN.AC)();
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
    useDefaultValue: () => (L.hH.useSetting() ? n5.y5 : n5.ES),
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
        markers: M.hH7.ZOOM_SCALES,
        stickToMarkers: !0,
        minValue: M.hH7.ZOOM_SCALES["0"],
        maxValue: M.hH7.ZOOM_SCALES[M.hH7.ZOOM_SCALES.length - 1],
        useDefaultValue: () => M.hH7.ZOOM_DEFAULT,
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
        return (0, E.jsxs)(Q.B, {
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
        useValue: () => !L.l_.useSetting(),
        setValue: (e) => L.l_.updateSetting(!e),
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
    sL = (0, a.zD)(u.X.ENABLE_EMOJI_BUTTON, {
        useTitle: () => j.intl.string(j.t.YErWkD),
        useValue: () => (0, g.bG)([i7.Ay], () => i7.Ay.isEmojiButtonEnabled),
        setValue: (e) => (0, nN.n8)({ emojiButtonEnabled: e }),
        usePredicate: () => (0, g.bG)([i7.Ay], () => i7.Ay.expressionPickerFormat === i7.IG.FLEXIBLE),
    }),
    sD = (0, a.zD)(u.X.ENABLE_GIF_BUTTON, {
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
    sU = (0, a.FW)(u.X.EXPRESSION_PICKER_FIELD_SET, {
        variant: "compact",
        isTitleHiddenVisually: !0,
        useTitle: () => j.intl.string(j.t["V9/cNN"]),
        buildLayout: () => [sG, sR, sL, sD, sP],
    }),
    sM = (0, a.bd)(u.X.CHAT_BAR_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? j.intl.string(j.t.IwVGQs) : j.intl.string(j.t.cFNDh5);
        },
        useCollapsedSubtitle: () => sC(u.X.CHAT_BAR_ADVANCED_ACCORDION),
        usePredicate: () => (0, sb.n)("ChatBarAdvancedAccordion"),
        buildLayout: () => [sj, sy, sU],
    });
var sV = i(565645);
let sk = (0, a.zD)(u.X.CHAT_EMOJI_CONVERT_EMOTICONS, {
        useTitle: () => j.intl.string(j.t["79qal8"]),
        useSubtitle: () =>
            j.intl.format(j.t.GejoQK, { emojiHook: (e, t) => (0, E.jsx)(sV.A, { emojiName: "\uD83D\uDE42" }, t) }),
        useValue: L.j7.useSetting,
        setValue: L.j7.updateSetting,
    }),
    sw = (0, a.zD)(u.X.CHAT_TEXT_BOX_PREVIEWS, {
        useTitle: () => j.intl.string(j.t.AqGrEI),
        useValue: L.SI.useSetting,
        setValue: (e) => {
            G.default.track(M.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: e,
                location: { section: M.JJy.SETTINGS_TEXT_AND_IMAGES },
            }),
                L.SI.updateSetting(e);
        },
    }),
    sF = (0, a.zD)(u.X.CHAT_STICKERS_AUTOCOMPLETE, {
        useTitle: () => j.intl.string(j.t["d+It2U"]),
        useValue: L.ML.useSetting,
        setValue: (e) => {
            G.default.track(M.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                enabled: e,
                location: { section: M.JJy.SETTINGS_TEXT_AND_IMAGES },
                location_stack: [e1.A.TEXT_AND_IMAGES],
            }),
                L.ML.updateSetting(e);
        },
    }),
    sB = (0, a.zZ)(u.X.APPEARANCE_CHAT_BOX_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Ob7VMB),
        useSearchTerms: () => [j.intl.string(j.t.onqU6o)],
        buildLayout: () => [sw, sk, sF, sO, sM],
    });
var sz = i(526162),
    sX = i(793943),
    sY = i(792656),
    sH = i(830543),
    sK = i(785007),
    sW = i(806932),
    sZ = i(915089),
    sq = i(174197),
    sQ = i(202541);
let sJ = (0, a.E2)(u.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [j.intl.string(j.t.gnwxvT)],
    Component: function () {
        let e = (0, sZ.GV)(),
            { ref: t, ...i } = (0, sK._u)({ orientation: "horizontal", labelledBy: e }),
            n = (0, g.bG)([sz.A], () => sz.A.isUpsellPreview);
        return (
            (0, eL.Ay)(() => {
                n &&
                    G.default.track(M.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: sQ.e.APP_ICON_UPSELL,
                        location_stack: [e1.A.USER_SETTINGS],
                    });
            }),
            (0, E.jsx)("div", {
                ...i,
                ref: t,
                children: (0, E.jsx)(Q.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    children: (0, E.jsx)(sW.m, { disabled: n, size: sq.N8.SIZE_48 }),
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
        subscriptionTier: sQ.pe.TIER_2,
        defaultTextOverride: j.intl.string(j.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: M.ZSU.BUTTON_CTA, objectType: M.AnalyticsObjectTypes.BUY },
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
let ln = tN.A.getArticleURL(M.MVz.FAVORITES_GUILD);
function ls() {
    let { analyticsLocations: e } = (0, nZ.Ay)(e1.A.USER_SETTINGS_FAVORITES),
        t = S.useCallback(() => {
            (0, le.mv)("settings_page"), (0, s7.uh)(M.YYv), (0, sH.default)();
        }, []);
    return (0, E.jsx)(nZ.f5, {
        value: e,
        children: (0, E.jsx)(s4.D, {
            label: j.intl.string(li.default.OT1NK5),
            description: j.intl.format(li.default.GR2KOG, { helpCenterLink: ln }),
            layout: "horizontal-responsive",
            badge: "beta",
            children: (0, E.jsxs)(Q.B, {
                direction: "horizontal",
                gap: 8,
                fullWidth: !1,
                children: [
                    (0, E.jsx)(eG.$, { variant: "secondary", text: j.intl.string(li.default["7WwLnr"]), onClick: t }),
                    (0, E.jsx)(sY.A, {
                        subscriptionTier: sQ.pe.TIER_2,
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
                    return null != e && s5.Ay.isPremiumExactly(e, sQ.PremiumTypes.TIER_2);
                }),
                i = (0, lt.DZ)(),
                n = S.useCallback(
                    (e) => {
                        (0, s9.tV)(e, "settings_page"), !e && i && (0, s7.pX)(M.BVt.ME);
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
        useValue: L.hD.useSetting,
        setValue: L.hD.updateSetting,
    }),
    la = (0, a.zD)(u.X.CHAT_INLINE_MEDIA_UPLOADS, {
        useTitle: () => j.intl.string(j.t.VP11No),
        useValue: L.X6.useSetting,
        setValue: L.X6.updateSetting,
    }),
    lo = (0, a.FW)(u.X.CHAT_INLINE_FIELD_SET, {
        useTitle: () => j.intl.string(j.t["9nyle0"]),
        buildLayout: () => [lr, la],
    }),
    lu = (0, a.zD)(u.X.CHAT_EMBEDS_RENDER_EMBEDS, {
        useTitle: () => j.intl.string(j.t["5bK9vw"]),
        useValue: L.rs.useSetting,
        setValue: L.rs.updateSetting,
    }),
    ld = (0, a.zD)(u.X.CHAT_EMOJI_RENDER_REACTIONS, {
        useTitle: () => j.intl.string(j.t["zge/fP"]),
        useValue: L.jW.useSetting,
        setValue: L.jW.updateSetting,
    });
var lc = i(817281);
let lg = (0, a.zD)(u.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
        useTitle: () => j.intl.string(j.t.JgjNG3),
        useSubtitle: () => {
            if (!L.hH.useSetting())
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
        useDisabled: () => !L.hH.useSetting(),
        useValue: () => {
            let e = (0, g.bG)([nj.Ay], () => nj.Ay.displayCompactAvatars);
            return !L.hH.useSetting() || e;
        },
        setValue: (e) => {
            lc.Ay.updatedUnsyncedSettings({ displayCompactAvatars: e });
        },
    }),
    lm = (0, a.Hn)(u.X.CHAT_SPOILERS_SHOW_SPOILERS, {
        useTitle: () => j.intl.string(j.t.QgwmVz),
        useOptions: () => [
            { value: M.P6Q.ON_CLICK, id: M.P6Q.ON_CLICK, label: j.intl.string(j.t["KFH/me"]) },
            { value: M.P6Q.ALWAYS, id: M.P6Q.ALWAYS, label: j.intl.string(j.t.Pe1RbL) },
            { value: M.P6Q.IF_MODERATOR, id: M.P6Q.IF_MODERATOR, label: j.intl.string(j.t.K5VTBE) },
        ],
        useValue: L.gs.useSetting,
        setValue: L.gs.updateSetting,
    }),
    lA = (0, a.zD)(u.X.CHAT_THREADS_SPLIT_VIEW, {
        useTitle: () => j.intl.string(j.t.AInv5m),
        useValue: L.SY.useSetting,
        setValue: L.SY.updateSetting,
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
        useValue: () => +!!L.Hu.useSetting(),
        setValue: (e) => {
            let t = 1 === e;
            t ? lE.A.cleanUpPrivateChannelSearchState() : lE.A.cleanUpSearchState({ type: M.I4_.DMS }),
                (0, lS._k)({
                    prevIsCrossDMSettingEnabled: L.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: lS.vy.USER_SETTINGS,
                }),
                L.Hu.updateSetting(t);
        },
    }),
    lx = (0, a.zZ)(u.X.APPEARANCE_SEARCH_CATEGORY, {
        useTitle: () => j.intl.string(j.t["5h0QOP"]),
        buildLayout: () => [lT],
    }),
    lp = (0, a.zD)(u.X.STREAMING_AUTO_STREAMER_MODE, {
        useTitle: () => j.intl.string(j.t.IxjaoF),
        useValue: function () {
            return (0, g.bG)([eF.A], () => {
                let { autoToggle: e } = eF.A.getSettings();
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
            return (0, g.bG)([eF.A], () => {
                let { enabled: e } = eF.A.getSettings();
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
            return (0, g.bG)([eF.A], () => eF.A.getSettings().disabledOverlayWidgets ?? lI);
        },
        setValue: (e) => sd.A.update({ disabledOverlayWidgets: e }),
        closeOnSelect: !1,
        wrapTags: !0,
    }),
    lb = (0, a.zD)(u.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => j.intl.string(j.t.LSBUGR),
        useValue: () =>
            (0, g.bG)([eF.A], () => {
                let { hidePersonalInformation: e } = eF.A.getSettings();
                return e;
            }),
        setValue: (e) => sd.A.update({ hidePersonalInformation: e }),
    }),
    ly = (0, a.zD)(u.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => j.intl.string(j.t.uWBOri),
        useValue: () =>
            (0, g.bG)([eF.A], () => {
                let { hideInstantInvites: e } = eF.A.getSettings();
                return e;
            }),
        setValue: (e) => sd.A.update({ hideInstantInvites: e }),
    }),
    lv = (0, a.zD)(u.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => j.intl.string(j.t.OrqYDP),
        useValue: () =>
            (0, g.bG)([eF.A], () => {
                let { disableSounds: e } = eF.A.getSettings();
                return e;
            }),
        setValue: (e) => sd.A.update({ disableSounds: e }),
    }),
    lj = (0, a.zD)(u.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.sUAbLd),
        useValue: () =>
            (0, g.bG)([eF.A], () => {
                let { disableNotifications: e } = eF.A.getSettings();
                return e;
            }),
        setValue: (e) => sd.A.update({ disableNotifications: e }),
    }),
    lO = (0, a.zD)(u.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => j.intl.string(j.t["iA81+a"]),
        useSubtitle: () => j.intl.string(j.t.P4vj0h),
        useValue: () =>
            (0, g.bG)([eF.A], () => {
                let { enableContentProtection: e } = eF.A.getSettings();
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
    lL = (0, a.zZ)(u.X.STREAMER_MODE_CATEGORY, {
        useTitle: () => j.intl.string(j.t.S5GfOW),
        buildLayout: () => [lf, lp, lR],
    });
var lD = i(47671),
    lP = i(665267),
    lG = i(414133),
    lU = i(412848);
let lM = (0, a.Hn)(u.X.APPEARANCE_GUILD_THEME_DEFAULT_PREFERENCE, {
        useTitle: () => j.intl.string(j.t.Q7mm4g),
        useSearchTerms: () => [j.intl.string(lU.default["/6NbRv"])],
        useOptions: () => [
            { id: "guild", label: j.intl.string(j.t["hrS/Pc"]), value: H.tI.GUILD },
            { id: "personal", label: j.intl.string(j.t.mlvXIq), value: H.tI.PERSONAL },
        ],
        useValue: () => L.zY.useSetting(),
        setValue: L.zY.updateSetting,
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
            n = lD.A.gradientPreset?.id ?? null,
            s = L.eh.getSetting()?.customUserThemeSettings != null;
        (t = M.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
            sa.h.dispatch({
                type: "TRACK",
                event: t,
                properties: { is_sync_enabled: e, base_theme: i, client_theme: n, has_custom_theme: s },
            }),
            lc.Ay.setShouldSyncAppearanceSettings(e);
    },
});
var lF = i(98596);
let lB = (0, a.AK)(u.X.APPEARANCE_THEME_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.nhVQDJ),
        useSearchTerms: () => [j.intl.string(j.t.nhVQDJ)],
        destinationKey: u.X.ACCESSIBILITY_PANEL,
    }),
    lz = (0, a.gN)(u.X.APPEARANCE_THEME_RELATED_SETTINGS, { buildLayout: () => [lB] }),
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
            return (0, g.bG)([lD.A, i7.Ay], () => i7.Ay.useForcedColors || lD.A.isPreview)
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
        buildLayout: () => [lF.k, lw, lV, lM, lz],
    }),
    lY = (0, a.t_)(u.X.APPEARANCE_PANEL, {
        initialize: function () {
            so.A.isFetching() ||
                (sa.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_START" }),
                sr.Bo.get({ url: M.Rsh.USERS_ME_CUSTOM_THEMES, oldFormErrors: !0, rejectWithError: !0 })
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
        buildLayout: () => [lX, s1, lh, sB, lx, lL, sT],
    }),
    lH = [
        { badgeType: h.Xi.NEW, dismissibleContent: eM.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE },
        {
            badgeType: h.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: eM.M.FAVORITES_GUILD_NEW_BADGE,
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
                    ((e = L.D_.useSetting()),
                    (t = L.SI.useSetting()),
                    e
                        ? null
                        : (0, E.jsx)(ei.sL, {
                              id: "preview-markdown-toggle",
                              label: j.intl.string(j.t.sHJ9wZ),
                              action: () => {
                                  let e = !t;
                                  G.default.track(M.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                                      enabled: e,
                                      location: { section: M.JJy.SETTINGS_CONTEXT_MENU },
                                  }),
                                      L.SI.updateSetting(e);
                              },
                              checked: t,
                          })),
                l =
                    ((i = (0, g.bG)([eF.A], () => eF.A.enabled, [])),
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
    lq = i(408278),
    lQ = i(241326),
    lJ = i(885574),
    l$ = i(475358),
    l0 = i(28647),
    l1 = i(337371),
    l2 = i(695366),
    l3 = i(472444),
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
        l = s && null != i && t === M.TBI.PUSH_TO_TALK;
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
                                  helpCenterLink: tN.A.getArticleURL(M.MVz.SYSTEM_SERVICE),
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
    return (0, E.jsx)("div", { className: t, children: (0, E.jsx)(Q.B, { gap: 16, children: i }) });
}
var rT = i(734066),
    rx = i(880144),
    rp = i(614455);
function rf() {
    let e = (0, g.bG)([eB.Ay], () => eB.Ay.getState()),
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
                        ![M.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, M.hCu.SAVE_CLIP, M.hCu.SAVE_SCREENSHOT].includes(
                            e.action,
                        ),
                )
                .reject((e) => !i && (e.action === M.hCu.SAVE_CLIP || e.action === M.hCu.SAVE_SCREENSHOT))
                .reject((e) => !n && e.action === M.hCu.SAVE_SCREENSHOT)
                .reject((e) => !s && (e.action === M.hCu.SOUNDBOARD || e.action === M.hCu.SOUNDBOARD_HOLD))
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
                    { id: "unassigned", value: M.hCu.UNASSIGNED, label: j.intl.string(j.t["0Uh579"]) },
                    { id: "push-to-talk", value: M.hCu.PUSH_TO_TALK, label: j.intl.string(j.t.Y5lgTP) },
                    {
                        id: "push-to-talk-priority",
                        value: M.hCu.PUSH_TO_TALK_PRIORITY,
                        label: j.intl.string(j.t.DkSwJ2),
                    },
                    { id: "push-to-mute", value: M.hCu.PUSH_TO_MUTE, label: j.intl.string(j.t.hSCRqd) },
                    { id: "vad-priority", value: M.hCu.VAD_PRIORITY, label: j.intl.string(j.t["49d6Nd"]) },
                    { id: "toggle-mute", value: M.hCu.TOGGLE_MUTE, label: j.intl.string(j.t.PlkYKD) },
                    { id: "toggle-deafen", value: M.hCu.TOGGLE_DEAFEN, label: j.intl.string(j.t.NvGq1K) },
                    { id: "toggle-voice-mode", value: M.hCu.TOGGLE_VOICE_MODE, label: j.intl.string(j.t.Wa5H9S) },
                    { id: "toggle-streamer-mode", value: M.hCu.TOGGLE_STREAMER_MODE, label: j.intl.string(j.t.BK0Ncc) },
                    { id: "toggle-camera", value: M.hCu.TOGGLE_CAMERA, label: j.intl.string(j.t.hf8JVT) },
                    {
                        id: "toggle-voice-channel-chat",
                        value: M.hCu.TOGGLE_VOICE_CHANNEL_CHAT,
                        label: j.intl.string(j.t.YeqEjm),
                    },
                ];
            return (
                t &&
                    (r.push({
                        id: "toggle-overlay-input-lock",
                        value: M.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
                        label: j.intl.string(j.t.VsAZcC),
                    }),
                    r.push({
                        id: "activate-overlay-region-text-widget",
                        value: M.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                        label: j.intl.string(j.t.hurHWo),
                    })),
                i &&
                    ((0, eY.isWindows)() || l3.Ay.getUseSystemScreensharePicker()) &&
                    r.push({
                        id: "toggle-go-live-streaming",
                        value: M.hCu.TOGGLE_GO_LIVE_STREAMING,
                        label: j.intl.string(j.t.ybdjJD),
                    }),
                (0, eY.isDesktop)() &&
                    (r.push(
                        { id: "navigate-back", value: M.hCu.NAVIGATE_BACK, label: j.intl.string(j.t.gRSaOa) },
                        { id: "navigate-forward", value: M.hCu.NAVIGATE_FORWARD, label: j.intl.string(j.t.zOXpjU) },
                        {
                            id: "switch-to-voice-channel",
                            value: M.hCu.SWITCH_TO_VOICE_CHANNEL,
                            label: j.intl.string(j.t.ty7Lxy),
                        },
                        {
                            id: "disconnect-from-voice-channel",
                            value: M.hCu.DISCONNECT_FROM_VOICE_CHANNEL,
                            label: j.intl.string(j.t.CV7mT7),
                        },
                    ),
                    n &&
                        r.push(
                            { id: "soundboard", value: M.hCu.SOUNDBOARD, label: j.intl.string(j.t.yPH4xm) },
                            {
                                id: "soundboard-hold",
                                value: M.hCu.SOUNDBOARD_HOLD,
                                label: j.intl.string(j.t["1xFbP/"]),
                            },
                        ),
                    s &&
                        (r.push({ id: "save-clip", value: M.hCu.SAVE_CLIP, label: j.intl.string(j.t.U4URzP) }),
                        l &&
                            r.push({
                                id: "save-screenshot",
                                value: M.hCu.SAVE_SCREENSHOT,
                                label: j.intl.string(j.t["+WloFH"]),
                            }))),
                r
            );
        })({ overlaySupported: i, canGoLive: t, allowSoundboard: l, enableClips: n, enableScreenshotKeybind: s }),
        keybindDescriptions: (function (e) {
            let { overlaySupported: t, canGoLive: i, enableClips: n, enableScreenshotKeybind: s } = e,
                l = {
                    [M.hCu.UNASSIGNED]: j.intl.string(j.t.rvlNLv),
                    [M.hCu.PUSH_TO_MUTE]: j.intl.string(j.t.xtESim),
                    [M.hCu.PUSH_TO_TALK]: j.intl.string(j.t.wTcBSy),
                    [M.hCu.PUSH_TO_TALK_PRIORITY]: j.intl.string(j.t.FhHvWH),
                    [M.hCu.TOGGLE_MUTE]: j.intl.string(j.t.X2fbUm),
                    [M.hCu.TOGGLE_DEAFEN]: j.intl.string(j.t.MjREZV),
                    [M.hCu.TOGGLE_VOICE_MODE]: j.intl.string(j.t.snm5YW),
                    [M.hCu.TOGGLE_STREAMER_MODE]: j.intl.string(j.t.YszLLx),
                    [M.hCu.VAD_PRIORITY]: j.intl.string(j.t.rSe8IZ),
                    [M.hCu.TOGGLE_CAMERA]: j.intl.string(j.t.v1JBtL),
                    [M.hCu.TOGGLE_VOICE_CHANNEL_CHAT]: j.intl.string(j.t.desfB4),
                };
            return (
                t && (l[M.hCu.TOGGLE_OVERLAY_INPUT_LOCK] = j.intl.string(j.t.IoP5vc)),
                i && (0, eY.isWindows)() && (l[M.hCu.TOGGLE_GO_LIVE_STREAMING] = j.intl.string(j.t.s4C238)),
                (0, eY.isDesktop)() &&
                    ((l[M.hCu.NAVIGATE_BACK] = j.intl.string(j.t.nKDlEt)),
                    (l[M.hCu.NAVIGATE_FORWARD] = j.intl.string(j.t.DK0FFk)),
                    (l[M.hCu.SOUNDBOARD] = (0, eY.isWindows)()
                        ? j.intl.string(j.t["5wJefL"])
                        : j.intl.string(j.t.gzjsSP)),
                    (l[M.hCu.SOUNDBOARD_HOLD] = (0, eY.isWindows)()
                        ? j.intl.string(j.t.RRkZc9)
                        : j.intl.string(j.t.laNlTl)),
                    n &&
                        ((l[M.hCu.SAVE_CLIP] = j.intl.string(j.t.z3Wbam)),
                        s && (l[M.hCu.SAVE_SCREENSHOT] = j.intl.string(j.t.m0zd57)))),
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
            t = eq.dI(e.shortcut);
        return se.A.hasBind(t)
            ? (0, E.jsx)(tf.p, { messageType: tf.Y.ERROR, children: j.intl.string(j.t["7lQlw3"]) })
            : iL.Yy.has(t)
              ? (0, E.jsx)(tf.p, {
                    messageType: tf.Y.ERROR,
                    children: j.intl.format(j.t.MOIaNd, {
                        keyboardNavArticle: tN.A.getArticleURL(M.MVz.KEYBOARD_NAVIGATION),
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
                                children: (0, E.jsx)(lq.K, {
                                    variant: "icon-only",
                                    onClick: this.handleDeleteKeybind,
                                    icon: lQ.u,
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
        return e === M.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, E.jsx)(rA, { keybind: this.props.keybind }) : void 0;
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
                        s !== e.length - 1 ? (0, E.jsx)(eU.c, {}) : null,
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
                    className: iM.IE,
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
                                          children: [(0, E.jsx)(eU.c, {}), this.renderKeybinds(e, i, t)],
                                      }),
                                  (0, E.jsx)(eU.c, {}),
                              ],
                          })
                        : (0, E.jsx)(tf.p, {
                              messageType: tf.Y.INFO,
                              className: rN.Ly,
                              children: j.intl.format(j.t.mPi3F3, { downloadLink: M.X7G.DOWNLOAD }),
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
    return (0, E.jsxs)(Q.B, {
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
                                                        0 !== t && (0, E.jsx)(eU.c, {}),
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
    rL = i(434404);
let rD = (0, a.t_)(u.X.LANGUAGE_AND_TIME_PANEL, {
        useTitle: () => j.intl.string(j.t.KyFVyi),
        buildLayout: () => [rL.F],
    }),
    rP = (0, a.i4)(u.X.LANGUAGE_AND_TIME_SIDEBAR_ITEM, {
        icon: rR.U,
        useTitle: () => j.intl.string(j.t.KyFVyi),
        buildLayout: () => [rD],
    }),
    rG = (0, nP.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 }));
async function rU() {
    let e = await sm.Ay.getOpenOnStart(),
        t = await sm.Ay.getSetting("START_MINIMIZED", !1),
        i = await sm.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
    rG.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: i });
}
let rM = (0, a.zD)(u.X.OS_OPEN_ON_STARTUP, {
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
let rF = new Set(["failure", "unknown"]),
    rB = (0, a.E2)(u.X.OS_SYSTEM_SERVICE, {
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
                            (0, E.jsxs)(Q.B, {
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
                                                            : rF.has(l.state)
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
                                    helpCenterLink: tN.A.getArticleURL(M.MVz.SYSTEM_SERVICE),
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
        buildLayout: () => [rM, rV, rB],
        initialize: () => {
            rU();
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
    rq = i(400492),
    rQ = i(669067),
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
        children: (0, E.jsxs)(Q.B, {
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
                (0, rq.Ak)("poggermode_enabled"),
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
        (0, E.jsxs)(Q.B, {
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
                    (0, rQ._)(ad[e]);
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
        i = eq.dI(t.shortcut);
    return se.A.hasBind(i)
        ? (0, E.jsx)("div", {
              className: aO.$e,
              children: (0, E.jsx)(q.w, { type: "warning", children: j.intl.string(j.t["7lQlw3"]) }),
          })
        : iL.Yy.has(i)
          ? (0, E.jsx)("div", {
                className: aO.$e,
                children: (0, E.jsx)(q.w, {
                    type: "warning",
                    children: j.intl.format(j.t.MOIaNd, {
                        keyboardNavArticle: tN.A.getArticleURL(M.MVz.KEYBOARD_NAVIGATION),
                    }),
                }),
            })
          : void 0;
}
function aL(e) {
    let { keybind: t } = e;
    return t.action === M.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, E.jsx)(rA, { keybind: t, className: aO._M }) : null;
}
let aD = S.memo(function (e) {
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
                        (0, E.jsx)(lq.K, {
                            variant: "icon-only",
                            onClick: a,
                            icon: lQ.u,
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
            (0, E.jsx)(aL, { keybind: t }),
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
                                  (0, E.jsx)(aD, { keybind: n, keybindDescriptions: t, keybindActionTypes: i }),
                                  s < e.length - 1 ? (0, E.jsx)(eU.c, { className: aP.y, gap: 24 }) : null,
                              ],
                          },
                          n.id,
                      ),
                  ),
              });
    },
    aU = (0, a.E2)(u.X.CUSTOM_KEYBINDS_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["069nVT"])],
        Component: function () {
            return c.Av
                ? (0, E.jsx)(aG, {})
                : (0, E.jsx)(q.w, {
                      type: "info",
                      children: j.intl.format(j.t.mPi3F3, { downloadLink: M.X7G.DOWNLOAD }),
                  });
        },
    }),
    aM = (0, a.E2)(u.X.DEFAULT_KEYBINDS_SETTING, {
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
    aF = (0, a.zZ)(u.X.SYSTEM_GENERAL_CATEGORY, {
        useTitle: () => j.intl.string(j.t.cg6ltt),
        buildLayout: () => [rM, av, rV, sh],
        usePredicate: () => c.Av && ((0, c.uF)() || (0, c.j9)()),
        initialize: () => {
            rU();
        },
    }),
    aB = (0, a.zZ)(u.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["069nVT"]),
        useSubtitle: () => j.intl.string(j.t.T4LZVL),
        buildLayout: () => [aU],
        initialize: () => (tX.A.enableAll(!1), () => tX.A.enableAll(!0)),
        useInlineNotice: function () {
            return c.Av
                ? {
                      type: h.lT.STRONGLY_DISCOURAGED_CUSTOM,
                      notice: () =>
                          (0, E.jsxs)(Q.B, {
                              direction: "vertical",
                              gap: "md",
                              children: [
                                  (0, E.jsx)(q.w, { type: "info", children: j.intl.string(j.t["5pkmHa"]) }),
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
        buildLayout: () => [aM],
    }),
    aX = (0, a.zZ)(u.X.SYSTEM_HELPER_CATEGORY, {
        useTitle: () => j.intl.string(j.t["+XZgmA"]),
        usePredicate: () => c.Av && ((0, c.uF)() || (0, c.j9)()),
        buildLayout: () => [rB],
    }),
    aY = (0, a.t_)(u.X.SYSTEM_PANEL, {
        useTitle: () => j.intl.string(j.t["VJ/qKo"]),
        buildLayout: () => [aF, aB, az, aX, aw],
    }),
    aH = (0, a.i4)(u.X.SYSTEM_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["VJ/qKo"]),
        icon: lW.F,
        buildLayout: () => [aY],
    });
var aK = i(831544),
    aW = i(922795),
    aZ = i(212245),
    aq = i(329551),
    aQ = i(285918),
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
                [n, s] = S.useState((0, aq.i)(io.default.getCurrentUser())),
                l = S.useRef(n);
            return (
                S.useEffect(
                    () => () => {
                        t.current && (0, aQ._C)(l.current);
                    },
                    [],
                ),
                (0, E.jsx)(a0.A, {
                    selectedBackgroundOption: n,
                    onSelectBackgroundOption: function (i) {
                        (t.current = !0), (l.current = i), s(i), (0, aJ.gB)(i, { location: e.location }).catch(M.tEg);
                    },
                    currentDeviceId: i,
                })
            );
        },
    }),
    a2 = (0, a.zD)(u.X.CAMERA_PREVIEW_PREFERENCE, {
        useTitle: () => j.intl.string(j.t["3Ppr1h"]),
        useSubtitle: () => j.intl.string(j.t.WNbX4O),
        useValue: L.bm.useSetting,
        setValue: (e) => {
            L.bm.updateSetting(e), G.default.track(M.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
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
                              G.default.track(M.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: i });
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
            await (0, od.a)(M.Umv.RTC),
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
                (0, E.jsxs)(Q.B, {
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
            return L.Q_.useSetting();
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
var oL = i(347481),
    oD = i(852712);
let oP = (0, a.zD)(u.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => j.intl.string(j.t.cUMdH0),
        useSubtitle: () => j.intl.string(j.t["6EjbvA"]),
        useValue: function () {
            return (0, g.bG)([l3.Ay], () => l3.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            on.A.setAutomaticGainControl(e, { page: M.liQ.USER_SETTINGS, section: M.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, g.bG)([l3.Ay, oL.A], () => {
                let e = l3.Ay.getInputDeviceId();
                return oL.A.hasAutomaticGainControl(e);
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
    oU = (0, a.zD)(u.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => j.intl.string(j.t["9dHxRY"]),
        useValue: () => (0, g.bG)([l3.Ay], () => l3.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => on.A.setAttenuation(l3.Ay.getAttenuation(), e, l3.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    oM = (0, a.zD)(u.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => j.intl.string(j.t.SMt0Gr),
        useValue: () => (0, g.bG)([l3.Ay], () => l3.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => on.A.setAttenuation(l3.Ay.getAttenuation(), l3.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    oV = (0, a.FW)(u.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.oSdBvW),
        useSubtitle: () => j.intl.string(j.t["0A/8Rt"]),
        usePredicate: () => (0, g.bG)([l3.Ay], () => l3.Ay.supports(a5.O5.ATTENUATION)),
        buildLayout: () => [oG, oU, oM],
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
    oF = (0, a.zD)(u.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
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
    oB = (0, a.zD)(u.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
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
                () => l3.Ay.getMode() !== M.TBI.VOICE_ACTIVITY || !l3.Ay.getModeOptions().autoThreshold,
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
        buildLayout: () => [oP, oz, oF, oH, ow, oB, oV, oX, oY],
    }),
    oW = (0, a.zD)(u.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => j.intl.string(j.t.iWTwu6),
        useValue: function () {
            return (0, g.bG)([l3.Ay], () => l3.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            on.A.setEchoCancellation(e, { page: M.liQ.USER_SETTINGS, section: M.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, g.bG)([l3.Ay, oL.A], () => {
                let e = l3.Ay.getInputDeviceId();
                return oL.A.hasEchoCancellation(e);
            });
        },
        usePredicate: function () {
            return (0, g.bG)([l3.Ay], () => l3.Ay.isInputProfileCustom());
        },
    });
var oZ = i(459838),
    oq = i(451988),
    oQ = i(801102),
    oJ = i(160671);
let o$ = (0, sZ.Ld)();
function o0(e) {
    let { isSpeaking: t, className: i, id: n, ariaDescribedBy: s, ariaLabelledBy: l, disabled: r } = e;
    return (0, E.jsx)("div", {
        role: "meter",
        className: e6()(oQ.$I, i),
        id: n,
        "aria-describedby": s,
        "aria-labelledby": l,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? j.intl.string(j.t.haLKZ0) : j.intl.string(j.t.X2hJL7),
        children: (0, E.jsx)("div", { className: e6()(oQ.Jx, oQ.NU, { [oQ.zY]: t && !r, [oQ.r9]: r }) }),
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
        className: e6()(oQ.Mo, oQ.jW),
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
                className: e6()(oQ.NU, oQ.TL, oQ.Jx, oJ.bar),
                children: [
                    (0, E.jsx)("div", { className: e6()(oQ.GS, oQ.SH), style: { width: l ? 0 : t + 100 + "%" } }),
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
                        let e = new oq.Ep();
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
                        className: oQ.B4,
                        children: (0, E.jsx)(q.w, {
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
                      (0, E.jsxs)(Q.B, {
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
                                        className: oQ.UJ,
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
            : (0, E.jsxs)(Q.B, {
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
                                        className: oQ.UJ,
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
    o7 = { page: M.liQ.USER_SETTINGS, section: M.JJy.SETTINGS_VOICE_AND_VIDEO };
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
                ? j.intl.format(j.t["1q5aTp"], { helpArticle: tN.A.getArticleURL(M.MVz.NOISE_SUPPRESSION) })
                : j.intl.string(j.t.OWKjw5);
        return (0, E.jsxs)(Q.B, {
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
                        onChange: (e) => on.A.setMode(M.TBI.PUSH_TO_TALK, { shortcut: e }),
                    }),
                }),
            });
        },
    }),
    ur = (0, a.sN)(u.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => j.intl.string(j.t.GCNMM8),
        useSearchTerms: () => [j.intl.string(j.t["pS+K2L"]), j.intl.string(j.t.nuFtHH)],
        setValue: function (e) {
            on.A.setMode(M.TBI.PUSH_TO_TALK, { delay: e });
        },
        minValue: 0,
        maxValue: M.IjB,
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
            let { enabledInputProfiles: e } = (0, oD._)({ location: "SettingsRendererConfig" });
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
            let { enabledInputProfiles: e } = (0, oD.d)({ location: "InputProfileCategory" });
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
            let e = (0, g.bG)([oL.A, l3.Ay], () => {
                let e = l3.Ay.getInputDeviceId();
                return (
                    (oL.A.hasEchoCancellation(e) || oL.A.hasNoiseSuppression(e) || oL.A.hasAutomaticGainControl(e)) &&
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
    uf = i(690661),
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
                            children: (0, E.jsx)(lQ.u, {
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
            description: j.intl.format(j.t.u9RWmv, { helpdeskArticle: tN.A.getArticleURL(M.MVz.SOUNDBOARD) }),
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
var uL = i(824744);
let uD = (0, a.sN)(u.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => j.intl.string(j.t.kbFsAD),
    useSubtitle: () => j.intl.format(j.t.BPbGq7, { helpCenterArticle: tN.A.getArticleURL(M.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [e1.A.USER_SETTINGS_VOICE_AND_VIDEO],
            i = (0, uL.w)(e);
        (0, um.iy)(i, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, uh.wH)();
        return (0, uL.M)(e);
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
            let t = (0, uL.w)(e);
            L.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = L.HO.getSetting();
            return (0, uL.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, uP.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    uU = (0, a.zZ)(u.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => j.intl.string(j.t.ABjMWI),
        buildLayout: () => [uD, uG, uR],
    });
var uM = i(803224),
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
    uF = (0, a.gN)(u.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [uw] });
var uB = i(264686);
let uz = (0, nP.D)(() => ({ currentPlayingSound: null }));
function uX() {
    let e = uz.getField("currentPlayingSound");
    e?.stop(), uz.setState({ currentPlayingSound: null });
}
function uY(e) {
    let t = uz.getField("currentPlayingSound");
    t?.stop();
    let i = (0, rq.Ak)(e);
    uz.setState({ currentPlayingSound: i });
}
function uH(e) {
    return (0, a.zD)(`${u.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => j.intl.format(j.t.OOiGCM, { onClick: () => uY(e.sound) }),
        useSearchTerms: e.useSearchTerms,
        useValue: () => {
            let t = (0, g.bG)([uM.A], () => uM.A.isSoundDisabled(e.sound)),
                i = e.useDisabled?.();
            return !t && !i;
        },
        setValue: (t) => {
            let i = uM.A.getDisabledSounds().filter((t) => t !== e.sound);
            t || i.push(e.sound), uB.default.setDisabledSounds(i);
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                i = (0, g.bG)([uM.A], () => uM.A.getDisableAllSounds());
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
            let e = (0, g.bG)([uM.A], () => uM.A.getDisableAllSounds());
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
        buildLayout: () => [uW, uk, uF],
    }),
    uq = (0, a.zD)(u.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => j.intl.string(j.t.e3Zz3F),
        useSubtitle: () => j.intl.string(j.t.RztTjP),
        useValue: function () {
            return !L.uh.useSetting();
        },
        setValue: function (e) {
            (0, ob.A)("stream_previews_disabled", !e, L.uh.getSetting(), [e1.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                L.uh.updateSetting(!e);
        },
    }),
    uQ = (0, a.zD)(u.X.STREAMING_ADVANCED_SCREENSHARE, {
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
        buildLayout: () => [u$, u0, u1, uJ, uQ],
    }),
    u3 = (0, a.zZ)(u.X.STREAMING_CATEGORY, { useTitle: () => j.intl.string(j.t.KDdjou), buildLayout: () => [uq, u2] });
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
            return (0, uL.M)(e);
        },
        asValueChanges: function (e) {
            let t = [e1.A.USER_SETTINGS_VOICE_AND_VIDEO],
                i = (0, uL.w)(e);
            on.A.setInputVolume(i, { analyticsLocations: t });
        },
    }),
    u9 = (0, a.sN)(u.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => j.intl.string(j.t.aUJ062),
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = l3.Ay.getOutputVolume();
            return (0, uL.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [e1.A.USER_SETTINGS_VOICE_AND_VIDEO],
                i = (0, uL.w)(e);
            on.A.setOutputVolume(i, { analyticsLocations: t });
        },
    }),
    de = (0, a.zC)(u.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [u8, u9] });
var dt = i(702841),
    di = i(349288),
    dn = i(152567),
    ds = i(593290);
let dl = `${tN.A.getArticleURL(M.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
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
                                  href: tN.A.getArticleURL(M.MVz.NO_INPUT_DETECTED),
                                  children: j.intl.string(j.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: j.intl.format(j.t["V+B3FH"], { guideURL: dl }),
                      buttonTest: j.intl.string(j.t.gyljWE),
                      buttonStop: j.intl.string(j.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: M.liQ.USER_SETTINGS, section: M.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    da = eY.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function du(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: i } = e;
    return (0, E.jsxs)(Q.B, {
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
        buildLayout: () => [dd, uo, oi, u3, uZ, uU, oR],
    }),
    dg = (0, a.i4)(u.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.B1fFpf),
        usePredicate: () => l3.Ay.isSupported(),
        icon: aK.c,
        useMenu: aW.A,
        buildLayout: () => [dc],
    }),
    dm = (0, a.zZ)(u.X.WINDOWS_CATEGORY, {
        buildLayout: () => [rM, av, rV, rB],
        initialize: () => {
            rU();
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
    dL = i(935208),
    dD = i(607399),
    dP = i(150934),
    dG = i(256006),
    dU = i(198970),
    dM = i(71532);
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
var dF = i(832208),
    dB = i(536439);
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
                        getClassNameForLayout: () => dB.ep,
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
            (0, E.jsx)(dF.A, {
                className: i,
                form: dz,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: s,
                onFieldChange: function (e) {
                    l || "" === e || r(!0),
                        (l && "" === e) || !(0, dM.So)(e) ? o(j.intl.string(j.t["9/zZdl"])) : o(null),
                        d(e);
                },
            })
        );
    };
var dY = i(219887),
    dH = i(276589);
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
                      children: (0, E.jsx)(q.w, { type: "critical", children: t.message }),
                  })
                : null
            : (0, E.jsx)("div", {
                  className: dH.zc,
                  children: (0, E.jsx)(q.w, { type: "critical", children: e.message }),
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
            children: (0, E.jsxs)(Q.B, {
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
                                    size: dD.Fr ? "sm" : "md",
                                    text: dD.Fr ? j.intl.string(j.t.oyYWHE) : j.intl.string(j.t.yk5qfb),
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
                                size: dD.Fr ? "sm" : "md",
                                text: j.intl.string(j.t["ETE/oC"]),
                            }),
                            (0, E.jsx)(eG.$, {
                                loading: e,
                                disabled: !n || t || !s,
                                type: "submit",
                                variant: "active",
                                size: dD.Fr ? "sm" : "md",
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
                    (0, E.jsx)(eU.c, {}),
                    this.renderActions(),
                ],
            }),
        });
    }
}
let dZ = g.Ay.connectStores([dj.A], () => ({ updateError: dj.A.editSourceError, removeError: dj.A.removeSourceError }))(
    dW,
);
var dq = i(776409),
    dQ = i(447774),
    dJ = i(95322);
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
                      n ? null : (0, E.jsx)(eU.c, { className: dJ.__invalid_sourceDivider }),
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
                i ? null : (0, E.jsx)(eU.c, { className: dJ.__invalid_sourceDivider }),
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
                                          className: dQ.Wi,
                                          children: j.intl.string(dq.default["/FQWfA"]),
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
                                    text: j.intl.string(dq.default.hnRau6),
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
                .sort((e, t) => (e.id === i ? -1 : t.id === i ? 1 : dL.default.compare(e.id, t.id))),
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
                    m !== d.length - 1 || (o && c.length > 0) ? (0, E.jsx)(eU.c, {}) : null,
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
    d5 = i(589764);
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
                          null != r && r.status !== M.Dmq.CANCELED ? r.paymentSourceId : null,
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
var ct = i(549363),
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
var ca = i(70283),
    co = i(597770),
    cu = i(682618),
    cd = i(928898),
    cc = i(962644),
    cg = i(35587),
    cm = i(86379);
let cA = (0, a.E2)(u.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: ci.uK,
        usePredicate: () => (0, cm.Hp)(),
        useSearchTerms: () => [j.intl.string(j.t.vwMEHS)],
    }),
    ch = (0, a.zZ)(u.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [cA] });
var cE = i(532446),
    cS = i(869038),
    cT = i(499454),
    cx = i(45938);
class cp extends S.Component {
    state = { codeInput: "", submitting: !1, hasError: !1, isPromoCode: !1 };
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return { ...e, object: M.ZSU.BUTTON_CTA };
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
            let e = (0, cx.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let n = await cS.A.resolveGiftCode(e);
            if (null != n && null != n.giftCode.promotion)
                throw (this.setState({ isPromoCode: !0 }), Error("Cannnot redeem promotion code as gift"));
            G.default.track(M.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: {
                    ...this.analyticsLocation,
                    section: M.JJy.LIBRARY_INVENTORY_CODE_REDEMPTION,
                    object: M.ZSU.BUTTON_CTA,
                },
            }),
                (0, cT.h)({ processedCode: e }),
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
                children: (0, E.jsxs)(cE.M, {
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
function cf(e) {
    let { redesign: t = !1 } = e,
        { enabled: i } = (0, d3.c)({ location: "UserSettingsBilling" }),
        n = S.useContext(G.AnalyticsContext),
        s = (0, g.bG)([eF.A], () => eF.A.enabled);
    return (0, E.jsx)(cp, { analyticsContext: n, obscureInput: s, acceptGiftCardRedemption: i, redesign: t });
}
let cN = (0, a.E2)(u.X.GIFT_CODE_REDEMPTION_SETTING, {
    Component: cf,
    usePredicate: () => !(0, cm.Hp)(),
    useSearchTerms: () => [j.intl.string(j.t["jcSP+g"]), j.intl.string(j.t["il+VCo"])],
});
var c_ = i(725570),
    cI = i(707554),
    cC = i(736653),
    cb = i(982240),
    cy = i(46054);
let cv = r4().duration(30, "days");
var cj = i(3074),
    cO = i(264779),
    cR = i(416052),
    cL = i(961302);
function cD(e) {
    let { onClose: t, transitionState: i } = e;
    return (0, E.jsx)(l8.Modal, {
        title: "",
        size: "md",
        input: (0, E.jsx)("div", { className: cL.aR }),
        onClose: async () => await t(),
        actions: [{ text: j.intl.string(j.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: i,
        children: (0, E.jsxs)("div", {
            className: cL.t4,
            children: [
                (0, E.jsx)(eP.D, { variant: "heading-xl/semibold", children: j.intl.string(j.t.iufib1) }),
                (0, E.jsx)(es.E, { variant: "text-md/normal", className: cL.G3, children: j.intl.string(j.t.eAn6z2) }),
            ],
        }),
    });
}
let cP = function (e) {
    let { onClose: t, onClaim: i, code: n, outboundPromotion: s, transitionState: l } = e,
        [r, a] = S.useState(null),
        o = (0, sZ.GV)(),
        { analyticsLocations: u } = (0, nZ.Ay)(e1.A.USER_SETTINGS_GIFT_INVENTORY);
    return (S.useEffect(() => {
        null == n &&
            (0, cO.kd)({
                promotionId: s.id,
                promotionTitle: s.outboundTitle,
                partnerId: s.partnerId,
                analyticsLocations: u,
            })
                .then((e) => i(e))
                .catch((e) => a(e?.body?.code));
    }, [n, s.id, s.outboundTitle, s.partnerId, i, u]),
    null != r)
        ? (0, E.jsx)(cD, { onClose: t, transitionState: l })
        : null == n
          ? (0, E.jsx)(dp.y, { className: cL.Lq })
          : (0, E.jsx)(l8.Modal, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, E.jsxs)("div", {
                    className: cL.N1,
                    children: [
                        (0, E.jsx)("div", { className: cL.Qw }),
                        (0, E.jsx)(eP.D, { variant: "heading-xl/semibold", children: j.intl.string(j.t["23BfZh"]) }),
                        (0, E.jsx)(es.E, {
                            variant: "text-md/normal",
                            className: cL.G3,
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
                            let e = (0, cO.kc)(n, s);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: l,
                "aria-label": o,
                children: (0, E.jsxs)("div", {
                    children: [
                        (0, E.jsx)(eU.c, { className: cL.M5 }),
                        (0, E.jsx)(s4.D, {
                            label: j.intl.string(j.t.s9LFQh),
                            helperText: j.intl.string(j.t["F+nFTZ"]),
                            children: (0, E.jsx)(cR.A, {
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
var cG = i(900797),
    cU = i(284518),
    cM = i(751188),
    cV = i(914410),
    ck = i(360615),
    cw = i(678226);
function cF(e) {
    let { analyticsLocation: t, location: i } = e,
        { analyticsLocations: n } = (0, nZ.Ay)(e1.A.USER_SETTINGS_GIFT_INVENTORY),
        { openGiftModal: s } = (0, cM.$)({
            giftRecipient: void 0,
            analyticsLocations: n,
            analyticsObject: { object: M.ZSU.BUTTON_CTA, objectType: M.AnalyticsObjectTypes.GIFT },
            analyticsLocation: t,
            location: i,
        });
    return (0, E.jsx)(eG.$, {
        variant: "primary",
        icon: co.o,
        text: j.intl.string(ck.default.DZnomS),
        onClick: s,
        fullWidth: !0,
    });
}
function cB(e) {
    let { tier: t, nameColor: i, countColor: n, active: s = !1 } = e;
    return (0, E.jsxs)("div", {
        className: e6()(cw.fO, { [cw.bF]: s }),
        children: [
            null != t.simple_icon_url && (0, E.jsx)("img", { src: t.simple_icon_url, alt: "", className: cw.si }),
            (0, E.jsxs)("div", {
                className: cw.tc,
                children: [
                    (0, E.jsx)(es.E, { variant: "text-sm/semibold", color: i, children: t.name ?? "" }),
                    (0, E.jsx)(es.E, {
                        variant: "text-xs/normal",
                        color: n,
                        children: j.intl.format(ck.default.qvx9E4, { count: (0, cb.rL)(t) }),
                    }),
                ],
            }),
        ],
    });
}
function cz(e) {
    let { analyticsLocation: t, tiers: i } = e;
    return 0 === i.length
        ? null
        : (0, E.jsxs)("div", {
              className: cw.iE,
              children: [
                  (0, E.jsx)(es.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: cw.PJ,
                      children: j.intl.string(ck.default["4Yp0mI"]),
                  }),
                  (0, E.jsx)("div", {
                      className: cw.xi,
                      children: i.map((e) =>
                          (0, E.jsx)(cB, { tier: e, nameColor: "text-subtle", countColor: "text-muted" }, e.key),
                      ),
                  }),
                  (0, E.jsx)(cF, { analyticsLocation: t, location: "user-settings-gifting-badge-intro" }),
              ],
          });
}
function cX(e) {
    let t,
        { analyticsLocation: i } = e,
        [n, s] = S.useState(!1),
        {
            badgeProgress: l,
            currentTier: r,
            nextTier: a,
            giftsRemaining: o,
            tiers: u,
        } = (0, g.cf)([cb.Ay], () => ({
            badgeProgress: cb.Ay.getSingleRequirementProgress(ca.$.GIFTING)?.current ?? 0,
            currentTier: cb.Ay.getCurrentTier(ca.$.GIFTING),
            nextTier: cb.Ay.getNextTier(ca.$.GIFTING),
            giftsRemaining: cb.Ay.getRemainingToNextTier(ca.$.GIFTING),
            tiers: cb.Ay.getBadgeById(ca.$.GIFTING)?.tiers ?? [],
        }));
    if (0 === l) return (0, E.jsx)(cz, { analyticsLocation: i, tiers: u });
    let d = (0, cb.rL)(r),
        c = (0, cb.rL)(a),
        m = (0, cU.G)(l, r, a);
    return (
        (t =
            null != a
                ? j.intl.formatToPlainString(ck.default.XTX3OO, { count: o, nextTier: a?.name ?? "" })
                : j.intl.formatToPlainString(ck.default.LnsdbK, { currentTier: r?.name ?? "" })),
        (0, E.jsxs)("div", {
            className: cw.iE,
            children: [
                (0, E.jsxs)("div", {
                    className: cw.mY,
                    children: [
                        r?.simple_icon_url != null &&
                            (0, E.jsx)("div", {
                                className: cw.fC,
                                children: (0, E.jsx)("img", { src: r.simple_icon_url, alt: "", className: cw.qS }),
                            }),
                        (0, E.jsxs)("div", {
                            className: cw.Qs,
                            children: [
                                (0, E.jsx)(es.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                                (0, E.jsx)(cV.Ay, { variant: cV.qP.BLUE, weight: cV.fh.MEDIUM, progress: m }),
                                (0, E.jsx)(es.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: cw.qg,
                                    children: j.intl.format(ck.default.iIpfQe, {
                                        threshold: null != a ? c : d,
                                        count: null != a ? l : d,
                                    }),
                                }),
                            ],
                        }),
                        a?.simple_icon_url != null &&
                            (0, E.jsx)("div", {
                                className: cw.fC,
                                children: (0, E.jsx)("img", { src: a.simple_icon_url, alt: "", className: cw.qS }),
                            }),
                    ],
                }),
                (0, E.jsx)(cF, { analyticsLocation: i, location: "UserSettingsGiftingBadgeProgress" }),
                (0, E.jsx)("div", { className: cw.yF }),
                (0, E.jsxs)("button", {
                    type: "button",
                    className: cw.u4,
                    "aria-expanded": n,
                    onClick: () => s((e) => !e),
                    children: [
                        (0, E.jsx)(es.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: j.intl.string(ck.default.WZ4cXA),
                        }),
                        n
                            ? (0, E.jsx)(cG.t, { color: er.A.colors.INTERACTIVE_ICON_DEFAULT, "aria-hidden": !0 })
                            : (0, E.jsx)(el.a, { color: er.A.colors.INTERACTIVE_ICON_DEFAULT, "aria-hidden": !0 }),
                    ],
                }),
                n &&
                    (0, E.jsxs)(E.Fragment, {
                        children: [
                            (0, E.jsx)("div", {
                                className: cw.dw,
                                children: u.map((e) =>
                                    (0, E.jsx)(
                                        cB,
                                        {
                                            tier: e,
                                            nameColor: "text-strong",
                                            countColor: "text-subtle",
                                            active: e.key === r?.key,
                                        },
                                        e.key,
                                    ),
                                ),
                            }),
                            (0, E.jsx)(es.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                className: cw.PJ,
                                children: j.intl.string(ck.default["4Yp0mI"]),
                            }),
                        ],
                    }),
            ],
        })
    );
}
var cY = i(725807),
    cH = i(212168),
    cK = i(469778),
    cW = i(109802),
    cZ = i(503787);
function cq(e) {
    let { children: t, className: i, splashArtURL: n } = e;
    return (0, E.jsxs)(rn.A, {
        className: e6()(cZ.wx, i),
        align: rn.A.Align.CENTER,
        children: [
            (0, E.jsx)("div", { className: cZ.Bn, style: null != n ? { backgroundImage: `url(${n})` } : void 0 }),
            t,
        ],
    });
}
function cQ(e) {
    let { children: t, className: i } = e;
    return (0, E.jsx)("div", { className: e6()(cZ.rf, i), children: t });
}
class cJ extends S.PureComponent {
    static Header = cq;
    static Body = cQ;
    render() {
        let { children: e, className: t, onMouseEnter: i, onMouseLeave: n } = this.props;
        return (0, E.jsx)("div", { className: e6()(cZ.Nr, t), onMouseEnter: i, onMouseLeave: n, children: e });
    }
}
var c$ = i(165191),
    c0 = i(871123),
    c1 = i(366523),
    c2 = i(495544),
    c3 = i(30793),
    c6 = i(97352),
    c4 = i(67480),
    c7 = i(147925),
    c5 = i(957565),
    c8 = i(615396),
    c9 = i(86629);
class ge extends S.PureComponent {
    _copyModeTimeout = new oq.Ep();
    state = { copyMode: cW.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case cW.q.SUCCESS:
                return j.intl.string(j.t.XVvPjU);
            case cW.q.ERROR:
                return j.intl.string(j.t.i4GM3L);
            default:
                return j.intl.string(j.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        cS.A.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: i } = this.props;
        (0, cx.AK)(t, i),
            (0, c5.C)(
                e,
                () => this.setState({ copyMode: cW.q.SUCCESS }),
                () => this.setState({ copyMode: cW.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: cW.q.DEFAULT });
            });
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: i } = this.state;
        return (0, E.jsxs)(rn.A, {
            direction: rn.A.Direction.VERTICAL,
            className: c9.Gj,
            children: [
                (0, E.jsx)(cW.e, {
                    className: c9.ph,
                    value: (0, cx.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: i,
                    supportsCopy: c5.p5,
                    hideMessage: e ? j.intl.string(j.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: oa.XD.BRAND,
                    buttonLook: oa.pR.FILLED,
                }),
                (0, E.jsxs)("div", {
                    className: c9.KB,
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
class gt extends S.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: i, giftStyle: n } = this.props;
        this.setState({ isCreating: !0 }),
            await cS.A.createGiftCode(t, i, n),
            this.setState({ isCreating: !1, isOpen: !0 });
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: i } = this.props,
            n = !this.state.isOpen;
        (null == i || null == this._loadedAt || i < this._loadedAt) && n && cS.A.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen });
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: i } = this.props;
        return (0, c0.bF)(e)
            ? (0, E.jsx)(c1.e, { shape: "square", sku: e, containerClassName: c9.ez })
            : null != t
              ? (0, E.jsx)(c$.A, { giftStyle: t, className: c9.ez, shouldAnimate: this.state.isHovered })
              : (0, E.jsx)(p.A, { game: i, size: p.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: i } = this.props;
        return (0, c0.bF)(e)
            ? (0, E.jsxs)("div", {
                  className: e6()(c9.Oc, c9.ic),
                  children: [
                      (0, E.jsx)(p.A, { game: i, size: p.M.XSMALL, skuId: e.id, className: c9._u }),
                      j.intl.format(j.t["6plpZi"], { applicationName: i.name, copies: t.length }),
                  ],
              })
            : (0, E.jsx)("div", { className: c9.Oc, children: j.intl.format(j.t.zMcvcA, { copies: t.length }) });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: i, giftCodeBatchId: n } = this.props;
        return (
            (e =
                n === sQ.FB
                    ? j.intl.string(j.t.odsU6W)
                    : n === sQ.Bu && null != i
                      ? j.intl.formatToPlainString(i.interval === sQ.WT.MONTH ? j.t.uZjpiJ : j.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: i.intervalCount,
                        })
                      : null == i
                        ? t.name
                        : j.intl.formatToPlainString(i.interval === sQ.WT.MONTH ? j.t.rCJvqo : j.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: i.intervalCount,
                          })),
            (0, E.jsx)("div", { className: c9.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, E.jsxs)(rn.A, {
            justify: rn.A.Justify.BETWEEN,
            align: rn.A.Align.CENTER,
            className: c9.pe,
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
        return (0, E.jsxs)(cJ, {
            className: n,
            children: [
                (0, E.jsx)(en.D, {
                    onClick: this.handleToggleOpen,
                    className: c9.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, E.jsx)(cJ.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, E.jsxs)("div", {
                            className: c9.MY,
                            children: [
                                (0, E.jsxs)(rn.A, {
                                    align: rn.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, E.jsxs)("div", {
                                            className: c9.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, E.jsx)(c7.A, {
                                    direction: a ? c7.A.Directions.UP : c7.A.Directions.DOWN,
                                    className: c9.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, E.jsx)(cJ.Body, {
                          children: l
                              ? (0, E.jsx)(dp.y, { className: c9.u1 })
                              : (0, E.jsxs)(S.Fragment, {
                                    children: [
                                        i.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        i.map((e) => (0, E.jsx)(ge, { giftCode: e, sku: s, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let gi = g.Ay.connectStores([c4.A, eF.A, c3.A, x.A, c6.A, c2.default], (e) => {
    let { skuId: t, subscriptionPlanId: i, giftStyle: n } = e,
        s = c4.A.get(t);
    if (null == s) throw Error("SKU was unavailable while rendering gift.");
    let l = c3.A.getForGifterSKUAndPlan(c2.default.getId(), t, i)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === n);
    return {
        sku: s,
        hideCodes: eF.A.enabled,
        isFetching: c3.A.getUserGiftCodesFetchingForSKUAndPlan(t, i),
        loadedAt: c3.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, i),
        application: x.A.getApplication(s.applicationId),
        subscriptionPlan: null != i ? (0, c8.c9)(i) : null,
        giftCodes: l,
    };
})(gt);
var gn = i(928661);
function gs(e) {
    let { redesign: t = !1 } = e,
        i = (0, g.yK)([cK.A], () => cK.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null != t;
        }),
        n = (0, cj.N)(),
        {
            activeOutboundPromotions: s,
            claimedEndedOutboundPromotions: l,
            claimedOutboundPromotionCodeMap: r,
        } = (0, cg.y7)(),
        a = i.find((e) => e.giftCodeBatchId === sQ.FB && !e.consumed),
        o = i.filter((e) => e.giftCodeBatchId === sQ.Bu && !e.consumed) ?? [],
        [u, d] = eZ().partition(o, (e) => {
            let { subscriptionPlanId: t } = e;
            return t === sQ.gD.PREMIUM_YEAR_TIER_2;
        }),
        c = s.length + l.length > 0,
        m =
            t || !c
                ? null
                : (0, E.jsxs)("div", {
                      className: gn.N1,
                      children: [
                          (0, E.jsx)(eP.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.wFsj3B) }),
                          (0, E.jsx)(eU.c, { className: gn.yF }),
                      ],
                  }),
        A =
            !1 === n && c
                ? (0, E.jsxs)("div", {
                      className: gn.uo,
                      children: [
                          (0, E.jsx)(uu.t, {
                              size: "md",
                              color: er.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: gn.PC,
                          }),
                          (0, E.jsx)(es.E, {
                              variant: "text-md/normal",
                              className: gn.Qw,
                              children: j.intl.format(j.t.G4fwxK, {
                                  onClick: () => {
                                      (0, sH.default)(), (0, s7.pX)(M.BVt.APPLICATION_STORE);
                                  },
                              }),
                          }),
                          (0, E.jsx)(cY.A, {
                              showGradient: !0,
                              className: gn.aA,
                              subscriptionTier: sQ.pe.TIER_2,
                              textOptions: { textOverride: j.intl.string(j.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
    return (0, E.jsxs)("div", {
        children: [
            m,
            (0, E.jsx)(cH.A, {
                className: gn.Yj,
                isShown: !1 === n && c,
                type: cH.i.PREMIUM,
                hasBackground: !0,
                children: (0, E.jsxs)("div", {
                    className: gn.DE,
                    children: [
                        A,
                        l.map((e) => {
                            let { code: t, promotion: i } = e;
                            return (0, E.jsx)(ga, { outboundPromotion: i, code: t }, i.id);
                        }),
                        s.map((e) => (0, E.jsx)(ga, { outboundPromotion: e, code: r[e.id] }, e.id)),
                        null != a
                            ? (0, E.jsx)(
                                  gi,
                                  {
                                      skuId: a.skuId,
                                      subscriptionPlanId: a.subscriptionPlanId,
                                      entitlements: [a],
                                      giftCodeBatchId: sQ.FB,
                                  },
                                  (0, cx.Kx)(a.skuId, a.subscriptionPlanId),
                              )
                            : null,
                        u.length > 0
                            ? (0, E.jsx)(
                                  gi,
                                  {
                                      skuId: u[0].skuId,
                                      subscriptionPlanId: u[0].subscriptionPlanId,
                                      entitlements: u,
                                      giftCodeBatchId: sQ.Bu,
                                  },
                                  (0, cx.Kx)(u[0].skuId, u[0].subscriptionPlanId),
                              )
                            : null,
                        d.length > 0
                            ? (0, E.jsx)(
                                  gi,
                                  {
                                      skuId: d[0].skuId,
                                      subscriptionPlanId: d[0].subscriptionPlanId,
                                      entitlements: d,
                                      giftCodeBatchId: sQ.Bu,
                                  },
                                  (0, cx.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                    ],
                }),
            }),
        ],
    });
}
var gl = i(339048);
function gr() {
    let e = (0, g.yK)([cK.A], () => cK.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        t = eZ().groupBy(e, (e) => (0, cx.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [i, n] = S.useState(!1);
    if (
        (S.useEffect(() => {
            sa.h.wait(() => {
                (0, gl.XJ)().then(() => n(!0));
            });
        }, []),
        !i)
    )
        return (0, E.jsx)(dp.y, { className: gn.Lq });
    if (0 === Object.keys(t).length)
        return (0, E.jsxs)("div", {
            className: gn.p$,
            children: [
                (0, E.jsx)("div", { className: gn.QT }),
                (0, E.jsx)(cI.H, { className: gn.ks, children: j.intl.string(j.t.B1qgZn) }),
                (0, E.jsx)("p", {
                    className: gn.WO,
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
            let { skuId: i, subscriptionPlanId: n, giftStyle: s } = (0, cx.X6)(e);
            return (0, E.jsx)(gi, { skuId: i, subscriptionPlanId: n, entitlements: t[e], giftStyle: s }, e);
        });
    return (0, E.jsx)(Q.B, { gap: "lg", children: s });
}
function ga(e) {
    let t,
        { outboundPromotion: i, code: n } = e,
        [s, l] = S.useState(!1),
        [r, a] = S.useState(!1);
    function o() {
        return l((e) => !e);
    }
    let u = (0, cC.Ay)(),
        d = (0, cO.WD)(i.id, u),
        c = null != n,
        g = S.useMemo(
            () =>
                (0, r7.i$)(
                    c
                        ? null != i.outboundRedemptionEndDate
                            ? r4()(i.outboundRedemptionEndDate)
                            : r4()(i.endDate).add(cv)
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
        A = !0 === (0, cj.N)(i),
        h = S.useCallback(() => a(!1), []),
        { outboundTitle: T, outboundTermsAndConditions: x } = i;
    return (0, E.jsxs)(E.Fragment, {
        children: [
            (0, E.jsxs)("div", {
                className: gn.AX,
                children: [
                    (0, E.jsxs)("div", {
                        className: gn.gE,
                        children: [
                            (0, E.jsxs)("div", {
                                className: gn.At,
                                children: [
                                    (0, E.jsx)("div", {
                                        className: gn.$G,
                                        children: (0, E.jsx)("img", { alt: "", src: d, className: gn.IJ }),
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
                            className: gn.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: cy.A.parse(x, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            r &&
                (0, E.jsx)(c_.aF, {
                    renderModal: (e) =>
                        (0, E.jsx)(cP, {
                            ...e,
                            onClose: h,
                            onClaim: cc.Ay.addClaimedOutboundPromotionCode,
                            code: n,
                            outboundPromotion: i,
                        }),
                    onCloseRequest: h,
                }),
        ],
    });
}
let go = (0, a.E2)(u.X.GIFT_INVENTORY_LIST_SETTING, {
        Component: function () {
            let { enabled: e } = cd.n.useConfig({ location: "EntitlementGifts" }),
                t = (0, g.bG)([cb.Ay], () => cb.Ay.getBadgeById(ca.$.GIFTING));
            return (
                S.useEffect(() => {
                    e && (0, cu.o)(ca.$.GIFTING);
                }, [e]),
                (0, E.jsxs)(Q.B, {
                    gap: "md",
                    children: [
                        (0, E.jsx)(gs, {}),
                        e &&
                            null != t &&
                            (0, E.jsx)("div", {
                                className: gn.N1,
                                children: (0, E.jsxs)(cI.F, {
                                    component: (0, E.jsx)(eP.D, {
                                        variant: "heading-md/semibold",
                                        children: j.intl.string(ck.default.sFokBp),
                                    }),
                                    children: [(0, E.jsx)(eU.c, { className: gn.yF }), (0, E.jsx)(cX, {})],
                                }),
                            }),
                        (0, E.jsx)("div", {
                            className: gn.N1,
                            children: (0, E.jsxs)(cI.F, {
                                component: (0, E.jsx)(eP.D, {
                                    variant: "heading-md/semibold",
                                    children: j.intl.string(j.t["9KeUbY"]),
                                }),
                                children: [(0, E.jsx)(eU.c, { className: gn.yF }), (0, E.jsx)(gr, {})],
                            }),
                        }),
                    ],
                })
            );
        },
        usePredicate: () => !(0, cm.Hp)(),
        useSearchTerms: () => [j.intl.string(j.t["jcSP+g"]), j.intl.string(j.t["9KeUbY"])],
    }),
    gu = (0, a.zZ)(u.X.GIFTING_BADGE_CATEGORY, {
        useTitle: () => j.intl.string(ck.default.sFokBp),
        buildLayout: () => [gd],
        usePredicate: () => {
            let { enabled: e } = cd.n.useConfig({ location: "gift_inventory" }),
                t = (0, g.bG)([cb.Ay], () => cb.Ay.getBadgeById(ca.$.GIFTING));
            return e && null != t;
        },
    }),
    gd = (0, a.E2)(u.X.GIFTING_BADGE_CONTENT, {
        useSearchTerms: () => [j.intl.string(ck.default.sFokBp)],
        Component: () => (0, E.jsx)(cX, {}),
    });
var gc = i(374200);
let gg = (0, a.zZ)(u.X.MY_GIFTS_CATEGORY, {
        useTitle: gA,
        buildLayout: () => [gm],
        usePredicate: () => {
            let { claimedOutboundPromotionCodes: e, claimedOutboundPromotionCodesLoaded: t } = (0, g.cf)(
                    [gc.A],
                    () => ({
                        claimedOutboundPromotionCodes: gc.A.claimedOutboundPromotionCodes,
                        claimedOutboundPromotionCodesLoaded: gc.A.claimedOutboundPromotionCodesLoaded,
                    }),
                ),
                i = (0, cg.T1)({ includeClaimedPromotions: !0 }),
                n = (0, cO.Wl)(e, i).length;
            return t && i.length + n > 0;
        },
    }),
    gm = (0, a.E2)(u.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [gA()],
        Component: () => (0, E.jsx)(gs, { redesign: !0 }),
    });
function gA() {
    return (0, o.ri)("MyGifts") ? j.intl.string(j.t.YzjdWJ) : j.intl.string(j.t.wFsj3B);
}
let gh = (0, a.zZ)(u.X.PURCHASED_GIFTS_CATEGORY, { useTitle: gS, buildLayout: () => [gE] }),
    gE = (0, a.E2)(u.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [gS()], Component: () => (0, E.jsx)(gr, {}) });
function gS() {
    return (0, o.ri)("PurchasedGifts") ? j.intl.string(j.t.FWe6CP) : j.intl.string(j.t["9KeUbY"]);
}
let gT = (0, a.zZ)(u.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => j.intl.string(j.t["il+VCo"]),
        buildLayout: () => [gx],
        usePredicate: () => !(0, cm.Hp)(),
    }),
    gx = (0, a.E2)(u.X.REDEEM_CODE_INPUT, {
        Component: () => (0, E.jsx)(cf, { redesign: !0 }),
        useSearchTerms: () => [j.intl.string(j.t["jcSP+g"]), j.intl.string(j.t["il+VCo"])],
    }),
    gp = (0, a.zZ)(u.X.GIFT_INVENTORY_LEGACY_CATEGORY, { buildLayout: () => [cN, go, cA] }),
    gf = (0, a.t_)(u.X.GIFT_PANEL, {
        useTitle: () => j.intl.string(j.t["jcSP+g"]),
        buildLayout: () => ((0, o.SB)("GiftPanel") ? [gT, gg, gu, gh, ch] : [gp]),
        initialize: () => {
            (0, o.SB)("GiftPanel") &&
                (cc.Ay.fetchClaimedOutboundPromotionCodes(),
                cd.n.getConfig({ location: "gift_inventory" }).enabled && (0, cu.o)(ca.$.GIFTING));
        },
    }),
    gN = (0, a.i4)(u.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["jcSP+g"]),
        icon: co.o,
        usePersistentBadge: function () {
            return S.useMemo(() => ({ badgeType: h.Xi.COUNT, useCount: () => (0, cg.IO)().length }), []);
        },
        buildLayout: () => [gf],
    });
var g_ = i(659758),
    gI = i(741046),
    gC = i(815846);
let gb = (0, a.E2)(u.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, g.bG)([io.default], () => io.default.getCurrentUser());
            return (0, uT.YE)(e, sQ.PremiumTypes.TIER_2) ? (0, E.jsx)(gC.A, {}) : (0, E.jsx)(gI.A, {});
        },
        useSearchTerms: () => [j.intl.string(j.t.Ipxkog)],
    }),
    gy = (0, a.zZ)(u.X.NITRO_CATEGORY, { buildLayout: () => [gb] }),
    gv = (0, a.t_)(u.X.NITRO_PANEL, {
        useTitle: () => j.intl.string(j.t.Ipxkog),
        useObscuredNotice: dT.L,
        buildLayout: () => [gy],
    }),
    gj = (0, a.i4)(u.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.Ipxkog),
        icon: uu.t,
        usePersistentBadge: function (e) {
            return S.useMemo(
                () => ({ badgeType: h.Xi.STRONGLY_DISCOURAGED_CUSTOM, useCustomBadge: () => (0, g_.e)(e) }),
                [e],
            );
        },
        buildLayout: () => [gv],
    });
var gO = i(104510),
    gR = i(820739),
    gL = i(73825),
    gD = i(160946);
let gP = (0, i(240921).Ay)({
    name: "2026-03-boosting-settings-refresh",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var gG = i(859241),
    gU = i(531260),
    gM = i(369163),
    gV = i(957485),
    gk = i(926268),
    gw = i(106529),
    gF = i(93364);
function gB(e) {
    let { className: t, icon: i, children: n } = e;
    return (0, E.jsxs)("li", {
        className: e6()(gw.Nr, t),
        children: [
            (0, E.jsx)(i, { className: gw.Kk }),
            (0, E.jsx)(es.E, { className: gw.__invalid_description, variant: "text-sm/medium", children: n }),
        ],
    });
}
let gz = function (e) {
    let { cardClassName: t } = e;
    return (0, E.jsxs)("div", {
        className: gw.iE,
        children: [
            (0, E.jsxs)("div", {
                className: gw.Qs,
                children: [
                    (0, E.jsx)(eP.D, {
                        className: gw.R_,
                        color: "always-white",
                        variant: "heading-xxl/bold",
                        children: j.intl.string(j.t.IzKs3o),
                    }),
                    (0, E.jsxs)("ul", {
                        className: gw.kR,
                        children: [
                            (0, E.jsx)(gB, { className: t, icon: gM.v, children: j.intl.string(j.t.TZigSO) }),
                            (0, E.jsx)(gB, {
                                className: t,
                                icon: (e) =>
                                    (0, E.jsx)("img", { className: e6()(e.className, gw.Dp), src: gF, alt: "" }),
                                children: j.intl.string(j.t.hjQuV2),
                            }),
                            (0, E.jsx)(gB, { className: t, icon: gV.i, children: j.intl.string(j.t["2RUcaM"]) }),
                            (0, E.jsx)(gB, { className: t, icon: gk.C, children: j.intl.string(j.t.bJoZKV) }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)("div", { className: gw.JP }),
        ],
    });
};
var gX = i(834040),
    gY = i(811227);
let gH = [
        { getQuestion: () => j.intl.string(j.t.C4J8UB), getAnswer: () => j.intl.string(j.t.nhkk6k) },
        {
            getQuestion: () => j.intl.string(j.t.ai4ym2),
            getAnswer: () =>
                j.intl.format(j.t["8zlqlD"], { helpCenterUrl: tN.A.getArticleURL(M.MVz.GUILD_BOOSTING_FAQ) }),
        },
        { getQuestion: () => j.intl.string(j.t.kMVGsC), getAnswer: () => j.intl.string(j.t["Vz/SCQ"]) },
        { getQuestion: () => j.intl.string(j.t.kYmXWF), getAnswer: () => j.intl.string(j.t["+OURPp"]) },
        { getQuestion: () => j.intl.string(j.t["LsX/vb"]), getAnswer: () => j.intl.string(j.t["3TeauK"]) },
        { getQuestion: () => j.intl.string(j.t.fRlnXU), getAnswer: () => j.intl.string(j.t.bTRacj) },
        { getQuestion: () => j.intl.string(j.t["8Mu5Q9"]), getAnswer: () => j.intl.string(j.t["2T5iPo"]) },
        { getQuestion: () => j.intl.string(j.t["6EN+TZ"]), getAnswer: () => j.intl.string(j.t.NZax1u) },
        { getQuestion: () => j.intl.string(j.t.f5B4EW), getAnswer: () => j.intl.string(j.t.Aje8Pb) },
    ],
    gK = function (e) {
        let { className: t } = e,
            [i, n] = S.useState(null);
        return (0, E.jsxs)("div", {
            className: e6()(gY.iE, t),
            children: [
                (0, E.jsx)(eP.D, {
                    className: gY.R_,
                    variant: "heading-xxl/bold",
                    children: j.intl.string(j.t.HPJ6Nj),
                }),
                (0, E.jsx)("ul", {
                    className: gY.p_,
                    children: gH.map((e, t) => {
                        let s = i === t;
                        return (0, E.jsxs)(
                            "div",
                            {
                                className: gY.Aw,
                                children: [
                                    (0, E.jsxs)(en.D, {
                                        className: e6()(gY.k7, { [gY.lo]: s }),
                                        onClick: () => n((e) => (e === t ? null : t)),
                                        tag: "li",
                                        children: [
                                            (0, E.jsx)(es.E, {
                                                className: gY.b1,
                                                variant: "text-lg/normal",
                                                children: e.getQuestion(),
                                            }),
                                            s
                                                ? (0, E.jsx)(gX.Q, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: gY.q4,
                                                  })
                                                : (0, E.jsx)(ay.j, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: gY.q4,
                                                  }),
                                        ],
                                    }),
                                    s &&
                                        (0, E.jsx)(es.E, {
                                            className: gY.ZF,
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
var gW = i(462887),
    gZ = i(933832),
    gq = i(789645),
    gQ = i(116891),
    gJ = i(416676);
let g$ = [
    {
        getPerkHeading: () => j.intl.string(j.t.tIiwuj),
        getPerkPreviewLightTheme: () => i(604203),
        getPerkPreviewDarkTheme: () => i(878515),
        getTier0Value: () => sQ.TG[M.TVA.NONE].limits.emoji,
        getTier1Value: () => sQ.TG[M.TVA.TIER_1].limits.emoji,
        getTier2Value: () => sQ.TG[M.TVA.TIER_2].limits.emoji,
        getTier3Value: () => sQ.TG[M.TVA.TIER_3].limits.emoji,
    },
    {
        getPerkHeading: () => j.intl.string(j.t["3iccet"]),
        getPerkPreviewLightTheme: () => i(105732),
        getPerkPreviewDarkTheme: () => i(857020),
        getTier0Value: () => sQ.TG[M.TVA.NONE].limits.stickers,
        getTier1Value: () => sQ.TG[M.TVA.TIER_1].limits.stickers,
        getTier2Value: () => sQ.TG[M.TVA.TIER_2].limits.stickers,
        getTier3Value: () => sQ.TG[M.TVA.TIER_3].limits.stickers,
    },
    {
        getPerkHeading: () => j.intl.string(j.t["+smCv9"]),
        getPerkPreviewLightTheme: () => i(597890),
        getPerkPreviewDarkTheme: () => i(297642),
        getTier0Value: () => sQ.TG[M.TVA.NONE].limits.soundboardSounds,
        getTier1Value: () => sQ.TG[M.TVA.TIER_1].limits.soundboardSounds,
        getTier2Value: () => sQ.TG[M.TVA.TIER_2].limits.soundboardSounds,
        getTier3Value: () => sQ.TG[M.TVA.TIER_3].limits.soundboardSounds,
    },
    {
        getPerkHeading: () => j.intl.string(j.t.SMYauD),
        getPerkPreviewLightTheme: () => i(323091),
        getPerkPreviewDarkTheme: () => i(261835),
        getTier0Value: () =>
            j.intl.formatToPlainString(j.t.zZ6Rdi, {
                resolution: sQ.TG[M.TVA.NONE].limits.screenShareQualityResolution,
                framerate: sQ.TG[M.TVA.NONE].limits.screenShareQualityFramerate,
            }),
        getTier1Value: () =>
            j.intl.formatToPlainString(j.t.zZ6Rdi, {
                resolution: sQ.TG[M.TVA.TIER_1].limits.screenShareQualityResolution,
                framerate: sQ.TG[M.TVA.TIER_1].limits.screenShareQualityFramerate,
            }),
        getTier2Value: () =>
            j.intl.formatToPlainString(j.t.zZ6Rdi, {
                resolution: (0, gQ.eT)("GuildBoostingMarketingTierComparisonTable"),
                framerate: sQ.TG[M.TVA.TIER_2].limits.screenShareQualityFramerate,
            }),
        getTier3Value: () =>
            j.intl.formatToPlainString(j.t.zZ6Rdi, {
                resolution: (0, gQ.eT)("GuildBoostingMarketingTierComparisonTable"),
                framerate: sQ.TG[M.TVA.TIER_3].limits.screenShareQualityFramerate,
            }),
    },
    {
        getPerkHeading: () => j.intl.string(j.t["/79IDj"]),
        getPerkPreviewLightTheme: () => i(913997),
        getPerkPreviewDarkTheme: () => i(95781),
        getTier0Value: () =>
            j.intl.formatToPlainString(j.t.w1gmLt, { bitrate: sQ.TG[M.TVA.NONE].limits.bitrate / 1e3 }),
        getTier1Value: () =>
            j.intl.formatToPlainString(j.t.w1gmLt, { bitrate: sQ.TG[M.TVA.TIER_1].limits.bitrate / 1e3 }),
        getTier2Value: () =>
            j.intl.formatToPlainString(j.t.w1gmLt, { bitrate: sQ.TG[M.TVA.TIER_2].limits.bitrate / 1e3 }),
        getTier3Value: () =>
            j.intl.formatToPlainString(j.t.w1gmLt, { bitrate: sQ.TG[M.TVA.TIER_3].limits.bitrate / 1e3 }),
    },
    {
        getPerkHeading: () => j.intl.string(j.t.R1U2xC),
        getPerkPreviewLightTheme: () => i(389833),
        getPerkPreviewDarkTheme: () => i(754561),
        getTier0Value: () =>
            j.intl.formatToPlainString(j.t.pIn7Af, { size: sQ.TG[M.TVA.NONE].limits.fileSize / 1048576 }),
        getTier1Value: () =>
            j.intl.formatToPlainString(j.t.pIn7Af, { size: sQ.TG[M.TVA.TIER_1].limits.fileSize / 1048576 }),
        getTier2Value: () =>
            j.intl.formatToPlainString(j.t.pIn7Af, { size: sQ.TG[M.TVA.TIER_2].limits.fileSize / 1048576 }),
        getTier3Value: () =>
            j.intl.formatToPlainString(j.t.pIn7Af, { size: sQ.TG[M.TVA.TIER_3].limits.fileSize / 1048576 }),
    },
    {
        getPerkHeading: () => j.intl.string(j.t.f6vfso),
        getPerkPreviewLightTheme: () => i(735669),
        getPerkPreviewDarkTheme: () => i(283517),
        getTier0Value: () => sQ.TG[M.TVA.NONE].limits.stageVideoUsers,
        getTier1Value: () => sQ.TG[M.TVA.TIER_1].limits.stageVideoUsers,
        getTier2Value: () => sQ.TG[M.TVA.TIER_2].limits.stageVideoUsers,
        getTier3Value: () => sQ.TG[M.TVA.TIER_3].limits.stageVideoUsers,
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
function g0(e) {
    let { children: t, className: i, tier: n } = e,
        s = n === M.TVA.NONE ? "text-muted" : "text-strong",
        l = n === M.TVA.NONE || null == n ? "heading-xl/normal" : "heading-xl/bold";
    return (0, E.jsxs)("th", {
        className: e6()(gJ.PG, i),
        scope: "col",
        children: [
            (0, E.jsx)(eP.D, { color: s, variant: l, children: t }),
            null != n &&
                (0, E.jsx)(es.E, {
                    color: s,
                    variant: "text-md/normal",
                    children: j.intl.format(j.t["pob/cL"], { subscriptions: M.M2T[n] }),
                }),
        ],
    });
}
function g1(e) {
    let t,
        { className: i, textVariant: n = "text-md/bold", value: s } = e;
    if ("boolean" == typeof s) {
        let e = e6()(gJ.Jk, { [gJ.I$]: s });
        t = s
            ? (0, E.jsx)(gZ.A, { size: "md", color: "currentColor", className: e })
            : (0, E.jsx)(gq.P, { size: "md", color: "currentColor", className: e });
    } else t = (0, E.jsx)(es.E, { color: "interactive-text-active", variant: n, children: s });
    return (0, E.jsx)("td", { className: e6()(gJ.xR, i), children: t });
}
function g2(e) {
    let { currentTier: t } = e,
        i = (function (e) {
            switch (e) {
                case M.TVA.NONE:
                case M.TVA.TIER_1:
                    return M.TVA.TIER_2;
                case M.TVA.TIER_2:
                case M.TVA.TIER_3:
                    return M.TVA.TIER_3;
                default:
                    return null;
            }
        })(t);
    return null == i
        ? null
        : (0, E.jsx)("div", {
              className: e6()(gJ.ER, { [gJ.GH]: i === M.TVA.TIER_2, [gJ.z5]: i === M.TVA.TIER_3 }),
              children: (0, E.jsx)(es.E, {
                  className: gJ.uQ,
                  color: "always-white",
                  variant: "text-xs/bold",
                  children: t === M.TVA.TIER_3 ? j.intl.string(j.t.d849Up) : j.intl.string(j.t.dZeX1z),
              }),
          });
}
function g3(e) {
    let { isFocused: t, handleFocus: i, handleRowBlur: n, theme: s, row: l, hideTier0: r } = e,
        a = S.useRef(null);
    return (0, E.jsxs)("tr", {
        className: gJ.__invalid_tableRow,
        children: [
            (0, E.jsx)("th", {
                className: e6()(gJ.xR, gJ.uB),
                scope: "row",
                children: (0, E.jsx)(en.D, {
                    className: e6()(gJ.VC, gJ.xR, gJ.Rk),
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
                                className: gJ.Mz,
                                src: (0, gW.M)(s) ? l.getPerkPreviewDarkTheme() : l.getPerkPreviewLightTheme(),
                                alt: "",
                            }),
                        shouldShow: t,
                        spacing: 16,
                        children: () =>
                            (0, E.jsx)(es.E, { variant: "text-md/normal", ref: a, children: l.getPerkHeading() }),
                    }),
                }),
            }),
            !r && (0, E.jsx)(g1, { textVariant: "text-md/normal", value: l.getTier0Value() }),
            (0, E.jsx)(g1, { value: l.getTier1Value() }),
            (0, E.jsx)(g1, { value: l.getTier2Value() }),
            (0, E.jsx)(g1, { value: l.getTier3Value() }),
        ],
    });
}
let g6 = function (e) {
    let t = (0, cC.Ay)(),
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
                    className: gJ.R_,
                    variant: "heading-xxl/extrabold",
                    children: j.intl.string(j.t["9GGb9k"]),
                }),
            (0, E.jsxs)("div", {
                className: gJ.wY,
                children: [
                    null != l && (0, E.jsx)(g2, { currentTier: l.premiumTier }),
                    (0, E.jsxs)("table", {
                        className: gJ.tp,
                        cellPadding: 0,
                        cellSpacing: 0,
                        children: [
                            (0, E.jsx)("thead", {
                                children: (0, E.jsxs)("tr", {
                                    className: gJ.__invalid_tableRow,
                                    children: [
                                        (0, E.jsx)(g0, { className: gJ.VC, children: j.intl.string(j.t.F5MY0k) }),
                                        !a && (0, E.jsx)(g0, { tier: M.TVA.NONE, children: j.intl.string(j.t.mx8j2m) }),
                                        (0, E.jsx)(g0, { tier: M.TVA.TIER_1, children: j.intl.string(j.t.nzXtaS) }),
                                        (0, E.jsx)(g0, { tier: M.TVA.TIER_2, children: j.intl.string(j.t["h33/uW"]) }),
                                        (0, E.jsx)(g0, { tier: M.TVA.TIER_3, children: j.intl.string(j.t.BfF6ED) }),
                                    ],
                                }),
                            }),
                            (0, E.jsx)("tbody", {
                                className: gJ.__invalid_tableBody,
                                children: g$.map((e, s) => {
                                    let l = i === s;
                                    return void 0 === e.predicate
                                        ? (0, E.jsx)(
                                              g3,
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
var g4 = i(338548),
    g7 = i(776096),
    g5 = i(178368),
    g8 = i(18005),
    g9 = i(866323),
    me = i(530005),
    mt = i(443865),
    mi = i(473145);
function mn(e) {
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
        case M.Dmq.PAST_DUE:
            (o.cancel.disabled = !0), (o.cancel.subtext = j.intl.string(j.t.WnL6DV)), (o.uncancel.disabled = !0);
            break;
        case M.Dmq.PAUSE_PENDING:
        case M.Dmq.PAUSED:
            a === sQ.xc.NONE &&
                ((o.transfer.disabled = !0),
                (o.transfer.subtext = j.intl.string(j.t.LiLRRT)),
                (o.cancel.subtext = j.intl.string(j.t["1ywaWL"])),
                (o.cancel.disabled = !0),
                (o.uncancel.disabled = !0));
    }
    let d = S.useMemo(
        () =>
            l.isPausedOrPausePending && a === sQ.xc.NONE
                ? (0, E.jsx)(ei.Dr, {
                      id: "manage-subscription",
                      label: j.intl.string(j.t.obRG6Y),
                      action: () => (0, eH.openUserSettings)(u.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: mt.x,
                      leadingAccessory: { type: "icon", icon: mt.x },
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
                            (0, E.jsx)(e, { ...i, guildBoostSlots: [t], locationSection: M.JJy.SETTINGS_PREMIUM });
                    });
                },
                disabled: o.transfer.disabled,
            }),
            (0, mi.I5)(t)
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
var ms = i(545934),
    ml = i(496431);
let mr = function (e) {
    let { className: t, cooldown: i } = e,
        n = (0, ml.A)(i);
    return (0, E.jsx)(es.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, r7.uN)(n, { days: j.t.WUTPDc, hours: j.t.c1qodV, minutes: j.t["2+A3dv"] }),
    });
};
var ma = i(482900);
let mo = function (e) {
    let { className: t, imageClassName: n, boostInCooldown: s, useReducedMotion: l } = e;
    return (0, E.jsx)("div", {
        className: e6()(ma.h4, t, { [ma.K2]: s }),
        children: (0, E.jsx)("img", {
            className: e6()(ma.Sl, n, { [ma.x8]: s }),
            src: s
                ? i(650442)
                : l
                  ? i(742885)
                  : "https://cdn.discordapp.com/assets/content/86fd98fc22283647a8be93d0c503646b53c84e3cb25ca6562a38cecb84327e58.gif",
            alt: "",
        }),
    });
};
var mu = i(583032);
let md = function (e) {
    let { className: t, hasCooldown: n, isCanceled: s, useReducedMotion: l } = e;
    return (0, E.jsxs)("div", {
        className: e6()(mu.sn, t),
        children: [
            s
                ? (0, E.jsx)("img", { className: e6()(mu.$J, mu.qX), src: i(728707), alt: "" })
                : (0, E.jsx)(mo, { className: mu.$J, boostInCooldown: n, useReducedMotion: l }),
            !s && n && (0, E.jsx)("img", { className: mu.De, src: i(438807), alt: "" }),
        ],
    });
};
var mc = i(548118),
    mg = i(63152),
    mm = i(944304),
    mA = i(864310),
    mh = i(245390);
let mE = function (e) {
    let { className: t, guildId: i, boostingVariant: n } = e,
        s = (0, dt.bG)([ec.A], () => ec.A.getGuild(i), [i]),
        l = (0, mA.A)(s?.id).total;
    return null == s
        ? (0, E.jsx)("div", {
              className: e6()(t, mh.bo),
              children: (0, E.jsx)("div", {
                  className: mh.$g,
                  children: (0, E.jsx)(es.E, { variant: "text-lg/bold", children: j.intl.string(j.t["6Kwwuo"]) }),
              }),
          })
        : (0, E.jsxs)("div", {
              className: e6()(t, mh.bo),
              children: [
                  (0, E.jsx)(mc.Ay, { className: mh.__invalid_guildIcon, guild: s, size: mc.Ay.Sizes.LARGER }),
                  (0, E.jsxs)("div", {
                      className: mh.$g,
                      children: [
                          (0, E.jsx)(es.E, { variant: "text-lg/bold", children: s.name }),
                          (0, E.jsxs)("div", {
                              className: mh.TZ,
                              children: [
                                  (0, E.jsx)(gO._, {
                                      color: er.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                      className: mh.Me,
                                  }),
                                  (0, E.jsx)(es.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: j.intl.format(j.t["pob/cL"], { subscriptions: l }),
                                  }),
                                  (0, E.jsx)("div", { className: mh.me }),
                                  (0, E.jsx)(es.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: (0, mi.gb)(s.premiumTier, { useLevels: !1 }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  n
                      ? (0, E.jsx)(mm.A, {
                            guild: s,
                            analyticsLocation: {
                                page: M.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                section: M.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                object: M.ZSU.BUTTON_CTA,
                                objectType: M.AnalyticsObjectTypes.BUY,
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
                                    (0, mg.K4)({
                                        guildId: s.id,
                                        location: { section: M.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA },
                                    });
                            },
                        }),
              ],
          });
};
var mS = i(85566);
function mT(e) {
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
                    if (null == e || e === M.TVA.NONE) return "";
                    let t = [
                        j.intl.formatToPlainString(j.t["dLlKX/"], { numEmojiSlots: sQ.TG[e].limits.emoji }),
                        j.intl.formatToPlainString(j.t["+ANIfv"], { numStickerSlots: sQ.TG[e].limits.stickers }),
                        j.intl.formatToPlainString(j.t["4gt60b"], {
                            numSoundboardSlots: sQ.TG[e].limits.soundboardSounds,
                        }),
                        j.intl.formatToPlainString(j.t.XahSjZ, {
                            resolution: sQ.TG[e].limits.screenShareQualityResolution,
                            framerate: sQ.TG[e].limits.screenShareQualityFramerate,
                        }),
                        j.intl.formatToPlainString(j.t.NbNs7S, { bitrate: sQ.TG[e].limits.bitrate / 1e3 }),
                        j.intl.formatToPlainString(j.t.VVKcpn, { filesize: sQ.TG[e].limits.fileSize / 1024 / 1024 }),
                        j.intl.formatToPlainString(j.t.TbpCvv, { numVideoStageSeats: sQ.TG[e].limits.stageVideoUsers }),
                        j.intl.string(j.t.LDyX3i),
                        j.intl.string(j.t.YtGlPW),
                    ];
                    e >= M.TVA.TIER_2 && (t.push(j.intl.string(j.t.SztbtN)), t.push(j.intl.string(j.t["3GK91n"]))),
                        e >= M.TVA.TIER_3 && t.push(j.intl.string(j.t["XUUJd+"]));
                    let i = t[Math.floor(Math.random() * t.length)];
                    return j.intl.format(j.t["/dOAmQ"], { perk: i });
                })(t),
            [t],
        ),
        u = (0, g9.p)(n, { from: { opacity: 0 }, enter: { opacity: 1 }, leave: { opacity: 0 } }, "animate-always");
    return s || t === M.TVA.NONE
        ? (0, E.jsx)("div", {
              className: mS.xm,
              children: (0, E.jsx)(es.E, { variant: "text-sm/medium", color: "text-muted", children: a }),
          })
        : u((e, t) =>
              (0, E.jsx)(g8.animated.div, {
                  style: e,
                  className: mS.xm,
                  children: (0, E.jsx)(es.E, { variant: "text-sm/medium", color: "text-muted", children: t ? o : a }),
              }),
          );
}
function mx(e) {
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
        d = (0, mi.I5)(i),
        c = (0, gU.A)(),
        g = S.useRef(null);
    return (0, E.jsxs)("div", {
        className: mS.PW,
        children: [
            (0, E.jsxs)("div", {
                className: mS.$U,
                children: [
                    (0, E.jsx)(md, { isCanceled: d, hasCooldown: u, useReducedMotion: a }),
                    (0, E.jsx)("div", {
                        className: mS.vh,
                        children:
                            null != o && u && !d
                                ? (0, E.jsx)(mr, { className: mS.xm, cooldown: o.getTime() })
                                : (0, E.jsx)(mT, {
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
                            return (0, E.jsx)(mn, {
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
                                className: mS.oU,
                                children: (0, E.jsx)(me.F, { size: "md", color: "currentColor" }),
                            }),
                    }),
                ],
            }),
            !r && (0, E.jsx)("div", { className: mS.eX }),
        ],
    });
}
function mp(e) {
    let {
            guildId: t,
            guildBoostSlotRecords: i,
            premiumSubscription: n,
            hasCancelableGuildBoostSlot: s,
            showAltText: l,
        } = e,
        r = (0, dt.bG)([ec.A], () => ec.A.getGuild(t), [t]);
    return (0, E.jsxs)("div", {
        className: mS.ag,
        children: [
            (0, E.jsx)(mE, { guildId: t, boostingVariant: !1 }),
            i.map((e, t) =>
                (0, E.jsx)(
                    mx,
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
function mf(e) {
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
    let r = ms.A.createFromServer(
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
        className: mS.ag,
        children: [
            (0, E.jsx)(mE, { guildId: t, boostingVariant: !1 }),
            i.map((e, t) =>
                (0, E.jsx)(
                    mx,
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
function mN(e) {
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
              className: mS.iE,
              children: [
                  (0, E.jsx)("div", {
                      className: mS.kL,
                      children: dL.default
                          .keys(n)
                          .map((e) =>
                              (0, E.jsx)(mf, { guildId: e, premiumSubscription: i, appliedGuildBoosts: n[e] }, e),
                          ),
                  }),
                  (0, E.jsx)("div", { className: mS.vK }),
              ],
          });
}
function m_(e) {
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
                if ((!(0, mi.I5)(s) && e++, null != s.premiumGuildSubscription)) {
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
        className: mS.iE,
        children: [
            (0, E.jsx)("div", {
                className: mS.kL,
                children: dL.default
                    .keys(l)
                    .map((e) =>
                        (0, E.jsx)(
                            mp,
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
            (0, E.jsx)("div", { className: mS.vK }),
        ],
    });
}
var mI = i(520610);
let mC = function (e) {
    let { hasGuildBoostSlots: t, hasAppliedGuildBoosts: n, hasBoostPerk: s, canAddBoosts: l } = e;
    return (0, E.jsxs)("div", {
        className: mI.iE,
        children: [
            (0, E.jsx)("div", {
                className: mI.bj,
                children: (0, E.jsx)("img", { alt: "", className: mI.KV, src: i(742885) }),
            }),
            (0, E.jsxs)("div", {
                className: mI.D7,
                children: [
                    (0, E.jsx)(eP.D, {
                        variant: "display-md",
                        className: mI.R_,
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
                        className: mI.Mz,
                        children: (0, E.jsx)("path", {
                            d: "M101.3,45.5C57.5,45.9,15.9,82.2,0,99.5V210h660V53.5c-164-137-265.2,32.4-385.8,33.6  C177.7,88.1,158.1,45,101.3,45.5z",
                        }),
                    }),
                ],
            }),
        ],
    });
};
var mb = i(20218),
    my = i(168482);
function mv() {
    return (0, E.jsxs)("div", {
        className: mb.iE,
        children: [
            (0, E.jsx)("img", { className: mb.Kk, alt: "", src: my }),
            (0, E.jsxs)("div", {
                className: mb.pq,
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
                    (0, s7.pX)(M.BVt.GUILD_DISCOVERY), (0, sH.default)();
                },
            }),
        ],
    });
}
var mj = i(502572),
    mO = i(614820),
    mR = i(987144),
    mL = i(805319);
let mD = function () {
    let e = S.useRef(null),
        { analyticsLocations: t } = (0, nZ.Ay)(),
        { fractionalState: n } = (0, gU.A)();
    function s(i) {
        null != e.current && (0, K.closeModal)(e.current),
            (0, mR.g)({
                analyticsLocation: {
                    page: M.liQ.GUILD_BOOSTING_USER_SETTINGS,
                    section: M.JJy.GUILD_BOOSTING_BOOST_ANY_GUILD_CTA,
                    object: M.ZSU.BUTTON_CTA,
                    objectType: M.AnalyticsObjectTypes.BUY,
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
    let r = (0, mi.Nc)({ fractionalState: n });
    return (0, E.jsxs)("div", {
        className: mL.iE,
        children: [
            (0, E.jsx)(gO._, { color: er.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: mL.$J }),
            (0, E.jsx)(es.E, {
                className: mL.C,
                color: "text-default",
                variant: "text-sm/medium",
                children: j.intl.format(j.t.kqC5vq, {
                    boostAnyGuildHook: (e, t) => {
                        let i = null != r,
                            n = (0, mO.O)(e),
                            s = (0, E.jsx)("div", {
                                className: mL.lO,
                                children: (0, E.jsx)(
                                    ea.Q,
                                    { variant: "primary", onClick: i ? void 0 : l, text: n, disabled: i },
                                    t,
                                ),
                            });
                        return i
                            ? (0, E.jsx)(
                                  mj.A,
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
var mP = i(279574);
let mG = function (e) {
    let { canAddBoosts: t, canApplyBoosts: i } = e,
        n = (0, g.bG)([g7.A], () => g7.A.affinities),
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
              className: mP.iE,
              children: [
                  t &&
                      (0, E.jsx)(eP.D, {
                          variant: "heading-lg/semibold",
                          className: mP.wx,
                          children: j.intl.string(j.t.r90Wgo),
                      }),
                  l.map((e) => (0, E.jsx)(mE, { className: mP.ZS, guildId: e, boostingVariant: !0 }, e)),
                  s.length > 3 && i && (0, E.jsx)(mD, {}),
              ],
          });
};
var mU = i(649327);
let mM = function (e) {
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
                        helpdeskArticle: tN.A.getArticleURL(M.MVz.GUILD_SUBSCRIPTIONS),
                    }),
                };
            let l = sQ.hd[sQ.gD.PREMIUM_MONTH_GUILD],
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
        className: mU.i,
        children: [
            (0, E.jsx)(eP.D, { variant: "heading-lg/bold", className: mU.V, children: l }),
            null != r && (0, E.jsx)(es.E, { variant: "text-sm/normal", children: r }),
        ],
    });
};
var mV = i(724624),
    mk = i(983511),
    mw = i(342744),
    mF = i(87719),
    mB = i(354888);
function mz(e) {
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
        u = (0, mi.I5)(t),
        d = l?.isPaused === !0 && a === sQ.xc.NONE,
        c = j.intl.string(j.t.mOWsF1);
    return (0, E.jsxs)(
        "li",
        {
            className: mB.Hp,
            children: [
                (0, E.jsxs)("div", {
                    className: mB.YL,
                    children: [
                        (0, E.jsx)(md, {
                            className: mB.W6,
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
                              ? (0, E.jsx)(mr, { cooldown: o.getTime() })
                              : (0, E.jsx)(es.E, {
                                    className: mB.__invalid_unappliedGuildBoostSlotDescription,
                                    color: "text-muted",
                                    variant: "text-sm/medium",
                                    children: j.intl.string(j.t["2mcafz"]),
                                }),
                    ],
                }),
                (0, E.jsxs)("div", {
                    className: mB.E7,
                    children: [
                        i &&
                            !u &&
                            (0, E.jsx)(mj.A, {
                                shouldShow: d,
                                text: c,
                                "aria-label": c.toString(),
                                children: (e) =>
                                    (0, E.jsx)("div", {
                                        className: mB.LB,
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
                            (0, E.jsx)(mj.A, {
                                shouldShow: d,
                                text: c,
                                "aria-label": c.toString(),
                                children: (e) =>
                                    (0, E.jsx)("div", {
                                        className: mB.LB,
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
function mX(e) {
    (0, K.openModalLazy)(async () => (t) => (0, E.jsx)(mk.default, { ...t, guildBoostSlot: e }));
}
function mY(e) {
    (0, K.openModalLazy)(async () => (t) => (0, E.jsx)(mw.default, { ...t, guildBoostSlotId: e.id }));
}
let mH = function (e) {
    let t,
        i,
        n,
        { guildBoostSlots: s } = e,
        l = (0, g.bG)([d4.A], () => d4.A.getPremiumTypeSubscription()),
        r = l?.isPausedOrPausePending === !0,
        { fractionalState: a } = (0, gU.A)(),
        o = (0, g.bG)([i7.Ay], () => i7.Ay.useReducedMotion),
        u = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
        d = a === sQ.xc.FP_SUB_PAUSED,
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
                    !(0, mi.I5)(s) && i++,
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
            for (let t = 0; t < I; t++) e.push((0, E.jsx)(mo, { className: mB.YA, useReducedMotion: o }, t));
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
                    className: mB.nw,
                    tag: "span",
                    onClick: () => {
                        (0, mF.e)();
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
        (n = r && a === sQ.xc.NONE ? j.intl.string(j.t.mOWsF1) : j.intl.string(j.t.xr4m5B)),
        (0, E.jsx)("div", {
            className: mB.iE,
            children: (0, E.jsxs)("div", {
                className: e6()(mB.Qs, [mB.Yq]),
                children: [
                    (0, E.jsxs)("div", {
                        className: mB.wx,
                        children: [
                            (0, E.jsxs)("div", {
                                className: mB.RW,
                                children: [
                                    (0, E.jsx)("div", { className: mB.PS, children: C }),
                                    (0, E.jsxs)("div", {
                                        className: mB.__invalid_headerCopy,
                                        children: [
                                            (0, E.jsx)(eP.D, {
                                                className: mB.gg,
                                                variant: "heading-lg/bold",
                                                children: t,
                                            }),
                                            (0, E.jsx)(es.E, {
                                                className: mB.__invalid_headerSubheading,
                                                color: "text-strong",
                                                variant: "text-sm/normal",
                                                children: i,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, E.jsx)("div", {
                                className: mB.di,
                                children: (0, E.jsx)(mj.A, {
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
                                                                  (0, E.jsx)(mV.default, {
                                                                      ...e,
                                                                      guildBoostSlots: [b],
                                                                      locationSection: M.JJy.SETTINGS_PREMIUM,
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
                            className: mB.LU,
                            children: A.map((e) =>
                                (0, E.jsx)(
                                    mz,
                                    {
                                        guildBoostSlot: e,
                                        isCancellable: N,
                                        onCancel: mX,
                                        onUncancel: mY,
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
var mK = i(616659);
function mW(e) {
    let { premiumSubscription: t } = e,
        i = (0, g.bG)([g5.A], () => g5.A.boostSlots),
        n = S.useMemo(() => Object.values(i), [i]),
        s = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
        l = uT.Ay.isPremium(s, sQ.PremiumTypes.TIER_2),
        r = (0, g.bG)([g7.A], () => g7.A.affinities),
        a = (0, g.bG)([eg.Ay], () => eg.Ay.getFlattenedGuildIds()),
        o = r.length > 0 || a.length > 0,
        u = n.length > 0,
        d = S.useMemo(() => n.filter((e) => null != e.premiumGuildSubscription), [n]),
        c = d.length > 0,
        m = n.length > d.length,
        A = (0, g.bG)([gG.A], () => gG.A.getCurrentUserAppliedBoosts()),
        { fractionalState: h } = (0, gU.A)({ forceFetch: !0 }),
        T = s?.isPremiumGroupMember(),
        x = t?.isPausedOrPausePending === !0 && h === sQ.xc.NONE,
        p = t?.isPausedOrPausePending !== !0 && h === sQ.xc.NONE && !T,
        f = l && h === sQ.xc.FP_SUB_PAUSED,
        N = h === sQ.xc.NONE && !T;
    return (0, E.jsxs)("div", {
        className: mK.GO,
        children: [
            (0, E.jsx)(ci.kb, { className: mK.ek }),
            (0, E.jsx)(mC, { hasGuildBoostSlots: u, hasAppliedGuildBoosts: c, hasBoostPerk: f, canAddBoosts: p }),
            N &&
                (0, E.jsx)(mM, {
                    hasAppliedGuildBoosts: c,
                    hasBoostPerk: f,
                    hasGuildAffinitiesOrInGuild: o,
                    subscriptionIsPausedOrPausePending: x,
                }),
            T && (0, E.jsx)(g4.A, {}),
            !o && (0, E.jsx)(mv, {}),
            t?.isPaused && h !== sQ.xc.FP_SUB_PAUSED
                ? (0, E.jsx)(mN, { appliedGuildBoosts: A, premiumSubscription: t })
                : (0, E.jsx)(m_, { guildBoostSlots: i, premiumSubscription: t }),
            (0, E.jsx)(mH, { guildBoostSlots: n, fractionalPremiumState: h }),
            (0, E.jsx)(mG, { canAddBoosts: c && p, canApplyBoosts: m }),
            (0, E.jsx)(g6, { className: mK.e4, hideHeading: !0, hideTier0: !0 }),
            (0, E.jsx)(gz, { cardClassName: mK.KW }),
            (0, E.jsx)(gK, { className: mK.JL }),
        ],
    });
}
var mZ = i(527113),
    mq = i(365199),
    mQ = i(162286);
function mJ(e) {
    let { guild: t, className: i } = e,
        { total: n } = (0, mA.A)(t.id);
    return (0, E.jsxs)("div", {
        className: i ?? mQ.OA,
        children: [
            (0, E.jsx)(mc.Ay, { className: mQ.$f, guild: t, size: mc.Ay.Sizes.MEDIUM }),
            (0, E.jsxs)("div", {
                className: mQ.gI,
                children: [
                    (0, E.jsx)(es.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, E.jsxs)("div", {
                        className: mQ.ew,
                        children: [
                            (0, E.jsxs)("div", {
                                className: mQ.QW,
                                children: [
                                    (0, E.jsx)(gO._, {
                                        className: mQ.Wz,
                                        color: er.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                                    }),
                                    (0, E.jsx)(es.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: j.intl.format(j.t["pob/cL"], { subscriptions: n }),
                                    }),
                                ],
                            }),
                            t.premiumTier !== M.TVA.NONE &&
                                (0, E.jsxs)(E.Fragment, {
                                    children: [
                                        (0, E.jsx)("div", { className: mQ.zk }),
                                        (0, E.jsx)(es.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, mi.gb)(t.premiumTier, { useLevels: !1 }),
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
function m$(e) {
    let { guildId: t } = e,
        i = (0, g.bG)([ec.A], () => ec.A.getGuild(t), [t]);
    return null == i
        ? null
        : (0, E.jsxs)("div", {
              className: mQ.Nr,
              children: [
                  (0, E.jsx)(mJ, { guild: i }),
                  (0, E.jsx)(eG.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: gO._,
                      text: j.intl.string(j.t.aBHecF),
                      onClick: () => {
                          (0, mR.g)({
                              analyticsLocations: [],
                              analyticsLocation: {
                                  page: M.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                  section: M.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                  object: M.ZSU.BUTTON_CTA,
                                  objectType: M.AnalyticsObjectTypes.BUY,
                              },
                              guild: i,
                          });
                      },
                  }),
              ],
          });
}
var m0 = i(225334);
let m1 =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function m2(e) {
    let { slot: t, guildTier: i, premiumSubscription: n, hasCancelableSlots: s, isLast: l } = e,
        r = S.useRef(null),
        a = (0, mi.I5)(t),
        o = S.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, gU.A)(),
        c = S.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === M.TVA.NONE) return "";
                    let i = [
                        j.intl.formatToPlainString(j.t["dLlKX/"], { numEmojiSlots: sQ.TG[e].limits.emoji }),
                        j.intl.formatToPlainString(j.t["+ANIfv"], { numStickerSlots: sQ.TG[e].limits.stickers }),
                        j.intl.formatToPlainString(j.t["4gt60b"], {
                            numSoundboardSlots: sQ.TG[e].limits.soundboardSounds,
                        }),
                        j.intl.formatToPlainString(j.t.XahSjZ, {
                            resolution: sQ.TG[e].limits.screenShareQualityResolution,
                            framerate: sQ.TG[e].limits.screenShareQualityFramerate,
                        }),
                        j.intl.formatToPlainString(j.t.NbNs7S, { bitrate: sQ.TG[e].limits.bitrate / 1e3 }),
                        j.intl.formatToPlainString(j.t.VVKcpn, { filesize: sQ.TG[e].limits.fileSize / 1024 / 1024 }),
                        j.intl.formatToPlainString(j.t.TbpCvv, { numVideoStageSeats: sQ.TG[e].limits.stageVideoUsers }),
                        j.intl.string(j.t.LDyX3i),
                        j.intl.string(j.t.YtGlPW),
                    ];
                    e >= M.TVA.TIER_2 && (i.push(j.intl.string(j.t.SztbtN)), i.push(j.intl.string(j.t["3GK91n"]))),
                        e >= M.TVA.TIER_3 && i.push(j.intl.string(j.t["XUUJd+"]));
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
        className: e6()(m0.iq, { [m0.Mt]: l }),
        children: [
            (0, E.jsxs)("div", {
                className: m0.kd,
                children: [
                    (0, E.jsx)("img", { alt: "", className: m0.bB, src: m1 }),
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
                                              (0, E.jsx)("div", { className: m0.zk }),
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
                                              (0, E.jsx)("div", { className: m0.zk }),
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
                    return (0, E.jsx)(mn, {
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
                        className: m0.Mj,
                        ...e,
                        children: (0, E.jsx)(mq.j, { size: "xs", color: er.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                    }),
            }),
        ],
    });
}
function m3(e) {
    let { guildId: t, slots: i, premiumSubscription: n, hasCancelableSlots: s } = e,
        l = (0, g.bG)([ec.A], () => ec.A.getGuild(t), [t]);
    return (0, E.jsxs)("div", {
        className: m0.Nr,
        children: [
            (0, E.jsx)("div", {
                className: m0.MY,
                children:
                    null != l
                        ? (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(mJ, { guild: l, className: m0.OA }),
                                  (0, E.jsx)(eG.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: j.intl.string(j.t.KLOhbO),
                                      onClick: () => {
                                          (0, sH.default)(),
                                              (0, mg.K4)({
                                                  guildId: l.id,
                                                  location: {
                                                      section: M.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA,
                                                  },
                                              });
                                      },
                                  }),
                              ],
                          })
                        : (0, E.jsx)("div", {
                              className: m0.OA,
                              children: (0, E.jsx)(eP.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: j.intl.string(j.t["6Kwwuo"]),
                              }),
                          }),
            }),
            i.map((e, t) =>
                (0, E.jsx)(
                    m2,
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
function m6(e) {
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
                                ms.A.createFromServer(
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
                if ((!(0, mi.I5)(n) && e++, null != n.premiumGuildSubscription)) {
                    let e = n.premiumGuildSubscription.guildId;
                    e in l || (l[e] = []), l[e].push(n);
                }
            }
            return { boostsByGuildId: l, numActiveSlots: e };
        }, [t, s, n, i]);
    if (null == i || 0 === Object.keys(l).length) return null;
    let a = r > uT.Ay.getNumIncludedPremiumGuildSubscriptionSlots(i.planId);
    return (0, E.jsx)("div", {
        className: m0.kR,
        children: dL.default
            .keys(l)
            .map((e) => (0, E.jsx)(m3, { guildId: e, slots: l[e], premiumSubscription: i, hasCancelableSlots: a }, e)),
    });
}
var m4 = i(68179);
function m7(e) {
    let { guildBoostSlots: t, fractionalPremiumState: n } = e,
        s = (0, g.bG)([d4.A], () => d4.A.getPremiumTypeSubscription()),
        { unappliedSlots: l, numActiveSlots: r } = S.useMemo(() => {
            let e = [],
                i = 0;
            for (let n of t) !(0, mi.I5)(n) && i++, null == n.premiumGuildSubscription && e.push(n);
            return { unappliedSlots: e, numActiveSlots: i };
        }, [t]),
        a = r > (null != s ? uT.Ay.getNumIncludedPremiumGuildSubscriptionSlots(s.planId) : 0),
        o = s?.isPausedOrPausePending === !0 && n === sQ.xc.NONE;
    return 0 === l.length
        ? null
        : (0, E.jsxs)("div", {
              className: m4.Nr,
              children: [
                  (0, E.jsxs)("div", {
                      className: m4.MY,
                      children: [
                          (0, E.jsxs)("div", {
                              className: m4._L,
                              children: [
                                  (0, E.jsxs)("div", {
                                      className: m4.MD,
                                      children: [
                                          (0, E.jsx)("img", { alt: "", className: m4.F8, src: m1 }),
                                          (0, E.jsx)("div", {
                                              className: e6()(m4.qS, "theme-dark"),
                                              children: (0, E.jsx)("span", { className: m4.Vv, children: l.length }),
                                          }),
                                      ],
                                  }),
                                  (0, E.jsxs)("div", {
                                      className: m4.Qp,
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
                          (0, E.jsx)(mj.A, {
                              shouldShow: o,
                              text: j.intl.string(j.t.mOWsF1),
                              "aria-label": j.intl.string(j.t.mOWsF1),
                              children: (e) =>
                                  (0, E.jsx)(eG.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: gO._,
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
                                                              (0, mR.g)({
                                                                  analyticsLocations: [],
                                                                  analyticsLocation: {
                                                                      page: M.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                                      section: M.JJy.SETTINGS_PREMIUM,
                                                                      object: M.ZSU.BUTTON_CTA,
                                                                      objectType: M.AnalyticsObjectTypes.BUY,
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
                          m5,
                          {
                              slot: e,
                              isLast: t === l.length - 1,
                              isCancelable: a && !(0, mi.I5)(e),
                              isCanceled: (0, mi.I5)(e),
                              premiumSubscription: s,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function m5(e) {
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
              ? (0, E.jsx)(mr, { cooldown: u.getTime() })
              : (0, E.jsx)(es.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: j.intl.string(j.t["2mcafz"]),
                });
    let d = s || l;
    return (0, E.jsxs)("div", {
        className: e6()(m4.iq, { [m4.Mt]: n }),
        children: [
            (0, E.jsxs)("div", {
                className: m4.kd,
                children: [(0, E.jsx)("img", { alt: "", className: m4.bB, src: m1 }), t],
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
                                                        (0, E.jsx)(mk.default, { ...e, guildBoostSlot: i }),
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
                                                        (0, E.jsx)(mw.default, { ...e, guildBoostSlotId: i.id }),
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
                            className: m4.Mj,
                            ...e,
                            children: (0, E.jsx)(mq.j, { size: "xs", color: er.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                        }),
                }),
        ],
    });
}
var m8 = i(185949);
function m9(e) {
    let {
            guildBoostSlots: t,
            guildBoostSlotsByGuildId: i,
            premiumSubscription: n,
            pausedAppliedGuildBoosts: s,
            fractionalPremiumState: l,
        } = e,
        r = tN.A.getArticleURL(M.MVz.GUILD_BOOSTING_FAQ),
        a = n?.isPaused === !0 && l !== sQ.xc.FP_SUB_PAUSED,
        o = t.some((e) => null == e.premiumGuildSubscription),
        u = a && s.length > 0,
        d = a ? u : t.some((e) => null != e.premiumGuildSubscription);
    return o || d
        ? (0, E.jsxs)("div", {
              className: m8.i,
              children: [
                  (0, E.jsxs)("div", {
                      className: m8.b,
                      children: [
                          (0, E.jsx)(eP.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.W5rDjW) }),
                          (0, E.jsx)(es.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: j.intl.format(j.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, E.jsx)(m6, {
                      guildBoostSlots: i,
                      premiumSubscription: n,
                      pausedAppliedGuildBoosts: s,
                      isPaused: a,
                  }),
                  (0, E.jsx)(m7, { guildBoostSlots: t, fractionalPremiumState: l }),
              ],
          })
        : null;
}
var Ae = i(917064),
    At = i(438929);
function Ai() {
    return (0, E.jsxs)("div", {
        className: At.iE,
        children: [
            (0, E.jsx)(eP.D, { variant: "heading-xl/normal", children: j.intl.string(j.t.IzKs3o) }),
            (0, E.jsx)("div", {
                className: At.kR,
                children: Ae.s.map((e, t) => {
                    let i = e.icon;
                    return (0, E.jsxs)(
                        "div",
                        {
                            className: At.Nr,
                            children: [
                                (0, E.jsx)(i, { className: At.Kk }),
                                (0, E.jsx)(es.E, {
                                    className: At.h_,
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
var An = i(232122),
    As = i(539915);
function Al() {
    let [e, t] = S.useState(null),
        [i, n] = S.useState(null);
    return (0, E.jsxs)("div", {
        className: As.iE,
        children: [
            (0, E.jsx)(eP.D, { variant: "heading-xl/normal", children: j.intl.string(j.t.HPJ6Nj) }),
            (0, E.jsx)("ul", {
                className: As.p_,
                children: An.m.map((s, l) => {
                    let r = e === l,
                        a = i === l,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, E.jsxs)(
                        en.D,
                        {
                            tag: "li",
                            className: e6()(As.Aw, { [As.$K]: r }),
                            onClick: () => t((e) => (e === l ? null : l)),
                            onMouseEnter: () => n(l),
                            onMouseLeave: () => n(null),
                            children: [
                                (0, E.jsxs)("div", {
                                    className: As.k7,
                                    children: [
                                        (0, E.jsx)(es.E, {
                                            className: As.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: s.getQuestion(),
                                        }),
                                        (0, E.jsx)(el.a, {
                                            size: "sm",
                                            color: er.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: As.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, E.jsx)(es.E, {
                                        className: As.ZF,
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
var Ar = i(182859),
    Aa = i(853513),
    Ao = i(560378);
function Au() {
    let e = tN.A.getArticleURL(M.MVz.GUILD_SUBSCRIPTIONS);
    return (0, E.jsxs)("div", {
        className: Ao.wx,
        children: [
            (0, E.jsxs)("div", {
                className: Ao.Qs,
                children: [
                    (0, E.jsxs)("div", {
                        className: Ao.B5,
                        children: [
                            (0, E.jsx)("img", { alt: "", className: Ao.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, E.jsx)(eP.D, {
                                variant: "heading-xl/normal",
                                children: j.intl.string(Aa.default.hjvcLO),
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
            (0, E.jsx)(Ar.A, {
                variant: "member",
                className: Ao.iO,
                analyticsLocation: {
                    page: M.liQ.GUILD_BOOSTING_USER_SETTINGS,
                    section: M.JJy.HERO,
                    object: M.ZSU.CARD,
                },
                videoPlacement: "settings_header",
            }),
        ],
    });
}
var Ad = i(315629),
    Ac = i(780082);
function Ag() {
    let e = (0, g.bG)([io.default], () => io.default.getCurrentUser());
    if (null == e || uT.Ay.hasFreeBoosts(e)) return null;
    let t = tN.A.getArticleURL(M.MVz.GUILD_BOOSTING_FAQ);
    return (0, E.jsxs)(Ad.h, {
        color: "nitro-pink",
        className: Ac.vK,
        children: [
            (0, E.jsxs)("div", {
                className: Ac.nw,
                children: [
                    (0, E.jsx)("img", { alt: "", className: Ac.q3, src: m1 }),
                    (0, E.jsxs)("div", {
                        className: Ac.Tm,
                        children: [
                            (0, E.jsx)(es.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: j.intl.format(j.t.Idh1Vs, { count: sQ.M4, boostCount: sQ.M4 }),
                            }),
                            (0, E.jsxs)("div", {
                                className: Ac.xv,
                                children: [
                                    (0, E.jsx)(uu.t, { className: Ac.nE }),
                                    (0, E.jsx)(es.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: j.intl.format(j.t["6UAu+f"], {
                                            count: sQ.M4,
                                            boostCount: sQ.M4,
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
                onClick: mF.e,
            }),
        ],
    });
}
var Am = i(894206);
function AA() {
    let e = (0, g.bG)([g7.A], () => g7.A.affinities),
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
              className: Am.i,
              children: [
                  (0, E.jsx)(eP.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.r90Wgo) }),
                  (0, E.jsx)("div", { className: Am.k, children: i.map((e) => (0, E.jsx)(m$, { guildId: e }, e)) }),
              ],
          });
}
var Ah = i(140909);
function AE(e) {
    let { count: t, disabledReason: n } = e,
        s = tN.A.getArticleURL(M.MVz.GUILD_BOOSTING_FAQ);
    return (0, E.jsxs)(Ad.h, {
        color: "nitro-pink",
        className: Ah.vK,
        children: [
            (0, E.jsxs)("div", {
                className: Ah.nw,
                children: [
                    (0, E.jsxs)("div", {
                        className: Ah.MD,
                        children: [
                            (0, E.jsx)("img", { alt: "", className: Ah.F8, src: m1 }),
                            (0, E.jsx)("div", {
                                className: e6()(Ah.qS, "theme-dark"),
                                children: (0, E.jsx)("span", { className: Ah.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, E.jsxs)("div", {
                        className: Ah.Tm,
                        children: [
                            (0, E.jsx)(es.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: j.intl.format(j.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, E.jsxs)("div", {
                                className: Ah.xv,
                                children: [
                                    (0, E.jsx)(uu.t, { className: Ah.nE }),
                                    (0, E.jsx)(es.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: j.intl.format(j.t["6UAu+f"], {
                                            count: sQ.M4,
                                            boostCount: sQ.M4,
                                            helpdeskArticle: s,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)(mj.A, {
                shouldShow: null != n,
                text: n ?? "",
                "aria-label": n,
                children: (e) =>
                    (0, E.jsx)(eG.$, {
                        ...e,
                        variant: "primary",
                        size: "sm",
                        icon: gO._,
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
                                                (0, mR.g)({
                                                    analyticsLocations: [],
                                                    analyticsLocation: {
                                                        page: M.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                        section: M.JJy.SETTINGS_PREMIUM,
                                                        object: M.ZSU.BUTTON_CTA,
                                                        objectType: M.AnalyticsObjectTypes.BUY,
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
function AS(e) {
    let { premiumSubscription: t } = e,
        i = (0, g.bG)([g5.A], () => g5.A.boostSlots),
        n = S.useMemo(() => Object.values(i), [i]),
        s = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
        l = (0, g.bG)([g7.A], () => g7.A.affinities),
        r = (0, g.bG)([eg.Ay], () => eg.Ay.getFlattenedGuildIds()),
        a = l.length > 0 || r.length > 0,
        o = S.useMemo(() => n.filter((e) => null != e.premiumGuildSubscription), [n]).length,
        u = (0, g.bG)([gG.A], () => gG.A.getCurrentUserAppliedBoosts()),
        { fractionalState: d } = (0, gU.A)({ forceFetch: !0 }),
        c = s?.isPremiumGroupMember(),
        m = t?.isPausedOrPausePending === !0 && d === sQ.xc.NONE,
        A = S.useMemo(() => n.some((e) => null == e.premiumGuildSubscription && e.isAvailable()), [n]),
        h = m ? j.intl.string(j.t.mOWsF1) : A ? void 0 : j.intl.string(j.t.xr4m5B),
        T = S.useMemo(() => {
            if (null == t) return 0;
            let e = uT.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== n.length ? 0 : Math.max(0, e - o);
        }, [t, n.length, o]);
    return (0, E.jsxs)("div", {
        className: mK.GO,
        children: [
            (0, E.jsx)(ci.kb, { className: mK.ek }),
            (0, E.jsx)(Au, {}),
            (0, E.jsx)(Ag, {}),
            T > 0 && (0, E.jsx)(AE, { count: T, disabledReason: h }),
            c && (0, E.jsx)(g4.A, {}),
            !a && (0, E.jsx)(mv, {}),
            (0, E.jsxs)("div", {
                className: mK.C_,
                children: [
                    (0, E.jsx)(m9, {
                        guildBoostSlots: n,
                        guildBoostSlotsByGuildId: i,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: u,
                        fractionalPremiumState: d,
                    }),
                    (0, E.jsx)(AA, {}),
                    (0, E.jsx)(mZ.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, E.jsx)(Ai, {}),
                    (0, E.jsx)(Al, {}),
                ],
            }),
        ],
    });
}
var AT = i(65188);
let Ax = (0, a.E2)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            let e = gP.useConfig({ location: "UserSettingsPremiumGuildSubscriptions" }).enabled;
            S.useEffect(() => {
                sa.h.wait(() => {
                    db.hP(), db.$o(), (0, gR.CD)(), (0, gL.zS)(null, null, M.tF5.DISCOVERY), (0, gR.tO)(!0);
                });
            }, []);
            let { hasFetchedSubscriptions: t, premiumSubscription: i } = (0, g.cf)([d4.A], () => ({
                    hasFetchedSubscriptions: d4.A.hasFetchedSubscriptions(),
                    premiumSubscription: d4.A.getPremiumTypeSubscription(),
                })),
                n = (0, gD.Y)(),
                s = (0, g.bG)([d6.A], () => d6.A.hasFetchedPaymentSources),
                l = (0, g.bG)([gG.A], () => gG.A.isFetchingCurrentUserAppliedBoosts),
                r = !t || !n || !s || l,
                [a, o] = S.useState(!1);
            return (r || a || o(!0), r && !a)
                ? (0, E.jsx)("div", { className: e6()(AT.kL, AT.Lq), children: (0, E.jsx)(dp.y, {}) })
                : (0, E.jsxs)("div", {
                      className: AT.kL,
                      children: [
                          (0, E.jsx)("div", { className: AT.Tp }),
                          (0, E.jsx)("div", {
                              className: AT.Qs,
                              children: e
                                  ? (0, E.jsx)(AS, { premiumSubscription: i })
                                  : (0, E.jsx)(mW, { premiumSubscription: i }),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t["+CbP2v"]), j.intl.string(j.t.Nn1lJy)],
    }),
    Ap = (0, a.zZ)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [Ax] }),
    Af = (0, a.t_)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => j.intl.string(j.t["+CbP2v"]),
        buildLayout: () => [Ap],
    }),
    AN = (0, a.i4)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["+CbP2v"]),
        icon: gO._,
        buildLayout: () => [Af],
    });
var A_ = i(153659),
    AI = i(155984),
    AC = i(357758),
    Ab = i(262077),
    Ay = i(696986),
    Av = i(819411);
function Aj(e) {
    let { onClickManageSubscription: t, count: i } = e;
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsx)(eP.D, { variant: "heading-md/bold", children: j.intl.string(j.t["KzCF/6"]) }),
            (0, E.jsx)(Ay.h, { size: 4 }),
            (0, E.jsx)(es.E, { variant: "text-md/normal", className: Av.yV, children: j.intl.string(j.t["3D7qCu"]) }),
            (0, E.jsx)(Ay.h, { size: 24 }),
            (0, E.jsxs)("div", {
                className: Av.Nr,
                children: [
                    (0, E.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: Av.RI }),
                    (0, E.jsxs)("div", {
                        className: Av.FS,
                        children: [
                            (0, E.jsx)(eP.D, {
                                variant: "heading-xl/semibold",
                                className: Av.wx,
                                children: j.intl.string(j.t["KzCF/6"]),
                            }),
                            (0, E.jsx)(es.E, {
                                variant: "text-md/normal",
                                className: Av.h_,
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
var AO = i(872351),
    AR = i(9113),
    AL = i(599941),
    AD = i(384684),
    AP = i(2242);
let AG = [];
var AU = i(912851),
    AM = i(146795);
let AV = function (e) {
    let { label: t, onClick: i, submitting: n } = e;
    return (0, E.jsx)(en.D, {
        onClick: n ? void 0 : i,
        className: AM.x6,
        children: (0, E.jsxs)("div", {
            className: AM.hQ,
            children: [
                n
                    ? (0, E.jsx)(dp.y, { type: dp.y.Type.PULSING_ELLIPSIS, className: AM.__invalid_spinner })
                    : (0, E.jsx)(es.E, { variant: "text-md/medium", className: AM.Pf, children: t }),
                (0, E.jsx)(el.a, { size: "md", color: "currentColor", className: AM.UE }),
            ],
        }),
    });
};
var Ak = i(465932),
    Aw = i(543767),
    AF = i(420139),
    AB = i(790284),
    Az = i(636194),
    AX = i(624456),
    AY = i(710144),
    AH = i(815332),
    AK = i(162093),
    AW = i(969389);
let AZ = (e) => {
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
    let g = n.role_benefits.benefits.filter((e) => e.ref_type === AP.bN.CHANNEL),
        m = n.role_benefits.benefits.filter((e) => e.ref_type === AP.bN.INTANGIBLE),
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
        children: (0, E.jsxs)(Q.B, {
            gap: 8,
            children: [
                null != u ? (0, E.jsx)(q.w, { type: "critical", children: u.message }) : null,
                (0, E.jsx)(AK.x, { listingId: n.id, guildId: i.guild_id, className: AW.P }),
            ],
        }),
    });
};
var Aq = i(319225),
    AQ = i(746080),
    AJ = i(47685);
function A$(e) {
    let { label: t, value: i, showInfoIcon: n, infoIconTooltipText: s } = e;
    return (0, E.jsxs)("div", {
        className: AJ.L0,
        children: [
            (0, E.jsxs)("div", {
                className: AJ.a5,
                children: [
                    (0, E.jsx)(eP.D, { variant: "heading-deprecated-12/semibold", className: AJ.HU, children: t }),
                    n &&
                        (0, E.jsx)(tr.m, {
                            text: s,
                            children: (0, E.jsx)(lJ.m, { size: "xs", color: "currentColor", className: AJ.Mo }),
                        }),
                ],
            }),
            (0, E.jsx)(eP.D, { variant: "heading-xl/semibold", className: AJ.sx, children: i }),
        ],
    });
}
function A0(e) {
    let { subscription: t } = e,
        { analyticsLocations: i } = (0, nZ.Ay)(),
        [n] = (0, Aw.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: i,
            analyticsLocation: e1.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        s = (0, g.bG)([d6.A], () => d6.A.hasFetchedPaymentSources);
    return null != n && s ? (0, E.jsx)(AF.A, { subscription: t, currentInvoicePreview: n }) : (0, E.jsx)(dp.y, {});
}
function A1(e) {
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
                  className: AJ.__invalid_rowButtons,
                  children: i
                      ? (0, E.jsx)(eG.$, {
                            variant: "primary",
                            text: j.intl.string(j.t.y3mAE4),
                            onClick: r,
                            loading: n,
                        })
                      : (0, E.jsxs)(E.Fragment, {
                            children: [
                                !t && !s && (0, E.jsx)(AV, { label: j.intl.string(j.t.FRbWR8), onClick: a }),
                                (0, E.jsx)(AV, { label: j.intl.string(j.t.Dx0lF7), onClick: l }),
                            ],
                        }),
              }),
          });
}
let A2 = function (e) {
    let { subscription: t } = e,
        {
            listing: i,
            groupListing: n,
            guild: s,
            expanded: l,
            handleToggleExpanded: r,
            subscriptionInfo: a,
        } = (function (e) {
            let t = (0, AX.M)(e),
                i = (0, g.bG)([Az.A], () => Az.A.getSubscriptionListingForPlan(t)),
                n = (0, g.bG)([Az.A], () =>
                    null != i ? Az.A.getSubscriptionGroupListingForSubscriptionListing(i.id) : null,
                ),
                s = (0, g.bG)([ec.A], () => ec.A.getGuild(n?.guild_id)),
                [l, r] = S.useState(!1),
                { fetchSubscriptionsSettings: a } = (0, AL.XE)();
            S.useEffect(() => {
                l && null != s && null == Az.A.getSubscriptionSettings(s.id) && a(s.id);
            }, [l, s, a]);
            let o =
                null == i
                    ? void 0
                    : (function (e) {
                          let { subscription: t } = e,
                              i = r4()(t.currentPeriodEnd).format("M/D/YY"),
                              n = null != t.price ? (0, dO.$g)(t.price, t.currency) : "",
                              s = r4()(t.createdAt).format("M/D/YY"),
                              l = t.status === M.Dmq.CANCELED,
                              r = t.status === M.Dmq.PAST_DUE,
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
        { shouldHideGuildPurchaseEntryPoints: A } = (0, Ak.MH)(s?.id),
        h = t?.isPurchasedViaAppleGeneric;
    if (null == n || null == i || null == a) return null;
    async function T() {
        try {
            d(!0), await db.QP(t, m), (0, Aq.E)({ title: j.intl.string(j.t.oPV2cy), body: j.intl.string(j.t.DdRizV) });
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
        className: AJ.kL,
        children: [
            (0, E.jsx)(AY.A, {
                onClick: r,
                className: AJ.N1,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: n } = e;
                    return (0, E.jsxs)(E.Fragment, {
                        children: [
                            null != s && (0, E.jsx)(mc.Ay, { guild: s, active: !0, size: mc.Ay.Sizes.MEDIUM }),
                            (0, E.jsxs)("div", {
                                className: AJ.if,
                                children: [
                                    (0, E.jsx)(es.E, {
                                        variant: "text-md/medium",
                                        className: AJ.J5,
                                        children: null != s ? s.name : j.intl.string(j.t["He+cmd"]),
                                    }),
                                    (0, E.jsxs)("div", {
                                        className: AJ.xp,
                                        children: [
                                            (0, E.jsx)(es.E, {
                                                variant: "text-sm/normal",
                                                className: AJ.KR,
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
                                                                  className: AJ.qc,
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
                                    className: e6()(AJ.D6, { [AJ.S7]: l }),
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
                          (0, E.jsx)("div", { className: AJ.yF }),
                          (0, E.jsx)(AH.A, { groupListingId: n.id, subscription: t, className: AJ.kE }),
                          (0, E.jsxs)("div", {
                              className: AJ.Zx,
                              children: [
                                  (0, E.jsx)(A$, { label: I, value: _ }),
                                  (0, E.jsx)(A$, {
                                      label: j.intl.string(j.t.dltUMH),
                                      value: f,
                                      showInfoIcon: C,
                                      infoIconTooltipText: C ? j.intl.string(j.t["/q6fpa"]) : void 0,
                                  }),
                                  (0, E.jsx)(A$, { label: j.intl.string(j.t.AOcwWB), value: N }),
                              ],
                          }),
                          (0, E.jsx)(Ay.h, { size: 16 }),
                          !x &&
                              !h &&
                              (0, E.jsx)(s4.D, {
                                  label: j.intl.string(j.t.wmMFvA),
                                  children: (0, E.jsx)(A0, { subscription: t }),
                              }),
                          !b &&
                              (0, E.jsx)(A1, {
                                  isTrial: C,
                                  isCancelled: x,
                                  isResubscribing: o,
                                  shouldHideRoleSubscriptionEntryPoints: A,
                                  onCancelSubscriptionClick: () => {
                                      if (null != s) {
                                          var e;
                                          (e = { groupListing: n, listing: i, subscription: t }),
                                              (0, K.openModal)((t) => (0, E.jsx)(AZ, { ...t, ...e }));
                                      }
                                  },
                                  onChangePlanClick: () => {
                                      null != s &&
                                          ((0, s7.pX)(M.BVt.CHANNEL(s.id, AQ.VV.ROLE_SUBSCRIPTIONS)),
                                          (0, sH.default)(),
                                          AU.A.show(
                                              M.kqX.BACK_TO_PREVIOUS_SCREEN,
                                              void 0,
                                              j.intl.string(j.t.DvbaM4),
                                              () => {
                                                  AB.A.setState({ subsection: nw.nR }),
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
var A3 = i(170272);
let A6 = function (e) {
    let { onGoBack: t } = e,
        i = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, g.bG)([AD.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [AD.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                i = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (i = !0);
                            }),
                            i)
                                ? AP.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? AP.M_.NONE
                                  : AP.M_.IN_SUBSCRIPTION_SERVER;
                        })([AD.A]),
                    ) === AP.M_.SUBSCRIBED,
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
                i ?? AG
            );
        })(),
        { loading: n } = (0, AL.eb)(i);
    return ((0, AR.A)(dD.Fr ? "role-subscriptions-user-setting" : void 0), n)
        ? (0, E.jsx)(dp.y, {})
        : 0 === i.length
          ? null
          : (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(eG.$, { text: j.intl.string(j.t.hqyhKQ), icon: AO.z, variant: "secondary", onClick: t }),
                    (0, E.jsx)(Ay.h, { size: 10 }),
                    (0, E.jsx)(i_.n, {
                        label: j.intl.string(j.t["KzCF/6"]),
                        description: j.intl.string(j.t["Y+ucR7"]),
                        children: (0, E.jsx)("div", {
                            className: A3.A,
                            children: i.map((e) => (0, E.jsx)(A2, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var A4 = i(327479),
    A7 = i(334335);
function A5(e) {
    let { onClickManageSubscription: t, count: i } = e;
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsx)(eP.D, { variant: "heading-md/bold", children: j.intl.string(j.t["48ywCu"]) }),
            (0, E.jsx)(Ay.h, { size: 4 }),
            (0, E.jsx)(es.E, { variant: "text-md/normal", className: A7.yV, children: j.intl.string(j.t.VWxmSo) }),
            (0, E.jsx)(Ay.h, { size: 24 }),
            (0, E.jsxs)("div", {
                className: A7.Nr,
                children: [
                    (0, E.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: A7._e }),
                    (0, E.jsxs)("div", {
                        className: A7.FS,
                        children: [
                            (0, E.jsx)(eP.D, {
                                variant: "heading-xl/semibold",
                                className: A7.wx,
                                children: j.intl.string(j.t["48ywCu"]),
                            }),
                            (0, E.jsx)(es.E, {
                                variant: "text-md/normal",
                                className: A7.h_,
                                children: j.intl.format(j.t["/esXLj"], { numSubscriptions: i }),
                            }),
                        ],
                    }),
                    (0, E.jsx)(A4.A, { onClick: t, text: j.intl.string(j.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var A8 = i(548411),
    A9 = i(417098),
    he = i(143582),
    ht = i(915043),
    hi = i(920087);
function hn(e) {
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
        className: e6()(hi.iE, t),
        children: [
            (0, E.jsx)("div", { className: e6()(hi.wx, n), children: i }),
            l && (0, E.jsx)("div", { className: hi.Qs, children: s }),
        ],
    });
}
var hs = i(885996),
    hl = i(144165),
    hr = i(664121),
    ha = i(950305),
    ho = i(943775),
    hu = i(123791),
    hd = i(632510);
let hc = S.createContext({ isOpen: !1, toggleOpen: () => {} });
function hg(e) {
    let { children: t } = e,
        [i, n] = S.useReducer((e) => !e, !1),
        s = S.useMemo(() => ({ isOpen: i, toggleOpen: n }), [i]);
    return (0, E.jsx)(hc.Provider, { value: s, children: t(i) });
}
hg.Toggle = function (e) {
    let { className: t, text: i } = e,
        { isOpen: n, toggleOpen: s } = S.useContext(hc),
        l = n ? cG.t : el.a,
        r = null != i ? i : n ? j.intl.string(j.t.fgq1gs) : j.intl.string(j.t.XJuakA);
    return (0, E.jsxs)(en.D, {
        className: e6()(hd.L, t),
        onClick: s,
        children: [
            (0, E.jsx)(es.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, E.jsx)(l, { size: "sm", color: "currentColor" }),
        ],
    });
};
var hm = i(243217),
    hA = i(328968),
    hh = i(163437),
    hE = i(473545);
function hS(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var hT = i(184451),
    hx = (((s = {})[(s.LOADING = 0)] = "LOADING"), (s[(s.DONE = 1)] = "DONE"), (s[(s.ERROR = 2)] = "ERROR"), s);
function hp(e) {
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
        } = (0, g.cf)([c6.A, c4.A, hA.A, ec.A], () => {
            let e,
                i = c6.A.get(r),
                n = null != i ? c4.A.get(i.skuId) : void 0,
                a = n?.applicationId,
                o = null != i ? hA.A.getForSKU(i.skuId) : null,
                u = null != o && (0, hh.PJ)(o.skuFlags),
                d = u && null != s ? ec.A.getGuild(s) : void 0,
                c = (0, hh.Uo)(t, n),
                g = u && null != s && null == d;
            if (!1 === c && null != l && l.items.length > 0) {
                let t = l.items[0];
                e = c6.A.get(t.planId) ?? void 0;
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
        f = S.useMemo(() => (null != p ? (0, ho.A)(p, 100) : null), [p]),
        N = m?.deleted ?? !1,
        _ = null != m && (0, hh.Se)(m),
        I = t.status === M.Dmq.PAST_DUE,
        { analyticsLocations: C } = (0, nZ.Ay)(),
        [b] = (0, Aw.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: C,
            analyticsLocation: e1.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        y = hS(t.currentPeriodEnd),
        v = 0 === n;
    return (0, E.jsxs)(hn, {
        headerClassName: hT.dL,
        header:
            !1 === v
                ? (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsxs)("div", {
                              className: hT.VW,
                              children: [
                                  null != f &&
                                      (0, E.jsx)(hl._, { src: f.href, imageClassName: hT.Z2, width: 40, height: 40 }),
                                  (0, E.jsxs)("div", {
                                      className: hT.aF,
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
                              className: hT.Pz,
                              children:
                                  null != p &&
                                  null != u &&
                                  null != m &&
                                  (0, E.jsx)(hC, {
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
                (0, E.jsx)(hI, {
                    type: "warning",
                    title: _
                        ? j.intl.formatToPlainString(j.t.QOnM1y, { subscriptionPeriodEnd: y })
                        : j.intl.formatToPlainString(j.t.HOaZu8, { subscriptionPeriodEnd: y }),
                }),
            !A && h && (0, E.jsx)(hI, { type: "warning", title: j.intl.string(j.t.SmSP8Q) }),
            I && (0, E.jsx)(hI, { type: "danger", title: j.intl.string(j.t.fvOqBo) }),
            (0, E.jsxs)("div", {
                className: hT.zH,
                children: [
                    (0, E.jsx)(h_, {
                        title: j.intl.string(j.t["5D/KEH"]),
                        content: d
                            ? (0, E.jsxs)(E.Fragment, {
                                  children: [
                                      (0, E.jsxs)("span", {
                                          className: hT.yW,
                                          children: [(0, E.jsx)(hr.R, { size: "xs" }), j.intl.string(j.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, E.jsxs)("span", {
                                              className: hT._t,
                                              children: [
                                                  (0, E.jsx)(es.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: j.intl.format(j.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, E.jsx)(mc.Ay, { guild: c, size: mc.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, E.jsxs)("span", {
                                  className: hT.yW,
                                  children: [(0, E.jsx)(ha.n, { size: "xs" }), j.intl.string(j.t["6anEVv"])],
                              }),
                    }),
                    (0, E.jsx)(hf, { invoicePreview: b, subscriptionPlan: o }),
                    (0, E.jsx)(h_, {
                        title: j.intl.string(j.t.dnUzb6),
                        content: hS(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, E.jsx)(hN, { isCancelled: A, subscriptionPeriodEnd: y, renewalPlan: x }),
                ],
            }),
            (0, E.jsx)(hy, {
                subscription: t,
                currentInvoicePreview: b,
                loadingState: n,
                isDeleted: N,
                isCancelled: A,
            }),
            null != p &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, E.jsx)(hb, { appId: p.id, listingBenefits: u.benefits }),
        ],
    });
}
function hf(e) {
    let { subscriptionPlan: t, invoicePreview: i } = e;
    if (null == t) return (0, E.jsx)(h_, { title: j.intl.string(j.t.KI7ERx), content: "" });
    let n = (0, dO.CE)((0, dO.$g)(t.price, t.currency), t.interval, t.intervalCount),
        s = i?.findInvoiceItemByPlanId(t.id);
    if (null == s) return (0, E.jsx)(h_, { title: j.intl.string(j.t.KI7ERx), content: n });
    let l = (0, dO.CE)((0, dO.$g)(s.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, E.jsx)(h_, {
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
function hN(e) {
    let { isCancelled: t, subscriptionPeriodEnd: i, renewalPlan: n } = e;
    if (null != n) {
        let e = (0, dO.CE)((0, dO.$g)(n.price, n.currency), n.interval, n.intervalCount);
        return (0, E.jsx)(h_, {
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
    return (0, E.jsx)(h_, { title: t ? j.intl.string(j.t.enxcAl) : j.intl.string(j.t["Ms+6Zq"]), content: i });
}
function h_(e) {
    let { title: t, content: i } = e;
    return (0, E.jsxs)("div", {
        className: hT.nM,
        children: [
            (0, E.jsx)(es.E, { variant: "text-sm/medium", children: t }),
            (0, E.jsx)(es.E, { variant: "text-sm/medium", className: hT.u4, children: i }),
        ],
    });
}
function hI(e) {
    let { type: t, title: i } = e;
    return (0, E.jsx)(tf.p, {
        messageType: "warning" === t ? tf.Y.WARNING : tf.Y.ERROR,
        className: hT.Xm,
        children: (0, E.jsx)(es.E, { variant: "text-sm/normal", children: i }),
    });
}
function hC(e) {
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
        c = (0, hh.Se)(s),
        { analyticsLocations: m } = (0, nZ.Ay)(),
        [A, h] = S.useState(!1),
        T = (0, hu.C)(t.id),
        x = (0, g.bG)([c4.A], () => c4.A.getParentSKU(n.skuId), [n.skuId]),
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
                let { default: t } = await Promise.all([i.e("47869"), i.e("52396")]).then(i.bind(i, 115623));
                return (i) => (0, E.jsx)(t, { ...i, storeListing: n, subscription: hm.A.createFromServer(e) });
            });
        } finally {
            h(!1);
        }
    }
    return (0, E.jsxs)("div", {
        className: hT.fw,
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
function hb(e) {
    let { appId: t, listingBenefits: i } = e;
    return (0, E.jsx)(hg, {
        children: (e) =>
            (0, E.jsxs)("div", {
                className: hT.PX,
                children: [
                    (0, E.jsxs)("div", {
                        className: hT.wV,
                        children: [
                            e && (0, E.jsx)(es.E, { variant: "text-sm/semibold", children: j.intl.string(j.t.mORL67) }),
                            (0, E.jsx)(hg.Toggle, {
                                className: hT.Bh,
                                text: e ? j.intl.string(j.t.gsbFAw) : j.intl.string(j.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? i.map((e) => {
                              let { id: i, name: n, description: s, icon: l } = e;
                              return (0, E.jsx)(hs.FY, { header: n, icon: (0, hE.N)(t, l), description: s }, i);
                          })
                        : null,
                ],
            }),
    });
}
function hy(e) {
    let { subscription: t, currentInvoicePreview: i, loadingState: n, isDeleted: s, isCancelled: l } = e;
    return null == i
        ? null
        : 0 === n
          ? (0, E.jsx)("div", {
                className: hT.Ji,
                children: (0, E.jsx)(s4.D, {
                    label: j.intl.string(j.t.azZaZa),
                    children: (0, E.jsx)(dp.y, { type: dp.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === n
            ? (0, E.jsx)("div", {
                  className: hT.Ji,
                  children: (0, E.jsxs)(A9.$T, {
                      color: A9.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          j.intl.format(j.t.IIHUUF, { subscriptionId: t.id }),
                          (0, E.jsx)("br", {}),
                          j.intl.format(j.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, E.jsx)("div", {
                  className: hT.Ji,
                  children: (0, E.jsx)(s4.D, {
                      label: j.intl.string(j.t.azZaZa),
                      children: (0, E.jsx)(AF.A, { subscription: t, currentInvoicePreview: i, disabled: s || l }),
                  }),
              });
}
var hv = (((l = {}).HOME = "HOME"), (l.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), l);
i(938796);
var hj = i(38405);
let hO = (0, g.UT)(c6.A, {
    getQueryId: M.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = c6.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && hj.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, gL.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var hR = i(240248),
    hL = i(237218),
    hD = i(988325);
function hP(e) {
    let { children: t, lineClamp: i = 2, ...n } = e,
        [s, l] = S.useState(!1),
        [r, a] = S.useState(null),
        o =
            null != r &&
            (0, E.jsx)("button", {
                className: hD.x6,
                onClick: () => l((e) => !e),
                children: (0, E.jsxs)(es.E, {
                    className: hD.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        s ? j.intl.string(j.t["JQX/Pb"]) : j.intl.string(j.t.Fbrd8J),
                        s
                            ? (0, E.jsx)(cG.t, { color: er.A.colors.TEXT_BRAND, size: "xs" })
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
                    className: hD.Qs,
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
var hG = i(827991);
function hU(e) {
    let { cta: t, storeListing: i, className: n } = e,
        { applicationId: s, benefits: l, description: r } = i,
        a = S.useMemo(() => (null == i.thumbnail ? null : (0, hL.t)(s, i.thumbnail, 256)), [s, i.thumbnail]),
        { data: o } = hO(i.skuId),
        u = S.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, dO._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, E.jsxs)(hn, {
              className: e6()(hG.iE, n),
              header: (0, E.jsxs)(E.Fragment, {
                  children: [
                      (0, E.jsxs)("div", {
                          className: hG.qd,
                          children: [
                              null != a &&
                                  (0, E.jsx)(hl._, { src: a.href, imageClassName: hG.rW, width: 48, height: 48 }),
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
                  !(0, hR.uJ)(r) &&
                      (0, E.jsx)("div", {
                          className: hG.h_,
                          children: (0, E.jsx)(hP, { variant: "text-sm/medium", children: r }),
                      }),
                  null != l &&
                      l.length > 0 &&
                      (0, E.jsx)("div", {
                          className: hG.PX,
                          children: l.map((e) => {
                              let { id: t, name: i, description: n, icon: l } = e;
                              return (0, E.jsx)(hs.FY, { header: i, icon: (0, hE.N)(s, l), description: n }, t);
                          }),
                      }),
              ],
          });
}
var hM = i(185438),
    hV = i(386011);
function hk(e) {
    let {
            app: t,
            currentSubscription: i,
            currentListing: n,
            alternativeListings: s,
            navigateToHome: l,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, ho.A)(t, 100),
        u = (0, hh.PJ)(r.flags),
        d = u ? hr.R : ha.n,
        c = u ? j.intl.string(j.t["46YF2D"]) : j.intl.string(j.t.fFyGiA),
        m = i.metadata?.application_subscription_guild_id,
        A = (0, g.bG)([ec.A], () => (u && null != m ? ec.A.getGuild(m) : void 0), [m, u]),
        h = (0, g.bG)([c4.A], () => {
            if (null != a) return c4.A.get(a);
        }, [a]),
        S = hS(i.currentPeriodEnd);
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsxs)("div", {
                className: hV.wx,
                children: [
                    null != o && (0, E.jsx)(hl._, { src: o.href, imageClassName: hV.Z2, width: 48, height: 48 }),
                    (0, E.jsxs)("div", {
                        children: [
                            (0, E.jsx)(eP.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, E.jsxs)("div", {
                                className: hV.p4,
                                children: [
                                    (0, E.jsxs)(eP.D, {
                                        variant: "heading-md/normal",
                                        className: hV.N4,
                                        children: [(0, E.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != A &&
                                        (0, E.jsxs)(E.Fragment, {
                                            children: [
                                                (0, E.jsx)(es.E, { variant: "text-md/normal", children: "\u2022" }),
                                                (0, E.jsxs)("span", {
                                                    className: hV.vP,
                                                    children: [
                                                        (0, E.jsx)(mc.Ay, { guild: A, size: mc.Ay.Sizes.SMOL }),
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
            (0, E.jsx)(hg, {
                children: (e) =>
                    (0, E.jsxs)("div", {
                        className: hV._B,
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
                            (0, E.jsx)(hg.Toggle, {
                                text: e ? j.intl.string(j.t["1Rkq/E"]) : j.intl.string(j.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, E.jsxs)("div", {
                className: hV.x0,
                children: [
                    (0, E.jsx)(hU, {
                        storeListing: n,
                        className: hV.o3,
                        cta: (0, E.jsxs)("div", {
                            className: hV.cJ,
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
                                  hU,
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
                            : (0, E.jsx)(hw, { storeListing: e, guildId: m, navigateToHome: l }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function hw(e) {
    let { storeListing: t, guildId: i, navigateToHome: n } = e,
        { openModal: s } = (0, hM.A)({
            analyticsLocation: M.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: i,
            disableGuildSelector: !0,
            onComplete: n,
        });
    return (0, E.jsx)(hU, {
        storeListing: t,
        cta: (0, E.jsx)(eG.$, { variant: "primary", size: "sm", text: j.intl.string(j.t["+KwmBt"]), onClick: s }),
    });
}
class hF extends S.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, E.jsxs)(A9.$T, {
                  color: A9.Hv.DANGER,
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
function hB(e) {
    let { subscriptions: t, updateHeader: i } = e,
        [n, s] = S.useState({ route: hv.HOME }),
        { route: l } = n;
    function r() {
        s({ route: hv.HOME });
    }
    let a = (e) => {
            s({ route: hv.SWITCH_APP_PLANS, ...e }), i(j.intl.string(j.t.VFqtkP), r);
        },
        [o, u] = S.useState({});
    S.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: hx.LOADING })),
                (0, he._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: hx.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: hx.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, ht.E)(),
        c = d !== ht.mJ.LOADED;
    switch (l) {
        case hv.HOME:
            return (0, E.jsx)(E.Fragment, {
                children: t.map((e) =>
                    (0, E.jsx)(
                        hF,
                        {
                            subscription: e,
                            children: (0, E.jsx)(hp, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? hx.LOADING : (o[e.id] ?? hx.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case hv.SWITCH_APP_PLANS:
            let { route: g, ...m } = n;
            return (0, E.jsx)(hk, { ...m, navigateToHome: r });
        default:
            (0, N.xb)(l);
    }
}
var hz = i(470464);
function hX(e) {
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
        null == n && (n = (0, E.jsx)(hY, { onBack: t, title: j.intl.string(j.t["DB/m9a"]) })),
        (0, E.jsxs)("div", {
            children: [
                n,
                (0, E.jsx)("div", {
                    className: hz.A,
                    children: (0, E.jsx)(hB, {
                        subscriptions: i,
                        updateHeader: function (e, t) {
                            s(
                                (0, E.jsx)(hY, {
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
function hY(e) {
    let { onBack: t, title: i } = e;
    return (0, E.jsxs)("div", {
        className: hz.D,
        children: [
            (0, E.jsx)(lq.K, {
                "aria-label": j.intl.string(j.t["13/7kX"]),
                icon: () => (0, E.jsx)(A8.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, E.jsx)(eP.D, { variant: "heading-lg/semibold", children: i }),
        ],
    });
}
var hH = i(881489),
    hK = i(366999),
    hW = i(466919),
    hZ = i(441924);
function hq(e) {
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
        ? ((t = j.intl.string(hW.default["/S02sx"])), (i = j.intl.string(hW.default.OPJNST)))
        : n
          ? ((t = j.intl.string(j.t["hT6i/0"])),
            (i = null != a ? j.intl.format(j.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = j.intl.string(j.t["3G0CTC"])),
            (i = r === sQ.xc.FP_SUB_PAUSED ? j.intl.format(j.t.MMvaIG, { resumeDate: l.toDate() }) : null));
    let u = e6()({ [hZ.Hs]: n, [hZ.mT]: !n }),
        d = e6()({ [hZ.CQ]: n, [hZ.ZM]: !n }),
        c = e6()({ [hZ.EM]: !n });
    return (0, E.jsxs)("div", {
        className: hZ.r6,
        children: [
            (0, E.jsxs)("div", {
                className: hZ.Nv,
                children: [
                    (0, E.jsx)(eP.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== i && (0, E.jsx)(es.E, { variant: "text-sm/normal", children: i }),
                ],
            }),
            !o &&
                (0, E.jsx)("div", {
                    className: hZ.ZS,
                    children: (0, E.jsx)("div", {
                        className: u,
                        children: (0, E.jsx)(es.E, { variant: "text-sm/semibold", className: d, children: s }),
                    }),
                }),
        ],
    });
}
let hQ = function (e) {
    let { fractionalPremiumInfo: t, className: i, activationDate: n, hasPremiumGroup: s } = e,
        l = (0, uT.kX)(t),
        r = l.length > 0,
        a = (0, hK.Ay)(t.endsAt, hK.yE.SHORT_TIME),
        o = r ? l : a;
    return (0, E.jsx)("div", {
        children: (0, E.jsxs)("div", {
            className: e6()(i, hZ.f8),
            children: [
                (0, E.jsx)("div", {
                    className: hZ.J_,
                    children: (0, E.jsxs)("div", {
                        className: hZ.Bh,
                        children: [
                            (0, E.jsx)("div", {
                                className: hZ.xt,
                                children: (0, E.jsx)(uu.t, { size: "md", color: "white", className: hZ.T8 }),
                            }),
                            (0, E.jsx)("div", {
                                className: hZ.pt,
                                children: (0, E.jsx)(eP.D, {
                                    variant: "heading-md/semibold",
                                    children: j.intl.string(j.t.DFMPWS),
                                }),
                            }),
                            (0, E.jsx)(es.E, {
                                className: hZ.PJ,
                                variant: "text-md/semibold",
                                children: l.length > 0 ? l : j.intl.string(j.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, E.jsx)(hq, {
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
var hJ = i(868942);
function h$(e) {
    let t,
        {
            user: i,
            planId: n,
            count: s,
            userPremiumSubscription: l,
            unconsumedFractionalPremiumUnits: r = [],
            hasPremiumGroup: a,
        } = e,
        [o, u] = (0, g.yK)([c6.A], () => [c6.A.get(n), null != l ? c6.A.get(l.planId) : null]);
    if (null == o || uT.Ay.getInterval(n).intervalType !== sQ.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        c = o.skuId === d,
        m = uT.Ay.getDisplayName(n);
    if (a) t = j.intl.string(hW.default["5asczk"]);
    else if (c && null != l) {
        let e;
        e = new Date(l.status === M.Dmq.PAUSED && null != l.pauseEndsAt ? l.pauseEndsAt : l.currentPeriodEnd);
        let i = (0, uT._e)(e, r);
        t = j.intl.formatToPlainString(j.t["5CNRRA"], { date: i ?? 0 });
    } else t = j.intl.formatToPlainString(j.t.eNXZ5O, { planName: m });
    let A = i.hasFreePremium() || (null != l && l.isPurchasedExternally);
    return (0, E.jsxs)("div", {
        className: hZ.Bh,
        children: [
            (0, E.jsx)("div", {
                className: e6()({
                    [hZ.sr]: o.skuId === sQ.pe.TIER_0,
                    [hZ.lP]: o.skuId === sQ.pe.TIER_1,
                    [hZ.eb]: o.skuId === sQ.pe.TIER_2,
                }),
                children: (0, E.jsx)(uu.t, { size: "md", color: "currentColor", className: hZ.Kk }),
            }),
            (0, E.jsxs)("div", {
                className: hZ.pt,
                children: [
                    (0, E.jsx)(eP.D, {
                        variant: "heading-md/semibold",
                        children: j.intl.format(j.t.LzobT9, { planName: m }),
                    }),
                    !A &&
                        (0, E.jsx)(eP.D, {
                            className: hZ.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, E.jsx)(es.E, {
                className: hZ.PJ,
                variant: "text-md/semibold",
                children: j.intl.format(j.t["ess/xl"], { count: s }),
            }),
        ],
    });
}
let h0 = function (e) {
    let { className: t, entitlements: i } = e,
        n = eZ()(Array.from(i))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: i, consumed: n } = e;
                return null != t && null != i && !n;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        s = (0, g.yK)([cK.A], () => cK.A.getUnactivatedFractionalPremiumUnits()),
        l = (0, g.bG)([d4.A], () => d4.A.getPremiumSubscription()),
        r = (0, g.bG)([d4.A], () => null == d4.A.getPremiumTypeSubscription()),
        a = Object.keys(n).some((e) => e === sQ.gD.PREMIUM_MONTH_TIER_1),
        o = (0, g.bG)([io.default], () => io.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsx)("div", {
                className: e6()(t, hZ.xF, hZ.J_),
                children: Object.keys(n).map((e) =>
                    (0, E.jsx)(
                        h$,
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
                            className: hZ.eT,
                            variant: "text-md/normal",
                            children: j.intl.string(j.t["VNr4+O"]),
                        }),
                        (0, E.jsx)(hJ.i, {}),
                    ],
                }),
        ],
    });
};
var h1 = i(50919);
function h2(e) {
    let t,
        { subscription: i, withOverheadSeparator: n } = e,
        { analyticsLocations: s } = (0, nZ.Ay)(),
        [l] = (0, Aw.YV)({
            subscriptionId: i.id,
            renewal: !0,
            analyticsLocations: s,
            analyticsLocation: e1.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == l) return null;
    let r = n ? h1.r : h1.a,
        a = l.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, uT.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = c6.A.get(o);
    tz()(null != u, "Missing plan");
    let d = (0, dO.$g)(l.total, l.currency);
    return (
        u.interval === sQ.WT.YEAR
            ? (t = j.intl.format(j.t["jPz/39"], {
                  price: d,
                  termsUrl: M.X7G.TERMS,
                  paidURL: M.X7G.PAID_TERMS,
                  privacyUrl: M.X7G.PRIVACY,
              }))
            : u.interval === sQ.WT.MONTH &&
              (t =
                  1 === u.intervalCount
                      ? j.intl.format(j.t.m27GpI, {
                            price: d,
                            termsUrl: M.X7G.TERMS,
                            paidURL: M.X7G.PAID_TERMS,
                            privacyUrl: M.X7G.PRIVACY,
                        })
                      : j.intl.format(j.t["9xf5Vx"], {
                            price: d,
                            termsUrl: M.X7G.TERMS,
                            paidURL: M.X7G.PAID_TERMS,
                            privacyUrl: M.X7G.PRIVACY,
                            intervalCount: u.intervalCount,
                        })),
        (0, E.jsx)(es.E, { color: "text-muted", className: r, variant: "text-xs/normal", children: t })
    );
}
function h3(e) {
    let { subscription: t, withOverheadSeparator: i } = e;
    return t.status === M.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, E.jsx)(h2, { subscription: t, withOverheadSeparator: i });
}
var h6 = i(37397),
    h4 = i(558808);
let h7 = { [nw.nR]: "role_subscriptions_panel", [nw.PZ]: "application_subscriptions_panel" };
function h5() {
    return (0, E.jsx)(eb.Z, {
        className: h4.wb,
        type: eb.Z.Types.CUSTOM,
        children: (0, E.jsxs)(rn.A, {
            align: rn.A.Align.CENTER,
            children: [
                (0, E.jsx)(p.A, { game: null, size: p.M.SMALL, className: h4.pV }),
                (0, E.jsx)("span", { className: h4.O, children: j.intl.string(j.t["jy/hyj"]) }),
            ],
        }),
    });
}
function h8(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, AC._)(e, t));
}
function h9() {
    let e = (0, g.bG)([cK.A], () => cK.A.getForApplication(sQ.tv), [], h8);
    return (
        S.useEffect(() => {
            (0, gl.LM)(sQ.tv);
        }, []),
        (0, E.jsx)(i_.n, {
            label: j.intl.string(j.t["2GKrvn"]),
            description: j.intl.string(j.t.kNEjGm),
            children:
                null != e && uT.Ay.hasAccountCredit(e)
                    ? (0, E.jsx)(h0, { className: h4.fX, entitlements: e })
                    : (0, E.jsx)(h5, {}),
        })
    );
}
function Ee() {
    return (0, E.jsx)("hr", { className: h4.hr });
}
let Et = function () {
        var e;
        let t = (0, g.bG)([d4.A], () => d4.A.getPremiumTypeSubscription()),
            i = (0, Ab.A)({ subscriptionFilter: (e) => h6.Hy.has(e.status) }),
            n = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
            s = i.length > 1,
            l = (0, g.bG)(
                [d6.A],
                () => (null != t && null != t.paymentSourceId ? d6.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, g.bG)([d4.A], () => d4.A.hasFetchedSubscriptions()),
            a = (0, g.bG)([dj.A], () => dj.A.isBusy),
            o = (0, gD.Y)(),
            d = AB.A.useField("subsection");
        S.useEffect(() => {
            (0, rQ._)(null != d ? h7[d] : u.X.SUBSCRIPTIONS_PANEL);
        }, [d]);
        let c = (0, g.bG)([d4.A], () => d4.A.getActiveApplicationSubscriptions()?.length ?? 0),
            m = (0, g.bG)(
                [d4.A],
                () =>
                    Object.values(d4.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === M.rzx.GUILD)
                        .filter((e) => e.status !== M.Dmq.ENDED).length,
            ),
            A = (0, gU.A)({ forceFetch: !0 }),
            h = (0, hH.ds)(),
            T = null !== t ? t.currentPeriodEnd : void 0,
            x =
                !(h && !(A.unactivatedUnits.length > 0)) &&
                (A.fractionalState !== sQ.xc.NONE || A.unactivatedUnits.length > 0);
        return (S.useEffect(
            () => (
                sa.h.wait(() => {
                    (0, gL.zS)(), db.hP(), (0, gR.CD)(), db.$o();
                }),
                function () {
                    AB.A.resetState();
                }
            ),
            [],
        ),
        eF.A.enabled)
            ? (0, E.jsx)(dT.A, {})
            : r && o
              ? d === nw.nR
                  ? (0, E.jsx)(A6, { onGoBack: () => AB.A.setState({ subsection: null }) })
                  : d === nw.PZ
                    ? (0, E.jsx)(hX, { onGoBack: () => AB.A.setState({ subsection: null }) })
                    : (0, E.jsx)("div", {
                          className: h4.kL,
                          children: (0, E.jsxs)("div", {
                              className: h4.Qs,
                              children: [
                                  s ? (0, E.jsx)(h6.Sb, {}) : null,
                                  null != t
                                      ? (0, E.jsx)(h6.Ay, {
                                            subscription: t,
                                            paymentSource: l,
                                            busy: a,
                                            subscriptions: i,
                                        })
                                      : (0, E.jsx)(h6.TC, {}),
                                  x &&
                                      ((e = !!n?.isPremiumWithPremiumGroup()),
                                      (0, E.jsxs)("section", {
                                          children: [
                                              (0, E.jsx)(eP.D, {
                                                  variant: "heading-md/bold",
                                                  className: h4.HL,
                                                  children: j.intl.string(j.t.Obre8v),
                                              }),
                                              (0, E.jsx)(es.E, {
                                                  variant: "text-md/normal",
                                                  className: h4.JU,
                                                  children: j.intl.format(j.t["7Zi06b"], {
                                                      helpCenterLink: tN.A.getArticleURL(
                                                          M.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, E.jsx)(hQ, {
                                                  className: h4.fX,
                                                  fractionalPremiumInfo: A,
                                                  activationDate: T,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, E.jsx)(h9, {}),
                                  m > 0 &&
                                      (0, E.jsxs)(E.Fragment, {
                                          children: [
                                              (0, E.jsx)(Ee, {}),
                                              (0, E.jsx)(Aj, {
                                                  count: m,
                                                  onClickManageSubscription: () => AB.A.setState({ subsection: nw.nR }),
                                              }),
                                          ],
                                      }),
                                  c > 0 &&
                                      (0, E.jsxs)(E.Fragment, {
                                          children: [
                                              (0, E.jsx)(Ee, {}),
                                              (0, E.jsx)(A5, {
                                                  count: c,
                                                  onClickManageSubscription: () => {
                                                      AB.A.setState({ subsection: nw.PZ }),
                                                          G.default.track(
                                                              M.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                          );
                                                  },
                                              }),
                                          ],
                                      }),
                                  (0, E.jsx)(Ee, {}),
                                  null != t ? (0, E.jsx)(h3, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, E.jsx)("div", { className: e6()(h4.kL, h4.Lq), children: (0, E.jsx)(dp.y, {}) });
    },
    Ei = (0, a.E2)(u.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [j.intl.string(j.t.trSpHX), j.intl.string(j.t["2GKrvn"])],
        Component: () => (0, E.jsx)(Et, {}),
    }),
    En = (0, a.zZ)(u.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [j.intl.string(j.t.trSpHX), j.intl.string(j.t["2GKrvn"])],
        buildLayout: () => [Ei],
    }),
    Es = (0, a.t_)(u.X.SUBSCRIPTIONS_PANEL, { useTitle: () => j.intl.string(j.t.trSpHX), buildLayout: () => [En] }),
    El = (0, a.i4)(u.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.trSpHX),
        icon: A_.L,
        usePersistentBadge: function () {
            return S.useMemo(
                () => ({
                    badgeType: h.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    useCustomBadge: () =>
                        (0, AI.l)() ? (0, E.jsx)(l2.E, { size: "xs", color: er.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [],
            );
        },
        buildLayout: () => [Es],
    }),
    Er = (0, a.WI)(u.X.BILLING_SECTION, {
        useTitle: () => j.intl.string(j.t.oeUm2s),
        buildLayout: () => [gj, AN, El, gN, cr],
    });
var Ea = i(540999),
    Eo = i(306471),
    Eu = i(964355),
    Ed = i(172272);
let Ec = (0, a.zD)(u.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, g.bG)([oC.default], () => oC.default.isAxeEnabled),
        setValue: (e) => (0, oI.x)({ axeEnabled: e }),
    }),
    Eg = (0, a.zD)(u.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, g.bG)([oC.default], () => oC.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, oI.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var Em = i(276086),
    EA = i(354328);
let Eh = (0, a.zD)(u.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, EA.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, Em.L)("highlight_mana_components", e);
        },
    }),
    EE = (0, a.zD)(u.X.HIGHLIGHT_MANA_TEXT, {
        useTitle: () => "Mana Text Migration Highlighter",
        useSubtitle: () =>
            "Outlines Mana Text/Heading components in green and all other rendered text in red, to spot text not yet migrated to Mana.",
        useValue: () => (0, EA.A)("highlight_mana_text"),
        setValue: (e) => {
            (0, Em.L)("highlight_mana_text", e);
        },
    }),
    ES = (0, a.zD)(u.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, EA.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, Em.L)("highlight_void_toggleables", e);
        },
    }),
    ET = (0, a.sN)(u.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, g.bG)([oC.default], () => oC.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: Ed.YR,
        markers: Array.from({ length: Ed.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => Ed.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            Ed.Or.getState().setHorizontalSpacing(e);
        },
    }),
    Ex = (0, a.zD)(u.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, g.bG)([oC.default], () => oC.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, oI.x)({ layoutDebuggingEnabled: e });
        },
    }),
    Ep = (0, a.sN)(u.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, g.bG)([oC.default], () => oC.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: Ed.YR,
        markers: Array.from({ length: Ed.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => Ed.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            Ed.Or.getState().setVerticalSpacing(e);
        },
    }),
    Ef = (0, a.zZ)(u.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [Eg, Ex, ET, Ep, Eh, EE, ES, Ec],
    }),
    EN = (0, a.zD)(u.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => L.HZ.useSetting(),
        setValue: (e) => {
            L.HZ.updateSetting(e);
        },
    });
var E_ = i(173936),
    EI = i(260598),
    EC = i(148810),
    Eb = i(380610),
    Ey = i(986238),
    Ev = i(727201),
    Ej = i(274446);
let EO = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    ER = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function EL(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class ED extends S.Component {
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
            className: e6()(Ev.oS, iM.SX, Ej.N, Ev.nM),
            children: [
                (0, E.jsx)(iO.A, {
                    className: e6()(Ev.lL, { [Ev.zi]: n }),
                    onClick: n ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, E.jsxs)(rn.A, {
                    className: iM.QB,
                    children: [
                        (0, E.jsx)(rn.A.Child, {
                            basis: "50%",
                            children: (0, E.jsx)(lZ.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: ER,
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
                                className: Ev.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: s,
                            }),
                        (0, E.jsxs)(es.E, {
                            variant: "text-sm/normal",
                            className: Ev.AS,
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
class EP extends S.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, Eb.bD)();
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
        return eZ().without(EO, ...t);
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
        let t = await (0, EC.Zk)(e);
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
        (0, K.openModal)((t) => (0, E.jsx)(EG, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, E.jsx)(iN.pp, {
            theme: iC.A.theme,
            className: e6()(iM.eT, iM.SX),
            children: (0, E.jsx)(iN.SG, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: i } = this.state;
        return null == e
            ? null
            : eZ().map(e, (e, n) =>
                  (0, E.jsx)(
                      ED,
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
                  children: (0, E.jsx)(lq.K, {
                      variant: "secondary",
                      icon: E_.q,
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
                    disabled: EL(t ?? {}),
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
            ? (0, E.jsx)(dp.y, { className: iM.QX })
            : null != n && 0 === Object.keys(n).length
              ? this.renderEmpty()
              : this.renderItems();
        let s = !i && !t && this.getAvailableProjects().length > 0,
            l =
                EL(n ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, E.jsx)(es.E, {
                          color: "text-feedback-critical",
                          variant: "text-md/normal",
                          children:
                              "Mobile build overrides must be generated using the desktop/web stable client for now!",
                      })
                    : null;
        return (0, E.jsx)(i_.n, {
            children: (0, E.jsxs)(Q.B, {
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
class EG extends S.Component {
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
            t = await (0, EC.SB)(e);
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
        return EL(this.props.buildOverrides ?? {});
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
            d = Ey.fL.find((t) => t.value === e),
            c = s.map((e) => ({ id: e, label: e, value: e }));
        return (0, E.jsxs)(Q.B, {
            gap: 20,
            children: [
                (0, E.jsx)(lZ.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: Ey.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, E.jsx)(lZ.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: Ey.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, E.jsxs)(Q.B, {
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
                    : (0, E.jsx)(EI.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: i,
                          error: n,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                (0, E.jsx)(EI.f, {
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
            actionBarInput: (0, E.jsx)(cR.A, { value: i }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let EU = (0, a.E2)(u.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: EP });
var EM = i(256311),
    EV = i(883600);
let Ek = (0, a.E2)(u.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, g.bG)([EV.A], () => EV.A.overrideId());
        async function t(e) {
            let t = EV.A.getChangelog(e, "en-US");
            return null != t ? t : ((await EM.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
        }
        return (0, E.jsx)(E0, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => EM.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var Ew = i(506774);
let EF = new Date("2018-01-01"),
    EB = (0, a.Tf)(u.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => L.pK.useSetting() === dL.default.fromTimestamp(EF.getTime()),
        onClick: () => (Ew.w.set("lastChangeLogDate", EF), L.pK.updateSetting(dL.default.fromTimestamp(EF.getTime()))),
    }),
    Ez = (0, a.zD)(u.X.DISABLE_APP_COLLECTIONS_CACHE, {
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
    EX = (0, a.zD)(u.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, g.bG)([oC.default], () => oC.default.isForcedCanary),
        setValue: (e) => {
            (0, oI.x)({ canary: e });
        },
    }),
    EY = (0, a.zD)(u.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, g.bG)([oC.default], () => oC.default.sourceMapsEnabled),
        setValue: (e) => (0, oI.x)({ sourceMapsEnabled: e }),
    }),
    EH = (0, a.zD)(u.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, g.bG)([oC.default], () => oC.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, oI.x)({ onlyShowPreviewAppCollections: e }),
    });
var EK = i(10094),
    EW = i(683760);
let EZ = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: sQ.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: sQ.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: sQ.PremiumTypes.TIER_2 },
    ],
    Eq = (0, a.Hn)(u.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => EZ,
        clearable: !0,
        useValue: () =>
            (0, g.bG)([EW.A], () => {
                let e = EW.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, EK.O)(null, void 0)
                : null === e
                  ? (0, EK.O)(void 0, void 0)
                  : (0, EK.O)(0 === e ? null : e, void 0);
        },
    });
var EQ = i(246605),
    EJ = i(274184);
let E$ = (0, a.E2)(u.X.SURVEY_OVERRIDE, {
    useSearchTerms: () => ["survey override"],
    Component: function () {
        let e = (0, g.bG)([EJ.Ay], () => EJ.Ay.getSurveyOverride());
        return (0, E.jsx)(E0, {
            label: "Survey Override",
            description: "Provide a survey ID to override the survey shown to this user.",
            placeholder: "Enter Survey ID...",
            overrideId: e ?? null,
            setOverride: (e) => EQ.xr(e),
            fetchOverride: (e) => EQ.BC(e, !0) ?? null,
        });
    },
});
function E0(e) {
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
let E1 = (0, a.zZ)(u.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [Eq, E$, Ek, EB, EX, EN, EH, Ez, EY, EU],
        useInlineNotice: () => ({
            type: h.lT.INLINE_NOTICE,
            noticeType: "info",
            useText: () => j.intl.format(j.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    E2 = (0, a.zD)(u.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, g.bG)([oC.default], () => oC.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, oI.x)({ logAnalyticsEvents: e }),
    }),
    E3 = (0, a.zD)(u.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, g.bG)([oC.default], () => oC.default.isLoggingGatewayEvents),
        setValue: (e) => (0, oI.x)({ logGatewayEvents: e }),
    }),
    E6 = (0, a.zD)(u.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, g.bG)([oC.default], () => oC.default.preventPopoutClose),
        setValue: (e) => (0, oI.x)({ preventPopoutClose: e }),
    }),
    E4 = (0, a.zD)(u.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, g.bG)([oC.default], () => oC.default.logKeyboardMismatches),
        setValue: (e) => (0, oI.x)({ logKeyboardMismatches: e }),
    }),
    E7 = (0, a.zD)(u.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, g.bG)([oC.default], () => oC.default.isLoggingOverlayEvents),
        setValue: (e) => (0, oI.x)({ logOverlayEvents: e }),
    }),
    E5 = (0, a.zD)(u.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, g.bG)([oC.default], () => oC.default.isLoggingQuestEvents),
        setValue: (e) => (0, oI.x)({ logQuestEvents: e }),
    }),
    E8 = (0, a.zD)(u.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, g.bG)([oC.default], () => oC.default.isTracingRequests),
        setValue: (e) => (0, oI.x)({ trace: e }),
    }),
    E9 = (0, a.zZ)(u.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [E3, E7, E8, E2, E4, E6, E5] }),
    Se = (0, a.t_)(u.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [E1, E9, Ef],
    }),
    St = (0, a.i4)(u.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: Eo.V,
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
                } = (0, g.cf)([oC.default, Ea.A, io.default], () => ({
                    layoutDebuggingEnabled: oC.default.layoutDebuggingEnabled,
                    isDeveloper: Ea.A.isDeveloper,
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
                { horizontalSpacing: A, verticalSpacing: h } = (0, Ed.Or)(),
                { setHorizontalSpacing: S, setVerticalSpacing: T } = Ed.Or.getState(),
                x = L.HZ.useSetting();
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
                                              L.HZ.updateSetting(!x);
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
                                                          (0, E.jsx)(Eu.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: A,
                                                              minValue: 0,
                                                              maxValue: Ed.YR,
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
                                                          (0, E.jsx)(Eu.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: h,
                                                              minValue: 0,
                                                              maxValue: Ed.YR,
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
        buildLayout: () => [Se],
    });
var Si = i(127062),
    Sn = i(25044),
    Ss = i(80703),
    Sl = i(691540),
    Sr = i(857250),
    Sa = i(97483),
    So = i(100392),
    Su = i(102609),
    Sd = i(271478),
    Sc = i(736056),
    Sg = i(386976),
    Sm = i(257433),
    SA = i(32523),
    Sh = i(96919),
    SE = i(688151),
    SS = i(636566);
function ST(e) {
    let { experiment: t, experimentId: i, overrideInfo: n, defaultOpen: s } = e,
        [l, r] = S.useState(s),
        [a, o] = S.useState(!1),
        u = S.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, g.bG)([c2.default], () => c2.default.getId()),
        c = (0, g.bG)([c2.default], () => {
            let e = c2.default.getInstallationForTracking();
            return null == e ? null : (0, Ss.v)(e);
        }),
        m = "installation" === t.kind && null != c ? c : d,
        A = (0, Sm.iN)(t, m),
        h = (0, Sm.Fm)(t, m),
        T = (0, g.yK)([Sc.A], () =>
            eZ()
                .sortBy(Sc.A.getRecentExposures(SE.Vh.USER, i), (e) => {
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
                (0, c5.C)((0, So.yA)(i), () => {
                    (0, Sl.P0)({
                        id: "experiment-link-copied",
                        message: "Copied experiment link",
                        type: Sa.Ck.SUCCESS,
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
                className: SS.DD,
                children: [
                    (0, E.jsxs)("div", {
                        children: [
                            (0, E.jsxs)(Q.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    t.title,
                                    " ",
                                    c5.p5 &&
                                        (0, E.jsx)(en.D, { onClick: x, children: (0, E.jsx)(E_.q, { size: "xs" }) }),
                                ],
                            }),
                            (0, E.jsx)(es.E, { color: "text-muted", variant: "text-sm/normal", children: i }),
                        ],
                    }),
                    (0, E.jsx)("span", {
                        className: SS.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!l) return (0, E.jsx)("div", { className: SS.Os, children: p });
    let f = "";
    return (
        (f =
            t.system === Su.l5.LEGACY
                ? `Currently assigned to bucket ${A ?? SE.RE.NOT_ELIGIBLE}`
                : null != A
                  ? `Currently assigned to variant ${A}`
                  : "Currently unassigned"),
        (0, E.jsxs)("div", {
            className: SS.Os,
            children: [
                p,
                (0, E.jsx)("div", {
                    children: (0, E.jsx)(Sd.g, {
                        label: t.system === Su.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: f,
                        experiment: t,
                        experimentId: i,
                        overrideInfo: n,
                    }),
                }),
                (0, E.jsx)("div", {
                    className: SS.h_,
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
                                  className: SS.id,
                                  children: "Server Descriptor",
                              }),
                              (0, E.jsx)(es.E, {
                                  variant: "code",
                                  className: SS.AS,
                                  children: null == h ? "None" : JSON.stringify(h, void 0, 2),
                              }),
                              (0, E.jsx)(es.E, {
                                  variant: "text-lg/medium",
                                  className: SS.id,
                                  children: "Override Descriptor",
                              }),
                              (0, E.jsx)(es.E, {
                                  variant: "code",
                                  className: SS.AS,
                                  children:
                                      n?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(n.originalDescriptor, void 0, 2),
                              }),
                              (0, E.jsx)(es.E, {
                                  variant: "text-lg/medium",
                                  className: SS.id,
                                  children: "Recent Exposures",
                              }),
                              (0, E.jsx)(es.E, {
                                  variant: "code",
                                  className: SS.AS,
                                  children: 0 === T.length ? "None" : T.join("\n"),
                              }),
                          ],
                      })
                    : (0, E.jsx)("div", {
                          className: SS.id,
                          children: (0, E.jsx)(ea.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, E.jsx)(eU.c, { className: SS.yF }),
            ],
        })
    );
}
function Sx(e) {
    let { experiment: t, experimentId: i, overrideInfo: n } = e,
        [s, l] = S.useState(null != n),
        [r, a] = S.useState(!1),
        o = S.useCallback(() => {
            l((e) => !e);
        }, []),
        u = (0, g.bG)([Sc.A], () => Sc.A.getLoadedGuildExperiment(i)),
        d = (0, g.yK)([Sc.A], () =>
            eZ()
                .sortBy(Sc.A.getRecentExposures(SE.Vh.GUILD, i), (e) => {
                    let [t, i] = e;
                    return -i;
                })
                .map((e) => {
                    let [t, i] = e;
                    return `${new Date(i).toLocaleString()} (${t})`;
                }),
        ),
        [c, m] = (0, g.yK)([ec.A, Sc.A], () => {
            let e = eZ().sortBy(ec.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                t = {},
                n = [];
            for (let s of e) {
                let e = Sc.A.getGuildExperimentDescriptor(i, s.id),
                    l = e?.bucket ?? SE.RE.NOT_ELIGIBLE;
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
                className: SS.DD,
                children: [
                    (0, E.jsxs)("div", {
                        children: [
                            (0, E.jsx)("span", { children: t.title }),
                            (0, E.jsx)(es.E, { color: "text-muted", variant: "text-sm/normal", children: i }),
                        ],
                    }),
                    (0, E.jsx)("span", { className: SS.km, children: "Guild" }),
                ],
            }),
        });
    return s
        ? (0, E.jsxs)("div", {
              className: SS.Os,
              children: [
                  A,
                  (0, E.jsx)(Sd.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${m}`,
                      experiment: t,
                      experimentId: i,
                      overrideInfo: n,
                  }),
                  (0, E.jsx)("div", {
                      className: SS.h_,
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
                                    className: SS.id,
                                    children: "Guild Assignments",
                                }),
                                (0, E.jsx)(es.E, { variant: "code", className: SS.AS, children: c }),
                                (0, E.jsx)(es.E, {
                                    variant: "text-lg/medium",
                                    className: SS.id,
                                    children: "Server Descriptor",
                                }),
                                (0, E.jsx)(es.E, {
                                    variant: "code",
                                    className: SS.AS,
                                    children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                }),
                                (0, E.jsx)(es.E, {
                                    variant: "text-lg/medium",
                                    className: SS.id,
                                    children: "Override Descriptor",
                                }),
                                (0, E.jsx)(es.E, {
                                    variant: "code",
                                    className: SS.AS,
                                    children:
                                        n?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(n.originalDescriptor, void 0, 2),
                                }),
                                (0, E.jsx)(es.E, {
                                    variant: "text-lg/medium",
                                    className: SS.id,
                                    children: "Recent Exposures",
                                }),
                                (0, E.jsx)(es.E, {
                                    variant: "code",
                                    className: SS.AS,
                                    children: 0 === d.length ? "None" : d.join("\n"),
                                }),
                            ],
                        })
                      : (0, E.jsx)("div", {
                            className: SS.id,
                            children: (0, E.jsx)(ea.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, E.jsx)(eU.c, { className: SS.yF }),
              ],
          })
        : (0, E.jsx)("div", { className: SS.Os, children: A });
}
let Sp = (0, a.E2)(u.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, Sg.op)(),
                { experiments: i, overridesInfo: n } = (0, SA.hI)(),
                s = S.useMemo(() => ({ ...i, ...e }), [i, e]),
                l = S.useMemo(() => ({ ...n, ...t }), [n, t]),
                r = (0, g.bG)([c2.default], () => {
                    let e = c2.default.getInstallationForTracking();
                    return null == e ? null : (0, Ss.v)(e);
                }),
                [a, o] = S.useState(""),
                u = (0, Sh.oC)((0, Sh.R3)((0, Sh.Fm)(s), l), a);
            return (0, E.jsxs)("div", {
                "data-mtctest-ignore": "true",
                children: [
                    null != r &&
                        (0, E.jsxs)(Q.B, {
                            style: { gap: 8, marginBottom: 16 },
                            children: [
                                (0, E.jsxs)(es.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: ["Installation ID: ", r],
                                }),
                                c5.p5 &&
                                    (0, E.jsx)(ea.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, c5.C)(r, () => {
                                                (0, Sl.P0)((0, Sr.o)("Installation ID copied!", Sa.Ck.SUCCESS));
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, E.jsx)($.I, { placeholder: "Search experiments", query: a, onChange: o, onClear: () => o("") }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? Sx : ST;
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
                              className: SS.p$,
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
    Sf = (0, a.zZ)(u.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [Sp] }),
    SN = (0, a.t_)(u.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [Sf] }),
    S_ = (0, a.i4)(u.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: Si.c,
        useMenu: Sn.A,
        buildLayout: () => [SN],
    }),
    SI = (0, a.WI)(u.X.DEVELOPER_SECTION, {
        useTitle: () => j.intl.string(j.t["+gHUHA"]),
        usePredicate: () => Ea.A.isDeveloper,
        buildLayout: () => [S_, St],
    });
var SC = i(824552),
    Sb = i(370997);
let Sy = (0, a.E2)(u.X.AUTHORIZED_APPS_LIST_SETTING, {
    Component: Sb.Ay,
    useSearchTerms: () => [j.intl.string(j.t["f6kk+r"])],
});
var Sv = i(187322),
    Sj = i(77468),
    SO = i(289498),
    SR = i(573648),
    SL = i(941314),
    SD = i(874490),
    SP = i(370480),
    SG = i(968309);
let SU = new Set([M.fg2.XBOX, M.fg2.PLAYSTATION, M.fg2.PLAYSTATION_STAGING, M.fg2.CRUNCHYROLL]);
var SM = i(169869),
    SV = i(235693),
    Sk = i(757036),
    Sw = i(555837),
    SF = i(241524),
    SB = i(346017),
    Sz = i(212739),
    SX = i(30370),
    SY = i(968671),
    SH = i(674567),
    SK = i(237146),
    SW = i(594387),
    SZ = i(34934);
function Sq() {
    let e,
        t,
        n,
        s,
        l,
        { variant: r, showFooter: a } =
            ((e = (0, SH.V)()),
            (t = (0, SY.GM)("connectedAccountsBannerFooter")),
            (n = (0, Sz.O)()),
            (l = null != (s = (0, g.bG)([SX.A], () => SX.A.getAccount(null, M.fg2.XBOX))) && !s.revoked),
            e === SH.s.NONE || n
                ? { variant: SH.s.NONE, showFooter: !1 }
                : { variant: e, showFooter: t && e === SH.s.NO_ACCESS && !l }),
        { analyticsLocations: o } = (0, nZ.Ay)(e1.A.XBOX_CONNECTED_ACCOUNTS_BANNER),
        u = (0, SB.yW)(o),
        d = (0, SF.A)("(max-width: 485px)");
    if (r === SH.s.NONE) return null;
    let c = d ? "md" : "sm",
        m = "",
        A = null;
    switch (r) {
        case SH.s.HAS_ACCESS:
            (m = j.intl.string(SK.default["+QAvQz"])),
                (A = (0, E.jsx)(eG.$, {
                    variant: "overlay-primary",
                    size: c,
                    fullWidth: d,
                    text: j.intl.string(SK.default.CubeLC),
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
        case SH.s.NO_ACCESS:
            (m = j.intl.string(SK.default.NwkRTZ)),
                (A = (0, E.jsx)(sY.A, {
                    defaultTextOverride: j.intl.string(SK.default["0vY+ie"]),
                    variantOverride: "overlay-primary",
                    size: c,
                    fullWidth: d,
                    subscriptionTier: sQ.pe.TIER_2,
                }));
            break;
        default:
            (0, N.xb)(r);
    }
    return (0, E.jsxs)(nZ.f5, {
        value: o,
        children: [
            (0, E.jsxs)("div", {
                className: SZ.bV,
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
                            className: SZ.Nr,
                            children: [
                                (0, E.jsxs)("div", {
                                    className: SZ.Tp,
                                    children: [
                                        (0, E.jsx)("div", {
                                            className: SZ.Qw,
                                            style: {
                                                backgroundImage: `url(${a ? "https://cdn.discordapp.com/assets/content/1858990b1e56c7d51e887008753104d4663d06c0e0e296d8fe0ea85c7e3e8341.png" : "https://cdn.discordapp.com/assets/content/7308e937fbd3074b9de0ebba1fa3571fa7b10a2b88f384b382f711bae99f40e6.png"})`,
                                            },
                                        }),
                                        (0, E.jsx)("div", { className: SZ.$h }),
                                        (0, E.jsx)("div", { className: SZ.Rv }),
                                        (0, E.jsx)("div", { className: SZ.Lw }),
                                    ],
                                }),
                                (0, E.jsxs)("div", {
                                    className: SZ.Mn,
                                    children: [
                                        (0, E.jsxs)("div", {
                                            className: SZ.mY,
                                            children: [
                                                (0, E.jsx)("img", {
                                                    className: SZ.wm,
                                                    src: "https://cdn.discordapp.com/assets/content/c5fab2b5d1155c4c9bc088b07f8563b6db8d2d08666357486efc5aea6e97fbea.png",
                                                    alt: "Xbox Game Pass",
                                                }),
                                                (0, E.jsx)(es.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: SZ.DD,
                                                    children: m,
                                                }),
                                            ],
                                        }),
                                        (0, E.jsx)("div", { className: SZ.lO, children: A }),
                                    ],
                                }),
                                a &&
                                    (0, E.jsxs)(E.Fragment, {
                                        children: [
                                            (0, E.jsx)("div", { className: SZ.yF }),
                                            (0, E.jsxs)("div", {
                                                className: SZ.sQ,
                                                children: [
                                                    (0, E.jsx)(co.o, {
                                                        size: d ? "md" : "sm",
                                                        color: er.A.colors.ICON_STRONG,
                                                    }),
                                                    (0, E.jsx)(es.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-default",
                                                        children: j.intl.format(SW.default.mXY4Rb, {
                                                            onConnect: () => {
                                                                u(SB.Hx.CONNECT),
                                                                    (0, SG.A)({
                                                                        platformType: M.fg2.XBOX,
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
var SQ = i(201718),
    SJ = i(321078),
    S$ = i(672130),
    S0 = i(546183),
    S1 = i(379848),
    S2 = i(96734);
function S3(e) {
    let { markAsDismissed: t } = e;
    return (
        S.useEffect(() => t(ig.i.UNKNOWN), [t]),
        (0, E.jsx)(sc.Lp, { className: S2.Ad, text: j.intl.string(j.t.y2b7CA) })
    );
}
function S6(e) {
    let { title: t, body: i, img: n, newIndicatorDismissibleContent: s, onClick: l } = e;
    return (0, E.jsxs)("div", {
        className: S2.kL,
        children: [
            n,
            (0, E.jsxs)("div", {
                className: S2.FS,
                children: [
                    (0, E.jsxs)("div", {
                        className: S2.TK,
                        children: [
                            (0, E.jsx)(S1.Ay, {
                                contentTypes: [s],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: i } = e;
                                    return t === s ? (0, E.jsx)(S3, { markAsDismissed: i }) : null;
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
let S4 = () => {
        let e = tN.A.getArticleURL(M.MVz.PS_CONNECTION);
        return (0, E.jsx)(S6, {
            title: j.intl.string(j.t.v20wwm),
            body: j.intl.format(j.t.lTZBit, { help_article: e }),
            img: (0, E.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
            newIndicatorDismissibleContent: eM.M.PS_ONE_WAY_RECONNECT,
            onClick: () => (0, SG.A)({ platformType: M.fg2.PLAYSTATION, location: "PS two way upsell" }),
        });
    },
    S7 = "/assets/9df988a227916145.png",
    S5 = () =>
        (0, E.jsx)(S6, {
            title: j.intl.string(SW.default["9cLtDI"]),
            body: j.intl.format(SW.default["D+kUbg"], {
                learnMoreLink: tN.A.getArticleURL(M.MVz.XBOX_GAME_PASS_PERKS),
            }),
            img: (0, E.jsx)("img", { src: S7, width: "auto", height: "45", alt: "" }),
            newIndicatorDismissibleContent: eM.M.XBOX_PERKS_RECONNECT_UPSELL,
            onClick: () => (0, SG.A)({ platformType: M.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
        }),
    S8 = () => {
        let e = tN.A.getArticleURL(M.MVz.XBOX_CONNECTION);
        return (0, E.jsx)(S6, {
            title: j.intl.string(j.t["2okkZV"]),
            body: j.intl.format(j.t.OnERSS, { help_article: e }),
            img: (0, E.jsx)("img", { src: S7, width: "auto", height: "45", alt: "" }),
            newIndicatorDismissibleContent: eM.M.XBOX_ONE_WAY_RECONNECT,
            onClick: () => (0, SG.A)({ platformType: M.fg2.XBOX, location: "Xbox two way upsell" }),
        });
    };
var S9 = i(783419),
    Te = i(534952),
    Tt = i(230451),
    Ti = i(781471);
function Tn(e) {
    let t,
        { integration: i } = e,
        {
            isJoining: n,
            joinErrorMessage: s,
            showJoinErrorMessage: l,
        } = (0, g.cf)(
            [SX.A],
            () => ({
                isJoining: SX.A.isJoining(i.id),
                joinErrorMessage:
                    "" === SX.A.joinErrorMessage(i.id) ? j.intl.string(j.t.j2d6Km) : SX.A.joinErrorMessage(i.id),
                showJoinErrorMessage: void 0 !== SX.A.joinErrorMessage(i.id),
            }),
            [i.id],
        );
    return (
        null != (0, g.bG)([ec.A], () => ec.A.getGuild(i.guild.id), [i.guild.id]) ||
            (t = (0, E.jsx)(eG.$, {
                size: "sm",
                onClick: function () {
                    Sj.A.joinServer(i.id, () => {});
                },
                disabled: n,
                variant: "primary",
                text: n ? j.intl.string(j.t.RXvQQu) : j.intl.string(j.t.XpeFYr),
            })),
        (0, E.jsxs)("div", {
            className: Ti.iA,
            children: [
                (0, E.jsxs)("div", {
                    className: Ti.XX,
                    children: [
                        (0, E.jsx)(mc.Ay, { size: mc.Ay.Sizes.SMALL, guild: i.guild, className: Ti.$f }),
                        (0, E.jsxs)("div", {
                            className: Ti.Vn,
                            children: [
                                (0, E.jsx)(es.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: i.guild.name,
                                }),
                                (0, E.jsx)(di.Anchor, {
                                    href: SR.A.get(i.type)?.getPlatformUserUrl?.(i.account),
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
                        className: Ti.R,
                        children: s,
                    }),
            ],
        })
    );
}
function Ts(e) {
    var t;
    let i,
        n,
        { account: s } = e,
        l =
            ((t = s.id),
            (i = (0, Sw.G)({ location: "useShouldShowXboxPerksReconnectUpsell" })),
            (n = (0, Sk.L)(sQ.PremiumTypes.TIER_2)),
            !i && !n && !/^\d+$/.test(t));
    return s.type === M.fg2.XBOX && l
        ? (0, E.jsx)(S5, {})
        : s.twoWayLink
          ? null
          : s.type === M.fg2.XBOX
            ? (0, E.jsx)(S8, {})
            : s.type === M.fg2.PLAYSTATION
              ? (0, E.jsx)(S4, {})
              : null;
}
function Tl(e) {
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
        R = (0, SD.ML)(u.type),
        L = SR.A.get(R),
        D = (0, SL.useIsRiotSocialSDKMigrationEnabled)({ location: "User Settings Connections" });
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
            null != e && (h(e), Sj.A.setVisibility(u.type, u.id, e), _(null)),
                null != t && (x(t), Sj.A.setMetadataVisibility(u.type, u.id, t), C(null));
        }, [u]),
        (0, E.jsxs)("div", {
            className: Ti.FI,
            children: [
                ((t = SR.A.get(u.type)),
                (i = SR.A.get(R)),
                (n = "1" === (u.metadata ?? {})[S9.pK.TWITTER_VERIFIED]),
                (s = null),
                t.type === M.fg2.TWITTER &&
                    n &&
                    (s = (0, E.jsx)(tr.m, {
                        text: j.intl.string(j.t.Jebrww),
                        children: (0, E.jsx)(tm.A, {
                            color: er.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, E.jsx)(ta.U, { size: "xs", color: er.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, E.jsxs)("div", {
                    className: Ti.Il,
                    children: [
                        (0, E.jsx)("img", {
                            alt: i.name,
                            className: Ti.gj,
                            src: (0, gW.M)(d) ? i.icon.darkSVG : i.icon.lightSVG,
                        }),
                        (0, E.jsxs)("div", {
                            children: [
                                (0, E.jsxs)("div", {
                                    className: Ti.$p,
                                    children: [
                                        (0, E.jsx)(es.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: Ti.RW,
                                            children: u.name,
                                        }),
                                        null != s && (0, E.jsx)("div", { className: Ti.cG, children: s }),
                                    ],
                                }),
                                (0, E.jsx)(es.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: Ti.Au,
                                    children:
                                        null != i.replacedBy && D
                                            ? j.intl.format(Tt.default.Glhokn, { platformName: i.name })
                                            : i.name,
                                }),
                            ],
                        }),
                        (0, E.jsx)(en.D, {
                            className: Ti.uH,
                            onClick: function () {
                                let e = SR.A.get(u.type);
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
                                            SU.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, E.jsx)(sA.A, {
                                                children: j.intl.format(j.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": j.intl.string(j.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, E.jsx)(gq.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, E.jsx)(Ts, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        i = null,
                        n = (0, SP.An)(t[S9.pK.CREATED_AT], c);
                    switch (e.type) {
                        case M.fg2.REDDIT:
                            i = (0, SM.xE)(t, Ti.Nz);
                            break;
                        case M.fg2.STEAM:
                            i = (0, SM.dy)(t, Ti.Nz);
                            break;
                        case M.fg2.BLUESKY:
                        case M.fg2.TWITTER:
                        case M.fg2.MASTODON:
                            i = (0, SM.ED)(t, Ti.Nz);
                            break;
                        case M.fg2.EBAY:
                            i = (0, SM.ub)(t, Ti.Nz);
                            break;
                        case M.fg2.PAYPAL:
                            i = (0, SM.gZ)(t, Ti.Nz);
                            break;
                        case M.fg2.TIKTOK:
                            i = (0, SM.HU)(t, Ti.Nz);
                    }
                    null !== n &&
                        (null == i && (i = []),
                        i?.push(
                            (0, E.jsx)(
                                es.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: Ti.M4,
                                    children: j.intl.format(j.t["9rfonh"], { date: n }),
                                },
                                "member-since",
                            ),
                        ));
                    let s = v.includes(e.id),
                        l = j.intl.string(j.t.wzzjk9);
                    if (null == i || 0 === i.length)
                        if (!0 !== SR.A.get(e.type).hasMetadata) return null;
                        else
                            (i = [
                                (0, E.jsx)(sc.Lp, { className: Ti.Z3, text: j.intl.string(j.t.y2b7CA) }, "badge"),
                                (0, E.jsx)(
                                    es.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: Ti.vt,
                                        children: j.intl.format(j.t.Up2ni7, {
                                            helpdeskUrl: tN.A.getArticleURL(M.MVz.CONNECTION_DETAILS),
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
                                    className: Ti.jy,
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
                                                      Sj.A.refresh(e.type, e.id).finally(() => {
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
                        (0, E.jsx)("div", { className: Ti.tJ, children: i })
                    );
                })(u),
                (M.txh.has(u.type) &&
                    (l = (0, E.jsx)(J.d, {
                        label: j.intl.string(j.t["+KCMSi"]),
                        checked: g,
                        onChange: function (e) {
                            m(e), Sj.A.setFriendSync(u.type, u.id, e);
                        },
                    })),
                M.ewM.has(u.type) &&
                    (r = (0, E.jsx)(J.d, {
                        label: j.intl.format(j.t["6u6J0q"], { platform: L.name }),
                        checked: p,
                        onChange: function (e) {
                            f(e), Sj.A.setShowActivity(u.type, u.id, e);
                        },
                    })),
                SR.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, E.jsx)(J.d, {
                        label: j.intl.string(j.t.FYKGsL),
                        checked: 1 === T,
                        onChange: function (e) {
                            let { verified: t } = u,
                                i = +!!e;
                            if (e && !t) {
                                C(i), (0, SG.A)({ platformType: u.type, location: "User Settings" });
                                return;
                            }
                            x(i), Sj.A.setMetadataVisibility(u.type, u.id, i);
                        },
                        disabled: 1 !== A || null == u.metadata,
                    })),
                (0, E.jsxs)("div", {
                    className: Ti.HZ,
                    children: [
                        (0, E.jsx)(J.d, {
                            label: j.intl.string(j.t.f7yOAX),
                            checked: 1 === A,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    i = +!!e;
                                if (e && !t) {
                                    _(i), (0, SG.A)({ platformType: u.type, location: "User Settings" });
                                    return;
                                }
                                h(i), Sj.A.setVisibility(u.type, u.id, i);
                            },
                        }),
                        a,
                        r,
                        l,
                    ],
                })),
                (function () {
                    if (u.revoked || u.integrations.length > 0) return (0, E.jsx)(eU.c, {});
                })(),
                u.revoked
                    ? (0, E.jsx)(tf.p, {
                          messageType: tf.Y.INFO,
                          children: j.intl.format(j.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, SG.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                      })
                    : u.integrations.length > 0
                      ? (0, E.jsx)(s4.D, {
                            label: j.intl.string(j.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, E.jsx)(Tn, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, E.jsx)(SV.A, { partner: u.type }),
            ],
        })
    );
}
function Tr(e) {
    let { appIdentity: t, oauth2Token: i } = e;
    return null == i
        ? null
        : (0, E.jsxs)("div", {
              className: Ti.FI,
              children: [
                  (function (e, t) {
                      let { application: i } = t,
                          n = nt.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
                      return (0, E.jsxs)("div", {
                          className: Ti.Il,
                          children: [
                              (0, E.jsx)("img", { alt: i.name, className: e6()(Ti.gj, Ti.sN), src: n }),
                              (0, E.jsxs)("div", {
                                  children: [
                                      (0, E.jsx)("div", {
                                          className: Ti.$p,
                                          children: (0, E.jsx)(es.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: Ti.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, E.jsx)(es.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: Ti.Au,
                                          children: i.name,
                                      }),
                                  ],
                              }),
                              (0, E.jsx)(en.D, {
                                  className: Ti.uH,
                                  onClick: () =>
                                      (0, Sb.d1)(i, t.scopes, () => {
                                          SC.A.delete(t.id);
                                      }),
                                  "aria-label": j.intl.string(j.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, E.jsx)(gq.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, i),
                  (0, E.jsx)("div", {
                      className: Ti.HZ,
                      children: (0, E.jsx)(J.d, {
                          label: j.intl.string(j.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              SQ.A.updateApplicationIdentityConfig(i.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function Ta(e) {
    let t = SR.A.get(e);
    (0, SG.A)({ platformType: t.type }),
        G.default.track(M.HAw.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        });
}
function To() {
    let e = (0, SD.gn)(),
        t = (0, SL.useIsRiotSocialSDKMigrationEnabled)({ location: "User Settings Connections" }),
        i = (0, ti.A)(t ? Te.tX : []);
    return (0, E.jsxs)("div", {
        className: Ti.lA,
        children: [
            i.map(
                (e) =>
                    null != e &&
                    (0, E.jsx)(
                        S$.A,
                        { application: e, className: Ti.__invalid_accountButton, innerClassName: Ti.U$ },
                        e.id,
                    ),
            ),
            e
                .slice(0, 10 - i.length)
                .map((e) =>
                    (0, E.jsx)(
                        SO.A,
                        { type: e.type, className: Ti.__invalid_accountButton, innerClassName: Ti.U$ },
                        e.type,
                    ),
                ),
            (0, E.jsx)(tr.m, {
                text: j.intl.string(j.t.QqTz8b),
                children: (0, E.jsx)("div", {
                    className: e6()(Ti.ej, Ti.__invalid_accountButton),
                    children: (0, E.jsx)(Sv.vN, {
                        children: (0, E.jsx)("button", {
                            className: e6()(Ti.R8, Ti.U$),
                            type: "button",
                            onClick: function () {
                                sa.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: Ta });
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
function Tu(e) {
    let t,
        { fetching: i, accounts: n, appIdentities: s, authorizedApps: l, theme: r, locale: a } = e,
        u = (0, o.SV)("ConnectionsList"),
        d = S.useMemo(() => n.filter((e) => SR.A.isSupported(e.type)), [n]);
    return (
        (t = i
            ? (0, E.jsx)(dp.y, { type: dp.y.Type.SPINNING_CIRCLE })
            : 0 === d.length && 0 === s.length
              ? (0, E.jsx)(iN.pp, {
                    theme: r,
                    className: u ? Ti.p$ : void 0,
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
                                Tr,
                                { appIdentity: e, oauth2Token: l.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        d.map((e, t) =>
                            (0, E.jsx)(
                                Tl,
                                {
                                    theme: r,
                                    account: e,
                                    locale: a,
                                    onDisconnect: () =>
                                        (function (e) {
                                            let { type: t, id: i } = e;
                                            Sj.A.disconnect(t, i);
                                        })(e),
                                },
                                `connection-${t}`,
                            ),
                        ),
                    ],
                })),
        (0, E.jsx)("div", { className: Ti.V, children: t })
    );
}
let Td = (0, a.E2)(u.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            let e = (0, o.SV)("NewConnectSection");
            return (0, E.jsx)(s4.D, {
                label: j.intl.string(e ? j.t["t+aGse"] : j.t.ZeDrUf),
                description: e ? void 0 : j.intl.format(j.t["oYc+Gz"], { privacyPolicyUrl: M.X7G.PRIVACY }),
                children: (0, E.jsx)(To, {}),
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
    Tc = (0, a.E2)(u.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, g.bG)([eF.A], () => eF.A.hidePersonalInformation),
                t = (0, g.bG)([SX.A], () => SX.A.isFetching()),
                i = (0, g.bG)([SX.A], () => SX.A.getAccounts()),
                { authorizedAppsFetchState: n, authorizedApps: s } = (0, g.cf)([S0.default], () => ({
                    authorizedAppsFetchState: S0.default.getFetchState(),
                    authorizedApps: S0.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: l, filteredAppIdentities: r } = (0, SJ.A)(io.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, cC.Ay)(),
                o = (0, g.bG)([d7.default], () => d7.default.locale);
            return (S.useEffect(() => {
                n === S0.FetchState.NOT_FETCHED && SC.A.fetch();
            }, [n]),
            e)
                ? null
                : (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsx)(Sq, {}),
                          (0, E.jsx)(Tu, {
                              fetching: t || l || (r.length > 0 && n !== S0.FetchState.FETCHED),
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
            Sj.A.fetch();
        },
        useSearchTerms: () => [
            j.intl.string(j.t["+/hZM/"]),
            j.intl.string(j.t.bsbMVz),
            j.intl.string(j.t.f7yOAX),
            j.intl.string(j.t.FYKGsL),
            j.intl.string(j.t["+KCMSi"]),
        ],
    });
var Tg = i(206828);
let Tm = [M.fg2.LEAGUE_OF_LEGENDS, M.fg2.RIOT_GAMES];
function TA() {
    let e = (0, g.bG)([SX.A], () => SX.A.getAccounts().find((e) => Tm.includes(e.type))?.type),
        t = null != e ? SR.A.get(e) : null,
        i = (0, ti.h)(t?.replacedBy),
        { canStartAuthorization: n, hasAlreadyLinked: s, fetched: l } = (0, Tg.RD)(i),
        r = j.intl.string(Tt.default["1S6oAo"]),
        a = (0, SL.useIsRiotSocialSDKMigrationEnabled)({ location: "RiotDeprecationInlineNotice" });
    return S.useMemo(
        () =>
            a && null != t && n && i?.connectionEntrypointUrl != null && !s && l
                ? {
                      type: h.lT.INLINE_NOTICE,
                      noticeType: "info",
                      useText: () =>
                          j.intl.format(Tt.default.DeOsIl, {
                              connectionName: t.name,
                              applicationName: r,
                              connectionEntrypointUrl: i.connectionEntrypointUrl,
                          }),
                  }
                : null,
        [t, r, i, n, a, s, l],
    );
}
let Th = (0, a.zZ)(u.X.CONNECTIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["3fe7U5"]),
        useSubtitle: () => j.intl.string(j.t.U22vw6),
        useInlineNotice: TA,
        buildLayout: () => [Td, Tc],
    }),
    TE = (0, a.zZ)(u.X.AUTHORIZED_APPS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        useSubtitle: () => j.intl.string(j.t.G9JfLg),
        buildLayout: () => [Sy],
        initialize: () => (
            SC.A.fetch(),
            () => {
                Sb.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    TS = (0, a.t_)(u.X.CONNECTED_APPS_PANEL, {
        useTitle: () => j.intl.string(j.t.lrVuZO),
        useObscuredNotice: dT.L,
        buildLayout: () => [Th, TE],
    }),
    TT = (0, a.i4)(u.X.CONNECTED_APPS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.lrVuZO),
        icon: E_.q,
        buildLayout: () => [TS],
    }),
    Tx = (0, a.WI)(u.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => j.intl.string(j.t.BA9200),
        buildLayout: () => [i0, eR, iS, TT],
    });
var Tp = i(631670),
    Tf = i(619499),
    TN = i(836602),
    T_ = i(591179),
    TI = i(854627),
    TC = i(975732),
    Tb = i(761508),
    Ty = i(83257),
    Tv = i(159001),
    Tj = i(344346),
    TO = i(919395),
    TR = i(233641);
function TL(e) {
    let { title: t, children: i } = e;
    return (0, E.jsxs)("div", {
        children: [(0, E.jsx)(eP.D, { variant: "text-md/medium", className: TR.Vf, children: t }), i],
    });
}
function TD(e) {
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
        className: e6()(TR.UA, i),
        children: (0, E.jsxs)("div", {
            className: e6()(TR.yt, n),
            children: [
                (0, E.jsx)("div", {
                    className: e6()(TR.Fp, a && TR.Oz),
                    children: (0, E.jsxs)(E.Fragment, {
                        children: [
                            (0, E.jsx)(TL, { title: l ?? j.intl.string(j.t.Zb06yP), children: s }),
                            null != r ? (0, E.jsx)(TL, { title: j.intl.string(j.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, E.jsx)("div", { className: TR.oB, children: t }),
            ],
        }),
    });
}
var TP = i(986687),
    TG = i(101058),
    TU = i(321191),
    TM = i(696451),
    TV = i(10478);
function Tk() {
    return (0, E.jsxs)("div", {
        className: TV.p$,
        children: [
            (0, E.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: TV.Sl }),
            (0, E.jsx)(eP.D, {
                className: TV.h8,
                variant: "heading-lg/extrabold",
                children: j.intl.string(j.t.Z1OZCV),
            }),
            (0, E.jsx)(es.E, { className: TV.h8, variant: "text-md/normal", children: j.intl.string(j.t.ZSt4Tt) }),
            (0, E.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: TV.h8,
                children: (0, E.jsx)(eG.$, {
                    variant: "primary",
                    text: j.intl.string(j.t.jQ3pqt),
                    onClick: function () {
                        (0, s7.pX)(M.BVt.GUILD_DISCOVERY), (0, sH.default)();
                    },
                }),
            }),
        ],
    });
}
var Tw = i(81400),
    TF = i(252732),
    TB = i(355622),
    Tz = i(408018),
    TX = i(138617),
    TY = i(158983);
let TH = (0, sZ.Ld)(),
    TK = (0, il.createChannelRecord)({ id: "1", type: M.rbe.DM }),
    TW = (0, sZ.Ld)();
function TZ(e) {
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
        [d, c] = S.useState((0, Tz.x7)(o)),
        g = S.useRef(r),
        m = S.useRef(!1);
    return (
        S.useEffect(() => {
            if (g.current !== r) {
                let e = (0, Tz.x7)(r);
                u(r), c(e);
            }
            g.current = r;
        }, [r]),
        S.useEffect(() => {
            void 0 !== s || o === r || m.current || (u(r), c((0, Tz.x7)(r)));
        }, [s, r, o]),
        (0, E.jsxs)(ug.A, {
            title: t,
            titleId: TH,
            description: j.intl.string(j.t.Bbw6Ac),
            errors: i,
            disabled: a,
            children: [
                (0, E.jsx)(TX.Ay, {
                    "aria-describedby": TW,
                    "aria-labelledby": TH,
                    className: TY.i,
                    innerClassName: TY.Z,
                    maxCharacterCount: M.NA2,
                    onChange: function (e, t, i) {
                        t !== o && (u(t), c(i), n(t));
                    },
                    placeholder: l,
                    channel: TK,
                    textValue: o,
                    richValue: d,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: eH.USER_SETTINGS_MODAL_KEY,
                    type: TB.oU.PROFILE_BIO_INPUT,
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
                (0, E.jsx)(eo.A, { id: TW, children: j.intl.format(j.t["+DFxLc"], { maxLength: M.NA2 }) }),
            ],
        })
    );
}
var Tq = i(930861),
    TQ = i(821956),
    TJ = i(562819),
    T$ = i(84540),
    T0 = i(408919);
function T1(e) {
    let { user: t, guild: i, className: n, sectionTitle: s, forcedDivider: l = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, nZ.Ay)(),
        o = (0, TO.a4)({ user: t, guildId: i?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, TO.CP)(i?.id),
        c = r ? Tq.wL : oa.$n;
    return (0, E.jsx)(ug.A, {
        className: n,
        forcedDivider: l,
        hasBackground: !0,
        title: s,
        errors: d,
        children: (0, E.jsxs)("div", {
            className: T0.NC,
            children: [
                (0, E.jsx)(c, {
                    size: oa.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, TJ.L)({ analyticsLocations: a, guild: i });
                    },
                    className: e6()({ [T0.yj]: r }),
                    children: j.intl.string(j.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: T0.DT,
                        children: (0, E.jsx)(eG.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, TQ.uZ)(t, i) ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.OrokWm),
                            onClick: function () {
                                (0, T$.p)({ guildId: i?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var T2 = i(339984),
    T3 = i(114077);
let T6 = [{ name: "gif", extensions: ["gif"] }];
function T4(e) {
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
        m = c ? Tq.wL : oa.$n,
        A = S.useCallback(() => {
            (0, TF.XD)({
                uploadType: T2.HL.AVATAR,
                analyticsSource: g,
                filters: u ? T6 : void 0,
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
            className: T3.NC,
            children: [
                (0, E.jsx)(m, {
                    className: e6()({ [T3.yj]: c }),
                    size: oa.$n.Sizes.SMALL,
                    onClick: A,
                    children: l ?? j.intl.string(j.t["4OynCD"]),
                }),
                t &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: T3.DT,
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
var T7 = i(152103);
function T5(e) {
    let { user: t, guildId: i, className: n } = e,
        s = uT.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: l } = (0, nZ.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, TO.B0)(t, i),
        d = (0, S.useCallback)(() => {
            G.default.track(M.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS), (0, nq.L)({ analyticsLocations: l, guildId: i });
        }, [l, i]),
        c = (0, S.useCallback)(() => {
            (0, T$.p)({ displayNameStyles: null }), G.default.track(M.HAw.DISPLAY_NAME_STYLES_REMOVED);
        }, []),
        g = (0, S.useCallback)(() => {
            (0, T$.p)({ guildId: i, displayNameStyles: null });
        }, [i]),
        m = void 0 !== o ? o : null != i ? a : r;
    return (0, E.jsx)(ug.A, {
        title: j.intl.string(nQ.default["86GtGH"]),
        className: n,
        showPremiumIcon: s,
        errors: u,
        children: (0, E.jsxs)("div", {
            className: T7.N,
            children: [
                (0, E.jsx)(eG.$, {
                    variant: "primary",
                    size: "sm",
                    text: j.intl.string(nQ.default.vJqrIg),
                    onClick: d,
                }),
                null == i &&
                    null != m &&
                    (0, E.jsx)(eG.$, {
                        variant: "secondary",
                        size: "sm",
                        text: j.intl.string(nQ.default.ymq8WQ),
                        onClick: c,
                    }),
                null != i &&
                    null != m &&
                    (0, E.jsx)(eG.$, {
                        variant: "secondary",
                        size: "sm",
                        text: j.intl.string(nQ.default["j/KRxc"]),
                        onClick: g,
                    }),
            ],
        }),
    });
}
var T8 = i(637193),
    T9 = i(727369);
function xe(e) {
    let { user: t, guild: i, titleIcon: n } = e,
        { analyticsLocations: s } = (0, nZ.Ay)(),
        l = null != i,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, TO.rv)(t, i?.id),
        d = S.useCallback(() => {
            (0, T8.p)({ analyticsLocations: s, guildId: i?.id });
        }, [s, i?.id]),
        c = S.useCallback(() => {
            (0, T$.p)({ guildId: i?.id, nameplate: null });
        }, [i?.id]);
    return (0, E.jsx)(ug.A, {
        title: j.intl.string(j.t.x5CoXR),
        titleIcon: n,
        errors: u,
        children: (0, E.jsxs)("div", {
            className: T9.u,
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
var xt = i(33023);
function xi(e) {
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
        g = d ? Tq.wL : oa.$n;
    return (0, E.jsx)(ug.A, {
        className: l,
        title: j.intl.string(j.t.Vgdusv),
        showPremiumIcon: a,
        errors: i,
        disabled: r,
        forcedDivider: u,
        children: (0, E.jsxs)("div", {
            className: xt.NC,
            children: [
                (0, E.jsx)(g, {
                    className: e6()({ [xt.yj]: d }),
                    size: oa.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, TF.XD)({ uploadType: T2.HL.BANNER, analyticsSource: c, guildId: s, isTryItOut: o }),
                    children: j.intl.string(j.t.N0bC3P),
                }),
                t &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: xt.DT,
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
var xn = i(617061),
    xs = i(872246);
function xl(e) {
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
        c = (0, TO.N2)({ user: t, guildId: i?.id }),
        { pendingProfileEffect: g, errors: m } = (0, TO.nZ)(i?.id);
    S.useEffect(() => {
        d &&
            G.default.track(M.HAw.PREMIUM_UPSELL_VIEWED, {
                type: sQ.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            });
    }, [d, u]);
    let A = a ? Tq.wL : oa.$n;
    return (0, E.jsx)(ug.A, {
        forcedDivider: r,
        borderType: cH.i.PREMIUM,
        hasBackground: !0,
        title: l,
        showBorder: o,
        errors: m,
        className: s,
        children: (0, E.jsxs)("div", {
            className: xs.NC,
            children: [
                (0, E.jsx)(A, {
                    size: oa.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, xn.W)({ analyticsLocations: u, guild: i, initialSelectedEffect: n });
                    },
                    className: e6()({ [xs.yj]: a }),
                    children: j.intl.string(j.t["/dRfCf"]),
                }),
                (void 0 === g ? null != c : null != g) &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: xs.DT,
                        children: (0, E.jsx)(eG.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != i ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.uMuafO),
                            onClick: function () {
                                (0, T$.p)({ guildId: i?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var xr = i(13875),
    xa = i(515727),
    xo = i(238780);
function xu(e) {
    let { user: t, guild: i, sectionTitle: n } = e,
        { analyticsLocations: s } = (0, nZ.Ay)(),
        l = (0, xr.sk)("ProfileFrameSection"),
        r = (0, TO.Xf)({ user: t, guildId: i?.id }),
        { pendingProfileFrame: a, errors: o } = (0, TO.Tu)(i?.id),
        [u, d] = (0, eV.kn)([eM.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        c = u === eM.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return l
        ? (0, E.jsx)(ug.A, {
              showBorder: c,
              borderType: c ? cH.i.NEW_UPSELL : cH.i.PREMIUM,
              hasBackground: c,
              title: n,
              titleBadge: c ? (0, E.jsx)(sc.Lp, { text: j.intl.string(j.t.y2b7CA), className: xo.Ad }) : void 0,
              description: c ? j.intl.string(j.t.yMoMAt) : void 0,
              errors: o,
              children: (0, E.jsxs)("div", {
                  className: xo.NC,
                  children: [
                      (0, E.jsx)(eG.$, {
                          variant: "primary",
                          size: "sm",
                          text: j.intl.string(j.t["9/hmle"]),
                          onClick: function () {
                              (0, xa.w)({ analyticsLocations: s, guild: i }), d(ig.i.TAKE_ACTION);
                          },
                      }),
                      (void 0 === a ? null != r : null != a) &&
                          (0, E.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: xo.DT,
                              children: (0, E.jsx)(eG.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: null != i ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.nQBruk),
                                  onClick: function () {
                                      (0, T$.p)({ guildId: i?.id, profileFrame: null });
                                  },
                              }),
                          }),
                  ],
              }),
          })
        : null;
}
var xd = i(602853),
    xc = i(654107),
    xg = i(999291),
    xm = i(101928),
    xA = i(317097),
    xh = i(508274),
    xE = i(919796),
    xS = i(773431);
function xT(e) {
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
        c = (0, xd.r)(er.A.colors.BACKGROUND_BASE_LOW).hex(),
        g = er.A.colors.BACKGROUND_MOD_MUTED.css,
        m = (0, TF.sN)(n),
        A = (0, xA.Hl)(n),
        h = A === c ? g : A,
        T = m ? er.A.unsafe_rawColors.WHITE.css : er.A.unsafe_rawColors.PRIMARY_530.css,
        x = (0, xE.A)(a),
        p = (0, xE.A)(o),
        [f, N] = S.useState((0, df.A)());
    return (
        S.useEffect(() => {
            (x !== a || p !== o) && N((0, df.A)());
        }, [o, a, p, x]),
        (0, E.jsx)(ee.Y, {
            targetElementRef: d,
            positionKey: f,
            renderPopout: (e) =>
                (0, E.jsx)(xh.VN, {
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
                    className: e6()(xS.oP, { [xS.r9]: l }),
                    children: [
                        (0, E.jsx)(en.D, {
                            ...i,
                            tabIndex: l ? -1 : 0,
                            onClick: l ? M.tEg : t,
                            style: { backgroundColor: A, borderColor: h },
                            className: xS.nf,
                            "aria-label": j.intl.string(j.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, E.jsx)(uS.R, {
                                size: "custom",
                                className: xS.BW,
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
var xx = i(362656);
function xp(e) {
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
        c = (0, xg.Ay)(t.id, r),
        { primaryColor: g, secondaryColor: m } = (0, xm.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: n,
            isPreview: !0,
        }),
        A = uT.Ay.canUsePremiumProfileCustomization(t),
        h = null != i ? i : t.getAvatarURL(r, 80),
        S = (0, xd.r)(er.A.unsafe_rawColors.PRIMARY_530).hex(),
        T = (0, xc.rh)(h, S, !1);
    return null == g || null == m
        ? null
        : (0, E.jsx)(ug.A, {
              title: j.intl.string(j.t.DMeO2X),
              disabled: !A && !l,
              className: e6()(xx.__invalid_profileThemesSection, a),
              showPremiumIcon: o,
              forcedDivider: d,
              children: (0, E.jsxs)("div", {
                  className: xx.hd,
                  children: [
                      (0, E.jsx)("div", {
                          className: xx.YX,
                          children: (0, E.jsx)(xT, {
                              onChange: (e) => s([e, m]),
                              color: g,
                              suggestedColors: T,
                              showEyeDropper: !0,
                              label: (0, E.jsx)(es.E, {
                                  className: xx.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: j.intl.string(j.t.C3KTQk),
                              }),
                          }),
                      }),
                      (0, E.jsx)("div", {
                          className: xx.YX,
                          children: (0, E.jsx)(xT, {
                              onChange: (e) => s([g, e]),
                              color: m,
                              suggestedColors: T,
                              showEyeDropper: !0,
                              label: (0, E.jsx)(es.E, {
                                  className: xx.yz,
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
                              className: xx.WA,
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
function xf(e) {
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
var xN = i(427262),
    x_ = i(684732),
    xI = i(576705),
    xC = i(376294);
function xb(e) {
    let { errors: t, pendingNick: i, currentNick: n, username: s, user: l, guild: r } = e,
        a = (0, g.bG)([xI.A], () => xI.A.can(M.xBc.CHANGE_NICKNAME, r) || xI.A.can(M.xBc.MANAGE_NICKNAMES, r)),
        o = (0, Sk.L)(sQ.PremiumTypes.TIER_2);
    return (0, E.jsxs)(ug.A, {
        title: j.intl.string(j.t.me1lRk),
        errors: t,
        children: [
            (0, E.jsx)(l9.k, {
                value: i ?? n ?? "",
                placeholder: s,
                maxLength: M.d0r,
                onChange: function (e) {
                    (0, T$.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : j.intl.string(j.t.gzjxQi),
            }),
            o && (0, E.jsx)(T5, { user: l, guildId: r.id, className: xC.F }),
        ],
    });
}
var xy = i(574173);
let xv = "/assets/b25da78aa7949feb.png";
function xj(e) {
    let { user: t, showOverlay: i, children: n } = e,
        s = (0, cC.Ay)(),
        { analyticsLocations: l } = (0, nZ.Ay)(e1.A.PREMIUM_UPSELL_OVERLAY);
    return (S.useEffect(() => {
        i &&
            G.default.track(M.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: l,
                type: sQ.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            });
    }, [i, l]),
    i)
        ? (0, E.jsxs)("div", {
              className: xy.ry,
              children: [
                  (0, E.jsx)("div", { children: n }),
                  (0, E.jsxs)("div", {
                      className: xy.Wc,
                      children: [
                          (0, E.jsx)("img", {
                              className: xy.Tn,
                              alt: j.intl.string(j.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case M.NJ8.DARK:
                                      case M.NJ8.DARKER:
                                      case M.NJ8.MIDNIGHT:
                                          return xv;
                                      case M.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return xv;
                                  }
                              })(s),
                          }),
                          (0, E.jsxs)("div", {
                              className: xy._9,
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
                          (0, E.jsx)(cY.A, {
                              size: oa.$n.Sizes.LARGE,
                              color: oa.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: uT.Ay.isPremium(t)
                                      ? j.intl.string(j.t.AfRWI8)
                                      : j.intl.string(j.t.nkdUym),
                              },
                              subscriptionTier: sQ.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : n;
}
var xO = i(887267);
function xR() {
    let e = (0, g.bG)([io.default], () => {
            let e = io.default.getCurrentUser();
            return tz()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        t = (0, Sk.L)(sQ.PremiumTypes.TIER_2),
        i = (0, g.bG)([TN.A, ec.A], () => ec.A.getGuild(TN.A.selectedGuildId));
    tz()(null != i, "guild should not be null");
    let {
            pendingAvatar: n,
            pendingNickname: s,
            pendingBanner: l,
            pendingBio: r,
            pendingPronouns: a,
            pendingThemeColors: o,
            errors: u,
        } = (0, g.cf)([TN.A], () => ({ ...TN.A.getPendingChanges(i.id), errors: TN.A.getErrors(i.id) })),
        d = (0, TG.V7)({ userId: e.id, image: n }),
        c = (0, Tw.EC)(i.id),
        m = (0, g.bG)([TM.Ay], () => (null == i.id ? null : TM.Ay.getMember(i.id, e.id))),
        A = (0, g.bG)([TU.A], () => TU.A.getGuildMemberProfile(e.id, i.id)),
        h = uT.Ay.canUsePremiumProfileCustomization(e),
        S = (0, TO.z5)(n, m?.avatar),
        T = (0, TO.Ac)(l, A?.banner),
        x = (0, x_.l)(o, A?.themeColors),
        p = A?.bio ?? "",
        f = A?.pronouns ?? "";
    return (0, E.jsxs)("div", {
        className: xO.Q,
        children: [
            (0, E.jsx)(
                xb,
                {
                    errors: u?.nick ?? c?.nick,
                    username: xN.Ay.getName(e),
                    pendingNick: s,
                    currentNick: m?.nick,
                    user: e,
                    guild: i,
                },
                "nick",
            ),
            (0, E.jsx)(
                xf,
                {
                    sectionTitle: j.intl.string(j.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, T$.p)({ guildId: i.id, pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: f,
                },
                "pronouns",
            ),
            (0, E.jsxs)(xj, {
                user: e,
                showOverlay: !h,
                children: [
                    (0, E.jsx)(
                        T4,
                        {
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t.lqaIxI),
                                    (0, E.jsx)(tr.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(uu.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xO.a,
                                        }),
                                    }),
                                ],
                            }),
                            showRemoveAvatarButton: S,
                            onAvatarChange: (e) =>
                                (0, TF.rM)(e, m?.avatar, (e) => (0, T$.p)({ guildId: i.id, avatar: e })),
                            errors: u?.avatar,
                            guildId: i.id,
                            disabled: !h,
                        },
                        "avatar",
                    ),
                    (0, E.jsx)(
                        T1,
                        {
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t["7v0T9P"]),
                                    (0, E.jsx)(tr.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(uu.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xO.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: e,
                            guild: i,
                        },
                        "decoration",
                    ),
                    !t && (0, E.jsx)(T5, { user: e, guildId: i.id }),
                    (0, E.jsx)(
                        xe,
                        {
                            user: e,
                            guild: i,
                            titleIcon: (0, E.jsx)(tr.m, {
                                text: j.intl.string(j.t["5AFxuK"]),
                                children: (0, E.jsx)(uu.t, { size: "md", color: "currentColor", className: xO.a }),
                            }),
                        },
                        "nameplate",
                    ),
                    (0, E.jsx)(
                        xl,
                        {
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t.wR5wOo),
                                    (0, E.jsx)(tr.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(uu.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xO.a,
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
                        xu,
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
                                            className: xO.a,
                                        }),
                                    }),
                                ],
                            }),
                        },
                        "frame",
                    ),
                    (0, E.jsx)(
                        xi,
                        {
                            showRemoveBannerButton: T,
                            errors: u?.banner,
                            onBannerChange: (e) =>
                                (0, TF.rM)(e, A?.banner, (e) => (0, T$.p)({ guildId: i.id, banner: e })),
                            guildId: i.id,
                            disabled: !h,
                        },
                        "banner",
                    ),
                    (0, E.jsx)(xp, {
                        user: e,
                        pendingAvatarSrc: d,
                        pendingColors: o,
                        onThemeColorsChange: (e) => (0, T$.p)({ guildId: i.id, themeColors: e }),
                        guildId: i.id,
                        showResetThemeButton: x,
                    }),
                    (0, E.jsx)(
                        TZ,
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
                                            className: xO.a,
                                        }),
                                    }),
                                ],
                            }),
                            onBioChange: (e) => (0, T$.p)({ guildId: i.id, bio: e }),
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
var xL = i(405318);
function xD(e) {
    (0, K.openModalLazy)(async () => {
        let { default: t } = await Promise.all([i.e("2125"), i.e("66901"), i.e("61129")]).then(i.bind(i, 475312));
        return (i) => (0, E.jsx)(t, { source: { ...e, page: M.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...i });
    });
}
function xP(e) {
    let { selectedGuild: t, onGuildChange: i } = e,
        { analyticsLocations: n } = (0, nZ.Ay)(e1.A.USER_SETTINGS_GUILD_PROFILE),
        s = (0, g.bG)([io.default], () => {
            let e = io.default.getCurrentUser();
            return tz()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        l = (0, g.bG)([TM.Ay], () => (null != t ? TM.Ay.getMember(t.id, s.id) : null)),
        r = (0, g.bG)([TU.A], () => !TU.A.isFetchingProfile(s.id, t?.id)),
        a = (0, g.bG)([eF.A], () => eF.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, g.cf)([TN.A], () => TN.A.getPendingChanges(t?.id)),
        c = (0, TG.V7)({ userId: s.id, image: o }),
        m = (0, TO.lw)({
            pendingValue: u,
            userValue: s?.collectibles?.nameplate,
            guildValue: l?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: A } = (0, TO.B0)(s, t?.id);
    return (S.useEffect(() => () => sa.h.wait(Tv.IM), []), a)
        ? (0, E.jsx)(dT.A, {})
        : r
          ? (0, E.jsxs)(nZ.f5, {
                value: n,
                children: [
                    (0, E.jsx)(es.E, {
                        variant: "text-sm/normal",
                        children: j.intl.format(j.t["/PTB2E"], {
                            helpCenterLink: tN.A.getArticleURL(M.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(uc.A, { guildId: t.id, onChange: i }),
                                  (0, E.jsx)(TD, {
                                      profilePreviewTitle: (0, E.jsx)(eP.D, {
                                          variant: "heading-md/medium",
                                          className: xL.YV,
                                          children: j.intl.formatToPlainString(j.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, E.jsx)(TP.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: A,
                                          user: s,
                                          guild: t,
                                          canUsePremiumCustomization: uT.Ay.canUsePremiumProfileCustomization(s),
                                          onUpsellClick: xD,
                                          containerClassName: xL.ti,
                                      }),
                                      nameplatePreview: (0, E.jsx)(Tj.A, {
                                          ...d,
                                          pendingDisplayNameStyles: A,
                                          user: s,
                                          guildId: t?.id,
                                          nameplate: m,
                                          className: null == m ? xL.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, E.jsx)(xR, {}),
                                  }),
                              ],
                          })
                        : (0, E.jsx)(Tk, {}),
                ],
            })
          : (0, E.jsx)(dp.y, {});
}
var xG = i(903209),
    xU = i(39409);
function xM(e) {
    let { children: t, notice: i } = e;
    return (0, E.jsxs)("div", { className: xU.r, children: [i, (0, E.jsx)("div", { children: t })] });
}
var xV = i(269115),
    xk = i(823092),
    xw = i(662388),
    xF = i(379197),
    xB = i(488430),
    xz = i(457421),
    xX = i(940622),
    xY = i(779982),
    xH = i(144030);
let xK = function () {
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
        } = ((e = (0, xX.mb)(xY.RN.UPSELL_BANNER)),
        (t = (0, xX.mb)(xY.RN.UPSELL_BANNER_POPOUT)),
        (i = (0, g.bG)([xz.A], () => xz.A.getMarketingBySurface(xF.R.EDIT_PROFILE_SETTINGS))),
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
            () => ({ ...n, type: xB.G.BANNER, asset: e ?? n.asset, popoutAsset: t ?? n.popoutAsset }),
            [e, t, n],
        )),
        { navigateWithValidation: m } = (0, xk.L_)();
    return (
        S.useEffect(() => {
            G.default.track(M.HAw.PREMIUM_UPSELL_VIEWED, {
                type: sQ.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: s,
                version: d,
            });
        }, [s, d]),
        (0, E.jsxs)("div", {
            ref: l,
            className: xH.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, E.jsx)("div", {
                    className: xH.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, E.jsx)("img", { src: a, className: xH.Qw, alt: "" }),
                }),
                (0, E.jsxs)("div", {
                    className: xH.Em,
                    children: [
                        (0, E.jsx)(eP.D, {
                            variant: "heading-lg/extrabold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: xH.DD,
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
                            (0, xw.Cz)({
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
var xW = i(451909),
    xZ = i(202639),
    xq = i(400669),
    xQ = i(835071),
    xJ = i(422936),
    x$ = i(234419),
    x0 = i(590180),
    x1 = i(898461),
    x2 = i(207803),
    x3 = i(508425),
    x6 = i(559949);
let x4 = {
        above_the_clouds: {
            preset: "above_the_clouds",
            themeColors: [752280, 9215590],
            avatarDecorationSkuId: "1144059132517826601",
            displayNameStyles: { fontId: x6.x.CHICLE, effectId: x3.z.POP, colors: [959694] },
            getName: () => j.intl.string(j.t["TFc+iF"]),
            getHeaderSrc: () => i(702051).A,
            getBannerSrc: (e) => (e ? i(735161).A : i(887e3).A),
        },
        cyberpunk: {
            preset: "cyberpunk",
            themeColors: [1967991, 742532],
            avatarDecorationSkuId: null,
            displayNameStyles: { fontId: x6.x.PIXELIFY, effectId: x3.z.NEON, colors: [2949343] },
            getName: () => j.intl.string(j.t["4g+5bq"]),
            getHeaderSrc: () => i(272017).A,
            getBannerSrc: (e) => (e ? i(735271).A : i(208574).A),
        },
        shadow_realm: {
            preset: "shadow_realm",
            themeColors: [0, 4458504],
            avatarDecorationSkuId: "1144058522808614923",
            displayNameStyles: { fontId: x6.x.NEO_CASTEL, effectId: x3.z.TOON, colors: [0xff0000] },
            getName: () => j.intl.string(j.t.ycg1xj),
            getHeaderSrc: () => i(863653).A,
            getBannerSrc: (e) => (e ? i(538263).A : i(576974).A),
        },
        starlit_dream: {
            preset: "starlit_dream",
            themeColors: [5123751, 590625],
            avatarDecorationSkuId: "1144058844004233369",
            displayNameStyles: { fontId: x6.x.CHERRY_BOMB, effectId: x3.z.TOON, colors: [3343795] },
            getName: () => j.intl.string(j.t["9WLHvr"]),
            getHeaderSrc: () => i(434361).A,
            getBannerSrc: (e) => (e ? i(700309).A : i(135572).A),
        },
        neon_space: {
            preset: "neon_space",
            themeColors: [6094952, 1007678],
            avatarDecorationSkuId: null,
            displayNameStyles: { fontId: x6.x.MUSEO_MODERNO, effectId: x3.z.NEON, colors: [28737] },
            getName: () => j.intl.string(j.t.UdNuqi),
            getHeaderSrc: () => i(301928).A,
            getBannerSrc: (e) => (e ? i(285974).A : i(775627).A),
        },
    },
    x7 = Object.keys(x4);
function x5(e) {
    let t = null == e ? x7 : x7.filter((t) => t !== e);
    return t[Math.floor(Math.random() * t.length)];
}
var x8 = i(371912),
    x9 = i(674253);
function pe(e) {
    let { preset: t, onShuffle: i } = e,
        n = (0, g.bG)([i7.Ay], () => i7.Ay.useReducedMotion),
        s = (0, x8.Xf)({ useReducedMotion: n }),
        { name: l, header: r } = S.useMemo(() => {
            let e = x4[t];
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, E.jsxs)("div", {
        className: x9.kL,
        children: [
            (0, E.jsx)(en.D, {
                onClick: () => {
                    i(), s.startAnimation(!1);
                },
                className: x9.x6,
                "aria-label": j.intl.string(j.t["44yJxh"]),
                children: s.render(),
            }),
            (0, E.jsxs)(en.D, {
                onClick: () => {
                    i(), s.startAnimation(!1);
                },
                "aria-label": `${l}: ${j.intl.string(j.t["44yJxh"])}`,
                className: x9.Lt,
                children: [
                    (0, E.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: x9.L_ }),
                    (0, E.jsx)(es.E, { className: x9._e, variant: "text-sm/bold", color: "always-white", children: l }),
                ],
            }),
        ],
    });
}
var pt = i(410516),
    pi = i(811611),
    pn = i(515718),
    ps = i(507553);
function pl(e, t) {
    let i = ps.A.useField("scrollPosition"),
        n = (0, g.bG)([i7.Ay], () => i7.Ay.useReducedMotion);
    (0, S.useEffect)(() => {
        let s = e.current;
        if (null == s || i !== t) return;
        let l = requestAnimationFrame(() => {
            s.scrollIntoView({ behavior: n ? "auto" : "smooth" }), ps.A.setState({ scrollPosition: null });
        });
        return () => cancelAnimationFrame(l);
    }, [e, t, i, n]);
}
var pr = i(844222),
    pa = i(314649);
function po(e) {
    let { user: t } = e,
        { reducedMotion: n } = S.useContext(pr.C),
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
        } = (0, g.cf)([TN.A], () => {
            let e = TN.A.getPendingChanges(),
                t = TN.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        p = (0, TG.V7)({ userId: t.id, image: A ?? s });
    return (0, E.jsx)(TP.A, {
        user: t,
        pendingPronouns: d,
        pendingBio: c,
        pendingBanner: h ?? l ?? i(636763),
        pendingDisplayNameStyles: x ?? o,
        pendingAvatar: p,
        pendingThemeColors: m ?? u,
        pendingAvatarDecoration: void 0 !== T ? T : r,
        pendingProfileEffect: a,
        avatarClassName: null != A || null != s || n.enabled ? void 0 : pa.WX,
        containerClassName: pa.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var pu = i(461414);
function pd(e) {
    let { user: t, isVisible: i, shouldShow: n } = e,
        s = uT.Ay.isPremium(t),
        l = uT.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, g.cf)([TN.A], () => {
            let e = TN.A.getPendingChanges(),
                t = TN.A.getErrors(),
                i = TN.A.getTryItOutChanges();
            return { ...e, ...i, errors: t };
        }),
        { preset: c, onShuffle: m } = (function () {
            let e = (0, g.bG)([i7.Ay], () => i7.Ay.useReducedMotion),
                [t, i] = (0, S.useState)(x5()),
                {
                    banner: n,
                    themeColors: s,
                    avatarDecorationSkuId: l,
                    displayNameStyles: r,
                } = (0, S.useMemo)(() => {
                    let i = x4[t];
                    return {
                        banner: i.getBannerSrc(e),
                        themeColors: i.themeColors,
                        avatarDecorationSkuId: i.avatarDecorationSkuId,
                        displayNameStyles: i.displayNameStyles,
                    };
                }, [t, e]),
                a = (0, g.bG)([x0.A], () => {
                    let e = x0.A.getProduct(l);
                    return (0, x1.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, S.useEffect)(() => {
                (0, x2.w5)({ banner: n, themeColors: s, avatarDecoration: a, displayNameStyles: r });
            }, [n, s, a, r]);
            let o = (0, S.useCallback)(() => {
                let e = x5(t);
                i(e), G.default.track(M.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: e });
            }, [t]);
            return { preset: t, onShuffle: o };
        })(),
        A = S.useRef(null);
    pl(A, nw._F.TRY_IT_OUT);
    let { analyticsLocations: h, sourceAnalyticsLocations: T } = (0, nZ.Ay)(e1.A.USER_SETTINGS_TRY_OUT_PREMIUM),
        x = (e) => {
            e &&
                (d?.startsWith("https:") === !0
                    ? fetch(d)
                          .then((e) => e.blob())
                          .then((e) => (0, pn.We)(e))
                          .then((e) => {
                              (0, T$.p)({ avatar: u, themeColors: o, banner: e });
                          })
                          .catch(() => {
                              (0, T$.p)({ avatar: u, themeColors: o });
                          })
                    : null != d
                      ? (0, T$.p)({ avatar: u, themeColors: o, banner: d })
                      : (0, T$.p)({ avatar: u, themeColors: o }),
                G.default.track(M.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
        };
    S.useEffect(() => {
        i &&
            G.default.track(M.HAw.PREMIUM_UPSELL_VIEWED, {
                type: sQ.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: M.liQ.USER_SETTINGS },
                location_stack: T,
            });
    }, [T, t, i]);
    let p = (0, x$.V)()?.subscription_trial?.sku_id === sQ.pe.TIER_2,
        f = (0, xJ.O)(),
        N = (0, pt.U9)(f, sQ.pe.TIER_2);
    return n
        ? (0, E.jsx)(nZ.f5, {
              value: h,
              children: (0, E.jsxs)(cH.A, {
                  ref: A,
                  className: pu.MT,
                  type: cH.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, E.jsx)(TD, {
                          stickyPreview: !1,
                          layoutClassName: pu.th,
                          profilePreviewTitle: (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(uu.t, { size: "md", color: "currentColor", className: pu.PC }),
                                  j.intl.string(j.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, E.jsxs)(E.Fragment, {
                              children: [(0, E.jsx)(pe, { preset: c, onShuffle: m }), (0, E.jsx)(po, { user: t })],
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
                                              className: pu.h_,
                                              variant: "text-sm/normal",
                                              children: j.intl.string(j.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, E.jsx)(xp, {
                                      className: pu.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, TG.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: x2.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, E.jsx)(xi, {
                                      className: pu.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: x2.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !l &&
                                      (0, E.jsx)(T4, {
                                          className: pu.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: x2.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: j.intl.string(j.t["7z0D1c"]),
                                          sectionTitle: j.intl.string(j.t.vtFfPX),
                                      }),
                                  (0, E.jsx)(T5, { user: t, className: pu.fz }),
                                  !p &&
                                      (0, E.jsx)(es.E, {
                                          variant: "text-sm/normal",
                                          children: j.intl.string(j.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !p &&
                          (0, E.jsx)(xZ.d, {
                              onSubscribeModalClose: x,
                              className: pu.Kv,
                              showUpsell: !0,
                              text: j.intl.format(j.t.TmfgI2, {
                                  onClick: () => {
                                      (0, xQ.K)({ onSubscribeFinish: x });
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
                                  (0, E.jsx)("div", { className: pu.BU }),
                                  (0, E.jsx)(pi.Ay, {
                                      type: sQ.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: sQ.pe.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
var pc = i(814390),
    pg = i(909536),
    pm = i(843282),
    pA = i(145497),
    ph = i(685073),
    pE = i(534400),
    pS = i(581781),
    pT = i(743981),
    px = i(51358);
let pp = (0, sZ.Ld)(),
    pf = S.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: i, onChange: n } = e,
            s = S.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            l = (0, g.bG)([io.default], () => (0, ph.Zo)(io.default.getCurrentUser()?.primaryGuild).guildId),
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
                        : (0, E.jsx)(pS.A, {
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
                        : (0, E.jsx)(pA.j, {
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
                        : (0, E.jsx)(pE.o9, {
                              guildId: t.id,
                              guildTag: i,
                              guildBadge: t.profile?.badge ?? void 0,
                              badgeSize: pT.Sl.SIZE_16,
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
            pl(x, nw._F.GUILD_TAG),
            (0, E.jsxs)(ug.A, {
                title: j.intl.string(j.t.Pdd1nd),
                titleId: pp,
                ref: x,
                children: [
                    (0, E.jsx)(es.E, {
                        className: px.VA,
                        variant: "text-sm/normal",
                        children: j.intl.string(j.t.mlZ6Jx),
                    }),
                    (0, E.jsx)(pm.Pw, {
                        className: px.Lt,
                        optionClassName: px.S0,
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
var pN = i(318785),
    p_ = i(992526),
    pI = i(470739);
let pC = function () {
    return (0, p_.J9)({ location: "UserSettingsProfileCustomization" })
        ? (0, E.jsx)(ug.A, {
              title: j.intl.string(j.t.l6w3Vj),
              description: j.intl.string(j.t.joHqdj),
              children: (0, E.jsx)(eG.$, {
                  text: j.intl.string(j.t.wRraFx),
                  onClick: () => {
                      (0, pI._)();
                  },
                  size: "sm",
              }),
          })
        : null;
};
var pb = i(556729);
let py = (0, sZ.Ld)();
function pv(e) {
    let t = (0, Sk.L)(sQ.PremiumTypes.TIER_2);
    return (0, E.jsxs)(ug.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: j.intl.string(j.t["9AjdkD"]),
        titleId: py,
        children: [
            (0, E.jsx)("div", {
                children: (0, E.jsx)(l9.k, {
                    "aria-labelledby": py,
                    placeholder: e.placeholder,
                    maxLength: M.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, E.jsx)(T5, { user: e.user, className: pb.F }),
        ],
    });
}
var pj = i(210039);
function pO(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: i } = e,
        n = L.m$.useSetting(),
        s = void 0 !== i ? i : n;
    return (0, E.jsx)("div", {
        className: pj.u,
        children: (0, E.jsx)(J.d, {
            label: j.intl.string(j.t["3cWDuO"]),
            description: s ? null : j.intl.formatToPlainString(j.t.aYhclf, { username: t }),
            checked: !s,
            onChange: (e) => {
                !e === n ? (0, Tp._e)() : (0, T$.p)({ legacyUsernameDisabled: !e });
            },
        }),
    });
}
function pR(e) {
    let { user: t, savedUserColor: i, pendingColor: n, setPendingAccentColor: s } = e,
        l = t.getAvatarURL(null, 80),
        r = (0, xd.r)(er.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, xc.rh)(l, r, !1),
        o = (0, xA.LX)(a[0]);
    return (0, E.jsx)(ug.A, {
        title: j.intl.string(j.t["/X3fkf"]),
        children: (0, E.jsx)(xT, { onChange: (e) => s(e), color: n ?? i ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var pL = i(518477);
let pD = function () {
    let e = (0, g.bG)([c2.default], () => c2.default.getId());
    return (0, E.jsx)(ug.A, {
        title: j.intl.string(j.t.Jzj9q4),
        children: (0, E.jsx)(eG.$, {
            text: j.intl.string(j.t.Geikwq),
            onClick: () => {
                (0, TC.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [e1.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: pL.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var pP = i(594453);
function pG() {
    let e = (0, g.bG)([io.default], () => {
            let e = io.default.getCurrentUser();
            return tz()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e;
        }),
        t = (0, g.bG)([TU.A], () => TU.A.getUserProfile(e.id)),
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
        } = (0, g.cf)([TN.A], () => {
            let e = TN.A.getPendingChanges(),
                t = TN.A.getErrors();
            return { ...e, errors: t };
        }),
        m = (0, TG.V7)({ userId: e.id, image: i }),
        A = (0, Tw.EC)(),
        h = uT.Ay.canUsePremiumProfileCustomization(e),
        S = (0, TO.z5)(i, e.avatar),
        T = (0, TO.Ac)(s, t?.banner),
        x = (0, xg.Ay)(e.id),
        p = x?.getLegacyUsername(),
        f = (c.global_name?.length ?? 0) > 0 ? c.global_name : (A?.nick ?? []),
        N = (c.bio?.length ?? 0) > 0 ? c.bio : (A?.bio ?? []),
        _ = (0, pN.b)();
    return (0, E.jsxs)("div", {
        className: pP.Q,
        children: [
            (0, E.jsx)(pv, {
                placeholder: e.username,
                errors: f,
                currentGlobalName: e.globalName,
                pendingGlobalName: n,
                onGlobalNameChange: (e) => (0, T$.p)({ globalName: e }),
                user: e,
            }),
            (0, E.jsx)(
                xf,
                {
                    sectionTitle: j.intl.string(j.t["+T3RI/"]),
                    errors: c.pronouns,
                    onPronounsChange: (e) => (0, T$.p)({ pronouns: e }),
                    pendingPronouns: r,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, E.jsx)(pD, {}),
            (0, E.jsx)(
                T4,
                {
                    onAvatarChange: (e) => {
                        (0, T$.p)({ avatar: e }), (0, TO.WU)(null == e ? "remove" : "set");
                    },
                    showRemoveAvatarButton: S,
                    errors: c.avatar,
                    sectionTitle: j.intl.string(j.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, E.jsx)(T1, { user: e, sectionTitle: j.intl.string(j.t["7v0T9P"]) }, "decoration"),
            (0, E.jsx)(xe, { user: e }),
            (0, E.jsx)(xl, { user: e, sectionTitle: j.intl.string(j.t.wR5wOo) }, "effect"),
            (0, E.jsx)(xu, { user: e, sectionTitle: j.intl.string(j.t.GWrZOd) }, "frame"),
            h
                ? (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsx)(
                              xi,
                              {
                                  showRemoveBannerButton: T,
                                  errors: c.banner,
                                  onBannerChange: (e) => (0, T$.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, E.jsx)(xp, {
                              user: e,
                              pendingAvatarSrc: m,
                              pendingColors: o,
                              onThemeColorsChange: (e) => (0, T$.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, E.jsx)(
                      pR,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: a,
                          setPendingAccentColor: (e) => (0, T$.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, E.jsx)(
                TZ,
                {
                    sectionTitle: j.intl.string(j.t.ZzAR2Y),
                    errors: N,
                    onBioChange: (e) => (0, T$.p)({ bio: e }),
                    pendingBio: l,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            _.length > 0 &&
                (0, E.jsx)(pf, {
                    availablePrimaryGuilds: _,
                    pendingPrimaryGuildId: d,
                    onChange: (e) => (0, T$.p)({ primaryGuildId: e }),
                }),
            null != p && (0, E.jsx)(pO, { legacyUsername: p, pendingLegacyUsernameDisabled: u }, "legacy_username"),
            (0, E.jsx)(pC, {}, "badges"),
        ],
    });
}
function pU() {
    (0, K.openModalLazy)(async () => {
        let { default: e } = await Promise.all([i.e("2125"), i.e("66901"), i.e("41704")]).then(i.bind(i, 562011));
        return (t) =>
            (0, E.jsx)(e, {
                ...t,
                source: {
                    page: M.liQ.USER_SETTINGS,
                    section: M.JJy.SETTINGS_CUSTOMIZE_PROFILE,
                    object: M.ZSU.BUTTON_CTA,
                    type: M.AnalyticsObjectTypes.BUY,
                },
            });
    });
}
var pM = i(743539);
function pV() {
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
        } = (0, g.cf)([TN.A], () => ({ ...TN.A.getPendingChanges(), showNotice: TN.A.showNotice() })),
        a = (0, TG.V7)({ userId: e.id, image: n }),
        o = (0, TO.lw)({ pendingValue: s, userValue: e?.collectibles?.nameplate }),
        u = (0, pc.A)() && null != i ? xW.Ay.parse(void 0, i).content : i,
        d = uT.Ay.canUsePremiumProfileCustomization(e),
        c = (0, pg.St)("edit-profile-upsell"),
        { analyticsLocations: m } = (0, nZ.Ay)(e1.A.USER_SETTINGS_USER_PROFILE);
    S.useEffect(() => () => sa.h.wait(Tp.IM), []);
    let [A, h] = S.useState(!1),
        T = !d,
        x = S.useRef(null);
    return t
        ? (0, E.jsx)(dT.A, {})
        : (0, E.jsxs)(nZ.f5, {
              value: m,
              children: [
                  (0, E.jsx)(xK, {}),
                  (0, E.jsx)(TD, {
                      profilePreview: (0, E.jsx)(TP.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: pU,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: pM.ti,
                      }),
                      nameplatePreview: (0, E.jsx)(Tj.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? pM.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, E.jsx)(pG, {}),
                  }),
                  (0, E.jsx)(xV.L, {
                      innerRef: x,
                      onChange: (e) => h(e),
                      threshold: 0.25,
                      active: T,
                      children: (0, E.jsx)("div", {
                          ref: x,
                          children: (0, E.jsx)(pd, { user: e, shouldShow: T, isVisible: A }),
                      }),
                  }),
                  T &&
                      !l &&
                      (0, E.jsx)(xZ.d, {
                          className: pM.EL,
                          showUpsell: !A,
                          text: j.intl.format(j.t.TmfgI2, { onClick: () => (0, xQ.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: c
                              ? (0, E.jsx)(xq.l, { size: "md", location: e1.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL })
                              : void 0,
                          button: (0, E.jsx)("div", {
                              className: pM.Xl,
                              children: (0, E.jsx)(eG.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      G.default.track(M.HAw.TRY_IT_OUT_PRESET_CLICKED, {
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
var pk = i(625494),
    pw = i(454078);
let pF = { [nw.Eq.USER_PROFILE]: "main_profile_tab", [nw.Eq.GUILD]: "guild_profile_tab" },
    pB = (0, a.E2)(u.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, g.bG)([ra.A, eg.Ay, TN.A], () => {
                    let e = TN.A.selectedGuildId ?? ra.A.getGuildId();
                    return null == e || TN._.has(e) ? eg.Ay.getFlattenedGuildIds().find((e) => !TN._.has(e)) : e;
                }),
                t = (0, g.bG)([ec.A], () => ec.A.getGuild(e)),
                i = (0, g.bG)([TN.A], () => TN.A.showNotice()),
                n = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
                s = ps.A.useField("subsection");
            return (
                S.useEffect(() => {
                    (0, rQ._)(pF[s]);
                }, [s]),
                S.useEffect(() => {
                    null != n && t?.id != null && (0, xG.A)(n.id, n.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, n]),
                (0, E.jsx)(xM, {
                    children: (0, E.jsxs)(cI.F, {
                        component: (0, E.jsx)(eo.A, {
                            children: (0, E.jsx)(eP.D, {
                                variant: "heading-xl/normal",
                                children: j.intl.string(j.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, E.jsxs)(Tb.V, {
                                className: pw.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: s,
                                onItemSelect: function (e) {
                                    if (s !== e) {
                                        if (i) {
                                            (0, rJ.fO)({ duration: 300, intensity: Ty.n3 }),
                                                pk._.dispatch(M.jej.EMPHASIZE_NOTICE);
                                            return;
                                        }
                                        e === nw.Eq.GUILD && null != t && (0, Tv.V2)(t.id),
                                            ps.A.setState({ subsection: e });
                                    }
                                },
                                children: [
                                    (0, E.jsx)(
                                        Tb.V.Item,
                                        {
                                            className: pw.YU,
                                            id: nw.Eq.USER_PROFILE,
                                            children: j.intl.string(j.t["2p07FR"]),
                                        },
                                        nw.Eq.USER_PROFILE,
                                    ),
                                    (0, E.jsx)(
                                        Tb.V.Item,
                                        {
                                            className: e6()(pw.YU, pw.HY),
                                            "aria-label": j.intl.string(j.t.kPHroX),
                                            id: nw.Eq.GUILD,
                                            children: j.intl.string(j.t.kPHroX),
                                        },
                                        nw.Eq.GUILD,
                                    ),
                                ],
                            }),
                            s === nw.Eq.GUILD
                                ? (0, E.jsx)(xP, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (i) {
                                              (0, rJ.fO)({ duration: 300, intensity: Ty.n3 }),
                                                  pk._.dispatch(M.jej.EMPHASIZE_NOTICE);
                                              return;
                                          }
                                          null != e && (0, Tv.JJ)(e.id);
                                      },
                                  })
                                : (0, E.jsx)(pV, {}),
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
    pz = (0, a.zZ)(u.X.PROFILE_CATEGORY, { buildLayout: () => [pB] });
var pX = i(294666);
function pY() {
    let e = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: i } = (0, TI.A)({ userId: e?.id, size: i4._3.SIZE_48 });
    return null == e
        ? null
        : (0, E.jsxs)("div", {
              className: pX.a5,
              children: [
                  (0, E.jsx)(i6.eu, {
                      src: t,
                      avatarDecoration: i,
                      size: i4._3.SIZE_48,
                      "aria-label": j.intl.string(j.t.lqaIxI),
                  }),
                  (0, E.jsxs)("div", {
                      className: pX.FS,
                      children: [
                          (0, E.jsx)(es.E, {
                              color: "text-strong",
                              variant: "text-md/medium",
                              lineClamp: 1,
                              children: e.globalName ?? e.username,
                          }),
                          (0, E.jsxs)("div", {
                              className: pX.Fk,
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
let pH = (0, a.t_)(u.X.PROFILE_PANEL, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        notice: { stores: [TN.A], element: Tf.A },
        initialize: () => () =>
            sa.h.wait(() => {
                (0, Tp.F7)();
            }),
        buildLayout: () => [pz],
    }),
    pK = (0, a.i4)(u.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        icon: pZ,
        StronglyDiscouragedCustomComponent: pY,
        usePredicate: () => !(0, T_.X)("user_settings_sidebar"),
        buildLayout: () => [pH],
    }),
    pW = (0, a.i4)(u.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        icon: pZ,
        StronglyDiscouragedCustomComponent: pY,
        usePredicate: () => (0, T_.X)("user_settings_sidebar"),
        onClick: () => {
            let e = c2.default.getId();
            (0, TC.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function pZ() {
    let e = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: i } = (0, TI.A)({ userId: e?.id, size: i4._3.SIZE_48 });
    return (0, E.jsx)(i6.eu, { src: t, avatarDecoration: i, size: i4._3.SIZE_20, "aria-hidden": !0 });
}
let pq = (0, a.WI)(u.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [pK, pW] });
var pQ = i(98207),
    pJ = (i(204925), i(818348));
let p$ = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, K.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([i.e("40933"), i.e("19623"), i.e("21007")]).then(i.bind(i, 888363));
            return (i) => (0, E.jsx)(t, { claimRequired: e, ...i });
        },
        { onCloseRequest: e ? pJ.tE : null, onCloseCallback: t },
    );
};
var p0 = i(940856),
    p1 = i(36149),
    p2 = i(207560);
function p3(e) {
    let t = (0, p2.fk)(),
        i = (0, p1.b8)(),
        n = (0, p1.yM)(),
        s = (0, p1.Y2)();
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
var p6 = i(516761);
function p4() {
    let e = j.intl.string(j.t.XxRj7f);
    return (0, E.jsxs)(es.E, {
        variant: "text-md/medium",
        children: [
            `${e} \u{2022} `,
            j.intl.format(p6.default.WM5adV, {
                handleOnHelpUrlHook: function () {
                    return window.open(tN.A.getArticleURL(M.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank");
                },
            }),
        ],
    });
}
let p7 = (0, a.Tf)(u.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, {
        usePredicate: () => p3("edit"),
        useTitle: () => j.intl.string(j.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: h._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: p4 }),
        useLabel: () => j.intl.string(j.t.bt75uw),
        onClick: function () {
            (0, K.openModalLazy)(async () => {
                let { default: e } = await i.e("45361").then(i.bind(i, 151080));
                return (t) => (0, E.jsx)(e, { ...t });
            });
        },
    }),
    p5 = (0, a.E2)(u.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, {
        usePredicate: () => p3("info"),
        useSearchTerms: () => [j.intl.string(j.t["/52UYy"])],
        Component: function () {
            return (0, E.jsx)(s4.D, {
                label: j.intl.string(j.t["/52UYy"]),
                layout: "horizontal",
                children: (0, E.jsxs)(Q.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "end",
                    gap: "md",
                    children: [
                        (0, E.jsx)(es.E, { variant: "text-md/medium", children: j.intl.string(j.t.XxRj7f) }),
                        (0, E.jsx)("div", {
                            style: { visibility: "hidden" },
                            children: (0, E.jsx)(eG.$, {
                                onClick: pJ.tE,
                                text: j.intl.string(j.t.bt75uw),
                                "aria-hidden": !0,
                            }),
                        }),
                    ],
                }),
            });
        },
    });
var p8 = i(379257),
    p9 = i(847599);
function fe() {
    return (0, p1.yM)() ? j.intl.string(j.t.sK0dmH) : j.intl.string(j.t.lKDPGA);
}
let ft = (0, a.Tf)(u.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, {
        usePredicate: () => p3("verify"),
        useTitle: () => j.intl.string(j.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: h._1.TEXT, useText: fe }),
        useLabel: function () {
            return (0, p1.yM)() ? j.intl.string(j.t["9KiIz6"]) : j.intl.string(j.t.DVywUB);
        },
        onClick: () => p8.A.showAgeVerificationGetStartedModal({ entryPoint: p9.q1.ACCOUNT_AGE_GROUP }),
    }),
    fi = (0, a.Tf)(u.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, g.bG)([io.default], () => io.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => j.intl.string(j.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: h._1.TEXT, useText: () => j.intl.string(j.t.qxk9zo) }),
        useLabel: () => j.intl.string(j.t.BleMPB),
        onClick: () => p$(),
    });
function fn(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function fs(e) {
    let [t, i] = e.split("@");
    return `${"*".repeat(t.length)}@${i}`;
}
function fl(e) {
    let { text: t, censor: i, revealLabel: n, hideLabel: s, redesign: l = !1 } = e,
        [r, a] = S.useState(!1),
        o = r ? t : i(t);
    return (0, E.jsxs)(Q.B, {
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
function fr() {
    let e = (0, g.bG)([io.default], () => io.default.getCurrentUser()?.email);
    return null == e
        ? (0, E.jsx)(es.E, { variant: "text-md/medium", children: j.intl.string(j.t["8SfTN/"]) })
        : (0, E.jsx)(fl, {
              text: e,
              censor: fs,
              revealLabel: j.intl.string(j.t["Zvx+yV"]),
              hideLabel: j.intl.string(j.t.nqTD4d),
              redesign: !0,
          });
}
let fa = (0, a.Tf)(u.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, g.bG)([io.default], () => io.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => j.intl.string(j.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: h._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: fr }),
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
var fo = i(557722),
    fu = i(53516);
function fd() {
    let e = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, E.jsx)(es.E, { variant: "text-md/medium", children: j.intl.string(j.t.I5kDqj) })
        : (0, E.jsx)(Q.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, E.jsx)(fl, {
                  text: t,
                  censor: fn,
                  revealLabel: j.intl.string(j.t.eY3xlT),
                  hideLabel: j.intl.string(j.t["jllbv+"]),
                  redesign: !0,
              }),
          });
}
let fc = (0, a.Tf)(u.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, g.bG)([io.default], () => io.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => j.intl.string(j.t.kerONq),
    useAriaLabel: function () {
        return null == (0, g.bG)([io.default], () => io.default.getCurrentUser()?.phone)
            ? j.intl.string(j.t["SfUuE+"])
            : j.intl.string(j.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: h._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: fd }),
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
                      return (t) => (0, E.jsx)(e, { reason: fo.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: fu.V },
              )
            : (0, K.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([i.e("25866"), i.e("63314")]).then(i.bind(i, 660740));
                  return (t) => (0, E.jsx)(e, { ...t });
              });
    },
});
function fg() {
    let e = (0, g.bG)([io.default], () => io.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function fm() {
    let e = (0, Tw.EC)(),
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
let fA = (0, a.Tf)(u.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => j.intl.string(j.t.qqhR3L),
        useTrailingContent: () => ({ type: h._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: fm }),
        useLabel: () => j.intl.string(j.t.bt75uw),
        useAriaLabel: () => j.intl.string(j.t.JECa91),
        useSubtitle: () => (fg() ? j.intl.string(j.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: fg,
        onClick: function () {
            (0, K.openModalLazy)(async () => {
                let { default: e } = await Promise.all([i.e("38408"), i.e("20429"), i.e("43350")]).then(
                    i.bind(i, 667792),
                );
                return (t) => (0, E.jsx)(e, { ...t });
            });
        },
    }),
    fh = (0, a.zZ)(u.X.ACCOUNT_INFO_CATEGORY, {
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
                            button: { useText: () => j.intl.string(j.t.lm1UKt), onClick: () => (0, p0.S)(e) },
                        }
                  : {
                        type: h.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        useTitle: () => j.intl.string(j.t["/3qnL/"]),
                        useText: () => j.intl.string(j.t.qKs3vg),
                        button: { useText: () => j.intl.string(j.t["7psymi"]), onClick: () => p$() },
                    };
        },
        buildLayout: () => [fA, fi, fa, fc, ft, p7, p5],
    });
var fE = i(398177);
let fS = (0, a.Tf)(u.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
    useTitle: () => j.intl.string(j.t["CIGa+7"]),
    useLabel: () => j.intl.string(j.t.bt75uw),
    useAriaLabel: () => j.intl.string(j.t["FRep5/"]),
    useVariant: () => "secondary",
    onClick: () => {
        (0, K.openModal)((e) => (0, E.jsx)(fE.default, { ...e, onSuccess: () => e.onClose() }));
    },
});
var fT = i(200921);
let fx = [];
function fp() {
    fx = [];
}
class ff extends g.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return fx;
    }
}
let fN = new ff(sa.h, {
    LOGOUT: fp,
    LOGIN_SUCCESS: fp,
    FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessions: t } = e;
        fx = t.map((e) => ({ ...e, approx_last_used_time: new Date(e.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessionIdHashes: t } = e,
            i = [...fx],
            n = !1;
        for (let e of t) {
            let t = i.findIndex((t) => t.id_hash === e);
            t >= 0 && (i.splice(t, 1), (n = !0));
        }
        if (!n) return !1;
        fx = i;
    },
});
function f_() {
    let e = (0, g.cf)([fN], () => fN.getSessions());
    return S.useMemo(() => {
        let t = [...e],
            i = null,
            n = c2.default.getAuthSessionIdHash();
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
function fI(e) {
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? j.intl.string(j.t.TXCmfL) : r4()(e).fromNow();
}
var fC = i(176524),
    fb = i(646270),
    fy = i(738678),
    fv = i(490173);
function fj(e) {
    let { icon: t, label: i, subLabel: n, description: s, children: l, muted: r } = e;
    return (0, E.jsxs)(Q.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, E.jsx)(fC.A, { Icon: t, color: r ? er.A.colors.ICON_MUTED : "currentColor" }),
            (0, E.jsxs)(Q.B, {
                direction: "vertical",
                gap: "xxs",
                children: [
                    (0, E.jsxs)(Q.B, {
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
function fO(e) {
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
                            return { text: e, icon: fb.u };
                        case "horizon os":
                            return { text: e, icon: fy.G };
                        default:
                            return { text: e, icon: to.k };
                    }
                })(e.client_info?.os);
            return { location: i, platform: n, os: s, Icon: l, lastActive: t ? null : fI(e.approx_last_used_time) };
        })(t, i),
        o = [n, a].filter(N.Vq);
    return (0, E.jsx)(fj, {
        icon: r,
        label: l,
        subLabel: s,
        description: o.join(" \xb7 "),
        children:
            !i &&
            (0, E.jsx)(en.D, {
                className: fv.X,
                onClick: () => (0, fT.U0)(t.id_hash),
                "aria-label": j.intl.string(j.t.E4MJNt),
                children: (0, E.jsx)(gq.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function fR(e) {
    let { title: t, children: i } = e,
        n = S.useId();
    return (0, E.jsxs)(Q.B, {
        role: "group",
        "aria-labelledby": n,
        gap: "xl",
        padding: { top: 8, bottom: 8 },
        children: [
            (0, E.jsx)(eP.D, { id: n, variant: "heading-md/semibold", color: "text-muted", children: t }),
            (0, E.jsx)(Q.B, { role: "list", gap: "xl", children: i }),
        ],
    });
}
let fL = (0, a.E2)(u.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            let { currentSession: e } = f_();
            return null == e
                ? (0, E.jsx)(dp.y, {})
                : (0, E.jsx)(fR, {
                      title: j.intl.string(j.t.LLS19o),
                      children: (0, E.jsx)(fO, { session: e, current: !0 }),
                  });
        },
        useSearchTerms: () => [],
    }),
    fD = (0, a.E2)(u.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = f_();
            return (0, E.jsx)(s4.D, {
                label: j.intl.string(j.t.Vij32M),
                description: j.intl.string(j.t.OTXyaf),
                children: (0, E.jsx)(eG.$, {
                    onClick: () => (0, fT.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: j.intl.string(j.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [j.intl.string(j.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = f_();
            return e.length > 0;
        },
    });
var fP = i(766928);
function fG() {
    return (0, E.jsx)(fj, {
        icon: fP.W,
        label: j.intl.string(j.t.iUa0sn),
        description: j.intl.format(j.t["044+8i"], {
            onClick: () =>
                (0, eH.openUserSettings)(u.X.ACCOUNT_PANEL, { analyticsLocations: [e1.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
let fU = (0, a.E2)(u.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = f_(),
                t = (0, g.bG)([io.default], () => io.default.getCurrentUser());
            return (0, E.jsxs)(fR, {
                title: j.intl.string(j.t.xx1MWc),
                children: [
                    e.map((e) => (0, E.jsx)(fO, { session: e }, e.id_hash)),
                    t?.mfaEnabled ? null : (0, E.jsx)(fG, {}),
                ],
            });
        },
        useSearchTerms: () => [j.intl.string(j.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = f_(),
                t = (0, g.bG)([io.default], () => io.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    fM = (0, a.zZ)(u.X.SESSIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.mEndXM),
        useSubtitle: () => j.intl.string(j.t.b7ZpTM),
        initialize: () => {
            (0, fT.GY)();
        },
        buildLayout: () => [fL, fU, fD],
        useSearchTerms: () => [
            j.intl.string(j.t["+1h0k/"]),
            j.intl.string(j.t.LLS19o),
            j.intl.string(j.t.xx1MWc),
            j.intl.string(j.t.lSWsrd),
        ],
    }),
    fV = (0, a.t_)(u.X.SESSIONS_PANEL, {
        useTitle: () => j.intl.string(j.t.mEndXM),
        useObscuredNotice: dT.L,
        buildLayout: () => [fM],
    }),
    fk = (0, a.t0)(u.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [fV],
        initialize: () => {
            (0, fT.GY)();
        },
        useTrailingDecoration: () => ({
            type: h.xn.TEXT,
            useText: () => {
                let { currentSession: e, otherSessions: t } = f_(),
                    i = t.length + +(null != e);
                return i > 0 ? j.intl.formatToPlainString(j.t.G7zwOk, { count: i }) : j.intl.string(j.t.MKDeyL);
            },
        }),
    });
var fw = i(464477);
function fF(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == e
        ? null
        : e.hasAnyStaffLevel()
          ? t
              ? j.intl.string(j.t.YJGvuD)
              : j.intl.string(j.t["3iKih7"])
          : e.hasFlag(M.nhx.PARTNER)
            ? t
                ? j.intl.string(j.t["9UucjT"])
                : j.intl.string(j.t.Sq6Q1u)
            : null == e.email
              ? t
                  ? j.intl.string(j.t["9VWpT9"])
                  : j.intl.string(j.t.LfCBZG)
              : null;
}
function fB() {
    return (0, dt.bG)([io.default], () => {
        let e = io.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
var fz =
    (((r = {}).AVAILABLE = "available"),
    (r.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (r.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    r);
function fX() {
    let e = (0, dt.bG)([io.default], () => io.default.getCurrentUser()?.verified);
    return fw.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function fY() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, dt.bG)([ec.A, xI.A, io.default], () =>
        io.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? j.intl.string(j.t.hxf9fX)
                : j.intl.string(j.t["3iKih7"])
            : ec.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(M.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        xI.A.can(M.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? j.intl.string(j.t.OYTCUh)
                  : j.intl.string(j.t.HC8uSZ)
              : null,
    );
}
var fH = i(466034);
let fK = (0, a.Tf)(u.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => j.intl.string(j.t.lQsY7B),
        useSubtitle: () => fY(!0),
        useDisabled: () => null !== fY(!0),
        useLabel: () => j.intl.string(j.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, g.bG)([c2.default], () => c2.default.hasTOTPEnabled()),
                t = fX() === fz.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, sg.A)({
                title: j.intl.string(j.t["D+aE7g"]),
                subtitle: j.intl.string(j.t.EA4ZEk),
                variant: "critical",
                confirmText: j.intl.string(j.t.N86XcP),
                onConfirm: () => pQ.A.disable(),
            }),
    }),
    fW = (0, a.zZ)(u.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => j.intl.string(j.t.RumMFo),
        useSubtitle: () => j.intl.string(j.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, g.bG)([c2.default], () => c2.default.hasTOTPEnabled()),
                t = fX() === fz.AVAILABLE;
            if (!e && t)
                return {
                    type: h.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: h.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: j.intl.string(j.t.cTNUeD),
                            onClick: fH.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (fX()) {
                case fz.UNAVAILABLE_NO_CRYPTO:
                    return { type: h.lT.INLINE_NOTICE, noticeType: "info", useText: () => j.intl.string(j.t.PhHhsj) };
                case fz.UNAVAILABLE_UNVERIFIED:
                    return {
                        type: h.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        useText: () => j.intl.string(j.t.uggF7o),
                    };
                case fz.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [fK],
    });
var fZ = i(670492),
    fq = i(32880),
    fQ = i(663417),
    fJ = i(658675),
    f$ = i(900686);
function f0() {
    (0, K.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(i.bind(i, 662758));
        return (t) =>
            (0, E.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    pQ.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
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
var f1 = i(203082);
function f2(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function f3() {
    let e = fZ.A.getVerificationKey();
    try {
        await pQ.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, Sl.P0)({
            message: e.body?.message ?? j.intl.string(j.t.F8FvUy),
            type: Sa.Ck.FAILURE,
            id: "backup-code-regen-failed",
        });
    }
}
function f6(e) {
    let {
            code: { code: t, consumed: i },
        } = e,
        n = f2(t),
        s = S.useRef(null),
        l = (0, E.jsxs)(E.Fragment, {
            children: [(0, E.jsx)(fJ.P, { checked: i }), (0, E.jsx)(es.E, { variant: "text-md/normal", children: n })],
        });
    return c5.p5
        ? (0, E.jsx)(en.D, {
              tag: "li",
              className: e6()(f1.aY, f1.vk),
              innerRef: s,
              onKeyDown: function (e) {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, c5.C)(n), s?.current?.focus());
              },
              onClick: function () {
                  (0, c5.C)(n),
                      (0, Sl.P0)({ message: j.intl.string(j.t.mGZ66D), type: Sa.Ck.SUCCESS, id: "backup-code-copied" });
              },
              children: l,
          })
        : (0, E.jsx)("li", { className: f1.aY, children: l });
}
let f4 = (0, a.zZ)(u.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.fC9qV0),
        useSubtitle: () =>
            (0, g.bG)([fZ.A], () => fZ.A.getBackupCodes().length > 0)
                ? j.intl.format(j.t.tp7zEK, {})
                : j.intl.string(j.t.LoOi4S),
        usePredicate: fB,
        buildLayout: () => [f7],
    }),
    f7 = (0, a.E2)(u.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.fC9qV0)],
        Component: function () {
            let e = (0, g.bG)([fZ.A], () => fZ.A.getBackupCodes()),
                t = S.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: i } = e;
                                return `* ${f2(t)}` + (i ? ` (${j.intl.string(j.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, E.jsx)(eG.$, { text: j.intl.string(j.t.Jc2myK), size: "sm", variant: "secondary", onClick: f0 })
                : (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsx)("ul", {
                              className: f1.E5,
                              children: e.map((e) => (0, E.jsx)(f6, { code: e }, e.code)),
                          }),
                          (0, E.jsxs)(ou.e, {
                              size: "sm",
                              children: [
                                  (0, E.jsx)(f$.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, E.jsx)(eG.$, {
                                          text: j.intl.string(j.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: fq.s,
                                      }),
                                  }),
                                  (0, E.jsx)(eG.$, {
                                      text: j.intl.string(j.t["3x962E"]),
                                      variant: "secondary",
                                      icon: fQ.f,
                                      onClick: f3,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    f5 = (0, a.Tf)(u.X.SMS_AUTH_DISABLE_BUTTON, {
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
        usePredicate: () => (0, g.bG)([io.default], () => io.default.getCurrentUser()?.hasFlag(M.nhx.MFA_SMS) ?? !1),
        onClick: () =>
            void (0, K.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 662758));
                return (t) =>
                    (0, E.jsx)(e, {
                        ...t,
                        handleSubmit: pQ.A.disableSMS,
                        title: j.intl.string(j.t.KLWnit),
                        children: j.intl.string(j.t["W0/Duf"]),
                    });
            }),
    }),
    f8 = (0, a.zZ)(u.X.SMS_AUTH_CATEGORY, {
        useTitle: () => j.intl.string(j.t.wuHuI5),
        useSubtitle: () => (0, g.bG)([io.default], () => fF(io.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, g.bG)([io.default], () => io.default.getCurrentUser()?.hasFlag(M.nhx.MFA_SMS) ?? !1),
                t = (0, g.bG)([io.default], () => null != fF(io.default.getCurrentUser()));
            if (!e)
                return {
                    type: h.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: h.UV.BUTTON,
                            id: "sms-setup-button",
                            text: j.intl.string(j.t.Age7yU),
                            onClick: f9,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = fX(),
                t = fB(),
                i = (0, g.bG)([c2.default], () => c2.default.hasTOTPEnabled());
            return e === fz.AVAILABLE && t && i;
        },
        buildLayout: () => [f5],
    });
function f9() {
    let e = io.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            (t = { reason: fo.d.USER_SETTINGS_UPDATE, onAddedPhone: pQ.A.enableSMS }),
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
                    { modalKey: fu.V },
                );
        } else pQ.A.enableSMS();
}
var Ne = i(665671),
    Nt = i(442433),
    Ni = i(917136),
    Nn = i(976910),
    Ns = i(108666);
function Nl(e) {
    let { credential: t } = e;
    return (0, E.jsxs)("li", {
        className: Ns.e,
        children: [
            (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(es.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, E.jsx)(es.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: j.intl.format(j.t["7JgxF5"], { lastUsed: fI(t.last_used) }),
                        }),
                ],
            }),
            (0, E.jsx)(lq.K, {
                icon: mq.j,
                variant: "icon-only",
                size: "sm",
                "aria-label": j.intl.string(j.t["+nrTbK"]),
                onClick: (e) => {
                    (0, Nt.L3)(e, async () => {
                        let { default: e } = await i.e("32529").then(i.bind(i, 41e3));
                        return (i) => (0, E.jsx)(e, { credential: t, ...i });
                    });
                },
            }),
        ],
    });
}
let Nr = (0, a.zZ)(u.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.IBq4Y3),
        useSubtitle: () => j.intl.string(j.t.yK9edS),
        useHeaderDecoration: function () {
            if (fX() === fz.AVAILABLE)
                return {
                    type: h.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: h.UV.BUTTON,
                            id: "add-security-key-button",
                            text: j.intl.string(j.t["Tzs/fw"]),
                            icon: ay.j,
                            onClick: Ne.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (fX()) {
                    case fz.UNAVAILABLE_NO_CRYPTO:
                        return {
                            type: h.lT.INLINE_NOTICE,
                            noticeType: "info",
                            useText: () => j.intl.string(j.t.bWCGI9),
                        };
                    case fz.UNAVAILABLE_UNVERIFIED:
                        return {
                            type: h.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            useText: () => j.intl.string(j.t.uggF7o),
                        };
                    case fz.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [Na],
    }),
    Na = (0, a.E2)(u.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [j.intl.string(j.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, g.cf)([Nn.A], () => ({
                hasFetchedCredentials: Nn.A.hasFetchedCredentials(),
                credentials: Nn.A.getCredentials(),
            }));
            return (S.useEffect(() => {
                t || Ni.JQ();
            }, [t]),
            t)
                ? (0, E.jsx)(Q.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, E.jsx)(Nl, { credential: e }, e.id)),
                  })
                : (0, E.jsx)(dp.y, {});
        },
    }),
    No = (0, a.t_)(u.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => j.intl.string(j.t.m0FidJ),
        buildLayout: () => [Nr, fW, f8, f4],
    }),
    Nu = (0, a.t0)(u.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => ({
            type: h.xn.TEXT,
            useText: () => (fB() ? j.intl.string(j.t.lQsY7B) : j.intl.string(j.t.WsUuTt)),
        }),
        buildLayout: () => [No],
    }),
    Nd = (0, a.zZ)(u.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => j.intl.string(j.t["0iH2vc"]),
        buildLayout: () => [fS, Nu, fk],
    });
var Nc = i(308645),
    Ng = i(271995),
    Nm = i(855267);
let NA = (0, a.E2)(u.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["16r9jm"])],
        Component: Nm.A,
    }),
    Nh = (0, a.zZ)(u.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [NA] }),
    NE = (0, a.t_)(u.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => j.intl.string(j.t["16r9jm"]),
        buildLayout: () => [Nh],
    }),
    NS = (0, a.zZ)(u.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: () => j.intl.string(j.t["16r9jm"]),
        buildLayout: () => [NT],
    }),
    NT = (0, a.t0)(u.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: Ng.$b,
        useSubtitle: Ng.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: i } = (0, Ng._k)();
            return { type: h.Xy.ICON, icon: i, color: e, backgroundColor: t };
        },
        initialize: () => {
            Nc.Yn();
        },
        buildLayout: () => [NE],
    });
var Nx = i(834981),
    Np = i(840387),
    Nf = i(865542),
    NN = i(602339);
let N_ = (0, a.E2)(u.X.FAMILY_CENTER_SETTING, {
        Component: Nf.p,
        useSearchTerms: () => [
            j.intl.string(NN.default.RZqaJn),
            j.intl.string(NN.default.bdBmqy),
            j.intl.string(NN.default["gVWG+6"]),
            j.intl.string(NN.default.ahKIJO),
            j.intl.string(NN.default["8SLtqb"]),
        ],
    }),
    NI = (0, a.zZ)(u.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [N_] }),
    NC = (0, a.t_)(u.X.FAMILY_CENTER_PANEL, {
        useTitle: () => j.intl.string(NN.default.RZqaJn),
        buildLayout: () => [NI],
    }),
    Nb = (0, a.zZ)(u.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => j.intl.string(NN.default.RZqaJn),
        usePersistentBadge: function () {
            return S.useMemo(() => ({ badgeType: h.Xi.COUNT, useCount: Nx.VT }), []);
        },
        buildLayout: () => [Ny],
    }),
    Ny = (0, a.t0)(u.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, Nx.Li)() ? j.intl.string(NN.default.IcMQUP) : j.intl.string(NN.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, Np.Z)(),
                t = (0, Nx.Li)();
            return e
                ? t
                    ? j.intl.string(NN.default.G8lHFU)
                    : j.intl.string(NN.default.uOLNEZ)
                : j.intl.string(NN.default.Z53oSM);
        },
        buildLayout: () => [NC],
    });
var Nv = i(425587),
    Nj = i(662758);
function NO(e) {
    if (e.body.code === M.t02.INVALID_PASSWORD) throw e;
    (0, or.A)({ title: j.intl.string(j.t.LX0nT8), subtitle: e.body.message });
}
async function NR() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = io.default.getCurrentUser();
    if (null == t) return;
    let i = [];
    try {
        i = (await Nv.A.fetchTeams(!0)).body;
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
                  (0, E.jsx)(Nj.default, {
                      ...t,
                      handleSubmit: (t) => (0, Tp.U_)(t, e).then(M.tEg, NO),
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
                  onConfirm: () => (0, Tp.U_)("", !0),
              });
}
let NL = (0, a.Tf)(u.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => j.intl.string(j.t["gIpzR+"]),
        useSubtitle: () => j.intl.string(j.t.Bd6dOf),
        useLabel: () => j.intl.string(j.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => NR(!0),
    }),
    ND = (0, a.Tf)(u.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => j.intl.string(j.t["p/Tjtp"]),
        useSubtitle: () => j.intl.string(j.t.YvDmKb),
        useLabel: () => j.intl.string(j.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => NR(!1),
        usePredicate: () => {
            let e = (0, g.bG)([io.default], () => io.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    NP = (0, a.zZ)(u.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [ND, NL] }),
    NG = (0, a.t_)(u.X.ACCOUNT_PANEL, {
        useTitle: () => j.intl.string(j.t["ldCE/p"]),
        initialize: function () {
            return () => {
                pQ.A.clearBackupCodes(), (0, Tp.Uo)();
            };
        },
        useObscuredNotice: dT.L,
        buildLayout: () => [fh, Nd, NS, Nb, NP],
    }),
    NU = (0, a.i4)(u.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["ldCE/p"]),
        icon: ha.n,
        buildLayout: () => [NG],
    });
var NM = i(323384);
let NV = (0, a.zZ)(u.X.AUTHORIZED_APPS_CATEGORY, {
        buildLayout: () => [Sy],
        initialize: () => (
            SC.A.fetch(),
            () => {
                Sb.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    Nk = (0, a.t_)(u.X.AUTHORIZED_APPS_PANEL, {
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        useObscuredNotice: dT.L,
        buildLayout: () => [NV],
    }),
    Nw = (0, a.i4)(u.X.AUTHORIZED_APPS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        icon: NM.k,
        buildLayout: () => [Nk],
    });
var NF = i(176781),
    NB = i(888916),
    Nz = i(572164),
    NX = i(430795),
    NY = i(274372),
    NH = i(16590);
let NK = (0, a.zD)(u.X.CLIPS_ENABLE_AUTOCLIPPING, {
        useTitle: () => j.intl.string(NH.default.j29uJx),
        useSubtitle: () => j.intl.format(NH.default.UCzGcQ, { learnMoreLink: tN.A.getArticleURL(M.MVz.CLIPS) }),
        useValue: () => (0, g.bG)([NY.Ay], () => NY.Ay.getEnableAutoclipping()),
        setValue: NX.uL,
        useDisabled: NB.Rt,
    }),
    NW = (0, a.zD)(u.X.CLIPS_ENABLE_GAME_SIGNALS, {
        useTitle: () => j.intl.string(j.t.iV6KcI),
        useSubtitle: () => j.intl.string(j.t["dJ2tX+"]),
        useValue: () => (0, g.bG)([NY.Ay], () => NY.Ay.getSettings().clipSignals.enableGameSignals),
        usePredicate: () => !1,
        setValue: (e) => {
            let t = NY.Ay.getSettings().clipSignals;
            NX.PW({ ...t, enableGameSignals: e });
        },
        useDisabled: NB.A0,
    }),
    NZ = (0, a.zY)(u.X.CLIPS_AUTOCLIPPING_CARD, { buildLayout: () => [NK, NW], headerSettingKey: NK.key }),
    Nq = (0, a.zZ)(u.X.CLIPS_AUTOCLIPPING_CATEGORY, {
        useTitle: () => j.intl.string(NH.default.XWkJoi),
        useSubtitle: () => j.intl.string(NH.default["MJ/VsO"]),
        usePredicate: NB.As,
        usePersistentBadge: () => ({ badgeType: h.Xi.BETA }),
        useInlineNotice: () =>
            (0, Nz.Et)()
                ? null
                : {
                      type: h.lT.INLINE_NOTICE,
                      noticeType: "info",
                      iconAlign: "center",
                      useText: () => j.intl.string(NH.default.wUpqua),
                      button: {
                          variant: "primary",
                          size: "sm",
                          useText: () => j.intl.string(NH.default.qGgW4M),
                          onClick: () => NX.yO({ clipsEnabled: !0, trackAnalytics: !0 }),
                      },
                  },
        buildLayout: () => [NZ],
    });
var NQ = i(974293),
    NJ = i(458977),
    N$ = i(486925),
    N0 = i(696016);
let N1 = (() => {
        let e = [N0.wN];
        for (let t = 10; t <= N0.qh; t += 10) e.push(t);
        return e[e.length - 1] !== N0.qh && e.push(N0.qh), e;
    })(),
    N2 = (0, a.sN)(u.X.CLIPS_AUTO_CLIP_STORAGE_LIMIT, {
        usePredicate: () => !(0, N$.M2)(),
        useTitle: () => j.intl.string(j.t.yfsrDI),
        useSubtitle: () => j.intl.string(j.t.vlDHdC),
        minValue: N0.wN,
        maxValue: N0.qh,
        getInitialValue: () => NY.Ay.getSettings().maxAutoClips,
        onValueRender: (e) => `${Math.floor(e)}`,
        asValueChanges: (e) => NX.e6(Math.floor(e)),
        markers: N1,
        onMarkerRender: (e) => `${Math.floor(e)}`,
        useDisabled: NB.Rt,
    }),
    N3 = (0, a.zZ)(u.X.CLIPS_AUTOMATIC_CLIPPING_CATEGORY, {
        useTitle: () => j.intl.string(j.t.sA0WKL),
        usePredicate: () => {
            let e = (0, NB.As)(),
                t = (0, NQ.aJ)("ClipsAutomaticClippingCategory"),
                i = NJ.A.useConfig({ location: "ClipsAutomaticClippingCategory" }).enableDistributedClips;
            return !e && (t || i);
        },
        buildLayout: () => [N2, NW],
    });
var N6 = i(753070);
let N4 = (0, a.Hn)(u.X.CLIPS_FRAME_RATE, {
    useTitle: () => j.intl.string(j.t["2wScL1"]),
    useSubtitle: () => j.intl.string(j.t["Rf9+fy"]),
    useValue: () => (0, g.bG)([NY.Ay], () => NY.Ay.getSettings().clipsQuality.frameRate),
    setValue: (e) => {
        let { clipsQuality: t } = NY.Ay.getSettings();
        NX.GS({ resolution: t.resolution, frameRate: e });
    },
    useOptions: function () {
        return [
            { id: "15", value: N6.kn.FPS_15, label: j.intl.formatToPlainString(j.t.Qb44XH, { fps: N6.kn.FPS_15 }) },
            { id: "30", value: N6.kn.FPS_30, label: j.intl.formatToPlainString(j.t.Qb44XH, { fps: N6.kn.FPS_30 }) },
            { id: "60", value: N6.kn.FPS_60, label: j.intl.formatToPlainString(j.t.Qb44XH, { fps: N6.kn.FPS_60 }) },
        ];
    },
    useDisabled: NB.Rt,
});
var N7 = i(372684);
let N5 = (0, a.E2)(u.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
        useSearchTerms: () => [j.intl.string(j.t.SIxrIF)],
        usePredicate: () => (0, g.bG)([NY.Ay], () => NY.Ay.getHardwareClassification()) === N7.k9.BELOW_MINIMUM,
        Component: () => (0, E.jsx)(sA.A, { look: sA.k.WARNING, children: j.intl.string(j.t.SIxrIF) }),
    }),
    N8 = (0, a.Hn)(u.X.CLIPS_LENGTH, {
        useTitle: () => j.intl.string(j.t.OgfUio),
        useSubtitle: () => j.intl.string(j.t.H7j4tY),
        useValue: () => (0, g.bG)([NY.Ay], () => NY.Ay.getSettings().clipsLength),
        setValue: (e) => NX.h$(e),
        useOptions: function () {
            return [
                { id: "30s", value: N0.LX.SECONDS_30, label: j.intl.formatToPlainString(j.t["bTFv/3"], { count: 30 }) },
                { id: "1m", value: N0.LX.MINUTES_1, label: j.intl.formatToPlainString(j.t.ICo9Nk, { count: 1 }) },
                { id: "2m", value: N0.LX.MINUTES_2, label: j.intl.formatToPlainString(j.t.ICo9Nk, { count: 2 }) },
            ];
        },
        useDisabled: NB.Rt,
    }),
    N9 = (0, a.E2)(u.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [j.intl.string(j.t["Z+MfqT"])],
        Component: () => (0, E.jsx)(sA.A, { look: sA.k.INFO, children: j.intl.string(j.t["Z+MfqT"]) }),
    }),
    _e = (0, a.Hn)(u.X.CLIPS_RESOLUTION, {
        useTitle: () => j.intl.string(j.t.aFudZJ),
        useSubtitle: () => j.intl.string(j.t.nIrkW5),
        useValue: () => (0, g.bG)([NY.Ay], () => NY.Ay.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = NY.Ay.getSettings();
            NX.GS({ resolution: e, frameRate: t.frameRate });
        },
        useOptions: function () {
            return [
                {
                    id: "480p",
                    value: N6.on.RESOLUTION_480,
                    label: j.intl.formatToPlainString(j.t.TEOC0I, { resolution: N6.on.RESOLUTION_480 }),
                },
                {
                    id: "720p",
                    value: N6.on.RESOLUTION_720,
                    label: j.intl.formatToPlainString(j.t.TEOC0I, { resolution: N6.on.RESOLUTION_720 }),
                },
                {
                    id: "1080p",
                    value: N6.on.RESOLUTION_1080,
                    label: j.intl.formatToPlainString(j.t.TEOC0I, { resolution: N6.on.RESOLUTION_1080 }),
                },
                {
                    id: "1440p",
                    value: N6.on.RESOLUTION_1440,
                    label: j.intl.formatToPlainString(j.t.TEOC0I, { resolution: N6.on.RESOLUTION_1440 }),
                },
                { id: "source", value: N6.on.RESOLUTION_SOURCE, label: j.intl.string(j.t.XjXqzh) },
            ];
        },
        useDisabled: NB.Rt,
    }),
    _t = (0, a.zD)(u.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => j.intl.string(j.t["3zwNf6"]),
        useSubtitle: () => j.intl.string(j.t.m4Cjj9),
        useValue: () => (0, g.bG)([NY.Ay], () => NY.Ay.getSettings().remindersEnabled),
        setValue: (e) => NX.Mt(e),
        useDisabled: NB.Rt,
    }),
    _i = (0, a.zZ)(u.X.CLIPS_CAPTURE_SETTINGS_CATEGORY, {
        useTitle: () => j.intl.string(NH.default.TGwzMe),
        usePredicate: NB.As,
        buildLayout: () => [N5, N8, N4, _e, N9, _t],
    }),
    _n = (0, a.zD)(u.X.CLIPS_DEBUG_TOOLTIPS, {
        useTitle: () => "Show clips debug tooltips",
        useSubtitle: () =>
            "Show overlay tooltips for the clips engine starting, enabled features, auto-clip signals, and save errors. Intended for development and testing.",
        useValue: () => (0, g.bG)([NY.Ay], () => NY.Ay.getSettings().debugTooltipsEnabled),
        setValue: (e) => NX.YP(e),
    }),
    _s = (0, a.zD)(u.X.CLIPS_SHOW_POV_CLIPS, {
        useTitle: () => "Show POV clips in Gallery",
        useSubtitle: () =>
            "Show clips automatically captured from your point of view when a teammate clips a shared moment. Dev-only for now.",
        useValue: () => (0, g.bG)([NY.Ay], () => NY.Ay.getSettings().showPovClipsInGallery),
        setValue: (e) => NX.Uh(e),
    }),
    _l = (0, a.zZ)(u.X.CLIPS_DEVELOPER_CATEGORY, {
        useTitle: () => "Developer",
        usePredicate: () =>
            (0, g.bG)([io.default], () => {
                let e = io.default.getCurrentUser();
                return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
            }),
        buildLayout: () => [_n, _s],
    });
var _r = i(417270),
    _a = i(158278);
let _o = (0, a.E2)(u.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [j.intl.string(j.t.pf54EU), j.intl.string(j.t["QyB/jK"])],
        Component: () => {
            let e = (0, g.bG)([eB.Ay], () => eB.Ay.getKeybindForAction(M.hCu.SAVE_CLIP, !0));
            tz()(null != e, "Save clip keybind unset");
            let t = (0, NB.Rt)(),
                i = (0, NB.As)(),
                n = S.useRef(null),
                s = S.useCallback(
                    (t) => {
                        tX.A.setKeybind({ ...e, shortcut: t });
                    },
                    [e],
                ),
                l = S.useCallback(() => {
                    tX.A.setKeybind({ ...e, shortcut: (0, eq.OH)(N0.Ot) });
                }, [e]);
            return (0, E.jsx)(s4.D, {
                label: j.intl.string(j.t.pf54EU),
                description: j.intl.string(j.t["QyB/jK"]),
                layout: "horizontal-responsive",
                children: (0, E.jsx)("div", {
                    className: _a.g,
                    children: (0, E.jsx)(tY.A, {
                        ref: n,
                        disabled: t,
                        defaultValue: e.shortcut,
                        onChange: s,
                        trailingActions: i
                            ? (0, E.jsxs)(E.Fragment, {
                                  children: [
                                      (0, E.jsx)(tr.m, {
                                          text: j.intl.string(NH.default.bUtubv),
                                          position: "top",
                                          ariaHidden: !0,
                                          children: (0, E.jsx)(lq.K, {
                                              icon: lW.F,
                                              size: "sm",
                                              variant: "secondary",
                                              disabled: t,
                                              "aria-label": j.intl.string(NH.default.bUtubv),
                                              onClick: (e) => {
                                                  e.stopPropagation(), n.current?.toggleRecordMode();
                                              },
                                          }),
                                      }),
                                      (0, E.jsx)(tr.m, {
                                          text: j.intl.string(NH.default.Kyk1Tp),
                                          position: "top",
                                          ariaHidden: !0,
                                          children: (0, E.jsx)(lq.K, {
                                              icon: _r.m,
                                              size: "sm",
                                              variant: "secondary",
                                              disabled: t,
                                              "aria-label": j.intl.string(NH.default.Kyk1Tp),
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
    _u = (0, a.E2)(u.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [j.intl.string(j.t["0U/hj7"]), j.intl.string(j.t["5zxkdo"])],
        usePredicate: rT.BW,
        Component: () => {
            let e = (0, g.bG)([eB.Ay], () => eB.Ay.getKeybindForAction(M.hCu.SAVE_CLIP, !0)),
                t = (0, g.bG)([eB.Ay], () => eB.Ay.getKeybindForAction(M.hCu.SAVE_SCREENSHOT, !0));
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
                    className: _a.g,
                    children: (0, E.jsx)(tY.A, { defaultValue: t.shortcut, onChange: i }),
                }),
            });
        },
    }),
    _d = (0, a.zD)(u.X.CLIPS_ENABLE, {
        useTitle: () => j.intl.string(j.t.h8rgrK),
        useSubtitle: () => j.intl.string(j.t["4Qw3NO"]),
        useValue: () => (0, Nz.Et)(),
        setValue: (e) => NX.yO({ clipsEnabled: e, trackAnalytics: !0 }),
    });
var _c = i(915618);
let _g = (0, a.zD)(u.X.CLIPS_ENABLE_DECOUPLED_CLIPPING, {
        useTitle: () => j.intl.string(j.t.yXvykv),
        useSubtitle: () => j.intl.string(j.t.YP3ujk),
        useValue: Nz.XT,
        setValue: (e) => NX.fd({ enabled: e, trackAnalytics: !0 }),
        usePredicate: function () {
            let e = (0, eY.isWindows)(),
                t = (0, _c.A)(l3.Ay),
                i = (0, NB.As)();
            return e && t && !i;
        },
        useDisabled: NB.Rt,
    }),
    _m = (0, a.zY)(u.X.CLIPS_GENERAL_CARD, { buildLayout: () => [_d, _g, _o, _u], headerSettingKey: _d.key }),
    _A = (0, a.zZ)(u.X.CLIPS_GENERAL_CATEGORY, {
        useTitle: () => j.intl.string(j.t["rWKv+e"]),
        useSubtitle: () => j.intl.format(NH.default["dh7g+S"], { learnMoreLink: tN.A.getArticleURL(M.MVz.CLIPS) }),
        usePredicate: NB.As,
        buildLayout: () => [_m],
    }),
    _h = (0, a.E2)(u.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [j.intl.string(j.t.s4773E), j.intl.string(j.t.svjwGh)],
        Component: () => {
            let e = (0, g.bG)([NY.Ay], () => NY.Ay.getSettings().storageLocation),
                t = (0, NB.Rt)(),
                i = S.useRef(!1);
            async function n() {
                if (!t && !i.current) {
                    i.current = !0;
                    try {
                        let e = await lN.A.fileManager.showOpenDialog({
                            properties: ["openDirectory", "createDirectory"],
                        });
                        e.length > 0 && NX.HU(e[0]);
                    } finally {
                        i.current = !1;
                    }
                }
            }
            return (0, E.jsx)(s4.D, {
                label: j.intl.string(j.t.s4773E),
                description: j.intl.string(j.t.svjwGh),
                layout: "vertical",
                children: (0, E.jsxs)(Q.B, {
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
                            text: j.intl.string(NH.default.yQAN6B),
                        }),
                    ],
                }),
            });
        },
    }),
    _E = (0, a.zZ)(u.X.CLIPS_RECORDING_CATEGORY, {
        useTitle: () => j.intl.string(j.t.iIwmV5),
        usePredicate: () => !(0, NB.As)(),
        buildLayout: () => [N9, N5, _d, _g, _t, N8, _e, N4, _o, _u, _h],
    }),
    _S = (0, a.zZ)(u.X.CLIPS_STORAGE_CATEGORY, {
        useTitle: () => j.intl.string(NH.default["0Q+pdZ"]),
        usePredicate: NB.As,
        buildLayout: () => [_h, N2],
    }),
    _T = (0, a.t_)(u.X.CLIPS_PANEL, {
        useTitle: () => j.intl.string(j.t.z2jK6X),
        usePredicate: rT.sw,
        buildLayout: () => [_A, Nq, _i, _S, _E, N3, _l],
    }),
    _x = (0, a.i4)(u.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.z2jK6X),
        icon: NF.x,
        buildLayout: () => [_T],
    }),
    _p = (0, a.zZ)(u.X.CONNECTIONS_ADD_CONNECTIONS_CATEGORY, { buildLayout: () => [Td], useInlineNotice: TA }),
    _f = (0, a.zZ)(u.X.CONNECTIONS_CONNECTED_ACCOUNTS_CATEGORY, { buildLayout: () => [Tc] }),
    _N = (0, a.t_)(u.X.CONNECTIONS_PANEL, {
        useTitle: () => j.intl.string(j.t["3fe7U5"]),
        useObscuredNotice: dT.L,
        buildLayout: () => [_p, _f],
    }),
    __ = (0, a.i4)(u.X.CONNECTIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["3fe7U5"]),
        icon: E_.q,
        buildLayout: () => [_N],
    });
var _I = i(875444);
function _C(e, t) {
    let i = (0, g.bG)([S0.default], () => S0.default.getFetchState()),
        n = (0, g.bG)([S0.default], () =>
            e ? S0.default.getNewestTokensForNonChildrenApplications() : S0.default.getNewestTokens(),
        ),
        s = S.useMemo(
            () => (null == n ? [] : n.filter((e) => (0, _I.O)(e.application, e.scopes)).map((e) => e.application)),
            [n],
        );
    return (
        S.useEffect(() => {
            t || SC.A.fetch();
        }, [t]),
        { showLoadingIndicator: i !== S0.FetchState.FETCHED && (null == n || 0 === n.length), slayerSdkApplications: s }
    );
}
var _b = i(998382);
function _y(e) {
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
                            children: (0, E.jsx)("img", { src: a, "aria-label": l, className: _b.Kk }),
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
                                className: _b.lK,
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
        className: _b.wx,
        children: [
            (0, E.jsxs)("div", {
                className: _b.kX,
                children: [
                    (0, E.jsx)(es.E, { variant: "text-md/normal", color: "text-strong", children: n }),
                    (0, E.jsxs)(en.D, {
                        onClick: function () {
                            (0, eH.openUserSettings)(u.X.AUTHORIZED_APPS_PANEL);
                        },
                        className: _b.bJ,
                        children: [
                            (0, E.jsx)(es.E, {
                                variant: "text-xs/normal",
                                color: "interactive-text-default",
                                children: j.intl.format(j.t.oYaYOe, {}),
                            }),
                            (0, E.jsx)(tO._, {
                                size: "xxs",
                                color: er.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                className: _b.g7,
                            }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)("div", { className: _b.yF }),
            (0, E.jsx)("div", { className: _b.lJ, children: s }),
        ],
    });
}
function _v() {
    return (0, E.jsxs)("div", {
        className: _b.do,
        children: [
            (0, E.jsx)(es.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: _b.xV,
                children: j.intl.string(j.t["+0U77d"]),
            }),
            (0, E.jsx)(es.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: j.intl.format(j.t.V8wClM, {
                    helpdeskArticle: tN.A.getArticleURL(M.MVz.SOCIAL_LAYER_CONNECTIONS),
                }),
            }),
        ],
    });
}
function _j(e) {
    let { applications: t } = e;
    return t.length > 0 ? (0, E.jsx)(_y, { applications: t }) : (0, E.jsx)(_v, {});
}
let _O = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES, {
    useSearchTerms: () => [j.intl.string(j.t.YpCiMt)],
    Component: function () {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = _C(!0);
        return e ? (0, E.jsx)(dp.y, {}) : (0, E.jsx)(_j, { applications: t });
    },
});
function _R() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = _C(!0, !0);
    return !e && t.length > 0;
}
let _L = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => ((0, o.SV)("GameFriendDMSetting") ? j.intl.string(j.t.W8JtfT) : j.intl.string(j.t.XpBObB)),
        useSubtitle: () =>
            (0, o.SV)("GameFriendDMSetting")
                ? j.intl.string(j.t.a99KKy)
                : j.intl.format(j.t.oZsHTD, { helpdeskArticle: tN.A.getArticleURL(M.MVz.SLAYER_GAME_FRIENDS) }),
        useSearchTerms: () => [j.intl.string(j.t["Uv/eTx"])],
        useValue: () => L.Zk.useSetting(),
        setValue: (e) => L.Zk.updateSetting(e),
        usePredicate: _R,
    }),
    _D = (0, a.Qx)(u.X.CONTENT_AND_SOCIAL_IN_GAME_DMS_SETTING, {
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
            let e = L.TA.useSetting();
            return e === H.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? H.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e;
        },
        setValue: (e) => L.TA.updateSetting(e),
        usePredicate: _R,
    }),
    _P = (0, a.zZ)(u.X.CONNECTED_GAMES_CATEGORY, {
        useSearchTerms: () => [j.intl.string(j.t.YpCiMt)],
        buildLayout: () => [_O, _L, _D],
    });
var _G = i(687123),
    _U = i(444802),
    _M = i(558001);
i(866945);
var _V = i(835002);
function _k() {
    let e = (0, _U.WX)();
    S.useEffect(() => {
        (0, _M.N)(_V.YA.AGE_CONFIRMATION_NOTICE, _V.YX.VIEWED);
    }, []);
    let t = S.useCallback(() => {
            window.open(tN.A.getArticleURL(e), "_blank"), (0, _M.N)(_V.YA.AGE_CONFIRMATION_NOTICE, _V.YX.LEARN_MORE);
        }, [e]),
        i = S.useCallback(() => {
            p8.A.showAgeVerificationGetStartedModal({ entryPoint: p9.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, _M.N)(_V.YA.AGE_CONFIRMATION_NOTICE, _V.YX.CONFIRM_AGE);
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
function _w() {
    let e = (0, p2.aX)(_G.t.REACTIVE_CHECK),
        t = (0, p1.b8)();
    return S.useMemo(() => {
        if (e && !t) return { type: h.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: _k };
    }, [e, t]);
}
var _F = i(308528),
    _B = i(171316);
function _z() {
    let e = (0, _B.uM)(),
        t = (0, Nx.vx)(),
        i = S.useCallback(() => {
            (0, sH.default)(),
                _F.A.openPrivateChannel({ recipientIds: t }),
                (0, _M.N)(_V.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _V.YX.LEARN_MORE);
        }, [t]),
        n = S.useCallback(() => {
            (0, _M.N)(_V.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _V.YX.VIEWED);
        }, []);
    return S.useMemo(() => {
        if (e)
            return {
                type: h.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: n,
                useText: () =>
                    j.intl.format(NN.default.i284fU, {
                        hook: (e, t) => (0, E.jsx)(di.Anchor, { onClick: i, children: e }, t),
                        count: t.length,
                    }),
            };
    }, [i, e, t.length, n]);
}
var _X = i(323073),
    _Y = i(386171),
    _H = i(96607);
let _K = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_DM_SETTING, {
        useTitle: () =>
            (0, o.SV)("AgeRestrictedDMCommandsSetting") ? j.intl.string(j.t.gvC6q7) : j.intl.string(j.t.XahVjj),
        useSubtitle: () =>
            (0, o.SV)("AgeRestrictedDMCommandsSetting") ? j.intl.string(j.t.zirUC1) : j.intl.string(j.t.R9fXyS),
        useValue: _Y.hT,
        useDisabled: function () {
            let e = (0, _H.A)() ?? !0,
                t = (0, _X.sP)(),
                i = (0, p1.yM)();
            return (!t || !!i) && !e;
        },
        setValue: function (e) {
            (0, _X.p5)() && e
                ? p8.A.showAgeVerificationGetStartedModal({ entryPoint: p9.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : L.Qe.updateSetting(e);
        },
    }),
    _W = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => j.intl.string(j.t["L+yTsa"]),
        useSubtitle: () =>
            (0, o.SV)("AgeRestrictediOSSetting") ? j.intl.string(j.t["t6i/jW"]) : j.intl.string(j.t.hiM8pU),
        useValue: _Y.tI,
        useDisabled: function () {
            let e = (0, _H.A)() ?? !0,
                t = (0, _X.sP)(),
                i = (0, p1.yM)();
            return S.useMemo(() => (!t || !!i) && !e, [t, e, i]);
        },
        setValue: function (e) {
            (0, _X.p5)() && e
                ? p8.A.showAgeVerificationGetStartedModal({ entryPoint: p9.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : L.Kg.updateSetting(e);
        },
    }),
    _Z = (0, a.AK)(u.X.CONTENT_FILTERS_APPEARANCE_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.hOXd45),
        destinationKey: u.X.APPEARANCE_MESSAGES_CATEGORY,
    }),
    _q = (0, a.gN)(u.X.CONTENT_FILTERS_RELATED_SETTINGS, { buildLayout: () => [_Z] });
i(667532);
var _Q = i(390248),
    _J = i(632119),
    _$ = i(945276),
    _0 = i(389737),
    _1 = i(566769);
function _2() {
    let e,
        t = (0, _$.A)() ?? !0,
        i = (0, _B.uM)(),
        n = (0, _B.uM)(),
        {
            explicitContentGuilds: s,
            explicitContentFriendDm: l,
            explicitContentNonFriendDm: r,
        } = ((e = (0, dt.cf)([uy.A], () => uy.A.settings.textAndImages?.explicitContentSettings ?? (0, _J.C$)())),
        {
            explicitContentGuilds: (0, _J.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, _J.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, _J.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, _Q.hK)() && t.includes(H.TO.SHOW)
            ? p8.A.showAgeVerificationGetStartedModal({ entryPoint: p9.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, _J.Jz)(e);
    }
    let o = [
            { value: H.TO.BLUR, label: j.intl.string(j.t.S49Uad) },
            { value: H.TO.BLOCK, label: j.intl.string(j.t["D/157Y"]) },
        ],
        u = [{ value: H.TO.BLUR, label: j.intl.string(j.t.S49Uad) }],
        d = { value: H.TO.SHOW, label: j.intl.string(j.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: n, tooltipText: i ? j.intl.string(NN.default["6Af/cw"]) : void 0 };
    return (0, E.jsxs)(_0.E, {
        description: j.intl.string(j.t.Wnojv1),
        children: [
            (0, E.jsx)(_1.A, {
                title: j.intl.string(j.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(_1.A, {
                title: j.intl.string(j.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(_1.A, {
                title: j.intl.string(j.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || n,
                tooltipText: i ? j.intl.string(NN.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function _3() {
    let e,
        t = (0, _$.A)() ?? !0,
        i = (0, _B.uM)(),
        n = (0, _B.uM)(),
        {
            goreContentGuilds: s,
            goreContentFriendDm: l,
            goreContentNonFriendDm: r,
        } = ((e = (0, dt.cf)([uy.A], () => uy.A.settings.textAndImages?.goreContentSettings ?? (0, _U.T4)())),
        {
            goreContentGuilds: (0, _U.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, _U.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, _U.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, _Q.hK)() && t.includes(H.TO.SHOW)
            ? p8.A.showAgeVerificationGetStartedModal({ entryPoint: p9.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, _U.qY)(e);
    }
    let o = [
            { value: H.TO.BLUR, label: j.intl.string(j.t.S49Uad) },
            { value: H.TO.BLOCK, label: j.intl.string(j.t["D/157Y"]) },
        ],
        u = [{ value: H.TO.BLUR, label: j.intl.string(j.t.S49Uad) }],
        d = { value: H.TO.SHOW, label: j.intl.string(j.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: n, tooltipText: i ? j.intl.string(NN.default["6Af/cw"]) : void 0 };
    return (0, E.jsxs)(_0.E, {
        description: j.intl.string(j.t.XgH9eh),
        children: [
            (0, E.jsx)(_1.A, {
                title: j.intl.string(j.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(_1.A, {
                title: j.intl.string(j.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(_1.A, {
                title: j.intl.string(j.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || n,
                options: u,
                tooltipText: i ? j.intl.string(NN.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var _6 = i(464946),
    _4 = i(875162),
    _7 = i(334859);
let _5 = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, _U.WX)(),
            t = S.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: j.intl.string(j.t.GYpoAq),
                        component: _2,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: j.intl.string(j.t["16/3Bi"]),
                        component: _3,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, E.jsxs)(_6.h, {
            children: [
                (0, E.jsx)(_6._, {
                    header: j.intl.string(j.t["Hj/But"]),
                    description: j.intl.format(j.t.dliU4j, { learnMoreLink: tN.A.getArticleURL(e) }),
                }),
                (0, E.jsx)(_4.A, { tabs: t, orientation: "vertical", tabsClassName: _7.v }),
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
var _8 = i(639555),
    _9 = i(617641),
    Ie = i(546140),
    It = i(406935),
    Ii = i(594061);
let In = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING, {
    useTitle: () => j.intl.string(j.t.qFsx5q),
    useSubtitle: () => j.intl.format(j.t.lunaRv, { learnMoreLink: tN.A.getArticleURL(M.MVz.SAFETY_ALERTS) }),
    useValue: Ie.L,
    setValue: function (e) {
        return Ii.wc.updateAsync(
            "privacy",
            (t) => {
                t.inappropriateConversationWarnings = It._t.create({ value: e });
            },
            Ii.Sb.INFREQUENT_USER_ACTION,
        );
    },
    usePredicate: function () {
        let e = (0, _9.Lc)({ location: "DMSafetyAlertsSetting" }),
            t = (0, _8.Rv)({ location: "DMSafetyAlertsSetting" }),
            i = (0, _$.A)() ?? !0;
        return e && !i && !t;
    },
});
var Is = i(809505),
    Il = i(923457),
    Ir = i(750714);
let Ia = (0, a.Qx)(u.X.CONTENT_AND_SOCIAL_DM_SPAM_SETTING, {
        useTitle: () => ((0, o.SV)("DMSpamSetting") ? j.intl.string(j.t.puwSkY) : j.intl.string(j.t.tiCXaH)),
        useSubtitle: () =>
            (0, o.SV)("DMSpamSetting")
                ? j.intl.string(j.t["+sXN3T"])
                : j.intl.format(j.t.RvjRRI, { appealLink: tN.A.getArticleURL(M.MVz.SAFE_DIRECT_MESSAGING) }),
        useValue: function () {
            let e = L.he.useSetting(),
                t = L.cj.useSetting(),
                i = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
                n = (0, p2.yv)(Il.p.SPAM_FILTERS);
            return e !== H.he.DEFAULT_UNSET
                ? e
                : i?.nsfwAllowed === !1 && n
                  ? H.he.FRIENDS_AND_NON_FRIENDS
                  : (Ir.xY.get(t) ?? H.he.NON_FRIENDS);
        },
        setValue: (e) => L.he.updateSetting(e),
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
                        : (0, Is.YS)(),
                [e],
            );
        },
        useSearchTerms: () => [j.intl.string(j.t.JzaP4h), j.intl.string(j.t.H9XOl3), j.intl.string(j.t.k4W40P)],
    }),
    Io = (0, a.zZ)(u.X.CONTENT_CATEGORY, {
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
                u = _z(),
                d =
                    ((e = (0, Np.Z)()),
                    (t = (0, _U.WX)()),
                    (i = S.useCallback(() => {
                        window.open(tN.A.getArticleURL(t), "_blank"),
                            (0, _M.N)(_V.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _V.YX.LEARN_MORE);
                    }, [t])),
                    (n = S.useCallback(() => {
                        (0, _M.N)(_V.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _V.YX.VIEWED);
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
                    ((s = (0, p2.SJ)()),
                    (l = (0, p1.b8)()),
                    (r = s && !l),
                    (a = S.useCallback(() => {
                        p8.A.showAgeVerificationGetStartedModal({ entryPoint: p9.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, _M.N)(_V.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _V.YX.LEARN_MORE);
                    }, [])),
                    (o = S.useCallback(() => {
                        (0, _M.N)(_V.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _V.YX.VIEWED);
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
                g = _w();
            return u ?? g ?? c ?? d;
        },
        buildLayout: () => ((0, o.Bv)("ContentCategory") ? [_5, In, _K, _W, _q] : [_5, Ia, In, _K, _W]),
    });
var Iu = i(189883);
let Id = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => j.intl.string(j.t["7x9dyE"]),
    useValue: function () {
        let e = L.FA.useSetting();
        return S.useMemo(() => (0, rJ.Lx)(e), [e]).all;
    },
    setValue: function (e) {
        L.FA.updateSetting(e ? M.yKI : M.yKI & ~M.dzt.NO_RELATION);
    },
    useDisabled: function () {
        return (0, _B.uM)();
    },
});
var Ic = i(665260);
let Ig = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => j.intl.string(j.t.NfeuZ3),
        useValue: function () {
            let e = L.FA.useSetting(),
                t = S.useMemo(() => (0, rJ.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: function (e) {
            let t = L.FA.getSetting();
            L.FA.updateSetting(e ? Ic.UI(t, M.dzt.MUTUAL_FRIENDS) : Ic.iE(t, M.dzt.MUTUAL_FRIENDS, M.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, _B.uM)();
        },
    }),
    Im = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => j.intl.string(j.t.qsMfsH),
        useSubtitle: () => ((0, o.SV)("FriendRequestsMutualGuildsSetting") ? j.intl.string(j.t["6DqAp0"]) : void 0),
        useValue: function () {
            let e = L.FA.useSetting(),
                t = S.useMemo(() => (0, rJ.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: function (e) {
            let t = L.FA.getSetting();
            L.FA.updateSetting(e ? Ic.UI(t, M.dzt.MUTUAL_GUILDS) : Ic.iE(t, M.dzt.MUTUAL_GUILDS, M.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, _B.uM)();
        },
    }),
    IA = (0, a.FW)(u.X.FRIEND_REQUESTS_FIELDSET, {
        useTitle: () => j.intl.string(j.t.wTdS6S),
        buildLayout: () => [Id, Ig, Im],
    }),
    Ih = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => j.intl.string(j.t["jK+wdr"]),
        useSubtitle: () => j.intl.string(j.t["RYh/pW"]),
        useValue: () => !L.Zd.useSetting(),
        setValue: function (e) {
            L.Zd.updateSetting(!e);
        },
        usePredicate: () => Iu.A.useConfig({ location: "Friend Request Setting" }).enabled,
        usePersistentBadge: () => ({ badgeType: h.Xi.BETA }),
    });
function IE() {
    let { enabled: e } = Iu.A.useConfig({ location: "Friend Request Setting" });
    return e ? j.intl.string(j.t.QVbF3l) : void 0;
}
let IS = (0, a.zZ)(u.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["5gxWrt"]),
        useSubtitle: IE,
        useSubnavLabel: () => j.intl.string(j.t.fyA115),
        useInlineNotice: _z,
        buildLayout: () => [IA, Ih],
    }),
    IT = (0, a.zZ)(u.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.MNaVwq),
        useSubtitle: IE,
        useInlineNotice: _z,
        buildLayout: () => [Id, Ig, Im, Ih],
    });
var Ix = i(994500),
    Ip = i(428678),
    If = i(717398),
    IN = i(730134),
    I_ = i(753686);
function II(e) {
    let { listType: t, numberOfUsers: i } = e,
        n = "blocked" === t;
    return (0, E.jsxs)("div", {
        className: I_.wx,
        children: [
            (0, E.jsx)("div", { className: I_.zc, children: n ? (0, E.jsx)(Ip.K, {}) : (0, E.jsx)(iv.G, {}) }),
            (0, E.jsxs)("div", {
                className: I_.Qq,
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
function IC(e) {
    let { userId: t, last: i } = e,
        n = (0, g.bG)([Ix.A], () => Ix.A.isBlocked(t)),
        s = (0, g.bG)([io.default], () => io.default.getUser(t)),
        [l, r] = S.useState(!1),
        a = S.useCallback(() => {
            r(!0),
                n
                    ? If.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : If.A.unignoreUser(t, e1.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      });
        }, [n, t]);
    return null == s
        ? null
        : (0, E.jsxs)("div", {
              className: e6()(I_.nM, { [I_.fW]: i }),
              children: [
                  (0, E.jsxs)("div", {
                      className: I_.eF,
                      children: [
                          (0, E.jsx)(IN.A, { user: s, size: i4._3.SIZE_40 }),
                          (0, E.jsxs)("div", {
                              className: I_.Qq,
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
function Ib(e) {
    let { userIds: t, listType: i } = e,
        [n, s] = S.useState(5);
    return (0, E.jsx)(_6.h, {
        children: (0, E.jsxs)("div", {
            className: I_.Nr,
            children: [
                (0, E.jsx)(II, { listType: i, numberOfUsers: t.length }),
                (0, E.jsx)("div", {
                    className: I_.jS,
                    children: t.slice(0, n).map((e, i) => (0, E.jsx)(IC, { userId: e, last: i === t.length - 1 }, e)),
                }),
                n < t.length
                    ? (0, E.jsx)("div", {
                          className: I_.vM,
                          children: (0, E.jsx)(en.D, {
                              onClick: () => {
                                  s((e) => e + 5);
                              },
                              className: I_.Qf,
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
let Iy = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_BLOCKED_USERS, {
        useSearchTerms: () => [j.intl.string(j.t.PFOUKW)],
        usePredicate: () => (0, g.bG)([Ix.A], () => Ix.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, g.yK)([Ix.A], () => Ix.A.getBlockedIDs());
            return (0, E.jsx)(Ib, { userIds: e, listType: "blocked" });
        },
    }),
    Iv = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_IGNORED_USERS, {
        useSearchTerms: () => [j.intl.string(j.t["93ZDWE"])],
        usePredicate: () => (0, g.bG)([Ix.A], () => Ix.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, g.yK)([Ix.A], () => Ix.A.getIgnoredIDs());
            return (0, E.jsx)(Ib, { userIds: e, listType: "ignored" });
        },
    }),
    Ij = (0, a.zZ)(u.X.RESTRICTED_USERS_CATEGORY, {
        useTitle: () =>
            (0, o.SV)("RestrictedUsersCategory") ? j.intl.string(j.t["+Iryf3"]) : j.intl.string(j.t.LVwR56),
        useSubtitle: () =>
            j.intl.format(j.t["0aNQo9"], { helpArticle: tN.A.getArticleURL(M.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [Iy, Iv],
        usePredicate: function () {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, g.cf)([Ix.A], () => ({
                hasBlockedUsers: Ix.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: Ix.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var IO = i(22385),
    IR = i(556534),
    IL = i(111159),
    ID = i(152056),
    IP = i(219714);
let IG = { label: () => j.intl.string(j.t["32u1Dx"]), value: IO.YG };
var IU = i(954225);
function IM() {
    return (0, IR.Tx)() !== IO.YG;
}
function IV() {
    return j.intl.string(j.t["T+nevN"]);
}
let Ik = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_JOIN_SETTING, {
    useTitle: IV,
    useSubtitle: () =>
        j.intl.format(j.t.jXKQCu, { helpdeskArticle: tN.A.getArticleURL(M.MVz.ACTIVITY_STATUS_SETTINGS) }),
    useValue: function () {
        let e = (0, IR.Tx)();
        return !L.pE.useSetting().includes(e);
    },
    setValue: function (e) {
        let t = IO.xk.getState().selectedGuildId,
            i = (0, rJ.CN)();
        e ? i.delete(t) : i.add(t),
            L.pE.updateSetting([...i]),
            G.default.track(M.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: IU.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
                ingress: nw.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    },
    usePredicate: IM,
});
function Iw() {
    return (0, IR.Tx)() !== IO.YG;
}
function IF() {
    return j.intl.string(D.default.WhdCGP);
}
let IB = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_SHARE_SETTING, {
    useTitle: IF,
    useSubtitle: () => j.intl.string(D.default.UQ9RHJ),
    useValue: function () {
        let e = (0, IR.Tx)();
        return !L.JG.useSetting().includes(e);
    },
    setValue: function (e) {
        let t = IO.xk.getState().selectedGuildId,
            i = (0, rJ.Kk)();
        e ? i.delete(t) : i.add(t),
            L.JG.updateSetting([...i]),
            G.default.track(M.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: IU.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
                ingress: nw.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    },
    usePredicate: Iw,
});
var Iz = i(307863),
    IX = i(428031),
    IY = i(972737);
function IH() {
    return (0, Iz.e)() ? j.intl.string(j.t.PMsfcH) : j.intl.string(j.t.RAQUSN);
}
function IK() {
    let e = (0, IR.Tx)(),
        t = (0, IR.q9)(),
        i = (0, Iz.e)();
    return e === IO.YG
        ? i
            ? j.intl.string(j.t.XXGmuB)
            : j.intl.string(j.t.wbYDfT)
        : t
          ? j.intl.string(j.t.V0ka0Q)
          : i
            ? j.intl.string(j.t.F9WY3f)
            : j.intl.string(j.t.G7c3Xo);
}
function IW() {
    let e = (0, IR.Tx)(),
        t = L.$s.useSetting().includes(e),
        i = (0, IX.K)();
    return e === IO.YG ? !i : !t;
}
function IZ() {
    let e = (0, _B.uM)();
    return (0, IR.Tx)() === IO.YG && e;
}
function Iq(e, t) {
    G.default.track(M.HAw.GUILD_DEFAULT_DMS_UPDATED, { default_guilds_restricted: e, applied_to_existing_guilds: t });
}
function IQ(e) {
    let t = IO.xk.getState().selectedGuildId;
    if (t === IO.YG) {
        var i;
        (i = !e),
            (0, IY.O)({
                header: j.intl.string(j.t["uUr+GR"]),
                body: j.intl.string(j.t.hjGJBp),
                confirmText: j.intl.string(j.t.gm1Vej),
                cancelText: j.intl.string(j.t.p89ACt),
                confirmButtonColor: oa.$n.Colors.BRAND,
                onConfirm: function () {
                    L.n6.updateSetting(i), Iq(i, !1);
                },
                onCancel: function () {
                    L.n6.updateSetting(i), L.$s.updateSetting(i ? ec.A.getGuildIds() : []), Iq(i, !0);
                },
            });
    } else {
        let i = (0, rJ.Tb)();
        e ? i.delete(t) : i.add(t),
            L.$s.updateSetting(Array.from(i)),
            G.default.track(M.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: IU.m.DIRECT_MESSAGES_TOGGLE,
                ingress: nw.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    }
}
let IJ = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: IK,
        useValue: IW,
        useDisabled: IZ,
        setValue: IQ,
    }),
    I$ = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: IH,
        useSubtitle: IK,
        useValue: IW,
        useDisabled: IZ,
        setValue: IQ,
    });
var I0 = i(953298);
function I1(e, t) {
    G.default.track(M.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
}
function I2() {
    let e = (0, o.SV)("PermissionsMessageRequestsSetting"),
        t = (0, IR.q9)();
    if (e)
        if (t) return j.intl.string(j.t["982I7+"]);
        else return j.intl.string(j.t["3yHM5i"]);
    return j.intl.string(j.t["3o2ojh"]);
}
let I3 = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: I2,
        useSubtitle: function () {
            let e = (0, o.SV)("PermissionsMessageRequestsSetting"),
                t = (0, IR.q9)();
            return e
                ? j.intl.format(j.t.BoCjTy, { learnMoreUrl: tN.A.getArticleURL(M.MVz.MESSAGE_REQUESTS) })
                : t
                  ? j.intl.format(j.t.WpnWLc, { helpdeskArticle: tN.A.getArticleURL(M.MVz.MESSAGE_REQUESTS) })
                  : j.intl.format(j.t.wkm9a3, { helpdeskArticle: tN.A.getArticleURL(M.MVz.MESSAGE_REQUESTS) });
        },
        useValue: function () {
            let e = (0, IR.Tx)(),
                t = (0, IX.K)(),
                i = L.$s.useSetting().includes(e),
                n = L.YX.useSetting(),
                s = L.Zr.useSetting().includes(e);
            return e === IO.YG ? !t && !n : !i && !s;
        },
        useDisabled: function () {
            let e = (0, IR.Tx)(),
                t = (0, _B.uM)(),
                i = (0, IX.K)(),
                n = L.$s.useSetting().includes(e);
            return e === IO.YG ? i || t : n;
        },
        setValue: function (e) {
            let t = IO.xk.getState().selectedGuildId;
            if (!e && (0, I0.w)())
                return void p8.A.showAgeVerificationGetStartedModal({ entryPoint: p9.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === IO.YG) {
                var i;
                (i = !e),
                    (0, IY.O)({
                        header: j.intl.string(j.t.yAfu1p),
                        body: j.intl.string(j.t.Ry2z74),
                        confirmText: j.intl.string(j.t.gm1Vej),
                        cancelText: j.intl.string(j.t.p89ACt),
                        confirmButtonColor: oa.$n.Colors.BRAND,
                        onConfirm: function () {
                            L.YX.updateSetting(i), I1(i, !1);
                        },
                        onCancel: function () {
                            L.YX.updateSetting(i), L.Zr.updateSetting(i ? ec.A.getGuildIds() : []), I1(i, !0);
                        },
                    });
            } else {
                let i = (0, rJ.xo)();
                e ? i.delete(t) : i.add(t),
                    L.Zr.updateSetting(Array.from(i)),
                    G.default.track(M.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: IU.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: nw.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    });
            }
        },
    }),
    I6 = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            let e = (0, o.SV)("GuildSelect"),
                t = [IH(), I2()],
                i = IF(),
                n = Iw();
            !e && n && t.push(i);
            let s = IV(),
                l = IM();
            return !e && l && t.push(s), t;
        },
        Component: function () {
            let { selectedGuildId: e, setSelectedGuildId: t } = (0, IO.xk)(),
                i = (0, g.bG)([eg.Ay], () => eg.Ay.getFlattenedGuildIds()),
                n = (0, g.bG)([ec.A], () => ec.A.getGuilds()),
                s = i[0];
            S.useEffect(
                () =>
                    ID.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, i) => {
                            let n = IO.xk.getState().selectedGuildId;
                            "" === i && "" !== e && n === IO.YG && null != s
                                ? t(s)
                                : "" === e && n !== IO.YG && t(IO.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [s, t],
            );
            let l = S.useMemo(() => {
                let e = [];
                return (
                    e.push({
                        ...IG,
                        id: IG.value,
                        label: IG.label(),
                        leading: (0, E.jsx)("div", {
                            className: IP.KP,
                            children: (0, E.jsx)(IL.p, {
                                size: "sm",
                                color: "white",
                                "aria-hidden": !0,
                                className: IP.cl,
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
                                leading: (0, E.jsx)(mc.Ay, {
                                    className: IP.cl,
                                    guild: i,
                                    size: mc.Ay.Sizes.SMALLER,
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
function I4() {
    let e = _z(),
        t = _w();
    if ((0, IR.Tx)() === IO.YG) return e ?? t;
}
let I7 = (0, a.zZ)(u.X.PERMISSIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Y5GYcX),
        useSubnavLabel: () => j.intl.string(j.t.YUU0RF),
        useInlineNotice: I4,
        buildLayout: () => [I6, IJ, I3],
    }),
    I5 = (0, a.zZ)(u.X.PERMISSIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.eYaT7L),
        useInlineNotice: I4,
        buildLayout: () => [I6, I$, I3, IB, Ik],
    }),
    I8 = (0, a.dT)(u.X.CONTENT_AND_SOCIAL_MAIN_TAB, {
        getTitle: () => j.intl.string(j.t["/7xJCF"]),
        buildLayout: () => [Io, I5, IT, Ij],
    }),
    I9 = (0, a.dT)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB, {
        initialize: () => {
            SC.A.fetch();
        },
        getTitle: () => j.intl.string(j.t.YpCiMt),
        buildLayout: () => [_P],
    }),
    Ce = (0, a.t_)(u.X.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => j.intl.string(j.t["+o1pDZ"]),
        buildLayout: () => [I8, I9],
    }),
    Ct = (0, a.i4)(u.X.CONTENT_AND_SOCIAL_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["+o1pDZ"]),
        icon: gV.i,
        buildLayout: () => [Ce],
    });
var Ci = i(254138);
function Cn() {
    return (
        sa.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" }),
        sr.Bo.get({ url: M.Rsh.USER_HARVEST, oldFormErrors: !0, rejectWithError: !1 })
            .then((e) => {
                sa.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body });
            })
            .catch((e) => {
                sa.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error: e });
            })
    );
}
function Cs(e) {
    return (0, Tp.$I)(e).then(
        (e) => (
            null != e && null != e.body && sa.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body }), e
        ),
    );
}
var Cl = i(157559),
    Cr = i(331887);
function Ca() {
    let e = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
        t = (0, g.bG)([Cr.A], () => Cr.A.harvestType),
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
function Co(e) {
    let { onConfirm: t, ...n } = e;
    (0, K.openModalLazy)(async () => {
        let { default: e } = await i.e("92063").then(i.bind(i, 970018));
        return (i) => (0, E.jsx)(e, { modalProps: i, onConfirm: t });
    }, n);
}
var Cu = i(160427);
let Cd = (0, a.E2)(u.X.DATA_HARVEST_REQUEST_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.dmBSKo)],
        Component: function () {
            let e = (0, g.bG)([io.default], () => io.default.getCurrentUser()),
                { currentHarvestType: t, awaitingInitialRequest: i } = (0, g.cf)([Cr.A], () => ({
                    currentHarvestType: Cr.A.harvestType,
                    awaitingInitialRequest: Cr.A.requestingHarvest,
                })),
                [n, s] = S.useState(!1);
            if (null == e) return null;
            let l =
                    !!(!e.verified || e.isStaff()) ||
                    (null != t && 2592e6 > Date.now() - new Date(t.created_at).getTime()) ||
                    i,
                r = null != t && r4()().diff(r4()(t.created_at), "days") < M.n83,
                a = l && r,
                o = e.isStaff(),
                u = !e.verified;
            return (0, E.jsxs)(_6.h, {
                children: [
                    (0, E.jsx)(_6._, {
                        header: j.intl.string(j.t.XAHCgJ),
                        description: j.intl.format(j.t.P3kNfr, {
                            helpdeskArticle: tN.A.getArticleURL(M.MVz.GDPR_REQUEST_DATA),
                        }),
                    }),
                    a
                        ? (0, E.jsx)(eb.Z, {
                              className: Cu.N,
                              children: (0, E.jsx)(es.E, {
                                  variant: "text-md/normal",
                                  children: j.intl.format(j.t.RNDlV9, {
                                      date: r4()(t.created_at).add(M.n83, "days").format("MMMM Do YYYY"),
                                  }),
                              }),
                          })
                        : o
                          ? (0, E.jsx)(eb.Z, {
                                className: Cu.N,
                                children: (0, E.jsx)(es.E, {
                                    variant: "text-md/normal",
                                    children: j.intl.string(j.t.ZPQLH2),
                                }),
                            })
                          : (0, E.jsxs)(E.Fragment, {
                                children: [
                                    u
                                        ? (0, E.jsx)(eb.Z, {
                                              className: Cu.N,
                                              children: (0, E.jsx)(es.E, {
                                                  variant: "text-md/normal",
                                                  children: j.intl.string(j.t.c1f88z),
                                              }),
                                          })
                                        : null,
                                    (0, E.jsx)("div", {
                                        className: Cu.x,
                                        children: (0, E.jsx)(eG.$, {
                                            variant: "primary",
                                            text: j.intl.string(j.t.dmBSKo),
                                            disabled: l,
                                            onClick: function () {
                                                Co({
                                                    onConfirm: (e) => {
                                                        s(!0),
                                                            Cs(e)
                                                                .then(
                                                                    (e) => {
                                                                        null != e && null != e.body
                                                                            ? Cl.A.show({
                                                                                  title: j.intl.string(j.t.i2iul5),
                                                                                  body: j.intl.string(j.t["6Nmv4i"]),
                                                                              })
                                                                            : Cl.A.show({
                                                                                  title: j.intl.string(j.t.OjbtDm),
                                                                                  body: j.intl.string(j.t["0F5Jyt"]),
                                                                              });
                                                                    },
                                                                    (e) => {
                                                                        let t =
                                                                            e?.message ||
                                                                            e?.body?.message ||
                                                                            j.intl.string(j.t["0F5Jyt"]);
                                                                        Cl.A.show({
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
    Cc = (0, a.zZ)(u.X.DATA_REQUEST_CATEGORY, {
        useTitle: () => j.intl.string(j.t.VjDjpb),
        initialize: () => {
            Cn();
        },
        buildLayout: () => [Cd],
    });
var Cg = i(290595),
    Cm = i(153488);
let CA = (0, a.zD)(u.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
        useTitle: () => j.intl.string(j.t.AGDDkH),
        useSubtitle: () =>
            (0, o.ri)("ClipsAllowVoiceRecording") ? j.intl.string(j.t.kyo3dJ) : j.intl.string(j.t["wW9/zQ"]),
        useValue: () => L.Q$.useSetting(),
        setValue: (e) => NX.eQ({ allowVoiceRecording: e }),
    }),
    Ch = (0, a.Tf)(u.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => j.intl.string(j.t.qfFFos),
        useSubtitle: function () {
            let e = Ca();
            if (e.allowed) return j.intl.format(j.t.NRI6vt, { article: tN.A.getArticleURL(M.MVz.GDPR_REQUEST_DATA) });
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
            Cn();
        },
        useDisabled: () => !Ca().allowed,
        useLoading: () => (0, g.bG)([Cr.A], () => Cr.A.requestingHarvest),
        useVariant: () => "secondary",
        useLabel: () => j.intl.string(j.t.dmBSKo),
        onClick: function () {
            return new Promise((e) => {
                let t = !0;
                Co({
                    onConfirm: (i) => {
                        (t = !1),
                            Cs(i)
                                .then(
                                    (e) => {
                                        null != e && null != e.body
                                            ? Cl.A.show({
                                                  title: j.intl.string(j.t.i2iul5),
                                                  body: j.intl.string(j.t["6Nmv4i"]),
                                              })
                                            : Cl.A.show({
                                                  title: j.intl.string(j.t.OjbtDm),
                                                  body: j.intl.string(j.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || j.intl.string(j.t["0F5Jyt"]);
                                        Cl.A.show({ title: j.intl.string(j.t.OjbtDm), body: t });
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
    CE = (0, a.v_)(u.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => j.intl.string(j.t.D60Gfj),
        useSubtitle: () =>
            (0, o.ri)("DataUsageDisclaimer")
                ? j.intl.format(j.t.dszICC, {
                      onClickDisable: () => (0, eH.openUserSettings)(u.X.ACCOUNT_DISABLE_SETTING),
                      onClickDelete: () => (0, eH.openUserSettings)(u.X.ACCOUNT_DELETE_SETTING),
                  })
                : j.intl.format(j.t.R5N31P, { onClick: () => (0, eH.openUserSettings)(u.X.ACCOUNT_REMOVAL_CATEGORY) }),
    }),
    CS = (0, a.zD)(u.X.DATA_USAGE_PERSONALIZATION_SETTING, {
        useTitle: () => j.intl.string(j.t.MNKzyg),
        useSubtitle: () => {
            let e = (0, o.ri)("DataUsagePersonalization");
            return j.intl.format(e ? j.t["2SiYln"] : j.t["eQL/Mr"], {
                helpdeskArticle: tN.A.getArticleURL(M.MVz.DATA_USED_FOR_RECOMMENDED),
            });
        },
        useValue: function () {
            return (0, g.bG)([Cm.A], () => Cm.A.hasConsented(M.YAq.PERSONALIZATION));
        },
        setValue: function (e) {
            e
                ? (0, Cg.U)([M.YAq.PERSONALIZATION], []).catch(IY.i)
                : (0, IY.O)({
                      header: j.intl.string(j.t["9SNpzv"]),
                      confirmText: j.intl.string(j.t["9g5UGw"]),
                      cancelText: j.intl.string(j.t["+ZLPw9"]),
                      onConfirm: () => {
                          (0, Cg.U)([], [M.YAq.PERSONALIZATION]).catch(IY.i);
                      },
                      body: j.intl.string(j.t.gJvDDh),
                  });
        },
        useDisabled: _B.uM,
    }),
    CT = (0, a.zD)(u.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => j.intl.string(j.t.CyLYKZ),
        useSubtitle: () => {
            let e = (0, o.ri)("DataUsageQuests3P");
            return j.intl.format(e ? j.t["md5l4/"] : j.t["2QFDU/"], {
                helpdeskArticle: tN.A.getArticleURL(M.MVz.QUESTS_PRIVACY_CONTROLS),
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
                t = (0, _B.uM)();
            return e || t;
        },
        useSearchTerms: () => [j.intl.string(j.t.CyLYKZ)],
    }),
    Cx = (0, a.zD)(u.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => j.intl.string(j.t.sJYh5t),
        useSubtitle: () =>
            (0, o.ri)("DataUsageQuests")
                ? j.intl.string(j.t.w4fvxe)
                : j.intl.format(j.t.cf9mvV, { helpdeskArticle: tN.A.getArticleURL(M.MVz.QUESTS_PRIVACY_CONTROLS) }),
        useValue: function () {
            return !L.H1.useSetting();
        },
        setValue: function (e) {
            L.H1.updateSetting(!e);
        },
        useSearchTerms: () => [j.intl.string(j.t.VkS7Yd)],
        useDisabled: _B.uM,
    }),
    Cp = (0, a.AK)(u.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
        destinationKey: u.X.REGISTERED_GAMES_PANEL,
        useSubtitle: function () {
            let { names: e, totalCount: t } = y(2);
            return j.intl.format(j.t.GaTAYM, { count: t, nameCount: e.length, game1: e[0], game2: e[1] });
        },
        useTrailingDecoration: () => ({ type: h.wF.STACKED_ICONS, useIcons: v }),
        usePredicate: () => (0, g.bG)([m.Ay], () => m.Ay.getGamesSeen(!1).some((e) => !(0, A.n1)(e))) && (0, c.xl)(),
    }),
    Cf = (0, a.gN)(u.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [Cp] }),
    CN = (0, a.zD)(u.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => j.intl.string(j.t.XuADY2),
        useSubtitle: () => {
            let e = (0, o.ri)("DataUsageStatistics");
            return j.intl.format(e ? j.t.FNqmmX : j.t["igTSG/"], {
                helpdeskArticle: tN.A.getArticleURL(M.MVz.DATA_PRIVACY_CONTROLS),
            });
        },
        useValue: function () {
            return (0, g.bG)([Cm.A], () => Cm.A.hasConsented(M.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, Cg.U)([M.YAq.USAGE_STATISTICS], []).catch(IY.i)
                : (0, IY.O)({
                      header: j.intl.string(j.t.OdPCbN),
                      body: j.intl.string(j.t.MGWabA),
                      confirmText: j.intl.string(j.t["D3+rU4"]),
                      cancelText: j.intl.string(j.t.kYpG0u),
                      onConfirm: () => (0, Cg.U)([], [M.YAq.USAGE_STATISTICS]).catch(IY.i),
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t.XuADY2)],
        useDisabled: _B.uM,
    }),
    C_ = (0, a.zZ)(u.X.DATA_USAGE_CATEGORY, {
        useTitle: () => ((0, o.ri)("DataUsageCategory") ? j.intl.string(j.t.QDAriI) : j.intl.string(j.t.bvw42E)),
        useInlineNotice: _z,
        initialize: () => {
            Cm.A.fetchedConsents || (0, Cg.Q)();
        },
        buildLayout: () =>
            (0, o.SB)("DataUsageCategory") ? [CE, CN, CS, Cx, CT, CA, Ch, Cf] : [CN, Cx, CT, CS, CA, CE],
    }),
    CI = (0, w.mj)({
        kind: "user",
        name: "2026-06-notify-friends-on-profile-update",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
function CC(e) {
    return CI.useConfig({ location: e }).enabled;
}
var Cb = i(567926);
let Cy = (0, a.zD)(u.X.NOTIFY_FRIENDS_ON_PROFILE_UPDATE_SETTING, {
    useTitle: () => j.intl.string(Cb.default.F3llsQ),
    useSubtitle: () => j.intl.string(Cb.default["6goWcz"]),
    useValue: L.Sy.useSetting,
    setValue: function (e) {
        L.Sy.updateSetting(e),
            G.default.track(M.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: U.Y.ACCOUNT,
                notify_friends_on_profile_update: e,
            });
    },
    usePredicate: () => CC("NotifyFriendsOnProfileUpdateSetting"),
});
function Cv() {
    let e = L.JG.useSetting();
    return (0, g.yK)([eg.Ay, ec.A], () => {
        let t = new Set(e);
        return eg.Ay.getFlattenedGuildIds().filter((e) => null != ec.A.getGuild(e) && !t.has(e));
    }, [e]);
}
let Cj = {
        type: h.wF.STACKED_ICONS,
        useIcons: function () {
            let e = Cv(),
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
    CO = (0, a.AK)(u.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = Cv();
            if (0 === e.length) return j.intl.format(j.t.QJIJ5p, {});
            let t = ec.A.getGuild(e[0]),
                i = t?.name ?? "",
                n = e.length - 1;
            return 0 === n
                ? j.intl.format(j.t["T+8J4A"], { guildName: i })
                : j.intl.format(j.t["3JyODQ"], { guildName: i, count: n });
        },
        useTrailingDecoration: function () {
            return Cj;
        },
        destinationKey: u.X.ACTIVITY_PRIVACY_PANEL,
    }),
    CR = (0, a.gN)(u.X.PROFILE_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, F.lX)("ProfilePrivacyRelatedSettings"),
        buildLayout: () => [CO],
    }),
    CL = (0, a.Qx)(u.X.PROFILE_PRIVACY_SETTING, {
        usePredicate: () => (0, F.lX)("ProfilePrivacySetting"),
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
        useValue: L.KP.useSetting,
        setValue: function (e) {
            let t = L.KP.getSetting();
            if ((L.KP.updateSetting(e), !(0, F.W1)("ProfilePrivacySetting"))) return;
            let n = (0, W.gS)(t, e);
            null != n &&
                (0, K.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        i.e("92164"),
                        i.e("36281"),
                        i.e("84422"),
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
    CD = (0, a.zZ)(u.X.PROFILE_PRIVACY_CATEGORY, {
        usePredicate: () => {
            let e = (0, F.lX)("ProfilePrivacyCategory"),
                t = CC("ProfilePrivacyCategory");
            return e || t;
        },
        useTitle: () => j.intl.string(j.t.ul884f),
        useSubtitle: () =>
            j.intl.format(j.t.N4jSgR, {
                learnMoreUrl: tN.A.getArticleURL("38859942749463-Profile-Privacy-Setting-on-Discord"),
            }),
        buildLayout: () => [CL, Cy, CR],
    });
var CP = i(814278),
    CG = i(936388),
    CU = i(714763);
let CM = (0, a.zD)(u.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => j.intl.string(j.t["opi/XK"]),
    useSubtitle: () => j.intl.format(j.t["/T+ZlP"], { helpArticle: (0, CP.Lu)() }),
    useValue: function () {
        return (0, g.bG)([CU.A], () => CU.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        CG.A.updatePersistentCodesEnabled(e);
    },
});
var CV = i(787392);
function Ck() {
    return (0, g.yK)([CV.A], () => CV.A.getUserIds());
}
var Cw = i(803306),
    CF = i(966327),
    CB = i(146003);
function Cz(e) {
    let { userId: t, count: i } = e,
        { analyticsLocations: n } = (0, nZ.Ay)(),
        s = (0, g.bG)([io.default], () => io.default.getUser(t)),
        l = xN.Ay.getFormattedName(s),
        r = S.useCallback(() => {
            (0, CP.kj)(t);
        }, [t]),
        a = S.useCallback(() => (0, TC.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: n }), [t, n]);
    return (
        S.useEffect(() => {
            (0, Cw.wz)(t);
        }, [t]),
        (0, E.jsxs)("div", {
            className: CB.uW,
            children: [
                null != s && (0, E.jsx)(CF.A, { className: CB.my, user: s, size: i4._3.SIZE_40 }),
                (0, E.jsxs)("div", {
                    className: CB.Qq,
                    children: [
                        (0, E.jsx)(en.D, {
                            className: CB.Xh,
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
                (0, E.jsx)(en.D, { onClick: r, className: CB.Qz, children: (0, E.jsx)(lQ.u, { size: "xs" }) }),
            ],
        })
    );
}
function CX(e) {
    let { className: t, userId: i, verification: n, index: s } = e,
        l = (0, CP.tC)(n.timestamp),
        r = S.useCallback(() => {
            (0, CP.W0)(i, n.verifiedKey);
        }, [n.verifiedKey, i]);
    return (0, E.jsxs)("div", {
        className: t,
        children: [
            (0, E.jsxs)("div", {
                className: CB.Qq,
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
                className: CB.Kk,
                onClick: r,
                children: (0, E.jsx)(gq.P, { size: "md", color: er.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function CY(e) {
    let { userId: t } = e,
        i = (0, g.yK)([CV.A], () =>
            eZ()(CV.A.getUserVerifiedKeys(t))
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
            (0, E.jsx)(Cz, { userId: t, count: i.length }),
            i.map((e, n) =>
                (0, E.jsxs)(
                    S.Fragment,
                    {
                        children: [
                            (0, E.jsx)(CX, { className: CB.nM, userId: t, index: n, verification: e }),
                            n !== i.length - 1 && (0, E.jsx)("div", { className: CB.yF }),
                        ],
                    },
                    `${n}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var CH = i(623161);
let CK = (0, a.E2)(u.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["5b3FNI"])],
        usePredicate: function () {
            let e = Ck();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = Ck();
            return (0, E.jsxs)(_6.h, {
                children: [
                    (0, E.jsx)(_6._, {
                        header: j.intl.string(j.t["5b3FNI"]),
                        description: j.intl.format(j.t.jrTSWU, { helpArticle: (0, CP.dc)() }),
                    }),
                    e.map((e) => (0, E.jsx)("div", { className: CH.A, children: (0, E.jsx)(CY, { userId: e }) }, e)),
                ],
            });
        },
    }),
    CW = (0, a.zZ)(u.X.VOICE_SECURITY_CATEGORY, {
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
                              useText: () => j.intl.format(j.t["/6sFWa"], { helpArticle: (0, CP.aW)() }),
                          },
                [e],
            );
        },
        usePredicate: () => (0, eY.isDesktop)(),
        buildLayout: () => [CM, CK],
    }),
    CZ = (0, a.t_)(u.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => j.intl.string(j.t.OAuOHD),
        buildLayout: () => ((0, o.SB)("DataAndPrivacyPanel") ? [C_, CD, CW] : [C_, CD, Cc, CW]),
    }),
    Cq = (0, a.i4)(u.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.OAuOHD),
        icon: Ci.m,
        buildLayout: () => [CZ],
    });
var CQ = i(476713);
let CJ = (0, a.AK)(u.X.CONNECTED_GAMES_AUTHORIZED_APPS_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.O65dzZ),
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        destinationKey: u.X.AUTHORIZED_APPS_CATEGORY,
    }),
    C$ = (0, a.gN)(u.X.CONNECTED_GAMES_RELATED_SETTINGS, { buildLayout: () => [CJ] }),
    C0 = (0, a.E2)(u.X.CONNECTED_GAMES_UNAVAILABLE, {
        Component: function () {
            let { showLoadingIndicator: e } = _C(!0, !0);
            return e ? (0, E.jsx)(dp.y, {}) : (0, E.jsx)(_v, {});
        },
        useSearchTerms: () => [j.intl.string(j.t["+0U77d"])],
        usePredicate: () => {
            let { showLoadingIndicator: e, slayerSdkApplications: t } = _C(!0, !0);
            return e || 0 === t.length;
        },
    });
function C1() {
    let { slayerSdkApplications: e, showLoadingIndicator: t } = _C(!0, !0);
    return {
        sortedGames: S.useMemo(() => e.toSorted((e, t) => dL.default.compare(t.id, e.id)), [e]),
        showLoadingIndicator: t,
    };
}
function C2() {
    let { sortedGames: e } = C1();
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
let C3 = (0, a.zZ)(u.X.SPAM_FILTERS_CATEGORY, { useTitle: () => j.intl.string(j.t.Qwuoic), buildLayout: () => [Ia] }),
    C6 = (0, a.zZ)(u.X.CONNECTED_GAMES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.RyvebU),
        useSubtitle: function () {
            let { sortedGames: e } = C1();
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
        useHeaderDecoration: () => ({ type: h.WX.STACKED_ICONS, useIcons: C2 }),
        useSearchTerms: () => [j.intl.string(j.t.YpCiMt)],
        initialize: () => {
            SC.A.fetch();
        },
        buildLayout: () => [_L, _D, C0, C$],
    }),
    C4 = (0, a.t_)(u.X.MESSAGING_PERMISSIONS_PANEL, {
        useTitle: () => j.intl.string(j.t.Cz07t8),
        buildLayout: () => [Io, C3, I7, IS, C6, Ij],
    }),
    C7 = (0, a.i4)(u.X.MESSAGING_PERMISSIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.Cz07t8),
        icon: CQ.l,
        buildLayout: () => [C4],
    });
var C5 = i(782603),
    C8 = i(899847),
    C9 = i(695515),
    be = i(936926);
let bt = (0, a.Hn)(u.X.MOBILE_NOTIFICATION_DELAY, {
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
    bi = (0, a.zD)(u.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => j.intl.string(j.t["btbS+Z"]),
        useSubtitle: () =>
            j.intl.format(j.t.Q5crhR, { onClick: () => (0, eH.openUserSettings)(u.X.TTS_PLAYBACK_RATE) }),
        useValue: L.on.useSetting,
        setValue: L.on.updateSetting,
    }),
    bn = (0, a.Qx)(u.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.JZxxGx),
        useSubtitle: () => j.intl.string(j.t.HDLtJl),
        useValue: () => (0, g.bG)([uM.A], () => uM.A.getTTSType()),
        setValue: (e) => uB.default.setTTSType(e),
        useOptions: function () {
            return [
                { name: j.intl.string(j.t.B1AGeJ), value: M.aVn.ALL_CHANNELS },
                { name: j.intl.string(j.t.uzZg9e), value: M.aVn.SELECTED_CHANNEL },
                { name: j.intl.string(j.t.DYO5Oi), value: M.aVn.NEVER },
            ];
        },
        usePredicate: () => nu.$j,
    }),
    bs = u.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    bl = (0, a.bd)(bs, {
        useTitle: (e) => (e ? j.intl.string(j.t.RyimDk) : j.intl.string(j.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return sC(bs, {
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
        buildLayout: () => [bt, bi, bn],
    }),
    br = (0, a.zZ)(u.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => j.intl.string(j.t["31DySj"]),
        buildLayout: () => [bl],
    }),
    ba = (0, a.zD)(u.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => j.intl.string(j.t.VH8AIJ),
        useSubtitle: () => j.intl.string(j.t["9K4qwX"]),
        useValue: function () {
            return (0, g.bG)([uM.A], () => !uM.A.getDisableUnreadBadge());
        },
        setValue: (e) => uB.default.setDisableUnreadBadge(!e),
    }),
    bo = (0, a.zZ)(u.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.l6w3Vj),
        buildLayout: () => [ba],
    });
var bu = i(840559),
    bd = i(997187),
    bc = i(723923);
let bg = bc.px.map((e) =>
        (0, a.zD)(`${u.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                (function (e) {
                    let { categories: t } = (0, g.cf)([bd.A], () => bd.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, bu.CA)(e.category, t),
        }),
    ),
    bm = (0, a.Tf)(u.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => j.intl.string(j.t.Ra9Pwk),
        useSubtitle: () => j.intl.string(j.t.iYjQ8X),
        useLabel: () => j.intl.string(j.t.KT1pBA),
        useDisabled: function () {
            let { categories: e } = (0, g.cf)([bd.A], () => bd.A.getEmailSettings());
            return bc.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, bu.NI)(),
        useVariant: () => "critical-secondary",
    }),
    bA = (0, a.zZ)(u.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => j.intl.string(j.t["w/qqKK"]),
        initialize: function () {
            let { initialized: e } = bd.A.getEmailSettings();
            e || (0, bu.cR)();
        },
        buildLayout: () => [...bg, bm],
    }),
    bh = (0, a.zD)(u.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t["/0WCll"]),
        useSubtitle: () => j.intl.string(j.t.wF9ih3),
        useValue: function () {
            return (0, g.bG)([uM.A], () => uM.A.getDesktopType()) !== M.nRU.NEVER;
        },
        setValue: (e) => uB.default.setDesktopType(e ? M.nRU.ALL : M.nRU.NEVER),
    });
var bE = i(832712),
    bS = i(543465),
    bT = i(790782);
let bx = (0, a.zD)(u.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => j.intl.string(j.t["k6m/si"]),
    useSubtitle: () => j.intl.string(j.t.LGynPs),
    useValue: () => (0, g.bG)([bS.Ay], () => bS.Ay.useNewNotifications),
    setValue: function (e) {
        bE.A.setAccountFlag(U.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (Ew.w.set("turnedOffNewNotifications", !0),
                G.default.track(M.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: ec.A.getGuildsArray().filter(
                        (e) => bS.Ay.resolveGuildUnreadSetting(e) === bT.e.ONLY_MENTIONS,
                    ).length,
                }));
    },
    usePredicate: () =>
        (0, g.bG)(
            [io.default, bS.Ay],
            () =>
                io.default.getCurrentUser()?.isStaff() ||
                io.default.getCurrentUser()?.isStaffPersonal() ||
                bS.Ay.useNewNotifications,
        ),
});
var bp = i(534654);
let bf = (0, a.zD)(u.X.SCREEN_DOWNTIME_REMINDER, {
        useTitle: () => j.intl.string(j.t.z9h8Ym),
        useSubtitle: () => j.intl.string(j.t.TummoQ),
        useValue: () => (0, g.bG)([uM.A], () => uM.A.screenDowntimeReminder),
        setValue: (e) => uB.default.setScreenDowntimeReminder(e),
        usePredicate: function () {
            let e = (0, be.Vh)({ location: "ScreenDowntimeReminderSetting" }),
                t = (0, bp.A)(),
                i = (0, Nx.Du)();
            return e && t && i;
        },
    }),
    bN = (0, a.zD)(u.X.SCREEN_DOWNTIME_SCHEDULE, {
        useTitle: () => j.intl.string(j.t.onrAy7),
        useSubtitle: () => j.intl.string(j.t["/071J7"]),
        useValue: L.gY.useSetting,
        setValue: (e) => L.gY.updateSetting(e),
        usePredicate: function () {
            let e = (0, be.Vh)({ location: "ScreenDowntimeScheduleSetting" }),
                t = (0, bp.A)(),
                i = (0, Nx.Du)();
            return e && t && i;
        },
    });
var b_ = i(70730);
let bI = (0, a.zD)(u.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.NjOMvh),
        useValue: L.oz.useSetting,
        setValue: function (e) {
            L.oz.updateSetting(e),
                G.default.track(M.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: U.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                });
        },
        useSearchTerms: () => [j.intl.string(j.t.hi4dSk)],
        usePredicate: () => {
            let { enabled: e } = b_.u.getConfig({ location: "FriendAnniversaryNotifications" });
            return e;
        },
    }),
    bC = (0, w.mj)({
        kind: "user",
        name: "2026-03-friend-is-online-v3",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    bb = (0, a.zD)(u.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.sQQgFj),
        useValue: L.NR.useSetting,
        setValue: function (e) {
            L.NR.updateSetting(e),
                G.default.track(M.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: U.Y.ACCOUNT,
                    friend_online_notifications: e,
                });
        },
        usePredicate: () => bC.useConfig({ location: "FriendOnlineNotifications" }).showSettingsToggle,
    }),
    by = (0, a.zD)(u.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.FSNIvs),
        useValue: L.Yh.useSetting,
        setValue: function (e) {
            L.Yh.updateSetting(e),
                G.default.track(M.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: U.Y.ACCOUNT,
                    go_live_notifications: e,
                });
        },
    }),
    bv = (0, w.mj)({
        kind: "user",
        name: "2026-01-profile-updates-notification",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 0: { showSettingsToggle: !1 }, 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    bj = (0, a.zD)(u.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.xBLMhQ),
        useValue: L.T3.useSetting,
        setValue: function (e) {
            L.T3.updateSetting(e),
                G.default.track(M.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: U.Y.ACCOUNT,
                    profile_updates_notifications: e,
                });
        },
        usePredicate: () => bv.useConfig({ location: "user_settings.ProfileUpdatesNotifications" }).showSettingsToggle,
    });
var bO = i(815807);
let bR = (0, a.Hn)(u.X.REACTION_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: j.intl.string(j.t["9x/RtT"]), value: H.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: j.intl.string(j.t.fJAbQd), value: H.Tz.ONLY_DMS },
            { id: "disabled", label: j.intl.string(j.t["xu+UDU"]), value: H.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: L.Zp.useSetting,
        setValue: (e) => (0, bO.n4)(e, L.Zp.getSetting()),
    }),
    bL = (0, a.zD)(u.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t["k51K1+"]),
        useValue: L.Qr.useSetting,
        setValue: function (e) {
            L.Qr.updateSetting(e),
                G.default.track(M.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: U.Y.ACCOUNT,
                    server_trending_notifications: e,
                });
        },
        usePredicate: () => !1,
    }),
    bD = (0, w.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    bP = (0, a.zD)(u.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.G8NPz6),
        useValue: L.zS.useSetting,
        setValue: function (e) {
            L.zS.updateSetting(e),
                G.default.track(M.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: U.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                });
        },
        usePredicate: () => bD.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    bG = (0, a.FW)(u.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.FEVRDV),
        buildLayout: () => [by, bI, bb, bL, bP, bj, bR],
    }),
    bU = (0, a.zD)(u.X.TASK_BAR_FLASHING, {
        useTitle: () => j.intl.string(j.t.xSmFQG),
        useSubtitle: () => j.intl.string(j.t.bd4j4x),
        useValue: () => (0, g.bG)([uM.A], () => uM.A.taskbarFlash),
        setValue: (e) => uB.default.setTaskbarFlash(e),
        usePredicate: () => (0, c.uF)(),
    }),
    bM = (0, a.zZ)(u.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => j.intl.string(j.t["/dp6yY"]),
        buildLayout: () => [bh, bU, bG, bx, bN, bf],
    });
var bV = i(965957),
    bk = i(312671),
    bw = i(235079);
let bF = (0, a.zD)(u.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = uV.A.useHolidaySoundpack();
        return null == e ? "" : j.intl.format(j.t["E/OyBr"], { soundpack: j.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, g.bG)([bk.A], () => bk.A.getSoundpack()),
            t = uV.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = uV.A.getHolidaySoundpack();
        tz()(null != t, "predicate should fail if no soundpack is available"), (0, bV.p)(e ? t : bw.i.CLASSIC);
    },
    usePredicate: uV.A.useIsEligible,
});
var bB = i(970931);
let bz = {
        useTitle: () => j.intl.string(j.t.jD1qzM),
        sound: "message1",
        useDisabled: bB.kB,
        useDisabledMessage: () => ((0, bB.kB)() ? j.intl.string(j.t.cIRG0s) : void 0),
    },
    bX = { useTitle: () => j.intl.string(j.t.XBrJT6), sound: "call_ringing" },
    bY = (0, a.zD)(u.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.TzjwV9),
        useSubtitle: () => j.intl.format(j.t.OOiGCM, { onClick: () => uY("message3") }),
        useValue: () =>
            (0, g.bG)([uM.A], () => uM.A.getNotifyMessagesInSelectedChannel() && !uM.A.getDisableAllSounds()),
        setValue: (e) => uB.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, g.bG)([uM.A], () => uM.A.getDisableAllSounds()),
    }),
    bH = (0, a.zD)(u.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => j.intl.string(j.t["2ZhCOd"]),
        useSubtitle: () => j.intl.string(j.t.EAKdPr),
        useValue: () => (0, g.bG)([uM.A], () => uM.A.getDisableAllSounds()),
        setValue: (e) => uB.default.toggleDisableAllSounds(e),
    }),
    bK = (0, a.D1)(u.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                uX();
            };
        },
        buildLayout: () => [uH(bz), bY, uH(bX), bH],
    }),
    bW = (0, a.AK)(u.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t["MMy+lm"]),
        useSearchTerms: () => [j.intl.string(j.t["MMy+lm"])],
        destinationKey: u.X.SOUNDS_CATEGORY,
    }),
    bZ = (0, a.gN)(u.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [bW] }),
    bq = (0, a.zZ)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.LweOYy),
        buildLayout: () => [bF, bK, bZ],
    }),
    bQ = (0, a.t_)(u.X.NOTIFICATIONS_PANEL, {
        useTitle: () => j.intl.string(j.t.HcoRu0),
        initialize: () => {
            !(0, be.Eq)({ location: "NotificationsPanel" }) ||
                null != C9.A.getAgeGroup() ||
                C9.A.isLoading() ||
                (C9.A.canRefetch() && C8.Ay.initialPageLoad());
        },
        buildLayout: () => [bM, bq, bo, bA, br],
    }),
    bJ = (0, a.i4)(u.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.HcoRu0),
        icon: C5.X,
        buildLayout: () => [bQ],
    }),
    b$ = (0, a.WI)(u.X.USER_SECTION, {
        useTitle: () => j.intl.string(j.t.ShSTDe),
        hideTitle: !0,
        buildLayout: () => {
            let e = (0, o.Bv)("UserSection");
            return [NU, ...(e ? [] : [Ct]), Cq, ...(e ? [C7] : []), ...(e ? [] : [Nw]), ...(e ? [] : [__]), bJ, _x];
        },
    });
var b0 = i(387758),
    b1 = i(271866),
    b2 = i(147964),
    b3 = i(868511);
let b6 = (0, a.zD)(u.X.APPLICATION_TEST_MODE, {
        useTitle: () => j.intl.string(j.t.erOqlh),
        useSubtitle: () => j.intl.string(j.t["52hMnD"]),
        usePredicate: L.Q_.useSetting,
        useValue: () => (0, g.bG)([b2.A], () => null != b2.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, K.openModal)((e) => (0, E.jsx)(b3.A, { ...e })) : b1.cL();
        },
    }),
    b4 = (0, a.zD)(u.X.DEVELOPER_MODE, {
        useTitle: () => j.intl.string(j.t.ObIb1Q),
        useSubtitle: () => j.intl.format(j.t["CY6q/Q"], { apiDocsUrl: M.X7G.API_DOCS }),
        useValue: L.Q_.useSetting,
        setValue: L.Q_.updateSetting,
        usePredicate: () => c5.p5,
    }),
    b7 = (0, a.zZ)(u.X.DEVELOPER_CATEGORY, { buildLayout: () => [b4, b6] }),
    b5 = (0, a.t_)(u.X.DEVELOPER_PANEL, { useTitle: () => j.intl.string(j.t["0BRxRp"]), buildLayout: () => [b7] }),
    b8 = (0, a.i4)(u.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: b0.G,
        useTitle: () => j.intl.string(j.t["0BRxRp"]),
        buildLayout: () => [b5],
    });
var b9 = i(70688),
    ye = i(830215);
let yt = (0, a.i4)(u.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => j.intl.string(j.t["2jxGer"]),
        icon: b9.o,
        onClick: () => {
            (0, sg.A)({
                title: j.intl.string(j.t["2jxGer"]),
                subtitle: j.intl.string(j.t.SUnWBB),
                confirmText: j.intl.string(j.t["2jxGer"]),
                onConfirm: () => {
                    ye.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    yi = (0, a.WI)(u.X.UTILITY_SECTION, {
        useTitle: () => j.intl.string(j.t["2kOEFe"]),
        hideTitle: !0,
        buildLayout: () => [b8, yt],
    }),
    yn = (0, a.Hr)({
        buildLayout: function () {
            return [pq, b$, Er, dE, (0, o.Bv)("UserSettingsRoot_buildLayout") ? Tx : i1, SI, yi];
        },
        analyticsKey: "user_settings",
    });
