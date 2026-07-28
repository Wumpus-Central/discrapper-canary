i.d(t, { D: () => bJ });
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
    h = i(757418),
    E = i(477900),
    S = i(582128),
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
        useTrailingDecoration: () => {
            let e = y();
            return { type: h.wF.STACKED_ICONS, icons: e };
        },
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
    M = i(406535),
    U = i(652215);
let V = (0, a.zD)(u.X.ACTIVITY_PRIVACY_NOTIFY_FRIENDS_ONLINE_SETTING, {
        useTitle: () => j.intl.string(D.default.A0FVCV),
        useSubtitle: () => j.intl.string(D.default.vHX6RG),
        useValue: L.hV.useSetting,
        setValue: function (e) {
            L.hV.updateSetting(e),
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
let Y = (0, a.AK)(u.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.J0SFL2),
        destinationKey: u.X.DATA_AND_PRIVACY_PANEL,
    }),
    X = (0, a.gN)(u.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, F.lX)("ActivityPrivacyRelatedSettings"),
        buildLayout: () => [Y],
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
            let { default: e } = await Promise.all([i.e("81849"), i.e("62041"), i.e("41996")]).then(i.bind(i, 32167));
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
    ed = i(573435),
    ec = i(260509),
    eg = i(876399);
function em(e) {
    let { guild: t, size: i } = e,
        n = (0, ec.Iv)(t, i, !1, !0),
        s = (0, ec.Rb)(t);
    return null != n
        ? (0, E.jsx)("img", { src: n, alt: t.name, height: i, width: i })
        : (0, E.jsx)("div", {
              className: eg.F,
              children: (0, E.jsx)(es.E, {
                  color: "text-subtle",
                  variant: 48 === i ? "text-md/semibold" : "text-xxs/semibold",
                  children: s,
              }),
          });
}
function eA(e) {
    let { guild: t, size: i } = e;
    return (0, E.jsx)(ed.Ay, {
        className: eg.z,
        mask: ed.Ay.Masks.SQUIRCLE,
        width: i,
        height: i,
        children: (0, E.jsx)(em, { guild: t, size: i }),
    });
}
var eh = i(71393),
    eE = i(711014),
    eS =
        (((n = {}).SERVER_ORDER = "server-order"),
        (n.RECENTLY_JOINED = "recently-joined"),
        (n.ACTIVITY_SHARING_ON = "activity-sharing-on"),
        (n.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
        n);
let eT = {
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
var ex = i(775657);
function ep(e) {
    let { guild: t, isActivityRestricted: i, onToggleActivityRestrictedGuild: n } = e,
        s = (0, g.bG)([eu.A], () => eu.A.getMemberCount(t.id));
    return (0, E.jsxs)(Q.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, E.jsx)("div", { className: ex.FO, children: (0, E.jsx)(eA, { guild: t, size: 48 }) }),
            (0, E.jsx)("div", {
                className: ex.QH,
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
let ef = function (e) {
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
                s = (0, g.bG)([eE.Ay], () => eE.Ay.getFlattenedGuildIds()),
                l = (0, g.bG)([eh.A], () => eh.A.getGuilds()),
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
                [m, A] = (0, S.useState)(() => eT[i](r, a)),
                h = m.map((e) => l[e.id]).filter(Boolean);
            return {
                guilds: "" === e ? h : h.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
                sortOrder: i,
                searchQuery: e,
                setSortOrder: (e) => {
                    A(eT[e](r, a)), n(e);
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
                { id: eS.SERVER_ORDER, label: j.intl.string(j.t.STMPJ2), value: eS.SERVER_ORDER },
                { id: eS.RECENTLY_JOINED, label: j.intl.string(j.t.CbaapP), value: eS.RECENTLY_JOINED },
                { id: eS.ACTIVITY_SHARING_ON, label: j.intl.string(D.default.ZI51JZ), value: eS.ACTIVITY_SHARING_ON },
                {
                    id: eS.ACTIVITY_SHARING_OFF,
                    label: j.intl.string(D.default["+kxafn"]),
                    value: eS.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        x = T.find((e) => e.value === l)?.label ?? "";
    return (0, E.jsxs)("div", {
        className: ex.iE,
        children: [
            t,
            (0, E.jsxs)("div", {
                className: ex.N1,
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
                            className: ex.gO,
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
                                            className: ex.Ku,
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
                className: ex.X1,
                id: A,
                "aria-label": j.intl.string(j.t["7hB4kg"]),
                children: [
                    0 === i.length &&
                        (0, E.jsx)("div", {
                            className: ex.pb,
                            children: (0, E.jsx)(es.E, {
                                className: ex.R$,
                                variant: "text-lg/medium",
                                children: j.intl.string(j.t["Xe+fJM"]),
                            }),
                        }),
                    i.map((e) =>
                        (0, E.jsx)(
                            ep,
                            { guild: e, isActivityRestricted: d(e.id), onToggleActivityRestrictedGuild: u },
                            e.id,
                        ),
                    ),
                ],
            }),
        ],
    });
};
var eN = i(155957);
let e_ = (0, a.E2)(u.X.ACTIVITY_PRIVACY_PER_GUILD_SETTING, {
        useSearchTerms: () => [j.intl.string(D.default["/LHVbt"])],
        Component: function () {
            let e = L.tz.useSetting()
                ? null
                : (0, E.jsx)("div", {
                      className: eN.l,
                      children: (0, E.jsx)(q.w, { type: "warning", children: j.intl.string(D.default["xxI0/W"]) }),
                  });
            return (0, E.jsx)(ef, { notice: e });
        },
    }),
    eI = (0, a.zZ)(u.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
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
        buildLayout: () => ((0, o.Bv)("GuildActivitySharingCategory") ? [Z, e_, X] : [Z]),
    }),
    eC = (0, a.zZ)(u.X.ACTIVITY_PRIVACY_MY_SERVERS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.TqdOvC),
        useSubtitle: () => (z("MyServersCategory") ? j.intl.string(D.default.OO17Lg) : null),
        buildLayout: () => [e_, X],
    }),
    eb = (0, a.zD)(u.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => j.intl.string(D.default.khuuzv),
        useSubtitle: () => j.intl.string(D.default["8EWsJ8"]),
        useValue: () => L.e.useSetting(),
        setValue: (e) => L.e.updateSetting(e),
    }),
    ev = (0, a.E2)(u.X.ACTIVITY_PRIVACY_GAME_JOINING_BLURB, {
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
    ey = (0, a.zD)(u.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => j.intl.string(D.default.Uz5Ipi),
        useSubtitle: () => j.intl.string(D.default.CZI2Gb),
        useValue: () => L.UM.useSetting(),
        setValue: (e) => L.UM.updateSetting(e),
    }),
    ej = (0, a.zZ)(u.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => j.intl.string(D.default["89YBr5"]),
        useSubtitle: () => ((0, o.SV)("GameJoiningCategory") ? j.intl.string(j.t.uGDpgH) : null),
        buildLayout: () => [eb, ey, ev],
        useSearchTerms: () => [j.intl.string(j.t.VOszPA)],
    });
var eO = i(993077),
    eR = i(575915);
let eL = (0, a.E2)(u.X.ACTIVITY_PRIVACY_TERMS, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, E.jsx)(eO.Z, {
                type: eO.Z.Types.PRIMARY,
                className: eR.A,
                children: (0, E.jsx)(es.E, {
                    variant: "text-sm/normal",
                    children: j.intl.format(j.t.xvCsx4, { termsLink: U.X7G.TERMS, privacyLink: U.X7G.PRIVACY }),
                }),
            });
        },
    }),
    eD = (0, a.zZ)(u.X.ACTIVITY_PRIVACY_TERMS_CATEGORY, {
        buildLayout: () => [eL],
        usePredicate: () => !(0, o.SV)("TermsCategory"),
    }),
    eP = (0, a.t_)(u.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => j.intl.string(j.t.Cq98yL),
        buildLayout: () => ((0, o.Bv)("ActivityPrivacyPanel") ? [k, eI, ej] : [k, eI, eC, ej, eD]),
    }),
    eG = (0, a.i4)(u.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.Cq98yL),
        icon: d._,
        buildLayout: () => [eP],
    });
var eM = i(935399),
    eU = i(625657),
    eV = i(297264),
    ek = i(821609),
    ew = i(404778),
    eF = i(554146),
    eB = i(131607),
    ez = i(589051),
    eY = i(592598),
    eX = i(351906),
    eH = i(532624),
    eK = i(773371),
    eW = i(184809),
    eZ = i(723702),
    eq = i(766075),
    eQ = i(999834),
    eJ = i(435558),
    e$ = i.n(eJ),
    e0 = i(350535),
    e1 = i(672396);
let e2 = e5(null);
function e3() {
    var e;
    let t = e5(e2);
    (e = e2),
        e$().isEqual(e$().omit(t, "old_enabled"), e$().omit(e, "old_enabled")) ||
            (G.default.track(U.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (e2 = t));
}
function e5(e) {
    let t = eW.default.getNotificationPositionMode(),
        i = t !== U.G6Q.DISABLED,
        n = eH.Ay.getOverlayKeybind(),
        s = eH.Ay.getOverlayChatKeybind();
    return {
        enabled: eK.default.enabled,
        notifications_enabled: i,
        notifications_position: i ? t : null,
        text_notifications_mode: eY.A.isNotificationDisabled(e1.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != n ? (0, e0.dI)(n.shortcut) : null,
        text_activation_hotkey: null != s ? (0, e0.dI)(s.shortcut) : null,
        text_opacity_slider: eW.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? eK.default.enabled,
    };
}
var e6 = i(793574),
    e4 = i(237984),
    e8 = i(503698),
    e7 = i.n(e8),
    e9 = i(890856),
    te = i(295648);
function tt(e) {
    e.preventDefault(), e.stopPropagation();
}
function ti(e) {
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
        className: e7()(te.HS, d),
        children: [
            (0, E.jsxs)(e9.s, {
                "aria-label": u,
                onClick: o,
                children: [
                    null != t && (0, E.jsx)("div", { className: te.x_, children: t }),
                    (0, E.jsxs)("div", {
                        className: te.rN,
                        children: [
                            null != i && (0, E.jsx)("div", { className: te.$t, children: i }),
                            (0, E.jsxs)("div", {
                                className: te.c8,
                                children: [
                                    (0, E.jsx)(es.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: te.SZ,
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
                            (0, E.jsx)("div", { className: te.a$, children: l }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)("div", { className: te.Om, children: a }),
        ],
    });
}
let tn = (0, a.E2)(u.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, E.jsx)(ti, {
            title: j.intl.string(j.t["z4/l+V"]),
            description: j.intl.string(j.t["3aZq/0"]),
            action: (0, E.jsx)(ek.$, {
                variant: "primary",
                text: j.intl.string(j.t.s2nVhG),
                onClick: () => {
                    (0, e4.b)(e6.A.USER_SETTINGS, U.BRT.APP);
                },
            }),
            "aria-label": j.intl.string(j.t["z4/l+V"]),
        });
    },
    useSearchTerms: () => [j.intl.string(j.t["z4/l+V"])],
});
var ts = i(812729),
    tl = i.n(ts),
    tr = i(429913),
    ta = i(616356);
function to(e, t) {
    return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0;
}
function tu() {
    let e = (0, g.bG)([ta.A], () => ta.A.getStreamerActiveStreamMetadata()),
        t = (0, g.bG)(
            [m.Ay],
            () => {
                let e = m.Ay.getVisibleGame();
                return null != e ? m.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
            },
            [],
            tl(),
        ),
        [i] = (0, tr.A)([to(e, t)]);
    return { runningGame: t ?? void 0, runningGameApplication: i ?? void 0 };
}
var td = i(866665),
    tc = i(478016),
    tg = i(31300),
    tm = i(780907),
    tA = i(684013),
    th = i(56562),
    tE = i(964486),
    tS = i(311043),
    tT = i(569926),
    tx = i(814925),
    tp = i(810412),
    tf = i(41984),
    tN = i(296027),
    t_ = i(562519);
let tI = 5 * i(927813).A.Millis.DAY,
    tC = new t_.A("overlay_survey_timestamps");
function tb(e, t) {
    let n, s;
    (n = Date.now()),
        (null != (s = Array.from(tC.values()).reduce((e, t) => Math.max(e, t), 0)) && n - s < tI) ||
            Array.from(tC.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, K.openModalLazy)(async () => {
                let n,
                    { default: s } = await Promise.all([i.e("79969"), i.e("82318")]).then(i.bind(i, 387101));
                return (n = Date.now()), tC.add(n), (i) => (0, E.jsx)(s, { ...i, clientSettingType: e, gameId: t });
            });
}
var tv = i(512950),
    ty = i(975571),
    tj = i(935671);
function tO() {
    (0, tj.sL)("overlay-settings");
}
function tR(e) {
    let { className: t, game: i } = e;
    return (0, tj.NP)() && null != i && i.elevated
        ? (0, E.jsx)("div", {
              className: t,
              children: (0, E.jsx)(tv.p, {
                  messageType: tv.Y.WARNING,
                  action: (0, E.jsx)(ek.$, {
                      variant: "secondary",
                      size: "sm",
                      text: j.intl.string(j.t["1iI46O"]),
                      onClick: tO,
                  }),
                  children: j.intl.format(j.t["LJzl+0"], { helpCenterLink: ty.A.getArticleURL(U.MVz.SYSTEM_SERVICE) }),
              }),
          })
        : null;
}
var tL = i(760751),
    tD = i(189081),
    tP = i(9302),
    tG = i(656513),
    tM = i(320448);
let tU = new Set([
    tf.AR.INITIALIZING,
    tf.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
    tf.AR.WAITING_FOR_MODULE_TRACKING,
    tf.AR.WAITING_FOR_OVERLAY_OPEN,
    tf.AR.WAITING_FOR_POPOUT_OPEN,
    tf.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
    tf.AR.WAITING_FOR_REACT_INITIALIZATION,
    tf.AR.WAITING_FOR_PID_FOCUS,
    tf.AR.WAITING_FOR_SUCCESSFUL_SHOW,
]);
function tV(e) {
    let { children: t, className: i, onExpand: n, ...s } = e,
        [l, r] = S.useState(!1);
    return (0, E.jsx)(tG.N, {
        className: te.uR,
        collapsibleContent: (0, E.jsx)("div", { className: te.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, E.jsx)(ti, {
                ...s,
                onClick: (e) => {
                    var i;
                    r((i = !l)), n?.(i), t?.(e);
                },
                className: e7()(te.AC, i),
                action: (0, E.jsxs)("div", {
                    className: te.rc,
                    children: [
                        s.action,
                        l
                            ? (0, E.jsx)(el.a, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              })
                            : (0, E.jsx)(tM._, {
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
let tk = (0, a.E2)(u.X.OVERLAY_CURRENT_GAME, {
    Component: function () {
        let { runningGame: e, runningGameApplication: t } = tu();
        (0, tT.I)(e?.id);
        let i = e?.pid,
            n = (0, g.bG)(
                [tN.default],
                () => (null == e || null == i ? null : tN.default.getTrackedGameByPid(i)),
                [e, i],
                tl(),
            ),
            { enabledLegacy: s, enabledOOP: l } = (0, g.cf)(
                [tL.A, tD.A, tS.A],
                () =>
                    null == e && null == n
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: n?.legacyEnabled ?? !1, enabledOOP: n?.oopEnabled ?? !1 }
                          : (0, m.hw)(e, !1, [tL.A, tD.A, tS.A]),
                [e, n],
            ),
            r = (0, g.bG)(
                [m.Ay, tL.A, tD.A, tS.A],
                () => (null == e ? null : (0, m.xU)(e, m.Ay, tL.A, tD.A, tS.A)),
                [e],
                tl(),
            ),
            [a, o] = S.useState(l),
            [u, d] = S.useState(s),
            [c, A] = S.useState(!1);
        S.useEffect(() => {
            o(l), d(s);
        }, [l, s]);
        let h = !(0, tP.supportsLegacy)(),
            T = !(0, tP.supportsOutOfProcess)(),
            { legacyEnabled: x, oopEnabled: f } = (0, g.cf)([tN.default], () => tN.default.getGlobalEnabledStatus());
        function N(t, i) {
            if (null == e) return;
            let n = !1,
                s = !1;
            switch (i) {
                case tp.OverlayToggledClientSettingType.LEGACY_GAME:
                    d(t), tm.Ay.toggleOverlay(e, t, a), (n = !t && u);
                    break;
                case tp.OverlayToggledClientSettingType.OOP_GAME:
                    o(t), tm.Ay.toggleOverlay(e, u, t), (s = !t && a);
                    break;
                case tp.OverlayToggledClientSettingType.LEGACY:
                    tA.A.setEnabled(t, f), (0, tp.Q3)(t, tp.OverlayToggledClientSettingType.LEGACY, e.id ?? null);
                    break;
                case tp.OverlayToggledClientSettingType.OOP:
                    tA.A.setEnabled(x, t), (0, tp.Q3)(t, tp.OverlayToggledClientSettingType.OOP, e.id ?? null);
            }
            (n || s) &&
                tb(
                    n ? tp.OverlayToggledClientSettingType.LEGACY_GAME : tp.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        }
        let _ = h && T,
            I = !x && !f,
            C = !a && !x && u && !h,
            b = !u && !f && a && !T,
            v = n?.overlayMethod === tf.Ue.Disabled,
            y = n?.state === tf.AR.OVERLAY_RENDERING && !v,
            O = n?.state != null && tU.has(n.state) && !v,
            R = n?.overlayMethod === tf.Ue.OutOfProcess,
            L = n?.overlayMethod === tf.Ue.OutOfProcessLimitedInteraction,
            D = n?.overlayMethod === tf.Ue.Hook,
            P = n?.state === tf.AR.OVERLAY_CRASHED || n?.state === tf.AR.OVERLAY_CRASHED_DISABLED,
            G = !a && !u,
            [M, U] = (function () {
                switch (!0) {
                    case y && R:
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
                    case y && L:
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
                    case y && D:
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
                                    case n?.fullscreenType !== th.aI.BORDERLESS_FULLSCREEN:
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
                        let e = n?.fullscreenType === th.aI.FULLSCREEN ? j.intl.string(j.t.mJmbeC) : null;
                        return [j.intl.string(j.t.VPW4XY), e];
                    }
                    default:
                        return [j.intl.string(j.t.ONovP5), null];
                }
            })();
        (0, tE.Ay)(() => {
            tm.Ay.getDetectableGames();
        });
        let [V, k] = S.useMemo(
            () =>
                O
                    ? ["text-muted", er.A.colors.TEXT_MUTED.css]
                    : y && L
                      ? ["text-feedback-warning", er.A.colors.TEXT_FEEDBACK_WARNING.css]
                      : y && R
                        ? ["text-feedback-positive", er.A.colors.TEXT_FEEDBACK_POSITIVE.css]
                        : y && D
                          ? ["text-strong", er.A.colors.TEXT_STRONG.css]
                          : ["interactive-text-default", er.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
            [O, y, L, R, D],
        );
        return null == e
            ? null
            : (0, E.jsxs)(tV, {
                  onExpand: A,
                  className: c ? te.tx : void 0,
                  title: (0, E.jsxs)(E.Fragment, {
                      children: [
                          t?.name ?? r?.name ?? e?.gameName ?? "",
                          null != r && r.verified
                              ? (0, E.jsx)(td.m, {
                                    text: j.intl.string(j.t["4PJP5p"]),
                                    children: (0, E.jsx)(tx.A, {
                                        size: 16,
                                        color: er.A.colors.BACKGROUND_BRAND.css,
                                        children: (0, E.jsx)(tc.U, {
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
                          y || O
                              ? (0, E.jsx)(tg.k, { size: "xxs", color: k })
                              : (0, E.jsx)("div", { className: te.W4 }),
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
                      onClick: (e) => tt(e),
                      children: (0, E.jsx)(J.d, {
                          checked: (a && f) || (u && x),
                          disabled: _,
                          onChange: (t) => {
                              !(function (t, i) {
                                  if (null == e) return;
                                  let n = !1,
                                      s = !1;
                                  switch (i) {
                                      case "game":
                                          tm.Ay.toggleOverlay(e, t, t), d(t), o(t), (n = !t && u), (s = !t && a);
                                          break;
                                      case "global":
                                          tA.A.setEnabled(t, t), (n = !t && x), (s = !t && f);
                                          break;
                                      case "both":
                                          tA.A.setEnabled(t, t),
                                              tm.Ay.toggleOverlay(e, t, t),
                                              d(t),
                                              o(t),
                                              (n = (!t && x) || (!t && u)),
                                              (s = (!t && f) || (!t && a));
                                  }
                                  let l = null;
                                  n
                                      ? (l =
                                            "game" === i
                                                ? tp.OverlayToggledClientSettingType.LEGACY_GAME
                                                : tp.OverlayToggledClientSettingType.LEGACY)
                                      : s &&
                                        (l =
                                            "game" === i
                                                ? tp.OverlayToggledClientSettingType.OOP_GAME
                                                : tp.OverlayToggledClientSettingType.OOP),
                                      null != l && tb(l, e.id ?? null);
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
                  warning: (0, E.jsx)(tR, { className: te.Hh, game: e }),
                  children: [
                      (0, E.jsx)(ti, {
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
                                              ? N(e, tp.OverlayToggledClientSettingType.OOP)
                                              : N(e, tp.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, E.jsx)("div", { className: te.Kz }),
                              ],
                          }),
                      }),
                      (0, E.jsx)(ti, {
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
                                              ? N(e, tp.OverlayToggledClientSettingType.LEGACY)
                                              : N(e, tp.OverlayToggledClientSettingType.LEGACY_GAME);
                                      },
                                  }),
                                  (0, E.jsx)("div", { className: te.Kz }),
                              ],
                          }),
                      }),
                  ],
              });
    },
    usePredicate: () => {
        let { runningGame: e } = tu();
        return null != e;
    },
    useSearchTerms: () => [j.intl.string(j.t["9cb1Uz"])],
});
var tw = i(364522),
    tF = i(206885);
function tB(e) {
    let { game: t, gameApplication: i } = e,
        n = S.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        s = (0, g.bG)([x.A], () => (null != i ? i : x.A.getApplication(t?.id)), [i, t]);
    return (0, E.jsx)(p.A, { game: s, pid: n, size: p.M.SMALL });
}
function tz(e) {
    let {
        rawGame: t,
        gameApplication: i,
        supportDisabled: n,
        getEnabledFromStatus: s,
        onChange: l,
        clientSettingType: r,
        ariaLabel: a,
    } = e;
    (0, tT.I)(t?.id);
    let o = (0, g.cf)([m.Ay, tL.A, tD.A, tS.A], () => (0, m.xU)(t, m.Ay, tL.A, tD.A, tS.A)),
        u = (0, g.cf)([tL.A, tD.A, tS.A], () => (0, m.hw)(t, !1, [tL.A, tD.A, tS.A]), [t]),
        d = s(u),
        [c, A] = S.useState(d);
    return (
        S.useEffect(() => {
            A(d);
        }, [d]),
        (0, E.jsx)(ti, {
            title: t.name,
            icon: (0, E.jsx)(tB, { game: o, gameApplication: i }),
            "aria-label": a,
            action: (0, E.jsxs)(E.Fragment, {
                children: [
                    (0, E.jsx)(J.d, {
                        checked: c,
                        disabled: n,
                        onChange: (e) => {
                            let i;
                            return (i = !e && c), void (A(e), l(e, o, u), i && tb(r, o.id ?? t?.id ?? null));
                        },
                    }),
                    (0, E.jsx)("div", { className: te.Kz }),
                ],
            }),
        })
    );
}
let tY = (0, a.E2)(u.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = S.useState(!1),
                { legacyEnabled: i, oopEnabled: n } = (0, g.cf)([tN.default], () =>
                    tN.default.getGlobalEnabledStatus(),
                ),
                s = (0, g.yK)([m.Ay], () => m.Ay.getGamesSeen(!0)).filter((e) => !(0, A.n1)(e)),
                l = (0, tr.A)(s.map((e) => e.id)),
                r = !(0, tP.supportsLegacy)();
            function a(e) {
                tA.A.setEnabled(e, n);
                let t = m.Ay.getCurrentGameForAnalytics()?.id ?? null;
                (0, tp.Q3)(e, tp.OverlayToggledClientSettingType.LEGACY, t),
                    !e && i && tb(tp.OverlayToggledClientSettingType.LEGACY, t);
            }
            function o(e, t, i) {
                let { enabledOOP: n } = i;
                tm.Ay.toggleOverlay(t, e, n);
            }
            let u = S.useMemo(
                () =>
                    (0, tP.supportsLegacy)()
                        ? r
                            ? j.intl.string(j.t.r9jEVw)
                            : j.intl.string(j.t.OzInYk)
                        : j.intl.string(j.t["8Ox6/E"]),
                [r],
            );
            return 0 === s.length
                ? (0, E.jsx)(ti, {
                      title: j.intl.string(j.t.BfFpW1),
                      description: u,
                      "aria-label": j.intl.string(j.t.BfFpW1),
                      className: te.dA,
                      action: (0, E.jsxs)(E.Fragment, {
                          children: [
                              (0, E.jsx)(J.d, { checked: i, disabled: r, onChange: (e) => a(e) }),
                              tF.O && (0, E.jsx)("div", { className: te.Kz }),
                          ],
                      }),
                  })
                : (0, E.jsxs)(tV, {
                      onExpand: t,
                      className: e ? te.tx : void 0,
                      title: j.intl.string(j.t.BfFpW1),
                      description: u,
                      "aria-label": j.intl.string(j.t.BfFpW1),
                      action: (0, E.jsx)(en.D, {
                          onClick: (e) => tt(e),
                          children: (0, E.jsx)(J.d, { checked: i, disabled: r, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, E.jsx)("div", {
                              className: te.SC,
                              children: (0, E.jsx)(es.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: j.intl.string(j.t.FzoWRo),
                              }),
                          }),
                          (0, E.jsx)(tw.Ip, {
                              className: te.XG,
                              children: s.map((e, t) =>
                                  (0, E.jsx)(
                                      tz,
                                      {
                                          rawGame: e,
                                          clientSettingType: tp.OverlayToggledClientSettingType.LEGACY_GAME,
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
    tX = (0, a.E2)(u.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = S.useState(!1),
                { oopEnabled: i, legacyEnabled: n } = (0, g.cf)([tN.default], () =>
                    tN.default.getGlobalEnabledStatus(),
                ),
                s = !(0, tP.supportsOutOfProcess)(),
                l = (0, g.yK)([m.Ay], () => m.Ay.getGamesSeen(!0)).filter((e) => !(0, A.n1)(e)),
                r = (0, tr.A)(l.map((e) => e.id));
            function a(e) {
                let t = !e && i;
                tA.A.setEnabled(n, e);
                let s = m.Ay.getCurrentGameForAnalytics()?.id ?? null;
                (0, tp.Q3)(e, tp.OverlayToggledClientSettingType.OOP, s),
                    t && tb(tp.OverlayToggledClientSettingType.OOP, s);
            }
            function o(e, t, i) {
                let { enabledLegacy: n } = i;
                tm.Ay.toggleOverlay(t, e, n);
            }
            let u = S.useMemo(
                () => (tF.O ? (s ? j.intl.string(j.t.C7bLTQ) : j.intl.string(j.t.ndgADE)) : j.intl.string(j.t.m7X4az)),
                [s],
            );
            return 0 === l.length
                ? (0, E.jsx)(ti, {
                      title: j.intl.string(j.t["7BlVIs"]),
                      description: u,
                      "aria-label": j.intl.string(j.t["7BlVIs"]),
                      className: te.dA,
                      action: (0, E.jsxs)(E.Fragment, {
                          children: [
                              (0, E.jsx)(J.d, { checked: i, disabled: s, onChange: (e) => a(e) }),
                              tF.O && (0, E.jsx)("div", { className: te.Kz }),
                          ],
                      }),
                  })
                : (0, E.jsxs)(tV, {
                      onExpand: t,
                      className: e ? te.tx : void 0,
                      title: j.intl.string(j.t["7BlVIs"]),
                      description: u,
                      "aria-label": j.intl.string(j.t["7BlVIs"]),
                      action: (0, E.jsx)(en.D, {
                          onClick: (e) => tt(e),
                          children: (0, E.jsx)(J.d, { checked: i, disabled: s, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, E.jsx)("div", {
                              className: te.SC,
                              children: (0, E.jsx)(es.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: j.intl.string(j.t.FzoWRo),
                              }),
                          }),
                          (0, E.jsx)(tw.Ip, {
                              className: te.XG,
                              children: l.map((e, t) =>
                                  (0, E.jsx)(
                                      tz,
                                      {
                                          rawGame: e,
                                          clientSettingType: tp.OverlayToggledClientSettingType.OOP_GAME,
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
    tH = (0, a.zZ)(u.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => j.intl.string(j.t["/dp6yY"]),
        buildLayout: () => [tk, tX, tY, tn],
    }),
    tK = (0, a.zD)(u.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, g.bG)([eW.default], () => !eW.default.disableClickableRegions),
        setValue: (e) => {
            tA.A.setDisableClickableRegions(!e);
        },
        useTitle: () => j.intl.string(j.t["+eFXxq"]),
        useSubtitle: () => j.intl.string(j.t.kivMAp),
    });
var tW = i(284009),
    tZ = i.n(tW),
    tq = i(97260),
    tQ = i(635242);
let tJ = (0, a.E2)(u.X.OVERLAY_KEYBIND_SETTING, {
    Component: function () {
        let e = (0, g.bG)([eH.Ay], () => eH.Ay.getOverlayKeybind()),
            t = !(0, tP.supportsLegacy)(),
            i = !(0, tP.supportsOutOfProcess)(),
            [n, s] = (0, g.yK)([m.Ay], () => [m.Ay.canShowAdminWarning, m.Ay.getVisibleGame()], []),
            l = (0, tj.NP)(),
            r = null != s && s.elevated && n && !l,
            a = !(0, eH.DV)(e?.shortcut ?? []);
        return (0, E.jsx)("div", {
            className: te.hc,
            children: (0, E.jsxs)("div", {
                className: te.eH,
                children: [
                    (0, E.jsxs)("div", {
                        className: te.Bu,
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
                                    className: te.y7,
                                    children: j.intl.string(j.t.NsowVa),
                                }),
                            a &&
                                (0, E.jsx)(es.E, {
                                    variant: "text-xs/normal",
                                    color: "text-feedback-warning",
                                    className: te.y7,
                                    children: j.intl.string(j.t["UNoTw/"]),
                                }),
                        ],
                    }),
                    (0, E.jsx)("div", {
                        className: te.IH,
                        children: (0, E.jsx)(tQ.A, {
                            disabled: t && i,
                            defaultValue: null != e ? e.shortcut : [],
                            onChange: function (t) {
                                tZ()(null != e, "Keybind should never be undefined"),
                                    tq.A.setKeybind({ ...e, shortcut: t });
                            },
                        }),
                    }),
                ],
            }),
        });
    },
    useSearchTerms: () => [j.intl.string(j.t.VsAZcC)],
});
var t$ = i(515183),
    t0 = i(682763);
let t1 = (0, a.zD)(u.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
        usePredicate: () => {
            let { runningGameApplication: e } = tu();
            return e?.id != null;
        },
        useDisabled: () => {
            let { runningGame: e } = tu();
            return null != e && (0, t$.qJ)(e.pid);
        },
        useValue: () => {
            let { runningGame: e, runningGameApplication: t } = tu(),
                i = t?.id,
                n = (0, g.bG)([eY.A], () => eY.A.isLimitedInteractionOverrideEnabled(i)),
                s = null != e && (0, t$.qJ)(e.pid);
            return n || s;
        },
        setValue: (e) => {
            let t,
                i,
                n,
                s,
                { runningGameApplication: l } =
                    ((t = ta.A.getStreamerActiveStreamMetadata()),
                    (s = to(
                        t,
                        (n =
                            null != (i = m.Ay.getVisibleGame()) ? m.Ay.getGameOrTransformedSubgameForPID(i.pid) : null),
                    )),
                    { runningGame: n ?? void 0, runningGameApplication: x.A.getApplication(s) ?? void 0 });
            null != l && (0, t0.x8)(l.id, e);
        },
        useTitle: () => j.intl.string(j.t.wgVQND),
        useSubtitle: () => j.intl.string(j.t["5SsyF5"]),
    }),
    t2 = (0, a.zZ)(u.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [tJ, t1, tK] });
var t3 = i(93465);
let t5 = [
    {
        title: j.t.eVE4LX,
        description: j.t["72WNqk"],
        disabledSetting: t3.M.TEXT_CHAT,
        key: u.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: j.t.oifnSh,
        description: j.t.bgU5r0,
        disabledSetting: t3.M.WELCOME_GENERAL,
        key: u.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: j.t.hqsZJW,
        description: j.t.kHjdqc,
        disabledSetting: t3.M.GO_LIVE_NUDGE,
        key: u.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: j.t.sop3rn,
        description: j.t.pjgffc,
        disabledSetting: t3.M.GAME_ACTIVITY,
        key: u.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: j.t["2QVhbb"],
        description: j.t.wQ4ilB,
        disabledSetting: t3.M.NOW_PLAYING,
        key: u.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: j.t.giM9fA,
        description: j.t.EhAfWj,
        disabledSetting: t3.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: u.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, ez.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, g.bG)([eY.A], () => eY.A.isNotificationDisabledBySetting(t3.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function t6(e) {
    return (0, a.zD)(e.key, {
        useTitle: () => j.intl.string(e.title),
        useSubtitle: () => j.intl.string(e.description),
        useValue: () => !(0, g.bG)([eY.A], () => eY.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            tA.A.setNotificationDisabledSetting(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let t4 = (0, a.FW)(u.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => t5.map(t6),
    }),
    t8 = (0, a.zZ)(u.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.xOE5bA),
        buildLayout: () => [t4],
    }),
    t7 = (0, a.Hn)(u.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
        useTitle: () => j.intl.string(j.t.dnvZSg),
        useValue: () => (0, g.bG)([eW.default], () => eW.default.getAvatarSizeMode()),
        setValue: (e) => {
            tA.A.setAvatarSizeMode(e);
        },
        useOptions: () => [
            { id: "large", label: j.intl.string(j.t.YcOxtr), value: U.OSZ.LARGE },
            { id: "small", label: j.intl.string(j.t.BKIKqx), value: U.OSZ.SMALL },
        ],
    }),
    t9 = (0, a.Hn)(u.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => j.intl.string(j.t.J0dpcB),
        useValue: () => (0, g.bG)([eW.default], () => eW.default.getDisplayNameMode()),
        setValue: (e) => {
            tA.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: j.intl.string(j.t.nBmDrT), value: U.pwA.ALWAYS },
            { id: "speaking", label: j.intl.string(j.t["2OvIZY"]), value: U.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: j.intl.string(j.t.ekjlPL), value: U.pwA.NEVER },
        ],
    }),
    ie = (0, a.Hn)(u.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => j.intl.string(j.t.swsWWC),
        useValue: () => (0, g.bG)([eW.default], () => eW.default.getDisplayUserMode()),
        setValue: (e) => {
            tA.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: j.intl.string(j.t.nBmDrT), value: U.f5z.ALWAYS },
            { id: "speaking", label: j.intl.string(j.t["2OvIZY"]), value: U.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var it = i(391973),
    ii = i(489277),
    is = i(897720),
    il = i(38502);
function ir() {
    let e = ii.A.getWidgetByType(U.uss.VOICE_V3);
    if (null == e) return null;
    let t = il.A.getWidget(e.id);
    return null != t && (0, is.ZO)(t) ? t : null;
}
i(392164);
let ia = (0, a.sN)(u.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => j.intl.string(j.t["X/Uyzc"]),
    minValue: 0,
    maxValue: 25,
    markers: [0, 5, 10, 15, 20, 25],
    onMarkerRender: (e) => (e < 1 ? j.intl.string(j.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = ir();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < 1 ? j.intl.string(j.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = ir();
        null != t &&
            (e < 1
                ? (0, it.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, it.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
var io = i(43990),
    iu = i(450740),
    id = i(968898),
    ic = i(95701),
    ig = i(889227),
    im = i(288737),
    iA = i(287809);
function ih(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new im.A({
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
        user: new ig.A({ id: s, username: e }),
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
let iE = (0, a.E2)(u.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
        Component: function () {
            let e,
                t = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()),
                {
                    avatarSizeMode: i,
                    displayNameMode: n,
                    displayUserMode: s,
                } = (0, g.cf)([eW.default], () => ({
                    avatarSizeMode: eW.default.getAvatarSizeMode(),
                    displayNameMode: eW.default.getDisplayNameMode(),
                    displayUserMode: eW.default.getDisplayUserMode(),
                })),
                [l] = S.useState(() => [
                    ih(j.intl.string(j.t.C0ZDvo), !0, !1),
                    ih(j.intl.string(j.t.iOtj8E), !1, !1, !0),
                    ih(j.intl.string(j.t["0oqNgL"]), !1, !0),
                ]),
                r = (0, g.bG)([ii.A, il.A], () => {
                    let e = ii.A.getWidgetByType(U.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = il.A.getWidget(e.id);
                    return null != t && (0, is.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = ih(t.username)).user = t), e) : null, ...l].filter(N.Vq),
                u = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                d = (0, E.jsx)(io.N, {
                    theme: U.NJ8.MIDNIGHT,
                    children: (e) =>
                        (0, E.jsxs)("div", {
                            className: e7()(te.Y5, e),
                            children: [
                                (0, E.jsx)("div", {
                                    className: te.kJ,
                                    children: (0, E.jsx)(iu.DH, {
                                        id: "voice-widget",
                                        title: j.intl.string(j.t.KNJ6Vq),
                                        channel: (0, ic.createChannelRecord)({
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
                                    className: te.R$,
                                    children: [
                                        (0, E.jsx)(id.Pl, { children: j.intl.string(j.t.KNJ6Vq) }),
                                        (0, E.jsx)(id.CS, {}),
                                        (0, E.jsx)(id.O0, { id: r?.id ?? "voice-widget", pinned: r?.pinned ?? !1 }),
                                    ],
                                }),
                            ],
                        }),
                });
            return (0, E.jsx)("div", { className: te.F9, children: d });
        },
        useSearchTerms: () => [],
    }),
    iS = (0, a.zZ)(u.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => j.intl.string(j.t.r1TZfh),
        buildLayout: () => [iE, t7, t9, ie, ia],
    });
var iT = i(49999),
    ix = i(102937);
function ip() {
    let [e, t] = (0, eB.kn)([eF.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
    return ((0, eM.Ay)(() => () => {
        t(iT.i.AUTO_DISMISS);
    }),
    e !== eF.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, E.jsxs)(E.Fragment, {
              children: [
                  (0, E.jsxs)("div", {
                      className: ix.xC,
                      children: [
                          (0, E.jsx)("div", {
                              children: (0, E.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/10b8ab47f3371360233219f4b20fa86155553ddb810ceb8688654738bf7e15d0.png",
                                  alt: j.intl.string(j.t.mdXZh1),
                                  className: ix.tl,
                              }),
                          }),
                          (0, E.jsx)("div", {
                              children: (0, E.jsxs)("div", {
                                  className: ix.vJ,
                                  children: [
                                      (0, E.jsx)(eV.D, {
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
                                  className: ix.lh,
                              }),
                          }),
                          (0, E.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: ix.VV,
                              children: (0, E.jsx)(ek.$, {
                                  variant: "primary",
                                  text: j.intl.string(j.t.Q26diF),
                                  onClick: () => void t(iT.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, E.jsx)(ew.c, { className: ix.yF }),
              ],
          });
}
function iN() {
    let e = (0, g.bG)([eX.A], () => eX.A.enabled),
        t = (0, ez.Mn)("OverlayStreamerModeNotice");
    return e && t
        ? (0, E.jsxs)(E.Fragment, {
              children: [
                  (0, E.jsx)(q.w, {
                      type: "warning",
                      children: j.intl.format(j.t.fuEX5B, {
                          onClick: function () {
                              return (0, eq.openUserSettings)(u.X.STREAMER_MODE_CATEGORY);
                          },
                      }),
                  }),
                  (0, E.jsx)(ew.c, { className: ix.yF }),
              ],
          })
        : null;
}
let i_ = (0, a.t_)(u.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                e3(),
                eH.Ay.addChangeListener(e3),
                eY.A.addChangeListener(e3),
                eW.default.addChangeListener(e3),
                eK.default.addChangeListener(e3),
                eZ.isPlatformEmbedded && (0, _.a2)(),
                () => {
                    eH.Ay.removeChangeListener(e3),
                        eY.A.removeChangeListener(e3),
                        eW.default.removeChangeListener(e3),
                        eK.default.removeChangeListener(e3),
                        eZ.isPlatformEmbedded && (0, _.e0)();
                }
            );
        },
        useTitle: () => j.intl.string(j.t["9cb1Uz"]),
        decoration: {
            type: h.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, E.jsxs)(E.Fragment, { children: [(0, E.jsx)(ip, {}), (0, E.jsx)(iN, {})] });
            },
        },
        buildLayout: () => [tH, t2, iS, t8],
    }),
    iI = (0, a.i4)(u.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["9cb1Uz"]),
        icon: eU.l,
        usePredicate: eQ.b_,
        buildLayout: () => [i_],
    });
var iC = i(687966);
let ib = (0, a.AK)(u.X.REGISTERED_GAMES_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.OYYY6q),
        destinationKey: u.X.ACTIVITY_PRIVACY_PANEL,
    }),
    iv = (0, a.gN)(u.X.REGISTERED_GAMES_RELATED_SETTINGS, {
        usePredicate: () => (0, o.SV)("RegisteredGamesRelatedSettings"),
        buildLayout: () => [ib],
    });
var iy = i(396478),
    ij = i(270003),
    iO = i(227309),
    iR = i(363195),
    iL = i(1215),
    iD = i(39623),
    iP = i(952270),
    iG = i(138134),
    iM = i(414079),
    iU = i(29160),
    iV = i(650583),
    ik = i(18293),
    iw = i(582835);
let iF = (0, eZ.isWindows)();
function iB(e) {
    let { rawGame: t, nowPlaying: n = !1, isOverride: s, subgames: l, isSubgame: r = !1, parentGame: a } = e;
    (0, tT.I)(t.id);
    let o = (0, g.cf)([m.Ay, tL.A, tD.A, tS.A], () => (0, m.xU)(t, m.Ay, tL.A, tD.A, tS.A)),
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
        N = e7()(iw.tR, {
            [ik.LO]: !n,
            [ik.Rw]: n,
            [ik.FB]: null != o && n,
            [ik.xL]: r,
            [ik.fG]: null != l && l.length > 0,
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
                                      tm.Ay.toggleDetection(o), t.onClose();
                                  },
                                  variant: "primary",
                              },
                          ],
                      });
              })
            : tm.Ay.toggleDetection(o);
    }
    let I = null != c && (0, m.Es)(o) === (0, m.Es)(c),
        C = (null != a && a.id === c?.id) || I || (null != l && l.some((e) => e.id === c?.id));
    return (0, E.jsxs)(E.Fragment, {
        children: [
            (0, E.jsxs)("div", {
                className: N,
                children: [
                    (0, E.jsxs)("div", {
                        className: e7()(ik.$K, iw.Vd),
                        children: [
                            o.verified && !s
                                ? (0, E.jsxs)("div", {
                                      className: ik.HS,
                                      children: [
                                          (0, E.jsx)("div", { className: ik.mO, children: x }),
                                          (0, E.jsx)(td.m, {
                                              text: j.intl.string(j.t["4PJP5p"]),
                                              children: (0, E.jsx)(tx.A, {
                                                  className: ik.qf,
                                                  size: 18,
                                                  color: er.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, E.jsx)(tc.U, {
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
                                      className: e7()(ik.mO, ik.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: p,
                                      onBlur: function () {
                                          o.name !== p && tm.Ay.editName(o, p);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === iV.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
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
                                        className: ik.GN,
                                        children: (0, E.jsx)(iU.A, {
                                            hoverText:
                                                null != s && "" !== s
                                                    ? ((t = s.replace(/^file:\/\//i, "")),
                                                      (0, eZ.isWindows)() && (t = t.toUpperCase()),
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
                              className: e7()(iw.tR, iw.oA, iw.LT, ik.E3),
                              children: (0, E.jsx)(td.m, {
                                  text: j.intl.string(j.t["y0B+lo"]),
                                  children: (0, E.jsx)(en.D, {
                                      "aria-label": j.intl.string(j.t["y0B+lo"]),
                                      className: ik.ym,
                                      onClick: function () {
                                          if (h) return;
                                          let e = null != o.id ? tL.A.getDetectableGame(o.id) : null;
                                          G.default.track(U.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
                                              application_id: e?.id,
                                              game_name: (0, A.n1)(o) ? o.gameName : o.name,
                                          }),
                                              T(!0),
                                              (0, K.openModalLazy)(async () => {
                                                  let { default: t } = await Promise.all([
                                                      i.e("21072"),
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
                                      children: (0, E.jsx)(iG.i, {
                                          size: "md",
                                          color: "currentColor",
                                          className: ik.Lj,
                                          colorClass: ik.GS,
                                      }),
                                  }),
                              }),
                          }),
                    (function () {
                        let { detectable: e } = o,
                            t =
                                e && u
                                    ? (0, E.jsx)(iD.b, {
                                          size: "md",
                                          color: "currentColor",
                                          className: ik.Lj,
                                          colorClass: ik.GS,
                                      })
                                    : (0, E.jsx)(iP.G, {
                                          size: "md",
                                          color: "currentColor",
                                          className: u ? ik.$V : ik.zN,
                                          colorClass: ik.GS,
                                      });
                        return (0, E.jsx)("div", {
                            className: e7()(iw.tR, iw.oA, iw.LT, ik.E3),
                            children: (0, E.jsx)(td.m, {
                                text: j.intl.string(j.t.QmitzM),
                                children: u
                                    ? (0, E.jsx)(en.D, {
                                          "aria-label": j.intl.string(j.t.QmitzM),
                                          className: ik.ym,
                                          onClick: _,
                                          children: t,
                                      })
                                    : t,
                            }),
                        });
                    })(),
                    (function () {
                        if (!iF || null != a) return null;
                        let { overlay: e, overlayWarn: t } = o,
                            i = e
                                ? (0, E.jsx)(tg.k, {
                                      size: "md",
                                      color: "currentColor",
                                      className: ik.Lj,
                                      colorClass: ik.GS,
                                  })
                                : (0, E.jsx)(iL.n, {
                                      size: "md",
                                      color: "currentColor",
                                      className: ik.$V,
                                      colorClass: ik.GS,
                                  }),
                            n = t
                                ? (0, E.jsx)(td.m, {
                                      text: j.intl.string(j.t.Vfw2L5),
                                      children: (0, E.jsx)("i", { className: ik.kb }),
                                  })
                                : null;
                        return (0, E.jsxs)("div", {
                            className: e7()(iw.tR, iw.oA, iw.LT, ik.E3),
                            children: [
                                n,
                                (0, E.jsx)(td.m, {
                                    text: j.intl.string(j.t["1+O+Tu"]),
                                    children: (0, E.jsx)(en.D, {
                                        "aria-label": j.intl.string(j.t["1+O+Tu"]),
                                        className: ik.ym,
                                        onClick: () => {
                                            var t;
                                            return (t = !e), void tm.Ay.toggleOverlay(o, t, t);
                                        },
                                        children: i,
                                    }),
                                }),
                            ],
                        });
                    })(),
                    (n && !s) || C
                        ? null
                        : (0, E.jsx)(iM.A, {
                              className: ik.LS,
                              onClick: function () {
                                  tm.Ay.deleteEntry(o),
                                      l?.forEach((e) => {
                                          tm.Ay.deleteEntry(e);
                                      });
                              },
                          }),
                ],
            }),
            null != l &&
                l.length > 0 &&
                !n &&
                (0, E.jsx)("div", {
                    className: ik.AQ,
                    children: l.map((e, t) =>
                        (0, E.jsxs)(
                            S.Fragment,
                            {
                                children: [
                                    (0, E.jsx)(iB, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== l.length - 1 && (0, E.jsx)("div", { className: ik.PQ }),
                                ],
                            },
                            (0, m.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
var iz = i(522826);
function iY() {
    let e = (0, g.bG)([iR.A], () => iR.A.theme);
    return (0, E.jsxs)(iy.pp, {
        theme: e,
        className: iz.eT,
        children: [
            (0, E.jsx)(iy.G8, { darkSrc: i(839628), lightSrc: i(446404), width: 430, height: 250 }),
            (0, E.jsx)(iy.SG, { children: j.intl.string(j.t["1yiJwn"]) }),
        ],
    });
}
function iX() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: i } = C();
    return 0 === e.length
        ? (0, E.jsx)(iY, {})
        : (0, E.jsx)(ij.n, {
              children: (0, E.jsx)("div", {
                  children: e.map((e) =>
                      (0, E.jsx)(
                          iB,
                          { rawGame: e, isOverride: i.has(e.exePath), subgames: e.id === iO.a7 ? t : void 0 },
                          (0, m.Es)(e),
                      ),
                  ),
              }),
          });
}
let iH = (0, a.E2)(u.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, E.jsx)(iX, {}),
});
var iK = i(424994);
let iW = (0, a.zZ)(u.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [iH, iv],
    useTitle: () => j.intl.string(j.t.jCOdvx),
    useSubtitle: () => j.intl.format(j.t.KPA3m9, { igdbLink: iK.s8 }),
});
var iZ = i(305866),
    iq = i(783878),
    iQ = i(930863),
    iJ = i(997213);
function i$(e) {
    let { onClose: t } = e,
        i = (0, g.bG)([m.Ay], () => m.Ay.getCandidateGames()),
        [n, s] = S.useState(null),
        l = i.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, E.jsxs)(iZ.l, {
        className: e7()(iQ.H, iJ.Y_),
        "aria-label": j.intl.string(j.t.GTCx0p),
        children: [
            (0, E.jsx)(iq.Z, {
                selectionMode: "single",
                placeholder: j.intl.string(j.t.XqMe3N),
                value: n,
                options: l,
                onSelectionChange: function (e) {
                    s(e);
                },
            }),
            (0, E.jsx)(ew.c, { className: e7()(iz.Ot, iz.QB) }),
            (0, E.jsxs)("div", {
                className: e7()(iQ.o, iw.xM),
                children: [
                    (0, E.jsx)(ea.Q, { variant: "secondary", text: j.intl.string(j.t["ETE/oC"]), onClick: t }),
                    (0, E.jsx)(ek.$, {
                        variant: "primary",
                        text: j.intl.string(j.t.GTCx0p),
                        disabled: null == n,
                        onClick: function () {
                            null != n && (tm.Ay.addGame(n.pid, n.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
var i0 = i(347990);
let i1 = (0, a.E2)(u.X.REGISTERED_GAMES_ADD_GAME_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.GTCx0p)],
    Component: function () {
        let e = S.useRef(null);
        return (0, E.jsxs)("div", {
            className: e7()(i0.a, iz.Gf),
            children: [
                (0, E.jsx)("span", { children: j.intl.string(j.t.xwhoqM) }),
                (0, E.jsx)(ee.Y, {
                    targetElementRef: e,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, E.jsx)(i$, { onClose: t });
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
function i2() {
    return (0, E.jsx)("div", {
        className: e7()(iw.tR, ik.eS, ik.Rw),
        children: (0, E.jsxs)("div", {
            className: e7()(ik.$K, iw.Vd),
            children: [
                (0, E.jsx)("div", { className: ik.mO, children: j.intl.string(j.t.H68X9x) }),
                (0, E.jsx)("div", { className: ik.GN, children: j.intl.string(j.t.T5Ilmw) }),
            ],
        }),
    });
}
let i3 = (0, a.E2)(u.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["MY9/Oe"])],
        Component: function () {
            let { robloxSubgameHistory: e, overrideExePaths: t } = C(),
                i = (0, g.bG)([m.Ay], () => m.Ay.getVisibleGame());
            return null != i
                ? (0, E.jsx)(
                      iB,
                      {
                          rawGame: i,
                          isOverride: t.has(i.exePath),
                          nowPlaying: !0,
                          subgames: i.id === iO.a7 ? e : void 0,
                      },
                      (0, m.Es)(i),
                  )
                : (0, E.jsx)(i2, {});
        },
    }),
    i5 = (0, a.zZ)(u.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => j.intl.string(j.t["MY9/Oe"]),
        buildLayout: () => [i3, i1],
    }),
    i6 = (0, a.t_)(u.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => j.intl.string(j.t.AVDyEj),
        buildLayout: () => [i5, iW],
    }),
    i4 = (0, a.i4)(u.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.AVDyEj),
        icon: iC._,
        usePredicate: eQ.Pi,
        buildLayout: () => [i6],
    }),
    i8 = (0, a.WI)(u.X.ACTIVITY_SECTION, {
        useTitle: () => j.intl.string(j.t.nVPpLM),
        buildLayout: () => [eG, i4, iI],
    });
var i7 = i(550640),
    i9 = i(346055),
    ne = i(97808),
    nt = i(778712),
    ni = i(775602),
    nn = i(320095),
    ns = i(963852),
    nl = i(763754),
    nr = i(20851),
    na = i(486020),
    no = i(827053);
let nu = new ic.nA({ id: "1337", guild_id: "1337", type: U.rbe.GUILD_TEXT, name: "preview" }),
    nd = [
        { status: U.clD.IDLE, discriminator: "2" },
        { status: U.clD.DND, discriminator: "3" },
        { status: U.clD.ONLINE, mobile: !0, discriminator: "4" },
    ];
function nc(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (0, nn.rh)({ ...(0, ns.Ay)({ channelId: nu.id, content: e }), state: U.cmJ.SENT, reactions: t });
}
var ng = i(856488);
let nm = (0, a.zD)(u.X.ENABLE_LEGACY_CHAT_INPUT, {
        useTitle: () => j.intl.string(j.t.TZ2hZH),
        useSubtitle: () => j.intl.string(j.t.Q7wgHc),
        useValue: () => L.D_.useSetting(),
        setValue: (e) => L.D_.updateSetting(e),
    }),
    nA = (0, a.zD)(u.X.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS, {
        useTitle: () => j.intl.string(j.t.XYvMIX),
        useSubtitle: () => j.intl.string(j.t.T0rbtM),
        useValue: L._z.useSetting,
        setValue: L._z.updateSetting,
    });
var nh = i(100767),
    nE = i(106236),
    nS = i(113494),
    nT = i(782134),
    nx = i(54570),
    np = i(8880),
    nf = i(75804);
let nN = e$().debounce((e) => {
    (0, nx.zU)(e);
}, 250);
function n_() {
    let [e, t] = S.useState(!1);
    return (
        (0, eM.l0)(() => (0, nx.pr)()),
        (0, E.jsx)(ek.$, {
            text: j.intl.string(j.t.SKNnqq),
            icon: e ? nS.E : nT.u,
            size: "sm",
            onClick: function () {
                if (e) {
                    (0, nx.pr)(), t(!1);
                    return;
                }
                (0, nx.AU)(
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
let nI = (0, a.E2)(u.X.TTS_PLAYBACK_RATE, {
        useSearchTerms: () => [j.intl.string(j.t.lsW5Ev)],
        Component: function () {
            let e = (0, g.bG)([np.A], () => np.A.speechRate);
            return (0, E.jsxs)(Q.B, {
                gap: 16,
                children: [
                    (0, E.jsx)(nE.A, {
                        label: j.intl.string(j.t.lsW5Ev),
                        description: j.intl.string(j.t.Ci4wMS),
                        markers: nf.P,
                        initialValue: e,
                        defaultValue: 1,
                        stickToMarkers: !0,
                        onValueChange: nN,
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
                    (0, E.jsx)(n_, {}),
                ],
            });
        },
        usePredicate: () => nh.$j,
    }),
    nC = (0, a.zZ)(u.X.AUDIO_AND_SCREEN_READER_CATEGORY, {
        useTitle: () => j.intl.string(j.t.XVR0Rb),
        buildLayout: () => [nI, nA, nm],
    }),
    nb = (0, a.AK)(u.X.ACCESSIBILITY_TO_DISPLAY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.aTfeGK),
        destinationKey: u.X.APPEARANCE_PANEL,
    }),
    nv = (0, a.gN)(u.X.COLOR_AND_CONTRAST_RELATED_SETTINGS, { buildLayout: () => [nb] });
var ny = i(955572);
let nj = (0, a.zD)(u.X.DESATURATE_CUSTOM_COLORS, {
    useTitle: () => j.intl.string(j.t.OCJg5f),
    useSubtitle: () => j.intl.string(j.t.HEO0s3),
    useValue: () => (0, g.bG)([ni.Ay], () => ni.Ay.desaturateUserColors),
    setValue: () => (0, ny.YV)(),
});
var nO = i(652525);
let nR = (0, a.zD)(u.X.ENABLE_CUSTOM_CURSOR, {
        useTitle: () => j.intl.string(j.t["+Isihb"]),
        useSubtitle: () => j.intl.string(j.t.nNZ1Tz),
        useValue: () => (0, g.bG)([ni.Ay], () => ni.Ay.enableCustomCursor),
        setValue: (e) => (0, ny.ts)(e),
        usePredicate: () => (0, nO.t)("EnableCustomCursorSetting"),
    }),
    nL = (0, a.zD)(u.X.ENABLE_SWITCH_ICONS, {
        useTitle: () => j.intl.string(j.t["S3z+pV"]),
        useSubtitle: () => j.intl.string(j.t["3QuI9+"]),
        useValue: () => (0, g.bG)([ni.Ay], () => ni.Ay.isSwitchIconsEnabled),
        setValue: (e) => (0, ny.Gm)(e),
        hasIcon: !0,
    }),
    nD = (0, a.zD)(u.X.HIGH_CONTRAST_MODE, {
        useTitle: () => j.intl.string(j.t.aZlePv),
        useSubtitle: () => j.intl.string(j.t["v2qF8+"]),
        useValue: () => (0, g.bG)([ni.Ay], () => ni.Ay.isHighContrastModeEnabled),
        setValue: (e) => (0, ny.uh)(e ? ni._1.HIGH : ni._1.DEFAULT),
        getDismissibleBadges: () => [
            { badgeType: h.Xi.NEW, dismissibleContent: eF.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE },
        ],
    });
var nP = i(406360),
    nG = i(742023);
let nM = (0, a.Qx)(u.X.HIGH_DYNAMIC_RANGE, {
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
            return (0, nP.i)("HDRDynamicRangeSetting");
        },
        setValue: function (e) {
            (0, ny.FU)(e);
        },
        useValue: function () {
            return (0, g.bG)([nG.Ay], () => nG.Ay.hdrDynamicRange);
        },
        useSearchTerms: () => ["HDR", j.intl.string(j.t["O/Gjvn"])],
    }),
    nU = (0, a.Hn)(u.X.OFFICIAL_MESSAGE_STYLE, {
        useTitle: () => j.intl.string(j.t.nC2XBl),
        useSubtitle: () => j.intl.string(j.t.a3IPrX),
        useOptions: () => [
            { id: "default", label: j.intl.string(j.t.ERaS6f), value: "default" },
            { id: "no_text_color", label: j.intl.string(j.t.JKfipk), value: "no_text_color" },
            { id: "no_gradient", label: j.intl.string(j.t.O2vBoY), value: "no_gradient" },
            { id: "hidden", label: j.intl.string(j.t["+loyQl"]), value: "hidden" },
        ],
        useValue: () => (0, g.bG)([ni.Ay], () => ni.Ay.officialMessageStyle),
        setValue: (e) => (0, ny.w_)(e),
    }),
    nV = (0, a.Hn)(u.X.ROLE_STYLE, {
        useTitle: () => j.intl.string(j.t.uSOPWm),
        useSubtitle: () => j.intl.string(j.t.u7fFKS),
        useOptions: () => [
            { id: "username", label: j.intl.string(j.t.eDdMzJ), value: "username" },
            { id: "dot", label: j.intl.string(j.t.rdmJp0), value: "dot" },
            { id: "hidden", label: j.intl.string(j.t.Ji2EVJ), value: "hidden" },
        ],
        useValue: () => (0, g.bG)([ni.Ay], () => ni.Ay.roleStyle),
        setValue: (e) => (0, ny.IX)(e),
    });
(0, a.Qx)(u.X.ROLE_STYLE, {
    useTitle: () => j.intl.string(j.t.uSOPWm),
    useSubtitle: () => j.intl.string(j.t["86hjzQ"]),
    useOptions: () => [
        { name: j.intl.string(j.t.YEOEi6), value: "username" },
        { name: j.intl.string(j.t.mQaro3), value: "dot" },
        { name: j.intl.string(j.t.Ji2EVJ), value: "hidden" },
    ],
    useValue: () => (0, g.bG)([ni.Ay], () => ni.Ay.roleStyle),
    setValue: (e) => (0, ny.IX)(e),
});
let nk = (0, a.sN)(u.X.SATURATION, {
    useTitle: () => j.intl.string(j.t["5PWWCY"]),
    useSubtitle: () => j.intl.string(j.t.xf5S6P),
    markers: U.hH7.SATURATION_INCREMENTS,
    onMarkerRender: (e) => ((100 * e) % 2 == 0 ? `${100 * e}%` : void 0),
    stickToMarkers: !0,
    minValue: 0,
    maxValue: 1,
    getInitialValue: () => ni.Ay.saturation,
    asValueChanges: (e) => (0, ny.HU)(e),
});
var nw = i(839214),
    nF = i(502229);
let nB = (0, nw.D)(() => ({ syncEnabled: null, updateTimeout: null })),
    nz = (0, a.zD)(u.X.SYNC_FORCED_COLORS, {
        useTitle: () => j.intl.string(j.t.cguiec),
        useSubtitle: () => j.intl.format(j.t.GwEVE2, { learnMoreLink: ty.A.getArticleURL(U.MVz.FORCED_COLORS) }),
        useValue: () => {
            let e = (0, g.bG)([ni.Ay], () => ni.Ay.syncForcedColors);
            return (
                (0, tE.Ay)(() => {
                    nB.setState({ syncEnabled: ni.Ay.syncForcedColors });
                }),
                nB.useState((e) => e.syncEnabled) ?? e
            );
        },
        setValue: (e) => {
            let { updateTimeout: t } = nB.getState();
            if (null != t) {
                clearTimeout(t), nB.setState({ syncEnabled: e, updateTimeout: null });
                return;
            }
            if (e === ni.Ay.syncForcedColors) return void nB.setState({ syncEnabled: e });
            let i = setTimeout(() => {
                (0, ny.D3)(e), nB.setState({ updateTimeout: null });
            }, 150);
            nB.setState({ syncEnabled: e, updateTimeout: i });
        },
        usePredicate: () => (0, nF.D)(),
    }),
    nY = (0, a.zZ)(u.X.COLOR_AND_CONTRAST_CATEGORY, {
        useTitle: () => j.intl.string(j.t.JqvyiY),
        buildLayout: () => [nk, nj, nD, nR, nz, nM, nV, nU, nL, nv],
    });
var nX = i(397438),
    nH = i(355097);
function nK(e) {
    return (0, g.bG)([nX.A], () =>
        (function (e) {
            switch (e) {
                case nH._A.REDUCED_MOTION:
                    return j.intl.format(j.t["1dT9V4"], {});
                case nH._A.REDUCED_MOTION_STICKERS:
                    return j.intl.string(j.t["2ExvRu"]);
                default:
                    return;
            }
        })(nX.A.getAppliedOverrideReasonKey(e)),
    );
}
let nW = (0, a.zD)(u.X.ANIMATE_EMOJIS, {
        useTitle: () => j.intl.string(j.t.iIaOlc),
        useSubtitle: () => nK("animateEmoji"),
        useValue: () => L.Sf.useSetting(),
        setValue: (e) => L.Sf.updateSetting(e),
    }),
    nZ = (0, a.zD)(u.X.ANIMATE_GIFS, {
        useTitle: () => j.intl.string(j.t.wqsK7q),
        useSubtitle: () => nK("gifAutoPlay"),
        useValue: () => L.kt.useSetting(),
        setValue: (e) => L.kt.updateSetting(e),
    });
var nq = i(823894);
let nQ = (0, a.Qx)(u.X.ANIMATE_STICKERS, {
        useTitle: () => j.intl.string(j.t.sBHIh0),
        useSubtitle: () => nK("animateStickers"),
        useOptions: () => [
            { name: j.intl.string(j.t["Xp+X2U"]), value: nq.BJ.ALWAYS_ANIMATE },
            { name: j.intl.string(j.t.IlLT7e), desc: j.intl.string(j.t.bIW9Tl), value: nq.BJ.ANIMATE_ON_INTERACTION },
            { name: j.intl.string(j.t.IGu8x3), value: nq.BJ.NEVER_ANIMATE },
        ],
        useValue: () => L.S0.useSetting(),
        setValue: (e) => L.S0.updateSetting(e),
    }),
    nJ = (0, a.zD)(u.X.REDUCED_MOTION, {
        useTitle: () => j.intl.string(j.t.b3XBzg),
        useSubtitle: () => j.intl.format(j.t.XqvxJc, { helpdeskArticle: ty.A.getArticleURL(U.MVz.REDUCED_MOTION) }),
        useValue: () => (0, g.bG)([ni.Ay], () => ni.Ay.useReducedMotion),
        setValue: (e) => (0, ny.qz)(e ? "reduce" : "no-preference"),
    }),
    n$ = (0, a.zD)(u.X.SYNC_REDUCED_MOTION, {
        useTitle: () => j.intl.string(j.t.oL55A6),
        useValue: () => (0, g.bG)([ni.Ay], () => "auto" === ni.Ay.rawPrefersReducedMotion),
        setValue: (e) => (0, ny.qz)(e ? "auto" : ni.Ay.systemPrefersReducedMotion),
    }),
    n0 = (0, a.zZ)(u.X.MOTION_CATEGORY, {
        useTitle: () => j.intl.string(j.t.e3TR1b),
        buildLayout: () => [nJ, n$, nZ, nW, nQ],
    });
var n1 = i(688810),
    n2 = i(259065),
    n3 = i(864386);
let n5 = (0, a.zD)(u.X.DISPLAY_NAME_STYLES, {
    useTitle: () => j.intl.string(n3.default["2gFUEw"]),
    useSubtitle: () => {
        let { analyticsLocations: e } = (0, n1.Ay)();
        return j.intl.format(n3.default.aEax6P, {
            onClickOpenModal() {
                (0, n2.L)({ analyticsLocations: e });
            },
        });
    },
    useValue: () => (0, g.bG)([ni.Ay], () => ni.Ay.displayNameStylesEnabled),
    setValue: (e) => (0, ny.Dm)(e),
});
function n6(e) {
    return `${e.toFixed(0)}px`;
}
let n4 = (0, a.sN)(u.X.APPEARANCE_FONT_SCALING, {
        useTitle: () => j.intl.string(j.t.rT3Pq5),
        useSubtitle: () => j.intl.string(j.t.LXUhen),
        markers: U.hH7.FONT_SIZES,
        stickToMarkers: !0,
        minValue: U.hH7.FONT_SIZES["0"],
        maxValue: U.hH7.FONT_SIZES[U.hH7.FONT_SIZES.length - 1],
        useDefaultValue: () => U.hH7.FONT_SIZE_DEFAULT,
        getInitialValue: () => ni.Ay.fontSize,
        onValueRender: n6,
        onMarkerRender: n6,
        asValueChanges: (e) => (0, ny.XS)(e),
    }),
    n8 = (0, a.zD)(u.X.UNDERLINE_LINKS, {
        useTitle: () => j.intl.string(j.t.OLZFB8),
        useSubtitle: () => j.intl.string(j.t.DIX3ke),
        useValue: () => (0, g.bG)([ni.Ay], () => ni.Ay.alwaysShowLinkDecorations),
        setValue: (e) => (0, ny.kI)(e),
    }),
    n7 = (0, a.zZ)(u.X.TEXT_READABILITY_CATEGORY, {
        useTitle: () => j.intl.string(j.t["bxh/R7"]),
        buildLayout: () => [n4, n8, n5],
    }),
    n9 = (0, a.Qx)(u.X.APPEARANCE_UI_DENSITY, {
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
    se = "cozy",
    st = "compact",
    si = (0, a.Qx)(u.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
        useTitle: () => j.intl.string(j.t.nKRoPv),
        useSubtitle: () => j.intl.string(j.t.QntEEG),
        useSearchTerms: () => [j.intl.string(j.t.ZEoGMd)],
        useOptions: () => [
            { name: j.intl.string(j.t.Jqj4cZ), value: se },
            { name: j.intl.string(j.t["1JNcPS"]), value: st },
        ],
        useValue: () => (L.hH.useSetting() ? st : se),
        setValue: (e) => {
            L.hH.updateSetting(e === st), (0, ny.AC)();
        },
    });
var sn = i(381941);
function ss(e) {
    return `${e.toFixed(0)}px`;
}
let sl = (0, a.sN)(u.X.APPEARANCE_MESSAGE_GROUP_SPACING, {
    useTitle: () => j.intl.string(j.t.Q6lKkg),
    useSubtitle: () => j.intl.string(j.t.p7eUrb),
    markers: sn.qh,
    stickToMarkers: !0,
    minValue: sn.qh["0"],
    maxValue: sn.qh[sn.qh.length - 1],
    useDefaultValue: () => (L.hH.useSetting() ? sn.y5 : sn.ES),
    useExternalValue: () => (0, g.bG)([ni.Ay], () => ni.Ay.messageGroupSpacing),
    getInitialValue: () => ni.Ay.messageGroupSpacing,
    onValueRender: ss,
    onMarkerRender: ss,
    asValueChanges: (e) => {
        switch (e) {
            case 0:
            case 4:
            case 8:
            case 16:
            case 24:
                (0, ny.AC)(e);
        }
    },
});
var sr = i(775121);
let sa = (0, a.sN)(u.X.APPEARANCE_ZOOM, {
        usePredicate: () => eZ.isPlatformEmbedded,
        useTitle: () => j.intl.string(j.t.i19n5L),
        useSubtitle: () => j.intl.format(j.t["x9PK/3"], { modKey: sr.A.modKey }),
        markers: U.hH7.ZOOM_SCALES,
        stickToMarkers: !0,
        minValue: U.hH7.ZOOM_SCALES["0"],
        maxValue: U.hH7.ZOOM_SCALES[U.hH7.ZOOM_SCALES.length - 1],
        useDefaultValue: () => U.hH7.ZOOM_DEFAULT,
        getInitialValue: () => ni.Ay.zoom,
        useExternalValue: () => (0, g.bG)([ni.Ay], () => ni.Ay.zoom),
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        setValue: (e) => (0, ny.Qp)(e),
        useSearchTerms: () => [j.intl.string(j.t.ip0uSf)],
    }),
    so = (0, a.zZ)(u.X.VISUAL_DENSITY_CATEGORY, {
        useTitle: () => j.intl.string(j.t.VKYWk8),
        buildLayout: () => [n9, si, sl, sa],
    }),
    su = (0, a.t_)(u.X.ACCESSIBILITY_PANEL, {
        useTitle: () => j.intl.string(j.t.G0neg7),
        buildLayout: () => [n7, so, nY, n0, nC],
        decoration: {
            type: h.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                let e = L.hH.useSetting(),
                    t = L.jW.useSetting(),
                    i = S.useMemo(
                        () => [
                            nc(
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
                            nc(
                                j.intl.formatToPlainString(j.t["4rDfgM"], {
                                    link: "https://discord.com/accessibility",
                                }),
                            ),
                        ],
                        [t],
                    ),
                    n = (0, g.bG)([ni.Ay], () => ni.Ay.messageGroupSpacing);
                return (0, E.jsx)(i9.M, {
                    children: (0, E.jsxs)("section", {
                        "aria-label": j.intl.string(j.t.RC22qg),
                        children: [
                            (0, E.jsx)(eV.D, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                className: no.Vf,
                                children: j.intl.string(j.t.RC22qg),
                            }),
                            (0, E.jsxs)(tw.Ip, {
                                className: no.VH,
                                children: [
                                    (0, E.jsx)("ol", {
                                        className: no.DZ,
                                        style: { gap: n },
                                        "aria-label": j.intl.string(j.t.xfjsEV),
                                        children: i.map((t) =>
                                            (0, E.jsx)(
                                                "li",
                                                {
                                                    children: (0, E.jsx)(nr.A, {
                                                        message: t,
                                                        channel: nu,
                                                        compact: e,
                                                        author: { ...(0, nl.p_)(t), colorString: "#dd80f4" },
                                                    }),
                                                },
                                                t.id,
                                            ),
                                        ),
                                    }),
                                    (0, E.jsxs)("div", {
                                        className: no.Jb,
                                        children: [
                                            (0, E.jsx)("div", {
                                                className: no.HD,
                                                children: nd.map((e) => {
                                                    let { status: t, discriminator: i, mobile: n = !1 } = e;
                                                    return (0, E.jsx)(
                                                        ne.eu,
                                                        {
                                                            status: t,
                                                            isMobile: n,
                                                            size: nt._3.SIZE_32,
                                                            src: na.Ay.getDefaultAvatarURL(void 0, i),
                                                            "aria-label": j.intl.string(j.t.VKE5TK),
                                                        },
                                                        t,
                                                    );
                                                }),
                                            }),
                                            (0, E.jsx)(ek.$, {
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
    sd = (0, a.i4)(u.X.ACCESSIBILITY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.G0neg7),
        icon: i7.c,
        useMenu: ng.A,
        buildLayout: () => [su],
    });
var sc = i(650809),
    sg = i(562465),
    sm = i(228366),
    sA = i(74396),
    sh = i(269880),
    sE = i(55619),
    sS = i(812993);
let sT = (0, a.zD)(u.X.SHOW_GAME_LIBRARY, {
        usePredicate: () => (0, g.bG)([tD.A], () => tD.A.hasLibraryApplication()),
        useTitle: () => j.intl.string(j.t.fi3UQN),
        useSubtitle: () => j.intl.string(j.t["8mYp37"]),
        useValue: () => !L.l_.useSetting(),
        setValue: (e) => L.l_.updateSetting(!e),
    }),
    sx = (0, a.zZ)(u.X.APPEARANCE_ADVANCED_CATEGORY, {
        useTitle: () => j.intl.string(j.t["8/udY0"]),
        buildLayout: () => [sT],
    });
var sp = i(199966),
    sf = i(963935);
function sN(e) {
    let { title: t } = e;
    return t;
}
function s_(e) {
    let { useTitle: t, settingKey: i, formatter: n, index: s } = e,
        l = t();
    return "string" == typeof l ? n({ title: l, index: s, key: i }) : l;
}
function sI(e) {
    let { setting: t, formatter: i, index: n } = e;
    return () => (0, E.jsx)(s_, { useTitle: t.useTitle, settingKey: t.key, formatter: i, index: n }, t.key);
}
function sC(e) {
    return e.type === sf.Z6.LIST;
}
function sb(e, t) {
    let { limit: i = 2, formatter: n = sN } = t ?? {};
    tZ()(i > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { visibleDirectory: s, accessibleDirectory: l } = (0, sp._)(),
        r = s.get(e) ?? l.get(e);
    tZ()(
        null != r && (r.type === sf.Z6.ACCORDION || sC(r)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let a = sC(r) ? (r.collapseAfter ?? 0) : 0,
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
                return j.intl.format(j.t["3H9tCW"], { settingOneHook: sI({ setting: t[0], formatter: n, index: 0 }) });
            else if (2 === t.length)
                return j.intl.format(j.t.MWryo6, {
                    settingOneHook: sI({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: sI({ setting: t[1], formatter: n, index: 1 }),
                });
            else
                return j.intl.format(j.t.a00b5G, {
                    settingOneHook: sI({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: sI({ setting: t[1], formatter: n, index: 1 }),
                    settingThreeHook: sI({ setting: t[2], formatter: n, index: 2 }),
                });
        return 1 === s
            ? j.intl.format(j.t.O8vNbS, { settingOneHook: sI({ setting: t[0], formatter: n, index: 0 }) })
            : 2 === s
              ? j.intl.format(j.t["acXG/W"], {
                    settingOneHook: sI({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: sI({ setting: t[1], formatter: n, index: 1 }),
                })
              : j.intl.format(j.t["5+ldWc"], {
                    settingOneHook: sI({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: sI({ setting: t[1], formatter: n, index: 1 }),
                    settingThreeHook: sI({ setting: t[2], formatter: n, index: 2 }),
                });
    }, [i, a, o, n]);
}
var sv = i(951260);
let sy = (0, a.zD)(u.X.ENABLE_APPS_BUTTON, {
        useTitle: () => j.intl.string(j.t.ZTH4j4),
        useValue: () => (0, g.bG)([ni.Ay], () => ni.Ay.isAppsButtonEnabled),
        setValue: (e) => (0, ny.n8)({ appsButtonEnabled: e }),
    }),
    sj = {
        useTitle: () => j.intl.string(j.t["I/5LyL"]),
        useValue: () => (0, g.bG)([ni.Ay], () => ni.Ay.isSubmitButtonEnabled),
        setValue: () => (0, ny.Xt)(),
    },
    sO = (0, a.zD)(u.X.ENABLE_SEND_BUTTON, sj),
    sR = (0, a.zD)(u.X.ENABLE_SEND_BUTTON_OUTSIDE_EXPERIMENT, {
        ...sj,
        usePredicate: () => !(0, sv.n)("EnableSendButtonOutsideExperiment"),
    }),
    sL = (0, a.zD)(u.X.CONDENSE_PICKER_WHEN_NARROW, {
        useTitle: () => j.intl.string(j.t.WggFoO),
        useSubtitle: () => j.intl.string(j.t.XpErGj),
        useValue: () => (0, g.bG)([ni.Ay], () => ni.Ay.condensePickerWhenNarrow),
        setValue: (e) => (0, ny.n8)({ condensePickerWhenNarrow: e }),
        usePredicate: () => (0, g.bG)([ni.Ay], () => ni.Ay.expressionPickerFormat === ni.IG.FLEXIBLE),
    }),
    sD = (0, a.zD)(u.X.ENABLE_EMOJI_BUTTON, {
        useTitle: () => j.intl.string(j.t.YErWkD),
        useValue: () => (0, g.bG)([ni.Ay], () => ni.Ay.isEmojiButtonEnabled),
        setValue: (e) => (0, ny.n8)({ emojiButtonEnabled: e }),
        usePredicate: () => (0, g.bG)([ni.Ay], () => ni.Ay.expressionPickerFormat === ni.IG.FLEXIBLE),
    }),
    sP = (0, a.zD)(u.X.ENABLE_GIF_BUTTON, {
        useTitle: () => j.intl.string(j.t.k7oNEz),
        useValue: () => (0, g.bG)([ni.Ay], () => ni.Ay.isGifButtonEnabled),
        setValue: (e) => (0, ny.n8)({ gifButtonEnabled: e }),
        usePredicate: () => (0, g.bG)([ni.Ay], () => ni.Ay.expressionPickerFormat === ni.IG.FLEXIBLE),
    }),
    sG = (0, a.zD)(u.X.ENABLE_STICKER_BUTTON, {
        useTitle: () => j.intl.string(j.t.Ar0krj),
        useValue: () => (0, g.bG)([ni.Ay], () => ni.Ay.isStickerButtonEnabled),
        setValue: (e) => (0, ny.n8)({ stickerButtonEnabled: e }),
        usePredicate: () => (0, g.bG)([ni.Ay], () => ni.Ay.expressionPickerFormat === ni.IG.FLEXIBLE),
    }),
    sM = (0, a.Qx)(u.X.EXPRESSION_PICKER_FORMAT, {
        useTitle: () => j.intl.string(j.t.AxRAWt),
        useValue: () => (0, g.bG)([ni.Ay], () => ni.Ay.expressionPickerFormat),
        setValue: (e) => (0, ny.n8)({ expressionPickerFormat: e }),
        useOptions: function () {
            return [
                { name: j.intl.string(j.t.k86Soy), desc: j.intl.string(j.t.bSGTTZ), value: ni.IG.FLEXIBLE },
                { name: j.intl.string(j.t.bjwSOn), desc: j.intl.string(j.t.We36HX), value: ni.IG.CONDENSED },
                { name: j.intl.string(j.t.FDIKss), desc: j.intl.string(j.t["rclZL/"]), value: ni.IG.HIDDEN },
            ];
        },
    }),
    sU = (0, a.FW)(u.X.EXPRESSION_PICKER_FIELD_SET, {
        variant: "compact",
        isTitleHiddenVisually: !0,
        useTitle: () => j.intl.string(j.t["V9/cNN"]),
        buildLayout: () => [sM, sL, sD, sP, sG],
    }),
    sV = (0, a.bd)(u.X.CHAT_BAR_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? j.intl.string(j.t.IwVGQs) : j.intl.string(j.t.cFNDh5);
        },
        useCollapsedSubtitle: () => sb(u.X.CHAT_BAR_ADVANCED_ACCORDION),
        usePredicate: () => (0, sv.n)("ChatBarAdvancedAccordion"),
        buildLayout: () => [sO, sy, sU],
    });
var sk = i(565645);
let sw = (0, a.zD)(u.X.CHAT_EMOJI_CONVERT_EMOTICONS, {
    useTitle: () => j.intl.string(j.t["79qal8"]),
    useSubtitle: () =>
        j.intl.format(j.t.GejoQK, { emojiHook: (e, t) => (0, E.jsx)(sk.A, { emojiName: "\uD83D\uDE42" }, t) }),
    useValue: L.j7.useSetting,
    setValue: L.j7.updateSetting,
});
var sF = i(254313);
let sB = (0, a.zD)(u.X.CHAT_GAME_MENTIONS_AUTOCOMPLETE, {
        useTitle: () => j.intl.string(j.t.c0oFDw),
        usePredicate: () => (0, sF.gs)({ location: "GameMentionsInAutocomplete" }).enabled,
        useValue: L.BQ.useSetting,
        setValue: L.BQ.updateSetting,
    }),
    sz = (0, a.zD)(u.X.CHAT_TEXT_BOX_PREVIEWS, {
        useTitle: () => j.intl.string(j.t.AqGrEI),
        useValue: L.SI.useSetting,
        setValue: (e) => {
            G.default.track(U.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: e,
                location: { section: U.JJy.SETTINGS_TEXT_AND_IMAGES },
            }),
                L.SI.updateSetting(e);
        },
    }),
    sY = (0, a.zD)(u.X.CHAT_STICKERS_AUTOCOMPLETE, {
        useTitle: () => j.intl.string(j.t["d+It2U"]),
        useValue: L.ML.useSetting,
        setValue: (e) => {
            G.default.track(U.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                enabled: e,
                location: { section: U.JJy.SETTINGS_TEXT_AND_IMAGES },
                location_stack: [e6.A.TEXT_AND_IMAGES],
            }),
                L.ML.updateSetting(e);
        },
    }),
    sX = (0, a.zZ)(u.X.APPEARANCE_CHAT_BOX_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Ob7VMB),
        useSearchTerms: () => [j.intl.string(j.t.onqU6o)],
        buildLayout: () => [sz, sw, sY, sB, sR, sV],
    });
var sH = i(526162),
    sK = i(793943),
    sW = i(792656),
    sZ = i(830543),
    sq = i(785007),
    sQ = i(806932),
    sJ = i(915089),
    s$ = i(174197),
    s0 = i(202541);
let s1 = (0, a.E2)(u.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [j.intl.string(j.t.gnwxvT)],
    Component: function () {
        let e = (0, sJ.GV)(),
            { ref: t, ...i } = (0, sq._u)({ orientation: "horizontal", labelledBy: e }),
            n = (0, g.bG)([sH.A], () => sH.A.isUpsellPreview);
        return (
            (0, eM.Ay)(() => {
                n &&
                    G.default.track(U.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: s0.e.APP_ICON_UPSELL,
                        location_stack: [e6.A.USER_SETTINGS],
                    });
            }),
            (0, E.jsx)("div", {
                ...i,
                ref: t,
                children: (0, E.jsx)(Q.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    children: (0, E.jsx)(sQ.m, { disabled: n, size: s$.N8.SIZE_48 }),
                }),
            })
        );
    },
});
function s2() {
    (0, sK.nf)(sK.HP.APP_ICON), (0, sZ.default)();
}
function s3() {
    return (0, E.jsx)(sW.A, {
        subscriptionTier: s0.pe.TIER_2,
        defaultTextOverride: j.intl.string(j.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: U.ZSU.BUTTON_CTA, objectType: U.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
let s5 = (0, a.zZ)(u.X.APPEARANCE_IN_APP_ICON_CATEGORY, {
        useTitle: () => j.intl.string(j.t.RPh2ou),
        useSubtitle: () => j.intl.string(j.t.IgENJo),
        useHeaderDecoration: function () {
            let e = (0, g.bG)([sH.A], () => sH.A.isUpsellPreview);
            return S.useMemo(() => {
                let t = [];
                return (
                    t.push({
                        id: "preview-icon-button",
                        type: h.UV.BUTTON,
                        text: j.intl.string(j.t["6acvnZ"]),
                        onClick: s2,
                    }),
                    e && t.push({ id: "upsell-button", type: h.UV.STRONGLY_DISCOURAGED_CUSTOM, button: s3 }),
                    { type: h.WX.BUTTON_GROUP, buttons: t }
                );
            }, [e]);
        },
        buildLayout: () => [s1],
    }),
    s6 = (0, a.AK)(u.X.APPEARANCE_CHAT_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.UDr3Iy),
        useSearchTerms: () => [j.intl.string(j.t.UDr3Iy)],
        destinationKey: u.X.ACCESSIBILITY_PANEL,
    }),
    s4 = (0, a.gN)(u.X.APPEARANCE_CHAT_RELATED_SETTINGS, { buildLayout: () => [s6] });
var s8 = i(281980),
    s7 = i(452027),
    s9 = i(976860),
    le = i(967198),
    lt = i(659324),
    li = i(668267),
    ln = i(5180),
    ls = i(551289),
    ll = i(449817);
let lr = ty.A.getArticleURL(U.MVz.FAVORITES_GUILD);
function la() {
    let { analyticsLocations: e } = (0, n1.Ay)(e6.A.USER_SETTINGS_FAVORITES),
        t = S.useCallback(() => {
            (0, li.mv)("settings_page"), (0, s9.uh)(U.YYv), (0, sZ.default)();
        }, []);
    return (0, E.jsx)(n1.f5, {
        value: e,
        children: (0, E.jsx)(s7.D, {
            label: j.intl.string(ll.default.OT1NK5),
            description: j.intl.format(ll.default.GR2KOG, { helpCenterLink: lr }),
            layout: "horizontal-responsive",
            badge: "beta",
            children: (0, E.jsxs)(Q.B, {
                direction: "horizontal",
                gap: 8,
                fullWidth: !1,
                children: [
                    (0, E.jsx)(ek.$, { variant: "secondary", text: j.intl.string(ll.default["7WwLnr"]), onClick: t }),
                    (0, E.jsx)(sW.A, {
                        subscriptionTier: s0.pe.TIER_2,
                        defaultTextOverride: j.intl.string(ll.default["20sYUU"]),
                    }),
                ],
            }),
        }),
    });
}
let lo = (0, a.E2)(u.X.CHAT_FAVORITES_TOGGLE, {
        usePredicate: () => (0, s8.TW)("FavoritesGuildToggle").isExperimentEnabled,
        useSearchTerms: () => [j.intl.string(ll.default.OT1NK5)],
        Component: function () {
            let { hasAccess: e } = (0, s8.TW)("FavoritesGuildVisibilitySetting"),
                t = (0, ls.dM)(),
                i = S.useCallback((e) => {
                    (0, lt.tV)(e, "settings_page"), !e && (0, ln.ai)(le.A.getGuildId()) && (0, s9.pX)(U.BVt.ME);
                }, []);
            return e
                ? (0, E.jsx)(J.d, {
                      checked: t,
                      description: j.intl.format(ll.default.GR2KOG, { helpCenterLink: lr }),
                      onChange: i,
                      label: j.intl.string(ll.default.OT1NK5),
                      badge: "beta",
                  })
                : (0, E.jsx)(la, {});
        },
    }),
    lu = (0, a.zD)(u.X.CHAT_INLINE_MEDIA_LINKS, {
        useTitle: () => j.intl.string(j.t.U47N1p),
        useValue: L.hD.useSetting,
        setValue: L.hD.updateSetting,
    }),
    ld = (0, a.zD)(u.X.CHAT_INLINE_MEDIA_UPLOADS, {
        useTitle: () => j.intl.string(j.t.VP11No),
        useValue: L.X6.useSetting,
        setValue: L.X6.updateSetting,
    }),
    lc = (0, a.FW)(u.X.CHAT_INLINE_FIELD_SET, {
        useTitle: () => j.intl.string(j.t["9nyle0"]),
        buildLayout: () => [lu, ld],
    }),
    lg = (0, a.zD)(u.X.CHAT_EMBEDS_RENDER_EMBEDS, {
        useTitle: () => j.intl.string(j.t["5bK9vw"]),
        useValue: L.rs.useSetting,
        setValue: L.rs.updateSetting,
    }),
    lm = (0, a.zD)(u.X.CHAT_EMOJI_RENDER_REACTIONS, {
        useTitle: () => j.intl.string(j.t["zge/fP"]),
        useValue: L.jW.useSetting,
        setValue: L.jW.updateSetting,
    });
var lA = i(817281);
let lh = (0, a.zD)(u.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
        useTitle: () => j.intl.string(j.t.JgjNG3),
        useSubtitle: () => {
            if (!L.hH.useSetting())
                return j.intl.format(j.t["31PRaj"], {
                    a11yHook: (e, t) =>
                        (0, E.jsx)(
                            en.D,
                            {
                                tag: "a",
                                onClick: () => (0, eq.openUserSettings)(u.X.APPEARANCE_MESSAGE_DISPLAY_MODE),
                                children: e,
                            },
                            t,
                        ),
                });
        },
        useDisabled: () => !L.hH.useSetting(),
        useValue: () => {
            let e = (0, g.bG)([nG.Ay], () => nG.Ay.displayCompactAvatars);
            return !L.hH.useSetting() || e;
        },
        setValue: (e) => {
            lA.Ay.updatedUnsyncedSettings({ displayCompactAvatars: e });
        },
    }),
    lE = (0, a.Hn)(u.X.CHAT_SPOILERS_SHOW_SPOILERS, {
        useTitle: () => j.intl.string(j.t.QgwmVz),
        useOptions: () => [
            { value: U.P6Q.ON_CLICK, id: U.P6Q.ON_CLICK, label: j.intl.string(j.t["KFH/me"]) },
            { value: U.P6Q.ALWAYS, id: U.P6Q.ALWAYS, label: j.intl.string(j.t.Pe1RbL) },
            { value: U.P6Q.IF_MODERATOR, id: U.P6Q.IF_MODERATOR, label: j.intl.string(j.t.K5VTBE) },
        ],
        useValue: L.gs.useSetting,
        setValue: L.gs.updateSetting,
    }),
    lS = (0, a.zD)(u.X.CHAT_THREADS_SPLIT_VIEW, {
        useTitle: () => j.intl.string(j.t.AInv5m),
        useValue: L.SY.useSetting,
        setValue: L.SY.updateSetting,
    }),
    lT = (0, a.zZ)(u.X.APPEARANCE_MESSAGES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.OIgYlQ),
        useSearchTerms: () => [j.intl.string(j.t["/VQax8"])],
        buildLayout: () => [lc, lg, lm, lE, lS, lh, lo, s4],
    });
var lx = i(753806),
    lp = i(145331);
let lf = (0, a.Qx)(u.X.MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
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
            t ? lx.A.cleanUpPrivateChannelSearchState() : lx.A.cleanUpSearchState({ type: U.I4_.DMS }),
                (0, lp._k)({
                    prevIsCrossDMSettingEnabled: L.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: lp.vy.USER_SETTINGS,
                }),
                L.Hu.updateSetting(t);
        },
    }),
    lN = (0, a.zZ)(u.X.APPEARANCE_SEARCH_CATEGORY, {
        useTitle: () => j.intl.string(j.t["5h0QOP"]),
        buildLayout: () => [lf],
    }),
    l_ = (0, a.zD)(u.X.STREAMING_AUTO_STREAMER_MODE, {
        useTitle: () => j.intl.string(j.t.IxjaoF),
        useValue: function () {
            return (0, g.bG)([eX.A], () => {
                let { autoToggle: e } = eX.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            sE.A.update({ autoToggle: e });
        },
        usePredicate: function () {
            return c.Av;
        },
    }),
    lI = (0, a.zD)(u.X.STREAMING_STREAMER_MODE, {
        useTitle: () => j.intl.string(j.t.TGNg6T),
        useSubtitle: () => j.intl.string(j.t["4nXLnE"]),
        useValue: function () {
            return (0, g.bG)([eX.A], () => {
                let { enabled: e } = eX.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            sE.A.update({ enabled: e });
        },
    });
var lC = i(77729),
    lb = i(588857);
let lv = [],
    ly = (0, a.Hn)(u.X.STREAMER_MODE_HIDE_OVERLAY_WIDGETS, {
        selectionMode: "multiple",
        useTitle: () => j.intl.string(j.t.VCDSLW),
        useSearchTerms: () => [j.intl.string(j.t.VCDSLW)],
        usePredicate: () => {
            let e = (0, eQ.b_)(),
                t = (0, ez.Mn)("StreamerModeSettings");
            return e && t;
        },
        useOptions: function () {
            return S.useMemo(() => {
                let e = [];
                for (let [t, i] of Object.entries(lb.A))
                    null != i.streamerModeLabel &&
                        (null == i.predicate || i.predicate()) &&
                        e.push({ id: t, value: t, label: i.streamerModeLabel() });
                return e;
            }, []);
        },
        useValue: function () {
            return (0, g.bG)([eX.A], () => eX.A.getSettings().disabledOverlayWidgets ?? lv);
        },
        setValue: (e) => sE.A.update({ disabledOverlayWidgets: e }),
        closeOnSelect: !1,
        wrapTags: !0,
    }),
    lj = (0, a.zD)(u.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => j.intl.string(j.t.LSBUGR),
        useValue: () =>
            (0, g.bG)([eX.A], () => {
                let { hidePersonalInformation: e } = eX.A.getSettings();
                return e;
            }),
        setValue: (e) => sE.A.update({ hidePersonalInformation: e }),
    }),
    lO = (0, a.zD)(u.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => j.intl.string(j.t.uWBOri),
        useValue: () =>
            (0, g.bG)([eX.A], () => {
                let { hideInstantInvites: e } = eX.A.getSettings();
                return e;
            }),
        setValue: (e) => sE.A.update({ hideInstantInvites: e }),
    }),
    lR = (0, a.zD)(u.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => j.intl.string(j.t.OrqYDP),
        useValue: () =>
            (0, g.bG)([eX.A], () => {
                let { disableSounds: e } = eX.A.getSettings();
                return e;
            }),
        setValue: (e) => sE.A.update({ disableSounds: e }),
    }),
    lL = (0, a.zD)(u.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.sUAbLd),
        useValue: () =>
            (0, g.bG)([eX.A], () => {
                let { disableNotifications: e } = eX.A.getSettings();
                return e;
            }),
        setValue: (e) => sE.A.update({ disableNotifications: e }),
    }),
    lD = (0, a.zD)(u.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => j.intl.string(j.t["iA81+a"]),
        useSubtitle: () => j.intl.string(j.t.P4vj0h),
        useValue: () =>
            (0, g.bG)([eX.A], () => {
                let { enableContentProtection: e } = eX.A.getSettings();
                return e;
            }),
        setValue: (e) => sE.A.update({ enableContentProtection: e }),
        usePredicate: () => lC.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    lP = (0, a.FW)(u.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.xYhOEh),
        buildLayout: () => [lj, lO, lR, lL, lD, ly],
    }),
    lG = (0, a.zZ)(u.X.STREAMER_MODE_CATEGORY, {
        useTitle: () => j.intl.string(j.t.S5GfOW),
        buildLayout: () => [lI, l_, lP],
    });
var lM = i(147248),
    lU = i(665267),
    lV = i(414133),
    lk = i(412848);
let lw = (0, a.Hn)(u.X.APPEARANCE_GUILD_THEME_DEFAULT_PREFERENCE, {
        useTitle: () => j.intl.string(j.t.Q7mm4g),
        useSearchTerms: () => [j.intl.string(lk.default["/6NbRv"])],
        useOptions: () => [
            { id: "guild", label: j.intl.string(j.t["hrS/Pc"]), value: H.tI.GUILD },
            { id: "personal", label: j.intl.string(j.t.mlvXIq), value: H.tI.PERSONAL },
        ],
        useValue: () => L.zY.useSetting(),
        setValue: L.zY.updateSetting,
        usePredicate: () => (0, lV.OS)("GuildThemeDefaultPreferenceSetting"),
    }),
    lF = (0, a.zD)(u.X.SYNC_PROFILE_THEMES, {
        useTitle: () => j.intl.string(j.t.C00w4l),
        useValue: () => (0, g.bG)([ni.Ay], () => ni.Ay.syncProfileThemeWithUserTheme),
        setValue: () => (0, ny.M1)(),
    });
var lB = i(284016);
let lz = (0, a.zD)(u.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => j.intl.string(j.t["/B+kEV"]),
    useSearchTerms: () => [j.intl.string(j.t.Ksh3ik)],
    useValue: function () {
        return (0, g.bG)([lB.A], () => !1 !== lB.A.shouldSync("appearance"));
    },
    setValue: function (e) {
        var t;
        let i = iR.A.theme,
            n = lM.A.gradientPreset?.id ?? null,
            s = L.eh.getSetting()?.customUserThemeSettings != null;
        (t = U.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
            sm.h.dispatch({
                type: "TRACK",
                event: t,
                properties: { is_sync_enabled: e, base_theme: i, client_theme: n, has_custom_theme: s },
            }),
            lA.Ay.setShouldSyncAppearanceSettings(e);
    },
});
var lY = i(98596);
let lX = (0, a.AK)(u.X.APPEARANCE_THEME_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.nhVQDJ),
        useSearchTerms: () => [j.intl.string(j.t.nhVQDJ)],
        destinationKey: u.X.ACCESSIBILITY_PANEL,
    }),
    lH = (0, a.gN)(u.X.APPEARANCE_THEME_RELATED_SETTINGS, { buildLayout: () => [lX] }),
    lK = (0, a.zZ)(u.X.APPEARANCE_THEME_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Ksh3ik),
        useInlineNotice: function () {
            return (0, g.bG)([ni.Ay], () => ni.Ay.useForcedColors)
                ? {
                      type: h.lT.INLINE_NOTICE,
                      noticeType: "info",
                      text: (0, nF.D)()
                          ? j.intl.format(j.t.Jae48E, {
                                onClick: () => {
                                    (0, eq.openUserSettings)(u.X.SYNC_FORCED_COLORS);
                                },
                            })
                          : j.intl.string(j.t.AUMSZP),
                  }
                : null;
        },
        useHeaderDecoration: function () {
            return (0, g.bG)([lM.A, ni.Ay], () => ni.Ay.useForcedColors || lM.A.isPreview)
                ? null
                : {
                      type: h.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "open-client-themes-button",
                              type: h.UV.BUTTON,
                              text: j.intl.string(j.t["E+COuA"]),
                              onClick: lU.J3,
                          },
                      ],
                  };
        },
        buildLayout: () => [lY.k, lz, lF, lw, lH],
    }),
    lW = (0, a.t_)(u.X.APPEARANCE_PANEL, {
        initialize: function () {
            sA.A.isFetching() ||
                (sm.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_START" }),
                sg.Bo.get({ url: U.Rsh.USERS_ME_CUSTOM_THEMES, oldFormErrors: !0, rejectWithError: !0 })
                    .then((e) => {
                        sm.h.dispatch({
                            type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS",
                            themes: e.body?.custom_themes ?? [],
                        });
                    })
                    .catch((e) => {
                        sm.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_FAILURE", error: e });
                    }));
        },
        useTitle: () => j.intl.string(j.t["iHH+ky"]),
        buildLayout: () => [lK, s5, lT, sX, lN, lG, sx],
    }),
    lZ = [
        { badgeType: h.Xi.NEW, dismissibleContent: eF.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE },
        {
            badgeType: h.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: eF.M.FAVORITES_GUILD_NEW_BADGE,
            StronglyDiscouragedCustomComponent: function () {
                return (0, E.jsx)(sS.JI, { text: j.intl.string(j.t.y2b7CA) });
            },
        },
    ],
    lq = (0, a.i4)(u.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["iHH+ky"]),
        icon: sc.B,
        useMenu: function () {
            let e,
                t,
                i,
                n = (0, sh.A)(),
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
                                  G.default.track(U.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                                      enabled: e,
                                      location: { section: U.JJy.SETTINGS_CONTEXT_MENU },
                                  }),
                                      L.SI.updateSetting(e);
                              },
                              checked: t,
                          })),
                l =
                    ((i = (0, g.bG)([eX.A], () => eX.A.enabled, [])),
                    (0, E.jsx)(ei.sL, {
                        id: "streamer-mode-toggle",
                        label: j.intl.string(j.t.p9ZAJZ),
                        action: () => {
                            sE.A.setEnabled(!i);
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
        getDismissibleBadges: () => lZ,
        buildLayout: () => [lW],
    });
var lQ = i(37646),
    lJ = i(434404);
let l$ = (0, a.t_)(u.X.LANGUAGE_AND_TIME_PANEL, {
        useTitle: () => j.intl.string(j.t.KyFVyi),
        buildLayout: () => [lJ.F],
    }),
    l0 = (0, a.i4)(u.X.LANGUAGE_AND_TIME_SIDEBAR_ITEM, {
        icon: lQ.U,
        useTitle: () => j.intl.string(j.t.KyFVyi),
        buildLayout: () => [l$],
    });
var l1 = i(3137),
    l2 = i(314116),
    l3 = i(369606),
    l5 = i(604121),
    l6 = i(725951),
    l4 = i(400492),
    l8 = i(669067),
    l7 = i(115063),
    l9 = i(754692),
    re = i(927018),
    rt = i(512599),
    ri = i(532197),
    rn = i(874486),
    rs = i(989349),
    rl = i.n(rs),
    rr = i(58703),
    ra = i(906688),
    ro = i(892208);
function ru(e) {
    let { achievementId: t, dateUnlocked: i } = e,
        n = (0, re.vM)(t);
    if (null == n) return null;
    let s = null != i,
        { name: l, description: r, hideDescriptionUntilUnlock: a, onAction: o } = n,
        u = a && !s,
        d = s ? "text-strong" : "text-muted",
        c = s ? "text-default" : "text-muted",
        g = rl()(i),
        m = null != o && s,
        A = m ? en.D : "div";
    return (0, E.jsxs)(A, {
        className: e7()(ro.kL, m && ro.b),
        onClick: function () {
            m && o();
        },
        children: [
            (0, E.jsx)("div", {
                className: ro.zc,
                children: (0, E.jsx)(ra.A, { achievementId: t, size: ra.A.Sizes.SIZE_40, unlocked: s }),
            }),
            (0, E.jsxs)("div", {
                className: ro.VW,
                children: [
                    null != i &&
                        (0, E.jsx)(es.E, {
                            variant: "text-xxs/semibold",
                            color: "text-muted",
                            className: ro.YR,
                            children: (0, rr.mk)(g),
                        }),
                    (0, E.jsx)(es.E, { variant: "text-md/medium", color: d, children: l() }),
                    (0, E.jsx)(es.E, { variant: "text-xs/normal", color: c, children: u ? "?????" : r() }),
                ],
            }),
        ],
    });
}
var rd = i(776351);
function rc(e) {
    let { onBackClick: t } = e,
        i = (0, g.bG)([rn.A], () => rn.A.getAllUnlockedAchievements()),
        n = S.useMemo(() => Object.values(i).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [i]),
        s = S.useMemo(
            () =>
                Object.values(re.l0)
                    .filter(N.Vq)
                    .filter((e) => null == i[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [i],
        );
    return (0, E.jsxs)(E.Fragment, {
        children: [
            (0, E.jsxs)(en.D, {
                onClick: t,
                className: rd.vv,
                children: [
                    (0, E.jsx)(ri.A, { direction: ri.A.Directions.LEFT, className: rd.Kk }),
                    (0, E.jsx)(es.E, {
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: j.intl.string(j.t["13/7kX"]),
                    }),
                ],
            }),
            (0, E.jsxs)("div", {
                className: rd.N1,
                children: [
                    (0, E.jsxs)("div", {
                        className: rd.if,
                        children: [
                            (0, E.jsx)(eV.D, {
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
                        className: rd.nr,
                        children: (0, E.jsx)(l3.O, {
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
                    className: rd.yF,
                    children: (0, E.jsx)("div", {
                        className: rd.Eh,
                        children: n.map((e) => {
                            let { achievementId: t, dateUnlocked: i } = e;
                            return (0, E.jsx)(ru, { achievementId: t, dateUnlocked: i }, t);
                        }),
                    }),
                }),
            s.length > 0 &&
                (0, E.jsxs)("div", {
                    className: rd.yF,
                    children: [
                        (0, E.jsx)("div", {
                            className: rd.if,
                            children: (0, E.jsx)(es.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                children: j.intl.string(j.t.GFyMg1),
                            }),
                        }),
                        (0, E.jsx)("div", {
                            className: rd.Eh,
                            children: s.map((e) => (0, E.jsx)(ru, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, E.jsx)("div", { className: rd.yF, children: (0, E.jsx)("div", { className: rd.F3 }) }),
        ],
    });
}
var rg = i(224964),
    rm = i(31408),
    rA = i(381579);
let rh = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    rE = (0, eJ.range)(0, 11),
    rS = (0, eJ.range)(0, 2.25, 0.25),
    rT = (0, eJ.range)(1, 11),
    rx = (0, eJ.range)(1, 26),
    rp = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function rf(e) {
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
    return (0, E.jsx)(ij.n, { label: j.intl.string(j.t.bWVN1D), children: l });
}
function rN(e) {
    let { children: t } = e;
    return (0, E.jsx)(es.E, { className: rA.iF, variant: "text-sm/normal", color: "text-default", children: t });
}
function r_(e) {
    let {
            settings: { enabled: t, warningSeen: i },
            updateSettings: n,
        } = e,
        s = (0, g.bG)([ni.Ay], () => ni.Ay.useReducedMotion);
    return (0, E.jsx)(J.d, {
        label: j.intl.string(j.t.vuiXm9),
        description: j.intl.string(j.t.KuYbWN),
        checked: t,
        onChange: function (e) {
            e || (0, l9._)(re.sn.DISABLE_POGGERMODE),
                e && (!i || s)
                    ? (0, l2.A)({
                          title: s ? j.intl.string(j.t["FxT+p0"]) : j.intl.string(j.t.TAZ4F9),
                          subtitle: s ? j.intl.string(j.t.gmixrx) : j.intl.string(j.t.jN3t3K),
                          confirmText: j.intl.string(j.t.JFfins),
                          onConfirm: () => n(s ? rh : { enabled: !0, warningSeen: !0 }),
                      })
                    : n({ enabled: e });
        },
    });
}
function rI(e) {
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
    return (0, E.jsxs)(ij.n, {
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
                        className: rA.KF,
                        children: j.intl.string(j.t.vd0D81),
                    }),
                    (0, E.jsx)(rN, { children: j.intl.string(j.t.a18Sug) }),
                    (0, E.jsx)(nE.A, {
                        disabled: a,
                        markers: rT,
                        stickToMarkers: !0,
                        minValue: rT[0],
                        maxValue: rT[rT.length - 1],
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
                        className: rA.KF,
                        children: j.intl.string(j.t.sPO3ij),
                    }),
                    (0, E.jsx)(rN, { children: j.intl.string(j.t.xoldVn) }),
                    (0, E.jsx)(nE.A, {
                        disabled: a,
                        markers: rx,
                        stickToMarkers: !0,
                        minValue: rx[0],
                        maxValue: rx[rx.length - 1],
                        initialValue: s,
                        onValueChange: (e) => r({ confettiSize: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, E.jsx)(rf, {
                disabled: a,
                locations: [
                    {
                        location: rm.k.CHAT_INPUT,
                        title: j.intl.string(j.t.elTtyz),
                        description: j.intl.string(j.t.HtKfMi),
                    },
                    {
                        location: rm.k.REACTION,
                        title: j.intl.string(j.t.Ik4VIa),
                        description: j.intl.string(j.t.y4rqK0),
                    },
                    {
                        location: rm.k.MEMBER_USER,
                        title: j.intl.string(j.t.ZXBlAn),
                        description: j.intl.string(j.t["m9RD+c"]),
                    },
                    {
                        location: rm.k.CALL_TILE,
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
function rC(e) {
    let {
            settings: { enabled: t, combosEnabled: i, comboSoundsEnabled: n, combosRequiredCount: s },
            updateSettings: l,
        } = e,
        r = !t || !i;
    return (0, E.jsxs)(ij.n, {
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
                        className: rA.KF,
                        children: j.intl.string(j.t.L0oQuh),
                    }),
                    (0, E.jsx)(rN, { children: j.intl.string(j.t["/OOFpL"]) }),
                    (0, E.jsx)(nE.A, {
                        disabled: r,
                        markers: rE,
                        stickToMarkers: !0,
                        minValue: rE[0],
                        maxValue: rE[rE.length - 1],
                        initialValue: s,
                        onValueChange: (e) => l({ combosRequiredCount: e }),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
        ],
    });
}
function rb(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: i, shakeIntensity: n, screenshakeEnabledLocations: s },
            updateSettings: l,
        } = e,
        r = (0, g.bG)([ni.Ay], () => ni.Ay.useReducedMotion),
        a = !t || !i || r;
    return (0, E.jsxs)(ij.n, {
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
                        className: rA.KF,
                        children: j.intl.string(j.t.UxnnC4),
                    }),
                    (0, E.jsx)(rN, { children: j.intl.string(j.t.CEOEOb) }),
                    (0, E.jsx)(nE.A, {
                        disabled: a,
                        markers: rS,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: rS[0],
                        maxValue: rS[rS.length - 1],
                        initialValue: n,
                        onValueChange: (e) => {
                            var t;
                            null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > n &&
                                (0, l9._)(re.sn.MORE),
                                l(t, 1);
                        },
                        onMarkerRender: (e) => (e === rS[rS.length - 1] ? j.intl.string(j.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, E.jsx)(rf, {
                disabled: a,
                locations: [
                    {
                        location: rm.uD.CHAT_INPUT,
                        title: j.intl.string(j.t.vUcvPP),
                        description: j.intl.string(j.t.y00OrF),
                    },
                    {
                        location: rm.uD.VOICE_USER,
                        title: j.intl.string(j.t.TcRO54),
                        description: j.intl.string(j.t.YJCxVY),
                    },
                    {
                        location: rm.uD.MENTION,
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
function rv(e) {
    let { updateSettings: t } = e;
    return (0, E.jsx)(ij.n, {
        label: j.intl.string(j.t.EuXv2q),
        children: (0, E.jsxs)(Q.B, {
            gap: 16,
            children: [
                (0, E.jsx)("div", { children: j.intl.string(j.t["1SLnki"]) }),
                (0, E.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: rA.hw,
                    children: (0, E.jsx)(ek.$, {
                        variant: "primary",
                        size: "sm",
                        text: j.intl.string(j.t.qz65yY),
                        onClick: function () {
                            t({ enabled: !1, settingsVisible: !1 }), (0, sZ.default)();
                        },
                    }),
                }),
            ],
        }),
    });
}
function ry(e) {
    let { onChangePage: t } = e;
    return (0, E.jsxs)(en.D, {
        onClick: function () {
            return t(1);
        },
        className: rA.Tq,
        children: [
            (0, E.jsx)("div", {
                className: rA.w1,
                children: (0, E.jsx)(l3.O, { size: "md", color: er.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, E.jsxs)("div", {
                className: rA.qL,
                children: [
                    (0, E.jsx)(eV.D, {
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
            (0, E.jsx)(tM._, { size: "custom", color: "currentColor", width: 16, className: rA.nT }),
        ],
    });
}
function rj() {
    return i
        .e("4660")
        .then(i.t.bind(i, 662336, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function rO(e) {
    let { onChangePage: t, setShowEnableAnimation: i } = e,
        n = (0, g.cf)([l1.A], () => l1.A.getState()),
        [s, l] = S.useState({ x: 0, y: 0 }),
        r = (0, rg.A)();
    function a(e, t) {
        var l, a, o, u, d, c, g, m;
        if (
            (e.enabled &&
                !1 === n.enabled &&
                (i(!0),
                (0, l4.Ak)("poggermode_enabled"),
                (0, l7.fO)({ duration: 2e3, intensity: e.shakeIntensity ?? n.shakeIntensity })),
            (0, rt.O9)(e),
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
        1 === t && h && (0, l7.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? n.shakeIntensity });
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
                (0, E.jsx)(r_, { settings: n, updateSettings: a }),
                (0, E.jsx)(ry, { onChangePage: t }),
                (0, E.jsx)(rC, { settings: n, updateSettings: a }),
                (0, E.jsx)(rb, { settings: n, updateSettings: a }),
                (0, E.jsx)(rI, { settings: n, updateSettings: a }),
                (0, E.jsx)(rv, { updateSettings: a }),
            ],
        })
    );
}
function rR(e) {
    return 0 === e ? l6.f.LEFT : l6.f.RIGHT;
}
let rL = (0, a.E2)(u.X.POGGERMODE_SETTING, {
        Component: function () {
            let [e, t] = S.useState(0),
                [i, n] = S.useState(rR(e)),
                [s, l] = S.useState(!1),
                r = (0, g.bG)([ni.Ay], () => ni.Ay.useReducedMotion),
                a = s && !r;
            return (
                S.useEffect(() => {
                    let t = setTimeout(() => {
                        n(rR(e));
                    }, 500);
                    return () => clearTimeout(t);
                }, [e]),
                S.useEffect(() => {
                    (0, l8._)(rp[e]);
                }, [e]),
                S.useEffect(() => {
                    Math.random() > 0.99 && (0, l9._)(re.sn.VISITOR_100);
                }, []),
                (0, E.jsxs)(E.Fragment, {
                    children: [
                        (0, E.jsx)(l6.A, {
                            className: rA.l3,
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
                                        return (0, E.jsx)(rO, { onChangePage: n(1), setShowEnableAnimation: i });
                                    case 1:
                                        return (0, E.jsx)(rc, { onBackClick: n(0) });
                                    default:
                                        return null;
                                }
                            })(e, t, l),
                        }),
                        (0, E.jsx)("div", {
                            className: a ? rA.Sr : rA.IP,
                            children: (0, E.jsx)(l5.a, {
                                className: rA.gT,
                                importData: rj,
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
    rD = (0, a.zZ)(u.X.POGGERMODE_CATEGORY, { buildLayout: () => [rL] });
var rP = i(231570);
let rG = (0, a.t_)(u.X.POGGERMODE_PANEL, { useTitle: () => j.intl.string(j.t.AtCukI), buildLayout: () => [rD] }),
    rM = (0, a.i4)(u.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.AtCukI),
        icon: () => (0, E.jsx)("img", { alt: "", src: i(724405), className: rP.$ }),
        usePredicate: () => (0, g.bG)([l1.A], () => l1.A.settingsVisible),
        buildLayout: () => [rG],
    });
var rU = i(307301),
    rV = i(410767),
    rk = i(695366),
    rw = i(293246),
    rF = i(868886);
function rB(e) {
    let { game: t, application: i } = e;
    return null == t || null == i
        ? (0, E.jsx)("div", {
              className: rF.zc,
              children: (0, E.jsx)(rk.E, { size: "sm", color: er.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, E.jsxs)("div", {
              className: rF.nt,
              children: [
                  (0, E.jsx)(p.A, { game: i, pid: t.pid, size: p.M.MEDIUM }),
                  (0, E.jsx)("div", {
                      className: rF.Am,
                      children: (0, E.jsx)(rk.E, { size: "sm", color: er.A.colors.TEXT_FEEDBACK_WARNING }),
                  }),
              ],
          });
}
function rz(e) {
    let t = (0, g.bG)([rw.Ay], () => rw.Ay.getMode()),
        { runningGame: i, runningGameApplication: n } = tu();
    null == i || i.elevated || ((i = void 0), (n = void 0));
    let s = (0, tj.NP)(),
        l = s && null != i && t === U.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? l : s, runningGame: i, runningGameApplication: n };
}
function rY(e) {
    let { className: t, sourcePage: i } = e,
        { canPrompt: n, runningGame: s, runningGameApplication: l } = rz(i);
    return n
        ? (0, E.jsxs)("div", {
              className: e7()(rF.kL, t),
              children: [
                  (0, E.jsx)(rB, { game: s, application: l }),
                  (0, E.jsxs)("div", {
                      className: rF.FS,
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
                                  helpCenterLink: ty.A.getArticleURL(U.MVz.SYSTEM_SERVICE),
                              }),
                          }),
                      ],
                  }),
                  (0, E.jsx)(ek.$, {
                      variant: "secondary",
                      size: "sm",
                      text: j.intl.string(j.t["1iI46O"]),
                      onClick: function () {
                          (0, tj.sL)(i + (null != s ? "-with-game" : "-no-game"));
                      },
                  }),
              ],
          })
        : null;
}
var rX = i(691885),
    rH = i(408278),
    rK = i(241326),
    rW = i(489718),
    rZ = i(189213),
    rq = i(292666),
    rQ = i(320989),
    rJ = i(978263);
let r$ = [];
var r0 = i(235986),
    r1 = i(820785),
    r2 = i(734057),
    r3 = i(808728),
    r5 = i(926140),
    r6 = i(387722);
function r4() {}
let r8 = [r5.rD.VOICE_CHANNEL];
function r7(e) {
    e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0);
}
function r9() {
    return (0, E.jsx)("div", {
        className: r6.i1,
        children: (0, E.jsx)(es.E, {
            variant: "text-md/medium",
            color: "text-muted",
            className: r6.GN,
            children: j.intl.string(j.t.zHjCd1),
        }),
    });
}
function ae(e) {
    let { keybind: t, className: i } = e,
        n = S.useRef(t);
    S.useEffect(() => {
        n.current = t;
    });
    let [s, l] = S.useState(t.params?.channelId ?? void 0),
        r = S.useCallback(() => {
            (0, K.openModalLazy)(
                async () => (e) =>
                    (0, E.jsx)(at, {
                        ...e,
                        onSelect: (e) => {
                            l(e), tq.A.setKeybind({ ...n.current, params: { channelId: e } });
                        },
                    }),
            );
        }, []);
    return (0, E.jsx)("div", {
        className: e7()(r6.a8, i),
        children: (0, E.jsx)(s7.D, {
            label: j.intl.string(j.t.q4JpM8),
            children: (0, E.jsxs)(r0.A, {
                align: r0.A.Align.STRETCH,
                children: [
                    (0, E.jsx)("div", { className: r6.$X, children: (0, E.jsx)(ai, { channelId: s }) }),
                    (0, E.jsx)(r0.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, E.jsx)(ek.$, { variant: "primary", text: j.intl.string(j.t.Dm8O4e), onClick: r }),
                    }),
                ],
            }),
        }),
    });
}
function at(e) {
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
                [a, o] = S.useState(r$),
                u = S.useCallback((e, t) => {
                    "" === (t = t.trim()).trim() ? o(r$) : o(e);
                }, []);
            S.useEffect(
                () =>
                    rQ.A.addRouteChangeListener(() => {
                        r("");
                    }),
                [],
            );
            let [d] = S.useState(() => new rJ.A(u, i, void 0, n));
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
        })({ visible: !0, autocompleterResultTypes: r8, autocompleterBeforeCreateSearchContext: r7 }),
        c =
            ((t = "" !== o),
            (i = (0, g.yK)([r3.Ay, r2.A, le.A], () => {
                let e = le.A.getGuildId();
                if (t || null == e) return [];
                let i = [];
                for (let t of r3.Ay.getVocalChannelIds(e)) {
                    let e = r2.A.getChannel(t);
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
            if (e?.type === r5.rD.VOICE_CHANNEL) return e.record.id;
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
                                  if (e?.type === r5.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == i) return null;
                          let n = null != i.parent_id ? r2.A.getChannel(i.parent_id) : void 0,
                              r = eh.A.getGuild(i.guild_id);
                          return (0, E.jsx)(
                              r1.c3,
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
                                      null != r ? (0, E.jsx)("div", { className: r6.J5, children: r.name }) : null,
                              },
                              i.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, E.jsx)(r9, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, E.jsx)(rZ.Modal, {
        transitionState: n,
        onClose: s,
        title: j.intl.string(j.t.Dm8O4e),
        subtitle: j.intl.string(j.t.q4JpM8),
        actions: void 0,
        input: (0, E.jsx)(rq.k, {
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
                                if (e?.type === r5.rD.VOICE_CHANNEL) return e.record;
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
function ai(e) {
    let { channelId: t } = e,
        {
            channel: i,
            category: n,
            guild: s,
        } = (0, g.cf)([r2.A, eh.A], () => {
            let e = null != t ? r2.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? r2.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? eh.A.getGuild(e.guild_id) : void 0,
                  }
                : { channel: void 0, category: void 0, guild: void 0 };
        });
    return null == i
        ? (0, E.jsx)(es.E, {
              variant: "text-md/medium",
              color: "text-muted",
              className: r6.GN,
              children: j.intl.string(j.t["/fYIK7"]),
          })
        : (0, E.jsx)(r1.c3, {
              channel: i,
              id: i.id,
              category: n,
              onClick: r4,
              onFocus: r4,
              onMouseEnter: r4,
              focused: !1,
              children: null != s ? (0, E.jsx)("div", { className: r6.J5, children: s.name }) : null,
          });
}
var an = i(492064);
function as(e) {
    let { keybind: t } = e,
        i = e0.dI(t.shortcut);
    return sr.A.hasBind(i)
        ? (0, E.jsx)("div", {
              className: an.$e,
              children: (0, E.jsx)(q.w, { type: "warning", children: j.intl.string(j.t["7lQlw3"]) }),
          })
        : iV.Yy.has(i)
          ? (0, E.jsx)("div", {
                className: an.$e,
                children: (0, E.jsx)(q.w, {
                    type: "warning",
                    children: j.intl.format(j.t.MOIaNd, {
                        keyboardNavArticle: ty.A.getArticleURL(U.MVz.KEYBOARD_NAVIGATION),
                    }),
                }),
            })
          : void 0;
}
function al(e) {
    let { keybind: t } = e;
    return t.action === U.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, E.jsx)(ae, { keybind: t, className: an._M }) : null;
}
let ar = S.memo(function (e) {
    let { keybind: t, keybindDescriptions: i, keybindActionTypes: n } = e,
        s = S.useCallback((e) => tq.A.setKeybind({ ...t, action: e }), [t]),
        l = S.useCallback((e) => tq.A.setKeybind({ ...t, shortcut: e }), [t]),
        r = S.useCallback(() => tq.A.setKeybind({ ...t, enabled: !t.enabled }), [t]),
        a = S.useCallback(() => tq.A.deleteKeybind(t.id), [t.id]),
        o = S.useId(),
        u = S.useMemo(() => n.find((e) => e.value === t.action)?.label ?? t.action, [t.action, n]);
    return (0, E.jsxs)("div", {
        className: an.f_,
        children: [
            (0, E.jsx)(as, { keybind: t }),
            (0, E.jsx)("div", {
                className: an.XI,
                children: (0, E.jsx)(rX.l, {
                    selectionMode: "single",
                    label: j.intl.string(j.t.XH5b12),
                    value: t.action,
                    options: n,
                    onSelectionChange: s,
                    disabled: t.managed,
                }),
            }),
            (0, E.jsx)("div", {
                className: an.LE,
                children: (0, E.jsx)(s7.D, {
                    label: j.intl.string(j.t["1La4tC"]),
                    layout: "vertical",
                    children: (0, E.jsx)(tQ.A, { defaultValue: t.shortcut, onChange: l }),
                }),
            }),
            (0, E.jsxs)("div", {
                className: an.ne,
                children: [
                    !t.managed &&
                        (0, E.jsx)(rH.K, {
                            variant: "icon-only",
                            onClick: a,
                            icon: rK.u,
                            "aria-label": j.intl.string(j.t.qEHmmB),
                        }),
                    (0, E.jsx)(td.m, {
                        text: j.intl.string(t.enabled ? j.t.pNYGbx : j.t["51DGkH"]),
                        ariaHidden: !0,
                        children: (0, E.jsxs)("div", {
                            children: [
                                (0, E.jsx)(eo.A, {
                                    id: o,
                                    children: j.intl.format(t.enabled ? j.t["myr/Y0"] : j.t.lYhtPO, { actionName: u }),
                                }),
                                (0, E.jsx)(rW.I, { checked: t.enabled, onChange: r, labelledBy: o }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, E.jsx)(es.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: an.h_,
                children: i[t.action],
            }),
            (0, E.jsx)(al, { keybind: t }),
        ],
    });
});
var aa = i(549406),
    ao = i(734066),
    au = i(880144),
    ad = i(614455),
    ac = i(487866);
let ag = function () {
        let e,
            t,
            i,
            n,
            s,
            l,
            {
                customizableKeybinds: r,
                keybindDescriptions: a,
                keybindActionTypes: o,
            } = ((e = (0, g.bG)([eH.Ay], () => eH.Ay.getState())),
            (t = (0, g.bG)([rw.Ay], () => (0, au.A)(rw.Ay))),
            (i = (0, g.bG)([ad.A], () => ad.A.isSupported)),
            (n = (0, ao.sw)()),
            (s = (0, ao.BW)()),
            {
                customizableKeybinds: (function (e) {
                    let { keybinds: t, enableClips: i, enableScreenshotKeybind: n, allowSoundboard: s } = e;
                    return e$()(t)
                        .reject(
                            (e) =>
                                e.managed &&
                                ![
                                    U.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                                    U.hCu.SAVE_CLIP,
                                    U.hCu.SAVE_SCREENSHOT,
                                ].includes(e.action),
                        )
                        .reject((e) => !i && (e.action === U.hCu.SAVE_CLIP || e.action === U.hCu.SAVE_SCREENSHOT))
                        .reject((e) => !n && e.action === U.hCu.SAVE_SCREENSHOT)
                        .reject((e) => !s && (e.action === U.hCu.SOUNDBOARD || e.action === U.hCu.SOUNDBOARD_HOLD))
                        .sortBy((e) => e.id)
                        .sortBy((e) => (!0 === e.managed ? -1 : 0))
                        .value();
                })({
                    keybinds: e,
                    enableClips: n,
                    enableScreenshotKeybind: s,
                    allowSoundboard: (l = (0, eZ.isWindows)()),
                }),
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
                            {
                                id: "toggle-voice-mode",
                                value: U.hCu.TOGGLE_VOICE_MODE,
                                label: j.intl.string(j.t.Wa5H9S),
                            },
                            {
                                id: "toggle-streamer-mode",
                                value: U.hCu.TOGGLE_STREAMER_MODE,
                                label: j.intl.string(j.t.BK0Ncc),
                            },
                            { id: "toggle-camera", value: U.hCu.TOGGLE_CAMERA, label: j.intl.string(j.t.hf8JVT) },
                            {
                                id: "toggle-voice-channel-chat",
                                value: U.hCu.TOGGLE_VOICE_CHANNEL_CHAT,
                                label: j.intl.string(j.t.YeqEjm),
                            },
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
                            ((0, eZ.isWindows)() || rw.Ay.getUseSystemScreensharePicker()) &&
                            r.push({
                                id: "toggle-go-live-streaming",
                                value: U.hCu.TOGGLE_GO_LIVE_STREAMING,
                                label: j.intl.string(j.t.ybdjJD),
                            }),
                        (0, eZ.isDesktop)() &&
                            (r.push(
                                { id: "navigate-back", value: U.hCu.NAVIGATE_BACK, label: j.intl.string(j.t.gRSaOa) },
                                {
                                    id: "navigate-forward",
                                    value: U.hCu.NAVIGATE_FORWARD,
                                    label: j.intl.string(j.t.zOXpjU),
                                },
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
                })({
                    overlaySupported: i,
                    canGoLive: t,
                    allowSoundboard: l,
                    enableClips: n,
                    enableScreenshotKeybind: s,
                }),
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
                            [U.hCu.TOGGLE_VOICE_CHANNEL_CHAT]: j.intl.string(j.t.desfB4),
                        };
                    return (
                        t && (l[U.hCu.TOGGLE_OVERLAY_INPUT_LOCK] = j.intl.string(j.t.IoP5vc)),
                        i && (0, eZ.isWindows)() && (l[U.hCu.TOGGLE_GO_LIVE_STREAMING] = j.intl.string(j.t.s4C238)),
                        (0, eZ.isDesktop)() &&
                            ((l[U.hCu.NAVIGATE_BACK] = j.intl.string(j.t.nKDlEt)),
                            (l[U.hCu.NAVIGATE_FORWARD] = j.intl.string(j.t.DK0FFk)),
                            (l[U.hCu.SOUNDBOARD] = (0, eZ.isWindows)()
                                ? j.intl.string(j.t["5wJefL"])
                                : j.intl.string(j.t.gzjsSP)),
                            (l[U.hCu.SOUNDBOARD_HOLD] = (0, eZ.isWindows)()
                                ? j.intl.string(j.t.RRkZc9)
                                : j.intl.string(j.t.laNlTl)),
                            n &&
                                ((l[U.hCu.SAVE_CLIP] = j.intl.string(j.t.z3Wbam)),
                                s && (l[U.hCu.SAVE_SCREENSHOT] = j.intl.string(j.t.m0zd57)))),
                        l
                    );
                })({ overlaySupported: i, canGoLive: t, enableClips: n, enableScreenshotKeybind: s }),
            });
        return 0 === r.length
            ? (0, E.jsx)(es.E, { variant: "text-sm/normal", color: "text-subtle", children: j.intl.string(j.t.vyYgWp) })
            : (0, E.jsx)("div", {
                  className: ac.A,
                  children: r.map((e, t) =>
                      (0, E.jsxs)(
                          S.Fragment,
                          {
                              children: [
                                  (0, E.jsx)(ar, { keybind: e, keybindDescriptions: a, keybindActionTypes: o }),
                                  t < r.length - 1 ? (0, E.jsx)(ew.c, { className: ac.y, gap: 24 }) : null,
                              ],
                          },
                          e.id,
                      ),
                  ),
              });
    },
    am = (0, a.E2)(u.X.CUSTOM_KEYBINDS_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["069nVT"])],
        Component: function () {
            return c.Av
                ? (0, E.jsx)(ag, {})
                : (0, E.jsx)(q.w, {
                      type: "info",
                      children: j.intl.format(j.t.mPi3F3, { downloadLink: U.X7G.DOWNLOAD }),
                  });
        },
    });
var aA = i(475358),
    ah = i(28647),
    aE = i(760677);
function aS(e) {
    let { children: t } = e;
    return t([aa.Q_.MESSAGE, aa.Q_.NAVIGATION, aa.Q_.DND, aa.Q_.CHAT, aa.Q_.VOICE_AND_VIDEO, aa.Q_.MISCELLANEOUS]);
}
function aT(e) {
    let { showHeader: t = !0 } = e,
        i = e$()((0, aa.Bx)())
            .filter((e) => e.description !== j.intl.string(j.t.HnNtEI))
            .groupBy((e) => e.group)
            .value();
    return (0, E.jsxs)(Q.B, {
        gap: 48,
        children: [
            (0, E.jsx)(ij.n, {
                label: t ? j.intl.string(j.t.Lz5KHI) : void 0,
                children: (0, E.jsx)("div", {
                    className: aE.jh,
                    children: (0, E.jsxs)("div", {
                        className: aE.yZ,
                        children: [
                            (0, E.jsx)(es.E, { variant: "text-md/normal", children: j.intl.string(j.t.sMWLBj) }),
                            (0, E.jsx)("div", {
                                className: aE.DM,
                                children: (0, E.jsx)(aA.e, { shortcut: ah.z.binds["0"], className: aE.LE }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, E.jsx)(aS, {
                children: (e) =>
                    (0, E.jsx)(E.Fragment, {
                        children: e.map((e, t) => {
                            let n = (0, aa.Gm)(e),
                                s = (0, aa.zF)(e),
                                l = i[e];
                            return (0, E.jsx)(
                                ij.n,
                                {
                                    label: n,
                                    description: s,
                                    children: (0, E.jsx)("div", {
                                        className: aE.jh,
                                        children: l.map((e, t) =>
                                            (0, E.jsxs)(
                                                S.Fragment,
                                                {
                                                    children: [
                                                        0 !== t && (0, E.jsx)(ew.c, {}),
                                                        (0, E.jsxs)("div", {
                                                            className: aE.yZ,
                                                            children: [
                                                                (0, E.jsx)(es.E, {
                                                                    variant: "text-md/normal",
                                                                    children: e.description,
                                                                }),
                                                                (0, E.jsx)("div", {
                                                                    className: aE.DM,
                                                                    children: e.binds.map((e) =>
                                                                        (0, E.jsx)(
                                                                            aA.e,
                                                                            { shortcut: e, className: aE.LE },
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
let ax = (0, a.E2)(u.X.DEFAULT_KEYBINDS_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.Lz5KHI)],
    Component: () => (0, E.jsx)(aT, { showHeader: !1 }),
});
var ap = i(19575),
    af = i(546385);
let aN = (0, a.E2)(u.X.HARDWARE_ACCELERATION, {
    usePredicate: () => c.Av && !(0, c.cX)(),
    useSearchTerms: () => [j.intl.string(j.t["/HIxyY"]), j.intl.string(j.t.B0hqpb)],
    Component: function () {
        let [e] = S.useState(() => ap.Ay.getEnableHardwareAcceleration()),
            t = j.intl.string(j.t["/HIxyY"]),
            i = j.intl.string(j.t.B0hqpb);
        return (0, E.jsxs)(Q.B, {
            children: [
                (0, E.jsx)(J.d, { label: t, description: i, checked: e, onChange: a_ }),
                !e && (0, E.jsx)(af.A, { look: af.k.WARNING, children: j.intl.string(j.t.j7S6IX) }),
            ],
        });
    },
});
function a_(e) {
    let t = e ? j.intl.format(j.t.LYXRxL, {}) : j.intl.format(j.t.uDP3Kz, {});
    (0, l2.A)({
        title: j.intl.string(j.t.aqpAvn),
        subtitle: t,
        confirmText: j.intl.string(j.t.vT7ckk),
        onConfirm: () => {
            ap.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
let aI = (0, nw.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 }));
async function aC() {
    let e = await ap.Ay.getOpenOnStart(),
        t = await ap.Ay.getSetting("START_MINIMIZED", !1),
        i = await ap.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
    aI.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: i });
}
let ab = (0, a.zD)(u.X.OS_OPEN_ON_STARTUP, {
        useTitle: () => j.intl.string(j.t["3BeZti"]),
        usePredicate: () => c.Av && !(0, c.cX)(),
        useValue: () => aI.useState((e) => e.openOnStartup),
        setValue: function (e) {
            aI.setState({ openOnStartup: e }), ap.Ay.send("TOGGLE_OPEN_ON_STARTUP", e);
        },
        initialize: () => {
            ap.Ay.getOpenOnStart().then((e) => aI.setState({ openOnStartup: e }));
        },
    }),
    av = (0, a.zD)(u.X.OS_MINIMIZE_TO_TRAY, {
        useTitle: () => j.intl.string(j.t.dJ5MUh),
        useSubtitle: () => j.intl.string(j.t.nQavHr),
        usePredicate: () => c.Av && !(0, c.cX)(),
        useValue: () => aI.useState((e) => e.minimizeToTray),
        setValue: function (e) {
            aI.setState({ minimizeToTray: e }), ap.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e);
        },
        initialize: () => {
            ap.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => aI.setState({ minimizeToTray: e }));
        },
    }),
    ay = (0, a.zD)(u.X.OS_START_MINIMIZED, {
        useTitle: () => j.intl.string(j.t.GfBL83),
        useSubtitle: () => j.intl.string(j.t.XGyhhc),
        usePredicate: () => (0, c.uF)(),
        useValue: () => aI.useState((e) => !!e.openOnStartup && e.startMinimized),
        setValue: function (e) {
            aI.setState({ startMinimized: e }), ap.Ay.send("TOGGLE_START_MINIMIZED", e);
        },
        useDisabled: () => !aI.useState((e) => e.openOnStartup),
        initialize: () => {
            ap.Ay.getSetting("START_MINIMIZED", !1).then((e) => aI.setState({ startMinimized: e }));
        },
    });
var aj = i(314647);
let aO = new Set(["failure", "unknown"]),
    aR = (0, a.E2)(u.X.OS_SYSTEM_SERVICE, {
        useSearchTerms: () => [j.intl.string(j.t.roHq80)],
        Component: function () {
            let [e, t] = S.useState(!1),
                [i, n] = S.useState(() => (0, tj.TC)()),
                s = (0, g.bG)([m.Ay], () => m.Ay.getSystemServiceStatus("input-service")),
                l = S.useCallback(async () => {
                    t(!0),
                        i ? await (0, tj.z8)("windows-settings") : await (0, tj.sL)("windows-settings"),
                        t(!1),
                        n((0, tj.TC)());
                }, [i]);
            return (0, E.jsxs)("div", {
                className: aj.q,
                children: [
                    (0, E.jsxs)("div", {
                        className: aj.L,
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
                                                        "running" === s.state
                                                            ? "text-feedback-positive"
                                                            : aO.has(s.state)
                                                              ? "text-feedback-critical"
                                                              : "text-feedback-warning",
                                                    children: (function (e) {
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
                                                    })(s),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, E.jsx)(es.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: j.intl.format(j.t["8CAL+D"], {
                                    helpCenterLink: ty.A.getArticleURL(U.MVz.SYSTEM_SERVICE),
                                }),
                            }),
                        ],
                    }),
                    (0, E.jsx)(ek.$, {
                        variant: i ? "critical-secondary" : "primary",
                        loading: e,
                        onClick: l,
                        text: i ? j.intl.string(j.t.pAwbdL) : j.intl.string(j.t["1iI46O"]),
                    }),
                ],
            });
        },
        usePredicate: tj.XQ,
    });
function aL() {
    sm.h.dispatch({ type: "DISCORD_STATS_POPOUT_WINDOW_OPEN" });
}
let aD = (0, a.Tf)(u.X.DISCORD_STATS_POPOUT, {
        useTitle: () => "Discord Stats",
        useSubtitle: () => "Open a floating panel showing live GPU, CPU, and memory usage.",
        useLabel: () => "Open",
        usePredicate: () => (0, g.bG)([iA.default], () => iA.default.getCurrentUser()?.isStaff() ?? !1),
        onClick: () => {
            aL();
        },
    }),
    aP = (0, a.zZ)(u.X.SYSTEM_ADVANCED_CATEGORY, {
        useTitle: () => j.intl.string(j.t["8/udY0"]),
        buildLayout: () => [aD],
    }),
    aG = (0, a.zZ)(u.X.SYSTEM_GENERAL_CATEGORY, {
        useTitle: () => j.intl.string(j.t.cg6ltt),
        buildLayout: () => [ab, ay, av, aN],
        usePredicate: () => c.Av && ((0, c.uF)() || (0, c.j9)()),
        initialize: () => {
            aC();
        },
    }),
    aM = (0, a.zZ)(u.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["069nVT"]),
        useSubtitle: () => j.intl.string(j.t.T4LZVL),
        buildLayout: () => [am],
        initialize: () => (tq.A.enableAll(!1), () => tq.A.enableAll(!0)),
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
                                  (0, E.jsx)(rY, { sourcePage: "keybinds" }),
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
                              icon: rU.j,
                              onClick: () => tq.A.addKeybind(),
                          },
                      ],
                  }
                : null,
    }),
    aU = (0, a.zZ)(u.X.SYSTEM_DEFAULT_KEYBINDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Lz5KHI),
        buildLayout: () => [ax],
    }),
    aV = (0, a.zZ)(u.X.SYSTEM_HELPER_CATEGORY, {
        useTitle: () => j.intl.string(j.t["+XZgmA"]),
        usePredicate: () => c.Av && ((0, c.uF)() || (0, c.j9)()),
        buildLayout: () => [aR],
    }),
    ak = (0, a.t_)(u.X.SYSTEM_PANEL, {
        useTitle: () => j.intl.string(j.t["VJ/qKo"]),
        buildLayout: () => [aG, aM, aU, aV, aP],
    }),
    aw = (0, a.i4)(u.X.SYSTEM_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["VJ/qKo"]),
        icon: rV.F,
        buildLayout: () => [ak],
    });
var aF = i(831544),
    aB = i(922795),
    az = i(212245),
    aY = i(329551),
    aX = i(285918),
    aH = i(413339),
    aK = i(952572),
    aW = i(382003);
let aZ = (0, a.E2)(u.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.lZTUPs)],
        usePredicate: aK.A,
        Component: function () {
            let e = (0, az.p)(),
                t = S.useRef(!1),
                i = (0, g.bG)([rw.Ay], () => rw.Ay.getVideoDeviceId()),
                [n, s] = S.useState((0, aY.i)(iA.default.getCurrentUser())),
                l = S.useRef(n);
            return (
                S.useEffect(
                    () => () => {
                        t.current && (0, aX._C)(l.current);
                    },
                    [],
                ),
                (0, E.jsx)(aW.A, {
                    selectedBackgroundOption: n,
                    onSelectBackgroundOption: function (i) {
                        (t.current = !0), (l.current = i), s(i), (0, aH.gB)(i, { location: e.location }).catch(U.tEg);
                    },
                    currentDeviceId: i,
                })
            );
        },
    }),
    aq = (0, a.zD)(u.X.CAMERA_PREVIEW_PREFERENCE, {
        useTitle: () => j.intl.string(j.t["3Ppr1h"]),
        useSubtitle: () => j.intl.string(j.t.WNbX4O),
        useValue: L.bm.useSetting,
        setValue: (e) => {
            L.bm.updateSetting(e), G.default.track(U.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
        },
    });
var aQ = i(625841),
    aJ = i(74848),
    a$ = i(204050);
let a0 = (0, nw.D)(() => ({ previewEnabled: !1 }));
var a1 = i(731854);
let a2 = (0, a.E2)(u.X.CAMERA_SELECTION_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.FsQ3OR)],
    Component: function () {
        let e = (0, g.bG)([rw.Ay], () => rw.Ay.isVideoAvailable()),
            { id: t } = (0, aJ.x5)(a1.oh.VIDEO_INPUT),
            { analyticsLocations: i } = (0, n1.Ay)();
        return (0, E.jsx)(aQ.U, {
            label: j.intl.string(j.t.FsQ3OR),
            deviceType: a1.oh.VIDEO_INPUT,
            location: "UserSettingsCameraSelect",
            isDisabled: !e,
            helperText: (0, a$.p)()
                ? j.intl.format(j.t.aJYgRt, {
                      onCameraSettingsClick: () => {
                          a0.setState({ previewEnabled: !1 }),
                              window.open((0, a$.i)(t)),
                              G.default.track(U.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: i });
                      },
                  })
                : void 0,
        });
    },
});
var a3 = i(745317),
    a5 = i(514956);
let a6 = (0, a.E2)(u.X.CAMERA_VIDEO_PREVIEW, {
        useSearchTerms: () => [j.intl.string(j.t.JIf4v7)],
        Component: function () {
            let e = rw.Ay.getCameraComponent(),
                t = (0, g.bG)([rw.Ay], () => rw.Ay.getVideoDeviceId()),
                i = a0.useField("previewEnabled"),
                n = (0, g.bG)([rw.Ay], () => rw.Ay.isVideoAvailable());
            return ((0, tE.l0)(() => {
                a0.setState({ previewEnabled: !1 });
            }),
            i)
                ? (0, E.jsx)("div", {
                      className: a5.T9,
                      children: (0, E.jsxs)("div", {
                          className: a5.Xi,
                          children: [
                              (0, E.jsxs)("div", {
                                  className: a5.UI,
                                  children: [
                                      (0, E.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !i }),
                                      (0, E.jsx)(a3.kE, {}),
                                  ],
                              }),
                              (0, E.jsx)(a3.eK, {}),
                          ],
                      }),
                  })
                : (0, E.jsx)("div", {
                      className: a5.T9,
                      children: (0, E.jsx)(td.m, {
                          text: n ? null : j.intl.string(j.t["8jSzSe"]),
                          children: (0, E.jsx)(ek.$, {
                              variant: "primary",
                              text: j.intl.string(j.t.JIf4v7),
                              onClick: () => a0.setState({ previewEnabled: !0 }),
                              disabled: !n,
                          }),
                      }),
                  });
        },
    }),
    a4 = (0, a.zZ)(u.X.CAMERA_CATEGORY, {
        useTitle: () => j.intl.string(j.t.uje3P9),
        usePredicate: () => (0, g.bG)([rw.Ay], () => rw.Ay.supports(a1.O5.VIDEO)),
        buildLayout: () => [a6, aq, a2, aZ],
    });
var a8 = i(827343);
let a7 = (0, a.zD)(u.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => j.intl.string(j.t.qFphsa),
        useSubtitle: () => j.intl.string(j.t.cQfwyY),
        usePredicate: function () {
            return (0, c.j9)();
        },
        useValue: function () {
            return (0, g.bG)([rw.Ay], () => rw.Ay.getOpenH264Enabled());
        },
        setValue: function (e) {
            a8.A.setOpenH264Enabled(e),
                (0, l2.A)({
                    title: j.intl.string(j.t["9jf31O"]),
                    subtitle: j.intl.string(j.t["J2wg+X"]),
                    confirmText: j.intl.string(j.t.BddRzS),
                    onConfirm: () => lC.A.app.relaunch(),
                });
        },
        useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
    }),
    a9 = (0, a.zD)(u.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
        useTitle: () => j.intl.string(j.t["r6K+TL"]),
        useSubtitle: () => j.intl.string(j.t["xl9+I6"]),
        useValue: function () {
            return (0, g.bG)([rw.Ay], () => rw.Ay.getAecDump());
        },
        setValue: a8.A.setAecDump,
        usePredicate: function () {
            return (0, g.bG)([rw.Ay], () => rw.Ay.isAecDumpSupported());
        },
    });
var oe = i(139033),
    ot = i(862482),
    oi = i(640238),
    on = i(825484),
    os = i(77138),
    ol = i(487329),
    or = i(353835);
let oa = (0, nw.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function oo() {
    let e = await lC.A.fileManager.getLogPath();
    lC.A.fileManager.showItemInFolder(e);
}
function ou(e) {
    (0, l2.A)({
        title: j.intl.string(j.t["7UXEF2"]),
        subtitle: j.intl.string(j.t.IYPrRl),
        confirmText: j.intl.string(j.t.BddRzS),
        onConfirm: () => a8.A.setDebugLogging(e),
    });
}
async function od(e) {
    let { onUploadStart: t, onUploadFinish: i } = e;
    t?.();
    try {
        let e, t;
        await rw.Ay.getMediaEngine().writeAudioDebugState(),
            await or.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, os.a)(U.Umv.RTC),
            (e = j.intl.string(j.t["fKBB8+"])),
            (t = j.intl.string(j.t.BvyxE7)),
            (0, oe.A)({ title: e, subtitle: t });
    } catch (l) {
        var n;
        let e, t, i, s;
        (n = l.displayMessage),
            (e = j.intl.string(j.t.QZg0J7)),
            (t = n ?? j.intl.string(j.t.VzHcSm)),
            (i = (0, ol.B1)(ol.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (s = j.intl.formatToPlainString(j.t.ejOT95, { errorCode: i })),
            (0, K.openModal)((i) =>
                (0, E.jsx)(oi.a, {
                    header: e,
                    confirmButtonColor: ot.$n.Colors.BRAND,
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
async function oc() {
    await od({
        onUploadStart: () => oa.setState({ isUploading: !0 }),
        onUploadFinish: () => oa.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let og = (0, a.E2)(u.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [j.intl.string(j.t["726JHL"]), j.intl.string(j.t.EbwFfR), j.intl.string(j.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, g.bG)([rw.Ay], () => rw.Ay.supports(a1.O5.DEBUG_LOGGING));
        return c.Av && e && null != lC.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, g.bG)([rw.Ay], () => rw.Ay.getDebugLogging()),
            t = oa.useField("isUploading"),
            i = oa.useField("isDisabled"),
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
                            onChange: ou,
                        }),
                        (0, E.jsx)("div", {
                            role: "group",
                            "aria-labelledby": n,
                            children: (0, E.jsxs)(on.e, {
                                children: [
                                    (0, E.jsx)(ek.$, {
                                        variant: "secondary",
                                        text: j.intl.string(j.t.EbwFfR),
                                        onClick: oc,
                                        loading: t,
                                        disabled: i,
                                        "aria-label": j.intl.string(j.t.aY1OH2),
                                    }),
                                    (0, E.jsx)(ek.$, {
                                        variant: "secondary",
                                        text: j.intl.string(j.t.nuPtYi),
                                        onClick: oo,
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
var om = i(233545),
    oA = i(412780);
function oh() {
    return (0, g.bG)([iA.default, rw.Ay], () => {
        let e = iA.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            i = "canary" === ap.Ay.releaseChannel || "development" === ap.Ay.releaseChannel,
            n = rw.Ay.supports(a1.O5.CONNECTION_REPLAY);
        return t && i && n;
    });
}
let oE = (0, a.zD)(u.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => j.intl.string(j.t.U4FgFK),
        useSubtitle: () => j.intl.string(j.t.Lm72RU),
        useValue: function () {
            return (0, g.bG)([oA.Ay], () => oA.Ay.shouldRecordNextConnection());
        },
        setValue: om.Et,
        usePredicate: oh,
    }),
    oS = (0, a.Tf)(u.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => j.intl.string(j.t.nJnOHO),
        useLabel: () => j.intl.string(j.t["3xjX0U"]),
        onClick: om.YW,
        usePredicate: oh,
    });
var oT = i(926919),
    ox = i(111162),
    op = i(855302);
let of = (0, a.zD)(u.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
        useTitle: () => j.intl.string(j.t["0CEP6e"]),
        useSubtitle: () => j.intl.string(j.t["kBXuW+"]),
        useValue: function () {
            return (0, g.bG)([ox.default], () => ox.default.isStreamInfoOverlayEnabled);
        },
        setValue: function (e) {
            let t = ox.default.isStreamInfoOverlayEnabled;
            (0, op.A)("stream_info_overlay_enabled", e, t), (0, oT.x)({ isStreamInfoOverlayEnabled: e });
        },
        usePredicate: function () {
            return L.Q_.useSetting();
        },
    }),
    oN = (0, a.bd)(u.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? j.intl.string(j.t["/B4I8H"]) : j.intl.string(j.t.BTlsWH)),
        useCollapsedSubtitle: () => j.intl.string(j.t.la1Ys4),
        buildLayout: () => [of, a9, oE, oS, og],
    });
function o_(e, t, i) {
    (0, l2.A)({ title: e, subtitle: t, confirmText: j.intl.string(j.t.BddRzS), onConfirm: i });
}
let oI = (0, a.Tf)(u.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => j.intl.string(j.t.SXfv1v),
        useSubtitle: () => j.intl.string(j.t["buA5/q"]),
        useLabel: () => j.intl.string(j.t.yBZMsQ),
        onClick: function () {
            o_(j.intl.string(j.t["4iKQ/3"]), j.intl.string(j.t.sQ42iT), a8.A.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    oC = (0, a.zZ)(u.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.UDAU9K),
        buildLayout: () => [a7, oN, oI],
    });
var ob = i(347481),
    ov = i(852712);
let oy = (0, a.zD)(u.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => j.intl.string(j.t.cUMdH0),
        useSubtitle: () => j.intl.string(j.t["6EjbvA"]),
        useValue: function () {
            return (0, g.bG)([rw.Ay], () => rw.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            a8.A.setAutomaticGainControl(e, { page: U.liQ.USER_SETTINGS, section: U.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, g.bG)([rw.Ay, ob.A], () => {
                let e = rw.Ay.getInputDeviceId();
                return ob.A.hasAutomaticGainControl(e);
            });
        },
        usePredicate: function () {
            return (0, g.bG)([rw.Ay], () => rw.Ay.isAutomaticGainControlSupported() && rw.Ay.isInputProfileCustom());
        },
    }),
    oj = (0, a.sN)(u.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => j.intl.string(j.t.AlybXj),
        setValue: (e) =>
            a8.A.setAttenuation(e, rw.Ay.getAttenuateWhileSpeakingSelf(), rw.Ay.getAttenuateWhileSpeakingOthers()),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => rw.Ay.getAttenuation(),
    }),
    oO = (0, a.zD)(u.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => j.intl.string(j.t["9dHxRY"]),
        useValue: () => (0, g.bG)([rw.Ay], () => rw.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => a8.A.setAttenuation(rw.Ay.getAttenuation(), e, rw.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    oR = (0, a.zD)(u.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => j.intl.string(j.t.SMt0Gr),
        useValue: () => (0, g.bG)([rw.Ay], () => rw.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => a8.A.setAttenuation(rw.Ay.getAttenuation(), rw.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    oL = (0, a.FW)(u.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.oSdBvW),
        useSubtitle: () => j.intl.string(j.t["0A/8Rt"]),
        usePredicate: () => (0, g.bG)([rw.Ay], () => rw.Ay.supports(a1.O5.ATTENUATION)),
        buildLayout: () => [oj, oO, oR],
    });
var oD = i(801644);
let oP = (0, a.zD)(u.X.VOICE_HARDWARE_MUTE_SILENCE_ALERT_SETTING, {
        useTitle: () => j.intl.string(j.t.pZ0vr4),
        useSubtitle: () => j.intl.string(j.t.tVbzoZ),
        useValue: function () {
            return (0, g.bG)([nG.Ay], () => !nG.Ay.disableHardwareMuteSilenceAlert);
        },
        setValue: function (e) {
            (0, op.A)("hardware_mute_silence_alert_enabled", e, !nG.Ay.disableHardwareMuteSilenceAlert),
                lA.Ay.updatedUnsyncedSettings({ disableHardwareMuteSilenceAlert: !e });
        },
        usePredicate: function () {
            let { enableHardwareSilenceWarning: e } = oD.A.useConfig({ location: "HardwareMuteSilenceAlertSetting" });
            return e;
        },
    }),
    oG = (0, a.zD)(u.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => j.intl.string(j.t.DFPXIG),
        useSubtitle: () => j.intl.string(j.t["UyRX+C"]),
        useValue: function () {
            return (0, g.bG)([rw.Ay], () => rw.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            a8.A.setBypassSystemInputProcessing(e);
        },
        usePredicate: function () {
            return (0, g.bG)([rw.Ay], () => rw.Ay.showBypassSystemInputProcessing() && rw.Ay.isInputProfileCustom());
        },
    }),
    oM = (0, a.zD)(u.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
        useTitle: () => j.intl.string(j.t.jrWHD3),
        useSubtitle: () => j.intl.string(j.t.YCCMkJ),
        useValue: function () {
            return (0, g.bG)([nG.Ay], () => !nG.Ay.disableVoiceChannelChangeAlert);
        },
        setValue: function (e) {
            (0, op.A)("switch_channel_warning_enabled", e, !nG.Ay.disableVoiceChannelChangeAlert),
                lA.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e });
        },
    }),
    oU = (0, a.zD)(u.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
        useTitle: () => j.intl.string(j.t.BbESsg),
        useSubtitle: () => j.intl.string(j.t.LoOB1F),
        useValue: function () {
            return (0, g.bG)([rw.Ay], () => {
                let { vadUseKrisp: e } = rw.Ay.getModeOptions();
                return e;
            });
        },
        setValue: function (e) {
            let t = rw.Ay.getMode();
            a8.A.setMode(t, { vadUseKrisp: e });
        },
        useDisabled: function () {
            return (0, g.bG)(
                [rw.Ay],
                () => rw.Ay.getMode() !== U.TBI.VOICE_ACTIVITY || !rw.Ay.getModeOptions().autoThreshold,
            );
        },
        usePredicate: function () {
            return (0, g.bG)([rw.Ay], () => rw.Ay.isAdvancedVoiceActivitySupported() && rw.Ay.isInputProfileCustom());
        },
    }),
    oV = (0, a.Hn)(u.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => j.intl.string(j.t.wVBHr0),
        useValue: function () {
            return (0, g.bG)([rw.Ay], () => rw.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            o_(j.intl.string(j.t.uY7AcQ), j.intl.string(j.t.gBqik6), () => a8.A.setAudioSubsystem(e));
        },
        useOptions: function () {
            let {
                legacyAudioSubsystemSupported: e,
                experimentalAudioSubsystemSupported: t,
                automaticAudioSubsystemSupported: i,
            } = (0, g.cf)([rw.Ay], () => ({
                legacyAudioSubsystemSupported: rw.Ay.supports(a1.O5.LEGACY_AUDIO_SUBSYSTEM),
                experimentalAudioSubsystemSupported: rw.Ay.supports(a1.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
                automaticAudioSubsystemSupported: rw.Ay.supports(a1.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
            }));
            return S.useMemo(() => {
                let n;
                return (
                    (n = [{ id: a1.rB.STANDARD, value: a1.rB.STANDARD, label: j.intl.string(j.t.dqb2JZ) }]),
                    e && n.push({ id: a1.rB.LEGACY, value: a1.rB.LEGACY, label: j.intl.string(j.t["TYfH+5"]) }),
                    t &&
                        n.push({ id: a1.rB.EXPERIMENTAL, value: a1.rB.EXPERIMENTAL, label: j.intl.string(j.t.liQmtr) }),
                    i && n.push({ id: a1.rB.AUTOMATIC, value: a1.rB.AUTOMATIC, label: j.intl.string(j.t.qNgtO1) }),
                    n
                );
            }, [i, t, e]);
        },
        usePredicate: function () {
            return (0, g.bG)([rw.Ay], () => rw.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    ok = (0, a.zD)(u.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => j.intl.string(j.t.uancuJ),
        useSubtitle: () => j.intl.string(j.t.I1Eoqq),
        useValue: function () {
            return (0, g.bG)([rw.Ay], () => rw.Ay.getQoS());
        },
        setValue: function (e) {
            a8.A.setQoS(e);
        },
        usePredicate: function () {
            return (0, g.bG)([rw.Ay], () => rw.Ay.supports(a1.O5.QOS));
        },
    }),
    ow = (0, a.zD)(u.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => j.intl.string(j.t["4rsOPQ"]),
        useSubtitle: () => j.intl.string(j.t.jtiiCw),
        useValue: function () {
            return (0, g.bG)([rw.Ay], () => rw.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            a8.A.setSilenceWarning(e);
        },
        usePredicate: function () {
            return eZ.isPlatformEmbedded;
        },
    }),
    oF = (0, a.bd)(u.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? j.intl.string(j.t.KHsSWK) : j.intl.string(j.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            sb(u.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, g.bG)([rw.Ay], () => rw.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [oy, oU, oG, ow, oP, oM, oL, oV, ok],
    }),
    oB = (0, a.zD)(u.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => j.intl.string(j.t.iWTwu6),
        useValue: function () {
            return (0, g.bG)([rw.Ay], () => rw.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            a8.A.setEchoCancellation(e, { page: U.liQ.USER_SETTINGS, section: U.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, g.bG)([rw.Ay, ob.A], () => {
                let e = rw.Ay.getInputDeviceId();
                return ob.A.hasEchoCancellation(e);
            });
        },
        usePredicate: function () {
            return (0, g.bG)([rw.Ay], () => rw.Ay.isInputProfileCustom());
        },
    });
var oz = i(459838),
    oY = i(451988),
    oX = i(934246),
    oH = i(300839);
let oK = (0, sJ.Ld)();
function oW(e) {
    let { isSpeaking: t, className: i, id: n, ariaDescribedBy: s, ariaLabelledBy: l, disabled: r } = e;
    return (0, E.jsx)("div", {
        role: "meter",
        className: e7()(oX.$I, i),
        id: n,
        "aria-describedby": s,
        "aria-labelledby": l,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? j.intl.string(j.t.haLKZ0) : j.intl.string(j.t.X2hJL7),
        children: (0, E.jsx)("div", { className: e7()(oX.Jx, oX.NU, { [oX.zY]: t && !r, [oX.r9]: r }) }),
    });
}
function oZ(e) {
    let { volume: t, id: i, ariaDescribedBy: n, ariaLabelledBy: s, disabled: l } = e,
        { threshold: r, autoThreshold: a } = (0, g.cf)([rw.Ay], () => ({
            threshold: rw.Ay.getModeOptions().threshold,
            autoThreshold: rw.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, g.bG)([rw.Ay], () => rw.Ay.getMode());
    return (0, E.jsx)("section", {
        className: e7()(oX.Mo, oX.jW),
        id: i,
        "aria-describedby": n,
        "aria-labelledby": s,
        children: (0, E.jsx)(nE.A, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return (t = -((100 - e) * 1)), void a8.A.setMode(o, { threshold: t, autoThreshold: a });
            },
            barStyles: { background: er.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: er.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": oK,
            disabled: l,
            children: (0, E.jsxs)("div", {
                className: e7()(oX.NU, oX.TL, oX.Jx, oH.bar),
                children: [
                    (0, E.jsx)("div", { className: e7()(oX.GS, oX.SH), style: { width: l ? 0 : t + 100 + "%" } }),
                    (0, E.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let oq = (0, a.E2)(u.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [j.intl.string(j.t["sqUm+k"]), j.intl.string(j.t.I1Zuq0), j.intl.string(j.t.nuFtHH)],
    usePredicate: () => (0, g.bG)([rw.Ay], () => rw.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, g.cf)([rw.Ay], () => ({
                autoThreshold: rw.Ay.getModeOptions().autoThreshold,
                disabled: rw.Ay.getMode() !== a1.TB.VOICE_ACTIVITY,
            })),
            i = S.useCallback((e) => {
                let t = rw.Ay.getMode(),
                    { threshold: i } = rw.Ay.getModeOptions();
                a8.A.setMode(t, { autoThreshold: e, threshold: i });
            }, []),
            n = (0, g.bG)([rw.Ay], () => rw.Ay.supports(a1.O5.AUTOMATIC_VAD)),
            { volume: s, isSpeaking: l } = (function () {
                let [e, t] = S.useState(-100),
                    [i, n] = S.useState(!1);
                function s(e, i) {
                    t(e), n((i & a1.ME.VOICE) === a1.ME.VOICE);
                }
                return (
                    S.useEffect(() => {
                        let e = new oY.Ep();
                        return (
                            e.start(1e3, () => {
                                rw.Ay.getMediaEngine().on(oz.bg.VoiceActivity, s), e.stop();
                            }),
                            () => {
                                rw.Ay.getMediaEngine().removeListener(oz.bg.VoiceActivity, s), e.stop();
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: i }
                );
            })(),
            r = (0, g.bG)([rw.Ay], () => rw.Ay.isEnabled()),
            a = S.useMemo(
                () =>
                    !r &&
                    (0, E.jsx)("div", {
                        className: oX.B4,
                        children: (0, E.jsx)(q.w, {
                            type: "warning",
                            children: j.intl.format(j.t["O13I+O"], { onEnableClick: () => a8.A.enable(!0) }),
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
                                  ? (0, E.jsx)(oW, {
                                        isSpeaking: l,
                                        className: oX.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, E.jsx)(oZ, { volume: s, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
                              a,
                          ],
                      }),
                  ],
              })
            : (0, E.jsxs)(Q.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, E.jsx)(s7.D, {
                          label: j.intl.string(j.t["sqUm+k"]),
                          description: o,
                          layout: "vertical",
                          children: (i) =>
                              e
                                  ? (0, E.jsx)(oW, {
                                        isSpeaking: l,
                                        className: oX.UJ,
                                        id: i.controlId,
                                        ariaDescribedBy: i.describedById,
                                        ariaLabelledBy: i.labelId,
                                        disabled: t,
                                    })
                                  : (0, E.jsx)(oZ, {
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
var oQ = i(366010);
let oJ = i(993830),
    o$ = i(413142),
    o0 = { page: U.liQ.USER_SETTINGS, section: U.JJy.SETTINGS_VOICE_AND_VIDEO };
function o1() {
    let e = (0, g.bG)([iR.A], () => (0, oQ.q)(iR.A.theme));
    return (0, E.jsx)("img", { src: e ? oJ : o$, width: 48, height: 32, alt: "" });
}
let o2 = (0, a.E2)(u.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.t8Qhib), j.intl.string(j.t.hmfkCi)],
    usePredicate: function () {
        return (0, g.bG)([rw.Ay], () => rw.Ay.isInputProfileCustom() && rw.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = S.useCallback((e) => {
                a8.A.setNoiseCancellation("KRISP" === e, o0), a8.A.setNoiseSuppression("STANDARD" === e, o0);
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: i,
                isNoiseSuppressionSupported: n,
                isNoiseCancellationSupported: s,
            } = (0, g.cf)([rw.Ay], () => ({
                noiseCancellation: rw.Ay.getNoiseCancellation(),
                noiseSuppression: rw.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: rw.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: rw.Ay.isNoiseCancellationSupported(),
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
                ? j.intl.format(j.t["1q5aTp"], { helpArticle: ty.A.getArticleURL(U.MVz.NOISE_SUPPRESSION) })
                : j.intl.string(j.t.OWKjw5);
        return (0, E.jsxs)(Q.B, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, E.jsx)(rX.l, {
                    label: j.intl.string(j.t.t8Qhib),
                    description: r,
                    layout: "horizontal",
                    value: t ? "KRISP" : i ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: l,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                s && (0, E.jsx)(o1, {}),
            ],
        });
    },
});
var o3 = i(934729),
    o5 = i(621380);
let o6 = !c.Av;
function o4() {
    return (0, g.bG)([rw.Ay], () => rw.Ay.getMode() === a1.TB.PUSH_TO_TALK);
}
let o8 = (0, a.zD)(u.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return c.Av ? j.intl.string(j.t.tG4Np5) : j.intl.string(j.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, g.bG)([rw.Ay], () => rw.Ay.getMode());
        return S.useMemo(() => {
            if (!c.Av && e === a1.TB.PUSH_TO_TALK)
                return j.intl.format(j.t["VHI4+Y"], { onDownloadClick: () => (0, o3._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, g.bG)([rw.Ay], () => rw.Ay.getActiveInputProfile() !== o5.m.STUDIO);
    },
    useValue: function () {
        return (0, g.bG)([rw.Ay], () => rw.Ay.getMode() === a1.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, n;
        (t = e ? a1.TB.PUSH_TO_TALK : a1.TB.VOICE_ACTIVITY),
            (n = [e6.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === a1.TB.PUSH_TO_TALK &&
                o6 &&
                (0, K.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([i.e("74558"), i.e("10919")]).then(i.bind(i, 556506));
                    return (t) =>
                        (0, E.jsx)(e, {
                            title: j.intl.string(j.t.Kdt0Gb),
                            confirmText: j.intl.string(j.t["1WjMbC"]),
                            cancelText: j.intl.string(j.t.BddRzS),
                            onConfirm: () => (0, o3._)("PTT Limited Modal"),
                            body: j.intl.string(j.t.NIozvt),
                            ...t,
                        });
                }),
            a8.A.setMode(t, void 0, void 0, { analyticsLocations: n });
    },
    useSearchTerms: () => [j.intl.string(j.t["pS+K2L"]), j.intl.string(j.t.nuFtHH)],
});
var o7 = i(297932);
let o9 = (0, a.E2)(u.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["pS+K2L"]), j.intl.string(j.t.nuFtHH)],
        usePredicate: o4,
        Component: function () {
            let e = (0, g.bG)([rw.Ay], () => {
                    let { shortcut: e } = rw.Ay.getModeOptions();
                    return e;
                }),
                t = j.intl.format(j.t.HVvn5T, {
                    onClick: () => (0, eq.openUserSettings)(u.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY),
                });
            return (0, E.jsx)(s7.D, {
                label: j.intl.string(j.t["o+BJQR"]),
                description: t,
                layout: "horizontal-responsive",
                children: (0, E.jsx)("div", {
                    className: o7.e,
                    children: (0, E.jsx)(tQ.A, {
                        defaultValue: e,
                        onChange: (e) => a8.A.setMode(U.TBI.PUSH_TO_TALK, { shortcut: e }),
                    }),
                }),
            });
        },
    }),
    ue = (0, a.sN)(u.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => j.intl.string(j.t.GCNMM8),
        useSearchTerms: () => [j.intl.string(j.t["pS+K2L"]), j.intl.string(j.t.nuFtHH)],
        setValue: function (e) {
            a8.A.setMode(U.TBI.PUSH_TO_TALK, { delay: e });
        },
        minValue: 0,
        maxValue: U.IjB,
        getInitialValue: function () {
            let { delay: e } = rw.Ay.getModeOptions();
            return e;
        },
        onValueRender: function (e) {
            return e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}\u00A0ms`;
        },
        usePredicate: o4,
    });
var ut = i(957658),
    ui = i(329139);
let un = (0, a.zD)(u.X.VOICE_SPATIAL_AUDIO_SETTING, {
        useTitle: () => j.intl.string(ui.default.LGDPhA),
        useValue: function () {
            return (0, g.bG)([rw.Ay], () => rw.Ay.isSpatialAudioEnabled());
        },
        setValue: function (e) {
            a8.A.setSpatialAudio(e, [e6.A.USER_SETTINGS_VOICE_AND_VIDEO]);
        },
        usePredicate: function () {
            return (0, ut.A)("VoiceSettings");
        },
    }),
    us = (0, a.Qx)(u.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => j.intl.string(j.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, ov._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [j.intl.string(j.t.nuFtHH), j.intl.string(j.t.VZPR0R), j.intl.string(j.t.cjPbpT)],
        useValue: function () {
            return (0, g.bG)([rw.Ay], () => rw.Ay.getActiveInputProfile() ?? o5.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [e6.A.USER_SETTINGS_VOICE_AND_VIDEO];
            a8.A.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, ov.d)({ location: "InputProfileCategory" });
            return [
                { value: o5.m.VOICE_ISOLATION, name: j.intl.string(j.t.cjPbpT), desc: j.intl.string(j.t.CzhvnE) },
                { value: o5.m.STUDIO, name: j.intl.string(j.t.VZPR0R), desc: j.intl.string(j.t.ZaJksS) },
                { value: o5.m.CUSTOM, name: j.intl.string(j.t["N/PQjv"]), desc: j.intl.string(j.t.SnBmuY) },
            ].filter((t) => {
                let { value: i } = t;
                return e.includes(i);
            });
        },
    }),
    ul = (0, a.zZ)(u.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, g.bG)([ob.A, rw.Ay], () => {
                let e = rw.Ay.getInputDeviceId();
                return (
                    (ob.A.hasEchoCancellation(e) || ob.A.hasNoiseSuppression(e) || ob.A.hasAutomaticGainControl(e)) &&
                    rw.Ay.isInputProfileCustom()
                );
            });
            return S.useMemo(() => {
                if (e) return { type: h.lT.INLINE_NOTICE, noticeType: "info", text: j.intl.string(j.t["/Whuzi"]) };
            }, [e]);
        },
        buildLayout: () => [us, oq, o2, oB, un, o8, o9, ue, oF],
    });
var ur = i(403581),
    ua = i(983851),
    uo = i(687021),
    uu = i(128450),
    ud = i(796774),
    uc = i(209932),
    ug = i(813564),
    um = i(984813),
    uA = i(22231),
    uh = i(428262),
    uE = i(792348),
    uS = i(674168),
    uT = i(333216),
    ux = i(805945),
    up = i(199300);
function uf(e) {
    let { onSelect: t } = e,
        [i, n] = S.useState(!1),
        s = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()),
        l = uh.Ay.canUseCustomCallSounds(s),
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
            return (0, E.jsx)(iZ.l, {
                children: (0, E.jsx)(uT.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: l ? null : (0, E.jsx)(uS.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, E.jsx)(ux.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    n(!i);
                },
                text: j.intl.string(j.t.uOe0Az),
                children: (0, E.jsx)(uA.R, { size: "md", color: "currentColor", className: up.Wo }),
            }),
    });
}
function uN(e) {
    let { sound: t } = e,
        { previewSound: i } = (0, uE.A)(t, null),
        n =
            0 === (0, ug.wH)()
                ? j.intl.string(j.t.OASXjt)
                : j.intl.formatToPlainString(j.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, E.jsx)(ux.dT, {
        onClick: i,
        text: n,
        children: (0, E.jsx)(ua.H, { size: "md", color: "currentColor", className: up.wg }),
    });
}
function u_(e) {
    let { sound: t, isGlobal: i, onSelect: n } = e,
        s = null != t,
        l = t?.emojiId,
        r = t?.emojiName,
        a = s && (null != r || null != l);
    return (0, E.jsxs)("div", {
        className: up.D6,
        children: [
            (0, E.jsxs)("div", {
                className: up.kL,
                children: [
                    a && (0, E.jsx)(sk.A, { emojiId: l, emojiName: r, className: up.Zg }),
                    (0, E.jsx)(es.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        className: up.dj,
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
                        ? (0, E.jsx)(uN, { sound: t })
                        : (0, E.jsx)(ua.H, { size: "md", color: "currentColor", className: up.Gk }),
                ],
            }),
            (0, E.jsxs)("div", {
                className: up.kL,
                children: [
                    (0, E.jsx)(uf, { onSelect: n }),
                    s &&
                        !i &&
                        (0, E.jsx)(ux.dT, {
                            onClick: () => n(null),
                            text: j.intl.string(j.t.jmtcGA),
                            children: (0, E.jsx)(rK.u, {
                                size: "md",
                                color: er.A.unsafe_rawColors.RED_400.css,
                                className: up.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var uI = i(617617);
i(980504);
var uC = i(907895);
function ub(e) {
    return (0, g.bG)([uc.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: i } = e;
        return uc.A.getSound("0" === t ? "0" : t, i);
    });
}
function uv(e) {
    let { guildId: t } = e,
        i = (0, g.bG)([uI.A], () => uI.A.settings.guilds?.guilds?.[t]?.joinSound),
        n = ub(i);
    if (null == i || null == n) return null;
    let { emojiId: s, emojiName: l } = n,
        r = null != s || null != l;
    return (0, E.jsxs)("div", {
        className: uC.Io,
        children: [
            r
                ? (0, E.jsx)(sk.A, { emojiId: s, emojiName: l, className: uC.nW })
                : (0, E.jsx)(ua.H, { size: "md", color: "currentColor", className: uC.nW }),
            (0, E.jsx)(es.E, { className: uC.dK, variant: "text-xs/medium", children: n.name }),
        ],
    });
}
let uy = (0, a.E2)(u.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, n1.Ay)(),
            [t, i] = S.useState("0"),
            n = (0, um.mz)(t),
            s = ub(n),
            l = n?.type === um.PP.GLOBAL,
            r = (0, g.bG)([uc.A], () => uc.A.hasFetchedAllSounds()) && null != n && null == s;
        S.useEffect(() => {
            r && (0, ug.ND)({ location: e });
        }, [r, e]),
            S.useEffect(() => {
                (0, ud.E7)();
            }, []);
        let a = S.useCallback((e, t) => {
            let { inDropdown: i } = t;
            return null == e ? null : i ? (0, E.jsx)(uv, { guildId: e.value }) : null;
        }, []);
        return (0, E.jsxs)(ij.n, {
            label: j.intl.string(j.t.nzUc3B),
            description: j.intl.format(j.t.u9RWmv, { helpdeskArticle: ty.A.getArticleURL(U.MVz.SOUNDBOARD) }),
            children: [
                (0, E.jsx)(uo.A, {
                    guildId: t,
                    className: uC.Dt,
                    globalOption: { label: j.intl.string(j.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        i(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, E.jsxs)(uu.A, {
                    title: j.intl.format(j.t.I2TsYN, {
                        nitroWheelHook: () => (0, E.jsx)(ur.t, { size: "md", color: "currentColor", className: uC.ax }),
                    }),
                    children: [
                        (0, E.jsx)(u_, {
                            sound: s,
                            isGlobal: l,
                            onSelect: (i) => {
                                null == i ? (0, ug.Dv)(t, e) : (0, ug.un)(t, i, e);
                            },
                        }),
                        r &&
                            (0, E.jsx)(tv.p, {
                                className: uC.lm,
                                messageType: tv.Y.WARNING,
                                children: j.intl.string(j.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        });
    },
});
var uj = i(824744);
let uO = (0, a.sN)(u.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => j.intl.string(j.t.kbFsAD),
    useSubtitle: () => j.intl.format(j.t.BPbGq7, { helpCenterArticle: ty.A.getArticleURL(U.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [e6.A.USER_SETTINGS_VOICE_AND_VIDEO],
            i = (0, uj.w)(e);
        (0, ud.iy)(i, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, ug.wH)();
        return (0, uj.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var uR = i(864145);
let uL = (0, a.sN)(u.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => j.intl.string(j.t["2JbvKw"]),
        useSubtitle: () => j.intl.string(j.t.INenzY),
        setValue: function (e) {
            let t = (0, uj.w)(e);
            L.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = L.HO.getSetting();
            return (0, uj.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, uR.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    uD = (0, a.zZ)(u.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => j.intl.string(j.t.ABjMWI),
        buildLayout: () => [uO, uL, uy],
    });
var uP = i(803224),
    uG = i(552122);
let uM = (0, a.E2)(u.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [j.intl.string(j.t.fgSHf8)],
        usePredicate: () => null != uG.A.useHolidaySoundpack(),
        Component: () =>
            (0, E.jsx)(es.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: j.intl.format(j.t.Eup6Wv, {
                    onClick: () => (0, eq.openUserSettings)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    uU = (0, a.AK)(u.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.eyGEE4),
        useSearchTerms: () => [j.intl.string(j.t.eyGEE4)],
        destinationKey: u.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    uV = (0, a.gN)(u.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [uU] });
var uk = i(264686);
let uw = (0, nw.D)(() => ({ currentPlayingSound: null }));
function uF() {
    let e = uw.getField("currentPlayingSound");
    e?.stop(), uw.setState({ currentPlayingSound: null });
}
function uB(e) {
    let t = uw.getField("currentPlayingSound");
    t?.stop();
    let i = (0, l4.Ak)(e);
    uw.setState({ currentPlayingSound: i });
}
function uz(e) {
    return (0, a.zD)(`${u.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => j.intl.format(j.t.OOiGCM, { onClick: () => uB(e.sound) }),
        useSearchTerms: e.useSearchTerms,
        useValue: () => {
            let t = (0, g.bG)([uP.A], () => uP.A.isSoundDisabled(e.sound)),
                i = e.useDisabled?.();
            return !t && !i;
        },
        setValue: (t) => {
            let i = uP.A.getDisabledSounds().filter((t) => t !== e.sound);
            t || i.push(e.sound), uk.default.setDisabledSounds(i);
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                i = (0, g.bG)([uP.A], () => uP.A.getDisableAllSounds());
            return t || i;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let uY = [
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
    uX = (0, a.D1)(u.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? j.intl.formatToPlainString(j.t["0JYT98"], { count: t })
                : j.intl.formatToPlainString(j.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => sb(u.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                uF();
            };
        },
        buildLayout: () => uY.map((e) => uz(e)),
    }),
    uH = (0, a.zZ)(u.X.SOUNDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, g.bG)([uP.A], () => uP.A.getDisableAllSounds());
            return S.useMemo(() => {
                if (e)
                    return {
                        type: h.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        text: j.intl.format(j.t.fRvixS, {
                            onClick: () => (0, eq.openUserSettings)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                        }),
                    };
            }, [e]);
        },
        buildLayout: () => [uX, uM, uV],
    }),
    uK = (0, a.zD)(u.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => j.intl.string(j.t.e3Zz3F),
        useSubtitle: () => j.intl.string(j.t.RztTjP),
        useValue: function () {
            return !L.uh.useSetting();
        },
        setValue: function (e) {
            (0, op.A)("stream_previews_disabled", !e, L.uh.getSetting(), [e6.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                L.uh.updateSetting(!e);
        },
    }),
    uW = (0, a.zD)(u.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => j.intl.string(j.t.GmWk2E),
        useSearchTerms: () => [j.intl.string(j.t["Fj/xn1"])],
        useSubtitle: () => j.intl.string(j.t["Fj/xn1"]),
        useValue: function () {
            return (0, g.bG)([rw.Ay], () => rw.Ay.getVideoHook());
        },
        setValue: a8.A.setVideoHook,
        usePredicate: function () {
            return (0, g.bG)([rw.Ay], () => rw.Ay.supportsVideoHook());
        },
    }),
    uZ = (0, a.zD)(u.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => j.intl.string(j.t["4I0qzZ"]),
        useValue: function () {
            return (0, g.bG)([rw.Ay], () => rw.Ay.getExperimentalSoundshare());
        },
        setValue: a8.A.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, g.bG)([rw.Ay], () => {
                let e = rw.Ay.supportsExperimentalSoundshare(),
                    t = rw.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    uq = (0, a.zD)(u.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => j.intl.string(j.t["/jwMtn"]),
        useSubtitle: () => j.intl.string(j.t.zlA23F),
        useValue: function () {
            return (0, g.bG)([rw.Ay], () => rw.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [e6.A.USER_SETTINGS_VOICE_AND_VIDEO];
            a8.A.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return rw.Ay.supports(a1.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    uQ = (0, a.sN)(u.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => j.intl.string(j.t.fhEzfj),
        setValue: function (e) {
            let t = [e6.A.USER_SETTINGS_VOICE_AND_VIDEO];
            a8.A.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: rw.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            let e = (0, g.bG)([rw.Ay], () => rw.Ay.getSidechainCompression());
            return rw.Ay.supports(a1.O5.SIDECHAIN_COMPRESSION) && e;
        },
    }),
    uJ = (0, a.zD)(u.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
        useTitle: () => j.intl.string(j.t.lt8rRx),
        useSubtitle: () => j.intl.string(j.t.ie1mgY),
        useValue: function () {
            return (0, g.bG)([rw.Ay], () => rw.Ay.getUseSystemScreensharePicker());
        },
        setValue: function (e) {
            (0, c.cX)() && e
                ? (0, l2.A)({
                      title: j.intl.string(j.t["9jf31O"]),
                      subtitle: j.intl.string(j.t.uBd6JW),
                      variant: "primary",
                      onConfirm: () => {
                          a8.A.setUseSystemScreensharePicker(e), lC.A.app.relaunch();
                      },
                      confirmText: j.intl.string(j.t.BddRzS),
                  })
                : a8.A.setUseSystemScreensharePicker(e);
        },
        usePredicate: function () {
            return (0, g.bG)([rw.Ay], () => rw.Ay.supportsSystemScreensharePicker() && (0, c.cX)());
        },
    }),
    u$ = (0, a.bd)(u.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? j.intl.string(j.t.qrMyvm) : j.intl.string(j.t.LEtTNl)),
        useCollapsedSubtitle: () => sb(u.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [uq, uQ, uJ, uZ, uW],
    }),
    u0 = (0, a.zZ)(u.X.STREAMING_CATEGORY, { useTitle: () => j.intl.string(j.t.KDdjou), buildLayout: () => [uK, u$] });
var u1 = i(106713);
let u2 = (0, a.E2)(u.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = u1.A.useConfig({ location: "MicrophoneInputSelect" });
            return (0, E.jsx)(aQ.U, {
                label: j.intl.string(j.t.UTM8VP),
                deviceType: a1.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    u3 = (0, a.E2)(u.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = u1.A.useConfig({ location: "SpeakerOutputSelect" });
            return (0, E.jsx)(aQ.U, {
                label: j.intl.string(j.t.xuYQ0n),
                deviceType: a1.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    u5 = (0, a.zC)(u.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [u2, u3] }),
    u6 = (0, a.sN)(u.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => j.intl.string(j.t.Rtsr6w),
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = rw.Ay.getInputVolume();
            return (0, uj.M)(e);
        },
        asValueChanges: function (e) {
            let t = [e6.A.USER_SETTINGS_VOICE_AND_VIDEO],
                i = (0, uj.w)(e);
            a8.A.setInputVolume(i, { analyticsLocations: t });
        },
    }),
    u4 = (0, a.sN)(u.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => j.intl.string(j.t.aUJ062),
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = rw.Ay.getOutputVolume();
            return (0, uj.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [e6.A.USER_SETTINGS_VOICE_AND_VIDEO],
                i = (0, uj.w)(e);
            a8.A.setOutputVolume(i, { analyticsLocations: t });
        },
    }),
    u8 = (0, a.zC)(u.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [u6, u4] });
var u7 = i(702841),
    u9 = i(349288),
    de = i(152567),
    dt = i(141218);
let di = `${ty.A.getArticleURL(U.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    dn = (0, a.E2)(u.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.nuFtHH)],
        usePredicate: function () {
            return (0, u7.bG)([rw.Ay], () => rw.Ay.supports(a1.O5.LOOPBACK));
        },
        Component: function () {
            return (0, u7.bG)([rw.Ay], () => rw.Ay.supports(a1.O5.LOOPBACK))
                ? (0, E.jsx)(de.A, {
                      size: "md",
                      notchBackground: de.V.GRAY,
                      captionVoice: j.intl.string(j.t.bp3JOV),
                      captionNoVoice: (0, E.jsxs)(E.Fragment, {
                          children: [
                              (0, E.jsx)(es.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-default",
                                  children: j.intl.string(j.t.bgn75v),
                              }),
                              j.intl.string(j.t["MA+OZh"]),
                              (0, E.jsx)(u9.Anchor, {
                                  className: dt.X,
                                  href: ty.A.getArticleURL(U.MVz.NO_INPUT_DETECTED),
                                  children: j.intl.string(j.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: j.intl.format(j.t["V+B3FH"], { guideURL: di }),
                      buttonTest: j.intl.string(j.t.gyljWE),
                      buttonStop: j.intl.string(j.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: U.liQ.USER_SETTINGS, section: U.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    ds = eZ.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function dl(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: i } = e;
    return (0, E.jsxs)(Q.B, {
        children: [
            i && (0, E.jsx)(rY, { sourcePage: "voice" }),
            t && (0, E.jsx)(af.A, { look: af.k.WARNING, children: j.intl.string(j.t.Ioz3gx) }),
        ],
    });
}
let dr = (0, a.zZ)(u.X.VOICE_CATEGORY, {
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
            let e = rz("voice"),
                t = (0, aJ.x5)(a1.oh.AUDIO_INPUT),
                i = (0, aJ.x5)(a1.oh.AUDIO_OUTPUT),
                n = S.useMemo(() => {
                    let e = ds.some((e) => t?.hardwareId?.startsWith(e)),
                        n = ds.some((e) => i?.hardwareId?.startsWith(e));
                    return e && n && t?.containerId != null && t.containerId === i?.containerId;
                }, [t, i]);
            return S.useMemo(
                () =>
                    e.canPrompt || n
                        ? {
                              type: h.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, E.jsx)(dl, {
                                      inputAndOutputAreBluetooth: n,
                                      canPromptSystemServiceInstallForVoice: e.canPrompt,
                                  }),
                          }
                        : null,
                [e.canPrompt, n],
            );
        },
        buildLayout: () => [u5, u8, dn],
    }),
    da = (0, a.t_)(u.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => j.intl.string(j.t.B1fFpf),
        buildLayout: () => [dr, ul, a4, u0, uH, uD, oC],
    }),
    du = (0, a.i4)(u.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.B1fFpf),
        usePredicate: () => rw.Ay.isSupported(),
        icon: aF.c,
        useMenu: aB.A,
        buildLayout: () => [da],
    }),
    dd = (0, a.WI)(u.X.APP_SECTION, {
        useTitle: () => j.intl.string(j.t.gcyH1J),
        buildLayout: () => [du, lq, sd, rM, aw, l0],
    });
var dc = i(360669),
    dg = i(974544),
    dm = i(423764),
    dA = i(289873),
    dh = i(132500),
    dE = i(465323),
    dS = i(37766),
    dT = i(194261),
    dx = i(391048),
    dp = i(277984),
    df = i(99696),
    dN = i(202613),
    d_ = i(615405),
    dI = i(580630),
    dC = i(83617),
    db = i(935208),
    dv = i(607399),
    dy = i(150934),
    dj = i(256006),
    dO = i(198970),
    dR = i(71532);
let dL = /[^0-9/]/g,
    dD = /[^0-9]/g;
class dP extends S.PureComponent {
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
                ((n = (i = e.replace(dL, "").split("/"))[0]),
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
            ? (u = u.replace(dD, ""))
            : u === r && e.includes("/") && !r.includes("/") && (u += "/"),
            u.length > e.length && (d += u.length - e.length),
            (this.selectionStart = d),
            null != a && a(u, t);
    };
    render() {
        return (0, E.jsx)(rq.k, {
            ...this.props,
            inputMode: "numeric",
            onChange: this.handleChange,
            inputRef: this.setRef,
        });
    }
}
var dG = i(832208),
    dM = i(729919);
let dU = [
        {
            fields: [
                {
                    expirationDate: {
                        name: "expirationDate",
                        id: (0, sJ.Ld)(),
                        title: () => j.intl.string(j.t["CeBa/4"]),
                        autoComplete: "cc-exp",
                        placeholder: () => j.intl.string(j.t.xeEWQ6),
                        pattern: "\\d*",
                        getClassNameForLayout: () => dM.ep,
                        renderInput: (e) => (0, E.jsx)(dP, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    dV = function (e) {
        let { onCardInfoChange: t, className: i, expirationDate: n, error: s } = e,
            [l, r] = S.useState(!1),
            [a, o] = S.useState(null),
            [u, d] = S.useState(n);
        return (
            S.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, E.jsx)(dG.A, {
                className: i,
                form: dU,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: s,
                onFieldChange: function (e) {
                    l || "" === e || r(!0),
                        (l && "" === e) || !(0, dR.So)(e) ? o(j.intl.string(j.t["9/zZdl"])) : o(null),
                        d(e);
                },
            })
        );
    };
var dk = i(219887),
    dw = i(520229);
let dF = "isDefault";
class dB extends S.PureComponent {
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
            expiresMonth: t instanceof dN.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof dN.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: i,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        sm.h.wait(() => {
            (0, dp.ey)(), (0, dp.tc)();
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
                      className: dw.zc,
                      children: (0, E.jsx)(q.w, { type: "critical", children: t.message }),
                  })
                : null
            : (0, E.jsx)("div", {
                  className: dw.zc,
                  children: (0, E.jsx)(q.w, { type: "critical", children: e.message }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: i } = this.props,
            n = (0, dj.g)(i);
        return (0, E.jsxs)("div", {
            className: dw.yV,
            children: [
                (0, E.jsx)(es.E, {
                    className: dw.bV,
                    variant: "text-sm/normal",
                    children: j.intl.string(j.t["50Auo2"]),
                }),
                (0, E.jsx)(dO.Ay, {
                    ...e,
                    mode: dO.Ay.Modes.EDIT,
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
            className: dw.yV,
            children: [
                (0, E.jsx)(es.E, { className: dw.bV, variant: "text-sm/normal", children: j.intl.string(j.t.Fo2YP7) }),
                (0, E.jsx)(dV, {
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
            className: dw.AU,
            children: (0, E.jsxs)(Q.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, E.jsx)(on.e, {
                        children: (0, E.jsxs)("div", {
                            className: dw.lH,
                            children: [
                                i
                                    ? (0, E.jsx)(td.m, {
                                          text: j.intl.string(j.t["v6/z28"]),
                                          children: (0, E.jsx)("div", { "aria-hidden": !0, className: dw.dm }),
                                      })
                                    : null,
                                (0, E.jsx)(ek.$, {
                                    type: "button",
                                    disabled: i || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: dv.Fr ? "sm" : "md",
                                    text: dv.Fr ? j.intl.string(j.t.oyYWHE) : j.intl.string(j.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, E.jsxs)(on.e, {
                        children: [
                            (0, E.jsx)(ek.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: dv.Fr ? "sm" : "md",
                                text: j.intl.string(j.t["ETE/oC"]),
                            }),
                            (0, E.jsx)(ek.$, {
                                loading: e,
                                disabled: !n || t || !s,
                                type: "submit",
                                variant: "active",
                                size: dv.Fr ? "sm" : "md",
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
            r = e instanceof dN.SJ;
        return (0, E.jsx)(eO.Z, {
            editable: !0,
            className: e7()(dw.Nr, n),
            children: (0, E.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, E.jsxs)("div", {
                        className: dw.__invalid_paymentSection,
                        children: [
                            (0, E.jsx)(dk.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: s,
                                locale: i,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, E.jsx)("div", { className: dw.Um, children: j.intl.string(j.t["3R0U0b"]) })
                                : null,
                            (0, E.jsx)("div", {
                                className: dw.Sv,
                                children: r
                                    ? j.intl.format(j.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : j.intl.string(j.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, E.jsx)("div", {
                        className: dw.D5,
                        children: (0, E.jsx)(dy.S, {
                            value: dF,
                            checked: l,
                            onChange: (e) => this.handleFieldChange(e, dF),
                            label: j.intl.string(j.t.nag9Og),
                            labelType: "secondary",
                        }),
                    }),
                    (0, E.jsx)(ew.c, {}),
                    this.renderActions(),
                ],
            }),
        });
    }
}
let dz = g.Ay.connectStores([d_.A], () => ({ updateError: d_.A.editSourceError, removeError: d_.A.removeSourceError }))(
    dB,
);
var dY = i(776409),
    dX = i(743526),
    dH = i(455218);
function dK() {
    (0, df.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page", loadId: (0, dh.A)() });
}
class dW extends S.PureComponent {
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
            ? (0, E.jsx)(dz, {
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
                      n ? null : (0, E.jsx)(ew.c, { className: dH.__invalid_sourceDivider }),
                      (0, E.jsxs)("div", {
                          className: dH.Yb,
                          children: [
                              (0, E.jsx)(dk.A, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: s,
                                  locale: l,
                                  showSubtext: !0,
                                  showLabels: !0,
                                  showPaymentSourceIcon: !0,
                              }),
                              (0, E.jsx)(ek.$, {
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
let dZ = S.memo(function (e) {
    let { paymentSource: t, hideDivider: i, isForSubscription: n, locale: s, onRedeemClick: l } = e,
        [r, a] = S.useState(null),
        o = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, g.bG)([d_.A], () => d_.A.ipCountryCode),
        d = S.useMemo(() => (0, dE.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        S.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : dp.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, E.jsxs)(E.Fragment, {
            children: [
                i ? null : (0, E.jsx)(ew.c, { className: dH.__invalid_sourceDivider }),
                (0, E.jsxs)("div", {
                    className: dH.Yb,
                    children: [
                        void 0 !== t
                            ? (0, E.jsx)(dk.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: n,
                                  locale: s,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, E.jsxs)(r0.A, {
                                  align: r0.A.Align.CENTER,
                                  children: [
                                      (0, E.jsx)(dS._, { size: "lg" }),
                                      (0, E.jsx)(es.E, {
                                          variant: "text-sm/medium",
                                          className: dX.Wi,
                                          children: j.intl.string(dY.default["/FQWfA"]),
                                      }),
                                  ],
                              }),
                        (0, E.jsxs)("div", {
                            className: dH.zy,
                            children: [
                                (0, E.jsx)("div", {
                                    className: dH.Tq,
                                    children:
                                        null == r
                                            ? (0, E.jsx)(dA.y, { type: dA.y.Type.SPINNING_CIRCLE })
                                            : (0, E.jsx)(es.E, {
                                                  variant: "text-sm/medium",
                                                  children: (function () {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          i = t ?? d,
                                                          n = String(i).toUpperCase(),
                                                          s = (0, dI.$g)(e ?? 0, i, {
                                                              currencyDisplay: "narrowSymbol",
                                                          });
                                                      return `${n} ${s}`;
                                                  })(),
                                              }),
                                }),
                                (0, E.jsx)(ek.$, {
                                    variant: "secondary",
                                    onClick: l,
                                    size: "sm",
                                    text: j.intl.string(dY.default.hnRau6),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class dq extends S.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            await dp.Gr(e), this.setState({ editingPayment: e });
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            await dp.JQ(e), this.setState({ editingPayment: null });
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                await dp.Ps(e, t), this.setState({ editingPayment: null });
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, dC.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, K.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 362111));
                return (t) => (0, E.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, dx.ET)();
                },
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, E.jsxs)("div", {
            className: dH.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, E.jsxs)("div", {
                          className: dH.z8,
                          children: [
                              (0, E.jsx)(es.E, { variant: "text-sm/normal", children: j.intl.string(j.t.aRHpAB) }),
                              (0, E.jsx)(es.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: dH.Sv,
                                  children: j.intl.string(j.t.o9bOIl),
                              }),
                          ],
                      })
                    : null,
                (0, E.jsx)(ek.$, { onClick: this.handleAddPaymentMethod, text: j.intl.string(j.t.CpOiEO) }),
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
            u = e$()
                .values(n)
                .sort((e, t) => (e.id === i ? -1 : t.id === i ? 1 : db.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof dN.LQ)),
            c = u.filter((e) => e instanceof dN.LQ),
            g = this.state.editingPayment,
            m = d.findIndex((e) => e.id === g),
            A = d.map((e, t) =>
                (0, E.jsx)(
                    dW,
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
                              dZ,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || m === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: s,
                                  onRedeemClick: dK,
                              },
                              e.id,
                          ),
                      )
                    : (0, E.jsx)(dZ, {
                          hideDivider: 0 === d.length || m === d.length - 1,
                          isForSubscription: !1,
                          locale: s,
                          onRedeemClick: dK,
                      })),
            (0, E.jsxs)(E.Fragment, {
                children: [
                    t
                        ? (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsxs)(eV.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, E.jsx)(dT.X, { size: "sm", className: dH.hz }),
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
                    m !== d.length - 1 || (o && c.length > 0) ? (0, E.jsx)(ew.c, {}) : null,
                    this.renderFooter(),
                ],
            })
        );
    }
}
var dQ = i(459357),
    dJ = i(295405),
    d$ = i(166403),
    d0 = i(773669),
    d1 = i(844828);
function d2() {
    let e = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()?.storeCountry);
    return e?.country == null ? null : { country: e.country, countryName: (0, dm.Gw)(e.country) };
}
let d3 = (0, a.E2)(u.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                i = (0, g.bG)([d_.A], () => d_.A.isSyncing),
                n = (0, g.bG)([dJ.A], () => dJ.A.paymentSources),
                s = (0, g.bG)([dJ.A], () => dJ.A.defaultPaymentSourceId),
                l = (0, g.bG)([d0.default], () => d0.default.locale),
                r = (0, g.bG)([d$.A], () => d$.A.getPremiumTypeSubscription()),
                a = (0, g.bG)([d_.A], () => d_.A.isRemovingPaymentSource),
                o = (0, g.bG)([d_.A], () => d_.A.isUpdatingPaymentSource),
                { enabled: u } = (0, dQ.c)({ location: "UserSettingsBilling" });
            return (S.useEffect(() => {
                dp.$o(), dp.hP();
            }, []),
            i && 0 === Object.keys(n).length)
                ? (0, E.jsx)("div", { className: d1.o, children: (0, E.jsx)(dA.y, {}) })
                : (0, E.jsx)(dq, {
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
    d5 = (0, a.zZ)(u.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.W26xGQ),
        useSubtitle: () => {
            let e = d2();
            return null != e ? j.intl.format(j.t.e2t1G5, { country: e.countryName }) : j.intl.string(j.t.h6V3uK);
        },
        useSubtitleDecoration: function () {
            return null == d2()
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
        buildLayout: () => [d3],
    });
var d6 = i(549363),
    d4 = i(545075);
let d8 = (0, a.E2)(u.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            let e = (0, g.bG)([d0.default], () => d0.default.locale);
            return (0, E.jsxs)(E.Fragment, { children: [(0, E.jsx)(d4.kb, {}), (0, E.jsx)(d6.A, { locale: e })] });
        },
        useSearchTerms: () => [j.intl.string(j.t.obLrcK)],
    }),
    d7 = (0, a.zZ)(u.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => j.intl.string(j.t.obLrcK),
        buildLayout: () => [d8],
    }),
    d9 = (0, a.t_)(u.X.BILLING_PANEL, {
        useTitle: () => j.intl.string(j.t.oeUm2s),
        buildLayout: () => [d5, d7],
        useObscuredNotice: dg.L,
    }),
    ce = (0, a.i4)(u.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.oeUm2s),
        icon: dc.B,
        buildLayout: () => [d9],
    });
var ct = i(70283),
    ci = i(597770),
    cn = i(682618),
    cs = i(611881),
    cl = i(962644),
    cr = i(35587),
    ca = i(86379);
let co = (0, a.E2)(u.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: d4.uK,
        usePredicate: () => (0, ca.Hp)(),
        useSearchTerms: () => [j.intl.string(j.t.vwMEHS)],
    }),
    cu = (0, a.zZ)(u.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [co] });
var cd = i(982240),
    cc = i(788833),
    cg = i(914410),
    cm = i(360615),
    cA = i(215082);
function ch(e) {
    let { tier: t, active: i = !1 } = e;
    return (0, E.jsxs)("div", {
        className: e7()(cA.fO, { [cA.bF]: i }),
        children: [
            null != t.simple_icon_url && (0, E.jsx)("img", { src: t.simple_icon_url, alt: "", className: cA.si }),
            (0, E.jsxs)("div", {
                className: cA.tc,
                children: [
                    (0, E.jsx)(es.E, { variant: "text-sm/semibold", color: "text-subtle", children: t.name ?? "" }),
                    (0, E.jsx)(es.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: j.intl.format(cm.default.qvx9E4, { count: (0, cd.rL)(t) }),
                    }),
                ],
            }),
        ],
    });
}
function cE(e) {
    let { tiers: t, currentTier: i } = e;
    return (0, E.jsx)("div", {
        className: cA.dw,
        children: t.map((e) => (0, E.jsx)(ch, { tier: e, active: e.key === i?.key }, e.key)),
    });
}
function cS(e) {
    let { analyticsLocation: t, location: i } = e,
        { analyticsLocations: n } = (0, n1.Ay)(e6.A.USER_SETTINGS_GIFT_INVENTORY),
        { openGiftModal: s } = (0, cc.$)({
            giftRecipient: void 0,
            analyticsLocations: n,
            analyticsObject: { object: U.ZSU.BUTTON_CTA, objectType: U.AnalyticsObjectTypes.GIFT },
            analyticsLocation: t,
            location: i,
        });
    return (0, E.jsx)("div", {
        className: cA.NG,
        children: (0, E.jsx)(ek.$, {
            variant: "primary",
            icon: ci.o,
            text: j.intl.string(cm.default.DZnomS),
            onClick: s,
        }),
    });
}
function cT(e) {
    let t,
        { badgeProgress: i, currentTier: n, nextTier: s, giftsRemaining: l } = e,
        r = (0, cd.rL)(n),
        a = (0, cd.rL)(s),
        o = (0, cs.GZ)(i, n, s);
    return (
        (t =
            null != s
                ? j.intl.formatToPlainString(cm.default.XTX3OO, { count: l, nextTier: s?.name ?? "" })
                : j.intl.formatToPlainString(cm.default.LnsdbK, { currentTier: n?.name ?? "" })),
        (0, E.jsxs)("div", {
            className: cA.mY,
            children: [
                n?.simple_icon_url != null &&
                    (0, E.jsx)("div", {
                        className: cA.fC,
                        children: (0, E.jsx)("img", { src: n.simple_icon_url, alt: "", className: cA.qS }),
                    }),
                (0, E.jsxs)("div", {
                    className: cA.Qs,
                    children: [
                        (0, E.jsx)(es.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                        (0, E.jsx)(cg.Ay, { variant: cg.qP.BLUE, weight: cg.fh.MEDIUM, progress: o }),
                        (0, E.jsx)(es.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: cA.qg,
                            children: j.intl.format(cm.default.iIpfQe, {
                                threshold: null != s ? a : r,
                                count: null != s ? i : r,
                            }),
                        }),
                    ],
                }),
                s?.simple_icon_url != null &&
                    (0, E.jsx)("div", {
                        className: cA.fC,
                        children: (0, E.jsx)("img", { src: s.simple_icon_url, alt: "", className: cA.qS }),
                    }),
            ],
        })
    );
}
function cx(e) {
    let { analyticsLocation: t } = e,
        {
            badgeProgress: i,
            currentTier: n,
            nextTier: s,
            giftsRemaining: l,
            tiers: r,
        } = (0, g.cf)([cd.Ay], () => ({
            badgeProgress: cd.Ay.getSingleRequirementProgress(ct.$.GIFTING)?.current ?? 0,
            currentTier: cd.Ay.getCurrentTier(ct.$.GIFTING),
            nextTier: cd.Ay.getNextTier(ct.$.GIFTING),
            giftsRemaining: cd.Ay.getRemainingToNextTier(ct.$.GIFTING),
            tiers: cd.Ay.getBadgeById(ct.$.GIFTING)?.tiers ?? [],
        }));
    return 0 === r.length
        ? null
        : (0, E.jsxs)("div", {
              className: cA.kL,
              children: [
                  (0, E.jsxs)("div", {
                      className: cA.Jo,
                      children: [
                          i > 0 &&
                              (0, E.jsxs)(E.Fragment, {
                                  children: [
                                      (0, E.jsx)(cT, {
                                          badgeProgress: i,
                                          currentTier: n,
                                          nextTier: s,
                                          giftsRemaining: l,
                                      }),
                                      (0, E.jsx)("div", { className: cA.yF }),
                                  ],
                              }),
                          (0, E.jsx)(cE, { tiers: r, currentTier: n }),
                          (0, E.jsx)(es.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: cA.PJ,
                              children: j.intl.string(cm.default["4Yp0mI"]),
                          }),
                      ],
                  }),
                  (0, E.jsx)(cS, { analyticsLocation: t, location: "UserSettingsGiftingBadgeProgress" }),
              ],
          });
}
let cp = (0, a.zZ)(u.X.GIFTING_BADGE_CATEGORY, {
        useTitle: () => j.intl.string(cm.default.sFokBp),
        buildLayout: () => [cf],
        usePredicate: () => {
            let e = (0, cs.F5)("gift_inventory"),
                t = (0, g.bG)([cd.Ay], () => cd.Ay.getBadgeById(ct.$.GIFTING));
            return e && null != t;
        },
    }),
    cf = (0, a.E2)(u.X.GIFTING_BADGE_CONTENT, {
        useSearchTerms: () => [j.intl.string(cm.default.sFokBp)],
        Component: () => (0, E.jsx)(cx, {}),
    });
var cN = i(264779),
    c_ = i(412260),
    cI = i(3074),
    cC = i(725807),
    cb = i(212168),
    cv = i(469778),
    cy = i(45938),
    cj = i(109802),
    cO = i(869038),
    cR = i(221347);
function cL(e) {
    let { children: t, className: i, splashArtURL: n } = e;
    return (0, E.jsxs)(r0.A, {
        className: e7()(cR.wx, i),
        align: r0.A.Align.CENTER,
        children: [
            (0, E.jsx)("div", { className: cR.Bn, style: null != n ? { backgroundImage: `url(${n})` } : void 0 }),
            t,
        ],
    });
}
function cD(e) {
    let { children: t, className: i } = e;
    return (0, E.jsx)("div", { className: e7()(cR.rf, i), children: t });
}
class cP extends S.PureComponent {
    static Header = cL;
    static Body = cD;
    render() {
        let { children: e, className: t, onMouseEnter: i, onMouseLeave: n } = this.props;
        return (0, E.jsx)("div", { className: e7()(cR.Nr, t), onMouseEnter: i, onMouseLeave: n, children: e });
    }
}
var cG = i(165191),
    cM = i(871123),
    cU = i(366523),
    cV = i(280450),
    ck = i(30793),
    cw = i(97352),
    cF = i(67480),
    cB = i(147925),
    cz = i(957565),
    cY = i(615396),
    cX = i(990125);
class cH extends S.PureComponent {
    _copyModeTimeout = new oY.Ep();
    state = { copyMode: cj.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case cj.q.SUCCESS:
                return j.intl.string(j.t.XVvPjU);
            case cj.q.ERROR:
                return j.intl.string(j.t.i4GM3L);
            default:
                return j.intl.string(j.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        cO.A.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: i } = this.props;
        (0, cy.AK)(t, i),
            (0, cz.C)(
                e,
                () => this.setState({ copyMode: cj.q.SUCCESS }),
                () => this.setState({ copyMode: cj.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: cj.q.DEFAULT });
            });
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: i } = this.state;
        return (0, E.jsxs)(r0.A, {
            direction: r0.A.Direction.VERTICAL,
            className: cX.Gj,
            children: [
                (0, E.jsx)(cj.e, {
                    className: cX.ph,
                    value: (0, cy.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: i,
                    supportsCopy: cz.p5,
                    hideMessage: e ? j.intl.string(j.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: ot.XD.BRAND,
                    buttonLook: ot.pR.FILLED,
                }),
                (0, E.jsxs)("div", {
                    className: cX.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, E.jsxs)(S.Fragment, {
                                  children: [
                                      j.intl.format(j.t.ltVZcJ, { hours: t.expiresAt.diff(rl()(), "h") }),
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
class cK extends S.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: i, giftStyle: n } = this.props;
        this.setState({ isCreating: !0 }),
            await cO.A.createGiftCode(t, i, n),
            this.setState({ isCreating: !1, isOpen: !0 });
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: i } = this.props,
            n = !this.state.isOpen;
        (null == i || null == this._loadedAt || i < this._loadedAt) && n && cO.A.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen });
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: i } = this.props;
        return (0, cM.bF)(e)
            ? (0, E.jsx)(cU.e, { shape: "square", sku: e, containerClassName: cX.ez })
            : null != t
              ? (0, E.jsx)(cG.A, { giftStyle: t, className: cX.ez, shouldAnimate: this.state.isHovered })
              : (0, E.jsx)(p.A, { game: i, size: p.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: i } = this.props;
        return (0, cM.bF)(e)
            ? (0, E.jsxs)("div", {
                  className: e7()(cX.Oc, cX.ic),
                  children: [
                      (0, E.jsx)(p.A, { game: i, size: p.M.XSMALL, skuId: e.id, className: cX._u }),
                      j.intl.format(j.t["6plpZi"], { applicationName: i.name, copies: t.length }),
                  ],
              })
            : (0, E.jsx)("div", { className: cX.Oc, children: j.intl.format(j.t.zMcvcA, { copies: t.length }) });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: i, giftCodeBatchId: n } = this.props;
        return (
            (e =
                n === s0.FB
                    ? j.intl.string(j.t.odsU6W)
                    : n === s0.Bu && null != i
                      ? j.intl.formatToPlainString(i.interval === s0.WT.MONTH ? j.t.uZjpiJ : j.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: i.intervalCount,
                        })
                      : null == i
                        ? t.name
                        : j.intl.formatToPlainString(i.interval === s0.WT.MONTH ? j.t.rCJvqo : j.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: i.intervalCount,
                          })),
            (0, E.jsx)("div", { className: cX.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, E.jsxs)(r0.A, {
            justify: r0.A.Justify.BETWEEN,
            align: r0.A.Align.CENTER,
            className: cX.pe,
            children: [
                (0, E.jsx)(es.E, { variant: "text-md/normal", children: j.intl.string(j.t.lELyPj) }),
                (0, E.jsx)(ek.$, {
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
        return (0, E.jsxs)(cP, {
            className: n,
            children: [
                (0, E.jsx)(en.D, {
                    onClick: this.handleToggleOpen,
                    className: cX.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, E.jsx)(cP.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, E.jsxs)("div", {
                            className: cX.MY,
                            children: [
                                (0, E.jsxs)(r0.A, {
                                    align: r0.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, E.jsxs)("div", {
                                            className: cX.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, E.jsx)(cB.A, {
                                    direction: a ? cB.A.Directions.UP : cB.A.Directions.DOWN,
                                    className: cX.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, E.jsx)(cP.Body, {
                          children: l
                              ? (0, E.jsx)(dA.y, { className: cX.u1 })
                              : (0, E.jsxs)(S.Fragment, {
                                    children: [
                                        i.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        i.map((e) => (0, E.jsx)(cH, { giftCode: e, sku: s, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let cW = g.Ay.connectStores([cF.A, eX.A, ck.A, x.A, cw.A, cV.default], (e) => {
    let { skuId: t, subscriptionPlanId: i, giftStyle: n } = e,
        s = cF.A.get(t);
    if (null == s) throw Error("SKU was unavailable while rendering gift.");
    let l = ck.A.getForGifterSKUAndPlan(cV.default.getId(), t, i)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === n);
    return {
        sku: s,
        hideCodes: eX.A.enabled,
        isFetching: ck.A.getUserGiftCodesFetchingForSKUAndPlan(t, i),
        loadedAt: ck.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, i),
        application: x.A.getApplication(s.applicationId),
        subscriptionPlan: null != i ? (0, cY.c9)(i) : null,
        giftCodes: l,
    };
})(cK);
var cZ = i(725570),
    cq = i(736653),
    cQ = i(46054);
let cJ = rl().duration(30, "days");
var c$ = i(416052),
    c0 = i(53070);
function c1(e) {
    let { onClose: t, transitionState: i } = e;
    return (0, E.jsx)(rZ.Modal, {
        title: "",
        size: "md",
        input: (0, E.jsx)("div", { className: c0.aR }),
        onClose: async () => await t(),
        actions: [{ text: j.intl.string(j.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: i,
        children: (0, E.jsxs)("div", {
            className: c0.t4,
            children: [
                (0, E.jsx)(eV.D, { variant: "heading-xl/semibold", children: j.intl.string(j.t.iufib1) }),
                (0, E.jsx)(es.E, { variant: "text-md/normal", className: c0.G3, children: j.intl.string(j.t.eAn6z2) }),
            ],
        }),
    });
}
let c2 = function (e) {
    let { onClose: t, onClaim: i, code: n, outboundPromotion: s, transitionState: l } = e,
        [r, a] = S.useState(null),
        o = (0, sJ.GV)(),
        { analyticsLocations: u } = (0, n1.Ay)(e6.A.USER_SETTINGS_GIFT_INVENTORY);
    return (S.useEffect(() => {
        null == n &&
            (0, cN.kd)({
                promotionId: s.id,
                promotionTitle: s.outboundTitle,
                partnerId: s.partnerId,
                analyticsLocations: u,
            })
                .then((e) => i(e))
                .catch((e) => a(e?.body?.code));
    }, [n, s.id, s.outboundTitle, s.partnerId, i, u]),
    null != r)
        ? (0, E.jsx)(c1, { onClose: t, transitionState: l })
        : null == n
          ? (0, E.jsx)(dA.y, { className: c0.Lq })
          : (0, E.jsx)(rZ.Modal, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, E.jsxs)("div", {
                    className: c0.N1,
                    children: [
                        (0, E.jsx)("div", { className: c0.Qw }),
                        (0, E.jsx)(eV.D, { variant: "heading-xl/semibold", children: j.intl.string(j.t["23BfZh"]) }),
                        (0, E.jsx)(es.E, {
                            variant: "text-md/normal",
                            className: c0.G3,
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
                            let e = (0, cN.kc)(n, s);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: l,
                "aria-label": o,
                children: (0, E.jsxs)("div", {
                    children: [
                        (0, E.jsx)(ew.c, { className: c0.M5 }),
                        (0, E.jsx)(s7.D, {
                            label: j.intl.string(j.t.s9LFQh),
                            helperText: j.intl.string(j.t["F+nFTZ"]),
                            children: (0, E.jsx)(c$.A, {
                                value: n,
                                buttonColor: ot.$n.Colors.BRAND,
                                buttonLook: ot.$n.Looks.FILLED,
                                delay: 1e3,
                            }),
                        }),
                    ],
                }),
            });
};
var c3 = i(707554),
    c5 = i(339048),
    c6 = i(104589);
function c4() {
    let e = (0, g.yK)([cv.A], () => cv.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        t = e$().groupBy(e, (e) => (0, cy.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [i, n] = S.useState(!1);
    if (
        (S.useEffect(() => {
            sm.h.wait(() => {
                (0, c5.XJ)().then(() => n(!0));
            });
        }, []),
        !i)
    )
        return (0, E.jsx)(dA.y, { className: c6.Lq });
    if (0 === Object.keys(t).length)
        return (0, E.jsxs)("div", {
            className: c6.p$,
            children: [
                (0, E.jsx)("div", { className: c6.QT }),
                (0, E.jsx)(c3.H, { className: c6.ks, children: j.intl.string(j.t.B1qgZn) }),
                (0, E.jsx)("p", {
                    className: c6.WO,
                    children: j.intl.format(j.t.HezvJ8, {
                        onClick: function () {
                            (0, eq.openUserSettings)(u.X.NITRO_PANEL);
                        },
                    }),
                }),
            ],
        });
    let s = e$()
        .keys(t)
        .map((e) => {
            let { skuId: i, subscriptionPlanId: n, giftStyle: s } = (0, cy.X6)(e);
            return (0, E.jsx)(cW, { skuId: i, subscriptionPlanId: n, entitlements: t[e], giftStyle: s }, e);
        });
    return (0, E.jsx)(Q.B, { gap: "lg", children: s });
}
function c8(e) {
    let t,
        { outboundPromotion: i, code: n } = e,
        [s, l] = S.useState(!1),
        [r, a] = S.useState(!1);
    function o() {
        return l((e) => !e);
    }
    let u = (0, cq.Ay)(),
        d = (0, cN.WD)(i.id, u),
        c = null != n,
        g = S.useMemo(
            () =>
                (0, rr.i$)(
                    c
                        ? null != i.outboundRedemptionEndDate
                            ? rl()(i.outboundRedemptionEndDate)
                            : rl()(i.endDate).add(cJ)
                        : rl()(i.endDate),
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
        A = !0 === (0, cI.N)(i),
        h = S.useCallback(() => a(!1), []),
        { outboundTitle: T, outboundTermsAndConditions: x } = i;
    return (0, E.jsxs)(E.Fragment, {
        children: [
            (0, E.jsxs)("div", {
                className: c6.AX,
                children: [
                    (0, E.jsxs)("div", {
                        className: c6.Pg,
                        children: [
                            (0, E.jsxs)("div", {
                                className: c6.At,
                                children: [
                                    (0, E.jsx)("div", {
                                        className: c6.$G,
                                        children: (0, E.jsx)("img", { alt: "", src: d, className: c6.IJ }),
                                    }),
                                    (0, E.jsxs)("div", {
                                        children: [
                                            (0, E.jsx)(eV.D, { variant: "heading-md/semibold", children: T }),
                                            (0, E.jsx)(es.E, {
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                children: t,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (c || A) && (0, E.jsx)(ek.$, { text: m, onClick: () => a(!0), size: "sm" }),
                        ],
                    }),
                    s &&
                        (0, E.jsx)(es.E, {
                            className: c6.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: cQ.A.parse(x, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            r &&
                (0, E.jsx)(cZ.aF, {
                    renderModal: (e) =>
                        (0, E.jsx)(c2, {
                            ...e,
                            onClose: h,
                            onClaim: cl.Ay.addClaimedOutboundPromotionCode,
                            code: n,
                            outboundPromotion: i,
                        }),
                    onCloseRequest: h,
                }),
        ],
    });
}
function c7(e) {
    let { redesign: t = !1 } = e,
        i = (0, g.yK)([cv.A], () => cv.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null != t;
        }),
        n = (0, cI.N)(),
        {
            activeOutboundPromotions: s,
            claimedEndedOutboundPromotions: l,
            claimedOutboundPromotionCodeMap: r,
        } = (0, cr.y7)(),
        a = i.find((e) => e.giftCodeBatchId === s0.FB && !e.consumed),
        o = i.filter((e) => e.giftCodeBatchId === s0.Bu && !e.consumed) ?? [],
        [u, d] = e$().partition(o, (e) => {
            let { subscriptionPlanId: t } = e;
            return t === s0.gD.PREMIUM_YEAR_TIER_2;
        }),
        c = s.length + l.length > 0,
        m =
            t || !c
                ? null
                : (0, E.jsxs)("div", {
                      className: c6.N1,
                      children: [
                          (0, E.jsx)(eV.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.wFsj3B) }),
                          (0, E.jsx)(ew.c, { className: c6.yF }),
                      ],
                  }),
        A =
            !1 === n && c
                ? (0, E.jsxs)("div", {
                      className: c6.uo,
                      children: [
                          (0, E.jsx)(ur.t, {
                              size: "md",
                              color: er.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: c6.PC,
                          }),
                          (0, E.jsx)(es.E, {
                              variant: "text-md/normal",
                              className: c6.Qw,
                              children: j.intl.format(j.t.G4fwxK, {
                                  onClick: () => {
                                      (0, sZ.default)(), (0, s9.pX)(U.BVt.APPLICATION_STORE);
                                  },
                              }),
                          }),
                          (0, E.jsx)(cC.A, {
                              showGradient: !0,
                              className: c6.aA,
                              subscriptionTier: s0.pe.TIER_2,
                              textOptions: { textOverride: j.intl.string(j.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
    return (0, E.jsxs)("div", {
        children: [
            m,
            (0, E.jsx)(cb.A, {
                className: c6.Yj,
                isShown: !1 === n && c,
                type: cb.i.PREMIUM,
                hasBackground: !0,
                children: (0, E.jsxs)("div", {
                    className: c6.DE,
                    children: [
                        A,
                        l.map((e) => {
                            let { code: t, promotion: i } = e;
                            return (0, E.jsx)(c8, { outboundPromotion: i, code: t }, i.id);
                        }),
                        s.map((e) => (0, E.jsx)(c8, { outboundPromotion: e, code: r[e.id] }, e.id)),
                        null != a
                            ? (0, E.jsx)(
                                  cW,
                                  {
                                      skuId: a.skuId,
                                      subscriptionPlanId: a.subscriptionPlanId,
                                      entitlements: [a],
                                      giftCodeBatchId: s0.FB,
                                  },
                                  (0, cy.Kx)(a.skuId, a.subscriptionPlanId),
                              )
                            : null,
                        u.length > 0
                            ? (0, E.jsx)(
                                  cW,
                                  {
                                      skuId: u[0].skuId,
                                      subscriptionPlanId: u[0].subscriptionPlanId,
                                      entitlements: u,
                                      giftCodeBatchId: s0.Bu,
                                  },
                                  (0, cy.Kx)(u[0].skuId, u[0].subscriptionPlanId),
                              )
                            : null,
                        d.length > 0
                            ? (0, E.jsx)(
                                  cW,
                                  {
                                      skuId: d[0].skuId,
                                      subscriptionPlanId: d[0].subscriptionPlanId,
                                      entitlements: d,
                                      giftCodeBatchId: s0.Bu,
                                  },
                                  (0, cy.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                    ],
                }),
            }),
        ],
    });
}
let c9 = (0, a.zZ)(u.X.MY_GIFTS_CATEGORY, {
        useTitle: gt,
        buildLayout: () => [ge],
        usePredicate: () => {
            let { claimedOutboundPromotionCodes: e, claimedOutboundPromotionCodesLoaded: t } = (0, g.cf)(
                    [c_.A],
                    () => ({
                        claimedOutboundPromotionCodes: c_.A.claimedOutboundPromotionCodes,
                        claimedOutboundPromotionCodesLoaded: c_.A.claimedOutboundPromotionCodesLoaded,
                    }),
                ),
                i = (0, cr.T1)({ includeClaimedPromotions: !0 }),
                n = (0, cN.Wl)(e, i).length;
            return t && i.length + n > 0;
        },
    }),
    ge = (0, a.E2)(u.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [gt()],
        Component: () => (0, E.jsx)(c7, { redesign: !0 }),
    });
function gt() {
    return j.intl.string(j.t.YzjdWJ);
}
let gi = (0, a.zZ)(u.X.PURCHASED_GIFTS_CATEGORY, { useTitle: gs, buildLayout: () => [gn] }),
    gn = (0, a.E2)(u.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [gs()], Component: () => (0, E.jsx)(c4, {}) });
function gs() {
    return j.intl.string(j.t.FWe6CP);
}
var gl = i(532446),
    gr = i(499454);
class ga extends S.Component {
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
                    await (0, df.Qp)(i),
                        (0, df.HF)({
                            initialCode: i,
                            withRedemptionSuccessModal: !0,
                            source: "user_settings_gift_code_redemption",
                            loadId: (0, dh.A)(),
                        }),
                        this.setState({ codeInput: "" });
                    return;
                } catch {}
            let e = (0, cy.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let n = await cO.A.resolveGiftCode(e);
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
                (0, gr.h)({ processedCode: e }),
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
        return (0, E.jsx)(ij.n, {
            label: e ? void 0 : j.intl.string(j.t["il+VCo"]),
            children: (0, E.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, E.jsxs)(gl.M, {
                    children: [
                        (0, E.jsx)(rq.k, {
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
                        (0, E.jsx)(ek.$, {
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
function go(e) {
    let { redesign: t = !1 } = e,
        { enabled: i } = (0, dQ.c)({ location: "UserSettingsBilling" }),
        n = S.useContext(G.AnalyticsContext),
        s = (0, g.bG)([eX.A], () => eX.A.enabled);
    return (0, E.jsx)(ga, { analyticsContext: n, obscureInput: s, acceptGiftCardRedemption: i, redesign: t });
}
let gu = (0, a.zZ)(u.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => j.intl.string(j.t["il+VCo"]),
        buildLayout: () => [gd],
        usePredicate: () => !(0, ca.Hp)(),
    }),
    gd = (0, a.E2)(u.X.REDEEM_CODE_INPUT, {
        Component: () => (0, E.jsx)(go, { redesign: !0 }),
        useSearchTerms: () => [j.intl.string(j.t["jcSP+g"]), j.intl.string(j.t["il+VCo"])],
    }),
    gc = (0, a.t_)(u.X.GIFT_PANEL, {
        useTitle: () => j.intl.string(j.t["jcSP+g"]),
        buildLayout: () => [gu, c9, cp, gi, cu],
        initialize: () => {
            cl.Ay.fetchClaimedOutboundPromotionCodes(), (0, cs.Ig)("gift_inventory") && (0, cn.o0)(ct.$.GIFTING);
        },
    }),
    gg = (0, a.i4)(u.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["jcSP+g"]),
        icon: ci.o,
        usePersistentBadge: function () {
            let e = (0, cr.IO)().length;
            return S.useMemo(() => ({ badgeType: h.Xi.COUNT, count: e }), [e]);
        },
        buildLayout: () => [gc],
    });
var gm = i(659758),
    gA = i(334591),
    gh = i(815846);
let gE = (0, a.E2)(u.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, g.bG)([iA.default], () => iA.default.getCurrentUser());
            return (0, uh.YE)(e, s0.PremiumTypes.TIER_2) ? (0, E.jsx)(gh.A, {}) : (0, E.jsx)(gA.A, {});
        },
        useSearchTerms: () => [j.intl.string(j.t.Ipxkog)],
    }),
    gS = (0, a.zZ)(u.X.NITRO_CATEGORY, { buildLayout: () => [gE] }),
    gT = (0, a.t_)(u.X.NITRO_PANEL, {
        useTitle: () => j.intl.string(j.t.Ipxkog),
        useObscuredNotice: dg.L,
        buildLayout: () => [gS],
    }),
    gx = (0, a.i4)(u.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.Ipxkog),
        icon: ur.t,
        usePersistentBadge: function (e) {
            let t = (0, gm.e)(e);
            return S.useMemo(() => ({ badgeType: h.Xi.STRONGLY_DISCOURAGED_CUSTOM, customBadge: t }), [t]);
        },
        buildLayout: () => [gT],
    });
var gp = i(104510),
    gf = i(820739),
    gN = i(73825),
    g_ = i(160946);
let gI = (0, i(240921).Ay)({
    name: "2026-03-boosting-settings-refresh",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var gC = i(859241),
    gb = i(531260),
    gv = i(369163),
    gy = i(957485),
    gj = i(926268),
    gO = i(253449),
    gR = i(93364);
function gL(e) {
    let { className: t, icon: i, children: n } = e;
    return (0, E.jsxs)("li", {
        className: e7()(gO.Nr, t),
        children: [
            (0, E.jsx)(i, { className: gO.Kk }),
            (0, E.jsx)(es.E, { className: gO.__invalid_description, variant: "text-sm/medium", children: n }),
        ],
    });
}
let gD = function (e) {
    let { cardClassName: t } = e;
    return (0, E.jsxs)("div", {
        className: gO.iE,
        children: [
            (0, E.jsxs)("div", {
                className: gO.Qs,
                children: [
                    (0, E.jsx)(eV.D, {
                        className: gO.R_,
                        color: "text-overlay-light",
                        variant: "heading-xxl/bold",
                        children: j.intl.string(j.t.IzKs3o),
                    }),
                    (0, E.jsxs)("ul", {
                        className: gO.kR,
                        children: [
                            (0, E.jsx)(gL, { className: t, icon: gv.v, children: j.intl.string(j.t.TZigSO) }),
                            (0, E.jsx)(gL, {
                                className: t,
                                icon: (e) =>
                                    (0, E.jsx)("img", { className: e7()(e.className, gO.Dp), src: gR, alt: "" }),
                                children: j.intl.string(j.t.hjQuV2),
                            }),
                            (0, E.jsx)(gL, { className: t, icon: gy.i, children: j.intl.string(j.t["2RUcaM"]) }),
                            (0, E.jsx)(gL, { className: t, icon: gj.C, children: j.intl.string(j.t.bJoZKV) }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)("div", { className: gO.JP }),
        ],
    });
};
var gP = i(834040),
    gG = i(999747);
let gM = [
        { getQuestion: () => j.intl.string(j.t.C4J8UB), getAnswer: () => j.intl.string(j.t.nhkk6k) },
        {
            getQuestion: () => j.intl.string(j.t.ai4ym2),
            getAnswer: () =>
                j.intl.format(j.t["8zlqlD"], { helpCenterUrl: ty.A.getArticleURL(U.MVz.GUILD_BOOSTING_FAQ) }),
        },
        { getQuestion: () => j.intl.string(j.t.kMVGsC), getAnswer: () => j.intl.string(j.t["Vz/SCQ"]) },
        { getQuestion: () => j.intl.string(j.t.kYmXWF), getAnswer: () => j.intl.string(j.t["+OURPp"]) },
        { getQuestion: () => j.intl.string(j.t["LsX/vb"]), getAnswer: () => j.intl.string(j.t["3TeauK"]) },
        { getQuestion: () => j.intl.string(j.t.fRlnXU), getAnswer: () => j.intl.string(j.t.bTRacj) },
        { getQuestion: () => j.intl.string(j.t["8Mu5Q9"]), getAnswer: () => j.intl.string(j.t["2T5iPo"]) },
        { getQuestion: () => j.intl.string(j.t["6EN+TZ"]), getAnswer: () => j.intl.string(j.t.NZax1u) },
        { getQuestion: () => j.intl.string(j.t.f5B4EW), getAnswer: () => j.intl.string(j.t.Aje8Pb) },
    ],
    gU = function (e) {
        let { className: t } = e,
            [i, n] = S.useState(null);
        return (0, E.jsxs)("div", {
            className: e7()(gG.iE, t),
            children: [
                (0, E.jsx)(eV.D, {
                    className: gG.R_,
                    variant: "heading-xxl/bold",
                    children: j.intl.string(j.t.HPJ6Nj),
                }),
                (0, E.jsx)("ul", {
                    className: gG.p_,
                    children: gM.map((e, t) => {
                        let s = i === t;
                        return (0, E.jsxs)(
                            "div",
                            {
                                className: gG.Aw,
                                children: [
                                    (0, E.jsxs)(en.D, {
                                        className: e7()(gG.k7, { [gG.lo]: s }),
                                        onClick: () => n((e) => (e === t ? null : t)),
                                        tag: "li",
                                        children: [
                                            (0, E.jsx)(es.E, {
                                                className: gG.b1,
                                                variant: "text-lg/normal",
                                                children: e.getQuestion(),
                                            }),
                                            s
                                                ? (0, E.jsx)(gP.Q, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: gG.q4,
                                                  })
                                                : (0, E.jsx)(rU.j, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: gG.q4,
                                                  }),
                                        ],
                                    }),
                                    s &&
                                        (0, E.jsx)(es.E, {
                                            className: gG.ZF,
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
var gV = i(462887),
    gk = i(933832),
    gw = i(789645),
    gF = i(116891),
    gB = i(537532);
let gz = [
    {
        getPerkHeading: () => j.intl.string(j.t.tIiwuj),
        getPerkPreviewLightTheme: () => i(604203),
        getPerkPreviewDarkTheme: () => i(878515),
        getTier0Value: () => s0.TG[U.TVA.NONE].limits.emoji,
        getTier1Value: () => s0.TG[U.TVA.TIER_1].limits.emoji,
        getTier2Value: () => s0.TG[U.TVA.TIER_2].limits.emoji,
        getTier3Value: () => s0.TG[U.TVA.TIER_3].limits.emoji,
    },
    {
        getPerkHeading: () => j.intl.string(j.t["3iccet"]),
        getPerkPreviewLightTheme: () => i(105732),
        getPerkPreviewDarkTheme: () => i(857020),
        getTier0Value: () => s0.TG[U.TVA.NONE].limits.stickers,
        getTier1Value: () => s0.TG[U.TVA.TIER_1].limits.stickers,
        getTier2Value: () => s0.TG[U.TVA.TIER_2].limits.stickers,
        getTier3Value: () => s0.TG[U.TVA.TIER_3].limits.stickers,
    },
    {
        getPerkHeading: () => j.intl.string(j.t["+smCv9"]),
        getPerkPreviewLightTheme: () => i(597890),
        getPerkPreviewDarkTheme: () => i(297642),
        getTier0Value: () => s0.TG[U.TVA.NONE].limits.soundboardSounds,
        getTier1Value: () => s0.TG[U.TVA.TIER_1].limits.soundboardSounds,
        getTier2Value: () => s0.TG[U.TVA.TIER_2].limits.soundboardSounds,
        getTier3Value: () => s0.TG[U.TVA.TIER_3].limits.soundboardSounds,
    },
    {
        getPerkHeading: () => j.intl.string(j.t.SMYauD),
        getPerkPreviewLightTheme: () => i(323091),
        getPerkPreviewDarkTheme: () => i(261835),
        getTier0Value: () =>
            j.intl.formatToPlainString(j.t.zZ6Rdi, {
                resolution: s0.TG[U.TVA.NONE].limits.screenShareQualityResolution,
                framerate: s0.TG[U.TVA.NONE].limits.screenShareQualityFramerate,
            }),
        getTier1Value: () =>
            j.intl.formatToPlainString(j.t.zZ6Rdi, {
                resolution: s0.TG[U.TVA.TIER_1].limits.screenShareQualityResolution,
                framerate: s0.TG[U.TVA.TIER_1].limits.screenShareQualityFramerate,
            }),
        getTier2Value: () =>
            j.intl.formatToPlainString(j.t.zZ6Rdi, {
                resolution: (0, gF.eT)("GuildBoostingMarketingTierComparisonTable"),
                framerate: s0.TG[U.TVA.TIER_2].limits.screenShareQualityFramerate,
            }),
        getTier3Value: () =>
            j.intl.formatToPlainString(j.t.zZ6Rdi, {
                resolution: (0, gF.eT)("GuildBoostingMarketingTierComparisonTable"),
                framerate: s0.TG[U.TVA.TIER_3].limits.screenShareQualityFramerate,
            }),
    },
    {
        getPerkHeading: () => j.intl.string(j.t["/79IDj"]),
        getPerkPreviewLightTheme: () => i(913997),
        getPerkPreviewDarkTheme: () => i(95781),
        getTier0Value: () =>
            j.intl.formatToPlainString(j.t.w1gmLt, { bitrate: s0.TG[U.TVA.NONE].limits.bitrate / 1e3 }),
        getTier1Value: () =>
            j.intl.formatToPlainString(j.t.w1gmLt, { bitrate: s0.TG[U.TVA.TIER_1].limits.bitrate / 1e3 }),
        getTier2Value: () =>
            j.intl.formatToPlainString(j.t.w1gmLt, { bitrate: s0.TG[U.TVA.TIER_2].limits.bitrate / 1e3 }),
        getTier3Value: () =>
            j.intl.formatToPlainString(j.t.w1gmLt, { bitrate: s0.TG[U.TVA.TIER_3].limits.bitrate / 1e3 }),
    },
    {
        getPerkHeading: () => j.intl.string(j.t.R1U2xC),
        getPerkPreviewLightTheme: () => i(389833),
        getPerkPreviewDarkTheme: () => i(754561),
        getTier0Value: () =>
            j.intl.formatToPlainString(j.t.pIn7Af, { size: s0.TG[U.TVA.NONE].limits.fileSize / 1048576 }),
        getTier1Value: () =>
            j.intl.formatToPlainString(j.t.pIn7Af, { size: s0.TG[U.TVA.TIER_1].limits.fileSize / 1048576 }),
        getTier2Value: () =>
            j.intl.formatToPlainString(j.t.pIn7Af, { size: s0.TG[U.TVA.TIER_2].limits.fileSize / 1048576 }),
        getTier3Value: () =>
            j.intl.formatToPlainString(j.t.pIn7Af, { size: s0.TG[U.TVA.TIER_3].limits.fileSize / 1048576 }),
    },
    {
        getPerkHeading: () => j.intl.string(j.t.f6vfso),
        getPerkPreviewLightTheme: () => i(735669),
        getPerkPreviewDarkTheme: () => i(283517),
        getTier0Value: () => s0.TG[U.TVA.NONE].limits.stageVideoUsers,
        getTier1Value: () => s0.TG[U.TVA.TIER_1].limits.stageVideoUsers,
        getTier2Value: () => s0.TG[U.TVA.TIER_2].limits.stageVideoUsers,
        getTier3Value: () => s0.TG[U.TVA.TIER_3].limits.stageVideoUsers,
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
function gY(e) {
    let { children: t, className: i, tier: n } = e,
        s = n === U.TVA.NONE ? "text-muted" : "text-strong",
        l = n === U.TVA.NONE || null == n ? "heading-xl/normal" : "heading-xl/bold";
    return (0, E.jsxs)("th", {
        className: e7()(gB.PG, i),
        scope: "col",
        children: [
            (0, E.jsx)(eV.D, { color: s, variant: l, children: t }),
            null != n &&
                (0, E.jsx)(es.E, {
                    color: s,
                    variant: "text-md/normal",
                    children: j.intl.format(j.t["pob/cL"], { subscriptions: U.M2T[n] }),
                }),
        ],
    });
}
function gX(e) {
    let t,
        { className: i, textVariant: n = "text-md/bold", value: s } = e;
    if ("boolean" == typeof s) {
        let e = e7()(gB.Jk, { [gB.I$]: s });
        t = s
            ? (0, E.jsx)(gk.A, { size: "md", color: "currentColor", className: e })
            : (0, E.jsx)(gw.P, { size: "md", color: "currentColor", className: e });
    } else t = (0, E.jsx)(es.E, { color: "interactive-text-active", variant: n, children: s });
    return (0, E.jsx)("td", { className: e7()(gB.xR, i), children: t });
}
function gH(e) {
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
              className: e7()(gB.ER, { [gB.GH]: i === U.TVA.TIER_2, [gB.z5]: i === U.TVA.TIER_3 }),
              children: (0, E.jsx)(es.E, {
                  className: gB.uQ,
                  color: "text-overlay-light",
                  variant: "text-xs/bold",
                  children: t === U.TVA.TIER_3 ? j.intl.string(j.t.d849Up) : j.intl.string(j.t.dZeX1z),
              }),
          });
}
function gK(e) {
    let { isFocused: t, handleFocus: i, handleRowBlur: n, theme: s, row: l, hideTier0: r } = e,
        a = S.useRef(null);
    return (0, E.jsxs)("tr", {
        className: gB.__invalid_tableRow,
        children: [
            (0, E.jsx)("th", {
                className: e7()(gB.xR, gB.uB),
                scope: "row",
                children: (0, E.jsx)(en.D, {
                    className: e7()(gB.VC, gB.xR, gB.Rk),
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
                                className: gB.Mz,
                                src: (0, gV.M)(s) ? l.getPerkPreviewDarkTheme() : l.getPerkPreviewLightTheme(),
                                alt: "",
                            }),
                        shouldShow: t,
                        spacing: 16,
                        children: () =>
                            (0, E.jsx)(es.E, { variant: "text-md/normal", ref: a, children: l.getPerkHeading() }),
                    }),
                }),
            }),
            !r && (0, E.jsx)(gX, { textVariant: "text-md/normal", value: l.getTier0Value() }),
            (0, E.jsx)(gX, { value: l.getTier1Value() }),
            (0, E.jsx)(gX, { value: l.getTier2Value() }),
            (0, E.jsx)(gX, { value: l.getTier3Value() }),
        ],
    });
}
let gW = function (e) {
    let t = (0, cq.Ay)(),
        [i, n] = S.useState(null),
        { className: s, guild: l, hideHeading: r, hideTier0: a } = e;
    function o() {
        n(null);
    }
    return (0, E.jsxs)("div", {
        className: s,
        children: [
            !r &&
                (0, E.jsx)(eV.D, {
                    className: gB.R_,
                    variant: "heading-xxl/extrabold",
                    children: j.intl.string(j.t["9GGb9k"]),
                }),
            (0, E.jsxs)("div", {
                className: gB.wY,
                children: [
                    null != l && (0, E.jsx)(gH, { currentTier: l.premiumTier }),
                    (0, E.jsxs)("table", {
                        className: gB.tp,
                        cellPadding: 0,
                        cellSpacing: 0,
                        children: [
                            (0, E.jsx)("thead", {
                                children: (0, E.jsxs)("tr", {
                                    className: gB.__invalid_tableRow,
                                    children: [
                                        (0, E.jsx)(gY, { className: gB.VC, children: j.intl.string(j.t.F5MY0k) }),
                                        !a && (0, E.jsx)(gY, { tier: U.TVA.NONE, children: j.intl.string(j.t.mx8j2m) }),
                                        (0, E.jsx)(gY, { tier: U.TVA.TIER_1, children: j.intl.string(j.t.nzXtaS) }),
                                        (0, E.jsx)(gY, { tier: U.TVA.TIER_2, children: j.intl.string(j.t["h33/uW"]) }),
                                        (0, E.jsx)(gY, { tier: U.TVA.TIER_3, children: j.intl.string(j.t.BfF6ED) }),
                                    ],
                                }),
                            }),
                            (0, E.jsx)("tbody", {
                                className: gB.__invalid_tableBody,
                                children: gz.map((e, s) => {
                                    let l = i === s;
                                    return void 0 === e.predicate
                                        ? (0, E.jsx)(
                                              gK,
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
var gZ = i(338548),
    gq = i(776096),
    gQ = i(178368),
    gJ = i(461376),
    g$ = i(866323),
    g0 = i(530005),
    g1 = i(443865),
    g2 = i(473145);
function g3(e) {
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
            a === s0.xc.NONE &&
                ((o.transfer.disabled = !0),
                (o.transfer.subtext = j.intl.string(j.t.LiLRRT)),
                (o.cancel.subtext = j.intl.string(j.t["1ywaWL"])),
                (o.cancel.disabled = !0),
                (o.uncancel.disabled = !0));
    }
    let d = S.useMemo(
        () =>
            l.isPausedOrPausePending && a === s0.xc.NONE
                ? (0, E.jsx)(ei.Dr, {
                      id: "manage-subscription",
                      label: j.intl.string(j.t.obRG6Y),
                      action: () => (0, eq.openUserSettings)(u.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: g1.x,
                      leadingAccessory: { type: "icon", icon: g1.x },
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
            (0, g2.I5)(t)
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
var g5 = i(545934),
    g6 = i(496431);
let g4 = function (e) {
    let { className: t, cooldown: i } = e,
        n = (0, g6.A)(i);
    return (0, E.jsx)(es.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, rr.uN)(n, { days: j.t.WUTPDc, hours: j.t.c1qodV, minutes: j.t["2+A3dv"] }),
    });
};
var g8 = i(759692);
let g7 = function (e) {
    let { className: t, imageClassName: n, boostInCooldown: s, useReducedMotion: l } = e;
    return (0, E.jsx)("div", {
        className: e7()(g8.h4, t, { [g8.K2]: s }),
        children: (0, E.jsx)("img", {
            className: e7()(g8.Sl, n, { [g8.x8]: s }),
            src: s
                ? i(650442)
                : l
                  ? i(742885)
                  : "https://cdn.discordapp.com/assets/content/86fd98fc22283647a8be93d0c503646b53c84e3cb25ca6562a38cecb84327e58.gif",
            alt: "",
        }),
    });
};
var g9 = i(743552);
let me = function (e) {
    let { className: t, hasCooldown: n, isCanceled: s, useReducedMotion: l } = e;
    return (0, E.jsxs)("div", {
        className: e7()(g9.sn, t),
        children: [
            s
                ? (0, E.jsx)("img", { className: e7()(g9.$J, g9.qX), src: i(728707), alt: "" })
                : (0, E.jsx)(g7, { className: g9.$J, boostInCooldown: n, useReducedMotion: l }),
            !s && n && (0, E.jsx)("img", { className: g9.De, src: i(438807), alt: "" }),
        ],
    });
};
var mt = i(548118),
    mi = i(63152),
    mn = i(944304),
    ms = i(864310),
    ml = i(310918);
let mr = function (e) {
    let { className: t, guildId: i, boostingVariant: n } = e,
        s = (0, u7.bG)([eh.A], () => eh.A.getGuild(i), [i]),
        l = (0, ms.A)(s?.id).total;
    return null == s
        ? (0, E.jsx)("div", {
              className: e7()(t, ml.bo),
              children: (0, E.jsx)("div", {
                  className: ml.$g,
                  children: (0, E.jsx)(es.E, { variant: "text-lg/bold", children: j.intl.string(j.t["6Kwwuo"]) }),
              }),
          })
        : (0, E.jsxs)("div", {
              className: e7()(t, ml.bo),
              children: [
                  (0, E.jsx)(mt.Ay, { className: ml.__invalid_guildIcon, guild: s, size: mt.Ay.Sizes.LARGER }),
                  (0, E.jsxs)("div", {
                      className: ml.$g,
                      children: [
                          (0, E.jsx)(es.E, { variant: "text-lg/bold", children: s.name }),
                          (0, E.jsxs)("div", {
                              className: ml.TZ,
                              children: [
                                  (0, E.jsx)(gp._, {
                                      color: er.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                      className: ml.Me,
                                  }),
                                  (0, E.jsx)(es.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: j.intl.format(j.t["pob/cL"], { subscriptions: l }),
                                  }),
                                  (0, E.jsx)("div", { className: ml.me }),
                                  (0, E.jsx)(es.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: (0, g2.gb)(s.premiumTier, { useLevels: !1 }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  n
                      ? (0, E.jsx)(mn.A, {
                            guild: s,
                            analyticsLocation: {
                                page: U.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                section: U.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                object: U.ZSU.BUTTON_CTA,
                                objectType: U.AnalyticsObjectTypes.BUY,
                            },
                            pauseAnimation: !0,
                            size: ot.$n.Sizes.MEDIUM,
                            color: ot.$n.Colors.PRIMARY,
                            buttonText: j.intl.string(j.t.aBHecF),
                        })
                      : (0, E.jsx)(ek.$, {
                            variant: "secondary",
                            text: j.intl.string(j.t.KLOhbO),
                            onClick: () => {
                                (0, sZ.default)(),
                                    (0, mi.K4)({
                                        guildId: s.id,
                                        location: { section: U.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA },
                                    });
                            },
                        }),
              ],
          });
};
var ma = i(20230);
function mo(e) {
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
            let e = null != i.premiumGuildSubscription ? db.default.extractTimestamp(i.premiumGuildSubscription.id) : 0;
            return j.intl.formatToPlainString(j.t.lY2Bur, { date: new Date(e) });
        }, [i, s, l, r]),
        o = S.useMemo(
            () =>
                (function (e) {
                    if (null == e || e === U.TVA.NONE) return "";
                    let t = [
                        j.intl.formatToPlainString(j.t["dLlKX/"], { numEmojiSlots: s0.TG[e].limits.emoji }),
                        j.intl.formatToPlainString(j.t["+ANIfv"], { numStickerSlots: s0.TG[e].limits.stickers }),
                        j.intl.formatToPlainString(j.t["4gt60b"], {
                            numSoundboardSlots: s0.TG[e].limits.soundboardSounds,
                        }),
                        j.intl.formatToPlainString(j.t.XahSjZ, {
                            resolution: s0.TG[e].limits.screenShareQualityResolution,
                            framerate: s0.TG[e].limits.screenShareQualityFramerate,
                        }),
                        j.intl.formatToPlainString(j.t.NbNs7S, { bitrate: s0.TG[e].limits.bitrate / 1e3 }),
                        j.intl.formatToPlainString(j.t.VVKcpn, { filesize: s0.TG[e].limits.fileSize / 1024 / 1024 }),
                        j.intl.formatToPlainString(j.t.TbpCvv, { numVideoStageSeats: s0.TG[e].limits.stageVideoUsers }),
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
        u = (0, g$.p)(n, { from: { opacity: 0 }, enter: { opacity: 1 }, leave: { opacity: 0 } }, "animate-always");
    return s || t === U.TVA.NONE
        ? (0, E.jsx)("div", {
              className: ma.xm,
              children: (0, E.jsx)(es.E, { variant: "text-sm/medium", color: "text-muted", children: a }),
          })
        : u((e, t) =>
              (0, E.jsx)(gJ.animated.div, {
                  style: e,
                  className: ma.xm,
                  children: (0, E.jsx)(es.E, { variant: "text-sm/medium", color: "text-muted", children: t ? o : a }),
              }),
          );
}
function mu(e) {
    let {
            guildTier: t,
            guildBoostSlot: i,
            premiumSubscription: n,
            hasCancelableGuildBoostSlot: s,
            showAltText: l,
            isLastGuildBoostSlot: r,
        } = e,
        a = (0, u7.bG)([ni.Ay], () => ni.Ay.useReducedMotion),
        o = S.useMemo(() => (null != i.cooldownEndsAt ? new Date(i.cooldownEndsAt) : null), [i]),
        u = S.useMemo(() => null != o && o > new Date(), [o]),
        d = (0, g2.I5)(i),
        c = (0, gb.A)(),
        g = S.useRef(null);
    return (0, E.jsxs)("div", {
        className: ma.PW,
        children: [
            (0, E.jsxs)("div", {
                className: ma.$U,
                children: [
                    (0, E.jsx)(me, { isCanceled: d, hasCooldown: u, useReducedMotion: a }),
                    (0, E.jsx)("div", {
                        className: ma.vh,
                        children:
                            null != o && u && !d
                                ? (0, E.jsx)(g4, { className: ma.xm, cooldown: o.getTime() })
                                : (0, E.jsx)(mo, {
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
                            return (0, E.jsx)(g3, {
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
                                className: ma.oU,
                                children: (0, E.jsx)(g0.F, { size: "md", color: "currentColor" }),
                            }),
                    }),
                ],
            }),
            !r && (0, E.jsx)("div", { className: ma.eX }),
        ],
    });
}
function md(e) {
    let {
            guildId: t,
            guildBoostSlotRecords: i,
            premiumSubscription: n,
            hasCancelableGuildBoostSlot: s,
            showAltText: l,
        } = e,
        r = (0, u7.bG)([eh.A], () => eh.A.getGuild(t), [t]);
    return (0, E.jsxs)("div", {
        className: ma.ag,
        children: [
            (0, E.jsx)(mr, { guildId: t, boostingVariant: !1 }),
            i.map((e, t) =>
                (0, E.jsx)(
                    mu,
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
function mc(e) {
    let { guildId: t, appliedGuildBoosts: i, premiumSubscription: n } = e,
        s = (0, u7.bG)([eh.A], () => eh.A.getGuild(t), [t]),
        l = db.default.fromTimestamp(Date.now());
    if (
        (i.forEach((e) => {
            (null == l || 0 > db.default.compare(e.id, l)) && (l = e.id);
        }),
        null == l)
    )
        return null;
    let r = g5.A.createFromServer(
        {
            id: db.default.fromTimestamp(Date.now()),
            subscription_id: n.id,
            canceled: !1,
            premium_guild_subscription: { id: l, guild_id: t },
            cooldown_ends_at: null,
        },
        n,
    );
    return (0, E.jsxs)("div", {
        className: ma.ag,
        children: [
            (0, E.jsx)(mr, { guildId: t, boostingVariant: !1 }),
            i.map((e, t) =>
                (0, E.jsx)(
                    mu,
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
function mg(e) {
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
              className: ma.iE,
              children: [
                  (0, E.jsx)("div", {
                      className: ma.kL,
                      children: db.default
                          .keys(n)
                          .map((e) =>
                              (0, E.jsx)(mc, { guildId: e, premiumSubscription: i, appliedGuildBoosts: n[e] }, e),
                          ),
                  }),
                  (0, E.jsx)("div", { className: ma.vK }),
              ],
          });
}
function mm(e) {
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
                if ((!(0, g2.I5)(s) && e++, null != s.premiumGuildSubscription)) {
                    let e = s.premiumGuildSubscription.guildId;
                    e in i || (i[e] = []), i[e].push(s);
                }
            }),
            { boostsByGuildId: i, numActiveGuildBoostSlots: e }
        );
    }, [t]);
    if (null == i || 0 === Object.keys(l).length) return null;
    let a = r > uh.Ay.getNumIncludedPremiumGuildSubscriptionSlots(i.planId);
    return (0, E.jsxs)("div", {
        className: ma.iE,
        children: [
            (0, E.jsx)("div", {
                className: ma.kL,
                children: db.default
                    .keys(l)
                    .map((e) =>
                        (0, E.jsx)(
                            md,
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
            (0, E.jsx)("div", { className: ma.vK }),
        ],
    });
}
var mA = i(461546);
let mh = function (e) {
    let { hasGuildBoostSlots: t, hasAppliedGuildBoosts: n, hasBoostPerk: s, canAddBoosts: l } = e;
    return (0, E.jsxs)("div", {
        className: mA.iE,
        children: [
            (0, E.jsx)("div", {
                className: mA.bj,
                children: (0, E.jsx)("img", { alt: "", className: mA.KV, src: i(742885) }),
            }),
            (0, E.jsxs)("div", {
                className: mA.D7,
                children: [
                    (0, E.jsx)(eV.D, {
                        variant: "display-md",
                        className: mA.R_,
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
                        className: mA.Mz,
                        children: (0, E.jsx)("path", {
                            d: "M101.3,45.5C57.5,45.9,15.9,82.2,0,99.5V210h660V53.5c-164-137-265.2,32.4-385.8,33.6  C177.7,88.1,158.1,45,101.3,45.5z",
                        }),
                    }),
                ],
            }),
        ],
    });
};
var mE = i(725538),
    mS = i(168482);
function mT() {
    return (0, E.jsxs)("div", {
        className: mE.iE,
        children: [
            (0, E.jsx)("img", { className: mE.Kk, alt: "", src: mS }),
            (0, E.jsxs)("div", {
                className: mE.pq,
                children: [
                    (0, E.jsx)(es.E, { variant: "text-lg/bold", children: j.intl.string(j.t.ZHNSYf) }),
                    (0, E.jsx)(es.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: j.intl.string(j.t.kCj5ps),
                    }),
                ],
            }),
            (0, E.jsx)(ek.$, {
                variant: "secondary",
                text: j.intl.string(j.t.JFlifp),
                onClick: function () {
                    (0, s9.pX)(U.BVt.GUILD_DISCOVERY), (0, sZ.default)();
                },
            }),
        ],
    });
}
var mx = i(502572),
    mp = i(614820),
    mf = i(987144),
    mN = i(178015);
let m_ = function () {
    let e = S.useRef(null),
        { analyticsLocations: t } = (0, n1.Ay)(),
        { fractionalState: n } = (0, gb.A)();
    function s(i) {
        null != e.current && (0, K.closeModal)(e.current),
            (0, mf.g)({
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
    let r = (0, g2.Nc)({ fractionalState: n });
    return (0, E.jsxs)("div", {
        className: mN.iE,
        children: [
            (0, E.jsx)(gp._, { color: er.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: mN.$J }),
            (0, E.jsx)(es.E, {
                className: mN.C,
                color: "text-default",
                variant: "text-sm/medium",
                children: j.intl.format(j.t.kqC5vq, {
                    boostAnyGuildHook: (e, t) => {
                        let i = null != r,
                            n = (0, mp.O)(e),
                            s = (0, E.jsx)("div", {
                                className: mN.lO,
                                children: (0, E.jsx)(
                                    ea.Q,
                                    { variant: "primary", onClick: i ? void 0 : l, text: n, disabled: i },
                                    t,
                                ),
                            });
                        return i
                            ? (0, E.jsx)(
                                  mx.A,
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
var mI = i(735310);
let mC = function (e) {
    let { canAddBoosts: t, canApplyBoosts: i } = e,
        n = (0, g.bG)([gq.A], () => gq.A.affinities),
        s = (0, g.bG)([eE.Ay], () => eE.Ay.getFlattenedGuildIds()),
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
              className: mI.iE,
              children: [
                  t &&
                      (0, E.jsx)(eV.D, {
                          variant: "heading-lg/semibold",
                          className: mI.wx,
                          children: j.intl.string(j.t.r90Wgo),
                      }),
                  l.map((e) => (0, E.jsx)(mr, { className: mI.ZS, guildId: e, boostingVariant: !0 }, e)),
                  s.length > 3 && i && (0, E.jsx)(m_, {}),
              ],
          });
};
var mb = i(773447);
let mv = function (e) {
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
                        onClick: () => (0, eq.openUserSettings)(u.X.SUBSCRIPTIONS_PANEL),
                    }),
                };
            if (!n) return { subtitle: j.intl.string(j.t.oiWYAc) };
            if (t)
                return {
                    subtitle: j.intl.string(j.t.W5rDjW),
                    flavor: j.intl.format(j.t.cUHcaQ, {
                        helpdeskArticle: ty.A.getArticleURL(U.MVz.GUILD_SUBSCRIPTIONS),
                    }),
                };
            let l = s0.hd[s0.gD.PREMIUM_MONTH_GUILD],
                r = uh.Ay.getDefaultPrice(l.id, i),
                a = (0, dI.CE)((0, dI.$g)(r.amount, r.currency), l.interval, l.intervalCount);
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
        className: mb.i,
        children: [
            (0, E.jsx)(eV.D, { variant: "heading-lg/bold", className: mb.V, children: l }),
            null != r && (0, E.jsx)(es.E, { variant: "text-sm/normal", children: r }),
        ],
    });
};
var my = i(724624),
    mj = i(983511),
    mO = i(342744),
    mR = i(87719),
    mL = i(439312);
function mD(e) {
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
        u = (0, g2.I5)(t),
        d = l?.isPaused === !0 && a === s0.xc.NONE,
        c = j.intl.string(j.t.mOWsF1);
    return (0, E.jsxs)(
        "li",
        {
            className: mL.Hp,
            children: [
                (0, E.jsxs)("div", {
                    className: mL.YL,
                    children: [
                        (0, E.jsx)(me, {
                            className: mL.W6,
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
                              ? (0, E.jsx)(g4, { cooldown: o.getTime() })
                              : (0, E.jsx)(es.E, {
                                    className: mL.__invalid_unappliedGuildBoostSlotDescription,
                                    color: "text-muted",
                                    variant: "text-sm/medium",
                                    children: j.intl.string(j.t["2mcafz"]),
                                }),
                    ],
                }),
                (0, E.jsxs)("div", {
                    className: mL.E7,
                    children: [
                        i &&
                            !u &&
                            (0, E.jsx)(mx.A, {
                                shouldShow: d,
                                text: c,
                                "aria-label": c.toString(),
                                children: (e) =>
                                    (0, E.jsx)("div", {
                                        className: mL.LB,
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
                            (0, E.jsx)(mx.A, {
                                shouldShow: d,
                                text: c,
                                "aria-label": c.toString(),
                                children: (e) =>
                                    (0, E.jsx)("div", {
                                        className: mL.LB,
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
function mP(e) {
    (0, K.openModalLazy)(async () => (t) => (0, E.jsx)(mj.default, { ...t, guildBoostSlot: e }));
}
function mG(e) {
    (0, K.openModalLazy)(async () => (t) => (0, E.jsx)(mO.default, { ...t, guildBoostSlotId: e.id }));
}
let mM = function (e) {
    let t,
        i,
        n,
        { guildBoostSlots: s } = e,
        l = (0, g.bG)([d$.A], () => d$.A.getPremiumTypeSubscription()),
        r = l?.isPausedOrPausePending === !0,
        { fractionalState: a } = (0, gb.A)(),
        o = (0, g.bG)([ni.Ay], () => ni.Ay.useReducedMotion),
        u = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()),
        d = a === s0.xc.FP_SUB_PAUSED,
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
                    !(0, g2.I5)(s) && i++,
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
        p = null != l ? uh.Ay.getNumIncludedPremiumGuildSubscriptionSlots(l.planId) : 0,
        f = Math.max(0, p - m.length),
        N = h > p,
        _ = p === s.length,
        I = _ ? f : 1,
        C = S.useMemo(() => {
            let e = [];
            for (let t = 0; t < I; t++) e.push((0, E.jsx)(g7, { className: mL.YA, useReducedMotion: o }, t));
            return e;
        }, [I, o]),
        b = S.useMemo(() => A.find((e) => e.isAvailable()), [A]);
    if (0 === A.length) return null;
    let v = A.length;
    if (
        ((t = _
            ? j.intl.formatToPlainString(x ? j.t["3DW6Dc"] : j.t["/u15Qc"], { numUnappliedGuildBoostSlots: v })
            : j.intl.formatToPlainString(x ? j.t["3DW6Dc"] : j.t.BPadnO, { numUnappliedGuildBoostSlots: v })),
        uh.Ay.isPremium(u))
    ) {
        function y(e, t) {
            return (0, E.jsx)(
                en.D,
                {
                    className: mL.nw,
                    tag: "span",
                    onClick: () => {
                        (0, mR.e)();
                    },
                    children: e,
                },
                t,
            );
        }
        i = x
            ? j.intl.format(j.t.omcpSE, { learnMoreHook: y })
            : j.intl.format(j.t["5mAkVi"], { numUnappliedGuildBoostSlots: v, learnMoreHook: y });
    } else
        i = x
            ? j.intl.string(j.t["8pcUZi"])
            : j.intl.formatToPlainString(j.t.Kaw82o, { numUnappliedGuildBoostSlots: v });
    return (
        (n = r && a === s0.xc.NONE ? j.intl.string(j.t.mOWsF1) : j.intl.string(j.t.xr4m5B)),
        (0, E.jsx)("div", {
            className: mL.iE,
            children: (0, E.jsxs)("div", {
                className: e7()(mL.Qs, [mL.Yq]),
                children: [
                    (0, E.jsxs)("div", {
                        className: mL.wx,
                        children: [
                            (0, E.jsxs)("div", {
                                className: mL.RW,
                                children: [
                                    (0, E.jsx)("div", { className: mL.PS, children: C }),
                                    (0, E.jsxs)("div", {
                                        className: mL.__invalid_headerCopy,
                                        children: [
                                            (0, E.jsx)(eV.D, {
                                                className: mL.gg,
                                                variant: "heading-lg/bold",
                                                children: t,
                                            }),
                                            (0, E.jsx)(es.E, {
                                                className: mL.__invalid_headerSubheading,
                                                color: "text-strong",
                                                variant: "text-sm/normal",
                                                children: i,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, E.jsx)("div", {
                                className: mL.di,
                                children: (0, E.jsx)(mx.A, {
                                    shouldShow: null == b || c,
                                    text: n,
                                    "aria-label": n.toString(),
                                    children: (e) =>
                                        (0, E.jsx)(ek.$, {
                                            variant: "primary",
                                            text: j.intl.string(j.t.BMx1iy),
                                            ...e,
                                            disabled: null == b || c,
                                            onClick:
                                                null != b
                                                    ? () => {
                                                          (0, K.openModalLazy)(
                                                              async () => (e) =>
                                                                  (0, E.jsx)(my.default, {
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
                            className: mL.LU,
                            children: A.map((e) =>
                                (0, E.jsx)(
                                    mD,
                                    {
                                        guildBoostSlot: e,
                                        isCancellable: N,
                                        onCancel: mP,
                                        onUncancel: mG,
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
var mU = i(561835);
function mV(e) {
    let { premiumSubscription: t } = e,
        i = (0, g.bG)([gQ.A], () => gQ.A.boostSlots),
        n = S.useMemo(() => Object.values(i), [i]),
        s = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()),
        l = uh.Ay.isPremium(s, s0.PremiumTypes.TIER_2),
        r = (0, g.bG)([gq.A], () => gq.A.affinities),
        a = (0, g.bG)([eE.Ay], () => eE.Ay.getFlattenedGuildIds()),
        o = r.length > 0 || a.length > 0,
        u = n.length > 0,
        d = S.useMemo(() => n.filter((e) => null != e.premiumGuildSubscription), [n]),
        c = d.length > 0,
        m = n.length > d.length,
        A = (0, g.bG)([gC.A], () => gC.A.getCurrentUserAppliedBoosts()),
        { fractionalState: h } = (0, gb.A)({ forceFetch: !0 }),
        T = s?.isPremiumGroupMember(),
        x = t?.isPausedOrPausePending === !0 && h === s0.xc.NONE,
        p = t?.isPausedOrPausePending !== !0 && h === s0.xc.NONE && !T,
        f = l && h === s0.xc.FP_SUB_PAUSED,
        N = h === s0.xc.NONE && !T;
    return (0, E.jsxs)("div", {
        className: mU.GO,
        children: [
            (0, E.jsx)(d4.kb, { className: mU.ek }),
            (0, E.jsx)(mh, { hasGuildBoostSlots: u, hasAppliedGuildBoosts: c, hasBoostPerk: f, canAddBoosts: p }),
            N &&
                (0, E.jsx)(mv, {
                    hasAppliedGuildBoosts: c,
                    hasBoostPerk: f,
                    hasGuildAffinitiesOrInGuild: o,
                    subscriptionIsPausedOrPausePending: x,
                }),
            T && (0, E.jsx)(gZ.A, {}),
            !o && (0, E.jsx)(mT, {}),
            t?.isPaused && h !== s0.xc.FP_SUB_PAUSED
                ? (0, E.jsx)(mg, { appliedGuildBoosts: A, premiumSubscription: t })
                : (0, E.jsx)(mm, { guildBoostSlots: i, premiumSubscription: t }),
            (0, E.jsx)(mM, { guildBoostSlots: n, fractionalPremiumState: h }),
            (0, E.jsx)(mC, { canAddBoosts: c && p, canApplyBoosts: m }),
            (0, E.jsx)(gW, { className: mU.e4, hideHeading: !0, hideTier0: !0 }),
            (0, E.jsx)(gD, { cardClassName: mU.KW }),
            (0, E.jsx)(gU, { className: mU.JL }),
        ],
    });
}
var mk = i(527113),
    mw = i(365199),
    mF = i(378102);
function mB(e) {
    let { guild: t, className: i } = e,
        { total: n } = (0, ms.A)(t.id);
    return (0, E.jsxs)("div", {
        className: i ?? mF.OA,
        children: [
            (0, E.jsx)(mt.Ay, { className: mF.$f, guild: t, size: mt.Ay.Sizes.MEDIUM }),
            (0, E.jsxs)("div", {
                className: mF.gI,
                children: [
                    (0, E.jsx)(es.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, E.jsxs)("div", {
                        className: mF.ew,
                        children: [
                            (0, E.jsxs)("div", {
                                className: mF.QW,
                                children: [
                                    (0, E.jsx)(gp._, {
                                        className: mF.Wz,
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
                                        (0, E.jsx)("div", { className: mF.zk }),
                                        (0, E.jsx)(es.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, g2.gb)(t.premiumTier, { useLevels: !1 }),
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
function mz(e) {
    let { guildId: t } = e,
        i = (0, g.bG)([eh.A], () => eh.A.getGuild(t), [t]);
    return null == i
        ? null
        : (0, E.jsxs)("div", {
              className: mF.Nr,
              children: [
                  (0, E.jsx)(mB, { guild: i }),
                  (0, E.jsx)(ek.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: gp._,
                      text: j.intl.string(j.t.aBHecF),
                      onClick: () => {
                          (0, mf.g)({
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
var mY = i(512062);
let mX =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function mH(e) {
    let { slot: t, guildTier: i, premiumSubscription: n, hasCancelableSlots: s, isLast: l } = e,
        r = S.useRef(null),
        a = (0, g2.I5)(t),
        o = S.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, gb.A)(),
        c = S.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === U.TVA.NONE) return "";
                    let i = [
                        j.intl.formatToPlainString(j.t["dLlKX/"], { numEmojiSlots: s0.TG[e].limits.emoji }),
                        j.intl.formatToPlainString(j.t["+ANIfv"], { numStickerSlots: s0.TG[e].limits.stickers }),
                        j.intl.formatToPlainString(j.t["4gt60b"], {
                            numSoundboardSlots: s0.TG[e].limits.soundboardSounds,
                        }),
                        j.intl.formatToPlainString(j.t.XahSjZ, {
                            resolution: s0.TG[e].limits.screenShareQualityResolution,
                            framerate: s0.TG[e].limits.screenShareQualityFramerate,
                        }),
                        j.intl.formatToPlainString(j.t.NbNs7S, { bitrate: s0.TG[e].limits.bitrate / 1e3 }),
                        j.intl.formatToPlainString(j.t.VVKcpn, { filesize: s0.TG[e].limits.fileSize / 1024 / 1024 }),
                        j.intl.formatToPlainString(j.t.TbpCvv, { numVideoStageSeats: s0.TG[e].limits.stageVideoUsers }),
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
            let e = null != t.premiumGuildSubscription ? db.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return j.intl.formatToPlainString(j.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        m = S.useMemo(
            () => (a ? (n.isPausedForFractionalPremium ? d.endsAt.toDate() : n.currentPeriodEnd) : null),
            [a, n, d],
        );
    return (0, E.jsxs)("div", {
        className: e7()(mY.iq, { [mY.Mt]: l }),
        children: [
            (0, E.jsxs)("div", {
                className: mY.kd,
                children: [
                    (0, E.jsx)("img", { alt: "", className: mY.bB, src: mX }),
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
                                              (0, E.jsx)("div", { className: mY.zk }),
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
                                              (0, E.jsx)("div", { className: mY.zk }),
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
                    return (0, E.jsx)(g3, {
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
                        className: mY.Mj,
                        ...e,
                        children: (0, E.jsx)(mw.j, { size: "xs", color: er.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                    }),
            }),
        ],
    });
}
function mK(e) {
    let { guildId: t, slots: i, premiumSubscription: n, hasCancelableSlots: s } = e,
        l = (0, g.bG)([eh.A], () => eh.A.getGuild(t), [t]);
    return (0, E.jsxs)("div", {
        className: mY.Nr,
        children: [
            (0, E.jsx)("div", {
                className: mY.MY,
                children:
                    null != l
                        ? (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(mB, { guild: l, className: mY.OA }),
                                  (0, E.jsx)(ek.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: j.intl.string(j.t.KLOhbO),
                                      onClick: () => {
                                          (0, sZ.default)(),
                                              (0, mi.K4)({
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
                              className: mY.OA,
                              children: (0, E.jsx)(eV.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: j.intl.string(j.t["6Kwwuo"]),
                              }),
                          }),
            }),
            i.map((e, t) =>
                (0, E.jsx)(
                    mH,
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
function mW(e) {
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
                                g5.A.createFromServer(
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
                if ((!(0, g2.I5)(n) && e++, null != n.premiumGuildSubscription)) {
                    let e = n.premiumGuildSubscription.guildId;
                    e in l || (l[e] = []), l[e].push(n);
                }
            }
            return { boostsByGuildId: l, numActiveSlots: e };
        }, [t, s, n, i]);
    if (null == i || 0 === Object.keys(l).length) return null;
    let a = r > uh.Ay.getNumIncludedPremiumGuildSubscriptionSlots(i.planId);
    return (0, E.jsx)("div", {
        className: mY.kR,
        children: db.default
            .keys(l)
            .map((e) => (0, E.jsx)(mK, { guildId: e, slots: l[e], premiumSubscription: i, hasCancelableSlots: a }, e)),
    });
}
var mZ = i(928171);
function mq(e) {
    let { guildBoostSlots: t, fractionalPremiumState: n } = e,
        s = (0, g.bG)([d$.A], () => d$.A.getPremiumTypeSubscription()),
        { unappliedSlots: l, numActiveSlots: r } = S.useMemo(() => {
            let e = [],
                i = 0;
            for (let n of t) !(0, g2.I5)(n) && i++, null == n.premiumGuildSubscription && e.push(n);
            return { unappliedSlots: e, numActiveSlots: i };
        }, [t]),
        a = r > (null != s ? uh.Ay.getNumIncludedPremiumGuildSubscriptionSlots(s.planId) : 0),
        o = s?.isPausedOrPausePending === !0 && n === s0.xc.NONE;
    return 0 === l.length
        ? null
        : (0, E.jsxs)("div", {
              className: mZ.Nr,
              children: [
                  (0, E.jsxs)("div", {
                      className: mZ.MY,
                      children: [
                          (0, E.jsxs)("div", {
                              className: mZ._L,
                              children: [
                                  (0, E.jsxs)("div", {
                                      className: mZ.MD,
                                      children: [
                                          (0, E.jsx)("img", { alt: "", className: mZ.F8, src: mX }),
                                          (0, E.jsx)("div", {
                                              className: e7()(mZ.qS, "theme-dark"),
                                              children: (0, E.jsx)("span", { className: mZ.Vv, children: l.length }),
                                          }),
                                      ],
                                  }),
                                  (0, E.jsxs)("div", {
                                      className: mZ.Qp,
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
                          (0, E.jsx)(mx.A, {
                              shouldShow: o,
                              text: j.intl.string(j.t.mOWsF1),
                              "aria-label": j.intl.string(j.t.mOWsF1),
                              children: (e) =>
                                  (0, E.jsx)(ek.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: gp._,
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
                                                              (0, mf.g)({
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
                          mQ,
                          {
                              slot: e,
                              isLast: t === l.length - 1,
                              isCancelable: a && !(0, g2.I5)(e),
                              isCanceled: (0, g2.I5)(e),
                              premiumSubscription: s,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function mQ(e) {
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
              ? (0, E.jsx)(g4, { cooldown: u.getTime() })
              : (0, E.jsx)(es.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: j.intl.string(j.t["2mcafz"]),
                });
    let d = s || l;
    return (0, E.jsxs)("div", {
        className: e7()(mZ.iq, { [mZ.Mt]: n }),
        children: [
            (0, E.jsxs)("div", {
                className: mZ.kd,
                children: [(0, E.jsx)("img", { alt: "", className: mZ.bB, src: mX }), t],
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
                                                        (0, E.jsx)(mj.default, { ...e, guildBoostSlot: i }),
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
                                                        (0, E.jsx)(mO.default, { ...e, guildBoostSlotId: i.id }),
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
                            className: mZ.Mj,
                            ...e,
                            children: (0, E.jsx)(mw.j, { size: "xs", color: er.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                        }),
                }),
        ],
    });
}
var mJ = i(942053);
function m$(e) {
    let {
            guildBoostSlots: t,
            guildBoostSlotsByGuildId: i,
            premiumSubscription: n,
            pausedAppliedGuildBoosts: s,
            fractionalPremiumState: l,
        } = e,
        r = ty.A.getArticleURL(U.MVz.GUILD_BOOSTING_FAQ),
        a = n?.isPaused === !0 && l !== s0.xc.FP_SUB_PAUSED,
        o = t.some((e) => null == e.premiumGuildSubscription),
        u = a && s.length > 0,
        d = a ? u : t.some((e) => null != e.premiumGuildSubscription);
    return o || d
        ? (0, E.jsxs)("div", {
              className: mJ.i,
              children: [
                  (0, E.jsxs)("div", {
                      className: mJ.b,
                      children: [
                          (0, E.jsx)(eV.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.W5rDjW) }),
                          (0, E.jsx)(es.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: j.intl.format(j.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, E.jsx)(mW, {
                      guildBoostSlots: i,
                      premiumSubscription: n,
                      pausedAppliedGuildBoosts: s,
                      isPaused: a,
                  }),
                  (0, E.jsx)(mq, { guildBoostSlots: t, fractionalPremiumState: l }),
              ],
          })
        : null;
}
var m0 = i(917064),
    m1 = i(401721);
function m2() {
    return (0, E.jsxs)("div", {
        className: m1.iE,
        children: [
            (0, E.jsx)(eV.D, { variant: "heading-xl/normal", children: j.intl.string(j.t.IzKs3o) }),
            (0, E.jsx)("div", {
                className: m1.kR,
                children: m0.s.map((e, t) => {
                    let i = e.icon;
                    return (0, E.jsxs)(
                        "div",
                        {
                            className: m1.Nr,
                            children: [
                                (0, E.jsx)(i, { className: m1.Kk }),
                                (0, E.jsx)(es.E, {
                                    className: m1.h_,
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
var m3 = i(232122),
    m5 = i(630579);
function m6() {
    let [e, t] = S.useState(null),
        [i, n] = S.useState(null);
    return (0, E.jsxs)("div", {
        className: m5.iE,
        children: [
            (0, E.jsx)(eV.D, { variant: "heading-xl/normal", children: j.intl.string(j.t.HPJ6Nj) }),
            (0, E.jsx)("ul", {
                className: m5.p_,
                children: m3.m.map((s, l) => {
                    let r = e === l,
                        a = i === l,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, E.jsxs)(
                        en.D,
                        {
                            tag: "li",
                            className: e7()(m5.Aw, { [m5.$K]: r }),
                            onClick: () => t((e) => (e === l ? null : l)),
                            onMouseEnter: () => n(l),
                            onMouseLeave: () => n(null),
                            children: [
                                (0, E.jsxs)("div", {
                                    className: m5.k7,
                                    children: [
                                        (0, E.jsx)(es.E, {
                                            className: m5.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: s.getQuestion(),
                                        }),
                                        (0, E.jsx)(el.a, {
                                            size: "sm",
                                            color: er.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: m5.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, E.jsx)(es.E, {
                                        className: m5.ZF,
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
var m4 = i(182859),
    m8 = i(853513),
    m7 = i(880482);
function m9() {
    let e = ty.A.getArticleURL(U.MVz.GUILD_SUBSCRIPTIONS);
    return (0, E.jsxs)("div", {
        className: m7.wx,
        children: [
            (0, E.jsxs)("div", {
                className: m7.Qs,
                children: [
                    (0, E.jsxs)("div", {
                        className: m7.B5,
                        children: [
                            (0, E.jsx)("img", { alt: "", className: m7.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, E.jsx)(eV.D, {
                                variant: "heading-xl/normal",
                                children: j.intl.string(m8.default.hjvcLO),
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
            (0, E.jsx)(m4.A, {
                variant: "member",
                className: m7.iO,
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
var Ae = i(315629),
    At = i(524170);
function Ai() {
    let e = (0, g.bG)([iA.default], () => iA.default.getCurrentUser());
    if (null == e || uh.Ay.hasFreeBoosts(e)) return null;
    let t = ty.A.getArticleURL(U.MVz.GUILD_BOOSTING_FAQ);
    return (0, E.jsxs)(Ae.h, {
        color: "nitro-pink",
        className: At.vK,
        children: [
            (0, E.jsxs)("div", {
                className: At.nw,
                children: [
                    (0, E.jsx)("img", { alt: "", className: At.q3, src: mX }),
                    (0, E.jsxs)("div", {
                        className: At.Tm,
                        children: [
                            (0, E.jsx)(es.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: j.intl.format(j.t.Idh1Vs, { count: s0.M4, boostCount: s0.M4 }),
                            }),
                            (0, E.jsxs)("div", {
                                className: At.xv,
                                children: [
                                    (0, E.jsx)(ur.t, { className: At.nE }),
                                    (0, E.jsx)(es.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: j.intl.format(j.t["6UAu+f"], {
                                            count: s0.M4,
                                            boostCount: s0.M4,
                                            helpdeskArticle: t,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)(ek.$, {
                variant: "expressive",
                size: "sm",
                icon: ur.t,
                text: j.intl.string(j.t["8x0jKT"]),
                onClick: mR.e,
            }),
        ],
    });
}
var An = i(738262);
function As() {
    let e = (0, g.bG)([gq.A], () => gq.A.affinities),
        t = (0, g.bG)([eE.Ay], () => eE.Ay.getFlattenedGuildIds()),
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
              className: An.i,
              children: [
                  (0, E.jsx)(eV.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.r90Wgo) }),
                  (0, E.jsx)("div", { className: An.k, children: i.map((e) => (0, E.jsx)(mz, { guildId: e }, e)) }),
              ],
          });
}
var Al = i(553429);
function Ar(e) {
    let { count: t, disabledReason: n } = e,
        s = ty.A.getArticleURL(U.MVz.GUILD_BOOSTING_FAQ);
    return (0, E.jsxs)(Ae.h, {
        color: "nitro-pink",
        className: Al.vK,
        children: [
            (0, E.jsxs)("div", {
                className: Al.nw,
                children: [
                    (0, E.jsxs)("div", {
                        className: Al.MD,
                        children: [
                            (0, E.jsx)("img", { alt: "", className: Al.F8, src: mX }),
                            (0, E.jsx)("div", {
                                className: e7()(Al.qS, "theme-dark"),
                                children: (0, E.jsx)("span", { className: Al.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, E.jsxs)("div", {
                        className: Al.Tm,
                        children: [
                            (0, E.jsx)(es.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: j.intl.format(j.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, E.jsxs)("div", {
                                className: Al.xv,
                                children: [
                                    (0, E.jsx)(ur.t, { className: Al.nE }),
                                    (0, E.jsx)(es.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: j.intl.format(j.t["6UAu+f"], {
                                            count: s0.M4,
                                            boostCount: s0.M4,
                                            helpdeskArticle: s,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)(mx.A, {
                shouldShow: null != n,
                text: n ?? "",
                "aria-label": n,
                children: (e) =>
                    (0, E.jsx)(ek.$, {
                        ...e,
                        variant: "primary",
                        size: "sm",
                        icon: gp._,
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
                                                (0, mf.g)({
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
function Aa(e) {
    let { premiumSubscription: t } = e,
        i = (0, g.bG)([gQ.A], () => gQ.A.boostSlots),
        n = S.useMemo(() => Object.values(i), [i]),
        s = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()),
        l = (0, g.bG)([gq.A], () => gq.A.affinities),
        r = (0, g.bG)([eE.Ay], () => eE.Ay.getFlattenedGuildIds()),
        a = l.length > 0 || r.length > 0,
        o = S.useMemo(() => n.filter((e) => null != e.premiumGuildSubscription), [n]).length,
        u = (0, g.bG)([gC.A], () => gC.A.getCurrentUserAppliedBoosts()),
        { fractionalState: d } = (0, gb.A)({ forceFetch: !0 }),
        c = s?.isPremiumGroupMember(),
        m = t?.isPausedOrPausePending === !0 && d === s0.xc.NONE,
        A = S.useMemo(() => n.some((e) => null == e.premiumGuildSubscription && e.isAvailable()), [n]),
        h = m ? j.intl.string(j.t.mOWsF1) : A ? void 0 : j.intl.string(j.t.xr4m5B),
        T = S.useMemo(() => {
            if (null == t) return 0;
            let e = uh.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== n.length ? 0 : Math.max(0, e - o);
        }, [t, n.length, o]);
    return (0, E.jsxs)("div", {
        className: mU.GO,
        children: [
            (0, E.jsx)(d4.kb, { className: mU.ek }),
            (0, E.jsx)(m9, {}),
            (0, E.jsx)(Ai, {}),
            T > 0 && (0, E.jsx)(Ar, { count: T, disabledReason: h }),
            c && (0, E.jsx)(gZ.A, {}),
            !a && (0, E.jsx)(mT, {}),
            (0, E.jsxs)("div", {
                className: mU.C_,
                children: [
                    (0, E.jsx)(m$, {
                        guildBoostSlots: n,
                        guildBoostSlotsByGuildId: i,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: u,
                        fractionalPremiumState: d,
                    }),
                    (0, E.jsx)(As, {}),
                    (0, E.jsx)(mk.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, E.jsx)(m2, {}),
                    (0, E.jsx)(m6, {}),
                ],
            }),
        ],
    });
}
var Ao = i(672140);
let Au = (0, a.E2)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            let e = gI.useConfig({ location: "UserSettingsPremiumGuildSubscriptions" }).enabled;
            S.useEffect(() => {
                sm.h.wait(() => {
                    dp.hP(), dp.$o(), (0, gf.CD)(), (0, gN.zS)(null, null, U.tF5.DISCOVERY), (0, gf.tO)(!0);
                });
            }, []);
            let { hasFetchedSubscriptions: t, premiumSubscription: i } = (0, g.cf)([d$.A], () => ({
                    hasFetchedSubscriptions: d$.A.hasFetchedSubscriptions(),
                    premiumSubscription: d$.A.getPremiumTypeSubscription(),
                })),
                n = (0, g_.Y)(),
                s = (0, g.bG)([dJ.A], () => dJ.A.hasFetchedPaymentSources),
                l = (0, g.bG)([gC.A], () => gC.A.isFetchingCurrentUserAppliedBoosts),
                r = !t || !n || !s || l,
                [a, o] = S.useState(!1);
            return (r || a || o(!0), r && !a)
                ? (0, E.jsx)("div", { className: e7()(Ao.kL, Ao.Lq), children: (0, E.jsx)(dA.y, {}) })
                : (0, E.jsxs)("div", {
                      className: Ao.kL,
                      children: [
                          (0, E.jsx)("div", { className: Ao.Tp }),
                          (0, E.jsx)("div", {
                              className: Ao.Qs,
                              children: e
                                  ? (0, E.jsx)(Aa, { premiumSubscription: i })
                                  : (0, E.jsx)(mV, { premiumSubscription: i }),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t["+CbP2v"]), j.intl.string(j.t.Nn1lJy)],
    }),
    Ad = (0, a.zZ)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [Au] }),
    Ac = (0, a.t_)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => j.intl.string(j.t["+CbP2v"]),
        buildLayout: () => [Ad],
    }),
    Ag = (0, a.i4)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["+CbP2v"]),
        icon: gp._,
        buildLayout: () => [Ac],
    });
var Am = i(153659),
    AA = i(155984),
    Ah = i(357758),
    AE = i(262077),
    AS = i(696986),
    AT = i(898555);
function Ax(e) {
    let { onClickManageSubscription: t, count: i } = e;
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsx)(eV.D, { variant: "heading-md/bold", children: j.intl.string(j.t["KzCF/6"]) }),
            (0, E.jsx)(AS.h, { size: 4 }),
            (0, E.jsx)(es.E, { variant: "text-md/normal", className: AT.yV, children: j.intl.string(j.t["3D7qCu"]) }),
            (0, E.jsx)(AS.h, { size: 24 }),
            (0, E.jsxs)("div", {
                className: AT.Nr,
                children: [
                    (0, E.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: AT.RI }),
                    (0, E.jsxs)("div", {
                        className: AT.FS,
                        children: [
                            (0, E.jsx)(eV.D, {
                                variant: "heading-xl/semibold",
                                className: AT.wx,
                                children: j.intl.string(j.t["KzCF/6"]),
                            }),
                            (0, E.jsx)(es.E, {
                                variant: "text-md/normal",
                                className: AT.h_,
                                children: j.intl.format(j.t["m+pcOO"], { numSubscriptions: i }),
                            }),
                        ],
                    }),
                    (0, E.jsx)(ek.$, {
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
var Ap = i(872351),
    Af = i(9113),
    AN = i(599941),
    A_ = i(384684),
    AI = i(2242);
let AC = [];
var Ab = i(885574),
    Av = i(912851),
    Ay = i(497267);
let Aj = function (e) {
    let { label: t, onClick: i, submitting: n } = e;
    return (0, E.jsx)(en.D, {
        onClick: n ? void 0 : i,
        className: Ay.x6,
        children: (0, E.jsxs)("div", {
            className: Ay.hQ,
            children: [
                n
                    ? (0, E.jsx)(dA.y, { type: dA.y.Type.PULSING_ELLIPSIS, className: Ay.__invalid_spinner })
                    : (0, E.jsx)(es.E, { variant: "text-md/medium", className: Ay.Pf, children: t }),
                (0, E.jsx)(el.a, { size: "md", color: "currentColor", className: Ay.UE }),
            ],
        }),
    });
};
var AO = i(465932),
    AR = i(543767),
    AL = i(951555),
    AD = i(790284),
    AP = i(636194),
    AG = i(624456),
    AM = i(710144),
    AU = i(815332),
    AV = i(162093),
    Ak = i(960309);
function Aw(e) {
    let { transitionState: t, groupListing: i, listing: n, subscription: s, onClose: l } = e,
        r = (0, sJ.GV)(),
        { analyticsLocations: a } = (0, n1.Ay)(e6.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
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
                        return i(!0), await dp.M2(t, e), !0;
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
    let g = n.role_benefits.benefits.filter((e) => e.ref_type === AI.bN.CHANNEL),
        m = n.role_benefits.benefits.filter((e) => e.ref_type === AI.bN.INTANGIBLE),
        A = rl()(s.currentPeriodEnd).format("MMMM Do, YYYY"),
        h = j.intl.formatToPlainString(j.t.KsMRP5, {
            numChannels: g.length,
            numAdditionalBenefits: m.length,
            subscriptionEndDate: A,
        });
    return (0, E.jsx)(rZ.Modal, {
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
                (0, E.jsx)(AV.x, { listingId: n.id, guildId: i.guild_id, className: Ak.P }),
            ],
        }),
    });
}
var AF = i(319225),
    AB = i(746080),
    Az = i(74669);
function AY(e) {
    let { label: t, value: i, showInfoIcon: n, infoIconTooltipText: s } = e;
    return (0, E.jsxs)("div", {
        className: Az.L0,
        children: [
            (0, E.jsxs)("div", {
                className: Az.a5,
                children: [
                    (0, E.jsx)(eV.D, { variant: "heading-deprecated-12/semibold", className: Az.HU, children: t }),
                    n &&
                        (0, E.jsx)(td.m, {
                            text: s,
                            children: (0, E.jsx)(Ab.m, { size: "xs", color: "currentColor", className: Az.Mo }),
                        }),
                ],
            }),
            (0, E.jsx)(eV.D, { variant: "heading-xl/semibold", className: Az.sx, children: i }),
        ],
    });
}
function AX(e) {
    let { subscription: t } = e,
        { analyticsLocations: i } = (0, n1.Ay)(),
        [n] = (0, AR.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: i,
            analyticsLocation: e6.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        s = (0, g.bG)([dJ.A], () => dJ.A.hasFetchedPaymentSources);
    return null != n && s ? (0, E.jsx)(AL.A, { subscription: t, currentInvoicePreview: n }) : (0, E.jsx)(dA.y, {});
}
function AH(e) {
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
        : (0, E.jsx)(s7.D, {
              label: j.intl.string(j.t["4neDM+"]),
              children: (0, E.jsx)("div", {
                  className: Az.__invalid_rowButtons,
                  children: i
                      ? (0, E.jsx)(ek.$, {
                            variant: "primary",
                            text: j.intl.string(j.t.y3mAE4),
                            onClick: r,
                            loading: n,
                        })
                      : (0, E.jsxs)(E.Fragment, {
                            children: [
                                !t && !s && (0, E.jsx)(Aj, { label: j.intl.string(j.t.FRbWR8), onClick: a }),
                                (0, E.jsx)(Aj, { label: j.intl.string(j.t.Dx0lF7), onClick: l }),
                            ],
                        }),
              }),
          });
}
let AK = function (e) {
    let { subscription: t } = e,
        {
            listing: i,
            groupListing: n,
            guild: s,
            expanded: l,
            handleToggleExpanded: r,
            subscriptionInfo: a,
        } = (function (e) {
            let t = (0, AG.M)(e),
                i = (0, g.bG)([AP.A], () => AP.A.getSubscriptionListingForPlan(t)),
                n = (0, g.bG)([AP.A], () =>
                    null != i ? AP.A.getSubscriptionGroupListingForSubscriptionListing(i.id) : null,
                ),
                s = (0, g.bG)([eh.A], () => eh.A.getGuild(n?.guild_id)),
                [l, r] = S.useState(!1),
                { fetchSubscriptionsSettings: a } = (0, AN.XE)();
            S.useEffect(() => {
                l && null != s && null == AP.A.getSubscriptionSettings(s.id) && a(s.id);
            }, [l, s, a]);
            let o =
                null == i
                    ? void 0
                    : (function (e) {
                          let { subscription: t } = e,
                              i = rl()(t.currentPeriodEnd).format("M/D/YY"),
                              n = null != t.price ? (0, dI.$g)(t.price, t.currency) : "",
                              s = rl()(t.createdAt).format("M/D/YY"),
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
        c = (0, sJ.GV)(),
        { analyticsLocations: m } = (0, n1.Ay)(),
        { shouldHideGuildPurchaseEntryPoints: A } = (0, AO.MH)(s?.id),
        h = t?.isPurchasedViaAppleGeneric;
    if (null == n || null == i || null == a) return null;
    async function T() {
        try {
            d(!0), await dp.QP(t, m), (0, AF.E)({ title: j.intl.string(j.t.oPV2cy), body: j.intl.string(j.t.DdRizV) });
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
        className: Az.kL,
        children: [
            (0, E.jsx)(AM.A, {
                onClick: r,
                className: Az.N1,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: n } = e;
                    return (0, E.jsxs)(E.Fragment, {
                        children: [
                            null != s && (0, E.jsx)(mt.Ay, { guild: s, active: !0, size: mt.Ay.Sizes.MEDIUM }),
                            (0, E.jsxs)("div", {
                                className: Az.if,
                                children: [
                                    (0, E.jsx)(es.E, {
                                        variant: "text-md/medium",
                                        className: Az.J5,
                                        children: null != s ? s.name : j.intl.string(j.t["He+cmd"]),
                                    }),
                                    (0, E.jsxs)("div", {
                                        className: Az.xp,
                                        children: [
                                            (0, E.jsx)(es.E, {
                                                variant: "text-sm/normal",
                                                className: Az.KR,
                                                children: i.name,
                                            }),
                                            x
                                                ? (0, E.jsx)(sS.Lp, { text: j.intl.string(j.t["7uFZGt"]) })
                                                : C
                                                  ? (0, E.jsx)(sS.Lp, {
                                                        text: j.intl.string(j.t["6anton"]),
                                                        color: er.A.unsafe_rawColors.BRAND_500.css,
                                                    })
                                                  : p
                                                    ? (0, E.jsx)(td.m, {
                                                          text: j.intl.string(j.t.eSuJE2),
                                                          children: (0, E.jsx)("div", {
                                                              children: (0, E.jsx)(sS.Lp, {
                                                                  className: Az.qc,
                                                                  text: j.intl.string(j.t.NrRwIl),
                                                                  color: er.A.unsafe_rawColors.YELLOW_300.css,
                                                              }),
                                                          }),
                                                      })
                                                    : null,
                                            h
                                                ? (0, E.jsx)(td.m, {
                                                      text: j.intl.string(j.t.nv1IqK),
                                                      children: (0, E.jsx)("div", {
                                                          children: (0, E.jsx)(sS.Lp, {
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
                                    className: e7()(Az.D6, { [Az.S7]: l }),
                                }),
                            }),
                        ],
                    });
                },
            }),
            null != n && l
                ? (0, E.jsxs)("div", {
                      id: c,
                      children: [
                          (0, E.jsx)("div", { className: Az.yF }),
                          (0, E.jsx)(AU.A, { groupListingId: n.id, subscription: t, className: Az.kE }),
                          (0, E.jsxs)("div", {
                              className: Az.Zx,
                              children: [
                                  (0, E.jsx)(AY, { label: I, value: _ }),
                                  (0, E.jsx)(AY, {
                                      label: j.intl.string(j.t.dltUMH),
                                      value: f,
                                      showInfoIcon: C,
                                      infoIconTooltipText: C ? j.intl.string(j.t["/q6fpa"]) : void 0,
                                  }),
                                  (0, E.jsx)(AY, { label: j.intl.string(j.t.AOcwWB), value: N }),
                              ],
                          }),
                          (0, E.jsx)(AS.h, { size: 16 }),
                          !x &&
                              !h &&
                              (0, E.jsx)(s7.D, {
                                  label: j.intl.string(j.t.wmMFvA),
                                  children: (0, E.jsx)(AX, { subscription: t }),
                              }),
                          !b &&
                              (0, E.jsx)(AH, {
                                  isTrial: C,
                                  isCancelled: x,
                                  isResubscribing: o,
                                  shouldHideRoleSubscriptionEntryPoints: A,
                                  onCancelSubscriptionClick: function () {
                                      if (null != s && null != n && null != i) {
                                          var e;
                                          (e = { groupListing: n, listing: i, subscription: t }),
                                              (0, K.openModal)((t) => (0, E.jsx)(Aw, { ...t, ...e }));
                                      }
                                  },
                                  onChangePlanClick: function () {
                                      null != s &&
                                          ((0, s9.pX)(U.BVt.CHANNEL(s.id, AB.VV.ROLE_SUBSCRIPTIONS)),
                                          (0, sZ.default)(),
                                          Av.A.show(
                                              U.kqX.BACK_TO_PREVIOUS_SCREEN,
                                              void 0,
                                              j.intl.string(j.t.DvbaM4),
                                              () => {
                                                  AD.A.setState({ subsection: nH.nR }),
                                                      (0, eq.openUserSettings)(u.X.SUBSCRIPTIONS_PANEL);
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
var AW = i(175880);
let AZ = function (e) {
    let { onGoBack: t } = e,
        i = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, g.bG)([A_.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [A_.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                i = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (i = !0);
                            }),
                            i)
                                ? AI.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? AI.M_.NONE
                                  : AI.M_.IN_SUBSCRIPTION_SERVER;
                        })([A_.A]),
                    ) === AI.M_.SUBSCRIBED,
                i = (0, g.bG)([d$.A], () => d$.A.getActiveGuildSubscriptions()),
                n = S.useRef(!1);
            return (
                S.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: i, hasRoleSubscriptions: n } = e,
                            s = d$.A.getActiveGuildSubscriptions();
                        return (
                            ((s?.length ?? 0) === 0 && !!n) || (!!t && !i) || (!i && !d$.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: n.current }) &&
                        ((n.current = !0), dp.hP());
                }, [e, t]),
                i ?? AC
            );
        })(),
        { loading: n } = (0, AN.eb)(i);
    return ((0, Af.A)(dv.Fr ? "role-subscriptions-user-setting" : void 0), n)
        ? (0, E.jsx)(dA.y, {})
        : 0 === i.length
          ? null
          : (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(ek.$, { text: j.intl.string(j.t.hqyhKQ), icon: Ap.z, variant: "secondary", onClick: t }),
                    (0, E.jsx)(AS.h, { size: 10 }),
                    (0, E.jsx)(ij.n, {
                        label: j.intl.string(j.t["KzCF/6"]),
                        description: j.intl.string(j.t["Y+ucR7"]),
                        children: (0, E.jsx)("div", {
                            className: AW.A,
                            children: i.map((e) => (0, E.jsx)(AK, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var Aq = i(327479),
    AQ = i(388567);
function AJ(e) {
    let { onClickManageSubscription: t, count: i } = e;
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsx)(eV.D, { variant: "heading-md/bold", children: j.intl.string(j.t["48ywCu"]) }),
            (0, E.jsx)(AS.h, { size: 4 }),
            (0, E.jsx)(es.E, { variant: "text-md/normal", className: AQ.yV, children: j.intl.string(j.t.VWxmSo) }),
            (0, E.jsx)(AS.h, { size: 24 }),
            (0, E.jsxs)("div", {
                className: AQ.Nr,
                children: [
                    (0, E.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: AQ._e }),
                    (0, E.jsxs)("div", {
                        className: AQ.FS,
                        children: [
                            (0, E.jsx)(eV.D, {
                                variant: "heading-xl/semibold",
                                className: AQ.wx,
                                children: j.intl.string(j.t["48ywCu"]),
                            }),
                            (0, E.jsx)(es.E, {
                                variant: "text-md/normal",
                                className: AQ.h_,
                                children: j.intl.format(j.t["/esXLj"], { numSubscriptions: i }),
                            }),
                        ],
                    }),
                    (0, E.jsx)(Aq.A, { onClick: t, text: j.intl.string(j.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var A$ = i(548411),
    A0 = i(417098),
    A1 = i(143582),
    A2 = i(915043),
    A3 = i(46367);
function A5(e) {
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
        className: e7()(A3.iE, t),
        children: [
            (0, E.jsx)("div", { className: e7()(A3.wx, n), children: i }),
            l && (0, E.jsx)("div", { className: A3.Qs, children: s }),
        ],
    });
}
var A6 = i(885996),
    A4 = i(144165),
    A8 = i(664121),
    A7 = i(950305),
    A9 = i(943775),
    he = i(123791),
    ht = i(900797),
    hi = i(300118);
let hn = S.createContext({ isOpen: !1, toggleOpen: () => {} });
function hs(e) {
    let { children: t } = e,
        [i, n] = S.useReducer((e) => !e, !1),
        s = S.useMemo(() => ({ isOpen: i, toggleOpen: n }), [i]);
    return (0, E.jsx)(hn.Provider, { value: s, children: t(i) });
}
hs.Toggle = function (e) {
    let { className: t, text: i } = e,
        { isOpen: n, toggleOpen: s } = S.useContext(hn),
        l = n ? ht.t : el.a,
        r = null != i ? i : n ? j.intl.string(j.t.fgq1gs) : j.intl.string(j.t.XJuakA);
    return (0, E.jsxs)(en.D, {
        className: e7()(hi.L, t),
        onClick: s,
        children: [
            (0, E.jsx)(es.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, E.jsx)(l, { size: "sm", color: "currentColor" }),
        ],
    });
};
var hl = i(243217),
    hr = i(328968),
    ha = i(163437),
    ho = i(3432);
function hu(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var hd = i(583995),
    hc = (((s = {})[(s.LOADING = 0)] = "LOADING"), (s[(s.DONE = 1)] = "DONE"), (s[(s.ERROR = 2)] = "ERROR"), s);
function hg(e) {
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
        } = (0, g.cf)([cw.A, cF.A, hr.A, eh.A], () => {
            let e,
                i = cw.A.get(r),
                n = null != i ? cF.A.get(i.skuId) : void 0,
                a = n?.applicationId,
                o = null != i ? hr.A.getForSKU(i.skuId) : null,
                u = null != o && (0, ha.PJ)(o.skuFlags),
                d = u && null != s ? eh.A.getGuild(s) : void 0,
                c = (0, ha.Uo)(t, n),
                g = u && null != s && null == d;
            if (!1 === c && null != l && l.items.length > 0) {
                let t = l.items[0];
                e = cw.A.get(t.planId) ?? void 0;
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
        f = S.useMemo(() => (null != p ? (0, A9.A)(p, 100) : null), [p]),
        N = m?.deleted ?? !1,
        _ = null != m && (0, ha.Se)(m),
        I = t.status === U.Dmq.PAST_DUE,
        { analyticsLocations: C } = (0, n1.Ay)(),
        [b] = (0, AR.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: C,
            analyticsLocation: e6.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        v = hu(t.currentPeriodEnd),
        y = 0 === n;
    return (0, E.jsxs)(A5, {
        headerClassName: hd.dL,
        header:
            !1 === y
                ? (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsxs)("div", {
                              className: hd.VW,
                              children: [
                                  null != f &&
                                      (0, E.jsx)(A4._, { src: f.href, imageClassName: hd.Z2, width: 40, height: 40 }),
                                  (0, E.jsxs)("div", {
                                      className: hd.aF,
                                      children: [
                                          (0, E.jsx)(eV.D, {
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
                              className: hd.Pz,
                              children:
                                  null != p &&
                                  null != u &&
                                  null != m &&
                                  (0, E.jsx)(hS, {
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
                : (0, E.jsx)(dA.y, { type: dA.t.PULSING_ELLIPSIS }),
        children: [
            A &&
                (0, E.jsx)(hE, {
                    type: "warning",
                    title: _
                        ? j.intl.formatToPlainString(j.t.QOnM1y, { subscriptionPeriodEnd: v })
                        : j.intl.formatToPlainString(j.t.HOaZu8, { subscriptionPeriodEnd: v }),
                }),
            !A && h && (0, E.jsx)(hE, { type: "warning", title: j.intl.string(j.t.SmSP8Q) }),
            I && (0, E.jsx)(hE, { type: "danger", title: j.intl.string(j.t.fvOqBo) }),
            (0, E.jsxs)("div", {
                className: hd.zH,
                children: [
                    (0, E.jsx)(hh, {
                        title: j.intl.string(j.t["5D/KEH"]),
                        content: d
                            ? (0, E.jsxs)(E.Fragment, {
                                  children: [
                                      (0, E.jsxs)("span", {
                                          className: hd.yW,
                                          children: [(0, E.jsx)(A8.R, { size: "xs" }), j.intl.string(j.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, E.jsxs)("span", {
                                              className: hd._t,
                                              children: [
                                                  (0, E.jsx)(es.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: j.intl.format(j.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, E.jsx)(mt.Ay, { guild: c, size: mt.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, E.jsxs)("span", {
                                  className: hd.yW,
                                  children: [(0, E.jsx)(A7.n, { size: "xs" }), j.intl.string(j.t["6anEVv"])],
                              }),
                    }),
                    (0, E.jsx)(hm, { invoicePreview: b, subscriptionPlan: o }),
                    (0, E.jsx)(hh, {
                        title: j.intl.string(j.t.dnUzb6),
                        content: hu(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, E.jsx)(hA, { isCancelled: A, subscriptionPeriodEnd: v, renewalPlan: x }),
                ],
            }),
            (0, E.jsx)(hx, {
                subscription: t,
                currentInvoicePreview: b,
                loadingState: n,
                isDeleted: N,
                isCancelled: A,
            }),
            null != p &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, E.jsx)(hT, { appId: p.id, listingBenefits: u.benefits }),
        ],
    });
}
function hm(e) {
    let { subscriptionPlan: t, invoicePreview: i } = e;
    if (null == t) return (0, E.jsx)(hh, { title: j.intl.string(j.t.KI7ERx), content: "" });
    let n = (0, dI.CE)((0, dI.$g)(t.price, t.currency), t.interval, t.intervalCount),
        s = i?.findInvoiceItemByPlanId(t.id);
    if (null == s) return (0, E.jsx)(hh, { title: j.intl.string(j.t.KI7ERx), content: n });
    let l = (0, dI.CE)((0, dI.$g)(s.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, E.jsx)(hh, {
        title: j.intl.string(j.t.KI7ERx),
        content: (0, E.jsxs)(E.Fragment, {
            children: [
                (0, E.jsx)(es.E, { variant: "text-sm/semibold", children: l }),
                l !== n &&
                    (0, E.jsx)(td.m, {
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
function hA(e) {
    let { isCancelled: t, subscriptionPeriodEnd: i, renewalPlan: n } = e;
    if (null != n) {
        let e = (0, dI.CE)((0, dI.$g)(n.price, n.currency), n.interval, n.intervalCount);
        return (0, E.jsx)(hh, {
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
    return (0, E.jsx)(hh, { title: t ? j.intl.string(j.t.enxcAl) : j.intl.string(j.t["Ms+6Zq"]), content: i });
}
function hh(e) {
    let { title: t, content: i } = e;
    return (0, E.jsxs)("div", {
        className: hd.nM,
        children: [
            (0, E.jsx)(es.E, { variant: "text-sm/medium", children: t }),
            (0, E.jsx)(es.E, { variant: "text-sm/medium", className: hd.u4, children: i }),
        ],
    });
}
function hE(e) {
    let { type: t, title: i } = e;
    return (0, E.jsx)(tv.p, {
        messageType: "warning" === t ? tv.Y.WARNING : tv.Y.ERROR,
        className: hd.Xm,
        children: (0, E.jsx)(es.E, { variant: "text-sm/normal", children: i }),
    });
}
function hS(e) {
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
        c = (0, ha.Se)(s),
        { analyticsLocations: m } = (0, n1.Ay)(),
        [A, h] = S.useState(!1),
        T = (0, he.C)(t.id),
        x = (0, g.bG)([cF.A], () => cF.A.getParentSKU(n.skuId), [n.skuId]),
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
            let { subscription: e } = await (0, dp.QP)(l, m);
            if (null == e) return;
            (0, K.openModalLazy)(async () => {
                let { default: t } = await Promise.all([i.e("76229"), i.e("52396")]).then(i.bind(i, 115623));
                return (i) => (0, E.jsx)(t, { ...i, storeListing: n, subscription: hl.A.createFromServer(e) });
            });
        } finally {
            h(!1);
        }
    }
    return (0, E.jsxs)("div", {
        className: hd.fw,
        children: [
            c || (r && a)
                ? null
                : r
                  ? (0, E.jsx)(ek.$, {
                        variant: "secondary",
                        size: "sm",
                        text: j.intl.string(j.t.QtMnkW),
                        onClick: N,
                        loading: A,
                    })
                  : (0, E.jsx)(ek.$, {
                        variant: "secondary",
                        size: "sm",
                        text: j.intl.string(j.t["E8G/tr"]),
                        onClick: function () {
                            (0, K.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([i.e("52266"), i.e("22800")]).then(
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
                (0, E.jsx)(ek.$, {
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
function hT(e) {
    let { appId: t, listingBenefits: i } = e;
    return (0, E.jsx)(hs, {
        children: (e) =>
            (0, E.jsxs)("div", {
                className: hd.PX,
                children: [
                    (0, E.jsxs)("div", {
                        className: hd.wV,
                        children: [
                            e && (0, E.jsx)(es.E, { variant: "text-sm/semibold", children: j.intl.string(j.t.mORL67) }),
                            (0, E.jsx)(hs.Toggle, {
                                className: hd.Bh,
                                text: e ? j.intl.string(j.t.gsbFAw) : j.intl.string(j.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? i.map((e) => {
                              let { id: i, name: n, description: s, icon: l } = e;
                              return (0, E.jsx)(A6.FY, { header: n, icon: (0, ho.N)(t, l), description: s }, i);
                          })
                        : null,
                ],
            }),
    });
}
function hx(e) {
    let { subscription: t, currentInvoicePreview: i, loadingState: n, isDeleted: s, isCancelled: l } = e;
    return null == i
        ? null
        : 0 === n
          ? (0, E.jsx)("div", {
                className: hd.Ji,
                children: (0, E.jsx)(s7.D, {
                    label: j.intl.string(j.t.azZaZa),
                    children: (0, E.jsx)(dA.y, { type: dA.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === n
            ? (0, E.jsx)("div", {
                  className: hd.Ji,
                  children: (0, E.jsxs)(A0.$T, {
                      color: A0.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          j.intl.format(j.t.IIHUUF, { subscriptionId: t.id }),
                          (0, E.jsx)("br", {}),
                          j.intl.format(j.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, E.jsx)("div", {
                  className: hd.Ji,
                  children: (0, E.jsx)(s7.D, {
                      label: j.intl.string(j.t.azZaZa),
                      children: (0, E.jsx)(AL.A, { subscription: t, currentInvoicePreview: i, disabled: s || l }),
                  }),
              });
}
var hp = (((l = {}).HOME = "HOME"), (l.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), l);
i(938796);
var hf = i(38405);
let hN = (0, g.UT)(cw.A, {
    getQueryId: U.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = cw.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && hf.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, gN.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var h_ = i(240248),
    hI = i(237218),
    hC = i(242653);
function hb(e) {
    let { children: t, lineClamp: i = 2, ...n } = e,
        [s, l] = S.useState(!1),
        [r, a] = S.useState(null),
        o =
            null != r &&
            (0, E.jsx)("button", {
                className: hC.x6,
                onClick: () => l((e) => !e),
                children: (0, E.jsxs)(es.E, {
                    className: hC.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        s ? j.intl.string(j.t["JQX/Pb"]) : j.intl.string(j.t.Fbrd8J),
                        s
                            ? (0, E.jsx)(ht.t, { color: er.A.colors.TEXT_BRAND, size: "xs" })
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
                    className: hC.Qs,
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
var hv = i(386447);
function hy(e) {
    let { cta: t, storeListing: i, className: n } = e,
        { applicationId: s, benefits: l, description: r } = i,
        a = S.useMemo(() => (null == i.thumbnail ? null : (0, hI.t)(s, i.thumbnail, 256)), [s, i.thumbnail]),
        { data: o } = hN(i.skuId),
        u = S.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, dI._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, E.jsxs)(A5, {
              className: e7()(hv.iE, n),
              header: (0, E.jsxs)(E.Fragment, {
                  children: [
                      (0, E.jsxs)("div", {
                          className: hv.qd,
                          children: [
                              null != a &&
                                  (0, E.jsx)(A4._, { src: a.href, imageClassName: hv.rW, width: 48, height: 48 }),
                              (0, E.jsxs)("div", {
                                  children: [
                                      (0, E.jsx)(eV.D, { variant: "heading-md/bold", children: i.summary }),
                                      (0, E.jsx)(es.E, { variant: "text-md/medium", children: u }),
                                  ],
                              }),
                          ],
                      }),
                      t,
                  ],
              }),
              children: [
                  !(0, h_.uJ)(r) &&
                      (0, E.jsx)("div", {
                          className: hv.h_,
                          children: (0, E.jsx)(hb, { variant: "text-sm/medium", children: r }),
                      }),
                  null != l &&
                      l.length > 0 &&
                      (0, E.jsx)("div", {
                          className: hv.PX,
                          children: l.map((e) => {
                              let { id: t, name: i, description: n, icon: l } = e;
                              return (0, E.jsx)(A6.FY, { header: i, icon: (0, ho.N)(s, l), description: n }, t);
                          }),
                      }),
              ],
          });
}
var hj = i(185438),
    hO = i(711171);
function hR(e) {
    let {
            app: t,
            currentSubscription: i,
            currentListing: n,
            alternativeListings: s,
            navigateToHome: l,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, A9.A)(t, 100),
        u = (0, ha.PJ)(r.flags),
        d = u ? A8.R : A7.n,
        c = u ? j.intl.string(j.t["46YF2D"]) : j.intl.string(j.t.fFyGiA),
        m = i.metadata?.application_subscription_guild_id,
        A = (0, g.bG)([eh.A], () => (u && null != m ? eh.A.getGuild(m) : void 0), [m, u]),
        h = (0, g.bG)([cF.A], () => {
            if (null != a) return cF.A.get(a);
        }, [a]),
        S = hu(i.currentPeriodEnd);
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsxs)("div", {
                className: hO.wx,
                children: [
                    null != o && (0, E.jsx)(A4._, { src: o.href, imageClassName: hO.Z2, width: 48, height: 48 }),
                    (0, E.jsxs)("div", {
                        children: [
                            (0, E.jsx)(eV.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, E.jsxs)("div", {
                                className: hO.p4,
                                children: [
                                    (0, E.jsxs)(eV.D, {
                                        variant: "heading-md/normal",
                                        className: hO.N4,
                                        children: [(0, E.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != A &&
                                        (0, E.jsxs)(E.Fragment, {
                                            children: [
                                                (0, E.jsx)(es.E, { variant: "text-md/normal", children: "\u2022" }),
                                                (0, E.jsxs)("span", {
                                                    className: hO.vP,
                                                    children: [
                                                        (0, E.jsx)(mt.Ay, { guild: A, size: mt.Ay.Sizes.SMOL }),
                                                        (0, E.jsx)(eV.D, {
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
            (0, E.jsx)(hs, {
                children: (e) =>
                    (0, E.jsxs)("div", {
                        className: hO._B,
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
                            (0, E.jsx)(hs.Toggle, {
                                text: e ? j.intl.string(j.t["1Rkq/E"]) : j.intl.string(j.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, E.jsxs)("div", {
                className: hO.x0,
                children: [
                    (0, E.jsx)(hy, {
                        storeListing: n,
                        className: hO.o3,
                        cta: (0, E.jsxs)("div", {
                            className: hO.cJ,
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
                                  hy,
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
                            : (0, E.jsx)(hL, { storeListing: e, guildId: m, navigateToHome: l }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function hL(e) {
    let { storeListing: t, guildId: i, navigateToHome: n } = e,
        { openModal: s } = (0, hj.A)({
            analyticsLocation: U.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: i,
            disableGuildSelector: !0,
            onComplete: n,
        });
    return (0, E.jsx)(hy, {
        storeListing: t,
        cta: (0, E.jsx)(ek.$, { variant: "primary", size: "sm", text: j.intl.string(j.t["+KwmBt"]), onClick: s }),
    });
}
class hD extends S.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, E.jsxs)(A0.$T, {
                  color: A0.Hv.DANGER,
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
function hP(e) {
    let { subscriptions: t, updateHeader: i } = e,
        [n, s] = S.useState({ route: hp.HOME }),
        { route: l } = n;
    function r() {
        s({ route: hp.HOME });
    }
    let a = (e) => {
            s({ route: hp.SWITCH_APP_PLANS, ...e }), i(j.intl.string(j.t.VFqtkP), r);
        },
        [o, u] = S.useState({});
    S.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: hc.LOADING })),
                (0, A1._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: hc.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: hc.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, A2.E)(),
        c = d !== A2.mJ.LOADED;
    switch (l) {
        case hp.HOME:
            return (0, E.jsx)(E.Fragment, {
                children: t.map((e) =>
                    (0, E.jsx)(
                        hD,
                        {
                            subscription: e,
                            children: (0, E.jsx)(hg, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? hc.LOADING : (o[e.id] ?? hc.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case hp.SWITCH_APP_PLANS:
            let { route: g, ...m } = n;
            return (0, E.jsx)(hR, { ...m, navigateToHome: r });
        default:
            (0, N.xb)(l);
    }
}
var hG = i(131352);
function hM(e) {
    let { onGoBack: t } = e,
        i = (0, g.yK)(
            [d$.A],
            () =>
                d$.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [n, s] = S.useState();
    return (
        null == n && (n = (0, E.jsx)(hU, { onBack: t, title: j.intl.string(j.t["DB/m9a"]) })),
        (0, E.jsxs)("div", {
            children: [
                n,
                (0, E.jsx)("div", {
                    className: hG.A,
                    children: (0, E.jsx)(hP, {
                        subscriptions: i,
                        updateHeader: function (e, t) {
                            s(
                                (0, E.jsx)(hU, {
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
function hU(e) {
    let { onBack: t, title: i } = e;
    return (0, E.jsxs)("div", {
        className: hG.D,
        children: [
            (0, E.jsx)(rH.K, {
                "aria-label": j.intl.string(j.t["13/7kX"]),
                icon: () => (0, E.jsx)(A$.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, E.jsx)(eV.D, { variant: "heading-lg/semibold", children: i }),
        ],
    });
}
var hV = i(881489),
    hk = i(366999),
    hw = i(466919),
    hF = i(406252);
function hB(e) {
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
        ? ((t = j.intl.string(hw.default["/S02sx"])), (i = j.intl.string(hw.default.OPJNST)))
        : n
          ? ((t = j.intl.string(j.t["hT6i/0"])),
            (i = null != a ? j.intl.format(j.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = j.intl.string(j.t["3G0CTC"])),
            (i = r === s0.xc.FP_SUB_PAUSED ? j.intl.format(j.t.MMvaIG, { resumeDate: l.toDate() }) : null));
    let u = e7()({ [hF.Hs]: n, [hF.mT]: !n }),
        d = e7()({ [hF.CQ]: n, [hF.ZM]: !n }),
        c = e7()({ [hF.EM]: !n });
    return (0, E.jsxs)("div", {
        className: hF.r6,
        children: [
            (0, E.jsxs)("div", {
                className: hF.Nv,
                children: [
                    (0, E.jsx)(eV.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== i && (0, E.jsx)(es.E, { variant: "text-sm/normal", children: i }),
                ],
            }),
            !o &&
                (0, E.jsx)("div", {
                    className: hF.ZS,
                    children: (0, E.jsx)("div", {
                        className: u,
                        children: (0, E.jsx)(es.E, { variant: "text-sm/semibold", className: d, children: s }),
                    }),
                }),
        ],
    });
}
let hz = function (e) {
    let { fractionalPremiumInfo: t, className: i, activationDate: n, hasPremiumGroup: s } = e,
        l = (0, uh.kX)(t),
        r = l.length > 0,
        a = (0, hk.Ay)(t.endsAt, hk.yE.SHORT_TIME),
        o = r ? l : a;
    return (0, E.jsx)("div", {
        children: (0, E.jsxs)("div", {
            className: e7()(i, hF.f8),
            children: [
                (0, E.jsx)("div", {
                    className: hF.J_,
                    children: (0, E.jsxs)("div", {
                        className: hF.Bh,
                        children: [
                            (0, E.jsx)("div", {
                                className: hF.xt,
                                children: (0, E.jsx)(ur.t, { size: "md", color: "white", className: hF.T8 }),
                            }),
                            (0, E.jsx)("div", {
                                className: hF.pt,
                                children: (0, E.jsx)(eV.D, {
                                    variant: "heading-md/semibold",
                                    children: j.intl.string(j.t.DFMPWS),
                                }),
                            }),
                            (0, E.jsx)(es.E, {
                                className: hF.PJ,
                                variant: "text-md/semibold",
                                children: l.length > 0 ? l : j.intl.string(j.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, E.jsx)(hB, {
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
var hY = i(983048);
function hX(e) {
    let t,
        {
            user: i,
            planId: n,
            count: s,
            userPremiumSubscription: l,
            unconsumedFractionalPremiumUnits: r = [],
            hasPremiumGroup: a,
        } = e,
        [o, u] = (0, g.yK)([cw.A], () => [cw.A.get(n), null != l ? cw.A.get(l.planId) : null]);
    if (null == o || uh.Ay.getInterval(n).intervalType !== s0.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        c = o.skuId === d,
        m = uh.Ay.getDisplayName(n);
    if (a) t = j.intl.string(hw.default["5asczk"]);
    else if (c && null != l) {
        let e;
        e = new Date(l.status === U.Dmq.PAUSED && null != l.pauseEndsAt ? l.pauseEndsAt : l.currentPeriodEnd);
        let i = (0, uh._e)(e, r);
        t = j.intl.formatToPlainString(j.t["5CNRRA"], { date: i ?? 0 });
    } else t = j.intl.formatToPlainString(j.t.eNXZ5O, { planName: m });
    let A = i.hasFreePremium() || (null != l && l.isPurchasedExternally);
    return (0, E.jsxs)("div", {
        className: hF.Bh,
        children: [
            (0, E.jsx)("div", {
                className: e7()({
                    [hF.sr]: o.skuId === s0.pe.TIER_0,
                    [hF.lP]: o.skuId === s0.pe.TIER_1,
                    [hF.eb]: o.skuId === s0.pe.TIER_2,
                }),
                children: (0, E.jsx)(ur.t, { size: "md", color: "currentColor", className: hF.Kk }),
            }),
            (0, E.jsxs)("div", {
                className: hF.pt,
                children: [
                    (0, E.jsx)(eV.D, {
                        variant: "heading-md/semibold",
                        children: j.intl.format(j.t.LzobT9, { planName: m }),
                    }),
                    !A &&
                        (0, E.jsx)(eV.D, {
                            className: hF.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, E.jsx)(es.E, {
                className: hF.PJ,
                variant: "text-md/semibold",
                children: j.intl.format(j.t["ess/xl"], { count: s }),
            }),
        ],
    });
}
let hH = function (e) {
    let { className: t, entitlements: i } = e,
        n = e$()(Array.from(i))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: i, consumed: n } = e;
                return null != t && null != i && !n;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        s = (0, g.yK)([cv.A], () => cv.A.getUnactivatedFractionalPremiumUnits()),
        l = (0, g.bG)([d$.A], () => d$.A.getPremiumSubscription()),
        r = (0, g.bG)([d$.A], () => null == d$.A.getPremiumTypeSubscription()),
        a = Object.keys(n).some((e) => e === s0.gD.PREMIUM_MONTH_TIER_1),
        o = (0, g.bG)([iA.default], () => iA.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsx)("div", {
                className: e7()(t, hF.xF, hF.J_),
                children: Object.keys(n).map((e) =>
                    (0, E.jsx)(
                        hX,
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
                            className: hF.eT,
                            variant: "text-md/normal",
                            children: j.intl.string(j.t["VNr4+O"]),
                        }),
                        (0, E.jsx)(hY.i, {}),
                    ],
                }),
        ],
    });
};
var hK = i(830991);
function hW(e) {
    let t,
        { subscription: i, withOverheadSeparator: n } = e,
        { analyticsLocations: s } = (0, n1.Ay)(),
        [l] = (0, AR.YV)({
            subscriptionId: i.id,
            renewal: !0,
            analyticsLocations: s,
            analyticsLocation: e6.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == l) return null;
    let r = n ? hK.r : hK.a,
        a = l.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, uh.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = cw.A.get(o);
    tZ()(null != u, "Missing plan");
    let d = (0, dI.$g)(l.total, l.currency);
    return (
        u.interval === s0.WT.YEAR
            ? (t = j.intl.format(j.t["jPz/39"], {
                  price: d,
                  termsUrl: U.X7G.TERMS,
                  paidURL: U.X7G.PAID_TERMS,
                  privacyUrl: U.X7G.PRIVACY,
              }))
            : u.interval === s0.WT.MONTH &&
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
function hZ(e) {
    let { subscription: t, withOverheadSeparator: i } = e;
    return t.status === U.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, E.jsx)(hW, { subscription: t, withOverheadSeparator: i });
}
var hq = i(37397),
    hQ = i(533792);
let hJ = { [nH.nR]: "role_subscriptions_panel", [nH.PZ]: "application_subscriptions_panel" };
function h$() {
    return (0, E.jsx)(eO.Z, {
        className: hQ.wb,
        type: eO.Z.Types.CUSTOM,
        children: (0, E.jsxs)(r0.A, {
            align: r0.A.Align.CENTER,
            children: [
                (0, E.jsx)(p.A, { game: null, size: p.M.SMALL, className: hQ.pV }),
                (0, E.jsx)("span", { className: hQ.O, children: j.intl.string(j.t["jy/hyj"]) }),
            ],
        }),
    });
}
function h0(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, Ah._)(e, t));
}
function h1() {
    let e = (0, g.bG)([cv.A], () => cv.A.getForApplication(s0.tv), [], h0);
    return (
        S.useEffect(() => {
            (0, c5.LM)(s0.tv);
        }, []),
        (0, E.jsx)(ij.n, {
            label: j.intl.string(j.t["2GKrvn"]),
            description: j.intl.string(j.t.kNEjGm),
            children:
                null != e && uh.Ay.hasAccountCredit(e)
                    ? (0, E.jsx)(hH, { className: hQ.fX, entitlements: e })
                    : (0, E.jsx)(h$, {}),
        })
    );
}
function h2() {
    return (0, E.jsx)("hr", { className: hQ.hr });
}
let h3 = function () {
        var e;
        let t = (0, g.bG)([d$.A], () => d$.A.getPremiumTypeSubscription()),
            i = (0, AE.A)({ subscriptionFilter: (e) => hq.Hy.has(e.status) }),
            n = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()),
            s = i.length > 1,
            l = (0, g.bG)(
                [dJ.A],
                () => (null != t && null != t.paymentSourceId ? dJ.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, g.bG)([d$.A], () => d$.A.hasFetchedSubscriptions()),
            a = (0, g.bG)([d_.A], () => d_.A.isBusy),
            o = (0, g_.Y)(),
            d = AD.A.useField("subsection");
        S.useEffect(() => {
            (0, l8._)(null != d ? hJ[d] : u.X.SUBSCRIPTIONS_PANEL);
        }, [d]);
        let c = (0, g.bG)([d$.A], () => d$.A.getActiveApplicationSubscriptions()?.length ?? 0),
            m = (0, g.bG)(
                [d$.A],
                () =>
                    Object.values(d$.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === U.rzx.GUILD)
                        .filter((e) => e.status !== U.Dmq.ENDED).length,
            ),
            A = (0, gb.A)({ forceFetch: !0 }),
            h = (0, hV.ds)(),
            T = null !== t ? t.currentPeriodEnd : void 0,
            x =
                !(h && !(A.unactivatedUnits.length > 0)) &&
                (A.fractionalState !== s0.xc.NONE || A.unactivatedUnits.length > 0);
        return (S.useEffect(
            () => (
                sm.h.wait(() => {
                    (0, gN.zS)(), dp.hP(), (0, gf.CD)(), dp.$o();
                }),
                function () {
                    AD.A.resetState();
                }
            ),
            [],
        ),
        eX.A.enabled)
            ? (0, E.jsx)(dg.A, {})
            : r && o
              ? d === nH.nR
                  ? (0, E.jsx)(AZ, { onGoBack: () => AD.A.setState({ subsection: null }) })
                  : d === nH.PZ
                    ? (0, E.jsx)(hM, { onGoBack: () => AD.A.setState({ subsection: null }) })
                    : (0, E.jsx)("div", {
                          className: hQ.kL,
                          children: (0, E.jsxs)("div", {
                              className: hQ.Qs,
                              children: [
                                  s ? (0, E.jsx)(hq.Sb, {}) : null,
                                  null != t
                                      ? (0, E.jsx)(hq.Ay, {
                                            subscription: t,
                                            paymentSource: l,
                                            busy: a,
                                            subscriptions: i,
                                        })
                                      : (0, E.jsx)(hq.TC, {}),
                                  x &&
                                      ((e = !!n?.isPremiumWithPremiumGroup()),
                                      (0, E.jsxs)("section", {
                                          children: [
                                              (0, E.jsx)(eV.D, {
                                                  variant: "heading-md/bold",
                                                  className: hQ.HL,
                                                  children: j.intl.string(j.t.Obre8v),
                                              }),
                                              (0, E.jsx)(es.E, {
                                                  variant: "text-md/normal",
                                                  className: hQ.JU,
                                                  children: j.intl.format(j.t["7Zi06b"], {
                                                      helpCenterLink: ty.A.getArticleURL(
                                                          U.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, E.jsx)(hz, {
                                                  className: hQ.fX,
                                                  fractionalPremiumInfo: A,
                                                  activationDate: T,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, E.jsx)(h1, {}),
                                  m > 0 &&
                                      (0, E.jsxs)(E.Fragment, {
                                          children: [
                                              (0, E.jsx)(h2, {}),
                                              (0, E.jsx)(Ax, {
                                                  count: m,
                                                  onClickManageSubscription: () => AD.A.setState({ subsection: nH.nR }),
                                              }),
                                          ],
                                      }),
                                  c > 0 &&
                                      (0, E.jsxs)(E.Fragment, {
                                          children: [
                                              (0, E.jsx)(h2, {}),
                                              (0, E.jsx)(AJ, {
                                                  count: c,
                                                  onClickManageSubscription: () => {
                                                      AD.A.setState({ subsection: nH.PZ }),
                                                          G.default.track(
                                                              U.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                          );
                                                  },
                                              }),
                                          ],
                                      }),
                                  (0, E.jsx)(h2, {}),
                                  null != t ? (0, E.jsx)(hZ, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, E.jsx)("div", { className: e7()(hQ.kL, hQ.Lq), children: (0, E.jsx)(dA.y, {}) });
    },
    h5 = (0, a.E2)(u.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [j.intl.string(j.t.trSpHX), j.intl.string(j.t["2GKrvn"])],
        Component: () => (0, E.jsx)(h3, {}),
    }),
    h6 = (0, a.zZ)(u.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [j.intl.string(j.t.trSpHX), j.intl.string(j.t["2GKrvn"])],
        buildLayout: () => [h5],
    }),
    h4 = (0, a.t_)(u.X.SUBSCRIPTIONS_PANEL, { useTitle: () => j.intl.string(j.t.trSpHX), buildLayout: () => [h6] }),
    h8 = (0, a.i4)(u.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.trSpHX),
        icon: Am.L,
        usePersistentBadge: function () {
            let e = (0, AA.l)();
            return S.useMemo(
                () => ({
                    badgeType: h.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    customBadge: e ? (0, E.jsx)(rk.E, { size: "xs", color: er.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [e],
            );
        },
        buildLayout: () => [h4],
    }),
    h7 = (0, a.WI)(u.X.BILLING_SECTION, {
        useTitle: () => j.intl.string(j.t.oeUm2s),
        buildLayout: () => [gx, Ag, h8, gg, ce],
    });
var h9 = i(540999),
    Ee = i(306471),
    Et = i(964355),
    Ei = i(172272);
let En = (0, a.zD)(u.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, g.bG)([ox.default], () => ox.default.isAxeEnabled),
        setValue: (e) => (0, oT.x)({ axeEnabled: e }),
    }),
    Es = (0, a.zD)(u.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, g.bG)([ox.default], () => ox.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, oT.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var El = i(276086),
    Er = i(354328);
let Ea = (0, a.zD)(u.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, Er.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, El.L)("highlight_mana_components", e);
        },
    }),
    Eo = (0, a.zD)(u.X.HIGHLIGHT_MANA_TEXT_OVERRIDES, {
        useTitle: () => "Audit overridden Mana Text (dashed red)",
        useSubtitle: () =>
            "Outlines Mana Text/Heading whose font is overridden by CSS with a dashed red border \u2014 it renders through the component but won\u2019t change between control and variant. Higher cost (measures computed styles), so keep it on only while auditing.",
        useValue: () => (0, Er.A)("highlight_mana_text_overrides"),
        setValue: (e) => {
            (0, El.L)("highlight_mana_text_overrides", e);
        },
    }),
    Eu = (0, a.zD)(u.X.HIGHLIGHT_MANA_TEXT, {
        useTitle: () => "Mana Text Migration Highlighter",
        useSubtitle: () =>
            "Outlines Mana Text/Heading components in green, text composing a variant (experiment-reachable but not migrated) in yellow, and all other rendered text in red.",
        useValue: () => (0, Er.A)("highlight_mana_text"),
        setValue: (e) => {
            (0, El.L)("highlight_mana_text", e);
        },
    }),
    Ed = (0, a.zD)(u.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, Er.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, El.L)("highlight_void_toggleables", e);
        },
    }),
    Ec = (0, a.sN)(u.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, g.bG)([ox.default], () => ox.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: Ei.YR,
        markers: Array.from({ length: Ei.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => Ei.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            Ei.Or.getState().setHorizontalSpacing(e);
        },
    }),
    Eg = (0, a.zD)(u.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, g.bG)([ox.default], () => ox.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, oT.x)({ layoutDebuggingEnabled: e });
        },
    }),
    Em = (0, a.sN)(u.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, g.bG)([ox.default], () => ox.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: Ei.YR,
        markers: Array.from({ length: Ei.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => Ei.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            Ei.Or.getState().setVerticalSpacing(e);
        },
    }),
    EA = (0, a.zZ)(u.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [Es, Eg, Ec, Em, Ea, Eu, Eo, Ed, En],
    }),
    Eh = (0, a.zD)(u.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => L.HZ.useSetting(),
        setValue: (e) => {
            L.HZ.updateSetting(e);
        },
    });
var EE = i(173936),
    ES = i(260598),
    ET = i(148810),
    Ex = i(380610),
    Ep = i(986238),
    Ef = i(281161),
    EN = i(663894);
let E_ = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    EI = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function EC(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class Eb extends S.Component {
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
        return (0, E.jsxs)(r0.A, {
            direction: r0.A.Direction.VERTICAL,
            className: e7()(Ef.oS, iz.SX, EN.N, Ef.nM),
            children: [
                (0, E.jsx)(iM.A, {
                    className: e7()(Ef.lL, { [Ef.zi]: n }),
                    onClick: n ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, E.jsxs)(r0.A, {
                    className: iz.QB,
                    children: [
                        (0, E.jsx)(r0.A.Child, {
                            basis: "50%",
                            children: (0, E.jsx)(rX.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: EI,
                                onSelectionChange: this.handleOverrideTypeChanged,
                                value: t,
                                disabled: n,
                            }),
                        }),
                        (0, E.jsx)(r0.A.Child, {
                            wrap: !0,
                            basis: "50%",
                            children: (0, E.jsx)(rq.k, {
                                label: "branch" === t ? "Branch Name" : "Commit SHA",
                                value: i,
                                onChange: this.handleOverrideIdChanged,
                                disabled: n,
                            }),
                        }),
                    ],
                }),
                (0, E.jsxs)(r0.A.Child, {
                    children: [
                        null != s &&
                            "" !== s &&
                            (0, E.jsx)(es.E, {
                                className: Ef.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: s,
                            }),
                        (0, E.jsxs)(es.E, {
                            variant: "text-sm/normal",
                            className: Ef.AS,
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
class Ev extends S.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, Ex.bD)();
        this.setState({ loading: !1, buildOverrides: e, loadedBuildOverrides: e$().cloneDeep(e), errors: {} });
    }
    isDirty() {
        let { buildOverrides: e, loadedBuildOverrides: t } = this.state;
        return !e$().isEqual(e, t);
    }
    componentDidMount() {
        this.refreshBuildOverrides();
    }
    getAvailableProjects() {
        let { buildOverrides: e } = this.state;
        if (null == e) return [];
        let t = Object.keys(e);
        return e$().without(E_, ...t);
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
        this.setState({ buildOverrides: e$().cloneDeep(this.state.loadedBuildOverrides), errors: {}, didSave: !1 });
    };
    handleSaveChanges = async () => {
        let { buildOverrides: e } = this.state;
        if (null == e) return;
        this.setState({ saving: !0 });
        let t = await (0, ET.Zk)(e);
        if (200 === t.status) {
            let e = t.body;
            this.setState({
                buildOverrides: e,
                loadedBuildOverrides: e$().cloneDeep(e),
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
        (0, K.openModal)((t) => (0, E.jsx)(Ey, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, E.jsx)(iy.pp, {
            theme: iR.A.theme,
            className: e7()(iz.eT, iz.SX),
            children: (0, E.jsx)(iy.SG, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: i } = this.state;
        return null == e
            ? null
            : e$().map(e, (e, n) =>
                  (0, E.jsx)(
                      Eb,
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
            : (0, E.jsx)(ek.$, { variant: "secondary", text: "Reload App", onClick: () => location.reload() });
    }
    renderLinkButton() {
        let { buildOverrides: e } = this.state;
        return null == e || 0 === Object.keys(e).length
            ? null
            : (0, E.jsx)(td.m, {
                  text: "Generate Public Link",
                  children: (0, E.jsx)(rH.K, {
                      variant: "secondary",
                      icon: EE.q,
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
                (0, E.jsx)(ek.$, {
                    variant: "critical-primary",
                    text: "Discard Changes",
                    onClick: this.handleDiscardChanges,
                    disabled: e,
                }),
                (0, E.jsx)(ek.$, {
                    variant: "primary",
                    text: "Save Build Overrides",
                    disabled: EC(t ?? {}),
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
            ? (0, E.jsx)(dA.y, { className: iz.QX })
            : null != n && 0 === Object.keys(n).length
              ? this.renderEmpty()
              : this.renderItems();
        let s = !i && !t && this.getAvailableProjects().length > 0,
            l =
                EC(n ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, E.jsx)(es.E, {
                          color: "text-feedback-critical",
                          variant: "text-md/normal",
                          children:
                              "Mobile build overrides must be generated using the desktop/web stable client for now!",
                      })
                    : null;
        return (0, E.jsx)(ij.n, {
            children: (0, E.jsxs)(Q.B, {
                gap: 16,
                children: [
                    (0, E.jsx)(rX.l, {
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
                    (0, E.jsxs)(on.e, {
                        justify: "end",
                        children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                    }),
                ],
            }),
        });
    }
}
class Ey extends S.Component {
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
        e.key === iV.dh.ENTER && this.handleAddAllowedVersion();
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
            t = await (0, ET.SB)(e);
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
        return EC(this.props.buildOverrides ?? {});
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
            d = Ep.fL.find((t) => t.value === e),
            c = s.map((e) => ({ id: e, label: e, value: e }));
        return (0, E.jsxs)(Q.B, {
            gap: 20,
            children: [
                (0, E.jsx)(rX.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: Ep.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, E.jsx)(rX.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: Ep.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, E.jsxs)(Q.B, {
                          gap: 20,
                          children: [
                              (0, E.jsx)(rq.k, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: l,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: r,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: { icon: rU.j, onClick: this.handleAddAllowedVersion, "aria-label": "Add" },
                              }),
                              (0, E.jsx)(rX.l, {
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
                    : (0, E.jsx)(ES.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: i,
                          error: n,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                (0, E.jsx)(ES.f, {
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
        let i = tv.Y.INFO;
        switch (t) {
            case 0:
                i = tv.Y.ERROR;
                break;
            case 1:
                i = tv.Y.WARNING;
        }
        return (0, E.jsx)(tv.p, { messageType: i, children: e });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props,
            { publicLink: i } = this.state;
        return (0, E.jsx)(rZ.Modal, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, E.jsx)(c$.A, { value: i }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let Ej = (0, a.E2)(u.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: Ev });
var EO = i(256311),
    ER = i(883600);
let EL = (0, a.E2)(u.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, g.bG)([ER.A], () => ER.A.overrideId());
        async function t(e) {
            let t = ER.A.getChangelog(e, "en-US");
            return null != t ? t : ((await EO.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
        }
        return (0, E.jsx)(EK, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => EO.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var ED = i(506774);
let EP = new Date("2018-01-01"),
    EG = (0, a.Tf)(u.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => L.pK.useSetting() === db.default.fromTimestamp(EP.getTime()),
        onClick: () => (ED.w.set("lastChangeLogDate", EP), L.pK.updateSetting(db.default.fromTimestamp(EP.getTime()))),
    }),
    EM = (0, a.zD)(u.X.DISABLE_APP_COLLECTIONS_CACHE, {
        useTitle: () => "Disable Application Collections Cache",
        useSubtitle: () => "Forces application collection updates to be shown immediately.",
        useDisabled: () => (0, g.bG)([ox.default], () => ox.default.onlyShowPreviewAppCollections),
        useValue: () =>
            (0, g.bG)(
                [ox.default],
                () => ox.default.disableAppCollectionsCache || ox.default.onlyShowPreviewAppCollections,
            ),
        setValue: (e) => (0, oT.x)({ disableAppCollectionsCache: e }),
    }),
    EU = (0, a.zD)(u.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, g.bG)([ox.default], () => ox.default.isForcedCanary),
        setValue: (e) => {
            (0, oT.x)({ canary: e });
        },
    }),
    EV = (0, a.zD)(u.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, g.bG)([ox.default], () => ox.default.sourceMapsEnabled),
        setValue: (e) => (0, oT.x)({ sourceMapsEnabled: e }),
    }),
    Ek = (0, a.zD)(u.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, g.bG)([ox.default], () => ox.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, oT.x)({ onlyShowPreviewAppCollections: e }),
    });
var Ew = i(10094),
    EF = i(683760);
let EB = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: s0.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: s0.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: s0.PremiumTypes.TIER_2 },
    ],
    Ez = (0, a.Hn)(u.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => EB,
        clearable: !0,
        useValue: () =>
            (0, g.bG)([EF.A], () => {
                let e = EF.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, Ew.O)(null, void 0)
                : null === e
                  ? (0, Ew.O)(void 0, void 0)
                  : (0, Ew.O)(0 === e ? null : e, void 0);
        },
    });
var EY = i(246605),
    EX = i(274184);
let EH = (0, a.E2)(u.X.SURVEY_OVERRIDE, {
    useSearchTerms: () => ["survey override"],
    Component: function () {
        let e = (0, g.bG)([EX.Ay], () => EX.Ay.getSurveyOverride());
        return (0, E.jsx)(EK, {
            label: "Survey Override",
            description: "Provide a survey ID to override the survey shown to this user.",
            placeholder: "Enter Survey ID...",
            overrideId: e ?? null,
            setOverride: (e) => EY.xr(e),
            fetchOverride: (e) => EY.BC(e, !0) ?? null,
        });
    },
});
function EK(e) {
    let { label: t, description: i, placeholder: n, overrideId: s, setOverride: l, fetchOverride: r } = e,
        [a, o] = S.useState(s ?? ""),
        u = S.useRef(null),
        [d, c] = S.useState(0);
    function g() {
        null != u.current && (clearTimeout(u.current), (u.current = null));
    }
    return (
        S.useEffect(() => g, []),
        (0, E.jsx)(s7.D, {
            layout: "horizontal-responsive",
            label: t,
            description: i,
            children: (0, E.jsx)(rq.k, {
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
let EW = (0, a.zZ)(u.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [Ez, EH, EL, EG, EU, Eh, Ek, EM, EV, Ej],
        useInlineNotice: () => ({
            type: h.lT.INLINE_NOTICE,
            noticeType: "info",
            text: j.intl.format(j.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    EZ = (0, a.zD)(u.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, g.bG)([ox.default], () => ox.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, oT.x)({ logAnalyticsEvents: e }),
    }),
    Eq = (0, a.zD)(u.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, g.bG)([ox.default], () => ox.default.isLoggingGatewayEvents),
        setValue: (e) => (0, oT.x)({ logGatewayEvents: e }),
    }),
    EQ = (0, a.zD)(u.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, g.bG)([ox.default], () => ox.default.preventPopoutClose),
        setValue: (e) => (0, oT.x)({ preventPopoutClose: e }),
    }),
    EJ = (0, a.zD)(u.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, g.bG)([ox.default], () => ox.default.logKeyboardMismatches),
        setValue: (e) => (0, oT.x)({ logKeyboardMismatches: e }),
    }),
    E$ = (0, a.zD)(u.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, g.bG)([ox.default], () => ox.default.isLoggingOverlayEvents),
        setValue: (e) => (0, oT.x)({ logOverlayEvents: e }),
    }),
    E0 = (0, a.zD)(u.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, g.bG)([ox.default], () => ox.default.isLoggingQuestEvents),
        setValue: (e) => (0, oT.x)({ logQuestEvents: e }),
    }),
    E1 = (0, a.zD)(u.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, g.bG)([ox.default], () => ox.default.isTracingRequests),
        setValue: (e) => (0, oT.x)({ trace: e }),
    }),
    E2 = (0, a.zZ)(u.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [Eq, E$, E1, EZ, EJ, EQ, E0] }),
    E3 = (0, a.t_)(u.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [EW, E2, EA],
    }),
    E5 = (0, a.i4)(u.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: Ee.V,
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
                } = (0, g.cf)([ox.default, h9.A, iA.default], () => ({
                    layoutDebuggingEnabled: ox.default.layoutDebuggingEnabled,
                    isDeveloper: h9.A.isDeveloper,
                    isLoggingGatewayEvents: ox.default.isLoggingGatewayEvents,
                    isLoggingOverlayEvents: ox.default.isLoggingOverlayEvents,
                    isLoggingAnalyticsEvents: ox.default.isLoggingAnalyticsEvents,
                    isTracingRequests: ox.default.isTracingRequests,
                    isForcedCanary: ox.default.isForcedCanary,
                    isSourceMapsEnabled: ox.default.sourceMapsEnabled,
                    isAxeEnabled: ox.default.isAxeEnabled,
                    preventPopoutClose: ox.default.preventPopoutClose,
                    onlyShowPreviewAppCollections: ox.default.onlyShowPreviewAppCollections,
                    disableAppCollectionsCache: ox.default.disableAppCollectionsCache,
                    isStaff: iA.default.getCurrentUser()?.isStaff() ?? !1,
                })),
                { horizontalSpacing: A, verticalSpacing: h } = (0, Ei.Or)(),
                { setHorizontalSpacing: S, setVerticalSpacing: T } = Ei.Or.getState(),
                x = L.HZ.useSetting();
            return t
                ? [
                      (0, E.jsxs)(
                          ei.Dr,
                          {
                              id: "overrides",
                              label: "Overrides",
                              action: () => {
                                  (0, eq.openUserSettings)(u.X.DEV_OVERRIDES);
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
                                              (0, oT.x)({ canary: !r });
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
                                              (0, oT.x)({ onlyShowPreviewAppCollections: !d });
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
                                              (0, oT.x)({ disableAppCollectionsCache: !c });
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
                                  (0, eq.openUserSettings)(u.X.LOGGING);
                              },
                              children: [
                                  (0, E.jsx)(
                                      ei.sL,
                                      {
                                          id: "gateway-events",
                                          label: "Gateway Events",
                                          checked: i,
                                          action: () => {
                                              (0, oT.x)({ logGatewayEvents: !i });
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
                                              (0, oT.x)({ logOverlayEvents: !n });
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
                                              (0, oT.x)({ logAnalyticsEvents: !s });
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
                                              (0, oT.x)({ trace: !l });
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
                                              (0, oT.x)({ preventPopoutClose: !o });
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
                                  (0, eq.openUserSettings)(u.X.DESIGN_TOOLS);
                              },
                              children: [
                                  (0, E.jsx)(
                                      ei.sL,
                                      {
                                          id: "accessibility-auditing",
                                          label: "Accessibility Auditing",
                                          checked: a,
                                          action: () => {
                                              (0, oT.x)({ axeEnabled: !a });
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
                                              (0, oT.x)({ layoutDebuggingEnabled: !e });
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
                                                          (0, E.jsx)(Et.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: A,
                                                              minValue: 0,
                                                              maxValue: Ei.YR,
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
                                                          (0, E.jsx)(Et.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: h,
                                                              minValue: 0,
                                                              maxValue: Ei.YR,
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
                                { id: "discord-stats", label: "Discord Stats", action: () => aL() },
                                "discord-stats",
                            )
                          : null,
                  ]
                : null;
        },
        buildLayout: () => [E3],
    });
var E6 = i(127062),
    E4 = i(25044),
    E8 = i(80703),
    E7 = i(691540),
    E9 = i(857250),
    Se = i(97483),
    St = i(100392),
    Si = i(102609),
    Sn = i(271478),
    Ss = i(736056),
    Sl = i(710195),
    Sr = i(386976),
    Sa = i(257433),
    So = i(32523),
    Su = i(96919),
    Sd = i(688151),
    Sc = i(142862);
function Sg(e) {
    let { experiment: t, experimentId: i, overrideInfo: n, defaultOpen: s } = e,
        [l, r] = S.useState(s),
        [a, o] = S.useState(!1),
        u = S.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, g.bG)([cV.default], () => cV.default.getId()),
        c = (0, g.bG)([cV.default], () => {
            let e = cV.default.getInstallationForTracking();
            return null == e ? null : (0, E8.v)(e);
        }),
        m = "installation" === t.kind && null != c ? c : d,
        A = (0, Sa.iN)(t, m),
        h = (0, Sa.Fm)(t, m),
        T = (0, g.yK)([Ss.A], () =>
            e$()
                .sortBy(Ss.A.getRecentExposures(Sd.Vh.USER, i), (e) => {
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
                (0, cz.C)((0, St.yA)(i), () => {
                    (0, E7.P0)({
                        id: "experiment-link-copied",
                        message: "Copied experiment link",
                        type: Se.Ck.SUCCESS,
                    }),
                        e.preventDefault(),
                        e.stopPropagation();
                });
            },
            [i],
        ),
        p = (0, E.jsx)(e9.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, E.jsxs)(es.E, {
                variant: "text-md/medium",
                className: Sc.DD,
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
                                    cz.p5 &&
                                        (0, E.jsx)(en.D, { onClick: x, children: (0, E.jsx)(EE.q, { size: "xs" }) }),
                                ],
                            }),
                            (0, E.jsx)(es.E, { color: "text-muted", variant: "text-sm/normal", children: i }),
                        ],
                    }),
                    (0, E.jsx)("span", {
                        className: Sc.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!l) return (0, E.jsx)("div", { className: Sc.Os, children: p });
    let f = "";
    return (
        (f =
            t.system === Si.l5.LEGACY
                ? `Currently assigned to bucket ${A ?? Sd.RE.NOT_ELIGIBLE}`
                : null != A
                  ? `Currently assigned to variant ${A}`
                  : "Currently unassigned"),
        (0, E.jsxs)("div", {
            className: Sc.Os,
            children: [
                p,
                (0, E.jsx)("div", {
                    children: (0, E.jsx)(Sn.g, {
                        label: t.system === Si.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: f,
                        experiment: t,
                        experimentId: i,
                        overrideInfo: n,
                    }),
                }),
                (0, E.jsx)("div", {
                    className: Sc.h_,
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
                                  className: Sc.id,
                                  children: "Server Descriptor",
                              }),
                              (0, E.jsx)(es.E, {
                                  variant: "code",
                                  className: Sc.AS,
                                  children: null == h ? "None" : JSON.stringify(h, void 0, 2),
                              }),
                              (0, E.jsx)(es.E, {
                                  variant: "text-lg/medium",
                                  className: Sc.id,
                                  children: "Override Descriptor",
                              }),
                              (0, E.jsx)(es.E, {
                                  variant: "code",
                                  className: Sc.AS,
                                  children:
                                      n?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(n.originalDescriptor, void 0, 2),
                              }),
                              (0, E.jsx)(es.E, {
                                  variant: "text-lg/medium",
                                  className: Sc.id,
                                  children: "Recent Exposures",
                              }),
                              (0, E.jsx)(es.E, {
                                  variant: "code",
                                  className: Sc.AS,
                                  children: 0 === T.length ? "None" : T.join("\n"),
                              }),
                          ],
                      })
                    : (0, E.jsx)("div", {
                          className: Sc.id,
                          children: (0, E.jsx)(ea.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, E.jsx)(ew.c, { className: Sc.yF }),
            ],
        })
    );
}
function Sm(e) {
    let { experiment: t, experimentId: i, overrideInfo: n } = e,
        [s, l] = S.useState(null != n),
        [r, a] = S.useState(!1),
        o = S.useCallback(() => {
            l((e) => !e);
        }, []),
        u = (0, g.bG)([Ss.A], () => Ss.A.getLoadedGuildExperiment(i)),
        d = (0, g.bG)([Ss.A, eh.A, Sl.A], () => {
            if (t.system === Si.l5.LEGACY) return null == Ss.A.getLoadedGuildExperiment(i);
            let e = t.name;
            return !eh.A.getGuildsArray().some((t) => null != Sl.A.getServerAssignment("guild", t.id, e));
        }),
        c = (0, g.yK)([Ss.A], () =>
            e$()
                .sortBy(Ss.A.getRecentExposures(Sd.Vh.GUILD, i), (e) => {
                    let [t, i] = e;
                    return -i;
                })
                .map((e) => {
                    let [t, i] = e;
                    return `${new Date(i).toLocaleString()} (${t})`;
                }),
        ),
        [m, A] = (0, g.yK)([cV.default, eh.A, Ss.A, Sl.A], () => {
            let e = t.system === Si.l5.LEGACY,
                n = t.name,
                s = cV.default.getId(),
                l = e$().sortBy(eh.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                r = {},
                a = [];
            for (let t of l) {
                let l = e
                    ? (Ss.A.getGuildExperimentDescriptor(i, t.id)?.bucket ?? Sd.RE.NOT_ELIGIBLE)
                    : (Sl.A.getEvaluationAndAssignment("guild", t.id, n, s)[1]?.variantId ?? Sd.RE.NOT_ELIGIBLE);
                l in r || (r[l] = 0), r[l]++, a.push(`${t.name}: ${l}`);
            }
            let o = e$()(r)
                .keys()
                .map(Number)
                .sort()
                .map((e) => `${r[e]} guilds in bucket ${e}`)
                .join(", ");
            return [a.join("\n"), o];
        }),
        h = t.system !== Si.l5.LEGACY,
        T = (0, g.yK)([eh.A], () => e$().sortBy(eh.A.getGuildsArray(), (e) => e.name.toLowerCase())),
        [x, p] = S.useState(() => le.A.getGuildId() ?? le.A.getLastSelectedGuildId()),
        f = T.find((e) => e.id === x)?.name,
        N = (0, g.bG)([Sl.A], () => {
            if (h && null != x) return Sl.A.getServerAssignment("guild", x, t.name);
        }, [h, x, t.name]),
        _ = (0, g.bG)([Sl.A, cV.default], () => {
            if (!h) return;
            let e = cV.default.getId();
            return Sl.A.getEvaluationAndAssignment("user", e, t.name)[1];
        }),
        I = null != _ && (_.isOverride || _.useAsEligibility),
        C = (0, E.jsx)(en.D, {
            onClick: o,
            children: (0, E.jsxs)(es.E, {
                variant: "text-md/medium",
                className: Sc.DD,
                children: [
                    (0, E.jsxs)("div", {
                        children: [
                            (0, E.jsx)("span", { children: t.title }),
                            (0, E.jsx)(es.E, { color: "text-muted", variant: "text-sm/normal", children: i }),
                        ],
                    }),
                    (0, E.jsx)("span", { className: Sc.km, children: "Guild" }),
                ],
            }),
        });
    return s
        ? (0, E.jsxs)("div", {
              className: Sc.Os,
              children: [
                  C,
                  (0, E.jsx)(Sn.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${A}`,
                      experiment: t,
                      experimentId: i,
                      overrideInfo: n,
                  }),
                  h &&
                      T.length > 0 &&
                      (0, E.jsx)("div", {
                          className: Sc.h_,
                          children: (0, E.jsx)(rX.l, {
                              label: "Inspect guild",
                              description:
                                  "Server assignment and eligibility shown below are for this guild. The override above still applies to all guilds.",
                              value: x ?? void 0,
                              options: T.map((e) => ({ id: e.id, label: e.name, value: e.id })),
                              onSelectionChange: (e) => p(e),
                              selectionMode: "single",
                              fullWidth: !0,
                          }),
                      }),
                  (0, E.jsx)("div", {
                      className: Sc.h_,
                      children: d
                          ? (0, E.jsx)(es.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    t.system === Si.l5.LEGACY
                                        ? 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
                                        : "Warning: Server did not send an assignment for this experiment. Make sure the experiment is configured to run on the APP surface in the admin UI.",
                            })
                          : null,
                  }),
                  h &&
                      (0, E.jsxs)("div", {
                          children: [
                              (0, E.jsxs)(es.E, {
                                  variant: "text-lg/medium",
                                  className: Sc.id,
                                  children: ["Server Descriptor", null != f ? ` (${f})` : ""],
                              }),
                              (0, E.jsx)(es.E, {
                                  variant: "code",
                                  className: Sc.AS,
                                  children: null == N ? "None" : JSON.stringify(N, void 0, 2),
                              }),
                              (0, E.jsx)(es.E, {
                                  variant: "text-lg/medium",
                                  className: Sc.id,
                                  children: "Client Eligibility",
                              }),
                              (0, E.jsx)(es.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: I ? "Eligible: Yes" : "Eligible: No",
                              }),
                              (0, E.jsx)(es.E, {
                                  variant: "code",
                                  className: Sc.AS,
                                  children: null == _ ? "None" : JSON.stringify(_, void 0, 2),
                              }),
                          ],
                      }),
                  r
                      ? (0, E.jsxs)("div", {
                            children: [
                                (0, E.jsx)(es.E, {
                                    variant: "text-lg/medium",
                                    className: Sc.id,
                                    children: "Guild Assignments",
                                }),
                                (0, E.jsx)(es.E, { variant: "code", className: Sc.AS, children: m }),
                                t.system === Si.l5.LEGACY &&
                                    (0, E.jsxs)(E.Fragment, {
                                        children: [
                                            (0, E.jsx)(es.E, {
                                                variant: "text-lg/medium",
                                                className: Sc.id,
                                                children: "Server Descriptor",
                                            }),
                                            (0, E.jsx)(es.E, {
                                                variant: "code",
                                                className: Sc.AS,
                                                children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                            }),
                                        ],
                                    }),
                                (0, E.jsx)(es.E, {
                                    variant: "text-lg/medium",
                                    className: Sc.id,
                                    children: "Override Descriptor",
                                }),
                                (0, E.jsx)(es.E, {
                                    variant: "code",
                                    className: Sc.AS,
                                    children:
                                        n?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(n.originalDescriptor, void 0, 2),
                                }),
                                (0, E.jsx)(es.E, {
                                    variant: "text-lg/medium",
                                    className: Sc.id,
                                    children: "Recent Exposures",
                                }),
                                (0, E.jsx)(es.E, {
                                    variant: "code",
                                    className: Sc.AS,
                                    children: 0 === c.length ? "None" : c.join("\n"),
                                }),
                            ],
                        })
                      : (0, E.jsx)("div", {
                            className: Sc.id,
                            children: (0, E.jsx)(ea.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, E.jsx)(ew.c, { className: Sc.yF }),
              ],
          })
        : (0, E.jsx)("div", { className: Sc.Os, children: C });
}
let SA = (0, a.E2)(u.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, Sr.op)(),
                { experiments: i, overridesInfo: n } = (0, So.hI)(),
                s = S.useMemo(() => ({ ...i, ...e }), [i, e]),
                l = S.useMemo(() => ({ ...n, ...t }), [n, t]),
                r = (0, g.bG)([cV.default], () => {
                    let e = cV.default.getInstallationForTracking();
                    return null == e ? null : (0, E8.v)(e);
                }),
                [a, o] = S.useState(""),
                u = (0, Su.oC)((0, Su.R3)((0, Su.Fm)(s), l), a);
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
                                cz.p5 &&
                                    (0, E.jsx)(ea.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, cz.C)(r, () => {
                                                (0, E7.P0)((0, E9.o)("Installation ID copied!", Se.Ck.SUCCESS));
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, E.jsx)($.I, { placeholder: "Search experiments", query: a, onChange: o, onClear: () => o("") }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? Sm : Sg;
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
                              className: Sc.p$,
                              children: (0, E.jsx)(eV.D, {
                                  variant: "heading-md/semibold",
                                  children: "No Experiments Found",
                              }),
                          }),
                ],
            });
        },
        useSearchTerms: () => ["Experiments", "Bucket Override", "Variant Override"],
    }),
    Sh = (0, a.zZ)(u.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [SA] }),
    SE = (0, a.t_)(u.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [Sh] }),
    SS = (0, a.i4)(u.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: E6.c,
        useMenu: E4.A,
        buildLayout: () => [SE],
    }),
    ST = (0, a.WI)(u.X.DEVELOPER_SECTION, {
        useTitle: () => j.intl.string(j.t["+gHUHA"]),
        usePredicate: () => h9.A.isDeveloper,
        buildLayout: () => [SS, E5],
    });
var Sx = i(712440),
    Sp = i(370997);
let Sf = (0, a.E2)(u.X.AUTHORIZED_APPS_LIST_SETTING, {
    Component: Sp.Ay,
    useSearchTerms: () => [j.intl.string(j.t["f6kk+r"])],
});
var SN = i(259678),
    S_ = i(77468),
    SI = i(289498),
    SC = i(573648),
    Sb = i(874490),
    Sv = i(370480),
    Sy = i(968309);
let Sj = new Set([U.fg2.XBOX, U.fg2.PLAYSTATION, U.fg2.PLAYSTATION_STAGING, U.fg2.CRUNCHYROLL]);
var SO = i(169869),
    SR = i(235693),
    SL = i(757036),
    SD = i(555837),
    SP = i(733110),
    SG = i(241524),
    SM = i(346017),
    SU = i(631368),
    SV = i(968671),
    Sk = i(212739),
    Sw = i(30370),
    SF = i(933287),
    SB = i(594387),
    Sz = i(651439);
function SY() {
    let e,
        t,
        n,
        s,
        l,
        { variant: r, showFooter: a } =
            ((e = (0, SU.$)()),
            (t = (0, SV.GM)("connectedAccountsBannerFooter")),
            (n = (0, Sk.O)()),
            (l = null != (s = (0, g.bG)([Sw.A], () => Sw.A.getAccount(null, U.fg2.XBOX))) && !s.revoked),
            e === SU.C.NONE || n
                ? { variant: SU.C.NONE, showFooter: !1 }
                : { variant: e, showFooter: t && e === SU.C.NO_ACCESS && !l }),
        { analyticsLocations: o } = (0, n1.Ay)(e6.A.XBOX_CONNECTED_ACCOUNTS_BANNER),
        u = (0, SM.yW)(o),
        d = (0, SG.A)("(max-width: 485px)");
    if (r === SU.C.NONE) return null;
    let c = d ? "md" : "sm",
        m = "",
        A = null;
    switch (r) {
        case SU.C.HAS_ACCESS:
            (m = j.intl.string(SF.default["7PdsMK"])),
                (A = (0, E.jsx)(ek.$, {
                    variant: "overlay-primary",
                    size: c,
                    fullWidth: d,
                    text: j.intl.string(SF.default.CubeLC),
                    onClick: () => {
                        (0, K.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([i.e("52283"), i.e("13088")]).then(
                                i.bind(i, 347171),
                            );
                            return (t) => (0, E.jsx)(e, { ...t, sourceAnalyticsLocations: o });
                        });
                    },
                }));
            break;
        case SU.C.NO_ACCESS:
            (m = j.intl.string(SF.default.NwkRTZ)),
                (A = (0, E.jsx)(sW.A, {
                    defaultTextOverride: j.intl.string(SF.default["0vY+ie"]),
                    variantOverride: "overlay-primary",
                    size: c,
                    fullWidth: d,
                    subscriptionTier: s0.pe.TIER_2,
                }));
            break;
        default:
            (0, N.xb)(r);
    }
    return (0, E.jsxs)(n1.f5, {
        value: o,
        children: [
            (0, E.jsxs)("div", {
                className: Sz.bV,
                children: [
                    (0, E.jsx)(eV.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: j.intl.string(j.t.NG1e6l),
                    }),
                    (0, E.jsx)(ur.t, { size: "xs", color: "var(--icon-default)" }),
                ],
            }),
            (0, E.jsx)(io.N, {
                theme: "dark",
                children: (e) =>
                    (0, E.jsx)("div", {
                        className: e,
                        children: (0, E.jsxs)("div", {
                            className: Sz.Nr,
                            children: [
                                (0, E.jsxs)("div", {
                                    className: Sz.Tp,
                                    children: [
                                        (0, E.jsx)("div", {
                                            className: Sz.Qw,
                                            style: {
                                                backgroundImage: `url(${a ? "https://cdn.discordapp.com/assets/content/1858990b1e56c7d51e887008753104d4663d06c0e0e296d8fe0ea85c7e3e8341.png" : "https://cdn.discordapp.com/assets/content/7308e937fbd3074b9de0ebba1fa3571fa7b10a2b88f384b382f711bae99f40e6.png"})`,
                                            },
                                        }),
                                        (0, E.jsx)("div", { className: Sz.$h }),
                                        (0, E.jsx)("div", { className: Sz.Rv }),
                                        (0, E.jsx)("div", { className: Sz.Lw }),
                                    ],
                                }),
                                (0, E.jsxs)("div", {
                                    className: Sz.Mn,
                                    children: [
                                        (0, E.jsxs)("div", {
                                            className: Sz.mY,
                                            children: [
                                                (0, E.jsx)("img", {
                                                    className: Sz.wm,
                                                    src: "https://cdn.discordapp.com/assets/content/c5fab2b5d1155c4c9bc088b07f8563b6db8d2d08666357486efc5aea6e97fbea.png",
                                                    alt: "Xbox Game Pass",
                                                }),
                                                (0, E.jsx)(es.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: Sz.DD,
                                                    children: m,
                                                }),
                                            ],
                                        }),
                                        (0, E.jsx)("div", { className: Sz.lO, children: A }),
                                    ],
                                }),
                                a &&
                                    (0, E.jsxs)(E.Fragment, {
                                        children: [
                                            (0, E.jsx)("div", { className: Sz.yF }),
                                            (0, E.jsxs)("div", {
                                                className: Sz.sQ,
                                                children: [
                                                    (0, E.jsx)(ci.o, {
                                                        size: d ? "md" : "sm",
                                                        color: er.A.colors.ICON_STRONG,
                                                    }),
                                                    (0, E.jsx)(es.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-default",
                                                        children: j.intl.format(SB.default.mXY4Rb, {
                                                            onConnect: () => {
                                                                u(SM.Hx.CONNECT),
                                                                    (0, Sy.A)({
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
var SX = i(201718),
    SH = i(321078),
    SK = i(672130),
    SW = i(379848),
    SZ = i(567910);
function Sq(e) {
    let { markAsDismissed: t } = e;
    return (
        S.useEffect(() => t(iT.i.UNKNOWN), [t]),
        (0, E.jsx)(sS.Lp, { className: SZ.Ad, text: j.intl.string(j.t.y2b7CA) })
    );
}
function SQ(e) {
    let { title: t, body: i, img: n, newIndicatorDismissibleContent: s, onClick: l } = e;
    return (0, E.jsxs)("div", {
        className: SZ.kL,
        children: [
            n,
            (0, E.jsxs)("div", {
                className: SZ.FS,
                children: [
                    (0, E.jsxs)("div", {
                        className: SZ.TK,
                        children: [
                            (0, E.jsx)(SW.Ay, {
                                contentTypes: [s],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: i } = e;
                                    return t === s ? (0, E.jsx)(Sq, { markAsDismissed: i }) : null;
                                },
                            }),
                            (0, E.jsx)(es.E, { variant: "text-md/semibold", children: t }),
                        ],
                    }),
                    (0, E.jsx)(es.E, { variant: "text-xs/normal", children: i }),
                ],
            }),
            (0, E.jsx)(ek.$, { text: j.intl.string(j.t.vD60Pv), onClick: l }),
        ],
    });
}
function SJ() {
    let e = ty.A.getArticleURL(U.MVz.PS_CONNECTION);
    return (0, E.jsx)(SQ, {
        title: j.intl.string(j.t.v20wwm),
        body: j.intl.format(j.t.lTZBit, { help_article: e }),
        img: (0, E.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
        newIndicatorDismissibleContent: eF.M.PS_ONE_WAY_RECONNECT,
        onClick: () => (0, Sy.A)({ platformType: U.fg2.PLAYSTATION, location: "PS two way upsell" }),
    });
}
let S$ = "/assets/9df988a227916145.png";
function S0() {
    return (0, E.jsx)(SQ, {
        title: j.intl.string(SB.default["9cLtDI"]),
        body: j.intl.format(SB.default["D+kUbg"], { learnMoreLink: ty.A.getArticleURL(U.MVz.XBOX_GAME_PASS_PERKS) }),
        img: (0, E.jsx)("img", { src: S$, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eF.M.XBOX_PERKS_RECONNECT_UPSELL,
        onClick: () => (0, Sy.A)({ platformType: U.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
    });
}
function S1() {
    let e = ty.A.getArticleURL(U.MVz.XBOX_CONNECTION);
    return (0, E.jsx)(SQ, {
        title: j.intl.string(j.t["2okkZV"]),
        body: j.intl.format(j.t.OnERSS, { help_article: e }),
        img: (0, E.jsx)("img", { src: S$, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eF.M.XBOX_ONE_WAY_RECONNECT,
        onClick: () => (0, Sy.A)({ platformType: U.fg2.XBOX, location: "Xbox two way upsell" }),
    });
}
var S2 = i(783419),
    S3 = i(534952),
    S5 = i(452832),
    S6 = i(113463);
function S4(e) {
    let t,
        { integration: i } = e,
        {
            isJoining: n,
            joinErrorMessage: s,
            showJoinErrorMessage: l,
        } = (0, g.cf)(
            [Sw.A],
            () => ({
                isJoining: Sw.A.isJoining(i.id),
                joinErrorMessage:
                    "" === Sw.A.joinErrorMessage(i.id) ? j.intl.string(j.t.j2d6Km) : Sw.A.joinErrorMessage(i.id),
                showJoinErrorMessage: void 0 !== Sw.A.joinErrorMessage(i.id),
            }),
            [i.id],
        );
    return (
        null != (0, g.bG)([eh.A], () => eh.A.getGuild(i.guild.id), [i.guild.id]) ||
            (t = (0, E.jsx)(ek.$, {
                size: "sm",
                onClick: function () {
                    S_.A.joinServer(i.id, () => {});
                },
                disabled: n,
                variant: "primary",
                text: n ? j.intl.string(j.t.RXvQQu) : j.intl.string(j.t.XpeFYr),
            })),
        (0, E.jsxs)("div", {
            className: S6.iA,
            children: [
                (0, E.jsxs)("div", {
                    className: S6.XX,
                    children: [
                        (0, E.jsx)(mt.Ay, { size: mt.Ay.Sizes.SMALL, guild: i.guild, className: S6.$f }),
                        (0, E.jsxs)("div", {
                            className: S6.Vn,
                            children: [
                                (0, E.jsx)(es.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: i.guild.name,
                                }),
                                (0, E.jsx)(u9.Anchor, {
                                    href: SC.A.get(i.type)?.getPlatformUserUrl?.(i.account),
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
                        className: S6.R,
                        children: s,
                    }),
            ],
        })
    );
}
function S8(e) {
    var t;
    let i,
        n,
        { account: s } = e,
        l =
            ((t = s.id),
            (i = (0, SD.G)({ location: "useShouldShowXboxPerksReconnectUpsell" })),
            (n = (0, SL.L)(s0.PremiumTypes.TIER_2)),
            !i && !n && !/^\d+$/.test(t));
    return s.type === U.fg2.XBOX && l
        ? (0, E.jsx)(S0, {})
        : s.twoWayLink
          ? null
          : s.type === U.fg2.XBOX
            ? (0, E.jsx)(S1, {})
            : s.type === U.fg2.PLAYSTATION
              ? (0, E.jsx)(SJ, {})
              : null;
}
function S7(e) {
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
        R = (0, Sb.ML)(u.type),
        L = SC.A.get(R);
    S.useEffect(() => {
        m(u.friendSync), h(u.visibility), x(u.metadataVisibility), f(u.showActivity);
    }, [u]);
    let D = { inProgressVisibility: N, inProgressMetadataVisibility: I },
        P = S.useRef(D);
    return (
        S.useEffect(() => {
            P.current = D;
        }),
        S.useEffect(() => {
            if (!1 === u.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = P.current;
            null != e && (h(e), S_.A.setVisibility(u.type, u.id, e), _(null)),
                null != t && (x(t), S_.A.setMetadataVisibility(u.type, u.id, t), C(null));
        }, [u]),
        (0, E.jsxs)("div", {
            className: S6.FI,
            children: [
                ((t = SC.A.get(u.type)),
                (i = SC.A.get(R)),
                (n = "1" === (u.metadata ?? {})[S2.pK.TWITTER_VERIFIED]),
                (s = null),
                t.type === U.fg2.TWITTER &&
                    n &&
                    (s = (0, E.jsx)(td.m, {
                        text: j.intl.string(j.t.Jebrww),
                        children: (0, E.jsx)(tx.A, {
                            color: er.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, E.jsx)(tc.U, { size: "xs", color: er.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, E.jsxs)("div", {
                    className: S6.Il,
                    children: [
                        (0, E.jsx)("img", {
                            alt: i.name,
                            className: S6.gj,
                            src: (0, gV.M)(d) ? i.icon.darkSVG : i.icon.lightSVG,
                        }),
                        (0, E.jsxs)("div", {
                            children: [
                                (0, E.jsxs)("div", {
                                    className: S6.$p,
                                    children: [
                                        (0, E.jsx)(es.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: S6.RW,
                                            children: u.name,
                                        }),
                                        null != s && (0, E.jsx)("div", { className: S6.cG, children: s }),
                                    ],
                                }),
                                (0, E.jsx)(es.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: S6.Au,
                                    children: i.migrationData?.getMigrationExperimentEnabled(
                                        "User Settings Connections Web",
                                    )
                                        ? j.intl.format(S5.default.Glhokn, { platformName: i.name })
                                        : i.name,
                                }),
                            ],
                        }),
                        (0, E.jsx)(en.D, {
                            className: S6.uH,
                            onClick: function () {
                                let e = SC.A.get(u.type);
                                (0, K.openModal)((t) =>
                                    (0, E.jsx)(rZ.Modal, {
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
                                            Sj.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, E.jsx)(af.A, {
                                                children: j.intl.format(j.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": j.intl.string(j.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, E.jsx)(gw.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, E.jsx)(S8, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        i = null,
                        n = (0, Sv.An)(t[S2.pK.CREATED_AT], c);
                    switch (e.type) {
                        case U.fg2.REDDIT:
                            i = (0, SO.xE)(t, S6.Nz);
                            break;
                        case U.fg2.STEAM:
                            i = (0, SO.dy)(t, S6.Nz);
                            break;
                        case U.fg2.BLUESKY:
                        case U.fg2.TWITTER:
                        case U.fg2.MASTODON:
                            i = (0, SO.ED)(t, S6.Nz);
                            break;
                        case U.fg2.EBAY:
                            i = (0, SO.ub)(t, S6.Nz);
                            break;
                        case U.fg2.PAYPAL:
                            i = (0, SO.gZ)(t, S6.Nz);
                            break;
                        case U.fg2.TIKTOK:
                            i = (0, SO.HU)(t, S6.Nz);
                    }
                    null !== n &&
                        (null == i && (i = []),
                        i?.push(
                            (0, E.jsx)(
                                es.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: S6.M4,
                                    children: j.intl.format(j.t["9rfonh"], { date: n }),
                                },
                                "member-since",
                            ),
                        ));
                    let s = y.includes(e.id),
                        l = j.intl.string(j.t.wzzjk9);
                    if (null == i || 0 === i.length)
                        if (!0 !== SC.A.get(e.type).hasMetadata) return null;
                        else
                            (i = [
                                (0, E.jsx)(sS.Lp, { className: S6.Z3, text: j.intl.string(j.t.y2b7CA) }, "badge"),
                                (0, E.jsx)(
                                    es.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: S6.vt,
                                        children: j.intl.format(j.t.Up2ni7, {
                                            helpdeskUrl: ty.A.getArticleURL(U.MVz.CONNECTION_DETAILS),
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
                                    className: S6.jy,
                                    children: (0, E.jsx)(ek.$, {
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
                                                      S_.A.refresh(e.type, e.id).finally(() => {
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
                        (0, E.jsx)("div", { className: S6.tJ, children: i })
                    );
                })(u),
                (U.txh.has(u.type) &&
                    (l = (0, E.jsx)(J.d, {
                        label: j.intl.string(j.t["+KCMSi"]),
                        checked: g,
                        onChange: function (e) {
                            m(e), S_.A.setFriendSync(u.type, u.id, e);
                        },
                    })),
                U.ewM.has(u.type) &&
                    (r = (0, E.jsx)(J.d, {
                        label: j.intl.format(j.t["6u6J0q"], { platform: L.name }),
                        checked: p,
                        onChange: function (e) {
                            f(e), S_.A.setShowActivity(u.type, u.id, e);
                        },
                    })),
                SC.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, E.jsx)(J.d, {
                        label: j.intl.string(j.t.FYKGsL),
                        checked: 1 === T,
                        onChange: function (e) {
                            let { verified: t } = u,
                                i = +!!e;
                            if (e && !t) {
                                C(i), (0, Sy.A)({ platformType: u.type, location: "User Settings" });
                                return;
                            }
                            x(i), S_.A.setMetadataVisibility(u.type, u.id, i);
                        },
                        disabled: 1 !== A || null == u.metadata,
                    })),
                (0, E.jsxs)("div", {
                    className: S6.HZ,
                    children: [
                        (0, E.jsx)(J.d, {
                            label: j.intl.string(j.t.f7yOAX),
                            checked: 1 === A,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    i = +!!e;
                                if (e && !t) {
                                    _(i), (0, Sy.A)({ platformType: u.type, location: "User Settings" });
                                    return;
                                }
                                h(i), S_.A.setVisibility(u.type, u.id, i);
                            },
                        }),
                        a,
                        r,
                        l,
                    ],
                })),
                (function () {
                    if (u.revoked || u.integrations.length > 0) return (0, E.jsx)(ew.c, {});
                })(),
                u.revoked
                    ? (0, E.jsx)(tv.p, {
                          messageType: tv.Y.INFO,
                          children: j.intl.format(j.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, Sy.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                      })
                    : u.integrations.length > 0
                      ? (0, E.jsx)(s7.D, {
                            label: j.intl.string(j.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, E.jsx)(S4, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, E.jsx)(SR.A, { partner: u.type }),
            ],
        })
    );
}
function S9(e) {
    let { appIdentity: t, oauth2Token: i } = e;
    return null == i
        ? null
        : (0, E.jsxs)("div", {
              className: S6.FI,
              children: [
                  (function (e, t) {
                      let { application: i } = t,
                          n = na.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
                      return (0, E.jsxs)("div", {
                          className: S6.Il,
                          children: [
                              (0, E.jsx)("img", { alt: i.name, className: e7()(S6.gj, S6.sN), src: n }),
                              (0, E.jsxs)("div", {
                                  children: [
                                      (0, E.jsx)("div", {
                                          className: S6.$p,
                                          children: (0, E.jsx)(es.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: S6.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, E.jsx)(es.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: S6.Au,
                                          children: i.name,
                                      }),
                                  ],
                              }),
                              (0, E.jsx)(en.D, {
                                  className: S6.uH,
                                  onClick: () =>
                                      (0, Sp.d1)(i, t.scopes, () => {
                                          Sx.A.delete(t.id);
                                      }),
                                  "aria-label": j.intl.string(j.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, E.jsx)(gw.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, i),
                  (0, E.jsx)("div", {
                      className: S6.HZ,
                      children: (0, E.jsx)(J.d, {
                          label: j.intl.string(j.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              SX.A.updateApplicationIdentityConfig(i.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function Te(e) {
    let t = SC.A.get(e);
    (0, Sy.A)({ platformType: t.type }),
        G.default.track(U.HAw.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        });
}
function Tt() {
    let e = (0, Sb.gn)(),
        t = (0, tr.A)((0, S3.Gl)("NewConnectionsList"));
    return (0, E.jsxs)("div", {
        className: S6.lA,
        children: [
            t.map(
                (e) =>
                    null != e &&
                    (0, E.jsx)(
                        SK.A,
                        { application: e, className: S6.__invalid_accountButton, innerClassName: S6.U$ },
                        e.id,
                    ),
            ),
            e
                .slice(0, 10 - t.length)
                .map((e) =>
                    (0, E.jsx)(
                        SI.A,
                        { type: e.type, className: S6.__invalid_accountButton, innerClassName: S6.U$ },
                        e.type,
                    ),
                ),
            (0, E.jsx)(td.m, {
                text: j.intl.string(j.t.QqTz8b),
                children: (0, E.jsx)("div", {
                    className: e7()(S6.ej, S6.__invalid_accountButton),
                    children: (0, E.jsx)(SN.vN, {
                        children: (0, E.jsx)("button", {
                            className: e7()(S6.R8, S6.U$),
                            type: "button",
                            onClick: function () {
                                sm.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: Te });
                            },
                            "aria-label": j.intl.string(j.t.Zhcj9X),
                            children: (0, E.jsx)(tM._, {
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
function Ti(e) {
    let t,
        { fetching: i, accounts: n, appIdentities: s, authorizedApps: l, theme: r, locale: a } = e,
        u = (0, o.SV)("ConnectionsList"),
        d = S.useMemo(() => n.filter((e) => SC.A.isSupported(e.type)), [n]);
    return (
        (t = i
            ? (0, E.jsx)(dA.y, { type: dA.y.Type.SPINNING_CIRCLE })
            : 0 === d.length && 0 === s.length
              ? (0, E.jsx)(iy.pp, {
                    theme: r,
                    className: u ? S6.p$ : void 0,
                    children: (0, E.jsx)(iy.SG, {
                        note: j.intl.string(j.t.WenGZ2),
                        children: j.intl.string(j.t.aoLS84),
                    }),
                })
              : (0, E.jsxs)(E.Fragment, {
                    children: [
                        u &&
                            (0, E.jsx)(eV.D, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                children: j.intl.format(j.t.AioIGb, { count: s.length + d.length }),
                            }),
                        s.map((e, t) =>
                            (0, E.jsx)(
                                S9,
                                { appIdentity: e, oauth2Token: l.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        d.map((e, t) =>
                            (0, E.jsx)(
                                S7,
                                {
                                    theme: r,
                                    account: e,
                                    locale: a,
                                    onDisconnect: () =>
                                        (function (e) {
                                            let { type: t, id: i } = e;
                                            S_.A.disconnect(t, i);
                                        })(e),
                                },
                                `connection-${t}`,
                            ),
                        ),
                    ],
                })),
        (0, E.jsx)("div", { className: S6.V, children: t })
    );
}
let Tn = (0, a.E2)(u.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            let e = (0, o.SV)("NewConnectSection");
            return (0, E.jsx)(s7.D, {
                label: j.intl.string(e ? j.t["t+aGse"] : j.t.ZeDrUf),
                description: e ? void 0 : j.intl.format(j.t["oYc+Gz"], { privacyPolicyUrl: U.X7G.PRIVACY }),
                children: (0, E.jsx)(Tt, {}),
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
    Ts = (0, a.E2)(u.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, g.bG)([eX.A], () => eX.A.hidePersonalInformation),
                t = (0, g.bG)([Sw.A], () => Sw.A.isFetching()),
                i = (0, g.bG)([Sw.A], () => Sw.A.getAccounts()),
                { authorizedAppsFetchState: n, authorizedApps: s } = (0, g.cf)([SP.default], () => ({
                    authorizedAppsFetchState: SP.default.getFetchState(),
                    authorizedApps: SP.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: l, filteredAppIdentities: r } = (0, SH.A)(iA.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, cq.Ay)(),
                o = (0, g.bG)([d0.default], () => d0.default.locale);
            return (S.useEffect(() => {
                n === SP.FetchState.NOT_FETCHED && Sx.A.fetch();
            }, [n]),
            e)
                ? null
                : (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsx)(SY, {}),
                          (0, E.jsx)(Ti, {
                              fetching: t || l || (r.length > 0 && n !== SP.FetchState.FETCHED),
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
            S_.A.fetch();
        },
        useSearchTerms: () => [
            j.intl.string(j.t["+/hZM/"]),
            j.intl.string(j.t.bsbMVz),
            j.intl.string(j.t.f7yOAX),
            j.intl.string(j.t.FYKGsL),
            j.intl.string(j.t["+KCMSi"]),
        ],
    });
var Tl = i(206828);
function Tr() {
    let e = (0, g.bG)([Sw.A], () => Sw.A.getAccounts()),
        t = S.useMemo(
            () =>
                SC.A.filter(
                    (e) => e.migrationData?.getMigrationExperimentEnabled("ConnectionDeprecationInlineNotice") === !0,
                ).filter((t) => e.some((e) => e.type === t.type)),
            [e],
        ),
        [i, n] = S.useState(0),
        [s, l] = S.useState(t),
        r = t !== s;
    r && (l(t), n(0));
    let a = S.useMemo(() => t[i], [t, i]),
        o = (0, tr.h)(a?.migrationData?.replacedBy),
        { canStartAuthorization: u, hasAlreadyLinked: d, fetched: c } = (0, Tl.RD)(o),
        m =
            a?.type === U.fg2.RIOT_GAMES || a?.type === U.fg2.LEAGUE_OF_LEGENDS
                ? j.intl.string(S5.default["1S6oAo"])
                : o?.name,
        A = null != a && c,
        E = A && !d && u && o?.connectionEntrypointUrl != null;
    return (
        r || !A || E || n((e) => e + 1),
        S.useMemo(
            () =>
                E
                    ? {
                          type: h.lT.INLINE_NOTICE,
                          noticeType: "info",
                          text: j.intl.format(S5.default.wUXupS, {
                              connectionName: a.name,
                              applicationName: m,
                              connectionEntrypointUrl: o?.connectionEntrypointUrl,
                              helpCenterLink:
                                  a.migrationData?.helpCenterLinkIntlMessage != null
                                      ? j.intl.string(a.migrationData.helpCenterLinkIntlMessage)
                                      : void 0,
                          }),
                      }
                    : null,
            [a, m, o, E],
        )
    );
}
let Ta = (0, a.zZ)(u.X.CONNECTIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["3fe7U5"]),
        useSubtitle: () => j.intl.string(j.t.U22vw6),
        useInlineNotice: Tr,
        buildLayout: () => [Tn, Ts],
    }),
    To = (0, a.zZ)(u.X.AUTHORIZED_APPS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        useSubtitle: () => j.intl.string(j.t.G9JfLg),
        buildLayout: () => [Sf],
        initialize: () => (
            Sx.A.fetch(),
            () => {
                Sp.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    Tu = (0, a.t_)(u.X.CONNECTED_APPS_PANEL, {
        useTitle: () => j.intl.string(j.t.lrVuZO),
        useObscuredNotice: dg.L,
        buildLayout: () => [Ta, To],
    }),
    Td = (0, a.i4)(u.X.CONNECTED_APPS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.lrVuZO),
        icon: EE.q,
        buildLayout: () => [Tu],
    }),
    Tc = (0, a.WI)(u.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => j.intl.string(j.t.BA9200),
        buildLayout: () => [i4, eG, iI, Td],
    });
var Tg = i(631670),
    Tm = i(619499),
    TA = i(836602),
    Th = i(591179),
    TE = i(854627),
    TS = i(975732),
    TT = i(761508),
    Tx = i(159001),
    Tp = i(344346),
    Tf = i(919395),
    TN = i(699217);
function T_(e) {
    let { title: t, children: i } = e;
    return (0, E.jsxs)("div", {
        children: [(0, E.jsx)(eV.D, { variant: "text-md/medium", className: TN.Vf, children: t }), i],
    });
}
function TI(e) {
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
        className: e7()(TN.UA, i),
        children: (0, E.jsxs)("div", {
            className: e7()(TN.yt, n),
            children: [
                (0, E.jsx)("div", {
                    className: e7()(TN.Fp, a && TN.Oz),
                    children: (0, E.jsxs)(E.Fragment, {
                        children: [
                            (0, E.jsx)(T_, { title: l ?? j.intl.string(j.t.Zb06yP), children: s }),
                            null != r ? (0, E.jsx)(T_, { title: j.intl.string(j.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, E.jsx)("div", { className: TN.oB, children: t }),
            ],
        }),
    });
}
var TC = i(986687),
    Tb = i(101058),
    Tv = i(321191),
    Ty = i(696451),
    Tj = i(271078);
function TO() {
    return (0, E.jsxs)("div", {
        className: Tj.p$,
        children: [
            (0, E.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: Tj.Sl }),
            (0, E.jsx)(eV.D, {
                className: Tj.h8,
                variant: "heading-lg/extrabold",
                children: j.intl.string(j.t.Z1OZCV),
            }),
            (0, E.jsx)(es.E, { className: Tj.h8, variant: "text-md/normal", children: j.intl.string(j.t.ZSt4Tt) }),
            (0, E.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: Tj.h8,
                children: (0, E.jsx)(ek.$, {
                    variant: "primary",
                    text: j.intl.string(j.t.jQ3pqt),
                    onClick: function () {
                        (0, s9.pX)(U.BVt.GUILD_DISCOVERY), (0, sZ.default)();
                    },
                }),
            }),
        ],
    });
}
var TR = i(81400),
    TL = i(252732),
    TD = i(355622),
    TP = i(408018),
    TG = i(138617),
    TM = i(594943);
let TU = (0, sJ.Ld)(),
    TV = (0, ic.createChannelRecord)({ id: "1", type: U.rbe.DM }),
    Tk = (0, sJ.Ld)();
function Tw(e) {
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
        [d, c] = S.useState((0, TP.x7)(o)),
        g = S.useRef(r),
        m = S.useRef(!1);
    return (
        S.useEffect(() => {
            if (g.current !== r) {
                let e = (0, TP.x7)(r);
                u(r), c(e);
            }
            g.current = r;
        }, [r]),
        S.useEffect(() => {
            void 0 !== s || o === r || m.current || (u(r), c((0, TP.x7)(r)));
        }, [s, r, o]),
        (0, E.jsxs)(uu.A, {
            title: t,
            titleId: TU,
            description: j.intl.string(j.t.Bbw6Ac),
            errors: i,
            disabled: a,
            children: [
                (0, E.jsx)(TG.Ay, {
                    "aria-describedby": Tk,
                    "aria-labelledby": TU,
                    className: TM.i,
                    innerClassName: TM.Z,
                    maxCharacterCount: U.NA2,
                    onChange: function (e, t, i) {
                        t !== o && (u(t), c(i), n(t));
                    },
                    placeholder: l,
                    channel: TV,
                    textValue: o,
                    richValue: d,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: eq.USER_SETTINGS_MODAL_KEY,
                    type: TD.oU.PROFILE_BIO_INPUT,
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
                (0, E.jsx)(eo.A, { id: Tk, children: j.intl.format(j.t["+DFxLc"], { maxLength: U.NA2 }) }),
            ],
        })
    );
}
var TF = i(930861),
    TB = i(821956),
    Tz = i(562819),
    TY = i(84540),
    TX = i(848575);
function TH(e) {
    let { user: t, guild: i, className: n, sectionTitle: s, forcedDivider: l = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, n1.Ay)(),
        o = (0, Tf.a4)({ user: t, guildId: i?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, Tf.CP)(i?.id),
        c = r ? TF.wL : ot.$n;
    return (0, E.jsx)(uu.A, {
        className: n,
        forcedDivider: l,
        hasBackground: !0,
        title: s,
        errors: d,
        children: (0, E.jsxs)("div", {
            className: TX.NC,
            children: [
                (0, E.jsx)(c, {
                    size: ot.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, Tz.L)({ analyticsLocations: a, guild: i });
                    },
                    className: e7()({ [TX.yj]: r }),
                    children: j.intl.string(j.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TX.DT,
                        children: (0, E.jsx)(ek.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, TB.uZ)(t, i) ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.OrokWm),
                            onClick: function () {
                                (0, TY.p)({ guildId: i?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var TK = i(339984),
    TW = i(831653);
let TZ = [{ name: "gif", extensions: ["gif"] }];
function Tq(e) {
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
        { newestAnalyticsLocation: g } = (0, n1.Ay)(),
        m = c ? TF.wL : ot.$n,
        A = S.useCallback(() => {
            (0, TL.XD)({
                uploadType: TK.HL.AVATAR,
                analyticsSource: g,
                filters: u ? TZ : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, g, u]);
    return (0, E.jsx)(uu.A, {
        className: a,
        title: s,
        errors: i,
        disabled: o,
        forcedDivider: d,
        children: (0, E.jsxs)("div", {
            className: TW.NC,
            children: [
                (0, E.jsx)(m, {
                    className: e7()({ [TW.yj]: c }),
                    size: ot.$n.Sizes.SMALL,
                    onClick: A,
                    children: l ?? j.intl.string(j.t["4OynCD"]),
                }),
                t &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TW.DT,
                        children: (0, E.jsx)(ek.$, {
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
var TQ = i(248778),
    TJ = i(479183);
function T$(e) {
    let { user: t, guildId: i, className: n } = e,
        s = uh.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: l } = (0, n1.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, Tf.B0)(t, i),
        d = (0, TQ.ux)("DisplayNameStylesSection"),
        [c, g] = (0, eB.kn)(d ? [eF.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        m = c === eF.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE,
        A = (0, S.useCallback)(() => {
            g(iT.i.TAKE_ACTION),
                G.default.track(U.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, n2.L)({ analyticsLocations: l, guildId: i });
        }, [l, i, g]),
        h = (0, S.useCallback)(() => {
            (0, TY.p)({ displayNameStyles: null }), G.default.track(U.HAw.DISPLAY_NAME_STYLES_REMOVED);
        }, []),
        T = (0, S.useCallback)(() => {
            (0, TY.p)({ guildId: i, displayNameStyles: null });
        }, [i]),
        x = void 0 !== o ? o : null != i ? a : r;
    return (0, E.jsx)(uu.A, {
        title: j.intl.string(n3.default["86GtGH"]),
        titleBadge: m ? (0, E.jsx)(sS.Lp, { text: j.intl.string(j.t.y2b7CA), className: TJ.A }) : void 0,
        className: n,
        showPremiumIcon: s,
        errors: u,
        children: (0, E.jsxs)("div", {
            className: TJ.N,
            children: [
                (0, E.jsx)(ek.$, {
                    variant: "primary",
                    size: "sm",
                    text: j.intl.string(n3.default.vJqrIg),
                    onClick: A,
                }),
                null == i &&
                    null != x &&
                    (0, E.jsx)(ek.$, {
                        variant: "secondary",
                        size: "sm",
                        text: j.intl.string(n3.default.ymq8WQ),
                        onClick: h,
                    }),
                null != i &&
                    null != x &&
                    (0, E.jsx)(ek.$, {
                        variant: "secondary",
                        size: "sm",
                        text: j.intl.string(n3.default["j/KRxc"]),
                        onClick: T,
                    }),
            ],
        }),
    });
}
var T0 = i(637193),
    T1 = i(946801);
function T2(e) {
    let { user: t, guild: i, titleIcon: n } = e,
        { analyticsLocations: s } = (0, n1.Ay)(),
        l = null != i,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, Tf.rv)(t, i?.id),
        d = S.useCallback(() => {
            (0, T0.p)({ analyticsLocations: s, guildId: i?.id });
        }, [s, i?.id]),
        c = S.useCallback(() => {
            (0, TY.p)({ guildId: i?.id, nameplate: null });
        }, [i?.id]);
    return (0, E.jsx)(uu.A, {
        title: j.intl.string(j.t.x5CoXR),
        titleIcon: n,
        errors: u,
        children: (0, E.jsxs)("div", {
            className: T1.u,
            children: [
                (0, E.jsx)(ek.$, { variant: "primary", size: "sm", text: j.intl.string(j.t.BwdeM1), onClick: d }),
                (void 0 === o ? (l ? a : r) != null : null != o) &&
                    (0, E.jsx)(ek.$, {
                        variant: "secondary",
                        size: "sm",
                        text: l ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t["9zwziY"]),
                        onClick: c,
                    }),
            ],
        }),
    });
}
var T3 = i(617255);
function T5(e) {
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
        { newestAnalyticsLocation: c } = (0, n1.Ay)(),
        g = d ? TF.wL : ot.$n;
    return (0, E.jsx)(uu.A, {
        className: l,
        title: j.intl.string(j.t.Vgdusv),
        showPremiumIcon: a,
        errors: i,
        disabled: r,
        forcedDivider: u,
        children: (0, E.jsxs)("div", {
            className: T3.NC,
            children: [
                (0, E.jsx)(g, {
                    className: e7()({ [T3.yj]: d }),
                    size: ot.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, TL.XD)({ uploadType: TK.HL.BANNER, analyticsSource: c, guildId: s, isTryItOut: o }),
                    children: j.intl.string(j.t.N0bC3P),
                }),
                t &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: T3.DT,
                        children: (0, E.jsx)(ek.$, {
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
var T6 = i(617061),
    T4 = i(869438);
function T8(e) {
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
        { analyticsLocations: u } = (0, n1.Ay)(),
        d = uh.Ay.canUsePremiumProfileCustomization(t),
        c = (0, Tf.N2)({ user: t, guildId: i?.id }),
        { pendingProfileEffect: g, errors: m } = (0, Tf.nZ)(i?.id);
    S.useEffect(() => {
        d &&
            G.default.track(U.HAw.PREMIUM_UPSELL_VIEWED, {
                type: s0.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            });
    }, [d, u]);
    let A = a ? TF.wL : ot.$n;
    return (0, E.jsx)(uu.A, {
        forcedDivider: r,
        borderType: cb.i.PREMIUM,
        hasBackground: !0,
        title: l,
        showBorder: o,
        errors: m,
        className: s,
        children: (0, E.jsxs)("div", {
            className: T4.NC,
            children: [
                (0, E.jsx)(A, {
                    size: ot.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, T6.W)({ analyticsLocations: u, guild: i, initialSelectedEffect: n });
                    },
                    className: e7()({ [T4.yj]: a }),
                    children: j.intl.string(j.t["/dRfCf"]),
                }),
                (void 0 === g ? null != c : null != g) &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: T4.DT,
                        children: (0, E.jsx)(ek.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != i ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.uMuafO),
                            onClick: function () {
                                (0, TY.p)({ guildId: i?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var T7 = i(13875),
    T9 = i(515727),
    xe = i(566935);
function xt(e) {
    let { user: t, guild: i, sectionTitle: n } = e,
        { analyticsLocations: s } = (0, n1.Ay)(),
        l = (0, T7.sk)("ProfileFrameSection"),
        r = (0, Tf.Xf)({ user: t, guildId: i?.id }),
        { pendingProfileFrame: a, errors: o } = (0, Tf.Tu)(i?.id),
        [u, d] = (0, eB.kn)([eF.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        c = u === eF.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return l
        ? (0, E.jsx)(uu.A, {
              showBorder: c,
              borderType: c ? cb.i.NEW_UPSELL : cb.i.PREMIUM,
              hasBackground: c,
              title: n,
              titleBadge: c ? (0, E.jsx)(sS.Lp, { text: j.intl.string(j.t.y2b7CA), className: xe.Ad }) : void 0,
              description: c ? j.intl.string(j.t.yMoMAt) : void 0,
              errors: o,
              children: (0, E.jsxs)("div", {
                  className: xe.NC,
                  children: [
                      (0, E.jsx)(ek.$, {
                          variant: "primary",
                          size: "sm",
                          text: j.intl.string(j.t["9/hmle"]),
                          onClick: function () {
                              (0, T9.w)({ analyticsLocations: s, guild: i }), d(iT.i.TAKE_ACTION);
                          },
                      }),
                      (void 0 === a ? null != r : null != a) &&
                          (0, E.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: xe.DT,
                              children: (0, E.jsx)(ek.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: null != i ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.nQBruk),
                                  onClick: function () {
                                      (0, TY.p)({ guildId: i?.id, profileFrame: null });
                                  },
                              }),
                          }),
                  ],
              }),
          })
        : null;
}
var xi = i(602853),
    xn = i(654107),
    xs = i(999291),
    xl = i(101928),
    xr = i(317097),
    xa = i(508274),
    xo = i(919796),
    xu = i(426399);
function xd(e) {
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
        c = (0, xi.r)(er.A.colors.BACKGROUND_BASE_LOW).hex(),
        g = er.A.colors.BACKGROUND_MOD_MUTED.css,
        m = (0, TL.sN)(n),
        A = (0, xr.Hl)(n),
        h = A === c ? g : A,
        T = m ? er.A.unsafe_rawColors.WHITE.css : er.A.unsafe_rawColors.PRIMARY_530.css,
        x = (0, xo.A)(a),
        p = (0, xo.A)(o),
        [f, N] = S.useState((0, dh.A)());
    return (
        S.useEffect(() => {
            (x !== a || p !== o) && N((0, dh.A)());
        }, [o, a, p, x]),
        (0, E.jsx)(ee.Y, {
            targetElementRef: d,
            positionKey: f,
            renderPopout: (e) =>
                (0, E.jsx)(xa.VN, {
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
                    className: e7()(xu.oP, { [xu.r9]: l }),
                    children: [
                        (0, E.jsx)(en.D, {
                            ...i,
                            tabIndex: l ? -1 : 0,
                            onClick: l ? U.tEg : t,
                            style: { backgroundColor: A, borderColor: h },
                            className: xu.nf,
                            "aria-label": j.intl.string(j.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, E.jsx)(uA.R, {
                                size: "custom",
                                className: xu.BW,
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
var xc = i(811160);
function xg(e) {
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
        c = (0, xs.Ay)(t.id, r),
        { primaryColor: g, secondaryColor: m } = (0, xl.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: n,
            isPreview: !0,
        }),
        A = uh.Ay.canUsePremiumProfileCustomization(t),
        h = null != i ? i : t.getAvatarURL(r, 80),
        S = (0, xi.r)(er.A.unsafe_rawColors.PRIMARY_530).hex(),
        T = (0, xn.rh)(h, S, !1);
    return null == g || null == m
        ? null
        : (0, E.jsx)(uu.A, {
              title: j.intl.string(j.t.DMeO2X),
              disabled: !A && !l,
              className: e7()(xc.__invalid_profileThemesSection, a),
              showPremiumIcon: o,
              forcedDivider: d,
              children: (0, E.jsxs)("div", {
                  className: xc.hd,
                  children: [
                      (0, E.jsx)("div", {
                          className: xc.YX,
                          children: (0, E.jsx)(xd, {
                              onChange: (e) => s([e, m]),
                              color: g,
                              suggestedColors: T,
                              showEyeDropper: !0,
                              label: (0, E.jsx)(es.E, {
                                  className: xc.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: j.intl.string(j.t.C3KTQk),
                              }),
                          }),
                      }),
                      (0, E.jsx)("div", {
                          className: xc.YX,
                          children: (0, E.jsx)(xd, {
                              onChange: (e) => s([g, e]),
                              color: m,
                              suggestedColors: T,
                              showEyeDropper: !0,
                              label: (0, E.jsx)(es.E, {
                                  className: xc.yz,
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
                              className: xc.WA,
                              children: (0, E.jsx)(ek.$, {
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
function xm(e) {
    let {
            sectionTitle: t,
            errors: i,
            onPronounsChange: n,
            pendingPronouns: s,
            placeholder: l,
            currentPronouns: r,
            disabled: a = !1,
        } = e,
        o = (0, sJ.GV)();
    return (0, E.jsx)(uu.A, {
        title: t,
        titleId: o,
        errors: i,
        disabled: a,
        children: (0, E.jsx)(rq.k, {
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
var xA = i(427262),
    xh = i(684732),
    xE = i(576705),
    xS = i(522334);
function xT(e) {
    let { errors: t, pendingNick: i, currentNick: n, username: s, user: l, guild: r } = e,
        a = (0, g.bG)([xE.A], () => xE.A.can(U.xBc.CHANGE_NICKNAME, r) || xE.A.can(U.xBc.MANAGE_NICKNAMES, r)),
        o = (0, SL.L)(s0.PremiumTypes.TIER_2);
    return (0, E.jsxs)(uu.A, {
        title: j.intl.string(j.t.me1lRk),
        errors: t,
        children: [
            (0, E.jsx)(rq.k, {
                value: i ?? n ?? "",
                placeholder: s,
                maxLength: U.d0r,
                onChange: function (e) {
                    (0, TY.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : j.intl.string(j.t.gzjxQi),
            }),
            o && (0, E.jsx)(T$, { user: l, guildId: r.id, className: xS.F }),
        ],
    });
}
var xx = i(816453);
let xp = "/assets/b25da78aa7949feb.png";
function xf(e) {
    let { user: t, showOverlay: i, children: n } = e,
        s = (0, cq.Ay)(),
        { analyticsLocations: l } = (0, n1.Ay)(e6.A.PREMIUM_UPSELL_OVERLAY);
    return (S.useEffect(() => {
        i &&
            G.default.track(U.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: l,
                type: s0.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            });
    }, [i, l]),
    i)
        ? (0, E.jsxs)("div", {
              className: xx.ry,
              children: [
                  (0, E.jsx)("div", { children: n }),
                  (0, E.jsxs)("div", {
                      className: xx.Wc,
                      children: [
                          (0, E.jsx)("img", {
                              className: xx.Tn,
                              alt: j.intl.string(j.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case U.NJ8.DARK:
                                      case U.NJ8.DARKER:
                                      case U.NJ8.MIDNIGHT:
                                          return xp;
                                      case U.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return xp;
                                  }
                              })(s),
                          }),
                          (0, E.jsxs)("div", {
                              className: xx._9,
                              children: [
                                  (0, E.jsx)(es.E, {
                                      variant: "text-lg/semibold",
                                      color: "text-overlay-light",
                                      children: j.intl.string(j.t.dMaDFX),
                                  }),
                                  (0, E.jsx)(es.E, {
                                      variant: "text-sm/normal",
                                      color: "text-overlay-light",
                                      children: j.intl.string(j.t.F7sgFH),
                                  }),
                              ],
                          }),
                          (0, E.jsx)(cC.A, {
                              size: ot.$n.Sizes.LARGE,
                              color: ot.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: uh.Ay.isPremium(t)
                                      ? j.intl.string(j.t.AfRWI8)
                                      : j.intl.string(j.t.nkdUym),
                              },
                              subscriptionTier: s0.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : n;
}
var xN = i(784075);
function x_() {
    let e = (0, g.bG)([iA.default], () => {
            let e = iA.default.getCurrentUser();
            return tZ()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        t = (0, SL.L)(s0.PremiumTypes.TIER_2),
        i = (0, g.bG)([TA.A, eh.A], () => eh.A.getGuild(TA.A.selectedGuildId));
    tZ()(null != i, "guild should not be null");
    let {
            pendingAvatar: n,
            pendingNickname: s,
            pendingBanner: l,
            pendingBio: r,
            pendingPronouns: a,
            pendingThemeColors: o,
            errors: u,
        } = (0, g.cf)([TA.A], () => ({ ...TA.A.getPendingChanges(i.id), errors: TA.A.getErrors(i.id) })),
        d = (0, Tb.V7)({ userId: e.id, image: n }),
        c = (0, TR.EC)(i.id),
        m = (0, g.bG)([Ty.Ay], () => (null == i.id ? null : Ty.Ay.getMember(i.id, e.id))),
        A = (0, g.bG)([Tv.A], () => Tv.A.getGuildMemberProfile(e.id, i.id)),
        h = uh.Ay.canUsePremiumProfileCustomization(e),
        S = (0, Tf.z5)(n, m?.avatar),
        T = (0, Tf.Ac)(l, A?.banner),
        x = (0, xh.l)(o, A?.themeColors),
        p = A?.bio ?? "",
        f = A?.pronouns ?? "";
    return (0, E.jsxs)("div", {
        className: xN.Q,
        children: [
            (0, E.jsx)(
                xT,
                {
                    errors: u?.nick ?? c?.nick,
                    username: xA.Ay.getName(e),
                    pendingNick: s,
                    currentNick: m?.nick,
                    user: e,
                    guild: i,
                },
                "nick",
            ),
            (0, E.jsx)(
                xm,
                {
                    sectionTitle: j.intl.string(j.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, TY.p)({ guildId: i.id, pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: f,
                },
                "pronouns",
            ),
            (0, E.jsxs)(xf, {
                user: e,
                showOverlay: !h,
                children: [
                    (0, E.jsx)(
                        Tq,
                        {
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t.lqaIxI),
                                    (0, E.jsx)(td.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(ur.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xN.a,
                                        }),
                                    }),
                                ],
                            }),
                            showRemoveAvatarButton: S,
                            onAvatarChange: function (e) {
                                if (null != i)
                                    return (0, TL.rM)(e, m?.avatar, (e) => (0, TY.p)({ guildId: i.id, avatar: e }));
                            },
                            errors: u?.avatar,
                            guildId: i.id,
                            disabled: !h,
                        },
                        "avatar",
                    ),
                    (0, E.jsx)(
                        TH,
                        {
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t["7v0T9P"]),
                                    (0, E.jsx)(td.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(ur.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xN.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: e,
                            guild: i,
                        },
                        "decoration",
                    ),
                    !t && (0, E.jsx)(T$, { user: e, guildId: i.id }),
                    (0, E.jsx)(
                        T2,
                        {
                            user: e,
                            guild: i,
                            titleIcon: (0, E.jsx)(td.m, {
                                text: j.intl.string(j.t["5AFxuK"]),
                                children: (0, E.jsx)(ur.t, { size: "md", color: "currentColor", className: xN.a }),
                            }),
                        },
                        "nameplate",
                    ),
                    (0, E.jsx)(
                        T8,
                        {
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t.wR5wOo),
                                    (0, E.jsx)(td.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(ur.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xN.a,
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
                        xt,
                        {
                            user: e,
                            guild: i,
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t.GWrZOd),
                                    (0, E.jsx)(td.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(ur.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xN.a,
                                        }),
                                    }),
                                ],
                            }),
                        },
                        "frame",
                    ),
                    (0, E.jsx)(
                        T5,
                        {
                            showRemoveBannerButton: T,
                            errors: u?.banner,
                            onBannerChange: function (e) {
                                if (null != i)
                                    return (0, TL.rM)(e, A?.banner, (e) => (0, TY.p)({ guildId: i.id, banner: e }));
                            },
                            guildId: i.id,
                            disabled: !h,
                        },
                        "banner",
                    ),
                    (0, E.jsx)(xg, {
                        user: e,
                        pendingAvatarSrc: d,
                        pendingColors: o,
                        onThemeColorsChange: (e) => (0, TY.p)({ guildId: i.id, themeColors: e }),
                        guildId: i.id,
                        showResetThemeButton: x,
                    }),
                    (0, E.jsx)(
                        Tw,
                        {
                            placeholder: j.intl.string(j.t["/7NKgv"]),
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t.ZzAR2Y),
                                    (0, E.jsx)(td.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(ur.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xN.a,
                                        }),
                                    }),
                                ],
                            }),
                            onBioChange: (e) => (0, TY.p)({ guildId: i.id, bio: e }),
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
var xI = i(379550);
function xC(e) {
    (0, K.openModalLazy)(async () => {
        let { default: t } = await Promise.all([i.e("41509"), i.e("66901"), i.e("61129")]).then(i.bind(i, 475312));
        return (i) => (0, E.jsx)(t, { source: { ...e, page: U.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...i });
    });
}
function xb(e) {
    let { selectedGuild: t, onGuildChange: i } = e,
        { analyticsLocations: n } = (0, n1.Ay)(e6.A.USER_SETTINGS_GUILD_PROFILE),
        s = (0, g.bG)([iA.default], () => {
            let e = iA.default.getCurrentUser();
            return tZ()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        l = (0, g.bG)([Ty.Ay], () => (null != t ? Ty.Ay.getMember(t.id, s.id) : null)),
        r = (0, g.bG)([Tv.A], () => !Tv.A.isFetchingProfile(s.id, t?.id)),
        a = (0, g.bG)([eX.A], () => eX.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, g.cf)([TA.A], () => TA.A.getPendingChanges(t?.id)),
        c = (0, Tb.V7)({ userId: s.id, image: o }),
        m = (0, Tf.lw)({
            pendingValue: u,
            userValue: s?.collectibles?.nameplate,
            guildValue: l?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: A } = (0, Tf.B0)(s, t?.id);
    return (S.useEffect(() => () => sm.h.wait(Tx.IM), []), a)
        ? (0, E.jsx)(dg.A, {})
        : r
          ? (0, E.jsxs)(n1.f5, {
                value: n,
                children: [
                    (0, E.jsx)(es.E, {
                        variant: "text-sm/normal",
                        children: j.intl.format(j.t["/PTB2E"], {
                            helpCenterLink: ty.A.getArticleURL(U.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(uo.A, { guildId: t.id, onChange: i }),
                                  (0, E.jsx)(TI, {
                                      profilePreviewTitle: (0, E.jsx)(eV.D, {
                                          variant: "heading-md/medium",
                                          className: xI.YV,
                                          children: j.intl.formatToPlainString(j.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, E.jsx)(TC.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: A,
                                          user: s,
                                          guild: t,
                                          canUsePremiumCustomization: uh.Ay.canUsePremiumProfileCustomization(s),
                                          onUpsellClick: xC,
                                          containerClassName: xI.ti,
                                      }),
                                      nameplatePreview: (0, E.jsx)(Tp.A, {
                                          ...d,
                                          pendingDisplayNameStyles: A,
                                          user: s,
                                          guildId: t?.id,
                                          nameplate: m,
                                          className: null == m ? xI.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, E.jsx)(x_, {}),
                                  }),
                              ],
                          })
                        : (0, E.jsx)(TO, {}),
                ],
            })
          : (0, E.jsx)(dA.y, {});
}
var xv = i(903209),
    xy = i(834297);
function xj(e) {
    let { children: t, notice: i } = e;
    return (0, E.jsxs)("div", { className: xy.r, children: [i, (0, E.jsx)("div", { children: t })] });
}
var xO = i(269115),
    xR = i(823092),
    xL = i(34332),
    xD = i(379197),
    xP = i(488430),
    xG = i(457421),
    xM = i(940622),
    xU = i(25176),
    xV = i(341206);
let xk = function () {
    let e,
        t,
        i,
        n,
        { analyticsLocations: s } = (0, n1.Ay)(e6.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        l = S.useRef(null),
        {
            asset: r,
            popoutAsset: a,
            title: o,
            body: u,
            version: d,
            revertTextColor: c,
        } = ((e = (0, xM.mb)(xU.RN.UPSELL_BANNER)),
        (t = (0, xM.mb)(xU.RN.UPSELL_BANNER_POPOUT)),
        (i = (0, g.bG)([xG.A], () => xG.A.getMarketingBySurface(xD.R.EDIT_PROFILE_SETTINGS))),
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
            () => ({ ...n, type: xP.G.BANNER, asset: e ?? n.asset, popoutAsset: t ?? n.popoutAsset }),
            [e, t, n],
        )),
        { navigateWithValidation: m } = (0, xR.L_)();
    return (
        S.useEffect(() => {
            G.default.track(U.HAw.PREMIUM_UPSELL_VIEWED, {
                type: s0.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: s,
                version: d,
            });
        }, [s, d]),
        (0, E.jsxs)("div", {
            ref: l,
            className: xV.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, E.jsx)("div", {
                    className: xV.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, E.jsx)("img", { src: a, className: xV.Qw, alt: "" }),
                }),
                (0, E.jsxs)("div", {
                    className: xV.Em,
                    children: [
                        (0, E.jsx)(eV.D, {
                            variant: "heading-lg/extrabold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: xV.DD,
                            children: o,
                        }),
                        (0, E.jsx)(es.E, {
                            variant: "text-sm/normal",
                            color: c ? "text-overlay-dark" : "currentColor",
                            children: u,
                        }),
                    ],
                }),
                (0, E.jsx)(ek.$, {
                    onClick: function () {
                        m(() =>
                            (0, xL.Cz)({
                                analyticsLocations: s,
                                analyticsSource: e6.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
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
var xw = i(451909),
    xF = i(202639),
    xB = i(400669),
    xz = i(835071),
    xY = i(422936),
    xX = i(732280),
    xH = i(590180),
    xK = i(898461),
    xW = i(207803),
    xZ = i(461797);
let xq = Object.keys(xZ.jB);
function xQ(e) {
    let t = null == e ? xq : xq.filter((t) => t !== e);
    return t[Math.floor(Math.random() * t.length)];
}
var xJ = i(764336),
    x$ = i(461893);
function x0(e) {
    let { preset: t, onShuffle: i } = e,
        n = (0, g.bG)([ni.Ay], () => ni.Ay.useReducedMotion),
        s = (0, xJ.Xf)({ useReducedMotion: n }),
        { name: l, header: r } = S.useMemo(() => {
            let e = (0, xZ.Wt)(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, E.jsxs)("div", {
        className: x$.kL,
        children: [
            (0, E.jsx)(en.D, {
                onClick: () => {
                    i(), s.startAnimation(!1);
                },
                className: x$.x6,
                "aria-label": j.intl.string(j.t["44yJxh"]),
                children: s.render(),
            }),
            (0, E.jsxs)(en.D, {
                onClick: () => {
                    i(), s.startAnimation(!1);
                },
                "aria-label": `${l}: ${j.intl.string(j.t["44yJxh"])}`,
                className: x$.Lt,
                children: [
                    (0, E.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: x$.L_ }),
                    (0, E.jsx)(es.E, {
                        className: x$._e,
                        variant: "text-sm/bold",
                        color: "text-overlay-light",
                        children: l,
                    }),
                ],
            }),
        ],
    });
}
var x1 = i(410516),
    x2 = i(811611),
    x3 = i(515718),
    x5 = i(507553);
function x6(e, t) {
    let i = x5.A.useField("scrollPosition"),
        n = (0, g.bG)([ni.Ay], () => ni.Ay.useReducedMotion);
    (0, S.useEffect)(() => {
        let s = e.current;
        if (null == s || i !== t) return;
        let l = requestAnimationFrame(() => {
            s.scrollIntoView({ behavior: n ? "auto" : "smooth" }), x5.A.setState({ scrollPosition: null });
        });
        return () => cancelAnimationFrame(l);
    }, [e, t, i, n]);
}
var x4 = i(844222),
    x8 = i(4542);
function x7(e) {
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
        } = (0, g.cf)([TA.A], () => {
            let e = TA.A.getPendingChanges(),
                t = TA.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        p = (0, Tb.V7)({ userId: t.id, image: A ?? s });
    return (0, E.jsx)(TC.A, {
        user: t,
        pendingPronouns: d,
        pendingBio: c,
        pendingBanner: h ?? l ?? i(636763),
        pendingDisplayNameStyles: x ?? o,
        pendingAvatar: p,
        pendingThemeColors: m ?? u,
        pendingAvatarDecoration: void 0 !== T ? T : r,
        pendingProfileEffect: a,
        avatarClassName: null != A || null != s || n.enabled ? void 0 : x8.WX,
        containerClassName: x8.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var x9 = i(530702);
function pe(e) {
    let { user: t, isVisible: i, shouldShow: n } = e,
        s = uh.Ay.isPremium(t),
        l = uh.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, g.cf)([TA.A], () => {
            let e = TA.A.getPendingChanges(),
                t = TA.A.getErrors(),
                i = TA.A.getTryItOutChanges();
            return { ...e, ...i, errors: t };
        }),
        { preset: c, onShuffle: m } = (function () {
            let e = (0, g.bG)([ni.Ay], () => ni.Ay.useReducedMotion),
                [t, i] = (0, S.useState)(xQ()),
                {
                    banner: n,
                    themeColors: s,
                    avatarDecorationSkuId: l,
                    displayNameStyles: r,
                } = (0, S.useMemo)(() => {
                    let i = (0, xZ.Wt)(t);
                    return {
                        banner: i.getBannerSrc(e),
                        themeColors: i.themeColors,
                        avatarDecorationSkuId: i.avatarDecorationSkuId,
                        displayNameStyles: i.displayNameStyles,
                    };
                }, [t, e]),
                a = (0, g.bG)([xH.A], () => {
                    let e = xH.A.getProduct(l);
                    return (0, xK.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, S.useEffect)(() => {
                (0, xW.w5)({ banner: n, themeColors: s, avatarDecoration: a, displayNameStyles: r });
            }, [n, s, a, r]);
            let o = (0, S.useCallback)(() => {
                let e = xQ(t);
                i(e), G.default.track(U.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: e });
            }, [t]);
            return { preset: t, onShuffle: o };
        })(),
        A = S.useRef(null);
    x6(A, nH._F.TRY_IT_OUT);
    let { analyticsLocations: h, sourceAnalyticsLocations: T } = (0, n1.Ay)(e6.A.USER_SETTINGS_TRY_OUT_PREMIUM);
    function x(e) {
        e &&
            (d?.startsWith("https:") === !0
                ? fetch(d)
                      .then((e) => e.blob())
                      .then((e) => (0, x3.We)(e))
                      .then((e) => {
                          (0, TY.p)({ avatar: u, themeColors: o, banner: e });
                      })
                      .catch(() => {
                          (0, TY.p)({ avatar: u, themeColors: o });
                      })
                : null != d
                  ? (0, TY.p)({ avatar: u, themeColors: o, banner: d })
                  : (0, TY.p)({ avatar: u, themeColors: o }),
            G.default.track(U.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
    }
    S.useEffect(() => {
        i &&
            G.default.track(U.HAw.PREMIUM_UPSELL_VIEWED, {
                type: s0.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: U.liQ.USER_SETTINGS },
                location_stack: T,
            });
    }, [T, t, i]);
    let p = (0, xX.V)()?.subscription_trial?.sku_id === s0.pe.TIER_2,
        f = (0, xY.O)(),
        N = (0, x1.U9)(f, s0.pe.TIER_2);
    return n
        ? (0, E.jsx)(n1.f5, {
              value: h,
              children: (0, E.jsxs)(cb.A, {
                  ref: A,
                  className: x9.MT,
                  type: cb.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, E.jsx)(TI, {
                          stickyPreview: !1,
                          layoutClassName: x9.th,
                          profilePreviewTitle: (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(ur.t, { size: "md", color: "currentColor", className: x9.PC }),
                                  j.intl.string(j.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, E.jsxs)(E.Fragment, {
                              children: [(0, E.jsx)(x0, { preset: c, onShuffle: m }), (0, E.jsx)(x7, { user: t })],
                          }),
                          children: (0, E.jsxs)("div", {
                              children: [
                                  (0, E.jsxs)("div", {
                                      children: [
                                          (0, E.jsx)(eV.D, {
                                              variant: "heading-xl/extrabold",
                                              children: j.intl.string(j.t["2zGdAW"]),
                                          }),
                                          (0, E.jsx)(es.E, {
                                              className: x9.h_,
                                              variant: "text-sm/normal",
                                              children: j.intl.string(j.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, E.jsx)(xg, {
                                      className: x9.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, Tb.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: xW.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, E.jsx)(T5, {
                                      className: x9.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: xW.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !l &&
                                      (0, E.jsx)(Tq, {
                                          className: x9.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: xW.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: j.intl.string(j.t["7z0D1c"]),
                                          sectionTitle: j.intl.string(j.t.vtFfPX),
                                      }),
                                  (0, E.jsx)(T$, { user: t, className: x9.fz }),
                                  !p &&
                                      (0, E.jsx)(es.E, {
                                          variant: "text-sm/normal",
                                          children: j.intl.string(j.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !p &&
                          (0, E.jsx)(xF.d, {
                              onSubscribeModalClose: x,
                              className: x9.Kv,
                              showUpsell: !0,
                              text: j.intl.format(j.t.TmfgI2, {
                                  onClick: () => {
                                      (0, xz.K)({ onSubscribeFinish: x });
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
                                  (0, E.jsx)("div", { className: x9.BU }),
                                  (0, E.jsx)(x2.Ay, {
                                      type: s0.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: s0.pe.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
var pt = i(814390),
    pi = i(909536),
    pn = i(843282),
    ps = i(145497),
    pl = i(685073),
    pr = i(534400),
    pa = i(581781),
    po = i(743981),
    pu = i(217510);
let pd = (0, sJ.Ld)(),
    pc = S.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: i, onChange: n } = e,
            s = S.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            l = (0, g.bG)([iA.default], () => (0, pl.Zo)(iA.default.getCurrentUser()?.primaryGuild).guildId),
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
                        : (0, E.jsx)(pa.A, {
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
                        : (0, E.jsx)(ps.j, {
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
                        : (0, E.jsx)(pr.o9, {
                              guildId: t.id,
                              guildTag: i,
                              guildBadge: t.profile?.badge ?? void 0,
                              badgeSize: po.Sl.SIZE_16,
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
            x6(x, nH._F.GUILD_TAG),
            (0, E.jsxs)(uu.A, {
                title: j.intl.string(j.t.Pdd1nd),
                titleId: pd,
                ref: x,
                children: [
                    (0, E.jsx)(es.E, {
                        className: pu.VA,
                        variant: "text-sm/normal",
                        children: j.intl.string(j.t.mlZ6Jx),
                    }),
                    (0, E.jsx)(pn.Pw, {
                        className: pu.Lt,
                        optionClassName: pu.S0,
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
var pg = i(318785),
    pm = i(992526),
    pA = i(470739);
let ph = function () {
    return (0, pm.J9)({ location: "UserSettingsProfileCustomization" })
        ? (0, E.jsx)(uu.A, {
              title: j.intl.string(j.t.l6w3Vj),
              description: j.intl.string(j.t.joHqdj),
              children: (0, E.jsx)(ek.$, {
                  text: j.intl.string(j.t.wRraFx),
                  onClick: () => {
                      (0, pA._)();
                  },
                  size: "sm",
              }),
          })
        : null;
};
var pE = i(182817);
let pS = (0, sJ.Ld)();
function pT(e) {
    let t = (0, SL.L)(s0.PremiumTypes.TIER_2);
    return (0, E.jsxs)(uu.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: j.intl.string(j.t["9AjdkD"]),
        titleId: pS,
        children: [
            (0, E.jsx)("div", {
                children: (0, E.jsx)(rq.k, {
                    "aria-labelledby": pS,
                    placeholder: e.placeholder,
                    maxLength: U.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, E.jsx)(T$, { user: e.user, className: pE.F }),
        ],
    });
}
var px = i(273151);
function pp(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: i } = e,
        n = L.m$.useSetting(),
        s = void 0 !== i ? i : n;
    return (0, E.jsx)("div", {
        className: px.u,
        children: (0, E.jsx)(J.d, {
            label: j.intl.string(j.t["3cWDuO"]),
            description: s ? null : j.intl.formatToPlainString(j.t.aYhclf, { username: t }),
            checked: !s,
            onChange: (e) => {
                !e === n ? (0, Tg._e)() : (0, TY.p)({ legacyUsernameDisabled: !e });
            },
        }),
    });
}
function pf(e) {
    let { user: t, savedUserColor: i, pendingColor: n, setPendingAccentColor: s } = e,
        l = t.getAvatarURL(null, 80),
        r = (0, xi.r)(er.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, xn.rh)(l, r, !1),
        o = (0, xr.LX)(a[0]);
    return (0, E.jsx)(uu.A, {
        title: j.intl.string(j.t["/X3fkf"]),
        children: (0, E.jsx)(xd, { onChange: (e) => s(e), color: n ?? i ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var pN = i(518477);
let p_ = function () {
    let e = (0, g.bG)([cV.default], () => cV.default.getId());
    return (0, E.jsx)(uu.A, {
        title: j.intl.string(j.t.Jzj9q4),
        children: (0, E.jsx)(ek.$, {
            text: j.intl.string(j.t.Geikwq),
            onClick: () => {
                (0, TS.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [e6.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: pN.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var pI = i(577997);
function pC() {
    let e = (0, g.bG)([iA.default], () => {
            let e = iA.default.getCurrentUser();
            return tZ()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e;
        }),
        t = (0, g.bG)([Tv.A], () => Tv.A.getUserProfile(e.id)),
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
        } = (0, g.cf)([TA.A], () => {
            let e = TA.A.getPendingChanges(),
                t = TA.A.getErrors();
            return { ...e, errors: t };
        }),
        m = (0, Tb.V7)({ userId: e.id, image: i }),
        A = (0, TR.EC)(),
        h = uh.Ay.canUsePremiumProfileCustomization(e),
        S = (0, Tf.z5)(i, e.avatar),
        T = (0, Tf.Ac)(s, t?.banner),
        x = (0, xs.Ay)(e.id),
        p = x?.getLegacyUsername(),
        f = (c.global_name?.length ?? 0) > 0 ? c.global_name : (A?.nick ?? []),
        N = (c.bio?.length ?? 0) > 0 ? c.bio : (A?.bio ?? []),
        _ = (0, pg.b)();
    return (0, E.jsxs)("div", {
        className: pI.Q,
        children: [
            (0, E.jsx)(pT, {
                placeholder: e.username,
                errors: f,
                currentGlobalName: e.globalName,
                pendingGlobalName: n,
                onGlobalNameChange: (e) => (0, TY.p)({ globalName: e }),
                user: e,
            }),
            (0, E.jsx)(
                xm,
                {
                    sectionTitle: j.intl.string(j.t["+T3RI/"]),
                    errors: c.pronouns,
                    onPronounsChange: (e) => (0, TY.p)({ pronouns: e }),
                    pendingPronouns: r,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, E.jsx)(p_, {}),
            (0, E.jsx)(
                Tq,
                {
                    onAvatarChange: (e) => {
                        (0, TY.p)({ avatar: e }), (0, Tf.WU)(null == e ? "remove" : "set");
                    },
                    showRemoveAvatarButton: S,
                    errors: c.avatar,
                    sectionTitle: j.intl.string(j.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, E.jsx)(TH, { user: e, sectionTitle: j.intl.string(j.t["7v0T9P"]) }, "decoration"),
            (0, E.jsx)(T2, { user: e }),
            (0, E.jsx)(T8, { user: e, sectionTitle: j.intl.string(j.t.wR5wOo) }, "effect"),
            (0, E.jsx)(xt, { user: e, sectionTitle: j.intl.string(j.t.GWrZOd) }, "frame"),
            h
                ? (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsx)(
                              T5,
                              {
                                  showRemoveBannerButton: T,
                                  errors: c.banner,
                                  onBannerChange: (e) => (0, TY.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, E.jsx)(xg, {
                              user: e,
                              pendingAvatarSrc: m,
                              pendingColors: o,
                              onThemeColorsChange: (e) => (0, TY.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, E.jsx)(
                      pf,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: a,
                          setPendingAccentColor: (e) => (0, TY.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, E.jsx)(
                Tw,
                {
                    sectionTitle: j.intl.string(j.t.ZzAR2Y),
                    errors: N,
                    onBioChange: (e) => (0, TY.p)({ bio: e }),
                    pendingBio: l,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            _.length > 0 &&
                (0, E.jsx)(pc, {
                    availablePrimaryGuilds: _,
                    pendingPrimaryGuildId: d,
                    onChange: (e) => (0, TY.p)({ primaryGuildId: e }),
                }),
            null != p && (0, E.jsx)(pp, { legacyUsername: p, pendingLegacyUsernameDisabled: u }, "legacy_username"),
            (0, E.jsx)(ph, {}, "badges"),
        ],
    });
}
function pb() {
    (0, K.openModalLazy)(async () => {
        let { default: e } = await Promise.all([i.e("41509"), i.e("66901"), i.e("41704")]).then(i.bind(i, 562011));
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
var pv = i(157723);
function py() {
    let e = (0, g.bG)([iA.default], () => {
            let e = iA.default.getCurrentUser();
            return tZ()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        t = (0, g.bG)([eX.A], () => eX.A.hidePersonalInformation),
        {
            pendingBio: i,
            pendingAvatar: n,
            pendingNameplate: s,
            showNotice: l,
            ...r
        } = (0, g.cf)([TA.A], () => ({ ...TA.A.getPendingChanges(), showNotice: TA.A.showNotice() })),
        a = (0, Tb.V7)({ userId: e.id, image: n }),
        o = (0, Tf.lw)({ pendingValue: s, userValue: e?.collectibles?.nameplate }),
        u = (0, pt.A)() && null != i ? xw.Ay.parse(void 0, i).content : i,
        d = uh.Ay.canUsePremiumProfileCustomization(e),
        c = (0, pi.St)("edit-profile-upsell"),
        { analyticsLocations: m } = (0, n1.Ay)(e6.A.USER_SETTINGS_USER_PROFILE);
    S.useEffect(() => () => sm.h.wait(Tg.IM), []);
    let [A, h] = S.useState(!1),
        T = !d,
        x = S.useRef(null);
    return t
        ? (0, E.jsx)(dg.A, {})
        : (0, E.jsxs)(n1.f5, {
              value: m,
              children: [
                  (0, E.jsx)(xk, {}),
                  (0, E.jsx)(TI, {
                      profilePreview: (0, E.jsx)(TC.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: pb,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: pv.ti,
                      }),
                      nameplatePreview: (0, E.jsx)(Tp.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? pv.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, E.jsx)(pC, {}),
                  }),
                  (0, E.jsx)(xO.L, {
                      innerRef: x,
                      onChange: (e) => h(e),
                      threshold: 0.25,
                      active: T,
                      children: (0, E.jsx)("div", {
                          ref: x,
                          children: (0, E.jsx)(pe, { user: e, shouldShow: T, isVisible: A }),
                      }),
                  }),
                  T &&
                      !l &&
                      (0, E.jsx)(xF.d, {
                          className: pv.EL,
                          showUpsell: !A,
                          text: j.intl.format(j.t.TmfgI2, { onClick: () => (0, xz.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: c
                              ? (0, E.jsx)(xB.l, { size: "md", location: e6.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL })
                              : void 0,
                          button: (0, E.jsx)("div", {
                              className: pv.Xl,
                              children: (0, E.jsx)(ek.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      G.default.track(U.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          x?.current?.scrollIntoView({ behavior: "smooth" });
                                  },
                                  text: j.intl.string(j.t.uw9zI7),
                                  icon: ur.t,
                              }),
                          }),
                      }),
              ],
          });
}
var pj = i(625494);
i(46121);
var pO = i(521078);
let pR = { [nH.Eq.USER_PROFILE]: "main_profile_tab", [nH.Eq.GUILD]: "guild_profile_tab" },
    pL = (0, a.E2)(u.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, g.bG)([le.A, eE.Ay, TA.A], () => {
                    let e = TA.A.selectedGuildId ?? le.A.getGuildId();
                    return null == e || TA._.has(e) ? eE.Ay.getFlattenedGuildIds().find((e) => !TA._.has(e)) : e;
                }),
                t = (0, g.bG)([eh.A], () => eh.A.getGuild(e)),
                i = (0, g.bG)([TA.A], () => TA.A.showNotice()),
                n = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()),
                s = x5.A.useField("subsection");
            return (
                S.useEffect(() => {
                    (0, l8._)(pR[s]);
                }, [s]),
                S.useEffect(() => {
                    null != n && t?.id != null && (0, xv.A)(n.id, n.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, n]),
                (0, E.jsx)(xj, {
                    children: (0, E.jsxs)(c3.F, {
                        component: (0, E.jsx)(eo.A, {
                            children: (0, E.jsx)(eV.D, {
                                variant: "heading-xl/normal",
                                children: j.intl.string(j.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, E.jsxs)(TT.V, {
                                className: pO.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: s,
                                onItemSelect: function (e) {
                                    if (s !== e) {
                                        if (i) {
                                            (0, l7.fO)({ duration: 300, intensity: 1.4 }),
                                                pj._.dispatch(U.jej.EMPHASIZE_NOTICE);
                                            return;
                                        }
                                        e === nH.Eq.GUILD && null != t && (0, Tx.V2)(t.id),
                                            x5.A.setState({ subsection: e });
                                    }
                                },
                                children: [
                                    (0, E.jsx)(
                                        TT.V.Item,
                                        {
                                            className: pO.YU,
                                            id: nH.Eq.USER_PROFILE,
                                            children: j.intl.string(j.t["2p07FR"]),
                                        },
                                        nH.Eq.USER_PROFILE,
                                    ),
                                    (0, E.jsx)(
                                        TT.V.Item,
                                        {
                                            className: e7()(pO.YU, pO.HY),
                                            "aria-label": j.intl.string(j.t.kPHroX),
                                            id: nH.Eq.GUILD,
                                            children: j.intl.string(j.t.kPHroX),
                                        },
                                        nH.Eq.GUILD,
                                    ),
                                ],
                            }),
                            s === nH.Eq.GUILD
                                ? (0, E.jsx)(xb, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (i) {
                                              (0, l7.fO)({ duration: 300, intensity: 1.4 }),
                                                  pj._.dispatch(U.jej.EMPHASIZE_NOTICE);
                                              return;
                                          }
                                          null != e && (0, Tx.JJ)(e.id);
                                      },
                                  })
                                : (0, E.jsx)(py, {}),
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
    pD = (0, a.zZ)(u.X.PROFILE_CATEGORY, { buildLayout: () => [pL] });
var pP = i(938706);
function pG() {
    let e = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: i } = (0, TE.A)({ userId: e?.id, size: nt._3.SIZE_48 });
    return null == e
        ? null
        : (0, E.jsxs)("div", {
              className: pP.a5,
              children: [
                  (0, E.jsx)(ne.eu, {
                      src: t,
                      avatarDecoration: i,
                      size: nt._3.SIZE_48,
                      "aria-label": j.intl.string(j.t.lqaIxI),
                  }),
                  (0, E.jsxs)("div", {
                      className: pP.FS,
                      children: [
                          (0, E.jsx)(es.E, {
                              color: "text-strong",
                              variant: "text-md/medium",
                              lineClamp: 1,
                              children: e.globalName ?? e.username,
                          }),
                          (0, E.jsxs)("div", {
                              className: pP.Fk,
                              children: [
                                  (0, E.jsx)(es.E, {
                                      variant: "text-sm/normal",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: j.intl.string(j.t.Ip9nBS),
                                  }),
                                  (0, E.jsx)(uA.R, { size: "xxs", color: "currentColor" }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
let pM = (0, a.t_)(u.X.PROFILE_PANEL, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        notice: { stores: [TA.A], element: Tm.A },
        initialize: () => () =>
            sm.h.wait(() => {
                (0, Tg.F7)();
            }),
        buildLayout: () => [pD],
    }),
    pU = (0, a.i4)(u.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        icon: pk,
        StronglyDiscouragedCustomComponent: pG,
        usePredicate: () => !(0, Th.X)("user_settings_sidebar"),
        buildLayout: () => [pM],
    }),
    pV = (0, a.i4)(u.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        icon: pk,
        StronglyDiscouragedCustomComponent: pG,
        usePredicate: () => (0, Th.X)("user_settings_sidebar"),
        onClick: () => {
            let e = cV.default.getId();
            (0, TS.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function pk() {
    let e = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: i } = (0, TE.A)({ userId: e?.id, size: nt._3.SIZE_48 });
    return (0, E.jsx)(ne.eu, { src: t, avatarDecoration: i, size: nt._3.SIZE_20, "aria-hidden": !0 });
}
let pw = (0, a.WI)(u.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [pU, pV] });
var pF = i(98207),
    pB = (i(204925), i(818348));
let pz = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, K.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([i.e("69757"), i.e("19623"), i.e("21007")]).then(i.bind(i, 888363));
            return (i) => (0, E.jsx)(t, { claimRequired: e, ...i });
        },
        { onCloseRequest: e ? pB.tE : null, onCloseCallback: t },
    );
};
var pY = i(940856),
    pX = i(36149),
    pH = i(207560);
function pK(e) {
    let t = (0, pH.fk)(),
        i = (0, pX.b8)(),
        n = (0, pX.yM)(),
        s = (0, pX.Y2)();
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
var pW = i(516761);
function pZ() {
    let e = j.intl.string(j.t.XxRj7f);
    return (0, E.jsxs)(es.E, {
        variant: "text-md/medium",
        children: [
            `${e} \u{2022} `,
            j.intl.format(pW.default.WM5adV, {
                handleOnHelpUrlHook: function () {
                    return window.open(ty.A.getArticleURL(U.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank");
                },
            }),
        ],
    });
}
let pq = (0, a.Tf)(u.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, {
        usePredicate: () => pK("edit"),
        useTitle: () => j.intl.string(j.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({
            type: h.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: pZ,
        }),
        useLabel: () => j.intl.string(j.t.bt75uw),
        onClick: function () {
            (0, K.openModalLazy)(async () => {
                let { default: e } = await i.e("45361").then(i.bind(i, 151080));
                return (t) => (0, E.jsx)(e, { ...t });
            });
        },
    }),
    pQ = (0, a.E2)(u.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, {
        usePredicate: () => pK("info"),
        useSearchTerms: () => [j.intl.string(j.t["/52UYy"])],
        Component: function () {
            return (0, E.jsx)(s7.D, {
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
                            children: (0, E.jsx)(ek.$, {
                                onClick: pB.tE,
                                text: j.intl.string(j.t.bt75uw),
                                "aria-hidden": !0,
                            }),
                        }),
                    ],
                }),
            });
        },
    });
var pJ = i(31720),
    p$ = i(847599);
let p0 = (0, a.Tf)(u.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, {
        usePredicate: () => pK("verify"),
        useTitle: () => j.intl.string(j.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({
            type: h.fq.TEXT,
            text: (0, pX.yM)() ? j.intl.string(j.t.sK0dmH) : j.intl.string(j.t.lKDPGA),
        }),
        useLabel: function () {
            return (0, pX.yM)() ? j.intl.string(j.t["9KiIz6"]) : j.intl.string(j.t.DVywUB);
        },
        onClick: () => pJ.A.showAgeVerificationGetStartedModal({ entryPoint: p$.q1.ACCOUNT_AGE_GROUP }),
    }),
    p1 = (0, a.Tf)(u.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, g.bG)([iA.default], () => iA.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => j.intl.string(j.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({ type: h.fq.TEXT, text: j.intl.string(j.t.qxk9zo) }),
        useLabel: () => j.intl.string(j.t.BleMPB),
        onClick: () => pz(),
    });
function p2(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function p3(e) {
    let [t, i] = e.split("@");
    return `${"*".repeat(t.length)}@${i}`;
}
function p5(e) {
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
function p6() {
    let e = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()?.email);
    return null == e
        ? (0, E.jsx)(es.E, { variant: "text-md/medium", children: j.intl.string(j.t["8SfTN/"]) })
        : (0, E.jsx)(p5, {
              text: e,
              censor: p3,
              revealLabel: j.intl.string(j.t["Zvx+yV"]),
              hideLabel: j.intl.string(j.t.nqTD4d),
              redesign: !0,
          });
}
let p4 = (0, a.Tf)(u.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, g.bG)([iA.default], () => iA.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => j.intl.string(j.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: h.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: p6 }),
    useLabel: function () {
        return null == (0, g.bG)([iA.default], () => iA.default.getCurrentUser()?.email)
            ? j.intl.string(j.t.OYkgVk)
            : j.intl.string(j.t.bt75uw);
    },
    useAriaLabel: function () {
        return null == (0, g.bG)([iA.default], () => iA.default.getCurrentUser()?.email)
            ? j.intl.string(j.t["pvBD+W"])
            : j.intl.string(j.t["8peUT0"]);
    },
    onClick: function () {
        (0, K.openModalLazy)(async () => {
            let { default: e } = await Promise.all([i.e("11322"), i.e("20577"), i.e("65861")]).then(i.bind(i, 97060));
            return (t) => (0, E.jsx)(e, { ...t });
        });
    },
});
var p8 = i(557722),
    p7 = i(53516);
function p9() {
    let e = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, E.jsx)(es.E, { variant: "text-md/medium", children: j.intl.string(j.t.I5kDqj) })
        : (0, E.jsx)(Q.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, E.jsx)(p5, {
                  text: t,
                  censor: p2,
                  revealLabel: j.intl.string(j.t.eY3xlT),
                  hideLabel: j.intl.string(j.t["jllbv+"]),
                  redesign: !0,
              }),
          });
}
let fe = (0, a.Tf)(u.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, g.bG)([iA.default], () => iA.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => j.intl.string(j.t.kerONq),
    useAriaLabel: function () {
        return null == (0, g.bG)([iA.default], () => iA.default.getCurrentUser()?.phone)
            ? j.intl.string(j.t["SfUuE+"])
            : j.intl.string(j.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: h.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: p9 }),
    useLabel: function () {
        return null == (0, g.bG)([iA.default], () => iA.default.getCurrentUser()?.phone)
            ? j.intl.string(j.t.OYkgVk)
            : j.intl.string(j.t.bt75uw);
    },
    onClick: function () {
        null == iA.default.getCurrentUser()?.phone
            ? (0, K.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.all([
                          i.e("49747"),
                          i.e("72712"),
                          i.e("89545"),
                          i.e("11493"),
                          i.e("84704"),
                          i.e("86197"),
                      ]).then(i.bind(i, 615715));
                      return (t) => (0, E.jsx)(e, { reason: p8.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: p7.V },
              )
            : (0, K.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([i.e("55682"), i.e("40933")]).then(i.bind(i, 660740));
                  return (t) => (0, E.jsx)(e, { ...t });
              });
    },
});
function ft() {
    let e = (0, g.bG)([iA.default], () => iA.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function fi() {
    let e = (0, TR.EC)(),
        t = e?.nick?.[0] ?? null,
        i = (0, g.bG)([iA.default], () => iA.default.getCurrentUser());
    if (null == i) return null;
    let n = i.hasUniqueUsername() ? i.username : `${i.username}#${i.discriminator}`;
    return (0, E.jsxs)(E.Fragment, {
        children: [
            (0, E.jsx)(es.E, { variant: "text-md/medium", children: n }),
            null != t &&
                (0, E.jsx)(td.m, {
                    __unsupportedReactNodeAsText: t,
                    "aria-label": !1,
                    children: (0, E.jsx)(rk.E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: er.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let fn = (0, a.Tf)(u.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => j.intl.string(j.t.qqhR3L),
        useTrailingDecoration: () => ({
            type: h.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: fi,
        }),
        useLabel: () => j.intl.string(j.t.bt75uw),
        useAriaLabel: () => j.intl.string(j.t.JECa91),
        useSubtitle: () => (ft() ? j.intl.string(j.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: ft,
        onClick: function () {
            (0, K.openModalLazy)(async () => {
                let { default: e } = await Promise.all([i.e("80032"), i.e("20429"), i.e("20969")]).then(
                    i.bind(i, 667792),
                );
                return (t) => (0, E.jsx)(e, { ...t });
            });
        },
    }),
    fs = (0, a.zZ)(u.X.ACCOUNT_INFO_CATEGORY, {
        usePredicate: () => (0, g.bG)([iA.default], () => null != iA.default.getCurrentUser()),
        useTitle: () => j.intl.string(j.t.apNo4l),
        useInlineNotice: function () {
            let e = (0, g.bG)([iA.default], () => iA.default.getCurrentUser());
            return null == e
                ? null
                : e.isClaimed()
                  ? null == e.email || e.verified
                      ? null
                      : {
                            type: h.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            title: j.intl.string(j.t.tuGzBT),
                            text: j.intl.string(j.t.NAzplE),
                            button: { text: j.intl.string(j.t.lm1UKt), onClick: () => (0, pY.S)(e) },
                        }
                  : {
                        type: h.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        title: j.intl.string(j.t["/3qnL/"]),
                        text: j.intl.string(j.t.qKs3vg),
                        button: { text: j.intl.string(j.t["7psymi"]), onClick: () => pz() },
                    };
        },
        buildLayout: () => [fn, p1, p4, fe, p0, pq, pQ],
    });
var fl = i(398177);
let fr = (0, a.Tf)(u.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
    useTitle: () => j.intl.string(j.t["CIGa+7"]),
    useLabel: () => j.intl.string(j.t.bt75uw),
    useAriaLabel: () => j.intl.string(j.t["FRep5/"]),
    useVariant: () => "secondary",
    onClick: () => {
        (0, K.openModal)((e) => (0, E.jsx)(fl.default, { ...e, onSuccess: () => e.onClose() }));
    },
});
var fa = i(200921);
let fo = [];
function fu() {
    fo = [];
}
class fd extends g.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return fo;
    }
}
let fc = new fd(sm.h, {
    LOGOUT: fu,
    LOGIN_SUCCESS: fu,
    FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessions: t } = e;
        fo = t.map((e) => ({ ...e, approx_last_used_time: new Date(e.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessionIdHashes: t } = e,
            i = [...fo],
            n = !1;
        for (let e of t) {
            let t = i.findIndex((t) => t.id_hash === e);
            t >= 0 && (i.splice(t, 1), (n = !0));
        }
        if (!n) return !1;
        fo = i;
    },
});
function fg() {
    let e = (0, g.cf)([fc], () => fc.getSessions());
    return S.useMemo(() => {
        let t = [...e],
            i = null,
            n = cV.default.getAuthSessionIdHash();
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
function fm(e) {
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? j.intl.string(j.t.TXCmfL) : rl()(e).fromNow();
}
var fA = i(176524),
    fh = i(646270),
    fE = i(738678),
    fS = i(53061);
function fT(e) {
    let { icon: t, label: i, subLabel: n, description: s, children: l, muted: r } = e;
    return (0, E.jsxs)(Q.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, E.jsx)(fA.A, { Icon: t, color: r ? er.A.colors.ICON_MUTED : "currentColor" }),
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
function fx(e) {
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
                            return { text: j.intl.string(j.t.cDHCNY), icon: tg.k };
                        case "ios":
                        case "android":
                            return { text: e, icon: fh.u };
                        case "horizon os":
                            return { text: e, icon: fE.G };
                        default:
                            return { text: e, icon: tg.k };
                    }
                })(e.client_info?.os);
            return { location: i, platform: n, os: s, Icon: l, lastActive: t ? null : fm(e.approx_last_used_time) };
        })(t, i),
        o = [n, a].filter(N.Vq);
    return (0, E.jsx)(fT, {
        icon: r,
        label: l,
        subLabel: s,
        description: o.join(" \xb7 "),
        children:
            !i &&
            (0, E.jsx)(en.D, {
                className: fS.X,
                onClick: () => (0, fa.U0)(t.id_hash),
                "aria-label": j.intl.string(j.t.E4MJNt),
                children: (0, E.jsx)(gw.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function fp(e) {
    let { title: t, children: i } = e,
        n = S.useId();
    return (0, E.jsxs)(Q.B, {
        role: "group",
        "aria-labelledby": n,
        gap: "xl",
        padding: { top: 8, bottom: 8 },
        children: [
            (0, E.jsx)(eV.D, { id: n, variant: "heading-md/semibold", color: "text-muted", children: t }),
            (0, E.jsx)(Q.B, { role: "list", gap: "xl", children: i }),
        ],
    });
}
let ff = (0, a.E2)(u.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            let { currentSession: e } = fg();
            return null == e
                ? (0, E.jsx)(dA.y, {})
                : (0, E.jsx)(fp, {
                      title: j.intl.string(j.t.LLS19o),
                      children: (0, E.jsx)(fx, { session: e, current: !0 }),
                  });
        },
        useSearchTerms: () => [],
    }),
    fN = (0, a.E2)(u.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = fg();
            return (0, E.jsx)(s7.D, {
                label: j.intl.string(j.t.Vij32M),
                description: j.intl.string(j.t.OTXyaf),
                children: (0, E.jsx)(ek.$, {
                    onClick: () => (0, fa.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: j.intl.string(j.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [j.intl.string(j.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = fg();
            return e.length > 0;
        },
    });
var f_ = i(766928);
function fI() {
    return (0, E.jsx)(fT, {
        icon: f_.W,
        label: j.intl.string(j.t.iUa0sn),
        description: j.intl.format(j.t["044+8i"], {
            onClick: () =>
                (0, eq.openUserSettings)(u.X.ACCOUNT_PANEL, { analyticsLocations: [e6.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
let fC = (0, a.E2)(u.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = fg(),
                t = (0, g.bG)([iA.default], () => iA.default.getCurrentUser());
            return (0, E.jsxs)(fp, {
                title: j.intl.string(j.t.xx1MWc),
                children: [
                    e.map((e) => (0, E.jsx)(fx, { session: e }, e.id_hash)),
                    t?.mfaEnabled ? null : (0, E.jsx)(fI, {}),
                ],
            });
        },
        useSearchTerms: () => [j.intl.string(j.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = fg(),
                t = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    fb = (0, a.zZ)(u.X.SESSIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.mEndXM),
        useSubtitle: () => j.intl.string(j.t.b7ZpTM),
        initialize: () => {
            (0, fa.GY)();
        },
        buildLayout: () => [ff, fC, fN],
        useSearchTerms: () => [
            j.intl.string(j.t["+1h0k/"]),
            j.intl.string(j.t.LLS19o),
            j.intl.string(j.t.xx1MWc),
            j.intl.string(j.t.lSWsrd),
        ],
    }),
    fv = (0, a.t_)(u.X.SESSIONS_PANEL, {
        useTitle: () => j.intl.string(j.t.mEndXM),
        useObscuredNotice: dg.L,
        buildLayout: () => [fb],
    }),
    fy = (0, a.t0)(u.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [fv],
        initialize: () => {
            (0, fa.GY)();
        },
        useTrailingDecoration: () => {
            let { currentSession: e, otherSessions: t } = fg(),
                i = t.length + +(null != e);
            return {
                type: h.xn.TEXT,
                text: i > 0 ? j.intl.formatToPlainString(j.t.G7zwOk, { count: i }) : j.intl.string(j.t.MKDeyL),
            };
        },
    });
var fj = i(464477);
function fO(e) {
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
function fR() {
    return (0, u7.bG)([iA.default], () => {
        let e = iA.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
var fL =
    (((r = {}).AVAILABLE = "available"),
    (r.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (r.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    r);
function fD() {
    let e = (0, u7.bG)([iA.default], () => iA.default.getCurrentUser()?.verified);
    return fj.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function fP() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, u7.bG)([eh.A, xE.A, iA.default], () =>
        iA.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? j.intl.string(j.t.hxf9fX)
                : j.intl.string(j.t["3iKih7"])
            : eh.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(U.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        xE.A.can(U.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? j.intl.string(j.t.OYTCUh)
                  : j.intl.string(j.t.HC8uSZ)
              : null,
    );
}
var fG = i(466034);
let fM = (0, a.Tf)(u.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => j.intl.string(j.t.lQsY7B),
        useSubtitle: () => fP(!0),
        useDisabled: () => null !== fP(!0),
        useLabel: () => j.intl.string(j.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, g.bG)([cV.default], () => cV.default.hasTOTPEnabled()),
                t = fD() === fL.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, l2.A)({
                title: j.intl.string(j.t["D+aE7g"]),
                subtitle: j.intl.string(j.t.EA4ZEk),
                variant: "critical",
                confirmText: j.intl.string(j.t.N86XcP),
                onConfirm: () => pF.A.disable(),
            }),
    }),
    fU = (0, a.zZ)(u.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => j.intl.string(j.t.RumMFo),
        useSubtitle: () => j.intl.string(j.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, g.bG)([cV.default], () => cV.default.hasTOTPEnabled()),
                t = fD() === fL.AVAILABLE;
            if (!e && t)
                return {
                    type: h.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: h.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: j.intl.string(j.t.cTNUeD),
                            onClick: fG.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (fD()) {
                case fL.UNAVAILABLE_NO_CRYPTO:
                    return { type: h.lT.INLINE_NOTICE, noticeType: "info", text: j.intl.string(j.t.PhHhsj) };
                case fL.UNAVAILABLE_UNVERIFIED:
                    return { type: h.lT.INLINE_NOTICE, noticeType: "warning", text: j.intl.string(j.t.uggF7o) };
                case fL.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [fM],
    });
var fV = i(670492),
    fk = i(32880),
    fw = i(663417),
    fF = i(658675),
    fB = i(900686);
function fz() {
    (0, K.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(i.bind(i, 662758));
        return (t) =>
            (0, E.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    pF.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                        var t;
                        return (
                            (t = e),
                            void (0, K.openModalLazy)(
                                async () => {
                                    let { default: e } = await Promise.all([i.e("12536"), i.e("96179")]).then(
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
var fY = i(808658);
function fX(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function fH() {
    let e = fV.A.getVerificationKey();
    try {
        await pF.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, E7.P0)({
            message: e.body?.message ?? j.intl.string(j.t.F8FvUy),
            type: Se.Ck.FAILURE,
            id: "backup-code-regen-failed",
        });
    }
}
function fK(e) {
    let {
            code: { code: t, consumed: i },
        } = e,
        n = fX(t),
        s = S.useRef(null),
        l = (0, E.jsxs)(E.Fragment, {
            children: [(0, E.jsx)(fF.P, { checked: i }), (0, E.jsx)(es.E, { variant: "text-md/normal", children: n })],
        });
    return cz.p5
        ? (0, E.jsx)(en.D, {
              tag: "li",
              className: e7()(fY.aY, fY.vk),
              innerRef: s,
              onKeyDown: function (e) {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, cz.C)(n), s?.current?.focus());
              },
              onClick: function () {
                  (0, cz.C)(n),
                      (0, E7.P0)({ message: j.intl.string(j.t.mGZ66D), type: Se.Ck.SUCCESS, id: "backup-code-copied" });
              },
              children: l,
          })
        : (0, E.jsx)("li", { className: fY.aY, children: l });
}
let fW = (0, a.zZ)(u.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.fC9qV0),
        useSubtitle: () =>
            (0, g.bG)([fV.A], () => fV.A.getBackupCodes().length > 0)
                ? j.intl.format(j.t.tp7zEK, {})
                : j.intl.string(j.t.LoOi4S),
        usePredicate: fR,
        buildLayout: () => [fZ],
    }),
    fZ = (0, a.E2)(u.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.fC9qV0)],
        Component: function () {
            let e = (0, g.bG)([fV.A], () => fV.A.getBackupCodes()),
                t = S.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: i } = e;
                                return `* ${fX(t)}` + (i ? ` (${j.intl.string(j.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, E.jsx)(ek.$, { text: j.intl.string(j.t.Jc2myK), size: "sm", variant: "secondary", onClick: fz })
                : (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsx)("ul", {
                              className: fY.E5,
                              children: e.map((e) => (0, E.jsx)(fK, { code: e }, e.code)),
                          }),
                          (0, E.jsxs)(on.e, {
                              size: "sm",
                              children: [
                                  (0, E.jsx)(fB.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, E.jsx)(ek.$, {
                                          text: j.intl.string(j.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: fk.s,
                                      }),
                                  }),
                                  (0, E.jsx)(ek.$, {
                                      text: j.intl.string(j.t["3x962E"]),
                                      variant: "secondary",
                                      icon: fw.f,
                                      onClick: fH,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    fq = (0, a.Tf)(u.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => j.intl.string(j.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = S.useState(!1),
                i = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()?.phone);
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
        usePredicate: () => (0, g.bG)([iA.default], () => iA.default.getCurrentUser()?.hasFlag(U.nhx.MFA_SMS) ?? !1),
        onClick: () =>
            void (0, K.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 662758));
                return (t) =>
                    (0, E.jsx)(e, {
                        ...t,
                        handleSubmit: pF.A.disableSMS,
                        title: j.intl.string(j.t.KLWnit),
                        children: j.intl.string(j.t["W0/Duf"]),
                    });
            }),
    }),
    fQ = (0, a.zZ)(u.X.SMS_AUTH_CATEGORY, {
        useTitle: () => j.intl.string(j.t.wuHuI5),
        useSubtitle: () => (0, g.bG)([iA.default], () => fO(iA.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()?.hasFlag(U.nhx.MFA_SMS) ?? !1),
                t = (0, g.bG)([iA.default], () => null != fO(iA.default.getCurrentUser()));
            if (!e)
                return {
                    type: h.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: h.UV.BUTTON,
                            id: "sms-setup-button",
                            text: j.intl.string(j.t.Age7yU),
                            onClick: fJ,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = fD(),
                t = fR(),
                i = (0, g.bG)([cV.default], () => cV.default.hasTOTPEnabled());
            return e === fL.AVAILABLE && t && i;
        },
        buildLayout: () => [fq],
    });
function fJ() {
    let e = iA.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            (t = { reason: p8.d.USER_SETTINGS_UPDATE, onAddedPhone: pF.A.enableSMS }),
                (0, K.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            i.e("49747"),
                            i.e("72712"),
                            i.e("89545"),
                            i.e("11493"),
                            i.e("84704"),
                            i.e("86197"),
                        ]).then(i.bind(i, 615715));
                        return (i) => (0, E.jsx)(e, { ...i, ...t });
                    },
                    { modalKey: p7.V },
                );
        } else pF.A.enableSMS();
}
var f$ = i(665671),
    f0 = i(442433),
    f1 = i(917136),
    f2 = i(976910),
    f3 = i(303778);
function f5(e) {
    let { credential: t } = e;
    return (0, E.jsxs)("li", {
        className: f3.e,
        children: [
            (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(es.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, E.jsx)(es.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: j.intl.format(j.t["7JgxF5"], { lastUsed: fm(t.last_used) }),
                        }),
                ],
            }),
            (0, E.jsx)(rH.K, {
                icon: mw.j,
                variant: "icon-only",
                size: "sm",
                "aria-label": j.intl.string(j.t["+nrTbK"]),
                onClick: (e) => {
                    (0, f0.L3)(e, async () => {
                        let { default: e } = await i.e("32529").then(i.bind(i, 41e3));
                        return (i) => (0, E.jsx)(e, { credential: t, ...i });
                    });
                },
            }),
        ],
    });
}
let f6 = (0, a.zZ)(u.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.IBq4Y3),
        useSubtitle: () => j.intl.string(j.t.yK9edS),
        useHeaderDecoration: function () {
            if (fD() === fL.AVAILABLE)
                return {
                    type: h.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: h.UV.BUTTON,
                            id: "add-security-key-button",
                            text: j.intl.string(j.t["Tzs/fw"]),
                            icon: rU.j,
                            onClick: f$.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (fD()) {
                    case fL.UNAVAILABLE_NO_CRYPTO:
                        return { type: h.lT.INLINE_NOTICE, noticeType: "info", text: j.intl.string(j.t.bWCGI9) };
                    case fL.UNAVAILABLE_UNVERIFIED:
                        return { type: h.lT.INLINE_NOTICE, noticeType: "warning", text: j.intl.string(j.t.uggF7o) };
                    case fL.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [f4],
    }),
    f4 = (0, a.E2)(u.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [j.intl.string(j.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, g.cf)([f2.A], () => ({
                hasFetchedCredentials: f2.A.hasFetchedCredentials(),
                credentials: f2.A.getCredentials(),
            }));
            return (S.useEffect(() => {
                t || f1.JQ();
            }, [t]),
            t)
                ? (0, E.jsx)(Q.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, E.jsx)(f5, { credential: e }, e.id)),
                  })
                : (0, E.jsx)(dA.y, {});
        },
    }),
    f8 = (0, a.t_)(u.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => j.intl.string(j.t.m0FidJ),
        buildLayout: () => [f6, fU, fQ, fW],
    }),
    f7 = (0, a.t0)(u.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => {
            let e = fR();
            return { type: h.xn.TEXT, text: e ? j.intl.string(j.t.lQsY7B) : j.intl.string(j.t.WsUuTt) };
        },
        buildLayout: () => [f8],
    }),
    f9 = (0, a.zZ)(u.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => j.intl.string(j.t["0iH2vc"]),
        buildLayout: () => [fr, f7, fy],
    });
var Ne = i(308645),
    Nt = i(271995),
    Ni = i(855267);
let Nn = (0, a.E2)(u.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["16r9jm"])],
        Component: Ni.A,
    }),
    Ns = (0, a.zZ)(u.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [Nn] }),
    Nl = (0, a.t_)(u.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => j.intl.string(j.t["16r9jm"]),
        buildLayout: () => [Ns],
    }),
    Nr = (0, a.zZ)(u.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: () => j.intl.string(j.t["16r9jm"]),
        buildLayout: () => [Na],
    }),
    Na = (0, a.t0)(u.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: Nt.$b,
        useSubtitle: Nt.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: i } = (0, Nt._k)();
            return { type: h.Xy.ICON, icon: i, color: e, backgroundColor: t };
        },
        initialize: () => {
            Ne.Yn();
        },
        buildLayout: () => [Nl],
    });
var No = i(738188),
    Nu = i(834981),
    Nd = i(987197),
    Nc = i(822585),
    Ng = i(840387),
    Nm = i(465558),
    NA = i(602339);
let Nh = (0, a.E2)(u.X.FAMILY_CENTER_SETTING, {
        Component: Nm.p,
        useSearchTerms: () => [
            j.intl.string(NA.default.RZqaJn),
            j.intl.string(NA.default.bdBmqy),
            j.intl.string(NA.default["gVWG+6"]),
            j.intl.string(NA.default.ahKIJO),
            j.intl.string(NA.default["8SLtqb"]),
        ],
    }),
    NE = (0, a.zZ)(u.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [Nh] }),
    NS = (0, a.t_)(u.X.FAMILY_CENTER_PANEL, {
        useTitle: () => j.intl.string(NA.default.RZqaJn),
        buildLayout: () => [NE],
    }),
    NT = (0, a.zZ)(u.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => j.intl.string(NA.default.RZqaJn),
        usePersistentBadge: function () {
            let e = (0, Nd.f)(),
                t = (0, Nc.L)()?.daysRemaining ?? null,
                i = e && null != t && t >= 0,
                n = (0, Nu.VT)();
            return S.useMemo(() => (i ? { badgeType: h.Xi.WARNING } : { badgeType: h.Xi.COUNT, count: n }), [i, n]);
        },
        buildLayout: () => [Nx],
    }),
    Nx = (0, a.t0)(u.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, Nu.Li)() ? j.intl.string(NA.default.IcMQUP) : j.intl.string(NA.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, Ng.Z)(),
                t = (0, Nu.Li)();
            return e
                ? t
                    ? j.intl.string(NA.default.G8lHFU)
                    : j.intl.string(NA.default.uOLNEZ)
                : j.intl.string(NA.default.Z53oSM);
        },
        useLeadingDecoration: function () {
            let e = (0, Nd.f)(),
                t = (0, Nc.L)()?.daysRemaining ?? null;
            return !e || null == t || t < 0
                ? null
                : {
                      type: h.Xy.ICON,
                      icon: No.i,
                      color: er.A.colors.ICON_FEEDBACK_WARNING,
                      backgroundColor: er.A.colors.BACKGROUND_FEEDBACK_WARNING,
                  };
        },
        buildLayout: () => [NS],
    });
var Np = i(425587),
    Nf = i(662758);
function NN(e) {
    if (e.body.code === U.t02.INVALID_PASSWORD) throw e;
    (0, oe.A)({ title: j.intl.string(j.t.LX0nT8), subtitle: e.body.message });
}
async function N_() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = iA.default.getCurrentUser();
    if (null == t) return;
    let i = [];
    try {
        i = (await Np.A.fetchTeams(!0)).body;
    } catch {}
    i.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, oe.A)({
              title: j.intl.string(j.t["Y++oNe"]),
              subtitle: j.intl.format(j.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : eh.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, oe.A)({ title: j.intl.string(j.t.vJiTOL), subtitle: j.intl.string(j.t.UyVVan) })
          : t.isClaimed()
            ? (0, K.openModal)((t) =>
                  (0, E.jsx)(Nf.default, {
                      ...t,
                      handleSubmit: (t) => (0, Tg.U_)(t, e).then(U.tEg, NN),
                      title: e ? j.intl.string(j.t.xca2ts) : j.intl.string(j.t.goXv9g),
                      actionText: e ? j.intl.string(j.t["8lQ2rR"]) : j.intl.string(j.t.jf5GGb),
                      variant: "critical-primary",
                      children: e ? j.intl.string(j.t.FB4H1D) : j.intl.string(j.t.gk7h32),
                  }),
              )
            : (0, l2.A)({
                  title: j.intl.string(j.t.xca2ts),
                  subtitle: j.intl.string(j.t.FB4H1D),
                  confirmText: j.intl.string(j.t["8lQ2rR"]),
                  onConfirm: () => (0, Tg.U_)("", !0),
              });
}
let NI = (0, a.Tf)(u.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => j.intl.string(j.t["gIpzR+"]),
        useSubtitle: () => j.intl.string(j.t.Bd6dOf),
        useLabel: () => j.intl.string(j.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => N_(!0),
    }),
    NC = (0, a.Tf)(u.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => j.intl.string(j.t["p/Tjtp"]),
        useSubtitle: () => j.intl.string(j.t.YvDmKb),
        useLabel: () => j.intl.string(j.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => N_(!1),
        usePredicate: () => {
            let e = (0, g.bG)([iA.default], () => iA.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    Nb = (0, a.zZ)(u.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [NC, NI] }),
    Nv = (0, a.t_)(u.X.ACCOUNT_PANEL, {
        useTitle: () => j.intl.string(j.t["ldCE/p"]),
        initialize: function () {
            return () => {
                pF.A.clearBackupCodes(), (0, Tg.Uo)();
            };
        },
        useObscuredNotice: dg.L,
        buildLayout: () => [fs, f9, Nr, NT, Nb],
    }),
    Ny = (0, a.i4)(u.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["ldCE/p"]),
        icon: A7.n,
        buildLayout: () => [Nv],
    });
var Nj = i(323384);
let NO = (0, a.zZ)(u.X.AUTHORIZED_APPS_CATEGORY, {
        buildLayout: () => [Sf],
        initialize: () => (
            Sx.A.fetch(),
            () => {
                Sp.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    NR = (0, a.t_)(u.X.AUTHORIZED_APPS_PANEL, {
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        useObscuredNotice: dg.L,
        buildLayout: () => [NO],
    }),
    NL = (0, a.i4)(u.X.AUTHORIZED_APPS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        icon: Nj.k,
        buildLayout: () => [NR],
    });
var ND = i(176781),
    NP = i(888916),
    NG = i(341923),
    NM = i(572164),
    NU = i(430795),
    NV = i(915725),
    Nk = i(16590);
let Nw = (0, a.zD)(u.X.CLIPS_ENABLE_AUTOCLIPPING, {
        useTitle: () => j.intl.string(Nk.default.j29uJx),
        useSubtitle: () => j.intl.format(Nk.default.UCzGcQ, { learnMoreLink: ty.A.getArticleURL(U.MVz.CLIPS) }),
        useValue: () => (0, g.bG)([NV.Ay], () => NV.Ay.getEnableAutoclipping()),
        setValue: NU.uL,
        useDisabled: NP.Rt,
    }),
    NF = (0, a.zD)(u.X.CLIPS_ENABLE_GAME_SIGNALS, {
        useTitle: () => j.intl.string(j.t.iV6KcI),
        useSubtitle: () => j.intl.string(j.t["dJ2tX+"]),
        useValue: () => (0, g.bG)([NV.Ay], () => NV.Ay.getSettings().clipSignals.enableGameSignals),
        usePredicate: () => !1,
        setValue: (e) => {
            let t = NV.Ay.getSettings().clipSignals;
            NU.PW({ ...t, enableGameSignals: e });
        },
        useDisabled: NP.A0,
    }),
    NB = (0, a.zY)(u.X.CLIPS_AUTOCLIPPING_CARD, { buildLayout: () => [Nw, NF], headerSettingKey: Nw.key }),
    Nz = (0, a.zZ)(u.X.CLIPS_AUTOCLIPPING_CATEGORY, {
        useTitle: () => j.intl.string(Nk.default.XWkJoi),
        useSubtitle: () => j.intl.string(Nk.default["MJ/VsO"]),
        usePredicate: function () {
            let e = (0, NP.As)(),
                t = (0, NG.H)();
            return e && t;
        },
        usePersistentBadge: () => ({ badgeType: h.Xi.BETA }),
        useInlineNotice: () =>
            (0, NM.Et)()
                ? null
                : {
                      type: h.lT.INLINE_NOTICE,
                      noticeType: "info",
                      iconAlign: "center",
                      text: j.intl.string(Nk.default.wUpqua),
                      button: {
                          variant: "primary",
                          size: "sm",
                          text: j.intl.string(Nk.default.qGgW4M),
                          onClick: () => NU.yO({ clipsEnabled: !0, trackAnalytics: !0 }),
                      },
                  },
        buildLayout: () => [NB],
    });
var NY = i(974293),
    NX = i(458977),
    NH = i(486925),
    NK = i(696016);
let NW = (() => {
        let e = [NK.wN];
        for (let t = 10; t <= NK.qh; t += 10) e.push(t);
        return e[e.length - 1] !== NK.qh && e.push(NK.qh), e;
    })(),
    NZ = (0, a.sN)(u.X.CLIPS_AUTO_CLIP_STORAGE_LIMIT, {
        usePredicate: () => !(0, NH.M2)(),
        useTitle: () => j.intl.string(j.t.yfsrDI),
        useSubtitle: () => j.intl.string(j.t.vlDHdC),
        minValue: NK.wN,
        maxValue: NK.qh,
        getInitialValue: () => NV.Ay.getSettings().maxAutoClips,
        onValueRender: (e) => `${Math.floor(e)}`,
        asValueChanges: (e) => NU.e6(Math.floor(e)),
        markers: NW,
        onMarkerRender: (e) => `${Math.floor(e)}`,
        useDisabled: NP.Rt,
    }),
    Nq = (0, a.zZ)(u.X.CLIPS_AUTOMATIC_CLIPPING_CATEGORY, {
        useTitle: () => j.intl.string(j.t.sA0WKL),
        usePredicate: () => {
            let e = (0, NP.As)(),
                t = (0, NY.aJ)("ClipsAutomaticClippingCategory"),
                i = NX.A.useConfig({ location: "ClipsAutomaticClippingCategory" }).enableDistributedClips;
            return !e && (t || i);
        },
        buildLayout: () => [NZ, NF],
    }),
    NQ = [NK.zq, 25, 50, NK.Y2, NK.rv],
    NJ = (0, a.sN)(u.X.CLIPS_BITRATE, {
        usePredicate: () => (0, NY.V0)("ClipsBitrateSetting"),
        useTitle: () => j.intl.string(j.t["8bZyov"]),
        useSubtitle: () => j.intl.string(j.t["h8DSx/"]),
        minValue: NK.zq,
        maxValue: NK.rv,
        useDefaultValue: () => NK.Y2,
        getInitialValue: () => NV.Ay.getSettings().clipsQuality.bitratePercent ?? NK.Y2,
        onValueRender: (e) => `${Math.round(e)}%`,
        setValue: (e) => {
            let { clipsQuality: t } = NV.Ay.getSettings();
            NU.GS({ ...t, bitratePercent: Math.round(e) });
        },
        markers: NQ,
        onMarkerRender: (e) => `${Math.round(e)}%`,
        useDisabled: NP.Rt,
    });
var N$ = i(226640);
let N0 = (0, a.Hn)(u.X.CLIPS_FRAME_RATE, {
    useTitle: () => j.intl.string(j.t["2wScL1"]),
    useSubtitle: () => j.intl.string(j.t["Rf9+fy"]),
    useValue: () => (0, g.bG)([NV.Ay], () => NV.Ay.getSettings().clipsQuality.frameRate),
    setValue: (e) => {
        let { clipsQuality: t } = NV.Ay.getSettings();
        NU.GS({ ...t, frameRate: e });
    },
    useOptions: N$.Fz,
    useDisabled: NP.Rt,
});
var N1 = i(372684);
let N2 = (0, a.E2)(u.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
        useSearchTerms: () => [j.intl.string(j.t.SIxrIF)],
        usePredicate: () => (0, g.bG)([NV.Ay], () => NV.Ay.getHardwareClassification()) === N1.k9.BELOW_MINIMUM,
        Component: () => (0, E.jsx)(af.A, { look: af.k.WARNING, children: j.intl.string(j.t.SIxrIF) }),
    }),
    N3 = (0, a.Hn)(u.X.CLIPS_LENGTH, {
        useTitle: () => j.intl.string(j.t.OgfUio),
        useSubtitle: () => j.intl.string(j.t.H7j4tY),
        useValue: () => (0, g.bG)([NV.Ay], () => NV.Ay.getSettings().clipsLength),
        setValue: (e) => NU.h$(e),
        useOptions: N$.Qu,
        useDisabled: NP.Rt,
    }),
    N5 = (0, a.E2)(u.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [j.intl.string(j.t["Z+MfqT"])],
        Component: () => (0, E.jsx)(af.A, { look: af.k.INFO, children: j.intl.string(j.t["Z+MfqT"]) }),
    }),
    N6 = (0, a.Hn)(u.X.CLIPS_RESOLUTION, {
        useTitle: () => j.intl.string(j.t.aFudZJ),
        useSubtitle: () => j.intl.string(j.t.nIrkW5),
        useValue: () => (0, g.bG)([NV.Ay], () => NV.Ay.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = NV.Ay.getSettings();
            NU.GS({ ...t, resolution: e });
        },
        useOptions: N$.gF,
        useDisabled: NP.Rt,
    }),
    N4 = (0, a.zD)(u.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => j.intl.string(j.t["3zwNf6"]),
        useSubtitle: () => j.intl.string(j.t.m4Cjj9),
        useValue: () => (0, g.bG)([NV.Ay], () => NV.Ay.getSettings().remindersEnabled),
        setValue: (e) => NU.Mt(e),
        useDisabled: NP.Rt,
    }),
    N8 = (0, a.zZ)(u.X.CLIPS_CAPTURE_SETTINGS_CATEGORY, {
        useTitle: () => j.intl.string(Nk.default.TGwzMe),
        usePredicate: NP.As,
        buildLayout: () => [N2, N3, N0, N6, NJ, N5, N4],
    }),
    N7 = (0, a.zD)(u.X.CLIPS_DEBUG_TOOLTIPS, {
        useTitle: () => "Show clips debug tooltips",
        useSubtitle: () =>
            "Show overlay tooltips for the clips engine starting, enabled features, auto-clip signals, and save errors. Intended for development and testing.",
        useValue: () => (0, g.bG)([NV.Ay], () => NV.Ay.getSettings().debugTooltipsEnabled),
        setValue: (e) => NU.YP(e),
    }),
    N9 = (0, a.zD)(u.X.CLIPS_SHOW_POV_CLIPS, {
        useTitle: () => "Show POV clips in Gallery",
        useSubtitle: () =>
            "Show clips automatically captured from your point of view when a teammate clips a shared moment. Dev-only for now.",
        useValue: () => (0, g.bG)([NV.Ay], () => NV.Ay.getSettings().showPovClipsInGallery),
        setValue: (e) => NU.Uh(e),
    }),
    _e = (0, a.zZ)(u.X.CLIPS_DEVELOPER_CATEGORY, {
        useTitle: () => "Developer",
        usePredicate: () =>
            (0, g.bG)([iA.default], () => {
                let e = iA.default.getCurrentUser();
                return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
            }),
        buildLayout: () => [N7, N9],
    });
var _t = i(417270),
    _i = i(645886);
let _n = (0, a.E2)(u.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [j.intl.string(j.t.pf54EU), j.intl.string(j.t["QyB/jK"])],
        Component: () => {
            let e = (0, g.bG)([eH.Ay], () => eH.Ay.getKeybindForAction(U.hCu.SAVE_CLIP, !0));
            tZ()(null != e, "Save clip keybind unset");
            let t = (0, NP.Rt)(),
                i = (0, NP.As)(),
                n = S.useRef(null),
                s = S.useCallback(
                    (t) => {
                        tq.A.setKeybind({ ...e, shortcut: t });
                    },
                    [e],
                ),
                l = S.useCallback(() => {
                    tq.A.setKeybind({ ...e, shortcut: (0, e0.OH)(NK.Ot) });
                }, [e]);
            return (0, E.jsx)(s7.D, {
                label: j.intl.string(j.t.pf54EU),
                description: j.intl.string(j.t["QyB/jK"]),
                layout: "horizontal-responsive",
                children: (0, E.jsx)("div", {
                    className: _i.g,
                    children: (0, E.jsx)(tQ.A, {
                        ref: n,
                        disabled: t,
                        defaultValue: e.shortcut,
                        onChange: s,
                        trailingActions: i
                            ? (0, E.jsxs)(E.Fragment, {
                                  children: [
                                      (0, E.jsx)(td.m, {
                                          text: j.intl.string(Nk.default.bUtubv),
                                          position: "top",
                                          ariaHidden: !0,
                                          children: (0, E.jsx)(rH.K, {
                                              icon: rV.F,
                                              size: "sm",
                                              variant: "secondary",
                                              disabled: t,
                                              "aria-label": j.intl.string(Nk.default.bUtubv),
                                              onClick: (e) => {
                                                  e.stopPropagation(), n.current?.toggleRecordMode();
                                              },
                                          }),
                                      }),
                                      (0, E.jsx)(td.m, {
                                          text: j.intl.string(Nk.default.Kyk1Tp),
                                          position: "top",
                                          ariaHidden: !0,
                                          children: (0, E.jsx)(rH.K, {
                                              icon: _t.m,
                                              size: "sm",
                                              variant: "secondary",
                                              disabled: t,
                                              "aria-label": j.intl.string(Nk.default.Kyk1Tp),
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
    _s = (0, a.E2)(u.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [j.intl.string(j.t["0U/hj7"]), j.intl.string(j.t["5zxkdo"])],
        usePredicate: ao.BW,
        Component: () => {
            let e = (0, g.bG)([eH.Ay], () => eH.Ay.getKeybindForAction(U.hCu.SAVE_CLIP, !0)),
                t = (0, g.bG)([eH.Ay], () => eH.Ay.getKeybindForAction(U.hCu.SAVE_SCREENSHOT, !0));
            tZ()(null != e, "Save clip keybind unset"), tZ()(null != t, "Save screenshot keybind unset");
            let i = S.useCallback(
                (e) => {
                    tq.A.setKeybind({ ...t, shortcut: e });
                },
                [t],
            );
            return (0, E.jsx)(s7.D, {
                label: j.intl.string(j.t["0U/hj7"]),
                description: j.intl.string(j.t["5zxkdo"]),
                layout: "horizontal",
                children: (0, E.jsx)("div", {
                    className: _i.g,
                    children: (0, E.jsx)(tQ.A, { defaultValue: t.shortcut, onChange: i }),
                }),
            });
        },
    }),
    _l = (0, a.zD)(u.X.CLIPS_ENABLE, {
        useTitle: () => j.intl.string(j.t.h8rgrK),
        useSubtitle: () => j.intl.string(j.t["4Qw3NO"]),
        useValue: () => (0, NM.Et)(),
        setValue: (e) => NU.yO({ clipsEnabled: e, trackAnalytics: !0 }),
    });
var _r = i(915618);
let _a = (0, a.zD)(u.X.CLIPS_ENABLE_DECOUPLED_CLIPPING, {
        useTitle: () => j.intl.string(j.t.yXvykv),
        useSubtitle: () => j.intl.string(j.t.YP3ujk),
        useValue: NM.XT,
        setValue: (e) => NU.fd({ enabled: e, trackAnalytics: !0 }),
        usePredicate: function () {
            let e = (0, eZ.isWindows)(),
                t = (0, _r.A)(rw.Ay),
                i = (0, NP.As)();
            return e && t && !i;
        },
        useDisabled: NP.Rt,
    }),
    _o = (0, a.zY)(u.X.CLIPS_GENERAL_CARD, { buildLayout: () => [_l, _a, _n, _s], headerSettingKey: _l.key }),
    _u = (0, a.zZ)(u.X.CLIPS_GENERAL_CATEGORY, {
        useTitle: () => j.intl.string(j.t["rWKv+e"]),
        useSubtitle: () => j.intl.format(Nk.default["dh7g+S"], { learnMoreLink: ty.A.getArticleURL(U.MVz.CLIPS) }),
        usePredicate: NP.As,
        buildLayout: () => [_o],
    }),
    _d = (0, a.E2)(u.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [j.intl.string(j.t.s4773E), j.intl.string(j.t.svjwGh)],
        Component: () => {
            let e = (0, g.bG)([NV.Ay], () => NV.Ay.getSettings().storageLocation),
                t = (0, NP.Rt)(),
                i = S.useRef(!1);
            async function n() {
                if (!t && !i.current) {
                    i.current = !0;
                    try {
                        let e = await lC.A.fileManager.showOpenDialog({
                            properties: ["openDirectory", "createDirectory"],
                        });
                        e.length > 0 && NU.HU(e[0]);
                    } finally {
                        i.current = !1;
                    }
                }
            }
            return (0, E.jsx)(s7.D, {
                label: j.intl.string(j.t.s4773E),
                description: j.intl.string(j.t.svjwGh),
                layout: "vertical",
                children: (0, E.jsxs)(Q.B, {
                    direction: "horizontal",
                    align: "center",
                    gap: "sm",
                    children: [
                        (0, E.jsx)(rq.k, {
                            fullWidth: !0,
                            value: e,
                            editable: !1,
                            disabled: t,
                            "aria-label": j.intl.formatToPlainString(j.t.iMONTj, { storageLocation: e }),
                        }),
                        (0, E.jsx)(ek.$, {
                            variant: "secondary",
                            disabled: t,
                            onClick: n,
                            text: j.intl.string(Nk.default.yQAN6B),
                        }),
                    ],
                }),
            });
        },
    }),
    _c = (0, a.zZ)(u.X.CLIPS_RECORDING_CATEGORY, {
        useTitle: () => j.intl.string(j.t.iIwmV5),
        usePredicate: () => !(0, NP.As)(),
        buildLayout: () => [N5, N2, _l, _a, N4, N3, N6, N0, _n, _s, _d],
    }),
    _g = (0, a.zZ)(u.X.CLIPS_STORAGE_CATEGORY, {
        useTitle: () => j.intl.string(Nk.default["0Q+pdZ"]),
        usePredicate: NP.As,
        buildLayout: () => [_d, NZ],
    }),
    _m = (0, a.t_)(u.X.CLIPS_PANEL, {
        useTitle: () => j.intl.string(j.t.z2jK6X),
        usePredicate: ao.sw,
        buildLayout: () => [_u, Nz, N8, _g, _c, Nq, _e],
    }),
    _A = (0, a.i4)(u.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.z2jK6X),
        icon: ND.x,
        buildLayout: () => [_m],
    }),
    _h = (0, a.zZ)(u.X.CONNECTIONS_ADD_CONNECTIONS_CATEGORY, { buildLayout: () => [Tn], useInlineNotice: Tr }),
    _E = (0, a.zZ)(u.X.CONNECTIONS_CONNECTED_ACCOUNTS_CATEGORY, { buildLayout: () => [Ts] }),
    _S = (0, a.t_)(u.X.CONNECTIONS_PANEL, {
        useTitle: () => j.intl.string(j.t["3fe7U5"]),
        useObscuredNotice: dg.L,
        buildLayout: () => [_h, _E],
    }),
    _T = (0, a.i4)(u.X.CONNECTIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["3fe7U5"]),
        icon: EE.q,
        buildLayout: () => [_S],
    });
var _x = i(875444);
function _p(e, t) {
    let i = (0, g.bG)([SP.default], () => SP.default.getFetchState()),
        n = (0, g.bG)([SP.default], () =>
            e ? SP.default.getNewestTokensForNonChildrenApplications() : SP.default.getNewestTokens(),
        ),
        s = S.useMemo(
            () => (null == n ? [] : n.filter((e) => (0, _x.O)(e.application, e.scopes)).map((e) => e.application)),
            [n],
        );
    return (
        S.useEffect(() => {
            t || Sx.A.fetch();
        }, [t]),
        { showLoadingIndicator: i !== SP.FetchState.FETCHED && (null == n || 0 === n.length), slayerSdkApplications: s }
    );
}
var _f = i(390646);
function _N(e) {
    let { applications: t } = e,
        i = S.useMemo(() => t.sort((e, t) => db.default.compare(t.id, e.id)), [t]),
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
                    a = na.Ay.getApplicationIconURL({ id: r, icon: s });
                e.push(
                    (0, E.jsx)(
                        td.m,
                        {
                            __unsupportedReactNodeAsText: l,
                            children: (0, E.jsx)("img", { src: a, "aria-label": l, className: _f.Kk }),
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
                                className: _f.lK,
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
        className: _f.wx,
        children: [
            (0, E.jsxs)("div", {
                className: _f.kX,
                children: [
                    (0, E.jsx)(es.E, { variant: "text-md/normal", color: "text-strong", children: n }),
                    (0, E.jsxs)(en.D, {
                        onClick: function () {
                            (0, eq.openUserSettings)(u.X.AUTHORIZED_APPS_PANEL);
                        },
                        className: _f.bJ,
                        children: [
                            (0, E.jsx)(es.E, {
                                variant: "text-xs/normal",
                                color: "interactive-text-default",
                                children: j.intl.format(j.t.oYaYOe, {}),
                            }),
                            (0, E.jsx)(tM._, {
                                size: "xxs",
                                color: er.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                className: _f.g7,
                            }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)("div", { className: _f.yF }),
            (0, E.jsx)("div", { className: _f.lJ, children: s }),
        ],
    });
}
function __() {
    return (0, E.jsxs)("div", {
        className: _f.do,
        children: [
            (0, E.jsx)(es.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: _f.xV,
                children: j.intl.string(j.t["+0U77d"]),
            }),
            (0, E.jsx)(es.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: j.intl.format(j.t.V8wClM, {
                    helpdeskArticle: ty.A.getArticleURL(U.MVz.SOCIAL_LAYER_CONNECTIONS),
                }),
            }),
        ],
    });
}
function _I(e) {
    let { applications: t } = e;
    return t.length > 0 ? (0, E.jsx)(_N, { applications: t }) : (0, E.jsx)(__, {});
}
let _C = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES, {
    useSearchTerms: () => [j.intl.string(j.t.YpCiMt)],
    Component: function () {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = _p(!0);
        return e ? (0, E.jsx)(dA.y, {}) : (0, E.jsx)(_I, { applications: t });
    },
});
function _b() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = _p(!0, !0);
    return !e && t.length > 0;
}
let _v = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => ((0, o.SV)("GameFriendDMSetting") ? j.intl.string(j.t.W8JtfT) : j.intl.string(j.t.XpBObB)),
        useSubtitle: () =>
            (0, o.SV)("GameFriendDMSetting")
                ? j.intl.string(j.t.a99KKy)
                : j.intl.format(j.t.oZsHTD, { helpdeskArticle: ty.A.getArticleURL(U.MVz.SLAYER_GAME_FRIENDS) }),
        useSearchTerms: () => [j.intl.string(j.t["Uv/eTx"])],
        useValue: () => L.Zk.useSetting(),
        setValue: (e) => L.Zk.updateSetting(e),
        usePredicate: _b,
    }),
    _y = (0, a.Qx)(u.X.CONTENT_AND_SOCIAL_IN_GAME_DMS_SETTING, {
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
        usePredicate: _b,
    }),
    _j = (0, a.zZ)(u.X.CONNECTED_GAMES_CATEGORY, {
        useSearchTerms: () => [j.intl.string(j.t.YpCiMt)],
        buildLayout: () => [_C, _v, _y],
    });
var _O = i(687123),
    _R = i(444802),
    _L = i(558001);
i(866945);
var _D = i(835002);
function _P() {
    let e = (0, _R.WX)();
    S.useEffect(() => {
        (0, _L.N)(_D.YA.AGE_CONFIRMATION_NOTICE, _D.YX.VIEWED);
    }, []);
    let t = S.useCallback(() => {
            window.open(ty.A.getArticleURL(e), "_blank"), (0, _L.N)(_D.YA.AGE_CONFIRMATION_NOTICE, _D.YX.LEARN_MORE);
        }, [e]),
        i = S.useCallback(() => {
            pJ.A.showAgeVerificationGetStartedModal({ entryPoint: p$.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, _L.N)(_D.YA.AGE_CONFIRMATION_NOTICE, _D.YX.CONFIRM_AGE);
        }, []);
    return (0, E.jsx)(tv.p, {
        messageType: tv.Y.INFO,
        action: (0, E.jsx)(ea.Q, {
            variant: "secondary",
            size: "sm",
            textVariant: "text-sm/medium",
            text: j.intl.string(j.t.FDSSia),
            onClick: i,
        }),
        children: j.intl.format(j.t.mFgsfg, { hook: (e, i) => (0, E.jsx)(u9.Anchor, { onClick: t, children: e }, i) }),
    });
}
function _G() {
    let e = (0, pH.aX)(_O.t.REACTIVE_CHECK),
        t = (0, pX.b8)();
    return S.useMemo(() => {
        if (e && !t) return { type: h.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: _P };
    }, [e, t]);
}
var _M = i(308528),
    _U = i(171316);
function _V() {
    let e = (0, _U.uM)(),
        t = (0, Nu.vx)(),
        i = S.useCallback(() => {
            (0, sZ.default)(),
                _M.A.openPrivateChannel({ recipientIds: t }),
                (0, _L.N)(_D.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _D.YX.LEARN_MORE);
        }, [t]),
        n = S.useCallback(() => {
            (0, _L.N)(_D.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _D.YX.VIEWED);
        }, []);
    return S.useMemo(() => {
        if (e)
            return {
                type: h.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: n,
                text: j.intl.format(NA.default.i284fU, {
                    hook: (e, t) => (0, E.jsx)(u9.Anchor, { onClick: i, children: e }, t),
                    count: t.length,
                }),
            };
    }, [i, e, t.length, n]);
}
var _k = i(323073),
    _w = i(386171),
    _F = i(96607);
let _B = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_DM_SETTING, {
        useTitle: () =>
            (0, o.SV)("AgeRestrictedDMCommandsSetting") ? j.intl.string(j.t.gvC6q7) : j.intl.string(j.t.XahVjj),
        useSubtitle: () =>
            (0, o.SV)("AgeRestrictedDMCommandsSetting") ? j.intl.string(j.t.zirUC1) : j.intl.string(j.t.R9fXyS),
        useValue: _w.hT,
        useDisabled: function () {
            let e = (0, _F.A)() ?? !0,
                t = (0, _k.sP)(),
                i = (0, pX.yM)();
            return (!t || !!i) && !e;
        },
        setValue: function (e) {
            (0, _k.p5)() && e
                ? pJ.A.showAgeVerificationGetStartedModal({ entryPoint: p$.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : L.Qe.updateSetting(e);
        },
    }),
    _z = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => j.intl.string(j.t["L+yTsa"]),
        useSubtitle: () =>
            (0, o.SV)("AgeRestrictediOSSetting") ? j.intl.string(j.t["t6i/jW"]) : j.intl.string(j.t.hiM8pU),
        useValue: _w.tI,
        useDisabled: function () {
            let e = (0, _F.A)() ?? !0,
                t = (0, _k.sP)(),
                i = (0, pX.yM)();
            return S.useMemo(() => (!t || !!i) && !e, [t, e, i]);
        },
        setValue: function (e) {
            (0, _k.p5)() && e
                ? pJ.A.showAgeVerificationGetStartedModal({ entryPoint: p$.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : L.Kg.updateSetting(e);
        },
    }),
    _Y = (0, a.AK)(u.X.CONTENT_FILTERS_APPEARANCE_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.hOXd45),
        destinationKey: u.X.APPEARANCE_MESSAGES_CATEGORY,
    }),
    _X = (0, a.gN)(u.X.CONTENT_FILTERS_RELATED_SETTINGS, { buildLayout: () => [_Y] });
i(667532);
var _H = i(390248),
    _K = i(632119),
    _W = i(945276),
    _Z = i(389737),
    _q = i(566769);
function _Q() {
    let e,
        t = (0, _W.A)() ?? !0,
        i = (0, _U.uM)(),
        n = (0, _U.uM)(),
        {
            explicitContentGuilds: s,
            explicitContentFriendDm: l,
            explicitContentNonFriendDm: r,
        } = ((e = (0, u7.cf)([uI.A], () => uI.A.settings.textAndImages?.explicitContentSettings ?? (0, _K.C$)())),
        {
            explicitContentGuilds: (0, _K.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, _K.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, _K.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, _H.hK)() && t.includes(H.TO.SHOW)
            ? pJ.A.showAgeVerificationGetStartedModal({ entryPoint: p$.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, _K.Jz)(e);
    }
    let o = [
            { value: H.TO.BLUR, label: j.intl.string(j.t.S49Uad) },
            { value: H.TO.BLOCK, label: j.intl.string(j.t["D/157Y"]) },
        ],
        u = [{ value: H.TO.BLUR, label: j.intl.string(j.t.S49Uad) }],
        d = { value: H.TO.SHOW, label: j.intl.string(j.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: n, tooltipText: i ? j.intl.string(NA.default["6Af/cw"]) : void 0 };
    return (0, E.jsxs)(_Z.E, {
        description: j.intl.string(j.t.Wnojv1),
        children: [
            (0, E.jsx)(_q.A, {
                title: j.intl.string(j.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(_q.A, {
                title: j.intl.string(j.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(_q.A, {
                title: j.intl.string(j.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || n,
                tooltipText: i ? j.intl.string(NA.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function _J() {
    let e,
        t = (0, _W.A)() ?? !0,
        i = (0, _U.uM)(),
        n = (0, _U.uM)(),
        {
            goreContentGuilds: s,
            goreContentFriendDm: l,
            goreContentNonFriendDm: r,
        } = ((e = (0, u7.cf)([uI.A], () => uI.A.settings.textAndImages?.goreContentSettings ?? (0, _R.T4)())),
        {
            goreContentGuilds: (0, _R.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, _R.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, _R.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, _H.hK)() && t.includes(H.TO.SHOW)
            ? pJ.A.showAgeVerificationGetStartedModal({ entryPoint: p$.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, _R.qY)(e);
    }
    let o = [
            { value: H.TO.BLUR, label: j.intl.string(j.t.S49Uad) },
            { value: H.TO.BLOCK, label: j.intl.string(j.t["D/157Y"]) },
        ],
        u = [{ value: H.TO.BLUR, label: j.intl.string(j.t.S49Uad) }],
        d = { value: H.TO.SHOW, label: j.intl.string(j.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: n, tooltipText: i ? j.intl.string(NA.default["6Af/cw"]) : void 0 };
    return (0, E.jsxs)(_Z.E, {
        description: j.intl.string(j.t.XgH9eh),
        children: [
            (0, E.jsx)(_q.A, {
                title: j.intl.string(j.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(_q.A, {
                title: j.intl.string(j.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(_q.A, {
                title: j.intl.string(j.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || n,
                options: u,
                tooltipText: i ? j.intl.string(NA.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var _$ = i(464946),
    _0 = i(875162),
    _1 = i(428275);
let _2 = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, _R.WX)(),
            t = S.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: j.intl.string(j.t.GYpoAq),
                        component: _Q,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: j.intl.string(j.t["16/3Bi"]),
                        component: _J,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, E.jsxs)(_$.h, {
            children: [
                (0, E.jsx)(_$._, {
                    header: j.intl.string(j.t["Hj/But"]),
                    description: j.intl.format(j.t.dliU4j, { learnMoreLink: ty.A.getArticleURL(e) }),
                }),
                (0, E.jsx)(_0.A, { tabs: t, orientation: "vertical", tabsClassName: _1.v }),
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
var _3 = i(639555),
    _5 = i(617641),
    _6 = i(546140),
    _4 = i(406935),
    _8 = i(594061);
let _7 = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING, {
    useTitle: () => j.intl.string(j.t.qFsx5q),
    useSubtitle: () => j.intl.format(j.t.lunaRv, { learnMoreLink: ty.A.getArticleURL(U.MVz.SAFETY_ALERTS) }),
    useValue: _6.L,
    setValue: function (e) {
        return _8.wc.updateAsync(
            "privacy",
            (t) => {
                t.inappropriateConversationWarnings = _4._t.create({ value: e });
            },
            _8.Sb.INFREQUENT_USER_ACTION,
        );
    },
    usePredicate: function () {
        let e = (0, _5.Lc)({ location: "DMSafetyAlertsSetting" }),
            t = (0, _3.Rv)({ location: "DMSafetyAlertsSetting" }),
            i = (0, _W.A)() ?? !0;
        return e && !i && !t;
    },
});
var _9 = i(809505),
    Ie = i(923457),
    It = i(750714);
let Ii = (0, a.Qx)(u.X.CONTENT_AND_SOCIAL_DM_SPAM_SETTING, {
        useTitle: () => ((0, o.SV)("DMSpamSetting") ? j.intl.string(j.t.puwSkY) : j.intl.string(j.t.tiCXaH)),
        useSubtitle: () =>
            (0, o.SV)("DMSpamSetting")
                ? j.intl.string(j.t["+sXN3T"])
                : j.intl.format(j.t.RvjRRI, { appealLink: ty.A.getArticleURL(U.MVz.SAFE_DIRECT_MESSAGING) }),
        useValue: function () {
            let e = L.he.useSetting(),
                t = L.cj.useSetting(),
                i = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()),
                n = (0, pH.yv)(Ie.p.SPAM_FILTERS);
            return e !== H.he.DEFAULT_UNSET
                ? e
                : i?.nsfwAllowed === !1 && n
                  ? H.he.FRIENDS_AND_NON_FRIENDS
                  : (It.xY.get(t) ?? H.he.NON_FRIENDS);
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
                        : (0, _9.YS)(),
                [e],
            );
        },
        useSearchTerms: () => [j.intl.string(j.t.JzaP4h), j.intl.string(j.t.H9XOl3), j.intl.string(j.t.k4W40P)],
    }),
    In = (0, a.zZ)(u.X.CONTENT_CATEGORY, {
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
                u = _V(),
                d =
                    ((e = (0, Ng.Z)()),
                    (t = (0, _R.WX)()),
                    (i = S.useCallback(() => {
                        window.open(ty.A.getArticleURL(t), "_blank"),
                            (0, _L.N)(_D.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _D.YX.LEARN_MORE);
                    }, [t])),
                    (n = S.useCallback(() => {
                        (0, _L.N)(_D.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _D.YX.VIEWED);
                    }, [])),
                    S.useMemo(() => {
                        if (e)
                            return {
                                type: h.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: n,
                                text: j.intl.format(j.t.EUo0yj, {
                                    hook: (e, t) => (0, E.jsx)(u9.Anchor, { onClick: i, children: e }, t),
                                }),
                            };
                    }, [i, e, n])),
                c =
                    ((s = (0, pH.SJ)()),
                    (l = (0, pX.b8)()),
                    (r = s && !l),
                    (a = S.useCallback(() => {
                        pJ.A.showAgeVerificationGetStartedModal({ entryPoint: p$.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, _L.N)(_D.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _D.YX.LEARN_MORE);
                    }, [])),
                    (o = S.useCallback(() => {
                        (0, _L.N)(_D.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _D.YX.VIEWED);
                    }, [])),
                    S.useMemo(() => {
                        if (r)
                            return {
                                type: h.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: o,
                                text: j.intl.format(j.t.OX4ybh, {
                                    hook: (e, t) => (0, E.jsx)(u9.Anchor, { onClick: a, children: e }, t),
                                }),
                            };
                    }, [a, r, o])),
                g = _G();
            return u ?? g ?? c ?? d;
        },
        buildLayout: () => ((0, o.Bv)("ContentCategory") ? [_2, _7, _B, _z, _X] : [_2, Ii, _7, _B, _z]),
    });
var Is = i(189883);
let Il = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => j.intl.string(j.t["7x9dyE"]),
    useValue: function () {
        let e = L.FA.useSetting();
        return S.useMemo(() => (0, l7.Lx)(e), [e]).all;
    },
    setValue: function (e) {
        L.FA.updateSetting(e ? U.yKI : U.yKI & ~U.dzt.NO_RELATION);
    },
    useDisabled: function () {
        return (0, _U.uM)();
    },
});
var Ir = i(665260);
let Ia = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => j.intl.string(j.t.NfeuZ3),
        useValue: function () {
            let e = L.FA.useSetting(),
                t = S.useMemo(() => (0, l7.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: function (e) {
            let t = L.FA.getSetting();
            L.FA.updateSetting(e ? Ir.UI(t, U.dzt.MUTUAL_FRIENDS) : Ir.iE(t, U.dzt.MUTUAL_FRIENDS, U.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, _U.uM)();
        },
    }),
    Io = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => j.intl.string(j.t.qsMfsH),
        useSubtitle: () => ((0, o.SV)("FriendRequestsMutualGuildsSetting") ? j.intl.string(j.t["6DqAp0"]) : void 0),
        useValue: function () {
            let e = L.FA.useSetting(),
                t = S.useMemo(() => (0, l7.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: function (e) {
            let t = L.FA.getSetting();
            L.FA.updateSetting(e ? Ir.UI(t, U.dzt.MUTUAL_GUILDS) : Ir.iE(t, U.dzt.MUTUAL_GUILDS, U.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, _U.uM)();
        },
    }),
    Iu = (0, a.FW)(u.X.FRIEND_REQUESTS_FIELDSET, {
        useTitle: () => j.intl.string(j.t.wTdS6S),
        buildLayout: () => [Il, Ia, Io],
    }),
    Id = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => j.intl.string(j.t["jK+wdr"]),
        useSubtitle: () => j.intl.string(j.t["RYh/pW"]),
        useValue: () => !L.Zd.useSetting(),
        setValue: function (e) {
            L.Zd.updateSetting(!e);
        },
        usePredicate: () => Is.A.useConfig({ location: "Friend Request Setting" }).enabled,
        usePersistentBadge: () => ({ badgeType: h.Xi.BETA }),
    });
function Ic() {
    let { enabled: e } = Is.A.useConfig({ location: "Friend Request Setting" });
    return e ? j.intl.string(j.t.QVbF3l) : void 0;
}
let Ig = (0, a.zZ)(u.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["5gxWrt"]),
        useSubtitle: Ic,
        useSubnavLabel: () => j.intl.string(j.t.fyA115),
        useInlineNotice: _V,
        buildLayout: () => [Iu, Id],
    }),
    Im = (0, a.zZ)(u.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.MNaVwq),
        useSubtitle: Ic,
        useInlineNotice: _V,
        buildLayout: () => [Il, Ia, Io, Id],
    });
var IA = i(994500),
    Ih = i(428678),
    IE = i(717398),
    IS = i(730134),
    IT = i(943646);
function Ix(e) {
    let { listType: t, numberOfUsers: i } = e,
        n = "blocked" === t;
    return (0, E.jsxs)("div", {
        className: IT.wx,
        children: [
            (0, E.jsx)("div", { className: IT.zc, children: n ? (0, E.jsx)(Ih.K, {}) : (0, E.jsx)(iP.G, {}) }),
            (0, E.jsxs)("div", {
                className: IT.Qq,
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
function Ip(e) {
    let { userId: t, last: i } = e,
        n = (0, g.bG)([IA.A], () => IA.A.isBlocked(t)),
        s = (0, g.bG)([iA.default], () => iA.default.getUser(t)),
        [l, r] = S.useState(!1),
        a = S.useCallback(() => {
            r(!0),
                n
                    ? IE.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : IE.A.unignoreUser(t, e6.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      });
        }, [n, t]);
    return null == s
        ? null
        : (0, E.jsxs)("div", {
              className: e7()(IT.nM, { [IT.fW]: i }),
              children: [
                  (0, E.jsxs)("div", {
                      className: IT.eF,
                      children: [
                          (0, E.jsx)(IS.A, { user: s, size: nt._3.SIZE_40 }),
                          (0, E.jsxs)("div", {
                              className: IT.Qq,
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
                  (0, E.jsx)(ek.$, {
                      variant: "secondary",
                      text: j.intl.string(n ? j.t.XyHpKH : j.t["8wXU9B"]),
                      onClick: a,
                      loading: l,
                  }),
              ],
          });
}
function If(e) {
    let { userIds: t, listType: i } = e,
        [n, s] = S.useState(5);
    return (0, E.jsx)(_$.h, {
        children: (0, E.jsxs)("div", {
            className: IT.Nr,
            children: [
                (0, E.jsx)(Ix, { listType: i, numberOfUsers: t.length }),
                (0, E.jsx)("div", {
                    className: IT.jS,
                    children: t.slice(0, n).map((e, i) => (0, E.jsx)(Ip, { userId: e, last: i === t.length - 1 }, e)),
                }),
                n < t.length
                    ? (0, E.jsx)("div", {
                          className: IT.vM,
                          children: (0, E.jsx)(en.D, {
                              onClick: function () {
                                  s((e) => e + 5);
                              },
                              className: IT.Qf,
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
let IN = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_BLOCKED_USERS, {
        useSearchTerms: () => [j.intl.string(j.t.PFOUKW)],
        usePredicate: () => (0, g.bG)([IA.A], () => IA.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, g.yK)([IA.A], () => IA.A.getBlockedIDs());
            return (0, E.jsx)(If, { userIds: e, listType: "blocked" });
        },
    }),
    I_ = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_IGNORED_USERS, {
        useSearchTerms: () => [j.intl.string(j.t["93ZDWE"])],
        usePredicate: () => (0, g.bG)([IA.A], () => IA.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, g.yK)([IA.A], () => IA.A.getIgnoredIDs());
            return (0, E.jsx)(If, { userIds: e, listType: "ignored" });
        },
    }),
    II = (0, a.zZ)(u.X.RESTRICTED_USERS_CATEGORY, {
        useTitle: () =>
            (0, o.SV)("RestrictedUsersCategory") ? j.intl.string(j.t["+Iryf3"]) : j.intl.string(j.t.LVwR56),
        useSubtitle: () =>
            j.intl.format(j.t["0aNQo9"], { helpArticle: ty.A.getArticleURL(U.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [IN, I_],
        usePredicate: function () {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, g.cf)([IA.A], () => ({
                hasBlockedUsers: IA.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: IA.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var IC = i(22385),
    Ib = i(556534),
    Iv = i(111159),
    Iy = i(152056),
    Ij = i(467962);
let IO = { label: () => j.intl.string(j.t["32u1Dx"]), value: IC.YG };
var IR = i(954225);
function IL() {
    return (0, Ib.Tx)() !== IC.YG;
}
function ID() {
    return j.intl.string(j.t["T+nevN"]);
}
let IP = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_JOIN_SETTING, {
    useTitle: ID,
    useSubtitle: () =>
        j.intl.format(j.t.jXKQCu, { helpdeskArticle: ty.A.getArticleURL(U.MVz.ACTIVITY_STATUS_SETTINGS) }),
    useValue: function () {
        let e = (0, Ib.Tx)();
        return !L.pE.useSetting().includes(e);
    },
    setValue: function (e) {
        let t = IC.xk.getState().selectedGuildId,
            i = (0, l7.CN)();
        e ? i.delete(t) : i.add(t),
            L.pE.updateSetting([...i]),
            G.default.track(U.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: IR.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
                ingress: nH.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    },
    usePredicate: IL,
});
function IG() {
    return (0, Ib.Tx)() !== IC.YG;
}
function IM() {
    return j.intl.string(D.default.WhdCGP);
}
let IU = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_SHARE_SETTING, {
    useTitle: IM,
    useSubtitle: () => j.intl.string(D.default.UQ9RHJ),
    useValue: function () {
        let e = (0, Ib.Tx)();
        return !L.JG.useSetting().includes(e);
    },
    setValue: function (e) {
        let t = IC.xk.getState().selectedGuildId,
            i = (0, l7.Kk)();
        e ? i.delete(t) : i.add(t),
            L.JG.updateSetting([...i]),
            G.default.track(U.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: IR.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
                ingress: nH.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    },
    usePredicate: IG,
});
var IV = i(307863),
    Ik = i(428031),
    Iw = i(972737);
function IF() {
    return (0, IV.e)() ? j.intl.string(j.t.PMsfcH) : j.intl.string(j.t.RAQUSN);
}
function IB() {
    let e = (0, Ib.Tx)(),
        t = (0, Ib.q9)(),
        i = (0, IV.e)();
    return e === IC.YG
        ? i
            ? j.intl.string(j.t.XXGmuB)
            : j.intl.string(j.t.wbYDfT)
        : t
          ? j.intl.string(j.t.V0ka0Q)
          : i
            ? j.intl.string(j.t.F9WY3f)
            : j.intl.string(j.t.G7c3Xo);
}
function Iz() {
    let e = (0, Ib.Tx)(),
        t = L.$s.useSetting().includes(e),
        i = (0, Ik.K)();
    return e === IC.YG ? !i : !t;
}
function IY() {
    let e = (0, _U.uM)();
    return (0, Ib.Tx)() === IC.YG && e;
}
function IX(e, t) {
    G.default.track(U.HAw.GUILD_DEFAULT_DMS_UPDATED, { default_guilds_restricted: e, applied_to_existing_guilds: t });
}
function IH(e) {
    let t = IC.xk.getState().selectedGuildId;
    if (t === IC.YG) {
        var i;
        (i = !e),
            (0, Iw.O)({
                header: j.intl.string(j.t["uUr+GR"]),
                body: j.intl.string(j.t.hjGJBp),
                confirmText: j.intl.string(j.t.gm1Vej),
                cancelText: j.intl.string(j.t.p89ACt),
                confirmButtonColor: ot.$n.Colors.BRAND,
                onConfirm: function () {
                    L.n6.updateSetting(i), IX(i, !1);
                },
                onCancel: function () {
                    L.n6.updateSetting(i), L.$s.updateSetting(i ? eh.A.getGuildIds() : []), IX(i, !0);
                },
            });
    } else {
        let i = (0, l7.Tb)();
        e ? i.delete(t) : i.add(t),
            L.$s.updateSetting(Array.from(i)),
            G.default.track(U.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: IR.m.DIRECT_MESSAGES_TOGGLE,
                ingress: nH.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    }
}
let IK = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: IB,
        useValue: Iz,
        useDisabled: IY,
        setValue: IH,
    }),
    IW = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: IF,
        useSubtitle: IB,
        useValue: Iz,
        useDisabled: IY,
        setValue: IH,
    });
var IZ = i(953298);
function Iq(e, t) {
    G.default.track(U.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
}
function IQ() {
    let e = (0, o.SV)("PermissionsMessageRequestsSetting"),
        t = (0, Ib.q9)();
    if (e)
        if (t) return j.intl.string(j.t["982I7+"]);
        else return j.intl.string(j.t["3yHM5i"]);
    return j.intl.string(j.t["3o2ojh"]);
}
let IJ = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: IQ,
        useSubtitle: function () {
            let e = (0, o.SV)("PermissionsMessageRequestsSetting"),
                t = (0, Ib.q9)();
            return e
                ? j.intl.format(j.t.BoCjTy, { learnMoreUrl: ty.A.getArticleURL(U.MVz.MESSAGE_REQUESTS) })
                : t
                  ? j.intl.format(j.t.WpnWLc, { helpdeskArticle: ty.A.getArticleURL(U.MVz.MESSAGE_REQUESTS) })
                  : j.intl.format(j.t.wkm9a3, { helpdeskArticle: ty.A.getArticleURL(U.MVz.MESSAGE_REQUESTS) });
        },
        useValue: function () {
            let e = (0, Ib.Tx)(),
                t = (0, Ik.K)(),
                i = L.$s.useSetting().includes(e),
                n = L.YX.useSetting(),
                s = L.Zr.useSetting().includes(e);
            return e === IC.YG ? !t && !n : !i && !s;
        },
        useDisabled: function () {
            let e = (0, Ib.Tx)(),
                t = (0, _U.uM)(),
                i = (0, Ik.K)(),
                n = L.$s.useSetting().includes(e);
            return e === IC.YG ? i || t : n;
        },
        setValue: function (e) {
            let t = IC.xk.getState().selectedGuildId;
            if (!e && (0, IZ.w)())
                return void pJ.A.showAgeVerificationGetStartedModal({ entryPoint: p$.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === IC.YG) {
                var i;
                (i = !e),
                    (0, Iw.O)({
                        header: j.intl.string(j.t.yAfu1p),
                        body: j.intl.string(j.t.Ry2z74),
                        confirmText: j.intl.string(j.t.gm1Vej),
                        cancelText: j.intl.string(j.t.p89ACt),
                        confirmButtonColor: ot.$n.Colors.BRAND,
                        onConfirm: function () {
                            L.YX.updateSetting(i), Iq(i, !1);
                        },
                        onCancel: function () {
                            L.YX.updateSetting(i), L.Zr.updateSetting(i ? eh.A.getGuildIds() : []), Iq(i, !0);
                        },
                    });
            } else {
                let i = (0, l7.xo)();
                e ? i.delete(t) : i.add(t),
                    L.Zr.updateSetting(Array.from(i)),
                    G.default.track(U.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: IR.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: nH.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    });
            }
        },
    }),
    I$ = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            let e = (0, o.SV)("GuildSelect"),
                t = [IF(), IQ()],
                i = IM(),
                n = IG();
            !e && n && t.push(i);
            let s = ID(),
                l = IL();
            return !e && l && t.push(s), t;
        },
        Component: function () {
            let { selectedGuildId: e, setSelectedGuildId: t } = (0, IC.xk)(),
                i = (0, g.bG)([eE.Ay], () => eE.Ay.getFlattenedGuildIds()),
                n = (0, g.bG)([eh.A], () => eh.A.getGuilds()),
                s = i[0];
            S.useEffect(
                () =>
                    Iy.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, i) => {
                            let n = IC.xk.getState().selectedGuildId;
                            "" === i && "" !== e && n === IC.YG && null != s
                                ? t(s)
                                : "" === e && n !== IC.YG && t(IC.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [s, t],
            );
            let l = S.useMemo(() => {
                let e = [];
                return (
                    e.push({
                        ...IO,
                        id: IO.value,
                        label: IO.label(),
                        leading: (0, E.jsx)("div", {
                            className: Ij.KP,
                            children: (0, E.jsx)(Iv.p, {
                                size: "sm",
                                color: "white",
                                "aria-hidden": !0,
                                className: Ij.cl,
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
                                leading: (0, E.jsx)(mt.Ay, {
                                    className: Ij.cl,
                                    guild: i,
                                    size: mt.Ay.Sizes.SMALLER,
                                    active: !0,
                                }),
                            });
                    }),
                    e
                );
            }, [i, n]);
            return (0, E.jsx)(iq.Z, {
                selectionMode: "single",
                onSelectionChange: function (e) {
                    t(e);
                },
                value: e,
                options: l,
            });
        },
    });
function I0() {
    let e = _V(),
        t = _G();
    if ((0, Ib.Tx)() === IC.YG) return e ?? t;
}
let I1 = (0, a.zZ)(u.X.PERMISSIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Y5GYcX),
        useSubnavLabel: () => j.intl.string(j.t.YUU0RF),
        useInlineNotice: I0,
        buildLayout: () => [I$, IK, IJ],
    }),
    I2 = (0, a.zZ)(u.X.PERMISSIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.eYaT7L),
        useInlineNotice: I0,
        buildLayout: () => [I$, IW, IJ, IU, IP],
    }),
    I3 = (0, a.dT)(u.X.CONTENT_AND_SOCIAL_MAIN_TAB, {
        getTitle: () => j.intl.string(j.t["/7xJCF"]),
        buildLayout: () => [In, I2, Im, II],
    }),
    I5 = (0, a.dT)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB, {
        initialize: () => {
            Sx.A.fetch();
        },
        getTitle: () => j.intl.string(j.t.YpCiMt),
        buildLayout: () => [_j],
    }),
    I6 = (0, a.t_)(u.X.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => j.intl.string(j.t["+o1pDZ"]),
        buildLayout: () => [I3, I5],
    }),
    I4 = (0, a.i4)(u.X.CONTENT_AND_SOCIAL_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["+o1pDZ"]),
        icon: gy.i,
        buildLayout: () => [I6],
    });
var I8 = i(254138),
    I7 = i(290595),
    I9 = i(153488);
let Ce = (0, a.zD)(u.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
    useTitle: () => j.intl.string(j.t.AGDDkH),
    useSubtitle: () => j.intl.string(j.t.kyo3dJ),
    useValue: () => L.Q$.useSetting(),
    setValue: (e) => NU.eQ({ allowVoiceRecording: e }),
});
var Ct = i(157559),
    Ci = i(331887);
function Cn() {
    let e = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()),
        t = (0, g.bG)([Ci.A], () => Ci.A.harvestType),
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
let Cs = (0, a.Tf)(u.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => j.intl.string(j.t.qfFFos),
        useSubtitle: function () {
            let e = Cn();
            if (e.allowed) return j.intl.format(j.t.NRI6vt, { article: ty.A.getArticleURL(U.MVz.GDPR_REQUEST_DATA) });
            switch (e.reason) {
                case "staff":
                    return j.intl.string(j.t.hIbRso);
                case "not_verified":
                    return j.intl.format(j.t.rBqJDq, {
                        settingsLink: (e, t) =>
                            (0, E.jsx)(
                                en.D,
                                {
                                    tag: "a",
                                    onClick: () => (0, eq.openUserSettings)(u.X.ACCOUNT_INFO_EMAIL_SETTING),
                                    children: e,
                                },
                                t,
                            ),
                    });
                case "rate_limited": {
                    let t = rl()(e.nextAllowed).format("MMMM Do YYYY");
                    return j.intl.format(j.t["VLMG1+"], { date: t });
                }
                default:
                    return;
            }
        },
        initialize: () => {
            sm.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" }),
                sg.Bo.get({ url: U.Rsh.USER_HARVEST, oldFormErrors: !0, rejectWithError: !1 })
                    .then((e) => {
                        sm.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body });
                    })
                    .catch((e) => {
                        sm.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error: e });
                    });
        },
        useDisabled: () => !Cn().allowed,
        useLoading: () => (0, g.bG)([Ci.A], () => Ci.A.requestingHarvest),
        useVariant: () => "secondary",
        useLabel: () => j.intl.string(j.t.dmBSKo),
        onClick: function () {
            return new Promise((e) => {
                let t = !0;
                !(function (e) {
                    let { onConfirm: t, ...n } = e;
                    (0, K.openModalLazy)(async () => {
                        let { default: e } = await i.e("92063").then(i.bind(i, 970018));
                        return (i) => (0, E.jsx)(e, { modalProps: i, onConfirm: t });
                    }, n);
                })({
                    onConfirm: (i) => {
                        (t = !1),
                            (0, Tg.$I)(i)
                                .then(
                                    (e) => (
                                        null != e &&
                                            null != e.body &&
                                            sm.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body }),
                                        e
                                    ),
                                )
                                .then(
                                    (e) => {
                                        null != e && null != e.body
                                            ? Ct.A.show({
                                                  title: j.intl.string(j.t.i2iul5),
                                                  body: j.intl.string(j.t["6Nmv4i"]),
                                              })
                                            : Ct.A.show({
                                                  title: j.intl.string(j.t.OjbtDm),
                                                  body: j.intl.string(j.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || j.intl.string(j.t["0F5Jyt"]);
                                        Ct.A.show({ title: j.intl.string(j.t.OjbtDm), body: t });
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
    Cl = (0, a.v_)(u.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => j.intl.string(j.t.D60Gfj),
        useSubtitle: () =>
            j.intl.format(j.t.dszICC, {
                onClickDisable: () => (0, eq.openUserSettings)(u.X.ACCOUNT_DISABLE_SETTING),
                onClickDelete: () => (0, eq.openUserSettings)(u.X.ACCOUNT_DELETE_SETTING),
            }),
    }),
    Cr = (0, a.zD)(u.X.DATA_USAGE_PERSONALIZATION_SETTING, {
        useTitle: () => j.intl.string(j.t.MNKzyg),
        useSubtitle: () =>
            j.intl.format(j.t["2SiYln"], { helpdeskArticle: ty.A.getArticleURL(U.MVz.DATA_USED_FOR_RECOMMENDED) }),
        useValue: function () {
            return (0, g.bG)([I9.A], () => I9.A.hasConsented(U.YAq.PERSONALIZATION));
        },
        setValue: function (e) {
            e
                ? (0, I7.U)([U.YAq.PERSONALIZATION], []).catch(Iw.i)
                : (0, Iw.O)({
                      header: j.intl.string(j.t["9SNpzv"]),
                      confirmText: j.intl.string(j.t["9g5UGw"]),
                      cancelText: j.intl.string(j.t["+ZLPw9"]),
                      onConfirm: () => {
                          (0, I7.U)([], [U.YAq.PERSONALIZATION]).catch(Iw.i);
                      },
                      body: j.intl.string(j.t.gJvDDh),
                  });
        },
        useDisabled: _U.uM,
    }),
    Ca = (0, a.zD)(u.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => j.intl.string(j.t.CyLYKZ),
        useSubtitle: () =>
            j.intl.format(j.t["md5l4/"], { helpdeskArticle: ty.A.getArticleURL(U.MVz.QUESTS_PRIVACY_CONTROLS) }),
        useValue: function () {
            return !L.vf.useSetting();
        },
        setValue: function (e) {
            L.vf.updateSetting(!e);
        },
        useDisabled: function () {
            let e = L.H1.useSetting(),
                t = (0, _U.uM)();
            return e || t;
        },
        useSearchTerms: () => [j.intl.string(j.t.CyLYKZ)],
    }),
    Co = (0, a.zD)(u.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => j.intl.string(j.t.sJYh5t),
        useSubtitle: () => j.intl.string(j.t.w4fvxe),
        useValue: function () {
            return !L.H1.useSetting();
        },
        setValue: function (e) {
            L.H1.updateSetting(!e);
        },
        useSearchTerms: () => [j.intl.string(j.t.VkS7Yd)],
        useDisabled: _U.uM,
    }),
    Cu = (0, a.AK)(u.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
        destinationKey: u.X.REGISTERED_GAMES_PANEL,
        useSubtitle: function () {
            let { names: e, totalCount: t } = v(2);
            return j.intl.format(j.t.GaTAYM, { count: t, nameCount: e.length, game1: e[0], game2: e[1] });
        },
        useTrailingDecoration: () => {
            let e = y();
            return { type: h.wF.STACKED_ICONS, icons: e };
        },
        usePredicate: () => (0, g.bG)([m.Ay], () => m.Ay.getGamesSeen(!1).some((e) => !(0, A.n1)(e))) && (0, c.xl)(),
    }),
    Cd = (0, a.gN)(u.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [Cu] }),
    Cc = (0, a.zD)(u.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => j.intl.string(j.t.XuADY2),
        useSubtitle: () =>
            j.intl.format(j.t.FNqmmX, { helpdeskArticle: ty.A.getArticleURL(U.MVz.DATA_PRIVACY_CONTROLS) }),
        useValue: function () {
            return (0, g.bG)([I9.A], () => I9.A.hasConsented(U.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, I7.U)([U.YAq.USAGE_STATISTICS], []).catch(Iw.i)
                : (0, Iw.O)({
                      header: j.intl.string(j.t.OdPCbN),
                      body: j.intl.string(j.t.MGWabA),
                      confirmText: j.intl.string(j.t["D3+rU4"]),
                      cancelText: j.intl.string(j.t.kYpG0u),
                      onConfirm: () => (0, I7.U)([], [U.YAq.USAGE_STATISTICS]).catch(Iw.i),
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t.XuADY2)],
        useDisabled: _U.uM,
    }),
    Cg = (0, a.zZ)(u.X.DATA_USAGE_CATEGORY, {
        useTitle: () => j.intl.string(j.t.QDAriI),
        useInlineNotice: _V,
        initialize: () => {
            I9.A.fetchedConsents || (0, I7.Q)();
        },
        buildLayout: () => [Cl, Cc, Cr, Co, Ca, Ce, Cs, Cd],
    });
var Cm = i(567926);
let CA = (0, a.zD)(u.X.NOTIFY_FRIENDS_ON_PROFILE_UPDATE_SETTING, {
    useTitle: () => j.intl.string(Cm.default.F3llsQ),
    useSubtitle: () => j.intl.string(Cm.default["6goWcz"]),
    useValue: L.Sy.useSetting,
    setValue: function (e) {
        L.Sy.updateSetting(e),
            G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: M.Y.ACCOUNT,
                notify_friends_on_profile_update: e,
            });
    },
});
function Ch() {
    let e = L.JG.useSetting();
    return (0, g.yK)([eE.Ay, eh.A], () => {
        let t = new Set(e);
        return eE.Ay.getFlattenedGuildIds().filter((e) => null != eh.A.getGuild(e) && !t.has(e));
    }, [e]);
}
let CE = (0, a.AK)(u.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = Ch();
            if (0 === e.length) return j.intl.format(j.t.QJIJ5p, {});
            let t = eh.A.getGuild(e[0]),
                i = t?.name ?? "",
                n = e.length - 1;
            return 0 === n
                ? j.intl.format(j.t["T+8J4A"], { guildName: i })
                : j.intl.format(j.t["3JyODQ"], { guildName: i, count: n });
        },
        useTrailingDecoration: function () {
            let e,
                t,
                i =
                    ((e = Ch()),
                    0 ===
                    (t = (0, g.yK)(
                        [eh.A],
                        () =>
                            e
                                .slice(0, 2)
                                .map((e) => eh.A.getGuild(e))
                                .filter((e) => null != e),
                        [e],
                    )).length
                        ? null
                        : t.length >= 2
                          ? {
                                frontIcon: { icon: (0, E.jsx)(em, { guild: t[0], size: f.CD }), shape: f.e0.SQUIRCLE },
                                backIcon: { icon: (0, E.jsx)(em, { guild: t[1], size: f.CD }), shape: f.e0.SQUIRCLE },
                            }
                          : { frontIcon: { icon: (0, E.jsx)(em, { guild: t[0], size: f.CD }), shape: f.e0.SQUIRCLE } });
            return { type: h.wF.STACKED_ICONS, icons: i };
        },
        destinationKey: u.X.ACTIVITY_PRIVACY_PANEL,
    }),
    CS = (0, a.gN)(u.X.PROFILE_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, F.lX)("ProfilePrivacyRelatedSettings"),
        buildLayout: () => [CE],
    }),
    CT = (0, a.Qx)(u.X.PROFILE_PRIVACY_SETTING, {
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
                    let { default: e } = await Promise.all([i.e("81849"), i.e("62041"), i.e("63786")]).then(
                        i.bind(i, 413201),
                    );
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
    Cx = (0, a.zZ)(u.X.PROFILE_PRIVACY_CATEGORY, {
        useTitle: () => j.intl.string(j.t.ul884f),
        useSubtitle: () =>
            j.intl.format(j.t.N4jSgR, {
                learnMoreUrl: ty.A.getArticleURL("38859942749463-Profile-Privacy-Setting-on-Discord"),
            }),
        buildLayout: () => [CT, CA, CS],
    });
var Cp = i(936388),
    Cf = i(714763),
    CN = i(814278);
let C_ = (0, a.zD)(u.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => j.intl.string(j.t["opi/XK"]),
    useSubtitle: () => j.intl.format(j.t["/T+ZlP"], { helpArticle: (0, CN.Lu)() }),
    useValue: function () {
        return (0, g.bG)([Cf.A], () => Cf.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        Cp.A.updatePersistentCodesEnabled(e);
    },
});
var CI = i(787392);
function CC() {
    return (0, g.yK)([CI.A], () => CI.A.getUserIds());
}
var Cb = i(803306),
    Cv = i(966327),
    Cy = i(509531);
function Cj(e) {
    let { userId: t, count: i } = e,
        { analyticsLocations: n } = (0, n1.Ay)(),
        s = (0, g.bG)([iA.default], () => iA.default.getUser(t)),
        l = xA.Ay.getFormattedName(s),
        r = S.useCallback(() => {
            (0, CN.kj)(t);
        }, [t]),
        a = S.useCallback(() => (0, TS.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: n }), [t, n]);
    return (
        S.useEffect(() => {
            (0, Cb.getUser)(t);
        }, [t]),
        (0, E.jsxs)("div", {
            className: Cy.uW,
            children: [
                null != s && (0, E.jsx)(Cv.A, { className: Cy.my, user: s, size: nt._3.SIZE_40 }),
                (0, E.jsxs)("div", {
                    className: Cy.Qq,
                    children: [
                        (0, E.jsx)(en.D, {
                            className: Cy.Xh,
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
                (0, E.jsx)(en.D, { onClick: r, className: Cy.Qz, children: (0, E.jsx)(rK.u, { size: "xs" }) }),
            ],
        })
    );
}
function CO(e) {
    let { className: t, userId: i, verification: n, index: s } = e,
        l = (0, CN.tC)(n.timestamp),
        r = S.useCallback(() => {
            (0, CN.W0)(i, n.verifiedKey);
        }, [n.verifiedKey, i]);
    return (0, E.jsxs)("div", {
        className: t,
        children: [
            (0, E.jsxs)("div", {
                className: Cy.Qq,
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
                className: Cy.Kk,
                onClick: r,
                children: (0, E.jsx)(gw.P, { size: "md", color: er.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function CR(e) {
    let { userId: t } = e,
        i = (0, g.yK)([CI.A], () =>
            e$()(CI.A.getUserVerifiedKeys(t))
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
            (0, E.jsx)(Cj, { userId: t, count: i.length }),
            i.map((e, n) =>
                (0, E.jsxs)(
                    S.Fragment,
                    {
                        children: [
                            (0, E.jsx)(CO, { className: Cy.nM, userId: t, index: n, verification: e }),
                            n !== i.length - 1 && (0, E.jsx)("div", { className: Cy.yF }),
                        ],
                    },
                    `${n}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var CL = i(756625);
let CD = (0, a.E2)(u.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["5b3FNI"])],
        usePredicate: function () {
            let e = CC();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = CC();
            return (0, E.jsxs)(_$.h, {
                children: [
                    (0, E.jsx)(_$._, {
                        header: j.intl.string(j.t["5b3FNI"]),
                        description: j.intl.format(j.t.jrTSWU, { helpArticle: (0, CN.dc)() }),
                    }),
                    e.map((e) => (0, E.jsx)("div", { className: CL.A, children: (0, E.jsx)(CR, { userId: e }) }, e)),
                ],
            });
        },
    }),
    CP = (0, a.zZ)(u.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => j.intl.string(j.t.bTwjaz),
        usePredicate: () => (0, eZ.isDesktop)(),
        buildLayout: () => [C_, CD],
    }),
    CG = (0, a.t_)(u.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => j.intl.string(j.t.OAuOHD),
        buildLayout: () => [Cg, Cx, CP],
    }),
    CM = (0, a.i4)(u.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.OAuOHD),
        icon: I8.m,
        buildLayout: () => [CG],
    });
var CU = i(476713);
let CV = (0, a.AK)(u.X.CONNECTED_GAMES_AUTHORIZED_APPS_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.O65dzZ),
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        destinationKey: u.X.AUTHORIZED_APPS_CATEGORY,
    }),
    Ck = (0, a.gN)(u.X.CONNECTED_GAMES_RELATED_SETTINGS, { buildLayout: () => [CV] }),
    Cw = (0, a.E2)(u.X.CONNECTED_GAMES_UNAVAILABLE, {
        Component: function () {
            let { showLoadingIndicator: e } = _p(!0, !0);
            return e ? (0, E.jsx)(dA.y, {}) : (0, E.jsx)(__, {});
        },
        useSearchTerms: () => [j.intl.string(j.t["+0U77d"])],
        usePredicate: () => {
            let { showLoadingIndicator: e, slayerSdkApplications: t } = _p(!0, !0);
            return e || 0 === t.length;
        },
    });
function CF() {
    let { slayerSdkApplications: e, showLoadingIndicator: t } = _p(!0, !0);
    return {
        sortedGames: S.useMemo(() => e.toSorted((e, t) => db.default.compare(t.id, e.id)), [e]),
        showLoadingIndicator: t,
    };
}
i(839272);
let CB = (0, a.zZ)(u.X.SPAM_FILTERS_CATEGORY, { useTitle: () => j.intl.string(j.t.Qwuoic), buildLayout: () => [Ii] }),
    Cz = (0, a.zZ)(u.X.CONNECTED_GAMES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.RyvebU),
        useSubtitle: function () {
            let { sortedGames: e } = CF();
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
        useHeaderDecoration: () => {
            let e = (function () {
                let { sortedGames: e } = CF();
                return S.useMemo(() => {
                    let t = e[0];
                    if (null == t) return null;
                    let i = e[1];
                    return {
                        frontIcon: {
                            icon: (0, E.jsx)("img", {
                                src: na.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                                alt: t.name,
                                width: f.CD,
                                height: f.CD,
                            }),
                            shape: f.e0.ROUNDED,
                        },
                        ...(null != i && {
                            backIcon: {
                                icon: (0, E.jsx)("img", {
                                    src: na.Ay.getApplicationIconURL({ id: i.id, icon: i.icon }),
                                    alt: i.name,
                                    width: f.YP,
                                    height: f.YP,
                                }),
                                shape: f.e0.ROUNDED,
                            },
                        }),
                    };
                }, [e]);
            })();
            return { type: h.WX.STACKED_ICONS, icons: e };
        },
        useSearchTerms: () => [j.intl.string(j.t.YpCiMt)],
        initialize: () => {
            Sx.A.fetch();
        },
        buildLayout: () => [_v, _y, Cw, Ck],
    }),
    CY = (0, a.t_)(u.X.MESSAGING_PERMISSIONS_PANEL, {
        useTitle: () => j.intl.string(j.t.Cz07t8),
        buildLayout: () => [In, CB, I1, Ig, Cz, II],
    }),
    CX = (0, a.i4)(u.X.MESSAGING_PERMISSIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.Cz07t8),
        icon: CU.l,
        buildLayout: () => [CY],
    });
var CH = i(782603),
    CK = i(899847),
    CW = i(695515),
    CZ = i(936926);
let Cq = (0, a.Hn)(u.X.MOBILE_NOTIFICATION_DELAY, {
        useTitle: () => j.intl.string(j.t["8rHeOr"]),
        useSubtitle: () => j.intl.string(j.t["eJE6+J"]),
        useValue: L.cU.useSetting,
        setValue: L.cU.updateSetting,
        useOptions: () =>
            eJ
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
            j.intl.format(j.t.Q5crhR, { onClick: () => (0, eq.openUserSettings)(u.X.TTS_PLAYBACK_RATE) }),
        useValue: L.on.useSetting,
        setValue: L.on.updateSetting,
    }),
    CJ = (0, a.Qx)(u.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.JZxxGx),
        useSubtitle: () => j.intl.string(j.t.HDLtJl),
        useValue: () => (0, g.bG)([uP.A], () => uP.A.getTTSType()),
        setValue: (e) => uk.default.setTTSType(e),
        useOptions: function () {
            return [
                { name: j.intl.string(j.t.B1AGeJ), value: U.aVn.ALL_CHANNELS },
                { name: j.intl.string(j.t.uzZg9e), value: U.aVn.SELECTED_CHANNEL },
                { name: j.intl.string(j.t.DYO5Oi), value: U.aVn.NEVER },
            ];
        },
        usePredicate: () => nh.$j,
    }),
    C$ = u.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    C0 = (0, a.bd)(C$, {
        useTitle: (e) => (e ? j.intl.string(j.t.RyimDk) : j.intl.string(j.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return sb(C$, {
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
        buildLayout: () => [Cq, CQ, CJ],
    }),
    C1 = (0, a.zZ)(u.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => j.intl.string(j.t["31DySj"]),
        buildLayout: () => [C0],
    }),
    C2 = (0, a.zD)(u.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => j.intl.string(j.t.VH8AIJ),
        useSubtitle: () => j.intl.string(j.t["9K4qwX"]),
        useValue: function () {
            return (0, g.bG)([uP.A], () => !uP.A.getDisableUnreadBadge());
        },
        setValue: (e) => uk.default.setDisableUnreadBadge(!e),
    }),
    C3 = (0, a.zZ)(u.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.l6w3Vj),
        buildLayout: () => [C2],
    });
var C5 = i(840559),
    C6 = i(997187),
    C4 = i(723923);
let C8 = C4.px.map((e) =>
        (0, a.zD)(`${u.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                (function (e) {
                    let { categories: t } = (0, g.cf)([C6.A], () => C6.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, C5.CA)(e.category, t),
        }),
    ),
    C7 = (0, a.Tf)(u.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => j.intl.string(j.t.Ra9Pwk),
        useSubtitle: () => j.intl.string(j.t.iYjQ8X),
        useLabel: () => j.intl.string(j.t.KT1pBA),
        useDisabled: function () {
            let { categories: e } = (0, g.cf)([C6.A], () => C6.A.getEmailSettings());
            return C4.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, C5.NI)(),
        useVariant: () => "critical-secondary",
    }),
    C9 = (0, a.zZ)(u.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => j.intl.string(j.t["w/qqKK"]),
        initialize: function () {
            let { initialized: e } = C6.A.getEmailSettings();
            e || (0, C5.cR)();
        },
        buildLayout: () => [...C8, C7],
    }),
    be = (0, a.zD)(u.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t["/0WCll"]),
        useSubtitle: () => j.intl.string(j.t.wF9ih3),
        useValue: function () {
            return (0, g.bG)([uP.A], () => uP.A.getDesktopType()) !== U.nRU.NEVER;
        },
        setValue: (e) => uk.default.setDesktopType(e ? U.nRU.ALL : U.nRU.NEVER),
    });
var bt = i(832712),
    bi = i(543465),
    bn = i(790782);
let bs = (0, a.zD)(u.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => j.intl.string(j.t["k6m/si"]),
    useSubtitle: () => j.intl.string(j.t.LGynPs),
    useValue: () => (0, g.bG)([bi.Ay], () => bi.Ay.useNewNotifications),
    setValue: function (e) {
        bt.A.setAccountFlag(M.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (ED.w.set("turnedOffNewNotifications", !0),
                G.default.track(U.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: eh.A.getGuildsArray().filter(
                        (e) => bi.Ay.resolveGuildUnreadSetting(e) === bn.e.ONLY_MENTIONS,
                    ).length,
                }));
    },
    usePredicate: () =>
        (0, g.bG)(
            [iA.default, bi.Ay],
            () =>
                iA.default.getCurrentUser()?.isStaff() ||
                iA.default.getCurrentUser()?.isStaffPersonal() ||
                bi.Ay.useNewNotifications,
        ),
});
var bl = i(534654);
let br = (0, a.zD)(u.X.SCREEN_DOWNTIME_REMINDER, {
        useTitle: () => j.intl.string(j.t.z9h8Ym),
        useSubtitle: () => j.intl.string(j.t.TummoQ),
        useValue: () => (0, g.bG)([uP.A], () => uP.A.screenDowntimeReminder),
        setValue: (e) => uk.default.setScreenDowntimeReminder(e),
        usePredicate: function () {
            let e = (0, CZ.Vh)({ location: "ScreenDowntimeReminderSetting" }),
                t = (0, bl.A)(),
                i = (0, Nu.Du)();
            return e && t && i;
        },
    }),
    ba = (0, a.zD)(u.X.SCREEN_DOWNTIME_SCHEDULE, {
        useTitle: () => j.intl.string(j.t.onrAy7),
        useSubtitle: () => j.intl.string(j.t["/071J7"]),
        useValue: L.gY.useSetting,
        setValue: (e) => L.gY.updateSetting(e),
        usePredicate: function () {
            let e = (0, CZ.Vh)({ location: "ScreenDowntimeScheduleSetting" }),
                t = (0, bl.A)(),
                i = (0, Nu.Du)();
            return e && t && i;
        },
    });
var bo = i(70730);
let bu = (0, a.zD)(u.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.NjOMvh),
        useValue: L.oz.useSetting,
        setValue: function (e) {
            L.oz.updateSetting(e),
                G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: M.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                });
        },
        useSearchTerms: () => [j.intl.string(j.t.hi4dSk)],
        usePredicate: () => {
            let { enabled: e } = bo.u.getConfig({ location: "FriendAnniversaryNotifications" });
            return e;
        },
    }),
    bd = (0, w.mj)({
        kind: "user",
        name: "2026-03-friend-is-online-v3",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    bc = (0, a.zD)(u.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.sQQgFj),
        useValue: L.NR.useSetting,
        setValue: function (e) {
            L.NR.updateSetting(e),
                G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: M.Y.ACCOUNT,
                    friend_online_notifications: e,
                });
        },
        usePredicate: () => bd.useConfig({ location: "FriendOnlineNotifications" }).showSettingsToggle,
    }),
    bg = (0, a.zD)(u.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.FSNIvs),
        useValue: L.Yh.useSetting,
        setValue: function (e) {
            L.Yh.updateSetting(e),
                G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: M.Y.ACCOUNT,
                    go_live_notifications: e,
                });
        },
    }),
    bm = (0, w.mj)({
        kind: "user",
        name: "2026-01-profile-updates-notification",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 0: { showSettingsToggle: !1 }, 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    bA = (0, a.zD)(u.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.xBLMhQ),
        useValue: L.T3.useSetting,
        setValue: function (e) {
            L.T3.updateSetting(e),
                G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: M.Y.ACCOUNT,
                    profile_updates_notifications: e,
                });
        },
        usePredicate: () => bm.useConfig({ location: "user_settings.ProfileUpdatesNotifications" }).showSettingsToggle,
    });
var bh = i(815807);
let bE = (0, a.Hn)(u.X.REACTION_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: j.intl.string(j.t["9x/RtT"]), value: H.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: j.intl.string(j.t.fJAbQd), value: H.Tz.ONLY_DMS },
            { id: "disabled", label: j.intl.string(j.t["xu+UDU"]), value: H.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: L.Zp.useSetting,
        setValue: (e) => (0, bh.n4)(e, L.Zp.getSetting()),
    }),
    bS = (0, a.zD)(u.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t["k51K1+"]),
        useValue: L.Qr.useSetting,
        setValue: function (e) {
            L.Qr.updateSetting(e),
                G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: M.Y.ACCOUNT,
                    server_trending_notifications: e,
                });
        },
        usePredicate: () => !1,
    }),
    bT = (0, w.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    bx = (0, a.zD)(u.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.G8NPz6),
        useValue: L.zS.useSetting,
        setValue: function (e) {
            L.zS.updateSetting(e),
                G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: M.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                });
        },
        usePredicate: () => bT.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    bp = (0, a.FW)(u.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.FEVRDV),
        buildLayout: () => [bg, bu, bc, bS, bx, bA, bE],
    }),
    bf = (0, a.zD)(u.X.TASK_BAR_FLASHING, {
        useTitle: () => j.intl.string(j.t.xSmFQG),
        useSubtitle: () => j.intl.string(j.t.bd4j4x),
        useValue: () => (0, g.bG)([uP.A], () => uP.A.taskbarFlash),
        setValue: (e) => uk.default.setTaskbarFlash(e),
        usePredicate: () => (0, c.uF)(),
    }),
    bN = (0, a.zZ)(u.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => j.intl.string(j.t["/dp6yY"]),
        buildLayout: () => [be, bf, bp, bs, ba, br],
    });
var b_ = i(965957),
    bI = i(312671),
    bC = i(235079);
let bb = (0, a.zD)(u.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = uG.A.useHolidaySoundpack();
        return null == e ? "" : j.intl.format(j.t["E/OyBr"], { soundpack: j.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, g.bG)([bI.A], () => bI.A.getSoundpack()),
            t = uG.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = uG.A.getHolidaySoundpack();
        tZ()(null != t, "predicate should fail if no soundpack is available"), (0, b_.p)(e ? t : bC.i.CLASSIC);
    },
    usePredicate: uG.A.useIsEligible,
});
var bv = i(970931);
let by = {
        useTitle: () => j.intl.string(j.t.jD1qzM),
        sound: "message1",
        useDisabled: bv.kB,
        useDisabledMessage: () => ((0, bv.kB)() ? j.intl.string(j.t.cIRG0s) : void 0),
    },
    bj = { useTitle: () => j.intl.string(j.t.XBrJT6), sound: "call_ringing" },
    bO = (0, a.zD)(u.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.TzjwV9),
        useSubtitle: () => j.intl.format(j.t.OOiGCM, { onClick: () => uB("message3") }),
        useValue: () =>
            (0, g.bG)([uP.A], () => uP.A.getNotifyMessagesInSelectedChannel() && !uP.A.getDisableAllSounds()),
        setValue: (e) => uk.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, g.bG)([uP.A], () => uP.A.getDisableAllSounds()),
    }),
    bR = (0, a.zD)(u.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => j.intl.string(j.t["2ZhCOd"]),
        useSubtitle: () => j.intl.string(j.t.EAKdPr),
        useValue: () => (0, g.bG)([uP.A], () => uP.A.getDisableAllSounds()),
        setValue: (e) => uk.default.toggleDisableAllSounds(e),
    }),
    bL = (0, a.D1)(u.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                uF();
            };
        },
        buildLayout: () => [uz(by), bO, uz(bj), bR],
    }),
    bD = (0, a.AK)(u.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t["MMy+lm"]),
        useSearchTerms: () => [j.intl.string(j.t["MMy+lm"])],
        destinationKey: u.X.SOUNDS_CATEGORY,
    }),
    bP = (0, a.gN)(u.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [bD] }),
    bG = (0, a.zZ)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.LweOYy),
        buildLayout: () => [bb, bL, bP],
    }),
    bM = (0, a.t_)(u.X.NOTIFICATIONS_PANEL, {
        useTitle: () => j.intl.string(j.t.HcoRu0),
        initialize: () => {
            !(0, CZ.Eq)({ location: "NotificationsPanel" }) ||
                null != CW.A.getAgeGroup() ||
                CW.A.isLoading() ||
                (CW.A.canRefetch() && CK.Ay.initialPageLoad());
        },
        buildLayout: () => [bN, bG, C3, C9, C1],
    }),
    bU = (0, a.i4)(u.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.HcoRu0),
        icon: CH.X,
        buildLayout: () => [bM],
    }),
    bV = (0, a.WI)(u.X.USER_SECTION, {
        useTitle: () => j.intl.string(j.t.ShSTDe),
        hideTitle: !0,
        buildLayout: () => {
            let e = (0, o.Bv)("UserSection");
            return [Ny, ...(e ? [] : [I4]), CM, ...(e ? [CX] : []), ...(e ? [] : [NL]), ...(e ? [] : [_T]), bU, _A];
        },
    });
var bk = i(387758),
    bw = i(271866),
    bF = i(147964),
    bB = i(868511);
let bz = (0, a.zD)(u.X.APPLICATION_TEST_MODE, {
        useTitle: () => j.intl.string(j.t.erOqlh),
        useSubtitle: () => j.intl.string(j.t["52hMnD"]),
        usePredicate: L.Q_.useSetting,
        useValue: () => (0, g.bG)([bF.A], () => null != bF.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, K.openModal)((e) => (0, E.jsx)(bB.A, { ...e })) : bw.cL();
        },
    }),
    bY = (0, a.zD)(u.X.DEVELOPER_MODE, {
        useTitle: () => j.intl.string(j.t.ObIb1Q),
        useSubtitle: () => j.intl.format(j.t["CY6q/Q"], { apiDocsUrl: U.X7G.API_DOCS }),
        useValue: L.Q_.useSetting,
        setValue: L.Q_.updateSetting,
        usePredicate: () => cz.p5,
    }),
    bX = (0, a.zZ)(u.X.DEVELOPER_CATEGORY, { buildLayout: () => [bY, bz] }),
    bH = (0, a.t_)(u.X.DEVELOPER_PANEL, { useTitle: () => j.intl.string(j.t["0BRxRp"]), buildLayout: () => [bX] }),
    bK = (0, a.i4)(u.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: bk.G,
        useTitle: () => j.intl.string(j.t["0BRxRp"]),
        buildLayout: () => [bH],
    });
var bW = i(70688),
    bZ = i(830215);
let bq = (0, a.i4)(u.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => j.intl.string(j.t["2jxGer"]),
        icon: bW.o,
        onClick: () => {
            (0, l2.A)({
                title: j.intl.string(j.t["2jxGer"]),
                subtitle: j.intl.string(j.t.SUnWBB),
                confirmText: j.intl.string(j.t["2jxGer"]),
                onConfirm: () => {
                    bZ.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    bQ = (0, a.WI)(u.X.UTILITY_SECTION, {
        useTitle: () => j.intl.string(j.t["2kOEFe"]),
        hideTitle: !0,
        buildLayout: () => [bK, bq],
    }),
    bJ = (0, a.Hr)({
        buildLayout: function () {
            return [pw, bV, h7, dd, (0, o.Bv)("UserSettingsRoot_buildLayout") ? Tc : i8, ST, bQ];
        },
        analyticsKey: "user_settings",
    });
