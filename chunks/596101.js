i.d(t, { D: () => by });
var n,
    s,
    l,
    r,
    a,
    o = i(419954),
    u = i(358776),
    d = i(780964),
    c = i(682348),
    g = i(885386),
    m = i(375708),
    A = i(395277);
let h = (0, o.zD)(d.X.ACTIVITY_PRIVACY_SETTING, {
        useTitle: () => m.intl.string(A.default.WhdCGP),
        useSubtitle: () => m.intl.string(A.default.UQ9RHJ),
        useValue: g.tz.useSetting,
        setValue: g.tz.updateSetting,
    }),
    E = (0, o.zZ)(d.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () => m.intl.string(m.t["6x5uWQ"]),
        useSearchTerms: () => [m.intl.string(m.t["8ka8li"])],
        buildLayout: () => [h],
    });
var x = i(945810),
    T = i(21973);
let S = (0, x.mj)({
        name: "2026-02-activity-privacy-matching",
        kind: "user",
        defaultConfig: { copyChanges: !1, upsell: !1 },
        variations: {
            0: { copyChanges: !1, upsell: !1 },
            1: { copyChanges: !0, upsell: !1 },
            2: { copyChanges: !0, upsell: !0 },
        },
    }),
    p = (e) => {
        let t = (0, T.lX)(e),
            i = S.useConfig({ location: e });
        return t || i.copyChanges;
    };
var f = i(627968),
    N = i(64700),
    _ = i(873298),
    C = i(192308),
    I = i(365258);
let b = (0, o.Qx)(d.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
        useTitle: () =>
            p("GuildActivitySharingDefaultSetting") ? m.intl.string(m.t.vpgck1) : m.intl.string(A.default["/LHVbt"]),
        useOptions: function () {
            let e = p("GuildActivitySharingDefaultSetting");
            return N.useMemo(
                () =>
                    e
                        ? [
                              {
                                  value: _.Qd.ACTIVITY_STATUS_OFF,
                                  name: m.intl.string(m.t.FzgQna),
                                  desc: m.intl.string(m.t.SQxoyc),
                              },
                              {
                                  value: _.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                                  name: m.intl.string(m.t["1hvuGH"]),
                                  desc: m.intl.string(m.t.odUCPE),
                              },
                              { value: _.Qd.ACTIVITY_STATUS_ON, name: m.intl.string(m.t.fQc5la) },
                          ]
                        : [
                              { value: _.Qd.ACTIVITY_STATUS_ON, name: m.intl.string(m.t.UzGMH9) },
                              {
                                  value: _.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                                  name: m.intl.string(A.default["/sAeRY"]),
                              },
                              { value: _.Qd.ACTIVITY_STATUS_OFF, name: m.intl.string(A.default.m3oL7Q) },
                          ],
                [e],
            );
        },
        useValue: g._Z.useSetting,
        setValue: function (e) {
            let t,
                n = g._Z.getSetting();
            if (
                (g._Z.updateSetting(e),
                (t = "GuildActivitySharingDefaultSetting"),
                !(0, T.W1)(t) && !S.getConfig({ location: t }).upsell)
            )
                return;
            let s = (0, I.g8)(n, e);
            if (null == s) return;
            let l = (0, I.Xc)(e);
            (0, C.openModalLazy)(async () => {
                let { default: e } = await Promise.all([i.e("92164"), i.e("36281"), i.e("62041"), i.e("41996")]).then(
                    i.bind(i, 32167),
                );
                return (t) =>
                    (0, f.jsx)(e, {
                        ...t,
                        direction: s.direction,
                        affectedGuildIds: s.affectedGuildIds,
                        settingName: l,
                    });
            });
        },
    }),
    v = (0, o.zZ)(d.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () =>
            p("GuildActivitySharingCategory") ? m.intl.string(m.t.VDcvrR) : m.intl.string(A.default["1PougL"]),
        useSubtitle: () =>
            p("GuildActivitySharingCategory") ? m.intl.string(m.t["/Go08F"]) : m.intl.string(A.default.OO17Lg),
        buildLayout: () => [b],
    }),
    j = (0, o.AK)(d.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => m.intl.string(m.t.J0SFL2),
        destinationKey: d.X.DATA_AND_PRIVACY_PANEL,
    }),
    y = (0, o.gN)(d.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, T.lX)("ActivityPrivacyRelatedSettings"),
        buildLayout: () => [j],
    });
var O = i(683071),
    R = i(17928),
    L = i(331322),
    D = i(243721),
    P = i(892547),
    G = i(922016),
    U = i(980707),
    M = i(477782),
    V = i(939249),
    k = i(834730),
    w = i(847374),
    F = i(661531),
    B = i(123292),
    z = i(140735),
    Y = i(498642),
    X = i(174459),
    H = i(743790),
    K = i(71393),
    W = i(711014),
    Z =
        (((n = {}).SERVER_ORDER = "server-order"),
        (n.RECENTLY_JOINED = "recently-joined"),
        (n.ACTIVITY_SHARING_ON = "activity-sharing-on"),
        (n.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
        n);
let q = {
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
var Q = i(652215),
    J = i(842449);
function $(e) {
    let { guild: t, isActivityRestricted: i, onToggleActivityRestrictedGuild: n } = e,
        s = (0, R.bG)([Y.A], () => Y.A.getMemberCount(t.id));
    return (0, f.jsxs)(L.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, f.jsx)("div", { className: J.FO, children: (0, f.jsx)(H.K, { guild: t, size: 48 }) }),
            (0, f.jsx)("div", {
                className: J.QH,
                children: (0, f.jsx)(D.d, {
                    label: t.name,
                    description: m.intl.format(m.t.zRl6XR, { count: s ?? 0 }),
                    checked: !i,
                    onChange: (e) => n({ checked: e, guildId: t.id }),
                }),
            }),
        ],
    });
}
let ee = function (e) {
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
            numTotalGuilds: h,
        } = (function () {
            let [e, t] = (0, N.useState)(""),
                [i, n] = (0, N.useState)("server-order"),
                s = (0, R.bG)([W.Ay], () => W.Ay.getFlattenedGuildIds()),
                l = (0, R.bG)([K.A], () => K.A.getGuilds()),
                r = s.map((e) => l[e]).filter(Boolean),
                a = g.Pw.useSetting(),
                [o, u] = (0, N.useState)(a);
            (0, N.useEffect)(() => {
                u(a);
            }, [a]);
            let d = async (e) => {
                    u(e);
                    try {
                        await g.Pw.updateSetting(e);
                    } catch (e) {
                        u(a);
                    }
                },
                c = 0 !== o.length,
                [m, A] = (0, N.useState)(() => q[i](r, a)),
                h = m.map((e) => l[e.id]).filter(Boolean);
            return {
                guilds: "" === e ? h : h.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
                sortOrder: i,
                searchQuery: e,
                setSortOrder: (e) => {
                    A(q[e](r, a)), n(e);
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
        E = (0, N.useId)(),
        x = (0, N.useRef)(null),
        T = (0, N.useMemo)(
            () => [
                { id: Z.SERVER_ORDER, label: m.intl.string(m.t.STMPJ2), value: Z.SERVER_ORDER },
                { id: Z.RECENTLY_JOINED, label: m.intl.string(m.t.CbaapP), value: Z.RECENTLY_JOINED },
                { id: Z.ACTIVITY_SHARING_ON, label: m.intl.string(A.default.ZI51JZ), value: Z.ACTIVITY_SHARING_ON },
                {
                    id: Z.ACTIVITY_SHARING_OFF,
                    label: m.intl.string(A.default["+kxafn"]),
                    value: Z.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        S = T.find((e) => e.value === l)?.label ?? "";
    return (0, f.jsxs)("div", {
        className: J.iE,
        children: [
            t,
            (0, f.jsxs)("div", {
                className: J.N1,
                children: [
                    (0, f.jsx)(P.I, {
                        query: n,
                        onChange: s,
                        onClear: () => {
                            X.default.track(Q.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_cleared",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: h,
                            }),
                                s("");
                        },
                        onFocus: () =>
                            X.default.track(Q.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_focused",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: h,
                            }),
                        onBlur: () =>
                            X.default.track(Q.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_blurred",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: h,
                            }),
                        placeholder: m.intl.string(m.t["H+nRYw"]),
                        "aria-label": m.intl.string(m.t["5h0QOP"]),
                        inputProps: { "aria-controls": E, "aria-expanded": !0 },
                    }),
                    i.length > 0 &&
                        (0, f.jsxs)("div", {
                            className: J.gO,
                            children: [
                                (0, f.jsx)(G.Y, {
                                    targetElementRef: x,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, f.jsx)(U.W, {
                                            navId: "guild-sort-order-menu",
                                            onClose: t,
                                            "aria-label": m.intl.string(m.t.LxVjvJ),
                                            onSelect: t,
                                            children: (0, f.jsx)(M.rX, {
                                                children: T.map((e) => {
                                                    let { id: t, label: i, value: n } = e;
                                                    return (0, f.jsx)(
                                                        M.iD,
                                                        {
                                                            id: t,
                                                            group: "sort-order",
                                                            label: i,
                                                            checked: l === n,
                                                            action: () => {
                                                                X.default.track(
                                                                    Q.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED,
                                                                    {
                                                                        interaction: "sort_order_changed",
                                                                        sort_order: n,
                                                                        activity_restricted_guild_count: c,
                                                                        total_guild_count: h,
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
                                        (0, f.jsxs)(V.D, {
                                            ...e,
                                            innerRef: x,
                                            className: J.Ku,
                                            children: [
                                                (0, f.jsx)(k.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: S,
                                                }),
                                                (0, f.jsx)(w.a, { size: "xs", color: F.A.colors.TEXT_SUBTLE }),
                                            ],
                                        }),
                                }),
                                (0, f.jsx)(B.Q, {
                                    variant: "primary",
                                    textVariant: "text-sm/medium",
                                    onClick: o,
                                    text: a ? m.intl.string(m.t["7lxcLO"]) : m.intl.string(m.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, f.jsx)(z.A, {
                "aria-live": "polite",
                role: "region",
                children: m.intl.format(A.default.EvzDff, { count: i.length }),
            }),
            (0, f.jsxs)("ul", {
                className: J.X1,
                id: E,
                "aria-label": m.intl.string(m.t["7hB4kg"]),
                children: [
                    0 === i.length &&
                        (0, f.jsx)("div", {
                            className: J.pb,
                            children: (0, f.jsx)(k.E, {
                                className: J.R$,
                                variant: "text-lg/medium",
                                children: m.intl.string(m.t["Xe+fJM"]),
                            }),
                        }),
                    i.map((e) =>
                        (0, f.jsx)(
                            $,
                            { guild: e, isActivityRestricted: d(e.id), onToggleActivityRestrictedGuild: u },
                            e.id,
                        ),
                    ),
                ],
            }),
        ],
    });
};
var et = i(366189);
let ei = (0, o.E2)(d.X.ACTIVITY_PRIVACY_PER_GUILD_SETTING, {
        useSearchTerms: () => [m.intl.string(A.default["/LHVbt"])],
        Component: function () {
            let e = g.tz.useSetting()
                ? null
                : (0, f.jsx)("div", {
                      className: et.l,
                      children: (0, f.jsx)(O.w, { type: "warning", children: m.intl.string(A.default["xxI0/W"]) }),
                  });
            return (0, f.jsx)(ee, { notice: e });
        },
    }),
    en = (0, o.zZ)(d.X.ACTIVITY_PRIVACY_MY_SERVERS_CATEGORY, {
        useTitle: () => m.intl.string(m.t.TqdOvC),
        useSubtitle: () => (p("MyServersCategory") ? m.intl.string(A.default.OO17Lg) : null),
        buildLayout: () => [ei, y],
    }),
    es = (0, o.zD)(d.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => m.intl.string(A.default.khuuzv),
        useSubtitle: () => m.intl.string(A.default["8EWsJ8"]),
        useValue: () => g.e.useSetting(),
        setValue: (e) => g.e.updateSetting(e),
    }),
    el = (0, o.zD)(d.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => m.intl.string(A.default.Uz5Ipi),
        useSubtitle: () => m.intl.string(A.default.CZI2Gb),
        useValue: () => g.UM.useSetting(),
        setValue: (e) => g.UM.updateSetting(e),
    }),
    er = (0, o.zZ)(d.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => m.intl.string(A.default["89YBr5"]),
        buildLayout: () => [es, el],
        useSearchTerms: () => [m.intl.string(m.t.VOszPA)],
    });
var ea = i(359778),
    eo = i(208963);
let eu = (0, o.E2)(d.X.ACTIVITY_PRIVACY_TERMS, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, f.jsx)(ea.Z, {
                type: ea.Z.Types.PRIMARY,
                className: eo.A,
                children: (0, f.jsx)(k.E, {
                    variant: "text-sm/normal",
                    children: m.intl.format(m.t.xvCsx4, { termsLink: Q.X7G.TERMS, privacyLink: Q.X7G.PRIVACY }),
                }),
            });
        },
    }),
    ed = (0, o.zZ)(d.X.ACTIVITY_PRIVACY_TERMS_CATEGORY, { buildLayout: () => [eu] }),
    ec = (0, o.t_)(d.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => m.intl.string(m.t.Cq98yL),
        buildLayout: () => [E, v, en, er, ed],
    }),
    eg = (0, o.i4)(d.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t.Cq98yL),
        icon: c._,
        buildLayout: () => [ec],
    });
var em = i(935399),
    eA = i(625657),
    eh = i(534514),
    eE = i(821609),
    ex = i(404778),
    eT = i(554146),
    eS = i(131607),
    ep = i(843402),
    ef = i(589051),
    eN = i(592598),
    e_ = i(933297),
    eC = i(351906),
    eI = i(532624),
    eb = i(773371),
    ev = i(184809),
    ej = i(723702),
    ey = i(766075),
    eO = i(999834),
    eR = i(735438),
    eL = i.n(eR),
    eD = i(350535),
    eP = i(672396);
let eG = eM(null);
function eU() {
    var e;
    let t = eM(eG);
    (e = eG),
        eL().isEqual(eL().omit(t, "old_enabled"), eL().omit(e, "old_enabled")) ||
            (X.default.track(Q.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (eG = t));
}
function eM(e) {
    let t = ev.default.getNotificationPositionMode(),
        i = t !== Q.G6Q.DISABLED,
        n = eI.Ay.getOverlayKeybind(),
        s = eI.Ay.getOverlayChatKeybind();
    return {
        enabled: eb.default.enabled,
        notifications_enabled: i,
        notifications_position: i ? t : null,
        text_notifications_mode: eN.A.isNotificationDisabled(eP.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != n ? (0, eD.dI)(n.shortcut) : null,
        text_activation_hotkey: null != s ? (0, eD.dI)(s.shortcut) : null,
        text_opacity_slider: ev.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? eb.default.enabled,
    };
}
var eV = i(793574),
    ek = i(237984),
    ew = i(503698),
    eF = i.n(ew),
    eB = i(890856),
    ez = i(389128);
let eY = (e) => {
    e.preventDefault(), e.stopPropagation();
};
function eX(e) {
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
    return (0, f.jsxs)("div", {
        className: eF()(ez.HS, d),
        children: [
            (0, f.jsxs)(eB.s, {
                "aria-label": u,
                onClick: o,
                children: [
                    null != t && (0, f.jsx)("div", { className: ez.x_, children: t }),
                    (0, f.jsxs)("div", {
                        className: ez.rN,
                        children: [
                            null != i && (0, f.jsx)("div", { className: ez.$t, children: i }),
                            (0, f.jsxs)("div", {
                                className: ez.c8,
                                children: [
                                    (0, f.jsx)(k.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: ez.SZ,
                                        children: n,
                                    }),
                                    null != s &&
                                        (0, f.jsx)(k.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: s,
                                        }),
                                    null != r &&
                                        (0, f.jsx)(k.E, {
                                            variant: "text-xxs/medium",
                                            color: "text-muted",
                                            children: r,
                                        }),
                                ],
                            }),
                            (0, f.jsx)("div", { className: ez.a$, children: l }),
                        ],
                    }),
                ],
            }),
            (0, f.jsx)("div", { className: ez.Om, children: a }),
        ],
    });
}
let eH = (0, o.E2)(d.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, f.jsx)(eX, {
            title: m.intl.string(m.t["z4/l+V"]),
            description: m.intl.string(m.t["3aZq/0"]),
            action: (0, f.jsx)(eE.$, {
                variant: "primary",
                text: m.intl.string(m.t.s2nVhG),
                onClick: () => {
                    (0, ek.b)(eV.A.USER_SETTINGS, Q.BRT.APP);
                },
            }),
            "aria-label": m.intl.string(m.t["z4/l+V"]),
        });
    },
    useSearchTerms: () => [m.intl.string(m.t["z4/l+V"])],
});
var eK = i(812729),
    eW = i.n(eK),
    eZ = i(587895),
    eq = i(429913),
    eQ = i(616356),
    eJ = i(952818);
function e$(e, t) {
    return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0;
}
function e0() {
    let e = (0, R.bG)([eQ.A], () => eQ.A.getStreamerActiveStreamMetadata()),
        t = (0, R.bG)(
            [eJ.Ay],
            () => {
                let e = eJ.Ay.getVisibleGame();
                return null != e ? eJ.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
            },
            [],
            eW(),
        ),
        [i] = (0, eq.A)([e$(e, t)]);
    return { runningGame: t ?? void 0, runningGameApplication: i ?? void 0 };
}
var e1 = i(990078),
    e2 = i(478016),
    e3 = i(31300),
    e6 = i(780907),
    e4 = i(684013),
    e7 = i(56562),
    e5 = i(964486),
    e8 = i(137177),
    e9 = i(814925),
    te = i(810412),
    tt = i(41984),
    ti = i(296027),
    tn = i(562519);
let ts = 5 * i(927813).A.Millis.DAY,
    tl = new tn.A("overlay_survey_timestamps");
function tr(e, t) {
    let n, s;
    (n = Date.now()),
        (null != (s = Array.from(tl.values()).reduce((e, t) => Math.max(e, t), 0)) && n - s < ts) ||
            Array.from(tl.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, C.openModalLazy)(async () => {
                let n,
                    { default: s } = await Promise.all([i.e("76982"), i.e("82318")]).then(i.bind(i, 387101));
                return (n = Date.now()), tl.add(n), (i) => (0, f.jsx)(s, { ...i, clientSettingType: e, gameId: t });
            });
}
var ta = i(512950),
    to = i(975571),
    tu = i(935671);
function td() {
    (0, tu.sL)("overlay-settings");
}
function tc(e) {
    let { className: t, game: i } = e;
    return (0, tu.NP)() && null != i && i.elevated
        ? (0, f.jsx)("div", {
              className: t,
              children: (0, f.jsx)(ta.p, {
                  messageType: ta.Y.WARNING,
                  action: (0, f.jsx)(eE.$, {
                      variant: "secondary",
                      size: "sm",
                      text: m.intl.string(m.t["1iI46O"]),
                      onClick: td,
                  }),
                  children: m.intl.format(m.t["LJzl+0"], { helpCenterLink: to.A.getArticleURL(Q.MVz.SYSTEM_SERVICE) }),
              }),
          })
        : null;
}
var tg = i(760751),
    tm = i(189081),
    tA = i(9302),
    th = i(311678),
    tE = i(320448);
let tx = new Set([
    tt.AR.INITIALIZING,
    tt.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
    tt.AR.WAITING_FOR_MODULE_TRACKING,
    tt.AR.WAITING_FOR_OVERLAY_OPEN,
    tt.AR.WAITING_FOR_POPOUT_OPEN,
    tt.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
    tt.AR.WAITING_FOR_REACT_INITIALIZATION,
    tt.AR.WAITING_FOR_PID_FOCUS,
    tt.AR.WAITING_FOR_SUCCESSFUL_SHOW,
]);
function tT(e) {
    let { children: t, className: i, onExpand: n, ...s } = e,
        [l, r] = N.useState(!1);
    return (0, f.jsx)(th.N, {
        className: ez.uR,
        collapsibleContent: (0, f.jsx)("div", { className: ez.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, f.jsx)(eX, {
                ...s,
                onClick: (e) => {
                    var i;
                    r((i = !l)), n?.(i), t?.(e);
                },
                className: eF()(ez.AC, i),
                action: (0, f.jsxs)("div", {
                    className: ez.rc,
                    children: [
                        s.action,
                        l
                            ? (0, f.jsx)(w.a, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              })
                            : (0, f.jsx)(tE._, {
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
let tS = (0, o.E2)(d.X.OVERLAY_CURRENT_GAME, {
    Component: function () {
        let { runningGame: e, runningGameApplication: t } = e0(),
            i = e?.pid,
            n = (0, R.bG)(
                [ti.default],
                () => (null == e || null == i ? null : ti.default.getTrackedGameByPid(i)),
                [e, i],
                eW(),
            ),
            { enabledLegacy: s, enabledOOP: l } = (0, R.cf)(
                [tg.A, tm.A],
                () =>
                    null == e && null == n
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: n?.legacyEnabled ?? !1, enabledOOP: n?.oopEnabled ?? !1 }
                          : (0, eJ.hw)(e, !1, [tg.A, tm.A]),
                [e, n],
            ),
            r = (0, R.bG)([eJ.Ay, tg.A, tm.A], () => (null == e ? null : (0, eJ.xU)(e, eJ.Ay, tg.A, tm.A)), [e], eW()),
            [a, o] = N.useState(l),
            [u, d] = N.useState(s),
            [c, g] = N.useState(!1);
        N.useEffect(() => {
            o(l), d(s);
        }, [l, s]);
        let A = !(0, tA.supportsLegacy)(),
            h = !(0, tA.supportsOutOfProcess)(),
            { legacyEnabled: E, oopEnabled: x } = (0, R.cf)([ti.default], () => ti.default.getGlobalEnabledStatus()),
            T = (t, i) => {
                if (null == e) return;
                let n = !1,
                    s = !1;
                switch (i) {
                    case te.OverlayToggledClientSettingType.LEGACY_GAME:
                        d(t), e6.Ay.toggleOverlay(e, t, a), (n = !t && u);
                        break;
                    case te.OverlayToggledClientSettingType.OOP_GAME:
                        o(t), e6.Ay.toggleOverlay(e, u, t), (s = !t && a);
                        break;
                    case te.OverlayToggledClientSettingType.LEGACY:
                        e4.A.setEnabled(t, x), (0, te.Q3)(t, te.OverlayToggledClientSettingType.LEGACY, e.id ?? null);
                        break;
                    case te.OverlayToggledClientSettingType.OOP:
                        e4.A.setEnabled(E, t), (0, te.Q3)(t, te.OverlayToggledClientSettingType.OOP, e.id ?? null);
                }
                (n || s) &&
                    tr(
                        n
                            ? te.OverlayToggledClientSettingType.LEGACY_GAME
                            : te.OverlayToggledClientSettingType.OOP_GAME,
                        e.id ?? null,
                    );
            },
            S = A && h,
            p = !E && !x,
            _ = !a && !E && u && !A,
            C = !u && !x && a && !h,
            I = n?.overlayMethod === tt.Ue.Disabled,
            b = n?.state === tt.AR.OVERLAY_RENDERING && !I,
            v = n?.state != null && tx.has(n.state) && !I,
            j = n?.overlayMethod === tt.Ue.OutOfProcess,
            y = n?.overlayMethod === tt.Ue.OutOfProcessLimitedInteraction,
            O = n?.overlayMethod === tt.Ue.Hook,
            L = n?.state === tt.AR.OVERLAY_CRASHED || n?.state === tt.AR.OVERLAY_CRASHED_DISABLED,
            P = !a && !u,
            [G, U] = (() => {
                switch (!0) {
                    case b && j:
                        return [
                            m.intl.format(m.t.hFVBIg, {
                                overlayMethod: m.intl.string(m.t.a3eXSw),
                                overlayMethodHook: function (e, t) {
                                    return (0, f.jsx)(
                                        k.E,
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
                    case b && y:
                        return [
                            m.intl.format(m.t.hFVBIg, {
                                overlayMethod: m.intl.string(m.t["506Aba"]),
                                overlayMethodHook: function (e, t) {
                                    return (0, f.jsx)(
                                        k.E,
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
                    case b && O:
                        return [
                            m.intl.format(m.t.hFVBIg, {
                                overlayMethod: m.intl.string(m.t.bvlpDR),
                                overlayMethodHook: function (e, t) {
                                    return (0, f.jsx)(
                                        k.E,
                                        { tag: "span", variant: "text-sm/medium", color: "text-strong", children: e },
                                        t,
                                    );
                                },
                            }),
                            (function () {
                                switch (!0) {
                                    case n?.fullscreenType !== e7.aI.BORDERLESS_FULLSCREEN:
                                        return m.intl.string(m.t.mJmbeC);
                                    case h:
                                        return m.intl.string(m.t.C7bLTQ);
                                    case !n?.oopEnabled:
                                        return m.intl.string(m.t.WiY24u);
                                    case !x:
                                        return m.intl.string(m.t.cAFVsL);
                                    case !n?.supportsOutOfProcess:
                                        return m.intl.string(m.t.XcGEcs);
                                    default:
                                        return m.intl.string(m.t.bJXH2v);
                                }
                            })(),
                        ];
                    case L:
                        return [m.intl.string(m.t.OFC2aw), null];
                    case S:
                        return [m.intl.string(m.t.m7X4az), null];
                    case p:
                        return [m.intl.string(m.t["9DUS5l"]), null];
                    case P:
                        return [m.intl.string(m.t.nQ9EdJ), null];
                    case _:
                    case C:
                        return [m.intl.string(m.t.VWUn0a), null];
                    case v:
                        if (j) return [m.intl.string(m.t["s8+CFq"]), null];
                        if (O) return [m.intl.string(m.t.JEEdqt), null];
                        if (y) return [m.intl.string(m.t.pzBMwY), null];
                        return [m.intl.string(m.t["2Xhy9k"]), null];
                    case null == n:
                        return [m.intl.string(m.t.vwHPRi), null];
                    case I: {
                        let e = n?.fullscreenType === e7.aI.FULLSCREEN ? m.intl.string(m.t.mJmbeC) : null;
                        return [m.intl.string(m.t.VPW4XY), e];
                    }
                    default:
                        return [m.intl.string(m.t.ONovP5), null];
                }
            })();
        (0, e5.Ay)(() => {
            e6.Ay.getDetectableGames();
        });
        let [M, w] = N.useMemo(
            () =>
                v
                    ? ["text-muted", F.A.colors.TEXT_MUTED.css]
                    : b && y
                      ? ["text-feedback-warning", F.A.colors.TEXT_FEEDBACK_WARNING.css]
                      : b && j
                        ? ["text-feedback-positive", F.A.colors.TEXT_FEEDBACK_POSITIVE.css]
                        : b && O
                          ? ["text-strong", F.A.colors.TEXT_STRONG.css]
                          : ["interactive-text-default", F.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
            [v, b, y, j, O],
        );
        return null == e
            ? null
            : (0, f.jsxs)(tT, {
                  onExpand: g,
                  className: c ? ez.tx : void 0,
                  title: (0, f.jsxs)(f.Fragment, {
                      children: [
                          t?.name ?? r?.name ?? e?.gameName ?? "",
                          null != r && r.verified
                              ? (0, f.jsx)(e1.m, {
                                    text: m.intl.string(m.t["4PJP5p"]),
                                    children: (0, f.jsx)(e9.A, {
                                        size: 16,
                                        color: F.A.colors.BACKGROUND_BRAND.css,
                                        children: (0, f.jsx)(e2.U, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: F.A.colors.WHITE.css,
                                        }),
                                    }),
                                })
                              : null,
                      ],
                  }),
                  description: G,
                  hint: null != U ? U : void 0,
                  header: (0, f.jsxs)(f.Fragment, {
                      children: [
                          b || v
                              ? (0, f.jsx)(e3.k, { size: "xxs", color: w })
                              : (0, f.jsx)("div", { className: ez.W4 }),
                          (0, f.jsx)(k.E, {
                              variant: "text-xs/semibold",
                              color: M,
                              children: m.intl.string(m.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, f.jsx)(e8.A, { game: t, pid: e?.pid, size: e8.M.MEDIUM }),
                  "aria-label": m.intl.string(m.t["87O5GC"]),
                  action: (0, f.jsx)(V.D, {
                      onClick: (e) => eY(e),
                      children: (0, f.jsx)(D.d, {
                          checked: (a && x) || (u && E),
                          disabled: S,
                          onChange: (t) => {
                              ((t, i) => {
                                  if (null == e) return;
                                  let n = !1,
                                      s = !1;
                                  switch (i) {
                                      case "game":
                                          e6.Ay.toggleOverlay(e, t, t), d(t), o(t), (n = !t && u), (s = !t && a);
                                          break;
                                      case "global":
                                          e4.A.setEnabled(t, t), (n = !t && E), (s = !t && x);
                                          break;
                                      case "both":
                                          e4.A.setEnabled(t, t),
                                              e6.Ay.toggleOverlay(e, t, t),
                                              d(t),
                                              o(t),
                                              (n = (!t && E) || (!t && u)),
                                              (s = (!t && x) || (!t && a));
                                  }
                                  let l = null;
                                  n
                                      ? (l =
                                            "game" === i
                                                ? te.OverlayToggledClientSettingType.LEGACY_GAME
                                                : te.OverlayToggledClientSettingType.LEGACY)
                                      : s &&
                                        (l =
                                            "game" === i
                                                ? te.OverlayToggledClientSettingType.OOP_GAME
                                                : te.OverlayToggledClientSettingType.OOP),
                                      null != l && tr(l, e.id ?? null);
                              })(
                                  t,
                                  ((e, t) => {
                                      let i = !t && e,
                                          n = !x && a,
                                          s = !E && u,
                                          l = !a && x,
                                          r = !u && E;
                                      switch (!0) {
                                          case i && (n || s) && (l || r):
                                              return "both";
                                          case i && (n || s):
                                              return "global";
                                          default:
                                              return "game";
                                      }
                                  })(t, (a && x) || (u && E)),
                              );
                          },
                      }),
                  }),
                  warning: (0, f.jsx)(tc, { className: ez.Hh, game: e }),
                  children: [
                      (0, f.jsx)(eX, {
                          title: m.intl.string(m.t["7BlVIs"]),
                          description: m.intl.string(m.t.ndgADE),
                          hint: x ? void 0 : m.intl.string(m.t.cAFVsL),
                          "aria-label": m.intl.string(m.t["7BlVIs"]),
                          action: (0, f.jsxs)(f.Fragment, {
                              children: [
                                  (0, f.jsx)(D.d, {
                                      checked: a && x,
                                      disabled: h,
                                      onChange: (e) => {
                                          e && !x
                                              ? T(e, te.OverlayToggledClientSettingType.OOP)
                                              : T(e, te.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, f.jsx)("div", { className: ez.Kz }),
                              ],
                          }),
                      }),
                      (0, f.jsx)(eX, {
                          title: m.intl.string(m.t.BfFpW1),
                          description: m.intl.string(m.t.OzInYk),
                          hint: E ? void 0 : m.intl.string(m.t["3sYHXm"]),
                          "aria-label": m.intl.string(m.t.BfFpW1),
                          action: (0, f.jsxs)(f.Fragment, {
                              children: [
                                  (0, f.jsx)(D.d, {
                                      checked: u && E,
                                      disabled: A,
                                      onChange: (e) => {
                                          e && !E
                                              ? T(e, te.OverlayToggledClientSettingType.LEGACY)
                                              : T(e, te.OverlayToggledClientSettingType.LEGACY_GAME);
                                      },
                                  }),
                                  (0, f.jsx)("div", { className: ez.Kz }),
                              ],
                          }),
                      }),
                  ],
              });
    },
    usePredicate: () => {
        let { runningGame: e } = e0();
        return null != e;
    },
    useSearchTerms: () => [m.intl.string(m.t["9cb1Uz"])],
});
var tp = i(364522),
    tf = i(206885),
    tN = i(871633);
function t_(e) {
    let { game: t, gameApplication: i } = e,
        n = N.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        s = (0, R.bG)([eZ.A], () => (null != i ? i : eZ.A.getApplication(t?.id)), [i, t]);
    return (0, f.jsx)(e8.A, { game: s, pid: n, size: e8.M.SMALL });
}
function tC(e) {
    let {
            rawGame: t,
            gameApplication: i,
            supportDisabled: n,
            getEnabledFromStatus: s,
            onChange: l,
            clientSettingType: r,
            ariaLabel: a,
        } = e,
        o = (0, R.cf)([eJ.Ay, tg.A, tm.A], () => (0, eJ.xU)(t, eJ.Ay, tg.A, tm.A)),
        u = (0, R.cf)([tg.A, tm.A], () => (0, eJ.hw)(t, !1, [tg.A, tm.A]), [t]),
        d = s(u),
        [c, g] = N.useState(d);
    return (
        N.useEffect(() => {
            g(d);
        }, [d]),
        (0, f.jsx)(eX, {
            title: t.name,
            icon: (0, f.jsx)(t_, { game: o, gameApplication: i }),
            "aria-label": a,
            action: (0, f.jsxs)(f.Fragment, {
                children: [
                    (0, f.jsx)(D.d, {
                        checked: c,
                        disabled: n,
                        onChange: (e) => {
                            let i;
                            return (i = !e && c), void (g(e), l(e, o, u), i && tr(r, o.id ?? t?.id ?? null));
                        },
                    }),
                    (0, f.jsx)("div", { className: ez.Kz }),
                ],
            }),
        })
    );
}
let tI = (0, o.E2)(d.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = N.useState(!1),
                { legacyEnabled: i, oopEnabled: n } = (0, R.cf)([ti.default], () =>
                    ti.default.getGlobalEnabledStatus(),
                ),
                s = (0, R.yK)([eJ.Ay], () => eJ.Ay.getGamesSeen(!0)).filter((e) => !(0, tN.n1)(e)),
                l = (0, eq.A)(s.map((e) => e.id)),
                r = !(0, tA.supportsLegacy)(),
                a = (e) => {
                    e4.A.setEnabled(e, n);
                    let t = eJ.Ay.getCurrentGameForAnalytics()?.id ?? null;
                    (0, te.Q3)(e, te.OverlayToggledClientSettingType.LEGACY, t),
                        !e && i && tr(te.OverlayToggledClientSettingType.LEGACY, t);
                },
                o = (e, t, i) => {
                    let { enabledOOP: n } = i;
                    e6.Ay.toggleOverlay(t, e, n);
                },
                u = N.useMemo(
                    () =>
                        (0, tA.supportsLegacy)()
                            ? r
                                ? m.intl.string(m.t.r9jEVw)
                                : m.intl.string(m.t.OzInYk)
                            : m.intl.string(m.t["8Ox6/E"]),
                    [r],
                );
            return 0 === s.length
                ? (0, f.jsx)(eX, {
                      title: m.intl.string(m.t.BfFpW1),
                      description: u,
                      "aria-label": m.intl.string(m.t.BfFpW1),
                      className: ez.dA,
                      action: (0, f.jsxs)(f.Fragment, {
                          children: [
                              (0, f.jsx)(D.d, { checked: i, disabled: r, onChange: (e) => a(e) }),
                              tf.O && (0, f.jsx)("div", { className: ez.Kz }),
                          ],
                      }),
                  })
                : (0, f.jsxs)(tT, {
                      onExpand: t,
                      className: e ? ez.tx : void 0,
                      title: m.intl.string(m.t.BfFpW1),
                      description: u,
                      "aria-label": m.intl.string(m.t.BfFpW1),
                      action: (0, f.jsx)(V.D, {
                          onClick: (e) => eY(e),
                          children: (0, f.jsx)(D.d, { checked: i, disabled: r, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, f.jsx)("div", {
                              className: ez.SC,
                              children: (0, f.jsx)(k.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: m.intl.string(m.t.FzoWRo),
                              }),
                          }),
                          (0, f.jsx)(tp.Ip, {
                              className: ez.XG,
                              children: s.map((e, t) =>
                                  (0, f.jsx)(
                                      tC,
                                      {
                                          rawGame: e,
                                          clientSettingType: te.OverlayToggledClientSettingType.LEGACY_GAME,
                                          supportDisabled: r,
                                          gameApplication: l[t],
                                          getEnabledFromStatus: (e) => {
                                              let { enabledLegacy: t } = e;
                                              return t;
                                          },
                                          onChange: o,
                                          ariaLabel: m.intl.format(m.t.hvPYsF, { gameName: e.name }).toString(),
                                      },
                                      e.id,
                                  ),
                              ),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [m.intl.string(m.t.BfFpW1)],
    }),
    tb = (0, o.E2)(d.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = N.useState(!1),
                { oopEnabled: i, legacyEnabled: n } = (0, R.cf)([ti.default], () =>
                    ti.default.getGlobalEnabledStatus(),
                ),
                s = !(0, tA.supportsOutOfProcess)(),
                l = (0, R.yK)([eJ.Ay], () => eJ.Ay.getGamesSeen(!0)).filter((e) => !(0, tN.n1)(e)),
                r = (0, eq.A)(l.map((e) => e.id)),
                a = (e) => {
                    let t = !e && i;
                    e4.A.setEnabled(n, e);
                    let s = eJ.Ay.getCurrentGameForAnalytics()?.id ?? null;
                    (0, te.Q3)(e, te.OverlayToggledClientSettingType.OOP, s),
                        t && tr(te.OverlayToggledClientSettingType.OOP, s);
                },
                o = (e, t, i) => {
                    let { enabledLegacy: n } = i;
                    e6.Ay.toggleOverlay(t, e, n);
                },
                u = N.useMemo(
                    () =>
                        tf.O ? (s ? m.intl.string(m.t.C7bLTQ) : m.intl.string(m.t.ndgADE)) : m.intl.string(m.t.m7X4az),
                    [s],
                );
            return 0 === l.length
                ? (0, f.jsx)(eX, {
                      title: m.intl.string(m.t["7BlVIs"]),
                      description: u,
                      "aria-label": m.intl.string(m.t["7BlVIs"]),
                      className: ez.dA,
                      action: (0, f.jsxs)(f.Fragment, {
                          children: [
                              (0, f.jsx)(D.d, { checked: i, disabled: s, onChange: (e) => a(e) }),
                              tf.O && (0, f.jsx)("div", { className: ez.Kz }),
                          ],
                      }),
                  })
                : (0, f.jsxs)(tT, {
                      onExpand: t,
                      className: e ? ez.tx : void 0,
                      title: m.intl.string(m.t["7BlVIs"]),
                      description: u,
                      "aria-label": m.intl.string(m.t["7BlVIs"]),
                      action: (0, f.jsx)(V.D, {
                          onClick: (e) => eY(e),
                          children: (0, f.jsx)(D.d, { checked: i, disabled: s, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, f.jsx)("div", {
                              className: ez.SC,
                              children: (0, f.jsx)(k.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: m.intl.string(m.t.FzoWRo),
                              }),
                          }),
                          (0, f.jsx)(tp.Ip, {
                              className: ez.XG,
                              children: l.map((e, t) =>
                                  (0, f.jsx)(
                                      tC,
                                      {
                                          rawGame: e,
                                          clientSettingType: te.OverlayToggledClientSettingType.OOP_GAME,
                                          gameApplication: r[t],
                                          supportDisabled: s,
                                          getEnabledFromStatus: (e) => {
                                              let { enabledOOP: t } = e;
                                              return t;
                                          },
                                          onChange: o,
                                          ariaLabel: m.intl.format(m.t.nByTd3, { gameName: e.name }).toString(),
                                      },
                                      e.id,
                                  ),
                              ),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [m.intl.string(m.t["7BlVIs"])],
    }),
    tv = (0, o.zZ)(d.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => m.intl.string(m.t["/dp6yY"]),
        buildLayout: () => [tS, tb, tI, eH],
    }),
    tj = (0, o.zD)(d.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, R.bG)([ev.default], () => !ev.default.disableClickableRegions),
        setValue: (e) => {
            e4.A.setDisableClickableRegions(!e);
        },
        useTitle: () => m.intl.string(m.t["+eFXxq"]),
        useSubtitle: () => m.intl.string(m.t.kivMAp),
    });
var ty = i(284009),
    tO = i.n(ty),
    tR = i(97260),
    tL = i(635242);
let tD = (0, o.E2)(d.X.OVERLAY_KEYBIND_SETTING, {
    Component: function () {
        let e = (0, R.bG)([eI.Ay], () => eI.Ay.getOverlayKeybind()),
            t = !(0, tA.supportsLegacy)(),
            i = !(0, tA.supportsOutOfProcess)(),
            [n, s] = (0, R.yK)([eJ.Ay], () => [eJ.Ay.canShowAdminWarning, eJ.Ay.getVisibleGame()], []),
            l = (0, tu.NP)(),
            r = null != s && s.elevated && n && !l,
            a = !(0, eI.DV)(e?.shortcut ?? []);
        return (0, f.jsx)("div", {
            className: ez.hc,
            children: (0, f.jsxs)("div", {
                className: ez.eH,
                children: [
                    (0, f.jsxs)("div", {
                        className: ez.Bu,
                        children: [
                            (0, f.jsx)(k.E, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: m.intl.string(m.t.VsAZcC),
                            }),
                            r &&
                                (0, f.jsx)(k.E, {
                                    variant: "text-xs/normal",
                                    color: "text-feedback-warning",
                                    className: ez.y7,
                                    children: m.intl.string(m.t.NsowVa),
                                }),
                            a &&
                                (0, f.jsx)(k.E, {
                                    variant: "text-xs/normal",
                                    color: "text-feedback-warning",
                                    className: ez.y7,
                                    children: m.intl.string(m.t["UNoTw/"]),
                                }),
                        ],
                    }),
                    (0, f.jsx)("div", {
                        className: ez.IH,
                        children: (0, f.jsx)(tL.A, {
                            disabled: t && i,
                            defaultValue: null != e ? e.shortcut : [],
                            onChange: function (t) {
                                tO()(null != e, "Keybind should never be undefined"),
                                    tR.A.setKeybind({ ...e, shortcut: t });
                            },
                        }),
                    }),
                ],
            }),
        });
    },
    useSearchTerms: () => [m.intl.string(m.t.VsAZcC)],
});
var tP = i(515183),
    tG = i(682763);
let tU = (0, o.zD)(d.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
        usePredicate: () => {
            let { runningGameApplication: e } = e0();
            return e?.id != null;
        },
        useDisabled: () => {
            let { runningGame: e } = e0();
            return null != e && (0, tP.qJ)(e.pid);
        },
        useValue: () => {
            let { runningGame: e, runningGameApplication: t } = e0(),
                i = t?.id,
                n = (0, R.bG)([eN.A], () => eN.A.isLimitedInteractionOverrideEnabled(i)),
                s = null != e && (0, tP.qJ)(e.pid);
            return n || s;
        },
        setValue: (e) => {
            let t,
                i,
                n,
                s,
                { runningGameApplication: l } =
                    ((t = eQ.A.getStreamerActiveStreamMetadata()),
                    (s = e$(
                        t,
                        (n =
                            null != (i = eJ.Ay.getVisibleGame())
                                ? eJ.Ay.getGameOrTransformedSubgameForPID(i.pid)
                                : null),
                    )),
                    { runningGame: n ?? void 0, runningGameApplication: eZ.A.getApplication(s) ?? void 0 });
            null != l && (0, tG.x8)(l.id, e);
        },
        useTitle: () => m.intl.string(m.t.wgVQND),
        useSubtitle: () => m.intl.string(m.t["5SsyF5"]),
    }),
    tM = (0, o.zZ)(d.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [tD, tU, tj] });
var tV = i(93465);
let tk = [
    {
        title: m.t.eVE4LX,
        description: m.t["72WNqk"],
        disabledSetting: tV.M.TEXT_CHAT,
        key: d.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: m.t.oifnSh,
        description: m.t.bgU5r0,
        disabledSetting: tV.M.WELCOME_GENERAL,
        key: d.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: m.t.hqsZJW,
        description: m.t.kHjdqc,
        disabledSetting: tV.M.GO_LIVE_NUDGE,
        key: d.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: m.t.sop3rn,
        description: m.t.pjgffc,
        disabledSetting: tV.M.GAME_ACTIVITY,
        key: d.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: m.t["2QVhbb"],
        description: m.t.wQ4ilB,
        disabledSetting: tV.M.NOW_PLAYING,
        key: d.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: m.t.giM9fA,
        description: m.t.EhAfWj,
        disabledSetting: tV.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: d.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, ef.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, R.bG)([eN.A], () => eN.A.isNotificationDisabledBySetting(tV.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function tw(e) {
    return (0, o.zD)(e.key, {
        useTitle: () => m.intl.string(e.title),
        useSubtitle: () => m.intl.string(e.description),
        useValue: () => !(0, R.bG)([eN.A], () => eN.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            e4.A.setNotificationDisabledSetting(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let tF = (0, o.FW)(d.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => m.intl.string(m.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => tk.map(tw),
    }),
    tB = (0, o.zZ)(d.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => m.intl.string(m.t.xOE5bA),
        buildLayout: () => [tF],
    }),
    tz = (0, o.Hn)(d.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
        useTitle: () => m.intl.string(m.t.dnvZSg),
        useValue: () => (0, R.bG)([ev.default], () => ev.default.getAvatarSizeMode()),
        setValue: (e) => {
            e4.A.setAvatarSizeMode(e);
        },
        useOptions: () => [
            { id: "large", label: m.intl.string(m.t.YcOxtr), value: Q.OSZ.LARGE },
            { id: "small", label: m.intl.string(m.t.BKIKqx), value: Q.OSZ.SMALL },
        ],
    }),
    tY = (0, o.Hn)(d.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => m.intl.string(m.t.J0dpcB),
        useValue: () => (0, R.bG)([ev.default], () => ev.default.getDisplayNameMode()),
        setValue: (e) => {
            e4.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: m.intl.string(m.t.nBmDrT), value: Q.pwA.ALWAYS },
            { id: "speaking", label: m.intl.string(m.t["2OvIZY"]), value: Q.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: m.intl.string(m.t.ekjlPL), value: Q.pwA.NEVER },
        ],
    }),
    tX = (0, o.Hn)(d.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => m.intl.string(m.t.swsWWC),
        useValue: () => (0, R.bG)([ev.default], () => ev.default.getDisplayUserMode()),
        setValue: (e) => {
            e4.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: m.intl.string(m.t.nBmDrT), value: Q.f5z.ALWAYS },
            { id: "speaking", label: m.intl.string(m.t["2OvIZY"]), value: Q.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var tH = i(391973),
    tK = i(489277),
    tW = i(897720),
    tZ = i(38502);
function tq() {
    let e = tK.A.getWidgetByType(Q.uss.VOICE_V3);
    if (null == e) return null;
    let t = tZ.A.getWidget(e.id);
    return null != t && (0, tW.ZO)(t) ? t : null;
}
i(392164);
let tQ = (0, o.sN)(d.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => m.intl.string(m.t["X/Uyzc"]),
    minValue: 0,
    maxValue: 25,
    markers: [0, 5, 10, 15, 20, 25],
    onMarkerRender: (e) => (e < 1 ? m.intl.string(m.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = tq();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < 1 ? m.intl.string(m.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = tq();
        null != t &&
            (e < 1
                ? (0, tH.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, tH.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
var tJ = i(43990),
    t$ = i(450740),
    t0 = i(968898),
    t1 = i(95701),
    t2 = i(889227),
    t3 = i(288737),
    t6 = i(287809),
    t4 = i(403362);
function t7(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new t3.A({
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
        user: new t2.A({ id: s, username: e }),
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
let t5 = (0, o.E2)(d.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
        Component: function () {
            let e,
                t = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()),
                {
                    avatarSizeMode: i,
                    displayNameMode: n,
                    displayUserMode: s,
                } = (0, R.cf)([ev.default], () => ({
                    avatarSizeMode: ev.default.getAvatarSizeMode(),
                    displayNameMode: ev.default.getDisplayNameMode(),
                    displayUserMode: ev.default.getDisplayUserMode(),
                })),
                [l] = N.useState(() => [
                    t7(m.intl.string(m.t.C0ZDvo), !0, !1),
                    t7(m.intl.string(m.t.iOtj8E), !1, !1, !0),
                    t7(m.intl.string(m.t["0oqNgL"]), !1, !0),
                ]),
                r = (0, R.bG)([tK.A, tZ.A], () => {
                    let e = tK.A.getWidgetByType(Q.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = tZ.A.getWidget(e.id);
                    return null != t && (0, tW.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = t7(t.username)).user = t), e) : null, ...l].filter(t4.Vq),
                u = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                d = (0, f.jsx)(tJ.N, {
                    theme: Q.NJ8.MIDNIGHT,
                    children: (e) =>
                        (0, f.jsxs)("div", {
                            className: eF()(ez.Y5, e),
                            children: [
                                (0, f.jsx)("div", {
                                    className: ez.kJ,
                                    children: (0, f.jsx)(t$.DH, {
                                        id: "voice-widget",
                                        title: m.intl.string(m.t.KNJ6Vq),
                                        channel: (0, t1.createChannelRecord)({
                                            id: "123",
                                            name: "Test Channel",
                                            type: Q.rbe.GUILD_VOICE,
                                            guild_id: "456",
                                        }),
                                        overlayVoiceStates: u,
                                        displayNameMode: n,
                                        displayUserMode: s,
                                        avatarSizeMode: i,
                                        widget: Q.uss.VOICE,
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
                                (0, f.jsxs)("div", {
                                    className: ez.R$,
                                    children: [
                                        (0, f.jsx)(t0.Pl, { children: m.intl.string(m.t.KNJ6Vq) }),
                                        (0, f.jsx)(t0.CS, {}),
                                        (0, f.jsx)(t0.O0, { id: r?.id ?? "voice-widget", pinned: r?.pinned ?? !1 }),
                                    ],
                                }),
                            ],
                        }),
                });
            return (0, f.jsx)("div", { className: ez.F9, children: d });
        },
        useSearchTerms: () => [],
    }),
    t8 = (0, o.zZ)(d.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => m.intl.string(m.t.r1TZfh),
        buildLayout: () => [t5, tz, tY, tX, tQ],
    });
var t9 = i(49999),
    ie = i(9025);
function it() {
    let [e, t] = (0, eS.kn)([eT.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
    return ((0, em.Ay)(() => () => {
        t(t9.i.AUTO_DISMISS);
    }),
    e !== eT.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, f.jsxs)(f.Fragment, {
              children: [
                  (0, f.jsxs)("div", {
                      className: ie.xC,
                      children: [
                          (0, f.jsx)("div", {
                              children: (0, f.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/10b8ab47f3371360233219f4b20fa86155553ddb810ceb8688654738bf7e15d0.png",
                                  alt: m.intl.string(m.t.mdXZh1),
                                  className: ie.tl,
                              }),
                          }),
                          (0, f.jsx)("div", {
                              children: (0, f.jsxs)("div", {
                                  className: ie.vJ,
                                  children: [
                                      (0, f.jsx)(eh.D, {
                                          variant: "heading-xl/medium",
                                          color: "text-strong",
                                          children: m.intl.string(m.t.jzjJQg),
                                      }),
                                      (0, f.jsx)(k.E, {
                                          variant: "text-md/normal",
                                          color: "text-muted",
                                          children: m.intl.string(m.t["5dOfxb"]),
                                      }),
                                  ],
                              }),
                          }),
                          (0, f.jsx)("div", {
                              children: (0, f.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/2aa57f16c71171fc8e0edb8cca60735f1192195344d17fa667de6d3ca8163ba0.png",
                                  alt: m.intl.string(m.t.mdXZh1),
                                  className: ie.lh,
                              }),
                          }),
                          (0, f.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: ie.VV,
                              children: (0, f.jsx)(eE.$, {
                                  variant: "primary",
                                  text: m.intl.string(m.t.Q26diF),
                                  onClick: () => void t(t9.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, f.jsx)(ex.c, { className: ie.yF }),
              ],
          });
}
function ii() {
    let e = (0, R.bG)([eC.A], () => eC.A.enabled),
        t = (0, ef.Mn)("OverlayStreamerModeNotice");
    return e && t
        ? (0, f.jsxs)(f.Fragment, {
              children: [
                  (0, f.jsx)(O.w, {
                      type: "warning",
                      children: m.intl.format(m.t.fuEX5B, {
                          onClick: () => (0, ey.openUserSettings)(d.X.STREAMER_MODE_CATEGORY),
                      }),
                  }),
                  (0, f.jsx)(ex.c, { className: ie.yF }),
              ],
          })
        : null;
}
let is = (0, o.t_)(d.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                eU(),
                eI.Ay.addChangeListener(eU),
                eN.A.addChangeListener(eU),
                ev.default.addChangeListener(eU),
                eb.default.addChangeListener(eU),
                ej.isPlatformEmbedded && (0, ep.a2)(),
                () => {
                    eI.Ay.removeChangeListener(eU),
                        eN.A.removeChangeListener(eU),
                        ev.default.removeChangeListener(eU),
                        eb.default.removeChangeListener(eU),
                        ej.isPlatformEmbedded && (0, ep.e0)();
                }
            );
        },
        useTitle: () => m.intl.string(m.t["9cb1Uz"]),
        decoration: {
            type: e_.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, f.jsxs)(f.Fragment, { children: [(0, f.jsx)(it, {}), (0, f.jsx)(ii, {})] });
            },
        },
        buildLayout: () => [tv, tM, t8, tB],
    }),
    il = (0, o.i4)(d.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t["9cb1Uz"]),
        icon: eA.l,
        usePredicate: eO.b_,
        buildLayout: () => [is],
    });
var ir = i(687966),
    ia = i(396478),
    io = i(270003),
    iu = i(227309),
    id = i(363195),
    ic = i(1215),
    ig = i(39623),
    im = i(952270),
    iA = i(138134),
    ih = i(414079),
    iE = i(29160),
    ix = i(650583),
    iT = i(150717),
    iS = i(653307);
let ip = (0, ej.isWindows)();
function iN(e) {
    let { rawGame: t, nowPlaying: n = !1, isOverride: s, subgames: l, isSubgame: r = !1, parentGame: a } = e,
        o = (0, R.cf)([eJ.Ay, tg.A, tm.A], () => (0, eJ.xU)(t, eJ.Ay, tg.A, tm.A)),
        { canToggleDetection: u, isCurrentGameDetectionEnabled: d } = (0, R.cf)([eJ.Ay], () => ({
            canToggleDetection: null == a || eJ.Ay.isDetectionEnabled(a),
            isCurrentGameDetectionEnabled: eJ.Ay.isDetectionEnabled(o),
        })),
        c = (0, R.bG)([eJ.Ay], () => eJ.Ay.getVisibleGame()),
        [g, A] = N.useState(!1),
        h = N.useMemo(
            () =>
                (0, tN.n1)(o)
                    ? r
                        ? o.gameName
                        : m.intl.formatToPlainString(m.t.G6BGdx, { subgameName: o.gameName })
                    : o.name,
            [o, r],
        ),
        [E, x] = N.useState(h ?? "???"),
        T = eF()(iS.tR, {
            [iT.LO]: !n,
            [iT.Rw]: n,
            [iT.FB]: null != o && n,
            [iT.xL]: r,
            [iT.fG]: null != l && l.length > 0,
        });
    function S() {
        null != l && l.length > 0 && d
            ? (0, C.openModalLazy)(async () => {
                  let { Modal: e } = await i.e("4823").then(i.bind(i, 158954));
                  return (t) =>
                      (0, f.jsx)(e, {
                          ...t,
                          title: m.intl.formatToPlainString(m.t.PZ4fKc, { platform: h }),
                          subtitle: m.intl.formatToPlainString(m.t.ZIQbfb, { platform: h }),
                          actions: [
                              { text: m.intl.string(m.t["ETE/oC"]), onClick: () => t.onClose(), variant: "secondary" },
                              {
                                  text: m.intl.string(m.t.Fmjztz),
                                  onClick: () => {
                                      e6.Ay.toggleDetection(o), t.onClose();
                                  },
                                  variant: "primary",
                              },
                          ],
                      });
              })
            : e6.Ay.toggleDetection(o);
    }
    let p = null != c && (0, eJ.Es)(o) === (0, eJ.Es)(c),
        _ = (null != a && a.id === c?.id) || p || (null != l && l.some((e) => e.id === c?.id));
    return (0, f.jsxs)(f.Fragment, {
        children: [
            (0, f.jsxs)("div", {
                className: T,
                children: [
                    (0, f.jsxs)("div", {
                        className: eF()(iT.$K, iS.Vd),
                        children: [
                            o.verified && !s
                                ? (0, f.jsxs)("div", {
                                      className: iT.HS,
                                      children: [
                                          (0, f.jsx)("div", { className: iT.mO, children: h }),
                                          (0, f.jsx)(e1.m, {
                                              text: m.intl.string(m.t["4PJP5p"]),
                                              children: (0, f.jsx)(e9.A, {
                                                  className: iT.qf,
                                                  size: 18,
                                                  color: F.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, f.jsx)(e2.U, {
                                                      size: "custom",
                                                      width: 18,
                                                      height: 18,
                                                      color: F.A.unsafe_rawColors.WHITE.css,
                                                  }),
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, f.jsx)("input", {
                                      className: eF()(iT.mO, iT.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: E,
                                      onBlur: function () {
                                          o.name !== E && e6.Ay.editName(o, E);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === ix.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
                                      },
                                      onChange: (e) => x(e.target.value),
                                  }),
                            (function () {
                                let e,
                                    t,
                                    { played: i, exePath: s } = o;
                                return (
                                    n || p
                                        ? (e = m.intl.string(m.t.VbV5dv))
                                        : null != i && "" !== i && (e = m.intl.format(m.t["gGeOE+"], { when: i })),
                                    (0, f.jsx)("div", {
                                        className: iT.GN,
                                        children: (0, f.jsx)(iE.A, {
                                            hoverText:
                                                null != s && "" !== s
                                                    ? ((t = s.replace(/^file:\/\//i, "")),
                                                      (0, ej.isWindows)() && (t = t.toUpperCase()),
                                                      t)
                                                    : "",
                                            children: e,
                                        }),
                                    })
                                );
                            })(),
                        ],
                    }),
                    s || g
                        ? null
                        : (0, f.jsx)("div", {
                              className: eF()(iS.tR, iS.oA, iS.LT, iT.E3),
                              children: (0, f.jsx)(e1.m, {
                                  text: m.intl.string(m.t["y0B+lo"]),
                                  children: (0, f.jsx)(V.D, {
                                      "aria-label": m.intl.string(m.t["y0B+lo"]),
                                      className: iT.ym,
                                      onClick: function () {
                                          if (g) return;
                                          let e = null != o.id ? tg.A.getDetectableGame(o.id) : null;
                                          X.default.track(Q.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
                                              application_id: e?.id,
                                              game_name: (0, tN.n1)(o) ? o.gameName : o.name,
                                          }),
                                              A(!0),
                                              (0, C.openModalLazy)(async () => {
                                                  let { default: t } = await Promise.all([
                                                      i.e("56600"),
                                                      i.e("27495"),
                                                  ]).then(i.bind(i, 651930));
                                                  return (i) =>
                                                      (0, f.jsx)(t, {
                                                          ...i,
                                                          detectedActivity: {
                                                              name: o.name ?? "",
                                                              application_id: e?.id ?? o.id ?? void 0,
                                                              type: Q.$pd.PLAYING,
                                                          },
                                                          onSubmitted: () => {},
                                                      });
                                              });
                                      },
                                      children: (0, f.jsx)(iA.i, {
                                          size: "md",
                                          color: "currentColor",
                                          className: iT.Lj,
                                          colorClass: iT.GS,
                                      }),
                                  }),
                              }),
                          }),
                    (function () {
                        let { detectable: e } = o,
                            t =
                                e && u
                                    ? (0, f.jsx)(ig.b, {
                                          size: "md",
                                          color: "currentColor",
                                          className: iT.Lj,
                                          colorClass: iT.GS,
                                      })
                                    : (0, f.jsx)(im.G, {
                                          size: "md",
                                          color: "currentColor",
                                          className: u ? iT.$V : iT.zN,
                                          colorClass: iT.GS,
                                      });
                        return (0, f.jsx)("div", {
                            className: eF()(iS.tR, iS.oA, iS.LT, iT.E3),
                            children: (0, f.jsx)(e1.m, {
                                text: m.intl.string(m.t.QmitzM),
                                children: u
                                    ? (0, f.jsx)(V.D, {
                                          "aria-label": m.intl.string(m.t.QmitzM),
                                          className: iT.ym,
                                          onClick: S,
                                          children: t,
                                      })
                                    : t,
                            }),
                        });
                    })(),
                    (function () {
                        if (!ip || null != a) return null;
                        let { overlay: e, overlayWarn: t } = o,
                            i = e
                                ? (0, f.jsx)(e3.k, {
                                      size: "md",
                                      color: "currentColor",
                                      className: iT.Lj,
                                      colorClass: iT.GS,
                                  })
                                : (0, f.jsx)(ic.n, {
                                      size: "md",
                                      color: "currentColor",
                                      className: iT.$V,
                                      colorClass: iT.GS,
                                  }),
                            n = t
                                ? (0, f.jsx)(e1.m, {
                                      text: m.intl.string(m.t.Vfw2L5),
                                      children: (0, f.jsx)("i", { className: iT.kb }),
                                  })
                                : null;
                        return (0, f.jsxs)("div", {
                            className: eF()(iS.tR, iS.oA, iS.LT, iT.E3),
                            children: [
                                n,
                                (0, f.jsx)(e1.m, {
                                    text: m.intl.string(m.t["1+O+Tu"]),
                                    children: (0, f.jsx)(V.D, {
                                        "aria-label": m.intl.string(m.t["1+O+Tu"]),
                                        className: iT.ym,
                                        onClick: () => {
                                            var t;
                                            return (t = !e), void e6.Ay.toggleOverlay(o, t, t);
                                        },
                                        children: i,
                                    }),
                                }),
                            ],
                        });
                    })(),
                    (n && !s) || _
                        ? null
                        : (0, f.jsx)(ih.A, {
                              className: iT.LS,
                              onClick: function () {
                                  e6.Ay.deleteEntry(o),
                                      l?.forEach((e) => {
                                          e6.Ay.deleteEntry(e);
                                      });
                              },
                          }),
                ],
            }),
            null != l &&
                l.length > 0 &&
                !n &&
                (0, f.jsx)("div", {
                    className: iT.AQ,
                    children: l.map((e, t) =>
                        (0, f.jsxs)(
                            N.Fragment,
                            {
                                children: [
                                    (0, f.jsx)(iN, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== l.length - 1 && (0, f.jsx)("div", { className: iT.PQ }),
                                ],
                            },
                            (0, eJ.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
i(321073);
let i_ = (0, i(583613).L_)(function () {
    for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
    return new Set(t.map((e) => e.exePath));
});
function iC() {
    let e = (0, R.yK)([eJ.Ay], () => eJ.Ay.getGamesSeen(!1)),
        t = (0, R.bG)([eJ.Ay], () => i_(...eJ.Ay.getOverrides()));
    N.useEffect(() => ((0, ep.a2)(), ep.e0), []);
    let { gameHistory: i, robloxSubgameHistory: n } = N.useMemo(
        () =>
            e.reduce((e, t) => ((0, tN.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                gameHistory: [],
                robloxSubgameHistory: [],
            }),
        [e],
    );
    return { gameHistory: i, robloxSubgameHistory: n, overrideExePaths: t };
}
var iI = i(818050);
function ib() {
    let e = (0, R.bG)([id.A], () => id.A.theme);
    return (0, f.jsxs)(ia.pp, {
        theme: e,
        className: iI.eT,
        children: [
            (0, f.jsx)(ia.G8, { darkSrc: i(839628), lightSrc: i(446404), width: 430, height: 250 }),
            (0, f.jsx)(ia.SG, { children: m.intl.string(m.t["1yiJwn"]) }),
        ],
    });
}
function iv() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: i } = iC();
    return 0 === e.length
        ? (0, f.jsx)(ib, {})
        : (0, f.jsx)(io.n, {
              children: (0, f.jsx)("div", {
                  children: e.map((e) =>
                      (0, f.jsx)(
                          iN,
                          { rawGame: e, isOverride: i.has(e.exePath), subgames: e.id === iu.a7 ? t : void 0 },
                          (0, eJ.Es)(e),
                      ),
                  ),
              }),
          });
}
let ij = (0, o.E2)(d.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, f.jsx)(iv, {}),
});
var iy = i(424994);
let iO = (0, o.zZ)(d.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [ij],
    useTitle: () => m.intl.string(m.t.jCOdvx),
    useSubtitle: () => m.intl.format(m.t.KPA3m9, { igdbLink: iy.s8 }),
});
var iR = i(305866),
    iL = i(783878),
    iD = i(197287),
    iP = i(604949);
function iG(e) {
    let { onClose: t } = e,
        i = (0, R.bG)([eJ.Ay], () => eJ.Ay.getCandidateGames()),
        [n, s] = N.useState(null),
        l = i.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, f.jsxs)(iR.l, {
        className: eF()(iD.H, iP.Y_),
        "aria-label": m.intl.string(m.t.GTCx0p),
        children: [
            (0, f.jsx)(iL.Z, {
                selectionMode: "single",
                placeholder: m.intl.string(m.t.XqMe3N),
                value: n,
                options: l,
                onSelectionChange: function (e) {
                    s(e);
                },
            }),
            (0, f.jsx)(ex.c, { className: eF()(iI.Ot, iI.QB) }),
            (0, f.jsxs)("div", {
                className: eF()(iD.o, iS.xM),
                children: [
                    (0, f.jsx)(B.Q, { variant: "secondary", text: m.intl.string(m.t["ETE/oC"]), onClick: t }),
                    (0, f.jsx)(eE.$, {
                        variant: "primary",
                        text: m.intl.string(m.t.GTCx0p),
                        disabled: null == n,
                        onClick: function () {
                            null != n && (e6.Ay.addGame(n.pid, n.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
var iU = i(564206);
let iM = (0, o.E2)(d.X.REGISTERED_GAMES_ADD_GAME_SETTING, {
    useSearchTerms: () => [m.intl.string(m.t.GTCx0p)],
    Component: () => {
        let e = N.useRef(null);
        return (0, f.jsxs)("div", {
            className: eF()(iU.a, iI.Gf),
            children: [
                (0, f.jsx)("span", { children: m.intl.string(m.t.xwhoqM) }),
                (0, f.jsx)(G.Y, {
                    targetElementRef: e,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, f.jsx)(iG, { onClose: t });
                    },
                    align: "center",
                    position: "bottom",
                    children: (t) =>
                        (0, f.jsx)(B.Q, {
                            ...t,
                            buttonRef: e,
                            variant: "primary",
                            textVariant: "text-sm/medium",
                            text: m.intl.string(m.t.GjgdXe),
                        }),
                }),
            ],
        });
    },
});
function iV() {
    return (0, f.jsx)("div", {
        className: eF()(iS.tR, iT.eS, iT.Rw),
        children: (0, f.jsxs)("div", {
            className: eF()(iT.$K, iS.Vd),
            children: [
                (0, f.jsx)("div", { className: iT.mO, children: m.intl.string(m.t.H68X9x) }),
                (0, f.jsx)("div", { className: iT.GN, children: m.intl.string(m.t.T5Ilmw) }),
            ],
        }),
    });
}
let ik = (0, o.E2)(d.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [m.intl.string(m.t["MY9/Oe"])],
        Component: () => {
            let { robloxSubgameHistory: e, overrideExePaths: t } = iC(),
                i = (0, R.bG)([eJ.Ay], () => eJ.Ay.getVisibleGame());
            return null != i
                ? (0, f.jsx)(
                      iN,
                      {
                          rawGame: i,
                          isOverride: t.has(i.exePath),
                          nowPlaying: !0,
                          subgames: i.id === iu.a7 ? e : void 0,
                      },
                      (0, eJ.Es)(i),
                  )
                : (0, f.jsx)(iV, {});
        },
    }),
    iw = (0, o.zZ)(d.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => m.intl.string(m.t["MY9/Oe"]),
        buildLayout: () => [ik, iM],
    }),
    iF = (0, o.t_)(d.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => m.intl.string(m.t.AVDyEj),
        buildLayout: () => [iw, iO],
    }),
    iB = (0, o.i4)(d.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t.AVDyEj),
        icon: ir._,
        usePredicate: eO.Pi,
        buildLayout: () => [iF],
    }),
    iz = (0, o.WI)(d.X.ACTIVITY_SECTION, {
        useTitle: () => m.intl.string(m.t.nVPpLM),
        buildLayout: () => [eg, iB, il],
    });
var iY = i(550640),
    iX = i(247928),
    iH = i(97808),
    iK = i(778712),
    iW = i(775602),
    iZ = i(320095),
    iq = i(963852),
    iQ = i(763754),
    iJ = i(20851),
    i$ = i(486020),
    i0 = i(382677);
let i1 = new t1.nA({ id: "1337", guild_id: "1337", type: Q.rbe.GUILD_TEXT, name: "preview" }),
    i2 = [
        { status: Q.clD.IDLE, discriminator: "2" },
        { status: Q.clD.DND, discriminator: "3" },
        { status: Q.clD.ONLINE, mobile: !0, discriminator: "4" },
    ];
function i3(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (0, iZ.rh)({ ...(0, iq.Ay)({ channelId: i1.id, content: e }), state: Q.cmJ.SENT, reactions: t });
}
var i6 = i(856488);
let i4 = (0, o.zD)(d.X.ENABLE_LEGACY_CHAT_INPUT, {
        useTitle: () => m.intl.string(m.t.TZ2hZH),
        useSubtitle: () => m.intl.string(m.t.Q7wgHc),
        useValue: () => g.D_.useSetting(),
        setValue: (e) => g.D_.updateSetting(e),
    }),
    i7 = (0, o.zD)(d.X.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS, {
        useTitle: () => m.intl.string(m.t.XYvMIX),
        useSubtitle: () => m.intl.string(m.t.T0rbtM),
        useValue: g._z.useSetting,
        setValue: g._z.updateSetting,
    });
var i5 = i(100767),
    i8 = i(106236),
    i9 = i(113494),
    ne = i(782134),
    nt = i(54570),
    ni = i(8880),
    nn = i(75804);
let ns = eL().debounce((e) => {
    (0, nt.zU)(e);
}, 250);
function nl() {
    let [e, t] = N.useState(!1);
    return (
        (0, em.l0)(() => (0, nt.pr)()),
        (0, f.jsx)(eE.$, {
            text: m.intl.string(m.t.SKNnqq),
            icon: e ? i9.E : ne.u,
            size: "sm",
            onClick: () => {
                if (e) {
                    (0, nt.pr)(), t(!1);
                    return;
                }
                (0, nt.AU)(
                    m.intl.string(m.t.PKaNJL),
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
let nr = (0, o.E2)(d.X.TTS_PLAYBACK_RATE, {
        useSearchTerms: () => [m.intl.string(m.t.lsW5Ev)],
        Component: function () {
            let e = (0, R.bG)([ni.A], () => ni.A.speechRate);
            return (0, f.jsxs)(L.B, {
                gap: 16,
                children: [
                    (0, f.jsx)(i8.A, {
                        label: m.intl.string(m.t.lsW5Ev),
                        description: m.intl.string(m.t.Ci4wMS),
                        markers: nn.P,
                        initialValue: e,
                        defaultValue: 1,
                        stickToMarkers: !0,
                        onValueChange: ns,
                        onValueRender: (e) => `x${e.toFixed(2)}`,
                        onMarkerRender: (e) =>
                            0 === e
                                ? (0, f.jsx)(k.E, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: m.intl.string(m.t["493lwX"]),
                                  })
                                : 10 === e
                                  ? (0, f.jsx)(k.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: m.intl.string(m.t.ZSZEdS),
                                    })
                                  : 1 === e
                                    ? (0, f.jsx)(k.E, {
                                          variant: "text-xs/medium",
                                          color: "text-feedback-positive",
                                          children: "x1.0",
                                      })
                                    : e % 1 == 0
                                      ? ""
                                      : void 0,
                    }),
                    (0, f.jsx)(nl, {}),
                ],
            });
        },
        usePredicate: () => i5.$j,
    }),
    na = (0, o.zZ)(d.X.AUDIO_AND_SCREEN_READER_CATEGORY, {
        useTitle: () => m.intl.string(m.t.XVR0Rb),
        buildLayout: () => [nr, i7, i4],
    }),
    no = (0, o.AK)(d.X.ACCESSIBILITY_TO_DISPLAY_NAVIGATOR, {
        useSubtitle: () => m.intl.string(m.t.aTfeGK),
        destinationKey: d.X.APPEARANCE_PANEL,
    }),
    nu = (0, o.gN)(d.X.COLOR_AND_CONTRAST_RELATED_SETTINGS, { buildLayout: () => [no] });
var nd = i(955572);
let nc = (0, o.zD)(d.X.DESATURATE_CUSTOM_COLORS, {
    useTitle: () => m.intl.string(m.t.OCJg5f),
    useSubtitle: () => m.intl.string(m.t.HEO0s3),
    useValue: () => (0, R.bG)([iW.A], () => iW.A.desaturateUserColors),
    setValue: () => (0, nd.YV)(),
});
var ng = i(652525);
let nm = (0, o.zD)(d.X.ENABLE_CUSTOM_CURSOR, {
        useTitle: () => m.intl.string(m.t["+Isihb"]),
        useSubtitle: () => m.intl.string(m.t.nNZ1Tz),
        useValue: () => (0, R.bG)([iW.A], () => iW.A.enableCustomCursor),
        setValue: (e) => (0, nd.ts)(e),
        usePredicate: () => (0, ng.t)("EnableCustomCursorSetting"),
    }),
    nA = (0, o.zD)(d.X.ENABLE_SWITCH_ICONS, {
        useTitle: () => m.intl.string(m.t["S3z+pV"]),
        useSubtitle: () => m.intl.string(m.t["3QuI9+"]),
        useValue: () => (0, R.bG)([iW.A], () => iW.A.isSwitchIconsEnabled),
        setValue: (e) => (0, nd.Gm)(e),
        hasIcon: !0,
    }),
    nh = (0, o.zD)(d.X.HIGH_CONTRAST_MODE, {
        useTitle: () => m.intl.string(m.t.aZlePv),
        useSubtitle: () => m.intl.string(m.t["v2qF8+"]),
        useValue: () => (0, R.bG)([iW.A], () => iW.A.isHighContrastModeEnabled),
        setValue: (e) => (0, nd.uh)(e ? iW._.HIGH : iW._.DEFAULT),
        getDismissibleBadges: () => [
            { badgeType: e_.Xi.NEW, dismissibleContent: eT.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE },
        ],
    });
var nE = i(406360),
    nx = i(742023);
let nT = (0, o.Qx)(d.X.HIGH_DYNAMIC_RANGE, {
        useTitle: () => m.intl.string(m.t.nemtgW),
        useSubtitle: () => m.intl.string(m.t["O/Gjvn"]),
        usePersistentBadge: () => ({ badgeType: e_.Xi.BETA }),
        useOptions: function () {
            return N.useMemo(
                () => [
                    { name: m.intl.string(m.t.D5Fma9), desc: m.intl.string(m.t.Qj75ck), value: "no-limit" },
                    { name: m.intl.string(m.t.ldcGIH), desc: m.intl.string(m.t["+V/bDk"]), value: "standard" },
                ],
                [],
            );
        },
        usePredicate: function () {
            return (0, nE.i)("HDRDynamicRangeSetting");
        },
        setValue: function (e) {
            (0, nd.FU)(e);
        },
        useValue: function () {
            return (0, R.bG)([nx.Ay], () => nx.Ay.hdrDynamicRange);
        },
        useSearchTerms: () => ["HDR", m.intl.string(m.t["O/Gjvn"])],
    }),
    nS = (0, o.Hn)(d.X.ROLE_STYLE, {
        useTitle: () => m.intl.string(m.t.uSOPWm),
        useSubtitle: () => m.intl.string(m.t.u7fFKS),
        useOptions: () => [
            { id: "username", label: m.intl.string(m.t.eDdMzJ), value: "username" },
            { id: "dot", label: m.intl.string(m.t.rdmJp0), value: "dot" },
            { id: "hidden", label: m.intl.string(m.t.Ji2EVJ), value: "hidden" },
        ],
        useValue: () => (0, R.bG)([iW.A], () => iW.A.roleStyle),
        setValue: (e) => (0, nd.IX)(e),
    });
(0, o.Qx)(d.X.ROLE_STYLE, {
    useTitle: () => m.intl.string(m.t.uSOPWm),
    useSubtitle: () => m.intl.string(m.t["86hjzQ"]),
    useOptions: () => [
        { name: m.intl.string(m.t.YEOEi6), value: "username" },
        { name: m.intl.string(m.t.mQaro3), value: "dot" },
        { name: m.intl.string(m.t.Ji2EVJ), value: "hidden" },
    ],
    useValue: () => (0, R.bG)([iW.A], () => iW.A.roleStyle),
    setValue: (e) => (0, nd.IX)(e),
});
let np = (0, o.sN)(d.X.SATURATION, {
    useTitle: () => m.intl.string(m.t["5PWWCY"]),
    useSubtitle: () => m.intl.string(m.t.xf5S6P),
    markers: Q.hH7.SATURATION_INCREMENTS,
    onMarkerRender: (e) => ((100 * e) % 2 == 0 ? `${100 * e}%` : void 0),
    stickToMarkers: !0,
    minValue: 0,
    maxValue: 1,
    getInitialValue: () => iW.A.saturation,
    asValueChanges: (e) => (0, nd.HU)(e),
});
var nf = i(839214),
    nN = i(502229);
let n_ = (0, nf.D)(() => ({ syncEnabled: null, updateTimeout: null })),
    nC = (0, o.zD)(d.X.SYNC_FORCED_COLORS, {
        useTitle: () => m.intl.string(m.t.cguiec),
        useSubtitle: () => m.intl.format(m.t.GwEVE2, { learnMoreLink: to.A.getArticleURL(Q.MVz.FORCED_COLORS) }),
        useValue: () => {
            let e = (0, R.bG)([iW.A], () => iW.A.syncForcedColors);
            return (
                (0, e5.Ay)(() => {
                    n_.setState({ syncEnabled: iW.A.syncForcedColors });
                }),
                n_.useState((e) => e.syncEnabled) ?? e
            );
        },
        setValue: (e) => {
            let { updateTimeout: t } = n_.getState();
            if (null != t) {
                clearTimeout(t), n_.setState({ syncEnabled: e, updateTimeout: null });
                return;
            }
            if (e === iW.A.syncForcedColors) return void n_.setState({ syncEnabled: e });
            let i = setTimeout(() => {
                (0, nd.D3)(e), n_.setState({ updateTimeout: null });
            }, 150);
            n_.setState({ syncEnabled: e, updateTimeout: i });
        },
        usePredicate: () => (0, nN.D)(),
    }),
    nI = (0, o.zZ)(d.X.COLOR_AND_CONTRAST_CATEGORY, {
        useTitle: () => m.intl.string(m.t.JqvyiY),
        buildLayout: () => [np, nc, nh, nm, nC, nT, nS, nA, nu],
    });
var nb = i(397438),
    nv = i(355097);
function nj(e) {
    return (0, R.bG)([nb.A], () =>
        (function (e) {
            switch (e) {
                case nv._A.REDUCED_MOTION:
                    return m.intl.format(m.t["1dT9V4"], {});
                case nv._A.REDUCED_MOTION_STICKERS:
                    return m.intl.string(m.t["2ExvRu"]);
                default:
                    return;
            }
        })(nb.A.getAppliedOverrideReasonKey(e)),
    );
}
let ny = (0, o.zD)(d.X.ANIMATE_EMOJIS, {
        useTitle: () => m.intl.string(m.t.iIaOlc),
        useSubtitle: () => nj("animateEmoji"),
        useValue: () => g.Sf.useSetting(),
        setValue: (e) => g.Sf.updateSetting(e),
    }),
    nO = (0, o.zD)(d.X.ANIMATE_GIFS, {
        useTitle: () => m.intl.string(m.t.wqsK7q),
        useSubtitle: () => nj("gifAutoPlay"),
        useValue: () => g.kt.useSetting(),
        setValue: (e) => g.kt.updateSetting(e),
    });
var nR = i(823894);
let nL = (0, o.Qx)(d.X.ANIMATE_STICKERS, {
        useTitle: () => m.intl.string(m.t.sBHIh0),
        useSubtitle: () => nj("animateStickers"),
        useOptions: () => [
            { name: m.intl.string(m.t["Xp+X2U"]), value: nR.BJ.ALWAYS_ANIMATE },
            { name: m.intl.string(m.t.IlLT7e), desc: m.intl.string(m.t.bIW9Tl), value: nR.BJ.ANIMATE_ON_INTERACTION },
            { name: m.intl.string(m.t.IGu8x3), value: nR.BJ.NEVER_ANIMATE },
        ],
        useValue: () => g.S0.useSetting(),
        setValue: (e) => g.S0.updateSetting(e),
    }),
    nD = (0, o.zD)(d.X.REDUCED_MOTION, {
        useTitle: () => m.intl.string(m.t.b3XBzg),
        useSubtitle: () => m.intl.format(m.t.XqvxJc, { helpdeskArticle: to.A.getArticleURL(Q.MVz.REDUCED_MOTION) }),
        useValue: () => (0, R.bG)([iW.A], () => iW.A.useReducedMotion),
        setValue: (e) => (0, nd.qz)(e ? "reduce" : "no-preference"),
    }),
    nP = (0, o.zD)(d.X.SYNC_REDUCED_MOTION, {
        useTitle: () => m.intl.string(m.t.oL55A6),
        useValue: () => (0, R.bG)([iW.A], () => "auto" === iW.A.rawPrefersReducedMotion),
        setValue: (e) => (0, nd.qz)(e ? "auto" : iW.A.systemPrefersReducedMotion),
    }),
    nG = (0, o.zZ)(d.X.MOTION_CATEGORY, {
        useTitle: () => m.intl.string(m.t.e3TR1b),
        buildLayout: () => [nD, nP, nO, ny, nL],
    });
var nU = i(688810),
    nM = i(259065),
    nV = i(864386);
let nk = (0, o.zD)(d.X.DISPLAY_NAME_STYLES, {
        useTitle: () => m.intl.string(nV.default["2gFUEw"]),
        useSubtitle: () => {
            let { analyticsLocations: e } = (0, nU.Ay)();
            return m.intl.format(nV.default.aEax6P, {
                onClickOpenModal() {
                    (0, nM.L)({ analyticsLocations: e });
                },
            });
        },
        useValue: () => (0, R.bG)([iW.A], () => iW.A.displayNameStylesEnabled),
        setValue: (e) => (0, nd.Dm)(e),
    }),
    nw = (e) => `${e.toFixed(0)}px`,
    nF = (0, o.sN)(d.X.APPEARANCE_FONT_SCALING, {
        useTitle: () => m.intl.string(m.t.rT3Pq5),
        useSubtitle: () => m.intl.string(m.t.LXUhen),
        markers: Q.hH7.FONT_SIZES,
        stickToMarkers: !0,
        minValue: Q.hH7.FONT_SIZES["0"],
        maxValue: Q.hH7.FONT_SIZES[Q.hH7.FONT_SIZES.length - 1],
        useDefaultValue: () => Q.hH7.FONT_SIZE_DEFAULT,
        getInitialValue: () => iW.A.fontSize,
        onValueRender: nw,
        onMarkerRender: nw,
        asValueChanges: (e) => (0, nd.XS)(e),
    }),
    nB = (0, o.zD)(d.X.UNDERLINE_LINKS, {
        useTitle: () => m.intl.string(m.t.OLZFB8),
        useSubtitle: () => m.intl.string(m.t.DIX3ke),
        useValue: () => (0, R.bG)([iW.A], () => iW.A.alwaysShowLinkDecorations),
        setValue: (e) => (0, nd.kI)(e),
    }),
    nz = (0, o.zZ)(d.X.TEXT_READABILITY_CATEGORY, {
        useTitle: () => m.intl.string(m.t["bxh/R7"]),
        buildLayout: () => [nF, nB, nk],
    }),
    nY = (0, o.Qx)(d.X.APPEARANCE_UI_DENSITY, {
        useTitle: () => m.intl.string(m.t["C/5V0A"]),
        useSubtitle: () => m.intl.string(m.t.QLZhYk),
        useSearchTerms: () => ["List Spacing"],
        useOptions: () => [
            { name: m.intl.string(m.t["7iegX4"]), value: _.NS.COMPACT },
            { name: m.intl.string(m.t.bBvAEH), value: _.NS.DEFAULT },
            { name: m.intl.string(m.t["4cuYHx"]), value: _.NS.COZY },
        ],
        useValue: () => g.Xi.useSetting(),
        setValue: (e) => {
            e !== _.NS.UNSET_UI_DENSITY && g.Xi.updateSetting(e);
        },
    }),
    nX = "cozy",
    nH = "compact",
    nK = (0, o.Qx)(d.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
        useTitle: () => m.intl.string(m.t.nKRoPv),
        useSubtitle: () => m.intl.string(m.t.QntEEG),
        useSearchTerms: () => [m.intl.string(m.t.ZEoGMd)],
        useOptions: () => [
            { name: m.intl.string(m.t.Jqj4cZ), value: nX },
            { name: m.intl.string(m.t["1JNcPS"]), value: nH },
        ],
        useValue: () => (g.hH.useSetting() ? nH : nX),
        setValue: (e) => {
            g.hH.updateSetting(e === nH), (0, nd.AC)();
        },
    });
var nW = i(381941);
let nZ = (e) => `${e.toFixed(0)}px`,
    nq = (0, o.sN)(d.X.APPEARANCE_MESSAGE_GROUP_SPACING, {
        useTitle: () => m.intl.string(m.t.Q6lKkg),
        useSubtitle: () => m.intl.string(m.t.p7eUrb),
        markers: nW.qh,
        stickToMarkers: !0,
        minValue: nW.qh["0"],
        maxValue: nW.qh[nW.qh.length - 1],
        useDefaultValue: () => (g.hH.useSetting() ? nW.y5 : nW.ES),
        useExternalValue: () => (0, R.bG)([iW.A], () => iW.A.messageGroupSpacing),
        getInitialValue: () => iW.A.messageGroupSpacing,
        onValueRender: nZ,
        onMarkerRender: nZ,
        asValueChanges: (e) => {
            switch (e) {
                case 0:
                case 4:
                case 8:
                case 16:
                case 24:
                    (0, nd.AC)(e);
            }
        },
    });
var nQ = i(775121);
let nJ = (0, o.sN)(d.X.APPEARANCE_ZOOM, {
        usePredicate: () => ej.isPlatformEmbedded,
        useTitle: () => m.intl.string(m.t.i19n5L),
        useSubtitle: () => m.intl.format(m.t["x9PK/3"], { modKey: nQ.A.modKey }),
        markers: Q.hH7.ZOOM_SCALES,
        stickToMarkers: !0,
        minValue: Q.hH7.ZOOM_SCALES["0"],
        maxValue: Q.hH7.ZOOM_SCALES[Q.hH7.ZOOM_SCALES.length - 1],
        useDefaultValue: () => Q.hH7.ZOOM_DEFAULT,
        getInitialValue: () => iW.A.zoom,
        useExternalValue: () => (0, R.bG)([iW.A], () => iW.A.zoom),
        onValueRender: (e) => `${e.toFixed(0)}%`,
        setValue: (e) => (0, nd.Qp)(e),
        useSearchTerms: () => [m.intl.string(m.t.ip0uSf)],
    }),
    n$ = (0, o.zZ)(d.X.VISUAL_DENSITY_CATEGORY, {
        useTitle: () => m.intl.string(m.t.VKYWk8),
        buildLayout: () => [nY, nK, nq, nJ],
    }),
    n0 = (0, o.t_)(d.X.ACCESSIBILITY_PANEL, {
        useTitle: () => m.intl.string(m.t.G0neg7),
        buildLayout: () => [nz, n$, nI, nG, na],
        decoration: {
            type: e_.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                let e = g.hH.useSetting(),
                    t = g.jW.useSetting(),
                    i = N.useMemo(
                        () => [
                            i3(
                                m.intl.formatToPlainString(m.t.BknJRT, {}),
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
                            i3(
                                m.intl.formatToPlainString(m.t["4rDfgM"], {
                                    link: "https://discord.com/accessibility",
                                }),
                            ),
                        ],
                        [t],
                    ),
                    n = (0, R.bG)([iW.A], () => iW.A.messageGroupSpacing);
                return (0, f.jsx)(iX.M, {
                    "aria-hidden": !0,
                    children: (0, f.jsxs)("section", {
                        children: [
                            (0, f.jsx)(eh.D, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                className: i0.Vf,
                                children: m.intl.string(m.t.RC22qg),
                            }),
                            (0, f.jsxs)(tp.Ip, {
                                className: i0.VH,
                                children: [
                                    (0, f.jsx)("ol", {
                                        className: i0.DZ,
                                        style: { gap: n },
                                        "aria-label": m.intl.string(m.t.xfjsEV),
                                        children: i.map((t) =>
                                            (0, f.jsx)(
                                                "li",
                                                {
                                                    children: (0, f.jsx)(iJ.A, {
                                                        message: t,
                                                        channel: i1,
                                                        compact: e,
                                                        author: { ...(0, iQ.p_)(t), colorString: "#dd80f4" },
                                                    }),
                                                },
                                                t.id,
                                            ),
                                        ),
                                    }),
                                    (0, f.jsxs)("div", {
                                        className: i0.Jb,
                                        children: [
                                            (0, f.jsx)("div", {
                                                className: i0.HD,
                                                children: i2.map((e) => {
                                                    let { status: t, discriminator: i, mobile: n = !1 } = e;
                                                    return (0, f.jsx)(
                                                        iH.eu,
                                                        {
                                                            status: t,
                                                            isMobile: n,
                                                            size: iK._3.SIZE_32,
                                                            src: i$.Ay.getDefaultAvatarURL(void 0, i),
                                                            "aria-label": m.intl.string(m.t.VKE5TK),
                                                        },
                                                        t,
                                                    );
                                                }),
                                            }),
                                            (0, f.jsx)(eE.$, {
                                                text: m.intl.string(m.t["2RHHgz"]),
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
    n1 = (0, o.i4)(d.X.ACCESSIBILITY_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t.G0neg7),
        icon: iY.c,
        useMenu: i6.A,
        buildLayout: () => [n0],
    });
var n2 = i(650809),
    n3 = i(636537),
    n6 = i(228366),
    n4 = i(74396),
    n7 = i(269880),
    n5 = i(55619),
    n8 = i(777666),
    n9 = i(574381),
    se = i(314116),
    st = i(19575),
    si = i(546385);
let sn = (0, o.E2)(d.X.HARDWARE_ACCELERATION, {
    usePredicate: () => n9.Av && !(0, n9.cX)(),
    useSearchTerms: () => [m.intl.string(m.t["/HIxyY"]), m.intl.string(m.t.B0hqpb)],
    Component: function () {
        let [e] = N.useState(() => st.Ay.getEnableHardwareAcceleration()),
            t = m.intl.string(m.t["/HIxyY"]),
            i = m.intl.string(m.t.B0hqpb);
        return (0, f.jsxs)(L.B, {
            children: [
                (0, f.jsx)(D.d, { label: t, description: i, checked: e, onChange: ss }),
                !e && (0, f.jsx)(si.A, { look: si.k.WARNING, children: m.intl.string(m.t.j7S6IX) }),
            ],
        });
    },
});
function ss(e) {
    let t = e ? m.intl.format(m.t.LYXRxL, {}) : m.intl.format(m.t.uDP3Kz, {});
    (0, se.A)({
        title: m.intl.string(m.t.aqpAvn),
        subtitle: t,
        confirmText: m.intl.string(m.t.vT7ckk),
        onConfirm: () => {
            st.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
let sl = (0, o.zD)(d.X.SHOW_GAME_LIBRARY, {
        usePredicate: () => (0, R.bG)([tm.A], () => tm.A.hasLibraryApplication()),
        useTitle: () => m.intl.string(m.t.fi3UQN),
        useSubtitle: () => m.intl.string(m.t["8mYp37"]),
        useValue: () => !g.l_.useSetting(),
        setValue: (e) => g.l_.updateSetting(!e),
    }),
    sr = (0, o.zZ)(d.X.APPEARANCE_ADVANCED_CATEGORY, {
        useTitle: () => m.intl.string(m.t["8/udY0"]),
        buildLayout: () => [sn, sl],
    });
var sa = i(565645);
let so = (0, o.zD)(d.X.CHAT_EMOJI_CONVERT_EMOTICONS, {
        useTitle: () => m.intl.string(m.t["79qal8"]),
        useSubtitle: () =>
            m.intl.format(m.t.GejoQK, { emojiHook: (e, t) => (0, f.jsx)(sa.A, { emojiName: "\uD83D\uDE42" }, t) }),
        useValue: g.j7.useSetting,
        setValue: g.j7.updateSetting,
    }),
    su = (0, o.zD)(d.X.ENABLE_SEND_BUTTON, {
        useTitle: () => m.intl.string(m.t["I/5LyL"]),
        useValue: () => (0, R.bG)([iW.A], () => iW.A.isSubmitButtonEnabled),
        setValue: () => (0, nd.Xt)(),
    }),
    sd = (0, o.zD)(d.X.CHAT_TEXT_BOX_PREVIEWS, {
        useTitle: () => m.intl.string(m.t.AqGrEI),
        useValue: g.SI.useSetting,
        setValue: (e) => {
            X.default.track(Q.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: e,
                location: { section: Q.JJy.SETTINGS_TEXT_AND_IMAGES },
            }),
                g.SI.updateSetting(e);
        },
    }),
    sc = (0, o.zD)(d.X.CHAT_STICKERS_AUTOCOMPLETE, {
        useTitle: () => m.intl.string(m.t["d+It2U"]),
        useValue: g.ML.useSetting,
        setValue: (e) => {
            X.default.track(Q.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                enabled: e,
                location: { section: Q.JJy.SETTINGS_TEXT_AND_IMAGES },
                location_stack: [eV.A.TEXT_AND_IMAGES],
            }),
                g.ML.updateSetting(e);
        },
    }),
    sg = (0, o.zZ)(d.X.APPEARANCE_CHAT_BOX_CATEGORY, {
        useTitle: () => m.intl.string(m.t.Ob7VMB),
        useSearchTerms: () => [m.intl.string(m.t.onqU6o)],
        buildLayout: () => [sd, so, sc, su],
    });
var sm = i(526162),
    sA = i(793943),
    sh = i(792656),
    sE = i(830543),
    sx = i(785007),
    sT = i(806932),
    sS = i(915089),
    sp = i(174197),
    sf = i(788868);
let sN = (0, o.E2)(d.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [m.intl.string(m.t.gnwxvT)],
    Component: function () {
        let e = (0, sS.GV)(),
            { ref: t, ...i } = (0, sx._u)({ orientation: "horizontal", labelledBy: e }),
            n = (0, R.bG)([sm.A], () => sm.A.isUpsellPreview);
        return (
            (0, em.Ay)(() => {
                n &&
                    X.default.track(Q.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: sf.e.APP_ICON_UPSELL,
                        location_stack: [eV.A.USER_SETTINGS],
                    });
            }),
            (0, f.jsx)("div", {
                ...i,
                ref: t,
                children: (0, f.jsx)(L.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    children: (0, f.jsx)(sT.m, { disabled: n, size: sp.N8.SIZE_48 }),
                }),
            })
        );
    },
});
function s_() {
    (0, sA.nf)(sA.HP.APP_ICON), (0, sE.default)();
}
function sC() {
    return (0, f.jsx)(sh.A, {
        subscriptionTier: sf.pe.TIER_2,
        defaultTextOverride: m.intl.string(m.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: Q.ZSU.BUTTON_CTA, objectType: Q.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
let sI = (0, o.zZ)(d.X.APPEARANCE_IN_APP_ICON_CATEGORY, {
        useTitle: () => m.intl.string(m.t.RPh2ou),
        useSubtitle: () => m.intl.string(m.t.IgENJo),
        useHeaderDecoration: function () {
            let e = (0, R.bG)([sm.A], () => sm.A.isUpsellPreview);
            return N.useMemo(() => {
                let t = [];
                return (
                    t.push({
                        id: "preview-icon-button",
                        type: e_.UV.BUTTON,
                        text: m.intl.string(m.t["6acvnZ"]),
                        onClick: s_,
                    }),
                    e && t.push({ id: "upsell-button", type: e_.UV.STRONGLY_DISCOURAGED_CUSTOM, button: sC }),
                    { type: e_.WX.BUTTON_GROUP, buttons: t }
                );
            }, [e]);
        },
        buildLayout: () => [sN],
    }),
    sb = (0, o.AK)(d.X.APPEARANCE_CHAT_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => m.intl.string(m.t.UDr3Iy),
        useSearchTerms: () => [m.intl.string(m.t.UDr3Iy)],
        destinationKey: d.X.ACCESSIBILITY_PANEL,
    }),
    sv = (0, o.gN)(d.X.APPEARANCE_CHAT_RELATED_SETTINGS, { buildLayout: () => [sb] });
var sj = i(379587),
    sy = i(452027),
    sO = i(976860),
    sR = i(474090),
    sL = i(181079),
    sD = i(422258),
    sP = i(668267),
    sG = i(313281),
    sU = i(335993);
let sM = to.A.getArticleURL(Q.MVz.FAVORITES_GUILD);
function sV() {
    let { analyticsLocations: e } = (0, nU.Ay)(eV.A.USER_SETTINGS_FAVORITES),
        t = N.useCallback(() => {
            (0, sP.mv)("settings_page"), (0, sO.uh)(Q.YYv), (0, sE.default)();
        }, []);
    return (0, f.jsx)(nU.f5, {
        value: e,
        children: (0, f.jsx)(sy.D, {
            label: m.intl.string(sU.default.OT1NK5),
            description: m.intl.format(sU.default.GR2KOG, { helpCenterLink: sM }),
            layout: "horizontal-responsive",
            badge: "beta",
            children: (0, f.jsxs)(L.B, {
                direction: "horizontal",
                gap: 8,
                fullWidth: !1,
                children: [
                    (0, f.jsx)(eE.$, { variant: "secondary", text: m.intl.string(sU.default["7WwLnr"]), onClick: t }),
                    (0, f.jsx)(sh.A, {
                        subscriptionTier: sf.pe.TIER_2,
                        defaultTextOverride: m.intl.string(sU.default["20sYUU"]),
                    }),
                ],
            }),
        }),
    });
}
let sk = (0, o.E2)(d.X.CHAT_FAVORITES_TOGGLE, {
        usePredicate: () => (0, sj.m)({ location: "FavoritesGuildToggle" }).enabled,
        useSearchTerms: () => [m.intl.string(sU.default.OT1NK5)],
        Component: function () {
            let e = (0, R.bG)([sL.A], () => sL.A.favoriteGuildEnabled),
                t = (0, R.bG)([t6.default], () => {
                    let e = t6.default.getCurrentUser();
                    return null != e && sR.Ay.isPremiumExactly(e, sf.PremiumTypes.TIER_2);
                }),
                i = (0, sG.DZ)(),
                n = N.useCallback(
                    (e) => {
                        (0, sD.tV)(e, "settings_page"), !e && i && (0, sO.pX)(Q.BVt.ME);
                    },
                    [i],
                );
            return t
                ? (0, f.jsx)(D.d, {
                      checked: e,
                      description: m.intl.format(sU.default.GR2KOG, { helpCenterLink: sM }),
                      onChange: n,
                      label: m.intl.string(sU.default.OT1NK5),
                      badge: "beta",
                  })
                : (0, f.jsx)(sV, {});
        },
    }),
    sw = (0, o.zD)(d.X.CHAT_INLINE_MEDIA_LINKS, {
        useTitle: () => m.intl.string(m.t.U47N1p),
        useValue: g.hD.useSetting,
        setValue: g.hD.updateSetting,
    }),
    sF = (0, o.zD)(d.X.CHAT_INLINE_MEDIA_UPLOADS, {
        useTitle: () => m.intl.string(m.t.VP11No),
        useValue: g.X6.useSetting,
        setValue: g.X6.updateSetting,
    }),
    sB = (0, o.FW)(d.X.CHAT_INLINE_FIELD_SET, {
        useTitle: () => m.intl.string(m.t["9nyle0"]),
        buildLayout: () => [sw, sF],
    }),
    sz = (0, o.zD)(d.X.CHAT_EMBEDS_RENDER_EMBEDS, {
        useTitle: () => m.intl.string(m.t["5bK9vw"]),
        useValue: g.rs.useSetting,
        setValue: g.rs.updateSetting,
    }),
    sY = (0, o.zD)(d.X.CHAT_EMOJI_RENDER_REACTIONS, {
        useTitle: () => m.intl.string(m.t["zge/fP"]),
        useValue: g.jW.useSetting,
        setValue: g.jW.updateSetting,
    });
var sX = i(817281);
let sH = (0, o.zD)(d.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
        useTitle: () => m.intl.string(m.t.JgjNG3),
        useSubtitle: () => {
            if (!g.hH.useSetting())
                return m.intl.format(m.t["31PRaj"], {
                    a11yHook: (e, t) =>
                        (0, f.jsx)(
                            V.D,
                            {
                                tag: "a",
                                onClick: () => (0, ey.openUserSettings)(d.X.APPEARANCE_MESSAGE_DISPLAY_MODE),
                                children: e,
                            },
                            t,
                        ),
                });
        },
        useDisabled: () => !g.hH.useSetting(),
        useValue: () => {
            let e = (0, R.bG)([nx.Ay], () => nx.Ay.displayCompactAvatars);
            return !g.hH.useSetting() || e;
        },
        setValue: (e) => {
            sX.Ay.updatedUnsyncedSettings({ displayCompactAvatars: e });
        },
    }),
    sK = (0, o.Hn)(d.X.CHAT_SPOILERS_SHOW_SPOILERS, {
        useTitle: () => m.intl.string(m.t.QgwmVz),
        useOptions: () => [
            { value: Q.P6Q.ON_CLICK, id: Q.P6Q.ON_CLICK, label: m.intl.string(m.t["KFH/me"]) },
            { value: Q.P6Q.ALWAYS, id: Q.P6Q.ALWAYS, label: m.intl.string(m.t.Pe1RbL) },
            { value: Q.P6Q.IF_MODERATOR, id: Q.P6Q.IF_MODERATOR, label: m.intl.string(m.t.K5VTBE) },
        ],
        useValue: g.gs.useSetting,
        setValue: g.gs.updateSetting,
    }),
    sW = (0, o.zD)(d.X.CHAT_THREADS_SPLIT_VIEW, {
        useTitle: () => m.intl.string(m.t.AInv5m),
        useValue: g.SY.useSetting,
        setValue: g.SY.updateSetting,
    }),
    sZ = (0, o.zZ)(d.X.APPEARANCE_MESSAGES_CATEGORY, {
        useTitle: () => m.intl.string(m.t.OIgYlQ),
        useSearchTerms: () => [m.intl.string(m.t["/VQax8"])],
        buildLayout: () => [sB, sz, sY, sK, sW, sH, sk, sv],
    });
var sq = i(753806),
    sQ = i(145331);
let sJ = (0, o.Qx)(d.X.MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
        useTitle: () => m.intl.string(m.t.VkoLsy),
        useSearchTerms: () => [m.intl.string(m.t["t4+fbe"])],
        useOptions: function () {
            return [
                { name: m.intl.string(m.t.E9JM4J), value: 0 },
                { name: m.intl.string(m.t["Kr+lPi"]), value: 1 },
            ];
        },
        useValue: () => +!!g.Hu.useSetting(),
        setValue: (e) => {
            let t = 1 === e;
            t ? sq.A.cleanUpPrivateChannelSearchState() : sq.A.cleanUpSearchState({ type: Q.I4_.DMS }),
                (0, sQ._k)({
                    prevIsCrossDMSettingEnabled: g.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: sQ.vy.USER_SETTINGS,
                }),
                g.Hu.updateSetting(t);
        },
    }),
    s$ = (0, o.zZ)(d.X.APPEARANCE_SEARCH_CATEGORY, {
        useTitle: () => m.intl.string(m.t["5h0QOP"]),
        buildLayout: () => [sJ],
    }),
    s0 = (0, o.zD)(d.X.STREAMING_AUTO_STREAMER_MODE, {
        useTitle: () => m.intl.string(m.t.IxjaoF),
        useValue: function () {
            return (0, R.bG)([eC.A], () => {
                let { autoToggle: e } = eC.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            n5.A.update({ autoToggle: e });
        },
        usePredicate: function () {
            return n9.Av;
        },
    }),
    s1 = (0, o.zD)(d.X.STREAMING_STREAMER_MODE, {
        useTitle: () => m.intl.string(m.t.TGNg6T),
        useSubtitle: () => m.intl.string(m.t["4nXLnE"]),
        useValue: function () {
            return (0, R.bG)([eC.A], () => {
                let { enabled: e } = eC.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            n5.A.update({ enabled: e });
        },
    });
var s2 = i(77729),
    s3 = i(349230);
let s6 = [],
    s4 = (0, o.Hn)(d.X.STREAMER_MODE_HIDE_OVERLAY_WIDGETS, {
        selectionMode: "multiple",
        useTitle: () => m.intl.string(m.t.VCDSLW),
        useSearchTerms: () => [m.intl.string(m.t.VCDSLW)],
        usePredicate: () => {
            let e = (0, eO.b_)(),
                t = (0, ef.Mn)("StreamerModeSettings");
            return e && t;
        },
        useOptions: function () {
            return N.useMemo(() => {
                let e = [];
                for (let [t, i] of Object.entries(s3.A))
                    null != i.streamerModeLabel &&
                        (null == i.predicate || i.predicate()) &&
                        e.push({ id: t, value: t, label: i.streamerModeLabel() });
                return e;
            }, []);
        },
        useValue: function () {
            return (0, R.bG)([eC.A], () => eC.A.getSettings().disabledOverlayWidgets ?? s6);
        },
        setValue: (e) => n5.A.update({ disabledOverlayWidgets: e }),
        closeOnSelect: !1,
        wrapTags: !0,
    }),
    s7 = (0, o.zD)(d.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => m.intl.string(m.t.LSBUGR),
        useValue: () =>
            (0, R.bG)([eC.A], () => {
                let { hidePersonalInformation: e } = eC.A.getSettings();
                return e;
            }),
        setValue: (e) => n5.A.update({ hidePersonalInformation: e }),
    }),
    s5 = (0, o.zD)(d.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => m.intl.string(m.t.uWBOri),
        useValue: () =>
            (0, R.bG)([eC.A], () => {
                let { hideInstantInvites: e } = eC.A.getSettings();
                return e;
            }),
        setValue: (e) => n5.A.update({ hideInstantInvites: e }),
    }),
    s8 = (0, o.zD)(d.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => m.intl.string(m.t.OrqYDP),
        useValue: () =>
            (0, R.bG)([eC.A], () => {
                let { disableSounds: e } = eC.A.getSettings();
                return e;
            }),
        setValue: (e) => n5.A.update({ disableSounds: e }),
    }),
    s9 = (0, o.zD)(d.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => m.intl.string(m.t.sUAbLd),
        useValue: () =>
            (0, R.bG)([eC.A], () => {
                let { disableNotifications: e } = eC.A.getSettings();
                return e;
            }),
        setValue: (e) => n5.A.update({ disableNotifications: e }),
    }),
    le = (0, o.zD)(d.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => m.intl.string(m.t["iA81+a"]),
        useSubtitle: () => m.intl.string(m.t.P4vj0h),
        useValue: () =>
            (0, R.bG)([eC.A], () => {
                let { enableContentProtection: e } = eC.A.getSettings();
                return e;
            }),
        setValue: (e) => n5.A.update({ enableContentProtection: e }),
        usePredicate: () => s2.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    lt = (0, o.FW)(d.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => m.intl.string(m.t.xYhOEh),
        buildLayout: () => [s7, s5, s8, s9, le, s4],
    }),
    li = (0, o.zZ)(d.X.STREAMER_MODE_CATEGORY, {
        useTitle: () => m.intl.string(m.t.S5GfOW),
        buildLayout: () => [s1, s0, lt],
    });
var ln = i(47671),
    ls = i(665267),
    ll = i(414133),
    lr = i(412848);
let la = (0, o.Hn)(d.X.APPEARANCE_GUILD_THEME_DEFAULT_PREFERENCE, {
        useTitle: () => m.intl.string(m.t.Q7mm4g),
        useSearchTerms: () => [m.intl.string(lr.default["/6NbRv"])],
        useOptions: () => [
            { id: "guild", label: m.intl.string(m.t["hrS/Pc"]), value: _.tI.GUILD },
            { id: "personal", label: m.intl.string(m.t.mlvXIq), value: _.tI.PERSONAL },
        ],
        useValue: () => g.zY.useSetting(),
        setValue: g.zY.updateSetting,
        usePredicate: () => (0, ll.OS)("GuildThemeDefaultPreferenceSetting"),
    }),
    lo = (0, o.zD)(d.X.SYNC_PROFILE_THEMES, {
        useTitle: () => m.intl.string(m.t.C00w4l),
        useValue: () => (0, R.bG)([iW.A], () => iW.A.syncProfileThemeWithUserTheme),
        setValue: () => (0, nd.M1)(),
    });
var lu = i(284016);
let ld = (0, o.zD)(d.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => m.intl.string(m.t["/B+kEV"]),
    useSearchTerms: () => [m.intl.string(m.t.Ksh3ik)],
    useValue: function () {
        return (0, R.bG)([lu.A], () => !1 !== lu.A.shouldSync("appearance"));
    },
    setValue: function (e) {
        var t;
        let i = id.A.theme,
            n = ln.A.gradientPreset?.id ?? null,
            s = g.eh.getSetting()?.customUserThemeSettings != null;
        (t = Q.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
            n6.h.dispatch({
                type: "TRACK",
                event: t,
                properties: { is_sync_enabled: e, base_theme: i, client_theme: n, has_custom_theme: s },
            }),
            sX.Ay.setShouldSyncAppearanceSettings(e);
    },
});
var lc = i(98596);
let lg = (0, o.AK)(d.X.APPEARANCE_THEME_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => m.intl.string(m.t.nhVQDJ),
        useSearchTerms: () => [m.intl.string(m.t.nhVQDJ)],
        destinationKey: d.X.ACCESSIBILITY_PANEL,
    }),
    lm = (0, o.gN)(d.X.APPEARANCE_THEME_RELATED_SETTINGS, { buildLayout: () => [lg] }),
    lA = (0, o.zZ)(d.X.APPEARANCE_THEME_CATEGORY, {
        useTitle: () => m.intl.string(m.t.Ksh3ik),
        useInlineNotice: function () {
            return (0, R.bG)([iW.A], () => iW.A.useForcedColors)
                ? {
                      type: e_.lT.INLINE_NOTICE,
                      noticeType: "info",
                      useText: () =>
                          (0, nN.D)()
                              ? m.intl.format(m.t.Jae48E, {
                                    onClick: () => {
                                        (0, ey.openUserSettings)(d.X.SYNC_FORCED_COLORS);
                                    },
                                })
                              : m.intl.string(m.t.AUMSZP),
                  }
                : null;
        },
        useHeaderDecoration: function () {
            return (0, R.bG)([ln.A, iW.A], () => iW.A.useForcedColors || ln.A.isPreview)
                ? null
                : {
                      type: e_.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "open-client-themes-button",
                              type: e_.UV.BUTTON,
                              text: m.intl.string(m.t["E+COuA"]),
                              onClick: ls.J3,
                          },
                      ],
                  };
        },
        buildLayout: () => [lc.k, ld, lo, la, lm],
    }),
    lh = (0, o.t_)(d.X.APPEARANCE_PANEL, {
        initialize: function () {
            n4.A.isFetching() ||
                (n6.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_START" }),
                n3.Bo.get({ url: Q.Rsh.USERS_ME_CUSTOM_THEMES, oldFormErrors: !0, rejectWithError: !0 })
                    .then((e) => {
                        n6.h.dispatch({
                            type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS",
                            themes: e.body?.custom_themes ?? [],
                        });
                    })
                    .catch((e) => {
                        n6.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_FAILURE", error: e });
                    }));
        },
        useTitle: () => m.intl.string(m.t["iHH+ky"]),
        buildLayout: () => [lA, sI, sZ, sg, s$, li, sr],
    }),
    lE = [
        { badgeType: e_.Xi.NEW, dismissibleContent: eT.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE },
        {
            badgeType: e_.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: eT.M.FAVORITES_GUILD_NEW_BADGE,
            StronglyDiscouragedCustomComponent: function () {
                return (0, f.jsx)(n8.JI, { text: m.intl.string(m.t.y2b7CA) });
            },
        },
    ],
    lx = (0, o.i4)(d.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t["iHH+ky"]),
        icon: n2.B,
        useMenu: function () {
            let e,
                t,
                i,
                n = (0, n7.A)(),
                s =
                    ((e = g.D_.useSetting()),
                    (t = g.SI.useSetting()),
                    e
                        ? null
                        : (0, f.jsx)(M.sL, {
                              id: "preview-markdown-toggle",
                              label: m.intl.string(m.t.sHJ9wZ),
                              action: () => {
                                  let e = !t;
                                  X.default.track(Q.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                                      enabled: e,
                                      location: { section: Q.JJy.SETTINGS_CONTEXT_MENU },
                                  }),
                                      g.SI.updateSetting(e);
                              },
                              checked: t,
                          })),
                l =
                    ((i = (0, R.bG)([eC.A], () => eC.A.enabled, [])),
                    (0, f.jsx)(M.sL, {
                        id: "streamer-mode-toggle",
                        label: m.intl.string(m.t.p9ZAJZ),
                        action: () => {
                            n5.A.setEnabled(!i);
                        },
                        checked: i,
                    }));
            return N.useMemo(() => {
                let e = [...n];
                return (
                    null != s &&
                        e.push((0, f.jsx)(M.rX, { label: m.intl.string(m.t.Ob7VMB), children: s }, "text-and-images")),
                    null != l && e.push((0, f.jsx)(M.rX, { children: l }, "streamer-mode")),
                    e
                );
            }, [n, s, l]);
        },
        getDismissibleBadges: () => lE,
        buildLayout: () => [lh],
    });
var lT = i(410767),
    lS = i(691885),
    lp = i(408278),
    lf = i(241326),
    lN = i(885574),
    l_ = i(475358),
    lC = i(28647),
    lI = i(337371),
    lb = i(695366),
    lv = i(761853),
    lj = i(364094);
function ly(e) {
    let { game: t, application: i } = e;
    return null == t || null == i
        ? (0, f.jsx)("div", {
              className: lj.zc,
              children: (0, f.jsx)(lb.E, { size: "sm", color: F.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, f.jsxs)("div", {
              className: lj.nt,
              children: [
                  (0, f.jsx)(e8.A, { game: i, pid: t.pid, size: e8.M.MEDIUM }),
                  (0, f.jsx)("div", {
                      className: lj.Am,
                      children: (0, f.jsx)(lb.E, { size: "sm", color: F.A.colors.TEXT_FEEDBACK_WARNING }),
                  }),
              ],
          });
}
function lO(e) {
    let t = (0, R.bG)([lv.Ay], () => lv.Ay.getMode()),
        { runningGame: i, runningGameApplication: n } = e0();
    null == i || i.elevated || ((i = void 0), (n = void 0));
    let s = (0, tu.NP)(),
        l = s && null != i && t === Q.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? l : s, runningGame: i, runningGameApplication: n };
}
function lR(e) {
    let { className: t, sourcePage: i } = e,
        { canPrompt: n, runningGame: s, runningGameApplication: l } = lO(i);
    return n
        ? (0, f.jsxs)("div", {
              className: eF()(lj.kL, t),
              children: [
                  (0, f.jsx)(ly, { game: s, application: l }),
                  (0, f.jsxs)("div", {
                      className: lj.FS,
                      children: [
                          (0, f.jsx)(k.E, {
                              variant: "text-sm/medium",
                              color: "text-strong",
                              children:
                                  "voice" === i
                                      ? m.intl.string(m.t.vxfv7v)
                                      : null != s
                                        ? m.intl.string(m.t.fAYU2G)
                                        : m.intl.string(m.t["9V4X/c"]),
                          }),
                          (0, f.jsx)(k.E, {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              children: m.intl.format(m.t["/y6htt"], {
                                  helpCenterLink: to.A.getArticleURL(Q.MVz.SYSTEM_SERVICE),
                              }),
                          }),
                      ],
                  }),
                  (0, f.jsx)(eE.$, {
                      variant: "secondary",
                      size: "sm",
                      text: m.intl.string(m.t["1iI46O"]),
                      onClick: function () {
                          (0, tu.sL)(i + (null != s ? "-with-game" : "-no-game"));
                      },
                  }),
              ],
          })
        : null;
}
var lL = i(189213),
    lD = i(292666),
    lP = i(320989),
    lG = i(978263);
let lU = [];
var lM = i(235986),
    lV = i(820785),
    lk = i(734057),
    lw = i(808728),
    lF = i(967198),
    lB = i(926140),
    lz = i(746642);
function lY() {}
let lX = [lB.rD.VOICE_CHANNEL];
function lH(e) {
    e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0);
}
function lK() {
    return (0, f.jsx)("div", {
        className: lz.i1,
        children: (0, f.jsx)(k.E, {
            variant: "text-md/medium",
            color: "text-muted",
            className: lz.GN,
            children: m.intl.string(m.t.zHjCd1),
        }),
    });
}
function lW(e) {
    let { keybind: t, className: i } = e,
        n = N.useRef(t);
    N.useEffect(() => {
        n.current = t;
    });
    let [s, l] = N.useState(t.params?.channelId ?? void 0),
        r = N.useCallback(() => {
            (0, C.openModalLazy)(
                async () => (e) =>
                    (0, f.jsx)(lZ, {
                        ...e,
                        onSelect: (e) => {
                            l(e), tR.A.setKeybind({ ...n.current, params: { channelId: e } });
                        },
                    }),
            );
        }, []);
    return (0, f.jsx)("div", {
        className: eF()(lz.a8, i),
        children: (0, f.jsx)(sy.D, {
            label: m.intl.string(m.t.q4JpM8),
            children: (0, f.jsxs)(lM.A, {
                align: lM.A.Align.STRETCH,
                children: [
                    (0, f.jsx)("div", { className: lz.$X, children: (0, f.jsx)(lq, { channelId: s }) }),
                    (0, f.jsx)(lM.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, f.jsx)(eE.$, { variant: "primary", text: m.intl.string(m.t.Dm8O4e), onClick: r }),
                    }),
                ],
            }),
        }),
    });
}
function lZ(e) {
    let t,
        i,
        { transitionState: n, onClose: s, onSelect: l } = e,
        r = N.useId(),
        a = N.useRef(null),
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
                [l, r] = N.useState(""),
                [a, o] = N.useState(lU),
                u = N.useCallback((e, t) => {
                    "" === (t = t.trim()).trim() ? o(lU) : o(e);
                }, []);
            N.useEffect(
                () =>
                    lP.A.addRouteChangeListener(() => {
                        r("");
                    }),
                [],
            );
            let [d] = N.useState(() => new lG.A(u, i, void 0, n));
            return (
                N.useEffect(() => {
                    t ? (s?.(d), d.createSearchContext()) : (d.clean(), r(""));
                }, [t, d, s]),
                {
                    queryResults: a,
                    query: l,
                    updateQuery: N.useCallback(
                        (e) => {
                            r(e), d.search(e);
                        },
                        [d],
                    ),
                }
            );
        })({ visible: !0, autocompleterResultTypes: lX, autocompleterBeforeCreateSearchContext: lH }),
        c =
            ((t = "" !== o),
            (i = (0, R.yK)([lw.Ay, lk.A, lF.A], () => {
                let e = lF.A.getGuildId();
                if (t || null == e) return [];
                let i = [];
                for (let t of lw.Ay.getVocalChannelIds(e)) {
                    let e = lk.A.getChannel(t);
                    null != e && i.push(e);
                }
                return i;
            }, [t])),
            t ? null : i),
        { focusedIndex: g, setFocusedIndex: A } = (function (e) {
            let [t, i] = N.useState(0),
                n = N.useRef(e);
            return (
                e !== n.current && 0 !== t && i(0),
                N.useEffect(() => {
                    n.current = e;
                }),
                { focusedIndex: t, setFocusedIndex: i }
            );
        })(o);
    N.useEffect(() => {
        let { current: e } = a;
        null == e || e.isItemVisible(0, g, !0) || e.scrollToIndex({ section: 0, row: g });
    }, [g]);
    let h = null != c ? c.length : d.length,
        E = (() => {
            if (null != c) return c[g]?.id;
            let e = d[g];
            if (e?.type === lB.rD.VOICE_CHANNEL) return e.record.id;
        })(),
        x =
            h > 0 || "" === o
                ? {
                      innerId: r,
                      innerRole: "listbox",
                      innerAriaLabel: m.intl.string(m.t["+N3fW7"]),
                      ref: a,
                      sections: [h],
                      renderRow: function (e) {
                          let { row: t } = e,
                              i = (() => {
                                  if (null != c) return c[t];
                                  let e = d[t];
                                  if (e?.type === lB.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == i) return null;
                          let n = null != i.parent_id ? lk.A.getChannel(i.parent_id) : void 0,
                              r = K.A.getGuild(i.guild_id);
                          return (0, f.jsx)(
                              lV.c3,
                              {
                                  id: i.id,
                                  channel: i,
                                  category: n,
                                  focused: g === t,
                                  onMouseEnter: () => A(t),
                                  onClick: () => {
                                      l(i.id), s();
                                  },
                                  onFocus: () => A(t),
                                  children:
                                      null != r ? (0, f.jsx)("div", { className: lz.J5, children: r.name }) : null,
                              },
                              i.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, f.jsx)(lK, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, f.jsx)(lL.Modal, {
        transitionState: n,
        onClose: s,
        title: m.intl.string(m.t.Dm8O4e),
        subtitle: m.intl.string(m.t.q4JpM8),
        actions: void 0,
        input: (0, f.jsx)(lD.k, {
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
                                if (null != c) return c[g];
                                let e = d[g];
                                if (e?.type === lB.rD.VOICE_CHANNEL) return e.record;
                            })();
                            null == e ? l(void 0) : l(e.id), s();
                            break;
                        }
                        case "arrowup":
                            0 === g ? A(h - 1) : A(g - 1);
                            break;
                        case "arrowdown":
                            g >= h - 1 ? A(0) : A(g + 1);
                    }
            },
            placeholder: m.intl.string(m.t.tG0r7g),
            role: "combobox",
            "aria-controls": r,
            "aria-expanded": h > 0,
            "aria-activedescendant": h > 0 && null != E ? E : void 0,
            "aria-autocomplete": "list",
            spellCheck: !1,
            autoFocus: !0,
        }),
        listProps: x,
    });
}
function lq(e) {
    let { channelId: t } = e,
        {
            channel: i,
            category: n,
            guild: s,
        } = (0, R.cf)([lk.A, K.A], () => {
            let e = null != t ? lk.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? lk.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? K.A.getGuild(e.guild_id) : void 0,
                  }
                : { channel: void 0, category: void 0, guild: void 0 };
        });
    return null == i
        ? (0, f.jsx)(k.E, {
              variant: "text-md/medium",
              color: "text-muted",
              className: lz.GN,
              children: m.intl.string(m.t["/fYIK7"]),
          })
        : (0, f.jsx)(lV.c3, {
              channel: i,
              id: i.id,
              category: n,
              onClick: lY,
              onFocus: lY,
              onMouseEnter: lY,
              focused: !1,
              children: null != s ? (0, f.jsx)("div", { className: lz.J5, children: s.name }) : null,
          });
}
function lQ(e) {
    let { className: t, children: i } = e;
    return (0, f.jsx)("div", { className: t, children: (0, f.jsx)(L.B, { gap: 16, children: i }) });
}
var lJ = i(734066),
    l$ = i(880144),
    l0 = i(614455);
function l1() {
    let e = (0, R.bG)([eI.Ay], () => eI.Ay.getState()),
        t = (0, R.bG)([lv.Ay], () => (0, l$.A)(lv.Ay)),
        i = (0, R.bG)([l0.A], () => l0.A.isSupported),
        n = (0, lJ.sw)(),
        s = (0, lJ.BW)(),
        l = (0, ej.isWindows)();
    return {
        customizableKeybinds: (function (e) {
            let { keybinds: t, enableClips: i, enableScreenshotKeybind: n, allowSoundboard: s } = e;
            return eL()(t)
                .reject(
                    (e) =>
                        e.managed &&
                        ![Q.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, Q.hCu.SAVE_CLIP, Q.hCu.SAVE_SCREENSHOT].includes(
                            e.action,
                        ),
                )
                .reject((e) => !i && (e.action === Q.hCu.SAVE_CLIP || e.action === Q.hCu.SAVE_SCREENSHOT))
                .reject((e) => !n && e.action === Q.hCu.SAVE_SCREENSHOT)
                .reject((e) => !s && (e.action === Q.hCu.SOUNDBOARD || e.action === Q.hCu.SOUNDBOARD_HOLD))
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
                    { id: "unassigned", value: Q.hCu.UNASSIGNED, label: m.intl.string(m.t["0Uh579"]) },
                    { id: "push-to-talk", value: Q.hCu.PUSH_TO_TALK, label: m.intl.string(m.t.Y5lgTP) },
                    {
                        id: "push-to-talk-priority",
                        value: Q.hCu.PUSH_TO_TALK_PRIORITY,
                        label: m.intl.string(m.t.DkSwJ2),
                    },
                    { id: "push-to-mute", value: Q.hCu.PUSH_TO_MUTE, label: m.intl.string(m.t.hSCRqd) },
                    { id: "vad-priority", value: Q.hCu.VAD_PRIORITY, label: m.intl.string(m.t["49d6Nd"]) },
                    { id: "toggle-mute", value: Q.hCu.TOGGLE_MUTE, label: m.intl.string(m.t.PlkYKD) },
                    { id: "toggle-deafen", value: Q.hCu.TOGGLE_DEAFEN, label: m.intl.string(m.t.NvGq1K) },
                    { id: "toggle-voice-mode", value: Q.hCu.TOGGLE_VOICE_MODE, label: m.intl.string(m.t.Wa5H9S) },
                    { id: "toggle-streamer-mode", value: Q.hCu.TOGGLE_STREAMER_MODE, label: m.intl.string(m.t.BK0Ncc) },
                    { id: "toggle-camera", value: Q.hCu.TOGGLE_CAMERA, label: m.intl.string(m.t.hf8JVT) },
                ];
            return (
                t &&
                    (r.push({
                        id: "toggle-overlay-input-lock",
                        value: Q.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
                        label: m.intl.string(m.t.VsAZcC),
                    }),
                    r.push({
                        id: "activate-overlay-region-text-widget",
                        value: Q.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                        label: m.intl.string(m.t.hurHWo),
                    })),
                i &&
                    ((0, ej.isWindows)() || lv.Ay.getUseSystemScreensharePicker()) &&
                    r.push({
                        id: "toggle-go-live-streaming",
                        value: Q.hCu.TOGGLE_GO_LIVE_STREAMING,
                        label: m.intl.string(m.t.ybdjJD),
                    }),
                (0, ej.isDesktop)() &&
                    (r.push(
                        { id: "navigate-back", value: Q.hCu.NAVIGATE_BACK, label: m.intl.string(m.t.gRSaOa) },
                        { id: "navigate-forward", value: Q.hCu.NAVIGATE_FORWARD, label: m.intl.string(m.t.zOXpjU) },
                        {
                            id: "switch-to-voice-channel",
                            value: Q.hCu.SWITCH_TO_VOICE_CHANNEL,
                            label: m.intl.string(m.t.ty7Lxy),
                        },
                        {
                            id: "disconnect-from-voice-channel",
                            value: Q.hCu.DISCONNECT_FROM_VOICE_CHANNEL,
                            label: m.intl.string(m.t.CV7mT7),
                        },
                    ),
                    n &&
                        r.push(
                            { id: "soundboard", value: Q.hCu.SOUNDBOARD, label: m.intl.string(m.t.yPH4xm) },
                            {
                                id: "soundboard-hold",
                                value: Q.hCu.SOUNDBOARD_HOLD,
                                label: m.intl.string(m.t["1xFbP/"]),
                            },
                        ),
                    s &&
                        (r.push({ id: "save-clip", value: Q.hCu.SAVE_CLIP, label: m.intl.string(m.t.U4URzP) }),
                        l &&
                            r.push({
                                id: "save-screenshot",
                                value: Q.hCu.SAVE_SCREENSHOT,
                                label: m.intl.string(m.t["+WloFH"]),
                            }))),
                r
            );
        })({ overlaySupported: i, canGoLive: t, allowSoundboard: l, enableClips: n, enableScreenshotKeybind: s }),
        keybindDescriptions: (function (e) {
            let { overlaySupported: t, canGoLive: i, enableClips: n, enableScreenshotKeybind: s } = e,
                l = {
                    [Q.hCu.UNASSIGNED]: m.intl.string(m.t.rvlNLv),
                    [Q.hCu.PUSH_TO_MUTE]: m.intl.string(m.t.xtESim),
                    [Q.hCu.PUSH_TO_TALK]: m.intl.string(m.t.wTcBSy),
                    [Q.hCu.PUSH_TO_TALK_PRIORITY]: m.intl.string(m.t.FhHvWH),
                    [Q.hCu.TOGGLE_MUTE]: m.intl.string(m.t.X2fbUm),
                    [Q.hCu.TOGGLE_DEAFEN]: m.intl.string(m.t.MjREZV),
                    [Q.hCu.TOGGLE_VOICE_MODE]: m.intl.string(m.t.snm5YW),
                    [Q.hCu.TOGGLE_STREAMER_MODE]: m.intl.string(m.t.YszLLx),
                    [Q.hCu.VAD_PRIORITY]: m.intl.string(m.t.rSe8IZ),
                    [Q.hCu.TOGGLE_CAMERA]: m.intl.string(m.t.v1JBtL),
                };
            return (
                t && (l[Q.hCu.TOGGLE_OVERLAY_INPUT_LOCK] = m.intl.string(m.t.IoP5vc)),
                i && (0, ej.isWindows)() && (l[Q.hCu.TOGGLE_GO_LIVE_STREAMING] = m.intl.string(m.t.s4C238)),
                (0, ej.isDesktop)() &&
                    ((l[Q.hCu.NAVIGATE_BACK] = m.intl.string(m.t.nKDlEt)),
                    (l[Q.hCu.NAVIGATE_FORWARD] = m.intl.string(m.t.DK0FFk)),
                    (l[Q.hCu.SOUNDBOARD] = (0, ej.isWindows)()
                        ? m.intl.string(m.t["5wJefL"])
                        : m.intl.string(m.t.gzjsSP)),
                    (l[Q.hCu.SOUNDBOARD_HOLD] = (0, ej.isWindows)()
                        ? m.intl.string(m.t.RRkZc9)
                        : m.intl.string(m.t.laNlTl)),
                    n &&
                        ((l[Q.hCu.SAVE_CLIP] = m.intl.string(m.t.z3Wbam)),
                        s && (l[Q.hCu.SAVE_SCREENSHOT] = m.intl.string(m.t.m0zd57)))),
                l
            );
        })({ overlaySupported: i, canGoLive: t, enableClips: n, enableScreenshotKeybind: s }),
    };
}
var l2 = i(581133);
function l3(e) {
    let { children: t } = e;
    return t([lI.Q_.MESSAGE, lI.Q_.NAVIGATION, lI.Q_.DND, lI.Q_.CHAT, lI.Q_.VOICE_AND_VIDEO, lI.Q_.MISCELLANEOUS]);
}
class l6 extends N.PureComponent {
    handleActionChanged = (e) => {
        tR.A.setKeybind({ ...this.props.keybind, action: e });
    };
    handleShortcutChange = (e) => {
        tR.A.setKeybind({ ...this.props.keybind, shortcut: e });
    };
    handleDeleteKeybind = () => {
        tR.A.deleteKeybind(this.props.keybind.id);
    };
    handleEnableDisable = () => {
        let { keybind: e } = this.props;
        tR.A.setKeybind({ ...this.props.keybind, enabled: !e.enabled });
    };
    renderMessage() {
        let { keybind: e } = this.props,
            t = eD.dI(e.shortcut);
        return nQ.A.hasBind(t)
            ? (0, f.jsx)(ta.p, { messageType: ta.Y.ERROR, children: m.intl.string(m.t["7lQlw3"]) })
            : ix.Yy.has(t)
              ? (0, f.jsx)(ta.p, {
                    messageType: ta.Y.ERROR,
                    children: m.intl.format(m.t.MOIaNd, {
                        keyboardNavArticle: to.A.getArticleURL(Q.MVz.KEYBOARD_NAVIGATION),
                    }),
                })
              : (0, f.jsx)(k.E, {
                    variant: "text-md/normal",
                    className: l2.qD,
                    children: this.props.keybindDescriptions[e.action],
                });
    }
    render() {
        let { managed: e, enabled: t } = this.props.keybind;
        return (0, f.jsxs)("div", {
            className: l2.YI,
            children: [
                (0, f.jsxs)("div", {
                    className: l2.PO,
                    children: [
                        (0, f.jsx)("div", {
                            className: l2.AS,
                            children: (0, f.jsx)(lS.l, {
                                selectionMode: "single",
                                label: m.intl.string(m.t.UUpAD6),
                                value: this.props.keybind.action,
                                options: this.props.keybindActionTypes,
                                onSelectionChange: this.handleActionChanged,
                                disabled: e,
                            }),
                        }),
                        (0, f.jsx)("div", {
                            className: l2.AS,
                            children: (0, f.jsx)(sy.D, {
                                label: m.intl.string(m.t["1La4tC"]),
                                children: (0, f.jsx)(tL.A, {
                                    defaultValue: this.props.keybind.shortcut,
                                    onChange: this.handleShortcutChange,
                                }),
                            }),
                        }),
                        !e &&
                            (0, f.jsx)("div", {
                                className: l2.d9,
                                children: (0, f.jsx)(lp.K, {
                                    variant: "icon-only",
                                    onClick: this.handleDeleteKeybind,
                                    icon: lf.u,
                                    "aria-label": m.intl.string(m.t.qEHmmB),
                                }),
                            }),
                        (0, f.jsx)("div", {
                            className: l2.ZW,
                            children: (0, f.jsx)(e1.m, {
                                text: m.intl.string(m.t.uCD7qK),
                                children: (0, f.jsx)("div", {
                                    children: (0, f.jsx)(D.d, { checked: t, onChange: this.handleEnableDisable }),
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
        return e === Q.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, f.jsx)(lW, { keybind: this.props.keybind }) : void 0;
    }
}
class l4 extends N.PureComponent {
    handleAddKeybind = () => {
        tR.A.addKeybind();
    };
    renderKeybinds(e, t, i) {
        return e.map((n, s) =>
            (0, f.jsxs)(
                N.Fragment,
                {
                    children: [
                        (0, f.jsx)(l6, { keybind: n, keybindDescriptions: t, keybindActionTypes: i }, n.id),
                        s !== e.length - 1 ? (0, f.jsx)(ex.c, {}) : null,
                    ],
                },
                n.id,
            ),
        );
    }
    renderKeybindWarning() {
        return (0, f.jsxs)("div", {
            className: l2.$e,
            children: [
                (0, f.jsx)(lN.m, { size: "xs", color: F.A.colors.ICON_SUBTLE }),
                (0, f.jsx)(k.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: m.intl.string(m.t.NoKjWP),
                }),
            ],
        });
    }
    render() {
        let { customizableKeybinds: e, keybindActionTypes: t, keybindDescriptions: i } = this.props;
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(lQ, {
                    className: iI.IE,
                    children: ej.isPlatformEmbedded
                        ? (0, f.jsxs)(f.Fragment, {
                              children: [
                                  (0, f.jsxs)("div", {
                                      className: l2.OQ,
                                      children: [
                                          this.renderKeybindWarning(),
                                          (0, f.jsx)("div", {
                                              className: l2.c9,
                                              children: (0, f.jsx)(eE.$, {
                                                  size: "md",
                                                  onClick: this.handleAddKeybind,
                                                  text: m.intl.string(m.t.zk6Xbs),
                                                  variant: "primary",
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, f.jsx)(lR, { className: l2.Qo, sourcePage: "keybinds" }),
                                  e.length > 0 &&
                                      (0, f.jsxs)(f.Fragment, {
                                          children: [(0, f.jsx)(ex.c, {}), this.renderKeybinds(e, i, t)],
                                      }),
                                  (0, f.jsx)(ex.c, {}),
                              ],
                          })
                        : (0, f.jsx)(ta.p, {
                              messageType: ta.Y.INFO,
                              className: l2.Ly,
                              children: m.intl.format(m.t.mPi3F3, { downloadLink: Q.X7G.DOWNLOAD }),
                          }),
                }),
                (0, f.jsx)(l7, {}),
            ],
        });
    }
}
function l7(e) {
    let { showHeader: t = !0 } = e,
        i = eL()((0, lI.Bx)())
            .filter((e) => e.description !== m.intl.string(m.t.HnNtEI))
            .groupBy((e) => e.group)
            .value();
    return (0, f.jsxs)(L.B, {
        gap: 48,
        children: [
            (0, f.jsx)(io.n, {
                label: t ? m.intl.string(m.t.Lz5KHI) : void 0,
                children: (0, f.jsx)("div", {
                    className: l2.jh,
                    children: (0, f.jsxs)("div", {
                        className: l2.yZ,
                        children: [
                            (0, f.jsx)(k.E, { variant: "text-md/normal", children: m.intl.string(m.t.sMWLBj) }),
                            (0, f.jsx)("div", {
                                className: l2.DM,
                                children: (0, f.jsx)(l_.e, { shortcut: lC.z.binds["0"], className: l2.LE }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, f.jsx)(l3, {
                children: (e) =>
                    (0, f.jsx)(f.Fragment, {
                        children: e.map((e, t) => {
                            let n = (0, lI.Gm)(e),
                                s = (0, lI.zF)(e),
                                l = i[e];
                            return (0, f.jsx)(
                                io.n,
                                {
                                    label: n,
                                    description: s,
                                    children: (0, f.jsx)("div", {
                                        className: l2.jh,
                                        children: l.map((e, t) =>
                                            (0, f.jsxs)(
                                                N.Fragment,
                                                {
                                                    children: [
                                                        0 !== t && (0, f.jsx)(ex.c, {}),
                                                        (0, f.jsxs)("div", {
                                                            className: l2.yZ,
                                                            children: [
                                                                (0, f.jsx)(k.E, {
                                                                    variant: "text-md/normal",
                                                                    children: e.description,
                                                                }),
                                                                (0, f.jsx)("div", {
                                                                    className: l2.DM,
                                                                    children: e.binds.map((e) =>
                                                                        (0, f.jsx)(
                                                                            l_.e,
                                                                            { shortcut: e, className: l2.LE },
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
let l5 = (0, o.E2)(d.X.KEYBINDS_SETTING, {
        Component: function () {
            N.useEffect(
                () => (
                    tR.A.enableAll(!1),
                    () => {
                        tR.A.enableAll(!0);
                    }
                ),
                [],
            );
            let e = l1();
            return (0, f.jsx)(l4, { ...e });
        },
        useSearchTerms: () => [m.intl.string(m.t.T9DA2K)],
    }),
    l8 = (0, o.zZ)(d.X.KEYBINDS_CATEGORY, { buildLayout: () => [l5] }),
    l9 = (0, o.t_)(d.X.KEYBINDS_PANEL, { useTitle: () => m.intl.string(m.t.T9DA2K), buildLayout: () => [l8] }),
    re = (0, o.i4)(d.X.KEYBINDS_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t.T9DA2K),
        icon: lT.F,
        buildLayout: () => [l9],
    });
var rt = i(37646),
    ri = i(434404);
let rn = (0, o.t_)(d.X.LANGUAGE_AND_TIME_PANEL, {
        useTitle: () => m.intl.string(m.t.KyFVyi),
        buildLayout: () => [ri.F],
    }),
    rs = (0, o.i4)(d.X.LANGUAGE_AND_TIME_SIDEBAR_ITEM, {
        icon: rt.U,
        useTitle: () => m.intl.string(m.t.KyFVyi),
        buildLayout: () => [rn],
    }),
    rl = (0, nf.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 }));
async function rr() {
    let e = await st.Ay.getOpenOnStart(),
        t = await st.Ay.getSetting("START_MINIMIZED", !1),
        i = await st.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
    rl.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: i });
}
let ra = (0, o.zD)(d.X.OS_OPEN_ON_STARTUP, {
        useTitle: () => m.intl.string(m.t["3BeZti"]),
        usePredicate: () => n9.Av && !(0, n9.cX)(),
        useValue: () => rl.useState((e) => e.openOnStartup),
        setValue: function (e) {
            rl.setState({ openOnStartup: e }), st.Ay.send("TOGGLE_OPEN_ON_STARTUP", e);
        },
        initialize: () => {
            st.Ay.getOpenOnStart().then((e) => rl.setState({ openOnStartup: e }));
        },
    }),
    ro = (0, o.zD)(d.X.OS_MINIMIZE_TO_TRAY, {
        useTitle: () => m.intl.string(m.t.dJ5MUh),
        useSubtitle: () => m.intl.string(m.t.nQavHr),
        usePredicate: () => n9.Av && !(0, n9.cX)(),
        useValue: () => rl.useState((e) => e.minimizeToTray),
        setValue: function (e) {
            rl.setState({ minimizeToTray: e }), st.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e);
        },
        initialize: () => {
            st.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => rl.setState({ minimizeToTray: e }));
        },
    });
var ru = i(117695);
function rd(e) {
    switch (e.state) {
        case "unknown":
            return m.intl.string(m.t["KW+nqT"]);
        case "disabled":
            return m.intl.string(m.t["Q/wAF7"]);
        case "disconnected":
            return m.intl.string(m.t.Xvs9IM);
        case "initializing":
            return m.intl.string(m.t.h4qz8W);
        case "connecting":
            return m.intl.string(m.t.fSu9XF);
        case "handshaking":
            return m.intl.string(m.t["00aYLJ"]);
        case "running":
            return m.intl.string(m.t["54TB7Z"]);
        case "waiting-for-retry":
            return m.intl.string(m.t["0FONwi"]);
        case "failure":
            return m.intl.string(m.t.Ic0nkd);
        default:
            (0, t4.xb)(e.state);
    }
}
let rc = new Set(["failure", "unknown"]),
    rg = (0, o.E2)(d.X.OS_SYSTEM_SERVICE, {
        useSearchTerms: () => [m.intl.string(m.t.roHq80)],
        Component: function () {
            let [e, t] = N.useState(!1),
                [i, n] = N.useState(() => (0, tu.TC)()),
                s = (0, u.ri)("SystemService"),
                l = (0, R.bG)([eJ.Ay], () => eJ.Ay.getSystemServiceStatus("input-service")),
                r = N.useCallback(async () => {
                    t(!0),
                        i ? await (0, tu.z8)("windows-settings") : await (0, tu.sL)("windows-settings"),
                        t(!1),
                        n((0, tu.TC)());
                }, [i]),
                a = "running" === l.state;
            return (0, f.jsxs)("div", {
                className: ru.q,
                children: [
                    (0, f.jsxs)("div", {
                        className: ru.L,
                        children: [
                            (0, f.jsxs)(L.B, {
                                direction: "horizontal",
                                children: [
                                    (0, f.jsx)(k.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: m.intl.string(m.t.roHq80),
                                    }),
                                    i &&
                                        s &&
                                        (0, f.jsxs)(f.Fragment, {
                                            children: [
                                                (0, f.jsx)(k.E, {
                                                    variant: "text-md/medium",
                                                    color: "text-strong",
                                                    "aria-hidden": !0,
                                                    children: "\u2022",
                                                }),
                                                (0, f.jsx)(k.E, {
                                                    variant: "text-md/medium",
                                                    color:
                                                        "running" === l.state
                                                            ? "text-feedback-positive"
                                                            : rc.has(l.state)
                                                              ? "text-feedback-critical"
                                                              : "text-feedback-warning",
                                                    children: rd(l),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, f.jsx)(k.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: m.intl.format(m.t["8CAL+D"], {
                                    helpCenterLink: to.A.getArticleURL(Q.MVz.SYSTEM_SERVICE),
                                }),
                            }),
                            i &&
                                !s &&
                                (0, f.jsx)(k.E, {
                                    variant: "text-sm/normal",
                                    color: a ? "text-feedback-positive" : "text-feedback-warning",
                                    children: a
                                        ? m.intl.string(m.t.KHVMkW)
                                        : m.intl.format(m.t["5Rlr0b"], { status: rd(l) }),
                                }),
                        ],
                    }),
                    (0, f.jsx)(eE.$, {
                        variant: i ? "critical-secondary" : "primary",
                        loading: e,
                        onClick: r,
                        text: i ? m.intl.string(m.t.pAwbdL) : m.intl.string(m.t["1iI46O"]),
                    }),
                ],
            });
        },
        usePredicate: tu.XQ,
    }),
    rm = (0, o.zZ)(d.X.LINUX_CATEGORY, {
        buildLayout: () => [ra, ro, rg],
        initialize: () => {
            rr();
        },
    }),
    rA = (0, o.t_)(d.X.LINUX_PANEL, { useTitle: () => m.intl.string(m.t["7pPjTW"]), buildLayout: () => [rm] }),
    rh = (0, o.i4)(d.X.LINUX_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t["7pPjTW"]),
        icon: e3.k,
        usePredicate: () => ej.isPlatformEmbedded && (0, ej.isLinux)(),
        buildLayout: () => [rA],
    });
var rE = i(3137),
    rx = i(369606),
    rT = i(604121),
    rS = i(725951),
    rp = i(400492),
    rf = i(669067),
    rN = i(115063),
    r_ = i(754692),
    rC = i(927018),
    rI = i(512599),
    rb = i(532197),
    rv = i(874486),
    rj = i(989349),
    ry = i.n(rj),
    rO = i(58703),
    rR = i(906688),
    rL = i(523896);
function rD(e) {
    let { achievementId: t, dateUnlocked: i } = e,
        n = (0, rC.vM)(t);
    if (null == n) return null;
    let s = null != i,
        { name: l, description: r, hideDescriptionUntilUnlock: a, onAction: o } = n,
        u = a && !s,
        d = s ? "text-strong" : "text-muted",
        c = s ? "text-default" : "text-muted",
        g = ry()(i),
        m = null != o && s,
        A = m ? V.D : "div";
    return (0, f.jsxs)(A, {
        className: eF()(rL.kL, m && rL.b),
        onClick: () => {
            m && o();
        },
        children: [
            (0, f.jsx)("div", {
                className: rL.zc,
                children: (0, f.jsx)(rR.A, { achievementId: t, size: rR.A.Sizes.SIZE_40, unlocked: s }),
            }),
            (0, f.jsxs)("div", {
                className: rL.VW,
                children: [
                    null != i &&
                        (0, f.jsx)(k.E, {
                            variant: "text-xxs/semibold",
                            color: "text-muted",
                            className: rL.YR,
                            children: (0, rO.mk)(g),
                        }),
                    (0, f.jsx)(k.E, { variant: "text-md/medium", color: d, children: l() }),
                    (0, f.jsx)(k.E, { variant: "text-xs/normal", color: c, children: u ? "?????" : r() }),
                ],
            }),
        ],
    });
}
var rP = i(885959);
function rG(e) {
    let { onBackClick: t } = e,
        i = (0, R.bG)([rv.A], () => rv.A.getAllUnlockedAchievements()),
        n = N.useMemo(() => Object.values(i).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [i]),
        s = N.useMemo(
            () =>
                Object.values(rC.l0)
                    .filter(t4.Vq)
                    .filter((e) => null == i[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [i],
        );
    return (0, f.jsxs)(f.Fragment, {
        children: [
            (0, f.jsxs)(V.D, {
                onClick: t,
                className: rP.vv,
                children: [
                    (0, f.jsx)(rb.A, { direction: rb.A.Directions.LEFT, className: rP.Kk }),
                    (0, f.jsx)(k.E, {
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: m.intl.string(m.t["13/7kX"]),
                    }),
                ],
            }),
            (0, f.jsxs)("div", {
                className: rP.N1,
                children: [
                    (0, f.jsxs)("div", {
                        className: rP.if,
                        children: [
                            (0, f.jsx)(eh.D, {
                                variant: "heading-lg/extrabold",
                                color: "text-strong",
                                children: m.intl.string(m.t["6jI0hd"]),
                            }),
                            (0, f.jsx)(k.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: m.intl.string(m.t.GuUItX),
                            }),
                        ],
                    }),
                    (0, f.jsx)("div", {
                        className: rP.nr,
                        children: (0, f.jsx)(rx.O, {
                            size: "custom",
                            color: F.A.unsafe_rawColors.ORANGE_345.css,
                            width: 40,
                            height: 40,
                        }),
                    }),
                ],
            }),
            n.length > 0 &&
                (0, f.jsx)("div", {
                    className: rP.yF,
                    children: (0, f.jsx)("div", {
                        className: rP.Eh,
                        children: n.map((e) => {
                            let { achievementId: t, dateUnlocked: i } = e;
                            return (0, f.jsx)(rD, { achievementId: t, dateUnlocked: i }, t);
                        }),
                    }),
                }),
            s.length > 0 &&
                (0, f.jsxs)("div", {
                    className: rP.yF,
                    children: [
                        (0, f.jsx)("div", {
                            className: rP.if,
                            children: (0, f.jsx)(k.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                children: m.intl.string(m.t.GFyMg1),
                            }),
                        }),
                        (0, f.jsx)("div", {
                            className: rP.Eh,
                            children: s.map((e) => (0, f.jsx)(rD, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, f.jsx)("div", { className: rP.yF, children: (0, f.jsx)("div", { className: rP.F3 }) }),
        ],
    });
}
var rU = i(224964),
    rM = i(31408),
    rV = i(739347);
let rk = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    rw = (0, eR.range)(0, 11),
    rF = (0, eR.range)(0, 2.25, 0.25),
    rB = (0, eR.range)(1, 11),
    rz = (0, eR.range)(1, 26),
    rY = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function rX(e) {
    let { disabled: t, locations: i, settingsLocations: n, onChange: s } = e,
        l = i.map((e) =>
            (0, f.jsx)(
                D.d,
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
    return (0, f.jsx)(io.n, { label: m.intl.string(m.t.bWVN1D), children: l });
}
function rH(e) {
    let { children: t } = e;
    return (0, f.jsx)(k.E, { className: rV.iF, variant: "text-sm/normal", color: "text-default", children: t });
}
function rK(e) {
    let {
            settings: { enabled: t, warningSeen: i },
            updateSettings: n,
        } = e,
        s = (0, R.bG)([iW.A], () => iW.A.useReducedMotion);
    return (0, f.jsx)(D.d, {
        label: m.intl.string(m.t.vuiXm9),
        description: m.intl.string(m.t.KuYbWN),
        checked: t,
        onChange: (e) => {
            e || (0, r_._)(rC.sn.DISABLE_POGGERMODE),
                e && (!i || s)
                    ? (0, se.A)({
                          title: s ? m.intl.string(m.t["FxT+p0"]) : m.intl.string(m.t.TAZ4F9),
                          subtitle: s ? m.intl.string(m.t.gmixrx) : m.intl.string(m.t.jN3t3K),
                          confirmText: m.intl.string(m.t.JFfins),
                          onConfirm: () => n(s ? rk : { enabled: !0, warningSeen: !0 }),
                      })
                    : n({ enabled: e });
        },
    });
}
function rW(e) {
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
    return (0, f.jsxs)(io.n, {
        label: m.intl.string(m.t.mqxwJO),
        children: [
            (0, f.jsx)(D.d, {
                label: m.intl.string(m.t.s0KCgF),
                description: m.intl.string(m.t.O1Vflg),
                checked: i,
                disabled: !t,
                onChange: (e) => r({ confettiEnabled: e }, 0),
            }),
            (0, f.jsxs)("div", {
                children: [
                    (0, f.jsx)(k.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: rV.KF,
                        children: m.intl.string(m.t.vd0D81),
                    }),
                    (0, f.jsx)(rH, { children: m.intl.string(m.t.a18Sug) }),
                    (0, f.jsx)(i8.A, {
                        disabled: a,
                        markers: rB,
                        stickToMarkers: !0,
                        minValue: rB[0],
                        maxValue: rB[rB.length - 1],
                        initialValue: n,
                        onValueChange: (e) => r({ confettiCount: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, f.jsxs)("div", {
                children: [
                    (0, f.jsx)(k.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: rV.KF,
                        children: m.intl.string(m.t.sPO3ij),
                    }),
                    (0, f.jsx)(rH, { children: m.intl.string(m.t.xoldVn) }),
                    (0, f.jsx)(i8.A, {
                        disabled: a,
                        markers: rz,
                        stickToMarkers: !0,
                        minValue: rz[0],
                        maxValue: rz[rz.length - 1],
                        initialValue: s,
                        onValueChange: (e) => r({ confettiSize: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, f.jsx)(rX, {
                disabled: a,
                locations: [
                    {
                        location: rM.k.CHAT_INPUT,
                        title: m.intl.string(m.t.elTtyz),
                        description: m.intl.string(m.t.HtKfMi),
                    },
                    {
                        location: rM.k.REACTION,
                        title: m.intl.string(m.t.Ik4VIa),
                        description: m.intl.string(m.t.y4rqK0),
                    },
                    {
                        location: rM.k.MEMBER_USER,
                        title: m.intl.string(m.t.ZXBlAn),
                        description: m.intl.string(m.t["m9RD+c"]),
                    },
                    {
                        location: rM.k.CALL_TILE,
                        title: m.intl.string(m.t.V66giQ),
                        description: m.intl.string(m.t.fiHV7u),
                    },
                ],
                settingsLocations: l,
                onChange: (e) => r({ confettiEnabledLocations: e }, 0),
            }),
        ],
    });
}
function rZ(e) {
    let {
            settings: { enabled: t, combosEnabled: i, comboSoundsEnabled: n, combosRequiredCount: s },
            updateSettings: l,
        } = e,
        r = !t || !i;
    return (0, f.jsxs)(io.n, {
        label: m.intl.string(m.t.Xz0ole),
        children: [
            (0, f.jsx)(D.d, {
                label: m.intl.string(m.t.o3iV7B),
                description: m.intl.string(m.t["31Z8Ee"]),
                checked: i,
                disabled: !t,
                onChange: (e) => l({ combosEnabled: e }),
            }),
            (0, f.jsx)(D.d, {
                label: m.intl.string(m.t["Ax+IoW"]),
                description: m.intl.string(m.t["9rgQEr"]),
                checked: n,
                disabled: !t,
                onChange: (e) => l({ comboSoundsEnabled: e }),
            }),
            (0, f.jsxs)("div", {
                children: [
                    (0, f.jsx)(k.E, {
                        variant: "text-md/semibold",
                        color: r ? "text-muted" : "text-strong",
                        className: rV.KF,
                        children: m.intl.string(m.t.L0oQuh),
                    }),
                    (0, f.jsx)(rH, { children: m.intl.string(m.t["/OOFpL"]) }),
                    (0, f.jsx)(i8.A, {
                        disabled: r,
                        markers: rw,
                        stickToMarkers: !0,
                        minValue: rw[0],
                        maxValue: rw[rw.length - 1],
                        initialValue: s,
                        onValueChange: (e) => l({ combosRequiredCount: e }),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
        ],
    });
}
function rq(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: i, shakeIntensity: n, screenshakeEnabledLocations: s },
            updateSettings: l,
        } = e,
        r = (0, R.bG)([iW.A], () => iW.A.useReducedMotion),
        a = !t || !i || r;
    return (0, f.jsxs)(io.n, {
        label: m.intl.string(m.t.wVS5Sd),
        children: [
            (0, f.jsx)(D.d, {
                label: m.intl.string(m.t.N004zO),
                description: r ? m.intl.string(m.t.GckHGw) : m.intl.string(m.t.Qq5W3v),
                checked: i && !r,
                disabled: !t || r,
                onChange: (e) => l({ screenshakeEnabled: e }, 1),
            }),
            (0, f.jsxs)("div", {
                children: [
                    (0, f.jsx)(k.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: rV.KF,
                        children: m.intl.string(m.t.UxnnC4),
                    }),
                    (0, f.jsx)(rH, { children: m.intl.string(m.t.CEOEOb) }),
                    (0, f.jsx)(i8.A, {
                        disabled: a,
                        markers: rF,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: rF[0],
                        maxValue: rF[rF.length - 1],
                        initialValue: n,
                        onValueChange: (e) => {
                            var t;
                            null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > n &&
                                (0, r_._)(rC.sn.MORE),
                                l(t, 1);
                        },
                        onMarkerRender: (e) => (e === rF[rF.length - 1] ? m.intl.string(m.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, f.jsx)(rX, {
                disabled: a,
                locations: [
                    {
                        location: rM.uD.CHAT_INPUT,
                        title: m.intl.string(m.t.vUcvPP),
                        description: m.intl.string(m.t.y00OrF),
                    },
                    {
                        location: rM.uD.VOICE_USER,
                        title: m.intl.string(m.t.TcRO54),
                        description: m.intl.string(m.t.YJCxVY),
                    },
                    {
                        location: rM.uD.MENTION,
                        title: m.intl.string(m.t.oW4shO),
                        description: m.intl.string(m.t["mqfw/H"]),
                    },
                ],
                settingsLocations: s,
                onChange: (e) => l({ screenshakeEnabledLocations: e }, 1),
            }),
        ],
    });
}
function rQ(e) {
    let { updateSettings: t } = e;
    return (0, f.jsx)(io.n, {
        label: m.intl.string(m.t.EuXv2q),
        children: (0, f.jsxs)(L.B, {
            gap: 16,
            children: [
                (0, f.jsx)("div", { children: m.intl.string(m.t["1SLnki"]) }),
                (0, f.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: rV.hw,
                    children: (0, f.jsx)(eE.$, {
                        variant: "primary",
                        size: "sm",
                        text: m.intl.string(m.t.qz65yY),
                        onClick: () => {
                            t({ enabled: !1, settingsVisible: !1 }), (0, sE.default)();
                        },
                    }),
                }),
            ],
        }),
    });
}
function rJ(e) {
    let { onChangePage: t } = e;
    return (0, f.jsxs)(V.D, {
        onClick: () => t(1),
        className: rV.Tq,
        children: [
            (0, f.jsx)("div", {
                className: rV.w1,
                children: (0, f.jsx)(rx.O, { size: "md", color: F.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, f.jsxs)("div", {
                className: rV.qL,
                children: [
                    (0, f.jsx)(eh.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: m.intl.string(m.t["6jI0hd"]),
                    }),
                    (0, f.jsx)(k.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: m.intl.string(m.t.GuUItX),
                    }),
                ],
            }),
            (0, f.jsx)(tE._, { size: "custom", color: "currentColor", width: 16, className: rV.nT }),
        ],
    });
}
let r$ = () =>
    i
        .e("4660")
        .then(i.t.bind(i, 662336, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
function r0(e) {
    let { onChangePage: t, setShowEnableAnimation: i } = e,
        n = (0, R.cf)([rE.A], () => rE.A.getState()),
        [s, l] = N.useState({ x: 0, y: 0 }),
        r = (0, rU.A)(),
        a = (e, t) => {
            var l, a, o, u, d, c, g, m;
            if (
                (e.enabled &&
                    !1 === n.enabled &&
                    (i(!0),
                    (0, rp.Ak)("poggermode_enabled"),
                    (0, rN.fO)({ duration: 2e3, intensity: e.shakeIntensity ?? n.shakeIntensity })),
                (0, rI.O9)(e),
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
            1 === t && h && (0, rN.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? n.shakeIntensity });
        },
        o = (e) => {
            l({ x: e.clientX, y: e.clientY });
        };
    return (
        N.useEffect(
            () => (window.addEventListener("mousemove", o), () => window.removeEventListener("mousemove", o)),
            [],
        ),
        (0, f.jsxs)(L.B, {
            gap: 24,
            children: [
                (0, f.jsx)(rK, { settings: n, updateSettings: a }),
                (0, f.jsx)(rJ, { onChangePage: t }),
                (0, f.jsx)(rZ, { settings: n, updateSettings: a }),
                (0, f.jsx)(rq, { settings: n, updateSettings: a }),
                (0, f.jsx)(rW, { settings: n, updateSettings: a }),
                (0, f.jsx)(rQ, { updateSettings: a }),
            ],
        })
    );
}
let r1 = (e) => (0 === e ? rS.f.LEFT : rS.f.RIGHT),
    r2 = (0, o.E2)(d.X.POGGERMODE_SETTING, {
        Component: function () {
            let [e, t] = N.useState(0),
                [i, n] = N.useState(r1(e)),
                [s, l] = N.useState(!1),
                r = (0, R.bG)([iW.A], () => iW.A.useReducedMotion),
                a = s && !r;
            return (
                N.useEffect(() => {
                    let t = setTimeout(() => {
                        n(r1(e));
                    }, 500);
                    return () => clearTimeout(t);
                }, [e]),
                N.useEffect(() => {
                    (0, rf._)(rY[e]);
                }, [e]),
                N.useEffect(() => {
                    Math.random() > 0.99 && (0, r_._)(rC.sn.VISITOR_100);
                }, []),
                (0, f.jsxs)(f.Fragment, {
                    children: [
                        (0, f.jsx)(rS.A, {
                            className: rV.l3,
                            step: e,
                            direction: i,
                            children: ((e, t, i) => {
                                let n = (e) => () => {
                                    t(e);
                                };
                                switch (e) {
                                    case 0:
                                        return (0, f.jsx)(r0, { onChangePage: n(1), setShowEnableAnimation: i });
                                    case 1:
                                        return (0, f.jsx)(rG, { onBackClick: n(0) });
                                    default:
                                        return null;
                                }
                            })(e, t, l),
                        }),
                        (0, f.jsx)("div", {
                            className: a ? rV.Sr : rV.IP,
                            children: (0, f.jsx)(rT.a, {
                                className: rV.gT,
                                importData: r$,
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
            m.intl.string(m.t.AtCukI),
            m.intl.string(m.t.mqxwJO),
            m.intl.string(m.t.wVS5Sd),
            m.intl.string(m.t.Xz0ole),
            m.intl.string(m.t["Ax+IoW"]),
            m.intl.string(m.t["6jI0hd"]),
            m.intl.string(m.t.s0KCgF),
        ],
    }),
    r3 = (0, o.zZ)(d.X.POGGERMODE_CATEGORY, { buildLayout: () => [r2] });
var r6 = i(736170);
let r4 = (0, o.t_)(d.X.POGGERMODE_PANEL, { useTitle: () => m.intl.string(m.t.AtCukI), buildLayout: () => [r3] }),
    r7 = (0, o.i4)(d.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t.AtCukI),
        icon: () => (0, f.jsx)("img", { alt: "", src: i(724405), className: r6.$ }),
        usePredicate: () => (0, R.bG)([rE.A], () => rE.A.settingsVisible),
        buildLayout: () => [r4],
    });
var r5 = i(307301);
let r8 = (0, o.zD)(d.X.OS_START_MINIMIZED, {
    useTitle: () => m.intl.string(m.t.GfBL83),
    useSubtitle: () => m.intl.string(m.t.XGyhhc),
    usePredicate: () => (0, n9.uF)(),
    useValue: () => rl.useState((e) => !!e.openOnStartup && e.startMinimized),
    setValue: function (e) {
        rl.setState({ startMinimized: e }), st.Ay.send("TOGGLE_START_MINIMIZED", e);
    },
    useDisabled: () => !rl.useState((e) => e.openOnStartup),
    initialize: () => {
        st.Ay.getSetting("START_MINIMIZED", !1).then((e) => rl.setState({ startMinimized: e }));
    },
});
var r9 = i(839610),
    ae = i(145339);
function at(e) {
    let { keybind: t } = e,
        i = eD.dI(t.shortcut);
    return nQ.A.hasBind(i)
        ? (0, f.jsx)(O.w, { type: "warning", children: m.intl.string(m.t["7lQlw3"]) })
        : ix.Yy.has(i)
          ? (0, f.jsx)(O.w, {
                type: "warning",
                children: m.intl.format(m.t.MOIaNd, {
                    keyboardNavArticle: to.A.getArticleURL(Q.MVz.KEYBOARD_NAVIGATION),
                }),
            })
          : void 0;
}
function ai(e) {
    let { keybind: t } = e;
    return t.action === Q.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, f.jsx)(lW, { keybind: t, className: ae._M }) : null;
}
let an = N.memo(function (e) {
        let { keybind: t, keybindDescriptions: i, keybindActionTypes: n } = e,
            s = N.useCallback((e) => tR.A.setKeybind({ ...t, action: e }), [t]),
            l = N.useCallback((e) => tR.A.setKeybind({ ...t, shortcut: e }), [t]),
            r = N.useCallback(() => tR.A.setKeybind({ ...t, enabled: !t.enabled }), [t]),
            a = N.useCallback(() => tR.A.deleteKeybind(t.id), [t.id]),
            o = N.useId(),
            u = N.useMemo(() => n.find((e) => e.value === t.action)?.label ?? t.action, [t.action, n]);
        return (0, f.jsxs)(L.B, {
            gap: 12,
            direction: "vertical",
            children: [
                (0, f.jsx)(at, { keybind: t }),
                (0, f.jsxs)(L.B, {
                    gap: 40,
                    direction: "horizontal",
                    children: [
                        (0, f.jsxs)("div", {
                            className: ae.f_,
                            children: [
                                (0, f.jsxs)("div", {
                                    className: ae.XI,
                                    children: [
                                        (0, f.jsx)(lS.l, {
                                            selectionMode: "single",
                                            label: m.intl.string(m.t.XH5b12),
                                            value: t.action,
                                            options: n,
                                            onSelectionChange: s,
                                            disabled: t.managed,
                                        }),
                                        (0, f.jsx)(k.E, {
                                            variant: "text-xs/normal",
                                            color: "text-subtle",
                                            children: i[t.action],
                                        }),
                                    ],
                                }),
                                (0, f.jsx)("div", {
                                    className: ae.LE,
                                    children: (0, f.jsx)(sy.D, {
                                        label: m.intl.string(m.t["1La4tC"]),
                                        layout: "vertical",
                                        children: (0, f.jsx)(tL.A, { defaultValue: t.shortcut, onChange: l }),
                                    }),
                                }),
                            ],
                        }),
                        (0, f.jsxs)("div", {
                            className: ae.ne,
                            children: [
                                !t.managed &&
                                    (0, f.jsx)(lp.K, {
                                        variant: "icon-only",
                                        onClick: a,
                                        icon: lf.u,
                                        "aria-label": m.intl.string(m.t.qEHmmB),
                                    }),
                                (0, f.jsx)(e1.m, {
                                    text: m.intl.string(t.enabled ? m.t.pNYGbx : m.t["51DGkH"]),
                                    ariaHidden: !0,
                                    children: (0, f.jsxs)("div", {
                                        children: [
                                            (0, f.jsx)(z.A, {
                                                id: o,
                                                children: m.intl.format(t.enabled ? m.t["myr/Y0"] : m.t.lYhtPO, {
                                                    actionName: u,
                                                }),
                                            }),
                                            (0, f.jsx)(r9.I, { checked: t.enabled, onChange: r, labelledBy: o }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, f.jsx)(ai, { keybind: t }),
            ],
        });
    }),
    as = (0, o.E2)(d.X.CUSTOM_KEYBINDS_SETTING, {
        useSearchTerms: () => [m.intl.string(m.t["069nVT"])],
        Component: function () {
            let { customizableKeybinds: e, keybindDescriptions: t, keybindActionTypes: i } = l1();
            return n9.Av
                ? e.map((n, s) =>
                      (0, f.jsxs)(
                          N.Fragment,
                          {
                              children: [
                                  (0, f.jsx)(an, { keybind: n, keybindDescriptions: t, keybindActionTypes: i }),
                                  s < e.length - 1 ? (0, f.jsx)(ex.c, { gap: 24 }) : null,
                              ],
                          },
                          n.id,
                      ),
                  )
                : null;
        },
    }),
    al = (0, o.E2)(d.X.DEFAULT_KEYBINDS_SETTING, {
        useSearchTerms: () => [m.intl.string(m.t.Lz5KHI)],
        Component: () => (0, f.jsx)(l7, { showHeader: !1 }),
    }),
    ar = (0, o.zZ)(d.X.SYSTEM_GENERAL_CATEGORY, {
        useTitle: () => m.intl.string(m.t.cg6ltt),
        buildLayout: () => [ra, r8, ro],
        usePredicate: () => n9.Av && ((0, n9.uF)() || (0, n9.j9)()),
        initialize: () => {
            rr();
        },
    }),
    aa = (0, o.zZ)(d.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, {
        useTitle: () => m.intl.string(m.t["069nVT"]),
        useSubtitle: () => m.intl.string(m.t.T4LZVL),
        buildLayout: () => [as],
        initialize: () => (tR.A.enableAll(!1), () => tR.A.enableAll(!0)),
        useInlineNotice: function () {
            return n9.Av
                ? { type: e_.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: () => (0, f.jsx)(lR, { sourcePage: "keybinds" }) }
                : {
                      type: e_.lT.INLINE_NOTICE,
                      noticeType: "info",
                      useText: () => m.intl.format(m.t.mPi3F3, { downloadLink: Q.X7G.DOWNLOAD }),
                  };
        },
        useHeaderDecoration: () =>
            n9.Av
                ? {
                      type: e_.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "add-keybind",
                              type: e_.UV.BUTTON,
                              text: m.intl.string(m.t.zk6Xbs),
                              variant: "secondary",
                              icon: r5.j,
                              onClick: () => tR.A.addKeybind(),
                          },
                      ],
                  }
                : null,
    }),
    ao = (0, o.zZ)(d.X.SYSTEM_DEFAULT_KEYBINDS_CATEGORY, {
        useTitle: () => m.intl.string(m.t.Lz5KHI),
        buildLayout: () => [al],
    }),
    au = (0, o.zZ)(d.X.SYSTEM_HELPER_CATEGORY, {
        useTitle: () => m.intl.string(m.t["+XZgmA"]),
        usePredicate: () => n9.Av && ((0, n9.uF)() || (0, n9.j9)()),
        buildLayout: () => [rg],
    }),
    ad = (0, o.t_)(d.X.SYSTEM_PANEL, {
        useTitle: () => m.intl.string(m.t["VJ/qKo"]),
        buildLayout: () => [ar, aa, ao, au],
    }),
    ac = (0, o.i4)(d.X.SYSTEM_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t["VJ/qKo"]),
        icon: lT.F,
        buildLayout: () => [ad],
    });
var ag = i(831544),
    am = i(922795),
    aA = i(212245),
    ah = i(329551),
    aE = i(285918),
    ax = i(413339),
    aT = i(952572),
    aS = i(382003);
let ap = (0, o.E2)(d.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [m.intl.string(m.t.lZTUPs)],
        usePredicate: aT.A,
        Component: function () {
            let e = (0, aA.p)(),
                t = N.useRef(!1),
                i = (0, R.bG)([lv.Ay], () => lv.Ay.getVideoDeviceId()),
                [n, s] = N.useState((0, ah.i)(t6.default.getCurrentUser())),
                l = N.useRef(n);
            return (
                N.useEffect(
                    () => () => {
                        t.current && (0, aE._C)(l.current);
                    },
                    [],
                ),
                (0, f.jsx)(aS.A, {
                    selectedBackgroundOption: n,
                    onSelectBackgroundOption: (i) => {
                        (t.current = !0), (l.current = i), s(i), (0, ax.gB)(i, { location: e.location }).catch(Q.tEg);
                    },
                    currentDeviceId: i,
                })
            );
        },
    }),
    af = (0, o.zD)(d.X.CAMERA_PREVIEW_PREFERENCE, {
        useTitle: () => m.intl.string(m.t["3Ppr1h"]),
        useSubtitle: () => m.intl.string(m.t.WNbX4O),
        useValue: g.bm.useSetting,
        setValue: (e) => {
            g.bm.updateSetting(e), X.default.track(Q.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
        },
    });
var aN = i(625841),
    a_ = i(74848),
    aC = i(204050);
let aI = (0, nf.D)(() => ({ previewEnabled: !1 }));
var ab = i(731854);
let av = (0, o.E2)(d.X.CAMERA_SELECTION_SETTING, {
    useSearchTerms: () => [m.intl.string(m.t.FsQ3OR)],
    Component: function () {
        let e = (0, R.bG)([lv.Ay], () => lv.Ay.isVideoAvailable()),
            { id: t } = (0, a_.x5)(ab.oh.VIDEO_INPUT),
            { analyticsLocations: i } = (0, nU.Ay)();
        return (0, f.jsx)(aN.U, {
            label: m.intl.string(m.t.FsQ3OR),
            deviceType: ab.oh.VIDEO_INPUT,
            location: "UserSettingsCameraSelect",
            isDisabled: !e,
            helperText: (0, aC.p)()
                ? m.intl.format(m.t.aJYgRt, {
                      onCameraSettingsClick: () => {
                          aI.setState({ previewEnabled: !1 }),
                              window.open((0, aC.i)(t)),
                              X.default.track(Q.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: i });
                      },
                  })
                : void 0,
        });
    },
});
var aj = i(745317),
    ay = i(886964);
let aO = (0, o.E2)(d.X.CAMERA_VIDEO_PREVIEW, {
        useSearchTerms: () => [m.intl.string(m.t.JIf4v7)],
        Component: function () {
            let e = lv.Ay.getCameraComponent(),
                t = (0, R.bG)([lv.Ay], () => lv.Ay.getVideoDeviceId()),
                i = aI.useField("previewEnabled"),
                n = (0, R.bG)([lv.Ay], () => lv.Ay.isVideoAvailable());
            return ((0, e5.l0)(() => {
                aI.setState({ previewEnabled: !1 });
            }),
            i)
                ? (0, f.jsx)("div", {
                      className: ay.T,
                      children: (0, f.jsxs)("div", {
                          className: ay.U,
                          children: [
                              (0, f.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !i }),
                              (0, f.jsx)(aj.k, {}),
                          ],
                      }),
                  })
                : (0, f.jsx)("div", {
                      className: ay.T,
                      children: (0, f.jsx)(e1.m, {
                          text: n ? null : m.intl.string(m.t["8jSzSe"]),
                          children: (0, f.jsx)(eE.$, {
                              variant: "primary",
                              text: m.intl.string(m.t.JIf4v7),
                              onClick: () => aI.setState({ previewEnabled: !0 }),
                              disabled: !n,
                          }),
                      }),
                  });
        },
    }),
    aR = (0, o.zZ)(d.X.CAMERA_CATEGORY, {
        useTitle: () => m.intl.string(m.t.uje3P9),
        usePredicate: () => (0, R.bG)([lv.Ay], () => lv.Ay.supports(ab.O5.VIDEO)),
        buildLayout: () => [aO, af, av, ap],
    });
function aL() {
    n6.h.dispatch({ type: "DISCORD_STATS_POPOUT_WINDOW_OPEN" });
}
let aD = (0, o.Tf)(d.X.DISCORD_STATS_POPOUT, {
    useTitle: () => "Discord Stats",
    useSubtitle: () => "Open a floating panel showing live GPU, CPU, and memory usage.",
    useLabel: () => "Open",
    usePredicate: () => (0, R.bG)([t6.default], () => t6.default.getCurrentUser()?.isStaff() ?? !1),
    onClick: () => {
        aL();
    },
});
var aP = i(827343);
let aG = (0, o.zD)(d.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => m.intl.string(m.t.qFphsa),
        useSubtitle: () => m.intl.string(m.t.cQfwyY),
        usePredicate: function () {
            return (0, n9.j9)();
        },
        useValue: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.getOpenH264Enabled());
        },
        setValue: function (e) {
            aP.A.setOpenH264Enabled(e),
                (0, se.A)({
                    title: m.intl.string(m.t["9jf31O"]),
                    subtitle: m.intl.string(m.t["J2wg+X"]),
                    confirmText: m.intl.string(m.t.BddRzS),
                    onConfirm: () => s2.A.app.relaunch(),
                });
        },
        useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
    }),
    aU = (0, o.zD)(d.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
        useTitle: () => m.intl.string(m.t["r6K+TL"]),
        useSubtitle: () => m.intl.string(m.t["xl9+I6"]),
        useValue: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.getAecDump());
        },
        setValue: aP.A.setAecDump,
        usePredicate: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.isAecDumpSupported());
        },
    });
var aM = i(139033),
    aV = i(862482),
    ak = i(640238),
    aw = i(825484),
    aF = i(77138),
    aB = i(487329),
    az = i(353835);
let aY = (0, nf.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function aX() {
    let e = await s2.A.fileManager.getLogPath();
    s2.A.fileManager.showItemInFolder(e);
}
function aH(e) {
    (0, se.A)({
        title: m.intl.string(m.t["7UXEF2"]),
        subtitle: m.intl.string(m.t.IYPrRl),
        confirmText: m.intl.string(m.t.BddRzS),
        onConfirm: () => aP.A.setDebugLogging(e),
    });
}
async function aK(e) {
    let { onUploadStart: t, onUploadFinish: i } = e;
    t?.();
    try {
        let e, t;
        await lv.Ay.getMediaEngine().writeAudioDebugState(),
            await az.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, aF.a)(Q.Umv.RTC),
            (e = m.intl.string(m.t["fKBB8+"])),
            (t = m.intl.string(m.t.BvyxE7)),
            (0, aM.A)({ title: e, subtitle: t });
    } catch (l) {
        var n;
        let e, t, i, s;
        (n = l.displayMessage),
            (e = m.intl.string(m.t.QZg0J7)),
            (t = n ?? m.intl.string(m.t.VzHcSm)),
            (i = (0, aB.B1)(aB.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (s = m.intl.formatToPlainString(m.t.ejOT95, { errorCode: i })),
            (0, C.openModal)((i) =>
                (0, f.jsx)(ak.a, {
                    header: e,
                    confirmButtonColor: aV.$n.Colors.BRAND,
                    confirmText: m.intl.string(m.t.BddRzS),
                    ...i,
                    children: (0, f.jsxs)("div", {
                        style: { display: "flex", flexDirection: "column", height: "100%" },
                        children: [
                            (0, f.jsx)(k.E, { variant: "text-md/normal", children: t }),
                            (0, f.jsx)(k.E, {
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
async function aW() {
    await aK({
        onUploadStart: () => aY.setState({ isUploading: !0 }),
        onUploadFinish: () => aY.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let aZ = (0, o.E2)(d.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [m.intl.string(m.t["726JHL"]), m.intl.string(m.t.EbwFfR), m.intl.string(m.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, R.bG)([lv.Ay], () => lv.Ay.supports(ab.O5.DEBUG_LOGGING));
        return n9.Av && e && null != s2.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, R.bG)([lv.Ay], () => lv.Ay.getDebugLogging()),
            t = aY.useField("isUploading"),
            i = aY.useField("isDisabled"),
            n = N.useId();
        return (0, f.jsxs)("fieldset", {
            children: [
                (0, f.jsx)(z.A, { tag: "legend", id: n, children: m.intl.string(m.t["FjN+et"]) }),
                (0, f.jsxs)(L.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, f.jsx)(D.d, {
                            label: m.intl.string(m.t["726JHL"]),
                            description: m.intl.string(m.t["/7ak9Q"]),
                            checked: e,
                            onChange: aH,
                        }),
                        (0, f.jsx)("div", {
                            role: "group",
                            "aria-labelledby": n,
                            children: (0, f.jsxs)(aw.e, {
                                children: [
                                    (0, f.jsx)(eE.$, {
                                        variant: "secondary",
                                        text: m.intl.string(m.t.EbwFfR),
                                        onClick: aW,
                                        loading: t,
                                        disabled: i,
                                        "aria-label": m.intl.string(m.t.aY1OH2),
                                    }),
                                    (0, f.jsx)(eE.$, {
                                        variant: "secondary",
                                        text: m.intl.string(m.t.nuPtYi),
                                        onClick: aX,
                                        "aria-label": m.intl.string(m.t["L/hFOe"]),
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
var aq = i(233545),
    aQ = i(412780);
function aJ() {
    return (0, R.bG)([t6.default, lv.Ay], () => {
        let e = t6.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            i = "canary" === st.Ay.releaseChannel || "development" === st.Ay.releaseChannel,
            n = lv.Ay.supports(ab.O5.CONNECTION_REPLAY);
        return t && i && n;
    });
}
let a$ = (0, o.zD)(d.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => m.intl.string(m.t.U4FgFK),
        useSubtitle: () => m.intl.string(m.t.Lm72RU),
        useValue: function () {
            return (0, R.bG)([aQ.Ay], () => aQ.Ay.shouldRecordNextConnection());
        },
        setValue: aq.Et,
        usePredicate: aJ,
    }),
    a0 = (0, o.Tf)(d.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => m.intl.string(m.t.nJnOHO),
        useLabel: () => m.intl.string(m.t["3xjX0U"]),
        onClick: aq.YW,
        usePredicate: aJ,
    });
var a1 = i(926919),
    a2 = i(111162),
    a3 = i(698723);
let a6 = (0, o.zD)(d.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
        useTitle: () => m.intl.string(m.t["0CEP6e"]),
        useSubtitle: () => m.intl.string(m.t["kBXuW+"]),
        useValue: function () {
            return (0, R.bG)([a2.default], () => a2.default.isStreamInfoOverlayEnabled);
        },
        setValue: function (e) {
            let t = a2.default.isStreamInfoOverlayEnabled;
            (0, a3.A)("stream_info_overlay_enabled", e, t), (0, a1.x)({ isStreamInfoOverlayEnabled: e });
        },
        usePredicate: function () {
            return g.Q_.useSetting();
        },
    }),
    a4 = (0, o.bd)(d.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? m.intl.string(m.t["/B4I8H"]) : m.intl.string(m.t.BTlsWH)),
        useCollapsedSubtitle: () => m.intl.string(m.t.la1Ys4),
        buildLayout: () => [a6, aU, a$, a0, aZ],
    });
function a7(e, t, i) {
    (0, se.A)({ title: e, subtitle: t, confirmText: m.intl.string(m.t.BddRzS), onConfirm: i });
}
let a5 = (0, o.Tf)(d.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => m.intl.string(m.t.SXfv1v),
        useSubtitle: () => m.intl.string(m.t["buA5/q"]),
        useLabel: () => m.intl.string(m.t.yBZMsQ),
        onClick: function () {
            a7(m.intl.string(m.t["4iKQ/3"]), m.intl.string(m.t.sQ42iT), aP.A.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    a8 = (0, o.zZ)(d.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => m.intl.string(m.t.UDAU9K),
        buildLayout: () => [aG, a4, aD, a5],
    });
var a9 = i(347481),
    oe = i(852712),
    ot = i(199966),
    oi = i(963935);
function on(e) {
    let { title: t } = e;
    return t;
}
function os(e) {
    let { useTitle: t, settingKey: i, formatter: n, index: s } = e,
        l = t();
    return "string" == typeof l ? n({ title: l, index: s, key: i }) : l;
}
function ol(e) {
    let { setting: t, formatter: i, index: n } = e;
    return () => (0, f.jsx)(os, { useTitle: t.useTitle, settingKey: t.key, formatter: i, index: n }, t.key);
}
function or(e) {
    return e.type === oi.Z6.LIST;
}
function oa(e, t) {
    let { limit: i = 2, formatter: n = on } = t ?? {};
    tO()(i > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { visibleDirectory: s, accessibleDirectory: l } = (0, ot._)(),
        r = s.get(e) ?? l.get(e);
    tO()(
        null != r && (r.type === oi.Z6.ACCORDION || or(r)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let a = or(r) ? (r.collapseAfter ?? 0) : 0,
        o = r.layout;
    return N.useMemo(() => {
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
                return m.intl.format(m.t["3H9tCW"], { settingOneHook: ol({ setting: t[0], formatter: n, index: 0 }) });
            else if (2 === t.length)
                return m.intl.format(m.t.MWryo6, {
                    settingOneHook: ol({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: ol({ setting: t[1], formatter: n, index: 1 }),
                });
            else
                return m.intl.format(m.t.a00b5G, {
                    settingOneHook: ol({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: ol({ setting: t[1], formatter: n, index: 1 }),
                    settingThreeHook: ol({ setting: t[2], formatter: n, index: 2 }),
                });
        return 1 === s
            ? m.intl.format(m.t.O8vNbS, { settingOneHook: ol({ setting: t[0], formatter: n, index: 0 }) })
            : 2 === s
              ? m.intl.format(m.t["acXG/W"], {
                    settingOneHook: ol({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: ol({ setting: t[1], formatter: n, index: 1 }),
                })
              : m.intl.format(m.t["5+ldWc"], {
                    settingOneHook: ol({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: ol({ setting: t[1], formatter: n, index: 1 }),
                    settingThreeHook: ol({ setting: t[2], formatter: n, index: 2 }),
                });
    }, [i, a, o, n]);
}
let oo = (0, o.zD)(d.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => m.intl.string(m.t.cUMdH0),
        useSubtitle: () => m.intl.string(m.t["6EjbvA"]),
        useValue: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            aP.A.setAutomaticGainControl(e, { page: Q.liQ.USER_SETTINGS, section: Q.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, R.bG)([lv.Ay, a9.A], () => {
                let e = lv.Ay.getInputDeviceId();
                return a9.A.hasAutomaticGainControl(e);
            });
        },
        usePredicate: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.isAutomaticGainControlSupported() && lv.Ay.isInputProfileCustom());
        },
    }),
    ou = (0, o.sN)(d.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => m.intl.string(m.t.AlybXj),
        setValue: (e) =>
            aP.A.setAttenuation(e, lv.Ay.getAttenuateWhileSpeakingSelf(), lv.Ay.getAttenuateWhileSpeakingOthers()),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => lv.Ay.getAttenuation(),
    }),
    od = (0, o.zD)(d.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => m.intl.string(m.t["9dHxRY"]),
        useValue: () => (0, R.bG)([lv.Ay], () => lv.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => aP.A.setAttenuation(lv.Ay.getAttenuation(), e, lv.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    oc = (0, o.zD)(d.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => m.intl.string(m.t.SMt0Gr),
        useValue: () => (0, R.bG)([lv.Ay], () => lv.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => aP.A.setAttenuation(lv.Ay.getAttenuation(), lv.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    og = (0, o.FW)(d.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => m.intl.string(m.t.oSdBvW),
        useSubtitle: () => m.intl.string(m.t["0A/8Rt"]),
        usePredicate: () => (0, R.bG)([lv.Ay], () => lv.Ay.supports(ab.O5.ATTENUATION)),
        buildLayout: () => [ou, od, oc],
    });
var om = i(801644);
let oA = (0, o.zD)(d.X.VOICE_HARDWARE_MUTE_SILENCE_ALERT_SETTING, {
        useTitle: () => m.intl.string(m.t.pZ0vr4),
        useSubtitle: () => m.intl.string(m.t.tVbzoZ),
        useValue: function () {
            return (0, R.bG)([nx.Ay], () => !nx.Ay.disableHardwareMuteSilenceAlert);
        },
        setValue: function (e) {
            (0, a3.A)("hardware_mute_silence_alert_enabled", e, !nx.Ay.disableHardwareMuteSilenceAlert),
                sX.Ay.updatedUnsyncedSettings({ disableHardwareMuteSilenceAlert: !e });
        },
        usePredicate: function () {
            let { enableHardwareSilenceWarning: e } = om.A.useConfig({ location: "HardwareMuteSilenceAlertSetting" });
            return e;
        },
    }),
    oh = (0, o.zD)(d.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => m.intl.string(m.t.DFPXIG),
        useSubtitle: () => m.intl.string(m.t["UyRX+C"]),
        useValue: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            aP.A.setBypassSystemInputProcessing(e);
        },
        usePredicate: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.showBypassSystemInputProcessing() && lv.Ay.isInputProfileCustom());
        },
    }),
    oE = (0, o.zD)(d.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
        useTitle: () => m.intl.string(m.t.jrWHD3),
        useSubtitle: () => m.intl.string(m.t.YCCMkJ),
        useValue: function () {
            return (0, R.bG)([nx.Ay], () => !nx.Ay.disableVoiceChannelChangeAlert);
        },
        setValue: function (e) {
            (0, a3.A)("switch_channel_warning_enabled", e, !nx.Ay.disableVoiceChannelChangeAlert),
                sX.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e });
        },
    }),
    ox = (0, o.zD)(d.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
        useTitle: () => m.intl.string(m.t.BbESsg),
        useSubtitle: () => m.intl.string(m.t.LoOB1F),
        useValue: function () {
            return (0, R.bG)([lv.Ay], () => {
                let { vadUseKrisp: e } = lv.Ay.getModeOptions();
                return e;
            });
        },
        setValue: function (e) {
            let t = lv.Ay.getMode();
            aP.A.setMode(t, { vadUseKrisp: e });
        },
        useDisabled: function () {
            return (0, R.bG)([lv.Ay], () => {
                let e = lv.Ay.getMode(),
                    t = lv.Ay.getModeOptions().autoThreshold;
                return e === Q.TBI.VOICE_ACTIVITY && t;
            });
        },
        usePredicate: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.isAdvancedVoiceActivitySupported() && lv.Ay.isInputProfileCustom());
        },
    }),
    oT = (0, o.Hn)(d.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => m.intl.string(m.t.wVBHr0),
        useValue: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            a7(m.intl.string(m.t.uY7AcQ), m.intl.string(m.t.gBqik6), () => aP.A.setAudioSubsystem(e));
        },
        useOptions: function () {
            let {
                legacyAudioSubsystemSupported: e,
                experimentalAudioSubsystemSupported: t,
                automaticAudioSubsystemSupported: i,
            } = (0, R.cf)([lv.Ay], () => ({
                legacyAudioSubsystemSupported: lv.Ay.supports(ab.O5.LEGACY_AUDIO_SUBSYSTEM),
                experimentalAudioSubsystemSupported: lv.Ay.supports(ab.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
                automaticAudioSubsystemSupported: lv.Ay.supports(ab.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
            }));
            return N.useMemo(() => {
                let n;
                return (
                    (n = [{ id: ab.rB.STANDARD, value: ab.rB.STANDARD, label: m.intl.string(m.t.dqb2JZ) }]),
                    e && n.push({ id: ab.rB.LEGACY, value: ab.rB.LEGACY, label: m.intl.string(m.t["TYfH+5"]) }),
                    t &&
                        n.push({ id: ab.rB.EXPERIMENTAL, value: ab.rB.EXPERIMENTAL, label: m.intl.string(m.t.liQmtr) }),
                    i && n.push({ id: ab.rB.AUTOMATIC, value: ab.rB.AUTOMATIC, label: m.intl.string(m.t.qNgtO1) }),
                    n
                );
            }, [i, t, e]);
        },
        usePredicate: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    oS = (0, o.zD)(d.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => m.intl.string(m.t.uancuJ),
        useSubtitle: () => m.intl.string(m.t.I1Eoqq),
        useValue: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.getQoS());
        },
        setValue: function (e) {
            aP.A.setQoS(e);
        },
        usePredicate: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.supports(ab.O5.QOS));
        },
    }),
    op = (0, o.zD)(d.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => m.intl.string(m.t["4rsOPQ"]),
        useSubtitle: () => m.intl.string(m.t.jtiiCw),
        useValue: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            aP.A.setSilenceWarning(e);
        },
        usePredicate: function () {
            return ej.isPlatformEmbedded;
        },
    }),
    of = (0, o.bd)(d.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? m.intl.string(m.t.KHsSWK) : m.intl.string(m.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            oa(d.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, R.bG)([lv.Ay], () => lv.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [oo, ox, oh, op, oA, oE, og, oT, oS],
    }),
    oN = (0, o.zD)(d.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => m.intl.string(m.t.iWTwu6),
        useValue: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            aP.A.setEchoCancellation(e, { page: Q.liQ.USER_SETTINGS, section: Q.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, R.bG)([lv.Ay, a9.A], () => {
                let e = lv.Ay.getInputDeviceId();
                return a9.A.hasEchoCancellation(e);
            });
        },
        usePredicate: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.isInputProfileCustom());
        },
    });
var o_ = i(459838),
    oC = i(451988),
    oI = i(801102),
    ob = i(160671);
let ov = (0, sS.Ld)();
function oj(e) {
    let { isSpeaking: t, className: i, id: n, ariaDescribedBy: s, ariaLabelledBy: l, disabled: r } = e;
    return (0, f.jsx)("div", {
        role: "meter",
        className: eF()(oI.$I, i),
        id: n,
        "aria-describedby": s,
        "aria-labelledby": l,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? m.intl.string(m.t.haLKZ0) : m.intl.string(m.t.X2hJL7),
        children: (0, f.jsx)("div", { className: eF()(oI.Jx, oI.NU, { [oI.zY]: t && !r, [oI.r9]: r }) }),
    });
}
function oy(e) {
    let { volume: t, id: i, ariaDescribedBy: n, ariaLabelledBy: s, disabled: l } = e,
        { threshold: r, autoThreshold: a } = (0, R.cf)([lv.Ay], () => ({
            threshold: lv.Ay.getModeOptions().threshold,
            autoThreshold: lv.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, R.bG)([lv.Ay], () => lv.Ay.getMode());
    return (0, f.jsx)("section", {
        className: eF()(oI.Mo, oI.jW),
        id: i,
        "aria-describedby": n,
        "aria-labelledby": s,
        children: (0, f.jsx)(i8.A, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return (t = -((100 - e) * 1)), void aP.A.setMode(o, { threshold: t, autoThreshold: a });
            },
            barStyles: { background: F.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: F.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": ov,
            disabled: l,
            children: (0, f.jsxs)("div", {
                className: eF()(oI.NU, oI.TL, oI.Jx, ob.bar),
                children: [
                    (0, f.jsx)("div", { className: eF()(oI.GS, oI.SH), style: { width: l ? 0 : t + 100 + "%" } }),
                    (0, f.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let oO = (0, o.E2)(d.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [m.intl.string(m.t["sqUm+k"]), m.intl.string(m.t.I1Zuq0), m.intl.string(m.t.nuFtHH)],
    usePredicate: () => (0, R.bG)([lv.Ay], () => lv.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, R.cf)([lv.Ay], () => ({
                autoThreshold: lv.Ay.getModeOptions().autoThreshold,
                disabled: lv.Ay.getMode() !== ab.TB.VOICE_ACTIVITY,
            })),
            i = N.useCallback((e) => {
                let t = lv.Ay.getMode(),
                    { threshold: i } = lv.Ay.getModeOptions();
                aP.A.setMode(t, { autoThreshold: e, threshold: i });
            }, []),
            n = (0, R.bG)([lv.Ay], () => lv.Ay.supports(ab.O5.AUTOMATIC_VAD)),
            { volume: s, isSpeaking: l } = (function () {
                let [e, t] = N.useState(-100),
                    [i, n] = N.useState(!1);
                function s(e, i) {
                    t(e), n((i & ab.ME.VOICE) === ab.ME.VOICE);
                }
                return (
                    N.useEffect(() => {
                        let e = new oC.Ep();
                        return (
                            e.start(1e3, () => {
                                lv.Ay.getMediaEngine().on(o_.bg.VoiceActivity, s), e.stop();
                            }),
                            () => {
                                lv.Ay.getMediaEngine().removeListener(o_.bg.VoiceActivity, s), e.stop();
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: i }
                );
            })(),
            r = (0, R.bG)([lv.Ay], () => lv.Ay.isEnabled()),
            a = N.useMemo(
                () =>
                    !r &&
                    (0, f.jsx)("div", {
                        className: oI.B4,
                        children: (0, f.jsx)(O.w, {
                            type: "warning",
                            children: m.intl.format(m.t["O13I+O"], { onEnableClick: () => aP.A.enable(!0) }),
                        }),
                    }),
                [r],
            ),
            o = N.useMemo(() => (e ? m.intl.string(m.t.JsbzjA) : m.intl.string(m.t.MLmyMY)), [e]),
            u = N.useId(),
            d = N.useId();
        return n
            ? (0, f.jsxs)("fieldset", {
                  "aria-describedby": d,
                  children: [
                      (0, f.jsx)(z.A, { tag: "legend", id: u, children: m.intl.string(m.t.GByLar) }),
                      (0, f.jsx)(z.A, { id: d, children: o }),
                      (0, f.jsxs)(L.B, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, f.jsx)(D.d, {
                                  disabled: t,
                                  label: m.intl.string(m.t.lY6j47),
                                  description: o,
                                  checked: e,
                                  onChange: i,
                              }),
                              e
                                  ? (0, f.jsx)(oj, {
                                        isSpeaking: l,
                                        className: oI.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, f.jsx)(oy, { volume: s, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
                              a,
                          ],
                      }),
                  ],
              })
            : (0, f.jsxs)(L.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, f.jsx)(sy.D, {
                          label: m.intl.string(m.t["sqUm+k"]),
                          description: o,
                          layout: "vertical",
                          children: (i) =>
                              e
                                  ? (0, f.jsx)(oj, {
                                        isSpeaking: l,
                                        className: oI.UJ,
                                        id: i.controlId,
                                        ariaDescribedBy: i.describedById,
                                        ariaLabelledBy: i.labelId,
                                        disabled: t,
                                    })
                                  : (0, f.jsx)(oy, {
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
var oR = i(366010);
let oL = i(993830),
    oD = i(413142),
    oP = { page: Q.liQ.USER_SETTINGS, section: Q.JJy.SETTINGS_VOICE_AND_VIDEO };
function oG() {
    let e = (0, R.bG)([id.A], () => (0, oR.q)(id.A.theme));
    return (0, f.jsx)("img", { src: e ? oL : oD, width: 48, height: 32, alt: "" });
}
let oU = (0, o.E2)(d.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [m.intl.string(m.t.t8Qhib), m.intl.string(m.t.hmfkCi)],
    usePredicate: function () {
        return (0, R.bG)([lv.Ay], () => lv.Ay.isInputProfileCustom() && lv.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = N.useCallback((e) => {
                aP.A.setNoiseCancellation("KRISP" === e, oP), aP.A.setNoiseSuppression("STANDARD" === e, oP);
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: i,
                isNoiseSuppressionSupported: n,
                isNoiseCancellationSupported: s,
            } = (0, R.cf)([lv.Ay], () => ({
                noiseCancellation: lv.Ay.getNoiseCancellation(),
                noiseSuppression: lv.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: lv.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: lv.Ay.isNoiseCancellationSupported(),
            })),
            l = N.useMemo(() => {
                let e = [];
                return (
                    s && e.push({ id: "krisp", label: m.intl.string(m.t.rdoNzt), value: "KRISP" }),
                    n && e.push({ id: "standard", label: m.intl.string(m.t.qXeYHw), value: "STANDARD" }),
                    e.push({ id: "disabled", label: m.intl.string(m.t.wkYAlz), value: "NONE" }),
                    e
                );
            }, [s, n]),
            r = s
                ? m.intl.format(m.t["1q5aTp"], { helpArticle: to.A.getArticleURL(Q.MVz.NOISE_SUPPRESSION) })
                : m.intl.string(m.t.OWKjw5);
        return (0, f.jsxs)(L.B, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, f.jsx)(lS.l, {
                    label: m.intl.string(m.t.t8Qhib),
                    description: r,
                    layout: "horizontal",
                    value: t ? "KRISP" : i ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: l,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                s && (0, f.jsx)(oG, {}),
            ],
        });
    },
});
var oM = i(934729),
    oV = i(509381);
let ok = !n9.Av;
function ow() {
    return (0, R.bG)([lv.Ay], () => lv.Ay.getMode() === ab.TB.PUSH_TO_TALK);
}
let oF = (0, o.zD)(d.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return n9.Av ? m.intl.string(m.t.tG4Np5) : m.intl.string(m.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, R.bG)([lv.Ay], () => lv.Ay.getMode());
        return N.useMemo(() => {
            if (!n9.Av && e === ab.TB.PUSH_TO_TALK)
                return m.intl.format(m.t["VHI4+Y"], { onDownloadClick: () => (0, oM._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, R.bG)([lv.Ay], () => lv.Ay.getActiveInputProfile() !== oV.m.STUDIO);
    },
    useValue: function () {
        return (0, R.bG)([lv.Ay], () => lv.Ay.getMode() === ab.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, n;
        (t = e ? ab.TB.PUSH_TO_TALK : ab.TB.VOICE_ACTIVITY),
            (n = [eV.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === ab.TB.PUSH_TO_TALK &&
                ok &&
                (0, C.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([i.e("31910"), i.e("10919")]).then(i.bind(i, 556506));
                    return (t) =>
                        (0, f.jsx)(e, {
                            title: m.intl.string(m.t.Kdt0Gb),
                            confirmText: m.intl.string(m.t["1WjMbC"]),
                            cancelText: m.intl.string(m.t.BddRzS),
                            onConfirm: () => (0, oM._)("PTT Limited Modal"),
                            body: m.intl.string(m.t.NIozvt),
                            ...t,
                        });
                }),
            aP.A.setMode(t, void 0, void 0, { analyticsLocations: n });
    },
    useSearchTerms: () => [m.intl.string(m.t["pS+K2L"]), m.intl.string(m.t.nuFtHH)],
});
var oB = i(371060);
let oz = (0, o.E2)(d.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [m.intl.string(m.t["pS+K2L"]), m.intl.string(m.t.nuFtHH)],
        usePredicate: ow,
        Component: function () {
            let e = (0, R.bG)([lv.Ay], () => {
                    let { shortcut: e } = lv.Ay.getModeOptions();
                    return e;
                }),
                t = m.intl.format(m.t.HVvn5T, { onClick: () => (0, ey.openUserSettings)(d.X.KEYBINDS_PANEL) });
            return (0, f.jsx)(sy.D, {
                label: m.intl.string(m.t["o+BJQR"]),
                description: t,
                layout: "horizontal-responsive",
                children: (0, f.jsx)("div", {
                    className: oB.e,
                    children: (0, f.jsx)(tL.A, {
                        defaultValue: e,
                        onChange: (e) => aP.A.setMode(Q.TBI.PUSH_TO_TALK, { shortcut: e }),
                    }),
                }),
            });
        },
    }),
    oY = (0, o.sN)(d.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => m.intl.string(m.t.GCNMM8),
        useSearchTerms: () => [m.intl.string(m.t["pS+K2L"]), m.intl.string(m.t.nuFtHH)],
        setValue: function (e) {
            aP.A.setMode(Q.TBI.PUSH_TO_TALK, { delay: e });
        },
        minValue: 0,
        maxValue: Q.IjB,
        getInitialValue: function () {
            let { delay: e } = lv.Ay.getModeOptions();
            return e;
        },
        onValueRender: function (e) {
            return e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}\u00A0ms`;
        },
        usePredicate: ow,
    }),
    oX = (0, o.Qx)(d.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => m.intl.string(m.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, oe._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [m.intl.string(m.t.nuFtHH), m.intl.string(m.t.VZPR0R), m.intl.string(m.t.cjPbpT)],
        useValue: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.getActiveInputProfile() ?? oV.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [eV.A.USER_SETTINGS_VOICE_AND_VIDEO];
            aP.A.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, oe.d)({ location: "InputProfileCategory" });
            return [
                { value: oV.m.VOICE_ISOLATION, name: m.intl.string(m.t.cjPbpT), desc: m.intl.string(m.t.CzhvnE) },
                { value: oV.m.STUDIO, name: m.intl.string(m.t.VZPR0R), desc: m.intl.string(m.t.ZaJksS) },
                { value: oV.m.CUSTOM, name: m.intl.string(m.t["N/PQjv"]), desc: m.intl.string(m.t.SnBmuY) },
            ].filter((t) => {
                let { value: i } = t;
                return e.includes(i);
            });
        },
    }),
    oH = (0, o.zZ)(d.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, R.bG)([a9.A, lv.Ay], () => {
                let e = lv.Ay.getInputDeviceId();
                return (
                    (a9.A.hasEchoCancellation(e) || a9.A.hasNoiseSuppression(e) || a9.A.hasAutomaticGainControl(e)) &&
                    lv.Ay.isInputProfileCustom()
                );
            });
            return N.useMemo(() => {
                if (e)
                    return {
                        type: e_.lT.INLINE_NOTICE,
                        noticeType: "info",
                        useText: () => m.intl.string(m.t["/Whuzi"]),
                    };
            }, [e]);
        },
        buildLayout: () => [oX, oO, oU, oN, oF, oz, oY, of],
    });
var oK = i(403581),
    oW = i(983851),
    oZ = i(687021),
    oq = i(128450),
    oQ = i(796774),
    oJ = i(209932),
    o$ = i(813564),
    o0 = i(984813),
    o1 = i(22231),
    o2 = i(428262),
    o3 = i(792348),
    o6 = i(674168),
    o4 = i(277192),
    o7 = i(805945),
    o5 = i(902460);
function o8(e) {
    let { onSelect: t } = e,
        [i, n] = N.useState(!1),
        s = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()),
        l = o2.Ay.canUseCustomCallSounds(s),
        r = N.useRef(null);
    function a(e) {
        l && (n(!1), t?.(e));
    }
    return (0, f.jsx)(G.Y, {
        targetElementRef: r,
        shouldShow: i,
        position: "left",
        onRequestClose: () => n(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, f.jsx)(iR.l, {
                children: (0, f.jsx)(o4.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: l ? null : (0, f.jsx)(o6.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, f.jsx)(o7.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    n(!i);
                },
                text: m.intl.string(m.t.uOe0Az),
                children: (0, f.jsx)(o1.R, { size: "md", color: "currentColor", className: o5.Wo }),
            }),
    });
}
function o9(e) {
    let { sound: t } = e,
        { previewSound: i } = (0, o3.A)(t, null),
        n =
            0 === (0, o$.wH)()
                ? m.intl.string(m.t.OASXjt)
                : m.intl.formatToPlainString(m.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, f.jsx)(o7.dT, {
        onClick: i,
        text: n,
        children: (0, f.jsx)(oW.H, { size: "md", color: "currentColor", className: o5.wg }),
    });
}
function ue(e) {
    let { sound: t, isGlobal: i, onSelect: n } = e,
        s = null != t,
        l = t?.emojiId,
        r = t?.emojiName,
        a = s && (null != r || null != l);
    return (0, f.jsxs)("div", {
        className: o5.D6,
        children: [
            (0, f.jsxs)("div", {
                className: o5.kL,
                children: [
                    a && (0, f.jsx)(sa.A, { emojiId: l, emojiName: r, className: o5.Zg }),
                    (0, f.jsx)(k.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        className: o5.dj,
                        children:
                            null == t
                                ? m.intl.string(m.t.PoWNfe)
                                : i
                                  ? m.intl.format(m.t.B6HU6O, {
                                        soundName: t.name,
                                        subtextHook: (e) =>
                                            (0, f.jsx)(k.E, {
                                                variant: "text-xs/medium",
                                                color: "text-default",
                                                tag: "span",
                                                children: e,
                                            }),
                                    })
                                  : t.name,
                    }),
                    s
                        ? (0, f.jsx)(o9, { sound: t })
                        : (0, f.jsx)(oW.H, { size: "md", color: "currentColor", className: o5.Gk }),
                ],
            }),
            (0, f.jsxs)("div", {
                className: o5.kL,
                children: [
                    (0, f.jsx)(o8, { onSelect: n }),
                    s &&
                        !i &&
                        (0, f.jsx)(o7.dT, {
                            onClick: () => n(null),
                            text: m.intl.string(m.t.jmtcGA),
                            children: (0, f.jsx)(lf.u, {
                                size: "md",
                                color: F.A.unsafe_rawColors.RED_400.css,
                                className: o5.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var ut = i(617617);
i(980504);
var ui = i(384863);
function un(e) {
    return (0, R.bG)([oJ.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: i } = e;
        return oJ.A.getSound("0" === t ? "0" : t, i);
    });
}
function us(e) {
    let { guildId: t } = e,
        i = (0, R.bG)([ut.A], () => ut.A.settings.guilds?.guilds?.[t]?.joinSound),
        n = un(i);
    if (null == i || null == n) return null;
    let { emojiId: s, emojiName: l } = n,
        r = null != s || null != l;
    return (0, f.jsxs)("div", {
        className: ui.Io,
        children: [
            r
                ? (0, f.jsx)(sa.A, { emojiId: s, emojiName: l, className: ui.nW })
                : (0, f.jsx)(oW.H, { size: "md", color: "currentColor", className: ui.nW }),
            (0, f.jsx)(k.E, { className: ui.dK, variant: "text-xs/medium", children: n.name }),
        ],
    });
}
let ul = (0, o.E2)(d.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [m.intl.string(m.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, nU.Ay)(),
            [t, i] = N.useState("0"),
            n = (0, o0.mz)(t),
            s = un(n),
            l = n?.type === o0.PP.GLOBAL,
            r = (0, R.bG)([oJ.A], () => oJ.A.hasFetchedAllSounds()) && null != n && null == s;
        N.useEffect(() => {
            r && (0, o$.ND)({ location: e });
        }, [r, e]),
            N.useEffect(() => {
                (0, oQ.E7)();
            }, []);
        let a = N.useCallback((e, t) => {
            let { inDropdown: i } = t;
            return null == e ? null : i ? (0, f.jsx)(us, { guildId: e.value }) : null;
        }, []);
        return (0, f.jsxs)(io.n, {
            label: m.intl.string(m.t.nzUc3B),
            description: m.intl.format(m.t.u9RWmv, { helpdeskArticle: to.A.getArticleURL(Q.MVz.SOUNDBOARD) }),
            children: [
                (0, f.jsx)(oZ.A, {
                    guildId: t,
                    className: ui.Dt,
                    globalOption: { label: m.intl.string(m.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        i(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, f.jsxs)(oq.A, {
                    title: m.intl.format(m.t.I2TsYN, {
                        nitroWheelHook: () => (0, f.jsx)(oK.t, { size: "md", color: "currentColor", className: ui.ax }),
                    }),
                    children: [
                        (0, f.jsx)(ue, {
                            sound: s,
                            isGlobal: l,
                            onSelect: (i) => {
                                null == i ? (0, o$.Dv)(t, e) : (0, o$.un)(t, i, e);
                            },
                        }),
                        r &&
                            (0, f.jsx)(ta.p, {
                                className: ui.lm,
                                messageType: ta.Y.WARNING,
                                children: m.intl.string(m.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        });
    },
});
var ur = i(824744);
let ua = (0, o.sN)(d.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => m.intl.string(m.t.kbFsAD),
    useSubtitle: () => m.intl.format(m.t.BPbGq7, { helpCenterArticle: to.A.getArticleURL(Q.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [eV.A.USER_SETTINGS_VOICE_AND_VIDEO],
            i = (0, ur.w)(e);
        (0, oQ.iy)(i, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, o$.wH)();
        return (0, ur.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var uo = i(864145);
let uu = (0, o.sN)(d.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => m.intl.string(m.t["2JbvKw"]),
        useSubtitle: () => m.intl.string(m.t.INenzY),
        setValue: function (e) {
            let t = (0, ur.w)(e);
            g.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = g.HO.getSetting();
            return (0, ur.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, uo.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    ud = (0, o.zZ)(d.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => m.intl.string(m.t.ABjMWI),
        buildLayout: () => [ua, uu, ul],
    });
var uc = i(803224),
    ug = i(552122);
let um = (0, o.E2)(d.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [m.intl.string(m.t.fgSHf8)],
        usePredicate: () => null != ug.A.useHolidaySoundpack(),
        Component: () =>
            (0, f.jsx)(k.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: m.intl.format(m.t.Eup6Wv, {
                    onClick: () => (0, ey.openUserSettings)(d.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    uA = (0, o.AK)(d.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => m.intl.string(m.t.eyGEE4),
        useSearchTerms: () => [m.intl.string(m.t.eyGEE4)],
        destinationKey: d.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    uh = (0, o.gN)(d.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [uA] });
var uE = i(264686);
let ux = (0, nf.D)(() => ({ currentPlayingSound: null }));
function uT() {
    let e = ux.getField("currentPlayingSound");
    e?.stop(), ux.setState({ currentPlayingSound: null });
}
function uS(e) {
    let t = ux.getField("currentPlayingSound");
    t?.stop();
    let i = (0, rp.Ak)(e);
    ux.setState({ currentPlayingSound: i });
}
function up(e) {
    return (0, o.zD)(`${d.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => m.intl.format(m.t.OOiGCM, { onClick: () => uS(e.sound) }),
        useValue: () => {
            let t = (0, R.bG)([uc.A], () => uc.A.isSoundDisabled(e.sound)),
                i = e.useDisabled?.();
            return !t && !i;
        },
        setValue: (t) => {
            let i = uc.A.getDisabledSounds().filter((t) => t !== e.sound);
            t || i.push(e.sound), uE.default.setDisabledSounds(i);
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                i = (0, R.bG)([uc.A], () => uc.A.getDisableAllSounds());
            return t || i;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let uf = [
        { useTitle: () => m.intl.string(m.t.hK51Yg), sound: "deafen" },
        { useTitle: () => m.intl.string(m.t.XiejaJ), sound: "undeafen" },
        { useTitle: () => m.intl.string(m.t.w4m945), sound: "mute" },
        { useTitle: () => m.intl.string(m.t.YqAjXy), sound: "unmute" },
        { useTitle: () => m.intl.string(m.t.JoTq8n), sound: "camera_on" },
        { useTitle: () => m.intl.string(m.t["8P6tQ6"]), sound: "camera_off" },
        { useTitle: () => m.intl.string(m.t["juL9/L"]), sound: "disconnect" },
        { useTitle: () => m.intl.string(m.t.x98vQq), sound: "ptt_start" },
        { useTitle: () => m.intl.string(m.t["1HjRqC"]), sound: "ptt_stop" },
        { useTitle: () => m.intl.string(m.t["9JB1Ck"]), sound: "user_join" },
        { useTitle: () => m.intl.string(m.t.KUBBNt), sound: "user_leave" },
        { useTitle: () => m.intl.string(m.t.EZjqUT), sound: "user_moved" },
        { useTitle: () => m.intl.string(m.t.LnNlQh), sound: "call_calling" },
        { useTitle: () => m.intl.string(m.t.Nd8P5y), sound: "stream_started" },
        { useTitle: () => m.intl.string(m.t["9bYj+G"]), sound: "stream_ended" },
        { useTitle: () => m.intl.string(m.t.KccUI1), sound: "stream_user_joined" },
        { useTitle: () => m.intl.string(m.t.dsjkiN), sound: "stream_user_left" },
        { useTitle: () => m.intl.string(m.t.nFOcf9), sound: "activity_launch" },
        { useTitle: () => m.intl.string(m.t["a6lw/u"]), sound: "activity_end" },
        { useTitle: () => m.intl.string(m.t.KaFxrY), sound: "activity_user_join" },
        { useTitle: () => m.intl.string(m.t.S14z9n), sound: "activity_user_left" },
        { useTitle: () => m.intl.string(m.t.CP3DC3), sound: "reconnect" },
    ],
    uN = (0, o.D1)(d.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? m.intl.formatToPlainString(m.t["0JYT98"], { count: t })
                : m.intl.formatToPlainString(m.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => oa(d.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                uT();
            };
        },
        buildLayout: () => uf.map((e) => up(e)),
    }),
    u_ = (0, o.zZ)(d.X.SOUNDS_CATEGORY, {
        useTitle: () => m.intl.string(m.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, R.bG)([uc.A], () => uc.A.getDisableAllSounds());
            return N.useMemo(() => {
                if (e)
                    return {
                        type: e_.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        useText: () =>
                            m.intl.format(m.t.fRvixS, {
                                onClick: () => (0, ey.openUserSettings)(d.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                            }),
                    };
            }, [e]);
        },
        buildLayout: () => [uN, um, uh],
    }),
    uC = (0, o.zD)(d.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => m.intl.string(m.t.e3Zz3F),
        useSubtitle: () => m.intl.string(m.t.RztTjP),
        useValue: function () {
            return !g.uh.useSetting();
        },
        setValue: function (e) {
            (0, a3.A)("stream_previews_disabled", !e, g.uh.getSetting(), [eV.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                g.uh.updateSetting(!e);
        },
    }),
    uI = (0, o.zD)(d.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => m.intl.string(m.t.GmWk2E),
        useSearchTerms: () => [m.intl.string(m.t["Fj/xn1"])],
        useSubtitle: () => m.intl.string(m.t["Fj/xn1"]),
        useValue: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.getVideoHook());
        },
        setValue: aP.A.setVideoHook,
        usePredicate: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.supportsVideoHook());
        },
    }),
    ub = (0, o.zD)(d.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => m.intl.string(m.t["4I0qzZ"]),
        useValue: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.getExperimentalSoundshare());
        },
        setValue: aP.A.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, R.bG)([lv.Ay], () => {
                let e = lv.Ay.supportsExperimentalSoundshare(),
                    t = lv.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    uv = (0, o.zD)(d.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => m.intl.string(m.t["/jwMtn"]),
        useSubtitle: () => m.intl.string(m.t.zlA23F),
        useValue: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [eV.A.USER_SETTINGS_VOICE_AND_VIDEO];
            aP.A.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return lv.Ay.supports(ab.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    uj = (0, o.sN)(d.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => m.intl.string(m.t.fhEzfj),
        setValue: function (e) {
            let t = [eV.A.USER_SETTINGS_VOICE_AND_VIDEO];
            aP.A.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: lv.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            return lv.Ay.supports(ab.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    uy = (0, o.zD)(d.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
        useTitle: () => m.intl.string(m.t.lt8rRx),
        useSubtitle: () => m.intl.string(m.t.ie1mgY),
        useValue: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.getUseSystemScreensharePicker());
        },
        setValue: function (e) {
            (0, n9.cX)() && e
                ? (0, se.A)({
                      title: m.intl.string(m.t["9jf31O"]),
                      subtitle: m.intl.string(m.t.uBd6JW),
                      variant: "primary",
                      onConfirm: () => {
                          aP.A.setUseSystemScreensharePicker(e), s2.A.app.relaunch();
                      },
                      confirmText: m.intl.string(m.t.BddRzS),
                  })
                : aP.A.setUseSystemScreensharePicker(e);
        },
        usePredicate: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.supportsSystemScreensharePicker() && (0, n9.cX)());
        },
    }),
    uO = (0, o.bd)(d.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? m.intl.string(m.t.qrMyvm) : m.intl.string(m.t.LEtTNl)),
        useCollapsedSubtitle: () => oa(d.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [uv, uj, uy, ub, uI],
    }),
    uR = (0, o.zZ)(d.X.STREAMING_CATEGORY, { useTitle: () => m.intl.string(m.t.KDdjou), buildLayout: () => [uC, uO] }),
    uL = (0, o.E2)(d.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, f.jsx)(aN.U, {
                label: m.intl.string(m.t.UTM8VP),
                deviceType: ab.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !0,
            });
        },
    }),
    uD = (0, o.E2)(d.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, f.jsx)(aN.U, {
                label: m.intl.string(m.t.xuYQ0n),
                deviceType: ab.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !0,
            });
        },
    }),
    uP = (0, o.zC)(d.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [uL, uD] }),
    uG = (0, o.sN)(d.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => m.intl.string(m.t.Rtsr6w),
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = lv.Ay.getInputVolume();
            return (0, ur.M)(e);
        },
        asValueChanges: function (e) {
            let t = [eV.A.USER_SETTINGS_VOICE_AND_VIDEO],
                i = (0, ur.w)(e);
            aP.A.setInputVolume(i, { analyticsLocations: t });
        },
    }),
    uU = (0, o.sN)(d.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => m.intl.string(m.t.aUJ062),
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = lv.Ay.getOutputVolume();
            return (0, ur.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [eV.A.USER_SETTINGS_VOICE_AND_VIDEO],
                i = (0, ur.w)(e);
            aP.A.setOutputVolume(i, { analyticsLocations: t });
        },
    }),
    uM = (0, o.zC)(d.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [uG, uU] });
var uV = i(702841),
    uk = i(349288),
    uw = i(152567),
    uF = i(593290);
let uB = `${to.A.getArticleURL(Q.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    uz = (0, o.E2)(d.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [m.intl.string(m.t.nuFtHH)],
        usePredicate: function () {
            return (0, uV.bG)([lv.Ay], () => lv.Ay.supports(ab.O5.LOOPBACK));
        },
        Component: function () {
            return (0, uV.bG)([lv.Ay], () => lv.Ay.supports(ab.O5.LOOPBACK))
                ? (0, f.jsx)(uw.A, {
                      size: "md",
                      notchBackground: uw.V.GRAY,
                      captionVoice: m.intl.string(m.t.bp3JOV),
                      captionNoVoice: (0, f.jsxs)(f.Fragment, {
                          children: [
                              (0, f.jsx)(k.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-default",
                                  children: m.intl.string(m.t.bgn75v),
                              }),
                              m.intl.string(m.t["MA+OZh"]),
                              (0, f.jsx)(uk.Anchor, {
                                  className: uF.X,
                                  href: to.A.getArticleURL(Q.MVz.NO_INPUT_DETECTED),
                                  children: m.intl.string(m.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: m.intl.format(m.t["V+B3FH"], { guideURL: uB }),
                      buttonTest: m.intl.string(m.t.gyljWE),
                      buttonStop: m.intl.string(m.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: Q.liQ.USER_SETTINGS, section: Q.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    uY = ej.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function uX(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: i } = e;
    return (0, f.jsxs)(L.B, {
        children: [
            i && (0, f.jsx)(lR, { sourcePage: "voice" }),
            t && (0, f.jsx)(si.A, { look: si.k.WARNING, children: m.intl.string(m.t.Ioz3gx) }),
        ],
    });
}
let uH = (0, o.zZ)(d.X.VOICE_CATEGORY, {
        useTitle: () => m.intl.string(m.t.K3lovD),
        useSearchTerms: () => [
            m.intl.string(m.t.hHMYbb),
            m.intl.string(m.t.nuFtHH),
            m.intl.string(m.t.dl18zb),
            m.intl.string(m.t["3182VD"]),
            m.intl.string(m.t["DGq/PR"]),
            m.intl.string(m.t.eATD2B),
            m.intl.string(m.t.Rtsr6w),
            m.intl.string(m.t.aUJ062),
        ],
        useInlineNotice: function () {
            let e = lO("voice"),
                t = (0, a_.x5)(ab.oh.AUDIO_INPUT),
                i = (0, a_.x5)(ab.oh.AUDIO_OUTPUT),
                n = N.useMemo(() => {
                    let e = uY.some((e) => t?.hardwareId?.startsWith(e)),
                        n = uY.some((e) => i?.hardwareId?.startsWith(e));
                    return e && n && t?.containerId != null && t.containerId === i?.containerId;
                }, [t, i]);
            return N.useMemo(
                () =>
                    e.canPrompt || n
                        ? {
                              type: e_.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, f.jsx)(uX, {
                                      inputAndOutputAreBluetooth: n,
                                      canPromptSystemServiceInstallForVoice: e.canPrompt,
                                  }),
                          }
                        : null,
                [e.canPrompt, n],
            );
        },
        buildLayout: () => [uP, uM, uz],
    }),
    uK = (0, o.t_)(d.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => m.intl.string(m.t.B1fFpf),
        buildLayout: () => [uH, oH, aR, uR, u_, ud, a8],
    }),
    uW = (0, o.i4)(d.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t.B1fFpf),
        usePredicate: () => lv.Ay.isSupported(),
        icon: ag.c,
        useMenu: am.A,
        buildLayout: () => [uK],
    }),
    uZ = (0, o.zZ)(d.X.WINDOWS_CATEGORY, {
        buildLayout: () => [ra, r8, ro, rg],
        initialize: () => {
            rr();
        },
    }),
    uq = (0, o.t_)(d.X.WINDOWS_PANEL, { useTitle: () => m.intl.string(m.t.ZkDZov), buildLayout: () => [uZ] }),
    uQ = (0, o.i4)(d.X.WINDOWS_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t.ZkDZov),
        icon: e3.k,
        usePredicate: () => ej.isPlatformEmbedded && (0, ej.isWindows)(),
        buildLayout: () => [uq],
    }),
    uJ = (0, o.WI)(d.X.APP_SECTION, {
        useTitle: () => m.intl.string(m.t.gcyH1J),
        buildLayout: function () {
            let e = (0, u.SB)("AppSection_buildLayout");
            return [uW, lx, n1, r7, e ? ac : re, rs, e ? null : uQ, e ? null : rh].filter(t4.Vq);
        },
    });
var u$ = i(360669),
    u0 = i(974544),
    u1 = i(546605),
    u2 = i(423764),
    u3 = i(289873),
    u6 = i(465323),
    u4 = i(194261),
    u7 = i(391048),
    u5 = i(753390),
    u8 = i(99696),
    u9 = i(202613),
    de = i(615405),
    dt = i(580630),
    di = i(83617),
    dn = i(935208),
    ds = i(607399),
    dl = i(150934),
    dr = i(256006),
    da = i(198970),
    du = i(71532);
let dd = /[^0-9/]/g,
    dc = /[^0-9]/g;
class dg extends N.PureComponent {
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
                ((n = (i = e.replace(dd, "").split("/"))[0]),
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
            ? (u = u.replace(dc, ""))
            : u === r && e.includes("/") && !r.includes("/") && (u += "/"),
            u.length > e.length && (d += u.length - e.length),
            (this.selectionStart = d),
            null != a && a(u, t);
    };
    render() {
        return (0, f.jsx)(lD.k, {
            ...this.props,
            inputMode: "numeric",
            onChange: this.handleChange,
            inputRef: this.setRef,
        });
    }
}
var dm = i(832208),
    dA = i(536439);
let dh = [
        {
            fields: [
                {
                    expirationDate: {
                        name: "expirationDate",
                        id: (0, sS.Ld)(),
                        title: () => m.intl.string(m.t["CeBa/4"]),
                        autoComplete: "cc-exp",
                        placeholder: () => m.intl.string(m.t.xeEWQ6),
                        pattern: "\\d*",
                        getClassNameForLayout: () => dA.ep,
                        renderInput: (e) => (0, f.jsx)(dg, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    dE = function (e) {
        let { onCardInfoChange: t, className: i, expirationDate: n, error: s } = e,
            [l, r] = N.useState(!1),
            [a, o] = N.useState(null),
            [u, d] = N.useState(n);
        return (
            N.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, f.jsx)(dm.A, {
                className: i,
                form: dh,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: s,
                onFieldChange: (e) => {
                    l || "" === e || r(!0),
                        (l && "" === e) || !(0, du.So)(e) ? o(m.intl.string(m.t["9/zZdl"])) : o(null),
                        d(e);
                },
            })
        );
    };
var dx = i(219887),
    dT = i(276589);
let dS = "isDefault";
class dp extends N.PureComponent {
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
            expiresMonth: t instanceof u9.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof u9.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: i,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        n6.h.wait(() => {
            (0, u5.ey)(), (0, u5.tc)();
        });
    }
    handleSubmit = (e) => {
        if ((e.preventDefault(), e.stopPropagation(), 0 === Object.values(this.state.dirtyFields).filter(t4.Vq).length))
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
                ? (0, f.jsx)("div", {
                      className: dT.zc,
                      children: (0, f.jsx)(O.w, { type: "critical", children: t.message }),
                  })
                : null
            : (0, f.jsx)("div", {
                  className: dT.zc,
                  children: (0, f.jsx)(O.w, { type: "critical", children: e.message }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: i } = this.props,
            n = (0, dr.g)(i);
        return (0, f.jsxs)("div", {
            className: dT.yV,
            children: [
                (0, f.jsx)(k.E, {
                    className: dT.bV,
                    variant: "text-sm/normal",
                    children: m.intl.string(m.t["50Auo2"]),
                }),
                (0, f.jsx)(da.Ay, {
                    ...e,
                    mode: da.Ay.Modes.EDIT,
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
        return (0, f.jsxs)("div", {
            className: dT.yV,
            children: [
                (0, f.jsx)(k.E, { className: dT.bV, variant: "text-sm/normal", children: m.intl.string(m.t.Fo2YP7) }),
                (0, f.jsx)(dE, {
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
        return (0, f.jsx)("div", {
            className: dT.AU,
            children: (0, f.jsxs)(L.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, f.jsx)(aw.e, {
                        children: (0, f.jsxs)("div", {
                            className: dT.lH,
                            children: [
                                i
                                    ? (0, f.jsx)(e1.m, {
                                          text: m.intl.string(m.t["v6/z28"]),
                                          children: (0, f.jsx)("div", { "aria-hidden": !0, className: dT.dm }),
                                      })
                                    : null,
                                (0, f.jsx)(eE.$, {
                                    type: "button",
                                    disabled: i || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: ds.Fr ? "sm" : "md",
                                    text: ds.Fr ? m.intl.string(m.t.oyYWHE) : m.intl.string(m.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, f.jsxs)(aw.e, {
                        children: [
                            (0, f.jsx)(eE.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: ds.Fr ? "sm" : "md",
                                text: m.intl.string(m.t["ETE/oC"]),
                            }),
                            (0, f.jsx)(eE.$, {
                                loading: e,
                                disabled: !n || t || !s,
                                type: "submit",
                                variant: "active",
                                size: ds.Fr ? "sm" : "md",
                                text: m.intl.string(m.t["R3BPH+"]),
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
            r = e instanceof u9.SJ;
        return (0, f.jsx)(ea.Z, {
            editable: !0,
            className: eF()(dT.Nr, n),
            children: (0, f.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, f.jsxs)("div", {
                        className: dT.__invalid_paymentSection,
                        children: [
                            (0, f.jsx)(dx.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: s,
                                locale: i,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, f.jsx)("div", { className: dT.Um, children: m.intl.string(m.t["3R0U0b"]) })
                                : null,
                            (0, f.jsx)("div", {
                                className: dT.Sv,
                                children: r
                                    ? m.intl.format(m.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : m.intl.string(m.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, f.jsx)("div", {
                        className: dT.D5,
                        children: (0, f.jsx)(dl.S, {
                            value: dS,
                            checked: l,
                            onChange: (e) => this.handleFieldChange(e, dS),
                            label: m.intl.string(m.t.nag9Og),
                            labelType: "secondary",
                        }),
                    }),
                    (0, f.jsx)(ex.c, {}),
                    this.renderActions(),
                ],
            }),
        });
    }
}
let df = R.Ay.connectStores([de.A], () => ({ updateError: de.A.editSourceError, removeError: de.A.removeSourceError }))(
    dp,
);
var dN = i(776409),
    d_ = i(95322);
class dC extends N.PureComponent {
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
            ? (0, f.jsx)(df, {
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
            : (0, f.jsxs)(f.Fragment, {
                  children: [
                      n ? null : (0, f.jsx)(ex.c, { className: d_.__invalid_sourceDivider }),
                      (0, f.jsxs)("div", {
                          className: d_.Yb,
                          children: [
                              (0, f.jsx)(dx.A, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: s,
                                  locale: l,
                                  showSubtext: !0,
                                  showLabels: !0,
                                  showPaymentSourceIcon: !0,
                              }),
                              (0, f.jsx)(eE.$, {
                                  variant: "secondary",
                                  onClick: this.handleEditClick,
                                  size: "sm",
                                  text: m.intl.string(m.t.bt75uw),
                              }),
                          ],
                      }),
                  ],
              });
    }
}
let dI = N.memo(function (e) {
    let { paymentSource: t, hideDivider: i, isForSubscription: n, locale: s, onRedeemClick: l } = e,
        [r, a] = N.useState(null),
        o = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, R.bG)([de.A], () => de.A.ipCountryCode),
        d = N.useMemo(() => (0, u6.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        N.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : u5.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, f.jsxs)(f.Fragment, {
            children: [
                i ? null : (0, f.jsx)(ex.c, { className: d_.__invalid_sourceDivider }),
                (0, f.jsxs)("div", {
                    className: d_.Yb,
                    children: [
                        void 0 !== t
                            ? (0, f.jsx)(dx.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: n,
                                  locale: s,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, f.jsx)(k.E, {
                                  variant: "text-sm/medium",
                                  children: m.intl.string(dN.default["/FQWfA"]),
                              }),
                        (0, f.jsxs)("div", {
                            className: d_.zy,
                            children: [
                                (0, f.jsx)("div", {
                                    className: d_.Tq,
                                    children:
                                        null == r
                                            ? (0, f.jsx)(u3.y, { type: u3.y.Type.SPINNING_CIRCLE })
                                            : (0, f.jsx)(k.E, {
                                                  variant: "text-sm/medium",
                                                  children: (() => {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          i = t ?? d,
                                                          n = String(i).toUpperCase(),
                                                          s = (0, dt.$g)(e ?? 0, i, {
                                                              currencyDisplay: "narrowSymbol",
                                                          });
                                                      return `${n} ${s}`;
                                                  })(),
                                              }),
                                }),
                                (0, f.jsx)(eE.$, {
                                    variant: "secondary",
                                    onClick: l,
                                    size: "sm",
                                    text: m.intl.string(dN.default.iBFPMf),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class db extends N.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            await u5.Gr(e), this.setState({ editingPayment: e });
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            await u5.JQ(e), this.setState({ editingPayment: null });
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                await u5.Ps(e, t), this.setState({ editingPayment: null });
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, di.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, C.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 362111));
                return (t) => (0, f.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, u7.ET)();
                },
                onCloseRequest: Q.tEg,
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, f.jsxs)("div", {
            className: d_.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, f.jsxs)("div", {
                          className: d_.z8,
                          children: [
                              (0, f.jsx)(k.E, { variant: "text-sm/normal", children: m.intl.string(m.t.aRHpAB) }),
                              (0, f.jsx)(k.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: d_.Sv,
                                  children: m.intl.string(m.t.o9bOIl),
                              }),
                          ],
                      })
                    : null,
                (0, f.jsx)(eE.$, { onClick: this.handleAddPaymentMethod, text: m.intl.string(m.t.CpOiEO) }),
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
            u = eL()
                .values(n)
                .sort((e, t) => (e.id === i ? -1 : t.id === i ? 1 : dn.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof u9.LQ)),
            c = u.filter((e) => e instanceof u9.LQ),
            g = this.state.editingPayment,
            A = d.findIndex((e) => e.id === g),
            h = d.map((e, t) =>
                (0, f.jsx)(
                    dC,
                    {
                        locale: s,
                        paymentSource: e,
                        isDefault: i === e.id,
                        onCancel: this.handleCancel,
                        onDelete: this.handleDelete,
                        isForSubscription: e.id === a,
                        hideDivider: 0 === t || A === t - 1,
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
                          (0, f.jsx)(
                              dI,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || A === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: s,
                                  onRedeemClick: () =>
                                      (0, u8.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page" }),
                              },
                              e.id,
                          ),
                      )
                    : (0, f.jsx)(dI, {
                          hideDivider: 0 === d.length || A === d.length - 1,
                          isForSubscription: !1,
                          locale: s,
                          onRedeemClick: () =>
                              (0, u8.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page" }),
                      })),
            (0, f.jsxs)(f.Fragment, {
                children: [
                    t
                        ? (0, f.jsxs)(f.Fragment, {
                              children: [
                                  (0, f.jsxs)(eh.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, f.jsx)(u4.X, { size: "sm", className: d_.hz }),
                                          " ",
                                          m.intl.string(m.t.W26xGQ),
                                      ],
                                  }),
                                  (0, f.jsx)(k.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: m.intl.string(m.t.h6V3uK),
                                  }),
                              ],
                          })
                        : null,
                    h,
                    o && e,
                    A !== d.length - 1 || (o && c.length > 0) ? (0, f.jsx)(ex.c, {}) : null,
                    this.renderFooter(),
                ],
            })
        );
    }
}
var dv = i(459357),
    dj = i(295405),
    dy = i(166403),
    dO = i(773669),
    dR = i(589764);
function dL() {
    let e = (0, u1.vg)("PaymentMethodsHeader"),
        t = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()?.storeCountry);
    return e && t?.country != null ? { country: t.country, countryName: (0, u2.Gw)(t.country) } : null;
}
let dD = (0, o.E2)(d.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                i = (0, R.bG)([de.A], () => de.A.isSyncing),
                n = (0, R.bG)([dj.A], () => dj.A.paymentSources),
                s = (0, R.bG)([dj.A], () => dj.A.defaultPaymentSourceId),
                l = (0, R.bG)([dO.default], () => dO.default.locale),
                r = (0, R.bG)([dy.A], () => dy.A.getPremiumTypeSubscription()),
                a = (0, R.bG)([de.A], () => de.A.isRemovingPaymentSource),
                o = (0, R.bG)([de.A], () => de.A.isUpdatingPaymentSource),
                { enabled: u } = (0, dv.c)({ location: "UserSettingsBilling" });
            return (N.useEffect(() => {
                u5.$o(), u5.hP();
            }, []),
            i && 0 === Object.keys(n).length)
                ? (0, f.jsx)("div", { className: dR.o, children: (0, f.jsx)(u3.y, {}) })
                : (0, f.jsx)(db, {
                      showHeader: t,
                      paymentSources: n,
                      defaultPaymentSourceId: s,
                      premiumSubscriptionPaymentSourceId:
                          null != r && r.status !== Q.Dmq.CANCELED ? r.paymentSourceId : null,
                      locale: l,
                      removing: a,
                      submitting: o,
                      showGiftCards: u,
                  });
        },
        useSearchTerms: () => [m.intl.string(m.t.W26xGQ), m.intl.string(m.t["3pIjBH"])],
    }),
    dP = (0, o.zZ)(d.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => m.intl.string(m.t.W26xGQ),
        useSubtitle: () => {
            let e = dL();
            return null != e ? m.intl.format(m.t.e2t1G5, { country: e.countryName }) : m.intl.string(m.t.h6V3uK);
        },
        useSubtitleDecoration: function () {
            return null == dL()
                ? null
                : {
                      type: e_.p3.INFO_POPOVER,
                      ariaLabel: m.intl.string(m.t.PuB1W7),
                      popoverProps: {
                          title: "",
                          body: m.intl.string(m.t["21skUa"]),
                          size: "sm",
                          position: "top",
                          getActions: (e) => [
                              {
                                  text: m.intl.string(m.t.PuB1W7),
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
        buildLayout: () => [dD],
    });
var dG = i(549363),
    dU = i(545075);
let dM = (0, o.E2)(d.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            let e = (0, R.bG)([dO.default], () => dO.default.locale);
            return (0, f.jsxs)(f.Fragment, { children: [(0, f.jsx)(dU.kb, {}), (0, f.jsx)(dG.A, { locale: e })] });
        },
        useSearchTerms: () => [m.intl.string(m.t.obLrcK)],
    }),
    dV = (0, o.zZ)(d.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => m.intl.string(m.t.obLrcK),
        buildLayout: () => [dM],
    }),
    dk = (0, o.t_)(d.X.BILLING_PANEL, {
        useTitle: () => m.intl.string(m.t.oeUm2s),
        buildLayout: () => [dP, dV],
        useObscuredNotice: u0.L,
    }),
    dw = (0, o.i4)(d.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t.oeUm2s),
        icon: u$.B,
        buildLayout: () => [dk],
    });
var dF = i(597770),
    dB = i(35587),
    dz = i(86379),
    dY = i(532446),
    dX = i(869038),
    dH = i(499454),
    dK = i(45938);
class dW extends N.Component {
    state = { codeInput: "", submitting: !1, hasError: !1, isPromoCode: !1 };
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return { ...e, object: Q.ZSU.BUTTON_CTA };
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
                    await (0, u8.Qp)(i),
                        (0, u8.HF)({ initialCode: i, withRedemptionSuccessModal: !0 }),
                        this.setState({ codeInput: "" });
                    return;
                } catch {}
            let e = (0, dK.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let n = await dX.A.resolveGiftCode(e);
            if (null != n && null != n.giftCode.promotion)
                throw (this.setState({ isPromoCode: !0 }), Error("Cannnot redeem promotion code as gift"));
            X.default.track(Q.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: {
                    ...this.analyticsLocation,
                    section: Q.JJy.LIBRARY_INVENTORY_CODE_REDEMPTION,
                    object: Q.ZSU.BUTTON_CTA,
                },
            }),
                (0, dH.h)({ processedCode: e }),
                this.setState({ codeInput: "" });
        } catch (e) {
            this.setState({ hasError: !0 });
        } finally {
            this.setState({ submitting: !1 });
        }
    };
    render() {
        let { obscureInput: e } = this.props,
            { codeInput: t, submitting: i, hasError: n, isPromoCode: s } = this.state;
        return (0, f.jsx)(io.n, {
            label: m.intl.string(m.t["il+VCo"]),
            children: (0, f.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, f.jsxs)(dY.M, {
                    children: [
                        (0, f.jsx)(lD.k, {
                            label: m.intl.string(m.t.SeKIoS),
                            type: e ? "password" : "text",
                            value: t,
                            onChange: this.handleChange,
                            placeholder: "WUMP-AAAAA-BBBBB-CCCCC",
                            error: !s && n ? m.intl.string(m.t.Y11a2u) : null,
                            helperText: s
                                ? m.intl.format(m.t.gPt3PE, {
                                      promoLink: () => {
                                          window.open(`https://discord.com/billing/promotions/${t}`);
                                      },
                                  })
                                : null,
                            fullWidth: !0,
                        }),
                        (0, f.jsx)(eE.$, {
                            variant: "primary",
                            text: m.intl.string(m.t.KIpp7M),
                            type: "submit",
                            loading: i,
                        }),
                    ],
                }),
            }),
        });
    }
}
let dZ = (0, o.E2)(d.X.GIFT_CODE_REDEMPTION_SETTING, {
    Component: function () {
        let { enabled: e } = (0, dv.c)({ location: "UserSettingsBilling" }),
            t = N.useContext(X.AnalyticsContext),
            i = (0, R.bG)([eC.A], () => eC.A.enabled);
        return (0, f.jsx)(dW, { analyticsContext: t, obscureInput: i, acceptGiftCardRedemption: e });
    },
    usePredicate: () => !(0, dz.Hp)(),
    useSearchTerms: () => [m.intl.string(m.t["jcSP+g"]), m.intl.string(m.t["il+VCo"])],
});
var dq = i(725570),
    dQ = i(707554),
    dJ = i(339048),
    d$ = i(736653),
    d0 = i(46054);
let d1 = ry().duration(30, "days");
var d2 = i(264779),
    d3 = i(962644),
    d6 = i(416052),
    d4 = i(961302);
function d7(e) {
    let { onClose: t, transitionState: i } = e;
    return (0, f.jsx)(lL.Modal, {
        title: "",
        size: "md",
        input: (0, f.jsx)("div", { className: d4.aR }),
        onClose: async () => await t(),
        actions: [{ text: m.intl.string(m.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: i,
        children: (0, f.jsxs)("div", {
            className: d4.t4,
            children: [
                (0, f.jsx)(eh.D, { variant: "heading-xl/semibold", children: m.intl.string(m.t.iufib1) }),
                (0, f.jsx)(k.E, { variant: "text-md/normal", className: d4.G3, children: m.intl.string(m.t.eAn6z2) }),
            ],
        }),
    });
}
let d5 = function (e) {
    let { onClose: t, onClaim: i, code: n, outboundPromotion: s, transitionState: l } = e,
        [r, a] = N.useState(null),
        o = (0, sS.GV)(),
        { analyticsLocations: u } = (0, nU.Ay)(eV.A.USER_SETTINGS_GIFT_INVENTORY);
    return (N.useEffect(() => {
        null == n &&
            (0, d2.kd)({
                promotionId: s.id,
                promotionTitle: s.outboundTitle,
                partnerId: s.partnerId,
                analyticsLocations: u,
            })
                .then((e) => i(e))
                .catch((e) => a(e?.body?.code));
    }, [n, s.id, s.outboundTitle, s.partnerId, i, u]),
    null != r)
        ? (0, f.jsx)(d7, { onClose: t, transitionState: l })
        : null == n
          ? (0, f.jsx)(u3.y, { className: d4.Lq })
          : (0, f.jsx)(lL.Modal, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, f.jsxs)("div", {
                    className: d4.N1,
                    children: [
                        (0, f.jsx)("div", { className: d4.Qw }),
                        (0, f.jsx)(eh.D, { variant: "heading-xl/semibold", children: m.intl.string(m.t["23BfZh"]) }),
                        (0, f.jsx)(k.E, {
                            variant: "text-md/normal",
                            className: d4.G3,
                            children: s.outboundRedemptionModalBody,
                        }),
                    ],
                }),
                actions: [
                    { text: m.intl.string(m.t.TulDPl), variant: "secondary", onClick: async () => await t() },
                    {
                        text: m.intl.string(m.t["+zx47d"]),
                        variant: "primary",
                        onClick: () => {
                            let e = (0, d2.kc)(n, s);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: l,
                "aria-label": o,
                children: (0, f.jsxs)("div", {
                    children: [
                        (0, f.jsx)(ex.c, { className: d4.M5 }),
                        (0, f.jsx)(sy.D, {
                            label: m.intl.string(m.t.s9LFQh),
                            helperText: m.intl.string(m.t["F+nFTZ"]),
                            children: (0, f.jsx)(d6.A, {
                                value: n,
                                buttonColor: aV.$n.Colors.BRAND,
                                buttonLook: aV.$n.Looks.FILLED,
                                delay: 1e3,
                            }),
                        }),
                    ],
                }),
            });
};
var d8 = i(725807),
    d9 = i(212168),
    ce = i(469778),
    ct = i(109802),
    ci = i(503787);
let cn = (e) => {
        let { children: t, className: i, splashArtURL: n } = e;
        return (0, f.jsxs)(lM.A, {
            className: eF()(ci.wx, i),
            align: lM.A.Align.CENTER,
            children: [
                (0, f.jsx)("div", { className: ci.Bn, style: null != n ? { backgroundImage: `url(${n})` } : void 0 }),
                t,
            ],
        });
    },
    cs = (e) => {
        let { children: t, className: i } = e;
        return (0, f.jsx)("div", { className: eF()(ci.rf, i), children: t });
    };
class cl extends N.PureComponent {
    static Header = cn;
    static Body = cs;
    render() {
        let { children: e, className: t, onMouseEnter: i, onMouseLeave: n } = this.props;
        return (0, f.jsx)("div", { className: eF()(ci.Nr, t), onMouseEnter: i, onMouseLeave: n, children: e });
    }
}
var cr = i(75825),
    ca = i(871123),
    co = i(366523),
    cu = i(495544),
    cd = i(30793),
    cc = i(97352),
    cg = i(67480),
    cm = i(147925),
    cA = i(957565),
    ch = i(615396),
    cE = i(86629);
class cx extends N.PureComponent {
    _copyModeTimeout = new oC.Ep();
    state = { copyMode: ct.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case ct.q.SUCCESS:
                return m.intl.string(m.t.XVvPjU);
            case ct.q.ERROR:
                return m.intl.string(m.t.i4GM3L);
            default:
                return m.intl.string(m.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        dX.A.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: i } = this.props;
        (0, dK.AK)(t, i),
            (0, cA.C)(
                e,
                () => this.setState({ copyMode: ct.q.SUCCESS }),
                () => this.setState({ copyMode: ct.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: ct.q.DEFAULT });
            });
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: i } = this.state;
        return (0, f.jsxs)(lM.A, {
            direction: lM.A.Direction.VERTICAL,
            className: cE.Gj,
            children: [
                (0, f.jsx)(ct.e, {
                    className: cE.ph,
                    value: (0, dK.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: i,
                    supportsCopy: cA.p5,
                    hideMessage: e ? m.intl.string(m.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: aV.XD.BRAND,
                    buttonLook: aV.pR.FILLED,
                }),
                (0, f.jsxs)("div", {
                    className: cE.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, f.jsxs)(N.Fragment, {
                                  children: [
                                      m.intl.format(m.t.ltVZcJ, { hours: t.expiresAt.diff(ry()(), "h") }),
                                      " \u2014\xa0",
                                  ],
                              })
                            : null,
                        (0, f.jsx)(V.D, {
                            tag: "a",
                            onClick: () => this.handleRevoke(t.code),
                            children: m.intl.string(m.t.v6Yazx),
                        }),
                    ],
                }),
            ],
        });
    }
}
class cT extends N.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: i, giftStyle: n } = this.props;
        this.setState({ isCreating: !0 }),
            await dX.A.createGiftCode(t, i, n),
            this.setState({ isCreating: !1, isOpen: !0 });
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: i } = this.props,
            n = !this.state.isOpen;
        (null == i || null == this._loadedAt || i < this._loadedAt) && n && dX.A.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen });
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: i } = this.props;
        return (0, ca.bF)(e)
            ? (0, f.jsx)(co.e, { shape: "square", sku: e, containerClassName: cE.ez })
            : null != t
              ? (0, f.jsx)(cr.A, { giftStyle: t, className: cE.ez, shouldAnimate: this.state.isHovered })
              : (0, f.jsx)(e8.A, { game: i, size: e8.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: i } = this.props;
        return (0, ca.bF)(e)
            ? (0, f.jsxs)("div", {
                  className: eF()(cE.Oc, cE.ic),
                  children: [
                      (0, f.jsx)(e8.A, { game: i, size: e8.M.XSMALL, skuId: e.id, className: cE._u }),
                      m.intl.format(m.t["6plpZi"], { applicationName: i.name, copies: t.length }),
                  ],
              })
            : (0, f.jsx)("div", { className: cE.Oc, children: m.intl.format(m.t.zMcvcA, { copies: t.length }) });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: i, giftCodeBatchId: n } = this.props;
        return (
            (e =
                n === sf.FB
                    ? m.intl.string(m.t.odsU6W)
                    : n === sf.Bu && null != i
                      ? m.intl.formatToPlainString(i.interval === sf.WT.MONTH ? m.t.uZjpiJ : m.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: i.intervalCount,
                        })
                      : null == i
                        ? t.name
                        : m.intl.formatToPlainString(i.interval === sf.WT.MONTH ? m.t.rCJvqo : m.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: i.intervalCount,
                          })),
            (0, f.jsx)("div", { className: cE.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, f.jsxs)(lM.A, {
            justify: lM.A.Justify.BETWEEN,
            align: lM.A.Align.CENTER,
            className: cE.pe,
            children: [
                (0, f.jsx)(k.E, { variant: "text-md/normal", children: m.intl.string(m.t.lELyPj) }),
                (0, f.jsx)(eE.$, {
                    variant: "primary",
                    size: "sm",
                    text: m.intl.string(m.t.Q3Qguo),
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
        return (0, f.jsxs)(cl, {
            className: n,
            children: [
                (0, f.jsx)(V.D, {
                    onClick: this.handleToggleOpen,
                    className: cE.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, f.jsx)(cl.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, f.jsxs)("div", {
                            className: cE.MY,
                            children: [
                                (0, f.jsxs)(lM.A, {
                                    align: lM.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, f.jsxs)("div", {
                                            className: cE.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, f.jsx)(cm.A, {
                                    direction: a ? cm.A.Directions.UP : cm.A.Directions.DOWN,
                                    className: cE.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, f.jsx)(cl.Body, {
                          children: l
                              ? (0, f.jsx)(u3.y, { className: cE.u1 })
                              : (0, f.jsxs)(N.Fragment, {
                                    children: [
                                        i.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        i.map((e) => (0, f.jsx)(cx, { giftCode: e, sku: s, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let cS = R.Ay.connectStores([cg.A, eC.A, cd.A, eZ.A, cc.A, cu.default], (e) => {
    let { skuId: t, subscriptionPlanId: i, giftStyle: n } = e,
        s = cg.A.get(t);
    if (null == s) throw Error("SKU was unavailable while rendering gift.");
    let l = cd.A.getForGifterSKUAndPlan(cu.default.getId(), t, i)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === n);
    return {
        sku: s,
        hideCodes: eC.A.enabled,
        isFetching: cd.A.getUserGiftCodesFetchingForSKUAndPlan(t, i),
        loadedAt: cd.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, i),
        application: eZ.A.getApplication(s.applicationId),
        subscriptionPlan: null != i ? (0, ch.c9)(i) : null,
        giftCodes: l,
    };
})(cT);
var cp = i(928661);
function cf(e) {
    let t,
        { outboundPromotion: i, code: n, disabled: s } = e,
        [l, r] = N.useState(!1),
        [a, o] = N.useState(!1),
        u = () => r((e) => !e),
        d = (0, d$.Ay)(),
        c = (0, d2.WD)(i.id, d),
        g = null != n,
        A = N.useMemo(
            () =>
                (0, rO.i$)(
                    g
                        ? null != i.outboundRedemptionEndDate
                            ? ry()(i.outboundRedemptionEndDate)
                            : ry()(i.endDate).add(d1)
                        : ry()(i.endDate),
                    "LL",
                ),
            [i, g],
        );
    g && l
        ? (t = m.intl.format(m.t.pkxVx6, { endDate: A, onClickDetails: u }))
        : g && !l
          ? (t = m.intl.format(m.t["4sFeob"], { endDate: A, onClickDetails: u }))
          : !g && l
            ? (t = m.intl.format(m.t["RBnE+l"], { endDate: A, onClickDetails: u }))
            : g || l || (t = m.intl.format(m.t["57+7Qn"], { endDate: A, onClickDetails: u }));
    let h = g ? m.intl.string(m.t["2cHUti"]) : m.intl.string(m.t.O13yhz),
        E = N.useCallback(() => o(!1), []),
        { outboundTitle: x, outboundTermsAndConditions: T } = i;
    return (0, f.jsxs)(f.Fragment, {
        children: [
            (0, f.jsxs)("div", {
                className: eF()(cp.uI, cp.AX),
                children: [
                    (0, f.jsxs)("div", {
                        className: cp.gE,
                        children: [
                            (0, f.jsxs)("div", {
                                className: cp.At,
                                children: [
                                    (0, f.jsx)("div", {
                                        className: cp.$G,
                                        children: (0, f.jsx)("img", { alt: "", src: c, className: cp.IJ }),
                                    }),
                                    (0, f.jsxs)("div", {
                                        children: [
                                            (0, f.jsx)(eh.D, { variant: "heading-md/semibold", children: x }),
                                            (0, f.jsx)(k.E, {
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                className: cp.__invalid_promotionText,
                                                children: t,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            !s && (0, f.jsx)(eE.$, { text: h, onClick: () => o(!0), disabled: s, size: "sm" }),
                        ],
                    }),
                    l &&
                        (0, f.jsx)(k.E, {
                            className: cp.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: d0.A.parse(T, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            a &&
                (0, f.jsx)(dq.aF, {
                    renderModal: (e) =>
                        (0, f.jsx)(d5, {
                            ...e,
                            onClose: E,
                            onClaim: d3.Ay.addClaimedOutboundPromotionCode,
                            code: n,
                            outboundPromotion: i,
                        }),
                    onCloseRequest: E,
                }),
        ],
    });
}
let cN = (0, o.E2)(d.X.GIFT_INVENTORY_LIST_SETTING, {
        Component: function () {
            let e = (0, R.yK)([ce.A], () => ce.A.getGiftable()),
                [t, i] = eL().partition(e, (e) => {
                    let { giftCodeBatchId: t } = e;
                    return null == t;
                }),
                n = (0, R.bG)([t6.default], () =>
                    o2.Ay.isPremiumExactly(t6.default.getCurrentUser(), sf.PremiumTypes.TIER_2),
                ),
                s = (0, R.bG)([t6.default], () => !o2.Ay.isPremium(t6.default.getCurrentUser())),
                l = eL().groupBy(t, (e) => (0, dK.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
                [r, a] = N.useState(!1);
            N.useEffect(() => {
                n6.h.wait(() => {
                    (0, dJ.XJ)().then(() => a(!0));
                });
            }, []);
            let {
                    promotionsLoaded: o,
                    activeOutboundPromotions: u,
                    claimedEndedOutboundPromotions: c,
                    claimedOutboundPromotionCodeMap: g,
                } = (0, dB.y7)(),
                A = u.length + c.length > 0,
                h = s && A;
            return r && o
                ? (0, f.jsxs)(f.Fragment, {
                      children: [
                          (function () {
                              let e = i.find((e) => e.giftCodeBatchId === sf.FB && !e.consumed),
                                  t = i.filter((e) => e.giftCodeBatchId === sf.Bu && !e.consumed) ?? [],
                                  [s, l] = eL().partition(t, (e) => {
                                      let { subscriptionPlanId: t } = e;
                                      return t === sf.gD.PREMIUM_YEAR_TIER_2;
                                  }),
                                  r = (0, f.jsx)(eh.D, {
                                      variant: "heading-md/semibold",
                                      children: A ? m.intl.string(m.t.wFsj3B) : void 0,
                                  }),
                                  a = h
                                      ? (0, f.jsxs)("div", {
                                            className: cp.uo,
                                            children: [
                                                (0, f.jsx)(oK.t, {
                                                    size: "md",
                                                    color: F.A.colors
                                                        .REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                                                    className: cp.PC,
                                                }),
                                                (0, f.jsx)(k.E, {
                                                    variant: "text-md/normal",
                                                    className: cp.Qw,
                                                    children: m.intl.format(m.t.G4fwxK, {
                                                        onClick: () => {
                                                            (0, sE.default)(), (0, sO.pX)(Q.BVt.APPLICATION_STORE);
                                                        },
                                                    }),
                                                }),
                                                (0, f.jsx)(d8.A, {
                                                    showGradient: !0,
                                                    className: cp.aA,
                                                    subscriptionTier: sf.pe.TIER_2,
                                                    textOptions: { textOverride: m.intl.string(m.t.mr4K7D) },
                                                }),
                                            ],
                                        })
                                      : null;
                              return (0, f.jsxs)("div", {
                                  children: [
                                      r,
                                      A ? (0, f.jsx)(ex.c, { className: cp.yF }) : null,
                                      (0, f.jsx)(d9.A, {
                                          className: cp.Yj,
                                          isShown: h,
                                          type: d9.i.PREMIUM,
                                          hasBackground: !0,
                                          children: (0, f.jsxs)("div", {
                                              className: eF()({ [cp.sW]: !h }),
                                              children: [
                                                  a,
                                                  c.map((e) => {
                                                      let { code: t, promotion: i } = e;
                                                      return (0, f.jsx)(
                                                          cf,
                                                          { outboundPromotion: i, code: t, disabled: !n },
                                                          i.id,
                                                      );
                                                  }),
                                                  u.map((e) =>
                                                      (0, f.jsx)(
                                                          cf,
                                                          { outboundPromotion: e, code: g[e.id], disabled: !n },
                                                          e.id,
                                                      ),
                                                  ),
                                                  null != e
                                                      ? (0, f.jsx)(
                                                            cS,
                                                            {
                                                                className: cp.uI,
                                                                skuId: e.skuId,
                                                                subscriptionPlanId: e.subscriptionPlanId,
                                                                entitlements: [e],
                                                                giftCodeBatchId: sf.FB,
                                                            },
                                                            (0, dK.Kx)(e.skuId, e.subscriptionPlanId),
                                                        )
                                                      : null,
                                                  s.length > 0
                                                      ? (0, f.jsx)(
                                                            cS,
                                                            {
                                                                className: cp.uI,
                                                                skuId: s[0].skuId,
                                                                subscriptionPlanId: s[0].subscriptionPlanId,
                                                                entitlements: s,
                                                                giftCodeBatchId: sf.Bu,
                                                            },
                                                            (0, dK.Kx)(s[0].skuId, s[0].subscriptionPlanId),
                                                        )
                                                      : null,
                                                  l.length > 0
                                                      ? (0, f.jsx)(
                                                            cS,
                                                            {
                                                                className: cp.uI,
                                                                skuId: l[0].skuId,
                                                                subscriptionPlanId: l[0].subscriptionPlanId,
                                                                entitlements: l,
                                                                giftCodeBatchId: sf.Bu,
                                                            },
                                                            (0, dK.Kx)(l[0].skuId, l[0].subscriptionPlanId),
                                                        )
                                                      : null,
                                              ],
                                          }),
                                      }),
                                  ],
                              });
                          })(),
                          (0, f.jsx)("div", {
                              className: cp.sW,
                              children: (0, f.jsxs)(dQ.F, {
                                  component: (0, f.jsx)(eh.D, {
                                      variant: "heading-md/semibold",
                                      children: m.intl.string(m.t["9KeUbY"]),
                                  }),
                                  children: [
                                      (0, f.jsx)(ex.c, { className: cp.yF }),
                                      0 === Object.keys(l).length
                                          ? (0, f.jsxs)("div", {
                                                className: cp.p$,
                                                children: [
                                                    (0, f.jsx)("div", { className: cp.QT }),
                                                    (0, f.jsx)(dQ.H, {
                                                        className: cp.ks,
                                                        children: m.intl.string(m.t.B1qgZn),
                                                    }),
                                                    (0, f.jsx)("p", {
                                                        className: cp.WO,
                                                        children: m.intl.format(m.t.HezvJ8, {
                                                            onClick: function () {
                                                                (0, ey.openUserSettings)(d.X.NITRO_PANEL);
                                                            },
                                                        }),
                                                    }),
                                                ],
                                            })
                                          : eL()
                                                .keys(l)
                                                .map((e) => {
                                                    let {
                                                        skuId: t,
                                                        subscriptionPlanId: i,
                                                        giftStyle: n,
                                                    } = (0, dK.X6)(e);
                                                    return (0, f.jsx)(
                                                        cS,
                                                        {
                                                            className: cp.uI,
                                                            skuId: t,
                                                            subscriptionPlanId: i,
                                                            entitlements: l[e],
                                                            giftStyle: n,
                                                        },
                                                        e,
                                                    );
                                                }),
                                  ],
                              }),
                          }),
                      ],
                  })
                : (0, f.jsx)(u3.y, { className: cp.Lq });
        },
        usePredicate: () => !(0, dz.Hp)(),
        useSearchTerms: () => [m.intl.string(m.t["jcSP+g"]), m.intl.string(m.t["9KeUbY"])],
    }),
    c_ = (0, o.E2)(d.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: dU.uK,
        usePredicate: () => (0, dz.Hp)(),
        useSearchTerms: () => [m.intl.string(m.t.vwMEHS)],
    }),
    cC = (0, o.zZ)(d.X.GIFT_INVENTORY_CATEGORY, { buildLayout: () => [dZ, cN, c_] }),
    cI = (0, o.t_)(d.X.GIFT_PANEL, { useTitle: () => m.intl.string(m.t["jcSP+g"]), buildLayout: () => [cC] }),
    cb = (0, o.i4)(d.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t["jcSP+g"]),
        icon: dF.o,
        usePersistentBadge: function () {
            return N.useMemo(() => ({ badgeType: e_.Xi.COUNT, useCount: () => (0, dB.IO)().length }), []);
        },
        buildLayout: () => [cI],
    });
var cv = i(659758),
    cj = i(102581),
    cy = i(815846);
let cO = (0, o.E2)(d.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, R.bG)([t6.default], () => t6.default.getCurrentUser());
            return (0, o2.YE)(e, sf.PremiumTypes.TIER_2) ? (0, f.jsx)(cy.A, {}) : (0, f.jsx)(cj.A, {});
        },
        useSearchTerms: () => [m.intl.string(m.t.Ipxkog)],
    }),
    cR = (0, o.zZ)(d.X.NITRO_CATEGORY, { buildLayout: () => [cO] }),
    cL = (0, o.t_)(d.X.NITRO_PANEL, {
        useTitle: () => m.intl.string(m.t.Ipxkog),
        useObscuredNotice: u0.L,
        buildLayout: () => [cR],
    }),
    cD = (0, o.i4)(d.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t.Ipxkog),
        icon: oK.t,
        usePersistentBadge: function (e) {
            return N.useMemo(
                () => ({ badgeType: e_.Xi.STRONGLY_DISCOURAGED_CUSTOM, useCustomBadge: () => (0, cv.e)(e) }),
                [e],
            );
        },
        buildLayout: () => [cL],
    });
var cP = i(104510),
    cG = i(820739),
    cU = i(73825),
    cM = i(160946);
let cV = (0, i(240921).Ay)({
    name: "2026-03-boosting-settings-refresh",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var ck = i(859241),
    cw = i(531260),
    cF = i(369163),
    cB = i(957485),
    cz = i(926268),
    cY = i(106529),
    cX = i(93364);
function cH(e) {
    let { className: t, icon: i, children: n } = e;
    return (0, f.jsxs)("li", {
        className: eF()(cY.Nr, t),
        children: [
            (0, f.jsx)(i, { className: cY.Kk }),
            (0, f.jsx)(k.E, { className: cY.__invalid_description, variant: "text-sm/medium", children: n }),
        ],
    });
}
let cK = function (e) {
    let { cardClassName: t } = e;
    return (0, f.jsxs)("div", {
        className: cY.iE,
        children: [
            (0, f.jsxs)("div", {
                className: cY.Qs,
                children: [
                    (0, f.jsx)(eh.D, {
                        className: cY.R_,
                        color: "always-white",
                        variant: "heading-xxl/bold",
                        children: m.intl.string(m.t.IzKs3o),
                    }),
                    (0, f.jsxs)("ul", {
                        className: cY.kR,
                        children: [
                            (0, f.jsx)(cH, { className: t, icon: cF.v, children: m.intl.string(m.t.TZigSO) }),
                            (0, f.jsx)(cH, {
                                className: t,
                                icon: (e) =>
                                    (0, f.jsx)("img", { className: eF()(e.className, cY.Dp), src: cX, alt: "" }),
                                children: m.intl.string(m.t.hjQuV2),
                            }),
                            (0, f.jsx)(cH, { className: t, icon: cB.i, children: m.intl.string(m.t["2RUcaM"]) }),
                            (0, f.jsx)(cH, { className: t, icon: cz.C, children: m.intl.string(m.t.bJoZKV) }),
                        ],
                    }),
                ],
            }),
            (0, f.jsx)("div", { className: cY.JP }),
        ],
    });
};
var cW = i(834040),
    cZ = i(811227);
let cq = [
        { getQuestion: () => m.intl.string(m.t.C4J8UB), getAnswer: () => m.intl.string(m.t.nhkk6k) },
        {
            getQuestion: () => m.intl.string(m.t.ai4ym2),
            getAnswer: () =>
                m.intl.format(m.t["8zlqlD"], { helpCenterUrl: to.A.getArticleURL(Q.MVz.GUILD_BOOSTING_FAQ) }),
        },
        { getQuestion: () => m.intl.string(m.t.kMVGsC), getAnswer: () => m.intl.string(m.t["Vz/SCQ"]) },
        { getQuestion: () => m.intl.string(m.t.kYmXWF), getAnswer: () => m.intl.string(m.t["+OURPp"]) },
        { getQuestion: () => m.intl.string(m.t["LsX/vb"]), getAnswer: () => m.intl.string(m.t["3TeauK"]) },
        { getQuestion: () => m.intl.string(m.t.fRlnXU), getAnswer: () => m.intl.string(m.t.bTRacj) },
        { getQuestion: () => m.intl.string(m.t["8Mu5Q9"]), getAnswer: () => m.intl.string(m.t["2T5iPo"]) },
        { getQuestion: () => m.intl.string(m.t["6EN+TZ"]), getAnswer: () => m.intl.string(m.t.NZax1u) },
        { getQuestion: () => m.intl.string(m.t.f5B4EW), getAnswer: () => m.intl.string(m.t.Aje8Pb) },
    ],
    cQ = function (e) {
        let { className: t } = e,
            [i, n] = N.useState(null);
        return (0, f.jsxs)("div", {
            className: eF()(cZ.iE, t),
            children: [
                (0, f.jsx)(eh.D, {
                    className: cZ.R_,
                    variant: "heading-xxl/bold",
                    children: m.intl.string(m.t.HPJ6Nj),
                }),
                (0, f.jsx)("ul", {
                    className: cZ.p_,
                    children: cq.map((e, t) => {
                        let s = i === t;
                        return (0, f.jsxs)(
                            "div",
                            {
                                className: cZ.Aw,
                                children: [
                                    (0, f.jsxs)(V.D, {
                                        className: eF()(cZ.k7, { [cZ.lo]: s }),
                                        onClick: () => n((e) => (e === t ? null : t)),
                                        tag: "li",
                                        children: [
                                            (0, f.jsx)(k.E, {
                                                className: cZ.b1,
                                                variant: "text-lg/normal",
                                                children: e.getQuestion(),
                                            }),
                                            s
                                                ? (0, f.jsx)(cW.Q, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: cZ.q4,
                                                  })
                                                : (0, f.jsx)(r5.j, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: cZ.q4,
                                                  }),
                                        ],
                                    }),
                                    s &&
                                        (0, f.jsx)(k.E, {
                                            className: cZ.ZF,
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
var cJ = i(462887),
    c$ = i(933832),
    c0 = i(789645),
    c1 = i(116891),
    c2 = i(416676);
let c3 = [
    {
        getPerkHeading: () => m.intl.string(m.t.tIiwuj),
        getPerkPreviewLightTheme: () => i(604203),
        getPerkPreviewDarkTheme: () => i(878515),
        getTier0Value: () => sf.TG[Q.TVA.NONE].limits.emoji,
        getTier1Value: () => sf.TG[Q.TVA.TIER_1].limits.emoji,
        getTier2Value: () => sf.TG[Q.TVA.TIER_2].limits.emoji,
        getTier3Value: () => sf.TG[Q.TVA.TIER_3].limits.emoji,
    },
    {
        getPerkHeading: () => m.intl.string(m.t["3iccet"]),
        getPerkPreviewLightTheme: () => i(105732),
        getPerkPreviewDarkTheme: () => i(857020),
        getTier0Value: () => sf.TG[Q.TVA.NONE].limits.stickers,
        getTier1Value: () => sf.TG[Q.TVA.TIER_1].limits.stickers,
        getTier2Value: () => sf.TG[Q.TVA.TIER_2].limits.stickers,
        getTier3Value: () => sf.TG[Q.TVA.TIER_3].limits.stickers,
    },
    {
        getPerkHeading: () => m.intl.string(m.t["+smCv9"]),
        getPerkPreviewLightTheme: () => i(597890),
        getPerkPreviewDarkTheme: () => i(297642),
        getTier0Value: () => sf.TG[Q.TVA.NONE].limits.soundboardSounds,
        getTier1Value: () => sf.TG[Q.TVA.TIER_1].limits.soundboardSounds,
        getTier2Value: () => sf.TG[Q.TVA.TIER_2].limits.soundboardSounds,
        getTier3Value: () => sf.TG[Q.TVA.TIER_3].limits.soundboardSounds,
    },
    {
        getPerkHeading: () => m.intl.string(m.t.SMYauD),
        getPerkPreviewLightTheme: () => i(323091),
        getPerkPreviewDarkTheme: () => i(261835),
        getTier0Value: () =>
            m.intl.formatToPlainString(m.t.zZ6Rdi, {
                resolution: sf.TG[Q.TVA.NONE].limits.screenShareQualityResolution,
                framerate: sf.TG[Q.TVA.NONE].limits.screenShareQualityFramerate,
            }),
        getTier1Value: () =>
            m.intl.formatToPlainString(m.t.zZ6Rdi, {
                resolution: sf.TG[Q.TVA.TIER_1].limits.screenShareQualityResolution,
                framerate: sf.TG[Q.TVA.TIER_1].limits.screenShareQualityFramerate,
            }),
        getTier2Value: () =>
            m.intl.formatToPlainString(m.t.zZ6Rdi, {
                resolution: (0, c1.eT)("GuildBoostingMarketingTierComparisonTable"),
                framerate: sf.TG[Q.TVA.TIER_2].limits.screenShareQualityFramerate,
            }),
        getTier3Value: () =>
            m.intl.formatToPlainString(m.t.zZ6Rdi, {
                resolution: (0, c1.eT)("GuildBoostingMarketingTierComparisonTable"),
                framerate: sf.TG[Q.TVA.TIER_3].limits.screenShareQualityFramerate,
            }),
    },
    {
        getPerkHeading: () => m.intl.string(m.t["/79IDj"]),
        getPerkPreviewLightTheme: () => i(913997),
        getPerkPreviewDarkTheme: () => i(95781),
        getTier0Value: () =>
            m.intl.formatToPlainString(m.t.w1gmLt, { bitrate: sf.TG[Q.TVA.NONE].limits.bitrate / 1e3 }),
        getTier1Value: () =>
            m.intl.formatToPlainString(m.t.w1gmLt, { bitrate: sf.TG[Q.TVA.TIER_1].limits.bitrate / 1e3 }),
        getTier2Value: () =>
            m.intl.formatToPlainString(m.t.w1gmLt, { bitrate: sf.TG[Q.TVA.TIER_2].limits.bitrate / 1e3 }),
        getTier3Value: () =>
            m.intl.formatToPlainString(m.t.w1gmLt, { bitrate: sf.TG[Q.TVA.TIER_3].limits.bitrate / 1e3 }),
    },
    {
        getPerkHeading: () => m.intl.string(m.t.R1U2xC),
        getPerkPreviewLightTheme: () => i(389833),
        getPerkPreviewDarkTheme: () => i(754561),
        getTier0Value: () =>
            m.intl.formatToPlainString(m.t.pIn7Af, { size: sf.TG[Q.TVA.NONE].limits.fileSize / 1048576 }),
        getTier1Value: () =>
            m.intl.formatToPlainString(m.t.pIn7Af, { size: sf.TG[Q.TVA.TIER_1].limits.fileSize / 1048576 }),
        getTier2Value: () =>
            m.intl.formatToPlainString(m.t.pIn7Af, { size: sf.TG[Q.TVA.TIER_2].limits.fileSize / 1048576 }),
        getTier3Value: () =>
            m.intl.formatToPlainString(m.t.pIn7Af, { size: sf.TG[Q.TVA.TIER_3].limits.fileSize / 1048576 }),
    },
    {
        getPerkHeading: () => m.intl.string(m.t.f6vfso),
        getPerkPreviewLightTheme: () => i(735669),
        getPerkPreviewDarkTheme: () => i(283517),
        getTier0Value: () => sf.TG[Q.TVA.NONE].limits.stageVideoUsers,
        getTier1Value: () => sf.TG[Q.TVA.TIER_1].limits.stageVideoUsers,
        getTier2Value: () => sf.TG[Q.TVA.TIER_2].limits.stageVideoUsers,
        getTier3Value: () => sf.TG[Q.TVA.TIER_3].limits.stageVideoUsers,
    },
    {
        getPerkHeading: () => m.intl.string(m.t.qDqUME),
        getPerkPreviewLightTheme: () => i(970770),
        getPerkPreviewDarkTheme: () => i(416378),
        getTier0Value: () => !1,
        getTier1Value: () => !0,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkHeading: () => m.intl.string(m.t.uwqgbu),
        getPerkPreviewLightTheme: () => i(243580),
        getPerkPreviewDarkTheme: () => i(975940),
        getTier0Value: () => !1,
        getTier1Value: () => !0,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkHeading: () => m.intl.string(m.t.zxsDxc),
        getPerkPreviewLightTheme: () => i(435748),
        getPerkPreviewDarkTheme: () => i(978380),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => m.intl.string(m.t["2TNS3n"]),
        getTier3Value: () => m.intl.string(m.t["l+S46U"]),
    },
    {
        getPerkHeading: () => m.intl.string(m.t["bHa+Ee"]),
        getPerkPreviewLightTheme: () => i(329312),
        getPerkPreviewDarkTheme: () => i(800120),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkHeading: () => m.intl.string(m.t.QV6MZQ),
        getPerkPreviewLightTheme: () => i(463384),
        getPerkPreviewDarkTheme: () => i(481344),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => !1,
        getTier3Value: () => !0,
    },
];
function c6(e) {
    let { children: t, className: i, tier: n } = e,
        s = n === Q.TVA.NONE ? "text-muted" : "text-strong",
        l = n === Q.TVA.NONE || null == n ? "heading-xl/normal" : "heading-xl/bold";
    return (0, f.jsxs)("th", {
        className: eF()(c2.PG, i),
        scope: "col",
        children: [
            (0, f.jsx)(eh.D, { color: s, variant: l, children: t }),
            null != n &&
                (0, f.jsx)(k.E, {
                    color: s,
                    variant: "text-md/normal",
                    children: m.intl.format(m.t["pob/cL"], { subscriptions: Q.M2T[n] }),
                }),
        ],
    });
}
function c4(e) {
    let t,
        { className: i, textVariant: n = "text-md/bold", value: s } = e;
    if ("boolean" == typeof s) {
        let e = eF()(c2.Jk, { [c2.I$]: s });
        t = s
            ? (0, f.jsx)(c$.A, { size: "md", color: "currentColor", className: e })
            : (0, f.jsx)(c0.P, { size: "md", color: "currentColor", className: e });
    } else t = (0, f.jsx)(k.E, { color: "interactive-text-active", variant: n, children: s });
    return (0, f.jsx)("td", { className: eF()(c2.xR, i), children: t });
}
function c7(e) {
    let { currentTier: t } = e,
        i = (function (e) {
            switch (e) {
                case Q.TVA.NONE:
                case Q.TVA.TIER_1:
                    return Q.TVA.TIER_2;
                case Q.TVA.TIER_2:
                case Q.TVA.TIER_3:
                    return Q.TVA.TIER_3;
                default:
                    return null;
            }
        })(t);
    return null == i
        ? null
        : (0, f.jsx)("div", {
              className: eF()(c2.ER, { [c2.GH]: i === Q.TVA.TIER_2, [c2.z5]: i === Q.TVA.TIER_3 }),
              children: (0, f.jsx)(k.E, {
                  className: c2.uQ,
                  color: "always-white",
                  variant: "text-xs/bold",
                  children: t === Q.TVA.TIER_3 ? m.intl.string(m.t.d849Up) : m.intl.string(m.t.dZeX1z),
              }),
          });
}
function c5(e) {
    let { isFocused: t, handleFocus: i, handleRowBlur: n, theme: s, row: l, hideTier0: r } = e,
        a = N.useRef(null);
    return (0, f.jsxs)("tr", {
        className: c2.__invalid_tableRow,
        children: [
            (0, f.jsx)("th", {
                className: eF()(c2.xR, c2.uB),
                scope: "row",
                children: (0, f.jsx)(V.D, {
                    className: eF()(c2.VC, c2.xR, c2.Rk),
                    onFocus: i,
                    onBlur: n,
                    onMouseEnter: i,
                    onMouseLeave: n,
                    children: (0, f.jsx)(G.Y, {
                        targetElementRef: a,
                        align: "center",
                        disablePointerEvents: !0,
                        nudgeAlignIntoViewport: !0,
                        position: "bottom",
                        renderPopout: () =>
                            (0, f.jsx)("img", {
                                className: c2.Mz,
                                src: (0, cJ.M)(s) ? l.getPerkPreviewDarkTheme() : l.getPerkPreviewLightTheme(),
                                alt: "",
                            }),
                        shouldShow: t,
                        spacing: 16,
                        children: () =>
                            (0, f.jsx)(k.E, { variant: "text-md/normal", ref: a, children: l.getPerkHeading() }),
                    }),
                }),
            }),
            !r && (0, f.jsx)(c4, { textVariant: "text-md/normal", value: l.getTier0Value() }),
            (0, f.jsx)(c4, { value: l.getTier1Value() }),
            (0, f.jsx)(c4, { value: l.getTier2Value() }),
            (0, f.jsx)(c4, { value: l.getTier3Value() }),
        ],
    });
}
let c8 = function (e) {
    let t = (0, d$.Ay)(),
        [i, n] = N.useState(null),
        { className: s, guild: l, hideHeading: r, hideTier0: a } = e;
    function o() {
        n(null);
    }
    return (0, f.jsxs)("div", {
        className: s,
        children: [
            !r &&
                (0, f.jsx)(eh.D, {
                    className: c2.R_,
                    variant: "heading-xxl/extrabold",
                    children: m.intl.string(m.t["9GGb9k"]),
                }),
            (0, f.jsxs)("div", {
                className: c2.wY,
                children: [
                    null != l && (0, f.jsx)(c7, { currentTier: l.premiumTier }),
                    (0, f.jsxs)("table", {
                        className: c2.tp,
                        cellPadding: 0,
                        cellSpacing: 0,
                        children: [
                            (0, f.jsx)("thead", {
                                children: (0, f.jsxs)("tr", {
                                    className: c2.__invalid_tableRow,
                                    children: [
                                        (0, f.jsx)(c6, { className: c2.VC, children: m.intl.string(m.t.F5MY0k) }),
                                        !a && (0, f.jsx)(c6, { tier: Q.TVA.NONE, children: m.intl.string(m.t.mx8j2m) }),
                                        (0, f.jsx)(c6, { tier: Q.TVA.TIER_1, children: m.intl.string(m.t.nzXtaS) }),
                                        (0, f.jsx)(c6, { tier: Q.TVA.TIER_2, children: m.intl.string(m.t["h33/uW"]) }),
                                        (0, f.jsx)(c6, { tier: Q.TVA.TIER_3, children: m.intl.string(m.t.BfF6ED) }),
                                    ],
                                }),
                            }),
                            (0, f.jsx)("tbody", {
                                className: c2.__invalid_tableBody,
                                children: c3.map((e, s) => {
                                    let l = i === s;
                                    return void 0 === e.predicate
                                        ? (0, f.jsx)(
                                              c5,
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
var c9 = i(338548),
    ge = i(776096),
    gt = i(178368),
    gi = i(873174),
    gn = i(866323),
    gs = i(530005),
    gl = i(443865),
    gr = i(473145);
function ga(e) {
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
                label: null != t.premiumGuildSubscription ? m.intl.string(m.t["PR0n//"]) : m.intl.string(m.t["+fmEYG"]),
                subtext: t.isOnCooldown() ? m.intl.string(m.t.XnB8M0) : null,
                disabled: t.isOnCooldown(),
            },
            cancel: { label: m.intl.string(m.t.twFU3R), subtext: s ? null : m.intl.string(m.t.oQ9lOh), disabled: !s },
            uncancel: { label: m.intl.string(m.t["2glQNp"]), subtext: null, disabled: !1 },
        };
    switch (l.status) {
        case Q.Dmq.PAST_DUE:
            (o.cancel.disabled = !0), (o.cancel.subtext = m.intl.string(m.t.WnL6DV)), (o.uncancel.disabled = !0);
            break;
        case Q.Dmq.PAUSE_PENDING:
        case Q.Dmq.PAUSED:
            a === sf.xc.NONE &&
                ((o.transfer.disabled = !0),
                (o.transfer.subtext = m.intl.string(m.t.LiLRRT)),
                (o.cancel.subtext = m.intl.string(m.t["1ywaWL"])),
                (o.cancel.disabled = !0),
                (o.uncancel.disabled = !0));
    }
    let u = N.useMemo(
        () =>
            l.isPausedOrPausePending && a === sf.xc.NONE
                ? (0, f.jsx)(M.Dr, {
                      id: "manage-subscription",
                      label: m.intl.string(m.t.obRG6Y),
                      action: () => (0, ey.openUserSettings)(d.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: gl.x,
                      leadingAccessory: { type: "icon", icon: gl.x },
                  })
                : null,
        [a, l],
    );
    return (0, f.jsxs)(U.W, {
        "data-menu-migrated-auto": !0,
        onSelect: r,
        navId: "subscription-context",
        variant: "fixed",
        "aria-label": m.intl.string(m.t.ogxXGq),
        onClose: n,
        children: [
            (0, f.jsx)(M.Dr, {
                id: "apply",
                label: o.transfer.label,
                subtext: o.transfer.subtext,
                action: function () {
                    (0, C.openModalLazy)(async () => {
                        let { default: e } = await Promise.resolve().then(i.bind(i, 724624));
                        return (i) =>
                            (0, f.jsx)(e, { ...i, guildBoostSlots: [t], locationSection: Q.JJy.SETTINGS_PREMIUM });
                    });
                },
                disabled: o.transfer.disabled,
            }),
            (0, gr.I5)(t)
                ? (0, f.jsx)(M.Dr, {
                      id: "uncancel",
                      label: o.uncancel.label,
                      subtext: o.uncancel.subtext,
                      action: function () {
                          (0, C.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(i.bind(i, 342744));
                              return (i) => (0, f.jsx)(e, { ...i, guildBoostSlotId: t.id });
                          });
                      },
                      disabled: o.uncancel.disabled,
                  })
                : (0, f.jsx)(M.Dr, {
                      id: "cancel",
                      label: o.cancel.label,
                      subtext: o.cancel.subtext,
                      action: function () {
                          (0, C.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(i.bind(i, 983511));
                              return (i) => (0, f.jsx)(e, { ...i, guildBoostSlot: t });
                          });
                      },
                      disabled: o.cancel.disabled,
                      color: "danger",
                  }),
            u,
        ],
    });
}
var go = i(545934),
    gu = i(496431);
let gd = function (e) {
    let { className: t, cooldown: i } = e,
        n = (0, gu.A)(i);
    return (0, f.jsx)(k.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, rO.uN)(n, { days: m.t.WUTPDc, hours: m.t.c1qodV, minutes: m.t["2+A3dv"] }),
    });
};
var gc = i(482900);
let gg = function (e) {
    let { className: t, imageClassName: n, boostInCooldown: s, useReducedMotion: l } = e;
    return (0, f.jsx)("div", {
        className: eF()(gc.h4, t, { [gc.K2]: s }),
        children: (0, f.jsx)("img", {
            className: eF()(gc.Sl, n, { [gc.x8]: s }),
            src: s
                ? i(650442)
                : l
                  ? i(742885)
                  : "https://cdn.discordapp.com/assets/content/86fd98fc22283647a8be93d0c503646b53c84e3cb25ca6562a38cecb84327e58.gif",
            alt: "",
        }),
    });
};
var gm = i(583032);
let gA = function (e) {
    let { className: t, hasCooldown: n, isCanceled: s, useReducedMotion: l } = e;
    return (0, f.jsxs)("div", {
        className: eF()(gm.sn, t),
        children: [
            s
                ? (0, f.jsx)("img", { className: eF()(gm.$J, gm.qX), src: i(728707), alt: "" })
                : (0, f.jsx)(gg, { className: gm.$J, boostInCooldown: n, useReducedMotion: l }),
            !s && n && (0, f.jsx)("img", { className: gm.De, src: i(438807), alt: "" }),
        ],
    });
};
var gh = i(548118),
    gE = i(509536),
    gx = i(944304),
    gT = i(864310),
    gS = i(245390);
let gp = function (e) {
    let { className: t, guildId: i, boostingVariant: n } = e,
        s = (0, uV.bG)([K.A], () => K.A.getGuild(i), [i]),
        l = (0, gT.A)(s?.id).total;
    return null == s
        ? (0, f.jsx)("div", {
              className: eF()(t, gS.bo),
              children: (0, f.jsx)("div", {
                  className: gS.$g,
                  children: (0, f.jsx)(k.E, { variant: "text-lg/bold", children: m.intl.string(m.t["6Kwwuo"]) }),
              }),
          })
        : (0, f.jsxs)("div", {
              className: eF()(t, gS.bo),
              children: [
                  (0, f.jsx)(gh.Ay, { className: gS.__invalid_guildIcon, guild: s, size: gh.Ay.Sizes.LARGER }),
                  (0, f.jsxs)("div", {
                      className: gS.$g,
                      children: [
                          (0, f.jsx)(k.E, { variant: "text-lg/bold", children: s.name }),
                          (0, f.jsxs)("div", {
                              className: gS.TZ,
                              children: [
                                  (0, f.jsx)(cP._, {
                                      color: F.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                      className: gS.Me,
                                  }),
                                  (0, f.jsx)(k.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: m.intl.format(m.t["pob/cL"], { subscriptions: l }),
                                  }),
                                  (0, f.jsx)("div", { className: gS.me }),
                                  (0, f.jsx)(k.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: (0, gr.gb)(s.premiumTier, { useLevels: !1 }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  n
                      ? (0, f.jsx)(gx.A, {
                            guild: s,
                            analyticsLocation: {
                                page: Q.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                section: Q.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                object: Q.ZSU.BUTTON_CTA,
                                objectType: Q.AnalyticsObjectTypes.BUY,
                            },
                            pauseAnimation: !0,
                            size: aV.$n.Sizes.MEDIUM,
                            color: aV.$n.Colors.PRIMARY,
                            buttonText: m.intl.string(m.t.aBHecF),
                        })
                      : (0, f.jsx)(eE.$, {
                            variant: "secondary",
                            text: m.intl.string(m.t.KLOhbO),
                            onClick: () => {
                                (0, sE.default)(),
                                    (0, gE.K4)({
                                        guildId: s.id,
                                        location: { section: Q.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA },
                                    });
                            },
                        }),
              ],
          });
};
var gf = i(85566);
function gN(e) {
    let {
            guildTier: t,
            guildBoostSlot: i,
            showAltText: n,
            isCanceled: s,
            premiumSubscription: l,
            fractionalPremiumInfo: r,
        } = e,
        a = N.useMemo(() => {
            if (s) {
                let e = l.currentPeriodEnd;
                return (
                    l.isPausedForFractionalPremium && (e = r.endsAt.toDate()), m.intl.format(m.t.Z4ULRD, { date: e })
                );
            }
            let e = null != i.premiumGuildSubscription ? dn.default.extractTimestamp(i.premiumGuildSubscription.id) : 0;
            return m.intl.formatToPlainString(m.t.lY2Bur, { date: new Date(e) });
        }, [i, s, l, r]),
        o = N.useMemo(
            () =>
                (function (e) {
                    if (null == e || e === Q.TVA.NONE) return "";
                    let t = [
                        m.intl.formatToPlainString(m.t["dLlKX/"], { numEmojiSlots: sf.TG[e].limits.emoji }),
                        m.intl.formatToPlainString(m.t["+ANIfv"], { numStickerSlots: sf.TG[e].limits.stickers }),
                        m.intl.formatToPlainString(m.t["4gt60b"], {
                            numSoundboardSlots: sf.TG[e].limits.soundboardSounds,
                        }),
                        m.intl.formatToPlainString(m.t.XahSjZ, {
                            resolution: sf.TG[e].limits.screenShareQualityResolution,
                            framerate: sf.TG[e].limits.screenShareQualityFramerate,
                        }),
                        m.intl.formatToPlainString(m.t.NbNs7S, { bitrate: sf.TG[e].limits.bitrate / 1e3 }),
                        m.intl.formatToPlainString(m.t.VVKcpn, { filesize: sf.TG[e].limits.fileSize / 1024 / 1024 }),
                        m.intl.formatToPlainString(m.t.TbpCvv, { numVideoStageSeats: sf.TG[e].limits.stageVideoUsers }),
                        m.intl.string(m.t.LDyX3i),
                        m.intl.string(m.t.YtGlPW),
                    ];
                    e >= Q.TVA.TIER_2 && (t.push(m.intl.string(m.t.SztbtN)), t.push(m.intl.string(m.t["3GK91n"]))),
                        e >= Q.TVA.TIER_3 && t.push(m.intl.string(m.t["XUUJd+"]));
                    let i = t[Math.floor(Math.random() * t.length)];
                    return m.intl.format(m.t["/dOAmQ"], { perk: i });
                })(t),
            [t],
        ),
        u = (0, gn.p)(n, { from: { opacity: 0 }, enter: { opacity: 1 }, leave: { opacity: 0 } }, "animate-always");
    return s || t === Q.TVA.NONE
        ? (0, f.jsx)("div", {
              className: gf.xm,
              children: (0, f.jsx)(k.E, { variant: "text-sm/medium", color: "text-muted", children: a }),
          })
        : u((e, t) =>
              (0, f.jsx)(gi.animated.div, {
                  style: e,
                  className: gf.xm,
                  children: (0, f.jsx)(k.E, { variant: "text-sm/medium", color: "text-muted", children: t ? o : a }),
              }),
          );
}
function g_(e) {
    let {
            guildTier: t,
            guildBoostSlot: i,
            premiumSubscription: n,
            hasCancelableGuildBoostSlot: s,
            showAltText: l,
            isLastGuildBoostSlot: r,
        } = e,
        a = (0, uV.bG)([iW.A], () => iW.A.useReducedMotion),
        o = N.useMemo(() => (null != i.cooldownEndsAt ? new Date(i.cooldownEndsAt) : null), [i]),
        u = N.useMemo(() => null != o && o > new Date(), [o]),
        d = (0, gr.I5)(i),
        c = (0, cw.A)(),
        g = N.useRef(null);
    return (0, f.jsxs)("div", {
        className: gf.PW,
        children: [
            (0, f.jsxs)("div", {
                className: gf.$U,
                children: [
                    (0, f.jsx)(gA, { isCanceled: d, hasCooldown: u, useReducedMotion: a }),
                    (0, f.jsx)("div", {
                        className: gf.vh,
                        children:
                            null != o && u && !d
                                ? (0, f.jsx)(gd, { className: gf.xm, cooldown: o.getTime() })
                                : (0, f.jsx)(gN, {
                                      guildTier: t,
                                      guildBoostSlot: i,
                                      showAltText: l,
                                      isCanceled: d,
                                      premiumSubscription: n,
                                      fractionalPremiumInfo: c,
                                  }),
                    }),
                    (0, f.jsx)(G.Y, {
                        targetElementRef: g,
                        renderPopout: function (e) {
                            let { closePopout: t } = e;
                            return (0, f.jsx)(ga, {
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
                            (0, f.jsx)(V.D, {
                                ...e,
                                innerRef: g,
                                "aria-label": m.intl.string(m.t.PdRCRg),
                                className: gf.oU,
                                children: (0, f.jsx)(gs.F, { size: "md", color: "currentColor" }),
                            }),
                    }),
                ],
            }),
            !r && (0, f.jsx)("div", { className: gf.eX }),
        ],
    });
}
function gC(e) {
    let {
            guildId: t,
            guildBoostSlotRecords: i,
            premiumSubscription: n,
            hasCancelableGuildBoostSlot: s,
            showAltText: l,
        } = e,
        r = (0, uV.bG)([K.A], () => K.A.getGuild(t), [t]);
    return (0, f.jsxs)("div", {
        className: gf.ag,
        children: [
            (0, f.jsx)(gp, { guildId: t, boostingVariant: !1 }),
            i.map((e, t) =>
                (0, f.jsx)(
                    g_,
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
function gI(e) {
    let { guildId: t, appliedGuildBoosts: i, premiumSubscription: n } = e,
        s = (0, uV.bG)([K.A], () => K.A.getGuild(t), [t]),
        l = dn.default.fromTimestamp(Date.now());
    if (
        (i.forEach((e) => {
            (null == l || 0 > dn.default.compare(e.id, l)) && (l = e.id);
        }),
        null == l)
    )
        return null;
    let r = go.A.createFromServer(
        {
            id: dn.default.fromTimestamp(Date.now()),
            subscription_id: n.id,
            canceled: !1,
            premium_guild_subscription: { id: l, guild_id: t },
            cooldown_ends_at: null,
        },
        n,
    );
    return (0, f.jsxs)("div", {
        className: gf.ag,
        children: [
            (0, f.jsx)(gp, { guildId: t, boostingVariant: !1 }),
            i.map((e, t) =>
                (0, f.jsx)(
                    g_,
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
function gb(e) {
    let { appliedGuildBoosts: t, premiumSubscription: i } = e,
        n = N.useMemo(() => {
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
        : (0, f.jsxs)("div", {
              className: gf.iE,
              children: [
                  (0, f.jsx)("div", {
                      className: gf.kL,
                      children: dn.default
                          .keys(n)
                          .map((e) =>
                              (0, f.jsx)(gI, { guildId: e, premiumSubscription: i, appliedGuildBoosts: n[e] }, e),
                          ),
                  }),
                  (0, f.jsx)("div", { className: gf.vK }),
              ],
          });
}
function gv(e) {
    let { guildBoostSlots: t, premiumSubscription: i } = e,
        [n, s] = N.useState(!1);
    N.useEffect(() => {
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
    let { boostsByGuildId: l, numActiveGuildBoostSlots: r } = N.useMemo(() => {
        let e = 0,
            i = {};
        return (
            Object.keys(t).forEach((n) => {
                let s = t[n];
                if ((!(0, gr.I5)(s) && e++, null != s.premiumGuildSubscription)) {
                    let e = s.premiumGuildSubscription.guildId;
                    e in i || (i[e] = []), i[e].push(s);
                }
            }),
            { boostsByGuildId: i, numActiveGuildBoostSlots: e }
        );
    }, [t]);
    if (null == i || 0 === Object.keys(l).length) return null;
    let a = r > o2.Ay.getNumIncludedPremiumGuildSubscriptionSlots(i.planId);
    return (0, f.jsxs)("div", {
        className: gf.iE,
        children: [
            (0, f.jsx)("div", {
                className: gf.kL,
                children: dn.default
                    .keys(l)
                    .map((e) =>
                        (0, f.jsx)(
                            gC,
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
            (0, f.jsx)("div", { className: gf.vK }),
        ],
    });
}
var gj = i(520610);
let gy = function (e) {
    let { hasGuildBoostSlots: t, hasAppliedGuildBoosts: n, hasBoostPerk: s, canAddBoosts: l } = e;
    return (0, f.jsxs)("div", {
        className: gj.iE,
        children: [
            (0, f.jsx)("div", {
                className: gj.bj,
                children: (0, f.jsx)("img", { alt: "", className: gj.KV, src: i(742885) }),
            }),
            (0, f.jsxs)("div", {
                className: gj.D7,
                children: [
                    (0, f.jsx)(eh.D, {
                        variant: "display-md",
                        className: gj.R_,
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
                                        ? m.intl.format(m.t.s9zQyG, {})
                                        : m.intl.format(m.t.Rb8Jhs, {})
                                    : m.intl.string(m.t["2rh0by"])
                                : m.intl.format(m.t.Rb8Jhs, {});
                        })({ hasGuildBoostSlots: t, hasBoostPerk: s, hasAppliedGuildBoosts: n, canAddBoosts: l }),
                    }),
                    (0, f.jsx)("svg", {
                        viewBox: "0 0 660 210",
                        className: gj.Mz,
                        children: (0, f.jsx)("path", {
                            d: "M101.3,45.5C57.5,45.9,15.9,82.2,0,99.5V210h660V53.5c-164-137-265.2,32.4-385.8,33.6  C177.7,88.1,158.1,45,101.3,45.5z",
                        }),
                    }),
                ],
            }),
        ],
    });
};
var gO = i(20218),
    gR = i(168482);
function gL() {
    return (0, f.jsxs)("div", {
        className: gO.iE,
        children: [
            (0, f.jsx)("img", { className: gO.Kk, alt: "", src: gR }),
            (0, f.jsxs)("div", {
                className: gO.pq,
                children: [
                    (0, f.jsx)(k.E, { variant: "text-lg/bold", children: m.intl.string(m.t.ZHNSYf) }),
                    (0, f.jsx)(k.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: m.intl.string(m.t.kCj5ps),
                    }),
                ],
            }),
            (0, f.jsx)(eE.$, {
                variant: "secondary",
                text: m.intl.string(m.t.JFlifp),
                onClick: () => {
                    (0, sO.pX)(Q.BVt.GUILD_DISCOVERY), (0, sE.default)();
                },
            }),
        ],
    });
}
var gD = i(502572),
    gP = i(614820),
    gG = i(987144),
    gU = i(805319);
let gM = function () {
    let e = N.useRef(null),
        { analyticsLocations: t } = (0, nU.Ay)(),
        { fractionalState: n } = (0, cw.A)();
    function s(i) {
        null != e.current && (0, C.closeModal)(e.current),
            (0, gG.g)({
                analyticsLocation: {
                    page: Q.liQ.GUILD_BOOSTING_USER_SETTINGS,
                    section: Q.JJy.GUILD_BOOSTING_BOOST_ANY_GUILD_CTA,
                    object: Q.ZSU.BUTTON_CTA,
                    objectType: Q.AnalyticsObjectTypes.BUY,
                },
                analyticsLocations: t,
                guild: i,
            });
    }
    async function l() {
        e.current = await (0, C.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 770101));
                return (t) => (0, f.jsx)(e, { ...t, onSelectGuild: s });
            },
            {
                onCloseRequest: () => {
                    null != e.current && (0, C.closeModal)(e.current);
                },
            },
        );
    }
    let r = (0, gr.Nc)({ fractionalState: n });
    return (0, f.jsxs)("div", {
        className: gU.iE,
        children: [
            (0, f.jsx)(cP._, { color: F.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: gU.$J }),
            (0, f.jsx)(k.E, {
                className: gU.C,
                color: "text-default",
                variant: "text-sm/medium",
                children: m.intl.format(m.t.kqC5vq, {
                    boostAnyGuildHook: (e, t) => {
                        let i = null != r,
                            n = (0, gP.O)(e),
                            s = (0, f.jsx)("div", {
                                className: gU.lO,
                                children: (0, f.jsx)(
                                    B.Q,
                                    { variant: "primary", onClick: i ? void 0 : l, text: n, disabled: i },
                                    t,
                                ),
                            });
                        return i
                            ? (0, f.jsx)(
                                  gD.A,
                                  {
                                      text: r,
                                      "aria-label": r.toString(),
                                      children: (e) => (0, f.jsx)("span", { ...e, children: s }),
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
var gV = i(279574);
let gk = function (e) {
    let { canAddBoosts: t, canApplyBoosts: i } = e,
        n = (0, R.bG)([ge.A], () => ge.A.affinities),
        s = (0, R.bG)([W.Ay], () => W.Ay.getFlattenedGuildIds()),
        l = N.useMemo(() => {
            let e = n.slice(0, 3).map((e) => e.guildId);
            for (let t = 0; t < s.length && !(e.length >= 3); t++) {
                let i = s[t];
                e.includes(i) || e.push(i);
            }
            return e;
        }, [n, s]);
    return 0 === l.length
        ? null
        : (0, f.jsxs)("div", {
              className: gV.iE,
              children: [
                  t &&
                      (0, f.jsx)(eh.D, {
                          variant: "heading-lg/semibold",
                          className: gV.wx,
                          children: m.intl.string(m.t.r90Wgo),
                      }),
                  l.map((e) => (0, f.jsx)(gp, { className: gV.ZS, guildId: e, boostingVariant: !0 }, e)),
                  s.length > 3 && i && (0, f.jsx)(gM, {}),
              ],
          });
};
var gw = i(649327);
let gF = function (e) {
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
                    flavor: m.intl.format(m.t.doslJu, {
                        onClick: () => (0, ey.openUserSettings)(d.X.SUBSCRIPTIONS_PANEL),
                    }),
                };
            if (!n) return { subtitle: m.intl.string(m.t.oiWYAc) };
            if (t)
                return {
                    subtitle: m.intl.string(m.t.W5rDjW),
                    flavor: m.intl.format(m.t.cUHcaQ, {
                        helpdeskArticle: to.A.getArticleURL(Q.MVz.GUILD_SUBSCRIPTIONS),
                    }),
                };
            let l = sf.hd[sf.gD.PREMIUM_MONTH_GUILD],
                r = o2.Ay.getDefaultPrice(l.id, i),
                a = (0, dt.CE)((0, dt.$g)(r.amount, r.currency), l.interval, l.intervalCount);
            return {
                subtitle: i ? m.intl.string(m.t.bhPzXR) : m.intl.string(m.t.Zs9h9Z),
                flavor: m.intl.formatToPlainString(m.t.PGgTdA, { monthlyGuildBoostPrice: a }),
            };
        })({
            hasAppliedGuildBoosts: t,
            hasBoostPerk: i,
            hasGuildAffinitiesOrInGuild: n,
            subscriptionIsPausedOrPausePending: s,
        });
    return (0, f.jsxs)("div", {
        className: gw.i,
        children: [
            (0, f.jsx)(eh.D, { variant: "heading-lg/bold", className: gw.V, children: l }),
            null != r && (0, f.jsx)(k.E, { variant: "text-sm/normal", children: r }),
        ],
    });
};
var gB = i(724624),
    gz = i(983511),
    gY = i(342744),
    gX = i(87719),
    gH = i(354888);
function gK(e) {
    let {
            guildBoostSlot: t,
            isCancellable: i,
            onCancel: n,
            onUncancel: s,
            premiumSubscription: l,
            useReducedMotion: r,
            fractionalState: a,
        } = e,
        o = N.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t]),
        u = (0, gr.I5)(t),
        d = l?.isPaused === !0 && a === sf.xc.NONE,
        c = m.intl.string(m.t.mOWsF1);
    return (0, f.jsxs)(
        "li",
        {
            className: gH.Hp,
            children: [
                (0, f.jsxs)("div", {
                    className: gH.YL,
                    children: [
                        (0, f.jsx)(gA, {
                            className: gH.W6,
                            hasCooldown: t.isOnCooldown(),
                            isCanceled: u,
                            useReducedMotion: r,
                        }),
                        u && null != l
                            ? (0, f.jsx)(k.E, {
                                  color: "text-muted",
                                  variant: "text-sm/medium",
                                  children: m.intl.format(m.t.Z4ULRD, { date: l.currentPeriodEnd }),
                              })
                            : t.isOnCooldown() && null != o
                              ? (0, f.jsx)(gd, { cooldown: o.getTime() })
                              : (0, f.jsx)(k.E, {
                                    className: gH.__invalid_unappliedGuildBoostSlotDescription,
                                    color: "text-muted",
                                    variant: "text-sm/medium",
                                    children: m.intl.string(m.t["2mcafz"]),
                                }),
                    ],
                }),
                (0, f.jsxs)("div", {
                    className: gH.E7,
                    children: [
                        i &&
                            !u &&
                            (0, f.jsx)(gD.A, {
                                shouldShow: d,
                                text: c,
                                "aria-label": c.toString(),
                                children: (e) =>
                                    (0, f.jsx)("div", {
                                        className: gH.LB,
                                        children: (0, f.jsx)(B.Q, {
                                            ...e,
                                            variant: "primary",
                                            text: m.intl.string(m.t.twFU3R),
                                            onClick: () => n(t),
                                            disabled: d,
                                            size: "sm",
                                        }),
                                    }),
                            }),
                        u &&
                            (0, f.jsx)(gD.A, {
                                shouldShow: d,
                                text: c,
                                "aria-label": c.toString(),
                                children: (e) =>
                                    (0, f.jsx)("div", {
                                        className: gH.LB,
                                        children: (0, f.jsx)(B.Q, {
                                            ...e,
                                            variant: "primary",
                                            text: m.intl.string(m.t["2glQNp"]),
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
function gW(e) {
    (0, C.openModalLazy)(async () => (t) => (0, f.jsx)(gz.default, { ...t, guildBoostSlot: e }));
}
function gZ(e) {
    (0, C.openModalLazy)(async () => (t) => (0, f.jsx)(gY.default, { ...t, guildBoostSlotId: e.id }));
}
let gq = function (e) {
    let t,
        i,
        n,
        { guildBoostSlots: s } = e,
        l = (0, R.bG)([dy.A], () => dy.A.getPremiumTypeSubscription()),
        r = l?.isPausedOrPausePending === !0,
        { fractionalState: a } = (0, cw.A)(),
        o = (0, R.bG)([iW.A], () => iW.A.useReducedMotion),
        u = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()),
        d = a === sf.xc.FP_SUB_PAUSED,
        c = r && !d,
        {
            appliedGuildBoostSlots: g,
            unappliedGuildBoostSlots: A,
            numActiveGuildBoostSlots: h,
            hasCooldownBoosts: E,
            allGuildBoostsAreOnCooldown: x,
        } = N.useMemo(() => {
            let e = [],
                t = [],
                i = 0,
                n = !1,
                l = !0;
            return (
                s.forEach((s) => {
                    !(0, gr.I5)(s) && i++,
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
        T = null != l ? o2.Ay.getNumIncludedPremiumGuildSubscriptionSlots(l.planId) : 0,
        S = Math.max(0, T - g.length),
        p = h > T,
        _ = T === s.length,
        I = _ ? S : 1,
        b = N.useMemo(() => {
            let e = [];
            for (let t = 0; t < I; t++) e.push((0, f.jsx)(gg, { className: gH.YA, useReducedMotion: o }, t));
            return e;
        }, [I, o]),
        v = N.useMemo(() => A.find((e) => e.isAvailable()), [A]);
    if (0 === A.length) return null;
    let j = A.length;
    if (
        ((t = _
            ? m.intl.formatToPlainString(x ? m.t["3DW6Dc"] : m.t["/u15Qc"], { numUnappliedGuildBoostSlots: j })
            : m.intl.formatToPlainString(x ? m.t["3DW6Dc"] : m.t.BPadnO, { numUnappliedGuildBoostSlots: j })),
        o2.Ay.isPremium(u))
    ) {
        let e = (e, t) =>
            (0, f.jsx)(
                V.D,
                {
                    className: gH.nw,
                    tag: "span",
                    onClick: () => {
                        (0, gX.e)();
                    },
                    children: e,
                },
                t,
            );
        i = x
            ? m.intl.format(m.t.omcpSE, { learnMoreHook: e })
            : m.intl.format(m.t["5mAkVi"], { numUnappliedGuildBoostSlots: j, learnMoreHook: e });
    } else
        i = x
            ? m.intl.string(m.t["8pcUZi"])
            : m.intl.formatToPlainString(m.t.Kaw82o, { numUnappliedGuildBoostSlots: j });
    return (
        (n = r && a === sf.xc.NONE ? m.intl.string(m.t.mOWsF1) : m.intl.string(m.t.xr4m5B)),
        (0, f.jsx)("div", {
            className: gH.iE,
            children: (0, f.jsxs)("div", {
                className: eF()(gH.Qs, [gH.Yq]),
                children: [
                    (0, f.jsxs)("div", {
                        className: gH.wx,
                        children: [
                            (0, f.jsxs)("div", {
                                className: gH.RW,
                                children: [
                                    (0, f.jsx)("div", { className: gH.PS, children: b }),
                                    (0, f.jsxs)("div", {
                                        className: gH.__invalid_headerCopy,
                                        children: [
                                            (0, f.jsx)(eh.D, {
                                                className: gH.gg,
                                                variant: "heading-lg/bold",
                                                children: t,
                                            }),
                                            (0, f.jsx)(k.E, {
                                                className: gH.__invalid_headerSubheading,
                                                color: "text-strong",
                                                variant: "text-sm/normal",
                                                children: i,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, f.jsx)("div", {
                                className: gH.di,
                                children: (0, f.jsx)(gD.A, {
                                    shouldShow: null == v || c,
                                    text: n,
                                    "aria-label": n.toString(),
                                    children: (e) =>
                                        (0, f.jsx)(eE.$, {
                                            variant: "primary",
                                            text: m.intl.string(m.t.BMx1iy),
                                            ...e,
                                            disabled: null == v || c,
                                            onClick:
                                                null != v
                                                    ? () => {
                                                          (0, C.openModalLazy)(
                                                              async () => (e) =>
                                                                  (0, f.jsx)(gB.default, {
                                                                      ...e,
                                                                      guildBoostSlots: [v],
                                                                      locationSection: Q.JJy.SETTINGS_PREMIUM,
                                                                  }),
                                                          );
                                                      }
                                                    : void 0,
                                        }),
                                }),
                            }),
                        ],
                    }),
                    (!_ || E) &&
                        (0, f.jsx)("ul", {
                            className: gH.LU,
                            children: A.map((e) =>
                                (0, f.jsx)(
                                    gK,
                                    {
                                        guildBoostSlot: e,
                                        isCancellable: p,
                                        onCancel: gW,
                                        onUncancel: gZ,
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
var gQ = i(616659);
function gJ(e) {
    let { premiumSubscription: t } = e,
        i = (0, R.bG)([gt.A], () => gt.A.boostSlots),
        n = N.useMemo(() => Object.values(i), [i]),
        s = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()),
        l = o2.Ay.isPremium(s, sf.PremiumTypes.TIER_2),
        r = (0, R.bG)([ge.A], () => ge.A.affinities),
        a = (0, R.bG)([W.Ay], () => W.Ay.getFlattenedGuildIds()),
        o = r.length > 0 || a.length > 0,
        u = n.length > 0,
        d = N.useMemo(() => n.filter((e) => null != e.premiumGuildSubscription), [n]),
        c = d.length > 0,
        g = n.length > d.length,
        m = (0, R.bG)([ck.A], () => ck.A.getCurrentUserAppliedBoosts()),
        { fractionalState: A } = (0, cw.A)({ forceFetch: !0 }),
        h = s?.isPremiumGroupMember(),
        E = t?.isPausedOrPausePending === !0 && A === sf.xc.NONE,
        x = t?.isPausedOrPausePending !== !0 && A === sf.xc.NONE && !h,
        T = l && A === sf.xc.FP_SUB_PAUSED,
        S = A === sf.xc.NONE && !h;
    return (0, f.jsxs)("div", {
        className: gQ.GO,
        children: [
            (0, f.jsx)(dU.kb, { className: gQ.ek }),
            (0, f.jsx)(gy, { hasGuildBoostSlots: u, hasAppliedGuildBoosts: c, hasBoostPerk: T, canAddBoosts: x }),
            S &&
                (0, f.jsx)(gF, {
                    hasAppliedGuildBoosts: c,
                    hasBoostPerk: T,
                    hasGuildAffinitiesOrInGuild: o,
                    subscriptionIsPausedOrPausePending: E,
                }),
            h && (0, f.jsx)(c9.A, {}),
            !o && (0, f.jsx)(gL, {}),
            t?.isPaused && A !== sf.xc.FP_SUB_PAUSED
                ? (0, f.jsx)(gb, { appliedGuildBoosts: m, premiumSubscription: t })
                : (0, f.jsx)(gv, { guildBoostSlots: i, premiumSubscription: t }),
            (0, f.jsx)(gq, { guildBoostSlots: n, fractionalPremiumState: A }),
            (0, f.jsx)(gk, { canAddBoosts: c && x, canApplyBoosts: g }),
            (0, f.jsx)(c8, { className: gQ.e4, hideHeading: !0, hideTier0: !0 }),
            (0, f.jsx)(cK, { cardClassName: gQ.KW }),
            (0, f.jsx)(cQ, { className: gQ.JL }),
        ],
    });
}
var g$ = i(527113),
    g0 = i(365199),
    g1 = i(162286);
function g2(e) {
    let { guild: t, className: i } = e,
        { total: n } = (0, gT.A)(t.id);
    return (0, f.jsxs)("div", {
        className: i ?? g1.OA,
        children: [
            (0, f.jsx)(gh.Ay, { className: g1.$f, guild: t, size: gh.Ay.Sizes.MEDIUM }),
            (0, f.jsxs)("div", {
                className: g1.gI,
                children: [
                    (0, f.jsx)(k.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, f.jsxs)("div", {
                        className: g1.ew,
                        children: [
                            (0, f.jsxs)("div", {
                                className: g1.QW,
                                children: [
                                    (0, f.jsx)(cP._, {
                                        className: g1.Wz,
                                        color: F.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                                    }),
                                    (0, f.jsx)(k.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: m.intl.format(m.t["pob/cL"], { subscriptions: n }),
                                    }),
                                ],
                            }),
                            t.premiumTier !== Q.TVA.NONE &&
                                (0, f.jsxs)(f.Fragment, {
                                    children: [
                                        (0, f.jsx)("div", { className: g1.zk }),
                                        (0, f.jsx)(k.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, gr.gb)(t.premiumTier, { useLevels: !1 }),
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
function g3(e) {
    let { guildId: t } = e,
        i = (0, R.bG)([K.A], () => K.A.getGuild(t), [t]);
    return null == i
        ? null
        : (0, f.jsxs)("div", {
              className: g1.Nr,
              children: [
                  (0, f.jsx)(g2, { guild: i }),
                  (0, f.jsx)(eE.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: cP._,
                      text: m.intl.string(m.t.aBHecF),
                      onClick: () => {
                          (0, gG.g)({
                              analyticsLocations: [],
                              analyticsLocation: {
                                  page: Q.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                  section: Q.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                  object: Q.ZSU.BUTTON_CTA,
                                  objectType: Q.AnalyticsObjectTypes.BUY,
                              },
                              guild: i,
                          });
                      },
                  }),
              ],
          });
}
var g6 = i(225334);
let g4 =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function g7(e) {
    let { slot: t, guildTier: i, premiumSubscription: n, hasCancelableSlots: s, isLast: l } = e,
        r = N.useRef(null),
        a = (0, gr.I5)(t),
        o = N.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, cw.A)(),
        c = N.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === Q.TVA.NONE) return "";
                    let i = [
                        m.intl.formatToPlainString(m.t["dLlKX/"], { numEmojiSlots: sf.TG[e].limits.emoji }),
                        m.intl.formatToPlainString(m.t["+ANIfv"], { numStickerSlots: sf.TG[e].limits.stickers }),
                        m.intl.formatToPlainString(m.t["4gt60b"], {
                            numSoundboardSlots: sf.TG[e].limits.soundboardSounds,
                        }),
                        m.intl.formatToPlainString(m.t.XahSjZ, {
                            resolution: sf.TG[e].limits.screenShareQualityResolution,
                            framerate: sf.TG[e].limits.screenShareQualityFramerate,
                        }),
                        m.intl.formatToPlainString(m.t.NbNs7S, { bitrate: sf.TG[e].limits.bitrate / 1e3 }),
                        m.intl.formatToPlainString(m.t.VVKcpn, { filesize: sf.TG[e].limits.fileSize / 1024 / 1024 }),
                        m.intl.formatToPlainString(m.t.TbpCvv, { numVideoStageSeats: sf.TG[e].limits.stageVideoUsers }),
                        m.intl.string(m.t.LDyX3i),
                        m.intl.string(m.t.YtGlPW),
                    ];
                    e >= Q.TVA.TIER_2 && (i.push(m.intl.string(m.t.SztbtN)), i.push(m.intl.string(m.t["3GK91n"]))),
                        e >= Q.TVA.TIER_3 && i.push(m.intl.string(m.t["XUUJd+"]));
                    let n = 0;
                    for (let e = 0; e < t.length; e++) n = (31 * n + t.charCodeAt(e)) | 0;
                    let s = i[Math.abs(n) % i.length];
                    return m.intl.formatToPlainString(m.t["/dOAmQ"], { perk: s });
                })(i, t.id),
            [i, t.id],
        ),
        g = N.useMemo(() => {
            if ("" !== c) return c;
            let e = null != t.premiumGuildSubscription ? dn.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return m.intl.formatToPlainString(m.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        A = N.useMemo(
            () => (a ? (n.isPausedForFractionalPremium ? d.endsAt.toDate() : n.currentPeriodEnd) : null),
            [a, n, d],
        );
    return (0, f.jsxs)("div", {
        className: eF()(g6.iq, { [g6.Mt]: l }),
        children: [
            (0, f.jsxs)("div", {
                className: g6.kd,
                children: [
                    (0, f.jsx)("img", { alt: "", className: g6.bB, src: g4 }),
                    a && null != A
                        ? (0, f.jsx)(k.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: m.intl.format(m.t.Z4ULRD, { date: A }),
                          })
                        : (0, f.jsxs)(f.Fragment, {
                              children: [
                                  (0, f.jsx)(k.E, { variant: "text-sm/medium", color: "text-subtle", children: g }),
                                  u &&
                                      null != o &&
                                      (0, f.jsxs)(f.Fragment, {
                                          children: [
                                              (0, f.jsx)("div", { className: g6.zk }),
                                              (0, f.jsx)(k.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-info",
                                                  children: m.intl.formatToPlainString(m.t.YJlswH, {
                                                      date: o.toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  !u &&
                                      null != n.trialEndsAt &&
                                      (0, f.jsxs)(f.Fragment, {
                                          children: [
                                              (0, f.jsx)("div", { className: g6.zk }),
                                              (0, f.jsx)(k.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-warning",
                                                  children: m.intl.formatToPlainString(m.t.OdPSpk, {
                                                      date: new Date(n.trialEndsAt).toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                              ],
                          }),
                ],
            }),
            (0, f.jsx)(G.Y, {
                targetElementRef: r,
                renderPopout: (e) => {
                    let { closePopout: i } = e;
                    return (0, f.jsx)(ga, {
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
                    (0, f.jsx)(V.D, {
                        innerRef: r,
                        "aria-label": m.intl.string(m.t.PdRCRg),
                        className: g6.Mj,
                        ...e,
                        children: (0, f.jsx)(g0.j, { size: "xs", color: F.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                    }),
            }),
        ],
    });
}
function g5(e) {
    let { guildId: t, slots: i, premiumSubscription: n, hasCancelableSlots: s } = e,
        l = (0, R.bG)([K.A], () => K.A.getGuild(t), [t]);
    return (0, f.jsxs)("div", {
        className: g6.Nr,
        children: [
            (0, f.jsx)("div", {
                className: g6.MY,
                children:
                    null != l
                        ? (0, f.jsxs)(f.Fragment, {
                              children: [
                                  (0, f.jsx)(g2, { guild: l, className: g6.OA }),
                                  (0, f.jsx)(eE.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: m.intl.string(m.t.KLOhbO),
                                      onClick: () => {
                                          (0, sE.default)(),
                                              (0, gE.K4)({
                                                  guildId: l.id,
                                                  location: {
                                                      section: Q.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA,
                                                  },
                                              });
                                      },
                                  }),
                              ],
                          })
                        : (0, f.jsx)("div", {
                              className: g6.OA,
                              children: (0, f.jsx)(eh.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: m.intl.string(m.t["6Kwwuo"]),
                              }),
                          }),
            }),
            i.map((e, t) =>
                (0, f.jsx)(
                    g7,
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
function g8(e) {
    let { guildBoostSlots: t, premiumSubscription: i, pausedAppliedGuildBoosts: n, isPaused: s } = e,
        { boostsByGuildId: l, numActiveSlots: r } = N.useMemo(() => {
            if (s && null != i)
                return {
                    boostsByGuildId: (function (e, t) {
                        let i = {};
                        for (let t of e) t.guildId in i || (i[t.guildId] = []), i[t.guildId].push(t);
                        let n = {};
                        for (let e of Object.keys(i)) {
                            let s = i[e];
                            n[e] = s.map((i) =>
                                go.A.createFromServer(
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
                if ((!(0, gr.I5)(n) && e++, null != n.premiumGuildSubscription)) {
                    let e = n.premiumGuildSubscription.guildId;
                    e in l || (l[e] = []), l[e].push(n);
                }
            }
            return { boostsByGuildId: l, numActiveSlots: e };
        }, [t, s, n, i]);
    if (null == i || 0 === Object.keys(l).length) return null;
    let a = r > o2.Ay.getNumIncludedPremiumGuildSubscriptionSlots(i.planId);
    return (0, f.jsx)("div", {
        className: g6.kR,
        children: dn.default
            .keys(l)
            .map((e) => (0, f.jsx)(g5, { guildId: e, slots: l[e], premiumSubscription: i, hasCancelableSlots: a }, e)),
    });
}
var g9 = i(68179);
function me(e) {
    let { guildBoostSlots: t, fractionalPremiumState: n } = e,
        s = (0, R.bG)([dy.A], () => dy.A.getPremiumTypeSubscription()),
        { unappliedSlots: l, numActiveSlots: r } = N.useMemo(() => {
            let e = [],
                i = 0;
            for (let n of t) !(0, gr.I5)(n) && i++, null == n.premiumGuildSubscription && e.push(n);
            return { unappliedSlots: e, numActiveSlots: i };
        }, [t]),
        a = r > (null != s ? o2.Ay.getNumIncludedPremiumGuildSubscriptionSlots(s.planId) : 0),
        o = s?.isPausedOrPausePending === !0 && n === sf.xc.NONE;
    return 0 === l.length
        ? null
        : (0, f.jsxs)("div", {
              className: g9.Nr,
              children: [
                  (0, f.jsxs)("div", {
                      className: g9.MY,
                      children: [
                          (0, f.jsxs)("div", {
                              className: g9._L,
                              children: [
                                  (0, f.jsxs)("div", {
                                      className: g9.MD,
                                      children: [
                                          (0, f.jsx)("img", { alt: "", className: g9.F8, src: g4 }),
                                          (0, f.jsx)("div", {
                                              className: eF()(g9.qS, "theme-dark"),
                                              children: (0, f.jsx)("span", { className: g9.Vv, children: l.length }),
                                          }),
                                      ],
                                  }),
                                  (0, f.jsxs)("div", {
                                      className: g9.Qp,
                                      children: [
                                          (0, f.jsx)(k.E, {
                                              variant: "heading-md/semibold",
                                              color: "text-default",
                                              tag: "span",
                                              children: m.intl.format(m.t.BPadnO, {
                                                  numUnappliedGuildBoostSlots: l.length,
                                              }),
                                          }),
                                          (0, f.jsx)(k.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-subtle",
                                              children: m.intl.format(m.t.Kaw82o, {
                                                  numUnappliedGuildBoostSlots: l.length,
                                              }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, f.jsx)(gD.A, {
                              shouldShow: o,
                              text: m.intl.string(m.t.mOWsF1),
                              "aria-label": m.intl.string(m.t.mOWsF1),
                              children: (e) =>
                                  (0, f.jsx)(eE.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: cP._,
                                      text: m.intl.string(m.t.BMx1iy),
                                      disabled: o,
                                      onClick: () => {
                                          (0, C.openModalLazy)(async () => {
                                              let { default: e } = await Promise.resolve().then(i.bind(i, 770101));
                                              return (t) =>
                                                  (0, f.jsx)(e, {
                                                      ...t,
                                                      onSelectGuild: (e) => {
                                                          t.onClose(),
                                                              (0, gG.g)({
                                                                  analyticsLocations: [],
                                                                  analyticsLocation: {
                                                                      page: Q.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                                      section: Q.JJy.SETTINGS_PREMIUM,
                                                                      object: Q.ZSU.BUTTON_CTA,
                                                                      objectType: Q.AnalyticsObjectTypes.BUY,
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
                      (0, f.jsx)(
                          mt,
                          {
                              slot: e,
                              isLast: t === l.length - 1,
                              isCancelable: a && !(0, gr.I5)(e),
                              isCanceled: (0, gr.I5)(e),
                              premiumSubscription: s,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function mt(e) {
    let t,
        { slot: i, isLast: n, isCancelable: s, isCanceled: l, premiumSubscription: r, modificationsDisabled: a } = e,
        o = N.useRef(null),
        u = N.useMemo(() => (null != i.cooldownEndsAt ? new Date(i.cooldownEndsAt) : null), [i.cooldownEndsAt]);
    t =
        l && null != r
            ? (0, f.jsx)(k.E, {
                  variant: "text-sm/medium",
                  color: "text-subtle",
                  children: m.intl.format(m.t.Z4ULRD, { date: r.currentPeriodEnd }),
              })
            : i.isOnCooldown() && null != u
              ? (0, f.jsx)(gd, { cooldown: u.getTime() })
              : (0, f.jsx)(k.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: m.intl.string(m.t["2mcafz"]),
                });
    let d = s || l;
    return (0, f.jsxs)("div", {
        className: eF()(g9.iq, { [g9.Mt]: n }),
        children: [
            (0, f.jsxs)("div", {
                className: g9.kd,
                children: [(0, f.jsx)("img", { alt: "", className: g9.bB, src: g4 }), t],
            }),
            d &&
                (0, f.jsx)(G.Y, {
                    targetElementRef: o,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, f.jsxs)(U.W, {
                            navId: "unapplied-boost-actions",
                            "aria-label": m.intl.string(m.t.ogxXGq),
                            onSelect: void 0,
                            onClose: t,
                            children: [
                                s &&
                                    (0, f.jsx)(M.Dr, {
                                        id: "cancel-boost",
                                        label: m.intl.string(m.t.twFU3R),
                                        color: "danger",
                                        disabled: a,
                                        subtext: a ? m.intl.string(m.t.mOWsF1) : void 0,
                                        action: () => {
                                            t(),
                                                (0, C.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, f.jsx)(gz.default, { ...e, guildBoostSlot: i }),
                                                );
                                        },
                                    }),
                                l &&
                                    (0, f.jsx)(M.Dr, {
                                        id: "uncancel-boost",
                                        label: m.intl.string(m.t["2glQNp"]),
                                        disabled: a,
                                        subtext: a ? m.intl.string(m.t.mOWsF1) : void 0,
                                        action: () => {
                                            t(),
                                                (0, C.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, f.jsx)(gY.default, { ...e, guildBoostSlotId: i.id }),
                                                );
                                        },
                                    }),
                            ],
                        });
                    },
                    align: "right",
                    position: "bottom",
                    children: (e) =>
                        (0, f.jsx)(V.D, {
                            innerRef: o,
                            "aria-label": m.intl.string(m.t["UKOtz+"]),
                            className: g9.Mj,
                            ...e,
                            children: (0, f.jsx)(g0.j, { size: "xs", color: F.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                        }),
                }),
        ],
    });
}
var mi = i(185949);
function mn(e) {
    let {
            guildBoostSlots: t,
            guildBoostSlotsByGuildId: i,
            premiumSubscription: n,
            pausedAppliedGuildBoosts: s,
            fractionalPremiumState: l,
        } = e,
        r = to.A.getArticleURL(Q.MVz.GUILD_BOOSTING_FAQ),
        a = n?.isPaused === !0 && l !== sf.xc.FP_SUB_PAUSED,
        o = t.some((e) => null == e.premiumGuildSubscription),
        u = a && s.length > 0,
        d = a ? u : t.some((e) => null != e.premiumGuildSubscription);
    return o || d
        ? (0, f.jsxs)("div", {
              className: mi.i,
              children: [
                  (0, f.jsxs)("div", {
                      className: mi.b,
                      children: [
                          (0, f.jsx)(eh.D, { variant: "heading-md/semibold", children: m.intl.string(m.t.W5rDjW) }),
                          (0, f.jsx)(k.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: m.intl.format(m.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, f.jsx)(g8, {
                      guildBoostSlots: i,
                      premiumSubscription: n,
                      pausedAppliedGuildBoosts: s,
                      isPaused: a,
                  }),
                  (0, f.jsx)(me, { guildBoostSlots: t, fractionalPremiumState: l }),
              ],
          })
        : null;
}
var ms = i(917064),
    ml = i(438929);
function mr() {
    return (0, f.jsxs)("div", {
        className: ml.iE,
        children: [
            (0, f.jsx)(eh.D, { variant: "heading-xl/normal", children: m.intl.string(m.t.IzKs3o) }),
            (0, f.jsx)("div", {
                className: ml.kR,
                children: ms.s.map((e, t) => {
                    let i = e.icon;
                    return (0, f.jsxs)(
                        "div",
                        {
                            className: ml.Nr,
                            children: [
                                (0, f.jsx)(i, { className: ml.Kk }),
                                (0, f.jsx)(k.E, {
                                    className: ml.h_,
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
var ma = i(232122),
    mo = i(539915);
function mu() {
    let [e, t] = N.useState(null),
        [i, n] = N.useState(null);
    return (0, f.jsxs)("div", {
        className: mo.iE,
        children: [
            (0, f.jsx)(eh.D, { variant: "heading-xl/normal", children: m.intl.string(m.t.HPJ6Nj) }),
            (0, f.jsx)("ul", {
                className: mo.p_,
                children: ma.m.map((s, l) => {
                    let r = e === l,
                        a = i === l,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, f.jsxs)(
                        V.D,
                        {
                            tag: "li",
                            className: eF()(mo.Aw, { [mo.$K]: r }),
                            onClick: () => t((e) => (e === l ? null : l)),
                            onMouseEnter: () => n(l),
                            onMouseLeave: () => n(null),
                            children: [
                                (0, f.jsxs)("div", {
                                    className: mo.k7,
                                    children: [
                                        (0, f.jsx)(k.E, {
                                            className: mo.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: s.getQuestion(),
                                        }),
                                        (0, f.jsx)(w.a, {
                                            size: "sm",
                                            color: F.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: mo.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, f.jsx)(k.E, {
                                        className: mo.ZF,
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
var md = i(182859),
    mc = i(853513),
    mg = i(560378);
function mm() {
    let e = to.A.getArticleURL(Q.MVz.GUILD_SUBSCRIPTIONS);
    return (0, f.jsxs)("div", {
        className: mg.wx,
        children: [
            (0, f.jsxs)("div", {
                className: mg.Qs,
                children: [
                    (0, f.jsxs)("div", {
                        className: mg.B5,
                        children: [
                            (0, f.jsx)("img", { alt: "", className: mg.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, f.jsx)(eh.D, {
                                variant: "heading-xl/normal",
                                children: m.intl.string(mc.default.hjvcLO),
                            }),
                        ],
                    }),
                    (0, f.jsx)(k.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: m.intl.format(m.t.TUHyoA, { helpdeskArticle: e }),
                    }),
                ],
            }),
            (0, f.jsx)(md.A, {
                variant: "member",
                className: mg.iO,
                analyticsLocation: {
                    page: Q.liQ.GUILD_BOOSTING_USER_SETTINGS,
                    section: Q.JJy.HERO,
                    object: Q.ZSU.CARD,
                },
                videoPlacement: "settings_header",
            }),
        ],
    });
}
var mA = i(315629),
    mh = i(780082);
function mE() {
    let e = (0, R.bG)([t6.default], () => t6.default.getCurrentUser());
    if (null == e || o2.Ay.hasFreeBoosts(e)) return null;
    let t = to.A.getArticleURL(Q.MVz.GUILD_BOOSTING_FAQ);
    return (0, f.jsxs)(mA.h, {
        color: "nitro-pink",
        className: mh.vK,
        children: [
            (0, f.jsxs)("div", {
                className: mh.nw,
                children: [
                    (0, f.jsx)("img", { alt: "", className: mh.q3, src: g4 }),
                    (0, f.jsxs)("div", {
                        className: mh.Tm,
                        children: [
                            (0, f.jsx)(k.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: m.intl.format(m.t.Idh1Vs, { count: sf.M4, boostCount: sf.M4 }),
                            }),
                            (0, f.jsxs)("div", {
                                className: mh.xv,
                                children: [
                                    (0, f.jsx)(oK.t, { className: mh.nE }),
                                    (0, f.jsx)(k.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: m.intl.format(m.t["6UAu+f"], {
                                            count: sf.M4,
                                            boostCount: sf.M4,
                                            helpdeskArticle: t,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, f.jsx)(eE.$, {
                variant: "expressive",
                size: "sm",
                icon: oK.t,
                text: m.intl.string(m.t["8x0jKT"]),
                onClick: gX.e,
            }),
        ],
    });
}
var mx = i(894206);
function mT() {
    let e = (0, R.bG)([ge.A], () => ge.A.affinities),
        t = (0, R.bG)([W.Ay], () => W.Ay.getFlattenedGuildIds()),
        i = N.useMemo(() => {
            let i = e.slice(0, 3).map((e) => e.guildId);
            for (let e = 0; e < t.length && i.length < 3; e++) {
                let n = t[e];
                i.includes(n) || i.push(n);
            }
            return i;
        }, [e, t]);
    return 0 === i.length
        ? null
        : (0, f.jsxs)("div", {
              className: mx.i,
              children: [
                  (0, f.jsx)(eh.D, { variant: "heading-md/semibold", children: m.intl.string(m.t.r90Wgo) }),
                  (0, f.jsx)("div", { className: mx.k, children: i.map((e) => (0, f.jsx)(g3, { guildId: e }, e)) }),
              ],
          });
}
var mS = i(140909);
function mp(e) {
    let { count: t, disabledReason: n } = e,
        s = to.A.getArticleURL(Q.MVz.GUILD_BOOSTING_FAQ);
    return (0, f.jsxs)(mA.h, {
        color: "nitro-pink",
        className: mS.vK,
        children: [
            (0, f.jsxs)("div", {
                className: mS.nw,
                children: [
                    (0, f.jsxs)("div", {
                        className: mS.MD,
                        children: [
                            (0, f.jsx)("img", { alt: "", className: mS.F8, src: g4 }),
                            (0, f.jsx)("div", {
                                className: eF()(mS.qS, "theme-dark"),
                                children: (0, f.jsx)("span", { className: mS.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, f.jsxs)("div", {
                        className: mS.Tm,
                        children: [
                            (0, f.jsx)(k.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: m.intl.format(m.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, f.jsxs)("div", {
                                className: mS.xv,
                                children: [
                                    (0, f.jsx)(oK.t, { className: mS.nE }),
                                    (0, f.jsx)(k.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: m.intl.format(m.t["6UAu+f"], {
                                            count: sf.M4,
                                            boostCount: sf.M4,
                                            helpdeskArticle: s,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, f.jsx)(gD.A, {
                shouldShow: null != n,
                text: n ?? "",
                "aria-label": n,
                children: (e) =>
                    (0, f.jsx)(eE.$, {
                        ...e,
                        variant: "primary",
                        size: "sm",
                        icon: cP._,
                        text: m.intl.string(m.t.BMx1iy),
                        disabled: null != n,
                        onClick: () => {
                            (0, C.openModalLazy)(async () => {
                                let { default: e } = await Promise.resolve().then(i.bind(i, 770101));
                                return (t) =>
                                    (0, f.jsx)(e, {
                                        ...t,
                                        onSelectGuild: (e) => {
                                            t.onClose(),
                                                (0, gG.g)({
                                                    analyticsLocations: [],
                                                    analyticsLocation: {
                                                        page: Q.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                        section: Q.JJy.SETTINGS_PREMIUM,
                                                        object: Q.ZSU.BUTTON_CTA,
                                                        objectType: Q.AnalyticsObjectTypes.BUY,
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
function mf(e) {
    let { premiumSubscription: t } = e,
        i = (0, R.bG)([gt.A], () => gt.A.boostSlots),
        n = N.useMemo(() => Object.values(i), [i]),
        s = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()),
        l = (0, R.bG)([ge.A], () => ge.A.affinities),
        r = (0, R.bG)([W.Ay], () => W.Ay.getFlattenedGuildIds()),
        a = l.length > 0 || r.length > 0,
        o = N.useMemo(() => n.filter((e) => null != e.premiumGuildSubscription), [n]).length,
        u = (0, R.bG)([ck.A], () => ck.A.getCurrentUserAppliedBoosts()),
        { fractionalState: d } = (0, cw.A)({ forceFetch: !0 }),
        c = s?.isPremiumGroupMember(),
        g = t?.isPausedOrPausePending === !0 && d === sf.xc.NONE,
        A = N.useMemo(() => n.some((e) => null == e.premiumGuildSubscription && e.isAvailable()), [n]),
        h = g ? m.intl.string(m.t.mOWsF1) : A ? void 0 : m.intl.string(m.t.xr4m5B),
        E = N.useMemo(() => {
            if (null == t) return 0;
            let e = o2.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== n.length ? 0 : Math.max(0, e - o);
        }, [t, n.length, o]);
    return (0, f.jsxs)("div", {
        className: gQ.GO,
        children: [
            (0, f.jsx)(dU.kb, { className: gQ.ek }),
            (0, f.jsx)(mm, {}),
            (0, f.jsx)(mE, {}),
            E > 0 && (0, f.jsx)(mp, { count: E, disabledReason: h }),
            c && (0, f.jsx)(c9.A, {}),
            !a && (0, f.jsx)(gL, {}),
            (0, f.jsxs)("div", {
                className: gQ.C_,
                children: [
                    (0, f.jsx)(mn, {
                        guildBoostSlots: n,
                        guildBoostSlotsByGuildId: i,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: u,
                        fractionalPremiumState: d,
                    }),
                    (0, f.jsx)(mT, {}),
                    (0, f.jsx)(g$.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, f.jsx)(mr, {}),
                    (0, f.jsx)(mu, {}),
                ],
            }),
        ],
    });
}
var mN = i(65188);
let m_ = (0, o.E2)(d.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            let e = cV.useConfig({ location: "UserSettingsPremiumGuildSubscriptions" }).enabled;
            N.useEffect(() => {
                n6.h.wait(() => {
                    u5.hP(), u5.$o(), (0, cG.CD)(), (0, cU.zS)(null, null, Q.tF5.DISCOVERY), (0, cG.tO)(!0);
                });
            }, []);
            let { hasFetchedSubscriptions: t, premiumSubscription: i } = (0, R.cf)([dy.A], () => ({
                    hasFetchedSubscriptions: dy.A.hasFetchedSubscriptions(),
                    premiumSubscription: dy.A.getPremiumTypeSubscription(),
                })),
                n = (0, cM.Y)(),
                s = (0, R.bG)([dj.A], () => dj.A.hasFetchedPaymentSources),
                l = (0, R.bG)([ck.A], () => ck.A.isFetchingCurrentUserAppliedBoosts),
                r = !t || !n || !s || l,
                [a, o] = N.useState(!1);
            return (r || a || o(!0), r && !a)
                ? (0, f.jsx)("div", { className: eF()(mN.kL, mN.Lq), children: (0, f.jsx)(u3.y, {}) })
                : (0, f.jsxs)("div", {
                      className: mN.kL,
                      children: [
                          (0, f.jsx)("div", { className: mN.Tp }),
                          (0, f.jsx)("div", {
                              className: mN.Qs,
                              children: e
                                  ? (0, f.jsx)(mf, { premiumSubscription: i })
                                  : (0, f.jsx)(gJ, { premiumSubscription: i }),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [m.intl.string(m.t["+CbP2v"]), m.intl.string(m.t.Nn1lJy)],
    }),
    mC = (0, o.zZ)(d.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [m_] }),
    mI = (0, o.t_)(d.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => m.intl.string(m.t["+CbP2v"]),
        buildLayout: () => [mC],
    }),
    mb = (0, o.i4)(d.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t["+CbP2v"]),
        icon: cP._,
        buildLayout: () => [mI],
    });
var mv = i(153659),
    mj = i(155984),
    my = i(357758),
    mO = i(262077),
    mR = i(696986),
    mL = i(819411);
function mD(e) {
    let { onClickManageSubscription: t, count: i } = e;
    return (0, f.jsxs)("div", {
        children: [
            (0, f.jsx)(eh.D, { variant: "heading-md/bold", children: m.intl.string(m.t["KzCF/6"]) }),
            (0, f.jsx)(mR.h, { size: 4 }),
            (0, f.jsx)(k.E, { variant: "text-md/normal", className: mL.yV, children: m.intl.string(m.t["3D7qCu"]) }),
            (0, f.jsx)(mR.h, { size: 24 }),
            (0, f.jsxs)("div", {
                className: mL.Nr,
                children: [
                    (0, f.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: mL.RI }),
                    (0, f.jsxs)("div", {
                        className: mL.FS,
                        children: [
                            (0, f.jsx)(eh.D, {
                                variant: "heading-xl/semibold",
                                className: mL.wx,
                                children: m.intl.string(m.t["KzCF/6"]),
                            }),
                            (0, f.jsx)(k.E, {
                                variant: "text-md/normal",
                                className: mL.h_,
                                children: m.intl.format(m.t["m+pcOO"], { numSubscriptions: i }),
                            }),
                        ],
                    }),
                    (0, f.jsx)(eE.$, {
                        size: "sm",
                        variant: "overlay-primary",
                        text: m.intl.string(m.t["3a8Xxj"]),
                        onClick: t,
                    }),
                ],
            }),
        ],
    });
}
var mP = i(872351),
    mG = i(9113),
    mU = i(599941),
    mM = i(384684),
    mV = i(2242);
let mk = [];
var mw = i(912851),
    mF = i(146795);
let mB = (e) => {
    let { label: t, onClick: i, submitting: n } = e;
    return (0, f.jsx)(V.D, {
        onClick: n ? void 0 : i,
        className: mF.x6,
        children: (0, f.jsxs)("div", {
            className: mF.hQ,
            children: [
                n
                    ? (0, f.jsx)(u3.y, { type: u3.y.Type.PULSING_ELLIPSIS, className: mF.__invalid_spinner })
                    : (0, f.jsx)(k.E, { variant: "text-md/medium", className: mF.Pf, children: t }),
                (0, f.jsx)(w.a, { size: "md", color: "currentColor", className: mF.UE }),
            ],
        }),
    });
};
var mz = i(465932),
    mY = i(543767),
    mX = i(420139),
    mH = i(790284),
    mK = i(636194),
    mW = i(624456),
    mZ = i(710144),
    mq = i(815332),
    mQ = i(817649),
    mJ = i(969389);
let m$ = (e) => {
    let { transitionState: t, groupListing: i, listing: n, subscription: s, onClose: l } = e,
        r = (0, sS.GV)(),
        { analyticsLocations: a } = (0, nU.Ay)(eV.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: o,
            error: u,
            submitting: d,
        } = ((e) => {
            let [t, i] = N.useState(!1),
                [n, s] = N.useState(null);
            return {
                cancelSubscription: async (t) => {
                    try {
                        return i(!0), await u5.M2(t, e), !0;
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
        g = n.role_benefits.benefits.filter((e) => e.ref_type === mV.bN.CHANNEL),
        A = n.role_benefits.benefits.filter((e) => e.ref_type === mV.bN.INTANGIBLE),
        h = ry()(s.currentPeriodEnd).format("MMMM Do, YYYY"),
        E = m.intl.formatToPlainString(m.t.KsMRP5, {
            numChannels: g.length,
            numAdditionalBenefits: A.length,
            subscriptionEndDate: h,
        });
    return (0, f.jsx)(lL.Modal, {
        transitionState: t,
        "aria-labelledby": r,
        actions: [
            { text: m.intl.string(m.t.EP6EPb), variant: "secondary", onClick: l },
            { variant: "critical-primary", text: m.intl.string(m.t.F6lUDF), onClick: c, loading: d },
        ],
        title: m.intl.string(m.t.O6l5tM),
        subtitle: E,
        onClose: l,
        children: (0, f.jsxs)(L.B, {
            gap: 8,
            children: [
                null != u ? (0, f.jsx)(O.w, { type: "critical", children: u.message }) : null,
                (0, f.jsx)(mQ.x, { listingId: n.id, guildId: i.guild_id, className: mJ.P }),
            ],
        }),
    });
};
var m0 = i(319225),
    m1 = i(746080),
    m2 = i(47685);
let m3 = (e) => {
        let { label: t, value: i, showInfoIcon: n, infoIconTooltipText: s } = e;
        return (0, f.jsxs)("div", {
            className: m2.L0,
            children: [
                (0, f.jsxs)("div", {
                    className: m2.a5,
                    children: [
                        (0, f.jsx)(eh.D, { variant: "heading-deprecated-12/semibold", className: m2.HU, children: t }),
                        n &&
                            (0, f.jsx)(e1.m, {
                                text: s,
                                children: (0, f.jsx)(lN.m, { size: "xs", color: "currentColor", className: m2.Mo }),
                            }),
                    ],
                }),
                (0, f.jsx)(eh.D, { variant: "heading-xl/semibold", className: m2.sx, children: i }),
            ],
        });
    },
    m6 = (e) => {
        let { subscription: t } = e,
            { analyticsLocations: i } = (0, nU.Ay)(),
            [n] = (0, mY.YV)({
                subscriptionId: t.id,
                renewal: !0,
                analyticsLocations: i,
                analyticsLocation: eV.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
            }),
            s = (0, R.bG)([dj.A], () => dj.A.hasFetchedPaymentSources);
        return null != n && s
            ? (0, f.jsx)(mX.A, { subscription: t, currentInvoicePreview: n, dropdownClassName: m2.Nw })
            : (0, f.jsx)(u3.y, {});
    },
    m4 = (e) => {
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
            : (0, f.jsx)(sy.D, {
                  label: m.intl.string(m.t["4neDM+"]),
                  children: (0, f.jsx)("div", {
                      className: m2.__invalid_rowButtons,
                      children: i
                          ? (0, f.jsx)(eE.$, {
                                variant: "primary",
                                text: m.intl.string(m.t.y3mAE4),
                                onClick: r,
                                loading: n,
                            })
                          : (0, f.jsxs)(f.Fragment, {
                                children: [
                                    !t && !s && (0, f.jsx)(mB, { label: m.intl.string(m.t.FRbWR8), onClick: a }),
                                    (0, f.jsx)(mB, { label: m.intl.string(m.t.Dx0lF7), onClick: l }),
                                ],
                            }),
                  }),
              });
    },
    m7 = (e) => {
        let { subscription: t } = e,
            {
                listing: i,
                groupListing: n,
                guild: s,
                expanded: l,
                handleToggleExpanded: r,
                subscriptionInfo: a,
            } = (function (e) {
                let t = (0, mW.M)(e),
                    i = (0, R.bG)([mK.A], () => mK.A.getSubscriptionListingForPlan(t)),
                    n = (0, R.bG)([mK.A], () =>
                        null != i ? mK.A.getSubscriptionGroupListingForSubscriptionListing(i.id) : null,
                    ),
                    s = (0, R.bG)([K.A], () => K.A.getGuild(n?.guild_id)),
                    [l, r] = N.useState(!1),
                    { fetchSubscriptionsSettings: a } = (0, mU.XE)();
                N.useEffect(() => {
                    l && null != s && null == mK.A.getSubscriptionSettings(s.id) && a(s.id);
                }, [l, s, a]);
                let o =
                    null == i
                        ? void 0
                        : (function (e) {
                              let { subscription: t } = e,
                                  i = ry()(t.currentPeriodEnd).format("M/D/YY"),
                                  n = null != t.price ? (0, dt.$g)(t.price, t.currency) : "",
                                  s = ry()(t.createdAt).format("M/D/YY"),
                                  l = t.status === Q.Dmq.CANCELED,
                                  r = t.status === Q.Dmq.PAST_DUE,
                                  a = t.hasActiveTrial;
                              return {
                                  memberSince: s,
                                  nextRenewalDate: i,
                                  nextRenewalLabel: l ? m.intl.string(m.t.UAfot2) : m.intl.string(m.t.CVjLcM),
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
            [o, u] = N.useState(!1),
            c = (0, sS.GV)(),
            { analyticsLocations: g } = (0, nU.Ay)(),
            { shouldHideGuildPurchaseEntryPoints: A } = (0, mz.MH)(s?.id),
            h = t?.isPurchasedViaAppleGeneric;
        if (null == n || null == i || null == a) return null;
        let E = async () => {
                try {
                    u(!0),
                        await u5.QP(t, g),
                        (0, m0.E)({ title: m.intl.string(m.t.oPV2cy), body: m.intl.string(m.t.DdRizV) });
                } finally {
                    u(!1);
                }
            },
            {
                isCancelled: x,
                isPastDue: T,
                subscriptionPrice: S,
                memberSince: p,
                nextRenewalDate: _,
                nextRenewalLabel: I,
                isTrial: b,
            } = a,
            v = i.soft_deleted || null == s || h;
        return (0, f.jsxs)("div", {
            className: m2.kL,
            children: [
                (0, f.jsx)(mZ.A, {
                    onClick: r,
                    className: m2.N1,
                    children: (e) => {
                        let { areaRef: t, handleStopPropagation: n } = e;
                        return (0, f.jsxs)(f.Fragment, {
                            children: [
                                null != s && (0, f.jsx)(gh.Ay, { guild: s, active: !0, size: gh.Ay.Sizes.MEDIUM }),
                                (0, f.jsxs)("div", {
                                    className: m2.if,
                                    children: [
                                        (0, f.jsx)(k.E, {
                                            variant: "text-md/medium",
                                            className: m2.J5,
                                            children: null != s ? s.name : m.intl.string(m.t["He+cmd"]),
                                        }),
                                        (0, f.jsxs)("div", {
                                            className: m2.xp,
                                            children: [
                                                (0, f.jsx)(k.E, {
                                                    variant: "text-sm/normal",
                                                    className: m2.KR,
                                                    children: i.name,
                                                }),
                                                x
                                                    ? (0, f.jsx)(n8.Lp, { text: m.intl.string(m.t["7uFZGt"]) })
                                                    : b
                                                      ? (0, f.jsx)(n8.Lp, {
                                                            text: m.intl.string(m.t["6anton"]),
                                                            color: F.A.unsafe_rawColors.BRAND_500.css,
                                                        })
                                                      : T
                                                        ? (0, f.jsx)(e1.m, {
                                                              text: m.intl.string(m.t.eSuJE2),
                                                              children: (0, f.jsx)("div", {
                                                                  children: (0, f.jsx)(n8.Lp, {
                                                                      className: m2.qc,
                                                                      text: m.intl.string(m.t.NrRwIl),
                                                                      color: F.A.unsafe_rawColors.YELLOW_300.css,
                                                                  }),
                                                              }),
                                                          })
                                                        : null,
                                                h
                                                    ? (0, f.jsx)(e1.m, {
                                                          text: m.intl.string(m.t.nv1IqK),
                                                          children: (0, f.jsx)("div", {
                                                              children: (0, f.jsx)(n8.Lp, {
                                                                  text: m.intl.string(m.t["sBl3X/"]),
                                                                  color: F.A.colors.BACKGROUND_MOD_MUTED.css,
                                                              }),
                                                          }),
                                                      })
                                                    : null,
                                            ],
                                        }),
                                    ],
                                }),
                                (0, f.jsx)(V.D, {
                                    onClick: n(r),
                                    "aria-label": m.intl.string(m.t.e5eQOy),
                                    "aria-controls": c,
                                    "aria-expanded": l,
                                    focusProps: { ringTarget: t },
                                    children: (0, f.jsx)(w.a, {
                                        size: "md",
                                        color: "currentColor",
                                        className: eF()(m2.D6, { [m2.S7]: l }),
                                    }),
                                }),
                            ],
                        });
                    },
                }),
                l
                    ? (0, f.jsxs)("div", {
                          id: c,
                          children: [
                              (0, f.jsx)("div", { className: m2.yF }),
                              (0, f.jsx)(mq.A, { groupListingId: n.id, subscription: t, className: m2.kE }),
                              (0, f.jsxs)("div", {
                                  className: m2.Zx,
                                  children: [
                                      (0, f.jsx)(m3, { label: I, value: _ }),
                                      (0, f.jsx)(m3, {
                                          label: m.intl.string(m.t.dltUMH),
                                          value: S,
                                          showInfoIcon: b,
                                          infoIconTooltipText: b ? m.intl.string(m.t["/q6fpa"]) : void 0,
                                      }),
                                      (0, f.jsx)(m3, { label: m.intl.string(m.t.AOcwWB), value: p }),
                                  ],
                              }),
                              (0, f.jsx)(mR.h, { size: 16 }),
                              !x &&
                                  !h &&
                                  (0, f.jsx)(sy.D, {
                                      label: m.intl.string(m.t.wmMFvA),
                                      children: (0, f.jsx)(m6, { subscription: t }),
                                  }),
                              !v &&
                                  (0, f.jsx)(m4, {
                                      isTrial: b,
                                      isCancelled: x,
                                      isResubscribing: o,
                                      shouldHideRoleSubscriptionEntryPoints: A,
                                      onCancelSubscriptionClick: () => {
                                          if (null != s) {
                                              var e;
                                              (e = { groupListing: n, listing: i, subscription: t }),
                                                  (0, C.openModal)((t) => (0, f.jsx)(m$, { ...t, ...e }));
                                          }
                                      },
                                      onChangePlanClick: () => {
                                          null != s &&
                                              ((0, sO.pX)(Q.BVt.CHANNEL(s.id, m1.VV.ROLE_SUBSCRIPTIONS)),
                                              (0, sE.default)(),
                                              mw.A.show(
                                                  Q.kqX.BACK_TO_PREVIOUS_SCREEN,
                                                  void 0,
                                                  m.intl.string(m.t.DvbaM4),
                                                  () => {
                                                      mH.A.setState({ subsection: nv.nR }),
                                                          (0, ey.openUserSettings)(d.X.SUBSCRIPTIONS_PANEL);
                                                  },
                                              ));
                                      },
                                      onResubscribeClick: E,
                                  }),
                          ],
                      })
                    : null,
            ],
        });
    };
var m5 = i(170272);
let m8 = (e) => {
    let { onGoBack: t } = e,
        i = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, R.bG)([mM.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [mM.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                i = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (i = !0);
                            }),
                            i)
                                ? mV.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? mV.M_.NONE
                                  : mV.M_.IN_SUBSCRIPTION_SERVER;
                        })([mM.A]),
                    ) === mV.M_.SUBSCRIBED,
                i = (0, R.bG)([dy.A], () => dy.A.getActiveGuildSubscriptions()),
                n = N.useRef(!1);
            return (
                N.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: i, hasRoleSubscriptions: n } = e,
                            s = dy.A.getActiveGuildSubscriptions();
                        return (
                            ((s?.length ?? 0) === 0 && !!n) || (!!t && !i) || (!i && !dy.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: n.current }) &&
                        ((n.current = !0), u5.hP());
                }, [e, t]),
                i ?? mk
            );
        })(),
        { loading: n } = (0, mU.eb)(i);
    return ((0, mG.A)(ds.Fr ? "role-subscriptions-user-setting" : void 0), n)
        ? (0, f.jsx)(u3.y, {})
        : 0 === i.length
          ? null
          : (0, f.jsxs)("div", {
                children: [
                    (0, f.jsx)(eE.$, { text: m.intl.string(m.t.hqyhKQ), icon: mP.z, variant: "secondary", onClick: t }),
                    (0, f.jsx)(mR.h, { size: 10 }),
                    (0, f.jsx)(io.n, {
                        label: m.intl.string(m.t["KzCF/6"]),
                        description: m.intl.string(m.t["Y+ucR7"]),
                        children: (0, f.jsx)("div", {
                            className: m5.A,
                            children: i.map((e) => (0, f.jsx)(m7, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var m9 = i(327479),
    Ae = i(334335);
function At(e) {
    let { onClickManageSubscription: t, count: i } = e;
    return (0, f.jsxs)("div", {
        children: [
            (0, f.jsx)(eh.D, { variant: "heading-md/bold", children: m.intl.string(m.t["48ywCu"]) }),
            (0, f.jsx)(mR.h, { size: 4 }),
            (0, f.jsx)(k.E, { variant: "text-md/normal", className: Ae.yV, children: m.intl.string(m.t.VWxmSo) }),
            (0, f.jsx)(mR.h, { size: 24 }),
            (0, f.jsxs)("div", {
                className: Ae.Nr,
                children: [
                    (0, f.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: Ae._e }),
                    (0, f.jsxs)("div", {
                        className: Ae.FS,
                        children: [
                            (0, f.jsx)(eh.D, {
                                variant: "heading-xl/semibold",
                                className: Ae.wx,
                                children: m.intl.string(m.t["48ywCu"]),
                            }),
                            (0, f.jsx)(k.E, {
                                variant: "text-md/normal",
                                className: Ae.h_,
                                children: m.intl.format(m.t["/esXLj"], { numSubscriptions: i }),
                            }),
                        ],
                    }),
                    (0, f.jsx)(m9.A, { onClick: t, text: m.intl.string(m.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var Ai = i(548411),
    An = i(417098),
    As = i(143582),
    Al = i(915043),
    Ar = i(920087);
function Aa(e) {
    let { className: t, header: i, headerClassName: n, children: s } = e,
        l = N.useMemo(() => {
            let e = !1;
            return (
                N.Children.forEach(s, (t) => {
                    null != t && (e = !0);
                }),
                e
            );
        }, [s]);
    return (0, f.jsxs)("div", {
        className: eF()(Ar.iE, t),
        children: [
            (0, f.jsx)("div", { className: eF()(Ar.wx, n), children: i }),
            l && (0, f.jsx)("div", { className: Ar.Qs, children: s }),
        ],
    });
}
var Ao = i(885996),
    Au = i(144165),
    Ad = i(664121),
    Ac = i(950305),
    Ag = i(943775),
    Am = i(123791),
    AA = i(900797),
    Ah = i(632510);
let AE = N.createContext({ isOpen: !1, toggleOpen: () => {} });
function Ax(e) {
    let { children: t } = e,
        [i, n] = N.useReducer((e) => !e, !1),
        s = N.useMemo(() => ({ isOpen: i, toggleOpen: n }), [i]);
    return (0, f.jsx)(AE.Provider, { value: s, children: t(i) });
}
Ax.Toggle = function (e) {
    let { className: t, text: i } = e,
        { isOpen: n, toggleOpen: s } = N.useContext(AE),
        l = n ? AA.t : w.a,
        r = null != i ? i : n ? m.intl.string(m.t.fgq1gs) : m.intl.string(m.t.XJuakA);
    return (0, f.jsxs)(V.D, {
        className: eF()(Ah.L, t),
        onClick: s,
        children: [
            (0, f.jsx)(k.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, f.jsx)(l, { size: "sm", color: "currentColor" }),
        ],
    });
};
var AT = i(627363),
    AS = i(243217),
    Ap = i(328968),
    Af = i(163437),
    AN = i(3432);
function A_(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var AC = i(184451),
    AI = (((s = {})[(s.LOADING = 0)] = "LOADING"), (s[(s.DONE = 1)] = "DONE"), (s[(s.ERROR = 2)] = "ERROR"), s);
function Ab(e) {
    let { subscription: t, navigateToSwitchPlan: i, loadingState: n } = e,
        s = t.metadata?.application_subscription_guild_id,
        { renewalMutations: l, planId: r } = t,
        {
            appId: a,
            plan: o,
            storeListing: u,
            isGuildSubscription: d,
            subscriptionForGuild: c,
            sku: g,
            isCancelled: A,
            isOrphanedGuildSubscription: h,
            renewalPlan: E,
        } = (0, R.cf)([cc.A, cg.A, Ap.A, K.A], () => {
            let e,
                i = cc.A.get(r),
                n = null != i ? cg.A.get(i.skuId) : void 0,
                a = n?.applicationId,
                o = null != i ? Ap.A.getForSKU(i.skuId) : null,
                u = null != o && (0, Af.PJ)(o.skuFlags),
                d = u && null != s ? K.A.getGuild(s) : void 0,
                c = (0, Af.Uo)(t, n),
                g = u && null != s && null == d;
            if (!1 === c && null != l && l.items.length > 0) {
                let t = l.items[0];
                e = cc.A.get(t.planId) ?? void 0;
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
        { data: x } = (0, AT.YY)(a),
        T = N.useMemo(() => (null != x ? (0, Ag.A)(x, 100) : null), [x]),
        S = g?.deleted ?? !1,
        p = null != g && (0, Af.Se)(g),
        _ = t.status === Q.Dmq.PAST_DUE,
        { analyticsLocations: C } = (0, nU.Ay)(),
        [I] = (0, mY.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: C,
            analyticsLocation: eV.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        b = A_(t.currentPeriodEnd),
        v = 0 === n;
    return (0, f.jsxs)(Aa, {
        headerClassName: AC.dL,
        header:
            !1 === v
                ? (0, f.jsxs)(f.Fragment, {
                      children: [
                          (0, f.jsxs)("div", {
                              className: AC.VW,
                              children: [
                                  null != T &&
                                      (0, f.jsx)(Au._, { src: T.href, imageClassName: AC.Z2, width: 40, height: 40 }),
                                  (0, f.jsxs)("div", {
                                      className: AC.aF,
                                      children: [
                                          (0, f.jsx)(eh.D, {
                                              variant: "heading-md/semibold",
                                              lineClamp: 1,
                                              children: x?.name ?? m.intl.string(m.t["7kqy7W"]),
                                          }),
                                          (0, f.jsx)(k.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              lineClamp: 1,
                                              children: o?.name ?? m.intl.string(m.t.sqkbMK),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, f.jsx)("div", {
                              className: AC.Pz,
                              children:
                                  null != x &&
                                  null != u &&
                                  null != g &&
                                  (0, f.jsx)(AR, {
                                      subscription: t,
                                      app: x,
                                      guild: c,
                                      sku: g,
                                      storeListing: u,
                                      isCancelled: A,
                                      isOrphanedGuildSubscription: h,
                                      navigateToSwitchPlan: i,
                                      renewalSkuId: E?.skuId,
                                  }),
                          }),
                      ],
                  })
                : (0, f.jsx)(u3.y, { type: u3.t.PULSING_ELLIPSIS }),
        children: [
            A &&
                (0, f.jsx)(AO, {
                    type: "warning",
                    title: p
                        ? m.intl.formatToPlainString(m.t.QOnM1y, { subscriptionPeriodEnd: b })
                        : m.intl.formatToPlainString(m.t.HOaZu8, { subscriptionPeriodEnd: b }),
                }),
            !A && h && (0, f.jsx)(AO, { type: "warning", title: m.intl.string(m.t.SmSP8Q) }),
            _ && (0, f.jsx)(AO, { type: "danger", title: m.intl.string(m.t.fvOqBo) }),
            (0, f.jsxs)("div", {
                className: AC.zH,
                children: [
                    (0, f.jsx)(Ay, {
                        title: m.intl.string(m.t["5D/KEH"]),
                        content: d
                            ? (0, f.jsxs)(f.Fragment, {
                                  children: [
                                      (0, f.jsxs)("span", {
                                          className: AC.yW,
                                          children: [(0, f.jsx)(Ad.R, { size: "xs" }), m.intl.string(m.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, f.jsxs)("span", {
                                              className: AC._t,
                                              children: [
                                                  (0, f.jsx)(k.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: m.intl.format(m.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, f.jsx)(gh.Ay, { guild: c, size: gh.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, f.jsxs)("span", {
                                  className: AC.yW,
                                  children: [(0, f.jsx)(Ac.n, { size: "xs" }), m.intl.string(m.t["6anEVv"])],
                              }),
                    }),
                    (0, f.jsx)(Av, { invoicePreview: I, subscriptionPlan: o }),
                    (0, f.jsx)(Ay, {
                        title: m.intl.string(m.t.dnUzb6),
                        content: A_(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, f.jsx)(Aj, { isCancelled: A, subscriptionPeriodEnd: b, renewalPlan: E }),
                ],
            }),
            (0, f.jsx)(AD, {
                subscription: t,
                currentInvoicePreview: I,
                loadingState: n,
                isDeleted: S,
                isCancelled: A,
            }),
            null != x &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, f.jsx)(AL, { appId: x.id, listingBenefits: u.benefits }),
        ],
    });
}
function Av(e) {
    let { subscriptionPlan: t, invoicePreview: i } = e;
    if (null == t) return (0, f.jsx)(Ay, { title: m.intl.string(m.t.KI7ERx), content: "" });
    let n = (0, dt.CE)((0, dt.$g)(t.price, t.currency), t.interval, t.intervalCount),
        s = i?.findInvoiceItemByPlanId(t.id);
    if (null == s) return (0, f.jsx)(Ay, { title: m.intl.string(m.t.KI7ERx), content: n });
    let l = (0, dt.CE)((0, dt.$g)(s.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, f.jsx)(Ay, {
        title: m.intl.string(m.t.KI7ERx),
        content: (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(k.E, { variant: "text-sm/semibold", children: l }),
                l !== n &&
                    (0, f.jsx)(e1.m, {
                        text: m.intl.format(m.t["6DoE57"], { listPrice: n }),
                        position: "bottom",
                        children: (0, f.jsx)(k.E, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: (0, f.jsx)("s", { children: n }),
                        }),
                    }),
            ],
        }),
    });
}
function Aj(e) {
    let { isCancelled: t, subscriptionPeriodEnd: i, renewalPlan: n } = e;
    if (null != n) {
        let e = (0, dt.CE)((0, dt.$g)(n.price, n.currency), n.interval, n.intervalCount);
        return (0, f.jsx)(Ay, {
            title: m.intl.string(m.t.hIhAM3),
            content: (0, f.jsxs)(f.Fragment, {
                children: [
                    (0, f.jsx)(k.E, { variant: "text-sm/medium", children: i }),
                    (0, f.jsx)(k.E, {
                        variant: "text-sm/normal",
                        children: m.intl.format(m.t.MCLbvj, { planName: n.name, price: e }),
                    }),
                ],
            }),
        });
    }
    return (0, f.jsx)(Ay, { title: t ? m.intl.string(m.t.enxcAl) : m.intl.string(m.t["Ms+6Zq"]), content: i });
}
function Ay(e) {
    let { title: t, content: i } = e;
    return (0, f.jsxs)("div", {
        className: AC.nM,
        children: [
            (0, f.jsx)(k.E, { variant: "text-sm/medium", children: t }),
            (0, f.jsx)(k.E, { variant: "text-sm/medium", className: AC.u4, children: i }),
        ],
    });
}
function AO(e) {
    let { type: t, title: i } = e;
    return (0, f.jsx)(ta.p, {
        messageType: "warning" === t ? ta.Y.WARNING : ta.Y.ERROR,
        className: AC.Xm,
        children: (0, f.jsx)(k.E, { variant: "text-sm/normal", children: i }),
    });
}
function AR(e) {
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
        c = (0, Af.Se)(s),
        { analyticsLocations: g } = (0, nU.Ay)(),
        [A, h] = N.useState(!1),
        E = (0, Am.C)(t.id),
        x = (0, R.bG)([cg.A], () => cg.A.getParentSKU(n.skuId), [n.skuId]),
        T = N.useMemo(() => {
            var e, t;
            let i;
            return null == x
                ? []
                : ((e = n.id),
                  (t = E.subscriptions),
                  (i = new Set(x.bundledSkuIds)),
                  t.filter((t) => t.id !== e && i.has(t.skuId)));
        }, [n.id, E, x]),
        S = 0 !== T.length,
        p = async () => {
            try {
                h(!0);
                let { subscription: e } = await (0, u5.QP)(l, g);
                if (null == e) return;
                (0, C.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([i.e("47869"), i.e("52396")]).then(i.bind(i, 115623));
                    return (i) => (0, f.jsx)(t, { ...i, storeListing: n, subscription: AS.A.createFromServer(e) });
                });
            } finally {
                h(!1);
            }
        };
    return (0, f.jsxs)("div", {
        className: AC.fw,
        children: [
            c || (r && a)
                ? null
                : r
                  ? (0, f.jsx)(eE.$, {
                        variant: "secondary",
                        size: "sm",
                        text: m.intl.string(m.t.QtMnkW),
                        onClick: p,
                        loading: A,
                    })
                  : (0, f.jsx)(eE.$, {
                        variant: "secondary",
                        size: "sm",
                        text: m.intl.string(m.t["E8G/tr"]),
                        onClick: () => {
                            (0, C.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([i.e("1426"), i.e("22800")]).then(
                                    i.bind(i, 301139),
                                );
                                return (i) =>
                                    (0, f.jsx)(e, { ...i, application: t, storeListing: n, subscription: l, guild: o });
                            });
                        },
                    }),
            S &&
                null != x &&
                !1 === r &&
                !1 === a &&
                (0, f.jsx)(eE.$, {
                    variant: "primary",
                    size: "sm",
                    text: m.intl.string(m.t.R74ZBR),
                    onClick: () => {
                        d({
                            currentSubscription: l,
                            alternativeListings: T,
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
function AL(e) {
    let { appId: t, listingBenefits: i } = e;
    return (0, f.jsx)(Ax, {
        children: (e) =>
            (0, f.jsxs)("div", {
                className: AC.PX,
                children: [
                    (0, f.jsxs)("div", {
                        className: AC.wV,
                        children: [
                            e && (0, f.jsx)(k.E, { variant: "text-sm/semibold", children: m.intl.string(m.t.mORL67) }),
                            (0, f.jsx)(Ax.Toggle, {
                                className: AC.Bh,
                                text: e ? m.intl.string(m.t.gsbFAw) : m.intl.string(m.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? i.map((e) => {
                              let { id: i, name: n, description: s, icon: l } = e;
                              return (0, f.jsx)(Ao.FY, { header: n, icon: (0, AN.N)(t, l), description: s }, i);
                          })
                        : null,
                ],
            }),
    });
}
function AD(e) {
    let { subscription: t, currentInvoicePreview: i, loadingState: n, isDeleted: s, isCancelled: l } = e;
    return null == i
        ? null
        : 0 === n
          ? (0, f.jsx)("div", {
                className: AC.Ji,
                children: (0, f.jsx)(sy.D, {
                    label: m.intl.string(m.t.azZaZa),
                    children: (0, f.jsx)(u3.y, { type: u3.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === n
            ? (0, f.jsx)("div", {
                  className: AC.Ji,
                  children: (0, f.jsxs)(An.$T, {
                      color: An.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          m.intl.format(m.t.IIHUUF, { subscriptionId: t.id }),
                          (0, f.jsx)("br", {}),
                          m.intl.format(m.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, f.jsx)("div", {
                  className: AC.Ji,
                  children: (0, f.jsx)(sy.D, {
                      label: m.intl.string(m.t.azZaZa),
                      children: (0, f.jsx)(mX.A, { subscription: t, currentInvoicePreview: i, disabled: s || l }),
                  }),
              });
}
var AP = (((l = {}).HOME = "HOME"), (l.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), l);
i(938796);
var AG = i(38405);
let AU = (0, R.UT)(cc.A, {
    getQueryId: Q.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = cc.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && AG.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, cU.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var AM = i(240248),
    AV = i(237218),
    Ak = i(988325);
function Aw(e) {
    let { children: t, lineClamp: i = 2, ...n } = e,
        [s, l] = N.useState(!1),
        [r, a] = N.useState(null),
        o =
            null != r &&
            (0, f.jsx)("button", {
                className: Ak.x6,
                onClick: () => l((e) => !e),
                children: (0, f.jsxs)(k.E, {
                    className: Ak.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        s ? m.intl.string(m.t["JQX/Pb"]) : m.intl.string(m.t.Fbrd8J),
                        s
                            ? (0, f.jsx)(AA.t, { color: F.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, f.jsx)(w.a, { color: F.A.colors.TEXT_BRAND, size: "xs" }),
                    ],
                }),
            }),
        [u, d] = N.useState(null),
        c = N.useCallback(() => {
            if (null == u) return;
            let { scrollHeight: e, clientHeight: t } = u;
            e > t && a({ truncatedHeight: t, expandedHeight: e });
        }, [u]);
    N.useEffect(() => {
        requestAnimationFrame(c);
    }, [c, t, i]);
    let g = "auto";
    return (
        null != r && (g = s ? `${r.expandedHeight}px` : `${r.truncatedHeight}px`),
        (0, f.jsxs)("div", {
            children: [
                (0, f.jsx)(k.E, {
                    ...n,
                    className: Ak.Qs,
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
var AF = i(827991);
function AB(e) {
    let { cta: t, storeListing: i, className: n } = e,
        { applicationId: s, benefits: l, description: r } = i,
        a = N.useMemo(() => (null == i.thumbnail ? null : (0, AV.t)(s, i.thumbnail, 256)), [s, i.thumbnail]),
        { data: o } = AU(i.skuId),
        u = N.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, dt._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, f.jsxs)(Aa, {
              className: eF()(AF.iE, n),
              header: (0, f.jsxs)(f.Fragment, {
                  children: [
                      (0, f.jsxs)("div", {
                          className: AF.qd,
                          children: [
                              null != a &&
                                  (0, f.jsx)(Au._, { src: a.href, imageClassName: AF.rW, width: 48, height: 48 }),
                              (0, f.jsxs)("div", {
                                  children: [
                                      (0, f.jsx)(eh.D, { variant: "heading-md/bold", children: i.summary }),
                                      (0, f.jsx)(k.E, { variant: "text-md/medium", children: u }),
                                  ],
                              }),
                          ],
                      }),
                      t,
                  ],
              }),
              children: [
                  !(0, AM.uJ)(r) &&
                      (0, f.jsx)("div", {
                          className: AF.h_,
                          children: (0, f.jsx)(Aw, { variant: "text-sm/medium", children: r }),
                      }),
                  null != l &&
                      l.length > 0 &&
                      (0, f.jsx)("div", {
                          className: AF.PX,
                          children: l.map((e) => {
                              let { id: t, name: i, description: n, icon: l } = e;
                              return (0, f.jsx)(Ao.FY, { header: i, icon: (0, AN.N)(s, l), description: n }, t);
                          }),
                      }),
              ],
          });
}
var Az = i(185438),
    AY = i(386011);
function AX(e) {
    let {
            app: t,
            currentSubscription: i,
            currentListing: n,
            alternativeListings: s,
            navigateToHome: l,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, Ag.A)(t, 100),
        u = (0, Af.PJ)(r.flags),
        d = u ? Ad.R : Ac.n,
        c = u ? m.intl.string(m.t["46YF2D"]) : m.intl.string(m.t.fFyGiA),
        g = i.metadata?.application_subscription_guild_id,
        A = (0, R.bG)([K.A], () => (u && null != g ? K.A.getGuild(g) : void 0), [g, u]),
        h = (0, R.bG)([cg.A], () => {
            if (null != a) return cg.A.get(a);
        }, [a]),
        E = A_(i.currentPeriodEnd);
    return (0, f.jsxs)("div", {
        children: [
            (0, f.jsxs)("div", {
                className: AY.wx,
                children: [
                    null != o && (0, f.jsx)(Au._, { src: o.href, imageClassName: AY.Z2, width: 48, height: 48 }),
                    (0, f.jsxs)("div", {
                        children: [
                            (0, f.jsx)(eh.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, f.jsxs)("div", {
                                className: AY.p4,
                                children: [
                                    (0, f.jsxs)(eh.D, {
                                        variant: "heading-md/normal",
                                        className: AY.N4,
                                        children: [(0, f.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != A &&
                                        (0, f.jsxs)(f.Fragment, {
                                            children: [
                                                (0, f.jsx)(k.E, { variant: "text-md/normal", children: "\u2022" }),
                                                (0, f.jsxs)("span", {
                                                    className: AY.vP,
                                                    children: [
                                                        (0, f.jsx)(gh.Ay, { guild: A, size: gh.Ay.Sizes.SMOL }),
                                                        (0, f.jsx)(eh.D, {
                                                            variant: "heading-md/semibold",
                                                            color: "text-muted",
                                                            children: m.intl.format(m.t["7ZD8p1"], {
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
            (0, f.jsx)(Ax, {
                children: (e) =>
                    (0, f.jsxs)("div", {
                        className: AY._B,
                        children: [
                            (0, f.jsx)(k.E, { variant: "text-md/normal", children: m.intl.string(m.t["goe+hk"]) }),
                            e &&
                                (0, f.jsxs)(f.Fragment, {
                                    children: [
                                        (0, f.jsx)(k.E, {
                                            variant: "text-md/normal",
                                            children: m.intl.format(m.t["Q8qJ+5"], {}),
                                        }),
                                        (0, f.jsx)(k.E, {
                                            variant: "text-md/normal",
                                            children: m.intl.format(m.t.sqowYz, {}),
                                        }),
                                    ],
                                }),
                            (0, f.jsx)(Ax.Toggle, {
                                text: e ? m.intl.string(m.t["1Rkq/E"]) : m.intl.string(m.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, f.jsxs)("div", {
                className: AY.x0,
                children: [
                    (0, f.jsx)(AB, {
                        storeListing: n,
                        className: AY.o3,
                        cta: (0, f.jsxs)("div", {
                            className: AY.cJ,
                            children: [
                                (0, f.jsx)(k.E, {
                                    variant: "eyebrow",
                                    color: "text-brand",
                                    children: m.intl.string(m.t.fHIpOY),
                                }),
                                null != h &&
                                    (0, f.jsx)(k.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: m.intl.format(m.t["OQk+jr"], { endDate: E }),
                                    }),
                            ],
                        }),
                    }),
                    s.map((e) =>
                        e.skuId === a
                            ? (0, f.jsx)(
                                  AB,
                                  {
                                      storeListing: e,
                                      cta: (0, f.jsx)(k.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-subtle",
                                          children: m.intl.format(m.t.nn88hB, { startDate: E }),
                                      }),
                                  },
                                  e.id,
                              )
                            : (0, f.jsx)(AH, { storeListing: e, guildId: g, navigateToHome: l }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function AH(e) {
    let { storeListing: t, guildId: i, navigateToHome: n } = e,
        { openModal: s } = (0, Az.A)({
            analyticsLocation: Q.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: i,
            disableGuildSelector: !0,
            onComplete: n,
        });
    return (0, f.jsx)(AB, {
        storeListing: t,
        cta: (0, f.jsx)(eE.$, { variant: "primary", size: "sm", text: m.intl.string(m.t["+KwmBt"]), onClick: s }),
    });
}
class AK extends N.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, f.jsxs)(An.$T, {
                  color: An.Hv.DANGER,
                  style: { borderRadius: 0 },
                  children: [
                      m.intl.format(m.t.IIHUUF, { subscriptionId: this.props.subscription.id }),
                      " ",
                      m.intl.format(m.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                  ],
              })
            : this.props.children;
    }
}
function AW(e) {
    let { subscriptions: t, updateHeader: i } = e,
        [n, s] = N.useState({ route: AP.HOME }),
        { route: l } = n,
        r = () => {
            s({ route: AP.HOME });
        },
        a = (e) => {
            s({ route: AP.SWITCH_APP_PLANS, ...e }), i(m.intl.string(m.t.VFqtkP), r);
        },
        [o, u] = N.useState({});
    N.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: AI.LOADING })),
                (0, As._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: AI.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: AI.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, Al.E)(),
        c = d !== Al.mJ.LOADED;
    switch (l) {
        case AP.HOME:
            return (0, f.jsx)(f.Fragment, {
                children: t.map((e) =>
                    (0, f.jsx)(
                        AK,
                        {
                            subscription: e,
                            children: (0, f.jsx)(Ab, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? AI.LOADING : (o[e.id] ?? AI.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case AP.SWITCH_APP_PLANS:
            let { route: g, ...A } = n;
            return (0, f.jsx)(AX, { ...A, navigateToHome: r });
        default:
            (0, t4.xb)(l);
    }
}
var AZ = i(470464);
function Aq(e) {
    let { onGoBack: t } = e,
        i = (0, R.yK)(
            [dy.A],
            () =>
                dy.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [n, s] = N.useState();
    return (
        null == n && (n = (0, f.jsx)(AQ, { onBack: t, title: m.intl.string(m.t["DB/m9a"]) })),
        (0, f.jsxs)("div", {
            children: [
                n,
                (0, f.jsx)("div", {
                    className: AZ.A,
                    children: (0, f.jsx)(AW, {
                        subscriptions: i,
                        updateHeader: (e, t) => {
                            s(
                                (0, f.jsx)(AQ, {
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
function AQ(e) {
    let { onBack: t, title: i } = e;
    return (0, f.jsxs)("div", {
        className: AZ.D,
        children: [
            (0, f.jsx)(lp.K, {
                "aria-label": m.intl.string(m.t["13/7kX"]),
                icon: () => (0, f.jsx)(Ai.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, f.jsx)(eh.D, { variant: "heading-lg/semibold", children: i }),
        ],
    });
}
var AJ = i(881489),
    A$ = i(366999),
    A0 = i(466919),
    A1 = i(441924);
function A2(e) {
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
        ? ((t = m.intl.string(A0.default["/S02sx"])), (i = m.intl.string(A0.default.OPJNST)))
        : n
          ? ((t = m.intl.string(m.t["hT6i/0"])),
            (i = null != a ? m.intl.format(m.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = m.intl.string(m.t["3G0CTC"])),
            (i = r === sf.xc.FP_SUB_PAUSED ? m.intl.format(m.t.MMvaIG, { resumeDate: l.toDate() }) : null));
    let u = eF()({ [A1.Hs]: n, [A1.mT]: !n }),
        d = eF()({ [A1.CQ]: n, [A1.ZM]: !n }),
        c = eF()({ [A1.EM]: !n });
    return (0, f.jsxs)("div", {
        className: A1.r6,
        children: [
            (0, f.jsxs)("div", {
                className: A1.Nv,
                children: [
                    (0, f.jsx)(eh.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== i && (0, f.jsx)(k.E, { variant: "text-sm/normal", children: i }),
                ],
            }),
            !o &&
                (0, f.jsx)("div", {
                    className: A1.ZS,
                    children: (0, f.jsx)("div", {
                        className: u,
                        children: (0, f.jsx)(k.E, { variant: "text-sm/semibold", className: d, children: s }),
                    }),
                }),
        ],
    });
}
let A3 = function (e) {
    let { fractionalPremiumInfo: t, className: i, activationDate: n, hasPremiumGroup: s } = e,
        l = (0, o2.kX)(t),
        r = l.length > 0,
        a = (0, A$.Ay)(t.endsAt, A$.yE.SHORT_TIME),
        o = r ? l : a;
    return (0, f.jsx)("div", {
        children: (0, f.jsxs)("div", {
            className: eF()(i, A1.f8),
            children: [
                (0, f.jsx)("div", {
                    className: A1.J_,
                    children: (0, f.jsxs)("div", {
                        className: A1.Bh,
                        children: [
                            (0, f.jsx)("div", {
                                className: A1.xt,
                                children: (0, f.jsx)(oK.t, { size: "md", color: "white", className: A1.T8 }),
                            }),
                            (0, f.jsx)("div", {
                                className: A1.pt,
                                children: (0, f.jsx)(eh.D, {
                                    variant: "heading-md/semibold",
                                    children: m.intl.string(m.t.DFMPWS),
                                }),
                            }),
                            (0, f.jsx)(k.E, {
                                className: A1.PJ,
                                variant: "text-md/semibold",
                                children: l.length > 0 ? l : m.intl.string(m.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, f.jsx)(A2, {
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
var A6 = i(868942);
function A4(e) {
    let t,
        {
            user: i,
            planId: n,
            count: s,
            userPremiumSubscription: l,
            unconsumedFractionalPremiumUnits: r = [],
            hasPremiumGroup: a,
        } = e,
        [o, u] = (0, R.yK)([cc.A], () => [cc.A.get(n), null != l ? cc.A.get(l.planId) : null]);
    if (null == o || o2.Ay.getInterval(n).intervalType !== sf.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        c = o.skuId === d,
        g = o2.Ay.getDisplayName(n);
    if (a) t = m.intl.string(A0.default["5asczk"]);
    else if (c && null != l) {
        let e;
        e = new Date(l.status === Q.Dmq.PAUSED && null != l.pauseEndsAt ? l.pauseEndsAt : l.currentPeriodEnd);
        let i = (0, o2._e)(e, r);
        t = m.intl.formatToPlainString(m.t["5CNRRA"], { date: i ?? 0 });
    } else t = m.intl.formatToPlainString(m.t.eNXZ5O, { planName: g });
    let A = i.hasFreePremium() || (null != l && l.isPurchasedExternally);
    return (0, f.jsxs)("div", {
        className: A1.Bh,
        children: [
            (0, f.jsx)("div", {
                className: eF()({
                    [A1.sr]: o.skuId === sf.pe.TIER_0,
                    [A1.lP]: o.skuId === sf.pe.TIER_1,
                    [A1.eb]: o.skuId === sf.pe.TIER_2,
                }),
                children: (0, f.jsx)(oK.t, { size: "md", color: "currentColor", className: A1.Kk }),
            }),
            (0, f.jsxs)("div", {
                className: A1.pt,
                children: [
                    (0, f.jsx)(eh.D, {
                        variant: "heading-md/semibold",
                        children: m.intl.format(m.t.LzobT9, { planName: g }),
                    }),
                    !A &&
                        (0, f.jsx)(eh.D, {
                            className: A1.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, f.jsx)(k.E, {
                className: A1.PJ,
                variant: "text-md/semibold",
                children: m.intl.format(m.t["ess/xl"], { count: s }),
            }),
        ],
    });
}
let A7 = function (e) {
    let { className: t, entitlements: i } = e,
        n = eL()(Array.from(i))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: i, consumed: n } = e;
                return null != t && null != i && !n;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        s = (0, R.yK)([ce.A], () => ce.A.getUnactivatedFractionalPremiumUnits()),
        l = (0, R.bG)([dy.A], () => dy.A.getPremiumSubscription()),
        r = (0, R.bG)([dy.A], () => null == dy.A.getPremiumTypeSubscription()),
        a = Object.keys(n).some((e) => e === sf.gD.PREMIUM_MONTH_TIER_1),
        o = (0, R.bG)([t6.default], () => t6.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, f.jsxs)("div", {
        children: [
            (0, f.jsx)("div", {
                className: eF()(t, A1.xF, A1.J_),
                children: Object.keys(n).map((e) =>
                    (0, f.jsx)(
                        A4,
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
                (0, f.jsxs)("div", {
                    children: [
                        (0, f.jsx)(k.E, {
                            className: A1.eT,
                            variant: "text-md/normal",
                            children: m.intl.string(m.t["VNr4+O"]),
                        }),
                        (0, f.jsx)(A6.i, {}),
                    ],
                }),
        ],
    });
};
var A5 = i(50919);
function A8(e) {
    let t,
        { subscription: i, withOverheadSeparator: n } = e,
        { analyticsLocations: s } = (0, nU.Ay)(),
        [l] = (0, mY.YV)({
            subscriptionId: i.id,
            renewal: !0,
            analyticsLocations: s,
            analyticsLocation: eV.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == l) return null;
    let r = n ? A5.r : A5.a,
        a = l.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, o2.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = cc.A.get(o);
    tO()(null != u, "Missing plan");
    let d = (0, dt.$g)(l.total, l.currency);
    return (
        u.interval === sf.WT.YEAR
            ? (t = m.intl.format(m.t["jPz/39"], {
                  price: d,
                  termsUrl: Q.X7G.TERMS,
                  paidURL: Q.X7G.PAID_TERMS,
                  privacyUrl: Q.X7G.PRIVACY,
              }))
            : u.interval === sf.WT.MONTH &&
              (t =
                  1 === u.intervalCount
                      ? m.intl.format(m.t.m27GpI, {
                            price: d,
                            termsUrl: Q.X7G.TERMS,
                            paidURL: Q.X7G.PAID_TERMS,
                            privacyUrl: Q.X7G.PRIVACY,
                        })
                      : m.intl.format(m.t["9xf5Vx"], {
                            price: d,
                            termsUrl: Q.X7G.TERMS,
                            paidURL: Q.X7G.PAID_TERMS,
                            privacyUrl: Q.X7G.PRIVACY,
                            intervalCount: u.intervalCount,
                        })),
        (0, f.jsx)(k.E, { color: "text-muted", className: r, variant: "text-xs/normal", children: t })
    );
}
function A9(e) {
    let { subscription: t, withOverheadSeparator: i } = e;
    return t.status === Q.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, f.jsx)(A8, { subscription: t, withOverheadSeparator: i });
}
var he = i(735912),
    ht = i(558808);
let hi = { [nv.nR]: "role_subscriptions_panel", [nv.PZ]: "application_subscriptions_panel" };
function hn() {
    return (0, f.jsx)(ea.Z, {
        className: ht.wb,
        type: ea.Z.Types.CUSTOM,
        children: (0, f.jsxs)(lM.A, {
            align: lM.A.Align.CENTER,
            children: [
                (0, f.jsx)(e8.A, { game: null, size: e8.M.SMALL, className: ht.pV }),
                (0, f.jsx)("span", { className: ht.O, children: m.intl.string(m.t["jy/hyj"]) }),
            ],
        }),
    });
}
function hs(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, my._)(e, t));
}
function hl() {
    let e = (0, R.bG)([ce.A], () => ce.A.getForApplication(sf.tv), [], hs);
    return (
        N.useEffect(() => {
            (0, dJ.LM)(sf.tv);
        }, []),
        (0, f.jsx)(io.n, {
            label: m.intl.string(m.t["2GKrvn"]),
            description: m.intl.string(m.t.kNEjGm),
            children:
                null != e && o2.Ay.hasAccountCredit(e)
                    ? (0, f.jsx)(A7, { className: ht.fX, entitlements: e })
                    : (0, f.jsx)(hn, {}),
        })
    );
}
function hr() {
    return (0, f.jsx)("hr", { className: ht.hr });
}
let ha = function () {
        var e;
        let t = (0, R.bG)([dy.A], () => dy.A.getPremiumTypeSubscription()),
            i = (0, mO.A)({ subscriptionFilter: (e) => he.Hy.has(e.status) }),
            n = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()),
            s = i.length > 1,
            l = (0, R.bG)(
                [dj.A],
                () => (null != t && null != t.paymentSourceId ? dj.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, R.bG)([dy.A], () => dy.A.hasFetchedSubscriptions()),
            a = (0, R.bG)([de.A], () => de.A.isBusy),
            o = (0, cM.Y)(),
            u = mH.A.useField("subsection");
        N.useEffect(() => {
            (0, rf._)(null != u ? hi[u] : d.X.SUBSCRIPTIONS_PANEL);
        }, [u]);
        let c = (0, R.bG)([dy.A], () => dy.A.getActiveApplicationSubscriptions()?.length ?? 0),
            g = (0, R.bG)(
                [dy.A],
                () =>
                    Object.values(dy.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === Q.rzx.GUILD)
                        .filter((e) => e.status !== Q.Dmq.ENDED).length,
            ),
            A = (0, cw.A)({ forceFetch: !0 }),
            h = (0, AJ.ds)(),
            E = null !== t ? t.currentPeriodEnd : void 0,
            x =
                !(h && !(A.unactivatedUnits.length > 0)) &&
                (A.fractionalState !== sf.xc.NONE || A.unactivatedUnits.length > 0);
        return (N.useEffect(
            () => (
                n6.h.wait(() => {
                    (0, cU.zS)(), u5.hP(), (0, cG.CD)(), u5.$o();
                }),
                function () {
                    mH.A.resetState();
                }
            ),
            [],
        ),
        eC.A.enabled)
            ? (0, f.jsx)(u0.A, {})
            : r && o
              ? u === nv.nR
                  ? (0, f.jsx)(m8, { onGoBack: () => mH.A.setState({ subsection: null }) })
                  : u === nv.PZ
                    ? (0, f.jsx)(Aq, { onGoBack: () => mH.A.setState({ subsection: null }) })
                    : (0, f.jsx)("div", {
                          className: ht.kL,
                          children: (0, f.jsxs)("div", {
                              className: ht.Qs,
                              children: [
                                  s ? (0, f.jsx)(he.Sb, {}) : null,
                                  null != t
                                      ? (0, f.jsx)(he.Ay, {
                                            subscription: t,
                                            paymentSource: l,
                                            busy: a,
                                            subscriptions: i,
                                        })
                                      : (0, f.jsx)(he.TC, {}),
                                  x &&
                                      ((e = !!n?.isPremiumWithPremiumGroup()),
                                      (0, f.jsxs)("section", {
                                          children: [
                                              (0, f.jsx)(eh.D, {
                                                  variant: "heading-md/bold",
                                                  className: ht.HL,
                                                  children: m.intl.string(m.t.Obre8v),
                                              }),
                                              (0, f.jsx)(k.E, {
                                                  variant: "text-md/normal",
                                                  className: ht.JU,
                                                  children: m.intl.format(m.t["7Zi06b"], {
                                                      helpCenterLink: to.A.getArticleURL(
                                                          Q.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, f.jsx)(A3, {
                                                  className: ht.fX,
                                                  fractionalPremiumInfo: A,
                                                  activationDate: E,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, f.jsx)(hl, {}),
                                  g > 0 &&
                                      (0, f.jsxs)(f.Fragment, {
                                          children: [
                                              (0, f.jsx)(hr, {}),
                                              (0, f.jsx)(mD, {
                                                  count: g,
                                                  onClickManageSubscription: () => mH.A.setState({ subsection: nv.nR }),
                                              }),
                                          ],
                                      }),
                                  c > 0 &&
                                      (0, f.jsxs)(f.Fragment, {
                                          children: [
                                              (0, f.jsx)(hr, {}),
                                              (0, f.jsx)(At, {
                                                  count: c,
                                                  onClickManageSubscription: () => {
                                                      mH.A.setState({ subsection: nv.PZ }),
                                                          X.default.track(
                                                              Q.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                          );
                                                  },
                                              }),
                                          ],
                                      }),
                                  (0, f.jsx)(hr, {}),
                                  null != t ? (0, f.jsx)(A9, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, f.jsx)("div", { className: eF()(ht.kL, ht.Lq), children: (0, f.jsx)(u3.y, {}) });
    },
    ho = (0, o.E2)(d.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [m.intl.string(m.t.trSpHX), m.intl.string(m.t["2GKrvn"])],
        Component: () => (0, f.jsx)(ha, {}),
    }),
    hu = (0, o.zZ)(d.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [m.intl.string(m.t.trSpHX), m.intl.string(m.t["2GKrvn"])],
        buildLayout: () => [ho],
    }),
    hd = (0, o.t_)(d.X.SUBSCRIPTIONS_PANEL, { useTitle: () => m.intl.string(m.t.trSpHX), buildLayout: () => [hu] }),
    hc = (0, o.i4)(d.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t.trSpHX),
        icon: mv.L,
        usePersistentBadge: function () {
            return N.useMemo(
                () => ({
                    badgeType: e_.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    useCustomBadge: () =>
                        (0, mj.l)() ? (0, f.jsx)(lb.E, { size: "xs", color: F.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [],
            );
        },
        buildLayout: () => [hd],
    }),
    hg = (0, o.WI)(d.X.BILLING_SECTION, {
        useTitle: () => m.intl.string(m.t.oeUm2s),
        buildLayout: () => [cD, mb, hc, cb, dw],
    });
var hm = i(540999),
    hA = i(306471),
    hh = i(964355),
    hE = i(172272);
let hx = (0, o.zD)(d.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, R.bG)([a2.default], () => a2.default.isAxeEnabled),
        setValue: (e) => (0, a1.x)({ axeEnabled: e }),
    }),
    hT = (0, o.zD)(d.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, R.bG)([a2.default], () => a2.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, a1.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var hS = i(276086),
    hp = i(354328);
let hf = (0, o.zD)(d.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, hp.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, hS.L)("highlight_mana_components", e);
        },
    }),
    hN = (0, o.zD)(d.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, hp.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, hS.L)("highlight_void_toggleables", e);
        },
    }),
    h_ = (0, o.sN)(d.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, R.bG)([a2.default], () => a2.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: hE.YR,
        markers: Array.from({ length: hE.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => hE.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            hE.Or.getState().setHorizontalSpacing(e);
        },
    }),
    hC = (0, o.zD)(d.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, R.bG)([a2.default], () => a2.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, a1.x)({ layoutDebuggingEnabled: e });
        },
    }),
    hI = (0, o.sN)(d.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, R.bG)([a2.default], () => a2.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: hE.YR,
        markers: Array.from({ length: hE.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => hE.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            hE.Or.getState().setVerticalSpacing(e);
        },
    }),
    hb = (0, o.zZ)(d.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [hT, hC, h_, hI, hf, hN, hx],
    }),
    hv = (0, o.zD)(d.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => g.HZ.useSetting(),
        setValue: (e) => {
            g.HZ.updateSetting(e);
        },
    });
var hj = i(173936),
    hy = i(260598),
    hO = i(148810),
    hR = i(380610),
    hL = i(986238),
    hD = i(727201),
    hP = i(274446);
let hG = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    hU = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function hM(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class hV extends N.Component {
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
        return (0, f.jsxs)(lM.A, {
            direction: lM.A.Direction.VERTICAL,
            className: eF()(hD.oS, iI.SX, hP.N, hD.nM),
            children: [
                (0, f.jsx)(ih.A, {
                    className: eF()(hD.lL, { [hD.zi]: n }),
                    onClick: n ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, f.jsxs)(lM.A, {
                    className: iI.QB,
                    children: [
                        (0, f.jsx)(lM.A.Child, {
                            basis: "50%",
                            children: (0, f.jsx)(lS.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: hU,
                                onSelectionChange: this.handleOverrideTypeChanged,
                                value: t,
                                disabled: n,
                            }),
                        }),
                        (0, f.jsx)(lM.A.Child, {
                            wrap: !0,
                            basis: "50%",
                            children: (0, f.jsx)(lD.k, {
                                label: "branch" === t ? "Branch Name" : "Commit SHA",
                                value: i,
                                onChange: this.handleOverrideIdChanged,
                                disabled: n,
                            }),
                        }),
                    ],
                }),
                (0, f.jsxs)(lM.A.Child, {
                    children: [
                        null != s &&
                            "" !== s &&
                            (0, f.jsx)(k.E, {
                                className: hD.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: s,
                            }),
                        (0, f.jsxs)(k.E, {
                            variant: "text-sm/normal",
                            className: hD.AS,
                            children: [
                                "This controls the build that will be served for the ",
                                (0, f.jsx)("code", { children: e }),
                                " project.",
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
}
class hk extends N.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, hR.bD)();
        this.setState({ loading: !1, buildOverrides: e, loadedBuildOverrides: eL().cloneDeep(e), errors: {} });
    }
    isDirty() {
        let { buildOverrides: e, loadedBuildOverrides: t } = this.state;
        return !eL().isEqual(e, t);
    }
    componentDidMount() {
        this.refreshBuildOverrides();
    }
    getAvailableProjects() {
        let { buildOverrides: e } = this.state;
        if (null == e) return [];
        let t = Object.keys(e);
        return eL().without(hG, ...t);
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
        this.setState({ buildOverrides: eL().cloneDeep(this.state.loadedBuildOverrides), errors: {}, didSave: !1 });
    };
    handleSaveChanges = async () => {
        let { buildOverrides: e } = this.state;
        if (null == e) return;
        this.setState({ saving: !0 });
        let t = await (0, hO.Zk)(e);
        if (200 === t.status) {
            let e = t.body;
            this.setState({
                buildOverrides: e,
                loadedBuildOverrides: eL().cloneDeep(e),
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
        (0, C.openModal)((t) => (0, f.jsx)(hw, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, f.jsx)(ia.pp, {
            theme: id.A.theme,
            className: eF()(iI.eT, iI.SX),
            children: (0, f.jsx)(ia.SG, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: i } = this.state;
        return null == e
            ? null
            : eL().map(e, (e, n) =>
                  (0, f.jsx)(
                      hV,
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
            : (0, f.jsx)(eE.$, { variant: "secondary", text: "Reload App", onClick: () => location.reload() });
    }
    renderLinkButton() {
        let { buildOverrides: e } = this.state;
        return null == e || 0 === Object.keys(e).length
            ? null
            : (0, f.jsx)(e1.m, {
                  text: "Generate Public Link",
                  children: (0, f.jsx)(lp.K, {
                      variant: "secondary",
                      icon: hj.q,
                      "aria-label": "Generate Public Link",
                      onClick: this.handleLinkGeneration,
                  }),
              });
    }
    renderSaveButton() {
        if (!this.isDirty()) return null;
        let { saving: e, buildOverrides: t } = this.state;
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(eE.$, {
                    variant: "critical-primary",
                    text: "Discard Changes",
                    onClick: this.handleDiscardChanges,
                    disabled: e,
                }),
                (0, f.jsx)(eE.$, {
                    variant: "primary",
                    text: "Save Build Overrides",
                    disabled: hM(t ?? {}),
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
            ? (0, f.jsx)(u3.y, { className: iI.QX })
            : null != n && 0 === Object.keys(n).length
              ? this.renderEmpty()
              : this.renderItems();
        let s = !i && !t && this.getAvailableProjects().length > 0,
            l =
                hM(n ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, f.jsx)(k.E, {
                          color: "text-feedback-critical",
                          variant: "text-md/normal",
                          children:
                              "Mobile build overrides must be generated using the desktop/web stable client for now!",
                      })
                    : null;
        return (0, f.jsx)(io.n, {
            children: (0, f.jsxs)(L.B, {
                gap: 16,
                children: [
                    (0, f.jsx)(lS.l, {
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
                    (0, f.jsxs)(aw.e, {
                        justify: "end",
                        children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                    }),
                ],
            }),
        });
    }
}
class hw extends N.Component {
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
        e.key === ix.dh.ENTER && this.handleAddAllowedVersion();
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
            t = await (0, hO.SB)(e);
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
        return hM(this.props.buildOverrides ?? {});
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
            d = hL.fL.find((t) => t.value === e),
            c = s.map((e) => ({ id: e, label: e, value: e }));
        return (0, f.jsxs)(L.B, {
            gap: 20,
            children: [
                (0, f.jsx)(lS.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: hL.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, f.jsx)(lS.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: hL.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, f.jsxs)(L.B, {
                          gap: 20,
                          children: [
                              (0, f.jsx)(lD.k, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: l,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: r,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: { icon: r5.j, onClick: this.handleAddAllowedVersion, "aria-label": "Add" },
                              }),
                              (0, f.jsx)(lS.l, {
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
                    : (0, f.jsx)(hy.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: i,
                          error: n,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                (0, f.jsx)(hy.f, {
                    label: "Client Experiment Override",
                    description:
                        "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.",
                    value: o,
                    error: u,
                    onChange: this.handleExperiments,
                    placeholder: '{"2022-01_threads":1}',
                }),
                (0, f.jsx)(D.d, { label: "Allow logged out users", checked: a, onChange: this.handleAllowLoggedOut }),
            ],
        });
    }
    renderHelpMessage() {
        let { statusText: e, status: t } = this.state;
        if (null == e) return (0, f.jsx)("div", {});
        let i = ta.Y.INFO;
        switch (t) {
            case 0:
                i = ta.Y.ERROR;
                break;
            case 1:
                i = ta.Y.WARNING;
        }
        return (0, f.jsx)(ta.p, { messageType: i, children: e });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props,
            { publicLink: i } = this.state;
        return (0, f.jsx)(lL.Modal, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, f.jsx)(d6.A, { value: i }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let hF = (0, o.E2)(d.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: hk });
var hB = i(256311),
    hz = i(883600);
let hY = (0, o.E2)(d.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, R.bG)([hz.A], () => hz.A.overrideId()),
            t = async (e) => {
                let t = hz.A.getChangelog(e, "en-US");
                return null != t ? t : ((await hB.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
            };
        return (0, f.jsx)(h4, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => hB.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var hX = i(506774);
let hH = new Date("2018-01-01"),
    hK = (0, o.Tf)(d.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => g.pK.useSetting() === dn.default.fromTimestamp(hH.getTime()),
        onClick: () => (hX.w.set("lastChangeLogDate", hH), g.pK.updateSetting(dn.default.fromTimestamp(hH.getTime()))),
    }),
    hW = (0, o.zD)(d.X.DISABLE_APP_COLLECTIONS_CACHE, {
        useTitle: () => "Disable Application Collections Cache",
        useSubtitle: () => "Forces application collection updates to be shown immediately.",
        useDisabled: () => (0, R.bG)([a2.default], () => a2.default.onlyShowPreviewAppCollections),
        useValue: () =>
            (0, R.bG)(
                [a2.default],
                () => a2.default.disableAppCollectionsCache || a2.default.onlyShowPreviewAppCollections,
            ),
        setValue: (e) => (0, a1.x)({ disableAppCollectionsCache: e }),
    }),
    hZ = (0, o.zD)(d.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, R.bG)([a2.default], () => a2.default.isForcedCanary),
        setValue: (e) => {
            (0, a1.x)({ canary: e });
        },
    }),
    hq = (0, o.zD)(d.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, R.bG)([a2.default], () => a2.default.sourceMapsEnabled),
        setValue: (e) => (0, a1.x)({ sourceMapsEnabled: e }),
    }),
    hQ = (0, o.zD)(d.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, R.bG)([a2.default], () => a2.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, a1.x)({ onlyShowPreviewAppCollections: e }),
    });
var hJ = i(10094),
    h$ = i(683760);
let h0 = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: sf.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: sf.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: sf.PremiumTypes.TIER_2 },
    ],
    h1 = (0, o.Hn)(d.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => h0,
        clearable: !0,
        useValue: () =>
            (0, R.bG)([h$.A], () => {
                let e = h$.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, hJ.O)(null, void 0)
                : null === e
                  ? (0, hJ.O)(void 0, void 0)
                  : (0, hJ.O)(0 === e ? null : e, void 0);
        },
    });
var h2 = i(246605),
    h3 = i(274184);
let h6 = (0, o.E2)(d.X.SURVEY_OVERRIDE, {
    useSearchTerms: () => ["survey override"],
    Component: function () {
        let e = (0, R.bG)([h3.Ay], () => h3.Ay.getSurveyOverride());
        return (0, f.jsx)(h4, {
            label: "Survey Override",
            description: "Provide a survey ID to override the survey shown to this user.",
            placeholder: "Enter Survey ID...",
            overrideId: e ?? null,
            setOverride: (e) => h2.xr(e),
            fetchOverride: (e) => h2.BC(e, !0) ?? null,
        });
    },
});
function h4(e) {
    let { label: t, description: i, placeholder: n, overrideId: s, setOverride: l, fetchOverride: r } = e,
        [a, o] = N.useState(s ?? ""),
        u = N.useRef(null),
        [d, c] = N.useState(0),
        g = () => {
            null != u.current && (clearTimeout(u.current), (u.current = null));
        };
    return (
        N.useEffect(() => g, []),
        (0, f.jsx)(sy.D, {
            layout: "horizontal-responsive",
            label: t,
            description: i,
            children: (0, f.jsx)(lD.k, {
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
let h7 = (0, o.zZ)(d.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [h1, h6, hY, hK, hZ, hv, hQ, hW, hq, hF],
        useInlineNotice: () => ({
            type: e_.lT.INLINE_NOTICE,
            noticeType: "info",
            useText: () => m.intl.format(m.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    h5 = (0, o.zD)(d.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, R.bG)([a2.default], () => a2.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, a1.x)({ logAnalyticsEvents: e }),
    }),
    h8 = (0, o.zD)(d.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, R.bG)([a2.default], () => a2.default.isLoggingGatewayEvents),
        setValue: (e) => (0, a1.x)({ logGatewayEvents: e }),
    }),
    h9 = (0, o.zD)(d.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, R.bG)([a2.default], () => a2.default.preventPopoutClose),
        setValue: (e) => (0, a1.x)({ preventPopoutClose: e }),
    }),
    Ee = (0, o.zD)(d.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, R.bG)([a2.default], () => a2.default.logKeyboardMismatches),
        setValue: (e) => (0, a1.x)({ logKeyboardMismatches: e }),
    }),
    Et = (0, o.zD)(d.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, R.bG)([a2.default], () => a2.default.isLoggingOverlayEvents),
        setValue: (e) => (0, a1.x)({ logOverlayEvents: e }),
    }),
    Ei = (0, o.zD)(d.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, R.bG)([a2.default], () => a2.default.isLoggingQuestEvents),
        setValue: (e) => (0, a1.x)({ logQuestEvents: e }),
    }),
    En = (0, o.zD)(d.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, R.bG)([a2.default], () => a2.default.isTracingRequests),
        setValue: (e) => (0, a1.x)({ trace: e }),
    }),
    Es = (0, o.zZ)(d.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [h8, Et, En, h5, Ee, h9, Ei] }),
    El = (0, o.t_)(d.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [h7, Es, hb],
    }),
    Er = (0, o.i4)(d.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: hA.V,
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
                    onlyShowPreviewAppCollections: u,
                    disableAppCollectionsCache: c,
                    isStaff: m,
                } = (0, R.cf)([a2.default, hm.A, t6.default], () => ({
                    layoutDebuggingEnabled: a2.default.layoutDebuggingEnabled,
                    isDeveloper: hm.A.isDeveloper,
                    isLoggingGatewayEvents: a2.default.isLoggingGatewayEvents,
                    isLoggingOverlayEvents: a2.default.isLoggingOverlayEvents,
                    isLoggingAnalyticsEvents: a2.default.isLoggingAnalyticsEvents,
                    isTracingRequests: a2.default.isTracingRequests,
                    isForcedCanary: a2.default.isForcedCanary,
                    isSourceMapsEnabled: a2.default.sourceMapsEnabled,
                    isAxeEnabled: a2.default.isAxeEnabled,
                    preventPopoutClose: a2.default.preventPopoutClose,
                    onlyShowPreviewAppCollections: a2.default.onlyShowPreviewAppCollections,
                    disableAppCollectionsCache: a2.default.disableAppCollectionsCache,
                    isStaff: t6.default.getCurrentUser()?.isStaff() ?? !1,
                })),
                { horizontalSpacing: A, verticalSpacing: h } = (0, hE.Or)(),
                { setHorizontalSpacing: E, setVerticalSpacing: x } = hE.Or.getState(),
                T = g.HZ.useSetting();
            return t
                ? [
                      (0, f.jsxs)(
                          M.Dr,
                          {
                              id: "overrides",
                              label: "Overrides",
                              action: () => {
                                  (0, ey.openUserSettings)(d.X.DEV_OVERRIDES);
                              },
                              children: [
                                  (0, f.jsx)(
                                      M.sL,
                                      {
                                          id: "always-deliver",
                                          label: "Always Deliver Ads",
                                          checked: T,
                                          action: () => {
                                              g.HZ.updateSetting(!T);
                                          },
                                      },
                                      "always-deliver",
                                  ),
                                  (0, f.jsx)(
                                      M.sL,
                                      {
                                          id: "forced-canary",
                                          label: "Forced Canary",
                                          checked: r,
                                          action: () => {
                                              (0, a1.x)({ canary: !r });
                                          },
                                      },
                                      "forced-canary",
                                  ),
                                  (0, f.jsx)(
                                      M.sL,
                                      {
                                          id: "preview-collections",
                                          label: "Preview Unpublished Collections",
                                          checked: u,
                                          action: () => {
                                              (0, a1.x)({ onlyShowPreviewAppCollections: !u });
                                          },
                                      },
                                      "preview-collections",
                                  ),
                                  (0, f.jsx)(
                                      M.sL,
                                      {
                                          id: "disable-collections-cache",
                                          label: "Disable Collections Cache",
                                          checked: c,
                                          action: () => {
                                              (0, a1.x)({ disableAppCollectionsCache: !c });
                                          },
                                      },
                                      "disable-collections-cache",
                                  ),
                              ],
                          },
                          "overrides",
                      ),
                      (0, f.jsxs)(
                          M.Dr,
                          {
                              id: "logging",
                              label: "Logging",
                              action: () => {
                                  (0, ey.openUserSettings)(d.X.LOGGING);
                              },
                              children: [
                                  (0, f.jsx)(
                                      M.sL,
                                      {
                                          id: "gateway-events",
                                          label: "Gateway Events",
                                          checked: i,
                                          action: () => {
                                              (0, a1.x)({ logGatewayEvents: !i });
                                          },
                                      },
                                      "gateway-events",
                                  ),
                                  (0, f.jsx)(
                                      M.sL,
                                      {
                                          id: "overlay-events",
                                          label: "Overlay RPC Events",
                                          checked: n,
                                          action: () => {
                                              (0, a1.x)({ logOverlayEvents: !n });
                                          },
                                      },
                                      "overlay-events",
                                  ),
                                  (0, f.jsx)(
                                      M.sL,
                                      {
                                          id: "analytics-events",
                                          label: "Analytics Events",
                                          checked: s,
                                          action: () => {
                                              (0, a1.x)({ logAnalyticsEvents: !s });
                                          },
                                      },
                                      "analytics-events",
                                  ),
                                  (0, f.jsx)(
                                      M.sL,
                                      {
                                          id: "tracing-requests",
                                          label: "Tracing Requests",
                                          checked: l,
                                          action: () => {
                                              (0, a1.x)({ trace: !l });
                                          },
                                      },
                                      "tracing-requests",
                                  ),
                                  (0, f.jsx)(
                                      M.sL,
                                      {
                                          id: "prevent-popout-close",
                                          label: "Prevent Popouts From Closing",
                                          checked: o,
                                          action: () => {
                                              (0, a1.x)({ preventPopoutClose: !o });
                                          },
                                      },
                                      "prevent-popout-close",
                                  ),
                              ],
                          },
                          "logging",
                      ),
                      (0, f.jsxs)(
                          M.Dr,
                          {
                              id: "design-tools",
                              label: "Design/A11y Tools",
                              action: () => {
                                  (0, ey.openUserSettings)(d.X.DESIGN_TOOLS);
                              },
                              children: [
                                  (0, f.jsx)(
                                      M.sL,
                                      {
                                          id: "accessibility-auditing",
                                          label: "Accessibility Auditing",
                                          checked: a,
                                          action: () => {
                                              (0, a1.x)({ axeEnabled: !a });
                                          },
                                      },
                                      "accessibility-auditing",
                                  ),
                                  (0, f.jsx)(
                                      M.sL,
                                      {
                                          id: "layout-debugging",
                                          label: "Enable Layout Debugging",
                                          checked: e,
                                          action: () => {
                                              (0, a1.x)({ layoutDebuggingEnabled: !e });
                                          },
                                      },
                                      "layout-debugging",
                                  ),
                                  e &&
                                      (0, f.jsxs)(f.Fragment, {
                                          children: [
                                              (0, f.jsx)(
                                                  M.aK,
                                                  {
                                                      id: "horizontal-spacing",
                                                      label: "Horizontal Spacing",
                                                      control: (e, t) =>
                                                          (0, f.jsx)(hh.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: A,
                                                              minValue: 0,
                                                              maxValue: hE.YR,
                                                              onChange: (e) => E(e),
                                                              renderValue: (e) => `${Math.round(e)}px`,
                                                              "aria-label": "Horizontal Spacing",
                                                          }),
                                                  },
                                                  "horizontal-spacing",
                                              ),
                                              (0, f.jsx)(
                                                  M.aK,
                                                  {
                                                      id: "vertical-spacing",
                                                      label: "Vertical Spacing",
                                                      control: (e, t) =>
                                                          (0, f.jsx)(hh.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: h,
                                                              minValue: 0,
                                                              maxValue: hE.YR,
                                                              onChange: (e) => x(e),
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
                          ? (0, f.jsx)(
                                M.Dr,
                                { id: "discord-stats", label: "Discord Stats", action: () => aL() },
                                "discord-stats",
                            )
                          : null,
                  ]
                : null;
        },
        buildLayout: () => [El],
    });
var Ea = i(127062),
    Eo = i(25044),
    Eu = i(80703),
    Ed = i(691540),
    Ec = i(857250),
    Eg = i(97483),
    Em = i(100392),
    EA = i(102609),
    Eh = i(271478),
    EE = i(736056),
    Ex = i(386976),
    ET = i(257433),
    ES = i(32523),
    Ep = i(222735),
    Ef = i(688151),
    EN = i(636566);
function E_(e) {
    let { experiment: t, experimentId: i, overrideInfo: n, defaultOpen: s } = e,
        [l, r] = N.useState(s),
        [a, o] = N.useState(!1),
        u = N.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, R.bG)([cu.default], () => cu.default.getId()),
        c = (0, R.bG)([cu.default], () => {
            let e = cu.default.getInstallationForTracking();
            return null == e ? null : (0, Eu.v)(e);
        }),
        g = "installation" === t.kind && null != c ? c : d,
        m = (0, ET.iN)(t, g),
        A = (0, ET.Fm)(t, g),
        h = (0, R.yK)([EE.A], () =>
            eL()
                .sortBy(EE.A.getRecentExposures(Ef.Vh.USER, i), (e) => {
                    let [t, i] = e;
                    return -i;
                })
                .map((e) => {
                    let [t, i] = e;
                    return `${new Date(i).toLocaleString()} (${t})`;
                }),
        ),
        E = N.useCallback(
            (e) => {
                (0, cA.C)((0, Em.yA)(i), () => {
                    (0, Ed.P0)({
                        id: "experiment-link-copied",
                        message: "Copied experiment link",
                        type: Eg.Ck.SUCCESS,
                    }),
                        e.preventDefault(),
                        e.stopPropagation();
                });
            },
            [i],
        ),
        x = (0, f.jsx)(eB.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, f.jsxs)(k.E, {
                variant: "text-md/medium",
                className: EN.DD,
                children: [
                    (0, f.jsxs)("div", {
                        children: [
                            (0, f.jsxs)(L.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    t.title,
                                    " ",
                                    cA.p5 &&
                                        (0, f.jsx)(V.D, { onClick: E, children: (0, f.jsx)(hj.q, { size: "xs" }) }),
                                ],
                            }),
                            (0, f.jsx)(k.E, { color: "text-muted", variant: "text-sm/normal", children: i }),
                        ],
                    }),
                    (0, f.jsx)("span", {
                        className: EN.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!l) return (0, f.jsx)("div", { className: EN.Os, children: x });
    let T = "";
    return (
        (T =
            t.system === EA.l5.LEGACY
                ? `Currently assigned to bucket ${m ?? Ef.RE.NOT_ELIGIBLE}`
                : null != m
                  ? `Currently assigned to variant ${m}`
                  : "Currently unassigned"),
        (0, f.jsxs)("div", {
            className: EN.Os,
            children: [
                x,
                (0, f.jsx)("div", {
                    children: (0, f.jsx)(Eh.g, {
                        label: t.system === EA.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: T,
                        experiment: t,
                        experimentId: i,
                        overrideInfo: n,
                    }),
                }),
                (0, f.jsx)("div", {
                    className: EN.h_,
                    children:
                        null == A
                            ? (0, f.jsx)(k.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children:
                                      'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.',
                              })
                            : null,
                }),
                a
                    ? (0, f.jsxs)("div", {
                          children: [
                              (0, f.jsx)(k.E, {
                                  variant: "text-lg/medium",
                                  className: EN.id,
                                  children: "Server Descriptor",
                              }),
                              (0, f.jsx)(k.E, {
                                  variant: "code",
                                  className: EN.AS,
                                  children: null == A ? "None" : JSON.stringify(A, void 0, 2),
                              }),
                              (0, f.jsx)(k.E, {
                                  variant: "text-lg/medium",
                                  className: EN.id,
                                  children: "Override Descriptor",
                              }),
                              (0, f.jsx)(k.E, {
                                  variant: "code",
                                  className: EN.AS,
                                  children:
                                      n?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(n.originalDescriptor, void 0, 2),
                              }),
                              (0, f.jsx)(k.E, {
                                  variant: "text-lg/medium",
                                  className: EN.id,
                                  children: "Recent Exposures",
                              }),
                              (0, f.jsx)(k.E, {
                                  variant: "code",
                                  className: EN.AS,
                                  children: 0 === h.length ? "None" : h.join("\n"),
                              }),
                          ],
                      })
                    : (0, f.jsx)("div", {
                          className: EN.id,
                          children: (0, f.jsx)(B.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, f.jsx)(ex.c, { className: EN.yF }),
            ],
        })
    );
}
function EC(e) {
    let { experiment: t, experimentId: i, overrideInfo: n } = e,
        [s, l] = N.useState(null != n),
        [r, a] = N.useState(!1),
        o = N.useCallback(() => {
            l((e) => !e);
        }, []),
        u = (0, R.bG)([EE.A], () => EE.A.getLoadedGuildExperiment(i)),
        d = (0, R.yK)([EE.A], () =>
            eL()
                .sortBy(EE.A.getRecentExposures(Ef.Vh.GUILD, i), (e) => {
                    let [t, i] = e;
                    return -i;
                })
                .map((e) => {
                    let [t, i] = e;
                    return `${new Date(i).toLocaleString()} (${t})`;
                }),
        ),
        [c, g] = (0, R.yK)([K.A, EE.A], () => {
            let e = eL().sortBy(K.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                t = {},
                n = [];
            for (let s of e) {
                let e = EE.A.getGuildExperimentDescriptor(i, s.id),
                    l = e?.bucket ?? Ef.RE.NOT_ELIGIBLE;
                l in t || (t[l] = 0), t[l]++, n.push(`${s.name}: ${l}`);
            }
            let s = eL()(t)
                .keys()
                .map(Number)
                .sort()
                .map((e) => `${t[e]} guilds in bucket ${e}`)
                .join(", ");
            return [n.join("\n"), s];
        }),
        m = (0, f.jsx)(V.D, {
            onClick: o,
            children: (0, f.jsxs)(k.E, {
                variant: "text-md/medium",
                className: EN.DD,
                children: [
                    (0, f.jsxs)("div", {
                        children: [
                            (0, f.jsx)("span", { children: t.title }),
                            (0, f.jsx)(k.E, { color: "text-muted", variant: "text-sm/normal", children: i }),
                        ],
                    }),
                    (0, f.jsx)("span", { className: EN.km, children: "Guild" }),
                ],
            }),
        });
    return s
        ? (0, f.jsxs)("div", {
              className: EN.Os,
              children: [
                  m,
                  (0, f.jsx)(Eh.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${g}`,
                      experiment: t,
                      experimentId: i,
                      overrideInfo: n,
                  }),
                  (0, f.jsx)("div", {
                      className: EN.h_,
                      children:
                          null == u
                              ? (0, f.jsx)(k.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children:
                                        'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.',
                                })
                              : null,
                  }),
                  r
                      ? (0, f.jsxs)("div", {
                            children: [
                                (0, f.jsx)(k.E, {
                                    variant: "text-lg/medium",
                                    className: EN.id,
                                    children: "Guild Assignments",
                                }),
                                (0, f.jsx)(k.E, { variant: "code", className: EN.AS, children: c }),
                                (0, f.jsx)(k.E, {
                                    variant: "text-lg/medium",
                                    className: EN.id,
                                    children: "Server Descriptor",
                                }),
                                (0, f.jsx)(k.E, {
                                    variant: "code",
                                    className: EN.AS,
                                    children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                }),
                                (0, f.jsx)(k.E, {
                                    variant: "text-lg/medium",
                                    className: EN.id,
                                    children: "Override Descriptor",
                                }),
                                (0, f.jsx)(k.E, {
                                    variant: "code",
                                    className: EN.AS,
                                    children:
                                        n?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(n.originalDescriptor, void 0, 2),
                                }),
                                (0, f.jsx)(k.E, {
                                    variant: "text-lg/medium",
                                    className: EN.id,
                                    children: "Recent Exposures",
                                }),
                                (0, f.jsx)(k.E, {
                                    variant: "code",
                                    className: EN.AS,
                                    children: 0 === d.length ? "None" : d.join("\n"),
                                }),
                            ],
                        })
                      : (0, f.jsx)("div", {
                            className: EN.id,
                            children: (0, f.jsx)(B.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, f.jsx)(ex.c, { className: EN.yF }),
              ],
          })
        : (0, f.jsx)("div", { className: EN.Os, children: m });
}
let EI = (0, o.E2)(d.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, Ex.op)(),
                { experiments: i, overridesInfo: n } = (0, ES.hI)(),
                s = N.useMemo(() => ({ ...i, ...e }), [i, e]),
                l = N.useMemo(() => ({ ...n, ...t }), [n, t]),
                r = (0, R.bG)([cu.default], () => {
                    let e = cu.default.getInstallationForTracking();
                    return null == e ? null : (0, Eu.v)(e);
                }),
                [a, o] = N.useState(""),
                u = (0, Ep.oC)((0, Ep.R3)((0, Ep.Fm)(s), l), a);
            return (0, f.jsxs)("div", {
                "data-mtctest-ignore": "true",
                children: [
                    null != r &&
                        (0, f.jsxs)(L.B, {
                            style: { gap: 8, marginBottom: 16 },
                            children: [
                                (0, f.jsxs)(k.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: ["Installation ID: ", r],
                                }),
                                cA.p5 &&
                                    (0, f.jsx)(B.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, cA.C)(r, () => {
                                                (0, Ed.P0)((0, Ec.o)("Installation ID copied!", Eg.Ck.SUCCESS));
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, f.jsx)(P.I, { placeholder: "Search experiments", query: a, onChange: o, onClear: () => o("") }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? EC : E_;
                              return (0, f.jsx)(
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
                        : (0, f.jsx)("div", {
                              className: EN.p$,
                              children: (0, f.jsx)(eh.D, {
                                  variant: "heading-md/semibold",
                                  children: "No Experiments Found",
                              }),
                          }),
                ],
            });
        },
        useSearchTerms: () => ["Experiments", "Bucket Override", "Variant Override"],
    }),
    Eb = (0, o.zZ)(d.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [EI] }),
    Ev = (0, o.t_)(d.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [Eb] }),
    Ej = (0, o.i4)(d.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: Ea.c,
        useMenu: Eo.A,
        buildLayout: () => [Ev],
    }),
    Ey = (0, o.WI)(d.X.DEVELOPER_SECTION, {
        useTitle: () => m.intl.string(m.t["+gHUHA"]),
        usePredicate: () => hm.A.isDeveloper,
        buildLayout: () => [Ej, Er],
    });
var EO = i(323384),
    ER = i(824552),
    EL = i(96076);
let ED = (0, o.E2)(d.X.AUTHORIZED_APPS_LIST_SETTING, {
        Component: EL.Ay,
        useSearchTerms: () => [m.intl.string(m.t["f6kk+r"])],
    }),
    EP = (0, o.zZ)(d.X.AUTHORIZED_APPS_CATEGORY, {
        buildLayout: () => [ED],
        initialize: () => (
            ER.A.fetch(),
            () => {
                EL.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    EG = (0, o.t_)(d.X.AUTHORIZED_APPS_PANEL, {
        useTitle: () => m.intl.string(m.t["f6kk+r"]),
        useObscuredNotice: u0.L,
        buildLayout: () => [EP],
    }),
    EU = (0, o.i4)(d.X.AUTHORIZED_APPS_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t["f6kk+r"]),
        icon: EO.k,
        buildLayout: () => [EG],
    });
var EM = i(187322),
    EV = i(77468),
    Ek = i(289498),
    Ew = i(573648),
    EF = i(941314),
    EB = i(874490),
    Ez = i(370480),
    EY = i(968309);
let EX = new Set([Q.fg2.XBOX, Q.fg2.PLAYSTATION, Q.fg2.PLAYSTATION_STAGING, Q.fg2.CRUNCHYROLL]);
var EH = i(169869),
    EK = i(968671),
    EW = i(30370),
    EZ = i(674567),
    Eq = i(237146),
    EQ = i(594387),
    EJ = i(34934);
function E$() {
    let e,
        t,
        n,
        s,
        { variant: l, showFooter: r } =
            ((e = (0, EZ.V)()),
            (t = (0, EK.useIsCrepeEnabled)("connectedAccountsBannerFooter")),
            (s = null != (n = (0, R.bG)([EW.A], () => EW.A.getAccount(null, Q.fg2.XBOX))) && !n.revoked),
            e === EZ.s.NONE || e === EZ.s.FREE_FRACTIONAL_NITRO || (e === EZ.s.NON_NITRO && 0)
                ? { variant: EZ.s.NONE, showFooter: !1 }
                : { variant: e, showFooter: t && e === EZ.s.NON_NITRO && !s }),
        { analyticsLocations: a } = (0, nU.Ay)(eV.A.XBOX_CONNECTED_ACCOUNTS_BANNER);
    if (l === EZ.s.NONE) return null;
    let o = "",
        u = null;
    return (
        l === EZ.s.NITRO
            ? ((o = m.intl.string(Eq.default["+QAvQz"])),
              (u = (0, f.jsx)(eE.$, {
                  variant: "secondary",
                  size: "sm",
                  text: m.intl.string(Eq.default.CubeLC),
                  onClick: () => {
                      (0, C.openModalLazy)(async () => {
                          let { default: e } = await Promise.all([i.e("16848"), i.e("77632")]).then(i.bind(i, 836291));
                          return (t) => (0, f.jsx)(e, { ...t, sourceAnalyticsLocations: a });
                      });
                  },
              })))
            : (l === EZ.s.NON_NITRO || l === EZ.s.FREE_FRACTIONAL_NITRO) &&
              ((o = m.intl.string(Eq.default.NwkRTZ)),
              (u = (0, f.jsx)(sh.A, {
                  fullWidth: !0,
                  defaultTextOverride: m.intl.string(Eq.default["0vY+ie"]),
                  variantOverride: "overlay-primary",
                  size: "sm",
                  subscriptionTier: sf.pe.TIER_2,
              }))),
        (0, f.jsxs)(nU.f5, {
            value: a,
            children: [
                (0, f.jsxs)("div", {
                    className: EJ.bV,
                    children: [
                        (0, f.jsx)(eh.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: m.intl.string(m.t.NG1e6l),
                        }),
                        (0, f.jsx)(oK.t, { size: "xs", color: "var(--icon-default)" }),
                    ],
                }),
                (0, f.jsx)(tJ.N, {
                    theme: "dark",
                    children: (e) =>
                        (0, f.jsx)("div", {
                            className: e,
                            children: (0, f.jsxs)("div", {
                                className: EJ.Nr,
                                style: {
                                    backgroundImage:
                                        "url(https://cdn.discordapp.com/assets/content/6f39ba0aa00a9877bcb4bc67862335d29c21749762ec29fd0248ba734bc2c4b8.png)",
                                },
                                children: [
                                    (0, f.jsx)("div", { className: EJ.$h }),
                                    (0, f.jsx)("div", { className: EJ.Lw }),
                                    (0, f.jsxs)("div", {
                                        className: EJ.Qs,
                                        children: [
                                            (0, f.jsx)("img", {
                                                className: EJ.wm,
                                                src: "https://cdn.discordapp.com/assets/content/f3a967ffa662e944346571ea7f2b30b2e40745e2edca294519fbddf971e81fb1.png",
                                                alt: "Xbox Game Pass",
                                            }),
                                            (0, f.jsx)(k.E, {
                                                variant: "text-sm/semibold",
                                                color: "text-strong",
                                                className: EJ.DD,
                                                children: o,
                                            }),
                                            (0, f.jsx)("div", { className: EJ.lO, children: u }),
                                        ],
                                    }),
                                    !1,
                                ],
                            }),
                        }),
                }),
            ],
        })
    );
}
var E0 = i(201718),
    E1 = i(321078),
    E2 = i(672130),
    E3 = i(546183),
    E6 = i(379848),
    E4 = i(96734);
let E7 = (e) => {
        let { markAsDismissed: t } = e;
        return (
            N.useEffect(() => t(t9.i.UNKNOWN), [t]),
            (0, f.jsx)(n8.Lp, { className: E4.Ad, text: m.intl.string(m.t.y2b7CA) })
        );
    },
    E5 = (e) => {
        let { title: t, body: i, img: n, newIndicatorDismissibleContent: s, onClick: l } = e;
        return (0, f.jsxs)("div", {
            className: E4.kL,
            children: [
                n,
                (0, f.jsxs)("div", {
                    className: E4.FS,
                    children: [
                        (0, f.jsxs)("div", {
                            className: E4.TK,
                            children: [
                                (0, f.jsx)(E6.Ay, {
                                    contentTypes: [s],
                                    children: (e) => {
                                        let { visibleContent: t, markAsDismissed: i } = e;
                                        return t === s ? (0, f.jsx)(E7, { markAsDismissed: i }) : null;
                                    },
                                }),
                                (0, f.jsx)(k.E, { variant: "text-md/semibold", children: t }),
                            ],
                        }),
                        (0, f.jsx)(k.E, { variant: "text-xs/normal", children: i }),
                    ],
                }),
                (0, f.jsx)(eE.$, { text: m.intl.string(m.t.vD60Pv), onClick: l }),
            ],
        });
    },
    E8 = () => {
        let e = to.A.getArticleURL(Q.MVz.PS_CONNECTION);
        return (0, f.jsx)(E5, {
            title: m.intl.string(m.t.v20wwm),
            body: m.intl.format(m.t.lTZBit, { help_article: e }),
            img: (0, f.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
            newIndicatorDismissibleContent: eT.M.PS_ONE_WAY_RECONNECT,
            onClick: () => (0, EY.A)({ platformType: Q.fg2.PLAYSTATION, location: "PS two way upsell" }),
        });
    },
    E9 = "/assets/9df988a227916145.png",
    xe = () =>
        (0, f.jsx)(E5, {
            title: m.intl.string(EQ.default["9cLtDI"]),
            body: m.intl.format(EQ.default["D+kUbg"], { learnMoreLink: "" }),
            img: (0, f.jsx)("img", { src: E9, width: "auto", height: "45", alt: "" }),
            newIndicatorDismissibleContent: eT.M.XBOX_PERKS_RECONNECT_UPSELL,
            onClick: () => (0, EY.A)({ platformType: Q.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
        }),
    xt = () => {
        let e = to.A.getArticleURL(Q.MVz.XBOX_CONNECTION);
        return (0, f.jsx)(E5, {
            title: m.intl.string(m.t["2okkZV"]),
            body: m.intl.format(m.t.OnERSS, { help_article: e }),
            img: (0, f.jsx)("img", { src: E9, width: "auto", height: "45", alt: "" }),
            newIndicatorDismissibleContent: eT.M.XBOX_ONE_WAY_RECONNECT,
            onClick: () => (0, EY.A)({ platformType: Q.fg2.XBOX, location: "Xbox two way upsell" }),
        });
    };
var xi = i(783419),
    xn = i(534952),
    xs = i(230451),
    xl = i(781471);
let xr = (e) => {
    let t,
        { integration: i } = e,
        {
            isJoining: n,
            joinErrorMessage: s,
            showJoinErrorMessage: l,
        } = (0, R.cf)(
            [EW.A],
            () => ({
                isJoining: EW.A.isJoining(i.id),
                joinErrorMessage:
                    "" === EW.A.joinErrorMessage(i.id) ? m.intl.string(m.t.j2d6Km) : EW.A.joinErrorMessage(i.id),
                showJoinErrorMessage: void 0 !== EW.A.joinErrorMessage(i.id),
            }),
            [i.id],
        );
    return (
        null != (0, R.bG)([K.A], () => K.A.getGuild(i.guild.id), [i.guild.id]) ||
            (t = (0, f.jsx)(eE.$, {
                size: "sm",
                onClick: function () {
                    EV.A.joinServer(i.id, () => {});
                },
                disabled: n,
                variant: "primary",
                text: n ? m.intl.string(m.t.RXvQQu) : m.intl.string(m.t.XpeFYr),
            })),
        (0, f.jsxs)("div", {
            className: xl.iA,
            children: [
                (0, f.jsxs)("div", {
                    className: xl.XX,
                    children: [
                        (0, f.jsx)(gh.Ay, { size: gh.Ay.Sizes.SMALL, guild: i.guild, className: xl.$f }),
                        (0, f.jsxs)("div", {
                            className: xl.Vn,
                            children: [
                                (0, f.jsx)(k.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: i.guild.name,
                                }),
                                (0, f.jsx)(uk.Anchor, {
                                    href: Ew.A.get(i.type)?.getPlatformUserUrl?.(i.account),
                                    children: (0, f.jsx)(k.E, {
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
                    (0, f.jsx)(k.E, {
                        variant: "text-xs/normal",
                        color: "text-feedback-critical",
                        className: xl.R,
                        children: s,
                    }),
            ],
        })
    );
};
function xa(e) {
    var t;
    let { account: i } = e,
        n = (0, EK.useIsCrepeEnabled)("connectionReconnectUpsell");
    return i.type === Q.fg2.XBOX && ((t = i.id), !/^\d+$/.test(t)) && n
        ? (0, f.jsx)(xe, {})
        : i.twoWayLink
          ? null
          : i.type === Q.fg2.XBOX
            ? (0, f.jsx)(xt, {})
            : i.type === Q.fg2.PLAYSTATION
              ? (0, f.jsx)(E8, {})
              : null;
}
function xo(e) {
    let t,
        i,
        n,
        s,
        l,
        r,
        a,
        { onDisconnect: o, account: u, theme: d, locale: c } = e,
        [g, A] = N.useState(u.friendSync),
        [h, E] = N.useState(u.visibility),
        [x, T] = N.useState(u.metadataVisibility),
        [S, p] = N.useState(u.showActivity),
        [_, I] = N.useState(null),
        [b, v] = N.useState(null),
        [j, y] = N.useState(!1),
        [O, R] = N.useState([]),
        L = (0, EB.ML)(u.type),
        P = Ew.A.get(L),
        G = (0, EF.useIsRiotSocialSDKMigrationEnabled)({ location: "User Settings Connections" });
    N.useEffect(() => {
        A(u.friendSync), E(u.visibility), T(u.metadataVisibility), p(u.showActivity);
    }, [u]);
    let U = { inProgressVisibility: _, inProgressMetadataVisibility: b },
        M = N.useRef(U);
    return (
        N.useEffect(() => {
            M.current = U;
        }),
        N.useEffect(() => {
            if (!1 === u.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = M.current;
            null != e && (E(e), EV.A.setVisibility(u.type, u.id, e), I(null)),
                null != t && (T(t), EV.A.setMetadataVisibility(u.type, u.id, t), v(null));
        }, [u]),
        (0, f.jsxs)("div", {
            className: xl.FI,
            children: [
                ((t = Ew.A.get(u.type)),
                (i = Ew.A.get(L)),
                (n = "1" === (u.metadata ?? {})[xi.pK.TWITTER_VERIFIED]),
                (s = null),
                t.type === Q.fg2.TWITTER &&
                    n &&
                    (s = (0, f.jsx)(e1.m, {
                        text: m.intl.string(m.t.Jebrww),
                        children: (0, f.jsx)(e9.A, {
                            color: F.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, f.jsx)(e2.U, { size: "xs", color: F.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, f.jsxs)("div", {
                    className: xl.Il,
                    children: [
                        (0, f.jsx)("img", {
                            alt: i.name,
                            className: xl.gj,
                            src: (0, cJ.M)(d) ? i.icon.darkSVG : i.icon.lightSVG,
                        }),
                        (0, f.jsxs)("div", {
                            children: [
                                (0, f.jsxs)("div", {
                                    className: xl.$p,
                                    children: [
                                        (0, f.jsx)(k.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: xl.RW,
                                            children: u.name,
                                        }),
                                        null != s && (0, f.jsx)("div", { className: xl.cG, children: s }),
                                    ],
                                }),
                                (0, f.jsx)(k.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: xl.Au,
                                    children:
                                        null != i.replacedBy && G
                                            ? m.intl.format(xs.default.Glhokn, { platformName: i.name })
                                            : i.name,
                                }),
                            ],
                        }),
                        (0, f.jsx)(V.D, {
                            className: xl.uH,
                            onClick: function () {
                                let e = Ew.A.get(u.type);
                                (0, C.openModal)((t) =>
                                    (0, f.jsx)(lL.Modal, {
                                        title: m.intl.formatToPlainString(m.t.U5x12f, { name: e.name }),
                                        subtitle: m.intl.format(m.t.VgqIPj, { provider: e.name }),
                                        actions: [
                                            {
                                                text: m.intl.string(m.t["ETE/oC"]),
                                                onClick: t.onClose,
                                                variant: "secondary",
                                            },
                                            {
                                                text: m.intl.string(m.t.bsbMVz),
                                                onClick: () => {
                                                    o(), t.onClose();
                                                },
                                                variant: "primary",
                                            },
                                        ],
                                        ...t,
                                        children:
                                            EX.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, f.jsx)(si.A, {
                                                children: m.intl.format(m.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": m.intl.string(m.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, f.jsx)(c0.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, f.jsx)(xa, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        i = null,
                        n = (0, Ez.An)(t[xi.pK.CREATED_AT], c);
                    switch (e.type) {
                        case Q.fg2.REDDIT:
                            i = (0, EH.xE)(t, xl.Nz);
                            break;
                        case Q.fg2.STEAM:
                            i = (0, EH.dy)(t, xl.Nz);
                            break;
                        case Q.fg2.BLUESKY:
                        case Q.fg2.TWITTER:
                        case Q.fg2.MASTODON:
                            i = (0, EH.ED)(t, xl.Nz);
                            break;
                        case Q.fg2.EBAY:
                            i = (0, EH.ub)(t, xl.Nz);
                            break;
                        case Q.fg2.PAYPAL:
                            i = (0, EH.gZ)(t, xl.Nz);
                            break;
                        case Q.fg2.TIKTOK:
                            i = (0, EH.HU)(t, xl.Nz);
                    }
                    null !== n &&
                        (null == i && (i = []),
                        i?.push(
                            (0, f.jsx)(
                                k.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: xl.M4,
                                    children: m.intl.format(m.t["9rfonh"], { date: n }),
                                },
                                "member-since",
                            ),
                        ));
                    let s = O.includes(e.id),
                        l = m.intl.string(m.t.wzzjk9);
                    if (null == i || 0 === i.length)
                        if (!0 !== Ew.A.get(e.type).hasMetadata) return null;
                        else
                            (i = [
                                (0, f.jsx)(n8.Lp, { className: xl.Z3, text: m.intl.string(m.t.y2b7CA) }, "badge"),
                                (0, f.jsx)(
                                    k.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: xl.vt,
                                        children: m.intl.format(m.t.Up2ni7, {
                                            helpdeskUrl: to.A.getArticleURL(Q.MVz.CONNECTION_DETAILS),
                                        }),
                                    },
                                    "label",
                                ),
                            ]),
                                (l = m.intl.string(m.t["LVh3/5"]));
                    return (
                        s && (l = m.intl.string(m.t.i4jeWR)),
                        i.push(
                            (0, f.jsx)(
                                "div",
                                {
                                    className: xl.jy,
                                    children: (0, f.jsx)(eE.$, {
                                        text: l,
                                        variant: "secondary",
                                        size: "sm",
                                        loading: j,
                                        disabled: s,
                                        "aria-label": m.intl.string(m.t.sCkLYH),
                                        onClick: s
                                            ? void 0
                                            : () => {
                                                  y(!0),
                                                      EV.A.refresh(e.type, e.id).finally(() => {
                                                          setTimeout(() => {
                                                              O.push(e.id), R(O), y(!1);
                                                          }, 2e3);
                                                      });
                                              },
                                    }),
                                },
                                "refresh-button",
                            ),
                        ),
                        (0, f.jsx)("div", { className: xl.tJ, children: i })
                    );
                })(u),
                (Q.txh.has(u.type) &&
                    (l = (0, f.jsx)(D.d, {
                        label: m.intl.string(m.t["+KCMSi"]),
                        checked: g,
                        onChange: function (e) {
                            A(e), EV.A.setFriendSync(u.type, u.id, e);
                        },
                    })),
                Q.ewM.has(u.type) &&
                    (r = (0, f.jsx)(D.d, {
                        label: m.intl.format(m.t["6u6J0q"], { platform: P.name }),
                        checked: S,
                        onChange: function (e) {
                            p(e), EV.A.setShowActivity(u.type, u.id, e);
                        },
                    })),
                Ew.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, f.jsx)(D.d, {
                        label: m.intl.string(m.t.FYKGsL),
                        checked: 1 === x,
                        onChange: function (e) {
                            let { verified: t } = u,
                                i = +!!e;
                            if (e && !t) {
                                v(i), (0, EY.A)({ platformType: u.type, location: "User Settings" });
                                return;
                            }
                            T(i), EV.A.setMetadataVisibility(u.type, u.id, i);
                        },
                        disabled: 1 !== h || null == u.metadata,
                    })),
                (0, f.jsxs)("div", {
                    className: xl.HZ,
                    children: [
                        (0, f.jsx)(D.d, {
                            label: m.intl.string(m.t.f7yOAX),
                            checked: 1 === h,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    i = +!!e;
                                if (e && !t) {
                                    I(i), (0, EY.A)({ platformType: u.type, location: "User Settings" });
                                    return;
                                }
                                E(i), EV.A.setVisibility(u.type, u.id, i);
                            },
                        }),
                        a,
                        r,
                        l,
                    ],
                })),
                (function () {
                    if (u.revoked || u.integrations.length > 0) return (0, f.jsx)(ex.c, {});
                })(),
                u.revoked
                    ? (0, f.jsx)(ta.p, {
                          messageType: ta.Y.INFO,
                          children: m.intl.format(m.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, EY.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                      })
                    : u.integrations.length > 0
                      ? (0, f.jsx)(sy.D, {
                            label: m.intl.string(m.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, f.jsx)(xr, { integration: e }, e.id)),
                        })
                      : void 0,
                null,
            ],
        })
    );
}
function xu(e) {
    let { appIdentity: t, oauth2Token: i } = e;
    return null == i
        ? null
        : (0, f.jsxs)("div", {
              className: xl.FI,
              children: [
                  (function (e, t) {
                      let { application: i } = t,
                          n = i$.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
                      return (0, f.jsxs)("div", {
                          className: xl.Il,
                          children: [
                              (0, f.jsx)("img", { alt: i.name, className: eF()(xl.gj, xl.sN), src: n }),
                              (0, f.jsxs)("div", {
                                  children: [
                                      (0, f.jsx)("div", {
                                          className: xl.$p,
                                          children: (0, f.jsx)(k.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: xl.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, f.jsx)(k.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: xl.Au,
                                          children: i.name,
                                      }),
                                  ],
                              }),
                              (0, f.jsx)(V.D, {
                                  className: xl.uH,
                                  onClick: () =>
                                      (0, EL.d1)(i, t.scopes, () => {
                                          ER.A.delete(t.id);
                                      }),
                                  "aria-label": m.intl.string(m.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, f.jsx)(c0.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, i),
                  (0, f.jsx)("div", {
                      className: xl.HZ,
                      children: (0, f.jsx)(D.d, {
                          label: m.intl.string(m.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              E0.A.updateApplicationIdentityConfig(i.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function xd(e) {
    let t = Ew.A.get(e);
    (0, EY.A)({ platformType: t.type }),
        X.default.track(Q.HAw.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        });
}
function xc() {
    let e = (0, EB.gn)(),
        t = (0, EF.useIsRiotSocialSDKMigrationEnabled)({ location: "User Settings Connections" }),
        i = (0, eq.A)(t ? xn.tX : []);
    return (0, f.jsxs)("div", {
        className: xl.lA,
        children: [
            i.map(
                (e) =>
                    null != e &&
                    (0, f.jsx)(
                        E2.A,
                        { application: e, className: xl.__invalid_accountButton, innerClassName: xl.U$ },
                        e.id,
                    ),
            ),
            e
                .slice(0, 10 - i.length)
                .map((e) =>
                    (0, f.jsx)(
                        Ek.A,
                        { type: e.type, className: xl.__invalid_accountButton, innerClassName: xl.U$ },
                        e.type,
                    ),
                ),
            (0, f.jsx)(e1.m, {
                text: m.intl.string(m.t.QqTz8b),
                children: (0, f.jsx)("div", {
                    className: eF()(xl.ej, xl.__invalid_accountButton),
                    children: (0, f.jsx)(EM.vN, {
                        children: (0, f.jsx)("button", {
                            className: eF()(xl.R8, xl.U$),
                            type: "button",
                            onClick: function () {
                                n6.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: xd });
                            },
                            "aria-label": m.intl.string(m.t.Zhcj9X),
                            children: (0, f.jsx)(tE._, {
                                color: "currentColor",
                                size: "md",
                                "aria-label": m.intl.string(m.t.QqTz8b),
                            }),
                        }),
                    }),
                }),
            }),
        ],
    });
}
function xg(e) {
    let t,
        { fetching: i, accounts: n, appIdentities: s, authorizedApps: l, theme: r, locale: a } = e;
    return (
        (t = i
            ? (0, f.jsx)(u3.y, { type: u3.y.Type.SPINNING_CIRCLE })
            : 0 === n.length && 0 === s.length
              ? (0, f.jsx)(ia.pp, {
                    theme: r,
                    children: (0, f.jsx)(ia.SG, {
                        note: m.intl.string(m.t.WenGZ2),
                        children: m.intl.string(m.t.aoLS84),
                    }),
                })
              : (0, f.jsxs)(f.Fragment, {
                    children: [
                        s.map((e, t) =>
                            (0, f.jsx)(
                                xu,
                                { appIdentity: e, oauth2Token: l.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        n
                            .filter((e) => Ew.A.isSupported(e.type))
                            .map((e, t) =>
                                (0, f.jsx)(
                                    xo,
                                    {
                                        theme: r,
                                        account: e,
                                        locale: a,
                                        onDisconnect: () =>
                                            (function (e) {
                                                let { type: t, id: i } = e;
                                                EV.A.disconnect(t, i);
                                            })(e),
                                    },
                                    `connection-${t}`,
                                ),
                            ),
                    ],
                })),
        (0, f.jsx)("div", { className: xl.V, children: t })
    );
}
let xm = (0, o.E2)(d.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            return (0, f.jsx)(sy.D, {
                label: m.intl.string(m.t.ZeDrUf),
                description: m.intl.format(m.t["oYc+Gz"], { privacyPolicyUrl: Q.X7G.PRIVACY }),
                children: (0, f.jsx)(xc, {}),
            });
        },
        useSearchTerms: () => [
            m.intl.string(m.t.ZeDrUf),
            m.intl.string(m.t.Zhcj9X),
            m.intl.string(m.t.QqTz8b),
            m.intl.string(m.t["+/hZM/"]),
            m.intl.string(m.t.bsbMVz),
            m.intl.string(m.t.f7yOAX),
            m.intl.string(m.t.FYKGsL),
            m.intl.string(m.t["+KCMSi"]),
        ],
    }),
    xA = (0, o.E2)(d.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, R.bG)([eC.A], () => eC.A.hidePersonalInformation),
                t = (0, R.bG)([EW.A], () => EW.A.isFetching()),
                i = (0, R.bG)([EW.A], () => EW.A.getAccounts()),
                { authorizedAppsFetchState: n, authorizedApps: s } = (0, R.cf)([E3.default], () => ({
                    authorizedAppsFetchState: E3.default.getFetchState(),
                    authorizedApps: E3.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: l, filteredAppIdentities: r } = (0, E1.A)(t6.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, d$.Ay)(),
                o = (0, R.bG)([dO.default], () => dO.default.locale);
            return (N.useEffect(() => {
                n === E3.FetchState.NOT_FETCHED && ER.A.fetch();
            }, [n]),
            e)
                ? null
                : (0, f.jsxs)(f.Fragment, {
                      children: [
                          (0, f.jsx)(E$, {}),
                          (0, f.jsx)(xg, {
                              fetching: t || l || (r.length > 0 && n !== E3.FetchState.FETCHED),
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
            EV.A.fetch();
        },
        useSearchTerms: () => [
            m.intl.string(m.t["+/hZM/"]),
            m.intl.string(m.t.bsbMVz),
            m.intl.string(m.t.f7yOAX),
            m.intl.string(m.t.FYKGsL),
            m.intl.string(m.t["+KCMSi"]),
        ],
    });
var xh = i(46225);
let xE = [Q.fg2.LEAGUE_OF_LEGENDS, Q.fg2.RIOT_GAMES],
    xx = (0, o.zZ)(d.X.CONNECTIONS_ADD_CONNECTIONS_CATEGORY, {
        buildLayout: () => [xm],
        useInlineNotice: function () {
            let e = (0, R.bG)([EW.A], () => EW.A.getAccounts().find((e) => xE.includes(e.type))?.type),
                t = null != e ? Ew.A.get(e) : null,
                i = (0, eq.h)(t?.replacedBy),
                { canStartAuthorization: n, hasAlreadyLinked: s, fetched: l } = (0, xh.RD)(i),
                r = m.intl.string(xs.default["1S6oAo"]),
                a = (0, EF.useIsRiotSocialSDKMigrationEnabled)({ location: "RiotDeprecationInlineNotice" });
            return N.useMemo(
                () =>
                    a && null != t && n && i?.connectionEntrypointUrl != null && !s && l
                        ? {
                              type: e_.lT.INLINE_NOTICE,
                              noticeType: "info",
                              useText: () =>
                                  m.intl.format(xs.default.DeOsIl, {
                                      connectionName: t.name,
                                      applicationName: r,
                                      connectionEntrypointUrl: i.connectionEntrypointUrl,
                                  }),
                          }
                        : null,
                [t, r, i, n, a, s, l],
            );
        },
    }),
    xT = (0, o.zZ)(d.X.CONNECTIONS_CONNECTED_ACCOUNTS_CATEGORY, { buildLayout: () => [xA] }),
    xS = (0, o.t_)(d.X.CONNECTIONS_PANEL, {
        useTitle: () => m.intl.string(m.t["3fe7U5"]),
        useObscuredNotice: u0.L,
        buildLayout: () => [xx, xT],
    }),
    xp = (0, o.i4)(d.X.CONNECTIONS_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t["3fe7U5"]),
        icon: hj.q,
        buildLayout: () => [xS],
    }),
    xf = (0, o.WI)(d.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => m.intl.string(m.t.BA9200),
        buildLayout: () => [iB, eg, il, xp, EU],
    });
var xN = i(631670),
    x_ = i(619499),
    xC = i(836602),
    xI = i(591179),
    xb = i(854627),
    xv = i(975732),
    xj = i(761508),
    xy = i(83257),
    xO = i(159001),
    xR = i(344346),
    xL = i(919395),
    xD = i(233641);
function xP(e) {
    let { title: t, children: i } = e;
    return (0, f.jsxs)("div", {
        children: [(0, f.jsx)(eh.D, { variant: "text-md/medium", className: xD.Vf, children: t }), i],
    });
}
function xG(e) {
    let {
        children: t,
        className: i,
        layoutClassName: n,
        profilePreview: s,
        profilePreviewTitle: l,
        nameplatePreview: r,
        stickyPreview: a = !0,
    } = e;
    return (0, f.jsx)("div", {
        className: eF()(xD.UA, i),
        children: (0, f.jsxs)("div", {
            className: eF()(xD.yt, n),
            children: [
                (0, f.jsx)("div", {
                    className: eF()(xD.Fp, a && xD.Oz),
                    children: (0, f.jsxs)(f.Fragment, {
                        children: [
                            (0, f.jsx)(xP, { title: l ?? m.intl.string(m.t.Zb06yP), children: s }),
                            null != r ? (0, f.jsx)(xP, { title: m.intl.string(m.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, f.jsx)("div", { className: xD.oB, children: t }),
            ],
        }),
    });
}
var xU = i(986687),
    xM = i(101058),
    xV = i(841595),
    xk = i(696451),
    xw = i(10478);
function xF() {
    return (0, f.jsxs)("div", {
        className: xw.p$,
        children: [
            (0, f.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: xw.Sl }),
            (0, f.jsx)(eh.D, {
                className: xw.h8,
                variant: "heading-lg/extrabold",
                children: m.intl.string(m.t.Z1OZCV),
            }),
            (0, f.jsx)(k.E, { className: xw.h8, variant: "text-md/normal", children: m.intl.string(m.t.ZSt4Tt) }),
            (0, f.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: xw.h8,
                children: (0, f.jsx)(eE.$, {
                    variant: "primary",
                    text: m.intl.string(m.t.jQ3pqt),
                    onClick: () => {
                        (0, sO.pX)(Q.BVt.GUILD_DISCOVERY), (0, sE.default)();
                    },
                }),
            }),
        ],
    });
}
var xB = i(81400),
    xz = i(757036),
    xY = i(252732),
    xX = i(355622),
    xH = i(408018),
    xK = i(201349),
    xW = i(158983);
let xZ = (0, sS.Ld)(),
    xq = (0, t1.createChannelRecord)({ id: "1", type: Q.rbe.DM }),
    xQ = (0, sS.Ld)();
function xJ(e) {
    let {
            sectionTitle: t,
            errors: i,
            onBioChange: n,
            pendingBio: s,
            placeholder: l,
            currentBio: r,
            disabled: a = !1,
        } = e,
        [o, u] = N.useState(s ?? r),
        [d, c] = N.useState((0, xH.x7)(o)),
        g = N.useRef(r),
        A = N.useRef(!1);
    return (
        N.useEffect(() => {
            if (g.current !== r) {
                let e = (0, xH.x7)(r);
                u(r), c(e);
            }
            g.current = r;
        }, [r]),
        N.useEffect(() => {
            void 0 !== s || o === r || A.current || (u(r), c((0, xH.x7)(r)));
        }, [s, r, o]),
        (0, f.jsxs)(oq.A, {
            title: t,
            titleId: xZ,
            description: m.intl.string(m.t.Bbw6Ac),
            errors: i,
            disabled: a,
            children: [
                (0, f.jsx)(xK.Ay, {
                    "aria-describedby": xQ,
                    "aria-labelledby": xZ,
                    className: xW.i,
                    innerClassName: xW.Z,
                    maxCharacterCount: Q.NA2,
                    onChange: function (e, t, i) {
                        t !== o && (u(t), c(i), n(t));
                    },
                    placeholder: l,
                    channel: xq,
                    textValue: o,
                    richValue: d,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: ey.USER_SETTINGS_MODAL_KEY,
                    type: xX.oU.PROFILE_BIO_INPUT,
                    onBlur: () => {
                        A.current = !1;
                    },
                    onFocus: () => {
                        A.current = !0;
                    },
                    focused: A.current,
                    onSubmit: function () {
                        return new Promise((e) => {
                            e({ shouldClear: !1, shouldRefocus: !0 });
                        });
                    },
                }),
                (0, f.jsx)(z.A, { id: xQ, children: m.intl.format(m.t["+DFxLc"], { maxLength: Q.NA2 }) }),
            ],
        })
    );
}
var x$ = i(930861),
    x0 = i(821956),
    x1 = i(562819),
    x2 = i(84540),
    x3 = i(408919);
function x6(e) {
    let { user: t, guild: i, className: n, sectionTitle: s, forcedDivider: l = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, nU.Ay)(),
        o = (0, xL.a4)({ user: t, guildId: i?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, xL.CP)(i?.id),
        c = r ? x$.wL : aV.$n;
    return (0, f.jsx)(oq.A, {
        className: n,
        forcedDivider: l,
        hasBackground: !0,
        title: s,
        errors: d,
        children: (0, f.jsxs)("div", {
            className: x3.NC,
            children: [
                (0, f.jsx)(c, {
                    size: aV.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, x1.L)({ analyticsLocations: a, guild: i });
                    },
                    className: eF()({ [x3.yj]: r }),
                    children: m.intl.string(m.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, f.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: x3.DT,
                        children: (0, f.jsx)(eE.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, x0.uZ)(t, i) ? m.intl.string(m.t.CHf9iJ) : m.intl.string(m.t.OrokWm),
                            onClick: () => {
                                (0, x2.p)({ guildId: i?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var x4 = i(339984),
    x7 = i(114077);
let x5 = [{ name: "gif", extensions: ["gif"] }];
function x8(e) {
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
        { newestAnalyticsLocation: g } = (0, nU.Ay)(),
        A = c ? x$.wL : aV.$n,
        h = N.useCallback(() => {
            (0, xY.XD)({
                uploadType: x4.HL.AVATAR,
                analyticsSource: g,
                filters: u ? x5 : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, g, u]);
    return (0, f.jsx)(oq.A, {
        className: a,
        title: s,
        errors: i,
        disabled: o,
        forcedDivider: d,
        children: (0, f.jsxs)("div", {
            className: x7.NC,
            children: [
                (0, f.jsx)(A, {
                    className: eF()({ [x7.yj]: c }),
                    size: aV.$n.Sizes.SMALL,
                    onClick: h,
                    children: l ?? m.intl.string(m.t["4OynCD"]),
                }),
                t &&
                    (0, f.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: x7.DT,
                        children: (0, f.jsx)(eE.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != r ? m.intl.string(m.t.TDjKDm) : m.intl.string(m.t.twB3fz),
                            onClick: () => n(null),
                        }),
                    }),
            ],
        }),
    });
}
var x9 = i(152103);
function Te(e) {
    let { user: t, guildId: i, className: n } = e,
        s = o2.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: l } = (0, nU.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, xL.B0)(t, i),
        d = (0, N.useCallback)(() => {
            X.default.track(Q.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS), (0, nM.L)({ analyticsLocations: l, guildId: i });
        }, [l, i]),
        c = (0, N.useCallback)(() => {
            (0, x2.p)({ displayNameStyles: null }), X.default.track(Q.HAw.DISPLAY_NAME_STYLES_REMOVED);
        }, []),
        g = (0, N.useCallback)(() => {
            (0, x2.p)({ guildId: i, displayNameStyles: null });
        }, [i]),
        A = void 0 !== o || (null != i ? null != a : null != r);
    return (0, f.jsx)(oq.A, {
        title: m.intl.string(nV.default["86GtGH"]),
        className: n,
        showPremiumIcon: s,
        errors: u,
        children: (0, f.jsxs)("div", {
            className: x9.N,
            children: [
                (0, f.jsx)(eE.$, {
                    variant: "primary",
                    size: "sm",
                    text: m.intl.string(nV.default.vJqrIg),
                    onClick: d,
                }),
                null == i &&
                    A &&
                    (0, f.jsx)(eE.$, {
                        variant: "secondary",
                        size: "sm",
                        text: m.intl.string(nV.default.ymq8WQ),
                        onClick: c,
                    }),
                null != i &&
                    null != (void 0 !== o ? o : a) &&
                    (0, f.jsx)(eE.$, {
                        variant: "secondary",
                        size: "sm",
                        text: m.intl.string(nV.default["j/KRxc"]),
                        onClick: g,
                    }),
            ],
        }),
    });
}
var Tt = i(637193),
    Ti = i(727369);
function Tn(e) {
    let { user: t, guild: i, titleIcon: n } = e,
        { analyticsLocations: s } = (0, nU.Ay)(),
        l = null != i,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, xL.rv)(t, i?.id),
        d = N.useCallback(() => {
            (0, Tt.p)({ analyticsLocations: s, guildId: i?.id });
        }, [s, i?.id]),
        c = N.useCallback(() => {
            (0, x2.p)({ guildId: i?.id, nameplate: null });
        }, [i?.id]);
    return (0, f.jsx)(oq.A, {
        title: m.intl.string(m.t.x5CoXR),
        titleIcon: n,
        errors: u,
        children: (0, f.jsxs)("div", {
            className: Ti.u,
            children: [
                (0, f.jsx)(eE.$, { variant: "primary", size: "sm", text: m.intl.string(m.t.BwdeM1), onClick: d }),
                (void 0 === o ? (l ? a : r) != null : null != o) &&
                    (0, f.jsx)(eE.$, {
                        variant: "secondary",
                        size: "sm",
                        text: l ? m.intl.string(m.t.CHf9iJ) : m.intl.string(m.t["9zwziY"]),
                        onClick: c,
                    }),
            ],
        }),
    });
}
var Ts = i(33023);
function Tl(e) {
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
        { newestAnalyticsLocation: c } = (0, nU.Ay)(),
        g = d ? x$.wL : aV.$n;
    return (0, f.jsx)(oq.A, {
        className: l,
        title: m.intl.string(m.t.Vgdusv),
        showPremiumIcon: a,
        errors: i,
        disabled: r,
        forcedDivider: u,
        children: (0, f.jsxs)("div", {
            className: Ts.NC,
            children: [
                (0, f.jsx)(g, {
                    className: eF()({ [Ts.yj]: d }),
                    size: aV.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, xY.XD)({ uploadType: x4.HL.BANNER, analyticsSource: c, guildId: s, isTryItOut: o }),
                    children: m.intl.string(m.t.N0bC3P),
                }),
                t &&
                    (0, f.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Ts.DT,
                        children: (0, f.jsx)(eE.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != s ? m.intl.string(m.t.jHlJNS) : m.intl.string(m.t.tT9n7D),
                            onClick: () => n(null),
                        }),
                    }),
            ],
        }),
    });
}
var Tr = i(617061),
    Ta = i(872246);
function To(e) {
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
        { analyticsLocations: u } = (0, nU.Ay)(),
        d = o2.Ay.canUsePremiumProfileCustomization(t),
        c = (0, xL.N2)({ user: t, guildId: i?.id }),
        { pendingProfileEffect: g, errors: A } = (0, xL.nZ)(i?.id);
    N.useEffect(() => {
        d &&
            X.default.track(Q.HAw.PREMIUM_UPSELL_VIEWED, {
                type: sf.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            });
    }, [d, u]);
    let h = a ? x$.wL : aV.$n;
    return (0, f.jsx)(oq.A, {
        forcedDivider: r,
        borderType: d9.i.PREMIUM,
        hasBackground: !0,
        title: l,
        showBorder: o,
        errors: A,
        className: s,
        children: (0, f.jsxs)("div", {
            className: Ta.NC,
            children: [
                (0, f.jsx)(h, {
                    size: aV.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, Tr.W)({ analyticsLocations: u, guild: i, initialSelectedEffect: n });
                    },
                    className: eF()({ [Ta.yj]: a }),
                    children: m.intl.string(m.t["/dRfCf"]),
                }),
                (void 0 === g ? null != c : null != g) &&
                    (0, f.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Ta.DT,
                        children: (0, f.jsx)(eE.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != i ? m.intl.string(m.t.CHf9iJ) : m.intl.string(m.t.uMuafO),
                            onClick: () => {
                                (0, x2.p)({ guildId: i?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var Tu = i(13875),
    Td = i(515727),
    Tc = i(238780);
function Tg(e) {
    let { user: t, guild: i, sectionTitle: n } = e,
        { analyticsLocations: s } = (0, nU.Ay)(),
        l = (0, Tu.sk)("ProfileFrameSection"),
        r = (0, xL.Xf)({ user: t, guildId: i?.id }),
        { pendingProfileFrame: a, errors: o } = (0, xL.Tu)(i?.id),
        [u, d] = (0, eS.kn)([eT.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        c = u === eT.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return l
        ? (0, f.jsx)(oq.A, {
              showBorder: c,
              borderType: c ? d9.i.NEW_UPSELL : d9.i.PREMIUM,
              hasBackground: c,
              title: n,
              titleBadge: c ? (0, f.jsx)(n8.Lp, { text: m.intl.string(m.t.y2b7CA), className: Tc.Ad }) : void 0,
              description: c ? m.intl.string(m.t.yMoMAt) : void 0,
              errors: o,
              children: (0, f.jsxs)("div", {
                  className: Tc.NC,
                  children: [
                      (0, f.jsx)(eE.$, {
                          variant: "primary",
                          size: "sm",
                          text: m.intl.string(m.t["9/hmle"]),
                          onClick: () => {
                              (0, Td.w)({ analyticsLocations: s, guild: i }), d(t9.i.TAKE_ACTION);
                          },
                      }),
                      (void 0 === a ? null != r : null != a) &&
                          (0, f.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: Tc.DT,
                              children: (0, f.jsx)(eE.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: null != i ? m.intl.string(m.t.CHf9iJ) : m.intl.string(m.t.nQBruk),
                                  onClick: () => {
                                      (0, x2.p)({ guildId: i?.id, profileFrame: null });
                                  },
                              }),
                          }),
                  ],
              }),
          })
        : null;
}
var Tm = i(33851),
    TA = i.n(Tm),
    Th = i(602853),
    TE = i(654107),
    Tx = i(999291),
    TT = i(101928),
    TS = i(835245),
    Tp = i(317097),
    Tf = i(508274),
    TN = i(919796),
    T_ = i(773431);
function TC(e) {
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
        d = N.useRef(null),
        c = (0, Th.r)(F.A.colors.BACKGROUND_BASE_LOW).hex(),
        g = F.A.colors.BACKGROUND_MOD_MUTED.css,
        A = (0, xY.sN)(n),
        h = (0, Tp.Hl)(n),
        E = h === c ? g : h,
        x = A ? F.A.unsafe_rawColors.WHITE.css : F.A.unsafe_rawColors.PRIMARY_530.css,
        T = (0, TN.A)(a),
        S = (0, TN.A)(o),
        [p, _] = N.useState((0, TS.A)());
    return (
        N.useEffect(() => {
            (T !== a || S !== o) && _((0, TS.A)());
        }, [o, a, S, T]),
        (0, f.jsx)(G.Y, {
            targetElementRef: d,
            positionKey: p,
            renderPopout: (e) =>
                (0, f.jsx)(Tf.VN, {
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
                return (0, f.jsxs)("div", {
                    ref: d,
                    className: eF()(T_.oP, { [T_.r9]: l }),
                    children: [
                        (0, f.jsx)(V.D, {
                            ...i,
                            tabIndex: l ? -1 : 0,
                            onClick: l ? Q.tEg : t,
                            style: { backgroundColor: h, borderColor: E },
                            className: T_.nf,
                            "aria-label": m.intl.string(m.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, f.jsx)(o1.R, {
                                size: "custom",
                                className: T_.BW,
                                width: 14,
                                height: 14,
                                color: x,
                            }),
                        }),
                        r,
                    ],
                });
            },
        })
    );
}
var TI = i(362656);
function Tb(e) {
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
        c = (0, Tx.Ay)(t.id, r),
        { primaryColor: g, secondaryColor: A } = (0, TT.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: n,
            isPreview: !0,
        }),
        h = o2.Ay.canUsePremiumProfileCustomization(t),
        E = null != i ? i : t.getAvatarURL(r, 80),
        x = (0, Th.r)(F.A.unsafe_rawColors.PRIMARY_530).hex(),
        T = (0, TE.rh)(E, x, !1);
    if (null == g || null == A) return null;
    let S = (e) => {
        s(TA()(e, c?.themeColors) ? void 0 : e);
    };
    return (0, f.jsx)(oq.A, {
        title: m.intl.string(m.t.DMeO2X),
        disabled: !h && !l,
        className: eF()(TI.__invalid_profileThemesSection, a),
        showPremiumIcon: o,
        forcedDivider: d,
        children: (0, f.jsxs)("div", {
            className: TI.hd,
            children: [
                (0, f.jsx)("div", {
                    className: TI.YX,
                    children: (0, f.jsx)(TC, {
                        onChange: (e) => S([e, A]),
                        color: g,
                        suggestedColors: T,
                        showEyeDropper: !0,
                        label: (0, f.jsx)(k.E, {
                            className: TI.yz,
                            color: "text-default",
                            variant: "text-xs/normal",
                            "aria-hidden": !0,
                            children: m.intl.string(m.t.C3KTQk),
                        }),
                    }),
                }),
                (0, f.jsx)("div", {
                    className: TI.YX,
                    children: (0, f.jsx)(TC, {
                        onChange: (e) => S([g, e]),
                        color: A,
                        suggestedColors: T,
                        showEyeDropper: !0,
                        label: (0, f.jsx)(k.E, {
                            className: TI.yz,
                            color: "text-default",
                            variant: "text-xs/normal",
                            "aria-hidden": !0,
                            children: m.intl.string(m.t["8elvy6"]),
                        }),
                    }),
                }),
                u &&
                    null != r &&
                    (0, f.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TI.WA,
                        children: (0, f.jsx)(eE.$, {
                            variant: "secondary",
                            size: "sm",
                            text: m.intl.string(m.t["L+GmoR"]),
                            onClick: () => S([null, null]),
                        }),
                    }),
            ],
        }),
    });
}
function Tv(e) {
    let {
            sectionTitle: t,
            errors: i,
            onPronounsChange: n,
            pendingPronouns: s,
            placeholder: l,
            currentPronouns: r,
            disabled: a = !1,
        } = e,
        o = (0, sS.GV)();
    return (0, f.jsx)(oq.A, {
        title: t,
        titleId: o,
        errors: i,
        disabled: a,
        children: (0, f.jsx)(lD.k, {
            "aria-labelledby": o,
            placeholder: l ?? m.intl.string(m.t.NPEUUu),
            maxLength: 40,
            value: s ?? r,
            onChange: function (e) {
                n(e === r ? void 0 : e);
            },
            disabled: a,
        }),
    });
}
var Tj = i(427262),
    Ty = i(576705),
    TO = i(376294);
function TR(e) {
    let { errors: t, pendingNick: i, currentNick: n, username: s, user: l, guild: r } = e,
        a = (0, R.bG)([Ty.A], () => Ty.A.can(Q.xBc.CHANGE_NICKNAME, r) || Ty.A.can(Q.xBc.MANAGE_NICKNAMES, r)),
        o = (0, xz.L)(sf.PremiumTypes.TIER_2);
    return (0, f.jsxs)(oq.A, {
        title: m.intl.string(m.t.me1lRk),
        errors: t,
        children: [
            (0, f.jsx)(lD.k, {
                value: i ?? n ?? "",
                placeholder: s,
                maxLength: Q.d0r,
                onChange: function (e) {
                    (0, x2.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : m.intl.string(m.t.gzjxQi),
            }),
            o && (0, f.jsx)(Te, { user: l, guildId: r.id, className: TO.F }),
        ],
    });
}
var TL = i(574173);
let TD = "/assets/b25da78aa7949feb.png";
function TP(e) {
    let { user: t, showOverlay: i, children: n } = e,
        s = (0, d$.Ay)(),
        { analyticsLocations: l } = (0, nU.Ay)(eV.A.PREMIUM_UPSELL_OVERLAY);
    return (N.useEffect(() => {
        i &&
            X.default.track(Q.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: l,
                type: sf.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            });
    }, [i, l]),
    i)
        ? (0, f.jsxs)("div", {
              className: TL.ry,
              children: [
                  (0, f.jsx)("div", { children: n }),
                  (0, f.jsxs)("div", {
                      className: TL.Wc,
                      children: [
                          (0, f.jsx)("img", {
                              className: TL.Tn,
                              alt: m.intl.string(m.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case Q.NJ8.DARK:
                                      case Q.NJ8.DARKER:
                                      case Q.NJ8.MIDNIGHT:
                                          return TD;
                                      case Q.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return TD;
                                  }
                              })(s),
                          }),
                          (0, f.jsxs)("div", {
                              className: TL._9,
                              children: [
                                  (0, f.jsx)(k.E, {
                                      variant: "text-lg/semibold",
                                      color: "always-white",
                                      children: m.intl.string(m.t.dMaDFX),
                                  }),
                                  (0, f.jsx)(k.E, {
                                      variant: "text-sm/normal",
                                      color: "always-white",
                                      children: m.intl.string(m.t.F7sgFH),
                                  }),
                              ],
                          }),
                          (0, f.jsx)(d8.A, {
                              size: aV.$n.Sizes.LARGE,
                              color: aV.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: o2.Ay.isPremium(t)
                                      ? m.intl.string(m.t.AfRWI8)
                                      : m.intl.string(m.t.nkdUym),
                              },
                              subscriptionTier: sf.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : n;
}
var TG = i(887267);
function TU() {
    var e;
    let t = (0, R.bG)([t6.default], () => {
            let e = t6.default.getCurrentUser();
            return tO()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        i = (0, xz.L)(sf.PremiumTypes.TIER_2),
        n = (0, R.bG)([xC.A, K.A], () => K.A.getGuild(xC.A.selectedGuildId));
    tO()(null != n, "guild should not be null");
    let {
            pendingAvatar: s,
            pendingNickname: l,
            pendingBanner: r,
            pendingBio: a,
            pendingPronouns: o,
            pendingThemeColors: u,
            errors: d,
        } = (0, R.cf)([xC.A], () => ({ ...xC.A.getPendingChanges(n.id), errors: xC.A.getErrors(n.id) })),
        c = (0, xM.V7)({ userId: t.id, image: s }),
        g = (0, xB.EC)(n.id),
        A = (0, R.bG)([xk.Ay], () => (null == n.id ? null : xk.Ay.getMember(n.id, t.id))),
        h = (0, R.bG)([xV.A], () => xV.A.getGuildMemberProfile(t.id, n.id)),
        E = o2.Ay.canUsePremiumProfileCustomization(t),
        x = (0, xL.z5)(s, A?.avatar),
        T = (0, xL.Ac)(r, h?.banner),
        S = ((e = h?.themeColors), void 0 === u ? null != e : u?.[0] != null && u?.[1] != null),
        p = h?.bio ?? "",
        N = h?.pronouns ?? "";
    return (0, f.jsxs)("div", {
        className: TG.Q,
        children: [
            (0, f.jsx)(
                TR,
                {
                    errors: d?.nick ?? g?.nick,
                    username: Tj.Ay.getName(t),
                    pendingNick: l,
                    currentNick: A?.nick,
                    user: t,
                    guild: n,
                },
                "nick",
            ),
            (0, f.jsx)(
                Tv,
                {
                    sectionTitle: m.intl.string(m.t["+T3RI/"]),
                    errors: d?.pronouns,
                    onPronounsChange: (e) => (0, x2.p)({ guildId: n.id, pronouns: e }),
                    pendingPronouns: o,
                    currentPronouns: N,
                },
                "pronouns",
            ),
            (0, f.jsxs)(TP, {
                user: t,
                showOverlay: !E,
                children: [
                    (0, f.jsx)(
                        x8,
                        {
                            sectionTitle: (0, f.jsxs)(f.Fragment, {
                                children: [
                                    m.intl.string(m.t.lqaIxI),
                                    (0, f.jsx)(e1.m, {
                                        text: m.intl.string(m.t["5AFxuK"]),
                                        children: (0, f.jsx)(oK.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: TG.a,
                                        }),
                                    }),
                                ],
                            }),
                            showRemoveAvatarButton: x,
                            onAvatarChange: (e) =>
                                (0, xY.rM)(e, A?.avatar, (e) => (0, x2.p)({ guildId: n.id, avatar: e })),
                            errors: d?.avatar,
                            guildId: n.id,
                            disabled: !E,
                        },
                        "avatar",
                    ),
                    (0, f.jsx)(
                        x6,
                        {
                            sectionTitle: (0, f.jsxs)(f.Fragment, {
                                children: [
                                    m.intl.string(m.t["7v0T9P"]),
                                    (0, f.jsx)(e1.m, {
                                        text: m.intl.string(m.t["5AFxuK"]),
                                        children: (0, f.jsx)(oK.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: TG.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: t,
                            guild: n,
                        },
                        "decoration",
                    ),
                    !i && (0, f.jsx)(Te, { user: t, guildId: n.id }),
                    (0, f.jsx)(
                        Tn,
                        {
                            user: t,
                            guild: n,
                            titleIcon: (0, f.jsx)(e1.m, {
                                text: m.intl.string(m.t["5AFxuK"]),
                                children: (0, f.jsx)(oK.t, { size: "md", color: "currentColor", className: TG.a }),
                            }),
                        },
                        "nameplate",
                    ),
                    (0, f.jsx)(
                        To,
                        {
                            sectionTitle: (0, f.jsxs)(f.Fragment, {
                                children: [
                                    m.intl.string(m.t.wR5wOo),
                                    (0, f.jsx)(e1.m, {
                                        text: m.intl.string(m.t["5AFxuK"]),
                                        children: (0, f.jsx)(oK.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: TG.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: t,
                            guild: n,
                        },
                        "effect",
                    ),
                    (0, f.jsx)(Tg, { user: t, guild: n, sectionTitle: m.intl.string(m.t.GWrZOd) }, "frame"),
                    (0, f.jsx)(
                        Tl,
                        {
                            showRemoveBannerButton: T,
                            errors: d?.banner,
                            onBannerChange: (e) =>
                                (0, xY.rM)(e, h?.banner, (e) => (0, x2.p)({ guildId: n.id, banner: e })),
                            guildId: n.id,
                            disabled: !E,
                        },
                        "banner",
                    ),
                    (0, f.jsx)(Tb, {
                        user: t,
                        pendingAvatarSrc: c,
                        pendingColors: u,
                        onThemeColorsChange: (e) => (0, x2.p)({ guildId: n.id, themeColors: e }),
                        guildId: n.id,
                        showResetThemeButton: S,
                    }),
                    (0, f.jsx)(
                        xJ,
                        {
                            placeholder: m.intl.string(m.t["/7NKgv"]),
                            sectionTitle: (0, f.jsxs)(f.Fragment, {
                                children: [
                                    m.intl.string(m.t.ZzAR2Y),
                                    (0, f.jsx)(e1.m, {
                                        text: m.intl.string(m.t["5AFxuK"]),
                                        children: (0, f.jsx)(oK.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: TG.a,
                                        }),
                                    }),
                                ],
                            }),
                            onBioChange: (e) => (0, x2.p)({ guildId: n.id, bio: e }),
                            errors: d?.bio ?? g?.bio,
                            pendingBio: a,
                            currentBio: p,
                            disabled: !E,
                        },
                        "about",
                    ),
                ],
            }),
        ],
    });
}
var TM = i(405318);
function TV(e) {
    (0, C.openModalLazy)(async () => {
        let { default: t } = await Promise.all([i.e("2125"), i.e("66901"), i.e("61129")]).then(i.bind(i, 475312));
        return (i) => (0, f.jsx)(t, { source: { ...e, page: Q.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...i });
    });
}
function Tk(e) {
    let { selectedGuild: t, onGuildChange: i } = e,
        { analyticsLocations: n } = (0, nU.Ay)(eV.A.USER_SETTINGS_GUILD_PROFILE),
        s = (0, R.bG)([t6.default], () => {
            let e = t6.default.getCurrentUser();
            return tO()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        l = (0, R.bG)([xk.Ay], () => (null != t ? xk.Ay.getMember(t.id, s.id) : null)),
        r = (0, R.bG)([xV.A], () => !xV.A.isFetchingProfile(s.id, t?.id)),
        a = (0, R.bG)([eC.A], () => eC.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, R.cf)([xC.A], () => xC.A.getPendingChanges(t?.id)),
        c = (0, xM.V7)({ userId: s.id, image: o }),
        g = (0, xL.lw)({
            pendingValue: u,
            userValue: s?.collectibles?.nameplate,
            guildValue: l?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: A } = (0, xL.B0)(s, t?.id);
    return (N.useEffect(() => () => n6.h.wait(xO.IM), []), a)
        ? (0, f.jsx)(u0.A, {})
        : r
          ? (0, f.jsxs)(nU.f5, {
                value: n,
                children: [
                    (0, f.jsx)(k.E, {
                        variant: "text-sm/normal",
                        children: m.intl.format(m.t["/PTB2E"], {
                            helpCenterLink: to.A.getArticleURL(Q.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, f.jsxs)(f.Fragment, {
                              children: [
                                  (0, f.jsx)(oZ.A, { guildId: t.id, onChange: i }),
                                  (0, f.jsx)(xG, {
                                      profilePreviewTitle: (0, f.jsx)(eh.D, {
                                          variant: "heading-md/medium",
                                          className: TM.YV,
                                          children: m.intl.formatToPlainString(m.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, f.jsx)(xU.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: A,
                                          user: s,
                                          guild: t,
                                          canUsePremiumCustomization: o2.Ay.canUsePremiumProfileCustomization(s),
                                          onUpsellClick: TV,
                                          containerClassName: TM.ti,
                                      }),
                                      nameplatePreview: (0, f.jsx)(xR.A, {
                                          ...d,
                                          pendingDisplayNameStyles: A,
                                          user: s,
                                          guildId: t?.id,
                                          nameplate: g,
                                          className: null == g ? TM.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, f.jsx)(TU, {}),
                                  }),
                              ],
                          })
                        : (0, f.jsx)(xF, {}),
                ],
            })
          : (0, f.jsx)(u3.y, {});
}
var Tw = i(903209),
    TF = i(39409);
let TB = (e) => {
    let { children: t, notice: i } = e;
    return (0, f.jsxs)("div", { className: TF.r, children: [i, (0, f.jsx)("div", { children: t })] });
};
var Tz = i(269115),
    TY = i(823092),
    TX = i(859040),
    TH = i(379197),
    TK = i(488430),
    TW = i(457421),
    TZ = i(940622),
    Tq = i(559474),
    TQ = i(144030);
let TJ = () => {
    let e,
        t,
        i,
        n,
        { analyticsLocations: s } = (0, nU.Ay)(eV.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        l = N.useRef(null),
        {
            asset: r,
            popoutAsset: a,
            title: o,
            body: u,
            version: d,
            revertTextColor: c,
        } = ((e = (0, TZ.mb)(Tq.RN.UPSELL_BANNER)),
        (t = (0, TZ.mb)(Tq.RN.UPSELL_BANNER_POPOUT)),
        (i = (0, R.bG)([TW.A], () => TW.A.getMarketingBySurface(TH.R.EDIT_PROFILE_SETTINGS))),
        (n = N.useMemo(
            () =>
                null != i
                    ? i
                    : {
                          asset: "/assets/30e2c68819facd98.png",
                          popoutAsset: "/assets/c6d55507d7473057.png",
                          title: m.intl.string(m.t.QZVVBh),
                          body: m.intl.string(m.t.sajmAq),
                          version: 0,
                          revertTextColor: !1,
                      },
            [i],
        )),
        N.useMemo(
            () => ({ ...n, type: TK.G.BANNER, asset: e ?? n.asset, popoutAsset: t ?? n.popoutAsset }),
            [e, t, n],
        )),
        { navigateWithValidation: g } = (0, TY.L_)();
    return (
        N.useEffect(() => {
            X.default.track(Q.HAw.PREMIUM_UPSELL_VIEWED, {
                type: sf.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: s,
                version: d,
            });
        }, [s, d]),
        (0, f.jsxs)("div", {
            ref: l,
            className: TQ.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, f.jsx)("div", {
                    className: TQ.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, f.jsx)("img", { src: a, className: TQ.Qw, alt: "" }),
                }),
                (0, f.jsxs)("div", {
                    className: TQ.Em,
                    children: [
                        (0, f.jsx)(eh.D, {
                            variant: "heading-lg/extrabold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: TQ.DD,
                            children: o,
                        }),
                        (0, f.jsx)(k.E, {
                            variant: "text-sm/normal",
                            color: c ? "text-overlay-dark" : "currentColor",
                            children: u,
                        }),
                    ],
                }),
                (0, f.jsx)(eE.$, {
                    onClick: () => {
                        g(() =>
                            (0, TX.Cz)({
                                analyticsLocations: s,
                                analyticsSource: eV.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                            }),
                        );
                    },
                    variant: "overlay-primary",
                    text: m.intl.string(m.t.fYfGgK),
                }),
            ],
        })
    );
};
var T$ = i(451909),
    T0 = i(202639),
    T1 = i(400669),
    T2 = i(835071),
    T3 = i(422936),
    T6 = i(234419),
    T4 = i(590180),
    T7 = i(898461),
    T5 = i(207803),
    T8 = i(508425),
    T9 = i(559949);
let Se = {
        above_the_clouds: {
            preset: "above_the_clouds",
            themeColors: [752280, 9215590],
            avatarDecorationSkuId: "1144059132517826601",
            displayNameStyles: { fontId: T9.x.CHICLE, effectId: T8.z.POP, colors: [959694] },
            getName: () => m.intl.string(m.t["TFc+iF"]),
            getHeaderSrc: () => i(702051).A,
            getBannerSrc: (e) => (e ? i(735161).A : i(887e3).A),
        },
        cyberpunk: {
            preset: "cyberpunk",
            themeColors: [1967991, 742532],
            avatarDecorationSkuId: null,
            displayNameStyles: { fontId: T9.x.PIXELIFY, effectId: T8.z.NEON, colors: [2949343] },
            getName: () => m.intl.string(m.t["4g+5bq"]),
            getHeaderSrc: () => i(272017).A,
            getBannerSrc: (e) => (e ? i(735271).A : i(208574).A),
        },
        shadow_realm: {
            preset: "shadow_realm",
            themeColors: [0, 4458504],
            avatarDecorationSkuId: "1144058522808614923",
            displayNameStyles: { fontId: T9.x.NEO_CASTEL, effectId: T8.z.TOON, colors: [0xff0000] },
            getName: () => m.intl.string(m.t.ycg1xj),
            getHeaderSrc: () => i(863653).A,
            getBannerSrc: (e) => (e ? i(538263).A : i(576974).A),
        },
        starlit_dream: {
            preset: "starlit_dream",
            themeColors: [5123751, 590625],
            avatarDecorationSkuId: "1144058844004233369",
            displayNameStyles: { fontId: T9.x.CHERRY_BOMB, effectId: T8.z.TOON, colors: [3343795] },
            getName: () => m.intl.string(m.t["9WLHvr"]),
            getHeaderSrc: () => i(434361).A,
            getBannerSrc: (e) => (e ? i(700309).A : i(135572).A),
        },
        neon_space: {
            preset: "neon_space",
            themeColors: [6094952, 1007678],
            avatarDecorationSkuId: null,
            displayNameStyles: { fontId: T9.x.MUSEO_MODERNO, effectId: T8.z.NEON, colors: [28737] },
            getName: () => m.intl.string(m.t.UdNuqi),
            getHeaderSrc: () => i(301928).A,
            getBannerSrc: (e) => (e ? i(285974).A : i(775627).A),
        },
    },
    St = (e) => Se[e],
    Si = Object.keys(Se),
    Sn = (e) => {
        let t = null == e ? Si : Si.filter((t) => t !== e);
        return t[Math.floor(Math.random() * t.length)];
    };
var Ss = i(371912),
    Sl = i(674253);
function Sr(e) {
    let { preset: t, onShuffle: i } = e,
        n = (0, R.bG)([iW.A], () => iW.A.useReducedMotion),
        s = (0, Ss.Xf)({ useReducedMotion: n }),
        { name: l, header: r } = N.useMemo(() => {
            let e = St(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, f.jsxs)("div", {
        className: Sl.kL,
        children: [
            (0, f.jsx)(V.D, {
                onClick: () => {
                    i(), s.startAnimation(!1);
                },
                className: Sl.x6,
                "aria-label": m.intl.string(m.t["44yJxh"]),
                children: s.render(),
            }),
            (0, f.jsxs)(V.D, {
                onClick: () => {
                    i(), s.startAnimation(!1);
                },
                "aria-label": `${l}: ${m.intl.string(m.t["44yJxh"])}`,
                className: Sl.Lt,
                children: [
                    (0, f.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: Sl.L_ }),
                    (0, f.jsx)(k.E, { className: Sl._e, variant: "text-sm/bold", color: "always-white", children: l }),
                ],
            }),
        ],
    });
}
var Sa = i(410516),
    So = i(811611),
    Su = i(515718),
    Sd = i(507553);
function Sc(e, t) {
    let i = Sd.A.useField("scrollPosition"),
        n = (0, R.bG)([iW.A], () => iW.A.useReducedMotion);
    (0, N.useEffect)(() => {
        let s = e.current;
        if (null == s || i !== t) return;
        let l = requestAnimationFrame(() => {
            s.scrollIntoView({ behavior: n ? "auto" : "smooth" }), Sd.A.setState({ scrollPosition: null });
        });
        return () => cancelAnimationFrame(l);
    }, [e, t, i, n]);
}
var Sg = i(844222),
    Sm = i(314649);
function SA(e) {
    let { user: t } = e,
        { reducedMotion: n } = N.useContext(Sg.C),
        {
            pendingAvatar: s,
            pendingBanner: l,
            pendingAvatarDecoration: r,
            pendingProfileEffect: a,
            pendingDisplayNameStyles: o,
            pendingThemeColors: u,
            pendingPronouns: d,
            pendingBio: c,
            tryItOutThemeColors: g,
            tryItOutAvatar: m,
            tryItOutBanner: A,
            tryItOutAvatarDecoration: h,
            tryItOutDisplayNameStyles: E,
        } = (0, R.cf)([xC.A], () => {
            let e = xC.A.getPendingChanges(),
                t = xC.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        x = (0, xM.V7)({ userId: t.id, image: m ?? s });
    return (0, f.jsx)(xU.A, {
        user: t,
        pendingPronouns: d,
        pendingBio: c,
        pendingBanner: A ?? l ?? i(636763),
        pendingDisplayNameStyles: E ?? o,
        pendingAvatar: x,
        pendingThemeColors: g ?? u,
        pendingAvatarDecoration: void 0 !== h ? h : r,
        pendingProfileEffect: a,
        avatarClassName: null != m || null != s || n.enabled ? void 0 : Sm.WX,
        containerClassName: Sm.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var Sh = i(461414);
function SE(e) {
    let { user: t, isVisible: i, shouldShow: n } = e,
        s = o2.Ay.isPremium(t),
        l = o2.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, R.cf)([xC.A], () => {
            let e = xC.A.getPendingChanges(),
                t = xC.A.getErrors(),
                i = xC.A.getTryItOutChanges();
            return { ...e, ...i, errors: t };
        }),
        { preset: c, onShuffle: g } = (function () {
            let e = (0, R.bG)([iW.A], () => iW.A.useReducedMotion),
                [t, i] = (0, N.useState)(Sn()),
                {
                    banner: n,
                    themeColors: s,
                    avatarDecorationSkuId: l,
                    displayNameStyles: r,
                } = (0, N.useMemo)(() => {
                    let i = St(t);
                    return {
                        banner: i.getBannerSrc(e),
                        themeColors: i.themeColors,
                        avatarDecorationSkuId: i.avatarDecorationSkuId,
                        displayNameStyles: i.displayNameStyles,
                    };
                }, [t, e]),
                a = (0, R.bG)([T4.A], () => {
                    let e = T4.A.getProduct(l);
                    return (0, T7.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, N.useEffect)(() => {
                (0, T5.w5)({ banner: n, themeColors: s, avatarDecoration: a, displayNameStyles: r });
            }, [n, s, a, r]);
            let o = (0, N.useCallback)(() => {
                let e = Sn(t);
                i(e), X.default.track(Q.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: e });
            }, [t]);
            return { preset: t, onShuffle: o };
        })(),
        A = N.useRef(null);
    Sc(A, nv._F.TRY_IT_OUT);
    let { analyticsLocations: h, sourceAnalyticsLocations: E } = (0, nU.Ay)(eV.A.USER_SETTINGS_TRY_OUT_PREMIUM),
        x = (e) => {
            e &&
                (d?.startsWith("https:") === !0
                    ? fetch(d)
                          .then((e) => e.blob())
                          .then((e) => (0, Su.We)(e))
                          .then((e) => {
                              (0, x2.p)({ avatar: u, themeColors: o, banner: e });
                          })
                          .catch(() => {
                              (0, x2.p)({ avatar: u, themeColors: o });
                          })
                    : null != d
                      ? (0, x2.p)({ avatar: u, themeColors: o, banner: d })
                      : (0, x2.p)({ avatar: u, themeColors: o }),
                X.default.track(Q.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
        };
    N.useEffect(() => {
        i &&
            X.default.track(Q.HAw.PREMIUM_UPSELL_VIEWED, {
                type: sf.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: Q.liQ.USER_SETTINGS },
                location_stack: E,
            });
    }, [E, t, i]);
    let T = (0, T6.V)()?.subscription_trial?.sku_id === sf.pe.TIER_2,
        S = (0, T3.O)(),
        p = (0, Sa.U9)(S, sf.pe.TIER_2);
    return n
        ? (0, f.jsx)(nU.f5, {
              value: h,
              children: (0, f.jsxs)(d9.A, {
                  ref: A,
                  className: Sh.MT,
                  type: d9.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, f.jsx)(xG, {
                          stickyPreview: !1,
                          layoutClassName: Sh.th,
                          profilePreviewTitle: (0, f.jsxs)(f.Fragment, {
                              children: [
                                  (0, f.jsx)(oK.t, { size: "md", color: "currentColor", className: Sh.PC }),
                                  m.intl.string(m.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, f.jsxs)(f.Fragment, {
                              children: [(0, f.jsx)(Sr, { preset: c, onShuffle: g }), (0, f.jsx)(SA, { user: t })],
                          }),
                          children: (0, f.jsxs)("div", {
                              children: [
                                  (0, f.jsxs)("div", {
                                      children: [
                                          (0, f.jsx)(eh.D, {
                                              variant: "heading-xl/extrabold",
                                              children: m.intl.string(m.t["2zGdAW"]),
                                          }),
                                          (0, f.jsx)(k.E, {
                                              className: Sh.h_,
                                              variant: "text-sm/normal",
                                              children: m.intl.string(m.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, f.jsx)(Tb, {
                                      className: Sh.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, xM.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: T5.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, f.jsx)(Tl, {
                                      className: Sh.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: T5.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !l &&
                                      (0, f.jsx)(x8, {
                                          className: Sh.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: T5.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: m.intl.string(m.t["7z0D1c"]),
                                          sectionTitle: m.intl.string(m.t.vtFfPX),
                                      }),
                                  (0, f.jsx)(Te, { user: t, className: Sh.fz }),
                                  !T &&
                                      (0, f.jsx)(k.E, {
                                          variant: "text-sm/normal",
                                          children: m.intl.string(m.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !T &&
                          (0, f.jsx)(T0.d, {
                              onSubscribeModalClose: x,
                              className: Sh.Kv,
                              showUpsell: !0,
                              text: m.intl.format(m.t.TmfgI2, {
                                  onClick: () => {
                                      (0, T2.K)({ onSubscribeFinish: x });
                                  },
                              }),
                              button: s
                                  ? m.intl.string(m.t.AfRWI8)
                                  : p
                                    ? m.intl.formatToPlainString(m.t.bkQ4bH, { percent: S?.discount.amount })
                                    : m.intl.string(m.t.pj0XBN),
                              position: "inline",
                          }),
                      T &&
                          (0, f.jsxs)("div", {
                              children: [
                                  (0, f.jsx)("div", { className: Sh.BU }),
                                  (0, f.jsx)(So.Ay, {
                                      type: sf.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: sf.pe.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
var Sx = i(814390),
    ST = i(909536),
    SS = i(843282),
    Sp = i(145497),
    Sf = i(685073),
    SN = i(534400),
    S_ = i(581781),
    SC = i(743981),
    SI = i(51358);
let Sb = (0, sS.Ld)(),
    Sv = N.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: i, onChange: n } = e,
            s = N.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            l = (0, R.bG)([t6.default], () => (0, Sf.Zo)(t6.default.getCurrentUser()?.primaryGuild).guildId),
            r = void 0 !== i ? i : l,
            a = N.useMemo(
                () => t.reduce((e, t) => (t.profile?.tag != null && e.push({ label: t.name, value: t.id }), e), []),
                [t],
            ),
            o = N.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = s.get(e.value);
                    if (null == t) return null;
                    let i = t.profile?.tag;
                    return null == i
                        ? null
                        : (0, f.jsx)(S_.A, {
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
            u = N.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = s.get(e.value);
                    return null == t || null == t.profile?.tag
                        ? null
                        : (0, f.jsx)(Sp.j, {
                              guildId: t.id,
                              guildName: t.name,
                              guildIcon: t.icon,
                              iconSize: 32,
                              animate: !1,
                          });
                },
                [s],
            ),
            d = N.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = s.get(e.value);
                    if (null == t) return null;
                    let i = t.profile?.tag;
                    return null == i
                        ? null
                        : (0, f.jsx)(SN.o9, {
                              guildId: t.id,
                              guildTag: i,
                              guildBadge: t.profile?.badge ?? void 0,
                              badgeSize: SC.Sl.SIZE_16,
                              textColor: "interactive-text-default",
                              textVariant: "text-sm/semibold",
                          });
                },
                [s],
            ),
            c = N.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, f.jsx)(f.Fragment, { children: o(t) });
                },
                [o],
            ),
            g = N.useCallback(
                (e) => {
                    n?.(e);
                },
                [n],
            ),
            A = N.useCallback((e) => e === r, [r]),
            h = N.useCallback((e) => e, []),
            E = N.useCallback(() => {
                n?.(null);
            }, [n]),
            x = N.useRef(null);
        return (
            Sc(x, nv._F.GUILD_TAG),
            (0, f.jsxs)(oq.A, {
                title: m.intl.string(m.t.Pdd1nd),
                titleId: Sb,
                ref: x,
                children: [
                    (0, f.jsx)(k.E, {
                        className: SI.VA,
                        variant: "text-sm/normal",
                        children: m.intl.string(m.t.mlZ6Jx),
                    }),
                    (0, f.jsx)(SS.Pw, {
                        className: SI.Lt,
                        optionClassName: SI.S0,
                        isSelected: A,
                        options: a,
                        select: g,
                        renderLeading: u,
                        renderTrailing: d,
                        renderOptionValue: c,
                        serialize: h,
                        clear: E,
                        clearable: null != r,
                        maxVisibleItems: 8,
                        "data-migration-pending": !0,
                    }),
                ],
            })
        );
    });
var Sj = i(556729);
let Sy = (0, sS.Ld)();
function SO(e) {
    let t = (0, xz.L)(sf.PremiumTypes.TIER_2);
    return (0, f.jsxs)(oq.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: m.intl.string(m.t["9AjdkD"]),
        titleId: Sy,
        children: [
            (0, f.jsx)("div", {
                children: (0, f.jsx)(lD.k, {
                    "aria-labelledby": Sy,
                    placeholder: e.placeholder,
                    maxLength: Q.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, f.jsx)(Te, { user: e.user, className: Sj.F }),
        ],
    });
}
function SR(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: i } = e,
        n = g.m$.useSetting(),
        s = void 0 !== i ? i : n;
    return (0, f.jsx)(D.d, {
        label: m.intl.string(m.t["3cWDuO"]),
        description: s ? null : m.intl.formatToPlainString(m.t.aYhclf, { username: t }),
        checked: !s,
        onChange: (e) => {
            !e === n ? (0, xN._e)() : (0, x2.p)({ legacyUsernameDisabled: !e });
        },
    });
}
function SL(e) {
    let { user: t, savedUserColor: i, pendingColor: n, setPendingAccentColor: s } = e,
        l = t.getAvatarURL(null, 80),
        r = (0, Th.r)(F.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, TE.rh)(l, r, !1),
        o = (0, Tp.LX)(a[0]);
    return (0, f.jsx)(oq.A, {
        title: m.intl.string(m.t["/X3fkf"]),
        children: (0, f.jsx)(TC, { onChange: (e) => s(e), color: n ?? i ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var SD = i(518477);
let SP = () => {
    let e = (0, R.bG)([cu.default], () => cu.default.getId());
    return (0, f.jsx)(oq.A, {
        title: m.intl.string(m.t.Jzj9q4),
        children: (0, f.jsx)(eE.$, {
            text: m.intl.string(m.t.Geikwq),
            onClick: () => {
                (0, xv.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [eV.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: SD.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var SG = i(594453);
function SU() {
    let e = (0, R.bG)([t6.default], () => {
            let e = t6.default.getCurrentUser();
            return tO()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e;
        }),
        t = (0, R.bG)([xV.A], () => xV.A.getUserProfile(e.id)),
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
        } = (0, R.cf)([xC.A], () => {
            let e = xC.A.getPendingChanges(),
                t = xC.A.getErrors();
            return { ...e, errors: t };
        }),
        g = (0, xM.V7)({ userId: e.id, image: i }),
        A = (0, xB.EC)(),
        h = o2.Ay.canUsePremiumProfileCustomization(e),
        E = (0, xL.z5)(i, e.avatar),
        x = (0, xL.Ac)(s, t?.banner),
        T = (0, Tx.Ay)(e.id),
        S = T?.getLegacyUsername(),
        p = (c.global_name?.length ?? 0) > 0 ? c.global_name : (A?.nick ?? []),
        N = (c.bio?.length ?? 0) > 0 ? c.bio : (A?.bio ?? []),
        _ = (0, R.yK)([K.A, xk.Ay], () =>
            K.A.getGuildsArray().filter(
                (e) => (0, Sf.Rg)(e) && xk.Ay.getSelfMember(e.id)?.joinedAt != null && e.profile?.tag != null,
            ),
        );
    return (0, f.jsxs)("div", {
        className: SG.Q,
        children: [
            (0, f.jsx)(SO, {
                placeholder: e.username,
                errors: p,
                currentGlobalName: e.globalName,
                pendingGlobalName: n,
                onGlobalNameChange: (e) => (0, x2.p)({ globalName: e }),
                user: e,
            }),
            (0, f.jsx)(
                Tv,
                {
                    sectionTitle: m.intl.string(m.t["+T3RI/"]),
                    errors: c.pronouns,
                    onPronounsChange: (e) => (0, x2.p)({ pronouns: e }),
                    pendingPronouns: r,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, f.jsx)(SP, {}),
            (0, f.jsx)(
                x8,
                {
                    onAvatarChange: (e) => {
                        (0, x2.p)({ avatar: e }), (0, xL.WU)(null == e ? "remove" : "set");
                    },
                    showRemoveAvatarButton: E,
                    errors: c.avatar,
                    sectionTitle: m.intl.string(m.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, f.jsx)(x6, { user: e, sectionTitle: m.intl.string(m.t["7v0T9P"]) }, "decoration"),
            (0, f.jsx)(Tn, { user: e }),
            (0, f.jsx)(To, { user: e, sectionTitle: m.intl.string(m.t.wR5wOo) }, "effect"),
            (0, f.jsx)(Tg, { user: e, sectionTitle: m.intl.string(m.t.GWrZOd) }, "frame"),
            h
                ? (0, f.jsxs)(f.Fragment, {
                      children: [
                          (0, f.jsx)(
                              Tl,
                              {
                                  showRemoveBannerButton: x,
                                  errors: c.banner,
                                  onBannerChange: (e) => (0, x2.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, f.jsx)(Tb, {
                              user: e,
                              pendingAvatarSrc: g,
                              pendingColors: o,
                              onThemeColorsChange: (e) => (0, x2.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, f.jsx)(
                      SL,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: a,
                          setPendingAccentColor: (e) => (0, x2.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, f.jsx)(
                xJ,
                {
                    sectionTitle: m.intl.string(m.t.ZzAR2Y),
                    errors: N,
                    onBioChange: (e) => (0, x2.p)({ bio: e }),
                    pendingBio: l,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            _.length > 0 &&
                (0, f.jsx)(Sv, {
                    availablePrimaryGuilds: _,
                    pendingPrimaryGuildId: d,
                    onChange: (e) => (0, x2.p)({ primaryGuildId: e }),
                }),
            null != S && (0, f.jsx)(SR, { legacyUsername: S, pendingLegacyUsernameDisabled: u }, "legacy_username"),
        ],
    });
}
function SM() {
    (0, C.openModalLazy)(async () => {
        let { default: e } = await Promise.all([i.e("2125"), i.e("66901"), i.e("41704")]).then(i.bind(i, 562011));
        return (t) =>
            (0, f.jsx)(e, {
                ...t,
                source: {
                    page: Q.liQ.USER_SETTINGS,
                    section: Q.JJy.SETTINGS_CUSTOMIZE_PROFILE,
                    object: Q.ZSU.BUTTON_CTA,
                    type: Q.AnalyticsObjectTypes.BUY,
                },
            });
    });
}
var SV = i(743539);
function Sk() {
    let e = (0, R.bG)([t6.default], () => {
            let e = t6.default.getCurrentUser();
            return tO()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        t = (0, R.bG)([eC.A], () => eC.A.hidePersonalInformation),
        {
            pendingBio: i,
            pendingAvatar: n,
            pendingNameplate: s,
            showNotice: l,
            ...r
        } = (0, R.cf)([xC.A], () => ({ ...xC.A.getPendingChanges(), showNotice: xC.A.showNotice() })),
        a = (0, xM.V7)({ userId: e.id, image: n }),
        o = (0, xL.lw)({ pendingValue: s, userValue: e?.collectibles?.nameplate }),
        u = (0, Sx.A)() && null != i ? T$.Ay.parse(void 0, i).content : i,
        d = o2.Ay.canUsePremiumProfileCustomization(e),
        c = (0, ST.St)("edit-profile-upsell"),
        { analyticsLocations: g } = (0, nU.Ay)(eV.A.USER_SETTINGS_USER_PROFILE);
    N.useEffect(() => () => n6.h.wait(xN.IM), []);
    let [A, h] = N.useState(!1),
        E = !d,
        x = N.useRef(null);
    return t
        ? (0, f.jsx)(u0.A, {})
        : (0, f.jsxs)(nU.f5, {
              value: g,
              children: [
                  (0, f.jsx)(TJ, {}),
                  (0, f.jsx)(xG, {
                      profilePreview: (0, f.jsx)(xU.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: SM,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: SV.ti,
                      }),
                      nameplatePreview: (0, f.jsx)(xR.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? SV.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, f.jsx)(SU, {}),
                  }),
                  (0, f.jsx)(Tz.L, {
                      innerRef: x,
                      onChange: (e) => h(e),
                      threshold: 0.25,
                      active: E,
                      children: (0, f.jsx)("div", {
                          ref: x,
                          children: (0, f.jsx)(SE, { user: e, shouldShow: E, isVisible: A }),
                      }),
                  }),
                  E &&
                      !l &&
                      (0, f.jsx)(T0.d, {
                          className: SV.EL,
                          showUpsell: !A,
                          text: m.intl.format(m.t.TmfgI2, { onClick: () => (0, T2.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: c
                              ? (0, f.jsx)(T1.l, { size: "md", location: eV.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL })
                              : void 0,
                          button: (0, f.jsx)("div", {
                              className: SV.Xl,
                              children: (0, f.jsx)(eE.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      X.default.track(Q.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          x?.current?.scrollIntoView({ behavior: "smooth" });
                                  },
                                  text: m.intl.string(m.t.uw9zI7),
                                  icon: oK.t,
                              }),
                          }),
                      }),
              ],
          });
}
var Sw = i(625494),
    SF = i(454078);
let SB = { [nv.Eq.USER_PROFILE]: "main_profile_tab", [nv.Eq.GUILD]: "guild_profile_tab" },
    Sz = (0, o.E2)(d.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, R.bG)([lF.A, W.Ay, xC.A], () => {
                    let e = xC.A.selectedGuildId ?? lF.A.getGuildId();
                    return null == e || xC._.has(e) ? W.Ay.getFlattenedGuildIds().find((e) => !xC._.has(e)) : e;
                }),
                t = (0, R.bG)([K.A], () => K.A.getGuild(e)),
                i = (0, R.bG)([xC.A], () => xC.A.showNotice()),
                n = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()),
                s = Sd.A.useField("subsection");
            return (
                N.useEffect(() => {
                    (0, rf._)(SB[s]);
                }, [s]),
                N.useEffect(() => {
                    null != n && t?.id != null && (0, Tw.A)(n.id, n.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, n]),
                (0, f.jsx)(TB, {
                    children: (0, f.jsxs)(dQ.F, {
                        component: (0, f.jsx)(z.A, {
                            children: (0, f.jsx)(eh.D, {
                                variant: "heading-xl/normal",
                                children: m.intl.string(m.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, f.jsxs)(xj.V, {
                                className: SF.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: s,
                                onItemSelect: function (e) {
                                    if (s !== e) {
                                        if (i) {
                                            (0, rN.fO)({ duration: 300, intensity: xy.n3 }),
                                                Sw._.dispatch(Q.jej.EMPHASIZE_NOTICE);
                                            return;
                                        }
                                        e === nv.Eq.GUILD && null != t && (0, xO.V2)(t.id),
                                            Sd.A.setState({ subsection: e });
                                    }
                                },
                                children: [
                                    (0, f.jsx)(
                                        xj.V.Item,
                                        {
                                            className: SF.YU,
                                            id: nv.Eq.USER_PROFILE,
                                            children: m.intl.string(m.t["2p07FR"]),
                                        },
                                        nv.Eq.USER_PROFILE,
                                    ),
                                    (0, f.jsx)(
                                        xj.V.Item,
                                        {
                                            className: eF()(SF.YU, SF.HY),
                                            "aria-label": m.intl.string(m.t.kPHroX),
                                            id: nv.Eq.GUILD,
                                            children: m.intl.string(m.t.kPHroX),
                                        },
                                        nv.Eq.GUILD,
                                    ),
                                ],
                            }),
                            s === nv.Eq.GUILD
                                ? (0, f.jsx)(Tk, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (i) {
                                              (0, rN.fO)({ duration: 300, intensity: xy.n3 }),
                                                  Sw._.dispatch(Q.jej.EMPHASIZE_NOTICE);
                                              return;
                                          }
                                          null != e && (0, xO.JJ)(e.id);
                                      },
                                  })
                                : (0, f.jsx)(Sk, {}),
                        ],
                    }),
                })
            );
        },
        useSearchTerms: () => [
            m.intl.string(m.t["vi7f+q"]),
            m.intl.string(m.t.Ip9nBS),
            m.intl.string(m.t["2p07FR"]),
            m.intl.string(m.t["7vhiqk"]),
            m.intl.string(m.t.kPHroX),
            m.intl.string(m.t.lqaIxI),
            m.intl.string(m.t.Vgdusv),
            m.intl.string(m.t.DMeO2X),
        ],
    }),
    SY = (0, o.zZ)(d.X.PROFILE_CATEGORY, { buildLayout: () => [Sz] });
var SX = i(294666);
let SH = () => {
        let e = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()),
            { avatarSrc: t, avatarDecorationSrc: i } = (0, xb.A)({ userId: e?.id, size: iK._3.SIZE_48 });
        return null == e
            ? null
            : (0, f.jsxs)("div", {
                  className: SX.a5,
                  children: [
                      (0, f.jsx)(iH.eu, {
                          src: t,
                          avatarDecoration: i,
                          size: iK._3.SIZE_48,
                          "aria-label": m.intl.string(m.t.lqaIxI),
                      }),
                      (0, f.jsxs)("div", {
                          className: SX.FS,
                          children: [
                              (0, f.jsx)(k.E, {
                                  color: "text-strong",
                                  variant: "text-md/medium",
                                  lineClamp: 1,
                                  children: e.globalName ?? e.username,
                              }),
                              (0, f.jsxs)("div", {
                                  className: SX.Fk,
                                  children: [
                                      (0, f.jsx)(k.E, {
                                          variant: "text-sm/normal",
                                          color: "currentColor",
                                          lineClamp: 1,
                                          children: m.intl.string(m.t.Ip9nBS),
                                      }),
                                      (0, f.jsx)(o1.R, { size: "xxs", color: "currentColor" }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
    },
    SK = (0, o.t_)(d.X.PROFILE_PANEL, {
        useTitle: () => m.intl.string(m.t["vi7f+q"]),
        notice: { stores: [xC.A], element: x_.A },
        initialize: () => () =>
            n6.h.wait(() => {
                (0, xN.F7)();
            }),
        buildLayout: () => [SY],
    }),
    SW = (0, o.i4)(d.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t["vi7f+q"]),
        icon: Sq,
        StronglyDiscouragedCustomComponent: SH,
        usePredicate: () => !(0, xI.X)("user_settings_sidebar"),
        buildLayout: () => [SK],
    }),
    SZ = (0, o.i4)(d.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => m.intl.string(m.t["vi7f+q"]),
        icon: Sq,
        StronglyDiscouragedCustomComponent: SH,
        usePredicate: () => (0, xI.X)("user_settings_sidebar"),
        onClick: () => {
            let e = cu.default.getId();
            (0, xv.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function Sq() {
    let e = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: i } = (0, xb.A)({ userId: e?.id, size: iK._3.SIZE_48 });
    return (0, f.jsx)(iH.eu, { src: t, avatarDecoration: i, size: iK._3.SIZE_20, "aria-hidden": !0 });
}
let SQ = (0, o.WI)(d.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [SW, SZ] });
var SJ = i(98207);
function S$() {
    return (0, f.jsx)(ta.p, { icon: u4.X, messageType: ta.Y.POSITIVE, children: m.intl.string(m.t.FsmBy4) });
}
var S0 = i(670492),
    S1 = i(579872),
    S2 = i(900686),
    S3 = i(518142),
    S6 = i(662758),
    S4 = i(466034);
function S7(e) {
    let { backupCodes: t, hasTOTPEnabled: i, currentUser: n } = e,
        s = N.useCallback((e) => {
            (0, C.openModal)((t) => (0, f.jsx)(S3.default, { ...t, password: e }), { stackingBehavior: "stack" });
        }, []),
        l = N.useCallback(() => {
            (0, C.openModal)((e) =>
                (0, f.jsx)(S6.default, {
                    ...e,
                    handleSubmit: (e) =>
                        SJ.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                            s(e);
                        }),
                    title: m.intl.string(m.t.PsQmzU),
                    actionText: m.intl.string(m.t.ajkYcF),
                }),
            );
        }, [s]),
        r = N.useCallback(() => {
            let e = t
                    .map((e) => {
                        let { consumed: t, code: i } = e;
                        return `* ${i.substr(0, 4)}-${i.substr(4)} ${t ? "(used)" : ""}`;
                    })
                    .join("\r\n"),
                i = m.intl.formatToPlainString(m.t["uYWwh/"], { email: n.email });
            return `${i}\r
\r
${e}`;
        }, [t, n.email]),
        a = N.useMemo(
            () =>
                t.length > 0
                    ? (0, f.jsx)(S2.A, {
                          fileContents: r,
                          contentType: "text/plain",
                          fileName: "discord_backup_codes.txt",
                          children: (0, f.jsx)(eE.$, {
                              variant: "primary",
                              size: "sm",
                              text: m.intl.string(m.t.qZZUy6),
                          }),
                      })
                    : (0, f.jsx)(eE.$, { variant: "primary", size: "sm", text: m.intl.string(m.t.xZEzbu), onClick: l }),
            [t.length, r, l],
        ),
        o = N.useCallback(() => {
            S1.A.show({
                title: m.intl.string(m.t["D+aE7g"]),
                body: m.intl.string(m.t.EA4ZEk),
                cancelText: m.intl.string(m.t["ETE/oC"]),
                onConfirm: () => SJ.A.disable(),
            });
        }, []);
    return (0, f.jsx)(sy.D, {
        label: m.intl.string(m.t.EPVq00),
        description: m.intl.string(m.t.bQwxib),
        children: (0, f.jsxs)(aw.e, {
            size: "sm",
            children: [
                a,
                i &&
                    (0, f.jsx)(eE.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        text: m.intl.string(m.t["D+aE7g"]),
                        onClick: o,
                    }),
                !i &&
                    (0, f.jsx)(eE.$, {
                        variant: "primary",
                        size: "sm",
                        text: m.intl.string(m.t.cDgKte),
                        onClick: S4.Ay.enableMFA,
                    }),
            ],
        }),
    });
}
var S5 = i(464477);
function S8() {
    return !S5.K7;
}
let S9 = (0, o.E2)(d.X.ACCOUNT_TWO_FACTOR_CRYPTO_NOTICE, {
    useSearchTerms: () => [m.intl.string(m.t.m0FidJ)],
    usePredicate: S8,
    Component: function () {
        return (0, f.jsx)(sy.D, {
            label: m.intl.string(m.t.EPVq00),
            children: (0, f.jsx)(ta.p, { messageType: ta.Y.INFO, children: m.intl.string(m.t.PhHhsj) }),
        });
    },
});
function pe() {
    let e = S8(),
        t = (0, R.bG)([t6.default], () => {
            let e = t6.default.getCurrentUser();
            return null != e && !e.verified;
        });
    return !e && t;
}
let pt = (0, o.E2)(d.X.ACCOUNT_UNVERIFIED_USER_NOTICE, {
    useSearchTerms: () => [m.intl.string(m.t.m0FidJ)],
    usePredicate: pe,
    Component: function () {
        return (0, f.jsx)(sy.D, {
            label: m.intl.string(m.t.EPVq00),
            children: (0, f.jsx)(ta.p, { messageType: ta.Y.WARNING, children: m.intl.string(m.t.uggF7o) }),
        });
    },
});
function pi() {
    return (0, R.bG)([t6.default], () => {
        let e = t6.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
let pn = (0, o.E2)(d.X.ACCOUNT_AUTHENTICATOR_APP_SETTING, {
    useSearchTerms: function () {
        let e = (0, R.bG)([cu.default], () => cu.default.hasTOTPEnabled()),
            t = [m.intl.string(m.t.m0FidJ), m.intl.string(m.t.xZEzbu)];
        return e ? t.push(m.intl.string(m.t["D+aE7g"])) : t.push(m.intl.string(m.t.cDgKte)), t;
    },
    usePredicate: function () {
        let e = S8(),
            t = pe(),
            i = pi();
        return !e && !t && i;
    },
    Component: function () {
        let e = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()),
            t = (0, R.bG)([S0.A], () => S0.A.getBackupCodes()),
            i = (0, R.bG)([cu.default], () => cu.default.hasTOTPEnabled());
        return null == e ? null : (0, f.jsx)(S7, { backupCodes: t, currentUser: e, hasTOTPEnabled: i });
    },
});
var ps = i(658675),
    pl = i(176571);
function pr(e) {
    let {
            code: { code: t, consumed: i },
        } = e,
        n = `${t.substr(0, 4)}-${t.substr(4)}`,
        s = N.useRef(null),
        l = N.useCallback(
            (e) => {
                "c" === e.key &&
                    e.metaKey &&
                    cA.p5 &&
                    (e.preventDefault(), e.stopPropagation(), (0, cA.C)(n), s?.current?.focus());
            },
            [n],
        );
    return (0, f.jsx)("li", {
        className: iI.SX,
        children: (0, f.jsxs)(V.D, {
            innerRef: s,
            className: pl.Uc,
            onKeyDown: l,
            children: [(0, f.jsx)(ps.P, { checked: i }), (0, f.jsx)("span", { className: pl.aY, children: n })],
        }),
    });
}
function pa(e) {
    let { backupCodes: t } = e,
        i = N.useCallback((e) => e.map((e) => (0, f.jsx)(pr, { code: e }, e.code)), []),
        n = N.useCallback(async () => {
            let e = S0.A.getVerificationKey();
            await SJ.A.confirmViewBackupCodes(e, !0);
        }, []);
    return (0, f.jsxs)(sy.D, {
        label: m.intl.string(m.t.GfqHPn),
        description: m.intl.format(m.t.OhmvYt, {}),
        children: [
            (0, f.jsxs)(lM.A, {
                children: [
                    (0, f.jsx)(lM.A.Child, {
                        children: (0, f.jsx)("ul", { className: pl.Pm, children: i(t.slice(0, t.length / 2)) }),
                    }),
                    (0, f.jsx)(lM.A.Child, {
                        children: (0, f.jsx)("ul", { className: pl.Pm, children: i(t.slice(t.length / 2)) }),
                    }),
                ],
            }),
            (0, f.jsx)(B.Q, { textVariant: "text-sm/medium", onClick: n, text: m.intl.string(m.t.RIThUu) }),
        ],
    });
}
let po = (0, o.E2)(d.X.ACCOUNT_BACKUP_CODES_SETTING, {
        useSearchTerms: () => [m.intl.string(m.t.m0FidJ), m.intl.string(m.t.xZEzbu)],
        usePredicate: function () {
            let e = S8(),
                t = pe(),
                i = pi(),
                n = (0, R.bG)([S0.A], () => S0.A.getBackupCodes().length > 0);
            return !e && !t && i && n;
        },
        Component: function () {
            let e = (0, R.bG)([S0.A], () => S0.A.getBackupCodes());
            return (0, f.jsx)(pa, { backupCodes: e });
        },
    }),
    pu = (0, o.E2)(d.X.ACCOUNT_ENABLE_MFA_SETTING, {
        useSearchTerms: () => [m.intl.string(m.t.m0FidJ)],
        usePredicate: function () {
            let e = S8(),
                t = pe();
            return (0, R.bG)([t6.default], () => {
                let i = t6.default.getCurrentUser();
                return null != i && !i.mfaEnabled && !e && !t;
            });
        },
        Component: function () {
            return (0, f.jsx)(sy.D, {
                label: m.intl.string(m.t.EPVq00),
                description: m.intl.string(m.t["8aDa1t"]),
                children: (0, f.jsx)(eE.$, {
                    variant: "primary",
                    size: "sm",
                    text: m.intl.string(m.t.cDgKte),
                    onClick: S4.Ay.enableMFA,
                }),
            });
        },
    });
var pd = i(398177);
let pc = (0, o.Tf)(d.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
        useTitle: () => m.intl.string(m.t["CIGa+7"]),
        useLabel: () => m.intl.string(m.t.bt75uw),
        useAriaLabel: () => m.intl.string(m.t["FRep5/"]),
        useVariant: () => "secondary",
        onClick: () => {
            (0, C.openModal)((e) => (0, f.jsx)(pd.default, { ...e, onSuccess: () => e.onClose() }));
        },
    }),
    pg = (0, o.E2)(d.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
        useSearchTerms: () => [m.intl.string(m.t["FRep5/"])],
        Component: function () {
            return (0, f.jsx)(eE.$, {
                variant: "primary",
                size: "sm",
                text: m.intl.string(m.t["FRep5/"]),
                onClick: () => (0, C.openModal)((e) => (0, f.jsx)(pd.default, { ...e, onSuccess: e.onClose })),
            });
        },
    });
var pm = i(557722),
    pA = i(615715);
function ph(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == e
        ? null
        : e.hasAnyStaffLevel()
          ? t
              ? m.intl.string(m.t.YJGvuD)
              : m.intl.string(m.t["3iKih7"])
          : e.hasFlag(Q.nhx.PARTNER)
            ? t
                ? m.intl.string(m.t["9UucjT"])
                : m.intl.string(m.t.Sq6Q1u)
            : null == e.email
              ? t
                  ? m.intl.string(m.t["9VWpT9"])
                  : m.intl.string(m.t.LfCBZG)
              : null;
}
var pE =
    (((r = {}).AVAILABLE = "available"),
    (r.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (r.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    r);
function px() {
    let e = (0, uV.bG)([t6.default], () => t6.default.getCurrentUser()?.verified);
    return S5.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function pT() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, uV.bG)([K.A, Ty.A, t6.default], () =>
        t6.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? m.intl.string(m.t.hxf9fX)
                : m.intl.string(m.t["3iKih7"])
            : K.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(Q.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        Ty.A.can(Q.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? m.intl.string(m.t.OYTCUh)
                  : m.intl.string(m.t.HC8uSZ)
              : null,
    );
}
var pS = i(53516);
function pp(e) {
    let t,
        i,
        { currentUser: n, togglingSMS: s } = e,
        [l, r] = N.useState(!1),
        a = N.useCallback(
            (e) => {
                e.preventDefault(), r(!l);
            },
            [l],
        ),
        o = N.useCallback(function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (0, C.openModal)((t) => (0, f.jsx)(pA.default, { reason: pm.d.USER_SETTINGS_UPDATE, ...t, ...e }), {
                modalKey: pS.V,
            });
        }, []),
        u = N.useCallback(() => {
            o();
        }, [o]),
        d = N.useCallback(() => {
            null == n.phone ? o({ onAddedPhone: SJ.A.enableSMS }) : SJ.A.enableSMS();
        }, [n, o]),
        c = N.useCallback(() => {
            (0, C.openModal)((e) =>
                (0, f.jsx)(S6.default, {
                    ...e,
                    handleSubmit: SJ.A.disableSMS,
                    title: m.intl.string(m.t.KLWnit),
                    children: m.intl.string(m.t["W0/Duf"]),
                }),
            );
        }, []),
        g = N.useCallback((e) => (null == e ? "" : `${"*".repeat(e.length - 4)}${e.slice(-4)}`), []),
        A = null != n.phone,
        h = n.hasFlag(Q.nhx.MFA_SMS);
    if (A || h) {
        let e = l ? n.phone : g(n.phone);
        i = (0, f.jsxs)(k.E, {
            variant: "text-sm/normal",
            children: [
                m.intl.format(m.t.PXVoEO, { phoneNumber: e }),
                (0, f.jsx)(uk.Anchor, {
                    onClick: a,
                    className: pl.vN,
                    children: l ? m.intl.string(m.t.FfltIN) : m.intl.string(m.t.llArAg),
                }),
            ],
        });
    }
    if (h)
        t = (0, f.jsx)(eE.$, {
            variant: "critical-secondary",
            size: "sm",
            text: m.intl.string(m.t.KLWnit),
            loading: s,
            onClick: c,
        });
    else {
        let e = ph(n);
        t = (0, f.jsxs)(aw.e, {
            size: "sm",
            children: [
                (0, f.jsx)(eE.$, {
                    variant: "primary",
                    size: "sm",
                    text: e ?? m.intl.string(m.t.DZQe23),
                    onClick: d,
                    loading: s,
                    disabled: null != e,
                }),
                A
                    ? (0, f.jsx)(eE.$, {
                          variant: "secondary",
                          size: "sm",
                          text: m.intl.string(m.t.Ulqq6K),
                          onClick: u,
                      })
                    : null,
            ],
        });
    }
    return (0, f.jsxs)(sy.D, {
        label: m.intl.string(m.t.uHAJ5v),
        description: m.intl.string(m.t.fspJ4H),
        children: [i, t],
    });
}
let pf = (0, o.E2)(d.X.ACCOUNT_SMS_BACKUP_AUTHENTICATION_SETTING, {
    useSearchTerms: () => [m.intl.string(m.t.uHAJ5v)],
    usePredicate: function () {
        let e = S8(),
            t = pe(),
            i = pi(),
            n = (0, R.bG)([cu.default], () => cu.default.hasTOTPEnabled());
        return !e && !t && i && n;
    },
    Component: function () {
        let e = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()),
            t = (0, R.bG)([S0.A], () => S0.A.togglingSMS);
        return null == e ? null : (0, f.jsx)(pp, { currentUser: e, togglingSMS: t });
    },
});
var pN = i(328009);
let p_ = (0, o.E2)(d.X.ACCOUNT_SECURITY_KEYS_SETTING, {
    useSearchTerms: () => [m.intl.string(m.t.vrOCCk), m.intl.string(m.t.y7SXYX)],
    usePredicate: function () {
        let e = S8(),
            t = pe();
        return !e && !t;
    },
    Component: pN.A,
});
var pC = i(200921),
    pI = i(390310),
    pb = i(766928),
    pv = i(568385),
    pj = i(791606),
    py = i(646270),
    pO = i(738678);
function pR(e, t) {
    let i = e.client_info?.location ?? e.client_info?.ip,
        n = e.client_info?.platform,
        { text: s, icon: l } = (function (e) {
            switch (e?.toLowerCase().trim()) {
                case null:
                case void 0:
                case "":
                    return { text: m.intl.string(m.t.cDHCNY), icon: e3.k };
                case "ios":
                case "android":
                    return { text: e, icon: py.u };
                case "horizon os":
                    return { text: e, icon: pO.G };
                default:
                    return { text: e, icon: e3.k };
            }
        })(e.client_info?.os);
    return { location: i, platform: n, os: s, Icon: l, lastActive: t ? null : (0, pI.Y)(e.approx_last_used_time) };
}
var pL = i(563606);
function pD() {
    return (0, f.jsx)(k.E, { variant: "text-sm/normal", className: pL.h_, children: m.intl.string(m.t.zZp618) });
}
function pP() {
    let { currentSession: e } = (0, pI.r)();
    return null == e
        ? (0, f.jsx)("div", { className: pL.Lq, children: (0, f.jsx)(u3.y, {}) })
        : (0, f.jsx)(io.n, { label: m.intl.string(m.t.LLS19o), children: (0, f.jsx)(pM, { session: e, current: !0 }) });
}
function pG(e) {
    let { checked: t, otherSessions: i } = e;
    return (0, f.jsx)(sy.D, {
        label: t.size > 0 ? m.intl.string(m.t.mMEmRO) : m.intl.string(m.t.Vij32M),
        description: m.intl.string(m.t.OTXyaf),
        children: (0, f.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: pL.Cn,
            children: (0, f.jsx)(eE.$, {
                variant: "critical-secondary",
                size: "sm",
                text:
                    t.size > 0
                        ? m.intl.formatToPlainString(m.t["83CPLj"], { count: t.size })
                        : m.intl.string(m.t.cLmmeY),
                onClick: () => {
                    t.size > 0 ? (0, pC.U0)(Array.from(t)) : (0, pC.U0)(i.map((e) => e.id_hash));
                },
            }),
        }),
    });
}
function pU() {
    let { currentSession: e, otherSessions: t } = (0, pI.r)(),
        i = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()),
        [n, s] = N.useState(new Set());
    return (null == e && 0 === t.length) || (0 === t.length && i?.mfaEnabled)
        ? null
        : t.length > 0 || !i?.mfaEnabled
          ? (0, f.jsxs)(f.Fragment, {
                children: [
                    (0, f.jsxs)(io.n, {
                        label: m.intl.string(m.t.xx1MWc),
                        children: [
                            t.map((e) =>
                                (0, f.jsx)(
                                    pM,
                                    {
                                        session: e,
                                        useChecks: n.size > 0,
                                        checked: n.has(e.id_hash),
                                        setChecked: (t) => {
                                            let i = new Set(n);
                                            t ? i.add(e.id_hash) : i.delete(e.id_hash), s(i);
                                        },
                                    },
                                    e.id_hash,
                                ),
                            ),
                            i?.mfaEnabled ? null : (0, f.jsx)(pV, {}),
                        ],
                    }),
                    t.length > 0 &&
                        (0, f.jsx)("div", {
                            className: pL.wq,
                            children: (0, f.jsx)(pG, { checked: n, otherSessions: t }),
                        }),
                ],
            })
          : null;
}
function pM(e) {
    let { session: t, current: i, setChecked: n, checked: s, useChecks: l } = e,
        { location: r, platform: a, os: o, Icon: u, lastActive: d } = pR(t, i),
        c = [o, a].filter(t4.Vq),
        g = [r, d].filter(t4.Vq);
    return (0, f.jsxs)(
        "div",
        {
            className: eF()(pL.dZ, { [pL.gg]: i }),
            children: [
                (0, f.jsxs)("div", {
                    className: pL.OC,
                    children: [
                        (0, f.jsx)("div", {
                            className: pL.km,
                            children: (0, f.jsx)(u, { size: "md", color: "currentColor" }),
                        }),
                        (0, f.jsxs)("div", {
                            className: pL.F3,
                            children: [
                                (0, f.jsxs)(k.E, {
                                    variant: "eyebrow",
                                    className: pL.nT,
                                    children: [
                                        (0, f.jsx)("span", { children: c[0] }),
                                        c.length > 1 &&
                                            (0, f.jsxs)(f.Fragment, {
                                                children: [
                                                    (0, f.jsx)("span", { children: "\xb7" }),
                                                    (0, f.jsx)("span", { children: c[1] }),
                                                ],
                                            }),
                                    ],
                                }),
                                (0, f.jsxs)(k.E, {
                                    variant: "text-sm/medium",
                                    className: pL.nT,
                                    children: [
                                        (0, f.jsx)("span", { children: g[0] }),
                                        g.length > 1 &&
                                            (0, f.jsxs)(f.Fragment, {
                                                children: [
                                                    (0, f.jsx)("span", { children: "\xb7" }),
                                                    (0, f.jsx)("span", { children: g[1] }),
                                                ],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        i
                            ? null
                            : l
                              ? (0, f.jsx)("div", {
                                    className: pL.GR,
                                    children: (0, f.jsx)(pv.J, {
                                        onChange: (e) => {
                                            n?.(e);
                                        },
                                        checked: s,
                                    }),
                                })
                              : (0, f.jsx)(V.D, {
                                    className: pL.ux,
                                    onClick: (e) => {
                                        e.shiftKey ? n?.(!0) : (0, pC.U0)(t.id_hash);
                                    },
                                    "aria-label": m.intl.string(m.t.E4MJNt),
                                    children: (0, f.jsx)(c0.P, { size: "md", color: "currentColor" }),
                                }),
                    ],
                }),
                !i && (0, f.jsx)(ex.c, { className: pL.O9 }),
            ],
        },
        t.id_hash,
    );
}
function pV() {
    return (0, f.jsxs)("div", {
        className: eF()(pL.dZ, pL.EC),
        children: [
            (0, f.jsxs)("div", {
                className: pL.OC,
                children: [
                    (0, f.jsx)("div", { className: pL.km, children: (0, f.jsx)(pj.A, { width: "32", height: "32" }) }),
                    (0, f.jsxs)("div", {
                        className: pL.F3,
                        children: [
                            (0, f.jsx)(k.E, {
                                variant: "eyebrow",
                                className: pL.nT,
                                color: "text-muted",
                                children: (0, f.jsx)("span", { children: m.intl.string(m.t.iUa0sn) }),
                            }),
                            (0, f.jsx)(k.E, {
                                variant: "text-sm/medium",
                                className: pL.nT,
                                color: "text-muted",
                                children: (0, f.jsx)("span", {
                                    children: m.intl.format(m.t["044+8i"], {
                                        onClick: () =>
                                            (0, ey.openUserSettings)(d.X.ACCOUNT_PANEL, {
                                                analyticsLocations: [eV.A.USER_SETTINGS_SESSIONS],
                                            }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, f.jsx)("div", { className: pL.O9 }),
        ],
    });
}
var pk = i(176524),
    pw = i(490173);
function pF(e) {
    let { icon: t, label: i, subLabel: n, description: s, children: l, muted: r } = e;
    return (0, f.jsxs)(L.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, f.jsx)(pk.A, { Icon: t, color: r ? F.A.colors.ICON_MUTED : "currentColor" }),
            (0, f.jsxs)(L.B, {
                direction: "vertical",
                gap: "xxs",
                children: [
                    (0, f.jsxs)(L.B, {
                        direction: "horizontal",
                        gap: "xs",
                        children: [
                            (0, f.jsx)(k.E, { variant: "text-md/semibold", color: "text-strong", children: i }),
                            null != i &&
                                null != n &&
                                (0, f.jsx)(k.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    "aria-hidden": !0,
                                    children: "\u2022",
                                }),
                            null != n &&
                                (0, f.jsx)(k.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                        ],
                    }),
                    (0, f.jsx)(k.E, { variant: "text-sm/normal", color: "text-muted", children: s }),
                ],
            }),
            l,
        ],
    });
}
function pB(e) {
    let { session: t, current: i } = e,
        { location: n, platform: s, os: l, Icon: r, lastActive: a } = pR(t, i),
        o = [n, a].filter(t4.Vq);
    return (0, f.jsx)(pF, {
        icon: r,
        label: l,
        subLabel: s,
        description: o.join(" \xb7 "),
        children:
            !i &&
            (0, f.jsx)(V.D, {
                className: pw.X,
                onClick: () => (0, pC.U0)(t.id_hash),
                "aria-label": m.intl.string(m.t.E4MJNt),
                children: (0, f.jsx)(c0.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function pz(e) {
    let { title: t, children: i } = e,
        n = N.useId();
    return (0, f.jsxs)(L.B, {
        role: "group",
        "aria-labelledby": n,
        gap: "xl",
        padding: { top: 8, bottom: 8 },
        children: [
            (0, f.jsx)(eh.D, { id: n, variant: "heading-md/semibold", color: "text-muted", children: t }),
            (0, f.jsx)(L.B, { role: "list", gap: "xl", children: i }),
        ],
    });
}
function pY() {
    let { currentSession: e } = (0, pI.r)();
    return null == e
        ? (0, f.jsx)(u3.y, {})
        : (0, f.jsx)(pz, { title: m.intl.string(m.t.LLS19o), children: (0, f.jsx)(pB, { session: e, current: !0 }) });
}
let pX = (0, o.E2)(d.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            return (0, u._A)("CurrentSessionSetting") ? (0, f.jsx)(pY, {}) : (0, f.jsx)(pP, {});
        },
        useSearchTerms: () => [],
    }),
    pH = (0, o.E2)(d.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = (0, pI.r)();
            return (0, f.jsx)(sy.D, {
                label: m.intl.string(m.t.Vij32M),
                description: m.intl.string(m.t.OTXyaf),
                children: (0, f.jsx)(eE.$, {
                    onClick: () => (0, pC.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: m.intl.string(m.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [m.intl.string(m.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = (0, pI.r)();
            return e.length > 0;
        },
    });
function pK() {
    return (0, f.jsx)(pF, {
        icon: pb.W,
        label: m.intl.string(m.t.iUa0sn),
        description: m.intl.format(m.t["044+8i"], {
            onClick: () =>
                (0, ey.openUserSettings)(d.X.ACCOUNT_PANEL, { analyticsLocations: [eV.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
function pW() {
    let { otherSessions: e } = (0, pI.r)(),
        t = (0, R.bG)([t6.default], () => t6.default.getCurrentUser());
    return (0, f.jsxs)(pz, {
        title: m.intl.string(m.t.xx1MWc),
        children: [e.map((e) => (0, f.jsx)(pB, { session: e }, e.id_hash)), t?.mfaEnabled ? null : (0, f.jsx)(pK, {})],
    });
}
let pZ = (0, o.E2)(d.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            return (0, u._A)("OtherSessionsSetting") ? (0, f.jsx)(pW, {}) : (0, f.jsx)(pU, {});
        },
        useSearchTerms: () => [m.intl.string(m.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = (0, pI.r)(),
                t = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    pq = (0, o.zZ)(d.X.SESSIONS_CATEGORY, {
        useTitle: () => m.intl.string(m.t.mEndXM),
        useSubtitle: () => m.intl.string(m.t.b7ZpTM),
        initialize: () => {
            (0, pC.GY)();
        },
        buildLayout: () => [pX, pZ, pH],
        useSearchTerms: () => [
            m.intl.string(m.t["+1h0k/"]),
            m.intl.string(m.t.LLS19o),
            m.intl.string(m.t.xx1MWc),
            m.intl.string(m.t.lSWsrd),
        ],
    }),
    pQ = (0, o.zZ)(d.X.SESSIONS_CATEGORY, {
        useSearchTerms: () => [
            m.intl.string(m.t["+1h0k/"]),
            m.intl.string(m.t.LLS19o),
            m.intl.string(m.t.xx1MWc),
            m.intl.string(m.t.Vij32M),
            m.intl.string(m.t.lSWsrd),
        ],
        buildLayout: () => [pX, pZ],
        initialize: () => (
            (0, pC.GY)(),
            () => {
                (0, pC.ZQ)();
            }
        ),
        useInlineNotice: function () {
            return N.useMemo(() => ({ type: e_.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: pD }), []);
        },
    }),
    pJ = (0, o.t_)(d.X.SESSIONS_PANEL, {
        useTitle: () => ((0, u._A)("SessionsPanel") ? m.intl.string(m.t.mEndXM) : m.intl.string(m.t["+1h0k/"])),
        useObscuredNotice: u0.L,
        buildLayout: () => ((0, u.pC)("SessionsPanel") ? [pq] : [pQ]),
    }),
    p$ = (0, o.i4)(d.X.SESSIONS_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t["+1h0k/"]),
        icon: pb.W,
        usePredicate: () => !(0, u._A)("SessionsPanel"),
        buildLayout: () => [pJ],
    }),
    p0 = (0, o.t0)(d.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [pJ],
        usePredicate: () => (0, u._A)("AccountSessionsNestedPanel"),
        initialize: () => {
            (0, pC.GY)();
        },
        useTrailingDecoration: () => ({
            type: e_.xn.TEXT,
            useText: () => {
                let { currentSession: e, otherSessions: t } = (0, pI.r)(),
                    i = t.length + +(null != e);
                return i > 0 ? m.intl.formatToPlainString(m.t.G7zwOk, { count: i }) : m.intl.string(m.t.MKDeyL);
            },
        }),
    }),
    p1 = (0, o.zZ)(d.X.ACCOUNT_AUTHENTICATION_CATEGORY, {
        useTitle: () => m.intl.string(m.t.pKSjEj),
        useInlineNotice: function () {
            return (0, R.bG)([t6.default], () => t6.default.getCurrentUser()?.mfaEnabled ?? !1)
                ? { type: e_.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: S$ }
                : null;
        },
        buildLayout: () => [
            pg,
            S9,
            pt,
            pu,
            pn,
            po,
            pf,
            p_,
            ...((0, u.pC)("AccountAuthenticationCategory") ? [p0] : []),
        ],
    });
i(204925);
var p2 = i(818348);
let p3 = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, C.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([i.e("40933"), i.e("19623"), i.e("21007")]).then(i.bind(i, 888363));
            return (i) => (0, f.jsx)(t, { claimRequired: e, ...i });
        },
        { onCloseRequest: e ? p2.tE : null, onCloseCallback: t },
    );
};
var p6 = i(940856),
    p4 = i(36149),
    p7 = i(207560);
function p5(e) {
    let t = (0, p7.fk)(),
        i = (0, p4.b8)(),
        n = (0, p4.yM)(),
        s = (0, p4.Y2)();
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
var p8 = i(516761);
function p9() {
    let e = m.intl.string(m.t.XxRj7f);
    return (0, f.jsxs)(k.E, {
        variant: "text-md/medium",
        children: [
            `${e} \u{2022} `,
            m.intl.format(p8.default.WM5adV, {
                handleOnHelpUrlHook: () => window.open(to.A.getArticleURL(Q.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank"),
            }),
        ],
    });
}
let fe = (0, o.Tf)(d.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, {
        usePredicate: () => p5("edit"),
        useTitle: () => m.intl.string(m.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: e_._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: p9 }),
        useLabel: () => m.intl.string(m.t.bt75uw),
        onClick: function () {
            (0, C.openModalLazy)(async () => {
                let { default: e } = await i.e("45361").then(i.bind(i, 151080));
                return (t) => (0, f.jsx)(e, { ...t });
            });
        },
    }),
    ft = (0, o.E2)(d.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, {
        usePredicate: () => p5("info"),
        useSearchTerms: () => [m.intl.string(m.t["/52UYy"])],
        Component: function () {
            return (0, f.jsx)(sy.D, {
                label: m.intl.string(m.t["/52UYy"]),
                layout: "horizontal",
                children: (0, f.jsxs)(L.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "end",
                    gap: "md",
                    children: [
                        (0, f.jsx)(k.E, { variant: "text-md/medium", children: m.intl.string(m.t.XxRj7f) }),
                        (0, f.jsx)("div", {
                            style: { visibility: "hidden" },
                            children: (0, f.jsx)(eE.$, {
                                onClick: p2.tE,
                                text: m.intl.string(m.t.bt75uw),
                                "aria-hidden": !0,
                            }),
                        }),
                    ],
                }),
            });
        },
    });
var fi = i(139716),
    fn = i(847599);
function fs() {
    return (0, p4.yM)() ? m.intl.string(m.t.sK0dmH) : m.intl.string(m.t.lKDPGA);
}
let fl = (0, o.Tf)(d.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, {
        usePredicate: () => p5("verify"),
        useTitle: () => m.intl.string(m.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: e_._1.TEXT, useText: fs }),
        useLabel: function () {
            return (0, p4.yM)() ? m.intl.string(m.t["9KiIz6"]) : m.intl.string(m.t.DVywUB);
        },
        onClick: () => fi.A.showAgeVerificationGetStartedModal({ entryPoint: fn.q1.ACCOUNT_AGE_GROUP }),
    }),
    fr = (0, o.Tf)(d.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, R.bG)([t6.default], () => t6.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => m.intl.string(m.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: e_._1.TEXT, useText: () => m.intl.string(m.t.qxk9zo) }),
        useLabel: () => m.intl.string(m.t.BleMPB),
        onClick: () => p3(),
    });
function fa(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function fo(e) {
    let [t, i] = e.split("@");
    return `${"*".repeat(t.length)}@${i}`;
}
function fu(e) {
    let { text: t, censor: i, revealLabel: n, hideLabel: s, redesign: l = !1 } = e,
        [r, a] = N.useState(!1),
        o = r ? t : i(t);
    return (0, f.jsxs)(L.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        justify: l ? "end" : "start",
        children: [
            l ? (0, f.jsx)(k.E, { variant: "text-md/medium", children: o }) : o,
            (0, f.jsx)(B.Q, {
                variant: "primary",
                textVariant: l ? "text-md/medium" : "text-sm/medium",
                "aria-label": r ? s : n,
                onClick: () => a(!r),
                text: r ? m.intl.string(m.t.fgq1gs) : m.intl.string(m.t.dcztdU),
            }),
        ],
    });
}
function fd() {
    let e = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()?.email);
    return null == e
        ? (0, f.jsx)(k.E, { variant: "text-md/medium", children: m.intl.string(m.t["8SfTN/"]) })
        : (0, f.jsx)(fu, {
              text: e,
              censor: fo,
              revealLabel: m.intl.string(m.t["Zvx+yV"]),
              hideLabel: m.intl.string(m.t.nqTD4d),
              redesign: !0,
          });
}
let fc = (0, o.Tf)(d.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, R.bG)([t6.default], () => t6.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => m.intl.string(m.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: e_._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: fd }),
    useLabel: function () {
        return null == (0, R.bG)([t6.default], () => t6.default.getCurrentUser()?.email)
            ? m.intl.string(m.t.OYkgVk)
            : m.intl.string(m.t.bt75uw);
    },
    useAriaLabel: function () {
        return null == (0, R.bG)([t6.default], () => t6.default.getCurrentUser()?.email)
            ? m.intl.string(m.t["pvBD+W"])
            : m.intl.string(m.t["8peUT0"]);
    },
    onClick: function () {
        (0, C.openModalLazy)(async () => {
            let { default: e } = await Promise.all([i.e("97570"), i.e("20577"), i.e("65861")]).then(i.bind(i, 97060));
            return (t) => (0, f.jsx)(e, { ...t });
        });
    },
});
function fg() {
    let e = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, f.jsx)(k.E, { variant: "text-md/medium", children: m.intl.string(m.t.I5kDqj) })
        : (0, f.jsx)(L.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, f.jsx)(fu, {
                  text: t,
                  censor: fa,
                  revealLabel: m.intl.string(m.t.eY3xlT),
                  hideLabel: m.intl.string(m.t["jllbv+"]),
                  redesign: !0,
              }),
          });
}
let fm = (0, o.Tf)(d.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, R.bG)([t6.default], () => t6.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => m.intl.string(m.t.kerONq),
    useAriaLabel: function () {
        return null == (0, R.bG)([t6.default], () => t6.default.getCurrentUser()?.phone)
            ? m.intl.string(m.t["SfUuE+"])
            : m.intl.string(m.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: e_._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: fg }),
    useLabel: function () {
        return null == (0, R.bG)([t6.default], () => t6.default.getCurrentUser()?.phone)
            ? m.intl.string(m.t.OYkgVk)
            : m.intl.string(m.t.bt75uw);
    },
    onClick: function () {
        null == t6.default.getCurrentUser()?.phone
            ? (0, C.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.resolve().then(i.bind(i, 615715));
                      return (t) => (0, f.jsx)(e, { reason: pm.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: pS.V },
              )
            : (0, C.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([i.e("25866"), i.e("63314")]).then(i.bind(i, 660740));
                  return (t) => (0, f.jsx)(e, { ...t });
              });
    },
});
function fA() {
    let e = (0, R.bG)([t6.default], () => t6.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function fh() {
    let e = (0, xB.EC)(),
        t = e?.nick?.[0] ?? null,
        i = (0, R.bG)([t6.default], () => t6.default.getCurrentUser());
    if (null == i) return null;
    let n = i.hasUniqueUsername() ? i.username : `${i.username}#${i.discriminator}`;
    return (0, f.jsxs)(f.Fragment, {
        children: [
            (0, f.jsx)(k.E, { variant: "text-md/medium", children: n }),
            null != t &&
                (0, f.jsx)(e1.m, {
                    __unsupportedReactNodeAsText: t,
                    "aria-label": !1,
                    children: (0, f.jsx)(lb.E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: F.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let fE = (0, o.Tf)(d.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => m.intl.string(m.t.qqhR3L),
        useTrailingContent: () => ({ type: e_._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: fh }),
        useLabel: () => m.intl.string(m.t.bt75uw),
        useAriaLabel: () => m.intl.string(m.t.JECa91),
        useSubtitle: () => (fA() ? m.intl.string(m.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: fA,
        onClick: function () {
            (0, C.openModalLazy)(async () => {
                let { default: e } = await Promise.all([i.e("38408"), i.e("20429"), i.e("20969")]).then(
                    i.bind(i, 667792),
                );
                return (t) => (0, f.jsx)(e, { ...t });
            });
        },
    }),
    fx = (0, o.zZ)(d.X.ACCOUNT_INFO_CATEGORY, {
        usePredicate: () => (0, R.bG)([t6.default], () => null != t6.default.getCurrentUser()),
        useTitle: () => m.intl.string(m.t.apNo4l),
        useInlineNotice: function () {
            let e = (0, R.bG)([t6.default], () => t6.default.getCurrentUser());
            return null == e
                ? null
                : e.isClaimed()
                  ? null == e.email || e.verified
                      ? null
                      : {
                            type: e_.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            useTitle: () => m.intl.string(m.t.tuGzBT),
                            useText: () => m.intl.string(m.t.NAzplE),
                            button: { useText: () => m.intl.string(m.t.lm1UKt), onClick: () => (0, p6.S)(e) },
                        }
                  : {
                        type: e_.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        useTitle: () => m.intl.string(m.t["/3qnL/"]),
                        useText: () => m.intl.string(m.t.qKs3vg),
                        button: { useText: () => m.intl.string(m.t["7psymi"]), onClick: () => p3() },
                    };
        },
        buildLayout: () => [fE, fr, fc, fm, fl, fe, ft],
    }),
    fT = (0, o.Tf)(d.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => m.intl.string(m.t.lQsY7B),
        useSubtitle: () => pT(!0),
        useDisabled: () => null !== pT(!0),
        useLabel: () => m.intl.string(m.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, R.bG)([cu.default], () => cu.default.hasTOTPEnabled()),
                t = px() === pE.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, se.A)({
                title: m.intl.string(m.t["D+aE7g"]),
                subtitle: m.intl.string(m.t.EA4ZEk),
                variant: "critical",
                confirmText: m.intl.string(m.t.N86XcP),
                onConfirm: () => SJ.A.disable(),
            }),
    }),
    fS = (0, o.zZ)(d.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => m.intl.string(m.t.RumMFo),
        useSubtitle: () => m.intl.string(m.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, R.bG)([cu.default], () => cu.default.hasTOTPEnabled()),
                t = px() === pE.AVAILABLE;
            if (!e && t)
                return {
                    type: e_.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: e_.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: m.intl.string(m.t.cTNUeD),
                            onClick: S4.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (px()) {
                case pE.UNAVAILABLE_NO_CRYPTO:
                    return { type: e_.lT.INLINE_NOTICE, noticeType: "info", useText: () => m.intl.string(m.t.PhHhsj) };
                case pE.UNAVAILABLE_UNVERIFIED:
                    return {
                        type: e_.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        useText: () => m.intl.string(m.t.uggF7o),
                    };
                case pE.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [fT],
    });
var fp = i(32880),
    ff = i(663417);
function fN() {
    (0, C.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(i.bind(i, 662758));
        return (t) =>
            (0, f.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    SJ.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                        var t;
                        return (
                            (t = e),
                            void (0, C.openModalLazy)(
                                async () => {
                                    let { default: e } = await Promise.resolve().then(i.bind(i, 518142));
                                    return (i) => (0, f.jsx)(e, { ...i, password: t });
                                },
                                { stackingBehavior: "stack" },
                            )
                        );
                    }),
                title: m.intl.string(m.t.PsQmzU),
                actionText: m.intl.string(m.t.ajkYcF),
            });
    });
}
var f_ = i(203082);
function fC(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function fI() {
    let e = S0.A.getVerificationKey();
    try {
        await SJ.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, Ed.P0)({
            message: e.body?.message ?? m.intl.string(m.t.F8FvUy),
            type: Eg.Ck.FAILURE,
            id: "backup-code-regen-failed",
        });
    }
}
function fb(e) {
    let {
            code: { code: t, consumed: i },
        } = e,
        n = fC(t),
        s = N.useRef(null),
        l = (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsx)(ps.P, { checked: i }), (0, f.jsx)(k.E, { variant: "text-md/normal", children: n })],
        });
    return cA.p5
        ? (0, f.jsx)(V.D, {
              tag: "li",
              className: eF()(f_.aY, f_.vk),
              innerRef: s,
              onKeyDown: (e) => {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, cA.C)(n), s?.current?.focus());
              },
              onClick: () => {
                  (0, cA.C)(n),
                      (0, Ed.P0)({ message: m.intl.string(m.t.mGZ66D), type: Eg.Ck.SUCCESS, id: "backup-code-copied" });
              },
              children: l,
          })
        : (0, f.jsx)("li", { className: f_.aY, children: l });
}
let fv = (0, o.zZ)(d.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => m.intl.string(m.t.fC9qV0),
        useSubtitle: () =>
            (0, R.bG)([S0.A], () => S0.A.getBackupCodes().length > 0)
                ? m.intl.format(m.t.tp7zEK, {})
                : m.intl.string(m.t.LoOi4S),
        usePredicate: pi,
        buildLayout: () => [fj],
    }),
    fj = (0, o.E2)(d.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [m.intl.string(m.t.fC9qV0)],
        Component: function () {
            let e = (0, R.bG)([S0.A], () => S0.A.getBackupCodes()),
                t = N.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: i } = e;
                                return `* ${fC(t)}` + (i ? ` (${m.intl.string(m.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, f.jsx)(eE.$, { text: m.intl.string(m.t.Jc2myK), size: "sm", variant: "secondary", onClick: fN })
                : (0, f.jsxs)(f.Fragment, {
                      children: [
                          (0, f.jsx)("ul", {
                              className: f_.E5,
                              children: e.map((e) => (0, f.jsx)(fb, { code: e }, e.code)),
                          }),
                          (0, f.jsxs)(aw.e, {
                              size: "sm",
                              children: [
                                  (0, f.jsx)(S2.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, f.jsx)(eE.$, {
                                          text: m.intl.string(m.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: fp.s,
                                      }),
                                  }),
                                  (0, f.jsx)(eE.$, {
                                      text: m.intl.string(m.t["3x962E"]),
                                      variant: "secondary",
                                      icon: ff.f,
                                      onClick: fI,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    fy = (0, o.Tf)(d.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => m.intl.string(m.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = N.useState(!1),
                i = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()?.phone);
            return null == i
                ? null
                : m.intl.format(e ? m.t["xDBk/I"] : m.t.bnKdnl, {
                      phone: e ? i : i.slice(-4),
                      toggleButton: () =>
                          (0, f.jsx)(B.Q, {
                              text: e ? m.intl.string(m.t.fgq1gs) : m.intl.string(m.t.dcztdU),
                              onClick: () => t(!e),
                          }),
                  });
        },
        useLabel: () => m.intl.string(m.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => (0, R.bG)([t6.default], () => t6.default.getCurrentUser()?.hasFlag(Q.nhx.MFA_SMS) ?? !1),
        onClick: () =>
            void (0, C.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 662758));
                return (t) =>
                    (0, f.jsx)(e, {
                        ...t,
                        handleSubmit: SJ.A.disableSMS,
                        title: m.intl.string(m.t.KLWnit),
                        children: m.intl.string(m.t["W0/Duf"]),
                    });
            }),
    }),
    fO = (0, o.zZ)(d.X.SMS_AUTH_CATEGORY, {
        useTitle: () => m.intl.string(m.t.wuHuI5),
        useSubtitle: () => (0, R.bG)([t6.default], () => ph(t6.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()?.hasFlag(Q.nhx.MFA_SMS) ?? !1),
                t = (0, R.bG)([t6.default], () => null != ph(t6.default.getCurrentUser()));
            if (!e)
                return {
                    type: e_.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: e_.UV.BUTTON,
                            id: "sms-setup-button",
                            text: m.intl.string(m.t.Age7yU),
                            onClick: fR,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = px(),
                t = pi(),
                i = (0, R.bG)([cu.default], () => cu.default.hasTOTPEnabled());
            return e === pE.AVAILABLE && t && i;
        },
        buildLayout: () => [fy],
    });
function fR() {
    let e = t6.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            (t = { reason: pm.d.USER_SETTINGS_UPDATE, onAddedPhone: SJ.A.enableSMS }),
                (0, C.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.resolve().then(i.bind(i, 615715));
                        return (i) => (0, f.jsx)(e, { ...i, ...t });
                    },
                    { modalKey: pS.V },
                );
        } else SJ.A.enableSMS();
}
var fL = i(665671),
    fD = i(442433),
    fP = i(917136),
    fG = i(976910),
    fU = i(108666);
function fM(e) {
    let { credential: t } = e;
    return (0, f.jsxs)("li", {
        className: fU.e,
        children: [
            (0, f.jsxs)("div", {
                children: [
                    (0, f.jsx)(k.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, f.jsx)(k.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: m.intl.format(m.t["7JgxF5"], { lastUsed: (0, pI.Y)(t.last_used) }),
                        }),
                ],
            }),
            (0, f.jsx)(lp.K, {
                icon: g0.j,
                variant: "icon-only",
                size: "sm",
                "aria-label": m.intl.string(m.t["+nrTbK"]),
                onClick: (e) => {
                    (0, fD.L3)(e, async () => {
                        let { default: e } = await i.e("32529").then(i.bind(i, 41e3));
                        return (i) => (0, f.jsx)(e, { credential: t, ...i });
                    });
                },
            }),
        ],
    });
}
let fV = (0, o.zZ)(d.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => m.intl.string(m.t.IBq4Y3),
        useSubtitle: () => m.intl.string(m.t.yK9edS),
        useHeaderDecoration: function () {
            if (px() === pE.AVAILABLE)
                return {
                    type: e_.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: e_.UV.BUTTON,
                            id: "add-security-key-button",
                            text: m.intl.string(m.t["Tzs/fw"]),
                            icon: r5.j,
                            onClick: fL.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (px()) {
                    case pE.UNAVAILABLE_NO_CRYPTO:
                        return {
                            type: e_.lT.INLINE_NOTICE,
                            noticeType: "info",
                            useText: () => m.intl.string(m.t.bWCGI9),
                        };
                    case pE.UNAVAILABLE_UNVERIFIED:
                        return {
                            type: e_.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            useText: () => m.intl.string(m.t.uggF7o),
                        };
                    case pE.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [fk],
    }),
    fk = (0, o.E2)(d.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [m.intl.string(m.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, R.cf)([fG.A], () => ({
                hasFetchedCredentials: fG.A.hasFetchedCredentials(),
                credentials: fG.A.getCredentials(),
            }));
            return (N.useEffect(() => {
                t || fP.JQ();
            }, [t]),
            t)
                ? (0, f.jsx)(L.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, f.jsx)(fM, { credential: e }, e.id)),
                  })
                : (0, f.jsx)(u3.y, {});
        },
    }),
    fw = (0, o.t_)(d.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => m.intl.string(m.t.m0FidJ),
        buildLayout: () => [fV, fS, fO, fv],
    }),
    fF = (0, o.t0)(d.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => ({
            type: e_.xn.TEXT,
            useText: () => (pi() ? m.intl.string(m.t.lQsY7B) : m.intl.string(m.t.WsUuTt)),
        }),
        buildLayout: () => [fw],
    }),
    fB = (0, o.zZ)(d.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => m.intl.string(m.t["0iH2vc"]),
        buildLayout: () => [pc, fF, p0],
    });
function fz(e) {
    let { currentUser: t } = e;
    return t.isClaimed()
        ? null == t.email
            ? null
            : t.verified
              ? void 0
              : (0, f.jsxs)(O.w, {
                    type: "warning",
                    children: [
                        (0, f.jsx)(eh.D, { variant: "heading-md/medium", children: m.intl.string(m.t.tuGzBT) }),
                        (0, f.jsx)(k.E, {
                            variant: "text-sm/normal",
                            className: pl.PA,
                            children: m.intl.string(m.t.NAzplE),
                        }),
                        (0, f.jsx)(p6.A, { size: "sm", variant: "secondary" }),
                    ],
                })
        : (0, f.jsxs)(O.w, {
              type: "critical",
              children: [
                  (0, f.jsx)(eh.D, { variant: "heading-md/medium", children: m.intl.string(m.t["/3qnL/"]) }),
                  (0, f.jsx)(k.E, { variant: "text-sm/normal", className: pl.PA, children: m.intl.string(m.t.qKs3vg) }),
                  (0, f.jsx)(eE.$, {
                      variant: "secondary",
                      size: "sm",
                      text: m.intl.string(m.t["7psymi"]),
                      onClick: () => p3(),
                  }),
              ],
          });
}
var fY = i(297413),
    fX = i(50268),
    fH = i(922301),
    fK = i(262),
    fW = i(68085),
    fZ = i(915614),
    fq = i(246839);
let fQ = st.Ay.getEnableHardwareAcceleration() ? iH.Js : iH.eu;
function fJ(e) {
    let t = (0, xI.X)("UserSettingsAccountProfileCard");
    return N.useCallback(() => {
        t ? (0, xv.openUserProfileModal)({ userId: e }) : (0, ey.openUserSettings)(d.X.PROFILE_PANEL);
    }, [t, e]);
}
function f$(e) {
    let { className: t, user: n } = e,
        s = N.useRef(null),
        l = (0, xB.EC)(),
        r = l?.nick?.[0] ?? null,
        [a, o] = N.useState(!1);
    N.useEffect(() => {
        o(null != s.current && s.current.scrollWidth > s.current.clientWidth);
    }, [n.username]);
    let u = !n.isClaimed(),
        d = u ? m.intl.string(m.t["7Ngnyr"]) : void 0;
    return (0, f.jsxs)("div", {
        className: eF()(fq.ZZ, t),
        children: [
            (0, f.jsx)("div", {
                className: fq.NQ,
                children: (0, f.jsxs)("div", {
                    className: fq.Fj,
                    children: [
                        (0, f.jsx)(k.E, {
                            variant: "text-md/medium",
                            className: fq.p9,
                            children: m.intl.string(m.t.qqhR3L),
                        }),
                        (0, f.jsxs)("div", {
                            className: fq.HR,
                            ref: s,
                            children: [
                                (0, f.jsx)(k.E, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: n.username,
                                }),
                                !n.hasUniqueUsername() &&
                                    (0, f.jsxs)(k.E, {
                                        tag: "span",
                                        color: "text-default",
                                        variant: "text-md/normal",
                                        children: ["#", n.discriminator],
                                    }),
                            ],
                        }),
                    ],
                }),
            }),
            null != r &&
                (0, f.jsx)("div", {
                    className: fq.a$,
                    children: (0, f.jsx)(e1.m, {
                        __unsupportedReactNodeAsText: r,
                        "aria-label": !1,
                        children: (0, f.jsx)(lb.E, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: F.A.colors.STATUS_WARNING.css,
                        }),
                    }),
                }),
            (0, f.jsx)(e1.m, {
                text: d,
                children: (0, f.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: fq.pr,
                    children: (0, f.jsx)(eE.$, {
                        variant: "secondary",
                        size: "sm",
                        text: a ? m.intl.string(m.t["16kTw/"]) : m.intl.string(m.t.bt75uw),
                        disabled: u,
                        "aria-label": m.intl.string(m.t.JECa91),
                        onClick: () =>
                            (0, C.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([i.e("38408"), i.e("20429"), i.e("20969")]).then(
                                    i.bind(i, 667792),
                                );
                                return (t) => (0, f.jsx)(e, { ...t });
                            }),
                    }),
                }),
            }),
        ],
    });
}
function f0(e) {
    let { user: t, className: i } = e,
        n = fJ(t.id),
        s = (0, xB.EC)(),
        l = s?.nick?.[0] ?? null,
        r = Tj.Ay.getGlobalName(t),
        a = N.useRef(null),
        [o, u] = N.useState(!1);
    return (
        N.useEffect(() => {
            u(null != a.current && a.current.scrollWidth > a.current.clientWidth);
        }, [r]),
        (0, f.jsxs)("div", {
            className: eF()(fq.ZZ, i),
            children: [
                (0, f.jsx)("div", {
                    className: fq.NQ,
                    children: (0, f.jsxs)("div", {
                        className: fq.Fj,
                        children: [
                            (0, f.jsx)(k.E, {
                                variant: "text-md/medium",
                                className: fq.p9,
                                children: m.intl.string(m.t["9AjdkD"]),
                            }),
                            (0, f.jsx)("div", {
                                className: fq.HR,
                                ref: a,
                                children: (0, f.jsx)(k.E, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: null == r ? m.intl.string(m.t.ep5kjK) : r,
                                }),
                            }),
                        ],
                    }),
                }),
                null != l &&
                    (0, f.jsx)("div", {
                        className: fq.a$,
                        children: (0, f.jsx)(e1.m, {
                            __unsupportedReactNodeAsText: l,
                            "aria-label": !1,
                            children: (0, f.jsx)(lb.E, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: F.A.colors.STATUS_WARNING.css,
                            }),
                        }),
                    }),
                (0, f.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: fq.pr,
                    children: (0, f.jsx)(eE.$, {
                        variant: "secondary",
                        size: "sm",
                        text: o ? m.intl.string(m.t["16kTw/"]) : m.intl.string(m.t.bt75uw),
                        "aria-label": m.intl.string(m.t.YXeWYM),
                        onClick: n,
                    }),
                }),
            ],
        })
    );
}
function f1(e) {
    let t,
        { className: n, user: s } = e;
    if (s.isClaimed())
        if (null == s.email)
            t = {
                buttonText: m.intl.string(m.t.OYkgVk),
                buttonAriaLabel: m.intl.string(m.t["pvBD+W"]),
                valueMessage: m.intl.string(m.t["8SfTN/"]),
                handleClick: () =>
                    (0, C.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([i.e("97570"), i.e("20577"), i.e("65861")]).then(
                            i.bind(i, 97060),
                        );
                        return (t) => (0, f.jsx)(e, { ...t });
                    }),
            };
        else {
            let { email: e } = s;
            t = {
                buttonText: m.intl.string(m.t.bt75uw),
                buttonAriaLabel: m.intl.string(m.t["8peUT0"]),
                valueMessage: (0, f.jsx)(fu, {
                    text: e,
                    censor: fo,
                    revealLabel: m.intl.string(m.t["Zvx+yV"]),
                    hideLabel: m.intl.string(m.t.nqTD4d),
                }),
                handleClick: () =>
                    (0, C.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([i.e("97570"), i.e("20577"), i.e("65861")]).then(
                            i.bind(i, 97060),
                        );
                        return (t) => (0, f.jsx)(e, { ...t });
                    }),
            };
        }
    else
        t = {
            buttonText: m.intl.string(m.t.BleMPB),
            buttonAriaLabel: m.intl.string(m.t.BleMPB),
            valueMessage: m.intl.string(m.t.qxk9zo),
            handleClick: () => p3(),
        };
    return (0, f.jsxs)("div", {
        className: eF()(fq.ZZ, n),
        children: [
            (0, f.jsx)("div", {
                className: fq.NQ,
                children: (0, f.jsxs)("div", {
                    children: [
                        (0, f.jsx)(k.E, {
                            variant: "text-md/medium",
                            className: fq.p9,
                            children: m.intl.string(m.t.tlZllC),
                        }),
                        (0, f.jsx)("div", {
                            children: (0, f.jsx)(k.E, {
                                tag: "span",
                                color: "text-strong",
                                variant: "text-md/normal",
                                children: t.valueMessage,
                            }),
                        }),
                    ],
                }),
            }),
            (0, f.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: fq.pr,
                children: (0, f.jsx)(eE.$, {
                    variant: "secondary",
                    size: "sm",
                    text: t.buttonText,
                    "aria-label": t.buttonAriaLabel,
                    onClick: t.handleClick,
                }),
            }),
        ],
    });
}
function f2(e) {
    let t,
        { className: n, user: s } = e;
    if (!s.isClaimed()) return null;
    let { phone: l, email: r } = s,
        a = null != l;
    return (
        (t = a
            ? (0, f.jsx)(fu, {
                  text: l,
                  censor: fa,
                  revealLabel: m.intl.string(m.t.eY3xlT),
                  hideLabel: m.intl.string(m.t["jllbv+"]),
              })
            : m.intl.string(m.t.I5kDqj)),
        (0, f.jsxs)("div", {
            className: eF()(fq.ZZ, n),
            children: [
                (0, f.jsx)("div", {
                    className: fq.NQ,
                    children: (0, f.jsxs)("div", {
                        children: [
                            (0, f.jsx)(k.E, {
                                variant: "text-md/medium",
                                className: fq.p9,
                                children: m.intl.string(m.t.kerONq),
                            }),
                            (0, f.jsx)("div", {
                                children: (0, f.jsx)(k.E, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: t,
                                }),
                            }),
                        ],
                    }),
                }),
                (0, f.jsxs)("div", {
                    className: fq.PU,
                    children: [
                        a && null != r
                            ? (0, f.jsx)("div", {
                                  className: eF()(fq.pr, fq.DT),
                                  children: (0, f.jsx)(B.Q, {
                                      textVariant: "text-sm/medium",
                                      variant: "secondary",
                                      text: m.intl.string(m.t.N86XcP),
                                      "aria-label": m.intl.string(m.t.Rpn4A3),
                                      onClick: function () {
                                          (0, C.openModal)((e) =>
                                              (0, f.jsx)(S6.default, {
                                                  ...e,
                                                  title: m.intl.string(m.t["3CTiKi"]),
                                                  children: s.hasFlag(Q.nhx.MFA_SMS)
                                                      ? m.intl.string(m.t.jrhJyo)
                                                      : void 0,
                                                  actionText: m.intl.string(m.t.N86XcP),
                                                  handleSubmit: (e) => pm.A.removePhone(e, pm.d.USER_SETTINGS_UPDATE),
                                              }),
                                          );
                                      },
                                  }),
                              })
                            : null,
                        (0, f.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: fq.pr,
                            children: (0, f.jsx)(eE.$, {
                                variant: "secondary",
                                size: "sm",
                                text: a ? m.intl.string(m.t.bt75uw) : m.intl.string(m.t.OYkgVk),
                                "aria-label": a ? m.intl.string(m.t.YDabSe) : m.intl.string(m.t["SfUuE+"]),
                                onClick: function () {
                                    (0, C.openModalLazy)(
                                        async () => {
                                            let { default: e } = await Promise.resolve().then(i.bind(i, 615715));
                                            return (t) => (0, f.jsx)(e, { reason: pm.d.USER_SETTINGS_UPDATE, ...t });
                                        },
                                        { modalKey: pS.V },
                                    );
                                },
                            }),
                        }),
                    ],
                }),
            ],
        })
    );
}
function f3(e) {
    let { user: t } = e,
        i = (0, fX.A)({ id: t.id, label: m.intl.string(m.t["/AXYnE"]) }),
        n = g.Q_.useSetting(),
        s = N.useRef(null);
    return n && cA.p5
        ? (0, f.jsx)(G.Y, {
              targetElementRef: s,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, f.jsx)(U.W, {
                      "data-menu-migrated": !0,
                      onClose: t,
                      onSelect: void 0,
                      navId: "copy-id",
                      "aria-label": m.intl.string(m.t.RANhlE),
                      children: i,
                  });
              },
              children: (e) =>
                  (0, f.jsx)(V.D, {
                      ...e,
                      innerRef: s,
                      className: fq.SI,
                      "aria-label": m.intl.formatToPlainString(m.t.xZtncm, { username: t.username }),
                      children: (0, f.jsx)(g0.j, { size: "md", color: "currentColor", className: fq.D$ }),
                  }),
          })
        : null;
}
function f6(e) {
    let { className: t } = e,
        n = (0, p4.b8)(),
        s = (0, p4.yM)(),
        l = (0, p4.Y2)(),
        r = !n || s,
        a = m.intl.string(m.t["9KiIz6"]),
        o = m.intl.string(m.t.DVywUB),
        u = m.intl.string(m.t.lKDPGA),
        d = N.useCallback(() => {
            window.open(to.A.getArticleURL(Q.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank");
        }, []),
        c = N.useCallback(() => {
            (0, C.openModalLazy)(async () => {
                let { default: e } = await i.e("45361").then(i.bind(i, 151080));
                return (t) => (0, f.jsx)(e, { ...t });
            });
        }, []),
        g = N.useMemo(
            () =>
                n
                    ? s
                        ? m.intl.string(m.t.sK0dmH)
                        : l
                          ? m.intl.format(p8.default.WM5adV, { handleOnHelpUrlHook: d })
                          : m.intl.string(m.t.XxRj7f)
                    : u,
            [n, s, l, u, d],
        ),
        A = n && !s && l;
    return (0, f.jsxs)("div", {
        className: eF()(fq.ZZ, t),
        children: [
            (0, f.jsx)("div", {
                className: fq.NQ,
                children: (0, f.jsxs)("div", {
                    children: [
                        (0, f.jsx)(k.E, {
                            variant: "text-md/medium",
                            className: fq.p9,
                            children: m.intl.string(m.t["/52UYy"]),
                        }),
                        (0, f.jsx)("div", {
                            children: (0, f.jsxs)(k.E, {
                                tag: "span",
                                color: "text-strong",
                                variant: "text-md/normal",
                                children: [l && n && !s ? `${m.intl.string(m.t.XxRj7f)} \u{2022} ` : null, g],
                            }),
                        }),
                    ],
                }),
            }),
            A &&
                (0, f.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: fq.pr,
                    children: (0, f.jsx)(eE.$, {
                        variant: "secondary",
                        size: "sm",
                        text: m.intl.string(m.t.bt75uw),
                        "aria-label": m.intl.string(m.t.bt75uw),
                        onClick: c,
                    }),
                }),
            r &&
                !A &&
                (0, f.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: fq.pr,
                    children: (0, f.jsx)(eE.$, {
                        variant: "secondary",
                        size: "sm",
                        text: s ? a : o,
                        "aria-label": s ? a : o,
                        onClick: () => fi.A.showAgeVerificationGetStartedModal({ entryPoint: fn.q1.ACCOUNT_AGE_GROUP }),
                    }),
                }),
        ],
    });
}
function f4(e) {
    let { currentUser: t } = e,
        i = fJ(t.id),
        n = (0, Tx.Ay)(t.id),
        s = (0, fK.A)(n),
        l = g.jP.useSetting(),
        r = (0, R.bG)([xC.A], () => xC.A.getErrors()),
        a = r?.avatar?.[0],
        { avatarSrc: o, avatarDecorationSrc: u } = (0, xb.A)({ userId: t?.id, size: iK._3.SIZE_80 }),
        d = (0, p7.fk)();
    return (0, f.jsxs)("div", {
        className: fq.DM,
        children: [
            (0, f.jsx)(fZ.o, {
                user: t,
                displayProfile: n,
                avatarSize: iK._3.SIZE_80,
                avatarOffsetX: 16,
                avatarOffsetY: -22,
                bannerWidth: 696,
                bannerHeight: 100,
                themePadding: 0,
            }),
            (0, f.jsxs)("div", {
                className: fq.eF,
                children: [
                    (0, f.jsx)(fQ, {
                        className: fq.my,
                        src: o,
                        avatarDecoration: u,
                        status: l,
                        size: iK._3.SIZE_80,
                        "aria-label": t.username,
                    }),
                    (0, f.jsxs)("div", {
                        children: [
                            (0, f.jsxs)("div", {
                                className: fq.Ib,
                                children: [
                                    (0, f.jsx)(fY.A, {
                                        user: t,
                                        className: fq.a1,
                                        discriminatorClass: fq.D2,
                                        displayNameStylesType: fH.G.STATIC,
                                    }),
                                    (0, f.jsx)(f3, { user: t }),
                                ],
                            }),
                            (0, f.jsx)(fW.A, { badges: s, className: fq.C_, badgeClassName: fq.qS }),
                        ],
                    }),
                    (0, f.jsx)(eE.$, {
                        variant: "primary",
                        size: "sm",
                        text: m.intl.string(m.t["2p2aYz"]),
                        onClick: i,
                    }),
                ],
            }),
            (0, f.jsxs)("div", {
                className: fq.Tp,
                children: [
                    null != a
                        ? (0, f.jsx)(k.E, {
                              className: fq.mx,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: a,
                          })
                        : null,
                    (0, f.jsxs)("div", {
                        className: fq.FL,
                        children: [
                            (0, f.jsx)(f0, { className: fq.mS, user: t }),
                            (0, f.jsx)(f$, { user: t }),
                            (0, f.jsx)(f1, { className: fq.Zr, user: t }),
                            (0, f.jsx)(f2, { className: fq.Zr, user: t }),
                            d && (0, f.jsx)(f6, { className: fq.Zr }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
let f7 = (0, o.E2)(d.X.ACCOUNT_PROFILE_SETTING, {
        useSearchTerms: function () {
            let e = [
                    m.intl.string(m.t.LYju5J),
                    m.intl.string(m.t["9AjdkD"]),
                    m.intl.string(m.t["+JkHPw"]),
                    m.intl.string(m.t.oP5zGA),
                    m.intl.string(m.t.Ulqq6K),
                ],
                t = (0, p7.fk)(),
                i = (0, p4.Y2)();
            return (
                t &&
                    (e.push(m.intl.string(m.t["/52UYy"])),
                    e.push(m.intl.string(m.t.sK0dmH)),
                    e.push(m.intl.string(m.t.XxRj7f)),
                    e.push(m.intl.string(m.t.DVywUB)),
                    e.push(m.intl.string(m.t["9KiIz6"])),
                    i &&
                        (e.push(m.intl.string(p8.default.FTawSP)),
                        e.push(m.intl.string(p8.default["bD//cU"])),
                        e.push(m.intl.string(p8.default.SH6Tcv)))),
                e
            );
        },
        Component: function () {
            let e = (0, R.bG)([t6.default], () => t6.default.getCurrentUser());
            return (0, f.jsxs)(L.B, {
                gap: "md",
                children: [
                    null != e && (0, f.jsx)(fz, { currentUser: e }),
                    null != e && (0, f.jsx)(f4, { currentUser: e }),
                ],
            });
        },
    }),
    f5 = (0, o.zZ)(d.X.ACCOUNT_PROFILE_CATEGORY, { buildLayout: () => [f7] });
var f8 = i(522369);
function f9(e) {
    let { currentUser: t, disabled: i, handleDisableAccount: n, handleDeleteAccount: s } = e,
        l = t.isClaimed();
    return (0, f.jsx)(sy.D, {
        label: m.intl.string(m.t.ZKsIks),
        description: l ? m.intl.string(m.t.TIh3Yj) : m.intl.string(m.t.czsGA8),
        children: (0, f.jsxs)(aw.e, {
            size: "sm",
            className: f8.U,
            children: [
                l
                    ? (0, f.jsx)(eE.$, {
                          variant: "critical-primary",
                          size: "sm",
                          text: m.intl.string(m.t.jf5GGb),
                          disabled: i,
                          onClick: n,
                      })
                    : null,
                (0, f.jsx)(eE.$, {
                    variant: "critical-secondary",
                    size: "sm",
                    text: m.intl.string(m.t["8lQ2rR"]),
                    disabled: i,
                    onClick: s,
                }),
            ],
        }),
    });
}
var Ne = i(425587);
function Nt(e) {
    if (e.body.code === Q.t02.INVALID_PASSWORD) throw e;
    (0, aM.A)({ title: m.intl.string(m.t.LX0nT8), subtitle: e.body.message });
}
async function Ni() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = t6.default.getCurrentUser();
    if (null == t) return;
    let i = [];
    try {
        i = (await Ne.A.fetchTeams(!0)).body;
    } catch {}
    i.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, aM.A)({
              title: m.intl.string(m.t["Y++oNe"]),
              subtitle: m.intl.format(m.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : K.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, aM.A)({ title: m.intl.string(m.t.vJiTOL), subtitle: m.intl.string(m.t.UyVVan) })
          : t.isClaimed()
            ? (0, C.openModal)((t) =>
                  (0, f.jsx)(S6.default, {
                      ...t,
                      handleSubmit: (t) => (0, xN.U_)(t, e).then(Q.tEg, Nt),
                      title: e ? m.intl.string(m.t.xca2ts) : m.intl.string(m.t.goXv9g),
                      actionText: e ? m.intl.string(m.t["8lQ2rR"]) : m.intl.string(m.t.jf5GGb),
                      variant: "critical-primary",
                      children: e ? m.intl.string(m.t.FB4H1D) : m.intl.string(m.t.gk7h32),
                  }),
              )
            : (0, se.A)({
                  title: m.intl.string(m.t.xca2ts),
                  subtitle: m.intl.string(m.t.FB4H1D),
                  confirmText: m.intl.string(m.t["8lQ2rR"]),
                  onConfirm: () => (0, xN.U_)("", !0),
              });
}
let Nn = (0, o.Tf)(d.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => m.intl.string(m.t["gIpzR+"]),
        useSubtitle: () => m.intl.string(m.t.Bd6dOf),
        useLabel: () => m.intl.string(m.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => Ni(!0),
    }),
    Ns = (0, o.Tf)(d.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => m.intl.string(m.t["p/Tjtp"]),
        useSubtitle: () => m.intl.string(m.t.YvDmKb),
        useLabel: () => m.intl.string(m.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => Ni(!1),
        usePredicate: () => {
            let e = (0, R.bG)([t6.default], () => t6.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    Nl = (0, o.zZ)(d.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [Ns, Nn] }),
    Nr = (0, o.E2)(d.X.ACCOUNT_REMOVAL_SETTING, {
        useSearchTerms: () => [m.intl.string(m.t.ZKsIks), m.intl.string(m.t.jf5GGb), m.intl.string(m.t["8lQ2rR"])],
        Component: function () {
            let e = (0, R.bG)([t6.default], () => t6.default.getCurrentUser());
            return null == e
                ? null
                : (0, f.jsx)(f9, {
                      currentUser: e,
                      handleDisableAccount: () => Ni(!1),
                      handleDeleteAccount: () => Ni(!0),
                  });
        },
    }),
    Na = (0, o.zZ)(d.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [Nr] });
var No = i(308645),
    Nu = i(271995),
    Nd = i(855267);
let Nc = (0, o.E2)(d.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [m.intl.string(m.t["16r9jm"])],
        Component: Nd.A,
    }),
    Ng = (0, o.zZ)(d.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [Nc] }),
    Nm = (0, o.t_)(d.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => m.intl.string(m.t["16r9jm"]),
        buildLayout: () => [Ng],
    }),
    NA = (0, o.t0)(d.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: Nu.$b,
        useSubtitle: Nu.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: i } = (0, Nu._k)();
            return { type: e_.Xy.ICON, icon: i, color: e, backgroundColor: t };
        },
        initialize: () => {
            No.Yn();
        },
        buildLayout: () => [Nm],
    }),
    Nh = (0, o.zZ)(d.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: () => m.intl.string(m.t["16r9jm"]),
        buildLayout: () => [NA],
    }),
    NE = (0, o.zZ)(d.X.ACCOUNT_STANDING_CATEGORY, { buildLayout: () => [Nc] });
var Nx = i(834981),
    NT = i(840387),
    NS = i(177953),
    Np = i(986922),
    Nf = i(602339);
let NN = (0, o.E2)(d.X.FAMILY_CENTER_SETTING, {
        Component: Np.p,
        useSearchTerms: () => [
            m.intl.string(Nf.default.RZqaJn),
            m.intl.string(Nf.default.bdBmqy),
            m.intl.string(Nf.default["gVWG+6"]),
            m.intl.string(Nf.default.ahKIJO),
            m.intl.string(Nf.default["8SLtqb"]),
        ],
    }),
    N_ = (0, o.zZ)(d.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [NN] });
function NC() {
    return N.useMemo(() => ({ badgeType: e_.Xi.COUNT, useCount: Nx.VT }), []);
}
let NI = (0, o.t_)(d.X.FAMILY_CENTER_PANEL, {
        useTitle: () => m.intl.string(Nf.default.RZqaJn),
        buildLayout: () => [N_],
    }),
    Nb = (0, o.i4)(d.X.FAMILY_CENTER_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(Nf.default.RZqaJn),
        icon: NS.n,
        usePersistentBadge: NC,
        buildLayout: () => [NI],
    }),
    Nv = (0, o.zZ)(d.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => m.intl.string(Nf.default.RZqaJn),
        usePersistentBadge: NC,
        buildLayout: () => [Nj],
    }),
    Nj = (0, o.t0)(d.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, Nx.Li)() ? m.intl.string(Nf.default.IcMQUP) : m.intl.string(Nf.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, NT.Z)(),
                t = (0, Nx.Li)();
            return e
                ? t
                    ? m.intl.string(Nf.default.G8lHFU)
                    : m.intl.string(Nf.default.uOLNEZ)
                : m.intl.string(Nf.default.Z53oSM);
        },
        buildLayout: () => [NI],
    });
var Ny = (((a = {}).SECURITY = "SECURITY"), (a.STANDING = "STANDING"), a);
let NO = (0, o.dT)(d.X.ACCOUNT_STANDING_TAB, {
        getTitle: () => m.intl.string(m.t["Vov/9o"]),
        onItemSelect: () => {
            X.default.track(Q.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: Ny.STANDING });
        },
        buildLayout: () => [NE],
    }),
    NR = (0, o.dT)(d.X.ACCOUNT_SECURITY_TAB, {
        getTitle: () => m.intl.string(m.t.Am9YHi),
        onItemSelect: () => {
            X.default.track(Q.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: Ny.SECURITY });
        },
        buildLayout: () => [f5, p1, Na],
    });
function NL() {
    let e = t6.default.getCurrentUser();
    return (
        null == e || (0, u.pC)("Account") || (0, Tw.A)(e.id, e.getAvatarURL(void 0, 80)),
        () => {
            SJ.A.clearBackupCodes(), (0, xN.Uo)();
        }
    );
}
let ND = (0, o.t_)(d.X.ACCOUNT_PANEL, {
        useTitle: () => m.intl.string(m.t["JAIM/m"]),
        initialize: NL,
        useObscuredNotice: u0.L,
        buildLayout: () => [NR, NO],
    }),
    NP = (0, o.t_)(d.X.ACCOUNT_PANEL, {
        useTitle: () => m.intl.string(m.t["ldCE/p"]),
        initialize: NL,
        useObscuredNotice: u0.L,
        buildLayout: () => [fx, fB, Nh, Nv, Nl],
    }),
    NG = (0, o.i4)(d.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => ((0, u.pC)("Account") ? m.intl.string(m.t["ldCE/p"]) : m.intl.string(m.t["JAIM/m"])),
        icon: Ac.n,
        buildLayout: () => ((0, u.pC)("Account") ? [NP] : [ND]),
    });
var NU = i(176781),
    NM = i(611371);
let NV = () =>
    (0, f.jsx)(e1.m, { asContainer: !0, text: m.intl.string(m.t["/fgfWh"]), children: (0, f.jsx)(NM.A, {}) });
var Nk = i(274372),
    Nw = i(607814),
    NF = i(696016);
let NB = (() => {
        let e = [NF.wN];
        for (let t = 10; t <= NF.qh; t += 10) e.push(t);
        return e[e.length - 1] !== NF.qh && e.push(NF.qh), e;
    })(),
    Nz = (0, o.sN)(d.X.CLIPS_AUTO_CLIP_STORAGE_LIMIT, {
        useTitle: () => m.intl.string(m.t.yfsrDI),
        useSubtitle: () => m.intl.string(m.t.vlDHdC),
        minValue: NF.wN,
        maxValue: NF.qh,
        getInitialValue: () => Nk.A.getSettings().maxAutoClips,
        onValueRender: (e) => `${Math.floor(e)}`,
        asValueChanges: (e) => Nw.e6(Math.floor(e)),
        markers: NB,
        onMarkerRender: (e) => `${Math.floor(e)}`,
    }),
    NY = (0, o.zD)(d.X.CLIPS_ENABLE_GAME_SIGNALS, {
        useTitle: () => m.intl.string(m.t.iV6KcI),
        useSubtitle: () => m.intl.string(m.t["dJ2tX+"]),
        useValue: () => (0, R.bG)([Nk.A], () => Nk.A.getSettings().clipSignals.enableGameSignals),
        setValue: (e) => {
            let t = Nk.A.getSettings().clipSignals;
            Nw.PW({ ...t, enableGameSignals: e });
        },
    }),
    NX = (0, o.zD)(d.X.CLIPS_ENABLE_PHRASE_SIGNALS, {
        useTitle: () => m.intl.string(m.t.nHsilt),
        useSubtitle: () => m.intl.string(m.t["s6wq+m"]),
        useValue: () => (0, R.bG)([Nk.A], () => Nk.A.getSettings().clipSignals.enablePhraseSignals),
        setValue: (e) => {
            let t = Nk.A.getSettings().clipSignals;
            Nw.PW({ ...t, enablePhraseSignals: e });
        },
    }),
    NH = (0, o.E2)(d.X.CLIPS_PHRASES, {
        useSearchTerms: () => [m.intl.string(m.t.JIze0o)],
        usePredicate: () => (0, R.bG)([Nk.A], () => Nk.A.getSettings().clipSignals).enablePhraseSignals,
        Component: function () {
            let e = (0, R.bG)([Nk.A], () => Nk.A.getSettings().autoClipPhrases),
                [t, i] = N.useState(""),
                n = N.useMemo(() => e.map((e) => ({ id: e, label: e })), [e]),
                s = N.useCallback((e) => {
                    i(e);
                }, []),
                l = N.useCallback(
                    (n) => {
                        if ("Enter" === n.key || "," === n.key) {
                            n.preventDefault();
                            let s = t.trim().toLowerCase();
                            s.length > 0 && !e.includes(s) && (Nw.pM([...e, s]), i(""));
                        } else if ("Backspace" === n.key && "" === t && e.length > 0) {
                            let t = e.slice(0, -1);
                            Nw.pM(t);
                        }
                    },
                    [t, e],
                ),
                r = N.useCallback(
                    (t) => {
                        let i = Array.from(t)[0],
                            n = e.filter((e) => e !== i);
                        Nw.pM(n);
                    },
                    [e],
                );
            return (0, f.jsx)(lD.k, {
                value: t,
                onChange: s,
                onKeyDown: l,
                placeholder: m.intl.string(m.t.zYUZpt),
                leading: n.length > 0 ? { type: "tags", items: n, onRemove: r } : void 0,
            });
        },
    }),
    NK = (0, o.zZ)(d.X.CLIPS_AUTOMATIC_CLIPPING_CATEGORY, {
        useTitle: () => m.intl.string(m.t.sA0WKL),
        usePredicate: () => {
            let { enableAdvancedSignals: e } = lJ.L_.useConfig({ location: "ClipsAutomaticClippingCategory" });
            return e;
        },
        buildLayout: () => [Nz, NY, NX, NH],
    });
var NW = i(150616),
    NZ = i(16590);
let Nq = (0, o.Tf)(d.X.CLIPS_CLEAR_REMINDER_SNOOZE, {
    useTitle: () => m.intl.string(NZ.default.S0H8in),
    useSubtitle: () =>
        (0, R.bG)([Nk.A], () => {
            let { remindersDismissedUntil: e } = Nk.A.getUserAgnosticState();
            if (null == e || Date.now() >= e) return m.intl.string(NZ.default.I8u5xw);
            let t = new Date(e).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
            return m.intl.formatToPlainString(NZ.default.iJ0azr, { time: t });
        }),
    useLabel: () => m.intl.string(NZ.default.QtW1Nc),
    useVariant: () => "secondary",
    usePredicate: () => NW.Z.useConfig({ location: "ClearReminderSnooze" }).enableReminderSidebar,
    useDisabled: () =>
        (0, R.bG)([Nk.A], () => {
            let { remindersDismissedUntil: e } = Nk.A.getUserAgnosticState();
            return null == e || Date.now() >= e;
        }),
    onClick: Nw.Cr,
});
var NQ = i(753070);
let NJ = (0, o.Hn)(d.X.CLIPS_FRAME_RATE, {
    useTitle: () => m.intl.string(m.t["2wScL1"]),
    useSubtitle: () => m.intl.string(m.t["Rf9+fy"]),
    useValue: () => (0, R.bG)([Nk.A], () => Nk.A.getSettings().clipsQuality.frameRate),
    setValue: (e) => {
        let { clipsQuality: t } = Nk.A.getSettings();
        Nw.GS({ resolution: t.resolution, frameRate: e });
    },
    useOptions: () => [
        { id: "15", value: NQ.kn.FPS_15, label: m.intl.formatToPlainString(m.t.Qb44XH, { fps: NQ.kn.FPS_15 }) },
        { id: "30", value: NQ.kn.FPS_30, label: m.intl.formatToPlainString(m.t.Qb44XH, { fps: NQ.kn.FPS_30 }) },
        { id: "60", value: NQ.kn.FPS_60, label: m.intl.formatToPlainString(m.t.Qb44XH, { fps: NQ.kn.FPS_60 }) },
    ],
});
var N$ = i(372684);
let N0 = (0, o.E2)(d.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
    useSearchTerms: () => [m.intl.string(m.t.SIxrIF)],
    usePredicate: () => (0, R.bG)([Nk.A], () => Nk.A.getHardwareClassification()) === N$.k9.BELOW_MINIMUM,
    Component: () => (0, f.jsx)(si.A, { look: si.k.WARNING, children: m.intl.string(m.t.SIxrIF) }),
});
var N1 = i(158278);
let N2 = (0, o.E2)(d.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [m.intl.string(m.t.pf54EU), m.intl.string(m.t["QyB/jK"])],
        Component: () => {
            let e = (0, R.bG)([eI.Ay], () => eI.Ay.getKeybindForAction(Q.hCu.SAVE_CLIP, !0));
            tO()(null != e, "Save clip keybind unset");
            let t = N.useCallback(
                (t) => {
                    tR.A.setKeybind({ ...e, shortcut: t });
                },
                [e],
            );
            return (0, f.jsx)(sy.D, {
                label: m.intl.string(m.t.pf54EU),
                description: m.intl.string(m.t["QyB/jK"]),
                layout: "horizontal",
                children: (0, f.jsx)("div", {
                    className: N1.g,
                    children: (0, f.jsx)(tL.A, { defaultValue: e.shortcut, onChange: t }),
                }),
            });
        },
    }),
    N3 = (0, o.Hn)(d.X.CLIPS_LENGTH, {
        useTitle: () => m.intl.string(m.t.OgfUio),
        useSubtitle: () => m.intl.string(m.t.H7j4tY),
        useValue: () => (0, R.bG)([Nk.A], () => Nk.A.getSettings().clipsLength),
        setValue: (e) => Nw.h$(e),
        useOptions: () => [
            { id: "30s", value: NF.LX.SECONDS_30, label: m.intl.formatToPlainString(m.t["bTFv/3"], { count: 30 }) },
            { id: "1m", value: NF.LX.MINUTES_1, label: m.intl.formatToPlainString(m.t.ICo9Nk, { count: 1 }) },
            { id: "2m", value: NF.LX.MINUTES_2, label: m.intl.formatToPlainString(m.t.ICo9Nk, { count: 2 }) },
        ],
    }),
    N6 = (0, o.E2)(d.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [m.intl.string(m.t["Z+MfqT"])],
        Component: () => (0, f.jsx)(si.A, { look: si.k.INFO, children: m.intl.string(m.t["Z+MfqT"]) }),
    }),
    N4 = (0, o.Hn)(d.X.CLIPS_RESOLUTION, {
        useTitle: () => m.intl.string(m.t.aFudZJ),
        useSubtitle: () => m.intl.string(m.t.nIrkW5),
        useValue: () => (0, R.bG)([Nk.A], () => Nk.A.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = Nk.A.getSettings();
            Nw.GS({ resolution: e, frameRate: t.frameRate });
        },
        useOptions: () => [
            {
                id: "480p",
                value: NQ.on.RESOLUTION_480,
                label: m.intl.formatToPlainString(m.t.TEOC0I, { resolution: NQ.on.RESOLUTION_480 }),
            },
            {
                id: "720p",
                value: NQ.on.RESOLUTION_720,
                label: m.intl.formatToPlainString(m.t.TEOC0I, { resolution: NQ.on.RESOLUTION_720 }),
            },
            {
                id: "1080p",
                value: NQ.on.RESOLUTION_1080,
                label: m.intl.formatToPlainString(m.t.TEOC0I, { resolution: NQ.on.RESOLUTION_1080 }),
            },
            {
                id: "1440p",
                value: NQ.on.RESOLUTION_1440,
                label: m.intl.formatToPlainString(m.t.TEOC0I, { resolution: NQ.on.RESOLUTION_1440 }),
            },
            { id: "source", value: NQ.on.RESOLUTION_SOURCE, label: m.intl.string(m.t.XjXqzh) },
        ],
    }),
    N7 = (0, o.E2)(d.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [m.intl.string(m.t["0U/hj7"]), m.intl.string(m.t["5zxkdo"])],
        usePredicate: lJ.BW,
        Component: () => {
            let e = (0, R.bG)([eI.Ay], () => eI.Ay.getKeybindForAction(Q.hCu.SAVE_CLIP, !0)),
                t = (0, R.bG)([eI.Ay], () => eI.Ay.getKeybindForAction(Q.hCu.SAVE_SCREENSHOT, !0));
            tO()(null != e, "Save clip keybind unset"), tO()(null != t, "Save screenshot keybind unset");
            let i = N.useCallback(
                (e) => {
                    tR.A.setKeybind({ ...t, shortcut: e });
                },
                [t],
            );
            return (0, f.jsx)(sy.D, {
                label: m.intl.string(m.t["0U/hj7"]),
                description: m.intl.string(m.t["5zxkdo"]),
                layout: "horizontal",
                children: (0, f.jsx)("div", {
                    className: N1.g,
                    children: (0, f.jsx)(tL.A, { defaultValue: t.shortcut, onChange: i }),
                }),
            });
        },
    }),
    N5 = (0, o.E2)(d.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [m.intl.string(m.t.s4773E), m.intl.string(m.t.svjwGh)],
        Component: () => {
            let e = (0, R.bG)([Nk.A], () => Nk.A.getSettings().storageLocation),
                t = N.useRef(!1),
                i = async () => {
                    if (!t.current) {
                        t.current = !0;
                        try {
                            let e = await s2.A.fileManager.showOpenDialog({
                                properties: ["openDirectory", "createDirectory"],
                            });
                            e.length > 0 && Nw.HU(e[0]);
                        } finally {
                            t.current = !1;
                        }
                    }
                };
            return (0, f.jsx)(sy.D, {
                label: m.intl.string(m.t.s4773E),
                description: m.intl.string(m.t.svjwGh),
                layout: "horizontal",
                children: (0, f.jsx)(V.D, {
                    "aria-label": m.intl.formatToPlainString(m.t.iMONTj, { storageLocation: e }),
                    onClick: i,
                    children: (0, f.jsx)(lD.k, { tabIndex: -1, value: e, editable: !1, "aria-hidden": !0 }),
                }),
            });
        },
    });
var N8 = i(572164);
let N9 = (0, o.zD)(d.X.CLIPS_ENABLE, {
    useTitle: () => m.intl.string(m.t.h8rgrK),
    useSubtitle: () => m.intl.string(m.t["4Qw3NO"]),
    useValue: () => (0, N8.Et)(),
    setValue: (e) => Nw.yO({ clipsEnabled: e, trackAnalytics: !0 }),
});
var _e = i(915618);
let _t = (0, o.zD)(d.X.CLIPS_ENABLE_DECOUPLED_CLIPPING, {
        useTitle: () => m.intl.string(m.t.yXvykv),
        useSubtitle: () => m.intl.string(m.t.YP3ujk),
        useValue: N8.XT,
        setValue: (e) => Nw.fd({ enabled: e, trackAnalytics: !0 }),
        usePredicate: () => {
            let e = (0, ej.isWindows)(),
                t = (0, _e.A)(lv.Ay);
            return e && t;
        },
    }),
    _i = (0, o.zD)(d.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => m.intl.string(m.t["3zwNf6"]),
        useSubtitle: () => m.intl.string(m.t.m4Cjj9),
        useValue: () => (0, R.bG)([Nk.A], () => Nk.A.getSettings().remindersEnabled),
        setValue: (e) => Nw.Mt(e),
    }),
    _n = (0, o.zZ)(d.X.CLIPS_RECORDING_CATEGORY, {
        useTitle: () => m.intl.string(m.t.iIwmV5),
        buildLayout: () => [N6, N0, N9, _t, _i, Nq, N3, N4, NJ, N2, N7, N5],
    }),
    _s = (0, o.t_)(d.X.CLIPS_PANEL, {
        useTitle: () => m.intl.string(m.t.z2jK6X),
        usePersistentBadge: () => ({
            badgeType: e_.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            useCustomBadge: () => (0, f.jsx)(NV, {}),
        }),
        usePredicate: lJ.sw,
        buildLayout: () => [_n, NK],
    }),
    _l = (0, o.i4)(d.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t.z2jK6X),
        icon: NU.x,
        buildLayout: () => [_s],
    });
var _r = i(875444);
function _a(e, t) {
    let i = (0, R.bG)([E3.default], () => E3.default.getFetchState()),
        n = (0, R.bG)([E3.default], () =>
            e ? E3.default.getNewestTokensForNonChildrenApplications() : E3.default.getNewestTokens(),
        ),
        s = N.useMemo(
            () => (null == n ? [] : n.filter((e) => (0, _r.A)(e.application)).map((e) => e.application)),
            [n],
        );
    return (
        N.useEffect(() => {
            t || ER.A.fetch();
        }, [t]),
        { showLoadingIndicator: i !== E3.FetchState.FETCHED && (null == n || 0 === n.length), slayerSdkApplications: s }
    );
}
i(644151);
var _o = i(464946);
i(750994);
var _u = i(998382);
function _d(e) {
    let { applications: t } = e,
        i = N.useMemo(() => t.sort((e, t) => dn.default.compare(t.id, e.id)), [t]),
        n = N.useMemo(() => {
            let e = [];
            for (let t = 0; t < 3; t++) {
                let n = i[t];
                if (null == n) break;
                e.push(n.name);
            }
            let t = e.join(", "),
                n = i.length - 3;
            return n > 0
                ? m.intl.format(m.t.sHFdTg, {
                      gameList: t,
                      plusMoreHook: (e, t) =>
                          (0, f.jsx)(
                              k.E,
                              {
                                  tag: "span",
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: m.intl.format(m.t["EADv+4"], { count: n }),
                              },
                              t,
                          ),
                  })
                : e.join(", ");
        }, [i]),
        s = N.useMemo(() => {
            let e = [];
            for (let t = 0; t < 3; t++) {
                let n = i[t];
                if (null == n) break;
                let { icon: s, name: l, id: r } = n,
                    a = i$.Ay.getApplicationIconURL({ id: r, icon: s });
                e.push(
                    (0, f.jsx)(
                        e1.m,
                        {
                            __unsupportedReactNodeAsText: l,
                            children: (0, f.jsx)("img", { src: a, "aria-label": l, className: _u.Kk }),
                        },
                        r,
                    ),
                );
            }
            let t = i.length - 3;
            return (
                t > 0 &&
                    e.push(
                        (0, f.jsx)(
                            "div",
                            {
                                className: _u.lK,
                                children: (0, f.jsx)(k.E, {
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
    return (0, f.jsxs)("div", {
        className: _u.wx,
        children: [
            (0, f.jsxs)("div", {
                className: _u.kX,
                children: [
                    (0, f.jsx)(k.E, { variant: "text-md/normal", color: "text-strong", children: n }),
                    (0, f.jsxs)(V.D, {
                        onClick: () => {
                            (0, ey.openUserSettings)(d.X.AUTHORIZED_APPS_PANEL);
                        },
                        className: _u.bJ,
                        children: [
                            (0, f.jsx)(k.E, {
                                variant: "text-xs/normal",
                                color: "interactive-text-default",
                                children: m.intl.format(m.t.oYaYOe, {}),
                            }),
                            (0, f.jsx)(tE._, {
                                size: "xxs",
                                color: F.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                className: _u.g7,
                            }),
                        ],
                    }),
                ],
            }),
            (0, f.jsx)("div", { className: _u.yF }),
            (0, f.jsx)("div", { className: _u.lJ, children: s }),
        ],
    });
}
function _c() {
    return (0, f.jsxs)("div", {
        className: _u.do,
        children: [
            (0, f.jsx)(k.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: _u.xV,
                children: m.intl.string(m.t["+0U77d"]),
            }),
            (0, f.jsx)(k.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: m.intl.format(m.t.V8wClM, {
                    helpdeskArticle: to.A.getArticleURL(Q.MVz.SOCIAL_LAYER_CONNECTIONS),
                }),
            }),
        ],
    });
}
function _g(e) {
    let { applications: t } = e;
    return t.length > 0 ? (0, f.jsx)(_d, { applications: t }) : (0, f.jsx)(_c, {});
}
let _m = (0, o.E2)(d.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES, {
    useSearchTerms: () => [m.intl.string(m.t.YpCiMt)],
    Component: function () {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = _a(!0);
        return e ? (0, f.jsx)(u3.y, {}) : (0, f.jsx)(_g, { applications: t });
    },
});
function _A() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = _a(!0, !0);
    return !e && t.length > 0;
}
let _h = (0, o.zD)(d.X.CONTENT_AND_SOCIAL_ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => m.intl.string(m.t.XpBObB),
        useSubtitle: () =>
            m.intl.format(m.t.oZsHTD, { helpdeskArticle: to.A.getArticleURL(Q.MVz.SLAYER_GAME_FRIENDS) }),
        useSearchTerms: () => [m.intl.string(m.t["Uv/eTx"])],
        useValue: () => g.Zk.useSetting(),
        setValue: (e) => g.Zk.updateSetting(e),
        usePredicate: _A,
    }),
    _E = (0, o.Qx)(d.X.CONTENT_AND_SOCIAL_IN_GAME_DMS_SETTING, {
        useTitle: () => m.intl.string(m.t["ms+Tme"]),
        useSubtitle: () => m.intl.string(m.t["4NN4+/"]),
        useOptions: () => [
            { name: m.intl.string(m.t.JIFnN9), value: _.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
            { name: m.intl.string(m.t.rRdsk1), value: _.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
            { name: m.intl.string(m.t.AolKwN), value: _.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
        ],
        useValue: () => {
            let e = g.TA.useSetting();
            return e === _.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? _.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e;
        },
        setValue: (e) => g.TA.updateSetting(e),
        usePredicate: _A,
    }),
    _x = (0, o.zZ)(d.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_CATEGORY, {
        useSearchTerms: () => [m.intl.string(m.t.YpCiMt)],
        buildLayout: () => [_m, _h, _E],
    });
var _T = i(687123),
    _S = i(444802),
    _p = i(558001);
i(866945);
var _f = i(835002);
function _N() {
    let e = (0, _S.WX)();
    N.useEffect(() => {
        (0, _p.N)(_f.YA.AGE_CONFIRMATION_NOTICE, _f.YX.VIEWED);
    }, []);
    let t = N.useCallback(() => {
            window.open(to.A.getArticleURL(e), "_blank"), (0, _p.N)(_f.YA.AGE_CONFIRMATION_NOTICE, _f.YX.LEARN_MORE);
        }, [e]),
        i = N.useCallback(() => {
            fi.A.showAgeVerificationGetStartedModal({ entryPoint: fn.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, _p.N)(_f.YA.AGE_CONFIRMATION_NOTICE, _f.YX.CONFIRM_AGE);
        }, []);
    return (0, f.jsx)(ta.p, {
        messageType: ta.Y.INFO,
        action: (0, f.jsx)(B.Q, {
            variant: "secondary",
            size: "sm",
            textVariant: "text-sm/medium",
            text: m.intl.string(m.t.FDSSia),
            onClick: i,
        }),
        children: m.intl.format(m.t.mFgsfg, { hook: (e, i) => (0, f.jsx)(uk.Anchor, { onClick: t, children: e }, i) }),
    });
}
function __() {
    let e = (0, p7.aX)(_T.t.REACTIVE_CHECK),
        t = (0, p4.b8)();
    return N.useMemo(() => {
        if (e && !t) return { type: e_.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: _N };
    }, [e, t]);
}
var _C = i(308528),
    _I = i(171316);
function _b() {
    let e = (0, _I.uM)(),
        t = (0, Nx.vx)(),
        i = N.useCallback(() => {
            (0, sE.default)(),
                _C.A.openPrivateChannel({ recipientIds: t }),
                (0, _p.N)(_f.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _f.YX.LEARN_MORE);
        }, [t]),
        n = N.useCallback(() => {
            (0, _p.N)(_f.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _f.YX.VIEWED);
        }, []);
    return N.useMemo(() => {
        if (e)
            return {
                type: e_.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: n,
                useText: () =>
                    m.intl.format(Nf.default.i284fU, {
                        hook: (e, t) => (0, f.jsx)(uk.Anchor, { onClick: i, children: e }, t),
                        count: t.length,
                    }),
            };
    }, [i, e, t.length, n]);
}
var _v = i(323073),
    _j = i(264249),
    _y = i(406274);
let _O = (0, o.zD)(d.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_DM_SETTING, {
        useTitle: () => m.intl.string(m.t.XahVjj),
        useSubtitle: () => m.intl.string(m.t.R9fXyS),
        useValue: _j.hT,
        useDisabled: () => {
            let e = (0, _y.A)() ?? !0,
                t = (0, _v.sP)(),
                i = (0, p4.yM)();
            return (!t || !!i) && !e;
        },
        setValue: (e) => {
            (0, _v.p5)() && e
                ? fi.A.showAgeVerificationGetStartedModal({ entryPoint: fn.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : g.Qe.updateSetting(e);
        },
    }),
    _R = (0, o.zD)(d.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => m.intl.string(m.t["L+yTsa"]),
        useSubtitle: () => m.intl.string(m.t.hiM8pU),
        useValue: _j.tI,
        useDisabled: () => {
            let e = (0, _y.A)() ?? !0,
                t = (0, _v.sP)(),
                i = (0, p4.yM)();
            return N.useMemo(() => (!t || !!i) && !e, [t, e, i]);
        },
        setValue: (e) => {
            (0, _v.p5)() && e
                ? fi.A.showAgeVerificationGetStartedModal({ entryPoint: fn.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : g.Kg.updateSetting(e);
        },
    });
i(667532);
var _L = i(390248),
    _D = i(632119),
    _P = i(945276),
    _G = i(389737),
    _U = i(566769);
function _M() {
    let e,
        t = (0, _P.A)() ?? !0,
        i = (0, _I.uM)(),
        n = (0, _I.uM)(),
        {
            explicitContentGuilds: s,
            explicitContentFriendDm: l,
            explicitContentNonFriendDm: r,
        } = ((e = (0, uV.cf)([ut.A], () => ut.A.settings.textAndImages?.explicitContentSettings ?? (0, _D.C$)())),
        {
            explicitContentGuilds: (0, _D.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, _D.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, _D.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        }),
        a = (e) => {
            let t = Object.values(e);
            (0, _L.hK)() && t.includes(_.TO.SHOW)
                ? fi.A.showAgeVerificationGetStartedModal({ entryPoint: fn.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
                : (0, _D.Jz)(e);
        },
        o = [
            { value: _.TO.BLUR, label: m.intl.string(m.t.S49Uad) },
            { value: _.TO.BLOCK, label: m.intl.string(m.t["D/157Y"]) },
        ],
        u = [{ value: _.TO.BLUR, label: m.intl.string(m.t.S49Uad) }],
        d = { value: _.TO.SHOW, label: m.intl.string(m.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: n, tooltipText: i ? m.intl.string(Nf.default["6Af/cw"]) : void 0 };
    return (0, f.jsxs)(_G.E, {
        description: m.intl.string(m.t.Wnojv1),
        children: [
            (0, f.jsx)(_U.A, {
                title: m.intl.string(m.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, f.jsx)(_U.A, {
                title: m.intl.string(m.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, f.jsx)(_U.A, {
                title: m.intl.string(m.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || n,
                tooltipText: i ? m.intl.string(Nf.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function _V() {
    let e,
        t = (0, _P.A)() ?? !0,
        i = (0, _I.uM)(),
        n = (0, _I.uM)(),
        {
            goreContentGuilds: s,
            goreContentFriendDm: l,
            goreContentNonFriendDm: r,
        } = ((e = (0, uV.cf)([ut.A], () => ut.A.settings.textAndImages?.goreContentSettings ?? (0, _S.T4)())),
        {
            goreContentGuilds: (0, _S.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, _S.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, _S.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        }),
        a = (e) => {
            let t = Object.values(e);
            (0, _L.hK)() && t.includes(_.TO.SHOW)
                ? fi.A.showAgeVerificationGetStartedModal({ entryPoint: fn.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
                : (0, _S.qY)(e);
        },
        o = [
            { value: _.TO.BLUR, label: m.intl.string(m.t.S49Uad) },
            { value: _.TO.BLOCK, label: m.intl.string(m.t["D/157Y"]) },
        ],
        u = [{ value: _.TO.BLUR, label: m.intl.string(m.t.S49Uad) }],
        d = { value: _.TO.SHOW, label: m.intl.string(m.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: n, tooltipText: i ? m.intl.string(Nf.default["6Af/cw"]) : void 0 };
    return (0, f.jsxs)(_G.E, {
        description: m.intl.string(m.t.XgH9eh),
        children: [
            (0, f.jsx)(_U.A, {
                title: m.intl.string(m.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, f.jsx)(_U.A, {
                title: m.intl.string(m.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, f.jsx)(_U.A, {
                title: m.intl.string(m.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || n,
                options: u,
                tooltipText: i ? m.intl.string(Nf.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var _k = i(875162),
    _w = i(334859);
let _F = (0, o.E2)(d.X.CONTENT_AND_SOCIAL_CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, _S.WX)(),
            t = N.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: m.intl.string(m.t.GYpoAq),
                        component: _M,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: m.intl.string(m.t["16/3Bi"]),
                        component: _V,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, f.jsxs)(_o.h, {
            children: [
                (0, f.jsx)(_o._, {
                    header: m.intl.string(m.t["Hj/But"]),
                    description: m.intl.format(m.t.dliU4j, { learnMoreLink: to.A.getArticleURL(e) }),
                }),
                (0, f.jsx)(_k.A, { tabs: t, orientation: "vertical", tabsClassName: _w.v }),
            ],
        });
    },
    useSearchTerms: () => [
        m.intl.string(m.t["Hj/But"]),
        m.intl.string(m.t["N/oRI+"]),
        m.intl.string(m.t.QVdYsK),
        m.intl.string(m.t["aWD+tu"]),
        m.intl.string(m.t["5mnTa7"]),
        m.intl.string(m.t["K0OWP+"]),
    ],
});
var _B = i(639555),
    _z = i(617641),
    _Y = i(546140),
    _X = i(406935),
    _H = i(594061);
let _K = (0, o.zD)(d.X.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING, {
    useTitle: () => m.intl.string(m.t.qFsx5q),
    useSubtitle: () => m.intl.format(m.t.lunaRv, { learnMoreLink: to.A.getArticleURL(Q.MVz.SAFETY_ALERTS) }),
    useValue: _Y.L,
    setValue: (e) =>
        _H.wc.updateAsync(
            "privacy",
            (t) => {
                t.inappropriateConversationWarnings = _X._t.create({ value: e });
            },
            _H.Sb.INFREQUENT_USER_ACTION,
        ),
    usePredicate: function () {
        let e = (0, _z.Lc)({ location: "DMSafetyAlertsSetting" }),
            t = (0, _B.Rv)({ location: "DMSafetyAlertsSetting" }),
            i = (0, _P.A)() ?? !0;
        return e && !i && !t;
    },
});
var _W = i(809505),
    _Z = i(923457),
    _q = i(656402);
let _Q = (0, o.Qx)(d.X.CONTENT_AND_SOCIAL_DM_SPAM_SETTING, {
        useTitle: () => m.intl.string(m.t.tiCXaH),
        useSubtitle: () => m.intl.format(m.t.RvjRRI, { appealLink: to.A.getArticleURL(Q.MVz.SAFE_DIRECT_MESSAGING) }),
        useValue: function () {
            let e = g.he.useSetting(),
                t = g.cj.useSetting(),
                i = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()),
                n = (0, p7.yv)(_Z.p.SPAM_FILTERS);
            return e !== _.he.DEFAULT_UNSET
                ? e
                : i?.nsfwAllowed === !1 && n
                  ? _.he.FRIENDS_AND_NON_FRIENDS
                  : (_q.xY.get(t) ?? _.he.NON_FRIENDS);
        },
        setValue: (e) => g.he.updateSetting(e),
        useOptions: function () {
            return N.useMemo(() => (0, _W.YS)(), []);
        },
        useSearchTerms: () => [m.intl.string(m.t.JzaP4h), m.intl.string(m.t.H9XOl3), m.intl.string(m.t.k4W40P)],
    }),
    _J = (0, o.zZ)(d.X.CONTENT_AND_SOCIAL_CONTENT_CATEGORY, {
        useTitle: () => m.intl.string(m.t.xVRG4P),
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
                u = _b(),
                d =
                    ((e = (0, NT.Z)()),
                    (t = (0, _S.WX)()),
                    (i = N.useCallback(() => {
                        window.open(to.A.getArticleURL(t), "_blank"),
                            (0, _p.N)(_f.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _f.YX.LEARN_MORE);
                    }, [t])),
                    (n = N.useCallback(() => {
                        (0, _p.N)(_f.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _f.YX.VIEWED);
                    }, [])),
                    N.useMemo(() => {
                        if (e)
                            return {
                                type: e_.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: n,
                                useText: () =>
                                    m.intl.format(m.t.EUo0yj, {
                                        hook: (e, t) => (0, f.jsx)(uk.Anchor, { onClick: i, children: e }, t),
                                    }),
                            };
                    }, [i, e, n])),
                c =
                    ((s = (0, p7.SJ)()),
                    (l = (0, p4.b8)()),
                    (r = s && !l),
                    (a = N.useCallback(() => {
                        fi.A.showAgeVerificationGetStartedModal({ entryPoint: fn.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, _p.N)(_f.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _f.YX.LEARN_MORE);
                    }, [])),
                    (o = N.useCallback(() => {
                        (0, _p.N)(_f.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _f.YX.VIEWED);
                    }, [])),
                    N.useMemo(() => {
                        if (r)
                            return {
                                type: e_.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: o,
                                useText: () =>
                                    m.intl.format(m.t.OX4ybh, {
                                        hook: (e, t) => (0, f.jsx)(uk.Anchor, { onClick: a, children: e }, t),
                                    }),
                            };
                    }, [a, r, o])),
                g = __();
            return u ?? g ?? c ?? d;
        },
        buildLayout: () => [_F, _Q, _K, _O, _R],
    });
var _$ = i(189883);
let _0 = (0, o.zD)(d.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => m.intl.string(m.t["7x9dyE"]),
    useValue: () => {
        let e = g.FA.useSetting();
        return N.useMemo(() => (0, rN.Lx)(e), [e]).all;
    },
    setValue: (e) => {
        g.FA.updateSetting(e ? Q.yKI : Q.yKI & ~Q.dzt.NO_RELATION);
    },
    useDisabled: () => (0, _I.uM)(),
});
var _1 = i(665260);
let _2 = (0, o.zD)(d.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => m.intl.string(m.t.NfeuZ3),
        useValue: () => {
            let e = g.FA.useSetting(),
                t = N.useMemo(() => (0, rN.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: (e) => {
            let t = g.FA.getSetting();
            g.FA.updateSetting(e ? _1.UI(t, Q.dzt.MUTUAL_FRIENDS) : _1.iE(t, Q.dzt.MUTUAL_FRIENDS, Q.dzt.NO_RELATION));
        },
        useDisabled: () => (0, _I.uM)(),
    }),
    _3 = (0, o.zD)(d.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => m.intl.string(m.t.qsMfsH),
        useValue: () => {
            let e = g.FA.useSetting(),
                t = N.useMemo(() => (0, rN.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: (e) => {
            let t = g.FA.getSetting();
            g.FA.updateSetting(e ? _1.UI(t, Q.dzt.MUTUAL_GUILDS) : _1.iE(t, Q.dzt.MUTUAL_GUILDS, Q.dzt.NO_RELATION));
        },
        useDisabled: () => (0, _I.uM)(),
    }),
    _6 = (0, o.zD)(d.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => m.intl.string(m.t["jK+wdr"]),
        useSubtitle: () => m.intl.string(m.t["RYh/pW"]),
        useValue: () => !g.Zd.useSetting(),
        setValue: (e) => {
            g.Zd.updateSetting(!e);
        },
        usePredicate: () => _$.A.useConfig({ location: "Friend Request Setting" }).enabled,
        usePersistentBadge: () => ({ badgeType: e_.Xi.BETA }),
    }),
    _4 = (0, o.zZ)(d.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => m.intl.string(m.t.MNaVwq),
        useSubtitle: () => {
            let { enabled: e } = _$.A.useConfig({ location: "Friend Request Setting" });
            return e ? m.intl.string(m.t.QVbF3l) : void 0;
        },
        useInlineNotice: _b,
        buildLayout: () => [_0, _2, _3, _6],
    });
var _7 = i(994500),
    _5 = i(428678),
    _8 = i(717398),
    _9 = i(730134),
    Ce = i(753686);
function Ct(e) {
    let { listType: t, numberOfUsers: i } = e,
        n = "blocked" === t;
    return (0, f.jsxs)("div", {
        className: Ce.wx,
        children: [
            (0, f.jsx)("div", { className: Ce.zc, children: n ? (0, f.jsx)(_5.K, {}) : (0, f.jsx)(im.G, {}) }),
            (0, f.jsxs)("div", {
                className: Ce.Qq,
                children: [
                    (0, f.jsx)(k.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: m.intl.string(n ? m.t.PFOUKW : m.t["93ZDWE"]),
                    }),
                    (0, f.jsx)(k.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: n
                            ? m.intl.format(m.t["r91W/h"], { numberOfBlockedUsers: i })
                            : m.intl.format(m.t.rXUeOl, { numberOfIgnoredUsers: i }),
                    }),
                ],
            }),
        ],
    });
}
function Ci(e) {
    let { userId: t, last: i } = e,
        n = (0, R.bG)([_7.A], () => _7.A.isBlocked(t)),
        s = (0, R.bG)([t6.default], () => t6.default.getUser(t)),
        [l, r] = N.useState(!1),
        a = N.useCallback(() => {
            r(!0),
                n
                    ? _8.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : _8.A.unignoreUser(t, eV.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      });
        }, [n, t]);
    return null == s
        ? null
        : (0, f.jsxs)("div", {
              className: eF()(Ce.nM, { [Ce.fW]: i }),
              children: [
                  (0, f.jsxs)("div", {
                      className: Ce.eF,
                      children: [
                          (0, f.jsx)(_9.A, { user: s, size: iK._3.SIZE_40 }),
                          (0, f.jsxs)("div", {
                              className: Ce.Qq,
                              children: [
                                  (0, f.jsx)(k.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: s.globalName ?? s.username,
                                  }),
                                  (0, f.jsx)(k.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: null != s.globalName ? s.username : null,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, f.jsx)(eE.$, {
                      variant: "secondary",
                      text: m.intl.string(n ? m.t.XyHpKH : m.t["8wXU9B"]),
                      onClick: a,
                      loading: l,
                  }),
              ],
          });
}
function Cn(e) {
    let { userIds: t, listType: i } = e,
        [n, s] = N.useState(5);
    return (0, f.jsx)(_o.h, {
        children: (0, f.jsxs)("div", {
            className: Ce.Nr,
            children: [
                (0, f.jsx)(Ct, { listType: i, numberOfUsers: t.length }),
                (0, f.jsx)("div", {
                    className: Ce.jS,
                    children: t.slice(0, n).map((e, i) => (0, f.jsx)(Ci, { userId: e, last: i === t.length - 1 }, e)),
                }),
                n < t.length
                    ? (0, f.jsx)("div", {
                          className: Ce.vM,
                          children: (0, f.jsx)(V.D, {
                              onClick: () => {
                                  s((e) => e + 5);
                              },
                              className: Ce.Qf,
                              children: (0, f.jsx)(k.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: m.intl.format(m.t.jULEDr, {
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
let Cs = (0, o.E2)(d.X.CONTENT_AND_SOCIAL_BLOCKED_USERS, {
        useSearchTerms: () => [m.intl.string(m.t.PFOUKW)],
        usePredicate: () => (0, R.bG)([_7.A], () => _7.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, R.yK)([_7.A], () => _7.A.getBlockedIDs());
            return (0, f.jsx)(Cn, { userIds: e, listType: "blocked" });
        },
    }),
    Cl = (0, o.E2)(d.X.CONTENT_AND_SOCIAL_IGNORED_USERS, {
        useSearchTerms: () => [m.intl.string(m.t["93ZDWE"])],
        usePredicate: () => (0, R.bG)([_7.A], () => _7.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, R.yK)([_7.A], () => _7.A.getIgnoredIDs());
            return (0, f.jsx)(Cn, { userIds: e, listType: "ignored" });
        },
    }),
    Cr = (0, o.zZ)(d.X.CONTENT_AND_SOCIAL_RESTRICTED_USERS_CATEGORY, {
        useTitle: () => m.intl.string(m.t.LVwR56),
        useSubtitle: () =>
            m.intl.format(m.t["0aNQo9"], { helpArticle: to.A.getArticleURL(Q.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [Cs, Cl],
        usePredicate: () => {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, R.cf)([_7.A], () => ({
                hasBlockedUsers: _7.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: _7.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var Ca = i(612025),
    Co = i(112469),
    Cu = i(111159),
    Cd = i(152056),
    Cc = i(219714);
let Cg = { label: () => m.intl.string(m.t["32u1Dx"]), value: Ca.YG };
var Cm = i(542457);
let CA = () => (0, Co.Tx)() !== Ca.YG;
function Ch() {
    return m.intl.string(m.t["T+nevN"]);
}
let CE = (0, o.zD)(d.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_JOIN_SETTING, {
        useTitle: Ch,
        useSubtitle: () =>
            m.intl.format(m.t.jXKQCu, { helpdeskArticle: to.A.getArticleURL(Q.MVz.ACTIVITY_STATUS_SETTINGS) }),
        useValue: () => {
            let e = (0, Co.Tx)();
            return !g.pE.useSetting().includes(e);
        },
        setValue: (e) => {
            let t = Ca.xk.getState().selectedGuildId,
                i = (0, rN.CN)();
            e ? i.delete(t) : i.add(t),
                g.pE.updateSetting([...i]),
                X.default.track(Q.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: Cm.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
                    ingress: nv.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                });
        },
        usePredicate: CA,
    }),
    Cx = () => (0, Co.Tx)() !== Ca.YG;
function CT() {
    return m.intl.string(A.default.WhdCGP);
}
let CS = (0, o.zD)(d.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_SHARE_SETTING, {
    useTitle: CT,
    useSubtitle: () => m.intl.string(A.default.UQ9RHJ),
    useValue: () => {
        let e = (0, Co.Tx)();
        return !g.JG.useSetting().includes(e);
    },
    setValue: (e) => {
        let t = Ca.xk.getState().selectedGuildId,
            i = (0, rN.Kk)();
        e ? i.delete(t) : i.add(t),
            g.JG.updateSetting([...i]),
            X.default.track(Q.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: Cm.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
                ingress: nv.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    },
    usePredicate: Cx,
});
var Cp = i(762183),
    Cf = i(445176),
    CN = i(972737);
let C_ = () => ((0, Cf.e)() ? m.intl.string(m.t.PMsfcH) : m.intl.string(m.t.RAQUSN)),
    CC = (e, t) => {
        X.default.track(Q.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t,
        });
    },
    CI = (0, o.zD)(d.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: C_,
        useSubtitle: () => {
            let e = (0, Co.Tx)(),
                t = (0, Co.q9)(),
                i = (0, Cf.e)();
            return e === Ca.YG
                ? i
                    ? m.intl.string(m.t.XXGmuB)
                    : m.intl.string(m.t.wbYDfT)
                : t
                  ? m.intl.string(m.t.V0ka0Q)
                  : i
                    ? m.intl.string(m.t.F9WY3f)
                    : m.intl.string(m.t.G7c3Xo);
        },
        useValue: () => {
            let e = (0, Co.Tx)(),
                t = g.$s.useSetting().includes(e),
                i = (0, Cp.K)();
            return e === Ca.YG ? !i : !t;
        },
        useDisabled: () => {
            let e = (0, _I.uM)();
            return (0, Co.Tx)() === Ca.YG && e;
        },
        setValue: (e) => {
            let t = Ca.xk.getState().selectedGuildId;
            if (t === Ca.YG) {
                var i;
                (i = !e),
                    (0, CN.O)({
                        header: m.intl.string(m.t["uUr+GR"]),
                        body: m.intl.string(m.t.hjGJBp),
                        confirmText: m.intl.string(m.t.gm1Vej),
                        cancelText: m.intl.string(m.t.p89ACt),
                        confirmButtonColor: aV.$n.Colors.BRAND,
                        onConfirm: () => {
                            g.n6.updateSetting(i), CC(i, !1);
                        },
                        onCancel: () => {
                            g.n6.updateSetting(i), g.$s.updateSetting(i ? K.A.getGuildIds() : []), CC(i, !0);
                        },
                    });
            } else {
                let i = (0, rN.Tb)();
                e ? i.delete(t) : i.add(t),
                    g.$s.updateSetting(Array.from(i)),
                    X.default.track(Q.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: Cm.m.DIRECT_MESSAGES_TOGGLE,
                        ingress: nv.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    });
            }
        },
    });
var Cb = i(152076);
let Cv = (e, t) => {
    X.default.track(Q.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
};
function Cj() {
    return m.intl.string(m.t["3o2ojh"]);
}
let Cy = (0, o.zD)(d.X.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: Cj,
        useSubtitle: () =>
            (0, Co.q9)()
                ? m.intl.format(m.t.WpnWLc, { helpdeskArticle: to.A.getArticleURL(Q.MVz.MESSAGE_REQUESTS) })
                : m.intl.format(m.t.wkm9a3, { helpdeskArticle: to.A.getArticleURL(Q.MVz.MESSAGE_REQUESTS) }),
        useValue: () => {
            let e = (0, Co.Tx)(),
                t = (0, Cp.K)(),
                i = g.$s.useSetting().includes(e),
                n = g.YX.useSetting(),
                s = g.Zr.useSetting().includes(e);
            return e === Ca.YG ? !t && !n : !i && !s;
        },
        useDisabled: () => {
            let e = (0, Co.Tx)(),
                t = (0, _I.uM)(),
                i = (0, Cp.K)(),
                n = g.$s.useSetting().includes(e);
            return e === Ca.YG ? i || t : n;
        },
        setValue: (e) => {
            let t = Ca.xk.getState().selectedGuildId;
            if (!e && (0, Cb.w)())
                return void fi.A.showAgeVerificationGetStartedModal({ entryPoint: fn.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === Ca.YG) {
                var i;
                (i = !e),
                    (0, CN.O)({
                        header: m.intl.string(m.t.yAfu1p),
                        body: m.intl.string(m.t.Ry2z74),
                        confirmText: m.intl.string(m.t.gm1Vej),
                        cancelText: m.intl.string(m.t.p89ACt),
                        confirmButtonColor: aV.$n.Colors.BRAND,
                        onConfirm: () => {
                            g.YX.updateSetting(i), Cv(i, !1);
                        },
                        onCancel: () => {
                            g.YX.updateSetting(i), g.Zr.updateSetting(i ? K.A.getGuildIds() : []), Cv(i, !0);
                        },
                    });
            } else {
                let i = (0, rN.xo)();
                e ? i.delete(t) : i.add(t),
                    g.Zr.updateSetting(Array.from(i)),
                    X.default.track(Q.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: Cm.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: nv.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    });
            }
        },
    }),
    CO = (0, o.E2)(d.X.CONTENT_AND_SOCIAL_PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            let e = [C_(), Cj()],
                t = CT();
            Cx() && e.push(t);
            let i = Ch();
            return CA() && e.push(i), e;
        },
        Component: function () {
            let { selectedGuildId: e, setSelectedGuildId: t } = (0, Ca.xk)(),
                i = (0, R.bG)([W.Ay], () => W.Ay.getFlattenedGuildIds()),
                n = (0, R.bG)([K.A], () => K.A.getGuilds()),
                s = i[0];
            N.useEffect(
                () =>
                    Cd.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, i) => {
                            let n = Ca.xk.getState().selectedGuildId;
                            "" === i && "" !== e && n === Ca.YG && null != s
                                ? t(s)
                                : "" === e && n !== Ca.YG && t(Ca.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [s, t],
            );
            let l = N.useMemo(() => {
                let e = [];
                return (
                    e.push({
                        ...Cg,
                        id: Cg.value,
                        label: Cg.label(),
                        leading: (0, f.jsx)("div", {
                            className: Cc.KP,
                            children: (0, f.jsx)(Cu.p, {
                                size: "sm",
                                color: "white",
                                "aria-hidden": !0,
                                className: Cc.cl,
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
                                leading: (0, f.jsx)(gh.Ay, {
                                    className: Cc.cl,
                                    guild: i,
                                    size: gh.Ay.Sizes.SMALLER,
                                    active: !0,
                                }),
                            });
                    }),
                    e
                );
            }, [i, n]);
            return (0, f.jsx)(iL.Z, {
                selectionMode: "single",
                onSelectionChange: (e) => {
                    t(e);
                },
                value: e,
                options: l,
            });
        },
    }),
    CR = (0, o.zZ)(d.X.CONTENT_AND_SOCIAL_PERMISSIONS_CATEGORY, {
        useTitle: () => m.intl.string(m.t.eYaT7L),
        useInlineNotice: function () {
            let e = _b(),
                t = __();
            if ((0, Co.Tx)() === Ca.YG) return e ?? t;
        },
        buildLayout: () => [CO, CI, Cy, CS, CE],
    }),
    CL = (0, o.dT)(d.X.CONTENT_AND_SOCIAL_MAIN_TAB, {
        getTitle: () => m.intl.string(m.t["/7xJCF"]),
        buildLayout: () => [_J, CR, _4, Cr],
    }),
    CD = (0, o.dT)(d.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB, {
        initialize: () => {
            ER.A.fetch();
        },
        getTitle: () => m.intl.string(m.t.YpCiMt),
        buildLayout: () => [_x],
    }),
    CP = (0, o.t_)(d.X.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => m.intl.string(m.t["+o1pDZ"]),
        buildLayout: () => [CL, CD],
    }),
    CG = (0, o.i4)(d.X.CONTENT_AND_SOCIAL_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t["+o1pDZ"]),
        icon: cB.i,
        buildLayout: () => [CP],
    });
var CU = i(254138);
function CM() {
    return (
        n6.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" }),
        n3.Bo.get({ url: Q.Rsh.USER_HARVEST, oldFormErrors: !0, rejectWithError: !1 })
            .then((e) => {
                n6.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body });
            })
            .catch((e) => {
                n6.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error: e });
            })
    );
}
function CV(e) {
    return (0, xN.$I)(e).then(
        (e) => (
            null != e && null != e.body && n6.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body }), e
        ),
    );
}
var Ck = i(157559),
    Cw = i(331887);
function CF() {
    let e = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()),
        t = (0, R.bG)([Cw.A], () => Cw.A.harvestType),
        [i, n] = N.useState(() => Date.now()),
        s = null == t ? i : new Date(t.created_at).getTime() + 2592e6,
        l = N.useRef(null);
    return (N.useEffect(() => {
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
function CB(e) {
    let { onConfirm: t, ...n } = e;
    (0, C.openModalLazy)(async () => {
        let { default: e } = await i.e("92063").then(i.bind(i, 970018));
        return (i) => (0, f.jsx)(e, { modalProps: i, onConfirm: t });
    }, n);
}
var Cz = i(160427);
let CY = (0, o.E2)(d.X.DATA_HARVEST_REQUEST_SETTING, {
        useSearchTerms: () => [m.intl.string(m.t.dmBSKo)],
        Component: function () {
            let e = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()),
                { currentHarvestType: t, awaitingInitialRequest: i } = (0, R.cf)([Cw.A], () => ({
                    currentHarvestType: Cw.A.harvestType,
                    awaitingInitialRequest: Cw.A.requestingHarvest,
                })),
                [n, s] = N.useState(!1);
            if (null == e) return null;
            let l =
                    !!(!e.verified || e.isStaff()) ||
                    (null != t && 2592e6 > Date.now() - new Date(t.created_at).getTime()) ||
                    i,
                r = null != t && ry()().diff(ry()(t.created_at), "days") < Q.n83,
                a = l && r,
                o = e.isStaff(),
                u = !e.verified;
            return (0, f.jsxs)(_o.h, {
                children: [
                    (0, f.jsx)(_o._, {
                        header: m.intl.string(m.t.XAHCgJ),
                        description: m.intl.format(m.t.P3kNfr, {
                            helpdeskArticle: to.A.getArticleURL(Q.MVz.GDPR_REQUEST_DATA),
                        }),
                    }),
                    a
                        ? (0, f.jsx)(ea.Z, {
                              className: Cz.N,
                              children: (0, f.jsx)(k.E, {
                                  variant: "text-md/normal",
                                  children: m.intl.format(m.t.RNDlV9, {
                                      date: ry()(t.created_at).add(Q.n83, "days").format("MMMM Do YYYY"),
                                  }),
                              }),
                          })
                        : o
                          ? (0, f.jsx)(ea.Z, {
                                className: Cz.N,
                                children: (0, f.jsx)(k.E, {
                                    variant: "text-md/normal",
                                    children: m.intl.string(m.t.ZPQLH2),
                                }),
                            })
                          : (0, f.jsxs)(f.Fragment, {
                                children: [
                                    u
                                        ? (0, f.jsx)(ea.Z, {
                                              className: Cz.N,
                                              children: (0, f.jsx)(k.E, {
                                                  variant: "text-md/normal",
                                                  children: m.intl.string(m.t.c1f88z),
                                              }),
                                          })
                                        : null,
                                    (0, f.jsx)("div", {
                                        className: Cz.x,
                                        children: (0, f.jsx)(eE.$, {
                                            variant: "primary",
                                            text: m.intl.string(m.t.dmBSKo),
                                            disabled: l,
                                            onClick: () => {
                                                CB({
                                                    onConfirm: (e) => {
                                                        s(!0),
                                                            CV(e)
                                                                .then(
                                                                    (e) => {
                                                                        null != e && null != e.body
                                                                            ? Ck.A.show({
                                                                                  title: m.intl.string(m.t.i2iul5),
                                                                                  body: m.intl.string(m.t["6Nmv4i"]),
                                                                              })
                                                                            : Ck.A.show({
                                                                                  title: m.intl.string(m.t.OjbtDm),
                                                                                  body: m.intl.string(m.t["0F5Jyt"]),
                                                                              });
                                                                    },
                                                                    (e) => {
                                                                        let t =
                                                                            e?.message ||
                                                                            e?.body?.message ||
                                                                            m.intl.string(m.t["0F5Jyt"]);
                                                                        Ck.A.show({
                                                                            title: m.intl.string(m.t.OjbtDm),
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
    CX = (0, o.zZ)(d.X.DATA_REQUEST_CATEGORY, {
        useTitle: () => m.intl.string(m.t.VjDjpb),
        initialize: () => {
            CM();
        },
        buildLayout: () => [CY],
    });
var CH = i(290595),
    CK = i(153488);
let CW = (0, o.zD)(d.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
        useTitle: () => m.intl.string(m.t.AGDDkH),
        useSubtitle: () => m.intl.string(m.t["wW9/zQ"]),
        useValue: () => g.Q$.useSetting(),
        setValue: (e) => Nw.eQ({ allowVoiceRecording: e }),
    }),
    CZ = (0, o.Tf)(d.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => m.intl.string(m.t.qfFFos),
        useSubtitle: function () {
            let e = CF();
            if (e.allowed) return m.intl.format(m.t.NRI6vt, { article: to.A.getArticleURL(Q.MVz.GDPR_REQUEST_DATA) });
            if ("staff" === e.reason) return m.intl.string(m.t.hIbRso);
            if ("not_verified" === e.reason)
                return m.intl.format(m.t.rBqJDq, {
                    settingsLink: (e, t) =>
                        (0, f.jsx)(
                            V.D,
                            {
                                tag: "a",
                                onClick: () => (0, ey.openUserSettings)(d.X.ACCOUNT_INFO_EMAIL_SETTING),
                                children: e,
                            },
                            t,
                        ),
                });
            if ("rate_limited" === e.reason) {
                let t = ry()(e.nextAllowed).format("MMMM Do YYYY");
                return m.intl.format(m.t["VLMG1+"], { date: t });
            }
        },
        initialize: () => {
            CM();
        },
        useDisabled: () => !CF().allowed,
        useLoading: () => (0, R.bG)([Cw.A], () => Cw.A.requestingHarvest),
        useVariant: () => "secondary",
        useLabel: () => m.intl.string(m.t.dmBSKo),
        onClick: function () {
            return new Promise((e) => {
                let t = !0;
                CB({
                    onConfirm: (i) => {
                        (t = !1),
                            CV(i)
                                .then(
                                    (e) => {
                                        null != e && null != e.body
                                            ? Ck.A.show({
                                                  title: m.intl.string(m.t.i2iul5),
                                                  body: m.intl.string(m.t["6Nmv4i"]),
                                              })
                                            : Ck.A.show({
                                                  title: m.intl.string(m.t.OjbtDm),
                                                  body: m.intl.string(m.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || m.intl.string(m.t["0F5Jyt"]);
                                        Ck.A.show({ title: m.intl.string(m.t.OjbtDm), body: t });
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
    Cq = (0, o.v_)(d.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => m.intl.string(m.t.D60Gfj),
        useSubtitle: () =>
            m.intl.format(m.t.R5N31P, {
                onClick: () =>
                    (0, ey.openUserSettings)(
                        (0, u.pC)("DataUsageDisclaimer") ? d.X.ACCOUNT_REMOVAL_CATEGORY : d.X.ACCOUNT_REMOVAL_SETTING,
                    ),
            }),
    }),
    CQ = (0, o.zD)(d.X.DATA_USAGE_PERSONALIZATION_SETTING, {
        useTitle: () => m.intl.string(m.t.MNKzyg),
        useSubtitle: () =>
            m.intl.format(m.t["eQL/Mr"], { helpdeskArticle: to.A.getArticleURL(Q.MVz.DATA_USED_FOR_RECOMMENDED) }),
        useValue: function () {
            return (0, R.bG)([CK.A], () => CK.A.hasConsented(Q.YAq.PERSONALIZATION));
        },
        setValue: function (e) {
            e
                ? (0, CH.U)([Q.YAq.PERSONALIZATION], []).catch(CN.i)
                : (0, CN.O)({
                      header: m.intl.string(m.t["9SNpzv"]),
                      confirmText: m.intl.string(m.t["9g5UGw"]),
                      cancelText: m.intl.string(m.t["+ZLPw9"]),
                      onConfirm: () => {
                          (0, CH.U)([], [Q.YAq.PERSONALIZATION]).catch(CN.i);
                      },
                      body: m.intl.string(m.t.gJvDDh),
                  });
        },
        useDisabled: _I.uM,
    }),
    CJ = (0, o.zD)(d.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => m.intl.string(m.t.CyLYKZ),
        useSubtitle: () =>
            m.intl.format(m.t["2QFDU/"], { helpdeskArticle: to.A.getArticleURL(Q.MVz.QUESTS_PRIVACY_CONTROLS) }),
        useValue: function () {
            return !g.vf.useSetting();
        },
        setValue: function (e) {
            g.vf.updateSetting(!e);
        },
        useDisabled: function () {
            let e = g.H1.useSetting(),
                t = (0, _I.uM)();
            return e || t;
        },
        useSearchTerms: () => [m.intl.string(m.t.CyLYKZ)],
    }),
    C$ = (0, o.zD)(d.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => m.intl.string(m.t.sJYh5t),
        useSubtitle: () =>
            m.intl.format(m.t.cf9mvV, { helpdeskArticle: to.A.getArticleURL(Q.MVz.QUESTS_PRIVACY_CONTROLS) }),
        useValue: function () {
            return !g.H1.useSetting();
        },
        setValue: function (e) {
            g.H1.updateSetting(!e);
        },
        useSearchTerms: () => [m.intl.string(m.t.VkS7Yd)],
        useDisabled: _I.uM,
    }),
    C0 = (0, o.AK)(d.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
        destinationKey: d.X.REGISTERED_GAMES_PANEL,
        useSubtitle: function () {
            let { gameHistory: e } = iC(),
                t = e
                    .values()
                    .filter((e) => null != e.id && null != e.name)
                    .map((e) => e.name)
                    .toArray();
            return m.intl.format(m.t.GaTAYM, { count: e.length, nameCount: t.length, game1: t[0], game2: t[1] });
        },
        useTrailingDecoration: () => ({ type: e_.wF.STACKED_ICONS, useIcons: C2 }),
        usePredicate: () =>
            (0, R.bG)([eJ.Ay], () => eJ.Ay.getGamesSeen(!1).some((e) => !(0, tN.n1)(e))) && (0, n9.xl)(),
    }),
    C1 = (0, o.gN)(d.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [C0] });
function C2() {
    let { gameHistory: e } = iC(),
        [t, i] = N.useMemo(
            () =>
                e
                    .values()
                    .map((e) => e.id)
                    .filter((e) => null != e)
                    .take(2)
                    .toArray(),
            [e],
        );
    N.useEffect(() => {
        AT.Ay.fetchApplications([t, i].filter(t4.Vq));
    }, [t, i]);
    let [n, s] = (0, R.yK)([eZ.A], () => [t, i].map(eZ.A.getApplication), [t, i]);
    return null == t
        ? null
        : {
              frontIcon: { icon: (0, f.jsx)(e8.A, { game: n, size: e8.M.MEDIUM_LARGE }), shape: e_.NF.ROUNDED },
              backIcon:
                  null != i ? { icon: (0, f.jsx)(e8.A, { game: s, size: e8.M.MEDIUM }), shape: e_.NF.ROUNDED } : null,
          };
}
let C3 = (0, o.zD)(d.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => m.intl.string(m.t.XuADY2),
        useSubtitle: () =>
            m.intl.format(m.t["igTSG/"], { helpdeskArticle: to.A.getArticleURL(Q.MVz.DATA_PRIVACY_CONTROLS) }),
        useValue: function () {
            return (0, R.bG)([CK.A], () => CK.A.hasConsented(Q.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, CH.U)([Q.YAq.USAGE_STATISTICS], []).catch(CN.i)
                : (0, CN.O)({
                      header: m.intl.string(m.t.OdPCbN),
                      body: m.intl.string(m.t.MGWabA),
                      confirmText: m.intl.string(m.t["D3+rU4"]),
                      cancelText: m.intl.string(m.t.kYpG0u),
                      onConfirm: () => (0, CH.U)([], [Q.YAq.USAGE_STATISTICS]).catch(CN.i),
                  });
        },
        useSearchTerms: () => [m.intl.string(m.t.XuADY2)],
        useDisabled: _I.uM,
    }),
    C6 = (0, o.zZ)(d.X.DATA_USAGE_CATEGORY, {
        useTitle: () => ((0, u.ri)("DataUsageCategory") ? m.intl.string(m.t.QDAriI) : m.intl.string(m.t.bvw42E)),
        useInlineNotice: _b,
        initialize: () => {
            CK.A.fetchedConsents || (0, CH.Q)();
        },
        buildLayout: () =>
            (0, u.SB)("DataUsageCategory") ? [Cq, C3, CQ, C$, CJ, CW, CZ, C1] : [C3, C$, CJ, CQ, CW, Cq],
    });
function C4() {
    let e = g.JG.useSetting();
    return (0, R.yK)([W.Ay, K.A], () => {
        let t = new Set(e);
        return W.Ay.getFlattenedGuildIds().filter((e) => null != K.A.getGuild(e) && !t.has(e));
    }, [e]);
}
let C7 = {
        type: e_.wF.STACKED_ICONS,
        useIcons: function () {
            let e = C4(),
                t = (0, R.yK)(
                    [K.A],
                    () =>
                        e
                            .slice(0, 2)
                            .map((e) => K.A.getGuild(e))
                            .filter((e) => null != e),
                    [e],
                );
            return 0 === t.length
                ? null
                : t.length >= 2
                  ? {
                        frontIcon: { icon: (0, f.jsx)(H.$, { guild: t[0], size: 48 }), shape: e_.NF.SQUIRCLE },
                        backIcon: { icon: (0, f.jsx)(H.$, { guild: t[1], size: 48 }), shape: e_.NF.SQUIRCLE },
                    }
                  : { frontIcon: { icon: (0, f.jsx)(H.$, { guild: t[0], size: 48 }), shape: e_.NF.SQUIRCLE } };
        },
    },
    C5 = (0, o.AK)(d.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = C4();
            if (0 === e.length) return m.intl.format(m.t.QJIJ5p, {});
            let t = K.A.getGuild(e[0]),
                i = t?.name ?? "",
                n = e.length - 1;
            return 0 === n
                ? m.intl.format(m.t["T+8J4A"], { guildName: i })
                : m.intl.format(m.t["3JyODQ"], { guildName: i, count: n });
        },
        useTrailingDecoration: function () {
            return C7;
        },
        destinationKey: d.X.ACTIVITY_PRIVACY_PANEL,
    }),
    C8 = (0, o.gN)(d.X.PROFILE_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [C5] }),
    C9 = (0, o.Qx)(d.X.PROFILE_PRIVACY_SETTING, {
        useTitle: () => m.intl.string(m.t.Qnf32C),
        useOptions: () => [
            { name: m.intl.string(m.t.Boxc8R), desc: m.intl.string(m.t["nLj+nc"]), value: _.KP.FRIENDS_AND_ALL_GUILDS },
            { name: m.intl.string(m.t.YOIKBt), desc: m.intl.string(m.t.y0JZ4s), value: _.KP.FRIENDS_AND_SMALL_GUILDS },
            { name: m.intl.string(m.t.u0nlJv), desc: m.intl.string(m.t["4jnKHu"]), value: _.KP.FRIENDS_ONLY },
        ],
        useValue: g.KP.useSetting,
        setValue: function (e) {
            let t = g.KP.getSetting();
            if ((g.KP.updateSetting(e), !(0, T.W1)("ProfilePrivacySetting"))) return;
            let n = (0, I.gS)(t, e);
            null != n &&
                (0, C.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        i.e("92164"),
                        i.e("36281"),
                        i.e("62041"),
                        i.e("63786"),
                    ]).then(i.bind(i, 413201));
                    return (t) =>
                        (0, f.jsx)(e, {
                            ...t,
                            direction: n.direction,
                            affectedGuildIds: n.affectedGuildIds,
                            settingName: n.settingName,
                            mappedActivityValue: n.mappedActivityValue,
                        });
                });
        },
        useSearchTerms: () => [m.intl.string(m.t.Qnf32C)],
    }),
    Ie = (0, o.zZ)(d.X.PROFILE_PRIVACY_CATEGORY, {
        usePredicate: () => (0, T.lX)("ProfilePrivacyCategory"),
        useTitle: () => m.intl.string(m.t.ul884f),
        useSubtitle: () => m.intl.string(m.t.J0SFL2),
        buildLayout: () => [C9, C8],
    });
var It = i(814278),
    Ii = i(936388),
    In = i(714763);
let Is = (0, o.zD)(d.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => m.intl.string(m.t["opi/XK"]),
    useSubtitle: () => m.intl.format(m.t["/T+ZlP"], { helpArticle: (0, It.Lu)() }),
    useValue: function () {
        return (0, R.bG)([In.A], () => In.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        Ii.A.updatePersistentCodesEnabled(e);
    },
});
var Il = i(787392);
function Ir() {
    return (0, R.yK)([Il.A], () => Il.A.getUserIds());
}
var Ia = i(803306),
    Io = i(966327),
    Iu = i(146003);
function Id(e) {
    let { userId: t, count: i } = e,
        { analyticsLocations: n } = (0, nU.Ay)(),
        s = (0, R.bG)([t6.default], () => t6.default.getUser(t)),
        l = Tj.Ay.getFormattedName(s),
        r = N.useCallback(() => {
            (0, It.kj)(t);
        }, [t]),
        a = N.useCallback(() => (0, xv.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: n }), [t, n]);
    return (
        N.useEffect(() => {
            (0, Ia.wz)(t);
        }, [t]),
        (0, f.jsxs)("div", {
            className: Iu.uW,
            children: [
                null != s && (0, f.jsx)(Io.A, { className: Iu.my, user: s, size: iK._3.SIZE_40 }),
                (0, f.jsxs)("div", {
                    className: Iu.Qq,
                    children: [
                        (0, f.jsx)(V.D, {
                            className: Iu.Xh,
                            onClick: a,
                            children: (0, f.jsx)(k.E, {
                                variant: "text-md/semibold",
                                color: "interactive-text-active",
                                children: l,
                            }),
                        }),
                        (0, f.jsx)(k.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: m.intl.format(m.t["/MBjYF"], { count: i }),
                        }),
                    ],
                }),
                (0, f.jsx)(V.D, { onClick: r, className: Iu.Qz, children: (0, f.jsx)(lf.u, { size: "xs" }) }),
            ],
        })
    );
}
function Ic(e) {
    let { className: t, userId: i, verification: n, index: s } = e,
        l = (0, It.tC)(n.timestamp),
        r = N.useCallback(() => {
            (0, It.W0)(i, n.verifiedKey);
        }, [n.verifiedKey, i]);
    return (0, f.jsxs)("div", {
        className: t,
        children: [
            (0, f.jsxs)("div", {
                className: Iu.Qq,
                children: [
                    (0, f.jsx)(k.E, {
                        variant: "text-sm/semibold",
                        color: "interactive-text-active",
                        children: m.intl.format(m.t.N4qBBO, { index: s + 1 }),
                    }),
                    (0, f.jsx)(k.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                ],
            }),
            (0, f.jsx)(V.D, {
                className: Iu.Kk,
                onClick: r,
                children: (0, f.jsx)(c0.P, { size: "md", color: F.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function Ig(e) {
    let { userId: t } = e,
        i = (0, R.yK)([Il.A], () =>
            eL()(Il.A.getUserVerifiedKeys(t))
                .entries()
                .map((e) => {
                    let [t, i] = e;
                    return { verifiedKey: t, timestamp: i };
                })
                .sortBy((e) => -1 * e.timestamp)
                .value(),
        );
    return (0, f.jsxs)(f.Fragment, {
        children: [
            (0, f.jsx)(Id, { userId: t, count: i.length }),
            i.map((e, n) =>
                (0, f.jsxs)(
                    N.Fragment,
                    {
                        children: [
                            (0, f.jsx)(Ic, { className: Iu.nM, userId: t, index: n, verification: e }),
                            n !== i.length - 1 && (0, f.jsx)("div", { className: Iu.yF }),
                        ],
                    },
                    `${n}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var Im = i(623161);
let IA = (0, o.E2)(d.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [m.intl.string(m.t["5b3FNI"])],
        usePredicate: function () {
            let e = Ir();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = Ir();
            return (0, f.jsxs)(_o.h, {
                children: [
                    (0, f.jsx)(_o._, {
                        header: m.intl.string(m.t["5b3FNI"]),
                        description: m.intl.format(m.t.jrTSWU, { helpArticle: (0, It.dc)() }),
                    }),
                    e.map((e) => (0, f.jsx)("div", { className: Im.A, children: (0, f.jsx)(Ig, { userId: e }) }, e)),
                ],
            });
        },
    }),
    Ih = (0, o.zZ)(d.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => ((0, u.ri)("VoiceSecurityCategory") ? m.intl.string(m.t.bTwjaz) : m.intl.string(m.t.xVk85F)),
        useInlineNotice: function () {
            let e = (0, u.ri)("VoiceSecurityCategory");
            return N.useMemo(
                () =>
                    e
                        ? null
                        : {
                              type: e_.lT.INLINE_NOTICE,
                              noticeType: "info",
                              useText: () => m.intl.format(m.t["/6sFWa"], { helpArticle: (0, It.aW)() }),
                          },
                [e],
            );
        },
        usePredicate: () => (0, ej.isDesktop)(),
        buildLayout: () => [Is, IA],
    }),
    IE = (0, o.t_)(d.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => m.intl.string(m.t.OAuOHD),
        buildLayout: () => ((0, u.SB)("DataAndPrivacyPanel") ? [C6, Ie, Ih] : [C6, Ie, CX, Ih]),
    }),
    Ix = (0, o.i4)(d.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t.OAuOHD),
        icon: CU.m,
        buildLayout: () => [IE],
    });
var IT = i(782603),
    IS = i(899847),
    Ip = i(695515),
    If = i(936926);
let IN = (0, o.Hn)(d.X.MOBILE_NOTIFICATION_DELAY, {
        useTitle: () => m.intl.string(m.t["8rHeOr"]),
        useSubtitle: () => m.intl.string(m.t["eJE6+J"]),
        useValue: g.cU.useSetting,
        setValue: g.cU.updateSetting,
        useOptions: () =>
            eR
                .range(1, 11)
                .map((e) => ({
                    id: e.toString(),
                    value: 60 * e,
                    label: m.intl.formatToPlainString(m.t.iXLF9W, { minutes: e }),
                })),
    }),
    I_ = (0, o.zD)(d.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => m.intl.string(m.t["btbS+Z"]),
        useSubtitle: () =>
            m.intl.format(m.t.Q5crhR, { onClick: () => (0, ey.openUserSettings)(d.X.TTS_PLAYBACK_RATE) }),
        useValue: g.on.useSetting,
        setValue: g.on.updateSetting,
    }),
    IC = (0, o.Qx)(d.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => m.intl.string(m.t.JZxxGx),
        useSubtitle: () => m.intl.string(m.t.HDLtJl),
        useValue: () => (0, R.bG)([uc.A], () => uc.A.getTTSType()),
        setValue: (e) => uE.default.setTTSType(e),
        useOptions: () => [
            { name: m.intl.string(m.t.B1AGeJ), value: Q.aVn.ALL_CHANNELS },
            { name: m.intl.string(m.t.uzZg9e), value: Q.aVn.SELECTED_CHANNEL },
            { name: m.intl.string(m.t.DYO5Oi), value: Q.aVn.NEVER },
        ],
        usePredicate: () => i5.$j,
    }),
    II = d.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    Ib = (0, o.bd)(II, {
        useTitle: (e) => (e ? m.intl.string(m.t.RyimDk) : m.intl.string(m.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return oa(II, {
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
        buildLayout: () => [IN, I_, IC],
    }),
    Iv = (0, o.zZ)(d.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => m.intl.string(m.t["31DySj"]),
        buildLayout: () => [Ib],
    }),
    Ij = (0, o.zD)(d.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => m.intl.string(m.t.VH8AIJ),
        useSubtitle: () => m.intl.string(m.t["9K4qwX"]),
        useValue: () => (0, R.bG)([uc.A], () => !uc.A.getDisableUnreadBadge()),
        setValue: (e) => uE.default.setDisableUnreadBadge(!e),
    }),
    Iy = (0, o.zZ)(d.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => m.intl.string(m.t.l6w3Vj),
        buildLayout: () => [Ij],
    });
var IO = i(100406),
    IR = i(878460),
    IL = i(431144);
let ID = IL.px.map((e) =>
        (0, o.zD)(`${d.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                ((e) => {
                    let { categories: t } = (0, R.cf)([IR.A], () => IR.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, IO.CA)(e.category, t),
        }),
    ),
    IP = (0, o.Tf)(d.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => m.intl.string(m.t.Ra9Pwk),
        useSubtitle: () => m.intl.string(m.t.iYjQ8X),
        useLabel: () => m.intl.string(m.t.KT1pBA),
        useDisabled: () => {
            let { categories: e } = (0, R.cf)([IR.A], () => IR.A.getEmailSettings());
            return IL.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, IO.NI)(),
        useVariant: () => "critical-secondary",
    }),
    IG = (0, o.zZ)(d.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => m.intl.string(m.t["w/qqKK"]),
        initialize: function () {
            let { initialized: e } = IR.A.getEmailSettings();
            e || (0, IO.cR)();
        },
        buildLayout: () => [...ID, IP],
    }),
    IU = (0, o.zD)(d.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => m.intl.string(m.t["/0WCll"]),
        useSubtitle: () => m.intl.string(m.t.wF9ih3),
        useValue: () => (0, R.bG)([uc.A], () => uc.A.getDesktopType()) !== Q.nRU.NEVER,
        setValue: (e) => uE.default.setDesktopType(e ? Q.nRU.ALL : Q.nRU.NEVER),
    });
var IM = i(832712),
    IV = i(543465),
    Ik = i(406535),
    Iw = i(790782);
let IF = (0, o.zD)(d.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => m.intl.string(m.t["k6m/si"]),
    useSubtitle: () => m.intl.string(m.t.LGynPs),
    useValue: () => (0, R.bG)([IV.Ay], () => IV.Ay.useNewNotifications),
    setValue: function (e) {
        IM.A.setAccountFlag(Ik.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (hX.w.set("turnedOffNewNotifications", !0),
                X.default.track(Q.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: K.A.getGuildsArray().filter(
                        (e) => IV.Ay.resolveGuildUnreadSetting(e) === Iw.e.ONLY_MENTIONS,
                    ).length,
                }));
    },
    usePredicate: () =>
        (0, R.bG)(
            [t6.default, IV.Ay],
            () =>
                t6.default.getCurrentUser()?.isStaff() ||
                t6.default.getCurrentUser()?.isStaffPersonal() ||
                IV.Ay.useNewNotifications,
        ),
});
var IB = i(534654);
let Iz = (0, o.zD)(d.X.SCREEN_DOWNTIME_REMINDER, {
    useTitle: () => m.intl.string(m.t.z9h8Ym),
    useSubtitle: () => m.intl.string(m.t.TummoQ),
    useValue: () => (0, R.bG)([uc.A], () => uc.A.screenDowntimeReminder),
    setValue: (e) => uE.default.setScreenDowntimeReminder(e),
    usePredicate: () => {
        let e = (0, If.Vh)({ location: "ScreenDowntimeReminderSetting" }),
            t = (0, IB.A)();
        return e && t;
    },
});
var IY = i(70730);
let IX = (0, o.zD)(d.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => m.intl.string(m.t.NjOMvh),
        usePersistentBadge: () => ({ badgeType: e_.Xi.BETA }),
        useValue: g.oz.useSetting,
        setValue: function (e) {
            g.oz.updateSetting(e),
                X.default.track(Q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ik.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                });
        },
        useSearchTerms: () => [m.intl.string(m.t.hi4dSk)],
        usePredicate: () => {
            let { enabled: e, showDmPrompts: t } = IY.u.getConfig({ location: "FriendAnniversaryNotifications" });
            return e && t;
        },
    }),
    IH = (0, x.mj)({
        kind: "user",
        name: "2026-03-friend-is-online-v3",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    IK = (0, o.zD)(d.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => m.intl.string(m.t.sQQgFj),
        useValue: g.NR.useSetting,
        setValue: function (e) {
            g.NR.updateSetting(e),
                X.default.track(Q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ik.Y.ACCOUNT,
                    friend_online_notifications: e,
                });
        },
        usePredicate: () => IH.useConfig({ location: "FriendOnlineNotifications" }).showSettingsToggle,
    }),
    IW = (0, x.mj)({
        name: "2026-03-game-update-notification",
        kind: "user",
        defaultConfig: { showToggle: !1 },
        variations: { 0: { showToggle: !1 }, 1: { showToggle: !0 } },
    });
var IZ = i(275007);
let Iq = (0, o.zD)(d.X.GAME_UPDATE_NOTIFICATIONS, {
    useTitle: () => m.intl.string(IZ.default["ZZIP+o"]),
    useValue: g.JV.useSetting,
    setValue: function (e) {
        g.JV.updateSetting(e),
            X.default.track(Q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: Ik.Y.ACCOUNT,
                game_update_notifications: e,
            });
    },
    usePredicate: () => IW.useConfig({ location: "SettingsRendererConfig" }).showToggle,
});
var IQ = i(571524);
let IJ = (0, o.zD)(d.X.GDM_ALL_REACTION_NOTIFICATIONS, {
        useTitle: () => m.intl.string(m.t.nvkXtr),
        useValue: g.c3.useSetting,
        setValue: function (e) {
            g.c3.updateSetting(e),
                X.default.track(Q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ik.Y.ACCOUNT,
                    gdm_all_reaction_notifications: e,
                });
        },
        usePredicate: function () {
            return (0, IQ.h)("GdmAllReactionNotification").showSettingsToggle;
        },
    }),
    I$ = (0, o.zD)(d.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => m.intl.string(m.t.FSNIvs),
        useValue: g.Yh.useSetting,
        setValue: function (e) {
            g.Yh.updateSetting(e),
                X.default.track(Q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ik.Y.ACCOUNT,
                    go_live_notifications: e,
                });
        },
    }),
    I0 = (0, x.mj)({
        kind: "user",
        name: "2026-01-profile-updates-notification",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 0: { showSettingsToggle: !1 }, 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    I1 = (0, o.zD)(d.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => m.intl.string(m.t.xBLMhQ),
        useValue: g.T3.useSetting,
        setValue: function (e) {
            g.T3.updateSetting(e),
                X.default.track(Q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ik.Y.ACCOUNT,
                    profile_updates_notifications: e,
                });
        },
        usePredicate: () => I0.useConfig({ location: "user_settings.ProfileUpdatesNotifications" }).showSettingsToggle,
    });
var I2 = i(815807);
let I3 = (0, o.Hn)(d.X.REACTION_NOTIFICATIONS, {
        useTitle: () => m.intl.string(m.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: m.intl.string(m.t["9x/RtT"]), value: _.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: m.intl.string(m.t.fJAbQd), value: _.Tz.ONLY_DMS },
            { id: "disabled", label: m.intl.string(m.t["xu+UDU"]), value: _.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: g.Zp.useSetting,
        setValue: (e) => (0, I2.n4)(e, g.Zp.getSetting()),
    }),
    I6 = (0, o.zD)(d.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => m.intl.string(m.t["k51K1+"]),
        useValue: g.Qr.useSetting,
        setValue: function (e) {
            g.Qr.updateSetting(e),
                X.default.track(Q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ik.Y.ACCOUNT,
                    server_trending_notifications: e,
                });
        },
        usePredicate: () => !1,
    }),
    I4 = (0, x.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    I7 = (0, o.zD)(d.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => m.intl.string(m.t.G8NPz6),
        useValue: g.zS.useSetting,
        setValue: function (e) {
            g.zS.updateSetting(e),
                X.default.track(Q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ik.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                });
        },
        usePredicate: () => I4.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    I5 = (0, o.FW)(d.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => m.intl.string(m.t.FEVRDV),
        buildLayout: () => [I$, IX, IK, I6, I7, Iq, I1, I3, IJ],
    }),
    I8 = (0, o.zD)(d.X.TASK_BAR_FLASHING, {
        useTitle: () => m.intl.string(m.t.xSmFQG),
        useSubtitle: () => m.intl.string(m.t.bd4j4x),
        useValue: () => (0, R.bG)([uc.A], () => uc.A.taskbarFlash),
        setValue: (e) => uE.default.setTaskbarFlash(e),
        usePredicate: () => (0, n9.uF)(),
    }),
    I9 = (0, o.zZ)(d.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => m.intl.string(m.t["/dp6yY"]),
        buildLayout: () => [IU, I8, I5, IF, Iz],
    });
var be = i(965957),
    bt = i(312671),
    bi = i(235079);
let bn = (0, o.zD)(d.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = ug.A.useHolidaySoundpack();
        return null == e ? "" : m.intl.format(m.t["E/OyBr"], { soundpack: m.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, R.bG)([bt.A], () => bt.A.getSoundpack()),
            t = ug.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = ug.A.getHolidaySoundpack();
        tO()(null != t, "predicate should fail if no soundpack is available"), (0, be.p)(e ? t : bi.i.CLASSIC);
    },
    usePredicate: ug.A.useIsEligible,
});
var bs = i(970931);
let bl = {
        useTitle: () => m.intl.string(m.t.jD1qzM),
        sound: "message1",
        useDisabled: bs.kB,
        useDisabledMessage: () => ((0, bs.kB)() ? m.intl.string(m.t.cIRG0s) : void 0),
    },
    br = { useTitle: () => m.intl.string(m.t.XBrJT6), sound: "call_ringing" },
    ba = (0, o.zD)(d.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => m.intl.string(m.t.TzjwV9),
        useSubtitle: () => m.intl.format(m.t.OOiGCM, { onClick: () => uS("message3") }),
        useValue: () =>
            (0, R.bG)([uc.A], () => uc.A.getNotifyMessagesInSelectedChannel() && !uc.A.getDisableAllSounds()),
        setValue: (e) => uE.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, R.bG)([uc.A], () => uc.A.getDisableAllSounds()),
    }),
    bo = (0, o.zD)(d.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => m.intl.string(m.t["2ZhCOd"]),
        useSubtitle: () => m.intl.string(m.t.EAKdPr),
        useValue: () => (0, R.bG)([uc.A], () => uc.A.getDisableAllSounds()),
        setValue: (e) => uE.default.toggleDisableAllSounds(e),
    }),
    bu = (0, o.D1)(d.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                uT();
            };
        },
        buildLayout: () => [up(bl), ba, up(br), bo],
    }),
    bd = (0, o.AK)(d.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => m.intl.string(m.t["MMy+lm"]),
        useSearchTerms: () => [m.intl.string(m.t["MMy+lm"])],
        destinationKey: d.X.SOUNDS_CATEGORY,
    }),
    bc = (0, o.gN)(d.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [bd] }),
    bg = (0, o.zZ)(d.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => m.intl.string(m.t.LweOYy),
        buildLayout: () => [bn, bu, bc],
    }),
    bm = (0, o.t_)(d.X.NOTIFICATIONS_PANEL, {
        useTitle: () => m.intl.string(m.t.HcoRu0),
        initialize: () => {
            !(0, If.Eq)({ location: "NotificationsPanel" }) ||
                null != Ip.A.getAgeGroup() ||
                Ip.A.isLoading() ||
                (Ip.A.canRefetch() && IS.Ay.initialPageLoad());
        },
        buildLayout: () => [I9, bg, Iy, IG, Iv],
    }),
    bA = (0, o.i4)(d.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t.HcoRu0),
        icon: IT.X,
        buildLayout: () => [bm],
    }),
    bh = (0, o.WI)(d.X.USER_SECTION, {
        buildLayout: () => {
            let e = (0, u.pC)("UserSection"),
                t = (0, u.Bv)("UserSection");
            return [NG, CG, Ix, ...(e ? [] : [Nb]), ...(t ? [] : [EU]), ...(e ? [] : [p$]), ...(t ? [] : [xp]), bA, _l];
        },
    });
var bE = i(387758),
    bx = i(271866),
    bT = i(147964),
    bS = i(868511);
let bp = (0, o.zD)(d.X.APPLICATION_TEST_MODE, {
        useTitle: () => m.intl.string(m.t.erOqlh),
        useSubtitle: () => m.intl.string(m.t["52hMnD"]),
        usePredicate: g.Q_.useSetting,
        useValue: () => (0, R.bG)([bT.A], () => null != bT.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, C.openModal)((e) => (0, f.jsx)(bS.A, { ...e })) : bx.cL();
        },
    }),
    bf = (0, o.zD)(d.X.DEVELOPER_MODE, {
        useTitle: () => m.intl.string(m.t.ObIb1Q),
        useSubtitle: () => m.intl.format(m.t["CY6q/Q"], { apiDocsUrl: Q.X7G.API_DOCS }),
        useValue: g.Q_.useSetting,
        setValue: g.Q_.updateSetting,
        usePredicate: () => cA.p5,
    }),
    bN = (0, o.zZ)(d.X.DEVELOPER_CATEGORY, { buildLayout: () => [bf, bp] }),
    b_ = (0, o.t_)(d.X.DEVELOPER_PANEL, { useTitle: () => m.intl.string(m.t["0BRxRp"]), buildLayout: () => [bN] }),
    bC = (0, o.i4)(d.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: bE.G,
        useTitle: () => m.intl.string(m.t["0BRxRp"]),
        buildLayout: () => [b_],
    });
var bI = i(70688),
    bb = i(830215);
let bv = (0, o.i4)(d.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => m.intl.string(m.t["2jxGer"]),
        icon: bI.o,
        onClick: () => {
            (0, se.A)({
                title: m.intl.string(m.t["2jxGer"]),
                subtitle: m.intl.string(m.t.SUnWBB),
                confirmText: m.intl.string(m.t["2jxGer"]),
                onConfirm: () => {
                    bb.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    bj = (0, o.WI)(d.X.UTILITY_SECTION, { buildLayout: () => [bC, bv] }),
    by = (0, o.Hr)({
        buildLayout: function () {
            return [SQ, bh, hg, uJ, (0, u.Bv)("UserSettingsRoot_buildLayout") ? xf : iz, Ey, bj];
        },
        analyticsKey: "user_settings",
    });
