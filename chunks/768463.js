i.d(t, { D: () => va });
var n,
    l,
    s,
    r,
    a = i(419954),
    o = i(358776),
    u = i(780964),
    d = i(682348),
    c = i(574381),
    g = i(17928),
    m = i(952818),
    A = i(871633),
    h = i(107384),
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
    let [n, l] = (0, g.yK)([x.A], () => [t, i].map(x.A.getApplication), [t, i]);
    return null == t
        ? null
        : {
              frontIcon: { icon: (0, E.jsx)(p.A, { game: n, size: p.M.MEDIUM_LARGE }), shape: f.e0.ROUNDED },
              backIcon:
                  null != i ? { icon: (0, E.jsx)(p.A, { game: l, size: p.M.MEDIUM }), shape: f.e0.ROUNDED } : null,
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
        let l = (0, W.g8)(n, e);
        if (null == l) return;
        let s = (0, W.Xc)(e);
        (0, K.openModalLazy)(async () => {
            let { default: e } = await Promise.all([i.e("81849"), i.e("62041"), i.e("41996")]).then(i.bind(i, 32167));
            return (t) =>
                (0, E.jsx)(e, { ...t, direction: l.direction, affectedGuildIds: l.affectedGuildIds, settingName: s });
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
    el = i(834730),
    es = i(847374),
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
        l = (0, ec.Rb)(t);
    return null != n
        ? (0, E.jsx)("img", { src: n, alt: t.name, height: i, width: i })
        : (0, E.jsx)("div", {
              className: eg.F,
              children: (0, E.jsx)(el.E, {
                  color: "text-subtle",
                  variant: 48 === i ? "text-md/semibold" : "text-xxs/semibold",
                  children: l,
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
                l = t.includes(i.id);
            return !n && l ? -1 : n && !l ? 1 : 0;
        }),
    "activity-sharing-off": (e, t) =>
        e.concat().sort((e, i) => {
            let n = t.includes(e.id),
                l = t.includes(i.id);
            return n && !l ? -1 : !n && l ? 1 : 0;
        }),
    "server-order": (e) => e,
};
var ex = i(775657);
function ep(e) {
    let { guild: t, isActivityRestricted: i, onToggleActivityRestrictedGuild: n } = e,
        l = (0, g.bG)([eu.A], () => eu.A.getMemberCount(t.id));
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
                    description: j.intl.format(j.t.zRl6XR, { count: l ?? 0 }),
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
            setSearchQuery: l,
            sortOrder: s,
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
                l = (0, g.bG)([eE.Ay], () => eE.Ay.getFlattenedGuildIds()),
                s = (0, g.bG)([eh.A], () => eh.A.getGuilds()),
                r = l.map((e) => s[e]).filter(Boolean),
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
                h = m.map((e) => s[e.id]).filter(Boolean);
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
                    c ? d([]) : d(l);
                },
                numTotalGuilds: l.length,
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
        x = T.find((e) => e.value === s)?.label ?? "";
    return (0, E.jsxs)("div", {
        className: ex.iE,
        children: [
            t,
            (0, E.jsxs)("div", {
                className: ex.N1,
                children: [
                    (0, E.jsx)($.I, {
                        query: n,
                        onChange: l,
                        onClear: function () {
                            G.default.track(U.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_cleared",
                                sort_order: s,
                                activity_restricted_guild_count: c,
                                total_guild_count: m,
                            }),
                                l("");
                        },
                        onFocus: () =>
                            G.default.track(U.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_focused",
                                sort_order: s,
                                activity_restricted_guild_count: c,
                                total_guild_count: m,
                            }),
                        onBlur: () =>
                            G.default.track(U.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_blurred",
                                sort_order: s,
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
                                                            checked: s === n,
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
                                                (0, E.jsx)(el.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: x,
                                                }),
                                                (0, E.jsx)(es.a, { size: "xs", color: er.A.colors.TEXT_SUBTLE }),
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
                            children: (0, E.jsx)(el.E, {
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
            return (0, E.jsx)(el.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: j.intl.format(j.t.Mf0720, {
                    privacySettingsHook: (e, t) =>
                        (0, E.jsx)(
                            el.E,
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
                children: (0, E.jsx)(el.E, {
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
        l = eH.Ay.getOverlayChatKeybind();
    return {
        enabled: eK.default.enabled,
        notifications_enabled: i,
        notifications_position: i ? t : null,
        text_notifications_mode: eY.A.isNotificationDisabled(e1.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != n ? (0, e0.dI)(n.shortcut) : null,
        text_activation_hotkey: null != l ? (0, e0.dI)(l.shortcut) : null,
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
        description: l,
        action: s,
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
                                    (0, E.jsx)(el.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: te.SZ,
                                        children: n,
                                    }),
                                    null != l &&
                                        (0, E.jsx)(el.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: l,
                                        }),
                                    null != r &&
                                        (0, E.jsx)(el.E, {
                                            variant: "text-xxs/medium",
                                            color: "text-muted",
                                            children: r,
                                        }),
                                ],
                            }),
                            (0, E.jsx)("div", { className: te.a$, children: s }),
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
var tl = i(812729),
    ts = i.n(tl),
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
            ts(),
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
    let n, l;
    (n = Date.now()),
        (null != (l = Array.from(tC.values()).reduce((e, t) => Math.max(e, t), 0)) && n - l < tI) ||
            Array.from(tC.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, K.openModalLazy)(async () => {
                let n,
                    { default: l } = await Promise.all([i.e("79969"), i.e("82318")]).then(i.bind(i, 387101));
                return (n = Date.now()), tC.add(n), (i) => (0, E.jsx)(l, { ...i, clientSettingType: e, gameId: t });
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
    let { children: t, className: i, onExpand: n, ...l } = e,
        [s, r] = S.useState(!1);
    return (0, E.jsx)(tG.N, {
        className: te.uR,
        collapsibleContent: (0, E.jsx)("div", { className: te.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, E.jsx)(ti, {
                ...l,
                onClick: (e) => {
                    var i;
                    r((i = !s)), n?.(i), t?.(e);
                },
                className: e7()(te.AC, i),
                action: (0, E.jsxs)("div", {
                    className: te.rc,
                    children: [
                        l.action,
                        s
                            ? (0, E.jsx)(es.a, {
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
                ts(),
            ),
            { data: l } = (0, tT.I)(n?.applicationId),
            { enabledLegacy: s, enabledOOP: r } = (0, g.cf)(
                [tL.A, tD.A, tS.A],
                () =>
                    null == e && null == n
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: n?.legacyEnabled ?? !1, enabledOOP: n?.oopEnabled ?? !1 }
                          : (0, m.hw)(e, !1, [tL.A, tD.A, tS.A]),
                [e, n],
            ),
            a = (0, g.bG)(
                [m.Ay, tL.A, tD.A, tS.A],
                () => (null == e ? null : (0, m.xU)(e, m.Ay, tL.A, tD.A, tS.A)),
                [e],
                ts(),
            ),
            [o, u] = S.useState(r),
            [d, c] = S.useState(s),
            [A, h] = S.useState(!1);
        S.useEffect(() => {
            u(r), c(s);
        }, [r, s]);
        let T = !(0, tP.supportsLegacy)(),
            x = !(0, tP.supportsOutOfProcess)(),
            { legacyEnabled: f, oopEnabled: N } = (0, g.cf)([tN.default], () => tN.default.getGlobalEnabledStatus());
        function _(t, i) {
            if (null == e) return;
            let n = !1,
                l = !1;
            switch (i) {
                case tp.OverlayToggledClientSettingType.LEGACY_GAME:
                    c(t), tm.Ay.toggleOverlay(e, t, o), (n = !t && d);
                    break;
                case tp.OverlayToggledClientSettingType.OOP_GAME:
                    u(t), tm.Ay.toggleOverlay(e, d, t), (l = !t && o);
                    break;
                case tp.OverlayToggledClientSettingType.LEGACY:
                    tA.A.setEnabled(t, N), (0, tp.Q3)(t, tp.OverlayToggledClientSettingType.LEGACY, e.id ?? null);
                    break;
                case tp.OverlayToggledClientSettingType.OOP:
                    tA.A.setEnabled(f, t), (0, tp.Q3)(t, tp.OverlayToggledClientSettingType.OOP, e.id ?? null);
            }
            (n || l) &&
                tb(
                    n ? tp.OverlayToggledClientSettingType.LEGACY_GAME : tp.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        }
        let I = T && x,
            C = !f && !N,
            b = !o && !f && d && !T,
            v = !d && !N && o && !x,
            y = n?.overlayMethod === tf.Ue.Disabled,
            O = n?.state === tf.AR.OVERLAY_RENDERING && !y,
            R = n?.state != null && tU.has(n.state) && !y,
            L = n?.overlayMethod === tf.Ue.OutOfProcess,
            D = n?.overlayMethod === tf.Ue.OutOfProcessLimitedInteraction,
            P = n?.overlayMethod === tf.Ue.Hook,
            G = n?.state === tf.AR.OVERLAY_CRASHED || n?.state === tf.AR.OVERLAY_CRASHED_DISABLED,
            M = !o && !d,
            [U, V] = (function () {
                switch (!0) {
                    case O && L:
                        return [
                            j.intl.format(j.t.hFVBIg, {
                                overlayMethod: j.intl.string(j.t.a3eXSw),
                                overlayMethodHook: function (e, t) {
                                    return (0, E.jsx)(
                                        el.E,
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
                    case O && D:
                        return [
                            j.intl.format(j.t.hFVBIg, {
                                overlayMethod: j.intl.string(j.t["506Aba"]),
                                overlayMethodHook: function (e, t) {
                                    return (0, E.jsx)(
                                        el.E,
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
                    case O && P:
                        return [
                            j.intl.format(j.t.hFVBIg, {
                                overlayMethod: j.intl.string(j.t.bvlpDR),
                                overlayMethodHook: function (e, t) {
                                    return (0, E.jsx)(
                                        el.E,
                                        { tag: "span", variant: "text-sm/medium", color: "text-strong", children: e },
                                        t,
                                    );
                                },
                            }),
                            (function () {
                                switch (!0) {
                                    case n?.fullscreenType !== th.aI.BORDERLESS_FULLSCREEN:
                                        return j.intl.string(j.t.mJmbeC);
                                    case x:
                                        return j.intl.string(j.t.C7bLTQ);
                                    case !n?.oopEnabled:
                                        return j.intl.string(j.t.WiY24u);
                                    case !N:
                                        return j.intl.string(j.t.cAFVsL);
                                    case !(l?.supportsOutOfProcessOverlay ?? !0):
                                        return j.intl.string(j.t.XcGEcs);
                                    default:
                                        return j.intl.string(j.t.bJXH2v);
                                }
                            })(),
                        ];
                    case G:
                        return [j.intl.string(j.t.OFC2aw), null];
                    case I:
                        return [j.intl.string(j.t.m7X4az), null];
                    case C:
                        return [j.intl.string(j.t["9DUS5l"]), null];
                    case M:
                        return [j.intl.string(j.t.nQ9EdJ), null];
                    case b:
                    case v:
                        return [j.intl.string(j.t.VWUn0a), null];
                    case R:
                        if (L) return [j.intl.string(j.t["s8+CFq"]), null];
                        if (P) return [j.intl.string(j.t.JEEdqt), null];
                        if (D) return [j.intl.string(j.t.pzBMwY), null];
                        return [j.intl.string(j.t["2Xhy9k"]), null];
                    case null == n:
                        return [j.intl.string(j.t.vwHPRi), null];
                    case y: {
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
        let [k, w] = S.useMemo(
            () =>
                R
                    ? ["text-muted", er.A.colors.TEXT_MUTED.css]
                    : O && D
                      ? ["text-feedback-warning", er.A.colors.TEXT_FEEDBACK_WARNING.css]
                      : O && L
                        ? ["text-feedback-positive", er.A.colors.TEXT_FEEDBACK_POSITIVE.css]
                        : O && P
                          ? ["text-strong", er.A.colors.TEXT_STRONG.css]
                          : ["interactive-text-default", er.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
            [R, O, D, L, P],
        );
        return null == e
            ? null
            : (0, E.jsxs)(tV, {
                  onExpand: h,
                  className: A ? te.tx : void 0,
                  title: (0, E.jsxs)(E.Fragment, {
                      children: [
                          t?.name ?? a?.name ?? e?.gameName ?? "",
                          null != a && a.verified
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
                  description: U,
                  hint: null != V ? V : void 0,
                  header: (0, E.jsxs)(E.Fragment, {
                      children: [
                          O || R
                              ? (0, E.jsx)(tg.k, { size: "xxs", color: w })
                              : (0, E.jsx)("div", { className: te.W4 }),
                          (0, E.jsx)(el.E, {
                              variant: "text-xs/semibold",
                              color: k,
                              children: j.intl.string(j.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, E.jsx)(p.A, { game: t, pid: e?.pid, size: p.M.MEDIUM }),
                  "aria-label": j.intl.string(j.t["87O5GC"]),
                  action: (0, E.jsx)(en.D, {
                      onClick: (e) => tt(e),
                      children: (0, E.jsx)(J.d, {
                          checked: (o && N) || (d && f),
                          disabled: I,
                          onChange: (t) => {
                              !(function (t, i) {
                                  if (null == e) return;
                                  let n = !1,
                                      l = !1;
                                  switch (i) {
                                      case "game":
                                          tm.Ay.toggleOverlay(e, t, t), c(t), u(t), (n = !t && d), (l = !t && o);
                                          break;
                                      case "global":
                                          tA.A.setEnabled(t, t), (n = !t && f), (l = !t && N);
                                          break;
                                      case "both":
                                          tA.A.setEnabled(t, t),
                                              tm.Ay.toggleOverlay(e, t, t),
                                              c(t),
                                              u(t),
                                              (n = (!t && f) || (!t && d)),
                                              (l = (!t && N) || (!t && o));
                                  }
                                  let s = null;
                                  n
                                      ? (s =
                                            "game" === i
                                                ? tp.OverlayToggledClientSettingType.LEGACY_GAME
                                                : tp.OverlayToggledClientSettingType.LEGACY)
                                      : l &&
                                        (s =
                                            "game" === i
                                                ? tp.OverlayToggledClientSettingType.OOP_GAME
                                                : tp.OverlayToggledClientSettingType.OOP),
                                      null != s && tb(s, e.id ?? null);
                              })(
                                  t,
                                  (function (e, t) {
                                      let i = !t && e,
                                          n = !N && o,
                                          l = !f && d,
                                          s = !o && N,
                                          r = !d && f;
                                      switch (!0) {
                                          case i && (n || l) && (s || r):
                                              return "both";
                                          case i && (n || l):
                                              return "global";
                                          default:
                                              return "game";
                                      }
                                  })(t, (o && N) || (d && f)),
                              );
                          },
                      }),
                  }),
                  warning: (0, E.jsx)(tR, { className: te.Hh, game: e }),
                  children: [
                      (0, E.jsx)(ti, {
                          title: j.intl.string(j.t["7BlVIs"]),
                          description: j.intl.string(j.t.ndgADE),
                          hint: N ? void 0 : j.intl.string(j.t.cAFVsL),
                          "aria-label": j.intl.string(j.t["7BlVIs"]),
                          action: (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(J.d, {
                                      checked: o && N,
                                      disabled: x,
                                      onChange: (e) => {
                                          e && !N
                                              ? _(e, tp.OverlayToggledClientSettingType.OOP)
                                              : _(e, tp.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, E.jsx)("div", { className: te.Kz }),
                              ],
                          }),
                      }),
                      (0, E.jsx)(ti, {
                          title: j.intl.string(j.t.BfFpW1),
                          description: j.intl.string(j.t.OzInYk),
                          hint: f ? void 0 : j.intl.string(j.t["3sYHXm"]),
                          "aria-label": j.intl.string(j.t.BfFpW1),
                          action: (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(J.d, {
                                      checked: d && f,
                                      disabled: T,
                                      onChange: (e) => {
                                          e && !f
                                              ? _(e, tp.OverlayToggledClientSettingType.LEGACY)
                                              : _(e, tp.OverlayToggledClientSettingType.LEGACY_GAME);
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
        l = (0, g.bG)([x.A], () => (null != i ? i : x.A.getApplication(t?.id)), [i, t]);
    return (0, E.jsx)(p.A, { game: l, pid: n, size: p.M.SMALL });
}
function tz(e) {
    let {
        rawGame: t,
        gameApplication: i,
        supportDisabled: n,
        getEnabledFromStatus: l,
        onChange: s,
        clientSettingType: r,
        ariaLabel: a,
    } = e;
    (0, tT.I)(t?.id);
    let o = (0, g.cf)([m.Ay, tL.A, tD.A, tS.A], () => (0, m.xU)(t, m.Ay, tL.A, tD.A, tS.A)),
        u = (0, g.cf)([tL.A, tD.A, tS.A], () => (0, m.hw)(t, !1, [tL.A, tD.A, tS.A]), [t]),
        d = l(u),
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
                            return (i = !e && c), void (A(e), s(e, o, u), i && tb(r, o.id ?? t?.id ?? null));
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
                l = (0, g.yK)([m.Ay], () => m.Ay.getGamesSeen(!0)).filter((e) => !(0, A.n1)(e)),
                s = (0, tr.A)(l.map((e) => e.id)),
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
            return 0 === l.length
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
                              children: (0, E.jsx)(el.E, {
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
                                          clientSettingType: tp.OverlayToggledClientSettingType.LEGACY_GAME,
                                          supportDisabled: r,
                                          gameApplication: s[t],
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
                l = !(0, tP.supportsOutOfProcess)(),
                s = (0, g.yK)([m.Ay], () => m.Ay.getGamesSeen(!0)).filter((e) => !(0, A.n1)(e)),
                r = (0, tr.A)(s.map((e) => e.id));
            function a(e) {
                let t = !e && i;
                tA.A.setEnabled(n, e);
                let l = m.Ay.getCurrentGameForAnalytics()?.id ?? null;
                (0, tp.Q3)(e, tp.OverlayToggledClientSettingType.OOP, l),
                    t && tb(tp.OverlayToggledClientSettingType.OOP, l);
            }
            function o(e, t, i) {
                let { enabledLegacy: n } = i;
                tm.Ay.toggleOverlay(t, e, n);
            }
            let u = S.useMemo(
                () => (tF.O ? (l ? j.intl.string(j.t.C7bLTQ) : j.intl.string(j.t.ndgADE)) : j.intl.string(j.t.m7X4az)),
                [l],
            );
            return 0 === s.length
                ? (0, E.jsx)(ti, {
                      title: j.intl.string(j.t["7BlVIs"]),
                      description: u,
                      "aria-label": j.intl.string(j.t["7BlVIs"]),
                      className: te.dA,
                      action: (0, E.jsxs)(E.Fragment, {
                          children: [
                              (0, E.jsx)(J.d, { checked: i, disabled: l, onChange: (e) => a(e) }),
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
                          children: (0, E.jsx)(J.d, { checked: i, disabled: l, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, E.jsx)("div", {
                              className: te.SC,
                              children: (0, E.jsx)(el.E, {
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
                                          clientSettingType: tp.OverlayToggledClientSettingType.OOP_GAME,
                                          gameApplication: r[t],
                                          supportDisabled: l,
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
            [n, l] = (0, g.yK)([m.Ay], () => [m.Ay.canShowAdminWarning, m.Ay.getVisibleGame()], []),
            s = (0, tj.NP)(),
            r = null != l && l.elevated && n && !s,
            a = !(0, eH.DV)(e?.shortcut ?? []);
        return (0, E.jsx)("div", {
            className: te.hc,
            children: (0, E.jsxs)("div", {
                className: te.eH,
                children: [
                    (0, E.jsxs)("div", {
                        className: te.Bu,
                        children: [
                            (0, E.jsx)(el.E, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: j.intl.string(j.t.VsAZcC),
                            }),
                            r &&
                                (0, E.jsx)(el.E, {
                                    variant: "text-xs/normal",
                                    color: "text-feedback-warning",
                                    className: te.y7,
                                    children: j.intl.string(j.t.NsowVa),
                                }),
                            a &&
                                (0, E.jsx)(el.E, {
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
                l = null != e && (0, t$.qJ)(e.pid);
            return n || l;
        },
        setValue: (e) => {
            let t,
                i,
                n,
                l,
                { runningGameApplication: s } =
                    ((t = ta.A.getStreamerActiveStreamMetadata()),
                    (l = to(
                        t,
                        (n =
                            null != (i = m.Ay.getVisibleGame()) ? m.Ay.getGameOrTransformedSubgameForPID(i.pid) : null),
                    )),
                    { runningGame: n ?? void 0, runningGameApplication: x.A.getApplication(l) ?? void 0 });
            null != s && (0, t0.x8)(s.id, e);
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
    il = i(897720),
    is = i(38502);
function ir() {
    let e = ii.A.getWidgetByType(U.uss.VOICE_V3);
    if (null == e) return null;
    let t = is.A.getWidget(e.id);
    return null != t && (0, il.ZO)(t) ? t : null;
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
        l = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new im.A({
            channelId: "123",
            userId: l,
            sessionId: "789",
            mute: t,
            deaf: i,
            selfMute: !1,
            selfDeaf: !1,
            selfVideo: !1,
            selfStream: !1,
            discoverable: n,
        }),
        user: new ig.A({ id: l, username: e }),
        member: {
            nick: e,
            userId: l,
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
                    displayUserMode: l,
                } = (0, g.cf)([eW.default], () => ({
                    avatarSizeMode: eW.default.getAvatarSizeMode(),
                    displayNameMode: eW.default.getDisplayNameMode(),
                    displayUserMode: eW.default.getDisplayUserMode(),
                })),
                [s] = S.useState(() => [
                    ih(j.intl.string(j.t.C0ZDvo), !0, !1),
                    ih(j.intl.string(j.t.iOtj8E), !1, !1, !0),
                    ih(j.intl.string(j.t["0oqNgL"]), !1, !0),
                ]),
                r = (0, g.bG)([ii.A, is.A], () => {
                    let e = ii.A.getWidgetByType(U.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = is.A.getWidget(e.id);
                    return null != t && (0, il.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = ih(t.username)).user = t), e) : null, ...s].filter(N.Vq),
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
                                        displayUserMode: l,
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
                                      (0, E.jsx)(el.E, {
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
    let { rawGame: t, nowPlaying: n = !1, isOverride: l, subgames: s, isSubgame: r = !1, parentGame: a } = e;
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
            [ik.fG]: null != s && s.length > 0,
        });
    function _() {
        null != s && s.length > 0 && d
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
        C = (null != a && a.id === c?.id) || I || (null != s && s.some((e) => e.id === c?.id));
    return (0, E.jsxs)(E.Fragment, {
        children: [
            (0, E.jsxs)("div", {
                className: N,
                children: [
                    (0, E.jsxs)("div", {
                        className: e7()(ik.$K, iw.Vd),
                        children: [
                            o.verified && !l
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
                                    { played: i, exePath: l } = o;
                                return (
                                    n || I
                                        ? (e = j.intl.string(j.t.VbV5dv))
                                        : null != i && "" !== i && (e = j.intl.format(j.t["gGeOE+"], { when: i })),
                                    (0, E.jsx)("div", {
                                        className: ik.GN,
                                        children: (0, E.jsx)(iU.A, {
                                            hoverText:
                                                null != l && "" !== l
                                                    ? ((t = l.replace(/^file:\/\//i, "")),
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
                    l || h
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
                                                          detected: { name: o.name ?? "", gameId: e?.id ?? o.id },
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
                    (n && !l) || C
                        ? null
                        : (0, E.jsx)(iM.A, {
                              className: ik.LS,
                              onClick: function () {
                                  tm.Ay.deleteEntry(o),
                                      s?.forEach((e) => {
                                          tm.Ay.deleteEntry(e);
                                      });
                              },
                          }),
                ],
            }),
            null != s &&
                s.length > 0 &&
                !n &&
                (0, E.jsx)("div", {
                    className: ik.AQ,
                    children: s.map((e, t) =>
                        (0, E.jsxs)(
                            S.Fragment,
                            {
                                children: [
                                    (0, E.jsx)(iB, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== s.length - 1 && (0, E.jsx)("div", { className: ik.PQ }),
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
        [n, l] = S.useState(null),
        s = i.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, E.jsxs)(iZ.l, {
        className: e7()(iQ.H, iJ.Y_),
        "aria-label": j.intl.string(j.t.GTCx0p),
        children: [
            (0, E.jsx)(iq.Z, {
                selectionMode: "single",
                placeholder: j.intl.string(j.t.XqMe3N),
                value: n,
                options: s,
                onSelectionChange: function (e) {
                    l(e);
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
    nl = i(963852),
    ns = i(763754),
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
    return (0, nn.rh)({ ...(0, nl.Ay)({ channelId: nu.id, content: e }), state: U.cmJ.SENT, reactions: t });
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
                                ? (0, E.jsx)(el.E, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: j.intl.string(j.t["493lwX"]),
                                  })
                                : 10 === e
                                  ? (0, E.jsx)(el.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: j.intl.string(j.t.ZSZEdS),
                                    })
                                  : 1 === e
                                    ? (0, E.jsx)(el.E, {
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
    le = "cozy",
    lt = "compact",
    li = (0, a.Qx)(u.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
        useTitle: () => j.intl.string(j.t.nKRoPv),
        useSubtitle: () => j.intl.string(j.t.QntEEG),
        useSearchTerms: () => [j.intl.string(j.t.ZEoGMd)],
        useOptions: () => [
            { name: j.intl.string(j.t.Jqj4cZ), value: le },
            { name: j.intl.string(j.t["1JNcPS"]), value: lt },
        ],
        useValue: () => (L.hH.useSetting() ? lt : le),
        setValue: (e) => {
            L.hH.updateSetting(e === lt), (0, ny.AC)();
        },
    });
var ln = i(381941);
function ll(e) {
    return `${e.toFixed(0)}px`;
}
let ls = (0, a.sN)(u.X.APPEARANCE_MESSAGE_GROUP_SPACING, {
    useTitle: () => j.intl.string(j.t.Q6lKkg),
    useSubtitle: () => j.intl.string(j.t.p7eUrb),
    markers: ln.qh,
    stickToMarkers: !0,
    minValue: ln.qh["0"],
    maxValue: ln.qh[ln.qh.length - 1],
    useDefaultValue: () => (L.hH.useSetting() ? ln.y5 : ln.ES),
    useExternalValue: () => (0, g.bG)([ni.Ay], () => ni.Ay.messageGroupSpacing),
    getInitialValue: () => ni.Ay.messageGroupSpacing,
    onValueRender: ll,
    onMarkerRender: ll,
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
var lr = i(775121);
let la = (0, a.sN)(u.X.APPEARANCE_ZOOM, {
        usePredicate: () => eZ.isPlatformEmbedded,
        useTitle: () => j.intl.string(j.t.i19n5L),
        useSubtitle: () => j.intl.format(j.t["x9PK/3"], { modKey: lr.A.modKey }),
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
    lo = (0, a.zZ)(u.X.VISUAL_DENSITY_CATEGORY, {
        useTitle: () => j.intl.string(j.t.VKYWk8),
        buildLayout: () => [n9, li, ls, la],
    }),
    lu = (0, a.t_)(u.X.ACCESSIBILITY_PANEL, {
        useTitle: () => j.intl.string(j.t.G0neg7),
        buildLayout: () => [n7, lo, nY, n0, nC],
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
                                                        author: { ...(0, ns.p_)(t), colorString: "#dd80f4" },
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
    ld = (0, a.i4)(u.X.ACCESSIBILITY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.G0neg7),
        icon: i7.c,
        useMenu: ng.A,
        buildLayout: () => [lu],
    });
var lc = i(650809),
    lg = i(562465),
    lm = i(228366),
    lA = i(74396),
    lh = i(298358),
    lE = i(269880),
    lS = i(55619),
    lT = i(812993);
let lx = (0, a.zD)(u.X.SHOW_GAME_LIBRARY, {
        usePredicate: () => (0, g.bG)([tD.A], () => tD.A.hasLibraryApplication()),
        useTitle: () => j.intl.string(j.t.fi3UQN),
        useSubtitle: () => j.intl.string(j.t["8mYp37"]),
        useValue: () => !L.l_.useSetting(),
        setValue: (e) => L.l_.updateSetting(!e),
    }),
    lp = (0, a.zZ)(u.X.APPEARANCE_ADVANCED_CATEGORY, {
        useTitle: () => j.intl.string(j.t["8/udY0"]),
        buildLayout: () => [lx],
    });
var lf = i(199966),
    lN = i(963935);
function l_(e) {
    let { title: t } = e;
    return t;
}
function lI(e) {
    let { useTitle: t, settingKey: i, formatter: n, index: l } = e,
        s = t();
    return "string" == typeof s ? n({ title: s, index: l, key: i }) : s;
}
function lC(e) {
    let { setting: t, formatter: i, index: n } = e;
    return () => (0, E.jsx)(lI, { useTitle: t.useTitle, settingKey: t.key, formatter: i, index: n }, t.key);
}
function lb(e) {
    return e.type === lN.Z6.LIST;
}
function lv(e, t) {
    let { limit: i = 2, formatter: n = l_ } = t ?? {};
    tZ()(i > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { visibleDirectory: l, accessibleDirectory: s } = (0, lf._)(),
        r = l.get(e) ?? s.get(e);
    tZ()(
        null != r && (r.type === lN.Z6.ACCORDION || lb(r)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let a = lb(r) ? (r.collapseAfter ?? 0) : 0,
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
        let l = Math.min(i, 3);
        if (t.length <= l)
            if (1 === t.length)
                return j.intl.format(j.t["3H9tCW"], { settingOneHook: lC({ setting: t[0], formatter: n, index: 0 }) });
            else if (2 === t.length)
                return j.intl.format(j.t.MWryo6, {
                    settingOneHook: lC({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: lC({ setting: t[1], formatter: n, index: 1 }),
                });
            else
                return j.intl.format(j.t.a00b5G, {
                    settingOneHook: lC({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: lC({ setting: t[1], formatter: n, index: 1 }),
                    settingThreeHook: lC({ setting: t[2], formatter: n, index: 2 }),
                });
        return 1 === l
            ? j.intl.format(j.t.O8vNbS, { settingOneHook: lC({ setting: t[0], formatter: n, index: 0 }) })
            : 2 === l
              ? j.intl.format(j.t["acXG/W"], {
                    settingOneHook: lC({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: lC({ setting: t[1], formatter: n, index: 1 }),
                })
              : j.intl.format(j.t["5+ldWc"], {
                    settingOneHook: lC({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: lC({ setting: t[1], formatter: n, index: 1 }),
                    settingThreeHook: lC({ setting: t[2], formatter: n, index: 2 }),
                });
    }, [i, a, o, n]);
}
var ly = i(951260);
let lj = (0, a.zD)(u.X.ENABLE_APPS_BUTTON, {
        useTitle: () => j.intl.string(j.t.ZTH4j4),
        useValue: () => (0, g.bG)([ni.Ay], () => ni.Ay.isAppsButtonEnabled),
        setValue: (e) => (0, ny.n8)({ appsButtonEnabled: e }),
    }),
    lO = {
        useTitle: () => j.intl.string(j.t["I/5LyL"]),
        useValue: () => (0, g.bG)([ni.Ay], () => ni.Ay.isSubmitButtonEnabled),
        setValue: () => (0, ny.Xt)(),
    },
    lR = (0, a.zD)(u.X.ENABLE_SEND_BUTTON, lO),
    lL = (0, a.zD)(u.X.ENABLE_SEND_BUTTON_OUTSIDE_EXPERIMENT, {
        ...lO,
        usePredicate: () => !(0, ly.n)("EnableSendButtonOutsideExperiment"),
    }),
    lD = (0, a.zD)(u.X.CONDENSE_PICKER_WHEN_NARROW, {
        useTitle: () => j.intl.string(j.t.WggFoO),
        useSubtitle: () => j.intl.string(j.t.XpErGj),
        useValue: () => (0, g.bG)([ni.Ay], () => ni.Ay.condensePickerWhenNarrow),
        setValue: (e) => (0, ny.n8)({ condensePickerWhenNarrow: e }),
        usePredicate: () => (0, g.bG)([ni.Ay], () => ni.Ay.expressionPickerFormat === ni.IG.FLEXIBLE),
    }),
    lP = (0, a.zD)(u.X.ENABLE_EMOJI_BUTTON, {
        useTitle: () => j.intl.string(j.t.YErWkD),
        useValue: () => (0, g.bG)([ni.Ay], () => ni.Ay.isEmojiButtonEnabled),
        setValue: (e) => (0, ny.n8)({ emojiButtonEnabled: e }),
        usePredicate: () => (0, g.bG)([ni.Ay], () => ni.Ay.expressionPickerFormat === ni.IG.FLEXIBLE),
    }),
    lG = (0, a.zD)(u.X.ENABLE_GIF_BUTTON, {
        useTitle: () => j.intl.string(j.t.k7oNEz),
        useValue: () => (0, g.bG)([ni.Ay], () => ni.Ay.isGifButtonEnabled),
        setValue: (e) => (0, ny.n8)({ gifButtonEnabled: e }),
        usePredicate: () => (0, g.bG)([ni.Ay], () => ni.Ay.expressionPickerFormat === ni.IG.FLEXIBLE),
    }),
    lM = (0, a.zD)(u.X.ENABLE_STICKER_BUTTON, {
        useTitle: () => j.intl.string(j.t.Ar0krj),
        useValue: () => (0, g.bG)([ni.Ay], () => ni.Ay.isStickerButtonEnabled),
        setValue: (e) => (0, ny.n8)({ stickerButtonEnabled: e }),
        usePredicate: () => (0, g.bG)([ni.Ay], () => ni.Ay.expressionPickerFormat === ni.IG.FLEXIBLE),
    }),
    lU = (0, a.Qx)(u.X.EXPRESSION_PICKER_FORMAT, {
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
    lV = (0, a.FW)(u.X.EXPRESSION_PICKER_FIELD_SET, {
        variant: "compact",
        isTitleHiddenVisually: !0,
        useTitle: () => j.intl.string(j.t["V9/cNN"]),
        buildLayout: () => [lU, lD, lP, lG, lM],
    }),
    lk = (0, a.bd)(u.X.CHAT_BAR_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? j.intl.string(j.t.IwVGQs) : j.intl.string(j.t.cFNDh5);
        },
        useCollapsedSubtitle: () => lv(u.X.CHAT_BAR_ADVANCED_ACCORDION),
        usePredicate: () => (0, ly.n)("ChatBarAdvancedAccordion"),
        buildLayout: () => [lR, lj, lV],
    });
var lw = i(565645);
let lF = (0, a.zD)(u.X.CHAT_EMOJI_CONVERT_EMOTICONS, {
        useTitle: () => j.intl.string(j.t["79qal8"]),
        useSubtitle: () =>
            j.intl.format(j.t.GejoQK, { emojiHook: (e, t) => (0, E.jsx)(lw.A, { emojiName: "\uD83D\uDE42" }, t) }),
        useValue: L.j7.useSetting,
        setValue: L.j7.updateSetting,
    }),
    lB = (0, a.zD)(u.X.CHAT_GAME_MENTIONS_AUTOCOMPLETE, {
        useTitle: () => j.intl.string(j.t.c0oFDw),
        useValue: L.BQ.useSetting,
        setValue: L.BQ.updateSetting,
    }),
    lz = (0, a.zD)(u.X.CHAT_TEXT_BOX_PREVIEWS, {
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
    lY = (0, a.zD)(u.X.CHAT_STICKERS_AUTOCOMPLETE, {
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
    lX = (0, a.zZ)(u.X.APPEARANCE_CHAT_BOX_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Ob7VMB),
        useSearchTerms: () => [j.intl.string(j.t.onqU6o)],
        buildLayout: () => [lz, lF, lY, lB, lL, lk],
    });
var lH = i(526162),
    lK = i(793943),
    lW = i(792656),
    lZ = i(830543),
    lq = i(785007),
    lQ = i(806932),
    lJ = i(915089),
    l$ = i(174197),
    l0 = i(202541);
let l1 = (0, a.E2)(u.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [j.intl.string(j.t.gnwxvT)],
    Component: function () {
        let e = (0, lJ.GV)(),
            { ref: t, ...i } = (0, lq._u)({ orientation: "horizontal", labelledBy: e }),
            n = (0, g.bG)([lH.A], () => lH.A.isUpsellPreview);
        return (
            (0, eM.Ay)(() => {
                n &&
                    G.default.track(U.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: l0.e.APP_ICON_UPSELL,
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
                    children: (0, E.jsx)(lQ.m, { disabled: n, size: l$.N8.SIZE_48 }),
                }),
            })
        );
    },
});
function l2() {
    (0, lK.nf)(lK.HP.APP_ICON), (0, lZ.default)();
}
function l3() {
    return (0, E.jsx)(lW.A, {
        subscriptionTier: l0.pe.TIER_2,
        defaultTextOverride: j.intl.string(j.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: U.ZSU.BUTTON_CTA, objectType: U.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
let l5 = (0, a.zZ)(u.X.APPEARANCE_IN_APP_ICON_CATEGORY, {
        useTitle: () => j.intl.string(j.t.RPh2ou),
        useSubtitle: () => j.intl.string(j.t.IgENJo),
        useHeaderDecoration: function () {
            let e = (0, g.bG)([lH.A], () => lH.A.isUpsellPreview);
            return S.useMemo(() => {
                let t = [];
                return (
                    t.push({
                        id: "preview-icon-button",
                        type: h.UV.BUTTON,
                        text: j.intl.string(j.t["6acvnZ"]),
                        onClick: l2,
                    }),
                    e && t.push({ id: "upsell-button", type: h.UV.STRONGLY_DISCOURAGED_CUSTOM, button: l3 }),
                    { type: h.WX.BUTTON_GROUP, buttons: t }
                );
            }, [e]);
        },
        buildLayout: () => [l1],
    }),
    l6 = (0, a.AK)(u.X.APPEARANCE_CHAT_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.UDr3Iy),
        useSearchTerms: () => [j.intl.string(j.t.UDr3Iy)],
        destinationKey: u.X.ACCESSIBILITY_PANEL,
    }),
    l4 = (0, a.gN)(u.X.APPEARANCE_CHAT_RELATED_SETTINGS, { buildLayout: () => [l6] });
var l8 = i(452027),
    l7 = i(976860),
    l9 = i(967198),
    se = i(422258),
    st = i(668267),
    si = i(5180),
    sn = i(551289),
    sl = i(449817);
let ss = ty.A.getArticleURL(U.MVz.FAVORITES_GUILD);
function sr() {
    let { analyticsLocations: e } = (0, n1.Ay)(e6.A.USER_SETTINGS_FAVORITES),
        t = S.useCallback(() => {
            (0, st.mv)("settings_page"), (0, l7.uh)(U.YYv), (0, lZ.default)();
        }, []);
    return (0, E.jsx)(n1.f5, {
        value: e,
        children: (0, E.jsx)(l8.D, {
            label: j.intl.string(sl.default.OT1NK5),
            description: j.intl.format(sl.default.GR2KOG, { helpCenterLink: ss }),
            layout: "horizontal-responsive",
            badge: "beta",
            children: (0, E.jsxs)(Q.B, {
                direction: "horizontal",
                gap: 8,
                fullWidth: !1,
                children: [
                    (0, E.jsx)(ek.$, { variant: "secondary", text: j.intl.string(sl.default["7WwLnr"]), onClick: t }),
                    (0, E.jsx)(lW.A, {
                        subscriptionTier: l0.pe.TIER_2,
                        defaultTextOverride: j.intl.string(sl.default["20sYUU"]),
                    }),
                ],
            }),
        }),
    });
}
let sa = (0, a.E2)(u.X.CHAT_FAVORITES_TOGGLE, {
        usePredicate: () => (0, lh.TW)("FavoritesGuildToggle").isExperimentEnabled,
        useSearchTerms: () => [j.intl.string(sl.default.OT1NK5)],
        Component: function () {
            let { hasAccess: e } = (0, lh.TW)("FavoritesGuildVisibilitySetting"),
                t = (0, sn.dM)(),
                i = S.useCallback((e) => {
                    (0, se.tV)(e, "settings_page"), !e && (0, si.ai)(l9.A.getGuildId()) && (0, l7.pX)(U.BVt.ME);
                }, []);
            return e
                ? (0, E.jsx)(J.d, {
                      checked: t,
                      description: j.intl.format(sl.default.GR2KOG, { helpCenterLink: ss }),
                      onChange: i,
                      label: j.intl.string(sl.default.OT1NK5),
                      badge: "beta",
                  })
                : (0, E.jsx)(sr, {});
        },
    }),
    so = (0, a.zD)(u.X.CHAT_INLINE_MEDIA_LINKS, {
        useTitle: () => j.intl.string(j.t.U47N1p),
        useValue: L.hD.useSetting,
        setValue: L.hD.updateSetting,
    }),
    su = (0, a.zD)(u.X.CHAT_INLINE_MEDIA_UPLOADS, {
        useTitle: () => j.intl.string(j.t.VP11No),
        useValue: L.X6.useSetting,
        setValue: L.X6.updateSetting,
    }),
    sd = (0, a.FW)(u.X.CHAT_INLINE_FIELD_SET, {
        useTitle: () => j.intl.string(j.t["9nyle0"]),
        buildLayout: () => [so, su],
    }),
    sc = (0, a.zD)(u.X.CHAT_EMBEDS_RENDER_EMBEDS, {
        useTitle: () => j.intl.string(j.t["5bK9vw"]),
        useValue: L.rs.useSetting,
        setValue: L.rs.updateSetting,
    }),
    sg = (0, a.zD)(u.X.CHAT_EMOJI_RENDER_REACTIONS, {
        useTitle: () => j.intl.string(j.t["zge/fP"]),
        useValue: L.jW.useSetting,
        setValue: L.jW.updateSetting,
    });
var sm = i(817281);
let sA = (0, a.zD)(u.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
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
            sm.Ay.updatedUnsyncedSettings({ displayCompactAvatars: e });
        },
    }),
    sh = (0, a.Hn)(u.X.CHAT_SPOILERS_SHOW_SPOILERS, {
        useTitle: () => j.intl.string(j.t.QgwmVz),
        useOptions: () => [
            { value: U.P6Q.ON_CLICK, id: U.P6Q.ON_CLICK, label: j.intl.string(j.t["KFH/me"]) },
            { value: U.P6Q.ALWAYS, id: U.P6Q.ALWAYS, label: j.intl.string(j.t.Pe1RbL) },
            { value: U.P6Q.IF_MODERATOR, id: U.P6Q.IF_MODERATOR, label: j.intl.string(j.t.K5VTBE) },
        ],
        useValue: L.gs.useSetting,
        setValue: L.gs.updateSetting,
    }),
    sE = (0, a.zD)(u.X.CHAT_THREADS_SPLIT_VIEW, {
        useTitle: () => j.intl.string(j.t.AInv5m),
        useValue: L.SY.useSetting,
        setValue: L.SY.updateSetting,
    }),
    sS = (0, a.zZ)(u.X.APPEARANCE_MESSAGES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.OIgYlQ),
        useSearchTerms: () => [j.intl.string(j.t["/VQax8"])],
        buildLayout: () => [sd, sc, sg, sh, sE, sA, sa, l4],
    });
var sT = i(753806),
    sx = i(145331);
let sp = (0, a.Qx)(u.X.MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
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
            t ? sT.A.cleanUpPrivateChannelSearchState() : sT.A.cleanUpSearchState({ type: U.I4_.DMS }),
                (0, sx._k)({
                    prevIsCrossDMSettingEnabled: L.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: sx.vy.USER_SETTINGS,
                }),
                L.Hu.updateSetting(t);
        },
    }),
    sf = (0, a.zZ)(u.X.APPEARANCE_SEARCH_CATEGORY, {
        useTitle: () => j.intl.string(j.t["5h0QOP"]),
        buildLayout: () => [sp],
    }),
    sN = (0, a.zD)(u.X.STREAMING_AUTO_STREAMER_MODE, {
        useTitle: () => j.intl.string(j.t.IxjaoF),
        useValue: function () {
            return (0, g.bG)([eX.A], () => {
                let { autoToggle: e } = eX.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            lS.A.update({ autoToggle: e });
        },
        usePredicate: function () {
            return c.Av;
        },
    }),
    s_ = (0, a.zD)(u.X.STREAMING_STREAMER_MODE, {
        useTitle: () => j.intl.string(j.t.TGNg6T),
        useSubtitle: () => j.intl.string(j.t["4nXLnE"]),
        useValue: function () {
            return (0, g.bG)([eX.A], () => {
                let { enabled: e } = eX.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            lS.A.update({ enabled: e });
        },
    });
var sI = i(77729),
    sC = i(588857);
let sb = [],
    sv = (0, a.Hn)(u.X.STREAMER_MODE_HIDE_OVERLAY_WIDGETS, {
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
                for (let [t, i] of Object.entries(sC.A))
                    null != i.streamerModeLabel &&
                        (null == i.predicate || i.predicate()) &&
                        e.push({ id: t, value: t, label: i.streamerModeLabel() });
                return e;
            }, []);
        },
        useValue: function () {
            return (0, g.bG)([eX.A], () => eX.A.getSettings().disabledOverlayWidgets ?? sb);
        },
        setValue: (e) => lS.A.update({ disabledOverlayWidgets: e }),
        closeOnSelect: !1,
        wrapTags: !0,
    }),
    sy = (0, a.zD)(u.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => j.intl.string(j.t.LSBUGR),
        useValue: () =>
            (0, g.bG)([eX.A], () => {
                let { hidePersonalInformation: e } = eX.A.getSettings();
                return e;
            }),
        setValue: (e) => lS.A.update({ hidePersonalInformation: e }),
    }),
    sj = (0, a.zD)(u.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => j.intl.string(j.t.uWBOri),
        useValue: () =>
            (0, g.bG)([eX.A], () => {
                let { hideInstantInvites: e } = eX.A.getSettings();
                return e;
            }),
        setValue: (e) => lS.A.update({ hideInstantInvites: e }),
    }),
    sO = (0, a.zD)(u.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => j.intl.string(j.t.OrqYDP),
        useValue: () =>
            (0, g.bG)([eX.A], () => {
                let { disableSounds: e } = eX.A.getSettings();
                return e;
            }),
        setValue: (e) => lS.A.update({ disableSounds: e }),
    }),
    sR = (0, a.zD)(u.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.sUAbLd),
        useValue: () =>
            (0, g.bG)([eX.A], () => {
                let { disableNotifications: e } = eX.A.getSettings();
                return e;
            }),
        setValue: (e) => lS.A.update({ disableNotifications: e }),
    }),
    sL = (0, a.zD)(u.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => j.intl.string(j.t["iA81+a"]),
        useSubtitle: () => j.intl.string(j.t.P4vj0h),
        useValue: () =>
            (0, g.bG)([eX.A], () => {
                let { enableContentProtection: e } = eX.A.getSettings();
                return e;
            }),
        setValue: (e) => lS.A.update({ enableContentProtection: e }),
        usePredicate: () => sI.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    sD = (0, a.FW)(u.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.xYhOEh),
        buildLayout: () => [sy, sj, sO, sR, sL, sv],
    }),
    sP = (0, a.zZ)(u.X.STREAMER_MODE_CATEGORY, {
        useTitle: () => j.intl.string(j.t.S5GfOW),
        buildLayout: () => [s_, sN, sD],
    });
var sG = i(147248),
    sM = i(665267),
    sU = i(414133),
    sV = i(412848);
let sk = (0, a.Hn)(u.X.APPEARANCE_GUILD_THEME_DEFAULT_PREFERENCE, {
        useTitle: () => j.intl.string(j.t.Q7mm4g),
        useSearchTerms: () => [j.intl.string(sV.default["/6NbRv"])],
        useOptions: () => [
            { id: "guild", label: j.intl.string(j.t["hrS/Pc"]), value: H.tI.GUILD },
            { id: "personal", label: j.intl.string(j.t.mlvXIq), value: H.tI.PERSONAL },
        ],
        useValue: () => L.zY.useSetting(),
        setValue: L.zY.updateSetting,
        usePredicate: () => (0, sU.OS)("GuildThemeDefaultPreferenceSetting"),
    }),
    sw = (0, a.zD)(u.X.SYNC_PROFILE_THEMES, {
        useTitle: () => j.intl.string(j.t.C00w4l),
        useValue: () => (0, g.bG)([ni.Ay], () => ni.Ay.syncProfileThemeWithUserTheme),
        setValue: () => (0, ny.M1)(),
    });
var sF = i(284016);
let sB = (0, a.zD)(u.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => j.intl.string(j.t["/B+kEV"]),
    useSearchTerms: () => [j.intl.string(j.t.Ksh3ik)],
    useValue: function () {
        return (0, g.bG)([sF.A], () => !1 !== sF.A.shouldSync("appearance"));
    },
    setValue: function (e) {
        var t;
        let i = iR.A.theme,
            n = sG.A.gradientPreset?.id ?? null,
            l = L.eh.getSetting()?.customUserThemeSettings != null;
        (t = U.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
            lm.h.dispatch({
                type: "TRACK",
                event: t,
                properties: { is_sync_enabled: e, base_theme: i, client_theme: n, has_custom_theme: l },
            }),
            sm.Ay.setShouldSyncAppearanceSettings(e);
    },
});
var sz = i(98596);
let sY = (0, a.AK)(u.X.APPEARANCE_THEME_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.nhVQDJ),
        useSearchTerms: () => [j.intl.string(j.t.nhVQDJ)],
        destinationKey: u.X.ACCESSIBILITY_PANEL,
    }),
    sX = (0, a.gN)(u.X.APPEARANCE_THEME_RELATED_SETTINGS, { buildLayout: () => [sY] }),
    sH = (0, a.zZ)(u.X.APPEARANCE_THEME_CATEGORY, {
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
            return (0, g.bG)([sG.A, ni.Ay], () => ni.Ay.useForcedColors || sG.A.isPreview)
                ? null
                : {
                      type: h.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "open-client-themes-button",
                              type: h.UV.BUTTON,
                              text: j.intl.string(j.t["E+COuA"]),
                              onClick: sM.J3,
                          },
                      ],
                  };
        },
        buildLayout: () => [sz.k, sB, sw, sk, sX],
    }),
    sK = (0, a.t_)(u.X.APPEARANCE_PANEL, {
        initialize: function () {
            lA.A.isFetching() ||
                (lm.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_START" }),
                lg.Bo.get({ url: U.Rsh.USERS_ME_CUSTOM_THEMES, oldFormErrors: !0, rejectWithError: !0 })
                    .then((e) => {
                        lm.h.dispatch({
                            type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS",
                            themes: e.body?.custom_themes ?? [],
                        });
                    })
                    .catch((e) => {
                        lm.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_FAILURE", error: e });
                    }));
        },
        useTitle: () => j.intl.string(j.t["iHH+ky"]),
        buildLayout: () => [sH, l5, sS, lX, sf, sP, lp],
    }),
    sW = [
        { badgeType: h.Xi.NEW, dismissibleContent: eF.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE },
        {
            badgeType: h.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: eF.M.FAVORITES_GUILD_NEW_BADGE,
            StronglyDiscouragedCustomComponent: function () {
                return (0, E.jsx)(lT.JI, { text: j.intl.string(j.t.y2b7CA) });
            },
        },
    ],
    sZ = (0, a.i4)(u.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["iHH+ky"]),
        icon: lc.B,
        useMenu: function () {
            let e,
                t,
                i,
                n = (0, lE.A)(),
                l =
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
                s =
                    ((i = (0, g.bG)([eX.A], () => eX.A.enabled, [])),
                    (0, E.jsx)(ei.sL, {
                        id: "streamer-mode-toggle",
                        label: j.intl.string(j.t.p9ZAJZ),
                        action: () => {
                            lS.A.setEnabled(!i);
                        },
                        checked: i,
                    }));
            return S.useMemo(() => {
                let e = [...n];
                return (
                    null != l &&
                        e.push((0, E.jsx)(ei.rX, { label: j.intl.string(j.t.Ob7VMB), children: l }, "text-and-images")),
                    null != s && e.push((0, E.jsx)(ei.rX, { children: s }, "streamer-mode")),
                    e
                );
            }, [n, l, s]);
        },
        getDismissibleBadges: () =>
            (0, lh.ad)().isFreemium
                ? sW.filter((e) => {
                      let { dismissibleContent: t } = e;
                      return t !== eF.M.FAVORITES_GUILD_NEW_BADGE;
                  })
                : sW,
        buildLayout: () => [sK],
    });
var sq = i(37646),
    sQ = i(434404);
let sJ = (0, a.t_)(u.X.LANGUAGE_AND_TIME_PANEL, {
        useTitle: () => j.intl.string(j.t.KyFVyi),
        buildLayout: () => [sQ.F],
    }),
    s$ = (0, a.i4)(u.X.LANGUAGE_AND_TIME_SIDEBAR_ITEM, {
        icon: sq.U,
        useTitle: () => j.intl.string(j.t.KyFVyi),
        buildLayout: () => [sJ],
    });
var s0 = i(3137),
    s1 = i(314116),
    s2 = i(369606),
    s3 = i(604121),
    s5 = i(725951),
    s6 = i(400492),
    s4 = i(669067),
    s8 = i(115063),
    s7 = i(754692),
    s9 = i(927018),
    re = i(512599),
    rt = i(532197),
    ri = i(874486),
    rn = i(989349),
    rl = i.n(rn),
    rs = i(58703),
    rr = i(906688),
    ra = i(892208);
function ro(e) {
    let { achievementId: t, dateUnlocked: i } = e,
        n = (0, s9.vM)(t);
    if (null == n) return null;
    let l = null != i,
        { name: s, description: r, hideDescriptionUntilUnlock: a, onAction: o } = n,
        u = a && !l,
        d = l ? "text-strong" : "text-muted",
        c = l ? "text-default" : "text-muted",
        g = rl()(i),
        m = null != o && l,
        A = m ? en.D : "div";
    return (0, E.jsxs)(A, {
        className: e7()(ra.kL, m && ra.b),
        onClick: function () {
            m && o();
        },
        children: [
            (0, E.jsx)("div", {
                className: ra.zc,
                children: (0, E.jsx)(rr.A, { achievementId: t, size: rr.A.Sizes.SIZE_40, unlocked: l }),
            }),
            (0, E.jsxs)("div", {
                className: ra.VW,
                children: [
                    null != i &&
                        (0, E.jsx)(el.E, {
                            variant: "text-xxs/semibold",
                            color: "text-muted",
                            className: ra.YR,
                            children: (0, rs.mk)(g),
                        }),
                    (0, E.jsx)(el.E, { variant: "text-md/medium", color: d, children: s() }),
                    (0, E.jsx)(el.E, { variant: "text-xs/normal", color: c, children: u ? "?????" : r() }),
                ],
            }),
        ],
    });
}
var ru = i(776351);
function rd(e) {
    let { onBackClick: t } = e,
        i = (0, g.bG)([ri.A], () => ri.A.getAllUnlockedAchievements()),
        n = S.useMemo(() => Object.values(i).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [i]),
        l = S.useMemo(
            () =>
                Object.values(s9.l0)
                    .filter(N.Vq)
                    .filter((e) => null == i[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [i],
        );
    return (0, E.jsxs)(E.Fragment, {
        children: [
            (0, E.jsxs)(en.D, {
                onClick: t,
                className: ru.vv,
                children: [
                    (0, E.jsx)(rt.A, { direction: rt.A.Directions.LEFT, className: ru.Kk }),
                    (0, E.jsx)(el.E, {
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: j.intl.string(j.t["13/7kX"]),
                    }),
                ],
            }),
            (0, E.jsxs)("div", {
                className: ru.N1,
                children: [
                    (0, E.jsxs)("div", {
                        className: ru.if,
                        children: [
                            (0, E.jsx)(eV.D, {
                                variant: "heading-lg/extrabold",
                                color: "text-strong",
                                children: j.intl.string(j.t["6jI0hd"]),
                            }),
                            (0, E.jsx)(el.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: j.intl.string(j.t.GuUItX),
                            }),
                        ],
                    }),
                    (0, E.jsx)("div", {
                        className: ru.nr,
                        children: (0, E.jsx)(s2.O, {
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
                    className: ru.yF,
                    children: (0, E.jsx)("div", {
                        className: ru.Eh,
                        children: n.map((e) => {
                            let { achievementId: t, dateUnlocked: i } = e;
                            return (0, E.jsx)(ro, { achievementId: t, dateUnlocked: i }, t);
                        }),
                    }),
                }),
            l.length > 0 &&
                (0, E.jsxs)("div", {
                    className: ru.yF,
                    children: [
                        (0, E.jsx)("div", {
                            className: ru.if,
                            children: (0, E.jsx)(el.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                children: j.intl.string(j.t.GFyMg1),
                            }),
                        }),
                        (0, E.jsx)("div", {
                            className: ru.Eh,
                            children: l.map((e) => (0, E.jsx)(ro, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, E.jsx)("div", { className: ru.yF, children: (0, E.jsx)("div", { className: ru.F3 }) }),
        ],
    });
}
var rc = i(224964),
    rg = i(31408),
    rm = i(381579);
let rA = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    rh = (0, eJ.range)(0, 11),
    rE = (0, eJ.range)(0, 2.25, 0.25),
    rS = (0, eJ.range)(1, 11),
    rT = (0, eJ.range)(1, 26),
    rx = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function rp(e) {
    let { disabled: t, locations: i, settingsLocations: n, onChange: l } = e,
        s = i.map((e) =>
            (0, E.jsx)(
                J.d,
                {
                    label: e.title,
                    description: e.description,
                    checked: n[e.location],
                    disabled: t,
                    onChange: (t) => l({ ...n, [e.location]: t }),
                },
                e.location,
            ),
        );
    return (0, E.jsx)(ij.n, { label: j.intl.string(j.t.bWVN1D), children: s });
}
function rf(e) {
    let { children: t } = e;
    return (0, E.jsx)(el.E, { className: rm.iF, variant: "text-sm/normal", color: "text-default", children: t });
}
function rN(e) {
    let {
            settings: { enabled: t, warningSeen: i },
            updateSettings: n,
        } = e,
        l = (0, g.bG)([ni.Ay], () => ni.Ay.useReducedMotion);
    return (0, E.jsx)(J.d, {
        label: j.intl.string(j.t.vuiXm9),
        description: j.intl.string(j.t.KuYbWN),
        checked: t,
        onChange: function (e) {
            e || (0, s7._)(s9.sn.DISABLE_POGGERMODE),
                e && (!i || l)
                    ? (0, s1.A)({
                          title: l ? j.intl.string(j.t["FxT+p0"]) : j.intl.string(j.t.TAZ4F9),
                          subtitle: l ? j.intl.string(j.t.gmixrx) : j.intl.string(j.t.jN3t3K),
                          confirmText: j.intl.string(j.t.JFfins),
                          onConfirm: () => n(l ? rA : { enabled: !0, warningSeen: !0 }),
                      })
                    : n({ enabled: e });
        },
    });
}
function r_(e) {
    let {
            settings: {
                enabled: t,
                confettiEnabled: i,
                confettiCount: n,
                confettiSize: l,
                confettiEnabledLocations: s,
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
                    (0, E.jsx)(el.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: rm.KF,
                        children: j.intl.string(j.t.vd0D81),
                    }),
                    (0, E.jsx)(rf, { children: j.intl.string(j.t.a18Sug) }),
                    (0, E.jsx)(nE.A, {
                        disabled: a,
                        markers: rS,
                        stickToMarkers: !0,
                        minValue: rS[0],
                        maxValue: rS[rS.length - 1],
                        initialValue: n,
                        onValueChange: (e) => r({ confettiCount: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(el.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: rm.KF,
                        children: j.intl.string(j.t.sPO3ij),
                    }),
                    (0, E.jsx)(rf, { children: j.intl.string(j.t.xoldVn) }),
                    (0, E.jsx)(nE.A, {
                        disabled: a,
                        markers: rT,
                        stickToMarkers: !0,
                        minValue: rT[0],
                        maxValue: rT[rT.length - 1],
                        initialValue: l,
                        onValueChange: (e) => r({ confettiSize: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, E.jsx)(rp, {
                disabled: a,
                locations: [
                    {
                        location: rg.k.CHAT_INPUT,
                        title: j.intl.string(j.t.elTtyz),
                        description: j.intl.string(j.t.HtKfMi),
                    },
                    {
                        location: rg.k.REACTION,
                        title: j.intl.string(j.t.Ik4VIa),
                        description: j.intl.string(j.t.y4rqK0),
                    },
                    {
                        location: rg.k.MEMBER_USER,
                        title: j.intl.string(j.t.ZXBlAn),
                        description: j.intl.string(j.t["m9RD+c"]),
                    },
                    {
                        location: rg.k.CALL_TILE,
                        title: j.intl.string(j.t.V66giQ),
                        description: j.intl.string(j.t.fiHV7u),
                    },
                ],
                settingsLocations: s,
                onChange: (e) => r({ confettiEnabledLocations: e }, 0),
            }),
        ],
    });
}
function rI(e) {
    let {
            settings: { enabled: t, combosEnabled: i, comboSoundsEnabled: n, combosRequiredCount: l },
            updateSettings: s,
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
                onChange: (e) => s({ combosEnabled: e }),
            }),
            (0, E.jsx)(J.d, {
                label: j.intl.string(j.t["Ax+IoW"]),
                description: j.intl.string(j.t["9rgQEr"]),
                checked: n,
                disabled: !t,
                onChange: (e) => s({ comboSoundsEnabled: e }),
            }),
            (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(el.E, {
                        variant: "text-md/semibold",
                        color: r ? "text-muted" : "text-strong",
                        className: rm.KF,
                        children: j.intl.string(j.t.L0oQuh),
                    }),
                    (0, E.jsx)(rf, { children: j.intl.string(j.t["/OOFpL"]) }),
                    (0, E.jsx)(nE.A, {
                        disabled: r,
                        markers: rh,
                        stickToMarkers: !0,
                        minValue: rh[0],
                        maxValue: rh[rh.length - 1],
                        initialValue: l,
                        onValueChange: (e) => s({ combosRequiredCount: e }),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
        ],
    });
}
function rC(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: i, shakeIntensity: n, screenshakeEnabledLocations: l },
            updateSettings: s,
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
                onChange: (e) => s({ screenshakeEnabled: e }, 1),
            }),
            (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(el.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: rm.KF,
                        children: j.intl.string(j.t.UxnnC4),
                    }),
                    (0, E.jsx)(rf, { children: j.intl.string(j.t.CEOEOb) }),
                    (0, E.jsx)(nE.A, {
                        disabled: a,
                        markers: rE,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: rE[0],
                        maxValue: rE[rE.length - 1],
                        initialValue: n,
                        onValueChange: (e) => {
                            var t;
                            null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > n &&
                                (0, s7._)(s9.sn.MORE),
                                s(t, 1);
                        },
                        onMarkerRender: (e) => (e === rE[rE.length - 1] ? j.intl.string(j.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, E.jsx)(rp, {
                disabled: a,
                locations: [
                    {
                        location: rg.uD.CHAT_INPUT,
                        title: j.intl.string(j.t.vUcvPP),
                        description: j.intl.string(j.t.y00OrF),
                    },
                    {
                        location: rg.uD.VOICE_USER,
                        title: j.intl.string(j.t.TcRO54),
                        description: j.intl.string(j.t.YJCxVY),
                    },
                    {
                        location: rg.uD.MENTION,
                        title: j.intl.string(j.t.oW4shO),
                        description: j.intl.string(j.t["mqfw/H"]),
                    },
                ],
                settingsLocations: l,
                onChange: (e) => s({ screenshakeEnabledLocations: e }, 1),
            }),
        ],
    });
}
function rb(e) {
    let { updateSettings: t } = e;
    return (0, E.jsx)(ij.n, {
        label: j.intl.string(j.t.EuXv2q),
        children: (0, E.jsxs)(Q.B, {
            gap: 16,
            children: [
                (0, E.jsx)("div", { children: j.intl.string(j.t["1SLnki"]) }),
                (0, E.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: rm.hw,
                    children: (0, E.jsx)(ek.$, {
                        variant: "primary",
                        size: "sm",
                        text: j.intl.string(j.t.qz65yY),
                        onClick: function () {
                            t({ enabled: !1, settingsVisible: !1 }), (0, lZ.default)();
                        },
                    }),
                }),
            ],
        }),
    });
}
function rv(e) {
    let { onChangePage: t } = e;
    return (0, E.jsxs)(en.D, {
        onClick: function () {
            return t(1);
        },
        className: rm.Tq,
        children: [
            (0, E.jsx)("div", {
                className: rm.w1,
                children: (0, E.jsx)(s2.O, { size: "md", color: er.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, E.jsxs)("div", {
                className: rm.qL,
                children: [
                    (0, E.jsx)(eV.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: j.intl.string(j.t["6jI0hd"]),
                    }),
                    (0, E.jsx)(el.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: j.intl.string(j.t.GuUItX),
                    }),
                ],
            }),
            (0, E.jsx)(tM._, { size: "custom", color: "currentColor", width: 16, className: rm.nT }),
        ],
    });
}
function ry() {
    return i
        .e("4660")
        .then(i.t.bind(i, 662336, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function rj(e) {
    let { onChangePage: t, setShowEnableAnimation: i } = e,
        n = (0, g.cf)([s0.A], () => s0.A.getState()),
        [l, s] = S.useState({ x: 0, y: 0 }),
        r = (0, rc.A)();
    function a(e, t) {
        var s, a, o, u, d, c, g, m;
        if (
            (e.enabled &&
                !1 === n.enabled &&
                (i(!0),
                (0, s6.Ak)("poggermode_enabled"),
                (0, s8.fO)({ duration: 2e3, intensity: e.shakeIntensity ?? n.shakeIntensity })),
            (0, re.O9)(e),
            null == t)
        )
            return;
        let A =
            ((s = n.confettiEnabled), (a = e.confettiEnabled), (o = n.enabled), (u = e.enabled), (a ?? s) && (u ?? o));
        0 === t && A && r.fire(l.x, l.y, { settings: e });
        let h =
            ((d = n.screenshakeEnabled),
            (c = e.screenshakeEnabled),
            (g = n.enabled),
            (m = e.enabled),
            (c ?? d) && (m ?? g));
        1 === t && h && (0, s8.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? n.shakeIntensity });
    }
    function o(e) {
        s({ x: e.clientX, y: e.clientY });
    }
    return (
        S.useEffect(
            () => (window.addEventListener("mousemove", o), () => window.removeEventListener("mousemove", o)),
            [],
        ),
        (0, E.jsxs)(Q.B, {
            gap: 24,
            children: [
                (0, E.jsx)(rN, { settings: n, updateSettings: a }),
                (0, E.jsx)(rv, { onChangePage: t }),
                (0, E.jsx)(rI, { settings: n, updateSettings: a }),
                (0, E.jsx)(rC, { settings: n, updateSettings: a }),
                (0, E.jsx)(r_, { settings: n, updateSettings: a }),
                (0, E.jsx)(rb, { updateSettings: a }),
            ],
        })
    );
}
function rO(e) {
    return 0 === e ? s5.f.LEFT : s5.f.RIGHT;
}
let rR = (0, a.E2)(u.X.POGGERMODE_SETTING, {
        Component: function () {
            let [e, t] = S.useState(0),
                [i, n] = S.useState(rO(e)),
                [l, s] = S.useState(!1),
                r = (0, g.bG)([ni.Ay], () => ni.Ay.useReducedMotion),
                a = l && !r;
            return (
                S.useEffect(() => {
                    let t = setTimeout(() => {
                        n(rO(e));
                    }, 500);
                    return () => clearTimeout(t);
                }, [e]),
                S.useEffect(() => {
                    (0, s4._)(rx[e]);
                }, [e]),
                S.useEffect(() => {
                    Math.random() > 0.99 && (0, s7._)(s9.sn.VISITOR_100);
                }, []),
                (0, E.jsxs)(E.Fragment, {
                    children: [
                        (0, E.jsx)(s5.A, {
                            className: rm.l3,
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
                                        return (0, E.jsx)(rj, { onChangePage: n(1), setShowEnableAnimation: i });
                                    case 1:
                                        return (0, E.jsx)(rd, { onBackClick: n(0) });
                                    default:
                                        return null;
                                }
                            })(e, t, s),
                        }),
                        (0, E.jsx)("div", {
                            className: a ? rm.Sr : rm.IP,
                            children: (0, E.jsx)(s3.a, {
                                className: rm.gT,
                                importData: ry,
                                shouldAnimate: a,
                                autoplay: !1,
                                resetOnPlay: !0,
                                loop: !1,
                                onComplete: () => s(!1),
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
    rL = (0, a.zZ)(u.X.POGGERMODE_CATEGORY, { buildLayout: () => [rR] });
var rD = i(231570);
let rP = (0, a.t_)(u.X.POGGERMODE_PANEL, { useTitle: () => j.intl.string(j.t.AtCukI), buildLayout: () => [rL] }),
    rG = (0, a.i4)(u.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.AtCukI),
        icon: () => (0, E.jsx)("img", { alt: "", src: i(724405), className: rD.$ }),
        usePredicate: () => (0, g.bG)([s0.A], () => s0.A.settingsVisible),
        buildLayout: () => [rP],
    });
var rM = i(307301),
    rU = i(410767),
    rV = i(695366),
    rk = i(293246),
    rw = i(868886);
function rF(e) {
    let { game: t, application: i } = e;
    return null == t || null == i
        ? (0, E.jsx)("div", {
              className: rw.zc,
              children: (0, E.jsx)(rV.E, { size: "sm", color: er.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, E.jsxs)("div", {
              className: rw.nt,
              children: [
                  (0, E.jsx)(p.A, { game: i, pid: t.pid, size: p.M.MEDIUM }),
                  (0, E.jsx)("div", {
                      className: rw.Am,
                      children: (0, E.jsx)(rV.E, { size: "sm", color: er.A.colors.TEXT_FEEDBACK_WARNING }),
                  }),
              ],
          });
}
function rB(e) {
    let t = (0, g.bG)([rk.Ay], () => rk.Ay.getMode()),
        { runningGame: i, runningGameApplication: n } = tu();
    null == i || i.elevated || ((i = void 0), (n = void 0));
    let l = (0, tj.NP)(),
        s = l && null != i && t === U.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? s : l, runningGame: i, runningGameApplication: n };
}
function rz(e) {
    let { className: t, sourcePage: i } = e,
        { canPrompt: n, runningGame: l, runningGameApplication: s } = rB(i);
    return n
        ? (0, E.jsxs)("div", {
              className: e7()(rw.kL, t),
              children: [
                  (0, E.jsx)(rF, { game: l, application: s }),
                  (0, E.jsxs)("div", {
                      className: rw.FS,
                      children: [
                          (0, E.jsx)(el.E, {
                              variant: "text-sm/medium",
                              color: "text-strong",
                              children:
                                  "voice" === i
                                      ? j.intl.string(j.t.vxfv7v)
                                      : null != l
                                        ? j.intl.string(j.t.fAYU2G)
                                        : j.intl.string(j.t["9V4X/c"]),
                          }),
                          (0, E.jsx)(el.E, {
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
                          (0, tj.sL)(i + (null != l ? "-with-game" : "-no-game"));
                      },
                  }),
              ],
          })
        : null;
}
var rY = i(691885),
    rX = i(408278),
    rH = i(241326),
    rK = i(489718),
    rW = i(189213),
    rZ = i(292666),
    rq = i(320989),
    rQ = i(978263);
let rJ = [];
var r$ = i(235986),
    r0 = i(820785),
    r1 = i(734057),
    r2 = i(808728),
    r3 = i(926140),
    r5 = i(387722);
function r6() {}
let r4 = [r3.rD.VOICE_CHANNEL];
function r8(e) {
    e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0);
}
function r7() {
    return (0, E.jsx)("div", {
        className: r5.i1,
        children: (0, E.jsx)(el.E, {
            variant: "text-md/medium",
            color: "text-muted",
            className: r5.GN,
            children: j.intl.string(j.t.zHjCd1),
        }),
    });
}
function r9(e) {
    let { keybind: t, className: i } = e,
        n = S.useRef(t);
    S.useEffect(() => {
        n.current = t;
    });
    let [l, s] = S.useState(t.params?.channelId ?? void 0),
        r = S.useCallback(() => {
            (0, K.openModalLazy)(
                async () => (e) =>
                    (0, E.jsx)(ae, {
                        ...e,
                        onSelect: (e) => {
                            s(e), tq.A.setKeybind({ ...n.current, params: { channelId: e } });
                        },
                    }),
            );
        }, []);
    return (0, E.jsx)("div", {
        className: e7()(r5.a8, i),
        children: (0, E.jsx)(l8.D, {
            label: j.intl.string(j.t.q4JpM8),
            children: (0, E.jsxs)(r$.A, {
                align: r$.A.Align.STRETCH,
                children: [
                    (0, E.jsx)("div", { className: r5.$X, children: (0, E.jsx)(at, { channelId: l }) }),
                    (0, E.jsx)(r$.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, E.jsx)(ek.$, { variant: "primary", text: j.intl.string(j.t.Dm8O4e), onClick: r }),
                    }),
                ],
            }),
        }),
    });
}
function ae(e) {
    let t,
        i,
        { transitionState: n, onClose: l, onSelect: s } = e,
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
                    autocompleterBeforeCreateSearchContext: l,
                } = e,
                [s, r] = S.useState(""),
                [a, o] = S.useState(rJ),
                u = S.useCallback((e, t) => {
                    "" === (t = t.trim()).trim() ? o(rJ) : o(e);
                }, []);
            S.useEffect(
                () =>
                    rq.A.addRouteChangeListener(() => {
                        r("");
                    }),
                [],
            );
            let [d] = S.useState(() => new rQ.A(u, i, void 0, n));
            return (
                S.useEffect(() => {
                    t ? (l?.(d), d.createSearchContext()) : (d.clean(), r(""));
                }, [t, d, l]),
                {
                    queryResults: a,
                    query: s,
                    updateQuery: S.useCallback(
                        (e) => {
                            r(e), d.search(e);
                        },
                        [d],
                    ),
                }
            );
        })({ visible: !0, autocompleterResultTypes: r4, autocompleterBeforeCreateSearchContext: r8 }),
        c =
            ((t = "" !== o),
            (i = (0, g.yK)([r2.Ay, r1.A, l9.A], () => {
                let e = l9.A.getGuildId();
                if (t || null == e) return [];
                let i = [];
                for (let t of r2.Ay.getVocalChannelIds(e)) {
                    let e = r1.A.getChannel(t);
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
            if (e?.type === r3.rD.VOICE_CHANNEL) return e.record.id;
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
                                  if (e?.type === r3.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == i) return null;
                          let n = null != i.parent_id ? r1.A.getChannel(i.parent_id) : void 0,
                              r = eh.A.getGuild(i.guild_id);
                          return (0, E.jsx)(
                              r0.c3,
                              {
                                  id: i.id,
                                  channel: i,
                                  category: n,
                                  focused: m === t,
                                  onMouseEnter: () => A(t),
                                  onClick: () => {
                                      s(i.id), l();
                                  },
                                  onFocus: () => A(t),
                                  children:
                                      null != r ? (0, E.jsx)("div", { className: r5.J5, children: r.name }) : null,
                              },
                              i.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, E.jsx)(r7, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, E.jsx)(rW.Modal, {
        transitionState: n,
        onClose: l,
        title: j.intl.string(j.t.Dm8O4e),
        subtitle: j.intl.string(j.t.q4JpM8),
        actions: void 0,
        input: (0, E.jsx)(rZ.k, {
            value: o,
            onChange: u,
            onKeyDown: function (e) {
                let t = e.key.toLowerCase();
                if ("arrowdown" === t || "arrowup" === t || "enter" === t || "escape" === t)
                    switch ((e.preventDefault(), t)) {
                        case "escape":
                            l();
                            break;
                        case "enter": {
                            let e = (() => {
                                if (null != c) return c[m];
                                let e = d[m];
                                if (e?.type === r3.rD.VOICE_CHANNEL) return e.record;
                            })();
                            null == e ? s(void 0) : s(e.id), l();
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
function at(e) {
    let { channelId: t } = e,
        {
            channel: i,
            category: n,
            guild: l,
        } = (0, g.cf)([r1.A, eh.A], () => {
            let e = null != t ? r1.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? r1.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? eh.A.getGuild(e.guild_id) : void 0,
                  }
                : { channel: void 0, category: void 0, guild: void 0 };
        });
    return null == i
        ? (0, E.jsx)(el.E, {
              variant: "text-md/medium",
              color: "text-muted",
              className: r5.GN,
              children: j.intl.string(j.t["/fYIK7"]),
          })
        : (0, E.jsx)(r0.c3, {
              channel: i,
              id: i.id,
              category: n,
              onClick: r6,
              onFocus: r6,
              onMouseEnter: r6,
              focused: !1,
              children: null != l ? (0, E.jsx)("div", { className: r5.J5, children: l.name }) : null,
          });
}
var ai = i(492064);
function an(e) {
    let { keybind: t } = e,
        i = e0.dI(t.shortcut);
    return lr.A.hasBind(i)
        ? (0, E.jsx)("div", {
              className: ai.$e,
              children: (0, E.jsx)(q.w, { type: "warning", children: j.intl.string(j.t["7lQlw3"]) }),
          })
        : iV.Yy.has(i)
          ? (0, E.jsx)("div", {
                className: ai.$e,
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
    return t.action === U.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, E.jsx)(r9, { keybind: t, className: ai._M }) : null;
}
let as = S.memo(function (e) {
    let { keybind: t, keybindDescriptions: i, keybindActionTypes: n } = e,
        l = S.useCallback((e) => tq.A.setKeybind({ ...t, action: e }), [t]),
        s = S.useCallback((e) => tq.A.setKeybind({ ...t, shortcut: e }), [t]),
        r = S.useCallback(() => tq.A.setKeybind({ ...t, enabled: !t.enabled }), [t]),
        a = S.useCallback(() => tq.A.deleteKeybind(t.id), [t.id]),
        o = S.useId(),
        u = S.useMemo(() => n.find((e) => e.value === t.action)?.label ?? t.action, [t.action, n]);
    return (0, E.jsxs)("div", {
        className: ai.f_,
        children: [
            (0, E.jsx)(an, { keybind: t }),
            (0, E.jsx)("div", {
                className: ai.XI,
                children: (0, E.jsx)(rY.l, {
                    selectionMode: "single",
                    label: j.intl.string(j.t.XH5b12),
                    value: t.action,
                    options: n,
                    onSelectionChange: l,
                    disabled: t.managed,
                }),
            }),
            (0, E.jsx)("div", {
                className: ai.LE,
                children: (0, E.jsx)(l8.D, {
                    label: j.intl.string(j.t["1La4tC"]),
                    layout: "vertical",
                    children: (0, E.jsx)(tQ.A, { defaultValue: t.shortcut, onChange: s }),
                }),
            }),
            (0, E.jsxs)("div", {
                className: ai.ne,
                children: [
                    !t.managed &&
                        (0, E.jsx)(rX.K, {
                            variant: "icon-only",
                            onClick: a,
                            icon: rH.u,
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
                                (0, E.jsx)(rK.I, { checked: t.enabled, onChange: r, labelledBy: o }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, E.jsx)(el.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: ai.h_,
                children: i[t.action],
            }),
            (0, E.jsx)(al, { keybind: t }),
        ],
    });
});
var ar = i(549406),
    aa = i(734066),
    ao = i(880144),
    au = i(614455),
    ad = i(487866);
let ac = function () {
        let e,
            t,
            i,
            n,
            l,
            s,
            {
                customizableKeybinds: r,
                keybindDescriptions: a,
                keybindActionTypes: o,
            } = ((e = (0, g.bG)([eH.Ay], () => eH.Ay.getState())),
            (t = (0, g.bG)([rk.Ay], () => (0, ao.A)(rk.Ay))),
            (i = (0, g.bG)([au.A], () => au.A.isSupported)),
            (n = (0, aa.sw)()),
            (l = (0, aa.BW)()),
            {
                customizableKeybinds: (function (e) {
                    let { keybinds: t, enableClips: i, enableScreenshotKeybind: n, allowSoundboard: l } = e;
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
                        .reject((e) => !l && (e.action === U.hCu.SOUNDBOARD || e.action === U.hCu.SOUNDBOARD_HOLD))
                        .sortBy((e) => e.id)
                        .sortBy((e) => (!0 === e.managed ? -1 : 0))
                        .value();
                })({
                    keybinds: e,
                    enableClips: n,
                    enableScreenshotKeybind: l,
                    allowSoundboard: (s = (0, eZ.isWindows)()),
                }),
                keybindActionTypes: (function (e) {
                    let {
                            overlaySupported: t,
                            canGoLive: i,
                            allowSoundboard: n,
                            enableClips: l,
                            enableScreenshotKeybind: s,
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
                            ((0, eZ.isWindows)() || rk.Ay.getUseSystemScreensharePicker()) &&
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
                            l &&
                                (r.push({ id: "save-clip", value: U.hCu.SAVE_CLIP, label: j.intl.string(j.t.U4URzP) }),
                                s &&
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
                    allowSoundboard: s,
                    enableClips: n,
                    enableScreenshotKeybind: l,
                }),
                keybindDescriptions: (function (e) {
                    let { overlaySupported: t, canGoLive: i, enableClips: n, enableScreenshotKeybind: l } = e,
                        s = {
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
                        t && (s[U.hCu.TOGGLE_OVERLAY_INPUT_LOCK] = j.intl.string(j.t.IoP5vc)),
                        i && (0, eZ.isWindows)() && (s[U.hCu.TOGGLE_GO_LIVE_STREAMING] = j.intl.string(j.t.s4C238)),
                        (0, eZ.isDesktop)() &&
                            ((s[U.hCu.NAVIGATE_BACK] = j.intl.string(j.t.nKDlEt)),
                            (s[U.hCu.NAVIGATE_FORWARD] = j.intl.string(j.t.DK0FFk)),
                            (s[U.hCu.SOUNDBOARD] = (0, eZ.isWindows)()
                                ? j.intl.string(j.t["5wJefL"])
                                : j.intl.string(j.t.gzjsSP)),
                            (s[U.hCu.SOUNDBOARD_HOLD] = (0, eZ.isWindows)()
                                ? j.intl.string(j.t.RRkZc9)
                                : j.intl.string(j.t.laNlTl)),
                            n &&
                                ((s[U.hCu.SAVE_CLIP] = j.intl.string(j.t.z3Wbam)),
                                l && (s[U.hCu.SAVE_SCREENSHOT] = j.intl.string(j.t.m0zd57)))),
                        s
                    );
                })({ overlaySupported: i, canGoLive: t, enableClips: n, enableScreenshotKeybind: l }),
            });
        return 0 === r.length
            ? (0, E.jsx)(el.E, { variant: "text-sm/normal", color: "text-subtle", children: j.intl.string(j.t.vyYgWp) })
            : (0, E.jsx)("div", {
                  className: ad.A,
                  children: r.map((e, t) =>
                      (0, E.jsxs)(
                          S.Fragment,
                          {
                              children: [
                                  (0, E.jsx)(as, { keybind: e, keybindDescriptions: a, keybindActionTypes: o }),
                                  t < r.length - 1 ? (0, E.jsx)(ew.c, { className: ad.y, gap: 24 }) : null,
                              ],
                          },
                          e.id,
                      ),
                  ),
              });
    },
    ag = (0, a.E2)(u.X.CUSTOM_KEYBINDS_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["069nVT"])],
        Component: function () {
            return c.Av
                ? (0, E.jsx)(ac, {})
                : (0, E.jsx)(q.w, {
                      type: "info",
                      children: j.intl.format(j.t.mPi3F3, { downloadLink: U.X7G.DOWNLOAD }),
                  });
        },
    });
var am = i(475358),
    aA = i(28647),
    ah = i(760677);
function aE(e) {
    let { children: t } = e;
    return t([ar.Q_.MESSAGE, ar.Q_.NAVIGATION, ar.Q_.DND, ar.Q_.CHAT, ar.Q_.VOICE_AND_VIDEO, ar.Q_.MISCELLANEOUS]);
}
function aS(e) {
    let { showHeader: t = !0 } = e,
        i = e$()((0, ar.Bx)())
            .filter((e) => e.description !== j.intl.string(j.t.HnNtEI))
            .groupBy((e) => e.group)
            .value();
    return (0, E.jsxs)(Q.B, {
        gap: 48,
        children: [
            (0, E.jsx)(ij.n, {
                label: t ? j.intl.string(j.t.Lz5KHI) : void 0,
                children: (0, E.jsx)("div", {
                    className: ah.jh,
                    children: (0, E.jsxs)("div", {
                        className: ah.yZ,
                        children: [
                            (0, E.jsx)(el.E, { variant: "text-md/normal", children: j.intl.string(j.t.sMWLBj) }),
                            (0, E.jsx)("div", {
                                className: ah.DM,
                                children: (0, E.jsx)(am.e, { shortcut: aA.z.binds["0"], className: ah.LE }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, E.jsx)(aE, {
                children: (e) =>
                    (0, E.jsx)(E.Fragment, {
                        children: e.map((e, t) => {
                            let n = (0, ar.Gm)(e),
                                l = (0, ar.zF)(e),
                                s = i[e];
                            return (0, E.jsx)(
                                ij.n,
                                {
                                    label: n,
                                    description: l,
                                    children: (0, E.jsx)("div", {
                                        className: ah.jh,
                                        children: s.map((e, t) =>
                                            (0, E.jsxs)(
                                                S.Fragment,
                                                {
                                                    children: [
                                                        0 !== t && (0, E.jsx)(ew.c, {}),
                                                        (0, E.jsxs)("div", {
                                                            className: ah.yZ,
                                                            children: [
                                                                (0, E.jsx)(el.E, {
                                                                    variant: "text-md/normal",
                                                                    children: e.description,
                                                                }),
                                                                (0, E.jsx)("div", {
                                                                    className: ah.DM,
                                                                    children: e.binds.map((e) =>
                                                                        (0, E.jsx)(
                                                                            am.e,
                                                                            { shortcut: e, className: ah.LE },
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
let aT = (0, a.E2)(u.X.DEFAULT_KEYBINDS_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.Lz5KHI)],
    Component: () => (0, E.jsx)(aS, { showHeader: !1 }),
});
var ax = i(19575),
    ap = i(546385);
let af = (0, a.E2)(u.X.HARDWARE_ACCELERATION, {
    usePredicate: () => c.Av && !(0, c.cX)(),
    useSearchTerms: () => [j.intl.string(j.t["/HIxyY"]), j.intl.string(j.t.B0hqpb)],
    Component: function () {
        let [e] = S.useState(() => ax.Ay.getEnableHardwareAcceleration()),
            t = j.intl.string(j.t["/HIxyY"]),
            i = j.intl.string(j.t.B0hqpb);
        return (0, E.jsxs)(Q.B, {
            children: [
                (0, E.jsx)(J.d, { label: t, description: i, checked: e, onChange: aN }),
                !e && (0, E.jsx)(ap.A, { look: ap.k.WARNING, children: j.intl.string(j.t.j7S6IX) }),
            ],
        });
    },
});
function aN(e) {
    let t = e ? j.intl.format(j.t.LYXRxL, {}) : j.intl.format(j.t.uDP3Kz, {});
    (0, s1.A)({
        title: j.intl.string(j.t.aqpAvn),
        subtitle: t,
        confirmText: j.intl.string(j.t.vT7ckk),
        onConfirm: () => {
            ax.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
let a_ = (0, nw.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 }));
async function aI() {
    let e = await ax.Ay.getOpenOnStart(),
        t = await ax.Ay.getSetting("START_MINIMIZED", !1),
        i = await ax.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
    a_.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: i });
}
let aC = (0, a.zD)(u.X.OS_OPEN_ON_STARTUP, {
        useTitle: () => j.intl.string(j.t["3BeZti"]),
        usePredicate: () => c.Av && !(0, c.cX)(),
        useValue: () => a_.useState((e) => e.openOnStartup),
        setValue: function (e) {
            a_.setState({ openOnStartup: e }), ax.Ay.send("TOGGLE_OPEN_ON_STARTUP", e);
        },
        initialize: () => {
            ax.Ay.getOpenOnStart().then((e) => a_.setState({ openOnStartup: e }));
        },
    }),
    ab = (0, a.zD)(u.X.OS_MINIMIZE_TO_TRAY, {
        useTitle: () => j.intl.string(j.t.dJ5MUh),
        useSubtitle: () => j.intl.string(j.t.nQavHr),
        usePredicate: () => c.Av && !(0, c.cX)(),
        useValue: () => a_.useState((e) => e.minimizeToTray),
        setValue: function (e) {
            a_.setState({ minimizeToTray: e }), ax.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e);
        },
        initialize: () => {
            ax.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => a_.setState({ minimizeToTray: e }));
        },
    }),
    av = (0, a.zD)(u.X.OS_START_MINIMIZED, {
        useTitle: () => j.intl.string(j.t.GfBL83),
        useSubtitle: () => j.intl.string(j.t.XGyhhc),
        usePredicate: () => (0, c.uF)(),
        useValue: () => a_.useState((e) => !!e.openOnStartup && e.startMinimized),
        setValue: function (e) {
            a_.setState({ startMinimized: e }), ax.Ay.send("TOGGLE_START_MINIMIZED", e);
        },
        useDisabled: () => !a_.useState((e) => e.openOnStartup),
        initialize: () => {
            ax.Ay.getSetting("START_MINIMIZED", !1).then((e) => a_.setState({ startMinimized: e }));
        },
    });
var ay = i(314647);
let aj = new Set(["failure", "unknown"]),
    aO = (0, a.E2)(u.X.OS_SYSTEM_SERVICE, {
        useSearchTerms: () => [j.intl.string(j.t.roHq80)],
        Component: function () {
            let [e, t] = S.useState(!1),
                [i, n] = S.useState(() => (0, tj.TC)()),
                l = (0, g.bG)([m.Ay], () => m.Ay.getSystemServiceStatus("input-service")),
                s = S.useCallback(async () => {
                    t(!0),
                        i ? await (0, tj.z8)("windows-settings") : await (0, tj.sL)("windows-settings"),
                        t(!1),
                        n((0, tj.TC)());
                }, [i]);
            return (0, E.jsxs)("div", {
                className: ay.q,
                children: [
                    (0, E.jsxs)("div", {
                        className: ay.L,
                        children: [
                            (0, E.jsxs)(Q.B, {
                                direction: "horizontal",
                                children: [
                                    (0, E.jsx)(el.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: j.intl.string(j.t.roHq80),
                                    }),
                                    i &&
                                        (0, E.jsxs)(E.Fragment, {
                                            children: [
                                                (0, E.jsx)(el.E, {
                                                    variant: "text-md/medium",
                                                    color: "text-strong",
                                                    "aria-hidden": !0,
                                                    children: "\u2022",
                                                }),
                                                (0, E.jsx)(el.E, {
                                                    variant: "text-md/medium",
                                                    color:
                                                        "running" === l.state
                                                            ? "text-feedback-positive"
                                                            : aj.has(l.state)
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
                                                    })(l),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, E.jsx)(el.E, {
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
                        onClick: s,
                        text: i ? j.intl.string(j.t.pAwbdL) : j.intl.string(j.t["1iI46O"]),
                    }),
                ],
            });
        },
        usePredicate: tj.XQ,
    });
function aR() {
    lm.h.dispatch({ type: "DISCORD_STATS_POPOUT_WINDOW_OPEN" });
}
let aL = (0, a.Tf)(u.X.DISCORD_STATS_POPOUT, {
        useTitle: () => "Discord Stats",
        useSubtitle: () => "Open a floating panel showing live GPU, CPU, and memory usage.",
        useLabel: () => "Open",
        usePredicate: () => (0, g.bG)([iA.default], () => iA.default.getCurrentUser()?.isStaff() ?? !1),
        onClick: () => {
            aR();
        },
    }),
    aD = (0, a.zZ)(u.X.SYSTEM_ADVANCED_CATEGORY, {
        useTitle: () => j.intl.string(j.t["8/udY0"]),
        buildLayout: () => [aL],
    }),
    aP = (0, a.zZ)(u.X.SYSTEM_GENERAL_CATEGORY, {
        useTitle: () => j.intl.string(j.t.cg6ltt),
        buildLayout: () => [aC, av, ab, af],
        usePredicate: () => c.Av && ((0, c.uF)() || (0, c.j9)()),
        initialize: () => {
            aI();
        },
    }),
    aG = (0, a.zZ)(u.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["069nVT"]),
        useSubtitle: () => j.intl.string(j.t.T4LZVL),
        buildLayout: () => [ag],
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
                                  (0, E.jsx)(rz, { sourcePage: "keybinds" }),
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
                              icon: rM.j,
                              onClick: () => tq.A.addKeybind(),
                          },
                      ],
                  }
                : null,
    }),
    aM = (0, a.zZ)(u.X.SYSTEM_DEFAULT_KEYBINDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Lz5KHI),
        buildLayout: () => [aT],
    }),
    aU = (0, a.zZ)(u.X.SYSTEM_HELPER_CATEGORY, {
        useTitle: () => j.intl.string(j.t["+XZgmA"]),
        usePredicate: () => c.Av && ((0, c.uF)() || (0, c.j9)()),
        buildLayout: () => [aO],
    }),
    aV = (0, a.t_)(u.X.SYSTEM_PANEL, {
        useTitle: () => j.intl.string(j.t["VJ/qKo"]),
        buildLayout: () => [aP, aG, aM, aU, aD],
    }),
    ak = (0, a.i4)(u.X.SYSTEM_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["VJ/qKo"]),
        icon: rU.F,
        buildLayout: () => [aV],
    });
var aw = i(831544),
    aF = i(922795),
    aB = i(212245),
    az = i(329551),
    aY = i(285918),
    aX = i(413339),
    aH = i(952572),
    aK = i(382003);
let aW = (0, a.E2)(u.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.lZTUPs)],
        usePredicate: aH.A,
        Component: function () {
            let e = (0, aB.p)(),
                t = S.useRef(!1),
                i = (0, g.bG)([rk.Ay], () => rk.Ay.getVideoDeviceId()),
                [n, l] = S.useState((0, az.i)(iA.default.getCurrentUser())),
                s = S.useRef(n);
            return (
                S.useEffect(
                    () => () => {
                        t.current && (0, aY._C)(s.current);
                    },
                    [],
                ),
                (0, E.jsx)(aK.A, {
                    selectedBackgroundOption: n,
                    onSelectBackgroundOption: function (i) {
                        (t.current = !0), (s.current = i), l(i), (0, aX.gB)(i, { location: e.location }).catch(U.tEg);
                    },
                    currentDeviceId: i,
                })
            );
        },
    }),
    aZ = (0, a.zD)(u.X.CAMERA_PREVIEW_PREFERENCE, {
        useTitle: () => j.intl.string(j.t["3Ppr1h"]),
        useSubtitle: () => j.intl.string(j.t.WNbX4O),
        useValue: L.bm.useSetting,
        setValue: (e) => {
            L.bm.updateSetting(e), G.default.track(U.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
        },
    });
var aq = i(625841),
    aQ = i(74848),
    aJ = i(204050);
let a$ = (0, nw.D)(() => ({ previewEnabled: !1 }));
var a0 = i(731854);
let a1 = (0, a.E2)(u.X.CAMERA_SELECTION_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.FsQ3OR)],
    Component: function () {
        let e = (0, g.bG)([rk.Ay], () => rk.Ay.isVideoAvailable()),
            { id: t } = (0, aQ.x5)(a0.oh.VIDEO_INPUT),
            { analyticsLocations: i } = (0, n1.Ay)();
        return (0, E.jsx)(aq.U, {
            label: j.intl.string(j.t.FsQ3OR),
            deviceType: a0.oh.VIDEO_INPUT,
            location: "UserSettingsCameraSelect",
            isDisabled: !e,
            helperText: (0, aJ.p)()
                ? j.intl.format(j.t.aJYgRt, {
                      onCameraSettingsClick: () => {
                          a$.setState({ previewEnabled: !1 }),
                              window.open((0, aJ.i)(t)),
                              G.default.track(U.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: i });
                      },
                  })
                : void 0,
        });
    },
});
var a2 = i(745317),
    a3 = i(514956);
let a5 = (0, a.E2)(u.X.CAMERA_VIDEO_PREVIEW, {
        useSearchTerms: () => [j.intl.string(j.t.JIf4v7)],
        Component: function () {
            let e = rk.Ay.getCameraComponent(),
                t = (0, g.bG)([rk.Ay], () => rk.Ay.getVideoDeviceId()),
                i = a$.useField("previewEnabled"),
                n = (0, g.bG)([rk.Ay], () => rk.Ay.isVideoAvailable());
            return ((0, tE.l0)(() => {
                a$.setState({ previewEnabled: !1 });
            }),
            i)
                ? (0, E.jsx)("div", {
                      className: a3.T9,
                      children: (0, E.jsxs)("div", {
                          className: a3.Xi,
                          children: [
                              (0, E.jsxs)("div", {
                                  className: a3.UI,
                                  children: [
                                      (0, E.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !i }),
                                      (0, E.jsx)(a2.kE, {}),
                                  ],
                              }),
                              (0, E.jsx)(a2.eK, {}),
                          ],
                      }),
                  })
                : (0, E.jsx)("div", {
                      className: a3.T9,
                      children: (0, E.jsx)(td.m, {
                          text: n ? null : j.intl.string(j.t["8jSzSe"]),
                          children: (0, E.jsx)(ek.$, {
                              variant: "primary",
                              text: j.intl.string(j.t.JIf4v7),
                              onClick: () => a$.setState({ previewEnabled: !0 }),
                              disabled: !n,
                          }),
                      }),
                  });
        },
    }),
    a6 = (0, a.zZ)(u.X.CAMERA_CATEGORY, {
        useTitle: () => j.intl.string(j.t.uje3P9),
        usePredicate: () => (0, g.bG)([rk.Ay], () => rk.Ay.supports(a0.O5.VIDEO)),
        buildLayout: () => [a5, aZ, a1, aW],
    });
var a4 = i(827343);
let a8 = (0, a.zD)(u.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => j.intl.string(j.t.qFphsa),
        useSubtitle: () => j.intl.string(j.t.cQfwyY),
        usePredicate: function () {
            return (0, c.j9)();
        },
        useValue: function () {
            return (0, g.bG)([rk.Ay], () => rk.Ay.getOpenH264Enabled());
        },
        setValue: function (e) {
            a4.A.setOpenH264Enabled(e),
                (0, s1.A)({
                    title: j.intl.string(j.t["9jf31O"]),
                    subtitle: j.intl.string(j.t["J2wg+X"]),
                    confirmText: j.intl.string(j.t.BddRzS),
                    onConfirm: () => sI.A.app.relaunch(),
                });
        },
        useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
    }),
    a7 = (0, a.zD)(u.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
        useTitle: () => j.intl.string(j.t["r6K+TL"]),
        useSubtitle: () => j.intl.string(j.t["xl9+I6"]),
        useValue: function () {
            return (0, g.bG)([rk.Ay], () => rk.Ay.getAecDump());
        },
        setValue: a4.A.setAecDump,
        usePredicate: function () {
            return (0, g.bG)([rk.Ay], () => rk.Ay.isAecDumpSupported());
        },
    });
var a9 = i(139033),
    oe = i(862482),
    ot = i(640238),
    oi = i(825484),
    on = i(77138),
    ol = i(487329),
    os = i(353835);
let or = (0, nw.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function oa() {
    let e = await sI.A.fileManager.getLogPath();
    sI.A.fileManager.showItemInFolder(e);
}
function oo(e) {
    (0, s1.A)({
        title: j.intl.string(j.t["7UXEF2"]),
        subtitle: j.intl.string(j.t.IYPrRl),
        confirmText: j.intl.string(j.t.BddRzS),
        onConfirm: () => a4.A.setDebugLogging(e),
    });
}
async function ou(e) {
    let { onUploadStart: t, onUploadFinish: i } = e;
    t?.();
    try {
        let e, t;
        await rk.Ay.getMediaEngine().writeAudioDebugState(),
            await os.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, on.a)(U.Umv.RTC),
            (e = j.intl.string(j.t["fKBB8+"])),
            (t = j.intl.string(j.t.BvyxE7)),
            (0, a9.A)({ title: e, subtitle: t });
    } catch (s) {
        var n;
        let e, t, i, l;
        (n = s.displayMessage),
            (e = j.intl.string(j.t.QZg0J7)),
            (t = n ?? j.intl.string(j.t.VzHcSm)),
            (i = (0, ol.B1)(ol.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (l = j.intl.formatToPlainString(j.t.ejOT95, { errorCode: i })),
            (0, K.openModal)((i) =>
                (0, E.jsx)(ot.a, {
                    header: e,
                    confirmButtonColor: oe.$n.Colors.BRAND,
                    confirmText: j.intl.string(j.t.BddRzS),
                    ...i,
                    children: (0, E.jsxs)("div", {
                        style: { display: "flex", flexDirection: "column", height: "100%" },
                        children: [
                            (0, E.jsx)(el.E, { variant: "text-md/normal", children: t }),
                            (0, E.jsx)(el.E, {
                                variant: "text-sm/semibold",
                                selectable: !0,
                                style: { marginTop: "auto" },
                                children: l,
                            }),
                        ],
                    }),
                }),
            );
    } finally {
        i?.();
    }
}
async function od() {
    await ou({
        onUploadStart: () => or.setState({ isUploading: !0 }),
        onUploadFinish: () => or.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let oc = (0, a.E2)(u.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [j.intl.string(j.t["726JHL"]), j.intl.string(j.t.EbwFfR), j.intl.string(j.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, g.bG)([rk.Ay], () => rk.Ay.supports(a0.O5.DEBUG_LOGGING));
        return c.Av && e && null != sI.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, g.bG)([rk.Ay], () => rk.Ay.getDebugLogging()),
            t = or.useField("isUploading"),
            i = or.useField("isDisabled"),
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
                            onChange: oo,
                        }),
                        (0, E.jsx)("div", {
                            role: "group",
                            "aria-labelledby": n,
                            children: (0, E.jsxs)(oi.e, {
                                children: [
                                    (0, E.jsx)(ek.$, {
                                        variant: "secondary",
                                        text: j.intl.string(j.t.EbwFfR),
                                        onClick: od,
                                        loading: t,
                                        disabled: i,
                                        "aria-label": j.intl.string(j.t.aY1OH2),
                                    }),
                                    (0, E.jsx)(ek.$, {
                                        variant: "secondary",
                                        text: j.intl.string(j.t.nuPtYi),
                                        onClick: oa,
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
var og = i(233545),
    om = i(412780);
function oA() {
    return (0, g.bG)([iA.default, rk.Ay], () => {
        let e = iA.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            i = "canary" === ax.Ay.releaseChannel || "development" === ax.Ay.releaseChannel,
            n = rk.Ay.supports(a0.O5.CONNECTION_REPLAY);
        return t && i && n;
    });
}
let oh = (0, a.zD)(u.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => j.intl.string(j.t.U4FgFK),
        useSubtitle: () => j.intl.string(j.t.Lm72RU),
        useValue: function () {
            return (0, g.bG)([om.Ay], () => om.Ay.shouldRecordNextConnection());
        },
        setValue: og.Et,
        usePredicate: oA,
    }),
    oE = (0, a.Tf)(u.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => j.intl.string(j.t.nJnOHO),
        useLabel: () => j.intl.string(j.t["3xjX0U"]),
        onClick: og.YW,
        usePredicate: oA,
    });
var oS = i(926919),
    oT = i(111162),
    ox = i(855302);
let op = (0, a.zD)(u.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
        useTitle: () => j.intl.string(j.t["0CEP6e"]),
        useSubtitle: () => j.intl.string(j.t["kBXuW+"]),
        useValue: function () {
            return (0, g.bG)([oT.default], () => oT.default.isStreamInfoOverlayEnabled);
        },
        setValue: function (e) {
            let t = oT.default.isStreamInfoOverlayEnabled;
            (0, ox.A)("stream_info_overlay_enabled", e, t), (0, oS.x)({ isStreamInfoOverlayEnabled: e });
        },
        usePredicate: function () {
            return L.Q_.useSetting();
        },
    }),
    of = (0, a.bd)(u.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? j.intl.string(j.t["/B4I8H"]) : j.intl.string(j.t.BTlsWH)),
        useCollapsedSubtitle: () => j.intl.string(j.t.la1Ys4),
        buildLayout: () => [op, a7, oh, oE, oc],
    });
function oN(e, t, i) {
    (0, s1.A)({ title: e, subtitle: t, confirmText: j.intl.string(j.t.BddRzS), onConfirm: i });
}
let o_ = (0, a.Tf)(u.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => j.intl.string(j.t.SXfv1v),
        useSubtitle: () => j.intl.string(j.t["buA5/q"]),
        useLabel: () => j.intl.string(j.t.yBZMsQ),
        onClick: function () {
            oN(j.intl.string(j.t["4iKQ/3"]), j.intl.string(j.t.sQ42iT), a4.A.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    oI = (0, a.zZ)(u.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.UDAU9K),
        buildLayout: () => [a8, of, o_],
    });
var oC = i(347481),
    ob = i(852712);
let ov = (0, a.zD)(u.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => j.intl.string(j.t.cUMdH0),
        useSubtitle: () => j.intl.string(j.t["6EjbvA"]),
        useValue: function () {
            return (0, g.bG)([rk.Ay], () => rk.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            a4.A.setAutomaticGainControl(e, { page: U.liQ.USER_SETTINGS, section: U.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, g.bG)([rk.Ay, oC.A], () => {
                let e = rk.Ay.getInputDeviceId();
                return oC.A.hasAutomaticGainControl(e);
            });
        },
        usePredicate: function () {
            return (0, g.bG)([rk.Ay], () => rk.Ay.isAutomaticGainControlSupported() && rk.Ay.isInputProfileCustom());
        },
    }),
    oy = (0, a.sN)(u.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => j.intl.string(j.t.AlybXj),
        setValue: (e) =>
            a4.A.setAttenuation(e, rk.Ay.getAttenuateWhileSpeakingSelf(), rk.Ay.getAttenuateWhileSpeakingOthers()),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => rk.Ay.getAttenuation(),
    }),
    oj = (0, a.zD)(u.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => j.intl.string(j.t["9dHxRY"]),
        useValue: () => (0, g.bG)([rk.Ay], () => rk.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => a4.A.setAttenuation(rk.Ay.getAttenuation(), e, rk.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    oO = (0, a.zD)(u.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => j.intl.string(j.t.SMt0Gr),
        useValue: () => (0, g.bG)([rk.Ay], () => rk.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => a4.A.setAttenuation(rk.Ay.getAttenuation(), rk.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    oR = (0, a.FW)(u.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.oSdBvW),
        useSubtitle: () => j.intl.string(j.t["0A/8Rt"]),
        usePredicate: () => (0, g.bG)([rk.Ay], () => rk.Ay.supports(a0.O5.ATTENUATION)),
        buildLayout: () => [oy, oj, oO],
    });
var oL = i(801644);
let oD = (0, a.zD)(u.X.VOICE_HARDWARE_MUTE_SILENCE_ALERT_SETTING, {
        useTitle: () => j.intl.string(j.t.pZ0vr4),
        useSubtitle: () => j.intl.string(j.t.tVbzoZ),
        useValue: function () {
            return (0, g.bG)([nG.Ay], () => !nG.Ay.disableHardwareMuteSilenceAlert);
        },
        setValue: function (e) {
            (0, ox.A)("hardware_mute_silence_alert_enabled", e, !nG.Ay.disableHardwareMuteSilenceAlert),
                sm.Ay.updatedUnsyncedSettings({ disableHardwareMuteSilenceAlert: !e });
        },
        usePredicate: function () {
            let { enableHardwareSilenceWarning: e } = oL.A.useConfig({ location: "HardwareMuteSilenceAlertSetting" });
            return e;
        },
    }),
    oP = (0, a.zD)(u.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => j.intl.string(j.t.DFPXIG),
        useSubtitle: () => j.intl.string(j.t["UyRX+C"]),
        useValue: function () {
            return (0, g.bG)([rk.Ay], () => rk.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            a4.A.setBypassSystemInputProcessing(e);
        },
        usePredicate: function () {
            return (0, g.bG)([rk.Ay], () => rk.Ay.showBypassSystemInputProcessing() && rk.Ay.isInputProfileCustom());
        },
    }),
    oG = (0, a.zD)(u.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
        useTitle: () => j.intl.string(j.t.jrWHD3),
        useSubtitle: () => j.intl.string(j.t.YCCMkJ),
        useValue: function () {
            return (0, g.bG)([nG.Ay], () => !nG.Ay.disableVoiceChannelChangeAlert);
        },
        setValue: function (e) {
            (0, ox.A)("switch_channel_warning_enabled", e, !nG.Ay.disableVoiceChannelChangeAlert),
                sm.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e });
        },
    }),
    oM = (0, a.zD)(u.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
        useTitle: () => j.intl.string(j.t.BbESsg),
        useSubtitle: () => j.intl.string(j.t.LoOB1F),
        useValue: function () {
            return (0, g.bG)([rk.Ay], () => {
                let { vadUseKrisp: e } = rk.Ay.getModeOptions();
                return e;
            });
        },
        setValue: function (e) {
            let t = rk.Ay.getMode();
            a4.A.setMode(t, { vadUseKrisp: e });
        },
        useDisabled: function () {
            return (0, g.bG)(
                [rk.Ay],
                () => rk.Ay.getMode() !== U.TBI.VOICE_ACTIVITY || !rk.Ay.getModeOptions().autoThreshold,
            );
        },
        usePredicate: function () {
            return (0, g.bG)([rk.Ay], () => rk.Ay.isAdvancedVoiceActivitySupported() && rk.Ay.isInputProfileCustom());
        },
    }),
    oU = (0, a.Hn)(u.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => j.intl.string(j.t.wVBHr0),
        useValue: function () {
            return (0, g.bG)([rk.Ay], () => rk.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            oN(j.intl.string(j.t.uY7AcQ), j.intl.string(j.t.gBqik6), () => a4.A.setAudioSubsystem(e));
        },
        useOptions: function () {
            let {
                legacyAudioSubsystemSupported: e,
                experimentalAudioSubsystemSupported: t,
                automaticAudioSubsystemSupported: i,
            } = (0, g.cf)([rk.Ay], () => ({
                legacyAudioSubsystemSupported: rk.Ay.supports(a0.O5.LEGACY_AUDIO_SUBSYSTEM),
                experimentalAudioSubsystemSupported: rk.Ay.supports(a0.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
                automaticAudioSubsystemSupported: rk.Ay.supports(a0.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
            }));
            return S.useMemo(() => {
                let n;
                return (
                    (n = [{ id: a0.rB.STANDARD, value: a0.rB.STANDARD, label: j.intl.string(j.t.dqb2JZ) }]),
                    e && n.push({ id: a0.rB.LEGACY, value: a0.rB.LEGACY, label: j.intl.string(j.t["TYfH+5"]) }),
                    t &&
                        n.push({ id: a0.rB.EXPERIMENTAL, value: a0.rB.EXPERIMENTAL, label: j.intl.string(j.t.liQmtr) }),
                    i && n.push({ id: a0.rB.AUTOMATIC, value: a0.rB.AUTOMATIC, label: j.intl.string(j.t.qNgtO1) }),
                    n
                );
            }, [i, t, e]);
        },
        usePredicate: function () {
            return (0, g.bG)([rk.Ay], () => rk.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    oV = (0, a.zD)(u.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => j.intl.string(j.t.uancuJ),
        useSubtitle: () => j.intl.string(j.t.I1Eoqq),
        useValue: function () {
            return (0, g.bG)([rk.Ay], () => rk.Ay.getQoS());
        },
        setValue: function (e) {
            a4.A.setQoS(e);
        },
        usePredicate: function () {
            return (0, g.bG)([rk.Ay], () => rk.Ay.supports(a0.O5.QOS));
        },
    }),
    ok = (0, a.zD)(u.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => j.intl.string(j.t["4rsOPQ"]),
        useSubtitle: () => j.intl.string(j.t.jtiiCw),
        useValue: function () {
            return (0, g.bG)([rk.Ay], () => rk.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            a4.A.setSilenceWarning(e);
        },
        usePredicate: function () {
            return eZ.isPlatformEmbedded;
        },
    }),
    ow = (0, a.bd)(u.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? j.intl.string(j.t.KHsSWK) : j.intl.string(j.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            lv(u.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, g.bG)([rk.Ay], () => rk.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [ov, oM, oP, ok, oD, oG, oR, oU, oV],
    }),
    oF = (0, a.zD)(u.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => j.intl.string(j.t.iWTwu6),
        useValue: function () {
            return (0, g.bG)([rk.Ay], () => rk.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            a4.A.setEchoCancellation(e, { page: U.liQ.USER_SETTINGS, section: U.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, g.bG)([rk.Ay, oC.A], () => {
                let e = rk.Ay.getInputDeviceId();
                return oC.A.hasEchoCancellation(e);
            });
        },
        usePredicate: function () {
            return (0, g.bG)([rk.Ay], () => rk.Ay.isInputProfileCustom());
        },
    });
var oB = i(459838),
    oz = i(451988),
    oY = i(934246),
    oX = i(300839);
let oH = (0, lJ.Ld)();
function oK(e) {
    let { isSpeaking: t, className: i, id: n, ariaDescribedBy: l, ariaLabelledBy: s, disabled: r } = e;
    return (0, E.jsx)("div", {
        role: "meter",
        className: e7()(oY.$I, i),
        id: n,
        "aria-describedby": l,
        "aria-labelledby": s,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? j.intl.string(j.t.haLKZ0) : j.intl.string(j.t.X2hJL7),
        children: (0, E.jsx)("div", { className: e7()(oY.Jx, oY.NU, { [oY.zY]: t && !r, [oY.r9]: r }) }),
    });
}
function oW(e) {
    let { volume: t, id: i, ariaDescribedBy: n, ariaLabelledBy: l, disabled: s } = e,
        { threshold: r, autoThreshold: a } = (0, g.cf)([rk.Ay], () => ({
            threshold: rk.Ay.getModeOptions().threshold,
            autoThreshold: rk.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, g.bG)([rk.Ay], () => rk.Ay.getMode());
    return (0, E.jsx)("section", {
        className: e7()(oY.Mo, oY.jW),
        id: i,
        "aria-describedby": n,
        "aria-labelledby": l,
        children: (0, E.jsx)(nE.A, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return (t = -((100 - e) * 1)), void a4.A.setMode(o, { threshold: t, autoThreshold: a });
            },
            barStyles: { background: er.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: er.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": oH,
            disabled: s,
            children: (0, E.jsxs)("div", {
                className: e7()(oY.NU, oY.TL, oY.Jx, oX.bar),
                children: [
                    (0, E.jsx)("div", { className: e7()(oY.GS, oY.SH), style: { width: s ? 0 : t + 100 + "%" } }),
                    (0, E.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let oZ = (0, a.E2)(u.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [j.intl.string(j.t["sqUm+k"]), j.intl.string(j.t.I1Zuq0), j.intl.string(j.t.nuFtHH)],
    usePredicate: () => (0, g.bG)([rk.Ay], () => rk.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, g.cf)([rk.Ay], () => ({
                autoThreshold: rk.Ay.getModeOptions().autoThreshold,
                disabled: rk.Ay.getMode() !== a0.TB.VOICE_ACTIVITY,
            })),
            i = S.useCallback((e) => {
                let t = rk.Ay.getMode(),
                    { threshold: i } = rk.Ay.getModeOptions();
                a4.A.setMode(t, { autoThreshold: e, threshold: i });
            }, []),
            n = (0, g.bG)([rk.Ay], () => rk.Ay.supports(a0.O5.AUTOMATIC_VAD)),
            { volume: l, isSpeaking: s } = (function () {
                let [e, t] = S.useState(-100),
                    [i, n] = S.useState(!1);
                function l(e, i) {
                    t(e), n((i & a0.ME.VOICE) === a0.ME.VOICE);
                }
                return (
                    S.useEffect(() => {
                        let e = new oz.Ep();
                        return (
                            e.start(1e3, () => {
                                rk.Ay.getMediaEngine().on(oB.bg.VoiceActivity, l), e.stop();
                            }),
                            () => {
                                rk.Ay.getMediaEngine().removeListener(oB.bg.VoiceActivity, l), e.stop();
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: i }
                );
            })(),
            r = (0, g.bG)([rk.Ay], () => rk.Ay.isEnabled()),
            a = S.useMemo(
                () =>
                    !r &&
                    (0, E.jsx)("div", {
                        className: oY.B4,
                        children: (0, E.jsx)(q.w, {
                            type: "warning",
                            children: j.intl.format(j.t["O13I+O"], { onEnableClick: () => a4.A.enable(!0) }),
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
                                  ? (0, E.jsx)(oK, {
                                        isSpeaking: s,
                                        className: oY.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, E.jsx)(oW, { volume: l, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
                              a,
                          ],
                      }),
                  ],
              })
            : (0, E.jsxs)(Q.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, E.jsx)(l8.D, {
                          label: j.intl.string(j.t["sqUm+k"]),
                          description: o,
                          layout: "vertical",
                          children: (i) =>
                              e
                                  ? (0, E.jsx)(oK, {
                                        isSpeaking: s,
                                        className: oY.UJ,
                                        id: i.controlId,
                                        ariaDescribedBy: i.describedById,
                                        ariaLabelledBy: i.labelId,
                                        disabled: t,
                                    })
                                  : (0, E.jsx)(oW, {
                                        volume: l,
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
var oq = i(366010);
let oQ = i(993830),
    oJ = i(413142),
    o$ = { page: U.liQ.USER_SETTINGS, section: U.JJy.SETTINGS_VOICE_AND_VIDEO };
function o0() {
    let e = (0, g.bG)([iR.A], () => (0, oq.q)(iR.A.theme));
    return (0, E.jsx)("img", { src: e ? oQ : oJ, width: 48, height: 32, alt: "" });
}
let o1 = (0, a.E2)(u.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.t8Qhib), j.intl.string(j.t.hmfkCi)],
    usePredicate: function () {
        return (0, g.bG)([rk.Ay], () => rk.Ay.isInputProfileCustom() && rk.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = S.useCallback((e) => {
                a4.A.setNoiseCancellation("KRISP" === e, o$), a4.A.setNoiseSuppression("STANDARD" === e, o$);
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: i,
                isNoiseSuppressionSupported: n,
                isNoiseCancellationSupported: l,
            } = (0, g.cf)([rk.Ay], () => ({
                noiseCancellation: rk.Ay.getNoiseCancellation(),
                noiseSuppression: rk.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: rk.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: rk.Ay.isNoiseCancellationSupported(),
            })),
            s = S.useMemo(() => {
                let e = [];
                return (
                    l && e.push({ id: "krisp", label: j.intl.string(j.t.rdoNzt), value: "KRISP" }),
                    n && e.push({ id: "standard", label: j.intl.string(j.t.qXeYHw), value: "STANDARD" }),
                    e.push({ id: "disabled", label: j.intl.string(j.t.wkYAlz), value: "NONE" }),
                    e
                );
            }, [l, n]),
            r = l
                ? j.intl.format(j.t["1q5aTp"], { helpArticle: ty.A.getArticleURL(U.MVz.NOISE_SUPPRESSION) })
                : j.intl.string(j.t.OWKjw5);
        return (0, E.jsxs)(Q.B, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, E.jsx)(rY.l, {
                    label: j.intl.string(j.t.t8Qhib),
                    description: r,
                    layout: "horizontal",
                    value: t ? "KRISP" : i ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: s,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                l && (0, E.jsx)(o0, {}),
            ],
        });
    },
});
var o2 = i(934729),
    o3 = i(621380);
let o5 = !c.Av;
function o6() {
    return (0, g.bG)([rk.Ay], () => rk.Ay.getMode() === a0.TB.PUSH_TO_TALK);
}
let o4 = (0, a.zD)(u.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return c.Av ? j.intl.string(j.t.tG4Np5) : j.intl.string(j.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, g.bG)([rk.Ay], () => rk.Ay.getMode());
        return S.useMemo(() => {
            if (!c.Av && e === a0.TB.PUSH_TO_TALK)
                return j.intl.format(j.t["VHI4+Y"], { onDownloadClick: () => (0, o2._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, g.bG)([rk.Ay], () => rk.Ay.getActiveInputProfile() !== o3.m.STUDIO);
    },
    useValue: function () {
        return (0, g.bG)([rk.Ay], () => rk.Ay.getMode() === a0.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, n;
        (t = e ? a0.TB.PUSH_TO_TALK : a0.TB.VOICE_ACTIVITY),
            (n = [e6.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === a0.TB.PUSH_TO_TALK &&
                o5 &&
                (0, K.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([i.e("74558"), i.e("10919")]).then(i.bind(i, 556506));
                    return (t) =>
                        (0, E.jsx)(e, {
                            title: j.intl.string(j.t.Kdt0Gb),
                            confirmText: j.intl.string(j.t["1WjMbC"]),
                            cancelText: j.intl.string(j.t.BddRzS),
                            onConfirm: () => (0, o2._)("PTT Limited Modal"),
                            body: j.intl.string(j.t.NIozvt),
                            ...t,
                        });
                }),
            a4.A.setMode(t, void 0, void 0, { analyticsLocations: n });
    },
    useSearchTerms: () => [j.intl.string(j.t["pS+K2L"]), j.intl.string(j.t.nuFtHH)],
});
var o8 = i(297932);
let o7 = (0, a.E2)(u.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["pS+K2L"]), j.intl.string(j.t.nuFtHH)],
        usePredicate: o6,
        Component: function () {
            let e = (0, g.bG)([rk.Ay], () => {
                    let { shortcut: e } = rk.Ay.getModeOptions();
                    return e;
                }),
                t = j.intl.format(j.t.HVvn5T, {
                    onClick: () => (0, eq.openUserSettings)(u.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY),
                });
            return (0, E.jsx)(l8.D, {
                label: j.intl.string(j.t["o+BJQR"]),
                description: t,
                layout: "horizontal-responsive",
                children: (0, E.jsx)("div", {
                    className: o8.e,
                    children: (0, E.jsx)(tQ.A, {
                        defaultValue: e,
                        onChange: (e) => a4.A.setMode(U.TBI.PUSH_TO_TALK, { shortcut: e }),
                    }),
                }),
            });
        },
    }),
    o9 = (0, a.sN)(u.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => j.intl.string(j.t.GCNMM8),
        useSearchTerms: () => [j.intl.string(j.t["pS+K2L"]), j.intl.string(j.t.nuFtHH)],
        setValue: function (e) {
            a4.A.setMode(U.TBI.PUSH_TO_TALK, { delay: e });
        },
        minValue: 0,
        maxValue: U.IjB,
        getInitialValue: function () {
            let { delay: e } = rk.Ay.getModeOptions();
            return e;
        },
        onValueRender: function (e) {
            return e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}\u00A0ms`;
        },
        usePredicate: o6,
    });
var ue = i(957658),
    ut = i(329139);
let ui = (0, a.zD)(u.X.VOICE_SPATIAL_AUDIO_SETTING, {
        useTitle: () => j.intl.string(ut.default.LGDPhA),
        useValue: function () {
            return (0, g.bG)([rk.Ay], () => rk.Ay.isSpatialAudioEnabled());
        },
        setValue: function (e) {
            a4.A.setSpatialAudio(e, [e6.A.USER_SETTINGS_VOICE_AND_VIDEO]);
        },
        usePredicate: function () {
            return (0, ue.A)("VoiceSettings");
        },
    }),
    un = (0, a.Qx)(u.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => j.intl.string(j.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, ob._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [j.intl.string(j.t.nuFtHH), j.intl.string(j.t.VZPR0R), j.intl.string(j.t.cjPbpT)],
        useValue: function () {
            return (0, g.bG)([rk.Ay], () => rk.Ay.getActiveInputProfile() ?? o3.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [e6.A.USER_SETTINGS_VOICE_AND_VIDEO];
            a4.A.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, ob.d)({ location: "InputProfileCategory" });
            return [
                { value: o3.m.VOICE_ISOLATION, name: j.intl.string(j.t.cjPbpT), desc: j.intl.string(j.t.CzhvnE) },
                { value: o3.m.STUDIO, name: j.intl.string(j.t.VZPR0R), desc: j.intl.string(j.t.ZaJksS) },
                { value: o3.m.CUSTOM, name: j.intl.string(j.t["N/PQjv"]), desc: j.intl.string(j.t.SnBmuY) },
            ].filter((t) => {
                let { value: i } = t;
                return e.includes(i);
            });
        },
    }),
    ul = (0, a.zZ)(u.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, g.bG)([oC.A, rk.Ay], () => {
                let e = rk.Ay.getInputDeviceId();
                return (
                    (oC.A.hasEchoCancellation(e) || oC.A.hasNoiseSuppression(e) || oC.A.hasAutomaticGainControl(e)) &&
                    rk.Ay.isInputProfileCustom()
                );
            });
            return S.useMemo(() => {
                if (e) return { type: h.lT.INLINE_NOTICE, noticeType: "info", text: j.intl.string(j.t["/Whuzi"]) };
            }, [e]);
        },
        buildLayout: () => [un, oZ, o1, oF, ui, o4, o7, o9, ow],
    });
var us = i(403581),
    ur = i(983851),
    ua = i(687021),
    uo = i(128450),
    uu = i(796774),
    ud = i(209932),
    uc = i(813564),
    ug = i(984813),
    um = i(22231),
    uA = i(428262),
    uh = i(792348),
    uE = i(674168),
    uS = i(333216),
    uT = i(805945),
    ux = i(199300);
function up(e) {
    let { onSelect: t } = e,
        [i, n] = S.useState(!1),
        l = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()),
        s = uA.Ay.canUseCustomCallSounds(l),
        r = S.useRef(null);
    function a(e) {
        s && (n(!1), t?.(e));
    }
    return (0, E.jsx)(ee.Y, {
        targetElementRef: r,
        shouldShow: i,
        position: "left",
        onRequestClose: () => n(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, E.jsx)(iZ.l, {
                children: (0, E.jsx)(uS.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: s ? null : (0, E.jsx)(uE.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, E.jsx)(uT.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    n(!i);
                },
                text: j.intl.string(j.t.uOe0Az),
                children: (0, E.jsx)(um.R, { size: "md", color: "currentColor", className: ux.Wo }),
            }),
    });
}
function uf(e) {
    let { sound: t } = e,
        { previewSound: i } = (0, uh.A)(t, null),
        n =
            0 === (0, uc.wH)()
                ? j.intl.string(j.t.OASXjt)
                : j.intl.formatToPlainString(j.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, E.jsx)(uT.dT, {
        onClick: i,
        text: n,
        children: (0, E.jsx)(ur.H, { size: "md", color: "currentColor", className: ux.wg }),
    });
}
function uN(e) {
    let { sound: t, isGlobal: i, onSelect: n } = e,
        l = null != t,
        s = t?.emojiId,
        r = t?.emojiName,
        a = l && (null != r || null != s);
    return (0, E.jsxs)("div", {
        className: ux.D6,
        children: [
            (0, E.jsxs)("div", {
                className: ux.kL,
                children: [
                    a && (0, E.jsx)(lw.A, { emojiId: s, emojiName: r, className: ux.Zg }),
                    (0, E.jsx)(el.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        className: ux.dj,
                        children:
                            null == t
                                ? j.intl.string(j.t.PoWNfe)
                                : i
                                  ? j.intl.format(j.t.B6HU6O, {
                                        soundName: t.name,
                                        subtextHook: function (e) {
                                            return (0, E.jsx)(el.E, {
                                                variant: "text-xs/medium",
                                                color: "text-default",
                                                tag: "span",
                                                children: e,
                                            });
                                        },
                                    })
                                  : t.name,
                    }),
                    l
                        ? (0, E.jsx)(uf, { sound: t })
                        : (0, E.jsx)(ur.H, { size: "md", color: "currentColor", className: ux.Gk }),
                ],
            }),
            (0, E.jsxs)("div", {
                className: ux.kL,
                children: [
                    (0, E.jsx)(up, { onSelect: n }),
                    l &&
                        !i &&
                        (0, E.jsx)(uT.dT, {
                            onClick: () => n(null),
                            text: j.intl.string(j.t.jmtcGA),
                            children: (0, E.jsx)(rH.u, {
                                size: "md",
                                color: er.A.unsafe_rawColors.RED_400.css,
                                className: ux.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var u_ = i(617617);
i(980504);
var uI = i(907895);
function uC(e) {
    return (0, g.bG)([ud.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: i } = e;
        return ud.A.getSound("0" === t ? "0" : t, i);
    });
}
function ub(e) {
    let { guildId: t } = e,
        i = (0, g.bG)([u_.A], () => u_.A.settings.guilds?.guilds?.[t]?.joinSound),
        n = uC(i);
    if (null == i || null == n) return null;
    let { emojiId: l, emojiName: s } = n,
        r = null != l || null != s;
    return (0, E.jsxs)("div", {
        className: uI.Io,
        children: [
            r
                ? (0, E.jsx)(lw.A, { emojiId: l, emojiName: s, className: uI.nW })
                : (0, E.jsx)(ur.H, { size: "md", color: "currentColor", className: uI.nW }),
            (0, E.jsx)(el.E, { className: uI.dK, variant: "text-xs/medium", children: n.name }),
        ],
    });
}
let uv = (0, a.E2)(u.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, n1.Ay)(),
            [t, i] = S.useState("0"),
            n = (0, ug.mz)(t),
            l = uC(n),
            s = n?.type === ug.PP.GLOBAL,
            r = (0, g.bG)([ud.A], () => ud.A.hasFetchedAllSounds()) && null != n && null == l;
        S.useEffect(() => {
            r && (0, uc.ND)({ location: e });
        }, [r, e]),
            S.useEffect(() => {
                (0, uu.E7)();
            }, []);
        let a = S.useCallback((e, t) => {
            let { inDropdown: i } = t;
            return null == e ? null : i ? (0, E.jsx)(ub, { guildId: e.value }) : null;
        }, []);
        return (0, E.jsxs)(ij.n, {
            label: j.intl.string(j.t.nzUc3B),
            description: j.intl.format(j.t.u9RWmv, { helpdeskArticle: ty.A.getArticleURL(U.MVz.SOUNDBOARD) }),
            children: [
                (0, E.jsx)(ua.A, {
                    guildId: t,
                    className: uI.Dt,
                    globalOption: { label: j.intl.string(j.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        i(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, E.jsxs)(uo.A, {
                    title: j.intl.format(j.t.I2TsYN, {
                        nitroWheelHook: () => (0, E.jsx)(us.t, { size: "md", color: "currentColor", className: uI.ax }),
                    }),
                    children: [
                        (0, E.jsx)(uN, {
                            sound: l,
                            isGlobal: s,
                            onSelect: (i) => {
                                null == i ? (0, uc.Dv)(t, e) : (0, uc.un)(t, i, e);
                            },
                        }),
                        r &&
                            (0, E.jsx)(tv.p, {
                                className: uI.lm,
                                messageType: tv.Y.WARNING,
                                children: j.intl.string(j.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        });
    },
});
var uy = i(824744);
let uj = (0, a.sN)(u.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => j.intl.string(j.t.kbFsAD),
    useSubtitle: () => j.intl.format(j.t.BPbGq7, { helpCenterArticle: ty.A.getArticleURL(U.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [e6.A.USER_SETTINGS_VOICE_AND_VIDEO],
            i = (0, uy.w)(e);
        (0, uu.iy)(i, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, uc.wH)();
        return (0, uy.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var uO = i(864145);
let uR = (0, a.sN)(u.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => j.intl.string(j.t["2JbvKw"]),
        useSubtitle: () => j.intl.string(j.t.INenzY),
        setValue: function (e) {
            let t = (0, uy.w)(e);
            L.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = L.HO.getSetting();
            return (0, uy.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, uO.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    uL = (0, a.zZ)(u.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => j.intl.string(j.t.ABjMWI),
        buildLayout: () => [uj, uR, uv],
    });
var uD = i(803224),
    uP = i(552122);
let uG = (0, a.E2)(u.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [j.intl.string(j.t.fgSHf8)],
        usePredicate: () => null != uP.A.useHolidaySoundpack(),
        Component: () =>
            (0, E.jsx)(el.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: j.intl.format(j.t.Eup6Wv, {
                    onClick: () => (0, eq.openUserSettings)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    uM = (0, a.AK)(u.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.eyGEE4),
        useSearchTerms: () => [j.intl.string(j.t.eyGEE4)],
        destinationKey: u.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    uU = (0, a.gN)(u.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [uM] });
var uV = i(264686);
let uk = (0, nw.D)(() => ({ currentPlayingSound: null }));
function uw() {
    let e = uk.getField("currentPlayingSound");
    e?.stop(), uk.setState({ currentPlayingSound: null });
}
function uF(e) {
    let t = uk.getField("currentPlayingSound");
    t?.stop();
    let i = (0, s6.Ak)(e);
    uk.setState({ currentPlayingSound: i });
}
function uB(e) {
    return (0, a.zD)(`${u.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => j.intl.format(j.t.OOiGCM, { onClick: () => uF(e.sound) }),
        useSearchTerms: e.useSearchTerms,
        useValue: () => {
            let t = (0, g.bG)([uD.A], () => uD.A.isSoundDisabled(e.sound)),
                i = e.useDisabled?.();
            return !t && !i;
        },
        setValue: (t) => {
            let i = uD.A.getDisabledSounds().filter((t) => t !== e.sound);
            t || i.push(e.sound), uV.default.setDisabledSounds(i);
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                i = (0, g.bG)([uD.A], () => uD.A.getDisableAllSounds());
            return t || i;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let uz = [
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
    uY = (0, a.D1)(u.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? j.intl.formatToPlainString(j.t["0JYT98"], { count: t })
                : j.intl.formatToPlainString(j.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => lv(u.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                uw();
            };
        },
        buildLayout: () => uz.map((e) => uB(e)),
    }),
    uX = (0, a.zZ)(u.X.SOUNDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, g.bG)([uD.A], () => uD.A.getDisableAllSounds());
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
        buildLayout: () => [uY, uG, uU],
    }),
    uH = (0, a.zD)(u.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => j.intl.string(j.t.e3Zz3F),
        useSubtitle: () => j.intl.string(j.t.RztTjP),
        useValue: function () {
            return !L.uh.useSetting();
        },
        setValue: function (e) {
            (0, ox.A)("stream_previews_disabled", !e, L.uh.getSetting(), [e6.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                L.uh.updateSetting(!e);
        },
    }),
    uK = (0, a.zD)(u.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => j.intl.string(j.t.GmWk2E),
        useSearchTerms: () => [j.intl.string(j.t["Fj/xn1"])],
        useSubtitle: () => j.intl.string(j.t["Fj/xn1"]),
        useValue: function () {
            return (0, g.bG)([rk.Ay], () => rk.Ay.getVideoHook());
        },
        setValue: a4.A.setVideoHook,
        usePredicate: function () {
            return (0, g.bG)([rk.Ay], () => rk.Ay.supportsVideoHook());
        },
    }),
    uW = (0, a.zD)(u.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => j.intl.string(j.t["4I0qzZ"]),
        useValue: function () {
            return (0, g.bG)([rk.Ay], () => rk.Ay.getExperimentalSoundshare());
        },
        setValue: a4.A.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, g.bG)([rk.Ay], () => {
                let e = rk.Ay.supportsExperimentalSoundshare(),
                    t = rk.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    uZ = (0, a.zD)(u.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => j.intl.string(j.t["/jwMtn"]),
        useSubtitle: () => j.intl.string(j.t.zlA23F),
        useValue: function () {
            return (0, g.bG)([rk.Ay], () => rk.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [e6.A.USER_SETTINGS_VOICE_AND_VIDEO];
            a4.A.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return rk.Ay.supports(a0.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    uq = (0, a.sN)(u.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => j.intl.string(j.t.fhEzfj),
        setValue: function (e) {
            let t = [e6.A.USER_SETTINGS_VOICE_AND_VIDEO];
            a4.A.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: rk.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            let e = (0, g.bG)([rk.Ay], () => rk.Ay.getSidechainCompression());
            return rk.Ay.supports(a0.O5.SIDECHAIN_COMPRESSION) && e;
        },
    }),
    uQ = (0, a.zD)(u.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
        useTitle: () => j.intl.string(j.t.lt8rRx),
        useSubtitle: () => j.intl.string(j.t.ie1mgY),
        useValue: function () {
            return (0, g.bG)([rk.Ay], () => rk.Ay.getUseSystemScreensharePicker());
        },
        setValue: function (e) {
            (0, c.cX)() && e
                ? (0, s1.A)({
                      title: j.intl.string(j.t["9jf31O"]),
                      subtitle: j.intl.string(j.t.uBd6JW),
                      variant: "primary",
                      onConfirm: () => {
                          a4.A.setUseSystemScreensharePicker(e), sI.A.app.relaunch();
                      },
                      confirmText: j.intl.string(j.t.BddRzS),
                  })
                : a4.A.setUseSystemScreensharePicker(e);
        },
        usePredicate: function () {
            return (0, g.bG)([rk.Ay], () => rk.Ay.supportsSystemScreensharePicker() && (0, c.cX)());
        },
    }),
    uJ = (0, a.bd)(u.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? j.intl.string(j.t.qrMyvm) : j.intl.string(j.t.LEtTNl)),
        useCollapsedSubtitle: () => lv(u.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [uZ, uq, uQ, uW, uK],
    }),
    u$ = (0, a.zZ)(u.X.STREAMING_CATEGORY, { useTitle: () => j.intl.string(j.t.KDdjou), buildLayout: () => [uH, uJ] });
var u0 = i(106713);
let u1 = (0, a.E2)(u.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = u0.A.useConfig({ location: "MicrophoneInputSelect" });
            return (0, E.jsx)(aq.U, {
                label: j.intl.string(j.t.UTM8VP),
                deviceType: a0.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    u2 = (0, a.E2)(u.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = u0.A.useConfig({ location: "SpeakerOutputSelect" });
            return (0, E.jsx)(aq.U, {
                label: j.intl.string(j.t.xuYQ0n),
                deviceType: a0.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    u3 = (0, a.zC)(u.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [u1, u2] }),
    u5 = (0, a.sN)(u.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => j.intl.string(j.t.Rtsr6w),
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = rk.Ay.getInputVolume();
            return (0, uy.M)(e);
        },
        asValueChanges: function (e) {
            let t = [e6.A.USER_SETTINGS_VOICE_AND_VIDEO],
                i = (0, uy.w)(e);
            a4.A.setInputVolume(i, { analyticsLocations: t });
        },
    }),
    u6 = (0, a.sN)(u.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => j.intl.string(j.t.aUJ062),
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = rk.Ay.getOutputVolume();
            return (0, uy.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [e6.A.USER_SETTINGS_VOICE_AND_VIDEO],
                i = (0, uy.w)(e);
            a4.A.setOutputVolume(i, { analyticsLocations: t });
        },
    }),
    u4 = (0, a.zC)(u.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [u5, u6] });
var u8 = i(702841),
    u7 = i(349288),
    u9 = i(152567),
    de = i(141218);
let dt = `${ty.A.getArticleURL(U.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    di = (0, a.E2)(u.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.nuFtHH)],
        usePredicate: function () {
            return (0, u8.bG)([rk.Ay], () => rk.Ay.supports(a0.O5.LOOPBACK));
        },
        Component: function () {
            return (0, u8.bG)([rk.Ay], () => rk.Ay.supports(a0.O5.LOOPBACK))
                ? (0, E.jsx)(u9.A, {
                      size: "md",
                      notchBackground: u9.V.GRAY,
                      captionVoice: j.intl.string(j.t.bp3JOV),
                      captionNoVoice: (0, E.jsxs)(E.Fragment, {
                          children: [
                              (0, E.jsx)(el.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-default",
                                  children: j.intl.string(j.t.bgn75v),
                              }),
                              j.intl.string(j.t["MA+OZh"]),
                              (0, E.jsx)(u7.Anchor, {
                                  className: de.X,
                                  href: ty.A.getArticleURL(U.MVz.NO_INPUT_DETECTED),
                                  children: j.intl.string(j.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: j.intl.format(j.t["V+B3FH"], { guideURL: dt }),
                      buttonTest: j.intl.string(j.t.gyljWE),
                      buttonStop: j.intl.string(j.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: U.liQ.USER_SETTINGS, section: U.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    dn = eZ.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function dl(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: i } = e;
    return (0, E.jsxs)(Q.B, {
        children: [
            i && (0, E.jsx)(rz, { sourcePage: "voice" }),
            t && (0, E.jsx)(ap.A, { look: ap.k.WARNING, children: j.intl.string(j.t.Ioz3gx) }),
        ],
    });
}
let ds = (0, a.zZ)(u.X.VOICE_CATEGORY, {
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
            let e = rB("voice"),
                t = (0, aQ.x5)(a0.oh.AUDIO_INPUT),
                i = (0, aQ.x5)(a0.oh.AUDIO_OUTPUT),
                n = S.useMemo(() => {
                    let e = dn.some((e) => t?.hardwareId?.startsWith(e)),
                        n = dn.some((e) => i?.hardwareId?.startsWith(e));
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
        buildLayout: () => [u3, u4, di],
    }),
    dr = (0, a.t_)(u.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => j.intl.string(j.t.B1fFpf),
        buildLayout: () => [ds, ul, a6, u$, uX, uL, oI],
    }),
    da = (0, a.i4)(u.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.B1fFpf),
        usePredicate: () => rk.Ay.isSupported(),
        icon: aw.c,
        useMenu: aF.A,
        buildLayout: () => [dr],
    }),
    du = (0, a.WI)(u.X.APP_SECTION, {
        useTitle: () => j.intl.string(j.t.gcyH1J),
        buildLayout: () => [da, sZ, ld, rG, ak, s$],
    });
var dd = i(360669),
    dc = i(974544),
    dg = i(423764),
    dm = i(289873),
    dA = i(132500),
    dh = i(465323),
    dE = i(37766),
    dS = i(194261),
    dT = i(391048),
    dx = i(277984),
    dp = i(99696),
    df = i(202613),
    dN = i(615405),
    d_ = i(580630),
    dI = i(83617),
    dC = i(935208),
    db = i(607399),
    dv = i(150934),
    dy = i(256006),
    dj = i(198970),
    dO = i(71532);
let dR = /[^0-9/]/g,
    dL = /[^0-9]/g;
class dD extends S.PureComponent {
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
            l,
            s,
            { value: r, onChange: a } = this.props,
            o = this._inputRef;
        if (e === r || null == o || null == r) return;
        let u =
                ((n = (i = e.replace(dR, "").split("/"))[0]),
                (l = i[1]),
                (s = []),
                parseInt(n, 10) > 12 && (n = n.substring(0, 1)),
                s.push(n),
                (parseInt(n, 10) > 1 || 2 === n.length || (null != l && "" !== l)) && s.push("/"),
                null != l && "" !== l && parseInt(l, 10) > 99 && (l = (l + "").substring(0, 2)),
                s.push(l),
                s.join("")),
            d = o.selectionStart;
        u === r && u.length <= 3 && r.includes("/") && !e.includes("/")
            ? (u = u.replace(dL, ""))
            : u === r && e.includes("/") && !r.includes("/") && (u += "/"),
            u.length > e.length && (d += u.length - e.length),
            (this.selectionStart = d),
            null != a && a(u, t);
    };
    render() {
        return (0, E.jsx)(rZ.k, {
            ...this.props,
            inputMode: "numeric",
            onChange: this.handleChange,
            inputRef: this.setRef,
        });
    }
}
var dP = i(832208),
    dG = i(729919);
let dM = [
        {
            fields: [
                {
                    expirationDate: {
                        name: "expirationDate",
                        id: (0, lJ.Ld)(),
                        title: () => j.intl.string(j.t["CeBa/4"]),
                        autoComplete: "cc-exp",
                        placeholder: () => j.intl.string(j.t.xeEWQ6),
                        pattern: "\\d*",
                        getClassNameForLayout: () => dG.ep,
                        renderInput: (e) => (0, E.jsx)(dD, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    dU = function (e) {
        let { onCardInfoChange: t, className: i, expirationDate: n, error: l } = e,
            [s, r] = S.useState(!1),
            [a, o] = S.useState(null),
            [u, d] = S.useState(n);
        return (
            S.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, E.jsx)(dP.A, {
                className: i,
                form: dM,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: l,
                onFieldChange: function (e) {
                    s || "" === e || r(!0),
                        (s && "" === e) || !(0, dO.So)(e) ? o(j.intl.string(j.t["9/zZdl"])) : o(null),
                        d(e);
                },
            })
        );
    };
var dV = i(219887),
    dk = i(520229);
let dw = "isDefault";
class dF extends S.PureComponent {
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
            expiresMonth: t instanceof df.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof df.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: i,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        lm.h.wait(() => {
            (0, dx.ey)(), (0, dx.tc)();
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
        let [n, l] = i.split("/");
        this.handleFieldChange(Number(n), "expiresMonth"),
            this.handleFieldChange(Number(`${new Date().getFullYear().toString().slice(0, 2)}${l}`), "expiresYear");
    };
    handleFieldChange = (e, t) => {
        null != t && this.setState({ [t]: e, dirtyFields: { ...this.state.dirtyFields, [t]: !0 } });
    };
    renderError() {
        let { updateError: e, removeError: t } = this.props;
        return null == e || e.hasCardError() || e.hasAddressError()
            ? null != t
                ? (0, E.jsx)("div", {
                      className: dk.zc,
                      children: (0, E.jsx)(q.w, { type: "critical", children: t.message }),
                  })
                : null
            : (0, E.jsx)("div", {
                  className: dk.zc,
                  children: (0, E.jsx)(q.w, { type: "critical", children: e.message }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: i } = this.props,
            n = (0, dy.g)(i);
        return (0, E.jsxs)("div", {
            className: dk.yV,
            children: [
                (0, E.jsx)(el.E, {
                    className: dk.bV,
                    variant: "text-sm/normal",
                    children: j.intl.string(j.t["50Auo2"]),
                }),
                (0, E.jsx)(dj.Ay, {
                    ...e,
                    mode: dj.Ay.Modes.EDIT,
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
            className: dk.yV,
            children: [
                (0, E.jsx)(el.E, { className: dk.bV, variant: "text-sm/normal", children: j.intl.string(j.t.Fo2YP7) }),
                (0, E.jsx)(dU, {
                    expirationDate: i,
                    onCardInfoChange: this.handleExpirationDateUpdate,
                    error: this.props.updateError,
                }),
            ],
        });
    }
    renderActions() {
        let { submitting: e, removing: t, isForSubscription: i } = this.props,
            { billingAddressValid: n, expirationValid: l } = this.state;
        return (0, E.jsx)("div", {
            className: dk.AU,
            children: (0, E.jsxs)(Q.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, E.jsx)(oi.e, {
                        children: (0, E.jsxs)("div", {
                            className: dk.lH,
                            children: [
                                i
                                    ? (0, E.jsx)(td.m, {
                                          text: j.intl.string(j.t["v6/z28"]),
                                          children: (0, E.jsx)("div", { "aria-hidden": !0, className: dk.dm }),
                                      })
                                    : null,
                                (0, E.jsx)(ek.$, {
                                    type: "button",
                                    disabled: i || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: db.Fr ? "sm" : "md",
                                    text: db.Fr ? j.intl.string(j.t.oyYWHE) : j.intl.string(j.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, E.jsxs)(oi.e, {
                        children: [
                            (0, E.jsx)(ek.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: db.Fr ? "sm" : "md",
                                text: j.intl.string(j.t["ETE/oC"]),
                            }),
                            (0, E.jsx)(ek.$, {
                                loading: e,
                                disabled: !n || t || !l,
                                type: "submit",
                                variant: "active",
                                size: db.Fr ? "sm" : "md",
                                text: j.intl.string(j.t["R3BPH+"]),
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
    render() {
        let { paymentSource: e, isDefault: t, locale: i, className: n, isForSubscription: l } = this.props,
            { isDefault: s } = this.state,
            r = e instanceof df.SJ;
        return (0, E.jsx)(eO.Z, {
            editable: !0,
            className: e7()(dk.Nr, n),
            children: (0, E.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, E.jsxs)("div", {
                        className: dk.__invalid_paymentSection,
                        children: [
                            (0, E.jsx)(dV.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: l,
                                locale: i,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, E.jsx)("div", { className: dk.Um, children: j.intl.string(j.t["3R0U0b"]) })
                                : null,
                            (0, E.jsx)("div", {
                                className: dk.Sv,
                                children: r
                                    ? j.intl.format(j.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : j.intl.string(j.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, E.jsx)("div", {
                        className: dk.D5,
                        children: (0, E.jsx)(dv.S, {
                            value: dw,
                            checked: s,
                            onChange: (e) => this.handleFieldChange(e, dw),
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
let dB = g.Ay.connectStores([dN.A], () => ({ updateError: dN.A.editSourceError, removeError: dN.A.removeSourceError }))(
    dF,
);
var dz = i(776409),
    dY = i(743526),
    dX = i(455218);
function dH() {
    (0, dp.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page", loadId: (0, dA.A)() });
}
class dK extends S.PureComponent {
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
            isForSubscription: l,
            locale: s,
            removing: r,
            submitting: a,
            onSubmit: o,
            onCancel: u,
            onDelete: d,
        } = this.props;
        return i
            ? (0, E.jsx)(dB, {
                  paymentSource: e,
                  isDefault: t,
                  removing: r,
                  submitting: a,
                  locale: s,
                  isForSubscription: l,
                  onSubmit: o,
                  onCancel: u,
                  onDelete: d,
              })
            : (0, E.jsxs)(E.Fragment, {
                  children: [
                      n ? null : (0, E.jsx)(ew.c, { className: dX.__invalid_sourceDivider }),
                      (0, E.jsxs)("div", {
                          className: dX.Yb,
                          children: [
                              (0, E.jsx)(dV.A, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: l,
                                  locale: s,
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
let dW = S.memo(function (e) {
    let { paymentSource: t, hideDivider: i, isForSubscription: n, locale: l, onRedeemClick: s } = e,
        [r, a] = S.useState(null),
        o = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, g.bG)([dN.A], () => dN.A.ipCountryCode),
        d = S.useMemo(() => (0, dh.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        S.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : dx.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, E.jsxs)(E.Fragment, {
            children: [
                i ? null : (0, E.jsx)(ew.c, { className: dX.__invalid_sourceDivider }),
                (0, E.jsxs)("div", {
                    className: dX.Yb,
                    children: [
                        void 0 !== t
                            ? (0, E.jsx)(dV.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: n,
                                  locale: l,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, E.jsxs)(r$.A, {
                                  align: r$.A.Align.CENTER,
                                  children: [
                                      (0, E.jsx)(dE._, { size: "lg" }),
                                      (0, E.jsx)(el.E, {
                                          variant: "text-sm/medium",
                                          className: dY.Wi,
                                          children: j.intl.string(dz.default["/FQWfA"]),
                                      }),
                                  ],
                              }),
                        (0, E.jsxs)("div", {
                            className: dX.zy,
                            children: [
                                (0, E.jsx)("div", {
                                    className: dX.Tq,
                                    children:
                                        null == r
                                            ? (0, E.jsx)(dm.y, { type: dm.y.Type.SPINNING_CIRCLE })
                                            : (0, E.jsx)(el.E, {
                                                  variant: "text-sm/medium",
                                                  children: (function () {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          i = t ?? d,
                                                          n = String(i).toUpperCase(),
                                                          l = (0, d_.$g)(e ?? 0, i, {
                                                              currencyDisplay: "narrowSymbol",
                                                          });
                                                      return `${n} ${l}`;
                                                  })(),
                                              }),
                                }),
                                (0, E.jsx)(ek.$, {
                                    variant: "secondary",
                                    onClick: s,
                                    size: "sm",
                                    text: j.intl.string(dz.default.hnRau6),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class dZ extends S.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            await dx.Gr(e), this.setState({ editingPayment: e });
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            await dx.JQ(e), this.setState({ editingPayment: null });
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                await dx.Ps(e, t), this.setState({ editingPayment: null });
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, dI.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, K.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 362111));
                return (t) => (0, E.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, dT.ET)();
                },
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, E.jsxs)("div", {
            className: dX.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, E.jsxs)("div", {
                          className: dX.z8,
                          children: [
                              (0, E.jsx)(el.E, { variant: "text-sm/normal", children: j.intl.string(j.t.aRHpAB) }),
                              (0, E.jsx)(el.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: dX.Sv,
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
                locale: l,
                removing: s,
                submitting: r,
                premiumSubscriptionPaymentSourceId: a,
                showGiftCards: o,
            } = this.props,
            u = e$()
                .values(n)
                .sort((e, t) => (e.id === i ? -1 : t.id === i ? 1 : dC.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof df.LQ)),
            c = u.filter((e) => e instanceof df.LQ),
            g = this.state.editingPayment,
            m = d.findIndex((e) => e.id === g),
            A = d.map((e, t) =>
                (0, E.jsx)(
                    dK,
                    {
                        locale: l,
                        paymentSource: e,
                        isDefault: i === e.id,
                        onCancel: this.handleCancel,
                        onDelete: this.handleDelete,
                        isForSubscription: e.id === a,
                        hideDivider: 0 === t || m === t - 1,
                        onSubmit: this.handleSubmit,
                        submitting: r,
                        removing: s,
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
                              dW,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || m === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: l,
                                  onRedeemClick: dH,
                              },
                              e.id,
                          ),
                      )
                    : (0, E.jsx)(dW, {
                          hideDivider: 0 === d.length || m === d.length - 1,
                          isForSubscription: !1,
                          locale: l,
                          onRedeemClick: dH,
                      })),
            (0, E.jsxs)(E.Fragment, {
                children: [
                    t
                        ? (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsxs)(eV.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, E.jsx)(dS.X, { size: "sm", className: dX.hz }),
                                          " ",
                                          j.intl.string(j.t.W26xGQ),
                                      ],
                                  }),
                                  (0, E.jsx)(el.E, {
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
var dq = i(459357),
    dQ = i(295405),
    dJ = i(166403),
    d$ = i(773669),
    d0 = i(844828);
function d1() {
    let e = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()?.storeCountry);
    return e?.country == null ? null : { country: e.country, countryName: (0, dg.Gw)(e.country) };
}
let d2 = (0, a.E2)(u.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                i = (0, g.bG)([dN.A], () => dN.A.isSyncing),
                n = (0, g.bG)([dQ.A], () => dQ.A.paymentSources),
                l = (0, g.bG)([dQ.A], () => dQ.A.defaultPaymentSourceId),
                s = (0, g.bG)([d$.default], () => d$.default.locale),
                r = (0, g.bG)([dJ.A], () => dJ.A.getPremiumTypeSubscription()),
                a = (0, g.bG)([dN.A], () => dN.A.isRemovingPaymentSource),
                o = (0, g.bG)([dN.A], () => dN.A.isUpdatingPaymentSource),
                { enabled: u } = (0, dq.c)({ location: "UserSettingsBilling" });
            return (S.useEffect(() => {
                dx.$o(), dx.hP();
            }, []),
            i && 0 === Object.keys(n).length)
                ? (0, E.jsx)("div", { className: d0.o, children: (0, E.jsx)(dm.y, {}) })
                : (0, E.jsx)(dZ, {
                      showHeader: t,
                      paymentSources: n,
                      defaultPaymentSourceId: l,
                      premiumSubscriptionPaymentSourceId:
                          null != r && r.status !== U.Dmq.CANCELED ? r.paymentSourceId : null,
                      locale: s,
                      removing: a,
                      submitting: o,
                      showGiftCards: u,
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t.W26xGQ), j.intl.string(j.t["3pIjBH"])],
    }),
    d3 = (0, a.zZ)(u.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.W26xGQ),
        useSubtitle: () => {
            let e = d1();
            return null != e ? j.intl.format(j.t.e2t1G5, { country: e.countryName }) : j.intl.string(j.t.h6V3uK);
        },
        useSubtitleDecoration: function () {
            return null == d1()
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
        buildLayout: () => [d2],
    });
var d5 = i(549363),
    d6 = i(545075);
let d4 = (0, a.E2)(u.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            let e = (0, g.bG)([d$.default], () => d$.default.locale);
            return (0, E.jsxs)(E.Fragment, { children: [(0, E.jsx)(d6.kb, {}), (0, E.jsx)(d5.A, { locale: e })] });
        },
        useSearchTerms: () => [j.intl.string(j.t.obLrcK)],
    }),
    d8 = (0, a.zZ)(u.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => j.intl.string(j.t.obLrcK),
        buildLayout: () => [d4],
    }),
    d7 = (0, a.t_)(u.X.BILLING_PANEL, {
        useTitle: () => j.intl.string(j.t.oeUm2s),
        buildLayout: () => [d3, d8],
        useObscuredNotice: dc.L,
    }),
    d9 = (0, a.i4)(u.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.oeUm2s),
        icon: dd.B,
        buildLayout: () => [d7],
    });
var ce = i(70283),
    ct = i(597770),
    ci = i(682618),
    cn = i(611881),
    cl = i(962644),
    cs = i(35587),
    cr = i(86379);
let ca = (0, a.E2)(u.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: d6.uK,
        usePredicate: () => (0, cr.Hp)(),
        useSearchTerms: () => [j.intl.string(j.t.vwMEHS)],
    }),
    co = (0, a.zZ)(u.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [ca] });
var cu = i(982240),
    cd = i(788833),
    cc = i(914410),
    cg = i(360615),
    cm = i(215082);
function cA(e) {
    let { tier: t, active: i = !1 } = e;
    return (0, E.jsxs)("div", {
        className: e7()(cm.fO, { [cm.bF]: i }),
        children: [
            null != t.simple_icon_url && (0, E.jsx)("img", { src: t.simple_icon_url, alt: "", className: cm.si }),
            (0, E.jsxs)("div", {
                className: cm.tc,
                children: [
                    (0, E.jsx)(el.E, { variant: "text-sm/semibold", color: "text-subtle", children: t.name ?? "" }),
                    (0, E.jsx)(el.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: j.intl.format(cg.default.qvx9E4, { count: (0, cu.rL)(t) }),
                    }),
                ],
            }),
        ],
    });
}
function ch(e) {
    let { tiers: t, currentTier: i } = e;
    return (0, E.jsx)("div", {
        className: cm.dw,
        children: t.map((e) => (0, E.jsx)(cA, { tier: e, active: e.key === i?.key }, e.key)),
    });
}
function cE(e) {
    let { analyticsLocation: t, location: i } = e,
        { analyticsLocations: n } = (0, n1.Ay)(e6.A.USER_SETTINGS_GIFT_INVENTORY),
        { openGiftModal: l } = (0, cd.$)({
            giftRecipient: void 0,
            analyticsLocations: n,
            analyticsObject: { object: U.ZSU.BUTTON_CTA, objectType: U.AnalyticsObjectTypes.GIFT },
            analyticsLocation: t,
            location: i,
        });
    return (0, E.jsx)("div", {
        className: cm.NG,
        children: (0, E.jsx)(ek.$, {
            variant: "primary",
            icon: ct.o,
            text: j.intl.string(cg.default.DZnomS),
            onClick: l,
        }),
    });
}
function cS(e) {
    let t,
        { badgeProgress: i, currentTier: n, nextTier: l, giftsRemaining: s } = e,
        r = (0, cu.rL)(n),
        a = (0, cu.rL)(l),
        o = (0, cn.GZ)(i, n, l);
    return (
        (t =
            null != l
                ? j.intl.formatToPlainString(cg.default.XTX3OO, { count: s, nextTier: l?.name ?? "" })
                : j.intl.formatToPlainString(cg.default.LnsdbK, { currentTier: n?.name ?? "" })),
        (0, E.jsxs)("div", {
            className: cm.mY,
            children: [
                n?.simple_icon_url != null &&
                    (0, E.jsx)("div", {
                        className: cm.fC,
                        children: (0, E.jsx)("img", { src: n.simple_icon_url, alt: "", className: cm.qS }),
                    }),
                (0, E.jsxs)("div", {
                    className: cm.Qs,
                    children: [
                        (0, E.jsx)(el.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                        (0, E.jsx)(cc.Ay, { variant: cc.qP.BLUE, weight: cc.fh.MEDIUM, progress: o }),
                        (0, E.jsx)(el.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: cm.qg,
                            children: j.intl.format(cg.default.iIpfQe, {
                                threshold: null != l ? a : r,
                                count: null != l ? i : r,
                            }),
                        }),
                    ],
                }),
                l?.simple_icon_url != null &&
                    (0, E.jsx)("div", {
                        className: cm.fC,
                        children: (0, E.jsx)("img", { src: l.simple_icon_url, alt: "", className: cm.qS }),
                    }),
            ],
        })
    );
}
function cT(e) {
    let { analyticsLocation: t } = e,
        {
            badgeProgress: i,
            currentTier: n,
            nextTier: l,
            giftsRemaining: s,
            tiers: r,
        } = (0, g.cf)([cu.Ay], () => ({
            badgeProgress: cu.Ay.getSingleRequirementProgress(ce.$.GIFTING)?.current ?? 0,
            currentTier: cu.Ay.getCurrentTier(ce.$.GIFTING),
            nextTier: cu.Ay.getNextTier(ce.$.GIFTING),
            giftsRemaining: cu.Ay.getRemainingToNextTier(ce.$.GIFTING),
            tiers: cu.Ay.getBadgeById(ce.$.GIFTING)?.tiers ?? [],
        }));
    return 0 === r.length
        ? null
        : (0, E.jsxs)("div", {
              className: cm.kL,
              children: [
                  (0, E.jsxs)("div", {
                      className: cm.Jo,
                      children: [
                          i > 0 &&
                              (0, E.jsxs)(E.Fragment, {
                                  children: [
                                      (0, E.jsx)(cS, {
                                          badgeProgress: i,
                                          currentTier: n,
                                          nextTier: l,
                                          giftsRemaining: s,
                                      }),
                                      (0, E.jsx)("div", { className: cm.yF }),
                                  ],
                              }),
                          (0, E.jsx)(ch, { tiers: r, currentTier: n }),
                          (0, E.jsx)(el.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: cm.PJ,
                              children: j.intl.string(cg.default["4Yp0mI"]),
                          }),
                      ],
                  }),
                  (0, E.jsx)(cE, { analyticsLocation: t, location: "UserSettingsGiftingBadgeProgress" }),
              ],
          });
}
let cx = (0, a.zZ)(u.X.GIFTING_BADGE_CATEGORY, {
        useTitle: () => j.intl.string(cg.default.sFokBp),
        buildLayout: () => [cp],
        usePredicate: () => {
            let e = (0, cn.F5)("gift_inventory"),
                t = (0, g.bG)([cu.Ay], () => cu.Ay.getBadgeById(ce.$.GIFTING));
            return e && null != t;
        },
    }),
    cp = (0, a.E2)(u.X.GIFTING_BADGE_CONTENT, {
        useSearchTerms: () => [j.intl.string(cg.default.sFokBp)],
        Component: () => (0, E.jsx)(cT, {}),
    });
var cf = i(264779),
    cN = i(412260),
    c_ = i(555393),
    cI = i(725807),
    cC = i(212168),
    cb = i(469778),
    cv = i(45938),
    cy = i(109802),
    cj = i(869038),
    cO = i(221347);
function cR(e) {
    let { children: t, className: i, splashArtURL: n } = e;
    return (0, E.jsxs)(r$.A, {
        className: e7()(cO.wx, i),
        align: r$.A.Align.CENTER,
        children: [
            (0, E.jsx)("div", { className: cO.Bn, style: null != n ? { backgroundImage: `url(${n})` } : void 0 }),
            t,
        ],
    });
}
function cL(e) {
    let { children: t, className: i } = e;
    return (0, E.jsx)("div", { className: e7()(cO.rf, i), children: t });
}
class cD extends S.PureComponent {
    static Header = cR;
    static Body = cL;
    render() {
        let { children: e, className: t, onMouseEnter: i, onMouseLeave: n } = this.props;
        return (0, E.jsx)("div", { className: e7()(cO.Nr, t), onMouseEnter: i, onMouseLeave: n, children: e });
    }
}
var cP = i(165191),
    cG = i(871123),
    cM = i(366523),
    cU = i(280450),
    cV = i(30793),
    ck = i(97352),
    cw = i(67480),
    cF = i(147925),
    cB = i(957565),
    cz = i(615396),
    cY = i(990125);
class cX extends S.PureComponent {
    _copyModeTimeout = new oz.Ep();
    state = { copyMode: cy.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case cy.q.SUCCESS:
                return j.intl.string(j.t.XVvPjU);
            case cy.q.ERROR:
                return j.intl.string(j.t.i4GM3L);
            default:
                return j.intl.string(j.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        cj.A.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: i } = this.props;
        (0, cv.AK)(t, i),
            (0, cB.C)(
                e,
                () => this.setState({ copyMode: cy.q.SUCCESS }),
                () => this.setState({ copyMode: cy.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: cy.q.DEFAULT });
            });
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: i } = this.state;
        return (0, E.jsxs)(r$.A, {
            direction: r$.A.Direction.VERTICAL,
            className: cY.Gj,
            children: [
                (0, E.jsx)(cy.e, {
                    className: cY.ph,
                    value: (0, cv.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: i,
                    supportsCopy: cB.p5,
                    hideMessage: e ? j.intl.string(j.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: oe.XD.BRAND,
                    buttonLook: oe.pR.FILLED,
                }),
                (0, E.jsxs)("div", {
                    className: cY.KB,
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
class cH extends S.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: i, giftStyle: n } = this.props;
        this.setState({ isCreating: !0 }),
            await cj.A.createGiftCode(t, i, n),
            this.setState({ isCreating: !1, isOpen: !0 });
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: i } = this.props,
            n = !this.state.isOpen;
        (null == i || null == this._loadedAt || i < this._loadedAt) && n && cj.A.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen });
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: i } = this.props;
        return (0, cG.bF)(e)
            ? (0, E.jsx)(cM.e, { shape: "square", sku: e, containerClassName: cY.ez })
            : null != t
              ? (0, E.jsx)(cP.A, { giftStyle: t, className: cY.ez, shouldAnimate: this.state.isHovered })
              : (0, E.jsx)(p.A, { game: i, size: p.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: i } = this.props;
        return (0, cG.bF)(e)
            ? (0, E.jsxs)("div", {
                  className: e7()(cY.Oc, cY.ic),
                  children: [
                      (0, E.jsx)(p.A, { game: i, size: p.M.XSMALL, skuId: e.id, className: cY._u }),
                      j.intl.format(j.t["6plpZi"], { applicationName: i.name, copies: t.length }),
                  ],
              })
            : (0, E.jsx)("div", { className: cY.Oc, children: j.intl.format(j.t.zMcvcA, { copies: t.length }) });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: i, giftCodeBatchId: n } = this.props;
        return (
            (e =
                n === l0.FB
                    ? j.intl.string(j.t.odsU6W)
                    : n === l0.Bu && null != i
                      ? j.intl.formatToPlainString(i.interval === l0.WT.MONTH ? j.t.uZjpiJ : j.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: i.intervalCount,
                        })
                      : null == i
                        ? t.name
                        : j.intl.formatToPlainString(i.interval === l0.WT.MONTH ? j.t.rCJvqo : j.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: i.intervalCount,
                          })),
            (0, E.jsx)("div", { className: cY.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, E.jsxs)(r$.A, {
            justify: r$.A.Justify.BETWEEN,
            align: r$.A.Align.CENTER,
            className: cY.pe,
            children: [
                (0, E.jsx)(el.E, { variant: "text-md/normal", children: j.intl.string(j.t.lELyPj) }),
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
                sku: l,
                isFetching: s,
                hideCodes: r,
            } = this.props,
            { isOpen: a } = this.state;
        return (0, E.jsxs)(cD, {
            className: n,
            children: [
                (0, E.jsx)(en.D, {
                    onClick: this.handleToggleOpen,
                    className: cY.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, E.jsx)(cD.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, E.jsxs)("div", {
                            className: cY.MY,
                            children: [
                                (0, E.jsxs)(r$.A, {
                                    align: r$.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, E.jsxs)("div", {
                                            className: cY.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, E.jsx)(cF.A, {
                                    direction: a ? cF.A.Directions.UP : cF.A.Directions.DOWN,
                                    className: cY.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, E.jsx)(cD.Body, {
                          children: s
                              ? (0, E.jsx)(dm.y, { className: cY.u1 })
                              : (0, E.jsxs)(S.Fragment, {
                                    children: [
                                        i.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        i.map((e) => (0, E.jsx)(cX, { giftCode: e, sku: l, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let cK = g.Ay.connectStores([cw.A, eX.A, cV.A, x.A, ck.A, cU.default], (e) => {
    let { skuId: t, subscriptionPlanId: i, giftStyle: n } = e,
        l = cw.A.get(t);
    if (null == l) throw Error("SKU was unavailable while rendering gift.");
    let s = cV.A.getForGifterSKUAndPlan(cU.default.getId(), t, i)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === n);
    return {
        sku: l,
        hideCodes: eX.A.enabled,
        isFetching: cV.A.getUserGiftCodesFetchingForSKUAndPlan(t, i),
        loadedAt: cV.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, i),
        application: x.A.getApplication(l.applicationId),
        subscriptionPlan: null != i ? (0, cz.c9)(i) : null,
        giftCodes: s,
    };
})(cH);
var cW = i(725570),
    cZ = i(736653),
    cq = i(46054);
let cQ = rl().duration(30, "days");
var cJ = i(416052),
    c$ = i(53070);
function c0(e) {
    let { onClose: t, transitionState: i } = e;
    return (0, E.jsx)(rW.Modal, {
        title: "",
        size: "md",
        input: (0, E.jsx)("div", { className: c$.aR }),
        onClose: async () => await t(),
        actions: [{ text: j.intl.string(j.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: i,
        children: (0, E.jsxs)("div", {
            className: c$.t4,
            children: [
                (0, E.jsx)(eV.D, { variant: "heading-xl/semibold", children: j.intl.string(j.t.iufib1) }),
                (0, E.jsx)(el.E, { variant: "text-md/normal", className: c$.G3, children: j.intl.string(j.t.eAn6z2) }),
            ],
        }),
    });
}
let c1 = function (e) {
    let { onClose: t, onClaim: i, code: n, outboundPromotion: l, transitionState: s } = e,
        [r, a] = S.useState(null),
        o = (0, lJ.GV)(),
        { analyticsLocations: u } = (0, n1.Ay)(e6.A.USER_SETTINGS_GIFT_INVENTORY);
    return (S.useEffect(() => {
        null == n &&
            (0, cf.kd)({
                promotionId: l.id,
                promotionTitle: l.outboundTitle,
                partnerId: l.partnerId,
                analyticsLocations: u,
            })
                .then((e) => i(e))
                .catch((e) => a(e?.body?.code));
    }, [n, l.id, l.outboundTitle, l.partnerId, i, u]),
    null != r)
        ? (0, E.jsx)(c0, { onClose: t, transitionState: s })
        : null == n
          ? (0, E.jsx)(dm.y, { className: c$.Lq })
          : (0, E.jsx)(rW.Modal, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, E.jsxs)("div", {
                    className: c$.N1,
                    children: [
                        (0, E.jsx)("div", { className: c$.Qw }),
                        (0, E.jsx)(eV.D, { variant: "heading-xl/semibold", children: j.intl.string(j.t["23BfZh"]) }),
                        (0, E.jsx)(el.E, {
                            variant: "text-md/normal",
                            className: c$.G3,
                            children: l.outboundRedemptionModalBody,
                        }),
                    ],
                }),
                actions: [
                    { text: j.intl.string(j.t.TulDPl), variant: "secondary", onClick: async () => await t() },
                    {
                        text: j.intl.string(j.t["+zx47d"]),
                        variant: "primary",
                        onClick: () => {
                            let e = (0, cf.kc)(n, l);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: s,
                "aria-label": o,
                children: (0, E.jsxs)("div", {
                    children: [
                        (0, E.jsx)(ew.c, { className: c$.M5 }),
                        (0, E.jsx)(l8.D, {
                            label: j.intl.string(j.t.s9LFQh),
                            helperText: j.intl.string(j.t["F+nFTZ"]),
                            children: (0, E.jsx)(cJ.A, {
                                value: n,
                                buttonColor: oe.$n.Colors.BRAND,
                                buttonLook: oe.$n.Looks.FILLED,
                                delay: 1e3,
                            }),
                        }),
                    ],
                }),
            });
};
var c2 = i(707554),
    c3 = i(339048),
    c5 = i(104589);
function c6() {
    let e = (0, g.yK)([cb.A], () => cb.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        t = e$().groupBy(e, (e) => (0, cv.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [i, n] = S.useState(!1);
    if (
        (S.useEffect(() => {
            lm.h.wait(() => {
                (0, c3.XJ)().then(() => n(!0));
            });
        }, []),
        !i)
    )
        return (0, E.jsx)(dm.y, { className: c5.Lq });
    if (0 === Object.keys(t).length)
        return (0, E.jsxs)("div", {
            className: c5.p$,
            children: [
                (0, E.jsx)("div", { className: c5.QT }),
                (0, E.jsx)(c2.H, { className: c5.ks, children: j.intl.string(j.t.B1qgZn) }),
                (0, E.jsx)("p", {
                    className: c5.WO,
                    children: j.intl.format(j.t.HezvJ8, {
                        onClick: function () {
                            (0, eq.openUserSettings)(u.X.NITRO_PANEL);
                        },
                    }),
                }),
            ],
        });
    let l = e$()
        .keys(t)
        .map((e) => {
            let { skuId: i, subscriptionPlanId: n, giftStyle: l } = (0, cv.X6)(e);
            return (0, E.jsx)(cK, { skuId: i, subscriptionPlanId: n, entitlements: t[e], giftStyle: l }, e);
        });
    return (0, E.jsx)(Q.B, { gap: "lg", children: l });
}
function c4(e) {
    let t,
        { outboundPromotion: i, code: n } = e,
        [l, s] = S.useState(!1),
        [r, a] = S.useState(!1);
    function o() {
        return s((e) => !e);
    }
    let u = (0, cZ.Ay)(),
        d = (0, cf.WD)(i.id, u),
        c = null != n,
        g = S.useMemo(
            () =>
                (0, rs.i$)(
                    c
                        ? null != i.outboundRedemptionEndDate
                            ? rl()(i.outboundRedemptionEndDate)
                            : rl()(i.endDate).add(cQ)
                        : rl()(i.endDate),
                    "LL",
                ),
            [i, c],
        );
    c && l
        ? (t = j.intl.format(j.t.pkxVx6, { endDate: g, onClickDetails: o }))
        : c && !l
          ? (t = j.intl.format(j.t["4sFeob"], { endDate: g, onClickDetails: o }))
          : !c && l
            ? (t = j.intl.format(j.t["RBnE+l"], { endDate: g, onClickDetails: o }))
            : c || l || (t = j.intl.format(j.t["57+7Qn"], { endDate: g, onClickDetails: o }));
    let m = c ? j.intl.string(j.t["2cHUti"]) : j.intl.string(j.t.O13yhz),
        A = (0, c_.N)()?.isEligible === !0,
        h = S.useCallback(() => a(!1), []),
        { outboundTitle: T, outboundTermsAndConditions: x } = i;
    return (0, E.jsxs)(E.Fragment, {
        children: [
            (0, E.jsxs)("div", {
                className: c5.AX,
                children: [
                    (0, E.jsxs)("div", {
                        className: c5.Pg,
                        children: [
                            (0, E.jsxs)("div", {
                                className: c5.At,
                                children: [
                                    (0, E.jsx)("div", {
                                        className: c5.$G,
                                        children: (0, E.jsx)("img", { alt: "", src: d, className: c5.IJ }),
                                    }),
                                    (0, E.jsxs)("div", {
                                        children: [
                                            (0, E.jsx)(eV.D, { variant: "heading-md/semibold", children: T }),
                                            (0, E.jsx)(el.E, {
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
                    l &&
                        (0, E.jsx)(el.E, {
                            className: c5.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: cq.A.parse(x, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            r &&
                (0, E.jsx)(cW.aF, {
                    renderModal: (e) =>
                        (0, E.jsx)(c1, {
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
function c8(e) {
    let { redesign: t = !1 } = e,
        i = (0, g.yK)([cb.A], () => cb.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null != t;
        }),
        n = (0, c_.N)()?.isEligible ?? null,
        {
            activeOutboundPromotions: l,
            claimedEndedOutboundPromotions: s,
            claimedOutboundPromotionCodeMap: r,
        } = (0, cs.y7)(),
        a = i.find((e) => e.giftCodeBatchId === l0.FB && !e.consumed),
        o = i.filter((e) => e.giftCodeBatchId === l0.Bu && !e.consumed) ?? [],
        [u, d] = e$().partition(o, (e) => {
            let { subscriptionPlanId: t } = e;
            return t === l0.gD.PREMIUM_YEAR_TIER_2;
        }),
        c = l.length + s.length > 0,
        m =
            t || !c
                ? null
                : (0, E.jsxs)("div", {
                      className: c5.N1,
                      children: [
                          (0, E.jsx)(eV.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.wFsj3B) }),
                          (0, E.jsx)(ew.c, { className: c5.yF }),
                      ],
                  }),
        A =
            !1 === n && c
                ? (0, E.jsxs)("div", {
                      className: c5.uo,
                      children: [
                          (0, E.jsx)(us.t, {
                              size: "md",
                              color: er.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: c5.PC,
                          }),
                          (0, E.jsx)(el.E, {
                              variant: "text-md/normal",
                              className: c5.Qw,
                              children: j.intl.format(j.t.G4fwxK, {
                                  onClick: () => {
                                      (0, lZ.default)(), (0, l7.pX)(U.BVt.APPLICATION_STORE);
                                  },
                              }),
                          }),
                          (0, E.jsx)(cI.A, {
                              showGradient: !0,
                              className: c5.aA,
                              subscriptionTier: l0.pe.TIER_2,
                              textOptions: { textOverride: j.intl.string(j.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
    return (0, E.jsxs)("div", {
        children: [
            m,
            (0, E.jsx)(cC.A, {
                className: c5.Yj,
                isShown: !1 === n && c,
                type: cC.i.PREMIUM,
                hasBackground: !0,
                children: (0, E.jsxs)("div", {
                    className: c5.DE,
                    children: [
                        A,
                        s.map((e) => {
                            let { code: t, promotion: i } = e;
                            return (0, E.jsx)(c4, { outboundPromotion: i, code: t }, i.id);
                        }),
                        l.map((e) => (0, E.jsx)(c4, { outboundPromotion: e, code: r[e.id] }, e.id)),
                        null != a
                            ? (0, E.jsx)(
                                  cK,
                                  {
                                      skuId: a.skuId,
                                      subscriptionPlanId: a.subscriptionPlanId,
                                      entitlements: [a],
                                      giftCodeBatchId: l0.FB,
                                  },
                                  (0, cv.Kx)(a.skuId, a.subscriptionPlanId),
                              )
                            : null,
                        u.length > 0
                            ? (0, E.jsx)(
                                  cK,
                                  {
                                      skuId: u[0].skuId,
                                      subscriptionPlanId: u[0].subscriptionPlanId,
                                      entitlements: u,
                                      giftCodeBatchId: l0.Bu,
                                  },
                                  (0, cv.Kx)(u[0].skuId, u[0].subscriptionPlanId),
                              )
                            : null,
                        d.length > 0
                            ? (0, E.jsx)(
                                  cK,
                                  {
                                      skuId: d[0].skuId,
                                      subscriptionPlanId: d[0].subscriptionPlanId,
                                      entitlements: d,
                                      giftCodeBatchId: l0.Bu,
                                  },
                                  (0, cv.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                    ],
                }),
            }),
        ],
    });
}
let c7 = (0, a.zZ)(u.X.MY_GIFTS_CATEGORY, {
        useTitle: ge,
        buildLayout: () => [c9],
        usePredicate: () => {
            let { claimedOutboundPromotionCodes: e, claimedOutboundPromotionCodesLoaded: t } = (0, g.cf)(
                    [cN.A],
                    () => ({
                        claimedOutboundPromotionCodes: cN.A.claimedOutboundPromotionCodes,
                        claimedOutboundPromotionCodesLoaded: cN.A.claimedOutboundPromotionCodesLoaded,
                    }),
                ),
                i = (0, cs.T1)({ includeClaimedPromotions: !0 }),
                n = (0, cf.Wl)(e, i).length;
            return t && i.length + n > 0;
        },
    }),
    c9 = (0, a.E2)(u.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [ge()],
        Component: () => (0, E.jsx)(c8, { redesign: !0 }),
    });
function ge() {
    return j.intl.string(j.t.YzjdWJ);
}
let gt = (0, a.zZ)(u.X.PURCHASED_GIFTS_CATEGORY, { useTitle: gn, buildLayout: () => [gi] }),
    gi = (0, a.E2)(u.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [gn()], Component: () => (0, E.jsx)(c6, {}) });
function gn() {
    return j.intl.string(j.t.FWe6CP);
}
var gl = i(532446),
    gs = i(499454);
class gr extends S.Component {
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
                    await (0, dp.Qp)(i),
                        (0, dp.HF)({
                            initialCode: i,
                            withRedemptionSuccessModal: !0,
                            source: "user_settings_gift_code_redemption",
                            loadId: (0, dA.A)(),
                        }),
                        this.setState({ codeInput: "" });
                    return;
                } catch {}
            let e = (0, cv.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let n = await cj.A.resolveGiftCode(e);
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
                (0, gs.h)({ processedCode: e }),
                this.setState({ codeInput: "" });
        } catch (e) {
            this.setState({ hasError: !0 });
        } finally {
            this.setState({ submitting: !1 });
        }
    };
    render() {
        let { redesign: e, obscureInput: t } = this.props,
            { codeInput: i, submitting: n, hasError: l, isPromoCode: s } = this.state,
            r = e ? j.intl.string(j.t["hVEn/j"]) : j.intl.string(j.t.SeKIoS),
            a = e ? j.intl.string(j.t.epHMtp) : void 0;
        return (0, E.jsx)(ij.n, {
            label: e ? void 0 : j.intl.string(j.t["il+VCo"]),
            children: (0, E.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, E.jsxs)(gl.M, {
                    children: [
                        (0, E.jsx)(rZ.k, {
                            label: r,
                            description: a,
                            type: t ? "password" : "text",
                            value: i,
                            onChange: this.handleChange,
                            placeholder: "WUMP-AAAAA-BBBBB-CCCCC",
                            error: !s && l ? j.intl.string(j.t.Y11a2u) : null,
                            helperText: s
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
function ga(e) {
    let { redesign: t = !1 } = e,
        { enabled: i } = (0, dq.c)({ location: "UserSettingsBilling" }),
        n = S.useContext(G.AnalyticsContext),
        l = (0, g.bG)([eX.A], () => eX.A.enabled);
    return (0, E.jsx)(gr, { analyticsContext: n, obscureInput: l, acceptGiftCardRedemption: i, redesign: t });
}
let go = (0, a.zZ)(u.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => j.intl.string(j.t["il+VCo"]),
        buildLayout: () => [gu],
        usePredicate: () => !(0, cr.Hp)(),
    }),
    gu = (0, a.E2)(u.X.REDEEM_CODE_INPUT, {
        Component: () => (0, E.jsx)(ga, { redesign: !0 }),
        useSearchTerms: () => [j.intl.string(j.t["jcSP+g"]), j.intl.string(j.t["il+VCo"])],
    }),
    gd = (0, a.t_)(u.X.GIFT_PANEL, {
        useTitle: () => j.intl.string(j.t["jcSP+g"]),
        buildLayout: () => [go, c7, cx, gt, co],
        initialize: () => {
            cl.Ay.fetchClaimedOutboundPromotionCodes(), (0, cn.Ig)("gift_inventory") && (0, ci.o0)(ce.$.GIFTING);
        },
    }),
    gc = (0, a.i4)(u.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["jcSP+g"]),
        icon: ct.o,
        usePersistentBadge: function () {
            let e = (0, cs.IO)().length;
            return S.useMemo(() => ({ badgeType: h.Xi.COUNT, count: e }), [e]);
        },
        buildLayout: () => [gd],
    });
var gg = i(659758),
    gm = i(663367),
    gA = i(815846);
let gh = (0, a.E2)(u.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, g.bG)([iA.default], () => iA.default.getCurrentUser());
            return (0, uA.YE)(e, l0.PremiumTypes.TIER_2) ? (0, E.jsx)(gA.A, {}) : (0, E.jsx)(gm.A, {});
        },
        useSearchTerms: () => [j.intl.string(j.t.Ipxkog)],
    }),
    gE = (0, a.zZ)(u.X.NITRO_CATEGORY, { buildLayout: () => [gh] }),
    gS = (0, a.t_)(u.X.NITRO_PANEL, {
        useTitle: () => j.intl.string(j.t.Ipxkog),
        useObscuredNotice: dc.L,
        buildLayout: () => [gE],
    }),
    gT = (0, a.i4)(u.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.Ipxkog),
        icon: us.t,
        usePersistentBadge: function (e) {
            let t = (0, gg.e)(e);
            return S.useMemo(() => ({ badgeType: h.Xi.STRONGLY_DISCOURAGED_CUSTOM, customBadge: t }), [t]);
        },
        buildLayout: () => [gS],
    });
var gx = i(104510),
    gp = i(820739),
    gf = i(73825),
    gN = i(160946);
let g_ = (0, i(240921).Ay)({
    name: "2026-03-boosting-settings-refresh",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var gI = i(859241),
    gC = i(531260),
    gb = i(369163),
    gv = i(957485),
    gy = i(926268),
    gj = i(253449),
    gO = i(93364);
function gR(e) {
    let { className: t, icon: i, children: n } = e;
    return (0, E.jsxs)("li", {
        className: e7()(gj.Nr, t),
        children: [
            (0, E.jsx)(i, { className: gj.Kk }),
            (0, E.jsx)(el.E, { className: gj.__invalid_description, variant: "text-sm/medium", children: n }),
        ],
    });
}
let gL = function (e) {
    let { cardClassName: t } = e;
    return (0, E.jsxs)("div", {
        className: gj.iE,
        children: [
            (0, E.jsxs)("div", {
                className: gj.Qs,
                children: [
                    (0, E.jsx)(eV.D, {
                        className: gj.R_,
                        color: "text-overlay-light",
                        variant: "heading-xxl/bold",
                        children: j.intl.string(j.t.IzKs3o),
                    }),
                    (0, E.jsxs)("ul", {
                        className: gj.kR,
                        children: [
                            (0, E.jsx)(gR, { className: t, icon: gb.v, children: j.intl.string(j.t.TZigSO) }),
                            (0, E.jsx)(gR, {
                                className: t,
                                icon: (e) =>
                                    (0, E.jsx)("img", { className: e7()(e.className, gj.Dp), src: gO, alt: "" }),
                                children: j.intl.string(j.t.hjQuV2),
                            }),
                            (0, E.jsx)(gR, { className: t, icon: gv.i, children: j.intl.string(j.t["2RUcaM"]) }),
                            (0, E.jsx)(gR, { className: t, icon: gy.C, children: j.intl.string(j.t.bJoZKV) }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)("div", { className: gj.JP }),
        ],
    });
};
var gD = i(834040),
    gP = i(999747);
let gG = [
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
    gM = function (e) {
        let { className: t } = e,
            [i, n] = S.useState(null);
        return (0, E.jsxs)("div", {
            className: e7()(gP.iE, t),
            children: [
                (0, E.jsx)(eV.D, {
                    className: gP.R_,
                    variant: "heading-xxl/bold",
                    children: j.intl.string(j.t.HPJ6Nj),
                }),
                (0, E.jsx)("ul", {
                    className: gP.p_,
                    children: gG.map((e, t) => {
                        let l = i === t;
                        return (0, E.jsxs)(
                            "div",
                            {
                                className: gP.Aw,
                                children: [
                                    (0, E.jsxs)(en.D, {
                                        className: e7()(gP.k7, { [gP.lo]: l }),
                                        onClick: () => n((e) => (e === t ? null : t)),
                                        tag: "li",
                                        children: [
                                            (0, E.jsx)(el.E, {
                                                className: gP.b1,
                                                variant: "text-lg/normal",
                                                children: e.getQuestion(),
                                            }),
                                            l
                                                ? (0, E.jsx)(gD.Q, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: gP.q4,
                                                  })
                                                : (0, E.jsx)(rM.j, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: gP.q4,
                                                  }),
                                        ],
                                    }),
                                    l &&
                                        (0, E.jsx)(el.E, {
                                            className: gP.ZF,
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
var gU = i(462887),
    gV = i(933832),
    gk = i(789645),
    gw = i(116891),
    gF = i(537532);
let gB = [
    {
        getPerkHeading: () => j.intl.string(j.t.tIiwuj),
        getPerkPreviewLightTheme: () => i(604203),
        getPerkPreviewDarkTheme: () => i(878515),
        getTier0Value: () => l0.TG[U.TVA.NONE].limits.emoji,
        getTier1Value: () => l0.TG[U.TVA.TIER_1].limits.emoji,
        getTier2Value: () => l0.TG[U.TVA.TIER_2].limits.emoji,
        getTier3Value: () => l0.TG[U.TVA.TIER_3].limits.emoji,
    },
    {
        getPerkHeading: () => j.intl.string(j.t["3iccet"]),
        getPerkPreviewLightTheme: () => i(105732),
        getPerkPreviewDarkTheme: () => i(857020),
        getTier0Value: () => l0.TG[U.TVA.NONE].limits.stickers,
        getTier1Value: () => l0.TG[U.TVA.TIER_1].limits.stickers,
        getTier2Value: () => l0.TG[U.TVA.TIER_2].limits.stickers,
        getTier3Value: () => l0.TG[U.TVA.TIER_3].limits.stickers,
    },
    {
        getPerkHeading: () => j.intl.string(j.t["+smCv9"]),
        getPerkPreviewLightTheme: () => i(597890),
        getPerkPreviewDarkTheme: () => i(297642),
        getTier0Value: () => l0.TG[U.TVA.NONE].limits.soundboardSounds,
        getTier1Value: () => l0.TG[U.TVA.TIER_1].limits.soundboardSounds,
        getTier2Value: () => l0.TG[U.TVA.TIER_2].limits.soundboardSounds,
        getTier3Value: () => l0.TG[U.TVA.TIER_3].limits.soundboardSounds,
    },
    {
        getPerkHeading: () => j.intl.string(j.t.SMYauD),
        getPerkPreviewLightTheme: () => i(323091),
        getPerkPreviewDarkTheme: () => i(261835),
        getTier0Value: () =>
            j.intl.formatToPlainString(j.t.zZ6Rdi, {
                resolution: l0.TG[U.TVA.NONE].limits.screenShareQualityResolution,
                framerate: l0.TG[U.TVA.NONE].limits.screenShareQualityFramerate,
            }),
        getTier1Value: () =>
            j.intl.formatToPlainString(j.t.zZ6Rdi, {
                resolution: l0.TG[U.TVA.TIER_1].limits.screenShareQualityResolution,
                framerate: l0.TG[U.TVA.TIER_1].limits.screenShareQualityFramerate,
            }),
        getTier2Value: () =>
            j.intl.formatToPlainString(j.t.zZ6Rdi, {
                resolution: (0, gw.eT)("GuildBoostingMarketingTierComparisonTable"),
                framerate: l0.TG[U.TVA.TIER_2].limits.screenShareQualityFramerate,
            }),
        getTier3Value: () =>
            j.intl.formatToPlainString(j.t.zZ6Rdi, {
                resolution: (0, gw.eT)("GuildBoostingMarketingTierComparisonTable"),
                framerate: l0.TG[U.TVA.TIER_3].limits.screenShareQualityFramerate,
            }),
    },
    {
        getPerkHeading: () => j.intl.string(j.t["/79IDj"]),
        getPerkPreviewLightTheme: () => i(913997),
        getPerkPreviewDarkTheme: () => i(95781),
        getTier0Value: () =>
            j.intl.formatToPlainString(j.t.w1gmLt, { bitrate: l0.TG[U.TVA.NONE].limits.bitrate / 1e3 }),
        getTier1Value: () =>
            j.intl.formatToPlainString(j.t.w1gmLt, { bitrate: l0.TG[U.TVA.TIER_1].limits.bitrate / 1e3 }),
        getTier2Value: () =>
            j.intl.formatToPlainString(j.t.w1gmLt, { bitrate: l0.TG[U.TVA.TIER_2].limits.bitrate / 1e3 }),
        getTier3Value: () =>
            j.intl.formatToPlainString(j.t.w1gmLt, { bitrate: l0.TG[U.TVA.TIER_3].limits.bitrate / 1e3 }),
    },
    {
        getPerkHeading: () => j.intl.string(j.t.R1U2xC),
        getPerkPreviewLightTheme: () => i(389833),
        getPerkPreviewDarkTheme: () => i(754561),
        getTier0Value: () =>
            j.intl.formatToPlainString(j.t.pIn7Af, { size: l0.TG[U.TVA.NONE].limits.fileSize / 1048576 }),
        getTier1Value: () =>
            j.intl.formatToPlainString(j.t.pIn7Af, { size: l0.TG[U.TVA.TIER_1].limits.fileSize / 1048576 }),
        getTier2Value: () =>
            j.intl.formatToPlainString(j.t.pIn7Af, { size: l0.TG[U.TVA.TIER_2].limits.fileSize / 1048576 }),
        getTier3Value: () =>
            j.intl.formatToPlainString(j.t.pIn7Af, { size: l0.TG[U.TVA.TIER_3].limits.fileSize / 1048576 }),
    },
    {
        getPerkHeading: () => j.intl.string(j.t.f6vfso),
        getPerkPreviewLightTheme: () => i(735669),
        getPerkPreviewDarkTheme: () => i(283517),
        getTier0Value: () => l0.TG[U.TVA.NONE].limits.stageVideoUsers,
        getTier1Value: () => l0.TG[U.TVA.TIER_1].limits.stageVideoUsers,
        getTier2Value: () => l0.TG[U.TVA.TIER_2].limits.stageVideoUsers,
        getTier3Value: () => l0.TG[U.TVA.TIER_3].limits.stageVideoUsers,
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
function gz(e) {
    let { children: t, className: i, tier: n } = e,
        l = n === U.TVA.NONE ? "text-muted" : "text-strong",
        s = n === U.TVA.NONE || null == n ? "heading-xl/normal" : "heading-xl/bold";
    return (0, E.jsxs)("th", {
        className: e7()(gF.PG, i),
        scope: "col",
        children: [
            (0, E.jsx)(eV.D, { color: l, variant: s, children: t }),
            null != n &&
                (0, E.jsx)(el.E, {
                    color: l,
                    variant: "text-md/normal",
                    children: j.intl.format(j.t["pob/cL"], { subscriptions: U.M2T[n] }),
                }),
        ],
    });
}
function gY(e) {
    let t,
        { className: i, textVariant: n = "text-md/bold", value: l } = e;
    if ("boolean" == typeof l) {
        let e = e7()(gF.Jk, { [gF.I$]: l });
        t = l
            ? (0, E.jsx)(gV.A, { size: "md", color: "currentColor", className: e })
            : (0, E.jsx)(gk.P, { size: "md", color: "currentColor", className: e });
    } else t = (0, E.jsx)(el.E, { color: "interactive-text-active", variant: n, children: l });
    return (0, E.jsx)("td", { className: e7()(gF.xR, i), children: t });
}
function gX(e) {
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
              className: e7()(gF.ER, { [gF.GH]: i === U.TVA.TIER_2, [gF.z5]: i === U.TVA.TIER_3 }),
              children: (0, E.jsx)(el.E, {
                  className: gF.uQ,
                  color: "text-overlay-light",
                  variant: "text-xs/bold",
                  children: t === U.TVA.TIER_3 ? j.intl.string(j.t.d849Up) : j.intl.string(j.t.dZeX1z),
              }),
          });
}
function gH(e) {
    let { isFocused: t, handleFocus: i, handleRowBlur: n, theme: l, row: s, hideTier0: r } = e,
        a = S.useRef(null);
    return (0, E.jsxs)("tr", {
        className: gF.__invalid_tableRow,
        children: [
            (0, E.jsx)("th", {
                className: e7()(gF.xR, gF.uB),
                scope: "row",
                children: (0, E.jsx)(en.D, {
                    className: e7()(gF.VC, gF.xR, gF.Rk),
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
                                className: gF.Mz,
                                src: (0, gU.M)(l) ? s.getPerkPreviewDarkTheme() : s.getPerkPreviewLightTheme(),
                                alt: "",
                            }),
                        shouldShow: t,
                        spacing: 16,
                        children: () =>
                            (0, E.jsx)(el.E, { variant: "text-md/normal", ref: a, children: s.getPerkHeading() }),
                    }),
                }),
            }),
            !r && (0, E.jsx)(gY, { textVariant: "text-md/normal", value: s.getTier0Value() }),
            (0, E.jsx)(gY, { value: s.getTier1Value() }),
            (0, E.jsx)(gY, { value: s.getTier2Value() }),
            (0, E.jsx)(gY, { value: s.getTier3Value() }),
        ],
    });
}
let gK = function (e) {
    let t = (0, cZ.Ay)(),
        [i, n] = S.useState(null),
        { className: l, guild: s, hideHeading: r, hideTier0: a } = e;
    function o() {
        n(null);
    }
    return (0, E.jsxs)("div", {
        className: l,
        children: [
            !r &&
                (0, E.jsx)(eV.D, {
                    className: gF.R_,
                    variant: "heading-xxl/extrabold",
                    children: j.intl.string(j.t["9GGb9k"]),
                }),
            (0, E.jsxs)("div", {
                className: gF.wY,
                children: [
                    null != s && (0, E.jsx)(gX, { currentTier: s.premiumTier }),
                    (0, E.jsxs)("table", {
                        className: gF.tp,
                        cellPadding: 0,
                        cellSpacing: 0,
                        children: [
                            (0, E.jsx)("thead", {
                                children: (0, E.jsxs)("tr", {
                                    className: gF.__invalid_tableRow,
                                    children: [
                                        (0, E.jsx)(gz, { className: gF.VC, children: j.intl.string(j.t.F5MY0k) }),
                                        !a && (0, E.jsx)(gz, { tier: U.TVA.NONE, children: j.intl.string(j.t.mx8j2m) }),
                                        (0, E.jsx)(gz, { tier: U.TVA.TIER_1, children: j.intl.string(j.t.nzXtaS) }),
                                        (0, E.jsx)(gz, { tier: U.TVA.TIER_2, children: j.intl.string(j.t["h33/uW"]) }),
                                        (0, E.jsx)(gz, { tier: U.TVA.TIER_3, children: j.intl.string(j.t.BfF6ED) }),
                                    ],
                                }),
                            }),
                            (0, E.jsx)("tbody", {
                                className: gF.__invalid_tableBody,
                                children: gB.map((e, l) => {
                                    let s = i === l;
                                    return void 0 === e.predicate
                                        ? (0, E.jsx)(
                                              gH,
                                              {
                                                  isFocused: s,
                                                  handleFocus: function () {
                                                      n(l);
                                                  },
                                                  handleRowBlur: o,
                                                  theme: t,
                                                  row: e,
                                                  hideTier0: a,
                                              },
                                              l,
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
var gW = i(338548),
    gZ = i(776096),
    gq = i(178368),
    gQ = i(534740),
    gJ = i(866323),
    g$ = i(530005),
    g0 = i(443865),
    g1 = i(473145);
function g2(e) {
    let {
            guildBoostSlot: t,
            onClose: n,
            hasCancelableGuildBoostSlot: l,
            premiumSubscription: s,
            onSelect: r,
            fractionalState: a,
        } = e,
        o = {
            transfer: {
                label: null != t.premiumGuildSubscription ? j.intl.string(j.t["PR0n//"]) : j.intl.string(j.t["+fmEYG"]),
                subtext: t.isOnCooldown() ? j.intl.string(j.t.XnB8M0) : null,
                disabled: t.isOnCooldown(),
            },
            cancel: { label: j.intl.string(j.t.twFU3R), subtext: l ? null : j.intl.string(j.t.oQ9lOh), disabled: !l },
            uncancel: { label: j.intl.string(j.t["2glQNp"]), subtext: null, disabled: !1 },
        };
    switch (s.status) {
        case U.Dmq.PAST_DUE:
            (o.cancel.disabled = !0), (o.cancel.subtext = j.intl.string(j.t.WnL6DV)), (o.uncancel.disabled = !0);
            break;
        case U.Dmq.PAUSE_PENDING:
        case U.Dmq.PAUSED:
            a === l0.xc.NONE &&
                ((o.transfer.disabled = !0),
                (o.transfer.subtext = j.intl.string(j.t.LiLRRT)),
                (o.cancel.subtext = j.intl.string(j.t["1ywaWL"])),
                (o.cancel.disabled = !0),
                (o.uncancel.disabled = !0));
    }
    let d = S.useMemo(
        () =>
            s.isPausedOrPausePending && a === l0.xc.NONE
                ? (0, E.jsx)(ei.Dr, {
                      id: "manage-subscription",
                      label: j.intl.string(j.t.obRG6Y),
                      action: () => (0, eq.openUserSettings)(u.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: g0.x,
                      leadingAccessory: { type: "icon", icon: g0.x },
                  })
                : null,
        [a, s],
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
            (0, g1.I5)(t)
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
var g3 = i(545934),
    g5 = i(496431);
let g6 = function (e) {
    let { className: t, cooldown: i } = e,
        n = (0, g5.A)(i);
    return (0, E.jsx)(el.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, rs.uN)(n, { days: j.t.WUTPDc, hours: j.t.c1qodV, minutes: j.t["2+A3dv"] }),
    });
};
var g4 = i(759692);
let g8 = function (e) {
    let { className: t, imageClassName: n, boostInCooldown: l, useReducedMotion: s } = e;
    return (0, E.jsx)("div", {
        className: e7()(g4.h4, t, { [g4.K2]: l }),
        children: (0, E.jsx)("img", {
            className: e7()(g4.Sl, n, { [g4.x8]: l }),
            src: l
                ? i(650442)
                : s
                  ? i(742885)
                  : "https://cdn.discordapp.com/assets/content/86fd98fc22283647a8be93d0c503646b53c84e3cb25ca6562a38cecb84327e58.gif",
            alt: "",
        }),
    });
};
var g7 = i(743552);
let g9 = function (e) {
    let { className: t, hasCooldown: n, isCanceled: l, useReducedMotion: s } = e;
    return (0, E.jsxs)("div", {
        className: e7()(g7.sn, t),
        children: [
            l
                ? (0, E.jsx)("img", { className: e7()(g7.$J, g7.qX), src: i(728707), alt: "" })
                : (0, E.jsx)(g8, { className: g7.$J, boostInCooldown: n, useReducedMotion: s }),
            !l && n && (0, E.jsx)("img", { className: g7.De, src: i(438807), alt: "" }),
        ],
    });
};
var me = i(548118),
    mt = i(906199),
    mi = i(944304),
    mn = i(864310),
    ml = i(310918);
let ms = function (e) {
    let { className: t, guildId: i, boostingVariant: n } = e,
        l = (0, u8.bG)([eh.A], () => eh.A.getGuild(i), [i]),
        s = (0, mn.A)(l?.id).total;
    return null == l
        ? (0, E.jsx)("div", {
              className: e7()(t, ml.bo),
              children: (0, E.jsx)("div", {
                  className: ml.$g,
                  children: (0, E.jsx)(el.E, { variant: "text-lg/bold", children: j.intl.string(j.t["6Kwwuo"]) }),
              }),
          })
        : (0, E.jsxs)("div", {
              className: e7()(t, ml.bo),
              children: [
                  (0, E.jsx)(me.Ay, { className: ml.__invalid_guildIcon, guild: l, size: me.Ay.Sizes.LARGER }),
                  (0, E.jsxs)("div", {
                      className: ml.$g,
                      children: [
                          (0, E.jsx)(el.E, { variant: "text-lg/bold", children: l.name }),
                          (0, E.jsxs)("div", {
                              className: ml.TZ,
                              children: [
                                  (0, E.jsx)(gx._, {
                                      color: er.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                      className: ml.Me,
                                  }),
                                  (0, E.jsx)(el.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: j.intl.format(j.t["pob/cL"], { subscriptions: s }),
                                  }),
                                  (0, E.jsx)("div", { className: ml.me }),
                                  (0, E.jsx)(el.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: (0, g1.gb)(l.premiumTier, { useLevels: !1 }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  n
                      ? (0, E.jsx)(mi.A, {
                            guild: l,
                            analyticsLocation: {
                                page: U.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                section: U.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                object: U.ZSU.BUTTON_CTA,
                                objectType: U.AnalyticsObjectTypes.BUY,
                            },
                            pauseAnimation: !0,
                            size: oe.$n.Sizes.MEDIUM,
                            color: oe.$n.Colors.PRIMARY,
                            buttonText: j.intl.string(j.t.aBHecF),
                        })
                      : (0, E.jsx)(ek.$, {
                            variant: "secondary",
                            text: j.intl.string(j.t.KLOhbO),
                            onClick: () => {
                                (0, lZ.default)(),
                                    (0, mt.K4)({
                                        guildId: l.id,
                                        location: { section: U.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA },
                                    });
                            },
                        }),
              ],
          });
};
var mr = i(20230);
function ma(e) {
    let {
            guildTier: t,
            guildBoostSlot: i,
            showAltText: n,
            isCanceled: l,
            premiumSubscription: s,
            fractionalPremiumInfo: r,
        } = e,
        a = S.useMemo(() => {
            if (l) {
                let e = s.currentPeriodEnd;
                return (
                    s.isPausedForFractionalPremium && (e = r.endsAt.toDate()), j.intl.format(j.t.Z4ULRD, { date: e })
                );
            }
            let e = null != i.premiumGuildSubscription ? dC.default.extractTimestamp(i.premiumGuildSubscription.id) : 0;
            return j.intl.formatToPlainString(j.t.lY2Bur, { date: new Date(e) });
        }, [i, l, s, r]),
        o = S.useMemo(
            () =>
                (function (e) {
                    if (null == e || e === U.TVA.NONE) return "";
                    let t = [
                        j.intl.formatToPlainString(j.t["dLlKX/"], { numEmojiSlots: l0.TG[e].limits.emoji }),
                        j.intl.formatToPlainString(j.t["+ANIfv"], { numStickerSlots: l0.TG[e].limits.stickers }),
                        j.intl.formatToPlainString(j.t["4gt60b"], {
                            numSoundboardSlots: l0.TG[e].limits.soundboardSounds,
                        }),
                        j.intl.formatToPlainString(j.t.XahSjZ, {
                            resolution: l0.TG[e].limits.screenShareQualityResolution,
                            framerate: l0.TG[e].limits.screenShareQualityFramerate,
                        }),
                        j.intl.formatToPlainString(j.t.NbNs7S, { bitrate: l0.TG[e].limits.bitrate / 1e3 }),
                        j.intl.formatToPlainString(j.t.VVKcpn, { filesize: l0.TG[e].limits.fileSize / 1024 / 1024 }),
                        j.intl.formatToPlainString(j.t.TbpCvv, { numVideoStageSeats: l0.TG[e].limits.stageVideoUsers }),
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
        u = (0, gJ.p)(n, { from: { opacity: 0 }, enter: { opacity: 1 }, leave: { opacity: 0 } }, "animate-always");
    return l || t === U.TVA.NONE
        ? (0, E.jsx)("div", {
              className: mr.xm,
              children: (0, E.jsx)(el.E, { variant: "text-sm/medium", color: "text-muted", children: a }),
          })
        : u((e, t) =>
              (0, E.jsx)(gQ.animated.div, {
                  style: e,
                  className: mr.xm,
                  children: (0, E.jsx)(el.E, { variant: "text-sm/medium", color: "text-muted", children: t ? o : a }),
              }),
          );
}
function mo(e) {
    let {
            guildTier: t,
            guildBoostSlot: i,
            premiumSubscription: n,
            hasCancelableGuildBoostSlot: l,
            showAltText: s,
            isLastGuildBoostSlot: r,
        } = e,
        a = (0, u8.bG)([ni.Ay], () => ni.Ay.useReducedMotion),
        o = S.useMemo(() => (null != i.cooldownEndsAt ? new Date(i.cooldownEndsAt) : null), [i]),
        u = S.useMemo(() => null != o && o > new Date(), [o]),
        d = (0, g1.I5)(i),
        c = (0, gC.A)(),
        g = S.useRef(null);
    return (0, E.jsxs)("div", {
        className: mr.PW,
        children: [
            (0, E.jsxs)("div", {
                className: mr.$U,
                children: [
                    (0, E.jsx)(g9, { isCanceled: d, hasCooldown: u, useReducedMotion: a }),
                    (0, E.jsx)("div", {
                        className: mr.vh,
                        children:
                            null != o && u && !d
                                ? (0, E.jsx)(g6, { className: mr.xm, cooldown: o.getTime() })
                                : (0, E.jsx)(ma, {
                                      guildTier: t,
                                      guildBoostSlot: i,
                                      showAltText: s,
                                      isCanceled: d,
                                      premiumSubscription: n,
                                      fractionalPremiumInfo: c,
                                  }),
                    }),
                    (0, E.jsx)(ee.Y, {
                        targetElementRef: g,
                        renderPopout: function (e) {
                            let { closePopout: t } = e;
                            return (0, E.jsx)(g2, {
                                onClose: t,
                                guildBoostSlot: i,
                                premiumSubscription: n,
                                hasCancelableGuildBoostSlot: l,
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
                                className: mr.oU,
                                children: (0, E.jsx)(g$.F, { size: "md", color: "currentColor" }),
                            }),
                    }),
                ],
            }),
            !r && (0, E.jsx)("div", { className: mr.eX }),
        ],
    });
}
function mu(e) {
    let {
            guildId: t,
            guildBoostSlotRecords: i,
            premiumSubscription: n,
            hasCancelableGuildBoostSlot: l,
            showAltText: s,
        } = e,
        r = (0, u8.bG)([eh.A], () => eh.A.getGuild(t), [t]);
    return (0, E.jsxs)("div", {
        className: mr.ag,
        children: [
            (0, E.jsx)(ms, { guildId: t, boostingVariant: !1 }),
            i.map((e, t) =>
                (0, E.jsx)(
                    mo,
                    {
                        guildTier: r?.premiumTier,
                        guildBoostSlot: e,
                        premiumSubscription: n,
                        hasCancelableGuildBoostSlot: l,
                        showAltText: s,
                        isLastGuildBoostSlot: t === i.length - 1,
                    },
                    e.id,
                ),
            ),
        ],
    });
}
function md(e) {
    let { guildId: t, appliedGuildBoosts: i, premiumSubscription: n } = e,
        l = (0, u8.bG)([eh.A], () => eh.A.getGuild(t), [t]),
        s = dC.default.fromTimestamp(Date.now());
    if (
        (i.forEach((e) => {
            (null == s || 0 > dC.default.compare(e.id, s)) && (s = e.id);
        }),
        null == s)
    )
        return null;
    let r = g3.A.createFromServer(
        {
            id: dC.default.fromTimestamp(Date.now()),
            subscription_id: n.id,
            canceled: !1,
            premium_guild_subscription: { id: s, guild_id: t },
            cooldown_ends_at: null,
        },
        n,
    );
    return (0, E.jsxs)("div", {
        className: mr.ag,
        children: [
            (0, E.jsx)(ms, { guildId: t, boostingVariant: !1 }),
            i.map((e, t) =>
                (0, E.jsx)(
                    mo,
                    {
                        guildTier: l?.premiumTier,
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
function mc(e) {
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
              className: mr.iE,
              children: [
                  (0, E.jsx)("div", {
                      className: mr.kL,
                      children: dC.default
                          .keys(n)
                          .map((e) =>
                              (0, E.jsx)(md, { guildId: e, premiumSubscription: i, appliedGuildBoosts: n[e] }, e),
                          ),
                  }),
                  (0, E.jsx)("div", { className: mr.vK }),
              ],
          });
}
function mg(e) {
    let { guildBoostSlots: t, premiumSubscription: i } = e,
        [n, l] = S.useState(!1);
    S.useEffect(() => {
        let e = -1;
        return (
            null != i &&
                (e = setInterval(() => {
                    l((e) => !e);
                }, 3e3)),
            () => {
                clearInterval(e);
            }
        );
    }, [i]);
    let { boostsByGuildId: s, numActiveGuildBoostSlots: r } = S.useMemo(() => {
        let e = 0,
            i = {};
        return (
            Object.keys(t).forEach((n) => {
                let l = t[n];
                if ((!(0, g1.I5)(l) && e++, null != l.premiumGuildSubscription)) {
                    let e = l.premiumGuildSubscription.guildId;
                    e in i || (i[e] = []), i[e].push(l);
                }
            }),
            { boostsByGuildId: i, numActiveGuildBoostSlots: e }
        );
    }, [t]);
    if (null == i || 0 === Object.keys(s).length) return null;
    let a = r > uA.Ay.getNumIncludedPremiumGuildSubscriptionSlots(i.planId);
    return (0, E.jsxs)("div", {
        className: mr.iE,
        children: [
            (0, E.jsx)("div", {
                className: mr.kL,
                children: dC.default
                    .keys(s)
                    .map((e) =>
                        (0, E.jsx)(
                            mu,
                            {
                                guildId: e,
                                guildBoostSlotRecords: s[e],
                                premiumSubscription: i,
                                hasCancelableGuildBoostSlot: a,
                                showAltText: n,
                            },
                            e,
                        ),
                    ),
            }),
            (0, E.jsx)("div", { className: mr.vK }),
        ],
    });
}
var mm = i(461546);
let mA = function (e) {
    let { hasGuildBoostSlots: t, hasAppliedGuildBoosts: n, hasBoostPerk: l, canAddBoosts: s } = e;
    return (0, E.jsxs)("div", {
        className: mm.iE,
        children: [
            (0, E.jsx)("div", {
                className: mm.bj,
                children: (0, E.jsx)("img", { alt: "", className: mm.KV, src: i(742885) }),
            }),
            (0, E.jsxs)("div", {
                className: mm.D7,
                children: [
                    (0, E.jsx)(eV.D, {
                        variant: "display-md",
                        className: mm.R_,
                        children: (function (e) {
                            let {
                                hasGuildBoostSlots: t,
                                hasAppliedGuildBoosts: i,
                                hasBoostPerk: n,
                                canAddBoosts: l,
                            } = e;
                            return l
                                ? t
                                    ? n && !i
                                        ? j.intl.format(j.t.s9zQyG, {})
                                        : j.intl.format(j.t.Rb8Jhs, {})
                                    : j.intl.string(j.t["2rh0by"])
                                : j.intl.format(j.t.Rb8Jhs, {});
                        })({ hasGuildBoostSlots: t, hasBoostPerk: l, hasAppliedGuildBoosts: n, canAddBoosts: s }),
                    }),
                    (0, E.jsx)("svg", {
                        viewBox: "0 0 660 210",
                        className: mm.Mz,
                        children: (0, E.jsx)("path", {
                            d: "M101.3,45.5C57.5,45.9,15.9,82.2,0,99.5V210h660V53.5c-164-137-265.2,32.4-385.8,33.6  C177.7,88.1,158.1,45,101.3,45.5z",
                        }),
                    }),
                ],
            }),
        ],
    });
};
var mh = i(725538),
    mE = i(168482);
function mS() {
    return (0, E.jsxs)("div", {
        className: mh.iE,
        children: [
            (0, E.jsx)("img", { className: mh.Kk, alt: "", src: mE }),
            (0, E.jsxs)("div", {
                className: mh.pq,
                children: [
                    (0, E.jsx)(el.E, { variant: "text-lg/bold", children: j.intl.string(j.t.ZHNSYf) }),
                    (0, E.jsx)(el.E, {
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
                    (0, l7.pX)(U.BVt.GUILD_DISCOVERY), (0, lZ.default)();
                },
            }),
        ],
    });
}
var mT = i(502572),
    mx = i(614820),
    mp = i(987144),
    mf = i(178015);
let mN = function () {
    let e = S.useRef(null),
        { analyticsLocations: t } = (0, n1.Ay)(),
        { fractionalState: n } = (0, gC.A)();
    function l(i) {
        null != e.current && (0, K.closeModal)(e.current),
            (0, mp.g)({
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
    async function s() {
        e.current = await (0, K.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 770101));
                return (t) => (0, E.jsx)(e, { ...t, onSelectGuild: l });
            },
            {
                onCloseRequest: () => {
                    null != e.current && (0, K.closeModal)(e.current);
                },
            },
        );
    }
    let r = (0, g1.Nc)({ fractionalState: n });
    return (0, E.jsxs)("div", {
        className: mf.iE,
        children: [
            (0, E.jsx)(gx._, { color: er.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: mf.$J }),
            (0, E.jsx)(el.E, {
                className: mf.C,
                color: "text-default",
                variant: "text-sm/medium",
                children: j.intl.format(j.t.kqC5vq, {
                    boostAnyGuildHook: (e, t) => {
                        let i = null != r,
                            n = (0, mx.O)(e),
                            l = (0, E.jsx)("div", {
                                className: mf.lO,
                                children: (0, E.jsx)(
                                    ea.Q,
                                    { variant: "primary", onClick: i ? void 0 : s, text: n, disabled: i },
                                    t,
                                ),
                            });
                        return i
                            ? (0, E.jsx)(
                                  mT.A,
                                  {
                                      text: r,
                                      "aria-label": r.toString(),
                                      children: (e) => (0, E.jsx)("span", { ...e, children: l }),
                                  },
                                  t,
                              )
                            : l;
                    },
                }),
            }),
        ],
    });
};
var m_ = i(735310);
let mI = function (e) {
    let { canAddBoosts: t, canApplyBoosts: i } = e,
        n = (0, g.bG)([gZ.A], () => gZ.A.affinities),
        l = (0, g.bG)([eE.Ay], () => eE.Ay.getFlattenedGuildIds()),
        s = S.useMemo(() => {
            let e = n.slice(0, 3).map((e) => e.guildId);
            for (let t = 0; t < l.length && !(e.length >= 3); t++) {
                let i = l[t];
                e.includes(i) || e.push(i);
            }
            return e;
        }, [n, l]);
    return 0 === s.length
        ? null
        : (0, E.jsxs)("div", {
              className: m_.iE,
              children: [
                  t &&
                      (0, E.jsx)(eV.D, {
                          variant: "heading-lg/semibold",
                          className: m_.wx,
                          children: j.intl.string(j.t.r90Wgo),
                      }),
                  s.map((e) => (0, E.jsx)(ms, { className: m_.ZS, guildId: e, boostingVariant: !0 }, e)),
                  l.length > 3 && i && (0, E.jsx)(mN, {}),
              ],
          });
};
var mC = i(773447);
let mb = function (e) {
    let {
            hasAppliedGuildBoosts: t,
            hasBoostPerk: i,
            hasGuildAffinitiesOrInGuild: n,
            subscriptionIsPausedOrPausePending: l,
        } = e,
        { subtitle: s, flavor: r } = (function (e) {
            let {
                hasAppliedGuildBoosts: t,
                hasBoostPerk: i,
                hasGuildAffinitiesOrInGuild: n,
                subscriptionIsPausedOrPausePending: l,
            } = e;
            if (l)
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
            let s = l0.hd[l0.gD.PREMIUM_MONTH_GUILD],
                r = uA.Ay.getDefaultPrice(s.id, i),
                a = (0, d_.CE)((0, d_.$g)(r.amount, r.currency), s.interval, s.intervalCount);
            return {
                subtitle: i ? j.intl.string(j.t.bhPzXR) : j.intl.string(j.t.Zs9h9Z),
                flavor: j.intl.formatToPlainString(j.t.PGgTdA, { monthlyGuildBoostPrice: a }),
            };
        })({
            hasAppliedGuildBoosts: t,
            hasBoostPerk: i,
            hasGuildAffinitiesOrInGuild: n,
            subscriptionIsPausedOrPausePending: l,
        });
    return (0, E.jsxs)("div", {
        className: mC.i,
        children: [
            (0, E.jsx)(eV.D, { variant: "heading-lg/bold", className: mC.V, children: s }),
            null != r && (0, E.jsx)(el.E, { variant: "text-sm/normal", children: r }),
        ],
    });
};
var mv = i(724624),
    my = i(983511),
    mj = i(342744),
    mO = i(87719),
    mR = i(439312);
function mL(e) {
    let {
            guildBoostSlot: t,
            isCancellable: i,
            onCancel: n,
            onUncancel: l,
            premiumSubscription: s,
            useReducedMotion: r,
            fractionalState: a,
        } = e,
        o = S.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t]),
        u = (0, g1.I5)(t),
        d = s?.isPaused === !0 && a === l0.xc.NONE,
        c = j.intl.string(j.t.mOWsF1);
    return (0, E.jsxs)(
        "li",
        {
            className: mR.Hp,
            children: [
                (0, E.jsxs)("div", {
                    className: mR.YL,
                    children: [
                        (0, E.jsx)(g9, {
                            className: mR.W6,
                            hasCooldown: t.isOnCooldown(),
                            isCanceled: u,
                            useReducedMotion: r,
                        }),
                        u && null != s
                            ? (0, E.jsx)(el.E, {
                                  color: "text-muted",
                                  variant: "text-sm/medium",
                                  children: j.intl.format(j.t.Z4ULRD, { date: s.currentPeriodEnd }),
                              })
                            : t.isOnCooldown() && null != o
                              ? (0, E.jsx)(g6, { cooldown: o.getTime() })
                              : (0, E.jsx)(el.E, {
                                    className: mR.__invalid_unappliedGuildBoostSlotDescription,
                                    color: "text-muted",
                                    variant: "text-sm/medium",
                                    children: j.intl.string(j.t["2mcafz"]),
                                }),
                    ],
                }),
                (0, E.jsxs)("div", {
                    className: mR.E7,
                    children: [
                        i &&
                            !u &&
                            (0, E.jsx)(mT.A, {
                                shouldShow: d,
                                text: c,
                                "aria-label": c.toString(),
                                children: (e) =>
                                    (0, E.jsx)("div", {
                                        className: mR.LB,
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
                            (0, E.jsx)(mT.A, {
                                shouldShow: d,
                                text: c,
                                "aria-label": c.toString(),
                                children: (e) =>
                                    (0, E.jsx)("div", {
                                        className: mR.LB,
                                        children: (0, E.jsx)(ea.Q, {
                                            ...e,
                                            variant: "primary",
                                            text: j.intl.string(j.t["2glQNp"]),
                                            onClick: () => l(t),
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
function mD(e) {
    (0, K.openModalLazy)(async () => (t) => (0, E.jsx)(my.default, { ...t, guildBoostSlot: e }));
}
function mP(e) {
    (0, K.openModalLazy)(async () => (t) => (0, E.jsx)(mj.default, { ...t, guildBoostSlotId: e.id }));
}
let mG = function (e) {
    let t,
        i,
        n,
        { guildBoostSlots: l } = e,
        s = (0, g.bG)([dJ.A], () => dJ.A.getPremiumTypeSubscription()),
        r = s?.isPausedOrPausePending === !0,
        { fractionalState: a } = (0, gC.A)(),
        o = (0, g.bG)([ni.Ay], () => ni.Ay.useReducedMotion),
        u = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()),
        d = a === l0.xc.FP_SUB_PAUSED,
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
                s = !0;
            return (
                l.forEach((l) => {
                    !(0, g1.I5)(l) && i++,
                        l.isOnCooldown() ? (n = !0) : (s = !1),
                        null != l.premiumGuildSubscription ? e.push(l) : t.push(l);
                }),
                {
                    appliedGuildBoostSlots: e,
                    unappliedGuildBoostSlots: t,
                    numActiveGuildBoostSlots: i,
                    hasCooldownBoosts: n,
                    allGuildBoostsAreOnCooldown: s,
                }
            );
        }, [l]),
        p = null != s ? uA.Ay.getNumIncludedPremiumGuildSubscriptionSlots(s.planId) : 0,
        f = Math.max(0, p - m.length),
        N = h > p,
        _ = p === l.length,
        I = _ ? f : 1,
        C = S.useMemo(() => {
            let e = [];
            for (let t = 0; t < I; t++) e.push((0, E.jsx)(g8, { className: mR.YA, useReducedMotion: o }, t));
            return e;
        }, [I, o]),
        b = S.useMemo(() => A.find((e) => e.isAvailable()), [A]);
    if (0 === A.length) return null;
    let v = A.length;
    if (
        ((t = _
            ? j.intl.formatToPlainString(x ? j.t["3DW6Dc"] : j.t["/u15Qc"], { numUnappliedGuildBoostSlots: v })
            : j.intl.formatToPlainString(x ? j.t["3DW6Dc"] : j.t.BPadnO, { numUnappliedGuildBoostSlots: v })),
        uA.Ay.isPremium(u))
    ) {
        function y(e, t) {
            return (0, E.jsx)(
                en.D,
                {
                    className: mR.nw,
                    tag: "span",
                    onClick: () => {
                        (0, mO.e)();
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
        (n = r && a === l0.xc.NONE ? j.intl.string(j.t.mOWsF1) : j.intl.string(j.t.xr4m5B)),
        (0, E.jsx)("div", {
            className: mR.iE,
            children: (0, E.jsxs)("div", {
                className: e7()(mR.Qs, [mR.Yq]),
                children: [
                    (0, E.jsxs)("div", {
                        className: mR.wx,
                        children: [
                            (0, E.jsxs)("div", {
                                className: mR.RW,
                                children: [
                                    (0, E.jsx)("div", { className: mR.PS, children: C }),
                                    (0, E.jsxs)("div", {
                                        className: mR.__invalid_headerCopy,
                                        children: [
                                            (0, E.jsx)(eV.D, {
                                                className: mR.gg,
                                                variant: "heading-lg/bold",
                                                children: t,
                                            }),
                                            (0, E.jsx)(el.E, {
                                                className: mR.__invalid_headerSubheading,
                                                color: "text-strong",
                                                variant: "text-sm/normal",
                                                children: i,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, E.jsx)("div", {
                                className: mR.di,
                                children: (0, E.jsx)(mT.A, {
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
                                                                  (0, E.jsx)(mv.default, {
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
                            className: mR.LU,
                            children: A.map((e) =>
                                (0, E.jsx)(
                                    mL,
                                    {
                                        guildBoostSlot: e,
                                        isCancellable: N,
                                        onCancel: mD,
                                        onUncancel: mP,
                                        premiumSubscription: s,
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
var mM = i(561835);
function mU(e) {
    let { premiumSubscription: t } = e,
        i = (0, g.bG)([gq.A], () => gq.A.boostSlots),
        n = S.useMemo(() => Object.values(i), [i]),
        l = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()),
        s = uA.Ay.isPremium(l, l0.PremiumTypes.TIER_2),
        r = (0, g.bG)([gZ.A], () => gZ.A.affinities),
        a = (0, g.bG)([eE.Ay], () => eE.Ay.getFlattenedGuildIds()),
        o = r.length > 0 || a.length > 0,
        u = n.length > 0,
        d = S.useMemo(() => n.filter((e) => null != e.premiumGuildSubscription), [n]),
        c = d.length > 0,
        m = n.length > d.length,
        A = (0, g.bG)([gI.A], () => gI.A.getCurrentUserAppliedBoosts()),
        { fractionalState: h } = (0, gC.A)({ forceFetch: !0 }),
        T = l?.isPremiumGroupMember(),
        x = t?.isPausedOrPausePending === !0 && h === l0.xc.NONE,
        p = t?.isPausedOrPausePending !== !0 && h === l0.xc.NONE && !T,
        f = s && h === l0.xc.FP_SUB_PAUSED,
        N = h === l0.xc.NONE && !T;
    return (0, E.jsxs)("div", {
        className: mM.GO,
        children: [
            (0, E.jsx)(d6.kb, { className: mM.ek }),
            (0, E.jsx)(mA, { hasGuildBoostSlots: u, hasAppliedGuildBoosts: c, hasBoostPerk: f, canAddBoosts: p }),
            N &&
                (0, E.jsx)(mb, {
                    hasAppliedGuildBoosts: c,
                    hasBoostPerk: f,
                    hasGuildAffinitiesOrInGuild: o,
                    subscriptionIsPausedOrPausePending: x,
                }),
            T && (0, E.jsx)(gW.A, {}),
            !o && (0, E.jsx)(mS, {}),
            t?.isPaused && h !== l0.xc.FP_SUB_PAUSED
                ? (0, E.jsx)(mc, { appliedGuildBoosts: A, premiumSubscription: t })
                : (0, E.jsx)(mg, { guildBoostSlots: i, premiumSubscription: t }),
            (0, E.jsx)(mG, { guildBoostSlots: n, fractionalPremiumState: h }),
            (0, E.jsx)(mI, { canAddBoosts: c && p, canApplyBoosts: m }),
            (0, E.jsx)(gK, { className: mM.e4, hideHeading: !0, hideTier0: !0 }),
            (0, E.jsx)(gL, { cardClassName: mM.KW }),
            (0, E.jsx)(gM, { className: mM.JL }),
        ],
    });
}
var mV = i(527113),
    mk = i(365199),
    mw = i(378102);
function mF(e) {
    let { guild: t, className: i } = e,
        { total: n } = (0, mn.A)(t.id);
    return (0, E.jsxs)("div", {
        className: i ?? mw.OA,
        children: [
            (0, E.jsx)(me.Ay, { className: mw.$f, guild: t, size: me.Ay.Sizes.MEDIUM }),
            (0, E.jsxs)("div", {
                className: mw.gI,
                children: [
                    (0, E.jsx)(el.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, E.jsxs)("div", {
                        className: mw.ew,
                        children: [
                            (0, E.jsxs)("div", {
                                className: mw.QW,
                                children: [
                                    (0, E.jsx)(gx._, {
                                        className: mw.Wz,
                                        color: er.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                                    }),
                                    (0, E.jsx)(el.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: j.intl.format(j.t["pob/cL"], { subscriptions: n }),
                                    }),
                                ],
                            }),
                            t.premiumTier !== U.TVA.NONE &&
                                (0, E.jsxs)(E.Fragment, {
                                    children: [
                                        (0, E.jsx)("div", { className: mw.zk }),
                                        (0, E.jsx)(el.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, g1.gb)(t.premiumTier, { useLevels: !1 }),
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
function mB(e) {
    let { guildId: t } = e,
        i = (0, g.bG)([eh.A], () => eh.A.getGuild(t), [t]);
    return null == i
        ? null
        : (0, E.jsxs)("div", {
              className: mw.Nr,
              children: [
                  (0, E.jsx)(mF, { guild: i }),
                  (0, E.jsx)(ek.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: gx._,
                      text: j.intl.string(j.t.aBHecF),
                      onClick: () => {
                          (0, mp.g)({
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
var mz = i(512062);
let mY =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function mX(e) {
    let { slot: t, guildTier: i, premiumSubscription: n, hasCancelableSlots: l, isLast: s } = e,
        r = S.useRef(null),
        a = (0, g1.I5)(t),
        o = S.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, gC.A)(),
        c = S.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === U.TVA.NONE) return "";
                    let i = [
                        j.intl.formatToPlainString(j.t["dLlKX/"], { numEmojiSlots: l0.TG[e].limits.emoji }),
                        j.intl.formatToPlainString(j.t["+ANIfv"], { numStickerSlots: l0.TG[e].limits.stickers }),
                        j.intl.formatToPlainString(j.t["4gt60b"], {
                            numSoundboardSlots: l0.TG[e].limits.soundboardSounds,
                        }),
                        j.intl.formatToPlainString(j.t.XahSjZ, {
                            resolution: l0.TG[e].limits.screenShareQualityResolution,
                            framerate: l0.TG[e].limits.screenShareQualityFramerate,
                        }),
                        j.intl.formatToPlainString(j.t.NbNs7S, { bitrate: l0.TG[e].limits.bitrate / 1e3 }),
                        j.intl.formatToPlainString(j.t.VVKcpn, { filesize: l0.TG[e].limits.fileSize / 1024 / 1024 }),
                        j.intl.formatToPlainString(j.t.TbpCvv, { numVideoStageSeats: l0.TG[e].limits.stageVideoUsers }),
                        j.intl.string(j.t.LDyX3i),
                        j.intl.string(j.t.YtGlPW),
                    ];
                    e >= U.TVA.TIER_2 && (i.push(j.intl.string(j.t.SztbtN)), i.push(j.intl.string(j.t["3GK91n"]))),
                        e >= U.TVA.TIER_3 && i.push(j.intl.string(j.t["XUUJd+"]));
                    let n = 0;
                    for (let e = 0; e < t.length; e++) n = (31 * n + t.charCodeAt(e)) | 0;
                    let l = i[Math.abs(n) % i.length];
                    return j.intl.formatToPlainString(j.t["/dOAmQ"], { perk: l });
                })(i, t.id),
            [i, t.id],
        ),
        g = S.useMemo(() => {
            if ("" !== c) return c;
            let e = null != t.premiumGuildSubscription ? dC.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return j.intl.formatToPlainString(j.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        m = S.useMemo(
            () => (a ? (n.isPausedForFractionalPremium ? d.endsAt.toDate() : n.currentPeriodEnd) : null),
            [a, n, d],
        );
    return (0, E.jsxs)("div", {
        className: e7()(mz.iq, { [mz.Mt]: s }),
        children: [
            (0, E.jsxs)("div", {
                className: mz.kd,
                children: [
                    (0, E.jsx)("img", { alt: "", className: mz.bB, src: mY }),
                    a && null != m
                        ? (0, E.jsx)(el.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: j.intl.format(j.t.Z4ULRD, { date: m }),
                          })
                        : (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(el.E, { variant: "text-sm/medium", color: "text-subtle", children: g }),
                                  u &&
                                      null != o &&
                                      (0, E.jsxs)(E.Fragment, {
                                          children: [
                                              (0, E.jsx)("div", { className: mz.zk }),
                                              (0, E.jsx)(el.E, {
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
                                              (0, E.jsx)("div", { className: mz.zk }),
                                              (0, E.jsx)(el.E, {
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
                    return (0, E.jsx)(g2, {
                        onClose: i,
                        guildBoostSlot: t,
                        premiumSubscription: n,
                        hasCancelableGuildBoostSlot: l,
                        fractionalState: d.fractionalState,
                    });
                },
                position: "right",
                align: "center",
                children: (e) =>
                    (0, E.jsx)(en.D, {
                        innerRef: r,
                        "aria-label": j.intl.string(j.t.PdRCRg),
                        className: mz.Mj,
                        ...e,
                        children: (0, E.jsx)(mk.j, { size: "xs", color: er.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                    }),
            }),
        ],
    });
}
function mH(e) {
    let { guildId: t, slots: i, premiumSubscription: n, hasCancelableSlots: l } = e,
        s = (0, g.bG)([eh.A], () => eh.A.getGuild(t), [t]);
    return (0, E.jsxs)("div", {
        className: mz.Nr,
        children: [
            (0, E.jsx)("div", {
                className: mz.MY,
                children:
                    null != s
                        ? (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(mF, { guild: s, className: mz.OA }),
                                  (0, E.jsx)(ek.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: j.intl.string(j.t.KLOhbO),
                                      onClick: () => {
                                          (0, lZ.default)(),
                                              (0, mt.K4)({
                                                  guildId: s.id,
                                                  location: {
                                                      section: U.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA,
                                                  },
                                              });
                                      },
                                  }),
                              ],
                          })
                        : (0, E.jsx)("div", {
                              className: mz.OA,
                              children: (0, E.jsx)(eV.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: j.intl.string(j.t["6Kwwuo"]),
                              }),
                          }),
            }),
            i.map((e, t) =>
                (0, E.jsx)(
                    mX,
                    {
                        slot: e,
                        guildTier: s?.premiumTier,
                        premiumSubscription: n,
                        hasCancelableSlots: l,
                        isLast: t === i.length - 1,
                    },
                    e.id,
                ),
            ),
        ],
    });
}
function mK(e) {
    let { guildBoostSlots: t, premiumSubscription: i, pausedAppliedGuildBoosts: n, isPaused: l } = e,
        { boostsByGuildId: s, numActiveSlots: r } = S.useMemo(() => {
            if (l && null != i)
                return {
                    boostsByGuildId: (function (e, t) {
                        let i = {};
                        for (let t of e) t.guildId in i || (i[t.guildId] = []), i[t.guildId].push(t);
                        let n = {};
                        for (let e of Object.keys(i)) {
                            let l = i[e];
                            n[e] = l.map((i) =>
                                g3.A.createFromServer(
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
                s = {};
            for (let i of Object.keys(t)) {
                let n = t[i];
                if ((!(0, g1.I5)(n) && e++, null != n.premiumGuildSubscription)) {
                    let e = n.premiumGuildSubscription.guildId;
                    e in s || (s[e] = []), s[e].push(n);
                }
            }
            return { boostsByGuildId: s, numActiveSlots: e };
        }, [t, l, n, i]);
    if (null == i || 0 === Object.keys(s).length) return null;
    let a = r > uA.Ay.getNumIncludedPremiumGuildSubscriptionSlots(i.planId);
    return (0, E.jsx)("div", {
        className: mz.kR,
        children: dC.default
            .keys(s)
            .map((e) => (0, E.jsx)(mH, { guildId: e, slots: s[e], premiumSubscription: i, hasCancelableSlots: a }, e)),
    });
}
var mW = i(928171);
function mZ(e) {
    let { guildBoostSlots: t, fractionalPremiumState: n } = e,
        l = (0, g.bG)([dJ.A], () => dJ.A.getPremiumTypeSubscription()),
        { unappliedSlots: s, numActiveSlots: r } = S.useMemo(() => {
            let e = [],
                i = 0;
            for (let n of t) !(0, g1.I5)(n) && i++, null == n.premiumGuildSubscription && e.push(n);
            return { unappliedSlots: e, numActiveSlots: i };
        }, [t]),
        a = r > (null != l ? uA.Ay.getNumIncludedPremiumGuildSubscriptionSlots(l.planId) : 0),
        o = l?.isPausedOrPausePending === !0 && n === l0.xc.NONE;
    return 0 === s.length
        ? null
        : (0, E.jsxs)("div", {
              className: mW.Nr,
              children: [
                  (0, E.jsxs)("div", {
                      className: mW.MY,
                      children: [
                          (0, E.jsxs)("div", {
                              className: mW._L,
                              children: [
                                  (0, E.jsxs)("div", {
                                      className: mW.MD,
                                      children: [
                                          (0, E.jsx)("img", { alt: "", className: mW.F8, src: mY }),
                                          (0, E.jsx)("div", {
                                              className: e7()(mW.qS, "theme-dark"),
                                              children: (0, E.jsx)("span", { className: mW.Vv, children: s.length }),
                                          }),
                                      ],
                                  }),
                                  (0, E.jsxs)("div", {
                                      className: mW.Qp,
                                      children: [
                                          (0, E.jsx)(el.E, {
                                              variant: "heading-md/semibold",
                                              color: "text-default",
                                              tag: "span",
                                              children: j.intl.format(j.t.BPadnO, {
                                                  numUnappliedGuildBoostSlots: s.length,
                                              }),
                                          }),
                                          (0, E.jsx)(el.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-subtle",
                                              children: j.intl.format(j.t.Kaw82o, {
                                                  numUnappliedGuildBoostSlots: s.length,
                                              }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, E.jsx)(mT.A, {
                              shouldShow: o,
                              text: j.intl.string(j.t.mOWsF1),
                              "aria-label": j.intl.string(j.t.mOWsF1),
                              children: (e) =>
                                  (0, E.jsx)(ek.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: gx._,
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
                                                              (0, mp.g)({
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
                  s.map((e, t) =>
                      (0, E.jsx)(
                          mq,
                          {
                              slot: e,
                              isLast: t === s.length - 1,
                              isCancelable: a && !(0, g1.I5)(e),
                              isCanceled: (0, g1.I5)(e),
                              premiumSubscription: l,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function mq(e) {
    let t,
        { slot: i, isLast: n, isCancelable: l, isCanceled: s, premiumSubscription: r, modificationsDisabled: a } = e,
        o = S.useRef(null),
        u = S.useMemo(() => (null != i.cooldownEndsAt ? new Date(i.cooldownEndsAt) : null), [i.cooldownEndsAt]);
    t =
        s && null != r
            ? (0, E.jsx)(el.E, {
                  variant: "text-sm/medium",
                  color: "text-subtle",
                  children: j.intl.format(j.t.Z4ULRD, { date: r.currentPeriodEnd }),
              })
            : i.isOnCooldown() && null != u
              ? (0, E.jsx)(g6, { cooldown: u.getTime() })
              : (0, E.jsx)(el.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: j.intl.string(j.t["2mcafz"]),
                });
    let d = l || s;
    return (0, E.jsxs)("div", {
        className: e7()(mW.iq, { [mW.Mt]: n }),
        children: [
            (0, E.jsxs)("div", {
                className: mW.kd,
                children: [(0, E.jsx)("img", { alt: "", className: mW.bB, src: mY }), t],
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
                                l &&
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
                                                        (0, E.jsx)(my.default, { ...e, guildBoostSlot: i }),
                                                );
                                        },
                                    }),
                                s &&
                                    (0, E.jsx)(ei.Dr, {
                                        id: "uncancel-boost",
                                        label: j.intl.string(j.t["2glQNp"]),
                                        disabled: a,
                                        subtext: a ? j.intl.string(j.t.mOWsF1) : void 0,
                                        action: () => {
                                            t(),
                                                (0, K.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, E.jsx)(mj.default, { ...e, guildBoostSlotId: i.id }),
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
                            className: mW.Mj,
                            ...e,
                            children: (0, E.jsx)(mk.j, { size: "xs", color: er.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                        }),
                }),
        ],
    });
}
var mQ = i(942053);
function mJ(e) {
    let {
            guildBoostSlots: t,
            guildBoostSlotsByGuildId: i,
            premiumSubscription: n,
            pausedAppliedGuildBoosts: l,
            fractionalPremiumState: s,
        } = e,
        r = ty.A.getArticleURL(U.MVz.GUILD_BOOSTING_FAQ),
        a = n?.isPaused === !0 && s !== l0.xc.FP_SUB_PAUSED,
        o = t.some((e) => null == e.premiumGuildSubscription),
        u = a && l.length > 0,
        d = a ? u : t.some((e) => null != e.premiumGuildSubscription);
    return o || d
        ? (0, E.jsxs)("div", {
              className: mQ.i,
              children: [
                  (0, E.jsxs)("div", {
                      className: mQ.b,
                      children: [
                          (0, E.jsx)(eV.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.W5rDjW) }),
                          (0, E.jsx)(el.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: j.intl.format(j.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, E.jsx)(mK, {
                      guildBoostSlots: i,
                      premiumSubscription: n,
                      pausedAppliedGuildBoosts: l,
                      isPaused: a,
                  }),
                  (0, E.jsx)(mZ, { guildBoostSlots: t, fractionalPremiumState: s }),
              ],
          })
        : null;
}
var m$ = i(917064),
    m0 = i(401721);
function m1() {
    return (0, E.jsxs)("div", {
        className: m0.iE,
        children: [
            (0, E.jsx)(eV.D, { variant: "heading-xl/normal", children: j.intl.string(j.t.IzKs3o) }),
            (0, E.jsx)("div", {
                className: m0.kR,
                children: m$.s.map((e, t) => {
                    let i = e.icon;
                    return (0, E.jsxs)(
                        "div",
                        {
                            className: m0.Nr,
                            children: [
                                (0, E.jsx)(i, { className: m0.Kk }),
                                (0, E.jsx)(el.E, {
                                    className: m0.h_,
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
var m2 = i(232122),
    m3 = i(630579);
function m5() {
    let [e, t] = S.useState(null),
        [i, n] = S.useState(null);
    return (0, E.jsxs)("div", {
        className: m3.iE,
        children: [
            (0, E.jsx)(eV.D, { variant: "heading-xl/normal", children: j.intl.string(j.t.HPJ6Nj) }),
            (0, E.jsx)("ul", {
                className: m3.p_,
                children: m2.m.map((l, s) => {
                    let r = e === s,
                        a = i === s,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, E.jsxs)(
                        en.D,
                        {
                            tag: "li",
                            className: e7()(m3.Aw, { [m3.$K]: r }),
                            onClick: () => t((e) => (e === s ? null : s)),
                            onMouseEnter: () => n(s),
                            onMouseLeave: () => n(null),
                            children: [
                                (0, E.jsxs)("div", {
                                    className: m3.k7,
                                    children: [
                                        (0, E.jsx)(el.E, {
                                            className: m3.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: l.getQuestion(),
                                        }),
                                        (0, E.jsx)(es.a, {
                                            size: "sm",
                                            color: er.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: m3.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, E.jsx)(el.E, {
                                        className: m3.ZF,
                                        color: "text-muted",
                                        variant: "text-sm/medium",
                                        children: l.getAnswer(),
                                    }),
                            ],
                        },
                        s,
                    );
                }),
            }),
        ],
    });
}
var m6 = i(182859),
    m4 = i(853513),
    m8 = i(880482);
function m7() {
    let e = ty.A.getArticleURL(U.MVz.GUILD_SUBSCRIPTIONS);
    return (0, E.jsxs)("div", {
        className: m8.wx,
        children: [
            (0, E.jsxs)("div", {
                className: m8.Qs,
                children: [
                    (0, E.jsxs)("div", {
                        className: m8.B5,
                        children: [
                            (0, E.jsx)("img", { alt: "", className: m8.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, E.jsx)(eV.D, {
                                variant: "heading-xl/normal",
                                children: j.intl.string(m4.default.hjvcLO),
                            }),
                        ],
                    }),
                    (0, E.jsx)(el.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: j.intl.format(j.t.TUHyoA, { helpdeskArticle: e }),
                    }),
                ],
            }),
            (0, E.jsx)(m6.A, {
                variant: "member",
                className: m8.iO,
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
var m9 = i(315629),
    Ae = i(524170);
function At() {
    let e = (0, g.bG)([iA.default], () => iA.default.getCurrentUser());
    if (null == e || uA.Ay.hasFreeBoosts(e)) return null;
    let t = ty.A.getArticleURL(U.MVz.GUILD_BOOSTING_FAQ);
    return (0, E.jsxs)(m9.h, {
        color: "nitro-pink",
        className: Ae.vK,
        children: [
            (0, E.jsxs)("div", {
                className: Ae.nw,
                children: [
                    (0, E.jsx)("img", { alt: "", className: Ae.q3, src: mY }),
                    (0, E.jsxs)("div", {
                        className: Ae.Tm,
                        children: [
                            (0, E.jsx)(el.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: j.intl.format(j.t.Idh1Vs, { count: l0.M4, boostCount: l0.M4 }),
                            }),
                            (0, E.jsxs)("div", {
                                className: Ae.xv,
                                children: [
                                    (0, E.jsx)(us.t, { className: Ae.nE }),
                                    (0, E.jsx)(el.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: j.intl.format(j.t["6UAu+f"], {
                                            count: l0.M4,
                                            boostCount: l0.M4,
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
                icon: us.t,
                text: j.intl.string(j.t["8x0jKT"]),
                onClick: mO.e,
            }),
        ],
    });
}
var Ai = i(738262);
function An() {
    let e = (0, g.bG)([gZ.A], () => gZ.A.affinities),
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
              className: Ai.i,
              children: [
                  (0, E.jsx)(eV.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.r90Wgo) }),
                  (0, E.jsx)("div", { className: Ai.k, children: i.map((e) => (0, E.jsx)(mB, { guildId: e }, e)) }),
              ],
          });
}
var Al = i(553429);
function As(e) {
    let { count: t, disabledReason: n } = e,
        l = ty.A.getArticleURL(U.MVz.GUILD_BOOSTING_FAQ);
    return (0, E.jsxs)(m9.h, {
        color: "nitro-pink",
        className: Al.vK,
        children: [
            (0, E.jsxs)("div", {
                className: Al.nw,
                children: [
                    (0, E.jsxs)("div", {
                        className: Al.MD,
                        children: [
                            (0, E.jsx)("img", { alt: "", className: Al.F8, src: mY }),
                            (0, E.jsx)("div", {
                                className: e7()(Al.qS, "theme-dark"),
                                children: (0, E.jsx)("span", { className: Al.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, E.jsxs)("div", {
                        className: Al.Tm,
                        children: [
                            (0, E.jsx)(el.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: j.intl.format(j.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, E.jsxs)("div", {
                                className: Al.xv,
                                children: [
                                    (0, E.jsx)(us.t, { className: Al.nE }),
                                    (0, E.jsx)(el.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: j.intl.format(j.t["6UAu+f"], {
                                            count: l0.M4,
                                            boostCount: l0.M4,
                                            helpdeskArticle: l,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)(mT.A, {
                shouldShow: null != n,
                text: n ?? "",
                "aria-label": n,
                children: (e) =>
                    (0, E.jsx)(ek.$, {
                        ...e,
                        variant: "primary",
                        size: "sm",
                        icon: gx._,
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
                                                (0, mp.g)({
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
function Ar(e) {
    let { premiumSubscription: t } = e,
        i = (0, g.bG)([gq.A], () => gq.A.boostSlots),
        n = S.useMemo(() => Object.values(i), [i]),
        l = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()),
        s = (0, g.bG)([gZ.A], () => gZ.A.affinities),
        r = (0, g.bG)([eE.Ay], () => eE.Ay.getFlattenedGuildIds()),
        a = s.length > 0 || r.length > 0,
        o = S.useMemo(() => n.filter((e) => null != e.premiumGuildSubscription), [n]).length,
        u = (0, g.bG)([gI.A], () => gI.A.getCurrentUserAppliedBoosts()),
        { fractionalState: d } = (0, gC.A)({ forceFetch: !0 }),
        c = l?.isPremiumGroupMember(),
        m = t?.isPausedOrPausePending === !0 && d === l0.xc.NONE,
        A = S.useMemo(() => n.some((e) => null == e.premiumGuildSubscription && e.isAvailable()), [n]),
        h = m ? j.intl.string(j.t.mOWsF1) : A ? void 0 : j.intl.string(j.t.xr4m5B),
        T = S.useMemo(() => {
            if (null == t) return 0;
            let e = uA.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== n.length ? 0 : Math.max(0, e - o);
        }, [t, n.length, o]);
    return (0, E.jsxs)("div", {
        className: mM.GO,
        children: [
            (0, E.jsx)(d6.kb, { className: mM.ek }),
            (0, E.jsx)(m7, {}),
            (0, E.jsx)(At, {}),
            T > 0 && (0, E.jsx)(As, { count: T, disabledReason: h }),
            c && (0, E.jsx)(gW.A, {}),
            !a && (0, E.jsx)(mS, {}),
            (0, E.jsxs)("div", {
                className: mM.C_,
                children: [
                    (0, E.jsx)(mJ, {
                        guildBoostSlots: n,
                        guildBoostSlotsByGuildId: i,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: u,
                        fractionalPremiumState: d,
                    }),
                    (0, E.jsx)(An, {}),
                    (0, E.jsx)(mV.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, E.jsx)(m1, {}),
                    (0, E.jsx)(m5, {}),
                ],
            }),
        ],
    });
}
var Aa = i(672140);
let Ao = (0, a.E2)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            let e = g_.useConfig({ location: "UserSettingsPremiumGuildSubscriptions" }).enabled;
            S.useEffect(() => {
                lm.h.wait(() => {
                    dx.hP(), dx.$o(), (0, gp.CD)(), (0, gf.zS)(null, null, U.tF5.DISCOVERY), (0, gp.tO)(!0);
                });
            }, []);
            let { hasFetchedSubscriptions: t, premiumSubscription: i } = (0, g.cf)([dJ.A], () => ({
                    hasFetchedSubscriptions: dJ.A.hasFetchedSubscriptions(),
                    premiumSubscription: dJ.A.getPremiumTypeSubscription(),
                })),
                n = (0, gN.Y)(),
                l = (0, g.bG)([dQ.A], () => dQ.A.hasFetchedPaymentSources),
                s = (0, g.bG)([gI.A], () => gI.A.isFetchingCurrentUserAppliedBoosts),
                r = !t || !n || !l || s,
                [a, o] = S.useState(!1);
            return (r || a || o(!0), r && !a)
                ? (0, E.jsx)("div", { className: e7()(Aa.kL, Aa.Lq), children: (0, E.jsx)(dm.y, {}) })
                : (0, E.jsxs)("div", {
                      className: Aa.kL,
                      children: [
                          (0, E.jsx)("div", { className: Aa.Tp }),
                          (0, E.jsx)("div", {
                              className: Aa.Qs,
                              children: e
                                  ? (0, E.jsx)(Ar, { premiumSubscription: i })
                                  : (0, E.jsx)(mU, { premiumSubscription: i }),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t["+CbP2v"]), j.intl.string(j.t.Nn1lJy)],
    }),
    Au = (0, a.zZ)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [Ao] }),
    Ad = (0, a.t_)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => j.intl.string(j.t["+CbP2v"]),
        buildLayout: () => [Au],
    }),
    Ac = (0, a.i4)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["+CbP2v"]),
        icon: gx._,
        buildLayout: () => [Ad],
    });
var Ag = i(153659),
    Am = i(155984),
    AA = i(357758),
    Ah = i(262077),
    AE = i(281445),
    AS = i(624479),
    AT = i(626584),
    Ax = i(95035),
    Ap = i(196736),
    Af = i(685743),
    AN = i(349085),
    A_ = i(342942),
    AI = i(252589),
    AC = i(758836),
    Ab = i(275695),
    Av = i(356061);
let Ay = new AT.A("GameServerSubscriptionsSection");
function Aj(e) {
    return e.toLocaleDateString(void 0, { year: "numeric", month: "numeric", day: "numeric" });
}
function AO(e, t) {
    return (
        e.priceLabel === t.priceLabel &&
        e.dateLabel === t.dateLabel &&
        e.isCanceled === t.isCanceled &&
        e.isDanger === t.isDanger
    );
}
let AR = S.memo(function (e) {
    let { server: t, planOptionBySkuId: i, canUseShopDiscount: n } = e,
        { analyticsLocations: l } = (0, n1.Ay)(),
        s = t.instance.subscriptionId,
        r = t.instance.planId,
        a = (0, AN.A)(t.gameId, "cover") ?? t.coverUrl;
    S.useEffect(() => {
        (0, gf.ur)(r).catch(() => {});
    }, [r]);
    let [o, u] = (0, eB.kn)([eF.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        d = o !== eF.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        c = cU.default.getId() ?? "0",
        { handleCopyServerIp: m, animateCopyIcon: A } = (0, Af.A)(c, t.id, e6.A.GAME_SERVER_PAGE, t.serverIp),
        h = S.useCallback(() => {
            (0, A_.A)({
                provider: AE.X.SHOCKBYTE,
                onAccept: () => {
                    u(iT.i.TAKE_ACTION), m();
                },
            });
        }, [u, m]),
        {
            priceLabel: T,
            dateLabel: x,
            isCanceled: p,
            isDanger: f,
        } = (0, g.bG)(
            [dJ.A, ck.A],
            () => {
                let e = null != s ? dJ.A.getSubscriptionById(s) : null;
                if (null == e) return { priceLabel: null, dateLabel: null, isCanceled: !1, isDanger: !1 };
                let t = null != e.canceledAt,
                    l = !t && null != e.renewalMutations,
                    r = l ? e.renewalMutations?.items[0]?.planId : e.items[0]?.planId,
                    a = null != r ? ck.A.get(r) : null,
                    o = null != a ? i.get(a.skuId) : null,
                    u = n && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                    d =
                        null != u && o?.priceCurrency != null
                            ? j.intl.formatToPlainString(j.t.AbOLNu, { price: (0, d_.$g)(u, o.priceCurrency) })
                            : null,
                    c = Aj(e.currentPeriodEnd);
                return {
                    priceLabel: d,
                    dateLabel: t
                        ? j.intl.formatToPlainString(Ab.default["3aEgK6"], { date: c })
                        : l
                          ? j.intl.formatToPlainString(Ab.default.KFSA3M, { date: c })
                          : j.intl.formatToPlainString(Ab.default["9A6cRW"], { date: c }),
                    isCanceled: t,
                    isDanger: t || l,
                };
            },
            [s, i, n],
            AO,
        ),
        N = S.useCallback(() => {
            if (null == s) return;
            let e = dJ.A.getSubscriptionById(s),
                t = null != e ? Aj(e.currentPeriodEnd) : "";
            (0, s1.A)({
                title: j.intl.string(Ab.default.TEYPNR),
                subtitle: j.intl.formatToPlainString(Ab.default.XR1WrB, { date: t }),
                confirmText: j.intl.string(j.t["cY+Oob"]),
                cancelText: j.intl.string(Ab.default.zjfaGH),
                variant: "critical",
                onConfirm: async () => {
                    try {
                        await dx.M2(s, l), await dx.hP();
                    } catch (e) {
                        Ay.error("Failed to cancel game server subscription", e);
                    }
                },
            });
        }, [s, l]),
        _ = S.useCallback(() => {
            if (null == s) return;
            let e = dJ.A.getSubscriptionById(s);
            if (null == e) return;
            let t = e.items[0]?.planId,
                a = null != t ? ck.A.get(t) : null,
                o = null != a ? i.get(a.skuId) : null,
                u = n && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                d = null != u && o?.priceCurrency != null ? (0, d_.$g)(u, o.priceCurrency) : "",
                c = Aj(e.currentPeriodEnd);
            (0, s1.A)({
                title: j.intl.string(Ab.default.o96qbc),
                subtitle: j.intl.formatToPlainString(Ab.default["7n6Qq+"], { price: d, date: c }),
                confirmText: j.intl.string(j.t.iIvF2z),
                cancelText: j.intl.string(j.t["ETE/oC"]),
                variant: "primary",
                onConfirm: async () => {
                    try {
                        await (0, gf.ur)(r);
                        let t = e.items;
                        await dx.nV(
                            e,
                            { status: U.Dmq.ACTIVE, items: t, currency: e.currency },
                            { amount: 0, currency: e.currency },
                            (0, uA.UC)(t, e.currency),
                            l,
                        ),
                            await dx.hP();
                    } catch (e) {
                        Ay.error("Failed to re-subscribe to game server subscription", e);
                    }
                },
            });
        }, [s, r, l, i, n]),
        I = "" !== t.serverIp && ":" !== t.serverIp;
    return (0, E.jsxs)("div", {
        className: Av.nM,
        children: [
            (0, E.jsxs)("div", {
                className: Av.M4,
                children: [
                    (0, E.jsxs)("div", {
                        className: Av.Vs,
                        "aria-hidden": !0,
                        children: [
                            null != a && (0, E.jsx)("img", { className: Av.uP, src: a, alt: "" }),
                            (0, E.jsx)("div", { className: Av.tw }),
                        ],
                    }),
                    (0, E.jsxs)("div", {
                        className: Av.CR,
                        children: [
                            (0, E.jsx)(el.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                tag: "span",
                                lineClamp: 1,
                                children: t.serverName,
                            }),
                            (0, E.jsx)(el.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                tag: "span",
                                lineClamp: 1,
                                children: `${t.gameName}  \u{2022}  ${t.planName}`,
                            }),
                            I &&
                                (d
                                    ? (0, E.jsxs)("div", {
                                          className: Av.CQ,
                                          children: [
                                              (0, E.jsx)(el.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  lineClamp: 1,
                                                  children: t.serverIp,
                                              }),
                                              (0, E.jsx)(en.D, {
                                                  className: Av.cL,
                                                  onClick: m,
                                                  "aria-label": j.intl.string(j.t.OpuAlK),
                                                  children: A
                                                      ? (0, E.jsx)(gV.A, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        })
                                                      : (0, E.jsx)(AS.T, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        }),
                                              }),
                                          ],
                                      })
                                    : (0, E.jsx)(Ax.A, { onClick: h, children: j.intl.string(Ab.default["f+F7H3"]) })),
                        ],
                    }),
                ],
            }),
            (0, E.jsxs)("div", {
                className: Av.Rd,
                children: [
                    (0, E.jsxs)("div", {
                        className: Av.Ff,
                        children: [
                            null != T &&
                                (0, E.jsx)(el.E, {
                                    variant: "text-md/semibold",
                                    color: "text-default",
                                    tag: "span",
                                    children: T,
                                }),
                            null != x &&
                                (f
                                    ? (0, E.jsxs)("div", {
                                          className: Av.ez,
                                          children: [
                                              (0, E.jsx)(rV.E, { size: "xs", color: "text-feedback-critical" }),
                                              (0, E.jsx)(el.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-critical",
                                                  tag: "span",
                                                  children: x,
                                              }),
                                          ],
                                      })
                                    : (0, E.jsx)(el.E, {
                                          variant: "text-sm/medium",
                                          color: "text-muted",
                                          tag: "span",
                                          children: x,
                                      })),
                        ],
                    }),
                    p
                        ? (0, E.jsx)(ek.$, {
                              variant: "primary",
                              size: "sm",
                              text: j.intl.string(j.t.iIvF2z),
                              onClick: _,
                          })
                        : (0, E.jsx)(ek.$, {
                              variant: "secondary",
                              size: "sm",
                              text: j.intl.string(j.t["ETE/oC"]),
                              onClick: N,
                          }),
                ],
            }),
        ],
    });
});
function AL(e) {
    let { servers: t } = e,
        i = (0, Ap.H)({ location: "user_settings_subscriptions" }),
        { games: n } = (0, AI.Y)(),
        l = (0, g.bG)([iA.default], () => uA.Ay.canUseShopDiscounts(iA.default.getCurrentUser())),
        s = S.useMemo(() => {
            let e = new Map();
            for (let t of n) for (let i of t.plans ?? []) e.set(i.id, i);
            return e;
        }, [n]);
    S.useEffect(() => {
        let e = [...s.keys()];
        e.length > 0 && (0, gf.jv)(e).catch(() => {});
    }, [s]);
    let r = S.useCallback(() => {
        (0, lZ.default)(), (0, l7.pX)(U.BVt.COLLECTIBLES_SHOP_WITH_TAB(AC.G2.GAME_SERVERS));
    }, []);
    return (0, E.jsxs)("div", {
        className: Av.uW,
        children: [
            (0, E.jsxs)("div", {
                className: Av.wx,
                children: [
                    (0, E.jsx)(el.E, {
                        variant: "text-lg/medium",
                        color: "text-strong",
                        children: j.intl.string(Ab.default.vCzwM7),
                    }),
                    (0, E.jsxs)("div", {
                        className: Av.h_,
                        children: [
                            (0, E.jsx)(el.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                tag: "span",
                                children: j.intl.string(Ab.default.y85Eg9),
                            }),
                            i &&
                                (0, E.jsx)(Ax.A, {
                                    onClick: r,
                                    children: (0, E.jsx)(el.E, {
                                        variant: "text-sm/normal",
                                        color: "text-link",
                                        tag: "span",
                                        children: j.intl.string(Ab.default["F/BDbC"]),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)("div", {
                className: Av.p_,
                children: t.map((e) =>
                    (0, E.jsx)(AR, { server: e, planOptionBySkuId: s, canUseShopDiscount: l }, e.id),
                ),
            }),
        ],
    });
}
var AD = i(55766),
    AP = i(696986),
    AG = i(898555);
function AM(e) {
    let { onClickManageSubscription: t, count: i } = e;
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsx)(eV.D, { variant: "heading-md/bold", children: j.intl.string(j.t["KzCF/6"]) }),
            (0, E.jsx)(AP.h, { size: 4 }),
            (0, E.jsx)(el.E, { variant: "text-md/normal", className: AG.yV, children: j.intl.string(j.t["3D7qCu"]) }),
            (0, E.jsx)(AP.h, { size: 24 }),
            (0, E.jsxs)("div", {
                className: AG.Nr,
                children: [
                    (0, E.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: AG.RI }),
                    (0, E.jsxs)("div", {
                        className: AG.FS,
                        children: [
                            (0, E.jsx)(eV.D, {
                                variant: "heading-xl/semibold",
                                className: AG.wx,
                                children: j.intl.string(j.t["KzCF/6"]),
                            }),
                            (0, E.jsx)(el.E, {
                                variant: "text-md/normal",
                                className: AG.h_,
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
var AU = i(872351),
    AV = i(9113),
    Ak = i(599941),
    Aw = i(384684),
    AF = i(2242);
let AB = [];
var Az = i(885574),
    AY = i(912851),
    AX = i(497267);
let AH = function (e) {
    let { label: t, onClick: i, submitting: n } = e;
    return (0, E.jsx)(en.D, {
        onClick: n ? void 0 : i,
        className: AX.x6,
        children: (0, E.jsxs)("div", {
            className: AX.hQ,
            children: [
                n
                    ? (0, E.jsx)(dm.y, { type: dm.y.Type.PULSING_ELLIPSIS, className: AX.__invalid_spinner })
                    : (0, E.jsx)(el.E, { variant: "text-md/medium", className: AX.Pf, children: t }),
                (0, E.jsx)(es.a, { size: "md", color: "currentColor", className: AX.UE }),
            ],
        }),
    });
};
var AK = i(465932),
    AW = i(543767),
    AZ = i(951555),
    Aq = i(790284),
    AQ = i(636194),
    AJ = i(624456),
    A$ = i(710144),
    A0 = i(815332),
    A1 = i(162093),
    A2 = i(960309);
function A3(e) {
    let { transitionState: t, groupListing: i, listing: n, subscription: l, onClose: s } = e,
        r = (0, lJ.GV)(),
        { analyticsLocations: a } = (0, n1.Ay)(e6.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: o,
            error: u,
            submitting: d,
        } = (function (e) {
            let [t, i] = S.useState(!1),
                [n, l] = S.useState(null);
            return {
                cancelSubscription: async function (t) {
                    try {
                        return i(!0), await dx.M2(t, e), !0;
                    } catch (e) {
                        l(e);
                    } finally {
                        i(!1);
                    }
                },
                error: n,
                submitting: t,
            };
        })(a);
    async function c() {
        (await o(l.id)) && s();
    }
    let g = n.role_benefits.benefits.filter((e) => e.ref_type === AF.bN.CHANNEL),
        m = n.role_benefits.benefits.filter((e) => e.ref_type === AF.bN.INTANGIBLE),
        A = rl()(l.currentPeriodEnd).format("MMMM Do, YYYY"),
        h = j.intl.formatToPlainString(j.t.KsMRP5, {
            numChannels: g.length,
            numAdditionalBenefits: m.length,
            subscriptionEndDate: A,
        });
    return (0, E.jsx)(rW.Modal, {
        transitionState: t,
        "aria-labelledby": r,
        actions: [
            { text: j.intl.string(j.t.EP6EPb), variant: "secondary", onClick: s },
            { variant: "critical-primary", text: j.intl.string(j.t.F6lUDF), onClick: c, loading: d },
        ],
        title: j.intl.string(j.t.O6l5tM),
        subtitle: h,
        onClose: s,
        children: (0, E.jsxs)(Q.B, {
            gap: 8,
            children: [
                null != u ? (0, E.jsx)(q.w, { type: "critical", children: u.message }) : null,
                (0, E.jsx)(A1.x, { listingId: n.id, guildId: i.guild_id, className: A2.P }),
            ],
        }),
    });
}
var A5 = i(319225),
    A6 = i(746080),
    A4 = i(74669);
function A8(e) {
    let { label: t, value: i, showInfoIcon: n, infoIconTooltipText: l } = e;
    return (0, E.jsxs)("div", {
        className: A4.L0,
        children: [
            (0, E.jsxs)("div", {
                className: A4.a5,
                children: [
                    (0, E.jsx)(eV.D, { variant: "heading-deprecated-12/semibold", className: A4.HU, children: t }),
                    n &&
                        (0, E.jsx)(td.m, {
                            text: l,
                            children: (0, E.jsx)(Az.m, { size: "xs", color: "currentColor", className: A4.Mo }),
                        }),
                ],
            }),
            (0, E.jsx)(eV.D, { variant: "heading-xl/semibold", className: A4.sx, children: i }),
        ],
    });
}
function A7(e) {
    let { subscription: t } = e,
        { analyticsLocations: i } = (0, n1.Ay)(),
        [n] = (0, AW.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: i,
            analyticsLocation: e6.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        l = (0, g.bG)([dQ.A], () => dQ.A.hasFetchedPaymentSources);
    return null != n && l ? (0, E.jsx)(AZ.A, { subscription: t, currentInvoicePreview: n }) : (0, E.jsx)(dm.y, {});
}
function A9(e) {
    let {
        isTrial: t,
        isCancelled: i,
        isResubscribing: n,
        shouldHideRoleSubscriptionEntryPoints: l,
        onCancelSubscriptionClick: s,
        onResubscribeClick: r,
        onChangePlanClick: a,
    } = e;
    return i && (t || l)
        ? null
        : (0, E.jsx)(l8.D, {
              label: j.intl.string(j.t["4neDM+"]),
              children: (0, E.jsx)("div", {
                  className: A4.__invalid_rowButtons,
                  children: i
                      ? (0, E.jsx)(ek.$, {
                            variant: "primary",
                            text: j.intl.string(j.t.y3mAE4),
                            onClick: r,
                            loading: n,
                        })
                      : (0, E.jsxs)(E.Fragment, {
                            children: [
                                !t && !l && (0, E.jsx)(AH, { label: j.intl.string(j.t.FRbWR8), onClick: a }),
                                (0, E.jsx)(AH, { label: j.intl.string(j.t.Dx0lF7), onClick: s }),
                            ],
                        }),
              }),
          });
}
let he = function (e) {
    let { subscription: t } = e,
        {
            listing: i,
            groupListing: n,
            guild: l,
            expanded: s,
            handleToggleExpanded: r,
            subscriptionInfo: a,
        } = (function (e) {
            let t = (0, AJ.M)(e),
                i = (0, g.bG)([AQ.A], () => AQ.A.getSubscriptionListingForPlan(t)),
                n = (0, g.bG)([AQ.A], () =>
                    null != i ? AQ.A.getSubscriptionGroupListingForSubscriptionListing(i.id) : null,
                ),
                l = (0, g.bG)([eh.A], () => eh.A.getGuild(n?.guild_id)),
                [s, r] = S.useState(!1),
                { fetchSubscriptionsSettings: a } = (0, Ak.XE)();
            S.useEffect(() => {
                s && null != l && null == AQ.A.getSubscriptionSettings(l.id) && a(l.id);
            }, [s, l, a]);
            let o =
                null == i
                    ? void 0
                    : (function (e) {
                          let { subscription: t } = e,
                              i = rl()(t.currentPeriodEnd).format("M/D/YY"),
                              n = null != t.price ? (0, d_.$g)(t.price, t.currency) : "",
                              l = rl()(t.createdAt).format("M/D/YY"),
                              s = t.status === U.Dmq.CANCELED,
                              r = t.status === U.Dmq.PAST_DUE,
                              a = t.hasActiveTrial;
                          return {
                              memberSince: l,
                              nextRenewalDate: i,
                              nextRenewalLabel: s ? j.intl.string(j.t.UAfot2) : j.intl.string(j.t.CVjLcM),
                              subscriptionPrice: n,
                              isCancelled: s,
                              isPastDue: r,
                              isTrial: a,
                          };
                      })({ subscription: e });
            return {
                guild: l,
                expanded: s,
                handleToggleExpanded: function () {
                    return r((e) => !e);
                },
                listing: i,
                groupListing: n,
                subscriptionInfo: o,
            };
        })(t),
        [o, d] = S.useState(!1),
        c = (0, lJ.GV)(),
        { analyticsLocations: m } = (0, n1.Ay)(),
        { shouldHideGuildPurchaseEntryPoints: A } = (0, AK.MH)(l?.id),
        h = t?.isPurchasedViaAppleGeneric;
    if (null == n || null == i || null == a) return null;
    async function T() {
        try {
            d(!0), await dx.QP(t, m), (0, A5.E)({ title: j.intl.string(j.t.oPV2cy), body: j.intl.string(j.t.DdRizV) });
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
        b = i.soft_deleted || null == l || h;
    return (0, E.jsxs)("div", {
        className: A4.kL,
        children: [
            (0, E.jsx)(A$.A, {
                onClick: r,
                className: A4.N1,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: n } = e;
                    return (0, E.jsxs)(E.Fragment, {
                        children: [
                            null != l && (0, E.jsx)(me.Ay, { guild: l, active: !0, size: me.Ay.Sizes.MEDIUM }),
                            (0, E.jsxs)("div", {
                                className: A4.if,
                                children: [
                                    (0, E.jsx)(el.E, {
                                        variant: "text-md/medium",
                                        className: A4.J5,
                                        children: null != l ? l.name : j.intl.string(j.t["He+cmd"]),
                                    }),
                                    (0, E.jsxs)("div", {
                                        className: A4.xp,
                                        children: [
                                            (0, E.jsx)(el.E, {
                                                variant: "text-sm/normal",
                                                className: A4.KR,
                                                children: i.name,
                                            }),
                                            x
                                                ? (0, E.jsx)(lT.Lp, { text: j.intl.string(j.t["7uFZGt"]) })
                                                : C
                                                  ? (0, E.jsx)(lT.Lp, {
                                                        text: j.intl.string(j.t["6anton"]),
                                                        color: er.A.unsafe_rawColors.BRAND_500.css,
                                                    })
                                                  : p
                                                    ? (0, E.jsx)(td.m, {
                                                          text: j.intl.string(j.t.eSuJE2),
                                                          children: (0, E.jsx)("div", {
                                                              children: (0, E.jsx)(lT.Lp, {
                                                                  className: A4.qc,
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
                                                          children: (0, E.jsx)(lT.Lp, {
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
                                "aria-expanded": s,
                                focusProps: { ringTarget: t },
                                children: (0, E.jsx)(es.a, {
                                    size: "md",
                                    color: "currentColor",
                                    className: e7()(A4.D6, { [A4.S7]: s }),
                                }),
                            }),
                        ],
                    });
                },
            }),
            null != n && s
                ? (0, E.jsxs)("div", {
                      id: c,
                      children: [
                          (0, E.jsx)("div", { className: A4.yF }),
                          (0, E.jsx)(A0.A, { groupListingId: n.id, subscription: t, className: A4.kE }),
                          (0, E.jsxs)("div", {
                              className: A4.Zx,
                              children: [
                                  (0, E.jsx)(A8, { label: I, value: _ }),
                                  (0, E.jsx)(A8, {
                                      label: j.intl.string(j.t.dltUMH),
                                      value: f,
                                      showInfoIcon: C,
                                      infoIconTooltipText: C ? j.intl.string(j.t["/q6fpa"]) : void 0,
                                  }),
                                  (0, E.jsx)(A8, { label: j.intl.string(j.t.AOcwWB), value: N }),
                              ],
                          }),
                          (0, E.jsx)(AP.h, { size: 16 }),
                          !x &&
                              !h &&
                              (0, E.jsx)(l8.D, {
                                  label: j.intl.string(j.t.wmMFvA),
                                  children: (0, E.jsx)(A7, { subscription: t }),
                              }),
                          !b &&
                              (0, E.jsx)(A9, {
                                  isTrial: C,
                                  isCancelled: x,
                                  isResubscribing: o,
                                  shouldHideRoleSubscriptionEntryPoints: A,
                                  onCancelSubscriptionClick: function () {
                                      if (null != l && null != n && null != i) {
                                          var e;
                                          (e = { groupListing: n, listing: i, subscription: t }),
                                              (0, K.openModal)((t) => (0, E.jsx)(A3, { ...t, ...e }));
                                      }
                                  },
                                  onChangePlanClick: function () {
                                      null != l &&
                                          ((0, l7.pX)(U.BVt.CHANNEL(l.id, A6.VV.ROLE_SUBSCRIPTIONS)),
                                          (0, lZ.default)(),
                                          AY.A.show(
                                              U.kqX.BACK_TO_PREVIOUS_SCREEN,
                                              void 0,
                                              j.intl.string(j.t.DvbaM4),
                                              () => {
                                                  Aq.A.setState({ subsection: nH.nR }),
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
var ht = i(175880);
let hi = function (e) {
    let { onGoBack: t } = e,
        i = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, g.bG)([Aw.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [Aw.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                i = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (i = !0);
                            }),
                            i)
                                ? AF.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? AF.M_.NONE
                                  : AF.M_.IN_SUBSCRIPTION_SERVER;
                        })([Aw.A]),
                    ) === AF.M_.SUBSCRIBED,
                i = (0, g.bG)([dJ.A], () => dJ.A.getActiveGuildSubscriptions()),
                n = S.useRef(!1);
            return (
                S.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: i, hasRoleSubscriptions: n } = e,
                            l = dJ.A.getActiveGuildSubscriptions();
                        return (
                            ((l?.length ?? 0) === 0 && !!n) || (!!t && !i) || (!i && !dJ.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: n.current }) &&
                        ((n.current = !0), dx.hP());
                }, [e, t]),
                i ?? AB
            );
        })(),
        { loading: n } = (0, Ak.eb)(i);
    return ((0, AV.A)(db.Fr ? "role-subscriptions-user-setting" : void 0), n)
        ? (0, E.jsx)(dm.y, {})
        : 0 === i.length
          ? null
          : (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(ek.$, { text: j.intl.string(j.t.hqyhKQ), icon: AU.z, variant: "secondary", onClick: t }),
                    (0, E.jsx)(AP.h, { size: 10 }),
                    (0, E.jsx)(ij.n, {
                        label: j.intl.string(j.t["KzCF/6"]),
                        description: j.intl.string(j.t["Y+ucR7"]),
                        children: (0, E.jsx)("div", {
                            className: ht.A,
                            children: i.map((e) => (0, E.jsx)(he, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var hn = i(327479),
    hl = i(388567);
function hs(e) {
    let { onClickManageSubscription: t, count: i } = e;
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsx)(eV.D, { variant: "heading-md/bold", children: j.intl.string(j.t["48ywCu"]) }),
            (0, E.jsx)(AP.h, { size: 4 }),
            (0, E.jsx)(el.E, { variant: "text-md/normal", className: hl.yV, children: j.intl.string(j.t.VWxmSo) }),
            (0, E.jsx)(AP.h, { size: 24 }),
            (0, E.jsxs)("div", {
                className: hl.Nr,
                children: [
                    (0, E.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: hl._e }),
                    (0, E.jsxs)("div", {
                        className: hl.FS,
                        children: [
                            (0, E.jsx)(eV.D, {
                                variant: "heading-xl/semibold",
                                className: hl.wx,
                                children: j.intl.string(j.t["48ywCu"]),
                            }),
                            (0, E.jsx)(el.E, {
                                variant: "text-md/normal",
                                className: hl.h_,
                                children: j.intl.format(j.t["/esXLj"], { numSubscriptions: i }),
                            }),
                        ],
                    }),
                    (0, E.jsx)(hn.A, { onClick: t, text: j.intl.string(j.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var hr = i(548411),
    ha = i(417098),
    ho = i(143582),
    hu = i(915043),
    hd = i(46367);
function hc(e) {
    let { className: t, header: i, headerClassName: n, children: l } = e,
        s = S.useMemo(() => {
            let e = !1;
            return (
                S.Children.forEach(l, (t) => {
                    null != t && (e = !0);
                }),
                e
            );
        }, [l]);
    return (0, E.jsxs)("div", {
        className: e7()(hd.iE, t),
        children: [
            (0, E.jsx)("div", { className: e7()(hd.wx, n), children: i }),
            s && (0, E.jsx)("div", { className: hd.Qs, children: l }),
        ],
    });
}
var hg = i(885996),
    hm = i(144165),
    hA = i(664121),
    hh = i(950305),
    hE = i(943775),
    hS = i(123791),
    hT = i(900797),
    hx = i(300118);
let hp = S.createContext({ isOpen: !1, toggleOpen: () => {} });
function hf(e) {
    let { children: t } = e,
        [i, n] = S.useReducer((e) => !e, !1),
        l = S.useMemo(() => ({ isOpen: i, toggleOpen: n }), [i]);
    return (0, E.jsx)(hp.Provider, { value: l, children: t(i) });
}
hf.Toggle = function (e) {
    let { className: t, text: i } = e,
        { isOpen: n, toggleOpen: l } = S.useContext(hp),
        s = n ? hT.t : es.a,
        r = null != i ? i : n ? j.intl.string(j.t.fgq1gs) : j.intl.string(j.t.XJuakA);
    return (0, E.jsxs)(en.D, {
        className: e7()(hx.L, t),
        onClick: l,
        children: [
            (0, E.jsx)(el.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, E.jsx)(s, { size: "sm", color: "currentColor" }),
        ],
    });
};
var hN = i(243217),
    h_ = i(328968),
    hI = i(163437),
    hC = i(3432);
function hb(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var hv = i(583995),
    hy = (((l = {})[(l.LOADING = 0)] = "LOADING"), (l[(l.DONE = 1)] = "DONE"), (l[(l.ERROR = 2)] = "ERROR"), l);
function hj(e) {
    let { subscription: t, navigateToSwitchPlan: i, loadingState: n } = e,
        l = t.metadata?.application_subscription_guild_id,
        { renewalMutations: s, planId: r } = t,
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
        } = (0, g.cf)([ck.A, cw.A, h_.A, eh.A], () => {
            let e,
                i = ck.A.get(r),
                n = null != i ? cw.A.get(i.skuId) : void 0,
                a = n?.applicationId,
                o = null != i ? h_.A.getForSKU(i.skuId) : null,
                u = null != o && (0, hI.PJ)(o.skuFlags),
                d = u && null != l ? eh.A.getGuild(l) : void 0,
                c = (0, hI.Uo)(t, n),
                g = u && null != l && null == d;
            if (!1 === c && null != s && s.items.length > 0) {
                let t = s.items[0];
                e = ck.A.get(t.planId) ?? void 0;
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
        }, [l, r, s, t]),
        { data: p } = (0, T.YY)(a),
        f = S.useMemo(() => (null != p ? (0, hE.A)(p, 100) : null), [p]),
        N = m?.deleted ?? !1,
        _ = null != m && (0, hI.Se)(m),
        I = t.status === U.Dmq.PAST_DUE,
        { analyticsLocations: C } = (0, n1.Ay)(),
        [b] = (0, AW.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: C,
            analyticsLocation: e6.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        v = hb(t.currentPeriodEnd),
        y = 0 === n;
    return (0, E.jsxs)(hc, {
        headerClassName: hv.dL,
        header:
            !1 === y
                ? (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsxs)("div", {
                              className: hv.VW,
                              children: [
                                  null != f &&
                                      (0, E.jsx)(hm._, { src: f.href, imageClassName: hv.Z2, width: 40, height: 40 }),
                                  (0, E.jsxs)("div", {
                                      className: hv.aF,
                                      children: [
                                          (0, E.jsx)(eV.D, {
                                              variant: "heading-md/semibold",
                                              lineClamp: 1,
                                              children: p?.name ?? j.intl.string(j.t["7kqy7W"]),
                                          }),
                                          (0, E.jsx)(el.E, {
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
                              className: hv.Pz,
                              children:
                                  null != p &&
                                  null != u &&
                                  null != m &&
                                  (0, E.jsx)(hP, {
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
                : (0, E.jsx)(dm.y, { type: dm.t.PULSING_ELLIPSIS }),
        children: [
            A &&
                (0, E.jsx)(hD, {
                    type: "warning",
                    title: _
                        ? j.intl.formatToPlainString(j.t.QOnM1y, { subscriptionPeriodEnd: v })
                        : j.intl.formatToPlainString(j.t.HOaZu8, { subscriptionPeriodEnd: v }),
                }),
            !A && h && (0, E.jsx)(hD, { type: "warning", title: j.intl.string(j.t.SmSP8Q) }),
            I && (0, E.jsx)(hD, { type: "danger", title: j.intl.string(j.t.fvOqBo) }),
            (0, E.jsxs)("div", {
                className: hv.zH,
                children: [
                    (0, E.jsx)(hL, {
                        title: j.intl.string(j.t["5D/KEH"]),
                        content: d
                            ? (0, E.jsxs)(E.Fragment, {
                                  children: [
                                      (0, E.jsxs)("span", {
                                          className: hv.yW,
                                          children: [(0, E.jsx)(hA.R, { size: "xs" }), j.intl.string(j.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, E.jsxs)("span", {
                                              className: hv._t,
                                              children: [
                                                  (0, E.jsx)(el.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: j.intl.format(j.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, E.jsx)(me.Ay, { guild: c, size: me.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, E.jsxs)("span", {
                                  className: hv.yW,
                                  children: [(0, E.jsx)(hh.n, { size: "xs" }), j.intl.string(j.t["6anEVv"])],
                              }),
                    }),
                    (0, E.jsx)(hO, { invoicePreview: b, subscriptionPlan: o }),
                    (0, E.jsx)(hL, {
                        title: j.intl.string(j.t.dnUzb6),
                        content: hb(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, E.jsx)(hR, { isCancelled: A, subscriptionPeriodEnd: v, renewalPlan: x }),
                ],
            }),
            (0, E.jsx)(hM, {
                subscription: t,
                currentInvoicePreview: b,
                loadingState: n,
                isDeleted: N,
                isCancelled: A,
            }),
            null != p &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, E.jsx)(hG, { appId: p.id, listingBenefits: u.benefits }),
        ],
    });
}
function hO(e) {
    let { subscriptionPlan: t, invoicePreview: i } = e;
    if (null == t) return (0, E.jsx)(hL, { title: j.intl.string(j.t.KI7ERx), content: "" });
    let n = (0, d_.CE)((0, d_.$g)(t.price, t.currency), t.interval, t.intervalCount),
        l = i?.findInvoiceItemByPlanId(t.id);
    if (null == l) return (0, E.jsx)(hL, { title: j.intl.string(j.t.KI7ERx), content: n });
    let s = (0, d_.CE)((0, d_.$g)(l.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, E.jsx)(hL, {
        title: j.intl.string(j.t.KI7ERx),
        content: (0, E.jsxs)(E.Fragment, {
            children: [
                (0, E.jsx)(el.E, { variant: "text-sm/semibold", children: s }),
                s !== n &&
                    (0, E.jsx)(td.m, {
                        text: j.intl.format(j.t["6DoE57"], { listPrice: n }),
                        position: "bottom",
                        children: (0, E.jsx)(el.E, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: (0, E.jsx)("s", { children: n }),
                        }),
                    }),
            ],
        }),
    });
}
function hR(e) {
    let { isCancelled: t, subscriptionPeriodEnd: i, renewalPlan: n } = e;
    if (null != n) {
        let e = (0, d_.CE)((0, d_.$g)(n.price, n.currency), n.interval, n.intervalCount);
        return (0, E.jsx)(hL, {
            title: j.intl.string(j.t.hIhAM3),
            content: (0, E.jsxs)(E.Fragment, {
                children: [
                    (0, E.jsx)(el.E, { variant: "text-sm/medium", children: i }),
                    (0, E.jsx)(el.E, {
                        variant: "text-sm/normal",
                        children: j.intl.format(j.t.MCLbvj, { planName: n.name, price: e }),
                    }),
                ],
            }),
        });
    }
    return (0, E.jsx)(hL, { title: t ? j.intl.string(j.t.enxcAl) : j.intl.string(j.t["Ms+6Zq"]), content: i });
}
function hL(e) {
    let { title: t, content: i } = e;
    return (0, E.jsxs)("div", {
        className: hv.nM,
        children: [
            (0, E.jsx)(el.E, { variant: "text-sm/medium", children: t }),
            (0, E.jsx)(el.E, { variant: "text-sm/medium", className: hv.u4, children: i }),
        ],
    });
}
function hD(e) {
    let { type: t, title: i } = e;
    return (0, E.jsx)(tv.p, {
        messageType: "warning" === t ? tv.Y.WARNING : tv.Y.ERROR,
        className: hv.Xm,
        children: (0, E.jsx)(el.E, { variant: "text-sm/normal", children: i }),
    });
}
function hP(e) {
    let {
            app: t,
            storeListing: n,
            sku: l,
            subscription: s,
            isCancelled: r,
            isOrphanedGuildSubscription: a,
            guild: o,
            renewalSkuId: u,
            navigateToSwitchPlan: d,
        } = e,
        c = (0, hI.Se)(l),
        { analyticsLocations: m } = (0, n1.Ay)(),
        [A, h] = S.useState(!1),
        T = (0, hS.C)(t.id),
        x = (0, g.bG)([cw.A], () => cw.A.getParentSKU(n.skuId), [n.skuId]),
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
            let { subscription: e } = await (0, dx.QP)(s, m);
            if (null == e) return;
            (0, K.openModalLazy)(async () => {
                let { default: t } = await Promise.all([i.e("76229"), i.e("52396")]).then(i.bind(i, 115623));
                return (i) => (0, E.jsx)(t, { ...i, storeListing: n, subscription: hN.A.createFromServer(e) });
            });
        } finally {
            h(!1);
        }
    }
    return (0, E.jsxs)("div", {
        className: hv.fw,
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
                                    (0, E.jsx)(e, { ...i, application: t, storeListing: n, subscription: s, guild: o });
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
                            currentSubscription: s,
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
function hG(e) {
    let { appId: t, listingBenefits: i } = e;
    return (0, E.jsx)(hf, {
        children: (e) =>
            (0, E.jsxs)("div", {
                className: hv.PX,
                children: [
                    (0, E.jsxs)("div", {
                        className: hv.wV,
                        children: [
                            e && (0, E.jsx)(el.E, { variant: "text-sm/semibold", children: j.intl.string(j.t.mORL67) }),
                            (0, E.jsx)(hf.Toggle, {
                                className: hv.Bh,
                                text: e ? j.intl.string(j.t.gsbFAw) : j.intl.string(j.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? i.map((e) => {
                              let { id: i, name: n, description: l, icon: s } = e;
                              return (0, E.jsx)(hg.FY, { header: n, icon: (0, hC.N)(t, s), description: l }, i);
                          })
                        : null,
                ],
            }),
    });
}
function hM(e) {
    let { subscription: t, currentInvoicePreview: i, loadingState: n, isDeleted: l, isCancelled: s } = e;
    return null == i
        ? null
        : 0 === n
          ? (0, E.jsx)("div", {
                className: hv.Ji,
                children: (0, E.jsx)(l8.D, {
                    label: j.intl.string(j.t.azZaZa),
                    children: (0, E.jsx)(dm.y, { type: dm.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === n
            ? (0, E.jsx)("div", {
                  className: hv.Ji,
                  children: (0, E.jsxs)(ha.$T, {
                      color: ha.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          j.intl.format(j.t.IIHUUF, { subscriptionId: t.id }),
                          (0, E.jsx)("br", {}),
                          j.intl.format(j.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, E.jsx)("div", {
                  className: hv.Ji,
                  children: (0, E.jsx)(l8.D, {
                      label: j.intl.string(j.t.azZaZa),
                      children: (0, E.jsx)(AZ.A, { subscription: t, currentInvoicePreview: i, disabled: l || s }),
                  }),
              });
}
var hU = (((s = {}).HOME = "HOME"), (s.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), s);
i(938796);
var hV = i(38405);
let hk = (0, g.UT)(ck.A, {
    getQueryId: U.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = ck.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && hV.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, gf.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var hw = i(240248),
    hF = i(237218),
    hB = i(242653);
function hz(e) {
    let { children: t, lineClamp: i = 2, ...n } = e,
        [l, s] = S.useState(!1),
        [r, a] = S.useState(null),
        o =
            null != r &&
            (0, E.jsx)("button", {
                className: hB.x6,
                onClick: () => s((e) => !e),
                children: (0, E.jsxs)(el.E, {
                    className: hB.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        l ? j.intl.string(j.t["JQX/Pb"]) : j.intl.string(j.t.Fbrd8J),
                        l
                            ? (0, E.jsx)(hT.t, { color: er.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, E.jsx)(es.a, { color: er.A.colors.TEXT_BRAND, size: "xs" }),
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
        null != r && (g = l ? `${r.expandedHeight}px` : `${r.truncatedHeight}px`),
        (0, E.jsxs)("div", {
            children: [
                (0, E.jsx)(el.E, {
                    ...n,
                    className: hB.Qs,
                    lineClamp: l ? void 0 : i,
                    ref: d,
                    style: { height: g },
                    children: t,
                }),
                o,
            ],
        })
    );
}
var hY = i(386447);
function hX(e) {
    let { cta: t, storeListing: i, className: n } = e,
        { applicationId: l, benefits: s, description: r } = i,
        a = S.useMemo(() => (null == i.thumbnail ? null : (0, hF.t)(l, i.thumbnail, 256)), [l, i.thumbnail]),
        { data: o } = hk(i.skuId),
        u = S.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, d_._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, E.jsxs)(hc, {
              className: e7()(hY.iE, n),
              header: (0, E.jsxs)(E.Fragment, {
                  children: [
                      (0, E.jsxs)("div", {
                          className: hY.qd,
                          children: [
                              null != a &&
                                  (0, E.jsx)(hm._, { src: a.href, imageClassName: hY.rW, width: 48, height: 48 }),
                              (0, E.jsxs)("div", {
                                  children: [
                                      (0, E.jsx)(eV.D, { variant: "heading-md/bold", children: i.summary }),
                                      (0, E.jsx)(el.E, { variant: "text-md/medium", children: u }),
                                  ],
                              }),
                          ],
                      }),
                      t,
                  ],
              }),
              children: [
                  !(0, hw.uJ)(r) &&
                      (0, E.jsx)("div", {
                          className: hY.h_,
                          children: (0, E.jsx)(hz, { variant: "text-sm/medium", children: r }),
                      }),
                  null != s &&
                      s.length > 0 &&
                      (0, E.jsx)("div", {
                          className: hY.PX,
                          children: s.map((e) => {
                              let { id: t, name: i, description: n, icon: s } = e;
                              return (0, E.jsx)(hg.FY, { header: i, icon: (0, hC.N)(l, s), description: n }, t);
                          }),
                      }),
              ],
          });
}
var hH = i(185438),
    hK = i(711171);
function hW(e) {
    let {
            app: t,
            currentSubscription: i,
            currentListing: n,
            alternativeListings: l,
            navigateToHome: s,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, hE.A)(t, 100),
        u = (0, hI.PJ)(r.flags),
        d = u ? hA.R : hh.n,
        c = u ? j.intl.string(j.t["46YF2D"]) : j.intl.string(j.t.fFyGiA),
        m = i.metadata?.application_subscription_guild_id,
        A = (0, g.bG)([eh.A], () => (u && null != m ? eh.A.getGuild(m) : void 0), [m, u]),
        h = (0, g.bG)([cw.A], () => {
            if (null != a) return cw.A.get(a);
        }, [a]),
        S = hb(i.currentPeriodEnd);
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsxs)("div", {
                className: hK.wx,
                children: [
                    null != o && (0, E.jsx)(hm._, { src: o.href, imageClassName: hK.Z2, width: 48, height: 48 }),
                    (0, E.jsxs)("div", {
                        children: [
                            (0, E.jsx)(eV.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, E.jsxs)("div", {
                                className: hK.p4,
                                children: [
                                    (0, E.jsxs)(eV.D, {
                                        variant: "heading-md/normal",
                                        className: hK.N4,
                                        children: [(0, E.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != A &&
                                        (0, E.jsxs)(E.Fragment, {
                                            children: [
                                                (0, E.jsx)(el.E, { variant: "text-md/normal", children: "\u2022" }),
                                                (0, E.jsxs)("span", {
                                                    className: hK.vP,
                                                    children: [
                                                        (0, E.jsx)(me.Ay, { guild: A, size: me.Ay.Sizes.SMOL }),
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
            (0, E.jsx)(hf, {
                children: (e) =>
                    (0, E.jsxs)("div", {
                        className: hK._B,
                        children: [
                            (0, E.jsx)(el.E, { variant: "text-md/normal", children: j.intl.string(j.t["goe+hk"]) }),
                            e &&
                                (0, E.jsxs)(E.Fragment, {
                                    children: [
                                        (0, E.jsx)(el.E, {
                                            variant: "text-md/normal",
                                            children: j.intl.format(j.t["Q8qJ+5"], {}),
                                        }),
                                        (0, E.jsx)(el.E, {
                                            variant: "text-md/normal",
                                            children: j.intl.format(j.t.sqowYz, {}),
                                        }),
                                    ],
                                }),
                            (0, E.jsx)(hf.Toggle, {
                                text: e ? j.intl.string(j.t["1Rkq/E"]) : j.intl.string(j.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, E.jsxs)("div", {
                className: hK.x0,
                children: [
                    (0, E.jsx)(hX, {
                        storeListing: n,
                        className: hK.o3,
                        cta: (0, E.jsxs)("div", {
                            className: hK.cJ,
                            children: [
                                (0, E.jsx)(el.E, {
                                    variant: "eyebrow",
                                    color: "text-brand",
                                    children: j.intl.string(j.t.fHIpOY),
                                }),
                                null != h &&
                                    (0, E.jsx)(el.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: j.intl.format(j.t["OQk+jr"], { endDate: S }),
                                    }),
                            ],
                        }),
                    }),
                    l.map((e) =>
                        e.skuId === a
                            ? (0, E.jsx)(
                                  hX,
                                  {
                                      storeListing: e,
                                      cta: (0, E.jsx)(el.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-subtle",
                                          children: j.intl.format(j.t.nn88hB, { startDate: S }),
                                      }),
                                  },
                                  e.id,
                              )
                            : (0, E.jsx)(hZ, { storeListing: e, guildId: m, navigateToHome: s }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function hZ(e) {
    let { storeListing: t, guildId: i, navigateToHome: n } = e,
        { openModal: l } = (0, hH.A)({
            analyticsLocation: U.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: i,
            disableGuildSelector: !0,
            onComplete: n,
        });
    return (0, E.jsx)(hX, {
        storeListing: t,
        cta: (0, E.jsx)(ek.$, { variant: "primary", size: "sm", text: j.intl.string(j.t["+KwmBt"]), onClick: l }),
    });
}
class hq extends S.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, E.jsxs)(ha.$T, {
                  color: ha.Hv.DANGER,
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
function hQ(e) {
    let { subscriptions: t, updateHeader: i } = e,
        [n, l] = S.useState({ route: hU.HOME }),
        { route: s } = n;
    function r() {
        l({ route: hU.HOME });
    }
    let a = (e) => {
            l({ route: hU.SWITCH_APP_PLANS, ...e }), i(j.intl.string(j.t.VFqtkP), r);
        },
        [o, u] = S.useState({});
    S.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: hy.LOADING })),
                (0, ho._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: hy.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: hy.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, hu.E)(),
        c = d !== hu.mJ.LOADED;
    switch (s) {
        case hU.HOME:
            return (0, E.jsx)(E.Fragment, {
                children: t.map((e) =>
                    (0, E.jsx)(
                        hq,
                        {
                            subscription: e,
                            children: (0, E.jsx)(hj, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? hy.LOADING : (o[e.id] ?? hy.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case hU.SWITCH_APP_PLANS:
            let { route: g, ...m } = n;
            return (0, E.jsx)(hW, { ...m, navigateToHome: r });
        default:
            (0, N.xb)(s);
    }
}
var hJ = i(131352);
function h$(e) {
    let { onGoBack: t } = e,
        i = (0, g.yK)(
            [dJ.A],
            () =>
                dJ.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [n, l] = S.useState();
    return (
        null == n && (n = (0, E.jsx)(h0, { onBack: t, title: j.intl.string(j.t["DB/m9a"]) })),
        (0, E.jsxs)("div", {
            children: [
                n,
                (0, E.jsx)("div", {
                    className: hJ.A,
                    children: (0, E.jsx)(hQ, {
                        subscriptions: i,
                        updateHeader: function (e, t) {
                            l(
                                (0, E.jsx)(h0, {
                                    title: e,
                                    onBack: () => {
                                        t(), l(void 0);
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
function h0(e) {
    let { onBack: t, title: i } = e;
    return (0, E.jsxs)("div", {
        className: hJ.D,
        children: [
            (0, E.jsx)(rX.K, {
                "aria-label": j.intl.string(j.t["13/7kX"]),
                icon: () => (0, E.jsx)(hr.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, E.jsx)(eV.D, { variant: "heading-lg/semibold", children: i }),
        ],
    });
}
var h1 = i(881489),
    h2 = i(366999),
    h3 = i(466919),
    h5 = i(406252);
function h6(e) {
    let t,
        i,
        {
            showChargingUpState: n,
            rowValueText: l,
            endsAt: s,
            fractionalState: r,
            activationDate: a,
            hasPremiumGroup: o,
        } = e;
    o
        ? ((t = j.intl.string(h3.default["/S02sx"])), (i = j.intl.string(h3.default.OPJNST)))
        : n
          ? ((t = j.intl.string(j.t["hT6i/0"])),
            (i = null != a ? j.intl.format(j.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = j.intl.string(j.t["3G0CTC"])),
            (i = r === l0.xc.FP_SUB_PAUSED ? j.intl.format(j.t.MMvaIG, { resumeDate: s.toDate() }) : null));
    let u = e7()({ [h5.Hs]: n, [h5.mT]: !n }),
        d = e7()({ [h5.CQ]: n, [h5.ZM]: !n }),
        c = e7()({ [h5.EM]: !n });
    return (0, E.jsxs)("div", {
        className: h5.r6,
        children: [
            (0, E.jsxs)("div", {
                className: h5.Nv,
                children: [
                    (0, E.jsx)(eV.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== i && (0, E.jsx)(el.E, { variant: "text-sm/normal", children: i }),
                ],
            }),
            !o &&
                (0, E.jsx)("div", {
                    className: h5.ZS,
                    children: (0, E.jsx)("div", {
                        className: u,
                        children: (0, E.jsx)(el.E, { variant: "text-sm/semibold", className: d, children: l }),
                    }),
                }),
        ],
    });
}
let h4 = function (e) {
    let { fractionalPremiumInfo: t, className: i, activationDate: n, hasPremiumGroup: l } = e,
        s = (0, uA.kX)(t),
        r = s.length > 0,
        a = (0, h2.Ay)(t.endsAt, h2.yE.SHORT_TIME),
        o = r ? s : a;
    return (0, E.jsx)("div", {
        children: (0, E.jsxs)("div", {
            className: e7()(i, h5.f8),
            children: [
                (0, E.jsx)("div", {
                    className: h5.J_,
                    children: (0, E.jsxs)("div", {
                        className: h5.Bh,
                        children: [
                            (0, E.jsx)("div", {
                                className: h5.xt,
                                children: (0, E.jsx)(us.t, { size: "md", color: "white", className: h5.T8 }),
                            }),
                            (0, E.jsx)("div", {
                                className: h5.pt,
                                children: (0, E.jsx)(eV.D, {
                                    variant: "heading-md/semibold",
                                    children: j.intl.string(j.t.DFMPWS),
                                }),
                            }),
                            (0, E.jsx)(el.E, {
                                className: h5.PJ,
                                variant: "text-md/semibold",
                                children: s.length > 0 ? s : j.intl.string(j.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, E.jsx)(h6, {
                    showChargingUpState: r,
                    rowValueText: o,
                    endsAt: t.endsAt,
                    fractionalState: t.fractionalState,
                    activationDate: n,
                    hasPremiumGroup: l,
                }),
            ],
        }),
    });
};
var h8 = i(983048);
function h7(e) {
    let t,
        {
            user: i,
            planId: n,
            count: l,
            userPremiumSubscription: s,
            unconsumedFractionalPremiumUnits: r = [],
            hasPremiumGroup: a,
        } = e,
        [o, u] = (0, g.yK)([ck.A], () => [ck.A.get(n), null != s ? ck.A.get(s.planId) : null]);
    if (null == o || uA.Ay.getInterval(n).intervalType !== l0.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        c = o.skuId === d,
        m = uA.Ay.getDisplayName(n);
    if (a) t = j.intl.string(h3.default["5asczk"]);
    else if (c && null != s) {
        let e;
        e = new Date(s.status === U.Dmq.PAUSED && null != s.pauseEndsAt ? s.pauseEndsAt : s.currentPeriodEnd);
        let i = (0, uA._e)(e, r);
        t = j.intl.formatToPlainString(j.t["5CNRRA"], { date: i ?? 0 });
    } else t = j.intl.formatToPlainString(j.t.eNXZ5O, { planName: m });
    let A = i.hasFreePremium() || (null != s && s.isPurchasedExternally);
    return (0, E.jsxs)("div", {
        className: h5.Bh,
        children: [
            (0, E.jsx)("div", {
                className: e7()({
                    [h5.sr]: o.skuId === l0.pe.TIER_0,
                    [h5.lP]: o.skuId === l0.pe.TIER_1,
                    [h5.eb]: o.skuId === l0.pe.TIER_2,
                }),
                children: (0, E.jsx)(us.t, { size: "md", color: "currentColor", className: h5.Kk }),
            }),
            (0, E.jsxs)("div", {
                className: h5.pt,
                children: [
                    (0, E.jsx)(eV.D, {
                        variant: "heading-md/semibold",
                        children: j.intl.format(j.t.LzobT9, { planName: m }),
                    }),
                    !A &&
                        (0, E.jsx)(eV.D, {
                            className: h5.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, E.jsx)(el.E, {
                className: h5.PJ,
                variant: "text-md/semibold",
                children: j.intl.format(j.t["ess/xl"], { count: l }),
            }),
        ],
    });
}
let h9 = function (e) {
    let { className: t, entitlements: i } = e,
        n = e$()(Array.from(i))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: i, consumed: n } = e;
                return null != t && null != i && !n;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        l = (0, g.yK)([cb.A], () => cb.A.getUnactivatedFractionalPremiumUnits()),
        s = (0, g.bG)([dJ.A], () => dJ.A.getPremiumSubscription()),
        r = (0, g.bG)([dJ.A], () => null == dJ.A.getPremiumTypeSubscription()),
        a = Object.keys(n).some((e) => e === l0.gD.PREMIUM_MONTH_TIER_1),
        o = (0, g.bG)([iA.default], () => iA.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsx)("div", {
                className: e7()(t, h5.xF, h5.J_),
                children: Object.keys(n).map((e) =>
                    (0, E.jsx)(
                        h7,
                        {
                            planId: e,
                            count: n[e].length,
                            userPremiumSubscription: s,
                            user: o,
                            unconsumedFractionalPremiumUnits: l,
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
                        (0, E.jsx)(el.E, {
                            className: h5.eT,
                            variant: "text-md/normal",
                            children: j.intl.string(j.t["VNr4+O"]),
                        }),
                        (0, E.jsx)(h8.i, {}),
                    ],
                }),
        ],
    });
};
var Ee = i(830991);
function Et(e) {
    let t,
        { subscription: i, withOverheadSeparator: n } = e,
        { analyticsLocations: l } = (0, n1.Ay)(),
        [s] = (0, AW.YV)({
            subscriptionId: i.id,
            renewal: !0,
            analyticsLocations: l,
            analyticsLocation: e6.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == s) return null;
    let r = n ? Ee.r : Ee.a,
        a = s.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, uA.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = ck.A.get(o);
    tZ()(null != u, "Missing plan");
    let d = (0, d_.$g)(s.total, s.currency);
    return (
        u.interval === l0.WT.YEAR
            ? (t = j.intl.format(j.t["jPz/39"], {
                  price: d,
                  termsUrl: U.X7G.TERMS,
                  paidURL: U.X7G.PAID_TERMS,
                  privacyUrl: U.X7G.PRIVACY,
              }))
            : u.interval === l0.WT.MONTH &&
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
        (0, E.jsx)(el.E, { color: "text-muted", className: r, variant: "text-xs/normal", children: t })
    );
}
function Ei(e) {
    let { subscription: t, withOverheadSeparator: i } = e;
    return t.status === U.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, E.jsx)(Et, { subscription: t, withOverheadSeparator: i });
}
var En = i(37397),
    El = i(533792);
let Es = { [nH.nR]: "role_subscriptions_panel", [nH.PZ]: "application_subscriptions_panel" };
function Er() {
    return (0, E.jsx)(eO.Z, {
        className: El.wb,
        type: eO.Z.Types.CUSTOM,
        children: (0, E.jsxs)(r$.A, {
            align: r$.A.Align.CENTER,
            children: [
                (0, E.jsx)(p.A, { game: null, size: p.M.SMALL, className: El.pV }),
                (0, E.jsx)("span", { className: El.O, children: j.intl.string(j.t["jy/hyj"]) }),
            ],
        }),
    });
}
function Ea(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, AA._)(e, t));
}
function Eo() {
    let e = (0, g.bG)([cb.A], () => cb.A.getForApplication(l0.tv), [], Ea);
    return (
        S.useEffect(() => {
            (0, c3.LM)(l0.tv);
        }, []),
        (0, E.jsx)(ij.n, {
            label: j.intl.string(j.t["2GKrvn"]),
            description: j.intl.string(j.t.kNEjGm),
            children:
                null != e && uA.Ay.hasAccountCredit(e)
                    ? (0, E.jsx)(h9, { className: El.fX, entitlements: e })
                    : (0, E.jsx)(Er, {}),
        })
    );
}
function Eu() {
    return (0, E.jsx)("hr", { className: El.hr });
}
let Ed = function () {
        var e;
        let t = (0, g.bG)([dJ.A], () => dJ.A.getPremiumTypeSubscription()),
            i = (0, Ah.A)({ subscriptionFilter: (e) => En.Hy.has(e.status) }),
            n = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()),
            l = i.length > 1,
            s = (0, g.bG)(
                [dQ.A],
                () => (null != t && null != t.paymentSourceId ? dQ.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, g.bG)([dJ.A], () => dJ.A.hasFetchedSubscriptions()),
            a = (0, g.bG)([dN.A], () => dN.A.isBusy),
            o = (0, gN.Y)(),
            d = Aq.A.useField("subsection"),
            c = Aq.A.useField("scrollToGameServers"),
            m = S.useRef(null);
        S.useEffect(() => {
            (0, s4._)(null != d ? Es[d] : u.X.SUBSCRIPTIONS_PANEL);
        }, [d]);
        let A = (0, g.bG)([dJ.A], () => dJ.A.getActiveApplicationSubscriptions()?.length ?? 0),
            h = (0, g.bG)(
                [dJ.A],
                () =>
                    Object.values(dJ.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === U.rzx.GUILD)
                        .filter((e) => e.status !== U.Dmq.ENDED).length,
            ),
            T = (0, g.bG)([dJ.A], () =>
                Object.values(dJ.A.getSubscriptions() ?? {}).some((e) => e.type === U.rzx.GAME_SERVER),
            ),
            { servers: x } = (0, AD.f)({ enabled: T }),
            p = (0, gC.A)({ forceFetch: !0 }),
            f = (0, h1.ds)(),
            N = null !== t ? t.currentPeriodEnd : void 0,
            _ =
                !(f && !(p.unactivatedUnits.length > 0)) &&
                (p.fractionalState !== l0.xc.NONE || p.unactivatedUnits.length > 0);
        return (S.useEffect(() => {
            c &&
                r &&
                o &&
                x.length > 0 &&
                (m.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
                Aq.A.setState({ scrollToGameServers: !1 }));
        }, [c, r, o, x.length]),
        S.useEffect(
            () => (
                lm.h.wait(() => {
                    (0, gf.zS)(), dx.hP(), (0, gp.CD)(), dx.$o();
                }),
                function () {
                    Aq.A.resetState();
                }
            ),
            [],
        ),
        eX.A.enabled)
            ? (0, E.jsx)(dc.A, {})
            : r && o
              ? d === nH.nR
                  ? (0, E.jsx)(hi, { onGoBack: () => Aq.A.setState({ subsection: null }) })
                  : d === nH.PZ
                    ? (0, E.jsx)(h$, { onGoBack: () => Aq.A.setState({ subsection: null }) })
                    : (0, E.jsx)("div", {
                          className: El.kL,
                          children: (0, E.jsxs)("div", {
                              className: El.Qs,
                              children: [
                                  l ? (0, E.jsx)(En.Sb, {}) : null,
                                  null != t
                                      ? (0, E.jsx)(En.Ay, {
                                            subscription: t,
                                            paymentSource: s,
                                            busy: a,
                                            subscriptions: i,
                                        })
                                      : (0, E.jsx)(En.TC, {}),
                                  _ &&
                                      ((e = !!n?.isPremiumWithPremiumGroup()),
                                      (0, E.jsxs)("section", {
                                          children: [
                                              (0, E.jsx)(eV.D, {
                                                  variant: "heading-md/bold",
                                                  className: El.HL,
                                                  children: j.intl.string(j.t.Obre8v),
                                              }),
                                              (0, E.jsx)(el.E, {
                                                  variant: "text-md/normal",
                                                  className: El.JU,
                                                  children: j.intl.format(j.t["7Zi06b"], {
                                                      helpCenterLink: ty.A.getArticleURL(
                                                          U.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, E.jsx)(h4, {
                                                  className: El.fX,
                                                  fractionalPremiumInfo: p,
                                                  activationDate: N,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, E.jsx)(Eo, {}),
                                  h > 0 &&
                                      (0, E.jsxs)(E.Fragment, {
                                          children: [
                                              (0, E.jsx)(Eu, {}),
                                              (0, E.jsx)(AM, {
                                                  count: h,
                                                  onClickManageSubscription: () => Aq.A.setState({ subsection: nH.nR }),
                                              }),
                                          ],
                                      }),
                                  A > 0 &&
                                      (0, E.jsxs)(E.Fragment, {
                                          children: [
                                              (0, E.jsx)(Eu, {}),
                                              (0, E.jsx)(hs, {
                                                  count: A,
                                                  onClickManageSubscription: () => {
                                                      Aq.A.setState({ subsection: nH.PZ }),
                                                          G.default.track(
                                                              U.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                          );
                                                  },
                                              }),
                                          ],
                                      }),
                                  x.length > 0 &&
                                      (0, E.jsxs)("div", {
                                          ref: m,
                                          children: [(0, E.jsx)(Eu, {}), (0, E.jsx)(AL, { servers: x })],
                                      }),
                                  (0, E.jsx)(Eu, {}),
                                  null != t ? (0, E.jsx)(Ei, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, E.jsx)("div", { className: e7()(El.kL, El.Lq), children: (0, E.jsx)(dm.y, {}) });
    },
    Ec = (0, a.E2)(u.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [j.intl.string(j.t.trSpHX), j.intl.string(j.t["2GKrvn"])],
        Component: () => (0, E.jsx)(Ed, {}),
    }),
    Eg = (0, a.zZ)(u.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [j.intl.string(j.t.trSpHX), j.intl.string(j.t["2GKrvn"])],
        buildLayout: () => [Ec],
    }),
    Em = (0, a.t_)(u.X.SUBSCRIPTIONS_PANEL, { useTitle: () => j.intl.string(j.t.trSpHX), buildLayout: () => [Eg] }),
    EA = (0, a.i4)(u.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.trSpHX),
        icon: Ag.L,
        usePersistentBadge: function () {
            let e = (0, Am.l)();
            return S.useMemo(
                () => ({
                    badgeType: h.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    customBadge: e ? (0, E.jsx)(rV.E, { size: "xs", color: er.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [e],
            );
        },
        buildLayout: () => [Em],
    }),
    Eh = (0, a.WI)(u.X.BILLING_SECTION, {
        useTitle: () => j.intl.string(j.t.oeUm2s),
        buildLayout: () => [gT, Ac, EA, gc, d9],
    });
var EE = i(540999),
    ES = i(306471),
    ET = i(964355),
    Ex = i(172272);
let Ep = (0, a.zD)(u.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, g.bG)([oT.default], () => oT.default.isAxeEnabled),
        setValue: (e) => (0, oS.x)({ axeEnabled: e }),
    }),
    Ef = (0, a.zD)(u.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, g.bG)([oT.default], () => oT.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, oS.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var EN = i(276086),
    E_ = i(354328);
let EI = (0, a.zD)(u.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, E_.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, EN.L)("highlight_mana_components", e);
        },
    }),
    EC = (0, a.zD)(u.X.HIGHLIGHT_MANA_TEXT_OVERRIDES, {
        useTitle: () => "Audit overridden Mana Text (dashed red)",
        useSubtitle: () =>
            "Outlines Mana Text/Heading whose font is overridden by CSS with a dashed red border \u2014 it renders through the component but won\u2019t change between control and variant. Higher cost (measures computed styles), so keep it on only while auditing.",
        useValue: () => (0, E_.A)("highlight_mana_text_overrides"),
        setValue: (e) => {
            (0, EN.L)("highlight_mana_text_overrides", e);
        },
    }),
    Eb = (0, a.zD)(u.X.HIGHLIGHT_MANA_TEXT, {
        useTitle: () => "Mana Text Migration Highlighter",
        useSubtitle: () =>
            "Outlines Mana Text/Heading components in green, text composing a variant (experiment-reachable but not migrated) in yellow, and all other rendered text in red.",
        useValue: () => (0, E_.A)("highlight_mana_text"),
        setValue: (e) => {
            (0, EN.L)("highlight_mana_text", e);
        },
    }),
    Ev = (0, a.zD)(u.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, E_.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, EN.L)("highlight_void_toggleables", e);
        },
    }),
    Ey = (0, a.sN)(u.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, g.bG)([oT.default], () => oT.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: Ex.YR,
        markers: Array.from({ length: Ex.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => Ex.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            Ex.Or.getState().setHorizontalSpacing(e);
        },
    }),
    Ej = (0, a.zD)(u.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, g.bG)([oT.default], () => oT.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, oS.x)({ layoutDebuggingEnabled: e });
        },
    }),
    EO = (0, a.sN)(u.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, g.bG)([oT.default], () => oT.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: Ex.YR,
        markers: Array.from({ length: Ex.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => Ex.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            Ex.Or.getState().setVerticalSpacing(e);
        },
    }),
    ER = (0, a.zZ)(u.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [Ef, Ej, Ey, EO, EI, Eb, EC, Ev, Ep],
    }),
    EL = (0, a.zD)(u.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => L.HZ.useSetting(),
        setValue: (e) => {
            L.HZ.updateSetting(e);
        },
    });
var ED = i(173936),
    EP = i(260598),
    EG = i(148810),
    EM = i(380610),
    EU = i(986238),
    EV = i(281161),
    Ek = i(663894);
let Ew = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    EF = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function EB(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class Ez extends S.Component {
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
        let { project: e, overrideType: t, overrideId: i, disabled: n, error: l } = this.props;
        return (0, E.jsxs)(r$.A, {
            direction: r$.A.Direction.VERTICAL,
            className: e7()(EV.oS, iz.SX, Ek.N, EV.nM),
            children: [
                (0, E.jsx)(iM.A, {
                    className: e7()(EV.lL, { [EV.zi]: n }),
                    onClick: n ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, E.jsxs)(r$.A, {
                    className: iz.QB,
                    children: [
                        (0, E.jsx)(r$.A.Child, {
                            basis: "50%",
                            children: (0, E.jsx)(rY.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: EF,
                                onSelectionChange: this.handleOverrideTypeChanged,
                                value: t,
                                disabled: n,
                            }),
                        }),
                        (0, E.jsx)(r$.A.Child, {
                            wrap: !0,
                            basis: "50%",
                            children: (0, E.jsx)(rZ.k, {
                                label: "branch" === t ? "Branch Name" : "Commit SHA",
                                value: i,
                                onChange: this.handleOverrideIdChanged,
                                disabled: n,
                            }),
                        }),
                    ],
                }),
                (0, E.jsxs)(r$.A.Child, {
                    children: [
                        null != l &&
                            "" !== l &&
                            (0, E.jsx)(el.E, {
                                className: EV.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: l,
                            }),
                        (0, E.jsxs)(el.E, {
                            variant: "text-sm/normal",
                            className: EV.AS,
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
class EY extends S.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, EM.bD)();
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
        return e$().without(Ew, ...t);
    }
    handleAddBuildOverride = (e) => {
        if (null == e) return;
        let t = { ...this.state.buildOverrides, [e]: { type: "branch", id: "" } };
        this.setState({ buildOverrides: t });
    };
    handleBuildOverrideUpdated = (e, t) => {
        let { buildOverrides: i } = this.state,
            n = { ...(null != i ? i[e] : {}), ...t },
            l = { ...this.state.buildOverrides, [e]: n };
        this.setState({ buildOverrides: l });
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
        let t = await (0, EG.Zk)(e);
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
        (0, K.openModal)((t) => (0, E.jsx)(EX, { ...t, buildOverrides: e }));
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
                      Ez,
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
                  children: (0, E.jsx)(rX.K, {
                      variant: "secondary",
                      icon: ED.q,
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
                    disabled: EB(t ?? {}),
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
            ? (0, E.jsx)(dm.y, { className: iz.QX })
            : null != n && 0 === Object.keys(n).length
              ? this.renderEmpty()
              : this.renderItems();
        let l = !i && !t && this.getAvailableProjects().length > 0,
            s =
                EB(n ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, E.jsx)(el.E, {
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
                    (0, E.jsx)(rY.l, {
                        selectionMode: "single",
                        label: "Add Build Override",
                        placeholder: "discord_project",
                        description: "Select a project to create a build override for.",
                        layout: "horizontal-responsive",
                        value: void 0,
                        options: this.getAvailableProjects().map((e) => ({ id: e, label: e, value: e })),
                        onSelectionChange: this.handleAddBuildOverride,
                        disabled: !l,
                    }),
                    s,
                    e,
                    (0, E.jsxs)(oi.e, {
                        justify: "end",
                        children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                    }),
                ],
            }),
        });
    }
}
class EX extends S.Component {
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
            t = await (0, EG.SB)(e);
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
        return EB(this.props.buildOverrides ?? {});
    }
    renderSettingsForm() {
        let {
                ttlSeconds: e,
                releaseChannel: t,
                userIdEntry: i,
                userIdEntryError: n,
                allowedVersions: l,
                allowedVersionEntry: s,
                allowedVersionEntryError: r,
                allowLoggedOut: a,
                experiments: o,
                experimentsError: u,
            } = this.state,
            d = EU.fL.find((t) => t.value === e),
            c = l.map((e) => ({ id: e, label: e, value: e }));
        return (0, E.jsxs)(Q.B, {
            gap: 20,
            children: [
                (0, E.jsx)(rY.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: EU.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, E.jsx)(rY.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: EU.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, E.jsxs)(Q.B, {
                          gap: 20,
                          children: [
                              (0, E.jsx)(rZ.k, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: s,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: r,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: { icon: rM.j, onClick: this.handleAddAllowedVersion, "aria-label": "Add" },
                              }),
                              (0, E.jsx)(rY.l, {
                                  selectionMode: "single",
                                  label: "Remove allowed app version",
                                  value: void 0,
                                  options: c,
                                  onSelectionChange: this.handleRemoveAllowedVersion,
                                  disabled: 0 === l.length,
                              }),
                          ],
                      })
                    : null,
                this.isMobile()
                    ? null
                    : (0, E.jsx)(EP.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: i,
                          error: n,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                (0, E.jsx)(EP.f, {
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
        return (0, E.jsx)(rW.Modal, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, E.jsx)(cJ.A, { value: i }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let EH = (0, a.E2)(u.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: EY });
var EK = i(256311),
    EW = i(883600);
let EZ = (0, a.E2)(u.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, g.bG)([EW.A], () => EW.A.overrideId());
        async function t(e) {
            let t = EW.A.getChangelog(e, "en-US");
            return null != t ? t : ((await EK.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
        }
        return (0, E.jsx)(Se, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => EK.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var Eq = i(506774);
let EQ = new Date("2018-01-01"),
    EJ = (0, a.Tf)(u.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => L.pK.useSetting() === dC.default.fromTimestamp(EQ.getTime()),
        onClick: () => (Eq.w.set("lastChangeLogDate", EQ), L.pK.updateSetting(dC.default.fromTimestamp(EQ.getTime()))),
    }),
    E$ = (0, a.zD)(u.X.DISABLE_APP_COLLECTIONS_CACHE, {
        useTitle: () => "Disable Application Collections Cache",
        useSubtitle: () => "Forces application collection updates to be shown immediately.",
        useDisabled: () => (0, g.bG)([oT.default], () => oT.default.onlyShowPreviewAppCollections),
        useValue: () =>
            (0, g.bG)(
                [oT.default],
                () => oT.default.disableAppCollectionsCache || oT.default.onlyShowPreviewAppCollections,
            ),
        setValue: (e) => (0, oS.x)({ disableAppCollectionsCache: e }),
    }),
    E0 = (0, a.zD)(u.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, g.bG)([oT.default], () => oT.default.isForcedCanary),
        setValue: (e) => {
            (0, oS.x)({ canary: e });
        },
    }),
    E1 = (0, a.zD)(u.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, g.bG)([oT.default], () => oT.default.sourceMapsEnabled),
        setValue: (e) => (0, oS.x)({ sourceMapsEnabled: e }),
    }),
    E2 = (0, a.zD)(u.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, g.bG)([oT.default], () => oT.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, oS.x)({ onlyShowPreviewAppCollections: e }),
    });
var E3 = i(10094),
    E5 = i(683760);
let E6 = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: l0.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: l0.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: l0.PremiumTypes.TIER_2 },
    ],
    E4 = (0, a.Hn)(u.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => E6,
        clearable: !0,
        useValue: () =>
            (0, g.bG)([E5.A], () => {
                let e = E5.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, E3.O)(null, void 0)
                : null === e
                  ? (0, E3.O)(void 0, void 0)
                  : (0, E3.O)(0 === e ? null : e, void 0);
        },
    });
var E8 = i(246605),
    E7 = i(274184);
let E9 = (0, a.E2)(u.X.SURVEY_OVERRIDE, {
    useSearchTerms: () => ["survey override"],
    Component: function () {
        let e = (0, g.bG)([E7.Ay], () => E7.Ay.getSurveyOverride());
        return (0, E.jsx)(Se, {
            label: "Survey Override",
            description: "Provide a survey ID to override the survey shown to this user.",
            placeholder: "Enter Survey ID...",
            overrideId: e ?? null,
            setOverride: (e) => E8.xr(e),
            fetchOverride: (e) => E8.BC(e, !0) ?? null,
        });
    },
});
function Se(e) {
    let { label: t, description: i, placeholder: n, overrideId: l, setOverride: s, fetchOverride: r } = e,
        [a, o] = S.useState(l ?? ""),
        u = S.useRef(null),
        [d, c] = S.useState(0);
    function g() {
        null != u.current && (clearTimeout(u.current), (u.current = null));
    }
    return (
        S.useEffect(() => g, []),
        (0, E.jsx)(l8.D, {
            layout: "horizontal-responsive",
            label: t,
            description: i,
            children: (0, E.jsx)(rZ.k, {
                placeholder: n,
                error: 2 === d ? "Failed to fetch override" : void 0,
                successMessage: 3 === d ? "Override applied" : void 0,
                value: a,
                onChange: function (e) {
                    if (!(e.length > 0) || /^[0-9]+$/.test(e)) {
                        if ((o(e), g(), 0 === e.length)) {
                            c(0), s(null);
                            return;
                        }
                        u.current = setTimeout(() => {
                            c(1),
                                r(e).then((t) => {
                                    c(null == t ? 2 : 3), null != t && s(e);
                                });
                        }, 500);
                    }
                },
                clearable: !0,
            }),
        })
    );
}
let St = (0, a.zZ)(u.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [E4, E9, EZ, EJ, E0, EL, E2, E$, E1, EH],
        useInlineNotice: () => ({
            type: h.lT.INLINE_NOTICE,
            noticeType: "info",
            text: j.intl.format(j.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    Si = (0, a.zD)(u.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, g.bG)([oT.default], () => oT.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, oS.x)({ logAnalyticsEvents: e }),
    }),
    Sn = (0, a.zD)(u.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, g.bG)([oT.default], () => oT.default.isLoggingGatewayEvents),
        setValue: (e) => (0, oS.x)({ logGatewayEvents: e }),
    }),
    Sl = (0, a.zD)(u.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, g.bG)([oT.default], () => oT.default.preventPopoutClose),
        setValue: (e) => (0, oS.x)({ preventPopoutClose: e }),
    }),
    Ss = (0, a.zD)(u.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, g.bG)([oT.default], () => oT.default.logKeyboardMismatches),
        setValue: (e) => (0, oS.x)({ logKeyboardMismatches: e }),
    }),
    Sr = (0, a.zD)(u.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, g.bG)([oT.default], () => oT.default.isLoggingOverlayEvents),
        setValue: (e) => (0, oS.x)({ logOverlayEvents: e }),
    }),
    Sa = (0, a.zD)(u.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, g.bG)([oT.default], () => oT.default.isLoggingQuestEvents),
        setValue: (e) => (0, oS.x)({ logQuestEvents: e }),
    }),
    So = (0, a.zD)(u.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, g.bG)([oT.default], () => oT.default.isTracingRequests),
        setValue: (e) => (0, oS.x)({ trace: e }),
    }),
    Su = (0, a.zZ)(u.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [Sn, Sr, So, Si, Ss, Sl, Sa] }),
    Sd = (0, a.t_)(u.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [St, Su, ER],
    }),
    Sc = (0, a.i4)(u.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: ES.V,
        useMenu: function () {
            let {
                    layoutDebuggingEnabled: e,
                    isDeveloper: t,
                    isLoggingGatewayEvents: i,
                    isLoggingOverlayEvents: n,
                    isLoggingAnalyticsEvents: l,
                    isTracingRequests: s,
                    isForcedCanary: r,
                    isAxeEnabled: a,
                    preventPopoutClose: o,
                    onlyShowPreviewAppCollections: d,
                    disableAppCollectionsCache: c,
                    isStaff: m,
                } = (0, g.cf)([oT.default, EE.A, iA.default], () => ({
                    layoutDebuggingEnabled: oT.default.layoutDebuggingEnabled,
                    isDeveloper: EE.A.isDeveloper,
                    isLoggingGatewayEvents: oT.default.isLoggingGatewayEvents,
                    isLoggingOverlayEvents: oT.default.isLoggingOverlayEvents,
                    isLoggingAnalyticsEvents: oT.default.isLoggingAnalyticsEvents,
                    isTracingRequests: oT.default.isTracingRequests,
                    isForcedCanary: oT.default.isForcedCanary,
                    isSourceMapsEnabled: oT.default.sourceMapsEnabled,
                    isAxeEnabled: oT.default.isAxeEnabled,
                    preventPopoutClose: oT.default.preventPopoutClose,
                    onlyShowPreviewAppCollections: oT.default.onlyShowPreviewAppCollections,
                    disableAppCollectionsCache: oT.default.disableAppCollectionsCache,
                    isStaff: iA.default.getCurrentUser()?.isStaff() ?? !1,
                })),
                { horizontalSpacing: A, verticalSpacing: h } = (0, Ex.Or)(),
                { setHorizontalSpacing: S, setVerticalSpacing: T } = Ex.Or.getState(),
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
                                              (0, oS.x)({ canary: !r });
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
                                              (0, oS.x)({ onlyShowPreviewAppCollections: !d });
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
                                              (0, oS.x)({ disableAppCollectionsCache: !c });
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
                                              (0, oS.x)({ logGatewayEvents: !i });
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
                                              (0, oS.x)({ logOverlayEvents: !n });
                                          },
                                      },
                                      "overlay-events",
                                  ),
                                  (0, E.jsx)(
                                      ei.sL,
                                      {
                                          id: "analytics-events",
                                          label: "Analytics Events",
                                          checked: l,
                                          action: () => {
                                              (0, oS.x)({ logAnalyticsEvents: !l });
                                          },
                                      },
                                      "analytics-events",
                                  ),
                                  (0, E.jsx)(
                                      ei.sL,
                                      {
                                          id: "tracing-requests",
                                          label: "Tracing Requests",
                                          checked: s,
                                          action: () => {
                                              (0, oS.x)({ trace: !s });
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
                                              (0, oS.x)({ preventPopoutClose: !o });
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
                                              (0, oS.x)({ axeEnabled: !a });
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
                                              (0, oS.x)({ layoutDebuggingEnabled: !e });
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
                                                          (0, E.jsx)(ET.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: A,
                                                              minValue: 0,
                                                              maxValue: Ex.YR,
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
                                                          (0, E.jsx)(ET.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: h,
                                                              minValue: 0,
                                                              maxValue: Ex.YR,
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
                                { id: "discord-stats", label: "Discord Stats", action: () => aR() },
                                "discord-stats",
                            )
                          : null,
                  ]
                : null;
        },
        buildLayout: () => [Sd],
    });
var Sg = i(127062),
    Sm = i(25044),
    SA = i(80703),
    Sh = i(691540),
    SE = i(857250),
    SS = i(97483),
    ST = i(100392),
    Sx = i(102609),
    Sp = i(271478),
    Sf = i(736056),
    SN = i(710195),
    S_ = i(386976),
    SI = i(257433),
    SC = i(32523),
    Sb = i(96919),
    Sv = i(688151),
    Sy = i(142862);
function Sj(e) {
    let { experiment: t, experimentId: i, overrideInfo: n, defaultOpen: l } = e,
        [s, r] = S.useState(l),
        [a, o] = S.useState(!1),
        u = S.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, g.bG)([cU.default], () => cU.default.getId()),
        c = (0, g.bG)([cU.default], () => {
            let e = cU.default.getInstallationForTracking();
            return null == e ? null : (0, SA.v)(e);
        }),
        m = "installation" === t.kind && null != c ? c : d,
        A = (0, SI.iN)(t, m),
        h = (0, SI.Fm)(t, m),
        T = (0, g.yK)([Sf.A], () =>
            e$()
                .sortBy(Sf.A.getRecentExposures(Sv.Vh.USER, i), (e) => {
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
                (0, cB.C)((0, ST.yA)(i), () => {
                    (0, Sh.P0)({
                        id: "experiment-link-copied",
                        message: "Copied experiment link",
                        type: SS.Ck.SUCCESS,
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
            children: (0, E.jsxs)(el.E, {
                variant: "text-md/medium",
                className: Sy.DD,
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
                                    cB.p5 &&
                                        (0, E.jsx)(en.D, { onClick: x, children: (0, E.jsx)(ED.q, { size: "xs" }) }),
                                ],
                            }),
                            (0, E.jsx)(el.E, { color: "text-muted", variant: "text-sm/normal", children: i }),
                        ],
                    }),
                    (0, E.jsx)("span", {
                        className: Sy.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!s) return (0, E.jsx)("div", { className: Sy.Os, children: p });
    let f = "";
    return (
        (f =
            t.system === Sx.l5.LEGACY
                ? `Currently assigned to bucket ${A ?? Sv.RE.NOT_ELIGIBLE}`
                : null != A
                  ? `Currently assigned to variant ${A}`
                  : "Currently unassigned"),
        (0, E.jsxs)("div", {
            className: Sy.Os,
            children: [
                p,
                (0, E.jsx)("div", {
                    children: (0, E.jsx)(Sp.g, {
                        label: t.system === Sx.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: f,
                        experiment: t,
                        experimentId: i,
                        overrideInfo: n,
                    }),
                }),
                (0, E.jsx)("div", {
                    className: Sy.h_,
                    children:
                        null == h
                            ? (0, E.jsx)(el.E, {
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
                              (0, E.jsx)(el.E, {
                                  variant: "text-lg/medium",
                                  className: Sy.id,
                                  children: "Server Descriptor",
                              }),
                              (0, E.jsx)(el.E, {
                                  variant: "code",
                                  className: Sy.AS,
                                  children: null == h ? "None" : JSON.stringify(h, void 0, 2),
                              }),
                              (0, E.jsx)(el.E, {
                                  variant: "text-lg/medium",
                                  className: Sy.id,
                                  children: "Override Descriptor",
                              }),
                              (0, E.jsx)(el.E, {
                                  variant: "code",
                                  className: Sy.AS,
                                  children:
                                      n?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(n.originalDescriptor, void 0, 2),
                              }),
                              (0, E.jsx)(el.E, {
                                  variant: "text-lg/medium",
                                  className: Sy.id,
                                  children: "Recent Exposures",
                              }),
                              (0, E.jsx)(el.E, {
                                  variant: "code",
                                  className: Sy.AS,
                                  children: 0 === T.length ? "None" : T.join("\n"),
                              }),
                          ],
                      })
                    : (0, E.jsx)("div", {
                          className: Sy.id,
                          children: (0, E.jsx)(ea.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, E.jsx)(ew.c, { className: Sy.yF }),
            ],
        })
    );
}
function SO(e) {
    let { experiment: t, experimentId: i, overrideInfo: n } = e,
        [l, s] = S.useState(null != n),
        [r, a] = S.useState(!1),
        o = S.useCallback(() => {
            s((e) => !e);
        }, []),
        u = (0, g.bG)([Sf.A], () => Sf.A.getLoadedGuildExperiment(i)),
        d = (0, g.bG)([Sf.A, eh.A, SN.A], () => {
            if (t.system === Sx.l5.LEGACY) return null == Sf.A.getLoadedGuildExperiment(i);
            let e = t.name;
            return !eh.A.getGuildsArray().some((t) => null != SN.A.getServerAssignment("guild", t.id, e));
        }),
        c = (0, g.yK)([Sf.A], () =>
            e$()
                .sortBy(Sf.A.getRecentExposures(Sv.Vh.GUILD, i), (e) => {
                    let [t, i] = e;
                    return -i;
                })
                .map((e) => {
                    let [t, i] = e;
                    return `${new Date(i).toLocaleString()} (${t})`;
                }),
        ),
        [m, A] = (0, g.yK)([cU.default, eh.A, Sf.A, SN.A], () => {
            let e = t.system === Sx.l5.LEGACY,
                n = t.name,
                l = cU.default.getId(),
                s = e$().sortBy(eh.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                r = {},
                a = [];
            for (let t of s) {
                let s = e
                    ? (Sf.A.getGuildExperimentDescriptor(i, t.id)?.bucket ?? Sv.RE.NOT_ELIGIBLE)
                    : (SN.A.getEvaluationAndAssignment("guild", t.id, n, l)[1]?.variantId ?? Sv.RE.NOT_ELIGIBLE);
                s in r || (r[s] = 0), r[s]++, a.push(`${t.name}: ${s}`);
            }
            let o = e$()(r)
                .keys()
                .map(Number)
                .sort()
                .map((e) => `${r[e]} guilds in bucket ${e}`)
                .join(", ");
            return [a.join("\n"), o];
        }),
        h = t.system !== Sx.l5.LEGACY,
        T = (0, g.yK)([eh.A], () => e$().sortBy(eh.A.getGuildsArray(), (e) => e.name.toLowerCase())),
        [x, p] = S.useState(() => l9.A.getGuildId() ?? l9.A.getLastSelectedGuildId()),
        f = T.find((e) => e.id === x)?.name,
        N = (0, g.bG)([SN.A], () => {
            if (h && null != x) return SN.A.getServerAssignment("guild", x, t.name);
        }, [h, x, t.name]),
        _ = (0, g.bG)([SN.A, cU.default], () => {
            if (!h) return;
            let e = cU.default.getId();
            return SN.A.getEvaluationAndAssignment("user", e, t.name)[1];
        }),
        I = null != _ && (_.isOverride || _.useAsEligibility),
        C = (0, E.jsx)(en.D, {
            onClick: o,
            children: (0, E.jsxs)(el.E, {
                variant: "text-md/medium",
                className: Sy.DD,
                children: [
                    (0, E.jsxs)("div", {
                        children: [
                            (0, E.jsx)("span", { children: t.title }),
                            (0, E.jsx)(el.E, { color: "text-muted", variant: "text-sm/normal", children: i }),
                        ],
                    }),
                    (0, E.jsx)("span", { className: Sy.km, children: "Guild" }),
                ],
            }),
        });
    return l
        ? (0, E.jsxs)("div", {
              className: Sy.Os,
              children: [
                  C,
                  (0, E.jsx)(Sp.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${A}`,
                      experiment: t,
                      experimentId: i,
                      overrideInfo: n,
                  }),
                  h &&
                      T.length > 0 &&
                      (0, E.jsx)("div", {
                          className: Sy.h_,
                          children: (0, E.jsx)(rY.l, {
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
                      className: Sy.h_,
                      children: d
                          ? (0, E.jsx)(el.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    t.system === Sx.l5.LEGACY
                                        ? 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
                                        : "Warning: Server did not send an assignment for this experiment. Make sure the experiment is configured to run on the APP surface in the admin UI.",
                            })
                          : null,
                  }),
                  h &&
                      (0, E.jsxs)("div", {
                          children: [
                              (0, E.jsxs)(el.E, {
                                  variant: "text-lg/medium",
                                  className: Sy.id,
                                  children: ["Server Descriptor", null != f ? ` (${f})` : ""],
                              }),
                              (0, E.jsx)(el.E, {
                                  variant: "code",
                                  className: Sy.AS,
                                  children: null == N ? "None" : JSON.stringify(N, void 0, 2),
                              }),
                              (0, E.jsx)(el.E, {
                                  variant: "text-lg/medium",
                                  className: Sy.id,
                                  children: "Client Eligibility",
                              }),
                              (0, E.jsx)(el.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: I ? "Eligible: Yes" : "Eligible: No",
                              }),
                              (0, E.jsx)(el.E, {
                                  variant: "code",
                                  className: Sy.AS,
                                  children: null == _ ? "None" : JSON.stringify(_, void 0, 2),
                              }),
                          ],
                      }),
                  r
                      ? (0, E.jsxs)("div", {
                            children: [
                                (0, E.jsx)(el.E, {
                                    variant: "text-lg/medium",
                                    className: Sy.id,
                                    children: "Guild Assignments",
                                }),
                                (0, E.jsx)(el.E, { variant: "code", className: Sy.AS, children: m }),
                                t.system === Sx.l5.LEGACY &&
                                    (0, E.jsxs)(E.Fragment, {
                                        children: [
                                            (0, E.jsx)(el.E, {
                                                variant: "text-lg/medium",
                                                className: Sy.id,
                                                children: "Server Descriptor",
                                            }),
                                            (0, E.jsx)(el.E, {
                                                variant: "code",
                                                className: Sy.AS,
                                                children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                            }),
                                        ],
                                    }),
                                (0, E.jsx)(el.E, {
                                    variant: "text-lg/medium",
                                    className: Sy.id,
                                    children: "Override Descriptor",
                                }),
                                (0, E.jsx)(el.E, {
                                    variant: "code",
                                    className: Sy.AS,
                                    children:
                                        n?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(n.originalDescriptor, void 0, 2),
                                }),
                                (0, E.jsx)(el.E, {
                                    variant: "text-lg/medium",
                                    className: Sy.id,
                                    children: "Recent Exposures",
                                }),
                                (0, E.jsx)(el.E, {
                                    variant: "code",
                                    className: Sy.AS,
                                    children: 0 === c.length ? "None" : c.join("\n"),
                                }),
                            ],
                        })
                      : (0, E.jsx)("div", {
                            className: Sy.id,
                            children: (0, E.jsx)(ea.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, E.jsx)(ew.c, { className: Sy.yF }),
              ],
          })
        : (0, E.jsx)("div", { className: Sy.Os, children: C });
}
let SR = (0, a.E2)(u.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, S_.op)(),
                { experiments: i, overridesInfo: n } = (0, SC.hI)(),
                l = S.useMemo(() => ({ ...i, ...e }), [i, e]),
                s = S.useMemo(() => ({ ...n, ...t }), [n, t]),
                r = (0, g.bG)([cU.default], () => {
                    let e = cU.default.getInstallationForTracking();
                    return null == e ? null : (0, SA.v)(e);
                }),
                [a, o] = S.useState(""),
                u = (0, Sb.oC)((0, Sb.R3)((0, Sb.Fm)(l), s), a);
            return (0, E.jsxs)("div", {
                "data-mtctest-ignore": "true",
                children: [
                    null != r &&
                        (0, E.jsxs)(Q.B, {
                            style: { gap: 8, marginBottom: 16 },
                            children: [
                                (0, E.jsxs)(el.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: ["Installation ID: ", r],
                                }),
                                cB.p5 &&
                                    (0, E.jsx)(ea.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, cB.C)(r, () => {
                                                (0, Sh.P0)((0, SE.o)("Installation ID copied!", SS.Ck.SUCCESS));
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, E.jsx)($.I, { placeholder: "Search experiments", query: a, onChange: o, onClear: () => o("") }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? SO : Sj;
                              return (0, E.jsx)(
                                  t,
                                  {
                                      experiment: e.experiment,
                                      experimentId: e.id,
                                      overrideInfo: s[e.id],
                                      defaultOpen: null != s[e.id],
                                  },
                                  e.id,
                              );
                          })
                        : (0, E.jsx)("div", {
                              className: Sy.p$,
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
    SL = (0, a.zZ)(u.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [SR] }),
    SD = (0, a.t_)(u.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [SL] }),
    SP = (0, a.i4)(u.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: Sg.c,
        useMenu: Sm.A,
        buildLayout: () => [SD],
    }),
    SG = (0, a.WI)(u.X.DEVELOPER_SECTION, {
        useTitle: () => j.intl.string(j.t["+gHUHA"]),
        usePredicate: () => EE.A.isDeveloper,
        buildLayout: () => [SP, Sc],
    });
var SM = i(712440),
    SU = i(370997);
let SV = (0, a.E2)(u.X.AUTHORIZED_APPS_LIST_SETTING, {
    Component: SU.Ay,
    useSearchTerms: () => [j.intl.string(j.t["f6kk+r"])],
});
var Sk = i(259678),
    Sw = i(77468),
    SF = i(289498),
    SB = i(573648),
    Sz = i(874490),
    SY = i(370480),
    SX = i(968309);
let SH = new Set([U.fg2.XBOX, U.fg2.PLAYSTATION, U.fg2.PLAYSTATION_STAGING, U.fg2.CRUNCHYROLL]);
var SK = i(169869),
    SW = i(235693),
    SZ = i(757036),
    Sq = i(555837),
    SQ = i(733110),
    SJ = i(241524),
    S$ = i(346017),
    S0 = i(51965),
    S1 = i(631368),
    S2 = i(968671),
    S3 = i(212739),
    S5 = i(30370),
    S6 = i(933287),
    S4 = i(594387),
    S8 = i(651439);
function S7() {
    let e,
        t,
        n,
        l,
        s,
        { variant: r, showFooter: a } =
            ((e = (0, S1.$)()),
            (t = (0, S2.GM)("connectedAccountsBannerFooter")),
            (n = (0, S3.O)()),
            (s = null != (l = (0, g.bG)([S5.A], () => S5.A.getAccount(null, U.fg2.XBOX))) && !l.revoked),
            e === S1.C.NONE || n
                ? { variant: S1.C.NONE, showFooter: !1 }
                : { variant: e, showFooter: t && e === S1.C.NO_ACCESS && !s }),
        { analyticsLocations: o } = (0, n1.Ay)(e6.A.XBOX_CONNECTED_ACCOUNTS_BANNER),
        u = (0, S$.yW)(o),
        d = (0, SJ.A)("(max-width: 485px)");
    if (r === S1.C.NONE) return null;
    let c = d ? "md" : "sm",
        m = "",
        A = null;
    switch (r) {
        case S1.C.HAS_ACCESS:
        case S1.C.BLOCK_CLAIM:
            (m = j.intl.string(S6.default["7PdsMK"])),
                (A = (0, E.jsx)(S0.A, {
                    variant: "overlay-primary",
                    size: c,
                    fullWidth: d,
                    text: j.intl.string(S6.default.CubeLC),
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
        case S1.C.NO_ACCESS:
            (m = j.intl.string(S6.default.NwkRTZ)),
                (A = (0, E.jsx)(lW.A, {
                    defaultTextOverride: j.intl.string(S6.default["0vY+ie"]),
                    variantOverride: "overlay-primary",
                    size: c,
                    fullWidth: d,
                    subscriptionTier: l0.pe.TIER_2,
                }));
            break;
        default:
            (0, N.xb)(r);
    }
    return (0, E.jsxs)(n1.f5, {
        value: o,
        children: [
            (0, E.jsxs)("div", {
                className: S8.bV,
                children: [
                    (0, E.jsx)(eV.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: j.intl.string(j.t.NG1e6l),
                    }),
                    (0, E.jsx)(us.t, { size: "xs", color: "var(--icon-default)" }),
                ],
            }),
            (0, E.jsx)(io.N, {
                theme: "dark",
                children: (e) =>
                    (0, E.jsx)("div", {
                        className: e,
                        children: (0, E.jsxs)("div", {
                            className: S8.Nr,
                            children: [
                                (0, E.jsxs)("div", {
                                    className: S8.Tp,
                                    children: [
                                        (0, E.jsx)("div", {
                                            className: S8.Qw,
                                            style: {
                                                backgroundImage: `url(${a ? "https://cdn.discordapp.com/assets/content/1858990b1e56c7d51e887008753104d4663d06c0e0e296d8fe0ea85c7e3e8341.png" : "https://cdn.discordapp.com/assets/content/7308e937fbd3074b9de0ebba1fa3571fa7b10a2b88f384b382f711bae99f40e6.png"})`,
                                            },
                                        }),
                                        (0, E.jsx)("div", { className: S8.$h }),
                                        (0, E.jsx)("div", { className: S8.Rv }),
                                        (0, E.jsx)("div", { className: S8.Lw }),
                                    ],
                                }),
                                (0, E.jsxs)("div", {
                                    className: S8.Mn,
                                    children: [
                                        (0, E.jsxs)("div", {
                                            className: S8.mY,
                                            children: [
                                                (0, E.jsx)("img", {
                                                    className: S8.wm,
                                                    src: "https://cdn.discordapp.com/assets/content/c5fab2b5d1155c4c9bc088b07f8563b6db8d2d08666357486efc5aea6e97fbea.png",
                                                    alt: "Xbox Game Pass",
                                                }),
                                                (0, E.jsx)(el.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: S8.DD,
                                                    children: m,
                                                }),
                                            ],
                                        }),
                                        (0, E.jsx)("div", { className: S8.lO, children: A }),
                                    ],
                                }),
                                a &&
                                    (0, E.jsxs)(E.Fragment, {
                                        children: [
                                            (0, E.jsx)("div", { className: S8.yF }),
                                            (0, E.jsxs)("div", {
                                                className: S8.sQ,
                                                children: [
                                                    (0, E.jsx)(ct.o, {
                                                        size: d ? "md" : "sm",
                                                        color: er.A.colors.ICON_STRONG,
                                                    }),
                                                    (0, E.jsx)(el.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-default",
                                                        children: j.intl.format(S4.default.mXY4Rb, {
                                                            onConnect: () => {
                                                                u(S$.Hx.CONNECT),
                                                                    (0, SX.A)({
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
var S9 = i(201718),
    Te = i(321078),
    Tt = i(672130),
    Ti = i(379848),
    Tn = i(567910);
function Tl(e) {
    let { markAsDismissed: t } = e;
    return (
        S.useEffect(() => t(iT.i.UNKNOWN), [t]),
        (0, E.jsx)(lT.Lp, { className: Tn.Ad, text: j.intl.string(j.t.y2b7CA) })
    );
}
function Ts(e) {
    let { title: t, body: i, img: n, newIndicatorDismissibleContent: l, onClick: s } = e;
    return (0, E.jsxs)("div", {
        className: Tn.kL,
        children: [
            n,
            (0, E.jsxs)("div", {
                className: Tn.FS,
                children: [
                    (0, E.jsxs)("div", {
                        className: Tn.TK,
                        children: [
                            (0, E.jsx)(Ti.Ay, {
                                contentTypes: [l],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: i } = e;
                                    return t === l ? (0, E.jsx)(Tl, { markAsDismissed: i }) : null;
                                },
                            }),
                            (0, E.jsx)(el.E, { variant: "text-md/semibold", children: t }),
                        ],
                    }),
                    (0, E.jsx)(el.E, { variant: "text-xs/normal", children: i }),
                ],
            }),
            (0, E.jsx)(ek.$, { text: j.intl.string(j.t.vD60Pv), onClick: s }),
        ],
    });
}
function Tr() {
    let e = ty.A.getArticleURL(U.MVz.PS_CONNECTION);
    return (0, E.jsx)(Ts, {
        title: j.intl.string(j.t.v20wwm),
        body: j.intl.format(j.t.lTZBit, { help_article: e }),
        img: (0, E.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
        newIndicatorDismissibleContent: eF.M.PS_ONE_WAY_RECONNECT,
        onClick: () => (0, SX.A)({ platformType: U.fg2.PLAYSTATION, location: "PS two way upsell" }),
    });
}
let Ta = "/assets/9df988a227916145.png";
function To() {
    return (0, E.jsx)(Ts, {
        title: j.intl.string(S4.default["9cLtDI"]),
        body: j.intl.format(S4.default["D+kUbg"], { learnMoreLink: ty.A.getArticleURL(U.MVz.XBOX_GAME_PASS_PERKS) }),
        img: (0, E.jsx)("img", { src: Ta, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eF.M.XBOX_PERKS_RECONNECT_UPSELL,
        onClick: () => (0, SX.A)({ platformType: U.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
    });
}
function Tu() {
    let e = ty.A.getArticleURL(U.MVz.XBOX_CONNECTION);
    return (0, E.jsx)(Ts, {
        title: j.intl.string(j.t["2okkZV"]),
        body: j.intl.format(j.t.OnERSS, { help_article: e }),
        img: (0, E.jsx)("img", { src: Ta, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eF.M.XBOX_ONE_WAY_RECONNECT,
        onClick: () => (0, SX.A)({ platformType: U.fg2.XBOX, location: "Xbox two way upsell" }),
    });
}
var Td = i(783419),
    Tc = i(534952),
    Tg = i(230451),
    Tm = i(113463);
function TA(e) {
    let t,
        { integration: i } = e,
        {
            isJoining: n,
            joinErrorMessage: l,
            showJoinErrorMessage: s,
        } = (0, g.cf)(
            [S5.A],
            () => ({
                isJoining: S5.A.isJoining(i.id),
                joinErrorMessage:
                    "" === S5.A.joinErrorMessage(i.id) ? j.intl.string(j.t.j2d6Km) : S5.A.joinErrorMessage(i.id),
                showJoinErrorMessage: void 0 !== S5.A.joinErrorMessage(i.id),
            }),
            [i.id],
        );
    return (
        null != (0, g.bG)([eh.A], () => eh.A.getGuild(i.guild.id), [i.guild.id]) ||
            (t = (0, E.jsx)(ek.$, {
                size: "sm",
                onClick: function () {
                    Sw.A.joinServer(i.id, () => {});
                },
                disabled: n,
                variant: "primary",
                text: n ? j.intl.string(j.t.RXvQQu) : j.intl.string(j.t.XpeFYr),
            })),
        (0, E.jsxs)("div", {
            className: Tm.iA,
            children: [
                (0, E.jsxs)("div", {
                    className: Tm.XX,
                    children: [
                        (0, E.jsx)(me.Ay, { size: me.Ay.Sizes.SMALL, guild: i.guild, className: Tm.$f }),
                        (0, E.jsxs)("div", {
                            className: Tm.Vn,
                            children: [
                                (0, E.jsx)(el.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: i.guild.name,
                                }),
                                (0, E.jsx)(u7.Anchor, {
                                    href: SB.A.get(i.type)?.getPlatformUserUrl?.(i.account),
                                    children: (0, E.jsx)(el.E, {
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
                s &&
                    (0, E.jsx)(el.E, {
                        variant: "text-xs/normal",
                        color: "text-feedback-critical",
                        className: Tm.R,
                        children: l,
                    }),
            ],
        })
    );
}
function Th(e) {
    var t;
    let i,
        n,
        { account: l } = e,
        s =
            ((t = l.id),
            (i = (0, Sq.G)({ location: "useShouldShowXboxPerksReconnectUpsell" })),
            (n = (0, SZ.L)(l0.PremiumTypes.TIER_2)),
            !i && !n && !/^\d+$/.test(t));
    return l.type === U.fg2.XBOX && s
        ? (0, E.jsx)(To, {})
        : l.twoWayLink
          ? null
          : l.type === U.fg2.XBOX
            ? (0, E.jsx)(Tu, {})
            : l.type === U.fg2.PLAYSTATION
              ? (0, E.jsx)(Tr, {})
              : null;
}
function TE(e) {
    let t,
        i,
        n,
        l,
        s,
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
        R = (0, Sz.ML)(u.type),
        L = SB.A.get(R);
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
            null != e && (h(e), Sw.A.setVisibility(u.type, u.id, e), _(null)),
                null != t && (x(t), Sw.A.setMetadataVisibility(u.type, u.id, t), C(null));
        }, [u]),
        (0, E.jsxs)("div", {
            className: Tm.FI,
            children: [
                ((t = SB.A.get(u.type)),
                (i = SB.A.get(R)),
                (n = "1" === (u.metadata ?? {})[Td.pK.TWITTER_VERIFIED]),
                (l = null),
                t.type === U.fg2.TWITTER &&
                    n &&
                    (l = (0, E.jsx)(td.m, {
                        text: j.intl.string(j.t.Jebrww),
                        children: (0, E.jsx)(tx.A, {
                            color: er.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, E.jsx)(tc.U, { size: "xs", color: er.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, E.jsxs)("div", {
                    className: Tm.Il,
                    children: [
                        (0, E.jsx)("img", {
                            alt: i.name,
                            className: Tm.gj,
                            src: (0, gU.M)(d) ? i.icon.darkSVG : i.icon.lightSVG,
                        }),
                        (0, E.jsxs)("div", {
                            children: [
                                (0, E.jsxs)("div", {
                                    className: Tm.$p,
                                    children: [
                                        (0, E.jsx)(el.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: Tm.RW,
                                            children: u.name,
                                        }),
                                        null != l && (0, E.jsx)("div", { className: Tm.cG, children: l }),
                                    ],
                                }),
                                (0, E.jsx)(el.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: Tm.Au,
                                    children: i.migrationData?.getMigrationExperimentEnabled(
                                        "User Settings Connections Web",
                                    )
                                        ? j.intl.format(Tg.default.Glhokn, { platformName: i.name })
                                        : i.name,
                                }),
                            ],
                        }),
                        (0, E.jsx)(en.D, {
                            className: Tm.uH,
                            onClick: function () {
                                let e = SB.A.get(u.type);
                                (0, K.openModal)((t) =>
                                    (0, E.jsx)(rW.Modal, {
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
                                            SH.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, E.jsx)(ap.A, {
                                                children: j.intl.format(j.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": j.intl.string(j.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, E.jsx)(gk.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, E.jsx)(Th, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        i = null,
                        n = (0, SY.An)(t[Td.pK.CREATED_AT], c);
                    switch (e.type) {
                        case U.fg2.REDDIT:
                            i = (0, SK.xE)(t, Tm.Nz);
                            break;
                        case U.fg2.STEAM:
                            i = (0, SK.dy)(t, Tm.Nz);
                            break;
                        case U.fg2.BLUESKY:
                        case U.fg2.TWITTER:
                        case U.fg2.MASTODON:
                            i = (0, SK.ED)(t, Tm.Nz);
                            break;
                        case U.fg2.EBAY:
                            i = (0, SK.ub)(t, Tm.Nz);
                            break;
                        case U.fg2.PAYPAL:
                            i = (0, SK.gZ)(t, Tm.Nz);
                            break;
                        case U.fg2.TIKTOK:
                            i = (0, SK.HU)(t, Tm.Nz);
                    }
                    null !== n &&
                        (null == i && (i = []),
                        i?.push(
                            (0, E.jsx)(
                                el.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: Tm.M4,
                                    children: j.intl.format(j.t["9rfonh"], { date: n }),
                                },
                                "member-since",
                            ),
                        ));
                    let l = y.includes(e.id),
                        s = j.intl.string(j.t.wzzjk9);
                    if (null == i || 0 === i.length)
                        if (!0 !== SB.A.get(e.type).hasMetadata) return null;
                        else
                            (i = [
                                (0, E.jsx)(lT.Lp, { className: Tm.Z3, text: j.intl.string(j.t.y2b7CA) }, "badge"),
                                (0, E.jsx)(
                                    el.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: Tm.vt,
                                        children: j.intl.format(j.t.Up2ni7, {
                                            helpdeskUrl: ty.A.getArticleURL(U.MVz.CONNECTION_DETAILS),
                                        }),
                                    },
                                    "label",
                                ),
                            ]),
                                (s = j.intl.string(j.t["LVh3/5"]));
                    return (
                        l && (s = j.intl.string(j.t.i4jeWR)),
                        i.push(
                            (0, E.jsx)(
                                "div",
                                {
                                    className: Tm.jy,
                                    children: (0, E.jsx)(ek.$, {
                                        text: s,
                                        variant: "secondary",
                                        size: "sm",
                                        loading: b,
                                        disabled: l,
                                        "aria-label": j.intl.string(j.t.sCkLYH),
                                        onClick: l
                                            ? void 0
                                            : () => {
                                                  v(!0),
                                                      Sw.A.refresh(e.type, e.id).finally(() => {
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
                        (0, E.jsx)("div", { className: Tm.tJ, children: i })
                    );
                })(u),
                (U.txh.has(u.type) &&
                    (s = (0, E.jsx)(J.d, {
                        label: j.intl.string(j.t["+KCMSi"]),
                        checked: g,
                        onChange: function (e) {
                            m(e), Sw.A.setFriendSync(u.type, u.id, e);
                        },
                    })),
                U.ewM.has(u.type) &&
                    (r = (0, E.jsx)(J.d, {
                        label: j.intl.format(j.t["6u6J0q"], { platform: L.name }),
                        checked: p,
                        onChange: function (e) {
                            f(e), Sw.A.setShowActivity(u.type, u.id, e);
                        },
                    })),
                SB.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, E.jsx)(J.d, {
                        label: j.intl.string(j.t.FYKGsL),
                        checked: 1 === T,
                        onChange: function (e) {
                            let { verified: t } = u,
                                i = +!!e;
                            if (e && !t) {
                                C(i), (0, SX.A)({ platformType: u.type, location: "User Settings" });
                                return;
                            }
                            x(i), Sw.A.setMetadataVisibility(u.type, u.id, i);
                        },
                        disabled: 1 !== A || null == u.metadata,
                    })),
                (0, E.jsxs)("div", {
                    className: Tm.HZ,
                    children: [
                        (0, E.jsx)(J.d, {
                            label: j.intl.string(j.t.f7yOAX),
                            checked: 1 === A,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    i = +!!e;
                                if (e && !t) {
                                    _(i), (0, SX.A)({ platformType: u.type, location: "User Settings" });
                                    return;
                                }
                                h(i), Sw.A.setVisibility(u.type, u.id, i);
                            },
                        }),
                        a,
                        r,
                        s,
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
                                  (0, SX.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                      })
                    : u.integrations.length > 0
                      ? (0, E.jsx)(l8.D, {
                            label: j.intl.string(j.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, E.jsx)(TA, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, E.jsx)(SW.A, { partner: u.type }),
            ],
        })
    );
}
function TS(e) {
    let { appIdentity: t, oauth2Token: i } = e;
    return null == i
        ? null
        : (0, E.jsxs)("div", {
              className: Tm.FI,
              children: [
                  (function (e, t) {
                      let { application: i } = t,
                          n = na.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
                      return (0, E.jsxs)("div", {
                          className: Tm.Il,
                          children: [
                              (0, E.jsx)("img", { alt: i.name, className: e7()(Tm.gj, Tm.sN), src: n }),
                              (0, E.jsxs)("div", {
                                  children: [
                                      (0, E.jsx)("div", {
                                          className: Tm.$p,
                                          children: (0, E.jsx)(el.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: Tm.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, E.jsx)(el.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: Tm.Au,
                                          children: i.name,
                                      }),
                                  ],
                              }),
                              (0, E.jsx)(en.D, {
                                  className: Tm.uH,
                                  onClick: () =>
                                      (0, SU.d1)(i, t.scopes, () => {
                                          SM.A.delete(t.id);
                                      }),
                                  "aria-label": j.intl.string(j.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, E.jsx)(gk.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, i),
                  (0, E.jsx)("div", {
                      className: Tm.HZ,
                      children: (0, E.jsx)(J.d, {
                          label: j.intl.string(j.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              S9.A.updateApplicationIdentityConfig(i.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function TT(e) {
    let t = SB.A.get(e);
    (0, SX.A)({ platformType: t.type }),
        G.default.track(U.HAw.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        });
}
function Tx() {
    let e = (0, Sz.gn)(),
        t = (0, tr.A)((0, Tc.Gl)("NewConnectionsList"));
    return (0, E.jsxs)("div", {
        className: Tm.lA,
        children: [
            t.map(
                (e) =>
                    null != e &&
                    (0, E.jsx)(
                        Tt.A,
                        { application: e, className: Tm.__invalid_accountButton, innerClassName: Tm.U$ },
                        e.id,
                    ),
            ),
            e
                .slice(0, 10 - t.length)
                .map((e) =>
                    (0, E.jsx)(
                        SF.A,
                        { type: e.type, className: Tm.__invalid_accountButton, innerClassName: Tm.U$ },
                        e.type,
                    ),
                ),
            (0, E.jsx)(td.m, {
                text: j.intl.string(j.t.QqTz8b),
                children: (0, E.jsx)("div", {
                    className: e7()(Tm.ej, Tm.__invalid_accountButton),
                    children: (0, E.jsx)(Sk.vN, {
                        children: (0, E.jsx)("button", {
                            className: e7()(Tm.R8, Tm.U$),
                            type: "button",
                            onClick: function () {
                                lm.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: TT });
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
function Tp(e) {
    let t,
        { fetching: i, accounts: n, appIdentities: l, authorizedApps: s, theme: r, locale: a } = e,
        u = (0, o.SV)("ConnectionsList"),
        d = S.useMemo(() => n.filter((e) => SB.A.isSupported(e.type)), [n]);
    return (
        (t = i
            ? (0, E.jsx)(dm.y, { type: dm.y.Type.SPINNING_CIRCLE })
            : 0 === d.length && 0 === l.length
              ? (0, E.jsx)(iy.pp, {
                    theme: r,
                    className: u ? Tm.p$ : void 0,
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
                                children: j.intl.format(j.t.AioIGb, { count: l.length + d.length }),
                            }),
                        l.map((e, t) =>
                            (0, E.jsx)(
                                TS,
                                { appIdentity: e, oauth2Token: s.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        d.map((e, t) =>
                            (0, E.jsx)(
                                TE,
                                {
                                    theme: r,
                                    account: e,
                                    locale: a,
                                    onDisconnect: () =>
                                        (function (e) {
                                            let { type: t, id: i } = e;
                                            Sw.A.disconnect(t, i);
                                        })(e),
                                },
                                `connection-${t}`,
                            ),
                        ),
                    ],
                })),
        (0, E.jsx)("div", { className: Tm.V, children: t })
    );
}
let Tf = (0, a.E2)(u.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            let e = (0, o.SV)("NewConnectSection");
            return (0, E.jsx)(l8.D, {
                label: j.intl.string(e ? j.t["t+aGse"] : j.t.ZeDrUf),
                description: e ? void 0 : j.intl.format(j.t["oYc+Gz"], { privacyPolicyUrl: U.X7G.PRIVACY }),
                children: (0, E.jsx)(Tx, {}),
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
    TN = (0, a.E2)(u.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, g.bG)([eX.A], () => eX.A.hidePersonalInformation),
                t = (0, g.bG)([S5.A], () => S5.A.isFetching()),
                i = (0, g.bG)([S5.A], () => S5.A.getAccounts()),
                { authorizedAppsFetchState: n, authorizedApps: l } = (0, g.cf)([SQ.default], () => ({
                    authorizedAppsFetchState: SQ.default.getFetchState(),
                    authorizedApps: SQ.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: s, filteredAppIdentities: r } = (0, Te.A)(iA.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, cZ.Ay)(),
                o = (0, g.bG)([d$.default], () => d$.default.locale);
            return (S.useEffect(() => {
                n === SQ.FetchState.NOT_FETCHED && SM.A.fetch();
            }, [n]),
            e)
                ? null
                : (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsx)(S7, {}),
                          (0, E.jsx)(Tp, {
                              fetching: t || s || (r.length > 0 && n !== SQ.FetchState.FETCHED),
                              accounts: i,
                              appIdentities: r,
                              authorizedApps: l,
                              theme: a,
                              locale: o,
                          }),
                      ],
                  });
        },
        initialize: () => {
            Sw.A.fetch();
        },
        useSearchTerms: () => [
            j.intl.string(j.t["+/hZM/"]),
            j.intl.string(j.t.bsbMVz),
            j.intl.string(j.t.f7yOAX),
            j.intl.string(j.t.FYKGsL),
            j.intl.string(j.t["+KCMSi"]),
        ],
    });
var T_ = i(206828);
function TI() {
    let e = (0, g.bG)([S5.A], () => S5.A.getAccounts()),
        t = S.useMemo(
            () =>
                SB.A.filter(
                    (e) => e.migrationData?.getMigrationExperimentEnabled("ConnectionDeprecationInlineNotice") === !0,
                ).filter((t) => e.some((e) => e.type === t.type)),
            [e],
        ),
        [i, n] = S.useState(0),
        [l, s] = S.useState(t),
        r = t !== l;
    r && (s(t), n(0));
    let a = S.useMemo(() => t[i], [t, i]),
        o = (0, tr.h)(a?.migrationData?.replacedBy),
        { canStartAuthorization: u, hasAlreadyLinked: d, fetched: c } = (0, T_.RD)(o),
        m =
            a?.type === U.fg2.RIOT_GAMES || a?.type === U.fg2.LEAGUE_OF_LEGENDS
                ? j.intl.string(Tg.default["1S6oAo"])
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
                          text: j.intl.format(Tg.default.wUXupS, {
                              connectionName: a.name,
                              applicationName: m,
                              connectionEntrypointUrl: o?.connectionEntrypointUrl,
                              helpCenterLink:
                                  a.migrationData?.helpCenterLink != null ? a.migrationData.helpCenterLink : "",
                          }),
                      }
                    : null,
            [a, m, o, E],
        )
    );
}
let TC = (0, a.zZ)(u.X.CONNECTIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["3fe7U5"]),
        useSubtitle: () => j.intl.string(j.t.U22vw6),
        useInlineNotice: TI,
        buildLayout: () => [Tf, TN],
    }),
    Tb = (0, a.zZ)(u.X.AUTHORIZED_APPS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        useSubtitle: () => j.intl.string(j.t.G9JfLg),
        buildLayout: () => [SV],
        initialize: () => (
            SM.A.fetch(),
            () => {
                SU.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    Tv = (0, a.t_)(u.X.CONNECTED_APPS_PANEL, {
        useTitle: () => j.intl.string(j.t.lrVuZO),
        useObscuredNotice: dc.L,
        buildLayout: () => [TC, Tb],
    }),
    Ty = (0, a.i4)(u.X.CONNECTED_APPS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.lrVuZO),
        icon: ED.q,
        buildLayout: () => [Tv],
    }),
    Tj = (0, a.WI)(u.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => j.intl.string(j.t.BA9200),
        buildLayout: () => [i4, eG, iI, Ty],
    });
var TO = i(631670),
    TR = i(619499),
    TL = i(836602),
    TD = i(591179),
    TP = i(854627),
    TG = i(975732),
    TM = i(761508),
    TU = i(159001),
    TV = i(344346),
    Tk = i(919395),
    Tw = i(699217);
function TF(e) {
    let { title: t, children: i } = e;
    return (0, E.jsxs)("div", {
        children: [(0, E.jsx)(eV.D, { variant: "text-md/medium", className: Tw.Vf, children: t }), i],
    });
}
function TB(e) {
    let {
        children: t,
        className: i,
        layoutClassName: n,
        profilePreview: l,
        profilePreviewTitle: s,
        nameplatePreview: r,
        stickyPreview: a = !0,
    } = e;
    return (0, E.jsx)("div", {
        className: e7()(Tw.UA, i),
        children: (0, E.jsxs)("div", {
            className: e7()(Tw.yt, n),
            children: [
                (0, E.jsx)("div", {
                    className: e7()(Tw.Fp, a && Tw.Oz),
                    children: (0, E.jsxs)(E.Fragment, {
                        children: [
                            (0, E.jsx)(TF, { title: s ?? j.intl.string(j.t.Zb06yP), children: l }),
                            null != r ? (0, E.jsx)(TF, { title: j.intl.string(j.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, E.jsx)("div", { className: Tw.oB, children: t }),
            ],
        }),
    });
}
var Tz = i(986687),
    TY = i(101058),
    TX = i(321191),
    TH = i(696451),
    TK = i(271078);
function TW() {
    return (0, E.jsxs)("div", {
        className: TK.p$,
        children: [
            (0, E.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: TK.Sl }),
            (0, E.jsx)(eV.D, {
                className: TK.h8,
                variant: "heading-lg/extrabold",
                children: j.intl.string(j.t.Z1OZCV),
            }),
            (0, E.jsx)(el.E, { className: TK.h8, variant: "text-md/normal", children: j.intl.string(j.t.ZSt4Tt) }),
            (0, E.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: TK.h8,
                children: (0, E.jsx)(ek.$, {
                    variant: "primary",
                    text: j.intl.string(j.t.jQ3pqt),
                    onClick: function () {
                        (0, l7.pX)(U.BVt.GUILD_DISCOVERY), (0, lZ.default)();
                    },
                }),
            }),
        ],
    });
}
var TZ = i(81400),
    Tq = i(252732),
    TQ = i(355622),
    TJ = i(408018),
    T$ = i(138617),
    T0 = i(594943);
let T1 = (0, lJ.Ld)(),
    T2 = (0, ic.createChannelRecord)({ id: "1", type: U.rbe.DM }),
    T3 = (0, lJ.Ld)();
function T5(e) {
    let {
            sectionTitle: t,
            errors: i,
            onBioChange: n,
            pendingBio: l,
            placeholder: s,
            currentBio: r,
            disabled: a = !1,
        } = e,
        [o, u] = S.useState(l ?? r),
        [d, c] = S.useState((0, TJ.x7)(o)),
        g = S.useRef(r),
        m = S.useRef(!1);
    return (
        S.useEffect(() => {
            if (g.current !== r) {
                let e = (0, TJ.x7)(r);
                u(r), c(e);
            }
            g.current = r;
        }, [r]),
        S.useEffect(() => {
            void 0 !== l || o === r || m.current || (u(r), c((0, TJ.x7)(r)));
        }, [l, r, o]),
        (0, E.jsxs)(uo.A, {
            title: t,
            titleId: T1,
            description: j.intl.string(j.t.Bbw6Ac),
            errors: i,
            disabled: a,
            children: [
                (0, E.jsx)(T$.Ay, {
                    "aria-describedby": T3,
                    "aria-labelledby": T1,
                    className: T0.i,
                    innerClassName: T0.Z,
                    maxCharacterCount: U.NA2,
                    onChange: function (e, t, i) {
                        t !== o && (u(t), c(i), n(t));
                    },
                    placeholder: s,
                    channel: T2,
                    textValue: o,
                    richValue: d,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: eq.USER_SETTINGS_MODAL_KEY,
                    type: TQ.oU.PROFILE_BIO_INPUT,
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
                (0, E.jsx)(eo.A, { id: T3, children: j.intl.format(j.t["+DFxLc"], { maxLength: U.NA2 }) }),
            ],
        })
    );
}
var T6 = i(930861),
    T4 = i(821956),
    T8 = i(562819),
    T7 = i(84540),
    T9 = i(848575);
function xe(e) {
    let { user: t, guild: i, className: n, sectionTitle: l, forcedDivider: s = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, n1.Ay)(),
        o = (0, Tk.a4)({ user: t, guildId: i?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, Tk.CP)(i?.id),
        c = r ? T6.wL : oe.$n;
    return (0, E.jsx)(uo.A, {
        className: n,
        forcedDivider: s,
        hasBackground: !0,
        title: l,
        errors: d,
        children: (0, E.jsxs)("div", {
            className: T9.NC,
            children: [
                (0, E.jsx)(c, {
                    size: oe.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, T8.L)({ analyticsLocations: a, guild: i });
                    },
                    className: e7()({ [T9.yj]: r }),
                    children: j.intl.string(j.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: T9.DT,
                        children: (0, E.jsx)(ek.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, T4.uZ)(t, i) ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.OrokWm),
                            onClick: function () {
                                (0, T7.p)({ guildId: i?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var xt = i(339984),
    xi = i(831653);
let xn = [{ name: "gif", extensions: ["gif"] }];
function xl(e) {
    let {
            showRemoveAvatarButton: t,
            errors: i,
            onAvatarChange: n,
            sectionTitle: l,
            changeAvatarButtonText: s,
            guildId: r,
            className: a,
            disabled: o = !1,
            isTryItOut: u = !1,
            forcedDivider: d,
            withHighlight: c = !1,
        } = e,
        { newestAnalyticsLocation: g } = (0, n1.Ay)(),
        m = c ? T6.wL : oe.$n,
        A = S.useCallback(() => {
            (0, Tq.XD)({
                uploadType: xt.HL.AVATAR,
                analyticsSource: g,
                filters: u ? xn : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, g, u]);
    return (0, E.jsx)(uo.A, {
        className: a,
        title: l,
        errors: i,
        disabled: o,
        forcedDivider: d,
        children: (0, E.jsxs)("div", {
            className: xi.NC,
            children: [
                (0, E.jsx)(m, {
                    className: e7()({ [xi.yj]: c }),
                    size: oe.$n.Sizes.SMALL,
                    onClick: A,
                    children: s ?? j.intl.string(j.t["4OynCD"]),
                }),
                t &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: xi.DT,
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
var xs = i(248778),
    xr = i(479183);
function xa(e) {
    let { user: t, guildId: i, className: n } = e,
        l = uA.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: s } = (0, n1.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, Tk.B0)(t, i),
        d = (0, xs.ux)("DisplayNameStylesSection"),
        [c, g] = (0, eB.kn)(d ? [eF.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        m = c === eF.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE,
        A = (0, S.useCallback)(() => {
            g(iT.i.TAKE_ACTION),
                G.default.track(U.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, n2.L)({ analyticsLocations: s, guildId: i });
        }, [s, i, g]),
        h = (0, S.useCallback)(() => {
            (0, T7.p)({ displayNameStyles: null }), G.default.track(U.HAw.DISPLAY_NAME_STYLES_REMOVED);
        }, []),
        T = (0, S.useCallback)(() => {
            (0, T7.p)({ guildId: i, displayNameStyles: null });
        }, [i]),
        x = void 0 !== o ? o : null != i ? a : r;
    return (0, E.jsx)(uo.A, {
        title: j.intl.string(n3.default["86GtGH"]),
        titleBadge: m ? (0, E.jsx)(lT.Lp, { text: j.intl.string(j.t.y2b7CA), className: xr.A }) : void 0,
        className: n,
        showPremiumIcon: l,
        errors: u,
        children: (0, E.jsxs)("div", {
            className: xr.N,
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
var xo = i(637193),
    xu = i(946801);
function xd(e) {
    let { user: t, guild: i, titleIcon: n } = e,
        { analyticsLocations: l } = (0, n1.Ay)(),
        s = null != i,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, Tk.rv)(t, i?.id),
        d = S.useCallback(() => {
            (0, xo.p)({ analyticsLocations: l, guildId: i?.id });
        }, [l, i?.id]),
        c = S.useCallback(() => {
            (0, T7.p)({ guildId: i?.id, nameplate: null });
        }, [i?.id]);
    return (0, E.jsx)(uo.A, {
        title: j.intl.string(j.t.x5CoXR),
        titleIcon: n,
        errors: u,
        children: (0, E.jsxs)("div", {
            className: xu.u,
            children: [
                (0, E.jsx)(ek.$, { variant: "primary", size: "sm", text: j.intl.string(j.t.BwdeM1), onClick: d }),
                (void 0 === o ? (s ? a : r) != null : null != o) &&
                    (0, E.jsx)(ek.$, {
                        variant: "secondary",
                        size: "sm",
                        text: s ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t["9zwziY"]),
                        onClick: c,
                    }),
            ],
        }),
    });
}
var xc = i(617255);
function xg(e) {
    let {
            showRemoveBannerButton: t,
            errors: i,
            onBannerChange: n,
            guildId: l,
            className: s,
            disabled: r = !1,
            showPremiumIcon: a = !0,
            isTryItOut: o = !1,
            forcedDivider: u,
            withHighlight: d = !1,
        } = e,
        { newestAnalyticsLocation: c } = (0, n1.Ay)(),
        g = d ? T6.wL : oe.$n;
    return (0, E.jsx)(uo.A, {
        className: s,
        title: j.intl.string(j.t.Vgdusv),
        showPremiumIcon: a,
        errors: i,
        disabled: r,
        forcedDivider: u,
        children: (0, E.jsxs)("div", {
            className: xc.NC,
            children: [
                (0, E.jsx)(g, {
                    className: e7()({ [xc.yj]: d }),
                    size: oe.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, Tq.XD)({ uploadType: xt.HL.BANNER, analyticsSource: c, guildId: l, isTryItOut: o }),
                    children: j.intl.string(j.t.N0bC3P),
                }),
                t &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: xc.DT,
                        children: (0, E.jsx)(ek.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != l ? j.intl.string(j.t.jHlJNS) : j.intl.string(j.t.tT9n7D),
                            onClick: () => n(null),
                        }),
                    }),
            ],
        }),
    });
}
var xm = i(617061),
    xA = i(869438);
function xh(e) {
    let {
            user: t,
            guild: i,
            initialSelectedEffect: n,
            className: l,
            sectionTitle: s,
            forcedDivider: r = !1,
            withTutorial: a = !1,
            showBorder: o = !1,
        } = e,
        { analyticsLocations: u } = (0, n1.Ay)(),
        d = uA.Ay.canUsePremiumProfileCustomization(t),
        c = (0, Tk.N2)({ user: t, guildId: i?.id }),
        { pendingProfileEffect: g, errors: m } = (0, Tk.nZ)(i?.id);
    S.useEffect(() => {
        d &&
            G.default.track(U.HAw.PREMIUM_UPSELL_VIEWED, {
                type: l0.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            });
    }, [d, u]);
    let A = a ? T6.wL : oe.$n;
    return (0, E.jsx)(uo.A, {
        forcedDivider: r,
        borderType: cC.i.PREMIUM,
        hasBackground: !0,
        title: s,
        showBorder: o,
        errors: m,
        className: l,
        children: (0, E.jsxs)("div", {
            className: xA.NC,
            children: [
                (0, E.jsx)(A, {
                    size: oe.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, xm.W)({ analyticsLocations: u, guild: i, initialSelectedEffect: n });
                    },
                    className: e7()({ [xA.yj]: a }),
                    children: j.intl.string(j.t["/dRfCf"]),
                }),
                (void 0 === g ? null != c : null != g) &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: xA.DT,
                        children: (0, E.jsx)(ek.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != i ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.uMuafO),
                            onClick: function () {
                                (0, T7.p)({ guildId: i?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var xE = i(13875),
    xS = i(515727),
    xT = i(566935);
function xx(e) {
    let { user: t, guild: i, sectionTitle: n } = e,
        { analyticsLocations: l } = (0, n1.Ay)(),
        s = (0, xE.sk)("ProfileFrameSection"),
        r = (0, Tk.Xf)({ user: t, guildId: i?.id }),
        { pendingProfileFrame: a, errors: o } = (0, Tk.Tu)(i?.id),
        [u, d] = (0, eB.kn)([eF.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        c = u === eF.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return s
        ? (0, E.jsx)(uo.A, {
              showBorder: c,
              borderType: c ? cC.i.NEW_UPSELL : cC.i.PREMIUM,
              hasBackground: c,
              title: n,
              titleBadge: c ? (0, E.jsx)(lT.Lp, { text: j.intl.string(j.t.y2b7CA), className: xT.Ad }) : void 0,
              description: c ? j.intl.string(j.t.yMoMAt) : void 0,
              errors: o,
              children: (0, E.jsxs)("div", {
                  className: xT.NC,
                  children: [
                      (0, E.jsx)(ek.$, {
                          variant: "primary",
                          size: "sm",
                          text: j.intl.string(j.t["9/hmle"]),
                          onClick: function () {
                              (0, xS.w)({ analyticsLocations: l, guild: i }), d(iT.i.TAKE_ACTION);
                          },
                      }),
                      (void 0 === a ? null != r : null != a) &&
                          (0, E.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: xT.DT,
                              children: (0, E.jsx)(ek.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: null != i ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.nQBruk),
                                  onClick: function () {
                                      (0, T7.p)({ guildId: i?.id, profileFrame: null });
                                  },
                              }),
                          }),
                  ],
              }),
          })
        : null;
}
var xp = i(602853),
    xf = i(654107),
    xN = i(999291),
    x_ = i(101928),
    xI = i(317097),
    xC = i(508274),
    xb = i(919796),
    xv = i(426399);
function xy(e) {
    let {
            onChange: t,
            onClose: i,
            color: n,
            suggestedColors: l,
            disabled: s,
            label: r,
            colorPickerMiddle: a,
            colorPickerFooter: o,
            showEyeDropper: u,
        } = e,
        d = S.useRef(null),
        c = (0, xp.r)(er.A.colors.BACKGROUND_BASE_LOW).hex(),
        g = er.A.colors.BACKGROUND_MOD_MUTED.css,
        m = (0, Tq.sN)(n),
        A = (0, xI.Hl)(n),
        h = A === c ? g : A,
        T = m ? er.A.unsafe_rawColors.WHITE.css : er.A.unsafe_rawColors.PRIMARY_530.css,
        x = (0, xb.A)(a),
        p = (0, xb.A)(o),
        [f, N] = S.useState((0, dA.A)());
    return (
        S.useEffect(() => {
            (x !== a || p !== o) && N((0, dA.A)());
        }, [o, a, p, x]),
        (0, E.jsx)(ee.Y, {
            targetElementRef: d,
            positionKey: f,
            renderPopout: (e) =>
                (0, E.jsx)(xC.VN, {
                    ...e,
                    value: n,
                    onChange: t,
                    suggestedColors: l,
                    middle: a,
                    footer: o,
                    showEyeDropper: u,
                }),
            onRequestClose: i,
            children: (e) => {
                let { onClick: t, ...i } = e;
                return (0, E.jsxs)("div", {
                    ref: d,
                    className: e7()(xv.oP, { [xv.r9]: s }),
                    children: [
                        (0, E.jsx)(en.D, {
                            ...i,
                            tabIndex: s ? -1 : 0,
                            onClick: s ? U.tEg : t,
                            style: { backgroundColor: A, borderColor: h },
                            className: xv.nf,
                            "aria-label": j.intl.string(j.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, E.jsx)(um.R, {
                                size: "custom",
                                className: xv.BW,
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
var xj = i(811160);
function xO(e) {
    let {
            user: t,
            pendingAvatarSrc: i,
            pendingColors: n,
            onThemeColorsChange: l,
            preventDisabled: s,
            guildId: r,
            className: a,
            showPremiumIcon: o = !0,
            showResetThemeButton: u = !1,
            forcedDivider: d,
        } = e,
        c = (0, xN.Ay)(t.id, r),
        { primaryColor: g, secondaryColor: m } = (0, x_.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: n,
            isPreview: !0,
        }),
        A = uA.Ay.canUsePremiumProfileCustomization(t),
        h = null != i ? i : t.getAvatarURL(r, 80),
        S = (0, xp.r)(er.A.unsafe_rawColors.PRIMARY_530).hex(),
        T = (0, xf.rh)(h, S, !1);
    return null == g || null == m
        ? null
        : (0, E.jsx)(uo.A, {
              title: j.intl.string(j.t.DMeO2X),
              disabled: !A && !s,
              className: e7()(xj.__invalid_profileThemesSection, a),
              showPremiumIcon: o,
              forcedDivider: d,
              children: (0, E.jsxs)("div", {
                  className: xj.hd,
                  children: [
                      (0, E.jsx)("div", {
                          className: xj.YX,
                          children: (0, E.jsx)(xy, {
                              onChange: (e) => l([e, m]),
                              color: g,
                              suggestedColors: T,
                              showEyeDropper: !0,
                              label: (0, E.jsx)(el.E, {
                                  className: xj.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: j.intl.string(j.t.C3KTQk),
                              }),
                          }),
                      }),
                      (0, E.jsx)("div", {
                          className: xj.YX,
                          children: (0, E.jsx)(xy, {
                              onChange: (e) => l([g, e]),
                              color: m,
                              suggestedColors: T,
                              showEyeDropper: !0,
                              label: (0, E.jsx)(el.E, {
                                  className: xj.yz,
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
                              className: xj.WA,
                              children: (0, E.jsx)(ek.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: j.intl.string(j.t["L+GmoR"]),
                                  onClick: () => l([null, null]),
                              }),
                          }),
                  ],
              }),
          });
}
function xR(e) {
    let {
            sectionTitle: t,
            errors: i,
            onPronounsChange: n,
            pendingPronouns: l,
            placeholder: s,
            currentPronouns: r,
            disabled: a = !1,
        } = e,
        o = (0, lJ.GV)();
    return (0, E.jsx)(uo.A, {
        title: t,
        titleId: o,
        errors: i,
        disabled: a,
        children: (0, E.jsx)(rZ.k, {
            "aria-labelledby": o,
            placeholder: s ?? j.intl.string(j.t.NPEUUu),
            maxLength: 40,
            value: l ?? r,
            onChange: function (e) {
                n(e === r ? void 0 : e);
            },
            disabled: a,
        }),
    });
}
var xL = i(427262),
    xD = i(684732),
    xP = i(576705),
    xG = i(522334);
function xM(e) {
    let { errors: t, pendingNick: i, currentNick: n, username: l, user: s, guild: r } = e,
        a = (0, g.bG)([xP.A], () => xP.A.can(U.xBc.CHANGE_NICKNAME, r) || xP.A.can(U.xBc.MANAGE_NICKNAMES, r)),
        o = (0, SZ.L)(l0.PremiumTypes.TIER_2);
    return (0, E.jsxs)(uo.A, {
        title: j.intl.string(j.t.me1lRk),
        errors: t,
        children: [
            (0, E.jsx)(rZ.k, {
                value: i ?? n ?? "",
                placeholder: l,
                maxLength: U.d0r,
                onChange: function (e) {
                    (0, T7.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : j.intl.string(j.t.gzjxQi),
            }),
            o && (0, E.jsx)(xa, { user: s, guildId: r.id, className: xG.F }),
        ],
    });
}
var xU = i(816453);
let xV = "/assets/b25da78aa7949feb.png";
function xk(e) {
    let { user: t, showOverlay: i, children: n } = e,
        l = (0, cZ.Ay)(),
        { analyticsLocations: s } = (0, n1.Ay)(e6.A.PREMIUM_UPSELL_OVERLAY);
    return (S.useEffect(() => {
        i &&
            G.default.track(U.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: s,
                type: l0.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            });
    }, [i, s]),
    i)
        ? (0, E.jsxs)("div", {
              className: xU.ry,
              children: [
                  (0, E.jsx)("div", { children: n }),
                  (0, E.jsxs)("div", {
                      className: xU.Wc,
                      children: [
                          (0, E.jsx)("img", {
                              className: xU.Tn,
                              alt: j.intl.string(j.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case U.NJ8.DARK:
                                      case U.NJ8.DARKER:
                                      case U.NJ8.MIDNIGHT:
                                          return xV;
                                      case U.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return xV;
                                  }
                              })(l),
                          }),
                          (0, E.jsxs)("div", {
                              className: xU._9,
                              children: [
                                  (0, E.jsx)(el.E, {
                                      variant: "text-lg/semibold",
                                      color: "text-overlay-light",
                                      children: j.intl.string(j.t.dMaDFX),
                                  }),
                                  (0, E.jsx)(el.E, {
                                      variant: "text-sm/normal",
                                      color: "text-overlay-light",
                                      children: j.intl.string(j.t.F7sgFH),
                                  }),
                              ],
                          }),
                          (0, E.jsx)(cI.A, {
                              size: oe.$n.Sizes.LARGE,
                              color: oe.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: uA.Ay.isPremium(t)
                                      ? j.intl.string(j.t.AfRWI8)
                                      : j.intl.string(j.t.nkdUym),
                              },
                              subscriptionTier: l0.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : n;
}
var xw = i(784075);
function xF() {
    let e = (0, g.bG)([iA.default], () => {
            let e = iA.default.getCurrentUser();
            return tZ()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        t = (0, SZ.L)(l0.PremiumTypes.TIER_2),
        i = (0, g.bG)([TL.A, eh.A], () => eh.A.getGuild(TL.A.selectedGuildId));
    tZ()(null != i, "guild should not be null");
    let {
            pendingAvatar: n,
            pendingNickname: l,
            pendingBanner: s,
            pendingBio: r,
            pendingPronouns: a,
            pendingThemeColors: o,
            errors: u,
        } = (0, g.cf)([TL.A], () => ({ ...TL.A.getPendingChanges(i.id), errors: TL.A.getErrors(i.id) })),
        d = (0, TY.V7)({ userId: e.id, image: n }),
        c = (0, TZ.EC)(i.id),
        m = (0, g.bG)([TH.Ay], () => (null == i.id ? null : TH.Ay.getMember(i.id, e.id))),
        A = (0, g.bG)([TX.A], () => TX.A.getGuildMemberProfile(e.id, i.id)),
        h = uA.Ay.canUsePremiumProfileCustomization(e),
        S = (0, Tk.z5)(n, m?.avatar),
        T = (0, Tk.Ac)(s, A?.banner),
        x = (0, xD.l)(o, A?.themeColors),
        p = A?.bio ?? "",
        f = A?.pronouns ?? "";
    return (0, E.jsxs)("div", {
        className: xw.Q,
        children: [
            (0, E.jsx)(
                xM,
                {
                    errors: u?.nick ?? c?.nick,
                    username: xL.Ay.getName(e),
                    pendingNick: l,
                    currentNick: m?.nick,
                    user: e,
                    guild: i,
                },
                "nick",
            ),
            (0, E.jsx)(
                xR,
                {
                    sectionTitle: j.intl.string(j.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, T7.p)({ guildId: i.id, pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: f,
                },
                "pronouns",
            ),
            (0, E.jsxs)(xk, {
                user: e,
                showOverlay: !h,
                children: [
                    (0, E.jsx)(
                        xl,
                        {
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t.lqaIxI),
                                    (0, E.jsx)(td.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(us.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xw.a,
                                        }),
                                    }),
                                ],
                            }),
                            showRemoveAvatarButton: S,
                            onAvatarChange: function (e) {
                                if (null != i)
                                    return (0, Tq.rM)(e, m?.avatar, (e) => (0, T7.p)({ guildId: i.id, avatar: e }));
                            },
                            errors: u?.avatar,
                            guildId: i.id,
                            disabled: !h,
                        },
                        "avatar",
                    ),
                    (0, E.jsx)(
                        xe,
                        {
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t["7v0T9P"]),
                                    (0, E.jsx)(td.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(us.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xw.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: e,
                            guild: i,
                        },
                        "decoration",
                    ),
                    !t && (0, E.jsx)(xa, { user: e, guildId: i.id }),
                    (0, E.jsx)(
                        xd,
                        {
                            user: e,
                            guild: i,
                            titleIcon: (0, E.jsx)(td.m, {
                                text: j.intl.string(j.t["5AFxuK"]),
                                children: (0, E.jsx)(us.t, { size: "md", color: "currentColor", className: xw.a }),
                            }),
                        },
                        "nameplate",
                    ),
                    (0, E.jsx)(
                        xh,
                        {
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t.wR5wOo),
                                    (0, E.jsx)(td.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(us.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xw.a,
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
                        xx,
                        {
                            user: e,
                            guild: i,
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t.GWrZOd),
                                    (0, E.jsx)(td.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(us.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xw.a,
                                        }),
                                    }),
                                ],
                            }),
                        },
                        "frame",
                    ),
                    (0, E.jsx)(
                        xg,
                        {
                            showRemoveBannerButton: T,
                            errors: u?.banner,
                            onBannerChange: function (e) {
                                if (null != i)
                                    return (0, Tq.rM)(e, A?.banner, (e) => (0, T7.p)({ guildId: i.id, banner: e }));
                            },
                            guildId: i.id,
                            disabled: !h,
                        },
                        "banner",
                    ),
                    (0, E.jsx)(xO, {
                        user: e,
                        pendingAvatarSrc: d,
                        pendingColors: o,
                        onThemeColorsChange: (e) => (0, T7.p)({ guildId: i.id, themeColors: e }),
                        guildId: i.id,
                        showResetThemeButton: x,
                    }),
                    (0, E.jsx)(
                        T5,
                        {
                            placeholder: j.intl.string(j.t["/7NKgv"]),
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t.ZzAR2Y),
                                    (0, E.jsx)(td.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(us.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xw.a,
                                        }),
                                    }),
                                ],
                            }),
                            onBioChange: (e) => (0, T7.p)({ guildId: i.id, bio: e }),
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
var xB = i(379550);
function xz(e) {
    (0, K.openModalLazy)(async () => {
        let { default: t } = await Promise.all([i.e("41509"), i.e("66901"), i.e("61129")]).then(i.bind(i, 475312));
        return (i) => (0, E.jsx)(t, { source: { ...e, page: U.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...i });
    });
}
function xY(e) {
    let { selectedGuild: t, onGuildChange: i } = e,
        { analyticsLocations: n } = (0, n1.Ay)(e6.A.USER_SETTINGS_GUILD_PROFILE),
        l = (0, g.bG)([iA.default], () => {
            let e = iA.default.getCurrentUser();
            return tZ()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        s = (0, g.bG)([TH.Ay], () => (null != t ? TH.Ay.getMember(t.id, l.id) : null)),
        r = (0, g.bG)([TX.A], () => !TX.A.isFetchingProfile(l.id, t?.id)),
        a = (0, g.bG)([eX.A], () => eX.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, g.cf)([TL.A], () => TL.A.getPendingChanges(t?.id)),
        c = (0, TY.V7)({ userId: l.id, image: o }),
        m = (0, Tk.lw)({
            pendingValue: u,
            userValue: l?.collectibles?.nameplate,
            guildValue: s?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: A } = (0, Tk.B0)(l, t?.id);
    return (S.useEffect(() => () => lm.h.wait(TU.IM), []), a)
        ? (0, E.jsx)(dc.A, {})
        : r
          ? (0, E.jsxs)(n1.f5, {
                value: n,
                children: [
                    (0, E.jsx)(el.E, {
                        variant: "text-sm/normal",
                        children: j.intl.format(j.t["/PTB2E"], {
                            helpCenterLink: ty.A.getArticleURL(U.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(ua.A, { guildId: t.id, onChange: i }),
                                  (0, E.jsx)(TB, {
                                      profilePreviewTitle: (0, E.jsx)(eV.D, {
                                          variant: "heading-md/medium",
                                          className: xB.YV,
                                          children: j.intl.formatToPlainString(j.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, E.jsx)(Tz.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: A,
                                          user: l,
                                          guild: t,
                                          canUsePremiumCustomization: uA.Ay.canUsePremiumProfileCustomization(l),
                                          onUpsellClick: xz,
                                          containerClassName: xB.ti,
                                      }),
                                      nameplatePreview: (0, E.jsx)(TV.A, {
                                          ...d,
                                          pendingDisplayNameStyles: A,
                                          user: l,
                                          guildId: t?.id,
                                          nameplate: m,
                                          className: null == m ? xB.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, E.jsx)(xF, {}),
                                  }),
                              ],
                          })
                        : (0, E.jsx)(TW, {}),
                ],
            })
          : (0, E.jsx)(dm.y, {});
}
var xX = i(903209),
    xH = i(834297);
function xK(e) {
    let { children: t, notice: i } = e;
    return (0, E.jsxs)("div", { className: xH.r, children: [i, (0, E.jsx)("div", { children: t })] });
}
var xW = i(269115),
    xZ = i(823092),
    xq = i(839534),
    xQ = i(379197),
    xJ = i(488430),
    x$ = i(457421),
    x0 = i(940622),
    x1 = i(25176),
    x2 = i(341206);
let x3 = function () {
    let e,
        t,
        i,
        n,
        { analyticsLocations: l } = (0, n1.Ay)(e6.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        s = S.useRef(null),
        {
            asset: r,
            popoutAsset: a,
            title: o,
            body: u,
            version: d,
            revertTextColor: c,
        } = ((e = (0, x0.mb)(x1.RN.UPSELL_BANNER)),
        (t = (0, x0.mb)(x1.RN.UPSELL_BANNER_POPOUT)),
        (i = (0, g.bG)([x$.A], () => x$.A.getMarketingBySurface(xQ.R.EDIT_PROFILE_SETTINGS))),
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
            () => ({ ...n, type: xJ.G.BANNER, asset: e ?? n.asset, popoutAsset: t ?? n.popoutAsset }),
            [e, t, n],
        )),
        { navigateWithValidation: m } = (0, xZ.L_)();
    return (
        S.useEffect(() => {
            G.default.track(U.HAw.PREMIUM_UPSELL_VIEWED, {
                type: l0.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: l,
                version: d,
            });
        }, [l, d]),
        (0, E.jsxs)("div", {
            ref: s,
            className: x2.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, E.jsx)("div", {
                    className: x2.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, E.jsx)("img", { src: a, className: x2.Qw, alt: "" }),
                }),
                (0, E.jsxs)("div", {
                    className: x2.Em,
                    children: [
                        (0, E.jsx)(eV.D, {
                            variant: "heading-lg/extrabold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: x2.DD,
                            children: o,
                        }),
                        (0, E.jsx)(el.E, {
                            variant: "text-sm/normal",
                            color: c ? "text-overlay-dark" : "currentColor",
                            children: u,
                        }),
                    ],
                }),
                (0, E.jsx)(ek.$, {
                    onClick: function () {
                        m(() =>
                            (0, xq.Cz)({
                                analyticsLocations: l,
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
var x5 = i(451909),
    x6 = i(202639),
    x4 = i(400669),
    x8 = i(835071),
    x7 = i(724651),
    x9 = i(732280),
    pe = i(590180),
    pt = i(898461),
    pi = i(207803),
    pn = i(461797);
let pl = Object.keys(pn.jB);
function ps(e) {
    let t = null == e ? pl : pl.filter((t) => t !== e);
    return t[Math.floor(Math.random() * t.length)];
}
var pr = i(764336),
    pa = i(461893);
function po(e) {
    let { preset: t, onShuffle: i } = e,
        n = (0, g.bG)([ni.Ay], () => ni.Ay.useReducedMotion),
        l = (0, pr.Xf)({ useReducedMotion: n }),
        { name: s, header: r } = S.useMemo(() => {
            let e = (0, pn.Wt)(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, E.jsxs)("div", {
        className: pa.kL,
        children: [
            (0, E.jsx)(en.D, {
                onClick: () => {
                    i(), l.startAnimation(!1);
                },
                className: pa.x6,
                "aria-label": j.intl.string(j.t["44yJxh"]),
                children: l.render(),
            }),
            (0, E.jsxs)(en.D, {
                onClick: () => {
                    i(), l.startAnimation(!1);
                },
                "aria-label": `${s}: ${j.intl.string(j.t["44yJxh"])}`,
                className: pa.Lt,
                children: [
                    (0, E.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: pa.L_ }),
                    (0, E.jsx)(el.E, {
                        className: pa._e,
                        variant: "text-sm/bold",
                        color: "text-overlay-light",
                        children: s,
                    }),
                ],
            }),
        ],
    });
}
var pu = i(410516),
    pd = i(811611),
    pc = i(515718),
    pg = i(507553);
function pm(e, t) {
    let i = pg.A.useField("scrollPosition"),
        n = (0, g.bG)([ni.Ay], () => ni.Ay.useReducedMotion);
    (0, S.useEffect)(() => {
        let l = e.current;
        if (null == l || i !== t) return;
        let s = requestAnimationFrame(() => {
            l.scrollIntoView({ behavior: n ? "auto" : "smooth" }), pg.A.setState({ scrollPosition: null });
        });
        return () => cancelAnimationFrame(s);
    }, [e, t, i, n]);
}
var pA = i(844222),
    ph = i(4542);
function pE(e) {
    let { user: t } = e,
        { reducedMotion: n } = S.useContext(pA.C),
        {
            pendingAvatar: l,
            pendingBanner: s,
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
        } = (0, g.cf)([TL.A], () => {
            let e = TL.A.getPendingChanges(),
                t = TL.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        p = (0, TY.V7)({ userId: t.id, image: A ?? l });
    return (0, E.jsx)(Tz.A, {
        user: t,
        pendingPronouns: d,
        pendingBio: c,
        pendingBanner: h ?? s ?? i(636763),
        pendingDisplayNameStyles: x ?? o,
        pendingAvatar: p,
        pendingThemeColors: m ?? u,
        pendingAvatarDecoration: void 0 !== T ? T : r,
        pendingProfileEffect: a,
        avatarClassName: null != A || null != l || n.enabled ? void 0 : ph.WX,
        containerClassName: ph.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var pS = i(530702);
function pT(e) {
    let { user: t, isVisible: i, shouldShow: n } = e,
        l = uA.Ay.isPremium(t),
        s = uA.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, g.cf)([TL.A], () => {
            let e = TL.A.getPendingChanges(),
                t = TL.A.getErrors(),
                i = TL.A.getTryItOutChanges();
            return { ...e, ...i, errors: t };
        }),
        { preset: c, onShuffle: m } = (function () {
            let e = (0, g.bG)([ni.Ay], () => ni.Ay.useReducedMotion),
                [t, i] = (0, S.useState)(ps()),
                {
                    banner: n,
                    themeColors: l,
                    avatarDecorationSkuId: s,
                    displayNameStyles: r,
                } = (0, S.useMemo)(() => {
                    let i = (0, pn.Wt)(t);
                    return {
                        banner: i.getBannerSrc(e),
                        themeColors: i.themeColors,
                        avatarDecorationSkuId: i.avatarDecorationSkuId,
                        displayNameStyles: i.displayNameStyles,
                    };
                }, [t, e]),
                a = (0, g.bG)([pe.A], () => {
                    let e = pe.A.getProduct(s);
                    return (0, pt.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, S.useEffect)(() => {
                (0, pi.w5)({ banner: n, themeColors: l, avatarDecoration: a, displayNameStyles: r });
            }, [n, l, a, r]);
            let o = (0, S.useCallback)(() => {
                let e = ps(t);
                i(e), G.default.track(U.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: e });
            }, [t]);
            return { preset: t, onShuffle: o };
        })(),
        A = S.useRef(null);
    pm(A, nH._F.TRY_IT_OUT);
    let { analyticsLocations: h, sourceAnalyticsLocations: T } = (0, n1.Ay)(e6.A.USER_SETTINGS_TRY_OUT_PREMIUM);
    function x(e) {
        e &&
            (d?.startsWith("https:") === !0
                ? fetch(d)
                      .then((e) => e.blob())
                      .then((e) => (0, pc.We)(e))
                      .then((e) => {
                          (0, T7.p)({ avatar: u, themeColors: o, banner: e });
                      })
                      .catch(() => {
                          (0, T7.p)({ avatar: u, themeColors: o });
                      })
                : null != d
                  ? (0, T7.p)({ avatar: u, themeColors: o, banner: d })
                  : (0, T7.p)({ avatar: u, themeColors: o }),
            G.default.track(U.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
    }
    S.useEffect(() => {
        i &&
            G.default.track(U.HAw.PREMIUM_UPSELL_VIEWED, {
                type: l0.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: U.liQ.USER_SETTINGS },
                location_stack: T,
            });
    }, [T, t, i]);
    let p = (0, x9.V)()?.subscription_trial?.sku_id === l0.pe.TIER_2,
        f = (0, x7.O)(),
        N = (0, pu.U9)(f, l0.pe.TIER_2);
    return n
        ? (0, E.jsx)(n1.f5, {
              value: h,
              children: (0, E.jsxs)(cC.A, {
                  ref: A,
                  className: pS.MT,
                  type: cC.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, E.jsx)(TB, {
                          stickyPreview: !1,
                          layoutClassName: pS.th,
                          profilePreviewTitle: (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(us.t, { size: "md", color: "currentColor", className: pS.PC }),
                                  j.intl.string(j.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, E.jsxs)(E.Fragment, {
                              children: [(0, E.jsx)(po, { preset: c, onShuffle: m }), (0, E.jsx)(pE, { user: t })],
                          }),
                          children: (0, E.jsxs)("div", {
                              children: [
                                  (0, E.jsxs)("div", {
                                      children: [
                                          (0, E.jsx)(eV.D, {
                                              variant: "heading-xl/extrabold",
                                              children: j.intl.string(j.t["2zGdAW"]),
                                          }),
                                          (0, E.jsx)(el.E, {
                                              className: pS.h_,
                                              variant: "text-sm/normal",
                                              children: j.intl.string(j.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, E.jsx)(xO, {
                                      className: pS.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, TY.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: pi.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, E.jsx)(xg, {
                                      className: pS.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: pi.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !s &&
                                      (0, E.jsx)(xl, {
                                          className: pS.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: pi.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: j.intl.string(j.t["7z0D1c"]),
                                          sectionTitle: j.intl.string(j.t.vtFfPX),
                                      }),
                                  (0, E.jsx)(xa, { user: t, className: pS.fz }),
                                  !p &&
                                      (0, E.jsx)(el.E, {
                                          variant: "text-sm/normal",
                                          children: j.intl.string(j.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !p &&
                          (0, E.jsx)(x6.d, {
                              onSubscribeModalClose: x,
                              className: pS.Kv,
                              showUpsell: !0,
                              text: j.intl.format(j.t.TmfgI2, {
                                  onClick: () => {
                                      (0, x8.K)({ onSubscribeFinish: x });
                                  },
                              }),
                              button: l
                                  ? j.intl.string(j.t.AfRWI8)
                                  : N
                                    ? j.intl.formatToPlainString(j.t.bkQ4bH, { percent: f?.discount.amount })
                                    : j.intl.string(j.t.pj0XBN),
                              position: "inline",
                          }),
                      p &&
                          (0, E.jsxs)("div", {
                              children: [
                                  (0, E.jsx)("div", { className: pS.BU }),
                                  (0, E.jsx)(pd.Ay, {
                                      type: l0.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: l0.pe.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
var px = i(814390),
    pp = i(909536),
    pf = i(843282),
    pN = i(145497),
    p_ = i(685073),
    pI = i(534400),
    pC = i(581781),
    pb = i(743981),
    pv = i(217510);
let py = (0, lJ.Ld)(),
    pj = S.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: i, onChange: n } = e,
            l = S.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            s = (0, g.bG)([iA.default], () => (0, p_.Zo)(iA.default.getCurrentUser()?.primaryGuild).guildId),
            r = void 0 !== i ? i : s,
            a = S.useMemo(
                () => t.reduce((e, t) => (t.profile?.tag != null && e.push({ label: t.name, value: t.id }), e), []),
                [t],
            ),
            o = S.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = l.get(e.value);
                    if (null == t) return null;
                    let i = t.profile?.tag;
                    return null == i
                        ? null
                        : (0, E.jsx)(pC.A, {
                              guildTag: i,
                              guildBadge: t.profile?.badge ?? void 0,
                              guildId: t.id,
                              guildName: e.label,
                              guildIcon: t.icon,
                              guildIconSize: 32,
                          });
                },
                [l],
            ),
            u = S.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = l.get(e.value);
                    return null == t || null == t.profile?.tag
                        ? null
                        : (0, E.jsx)(pN.j, {
                              guildId: t.id,
                              guildName: t.name,
                              guildIcon: t.icon,
                              iconSize: 32,
                              animate: !1,
                          });
                },
                [l],
            ),
            d = S.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = l.get(e.value);
                    if (null == t) return null;
                    let i = t.profile?.tag;
                    return null == i
                        ? null
                        : (0, E.jsx)(pI.o9, {
                              guildId: t.id,
                              guildTag: i,
                              guildBadge: t.profile?.badge ?? void 0,
                              badgeSize: pb.Sl.SIZE_16,
                              textColor: "interactive-text-default",
                              textVariant: "text-sm/semibold",
                          });
                },
                [l],
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
            pm(x, nH._F.GUILD_TAG),
            (0, E.jsxs)(uo.A, {
                title: j.intl.string(j.t.Pdd1nd),
                titleId: py,
                ref: x,
                children: [
                    (0, E.jsx)(el.E, {
                        className: pv.VA,
                        variant: "text-sm/normal",
                        children: j.intl.string(j.t.mlZ6Jx),
                    }),
                    (0, E.jsx)(pf.Pw, {
                        className: pv.Lt,
                        optionClassName: pv.S0,
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
var pO = i(318785),
    pR = i(992526),
    pL = i(470739);
let pD = function () {
    return (0, pR.J9)({ location: "UserSettingsProfileCustomization" })
        ? (0, E.jsx)(uo.A, {
              title: j.intl.string(j.t.l6w3Vj),
              description: j.intl.string(j.t.joHqdj),
              children: (0, E.jsx)(ek.$, {
                  text: j.intl.string(j.t.wRraFx),
                  onClick: () => {
                      (0, pL._)();
                  },
                  size: "sm",
              }),
          })
        : null;
};
var pP = i(182817);
let pG = (0, lJ.Ld)();
function pM(e) {
    let t = (0, SZ.L)(l0.PremiumTypes.TIER_2);
    return (0, E.jsxs)(uo.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: j.intl.string(j.t["9AjdkD"]),
        titleId: pG,
        children: [
            (0, E.jsx)("div", {
                children: (0, E.jsx)(rZ.k, {
                    "aria-labelledby": pG,
                    placeholder: e.placeholder,
                    maxLength: U.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, E.jsx)(xa, { user: e.user, className: pP.F }),
        ],
    });
}
var pU = i(273151);
function pV(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: i } = e,
        n = L.m$.useSetting(),
        l = void 0 !== i ? i : n;
    return (0, E.jsx)("div", {
        className: pU.u,
        children: (0, E.jsx)(J.d, {
            label: j.intl.string(j.t["3cWDuO"]),
            description: l ? null : j.intl.formatToPlainString(j.t.aYhclf, { username: t }),
            checked: !l,
            onChange: (e) => {
                !e === n ? (0, TO._e)() : (0, T7.p)({ legacyUsernameDisabled: !e });
            },
        }),
    });
}
function pk(e) {
    let { user: t, savedUserColor: i, pendingColor: n, setPendingAccentColor: l } = e,
        s = t.getAvatarURL(null, 80),
        r = (0, xp.r)(er.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, xf.rh)(s, r, !1),
        o = (0, xI.LX)(a[0]);
    return (0, E.jsx)(uo.A, {
        title: j.intl.string(j.t["/X3fkf"]),
        children: (0, E.jsx)(xy, { onChange: (e) => l(e), color: n ?? i ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var pw = i(518477);
let pF = function () {
    let e = (0, g.bG)([cU.default], () => cU.default.getId());
    return (0, E.jsx)(uo.A, {
        title: j.intl.string(j.t.Jzj9q4),
        children: (0, E.jsx)(ek.$, {
            text: j.intl.string(j.t.Geikwq),
            onClick: () => {
                (0, TG.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [e6.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: pw.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var pB = i(577997);
function pz() {
    let e = (0, g.bG)([iA.default], () => {
            let e = iA.default.getCurrentUser();
            return tZ()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e;
        }),
        t = (0, g.bG)([TX.A], () => TX.A.getUserProfile(e.id)),
        {
            pendingAvatar: i,
            pendingGlobalName: n,
            pendingBanner: l,
            pendingBio: s,
            pendingPronouns: r,
            pendingAccentColor: a,
            pendingThemeColors: o,
            pendingLegacyUsernameDisabled: u,
            pendingPrimaryGuildId: d,
            errors: c,
        } = (0, g.cf)([TL.A], () => {
            let e = TL.A.getPendingChanges(),
                t = TL.A.getErrors();
            return { ...e, errors: t };
        }),
        m = (0, TY.V7)({ userId: e.id, image: i }),
        A = (0, TZ.EC)(),
        h = uA.Ay.canUsePremiumProfileCustomization(e),
        S = (0, Tk.z5)(i, e.avatar),
        T = (0, Tk.Ac)(l, t?.banner),
        x = (0, xN.Ay)(e.id),
        p = x?.getLegacyUsername(),
        f = (c.global_name?.length ?? 0) > 0 ? c.global_name : (A?.nick ?? []),
        N = (c.bio?.length ?? 0) > 0 ? c.bio : (A?.bio ?? []),
        _ = (0, pO.b)();
    return (0, E.jsxs)("div", {
        className: pB.Q,
        children: [
            (0, E.jsx)(pM, {
                placeholder: e.username,
                errors: f,
                currentGlobalName: e.globalName,
                pendingGlobalName: n,
                onGlobalNameChange: (e) => (0, T7.p)({ globalName: e }),
                user: e,
            }),
            (0, E.jsx)(
                xR,
                {
                    sectionTitle: j.intl.string(j.t["+T3RI/"]),
                    errors: c.pronouns,
                    onPronounsChange: (e) => (0, T7.p)({ pronouns: e }),
                    pendingPronouns: r,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, E.jsx)(pF, {}),
            (0, E.jsx)(
                xl,
                {
                    onAvatarChange: (e) => {
                        (0, T7.p)({ avatar: e }), (0, Tk.WU)(null == e ? "remove" : "set");
                    },
                    showRemoveAvatarButton: S,
                    errors: c.avatar,
                    sectionTitle: j.intl.string(j.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, E.jsx)(xe, { user: e, sectionTitle: j.intl.string(j.t["7v0T9P"]) }, "decoration"),
            (0, E.jsx)(xd, { user: e }),
            (0, E.jsx)(xh, { user: e, sectionTitle: j.intl.string(j.t.wR5wOo) }, "effect"),
            (0, E.jsx)(xx, { user: e, sectionTitle: j.intl.string(j.t.GWrZOd) }, "frame"),
            h
                ? (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsx)(
                              xg,
                              {
                                  showRemoveBannerButton: T,
                                  errors: c.banner,
                                  onBannerChange: (e) => (0, T7.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, E.jsx)(xO, {
                              user: e,
                              pendingAvatarSrc: m,
                              pendingColors: o,
                              onThemeColorsChange: (e) => (0, T7.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, E.jsx)(
                      pk,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: a,
                          setPendingAccentColor: (e) => (0, T7.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, E.jsx)(
                T5,
                {
                    sectionTitle: j.intl.string(j.t.ZzAR2Y),
                    errors: N,
                    onBioChange: (e) => (0, T7.p)({ bio: e }),
                    pendingBio: s,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            _.length > 0 &&
                (0, E.jsx)(pj, {
                    availablePrimaryGuilds: _,
                    pendingPrimaryGuildId: d,
                    onChange: (e) => (0, T7.p)({ primaryGuildId: e }),
                }),
            null != p && (0, E.jsx)(pV, { legacyUsername: p, pendingLegacyUsernameDisabled: u }, "legacy_username"),
            (0, E.jsx)(pD, {}, "badges"),
        ],
    });
}
function pY() {
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
var pX = i(157723);
function pH() {
    let e = (0, g.bG)([iA.default], () => {
            let e = iA.default.getCurrentUser();
            return tZ()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        t = (0, g.bG)([eX.A], () => eX.A.hidePersonalInformation),
        {
            pendingBio: i,
            pendingAvatar: n,
            pendingNameplate: l,
            showNotice: s,
            ...r
        } = (0, g.cf)([TL.A], () => ({ ...TL.A.getPendingChanges(), showNotice: TL.A.showNotice() })),
        a = (0, TY.V7)({ userId: e.id, image: n }),
        o = (0, Tk.lw)({ pendingValue: l, userValue: e?.collectibles?.nameplate }),
        u = (0, px.A)() && null != i ? x5.Ay.parse(void 0, i).content : i,
        d = uA.Ay.canUsePremiumProfileCustomization(e),
        c = (0, pp.St)("edit-profile-upsell"),
        { analyticsLocations: m } = (0, n1.Ay)(e6.A.USER_SETTINGS_USER_PROFILE);
    S.useEffect(() => () => lm.h.wait(TO.IM), []);
    let [A, h] = S.useState(!1),
        T = !d,
        x = S.useRef(null);
    return t
        ? (0, E.jsx)(dc.A, {})
        : (0, E.jsxs)(n1.f5, {
              value: m,
              children: [
                  (0, E.jsx)(x3, {}),
                  (0, E.jsx)(TB, {
                      profilePreview: (0, E.jsx)(Tz.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: pY,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: pX.ti,
                      }),
                      nameplatePreview: (0, E.jsx)(TV.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? pX.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, E.jsx)(pz, {}),
                  }),
                  (0, E.jsx)(xW.L, {
                      innerRef: x,
                      onChange: (e) => h(e),
                      threshold: 0.25,
                      active: T,
                      children: (0, E.jsx)("div", {
                          ref: x,
                          children: (0, E.jsx)(pT, { user: e, shouldShow: T, isVisible: A }),
                      }),
                  }),
                  T &&
                      !s &&
                      (0, E.jsx)(x6.d, {
                          className: pX.EL,
                          showUpsell: !A,
                          text: j.intl.format(j.t.TmfgI2, { onClick: () => (0, x8.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: c
                              ? (0, E.jsx)(x4.l, { size: "md", location: e6.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL })
                              : void 0,
                          button: (0, E.jsx)("div", {
                              className: pX.Xl,
                              children: (0, E.jsx)(ek.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      G.default.track(U.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          x?.current?.scrollIntoView({ behavior: "smooth" });
                                  },
                                  text: j.intl.string(j.t.uw9zI7),
                                  icon: us.t,
                              }),
                          }),
                      }),
              ],
          });
}
var pK = i(625494);
i(46121);
var pW = i(521078);
let pZ = { [nH.Eq.USER_PROFILE]: "main_profile_tab", [nH.Eq.GUILD]: "guild_profile_tab" },
    pq = (0, a.E2)(u.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, g.bG)([l9.A, eE.Ay, TL.A], () => {
                    let e = TL.A.selectedGuildId ?? l9.A.getGuildId();
                    return null == e || TL._.has(e) ? eE.Ay.getFlattenedGuildIds().find((e) => !TL._.has(e)) : e;
                }),
                t = (0, g.bG)([eh.A], () => eh.A.getGuild(e)),
                i = (0, g.bG)([TL.A], () => TL.A.showNotice()),
                n = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()),
                l = pg.A.useField("subsection");
            return (
                S.useEffect(() => {
                    (0, s4._)(pZ[l]);
                }, [l]),
                S.useEffect(() => {
                    null != n && t?.id != null && (0, xX.A)(n.id, n.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, n]),
                (0, E.jsx)(xK, {
                    children: (0, E.jsxs)(c2.F, {
                        component: (0, E.jsx)(eo.A, {
                            children: (0, E.jsx)(eV.D, {
                                variant: "heading-xl/normal",
                                children: j.intl.string(j.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, E.jsxs)(TM.V, {
                                className: pW.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: l,
                                onItemSelect: function (e) {
                                    if (l !== e) {
                                        if (i) {
                                            (0, s8.fO)({ duration: 300, intensity: 1.4 }),
                                                pK._.dispatch(U.jej.EMPHASIZE_NOTICE);
                                            return;
                                        }
                                        e === nH.Eq.GUILD && null != t && (0, TU.V2)(t.id),
                                            pg.A.setState({ subsection: e });
                                    }
                                },
                                children: [
                                    (0, E.jsx)(
                                        TM.V.Item,
                                        {
                                            className: pW.YU,
                                            id: nH.Eq.USER_PROFILE,
                                            children: j.intl.string(j.t["2p07FR"]),
                                        },
                                        nH.Eq.USER_PROFILE,
                                    ),
                                    (0, E.jsx)(
                                        TM.V.Item,
                                        {
                                            className: e7()(pW.YU, pW.HY),
                                            "aria-label": j.intl.string(j.t.kPHroX),
                                            id: nH.Eq.GUILD,
                                            children: j.intl.string(j.t.kPHroX),
                                        },
                                        nH.Eq.GUILD,
                                    ),
                                ],
                            }),
                            l === nH.Eq.GUILD
                                ? (0, E.jsx)(xY, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (i) {
                                              (0, s8.fO)({ duration: 300, intensity: 1.4 }),
                                                  pK._.dispatch(U.jej.EMPHASIZE_NOTICE);
                                              return;
                                          }
                                          null != e && (0, TU.JJ)(e.id);
                                      },
                                  })
                                : (0, E.jsx)(pH, {}),
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
    pQ = (0, a.zZ)(u.X.PROFILE_CATEGORY, { buildLayout: () => [pq] });
var pJ = i(938706);
function p$() {
    let e = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: i } = (0, TP.A)({ userId: e?.id, size: nt._3.SIZE_48 });
    return null == e
        ? null
        : (0, E.jsxs)("div", {
              className: pJ.a5,
              children: [
                  (0, E.jsx)(ne.eu, {
                      src: t,
                      avatarDecoration: i,
                      size: nt._3.SIZE_48,
                      "aria-label": j.intl.string(j.t.lqaIxI),
                  }),
                  (0, E.jsxs)("div", {
                      className: pJ.FS,
                      children: [
                          (0, E.jsx)(el.E, {
                              color: "text-strong",
                              variant: "text-md/medium",
                              lineClamp: 1,
                              children: e.globalName ?? e.username,
                          }),
                          (0, E.jsxs)("div", {
                              className: pJ.Fk,
                              children: [
                                  (0, E.jsx)(el.E, {
                                      variant: "text-sm/normal",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: j.intl.string(j.t.Ip9nBS),
                                  }),
                                  (0, E.jsx)(um.R, { size: "xxs", color: "currentColor" }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
let p0 = (0, a.t_)(u.X.PROFILE_PANEL, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        notice: { stores: [TL.A], element: TR.A },
        initialize: () => () =>
            lm.h.wait(() => {
                (0, TO.F7)();
            }),
        buildLayout: () => [pQ],
    }),
    p1 = (0, a.i4)(u.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        icon: p3,
        StronglyDiscouragedCustomComponent: p$,
        usePredicate: () => !(0, TD.X)("user_settings_sidebar"),
        buildLayout: () => [p0],
    }),
    p2 = (0, a.i4)(u.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        icon: p3,
        StronglyDiscouragedCustomComponent: p$,
        usePredicate: () => (0, TD.X)("user_settings_sidebar"),
        onClick: () => {
            let e = cU.default.getId();
            (0, TG.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function p3() {
    let e = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: i } = (0, TP.A)({ userId: e?.id, size: nt._3.SIZE_48 });
    return (0, E.jsx)(ne.eu, { src: t, avatarDecoration: i, size: nt._3.SIZE_20, "aria-hidden": !0 });
}
let p5 = (0, a.WI)(u.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [p1, p2] });
var p6 = i(98207),
    p4 = (i(204925), i(818348));
let p8 = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, K.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([i.e("69757"), i.e("19623"), i.e("21007")]).then(i.bind(i, 888363));
            return (i) => (0, E.jsx)(t, { claimRequired: e, ...i });
        },
        { onCloseRequest: e ? p4.tE : null, onCloseCallback: t },
    );
};
var p7 = i(940856),
    p9 = i(36149),
    fe = i(207560);
function ft(e) {
    let t = (0, fe.fk)(),
        i = (0, p9.b8)(),
        n = (0, p9.yM)(),
        l = (0, p9.Y2)();
    if (!t) return !1;
    let s = !i || n;
    switch (e) {
        case "verify":
            return s;
        case "edit":
            return !s && l;
        case "info":
            return !s && !l;
        default:
            return !1;
    }
}
var fi = i(516761);
function fn() {
    let e = j.intl.string(j.t.XxRj7f);
    return (0, E.jsxs)(el.E, {
        variant: "text-md/medium",
        children: [
            `${e} \u{2022} `,
            j.intl.format(fi.default.WM5adV, {
                handleOnHelpUrlHook: function () {
                    return window.open(ty.A.getArticleURL(U.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank");
                },
            }),
        ],
    });
}
let fl = (0, a.Tf)(u.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, {
        usePredicate: () => ft("edit"),
        useTitle: () => j.intl.string(j.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({
            type: h.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: fn,
        }),
        useLabel: () => j.intl.string(j.t.bt75uw),
        onClick: function () {
            (0, K.openModalLazy)(async () => {
                let { default: e } = await i.e("45361").then(i.bind(i, 151080));
                return (t) => (0, E.jsx)(e, { ...t });
            });
        },
    }),
    fs = (0, a.E2)(u.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, {
        usePredicate: () => ft("info"),
        useSearchTerms: () => [j.intl.string(j.t["/52UYy"])],
        Component: function () {
            return (0, E.jsx)(l8.D, {
                label: j.intl.string(j.t["/52UYy"]),
                layout: "horizontal",
                children: (0, E.jsxs)(Q.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "end",
                    gap: "md",
                    children: [
                        (0, E.jsx)(el.E, { variant: "text-md/medium", children: j.intl.string(j.t.XxRj7f) }),
                        (0, E.jsx)("div", {
                            style: { visibility: "hidden" },
                            children: (0, E.jsx)(ek.$, {
                                onClick: p4.tE,
                                text: j.intl.string(j.t.bt75uw),
                                "aria-hidden": !0,
                            }),
                        }),
                    ],
                }),
            });
        },
    });
var fr = i(31720),
    fa = i(847599);
let fo = (0, a.Tf)(u.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, {
        usePredicate: () => ft("verify"),
        useTitle: () => j.intl.string(j.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({
            type: h.fq.TEXT,
            text: (0, p9.yM)() ? j.intl.string(j.t.sK0dmH) : j.intl.string(j.t.lKDPGA),
        }),
        useLabel: function () {
            return (0, p9.yM)() ? j.intl.string(j.t["9KiIz6"]) : j.intl.string(j.t.DVywUB);
        },
        onClick: () => fr.A.showAgeVerificationGetStartedModal({ entryPoint: fa.q1.ACCOUNT_AGE_GROUP }),
    }),
    fu = (0, a.Tf)(u.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, g.bG)([iA.default], () => iA.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => j.intl.string(j.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({ type: h.fq.TEXT, text: j.intl.string(j.t.qxk9zo) }),
        useLabel: () => j.intl.string(j.t.BleMPB),
        onClick: () => p8(),
    });
function fd(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function fc(e) {
    let [t, i] = e.split("@");
    return `${"*".repeat(t.length)}@${i}`;
}
function fg(e) {
    let { text: t, censor: i, revealLabel: n, hideLabel: l, redesign: s = !1 } = e,
        [r, a] = S.useState(!1),
        o = r ? t : i(t);
    return (0, E.jsxs)(Q.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        justify: s ? "end" : "start",
        children: [
            s ? (0, E.jsx)(el.E, { variant: "text-md/medium", children: o }) : o,
            (0, E.jsx)(ea.Q, {
                variant: "primary",
                textVariant: s ? "text-md/medium" : "text-sm/medium",
                "aria-label": r ? l : n,
                onClick: () => a(!r),
                text: r ? j.intl.string(j.t.fgq1gs) : j.intl.string(j.t.dcztdU),
            }),
        ],
    });
}
function fm() {
    let e = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()?.email);
    return null == e
        ? (0, E.jsx)(el.E, { variant: "text-md/medium", children: j.intl.string(j.t["8SfTN/"]) })
        : (0, E.jsx)(fg, {
              text: e,
              censor: fc,
              revealLabel: j.intl.string(j.t["Zvx+yV"]),
              hideLabel: j.intl.string(j.t.nqTD4d),
              redesign: !0,
          });
}
let fA = (0, a.Tf)(u.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, g.bG)([iA.default], () => iA.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => j.intl.string(j.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: h.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: fm }),
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
var fh = i(557722),
    fE = i(53516);
function fS() {
    let e = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, E.jsx)(el.E, { variant: "text-md/medium", children: j.intl.string(j.t.I5kDqj) })
        : (0, E.jsx)(Q.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, E.jsx)(fg, {
                  text: t,
                  censor: fd,
                  revealLabel: j.intl.string(j.t.eY3xlT),
                  hideLabel: j.intl.string(j.t["jllbv+"]),
                  redesign: !0,
              }),
          });
}
let fT = (0, a.Tf)(u.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, g.bG)([iA.default], () => iA.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => j.intl.string(j.t.kerONq),
    useAriaLabel: function () {
        return null == (0, g.bG)([iA.default], () => iA.default.getCurrentUser()?.phone)
            ? j.intl.string(j.t["SfUuE+"])
            : j.intl.string(j.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: h.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: fS }),
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
                      return (t) => (0, E.jsx)(e, { reason: fh.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: fE.V },
              )
            : (0, K.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([i.e("55682"), i.e("40933")]).then(i.bind(i, 660740));
                  return (t) => (0, E.jsx)(e, { ...t });
              });
    },
});
function fx() {
    let e = (0, g.bG)([iA.default], () => iA.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function fp() {
    let e = (0, TZ.EC)(),
        t = e?.nick?.[0] ?? null,
        i = (0, g.bG)([iA.default], () => iA.default.getCurrentUser());
    if (null == i) return null;
    let n = i.hasUniqueUsername() ? i.username : `${i.username}#${i.discriminator}`;
    return (0, E.jsxs)(E.Fragment, {
        children: [
            (0, E.jsx)(el.E, { variant: "text-md/medium", children: n }),
            null != t &&
                (0, E.jsx)(td.m, {
                    __unsupportedReactNodeAsText: t,
                    "aria-label": !1,
                    children: (0, E.jsx)(rV.E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: er.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let ff = (0, a.Tf)(u.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => j.intl.string(j.t.qqhR3L),
        useTrailingDecoration: () => ({
            type: h.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: fp,
        }),
        useLabel: () => j.intl.string(j.t.bt75uw),
        useAriaLabel: () => j.intl.string(j.t.JECa91),
        useSubtitle: () => (fx() ? j.intl.string(j.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: fx,
        onClick: function () {
            (0, K.openModalLazy)(async () => {
                let { default: e } = await Promise.all([i.e("80032"), i.e("20429"), i.e("43350")]).then(
                    i.bind(i, 667792),
                );
                return (t) => (0, E.jsx)(e, { ...t });
            });
        },
    }),
    fN = (0, a.zZ)(u.X.ACCOUNT_INFO_CATEGORY, {
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
                            button: { text: j.intl.string(j.t.lm1UKt), onClick: () => (0, p7.S)(e) },
                        }
                  : {
                        type: h.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        title: j.intl.string(j.t["/3qnL/"]),
                        text: j.intl.string(j.t.qKs3vg),
                        button: { text: j.intl.string(j.t["7psymi"]), onClick: () => p8() },
                    };
        },
        buildLayout: () => [ff, fu, fA, fT, fo, fl, fs],
    });
var f_ = i(398177);
let fI = (0, a.Tf)(u.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
    useTitle: () => j.intl.string(j.t["CIGa+7"]),
    useLabel: () => j.intl.string(j.t.bt75uw),
    useAriaLabel: () => j.intl.string(j.t["FRep5/"]),
    useVariant: () => "secondary",
    onClick: () => {
        (0, K.openModal)((e) => (0, E.jsx)(f_.default, { ...e, onSuccess: () => e.onClose() }));
    },
});
var fC = i(200921);
let fb = [];
function fv() {
    fb = [];
}
class fy extends g.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return fb;
    }
}
let fj = new fy(lm.h, {
    LOGOUT: fv,
    LOGIN_SUCCESS: fv,
    FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessions: t } = e;
        fb = t.map((e) => ({ ...e, approx_last_used_time: new Date(e.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessionIdHashes: t } = e,
            i = [...fb],
            n = !1;
        for (let e of t) {
            let t = i.findIndex((t) => t.id_hash === e);
            t >= 0 && (i.splice(t, 1), (n = !0));
        }
        if (!n) return !1;
        fb = i;
    },
});
function fO() {
    let e = (0, g.cf)([fj], () => fj.getSessions());
    return S.useMemo(() => {
        let t = [...e],
            i = null,
            n = cU.default.getAuthSessionIdHash();
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
function fR(e) {
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? j.intl.string(j.t.TXCmfL) : rl()(e).fromNow();
}
var fL = i(176524),
    fD = i(646270),
    fP = i(738678),
    fG = i(53061);
function fM(e) {
    let { icon: t, label: i, subLabel: n, description: l, children: s, muted: r } = e;
    return (0, E.jsxs)(Q.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, E.jsx)(fL.A, { icon: t, color: r ? er.A.colors.ICON_MUTED : "currentColor" }),
            (0, E.jsxs)(Q.B, {
                direction: "vertical",
                gap: "xxs",
                children: [
                    (0, E.jsxs)(Q.B, {
                        direction: "horizontal",
                        gap: "xs",
                        children: [
                            (0, E.jsx)(el.E, { variant: "text-md/semibold", color: "text-strong", children: i }),
                            null != i &&
                                null != n &&
                                (0, E.jsx)(el.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    "aria-hidden": !0,
                                    children: "\u2022",
                                }),
                            null != n &&
                                (0, E.jsx)(el.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                        ],
                    }),
                    (0, E.jsx)(el.E, { variant: "text-sm/normal", color: "text-muted", children: l }),
                ],
            }),
            s,
        ],
    });
}
function fU(e) {
    let { session: t, current: i } = e,
        {
            location: n,
            platform: l,
            os: s,
            Icon: r,
            lastActive: a,
        } = (function (e, t) {
            let i = e.client_info?.location ?? e.client_info?.ip,
                n = e.client_info?.platform,
                { text: l, icon: s } = (function (e) {
                    switch (e?.toLowerCase().trim()) {
                        case null:
                        case void 0:
                        case "":
                            return { text: j.intl.string(j.t.cDHCNY), icon: tg.k };
                        case "ios":
                        case "android":
                            return { text: e, icon: fD.u };
                        case "horizon os":
                            return { text: e, icon: fP.G };
                        default:
                            return { text: e, icon: tg.k };
                    }
                })(e.client_info?.os);
            return { location: i, platform: n, os: l, Icon: s, lastActive: t ? null : fR(e.approx_last_used_time) };
        })(t, i),
        o = [n, a].filter(N.Vq);
    return (0, E.jsx)(fM, {
        icon: r,
        label: s,
        subLabel: l,
        description: o.join(" \xb7 "),
        children:
            !i &&
            (0, E.jsx)(en.D, {
                className: fG.X,
                onClick: () => (0, fC.U0)(t.id_hash),
                "aria-label": j.intl.string(j.t.E4MJNt),
                children: (0, E.jsx)(gk.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function fV(e) {
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
let fk = (0, a.E2)(u.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            let { currentSession: e } = fO();
            return null == e
                ? (0, E.jsx)(dm.y, {})
                : (0, E.jsx)(fV, {
                      title: j.intl.string(j.t.LLS19o),
                      children: (0, E.jsx)(fU, { session: e, current: !0 }),
                  });
        },
        useSearchTerms: () => [],
    }),
    fw = (0, a.E2)(u.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = fO();
            return (0, E.jsx)(l8.D, {
                label: j.intl.string(j.t.Vij32M),
                description: j.intl.string(j.t.OTXyaf),
                children: (0, E.jsx)(ek.$, {
                    onClick: () => (0, fC.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: j.intl.string(j.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [j.intl.string(j.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = fO();
            return e.length > 0;
        },
    });
var fF = i(766928);
function fB() {
    return (0, E.jsx)(fM, {
        icon: fF.W,
        label: j.intl.string(j.t.iUa0sn),
        description: j.intl.format(j.t["044+8i"], {
            onClick: () =>
                (0, eq.openUserSettings)(u.X.ACCOUNT_PANEL, { analyticsLocations: [e6.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
let fz = (0, a.E2)(u.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = fO(),
                t = (0, g.bG)([iA.default], () => iA.default.getCurrentUser());
            return (0, E.jsxs)(fV, {
                title: j.intl.string(j.t.xx1MWc),
                children: [
                    e.map((e) => (0, E.jsx)(fU, { session: e }, e.id_hash)),
                    t?.mfaEnabled ? null : (0, E.jsx)(fB, {}),
                ],
            });
        },
        useSearchTerms: () => [j.intl.string(j.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = fO(),
                t = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    fY = (0, a.zZ)(u.X.SESSIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.mEndXM),
        useSubtitle: () => j.intl.string(j.t.b7ZpTM),
        initialize: () => {
            (0, fC.GY)();
        },
        buildLayout: () => [fk, fz, fw],
        useSearchTerms: () => [
            j.intl.string(j.t["+1h0k/"]),
            j.intl.string(j.t.LLS19o),
            j.intl.string(j.t.xx1MWc),
            j.intl.string(j.t.lSWsrd),
        ],
    }),
    fX = (0, a.t_)(u.X.SESSIONS_PANEL, {
        useTitle: () => j.intl.string(j.t.mEndXM),
        useObscuredNotice: dc.L,
        buildLayout: () => [fY],
    }),
    fH = (0, a.t0)(u.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [fX],
        initialize: () => {
            (0, fC.GY)();
        },
        useTrailingDecoration: () => {
            let { currentSession: e, otherSessions: t } = fO(),
                i = t.length + +(null != e);
            return {
                type: h.xn.TEXT,
                text: i > 0 ? j.intl.formatToPlainString(j.t.G7zwOk, { count: i }) : j.intl.string(j.t.MKDeyL),
            };
        },
    });
var fK = i(464477);
function fW(e) {
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
function fZ() {
    return (0, u8.bG)([iA.default], () => {
        let e = iA.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
var fq =
    (((r = {}).AVAILABLE = "available"),
    (r.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (r.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    r);
function fQ() {
    let e = (0, u8.bG)([iA.default], () => iA.default.getCurrentUser()?.verified);
    return fK.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function fJ() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, u8.bG)([eh.A, xP.A, iA.default], () =>
        iA.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? j.intl.string(j.t.hxf9fX)
                : j.intl.string(j.t["3iKih7"])
            : eh.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(U.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        xP.A.can(U.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? j.intl.string(j.t.OYTCUh)
                  : j.intl.string(j.t.HC8uSZ)
              : null,
    );
}
var f$ = i(466034);
let f0 = (0, a.Tf)(u.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => j.intl.string(j.t.lQsY7B),
        useSubtitle: () => fJ(!0),
        useDisabled: () => null !== fJ(!0),
        useLabel: () => j.intl.string(j.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, g.bG)([cU.default], () => cU.default.hasTOTPEnabled()),
                t = fQ() === fq.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, s1.A)({
                title: j.intl.string(j.t["D+aE7g"]),
                subtitle: j.intl.string(j.t.EA4ZEk),
                variant: "critical",
                confirmText: j.intl.string(j.t.N86XcP),
                onConfirm: () => p6.A.disable(),
            }),
    }),
    f1 = (0, a.zZ)(u.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => j.intl.string(j.t.RumMFo),
        useSubtitle: () => j.intl.string(j.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, g.bG)([cU.default], () => cU.default.hasTOTPEnabled()),
                t = fQ() === fq.AVAILABLE;
            if (!e && t)
                return {
                    type: h.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: h.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: j.intl.string(j.t.cTNUeD),
                            onClick: f$.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (fQ()) {
                case fq.UNAVAILABLE_NO_CRYPTO:
                    return { type: h.lT.INLINE_NOTICE, noticeType: "info", text: j.intl.string(j.t.PhHhsj) };
                case fq.UNAVAILABLE_UNVERIFIED:
                    return { type: h.lT.INLINE_NOTICE, noticeType: "warning", text: j.intl.string(j.t.uggF7o) };
                case fq.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [f0],
    });
var f2 = i(670492),
    f3 = i(32880),
    f5 = i(663417),
    f6 = i(658675),
    f4 = i(900686);
function f8() {
    (0, K.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(i.bind(i, 662758));
        return (t) =>
            (0, E.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    p6.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
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
var f7 = i(808658);
function f9(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function Ne() {
    let e = f2.A.getVerificationKey();
    try {
        await p6.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, Sh.P0)({
            message: e.body?.message ?? j.intl.string(j.t.F8FvUy),
            type: SS.Ck.FAILURE,
            id: "backup-code-regen-failed",
        });
    }
}
function Nt(e) {
    let {
            code: { code: t, consumed: i },
        } = e,
        n = f9(t),
        l = S.useRef(null),
        s = (0, E.jsxs)(E.Fragment, {
            children: [(0, E.jsx)(f6.P, { checked: i }), (0, E.jsx)(el.E, { variant: "text-md/normal", children: n })],
        });
    return cB.p5
        ? (0, E.jsx)(en.D, {
              tag: "li",
              className: e7()(f7.aY, f7.vk),
              innerRef: l,
              onKeyDown: function (e) {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, cB.C)(n), l?.current?.focus());
              },
              onClick: function () {
                  (0, cB.C)(n),
                      (0, Sh.P0)({ message: j.intl.string(j.t.mGZ66D), type: SS.Ck.SUCCESS, id: "backup-code-copied" });
              },
              children: s,
          })
        : (0, E.jsx)("li", { className: f7.aY, children: s });
}
let Ni = (0, a.zZ)(u.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.fC9qV0),
        useSubtitle: () =>
            (0, g.bG)([f2.A], () => f2.A.getBackupCodes().length > 0)
                ? j.intl.format(j.t.tp7zEK, {})
                : j.intl.string(j.t.LoOi4S),
        usePredicate: fZ,
        buildLayout: () => [Nn],
    }),
    Nn = (0, a.E2)(u.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.fC9qV0)],
        Component: function () {
            let e = (0, g.bG)([f2.A], () => f2.A.getBackupCodes()),
                t = S.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: i } = e;
                                return `* ${f9(t)}` + (i ? ` (${j.intl.string(j.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, E.jsx)(ek.$, { text: j.intl.string(j.t.Jc2myK), size: "sm", variant: "secondary", onClick: f8 })
                : (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsx)("ul", {
                              className: f7.E5,
                              children: e.map((e) => (0, E.jsx)(Nt, { code: e }, e.code)),
                          }),
                          (0, E.jsxs)(oi.e, {
                              size: "sm",
                              children: [
                                  (0, E.jsx)(f4.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, E.jsx)(ek.$, {
                                          text: j.intl.string(j.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: f3.s,
                                      }),
                                  }),
                                  (0, E.jsx)(ek.$, {
                                      text: j.intl.string(j.t["3x962E"]),
                                      variant: "secondary",
                                      icon: f5.f,
                                      onClick: Ne,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    Nl = (0, a.Tf)(u.X.SMS_AUTH_DISABLE_BUTTON, {
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
                        handleSubmit: p6.A.disableSMS,
                        title: j.intl.string(j.t.KLWnit),
                        children: j.intl.string(j.t["W0/Duf"]),
                    });
            }),
    }),
    Ns = (0, a.zZ)(u.X.SMS_AUTH_CATEGORY, {
        useTitle: () => j.intl.string(j.t.wuHuI5),
        useSubtitle: () => (0, g.bG)([iA.default], () => fW(iA.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()?.hasFlag(U.nhx.MFA_SMS) ?? !1),
                t = (0, g.bG)([iA.default], () => null != fW(iA.default.getCurrentUser()));
            if (!e)
                return {
                    type: h.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: h.UV.BUTTON,
                            id: "sms-setup-button",
                            text: j.intl.string(j.t.Age7yU),
                            onClick: Nr,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = fQ(),
                t = fZ(),
                i = (0, g.bG)([cU.default], () => cU.default.hasTOTPEnabled());
            return e === fq.AVAILABLE && t && i;
        },
        buildLayout: () => [Nl],
    });
function Nr() {
    let e = iA.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            (t = { reason: fh.d.USER_SETTINGS_UPDATE, onAddedPhone: p6.A.enableSMS }),
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
                    { modalKey: fE.V },
                );
        } else p6.A.enableSMS();
}
var Na = i(665671),
    No = i(442433),
    Nu = i(917136),
    Nd = i(976910),
    Nc = i(303778);
function Ng(e) {
    let { credential: t } = e;
    return (0, E.jsxs)("li", {
        className: Nc.e,
        children: [
            (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(el.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, E.jsx)(el.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: j.intl.format(j.t["7JgxF5"], { lastUsed: fR(t.last_used) }),
                        }),
                ],
            }),
            (0, E.jsx)(rX.K, {
                icon: mk.j,
                variant: "icon-only",
                size: "sm",
                "aria-label": j.intl.string(j.t["+nrTbK"]),
                onClick: (e) => {
                    (0, No.L3)(e, async () => {
                        let { default: e } = await i.e("32529").then(i.bind(i, 41e3));
                        return (i) => (0, E.jsx)(e, { credential: t, ...i });
                    });
                },
            }),
        ],
    });
}
let Nm = (0, a.zZ)(u.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.IBq4Y3),
        useSubtitle: () => j.intl.string(j.t.yK9edS),
        useHeaderDecoration: function () {
            if (fQ() === fq.AVAILABLE)
                return {
                    type: h.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: h.UV.BUTTON,
                            id: "add-security-key-button",
                            text: j.intl.string(j.t["Tzs/fw"]),
                            icon: rM.j,
                            onClick: Na.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (fQ()) {
                    case fq.UNAVAILABLE_NO_CRYPTO:
                        return { type: h.lT.INLINE_NOTICE, noticeType: "info", text: j.intl.string(j.t.bWCGI9) };
                    case fq.UNAVAILABLE_UNVERIFIED:
                        return { type: h.lT.INLINE_NOTICE, noticeType: "warning", text: j.intl.string(j.t.uggF7o) };
                    case fq.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [NA],
    }),
    NA = (0, a.E2)(u.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [j.intl.string(j.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, g.cf)([Nd.A], () => ({
                hasFetchedCredentials: Nd.A.hasFetchedCredentials(),
                credentials: Nd.A.getCredentials(),
            }));
            return (S.useEffect(() => {
                t || Nu.JQ();
            }, [t]),
            t)
                ? (0, E.jsx)(Q.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, E.jsx)(Ng, { credential: e }, e.id)),
                  })
                : (0, E.jsx)(dm.y, {});
        },
    }),
    Nh = (0, a.t_)(u.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => j.intl.string(j.t.m0FidJ),
        buildLayout: () => [Nm, f1, Ns, Ni],
    }),
    NE = (0, a.t0)(u.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => {
            let e = fZ();
            return { type: h.xn.TEXT, text: e ? j.intl.string(j.t.lQsY7B) : j.intl.string(j.t.WsUuTt) };
        },
        buildLayout: () => [Nh],
    }),
    NS = (0, a.zZ)(u.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => j.intl.string(j.t["0iH2vc"]),
        buildLayout: () => [fI, NE, fH],
    });
var NT = i(308645),
    Nx = i(271995),
    Np = i(855267);
let Nf = (0, a.E2)(u.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["16r9jm"])],
        Component: Np.A,
    }),
    NN = (0, a.zZ)(u.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [Nf] }),
    N_ = (0, a.t_)(u.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => j.intl.string(j.t["16r9jm"]),
        buildLayout: () => [NN],
    }),
    NI = (0, a.zZ)(u.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: () => j.intl.string(j.t["16r9jm"]),
        buildLayout: () => [NC],
    }),
    NC = (0, a.t0)(u.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: Nx.$b,
        useSubtitle: Nx.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: i } = (0, Nx._k)();
            return { type: h.Xy.ICON, icon: i, color: e, backgroundColor: t };
        },
        initialize: () => {
            NT.Yn();
        },
        buildLayout: () => [N_],
    });
var Nb = i(738188),
    Nv = i(834981),
    Ny = i(987197),
    Nj = i(822585),
    NO = i(840387),
    NR = i(465558),
    NL = i(602339);
let ND = (0, a.E2)(u.X.FAMILY_CENTER_SETTING, {
        Component: NR.p,
        useSearchTerms: () => [
            j.intl.string(NL.default.RZqaJn),
            j.intl.string(NL.default.bdBmqy),
            j.intl.string(NL.default["gVWG+6"]),
            j.intl.string(NL.default.ahKIJO),
            j.intl.string(NL.default["8SLtqb"]),
        ],
    }),
    NP = (0, a.zZ)(u.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [ND] }),
    NG = (0, a.t_)(u.X.FAMILY_CENTER_PANEL, {
        useTitle: () => j.intl.string(NL.default.RZqaJn),
        buildLayout: () => [NP],
    }),
    NM = (0, a.zZ)(u.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => j.intl.string(NL.default.RZqaJn),
        usePersistentBadge: function () {
            let e = (0, Ny.f)(),
                t = (0, Nj.L)()?.daysRemaining ?? null,
                i = e && null != t && t >= 0,
                n = (0, Nv.VT)();
            return S.useMemo(() => (i ? { badgeType: h.Xi.WARNING } : { badgeType: h.Xi.COUNT, count: n }), [i, n]);
        },
        buildLayout: () => [NU],
    }),
    NU = (0, a.t0)(u.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, Nv.Li)() ? j.intl.string(NL.default.IcMQUP) : j.intl.string(NL.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, NO.Z)(),
                t = (0, Nv.Li)();
            return e
                ? t
                    ? j.intl.string(NL.default.G8lHFU)
                    : j.intl.string(NL.default.uOLNEZ)
                : j.intl.string(NL.default.Z53oSM);
        },
        useLeadingDecoration: function () {
            let e = (0, Ny.f)(),
                t = (0, Nj.L)()?.daysRemaining ?? null;
            return !e || null == t || t < 0
                ? null
                : {
                      type: h.Xy.ICON,
                      icon: Nb.i,
                      color: er.A.colors.ICON_FEEDBACK_WARNING,
                      backgroundColor: er.A.colors.BACKGROUND_FEEDBACK_WARNING,
                  };
        },
        buildLayout: () => [NG],
    });
var NV = i(425587),
    Nk = i(662758);
function Nw(e) {
    if (e.body.code === U.t02.INVALID_PASSWORD) throw e;
    (0, a9.A)({ title: j.intl.string(j.t.LX0nT8), subtitle: e.body.message });
}
async function NF() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = iA.default.getCurrentUser();
    if (null == t) return;
    let i = [];
    try {
        i = (await NV.A.fetchTeams(!0)).body;
    } catch {}
    i.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, a9.A)({
              title: j.intl.string(j.t["Y++oNe"]),
              subtitle: j.intl.format(j.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : eh.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, a9.A)({ title: j.intl.string(j.t.vJiTOL), subtitle: j.intl.string(j.t.UyVVan) })
          : t.isClaimed()
            ? (0, K.openModal)((t) =>
                  (0, E.jsx)(Nk.default, {
                      ...t,
                      handleSubmit: (t) => (0, TO.U_)(t, e).then(U.tEg, Nw),
                      title: e ? j.intl.string(j.t.xca2ts) : j.intl.string(j.t.goXv9g),
                      actionText: e ? j.intl.string(j.t["8lQ2rR"]) : j.intl.string(j.t.jf5GGb),
                      variant: "critical-primary",
                      children: e ? j.intl.string(j.t.FB4H1D) : j.intl.string(j.t.gk7h32),
                  }),
              )
            : (0, s1.A)({
                  title: j.intl.string(j.t.xca2ts),
                  subtitle: j.intl.string(j.t.FB4H1D),
                  confirmText: j.intl.string(j.t["8lQ2rR"]),
                  onConfirm: () => (0, TO.U_)("", !0),
              });
}
let NB = (0, a.Tf)(u.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => j.intl.string(j.t["gIpzR+"]),
        useSubtitle: () => j.intl.string(j.t.Bd6dOf),
        useLabel: () => j.intl.string(j.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => NF(!0),
    }),
    Nz = (0, a.Tf)(u.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => j.intl.string(j.t["p/Tjtp"]),
        useSubtitle: () => j.intl.string(j.t.YvDmKb),
        useLabel: () => j.intl.string(j.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => NF(!1),
        usePredicate: () => {
            let e = (0, g.bG)([iA.default], () => iA.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    NY = (0, a.zZ)(u.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [Nz, NB] }),
    NX = (0, a.t_)(u.X.ACCOUNT_PANEL, {
        useTitle: () => j.intl.string(j.t["ldCE/p"]),
        initialize: function () {
            return () => {
                p6.A.clearBackupCodes(), (0, TO.Uo)();
            };
        },
        useObscuredNotice: dc.L,
        buildLayout: () => [fN, NS, NI, NM, NY],
    }),
    NH = (0, a.i4)(u.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["ldCE/p"]),
        icon: hh.n,
        buildLayout: () => [NX],
    });
var NK = i(323384);
let NW = (0, a.zZ)(u.X.AUTHORIZED_APPS_CATEGORY, {
        buildLayout: () => [SV],
        initialize: () => (
            SM.A.fetch(),
            () => {
                SU.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    NZ = (0, a.t_)(u.X.AUTHORIZED_APPS_PANEL, {
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        useObscuredNotice: dc.L,
        buildLayout: () => [NW],
    }),
    Nq = (0, a.i4)(u.X.AUTHORIZED_APPS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        icon: NK.k,
        buildLayout: () => [NZ],
    });
var NQ = i(176781),
    NJ = i(888916),
    N$ = i(341923),
    N0 = i(572164),
    N1 = i(430795),
    N2 = i(915725),
    N3 = i(16590);
let N5 = (0, a.zD)(u.X.CLIPS_ENABLE_AUTOCLIPPING, {
        useTitle: () => j.intl.string(N3.default.j29uJx),
        useSubtitle: () => j.intl.format(N3.default.UCzGcQ, { learnMoreLink: ty.A.getArticleURL(U.MVz.CLIPS) }),
        useValue: () => (0, g.bG)([N2.Ay], () => N2.Ay.getEnableAutoclipping()),
        setValue: N1.uL,
        useDisabled: NJ.Rt,
    }),
    N6 = (0, a.zD)(u.X.CLIPS_ENABLE_GAME_SIGNALS, {
        useTitle: () => j.intl.string(j.t.iV6KcI),
        useSubtitle: () => j.intl.string(j.t["dJ2tX+"]),
        useValue: () => (0, g.bG)([N2.Ay], () => N2.Ay.getSettings().clipSignals.enableGameSignals),
        usePredicate: () => !1,
        setValue: (e) => {
            let t = N2.Ay.getSettings().clipSignals;
            N1.PW({ ...t, enableGameSignals: e });
        },
        useDisabled: NJ.A0,
    }),
    N4 = (0, a.zY)(u.X.CLIPS_AUTOCLIPPING_CARD, { buildLayout: () => [N5, N6], headerSettingKey: N5.key }),
    N8 = (0, a.zZ)(u.X.CLIPS_AUTOCLIPPING_CATEGORY, {
        useTitle: () => j.intl.string(N3.default.XWkJoi),
        useSubtitle: () => j.intl.string(N3.default["MJ/VsO"]),
        usePredicate: function () {
            let e = (0, NJ.As)(),
                t = (0, N$.H)();
            return e && t;
        },
        usePersistentBadge: () => ({ badgeType: h.Xi.BETA }),
        useInlineNotice: () =>
            (0, N0.Et)()
                ? null
                : {
                      type: h.lT.INLINE_NOTICE,
                      noticeType: "info",
                      iconAlign: "center",
                      text: j.intl.string(N3.default.wUpqua),
                      button: {
                          variant: "primary",
                          size: "sm",
                          text: j.intl.string(N3.default.qGgW4M),
                          onClick: () => N1.yO({ clipsEnabled: !0, trackAnalytics: !0 }),
                      },
                  },
        buildLayout: () => [N4],
    });
var N7 = i(974293),
    N9 = i(458977),
    _e = i(486925),
    _t = i(696016);
let _i = (() => {
        let e = [_t.wN];
        for (let t = 10; t <= _t.qh; t += 10) e.push(t);
        return e[e.length - 1] !== _t.qh && e.push(_t.qh), e;
    })(),
    _n = (0, a.sN)(u.X.CLIPS_AUTO_CLIP_STORAGE_LIMIT, {
        usePredicate: () => !(0, _e.M2)(),
        useTitle: () => j.intl.string(j.t.yfsrDI),
        useSubtitle: () => j.intl.string(j.t.vlDHdC),
        minValue: _t.wN,
        maxValue: _t.qh,
        getInitialValue: () => N2.Ay.getSettings().maxAutoClips,
        onValueRender: (e) => `${Math.floor(e)}`,
        asValueChanges: (e) => N1.e6(Math.floor(e)),
        markers: _i,
        onMarkerRender: (e) => `${Math.floor(e)}`,
        useDisabled: NJ.Rt,
    }),
    _l = (0, a.zZ)(u.X.CLIPS_AUTOMATIC_CLIPPING_CATEGORY, {
        useTitle: () => j.intl.string(j.t.sA0WKL),
        usePredicate: () => {
            let e = (0, NJ.As)(),
                t = (0, N7.aJ)("ClipsAutomaticClippingCategory"),
                i = N9.A.useConfig({ location: "ClipsAutomaticClippingCategory" }).enableDistributedClips;
            return !e && (t || i);
        },
        buildLayout: () => [_n, N6],
    }),
    _s = [_t.zq, 25, 50, _t.Y2, _t.rv],
    _r = (0, a.sN)(u.X.CLIPS_BITRATE, {
        usePredicate: () => (0, N7.V0)("ClipsBitrateSetting"),
        useTitle: () => j.intl.string(j.t["8bZyov"]),
        useSubtitle: () => j.intl.string(j.t["h8DSx/"]),
        minValue: _t.zq,
        maxValue: _t.rv,
        useDefaultValue: () => _t.Y2,
        getInitialValue: () => N2.Ay.getSettings().clipsQuality.bitratePercent ?? _t.Y2,
        onValueRender: (e) => `${Math.round(e)}%`,
        setValue: (e) => {
            let { clipsQuality: t } = N2.Ay.getSettings();
            N1.GS({ ...t, bitratePercent: Math.round(e) });
        },
        markers: _s,
        onMarkerRender: (e) => `${Math.round(e)}%`,
        useDisabled: NJ.Rt,
    });
var _a = i(226640);
let _o = (0, a.Hn)(u.X.CLIPS_FRAME_RATE, {
        useTitle: () => j.intl.string(j.t["2wScL1"]),
        useSubtitle: () => j.intl.string(j.t["Rf9+fy"]),
        useValue: () => (0, g.bG)([N2.Ay], () => N2.Ay.getSettings().clipsQuality.frameRate),
        setValue: (e) => {
            let { clipsQuality: t } = N2.Ay.getSettings();
            N1.GS({ ...t, frameRate: e });
        },
        useOptions: _a.Fz,
        useDisabled: NJ.Rt,
    }),
    _u = (0, a.E2)(u.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
        useSearchTerms: () => [j.intl.string(j.t.SIxrIF)],
        usePredicate: () => (0, g.bG)([N2.Ay], () => N2.Ay.getHardwareClassification()) === _t.k9.BELOW_MINIMUM,
        Component: () => (0, E.jsx)(ap.A, { look: ap.k.WARNING, children: j.intl.string(j.t.SIxrIF) }),
    }),
    _d = (0, a.Hn)(u.X.CLIPS_LENGTH, {
        useTitle: () => j.intl.string(j.t.OgfUio),
        useSubtitle: () => j.intl.string(j.t.H7j4tY),
        useValue: () => (0, g.bG)([N2.Ay], () => N2.Ay.getSettings().clipsLength),
        setValue: (e) => N1.h$(e),
        useOptions: _a.Qu,
        useDisabled: NJ.Rt,
    }),
    _c = (0, a.E2)(u.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [j.intl.string(j.t["Z+MfqT"])],
        Component: () => (0, E.jsx)(ap.A, { look: ap.k.INFO, children: j.intl.string(j.t["Z+MfqT"]) }),
    }),
    _g = (0, a.Hn)(u.X.CLIPS_RESOLUTION, {
        useTitle: () => j.intl.string(j.t.aFudZJ),
        useSubtitle: () => j.intl.string(j.t.nIrkW5),
        useValue: () => (0, g.bG)([N2.Ay], () => N2.Ay.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = N2.Ay.getSettings();
            N1.GS({ ...t, resolution: e });
        },
        useOptions: _a.gF,
        useDisabled: NJ.Rt,
    }),
    _m = (0, a.zD)(u.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => j.intl.string(j.t["3zwNf6"]),
        useSubtitle: () => j.intl.string(j.t.m4Cjj9),
        useValue: () => (0, g.bG)([N2.Ay], () => N2.Ay.getSettings().remindersEnabled),
        setValue: (e) => N1.Mt(e),
        useDisabled: NJ.Rt,
    }),
    _A = (0, a.zZ)(u.X.CLIPS_CAPTURE_SETTINGS_CATEGORY, {
        useTitle: () => j.intl.string(N3.default.TGwzMe),
        usePredicate: NJ.As,
        buildLayout: () => [_u, _d, _o, _g, _r, _c, _m],
    }),
    _h = (0, a.zD)(u.X.CLIPS_DEBUG_TOOLTIPS, {
        useTitle: () => "Show clips debug tooltips",
        useSubtitle: () =>
            "Show overlay tooltips for the clips engine starting, enabled features, auto-clip signals, and save errors. Intended for development and testing.",
        useValue: () => (0, g.bG)([N2.Ay], () => N2.Ay.getSettings().debugTooltipsEnabled),
        setValue: (e) => N1.YP(e),
    }),
    _E = (0, a.zD)(u.X.CLIPS_SHOW_POV_CLIPS, {
        useTitle: () => "Show POV clips in Gallery",
        useSubtitle: () =>
            "Show clips automatically captured from your point of view when a teammate clips a shared moment. Dev-only for now.",
        useValue: () => (0, g.bG)([N2.Ay], () => N2.Ay.getSettings().showPovClipsInGallery),
        setValue: (e) => N1.Uh(e),
    }),
    _S = (0, a.zZ)(u.X.CLIPS_DEVELOPER_CATEGORY, {
        useTitle: () => "Developer",
        usePredicate: () =>
            (0, g.bG)([iA.default], () => {
                let e = iA.default.getCurrentUser();
                return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
            }),
        buildLayout: () => [_h, _E],
    });
var _T = i(417270),
    _x = i(645886);
let _p = (0, a.E2)(u.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [j.intl.string(j.t.pf54EU), j.intl.string(j.t["QyB/jK"])],
        Component: () => {
            let e = (0, g.bG)([eH.Ay], () => eH.Ay.getKeybindForAction(U.hCu.SAVE_CLIP, !0));
            tZ()(null != e, "Save clip keybind unset");
            let t = (0, NJ.Rt)(),
                i = (0, NJ.As)(),
                n = S.useRef(null),
                l = S.useCallback(
                    (t) => {
                        tq.A.setKeybind({ ...e, shortcut: t });
                    },
                    [e],
                ),
                s = S.useCallback(() => {
                    tq.A.setKeybind({ ...e, shortcut: (0, e0.OH)(_t.Ot) });
                }, [e]);
            return (0, E.jsx)(l8.D, {
                label: j.intl.string(j.t.pf54EU),
                description: j.intl.string(j.t["QyB/jK"]),
                layout: "horizontal-responsive",
                children: (0, E.jsx)("div", {
                    className: _x.g,
                    children: (0, E.jsx)(tQ.A, {
                        ref: n,
                        disabled: t,
                        defaultValue: e.shortcut,
                        onChange: l,
                        trailingActions: i
                            ? (0, E.jsxs)(E.Fragment, {
                                  children: [
                                      (0, E.jsx)(td.m, {
                                          text: j.intl.string(N3.default.bUtubv),
                                          position: "top",
                                          ariaHidden: !0,
                                          children: (0, E.jsx)(rX.K, {
                                              icon: rU.F,
                                              size: "sm",
                                              variant: "secondary",
                                              disabled: t,
                                              "aria-label": j.intl.string(N3.default.bUtubv),
                                              onClick: (e) => {
                                                  e.stopPropagation(), n.current?.toggleRecordMode();
                                              },
                                          }),
                                      }),
                                      (0, E.jsx)(td.m, {
                                          text: j.intl.string(N3.default.Kyk1Tp),
                                          position: "top",
                                          ariaHidden: !0,
                                          children: (0, E.jsx)(rX.K, {
                                              icon: _T.m,
                                              size: "sm",
                                              variant: "secondary",
                                              disabled: t,
                                              "aria-label": j.intl.string(N3.default.Kyk1Tp),
                                              onClick: (e) => {
                                                  e.stopPropagation(), s();
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
    _f = (0, a.E2)(u.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [j.intl.string(j.t["0U/hj7"]), j.intl.string(j.t["5zxkdo"])],
        usePredicate: aa.BW,
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
            return (0, E.jsx)(l8.D, {
                label: j.intl.string(j.t["0U/hj7"]),
                description: j.intl.string(j.t["5zxkdo"]),
                layout: "horizontal",
                children: (0, E.jsx)("div", {
                    className: _x.g,
                    children: (0, E.jsx)(tQ.A, { defaultValue: t.shortcut, onChange: i }),
                }),
            });
        },
    }),
    _N = (0, a.zD)(u.X.CLIPS_ENABLE, {
        useTitle: () => j.intl.string(j.t.h8rgrK),
        useSubtitle: () => j.intl.string(j.t["4Qw3NO"]),
        useValue: () => (0, N0.Et)(),
        setValue: (e) => N1.yO({ clipsEnabled: e, trackAnalytics: !0 }),
    });
var __ = i(915618);
let _I = (0, a.zD)(u.X.CLIPS_ENABLE_DECOUPLED_CLIPPING, {
        useTitle: () => j.intl.string(j.t.yXvykv),
        useSubtitle: () => j.intl.string(j.t.YP3ujk),
        useValue: N0.XT,
        setValue: (e) => N1.fd({ enabled: e, trackAnalytics: !0 }),
        usePredicate: function () {
            let e = (0, eZ.isWindows)(),
                t = (0, __.A)(rk.Ay),
                i = (0, NJ.As)();
            return e && t && !i;
        },
        useDisabled: NJ.Rt,
    }),
    _C = (0, a.zY)(u.X.CLIPS_GENERAL_CARD, { buildLayout: () => [_N, _I, _p, _f], headerSettingKey: _N.key }),
    _b = (0, a.zZ)(u.X.CLIPS_GENERAL_CATEGORY, {
        useTitle: () => j.intl.string(j.t["rWKv+e"]),
        useSubtitle: () => j.intl.format(N3.default["dh7g+S"], { learnMoreLink: ty.A.getArticleURL(U.MVz.CLIPS) }),
        usePredicate: NJ.As,
        buildLayout: () => [_C],
    }),
    _v = (0, a.E2)(u.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [j.intl.string(j.t.s4773E), j.intl.string(j.t.svjwGh)],
        Component: () => {
            let e = (0, g.bG)([N2.Ay], () => N2.Ay.getSettings().storageLocation),
                t = (0, NJ.Rt)(),
                i = S.useRef(!1);
            async function n() {
                if (!t && !i.current) {
                    i.current = !0;
                    try {
                        let e = await sI.A.fileManager.showOpenDialog({
                            properties: ["openDirectory", "createDirectory"],
                        });
                        e.length > 0 && N1.HU(e[0]);
                    } finally {
                        i.current = !1;
                    }
                }
            }
            return (0, E.jsx)(l8.D, {
                label: j.intl.string(j.t.s4773E),
                description: j.intl.string(j.t.svjwGh),
                layout: "vertical",
                children: (0, E.jsxs)(Q.B, {
                    direction: "horizontal",
                    align: "center",
                    gap: "sm",
                    children: [
                        (0, E.jsx)(rZ.k, {
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
                            text: j.intl.string(N3.default.yQAN6B),
                        }),
                    ],
                }),
            });
        },
    }),
    _y = (0, a.zZ)(u.X.CLIPS_RECORDING_CATEGORY, {
        useTitle: () => j.intl.string(j.t.iIwmV5),
        usePredicate: () => !(0, NJ.As)(),
        buildLayout: () => [_c, _u, _N, _I, _m, _d, _g, _o, _p, _f, _v],
    }),
    _j = (0, a.zZ)(u.X.CLIPS_STORAGE_CATEGORY, {
        useTitle: () => j.intl.string(N3.default["0Q+pdZ"]),
        usePredicate: NJ.As,
        buildLayout: () => [_v, _n],
    }),
    _O = (0, a.t_)(u.X.CLIPS_PANEL, {
        useTitle: () => j.intl.string(j.t.z2jK6X),
        usePredicate: aa.sw,
        buildLayout: () => [_b, N8, _A, _j, _y, _l, _S],
    }),
    _R = (0, a.i4)(u.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.z2jK6X),
        icon: NQ.x,
        buildLayout: () => [_O],
    }),
    _L = (0, a.zZ)(u.X.CONNECTIONS_ADD_CONNECTIONS_CATEGORY, { buildLayout: () => [Tf], useInlineNotice: TI }),
    _D = (0, a.zZ)(u.X.CONNECTIONS_CONNECTED_ACCOUNTS_CATEGORY, { buildLayout: () => [TN] }),
    _P = (0, a.t_)(u.X.CONNECTIONS_PANEL, {
        useTitle: () => j.intl.string(j.t["3fe7U5"]),
        useObscuredNotice: dc.L,
        buildLayout: () => [_L, _D],
    }),
    _G = (0, a.i4)(u.X.CONNECTIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["3fe7U5"]),
        icon: ED.q,
        buildLayout: () => [_P],
    });
var _M = i(875444);
function _U(e, t) {
    let i = (0, g.bG)([SQ.default], () => SQ.default.getFetchState()),
        n = (0, g.bG)([SQ.default], () =>
            e ? SQ.default.getNewestTokensForNonChildrenApplications() : SQ.default.getNewestTokens(),
        ),
        l = S.useMemo(
            () => (null == n ? [] : n.filter((e) => (0, _M.O)(e.application, e.scopes)).map((e) => e.application)),
            [n],
        );
    return (
        S.useEffect(() => {
            t || SM.A.fetch();
        }, [t]),
        { showLoadingIndicator: i !== SQ.FetchState.FETCHED && (null == n || 0 === n.length), slayerSdkApplications: l }
    );
}
var _V = i(390646);
function _k(e) {
    let { applications: t } = e,
        i = S.useMemo(() => t.sort((e, t) => dC.default.compare(t.id, e.id)), [t]),
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
                              el.E,
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
        l = S.useMemo(() => {
            let e = [];
            for (let t = 0; t < 3; t++) {
                let n = i[t];
                if (null == n) break;
                let { icon: l, name: s, id: r } = n,
                    a = na.Ay.getApplicationIconURL({ id: r, icon: l });
                e.push(
                    (0, E.jsx)(
                        td.m,
                        {
                            __unsupportedReactNodeAsText: s,
                            children: (0, E.jsx)("img", { src: a, "aria-label": s, className: _V.Kk }),
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
                                className: _V.lK,
                                children: (0, E.jsx)(el.E, {
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
        className: _V.wx,
        children: [
            (0, E.jsxs)("div", {
                className: _V.kX,
                children: [
                    (0, E.jsx)(el.E, { variant: "text-md/normal", color: "text-strong", children: n }),
                    (0, E.jsxs)(en.D, {
                        onClick: function () {
                            (0, eq.openUserSettings)(u.X.AUTHORIZED_APPS_PANEL);
                        },
                        className: _V.bJ,
                        children: [
                            (0, E.jsx)(el.E, {
                                variant: "text-xs/normal",
                                color: "interactive-text-default",
                                children: j.intl.format(j.t.oYaYOe, {}),
                            }),
                            (0, E.jsx)(tM._, {
                                size: "xxs",
                                color: er.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                className: _V.g7,
                            }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)("div", { className: _V.yF }),
            (0, E.jsx)("div", { className: _V.lJ, children: l }),
        ],
    });
}
function _w() {
    return (0, E.jsxs)("div", {
        className: _V.do,
        children: [
            (0, E.jsx)(el.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: _V.xV,
                children: j.intl.string(j.t["+0U77d"]),
            }),
            (0, E.jsx)(el.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: j.intl.format(j.t.V8wClM, {
                    helpdeskArticle: ty.A.getArticleURL(U.MVz.SOCIAL_LAYER_CONNECTIONS),
                }),
            }),
        ],
    });
}
function _F(e) {
    let { applications: t } = e;
    return t.length > 0 ? (0, E.jsx)(_k, { applications: t }) : (0, E.jsx)(_w, {});
}
let _B = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES, {
    useSearchTerms: () => [j.intl.string(j.t.YpCiMt)],
    Component: function () {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = _U(!0);
        return e ? (0, E.jsx)(dm.y, {}) : (0, E.jsx)(_F, { applications: t });
    },
});
function _z() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = _U(!0, !0);
    return !e && t.length > 0;
}
let _Y = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => ((0, o.SV)("GameFriendDMSetting") ? j.intl.string(j.t.W8JtfT) : j.intl.string(j.t.XpBObB)),
        useSubtitle: () =>
            (0, o.SV)("GameFriendDMSetting")
                ? j.intl.string(j.t.a99KKy)
                : j.intl.format(j.t.oZsHTD, { helpdeskArticle: ty.A.getArticleURL(U.MVz.SLAYER_GAME_FRIENDS) }),
        useSearchTerms: () => [j.intl.string(j.t["Uv/eTx"])],
        useValue: () => L.Zk.useSetting(),
        setValue: (e) => L.Zk.updateSetting(e),
        usePredicate: _z,
    }),
    _X = (0, a.Qx)(u.X.CONTENT_AND_SOCIAL_IN_GAME_DMS_SETTING, {
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
        usePredicate: _z,
    }),
    _H = (0, a.zZ)(u.X.CONNECTED_GAMES_CATEGORY, {
        useSearchTerms: () => [j.intl.string(j.t.YpCiMt)],
        buildLayout: () => [_B, _Y, _X],
    });
var _K = i(687123),
    _W = i(444802),
    _Z = i(558001);
i(866945);
var _q = i(835002);
function _Q() {
    let e = (0, _W.WX)();
    S.useEffect(() => {
        (0, _Z.N)(_q.YA.AGE_CONFIRMATION_NOTICE, _q.YX.VIEWED);
    }, []);
    let t = S.useCallback(() => {
            window.open(ty.A.getArticleURL(e), "_blank"), (0, _Z.N)(_q.YA.AGE_CONFIRMATION_NOTICE, _q.YX.LEARN_MORE);
        }, [e]),
        i = S.useCallback(() => {
            fr.A.showAgeVerificationGetStartedModal({ entryPoint: fa.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, _Z.N)(_q.YA.AGE_CONFIRMATION_NOTICE, _q.YX.CONFIRM_AGE);
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
        children: j.intl.format(j.t.mFgsfg, { hook: (e, i) => (0, E.jsx)(u7.Anchor, { onClick: t, children: e }, i) }),
    });
}
function _J() {
    let e = (0, fe.aX)(_K.t.REACTIVE_CHECK),
        t = (0, p9.b8)();
    return S.useMemo(() => {
        if (e && !t) return { type: h.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: _Q };
    }, [e, t]);
}
var _$ = i(308528),
    _0 = i(171316);
function _1() {
    let e = (0, _0.uM)(),
        t = (0, Nv.vx)(),
        i = S.useCallback(() => {
            (0, lZ.default)(),
                _$.A.openPrivateChannel({ recipientIds: t }),
                (0, _Z.N)(_q.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _q.YX.LEARN_MORE);
        }, [t]),
        n = S.useCallback(() => {
            (0, _Z.N)(_q.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _q.YX.VIEWED);
        }, []);
    return S.useMemo(() => {
        if (e)
            return {
                type: h.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: n,
                text: j.intl.format(NL.default.i284fU, {
                    hook: (e, t) => (0, E.jsx)(u7.Anchor, { onClick: i, children: e }, t),
                    count: t.length,
                }),
            };
    }, [i, e, t.length, n]);
}
var _2 = i(323073),
    _3 = i(386171),
    _5 = i(96607);
let _6 = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_DM_SETTING, {
        useTitle: () =>
            (0, o.SV)("AgeRestrictedDMCommandsSetting") ? j.intl.string(j.t.gvC6q7) : j.intl.string(j.t.XahVjj),
        useSubtitle: () =>
            (0, o.SV)("AgeRestrictedDMCommandsSetting") ? j.intl.string(j.t.zirUC1) : j.intl.string(j.t.R9fXyS),
        useValue: _3.hT,
        useDisabled: function () {
            let e = (0, _5.A)() ?? !0,
                t = (0, _2.sP)(),
                i = (0, p9.yM)();
            return (!t || !!i) && !e;
        },
        setValue: function (e) {
            (0, _2.p5)() && e
                ? fr.A.showAgeVerificationGetStartedModal({ entryPoint: fa.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : L.Qe.updateSetting(e);
        },
    }),
    _4 = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => j.intl.string(j.t["L+yTsa"]),
        useSubtitle: () =>
            (0, o.SV)("AgeRestrictediOSSetting") ? j.intl.string(j.t["t6i/jW"]) : j.intl.string(j.t.hiM8pU),
        useValue: _3.tI,
        useDisabled: function () {
            let e = (0, _5.A)() ?? !0,
                t = (0, _2.sP)(),
                i = (0, p9.yM)();
            return S.useMemo(() => (!t || !!i) && !e, [t, e, i]);
        },
        setValue: function (e) {
            (0, _2.p5)() && e
                ? fr.A.showAgeVerificationGetStartedModal({ entryPoint: fa.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : L.Kg.updateSetting(e);
        },
    }),
    _8 = (0, a.AK)(u.X.CONTENT_FILTERS_APPEARANCE_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.hOXd45),
        destinationKey: u.X.APPEARANCE_MESSAGES_CATEGORY,
    }),
    _7 = (0, a.gN)(u.X.CONTENT_FILTERS_RELATED_SETTINGS, { buildLayout: () => [_8] });
i(667532);
var _9 = i(390248),
    Ie = i(632119),
    It = i(945276),
    Ii = i(389737),
    In = i(566769);
function Il() {
    let e,
        t = (0, It.A)() ?? !0,
        i = (0, _0.uM)(),
        n = (0, _0.uM)(),
        {
            explicitContentGuilds: l,
            explicitContentFriendDm: s,
            explicitContentNonFriendDm: r,
        } = ((e = (0, u8.cf)([u_.A], () => u_.A.settings.textAndImages?.explicitContentSettings ?? (0, Ie.C$)())),
        {
            explicitContentGuilds: (0, Ie.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, Ie.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, Ie.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, _9.hK)() && t.includes(H.TO.SHOW)
            ? fr.A.showAgeVerificationGetStartedModal({ entryPoint: fa.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, Ie.Jz)(e);
    }
    let o = [
            { value: H.TO.BLUR, label: j.intl.string(j.t.S49Uad) },
            { value: H.TO.BLOCK, label: j.intl.string(j.t["D/157Y"]) },
        ],
        u = [{ value: H.TO.BLUR, label: j.intl.string(j.t.S49Uad) }],
        d = { value: H.TO.SHOW, label: j.intl.string(j.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: n, tooltipText: i ? j.intl.string(NL.default["6Af/cw"]) : void 0 };
    return (0, E.jsxs)(Ii.E, {
        description: j.intl.string(j.t.Wnojv1),
        children: [
            (0, E.jsx)(In.A, {
                title: j.intl.string(j.t["+uI23H"]),
                value: s,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(In.A, {
                title: j.intl.string(j.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(In.A, {
                title: j.intl.string(j.t["FP+a42"]),
                value: l,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || n,
                tooltipText: i ? j.intl.string(NL.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function Is() {
    let e,
        t = (0, It.A)() ?? !0,
        i = (0, _0.uM)(),
        n = (0, _0.uM)(),
        {
            goreContentGuilds: l,
            goreContentFriendDm: s,
            goreContentNonFriendDm: r,
        } = ((e = (0, u8.cf)([u_.A], () => u_.A.settings.textAndImages?.goreContentSettings ?? (0, _W.T4)())),
        {
            goreContentGuilds: (0, _W.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, _W.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, _W.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, _9.hK)() && t.includes(H.TO.SHOW)
            ? fr.A.showAgeVerificationGetStartedModal({ entryPoint: fa.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, _W.qY)(e);
    }
    let o = [
            { value: H.TO.BLUR, label: j.intl.string(j.t.S49Uad) },
            { value: H.TO.BLOCK, label: j.intl.string(j.t["D/157Y"]) },
        ],
        u = [{ value: H.TO.BLUR, label: j.intl.string(j.t.S49Uad) }],
        d = { value: H.TO.SHOW, label: j.intl.string(j.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: n, tooltipText: i ? j.intl.string(NL.default["6Af/cw"]) : void 0 };
    return (0, E.jsxs)(Ii.E, {
        description: j.intl.string(j.t.XgH9eh),
        children: [
            (0, E.jsx)(In.A, {
                title: j.intl.string(j.t["+uI23H"]),
                value: s,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(In.A, {
                title: j.intl.string(j.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(In.A, {
                title: j.intl.string(j.t["FP+a42"]),
                value: l,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || n,
                options: u,
                tooltipText: i ? j.intl.string(NL.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var Ir = i(464946),
    Ia = i(875162),
    Io = i(428275);
let Iu = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, _W.WX)(),
            t = S.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: j.intl.string(j.t.GYpoAq),
                        component: Il,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: j.intl.string(j.t["16/3Bi"]),
                        component: Is,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, E.jsxs)(Ir.h, {
            children: [
                (0, E.jsx)(Ir._, {
                    header: j.intl.string(j.t["Hj/But"]),
                    description: j.intl.format(j.t.dliU4j, { learnMoreLink: ty.A.getArticleURL(e) }),
                }),
                (0, E.jsx)(Ia.A, { tabs: t, orientation: "vertical", tabsClassName: Io.v }),
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
var Id = i(639555),
    Ic = i(617641),
    Ig = i(546140),
    Im = i(406935),
    IA = i(594061);
let Ih = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING, {
    useTitle: () => j.intl.string(j.t.qFsx5q),
    useSubtitle: () => j.intl.format(j.t.lunaRv, { learnMoreLink: ty.A.getArticleURL(U.MVz.SAFETY_ALERTS) }),
    useValue: Ig.L,
    setValue: function (e) {
        return IA.wc.updateAsync(
            "privacy",
            (t) => {
                t.inappropriateConversationWarnings = Im._t.create({ value: e });
            },
            IA.Sb.INFREQUENT_USER_ACTION,
        );
    },
    usePredicate: function () {
        let e = (0, Ic.Lc)({ location: "DMSafetyAlertsSetting" }),
            t = (0, Id.Rv)({ location: "DMSafetyAlertsSetting" }),
            i = (0, It.A)() ?? !0;
        return e && !i && !t;
    },
});
var IE = i(809505),
    IS = i(923457),
    IT = i(750714);
let Ix = (0, a.Qx)(u.X.CONTENT_AND_SOCIAL_DM_SPAM_SETTING, {
        useTitle: () => ((0, o.SV)("DMSpamSetting") ? j.intl.string(j.t.puwSkY) : j.intl.string(j.t.tiCXaH)),
        useSubtitle: () =>
            (0, o.SV)("DMSpamSetting")
                ? j.intl.string(j.t["+sXN3T"])
                : j.intl.format(j.t.RvjRRI, { appealLink: ty.A.getArticleURL(U.MVz.SAFE_DIRECT_MESSAGING) }),
        useValue: function () {
            let e = L.he.useSetting(),
                t = L.cj.useSetting(),
                i = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()),
                n = (0, fe.yv)(IS.p.SPAM_FILTERS);
            return e !== H.he.DEFAULT_UNSET
                ? e
                : i?.nsfwAllowed === !1 && n
                  ? H.he.FRIENDS_AND_NON_FRIENDS
                  : (IT.xY.get(t) ?? H.he.NON_FRIENDS);
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
                        : (0, IE.YS)(),
                [e],
            );
        },
        useSearchTerms: () => [j.intl.string(j.t.JzaP4h), j.intl.string(j.t.H9XOl3), j.intl.string(j.t.k4W40P)],
    }),
    Ip = (0, a.zZ)(u.X.CONTENT_CATEGORY, {
        useTitle: () => ((0, o.SV)("ContentCategory") ? j.intl.string(j.t["3upKU8"]) : j.intl.string(j.t.xVRG4P)),
        useInlineNotice: function () {
            let e,
                t,
                i,
                n,
                l,
                s,
                r,
                a,
                o,
                u = _1(),
                d =
                    ((e = (0, NO.Z)()),
                    (t = (0, _W.WX)()),
                    (i = S.useCallback(() => {
                        window.open(ty.A.getArticleURL(t), "_blank"),
                            (0, _Z.N)(_q.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _q.YX.LEARN_MORE);
                    }, [t])),
                    (n = S.useCallback(() => {
                        (0, _Z.N)(_q.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _q.YX.VIEWED);
                    }, [])),
                    S.useMemo(() => {
                        if (e)
                            return {
                                type: h.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: n,
                                text: j.intl.format(j.t.EUo0yj, {
                                    hook: (e, t) => (0, E.jsx)(u7.Anchor, { onClick: i, children: e }, t),
                                }),
                            };
                    }, [i, e, n])),
                c =
                    ((l = (0, fe.SJ)()),
                    (s = (0, p9.b8)()),
                    (r = l && !s),
                    (a = S.useCallback(() => {
                        fr.A.showAgeVerificationGetStartedModal({ entryPoint: fa.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, _Z.N)(_q.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _q.YX.LEARN_MORE);
                    }, [])),
                    (o = S.useCallback(() => {
                        (0, _Z.N)(_q.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _q.YX.VIEWED);
                    }, [])),
                    S.useMemo(() => {
                        if (r)
                            return {
                                type: h.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: o,
                                text: j.intl.format(j.t.OX4ybh, {
                                    hook: (e, t) => (0, E.jsx)(u7.Anchor, { onClick: a, children: e }, t),
                                }),
                            };
                    }, [a, r, o])),
                g = _J();
            return u ?? g ?? c ?? d;
        },
        buildLayout: () => ((0, o.Bv)("ContentCategory") ? [Iu, Ih, _6, _4, _7] : [Iu, Ix, Ih, _6, _4]),
    });
var If = i(189883);
let IN = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => j.intl.string(j.t["7x9dyE"]),
    useValue: function () {
        let e = L.FA.useSetting();
        return S.useMemo(() => (0, s8.Lx)(e), [e]).all;
    },
    setValue: function (e) {
        L.FA.updateSetting(e ? U.yKI : U.yKI & ~U.dzt.NO_RELATION);
    },
    useDisabled: function () {
        return (0, _0.uM)();
    },
});
var I_ = i(665260);
let II = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => j.intl.string(j.t.NfeuZ3),
        useValue: function () {
            let e = L.FA.useSetting(),
                t = S.useMemo(() => (0, s8.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: function (e) {
            let t = L.FA.getSetting();
            L.FA.updateSetting(e ? I_.UI(t, U.dzt.MUTUAL_FRIENDS) : I_.iE(t, U.dzt.MUTUAL_FRIENDS, U.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, _0.uM)();
        },
    }),
    IC = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => j.intl.string(j.t.qsMfsH),
        useSubtitle: () => ((0, o.SV)("FriendRequestsMutualGuildsSetting") ? j.intl.string(j.t["6DqAp0"]) : void 0),
        useValue: function () {
            let e = L.FA.useSetting(),
                t = S.useMemo(() => (0, s8.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: function (e) {
            let t = L.FA.getSetting();
            L.FA.updateSetting(e ? I_.UI(t, U.dzt.MUTUAL_GUILDS) : I_.iE(t, U.dzt.MUTUAL_GUILDS, U.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, _0.uM)();
        },
    }),
    Ib = (0, a.FW)(u.X.FRIEND_REQUESTS_FIELDSET, {
        useTitle: () => j.intl.string(j.t.wTdS6S),
        buildLayout: () => [IN, II, IC],
    }),
    Iv = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => j.intl.string(j.t["jK+wdr"]),
        useSubtitle: () => j.intl.string(j.t["RYh/pW"]),
        useValue: () => !L.Zd.useSetting(),
        setValue: function (e) {
            L.Zd.updateSetting(!e);
        },
        usePredicate: () => If.A.useConfig({ location: "Friend Request Setting" }).enabled,
        usePersistentBadge: () => ({ badgeType: h.Xi.BETA }),
    });
function Iy() {
    let { enabled: e } = If.A.useConfig({ location: "Friend Request Setting" });
    return e ? j.intl.string(j.t.QVbF3l) : void 0;
}
let Ij = (0, a.zZ)(u.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["5gxWrt"]),
        useSubtitle: Iy,
        useSubnavLabel: () => j.intl.string(j.t.fyA115),
        useInlineNotice: _1,
        buildLayout: () => [Ib, Iv],
    }),
    IO = (0, a.zZ)(u.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.MNaVwq),
        useSubtitle: Iy,
        useInlineNotice: _1,
        buildLayout: () => [IN, II, IC, Iv],
    });
var IR = i(994500),
    IL = i(428678),
    ID = i(717398),
    IP = i(730134),
    IG = i(943646);
function IM(e) {
    let { listType: t, numberOfUsers: i } = e,
        n = "blocked" === t;
    return (0, E.jsxs)("div", {
        className: IG.wx,
        children: [
            (0, E.jsx)("div", { className: IG.zc, children: n ? (0, E.jsx)(IL.K, {}) : (0, E.jsx)(iP.G, {}) }),
            (0, E.jsxs)("div", {
                className: IG.Qq,
                children: [
                    (0, E.jsx)(el.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: j.intl.string(n ? j.t.PFOUKW : j.t["93ZDWE"]),
                    }),
                    (0, E.jsx)(el.E, {
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
function IU(e) {
    let { userId: t, last: i } = e,
        n = (0, g.bG)([IR.A], () => IR.A.isBlocked(t)),
        l = (0, g.bG)([iA.default], () => iA.default.getUser(t)),
        [s, r] = S.useState(!1),
        a = S.useCallback(() => {
            r(!0),
                n
                    ? ID.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : ID.A.unignoreUser(t, e6.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      });
        }, [n, t]);
    return null == l
        ? null
        : (0, E.jsxs)("div", {
              className: e7()(IG.nM, { [IG.fW]: i }),
              children: [
                  (0, E.jsxs)("div", {
                      className: IG.eF,
                      children: [
                          (0, E.jsx)(IP.A, { user: l, size: nt._3.SIZE_40 }),
                          (0, E.jsxs)("div", {
                              className: IG.Qq,
                              children: [
                                  (0, E.jsx)(el.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: l.globalName ?? l.username,
                                  }),
                                  (0, E.jsx)(el.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: null != l.globalName ? l.username : null,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, E.jsx)(ek.$, {
                      variant: "secondary",
                      text: j.intl.string(n ? j.t.XyHpKH : j.t["8wXU9B"]),
                      onClick: a,
                      loading: s,
                  }),
              ],
          });
}
function IV(e) {
    let { userIds: t, listType: i } = e,
        [n, l] = S.useState(5);
    return (0, E.jsx)(Ir.h, {
        children: (0, E.jsxs)("div", {
            className: IG.Nr,
            children: [
                (0, E.jsx)(IM, { listType: i, numberOfUsers: t.length }),
                (0, E.jsx)("div", {
                    className: IG.jS,
                    children: t.slice(0, n).map((e, i) => (0, E.jsx)(IU, { userId: e, last: i === t.length - 1 }, e)),
                }),
                n < t.length
                    ? (0, E.jsx)("div", {
                          className: IG.vM,
                          children: (0, E.jsx)(en.D, {
                              onClick: function () {
                                  l((e) => e + 5);
                              },
                              className: IG.Qf,
                              children: (0, E.jsx)(el.E, {
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
let Ik = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_BLOCKED_USERS, {
        useSearchTerms: () => [j.intl.string(j.t.PFOUKW)],
        usePredicate: () => (0, g.bG)([IR.A], () => IR.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, g.yK)([IR.A], () => IR.A.getBlockedIDs());
            return (0, E.jsx)(IV, { userIds: e, listType: "blocked" });
        },
    }),
    Iw = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_IGNORED_USERS, {
        useSearchTerms: () => [j.intl.string(j.t["93ZDWE"])],
        usePredicate: () => (0, g.bG)([IR.A], () => IR.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, g.yK)([IR.A], () => IR.A.getIgnoredIDs());
            return (0, E.jsx)(IV, { userIds: e, listType: "ignored" });
        },
    }),
    IF = (0, a.zZ)(u.X.RESTRICTED_USERS_CATEGORY, {
        useTitle: () =>
            (0, o.SV)("RestrictedUsersCategory") ? j.intl.string(j.t["+Iryf3"]) : j.intl.string(j.t.LVwR56),
        useSubtitle: () =>
            j.intl.format(j.t["0aNQo9"], { helpArticle: ty.A.getArticleURL(U.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [Ik, Iw],
        usePredicate: function () {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, g.cf)([IR.A], () => ({
                hasBlockedUsers: IR.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: IR.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var IB = i(22385),
    Iz = i(556534),
    IY = i(111159),
    IX = i(152056),
    IH = i(467962);
let IK = { label: () => j.intl.string(j.t["32u1Dx"]), value: IB.YG };
var IW = i(954225);
function IZ() {
    return (0, Iz.Tx)() !== IB.YG;
}
function Iq() {
    return j.intl.string(j.t["T+nevN"]);
}
let IQ = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_JOIN_SETTING, {
    useTitle: Iq,
    useSubtitle: () =>
        j.intl.format(j.t.jXKQCu, { helpdeskArticle: ty.A.getArticleURL(U.MVz.ACTIVITY_STATUS_SETTINGS) }),
    useValue: function () {
        let e = (0, Iz.Tx)();
        return !L.pE.useSetting().includes(e);
    },
    setValue: function (e) {
        let t = IB.xk.getState().selectedGuildId,
            i = (0, s8.CN)();
        e ? i.delete(t) : i.add(t),
            L.pE.updateSetting([...i]),
            G.default.track(U.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: IW.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
                ingress: nH.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    },
    usePredicate: IZ,
});
function IJ() {
    return (0, Iz.Tx)() !== IB.YG;
}
function I$() {
    return j.intl.string(D.default.WhdCGP);
}
let I0 = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_SHARE_SETTING, {
    useTitle: I$,
    useSubtitle: () => j.intl.string(D.default.UQ9RHJ),
    useValue: function () {
        let e = (0, Iz.Tx)();
        return !L.JG.useSetting().includes(e);
    },
    setValue: function (e) {
        let t = IB.xk.getState().selectedGuildId,
            i = (0, s8.Kk)();
        e ? i.delete(t) : i.add(t),
            L.JG.updateSetting([...i]),
            G.default.track(U.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: IW.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
                ingress: nH.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    },
    usePredicate: IJ,
});
var I1 = i(307863),
    I2 = i(428031),
    I3 = i(972737);
function I5() {
    return (0, I1.e)() ? j.intl.string(j.t.PMsfcH) : j.intl.string(j.t.RAQUSN);
}
function I6() {
    let e = (0, Iz.Tx)(),
        t = (0, Iz.q9)(),
        i = (0, I1.e)();
    return e === IB.YG
        ? i
            ? j.intl.string(j.t.XXGmuB)
            : j.intl.string(j.t.wbYDfT)
        : t
          ? j.intl.string(j.t.V0ka0Q)
          : i
            ? j.intl.string(j.t.F9WY3f)
            : j.intl.string(j.t.G7c3Xo);
}
function I4() {
    let e = (0, Iz.Tx)(),
        t = L.$s.useSetting().includes(e),
        i = (0, I2.K)();
    return e === IB.YG ? !i : !t;
}
function I8() {
    let e = (0, _0.uM)();
    return (0, Iz.Tx)() === IB.YG && e;
}
function I7(e, t) {
    G.default.track(U.HAw.GUILD_DEFAULT_DMS_UPDATED, { default_guilds_restricted: e, applied_to_existing_guilds: t });
}
function I9(e) {
    let t = IB.xk.getState().selectedGuildId;
    if (t === IB.YG) {
        var i;
        (i = !e),
            (0, I3.O)({
                header: j.intl.string(j.t["uUr+GR"]),
                body: j.intl.string(j.t.hjGJBp),
                confirmText: j.intl.string(j.t.gm1Vej),
                cancelText: j.intl.string(j.t.p89ACt),
                confirmButtonColor: oe.$n.Colors.BRAND,
                onConfirm: function () {
                    L.n6.updateSetting(i), I7(i, !1);
                },
                onCancel: function () {
                    L.n6.updateSetting(i), L.$s.updateSetting(i ? eh.A.getGuildIds() : []), I7(i, !0);
                },
            });
    } else {
        let i = (0, s8.Tb)();
        e ? i.delete(t) : i.add(t),
            L.$s.updateSetting(Array.from(i)),
            G.default.track(U.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: IW.m.DIRECT_MESSAGES_TOGGLE,
                ingress: nH.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    }
}
let Ce = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: I6,
        useValue: I4,
        useDisabled: I8,
        setValue: I9,
    }),
    Ct = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: I5,
        useSubtitle: I6,
        useValue: I4,
        useDisabled: I8,
        setValue: I9,
    });
var Ci = i(953298);
function Cn(e, t) {
    G.default.track(U.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
}
function Cl() {
    let e = (0, o.SV)("PermissionsMessageRequestsSetting"),
        t = (0, Iz.q9)();
    if (e)
        if (t) return j.intl.string(j.t["982I7+"]);
        else return j.intl.string(j.t["3yHM5i"]);
    return j.intl.string(j.t["3o2ojh"]);
}
let Cs = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: Cl,
        useSubtitle: function () {
            let e = (0, o.SV)("PermissionsMessageRequestsSetting"),
                t = (0, Iz.q9)();
            return e
                ? j.intl.format(j.t.BoCjTy, { learnMoreUrl: ty.A.getArticleURL(U.MVz.MESSAGE_REQUESTS) })
                : t
                  ? j.intl.format(j.t.WpnWLc, { helpdeskArticle: ty.A.getArticleURL(U.MVz.MESSAGE_REQUESTS) })
                  : j.intl.format(j.t.wkm9a3, { helpdeskArticle: ty.A.getArticleURL(U.MVz.MESSAGE_REQUESTS) });
        },
        useValue: function () {
            let e = (0, Iz.Tx)(),
                t = (0, I2.K)(),
                i = L.$s.useSetting().includes(e),
                n = L.YX.useSetting(),
                l = L.Zr.useSetting().includes(e);
            return e === IB.YG ? !t && !n : !i && !l;
        },
        useDisabled: function () {
            let e = (0, Iz.Tx)(),
                t = (0, _0.uM)(),
                i = (0, I2.K)(),
                n = L.$s.useSetting().includes(e);
            return e === IB.YG ? i || t : n;
        },
        setValue: function (e) {
            let t = IB.xk.getState().selectedGuildId;
            if (!e && (0, Ci.w)())
                return void fr.A.showAgeVerificationGetStartedModal({ entryPoint: fa.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === IB.YG) {
                var i;
                (i = !e),
                    (0, I3.O)({
                        header: j.intl.string(j.t.yAfu1p),
                        body: j.intl.string(j.t.Ry2z74),
                        confirmText: j.intl.string(j.t.gm1Vej),
                        cancelText: j.intl.string(j.t.p89ACt),
                        confirmButtonColor: oe.$n.Colors.BRAND,
                        onConfirm: function () {
                            L.YX.updateSetting(i), Cn(i, !1);
                        },
                        onCancel: function () {
                            L.YX.updateSetting(i), L.Zr.updateSetting(i ? eh.A.getGuildIds() : []), Cn(i, !0);
                        },
                    });
            } else {
                let i = (0, s8.xo)();
                e ? i.delete(t) : i.add(t),
                    L.Zr.updateSetting(Array.from(i)),
                    G.default.track(U.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: IW.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: nH.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    });
            }
        },
    }),
    Cr = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            let e = (0, o.SV)("GuildSelect"),
                t = [I5(), Cl()],
                i = I$(),
                n = IJ();
            !e && n && t.push(i);
            let l = Iq(),
                s = IZ();
            return !e && s && t.push(l), t;
        },
        Component: function () {
            let { selectedGuildId: e, setSelectedGuildId: t } = (0, IB.xk)(),
                i = (0, g.bG)([eE.Ay], () => eE.Ay.getFlattenedGuildIds()),
                n = (0, g.bG)([eh.A], () => eh.A.getGuilds()),
                l = i[0];
            S.useEffect(
                () =>
                    IX.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, i) => {
                            let n = IB.xk.getState().selectedGuildId;
                            "" === i && "" !== e && n === IB.YG && null != l
                                ? t(l)
                                : "" === e && n !== IB.YG && t(IB.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [l, t],
            );
            let s = S.useMemo(() => {
                let e = [];
                return (
                    e.push({
                        ...IK,
                        id: IK.value,
                        label: IK.label(),
                        leading: (0, E.jsx)("div", {
                            className: IH.KP,
                            children: (0, E.jsx)(IY.p, {
                                size: "sm",
                                color: "white",
                                "aria-hidden": !0,
                                className: IH.cl,
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
                                leading: (0, E.jsx)(me.Ay, {
                                    className: IH.cl,
                                    guild: i,
                                    size: me.Ay.Sizes.SMALLER,
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
                options: s,
            });
        },
    });
function Ca() {
    let e = _1(),
        t = _J();
    if ((0, Iz.Tx)() === IB.YG) return e ?? t;
}
let Co = (0, a.zZ)(u.X.PERMISSIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Y5GYcX),
        useSubnavLabel: () => j.intl.string(j.t.YUU0RF),
        useInlineNotice: Ca,
        buildLayout: () => [Cr, Ce, Cs],
    }),
    Cu = (0, a.zZ)(u.X.PERMISSIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.eYaT7L),
        useInlineNotice: Ca,
        buildLayout: () => [Cr, Ct, Cs, I0, IQ],
    }),
    Cd = (0, a.dT)(u.X.CONTENT_AND_SOCIAL_MAIN_TAB, {
        getTitle: () => j.intl.string(j.t["/7xJCF"]),
        buildLayout: () => [Ip, Cu, IO, IF],
    }),
    Cc = (0, a.dT)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB, {
        initialize: () => {
            SM.A.fetch();
        },
        getTitle: () => j.intl.string(j.t.YpCiMt),
        buildLayout: () => [_H],
    }),
    Cg = (0, a.t_)(u.X.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => j.intl.string(j.t["+o1pDZ"]),
        buildLayout: () => [Cd, Cc],
    }),
    Cm = (0, a.i4)(u.X.CONTENT_AND_SOCIAL_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["+o1pDZ"]),
        icon: gv.i,
        buildLayout: () => [Cg],
    });
var CA = i(254138),
    Ch = i(290595),
    CE = i(153488);
let CS = (0, a.zD)(u.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
    useTitle: () => j.intl.string(j.t.AGDDkH),
    useSubtitle: () => j.intl.string(j.t.kyo3dJ),
    useValue: () => L.Q$.useSetting(),
    setValue: (e) => N1.eQ({ allowVoiceRecording: e }),
});
var CT = i(157559),
    Cx = i(331887);
function Cp() {
    let e = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()),
        t = (0, g.bG)([Cx.A], () => Cx.A.harvestType),
        [i, n] = S.useState(() => Date.now()),
        l = null == t ? i : new Date(t.created_at).getTime() + 2592e6,
        s = S.useRef(null);
    return (S.useEffect(() => {
        let e = l - Date.now();
        if (e > 0) {
            let t = setTimeout(() => n(Date.now()), e);
            clearTimeout(s.current), (s.current = t);
        }
        return () => clearTimeout(s.current);
    }, [l]),
    e?.verified)
        ? e.isStaff()
            ? { allowed: !1, reason: "staff" }
            : null == t
              ? { allowed: !0 }
              : l > i
                ? { allowed: !1, reason: "rate_limited", nextAllowed: new Date(l) }
                : { allowed: !0 }
        : { allowed: !1, reason: "not_verified" };
}
let Cf = (0, a.Tf)(u.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => j.intl.string(j.t.qfFFos),
        useSubtitle: function () {
            let e = Cp();
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
            lm.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" }),
                lg.Bo.get({ url: U.Rsh.USER_HARVEST, oldFormErrors: !0, rejectWithError: !1 })
                    .then((e) => {
                        lm.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body });
                    })
                    .catch((e) => {
                        lm.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error: e });
                    });
        },
        useDisabled: () => !Cp().allowed,
        useLoading: () => (0, g.bG)([Cx.A], () => Cx.A.requestingHarvest),
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
                            (0, TO.$I)(i)
                                .then(
                                    (e) => (
                                        null != e &&
                                            null != e.body &&
                                            lm.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body }),
                                        e
                                    ),
                                )
                                .then(
                                    (e) => {
                                        null != e && null != e.body
                                            ? CT.A.show({
                                                  title: j.intl.string(j.t.i2iul5),
                                                  body: j.intl.string(j.t["6Nmv4i"]),
                                              })
                                            : CT.A.show({
                                                  title: j.intl.string(j.t.OjbtDm),
                                                  body: j.intl.string(j.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || j.intl.string(j.t["0F5Jyt"]);
                                        CT.A.show({ title: j.intl.string(j.t.OjbtDm), body: t });
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
    CN = (0, a.v_)(u.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => j.intl.string(j.t.D60Gfj),
        useSubtitle: () =>
            j.intl.format(j.t.dszICC, {
                onClickDisable: () => (0, eq.openUserSettings)(u.X.ACCOUNT_DISABLE_SETTING),
                onClickDelete: () => (0, eq.openUserSettings)(u.X.ACCOUNT_DELETE_SETTING),
            }),
    }),
    C_ = (0, a.zD)(u.X.DATA_USAGE_PERSONALIZATION_SETTING, {
        useTitle: () => j.intl.string(j.t.MNKzyg),
        useSubtitle: () =>
            j.intl.format(j.t["2SiYln"], { helpdeskArticle: ty.A.getArticleURL(U.MVz.DATA_USED_FOR_RECOMMENDED) }),
        useValue: function () {
            return (0, g.bG)([CE.A], () => CE.A.hasConsented(U.YAq.PERSONALIZATION));
        },
        setValue: function (e) {
            e
                ? (0, Ch.U)([U.YAq.PERSONALIZATION], []).catch(I3.i)
                : (0, I3.O)({
                      header: j.intl.string(j.t["9SNpzv"]),
                      confirmText: j.intl.string(j.t["9g5UGw"]),
                      cancelText: j.intl.string(j.t["+ZLPw9"]),
                      onConfirm: () => {
                          (0, Ch.U)([], [U.YAq.PERSONALIZATION]).catch(I3.i);
                      },
                      body: j.intl.string(j.t.gJvDDh),
                  });
        },
        useDisabled: _0.uM,
    });
var CI = i(884705);
function CC() {
    return (0, g.bG)([CI.A], () => CI.A.isTogglesDisabled());
}
let Cb = (0, a.zD)(u.X.DATA_USAGE_QUESTS_3P_SETTING, {
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
            let e = CC(),
                t = L.H1.useSetting(),
                i = (0, _0.uM)();
            return e || t || i;
        },
        useSearchTerms: () => [j.intl.string(j.t.CyLYKZ)],
    }),
    Cv = (0, a.zD)(u.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => j.intl.string(j.t.sJYh5t),
        useSubtitle: () => j.intl.string(j.t.w4fvxe),
        useValue: function () {
            return !L.H1.useSetting();
        },
        setValue: function (e) {
            L.H1.updateSetting(!e);
        },
        useSearchTerms: () => [j.intl.string(j.t.VkS7Yd)],
        useDisabled: function () {
            let e = CC(),
                t = (0, _0.uM)();
            return e || t;
        },
    }),
    Cy = (0, a.AK)(u.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
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
    Cj = (0, a.gN)(u.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [Cy] }),
    CO = (0, a.zD)(u.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => j.intl.string(j.t.XuADY2),
        useSubtitle: () =>
            j.intl.format(j.t.FNqmmX, { helpdeskArticle: ty.A.getArticleURL(U.MVz.DATA_PRIVACY_CONTROLS) }),
        useValue: function () {
            return (0, g.bG)([CE.A], () => CE.A.hasConsented(U.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, Ch.U)([U.YAq.USAGE_STATISTICS], []).catch(I3.i)
                : (0, I3.O)({
                      header: j.intl.string(j.t.OdPCbN),
                      body: j.intl.string(j.t.MGWabA),
                      confirmText: j.intl.string(j.t["D3+rU4"]),
                      cancelText: j.intl.string(j.t.kYpG0u),
                      onConfirm: () => (0, Ch.U)([], [U.YAq.USAGE_STATISTICS]).catch(I3.i),
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t.XuADY2)],
        useDisabled: _0.uM,
    }),
    CR = (0, a.zZ)(u.X.DATA_USAGE_CATEGORY, {
        useTitle: () => j.intl.string(j.t.QDAriI),
        useInlineNotice: _1,
        initialize: () => {
            CE.A.fetchedConsents || (0, Ch.Q)();
        },
        buildLayout: () => [CN, CO, C_, Cv, Cb, CS, Cf, Cj],
    });
var CL = i(567926);
let CD = (0, a.zD)(u.X.NOTIFY_FRIENDS_ON_PROFILE_UPDATE_SETTING, {
    useTitle: () => j.intl.string(CL.default.F3llsQ),
    useSubtitle: () => j.intl.string(CL.default["6goWcz"]),
    useValue: L.Sy.useSetting,
    setValue: function (e) {
        L.Sy.updateSetting(e),
            G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: M.Y.ACCOUNT,
                notify_friends_on_profile_update: e,
            });
    },
});
function CP() {
    let e = L.JG.useSetting();
    return (0, g.yK)([eE.Ay, eh.A], () => {
        let t = new Set(e);
        return eE.Ay.getFlattenedGuildIds().filter((e) => null != eh.A.getGuild(e) && !t.has(e));
    }, [e]);
}
let CG = (0, a.AK)(u.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = CP();
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
                    ((e = CP()),
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
    CM = (0, a.gN)(u.X.PROFILE_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, F.lX)("ProfilePrivacyRelatedSettings"),
        buildLayout: () => [CG],
    }),
    CU = (0, a.Qx)(u.X.PROFILE_PRIVACY_SETTING, {
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
    CV = (0, a.zZ)(u.X.PROFILE_PRIVACY_CATEGORY, {
        useTitle: () => j.intl.string(j.t.ul884f),
        useSubtitle: () =>
            j.intl.format(j.t.N4jSgR, {
                learnMoreUrl: ty.A.getArticleURL("38859942749463-Profile-Privacy-Setting-on-Discord"),
            }),
        buildLayout: () => [CU, CD, CM],
    });
var Ck = i(936388),
    Cw = i(714763),
    CF = i(814278);
let CB = (0, a.zD)(u.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => j.intl.string(j.t["opi/XK"]),
    useSubtitle: () => j.intl.format(j.t["/T+ZlP"], { helpArticle: (0, CF.Lu)() }),
    useValue: function () {
        return (0, g.bG)([Cw.A], () => Cw.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        Ck.A.updatePersistentCodesEnabled(e);
    },
});
var Cz = i(787392);
function CY() {
    return (0, g.yK)([Cz.A], () => Cz.A.getUserIds());
}
var CX = i(803306),
    CH = i(966327),
    CK = i(509531);
function CW(e) {
    let { userId: t, count: i } = e,
        { analyticsLocations: n } = (0, n1.Ay)(),
        l = (0, g.bG)([iA.default], () => iA.default.getUser(t)),
        s = xL.Ay.getFormattedName(l),
        r = S.useCallback(() => {
            (0, CF.kj)(t);
        }, [t]),
        a = S.useCallback(() => (0, TG.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: n }), [t, n]);
    return (
        S.useEffect(() => {
            (0, CX.getUser)(t);
        }, [t]),
        (0, E.jsxs)("div", {
            className: CK.uW,
            children: [
                null != l && (0, E.jsx)(CH.A, { className: CK.my, user: l, size: nt._3.SIZE_40 }),
                (0, E.jsxs)("div", {
                    className: CK.Qq,
                    children: [
                        (0, E.jsx)(en.D, {
                            className: CK.Xh,
                            onClick: a,
                            children: (0, E.jsx)(el.E, {
                                variant: "text-md/semibold",
                                color: "interactive-text-active",
                                children: s,
                            }),
                        }),
                        (0, E.jsx)(el.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: j.intl.format(j.t["/MBjYF"], { count: i }),
                        }),
                    ],
                }),
                (0, E.jsx)(en.D, { onClick: r, className: CK.Qz, children: (0, E.jsx)(rH.u, { size: "xs" }) }),
            ],
        })
    );
}
function CZ(e) {
    let { className: t, userId: i, verification: n, index: l } = e,
        s = (0, CF.tC)(n.timestamp),
        r = S.useCallback(() => {
            (0, CF.W0)(i, n.verifiedKey);
        }, [n.verifiedKey, i]);
    return (0, E.jsxs)("div", {
        className: t,
        children: [
            (0, E.jsxs)("div", {
                className: CK.Qq,
                children: [
                    (0, E.jsx)(el.E, {
                        variant: "text-sm/semibold",
                        color: "interactive-text-active",
                        children: j.intl.format(j.t.N4qBBO, { index: l + 1 }),
                    }),
                    (0, E.jsx)(el.E, { variant: "text-sm/medium", color: "text-default", children: s }),
                ],
            }),
            (0, E.jsx)(en.D, {
                className: CK.Kk,
                onClick: r,
                children: (0, E.jsx)(gk.P, { size: "md", color: er.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function Cq(e) {
    let { userId: t } = e,
        i = (0, g.yK)([Cz.A], () =>
            e$()(Cz.A.getUserVerifiedKeys(t))
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
            (0, E.jsx)(CW, { userId: t, count: i.length }),
            i.map((e, n) =>
                (0, E.jsxs)(
                    S.Fragment,
                    {
                        children: [
                            (0, E.jsx)(CZ, { className: CK.nM, userId: t, index: n, verification: e }),
                            n !== i.length - 1 && (0, E.jsx)("div", { className: CK.yF }),
                        ],
                    },
                    `${n}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var CQ = i(756625);
let CJ = (0, a.E2)(u.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["5b3FNI"])],
        usePredicate: function () {
            let e = CY();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = CY();
            return (0, E.jsxs)(Ir.h, {
                children: [
                    (0, E.jsx)(Ir._, {
                        header: j.intl.string(j.t["5b3FNI"]),
                        description: j.intl.format(j.t.jrTSWU, { helpArticle: (0, CF.dc)() }),
                    }),
                    e.map((e) => (0, E.jsx)("div", { className: CQ.A, children: (0, E.jsx)(Cq, { userId: e }) }, e)),
                ],
            });
        },
    }),
    C$ = (0, a.zZ)(u.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => j.intl.string(j.t.bTwjaz),
        usePredicate: () => (0, eZ.isDesktop)(),
        buildLayout: () => [CB, CJ],
    }),
    C0 = (0, a.t_)(u.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => j.intl.string(j.t.OAuOHD),
        buildLayout: () => [CR, CV, C$],
    }),
    C1 = (0, a.i4)(u.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.OAuOHD),
        icon: CA.m,
        buildLayout: () => [C0],
    });
var C2 = i(476713);
let C3 = (0, a.AK)(u.X.CONNECTED_GAMES_AUTHORIZED_APPS_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.O65dzZ),
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        destinationKey: u.X.AUTHORIZED_APPS_CATEGORY,
    }),
    C5 = (0, a.gN)(u.X.CONNECTED_GAMES_RELATED_SETTINGS, { buildLayout: () => [C3] }),
    C6 = (0, a.E2)(u.X.CONNECTED_GAMES_UNAVAILABLE, {
        Component: function () {
            let { showLoadingIndicator: e } = _U(!0, !0);
            return e ? (0, E.jsx)(dm.y, {}) : (0, E.jsx)(_w, {});
        },
        useSearchTerms: () => [j.intl.string(j.t["+0U77d"])],
        usePredicate: () => {
            let { showLoadingIndicator: e, slayerSdkApplications: t } = _U(!0, !0);
            return e || 0 === t.length;
        },
    });
function C4() {
    let { slayerSdkApplications: e, showLoadingIndicator: t } = _U(!0, !0);
    return {
        sortedGames: S.useMemo(() => e.toSorted((e, t) => dC.default.compare(t.id, e.id)), [e]),
        showLoadingIndicator: t,
    };
}
i(839272);
let C8 = (0, a.zZ)(u.X.SPAM_FILTERS_CATEGORY, { useTitle: () => j.intl.string(j.t.Qwuoic), buildLayout: () => [Ix] }),
    C7 = (0, a.zZ)(u.X.CONNECTED_GAMES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.RyvebU),
        useSubtitle: function () {
            let { sortedGames: e } = C4();
            function t(e, t) {
                return (0, E.jsx)(
                    el.E,
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
                let { sortedGames: e } = C4();
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
            SM.A.fetch();
        },
        buildLayout: () => [_Y, _X, C6, C5],
    }),
    C9 = (0, a.t_)(u.X.MESSAGING_PERMISSIONS_PANEL, {
        useTitle: () => j.intl.string(j.t.Cz07t8),
        buildLayout: () => [Ip, C8, Co, Ij, C7, IF],
    }),
    be = (0, a.i4)(u.X.MESSAGING_PERMISSIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.Cz07t8),
        icon: C2.l,
        buildLayout: () => [C9],
    });
var bt = i(782603),
    bi = i(899847),
    bn = i(695515),
    bl = i(936926);
let bs = (0, a.Hn)(u.X.MOBILE_NOTIFICATION_DELAY, {
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
    br = (0, a.zD)(u.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => j.intl.string(j.t["btbS+Z"]),
        useSubtitle: () =>
            j.intl.format(j.t.Q5crhR, { onClick: () => (0, eq.openUserSettings)(u.X.TTS_PLAYBACK_RATE) }),
        useValue: L.on.useSetting,
        setValue: L.on.updateSetting,
    }),
    ba = (0, a.Qx)(u.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.JZxxGx),
        useSubtitle: () => j.intl.string(j.t.HDLtJl),
        useValue: () => (0, g.bG)([uD.A], () => uD.A.getTTSType()),
        setValue: (e) => uV.default.setTTSType(e),
        useOptions: function () {
            return [
                { name: j.intl.string(j.t.B1AGeJ), value: U.aVn.ALL_CHANNELS },
                { name: j.intl.string(j.t.uzZg9e), value: U.aVn.SELECTED_CHANNEL },
                { name: j.intl.string(j.t.DYO5Oi), value: U.aVn.NEVER },
            ];
        },
        usePredicate: () => nh.$j,
    }),
    bo = u.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    bu = (0, a.bd)(bo, {
        useTitle: (e) => (e ? j.intl.string(j.t.RyimDk) : j.intl.string(j.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return lv(bo, {
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
        buildLayout: () => [bs, br, ba],
    }),
    bd = (0, a.zZ)(u.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => j.intl.string(j.t["31DySj"]),
        buildLayout: () => [bu],
    }),
    bc = (0, a.zD)(u.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => j.intl.string(j.t.VH8AIJ),
        useSubtitle: () => j.intl.string(j.t["9K4qwX"]),
        useValue: function () {
            return (0, g.bG)([uD.A], () => !uD.A.getDisableUnreadBadge());
        },
        setValue: (e) => uV.default.setDisableUnreadBadge(!e),
    }),
    bg = (0, a.zZ)(u.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.l6w3Vj),
        buildLayout: () => [bc],
    });
var bm = i(840559),
    bA = i(997187),
    bh = i(723923);
let bE = bh.px.map((e) =>
        (0, a.zD)(`${u.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                (function (e) {
                    let { categories: t } = (0, g.cf)([bA.A], () => bA.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, bm.CA)(e.category, t),
        }),
    ),
    bS = (0, a.Tf)(u.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => j.intl.string(j.t.Ra9Pwk),
        useSubtitle: () => j.intl.string(j.t.iYjQ8X),
        useLabel: () => j.intl.string(j.t.KT1pBA),
        useDisabled: function () {
            let { categories: e } = (0, g.cf)([bA.A], () => bA.A.getEmailSettings());
            return bh.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, bm.NI)(),
        useVariant: () => "critical-secondary",
    }),
    bT = (0, a.zZ)(u.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => j.intl.string(j.t["w/qqKK"]),
        initialize: function () {
            let { initialized: e } = bA.A.getEmailSettings();
            e || (0, bm.cR)();
        },
        buildLayout: () => [...bE, bS],
    }),
    bx = (0, a.zD)(u.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t["/0WCll"]),
        useSubtitle: () => j.intl.string(j.t.wF9ih3),
        useValue: function () {
            return (0, g.bG)([uD.A], () => uD.A.getDesktopType()) !== U.nRU.NEVER;
        },
        setValue: (e) => uV.default.setDesktopType(e ? U.nRU.ALL : U.nRU.NEVER),
    });
var bp = i(832712),
    bf = i(543465),
    bN = i(790782);
let b_ = (0, a.zD)(u.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => j.intl.string(j.t["k6m/si"]),
    useSubtitle: () => j.intl.string(j.t.LGynPs),
    useValue: () => (0, g.bG)([bf.Ay], () => bf.Ay.useNewNotifications),
    setValue: function (e) {
        bp.A.setAccountFlag(M.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (Eq.w.set("turnedOffNewNotifications", !0),
                G.default.track(U.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: eh.A.getGuildsArray().filter(
                        (e) => bf.Ay.resolveGuildUnreadSetting(e) === bN.e.ONLY_MENTIONS,
                    ).length,
                }));
    },
    usePredicate: () =>
        (0, g.bG)(
            [iA.default, bf.Ay],
            () =>
                iA.default.getCurrentUser()?.isStaff() ||
                iA.default.getCurrentUser()?.isStaffPersonal() ||
                bf.Ay.useNewNotifications,
        ),
});
var bI = i(534654);
let bC = (0, a.zD)(u.X.SCREEN_DOWNTIME_REMINDER, {
        useTitle: () => j.intl.string(j.t.z9h8Ym),
        useSubtitle: () => j.intl.string(j.t.TummoQ),
        useValue: () => (0, g.bG)([uD.A], () => uD.A.screenDowntimeReminder),
        setValue: (e) => uV.default.setScreenDowntimeReminder(e),
        usePredicate: function () {
            let e = (0, bl.Vh)({ location: "ScreenDowntimeReminderSetting" }),
                t = (0, bI.A)(),
                i = (0, Nv.Du)();
            return e && t && i;
        },
    }),
    bb = (0, a.zD)(u.X.SCREEN_DOWNTIME_SCHEDULE, {
        useTitle: () => j.intl.string(j.t.onrAy7),
        useSubtitle: () => j.intl.string(j.t["/071J7"]),
        useValue: L.gY.useSetting,
        setValue: (e) => L.gY.updateSetting(e),
        usePredicate: function () {
            let e = (0, bl.Vh)({ location: "ScreenDowntimeScheduleSetting" }),
                t = (0, bI.A)(),
                i = (0, Nv.Du)();
            return e && t && i;
        },
    });
var bv = i(70730);
let by = (0, a.zD)(u.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
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
            let { enabled: e } = bv.u.getConfig({ location: "FriendAnniversaryNotifications" });
            return e;
        },
    }),
    bj = (0, w.mj)({
        kind: "user",
        name: "2026-03-friend-is-online-v3",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    bO = (0, a.zD)(u.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.sQQgFj),
        useValue: L.NR.useSetting,
        setValue: function (e) {
            L.NR.updateSetting(e),
                G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: M.Y.ACCOUNT,
                    friend_online_notifications: e,
                });
        },
        usePredicate: () => bj.useConfig({ location: "FriendOnlineNotifications" }).showSettingsToggle,
    }),
    bR = (0, a.zD)(u.X.GO_LIVE_NOTIFICATIONS, {
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
    bL = (0, w.mj)({
        kind: "user",
        name: "2026-01-profile-updates-notification",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 0: { showSettingsToggle: !1 }, 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    bD = (0, a.zD)(u.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.xBLMhQ),
        useValue: L.T3.useSetting,
        setValue: function (e) {
            L.T3.updateSetting(e),
                G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: M.Y.ACCOUNT,
                    profile_updates_notifications: e,
                });
        },
        usePredicate: () => bL.useConfig({ location: "user_settings.ProfileUpdatesNotifications" }).showSettingsToggle,
    });
var bP = i(815807);
let bG = (0, a.Hn)(u.X.REACTION_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: j.intl.string(j.t["9x/RtT"]), value: H.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: j.intl.string(j.t.fJAbQd), value: H.Tz.ONLY_DMS },
            { id: "disabled", label: j.intl.string(j.t["xu+UDU"]), value: H.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: L.Zp.useSetting,
        setValue: (e) => (0, bP.n4)(e, L.Zp.getSetting()),
    }),
    bM = (0, a.zD)(u.X.SERVER_TRENDING_NOTIFICATIONS, {
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
    bU = (0, w.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    bV = (0, a.zD)(u.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.G8NPz6),
        useValue: L.zS.useSetting,
        setValue: function (e) {
            L.zS.updateSetting(e),
                G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: M.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                });
        },
        usePredicate: () => bU.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    bk = (0, a.FW)(u.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.FEVRDV),
        buildLayout: () => [bR, by, bO, bM, bV, bD, bG],
    }),
    bw = (0, a.zD)(u.X.TASK_BAR_FLASHING, {
        useTitle: () => j.intl.string(j.t.xSmFQG),
        useSubtitle: () => j.intl.string(j.t.bd4j4x),
        useValue: () => (0, g.bG)([uD.A], () => uD.A.taskbarFlash),
        setValue: (e) => uV.default.setTaskbarFlash(e),
        usePredicate: () => (0, c.uF)(),
    }),
    bF = (0, a.zZ)(u.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => j.intl.string(j.t["/dp6yY"]),
        buildLayout: () => [bx, bw, bk, b_, bb, bC],
    });
var bB = i(965957),
    bz = i(312671),
    bY = i(235079);
let bX = (0, a.zD)(u.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = uP.A.useHolidaySoundpack();
        return null == e ? "" : j.intl.format(j.t["E/OyBr"], { soundpack: j.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, g.bG)([bz.A], () => bz.A.getSoundpack()),
            t = uP.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = uP.A.getHolidaySoundpack();
        tZ()(null != t, "predicate should fail if no soundpack is available"), (0, bB.p)(e ? t : bY.i.CLASSIC);
    },
    usePredicate: uP.A.useIsEligible,
});
var bH = i(970931);
let bK = {
        useTitle: () => j.intl.string(j.t.jD1qzM),
        sound: "message1",
        useDisabled: bH.kB,
        useDisabledMessage: () => ((0, bH.kB)() ? j.intl.string(j.t.cIRG0s) : void 0),
    },
    bW = { useTitle: () => j.intl.string(j.t.XBrJT6), sound: "call_ringing" },
    bZ = (0, a.zD)(u.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.TzjwV9),
        useSubtitle: () => j.intl.format(j.t.OOiGCM, { onClick: () => uF("message3") }),
        useValue: () =>
            (0, g.bG)([uD.A], () => uD.A.getNotifyMessagesInSelectedChannel() && !uD.A.getDisableAllSounds()),
        setValue: (e) => uV.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, g.bG)([uD.A], () => uD.A.getDisableAllSounds()),
    }),
    bq = (0, a.zD)(u.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => j.intl.string(j.t["2ZhCOd"]),
        useSubtitle: () => j.intl.string(j.t.EAKdPr),
        useValue: () => (0, g.bG)([uD.A], () => uD.A.getDisableAllSounds()),
        setValue: (e) => uV.default.toggleDisableAllSounds(e),
    }),
    bQ = (0, a.D1)(u.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                uw();
            };
        },
        buildLayout: () => [uB(bK), bZ, uB(bW), bq],
    }),
    bJ = (0, a.AK)(u.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t["MMy+lm"]),
        useSearchTerms: () => [j.intl.string(j.t["MMy+lm"])],
        destinationKey: u.X.SOUNDS_CATEGORY,
    }),
    b$ = (0, a.gN)(u.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [bJ] }),
    b0 = (0, a.zZ)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.LweOYy),
        buildLayout: () => [bX, bQ, b$],
    }),
    b1 = (0, a.t_)(u.X.NOTIFICATIONS_PANEL, {
        useTitle: () => j.intl.string(j.t.HcoRu0),
        initialize: () => {
            !(0, bl.Eq)({ location: "NotificationsPanel" }) ||
                null != bn.A.getAgeGroup() ||
                bn.A.isLoading() ||
                (bn.A.canRefetch() && bi.Ay.initialPageLoad());
        },
        buildLayout: () => [bF, b0, bg, bT, bd],
    }),
    b2 = (0, a.i4)(u.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.HcoRu0),
        icon: bt.X,
        buildLayout: () => [b1],
    }),
    b3 = (0, a.WI)(u.X.USER_SECTION, {
        useTitle: () => j.intl.string(j.t.ShSTDe),
        hideTitle: !0,
        buildLayout: () => {
            let e = (0, o.Bv)("UserSection");
            return [NH, ...(e ? [] : [Cm]), C1, ...(e ? [be] : []), ...(e ? [] : [Nq]), ...(e ? [] : [_G]), b2, _R];
        },
    });
var b5 = i(387758),
    b6 = i(271866),
    b4 = i(147964),
    b8 = i(868511);
let b7 = (0, a.zD)(u.X.APPLICATION_TEST_MODE, {
        useTitle: () => j.intl.string(j.t.erOqlh),
        useSubtitle: () => j.intl.string(j.t["52hMnD"]),
        usePredicate: L.Q_.useSetting,
        useValue: () => (0, g.bG)([b4.A], () => null != b4.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, K.openModal)((e) => (0, E.jsx)(b8.A, { ...e })) : b6.cL();
        },
    }),
    b9 = (0, a.zD)(u.X.DEVELOPER_MODE, {
        useTitle: () => j.intl.string(j.t.ObIb1Q),
        useSubtitle: () => j.intl.format(j.t["CY6q/Q"], { apiDocsUrl: U.X7G.API_DOCS }),
        useValue: L.Q_.useSetting,
        setValue: L.Q_.updateSetting,
        usePredicate: () => cB.p5,
    }),
    ve = (0, a.zZ)(u.X.DEVELOPER_CATEGORY, { buildLayout: () => [b9, b7] }),
    vt = (0, a.t_)(u.X.DEVELOPER_PANEL, { useTitle: () => j.intl.string(j.t["0BRxRp"]), buildLayout: () => [ve] }),
    vi = (0, a.i4)(u.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: b5.G,
        useTitle: () => j.intl.string(j.t["0BRxRp"]),
        buildLayout: () => [vt],
    });
var vn = i(70688),
    vl = i(830215);
let vs = (0, a.i4)(u.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => j.intl.string(j.t["2jxGer"]),
        icon: vn.o,
        onClick: () => {
            (0, s1.A)({
                title: j.intl.string(j.t["2jxGer"]),
                subtitle: j.intl.string(j.t.SUnWBB),
                confirmText: j.intl.string(j.t["2jxGer"]),
                onConfirm: () => {
                    vl.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    vr = (0, a.WI)(u.X.UTILITY_SECTION, {
        useTitle: () => j.intl.string(j.t["2kOEFe"]),
        hideTitle: !0,
        buildLayout: () => [vi, vs],
    }),
    va = (0, a.Hr)({
        buildLayout: function () {
            return [p5, b3, Eh, du, (0, o.Bv)("UserSettingsRoot_buildLayout") ? Tj : i8, SG, vr];
        },
        analyticsKey: "user_settings",
    });
