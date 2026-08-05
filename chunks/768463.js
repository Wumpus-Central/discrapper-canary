i.d(t, { D: () => vu });
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
        buildLayout: () => ((0, o.Bv)("GuildActivitySharingCategory") ? [Z, e_, Y] : [Z]),
    }),
    eC = (0, a.zZ)(u.X.ACTIVITY_PRIVACY_MY_SERVERS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.TqdOvC),
        useSubtitle: () => (z("MyServersCategory") ? j.intl.string(D.default.OO17Lg) : null),
        buildLayout: () => [e_, Y],
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
    eX = i(592598),
    eY = i(351906),
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
        text_notifications_mode: eX.A.isNotificationDisabled(e1.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != n ? (0, e0.dI)(n.shortcut) : null,
        text_activation_hotkey: null != l ? (0, e0.dI)(l.shortcut) : null,
        text_opacity_slider: eW.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? eK.default.enabled,
    };
}
var e4 = i(793574),
    e6 = i(237984),
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
                    (0, e6.b)(e4.A.USER_SETTINGS, U.BRT.APP);
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
            { data: l } = (0, tT.I)(n?.gameId),
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
let tX = (0, a.E2)(u.X.OVERLAY_LEGACY_SETTING, {
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
    tY = (0, a.E2)(u.X.OVERLAY_OOP_SETTING, {
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
        buildLayout: () => [tk, tY, tX, tn],
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
                n = (0, g.bG)([eX.A], () => eX.A.isLimitedInteractionOverrideEnabled(i)),
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
                t = (0, g.bG)([eX.A], () => eX.A.isNotificationDisabledBySetting(t3.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function t4(e) {
    return (0, a.zD)(e.key, {
        useTitle: () => j.intl.string(e.title),
        useSubtitle: () => j.intl.string(e.description),
        useValue: () => !(0, g.bG)([eX.A], () => eX.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            tA.A.setNotificationDisabledSetting(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let t6 = (0, a.FW)(u.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => t5.map(t4),
    }),
    t8 = (0, a.zZ)(u.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.xOE5bA),
        buildLayout: () => [t6],
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
    let e = (0, g.bG)([eY.A], () => eY.A.enabled),
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
                eX.A.addChangeListener(e3),
                eW.default.addChangeListener(e3),
                eK.default.addChangeListener(e3),
                eZ.isPlatformEmbedded && (0, _.a2)(),
                () => {
                    eH.Ay.removeChangeListener(e3),
                        eX.A.removeChangeListener(e3),
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
function iX() {
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
function iY() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: i } = C();
    return 0 === e.length
        ? (0, E.jsx)(iX, {})
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
    Component: () => (0, E.jsx)(iY, {}),
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
    i4 = (0, a.t_)(u.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => j.intl.string(j.t.AVDyEj),
        buildLayout: () => [i5, iW],
    }),
    i6 = (0, a.i4)(u.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.AVDyEj),
        icon: iC._,
        usePredicate: eQ.Pi,
        buildLayout: () => [i4],
    }),
    i8 = (0, a.WI)(u.X.ACTIVITY_SECTION, {
        useTitle: () => j.intl.string(j.t.nVPpLM),
        buildLayout: () => [eG, i6, iI],
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
    nX = (0, a.zZ)(u.X.COLOR_AND_CONTRAST_CATEGORY, {
        useTitle: () => j.intl.string(j.t.JqvyiY),
        buildLayout: () => [nk, nj, nD, nR, nz, nM, nV, nU, nL, nv],
    });
var nY = i(397438),
    nH = i(355097);
function nK(e) {
    return (0, g.bG)([nY.A], () =>
        (function (e) {
            switch (e) {
                case nH._A.REDUCED_MOTION:
                    return j.intl.format(j.t["1dT9V4"], {});
                case nH._A.REDUCED_MOTION_STICKERS:
                    return j.intl.string(j.t["2ExvRu"]);
                default:
                    return;
            }
        })(nY.A.getAppliedOverrideReasonKey(e)),
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
function n4(e) {
    return `${e.toFixed(0)}px`;
}
let n6 = (0, a.sN)(u.X.APPEARANCE_FONT_SCALING, {
        useTitle: () => j.intl.string(j.t.rT3Pq5),
        useSubtitle: () => j.intl.string(j.t.LXUhen),
        markers: U.hH7.FONT_SIZES,
        stickToMarkers: !0,
        minValue: U.hH7.FONT_SIZES["0"],
        maxValue: U.hH7.FONT_SIZES[U.hH7.FONT_SIZES.length - 1],
        useDefaultValue: () => U.hH7.FONT_SIZE_DEFAULT,
        getInitialValue: () => ni.Ay.fontSize,
        onValueRender: n4,
        onMarkerRender: n4,
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
        buildLayout: () => [n6, n8, n5],
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
        buildLayout: () => [n7, lo, nX, n0, nC],
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
    lX = (0, a.zD)(u.X.CHAT_STICKERS_AUTOCOMPLETE, {
        useTitle: () => j.intl.string(j.t["d+It2U"]),
        useValue: L.ML.useSetting,
        setValue: (e) => {
            G.default.track(U.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                enabled: e,
                location: { section: U.JJy.SETTINGS_TEXT_AND_IMAGES },
                location_stack: [e4.A.TEXT_AND_IMAGES],
            }),
                L.ML.updateSetting(e);
        },
    }),
    lY = (0, a.zZ)(u.X.APPEARANCE_CHAT_BOX_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Ob7VMB),
        useSearchTerms: () => [j.intl.string(j.t.onqU6o)],
        buildLayout: () => [lz, lF, lX, lB, lL, lk],
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
                        location_stack: [e4.A.USER_SETTINGS],
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
    l4 = (0, a.AK)(u.X.APPEARANCE_CHAT_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.UDr3Iy),
        useSearchTerms: () => [j.intl.string(j.t.UDr3Iy)],
        destinationKey: u.X.ACCESSIBILITY_PANEL,
    }),
    l6 = (0, a.gN)(u.X.APPEARANCE_CHAT_RELATED_SETTINGS, { buildLayout: () => [l4] });
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
    let { analyticsLocations: e } = (0, n1.Ay)(e4.A.USER_SETTINGS_FAVORITES),
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
        buildLayout: () => [sd, sc, sg, sh, sE, sA, sa, l6],
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
            return (0, g.bG)([eY.A], () => {
                let { autoToggle: e } = eY.A.getSettings();
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
            return (0, g.bG)([eY.A], () => {
                let { enabled: e } = eY.A.getSettings();
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
            return (0, g.bG)([eY.A], () => eY.A.getSettings().disabledOverlayWidgets ?? sb);
        },
        setValue: (e) => lS.A.update({ disabledOverlayWidgets: e }),
        closeOnSelect: !1,
        wrapTags: !0,
    }),
    sy = (0, a.zD)(u.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => j.intl.string(j.t.LSBUGR),
        useValue: () =>
            (0, g.bG)([eY.A], () => {
                let { hidePersonalInformation: e } = eY.A.getSettings();
                return e;
            }),
        setValue: (e) => lS.A.update({ hidePersonalInformation: e }),
    }),
    sj = (0, a.zD)(u.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => j.intl.string(j.t.uWBOri),
        useValue: () =>
            (0, g.bG)([eY.A], () => {
                let { hideInstantInvites: e } = eY.A.getSettings();
                return e;
            }),
        setValue: (e) => lS.A.update({ hideInstantInvites: e }),
    }),
    sO = (0, a.zD)(u.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => j.intl.string(j.t.OrqYDP),
        useValue: () =>
            (0, g.bG)([eY.A], () => {
                let { disableSounds: e } = eY.A.getSettings();
                return e;
            }),
        setValue: (e) => lS.A.update({ disableSounds: e }),
    }),
    sR = (0, a.zD)(u.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.sUAbLd),
        useValue: () =>
            (0, g.bG)([eY.A], () => {
                let { disableNotifications: e } = eY.A.getSettings();
                return e;
            }),
        setValue: (e) => lS.A.update({ disableNotifications: e }),
    }),
    sL = (0, a.zD)(u.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => j.intl.string(j.t["iA81+a"]),
        useSubtitle: () => j.intl.string(j.t.P4vj0h),
        useValue: () =>
            (0, g.bG)([eY.A], () => {
                let { enableContentProtection: e } = eY.A.getSettings();
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
    sM = i(141343),
    sU = i(665267),
    sV = i(414133),
    sk = i(412848);
let sw = (0, a.Hn)(u.X.APPEARANCE_GUILD_THEME_DEFAULT_PREFERENCE, {
        useTitle: () => j.intl.string(j.t.Q7mm4g),
        useSearchTerms: () => [j.intl.string(sk.default["/6NbRv"])],
        useOptions: () => [
            { id: "guild", label: j.intl.string(j.t["hrS/Pc"]), value: H.tI.GUILD },
            { id: "personal", label: j.intl.string(j.t.mlvXIq), value: H.tI.PERSONAL },
        ],
        useValue: () => L.zY.useSetting(),
        setValue: L.zY.updateSetting,
        usePredicate: () => (0, sV.OS)("GuildThemeDefaultPreferenceSetting"),
    }),
    sF = (0, a.zD)(u.X.SYNC_PROFILE_THEMES, {
        useTitle: () => j.intl.string(j.t.C00w4l),
        useValue: () => (0, g.bG)([ni.Ay], () => ni.Ay.syncProfileThemeWithUserTheme),
        setValue: () => (0, ny.M1)(),
    });
var sB = i(458024),
    sz = i(284016);
let sX = (0, a.zD)(u.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => j.intl.string(j.t["/B+kEV"]),
    useSearchTerms: () => [j.intl.string(j.t.Ksh3ik)],
    useValue: function () {
        return (0, g.bG)([sz.A], () => !1 !== sz.A.shouldSync("appearance"));
    },
    useDisabled: function () {
        let e = (0, sB.Ay)("SyncThemeSetting"),
            t = (0, g.bG)([iR.A], () => iR.A.isSameAsDeviceThemeEnabled());
        return e && t;
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
var sY = i(393284);
let sH = (0, a.AK)(u.X.APPEARANCE_THEME_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.nhVQDJ),
        useSearchTerms: () => [j.intl.string(j.t.nhVQDJ)],
        destinationKey: u.X.ACCESSIBILITY_PANEL,
    }),
    sK = (0, a.gN)(u.X.APPEARANCE_THEME_RELATED_SETTINGS, { buildLayout: () => [sH] }),
    sW = (0, a.zZ)(u.X.APPEARANCE_THEME_CATEGORY, {
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
            let e = (0, g.bG)([sG.A, ni.Ay], () => ni.Ay.useForcedColors || sG.A.isPreview),
                t = (0, sM.V)();
            return e || t
                ? null
                : {
                      type: h.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "open-client-themes-button",
                              type: h.UV.BUTTON,
                              text: j.intl.string(j.t["E+COuA"]),
                              onClick: sU.J3,
                          },
                      ],
                  };
        },
        buildLayout: () => [sY.k, sX, sF, sw, sK],
    }),
    sZ = (0, a.t_)(u.X.APPEARANCE_PANEL, {
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
        buildLayout: () => [sW, l5, sS, lY, sf, sP, lp],
    }),
    sq = [
        { badgeType: h.Xi.NEW, dismissibleContent: eF.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE },
        {
            badgeType: h.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: eF.M.FAVORITES_GUILD_NEW_BADGE,
            StronglyDiscouragedCustomComponent: function () {
                return (0, E.jsx)(lT.JI, { text: j.intl.string(j.t.y2b7CA) });
            },
        },
    ],
    sQ = (0, a.i4)(u.X.APPEARANCE_SIDEBAR_ITEM, {
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
                    ((i = (0, g.bG)([eY.A], () => eY.A.enabled, [])),
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
                ? sq.filter((e) => {
                      let { dismissibleContent: t } = e;
                      return t !== eF.M.FAVORITES_GUILD_NEW_BADGE;
                  })
                : sq,
        buildLayout: () => [sZ],
    });
var sJ = i(37646),
    s$ = i(434404);
let s0 = (0, a.t_)(u.X.LANGUAGE_AND_TIME_PANEL, {
        useTitle: () => j.intl.string(j.t.KyFVyi),
        buildLayout: () => [s$.F],
    }),
    s1 = (0, a.i4)(u.X.LANGUAGE_AND_TIME_SIDEBAR_ITEM, {
        icon: sJ.U,
        useTitle: () => j.intl.string(j.t.KyFVyi),
        buildLayout: () => [s0],
    });
var s2 = i(3137),
    s3 = i(314116),
    s5 = i(369606),
    s4 = i(604121),
    s6 = i(725951),
    s8 = i(400492),
    s7 = i(669067),
    s9 = i(115063),
    re = i(754692),
    rt = i(927018),
    ri = i(512599),
    rn = i(532197),
    rl = i(874486),
    rs = i(989349),
    rr = i.n(rs),
    ra = i(58703),
    ro = i(906688),
    ru = i(892208);
function rd(e) {
    let { achievementId: t, dateUnlocked: i } = e,
        n = (0, rt.vM)(t);
    if (null == n) return null;
    let l = null != i,
        { name: s, description: r, hideDescriptionUntilUnlock: a, onAction: o } = n,
        u = a && !l,
        d = l ? "text-strong" : "text-muted",
        c = l ? "text-default" : "text-muted",
        g = rr()(i),
        m = null != o && l,
        A = m ? en.D : "div";
    return (0, E.jsxs)(A, {
        className: e7()(ru.kL, m && ru.b),
        onClick: function () {
            m && o();
        },
        children: [
            (0, E.jsx)("div", {
                className: ru.zc,
                children: (0, E.jsx)(ro.A, { achievementId: t, size: ro.A.Sizes.SIZE_40, unlocked: l }),
            }),
            (0, E.jsxs)("div", {
                className: ru.VW,
                children: [
                    null != i &&
                        (0, E.jsx)(el.E, {
                            variant: "text-xxs/semibold",
                            color: "text-muted",
                            className: ru.YR,
                            children: (0, ra.mk)(g),
                        }),
                    (0, E.jsx)(el.E, { variant: "text-md/medium", color: d, children: s() }),
                    (0, E.jsx)(el.E, { variant: "text-xs/normal", color: c, children: u ? "?????" : r() }),
                ],
            }),
        ],
    });
}
var rc = i(776351);
function rg(e) {
    let { onBackClick: t } = e,
        i = (0, g.bG)([rl.A], () => rl.A.getAllUnlockedAchievements()),
        n = S.useMemo(() => Object.values(i).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [i]),
        l = S.useMemo(
            () =>
                Object.values(rt.l0)
                    .filter(N.Vq)
                    .filter((e) => null == i[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [i],
        );
    return (0, E.jsxs)(E.Fragment, {
        children: [
            (0, E.jsxs)(en.D, {
                onClick: t,
                className: rc.vv,
                children: [
                    (0, E.jsx)(rn.A, { direction: rn.A.Directions.LEFT, className: rc.Kk }),
                    (0, E.jsx)(el.E, {
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: j.intl.string(j.t["13/7kX"]),
                    }),
                ],
            }),
            (0, E.jsxs)("div", {
                className: rc.N1,
                children: [
                    (0, E.jsxs)("div", {
                        className: rc.if,
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
                        className: rc.nr,
                        children: (0, E.jsx)(s5.O, {
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
                    className: rc.yF,
                    children: (0, E.jsx)("div", {
                        className: rc.Eh,
                        children: n.map((e) => {
                            let { achievementId: t, dateUnlocked: i } = e;
                            return (0, E.jsx)(rd, { achievementId: t, dateUnlocked: i }, t);
                        }),
                    }),
                }),
            l.length > 0 &&
                (0, E.jsxs)("div", {
                    className: rc.yF,
                    children: [
                        (0, E.jsx)("div", {
                            className: rc.if,
                            children: (0, E.jsx)(el.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                children: j.intl.string(j.t.GFyMg1),
                            }),
                        }),
                        (0, E.jsx)("div", {
                            className: rc.Eh,
                            children: l.map((e) => (0, E.jsx)(rd, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, E.jsx)("div", { className: rc.yF, children: (0, E.jsx)("div", { className: rc.F3 }) }),
        ],
    });
}
var rm = i(224964),
    rA = i(31408),
    rh = i(381579);
let rE = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    rS = (0, eJ.range)(0, 11),
    rT = (0, eJ.range)(0, 2.25, 0.25),
    rx = (0, eJ.range)(1, 11),
    rp = (0, eJ.range)(1, 26),
    rf = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function rN(e) {
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
function r_(e) {
    let { children: t } = e;
    return (0, E.jsx)(el.E, { className: rh.iF, variant: "text-sm/normal", color: "text-default", children: t });
}
function rI(e) {
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
            e || (0, re._)(rt.sn.DISABLE_POGGERMODE),
                e && (!i || l)
                    ? (0, s3.A)({
                          title: l ? j.intl.string(j.t["FxT+p0"]) : j.intl.string(j.t.TAZ4F9),
                          subtitle: l ? j.intl.string(j.t.gmixrx) : j.intl.string(j.t.jN3t3K),
                          confirmText: j.intl.string(j.t.JFfins),
                          onConfirm: () => n(l ? rE : { enabled: !0, warningSeen: !0 }),
                      })
                    : n({ enabled: e });
        },
    });
}
function rC(e) {
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
                        className: rh.KF,
                        children: j.intl.string(j.t.vd0D81),
                    }),
                    (0, E.jsx)(r_, { children: j.intl.string(j.t.a18Sug) }),
                    (0, E.jsx)(nE.A, {
                        disabled: a,
                        markers: rx,
                        stickToMarkers: !0,
                        minValue: rx[0],
                        maxValue: rx[rx.length - 1],
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
                        className: rh.KF,
                        children: j.intl.string(j.t.sPO3ij),
                    }),
                    (0, E.jsx)(r_, { children: j.intl.string(j.t.xoldVn) }),
                    (0, E.jsx)(nE.A, {
                        disabled: a,
                        markers: rp,
                        stickToMarkers: !0,
                        minValue: rp[0],
                        maxValue: rp[rp.length - 1],
                        initialValue: l,
                        onValueChange: (e) => r({ confettiSize: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, E.jsx)(rN, {
                disabled: a,
                locations: [
                    {
                        location: rA.k.CHAT_INPUT,
                        title: j.intl.string(j.t.elTtyz),
                        description: j.intl.string(j.t.HtKfMi),
                    },
                    {
                        location: rA.k.REACTION,
                        title: j.intl.string(j.t.Ik4VIa),
                        description: j.intl.string(j.t.y4rqK0),
                    },
                    {
                        location: rA.k.MEMBER_USER,
                        title: j.intl.string(j.t.ZXBlAn),
                        description: j.intl.string(j.t["m9RD+c"]),
                    },
                    {
                        location: rA.k.CALL_TILE,
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
function rb(e) {
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
                        className: rh.KF,
                        children: j.intl.string(j.t.L0oQuh),
                    }),
                    (0, E.jsx)(r_, { children: j.intl.string(j.t["/OOFpL"]) }),
                    (0, E.jsx)(nE.A, {
                        disabled: r,
                        markers: rS,
                        stickToMarkers: !0,
                        minValue: rS[0],
                        maxValue: rS[rS.length - 1],
                        initialValue: l,
                        onValueChange: (e) => s({ combosRequiredCount: e }),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
        ],
    });
}
function rv(e) {
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
                        className: rh.KF,
                        children: j.intl.string(j.t.UxnnC4),
                    }),
                    (0, E.jsx)(r_, { children: j.intl.string(j.t.CEOEOb) }),
                    (0, E.jsx)(nE.A, {
                        disabled: a,
                        markers: rT,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: rT[0],
                        maxValue: rT[rT.length - 1],
                        initialValue: n,
                        onValueChange: (e) => {
                            var t;
                            null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > n &&
                                (0, re._)(rt.sn.MORE),
                                s(t, 1);
                        },
                        onMarkerRender: (e) => (e === rT[rT.length - 1] ? j.intl.string(j.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, E.jsx)(rN, {
                disabled: a,
                locations: [
                    {
                        location: rA.uD.CHAT_INPUT,
                        title: j.intl.string(j.t.vUcvPP),
                        description: j.intl.string(j.t.y00OrF),
                    },
                    {
                        location: rA.uD.VOICE_USER,
                        title: j.intl.string(j.t.TcRO54),
                        description: j.intl.string(j.t.YJCxVY),
                    },
                    {
                        location: rA.uD.MENTION,
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
function ry(e) {
    let { updateSettings: t } = e;
    return (0, E.jsx)(ij.n, {
        label: j.intl.string(j.t.EuXv2q),
        children: (0, E.jsxs)(Q.B, {
            gap: 16,
            children: [
                (0, E.jsx)("div", { children: j.intl.string(j.t["1SLnki"]) }),
                (0, E.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: rh.hw,
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
function rj(e) {
    let { onChangePage: t } = e;
    return (0, E.jsxs)(en.D, {
        onClick: function () {
            return t(1);
        },
        className: rh.Tq,
        children: [
            (0, E.jsx)("div", {
                className: rh.w1,
                children: (0, E.jsx)(s5.O, { size: "md", color: er.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, E.jsxs)("div", {
                className: rh.qL,
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
            (0, E.jsx)(tM._, { size: "custom", color: "currentColor", width: 16, className: rh.nT }),
        ],
    });
}
function rO() {
    return i
        .e("4660")
        .then(i.t.bind(i, 662336, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function rR(e) {
    let { onChangePage: t, setShowEnableAnimation: i } = e,
        n = (0, g.cf)([s2.A], () => s2.A.getState()),
        [l, s] = S.useState({ x: 0, y: 0 }),
        r = (0, rm.A)();
    function a(e, t) {
        var s, a, o, u, d, c, g, m;
        if (
            (e.enabled &&
                !1 === n.enabled &&
                (i(!0),
                (0, s8.Ak)("poggermode_enabled"),
                (0, s9.fO)({ duration: 2e3, intensity: e.shakeIntensity ?? n.shakeIntensity })),
            (0, ri.O9)(e),
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
        1 === t && h && (0, s9.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? n.shakeIntensity });
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
                (0, E.jsx)(rI, { settings: n, updateSettings: a }),
                (0, E.jsx)(rj, { onChangePage: t }),
                (0, E.jsx)(rb, { settings: n, updateSettings: a }),
                (0, E.jsx)(rv, { settings: n, updateSettings: a }),
                (0, E.jsx)(rC, { settings: n, updateSettings: a }),
                (0, E.jsx)(ry, { updateSettings: a }),
            ],
        })
    );
}
function rL(e) {
    return 0 === e ? s6.f.LEFT : s6.f.RIGHT;
}
let rD = (0, a.E2)(u.X.POGGERMODE_SETTING, {
        Component: function () {
            let [e, t] = S.useState(0),
                [i, n] = S.useState(rL(e)),
                [l, s] = S.useState(!1),
                r = (0, g.bG)([ni.Ay], () => ni.Ay.useReducedMotion),
                a = l && !r;
            return (
                S.useEffect(() => {
                    let t = setTimeout(() => {
                        n(rL(e));
                    }, 500);
                    return () => clearTimeout(t);
                }, [e]),
                S.useEffect(() => {
                    (0, s7._)(rf[e]);
                }, [e]),
                S.useEffect(() => {
                    Math.random() > 0.99 && (0, re._)(rt.sn.VISITOR_100);
                }, []),
                (0, E.jsxs)(E.Fragment, {
                    children: [
                        (0, E.jsx)(s6.A, {
                            className: rh.l3,
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
                                        return (0, E.jsx)(rR, { onChangePage: n(1), setShowEnableAnimation: i });
                                    case 1:
                                        return (0, E.jsx)(rg, { onBackClick: n(0) });
                                    default:
                                        return null;
                                }
                            })(e, t, s),
                        }),
                        (0, E.jsx)("div", {
                            className: a ? rh.Sr : rh.IP,
                            children: (0, E.jsx)(s4.a, {
                                className: rh.gT,
                                importData: rO,
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
    rP = (0, a.zZ)(u.X.POGGERMODE_CATEGORY, { buildLayout: () => [rD] });
var rG = i(231570);
let rM = (0, a.t_)(u.X.POGGERMODE_PANEL, { useTitle: () => j.intl.string(j.t.AtCukI), buildLayout: () => [rP] }),
    rU = (0, a.i4)(u.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.AtCukI),
        icon: () => (0, E.jsx)("img", { alt: "", src: i(724405), className: rG.$ }),
        usePredicate: () => (0, g.bG)([s2.A], () => s2.A.settingsVisible),
        buildLayout: () => [rM],
    });
var rV = i(307301),
    rk = i(410767),
    rw = i(695366),
    rF = i(293246),
    rB = i(868886);
function rz(e) {
    let { game: t, application: i } = e;
    return null == t || null == i
        ? (0, E.jsx)("div", {
              className: rB.zc,
              children: (0, E.jsx)(rw.E, { size: "sm", color: er.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, E.jsxs)("div", {
              className: rB.nt,
              children: [
                  (0, E.jsx)(p.A, { game: i, pid: t.pid, size: p.M.MEDIUM }),
                  (0, E.jsx)("div", {
                      className: rB.Am,
                      children: (0, E.jsx)(rw.E, { size: "sm", color: er.A.colors.TEXT_FEEDBACK_WARNING }),
                  }),
              ],
          });
}
function rX(e) {
    let t = (0, g.bG)([rF.Ay], () => rF.Ay.getMode()),
        { runningGame: i, runningGameApplication: n } = tu();
    null == i || i.elevated || ((i = void 0), (n = void 0));
    let l = (0, tj.NP)(),
        s = l && null != i && t === U.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? s : l, runningGame: i, runningGameApplication: n };
}
function rY(e) {
    let { className: t, sourcePage: i } = e,
        { canPrompt: n, runningGame: l, runningGameApplication: s } = rX(i);
    return n
        ? (0, E.jsxs)("div", {
              className: e7()(rB.kL, t),
              children: [
                  (0, E.jsx)(rz, { game: l, application: s }),
                  (0, E.jsxs)("div", {
                      className: rB.FS,
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
var rH = i(691885),
    rK = i(408278),
    rW = i(241326),
    rZ = i(489718),
    rq = i(189213),
    rQ = i(292666),
    rJ = i(320989),
    r$ = i(978263);
let r0 = [];
var r1 = i(235986),
    r2 = i(820785),
    r3 = i(734057),
    r5 = i(808728),
    r4 = i(926140),
    r6 = i(387722);
function r8() {}
let r7 = [r4.rD.VOICE_CHANNEL];
function r9(e) {
    e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0);
}
function ae() {
    return (0, E.jsx)("div", {
        className: r6.i1,
        children: (0, E.jsx)(el.E, {
            variant: "text-md/medium",
            color: "text-muted",
            className: r6.GN,
            children: j.intl.string(j.t.zHjCd1),
        }),
    });
}
function at(e) {
    let { keybind: t, className: i } = e,
        n = S.useRef(t);
    S.useEffect(() => {
        n.current = t;
    });
    let [l, s] = S.useState(t.params?.channelId ?? void 0),
        r = S.useCallback(() => {
            (0, K.openModalLazy)(
                async () => (e) =>
                    (0, E.jsx)(ai, {
                        ...e,
                        onSelect: (e) => {
                            s(e), tq.A.setKeybind({ ...n.current, params: { channelId: e } });
                        },
                    }),
            );
        }, []);
    return (0, E.jsx)("div", {
        className: e7()(r6.a8, i),
        children: (0, E.jsx)(l8.D, {
            label: j.intl.string(j.t.q4JpM8),
            children: (0, E.jsxs)(r1.A, {
                align: r1.A.Align.STRETCH,
                children: [
                    (0, E.jsx)("div", { className: r6.$X, children: (0, E.jsx)(an, { channelId: l }) }),
                    (0, E.jsx)(r1.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, E.jsx)(ek.$, { variant: "primary", text: j.intl.string(j.t.Dm8O4e), onClick: r }),
                    }),
                ],
            }),
        }),
    });
}
function ai(e) {
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
                [a, o] = S.useState(r0),
                u = S.useCallback((e, t) => {
                    "" === (t = t.trim()).trim() ? o(r0) : o(e);
                }, []);
            S.useEffect(
                () =>
                    rJ.A.addRouteChangeListener(() => {
                        r("");
                    }),
                [],
            );
            let [d] = S.useState(() => new r$.A(u, i, void 0, n));
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
        })({ visible: !0, autocompleterResultTypes: r7, autocompleterBeforeCreateSearchContext: r9 }),
        c =
            ((t = "" !== o),
            (i = (0, g.yK)([r5.Ay, r3.A, l9.A], () => {
                let e = l9.A.getGuildId();
                if (t || null == e) return [];
                let i = [];
                for (let t of r5.Ay.getVocalChannelIds(e)) {
                    let e = r3.A.getChannel(t);
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
            if (e?.type === r4.rD.VOICE_CHANNEL) return e.record.id;
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
                                  if (e?.type === r4.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == i) return null;
                          let n = null != i.parent_id ? r3.A.getChannel(i.parent_id) : void 0,
                              r = eh.A.getGuild(i.guild_id);
                          return (0, E.jsx)(
                              r2.c3,
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
                                      null != r ? (0, E.jsx)("div", { className: r6.J5, children: r.name }) : null,
                              },
                              i.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, E.jsx)(ae, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, E.jsx)(rq.Modal, {
        transitionState: n,
        onClose: l,
        title: j.intl.string(j.t.Dm8O4e),
        subtitle: j.intl.string(j.t.q4JpM8),
        actions: void 0,
        input: (0, E.jsx)(rQ.k, {
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
                                if (e?.type === r4.rD.VOICE_CHANNEL) return e.record;
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
function an(e) {
    let { channelId: t } = e,
        {
            channel: i,
            category: n,
            guild: l,
        } = (0, g.cf)([r3.A, eh.A], () => {
            let e = null != t ? r3.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? r3.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? eh.A.getGuild(e.guild_id) : void 0,
                  }
                : { channel: void 0, category: void 0, guild: void 0 };
        });
    return null == i
        ? (0, E.jsx)(el.E, {
              variant: "text-md/medium",
              color: "text-muted",
              className: r6.GN,
              children: j.intl.string(j.t["/fYIK7"]),
          })
        : (0, E.jsx)(r2.c3, {
              channel: i,
              id: i.id,
              category: n,
              onClick: r8,
              onFocus: r8,
              onMouseEnter: r8,
              focused: !1,
              children: null != l ? (0, E.jsx)("div", { className: r6.J5, children: l.name }) : null,
          });
}
var al = i(492064);
function as(e) {
    let { keybind: t } = e,
        i = e0.dI(t.shortcut);
    return lr.A.hasBind(i)
        ? (0, E.jsx)("div", {
              className: al.$e,
              children: (0, E.jsx)(q.w, { type: "warning", children: j.intl.string(j.t["7lQlw3"]) }),
          })
        : iV.Yy.has(i)
          ? (0, E.jsx)("div", {
                className: al.$e,
                children: (0, E.jsx)(q.w, {
                    type: "warning",
                    children: j.intl.format(j.t.MOIaNd, {
                        keyboardNavArticle: ty.A.getArticleURL(U.MVz.KEYBOARD_NAVIGATION),
                    }),
                }),
            })
          : void 0;
}
function ar(e) {
    let { keybind: t } = e;
    return t.action === U.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, E.jsx)(at, { keybind: t, className: al._M }) : null;
}
let aa = S.memo(function (e) {
    let { keybind: t, keybindDescriptions: i, keybindActionTypes: n } = e,
        l = S.useCallback((e) => tq.A.setKeybind({ ...t, action: e }), [t]),
        s = S.useCallback((e) => tq.A.setKeybind({ ...t, shortcut: e }), [t]),
        r = S.useCallback(() => tq.A.setKeybind({ ...t, enabled: !t.enabled }), [t]),
        a = S.useCallback(() => tq.A.deleteKeybind(t.id), [t.id]),
        o = S.useId(),
        u = S.useMemo(() => n.find((e) => e.value === t.action)?.label ?? t.action, [t.action, n]);
    return (0, E.jsxs)("div", {
        className: al.f_,
        children: [
            (0, E.jsx)(as, { keybind: t }),
            (0, E.jsx)("div", {
                className: al.XI,
                children: (0, E.jsx)(rH.l, {
                    selectionMode: "single",
                    label: j.intl.string(j.t.XH5b12),
                    value: t.action,
                    options: n,
                    onSelectionChange: l,
                    disabled: t.managed,
                }),
            }),
            (0, E.jsx)("div", {
                className: al.LE,
                children: (0, E.jsx)(l8.D, {
                    label: j.intl.string(j.t["1La4tC"]),
                    layout: "vertical",
                    children: (0, E.jsx)(tQ.A, { defaultValue: t.shortcut, onChange: s }),
                }),
            }),
            (0, E.jsxs)("div", {
                className: al.ne,
                children: [
                    !t.managed &&
                        (0, E.jsx)(rK.K, {
                            variant: "icon-only",
                            onClick: a,
                            icon: rW.u,
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
                                (0, E.jsx)(rZ.I, { checked: t.enabled, onChange: r, labelledBy: o }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, E.jsx)(el.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: al.h_,
                children: i[t.action],
            }),
            (0, E.jsx)(ar, { keybind: t }),
        ],
    });
});
var ao = i(549406),
    au = i(734066),
    ad = i(880144),
    ac = i(614455),
    ag = i(487866);
let am = function () {
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
            (t = (0, g.bG)([rF.Ay], () => (0, ad.A)(rF.Ay))),
            (i = (0, g.bG)([ac.A], () => ac.A.isSupported)),
            (n = (0, au.sw)()),
            (l = (0, au.BW)()),
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
                            ((0, eZ.isWindows)() || rF.Ay.getUseSystemScreensharePicker()) &&
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
                  className: ag.A,
                  children: r.map((e, t) =>
                      (0, E.jsxs)(
                          S.Fragment,
                          {
                              children: [
                                  (0, E.jsx)(aa, { keybind: e, keybindDescriptions: a, keybindActionTypes: o }),
                                  t < r.length - 1 ? (0, E.jsx)(ew.c, { className: ag.y, gap: 24 }) : null,
                              ],
                          },
                          e.id,
                      ),
                  ),
              });
    },
    aA = (0, a.E2)(u.X.CUSTOM_KEYBINDS_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["069nVT"])],
        Component: function () {
            return c.Av
                ? (0, E.jsx)(am, {})
                : (0, E.jsx)(q.w, {
                      type: "info",
                      children: j.intl.format(j.t.mPi3F3, { downloadLink: U.X7G.DOWNLOAD }),
                  });
        },
    });
var ah = i(475358),
    aE = i(28647),
    aS = i(760677);
function aT(e) {
    let { children: t } = e;
    return t([ao.Q_.MESSAGE, ao.Q_.NAVIGATION, ao.Q_.DND, ao.Q_.CHAT, ao.Q_.VOICE_AND_VIDEO, ao.Q_.MISCELLANEOUS]);
}
function ax(e) {
    let { showHeader: t = !0 } = e,
        i = e$()((0, ao.Bx)())
            .filter((e) => e.description !== j.intl.string(j.t.HnNtEI))
            .groupBy((e) => e.group)
            .value();
    return (0, E.jsxs)(Q.B, {
        gap: 48,
        children: [
            (0, E.jsx)(ij.n, {
                label: t ? j.intl.string(j.t.Lz5KHI) : void 0,
                children: (0, E.jsx)("div", {
                    className: aS.jh,
                    children: (0, E.jsxs)("div", {
                        className: aS.yZ,
                        children: [
                            (0, E.jsx)(el.E, { variant: "text-md/normal", children: j.intl.string(j.t.sMWLBj) }),
                            (0, E.jsx)("div", {
                                className: aS.DM,
                                children: (0, E.jsx)(ah.e, { shortcut: aE.z.binds["0"], className: aS.LE }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, E.jsx)(aT, {
                children: (e) =>
                    (0, E.jsx)(E.Fragment, {
                        children: e.map((e, t) => {
                            let n = (0, ao.Gm)(e),
                                l = (0, ao.zF)(e),
                                s = i[e];
                            return (0, E.jsx)(
                                ij.n,
                                {
                                    label: n,
                                    description: l,
                                    children: (0, E.jsx)("div", {
                                        className: aS.jh,
                                        children: s.map((e, t) =>
                                            (0, E.jsxs)(
                                                S.Fragment,
                                                {
                                                    children: [
                                                        0 !== t && (0, E.jsx)(ew.c, {}),
                                                        (0, E.jsxs)("div", {
                                                            className: aS.yZ,
                                                            children: [
                                                                (0, E.jsx)(el.E, {
                                                                    variant: "text-md/normal",
                                                                    children: e.description,
                                                                }),
                                                                (0, E.jsx)("div", {
                                                                    className: aS.DM,
                                                                    children: e.binds.map((e) =>
                                                                        (0, E.jsx)(
                                                                            ah.e,
                                                                            { shortcut: e, className: aS.LE },
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
let ap = (0, a.E2)(u.X.DEFAULT_KEYBINDS_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.Lz5KHI)],
    Component: () => (0, E.jsx)(ax, { showHeader: !1 }),
});
var af = i(19575),
    aN = i(546385);
let a_ = (0, a.E2)(u.X.HARDWARE_ACCELERATION, {
    usePredicate: () => c.Av && !(0, c.cX)(),
    useSearchTerms: () => [j.intl.string(j.t["/HIxyY"]), j.intl.string(j.t.B0hqpb)],
    Component: function () {
        let [e] = S.useState(() => af.Ay.getEnableHardwareAcceleration()),
            t = j.intl.string(j.t["/HIxyY"]),
            i = j.intl.string(j.t.B0hqpb);
        return (0, E.jsxs)(Q.B, {
            children: [
                (0, E.jsx)(J.d, { label: t, description: i, checked: e, onChange: aI }),
                !e && (0, E.jsx)(aN.A, { look: aN.k.WARNING, children: j.intl.string(j.t.j7S6IX) }),
            ],
        });
    },
});
function aI(e) {
    let t = e ? j.intl.format(j.t.LYXRxL, {}) : j.intl.format(j.t.uDP3Kz, {});
    (0, s3.A)({
        title: j.intl.string(j.t.aqpAvn),
        subtitle: t,
        confirmText: j.intl.string(j.t.vT7ckk),
        onConfirm: () => {
            af.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
let aC = (0, nw.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 }));
async function ab() {
    let e = await af.Ay.getOpenOnStart(),
        t = await af.Ay.getSetting("START_MINIMIZED", !1),
        i = await af.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
    aC.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: i });
}
let av = (0, a.zD)(u.X.OS_OPEN_ON_STARTUP, {
        useTitle: () => j.intl.string(j.t["3BeZti"]),
        usePredicate: () => c.Av && !(0, c.cX)(),
        useValue: () => aC.useState((e) => e.openOnStartup),
        setValue: function (e) {
            aC.setState({ openOnStartup: e }), af.Ay.send("TOGGLE_OPEN_ON_STARTUP", e);
        },
        initialize: () => {
            af.Ay.getOpenOnStart().then((e) => aC.setState({ openOnStartup: e }));
        },
    }),
    ay = (0, a.zD)(u.X.OS_MINIMIZE_TO_TRAY, {
        useTitle: () => j.intl.string(j.t.dJ5MUh),
        useSubtitle: () => j.intl.string(j.t.nQavHr),
        usePredicate: () => c.Av && !(0, c.cX)(),
        useValue: () => aC.useState((e) => e.minimizeToTray),
        setValue: function (e) {
            aC.setState({ minimizeToTray: e }), af.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e);
        },
        initialize: () => {
            af.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => aC.setState({ minimizeToTray: e }));
        },
    }),
    aj = (0, a.zD)(u.X.OS_START_MINIMIZED, {
        useTitle: () => j.intl.string(j.t.GfBL83),
        useSubtitle: () => j.intl.string(j.t.XGyhhc),
        usePredicate: () => (0, c.uF)(),
        useValue: () => aC.useState((e) => !!e.openOnStartup && e.startMinimized),
        setValue: function (e) {
            aC.setState({ startMinimized: e }), af.Ay.send("TOGGLE_START_MINIMIZED", e);
        },
        useDisabled: () => !aC.useState((e) => e.openOnStartup),
        initialize: () => {
            af.Ay.getSetting("START_MINIMIZED", !1).then((e) => aC.setState({ startMinimized: e }));
        },
    });
var aO = i(314647);
let aR = new Set(["failure", "unknown"]),
    aL = (0, a.E2)(u.X.OS_SYSTEM_SERVICE, {
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
                className: aO.q,
                children: [
                    (0, E.jsxs)("div", {
                        className: aO.L,
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
                                                            : aR.has(l.state)
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
function aD() {
    lm.h.dispatch({ type: "DISCORD_STATS_POPOUT_WINDOW_OPEN" });
}
let aP = (0, a.Tf)(u.X.DISCORD_STATS_POPOUT, {
        useTitle: () => "Discord Stats",
        useSubtitle: () => "Open a floating panel showing live GPU, CPU, and memory usage.",
        useLabel: () => "Open",
        usePredicate: () => (0, g.bG)([iA.default], () => iA.default.getCurrentUser()?.isStaff() ?? !1),
        onClick: () => {
            aD();
        },
    }),
    aG = (0, a.zZ)(u.X.SYSTEM_ADVANCED_CATEGORY, {
        useTitle: () => j.intl.string(j.t["8/udY0"]),
        buildLayout: () => [aP],
    }),
    aM = (0, a.zZ)(u.X.SYSTEM_GENERAL_CATEGORY, {
        useTitle: () => j.intl.string(j.t.cg6ltt),
        buildLayout: () => [av, aj, ay, a_],
        usePredicate: () => c.Av && ((0, c.uF)() || (0, c.j9)()),
        initialize: () => {
            ab();
        },
    }),
    aU = (0, a.zZ)(u.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["069nVT"]),
        useSubtitle: () => j.intl.string(j.t.T4LZVL),
        buildLayout: () => [aA],
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
                              icon: rV.j,
                              onClick: () => tq.A.addKeybind(),
                          },
                      ],
                  }
                : null,
    }),
    aV = (0, a.zZ)(u.X.SYSTEM_DEFAULT_KEYBINDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Lz5KHI),
        buildLayout: () => [ap],
    }),
    ak = (0, a.zZ)(u.X.SYSTEM_HELPER_CATEGORY, {
        useTitle: () => j.intl.string(j.t["+XZgmA"]),
        usePredicate: () => c.Av && ((0, c.uF)() || (0, c.j9)()),
        buildLayout: () => [aL],
    }),
    aw = (0, a.t_)(u.X.SYSTEM_PANEL, {
        useTitle: () => j.intl.string(j.t["VJ/qKo"]),
        buildLayout: () => [aM, aU, aV, ak, aG],
    }),
    aF = (0, a.i4)(u.X.SYSTEM_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["VJ/qKo"]),
        icon: rk.F,
        buildLayout: () => [aw],
    });
var aB = i(831544),
    az = i(922795),
    aX = i(212245),
    aY = i(329551),
    aH = i(285918),
    aK = i(413339),
    aW = i(952572),
    aZ = i(382003);
let aq = (0, a.E2)(u.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.lZTUPs)],
        usePredicate: aW.A,
        Component: function () {
            let e = (0, aX.p)(),
                t = S.useRef(!1),
                i = (0, g.bG)([rF.Ay], () => rF.Ay.getVideoDeviceId()),
                [n, l] = S.useState((0, aY.i)(iA.default.getCurrentUser())),
                s = S.useRef(n);
            return (
                S.useEffect(
                    () => () => {
                        t.current && (0, aH._C)(s.current);
                    },
                    [],
                ),
                (0, E.jsx)(aZ.A, {
                    selectedBackgroundOption: n,
                    onSelectBackgroundOption: function (i) {
                        (t.current = !0), (s.current = i), l(i), (0, aK.gB)(i, { location: e.location }).catch(U.tEg);
                    },
                    currentDeviceId: i,
                })
            );
        },
    }),
    aQ = (0, a.zD)(u.X.CAMERA_PREVIEW_PREFERENCE, {
        useTitle: () => j.intl.string(j.t["3Ppr1h"]),
        useSubtitle: () => j.intl.string(j.t.WNbX4O),
        useValue: L.bm.useSetting,
        setValue: (e) => {
            L.bm.updateSetting(e), G.default.track(U.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
        },
    });
var aJ = i(625841),
    a$ = i(74848),
    a0 = i(204050);
let a1 = (0, nw.D)(() => ({ previewEnabled: !1 }));
var a2 = i(731854);
let a3 = (0, a.E2)(u.X.CAMERA_SELECTION_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.FsQ3OR)],
    Component: function () {
        let e = (0, g.bG)([rF.Ay], () => rF.Ay.isVideoAvailable()),
            { id: t } = (0, a$.x5)(a2.oh.VIDEO_INPUT),
            { analyticsLocations: i } = (0, n1.Ay)();
        return (0, E.jsx)(aJ.U, {
            label: j.intl.string(j.t.FsQ3OR),
            deviceType: a2.oh.VIDEO_INPUT,
            location: "UserSettingsCameraSelect",
            isDisabled: !e,
            helperText: (0, a0.p)()
                ? j.intl.format(j.t.aJYgRt, {
                      onCameraSettingsClick: () => {
                          a1.setState({ previewEnabled: !1 }),
                              window.open((0, a0.i)(t)),
                              G.default.track(U.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: i });
                      },
                  })
                : void 0,
        });
    },
});
var a5 = i(745317),
    a4 = i(514956);
let a6 = (0, a.E2)(u.X.CAMERA_VIDEO_PREVIEW, {
        useSearchTerms: () => [j.intl.string(j.t.JIf4v7)],
        Component: function () {
            let e = rF.Ay.getCameraComponent(),
                t = (0, g.bG)([rF.Ay], () => rF.Ay.getVideoDeviceId()),
                i = a1.useField("previewEnabled"),
                n = (0, g.bG)([rF.Ay], () => rF.Ay.isVideoAvailable());
            return ((0, tE.l0)(() => {
                a1.setState({ previewEnabled: !1 });
            }),
            i)
                ? (0, E.jsx)("div", {
                      className: a4.T9,
                      children: (0, E.jsxs)("div", {
                          className: a4.Xi,
                          children: [
                              (0, E.jsxs)("div", {
                                  className: a4.UI,
                                  children: [
                                      (0, E.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !i }),
                                      (0, E.jsx)(a5.kE, {}),
                                  ],
                              }),
                              (0, E.jsx)(a5.eK, {}),
                          ],
                      }),
                  })
                : (0, E.jsx)("div", {
                      className: a4.T9,
                      children: (0, E.jsx)(td.m, {
                          text: n ? null : j.intl.string(j.t["8jSzSe"]),
                          children: (0, E.jsx)(ek.$, {
                              variant: "primary",
                              text: j.intl.string(j.t.JIf4v7),
                              onClick: () => a1.setState({ previewEnabled: !0 }),
                              disabled: !n,
                          }),
                      }),
                  });
        },
    }),
    a8 = (0, a.zZ)(u.X.CAMERA_CATEGORY, {
        useTitle: () => j.intl.string(j.t.uje3P9),
        usePredicate: () => (0, g.bG)([rF.Ay], () => rF.Ay.supports(a2.O5.VIDEO)),
        buildLayout: () => [a6, aQ, a3, aq],
    });
var a7 = i(827343);
let a9 = (0, a.zD)(u.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => j.intl.string(j.t.qFphsa),
        useSubtitle: () => j.intl.string(j.t.cQfwyY),
        usePredicate: function () {
            return (0, c.j9)();
        },
        useValue: function () {
            return (0, g.bG)([rF.Ay], () => rF.Ay.getOpenH264Enabled());
        },
        setValue: function (e) {
            a7.A.setOpenH264Enabled(e),
                (0, s3.A)({
                    title: j.intl.string(j.t["9jf31O"]),
                    subtitle: j.intl.string(j.t["J2wg+X"]),
                    confirmText: j.intl.string(j.t.BddRzS),
                    onConfirm: () => sI.A.app.relaunch(),
                });
        },
        useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
    }),
    oe = (0, a.zD)(u.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
        useTitle: () => j.intl.string(j.t["r6K+TL"]),
        useSubtitle: () => j.intl.string(j.t["xl9+I6"]),
        useValue: function () {
            return (0, g.bG)([rF.Ay], () => rF.Ay.getAecDump());
        },
        setValue: a7.A.setAecDump,
        usePredicate: function () {
            return (0, g.bG)([rF.Ay], () => rF.Ay.isAecDumpSupported());
        },
    });
var ot = i(139033),
    oi = i(862482),
    on = i(640238),
    ol = i(825484),
    os = i(77138),
    or = i(487329),
    oa = i(353835);
let oo = (0, nw.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function ou() {
    let e = await sI.A.fileManager.getLogPath();
    sI.A.fileManager.showItemInFolder(e);
}
function od(e) {
    (0, s3.A)({
        title: j.intl.string(j.t["7UXEF2"]),
        subtitle: j.intl.string(j.t.IYPrRl),
        confirmText: j.intl.string(j.t.BddRzS),
        onConfirm: () => a7.A.setDebugLogging(e),
    });
}
async function oc(e) {
    let { onUploadStart: t, onUploadFinish: i } = e;
    t?.();
    try {
        let e, t;
        await rF.Ay.getMediaEngine().writeAudioDebugState(),
            await oa.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, os.a)(U.Umv.RTC),
            (e = j.intl.string(j.t["fKBB8+"])),
            (t = j.intl.string(j.t.BvyxE7)),
            (0, ot.A)({ title: e, subtitle: t });
    } catch (s) {
        var n;
        let e, t, i, l;
        (n = s.displayMessage),
            (e = j.intl.string(j.t.QZg0J7)),
            (t = n ?? j.intl.string(j.t.VzHcSm)),
            (i = (0, or.B1)(or.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (l = j.intl.formatToPlainString(j.t.ejOT95, { errorCode: i })),
            (0, K.openModal)((i) =>
                (0, E.jsx)(on.a, {
                    header: e,
                    confirmButtonColor: oi.$n.Colors.BRAND,
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
async function og() {
    await oc({
        onUploadStart: () => oo.setState({ isUploading: !0 }),
        onUploadFinish: () => oo.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let om = (0, a.E2)(u.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [j.intl.string(j.t["726JHL"]), j.intl.string(j.t.EbwFfR), j.intl.string(j.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, g.bG)([rF.Ay], () => rF.Ay.supports(a2.O5.DEBUG_LOGGING));
        return c.Av && e && null != sI.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, g.bG)([rF.Ay], () => rF.Ay.getDebugLogging()),
            t = oo.useField("isUploading"),
            i = oo.useField("isDisabled"),
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
                            onChange: od,
                        }),
                        (0, E.jsx)("div", {
                            role: "group",
                            "aria-labelledby": n,
                            children: (0, E.jsxs)(ol.e, {
                                children: [
                                    (0, E.jsx)(ek.$, {
                                        variant: "secondary",
                                        text: j.intl.string(j.t.EbwFfR),
                                        onClick: og,
                                        loading: t,
                                        disabled: i,
                                        "aria-label": j.intl.string(j.t.aY1OH2),
                                    }),
                                    (0, E.jsx)(ek.$, {
                                        variant: "secondary",
                                        text: j.intl.string(j.t.nuPtYi),
                                        onClick: ou,
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
var oA = i(233545),
    oh = i(412780);
function oE() {
    return (0, g.bG)([iA.default, rF.Ay], () => {
        let e = iA.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            i = "canary" === af.Ay.releaseChannel || "development" === af.Ay.releaseChannel,
            n = rF.Ay.supports(a2.O5.CONNECTION_REPLAY);
        return t && i && n;
    });
}
let oS = (0, a.zD)(u.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => j.intl.string(j.t.U4FgFK),
        useSubtitle: () => j.intl.string(j.t.Lm72RU),
        useValue: function () {
            return (0, g.bG)([oh.Ay], () => oh.Ay.shouldRecordNextConnection());
        },
        setValue: oA.Et,
        usePredicate: oE,
    }),
    oT = (0, a.Tf)(u.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => j.intl.string(j.t.nJnOHO),
        useLabel: () => j.intl.string(j.t["3xjX0U"]),
        onClick: oA.YW,
        usePredicate: oE,
    });
var ox = i(926919),
    op = i(111162),
    of = i(855302);
let oN = (0, a.zD)(u.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
        useTitle: () => j.intl.string(j.t["0CEP6e"]),
        useSubtitle: () => j.intl.string(j.t["kBXuW+"]),
        useValue: function () {
            return (0, g.bG)([op.default], () => op.default.isStreamInfoOverlayEnabled);
        },
        setValue: function (e) {
            let t = op.default.isStreamInfoOverlayEnabled;
            (0, of.A)("stream_info_overlay_enabled", e, t), (0, ox.x)({ isStreamInfoOverlayEnabled: e });
        },
        usePredicate: function () {
            return L.Q_.useSetting();
        },
    }),
    o_ = (0, a.bd)(u.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? j.intl.string(j.t["/B4I8H"]) : j.intl.string(j.t.BTlsWH)),
        useCollapsedSubtitle: () => j.intl.string(j.t.la1Ys4),
        buildLayout: () => [oN, oe, oS, oT, om],
    });
function oI(e, t, i) {
    (0, s3.A)({ title: e, subtitle: t, confirmText: j.intl.string(j.t.BddRzS), onConfirm: i });
}
let oC = (0, a.Tf)(u.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => j.intl.string(j.t.SXfv1v),
        useSubtitle: () => j.intl.string(j.t["buA5/q"]),
        useLabel: () => j.intl.string(j.t.yBZMsQ),
        onClick: function () {
            oI(j.intl.string(j.t["4iKQ/3"]), j.intl.string(j.t.sQ42iT), a7.A.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    ob = (0, a.zZ)(u.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.UDAU9K),
        buildLayout: () => [a9, o_, oC],
    });
var ov = i(347481),
    oy = i(852712);
let oj = (0, a.zD)(u.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => j.intl.string(j.t.cUMdH0),
        useSubtitle: () => j.intl.string(j.t["6EjbvA"]),
        useValue: function () {
            return (0, g.bG)([rF.Ay], () => rF.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            a7.A.setAutomaticGainControl(e, { page: U.liQ.USER_SETTINGS, section: U.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, g.bG)([rF.Ay, ov.A], () => {
                let e = rF.Ay.getInputDeviceId();
                return ov.A.hasAutomaticGainControl(e);
            });
        },
        usePredicate: function () {
            return (0, g.bG)([rF.Ay], () => rF.Ay.isAutomaticGainControlSupported() && rF.Ay.isInputProfileCustom());
        },
    }),
    oO = (0, a.sN)(u.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => j.intl.string(j.t.AlybXj),
        setValue: (e) =>
            a7.A.setAttenuation(e, rF.Ay.getAttenuateWhileSpeakingSelf(), rF.Ay.getAttenuateWhileSpeakingOthers()),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => rF.Ay.getAttenuation(),
    }),
    oR = (0, a.zD)(u.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => j.intl.string(j.t["9dHxRY"]),
        useValue: () => (0, g.bG)([rF.Ay], () => rF.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => a7.A.setAttenuation(rF.Ay.getAttenuation(), e, rF.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    oL = (0, a.zD)(u.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => j.intl.string(j.t.SMt0Gr),
        useValue: () => (0, g.bG)([rF.Ay], () => rF.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => a7.A.setAttenuation(rF.Ay.getAttenuation(), rF.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    oD = (0, a.FW)(u.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.oSdBvW),
        useSubtitle: () => j.intl.string(j.t["0A/8Rt"]),
        usePredicate: () => (0, g.bG)([rF.Ay], () => rF.Ay.supports(a2.O5.ATTENUATION)),
        buildLayout: () => [oO, oR, oL],
    });
var oP = i(801644);
let oG = (0, a.zD)(u.X.VOICE_HARDWARE_MUTE_SILENCE_ALERT_SETTING, {
        useTitle: () => j.intl.string(j.t.pZ0vr4),
        useSubtitle: () => j.intl.string(j.t.tVbzoZ),
        useValue: function () {
            return (0, g.bG)([nG.Ay], () => !nG.Ay.disableHardwareMuteSilenceAlert);
        },
        setValue: function (e) {
            (0, of.A)("hardware_mute_silence_alert_enabled", e, !nG.Ay.disableHardwareMuteSilenceAlert),
                sm.Ay.updatedUnsyncedSettings({ disableHardwareMuteSilenceAlert: !e });
        },
        usePredicate: function () {
            let { enableHardwareSilenceWarning: e } = oP.A.useConfig({ location: "HardwareMuteSilenceAlertSetting" });
            return e;
        },
    }),
    oM = (0, a.zD)(u.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => j.intl.string(j.t.DFPXIG),
        useSubtitle: () => j.intl.string(j.t["UyRX+C"]),
        useValue: function () {
            return (0, g.bG)([rF.Ay], () => rF.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            a7.A.setBypassSystemInputProcessing(e);
        },
        usePredicate: function () {
            return (0, g.bG)([rF.Ay], () => rF.Ay.showBypassSystemInputProcessing() && rF.Ay.isInputProfileCustom());
        },
    }),
    oU = (0, a.zD)(u.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
        useTitle: () => j.intl.string(j.t.jrWHD3),
        useSubtitle: () => j.intl.string(j.t.YCCMkJ),
        useValue: function () {
            return (0, g.bG)([nG.Ay], () => !nG.Ay.disableVoiceChannelChangeAlert);
        },
        setValue: function (e) {
            (0, of.A)("switch_channel_warning_enabled", e, !nG.Ay.disableVoiceChannelChangeAlert),
                sm.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e });
        },
    }),
    oV = (0, a.zD)(u.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
        useTitle: () => j.intl.string(j.t.BbESsg),
        useSubtitle: () => j.intl.string(j.t.LoOB1F),
        useValue: function () {
            return (0, g.bG)([rF.Ay], () => {
                let { vadUseKrisp: e } = rF.Ay.getModeOptions();
                return e;
            });
        },
        setValue: function (e) {
            let t = rF.Ay.getMode();
            a7.A.setMode(t, { vadUseKrisp: e });
        },
        useDisabled: function () {
            return (0, g.bG)(
                [rF.Ay],
                () => rF.Ay.getMode() !== U.TBI.VOICE_ACTIVITY || !rF.Ay.getModeOptions().autoThreshold,
            );
        },
        usePredicate: function () {
            return (0, g.bG)([rF.Ay], () => rF.Ay.isAdvancedVoiceActivitySupported() && rF.Ay.isInputProfileCustom());
        },
    }),
    ok = (0, a.Hn)(u.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => j.intl.string(j.t.wVBHr0),
        useValue: function () {
            return (0, g.bG)([rF.Ay], () => rF.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            oI(j.intl.string(j.t.uY7AcQ), j.intl.string(j.t.gBqik6), () => a7.A.setAudioSubsystem(e));
        },
        useOptions: function () {
            let {
                legacyAudioSubsystemSupported: e,
                experimentalAudioSubsystemSupported: t,
                automaticAudioSubsystemSupported: i,
            } = (0, g.cf)([rF.Ay], () => ({
                legacyAudioSubsystemSupported: rF.Ay.supports(a2.O5.LEGACY_AUDIO_SUBSYSTEM),
                experimentalAudioSubsystemSupported: rF.Ay.supports(a2.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
                automaticAudioSubsystemSupported: rF.Ay.supports(a2.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
            }));
            return S.useMemo(() => {
                let n;
                return (
                    (n = [{ id: a2.rB.STANDARD, value: a2.rB.STANDARD, label: j.intl.string(j.t.dqb2JZ) }]),
                    e && n.push({ id: a2.rB.LEGACY, value: a2.rB.LEGACY, label: j.intl.string(j.t["TYfH+5"]) }),
                    t &&
                        n.push({ id: a2.rB.EXPERIMENTAL, value: a2.rB.EXPERIMENTAL, label: j.intl.string(j.t.liQmtr) }),
                    i && n.push({ id: a2.rB.AUTOMATIC, value: a2.rB.AUTOMATIC, label: j.intl.string(j.t.qNgtO1) }),
                    n
                );
            }, [i, t, e]);
        },
        usePredicate: function () {
            return (0, g.bG)([rF.Ay], () => rF.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    ow = (0, a.zD)(u.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => j.intl.string(j.t.uancuJ),
        useSubtitle: () => j.intl.string(j.t.I1Eoqq),
        useValue: function () {
            return (0, g.bG)([rF.Ay], () => rF.Ay.getQoS());
        },
        setValue: function (e) {
            a7.A.setQoS(e);
        },
        usePredicate: function () {
            return (0, g.bG)([rF.Ay], () => rF.Ay.supports(a2.O5.QOS));
        },
    }),
    oF = (0, a.zD)(u.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => j.intl.string(j.t["4rsOPQ"]),
        useSubtitle: () => j.intl.string(j.t.jtiiCw),
        useValue: function () {
            return (0, g.bG)([rF.Ay], () => rF.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            a7.A.setSilenceWarning(e);
        },
        usePredicate: function () {
            return eZ.isPlatformEmbedded;
        },
    }),
    oB = (0, a.bd)(u.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? j.intl.string(j.t.KHsSWK) : j.intl.string(j.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            lv(u.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, g.bG)([rF.Ay], () => rF.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [oj, oV, oM, oF, oG, oU, oD, ok, ow],
    }),
    oz = (0, a.zD)(u.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => j.intl.string(j.t.iWTwu6),
        useValue: function () {
            return (0, g.bG)([rF.Ay], () => rF.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            a7.A.setEchoCancellation(e, { page: U.liQ.USER_SETTINGS, section: U.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, g.bG)([rF.Ay, ov.A], () => {
                let e = rF.Ay.getInputDeviceId();
                return ov.A.hasEchoCancellation(e);
            });
        },
        usePredicate: function () {
            return (0, g.bG)([rF.Ay], () => rF.Ay.isInputProfileCustom());
        },
    });
var oX = i(459838),
    oY = i(451988),
    oH = i(934246),
    oK = i(300839);
let oW = (0, lJ.Ld)();
function oZ(e) {
    let { isSpeaking: t, className: i, id: n, ariaDescribedBy: l, ariaLabelledBy: s, disabled: r } = e;
    return (0, E.jsx)("div", {
        role: "meter",
        className: e7()(oH.$I, i),
        id: n,
        "aria-describedby": l,
        "aria-labelledby": s,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? j.intl.string(j.t.haLKZ0) : j.intl.string(j.t.X2hJL7),
        children: (0, E.jsx)("div", { className: e7()(oH.Jx, oH.NU, { [oH.zY]: t && !r, [oH.r9]: r }) }),
    });
}
function oq(e) {
    let { volume: t, id: i, ariaDescribedBy: n, ariaLabelledBy: l, disabled: s } = e,
        { threshold: r, autoThreshold: a } = (0, g.cf)([rF.Ay], () => ({
            threshold: rF.Ay.getModeOptions().threshold,
            autoThreshold: rF.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, g.bG)([rF.Ay], () => rF.Ay.getMode());
    return (0, E.jsx)("section", {
        className: e7()(oH.Mo, oH.jW),
        id: i,
        "aria-describedby": n,
        "aria-labelledby": l,
        children: (0, E.jsx)(nE.A, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return (t = -((100 - e) * 1)), void a7.A.setMode(o, { threshold: t, autoThreshold: a });
            },
            barStyles: { background: er.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: er.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": oW,
            disabled: s,
            children: (0, E.jsxs)("div", {
                className: e7()(oH.NU, oH.TL, oH.Jx, oK.bar),
                children: [
                    (0, E.jsx)("div", { className: e7()(oH.GS, oH.SH), style: { width: s ? 0 : t + 100 + "%" } }),
                    (0, E.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let oQ = (0, a.E2)(u.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [j.intl.string(j.t["sqUm+k"]), j.intl.string(j.t.I1Zuq0), j.intl.string(j.t.nuFtHH)],
    usePredicate: () => (0, g.bG)([rF.Ay], () => rF.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, g.cf)([rF.Ay], () => ({
                autoThreshold: rF.Ay.getModeOptions().autoThreshold,
                disabled: rF.Ay.getMode() !== a2.TB.VOICE_ACTIVITY,
            })),
            i = S.useCallback((e) => {
                let t = rF.Ay.getMode(),
                    { threshold: i } = rF.Ay.getModeOptions();
                a7.A.setMode(t, { autoThreshold: e, threshold: i });
            }, []),
            n = (0, g.bG)([rF.Ay], () => rF.Ay.supports(a2.O5.AUTOMATIC_VAD)),
            { volume: l, isSpeaking: s } = (function () {
                let [e, t] = S.useState(-100),
                    [i, n] = S.useState(!1);
                function l(e, i) {
                    t(e), n((i & a2.ME.VOICE) === a2.ME.VOICE);
                }
                return (
                    S.useEffect(() => {
                        let e = new oY.Ep();
                        return (
                            e.start(1e3, () => {
                                rF.Ay.getMediaEngine().on(oX.bg.VoiceActivity, l), e.stop();
                            }),
                            () => {
                                rF.Ay.getMediaEngine().removeListener(oX.bg.VoiceActivity, l), e.stop();
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: i }
                );
            })(),
            r = (0, g.bG)([rF.Ay], () => rF.Ay.isEnabled()),
            a = S.useMemo(
                () =>
                    !r &&
                    (0, E.jsx)("div", {
                        className: oH.B4,
                        children: (0, E.jsx)(q.w, {
                            type: "warning",
                            children: j.intl.format(j.t["O13I+O"], { onEnableClick: () => a7.A.enable(!0) }),
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
                                  ? (0, E.jsx)(oZ, {
                                        isSpeaking: s,
                                        className: oH.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, E.jsx)(oq, { volume: l, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
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
                                  ? (0, E.jsx)(oZ, {
                                        isSpeaking: s,
                                        className: oH.UJ,
                                        id: i.controlId,
                                        ariaDescribedBy: i.describedById,
                                        ariaLabelledBy: i.labelId,
                                        disabled: t,
                                    })
                                  : (0, E.jsx)(oq, {
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
var oJ = i(366010);
let o$ = i(993830),
    o0 = i(413142),
    o1 = { page: U.liQ.USER_SETTINGS, section: U.JJy.SETTINGS_VOICE_AND_VIDEO };
function o2() {
    let e = (0, g.bG)([iR.A], () => (0, oJ.q)(iR.A.theme));
    return (0, E.jsx)("img", { src: e ? o$ : o0, width: 48, height: 32, alt: "" });
}
let o3 = (0, a.E2)(u.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.t8Qhib), j.intl.string(j.t.hmfkCi)],
    usePredicate: function () {
        return (0, g.bG)([rF.Ay], () => rF.Ay.isInputProfileCustom() && rF.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = S.useCallback((e) => {
                a7.A.setNoiseCancellation("KRISP" === e, o1), a7.A.setNoiseSuppression("STANDARD" === e, o1);
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: i,
                isNoiseSuppressionSupported: n,
                isNoiseCancellationSupported: l,
            } = (0, g.cf)([rF.Ay], () => ({
                noiseCancellation: rF.Ay.getNoiseCancellation(),
                noiseSuppression: rF.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: rF.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: rF.Ay.isNoiseCancellationSupported(),
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
                (0, E.jsx)(rH.l, {
                    label: j.intl.string(j.t.t8Qhib),
                    description: r,
                    layout: "horizontal",
                    value: t ? "KRISP" : i ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: s,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                l && (0, E.jsx)(o2, {}),
            ],
        });
    },
});
var o5 = i(934729),
    o4 = i(621380);
let o6 = !c.Av;
function o8() {
    return (0, g.bG)([rF.Ay], () => rF.Ay.getMode() === a2.TB.PUSH_TO_TALK);
}
let o7 = (0, a.zD)(u.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return c.Av ? j.intl.string(j.t.tG4Np5) : j.intl.string(j.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, g.bG)([rF.Ay], () => rF.Ay.getMode());
        return S.useMemo(() => {
            if (!c.Av && e === a2.TB.PUSH_TO_TALK)
                return j.intl.format(j.t["VHI4+Y"], { onDownloadClick: () => (0, o5._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, g.bG)([rF.Ay], () => rF.Ay.getActiveInputProfile() !== o4.m.STUDIO);
    },
    useValue: function () {
        return (0, g.bG)([rF.Ay], () => rF.Ay.getMode() === a2.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, n;
        (t = e ? a2.TB.PUSH_TO_TALK : a2.TB.VOICE_ACTIVITY),
            (n = [e4.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === a2.TB.PUSH_TO_TALK &&
                o6 &&
                (0, K.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([i.e("74558"), i.e("10919")]).then(i.bind(i, 556506));
                    return (t) =>
                        (0, E.jsx)(e, {
                            title: j.intl.string(j.t.Kdt0Gb),
                            confirmText: j.intl.string(j.t["1WjMbC"]),
                            cancelText: j.intl.string(j.t.BddRzS),
                            onConfirm: () => (0, o5._)("PTT Limited Modal"),
                            body: j.intl.string(j.t.NIozvt),
                            ...t,
                        });
                }),
            a7.A.setMode(t, void 0, void 0, { analyticsLocations: n });
    },
    useSearchTerms: () => [j.intl.string(j.t["pS+K2L"]), j.intl.string(j.t.nuFtHH)],
});
var o9 = i(297932);
let ue = (0, a.E2)(u.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["pS+K2L"]), j.intl.string(j.t.nuFtHH)],
        usePredicate: o8,
        Component: function () {
            let e = (0, g.bG)([rF.Ay], () => {
                    let { shortcut: e } = rF.Ay.getModeOptions();
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
                    className: o9.e,
                    children: (0, E.jsx)(tQ.A, {
                        defaultValue: e,
                        onChange: (e) => a7.A.setMode(U.TBI.PUSH_TO_TALK, { shortcut: e }),
                    }),
                }),
            });
        },
    }),
    ut = (0, a.sN)(u.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => j.intl.string(j.t.GCNMM8),
        useSearchTerms: () => [j.intl.string(j.t["pS+K2L"]), j.intl.string(j.t.nuFtHH)],
        setValue: function (e) {
            a7.A.setMode(U.TBI.PUSH_TO_TALK, { delay: e });
        },
        minValue: 0,
        maxValue: U.IjB,
        getInitialValue: function () {
            let { delay: e } = rF.Ay.getModeOptions();
            return e;
        },
        onValueRender: function (e) {
            return e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}\u00A0ms`;
        },
        usePredicate: o8,
    });
var ui = i(957658),
    un = i(329139);
let ul = (0, a.zD)(u.X.VOICE_SPATIAL_AUDIO_SETTING, {
        useTitle: () => j.intl.string(un.default.LGDPhA),
        useValue: function () {
            return (0, g.bG)([rF.Ay], () => rF.Ay.isSpatialAudioEnabled());
        },
        setValue: function (e) {
            a7.A.setSpatialAudio(e, [e4.A.USER_SETTINGS_VOICE_AND_VIDEO]);
        },
        usePredicate: function () {
            return (0, ui.A)("VoiceSettings");
        },
    }),
    us = (0, a.Qx)(u.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => j.intl.string(j.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, oy._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [j.intl.string(j.t.nuFtHH), j.intl.string(j.t.VZPR0R), j.intl.string(j.t.cjPbpT)],
        useValue: function () {
            return (0, g.bG)([rF.Ay], () => rF.Ay.getActiveInputProfile() ?? o4.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [e4.A.USER_SETTINGS_VOICE_AND_VIDEO];
            a7.A.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, oy.d)({ location: "InputProfileCategory" });
            return [
                { value: o4.m.VOICE_ISOLATION, name: j.intl.string(j.t.cjPbpT), desc: j.intl.string(j.t.CzhvnE) },
                { value: o4.m.STUDIO, name: j.intl.string(j.t.VZPR0R), desc: j.intl.string(j.t.ZaJksS) },
                { value: o4.m.CUSTOM, name: j.intl.string(j.t["N/PQjv"]), desc: j.intl.string(j.t.SnBmuY) },
            ].filter((t) => {
                let { value: i } = t;
                return e.includes(i);
            });
        },
    }),
    ur = (0, a.zZ)(u.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, g.bG)([ov.A, rF.Ay], () => {
                let e = rF.Ay.getInputDeviceId();
                return (
                    (ov.A.hasEchoCancellation(e) || ov.A.hasNoiseSuppression(e) || ov.A.hasAutomaticGainControl(e)) &&
                    rF.Ay.isInputProfileCustom()
                );
            });
            return S.useMemo(() => {
                if (e) return { type: h.lT.INLINE_NOTICE, noticeType: "info", text: j.intl.string(j.t["/Whuzi"]) };
            }, [e]);
        },
        buildLayout: () => [us, oQ, o3, oz, ul, o7, ue, ut, oB],
    });
var ua = i(403581),
    uo = i(983851),
    uu = i(687021),
    ud = i(128450),
    uc = i(796774),
    ug = i(209932),
    um = i(813564),
    uA = i(984813),
    uh = i(22231),
    uE = i(158045),
    uS = i(792348),
    uT = i(674168),
    ux = i(333216),
    up = i(805945),
    uf = i(199300);
function uN(e) {
    let { onSelect: t } = e,
        [i, n] = S.useState(!1),
        l = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()),
        s = uE.Ay.canUseCustomCallSounds(l),
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
                children: (0, E.jsx)(ux.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: s ? null : (0, E.jsx)(uT.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, E.jsx)(up.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    n(!i);
                },
                text: j.intl.string(j.t.uOe0Az),
                children: (0, E.jsx)(uh.R, { size: "md", color: "currentColor", className: uf.Wo }),
            }),
    });
}
function u_(e) {
    let { sound: t } = e,
        { previewSound: i } = (0, uS.A)(t, null),
        n =
            0 === (0, um.wH)()
                ? j.intl.string(j.t.OASXjt)
                : j.intl.formatToPlainString(j.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, E.jsx)(up.dT, {
        onClick: i,
        text: n,
        children: (0, E.jsx)(uo.H, { size: "md", color: "currentColor", className: uf.wg }),
    });
}
function uI(e) {
    let { sound: t, isGlobal: i, onSelect: n } = e,
        l = null != t,
        s = t?.emojiId,
        r = t?.emojiName,
        a = l && (null != r || null != s);
    return (0, E.jsxs)("div", {
        className: uf.D6,
        children: [
            (0, E.jsxs)("div", {
                className: uf.kL,
                children: [
                    a && (0, E.jsx)(lw.A, { emojiId: s, emojiName: r, className: uf.Zg }),
                    (0, E.jsx)(el.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        className: uf.dj,
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
                        ? (0, E.jsx)(u_, { sound: t })
                        : (0, E.jsx)(uo.H, { size: "md", color: "currentColor", className: uf.Gk }),
                ],
            }),
            (0, E.jsxs)("div", {
                className: uf.kL,
                children: [
                    (0, E.jsx)(uN, { onSelect: n }),
                    l &&
                        !i &&
                        (0, E.jsx)(up.dT, {
                            onClick: () => n(null),
                            text: j.intl.string(j.t.jmtcGA),
                            children: (0, E.jsx)(rW.u, {
                                size: "md",
                                color: er.A.unsafe_rawColors.RED_400.css,
                                className: uf.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var uC = i(617617);
i(980504);
var ub = i(907895);
function uv(e) {
    return (0, g.bG)([ug.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: i } = e;
        return ug.A.getSound("0" === t ? "0" : t, i);
    });
}
function uy(e) {
    let { guildId: t } = e,
        i = (0, g.bG)([uC.A], () => uC.A.settings.guilds?.guilds?.[t]?.joinSound),
        n = uv(i);
    if (null == i || null == n) return null;
    let { emojiId: l, emojiName: s } = n,
        r = null != l || null != s;
    return (0, E.jsxs)("div", {
        className: ub.Io,
        children: [
            r
                ? (0, E.jsx)(lw.A, { emojiId: l, emojiName: s, className: ub.nW })
                : (0, E.jsx)(uo.H, { size: "md", color: "currentColor", className: ub.nW }),
            (0, E.jsx)(el.E, { className: ub.dK, variant: "text-xs/medium", children: n.name }),
        ],
    });
}
let uj = (0, a.E2)(u.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, n1.Ay)(),
            [t, i] = S.useState("0"),
            n = (0, uA.mz)(t),
            l = uv(n),
            s = n?.type === uA.PP.GLOBAL,
            r = (0, g.bG)([ug.A], () => ug.A.hasFetchedAllSounds()) && null != n && null == l;
        S.useEffect(() => {
            r && (0, um.ND)({ location: e });
        }, [r, e]),
            S.useEffect(() => {
                (0, uc.E7)();
            }, []);
        let a = S.useCallback((e, t) => {
            let { inDropdown: i } = t;
            return null == e ? null : i ? (0, E.jsx)(uy, { guildId: e.value }) : null;
        }, []);
        return (0, E.jsxs)(ij.n, {
            label: j.intl.string(j.t.nzUc3B),
            description: j.intl.format(j.t.u9RWmv, { helpdeskArticle: ty.A.getArticleURL(U.MVz.SOUNDBOARD) }),
            children: [
                (0, E.jsx)(uu.A, {
                    guildId: t,
                    className: ub.Dt,
                    globalOption: { label: j.intl.string(j.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        i(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, E.jsxs)(ud.A, {
                    title: j.intl.format(j.t.I2TsYN, {
                        nitroWheelHook: () => (0, E.jsx)(ua.t, { size: "md", color: "currentColor", className: ub.ax }),
                    }),
                    children: [
                        (0, E.jsx)(uI, {
                            sound: l,
                            isGlobal: s,
                            onSelect: (i) => {
                                null == i ? (0, um.Dv)(t, e) : (0, um.un)(t, i, e);
                            },
                        }),
                        r &&
                            (0, E.jsx)(tv.p, {
                                className: ub.lm,
                                messageType: tv.Y.WARNING,
                                children: j.intl.string(j.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        });
    },
});
var uO = i(824744);
let uR = (0, a.sN)(u.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => j.intl.string(j.t.kbFsAD),
    useSubtitle: () => j.intl.format(j.t.BPbGq7, { helpCenterArticle: ty.A.getArticleURL(U.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [e4.A.USER_SETTINGS_VOICE_AND_VIDEO],
            i = (0, uO.w)(e);
        (0, uc.iy)(i, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, um.wH)();
        return (0, uO.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var uL = i(864145);
let uD = (0, a.sN)(u.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => j.intl.string(j.t["2JbvKw"]),
        useSubtitle: () => j.intl.string(j.t.INenzY),
        setValue: function (e) {
            let t = (0, uO.w)(e);
            L.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = L.HO.getSetting();
            return (0, uO.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, uL.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    uP = (0, a.zZ)(u.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => j.intl.string(j.t.ABjMWI),
        buildLayout: () => [uR, uD, uj],
    });
var uG = i(803224),
    uM = i(552122);
let uU = (0, a.E2)(u.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [j.intl.string(j.t.fgSHf8)],
        usePredicate: () => null != uM.A.useHolidaySoundpack(),
        Component: () =>
            (0, E.jsx)(el.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: j.intl.format(j.t.Eup6Wv, {
                    onClick: () => (0, eq.openUserSettings)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    uV = (0, a.AK)(u.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.eyGEE4),
        useSearchTerms: () => [j.intl.string(j.t.eyGEE4)],
        destinationKey: u.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    uk = (0, a.gN)(u.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [uV] });
var uw = i(264686);
let uF = (0, nw.D)(() => ({ currentPlayingSound: null }));
function uB() {
    let e = uF.getField("currentPlayingSound");
    e?.stop(), uF.setState({ currentPlayingSound: null });
}
function uz(e) {
    let t = uF.getField("currentPlayingSound");
    t?.stop();
    let i = (0, s8.Ak)(e);
    uF.setState({ currentPlayingSound: i });
}
function uX(e) {
    return (0, a.zD)(`${u.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => j.intl.format(j.t.OOiGCM, { onClick: () => uz(e.sound) }),
        useSearchTerms: e.useSearchTerms,
        useValue: () => {
            let t = (0, g.bG)([uG.A], () => uG.A.isSoundDisabled(e.sound)),
                i = e.useDisabled?.();
            return !t && !i;
        },
        setValue: (t) => {
            let i = uG.A.getDisabledSounds().filter((t) => t !== e.sound);
            t || i.push(e.sound), uw.default.setDisabledSounds(i);
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                i = (0, g.bG)([uG.A], () => uG.A.getDisableAllSounds());
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
    uH = (0, a.D1)(u.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? j.intl.formatToPlainString(j.t["0JYT98"], { count: t })
                : j.intl.formatToPlainString(j.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => lv(u.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                uB();
            };
        },
        buildLayout: () => uY.map((e) => uX(e)),
    }),
    uK = (0, a.zZ)(u.X.SOUNDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, g.bG)([uG.A], () => uG.A.getDisableAllSounds());
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
        buildLayout: () => [uH, uU, uk],
    }),
    uW = (0, a.zD)(u.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => j.intl.string(j.t.e3Zz3F),
        useSubtitle: () => j.intl.string(j.t.RztTjP),
        useValue: function () {
            return !L.uh.useSetting();
        },
        setValue: function (e) {
            (0, of.A)("stream_previews_disabled", !e, L.uh.getSetting(), [e4.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                L.uh.updateSetting(!e);
        },
    }),
    uZ = (0, a.zD)(u.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => j.intl.string(j.t.GmWk2E),
        useSearchTerms: () => [j.intl.string(j.t["Fj/xn1"])],
        useSubtitle: () => j.intl.string(j.t["Fj/xn1"]),
        useValue: function () {
            return (0, g.bG)([rF.Ay], () => rF.Ay.getVideoHook());
        },
        setValue: a7.A.setVideoHook,
        usePredicate: function () {
            return (0, g.bG)([rF.Ay], () => rF.Ay.supportsVideoHook());
        },
    }),
    uq = (0, a.zD)(u.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => j.intl.string(j.t["4I0qzZ"]),
        useValue: function () {
            return (0, g.bG)([rF.Ay], () => rF.Ay.getExperimentalSoundshare());
        },
        setValue: a7.A.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, g.bG)([rF.Ay], () => {
                let e = rF.Ay.supportsExperimentalSoundshare(),
                    t = rF.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    uQ = (0, a.zD)(u.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => j.intl.string(j.t["/jwMtn"]),
        useSubtitle: () => j.intl.string(j.t.zlA23F),
        useValue: function () {
            return (0, g.bG)([rF.Ay], () => rF.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [e4.A.USER_SETTINGS_VOICE_AND_VIDEO];
            a7.A.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return rF.Ay.supports(a2.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    uJ = (0, a.sN)(u.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => j.intl.string(j.t.fhEzfj),
        setValue: function (e) {
            let t = [e4.A.USER_SETTINGS_VOICE_AND_VIDEO];
            a7.A.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: rF.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            let e = (0, g.bG)([rF.Ay], () => rF.Ay.getSidechainCompression());
            return rF.Ay.supports(a2.O5.SIDECHAIN_COMPRESSION) && e;
        },
    }),
    u$ = (0, a.zD)(u.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
        useTitle: () => j.intl.string(j.t.lt8rRx),
        useSubtitle: () => j.intl.string(j.t.ie1mgY),
        useValue: function () {
            return (0, g.bG)([rF.Ay], () => rF.Ay.getUseSystemScreensharePicker());
        },
        setValue: function (e) {
            (0, c.cX)() && e
                ? (0, s3.A)({
                      title: j.intl.string(j.t["9jf31O"]),
                      subtitle: j.intl.string(j.t.uBd6JW),
                      variant: "primary",
                      onConfirm: () => {
                          a7.A.setUseSystemScreensharePicker(e), sI.A.app.relaunch();
                      },
                      confirmText: j.intl.string(j.t.BddRzS),
                  })
                : a7.A.setUseSystemScreensharePicker(e);
        },
        usePredicate: function () {
            return (0, g.bG)([rF.Ay], () => rF.Ay.supportsSystemScreensharePicker() && (0, c.cX)());
        },
    }),
    u0 = (0, a.bd)(u.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? j.intl.string(j.t.qrMyvm) : j.intl.string(j.t.LEtTNl)),
        useCollapsedSubtitle: () => lv(u.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [uQ, uJ, u$, uq, uZ],
    }),
    u1 = (0, a.zZ)(u.X.STREAMING_CATEGORY, { useTitle: () => j.intl.string(j.t.KDdjou), buildLayout: () => [uW, u0] });
var u2 = i(106713);
let u3 = (0, a.E2)(u.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = u2.A.useConfig({ location: "MicrophoneInputSelect" });
            return (0, E.jsx)(aJ.U, {
                label: j.intl.string(j.t.UTM8VP),
                deviceType: a2.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    u5 = (0, a.E2)(u.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = u2.A.useConfig({ location: "SpeakerOutputSelect" });
            return (0, E.jsx)(aJ.U, {
                label: j.intl.string(j.t.xuYQ0n),
                deviceType: a2.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    u4 = (0, a.zC)(u.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [u3, u5] }),
    u6 = (0, a.sN)(u.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => j.intl.string(j.t.Rtsr6w),
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = rF.Ay.getInputVolume();
            return (0, uO.M)(e);
        },
        asValueChanges: function (e) {
            let t = [e4.A.USER_SETTINGS_VOICE_AND_VIDEO],
                i = (0, uO.w)(e);
            a7.A.setInputVolume(i, { analyticsLocations: t });
        },
    }),
    u8 = (0, a.sN)(u.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => j.intl.string(j.t.aUJ062),
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = rF.Ay.getOutputVolume();
            return (0, uO.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [e4.A.USER_SETTINGS_VOICE_AND_VIDEO],
                i = (0, uO.w)(e);
            a7.A.setOutputVolume(i, { analyticsLocations: t });
        },
    }),
    u7 = (0, a.zC)(u.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [u6, u8] });
var u9 = i(702841),
    de = i(349288),
    dt = i(152567),
    di = i(141218);
let dn = `${ty.A.getArticleURL(U.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    dl = (0, a.E2)(u.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.nuFtHH)],
        usePredicate: function () {
            return (0, u9.bG)([rF.Ay], () => rF.Ay.supports(a2.O5.LOOPBACK));
        },
        Component: function () {
            return (0, u9.bG)([rF.Ay], () => rF.Ay.supports(a2.O5.LOOPBACK))
                ? (0, E.jsx)(dt.A, {
                      size: "md",
                      notchBackground: dt.V.GRAY,
                      captionVoice: j.intl.string(j.t.bp3JOV),
                      captionNoVoice: (0, E.jsxs)(E.Fragment, {
                          children: [
                              (0, E.jsx)(el.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-default",
                                  children: j.intl.string(j.t.bgn75v),
                              }),
                              j.intl.string(j.t["MA+OZh"]),
                              (0, E.jsx)(de.Anchor, {
                                  className: di.X,
                                  href: ty.A.getArticleURL(U.MVz.NO_INPUT_DETECTED),
                                  children: j.intl.string(j.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: j.intl.format(j.t["V+B3FH"], { guideURL: dn }),
                      buttonTest: j.intl.string(j.t.gyljWE),
                      buttonStop: j.intl.string(j.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: U.liQ.USER_SETTINGS, section: U.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    ds = eZ.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function dr(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: i } = e;
    return (0, E.jsxs)(Q.B, {
        children: [
            i && (0, E.jsx)(rY, { sourcePage: "voice" }),
            t && (0, E.jsx)(aN.A, { look: aN.k.WARNING, children: j.intl.string(j.t.Ioz3gx) }),
        ],
    });
}
let da = (0, a.zZ)(u.X.VOICE_CATEGORY, {
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
            let e = rX("voice"),
                t = (0, a$.x5)(a2.oh.AUDIO_INPUT),
                i = (0, a$.x5)(a2.oh.AUDIO_OUTPUT),
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
                                  (0, E.jsx)(dr, {
                                      inputAndOutputAreBluetooth: n,
                                      canPromptSystemServiceInstallForVoice: e.canPrompt,
                                  }),
                          }
                        : null,
                [e.canPrompt, n],
            );
        },
        buildLayout: () => [u4, u7, dl],
    }),
    du = (0, a.t_)(u.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => j.intl.string(j.t.B1fFpf),
        buildLayout: () => [da, ur, a8, u1, uK, uP, ob],
    }),
    dd = (0, a.i4)(u.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.B1fFpf),
        usePredicate: () => rF.Ay.isSupported(),
        icon: aB.c,
        useMenu: az.A,
        buildLayout: () => [du],
    }),
    dc = (0, a.WI)(u.X.APP_SECTION, {
        useTitle: () => j.intl.string(j.t.gcyH1J),
        buildLayout: () => [dd, sQ, ld, rU, aF, s1],
    });
var dg = i(360669),
    dm = i(974544),
    dA = i(423764),
    dh = i(289873),
    dE = i(132500),
    dS = i(465323),
    dT = i(37766),
    dx = i(194261),
    dp = i(391048),
    df = i(277984),
    dN = i(99696),
    d_ = i(202613),
    dI = i(615405),
    dC = i(580630),
    db = i(83617),
    dv = i(935208),
    dy = i(607399),
    dj = i(150934),
    dO = i(256006),
    dR = i(198970),
    dL = i(71532);
let dD = /[^0-9/]/g,
    dP = /[^0-9]/g;
class dG extends S.PureComponent {
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
                ((n = (i = e.replace(dD, "").split("/"))[0]),
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
            ? (u = u.replace(dP, ""))
            : u === r && e.includes("/") && !r.includes("/") && (u += "/"),
            u.length > e.length && (d += u.length - e.length),
            (this.selectionStart = d),
            null != a && a(u, t);
    };
    render() {
        return (0, E.jsx)(rQ.k, {
            ...this.props,
            inputMode: "numeric",
            onChange: this.handleChange,
            inputRef: this.setRef,
        });
    }
}
var dM = i(832208),
    dU = i(729919);
let dV = [
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
                        getClassNameForLayout: () => dU.ep,
                        renderInput: (e) => (0, E.jsx)(dG, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    dk = function (e) {
        let { onCardInfoChange: t, className: i, expirationDate: n, error: l } = e,
            [s, r] = S.useState(!1),
            [a, o] = S.useState(null),
            [u, d] = S.useState(n);
        return (
            S.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, E.jsx)(dM.A, {
                className: i,
                form: dV,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: l,
                onFieldChange: function (e) {
                    s || "" === e || r(!0),
                        (s && "" === e) || !(0, dL.So)(e) ? o(j.intl.string(j.t["9/zZdl"])) : o(null),
                        d(e);
                },
            })
        );
    };
var dw = i(219887),
    dF = i(520229);
let dB = "isDefault";
class dz extends S.PureComponent {
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
            expiresMonth: t instanceof d_.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof d_.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: i,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        lm.h.wait(() => {
            (0, df.ey)(), (0, df.tc)();
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
                      className: dF.zc,
                      children: (0, E.jsx)(q.w, { type: "critical", children: t.message }),
                  })
                : null
            : (0, E.jsx)("div", {
                  className: dF.zc,
                  children: (0, E.jsx)(q.w, { type: "critical", children: e.message }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: i } = this.props,
            n = (0, dO.g)(i);
        return (0, E.jsxs)("div", {
            className: dF.yV,
            children: [
                (0, E.jsx)(el.E, {
                    className: dF.bV,
                    variant: "text-sm/normal",
                    children: j.intl.string(j.t["50Auo2"]),
                }),
                (0, E.jsx)(dR.Ay, {
                    ...e,
                    mode: dR.Ay.Modes.EDIT,
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
            className: dF.yV,
            children: [
                (0, E.jsx)(el.E, { className: dF.bV, variant: "text-sm/normal", children: j.intl.string(j.t.Fo2YP7) }),
                (0, E.jsx)(dk, {
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
            className: dF.AU,
            children: (0, E.jsxs)(Q.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, E.jsx)(ol.e, {
                        children: (0, E.jsxs)("div", {
                            className: dF.lH,
                            children: [
                                i
                                    ? (0, E.jsx)(td.m, {
                                          text: j.intl.string(j.t["v6/z28"]),
                                          children: (0, E.jsx)("div", { "aria-hidden": !0, className: dF.dm }),
                                      })
                                    : null,
                                (0, E.jsx)(ek.$, {
                                    type: "button",
                                    disabled: i || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: dy.Fr ? "sm" : "md",
                                    text: dy.Fr ? j.intl.string(j.t.oyYWHE) : j.intl.string(j.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, E.jsxs)(ol.e, {
                        children: [
                            (0, E.jsx)(ek.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: dy.Fr ? "sm" : "md",
                                text: j.intl.string(j.t["ETE/oC"]),
                            }),
                            (0, E.jsx)(ek.$, {
                                loading: e,
                                disabled: !n || t || !l,
                                type: "submit",
                                variant: "active",
                                size: dy.Fr ? "sm" : "md",
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
            r = e instanceof d_.SJ;
        return (0, E.jsx)(eO.Z, {
            editable: !0,
            className: e7()(dF.Nr, n),
            children: (0, E.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, E.jsxs)("div", {
                        className: dF.__invalid_paymentSection,
                        children: [
                            (0, E.jsx)(dw.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: l,
                                locale: i,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, E.jsx)("div", { className: dF.Um, children: j.intl.string(j.t["3R0U0b"]) })
                                : null,
                            (0, E.jsx)("div", {
                                className: dF.Sv,
                                children: r
                                    ? j.intl.format(j.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : j.intl.string(j.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, E.jsx)("div", {
                        className: dF.D5,
                        children: (0, E.jsx)(dj.S, {
                            value: dB,
                            checked: s,
                            onChange: (e) => this.handleFieldChange(e, dB),
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
let dX = g.Ay.connectStores([dI.A], () => ({ updateError: dI.A.editSourceError, removeError: dI.A.removeSourceError }))(
    dz,
);
var dY = i(776409),
    dH = i(743526),
    dK = i(455218);
function dW() {
    (0, dN.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page", loadId: (0, dE.A)() });
}
class dZ extends S.PureComponent {
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
            ? (0, E.jsx)(dX, {
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
                      n ? null : (0, E.jsx)(ew.c, { className: dK.__invalid_sourceDivider }),
                      (0, E.jsxs)("div", {
                          className: dK.Yb,
                          children: [
                              (0, E.jsx)(dw.A, {
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
let dq = S.memo(function (e) {
    let { paymentSource: t, hideDivider: i, isForSubscription: n, locale: l, onRedeemClick: s } = e,
        [r, a] = S.useState(null),
        o = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, g.bG)([dI.A], () => dI.A.ipCountryCode),
        d = S.useMemo(() => (0, dS.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        S.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : df.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, E.jsxs)(E.Fragment, {
            children: [
                i ? null : (0, E.jsx)(ew.c, { className: dK.__invalid_sourceDivider }),
                (0, E.jsxs)("div", {
                    className: dK.Yb,
                    children: [
                        void 0 !== t
                            ? (0, E.jsx)(dw.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: n,
                                  locale: l,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, E.jsxs)(r1.A, {
                                  align: r1.A.Align.CENTER,
                                  children: [
                                      (0, E.jsx)(dT._, { size: "lg" }),
                                      (0, E.jsx)(el.E, {
                                          variant: "text-sm/medium",
                                          className: dH.Wi,
                                          children: j.intl.string(dY.default["/FQWfA"]),
                                      }),
                                  ],
                              }),
                        (0, E.jsxs)("div", {
                            className: dK.zy,
                            children: [
                                (0, E.jsx)("div", {
                                    className: dK.Tq,
                                    children:
                                        null == r
                                            ? (0, E.jsx)(dh.y, { type: dh.y.Type.SPINNING_CIRCLE })
                                            : (0, E.jsx)(el.E, {
                                                  variant: "text-sm/medium",
                                                  children: (function () {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          i = t ?? d,
                                                          n = String(i).toUpperCase(),
                                                          l = (0, dC.$g)(e ?? 0, i, {
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
class dQ extends S.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            await df.Gr(e), this.setState({ editingPayment: e });
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            await df.JQ(e), this.setState({ editingPayment: null });
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                await df.Ps(e, t), this.setState({ editingPayment: null });
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, db.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, K.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 362111));
                return (t) => (0, E.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, dp.ET)();
                },
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, E.jsxs)("div", {
            className: dK.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, E.jsxs)("div", {
                          className: dK.z8,
                          children: [
                              (0, E.jsx)(el.E, { variant: "text-sm/normal", children: j.intl.string(j.t.aRHpAB) }),
                              (0, E.jsx)(el.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: dK.Sv,
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
                .sort((e, t) => (e.id === i ? -1 : t.id === i ? 1 : dv.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof d_.LQ)),
            c = u.filter((e) => e instanceof d_.LQ),
            g = this.state.editingPayment,
            m = d.findIndex((e) => e.id === g),
            A = d.map((e, t) =>
                (0, E.jsx)(
                    dZ,
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
                              dq,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || m === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: l,
                                  onRedeemClick: dW,
                              },
                              e.id,
                          ),
                      )
                    : (0, E.jsx)(dq, {
                          hideDivider: 0 === d.length || m === d.length - 1,
                          isForSubscription: !1,
                          locale: l,
                          onRedeemClick: dW,
                      })),
            (0, E.jsxs)(E.Fragment, {
                children: [
                    t
                        ? (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsxs)(eV.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, E.jsx)(dx.X, { size: "sm", className: dK.hz }),
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
var dJ = i(459357),
    d$ = i(295405),
    d0 = i(166403),
    d1 = i(773669),
    d2 = i(844828);
function d3() {
    let e = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()?.storeCountry);
    return e?.country == null ? null : { country: e.country, countryName: (0, dA.Gw)(e.country) };
}
let d5 = (0, a.E2)(u.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                i = (0, g.bG)([dI.A], () => dI.A.isSyncing),
                n = (0, g.bG)([d$.A], () => d$.A.paymentSources),
                l = (0, g.bG)([d$.A], () => d$.A.defaultPaymentSourceId),
                s = (0, g.bG)([d1.default], () => d1.default.locale),
                r = (0, g.bG)([d0.A], () => d0.A.getPremiumTypeSubscription()),
                a = (0, g.bG)([dI.A], () => dI.A.isRemovingPaymentSource),
                o = (0, g.bG)([dI.A], () => dI.A.isUpdatingPaymentSource),
                { enabled: u } = (0, dJ.c)({ location: "UserSettingsBilling" });
            return (S.useEffect(() => {
                df.$o(), df.hP();
            }, []),
            i && 0 === Object.keys(n).length)
                ? (0, E.jsx)("div", { className: d2.o, children: (0, E.jsx)(dh.y, {}) })
                : (0, E.jsx)(dQ, {
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
    d4 = (0, a.zZ)(u.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.W26xGQ),
        useSubtitle: () => {
            let e = d3();
            return null != e ? j.intl.format(j.t.e2t1G5, { country: e.countryName }) : j.intl.string(j.t.h6V3uK);
        },
        useSubtitleDecoration: function () {
            return null == d3()
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
        buildLayout: () => [d5],
    });
var d6 = i(549363),
    d8 = i(545075);
let d7 = (0, a.E2)(u.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            let e = (0, g.bG)([d1.default], () => d1.default.locale);
            return (0, E.jsxs)(E.Fragment, { children: [(0, E.jsx)(d8.kb, {}), (0, E.jsx)(d6.A, { locale: e })] });
        },
        useSearchTerms: () => [j.intl.string(j.t.obLrcK)],
    }),
    d9 = (0, a.zZ)(u.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => j.intl.string(j.t.obLrcK),
        buildLayout: () => [d7],
    }),
    ce = (0, a.t_)(u.X.BILLING_PANEL, {
        useTitle: () => j.intl.string(j.t.oeUm2s),
        buildLayout: () => [d4, d9],
        useObscuredNotice: dm.L,
    }),
    ct = (0, a.i4)(u.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.oeUm2s),
        icon: dg.B,
        buildLayout: () => [ce],
    });
var ci = i(70283),
    cn = i(597770),
    cl = i(682618),
    cs = i(611881),
    cr = i(962644),
    ca = i(35587),
    co = i(86379);
let cu = (0, a.E2)(u.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: d8.uK,
        usePredicate: () => (0, co.Hp)(),
        useSearchTerms: () => [j.intl.string(j.t.vwMEHS)],
    }),
    cd = (0, a.zZ)(u.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [cu] });
var cc = i(982240),
    cg = i(788833),
    cm = i(914410),
    cA = i(360615),
    ch = i(215082);
function cE(e) {
    let { tier: t, active: i = !1 } = e;
    return (0, E.jsxs)("div", {
        className: e7()(ch.fO, { [ch.bF]: i }),
        children: [
            null != t.simple_icon_url && (0, E.jsx)("img", { src: t.simple_icon_url, alt: "", className: ch.si }),
            (0, E.jsxs)("div", {
                className: ch.tc,
                children: [
                    (0, E.jsx)(el.E, { variant: "text-sm/semibold", color: "text-subtle", children: t.name ?? "" }),
                    (0, E.jsx)(el.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: j.intl.format(cA.default.qvx9E4, { count: (0, cc.rL)(t) }),
                    }),
                ],
            }),
        ],
    });
}
function cS(e) {
    let { tiers: t, currentTier: i } = e;
    return (0, E.jsx)("div", {
        className: ch.dw,
        children: t.map((e) => (0, E.jsx)(cE, { tier: e, active: e.key === i?.key }, e.key)),
    });
}
function cT(e) {
    let { analyticsLocation: t, location: i } = e,
        { analyticsLocations: n } = (0, n1.Ay)(e4.A.USER_SETTINGS_GIFT_INVENTORY),
        { openGiftModal: l } = (0, cg.$)({
            giftRecipient: void 0,
            analyticsLocations: n,
            analyticsObject: { object: U.ZSU.BUTTON_CTA, objectType: U.AnalyticsObjectTypes.GIFT },
            analyticsLocation: t,
            location: i,
        });
    return (0, E.jsx)("div", {
        className: ch.NG,
        children: (0, E.jsx)(ek.$, {
            variant: "primary",
            icon: cn.o,
            text: j.intl.string(cA.default.DZnomS),
            onClick: l,
        }),
    });
}
function cx(e) {
    let t,
        { badgeProgress: i, currentTier: n, nextTier: l, giftsRemaining: s } = e,
        r = (0, cc.rL)(n),
        a = (0, cc.rL)(l),
        o = (0, cs.GZ)(i, n, l);
    return (
        (t =
            null != l
                ? j.intl.formatToPlainString(cA.default.XTX3OO, { count: s, nextTier: l?.name ?? "" })
                : j.intl.formatToPlainString(cA.default.LnsdbK, { currentTier: n?.name ?? "" })),
        (0, E.jsxs)("div", {
            className: ch.mY,
            children: [
                n?.simple_icon_url != null &&
                    (0, E.jsx)("div", {
                        className: ch.fC,
                        children: (0, E.jsx)("img", { src: n.simple_icon_url, alt: "", className: ch.qS }),
                    }),
                (0, E.jsxs)("div", {
                    className: ch.Qs,
                    children: [
                        (0, E.jsx)(el.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                        (0, E.jsx)(cm.Ay, { variant: cm.qP.BLUE, weight: cm.fh.MEDIUM, progress: o }),
                        (0, E.jsx)(el.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: ch.qg,
                            children: j.intl.format(cA.default.iIpfQe, {
                                threshold: null != l ? a : r,
                                count: null != l ? i : r,
                            }),
                        }),
                    ],
                }),
                l?.simple_icon_url != null &&
                    (0, E.jsx)("div", {
                        className: ch.fC,
                        children: (0, E.jsx)("img", { src: l.simple_icon_url, alt: "", className: ch.qS }),
                    }),
            ],
        })
    );
}
function cp(e) {
    let { analyticsLocation: t } = e,
        {
            badgeProgress: i,
            currentTier: n,
            nextTier: l,
            giftsRemaining: s,
            tiers: r,
        } = (0, g.cf)([cc.Ay], () => ({
            badgeProgress: cc.Ay.getSingleRequirementProgress(ci.$.GIFTING)?.current ?? 0,
            currentTier: cc.Ay.getCurrentTier(ci.$.GIFTING),
            nextTier: cc.Ay.getNextTier(ci.$.GIFTING),
            giftsRemaining: cc.Ay.getRemainingToNextTier(ci.$.GIFTING),
            tiers: cc.Ay.getBadgeById(ci.$.GIFTING)?.tiers ?? [],
        }));
    return 0 === r.length
        ? null
        : (0, E.jsxs)("div", {
              className: ch.kL,
              children: [
                  (0, E.jsxs)("div", {
                      className: ch.Jo,
                      children: [
                          i > 0 &&
                              (0, E.jsxs)(E.Fragment, {
                                  children: [
                                      (0, E.jsx)(cx, {
                                          badgeProgress: i,
                                          currentTier: n,
                                          nextTier: l,
                                          giftsRemaining: s,
                                      }),
                                      (0, E.jsx)("div", { className: ch.yF }),
                                  ],
                              }),
                          (0, E.jsx)(cS, { tiers: r, currentTier: n }),
                          (0, E.jsx)(el.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: ch.PJ,
                              children: j.intl.string(cA.default["4Yp0mI"]),
                          }),
                      ],
                  }),
                  (0, E.jsx)(cT, { analyticsLocation: t, location: "UserSettingsGiftingBadgeProgress" }),
              ],
          });
}
let cf = (0, a.zZ)(u.X.GIFTING_BADGE_CATEGORY, {
        useTitle: () => j.intl.string(cA.default.sFokBp),
        buildLayout: () => [cN],
        usePredicate: () => {
            let e = (0, cs.F5)("gift_inventory"),
                t = (0, g.bG)([cc.Ay], () => cc.Ay.getBadgeById(ci.$.GIFTING));
            return e && null != t;
        },
    }),
    cN = (0, a.E2)(u.X.GIFTING_BADGE_CONTENT, {
        useSearchTerms: () => [j.intl.string(cA.default.sFokBp)],
        Component: () => (0, E.jsx)(cp, {}),
    });
var c_ = i(264779),
    cI = i(412260),
    cC = i(555393),
    cb = i(725807),
    cv = i(212168),
    cy = i(469778),
    cj = i(45938),
    cO = i(109802),
    cR = i(869038),
    cL = i(221347);
function cD(e) {
    let { children: t, className: i, splashArtURL: n } = e;
    return (0, E.jsxs)(r1.A, {
        className: e7()(cL.wx, i),
        align: r1.A.Align.CENTER,
        children: [
            (0, E.jsx)("div", { className: cL.Bn, style: null != n ? { backgroundImage: `url(${n})` } : void 0 }),
            t,
        ],
    });
}
function cP(e) {
    let { children: t, className: i } = e;
    return (0, E.jsx)("div", { className: e7()(cL.rf, i), children: t });
}
class cG extends S.PureComponent {
    static Header = cD;
    static Body = cP;
    render() {
        let { children: e, className: t, onMouseEnter: i, onMouseLeave: n } = this.props;
        return (0, E.jsx)("div", { className: e7()(cL.Nr, t), onMouseEnter: i, onMouseLeave: n, children: e });
    }
}
var cM = i(165191),
    cU = i(871123),
    cV = i(366523),
    ck = i(280450),
    cw = i(30793),
    cF = i(97352),
    cB = i(67480),
    cz = i(147925),
    cX = i(957565),
    cY = i(615396),
    cH = i(990125);
class cK extends S.PureComponent {
    _copyModeTimeout = new oY.Ep();
    state = { copyMode: cO.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case cO.q.SUCCESS:
                return j.intl.string(j.t.XVvPjU);
            case cO.q.ERROR:
                return j.intl.string(j.t.i4GM3L);
            default:
                return j.intl.string(j.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        cR.A.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: i } = this.props;
        (0, cj.AK)(t, i),
            (0, cX.C)(
                e,
                () => this.setState({ copyMode: cO.q.SUCCESS }),
                () => this.setState({ copyMode: cO.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: cO.q.DEFAULT });
            });
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: i } = this.state;
        return (0, E.jsxs)(r1.A, {
            direction: r1.A.Direction.VERTICAL,
            className: cH.Gj,
            children: [
                (0, E.jsx)(cO.e, {
                    className: cH.ph,
                    value: (0, cj.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: i,
                    supportsCopy: cX.p5,
                    hideMessage: e ? j.intl.string(j.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: oi.XD.BRAND,
                    buttonLook: oi.pR.FILLED,
                }),
                (0, E.jsxs)("div", {
                    className: cH.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, E.jsxs)(S.Fragment, {
                                  children: [
                                      j.intl.format(j.t.ltVZcJ, { hours: t.expiresAt.diff(rr()(), "h") }),
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
class cW extends S.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: i, giftStyle: n } = this.props;
        this.setState({ isCreating: !0 }),
            await cR.A.createGiftCode(t, i, n),
            this.setState({ isCreating: !1, isOpen: !0 });
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: i } = this.props,
            n = !this.state.isOpen;
        (null == i || null == this._loadedAt || i < this._loadedAt) && n && cR.A.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen });
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: i } = this.props;
        return (0, cU.bF)(e)
            ? (0, E.jsx)(cV.e, { shape: "square", sku: e, containerClassName: cH.ez })
            : null != t
              ? (0, E.jsx)(cM.A, { giftStyle: t, className: cH.ez, shouldAnimate: this.state.isHovered })
              : (0, E.jsx)(p.A, { game: i, size: p.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: i } = this.props;
        return (0, cU.bF)(e)
            ? (0, E.jsxs)("div", {
                  className: e7()(cH.Oc, cH.ic),
                  children: [
                      (0, E.jsx)(p.A, { game: i, size: p.M.XSMALL, skuId: e.id, className: cH._u }),
                      j.intl.format(j.t["6plpZi"], { applicationName: i.name, copies: t.length }),
                  ],
              })
            : (0, E.jsx)("div", { className: cH.Oc, children: j.intl.format(j.t.zMcvcA, { copies: t.length }) });
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
            (0, E.jsx)("div", { className: cH.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, E.jsxs)(r1.A, {
            justify: r1.A.Justify.BETWEEN,
            align: r1.A.Align.CENTER,
            className: cH.pe,
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
        return (0, E.jsxs)(cG, {
            className: n,
            children: [
                (0, E.jsx)(en.D, {
                    onClick: this.handleToggleOpen,
                    className: cH.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, E.jsx)(cG.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, E.jsxs)("div", {
                            className: cH.MY,
                            children: [
                                (0, E.jsxs)(r1.A, {
                                    align: r1.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, E.jsxs)("div", {
                                            className: cH.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, E.jsx)(cz.A, {
                                    direction: a ? cz.A.Directions.UP : cz.A.Directions.DOWN,
                                    className: cH.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, E.jsx)(cG.Body, {
                          children: s
                              ? (0, E.jsx)(dh.y, { className: cH.u1 })
                              : (0, E.jsxs)(S.Fragment, {
                                    children: [
                                        i.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        i.map((e) => (0, E.jsx)(cK, { giftCode: e, sku: l, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let cZ = g.Ay.connectStores([cB.A, eY.A, cw.A, x.A, cF.A, ck.default], (e) => {
    let { skuId: t, subscriptionPlanId: i, giftStyle: n } = e,
        l = cB.A.get(t);
    if (null == l) throw Error("SKU was unavailable while rendering gift.");
    let s = cw.A.getForGifterSKUAndPlan(ck.default.getId(), t, i)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === n);
    return {
        sku: l,
        hideCodes: eY.A.enabled,
        isFetching: cw.A.getUserGiftCodesFetchingForSKUAndPlan(t, i),
        loadedAt: cw.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, i),
        application: x.A.getApplication(l.applicationId),
        subscriptionPlan: null != i ? (0, cY.c9)(i) : null,
        giftCodes: s,
    };
})(cW);
var cq = i(725570),
    cQ = i(736653),
    cJ = i(46054);
let c$ = rr().duration(30, "days");
var c0 = i(416052),
    c1 = i(53070);
function c2(e) {
    let { onClose: t, transitionState: i } = e;
    return (0, E.jsx)(rq.Modal, {
        title: "",
        size: "md",
        input: (0, E.jsx)("div", { className: c1.aR }),
        onClose: async () => await t(),
        actions: [{ text: j.intl.string(j.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: i,
        children: (0, E.jsxs)("div", {
            className: c1.t4,
            children: [
                (0, E.jsx)(eV.D, { variant: "heading-xl/semibold", children: j.intl.string(j.t.iufib1) }),
                (0, E.jsx)(el.E, { variant: "text-md/normal", className: c1.G3, children: j.intl.string(j.t.eAn6z2) }),
            ],
        }),
    });
}
let c3 = function (e) {
    let { onClose: t, onClaim: i, code: n, outboundPromotion: l, transitionState: s } = e,
        [r, a] = S.useState(null),
        o = (0, lJ.GV)(),
        { analyticsLocations: u } = (0, n1.Ay)(e4.A.USER_SETTINGS_GIFT_INVENTORY);
    return (S.useEffect(() => {
        null == n &&
            (0, c_.kd)({
                promotionId: l.id,
                promotionTitle: l.outboundTitle,
                partnerId: l.partnerId,
                analyticsLocations: u,
            })
                .then((e) => i(e))
                .catch((e) => a(e?.body?.code));
    }, [n, l.id, l.outboundTitle, l.partnerId, i, u]),
    null != r)
        ? (0, E.jsx)(c2, { onClose: t, transitionState: s })
        : null == n
          ? (0, E.jsx)(dh.y, { className: c1.Lq })
          : (0, E.jsx)(rq.Modal, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, E.jsxs)("div", {
                    className: c1.N1,
                    children: [
                        (0, E.jsx)("div", { className: c1.Qw }),
                        (0, E.jsx)(eV.D, { variant: "heading-xl/semibold", children: j.intl.string(j.t["23BfZh"]) }),
                        (0, E.jsx)(el.E, {
                            variant: "text-md/normal",
                            className: c1.G3,
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
                            let e = (0, c_.kc)(n, l);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: s,
                "aria-label": o,
                children: (0, E.jsxs)("div", {
                    children: [
                        (0, E.jsx)(ew.c, { className: c1.M5 }),
                        (0, E.jsx)(l8.D, {
                            label: j.intl.string(j.t.s9LFQh),
                            helperText: j.intl.string(j.t["F+nFTZ"]),
                            children: (0, E.jsx)(c0.A, {
                                value: n,
                                buttonColor: oi.$n.Colors.BRAND,
                                buttonLook: oi.$n.Looks.FILLED,
                                delay: 1e3,
                            }),
                        }),
                    ],
                }),
            });
};
var c5 = i(707554),
    c4 = i(339048),
    c6 = i(104589);
function c8() {
    let e = (0, g.yK)([cy.A], () => cy.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        t = e$().groupBy(e, (e) => (0, cj.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [i, n] = S.useState(!1);
    if (
        (S.useEffect(() => {
            lm.h.wait(() => {
                (0, c4.XJ)().then(() => n(!0));
            });
        }, []),
        !i)
    )
        return (0, E.jsx)(dh.y, { className: c6.Lq });
    if (0 === Object.keys(t).length)
        return (0, E.jsxs)("div", {
            className: c6.p$,
            children: [
                (0, E.jsx)("div", { className: c6.QT }),
                (0, E.jsx)(c5.H, { className: c6.ks, children: j.intl.string(j.t.B1qgZn) }),
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
    let l = e$()
        .keys(t)
        .map((e) => {
            let { skuId: i, subscriptionPlanId: n, giftStyle: l } = (0, cj.X6)(e);
            return (0, E.jsx)(cZ, { skuId: i, subscriptionPlanId: n, entitlements: t[e], giftStyle: l }, e);
        });
    return (0, E.jsx)(Q.B, { gap: "lg", children: l });
}
function c7(e) {
    let t,
        { outboundPromotion: i, code: n } = e,
        [l, s] = S.useState(!1),
        [r, a] = S.useState(!1);
    function o() {
        return s((e) => !e);
    }
    let u = (0, cQ.Ay)(),
        d = (0, c_.WD)(i.id, u),
        c = null != n,
        g = S.useMemo(
            () =>
                (0, ra.i$)(
                    c
                        ? null != i.outboundRedemptionEndDate
                            ? rr()(i.outboundRedemptionEndDate)
                            : rr()(i.endDate).add(c$)
                        : rr()(i.endDate),
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
        A = (0, cC.N)()?.isEligible === !0,
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
                            className: c6.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: cJ.A.parse(x, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            r &&
                (0, E.jsx)(cq.aF, {
                    renderModal: (e) =>
                        (0, E.jsx)(c3, {
                            ...e,
                            onClose: h,
                            onClaim: cr.Ay.addClaimedOutboundPromotionCode,
                            code: n,
                            outboundPromotion: i,
                        }),
                    onCloseRequest: h,
                }),
        ],
    });
}
function c9(e) {
    let { redesign: t = !1 } = e,
        i = (0, g.yK)([cy.A], () => cy.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null != t;
        }),
        n = (0, cC.N)()?.isEligible ?? null,
        {
            activeOutboundPromotions: l,
            claimedEndedOutboundPromotions: s,
            claimedOutboundPromotionCodeMap: r,
        } = (0, ca.y7)(),
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
                          (0, E.jsx)(ua.t, {
                              size: "md",
                              color: er.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: c6.PC,
                          }),
                          (0, E.jsx)(el.E, {
                              variant: "text-md/normal",
                              className: c6.Qw,
                              children: j.intl.format(j.t.G4fwxK, {
                                  onClick: () => {
                                      (0, lZ.default)(), (0, l7.pX)(U.BVt.APPLICATION_STORE);
                                  },
                              }),
                          }),
                          (0, E.jsx)(cb.A, {
                              showGradient: !0,
                              className: c6.aA,
                              subscriptionTier: l0.pe.TIER_2,
                              textOptions: { textOverride: j.intl.string(j.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
    return (0, E.jsxs)("div", {
        children: [
            m,
            (0, E.jsx)(cv.A, {
                className: c6.Yj,
                isShown: !1 === n && c,
                type: cv.i.PREMIUM,
                hasBackground: !0,
                children: (0, E.jsxs)("div", {
                    className: c6.DE,
                    children: [
                        A,
                        s.map((e) => {
                            let { code: t, promotion: i } = e;
                            return (0, E.jsx)(c7, { outboundPromotion: i, code: t }, i.id);
                        }),
                        l.map((e) => (0, E.jsx)(c7, { outboundPromotion: e, code: r[e.id] }, e.id)),
                        null != a
                            ? (0, E.jsx)(
                                  cZ,
                                  {
                                      skuId: a.skuId,
                                      subscriptionPlanId: a.subscriptionPlanId,
                                      entitlements: [a],
                                      giftCodeBatchId: l0.FB,
                                  },
                                  (0, cj.Kx)(a.skuId, a.subscriptionPlanId),
                              )
                            : null,
                        u.length > 0
                            ? (0, E.jsx)(
                                  cZ,
                                  {
                                      skuId: u[0].skuId,
                                      subscriptionPlanId: u[0].subscriptionPlanId,
                                      entitlements: u,
                                      giftCodeBatchId: l0.Bu,
                                  },
                                  (0, cj.Kx)(u[0].skuId, u[0].subscriptionPlanId),
                              )
                            : null,
                        d.length > 0
                            ? (0, E.jsx)(
                                  cZ,
                                  {
                                      skuId: d[0].skuId,
                                      subscriptionPlanId: d[0].subscriptionPlanId,
                                      entitlements: d,
                                      giftCodeBatchId: l0.Bu,
                                  },
                                  (0, cj.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                    ],
                }),
            }),
        ],
    });
}
let ge = (0, a.zZ)(u.X.MY_GIFTS_CATEGORY, {
        useTitle: gi,
        buildLayout: () => [gt],
        usePredicate: () => {
            let { claimedOutboundPromotionCodes: e, claimedOutboundPromotionCodesLoaded: t } = (0, g.cf)(
                    [cI.A],
                    () => ({
                        claimedOutboundPromotionCodes: cI.A.claimedOutboundPromotionCodes,
                        claimedOutboundPromotionCodesLoaded: cI.A.claimedOutboundPromotionCodesLoaded,
                    }),
                ),
                i = (0, ca.T1)({ includeClaimedPromotions: !0 }),
                n = (0, c_.Wl)(e, i).length;
            return t && i.length + n > 0;
        },
    }),
    gt = (0, a.E2)(u.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [gi()],
        Component: () => (0, E.jsx)(c9, { redesign: !0 }),
    });
function gi() {
    return j.intl.string(j.t.YzjdWJ);
}
let gn = (0, a.zZ)(u.X.PURCHASED_GIFTS_CATEGORY, { useTitle: gs, buildLayout: () => [gl] }),
    gl = (0, a.E2)(u.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [gs()], Component: () => (0, E.jsx)(c8, {}) });
function gs() {
    return j.intl.string(j.t.FWe6CP);
}
var gr = i(532446),
    ga = i(499454);
class go extends S.Component {
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
                    await (0, dN.Qp)(i),
                        (0, dN.HF)({
                            initialCode: i,
                            withRedemptionSuccessModal: !0,
                            source: "user_settings_gift_code_redemption",
                            loadId: (0, dE.A)(),
                        }),
                        this.setState({ codeInput: "" });
                    return;
                } catch {}
            let e = (0, cj.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let n = await cR.A.resolveGiftCode(e);
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
                (0, ga.h)({ processedCode: e }),
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
                children: (0, E.jsxs)(gr.M, {
                    children: [
                        (0, E.jsx)(rQ.k, {
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
function gu(e) {
    let { redesign: t = !1 } = e,
        { enabled: i } = (0, dJ.c)({ location: "UserSettingsBilling" }),
        n = S.useContext(G.AnalyticsContext),
        l = (0, g.bG)([eY.A], () => eY.A.enabled);
    return (0, E.jsx)(go, { analyticsContext: n, obscureInput: l, acceptGiftCardRedemption: i, redesign: t });
}
let gd = (0, a.zZ)(u.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => j.intl.string(j.t["il+VCo"]),
        buildLayout: () => [gc],
        usePredicate: () => !(0, co.Hp)(),
    }),
    gc = (0, a.E2)(u.X.REDEEM_CODE_INPUT, {
        Component: () => (0, E.jsx)(gu, { redesign: !0 }),
        useSearchTerms: () => [j.intl.string(j.t["jcSP+g"]), j.intl.string(j.t["il+VCo"])],
    }),
    gg = (0, a.t_)(u.X.GIFT_PANEL, {
        useTitle: () => j.intl.string(j.t["jcSP+g"]),
        buildLayout: () => [gd, ge, cf, gn, cd],
        initialize: () => {
            cr.Ay.fetchClaimedOutboundPromotionCodes(), (0, cs.Ig)("gift_inventory") && (0, cl.o0)(ci.$.GIFTING);
        },
    }),
    gm = (0, a.i4)(u.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["jcSP+g"]),
        icon: cn.o,
        usePersistentBadge: function () {
            let e = (0, ca.IO)().length;
            return S.useMemo(() => ({ badgeType: h.Xi.COUNT, count: e }), [e]);
        },
        buildLayout: () => [gg],
    });
var gA = i(659758),
    gh = i(663367),
    gE = i(815846);
let gS = (0, a.E2)(u.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, g.bG)([iA.default], () => iA.default.getCurrentUser());
            return (0, uE.YE)(e, l0.PremiumTypes.TIER_2) ? (0, E.jsx)(gE.A, {}) : (0, E.jsx)(gh.A, {});
        },
        useSearchTerms: () => [j.intl.string(j.t.Ipxkog)],
    }),
    gT = (0, a.zZ)(u.X.NITRO_CATEGORY, { buildLayout: () => [gS] }),
    gx = (0, a.t_)(u.X.NITRO_PANEL, {
        useTitle: () => j.intl.string(j.t.Ipxkog),
        useObscuredNotice: dm.L,
        buildLayout: () => [gT],
    }),
    gp = (0, a.i4)(u.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.Ipxkog),
        icon: ua.t,
        usePersistentBadge: function (e) {
            let t = (0, gA.e)(e);
            return S.useMemo(() => ({ badgeType: h.Xi.STRONGLY_DISCOURAGED_CUSTOM, customBadge: t }), [t]);
        },
        buildLayout: () => [gx],
    });
var gf = i(104510),
    gN = i(820739),
    g_ = i(73825),
    gI = i(160946);
let gC = (0, i(240921).Ay)({
    name: "2026-03-boosting-settings-refresh",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var gb = i(859241),
    gv = i(531260),
    gy = i(369163),
    gj = i(957485),
    gO = i(926268),
    gR = i(253449),
    gL = i(93364);
function gD(e) {
    let { className: t, icon: i, children: n } = e;
    return (0, E.jsxs)("li", {
        className: e7()(gR.Nr, t),
        children: [
            (0, E.jsx)(i, { className: gR.Kk }),
            (0, E.jsx)(el.E, { className: gR.__invalid_description, variant: "text-sm/medium", children: n }),
        ],
    });
}
let gP = function (e) {
    let { cardClassName: t } = e;
    return (0, E.jsxs)("div", {
        className: gR.iE,
        children: [
            (0, E.jsxs)("div", {
                className: gR.Qs,
                children: [
                    (0, E.jsx)(eV.D, {
                        className: gR.R_,
                        color: "text-overlay-light",
                        variant: "heading-xxl/bold",
                        children: j.intl.string(j.t.IzKs3o),
                    }),
                    (0, E.jsxs)("ul", {
                        className: gR.kR,
                        children: [
                            (0, E.jsx)(gD, { className: t, icon: gy.v, children: j.intl.string(j.t.TZigSO) }),
                            (0, E.jsx)(gD, {
                                className: t,
                                icon: (e) =>
                                    (0, E.jsx)("img", { className: e7()(e.className, gR.Dp), src: gL, alt: "" }),
                                children: j.intl.string(j.t.hjQuV2),
                            }),
                            (0, E.jsx)(gD, { className: t, icon: gj.i, children: j.intl.string(j.t["2RUcaM"]) }),
                            (0, E.jsx)(gD, { className: t, icon: gO.C, children: j.intl.string(j.t.bJoZKV) }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)("div", { className: gR.JP }),
        ],
    });
};
var gG = i(834040),
    gM = i(999747);
let gU = [
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
    gV = function (e) {
        let { className: t } = e,
            [i, n] = S.useState(null);
        return (0, E.jsxs)("div", {
            className: e7()(gM.iE, t),
            children: [
                (0, E.jsx)(eV.D, {
                    className: gM.R_,
                    variant: "heading-xxl/bold",
                    children: j.intl.string(j.t.HPJ6Nj),
                }),
                (0, E.jsx)("ul", {
                    className: gM.p_,
                    children: gU.map((e, t) => {
                        let l = i === t;
                        return (0, E.jsxs)(
                            "div",
                            {
                                className: gM.Aw,
                                children: [
                                    (0, E.jsxs)(en.D, {
                                        className: e7()(gM.k7, { [gM.lo]: l }),
                                        onClick: () => n((e) => (e === t ? null : t)),
                                        tag: "li",
                                        children: [
                                            (0, E.jsx)(el.E, {
                                                className: gM.b1,
                                                variant: "text-lg/normal",
                                                children: e.getQuestion(),
                                            }),
                                            l
                                                ? (0, E.jsx)(gG.Q, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: gM.q4,
                                                  })
                                                : (0, E.jsx)(rV.j, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: gM.q4,
                                                  }),
                                        ],
                                    }),
                                    l &&
                                        (0, E.jsx)(el.E, {
                                            className: gM.ZF,
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
var gk = i(462887),
    gw = i(933832),
    gF = i(789645),
    gB = i(116891),
    gz = i(537532);
let gX = [
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
                resolution: (0, gB.eT)("GuildBoostingMarketingTierComparisonTable"),
                framerate: l0.TG[U.TVA.TIER_2].limits.screenShareQualityFramerate,
            }),
        getTier3Value: () =>
            j.intl.formatToPlainString(j.t.zZ6Rdi, {
                resolution: (0, gB.eT)("GuildBoostingMarketingTierComparisonTable"),
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
function gY(e) {
    let { children: t, className: i, tier: n } = e,
        l = n === U.TVA.NONE ? "text-muted" : "text-strong",
        s = n === U.TVA.NONE || null == n ? "heading-xl/normal" : "heading-xl/bold";
    return (0, E.jsxs)("th", {
        className: e7()(gz.PG, i),
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
function gH(e) {
    let t,
        { className: i, textVariant: n = "text-md/bold", value: l } = e;
    if ("boolean" == typeof l) {
        let e = e7()(gz.Jk, { [gz.I$]: l });
        t = l
            ? (0, E.jsx)(gw.A, { size: "md", color: "currentColor", className: e })
            : (0, E.jsx)(gF.P, { size: "md", color: "currentColor", className: e });
    } else t = (0, E.jsx)(el.E, { color: "interactive-text-active", variant: n, children: l });
    return (0, E.jsx)("td", { className: e7()(gz.xR, i), children: t });
}
function gK(e) {
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
              className: e7()(gz.ER, { [gz.GH]: i === U.TVA.TIER_2, [gz.z5]: i === U.TVA.TIER_3 }),
              children: (0, E.jsx)(el.E, {
                  className: gz.uQ,
                  color: "text-overlay-light",
                  variant: "text-xs/bold",
                  children: t === U.TVA.TIER_3 ? j.intl.string(j.t.d849Up) : j.intl.string(j.t.dZeX1z),
              }),
          });
}
function gW(e) {
    let { isFocused: t, handleFocus: i, handleRowBlur: n, theme: l, row: s, hideTier0: r } = e,
        a = S.useRef(null);
    return (0, E.jsxs)("tr", {
        className: gz.__invalid_tableRow,
        children: [
            (0, E.jsx)("th", {
                className: e7()(gz.xR, gz.uB),
                scope: "row",
                children: (0, E.jsx)(en.D, {
                    className: e7()(gz.VC, gz.xR, gz.Rk),
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
                                className: gz.Mz,
                                src: (0, gk.M)(l) ? s.getPerkPreviewDarkTheme() : s.getPerkPreviewLightTheme(),
                                alt: "",
                            }),
                        shouldShow: t,
                        spacing: 16,
                        children: () =>
                            (0, E.jsx)(el.E, { variant: "text-md/normal", ref: a, children: s.getPerkHeading() }),
                    }),
                }),
            }),
            !r && (0, E.jsx)(gH, { textVariant: "text-md/normal", value: s.getTier0Value() }),
            (0, E.jsx)(gH, { value: s.getTier1Value() }),
            (0, E.jsx)(gH, { value: s.getTier2Value() }),
            (0, E.jsx)(gH, { value: s.getTier3Value() }),
        ],
    });
}
let gZ = function (e) {
    let t = (0, cQ.Ay)(),
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
                    className: gz.R_,
                    variant: "heading-xxl/extrabold",
                    children: j.intl.string(j.t["9GGb9k"]),
                }),
            (0, E.jsxs)("div", {
                className: gz.wY,
                children: [
                    null != s && (0, E.jsx)(gK, { currentTier: s.premiumTier }),
                    (0, E.jsxs)("table", {
                        className: gz.tp,
                        cellPadding: 0,
                        cellSpacing: 0,
                        children: [
                            (0, E.jsx)("thead", {
                                children: (0, E.jsxs)("tr", {
                                    className: gz.__invalid_tableRow,
                                    children: [
                                        (0, E.jsx)(gY, { className: gz.VC, children: j.intl.string(j.t.F5MY0k) }),
                                        !a && (0, E.jsx)(gY, { tier: U.TVA.NONE, children: j.intl.string(j.t.mx8j2m) }),
                                        (0, E.jsx)(gY, { tier: U.TVA.TIER_1, children: j.intl.string(j.t.nzXtaS) }),
                                        (0, E.jsx)(gY, { tier: U.TVA.TIER_2, children: j.intl.string(j.t["h33/uW"]) }),
                                        (0, E.jsx)(gY, { tier: U.TVA.TIER_3, children: j.intl.string(j.t.BfF6ED) }),
                                    ],
                                }),
                            }),
                            (0, E.jsx)("tbody", {
                                className: gz.__invalid_tableBody,
                                children: gX.map((e, l) => {
                                    let s = i === l;
                                    return void 0 === e.predicate
                                        ? (0, E.jsx)(
                                              gW,
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
var gq = i(338548),
    gQ = i(776096),
    gJ = i(178368),
    g$ = i(534740),
    g0 = i(866323),
    g1 = i(530005),
    g2 = i(443865),
    g3 = i(473145);
function g5(e) {
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
                      iconLeft: g2.x,
                      leadingAccessory: { type: "icon", icon: g2.x },
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
            (0, g3.I5)(t)
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
var g4 = i(545934),
    g6 = i(496431);
let g8 = function (e) {
    let { className: t, cooldown: i } = e,
        n = (0, g6.A)(i);
    return (0, E.jsx)(el.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, ra.uN)(n, { days: j.t.WUTPDc, hours: j.t.c1qodV, minutes: j.t["2+A3dv"] }),
    });
};
var g7 = i(759692);
let g9 = function (e) {
    let { className: t, imageClassName: n, boostInCooldown: l, useReducedMotion: s } = e;
    return (0, E.jsx)("div", {
        className: e7()(g7.h4, t, { [g7.K2]: l }),
        children: (0, E.jsx)("img", {
            className: e7()(g7.Sl, n, { [g7.x8]: l }),
            src: l
                ? i(650442)
                : s
                  ? i(742885)
                  : "https://cdn.discordapp.com/assets/content/86fd98fc22283647a8be93d0c503646b53c84e3cb25ca6562a38cecb84327e58.gif",
            alt: "",
        }),
    });
};
var me = i(743552);
let mt = function (e) {
    let { className: t, hasCooldown: n, isCanceled: l, useReducedMotion: s } = e;
    return (0, E.jsxs)("div", {
        className: e7()(me.sn, t),
        children: [
            l
                ? (0, E.jsx)("img", { className: e7()(me.$J, me.qX), src: i(728707), alt: "" })
                : (0, E.jsx)(g9, { className: me.$J, boostInCooldown: n, useReducedMotion: s }),
            !l && n && (0, E.jsx)("img", { className: me.De, src: i(438807), alt: "" }),
        ],
    });
};
var mi = i(548118),
    mn = i(906199),
    ml = i(944304),
    ms = i(864310),
    mr = i(310918);
let ma = function (e) {
    let { className: t, guildId: i, boostingVariant: n } = e,
        l = (0, u9.bG)([eh.A], () => eh.A.getGuild(i), [i]),
        s = (0, ms.A)(l?.id).total;
    return null == l
        ? (0, E.jsx)("div", {
              className: e7()(t, mr.bo),
              children: (0, E.jsx)("div", {
                  className: mr.$g,
                  children: (0, E.jsx)(el.E, { variant: "text-lg/bold", children: j.intl.string(j.t["6Kwwuo"]) }),
              }),
          })
        : (0, E.jsxs)("div", {
              className: e7()(t, mr.bo),
              children: [
                  (0, E.jsx)(mi.Ay, { className: mr.__invalid_guildIcon, guild: l, size: mi.Ay.Sizes.LARGER }),
                  (0, E.jsxs)("div", {
                      className: mr.$g,
                      children: [
                          (0, E.jsx)(el.E, { variant: "text-lg/bold", children: l.name }),
                          (0, E.jsxs)("div", {
                              className: mr.TZ,
                              children: [
                                  (0, E.jsx)(gf._, {
                                      color: er.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                      className: mr.Me,
                                  }),
                                  (0, E.jsx)(el.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: j.intl.format(j.t["pob/cL"], { subscriptions: s }),
                                  }),
                                  (0, E.jsx)("div", { className: mr.me }),
                                  (0, E.jsx)(el.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: (0, g3.gb)(l.premiumTier, { useLevels: !1 }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  n
                      ? (0, E.jsx)(ml.A, {
                            guild: l,
                            analyticsLocation: {
                                page: U.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                section: U.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                object: U.ZSU.BUTTON_CTA,
                                objectType: U.AnalyticsObjectTypes.BUY,
                            },
                            pauseAnimation: !0,
                            size: oi.$n.Sizes.MEDIUM,
                            color: oi.$n.Colors.PRIMARY,
                            buttonText: j.intl.string(j.t.aBHecF),
                        })
                      : (0, E.jsx)(ek.$, {
                            variant: "secondary",
                            text: j.intl.string(j.t.KLOhbO),
                            onClick: () => {
                                (0, lZ.default)(),
                                    (0, mn.K4)({
                                        guildId: l.id,
                                        location: { section: U.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA },
                                    });
                            },
                        }),
              ],
          });
};
var mo = i(20230);
function mu(e) {
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
            let e = null != i.premiumGuildSubscription ? dv.default.extractTimestamp(i.premiumGuildSubscription.id) : 0;
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
        u = (0, g0.p)(n, { from: { opacity: 0 }, enter: { opacity: 1 }, leave: { opacity: 0 } }, "animate-always");
    return l || t === U.TVA.NONE
        ? (0, E.jsx)("div", {
              className: mo.xm,
              children: (0, E.jsx)(el.E, { variant: "text-sm/medium", color: "text-muted", children: a }),
          })
        : u((e, t) =>
              (0, E.jsx)(g$.animated.div, {
                  style: e,
                  className: mo.xm,
                  children: (0, E.jsx)(el.E, { variant: "text-sm/medium", color: "text-muted", children: t ? o : a }),
              }),
          );
}
function md(e) {
    let {
            guildTier: t,
            guildBoostSlot: i,
            premiumSubscription: n,
            hasCancelableGuildBoostSlot: l,
            showAltText: s,
            isLastGuildBoostSlot: r,
        } = e,
        a = (0, u9.bG)([ni.Ay], () => ni.Ay.useReducedMotion),
        o = S.useMemo(() => (null != i.cooldownEndsAt ? new Date(i.cooldownEndsAt) : null), [i]),
        u = S.useMemo(() => null != o && o > new Date(), [o]),
        d = (0, g3.I5)(i),
        c = (0, gv.A)(),
        g = S.useRef(null);
    return (0, E.jsxs)("div", {
        className: mo.PW,
        children: [
            (0, E.jsxs)("div", {
                className: mo.$U,
                children: [
                    (0, E.jsx)(mt, { isCanceled: d, hasCooldown: u, useReducedMotion: a }),
                    (0, E.jsx)("div", {
                        className: mo.vh,
                        children:
                            null != o && u && !d
                                ? (0, E.jsx)(g8, { className: mo.xm, cooldown: o.getTime() })
                                : (0, E.jsx)(mu, {
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
                            return (0, E.jsx)(g5, {
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
                                className: mo.oU,
                                children: (0, E.jsx)(g1.F, { size: "md", color: "currentColor" }),
                            }),
                    }),
                ],
            }),
            !r && (0, E.jsx)("div", { className: mo.eX }),
        ],
    });
}
function mc(e) {
    let {
            guildId: t,
            guildBoostSlotRecords: i,
            premiumSubscription: n,
            hasCancelableGuildBoostSlot: l,
            showAltText: s,
        } = e,
        r = (0, u9.bG)([eh.A], () => eh.A.getGuild(t), [t]);
    return (0, E.jsxs)("div", {
        className: mo.ag,
        children: [
            (0, E.jsx)(ma, { guildId: t, boostingVariant: !1 }),
            i.map((e, t) =>
                (0, E.jsx)(
                    md,
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
function mg(e) {
    let { guildId: t, appliedGuildBoosts: i, premiumSubscription: n } = e,
        l = (0, u9.bG)([eh.A], () => eh.A.getGuild(t), [t]),
        s = dv.default.fromTimestamp(Date.now());
    if (
        (i.forEach((e) => {
            (null == s || 0 > dv.default.compare(e.id, s)) && (s = e.id);
        }),
        null == s)
    )
        return null;
    let r = g4.A.createFromServer(
        {
            id: dv.default.fromTimestamp(Date.now()),
            subscription_id: n.id,
            canceled: !1,
            premium_guild_subscription: { id: s, guild_id: t },
            cooldown_ends_at: null,
        },
        n,
    );
    return (0, E.jsxs)("div", {
        className: mo.ag,
        children: [
            (0, E.jsx)(ma, { guildId: t, boostingVariant: !1 }),
            i.map((e, t) =>
                (0, E.jsx)(
                    md,
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
function mm(e) {
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
              className: mo.iE,
              children: [
                  (0, E.jsx)("div", {
                      className: mo.kL,
                      children: dv.default
                          .keys(n)
                          .map((e) =>
                              (0, E.jsx)(mg, { guildId: e, premiumSubscription: i, appliedGuildBoosts: n[e] }, e),
                          ),
                  }),
                  (0, E.jsx)("div", { className: mo.vK }),
              ],
          });
}
function mA(e) {
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
                if ((!(0, g3.I5)(l) && e++, null != l.premiumGuildSubscription)) {
                    let e = l.premiumGuildSubscription.guildId;
                    e in i || (i[e] = []), i[e].push(l);
                }
            }),
            { boostsByGuildId: i, numActiveGuildBoostSlots: e }
        );
    }, [t]);
    if (null == i || 0 === Object.keys(s).length) return null;
    let a = r > uE.Ay.getNumIncludedPremiumGuildSubscriptionSlots(i.planId);
    return (0, E.jsxs)("div", {
        className: mo.iE,
        children: [
            (0, E.jsx)("div", {
                className: mo.kL,
                children: dv.default
                    .keys(s)
                    .map((e) =>
                        (0, E.jsx)(
                            mc,
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
            (0, E.jsx)("div", { className: mo.vK }),
        ],
    });
}
var mh = i(461546);
let mE = function (e) {
    let { hasGuildBoostSlots: t, hasAppliedGuildBoosts: n, hasBoostPerk: l, canAddBoosts: s } = e;
    return (0, E.jsxs)("div", {
        className: mh.iE,
        children: [
            (0, E.jsx)("div", {
                className: mh.bj,
                children: (0, E.jsx)("img", { alt: "", className: mh.KV, src: i(742885) }),
            }),
            (0, E.jsxs)("div", {
                className: mh.D7,
                children: [
                    (0, E.jsx)(eV.D, {
                        variant: "display-md",
                        className: mh.R_,
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
                        className: mh.Mz,
                        children: (0, E.jsx)("path", {
                            d: "M101.3,45.5C57.5,45.9,15.9,82.2,0,99.5V210h660V53.5c-164-137-265.2,32.4-385.8,33.6  C177.7,88.1,158.1,45,101.3,45.5z",
                        }),
                    }),
                ],
            }),
        ],
    });
};
var mS = i(725538),
    mT = i(168482);
function mx() {
    return (0, E.jsxs)("div", {
        className: mS.iE,
        children: [
            (0, E.jsx)("img", { className: mS.Kk, alt: "", src: mT }),
            (0, E.jsxs)("div", {
                className: mS.pq,
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
var mp = i(502572),
    mf = i(614820),
    mN = i(987144),
    m_ = i(178015);
let mI = function () {
    let e = S.useRef(null),
        { analyticsLocations: t } = (0, n1.Ay)(),
        { fractionalState: n } = (0, gv.A)();
    function l(i) {
        null != e.current && (0, K.closeModal)(e.current),
            (0, mN.g)({
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
    let r = (0, g3.Nc)({ fractionalState: n });
    return (0, E.jsxs)("div", {
        className: m_.iE,
        children: [
            (0, E.jsx)(gf._, { color: er.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: m_.$J }),
            (0, E.jsx)(el.E, {
                className: m_.C,
                color: "text-default",
                variant: "text-sm/medium",
                children: j.intl.format(j.t.kqC5vq, {
                    boostAnyGuildHook: (e, t) => {
                        let i = null != r,
                            n = (0, mf.O)(e),
                            l = (0, E.jsx)("div", {
                                className: m_.lO,
                                children: (0, E.jsx)(
                                    ea.Q,
                                    { variant: "primary", onClick: i ? void 0 : s, text: n, disabled: i },
                                    t,
                                ),
                            });
                        return i
                            ? (0, E.jsx)(
                                  mp.A,
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
var mC = i(735310);
let mb = function (e) {
    let { canAddBoosts: t, canApplyBoosts: i } = e,
        n = (0, g.bG)([gQ.A], () => gQ.A.affinities),
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
              className: mC.iE,
              children: [
                  t &&
                      (0, E.jsx)(eV.D, {
                          variant: "heading-lg/semibold",
                          className: mC.wx,
                          children: j.intl.string(j.t.r90Wgo),
                      }),
                  s.map((e) => (0, E.jsx)(ma, { className: mC.ZS, guildId: e, boostingVariant: !0 }, e)),
                  l.length > 3 && i && (0, E.jsx)(mI, {}),
              ],
          });
};
var mv = i(773447);
let my = function (e) {
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
                r = uE.Ay.getDefaultPrice(s.id, i),
                a = (0, dC.CE)((0, dC.$g)(r.amount, r.currency), s.interval, s.intervalCount);
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
        className: mv.i,
        children: [
            (0, E.jsx)(eV.D, { variant: "heading-lg/bold", className: mv.V, children: s }),
            null != r && (0, E.jsx)(el.E, { variant: "text-sm/normal", children: r }),
        ],
    });
};
var mj = i(724624),
    mO = i(983511),
    mR = i(342744),
    mL = i(87719),
    mD = i(439312);
function mP(e) {
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
        u = (0, g3.I5)(t),
        d = s?.isPaused === !0 && a === l0.xc.NONE,
        c = j.intl.string(j.t.mOWsF1);
    return (0, E.jsxs)(
        "li",
        {
            className: mD.Hp,
            children: [
                (0, E.jsxs)("div", {
                    className: mD.YL,
                    children: [
                        (0, E.jsx)(mt, {
                            className: mD.W6,
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
                              ? (0, E.jsx)(g8, { cooldown: o.getTime() })
                              : (0, E.jsx)(el.E, {
                                    className: mD.__invalid_unappliedGuildBoostSlotDescription,
                                    color: "text-muted",
                                    variant: "text-sm/medium",
                                    children: j.intl.string(j.t["2mcafz"]),
                                }),
                    ],
                }),
                (0, E.jsxs)("div", {
                    className: mD.E7,
                    children: [
                        i &&
                            !u &&
                            (0, E.jsx)(mp.A, {
                                shouldShow: d,
                                text: c,
                                "aria-label": c.toString(),
                                children: (e) =>
                                    (0, E.jsx)("div", {
                                        className: mD.LB,
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
                            (0, E.jsx)(mp.A, {
                                shouldShow: d,
                                text: c,
                                "aria-label": c.toString(),
                                children: (e) =>
                                    (0, E.jsx)("div", {
                                        className: mD.LB,
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
function mG(e) {
    (0, K.openModalLazy)(async () => (t) => (0, E.jsx)(mO.default, { ...t, guildBoostSlot: e }));
}
function mM(e) {
    (0, K.openModalLazy)(async () => (t) => (0, E.jsx)(mR.default, { ...t, guildBoostSlotId: e.id }));
}
let mU = function (e) {
    let t,
        i,
        n,
        { guildBoostSlots: l } = e,
        s = (0, g.bG)([d0.A], () => d0.A.getPremiumTypeSubscription()),
        r = s?.isPausedOrPausePending === !0,
        { fractionalState: a } = (0, gv.A)(),
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
                    !(0, g3.I5)(l) && i++,
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
        p = null != s ? uE.Ay.getNumIncludedPremiumGuildSubscriptionSlots(s.planId) : 0,
        f = Math.max(0, p - m.length),
        N = h > p,
        _ = p === l.length,
        I = _ ? f : 1,
        C = S.useMemo(() => {
            let e = [];
            for (let t = 0; t < I; t++) e.push((0, E.jsx)(g9, { className: mD.YA, useReducedMotion: o }, t));
            return e;
        }, [I, o]),
        b = S.useMemo(() => A.find((e) => e.isAvailable()), [A]);
    if (0 === A.length) return null;
    let v = A.length;
    if (
        ((t = _
            ? j.intl.formatToPlainString(x ? j.t["3DW6Dc"] : j.t["/u15Qc"], { numUnappliedGuildBoostSlots: v })
            : j.intl.formatToPlainString(x ? j.t["3DW6Dc"] : j.t.BPadnO, { numUnappliedGuildBoostSlots: v })),
        uE.Ay.isPremium(u))
    ) {
        function y(e, t) {
            return (0, E.jsx)(
                en.D,
                {
                    className: mD.nw,
                    tag: "span",
                    onClick: () => {
                        (0, mL.e)();
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
            className: mD.iE,
            children: (0, E.jsxs)("div", {
                className: e7()(mD.Qs, [mD.Yq]),
                children: [
                    (0, E.jsxs)("div", {
                        className: mD.wx,
                        children: [
                            (0, E.jsxs)("div", {
                                className: mD.RW,
                                children: [
                                    (0, E.jsx)("div", { className: mD.PS, children: C }),
                                    (0, E.jsxs)("div", {
                                        className: mD.__invalid_headerCopy,
                                        children: [
                                            (0, E.jsx)(eV.D, {
                                                className: mD.gg,
                                                variant: "heading-lg/bold",
                                                children: t,
                                            }),
                                            (0, E.jsx)(el.E, {
                                                className: mD.__invalid_headerSubheading,
                                                color: "text-strong",
                                                variant: "text-sm/normal",
                                                children: i,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, E.jsx)("div", {
                                className: mD.di,
                                children: (0, E.jsx)(mp.A, {
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
                                                                  (0, E.jsx)(mj.default, {
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
                            className: mD.LU,
                            children: A.map((e) =>
                                (0, E.jsx)(
                                    mP,
                                    {
                                        guildBoostSlot: e,
                                        isCancellable: N,
                                        onCancel: mG,
                                        onUncancel: mM,
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
var mV = i(561835);
function mk(e) {
    let { premiumSubscription: t } = e,
        i = (0, g.bG)([gJ.A], () => gJ.A.boostSlots),
        n = S.useMemo(() => Object.values(i), [i]),
        l = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()),
        s = uE.Ay.isPremium(l, l0.PremiumTypes.TIER_2),
        r = (0, g.bG)([gQ.A], () => gQ.A.affinities),
        a = (0, g.bG)([eE.Ay], () => eE.Ay.getFlattenedGuildIds()),
        o = r.length > 0 || a.length > 0,
        u = n.length > 0,
        d = S.useMemo(() => n.filter((e) => null != e.premiumGuildSubscription), [n]),
        c = d.length > 0,
        m = n.length > d.length,
        A = (0, g.bG)([gb.A], () => gb.A.getCurrentUserAppliedBoosts()),
        { fractionalState: h } = (0, gv.A)({ forceFetch: !0 }),
        T = l?.isPremiumGroupMember(),
        x = t?.isPausedOrPausePending === !0 && h === l0.xc.NONE,
        p = t?.isPausedOrPausePending !== !0 && h === l0.xc.NONE && !T,
        f = s && h === l0.xc.FP_SUB_PAUSED,
        N = h === l0.xc.NONE && !T;
    return (0, E.jsxs)("div", {
        className: mV.GO,
        children: [
            (0, E.jsx)(d8.kb, { className: mV.ek }),
            (0, E.jsx)(mE, { hasGuildBoostSlots: u, hasAppliedGuildBoosts: c, hasBoostPerk: f, canAddBoosts: p }),
            N &&
                (0, E.jsx)(my, {
                    hasAppliedGuildBoosts: c,
                    hasBoostPerk: f,
                    hasGuildAffinitiesOrInGuild: o,
                    subscriptionIsPausedOrPausePending: x,
                }),
            T && (0, E.jsx)(gq.A, {}),
            !o && (0, E.jsx)(mx, {}),
            t?.isPaused && h !== l0.xc.FP_SUB_PAUSED
                ? (0, E.jsx)(mm, { appliedGuildBoosts: A, premiumSubscription: t })
                : (0, E.jsx)(mA, { guildBoostSlots: i, premiumSubscription: t }),
            (0, E.jsx)(mU, { guildBoostSlots: n, fractionalPremiumState: h }),
            (0, E.jsx)(mb, { canAddBoosts: c && p, canApplyBoosts: m }),
            (0, E.jsx)(gZ, { className: mV.e4, hideHeading: !0, hideTier0: !0 }),
            (0, E.jsx)(gP, { cardClassName: mV.KW }),
            (0, E.jsx)(gV, { className: mV.JL }),
        ],
    });
}
var mw = i(527113),
    mF = i(365199),
    mB = i(378102);
function mz(e) {
    let { guild: t, className: i } = e,
        { total: n } = (0, ms.A)(t.id);
    return (0, E.jsxs)("div", {
        className: i ?? mB.OA,
        children: [
            (0, E.jsx)(mi.Ay, { className: mB.$f, guild: t, size: mi.Ay.Sizes.MEDIUM }),
            (0, E.jsxs)("div", {
                className: mB.gI,
                children: [
                    (0, E.jsx)(el.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, E.jsxs)("div", {
                        className: mB.ew,
                        children: [
                            (0, E.jsxs)("div", {
                                className: mB.QW,
                                children: [
                                    (0, E.jsx)(gf._, {
                                        className: mB.Wz,
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
                                        (0, E.jsx)("div", { className: mB.zk }),
                                        (0, E.jsx)(el.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, g3.gb)(t.premiumTier, { useLevels: !1 }),
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
function mX(e) {
    let { guildId: t } = e,
        i = (0, g.bG)([eh.A], () => eh.A.getGuild(t), [t]);
    return null == i
        ? null
        : (0, E.jsxs)("div", {
              className: mB.Nr,
              children: [
                  (0, E.jsx)(mz, { guild: i }),
                  (0, E.jsx)(ek.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: gf._,
                      text: j.intl.string(j.t.aBHecF),
                      onClick: () => {
                          (0, mN.g)({
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
let mH =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function mK(e) {
    let { slot: t, guildTier: i, premiumSubscription: n, hasCancelableSlots: l, isLast: s } = e,
        r = S.useRef(null),
        a = (0, g3.I5)(t),
        o = S.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, gv.A)(),
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
            let e = null != t.premiumGuildSubscription ? dv.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return j.intl.formatToPlainString(j.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        m = S.useMemo(
            () => (a ? (n.isPausedForFractionalPremium ? d.endsAt.toDate() : n.currentPeriodEnd) : null),
            [a, n, d],
        );
    return (0, E.jsxs)("div", {
        className: e7()(mY.iq, { [mY.Mt]: s }),
        children: [
            (0, E.jsxs)("div", {
                className: mY.kd,
                children: [
                    (0, E.jsx)("img", { alt: "", className: mY.bB, src: mH }),
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
                                              (0, E.jsx)("div", { className: mY.zk }),
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
                                              (0, E.jsx)("div", { className: mY.zk }),
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
                    return (0, E.jsx)(g5, {
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
                        className: mY.Mj,
                        ...e,
                        children: (0, E.jsx)(mF.j, { size: "xs", color: er.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                    }),
            }),
        ],
    });
}
function mW(e) {
    let { guildId: t, slots: i, premiumSubscription: n, hasCancelableSlots: l } = e,
        s = (0, g.bG)([eh.A], () => eh.A.getGuild(t), [t]);
    return (0, E.jsxs)("div", {
        className: mY.Nr,
        children: [
            (0, E.jsx)("div", {
                className: mY.MY,
                children:
                    null != s
                        ? (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(mz, { guild: s, className: mY.OA }),
                                  (0, E.jsx)(ek.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: j.intl.string(j.t.KLOhbO),
                                      onClick: () => {
                                          (0, lZ.default)(),
                                              (0, mn.K4)({
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
                    mK,
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
function mZ(e) {
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
                                g4.A.createFromServer(
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
                if ((!(0, g3.I5)(n) && e++, null != n.premiumGuildSubscription)) {
                    let e = n.premiumGuildSubscription.guildId;
                    e in s || (s[e] = []), s[e].push(n);
                }
            }
            return { boostsByGuildId: s, numActiveSlots: e };
        }, [t, l, n, i]);
    if (null == i || 0 === Object.keys(s).length) return null;
    let a = r > uE.Ay.getNumIncludedPremiumGuildSubscriptionSlots(i.planId);
    return (0, E.jsx)("div", {
        className: mY.kR,
        children: dv.default
            .keys(s)
            .map((e) => (0, E.jsx)(mW, { guildId: e, slots: s[e], premiumSubscription: i, hasCancelableSlots: a }, e)),
    });
}
var mq = i(928171);
function mQ(e) {
    let { guildBoostSlots: t, fractionalPremiumState: n } = e,
        l = (0, g.bG)([d0.A], () => d0.A.getPremiumTypeSubscription()),
        { unappliedSlots: s, numActiveSlots: r } = S.useMemo(() => {
            let e = [],
                i = 0;
            for (let n of t) !(0, g3.I5)(n) && i++, null == n.premiumGuildSubscription && e.push(n);
            return { unappliedSlots: e, numActiveSlots: i };
        }, [t]),
        a = r > (null != l ? uE.Ay.getNumIncludedPremiumGuildSubscriptionSlots(l.planId) : 0),
        o = l?.isPausedOrPausePending === !0 && n === l0.xc.NONE;
    return 0 === s.length
        ? null
        : (0, E.jsxs)("div", {
              className: mq.Nr,
              children: [
                  (0, E.jsxs)("div", {
                      className: mq.MY,
                      children: [
                          (0, E.jsxs)("div", {
                              className: mq._L,
                              children: [
                                  (0, E.jsxs)("div", {
                                      className: mq.MD,
                                      children: [
                                          (0, E.jsx)("img", { alt: "", className: mq.F8, src: mH }),
                                          (0, E.jsx)("div", {
                                              className: e7()(mq.qS, "theme-dark"),
                                              children: (0, E.jsx)("span", { className: mq.Vv, children: s.length }),
                                          }),
                                      ],
                                  }),
                                  (0, E.jsxs)("div", {
                                      className: mq.Qp,
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
                          (0, E.jsx)(mp.A, {
                              shouldShow: o,
                              text: j.intl.string(j.t.mOWsF1),
                              "aria-label": j.intl.string(j.t.mOWsF1),
                              children: (e) =>
                                  (0, E.jsx)(ek.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: gf._,
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
                                                              (0, mN.g)({
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
                          mJ,
                          {
                              slot: e,
                              isLast: t === s.length - 1,
                              isCancelable: a && !(0, g3.I5)(e),
                              isCanceled: (0, g3.I5)(e),
                              premiumSubscription: l,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function mJ(e) {
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
              ? (0, E.jsx)(g8, { cooldown: u.getTime() })
              : (0, E.jsx)(el.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: j.intl.string(j.t["2mcafz"]),
                });
    let d = l || s;
    return (0, E.jsxs)("div", {
        className: e7()(mq.iq, { [mq.Mt]: n }),
        children: [
            (0, E.jsxs)("div", {
                className: mq.kd,
                children: [(0, E.jsx)("img", { alt: "", className: mq.bB, src: mH }), t],
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
                                                        (0, E.jsx)(mO.default, { ...e, guildBoostSlot: i }),
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
                                                        (0, E.jsx)(mR.default, { ...e, guildBoostSlotId: i.id }),
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
                            className: mq.Mj,
                            ...e,
                            children: (0, E.jsx)(mF.j, { size: "xs", color: er.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                        }),
                }),
        ],
    });
}
var m$ = i(942053);
function m0(e) {
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
              className: m$.i,
              children: [
                  (0, E.jsxs)("div", {
                      className: m$.b,
                      children: [
                          (0, E.jsx)(eV.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.W5rDjW) }),
                          (0, E.jsx)(el.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: j.intl.format(j.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, E.jsx)(mZ, {
                      guildBoostSlots: i,
                      premiumSubscription: n,
                      pausedAppliedGuildBoosts: l,
                      isPaused: a,
                  }),
                  (0, E.jsx)(mQ, { guildBoostSlots: t, fractionalPremiumState: s }),
              ],
          })
        : null;
}
var m1 = i(917064),
    m2 = i(401721);
function m3() {
    return (0, E.jsxs)("div", {
        className: m2.iE,
        children: [
            (0, E.jsx)(eV.D, { variant: "heading-xl/normal", children: j.intl.string(j.t.IzKs3o) }),
            (0, E.jsx)("div", {
                className: m2.kR,
                children: m1.s.map((e, t) => {
                    let i = e.icon;
                    return (0, E.jsxs)(
                        "div",
                        {
                            className: m2.Nr,
                            children: [
                                (0, E.jsx)(i, { className: m2.Kk }),
                                (0, E.jsx)(el.E, {
                                    className: m2.h_,
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
var m5 = i(232122),
    m4 = i(630579);
function m6() {
    let [e, t] = S.useState(null),
        [i, n] = S.useState(null);
    return (0, E.jsxs)("div", {
        className: m4.iE,
        children: [
            (0, E.jsx)(eV.D, { variant: "heading-xl/normal", children: j.intl.string(j.t.HPJ6Nj) }),
            (0, E.jsx)("ul", {
                className: m4.p_,
                children: m5.m.map((l, s) => {
                    let r = e === s,
                        a = i === s,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, E.jsxs)(
                        en.D,
                        {
                            tag: "li",
                            className: e7()(m4.Aw, { [m4.$K]: r }),
                            onClick: () => t((e) => (e === s ? null : s)),
                            onMouseEnter: () => n(s),
                            onMouseLeave: () => n(null),
                            children: [
                                (0, E.jsxs)("div", {
                                    className: m4.k7,
                                    children: [
                                        (0, E.jsx)(el.E, {
                                            className: m4.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: l.getQuestion(),
                                        }),
                                        (0, E.jsx)(es.a, {
                                            size: "sm",
                                            color: er.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: m4.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, E.jsx)(el.E, {
                                        className: m4.ZF,
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
var m8 = i(182859),
    m7 = i(853513),
    m9 = i(880482);
function Ae() {
    let e = ty.A.getArticleURL(U.MVz.GUILD_SUBSCRIPTIONS);
    return (0, E.jsxs)("div", {
        className: m9.wx,
        children: [
            (0, E.jsxs)("div", {
                className: m9.Qs,
                children: [
                    (0, E.jsxs)("div", {
                        className: m9.B5,
                        children: [
                            (0, E.jsx)("img", { alt: "", className: m9.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, E.jsx)(eV.D, {
                                variant: "heading-xl/normal",
                                children: j.intl.string(m7.default.hjvcLO),
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
            (0, E.jsx)(m8.A, {
                variant: "member",
                className: m9.iO,
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
var At = i(315629),
    Ai = i(524170);
function An() {
    let e = (0, g.bG)([iA.default], () => iA.default.getCurrentUser());
    if (null == e || uE.Ay.hasFreeBoosts(e)) return null;
    let t = ty.A.getArticleURL(U.MVz.GUILD_BOOSTING_FAQ);
    return (0, E.jsxs)(At.h, {
        color: "nitro-pink",
        className: Ai.vK,
        children: [
            (0, E.jsxs)("div", {
                className: Ai.nw,
                children: [
                    (0, E.jsx)("img", { alt: "", className: Ai.q3, src: mH }),
                    (0, E.jsxs)("div", {
                        className: Ai.Tm,
                        children: [
                            (0, E.jsx)(el.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: j.intl.format(j.t.Idh1Vs, { count: l0.M4, boostCount: l0.M4 }),
                            }),
                            (0, E.jsxs)("div", {
                                className: Ai.xv,
                                children: [
                                    (0, E.jsx)(ua.t, { className: Ai.nE }),
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
                icon: ua.t,
                text: j.intl.string(j.t["8x0jKT"]),
                onClick: mL.e,
            }),
        ],
    });
}
var Al = i(738262);
function As() {
    let e = (0, g.bG)([gQ.A], () => gQ.A.affinities),
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
              className: Al.i,
              children: [
                  (0, E.jsx)(eV.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.r90Wgo) }),
                  (0, E.jsx)("div", { className: Al.k, children: i.map((e) => (0, E.jsx)(mX, { guildId: e }, e)) }),
              ],
          });
}
var Ar = i(553429);
function Aa(e) {
    let { count: t, disabledReason: n } = e,
        l = ty.A.getArticleURL(U.MVz.GUILD_BOOSTING_FAQ);
    return (0, E.jsxs)(At.h, {
        color: "nitro-pink",
        className: Ar.vK,
        children: [
            (0, E.jsxs)("div", {
                className: Ar.nw,
                children: [
                    (0, E.jsxs)("div", {
                        className: Ar.MD,
                        children: [
                            (0, E.jsx)("img", { alt: "", className: Ar.F8, src: mH }),
                            (0, E.jsx)("div", {
                                className: e7()(Ar.qS, "theme-dark"),
                                children: (0, E.jsx)("span", { className: Ar.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, E.jsxs)("div", {
                        className: Ar.Tm,
                        children: [
                            (0, E.jsx)(el.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: j.intl.format(j.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, E.jsxs)("div", {
                                className: Ar.xv,
                                children: [
                                    (0, E.jsx)(ua.t, { className: Ar.nE }),
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
            (0, E.jsx)(mp.A, {
                shouldShow: null != n,
                text: n ?? "",
                "aria-label": n,
                children: (e) =>
                    (0, E.jsx)(ek.$, {
                        ...e,
                        variant: "primary",
                        size: "sm",
                        icon: gf._,
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
                                                (0, mN.g)({
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
function Ao(e) {
    let { premiumSubscription: t } = e,
        i = (0, g.bG)([gJ.A], () => gJ.A.boostSlots),
        n = S.useMemo(() => Object.values(i), [i]),
        l = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()),
        s = (0, g.bG)([gQ.A], () => gQ.A.affinities),
        r = (0, g.bG)([eE.Ay], () => eE.Ay.getFlattenedGuildIds()),
        a = s.length > 0 || r.length > 0,
        o = S.useMemo(() => n.filter((e) => null != e.premiumGuildSubscription), [n]).length,
        u = (0, g.bG)([gb.A], () => gb.A.getCurrentUserAppliedBoosts()),
        { fractionalState: d } = (0, gv.A)({ forceFetch: !0 }),
        c = l?.isPremiumGroupMember(),
        m = t?.isPausedOrPausePending === !0 && d === l0.xc.NONE,
        A = S.useMemo(() => n.some((e) => null == e.premiumGuildSubscription && e.isAvailable()), [n]),
        h = m ? j.intl.string(j.t.mOWsF1) : A ? void 0 : j.intl.string(j.t.xr4m5B),
        T = S.useMemo(() => {
            if (null == t) return 0;
            let e = uE.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== n.length ? 0 : Math.max(0, e - o);
        }, [t, n.length, o]);
    return (0, E.jsxs)("div", {
        className: mV.GO,
        children: [
            (0, E.jsx)(d8.kb, { className: mV.ek }),
            (0, E.jsx)(Ae, {}),
            (0, E.jsx)(An, {}),
            T > 0 && (0, E.jsx)(Aa, { count: T, disabledReason: h }),
            c && (0, E.jsx)(gq.A, {}),
            !a && (0, E.jsx)(mx, {}),
            (0, E.jsxs)("div", {
                className: mV.C_,
                children: [
                    (0, E.jsx)(m0, {
                        guildBoostSlots: n,
                        guildBoostSlotsByGuildId: i,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: u,
                        fractionalPremiumState: d,
                    }),
                    (0, E.jsx)(As, {}),
                    (0, E.jsx)(mw.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, E.jsx)(m3, {}),
                    (0, E.jsx)(m6, {}),
                ],
            }),
        ],
    });
}
var Au = i(672140);
let Ad = (0, a.E2)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            let e = gC.useConfig({ location: "UserSettingsPremiumGuildSubscriptions" }).enabled;
            S.useEffect(() => {
                lm.h.wait(() => {
                    df.hP(), df.$o(), (0, gN.CD)(), (0, g_.zS)(null, null, U.tF5.DISCOVERY), (0, gN.tO)(!0);
                });
            }, []);
            let { hasFetchedSubscriptions: t, premiumSubscription: i } = (0, g.cf)([d0.A], () => ({
                    hasFetchedSubscriptions: d0.A.hasFetchedSubscriptions(),
                    premiumSubscription: d0.A.getPremiumTypeSubscription(),
                })),
                n = (0, gI.Y)(),
                l = (0, g.bG)([d$.A], () => d$.A.hasFetchedPaymentSources),
                s = (0, g.bG)([gb.A], () => gb.A.isFetchingCurrentUserAppliedBoosts),
                r = !t || !n || !l || s,
                [a, o] = S.useState(!1);
            return (r || a || o(!0), r && !a)
                ? (0, E.jsx)("div", { className: e7()(Au.kL, Au.Lq), children: (0, E.jsx)(dh.y, {}) })
                : (0, E.jsxs)("div", {
                      className: Au.kL,
                      children: [
                          (0, E.jsx)("div", { className: Au.Tp }),
                          (0, E.jsx)("div", {
                              className: Au.Qs,
                              children: e
                                  ? (0, E.jsx)(Ao, { premiumSubscription: i })
                                  : (0, E.jsx)(mk, { premiumSubscription: i }),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t["+CbP2v"]), j.intl.string(j.t.Nn1lJy)],
    }),
    Ac = (0, a.zZ)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [Ad] }),
    Ag = (0, a.t_)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => j.intl.string(j.t["+CbP2v"]),
        buildLayout: () => [Ac],
    }),
    Am = (0, a.i4)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["+CbP2v"]),
        icon: gf._,
        buildLayout: () => [Ag],
    });
var AA = i(153659),
    Ah = i(155984),
    AE = i(357758),
    AS = i(262077),
    AT = i(281445),
    Ax = i(624479),
    Ap = i(626584),
    Af = i(95035),
    AN = i(196736),
    A_ = i(685743),
    AI = i(349085),
    AC = i(342942),
    Ab = i(252589),
    Av = i(758836),
    Ay = i(275695),
    Aj = i(356061);
let AO = new Ap.A("GameServerSubscriptionsSection");
function AR(e) {
    return e.toLocaleDateString(void 0, { year: "numeric", month: "numeric", day: "numeric" });
}
function AL(e, t) {
    return (
        e.priceLabel === t.priceLabel &&
        e.dateLabel === t.dateLabel &&
        e.isCanceled === t.isCanceled &&
        e.isDanger === t.isDanger
    );
}
let AD = S.memo(function (e) {
    let { server: t, planOptionBySkuId: i, canUseShopDiscount: n } = e,
        { analyticsLocations: l } = (0, n1.Ay)(),
        s = t.instance.subscriptionId,
        r = t.instance.planId,
        a = (0, AI.A)(t.gameId, "cover") ?? t.coverUrl;
    S.useEffect(() => {
        (0, g_.ur)(r).catch(() => {});
    }, [r]);
    let [o, u] = (0, eB.kn)([eF.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        d = o !== eF.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        c = ck.default.getId() ?? "0",
        { handleCopyServerIp: m, animateCopyIcon: A } = (0, A_.A)(c, t.id, e4.A.GAME_SERVER_PAGE, t.serverIp),
        h = S.useCallback(() => {
            (0, AC.A)({
                provider: AT.X.SHOCKBYTE,
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
            [d0.A, cF.A],
            () => {
                let e = null != s ? d0.A.getSubscriptionById(s) : null;
                if (null == e) return { priceLabel: null, dateLabel: null, isCanceled: !1, isDanger: !1 };
                let t = null != e.canceledAt,
                    l = !t && null != e.renewalMutations,
                    r = l ? e.renewalMutations?.items[0]?.planId : e.items[0]?.planId,
                    a = null != r ? cF.A.get(r) : null,
                    o = null != a ? i.get(a.skuId) : null,
                    u = n && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                    d =
                        null != u && o?.priceCurrency != null
                            ? j.intl.formatToPlainString(j.t.AbOLNu, { price: (0, dC.$g)(u, o.priceCurrency) })
                            : null,
                    c = AR(e.currentPeriodEnd);
                return {
                    priceLabel: d,
                    dateLabel: t
                        ? j.intl.formatToPlainString(Ay.default["3aEgK6"], { date: c })
                        : l
                          ? j.intl.formatToPlainString(Ay.default.KFSA3M, { date: c })
                          : j.intl.formatToPlainString(Ay.default["9A6cRW"], { date: c }),
                    isCanceled: t,
                    isDanger: t || l,
                };
            },
            [s, i, n],
            AL,
        ),
        N = S.useCallback(() => {
            if (null == s) return;
            let e = d0.A.getSubscriptionById(s),
                t = null != e ? AR(e.currentPeriodEnd) : "";
            (0, s3.A)({
                title: j.intl.string(Ay.default.TEYPNR),
                subtitle: j.intl.formatToPlainString(Ay.default.XR1WrB, { date: t }),
                confirmText: j.intl.string(j.t["cY+Oob"]),
                cancelText: j.intl.string(Ay.default.zjfaGH),
                variant: "critical",
                onConfirm: async () => {
                    try {
                        await df.M2(s, l), await df.hP();
                    } catch (e) {
                        AO.error("Failed to cancel game server subscription", e);
                    }
                },
            });
        }, [s, l]),
        _ = S.useCallback(() => {
            if (null == s) return;
            let e = d0.A.getSubscriptionById(s);
            if (null == e) return;
            let t = e.items[0]?.planId,
                a = null != t ? cF.A.get(t) : null,
                o = null != a ? i.get(a.skuId) : null,
                u = n && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                d = null != u && o?.priceCurrency != null ? (0, dC.$g)(u, o.priceCurrency) : "",
                c = AR(e.currentPeriodEnd);
            (0, s3.A)({
                title: j.intl.string(Ay.default.o96qbc),
                subtitle: j.intl.formatToPlainString(Ay.default["7n6Qq+"], { price: d, date: c }),
                confirmText: j.intl.string(j.t.iIvF2z),
                cancelText: j.intl.string(j.t["ETE/oC"]),
                variant: "primary",
                onConfirm: async () => {
                    try {
                        await (0, g_.ur)(r);
                        let t = e.items;
                        await df.nV(
                            e,
                            { status: U.Dmq.ACTIVE, items: t, currency: e.currency },
                            { amount: 0, currency: e.currency },
                            (0, uE.UC)(t, e.currency),
                            l,
                        ),
                            await df.hP();
                    } catch (e) {
                        AO.error("Failed to re-subscribe to game server subscription", e);
                    }
                },
            });
        }, [s, r, l, i, n]),
        I = "" !== t.serverIp && ":" !== t.serverIp;
    return (0, E.jsxs)("div", {
        className: Aj.nM,
        children: [
            (0, E.jsxs)("div", {
                className: Aj.M4,
                children: [
                    (0, E.jsxs)("div", {
                        className: Aj.Vs,
                        "aria-hidden": !0,
                        children: [
                            null != a && (0, E.jsx)("img", { className: Aj.uP, src: a, alt: "" }),
                            (0, E.jsx)("div", { className: Aj.tw }),
                        ],
                    }),
                    (0, E.jsxs)("div", {
                        className: Aj.CR,
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
                                          className: Aj.CQ,
                                          children: [
                                              (0, E.jsx)(el.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  lineClamp: 1,
                                                  children: t.serverIp,
                                              }),
                                              (0, E.jsx)(en.D, {
                                                  className: Aj.cL,
                                                  onClick: m,
                                                  "aria-label": j.intl.string(j.t.OpuAlK),
                                                  children: A
                                                      ? (0, E.jsx)(gw.A, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        })
                                                      : (0, E.jsx)(Ax.T, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        }),
                                              }),
                                          ],
                                      })
                                    : (0, E.jsx)(Af.A, { onClick: h, children: j.intl.string(Ay.default["f+F7H3"]) })),
                        ],
                    }),
                ],
            }),
            (0, E.jsxs)("div", {
                className: Aj.Rd,
                children: [
                    (0, E.jsxs)("div", {
                        className: Aj.Ff,
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
                                          className: Aj.ez,
                                          children: [
                                              (0, E.jsx)(rw.E, { size: "xs", color: "text-feedback-critical" }),
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
function AP(e) {
    let { servers: t } = e,
        i = (0, AN.H)({ location: "user_settings_subscriptions" }),
        { games: n } = (0, Ab.Y)(),
        l = (0, g.bG)([iA.default], () => uE.Ay.canUseShopDiscounts(iA.default.getCurrentUser())),
        s = S.useMemo(() => {
            let e = new Map();
            for (let t of n) for (let i of t.plans ?? []) e.set(i.id, i);
            return e;
        }, [n]);
    S.useEffect(() => {
        let e = [...s.keys()];
        e.length > 0 && (0, g_.jv)(e).catch(() => {});
    }, [s]);
    let r = S.useCallback(() => {
        (0, lZ.default)(), (0, l7.pX)(U.BVt.COLLECTIBLES_SHOP_WITH_TAB(Av.G2.GAME_SERVERS));
    }, []);
    return (0, E.jsxs)("div", {
        className: Aj.uW,
        children: [
            (0, E.jsxs)("div", {
                className: Aj.wx,
                children: [
                    (0, E.jsx)(el.E, {
                        variant: "text-lg/medium",
                        color: "text-strong",
                        children: j.intl.string(Ay.default.vCzwM7),
                    }),
                    (0, E.jsxs)("div", {
                        className: Aj.h_,
                        children: [
                            (0, E.jsx)(el.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                tag: "span",
                                children: j.intl.string(Ay.default.y85Eg9),
                            }),
                            i &&
                                (0, E.jsx)(Af.A, {
                                    onClick: r,
                                    children: (0, E.jsx)(el.E, {
                                        variant: "text-sm/normal",
                                        color: "text-link",
                                        tag: "span",
                                        children: j.intl.string(Ay.default["F/BDbC"]),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)("div", {
                className: Aj.p_,
                children: t.map((e) =>
                    (0, E.jsx)(AD, { server: e, planOptionBySkuId: s, canUseShopDiscount: l }, e.id),
                ),
            }),
        ],
    });
}
var AG = i(55766),
    AM = i(696986),
    AU = i(898555);
function AV(e) {
    let { onClickManageSubscription: t, count: i } = e;
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsx)(eV.D, { variant: "heading-md/bold", children: j.intl.string(j.t["KzCF/6"]) }),
            (0, E.jsx)(AM.h, { size: 4 }),
            (0, E.jsx)(el.E, { variant: "text-md/normal", className: AU.yV, children: j.intl.string(j.t["3D7qCu"]) }),
            (0, E.jsx)(AM.h, { size: 24 }),
            (0, E.jsxs)("div", {
                className: AU.Nr,
                children: [
                    (0, E.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: AU.RI }),
                    (0, E.jsxs)("div", {
                        className: AU.FS,
                        children: [
                            (0, E.jsx)(eV.D, {
                                variant: "heading-xl/semibold",
                                className: AU.wx,
                                children: j.intl.string(j.t["KzCF/6"]),
                            }),
                            (0, E.jsx)(el.E, {
                                variant: "text-md/normal",
                                className: AU.h_,
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
var Ak = i(872351),
    Aw = i(9113),
    AF = i(599941),
    AB = i(384684),
    Az = i(2242);
let AX = [];
var AY = i(885574),
    AH = i(912851),
    AK = i(497267);
let AW = function (e) {
    let { label: t, onClick: i, submitting: n } = e;
    return (0, E.jsx)(en.D, {
        onClick: n ? void 0 : i,
        className: AK.x6,
        children: (0, E.jsxs)("div", {
            className: AK.hQ,
            children: [
                n
                    ? (0, E.jsx)(dh.y, { type: dh.y.Type.PULSING_ELLIPSIS, className: AK.__invalid_spinner })
                    : (0, E.jsx)(el.E, { variant: "text-md/medium", className: AK.Pf, children: t }),
                (0, E.jsx)(es.a, { size: "md", color: "currentColor", className: AK.UE }),
            ],
        }),
    });
};
var AZ = i(465932),
    Aq = i(543767),
    AQ = i(951555),
    AJ = i(790284),
    A$ = i(636194),
    A0 = i(624456),
    A1 = i(710144),
    A2 = i(815332),
    A3 = i(162093),
    A5 = i(960309);
function A4(e) {
    let { transitionState: t, groupListing: i, listing: n, subscription: l, onClose: s } = e,
        r = (0, lJ.GV)(),
        { analyticsLocations: a } = (0, n1.Ay)(e4.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
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
                        return i(!0), await df.M2(t, e), !0;
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
    let g = n.role_benefits.benefits.filter((e) => e.ref_type === Az.bN.CHANNEL),
        m = n.role_benefits.benefits.filter((e) => e.ref_type === Az.bN.INTANGIBLE),
        A = rr()(l.currentPeriodEnd).format("MMMM Do, YYYY"),
        h = j.intl.formatToPlainString(j.t.KsMRP5, {
            numChannels: g.length,
            numAdditionalBenefits: m.length,
            subscriptionEndDate: A,
        });
    return (0, E.jsx)(rq.Modal, {
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
                (0, E.jsx)(A3.x, { listingId: n.id, guildId: i.guild_id, className: A5.P }),
            ],
        }),
    });
}
var A6 = i(319225),
    A8 = i(746080),
    A7 = i(74669);
function A9(e) {
    let { label: t, value: i, showInfoIcon: n, infoIconTooltipText: l } = e;
    return (0, E.jsxs)("div", {
        className: A7.L0,
        children: [
            (0, E.jsxs)("div", {
                className: A7.a5,
                children: [
                    (0, E.jsx)(eV.D, { variant: "heading-deprecated-12/semibold", className: A7.HU, children: t }),
                    n &&
                        (0, E.jsx)(td.m, {
                            text: l,
                            children: (0, E.jsx)(AY.m, { size: "xs", color: "currentColor", className: A7.Mo }),
                        }),
                ],
            }),
            (0, E.jsx)(eV.D, { variant: "heading-xl/semibold", className: A7.sx, children: i }),
        ],
    });
}
function he(e) {
    let { subscription: t } = e,
        { analyticsLocations: i } = (0, n1.Ay)(),
        [n] = (0, Aq.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: i,
            analyticsLocation: e4.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        l = (0, g.bG)([d$.A], () => d$.A.hasFetchedPaymentSources);
    return null != n && l ? (0, E.jsx)(AQ.A, { subscription: t, currentInvoicePreview: n }) : (0, E.jsx)(dh.y, {});
}
function ht(e) {
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
                  className: A7.__invalid_rowButtons,
                  children: i
                      ? (0, E.jsx)(ek.$, {
                            variant: "primary",
                            text: j.intl.string(j.t.y3mAE4),
                            onClick: r,
                            loading: n,
                        })
                      : (0, E.jsxs)(E.Fragment, {
                            children: [
                                !t && !l && (0, E.jsx)(AW, { label: j.intl.string(j.t.FRbWR8), onClick: a }),
                                (0, E.jsx)(AW, { label: j.intl.string(j.t.Dx0lF7), onClick: s }),
                            ],
                        }),
              }),
          });
}
let hi = function (e) {
    let { subscription: t } = e,
        {
            listing: i,
            groupListing: n,
            guild: l,
            expanded: s,
            handleToggleExpanded: r,
            subscriptionInfo: a,
        } = (function (e) {
            let t = (0, A0.M)(e),
                i = (0, g.bG)([A$.A], () => A$.A.getSubscriptionListingForPlan(t)),
                n = (0, g.bG)([A$.A], () =>
                    null != i ? A$.A.getSubscriptionGroupListingForSubscriptionListing(i.id) : null,
                ),
                l = (0, g.bG)([eh.A], () => eh.A.getGuild(n?.guild_id)),
                [s, r] = S.useState(!1),
                { fetchSubscriptionsSettings: a } = (0, AF.XE)();
            S.useEffect(() => {
                s && null != l && null == A$.A.getSubscriptionSettings(l.id) && a(l.id);
            }, [s, l, a]);
            let o =
                null == i
                    ? void 0
                    : (function (e) {
                          let { subscription: t } = e,
                              i = rr()(t.currentPeriodEnd).format("M/D/YY"),
                              n = null != t.price ? (0, dC.$g)(t.price, t.currency) : "",
                              l = rr()(t.createdAt).format("M/D/YY"),
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
        { shouldHideGuildPurchaseEntryPoints: A } = (0, AZ.MH)(l?.id),
        h = t?.isPurchasedViaAppleGeneric;
    if (null == n || null == i || null == a) return null;
    async function T() {
        try {
            d(!0), await df.QP(t, m), (0, A6.E)({ title: j.intl.string(j.t.oPV2cy), body: j.intl.string(j.t.DdRizV) });
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
        className: A7.kL,
        children: [
            (0, E.jsx)(A1.A, {
                onClick: r,
                className: A7.N1,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: n } = e;
                    return (0, E.jsxs)(E.Fragment, {
                        children: [
                            null != l && (0, E.jsx)(mi.Ay, { guild: l, active: !0, size: mi.Ay.Sizes.MEDIUM }),
                            (0, E.jsxs)("div", {
                                className: A7.if,
                                children: [
                                    (0, E.jsx)(el.E, {
                                        variant: "text-md/medium",
                                        className: A7.J5,
                                        children: null != l ? l.name : j.intl.string(j.t["He+cmd"]),
                                    }),
                                    (0, E.jsxs)("div", {
                                        className: A7.xp,
                                        children: [
                                            (0, E.jsx)(el.E, {
                                                variant: "text-sm/normal",
                                                className: A7.KR,
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
                                                                  className: A7.qc,
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
                                    className: e7()(A7.D6, { [A7.S7]: s }),
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
                          (0, E.jsx)("div", { className: A7.yF }),
                          (0, E.jsx)(A2.A, { groupListingId: n.id, subscription: t, className: A7.kE }),
                          (0, E.jsxs)("div", {
                              className: A7.Zx,
                              children: [
                                  (0, E.jsx)(A9, { label: I, value: _ }),
                                  (0, E.jsx)(A9, {
                                      label: j.intl.string(j.t.dltUMH),
                                      value: f,
                                      showInfoIcon: C,
                                      infoIconTooltipText: C ? j.intl.string(j.t["/q6fpa"]) : void 0,
                                  }),
                                  (0, E.jsx)(A9, { label: j.intl.string(j.t.AOcwWB), value: N }),
                              ],
                          }),
                          (0, E.jsx)(AM.h, { size: 16 }),
                          !x &&
                              !h &&
                              (0, E.jsx)(l8.D, {
                                  label: j.intl.string(j.t.wmMFvA),
                                  children: (0, E.jsx)(he, { subscription: t }),
                              }),
                          !b &&
                              (0, E.jsx)(ht, {
                                  isTrial: C,
                                  isCancelled: x,
                                  isResubscribing: o,
                                  shouldHideRoleSubscriptionEntryPoints: A,
                                  onCancelSubscriptionClick: function () {
                                      if (null != l && null != n && null != i) {
                                          var e;
                                          (e = { groupListing: n, listing: i, subscription: t }),
                                              (0, K.openModal)((t) => (0, E.jsx)(A4, { ...t, ...e }));
                                      }
                                  },
                                  onChangePlanClick: function () {
                                      null != l &&
                                          ((0, l7.pX)(U.BVt.CHANNEL(l.id, A8.VV.ROLE_SUBSCRIPTIONS)),
                                          (0, lZ.default)(),
                                          AH.A.show(
                                              U.kqX.BACK_TO_PREVIOUS_SCREEN,
                                              void 0,
                                              j.intl.string(j.t.DvbaM4),
                                              () => {
                                                  AJ.A.setState({ subsection: nH.nR }),
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
var hn = i(175880);
let hl = function (e) {
    let { onGoBack: t } = e,
        i = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, g.bG)([AB.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [AB.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                i = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (i = !0);
                            }),
                            i)
                                ? Az.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? Az.M_.NONE
                                  : Az.M_.IN_SUBSCRIPTION_SERVER;
                        })([AB.A]),
                    ) === Az.M_.SUBSCRIBED,
                i = (0, g.bG)([d0.A], () => d0.A.getActiveGuildSubscriptions()),
                n = S.useRef(!1);
            return (
                S.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: i, hasRoleSubscriptions: n } = e,
                            l = d0.A.getActiveGuildSubscriptions();
                        return (
                            ((l?.length ?? 0) === 0 && !!n) || (!!t && !i) || (!i && !d0.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: n.current }) &&
                        ((n.current = !0), df.hP());
                }, [e, t]),
                i ?? AX
            );
        })(),
        { loading: n } = (0, AF.eb)(i);
    return ((0, Aw.A)(dy.Fr ? "role-subscriptions-user-setting" : void 0), n)
        ? (0, E.jsx)(dh.y, {})
        : 0 === i.length
          ? null
          : (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(ek.$, { text: j.intl.string(j.t.hqyhKQ), icon: Ak.z, variant: "secondary", onClick: t }),
                    (0, E.jsx)(AM.h, { size: 10 }),
                    (0, E.jsx)(ij.n, {
                        label: j.intl.string(j.t["KzCF/6"]),
                        description: j.intl.string(j.t["Y+ucR7"]),
                        children: (0, E.jsx)("div", {
                            className: hn.A,
                            children: i.map((e) => (0, E.jsx)(hi, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var hs = i(327479),
    hr = i(388567);
function ha(e) {
    let { onClickManageSubscription: t, count: i } = e;
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsx)(eV.D, { variant: "heading-md/bold", children: j.intl.string(j.t["48ywCu"]) }),
            (0, E.jsx)(AM.h, { size: 4 }),
            (0, E.jsx)(el.E, { variant: "text-md/normal", className: hr.yV, children: j.intl.string(j.t.VWxmSo) }),
            (0, E.jsx)(AM.h, { size: 24 }),
            (0, E.jsxs)("div", {
                className: hr.Nr,
                children: [
                    (0, E.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: hr._e }),
                    (0, E.jsxs)("div", {
                        className: hr.FS,
                        children: [
                            (0, E.jsx)(eV.D, {
                                variant: "heading-xl/semibold",
                                className: hr.wx,
                                children: j.intl.string(j.t["48ywCu"]),
                            }),
                            (0, E.jsx)(el.E, {
                                variant: "text-md/normal",
                                className: hr.h_,
                                children: j.intl.format(j.t["/esXLj"], { numSubscriptions: i }),
                            }),
                        ],
                    }),
                    (0, E.jsx)(hs.A, { onClick: t, text: j.intl.string(j.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var ho = i(548411),
    hu = i(417098),
    hd = i(143582),
    hc = i(915043),
    hg = i(46367);
function hm(e) {
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
        className: e7()(hg.iE, t),
        children: [
            (0, E.jsx)("div", { className: e7()(hg.wx, n), children: i }),
            s && (0, E.jsx)("div", { className: hg.Qs, children: l }),
        ],
    });
}
var hA = i(885996),
    hh = i(144165),
    hE = i(664121),
    hS = i(950305),
    hT = i(943775),
    hx = i(123791),
    hp = i(900797),
    hf = i(300118);
let hN = S.createContext({ isOpen: !1, toggleOpen: () => {} });
function h_(e) {
    let { children: t } = e,
        [i, n] = S.useReducer((e) => !e, !1),
        l = S.useMemo(() => ({ isOpen: i, toggleOpen: n }), [i]);
    return (0, E.jsx)(hN.Provider, { value: l, children: t(i) });
}
h_.Toggle = function (e) {
    let { className: t, text: i } = e,
        { isOpen: n, toggleOpen: l } = S.useContext(hN),
        s = n ? hp.t : es.a,
        r = null != i ? i : n ? j.intl.string(j.t.fgq1gs) : j.intl.string(j.t.XJuakA);
    return (0, E.jsxs)(en.D, {
        className: e7()(hf.L, t),
        onClick: l,
        children: [
            (0, E.jsx)(el.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, E.jsx)(s, { size: "sm", color: "currentColor" }),
        ],
    });
};
var hI = i(243217),
    hC = i(328968),
    hb = i(163437),
    hv = i(3432);
function hy(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var hj = i(583995),
    hO = (((l = {})[(l.LOADING = 0)] = "LOADING"), (l[(l.DONE = 1)] = "DONE"), (l[(l.ERROR = 2)] = "ERROR"), l);
function hR(e) {
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
        } = (0, g.cf)([cF.A, cB.A, hC.A, eh.A], () => {
            let e,
                i = cF.A.get(r),
                n = null != i ? cB.A.get(i.skuId) : void 0,
                a = n?.applicationId,
                o = null != i ? hC.A.getForSKU(i.skuId) : null,
                u = null != o && (0, hb.PJ)(o.skuFlags),
                d = u && null != l ? eh.A.getGuild(l) : void 0,
                c = (0, hb.Uo)(t, n),
                g = u && null != l && null == d;
            if (!1 === c && null != s && s.items.length > 0) {
                let t = s.items[0];
                e = cF.A.get(t.planId) ?? void 0;
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
        f = S.useMemo(() => (null != p ? (0, hT.A)(p, 100) : null), [p]),
        N = m?.deleted ?? !1,
        _ = null != m && (0, hb.Se)(m),
        I = t.status === U.Dmq.PAST_DUE,
        { analyticsLocations: C } = (0, n1.Ay)(),
        [b] = (0, Aq.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: C,
            analyticsLocation: e4.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        v = hy(t.currentPeriodEnd),
        y = 0 === n;
    return (0, E.jsxs)(hm, {
        headerClassName: hj.dL,
        header:
            !1 === y
                ? (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsxs)("div", {
                              className: hj.VW,
                              children: [
                                  null != f &&
                                      (0, E.jsx)(hh._, { src: f.href, imageClassName: hj.Z2, width: 40, height: 40 }),
                                  (0, E.jsxs)("div", {
                                      className: hj.aF,
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
                              className: hj.Pz,
                              children:
                                  null != p &&
                                  null != u &&
                                  null != m &&
                                  (0, E.jsx)(hM, {
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
                : (0, E.jsx)(dh.y, { type: dh.t.PULSING_ELLIPSIS }),
        children: [
            A &&
                (0, E.jsx)(hG, {
                    type: "warning",
                    title: _
                        ? j.intl.formatToPlainString(j.t.QOnM1y, { subscriptionPeriodEnd: v })
                        : j.intl.formatToPlainString(j.t.HOaZu8, { subscriptionPeriodEnd: v }),
                }),
            !A && h && (0, E.jsx)(hG, { type: "warning", title: j.intl.string(j.t.SmSP8Q) }),
            I && (0, E.jsx)(hG, { type: "danger", title: j.intl.string(j.t.fvOqBo) }),
            (0, E.jsxs)("div", {
                className: hj.zH,
                children: [
                    (0, E.jsx)(hP, {
                        title: j.intl.string(j.t["5D/KEH"]),
                        content: d
                            ? (0, E.jsxs)(E.Fragment, {
                                  children: [
                                      (0, E.jsxs)("span", {
                                          className: hj.yW,
                                          children: [(0, E.jsx)(hE.R, { size: "xs" }), j.intl.string(j.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, E.jsxs)("span", {
                                              className: hj._t,
                                              children: [
                                                  (0, E.jsx)(el.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: j.intl.format(j.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, E.jsx)(mi.Ay, { guild: c, size: mi.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, E.jsxs)("span", {
                                  className: hj.yW,
                                  children: [(0, E.jsx)(hS.n, { size: "xs" }), j.intl.string(j.t["6anEVv"])],
                              }),
                    }),
                    (0, E.jsx)(hL, { invoicePreview: b, subscriptionPlan: o }),
                    (0, E.jsx)(hP, {
                        title: j.intl.string(j.t.dnUzb6),
                        content: hy(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, E.jsx)(hD, { isCancelled: A, subscriptionPeriodEnd: v, renewalPlan: x }),
                ],
            }),
            (0, E.jsx)(hV, {
                subscription: t,
                currentInvoicePreview: b,
                loadingState: n,
                isDeleted: N,
                isCancelled: A,
            }),
            null != p &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, E.jsx)(hU, { appId: p.id, listingBenefits: u.benefits }),
        ],
    });
}
function hL(e) {
    let { subscriptionPlan: t, invoicePreview: i } = e;
    if (null == t) return (0, E.jsx)(hP, { title: j.intl.string(j.t.KI7ERx), content: "" });
    let n = (0, dC.CE)((0, dC.$g)(t.price, t.currency), t.interval, t.intervalCount),
        l = i?.findInvoiceItemByPlanId(t.id);
    if (null == l) return (0, E.jsx)(hP, { title: j.intl.string(j.t.KI7ERx), content: n });
    let s = (0, dC.CE)((0, dC.$g)(l.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, E.jsx)(hP, {
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
function hD(e) {
    let { isCancelled: t, subscriptionPeriodEnd: i, renewalPlan: n } = e;
    if (null != n) {
        let e = (0, dC.CE)((0, dC.$g)(n.price, n.currency), n.interval, n.intervalCount);
        return (0, E.jsx)(hP, {
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
    return (0, E.jsx)(hP, { title: t ? j.intl.string(j.t.enxcAl) : j.intl.string(j.t["Ms+6Zq"]), content: i });
}
function hP(e) {
    let { title: t, content: i } = e;
    return (0, E.jsxs)("div", {
        className: hj.nM,
        children: [
            (0, E.jsx)(el.E, { variant: "text-sm/medium", children: t }),
            (0, E.jsx)(el.E, { variant: "text-sm/medium", className: hj.u4, children: i }),
        ],
    });
}
function hG(e) {
    let { type: t, title: i } = e;
    return (0, E.jsx)(tv.p, {
        messageType: "warning" === t ? tv.Y.WARNING : tv.Y.ERROR,
        className: hj.Xm,
        children: (0, E.jsx)(el.E, { variant: "text-sm/normal", children: i }),
    });
}
function hM(e) {
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
        c = (0, hb.Se)(l),
        { analyticsLocations: m } = (0, n1.Ay)(),
        [A, h] = S.useState(!1),
        T = (0, hx.C)(t.id),
        x = (0, g.bG)([cB.A], () => cB.A.getParentSKU(n.skuId), [n.skuId]),
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
            let { subscription: e } = await (0, df.QP)(s, m);
            if (null == e) return;
            (0, K.openModalLazy)(async () => {
                let { default: t } = await Promise.all([i.e("76229"), i.e("52396")]).then(i.bind(i, 115623));
                return (i) => (0, E.jsx)(t, { ...i, storeListing: n, subscription: hI.A.createFromServer(e) });
            });
        } finally {
            h(!1);
        }
    }
    return (0, E.jsxs)("div", {
        className: hj.fw,
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
function hU(e) {
    let { appId: t, listingBenefits: i } = e;
    return (0, E.jsx)(h_, {
        children: (e) =>
            (0, E.jsxs)("div", {
                className: hj.PX,
                children: [
                    (0, E.jsxs)("div", {
                        className: hj.wV,
                        children: [
                            e && (0, E.jsx)(el.E, { variant: "text-sm/semibold", children: j.intl.string(j.t.mORL67) }),
                            (0, E.jsx)(h_.Toggle, {
                                className: hj.Bh,
                                text: e ? j.intl.string(j.t.gsbFAw) : j.intl.string(j.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? i.map((e) => {
                              let { id: i, name: n, description: l, icon: s } = e;
                              return (0, E.jsx)(hA.FY, { header: n, icon: (0, hv.N)(t, s), description: l }, i);
                          })
                        : null,
                ],
            }),
    });
}
function hV(e) {
    let { subscription: t, currentInvoicePreview: i, loadingState: n, isDeleted: l, isCancelled: s } = e;
    return null == i
        ? null
        : 0 === n
          ? (0, E.jsx)("div", {
                className: hj.Ji,
                children: (0, E.jsx)(l8.D, {
                    label: j.intl.string(j.t.azZaZa),
                    children: (0, E.jsx)(dh.y, { type: dh.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === n
            ? (0, E.jsx)("div", {
                  className: hj.Ji,
                  children: (0, E.jsxs)(hu.$T, {
                      color: hu.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          j.intl.format(j.t.IIHUUF, { subscriptionId: t.id }),
                          (0, E.jsx)("br", {}),
                          j.intl.format(j.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, E.jsx)("div", {
                  className: hj.Ji,
                  children: (0, E.jsx)(l8.D, {
                      label: j.intl.string(j.t.azZaZa),
                      children: (0, E.jsx)(AQ.A, { subscription: t, currentInvoicePreview: i, disabled: l || s }),
                  }),
              });
}
var hk = (((s = {}).HOME = "HOME"), (s.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), s);
i(938796);
var hw = i(38405);
let hF = (0, g.UT)(cF.A, {
    getQueryId: U.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = cF.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && hw.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, g_.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var hB = i(240248),
    hz = i(237218),
    hX = i(242653);
function hY(e) {
    let { children: t, lineClamp: i = 2, ...n } = e,
        [l, s] = S.useState(!1),
        [r, a] = S.useState(null),
        o =
            null != r &&
            (0, E.jsx)("button", {
                className: hX.x6,
                onClick: () => s((e) => !e),
                children: (0, E.jsxs)(el.E, {
                    className: hX.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        l ? j.intl.string(j.t["JQX/Pb"]) : j.intl.string(j.t.Fbrd8J),
                        l
                            ? (0, E.jsx)(hp.t, { color: er.A.colors.TEXT_BRAND, size: "xs" })
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
                    className: hX.Qs,
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
var hH = i(386447);
function hK(e) {
    let { cta: t, storeListing: i, className: n } = e,
        { applicationId: l, benefits: s, description: r } = i,
        a = S.useMemo(() => (null == i.thumbnail ? null : (0, hz.t)(l, i.thumbnail, 256)), [l, i.thumbnail]),
        { data: o } = hF(i.skuId),
        u = S.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, dC._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, E.jsxs)(hm, {
              className: e7()(hH.iE, n),
              header: (0, E.jsxs)(E.Fragment, {
                  children: [
                      (0, E.jsxs)("div", {
                          className: hH.qd,
                          children: [
                              null != a &&
                                  (0, E.jsx)(hh._, { src: a.href, imageClassName: hH.rW, width: 48, height: 48 }),
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
                  !(0, hB.uJ)(r) &&
                      (0, E.jsx)("div", {
                          className: hH.h_,
                          children: (0, E.jsx)(hY, { variant: "text-sm/medium", children: r }),
                      }),
                  null != s &&
                      s.length > 0 &&
                      (0, E.jsx)("div", {
                          className: hH.PX,
                          children: s.map((e) => {
                              let { id: t, name: i, description: n, icon: s } = e;
                              return (0, E.jsx)(hA.FY, { header: i, icon: (0, hv.N)(l, s), description: n }, t);
                          }),
                      }),
              ],
          });
}
var hW = i(185438),
    hZ = i(711171);
function hq(e) {
    let {
            app: t,
            currentSubscription: i,
            currentListing: n,
            alternativeListings: l,
            navigateToHome: s,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, hT.A)(t, 100),
        u = (0, hb.PJ)(r.flags),
        d = u ? hE.R : hS.n,
        c = u ? j.intl.string(j.t["46YF2D"]) : j.intl.string(j.t.fFyGiA),
        m = i.metadata?.application_subscription_guild_id,
        A = (0, g.bG)([eh.A], () => (u && null != m ? eh.A.getGuild(m) : void 0), [m, u]),
        h = (0, g.bG)([cB.A], () => {
            if (null != a) return cB.A.get(a);
        }, [a]),
        S = hy(i.currentPeriodEnd);
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsxs)("div", {
                className: hZ.wx,
                children: [
                    null != o && (0, E.jsx)(hh._, { src: o.href, imageClassName: hZ.Z2, width: 48, height: 48 }),
                    (0, E.jsxs)("div", {
                        children: [
                            (0, E.jsx)(eV.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, E.jsxs)("div", {
                                className: hZ.p4,
                                children: [
                                    (0, E.jsxs)(eV.D, {
                                        variant: "heading-md/normal",
                                        className: hZ.N4,
                                        children: [(0, E.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != A &&
                                        (0, E.jsxs)(E.Fragment, {
                                            children: [
                                                (0, E.jsx)(el.E, { variant: "text-md/normal", children: "\u2022" }),
                                                (0, E.jsxs)("span", {
                                                    className: hZ.vP,
                                                    children: [
                                                        (0, E.jsx)(mi.Ay, { guild: A, size: mi.Ay.Sizes.SMOL }),
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
            (0, E.jsx)(h_, {
                children: (e) =>
                    (0, E.jsxs)("div", {
                        className: hZ._B,
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
                            (0, E.jsx)(h_.Toggle, {
                                text: e ? j.intl.string(j.t["1Rkq/E"]) : j.intl.string(j.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, E.jsxs)("div", {
                className: hZ.x0,
                children: [
                    (0, E.jsx)(hK, {
                        storeListing: n,
                        className: hZ.o3,
                        cta: (0, E.jsxs)("div", {
                            className: hZ.cJ,
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
                                  hK,
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
                            : (0, E.jsx)(hQ, { storeListing: e, guildId: m, navigateToHome: s }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function hQ(e) {
    let { storeListing: t, guildId: i, navigateToHome: n } = e,
        { openModal: l } = (0, hW.A)({
            analyticsLocation: U.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: i,
            disableGuildSelector: !0,
            onComplete: n,
        });
    return (0, E.jsx)(hK, {
        storeListing: t,
        cta: (0, E.jsx)(ek.$, { variant: "primary", size: "sm", text: j.intl.string(j.t["+KwmBt"]), onClick: l }),
    });
}
class hJ extends S.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, E.jsxs)(hu.$T, {
                  color: hu.Hv.DANGER,
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
function h$(e) {
    let { subscriptions: t, updateHeader: i } = e,
        [n, l] = S.useState({ route: hk.HOME }),
        { route: s } = n;
    function r() {
        l({ route: hk.HOME });
    }
    let a = (e) => {
            l({ route: hk.SWITCH_APP_PLANS, ...e }), i(j.intl.string(j.t.VFqtkP), r);
        },
        [o, u] = S.useState({});
    S.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: hO.LOADING })),
                (0, hd._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: hO.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: hO.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, hc.E)(),
        c = d !== hc.mJ.LOADED;
    switch (s) {
        case hk.HOME:
            return (0, E.jsx)(E.Fragment, {
                children: t.map((e) =>
                    (0, E.jsx)(
                        hJ,
                        {
                            subscription: e,
                            children: (0, E.jsx)(hR, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? hO.LOADING : (o[e.id] ?? hO.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case hk.SWITCH_APP_PLANS:
            let { route: g, ...m } = n;
            return (0, E.jsx)(hq, { ...m, navigateToHome: r });
        default:
            (0, N.xb)(s);
    }
}
var h0 = i(131352);
function h1(e) {
    let { onGoBack: t } = e,
        i = (0, g.yK)(
            [d0.A],
            () =>
                d0.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [n, l] = S.useState();
    return (
        null == n && (n = (0, E.jsx)(h2, { onBack: t, title: j.intl.string(j.t["DB/m9a"]) })),
        (0, E.jsxs)("div", {
            children: [
                n,
                (0, E.jsx)("div", {
                    className: h0.A,
                    children: (0, E.jsx)(h$, {
                        subscriptions: i,
                        updateHeader: function (e, t) {
                            l(
                                (0, E.jsx)(h2, {
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
function h2(e) {
    let { onBack: t, title: i } = e;
    return (0, E.jsxs)("div", {
        className: h0.D,
        children: [
            (0, E.jsx)(rK.K, {
                "aria-label": j.intl.string(j.t["13/7kX"]),
                icon: () => (0, E.jsx)(ho.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, E.jsx)(eV.D, { variant: "heading-lg/semibold", children: i }),
        ],
    });
}
var h3 = i(881489),
    h5 = i(366999),
    h4 = i(466919),
    h6 = i(406252);
function h8(e) {
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
        ? ((t = j.intl.string(h4.default["/S02sx"])), (i = j.intl.string(h4.default.OPJNST)))
        : n
          ? ((t = j.intl.string(j.t["hT6i/0"])),
            (i = null != a ? j.intl.format(j.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = j.intl.string(j.t["3G0CTC"])),
            (i = r === l0.xc.FP_SUB_PAUSED ? j.intl.format(j.t.MMvaIG, { resumeDate: s.toDate() }) : null));
    let u = e7()({ [h6.Hs]: n, [h6.mT]: !n }),
        d = e7()({ [h6.CQ]: n, [h6.ZM]: !n }),
        c = e7()({ [h6.EM]: !n });
    return (0, E.jsxs)("div", {
        className: h6.r6,
        children: [
            (0, E.jsxs)("div", {
                className: h6.Nv,
                children: [
                    (0, E.jsx)(eV.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== i && (0, E.jsx)(el.E, { variant: "text-sm/normal", children: i }),
                ],
            }),
            !o &&
                (0, E.jsx)("div", {
                    className: h6.ZS,
                    children: (0, E.jsx)("div", {
                        className: u,
                        children: (0, E.jsx)(el.E, { variant: "text-sm/semibold", className: d, children: l }),
                    }),
                }),
        ],
    });
}
let h7 = function (e) {
    let { fractionalPremiumInfo: t, className: i, activationDate: n, hasPremiumGroup: l } = e,
        s = (0, uE.kX)(t),
        r = s.length > 0,
        a = (0, h5.Ay)(t.endsAt, h5.yE.SHORT_TIME),
        o = r ? s : a;
    return (0, E.jsx)("div", {
        children: (0, E.jsxs)("div", {
            className: e7()(i, h6.f8),
            children: [
                (0, E.jsx)("div", {
                    className: h6.J_,
                    children: (0, E.jsxs)("div", {
                        className: h6.Bh,
                        children: [
                            (0, E.jsx)("div", {
                                className: h6.xt,
                                children: (0, E.jsx)(ua.t, { size: "md", color: "white", className: h6.T8 }),
                            }),
                            (0, E.jsx)("div", {
                                className: h6.pt,
                                children: (0, E.jsx)(eV.D, {
                                    variant: "heading-md/semibold",
                                    children: j.intl.string(j.t.DFMPWS),
                                }),
                            }),
                            (0, E.jsx)(el.E, {
                                className: h6.PJ,
                                variant: "text-md/semibold",
                                children: s.length > 0 ? s : j.intl.string(j.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, E.jsx)(h8, {
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
var h9 = i(983048);
function Ee(e) {
    let t,
        {
            user: i,
            planId: n,
            count: l,
            userPremiumSubscription: s,
            unconsumedFractionalPremiumUnits: r = [],
            hasPremiumGroup: a,
        } = e,
        [o, u] = (0, g.yK)([cF.A], () => [cF.A.get(n), null != s ? cF.A.get(s.planId) : null]);
    if (null == o || uE.Ay.getInterval(n).intervalType !== l0.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        c = o.skuId === d,
        m = uE.Ay.getDisplayName(n);
    if (a) t = j.intl.string(h4.default["5asczk"]);
    else if (c && null != s) {
        let e;
        e = new Date(s.status === U.Dmq.PAUSED && null != s.pauseEndsAt ? s.pauseEndsAt : s.currentPeriodEnd);
        let i = (0, uE._e)(e, r);
        t = j.intl.formatToPlainString(j.t["5CNRRA"], { date: i ?? 0 });
    } else t = j.intl.formatToPlainString(j.t.eNXZ5O, { planName: m });
    let A = i.hasFreePremium() || (null != s && s.isPurchasedExternally);
    return (0, E.jsxs)("div", {
        className: h6.Bh,
        children: [
            (0, E.jsx)("div", {
                className: e7()({
                    [h6.sr]: o.skuId === l0.pe.TIER_0,
                    [h6.lP]: o.skuId === l0.pe.TIER_1,
                    [h6.eb]: o.skuId === l0.pe.TIER_2,
                }),
                children: (0, E.jsx)(ua.t, { size: "md", color: "currentColor", className: h6.Kk }),
            }),
            (0, E.jsxs)("div", {
                className: h6.pt,
                children: [
                    (0, E.jsx)(eV.D, {
                        variant: "heading-md/semibold",
                        children: j.intl.format(j.t.LzobT9, { planName: m }),
                    }),
                    !A &&
                        (0, E.jsx)(eV.D, {
                            className: h6.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, E.jsx)(el.E, {
                className: h6.PJ,
                variant: "text-md/semibold",
                children: j.intl.format(j.t["ess/xl"], { count: l }),
            }),
        ],
    });
}
let Et = function (e) {
    let { className: t, entitlements: i } = e,
        n = e$()(Array.from(i))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: i, consumed: n } = e;
                return null != t && null != i && !n;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        l = (0, g.yK)([cy.A], () => cy.A.getUnactivatedFractionalPremiumUnits()),
        s = (0, g.bG)([d0.A], () => d0.A.getPremiumSubscription()),
        r = (0, g.bG)([d0.A], () => null == d0.A.getPremiumTypeSubscription()),
        a = Object.keys(n).some((e) => e === l0.gD.PREMIUM_MONTH_TIER_1),
        o = (0, g.bG)([iA.default], () => iA.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsx)("div", {
                className: e7()(t, h6.xF, h6.J_),
                children: Object.keys(n).map((e) =>
                    (0, E.jsx)(
                        Ee,
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
                            className: h6.eT,
                            variant: "text-md/normal",
                            children: j.intl.string(j.t["VNr4+O"]),
                        }),
                        (0, E.jsx)(h9.i, {}),
                    ],
                }),
        ],
    });
};
var Ei = i(830991);
function En(e) {
    let t,
        { subscription: i, withOverheadSeparator: n } = e,
        { analyticsLocations: l } = (0, n1.Ay)(),
        [s] = (0, Aq.YV)({
            subscriptionId: i.id,
            renewal: !0,
            analyticsLocations: l,
            analyticsLocation: e4.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == s) return null;
    let r = n ? Ei.r : Ei.a,
        a = s.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, uE.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = cF.A.get(o);
    tZ()(null != u, "Missing plan");
    let d = (0, dC.$g)(s.total, s.currency);
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
function El(e) {
    let { subscription: t, withOverheadSeparator: i } = e;
    return t.status === U.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, E.jsx)(En, { subscription: t, withOverheadSeparator: i });
}
var Es = i(37397),
    Er = i(533792);
let Ea = { [nH.nR]: "role_subscriptions_panel", [nH.PZ]: "application_subscriptions_panel" };
function Eo() {
    return (0, E.jsx)(eO.Z, {
        className: Er.wb,
        type: eO.Z.Types.CUSTOM,
        children: (0, E.jsxs)(r1.A, {
            align: r1.A.Align.CENTER,
            children: [
                (0, E.jsx)(p.A, { game: null, size: p.M.SMALL, className: Er.pV }),
                (0, E.jsx)("span", { className: Er.O, children: j.intl.string(j.t["jy/hyj"]) }),
            ],
        }),
    });
}
function Eu(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, AE._)(e, t));
}
function Ed() {
    let e = (0, g.bG)([cy.A], () => cy.A.getForApplication(l0.tv), [], Eu);
    return (
        S.useEffect(() => {
            (0, c4.LM)(l0.tv);
        }, []),
        (0, E.jsx)(ij.n, {
            label: j.intl.string(j.t["2GKrvn"]),
            description: j.intl.string(j.t.kNEjGm),
            children:
                null != e && uE.Ay.hasAccountCredit(e)
                    ? (0, E.jsx)(Et, { className: Er.fX, entitlements: e })
                    : (0, E.jsx)(Eo, {}),
        })
    );
}
function Ec() {
    return (0, E.jsx)("hr", { className: Er.hr });
}
let Eg = function () {
        var e;
        let t = (0, g.bG)([d0.A], () => d0.A.getPremiumTypeSubscription()),
            i = (0, AS.A)({ subscriptionFilter: (e) => Es.Hy.has(e.status) }),
            n = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()),
            l = i.length > 1,
            s = (0, g.bG)(
                [d$.A],
                () => (null != t && null != t.paymentSourceId ? d$.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, g.bG)([d0.A], () => d0.A.hasFetchedSubscriptions()),
            a = (0, g.bG)([dI.A], () => dI.A.isBusy),
            o = (0, gI.Y)(),
            d = AJ.A.useField("subsection"),
            c = AJ.A.useField("scrollToGameServers"),
            m = S.useRef(null);
        S.useEffect(() => {
            (0, s7._)(null != d ? Ea[d] : u.X.SUBSCRIPTIONS_PANEL);
        }, [d]);
        let A = (0, g.bG)([d0.A], () => d0.A.getActiveApplicationSubscriptions()?.length ?? 0),
            h = (0, g.bG)(
                [d0.A],
                () =>
                    Object.values(d0.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === U.rzx.GUILD)
                        .filter((e) => e.status !== U.Dmq.ENDED).length,
            ),
            T = (0, g.bG)([d0.A], () =>
                Object.values(d0.A.getSubscriptions() ?? {}).some((e) => e.type === U.rzx.GAME_SERVER),
            ),
            { servers: x } = (0, AG.f)({ enabled: T }),
            p = (0, gv.A)({ forceFetch: !0 }),
            f = (0, h3.ds)(),
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
                AJ.A.setState({ scrollToGameServers: !1 }));
        }, [c, r, o, x.length]),
        S.useEffect(
            () => (
                lm.h.wait(() => {
                    (0, g_.zS)(), df.hP(), (0, gN.CD)(), df.$o();
                }),
                function () {
                    AJ.A.resetState();
                }
            ),
            [],
        ),
        eY.A.enabled)
            ? (0, E.jsx)(dm.A, {})
            : r && o
              ? d === nH.nR
                  ? (0, E.jsx)(hl, { onGoBack: () => AJ.A.setState({ subsection: null }) })
                  : d === nH.PZ
                    ? (0, E.jsx)(h1, { onGoBack: () => AJ.A.setState({ subsection: null }) })
                    : (0, E.jsx)("div", {
                          className: Er.kL,
                          children: (0, E.jsxs)("div", {
                              className: Er.Qs,
                              children: [
                                  l ? (0, E.jsx)(Es.Sb, {}) : null,
                                  null != t
                                      ? (0, E.jsx)(Es.Ay, {
                                            subscription: t,
                                            paymentSource: s,
                                            busy: a,
                                            subscriptions: i,
                                        })
                                      : (0, E.jsx)(Es.TC, {}),
                                  _ &&
                                      ((e = !!n?.isPremiumWithPremiumGroup()),
                                      (0, E.jsxs)("section", {
                                          children: [
                                              (0, E.jsx)(eV.D, {
                                                  variant: "heading-md/bold",
                                                  className: Er.HL,
                                                  children: j.intl.string(j.t.Obre8v),
                                              }),
                                              (0, E.jsx)(el.E, {
                                                  variant: "text-md/normal",
                                                  className: Er.JU,
                                                  children: j.intl.format(j.t["7Zi06b"], {
                                                      helpCenterLink: ty.A.getArticleURL(
                                                          U.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, E.jsx)(h7, {
                                                  className: Er.fX,
                                                  fractionalPremiumInfo: p,
                                                  activationDate: N,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, E.jsx)(Ed, {}),
                                  h > 0 &&
                                      (0, E.jsxs)(E.Fragment, {
                                          children: [
                                              (0, E.jsx)(Ec, {}),
                                              (0, E.jsx)(AV, {
                                                  count: h,
                                                  onClickManageSubscription: () => AJ.A.setState({ subsection: nH.nR }),
                                              }),
                                          ],
                                      }),
                                  A > 0 &&
                                      (0, E.jsxs)(E.Fragment, {
                                          children: [
                                              (0, E.jsx)(Ec, {}),
                                              (0, E.jsx)(ha, {
                                                  count: A,
                                                  onClickManageSubscription: () => {
                                                      AJ.A.setState({ subsection: nH.PZ }),
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
                                          children: [(0, E.jsx)(Ec, {}), (0, E.jsx)(AP, { servers: x })],
                                      }),
                                  (0, E.jsx)(Ec, {}),
                                  null != t ? (0, E.jsx)(El, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, E.jsx)("div", { className: e7()(Er.kL, Er.Lq), children: (0, E.jsx)(dh.y, {}) });
    },
    Em = (0, a.E2)(u.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [j.intl.string(j.t.trSpHX), j.intl.string(j.t["2GKrvn"])],
        Component: () => (0, E.jsx)(Eg, {}),
    }),
    EA = (0, a.zZ)(u.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [j.intl.string(j.t.trSpHX), j.intl.string(j.t["2GKrvn"])],
        buildLayout: () => [Em],
    }),
    Eh = (0, a.t_)(u.X.SUBSCRIPTIONS_PANEL, { useTitle: () => j.intl.string(j.t.trSpHX), buildLayout: () => [EA] }),
    EE = (0, a.i4)(u.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.trSpHX),
        icon: AA.L,
        usePersistentBadge: function () {
            let e = (0, Ah.l)();
            return S.useMemo(
                () => ({
                    badgeType: h.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    customBadge: e ? (0, E.jsx)(rw.E, { size: "xs", color: er.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [e],
            );
        },
        buildLayout: () => [Eh],
    }),
    ES = (0, a.WI)(u.X.BILLING_SECTION, {
        useTitle: () => j.intl.string(j.t.oeUm2s),
        buildLayout: () => [gp, Am, EE, gm, ct],
    });
var ET = i(540999),
    Ex = i(306471),
    Ep = i(964355),
    Ef = i(172272);
let EN = (0, a.zD)(u.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, g.bG)([op.default], () => op.default.isAxeEnabled),
        setValue: (e) => (0, ox.x)({ axeEnabled: e }),
    }),
    E_ = (0, a.zD)(u.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, g.bG)([op.default], () => op.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, ox.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var EI = i(276086),
    EC = i(354328);
let Eb = (0, a.zD)(u.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, EC.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, EI.L)("highlight_mana_components", e);
        },
    }),
    Ev = (0, a.zD)(u.X.HIGHLIGHT_MANA_TEXT_OVERRIDES, {
        useTitle: () => "Audit overridden Mana Text (dashed red)",
        useSubtitle: () =>
            "Outlines Mana Text/Heading whose font is overridden by CSS with a dashed red border \u2014 it renders through the component but won\u2019t change between control and variant. Higher cost (measures computed styles), so keep it on only while auditing.",
        useValue: () => (0, EC.A)("highlight_mana_text_overrides"),
        setValue: (e) => {
            (0, EI.L)("highlight_mana_text_overrides", e);
        },
    }),
    Ey = (0, a.zD)(u.X.HIGHLIGHT_MANA_TEXT, {
        useTitle: () => "Mana Text Migration Highlighter",
        useSubtitle: () =>
            "Outlines Mana Text/Heading components in green, text composing a variant (experiment-reachable but not migrated) in yellow, and all other rendered text in red.",
        useValue: () => (0, EC.A)("highlight_mana_text"),
        setValue: (e) => {
            (0, EI.L)("highlight_mana_text", e);
        },
    }),
    Ej = (0, a.zD)(u.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, EC.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, EI.L)("highlight_void_toggleables", e);
        },
    }),
    EO = (0, a.sN)(u.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, g.bG)([op.default], () => op.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: Ef.YR,
        markers: Array.from({ length: Ef.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => Ef.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            Ef.Or.getState().setHorizontalSpacing(e);
        },
    }),
    ER = (0, a.zD)(u.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, g.bG)([op.default], () => op.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, ox.x)({ layoutDebuggingEnabled: e });
        },
    }),
    EL = (0, a.sN)(u.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, g.bG)([op.default], () => op.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: Ef.YR,
        markers: Array.from({ length: Ef.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => Ef.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            Ef.Or.getState().setVerticalSpacing(e);
        },
    }),
    ED = (0, a.zZ)(u.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [E_, ER, EO, EL, Eb, Ey, Ev, Ej, EN],
    }),
    EP = (0, a.zD)(u.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => L.HZ.useSetting(),
        setValue: (e) => {
            L.HZ.updateSetting(e);
        },
    });
var EG = i(173936),
    EM = i(260598),
    EU = i(148810),
    EV = i(380610),
    Ek = i(986238),
    Ew = i(281161),
    EF = i(663894);
let EB = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    Ez = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function EX(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class EY extends S.Component {
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
        return (0, E.jsxs)(r1.A, {
            direction: r1.A.Direction.VERTICAL,
            className: e7()(Ew.oS, iz.SX, EF.N, Ew.nM),
            children: [
                (0, E.jsx)(iM.A, {
                    className: e7()(Ew.lL, { [Ew.zi]: n }),
                    onClick: n ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, E.jsxs)(r1.A, {
                    className: iz.QB,
                    children: [
                        (0, E.jsx)(r1.A.Child, {
                            basis: "50%",
                            children: (0, E.jsx)(rH.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: Ez,
                                onSelectionChange: this.handleOverrideTypeChanged,
                                value: t,
                                disabled: n,
                            }),
                        }),
                        (0, E.jsx)(r1.A.Child, {
                            wrap: !0,
                            basis: "50%",
                            children: (0, E.jsx)(rQ.k, {
                                label: "branch" === t ? "Branch Name" : "Commit SHA",
                                value: i,
                                onChange: this.handleOverrideIdChanged,
                                disabled: n,
                            }),
                        }),
                    ],
                }),
                (0, E.jsxs)(r1.A.Child, {
                    children: [
                        null != l &&
                            "" !== l &&
                            (0, E.jsx)(el.E, {
                                className: Ew.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: l,
                            }),
                        (0, E.jsxs)(el.E, {
                            variant: "text-sm/normal",
                            className: Ew.AS,
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
class EH extends S.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, EV.bD)();
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
        return e$().without(EB, ...t);
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
        let t = await (0, EU.Zk)(e);
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
        (0, K.openModal)((t) => (0, E.jsx)(EK, { ...t, buildOverrides: e }));
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
                      EY,
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
                  children: (0, E.jsx)(rK.K, {
                      variant: "secondary",
                      icon: EG.q,
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
                    disabled: EX(t ?? {}),
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
            ? (0, E.jsx)(dh.y, { className: iz.QX })
            : null != n && 0 === Object.keys(n).length
              ? this.renderEmpty()
              : this.renderItems();
        let l = !i && !t && this.getAvailableProjects().length > 0,
            s =
                EX(n ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
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
                    (0, E.jsx)(rH.l, {
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
                    (0, E.jsxs)(ol.e, {
                        justify: "end",
                        children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                    }),
                ],
            }),
        });
    }
}
class EK extends S.Component {
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
            t = await (0, EU.SB)(e);
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
        return EX(this.props.buildOverrides ?? {});
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
            d = Ek.fL.find((t) => t.value === e),
            c = l.map((e) => ({ id: e, label: e, value: e }));
        return (0, E.jsxs)(Q.B, {
            gap: 20,
            children: [
                (0, E.jsx)(rH.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: Ek.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, E.jsx)(rH.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: Ek.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, E.jsxs)(Q.B, {
                          gap: 20,
                          children: [
                              (0, E.jsx)(rQ.k, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: s,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: r,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: { icon: rV.j, onClick: this.handleAddAllowedVersion, "aria-label": "Add" },
                              }),
                              (0, E.jsx)(rH.l, {
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
                    : (0, E.jsx)(EM.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: i,
                          error: n,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                (0, E.jsx)(EM.f, {
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
        return (0, E.jsx)(rq.Modal, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, E.jsx)(c0.A, { value: i }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let EW = (0, a.E2)(u.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: EH });
var EZ = i(256311),
    Eq = i(883600);
let EQ = (0, a.E2)(u.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, g.bG)([Eq.A], () => Eq.A.overrideId());
        async function t(e) {
            let t = Eq.A.getChangelog(e, "en-US");
            return null != t ? t : ((await EZ.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
        }
        return (0, E.jsx)(Si, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => EZ.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var EJ = i(506774);
let E$ = new Date("2018-01-01"),
    E0 = (0, a.Tf)(u.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => L.pK.useSetting() === dv.default.fromTimestamp(E$.getTime()),
        onClick: () => (EJ.w.set("lastChangeLogDate", E$), L.pK.updateSetting(dv.default.fromTimestamp(E$.getTime()))),
    }),
    E1 = (0, a.zD)(u.X.DISABLE_APP_COLLECTIONS_CACHE, {
        useTitle: () => "Disable Application Collections Cache",
        useSubtitle: () => "Forces application collection updates to be shown immediately.",
        useDisabled: () => (0, g.bG)([op.default], () => op.default.onlyShowPreviewAppCollections),
        useValue: () =>
            (0, g.bG)(
                [op.default],
                () => op.default.disableAppCollectionsCache || op.default.onlyShowPreviewAppCollections,
            ),
        setValue: (e) => (0, ox.x)({ disableAppCollectionsCache: e }),
    }),
    E2 = (0, a.zD)(u.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, g.bG)([op.default], () => op.default.isForcedCanary),
        setValue: (e) => {
            (0, ox.x)({ canary: e });
        },
    }),
    E3 = (0, a.zD)(u.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, g.bG)([op.default], () => op.default.sourceMapsEnabled),
        setValue: (e) => (0, ox.x)({ sourceMapsEnabled: e }),
    }),
    E5 = (0, a.zD)(u.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, g.bG)([op.default], () => op.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, ox.x)({ onlyShowPreviewAppCollections: e }),
    });
var E4 = i(10094),
    E6 = i(683760);
let E8 = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: l0.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: l0.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: l0.PremiumTypes.TIER_2 },
    ],
    E7 = (0, a.Hn)(u.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => E8,
        clearable: !0,
        useValue: () =>
            (0, g.bG)([E6.A], () => {
                let e = E6.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, E4.O)(null, void 0)
                : null === e
                  ? (0, E4.O)(void 0, void 0)
                  : (0, E4.O)(0 === e ? null : e, void 0);
        },
    });
var E9 = i(246605),
    Se = i(274184);
let St = (0, a.E2)(u.X.SURVEY_OVERRIDE, {
    useSearchTerms: () => ["survey override"],
    Component: function () {
        let e = (0, g.bG)([Se.Ay], () => Se.Ay.getSurveyOverride());
        return (0, E.jsx)(Si, {
            label: "Survey Override",
            description: "Provide a survey ID to override the survey shown to this user.",
            placeholder: "Enter Survey ID...",
            overrideId: e ?? null,
            setOverride: (e) => E9.xr(e),
            fetchOverride: (e) => E9.BC(e, !0) ?? null,
        });
    },
});
function Si(e) {
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
            children: (0, E.jsx)(rQ.k, {
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
let Sn = (0, a.zZ)(u.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [E7, St, EQ, E0, E2, EP, E5, E1, E3, EW],
        useInlineNotice: () => ({
            type: h.lT.INLINE_NOTICE,
            noticeType: "info",
            text: j.intl.format(j.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    Sl = (0, a.zD)(u.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, g.bG)([op.default], () => op.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, ox.x)({ logAnalyticsEvents: e }),
    }),
    Ss = (0, a.zD)(u.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, g.bG)([op.default], () => op.default.isLoggingGatewayEvents),
        setValue: (e) => (0, ox.x)({ logGatewayEvents: e }),
    }),
    Sr = (0, a.zD)(u.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, g.bG)([op.default], () => op.default.preventPopoutClose),
        setValue: (e) => (0, ox.x)({ preventPopoutClose: e }),
    }),
    Sa = (0, a.zD)(u.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, g.bG)([op.default], () => op.default.logKeyboardMismatches),
        setValue: (e) => (0, ox.x)({ logKeyboardMismatches: e }),
    }),
    So = (0, a.zD)(u.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, g.bG)([op.default], () => op.default.isLoggingOverlayEvents),
        setValue: (e) => (0, ox.x)({ logOverlayEvents: e }),
    }),
    Su = (0, a.zD)(u.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, g.bG)([op.default], () => op.default.isLoggingQuestEvents),
        setValue: (e) => (0, ox.x)({ logQuestEvents: e }),
    }),
    Sd = (0, a.zD)(u.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, g.bG)([op.default], () => op.default.isTracingRequests),
        setValue: (e) => (0, ox.x)({ trace: e }),
    }),
    Sc = (0, a.zZ)(u.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [Ss, So, Sd, Sl, Sa, Sr, Su] }),
    Sg = (0, a.t_)(u.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [Sn, Sc, ED],
    }),
    Sm = (0, a.i4)(u.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: Ex.V,
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
                } = (0, g.cf)([op.default, ET.A, iA.default], () => ({
                    layoutDebuggingEnabled: op.default.layoutDebuggingEnabled,
                    isDeveloper: ET.A.isDeveloper,
                    isLoggingGatewayEvents: op.default.isLoggingGatewayEvents,
                    isLoggingOverlayEvents: op.default.isLoggingOverlayEvents,
                    isLoggingAnalyticsEvents: op.default.isLoggingAnalyticsEvents,
                    isTracingRequests: op.default.isTracingRequests,
                    isForcedCanary: op.default.isForcedCanary,
                    isSourceMapsEnabled: op.default.sourceMapsEnabled,
                    isAxeEnabled: op.default.isAxeEnabled,
                    preventPopoutClose: op.default.preventPopoutClose,
                    onlyShowPreviewAppCollections: op.default.onlyShowPreviewAppCollections,
                    disableAppCollectionsCache: op.default.disableAppCollectionsCache,
                    isStaff: iA.default.getCurrentUser()?.isStaff() ?? !1,
                })),
                { horizontalSpacing: A, verticalSpacing: h } = (0, Ef.Or)(),
                { setHorizontalSpacing: S, setVerticalSpacing: T } = Ef.Or.getState(),
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
                                              (0, ox.x)({ canary: !r });
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
                                              (0, ox.x)({ onlyShowPreviewAppCollections: !d });
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
                                              (0, ox.x)({ disableAppCollectionsCache: !c });
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
                                              (0, ox.x)({ logGatewayEvents: !i });
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
                                              (0, ox.x)({ logOverlayEvents: !n });
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
                                              (0, ox.x)({ logAnalyticsEvents: !l });
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
                                              (0, ox.x)({ trace: !s });
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
                                              (0, ox.x)({ preventPopoutClose: !o });
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
                                              (0, ox.x)({ axeEnabled: !a });
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
                                              (0, ox.x)({ layoutDebuggingEnabled: !e });
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
                                                          (0, E.jsx)(Ep.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: A,
                                                              minValue: 0,
                                                              maxValue: Ef.YR,
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
                                                          (0, E.jsx)(Ep.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: h,
                                                              minValue: 0,
                                                              maxValue: Ef.YR,
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
                                { id: "discord-stats", label: "Discord Stats", action: () => aD() },
                                "discord-stats",
                            )
                          : null,
                  ]
                : null;
        },
        buildLayout: () => [Sg],
    });
var SA = i(127062),
    Sh = i(25044),
    SE = i(80703),
    SS = i(691540),
    ST = i(857250),
    Sx = i(97483),
    Sp = i(100392),
    Sf = i(102609),
    SN = i(271478),
    S_ = i(736056),
    SI = i(710195),
    SC = i(386976),
    Sb = i(257433),
    Sv = i(32523),
    Sy = i(96919),
    Sj = i(688151),
    SO = i(142862);
function SR(e) {
    let { experiment: t, experimentId: i, overrideInfo: n, defaultOpen: l } = e,
        [s, r] = S.useState(l),
        [a, o] = S.useState(!1),
        u = S.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, g.bG)([ck.default], () => ck.default.getId()),
        c = (0, g.bG)([ck.default], () => {
            let e = ck.default.getInstallationForTracking();
            return null == e ? null : (0, SE.v)(e);
        }),
        m = "installation" === t.kind && null != c ? c : d,
        A = (0, Sb.iN)(t, m),
        h = (0, Sb.Fm)(t, m),
        T = (0, g.yK)([S_.A], () =>
            e$()
                .sortBy(S_.A.getRecentExposures(Sj.Vh.USER, i), (e) => {
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
                (0, cX.C)((0, Sp.yA)(i), () => {
                    (0, SS.P0)({
                        id: "experiment-link-copied",
                        message: "Copied experiment link",
                        type: Sx.Ck.SUCCESS,
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
                className: SO.DD,
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
                                    cX.p5 &&
                                        (0, E.jsx)(en.D, { onClick: x, children: (0, E.jsx)(EG.q, { size: "xs" }) }),
                                ],
                            }),
                            (0, E.jsx)(el.E, { color: "text-muted", variant: "text-sm/normal", children: i }),
                        ],
                    }),
                    (0, E.jsx)("span", {
                        className: SO.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!s) return (0, E.jsx)("div", { className: SO.Os, children: p });
    let f = "";
    return (
        (f =
            t.system === Sf.l5.LEGACY
                ? `Currently assigned to bucket ${A ?? Sj.RE.NOT_ELIGIBLE}`
                : null != A
                  ? `Currently assigned to variant ${A}`
                  : "Currently unassigned"),
        (0, E.jsxs)("div", {
            className: SO.Os,
            children: [
                p,
                (0, E.jsx)("div", {
                    children: (0, E.jsx)(SN.g, {
                        label: t.system === Sf.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: f,
                        experiment: t,
                        experimentId: i,
                        overrideInfo: n,
                    }),
                }),
                (0, E.jsx)("div", {
                    className: SO.h_,
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
                                  className: SO.id,
                                  children: "Server Descriptor",
                              }),
                              (0, E.jsx)(el.E, {
                                  variant: "code",
                                  className: SO.AS,
                                  children: null == h ? "None" : JSON.stringify(h, void 0, 2),
                              }),
                              (0, E.jsx)(el.E, {
                                  variant: "text-lg/medium",
                                  className: SO.id,
                                  children: "Override Descriptor",
                              }),
                              (0, E.jsx)(el.E, {
                                  variant: "code",
                                  className: SO.AS,
                                  children:
                                      n?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(n.originalDescriptor, void 0, 2),
                              }),
                              (0, E.jsx)(el.E, {
                                  variant: "text-lg/medium",
                                  className: SO.id,
                                  children: "Recent Exposures",
                              }),
                              (0, E.jsx)(el.E, {
                                  variant: "code",
                                  className: SO.AS,
                                  children: 0 === T.length ? "None" : T.join("\n"),
                              }),
                          ],
                      })
                    : (0, E.jsx)("div", {
                          className: SO.id,
                          children: (0, E.jsx)(ea.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, E.jsx)(ew.c, { className: SO.yF }),
            ],
        })
    );
}
function SL(e) {
    let { experiment: t, experimentId: i, overrideInfo: n } = e,
        [l, s] = S.useState(null != n),
        [r, a] = S.useState(!1),
        o = S.useCallback(() => {
            s((e) => !e);
        }, []),
        u = (0, g.bG)([S_.A], () => S_.A.getLoadedGuildExperiment(i)),
        d = (0, g.bG)([S_.A, eh.A, SI.A], () => {
            if (t.system === Sf.l5.LEGACY) return null == S_.A.getLoadedGuildExperiment(i);
            let e = t.name;
            return !eh.A.getGuildsArray().some((t) => null != SI.A.getServerAssignment("guild", t.id, e));
        }),
        c = (0, g.yK)([S_.A], () =>
            e$()
                .sortBy(S_.A.getRecentExposures(Sj.Vh.GUILD, i), (e) => {
                    let [t, i] = e;
                    return -i;
                })
                .map((e) => {
                    let [t, i] = e;
                    return `${new Date(i).toLocaleString()} (${t})`;
                }),
        ),
        [m, A] = (0, g.yK)([ck.default, eh.A, S_.A, SI.A], () => {
            let e = t.system === Sf.l5.LEGACY,
                n = t.name,
                l = ck.default.getId(),
                s = e$().sortBy(eh.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                r = {},
                a = [];
            for (let t of s) {
                let s = e
                    ? (S_.A.getGuildExperimentDescriptor(i, t.id)?.bucket ?? Sj.RE.NOT_ELIGIBLE)
                    : (SI.A.getEvaluationAndAssignment("guild", t.id, n, l)[1]?.variantId ?? Sj.RE.NOT_ELIGIBLE);
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
        h = t.system !== Sf.l5.LEGACY,
        T = (0, g.yK)([eh.A], () => e$().sortBy(eh.A.getGuildsArray(), (e) => e.name.toLowerCase())),
        [x, p] = S.useState(() => l9.A.getGuildId() ?? l9.A.getLastSelectedGuildId()),
        f = T.find((e) => e.id === x)?.name,
        N = (0, g.bG)([SI.A], () => {
            if (h && null != x) return SI.A.getServerAssignment("guild", x, t.name);
        }, [h, x, t.name]),
        _ = (0, g.bG)([SI.A, ck.default], () => {
            if (!h) return;
            let e = ck.default.getId();
            return SI.A.getEvaluationAndAssignment("user", e, t.name)[1];
        }),
        I = null != _ && (_.isOverride || _.useAsEligibility),
        C = (0, E.jsx)(en.D, {
            onClick: o,
            children: (0, E.jsxs)(el.E, {
                variant: "text-md/medium",
                className: SO.DD,
                children: [
                    (0, E.jsxs)("div", {
                        children: [
                            (0, E.jsx)("span", { children: t.title }),
                            (0, E.jsx)(el.E, { color: "text-muted", variant: "text-sm/normal", children: i }),
                        ],
                    }),
                    (0, E.jsx)("span", { className: SO.km, children: "Guild" }),
                ],
            }),
        });
    return l
        ? (0, E.jsxs)("div", {
              className: SO.Os,
              children: [
                  C,
                  (0, E.jsx)(SN.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${A}`,
                      experiment: t,
                      experimentId: i,
                      overrideInfo: n,
                  }),
                  h &&
                      T.length > 0 &&
                      (0, E.jsx)("div", {
                          className: SO.h_,
                          children: (0, E.jsx)(rH.l, {
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
                      className: SO.h_,
                      children: d
                          ? (0, E.jsx)(el.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    t.system === Sf.l5.LEGACY
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
                                  className: SO.id,
                                  children: ["Server Descriptor", null != f ? ` (${f})` : ""],
                              }),
                              (0, E.jsx)(el.E, {
                                  variant: "code",
                                  className: SO.AS,
                                  children: null == N ? "None" : JSON.stringify(N, void 0, 2),
                              }),
                              (0, E.jsx)(el.E, {
                                  variant: "text-lg/medium",
                                  className: SO.id,
                                  children: "Client Eligibility",
                              }),
                              (0, E.jsx)(el.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: I ? "Eligible: Yes" : "Eligible: No",
                              }),
                              (0, E.jsx)(el.E, {
                                  variant: "code",
                                  className: SO.AS,
                                  children: null == _ ? "None" : JSON.stringify(_, void 0, 2),
                              }),
                          ],
                      }),
                  r
                      ? (0, E.jsxs)("div", {
                            children: [
                                (0, E.jsx)(el.E, {
                                    variant: "text-lg/medium",
                                    className: SO.id,
                                    children: "Guild Assignments",
                                }),
                                (0, E.jsx)(el.E, { variant: "code", className: SO.AS, children: m }),
                                t.system === Sf.l5.LEGACY &&
                                    (0, E.jsxs)(E.Fragment, {
                                        children: [
                                            (0, E.jsx)(el.E, {
                                                variant: "text-lg/medium",
                                                className: SO.id,
                                                children: "Server Descriptor",
                                            }),
                                            (0, E.jsx)(el.E, {
                                                variant: "code",
                                                className: SO.AS,
                                                children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                            }),
                                        ],
                                    }),
                                (0, E.jsx)(el.E, {
                                    variant: "text-lg/medium",
                                    className: SO.id,
                                    children: "Override Descriptor",
                                }),
                                (0, E.jsx)(el.E, {
                                    variant: "code",
                                    className: SO.AS,
                                    children:
                                        n?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(n.originalDescriptor, void 0, 2),
                                }),
                                (0, E.jsx)(el.E, {
                                    variant: "text-lg/medium",
                                    className: SO.id,
                                    children: "Recent Exposures",
                                }),
                                (0, E.jsx)(el.E, {
                                    variant: "code",
                                    className: SO.AS,
                                    children: 0 === c.length ? "None" : c.join("\n"),
                                }),
                            ],
                        })
                      : (0, E.jsx)("div", {
                            className: SO.id,
                            children: (0, E.jsx)(ea.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, E.jsx)(ew.c, { className: SO.yF }),
              ],
          })
        : (0, E.jsx)("div", { className: SO.Os, children: C });
}
let SD = (0, a.E2)(u.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, SC.op)(),
                { experiments: i, overridesInfo: n } = (0, Sv.hI)(),
                l = S.useMemo(() => ({ ...i, ...e }), [i, e]),
                s = S.useMemo(() => ({ ...n, ...t }), [n, t]),
                r = (0, g.bG)([ck.default], () => {
                    let e = ck.default.getInstallationForTracking();
                    return null == e ? null : (0, SE.v)(e);
                }),
                [a, o] = S.useState(""),
                u = (0, Sy.oC)((0, Sy.R3)((0, Sy.Fm)(l), s), a);
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
                                cX.p5 &&
                                    (0, E.jsx)(ea.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, cX.C)(r, () => {
                                                (0, SS.P0)((0, ST.o)("Installation ID copied!", Sx.Ck.SUCCESS));
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, E.jsx)($.I, { placeholder: "Search experiments", query: a, onChange: o, onClear: () => o("") }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? SL : SR;
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
                              className: SO.p$,
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
    SP = (0, a.zZ)(u.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [SD] }),
    SG = (0, a.t_)(u.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [SP] }),
    SM = (0, a.i4)(u.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: SA.c,
        useMenu: Sh.A,
        buildLayout: () => [SG],
    }),
    SU = (0, a.WI)(u.X.DEVELOPER_SECTION, {
        useTitle: () => j.intl.string(j.t["+gHUHA"]),
        usePredicate: () => ET.A.isDeveloper,
        buildLayout: () => [SM, Sm],
    });
var SV = i(712440),
    Sk = i(370997);
let Sw = (0, a.E2)(u.X.AUTHORIZED_APPS_LIST_SETTING, {
    Component: Sk.Ay,
    useSearchTerms: () => [j.intl.string(j.t["f6kk+r"])],
});
var SF = i(259678),
    SB = i(77468),
    Sz = i(289498),
    SX = i(573648),
    SY = i(874490),
    SH = i(370480),
    SK = i(968309);
let SW = new Set([U.fg2.XBOX, U.fg2.PLAYSTATION, U.fg2.PLAYSTATION_STAGING, U.fg2.CRUNCHYROLL]);
var SZ = i(169869),
    Sq = i(235693),
    SQ = i(757036),
    SJ = i(555837),
    S$ = i(733110),
    S0 = i(241524),
    S1 = i(346017),
    S2 = i(51965),
    S3 = i(631368),
    S5 = i(968671),
    S4 = i(212739),
    S6 = i(30370),
    S8 = i(933287),
    S7 = i(594387),
    S9 = i(651439);
function Te() {
    let e,
        t,
        n,
        l,
        s,
        { variant: r, showFooter: a } =
            ((e = (0, S3.$)()),
            (t = (0, S5.GM)("connectedAccountsBannerFooter")),
            (n = (0, S4.O)()),
            (s = null != (l = (0, g.bG)([S6.A], () => S6.A.getAccount(null, U.fg2.XBOX))) && !l.revoked),
            e === S3.C.NONE || n
                ? { variant: S3.C.NONE, showFooter: !1 }
                : { variant: e, showFooter: t && e === S3.C.NO_ACCESS && !s }),
        { analyticsLocations: o } = (0, n1.Ay)(e4.A.XBOX_CONNECTED_ACCOUNTS_BANNER),
        u = (0, S1.yW)(o),
        d = (0, S0.A)("(max-width: 485px)");
    if (r === S3.C.NONE) return null;
    let c = d ? "md" : "sm",
        m = "",
        A = null;
    switch (r) {
        case S3.C.HAS_ACCESS:
        case S3.C.BLOCK_CLAIM:
            (m = j.intl.string(S8.default["7PdsMK"])),
                (A = (0, E.jsx)(S2.A, {
                    variant: "overlay-primary",
                    size: c,
                    fullWidth: d,
                    text: j.intl.string(S8.default.CubeLC),
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
        case S3.C.NO_ACCESS:
            (m = j.intl.string(S8.default.NwkRTZ)),
                (A = (0, E.jsx)(lW.A, {
                    defaultTextOverride: j.intl.string(S8.default["0vY+ie"]),
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
                className: S9.bV,
                children: [
                    (0, E.jsx)(eV.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: j.intl.string(j.t.NG1e6l),
                    }),
                    (0, E.jsx)(ua.t, { size: "xs", color: "var(--icon-default)" }),
                ],
            }),
            (0, E.jsx)(io.N, {
                theme: "dark",
                children: (e) =>
                    (0, E.jsx)("div", {
                        className: e,
                        children: (0, E.jsxs)("div", {
                            className: S9.Nr,
                            children: [
                                (0, E.jsxs)("div", {
                                    className: S9.Tp,
                                    children: [
                                        (0, E.jsx)("div", {
                                            className: S9.Qw,
                                            style: {
                                                backgroundImage: `url(${a ? "https://cdn.discordapp.com/assets/content/1858990b1e56c7d51e887008753104d4663d06c0e0e296d8fe0ea85c7e3e8341.png" : "https://cdn.discordapp.com/assets/content/7308e937fbd3074b9de0ebba1fa3571fa7b10a2b88f384b382f711bae99f40e6.png"})`,
                                            },
                                        }),
                                        (0, E.jsx)("div", { className: S9.$h }),
                                        (0, E.jsx)("div", { className: S9.Rv }),
                                        (0, E.jsx)("div", { className: S9.Lw }),
                                    ],
                                }),
                                (0, E.jsxs)("div", {
                                    className: S9.Mn,
                                    children: [
                                        (0, E.jsxs)("div", {
                                            className: S9.mY,
                                            children: [
                                                (0, E.jsx)("img", {
                                                    className: S9.wm,
                                                    src: "https://cdn.discordapp.com/assets/content/c5fab2b5d1155c4c9bc088b07f8563b6db8d2d08666357486efc5aea6e97fbea.png",
                                                    alt: "Xbox Game Pass",
                                                }),
                                                (0, E.jsx)(el.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: S9.DD,
                                                    children: m,
                                                }),
                                            ],
                                        }),
                                        (0, E.jsx)("div", { className: S9.lO, children: A }),
                                    ],
                                }),
                                a &&
                                    (0, E.jsxs)(E.Fragment, {
                                        children: [
                                            (0, E.jsx)("div", { className: S9.yF }),
                                            (0, E.jsxs)("div", {
                                                className: S9.sQ,
                                                children: [
                                                    (0, E.jsx)(cn.o, {
                                                        size: d ? "md" : "sm",
                                                        color: er.A.colors.ICON_STRONG,
                                                    }),
                                                    (0, E.jsx)(el.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-default",
                                                        children: j.intl.format(S7.default.mXY4Rb, {
                                                            onConnect: () => {
                                                                u(S1.Hx.CONNECT),
                                                                    (0, SK.A)({
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
var Tt = i(201718),
    Ti = i(321078),
    Tn = i(672130),
    Tl = i(379848),
    Ts = i(567910);
function Tr(e) {
    let { markAsDismissed: t } = e;
    return (
        S.useEffect(() => t(iT.i.UNKNOWN), [t]),
        (0, E.jsx)(lT.Lp, { className: Ts.Ad, text: j.intl.string(j.t.y2b7CA) })
    );
}
function Ta(e) {
    let { title: t, body: i, img: n, newIndicatorDismissibleContent: l, onClick: s } = e;
    return (0, E.jsxs)("div", {
        className: Ts.kL,
        children: [
            n,
            (0, E.jsxs)("div", {
                className: Ts.FS,
                children: [
                    (0, E.jsxs)("div", {
                        className: Ts.TK,
                        children: [
                            (0, E.jsx)(Tl.Ay, {
                                contentTypes: [l],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: i } = e;
                                    return t === l ? (0, E.jsx)(Tr, { markAsDismissed: i }) : null;
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
function To() {
    let e = ty.A.getArticleURL(U.MVz.PS_CONNECTION);
    return (0, E.jsx)(Ta, {
        title: j.intl.string(j.t.v20wwm),
        body: j.intl.format(j.t.lTZBit, { help_article: e }),
        img: (0, E.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
        newIndicatorDismissibleContent: eF.M.PS_ONE_WAY_RECONNECT,
        onClick: () => (0, SK.A)({ platformType: U.fg2.PLAYSTATION, location: "PS two way upsell" }),
    });
}
let Tu = "/assets/9df988a227916145.png";
function Td() {
    return (0, E.jsx)(Ta, {
        title: j.intl.string(S7.default["9cLtDI"]),
        body: j.intl.format(S7.default["D+kUbg"], { learnMoreLink: ty.A.getArticleURL(U.MVz.XBOX_GAME_PASS_PERKS) }),
        img: (0, E.jsx)("img", { src: Tu, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eF.M.XBOX_PERKS_RECONNECT_UPSELL,
        onClick: () => (0, SK.A)({ platformType: U.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
    });
}
function Tc() {
    let e = ty.A.getArticleURL(U.MVz.XBOX_CONNECTION);
    return (0, E.jsx)(Ta, {
        title: j.intl.string(j.t["2okkZV"]),
        body: j.intl.format(j.t.OnERSS, { help_article: e }),
        img: (0, E.jsx)("img", { src: Tu, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eF.M.XBOX_ONE_WAY_RECONNECT,
        onClick: () => (0, SK.A)({ platformType: U.fg2.XBOX, location: "Xbox two way upsell" }),
    });
}
var Tg = i(783419),
    Tm = i(534952),
    TA = i(230451),
    Th = i(113463);
function TE(e) {
    let t,
        { integration: i } = e,
        {
            isJoining: n,
            joinErrorMessage: l,
            showJoinErrorMessage: s,
        } = (0, g.cf)(
            [S6.A],
            () => ({
                isJoining: S6.A.isJoining(i.id),
                joinErrorMessage:
                    "" === S6.A.joinErrorMessage(i.id) ? j.intl.string(j.t.j2d6Km) : S6.A.joinErrorMessage(i.id),
                showJoinErrorMessage: void 0 !== S6.A.joinErrorMessage(i.id),
            }),
            [i.id],
        );
    return (
        null != (0, g.bG)([eh.A], () => eh.A.getGuild(i.guild.id), [i.guild.id]) ||
            (t = (0, E.jsx)(ek.$, {
                size: "sm",
                onClick: function () {
                    SB.A.joinServer(i.id, () => {});
                },
                disabled: n,
                variant: "primary",
                text: n ? j.intl.string(j.t.RXvQQu) : j.intl.string(j.t.XpeFYr),
            })),
        (0, E.jsxs)("div", {
            className: Th.iA,
            children: [
                (0, E.jsxs)("div", {
                    className: Th.XX,
                    children: [
                        (0, E.jsx)(mi.Ay, { size: mi.Ay.Sizes.SMALL, guild: i.guild, className: Th.$f }),
                        (0, E.jsxs)("div", {
                            className: Th.Vn,
                            children: [
                                (0, E.jsx)(el.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: i.guild.name,
                                }),
                                (0, E.jsx)(de.Anchor, {
                                    href: SX.A.get(i.type)?.getPlatformUserUrl?.(i.account),
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
                        className: Th.R,
                        children: l,
                    }),
            ],
        })
    );
}
function TS(e) {
    var t;
    let i,
        n,
        { account: l } = e,
        s =
            ((t = l.id),
            (i = (0, SJ.G)({ location: "useShouldShowXboxPerksReconnectUpsell" })),
            (n = (0, SQ.L)(l0.PremiumTypes.TIER_2)),
            !i && !n && !/^\d+$/.test(t));
    return l.type === U.fg2.XBOX && s
        ? (0, E.jsx)(Td, {})
        : l.twoWayLink
          ? null
          : l.type === U.fg2.XBOX
            ? (0, E.jsx)(Tc, {})
            : l.type === U.fg2.PLAYSTATION
              ? (0, E.jsx)(To, {})
              : null;
}
function TT(e) {
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
        R = (0, SY.ML)(u.type),
        L = SX.A.get(R);
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
            null != e && (h(e), SB.A.setVisibility(u.type, u.id, e), _(null)),
                null != t && (x(t), SB.A.setMetadataVisibility(u.type, u.id, t), C(null));
        }, [u]),
        (0, E.jsxs)("div", {
            className: Th.FI,
            children: [
                ((t = SX.A.get(u.type)),
                (i = SX.A.get(R)),
                (n = "1" === (u.metadata ?? {})[Tg.pK.TWITTER_VERIFIED]),
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
                    className: Th.Il,
                    children: [
                        (0, E.jsx)("img", {
                            alt: i.name,
                            className: Th.gj,
                            src: (0, gk.M)(d) ? i.icon.darkSVG : i.icon.lightSVG,
                        }),
                        (0, E.jsxs)("div", {
                            children: [
                                (0, E.jsxs)("div", {
                                    className: Th.$p,
                                    children: [
                                        (0, E.jsx)(el.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: Th.RW,
                                            children: u.name,
                                        }),
                                        null != l && (0, E.jsx)("div", { className: Th.cG, children: l }),
                                    ],
                                }),
                                (0, E.jsx)(el.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: Th.Au,
                                    children: i.migrationData?.getMigrationExperimentEnabled(
                                        "User Settings Connections Web",
                                    )
                                        ? j.intl.format(TA.default.Glhokn, { platformName: i.name })
                                        : i.name,
                                }),
                            ],
                        }),
                        (0, E.jsx)(en.D, {
                            className: Th.uH,
                            onClick: function () {
                                let e = SX.A.get(u.type);
                                (0, K.openModal)((t) =>
                                    (0, E.jsx)(rq.Modal, {
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
                                            SW.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, E.jsx)(aN.A, {
                                                children: j.intl.format(j.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": j.intl.string(j.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, E.jsx)(gF.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, E.jsx)(TS, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        i = null,
                        n = (0, SH.An)(t[Tg.pK.CREATED_AT], c);
                    switch (e.type) {
                        case U.fg2.REDDIT:
                            i = (0, SZ.xE)(t, Th.Nz);
                            break;
                        case U.fg2.STEAM:
                            i = (0, SZ.dy)(t, Th.Nz);
                            break;
                        case U.fg2.BLUESKY:
                        case U.fg2.TWITTER:
                        case U.fg2.MASTODON:
                            i = (0, SZ.ED)(t, Th.Nz);
                            break;
                        case U.fg2.EBAY:
                            i = (0, SZ.ub)(t, Th.Nz);
                            break;
                        case U.fg2.PAYPAL:
                            i = (0, SZ.gZ)(t, Th.Nz);
                            break;
                        case U.fg2.TIKTOK:
                            i = (0, SZ.HU)(t, Th.Nz);
                    }
                    null !== n &&
                        (null == i && (i = []),
                        i?.push(
                            (0, E.jsx)(
                                el.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: Th.M4,
                                    children: j.intl.format(j.t["9rfonh"], { date: n }),
                                },
                                "member-since",
                            ),
                        ));
                    let l = y.includes(e.id),
                        s = j.intl.string(j.t.wzzjk9);
                    if (null == i || 0 === i.length)
                        if (!0 !== SX.A.get(e.type).hasMetadata) return null;
                        else
                            (i = [
                                (0, E.jsx)(lT.Lp, { className: Th.Z3, text: j.intl.string(j.t.y2b7CA) }, "badge"),
                                (0, E.jsx)(
                                    el.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: Th.vt,
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
                                    className: Th.jy,
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
                                                      SB.A.refresh(e.type, e.id).finally(() => {
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
                        (0, E.jsx)("div", { className: Th.tJ, children: i })
                    );
                })(u),
                (U.txh.has(u.type) &&
                    (s = (0, E.jsx)(J.d, {
                        label: j.intl.string(j.t["+KCMSi"]),
                        checked: g,
                        onChange: function (e) {
                            m(e), SB.A.setFriendSync(u.type, u.id, e);
                        },
                    })),
                U.ewM.has(u.type) &&
                    (r = (0, E.jsx)(J.d, {
                        label: j.intl.format(j.t["6u6J0q"], { platform: L.name }),
                        checked: p,
                        onChange: function (e) {
                            f(e), SB.A.setShowActivity(u.type, u.id, e);
                        },
                    })),
                SX.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, E.jsx)(J.d, {
                        label: j.intl.string(j.t.FYKGsL),
                        checked: 1 === T,
                        onChange: function (e) {
                            let { verified: t } = u,
                                i = +!!e;
                            if (e && !t) {
                                C(i), (0, SK.A)({ platformType: u.type, location: "User Settings" });
                                return;
                            }
                            x(i), SB.A.setMetadataVisibility(u.type, u.id, i);
                        },
                        disabled: 1 !== A || null == u.metadata,
                    })),
                (0, E.jsxs)("div", {
                    className: Th.HZ,
                    children: [
                        (0, E.jsx)(J.d, {
                            label: j.intl.string(j.t.f7yOAX),
                            checked: 1 === A,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    i = +!!e;
                                if (e && !t) {
                                    _(i), (0, SK.A)({ platformType: u.type, location: "User Settings" });
                                    return;
                                }
                                h(i), SB.A.setVisibility(u.type, u.id, i);
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
                                  (0, SK.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                      })
                    : u.integrations.length > 0
                      ? (0, E.jsx)(l8.D, {
                            label: j.intl.string(j.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, E.jsx)(TE, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, E.jsx)(Sq.A, { partner: u.type }),
            ],
        })
    );
}
function Tx(e) {
    let { appIdentity: t, oauth2Token: i } = e;
    return null == i
        ? null
        : (0, E.jsxs)("div", {
              className: Th.FI,
              children: [
                  (function (e, t) {
                      let { application: i } = t,
                          n = na.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
                      return (0, E.jsxs)("div", {
                          className: Th.Il,
                          children: [
                              (0, E.jsx)("img", { alt: i.name, className: e7()(Th.gj, Th.sN), src: n }),
                              (0, E.jsxs)("div", {
                                  children: [
                                      (0, E.jsx)("div", {
                                          className: Th.$p,
                                          children: (0, E.jsx)(el.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: Th.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, E.jsx)(el.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: Th.Au,
                                          children: i.name,
                                      }),
                                  ],
                              }),
                              (0, E.jsx)(en.D, {
                                  className: Th.uH,
                                  onClick: () =>
                                      (0, Sk.d1)(i, t.scopes, () => {
                                          SV.A.delete(t.id);
                                      }),
                                  "aria-label": j.intl.string(j.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, E.jsx)(gF.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, i),
                  (0, E.jsx)("div", {
                      className: Th.HZ,
                      children: (0, E.jsx)(J.d, {
                          label: j.intl.string(j.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              Tt.A.updateApplicationIdentityConfig(i.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function Tp(e) {
    let t = SX.A.get(e);
    (0, SK.A)({ platformType: t.type }),
        G.default.track(U.HAw.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        });
}
function Tf() {
    let e = (0, SY.gn)(),
        t = (0, tr.A)((0, Tm.Gl)("NewConnectionsList"));
    return (0, E.jsxs)("div", {
        className: Th.lA,
        children: [
            t.map(
                (e) =>
                    null != e &&
                    (0, E.jsx)(
                        Tn.A,
                        { application: e, className: Th.__invalid_accountButton, innerClassName: Th.U$ },
                        e.id,
                    ),
            ),
            e
                .slice(0, 10 - t.length)
                .map((e) =>
                    (0, E.jsx)(
                        Sz.A,
                        { type: e.type, className: Th.__invalid_accountButton, innerClassName: Th.U$ },
                        e.type,
                    ),
                ),
            (0, E.jsx)(td.m, {
                text: j.intl.string(j.t.QqTz8b),
                children: (0, E.jsx)("div", {
                    className: e7()(Th.ej, Th.__invalid_accountButton),
                    children: (0, E.jsx)(SF.vN, {
                        children: (0, E.jsx)("button", {
                            className: e7()(Th.R8, Th.U$),
                            type: "button",
                            onClick: function () {
                                lm.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: Tp });
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
function TN(e) {
    let t,
        { fetching: i, accounts: n, appIdentities: l, authorizedApps: s, theme: r, locale: a } = e,
        u = (0, o.SV)("ConnectionsList"),
        d = S.useMemo(() => n.filter((e) => SX.A.isSupported(e.type)), [n]);
    return (
        (t = i
            ? (0, E.jsx)(dh.y, { type: dh.y.Type.SPINNING_CIRCLE })
            : 0 === d.length && 0 === l.length
              ? (0, E.jsx)(iy.pp, {
                    theme: r,
                    className: u ? Th.p$ : void 0,
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
                                Tx,
                                { appIdentity: e, oauth2Token: s.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        d.map((e, t) =>
                            (0, E.jsx)(
                                TT,
                                {
                                    theme: r,
                                    account: e,
                                    locale: a,
                                    onDisconnect: () =>
                                        (function (e) {
                                            let { type: t, id: i } = e;
                                            SB.A.disconnect(t, i);
                                        })(e),
                                },
                                `connection-${t}`,
                            ),
                        ),
                    ],
                })),
        (0, E.jsx)("div", { className: Th.V, children: t })
    );
}
let T_ = (0, a.E2)(u.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            let e = (0, o.SV)("NewConnectSection");
            return (0, E.jsx)(l8.D, {
                label: j.intl.string(e ? j.t["t+aGse"] : j.t.ZeDrUf),
                description: e ? void 0 : j.intl.format(j.t["oYc+Gz"], { privacyPolicyUrl: U.X7G.PRIVACY }),
                children: (0, E.jsx)(Tf, {}),
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
    TI = (0, a.E2)(u.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, g.bG)([eY.A], () => eY.A.hidePersonalInformation),
                t = (0, g.bG)([S6.A], () => S6.A.isFetching()),
                i = (0, g.bG)([S6.A], () => S6.A.getAccounts()),
                { authorizedAppsFetchState: n, authorizedApps: l } = (0, g.cf)([S$.default], () => ({
                    authorizedAppsFetchState: S$.default.getFetchState(),
                    authorizedApps: S$.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: s, filteredAppIdentities: r } = (0, Ti.A)(iA.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, cQ.Ay)(),
                o = (0, g.bG)([d1.default], () => d1.default.locale);
            return (S.useEffect(() => {
                n === S$.FetchState.NOT_FETCHED && SV.A.fetch();
            }, [n]),
            e)
                ? null
                : (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsx)(Te, {}),
                          (0, E.jsx)(TN, {
                              fetching: t || s || (r.length > 0 && n !== S$.FetchState.FETCHED),
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
            SB.A.fetch();
        },
        useSearchTerms: () => [
            j.intl.string(j.t["+/hZM/"]),
            j.intl.string(j.t.bsbMVz),
            j.intl.string(j.t.f7yOAX),
            j.intl.string(j.t.FYKGsL),
            j.intl.string(j.t["+KCMSi"]),
        ],
    });
var TC = i(206828);
function Tb() {
    let e = (0, g.bG)([S6.A], () => S6.A.getAccounts()),
        t = S.useMemo(
            () =>
                SX.A.filter(
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
        { canStartAuthorization: u, hasAlreadyLinked: d, fetched: c } = (0, TC.RD)(o),
        m =
            a?.type === U.fg2.RIOT_GAMES || a?.type === U.fg2.LEAGUE_OF_LEGENDS
                ? j.intl.string(TA.default["1S6oAo"])
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
                          text: j.intl.format(TA.default.wUXupS, {
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
let Tv = (0, a.zZ)(u.X.CONNECTIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["3fe7U5"]),
        useSubtitle: () => j.intl.string(j.t.U22vw6),
        useInlineNotice: Tb,
        buildLayout: () => [T_, TI],
    }),
    Ty = (0, a.zZ)(u.X.AUTHORIZED_APPS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        useSubtitle: () => j.intl.string(j.t.G9JfLg),
        buildLayout: () => [Sw],
        initialize: () => (
            SV.A.fetch(),
            () => {
                Sk.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    Tj = (0, a.t_)(u.X.CONNECTED_APPS_PANEL, {
        useTitle: () => j.intl.string(j.t.lrVuZO),
        useObscuredNotice: dm.L,
        buildLayout: () => [Tv, Ty],
    }),
    TO = (0, a.i4)(u.X.CONNECTED_APPS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.lrVuZO),
        icon: EG.q,
        buildLayout: () => [Tj],
    }),
    TR = (0, a.WI)(u.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => j.intl.string(j.t.BA9200),
        buildLayout: () => [i6, eG, iI, TO],
    });
var TL = i(631670),
    TD = i(619499),
    TP = i(836602),
    TG = i(591179),
    TM = i(854627),
    TU = i(975732),
    TV = i(761508),
    Tk = i(159001),
    Tw = i(344346),
    TF = i(919395),
    TB = i(699217);
function Tz(e) {
    let { title: t, children: i } = e;
    return (0, E.jsxs)("div", {
        children: [(0, E.jsx)(eV.D, { variant: "text-md/medium", className: TB.Vf, children: t }), i],
    });
}
function TX(e) {
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
        className: e7()(TB.UA, i),
        children: (0, E.jsxs)("div", {
            className: e7()(TB.yt, n),
            children: [
                (0, E.jsx)("div", {
                    className: e7()(TB.Fp, a && TB.Oz),
                    children: (0, E.jsxs)(E.Fragment, {
                        children: [
                            (0, E.jsx)(Tz, { title: s ?? j.intl.string(j.t.Zb06yP), children: l }),
                            null != r ? (0, E.jsx)(Tz, { title: j.intl.string(j.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, E.jsx)("div", { className: TB.oB, children: t }),
            ],
        }),
    });
}
var TY = i(986687),
    TH = i(101058),
    TK = i(321191),
    TW = i(696451),
    TZ = i(271078);
function Tq() {
    return (0, E.jsxs)("div", {
        className: TZ.p$,
        children: [
            (0, E.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: TZ.Sl }),
            (0, E.jsx)(eV.D, {
                className: TZ.h8,
                variant: "heading-lg/extrabold",
                children: j.intl.string(j.t.Z1OZCV),
            }),
            (0, E.jsx)(el.E, { className: TZ.h8, variant: "text-md/normal", children: j.intl.string(j.t.ZSt4Tt) }),
            (0, E.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: TZ.h8,
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
var TQ = i(81400),
    TJ = i(252732),
    T$ = i(355622),
    T0 = i(408018),
    T1 = i(138617),
    T2 = i(594943);
let T3 = (0, lJ.Ld)(),
    T5 = (0, ic.createChannelRecord)({ id: "1", type: U.rbe.DM }),
    T4 = (0, lJ.Ld)();
function T6(e) {
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
        [d, c] = S.useState((0, T0.x7)(o)),
        g = S.useRef(r),
        m = S.useRef(!1);
    return (
        S.useEffect(() => {
            if (g.current !== r) {
                let e = (0, T0.x7)(r);
                u(r), c(e);
            }
            g.current = r;
        }, [r]),
        S.useEffect(() => {
            void 0 !== l || o === r || m.current || (u(r), c((0, T0.x7)(r)));
        }, [l, r, o]),
        (0, E.jsxs)(ud.A, {
            title: t,
            titleId: T3,
            description: j.intl.string(j.t.Bbw6Ac),
            errors: i,
            disabled: a,
            children: [
                (0, E.jsx)(T1.Ay, {
                    "aria-describedby": T4,
                    "aria-labelledby": T3,
                    className: T2.i,
                    innerClassName: T2.Z,
                    maxCharacterCount: U.NA2,
                    onChange: function (e, t, i) {
                        t !== o && (u(t), c(i), n(t));
                    },
                    placeholder: s,
                    channel: T5,
                    textValue: o,
                    richValue: d,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: eq.USER_SETTINGS_MODAL_KEY,
                    type: T$.oU.PROFILE_BIO_INPUT,
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
                (0, E.jsx)(eo.A, { id: T4, children: j.intl.format(j.t["+DFxLc"], { maxLength: U.NA2 }) }),
            ],
        })
    );
}
var T8 = i(930861),
    T7 = i(821956),
    T9 = i(562819),
    xe = i(84540),
    xt = i(848575);
function xi(e) {
    let { user: t, guild: i, className: n, sectionTitle: l, forcedDivider: s = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, n1.Ay)(),
        o = (0, TF.a4)({ user: t, guildId: i?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, TF.CP)(i?.id),
        c = r ? T8.wL : oi.$n;
    return (0, E.jsx)(ud.A, {
        className: n,
        forcedDivider: s,
        hasBackground: !0,
        title: l,
        errors: d,
        children: (0, E.jsxs)("div", {
            className: xt.NC,
            children: [
                (0, E.jsx)(c, {
                    size: oi.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, T9.L)({ analyticsLocations: a, guild: i });
                    },
                    className: e7()({ [xt.yj]: r }),
                    children: j.intl.string(j.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: xt.DT,
                        children: (0, E.jsx)(ek.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, T7.uZ)(t, i) ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.OrokWm),
                            onClick: function () {
                                (0, xe.p)({ guildId: i?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var xn = i(339984),
    xl = i(831653);
let xs = [{ name: "gif", extensions: ["gif"] }];
function xr(e) {
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
        m = c ? T8.wL : oi.$n,
        A = S.useCallback(() => {
            (0, TJ.XD)({
                uploadType: xn.HL.AVATAR,
                analyticsSource: g,
                filters: u ? xs : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, g, u]);
    return (0, E.jsx)(ud.A, {
        className: a,
        title: l,
        errors: i,
        disabled: o,
        forcedDivider: d,
        children: (0, E.jsxs)("div", {
            className: xl.NC,
            children: [
                (0, E.jsx)(m, {
                    className: e7()({ [xl.yj]: c }),
                    size: oi.$n.Sizes.SMALL,
                    onClick: A,
                    children: s ?? j.intl.string(j.t["4OynCD"]),
                }),
                t &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: xl.DT,
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
var xa = i(248778),
    xo = i(479183);
function xu(e) {
    let { user: t, guildId: i, className: n } = e,
        l = uE.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: s } = (0, n1.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, TF.B0)(t, i),
        d = (0, xa.ux)("DisplayNameStylesSection"),
        [c, g] = (0, eB.kn)(d ? [eF.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        m = c === eF.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE,
        A = (0, S.useCallback)(() => {
            g(iT.i.TAKE_ACTION),
                G.default.track(U.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, n2.L)({ analyticsLocations: s, guildId: i });
        }, [s, i, g]),
        h = (0, S.useCallback)(() => {
            (0, xe.p)({ displayNameStyles: null }), G.default.track(U.HAw.DISPLAY_NAME_STYLES_REMOVED);
        }, []),
        T = (0, S.useCallback)(() => {
            (0, xe.p)({ guildId: i, displayNameStyles: null });
        }, [i]),
        x = void 0 !== o ? o : null != i ? a : r;
    return (0, E.jsx)(ud.A, {
        title: j.intl.string(n3.default["86GtGH"]),
        titleBadge: m ? (0, E.jsx)(lT.Lp, { text: j.intl.string(j.t.y2b7CA), className: xo.A }) : void 0,
        className: n,
        showPremiumIcon: l,
        errors: u,
        children: (0, E.jsxs)("div", {
            className: xo.N,
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
var xd = i(637193),
    xc = i(946801);
function xg(e) {
    let { user: t, guild: i, titleIcon: n } = e,
        { analyticsLocations: l } = (0, n1.Ay)(),
        s = null != i,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, TF.rv)(t, i?.id),
        d = S.useCallback(() => {
            (0, xd.p)({ analyticsLocations: l, guildId: i?.id });
        }, [l, i?.id]),
        c = S.useCallback(() => {
            (0, xe.p)({ guildId: i?.id, nameplate: null });
        }, [i?.id]);
    return (0, E.jsx)(ud.A, {
        title: j.intl.string(j.t.x5CoXR),
        titleIcon: n,
        errors: u,
        children: (0, E.jsxs)("div", {
            className: xc.u,
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
var xm = i(617255);
function xA(e) {
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
        g = d ? T8.wL : oi.$n;
    return (0, E.jsx)(ud.A, {
        className: s,
        title: j.intl.string(j.t.Vgdusv),
        showPremiumIcon: a,
        errors: i,
        disabled: r,
        forcedDivider: u,
        children: (0, E.jsxs)("div", {
            className: xm.NC,
            children: [
                (0, E.jsx)(g, {
                    className: e7()({ [xm.yj]: d }),
                    size: oi.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, TJ.XD)({ uploadType: xn.HL.BANNER, analyticsSource: c, guildId: l, isTryItOut: o }),
                    children: j.intl.string(j.t.N0bC3P),
                }),
                t &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: xm.DT,
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
var xh = i(617061),
    xE = i(869438);
function xS(e) {
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
        d = uE.Ay.canUsePremiumProfileCustomization(t),
        c = (0, TF.N2)({ user: t, guildId: i?.id }),
        { pendingProfileEffect: g, errors: m } = (0, TF.nZ)(i?.id);
    S.useEffect(() => {
        d &&
            G.default.track(U.HAw.PREMIUM_UPSELL_VIEWED, {
                type: l0.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            });
    }, [d, u]);
    let A = a ? T8.wL : oi.$n;
    return (0, E.jsx)(ud.A, {
        forcedDivider: r,
        borderType: cv.i.PREMIUM,
        hasBackground: !0,
        title: s,
        showBorder: o,
        errors: m,
        className: l,
        children: (0, E.jsxs)("div", {
            className: xE.NC,
            children: [
                (0, E.jsx)(A, {
                    size: oi.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, xh.W)({ analyticsLocations: u, guild: i, initialSelectedEffect: n });
                    },
                    className: e7()({ [xE.yj]: a }),
                    children: j.intl.string(j.t["/dRfCf"]),
                }),
                (void 0 === g ? null != c : null != g) &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: xE.DT,
                        children: (0, E.jsx)(ek.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != i ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.uMuafO),
                            onClick: function () {
                                (0, xe.p)({ guildId: i?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var xT = i(13875),
    xx = i(515727),
    xp = i(566935);
function xf(e) {
    let { user: t, guild: i, sectionTitle: n } = e,
        { analyticsLocations: l } = (0, n1.Ay)(),
        s = (0, xT.sk)("ProfileFrameSection"),
        r = (0, TF.Xf)({ user: t, guildId: i?.id }),
        { pendingProfileFrame: a, errors: o } = (0, TF.Tu)(i?.id),
        [u, d] = (0, eB.kn)([eF.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        c = u === eF.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return s
        ? (0, E.jsx)(ud.A, {
              showBorder: c,
              borderType: c ? cv.i.NEW_UPSELL : cv.i.PREMIUM,
              hasBackground: c,
              title: n,
              titleBadge: c ? (0, E.jsx)(lT.Lp, { text: j.intl.string(j.t.y2b7CA), className: xp.Ad }) : void 0,
              description: c ? j.intl.string(j.t.yMoMAt) : void 0,
              errors: o,
              children: (0, E.jsxs)("div", {
                  className: xp.NC,
                  children: [
                      (0, E.jsx)(ek.$, {
                          variant: "primary",
                          size: "sm",
                          text: j.intl.string(j.t["9/hmle"]),
                          onClick: function () {
                              (0, xx.w)({ analyticsLocations: l, guild: i }), d(iT.i.TAKE_ACTION);
                          },
                      }),
                      (void 0 === a ? null != r : null != a) &&
                          (0, E.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: xp.DT,
                              children: (0, E.jsx)(ek.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: null != i ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.nQBruk),
                                  onClick: function () {
                                      (0, xe.p)({ guildId: i?.id, profileFrame: null });
                                  },
                              }),
                          }),
                  ],
              }),
          })
        : null;
}
var xN = i(602853),
    x_ = i(654107),
    xI = i(999291),
    xC = i(101928),
    xb = i(317097),
    xv = i(508274),
    xy = i(919796),
    xj = i(426399);
function xO(e) {
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
        c = (0, xN.r)(er.A.colors.BACKGROUND_BASE_LOW).hex(),
        g = er.A.colors.BACKGROUND_MOD_MUTED.css,
        m = (0, TJ.sN)(n),
        A = (0, xb.Hl)(n),
        h = A === c ? g : A,
        T = m ? er.A.unsafe_rawColors.WHITE.css : er.A.unsafe_rawColors.PRIMARY_530.css,
        x = (0, xy.A)(a),
        p = (0, xy.A)(o),
        [f, N] = S.useState((0, dE.A)());
    return (
        S.useEffect(() => {
            (x !== a || p !== o) && N((0, dE.A)());
        }, [o, a, p, x]),
        (0, E.jsx)(ee.Y, {
            targetElementRef: d,
            positionKey: f,
            renderPopout: (e) =>
                (0, E.jsx)(xv.VN, {
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
                    className: e7()(xj.oP, { [xj.r9]: s }),
                    children: [
                        (0, E.jsx)(en.D, {
                            ...i,
                            tabIndex: s ? -1 : 0,
                            onClick: s ? U.tEg : t,
                            style: { backgroundColor: A, borderColor: h },
                            className: xj.nf,
                            "aria-label": j.intl.string(j.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, E.jsx)(uh.R, {
                                size: "custom",
                                className: xj.BW,
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
var xR = i(811160);
function xL(e) {
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
        c = (0, xI.Ay)(t.id, r),
        { primaryColor: g, secondaryColor: m } = (0, xC.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: n,
            isPreview: !0,
        }),
        A = uE.Ay.canUsePremiumProfileCustomization(t),
        h = null != i ? i : t.getAvatarURL(r, 80),
        S = (0, xN.r)(er.A.unsafe_rawColors.PRIMARY_530).hex(),
        T = (0, x_.rh)(h, S, !1);
    return null == g || null == m
        ? null
        : (0, E.jsx)(ud.A, {
              title: j.intl.string(j.t.DMeO2X),
              disabled: !A && !s,
              className: e7()(xR.__invalid_profileThemesSection, a),
              showPremiumIcon: o,
              forcedDivider: d,
              children: (0, E.jsxs)("div", {
                  className: xR.hd,
                  children: [
                      (0, E.jsx)("div", {
                          className: xR.YX,
                          children: (0, E.jsx)(xO, {
                              onChange: (e) => l([e, m]),
                              color: g,
                              suggestedColors: T,
                              showEyeDropper: !0,
                              label: (0, E.jsx)(el.E, {
                                  className: xR.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: j.intl.string(j.t.C3KTQk),
                              }),
                          }),
                      }),
                      (0, E.jsx)("div", {
                          className: xR.YX,
                          children: (0, E.jsx)(xO, {
                              onChange: (e) => l([g, e]),
                              color: m,
                              suggestedColors: T,
                              showEyeDropper: !0,
                              label: (0, E.jsx)(el.E, {
                                  className: xR.yz,
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
                              className: xR.WA,
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
function xD(e) {
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
    return (0, E.jsx)(ud.A, {
        title: t,
        titleId: o,
        errors: i,
        disabled: a,
        children: (0, E.jsx)(rQ.k, {
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
var xP = i(427262),
    xG = i(684732),
    xM = i(576705),
    xU = i(522334);
function xV(e) {
    let { errors: t, pendingNick: i, currentNick: n, username: l, user: s, guild: r } = e,
        a = (0, g.bG)([xM.A], () => xM.A.can(U.xBc.CHANGE_NICKNAME, r) || xM.A.can(U.xBc.MANAGE_NICKNAMES, r)),
        o = (0, SQ.L)(l0.PremiumTypes.TIER_2);
    return (0, E.jsxs)(ud.A, {
        title: j.intl.string(j.t.me1lRk),
        errors: t,
        children: [
            (0, E.jsx)(rQ.k, {
                value: i ?? n ?? "",
                placeholder: l,
                maxLength: U.d0r,
                onChange: function (e) {
                    (0, xe.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : j.intl.string(j.t.gzjxQi),
            }),
            o && (0, E.jsx)(xu, { user: s, guildId: r.id, className: xU.F }),
        ],
    });
}
var xk = i(816453);
let xw = "/assets/b25da78aa7949feb.png";
function xF(e) {
    let { user: t, showOverlay: i, children: n } = e,
        l = (0, cQ.Ay)(),
        { analyticsLocations: s } = (0, n1.Ay)(e4.A.PREMIUM_UPSELL_OVERLAY);
    return (S.useEffect(() => {
        i &&
            G.default.track(U.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: s,
                type: l0.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            });
    }, [i, s]),
    i)
        ? (0, E.jsxs)("div", {
              className: xk.ry,
              children: [
                  (0, E.jsx)("div", { children: n }),
                  (0, E.jsxs)("div", {
                      className: xk.Wc,
                      children: [
                          (0, E.jsx)("img", {
                              className: xk.Tn,
                              alt: j.intl.string(j.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case U.NJ8.DARK:
                                      case U.NJ8.DARKER:
                                      case U.NJ8.MIDNIGHT:
                                          return xw;
                                      case U.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return xw;
                                  }
                              })(l),
                          }),
                          (0, E.jsxs)("div", {
                              className: xk._9,
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
                          (0, E.jsx)(cb.A, {
                              size: oi.$n.Sizes.LARGE,
                              color: oi.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: uE.Ay.isPremium(t)
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
var xB = i(784075);
function xz() {
    let e = (0, g.bG)([iA.default], () => {
            let e = iA.default.getCurrentUser();
            return tZ()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        t = (0, SQ.L)(l0.PremiumTypes.TIER_2),
        i = (0, g.bG)([TP.A, eh.A], () => eh.A.getGuild(TP.A.selectedGuildId));
    tZ()(null != i, "guild should not be null");
    let {
            pendingAvatar: n,
            pendingNickname: l,
            pendingBanner: s,
            pendingBio: r,
            pendingPronouns: a,
            pendingThemeColors: o,
            errors: u,
        } = (0, g.cf)([TP.A], () => ({ ...TP.A.getPendingChanges(i.id), errors: TP.A.getErrors(i.id) })),
        d = (0, TH.V7)({ userId: e.id, image: n }),
        c = (0, TQ.EC)(i.id),
        m = (0, g.bG)([TW.Ay], () => (null == i.id ? null : TW.Ay.getMember(i.id, e.id))),
        A = (0, g.bG)([TK.A], () => TK.A.getGuildMemberProfile(e.id, i.id)),
        h = uE.Ay.canUsePremiumProfileCustomization(e),
        S = (0, TF.z5)(n, m?.avatar),
        T = (0, TF.Ac)(s, A?.banner),
        x = (0, xG.l)(o, A?.themeColors),
        p = A?.bio ?? "",
        f = A?.pronouns ?? "";
    return (0, E.jsxs)("div", {
        className: xB.Q,
        children: [
            (0, E.jsx)(
                xV,
                {
                    errors: u?.nick ?? c?.nick,
                    username: xP.Ay.getName(e),
                    pendingNick: l,
                    currentNick: m?.nick,
                    user: e,
                    guild: i,
                },
                "nick",
            ),
            (0, E.jsx)(
                xD,
                {
                    sectionTitle: j.intl.string(j.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, xe.p)({ guildId: i.id, pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: f,
                },
                "pronouns",
            ),
            (0, E.jsxs)(xF, {
                user: e,
                showOverlay: !h,
                children: [
                    (0, E.jsx)(
                        xr,
                        {
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t.lqaIxI),
                                    (0, E.jsx)(td.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(ua.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xB.a,
                                        }),
                                    }),
                                ],
                            }),
                            showRemoveAvatarButton: S,
                            onAvatarChange: function (e) {
                                if (null != i)
                                    return (0, TJ.rM)(e, m?.avatar, (e) => (0, xe.p)({ guildId: i.id, avatar: e }));
                            },
                            errors: u?.avatar,
                            guildId: i.id,
                            disabled: !h,
                        },
                        "avatar",
                    ),
                    (0, E.jsx)(
                        xi,
                        {
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t["7v0T9P"]),
                                    (0, E.jsx)(td.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(ua.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xB.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: e,
                            guild: i,
                        },
                        "decoration",
                    ),
                    !t && (0, E.jsx)(xu, { user: e, guildId: i.id }),
                    (0, E.jsx)(
                        xg,
                        {
                            user: e,
                            guild: i,
                            titleIcon: (0, E.jsx)(td.m, {
                                text: j.intl.string(j.t["5AFxuK"]),
                                children: (0, E.jsx)(ua.t, { size: "md", color: "currentColor", className: xB.a }),
                            }),
                        },
                        "nameplate",
                    ),
                    (0, E.jsx)(
                        xS,
                        {
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t.wR5wOo),
                                    (0, E.jsx)(td.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(ua.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xB.a,
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
                        xf,
                        {
                            user: e,
                            guild: i,
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t.GWrZOd),
                                    (0, E.jsx)(td.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(ua.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xB.a,
                                        }),
                                    }),
                                ],
                            }),
                        },
                        "frame",
                    ),
                    (0, E.jsx)(
                        xA,
                        {
                            showRemoveBannerButton: T,
                            errors: u?.banner,
                            onBannerChange: function (e) {
                                if (null != i)
                                    return (0, TJ.rM)(e, A?.banner, (e) => (0, xe.p)({ guildId: i.id, banner: e }));
                            },
                            guildId: i.id,
                            disabled: !h,
                        },
                        "banner",
                    ),
                    (0, E.jsx)(xL, {
                        user: e,
                        pendingAvatarSrc: d,
                        pendingColors: o,
                        onThemeColorsChange: (e) => (0, xe.p)({ guildId: i.id, themeColors: e }),
                        guildId: i.id,
                        showResetThemeButton: x,
                    }),
                    (0, E.jsx)(
                        T6,
                        {
                            placeholder: j.intl.string(j.t["/7NKgv"]),
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t.ZzAR2Y),
                                    (0, E.jsx)(td.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(ua.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xB.a,
                                        }),
                                    }),
                                ],
                            }),
                            onBioChange: (e) => (0, xe.p)({ guildId: i.id, bio: e }),
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
var xX = i(379550);
function xY(e) {
    (0, K.openModalLazy)(async () => {
        let { default: t } = await Promise.all([i.e("41509"), i.e("66901"), i.e("61129")]).then(i.bind(i, 475312));
        return (i) => (0, E.jsx)(t, { source: { ...e, page: U.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...i });
    });
}
function xH(e) {
    let { selectedGuild: t, onGuildChange: i } = e,
        { analyticsLocations: n } = (0, n1.Ay)(e4.A.USER_SETTINGS_GUILD_PROFILE),
        l = (0, g.bG)([iA.default], () => {
            let e = iA.default.getCurrentUser();
            return tZ()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        s = (0, g.bG)([TW.Ay], () => (null != t ? TW.Ay.getMember(t.id, l.id) : null)),
        r = (0, g.bG)([TK.A], () => !TK.A.isFetchingProfile(l.id, t?.id)),
        a = (0, g.bG)([eY.A], () => eY.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, g.cf)([TP.A], () => TP.A.getPendingChanges(t?.id)),
        c = (0, TH.V7)({ userId: l.id, image: o }),
        m = (0, TF.lw)({
            pendingValue: u,
            userValue: l?.collectibles?.nameplate,
            guildValue: s?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: A } = (0, TF.B0)(l, t?.id);
    return (S.useEffect(() => () => lm.h.wait(Tk.IM), []), a)
        ? (0, E.jsx)(dm.A, {})
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
                                  (0, E.jsx)(uu.A, { guildId: t.id, onChange: i }),
                                  (0, E.jsx)(TX, {
                                      profilePreviewTitle: (0, E.jsx)(eV.D, {
                                          variant: "heading-md/medium",
                                          className: xX.YV,
                                          children: j.intl.formatToPlainString(j.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, E.jsx)(TY.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: A,
                                          user: l,
                                          guild: t,
                                          canUsePremiumCustomization: uE.Ay.canUsePremiumProfileCustomization(l),
                                          onUpsellClick: xY,
                                          containerClassName: xX.ti,
                                      }),
                                      nameplatePreview: (0, E.jsx)(Tw.A, {
                                          ...d,
                                          pendingDisplayNameStyles: A,
                                          user: l,
                                          guildId: t?.id,
                                          nameplate: m,
                                          className: null == m ? xX.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, E.jsx)(xz, {}),
                                  }),
                              ],
                          })
                        : (0, E.jsx)(Tq, {}),
                ],
            })
          : (0, E.jsx)(dh.y, {});
}
var xK = i(903209),
    xW = i(834297);
function xZ(e) {
    let { children: t, notice: i } = e;
    return (0, E.jsxs)("div", { className: xW.r, children: [i, (0, E.jsx)("div", { children: t })] });
}
var xq = i(269115),
    xQ = i(823092),
    xJ = i(839534),
    x$ = i(379197),
    x0 = i(488430),
    x1 = i(457421),
    x2 = i(940622),
    x3 = i(25176),
    x5 = i(341206);
let x4 = function () {
    let e,
        t,
        i,
        n,
        { analyticsLocations: l } = (0, n1.Ay)(e4.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        s = S.useRef(null),
        {
            asset: r,
            popoutAsset: a,
            title: o,
            body: u,
            version: d,
            revertTextColor: c,
        } = ((e = (0, x2.mb)(x3.RN.UPSELL_BANNER)),
        (t = (0, x2.mb)(x3.RN.UPSELL_BANNER_POPOUT)),
        (i = (0, g.bG)([x1.A], () => x1.A.getMarketingBySurface(x$.R.EDIT_PROFILE_SETTINGS))),
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
            () => ({ ...n, type: x0.G.BANNER, asset: e ?? n.asset, popoutAsset: t ?? n.popoutAsset }),
            [e, t, n],
        )),
        { navigateWithValidation: m } = (0, xQ.L_)();
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
            className: x5.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, E.jsx)("div", {
                    className: x5.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, E.jsx)("img", { src: a, className: x5.Qw, alt: "" }),
                }),
                (0, E.jsxs)("div", {
                    className: x5.Em,
                    children: [
                        (0, E.jsx)(eV.D, {
                            variant: "heading-lg/extrabold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: x5.DD,
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
                            (0, xJ.Cz)({
                                analyticsLocations: l,
                                analyticsSource: e4.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
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
var x6 = i(451909),
    x8 = i(202639),
    x7 = i(400669),
    x9 = i(835071),
    pe = i(724651),
    pt = i(732280),
    pi = i(590180),
    pn = i(898461),
    pl = i(207803),
    ps = i(461797);
let pr = Object.keys(ps.jB);
function pa(e) {
    let t = null == e ? pr : pr.filter((t) => t !== e);
    return t[Math.floor(Math.random() * t.length)];
}
var po = i(764336),
    pu = i(461893);
function pd(e) {
    let { preset: t, onShuffle: i } = e,
        n = (0, g.bG)([ni.Ay], () => ni.Ay.useReducedMotion),
        l = (0, po.Xf)({ useReducedMotion: n }),
        { name: s, header: r } = S.useMemo(() => {
            let e = (0, ps.Wt)(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, E.jsxs)("div", {
        className: pu.kL,
        children: [
            (0, E.jsx)(en.D, {
                onClick: () => {
                    i(), l.startAnimation(!1);
                },
                className: pu.x6,
                "aria-label": j.intl.string(j.t["44yJxh"]),
                children: l.render(),
            }),
            (0, E.jsxs)(en.D, {
                onClick: () => {
                    i(), l.startAnimation(!1);
                },
                "aria-label": `${s}: ${j.intl.string(j.t["44yJxh"])}`,
                className: pu.Lt,
                children: [
                    (0, E.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: pu.L_ }),
                    (0, E.jsx)(el.E, {
                        className: pu._e,
                        variant: "text-sm/bold",
                        color: "text-overlay-light",
                        children: s,
                    }),
                ],
            }),
        ],
    });
}
var pc = i(410516),
    pg = i(811611),
    pm = i(515718),
    pA = i(507553);
function ph(e, t) {
    let i = pA.A.useField("scrollPosition"),
        n = (0, g.bG)([ni.Ay], () => ni.Ay.useReducedMotion);
    (0, S.useEffect)(() => {
        let l = e.current;
        if (null == l || i !== t) return;
        let s = requestAnimationFrame(() => {
            l.scrollIntoView({ behavior: n ? "auto" : "smooth" }), pA.A.setState({ scrollPosition: null });
        });
        return () => cancelAnimationFrame(s);
    }, [e, t, i, n]);
}
var pE = i(844222),
    pS = i(4542);
function pT(e) {
    let { user: t } = e,
        { reducedMotion: n } = S.useContext(pE.C),
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
        } = (0, g.cf)([TP.A], () => {
            let e = TP.A.getPendingChanges(),
                t = TP.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        p = (0, TH.V7)({ userId: t.id, image: A ?? l });
    return (0, E.jsx)(TY.A, {
        user: t,
        pendingPronouns: d,
        pendingBio: c,
        pendingBanner: h ?? s ?? i(636763),
        pendingDisplayNameStyles: x ?? o,
        pendingAvatar: p,
        pendingThemeColors: m ?? u,
        pendingAvatarDecoration: void 0 !== T ? T : r,
        pendingProfileEffect: a,
        avatarClassName: null != A || null != l || n.enabled ? void 0 : pS.WX,
        containerClassName: pS.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var px = i(530702);
function pp(e) {
    let { user: t, isVisible: i, shouldShow: n } = e,
        l = uE.Ay.isPremium(t),
        s = uE.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, g.cf)([TP.A], () => {
            let e = TP.A.getPendingChanges(),
                t = TP.A.getErrors(),
                i = TP.A.getTryItOutChanges();
            return { ...e, ...i, errors: t };
        }),
        { preset: c, onShuffle: m } = (function () {
            let e = (0, g.bG)([ni.Ay], () => ni.Ay.useReducedMotion),
                [t, i] = (0, S.useState)(pa()),
                {
                    banner: n,
                    themeColors: l,
                    avatarDecorationSkuId: s,
                    displayNameStyles: r,
                } = (0, S.useMemo)(() => {
                    let i = (0, ps.Wt)(t);
                    return {
                        banner: i.getBannerSrc(e),
                        themeColors: i.themeColors,
                        avatarDecorationSkuId: i.avatarDecorationSkuId,
                        displayNameStyles: i.displayNameStyles,
                    };
                }, [t, e]),
                a = (0, g.bG)([pi.A], () => {
                    let e = pi.A.getProduct(s);
                    return (0, pn.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, S.useEffect)(() => {
                (0, pl.w5)({ banner: n, themeColors: l, avatarDecoration: a, displayNameStyles: r });
            }, [n, l, a, r]);
            let o = (0, S.useCallback)(() => {
                let e = pa(t);
                i(e), G.default.track(U.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: e });
            }, [t]);
            return { preset: t, onShuffle: o };
        })(),
        A = S.useRef(null);
    ph(A, nH._F.TRY_IT_OUT);
    let { analyticsLocations: h, sourceAnalyticsLocations: T } = (0, n1.Ay)(e4.A.USER_SETTINGS_TRY_OUT_PREMIUM);
    function x(e) {
        e &&
            (d?.startsWith("https:") === !0
                ? fetch(d)
                      .then((e) => e.blob())
                      .then((e) => (0, pm.We)(e))
                      .then((e) => {
                          (0, xe.p)({ avatar: u, themeColors: o, banner: e });
                      })
                      .catch(() => {
                          (0, xe.p)({ avatar: u, themeColors: o });
                      })
                : null != d
                  ? (0, xe.p)({ avatar: u, themeColors: o, banner: d })
                  : (0, xe.p)({ avatar: u, themeColors: o }),
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
    let p = (0, pt.V)()?.subscription_trial?.sku_id === l0.pe.TIER_2,
        f = (0, pe.O)(),
        N = (0, pc.U9)(f, l0.pe.TIER_2);
    return n
        ? (0, E.jsx)(n1.f5, {
              value: h,
              children: (0, E.jsxs)(cv.A, {
                  ref: A,
                  className: px.MT,
                  type: cv.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, E.jsx)(TX, {
                          stickyPreview: !1,
                          layoutClassName: px.th,
                          profilePreviewTitle: (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(ua.t, { size: "md", color: "currentColor", className: px.PC }),
                                  j.intl.string(j.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, E.jsxs)(E.Fragment, {
                              children: [(0, E.jsx)(pd, { preset: c, onShuffle: m }), (0, E.jsx)(pT, { user: t })],
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
                                              className: px.h_,
                                              variant: "text-sm/normal",
                                              children: j.intl.string(j.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, E.jsx)(xL, {
                                      className: px.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, TH.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: pl.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, E.jsx)(xA, {
                                      className: px.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: pl.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !s &&
                                      (0, E.jsx)(xr, {
                                          className: px.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: pl.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: j.intl.string(j.t["7z0D1c"]),
                                          sectionTitle: j.intl.string(j.t.vtFfPX),
                                      }),
                                  (0, E.jsx)(xu, { user: t, className: px.fz }),
                                  !p &&
                                      (0, E.jsx)(el.E, {
                                          variant: "text-sm/normal",
                                          children: j.intl.string(j.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !p &&
                          (0, E.jsx)(x8.d, {
                              onSubscribeModalClose: x,
                              className: px.Kv,
                              showUpsell: !0,
                              text: j.intl.format(j.t.TmfgI2, {
                                  onClick: () => {
                                      (0, x9.K)({ onSubscribeFinish: x });
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
                                  (0, E.jsx)("div", { className: px.BU }),
                                  (0, E.jsx)(pg.Ay, {
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
var pf = i(814390),
    pN = i(909536),
    p_ = i(843282),
    pI = i(145497),
    pC = i(685073),
    pb = i(534400),
    pv = i(581781),
    py = i(743981),
    pj = i(217510);
let pO = (0, lJ.Ld)(),
    pR = S.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: i, onChange: n } = e,
            l = S.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            s = (0, g.bG)([iA.default], () => (0, pC.Zo)(iA.default.getCurrentUser()?.primaryGuild).guildId),
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
                        : (0, E.jsx)(pv.A, {
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
                        : (0, E.jsx)(pI.j, {
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
                        : (0, E.jsx)(pb.o9, {
                              guildId: t.id,
                              guildTag: i,
                              guildBadge: t.profile?.badge ?? void 0,
                              badgeSize: py.Sl.SIZE_16,
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
            ph(x, nH._F.GUILD_TAG),
            (0, E.jsxs)(ud.A, {
                title: j.intl.string(j.t.Pdd1nd),
                titleId: pO,
                ref: x,
                children: [
                    (0, E.jsx)(el.E, {
                        className: pj.VA,
                        variant: "text-sm/normal",
                        children: j.intl.string(j.t.mlZ6Jx),
                    }),
                    (0, E.jsx)(p_.Pw, {
                        className: pj.Lt,
                        optionClassName: pj.S0,
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
var pL = i(318785),
    pD = i(992526),
    pP = i(470739);
let pG = function () {
    return (0, pD.J9)({ location: "UserSettingsProfileCustomization" })
        ? (0, E.jsx)(ud.A, {
              title: j.intl.string(j.t.l6w3Vj),
              description: j.intl.string(j.t.joHqdj),
              children: (0, E.jsx)(ek.$, {
                  text: j.intl.string(j.t.wRraFx),
                  onClick: () => {
                      (0, pP._)();
                  },
                  size: "sm",
              }),
          })
        : null;
};
var pM = i(182817);
let pU = (0, lJ.Ld)();
function pV(e) {
    let t = (0, SQ.L)(l0.PremiumTypes.TIER_2);
    return (0, E.jsxs)(ud.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: j.intl.string(j.t["9AjdkD"]),
        titleId: pU,
        children: [
            (0, E.jsx)("div", {
                children: (0, E.jsx)(rQ.k, {
                    "aria-labelledby": pU,
                    placeholder: e.placeholder,
                    maxLength: U.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, E.jsx)(xu, { user: e.user, className: pM.F }),
        ],
    });
}
var pk = i(273151);
function pw(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: i } = e,
        n = L.m$.useSetting(),
        l = void 0 !== i ? i : n;
    return (0, E.jsx)("div", {
        className: pk.u,
        children: (0, E.jsx)(J.d, {
            label: j.intl.string(j.t["3cWDuO"]),
            description: l ? null : j.intl.formatToPlainString(j.t.aYhclf, { username: t }),
            checked: !l,
            onChange: (e) => {
                !e === n ? (0, TL._e)() : (0, xe.p)({ legacyUsernameDisabled: !e });
            },
        }),
    });
}
function pF(e) {
    let { user: t, savedUserColor: i, pendingColor: n, setPendingAccentColor: l } = e,
        s = t.getAvatarURL(null, 80),
        r = (0, xN.r)(er.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, x_.rh)(s, r, !1),
        o = (0, xb.LX)(a[0]);
    return (0, E.jsx)(ud.A, {
        title: j.intl.string(j.t["/X3fkf"]),
        children: (0, E.jsx)(xO, { onChange: (e) => l(e), color: n ?? i ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var pB = i(518477);
let pz = function () {
    let e = (0, g.bG)([ck.default], () => ck.default.getId());
    return (0, E.jsx)(ud.A, {
        title: j.intl.string(j.t.Jzj9q4),
        children: (0, E.jsx)(ek.$, {
            text: j.intl.string(j.t.Geikwq),
            onClick: () => {
                (0, TU.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [e4.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: pB.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var pX = i(577997);
function pY() {
    let e = (0, g.bG)([iA.default], () => {
            let e = iA.default.getCurrentUser();
            return tZ()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e;
        }),
        t = (0, g.bG)([TK.A], () => TK.A.getUserProfile(e.id)),
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
        } = (0, g.cf)([TP.A], () => {
            let e = TP.A.getPendingChanges(),
                t = TP.A.getErrors();
            return { ...e, errors: t };
        }),
        m = (0, TH.V7)({ userId: e.id, image: i }),
        A = (0, TQ.EC)(),
        h = uE.Ay.canUsePremiumProfileCustomization(e),
        S = (0, TF.z5)(i, e.avatar),
        T = (0, TF.Ac)(l, t?.banner),
        x = (0, xI.Ay)(e.id),
        p = x?.getLegacyUsername(),
        f = (c.global_name?.length ?? 0) > 0 ? c.global_name : (A?.nick ?? []),
        N = (c.bio?.length ?? 0) > 0 ? c.bio : (A?.bio ?? []),
        _ = (0, pL.b)();
    return (0, E.jsxs)("div", {
        className: pX.Q,
        children: [
            (0, E.jsx)(pV, {
                placeholder: e.username,
                errors: f,
                currentGlobalName: e.globalName,
                pendingGlobalName: n,
                onGlobalNameChange: (e) => (0, xe.p)({ globalName: e }),
                user: e,
            }),
            (0, E.jsx)(
                xD,
                {
                    sectionTitle: j.intl.string(j.t["+T3RI/"]),
                    errors: c.pronouns,
                    onPronounsChange: (e) => (0, xe.p)({ pronouns: e }),
                    pendingPronouns: r,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, E.jsx)(pz, {}),
            (0, E.jsx)(
                xr,
                {
                    onAvatarChange: (e) => {
                        (0, xe.p)({ avatar: e }), (0, TF.WU)(null == e ? "remove" : "set");
                    },
                    showRemoveAvatarButton: S,
                    errors: c.avatar,
                    sectionTitle: j.intl.string(j.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, E.jsx)(xi, { user: e, sectionTitle: j.intl.string(j.t["7v0T9P"]) }, "decoration"),
            (0, E.jsx)(xg, { user: e }),
            (0, E.jsx)(xS, { user: e, sectionTitle: j.intl.string(j.t.wR5wOo) }, "effect"),
            (0, E.jsx)(xf, { user: e, sectionTitle: j.intl.string(j.t.GWrZOd) }, "frame"),
            h
                ? (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsx)(
                              xA,
                              {
                                  showRemoveBannerButton: T,
                                  errors: c.banner,
                                  onBannerChange: (e) => (0, xe.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, E.jsx)(xL, {
                              user: e,
                              pendingAvatarSrc: m,
                              pendingColors: o,
                              onThemeColorsChange: (e) => (0, xe.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, E.jsx)(
                      pF,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: a,
                          setPendingAccentColor: (e) => (0, xe.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, E.jsx)(
                T6,
                {
                    sectionTitle: j.intl.string(j.t.ZzAR2Y),
                    errors: N,
                    onBioChange: (e) => (0, xe.p)({ bio: e }),
                    pendingBio: s,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            _.length > 0 &&
                (0, E.jsx)(pR, {
                    availablePrimaryGuilds: _,
                    pendingPrimaryGuildId: d,
                    onChange: (e) => (0, xe.p)({ primaryGuildId: e }),
                }),
            null != p && (0, E.jsx)(pw, { legacyUsername: p, pendingLegacyUsernameDisabled: u }, "legacy_username"),
            (0, E.jsx)(pG, {}, "badges"),
        ],
    });
}
function pH() {
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
var pK = i(157723);
function pW() {
    let e = (0, g.bG)([iA.default], () => {
            let e = iA.default.getCurrentUser();
            return tZ()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        t = (0, g.bG)([eY.A], () => eY.A.hidePersonalInformation),
        {
            pendingBio: i,
            pendingAvatar: n,
            pendingNameplate: l,
            showNotice: s,
            ...r
        } = (0, g.cf)([TP.A], () => ({ ...TP.A.getPendingChanges(), showNotice: TP.A.showNotice() })),
        a = (0, TH.V7)({ userId: e.id, image: n }),
        o = (0, TF.lw)({ pendingValue: l, userValue: e?.collectibles?.nameplate }),
        u = (0, pf.A)() && null != i ? x6.Ay.parse(void 0, i).content : i,
        d = uE.Ay.canUsePremiumProfileCustomization(e),
        c = (0, pN.St)("edit-profile-upsell"),
        { analyticsLocations: m } = (0, n1.Ay)(e4.A.USER_SETTINGS_USER_PROFILE);
    S.useEffect(() => () => lm.h.wait(TL.IM), []);
    let [A, h] = S.useState(!1),
        T = !d,
        x = S.useRef(null);
    return t
        ? (0, E.jsx)(dm.A, {})
        : (0, E.jsxs)(n1.f5, {
              value: m,
              children: [
                  (0, E.jsx)(x4, {}),
                  (0, E.jsx)(TX, {
                      profilePreview: (0, E.jsx)(TY.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: pH,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: pK.ti,
                      }),
                      nameplatePreview: (0, E.jsx)(Tw.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? pK.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, E.jsx)(pY, {}),
                  }),
                  (0, E.jsx)(xq.L, {
                      innerRef: x,
                      onChange: (e) => h(e),
                      threshold: 0.25,
                      active: T,
                      children: (0, E.jsx)("div", {
                          ref: x,
                          children: (0, E.jsx)(pp, { user: e, shouldShow: T, isVisible: A }),
                      }),
                  }),
                  T &&
                      !s &&
                      (0, E.jsx)(x8.d, {
                          className: pK.EL,
                          showUpsell: !A,
                          text: j.intl.format(j.t.TmfgI2, { onClick: () => (0, x9.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: c
                              ? (0, E.jsx)(x7.l, { size: "md", location: e4.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL })
                              : void 0,
                          button: (0, E.jsx)("div", {
                              className: pK.Xl,
                              children: (0, E.jsx)(ek.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      G.default.track(U.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          x?.current?.scrollIntoView({ behavior: "smooth" });
                                  },
                                  text: j.intl.string(j.t.uw9zI7),
                                  icon: ua.t,
                              }),
                          }),
                      }),
              ],
          });
}
var pZ = i(625494);
i(46121);
var pq = i(521078);
let pQ = { [nH.Eq.USER_PROFILE]: "main_profile_tab", [nH.Eq.GUILD]: "guild_profile_tab" },
    pJ = (0, a.E2)(u.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, g.bG)([l9.A, eE.Ay, TP.A], () => {
                    let e = TP.A.selectedGuildId ?? l9.A.getGuildId();
                    return null == e || TP._.has(e) ? eE.Ay.getFlattenedGuildIds().find((e) => !TP._.has(e)) : e;
                }),
                t = (0, g.bG)([eh.A], () => eh.A.getGuild(e)),
                i = (0, g.bG)([TP.A], () => TP.A.showNotice()),
                n = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()),
                l = pA.A.useField("subsection");
            return (
                S.useEffect(() => {
                    (0, s7._)(pQ[l]);
                }, [l]),
                S.useEffect(() => {
                    null != n && t?.id != null && (0, xK.A)(n.id, n.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, n]),
                (0, E.jsx)(xZ, {
                    children: (0, E.jsxs)(c5.F, {
                        component: (0, E.jsx)(eo.A, {
                            children: (0, E.jsx)(eV.D, {
                                variant: "heading-xl/normal",
                                children: j.intl.string(j.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, E.jsxs)(TV.V, {
                                className: pq.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: l,
                                onItemSelect: function (e) {
                                    if (l !== e) {
                                        if (i) {
                                            (0, s9.fO)({ duration: 300, intensity: 1.4 }),
                                                pZ._.dispatch(U.jej.EMPHASIZE_NOTICE);
                                            return;
                                        }
                                        e === nH.Eq.GUILD && null != t && (0, Tk.V2)(t.id),
                                            pA.A.setState({ subsection: e });
                                    }
                                },
                                children: [
                                    (0, E.jsx)(
                                        TV.V.Item,
                                        {
                                            className: pq.YU,
                                            id: nH.Eq.USER_PROFILE,
                                            children: j.intl.string(j.t["2p07FR"]),
                                        },
                                        nH.Eq.USER_PROFILE,
                                    ),
                                    (0, E.jsx)(
                                        TV.V.Item,
                                        {
                                            className: e7()(pq.YU, pq.HY),
                                            "aria-label": j.intl.string(j.t.kPHroX),
                                            id: nH.Eq.GUILD,
                                            children: j.intl.string(j.t.kPHroX),
                                        },
                                        nH.Eq.GUILD,
                                    ),
                                ],
                            }),
                            l === nH.Eq.GUILD
                                ? (0, E.jsx)(xH, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (i) {
                                              (0, s9.fO)({ duration: 300, intensity: 1.4 }),
                                                  pZ._.dispatch(U.jej.EMPHASIZE_NOTICE);
                                              return;
                                          }
                                          null != e && (0, Tk.JJ)(e.id);
                                      },
                                  })
                                : (0, E.jsx)(pW, {}),
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
    p$ = (0, a.zZ)(u.X.PROFILE_CATEGORY, { buildLayout: () => [pJ] });
var p0 = i(938706);
function p1() {
    let e = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: i } = (0, TM.A)({ userId: e?.id, size: nt._3.SIZE_48 });
    return null == e
        ? null
        : (0, E.jsxs)("div", {
              className: p0.a5,
              children: [
                  (0, E.jsx)(ne.eu, {
                      src: t,
                      avatarDecoration: i,
                      size: nt._3.SIZE_48,
                      "aria-label": j.intl.string(j.t.lqaIxI),
                  }),
                  (0, E.jsxs)("div", {
                      className: p0.FS,
                      children: [
                          (0, E.jsx)(el.E, {
                              color: "text-strong",
                              variant: "text-md/medium",
                              lineClamp: 1,
                              children: e.globalName ?? e.username,
                          }),
                          (0, E.jsxs)("div", {
                              className: p0.Fk,
                              children: [
                                  (0, E.jsx)(el.E, {
                                      variant: "text-sm/normal",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: j.intl.string(j.t.Ip9nBS),
                                  }),
                                  (0, E.jsx)(uh.R, { size: "xxs", color: "currentColor" }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
let p2 = (0, a.t_)(u.X.PROFILE_PANEL, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        notice: { stores: [TP.A], element: TD.A },
        initialize: () => () =>
            lm.h.wait(() => {
                (0, TL.F7)();
            }),
        buildLayout: () => [p$],
    }),
    p3 = (0, a.i4)(u.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        icon: p4,
        StronglyDiscouragedCustomComponent: p1,
        usePredicate: () => !(0, TG.X)("user_settings_sidebar"),
        buildLayout: () => [p2],
    }),
    p5 = (0, a.i4)(u.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        icon: p4,
        StronglyDiscouragedCustomComponent: p1,
        usePredicate: () => (0, TG.X)("user_settings_sidebar"),
        onClick: () => {
            let e = ck.default.getId();
            (0, TU.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function p4() {
    let e = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: i } = (0, TM.A)({ userId: e?.id, size: nt._3.SIZE_48 });
    return (0, E.jsx)(ne.eu, { src: t, avatarDecoration: i, size: nt._3.SIZE_20, "aria-hidden": !0 });
}
let p6 = (0, a.WI)(u.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [p3, p5] });
var p8 = i(98207),
    p7 = (i(204925), i(818348));
let p9 = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, K.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([i.e("69757"), i.e("19623"), i.e("21007")]).then(i.bind(i, 888363));
            return (i) => (0, E.jsx)(t, { claimRequired: e, ...i });
        },
        { onCloseRequest: e ? p7.tE : null, onCloseCallback: t },
    );
};
var fe = i(940856),
    ft = i(36149),
    fi = i(207560);
function fn(e) {
    let t = (0, fi.fk)(),
        i = (0, ft.b8)(),
        n = (0, ft.yM)(),
        l = (0, ft.Y2)();
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
var fl = i(516761);
function fs() {
    let e = j.intl.string(j.t.XxRj7f);
    return (0, E.jsxs)(el.E, {
        variant: "text-md/medium",
        children: [
            `${e} \u{2022} `,
            j.intl.format(fl.default.WM5adV, {
                handleOnHelpUrlHook: function () {
                    return window.open(ty.A.getArticleURL(U.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank");
                },
            }),
        ],
    });
}
let fr = (0, a.Tf)(u.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, {
        usePredicate: () => fn("edit"),
        useTitle: () => j.intl.string(j.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({
            type: h.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: fs,
        }),
        useLabel: () => j.intl.string(j.t.bt75uw),
        onClick: function () {
            (0, K.openModalLazy)(async () => {
                let { default: e } = await i.e("45361").then(i.bind(i, 151080));
                return (t) => (0, E.jsx)(e, { ...t });
            });
        },
    }),
    fa = (0, a.E2)(u.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, {
        usePredicate: () => fn("info"),
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
                                onClick: p7.tE,
                                text: j.intl.string(j.t.bt75uw),
                                "aria-hidden": !0,
                            }),
                        }),
                    ],
                }),
            });
        },
    });
var fo = i(31720),
    fu = i(847599);
let fd = (0, a.Tf)(u.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, {
        usePredicate: () => fn("verify"),
        useTitle: () => j.intl.string(j.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({
            type: h.fq.TEXT,
            text: (0, ft.yM)() ? j.intl.string(j.t.sK0dmH) : j.intl.string(j.t.lKDPGA),
        }),
        useLabel: function () {
            return (0, ft.yM)() ? j.intl.string(j.t["9KiIz6"]) : j.intl.string(j.t.DVywUB);
        },
        onClick: () => fo.A.showAgeVerificationGetStartedModal({ entryPoint: fu.q1.ACCOUNT_AGE_GROUP }),
    }),
    fc = (0, a.Tf)(u.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, g.bG)([iA.default], () => iA.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => j.intl.string(j.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({ type: h.fq.TEXT, text: j.intl.string(j.t.qxk9zo) }),
        useLabel: () => j.intl.string(j.t.BleMPB),
        onClick: () => p9(),
    });
function fg(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function fm(e) {
    let [t, i] = e.split("@");
    return `${"*".repeat(t.length)}@${i}`;
}
function fA(e) {
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
function fh() {
    let e = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()?.email);
    return null == e
        ? (0, E.jsx)(el.E, { variant: "text-md/medium", children: j.intl.string(j.t["8SfTN/"]) })
        : (0, E.jsx)(fA, {
              text: e,
              censor: fm,
              revealLabel: j.intl.string(j.t["Zvx+yV"]),
              hideLabel: j.intl.string(j.t.nqTD4d),
              redesign: !0,
          });
}
let fE = (0, a.Tf)(u.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, g.bG)([iA.default], () => iA.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => j.intl.string(j.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: h.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: fh }),
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
var fS = i(557722),
    fT = i(53516);
function fx() {
    let e = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, E.jsx)(el.E, { variant: "text-md/medium", children: j.intl.string(j.t.I5kDqj) })
        : (0, E.jsx)(Q.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, E.jsx)(fA, {
                  text: t,
                  censor: fg,
                  revealLabel: j.intl.string(j.t.eY3xlT),
                  hideLabel: j.intl.string(j.t["jllbv+"]),
                  redesign: !0,
              }),
          });
}
let fp = (0, a.Tf)(u.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, g.bG)([iA.default], () => iA.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => j.intl.string(j.t.kerONq),
    useAriaLabel: function () {
        return null == (0, g.bG)([iA.default], () => iA.default.getCurrentUser()?.phone)
            ? j.intl.string(j.t["SfUuE+"])
            : j.intl.string(j.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: h.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: fx }),
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
                      return (t) => (0, E.jsx)(e, { reason: fS.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: fT.V },
              )
            : (0, K.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([i.e("55682"), i.e("40933")]).then(i.bind(i, 660740));
                  return (t) => (0, E.jsx)(e, { ...t });
              });
    },
});
function ff() {
    let e = (0, g.bG)([iA.default], () => iA.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function fN() {
    let e = (0, TQ.EC)(),
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
                    children: (0, E.jsx)(rw.E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: er.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let f_ = (0, a.Tf)(u.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => j.intl.string(j.t.qqhR3L),
        useTrailingDecoration: () => ({
            type: h.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: fN,
        }),
        useLabel: () => j.intl.string(j.t.bt75uw),
        useAriaLabel: () => j.intl.string(j.t.JECa91),
        useSubtitle: () => (ff() ? j.intl.string(j.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: ff,
        onClick: function () {
            (0, K.openModalLazy)(async () => {
                let { default: e } = await Promise.all([i.e("80032"), i.e("20429"), i.e("43350")]).then(
                    i.bind(i, 667792),
                );
                return (t) => (0, E.jsx)(e, { ...t });
            });
        },
    }),
    fI = (0, a.zZ)(u.X.ACCOUNT_INFO_CATEGORY, {
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
                            button: { text: j.intl.string(j.t.lm1UKt), onClick: () => (0, fe.S)(e) },
                        }
                  : {
                        type: h.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        title: j.intl.string(j.t["/3qnL/"]),
                        text: j.intl.string(j.t.qKs3vg),
                        button: { text: j.intl.string(j.t["7psymi"]), onClick: () => p9() },
                    };
        },
        buildLayout: () => [f_, fc, fE, fp, fd, fr, fa],
    });
var fC = i(398177);
let fb = (0, a.Tf)(u.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
    useTitle: () => j.intl.string(j.t["CIGa+7"]),
    useLabel: () => j.intl.string(j.t.bt75uw),
    useAriaLabel: () => j.intl.string(j.t["FRep5/"]),
    useVariant: () => "secondary",
    onClick: () => {
        (0, K.openModal)((e) => (0, E.jsx)(fC.default, { ...e, onSuccess: () => e.onClose() }));
    },
});
var fv = i(200921);
let fy = [];
function fj() {
    fy = [];
}
class fO extends g.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return fy;
    }
}
let fR = new fO(lm.h, {
    LOGOUT: fj,
    LOGIN_SUCCESS: fj,
    FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessions: t } = e;
        fy = t.map((e) => ({ ...e, approx_last_used_time: new Date(e.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessionIdHashes: t } = e,
            i = [...fy],
            n = !1;
        for (let e of t) {
            let t = i.findIndex((t) => t.id_hash === e);
            t >= 0 && (i.splice(t, 1), (n = !0));
        }
        if (!n) return !1;
        fy = i;
    },
});
function fL() {
    let e = (0, g.cf)([fR], () => fR.getSessions());
    return S.useMemo(() => {
        let t = [...e],
            i = null,
            n = ck.default.getAuthSessionIdHash();
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
function fD(e) {
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? j.intl.string(j.t.TXCmfL) : rr()(e).fromNow();
}
var fP = i(176524),
    fG = i(646270),
    fM = i(738678),
    fU = i(53061);
function fV(e) {
    let { icon: t, label: i, subLabel: n, description: l, children: s, muted: r } = e;
    return (0, E.jsxs)(Q.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, E.jsx)(fP.A, { icon: t, color: r ? er.A.colors.ICON_MUTED : "currentColor" }),
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
function fk(e) {
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
                            return { text: e, icon: fG.u };
                        case "horizon os":
                            return { text: e, icon: fM.G };
                        default:
                            return { text: e, icon: tg.k };
                    }
                })(e.client_info?.os);
            return { location: i, platform: n, os: l, Icon: s, lastActive: t ? null : fD(e.approx_last_used_time) };
        })(t, i),
        o = [n, a].filter(N.Vq);
    return (0, E.jsx)(fV, {
        icon: r,
        label: s,
        subLabel: l,
        description: o.join(" \xb7 "),
        children:
            !i &&
            (0, E.jsx)(en.D, {
                className: fU.X,
                onClick: () => (0, fv.U0)(t.id_hash),
                "aria-label": j.intl.string(j.t.E4MJNt),
                children: (0, E.jsx)(gF.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function fw(e) {
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
let fF = (0, a.E2)(u.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            let { currentSession: e } = fL();
            return null == e
                ? (0, E.jsx)(dh.y, {})
                : (0, E.jsx)(fw, {
                      title: j.intl.string(j.t.LLS19o),
                      children: (0, E.jsx)(fk, { session: e, current: !0 }),
                  });
        },
        useSearchTerms: () => [],
    }),
    fB = (0, a.E2)(u.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = fL();
            return (0, E.jsx)(l8.D, {
                label: j.intl.string(j.t.Vij32M),
                description: j.intl.string(j.t.OTXyaf),
                children: (0, E.jsx)(ek.$, {
                    onClick: () => (0, fv.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: j.intl.string(j.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [j.intl.string(j.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = fL();
            return e.length > 0;
        },
    });
var fz = i(766928);
function fX() {
    return (0, E.jsx)(fV, {
        icon: fz.W,
        label: j.intl.string(j.t.iUa0sn),
        description: j.intl.format(j.t["044+8i"], {
            onClick: () =>
                (0, eq.openUserSettings)(u.X.ACCOUNT_PANEL, { analyticsLocations: [e4.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
let fY = (0, a.E2)(u.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = fL(),
                t = (0, g.bG)([iA.default], () => iA.default.getCurrentUser());
            return (0, E.jsxs)(fw, {
                title: j.intl.string(j.t.xx1MWc),
                children: [
                    e.map((e) => (0, E.jsx)(fk, { session: e }, e.id_hash)),
                    t?.mfaEnabled ? null : (0, E.jsx)(fX, {}),
                ],
            });
        },
        useSearchTerms: () => [j.intl.string(j.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = fL(),
                t = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    fH = (0, a.zZ)(u.X.SESSIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.mEndXM),
        useSubtitle: () => j.intl.string(j.t.b7ZpTM),
        initialize: () => {
            (0, fv.GY)();
        },
        buildLayout: () => [fF, fY, fB],
        useSearchTerms: () => [
            j.intl.string(j.t["+1h0k/"]),
            j.intl.string(j.t.LLS19o),
            j.intl.string(j.t.xx1MWc),
            j.intl.string(j.t.lSWsrd),
        ],
    }),
    fK = (0, a.t_)(u.X.SESSIONS_PANEL, {
        useTitle: () => j.intl.string(j.t.mEndXM),
        useObscuredNotice: dm.L,
        buildLayout: () => [fH],
    }),
    fW = (0, a.t0)(u.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [fK],
        initialize: () => {
            (0, fv.GY)();
        },
        useTrailingDecoration: () => {
            let { currentSession: e, otherSessions: t } = fL(),
                i = t.length + +(null != e);
            return {
                type: h.xn.TEXT,
                text: i > 0 ? j.intl.formatToPlainString(j.t.G7zwOk, { count: i }) : j.intl.string(j.t.MKDeyL),
            };
        },
    });
var fZ = i(464477);
function fq(e) {
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
function fQ() {
    return (0, u9.bG)([iA.default], () => {
        let e = iA.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
var fJ =
    (((r = {}).AVAILABLE = "available"),
    (r.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (r.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    r);
function f$() {
    let e = (0, u9.bG)([iA.default], () => iA.default.getCurrentUser()?.verified);
    return fZ.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function f0() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, u9.bG)([eh.A, xM.A, iA.default], () =>
        iA.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? j.intl.string(j.t.hxf9fX)
                : j.intl.string(j.t["3iKih7"])
            : eh.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(U.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        xM.A.can(U.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? j.intl.string(j.t.OYTCUh)
                  : j.intl.string(j.t.HC8uSZ)
              : null,
    );
}
var f1 = i(466034);
let f2 = (0, a.Tf)(u.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => j.intl.string(j.t.lQsY7B),
        useSubtitle: () => f0(!0),
        useDisabled: () => null !== f0(!0),
        useLabel: () => j.intl.string(j.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, g.bG)([ck.default], () => ck.default.hasTOTPEnabled()),
                t = f$() === fJ.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, s3.A)({
                title: j.intl.string(j.t["D+aE7g"]),
                subtitle: j.intl.string(j.t.EA4ZEk),
                variant: "critical",
                confirmText: j.intl.string(j.t.N86XcP),
                onConfirm: () => p8.A.disable(),
            }),
    }),
    f3 = (0, a.zZ)(u.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => j.intl.string(j.t.RumMFo),
        useSubtitle: () => j.intl.string(j.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, g.bG)([ck.default], () => ck.default.hasTOTPEnabled()),
                t = f$() === fJ.AVAILABLE;
            if (!e && t)
                return {
                    type: h.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: h.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: j.intl.string(j.t.cTNUeD),
                            onClick: f1.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (f$()) {
                case fJ.UNAVAILABLE_NO_CRYPTO:
                    return { type: h.lT.INLINE_NOTICE, noticeType: "info", text: j.intl.string(j.t.PhHhsj) };
                case fJ.UNAVAILABLE_UNVERIFIED:
                    return { type: h.lT.INLINE_NOTICE, noticeType: "warning", text: j.intl.string(j.t.uggF7o) };
                case fJ.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [f2],
    });
var f5 = i(670492),
    f4 = i(32880),
    f6 = i(663417),
    f8 = i(658675),
    f7 = i(900686);
function f9() {
    (0, K.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(i.bind(i, 662758));
        return (t) =>
            (0, E.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    p8.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
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
var Ne = i(808658);
function Nt(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function Ni() {
    let e = f5.A.getVerificationKey();
    try {
        await p8.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, SS.P0)({
            message: e.body?.message ?? j.intl.string(j.t.F8FvUy),
            type: Sx.Ck.FAILURE,
            id: "backup-code-regen-failed",
        });
    }
}
function Nn(e) {
    let {
            code: { code: t, consumed: i },
        } = e,
        n = Nt(t),
        l = S.useRef(null),
        s = (0, E.jsxs)(E.Fragment, {
            children: [(0, E.jsx)(f8.P, { checked: i }), (0, E.jsx)(el.E, { variant: "text-md/normal", children: n })],
        });
    return cX.p5
        ? (0, E.jsx)(en.D, {
              tag: "li",
              className: e7()(Ne.aY, Ne.vk),
              innerRef: l,
              onKeyDown: function (e) {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, cX.C)(n), l?.current?.focus());
              },
              onClick: function () {
                  (0, cX.C)(n),
                      (0, SS.P0)({ message: j.intl.string(j.t.mGZ66D), type: Sx.Ck.SUCCESS, id: "backup-code-copied" });
              },
              children: s,
          })
        : (0, E.jsx)("li", { className: Ne.aY, children: s });
}
let Nl = (0, a.zZ)(u.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.fC9qV0),
        useSubtitle: () =>
            (0, g.bG)([f5.A], () => f5.A.getBackupCodes().length > 0)
                ? j.intl.format(j.t.tp7zEK, {})
                : j.intl.string(j.t.LoOi4S),
        usePredicate: fQ,
        buildLayout: () => [Ns],
    }),
    Ns = (0, a.E2)(u.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.fC9qV0)],
        Component: function () {
            let e = (0, g.bG)([f5.A], () => f5.A.getBackupCodes()),
                t = S.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: i } = e;
                                return `* ${Nt(t)}` + (i ? ` (${j.intl.string(j.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, E.jsx)(ek.$, { text: j.intl.string(j.t.Jc2myK), size: "sm", variant: "secondary", onClick: f9 })
                : (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsx)("ul", {
                              className: Ne.E5,
                              children: e.map((e) => (0, E.jsx)(Nn, { code: e }, e.code)),
                          }),
                          (0, E.jsxs)(ol.e, {
                              size: "sm",
                              children: [
                                  (0, E.jsx)(f7.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, E.jsx)(ek.$, {
                                          text: j.intl.string(j.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: f4.s,
                                      }),
                                  }),
                                  (0, E.jsx)(ek.$, {
                                      text: j.intl.string(j.t["3x962E"]),
                                      variant: "secondary",
                                      icon: f6.f,
                                      onClick: Ni,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    Nr = (0, a.Tf)(u.X.SMS_AUTH_DISABLE_BUTTON, {
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
                        handleSubmit: p8.A.disableSMS,
                        title: j.intl.string(j.t.KLWnit),
                        children: j.intl.string(j.t["W0/Duf"]),
                    });
            }),
    }),
    Na = (0, a.zZ)(u.X.SMS_AUTH_CATEGORY, {
        useTitle: () => j.intl.string(j.t.wuHuI5),
        useSubtitle: () => (0, g.bG)([iA.default], () => fq(iA.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()?.hasFlag(U.nhx.MFA_SMS) ?? !1),
                t = (0, g.bG)([iA.default], () => null != fq(iA.default.getCurrentUser()));
            if (!e)
                return {
                    type: h.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: h.UV.BUTTON,
                            id: "sms-setup-button",
                            text: j.intl.string(j.t.Age7yU),
                            onClick: No,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = f$(),
                t = fQ(),
                i = (0, g.bG)([ck.default], () => ck.default.hasTOTPEnabled());
            return e === fJ.AVAILABLE && t && i;
        },
        buildLayout: () => [Nr],
    });
function No() {
    let e = iA.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            (t = { reason: fS.d.USER_SETTINGS_UPDATE, onAddedPhone: p8.A.enableSMS }),
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
                    { modalKey: fT.V },
                );
        } else p8.A.enableSMS();
}
var Nu = i(665671),
    Nd = i(442433),
    Nc = i(917136),
    Ng = i(976910),
    Nm = i(303778);
function NA(e) {
    let { credential: t } = e;
    return (0, E.jsxs)("li", {
        className: Nm.e,
        children: [
            (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(el.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, E.jsx)(el.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: j.intl.format(j.t["7JgxF5"], { lastUsed: fD(t.last_used) }),
                        }),
                ],
            }),
            (0, E.jsx)(rK.K, {
                icon: mF.j,
                variant: "icon-only",
                size: "sm",
                "aria-label": j.intl.string(j.t["+nrTbK"]),
                onClick: (e) => {
                    (0, Nd.L3)(e, async () => {
                        let { default: e } = await i.e("32529").then(i.bind(i, 41e3));
                        return (i) => (0, E.jsx)(e, { credential: t, ...i });
                    });
                },
            }),
        ],
    });
}
let Nh = (0, a.zZ)(u.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.IBq4Y3),
        useSubtitle: () => j.intl.string(j.t.yK9edS),
        useHeaderDecoration: function () {
            if (f$() === fJ.AVAILABLE)
                return {
                    type: h.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: h.UV.BUTTON,
                            id: "add-security-key-button",
                            text: j.intl.string(j.t["Tzs/fw"]),
                            icon: rV.j,
                            onClick: Nu.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (f$()) {
                    case fJ.UNAVAILABLE_NO_CRYPTO:
                        return { type: h.lT.INLINE_NOTICE, noticeType: "info", text: j.intl.string(j.t.bWCGI9) };
                    case fJ.UNAVAILABLE_UNVERIFIED:
                        return { type: h.lT.INLINE_NOTICE, noticeType: "warning", text: j.intl.string(j.t.uggF7o) };
                    case fJ.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [NE],
    }),
    NE = (0, a.E2)(u.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [j.intl.string(j.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, g.cf)([Ng.A], () => ({
                hasFetchedCredentials: Ng.A.hasFetchedCredentials(),
                credentials: Ng.A.getCredentials(),
            }));
            return (S.useEffect(() => {
                t || Nc.JQ();
            }, [t]),
            t)
                ? (0, E.jsx)(Q.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, E.jsx)(NA, { credential: e }, e.id)),
                  })
                : (0, E.jsx)(dh.y, {});
        },
    }),
    NS = (0, a.t_)(u.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => j.intl.string(j.t.m0FidJ),
        buildLayout: () => [Nh, f3, Na, Nl],
    }),
    NT = (0, a.t0)(u.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => {
            let e = fQ();
            return { type: h.xn.TEXT, text: e ? j.intl.string(j.t.lQsY7B) : j.intl.string(j.t.WsUuTt) };
        },
        buildLayout: () => [NS],
    }),
    Nx = (0, a.zZ)(u.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => j.intl.string(j.t["0iH2vc"]),
        buildLayout: () => [fb, NT, fW],
    });
var Np = i(308645),
    Nf = i(271995),
    NN = i(855267);
let N_ = (0, a.E2)(u.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["16r9jm"])],
        Component: NN.A,
    }),
    NI = (0, a.zZ)(u.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [N_] }),
    NC = (0, a.t_)(u.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => j.intl.string(j.t["16r9jm"]),
        buildLayout: () => [NI],
    }),
    Nb = (0, a.zZ)(u.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: () => j.intl.string(j.t["16r9jm"]),
        buildLayout: () => [Nv],
    }),
    Nv = (0, a.t0)(u.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: Nf.$b,
        useSubtitle: Nf.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: i } = (0, Nf._k)();
            return { type: h.Xy.ICON, icon: i, color: e, backgroundColor: t };
        },
        initialize: () => {
            Np.Yn();
        },
        buildLayout: () => [NC],
    });
var Ny = i(738188),
    Nj = i(834981),
    NO = i(987197),
    NR = i(822585),
    NL = i(840387),
    ND = i(465558),
    NP = i(602339);
let NG = (0, a.E2)(u.X.FAMILY_CENTER_SETTING, {
        Component: ND.p,
        useSearchTerms: () => [
            j.intl.string(NP.default.RZqaJn),
            j.intl.string(NP.default.bdBmqy),
            j.intl.string(NP.default["gVWG+6"]),
            j.intl.string(NP.default.ahKIJO),
            j.intl.string(NP.default["8SLtqb"]),
        ],
    }),
    NM = (0, a.zZ)(u.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [NG] }),
    NU = (0, a.t_)(u.X.FAMILY_CENTER_PANEL, {
        useTitle: () => j.intl.string(NP.default.RZqaJn),
        buildLayout: () => [NM],
    }),
    NV = (0, a.zZ)(u.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => j.intl.string(NP.default.RZqaJn),
        usePersistentBadge: function () {
            let e = (0, NO.f)(),
                t = (0, NR.L)()?.daysRemaining ?? null,
                i = e && null != t && t >= 0,
                n = (0, Nj.VT)();
            return S.useMemo(() => (i ? { badgeType: h.Xi.WARNING } : { badgeType: h.Xi.COUNT, count: n }), [i, n]);
        },
        buildLayout: () => [Nk],
    }),
    Nk = (0, a.t0)(u.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, Nj.Li)() ? j.intl.string(NP.default.IcMQUP) : j.intl.string(NP.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, NL.Z)(),
                t = (0, Nj.Li)();
            return e
                ? t
                    ? j.intl.string(NP.default.G8lHFU)
                    : j.intl.string(NP.default.uOLNEZ)
                : j.intl.string(NP.default.Z53oSM);
        },
        useLeadingDecoration: function () {
            let e = (0, NO.f)(),
                t = (0, NR.L)()?.daysRemaining ?? null;
            return !e || null == t || t < 0
                ? null
                : {
                      type: h.Xy.ICON,
                      icon: Ny.i,
                      color: er.A.colors.ICON_FEEDBACK_WARNING,
                      backgroundColor: er.A.colors.BACKGROUND_FEEDBACK_WARNING,
                  };
        },
        buildLayout: () => [NU],
    });
var Nw = i(425587),
    NF = i(662758);
function NB(e) {
    if (e.body.code === U.t02.INVALID_PASSWORD) throw e;
    (0, ot.A)({ title: j.intl.string(j.t.LX0nT8), subtitle: e.body.message });
}
async function Nz() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = iA.default.getCurrentUser();
    if (null == t) return;
    let i = [];
    try {
        i = (await Nw.A.fetchTeams(!0)).body;
    } catch {}
    i.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, ot.A)({
              title: j.intl.string(j.t["Y++oNe"]),
              subtitle: j.intl.format(j.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : eh.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, ot.A)({ title: j.intl.string(j.t.vJiTOL), subtitle: j.intl.string(j.t.UyVVan) })
          : t.isClaimed()
            ? (0, K.openModal)((t) =>
                  (0, E.jsx)(NF.default, {
                      ...t,
                      handleSubmit: (t) => (0, TL.U_)(t, e).then(U.tEg, NB),
                      title: e ? j.intl.string(j.t.xca2ts) : j.intl.string(j.t.goXv9g),
                      actionText: e ? j.intl.string(j.t["8lQ2rR"]) : j.intl.string(j.t.jf5GGb),
                      variant: "critical-primary",
                      children: e ? j.intl.string(j.t.FB4H1D) : j.intl.string(j.t.gk7h32),
                  }),
              )
            : (0, s3.A)({
                  title: j.intl.string(j.t.xca2ts),
                  subtitle: j.intl.string(j.t.FB4H1D),
                  confirmText: j.intl.string(j.t["8lQ2rR"]),
                  onConfirm: () => (0, TL.U_)("", !0),
              });
}
let NX = (0, a.Tf)(u.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => j.intl.string(j.t["gIpzR+"]),
        useSubtitle: () => j.intl.string(j.t.Bd6dOf),
        useLabel: () => j.intl.string(j.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => Nz(!0),
    }),
    NY = (0, a.Tf)(u.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => j.intl.string(j.t["p/Tjtp"]),
        useSubtitle: () => j.intl.string(j.t.YvDmKb),
        useLabel: () => j.intl.string(j.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => Nz(!1),
        usePredicate: () => {
            let e = (0, g.bG)([iA.default], () => iA.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    NH = (0, a.zZ)(u.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [NY, NX] }),
    NK = (0, a.t_)(u.X.ACCOUNT_PANEL, {
        useTitle: () => j.intl.string(j.t["ldCE/p"]),
        initialize: function () {
            return () => {
                p8.A.clearBackupCodes(), (0, TL.Uo)();
            };
        },
        useObscuredNotice: dm.L,
        buildLayout: () => [fI, Nx, Nb, NV, NH],
    }),
    NW = (0, a.i4)(u.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["ldCE/p"]),
        icon: hS.n,
        buildLayout: () => [NK],
    });
var NZ = i(323384);
let Nq = (0, a.zZ)(u.X.AUTHORIZED_APPS_CATEGORY, {
        buildLayout: () => [Sw],
        initialize: () => (
            SV.A.fetch(),
            () => {
                Sk.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    NQ = (0, a.t_)(u.X.AUTHORIZED_APPS_PANEL, {
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        useObscuredNotice: dm.L,
        buildLayout: () => [Nq],
    }),
    NJ = (0, a.i4)(u.X.AUTHORIZED_APPS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        icon: NZ.k,
        buildLayout: () => [NQ],
    });
var N$ = i(176781),
    N0 = i(888916),
    N1 = i(341923),
    N2 = i(572164),
    N3 = i(430795),
    N5 = i(915725),
    N4 = i(16590);
let N6 = (0, a.zD)(u.X.CLIPS_ENABLE_AUTOCLIPPING, {
        useTitle: () => j.intl.string(N4.default.j29uJx),
        useSubtitle: () => j.intl.format(N4.default.UCzGcQ, { learnMoreLink: ty.A.getArticleURL(U.MVz.CLIPS) }),
        useValue: () => (0, g.bG)([N5.Ay], () => N5.Ay.getEnableAutoclipping()),
        setValue: N3.uL,
        useDisabled: N0.Rt,
    }),
    N8 = (0, a.zD)(u.X.CLIPS_ENABLE_GAME_SIGNALS, {
        useTitle: () => j.intl.string(j.t.iV6KcI),
        useSubtitle: () => j.intl.string(j.t["dJ2tX+"]),
        useValue: () => (0, g.bG)([N5.Ay], () => N5.Ay.getSettings().clipSignals.enableGameSignals),
        usePredicate: () => !1,
        setValue: (e) => {
            let t = N5.Ay.getSettings().clipSignals;
            N3.PW({ ...t, enableGameSignals: e });
        },
        useDisabled: N0.A0,
    }),
    N7 = (0, a.zY)(u.X.CLIPS_AUTOCLIPPING_CARD, { buildLayout: () => [N6, N8], headerSettingKey: N6.key }),
    N9 = (0, a.zZ)(u.X.CLIPS_AUTOCLIPPING_CATEGORY, {
        useTitle: () => j.intl.string(N4.default.XWkJoi),
        useSubtitle: () => j.intl.string(N4.default["MJ/VsO"]),
        usePredicate: function () {
            let e = (0, N0.As)(),
                t = (0, N1.H)();
            return e && t;
        },
        usePersistentBadge: () => ({ badgeType: h.Xi.BETA }),
        useInlineNotice: () =>
            (0, N2.Et)()
                ? null
                : {
                      type: h.lT.INLINE_NOTICE,
                      noticeType: "info",
                      iconAlign: "center",
                      text: j.intl.string(N4.default.wUpqua),
                      button: {
                          variant: "primary",
                          size: "sm",
                          text: j.intl.string(N4.default.qGgW4M),
                          onClick: () => N3.yO({ clipsEnabled: !0, trackAnalytics: !0 }),
                      },
                  },
        buildLayout: () => [N7],
    });
var _e = i(974293),
    _t = i(458977),
    _i = i(486925),
    _n = i(696016);
let _l = (() => {
        let e = [_n.wN];
        for (let t = 10; t <= _n.qh; t += 10) e.push(t);
        return e[e.length - 1] !== _n.qh && e.push(_n.qh), e;
    })(),
    _s = (0, a.sN)(u.X.CLIPS_AUTO_CLIP_STORAGE_LIMIT, {
        usePredicate: () => !(0, _i.M2)(),
        useTitle: () => j.intl.string(j.t.yfsrDI),
        useSubtitle: () => j.intl.string(j.t.vlDHdC),
        minValue: _n.wN,
        maxValue: _n.qh,
        getInitialValue: () => N5.Ay.getSettings().maxAutoClips,
        onValueRender: (e) => `${Math.floor(e)}`,
        asValueChanges: (e) => N3.e6(Math.floor(e)),
        markers: _l,
        onMarkerRender: (e) => `${Math.floor(e)}`,
        useDisabled: N0.Rt,
    }),
    _r = (0, a.zZ)(u.X.CLIPS_AUTOMATIC_CLIPPING_CATEGORY, {
        useTitle: () => j.intl.string(j.t.sA0WKL),
        usePredicate: () => {
            let e = (0, N0.As)(),
                t = (0, _e.aJ)("ClipsAutomaticClippingCategory"),
                i = _t.A.useConfig({ location: "ClipsAutomaticClippingCategory" }).enableDistributedClips;
            return !e && (t || i);
        },
        buildLayout: () => [_s, N8],
    }),
    _a = [_n.zq, 25, 50, _n.Y2, _n.rv],
    _o = (0, a.sN)(u.X.CLIPS_BITRATE, {
        usePredicate: () => (0, _e.V0)("ClipsBitrateSetting"),
        useTitle: () => j.intl.string(j.t["8bZyov"]),
        useSubtitle: () => j.intl.string(j.t["h8DSx/"]),
        minValue: _n.zq,
        maxValue: _n.rv,
        useDefaultValue: () => _n.Y2,
        getInitialValue: () => N5.Ay.getSettings().clipsQuality.bitratePercent ?? _n.Y2,
        onValueRender: (e) => `${Math.round(e)}%`,
        setValue: (e) => {
            let { clipsQuality: t } = N5.Ay.getSettings();
            N3.GS({ ...t, bitratePercent: Math.round(e) });
        },
        markers: _a,
        onMarkerRender: (e) => `${Math.round(e)}%`,
        useDisabled: N0.Rt,
    });
var _u = i(226640);
let _d = (0, a.Hn)(u.X.CLIPS_FRAME_RATE, {
        useTitle: () => j.intl.string(j.t["2wScL1"]),
        useSubtitle: () => j.intl.string(j.t["Rf9+fy"]),
        useValue: () => (0, g.bG)([N5.Ay], () => N5.Ay.getSettings().clipsQuality.frameRate),
        setValue: (e) => {
            let { clipsQuality: t } = N5.Ay.getSettings();
            N3.GS({ ...t, frameRate: e });
        },
        useOptions: _u.Fz,
        useDisabled: N0.Rt,
    }),
    _c = (0, a.E2)(u.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
        useSearchTerms: () => [j.intl.string(j.t.SIxrIF)],
        usePredicate: () => (0, g.bG)([N5.Ay], () => N5.Ay.getHardwareClassification()) === _n.k9.BELOW_MINIMUM,
        Component: () => (0, E.jsx)(aN.A, { look: aN.k.WARNING, children: j.intl.string(j.t.SIxrIF) }),
    }),
    _g = (0, a.Hn)(u.X.CLIPS_LENGTH, {
        useTitle: () => j.intl.string(j.t.OgfUio),
        useSubtitle: () => j.intl.string(j.t.H7j4tY),
        useValue: () => (0, g.bG)([N5.Ay], () => N5.Ay.getSettings().clipsLength),
        setValue: (e) => N3.h$(e),
        useOptions: _u.Qu,
        useDisabled: N0.Rt,
    }),
    _m = (0, a.E2)(u.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [j.intl.string(j.t["Z+MfqT"])],
        Component: () => (0, E.jsx)(aN.A, { look: aN.k.INFO, children: j.intl.string(j.t["Z+MfqT"]) }),
    }),
    _A = (0, a.Hn)(u.X.CLIPS_RESOLUTION, {
        useTitle: () => j.intl.string(j.t.aFudZJ),
        useSubtitle: () => j.intl.string(j.t.nIrkW5),
        useValue: () => (0, g.bG)([N5.Ay], () => N5.Ay.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = N5.Ay.getSettings();
            N3.GS({ ...t, resolution: e });
        },
        useOptions: _u.gF,
        useDisabled: N0.Rt,
    }),
    _h = (0, a.zD)(u.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => j.intl.string(j.t["3zwNf6"]),
        useSubtitle: () => j.intl.string(j.t.m4Cjj9),
        useValue: () => (0, g.bG)([N5.Ay], () => N5.Ay.getSettings().remindersEnabled),
        setValue: (e) => N3.Mt(e),
        useDisabled: N0.Rt,
    }),
    _E = (0, a.zZ)(u.X.CLIPS_CAPTURE_SETTINGS_CATEGORY, {
        useTitle: () => j.intl.string(N4.default.TGwzMe),
        usePredicate: N0.As,
        buildLayout: () => [_c, _g, _d, _A, _o, _m, _h],
    }),
    _S = (0, a.zD)(u.X.CLIPS_DEBUG_TOOLTIPS, {
        useTitle: () => "Show clips debug tooltips",
        useSubtitle: () =>
            "Show overlay tooltips for the clips engine starting, enabled features, auto-clip signals, and save errors. Intended for development and testing.",
        useValue: () => (0, g.bG)([N5.Ay], () => N5.Ay.getSettings().debugTooltipsEnabled),
        setValue: (e) => N3.YP(e),
    }),
    _T = (0, a.zD)(u.X.CLIPS_SHOW_POV_CLIPS, {
        useTitle: () => "Show POV clips in Gallery",
        useSubtitle: () =>
            "Show clips automatically captured from your point of view when a teammate clips a shared moment. Dev-only for now.",
        useValue: () => (0, g.bG)([N5.Ay], () => N5.Ay.getSettings().showPovClipsInGallery),
        setValue: (e) => N3.Uh(e),
    }),
    _x = (0, a.zZ)(u.X.CLIPS_DEVELOPER_CATEGORY, {
        useTitle: () => "Developer",
        usePredicate: () =>
            (0, g.bG)([iA.default], () => {
                let e = iA.default.getCurrentUser();
                return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
            }),
        buildLayout: () => [_S, _T],
    });
var _p = i(417270),
    _f = i(645886);
let _N = (0, a.E2)(u.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [j.intl.string(j.t.pf54EU), j.intl.string(j.t["QyB/jK"])],
        Component: () => {
            let e = (0, g.bG)([eH.Ay], () => eH.Ay.getKeybindForAction(U.hCu.SAVE_CLIP, !0));
            tZ()(null != e, "Save clip keybind unset");
            let t = (0, N0.Rt)(),
                i = (0, N0.As)(),
                n = S.useRef(null),
                l = S.useCallback(
                    (t) => {
                        tq.A.setKeybind({ ...e, shortcut: t });
                    },
                    [e],
                ),
                s = S.useCallback(() => {
                    tq.A.setKeybind({ ...e, shortcut: (0, e0.OH)(_n.Ot) });
                }, [e]);
            return (0, E.jsx)(l8.D, {
                label: j.intl.string(j.t.pf54EU),
                description: j.intl.string(j.t["QyB/jK"]),
                layout: "horizontal-responsive",
                children: (0, E.jsx)("div", {
                    className: _f.g,
                    children: (0, E.jsx)(tQ.A, {
                        ref: n,
                        disabled: t,
                        defaultValue: e.shortcut,
                        onChange: l,
                        trailingActions: i
                            ? (0, E.jsxs)(E.Fragment, {
                                  children: [
                                      (0, E.jsx)(td.m, {
                                          text: j.intl.string(N4.default.bUtubv),
                                          position: "top",
                                          ariaHidden: !0,
                                          children: (0, E.jsx)(rK.K, {
                                              icon: rk.F,
                                              size: "sm",
                                              variant: "secondary",
                                              disabled: t,
                                              "aria-label": j.intl.string(N4.default.bUtubv),
                                              onClick: (e) => {
                                                  e.stopPropagation(), n.current?.toggleRecordMode();
                                              },
                                          }),
                                      }),
                                      (0, E.jsx)(td.m, {
                                          text: j.intl.string(N4.default.Kyk1Tp),
                                          position: "top",
                                          ariaHidden: !0,
                                          children: (0, E.jsx)(rK.K, {
                                              icon: _p.m,
                                              size: "sm",
                                              variant: "secondary",
                                              disabled: t,
                                              "aria-label": j.intl.string(N4.default.Kyk1Tp),
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
    __ = (0, a.E2)(u.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [j.intl.string(j.t["0U/hj7"]), j.intl.string(j.t["5zxkdo"])],
        usePredicate: au.BW,
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
                    className: _f.g,
                    children: (0, E.jsx)(tQ.A, { defaultValue: t.shortcut, onChange: i }),
                }),
            });
        },
    }),
    _I = (0, a.zD)(u.X.CLIPS_ENABLE, {
        useTitle: () => j.intl.string(j.t.h8rgrK),
        useSubtitle: () => j.intl.string(j.t["4Qw3NO"]),
        useValue: () => (0, N2.Et)(),
        setValue: (e) => N3.yO({ clipsEnabled: e, trackAnalytics: !0 }),
    });
var _C = i(915618);
let _b = (0, a.zD)(u.X.CLIPS_ENABLE_DECOUPLED_CLIPPING, {
        useTitle: () => j.intl.string(j.t.yXvykv),
        useSubtitle: () => j.intl.string(j.t.YP3ujk),
        useValue: N2.XT,
        setValue: (e) => N3.fd({ enabled: e, trackAnalytics: !0 }),
        usePredicate: function () {
            let e = (0, eZ.isWindows)(),
                t = (0, _C.A)(rF.Ay),
                i = (0, N0.As)();
            return e && t && !i;
        },
        useDisabled: N0.Rt,
    }),
    _v = (0, a.zY)(u.X.CLIPS_GENERAL_CARD, { buildLayout: () => [_I, _b, _N, __], headerSettingKey: _I.key }),
    _y = (0, a.zZ)(u.X.CLIPS_GENERAL_CATEGORY, {
        useTitle: () => j.intl.string(j.t["rWKv+e"]),
        useSubtitle: () => j.intl.format(N4.default["dh7g+S"], { learnMoreLink: ty.A.getArticleURL(U.MVz.CLIPS) }),
        usePredicate: N0.As,
        buildLayout: () => [_v],
    }),
    _j = (0, a.E2)(u.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [j.intl.string(j.t.s4773E), j.intl.string(j.t.svjwGh)],
        Component: () => {
            let e = (0, g.bG)([N5.Ay], () => N5.Ay.getSettings().storageLocation),
                t = (0, N0.Rt)(),
                i = S.useRef(!1);
            async function n() {
                if (!t && !i.current) {
                    i.current = !0;
                    try {
                        let e = await sI.A.fileManager.showOpenDialog({
                            properties: ["openDirectory", "createDirectory"],
                        });
                        e.length > 0 && N3.HU(e[0]);
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
                        (0, E.jsx)(rQ.k, {
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
                            text: j.intl.string(N4.default.yQAN6B),
                        }),
                    ],
                }),
            });
        },
    }),
    _O = (0, a.zZ)(u.X.CLIPS_RECORDING_CATEGORY, {
        useTitle: () => j.intl.string(j.t.iIwmV5),
        usePredicate: () => !(0, N0.As)(),
        buildLayout: () => [_m, _c, _I, _b, _h, _g, _A, _d, _N, __, _j],
    }),
    _R = (0, a.zZ)(u.X.CLIPS_STORAGE_CATEGORY, {
        useTitle: () => j.intl.string(N4.default["0Q+pdZ"]),
        usePredicate: N0.As,
        buildLayout: () => [_j, _s],
    }),
    _L = (0, a.t_)(u.X.CLIPS_PANEL, {
        useTitle: () => j.intl.string(j.t.z2jK6X),
        usePredicate: au.sw,
        buildLayout: () => [_y, N9, _E, _R, _O, _r, _x],
    }),
    _D = (0, a.i4)(u.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.z2jK6X),
        icon: N$.x,
        buildLayout: () => [_L],
    }),
    _P = (0, a.zZ)(u.X.CONNECTIONS_ADD_CONNECTIONS_CATEGORY, { buildLayout: () => [T_], useInlineNotice: Tb }),
    _G = (0, a.zZ)(u.X.CONNECTIONS_CONNECTED_ACCOUNTS_CATEGORY, { buildLayout: () => [TI] }),
    _M = (0, a.t_)(u.X.CONNECTIONS_PANEL, {
        useTitle: () => j.intl.string(j.t["3fe7U5"]),
        useObscuredNotice: dm.L,
        buildLayout: () => [_P, _G],
    }),
    _U = (0, a.i4)(u.X.CONNECTIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["3fe7U5"]),
        icon: EG.q,
        buildLayout: () => [_M],
    });
var _V = i(875444);
function _k(e, t) {
    let i = (0, g.bG)([S$.default], () => S$.default.getFetchState()),
        n = (0, g.bG)([S$.default], () =>
            e ? S$.default.getNewestTokensForNonChildrenApplications() : S$.default.getNewestTokens(),
        ),
        l = S.useMemo(
            () => (null == n ? [] : n.filter((e) => (0, _V.O)(e.application, e.scopes)).map((e) => e.application)),
            [n],
        );
    return (
        S.useEffect(() => {
            t || SV.A.fetch();
        }, [t]),
        { showLoadingIndicator: i !== S$.FetchState.FETCHED && (null == n || 0 === n.length), slayerSdkApplications: l }
    );
}
var _w = i(390646);
function _F(e) {
    let { applications: t } = e,
        i = S.useMemo(() => t.sort((e, t) => dv.default.compare(t.id, e.id)), [t]),
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
                            children: (0, E.jsx)("img", { src: a, "aria-label": s, className: _w.Kk }),
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
                                className: _w.lK,
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
        className: _w.wx,
        children: [
            (0, E.jsxs)("div", {
                className: _w.kX,
                children: [
                    (0, E.jsx)(el.E, { variant: "text-md/normal", color: "text-strong", children: n }),
                    (0, E.jsxs)(en.D, {
                        onClick: function () {
                            (0, eq.openUserSettings)(u.X.AUTHORIZED_APPS_PANEL);
                        },
                        className: _w.bJ,
                        children: [
                            (0, E.jsx)(el.E, {
                                variant: "text-xs/normal",
                                color: "interactive-text-default",
                                children: j.intl.format(j.t.oYaYOe, {}),
                            }),
                            (0, E.jsx)(tM._, {
                                size: "xxs",
                                color: er.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                className: _w.g7,
                            }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)("div", { className: _w.yF }),
            (0, E.jsx)("div", { className: _w.lJ, children: l }),
        ],
    });
}
function _B() {
    return (0, E.jsxs)("div", {
        className: _w.do,
        children: [
            (0, E.jsx)(el.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: _w.xV,
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
function _z(e) {
    let { applications: t } = e;
    return t.length > 0 ? (0, E.jsx)(_F, { applications: t }) : (0, E.jsx)(_B, {});
}
let _X = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES, {
    useSearchTerms: () => [j.intl.string(j.t.YpCiMt)],
    Component: function () {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = _k(!0);
        return e ? (0, E.jsx)(dh.y, {}) : (0, E.jsx)(_z, { applications: t });
    },
});
function _Y() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = _k(!0, !0);
    return !e && t.length > 0;
}
let _H = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => ((0, o.SV)("GameFriendDMSetting") ? j.intl.string(j.t.W8JtfT) : j.intl.string(j.t.XpBObB)),
        useSubtitle: () =>
            (0, o.SV)("GameFriendDMSetting")
                ? j.intl.string(j.t.a99KKy)
                : j.intl.format(j.t.oZsHTD, { helpdeskArticle: ty.A.getArticleURL(U.MVz.SLAYER_GAME_FRIENDS) }),
        useSearchTerms: () => [j.intl.string(j.t["Uv/eTx"])],
        useValue: () => L.Zk.useSetting(),
        setValue: (e) => L.Zk.updateSetting(e),
        usePredicate: _Y,
    }),
    _K = (0, a.Qx)(u.X.CONTENT_AND_SOCIAL_IN_GAME_DMS_SETTING, {
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
        usePredicate: _Y,
    }),
    _W = (0, a.zZ)(u.X.CONNECTED_GAMES_CATEGORY, {
        useSearchTerms: () => [j.intl.string(j.t.YpCiMt)],
        buildLayout: () => [_X, _H, _K],
    });
var _Z = i(687123),
    _q = i(444802),
    _Q = i(558001);
i(866945);
var _J = i(835002);
function _$() {
    let e = (0, _q.WX)();
    S.useEffect(() => {
        (0, _Q.N)(_J.YA.AGE_CONFIRMATION_NOTICE, _J.YX.VIEWED);
    }, []);
    let t = S.useCallback(() => {
            window.open(ty.A.getArticleURL(e), "_blank"), (0, _Q.N)(_J.YA.AGE_CONFIRMATION_NOTICE, _J.YX.LEARN_MORE);
        }, [e]),
        i = S.useCallback(() => {
            fo.A.showAgeVerificationGetStartedModal({ entryPoint: fu.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, _Q.N)(_J.YA.AGE_CONFIRMATION_NOTICE, _J.YX.CONFIRM_AGE);
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
        children: j.intl.format(j.t.mFgsfg, { hook: (e, i) => (0, E.jsx)(de.Anchor, { onClick: t, children: e }, i) }),
    });
}
function _0() {
    let e = (0, fi.aX)(_Z.t.REACTIVE_CHECK),
        t = (0, ft.b8)();
    return S.useMemo(() => {
        if (e && !t) return { type: h.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: _$ };
    }, [e, t]);
}
var _1 = i(308528),
    _2 = i(171316);
function _3() {
    let e = (0, _2.uM)(),
        t = (0, Nj.vx)(),
        i = S.useCallback(() => {
            (0, lZ.default)(),
                _1.A.openPrivateChannel({ recipientIds: t }),
                (0, _Q.N)(_J.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _J.YX.LEARN_MORE);
        }, [t]),
        n = S.useCallback(() => {
            (0, _Q.N)(_J.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _J.YX.VIEWED);
        }, []);
    return S.useMemo(() => {
        if (e)
            return {
                type: h.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: n,
                text: j.intl.format(NP.default.i284fU, {
                    hook: (e, t) => (0, E.jsx)(de.Anchor, { onClick: i, children: e }, t),
                    count: t.length,
                }),
            };
    }, [i, e, t.length, n]);
}
var _5 = i(323073),
    _4 = i(386171),
    _6 = i(96607);
let _8 = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_DM_SETTING, {
        useTitle: () =>
            (0, o.SV)("AgeRestrictedDMCommandsSetting") ? j.intl.string(j.t.gvC6q7) : j.intl.string(j.t.XahVjj),
        useSubtitle: () =>
            (0, o.SV)("AgeRestrictedDMCommandsSetting") ? j.intl.string(j.t.zirUC1) : j.intl.string(j.t.R9fXyS),
        useValue: _4.hT,
        useDisabled: function () {
            let e = (0, _6.A)() ?? !0,
                t = (0, _5.sP)(),
                i = (0, ft.yM)();
            return (!t || !!i) && !e;
        },
        setValue: function (e) {
            (0, _5.p5)() && e
                ? fo.A.showAgeVerificationGetStartedModal({ entryPoint: fu.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : L.Qe.updateSetting(e);
        },
    }),
    _7 = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => j.intl.string(j.t["L+yTsa"]),
        useSubtitle: () =>
            (0, o.SV)("AgeRestrictediOSSetting") ? j.intl.string(j.t["t6i/jW"]) : j.intl.string(j.t.hiM8pU),
        useValue: _4.tI,
        useDisabled: function () {
            let e = (0, _6.A)() ?? !0,
                t = (0, _5.sP)(),
                i = (0, ft.yM)();
            return S.useMemo(() => (!t || !!i) && !e, [t, e, i]);
        },
        setValue: function (e) {
            (0, _5.p5)() && e
                ? fo.A.showAgeVerificationGetStartedModal({ entryPoint: fu.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : L.Kg.updateSetting(e);
        },
    }),
    _9 = (0, a.AK)(u.X.CONTENT_FILTERS_APPEARANCE_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.hOXd45),
        destinationKey: u.X.APPEARANCE_MESSAGES_CATEGORY,
    }),
    Ie = (0, a.gN)(u.X.CONTENT_FILTERS_RELATED_SETTINGS, { buildLayout: () => [_9] });
i(667532);
var It = i(390248),
    Ii = i(632119),
    In = i(945276),
    Il = i(389737),
    Is = i(566769);
function Ir() {
    let e,
        t = (0, In.A)() ?? !0,
        i = (0, _2.uM)(),
        n = (0, _2.uM)(),
        {
            explicitContentGuilds: l,
            explicitContentFriendDm: s,
            explicitContentNonFriendDm: r,
        } = ((e = (0, u9.cf)([uC.A], () => uC.A.settings.textAndImages?.explicitContentSettings ?? (0, Ii.C$)())),
        {
            explicitContentGuilds: (0, Ii.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, Ii.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, Ii.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, It.hK)() && t.includes(H.TO.SHOW)
            ? fo.A.showAgeVerificationGetStartedModal({ entryPoint: fu.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, Ii.Jz)(e);
    }
    let o = [
            { value: H.TO.BLUR, label: j.intl.string(j.t.S49Uad) },
            { value: H.TO.BLOCK, label: j.intl.string(j.t["D/157Y"]) },
        ],
        u = [{ value: H.TO.BLUR, label: j.intl.string(j.t.S49Uad) }],
        d = { value: H.TO.SHOW, label: j.intl.string(j.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: n, tooltipText: i ? j.intl.string(NP.default["6Af/cw"]) : void 0 };
    return (0, E.jsxs)(Il.E, {
        description: j.intl.string(j.t.Wnojv1),
        children: [
            (0, E.jsx)(Is.A, {
                title: j.intl.string(j.t["+uI23H"]),
                value: s,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(Is.A, {
                title: j.intl.string(j.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(Is.A, {
                title: j.intl.string(j.t["FP+a42"]),
                value: l,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || n,
                tooltipText: i ? j.intl.string(NP.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function Ia() {
    let e,
        t = (0, In.A)() ?? !0,
        i = (0, _2.uM)(),
        n = (0, _2.uM)(),
        {
            goreContentGuilds: l,
            goreContentFriendDm: s,
            goreContentNonFriendDm: r,
        } = ((e = (0, u9.cf)([uC.A], () => uC.A.settings.textAndImages?.goreContentSettings ?? (0, _q.T4)())),
        {
            goreContentGuilds: (0, _q.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, _q.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, _q.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, It.hK)() && t.includes(H.TO.SHOW)
            ? fo.A.showAgeVerificationGetStartedModal({ entryPoint: fu.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, _q.qY)(e);
    }
    let o = [
            { value: H.TO.BLUR, label: j.intl.string(j.t.S49Uad) },
            { value: H.TO.BLOCK, label: j.intl.string(j.t["D/157Y"]) },
        ],
        u = [{ value: H.TO.BLUR, label: j.intl.string(j.t.S49Uad) }],
        d = { value: H.TO.SHOW, label: j.intl.string(j.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: n, tooltipText: i ? j.intl.string(NP.default["6Af/cw"]) : void 0 };
    return (0, E.jsxs)(Il.E, {
        description: j.intl.string(j.t.XgH9eh),
        children: [
            (0, E.jsx)(Is.A, {
                title: j.intl.string(j.t["+uI23H"]),
                value: s,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(Is.A, {
                title: j.intl.string(j.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(Is.A, {
                title: j.intl.string(j.t["FP+a42"]),
                value: l,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || n,
                options: u,
                tooltipText: i ? j.intl.string(NP.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var Io = i(464946),
    Iu = i(875162),
    Id = i(428275);
let Ic = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, _q.WX)(),
            t = S.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: j.intl.string(j.t.GYpoAq),
                        component: Ir,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: j.intl.string(j.t["16/3Bi"]),
                        component: Ia,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, E.jsxs)(Io.h, {
            children: [
                (0, E.jsx)(Io._, {
                    header: j.intl.string(j.t["Hj/But"]),
                    description: j.intl.format(j.t.dliU4j, { learnMoreLink: ty.A.getArticleURL(e) }),
                }),
                (0, E.jsx)(Iu.A, { tabs: t, orientation: "vertical", tabsClassName: Id.v }),
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
var Ig = i(639555),
    Im = i(617641),
    IA = i(546140),
    Ih = i(406935),
    IE = i(594061);
let IS = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING, {
    useTitle: () => j.intl.string(j.t.qFsx5q),
    useSubtitle: () => j.intl.format(j.t.lunaRv, { learnMoreLink: ty.A.getArticleURL(U.MVz.SAFETY_ALERTS) }),
    useValue: IA.L,
    setValue: function (e) {
        return IE.wc.updateAsync(
            "privacy",
            (t) => {
                t.inappropriateConversationWarnings = Ih._t.create({ value: e });
            },
            IE.Sb.INFREQUENT_USER_ACTION,
        );
    },
    usePredicate: function () {
        let e = (0, Im.Lc)({ location: "DMSafetyAlertsSetting" }),
            t = (0, Ig.Rv)({ location: "DMSafetyAlertsSetting" }),
            i = (0, In.A)() ?? !0;
        return e && !i && !t;
    },
});
var IT = i(809505),
    Ix = i(923457),
    Ip = i(750714);
let If = (0, a.Qx)(u.X.CONTENT_AND_SOCIAL_DM_SPAM_SETTING, {
        useTitle: () => ((0, o.SV)("DMSpamSetting") ? j.intl.string(j.t.puwSkY) : j.intl.string(j.t.tiCXaH)),
        useSubtitle: () =>
            (0, o.SV)("DMSpamSetting")
                ? j.intl.string(j.t["+sXN3T"])
                : j.intl.format(j.t.RvjRRI, { appealLink: ty.A.getArticleURL(U.MVz.SAFE_DIRECT_MESSAGING) }),
        useValue: function () {
            let e = L.he.useSetting(),
                t = L.cj.useSetting(),
                i = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()),
                n = (0, fi.yv)(Ix.p.SPAM_FILTERS);
            return e !== H.he.DEFAULT_UNSET
                ? e
                : i?.nsfwAllowed === !1 && n
                  ? H.he.FRIENDS_AND_NON_FRIENDS
                  : (Ip.xY.get(t) ?? H.he.NON_FRIENDS);
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
                        : (0, IT.YS)(),
                [e],
            );
        },
        useSearchTerms: () => [j.intl.string(j.t.JzaP4h), j.intl.string(j.t.H9XOl3), j.intl.string(j.t.k4W40P)],
    }),
    IN = (0, a.zZ)(u.X.CONTENT_CATEGORY, {
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
                u = _3(),
                d =
                    ((e = (0, NL.Z)()),
                    (t = (0, _q.WX)()),
                    (i = S.useCallback(() => {
                        window.open(ty.A.getArticleURL(t), "_blank"),
                            (0, _Q.N)(_J.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _J.YX.LEARN_MORE);
                    }, [t])),
                    (n = S.useCallback(() => {
                        (0, _Q.N)(_J.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _J.YX.VIEWED);
                    }, [])),
                    S.useMemo(() => {
                        if (e)
                            return {
                                type: h.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: n,
                                text: j.intl.format(j.t.EUo0yj, {
                                    hook: (e, t) => (0, E.jsx)(de.Anchor, { onClick: i, children: e }, t),
                                }),
                            };
                    }, [i, e, n])),
                c =
                    ((l = (0, fi.SJ)()),
                    (s = (0, ft.b8)()),
                    (r = l && !s),
                    (a = S.useCallback(() => {
                        fo.A.showAgeVerificationGetStartedModal({ entryPoint: fu.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, _Q.N)(_J.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _J.YX.LEARN_MORE);
                    }, [])),
                    (o = S.useCallback(() => {
                        (0, _Q.N)(_J.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _J.YX.VIEWED);
                    }, [])),
                    S.useMemo(() => {
                        if (r)
                            return {
                                type: h.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: o,
                                text: j.intl.format(j.t.OX4ybh, {
                                    hook: (e, t) => (0, E.jsx)(de.Anchor, { onClick: a, children: e }, t),
                                }),
                            };
                    }, [a, r, o])),
                g = _0();
            return u ?? g ?? c ?? d;
        },
        buildLayout: () => ((0, o.Bv)("ContentCategory") ? [Ic, IS, _8, _7, Ie] : [Ic, If, IS, _8, _7]),
    });
var I_ = i(189883);
let II = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => j.intl.string(j.t["7x9dyE"]),
    useValue: function () {
        let e = L.FA.useSetting();
        return S.useMemo(() => (0, s9.Lx)(e), [e]).all;
    },
    setValue: function (e) {
        L.FA.updateSetting(e ? U.yKI : U.yKI & ~U.dzt.NO_RELATION);
    },
    useDisabled: function () {
        return (0, _2.uM)();
    },
});
var IC = i(665260);
let Ib = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => j.intl.string(j.t.NfeuZ3),
        useValue: function () {
            let e = L.FA.useSetting(),
                t = S.useMemo(() => (0, s9.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: function (e) {
            let t = L.FA.getSetting();
            L.FA.updateSetting(e ? IC.UI(t, U.dzt.MUTUAL_FRIENDS) : IC.iE(t, U.dzt.MUTUAL_FRIENDS, U.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, _2.uM)();
        },
    }),
    Iv = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => j.intl.string(j.t.qsMfsH),
        useSubtitle: () => ((0, o.SV)("FriendRequestsMutualGuildsSetting") ? j.intl.string(j.t["6DqAp0"]) : void 0),
        useValue: function () {
            let e = L.FA.useSetting(),
                t = S.useMemo(() => (0, s9.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: function (e) {
            let t = L.FA.getSetting();
            L.FA.updateSetting(e ? IC.UI(t, U.dzt.MUTUAL_GUILDS) : IC.iE(t, U.dzt.MUTUAL_GUILDS, U.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, _2.uM)();
        },
    }),
    Iy = (0, a.FW)(u.X.FRIEND_REQUESTS_FIELDSET, {
        useTitle: () => j.intl.string(j.t.wTdS6S),
        buildLayout: () => [II, Ib, Iv],
    }),
    Ij = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => j.intl.string(j.t["jK+wdr"]),
        useSubtitle: () => j.intl.string(j.t["RYh/pW"]),
        useValue: () => !L.Zd.useSetting(),
        setValue: function (e) {
            L.Zd.updateSetting(!e);
        },
        usePredicate: () => I_.A.useConfig({ location: "Friend Request Setting" }).enabled,
        usePersistentBadge: () => ({ badgeType: h.Xi.BETA }),
    });
function IO() {
    let { enabled: e } = I_.A.useConfig({ location: "Friend Request Setting" });
    return e ? j.intl.string(j.t.QVbF3l) : void 0;
}
let IR = (0, a.zZ)(u.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["5gxWrt"]),
        useSubtitle: IO,
        useSubnavLabel: () => j.intl.string(j.t.fyA115),
        useInlineNotice: _3,
        buildLayout: () => [Iy, Ij],
    }),
    IL = (0, a.zZ)(u.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.MNaVwq),
        useSubtitle: IO,
        useInlineNotice: _3,
        buildLayout: () => [II, Ib, Iv, Ij],
    });
var ID = i(994500),
    IP = i(428678),
    IG = i(717398),
    IM = i(730134),
    IU = i(943646);
function IV(e) {
    let { listType: t, numberOfUsers: i } = e,
        n = "blocked" === t;
    return (0, E.jsxs)("div", {
        className: IU.wx,
        children: [
            (0, E.jsx)("div", { className: IU.zc, children: n ? (0, E.jsx)(IP.K, {}) : (0, E.jsx)(iP.G, {}) }),
            (0, E.jsxs)("div", {
                className: IU.Qq,
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
function Ik(e) {
    let { userId: t, last: i } = e,
        n = (0, g.bG)([ID.A], () => ID.A.isBlocked(t)),
        l = (0, g.bG)([iA.default], () => iA.default.getUser(t)),
        [s, r] = S.useState(!1),
        a = S.useCallback(() => {
            r(!0),
                n
                    ? IG.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : IG.A.unignoreUser(t, e4.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      });
        }, [n, t]);
    return null == l
        ? null
        : (0, E.jsxs)("div", {
              className: e7()(IU.nM, { [IU.fW]: i }),
              children: [
                  (0, E.jsxs)("div", {
                      className: IU.eF,
                      children: [
                          (0, E.jsx)(IM.A, { user: l, size: nt._3.SIZE_40 }),
                          (0, E.jsxs)("div", {
                              className: IU.Qq,
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
function Iw(e) {
    let { userIds: t, listType: i } = e,
        [n, l] = S.useState(5);
    return (0, E.jsx)(Io.h, {
        children: (0, E.jsxs)("div", {
            className: IU.Nr,
            children: [
                (0, E.jsx)(IV, { listType: i, numberOfUsers: t.length }),
                (0, E.jsx)("div", {
                    className: IU.jS,
                    children: t.slice(0, n).map((e, i) => (0, E.jsx)(Ik, { userId: e, last: i === t.length - 1 }, e)),
                }),
                n < t.length
                    ? (0, E.jsx)("div", {
                          className: IU.vM,
                          children: (0, E.jsx)(en.D, {
                              onClick: function () {
                                  l((e) => e + 5);
                              },
                              className: IU.Qf,
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
let IF = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_BLOCKED_USERS, {
        useSearchTerms: () => [j.intl.string(j.t.PFOUKW)],
        usePredicate: () => (0, g.bG)([ID.A], () => ID.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, g.yK)([ID.A], () => ID.A.getBlockedIDs());
            return (0, E.jsx)(Iw, { userIds: e, listType: "blocked" });
        },
    }),
    IB = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_IGNORED_USERS, {
        useSearchTerms: () => [j.intl.string(j.t["93ZDWE"])],
        usePredicate: () => (0, g.bG)([ID.A], () => ID.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, g.yK)([ID.A], () => ID.A.getIgnoredIDs());
            return (0, E.jsx)(Iw, { userIds: e, listType: "ignored" });
        },
    }),
    Iz = (0, a.zZ)(u.X.RESTRICTED_USERS_CATEGORY, {
        useTitle: () =>
            (0, o.SV)("RestrictedUsersCategory") ? j.intl.string(j.t["+Iryf3"]) : j.intl.string(j.t.LVwR56),
        useSubtitle: () =>
            j.intl.format(j.t["0aNQo9"], { helpArticle: ty.A.getArticleURL(U.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [IF, IB],
        usePredicate: function () {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, g.cf)([ID.A], () => ({
                hasBlockedUsers: ID.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: ID.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var IX = i(22385),
    IY = i(556534),
    IH = i(111159),
    IK = i(152056),
    IW = i(467962);
let IZ = { label: () => j.intl.string(j.t["32u1Dx"]), value: IX.YG };
var Iq = i(954225);
function IQ() {
    return (0, IY.Tx)() !== IX.YG;
}
function IJ() {
    return j.intl.string(j.t["T+nevN"]);
}
let I$ = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_JOIN_SETTING, {
    useTitle: IJ,
    useSubtitle: () =>
        j.intl.format(j.t.jXKQCu, { helpdeskArticle: ty.A.getArticleURL(U.MVz.ACTIVITY_STATUS_SETTINGS) }),
    useValue: function () {
        let e = (0, IY.Tx)();
        return !L.pE.useSetting().includes(e);
    },
    setValue: function (e) {
        let t = IX.xk.getState().selectedGuildId,
            i = (0, s9.CN)();
        e ? i.delete(t) : i.add(t),
            L.pE.updateSetting([...i]),
            G.default.track(U.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: Iq.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
                ingress: nH.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    },
    usePredicate: IQ,
});
function I0() {
    return (0, IY.Tx)() !== IX.YG;
}
function I1() {
    return j.intl.string(D.default.WhdCGP);
}
let I2 = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_SHARE_SETTING, {
    useTitle: I1,
    useSubtitle: () => j.intl.string(D.default.UQ9RHJ),
    useValue: function () {
        let e = (0, IY.Tx)();
        return !L.JG.useSetting().includes(e);
    },
    setValue: function (e) {
        let t = IX.xk.getState().selectedGuildId,
            i = (0, s9.Kk)();
        e ? i.delete(t) : i.add(t),
            L.JG.updateSetting([...i]),
            G.default.track(U.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: Iq.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
                ingress: nH.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    },
    usePredicate: I0,
});
var I3 = i(307863),
    I5 = i(428031),
    I4 = i(972737);
function I6() {
    return (0, I3.e)() ? j.intl.string(j.t.PMsfcH) : j.intl.string(j.t.RAQUSN);
}
function I8() {
    let e = (0, IY.Tx)(),
        t = (0, IY.q9)(),
        i = (0, I3.e)();
    return e === IX.YG
        ? i
            ? j.intl.string(j.t.XXGmuB)
            : j.intl.string(j.t.wbYDfT)
        : t
          ? j.intl.string(j.t.V0ka0Q)
          : i
            ? j.intl.string(j.t.F9WY3f)
            : j.intl.string(j.t.G7c3Xo);
}
function I7() {
    let e = (0, IY.Tx)(),
        t = L.$s.useSetting().includes(e),
        i = (0, I5.K)();
    return e === IX.YG ? !i : !t;
}
function I9() {
    let e = (0, _2.uM)();
    return (0, IY.Tx)() === IX.YG && e;
}
function Ce(e, t) {
    G.default.track(U.HAw.GUILD_DEFAULT_DMS_UPDATED, { default_guilds_restricted: e, applied_to_existing_guilds: t });
}
function Ct(e) {
    let t = IX.xk.getState().selectedGuildId;
    if (t === IX.YG) {
        var i;
        (i = !e),
            (0, I4.O)({
                header: j.intl.string(j.t["uUr+GR"]),
                body: j.intl.string(j.t.hjGJBp),
                confirmText: j.intl.string(j.t.gm1Vej),
                cancelText: j.intl.string(j.t.p89ACt),
                confirmButtonColor: oi.$n.Colors.BRAND,
                onConfirm: function () {
                    L.n6.updateSetting(i), Ce(i, !1);
                },
                onCancel: function () {
                    L.n6.updateSetting(i), L.$s.updateSetting(i ? eh.A.getGuildIds() : []), Ce(i, !0);
                },
            });
    } else {
        let i = (0, s9.Tb)();
        e ? i.delete(t) : i.add(t),
            L.$s.updateSetting(Array.from(i)),
            G.default.track(U.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: Iq.m.DIRECT_MESSAGES_TOGGLE,
                ingress: nH.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    }
}
let Ci = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: I8,
        useValue: I7,
        useDisabled: I9,
        setValue: Ct,
    }),
    Cn = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: I6,
        useSubtitle: I8,
        useValue: I7,
        useDisabled: I9,
        setValue: Ct,
    });
var Cl = i(953298);
function Cs(e, t) {
    G.default.track(U.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
}
function Cr() {
    let e = (0, o.SV)("PermissionsMessageRequestsSetting"),
        t = (0, IY.q9)();
    if (e)
        if (t) return j.intl.string(j.t["982I7+"]);
        else return j.intl.string(j.t["3yHM5i"]);
    return j.intl.string(j.t["3o2ojh"]);
}
let Ca = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: Cr,
        useSubtitle: function () {
            let e = (0, o.SV)("PermissionsMessageRequestsSetting"),
                t = (0, IY.q9)();
            return e
                ? j.intl.format(j.t.BoCjTy, { learnMoreUrl: ty.A.getArticleURL(U.MVz.MESSAGE_REQUESTS) })
                : t
                  ? j.intl.format(j.t.WpnWLc, { helpdeskArticle: ty.A.getArticleURL(U.MVz.MESSAGE_REQUESTS) })
                  : j.intl.format(j.t.wkm9a3, { helpdeskArticle: ty.A.getArticleURL(U.MVz.MESSAGE_REQUESTS) });
        },
        useValue: function () {
            let e = (0, IY.Tx)(),
                t = (0, I5.K)(),
                i = L.$s.useSetting().includes(e),
                n = L.YX.useSetting(),
                l = L.Zr.useSetting().includes(e);
            return e === IX.YG ? !t && !n : !i && !l;
        },
        useDisabled: function () {
            let e = (0, IY.Tx)(),
                t = (0, _2.uM)(),
                i = (0, I5.K)(),
                n = L.$s.useSetting().includes(e);
            return e === IX.YG ? i || t : n;
        },
        setValue: function (e) {
            let t = IX.xk.getState().selectedGuildId;
            if (!e && (0, Cl.w)())
                return void fo.A.showAgeVerificationGetStartedModal({ entryPoint: fu.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === IX.YG) {
                var i;
                (i = !e),
                    (0, I4.O)({
                        header: j.intl.string(j.t.yAfu1p),
                        body: j.intl.string(j.t.Ry2z74),
                        confirmText: j.intl.string(j.t.gm1Vej),
                        cancelText: j.intl.string(j.t.p89ACt),
                        confirmButtonColor: oi.$n.Colors.BRAND,
                        onConfirm: function () {
                            L.YX.updateSetting(i), Cs(i, !1);
                        },
                        onCancel: function () {
                            L.YX.updateSetting(i), L.Zr.updateSetting(i ? eh.A.getGuildIds() : []), Cs(i, !0);
                        },
                    });
            } else {
                let i = (0, s9.xo)();
                e ? i.delete(t) : i.add(t),
                    L.Zr.updateSetting(Array.from(i)),
                    G.default.track(U.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: Iq.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: nH.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    });
            }
        },
    }),
    Co = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            let e = (0, o.SV)("GuildSelect"),
                t = [I6(), Cr()],
                i = I1(),
                n = I0();
            !e && n && t.push(i);
            let l = IJ(),
                s = IQ();
            return !e && s && t.push(l), t;
        },
        Component: function () {
            let { selectedGuildId: e, setSelectedGuildId: t } = (0, IX.xk)(),
                i = (0, g.bG)([eE.Ay], () => eE.Ay.getFlattenedGuildIds()),
                n = (0, g.bG)([eh.A], () => eh.A.getGuilds()),
                l = i[0];
            S.useEffect(
                () =>
                    IK.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, i) => {
                            let n = IX.xk.getState().selectedGuildId;
                            "" === i && "" !== e && n === IX.YG && null != l
                                ? t(l)
                                : "" === e && n !== IX.YG && t(IX.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [l, t],
            );
            let s = S.useMemo(() => {
                let e = [];
                return (
                    e.push({
                        ...IZ,
                        id: IZ.value,
                        label: IZ.label(),
                        leading: (0, E.jsx)("div", {
                            className: IW.KP,
                            children: (0, E.jsx)(IH.p, {
                                size: "sm",
                                color: "white",
                                "aria-hidden": !0,
                                className: IW.cl,
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
                                leading: (0, E.jsx)(mi.Ay, {
                                    className: IW.cl,
                                    guild: i,
                                    size: mi.Ay.Sizes.SMALLER,
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
function Cu() {
    let e = _3(),
        t = _0();
    if ((0, IY.Tx)() === IX.YG) return e ?? t;
}
let Cd = (0, a.zZ)(u.X.PERMISSIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Y5GYcX),
        useSubnavLabel: () => j.intl.string(j.t.YUU0RF),
        useInlineNotice: Cu,
        buildLayout: () => [Co, Ci, Ca],
    }),
    Cc = (0, a.zZ)(u.X.PERMISSIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.eYaT7L),
        useInlineNotice: Cu,
        buildLayout: () => [Co, Cn, Ca, I2, I$],
    }),
    Cg = (0, a.dT)(u.X.CONTENT_AND_SOCIAL_MAIN_TAB, {
        getTitle: () => j.intl.string(j.t["/7xJCF"]),
        buildLayout: () => [IN, Cc, IL, Iz],
    }),
    Cm = (0, a.dT)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB, {
        initialize: () => {
            SV.A.fetch();
        },
        getTitle: () => j.intl.string(j.t.YpCiMt),
        buildLayout: () => [_W],
    }),
    CA = (0, a.t_)(u.X.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => j.intl.string(j.t["+o1pDZ"]),
        buildLayout: () => [Cg, Cm],
    }),
    Ch = (0, a.i4)(u.X.CONTENT_AND_SOCIAL_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["+o1pDZ"]),
        icon: gj.i,
        buildLayout: () => [CA],
    });
var CE = i(254138),
    CS = i(290595),
    CT = i(153488);
let Cx = (0, a.zD)(u.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
    useTitle: () => j.intl.string(j.t.AGDDkH),
    useSubtitle: () => j.intl.string(j.t.kyo3dJ),
    useValue: () => L.Q$.useSetting(),
    setValue: (e) => N3.eQ({ allowVoiceRecording: e }),
});
var Cp = i(157559),
    Cf = i(331887);
function CN() {
    let e = (0, g.bG)([iA.default], () => iA.default.getCurrentUser()),
        t = (0, g.bG)([Cf.A], () => Cf.A.harvestType),
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
let C_ = (0, a.Tf)(u.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => j.intl.string(j.t.qfFFos),
        useSubtitle: function () {
            let e = CN();
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
                    let t = rr()(e.nextAllowed).format("MMMM Do YYYY");
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
        useDisabled: () => !CN().allowed,
        useLoading: () => (0, g.bG)([Cf.A], () => Cf.A.requestingHarvest),
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
                            (0, TL.$I)(i)
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
                                            ? Cp.A.show({
                                                  title: j.intl.string(j.t.i2iul5),
                                                  body: j.intl.string(j.t["6Nmv4i"]),
                                              })
                                            : Cp.A.show({
                                                  title: j.intl.string(j.t.OjbtDm),
                                                  body: j.intl.string(j.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || j.intl.string(j.t["0F5Jyt"]);
                                        Cp.A.show({ title: j.intl.string(j.t.OjbtDm), body: t });
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
    CI = (0, a.v_)(u.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => j.intl.string(j.t.D60Gfj),
        useSubtitle: () =>
            j.intl.format(j.t.dszICC, {
                onClickDisable: () => (0, eq.openUserSettings)(u.X.ACCOUNT_DISABLE_SETTING),
                onClickDelete: () => (0, eq.openUserSettings)(u.X.ACCOUNT_DELETE_SETTING),
            }),
    }),
    CC = (0, a.zD)(u.X.DATA_USAGE_PERSONALIZATION_SETTING, {
        useTitle: () => j.intl.string(j.t.MNKzyg),
        useSubtitle: () =>
            j.intl.format(j.t["2SiYln"], { helpdeskArticle: ty.A.getArticleURL(U.MVz.DATA_USED_FOR_RECOMMENDED) }),
        useValue: function () {
            return (0, g.bG)([CT.A], () => CT.A.hasConsented(U.YAq.PERSONALIZATION));
        },
        setValue: function (e) {
            e
                ? (0, CS.U)([U.YAq.PERSONALIZATION], []).catch(I4.i)
                : (0, I4.O)({
                      header: j.intl.string(j.t["9SNpzv"]),
                      confirmText: j.intl.string(j.t["9g5UGw"]),
                      cancelText: j.intl.string(j.t["+ZLPw9"]),
                      onConfirm: () => {
                          (0, CS.U)([], [U.YAq.PERSONALIZATION]).catch(I4.i);
                      },
                      body: j.intl.string(j.t.gJvDDh),
                  });
        },
        useDisabled: _2.uM,
    });
var Cb = i(884705);
function Cv() {
    return (0, g.bG)([Cb.A], () => Cb.A.isTogglesDisabled());
}
let Cy = (0, a.zD)(u.X.DATA_USAGE_QUESTS_3P_SETTING, {
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
            let e = Cv(),
                t = L.H1.useSetting(),
                i = (0, _2.uM)();
            return e || t || i;
        },
        useSearchTerms: () => [j.intl.string(j.t.CyLYKZ)],
    }),
    Cj = (0, a.zD)(u.X.DATA_USAGE_QUESTS_SETTING, {
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
            let e = Cv(),
                t = (0, _2.uM)();
            return e || t;
        },
    }),
    CO = (0, a.AK)(u.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
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
    CR = (0, a.gN)(u.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [CO] }),
    CL = (0, a.zD)(u.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => j.intl.string(j.t.XuADY2),
        useSubtitle: () =>
            j.intl.format(j.t.FNqmmX, { helpdeskArticle: ty.A.getArticleURL(U.MVz.DATA_PRIVACY_CONTROLS) }),
        useValue: function () {
            return (0, g.bG)([CT.A], () => CT.A.hasConsented(U.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, CS.U)([U.YAq.USAGE_STATISTICS], []).catch(I4.i)
                : (0, I4.O)({
                      header: j.intl.string(j.t.OdPCbN),
                      body: j.intl.string(j.t.MGWabA),
                      confirmText: j.intl.string(j.t["D3+rU4"]),
                      cancelText: j.intl.string(j.t.kYpG0u),
                      onConfirm: () => (0, CS.U)([], [U.YAq.USAGE_STATISTICS]).catch(I4.i),
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t.XuADY2)],
        useDisabled: _2.uM,
    }),
    CD = (0, a.zZ)(u.X.DATA_USAGE_CATEGORY, {
        useTitle: () => j.intl.string(j.t.QDAriI),
        useInlineNotice: _3,
        initialize: () => {
            CT.A.fetchedConsents || (0, CS.Q)();
        },
        buildLayout: () => [CI, CL, CC, Cj, Cy, Cx, C_, CR],
    });
var CP = i(567926);
let CG = (0, a.zD)(u.X.NOTIFY_FRIENDS_ON_PROFILE_UPDATE_SETTING, {
    useTitle: () => j.intl.string(CP.default.F3llsQ),
    useSubtitle: () => j.intl.string(CP.default["6goWcz"]),
    useValue: L.Sy.useSetting,
    setValue: function (e) {
        L.Sy.updateSetting(e),
            G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: M.Y.ACCOUNT,
                notify_friends_on_profile_update: e,
            });
    },
});
function CM() {
    let e = L.JG.useSetting();
    return (0, g.yK)([eE.Ay, eh.A], () => {
        let t = new Set(e);
        return eE.Ay.getFlattenedGuildIds().filter((e) => null != eh.A.getGuild(e) && !t.has(e));
    }, [e]);
}
let CU = (0, a.AK)(u.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = CM();
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
                    ((e = CM()),
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
    CV = (0, a.gN)(u.X.PROFILE_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, F.lX)("ProfilePrivacyRelatedSettings"),
        buildLayout: () => [CU],
    }),
    Ck = (0, a.Qx)(u.X.PROFILE_PRIVACY_SETTING, {
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
    Cw = (0, a.zZ)(u.X.PROFILE_PRIVACY_CATEGORY, {
        useTitle: () => j.intl.string(j.t.ul884f),
        useSubtitle: () =>
            j.intl.format(j.t.N4jSgR, {
                learnMoreUrl: ty.A.getArticleURL("38859942749463-Profile-Privacy-Setting-on-Discord"),
            }),
        buildLayout: () => [Ck, CG, CV],
    });
var CF = i(936388),
    CB = i(714763),
    Cz = i(814278);
let CX = (0, a.zD)(u.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => j.intl.string(j.t["opi/XK"]),
    useSubtitle: () => j.intl.format(j.t["/T+ZlP"], { helpArticle: (0, Cz.Lu)() }),
    useValue: function () {
        return (0, g.bG)([CB.A], () => CB.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        CF.A.updatePersistentCodesEnabled(e);
    },
});
var CY = i(787392);
function CH() {
    return (0, g.yK)([CY.A], () => CY.A.getUserIds());
}
var CK = i(803306),
    CW = i(966327),
    CZ = i(509531);
function Cq(e) {
    let { userId: t, count: i } = e,
        { analyticsLocations: n } = (0, n1.Ay)(),
        l = (0, g.bG)([iA.default], () => iA.default.getUser(t)),
        s = xP.Ay.getFormattedName(l),
        r = S.useCallback(() => {
            (0, Cz.kj)(t);
        }, [t]),
        a = S.useCallback(() => (0, TU.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: n }), [t, n]);
    return (
        S.useEffect(() => {
            (0, CK.getUser)(t);
        }, [t]),
        (0, E.jsxs)("div", {
            className: CZ.uW,
            children: [
                null != l && (0, E.jsx)(CW.A, { className: CZ.my, user: l, size: nt._3.SIZE_40 }),
                (0, E.jsxs)("div", {
                    className: CZ.Qq,
                    children: [
                        (0, E.jsx)(en.D, {
                            className: CZ.Xh,
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
                (0, E.jsx)(en.D, { onClick: r, className: CZ.Qz, children: (0, E.jsx)(rW.u, { size: "xs" }) }),
            ],
        })
    );
}
function CQ(e) {
    let { className: t, userId: i, verification: n, index: l } = e,
        s = (0, Cz.tC)(n.timestamp),
        r = S.useCallback(() => {
            (0, Cz.W0)(i, n.verifiedKey);
        }, [n.verifiedKey, i]);
    return (0, E.jsxs)("div", {
        className: t,
        children: [
            (0, E.jsxs)("div", {
                className: CZ.Qq,
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
                className: CZ.Kk,
                onClick: r,
                children: (0, E.jsx)(gF.P, { size: "md", color: er.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function CJ(e) {
    let { userId: t } = e,
        i = (0, g.yK)([CY.A], () =>
            e$()(CY.A.getUserVerifiedKeys(t))
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
            (0, E.jsx)(Cq, { userId: t, count: i.length }),
            i.map((e, n) =>
                (0, E.jsxs)(
                    S.Fragment,
                    {
                        children: [
                            (0, E.jsx)(CQ, { className: CZ.nM, userId: t, index: n, verification: e }),
                            n !== i.length - 1 && (0, E.jsx)("div", { className: CZ.yF }),
                        ],
                    },
                    `${n}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var C$ = i(756625);
let C0 = (0, a.E2)(u.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["5b3FNI"])],
        usePredicate: function () {
            let e = CH();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = CH();
            return (0, E.jsxs)(Io.h, {
                children: [
                    (0, E.jsx)(Io._, {
                        header: j.intl.string(j.t["5b3FNI"]),
                        description: j.intl.format(j.t.jrTSWU, { helpArticle: (0, Cz.dc)() }),
                    }),
                    e.map((e) => (0, E.jsx)("div", { className: C$.A, children: (0, E.jsx)(CJ, { userId: e }) }, e)),
                ],
            });
        },
    }),
    C1 = (0, a.zZ)(u.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => j.intl.string(j.t.bTwjaz),
        usePredicate: () => (0, eZ.isDesktop)(),
        buildLayout: () => [CX, C0],
    }),
    C2 = (0, a.t_)(u.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => j.intl.string(j.t.OAuOHD),
        buildLayout: () => [CD, Cw, C1],
    }),
    C3 = (0, a.i4)(u.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.OAuOHD),
        icon: CE.m,
        buildLayout: () => [C2],
    });
var C5 = i(476713);
let C4 = (0, a.AK)(u.X.CONNECTED_GAMES_AUTHORIZED_APPS_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.O65dzZ),
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        destinationKey: u.X.AUTHORIZED_APPS_CATEGORY,
    }),
    C6 = (0, a.gN)(u.X.CONNECTED_GAMES_RELATED_SETTINGS, { buildLayout: () => [C4] }),
    C8 = (0, a.E2)(u.X.CONNECTED_GAMES_UNAVAILABLE, {
        Component: function () {
            let { showLoadingIndicator: e } = _k(!0, !0);
            return e ? (0, E.jsx)(dh.y, {}) : (0, E.jsx)(_B, {});
        },
        useSearchTerms: () => [j.intl.string(j.t["+0U77d"])],
        usePredicate: () => {
            let { showLoadingIndicator: e, slayerSdkApplications: t } = _k(!0, !0);
            return e || 0 === t.length;
        },
    });
function C7() {
    let { slayerSdkApplications: e, showLoadingIndicator: t } = _k(!0, !0);
    return {
        sortedGames: S.useMemo(() => e.toSorted((e, t) => dv.default.compare(t.id, e.id)), [e]),
        showLoadingIndicator: t,
    };
}
i(839272);
let C9 = (0, a.zZ)(u.X.SPAM_FILTERS_CATEGORY, { useTitle: () => j.intl.string(j.t.Qwuoic), buildLayout: () => [If] }),
    be = (0, a.zZ)(u.X.CONNECTED_GAMES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.RyvebU),
        useSubtitle: function () {
            let { sortedGames: e } = C7();
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
                let { sortedGames: e } = C7();
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
            SV.A.fetch();
        },
        buildLayout: () => [_H, _K, C8, C6],
    }),
    bt = (0, a.t_)(u.X.MESSAGING_PERMISSIONS_PANEL, {
        useTitle: () => j.intl.string(j.t.Cz07t8),
        buildLayout: () => [IN, C9, Cd, IR, be, Iz],
    }),
    bi = (0, a.i4)(u.X.MESSAGING_PERMISSIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.Cz07t8),
        icon: C5.l,
        buildLayout: () => [bt],
    });
var bn = i(782603),
    bl = i(899847),
    bs = i(695515),
    br = i(936926);
let ba = (0, a.Hn)(u.X.MOBILE_NOTIFICATION_DELAY, {
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
    bo = (0, a.zD)(u.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => j.intl.string(j.t["btbS+Z"]),
        useSubtitle: () =>
            j.intl.format(j.t.Q5crhR, { onClick: () => (0, eq.openUserSettings)(u.X.TTS_PLAYBACK_RATE) }),
        useValue: L.on.useSetting,
        setValue: L.on.updateSetting,
    }),
    bu = (0, a.Qx)(u.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.JZxxGx),
        useSubtitle: () => j.intl.string(j.t.HDLtJl),
        useValue: () => (0, g.bG)([uG.A], () => uG.A.getTTSType()),
        setValue: (e) => uw.default.setTTSType(e),
        useOptions: function () {
            return [
                { name: j.intl.string(j.t.B1AGeJ), value: U.aVn.ALL_CHANNELS },
                { name: j.intl.string(j.t.uzZg9e), value: U.aVn.SELECTED_CHANNEL },
                { name: j.intl.string(j.t.DYO5Oi), value: U.aVn.NEVER },
            ];
        },
        usePredicate: () => nh.$j,
    }),
    bd = u.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    bc = (0, a.bd)(bd, {
        useTitle: (e) => (e ? j.intl.string(j.t.RyimDk) : j.intl.string(j.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return lv(bd, {
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
        buildLayout: () => [ba, bo, bu],
    }),
    bg = (0, a.zZ)(u.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => j.intl.string(j.t["31DySj"]),
        buildLayout: () => [bc],
    }),
    bm = (0, a.zD)(u.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => j.intl.string(j.t.VH8AIJ),
        useSubtitle: () => j.intl.string(j.t["9K4qwX"]),
        useValue: function () {
            return (0, g.bG)([uG.A], () => !uG.A.getDisableUnreadBadge());
        },
        setValue: (e) => uw.default.setDisableUnreadBadge(!e),
    }),
    bA = (0, a.zZ)(u.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.l6w3Vj),
        buildLayout: () => [bm],
    });
var bh = i(840559),
    bE = i(997187),
    bS = i(723923);
let bT = bS.px.map((e) =>
        (0, a.zD)(`${u.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                (function (e) {
                    let { categories: t } = (0, g.cf)([bE.A], () => bE.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, bh.CA)(e.category, t),
        }),
    ),
    bx = (0, a.Tf)(u.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => j.intl.string(j.t.Ra9Pwk),
        useSubtitle: () => j.intl.string(j.t.iYjQ8X),
        useLabel: () => j.intl.string(j.t.KT1pBA),
        useDisabled: function () {
            let { categories: e } = (0, g.cf)([bE.A], () => bE.A.getEmailSettings());
            return bS.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, bh.NI)(),
        useVariant: () => "critical-secondary",
    }),
    bp = (0, a.zZ)(u.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => j.intl.string(j.t["w/qqKK"]),
        initialize: function () {
            let { initialized: e } = bE.A.getEmailSettings();
            e || (0, bh.cR)();
        },
        buildLayout: () => [...bT, bx],
    }),
    bf = (0, a.zD)(u.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t["/0WCll"]),
        useSubtitle: () => j.intl.string(j.t.wF9ih3),
        useValue: function () {
            return (0, g.bG)([uG.A], () => uG.A.getDesktopType()) !== U.nRU.NEVER;
        },
        setValue: (e) => uw.default.setDesktopType(e ? U.nRU.ALL : U.nRU.NEVER),
    });
var bN = i(832712),
    b_ = i(543465),
    bI = i(790782);
let bC = (0, a.zD)(u.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => j.intl.string(j.t["k6m/si"]),
    useSubtitle: () => j.intl.string(j.t.LGynPs),
    useValue: () => (0, g.bG)([b_.Ay], () => b_.Ay.useNewNotifications),
    setValue: function (e) {
        bN.A.setAccountFlag(M.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (EJ.w.set("turnedOffNewNotifications", !0),
                G.default.track(U.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: eh.A.getGuildsArray().filter(
                        (e) => b_.Ay.resolveGuildUnreadSetting(e) === bI.e.ONLY_MENTIONS,
                    ).length,
                }));
    },
    usePredicate: () =>
        (0, g.bG)(
            [iA.default, b_.Ay],
            () =>
                iA.default.getCurrentUser()?.isStaff() ||
                iA.default.getCurrentUser()?.isStaffPersonal() ||
                b_.Ay.useNewNotifications,
        ),
});
var bb = i(534654);
let bv = (0, a.zD)(u.X.SCREEN_DOWNTIME_REMINDER, {
        useTitle: () => j.intl.string(j.t.z9h8Ym),
        useSubtitle: () => j.intl.string(j.t.TummoQ),
        useValue: () => (0, g.bG)([uG.A], () => uG.A.screenDowntimeReminder),
        setValue: (e) => uw.default.setScreenDowntimeReminder(e),
        usePredicate: function () {
            let e = (0, br.Vh)({ location: "ScreenDowntimeReminderSetting" }),
                t = (0, bb.A)(),
                i = (0, Nj.Du)();
            return e && t && i;
        },
    }),
    by = (0, a.zD)(u.X.SCREEN_DOWNTIME_SCHEDULE, {
        useTitle: () => j.intl.string(j.t.onrAy7),
        useSubtitle: () => j.intl.string(j.t["/071J7"]),
        useValue: L.gY.useSetting,
        setValue: (e) => L.gY.updateSetting(e),
        usePredicate: function () {
            let e = (0, br.Vh)({ location: "ScreenDowntimeScheduleSetting" }),
                t = (0, bb.A)(),
                i = (0, Nj.Du)();
            return e && t && i;
        },
    });
var bj = i(70730);
let bO = (0, a.zD)(u.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
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
            let { enabled: e } = bj.u.getConfig({ location: "FriendAnniversaryNotifications" });
            return e;
        },
    }),
    bR = (0, w.mj)({
        kind: "user",
        name: "2026-03-friend-is-online-v3",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    bL = (0, a.zD)(u.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.sQQgFj),
        useValue: L.NR.useSetting,
        setValue: function (e) {
            L.NR.updateSetting(e),
                G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: M.Y.ACCOUNT,
                    friend_online_notifications: e,
                });
        },
        usePredicate: () => bR.useConfig({ location: "FriendOnlineNotifications" }).showSettingsToggle,
    }),
    bD = (0, a.zD)(u.X.GO_LIVE_NOTIFICATIONS, {
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
    bP = (0, w.mj)({
        kind: "user",
        name: "2026-01-profile-updates-notification",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 0: { showSettingsToggle: !1 }, 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    bG = (0, a.zD)(u.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.xBLMhQ),
        useValue: L.T3.useSetting,
        setValue: function (e) {
            L.T3.updateSetting(e),
                G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: M.Y.ACCOUNT,
                    profile_updates_notifications: e,
                });
        },
        usePredicate: () => bP.useConfig({ location: "user_settings.ProfileUpdatesNotifications" }).showSettingsToggle,
    });
var bM = i(815807);
let bU = (0, a.Hn)(u.X.REACTION_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: j.intl.string(j.t["9x/RtT"]), value: H.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: j.intl.string(j.t.fJAbQd), value: H.Tz.ONLY_DMS },
            { id: "disabled", label: j.intl.string(j.t["xu+UDU"]), value: H.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: L.Zp.useSetting,
        setValue: (e) => (0, bM.n4)(e, L.Zp.getSetting()),
    }),
    bV = (0, a.zD)(u.X.SERVER_TRENDING_NOTIFICATIONS, {
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
    bk = (0, w.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    bw = (0, a.zD)(u.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.G8NPz6),
        useValue: L.zS.useSetting,
        setValue: function (e) {
            L.zS.updateSetting(e),
                G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: M.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                });
        },
        usePredicate: () => bk.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    bF = (0, a.FW)(u.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.FEVRDV),
        buildLayout: () => [bD, bO, bL, bV, bw, bG, bU],
    }),
    bB = (0, a.zD)(u.X.TASK_BAR_FLASHING, {
        useTitle: () => j.intl.string(j.t.xSmFQG),
        useSubtitle: () => j.intl.string(j.t.bd4j4x),
        useValue: () => (0, g.bG)([uG.A], () => uG.A.taskbarFlash),
        setValue: (e) => uw.default.setTaskbarFlash(e),
        usePredicate: () => (0, c.uF)(),
    }),
    bz = (0, a.zZ)(u.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => j.intl.string(j.t["/dp6yY"]),
        buildLayout: () => [bf, bB, bF, bC, by, bv],
    });
var bX = i(965957),
    bY = i(312671),
    bH = i(235079);
let bK = (0, a.zD)(u.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = uM.A.useHolidaySoundpack();
        return null == e ? "" : j.intl.format(j.t["E/OyBr"], { soundpack: j.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, g.bG)([bY.A], () => bY.A.getSoundpack()),
            t = uM.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = uM.A.getHolidaySoundpack();
        tZ()(null != t, "predicate should fail if no soundpack is available"), (0, bX.p)(e ? t : bH.i.CLASSIC);
    },
    usePredicate: uM.A.useIsEligible,
});
var bW = i(970931);
let bZ = {
        useTitle: () => j.intl.string(j.t.jD1qzM),
        sound: "message1",
        useDisabled: bW.kB,
        useDisabledMessage: () => ((0, bW.kB)() ? j.intl.string(j.t.cIRG0s) : void 0),
    },
    bq = { useTitle: () => j.intl.string(j.t.XBrJT6), sound: "call_ringing" },
    bQ = (0, a.zD)(u.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.TzjwV9),
        useSubtitle: () => j.intl.format(j.t.OOiGCM, { onClick: () => uz("message3") }),
        useValue: () =>
            (0, g.bG)([uG.A], () => uG.A.getNotifyMessagesInSelectedChannel() && !uG.A.getDisableAllSounds()),
        setValue: (e) => uw.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, g.bG)([uG.A], () => uG.A.getDisableAllSounds()),
    }),
    bJ = (0, a.zD)(u.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => j.intl.string(j.t["2ZhCOd"]),
        useSubtitle: () => j.intl.string(j.t.EAKdPr),
        useValue: () => (0, g.bG)([uG.A], () => uG.A.getDisableAllSounds()),
        setValue: (e) => uw.default.toggleDisableAllSounds(e),
    }),
    b$ = (0, a.D1)(u.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                uB();
            };
        },
        buildLayout: () => [uX(bZ), bQ, uX(bq), bJ],
    }),
    b0 = (0, a.AK)(u.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t["MMy+lm"]),
        useSearchTerms: () => [j.intl.string(j.t["MMy+lm"])],
        destinationKey: u.X.SOUNDS_CATEGORY,
    }),
    b1 = (0, a.gN)(u.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [b0] }),
    b2 = (0, a.zZ)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.LweOYy),
        buildLayout: () => [bK, b$, b1],
    }),
    b3 = (0, a.t_)(u.X.NOTIFICATIONS_PANEL, {
        useTitle: () => j.intl.string(j.t.HcoRu0),
        initialize: () => {
            !(0, br.Eq)({ location: "NotificationsPanel" }) ||
                null != bs.A.getAgeGroup() ||
                bs.A.isLoading() ||
                (bs.A.canRefetch() && bl.Ay.initialPageLoad());
        },
        buildLayout: () => [bz, b2, bA, bp, bg],
    }),
    b5 = (0, a.i4)(u.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.HcoRu0),
        icon: bn.X,
        buildLayout: () => [b3],
    }),
    b4 = (0, a.WI)(u.X.USER_SECTION, {
        useTitle: () => j.intl.string(j.t.ShSTDe),
        hideTitle: !0,
        buildLayout: () => {
            let e = (0, o.Bv)("UserSection");
            return [NW, ...(e ? [] : [Ch]), C3, ...(e ? [bi] : []), ...(e ? [] : [NJ]), ...(e ? [] : [_U]), b5, _D];
        },
    });
var b6 = i(387758),
    b8 = i(271866),
    b7 = i(147964),
    b9 = i(868511);
let ve = (0, a.zD)(u.X.APPLICATION_TEST_MODE, {
        useTitle: () => j.intl.string(j.t.erOqlh),
        useSubtitle: () => j.intl.string(j.t["52hMnD"]),
        usePredicate: L.Q_.useSetting,
        useValue: () => (0, g.bG)([b7.A], () => null != b7.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, K.openModal)((e) => (0, E.jsx)(b9.A, { ...e })) : b8.cL();
        },
    }),
    vt = (0, a.zD)(u.X.DEVELOPER_MODE, {
        useTitle: () => j.intl.string(j.t.ObIb1Q),
        useSubtitle: () => j.intl.format(j.t["CY6q/Q"], { apiDocsUrl: U.X7G.API_DOCS }),
        useValue: L.Q_.useSetting,
        setValue: L.Q_.updateSetting,
        usePredicate: () => cX.p5,
    }),
    vi = (0, a.zZ)(u.X.DEVELOPER_CATEGORY, { buildLayout: () => [vt, ve] }),
    vn = (0, a.t_)(u.X.DEVELOPER_PANEL, { useTitle: () => j.intl.string(j.t["0BRxRp"]), buildLayout: () => [vi] }),
    vl = (0, a.i4)(u.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: b6.G,
        useTitle: () => j.intl.string(j.t["0BRxRp"]),
        buildLayout: () => [vn],
    });
var vs = i(70688),
    vr = i(830215);
let va = (0, a.i4)(u.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => j.intl.string(j.t["2jxGer"]),
        icon: vs.o,
        onClick: () => {
            (0, s3.A)({
                title: j.intl.string(j.t["2jxGer"]),
                subtitle: j.intl.string(j.t.SUnWBB),
                confirmText: j.intl.string(j.t["2jxGer"]),
                onConfirm: () => {
                    vr.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    vo = (0, a.WI)(u.X.UTILITY_SECTION, {
        useTitle: () => j.intl.string(j.t["2kOEFe"]),
        hideTitle: !0,
        buildLayout: () => [vl, va],
    }),
    vu = (0, a.Hr)({
        buildLayout: function () {
            return [p6, b4, ES, dc, (0, o.Bv)("UserSettingsRoot_buildLayout") ? TR : i8, SU, vo];
        },
        analyticsKey: "user_settings",
    });
