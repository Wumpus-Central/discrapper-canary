i.d(t, { D: () => C$ });
var n,
    l,
    s,
    r,
    a,
    o = i(419954),
    u = i(780964),
    d = i(682348),
    c = i(253932),
    g = i(985018),
    m = i(395277);
let A = (0, o.zD)(u.X.ACTIVITY_PRIVACY_SETTING, {
        useTitle: () => g.intl.string(m.default.WhdCGP),
        useSubtitle: () => g.intl.string(m.default.UQ9RHJ),
        useValue: c.tz.useSetting,
        setValue: c.tz.updateSetting,
    }),
    h = (0, o.zZ)(u.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () => g.intl.string(g.t["6x5uWQ"]),
        useSearchTerms: () => [g.intl.string(g.t["8ka8li"])],
        buildLayout: () => [A],
    });
var E = i(945810),
    T = i(21973);
let S = (0, E.mj)({
        name: "2026-02-activity-privacy-matching",
        kind: "user",
        defaultConfig: { copyChanges: !1, upsell: !1 },
        variations: {
            0: { copyChanges: !1, upsell: !1 },
            1: { copyChanges: !0, upsell: !1 },
            2: { copyChanges: !0, upsell: !0 },
        },
    }),
    x = (e) => {
        let t = (0, T.lX)(e),
            i = S.useConfig({ location: e });
        return t || i.copyChanges;
    };
var p = i(627968),
    N = i(64700),
    _ = i(873298),
    f = i(192308),
    b = i(365258);
let C = (0, o.Qx)(u.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
        useTitle: () =>
            x("GuildActivitySharingDefaultSetting") ? g.intl.string(g.t.vpgck1) : g.intl.string(m.default["/LHVbt"]),
        useOptions: function () {
            let e = x("GuildActivitySharingDefaultSetting");
            return N.useMemo(
                () =>
                    e
                        ? [
                              {
                                  value: _.Qd.ACTIVITY_STATUS_OFF,
                                  name: g.intl.string(g.t.FzgQna),
                                  desc: g.intl.string(g.t.SQxoyc),
                              },
                              {
                                  value: _.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                                  name: g.intl.string(g.t["1hvuGH"]),
                                  desc: g.intl.string(g.t.odUCPE),
                              },
                              { value: _.Qd.ACTIVITY_STATUS_ON, name: g.intl.string(g.t.fQc5la) },
                          ]
                        : [
                              { value: _.Qd.ACTIVITY_STATUS_ON, name: g.intl.string(g.t.UzGMH9) },
                              {
                                  value: _.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                                  name: g.intl.string(m.default["/sAeRY"]),
                              },
                              { value: _.Qd.ACTIVITY_STATUS_OFF, name: g.intl.string(m.default.m3oL7Q) },
                          ],
                [e],
            );
        },
        useValue: c._Z.useSetting,
        setValue: function (e) {
            let t,
                n = c._Z.getSetting();
            if (
                (c._Z.updateSetting(e),
                (t = "GuildActivitySharingDefaultSetting"),
                !(0, T.W1)(t) && !S.getConfig({ location: t }).upsell)
            )
                return;
            let l = (0, b.g8)(n, e);
            if (null == l) return;
            let s = (0, b.Xc)(e);
            (0, f.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    i.e("92164"),
                    i.e("50554"),
                    i.e("90213"),
                    i.e("62041"),
                    i.e("41996"),
                ]).then(i.bind(i, 32167));
                return (t) =>
                    (0, p.jsx)(e, {
                        ...t,
                        direction: l.direction,
                        affectedGuildIds: l.affectedGuildIds,
                        settingName: s,
                    });
            });
        },
    }),
    I = (0, o.zZ)(u.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () =>
            x("GuildActivitySharingCategory") ? g.intl.string(g.t.VDcvrR) : g.intl.string(m.default["1PougL"]),
        useSubtitle: () =>
            x("GuildActivitySharingCategory") ? g.intl.string(g.t["/Go08F"]) : g.intl.string(m.default.OO17Lg),
        buildLayout: () => [C],
    }),
    v = (0, o.AK)(u.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => g.intl.string(g.t.J0SFL2),
        destinationKey: u.X.DATA_AND_PRIVACY_PANEL,
    }),
    j = (0, o.gN)(u.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, T.lX)("ActivityPrivacyRelatedSettings"),
        buildLayout: () => [v],
    });
var y = i(683071),
    O = i(17928),
    R = i(331322),
    L = i(243721),
    D = i(892547),
    G = i(922016),
    P = i(550079),
    U = i(477782),
    V = i(939249),
    M = i(834730),
    k = i(847374),
    w = i(661531),
    B = i(123292),
    F = i(140735),
    z = i(498642),
    X = i(954571),
    Y = i(743790),
    H = i(71393),
    K = i(711014),
    W =
        (((n = {}).SERVER_ORDER = "server-order"),
        (n.RECENTLY_JOINED = "recently-joined"),
        (n.ACTIVITY_SHARING_ON = "activity-sharing-on"),
        (n.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
        n);
let Z = {
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
var Q = i(652215),
    q = i(842449);
function J(e) {
    let { guild: t, isActivityRestricted: i, onToggleActivityRestrictedGuild: n } = e,
        l = (0, O.bG)([z.A], () => z.A.getMemberCount(t.id));
    return (0, p.jsxs)(R.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, p.jsx)("div", { className: q.FO, children: (0, p.jsx)(Y.K, { guild: t, size: 48 }) }),
            (0, p.jsx)("div", {
                className: q.QH,
                children: (0, p.jsx)(L.d, {
                    label: t.name,
                    description: g.intl.format(g.t.zRl6XR, { count: l ?? 0 }),
                    checked: !i,
                    onChange: (e) => n({ checked: e, guildId: t.id }),
                }),
            }),
        ],
    });
}
let $ = function (e) {
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
            numActivityRestrictedGuilds: A,
            numTotalGuilds: h,
        } = (function () {
            let [e, t] = (0, N.useState)(""),
                [i, n] = (0, N.useState)("server-order"),
                l = (0, O.bG)([K.Ay], () => K.Ay.getFlattenedGuildIds()),
                s = (0, O.bG)([H.A], () => H.A.getGuilds()),
                r = l.map((e) => s[e]),
                a = c.Pw.useSetting(),
                [o, u] = (0, N.useState)(a);
            (0, N.useEffect)(() => {
                u(a);
            }, [a]);
            let d = async (e) => {
                    u(e);
                    try {
                        await c.Pw.updateSetting(e);
                    } catch (e) {
                        u(a);
                    }
                },
                g = 0 !== o.length,
                [m, A] = (0, N.useState)(() => Z[i](r, a)),
                h = m.map((e) => s[e.id]).filter(Boolean);
            return {
                guilds: "" === e ? h : h.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
                sortOrder: i,
                searchQuery: e,
                setSortOrder: (e) => {
                    A(Z[e](r, a)), n(e);
                },
                setSearchQuery: t,
                onToggleActivityRestrictedGuild: (e) => {
                    let { checked: t, guildId: i } = e,
                        n = new Set(o);
                    t ? n.delete(i) : n.add(i), d([...n]);
                },
                isActivityRestricted: (e) => o.includes(e),
                hasActivityRestrictedGuilds: g,
                onToggleAllActivityRestrictedGuilds: () => {
                    g ? d([]) : d(l);
                },
                numTotalGuilds: l.length,
                numActivityRestrictedGuilds: o.length,
            };
        })(),
        E = (0, N.useId)(),
        T = (0, N.useRef)(null),
        S = (0, N.useMemo)(
            () => [
                { id: W.SERVER_ORDER, label: g.intl.string(g.t.STMPJ2), value: W.SERVER_ORDER },
                { id: W.RECENTLY_JOINED, label: g.intl.string(g.t.CbaapP), value: W.RECENTLY_JOINED },
                { id: W.ACTIVITY_SHARING_ON, label: g.intl.string(m.default.ZI51JZ), value: W.ACTIVITY_SHARING_ON },
                {
                    id: W.ACTIVITY_SHARING_OFF,
                    label: g.intl.string(m.default["+kxafn"]),
                    value: W.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        x = S.find((e) => e.value === s)?.label ?? "";
    return (0, p.jsxs)("div", {
        className: q.iE,
        children: [
            t,
            (0, p.jsxs)("div", {
                className: q.N1,
                children: [
                    (0, p.jsx)(D.I, {
                        query: n,
                        onChange: l,
                        onClear: () => {
                            X.default.track(Q.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_cleared",
                                sort_order: s,
                                activity_restricted_guild_count: A,
                                total_guild_count: h,
                            }),
                                l("");
                        },
                        onFocus: () =>
                            X.default.track(Q.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_focused",
                                sort_order: s,
                                activity_restricted_guild_count: A,
                                total_guild_count: h,
                            }),
                        onBlur: () =>
                            X.default.track(Q.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_blurred",
                                sort_order: s,
                                activity_restricted_guild_count: A,
                                total_guild_count: h,
                            }),
                        placeholder: g.intl.string(g.t["H+nRYw"]),
                        "aria-label": g.intl.string(g.t["5h0QOP"]),
                        inputProps: { "aria-controls": E, "aria-expanded": !0 },
                    }),
                    i.length > 0 &&
                        (0, p.jsxs)("div", {
                            className: q.gO,
                            children: [
                                (0, p.jsx)(G.Y, {
                                    targetElementRef: T,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, p.jsx)(P.W, {
                                            navId: "guild-sort-order-menu",
                                            onClose: t,
                                            "aria-label": g.intl.string(g.t.LxVjvJ),
                                            onSelect: t,
                                            children: (0, p.jsx)(U.rX, {
                                                children: S.map((e) => {
                                                    let { id: t, label: i, value: n } = e;
                                                    return (0, p.jsx)(
                                                        U.iD,
                                                        {
                                                            id: t,
                                                            group: "sort-order",
                                                            label: i,
                                                            checked: s === n,
                                                            action: () => {
                                                                X.default.track(
                                                                    Q.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED,
                                                                    {
                                                                        interaction: "sort_order_changed",
                                                                        sort_order: n,
                                                                        activity_restricted_guild_count: A,
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
                                        (0, p.jsxs)(V.D, {
                                            ...e,
                                            innerRef: T,
                                            className: q.Ku,
                                            children: [
                                                (0, p.jsx)(M.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: x,
                                                }),
                                                (0, p.jsx)(k.a, { size: "xs", color: w.A.colors.TEXT_SUBTLE }),
                                            ],
                                        }),
                                }),
                                (0, p.jsx)(B.Q, {
                                    variant: "primary",
                                    textVariant: "text-sm/medium",
                                    onClick: o,
                                    text: a ? g.intl.string(g.t["7lxcLO"]) : g.intl.string(g.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, p.jsx)(F.A, {
                "aria-live": "polite",
                role: "region",
                children: g.intl.format(m.default.EvzDff, { count: i.length }),
            }),
            (0, p.jsxs)("ul", {
                className: q.X1,
                id: E,
                "aria-label": g.intl.string(g.t["7hB4kg"]),
                children: [
                    0 === i.length &&
                        (0, p.jsx)("div", {
                            className: q.pb,
                            children: (0, p.jsx)(M.E, {
                                className: q.R$,
                                variant: "text-lg/medium",
                                children: g.intl.string(g.t["Xe+fJM"]),
                            }),
                        }),
                    i.map((e) =>
                        (0, p.jsx)(
                            J,
                            { guild: e, isActivityRestricted: d(e.id), onToggleActivityRestrictedGuild: u },
                            e.id,
                        ),
                    ),
                ],
            }),
        ],
    });
};
var ee = i(2860);
let et = (0, o.E2)(u.X.ACTIVITY_PRIVACY_PER_GUILD_SETTING, {
        useSearchTerms: () => [g.intl.string(m.default["/LHVbt"])],
        Component: function () {
            let e = c.tz.useSetting()
                ? null
                : (0, p.jsx)("div", {
                      className: ee.l,
                      children: (0, p.jsx)(y.w, { type: "warning", children: g.intl.string(m.default["xxI0/W"]) }),
                  });
            return (0, p.jsx)($, { notice: e });
        },
    }),
    ei = (0, o.zZ)(u.X.ACTIVITY_PRIVACY_MY_SERVERS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.TqdOvC),
        useSubtitle: () => (x("MyServersCategory") ? g.intl.string(m.default.OO17Lg) : null),
        buildLayout: () => [et, j],
    }),
    en = (0, o.zD)(u.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => g.intl.string(m.default.khuuzv),
        useSubtitle: () => g.intl.string(m.default["8EWsJ8"]),
        useValue: () => c.e.useSetting(),
        setValue: (e) => c.e.updateSetting(e),
    }),
    el = (0, o.zD)(u.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => g.intl.string(m.default.Uz5Ipi),
        useSubtitle: () => g.intl.string(m.default.CZI2Gb),
        useValue: () => c.UM.useSetting(),
        setValue: (e) => c.UM.updateSetting(e),
    }),
    es = (0, o.zZ)(u.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => g.intl.string(m.default["89YBr5"]),
        buildLayout: () => [en, el],
        useSearchTerms: () => [g.intl.string(g.t.VOszPA)],
    });
var er = i(359778),
    ea = i(22917);
let eo = (0, o.E2)(u.X.ACTIVITY_PRIVACY_TERMS, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, p.jsx)(er.Z, {
                type: er.Z.Types.PRIMARY,
                className: ea.A,
                children: (0, p.jsx)(M.E, {
                    variant: "text-sm/normal",
                    children: g.intl.format(g.t.xvCsx4, { termsLink: Q.X7G.TERMS, privacyLink: Q.X7G.PRIVACY }),
                }),
            });
        },
    }),
    eu = (0, o.zZ)(u.X.ACTIVITY_PRIVACY_TERMS_CATEGORY, { buildLayout: () => [eo] }),
    ed = (0, o.t_)(u.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => g.intl.string(g.t.Cq98yL),
        buildLayout: () => [h, I, ei, es, eu],
    }),
    ec = (0, o.i4)(u.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.Cq98yL),
        icon: d._,
        buildLayout: () => [ed],
    });
var eg = i(935399),
    em = i(625657),
    eA = i(534514),
    eh = i(821609),
    eE = i(554146),
    eT = i(932001),
    eS = i(843402),
    ex = i(589051),
    ep = i(592598),
    eN = i(46373),
    e_ = i(933297),
    ef = i(351906),
    eb = i(532624),
    eC = i(773371),
    eI = i(256415),
    ev = i(723702),
    ej = i(858897),
    ey = i(17460),
    eO = i(735438),
    eR = i.n(eO),
    eL = i(350535),
    eD = i(672396);
let eG = eU(null);
function eP() {
    var e;
    let t = eU(eG);
    (e = eG),
        eR().isEqual(eR().omit(t, "old_enabled"), eR().omit(e, "old_enabled")) ||
            (X.default.track(Q.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (eG = t));
}
function eU(e) {
    let t = eI.default.getNotificationPositionMode(),
        i = t !== Q.G6Q.DISABLED,
        n = eb.Ay.getOverlayKeybind(),
        l = eb.Ay.getOverlayChatKeybind();
    return {
        enabled: eC.default.enabled,
        notifications_enabled: i,
        notifications_position: i ? t : null,
        text_notifications_mode: ep.A.isNotificationDisabled(eD.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != n ? (0, eL.dI)(n.shortcut) : null,
        text_activation_hotkey: null != l ? (0, eL.dI)(l.shortcut) : null,
        text_opacity_slider: eI.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? eC.default.enabled,
    };
}
var eV = i(793574),
    eM = i(237984),
    ek = i(503698),
    ew = i.n(ek),
    eB = i(890856),
    eF = i(481384);
let ez = (e) => {
    e.preventDefault(), e.stopPropagation();
};
function eX(e) {
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
    return (0, p.jsxs)("div", {
        className: ew()(eF.HS, d),
        children: [
            (0, p.jsxs)(eB.s, {
                "aria-label": u,
                onClick: o,
                children: [
                    null != t && (0, p.jsx)("div", { className: eF.x_, children: t }),
                    (0, p.jsxs)("div", {
                        className: eF.rN,
                        children: [
                            null != i && (0, p.jsx)("div", { className: eF.$t, children: i }),
                            (0, p.jsxs)("div", {
                                className: eF.c8,
                                children: [
                                    (0, p.jsx)(M.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: eF.SZ,
                                        children: n,
                                    }),
                                    null != l &&
                                        (0, p.jsx)(M.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: l,
                                        }),
                                    null != r &&
                                        (0, p.jsx)(M.E, {
                                            variant: "text-xxs/medium",
                                            color: "text-muted",
                                            children: r,
                                        }),
                                ],
                            }),
                            (0, p.jsx)("div", { className: eF.a$, children: s }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)("div", { className: eF.Om, children: a }),
        ],
    });
}
let eY = (0, o.E2)(u.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, p.jsx)(eX, {
            title: g.intl.string(g.t["z4/l+V"]),
            description: g.intl.string(g.t["3aZq/0"]),
            action: (0, p.jsx)(eh.$, {
                variant: "primary",
                text: g.intl.string(g.t.s2nVhG),
                onClick: () => {
                    (0, eM.b)(eV.A.USER_SETTINGS, Q.BRT.APP);
                },
            }),
            "aria-label": g.intl.string(g.t["z4/l+V"]),
        });
    },
    useSearchTerms: () => [g.intl.string(g.t["z4/l+V"])],
});
var eH = i(812729),
    eK = i.n(eH),
    eW = i(587895),
    eZ = i(429913),
    eQ = i(616356),
    eq = i(328153);
function eJ(e, t) {
    return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0;
}
function e$() {
    let e = (0, O.bG)([eQ.A], () => eQ.A.getStreamerActiveStreamMetadata()),
        t = (0, O.bG)(
            [eq.Ay],
            () => {
                let e = eq.Ay.getVisibleGame();
                return null != e ? eq.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
            },
            [],
            eK(),
        ),
        [i] = (0, eZ.A)([eJ(e, t)]);
    return { runningGame: t ?? void 0, runningGameApplication: i ?? void 0 };
}
var e0 = i(990078),
    e1 = i(478016),
    e2 = i(31300),
    e3 = i(780907),
    e4 = i(684013),
    e5 = i(56562),
    e8 = i(964486),
    e6 = i(137177),
    e7 = i(496885),
    e9 = i(810412),
    te = i(41984),
    tt = i(833551),
    ti = i(562519);
let tn = 5 * i(927813).A.Millis.DAY,
    tl = new ti.A("overlay_survey_timestamps");
function ts(e, t) {
    let n, l;
    (n = Date.now()),
        (null != (l = Array.from(tl.values()).reduce((e, t) => Math.max(e, t), 0)) && n - l < tn) ||
            Array.from(tl.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, f.openModalLazy)(async () => {
                let n,
                    { default: l } = await Promise.all([i.e("76982"), i.e("82318")]).then(i.bind(i, 387101));
                return (n = Date.now()), tl.add(n), (i) => (0, p.jsx)(l, { ...i, clientSettingType: e, gameId: t });
            });
}
var tr = i(512950),
    ta = i(975571),
    to = i(935671);
function tu() {
    (0, to.sL)("overlay-settings");
}
function td(e) {
    let { className: t, game: i } = e;
    return (0, to.NP)() && null != i && i.elevated
        ? (0, p.jsx)("div", {
              className: t,
              children: (0, p.jsx)(tr.p, {
                  messageType: tr.Y.WARNING,
                  action: (0, p.jsx)(eh.$, {
                      variant: "secondary",
                      size: "sm",
                      text: g.intl.string(g.t["1iI46O"]),
                      onClick: tu,
                  }),
                  children: g.intl.format(g.t["LJzl+0"], { helpCenterLink: ta.A.getArticleURL(Q.MVz.SYSTEM_SERVICE) }),
              }),
          })
        : null;
}
var tc = i(760751),
    tg = i(189081),
    tm = i(9302),
    tA = i(311678),
    th = i(320448);
let tE = new Set([
    te.AR.INITIALIZING,
    te.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
    te.AR.WAITING_FOR_MODULE_TRACKING,
    te.AR.WAITING_FOR_OVERLAY_OPEN,
    te.AR.WAITING_FOR_POPOUT_OPEN,
    te.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
    te.AR.WAITING_FOR_REACT_INITIALIZATION,
    te.AR.WAITING_FOR_PID_FOCUS,
    te.AR.WAITING_FOR_SUCCESSFUL_SHOW,
]);
function tT(e) {
    let { children: t, className: i, onExpand: n, ...l } = e,
        [s, r] = N.useState(!1);
    return (0, p.jsx)(tA.N, {
        className: eF.uR,
        collapsibleContent: (0, p.jsx)("div", { className: eF.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, p.jsx)(eX, {
                ...l,
                onClick: (e) => {
                    var i;
                    r((i = !s)), n?.(i), t?.(e);
                },
                className: ew()(eF.AC, i),
                action: (0, p.jsxs)("div", {
                    className: eF.rc,
                    children: [
                        l.action,
                        s
                            ? (0, p.jsx)(k.a, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              })
                            : (0, p.jsx)(th._, {
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
let tS = (0, o.E2)(u.X.OVERLAY_CURRENT_GAME, {
    Component: function () {
        let { runningGame: e, runningGameApplication: t } = e$(),
            i = e?.pid,
            n = (0, O.bG)(
                [tt.default],
                () => (null == e || null == i ? null : tt.default.getTrackedGameByPid(i)),
                [e, i],
                eK(),
            ),
            { enabledLegacy: l, enabledOOP: s } = (0, O.cf)(
                [tc.A, tg.A],
                () =>
                    null == e && null == n
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: n?.legacyEnabled ?? !1, enabledOOP: n?.oopEnabled ?? !1 }
                          : (0, eq.hw)(e, !1, [tc.A, tg.A]),
                [e, n],
            ),
            r = (0, O.bG)([eq.Ay, tc.A, tg.A], () => (null == e ? null : (0, eq.xU)(e, eq.Ay, tc.A, tg.A)), [e], eK()),
            [a, o] = N.useState(s),
            [u, d] = N.useState(l),
            [c, m] = N.useState(!1);
        N.useEffect(() => {
            o(s), d(l);
        }, [s, l]);
        let A = !(0, tm.supportsLegacy)(),
            h = !(0, tm.supportsOutOfProcess)(),
            { legacyEnabled: E, oopEnabled: T } = (0, O.cf)([tt.default], () => tt.default.getGlobalEnabledStatus()),
            S = (t, i) => {
                if (null == e) return;
                let n = !1,
                    l = !1;
                switch (i) {
                    case e9.OverlayToggledClientSettingType.LEGACY_GAME:
                        d(t), e3.Ay.toggleOverlay(e, t, a), (n = !t && u);
                        break;
                    case e9.OverlayToggledClientSettingType.OOP_GAME:
                        o(t), e3.Ay.toggleOverlay(e, u, t), (l = !t && a);
                        break;
                    case e9.OverlayToggledClientSettingType.LEGACY:
                        e4.A.setEnabled(t, T), (0, e9.Q3)(t, e9.OverlayToggledClientSettingType.LEGACY, e.id ?? null);
                        break;
                    case e9.OverlayToggledClientSettingType.OOP:
                        e4.A.setEnabled(E, t), (0, e9.Q3)(t, e9.OverlayToggledClientSettingType.OOP, e.id ?? null);
                }
                (n || l) &&
                    ts(
                        n
                            ? e9.OverlayToggledClientSettingType.LEGACY_GAME
                            : e9.OverlayToggledClientSettingType.OOP_GAME,
                        e.id ?? null,
                    );
            },
            x = A && h,
            _ = !E && !T,
            f = !a && !E && u && !A,
            b = !u && !T && a && !h,
            C = n?.overlayMethod === te.Ue.Disabled,
            I = n?.state === te.AR.OVERLAY_RENDERING && !C,
            v = n?.state != null && tE.has(n.state) && !C,
            j = n?.overlayMethod === te.Ue.OutOfProcess,
            y = n?.overlayMethod === te.Ue.OutOfProcessLimitedInteraction,
            R = n?.overlayMethod === te.Ue.Hook,
            D = n?.state === te.AR.OVERLAY_CRASHED || n?.state === te.AR.OVERLAY_CRASHED_DISABLED,
            G = !a && !u,
            [P, U] = (() => {
                switch (!0) {
                    case I && j:
                        return [
                            g.intl.format(g.t.hFVBIg, {
                                overlayMethod: g.intl.string(g.t.a3eXSw),
                                overlayMethodHook: function (e, t) {
                                    return (0, p.jsx)(
                                        M.E,
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
                    case I && y:
                        return [
                            g.intl.format(g.t.hFVBIg, {
                                overlayMethod: g.intl.string(g.t["506Aba"]),
                                overlayMethodHook: function (e, t) {
                                    return (0, p.jsx)(
                                        M.E,
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
                    case I && R:
                        return [
                            g.intl.format(g.t.hFVBIg, {
                                overlayMethod: g.intl.string(g.t.bvlpDR),
                                overlayMethodHook: function (e, t) {
                                    return (0, p.jsx)(
                                        M.E,
                                        { tag: "span", variant: "text-sm/medium", color: "text-strong", children: e },
                                        t,
                                    );
                                },
                            }),
                            (function () {
                                switch (!0) {
                                    case n?.fullscreenType !== e5.aI.BORDERLESS_FULLSCREEN:
                                        return g.intl.string(g.t.mJmbeC);
                                    case h:
                                        return g.intl.string(g.t.C7bLTQ);
                                    case !n?.oopEnabled:
                                        return g.intl.string(g.t.WiY24u);
                                    case !T:
                                        return g.intl.string(g.t.cAFVsL);
                                    case !n?.supportsOutOfProcess:
                                        return g.intl.string(g.t.XcGEcs);
                                    default:
                                        return g.intl.string(g.t.bJXH2v);
                                }
                            })(),
                        ];
                    case D:
                        return [g.intl.string(g.t.OFC2aw), null];
                    case x:
                        return [g.intl.string(g.t.m7X4az), null];
                    case _:
                        return [g.intl.string(g.t["9DUS5l"]), null];
                    case G:
                        return [g.intl.string(g.t.nQ9EdJ), null];
                    case f:
                    case b:
                        return [g.intl.string(g.t.VWUn0a), null];
                    case v:
                        if (j) return [g.intl.string(g.t["s8+CFq"]), null];
                        if (R) return [g.intl.string(g.t.JEEdqt), null];
                        if (y) return [g.intl.string(g.t.pzBMwY), null];
                        return [g.intl.string(g.t["2Xhy9k"]), null];
                    case null == n:
                        return [g.intl.string(g.t.vwHPRi), null];
                    case C: {
                        let e = n?.fullscreenType === e5.aI.FULLSCREEN ? g.intl.string(g.t.mJmbeC) : null;
                        return [g.intl.string(g.t.VPW4XY), e];
                    }
                    default:
                        return [g.intl.string(g.t.ONovP5), null];
                }
            })();
        (0, e8.Ay)(() => {
            e3.Ay.getDetectableGames();
        });
        let [k, B] = N.useMemo(
            () =>
                v
                    ? ["text-muted", w.A.colors.TEXT_MUTED.css]
                    : I && y
                      ? ["text-feedback-warning", w.A.colors.TEXT_FEEDBACK_WARNING.css]
                      : I && j
                        ? ["text-feedback-positive", w.A.colors.TEXT_FEEDBACK_POSITIVE.css]
                        : I && R
                          ? ["text-strong", w.A.colors.TEXT_STRONG.css]
                          : ["interactive-text-default", w.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
            [v, I, y, j, R],
        );
        return null == e
            ? null
            : (0, p.jsxs)(tT, {
                  onExpand: m,
                  className: c ? eF.tx : void 0,
                  title: (0, p.jsxs)(p.Fragment, {
                      children: [
                          t?.name ?? r?.name ?? e?.gameName ?? "",
                          null != r && r.verified
                              ? (0, p.jsx)(e0.m, {
                                    text: g.intl.string(g.t["4PJP5p"]),
                                    children: (0, p.jsx)(e7.A, {
                                        size: 16,
                                        color: w.A.colors.BACKGROUND_BRAND.css,
                                        children: (0, p.jsx)(e1.U, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: w.A.colors.WHITE.css,
                                        }),
                                    }),
                                })
                              : null,
                      ],
                  }),
                  description: P,
                  hint: null != U ? U : void 0,
                  header: (0, p.jsxs)(p.Fragment, {
                      children: [
                          I || v
                              ? (0, p.jsx)(e2.k, { size: "xxs", color: B })
                              : (0, p.jsx)("div", { className: eF.W4 }),
                          (0, p.jsx)(M.E, {
                              variant: "text-xs/semibold",
                              color: k,
                              children: g.intl.string(g.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, p.jsx)(e6.A, { game: t, pid: e?.pid, size: e6.M.MEDIUM }),
                  "aria-label": g.intl.string(g.t["87O5GC"]),
                  action: (0, p.jsx)(V.D, {
                      onClick: (e) => ez(e),
                      children: (0, p.jsx)(L.d, {
                          checked: (a && T) || (u && E),
                          disabled: x,
                          onChange: (t) => {
                              ((t, i) => {
                                  if (null == e) return;
                                  let n = !1,
                                      l = !1;
                                  switch (i) {
                                      case "game":
                                          e3.Ay.toggleOverlay(e, t, t), d(t), o(t), (n = !t && u), (l = !t && a);
                                          break;
                                      case "global":
                                          e4.A.setEnabled(t, t), (n = !t && E), (l = !t && T);
                                          break;
                                      case "both":
                                          e4.A.setEnabled(t, t),
                                              e3.Ay.toggleOverlay(e, t, t),
                                              d(t),
                                              o(t),
                                              (n = (!t && E) || (!t && u)),
                                              (l = (!t && T) || (!t && a));
                                  }
                                  let s = null;
                                  n
                                      ? (s =
                                            "game" === i
                                                ? e9.OverlayToggledClientSettingType.LEGACY_GAME
                                                : e9.OverlayToggledClientSettingType.LEGACY)
                                      : l &&
                                        (s =
                                            "game" === i
                                                ? e9.OverlayToggledClientSettingType.OOP_GAME
                                                : e9.OverlayToggledClientSettingType.OOP),
                                      null != s && ts(s, e.id ?? null);
                              })(
                                  t,
                                  ((e, t) => {
                                      let i = !t && e,
                                          n = !T && a,
                                          l = !E && u,
                                          s = !a && T,
                                          r = !u && E;
                                      switch (!0) {
                                          case i && (n || l) && (s || r):
                                              return "both";
                                          case i && (n || l):
                                              return "global";
                                          default:
                                              return "game";
                                      }
                                  })(t, (a && T) || (u && E)),
                              );
                          },
                      }),
                  }),
                  warning: (0, p.jsx)(td, { className: eF.Hh, game: e }),
                  children: [
                      (0, p.jsx)(eX, {
                          title: g.intl.string(g.t["7BlVIs"]),
                          description: g.intl.string(g.t.ndgADE),
                          hint: T ? void 0 : g.intl.string(g.t.cAFVsL),
                          "aria-label": g.intl.string(g.t["7BlVIs"]),
                          action: (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(L.d, {
                                      checked: a && T,
                                      disabled: h,
                                      onChange: (e) => {
                                          e && !T
                                              ? S(e, e9.OverlayToggledClientSettingType.OOP)
                                              : S(e, e9.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, p.jsx)("div", { className: eF.Kz }),
                              ],
                          }),
                      }),
                      (0, p.jsx)(eX, {
                          title: g.intl.string(g.t.BfFpW1),
                          description: g.intl.string(g.t.OzInYk),
                          hint: E ? void 0 : g.intl.string(g.t["3sYHXm"]),
                          "aria-label": g.intl.string(g.t.BfFpW1),
                          action: (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(L.d, {
                                      checked: u && E,
                                      disabled: A,
                                      onChange: (e) => {
                                          e && !E
                                              ? S(e, e9.OverlayToggledClientSettingType.LEGACY)
                                              : S(e, e9.OverlayToggledClientSettingType.LEGACY_GAME);
                                      },
                                  }),
                                  (0, p.jsx)("div", { className: eF.Kz }),
                              ],
                          }),
                      }),
                  ],
              });
    },
    usePredicate: () => {
        let { runningGame: e } = e$();
        return null != e;
    },
    useSearchTerms: () => [g.intl.string(g.t["9cb1Uz"])],
});
var tx = i(364522),
    tp = i(206885),
    tN = i(871633);
function t_(e) {
    let { game: t, gameApplication: i } = e,
        n = N.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        l = (0, O.bG)([eW.A], () => (null != i ? i : eW.A.getApplication(t?.id)), [i, t]);
    return (0, p.jsx)(e6.A, { game: l, pid: n, size: e6.M.SMALL });
}
function tf(e) {
    let {
            rawGame: t,
            gameApplication: i,
            supportDisabled: n,
            getEnabledFromStatus: l,
            onChange: s,
            clientSettingType: r,
            ariaLabel: a,
        } = e,
        o = (0, O.cf)([eq.Ay, tc.A, tg.A], () => (0, eq.xU)(t, eq.Ay, tc.A, tg.A)),
        u = (0, O.cf)([tc.A, tg.A], () => (0, eq.hw)(t, !1, [tc.A, tg.A]), [t]),
        d = l(u),
        [c, g] = N.useState(d);
    return (
        N.useEffect(() => {
            g(d);
        }, [d]),
        (0, p.jsx)(eX, {
            title: t.name,
            icon: (0, p.jsx)(t_, { game: o, gameApplication: i }),
            "aria-label": a,
            action: (0, p.jsxs)(p.Fragment, {
                children: [
                    (0, p.jsx)(L.d, {
                        checked: c,
                        disabled: n,
                        onChange: (e) => {
                            let i;
                            return (i = !e && c), void (g(e), s(e, o, u), i && ts(r, o.id ?? t?.id ?? null));
                        },
                    }),
                    (0, p.jsx)("div", { className: eF.Kz }),
                ],
            }),
        })
    );
}
let tb = (0, o.E2)(u.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = N.useState(!1),
                { legacyEnabled: i, oopEnabled: n } = (0, O.cf)([tt.default], () =>
                    tt.default.getGlobalEnabledStatus(),
                ),
                l = (0, O.yK)([eq.Ay], () => eq.Ay.getGamesSeen(!0)).filter((e) => !(0, tN.n1)(e)),
                s = (0, eZ.A)(l.map((e) => e.id)),
                r = !(0, tm.supportsLegacy)(),
                a = (e) => {
                    e4.A.setEnabled(e, n);
                    let t = eq.Ay.getCurrentGameForAnalytics()?.id ?? null;
                    (0, e9.Q3)(e, e9.OverlayToggledClientSettingType.LEGACY, t),
                        !e && i && ts(e9.OverlayToggledClientSettingType.LEGACY, t);
                },
                o = (e, t, i) => {
                    let { enabledOOP: n } = i;
                    e3.Ay.toggleOverlay(t, e, n);
                },
                u = N.useMemo(
                    () =>
                        (0, tm.supportsLegacy)()
                            ? r
                                ? g.intl.string(g.t.r9jEVw)
                                : g.intl.string(g.t.OzInYk)
                            : g.intl.string(g.t["8Ox6/E"]),
                    [r],
                );
            return 0 === l.length
                ? (0, p.jsx)(eX, {
                      title: g.intl.string(g.t.BfFpW1),
                      description: u,
                      "aria-label": g.intl.string(g.t.BfFpW1),
                      className: eF.dA,
                      action: (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(L.d, { checked: i, disabled: r, onChange: (e) => a(e) }),
                              tp.O && (0, p.jsx)("div", { className: eF.Kz }),
                          ],
                      }),
                  })
                : (0, p.jsxs)(tT, {
                      onExpand: t,
                      className: e ? eF.tx : void 0,
                      title: g.intl.string(g.t.BfFpW1),
                      description: u,
                      "aria-label": g.intl.string(g.t.BfFpW1),
                      action: (0, p.jsx)(V.D, {
                          onClick: (e) => ez(e),
                          children: (0, p.jsx)(L.d, { checked: i, disabled: r, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, p.jsx)("div", {
                              className: eF.SC,
                              children: (0, p.jsx)(M.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: g.intl.string(g.t.FzoWRo),
                              }),
                          }),
                          (0, p.jsx)(tx.Ip, {
                              className: eF.XG,
                              children: l.map((e, t) =>
                                  (0, p.jsx)(
                                      tf,
                                      {
                                          rawGame: e,
                                          clientSettingType: e9.OverlayToggledClientSettingType.LEGACY_GAME,
                                          supportDisabled: r,
                                          gameApplication: s[t],
                                          getEnabledFromStatus: (e) => {
                                              let { enabledLegacy: t } = e;
                                              return t;
                                          },
                                          onChange: o,
                                          ariaLabel: g.intl.format(g.t.hvPYsF, { gameName: e.name }).toString(),
                                      },
                                      e.id,
                                  ),
                              ),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [g.intl.string(g.t.BfFpW1)],
    }),
    tC = (0, o.E2)(u.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = N.useState(!1),
                { oopEnabled: i, legacyEnabled: n } = (0, O.cf)([tt.default], () =>
                    tt.default.getGlobalEnabledStatus(),
                ),
                l = !(0, tm.supportsOutOfProcess)(),
                s = (0, O.yK)([eq.Ay], () => eq.Ay.getGamesSeen(!0)).filter((e) => !(0, tN.n1)(e)),
                r = (0, eZ.A)(s.map((e) => e.id)),
                a = (e) => {
                    let t = !e && i;
                    e4.A.setEnabled(n, e);
                    let l = eq.Ay.getCurrentGameForAnalytics()?.id ?? null;
                    (0, e9.Q3)(e, e9.OverlayToggledClientSettingType.OOP, l),
                        t && ts(e9.OverlayToggledClientSettingType.OOP, l);
                },
                o = (e, t, i) => {
                    let { enabledLegacy: n } = i;
                    e3.Ay.toggleOverlay(t, e, n);
                },
                u = N.useMemo(
                    () =>
                        tp.O ? (l ? g.intl.string(g.t.C7bLTQ) : g.intl.string(g.t.ndgADE)) : g.intl.string(g.t.m7X4az),
                    [l],
                );
            return 0 === s.length
                ? (0, p.jsx)(eX, {
                      title: g.intl.string(g.t["7BlVIs"]),
                      description: u,
                      "aria-label": g.intl.string(g.t["7BlVIs"]),
                      className: eF.dA,
                      action: (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(L.d, { checked: i, disabled: l, onChange: (e) => a(e) }),
                              tp.O && (0, p.jsx)("div", { className: eF.Kz }),
                          ],
                      }),
                  })
                : (0, p.jsxs)(tT, {
                      onExpand: t,
                      className: e ? eF.tx : void 0,
                      title: g.intl.string(g.t["7BlVIs"]),
                      description: u,
                      "aria-label": g.intl.string(g.t["7BlVIs"]),
                      action: (0, p.jsx)(V.D, {
                          onClick: (e) => ez(e),
                          children: (0, p.jsx)(L.d, { checked: i, disabled: l, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, p.jsx)("div", {
                              className: eF.SC,
                              children: (0, p.jsx)(M.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: g.intl.string(g.t.FzoWRo),
                              }),
                          }),
                          (0, p.jsx)(tx.Ip, {
                              className: eF.XG,
                              children: s.map((e, t) =>
                                  (0, p.jsx)(
                                      tf,
                                      {
                                          rawGame: e,
                                          clientSettingType: e9.OverlayToggledClientSettingType.OOP_GAME,
                                          gameApplication: r[t],
                                          supportDisabled: l,
                                          getEnabledFromStatus: (e) => {
                                              let { enabledOOP: t } = e;
                                              return t;
                                          },
                                          onChange: o,
                                          ariaLabel: g.intl.format(g.t.nByTd3, { gameName: e.name }).toString(),
                                      },
                                      e.id,
                                  ),
                              ),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [g.intl.string(g.t["7BlVIs"])],
    }),
    tI = (0, o.zZ)(u.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => g.intl.string(g.t["/dp6yY"]),
        buildLayout: () => [tS, tC, tb, eY],
    }),
    tv = (0, o.zD)(u.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, O.bG)([eI.default], () => !eI.default.disableClickableRegions),
        setValue: (e) => {
            e4.A.setDisableClickableRegions(!e);
        },
        useTitle: () => g.intl.string(g.t["+eFXxq"]),
        useSubtitle: () => g.intl.string(g.t.kivMAp),
    });
var tj = i(284009),
    ty = i.n(tj),
    tO = i(97260),
    tR = i(635242);
let tL = (0, o.E2)(u.X.OVERLAY_KEYBIND_SETTING, {
    Component: function () {
        let e = (0, O.bG)([eb.Ay], () => eb.Ay.getOverlayKeybind()),
            t = !(0, tm.supportsLegacy)(),
            i = !(0, tm.supportsOutOfProcess)(),
            [n, l] = (0, O.yK)([eq.Ay], () => [eq.Ay.canShowAdminWarning, eq.Ay.getVisibleGame()], []),
            s = (0, to.NP)(),
            r = null != l && l.elevated && n && !s,
            a = !(0, eb.DV)(e?.shortcut ?? []);
        return (0, p.jsx)("div", {
            className: eF.hc,
            children: (0, p.jsxs)("div", {
                className: eF.eH,
                children: [
                    (0, p.jsxs)("div", {
                        className: eF.Bu,
                        children: [
                            (0, p.jsx)(M.E, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: g.intl.string(g.t.VsAZcC),
                            }),
                            r &&
                                (0, p.jsx)(M.E, {
                                    variant: "text-xs/normal",
                                    color: "text-feedback-warning",
                                    className: eF.y7,
                                    children: g.intl.string(g.t.NsowVa),
                                }),
                            a &&
                                (0, p.jsx)(M.E, {
                                    variant: "text-xs/normal",
                                    color: "text-feedback-warning",
                                    className: eF.y7,
                                    children: g.intl.string(g.t["UNoTw/"]),
                                }),
                        ],
                    }),
                    (0, p.jsx)("div", {
                        className: eF.IH,
                        children: (0, p.jsx)(tR.A, {
                            disabled: t && i,
                            defaultValue: null != e ? e.shortcut : [],
                            onChange: function (t) {
                                ty()(null != e, "Keybind should never be undefined"),
                                    tO.A.setKeybind({ ...e, shortcut: t });
                            },
                        }),
                    }),
                ],
            }),
        });
    },
    useSearchTerms: () => [g.intl.string(g.t.VsAZcC)],
});
var tD = i(515183),
    tG = i(682763);
let tP = (0, o.zD)(u.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
        usePredicate: () => {
            let { runningGameApplication: e } = e$();
            return e?.id != null;
        },
        useDisabled: () => {
            let { runningGame: e } = e$();
            return null != e && (0, tD.qJ)(e.pid);
        },
        useValue: () => {
            let { runningGame: e, runningGameApplication: t } = e$(),
                i = t?.id,
                n = (0, O.bG)([ep.A], () => ep.A.isLimitedInteractionOverrideEnabled(i)),
                l = null != e && (0, tD.qJ)(e.pid);
            return n || l;
        },
        setValue: (e) => {
            let t,
                i,
                n,
                l,
                { runningGameApplication: s } =
                    ((t = eQ.A.getStreamerActiveStreamMetadata()),
                    (l = eJ(
                        t,
                        (n =
                            null != (i = eq.Ay.getVisibleGame())
                                ? eq.Ay.getGameOrTransformedSubgameForPID(i.pid)
                                : null),
                    )),
                    { runningGame: n ?? void 0, runningGameApplication: eW.A.getApplication(l) ?? void 0 });
            null != s && (0, tG.x8)(s.id, e);
        },
        useTitle: () => g.intl.string(g.t.wgVQND),
        useSubtitle: () => g.intl.string(g.t["5SsyF5"]),
    }),
    tU = (0, o.zZ)(u.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [tL, tP, tv] });
var tV = i(93465);
let tM = [
    {
        title: g.t.eVE4LX,
        description: g.t["72WNqk"],
        disabledSetting: tV.M.TEXT_CHAT,
        key: u.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: g.t.oifnSh,
        description: g.t.bgU5r0,
        disabledSetting: tV.M.WELCOME_GENERAL,
        key: u.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: g.t.hqsZJW,
        description: g.t.kHjdqc,
        disabledSetting: tV.M.GO_LIVE_NUDGE,
        key: u.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: g.t.sop3rn,
        description: g.t.pjgffc,
        disabledSetting: tV.M.GAME_ACTIVITY,
        key: u.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: g.t["2QVhbb"],
        description: g.t.wQ4ilB,
        disabledSetting: tV.M.NOW_PLAYING,
        key: u.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: g.t.giM9fA,
        description: g.t.EhAfWj,
        disabledSetting: tV.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: u.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, ex.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, O.bG)([ep.A], () => ep.A.isNotificationDisabledBySetting(tV.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function tk(e) {
    return (0, o.zD)(e.key, {
        useTitle: () => g.intl.string(e.title),
        useSubtitle: () => g.intl.string(e.description),
        useValue: () => !(0, O.bG)([ep.A], () => ep.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            e4.A.setNotificationDisabledSetting(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let tw = (0, o.FW)(u.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => g.intl.string(g.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => tM.map(tk),
    }),
    tB = (0, o.zZ)(u.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.xOE5bA),
        buildLayout: () => [tw],
    }),
    tF = (0, o.Hn)(u.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
        useTitle: () => g.intl.string(g.t.dnvZSg),
        useValue: () => (0, O.bG)([eI.default], () => eI.default.getAvatarSizeMode()),
        setValue: (e) => {
            e4.A.setAvatarSizeMode(e);
        },
        useOptions: () => [
            { id: "large", label: g.intl.string(g.t.YcOxtr), value: Q.OSZ.LARGE },
            { id: "small", label: g.intl.string(g.t.BKIKqx), value: Q.OSZ.SMALL },
        ],
    }),
    tz = (0, o.Hn)(u.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => g.intl.string(g.t.J0dpcB),
        useValue: () => (0, O.bG)([eI.default], () => eI.default.getDisplayNameMode()),
        setValue: (e) => {
            e4.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: g.intl.string(g.t.nBmDrT), value: Q.pwA.ALWAYS },
            { id: "speaking", label: g.intl.string(g.t["2OvIZY"]), value: Q.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: g.intl.string(g.t.ekjlPL), value: Q.pwA.NEVER },
        ],
    }),
    tX = (0, o.Hn)(u.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => g.intl.string(g.t.swsWWC),
        useValue: () => (0, O.bG)([eI.default], () => eI.default.getDisplayUserMode()),
        setValue: (e) => {
            e4.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: g.intl.string(g.t.nBmDrT), value: Q.f5z.ALWAYS },
            { id: "speaking", label: g.intl.string(g.t["2OvIZY"]), value: Q.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var tY = i(391973),
    tH = i(489277),
    tK = i(897720),
    tW = i(38502);
function tZ() {
    let e = tH.A.getWidgetByType(Q.uss.VOICE_V3);
    if (null == e) return null;
    let t = tW.A.getWidget(e.id);
    return null != t && (0, tK.ZO)(t) ? t : null;
}
i(392164);
let tQ = (0, o.sN)(u.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => g.intl.string(g.t["X/Uyzc"]),
    minValue: 0,
    maxValue: 25,
    markers: [0, 5, 10, 15, 20, 25],
    onMarkerRender: (e) => (e < 1 ? g.intl.string(g.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = tZ();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < 1 ? g.intl.string(g.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = tZ();
        null != t &&
            (e < 1
                ? (0, tY.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, tY.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
var tq = i(43990),
    tJ = i(450740),
    t$ = i(968898),
    t0 = i(95701),
    t1 = i(889227),
    t2 = i(288737),
    t3 = i(287809),
    t4 = i(403362);
function t5(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new t2.A({
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
        user: new t1.A({ id: l, username: e }),
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
let t8 = (0, o.E2)(u.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
        Component: function () {
            let e,
                t = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
                {
                    avatarSizeMode: i,
                    displayNameMode: n,
                    displayUserMode: l,
                } = (0, O.cf)([eI.default], () => ({
                    avatarSizeMode: eI.default.getAvatarSizeMode(),
                    displayNameMode: eI.default.getDisplayNameMode(),
                    displayUserMode: eI.default.getDisplayUserMode(),
                })),
                [s] = N.useState(() => [
                    t5(g.intl.string(g.t.C0ZDvo), !0, !1),
                    t5(g.intl.string(g.t.iOtj8E), !1, !1, !0),
                    t5(g.intl.string(g.t["0oqNgL"]), !1, !0),
                ]),
                r = (0, O.bG)([tH.A, tW.A], () => {
                    let e = tH.A.getWidgetByType(Q.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = tW.A.getWidget(e.id);
                    return null != t && (0, tK.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = t5(t.username)).user = t), e) : null, ...s].filter(t4.Vq),
                u = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                d = (0, p.jsx)(tq.N, {
                    theme: Q.NJ8.MIDNIGHT,
                    children: (e) =>
                        (0, p.jsxs)("div", {
                            className: ew()(eF.Y5, e),
                            children: [
                                (0, p.jsx)("div", {
                                    className: eF.kJ,
                                    children: (0, p.jsx)(tJ.DH, {
                                        id: "voice-widget",
                                        title: g.intl.string(g.t.KNJ6Vq),
                                        channel: (0, t0.createChannelRecord)({
                                            id: "123",
                                            name: "Test Channel",
                                            type: Q.rbe.GUILD_VOICE,
                                            guild_id: "456",
                                        }),
                                        overlayVoiceStates: u,
                                        displayNameMode: n,
                                        displayUserMode: l,
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
                                (0, p.jsxs)("div", {
                                    className: eF.R$,
                                    children: [
                                        (0, p.jsx)(t$.Pl, { children: g.intl.string(g.t.KNJ6Vq) }),
                                        (0, p.jsx)(t$.CS, {}),
                                        (0, p.jsx)(t$.O0, { id: r?.id ?? "voice-widget", pinned: r?.pinned ?? !1 }),
                                    ],
                                }),
                            ],
                        }),
                });
            return (0, p.jsx)("div", { className: eF.F9, children: d });
        },
        useSearchTerms: () => [],
    }),
    t6 = (0, o.zZ)(u.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => g.intl.string(g.t.r1TZfh),
        buildLayout: () => [t8, tF, tz, tX, tQ],
    });
var t7 = i(49999),
    t9 = i(192391);
function ie() {
    let [e, t] = (0, eT.kn)([eE.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
    return ((0, eg.Ay)(() => () => {
        t(t7.i.AUTO_DISMISS);
    }),
    e !== eE.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, p.jsxs)(p.Fragment, {
              children: [
                  (0, p.jsxs)("div", {
                      className: t9.xC,
                      children: [
                          (0, p.jsx)("div", {
                              children: (0, p.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/10b8ab47f3371360233219f4b20fa86155553ddb810ceb8688654738bf7e15d0.png",
                                  alt: g.intl.string(g.t.mdXZh1),
                                  className: t9.tl,
                              }),
                          }),
                          (0, p.jsx)("div", {
                              children: (0, p.jsxs)("div", {
                                  className: t9.vJ,
                                  children: [
                                      (0, p.jsx)(eA.D, {
                                          variant: "heading-xl/medium",
                                          color: "text-strong",
                                          children: g.intl.string(g.t.jzjJQg),
                                      }),
                                      (0, p.jsx)(M.E, {
                                          variant: "text-md/normal",
                                          color: "text-muted",
                                          children: g.intl.string(g.t["5dOfxb"]),
                                      }),
                                  ],
                              }),
                          }),
                          (0, p.jsx)("div", {
                              children: (0, p.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/2aa57f16c71171fc8e0edb8cca60735f1192195344d17fa667de6d3ca8163ba0.png",
                                  alt: g.intl.string(g.t.mdXZh1),
                                  className: t9.lh,
                              }),
                          }),
                          (0, p.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: t9.VV,
                              children: (0, p.jsx)(eh.$, {
                                  variant: "primary",
                                  text: g.intl.string(g.t.Q26diF),
                                  onClick: () => void t(t7.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, p.jsx)(eN.A, { className: t9.yF }),
              ],
          });
}
function it() {
    let e = (0, O.bG)([ef.A], () => ef.A.enabled),
        t = (0, ex.Mn)("OverlayStreamerModeNotice");
    return e && t
        ? (0, p.jsxs)(p.Fragment, {
              children: [
                  (0, p.jsx)(y.w, {
                      type: "warning",
                      children: g.intl.format(g.t.fuEX5B, {
                          onClick: () => (0, ej.openUserSettings)(u.X.STREAMER_MODE_CATEGORY),
                      }),
                  }),
                  (0, p.jsx)(eN.A, { className: t9.yF }),
              ],
          })
        : null;
}
let ii = (0, o.t_)(u.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                eP(),
                eb.Ay.addChangeListener(eP),
                ep.A.addChangeListener(eP),
                eI.default.addChangeListener(eP),
                eC.default.addChangeListener(eP),
                ev.isPlatformEmbedded && (0, eS.a2)(),
                () => {
                    eb.Ay.removeChangeListener(eP),
                        ep.A.removeChangeListener(eP),
                        eI.default.removeChangeListener(eP),
                        eC.default.removeChangeListener(eP),
                        ev.isPlatformEmbedded && (0, eS.e0)();
                }
            );
        },
        useTitle: () => g.intl.string(g.t["9cb1Uz"]),
        decoration: {
            type: e_.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(ie, {}), (0, p.jsx)(it, {})] });
            },
        },
        buildLayout: () => [tI, tU, t6, tB],
    }),
    il = (0, o.i4)(u.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["9cb1Uz"]),
        icon: em.l,
        usePredicate: ey.b_,
        buildLayout: () => [ii],
    });
var is = i(687966),
    ir = i(396478),
    ia = i(270003),
    io = i(227309),
    iu = i(363195),
    id = i(1215),
    ic = i(39623),
    ig = i(952270),
    im = i(138134),
    iA = i(414079),
    ih = i(29160),
    iE = i(650583),
    iT = i(402627),
    iS = i(653307);
let ix = (0, ev.isWindows)();
function ip(e) {
    let { rawGame: t, nowPlaying: n = !1, isOverride: l, subgames: s, isSubgame: r = !1, parentGame: a } = e,
        o = (0, O.cf)([eq.Ay, tc.A, tg.A], () => (0, eq.xU)(t, eq.Ay, tc.A, tg.A)),
        { canToggleDetection: u, isCurrentGameDetectionEnabled: d } = (0, O.cf)([eq.Ay], () => ({
            canToggleDetection: null == a || eq.Ay.isDetectionEnabled(a),
            isCurrentGameDetectionEnabled: eq.Ay.isDetectionEnabled(o),
        })),
        c = (0, O.bG)([eq.Ay], () => eq.Ay.getVisibleGame()),
        [m, A] = N.useState(!1),
        h = N.useMemo(
            () =>
                (0, tN.n1)(o)
                    ? r
                        ? o.gameName
                        : g.intl.formatToPlainString(g.t.G6BGdx, { subgameName: o.gameName })
                    : o.name,
            [o, r],
        ),
        [E, T] = N.useState(h ?? "???"),
        S = ew()(iS.tR, {
            [iT.LO]: !n,
            [iT.Rw]: n,
            [iT.FB]: null != o && n,
            [iT.xL]: r,
            [iT.fG]: null != s && s.length > 0,
        });
    function x() {
        null != s && s.length > 0 && d
            ? (0, f.openModalLazy)(async () => {
                  let { Modal: e } = await i.e("4823").then(i.bind(i, 158954));
                  return (t) =>
                      (0, p.jsx)(e, {
                          ...t,
                          title: g.intl.formatToPlainString(g.t.PZ4fKc, { platform: h }),
                          subtitle: g.intl.formatToPlainString(g.t.ZIQbfb, { platform: h }),
                          actions: [
                              { text: g.intl.string(g.t["ETE/oC"]), onClick: () => t.onClose(), variant: "secondary" },
                              {
                                  text: g.intl.string(g.t.Fmjztz),
                                  onClick: () => {
                                      e3.Ay.toggleDetection(o), t.onClose();
                                  },
                                  variant: "primary",
                              },
                          ],
                      });
              })
            : e3.Ay.toggleDetection(o);
    }
    let _ = null != c && (0, eq.Es)(o) === (0, eq.Es)(c),
        b = (null != a && a.id === c?.id) || _ || (null != s && s.some((e) => e.id === c?.id));
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsxs)("div", {
                className: S,
                children: [
                    (0, p.jsxs)("div", {
                        className: ew()(iT.$K, iS.Vd),
                        children: [
                            o.verified && !l
                                ? (0, p.jsxs)("div", {
                                      className: iT.HS,
                                      children: [
                                          (0, p.jsx)("div", { className: iT.mO, children: h }),
                                          (0, p.jsx)(e0.m, {
                                              text: g.intl.string(g.t["4PJP5p"]),
                                              children: (0, p.jsx)(e7.A, {
                                                  className: iT.qf,
                                                  size: 18,
                                                  color: w.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, p.jsx)(e1.U, {
                                                      size: "custom",
                                                      width: 18,
                                                      height: 18,
                                                      color: w.A.unsafe_rawColors.WHITE.css,
                                                  }),
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, p.jsx)("input", {
                                      className: ew()(iT.mO, iT.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: E,
                                      onBlur: function () {
                                          o.name !== E && e3.Ay.editName(o, E);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === iE.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
                                      },
                                      onChange: (e) => T(e.target.value),
                                  }),
                            (function () {
                                let e,
                                    t,
                                    { played: i, exePath: l } = o;
                                return (
                                    n || _
                                        ? (e = g.intl.string(g.t.VbV5dv))
                                        : null != i && "" !== i && (e = g.intl.format(g.t["gGeOE+"], { when: i })),
                                    (0, p.jsx)("div", {
                                        className: iT.GN,
                                        children: (0, p.jsx)(ih.A, {
                                            hoverText:
                                                null != l && "" !== l
                                                    ? ((t = l.replace(/^file:\/\//i, "")),
                                                      (0, ev.isWindows)() && (t = t.toUpperCase()),
                                                      t)
                                                    : "",
                                            children: e,
                                        }),
                                    })
                                );
                            })(),
                        ],
                    }),
                    l || m
                        ? null
                        : (0, p.jsx)("div", {
                              className: ew()(iS.tR, iS.oA, iS.LT, iT.E3),
                              children: (0, p.jsx)(e0.m, {
                                  text: g.intl.string(g.t["y0B+lo"]),
                                  children: (0, p.jsx)(V.D, {
                                      "aria-label": g.intl.string(g.t["y0B+lo"]),
                                      className: iT.ym,
                                      onClick: function () {
                                          if (m) return;
                                          let e = null != o.id ? tc.A.getDetectableGame(o.id) : null;
                                          X.default.track(Q.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
                                              application_id: e?.id,
                                              game_name: (0, tN.n1)(o) ? o.gameName : o.name,
                                          }),
                                              A(!0),
                                              (0, f.openModalLazy)(async () => {
                                                  let { default: t } = await Promise.all([
                                                      i.e("56600"),
                                                      i.e("27495"),
                                                  ]).then(i.bind(i, 651930));
                                                  return (i) =>
                                                      (0, p.jsx)(t, {
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
                                      children: (0, p.jsx)(im.i, {
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
                                    ? (0, p.jsx)(ic.b, {
                                          size: "md",
                                          color: "currentColor",
                                          className: iT.Lj,
                                          colorClass: iT.GS,
                                      })
                                    : (0, p.jsx)(ig.G, {
                                          size: "md",
                                          color: "currentColor",
                                          className: u ? iT.$V : iT.zN,
                                          colorClass: iT.GS,
                                      });
                        return (0, p.jsx)("div", {
                            className: ew()(iS.tR, iS.oA, iS.LT, iT.E3),
                            children: (0, p.jsx)(e0.m, {
                                text: g.intl.string(g.t.QmitzM),
                                children: u
                                    ? (0, p.jsx)(V.D, {
                                          "aria-label": g.intl.string(g.t.QmitzM),
                                          className: iT.ym,
                                          onClick: x,
                                          children: t,
                                      })
                                    : t,
                            }),
                        });
                    })(),
                    (function () {
                        if (!ix || null != a) return null;
                        let { overlay: e, overlayWarn: t } = o,
                            i = e
                                ? (0, p.jsx)(e2.k, {
                                      size: "md",
                                      color: "currentColor",
                                      className: iT.Lj,
                                      colorClass: iT.GS,
                                  })
                                : (0, p.jsx)(id.n, {
                                      size: "md",
                                      color: "currentColor",
                                      className: iT.$V,
                                      colorClass: iT.GS,
                                  }),
                            n = t
                                ? (0, p.jsx)(e0.m, {
                                      text: g.intl.string(g.t.Vfw2L5),
                                      children: (0, p.jsx)("i", { className: iT.kb }),
                                  })
                                : null;
                        return (0, p.jsxs)("div", {
                            className: ew()(iS.tR, iS.oA, iS.LT, iT.E3),
                            children: [
                                n,
                                (0, p.jsx)(e0.m, {
                                    text: g.intl.string(g.t["1+O+Tu"]),
                                    children: (0, p.jsx)(V.D, {
                                        "aria-label": g.intl.string(g.t["1+O+Tu"]),
                                        className: iT.ym,
                                        onClick: () => {
                                            var t;
                                            return (t = !e), void e3.Ay.toggleOverlay(o, t, t);
                                        },
                                        children: i,
                                    }),
                                }),
                            ],
                        });
                    })(),
                    (n && !l) || b
                        ? null
                        : (0, p.jsx)(iA.A, {
                              className: iT.LS,
                              onClick: function () {
                                  e3.Ay.deleteEntry(o),
                                      s?.forEach((e) => {
                                          e3.Ay.deleteEntry(e);
                                      });
                              },
                          }),
                ],
            }),
            null != s &&
                s.length > 0 &&
                !n &&
                (0, p.jsx)("div", {
                    className: iT.AQ,
                    children: s.map((e, t) =>
                        (0, p.jsxs)(
                            N.Fragment,
                            {
                                children: [
                                    (0, p.jsx)(ip, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== s.length - 1 && (0, p.jsx)("div", { className: iT.PQ }),
                                ],
                            },
                            (0, eq.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
i(321073);
let iN = (0, i(583613).L_)(function () {
    for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
    return new Set(t.map((e) => e.exePath));
});
function i_() {
    let e = (0, O.yK)([eq.Ay], () => eq.Ay.getGamesSeen(!1)),
        t = (0, O.bG)([eq.Ay], () => iN(...eq.Ay.getOverrides()));
    N.useEffect(() => ((0, eS.a2)(), eS.e0), []);
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
var ib = i(818050);
function iC() {
    let e = (0, O.bG)([iu.A], () => iu.A.theme);
    return (0, p.jsxs)(ir.pp, {
        theme: e,
        className: ib.eT,
        children: [
            (0, p.jsx)(ir.G8, { darkSrc: i(839628), lightSrc: i(446404), width: 430, height: 250 }),
            (0, p.jsx)(ir.SG, { children: g.intl.string(g.t["1yiJwn"]) }),
        ],
    });
}
function iI() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: i } = i_();
    return 0 === e.length
        ? (0, p.jsx)(iC, {})
        : (0, p.jsx)(ia.n, {
              children: (0, p.jsx)("div", {
                  children: e.map((e) =>
                      (0, p.jsx)(
                          ip,
                          { rawGame: e, isOverride: i.has(e.exePath), subgames: e.id === io.a7 ? t : void 0 },
                          (0, eq.Es)(e),
                      ),
                  ),
              }),
          });
}
let iv = (0, o.E2)(u.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, p.jsx)(iI, {}),
});
var ij = i(424994);
let iy = (0, o.zZ)(u.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [iv],
    useTitle: () => g.intl.string(g.t.jCOdvx),
    useSubtitle: () => g.intl.format(g.t.KPA3m9, { igdbLink: ij.s8 }),
});
var iO = i(305866),
    iR = i(783878),
    iL = i(404778),
    iD = i(133801),
    iG = i(604949);
function iP(e) {
    let { onClose: t } = e,
        i = (0, O.bG)([eq.Ay], () => eq.Ay.getCandidateGames()),
        [n, l] = N.useState(null),
        s = i.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, p.jsxs)(iO.l, {
        className: ew()(iD.H, iG.Y_),
        "aria-label": g.intl.string(g.t.GTCx0p),
        children: [
            (0, p.jsx)(iR.Z, {
                selectionMode: "single",
                placeholder: g.intl.string(g.t.XqMe3N),
                value: n,
                options: s,
                onSelectionChange: function (e) {
                    l(e);
                },
            }),
            (0, p.jsx)(iL.c, { className: ew()(ib.Ot, ib.QB) }),
            (0, p.jsxs)("div", {
                className: ew()(iD.o, iS.xM),
                children: [
                    (0, p.jsx)(B.Q, { variant: "secondary", text: g.intl.string(g.t["ETE/oC"]), onClick: t }),
                    (0, p.jsx)(eh.$, {
                        variant: "primary",
                        text: g.intl.string(g.t.GTCx0p),
                        disabled: null == n,
                        onClick: function () {
                            null != n && (e3.Ay.addGame(n.pid, n.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
var iU = i(290280);
let iV = (0, o.E2)(u.X.REGISTERED_GAMES_ADD_GAME_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.GTCx0p)],
    Component: () => {
        let e = N.useRef(null);
        return (0, p.jsxs)("div", {
            className: ew()(iU.a, ib.Gf),
            children: [
                (0, p.jsx)("span", { children: g.intl.string(g.t.xwhoqM) }),
                (0, p.jsx)(G.Y, {
                    targetElementRef: e,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, p.jsx)(iP, { onClose: t });
                    },
                    align: "center",
                    position: "bottom",
                    children: (t) =>
                        (0, p.jsx)(B.Q, {
                            ...t,
                            buttonRef: e,
                            variant: "primary",
                            textVariant: "text-sm/medium",
                            text: g.intl.string(g.t.GjgdXe),
                        }),
                }),
            ],
        });
    },
});
function iM() {
    return (0, p.jsx)("div", {
        className: ew()(iS.tR, iT.eS, iT.Rw),
        children: (0, p.jsxs)("div", {
            className: ew()(iT.$K, iS.Vd),
            children: [
                (0, p.jsx)("div", { className: iT.mO, children: g.intl.string(g.t.H68X9x) }),
                (0, p.jsx)("div", { className: iT.GN, children: g.intl.string(g.t.T5Ilmw) }),
            ],
        }),
    });
}
let ik = (0, o.E2)(u.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t["MY9/Oe"])],
        Component: () => {
            let { robloxSubgameHistory: e, overrideExePaths: t } = i_(),
                i = (0, O.bG)([eq.Ay], () => eq.Ay.getVisibleGame());
            return null != i
                ? (0, p.jsx)(
                      ip,
                      {
                          rawGame: i,
                          isOverride: t.has(i.exePath),
                          nowPlaying: !0,
                          subgames: i.id === io.a7 ? e : void 0,
                      },
                      (0, eq.Es)(i),
                  )
                : (0, p.jsx)(iM, {});
        },
    }),
    iw = (0, o.zZ)(u.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => g.intl.string(g.t["MY9/Oe"]),
        buildLayout: () => [ik, iV],
    }),
    iB = (0, o.t_)(u.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => g.intl.string(g.t.AVDyEj),
        buildLayout: () => [iw, iy],
    }),
    iF = (0, o.i4)(u.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.AVDyEj),
        icon: is._,
        usePredicate: ey.Pi,
        buildLayout: () => [iB],
    }),
    iz = (0, o.WI)(u.X.ACTIVITY_SECTION, {
        useTitle: () => g.intl.string(g.t.SmHCFf),
        buildLayout: () => [ec, iF, il],
    });
var iX = i(550640),
    iY = i(247928),
    iH = i(97808),
    iK = i(778712),
    iW = i(775602),
    iZ = i(320095),
    iQ = i(963852),
    iq = i(763754),
    iJ = i(20851),
    i$ = i(486020),
    i0 = i(585001);
let i1 = new t0.nA({ id: "1337", guild_id: "1337", type: Q.rbe.GUILD_TEXT, name: "preview" }),
    i2 = [
        { status: Q.clD.IDLE, discriminator: "2" },
        { status: Q.clD.DND, discriminator: "3" },
        { status: Q.clD.ONLINE, mobile: !0, discriminator: "4" },
    ];
function i3(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (0, iZ.rh)({ ...(0, iQ.Ay)({ channelId: i1.id, content: e }), state: Q.cmJ.SENT, reactions: t });
}
var i4 = i(180807);
let i5 = (0, o.zD)(u.X.ENABLE_LEGACY_CHAT_INPUT, {
        useTitle: () => g.intl.string(g.t.TZ2hZH),
        useSubtitle: () => g.intl.string(g.t.Q7wgHc),
        useValue: () => c.D_.useSetting(),
        setValue: (e) => c.D_.updateSetting(e),
    }),
    i8 = (0, o.zD)(u.X.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS, {
        useTitle: () => g.intl.string(g.t.XYvMIX),
        useSubtitle: () => g.intl.string(g.t.T0rbtM),
        useValue: c._z.useSetting,
        setValue: c._z.updateSetting,
    });
var i6 = i(100767),
    i7 = i(106236),
    i9 = i(113494),
    ne = i(782134),
    nt = i(54570),
    ni = i(8880),
    nn = i(75804);
let nl = eR().debounce((e) => {
    (0, nt.zU)(e);
}, 250);
function ns() {
    let [e, t] = N.useState(!1);
    return (
        (0, eg.l0)(() => (0, nt.pr)()),
        (0, p.jsx)(eh.$, {
            text: g.intl.string(g.t.SKNnqq),
            icon: e ? i9.E : ne.u,
            size: "sm",
            onClick: () => {
                if (e) {
                    (0, nt.pr)(), t(!1);
                    return;
                }
                (0, nt.AU)(
                    g.intl.string(g.t.PKaNJL),
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
let nr = (0, o.E2)(u.X.TTS_PLAYBACK_RATE, {
        useSearchTerms: () => [g.intl.string(g.t.lsW5Ev)],
        Component: function () {
            let e = (0, O.bG)([ni.A], () => ni.A.speechRate);
            return (0, p.jsxs)(R.B, {
                gap: 16,
                children: [
                    (0, p.jsx)(i7.A, {
                        label: g.intl.string(g.t.lsW5Ev),
                        description: g.intl.string(g.t.Ci4wMS),
                        markers: nn.P,
                        initialValue: e,
                        defaultValue: 1,
                        stickToMarkers: !0,
                        onValueChange: nl,
                        onValueRender: (e) => `x${e.toFixed(2)}`,
                        onMarkerRender: (e) =>
                            0 === e
                                ? (0, p.jsx)(M.E, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: g.intl.string(g.t["493lwX"]),
                                  })
                                : 10 === e
                                  ? (0, p.jsx)(M.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: g.intl.string(g.t.ZSZEdS),
                                    })
                                  : 1 === e
                                    ? (0, p.jsx)(M.E, {
                                          variant: "text-xs/medium",
                                          color: "text-feedback-positive",
                                          children: "x1.0",
                                      })
                                    : e % 1 == 0
                                      ? ""
                                      : void 0,
                    }),
                    (0, p.jsx)(ns, {}),
                ],
            });
        },
        usePredicate: () => i6.$j,
    }),
    na = (0, o.zZ)(u.X.AUDIO_AND_SCREEN_READER_CATEGORY, {
        useTitle: () => g.intl.string(g.t.XVR0Rb),
        buildLayout: () => [nr, i8, i5],
    }),
    no = (0, o.AK)(u.X.ACCESSIBILITY_TO_DISPLAY_NAVIGATOR, {
        useSubtitle: () => g.intl.string(g.t.aTfeGK),
        destinationKey: u.X.APPEARANCE_PANEL,
    }),
    nu = (0, o.gN)(u.X.COLOR_AND_CONTRAST_RELATED_SETTINGS, { buildLayout: () => [no] });
var nd = i(955572);
let nc = (0, o.zD)(u.X.DESATURATE_CUSTOM_COLORS, {
    useTitle: () => g.intl.string(g.t.OCJg5f),
    useSubtitle: () => g.intl.string(g.t.HEO0s3),
    useValue: () => (0, O.bG)([iW.A], () => iW.A.desaturateUserColors),
    setValue: () => (0, nd.YV)(),
});
var ng = i(652525);
let nm = (0, o.zD)(u.X.ENABLE_CUSTOM_CURSOR, {
        useTitle: () => g.intl.string(g.t["+Isihb"]),
        useSubtitle: () => g.intl.string(g.t.nNZ1Tz),
        useValue: () => (0, O.bG)([iW.A], () => iW.A.enableCustomCursor),
        setValue: (e) => (0, nd.ts)(e),
        usePredicate: () => (0, ng.t)("EnableCustomCursorSetting"),
    }),
    nA = (0, o.zD)(u.X.ENABLE_SWITCH_ICONS, {
        useTitle: () => g.intl.string(g.t["S3z+pV"]),
        useSubtitle: () => g.intl.string(g.t["3QuI9+"]),
        useValue: () => (0, O.bG)([iW.A], () => iW.A.isSwitchIconsEnabled),
        setValue: (e) => (0, nd.Gm)(e),
        hasIcon: !0,
    }),
    nh = (0, o.zD)(u.X.HIGH_CONTRAST_MODE, {
        useTitle: () => g.intl.string(g.t.aZlePv),
        useSubtitle: () => g.intl.string(g.t["v2qF8+"]),
        useValue: () => (0, O.bG)([iW.A], () => iW.A.isHighContrastModeEnabled),
        setValue: (e) => (0, nd.uh)(e ? iW._.HIGH : iW._.DEFAULT),
        getDismissibleBadges: () => [
            { badgeType: e_.Xi.NEW, dismissibleContent: eE.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE },
        ],
    });
var nE = i(406360),
    nT = i(964404);
let nS = (0, o.Qx)(u.X.HIGH_DYNAMIC_RANGE, {
        useTitle: () => g.intl.string(g.t.nemtgW),
        useSubtitle: () => g.intl.string(g.t["O/Gjvn"]),
        usePersistentBadge: () => ({ badgeType: e_.Xi.BETA }),
        useOptions: function () {
            return N.useMemo(
                () => [
                    { name: g.intl.string(g.t.D5Fma9), desc: g.intl.string(g.t.Qj75ck), value: "no-limit" },
                    { name: g.intl.string(g.t.ldcGIH), desc: g.intl.string(g.t["+V/bDk"]), value: "standard" },
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
            return (0, O.bG)([nT.Ay], () => nT.Ay.hdrDynamicRange);
        },
        useSearchTerms: () => ["HDR", g.intl.string(g.t["O/Gjvn"])],
    }),
    nx = (0, o.Hn)(u.X.ROLE_STYLE, {
        useTitle: () => g.intl.string(g.t.uSOPWm),
        useSubtitle: () => g.intl.string(g.t.u7fFKS),
        useOptions: () => [
            { id: "username", label: g.intl.string(g.t.eDdMzJ), value: "username" },
            { id: "dot", label: g.intl.string(g.t.rdmJp0), value: "dot" },
            { id: "hidden", label: g.intl.string(g.t.Ji2EVJ), value: "hidden" },
        ],
        useValue: () => (0, O.bG)([iW.A], () => iW.A.roleStyle),
        setValue: (e) => (0, nd.IX)(e),
    });
(0, o.Qx)(u.X.ROLE_STYLE, {
    useTitle: () => g.intl.string(g.t.uSOPWm),
    useSubtitle: () => g.intl.string(g.t["86hjzQ"]),
    useOptions: () => [
        { name: g.intl.string(g.t.YEOEi6), value: "username" },
        { name: g.intl.string(g.t.mQaro3), value: "dot" },
        { name: g.intl.string(g.t.Ji2EVJ), value: "hidden" },
    ],
    useValue: () => (0, O.bG)([iW.A], () => iW.A.roleStyle),
    setValue: (e) => (0, nd.IX)(e),
});
let np = (0, o.sN)(u.X.SATURATION, {
    useTitle: () => g.intl.string(g.t["5PWWCY"]),
    useSubtitle: () => g.intl.string(g.t.xf5S6P),
    markers: Q.hH7.SATURATION_INCREMENTS,
    onMarkerRender: (e) => ((100 * e) % 2 == 0 ? `${100 * e}%` : void 0),
    stickToMarkers: !0,
    minValue: 0,
    maxValue: 1,
    getInitialValue: () => iW.A.saturation,
    asValueChanges: (e) => (0, nd.HU)(e),
});
var nN = i(839214),
    n_ = i(502229);
let nf = (0, nN.D)(() => ({ syncEnabled: null, updateTimeout: null })),
    nb = (0, o.zD)(u.X.SYNC_FORCED_COLORS, {
        useTitle: () => g.intl.string(g.t.cguiec),
        useSubtitle: () => g.intl.format(g.t.GwEVE2, { learnMoreLink: ta.A.getArticleURL(Q.MVz.FORCED_COLORS) }),
        useValue: () => {
            let e = (0, O.bG)([iW.A], () => iW.A.syncForcedColors);
            return (
                (0, e8.Ay)(() => {
                    nf.setState({ syncEnabled: iW.A.syncForcedColors });
                }),
                nf.useState((e) => e.syncEnabled) ?? e
            );
        },
        setValue: (e) => {
            let { updateTimeout: t } = nf.getState();
            if (null != t) {
                clearTimeout(t), nf.setState({ syncEnabled: e, updateTimeout: null });
                return;
            }
            if (e === iW.A.syncForcedColors) return void nf.setState({ syncEnabled: e });
            let i = setTimeout(() => {
                (0, nd.D3)(e), nf.setState({ updateTimeout: null });
            }, 150);
            nf.setState({ syncEnabled: e, updateTimeout: i });
        },
        usePredicate: () => (0, n_.D)(),
    }),
    nC = (0, o.zZ)(u.X.COLOR_AND_CONTRAST_CATEGORY, {
        useTitle: () => g.intl.string(g.t.JqvyiY),
        buildLayout: () => [np, nc, nh, nm, nb, nS, nx, nA, nu],
    });
var nI = i(397438),
    nv = i(355097);
function nj(e) {
    return (0, O.bG)([nI.A], () =>
        (function (e) {
            switch (e) {
                case nv._A.REDUCED_MOTION:
                    return g.intl.format(g.t["1dT9V4"], {});
                case nv._A.REDUCED_MOTION_STICKERS:
                    return g.intl.string(g.t["2ExvRu"]);
                default:
                    return;
            }
        })(nI.A.getAppliedOverrideReasonKey(e)),
    );
}
let ny = (0, o.zD)(u.X.ANIMATE_EMOJIS, {
        useTitle: () => g.intl.string(g.t.iIaOlc),
        useSubtitle: () => nj("animateEmoji"),
        useValue: () => c.Sf.useSetting(),
        setValue: (e) => c.Sf.updateSetting(e),
    }),
    nO = (0, o.zD)(u.X.ANIMATE_GIFS, {
        useTitle: () => g.intl.string(g.t.wqsK7q),
        useSubtitle: () => nj("gifAutoPlay"),
        useValue: () => c.kt.useSetting(),
        setValue: (e) => c.kt.updateSetting(e),
    });
var nR = i(823894);
let nL = (0, o.Qx)(u.X.ANIMATE_STICKERS, {
        useTitle: () => g.intl.string(g.t.sBHIh0),
        useSubtitle: () => nj("animateStickers"),
        useOptions: () => [
            { name: g.intl.string(g.t["Xp+X2U"]), value: nR.BJ.ALWAYS_ANIMATE },
            { name: g.intl.string(g.t.IlLT7e), desc: g.intl.string(g.t.bIW9Tl), value: nR.BJ.ANIMATE_ON_INTERACTION },
            { name: g.intl.string(g.t.IGu8x3), value: nR.BJ.NEVER_ANIMATE },
        ],
        useValue: () => c.S0.useSetting(),
        setValue: (e) => c.S0.updateSetting(e),
    }),
    nD = (0, o.zD)(u.X.REDUCED_MOTION, {
        useTitle: () => g.intl.string(g.t.b3XBzg),
        useSubtitle: () => g.intl.format(g.t.XqvxJc, { helpdeskArticle: ta.A.getArticleURL(Q.MVz.REDUCED_MOTION) }),
        useValue: () => (0, O.bG)([iW.A], () => iW.A.useReducedMotion),
        setValue: (e) => (0, nd.qz)(e ? "reduce" : "no-preference"),
    }),
    nG = (0, o.zD)(u.X.SYNC_REDUCED_MOTION, {
        useTitle: () => g.intl.string(g.t.oL55A6),
        useValue: () => (0, O.bG)([iW.A], () => "auto" === iW.A.rawPrefersReducedMotion),
        setValue: (e) => (0, nd.qz)(e ? "auto" : iW.A.systemPrefersReducedMotion),
    }),
    nP = (0, o.zZ)(u.X.MOTION_CATEGORY, {
        useTitle: () => g.intl.string(g.t.e3TR1b),
        buildLayout: () => [nD, nG, nO, ny, nL],
    });
var nU = i(688810),
    nV = i(259065),
    nM = i(864386);
let nk = (0, o.zD)(u.X.DISPLAY_NAME_STYLES, {
        useTitle: () => g.intl.string(nM.default["2gFUEw"]),
        useSubtitle: () => {
            let { analyticsLocations: e } = (0, nU.Ay)();
            return g.intl.format(nM.default.aEax6P, {
                onClickOpenModal() {
                    (0, nV.L)({ analyticsLocations: e });
                },
            });
        },
        useValue: () => (0, O.bG)([iW.A], () => iW.A.displayNameStylesEnabled),
        setValue: (e) => (0, nd.Dm)(e),
    }),
    nw = (e) => `${e.toFixed(0)}px`,
    nB = (0, o.sN)(u.X.APPEARANCE_FONT_SCALING, {
        useTitle: () => g.intl.string(g.t.rT3Pq5),
        useSubtitle: () => g.intl.string(g.t.LXUhen),
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
    nF = (0, o.zD)(u.X.UNDERLINE_LINKS, {
        useTitle: () => g.intl.string(g.t.OLZFB8),
        useSubtitle: () => g.intl.string(g.t.DIX3ke),
        useValue: () => (0, O.bG)([iW.A], () => iW.A.alwaysShowLinkDecorations),
        setValue: (e) => (0, nd.kI)(e),
    }),
    nz = (0, o.zZ)(u.X.TEXT_READABILITY_CATEGORY, {
        useTitle: () => g.intl.string(g.t["bxh/R7"]),
        buildLayout: () => [nB, nF, nk],
    }),
    nX = (0, o.Qx)(u.X.APPEARANCE_UI_DENSITY, {
        useTitle: () => g.intl.string(g.t["C/5V0A"]),
        useSubtitle: () => g.intl.string(g.t.QLZhYk),
        useSearchTerms: () => ["List Spacing"],
        useOptions: () => [
            { name: g.intl.string(g.t["7iegX4"]), value: _.NS.COMPACT },
            { name: g.intl.string(g.t.bBvAEH), value: _.NS.DEFAULT },
            { name: g.intl.string(g.t["4cuYHx"]), value: _.NS.COZY },
        ],
        useValue: () => c.Xi.useSetting(),
        setValue: (e) => {
            e !== _.NS.UNSET_UI_DENSITY && c.Xi.updateSetting(e);
        },
    }),
    nY = "cozy",
    nH = "compact",
    nK = (0, o.Qx)(u.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
        useTitle: () => g.intl.string(g.t.nKRoPv),
        useSubtitle: () => g.intl.string(g.t.QntEEG),
        useSearchTerms: () => [g.intl.string(g.t.ZEoGMd)],
        useOptions: () => [
            { name: g.intl.string(g.t.Jqj4cZ), value: nY },
            { name: g.intl.string(g.t["1JNcPS"]), value: nH },
        ],
        useValue: () => (c.hH.useSetting() ? nH : nY),
        setValue: (e) => {
            c.hH.updateSetting(e === nH), (0, nd.AC)();
        },
    });
var nW = i(381941);
let nZ = (e) => `${e.toFixed(0)}px`,
    nQ = (0, o.sN)(u.X.APPEARANCE_MESSAGE_GROUP_SPACING, {
        useTitle: () => g.intl.string(g.t.Q6lKkg),
        useSubtitle: () => g.intl.string(g.t.p7eUrb),
        markers: nW.qh,
        stickToMarkers: !0,
        minValue: nW.qh["0"],
        maxValue: nW.qh[nW.qh.length - 1],
        useDefaultValue: () => (c.hH.useSetting() ? nW.y5 : nW.ES),
        getInitialValue: () => {
            let e = iW.A.messageGroupSpacing,
                t = c.hH.getSetting();
            return null != e ? e : t ? nW.y5 : nW.ES;
        },
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
var nq = i(775121);
let nJ = (0, o.sN)(u.X.APPEARANCE_ZOOM, {
        usePredicate: () => ev.isPlatformEmbedded,
        useTitle: () => g.intl.string(g.t.i19n5L),
        useSubtitle: () => g.intl.format(g.t["x9PK/3"], { modKey: nq.A.modKey }),
        markers: Q.hH7.ZOOM_SCALES,
        stickToMarkers: !0,
        minValue: Q.hH7.ZOOM_SCALES["0"],
        maxValue: Q.hH7.ZOOM_SCALES[Q.hH7.ZOOM_SCALES.length - 1],
        useDefaultValue: () => Q.hH7.ZOOM_DEFAULT,
        getInitialValue: () => iW.A.zoom,
        useExternalValue: () => (0, O.bG)([iW.A], () => iW.A.zoom),
        onValueRender: (e) => `${e.toFixed(0)}%`,
        setValue: (e) => (0, nd.Qp)(e),
        useSearchTerms: () => [g.intl.string(g.t.ip0uSf)],
    }),
    n$ = (0, o.zZ)(u.X.VISUAL_DENSITY_CATEGORY, {
        useTitle: () => g.intl.string(g.t.VKYWk8),
        buildLayout: () => [nX, nK, nQ, nJ],
    }),
    n0 = (0, o.t_)(u.X.ACCESSIBILITY_PANEL, {
        useTitle: () => g.intl.string(g.t.G0neg7),
        buildLayout: () => [nz, n$, nC, nP, na],
        decoration: {
            type: e_.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                let e = c.hH.useSetting(),
                    t = c.jW.useSetting(),
                    i = N.useMemo(
                        () => [
                            i3(
                                g.intl.formatToPlainString(g.t.BknJRT, {}),
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
                                g.intl.formatToPlainString(g.t["4rDfgM"], {
                                    link: "https://discord.com/accessibility",
                                }),
                            ),
                        ],
                        [t],
                    ),
                    n = (0, O.bG)([iW.A], () => iW.A.messageGroupSpacing);
                return (0, p.jsx)(iY.M, {
                    "aria-hidden": !0,
                    children: (0, p.jsxs)("section", {
                        children: [
                            (0, p.jsx)(eA.D, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                className: i0.Vf,
                                children: g.intl.string(g.t.RC22qg),
                            }),
                            (0, p.jsxs)(tx.Ip, {
                                className: i0.VH,
                                children: [
                                    (0, p.jsx)("ol", {
                                        className: i0.DZ,
                                        style: { gap: n },
                                        "aria-label": g.intl.string(g.t.xfjsEV),
                                        children: i.map((t) =>
                                            (0, p.jsx)(
                                                "li",
                                                {
                                                    children: (0, p.jsx)(iJ.A, {
                                                        message: t,
                                                        channel: i1,
                                                        compact: e,
                                                        author: { ...(0, iq.p_)(t), colorString: "#dd80f4" },
                                                    }),
                                                },
                                                t.id,
                                            ),
                                        ),
                                    }),
                                    (0, p.jsxs)("div", {
                                        className: i0.Jb,
                                        children: [
                                            (0, p.jsx)("div", {
                                                className: i0.HD,
                                                children: i2.map((e) => {
                                                    let { status: t, discriminator: i, mobile: n = !1 } = e;
                                                    return (0, p.jsx)(
                                                        iH.eu,
                                                        {
                                                            status: t,
                                                            isMobile: n,
                                                            size: iK._3.SIZE_32,
                                                            src: i$.Ay.getDefaultAvatarURL(void 0, i),
                                                            "aria-label": g.intl.string(g.t.VKE5TK),
                                                        },
                                                        t,
                                                    );
                                                }),
                                            }),
                                            (0, p.jsx)(eh.$, {
                                                text: g.intl.string(g.t["2RHHgz"]),
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
    n1 = (0, o.i4)(u.X.ACCESSIBILITY_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.G0neg7),
        icon: iX.c,
        useMenu: i4.A,
        buildLayout: () => [n0],
    });
var n2 = i(650809),
    n3 = i(636537),
    n4 = i(228366),
    n5 = i(74396),
    n8 = i(227542),
    n6 = i(55619),
    n7 = i(777666);
function n9() {
    return (0, p.jsx)(n7.JI, { text: g.intl.string(g.t.y2b7CA) });
}
var le = i(574381),
    lt = i(314116),
    li = i(19575),
    ln = i(208039);
let ll = (0, o.E2)(u.X.HARDWARE_ACCELERATION, {
    usePredicate: () => le.Av && !(0, le.cX)(),
    useSearchTerms: () => [g.intl.string(g.t["/HIxyY"]), g.intl.string(g.t.B0hqpb)],
    Component: function () {
        let [e] = N.useState(() => li.Ay.getEnableHardwareAcceleration()),
            t = g.intl.string(g.t["/HIxyY"]),
            i = g.intl.string(g.t.B0hqpb);
        return (0, p.jsxs)(R.B, {
            children: [
                (0, p.jsx)(L.d, { label: t, description: i, checked: e, onChange: ls }),
                !e && (0, p.jsx)(ln.A, { look: ln.k.WARNING, children: g.intl.string(g.t.j7S6IX) }),
            ],
        });
    },
});
function ls(e) {
    let t = e ? g.intl.format(g.t.LYXRxL, {}) : g.intl.format(g.t.uDP3Kz, {});
    (0, lt.A)({
        title: g.intl.string(g.t.aqpAvn),
        subtitle: t,
        confirmText: g.intl.string(g.t.vT7ckk),
        onConfirm: () => {
            li.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
let lr = (0, o.zD)(u.X.SHOW_GAME_LIBRARY, {
        usePredicate: () => (0, O.bG)([tg.A], () => tg.A.hasLibraryApplication()),
        useTitle: () => g.intl.string(g.t.fi3UQN),
        useSubtitle: () => g.intl.string(g.t["8mYp37"]),
        useValue: () => !c.l_.useSetting(),
        setValue: (e) => c.l_.updateSetting(!e),
    }),
    la = (0, o.zZ)(u.X.APPEARANCE_ADVANCED_CATEGORY, {
        useTitle: () => g.intl.string(g.t["8/udY0"]),
        buildLayout: () => [ll, lr],
    });
var lo = i(565645);
let lu = (0, o.zD)(u.X.CHAT_EMOJI_CONVERT_EMOTICONS, {
        useTitle: () => g.intl.string(g.t["79qal8"]),
        useSubtitle: () =>
            g.intl.format(g.t.GejoQK, { emojiHook: (e, t) => (0, p.jsx)(lo.A, { emojiName: "\uD83D\uDE42" }, t) }),
        useValue: c.j7.useSetting,
        setValue: c.j7.updateSetting,
    }),
    ld = (0, o.zD)(u.X.ENABLE_SEND_BUTTON, {
        useTitle: () => g.intl.string(g.t["I/5LyL"]),
        useValue: () => (0, O.bG)([iW.A], () => iW.A.isSubmitButtonEnabled),
        setValue: () => (0, nd.Xt)(),
    }),
    lc = (0, o.zD)(u.X.CHAT_TEXT_BOX_PREVIEWS, {
        useTitle: () => g.intl.string(g.t.AqGrEI),
        useValue: c.SI.useSetting,
        setValue: (e) => {
            X.default.track(Q.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: e,
                location: { section: Q.JJy.SETTINGS_TEXT_AND_IMAGES },
            }),
                c.SI.updateSetting(e);
        },
    }),
    lg = (0, o.zD)(u.X.CHAT_STICKERS_AUTOCOMPLETE, {
        useTitle: () => g.intl.string(g.t["d+It2U"]),
        useValue: c.ML.useSetting,
        setValue: (e) => {
            X.default.track(Q.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                enabled: e,
                location: { section: Q.JJy.SETTINGS_TEXT_AND_IMAGES },
                location_stack: [eV.A.TEXT_AND_IMAGES],
            }),
                c.ML.updateSetting(e);
        },
    }),
    lm = (0, o.zZ)(u.X.APPEARANCE_CHAT_BOX_CATEGORY, {
        useTitle: () => g.intl.string(g.t.Ob7VMB),
        useSearchTerms: () => [g.intl.string(g.t.onqU6o)],
        buildLayout: () => [lc, lu, lg, ld],
    });
var lA = i(526162),
    lh = i(793943),
    lE = i(792656),
    lT = i(779733),
    lS = i(785007),
    lx = i(806932),
    lp = i(915089),
    lN = i(635917),
    l_ = i(788868);
let lf = (0, o.E2)(u.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [g.intl.string(g.t.gnwxvT)],
    Component: function () {
        let e = (0, lp.GV)(),
            { ref: t, ...i } = (0, lS._u)({ orientation: "horizontal", labelledBy: e }),
            n = (0, O.bG)([lA.A], () => lA.A.isUpsellPreview);
        return (
            (0, eg.Ay)(() => {
                n &&
                    X.default.track(Q.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: l_.e.APP_ICON_UPSELL,
                        location_stack: [eV.A.USER_SETTINGS],
                    });
            }),
            (0, p.jsx)("div", {
                ...i,
                ref: t,
                children: (0, p.jsx)(R.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    children: (0, p.jsx)(lx.m, { disabled: n, size: lN.N8.SIZE_48 }),
                }),
            })
        );
    },
});
function lb() {
    (0, lh.nf)(lh.HP.APP_ICON), (0, lT.default)();
}
function lC() {
    return (0, p.jsx)(lE.A, {
        subscriptionTier: l_.pe.TIER_2,
        defaultTextOverride: g.intl.string(g.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: Q.ZSU.BUTTON_CTA, objectType: Q.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
let lI = (0, o.zZ)(u.X.APPEARANCE_IN_APP_ICON_CATEGORY, {
        useTitle: () => g.intl.string(g.t.RPh2ou),
        useSubtitle: () => g.intl.string(g.t.IgENJo),
        useHeaderDecoration: function () {
            let e = (0, O.bG)([lA.A], () => lA.A.isUpsellPreview);
            return N.useMemo(() => {
                let t = [];
                return (
                    t.push({
                        id: "preview-icon-button",
                        type: e_.UV.BUTTON,
                        text: g.intl.string(g.t["6acvnZ"]),
                        onClick: lb,
                    }),
                    e && t.push({ id: "upsell-button", type: e_.UV.STRONGLY_DISCOURAGED_CUSTOM, button: lC }),
                    { type: e_.WX.BUTTON_GROUP, buttons: t }
                );
            }, [e]);
        },
        buildLayout: () => [lf],
    }),
    lv = (0, o.AK)(u.X.APPEARANCE_CHAT_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => g.intl.string(g.t.UDr3Iy),
        useSearchTerms: () => [g.intl.string(g.t.UDr3Iy)],
        destinationKey: u.X.ACCESSIBILITY_PANEL,
    }),
    lj = (0, o.gN)(u.X.APPEARANCE_CHAT_RELATED_SETTINGS, { buildLayout: () => [lv] });
var ly = i(379587),
    lO = i(452027),
    lR = i(976860),
    lL = i(474090),
    lD = i(181079),
    lG = i(422258),
    lP = i(668267),
    lU = i(313281),
    lV = i(335993);
let lM = ta.A.getArticleURL(Q.MVz.FAVORITES_GUILD);
function lk() {
    let { analyticsLocations: e } = (0, nU.Ay)(eV.A.USER_SETTINGS_FAVORITES),
        t = N.useCallback(() => {
            (0, lP.mv)("settings_page"), (0, lR.uh)(Q.YYv), (0, lT.default)();
        }, []);
    return (0, p.jsx)(nU.f5, {
        value: e,
        children: (0, p.jsx)(lO.D, {
            label: g.intl.string(lV.default.OT1NK5),
            description: g.intl.format(lV.default.GR2KOG, { helpCenterLink: lM }),
            layout: "horizontal-responsive",
            badge: "beta",
            children: (0, p.jsxs)(R.B, {
                direction: "horizontal",
                gap: 8,
                fullWidth: !1,
                children: [
                    (0, p.jsx)(eh.$, { variant: "secondary", text: g.intl.string(lV.default["7WwLnr"]), onClick: t }),
                    (0, p.jsx)(lE.A, {
                        subscriptionTier: l_.pe.TIER_2,
                        defaultTextOverride: g.intl.string(lV.default["20sYUU"]),
                    }),
                ],
            }),
        }),
    });
}
let lw = (0, o.E2)(u.X.CHAT_FAVORITES_TOGGLE, {
        usePredicate: () => (0, ly.m)({ location: "FavoritesGuildToggle" }).enabled,
        useSearchTerms: () => [g.intl.string(lV.default.OT1NK5)],
        Component: function () {
            let e = (0, O.bG)([lD.A], () => lD.A.favoriteGuildEnabled),
                t = (0, O.bG)([t3.default], () => {
                    let e = t3.default.getCurrentUser();
                    return null != e && lL.Ay.isPremiumExactly(e, l_.PremiumTypes.TIER_2);
                }),
                i = (0, lU.DZ)(),
                n = N.useCallback(
                    (e) => {
                        (0, lG.tV)(e, "settings_page"), !e && i && (0, lR.pX)(Q.BVt.ME);
                    },
                    [i],
                );
            return t
                ? (0, p.jsx)(L.d, {
                      checked: e,
                      description: g.intl.format(lV.default.GR2KOG, { helpCenterLink: lM }),
                      onChange: n,
                      label: g.intl.string(lV.default.OT1NK5),
                      badge: "beta",
                  })
                : (0, p.jsx)(lk, {});
        },
    }),
    lB = (0, o.zD)(u.X.CHAT_INLINE_MEDIA_LINKS, {
        useTitle: () => g.intl.string(g.t.U47N1p),
        useValue: c.hD.useSetting,
        setValue: c.hD.updateSetting,
    }),
    lF = (0, o.zD)(u.X.CHAT_INLINE_MEDIA_UPLOADS, {
        useTitle: () => g.intl.string(g.t.VP11No),
        useValue: c.X6.useSetting,
        setValue: c.X6.updateSetting,
    }),
    lz = (0, o.FW)(u.X.CHAT_INLINE_FIELD_SET, {
        useTitle: () => g.intl.string(g.t["9nyle0"]),
        buildLayout: () => [lB, lF],
    }),
    lX = (0, o.zD)(u.X.CHAT_EMBEDS_RENDER_EMBEDS, {
        useTitle: () => g.intl.string(g.t["5bK9vw"]),
        useValue: c.rs.useSetting,
        setValue: c.rs.updateSetting,
    }),
    lY = (0, o.zD)(u.X.CHAT_EMOJI_RENDER_REACTIONS, {
        useTitle: () => g.intl.string(g.t["zge/fP"]),
        useValue: c.jW.useSetting,
        setValue: c.jW.updateSetting,
    });
var lH = i(817281);
let lK = (0, o.zD)(u.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
        useTitle: () => g.intl.string(g.t.JgjNG3),
        useSubtitle: () => {
            if (!c.hH.useSetting())
                return g.intl.format(g.t["31PRaj"], {
                    a11yHook: (e, t) =>
                        (0, p.jsx)(
                            V.D,
                            {
                                tag: "a",
                                onClick: () => (0, ej.openUserSettings)(u.X.APPEARANCE_MESSAGE_DISPLAY_MODE),
                                children: e,
                            },
                            t,
                        ),
                });
        },
        useDisabled: () => !c.hH.useSetting(),
        useValue: () => {
            let e = (0, O.bG)([nT.Ay], () => nT.Ay.displayCompactAvatars);
            return !c.hH.useSetting() || e;
        },
        setValue: (e) => {
            lH.Ay.updatedUnsyncedSettings({ displayCompactAvatars: e });
        },
    }),
    lW = (0, o.Hn)(u.X.CHAT_SPOILERS_SHOW_SPOILERS, {
        useTitle: () => g.intl.string(g.t.QgwmVz),
        useOptions: () => [
            { value: Q.P6Q.ON_CLICK, id: Q.P6Q.ON_CLICK, label: g.intl.string(g.t["KFH/me"]) },
            { value: Q.P6Q.ALWAYS, id: Q.P6Q.ALWAYS, label: g.intl.string(g.t.Pe1RbL) },
            { value: Q.P6Q.IF_MODERATOR, id: Q.P6Q.IF_MODERATOR, label: g.intl.string(g.t.K5VTBE) },
        ],
        useValue: c.gs.useSetting,
        setValue: c.gs.updateSetting,
    }),
    lZ = (0, o.zD)(u.X.CHAT_THREADS_SPLIT_VIEW, {
        useTitle: () => g.intl.string(g.t.AInv5m),
        useValue: c.SY.useSetting,
        setValue: c.SY.updateSetting,
    }),
    lQ = (0, o.zZ)(u.X.APPEARANCE_MESSAGES_CATEGORY, {
        useTitle: () => g.intl.string(g.t.OIgYlQ),
        useSearchTerms: () => [g.intl.string(g.t["/VQax8"])],
        buildLayout: () => [lz, lX, lY, lW, lZ, lK, lw, lj],
    });
var lq = i(753806),
    lJ = i(145331);
let l$ = (0, o.Qx)(u.X.MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
        useTitle: () => g.intl.string(g.t.VkoLsy),
        useSearchTerms: () => [g.intl.string(g.t["t4+fbe"])],
        useOptions: function () {
            return [
                { name: g.intl.string(g.t.E9JM4J), value: 0 },
                { name: g.intl.string(g.t["Kr+lPi"]), value: 1 },
            ];
        },
        useValue: () => +!!c.Hu.useSetting(),
        setValue: (e) => {
            let t = 1 === e;
            t ? lq.A.cleanUpPrivateChannelSearchState() : lq.A.cleanUpSearchState({ type: Q.I4_.DMS }),
                (0, lJ._k)({
                    prevIsCrossDMSettingEnabled: c.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: lJ.vy.USER_SETTINGS,
                }),
                c.Hu.updateSetting(t);
        },
    }),
    l0 = (0, o.zZ)(u.X.APPEARANCE_SEARCH_CATEGORY, {
        useTitle: () => g.intl.string(g.t["5h0QOP"]),
        buildLayout: () => [l$],
    }),
    l1 = (0, o.zD)(u.X.STREAMING_AUTO_STREAMER_MODE, {
        useTitle: () => g.intl.string(g.t.IxjaoF),
        useValue: function () {
            return (0, O.bG)([ef.A], () => {
                let { autoToggle: e } = ef.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            n6.A.update({ autoToggle: e });
        },
        usePredicate: function () {
            return le.Av;
        },
    }),
    l2 = (0, o.zD)(u.X.STREAMING_STREAMER_MODE, {
        useTitle: () => g.intl.string(g.t.TGNg6T),
        useSubtitle: () => g.intl.string(g.t["4nXLnE"]),
        useValue: function () {
            return (0, O.bG)([ef.A], () => {
                let { enabled: e } = ef.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            n6.A.update({ enabled: e });
        },
    });
var l3 = i(77729),
    l4 = i(349230);
let l5 = [],
    l8 = (0, o.Hn)(u.X.STREAMER_MODE_HIDE_OVERLAY_WIDGETS, {
        selectionMode: "multiple",
        useTitle: () => g.intl.string(g.t.VCDSLW),
        useSearchTerms: () => [g.intl.string(g.t.VCDSLW)],
        usePredicate: () => {
            let e = (0, ey.b_)(),
                t = (0, ex.Mn)("StreamerModeSettings");
            return e && t;
        },
        useOptions: function () {
            return N.useMemo(() => {
                let e = [];
                for (let [t, i] of Object.entries(l4.A))
                    null != i.streamerModeLabel &&
                        (null == i.predicate || i.predicate()) &&
                        e.push({ id: t, value: t, label: i.streamerModeLabel() });
                return e;
            }, []);
        },
        useValue: function () {
            return (0, O.bG)([ef.A], () => ef.A.getSettings().disabledOverlayWidgets ?? l5);
        },
        setValue: (e) => n6.A.update({ disabledOverlayWidgets: e }),
        closeOnSelect: !1,
        wrapTags: !0,
    }),
    l6 = (0, o.zD)(u.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => g.intl.string(g.t.LSBUGR),
        useValue: () =>
            (0, O.bG)([ef.A], () => {
                let { hidePersonalInformation: e } = ef.A.getSettings();
                return e;
            }),
        setValue: (e) => n6.A.update({ hidePersonalInformation: e }),
    }),
    l7 = (0, o.zD)(u.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => g.intl.string(g.t.uWBOri),
        useValue: () =>
            (0, O.bG)([ef.A], () => {
                let { hideInstantInvites: e } = ef.A.getSettings();
                return e;
            }),
        setValue: (e) => n6.A.update({ hideInstantInvites: e }),
    }),
    l9 = (0, o.zD)(u.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => g.intl.string(g.t.OrqYDP),
        useValue: () =>
            (0, O.bG)([ef.A], () => {
                let { disableSounds: e } = ef.A.getSettings();
                return e;
            }),
        setValue: (e) => n6.A.update({ disableSounds: e }),
    }),
    se = (0, o.zD)(u.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.sUAbLd),
        useValue: () =>
            (0, O.bG)([ef.A], () => {
                let { disableNotifications: e } = ef.A.getSettings();
                return e;
            }),
        setValue: (e) => n6.A.update({ disableNotifications: e }),
    }),
    st = (0, o.zD)(u.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => g.intl.string(g.t["iA81+a"]),
        useSubtitle: () => g.intl.string(g.t.P4vj0h),
        useValue: () =>
            (0, O.bG)([ef.A], () => {
                let { enableContentProtection: e } = ef.A.getSettings();
                return e;
            }),
        setValue: (e) => n6.A.update({ enableContentProtection: e }),
        usePredicate: () => l3.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    si = (0, o.FW)(u.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => g.intl.string(g.t.xYhOEh),
        buildLayout: () => [l6, l7, l9, se, st, l8],
    }),
    sn = (0, o.zZ)(u.X.STREAMER_MODE_CATEGORY, {
        useTitle: () => g.intl.string(g.t.S5GfOW),
        buildLayout: () => [l2, l1, si],
    });
var sl = i(47671),
    ss = i(884210);
let sr = (0, o.zD)(u.X.SYNC_PROFILE_THEMES, {
    useTitle: () => g.intl.string(g.t.C00w4l),
    useValue: () => (0, O.bG)([iW.A], () => iW.A.syncProfileThemeWithUserTheme),
    setValue: () => (0, nd.M1)(),
});
var sa = i(284016);
let so = (0, o.zD)(u.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => g.intl.string(g.t["/B+kEV"]),
    useSearchTerms: () => [g.intl.string(g.t.Ksh3ik)],
    useValue: function () {
        return (0, O.bG)([sa.A], () => !1 !== sa.A.shouldSync("appearance"));
    },
    setValue: function (e) {
        var t;
        let i = iu.A.theme,
            n = sl.A.gradientPreset?.id ?? null,
            l = c.eh.getSetting()?.customUserThemeSettings != null;
        (t = Q.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
            n4.h.dispatch({
                type: "TRACK",
                event: t,
                properties: { is_sync_enabled: e, base_theme: i, client_theme: n, has_custom_theme: l },
            }),
            lH.Ay.setShouldSyncAppearanceSettings(e);
    },
});
var su = i(500158);
let sd = (0, o.AK)(u.X.APPEARANCE_THEME_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => g.intl.string(g.t.nhVQDJ),
        useSearchTerms: () => [g.intl.string(g.t.nhVQDJ)],
        destinationKey: u.X.ACCESSIBILITY_PANEL,
    }),
    sc = (0, o.gN)(u.X.APPEARANCE_THEME_RELATED_SETTINGS, { buildLayout: () => [sd] }),
    sg = (0, o.zZ)(u.X.APPEARANCE_THEME_CATEGORY, {
        useTitle: () => g.intl.string(g.t.Ksh3ik),
        useInlineNotice: function () {
            return (0, O.bG)([iW.A], () => iW.A.useForcedColors)
                ? {
                      type: e_.lT.INLINE_NOTICE,
                      noticeType: "info",
                      useText: () =>
                          (0, n_.D)()
                              ? g.intl.format(g.t.Jae48E, {
                                    onClick: () => {
                                        (0, ej.openUserSettings)(u.X.SYNC_FORCED_COLORS);
                                    },
                                })
                              : g.intl.string(g.t.AUMSZP),
                  }
                : null;
        },
        useHeaderDecoration: function () {
            return (0, O.bG)([sl.A, iW.A], () => iW.A.useForcedColors || sl.A.isPreview)
                ? null
                : {
                      type: e_.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "open-client-themes-button",
                              type: e_.UV.BUTTON,
                              text: g.intl.string(g.t["E+COuA"]),
                              onClick: ss.J3,
                          },
                      ],
                  };
        },
        buildLayout: () => [su.k, so, sr, sc],
    }),
    sm = [
        {
            badgeType: e_.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: eE.M.CLIENT_THEMES_SETTINGS_BADGE,
            StronglyDiscouragedCustomComponent: n9,
        },
        {
            badgeType: e_.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: eE.M.DEKSTOP_CUSTOM_APP_ICON_BADGE,
            StronglyDiscouragedCustomComponent: n9,
        },
        { badgeType: e_.Xi.NEW, dismissibleContent: eE.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE },
    ],
    sA = (0, o.t_)(u.X.APPEARANCE_PANEL, {
        initialize: function () {
            n5.A.isFetching() ||
                (n4.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_START" }),
                n3.Bo.get({ url: Q.Rsh.USERS_ME_CUSTOM_THEMES, oldFormErrors: !0, rejectWithError: !0 })
                    .then((e) => {
                        n4.h.dispatch({
                            type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS",
                            themes: e.body?.custom_themes ?? [],
                        });
                    })
                    .catch((e) => {
                        n4.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_FAILURE", error: e });
                    }));
        },
        useTitle: () => g.intl.string(g.t["iHH+ky"]),
        buildLayout: () => [sg, lI, lQ, lm, l0, sn, la],
    }),
    sh = [
        ...sm,
        {
            badgeType: e_.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: eE.M.FAVORITES_GUILD_NEW_BADGE,
            StronglyDiscouragedCustomComponent: n9,
        },
    ],
    sE = (0, o.i4)(u.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["iHH+ky"]),
        icon: n2.B,
        useMenu: function () {
            let e,
                t,
                i,
                n = (0, n8.A)(),
                l =
                    ((e = c.D_.useSetting()),
                    (t = c.SI.useSetting()),
                    e
                        ? null
                        : (0, p.jsx)(U.sL, {
                              id: "preview-markdown-toggle",
                              label: g.intl.string(g.t.sHJ9wZ),
                              action: () => {
                                  let e = !t;
                                  X.default.track(Q.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                                      enabled: e,
                                      location: { section: Q.JJy.SETTINGS_CONTEXT_MENU },
                                  }),
                                      c.SI.updateSetting(e);
                              },
                              checked: t,
                          })),
                s =
                    ((i = (0, O.bG)([ef.A], () => ef.A.enabled, [])),
                    (0, p.jsx)(U.sL, {
                        id: "streamer-mode-toggle",
                        label: g.intl.string(g.t.p9ZAJZ),
                        action: () => {
                            n6.A.setEnabled(!i);
                        },
                        checked: i,
                    }));
            return N.useMemo(() => {
                let e = [...n];
                return (
                    null != l &&
                        e.push((0, p.jsx)(U.rX, { label: g.intl.string(g.t.Ob7VMB), children: l }, "text-and-images")),
                    null != s && e.push((0, p.jsx)(U.rX, { children: s }, "streamer-mode")),
                    e
                );
            }, [n, l, s]);
        },
        getDismissibleBadges: () => sh,
        buildLayout: () => [sA],
    });
var sT = i(410767),
    sS = i(691885),
    sx = i(408278),
    sp = i(241326),
    sN = i(885574),
    s_ = i(475358),
    sf = i(28647),
    sb = i(337371),
    sC = i(734066),
    sI = i(880144),
    sv = i(680243),
    sj = i(695366),
    sy = i(969341),
    sO = i(364094);
function sR(e) {
    let { game: t, application: i } = e;
    return null == t || null == i
        ? (0, p.jsx)("div", {
              className: sO.zc,
              children: (0, p.jsx)(sj.E, { size: "sm", color: w.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, p.jsxs)("div", {
              className: sO.nt,
              children: [
                  (0, p.jsx)(e6.A, { game: i, pid: t.pid, size: e6.M.MEDIUM }),
                  (0, p.jsx)("div", {
                      className: sO.Am,
                      children: (0, p.jsx)(sj.E, { size: "sm", color: w.A.colors.TEXT_FEEDBACK_WARNING }),
                  }),
              ],
          });
}
function sL(e) {
    let t = (0, O.bG)([sy.Ay], () => sy.Ay.getMode()),
        { runningGame: i, runningGameApplication: n } = e$();
    null == i || i.elevated || ((i = void 0), (n = void 0));
    let l = (0, to.NP)(),
        s = l && null != i && t === Q.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? s : l, runningGame: i, runningGameApplication: n };
}
function sD(e) {
    let { className: t, sourcePage: i } = e,
        { canPrompt: n, runningGame: l, runningGameApplication: s } = sL(i);
    return n
        ? (0, p.jsxs)("div", {
              className: ew()(sO.kL, t),
              children: [
                  (0, p.jsx)(sR, { game: l, application: s }),
                  (0, p.jsxs)("div", {
                      className: sO.FS,
                      children: [
                          (0, p.jsx)(M.E, {
                              variant: "text-sm/medium",
                              color: "text-strong",
                              children:
                                  "voice" === i
                                      ? g.intl.string(g.t.vxfv7v)
                                      : null != l
                                        ? g.intl.string(g.t.fAYU2G)
                                        : g.intl.string(g.t["9V4X/c"]),
                          }),
                          (0, p.jsx)(M.E, {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              children: g.intl.format(g.t["/y6htt"], {
                                  helpCenterLink: ta.A.getArticleURL(Q.MVz.SYSTEM_SERVICE),
                              }),
                          }),
                      ],
                  }),
                  (0, p.jsx)(eh.$, {
                      variant: "secondary",
                      size: "sm",
                      text: g.intl.string(g.t["1iI46O"]),
                      onClick: function () {
                          (0, to.sL)(i + (null != l ? "-with-game" : "-no-game"));
                      },
                  }),
              ],
          })
        : null;
}
var sG = i(189213),
    sP = i(292666),
    sU = i(320989),
    sV = i(978263);
let sM = [];
var sk = i(235986),
    sw = i(820785),
    sB = i(734057),
    sF = i(808728),
    sz = i(967198),
    sX = i(926140),
    sY = i(194152);
function sH() {}
let sK = [sX.rD.VOICE_CHANNEL];
function sW(e) {
    e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0);
}
function sZ() {
    return (0, p.jsx)("div", {
        className: sY.i1,
        children: (0, p.jsx)(M.E, {
            variant: "text-md/medium",
            color: "text-muted",
            className: sY.GN,
            children: g.intl.string(g.t.zHjCd1),
        }),
    });
}
function sQ(e) {
    let { keybind: t } = e,
        i = N.useRef(t);
    N.useEffect(() => {
        i.current = t;
    });
    let [n, l] = N.useState(t.params?.channelId ?? void 0),
        s = N.useCallback(() => {
            (0, f.openModalLazy)(
                async () => (e) =>
                    (0, p.jsx)(sq, {
                        ...e,
                        onSelect: (e) => {
                            l(e), tO.A.setKeybind({ ...i.current, params: { channelId: e } });
                        },
                    }),
            );
        }, []);
    return (0, p.jsx)("div", {
        className: sY.a8,
        children: (0, p.jsx)(lO.D, {
            label: g.intl.string(g.t.q4JpM8),
            children: (0, p.jsxs)(sk.A, {
                align: sk.A.Align.STRETCH,
                children: [
                    (0, p.jsx)("div", { className: sY.$X, children: (0, p.jsx)(sJ, { channelId: n }) }),
                    (0, p.jsx)(sk.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, p.jsx)(eh.$, { variant: "primary", text: g.intl.string(g.t.Dm8O4e), onClick: s }),
                    }),
                ],
            }),
        }),
    });
}
function sq(e) {
    let t,
        i,
        { transitionState: n, onClose: l, onSelect: s } = e,
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
                    autocompleterBeforeCreateSearchContext: l,
                } = e,
                [s, r] = N.useState(""),
                [a, o] = N.useState(sM),
                u = N.useCallback((e, t) => {
                    "" === (t = t.trim()).trim() ? o(sM) : o(e);
                }, []);
            N.useEffect(
                () =>
                    sU.A.addRouteChangeListener(() => {
                        r("");
                    }),
                [],
            );
            let [d] = N.useState(() => new sV.A(u, i, void 0, n));
            return (
                N.useEffect(() => {
                    t ? (l?.(d), d.createSearchContext()) : (d.clean(), r(""));
                }, [t, d, l]),
                {
                    queryResults: a,
                    query: s,
                    updateQuery: N.useCallback(
                        (e) => {
                            r(e), d.search(e);
                        },
                        [d],
                    ),
                }
            );
        })({ visible: !0, autocompleterResultTypes: sK, autocompleterBeforeCreateSearchContext: sW }),
        c =
            ((t = "" !== o),
            (i = (0, O.yK)([sF.Ay, sB.A, sz.A], () => {
                let e = sz.A.getGuildId();
                if (t || null == e) return [];
                let i = [];
                for (let t of sF.Ay.getVocalChannelIds(e)) {
                    let e = sB.A.getChannel(t);
                    null != e && i.push(e);
                }
                return i;
            }, [t])),
            t ? null : i),
        { focusedIndex: m, setFocusedIndex: A } = (function (e) {
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
        null == e || e.isItemVisible(0, m, !0) || e.scrollToIndex({ section: 0, row: m });
    }, [m]);
    let h = null != c ? c.length : d.length,
        E = (() => {
            if (null != c) return c[m]?.id;
            let e = d[m];
            if (e?.type === sX.rD.VOICE_CHANNEL) return e.record.id;
        })(),
        T =
            h > 0 || "" === o
                ? {
                      innerId: r,
                      innerRole: "listbox",
                      innerAriaLabel: g.intl.string(g.t["+N3fW7"]),
                      ref: a,
                      sections: [h],
                      renderRow: function (e) {
                          let { row: t } = e,
                              i = (() => {
                                  if (null != c) return c[t];
                                  let e = d[t];
                                  if (e?.type === sX.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == i) return null;
                          let n = null != i.parent_id ? sB.A.getChannel(i.parent_id) : void 0,
                              r = H.A.getGuild(i.guild_id);
                          return (0, p.jsx)(
                              sw.c3,
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
                                      null != r ? (0, p.jsx)("div", { className: sY.J5, children: r.name }) : null,
                              },
                              i.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, p.jsx)(sZ, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, p.jsx)(sG.Modal, {
        transitionState: n,
        onClose: l,
        title: g.intl.string(g.t.Dm8O4e),
        subtitle: g.intl.string(g.t.q4JpM8),
        actions: void 0,
        input: (0, p.jsx)(sP.k, {
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
                                if (e?.type === sX.rD.VOICE_CHANNEL) return e.record;
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
            placeholder: g.intl.string(g.t.tG0r7g),
            role: "combobox",
            "aria-controls": r,
            "aria-expanded": h > 0,
            "aria-activedescendant": h > 0 && null != E ? E : void 0,
            "aria-autocomplete": "list",
            spellCheck: !1,
            autoFocus: !0,
        }),
        listProps: T,
    });
}
function sJ(e) {
    let { channelId: t } = e,
        {
            channel: i,
            category: n,
            guild: l,
        } = (0, O.cf)([sB.A, H.A], () => {
            let e = null != t ? sB.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? sB.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? H.A.getGuild(e.guild_id) : void 0,
                  }
                : { channel: void 0, category: void 0, guild: void 0 };
        });
    return null == i
        ? (0, p.jsx)(M.E, {
              variant: "text-md/medium",
              color: "text-muted",
              className: sY.GN,
              children: g.intl.string(g.t["/fYIK7"]),
          })
        : (0, p.jsx)(sw.c3, {
              channel: i,
              id: i.id,
              category: n,
              onClick: sH,
              onFocus: sH,
              onMouseEnter: sH,
              focused: !1,
              children: null != l ? (0, p.jsx)("div", { className: sY.J5, children: l.name }) : null,
          });
}
function s$(e) {
    let { className: t, children: i } = e;
    return (0, p.jsx)("div", { className: t, children: (0, p.jsx)(R.B, { gap: 16, children: i }) });
}
var s0 = i(802247);
function s1(e) {
    let { children: t } = e;
    return t([sb.Q_.MESSAGE, sb.Q_.NAVIGATION, sb.Q_.DND, sb.Q_.CHAT, sb.Q_.VOICE_AND_VIDEO, sb.Q_.MISCELLANEOUS]);
}
class s2 extends N.PureComponent {
    handleActionChanged = (e) => {
        tO.A.setKeybind({ ...this.props.keybind, action: e });
    };
    handleShortcutChange = (e) => {
        tO.A.setKeybind({ ...this.props.keybind, shortcut: e });
    };
    handleDeleteKeybind = () => {
        tO.A.deleteKeybind(this.props.keybind.id);
    };
    handleEnableDisable = () => {
        let { keybind: e } = this.props;
        tO.A.setKeybind({ ...this.props.keybind, enabled: !e.enabled });
    };
    renderMessage() {
        let { keybind: e } = this.props,
            t = eL.dI(e.shortcut);
        return nq.A.hasBind(t)
            ? (0, p.jsx)(tr.p, { messageType: tr.Y.ERROR, children: g.intl.string(g.t["7lQlw3"]) })
            : iE.Yy.has(t)
              ? (0, p.jsx)(tr.p, {
                    messageType: tr.Y.ERROR,
                    children: g.intl.format(g.t.MOIaNd, {
                        keyboardNavArticle: ta.A.getArticleURL(Q.MVz.KEYBOARD_NAVIGATION),
                    }),
                })
              : (0, p.jsx)(M.E, {
                    variant: "text-md/normal",
                    className: s0.qD,
                    children: this.props.keybindDescriptions[e.action],
                });
    }
    render() {
        let { managed: e, enabled: t } = this.props.keybind;
        return (0, p.jsxs)("div", {
            className: s0.YI,
            children: [
                (0, p.jsxs)("div", {
                    className: s0.PO,
                    children: [
                        (0, p.jsx)("div", {
                            className: s0.AS,
                            children: (0, p.jsx)(sS.l, {
                                selectionMode: "single",
                                label: g.intl.string(g.t.UUpAD6),
                                value: this.props.keybind.action,
                                options: this.props.keybindActionTypes,
                                onSelectionChange: this.handleActionChanged,
                                disabled: e,
                            }),
                        }),
                        (0, p.jsx)("div", {
                            className: s0.AS,
                            children: (0, p.jsx)(lO.D, {
                                label: g.intl.string(g.t["1La4tC"]),
                                children: (0, p.jsx)(tR.A, {
                                    defaultValue: this.props.keybind.shortcut,
                                    onChange: this.handleShortcutChange,
                                }),
                            }),
                        }),
                        !e &&
                            (0, p.jsx)("div", {
                                className: s0.d9,
                                children: (0, p.jsx)(sx.K, {
                                    variant: "icon-only",
                                    onClick: this.handleDeleteKeybind,
                                    icon: sp.u,
                                    "aria-label": g.intl.string(g.t.qEHmmB),
                                }),
                            }),
                        (0, p.jsx)("div", {
                            className: s0.ZW,
                            children: (0, p.jsx)(e0.m, {
                                text: g.intl.string(g.t.uCD7qK),
                                children: (0, p.jsx)("div", {
                                    children: (0, p.jsx)(L.d, { checked: t, onChange: this.handleEnableDisable }),
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
        return e === Q.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, p.jsx)(sQ, { keybind: this.props.keybind }) : void 0;
    }
}
class s3 extends N.PureComponent {
    get keybindActionTypes() {
        let {
                overlaySupported: e,
                canGoLive: t,
                allowSoundboard: i,
                enableClips: n,
                enableScreenshotKeybind: l,
            } = this.props,
            s = [
                { id: "unassigned", value: Q.hCu.UNASSIGNED, label: g.intl.string(g.t["0Uh579"]) },
                { id: "push-to-talk", value: Q.hCu.PUSH_TO_TALK, label: g.intl.string(g.t.Y5lgTP) },
                { id: "push-to-talk-priority", value: Q.hCu.PUSH_TO_TALK_PRIORITY, label: g.intl.string(g.t.DkSwJ2) },
                { id: "push-to-mute", value: Q.hCu.PUSH_TO_MUTE, label: g.intl.string(g.t.hSCRqd) },
                { id: "vad-priority", value: Q.hCu.VAD_PRIORITY, label: g.intl.string(g.t["49d6Nd"]) },
                { id: "toggle-mute", value: Q.hCu.TOGGLE_MUTE, label: g.intl.string(g.t.PlkYKD) },
                { id: "toggle-deafen", value: Q.hCu.TOGGLE_DEAFEN, label: g.intl.string(g.t.NvGq1K) },
                { id: "toggle-voice-mode", value: Q.hCu.TOGGLE_VOICE_MODE, label: g.intl.string(g.t.Wa5H9S) },
                { id: "toggle-streamer-mode", value: Q.hCu.TOGGLE_STREAMER_MODE, label: g.intl.string(g.t.BK0Ncc) },
                { id: "toggle-camera", value: Q.hCu.TOGGLE_CAMERA, label: g.intl.string(g.t.hf8JVT) },
            ];
        return (
            e &&
                (s.push({
                    id: "toggle-overlay-input-lock",
                    value: Q.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
                    label: g.intl.string(g.t.VsAZcC),
                }),
                s.push({
                    id: "activate-overlay-region-text-widget",
                    value: Q.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                    label: g.intl.string(g.t.hurHWo),
                })),
            t &&
                ((0, ev.isWindows)() || sy.Ay.getUseSystemScreensharePicker()) &&
                s.push({
                    id: "toggle-go-live-streaming",
                    value: Q.hCu.TOGGLE_GO_LIVE_STREAMING,
                    label: g.intl.string(g.t.ybdjJD),
                }),
            (0, ev.isDesktop)() &&
                (s.push(
                    { id: "navigate-back", value: Q.hCu.NAVIGATE_BACK, label: g.intl.string(g.t.gRSaOa) },
                    { id: "navigate-forward", value: Q.hCu.NAVIGATE_FORWARD, label: g.intl.string(g.t.zOXpjU) },
                    {
                        id: "switch-to-voice-channel",
                        value: Q.hCu.SWITCH_TO_VOICE_CHANNEL,
                        label: g.intl.string(g.t.ty7Lxy),
                    },
                    {
                        id: "disconnect-from-voice-channel",
                        value: Q.hCu.DISCONNECT_FROM_VOICE_CHANNEL,
                        label: g.intl.string(g.t.CV7mT7),
                    },
                ),
                i &&
                    s.push(
                        { id: "soundboard", value: Q.hCu.SOUNDBOARD, label: g.intl.string(g.t.yPH4xm) },
                        { id: "soundboard-hold", value: Q.hCu.SOUNDBOARD_HOLD, label: g.intl.string(g.t["1xFbP/"]) },
                    ),
                n &&
                    (s.push({ id: "save-clip", value: Q.hCu.SAVE_CLIP, label: g.intl.string(g.t.U4URzP) }),
                    l &&
                        s.push({
                            id: "save-screenshot",
                            value: Q.hCu.SAVE_SCREENSHOT,
                            label: g.intl.string(g.t["+WloFH"]),
                        }))),
            s
        );
    }
    get keybindDescriptions() {
        let { overlaySupported: e, canGoLive: t, enableClips: i, enableScreenshotKeybind: n } = this.props,
            l = {
                [Q.hCu.UNASSIGNED]: g.intl.string(g.t.rvlNLv),
                [Q.hCu.PUSH_TO_MUTE]: g.intl.string(g.t.xtESim),
                [Q.hCu.PUSH_TO_TALK]: g.intl.string(g.t.wTcBSy),
                [Q.hCu.PUSH_TO_TALK_PRIORITY]: g.intl.string(g.t.FhHvWH),
                [Q.hCu.TOGGLE_MUTE]: g.intl.string(g.t.X2fbUm),
                [Q.hCu.TOGGLE_DEAFEN]: g.intl.string(g.t.MjREZV),
                [Q.hCu.TOGGLE_VOICE_MODE]: g.intl.string(g.t.snm5YW),
                [Q.hCu.TOGGLE_STREAMER_MODE]: g.intl.string(g.t.YszLLx),
                [Q.hCu.VAD_PRIORITY]: g.intl.string(g.t.rSe8IZ),
                [Q.hCu.TOGGLE_CAMERA]: g.intl.string(g.t.v1JBtL),
            };
        return (
            e && (l[Q.hCu.TOGGLE_OVERLAY_INPUT_LOCK] = g.intl.string(g.t.IoP5vc)),
            t && (0, ev.isWindows)() && (l[Q.hCu.TOGGLE_GO_LIVE_STREAMING] = g.intl.string(g.t.s4C238)),
            (0, ev.isDesktop)() &&
                ((l[Q.hCu.NAVIGATE_BACK] = g.intl.string(g.t.nKDlEt)),
                (l[Q.hCu.NAVIGATE_FORWARD] = g.intl.string(g.t.DK0FFk)),
                (l[Q.hCu.SOUNDBOARD] = (0, ev.isWindows)() ? g.intl.string(g.t["5wJefL"]) : g.intl.string(g.t.gzjsSP)),
                (l[Q.hCu.SOUNDBOARD_HOLD] = (0, ev.isWindows)()
                    ? g.intl.string(g.t.RRkZc9)
                    : g.intl.string(g.t.laNlTl)),
                i &&
                    ((l[Q.hCu.SAVE_CLIP] = g.intl.string(g.t.z3Wbam)),
                    n && (l[Q.hCu.SAVE_SCREENSHOT] = g.intl.string(g.t.m0zd57)))),
            l
        );
    }
    handleAddKeybind = () => {
        tO.A.addKeybind();
    };
    renderKeybinds(e) {
        return e.map((t, i) =>
            (0, p.jsxs)(
                N.Fragment,
                {
                    children: [
                        (0, p.jsx)(
                            s2,
                            {
                                keybind: t,
                                keybindDescriptions: this.keybindDescriptions,
                                keybindActionTypes: this.keybindActionTypes,
                            },
                            t.id,
                        ),
                        i !== e.length - 1 ? (0, p.jsx)(iL.c, {}) : null,
                    ],
                },
                t.id,
            ),
        );
    }
    renderKeybindWarning() {
        return (0, p.jsxs)("div", {
            className: s0.$e,
            children: [
                (0, p.jsx)(sN.m, { size: "xs", color: w.A.colors.ICON_SUBTLE }),
                (0, p.jsx)(M.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: g.intl.string(g.t.NoKjWP),
                }),
            ],
        });
    }
    render() {
        let { enableClips: e, enableScreenshotKeybind: t } = this.props,
            i = eR()(this.props.keybinds)
                .reject(
                    (e) =>
                        e.managed &&
                        ![Q.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, Q.hCu.SAVE_CLIP, Q.hCu.SAVE_SCREENSHOT].includes(
                            e.action,
                        ),
                )
                .reject((t) => !e && (t.action === Q.hCu.SAVE_CLIP || t.action === Q.hCu.SAVE_SCREENSHOT))
                .reject((e) => !t && e.action === Q.hCu.SAVE_SCREENSHOT)
                .reject(
                    (e) =>
                        !this.props.allowSoundboard &&
                        (e.action === Q.hCu.SOUNDBOARD || e.action === Q.hCu.SOUNDBOARD_HOLD),
                )
                .sortBy((e) => e.id)
                .sortBy((e) => (!0 === e.managed ? -1 : 0))
                .value(),
            n = eR()((0, sb.Bx)())
                .filter((e) => e.description !== g.intl.string(g.t.HnNtEI))
                .groupBy((e) => e.group)
                .value();
        return (0, p.jsxs)(p.Fragment, {
            children: [
                (0, p.jsx)(s$, {
                    className: ib.IE,
                    children: ev.isPlatformEmbedded
                        ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsxs)("div", {
                                      className: s0.OQ,
                                      children: [
                                          this.renderKeybindWarning(),
                                          (0, p.jsx)("div", {
                                              className: s0.c9,
                                              children: (0, p.jsx)(eh.$, {
                                                  size: "md",
                                                  onClick: this.handleAddKeybind,
                                                  text: g.intl.string(g.t.zk6Xbs),
                                                  variant: "primary",
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, p.jsx)(sD, { className: s0.Qo, sourcePage: "keybinds" }),
                                  i.length > 0 &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [(0, p.jsx)(iL.c, {}), this.renderKeybinds(i)],
                                      }),
                                  (0, p.jsx)(iL.c, {}),
                              ],
                          })
                        : (0, p.jsx)(tr.p, {
                              messageType: tr.Y.INFO,
                              className: s0.Ly,
                              children: g.intl.format(g.t.mPi3F3, { downloadLink: Q.X7G.DOWNLOAD }),
                          }),
                }),
                (0, p.jsxs)(R.B, {
                    gap: 48,
                    children: [
                        (0, p.jsx)(ia.n, {
                            label: g.intl.string(g.t.Lz5KHI),
                            children: (0, p.jsx)("div", {
                                className: s0.jh,
                                children: (0, p.jsxs)("div", {
                                    className: s0.yZ,
                                    children: [
                                        (0, p.jsx)(M.E, {
                                            variant: "text-md/normal",
                                            children: g.intl.string(g.t.sMWLBj),
                                        }),
                                        (0, p.jsx)("div", {
                                            className: s0.DM,
                                            children: (0, p.jsx)(s_.e, { shortcut: sf.z.binds["0"], className: s0.LE }),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                        (0, p.jsx)(s1, {
                            children: (e) =>
                                (0, p.jsx)(p.Fragment, {
                                    children: e.map((e, t) => {
                                        let i = (0, sb.Gm)(e),
                                            l = (0, sb.zF)(e),
                                            s = n[e];
                                        return (0, p.jsx)(
                                            ia.n,
                                            {
                                                label: i,
                                                description: l,
                                                children: (0, p.jsx)("div", {
                                                    className: s0.jh,
                                                    children: s.map((e, t) =>
                                                        (0, p.jsxs)(
                                                            N.Fragment,
                                                            {
                                                                children: [
                                                                    0 !== t && (0, p.jsx)(iL.c, {}),
                                                                    (0, p.jsxs)("div", {
                                                                        className: s0.yZ,
                                                                        children: [
                                                                            (0, p.jsx)(M.E, {
                                                                                variant: "text-md/normal",
                                                                                children: e.description,
                                                                            }),
                                                                            (0, p.jsx)("div", {
                                                                                className: s0.DM,
                                                                                children: e.binds.map((e) =>
                                                                                    (0, p.jsx)(
                                                                                        s_.e,
                                                                                        {
                                                                                            shortcut: e,
                                                                                            className: s0.LE,
                                                                                        },
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
                }),
            ],
        });
    }
}
let s4 = (0, o.E2)(u.X.KEYBINDS_SETTING, {
        Component: function () {
            N.useEffect(
                () => (
                    tO.A.enableAll(!1),
                    () => {
                        tO.A.enableAll(!0);
                    }
                ),
                [],
            );
            let e = (0, O.bG)([eb.Ay], () => eb.Ay.getState()),
                t = (0, O.bG)([sy.Ay], () => (0, sI.A)(sy.Ay)),
                i = (0, O.bG)([sv.A], () => sv.A.isSupported),
                n = (0, sC.sw)(),
                l = (0, sC.BW)();
            return (0, p.jsx)(s3, {
                keybinds: e,
                canGoLive: t,
                overlaySupported: i,
                allowSoundboard: (0, ev.isWindows)(),
                enableClips: n,
                enableScreenshotKeybind: l,
            });
        },
        useSearchTerms: () => [g.intl.string(g.t.T9DA2K)],
    }),
    s5 = (0, o.zZ)(u.X.KEYBINDS_CATEGORY, { buildLayout: () => [s4] }),
    s8 = (0, o.t_)(u.X.KEYBINDS_PANEL, { useTitle: () => g.intl.string(g.t.T9DA2K), buildLayout: () => [s5] }),
    s6 = (0, o.i4)(u.X.KEYBINDS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.T9DA2K),
        icon: sT.F,
        buildLayout: () => [s8],
    });
var s7 = i(37646),
    s9 = i(76335);
let re = (0, o.t_)(u.X.LANGUAGE_AND_TIME_PANEL, {
        useTitle: () => g.intl.string(g.t.KyFVyi),
        buildLayout: () => [s9.F],
    }),
    rt = (0, o.i4)(u.X.LANGUAGE_AND_TIME_SIDEBAR_ITEM, {
        icon: s7.U,
        useTitle: () => g.intl.string(g.t.KyFVyi),
        buildLayout: () => [re],
    }),
    ri = (0, nN.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 }));
async function rn() {
    let e = await li.Ay.getOpenOnStart(),
        t = await li.Ay.getSetting("START_MINIMIZED", !1),
        i = await li.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
    ri.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: i });
}
let rl = (0, o.zD)(u.X.OS_OPEN_ON_STARTUP, {
        useTitle: () => g.intl.string(g.t["3BeZti"]),
        usePredicate: () => le.Av && !(0, le.cX)(),
        useValue: () => ri.useState((e) => e.openOnStartup),
        setValue: function (e) {
            ri.setState({ openOnStartup: e }), li.Ay.send("TOGGLE_OPEN_ON_STARTUP", e);
        },
        initialize: () => {
            li.Ay.getOpenOnStart().then((e) => ri.setState({ openOnStartup: e }));
        },
    }),
    rs = (0, o.zD)(u.X.OS_MINIMIZE_TO_TRAY, {
        useTitle: () => g.intl.string(g.t.dJ5MUh),
        useSubtitle: () => g.intl.string(g.t.nQavHr),
        usePredicate: () => le.Av && !(0, le.cX)(),
        useValue: () => ri.useState((e) => e.minimizeToTray),
        setValue: function (e) {
            ri.setState({ minimizeToTray: e }), li.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e);
        },
        initialize: () => {
            li.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => ri.setState({ minimizeToTray: e }));
        },
    });
var rr = i(572985);
let ra = (0, o.E2)(u.X.OS_SYSTEM_SERVICE, {
        useSearchTerms: () => [g.intl.string(g.t.roHq80)],
        Component: function () {
            let [e, t] = N.useState(!1),
                [i, n] = N.useState(() => (0, to.TC)()),
                l = (0, O.bG)([eq.Ay], () => eq.Ay.getSystemServiceStatus("input-service")),
                s = N.useCallback(async () => {
                    t(!0),
                        i ? await (0, to.z8)("windows-settings") : await (0, to.sL)("windows-settings"),
                        t(!1),
                        n((0, to.TC)());
                }, [i]),
                r = "running" === l.state;
            return (0, p.jsxs)("div", {
                className: rr.q,
                children: [
                    (0, p.jsxs)("div", {
                        className: rr.L,
                        children: [
                            (0, p.jsx)(M.E, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: g.intl.string(g.t.roHq80),
                            }),
                            (0, p.jsx)(M.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: g.intl.format(g.t["8CAL+D"], {
                                    helpCenterLink: ta.A.getArticleURL(Q.MVz.SYSTEM_SERVICE),
                                }),
                            }),
                            i
                                ? (0, p.jsx)(M.E, {
                                      variant: "text-sm/normal",
                                      color: r ? "text-feedback-positive" : "text-feedback-warning",
                                      children: r
                                          ? g.intl.string(g.t.KHVMkW)
                                          : g.intl.format(g.t["5Rlr0b"], {
                                                status: (function (e) {
                                                    switch (e.state) {
                                                        case "unknown":
                                                            return g.intl.string(g.t["KW+nqT"]);
                                                        case "disabled":
                                                            return g.intl.string(g.t["Q/wAF7"]);
                                                        case "disconnected":
                                                            return g.intl.string(g.t.Xvs9IM);
                                                        case "initializing":
                                                            return g.intl.string(g.t.h4qz8W);
                                                        case "connecting":
                                                            return g.intl.string(g.t.fSu9XF);
                                                        case "handshaking":
                                                            return g.intl.string(g.t["00aYLJ"]);
                                                        case "running":
                                                            return g.intl.string(g.t["54TB7Z"]);
                                                        case "waiting-for-retry":
                                                            return g.intl.string(g.t["0FONwi"]);
                                                        case "failure":
                                                            return g.intl.string(g.t.Ic0nkd);
                                                        default:
                                                            (0, t4.xb)(e.state);
                                                    }
                                                })(l),
                                            }),
                                  })
                                : null,
                        ],
                    }),
                    (0, p.jsx)(eh.$, {
                        variant: i ? "critical-secondary" : "primary",
                        loading: e,
                        onClick: s,
                        text: i ? g.intl.string(g.t.pAwbdL) : g.intl.string(g.t["1iI46O"]),
                    }),
                ],
            });
        },
        usePredicate: () => (0, to.XQ)(),
    }),
    ro = (0, o.zZ)(u.X.LINUX_CATEGORY, {
        buildLayout: () => [rl, rs, ra],
        initialize: () => {
            rn();
        },
    }),
    ru = (0, o.t_)(u.X.LINUX_PANEL, { useTitle: () => g.intl.string(g.t["7pPjTW"]), buildLayout: () => [ro] }),
    rd = (0, o.i4)(u.X.LINUX_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["7pPjTW"]),
        icon: e2.k,
        usePredicate: () => ev.isPlatformEmbedded && (0, ev.isLinux)(),
        buildLayout: () => [ru],
    });
var rc = i(3137),
    rg = i(369606),
    rm = i(604121),
    rA = i(725951),
    rh = i(400492),
    rE = i(178241),
    rT = i(115063),
    rS = i(414736),
    rx = i(927018),
    rp = i(512599),
    rN = i(532197),
    r_ = i(874486),
    rf = i(989349),
    rb = i.n(rf),
    rC = i(58703),
    rI = i(906688),
    rv = i(523896);
function rj(e) {
    let { achievementId: t, dateUnlocked: i } = e,
        n = (0, rx.vM)(t);
    if (null == n) return null;
    let l = null != i,
        { name: s, description: r, hideDescriptionUntilUnlock: a, onAction: o } = n,
        u = a && !l,
        d = l ? "text-strong" : "text-muted",
        c = l ? "text-default" : "text-muted",
        g = rb()(i),
        m = null != o && l,
        A = m ? V.D : "div";
    return (0, p.jsxs)(A, {
        className: ew()(rv.kL, m && rv.b),
        onClick: () => {
            m && o();
        },
        children: [
            (0, p.jsx)("div", {
                className: rv.zc,
                children: (0, p.jsx)(rI.A, { achievementId: t, size: rI.A.Sizes.SIZE_40, unlocked: l }),
            }),
            (0, p.jsxs)("div", {
                className: rv.VW,
                children: [
                    null != i &&
                        (0, p.jsx)(M.E, {
                            variant: "text-xxs/semibold",
                            color: "text-muted",
                            className: rv.YR,
                            children: (0, rC.mk)(g),
                        }),
                    (0, p.jsx)(M.E, { variant: "text-md/medium", color: d, children: s() }),
                    (0, p.jsx)(M.E, { variant: "text-xs/normal", color: c, children: u ? "?????" : r() }),
                ],
            }),
        ],
    });
}
var ry = i(885959);
function rO(e) {
    let { onBackClick: t } = e,
        i = (0, O.bG)([r_.A], () => r_.A.getAllUnlockedAchievements()),
        n = N.useMemo(() => Object.values(i).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [i]),
        l = N.useMemo(
            () =>
                Object.values(rx.l0)
                    .filter(t4.Vq)
                    .filter((e) => null == i[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [i],
        );
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsxs)(V.D, {
                onClick: t,
                className: ry.vv,
                children: [
                    (0, p.jsx)(rN.A, { direction: rN.A.Directions.LEFT, className: ry.Kk }),
                    (0, p.jsx)(M.E, {
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: g.intl.string(g.t["13/7kX"]),
                    }),
                ],
            }),
            (0, p.jsxs)("div", {
                className: ry.N1,
                children: [
                    (0, p.jsxs)("div", {
                        className: ry.if,
                        children: [
                            (0, p.jsx)(eA.D, {
                                variant: "heading-lg/extrabold",
                                color: "text-strong",
                                children: g.intl.string(g.t["6jI0hd"]),
                            }),
                            (0, p.jsx)(M.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: g.intl.string(g.t.GuUItX),
                            }),
                        ],
                    }),
                    (0, p.jsx)("div", {
                        className: ry.nr,
                        children: (0, p.jsx)(rg.O, {
                            size: "custom",
                            color: w.A.unsafe_rawColors.ORANGE_345.css,
                            width: 40,
                            height: 40,
                        }),
                    }),
                ],
            }),
            n.length > 0 &&
                (0, p.jsx)("div", {
                    className: ry.yF,
                    children: (0, p.jsx)("div", {
                        className: ry.Eh,
                        children: n.map((e) => {
                            let { achievementId: t, dateUnlocked: i } = e;
                            return (0, p.jsx)(rj, { achievementId: t, dateUnlocked: i }, t);
                        }),
                    }),
                }),
            l.length > 0 &&
                (0, p.jsxs)("div", {
                    className: ry.yF,
                    children: [
                        (0, p.jsx)("div", {
                            className: ry.if,
                            children: (0, p.jsx)(M.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                children: g.intl.string(g.t.GFyMg1),
                            }),
                        }),
                        (0, p.jsx)("div", {
                            className: ry.Eh,
                            children: l.map((e) => (0, p.jsx)(rj, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, p.jsx)("div", { className: ry.yF, children: (0, p.jsx)("div", { className: ry.F3 }) }),
        ],
    });
}
var rR = i(224964),
    rL = i(31408),
    rD = i(739347);
let rG = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    rP = (0, eO.range)(0, 11),
    rU = (0, eO.range)(0, 2.25, 0.25),
    rV = (0, eO.range)(1, 11),
    rM = (0, eO.range)(1, 26),
    rk = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function rw(e) {
    let { disabled: t, locations: i, settingsLocations: n, onChange: l } = e,
        s = i.map((e) =>
            (0, p.jsx)(
                L.d,
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
    return (0, p.jsx)(ia.n, { label: g.intl.string(g.t.bWVN1D), children: s });
}
function rB(e) {
    let { children: t } = e;
    return (0, p.jsx)(M.E, { className: rD.iF, variant: "text-sm/normal", color: "text-default", children: t });
}
function rF(e) {
    let {
            settings: { enabled: t, warningSeen: i },
            updateSettings: n,
        } = e,
        l = (0, O.bG)([iW.A], () => iW.A.useReducedMotion);
    return (0, p.jsx)(L.d, {
        label: g.intl.string(g.t.vuiXm9),
        description: g.intl.string(g.t.KuYbWN),
        checked: t,
        onChange: (e) => {
            e || (0, rS._)(rx.sn.DISABLE_POGGERMODE),
                e && (!i || l)
                    ? (0, lt.A)({
                          title: l ? g.intl.string(g.t["FxT+p0"]) : g.intl.string(g.t.TAZ4F9),
                          subtitle: l ? g.intl.string(g.t.gmixrx) : g.intl.string(g.t.jN3t3K),
                          confirmText: g.intl.string(g.t.JFfins),
                          onConfirm: () => n(l ? rG : { enabled: !0, warningSeen: !0 }),
                      })
                    : n({ enabled: e });
        },
    });
}
function rz(e) {
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
    return (0, p.jsxs)(ia.n, {
        label: g.intl.string(g.t.mqxwJO),
        children: [
            (0, p.jsx)(L.d, {
                label: g.intl.string(g.t.s0KCgF),
                description: g.intl.string(g.t.O1Vflg),
                checked: i,
                disabled: !t,
                onChange: (e) => r({ confettiEnabled: e }, 0),
            }),
            (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(M.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: rD.KF,
                        children: g.intl.string(g.t.vd0D81),
                    }),
                    (0, p.jsx)(rB, { children: g.intl.string(g.t.a18Sug) }),
                    (0, p.jsx)(i7.A, {
                        disabled: a,
                        markers: rV,
                        stickToMarkers: !0,
                        minValue: rV[0],
                        maxValue: rV[rV.length - 1],
                        initialValue: n,
                        onValueChange: (e) => r({ confettiCount: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(M.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: rD.KF,
                        children: g.intl.string(g.t.sPO3ij),
                    }),
                    (0, p.jsx)(rB, { children: g.intl.string(g.t.xoldVn) }),
                    (0, p.jsx)(i7.A, {
                        disabled: a,
                        markers: rM,
                        stickToMarkers: !0,
                        minValue: rM[0],
                        maxValue: rM[rM.length - 1],
                        initialValue: l,
                        onValueChange: (e) => r({ confettiSize: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, p.jsx)(rw, {
                disabled: a,
                locations: [
                    {
                        location: rL.k.CHAT_INPUT,
                        title: g.intl.string(g.t.elTtyz),
                        description: g.intl.string(g.t.HtKfMi),
                    },
                    {
                        location: rL.k.REACTION,
                        title: g.intl.string(g.t.Ik4VIa),
                        description: g.intl.string(g.t.y4rqK0),
                    },
                    {
                        location: rL.k.MEMBER_USER,
                        title: g.intl.string(g.t.ZXBlAn),
                        description: g.intl.string(g.t["m9RD+c"]),
                    },
                    {
                        location: rL.k.CALL_TILE,
                        title: g.intl.string(g.t.V66giQ),
                        description: g.intl.string(g.t.fiHV7u),
                    },
                ],
                settingsLocations: s,
                onChange: (e) => r({ confettiEnabledLocations: e }, 0),
            }),
        ],
    });
}
function rX(e) {
    let {
            settings: { enabled: t, combosEnabled: i, comboSoundsEnabled: n, combosRequiredCount: l },
            updateSettings: s,
        } = e,
        r = !t || !i;
    return (0, p.jsxs)(ia.n, {
        label: g.intl.string(g.t.Xz0ole),
        children: [
            (0, p.jsx)(L.d, {
                label: g.intl.string(g.t.o3iV7B),
                description: g.intl.string(g.t["31Z8Ee"]),
                checked: i,
                disabled: !t,
                onChange: (e) => s({ combosEnabled: e }),
            }),
            (0, p.jsx)(L.d, {
                label: g.intl.string(g.t["Ax+IoW"]),
                description: g.intl.string(g.t["9rgQEr"]),
                checked: n,
                disabled: !t,
                onChange: (e) => s({ comboSoundsEnabled: e }),
            }),
            (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(M.E, {
                        variant: "text-md/semibold",
                        color: r ? "text-muted" : "text-strong",
                        className: rD.KF,
                        children: g.intl.string(g.t.L0oQuh),
                    }),
                    (0, p.jsx)(rB, { children: g.intl.string(g.t["/OOFpL"]) }),
                    (0, p.jsx)(i7.A, {
                        disabled: r,
                        markers: rP,
                        stickToMarkers: !0,
                        minValue: rP[0],
                        maxValue: rP[rP.length - 1],
                        initialValue: l,
                        onValueChange: (e) => s({ combosRequiredCount: e }),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
        ],
    });
}
function rY(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: i, shakeIntensity: n, screenshakeEnabledLocations: l },
            updateSettings: s,
        } = e,
        r = (0, O.bG)([iW.A], () => iW.A.useReducedMotion),
        a = !t || !i || r;
    return (0, p.jsxs)(ia.n, {
        label: g.intl.string(g.t.wVS5Sd),
        children: [
            (0, p.jsx)(L.d, {
                label: g.intl.string(g.t.N004zO),
                description: r ? g.intl.string(g.t.GckHGw) : g.intl.string(g.t.Qq5W3v),
                checked: i && !r,
                disabled: !t || r,
                onChange: (e) => s({ screenshakeEnabled: e }, 1),
            }),
            (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(M.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: rD.KF,
                        children: g.intl.string(g.t.UxnnC4),
                    }),
                    (0, p.jsx)(rB, { children: g.intl.string(g.t.CEOEOb) }),
                    (0, p.jsx)(i7.A, {
                        disabled: a,
                        markers: rU,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: rU[0],
                        maxValue: rU[rU.length - 1],
                        initialValue: n,
                        onValueChange: (e) => {
                            var t;
                            null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > n &&
                                (0, rS._)(rx.sn.MORE),
                                s(t, 1);
                        },
                        onMarkerRender: (e) => (e === rU[rU.length - 1] ? g.intl.string(g.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, p.jsx)(rw, {
                disabled: a,
                locations: [
                    {
                        location: rL.uD.CHAT_INPUT,
                        title: g.intl.string(g.t.vUcvPP),
                        description: g.intl.string(g.t.y00OrF),
                    },
                    {
                        location: rL.uD.VOICE_USER,
                        title: g.intl.string(g.t.TcRO54),
                        description: g.intl.string(g.t.YJCxVY),
                    },
                    {
                        location: rL.uD.MENTION,
                        title: g.intl.string(g.t.oW4shO),
                        description: g.intl.string(g.t["mqfw/H"]),
                    },
                ],
                settingsLocations: l,
                onChange: (e) => s({ screenshakeEnabledLocations: e }, 1),
            }),
        ],
    });
}
function rH(e) {
    let { updateSettings: t } = e;
    return (0, p.jsx)(ia.n, {
        label: g.intl.string(g.t.EuXv2q),
        children: (0, p.jsxs)(R.B, {
            gap: 16,
            children: [
                (0, p.jsx)("div", { children: g.intl.string(g.t["1SLnki"]) }),
                (0, p.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: rD.hw,
                    children: (0, p.jsx)(eh.$, {
                        variant: "primary",
                        size: "sm",
                        text: g.intl.string(g.t.qz65yY),
                        onClick: () => {
                            t({ enabled: !1, settingsVisible: !1 }), (0, lT.default)();
                        },
                    }),
                }),
            ],
        }),
    });
}
function rK(e) {
    let { onChangePage: t } = e;
    return (0, p.jsxs)(V.D, {
        onClick: () => t(1),
        className: rD.Tq,
        children: [
            (0, p.jsx)("div", {
                className: rD.w1,
                children: (0, p.jsx)(rg.O, { size: "md", color: w.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, p.jsxs)("div", {
                className: rD.qL,
                children: [
                    (0, p.jsx)(eA.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: g.intl.string(g.t["6jI0hd"]),
                    }),
                    (0, p.jsx)(M.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: g.intl.string(g.t.GuUItX),
                    }),
                ],
            }),
            (0, p.jsx)(th._, { size: "custom", color: "currentColor", width: 16, className: rD.nT }),
        ],
    });
}
let rW = () =>
    i
        .e("4660")
        .then(i.t.bind(i, 662336, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
function rZ(e) {
    let { onChangePage: t, setShowEnableAnimation: i } = e,
        n = (0, O.cf)([rc.A], () => rc.A.getState()),
        [l, s] = N.useState({ x: 0, y: 0 }),
        r = (0, rR.A)(),
        a = (e, t) => {
            var s, a, o, u, d, c, g, m;
            if (
                (e.enabled &&
                    !1 === n.enabled &&
                    (i(!0),
                    (0, rh.Ak)("poggermode_enabled"),
                    (0, rT.fO)({ duration: 2e3, intensity: e.shakeIntensity ?? n.shakeIntensity })),
                (0, rp.O9)(e),
                null == t)
            )
                return;
            let A =
                ((s = n.confettiEnabled),
                (a = e.confettiEnabled),
                (o = n.enabled),
                (u = e.enabled),
                (a ?? s) && (u ?? o));
            0 === t && A && r.fire(l.x, l.y, { settings: e });
            let h =
                ((d = n.screenshakeEnabled),
                (c = e.screenshakeEnabled),
                (g = n.enabled),
                (m = e.enabled),
                (c ?? d) && (m ?? g));
            1 === t && h && (0, rT.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? n.shakeIntensity });
        },
        o = (e) => {
            s({ x: e.clientX, y: e.clientY });
        };
    return (
        N.useEffect(
            () => (window.addEventListener("mousemove", o), () => window.removeEventListener("mousemove", o)),
            [],
        ),
        (0, p.jsxs)(R.B, {
            gap: 24,
            children: [
                (0, p.jsx)(rF, { settings: n, updateSettings: a }),
                (0, p.jsx)(rK, { onChangePage: t }),
                (0, p.jsx)(rX, { settings: n, updateSettings: a }),
                (0, p.jsx)(rY, { settings: n, updateSettings: a }),
                (0, p.jsx)(rz, { settings: n, updateSettings: a }),
                (0, p.jsx)(rH, { updateSettings: a }),
            ],
        })
    );
}
let rQ = (e) => (0 === e ? rA.f.LEFT : rA.f.RIGHT),
    rq = (0, o.E2)(u.X.POGGERMODE_SETTING, {
        Component: function () {
            let [e, t] = N.useState(0),
                [i, n] = N.useState(rQ(e)),
                [l, s] = N.useState(!1),
                r = (0, O.bG)([iW.A], () => iW.A.useReducedMotion),
                a = l && !r;
            return (
                N.useEffect(() => {
                    let t = setTimeout(() => {
                        n(rQ(e));
                    }, 500);
                    return () => clearTimeout(t);
                }, [e]),
                N.useEffect(() => {
                    (0, rE._)(rk[e]);
                }, [e]),
                N.useEffect(() => {
                    Math.random() > 0.99 && (0, rS._)(rx.sn.VISITOR_100);
                }, []),
                (0, p.jsxs)(p.Fragment, {
                    children: [
                        (0, p.jsx)(rA.A, {
                            className: rD.l3,
                            step: e,
                            direction: i,
                            children: ((e, t, i) => {
                                let n = (e) => () => {
                                    t(e);
                                };
                                switch (e) {
                                    case 0:
                                        return (0, p.jsx)(rZ, { onChangePage: n(1), setShowEnableAnimation: i });
                                    case 1:
                                        return (0, p.jsx)(rO, { onBackClick: n(0) });
                                    default:
                                        return null;
                                }
                            })(e, t, s),
                        }),
                        (0, p.jsx)("div", {
                            className: a ? rD.Sr : rD.IP,
                            children: (0, p.jsx)(rm.a, {
                                className: rD.gT,
                                importData: rW,
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
            g.intl.string(g.t.AtCukI),
            g.intl.string(g.t.mqxwJO),
            g.intl.string(g.t.wVS5Sd),
            g.intl.string(g.t.Xz0ole),
            g.intl.string(g.t["Ax+IoW"]),
            g.intl.string(g.t["6jI0hd"]),
            g.intl.string(g.t.s0KCgF),
        ],
    }),
    rJ = (0, o.zZ)(u.X.POGGERMODE_CATEGORY, { buildLayout: () => [rq] });
var r$ = i(502220);
let r0 = (0, o.t_)(u.X.POGGERMODE_PANEL, { useTitle: () => g.intl.string(g.t.AtCukI), buildLayout: () => [rJ] }),
    r1 = (0, o.i4)(u.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.AtCukI),
        icon: () => (0, p.jsx)("img", { alt: "", src: i(724405), className: r$.$ }),
        usePredicate: () => (0, O.bG)([rc.A], () => rc.A.settingsVisible),
        buildLayout: () => [r0],
    });
var r2 = i(831544),
    r3 = i(235661),
    r4 = i(212245),
    r5 = i(329551),
    r8 = i(285918),
    r6 = i(413339),
    r7 = i(952572),
    r9 = i(382003);
let ae = (0, o.E2)(u.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.lZTUPs)],
        usePredicate: r7.A,
        Component: function () {
            let e = (0, r4.p)(),
                t = N.useRef(!1),
                i = (0, O.bG)([sy.Ay], () => sy.Ay.getVideoDeviceId()),
                [n, l] = N.useState((0, r5.i)(t3.default.getCurrentUser())),
                s = N.useRef(n);
            return (
                N.useEffect(
                    () => () => {
                        t.current && (0, r8._C)(s.current);
                    },
                    [],
                ),
                (0, p.jsx)(r9.A, {
                    selectedBackgroundOption: n,
                    onSelectBackgroundOption: (i) => {
                        (t.current = !0), (s.current = i), l(i), (0, r6.gB)(i, { location: e.location }).catch(Q.tEg);
                    },
                    currentDeviceId: i,
                })
            );
        },
    }),
    at = (0, o.zD)(u.X.CAMERA_PREVIEW_PREFERENCE, {
        useTitle: () => g.intl.string(g.t["3Ppr1h"]),
        useSubtitle: () => g.intl.string(g.t.WNbX4O),
        useValue: c.bm.useSetting,
        setValue: (e) => {
            c.bm.updateSetting(e), X.default.track(Q.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
        },
    });
var ai = i(625841),
    an = i(74848),
    al = i(204050);
let as = (0, nN.D)(() => ({ previewEnabled: !1 }));
var ar = i(731854);
let aa = (0, o.E2)(u.X.CAMERA_SELECTION_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.FsQ3OR)],
    Component: function () {
        let e = (0, O.bG)([sy.Ay], () => sy.Ay.isVideoAvailable()),
            { id: t } = (0, an.x5)(ar.oh.VIDEO_INPUT),
            { analyticsLocations: i } = (0, nU.Ay)();
        return (0, p.jsx)(ai.U, {
            label: g.intl.string(g.t.FsQ3OR),
            deviceType: ar.oh.VIDEO_INPUT,
            location: "UserSettingsCameraSelect",
            isDisabled: !e,
            helperText: (0, al.p)()
                ? g.intl.format(g.t.aJYgRt, {
                      onCameraSettingsClick: () => {
                          as.setState({ previewEnabled: !1 }),
                              window.open((0, al.i)(t)),
                              X.default.track(Q.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: i });
                      },
                  })
                : void 0,
        });
    },
});
var ao = i(745317),
    au = i(698292);
let ad = (0, o.E2)(u.X.CAMERA_VIDEO_PREVIEW, {
        useSearchTerms: () => [g.intl.string(g.t.JIf4v7)],
        Component: function () {
            let e = sy.Ay.getCameraComponent(),
                t = (0, O.bG)([sy.Ay], () => sy.Ay.getVideoDeviceId()),
                i = as.useField("previewEnabled"),
                n = (0, O.bG)([sy.Ay], () => sy.Ay.isVideoAvailable());
            return ((0, e8.l0)(() => {
                as.setState({ previewEnabled: !1 });
            }),
            i)
                ? (0, p.jsx)("div", {
                      className: au.T,
                      children: (0, p.jsxs)("div", {
                          className: au.U,
                          children: [
                              (0, p.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !i }),
                              (0, p.jsx)(ao.k, {}),
                          ],
                      }),
                  })
                : (0, p.jsx)("div", {
                      className: au.T,
                      children: (0, p.jsx)(e0.m, {
                          text: n ? null : g.intl.string(g.t["8jSzSe"]),
                          children: (0, p.jsx)(eh.$, {
                              variant: "primary",
                              text: g.intl.string(g.t.JIf4v7),
                              onClick: () => as.setState({ previewEnabled: !0 }),
                              disabled: !n,
                          }),
                      }),
                  });
        },
    }),
    ac = (0, o.zZ)(u.X.CAMERA_CATEGORY, {
        useTitle: () => g.intl.string(g.t.uje3P9),
        usePredicate: () => (0, O.bG)([sy.Ay], () => sy.Ay.supports(ar.O5.VIDEO)),
        buildLayout: () => [ad, at, aa, ae],
    });
var ag = i(827343);
let am = (0, o.zD)(u.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => g.intl.string(g.t.qFphsa),
        useSubtitle: () => g.intl.string(g.t.cQfwyY),
        usePredicate: function () {
            return (0, le.j9)();
        },
        useValue: function () {
            return (0, O.bG)([sy.Ay], () => sy.Ay.getOpenH264Enabled());
        },
        setValue: function (e) {
            ag.A.setOpenH264Enabled(e),
                (0, lt.A)({
                    title: g.intl.string(g.t["9jf31O"]),
                    subtitle: g.intl.string(g.t["J2wg+X"]),
                    confirmText: g.intl.string(g.t.BddRzS),
                    onConfirm: () => l3.A.app.relaunch(),
                });
        },
        useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
    }),
    aA = (0, o.zD)(u.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
        useTitle: () => g.intl.string(g.t["r6K+TL"]),
        useSubtitle: () => g.intl.string(g.t["xl9+I6"]),
        useValue: function () {
            return (0, O.bG)([sy.Ay], () => sy.Ay.getAecDump());
        },
        setValue: ag.A.setAecDump,
        usePredicate: function () {
            return (0, O.bG)([sy.Ay], () => sy.Ay.isAecDumpSupported());
        },
    });
var ah = i(139033),
    aE = i(862482),
    aT = i(640238),
    aS = i(825484),
    ax = i(77138),
    ap = i(487329),
    aN = i(353835);
let a_ = (0, nN.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function af() {
    let e = await l3.A.fileManager.getLogPath();
    l3.A.fileManager.showItemInFolder(e);
}
function ab(e) {
    (0, lt.A)({
        title: g.intl.string(g.t["7UXEF2"]),
        subtitle: g.intl.string(g.t.IYPrRl),
        confirmText: g.intl.string(g.t.BddRzS),
        onConfirm: () => ag.A.setDebugLogging(e),
    });
}
async function aC(e) {
    let { onUploadStart: t, onUploadFinish: i } = e;
    t?.();
    try {
        let e, t;
        await sy.Ay.getMediaEngine().writeAudioDebugState(),
            await aN.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, ax.a)(Q.Umv.RTC),
            (e = g.intl.string(g.t["fKBB8+"])),
            (t = g.intl.string(g.t.BvyxE7)),
            (0, ah.A)({ title: e, subtitle: t });
    } catch (s) {
        var n;
        let e, t, i, l;
        (n = s.displayMessage),
            (e = g.intl.string(g.t.QZg0J7)),
            (t = n ?? g.intl.string(g.t.VzHcSm)),
            (i = (0, ap.B1)(ap.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (l = g.intl.formatToPlainString(g.t.ejOT95, { errorCode: i })),
            (0, f.openModal)((i) =>
                (0, p.jsx)(aT.a, {
                    header: e,
                    confirmButtonColor: aE.$n.Colors.BRAND,
                    confirmText: g.intl.string(g.t.BddRzS),
                    ...i,
                    children: (0, p.jsxs)("div", {
                        style: { display: "flex", flexDirection: "column", height: "100%" },
                        children: [
                            (0, p.jsx)(M.E, { variant: "text-md/normal", children: t }),
                            (0, p.jsx)(M.E, {
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
async function aI() {
    await aC({
        onUploadStart: () => a_.setState({ isUploading: !0 }),
        onUploadFinish: () => a_.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let av = (0, o.E2)(u.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [g.intl.string(g.t["726JHL"]), g.intl.string(g.t.EbwFfR), g.intl.string(g.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, O.bG)([sy.Ay], () => sy.Ay.supports(ar.O5.DEBUG_LOGGING));
        return le.Av && e && null != l3.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, O.bG)([sy.Ay], () => sy.Ay.getDebugLogging()),
            t = a_.useField("isUploading"),
            i = a_.useField("isDisabled"),
            n = N.useId();
        return (0, p.jsxs)("fieldset", {
            children: [
                (0, p.jsx)(F.A, { tag: "legend", id: n, children: g.intl.string(g.t["FjN+et"]) }),
                (0, p.jsxs)(R.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, p.jsx)(L.d, {
                            label: g.intl.string(g.t["726JHL"]),
                            description: g.intl.string(g.t["/7ak9Q"]),
                            checked: e,
                            onChange: ab,
                        }),
                        (0, p.jsx)("div", {
                            role: "group",
                            "aria-labelledby": n,
                            children: (0, p.jsxs)(aS.e, {
                                children: [
                                    (0, p.jsx)(eh.$, {
                                        variant: "secondary",
                                        text: g.intl.string(g.t.EbwFfR),
                                        onClick: aI,
                                        loading: t,
                                        disabled: i,
                                        "aria-label": g.intl.string(g.t.aY1OH2),
                                    }),
                                    (0, p.jsx)(eh.$, {
                                        variant: "secondary",
                                        text: g.intl.string(g.t.nuPtYi),
                                        onClick: af,
                                        "aria-label": g.intl.string(g.t["L/hFOe"]),
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
var aj = i(233545),
    ay = i(412780);
function aO() {
    return (0, O.bG)([t3.default, sy.Ay], () => {
        let e = t3.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            i = "canary" === li.Ay.releaseChannel || "development" === li.Ay.releaseChannel,
            n = sy.Ay.supports(ar.O5.CONNECTION_REPLAY);
        return t && i && n;
    });
}
let aR = (0, o.zD)(u.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => g.intl.string(g.t.U4FgFK),
        useSubtitle: () => g.intl.string(g.t.Lm72RU),
        useValue: function () {
            return (0, O.bG)([ay.Ay], () => ay.Ay.shouldRecordNextConnection());
        },
        setValue: aj.Et,
        usePredicate: aO,
    }),
    aL = (0, o.Tf)(u.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => g.intl.string(g.t.nJnOHO),
        useLabel: () => g.intl.string(g.t["3xjX0U"]),
        onClick: aj.YW,
        usePredicate: aO,
    });
var aD = i(926919),
    aG = i(111162),
    aP = i(698723);
let aU = (0, o.zD)(u.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
        useTitle: () => g.intl.string(g.t["0CEP6e"]),
        useSubtitle: () => g.intl.string(g.t["kBXuW+"]),
        useValue: function () {
            return (0, O.bG)([aG.default], () => aG.default.isStreamInfoOverlayEnabled);
        },
        setValue: function (e) {
            let t = aG.default.isStreamInfoOverlayEnabled;
            (0, aP.A)("stream_info_overlay_enabled", e, t), (0, aD.x)({ isStreamInfoOverlayEnabled: e });
        },
        usePredicate: function () {
            return c.Q_.useSetting();
        },
    }),
    aV = (0, o.bd)(u.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? g.intl.string(g.t["/B4I8H"]) : g.intl.string(g.t.BTlsWH)),
        useCollapsedSubtitle: () => g.intl.string(g.t.la1Ys4),
        buildLayout: () => [aU, aA, aR, aL, av],
    });
function aM(e, t, i) {
    (0, lt.A)({ title: e, subtitle: t, confirmText: g.intl.string(g.t.BddRzS), onConfirm: i });
}
let ak = (0, o.Tf)(u.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => g.intl.string(g.t.SXfv1v),
        useSubtitle: () => g.intl.string(g.t["buA5/q"]),
        useLabel: () => g.intl.string(g.t.yBZMsQ),
        onClick: function () {
            aM(g.intl.string(g.t["4iKQ/3"]), g.intl.string(g.t.sQ42iT), ag.A.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    aw = (0, o.zZ)(u.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.UDAU9K),
        buildLayout: () => [am, aV, ak],
    });
var aB = i(347481),
    aF = i(533488),
    az = i(199966),
    aX = i(963935);
function aY(e) {
    let { title: t } = e;
    return t;
}
function aH(e) {
    let { useTitle: t, settingKey: i, formatter: n, index: l } = e,
        s = t();
    return "string" == typeof s ? n({ title: s, index: l, key: i }) : s;
}
function aK(e) {
    let { setting: t, formatter: i, index: n } = e;
    return () => (0, p.jsx)(aH, { useTitle: t.useTitle, settingKey: t.key, formatter: i, index: n }, t.key);
}
function aW(e) {
    return e.type === aX.Z6.LIST;
}
function aZ(e, t) {
    let { limit: i = 2, formatter: n = aY } = t ?? {};
    ty()(i > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { visibleDirectory: l, accessibleDirectory: s } = (0, az._)(),
        r = l.get(e) ?? s.get(e);
    ty()(
        null != r && (r.type === aX.Z6.ACCORDION || aW(r)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let a = aW(r) ? (r.collapseAfter ?? 0) : 0,
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
        let l = Math.min(i, 3);
        if (t.length <= l)
            if (1 === t.length)
                return g.intl.format(g.t["3H9tCW"], { settingOneHook: aK({ setting: t[0], formatter: n, index: 0 }) });
            else if (2 === t.length)
                return g.intl.format(g.t.MWryo6, {
                    settingOneHook: aK({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: aK({ setting: t[1], formatter: n, index: 1 }),
                });
            else
                return g.intl.format(g.t.a00b5G, {
                    settingOneHook: aK({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: aK({ setting: t[1], formatter: n, index: 1 }),
                    settingThreeHook: aK({ setting: t[2], formatter: n, index: 2 }),
                });
        return 1 === l
            ? g.intl.format(g.t.O8vNbS, { settingOneHook: aK({ setting: t[0], formatter: n, index: 0 }) })
            : 2 === l
              ? g.intl.format(g.t["acXG/W"], {
                    settingOneHook: aK({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: aK({ setting: t[1], formatter: n, index: 1 }),
                })
              : g.intl.format(g.t["5+ldWc"], {
                    settingOneHook: aK({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: aK({ setting: t[1], formatter: n, index: 1 }),
                    settingThreeHook: aK({ setting: t[2], formatter: n, index: 2 }),
                });
    }, [i, a, o, n]);
}
let aQ = (0, o.zD)(u.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => g.intl.string(g.t.cUMdH0),
        useSubtitle: () => g.intl.string(g.t["6EjbvA"]),
        useValue: function () {
            return (0, O.bG)([sy.Ay], () => sy.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            ag.A.setAutomaticGainControl(e, { page: Q.liQ.USER_SETTINGS, section: Q.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, O.bG)([sy.Ay, aB.A], () => {
                let e = sy.Ay.getInputDeviceId();
                return aB.A.hasAutomaticGainControl(e);
            });
        },
        usePredicate: function () {
            return (0, O.bG)([sy.Ay], () => sy.Ay.isAutomaticGainControlSupported() && sy.Ay.isInputProfileCustom());
        },
    }),
    aq = (0, o.sN)(u.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => g.intl.string(g.t.AlybXj),
        setValue: (e) =>
            ag.A.setAttenuation(e, sy.Ay.getAttenuateWhileSpeakingSelf(), sy.Ay.getAttenuateWhileSpeakingOthers()),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => sy.Ay.getAttenuation(),
    }),
    aJ = (0, o.zD)(u.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => g.intl.string(g.t["9dHxRY"]),
        useValue: () => (0, O.bG)([sy.Ay], () => sy.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => ag.A.setAttenuation(sy.Ay.getAttenuation(), e, sy.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    a$ = (0, o.zD)(u.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => g.intl.string(g.t.SMt0Gr),
        useValue: () => (0, O.bG)([sy.Ay], () => sy.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => ag.A.setAttenuation(sy.Ay.getAttenuation(), sy.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    a0 = (0, o.FW)(u.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => g.intl.string(g.t.oSdBvW),
        useSubtitle: () => g.intl.string(g.t["0A/8Rt"]),
        usePredicate: () => (0, O.bG)([sy.Ay], () => sy.Ay.supports(ar.O5.ATTENUATION)),
        buildLayout: () => [aq, aJ, a$],
    });
var a1 = i(801644);
let a2 = (0, o.zD)(u.X.VOICE_HARDWARE_MUTE_SILENCE_ALERT_SETTING, {
        useTitle: () => g.intl.string(g.t.pZ0vr4),
        useSubtitle: () => g.intl.string(g.t.tVbzoZ),
        useValue: function () {
            return (0, O.bG)([nT.Ay], () => !nT.Ay.disableHardwareMuteSilenceAlert);
        },
        setValue: function (e) {
            (0, aP.A)("hardware_mute_silence_alert_enabled", e, !nT.Ay.disableHardwareMuteSilenceAlert),
                lH.Ay.updatedUnsyncedSettings({ disableHardwareMuteSilenceAlert: !e });
        },
        usePredicate: function () {
            let { enableHardwareSilenceWarning: e } = a1.A.useConfig({ location: "HardwareMuteSilenceAlertSetting" });
            return e;
        },
    }),
    a3 = (0, o.zD)(u.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => g.intl.string(g.t.DFPXIG),
        useSubtitle: () => g.intl.string(g.t["UyRX+C"]),
        useValue: function () {
            return (0, O.bG)([sy.Ay], () => sy.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            ag.A.setBypassSystemInputProcessing(e);
        },
        usePredicate: function () {
            return (0, O.bG)([sy.Ay], () => sy.Ay.showBypassSystemInputProcessing() && sy.Ay.isInputProfileCustom());
        },
    }),
    a4 = (0, o.zD)(u.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
        useTitle: () => g.intl.string(g.t.jrWHD3),
        useSubtitle: () => g.intl.string(g.t.YCCMkJ),
        useValue: function () {
            return (0, O.bG)([nT.Ay], () => !nT.Ay.disableVoiceChannelChangeAlert);
        },
        setValue: function (e) {
            (0, aP.A)("switch_channel_warning_enabled", e, !nT.Ay.disableVoiceChannelChangeAlert),
                lH.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e });
        },
    }),
    a5 = (0, o.zD)(u.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
        useTitle: () => g.intl.string(g.t.BbESsg),
        useSubtitle: () => g.intl.string(g.t.LoOB1F),
        useValue: function () {
            return (0, O.bG)([sy.Ay], () => {
                let { vadUseKrisp: e } = sy.Ay.getModeOptions();
                return e;
            });
        },
        setValue: function (e) {
            let t = sy.Ay.getMode();
            ag.A.setMode(t, { vadUseKrisp: e });
        },
        useDisabled: function () {
            return (0, O.bG)([sy.Ay], () => {
                let e = sy.Ay.getMode(),
                    t = sy.Ay.getModeOptions().autoThreshold;
                return e === Q.TBI.VOICE_ACTIVITY && t;
            });
        },
        usePredicate: function () {
            return (0, O.bG)([sy.Ay], () => sy.Ay.isAdvancedVoiceActivitySupported() && sy.Ay.isInputProfileCustom());
        },
    }),
    a8 = (0, o.Hn)(u.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => g.intl.string(g.t.wVBHr0),
        useValue: function () {
            return (0, O.bG)([sy.Ay], () => sy.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            aM(g.intl.string(g.t.uY7AcQ), g.intl.string(g.t.gBqik6), () => ag.A.setAudioSubsystem(e));
        },
        useOptions: function () {
            let {
                legacyAudioSubsystemSupported: e,
                experimentalAudioSubsystemSupported: t,
                automaticAudioSubsystemSupported: i,
            } = (0, O.cf)([sy.Ay], () => ({
                legacyAudioSubsystemSupported: sy.Ay.supports(ar.O5.LEGACY_AUDIO_SUBSYSTEM),
                experimentalAudioSubsystemSupported: sy.Ay.supports(ar.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
                automaticAudioSubsystemSupported: sy.Ay.supports(ar.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
            }));
            return N.useMemo(() => {
                let n;
                return (
                    (n = [{ id: ar.rB.STANDARD, value: ar.rB.STANDARD, label: g.intl.string(g.t.dqb2JZ) }]),
                    e && n.push({ id: ar.rB.LEGACY, value: ar.rB.LEGACY, label: g.intl.string(g.t["TYfH+5"]) }),
                    t &&
                        n.push({ id: ar.rB.EXPERIMENTAL, value: ar.rB.EXPERIMENTAL, label: g.intl.string(g.t.liQmtr) }),
                    i && n.push({ id: ar.rB.AUTOMATIC, value: ar.rB.AUTOMATIC, label: g.intl.string(g.t.qNgtO1) }),
                    n
                );
            }, [i, t, e]);
        },
        usePredicate: function () {
            return (0, O.bG)([sy.Ay], () => sy.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    a6 = (0, o.zD)(u.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => g.intl.string(g.t.uancuJ),
        useSubtitle: () => g.intl.string(g.t.I1Eoqq),
        useValue: function () {
            return (0, O.bG)([sy.Ay], () => sy.Ay.getQoS());
        },
        setValue: function (e) {
            ag.A.setQoS(e);
        },
        usePredicate: function () {
            return (0, O.bG)([sy.Ay], () => sy.Ay.supports(ar.O5.QOS));
        },
    }),
    a7 = (0, o.zD)(u.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => g.intl.string(g.t["4rsOPQ"]),
        useSubtitle: () => g.intl.string(g.t.jtiiCw),
        useValue: function () {
            return (0, O.bG)([sy.Ay], () => sy.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            ag.A.setSilenceWarning(e);
        },
        usePredicate: function () {
            return ev.isPlatformEmbedded;
        },
    }),
    a9 = (0, o.bd)(u.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? g.intl.string(g.t.KHsSWK) : g.intl.string(g.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            aZ(u.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, O.bG)([sy.Ay], () => sy.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [aQ, a5, a3, a7, a2, a4, a0, a8, a6],
    }),
    oe = (0, o.zD)(u.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => g.intl.string(g.t.iWTwu6),
        useValue: function () {
            return (0, O.bG)([sy.Ay], () => sy.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            ag.A.setEchoCancellation(e, { page: Q.liQ.USER_SETTINGS, section: Q.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, O.bG)([sy.Ay, aB.A], () => {
                let e = sy.Ay.getInputDeviceId();
                return aB.A.hasEchoCancellation(e);
            });
        },
        usePredicate: function () {
            return (0, O.bG)([sy.Ay], () => sy.Ay.isInputProfileCustom());
        },
    });
var ot = i(205693),
    oi = i(451988),
    on = i(640940),
    ol = i(160671);
let os = (0, lp.Ld)();
function or(e) {
    let { isSpeaking: t, className: i, id: n, ariaDescribedBy: l, ariaLabelledBy: s, disabled: r } = e;
    return (0, p.jsx)("div", {
        role: "meter",
        className: ew()(on.$I, i),
        id: n,
        "aria-describedby": l,
        "aria-labelledby": s,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? g.intl.string(g.t.haLKZ0) : g.intl.string(g.t.X2hJL7),
        children: (0, p.jsx)("div", { className: ew()(on.Jx, on.NU, { [on.zY]: t && !r, [on.r9]: r }) }),
    });
}
function oa(e) {
    let { volume: t, id: i, ariaDescribedBy: n, ariaLabelledBy: l, disabled: s } = e,
        { threshold: r, autoThreshold: a } = (0, O.cf)([sy.Ay], () => ({
            threshold: sy.Ay.getModeOptions().threshold,
            autoThreshold: sy.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, O.bG)([sy.Ay], () => sy.Ay.getMode());
    return (0, p.jsx)("section", {
        className: ew()(on.Mo, on.jW),
        id: i,
        "aria-describedby": n,
        "aria-labelledby": l,
        children: (0, p.jsx)(i7.A, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return (t = -((100 - e) * 1)), void ag.A.setMode(o, { threshold: t, autoThreshold: a });
            },
            barStyles: { background: w.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: w.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": os,
            disabled: s,
            children: (0, p.jsxs)("div", {
                className: ew()(on.NU, on.TL, on.Jx, ol.bar),
                children: [
                    (0, p.jsx)("div", { className: ew()(on.GS, on.SH), style: { width: s ? 0 : t + 100 + "%" } }),
                    (0, p.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let oo = (0, o.E2)(u.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [g.intl.string(g.t["sqUm+k"]), g.intl.string(g.t.I1Zuq0), g.intl.string(g.t.nuFtHH)],
    usePredicate: () => (0, O.bG)([sy.Ay], () => sy.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, O.cf)([sy.Ay], () => ({
                autoThreshold: sy.Ay.getModeOptions().autoThreshold,
                disabled: sy.Ay.getMode() !== ar.TB.VOICE_ACTIVITY,
            })),
            i = N.useCallback((e) => {
                let t = sy.Ay.getMode(),
                    { threshold: i } = sy.Ay.getModeOptions();
                ag.A.setMode(t, { autoThreshold: e, threshold: i });
            }, []),
            n = (0, O.bG)([sy.Ay], () => sy.Ay.supports(ar.O5.AUTOMATIC_VAD)),
            { volume: l, isSpeaking: s } = (function () {
                let [e, t] = N.useState(-100),
                    [i, n] = N.useState(!1);
                function l(e, i) {
                    t(e), n((i & ar.ME.VOICE) === ar.ME.VOICE);
                }
                return (
                    N.useEffect(() => {
                        let e = new oi.Ep();
                        return (
                            e.start(1e3, () => {
                                sy.Ay.getMediaEngine().on(ot.bg.VoiceActivity, l), e.stop();
                            }),
                            () => {
                                sy.Ay.getMediaEngine().removeListener(ot.bg.VoiceActivity, l), e.stop();
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: i }
                );
            })(),
            r = (0, O.bG)([sy.Ay], () => sy.Ay.isEnabled()),
            a = N.useMemo(
                () =>
                    !r &&
                    (0, p.jsx)("div", {
                        className: on.B4,
                        children: (0, p.jsx)(y.w, {
                            type: "warning",
                            children: g.intl.format(g.t["O13I+O"], { onEnableClick: () => ag.A.enable(!0) }),
                        }),
                    }),
                [r],
            ),
            o = N.useMemo(() => (e ? g.intl.string(g.t.JsbzjA) : g.intl.string(g.t.MLmyMY)), [e]),
            u = N.useId(),
            d = N.useId();
        return n
            ? (0, p.jsxs)("fieldset", {
                  "aria-describedby": d,
                  children: [
                      (0, p.jsx)(F.A, { tag: "legend", id: u, children: g.intl.string(g.t.GByLar) }),
                      (0, p.jsx)(F.A, { id: d, children: o }),
                      (0, p.jsxs)(R.B, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, p.jsx)(L.d, {
                                  disabled: t,
                                  label: g.intl.string(g.t.lY6j47),
                                  description: o,
                                  checked: e,
                                  onChange: i,
                              }),
                              e
                                  ? (0, p.jsx)(or, {
                                        isSpeaking: s,
                                        className: on.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, p.jsx)(oa, { volume: l, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
                              a,
                          ],
                      }),
                  ],
              })
            : (0, p.jsxs)(R.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, p.jsx)(lO.D, {
                          label: g.intl.string(g.t["sqUm+k"]),
                          description: o,
                          layout: "vertical",
                          children: (i) =>
                              e
                                  ? (0, p.jsx)(or, {
                                        isSpeaking: s,
                                        className: on.UJ,
                                        id: i.controlId,
                                        ariaDescribedBy: i.describedById,
                                        ariaLabelledBy: i.labelId,
                                        disabled: t,
                                    })
                                  : (0, p.jsx)(oa, {
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
var ou = i(366010);
let od = i(993830),
    oc = i(413142),
    og = { page: Q.liQ.USER_SETTINGS, section: Q.JJy.SETTINGS_VOICE_AND_VIDEO };
function om() {
    let e = (0, O.bG)([iu.A], () => (0, ou.q)(iu.A.theme));
    return (0, p.jsx)("img", { src: e ? od : oc, width: 48, height: 32, alt: "" });
}
let oA = (0, o.E2)(u.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.t8Qhib), g.intl.string(g.t.hmfkCi)],
    usePredicate: function () {
        return (0, O.bG)([sy.Ay], () => sy.Ay.isInputProfileCustom() && sy.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = N.useCallback((e) => {
                ag.A.setNoiseCancellation("KRISP" === e, og), ag.A.setNoiseSuppression("STANDARD" === e, og);
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: i,
                isNoiseSuppressionSupported: n,
                isNoiseCancellationSupported: l,
            } = (0, O.cf)([sy.Ay], () => ({
                noiseCancellation: sy.Ay.getNoiseCancellation(),
                noiseSuppression: sy.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: sy.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: sy.Ay.isNoiseCancellationSupported(),
            })),
            s = N.useMemo(() => {
                let e = [];
                return (
                    l && e.push({ id: "krisp", label: g.intl.string(g.t.rdoNzt), value: "KRISP" }),
                    n && e.push({ id: "standard", label: g.intl.string(g.t.qXeYHw), value: "STANDARD" }),
                    e.push({ id: "disabled", label: g.intl.string(g.t.wkYAlz), value: "NONE" }),
                    e
                );
            }, [l, n]),
            r = l
                ? g.intl.format(g.t["1q5aTp"], { helpArticle: ta.A.getArticleURL(Q.MVz.NOISE_SUPPRESSION) })
                : g.intl.string(g.t.OWKjw5);
        return (0, p.jsxs)(R.B, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, p.jsx)(sS.l, {
                    label: g.intl.string(g.t.t8Qhib),
                    description: r,
                    layout: "horizontal",
                    value: t ? "KRISP" : i ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: s,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                l && (0, p.jsx)(om, {}),
            ],
        });
    },
});
var oh = i(944993),
    oE = i(509381);
let oT = !le.Av;
function oS() {
    return (0, O.bG)([sy.Ay], () => sy.Ay.getMode() === ar.TB.PUSH_TO_TALK);
}
let ox = (0, o.zD)(u.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return le.Av ? g.intl.string(g.t.tG4Np5) : g.intl.string(g.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, O.bG)([sy.Ay], () => sy.Ay.getMode());
        return N.useMemo(() => {
            if (!le.Av && e === ar.TB.PUSH_TO_TALK)
                return g.intl.format(g.t["VHI4+Y"], { onDownloadClick: () => (0, oh._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, O.bG)([sy.Ay], () => sy.Ay.getActiveInputProfile() !== oE.m.STUDIO);
    },
    useValue: function () {
        return (0, O.bG)([sy.Ay], () => sy.Ay.getMode() === ar.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, n;
        (t = e ? ar.TB.PUSH_TO_TALK : ar.TB.VOICE_ACTIVITY),
            (n = [eV.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === ar.TB.PUSH_TO_TALK &&
                oT &&
                (0, f.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([i.e("31910"), i.e("10919")]).then(i.bind(i, 556506));
                    return (t) =>
                        (0, p.jsx)(e, {
                            title: g.intl.string(g.t.Kdt0Gb),
                            confirmText: g.intl.string(g.t["1WjMbC"]),
                            cancelText: g.intl.string(g.t.BddRzS),
                            onConfirm: () => (0, oh._)("PTT Limited Modal"),
                            body: g.intl.string(g.t.NIozvt),
                            ...t,
                        });
                }),
            ag.A.setMode(t, void 0, void 0, { analyticsLocations: n });
    },
    useSearchTerms: () => [g.intl.string(g.t["pS+K2L"]), g.intl.string(g.t.nuFtHH)],
});
var op = i(285802);
let oN = (0, o.E2)(u.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t["pS+K2L"]), g.intl.string(g.t.nuFtHH)],
        usePredicate: oS,
        Component: function () {
            let e = (0, O.bG)([sy.Ay], () => {
                    let { shortcut: e } = sy.Ay.getModeOptions();
                    return e;
                }),
                t = g.intl.format(g.t.HVvn5T, { onClick: () => (0, ej.openUserSettings)(u.X.KEYBINDS_PANEL) });
            return (0, p.jsx)(lO.D, {
                label: g.intl.string(g.t["o+BJQR"]),
                description: t,
                layout: "horizontal-responsive",
                children: (0, p.jsx)("div", {
                    className: op.e,
                    children: (0, p.jsx)(tR.A, {
                        defaultValue: e,
                        onChange: (e) => ag.A.setMode(Q.TBI.PUSH_TO_TALK, { shortcut: e }),
                    }),
                }),
            });
        },
    }),
    o_ = (0, o.sN)(u.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => g.intl.string(g.t.GCNMM8),
        useSearchTerms: () => [g.intl.string(g.t["pS+K2L"]), g.intl.string(g.t.nuFtHH)],
        setValue: function (e) {
            ag.A.setMode(Q.TBI.PUSH_TO_TALK, { delay: e });
        },
        minValue: 0,
        maxValue: Q.IjB,
        getInitialValue: function () {
            let { delay: e } = sy.Ay.getModeOptions();
            return e;
        },
        onValueRender: function (e) {
            return e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}\u00A0ms`;
        },
        usePredicate: oS,
    }),
    of = (0, o.Qx)(u.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => g.intl.string(g.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, aF._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [g.intl.string(g.t.nuFtHH), g.intl.string(g.t.VZPR0R), g.intl.string(g.t.cjPbpT)],
        useValue: function () {
            return (0, O.bG)([sy.Ay], () => sy.Ay.getActiveInputProfile() ?? oE.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [eV.A.USER_SETTINGS_VOICE_AND_VIDEO];
            ag.A.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, aF.d)({ location: "InputProfileCategory" });
            return [
                { value: oE.m.VOICE_ISOLATION, name: g.intl.string(g.t.cjPbpT), desc: g.intl.string(g.t.CzhvnE) },
                { value: oE.m.STUDIO, name: g.intl.string(g.t.VZPR0R), desc: g.intl.string(g.t.ZaJksS) },
                { value: oE.m.CUSTOM, name: g.intl.string(g.t["N/PQjv"]), desc: g.intl.string(g.t.SnBmuY) },
            ].filter((t) => {
                let { value: i } = t;
                return e.includes(i);
            });
        },
    }),
    ob = (0, o.zZ)(u.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, O.bG)([aB.A, sy.Ay], () => {
                let e = sy.Ay.getInputDeviceId();
                return (
                    (aB.A.hasEchoCancellation(e) || aB.A.hasNoiseSuppression(e) || aB.A.hasAutomaticGainControl(e)) &&
                    sy.Ay.isInputProfileCustom()
                );
            });
            return N.useMemo(() => {
                if (e)
                    return {
                        type: e_.lT.INLINE_NOTICE,
                        noticeType: "info",
                        useText: () => g.intl.string(g.t["/Whuzi"]),
                    };
            }, [e]);
        },
        buildLayout: () => [of, oo, oA, oe, ox, oN, o_, a9],
    });
var oC = i(403581),
    oI = i(983851),
    ov = i(687021),
    oj = i(128450),
    oy = i(796774),
    oO = i(209932),
    oR = i(536432),
    oL = i(984813),
    oD = i(22231),
    oG = i(927578),
    oP = i(792348),
    oU = i(674168),
    oV = i(126970),
    oM = i(805945),
    ok = i(902460);
function ow(e) {
    let { onSelect: t } = e,
        [i, n] = N.useState(!1),
        l = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
        s = oG.Ay.canUseCustomCallSounds(l),
        r = N.useRef(null);
    function a(e) {
        s && (n(!1), t?.(e));
    }
    return (0, p.jsx)(G.Y, {
        targetElementRef: r,
        shouldShow: i,
        position: "left",
        onRequestClose: () => n(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, p.jsx)(iO.l, {
                children: (0, p.jsx)(oV.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: s ? null : (0, p.jsx)(oU.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, p.jsx)(oM.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    n(!i);
                },
                text: g.intl.string(g.t.uOe0Az),
                children: (0, p.jsx)(oD.R, { size: "md", color: "currentColor", className: ok.Wo }),
            }),
    });
}
function oB(e) {
    let { sound: t } = e,
        { previewSound: i } = (0, oP.A)(t, null),
        n =
            0 === (0, oR.wH)()
                ? g.intl.string(g.t.OASXjt)
                : g.intl.formatToPlainString(g.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, p.jsx)(oM.dT, {
        onClick: i,
        text: n,
        children: (0, p.jsx)(oI.H, { size: "md", color: "currentColor", className: ok.wg }),
    });
}
function oF(e) {
    let { sound: t, isGlobal: i, onSelect: n } = e,
        l = null != t,
        s = t?.emojiId,
        r = t?.emojiName,
        a = l && (null != r || null != s);
    return (0, p.jsxs)("div", {
        className: ok.D6,
        children: [
            (0, p.jsxs)("div", {
                className: ok.kL,
                children: [
                    a && (0, p.jsx)(lo.A, { emojiId: s, emojiName: r, className: ok.Zg }),
                    (0, p.jsx)(M.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        className: ok.dj,
                        children:
                            null == t
                                ? g.intl.string(g.t.PoWNfe)
                                : i
                                  ? g.intl.format(g.t.B6HU6O, {
                                        soundName: t.name,
                                        subtextHook: (e) =>
                                            (0, p.jsx)(M.E, {
                                                variant: "text-xs/medium",
                                                color: "text-default",
                                                tag: "span",
                                                children: e,
                                            }),
                                    })
                                  : t.name,
                    }),
                    l
                        ? (0, p.jsx)(oB, { sound: t })
                        : (0, p.jsx)(oI.H, { size: "md", color: "currentColor", className: ok.Gk }),
                ],
            }),
            (0, p.jsxs)("div", {
                className: ok.kL,
                children: [
                    (0, p.jsx)(ow, { onSelect: n }),
                    l &&
                        !i &&
                        (0, p.jsx)(oM.dT, {
                            onClick: () => n(null),
                            text: g.intl.string(g.t.jmtcGA),
                            children: (0, p.jsx)(sp.u, {
                                size: "md",
                                color: w.A.unsafe_rawColors.RED_400.css,
                                className: ok.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var oz = i(617617);
i(980504);
var oX = i(811249);
function oY(e) {
    return (0, O.bG)([oO.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: i } = e;
        return oO.A.getSound("0" === t ? "0" : t, i);
    });
}
function oH(e) {
    let { guildId: t } = e,
        i = (0, O.bG)([oz.A], () => oz.A.settings.guilds?.guilds?.[t]?.joinSound),
        n = oY(i);
    if (null == i || null == n) return null;
    let { emojiId: l, emojiName: s } = n,
        r = null != l || null != s;
    return (0, p.jsxs)("div", {
        className: oX.Io,
        children: [
            r
                ? (0, p.jsx)(lo.A, { emojiId: l, emojiName: s, className: oX.nW })
                : (0, p.jsx)(oI.H, { size: "md", color: "currentColor", className: oX.nW }),
            (0, p.jsx)(M.E, { className: oX.dK, variant: "text-xs/medium", children: n.name }),
        ],
    });
}
let oK = (0, o.E2)(u.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, nU.Ay)(),
            [t, i] = N.useState("0"),
            n = (0, oL.mz)(t),
            l = oY(n),
            s = n?.type === oL.PP.GLOBAL,
            r = (0, O.bG)([oO.A], () => oO.A.hasFetchedAllSounds()) && null != n && null == l;
        N.useEffect(() => {
            r && (0, oR.ND)({ location: e });
        }, [r, e]),
            N.useEffect(() => {
                (0, oy.E7)();
            }, []);
        let a = N.useCallback((e, t) => {
            let { inDropdown: i } = t;
            return null == e ? null : i ? (0, p.jsx)(oH, { guildId: e.value }) : null;
        }, []);
        return (0, p.jsxs)(ia.n, {
            label: g.intl.string(g.t.nzUc3B),
            description: g.intl.format(g.t.u9RWmv, { helpdeskArticle: ta.A.getArticleURL(Q.MVz.SOUNDBOARD) }),
            children: [
                (0, p.jsx)(ov.A, {
                    guildId: t,
                    className: oX.Dt,
                    globalOption: { label: g.intl.string(g.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        i(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, p.jsxs)(oj.A, {
                    title: g.intl.format(g.t.I2TsYN, {
                        nitroWheelHook: () => (0, p.jsx)(oC.t, { size: "md", color: "currentColor", className: oX.ax }),
                    }),
                    children: [
                        (0, p.jsx)(oF, {
                            sound: l,
                            isGlobal: s,
                            onSelect: (i) => {
                                null == i ? (0, oR.Dv)(t, e) : (0, oR.un)(t, i, e);
                            },
                        }),
                        r &&
                            (0, p.jsx)(tr.p, {
                                className: oX.lm,
                                messageType: tr.Y.WARNING,
                                children: g.intl.string(g.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        });
    },
});
var oW = i(824744);
let oZ = (0, o.sN)(u.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => g.intl.string(g.t.kbFsAD),
    useSubtitle: () => g.intl.format(g.t.BPbGq7, { helpCenterArticle: ta.A.getArticleURL(Q.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [eV.A.USER_SETTINGS_VOICE_AND_VIDEO],
            i = (0, oW.w)(e);
        (0, oy.iy)(i, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, oR.wH)();
        return (0, oW.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var oQ = i(864145);
let oq = (0, o.sN)(u.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => g.intl.string(g.t["2JbvKw"]),
        useSubtitle: () => g.intl.string(g.t.INenzY),
        setValue: function (e) {
            let t = (0, oW.w)(e);
            c.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = c.HO.getSetting();
            return (0, oW.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, oQ.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    oJ = (0, o.zZ)(u.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => g.intl.string(g.t.ABjMWI),
        buildLayout: () => [oZ, oq, oK],
    });
var o$ = i(803224),
    o0 = i(552122);
let o1 = (0, o.E2)(u.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [g.intl.string(g.t.fgSHf8)],
        usePredicate: () => null != o0.A.useHolidaySoundpack(),
        Component: () =>
            (0, p.jsx)(M.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: g.intl.format(g.t.Eup6Wv, {
                    onClick: () => (0, ej.openUserSettings)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    o2 = (0, o.AK)(u.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => g.intl.string(g.t.eyGEE4),
        useSearchTerms: () => [g.intl.string(g.t.eyGEE4)],
        destinationKey: u.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    o3 = (0, o.gN)(u.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [o2] });
var o4 = i(264686);
let o5 = (0, nN.D)(() => ({ currentPlayingSound: null }));
function o8() {
    let e = o5.getField("currentPlayingSound");
    e?.stop(), o5.setState({ currentPlayingSound: null });
}
function o6(e) {
    let t = o5.getField("currentPlayingSound");
    t?.stop();
    let i = (0, rh.Ak)(e);
    o5.setState({ currentPlayingSound: i });
}
function o7(e) {
    return (0, o.zD)(`${u.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => g.intl.format(g.t.OOiGCM, { onClick: () => o6(e.sound) }),
        useValue: () => {
            let t = (0, O.bG)([o$.A], () => o$.A.isSoundDisabled(e.sound)),
                i = e.useDisabled?.();
            return !t && !i;
        },
        setValue: (t) => {
            let i = o$.A.getDisabledSounds().filter((t) => t !== e.sound);
            t || i.push(e.sound), o4.default.setDisabledSounds(i);
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                i = (0, O.bG)([o$.A], () => o$.A.getDisableAllSounds());
            return t || i;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let o9 = [
        { useTitle: () => g.intl.string(g.t.hK51Yg), sound: "deafen" },
        { useTitle: () => g.intl.string(g.t.XiejaJ), sound: "undeafen" },
        { useTitle: () => g.intl.string(g.t.w4m945), sound: "mute" },
        { useTitle: () => g.intl.string(g.t.YqAjXy), sound: "unmute" },
        { useTitle: () => g.intl.string(g.t.JoTq8n), sound: "camera_on" },
        { useTitle: () => g.intl.string(g.t["8P6tQ6"]), sound: "camera_off" },
        { useTitle: () => g.intl.string(g.t["juL9/L"]), sound: "disconnect" },
        { useTitle: () => g.intl.string(g.t.x98vQq), sound: "ptt_start" },
        { useTitle: () => g.intl.string(g.t["1HjRqC"]), sound: "ptt_stop" },
        { useTitle: () => g.intl.string(g.t["9JB1Ck"]), sound: "user_join" },
        { useTitle: () => g.intl.string(g.t.KUBBNt), sound: "user_leave" },
        { useTitle: () => g.intl.string(g.t.EZjqUT), sound: "user_moved" },
        { useTitle: () => g.intl.string(g.t.LnNlQh), sound: "call_calling" },
        { useTitle: () => g.intl.string(g.t.Nd8P5y), sound: "stream_started" },
        { useTitle: () => g.intl.string(g.t["9bYj+G"]), sound: "stream_ended" },
        { useTitle: () => g.intl.string(g.t.KccUI1), sound: "stream_user_joined" },
        { useTitle: () => g.intl.string(g.t.dsjkiN), sound: "stream_user_left" },
        { useTitle: () => g.intl.string(g.t.nFOcf9), sound: "activity_launch" },
        { useTitle: () => g.intl.string(g.t["a6lw/u"]), sound: "activity_end" },
        { useTitle: () => g.intl.string(g.t.KaFxrY), sound: "activity_user_join" },
        { useTitle: () => g.intl.string(g.t.S14z9n), sound: "activity_user_left" },
        { useTitle: () => g.intl.string(g.t.CP3DC3), sound: "reconnect" },
    ],
    ue = (0, o.D1)(u.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? g.intl.formatToPlainString(g.t["0JYT98"], { count: t })
                : g.intl.formatToPlainString(g.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => aZ(u.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                o8();
            };
        },
        buildLayout: () => o9.map((e) => o7(e)),
    }),
    ut = (0, o.zZ)(u.X.SOUNDS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, O.bG)([o$.A], () => o$.A.getDisableAllSounds());
            return N.useMemo(() => {
                if (e)
                    return {
                        type: e_.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        useText: () =>
                            g.intl.format(g.t.fRvixS, {
                                onClick: () => (0, ej.openUserSettings)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                            }),
                    };
            }, [e]);
        },
        buildLayout: () => [ue, o1, o3],
    }),
    ui = (0, o.zD)(u.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => g.intl.string(g.t.e3Zz3F),
        useSubtitle: () => g.intl.string(g.t.RztTjP),
        useValue: function () {
            return !c.uh.useSetting();
        },
        setValue: function (e) {
            (0, aP.A)("stream_previews_disabled", !e, c.uh.getSetting(), [eV.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                c.uh.updateSetting(!e);
        },
    }),
    un = (0, o.zD)(u.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => g.intl.string(g.t.GmWk2E),
        useSearchTerms: () => [g.intl.string(g.t["Fj/xn1"])],
        useSubtitle: () => g.intl.string(g.t["Fj/xn1"]),
        useValue: function () {
            return (0, O.bG)([sy.Ay], () => sy.Ay.getVideoHook());
        },
        setValue: ag.A.setVideoHook,
        usePredicate: function () {
            return (0, O.bG)([sy.Ay], () => sy.Ay.supportsVideoHook());
        },
    }),
    ul = (0, o.zD)(u.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => g.intl.string(g.t["4I0qzZ"]),
        useValue: function () {
            return (0, O.bG)([sy.Ay], () => sy.Ay.getExperimentalSoundshare());
        },
        setValue: ag.A.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, O.bG)([sy.Ay], () => {
                let e = sy.Ay.supportsExperimentalSoundshare(),
                    t = sy.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    us = (0, o.zD)(u.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => g.intl.string(g.t["/jwMtn"]),
        useSubtitle: () => g.intl.string(g.t.zlA23F),
        useValue: function () {
            return (0, O.bG)([sy.Ay], () => sy.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [eV.A.USER_SETTINGS_VOICE_AND_VIDEO];
            ag.A.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return sy.Ay.supports(ar.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    ur = (0, o.sN)(u.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => g.intl.string(g.t.fhEzfj),
        setValue: function (e) {
            let t = [eV.A.USER_SETTINGS_VOICE_AND_VIDEO];
            ag.A.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: sy.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            return sy.Ay.supports(ar.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    ua = (0, o.zD)(u.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
        useTitle: () => g.intl.string(g.t.lt8rRx),
        useSubtitle: () => g.intl.string(g.t.ie1mgY),
        useValue: function () {
            return (0, O.bG)([sy.Ay], () => sy.Ay.getUseSystemScreensharePicker());
        },
        setValue: function (e) {
            (0, le.cX)() && e
                ? (0, lt.A)({
                      title: g.intl.string(g.t["9jf31O"]),
                      subtitle: g.intl.string(g.t.uBd6JW),
                      variant: "primary",
                      onConfirm: () => {
                          ag.A.setUseSystemScreensharePicker(e), l3.A.app.relaunch();
                      },
                      confirmText: g.intl.string(g.t.BddRzS),
                  })
                : ag.A.setUseSystemScreensharePicker(e);
        },
        usePredicate: function () {
            return (0, O.bG)([sy.Ay], () => sy.Ay.supportsSystemScreensharePicker() && (0, le.cX)());
        },
    }),
    uo = (0, o.bd)(u.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? g.intl.string(g.t.qrMyvm) : g.intl.string(g.t.LEtTNl)),
        useCollapsedSubtitle: () => aZ(u.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [us, ur, ua, ul, un],
    }),
    uu = (0, o.zZ)(u.X.STREAMING_CATEGORY, { useTitle: () => g.intl.string(g.t.KDdjou), buildLayout: () => [ui, uo] }),
    ud = (0, o.E2)(u.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [g.intl.string(g.t.hHMYbb), g.intl.string(g.t.nuFtHH)],
        Component: function () {
            return (0, p.jsx)(ai.U, {
                label: g.intl.string(g.t.UTM8VP),
                deviceType: ar.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !0,
            });
        },
    }),
    uc = (0, o.E2)(u.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [g.intl.string(g.t.dl18zb), g.intl.string(g.t["3182VD"]), g.intl.string(g.t["DGq/PR"])],
        Component: function () {
            return (0, p.jsx)(ai.U, {
                label: g.intl.string(g.t.xuYQ0n),
                deviceType: ar.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !0,
            });
        },
    }),
    ug = (0, o.zC)(u.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [ud, uc] }),
    um = (0, o.sN)(u.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => g.intl.string(g.t.Rtsr6w),
        useSearchTerms: () => [g.intl.string(g.t.eATD2B), g.intl.string(g.t["3182VD"]), g.intl.string(g.t["DGq/PR"])],
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = sy.Ay.getInputVolume();
            return (0, oW.M)(e);
        },
        asValueChanges: function (e) {
            let t = [eV.A.USER_SETTINGS_VOICE_AND_VIDEO],
                i = (0, oW.w)(e);
            ag.A.setInputVolume(i, { analyticsLocations: t });
        },
    }),
    uA = (0, o.sN)(u.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => g.intl.string(g.t.aUJ062),
        useSearchTerms: () => [g.intl.string(g.t.eATD2B), g.intl.string(g.t["3182VD"]), g.intl.string(g.t["DGq/PR"])],
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = sy.Ay.getOutputVolume();
            return (0, oW.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [eV.A.USER_SETTINGS_VOICE_AND_VIDEO],
                i = (0, oW.w)(e);
            ag.A.setOutputVolume(i, { analyticsLocations: t });
        },
    }),
    uh = (0, o.zC)(u.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [um, uA] });
var uE = i(702841),
    uT = i(349288),
    uS = i(152567),
    ux = i(644426);
let up = `${ta.A.getArticleURL(Q.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    uN = (0, o.E2)(u.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.nuFtHH)],
        usePredicate: function () {
            return (0, uE.bG)([sy.Ay], () => sy.Ay.supports(ar.O5.LOOPBACK));
        },
        Component: function () {
            return (0, uE.bG)([sy.Ay], () => sy.Ay.supports(ar.O5.LOOPBACK))
                ? (0, p.jsx)(uS.A, {
                      size: "md",
                      notchBackground: uS.V.GRAY,
                      captionVoice: g.intl.string(g.t.bp3JOV),
                      captionNoVoice: (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(M.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-default",
                                  children: g.intl.string(g.t.bgn75v),
                              }),
                              g.intl.string(g.t["MA+OZh"]),
                              (0, p.jsx)(uT.Anchor, {
                                  className: ux.X,
                                  href: ta.A.getArticleURL(Q.MVz.NO_INPUT_DETECTED),
                                  children: g.intl.string(g.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: g.intl.format(g.t["V+B3FH"], { guideURL: up }),
                      buttonTest: g.intl.string(g.t.gyljWE),
                      buttonStop: g.intl.string(g.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: Q.liQ.USER_SETTINGS, section: Q.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    u_ = ev.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function uf(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: i } = e;
    return (0, p.jsxs)(R.B, {
        children: [
            i && (0, p.jsx)(sD, { sourcePage: "voice" }),
            t && (0, p.jsx)(ln.A, { look: ln.k.WARNING, children: g.intl.string(g.t.Ioz3gx) }),
        ],
    });
}
let ub = (0, o.zZ)(u.X.VOICE_CATEGORY, {
        useTitle: () => g.intl.string(g.t.K3lovD),
        useInlineNotice: function () {
            let e = sL("voice"),
                t = (0, an.x5)(ar.oh.AUDIO_INPUT),
                i = (0, an.x5)(ar.oh.AUDIO_OUTPUT),
                n = N.useMemo(() => {
                    let e = u_.some((e) => t?.hardwareId?.startsWith(e)),
                        n = u_.some((e) => i?.hardwareId?.startsWith(e));
                    return e && n && t?.containerId != null && t.containerId === i?.containerId;
                }, [t, i]);
            return N.useMemo(
                () =>
                    e.canPrompt || n
                        ? {
                              type: e_.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, p.jsx)(uf, {
                                      inputAndOutputAreBluetooth: n,
                                      canPromptSystemServiceInstallForVoice: e.canPrompt,
                                  }),
                          }
                        : null,
                [e.canPrompt, n],
            );
        },
        buildLayout: () => [ug, uh, uN],
    }),
    uC = (0, o.t_)(u.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => g.intl.string(g.t.B1fFpf),
        buildLayout: () => [ub, ob, ac, uu, ut, oJ, aw],
    }),
    uI = (0, o.i4)(u.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.B1fFpf),
        usePredicate: () => sy.Ay.isSupported(),
        icon: r2.c,
        useMenu: r3.A,
        buildLayout: () => [uC],
    }),
    uv = (0, o.zD)(u.X.OS_START_MINIMIZED, {
        useTitle: () => g.intl.string(g.t.GfBL83),
        useSubtitle: () => g.intl.string(g.t.XGyhhc),
        usePredicate: () => (0, le.uF)(),
        useValue: () => ri.useState((e) => !!e.openOnStartup && e.startMinimized),
        setValue: function (e) {
            ri.setState({ startMinimized: e }), li.Ay.send("TOGGLE_START_MINIMIZED", e);
        },
        useDisabled: () => !ri.useState((e) => e.openOnStartup),
        initialize: () => {
            li.Ay.getSetting("START_MINIMIZED", !1).then((e) => ri.setState({ startMinimized: e }));
        },
    }),
    uj = (0, o.zZ)(u.X.WINDOWS_CATEGORY, {
        buildLayout: () => [rl, uv, rs, ra],
        initialize: () => {
            rn();
        },
    }),
    uy = (0, o.t_)(u.X.WINDOWS_PANEL, { useTitle: () => g.intl.string(g.t.ZkDZov), buildLayout: () => [uj] }),
    uO = (0, o.i4)(u.X.WINDOWS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.ZkDZov),
        icon: e2.k,
        usePredicate: () => ev.isPlatformEmbedded && (0, ev.isWindows)(),
        buildLayout: () => [uy],
    }),
    uR = (0, o.WI)(u.X.APP_SECTION, {
        useTitle: () => g.intl.string(g.t.f2n1TP),
        buildLayout: function () {
            return [uI, sE, n1, r1, s6, rt, uO, rd].filter(t4.Vq);
        },
    });
var uL = i(360669),
    uD = i(974544),
    uG = i(194261),
    uP = i(289873),
    uU = i(465323),
    uV = i(391048),
    uM = i(323082),
    uk = i(99696),
    uw = i(202613),
    uB = i(580630),
    uF = i(83617),
    uz = i(935208),
    uX = i(607399),
    uY = i(150934),
    uH = i(256006),
    uK = i(615405),
    uW = i(198970),
    uZ = i(71532);
let uQ = /[^0-9/]/g,
    uq = /[^0-9]/g;
class uJ extends N.PureComponent {
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
                ((n = (i = e.replace(uQ, "").split("/"))[0]),
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
            ? (u = u.replace(uq, ""))
            : u === r && e.includes("/") && !r.includes("/") && (u += "/"),
            u.length > e.length && (d += u.length - e.length),
            (this.selectionStart = d),
            null != a && a(u, t);
    };
    render() {
        return (0, p.jsx)(sP.k, {
            ...this.props,
            inputMode: "numeric",
            onChange: this.handleChange,
            inputRef: this.setRef,
        });
    }
}
var u$ = i(832208),
    u0 = i(536439);
let u1 = [
        {
            fields: [
                {
                    expirationDate: {
                        name: "expirationDate",
                        id: (0, lp.Ld)(),
                        title: () => g.intl.string(g.t["CeBa/4"]),
                        autoComplete: "cc-exp",
                        placeholder: () => g.intl.string(g.t.xeEWQ6),
                        pattern: "\\d*",
                        getClassNameForLayout: () => u0.ep,
                        renderInput: (e) => (0, p.jsx)(uJ, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    u2 = function (e) {
        let { onCardInfoChange: t, className: i, expirationDate: n, error: l } = e,
            [s, r] = N.useState(!1),
            [a, o] = N.useState(null),
            [u, d] = N.useState(n);
        return (
            N.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, p.jsx)(u$.A, {
                className: i,
                form: u1,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: l,
                onFieldChange: (e) => {
                    s || "" === e || r(!0),
                        (s && "" === e) || !(0, uZ.So)(e) ? o(g.intl.string(g.t["9/zZdl"])) : o(null),
                        d(e);
                },
            })
        );
    };
var u3 = i(219887),
    u4 = i(276589);
let u5 = "isDefault";
class u8 extends N.PureComponent {
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
            expiresMonth: t instanceof uw.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof uw.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: i,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        n4.h.wait(() => {
            (0, uM.ey)(), (0, uM.tc)();
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
                ? (0, p.jsx)("div", {
                      className: u4.zc,
                      children: (0, p.jsx)(y.w, { type: "critical", children: t.message }),
                  })
                : null
            : (0, p.jsx)("div", {
                  className: u4.zc,
                  children: (0, p.jsx)(y.w, { type: "critical", children: e.message }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: i } = this.props,
            n = (0, uH.g)(i);
        return (0, p.jsxs)("div", {
            className: u4.yV,
            children: [
                (0, p.jsx)(M.E, {
                    className: u4.bV,
                    variant: "text-sm/normal",
                    children: g.intl.string(g.t["50Auo2"]),
                }),
                (0, p.jsx)(uW.Ay, {
                    ...e,
                    mode: uW.Ay.Modes.EDIT,
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
        return (0, p.jsxs)("div", {
            className: u4.yV,
            children: [
                (0, p.jsx)(M.E, { className: u4.bV, variant: "text-sm/normal", children: g.intl.string(g.t.Fo2YP7) }),
                (0, p.jsx)(u2, {
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
        return (0, p.jsx)("div", {
            className: u4.AU,
            children: (0, p.jsxs)(R.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, p.jsx)(aS.e, {
                        children: (0, p.jsxs)("div", {
                            className: u4.lH,
                            children: [
                                i
                                    ? (0, p.jsx)(e0.m, {
                                          text: g.intl.string(g.t["v6/z28"]),
                                          children: (0, p.jsx)("div", { "aria-hidden": !0, className: u4.dm }),
                                      })
                                    : null,
                                (0, p.jsx)(eh.$, {
                                    type: "button",
                                    disabled: i || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: uX.Fr ? "sm" : "md",
                                    text: uX.Fr ? g.intl.string(g.t.oyYWHE) : g.intl.string(g.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, p.jsxs)(aS.e, {
                        children: [
                            (0, p.jsx)(eh.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: uX.Fr ? "sm" : "md",
                                text: g.intl.string(g.t["ETE/oC"]),
                            }),
                            (0, p.jsx)(eh.$, {
                                loading: e,
                                disabled: !n || t || !l,
                                type: "submit",
                                variant: "active",
                                size: uX.Fr ? "sm" : "md",
                                text: g.intl.string(g.t["R3BPH+"]),
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
            r = e instanceof uw.SJ;
        return (0, p.jsx)(er.Z, {
            editable: !0,
            className: ew()(u4.Nr, n),
            children: (0, p.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, p.jsxs)("div", {
                        className: u4.__invalid_paymentSection,
                        children: [
                            (0, p.jsx)(u3.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: l,
                                locale: i,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, p.jsx)("div", { className: u4.Um, children: g.intl.string(g.t["3R0U0b"]) })
                                : null,
                            (0, p.jsx)("div", {
                                className: u4.Sv,
                                children: r
                                    ? g.intl.format(g.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : g.intl.string(g.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, p.jsx)("div", {
                        className: u4.D5,
                        children: (0, p.jsx)(uY.S, {
                            value: u5,
                            checked: s,
                            onChange: (e) => this.handleFieldChange(e, u5),
                            label: g.intl.string(g.t.nag9Og),
                            labelType: "secondary",
                        }),
                    }),
                    (0, p.jsx)(iL.c, {}),
                    this.renderActions(),
                ],
            }),
        });
    }
}
let u6 = O.Ay.connectStores([uK.A], () => ({ updateError: uK.A.editSourceError, removeError: uK.A.removeSourceError }))(
    u8,
);
var u7 = i(95322);
class u9 extends N.PureComponent {
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
            ? (0, p.jsx)(u6, {
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
            : (0, p.jsxs)(p.Fragment, {
                  children: [
                      n ? null : (0, p.jsx)(iL.c, { className: u7.__invalid_sourceDivider }),
                      (0, p.jsxs)("div", {
                          className: u7.Yb,
                          children: [
                              (0, p.jsx)(u3.A, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: l,
                                  locale: s,
                                  showSubtext: !0,
                                  showLabels: !0,
                                  showPaymentSourceIcon: !0,
                              }),
                              (0, p.jsx)(eh.$, {
                                  variant: "secondary",
                                  onClick: this.handleEditClick,
                                  size: "sm",
                                  text: g.intl.string(g.t.bt75uw),
                              }),
                          ],
                      }),
                  ],
              });
    }
}
let de = N.memo(function (e) {
    let { paymentSource: t, hideDivider: i, isForSubscription: n, locale: l, onRedeemClick: s } = e,
        [r, a] = N.useState(null),
        o = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.storeCountry?.country ?? null);
    return (
        N.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: null != o ? (0, uU.TW)(`-${o}`) : (0, oG.Rr)() })
                : uM.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, o]),
        (0, p.jsxs)(p.Fragment, {
            children: [
                i ? null : (0, p.jsx)(iL.c, { className: u7.__invalid_sourceDivider }),
                (0, p.jsxs)("div", {
                    className: u7.Yb,
                    children: [
                        void 0 !== t
                            ? (0, p.jsx)(u3.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: n,
                                  locale: l,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, p.jsx)(M.E, { variant: "text-sm/medium", children: g.intl.string(g.t.wkFAZf) }),
                        (0, p.jsxs)("div", {
                            className: u7.zy,
                            children: [
                                (0, p.jsx)("div", {
                                    className: u7.Tq,
                                    children:
                                        null == r
                                            ? (0, p.jsx)(uP.y, { type: uP.y.Type.SPINNING_CIRCLE })
                                            : (0, p.jsx)(M.E, {
                                                  variant: "text-sm/medium",
                                                  children: (() => {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          i = t ?? (0, oG.Rr)(),
                                                          n = String(i).toUpperCase(),
                                                          l = (0, uB.$g)(e ?? 0, i);
                                                      return `${n} ${l}`;
                                                  })(),
                                              }),
                                }),
                                (0, p.jsx)(eh.$, {
                                    variant: "secondary",
                                    onClick: s,
                                    size: "sm",
                                    text: g.intl.string(g.t.H2hHyf),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class dt extends N.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            await uM.Gr(e), this.setState({ editingPayment: e });
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            await uM.JQ(e), this.setState({ editingPayment: null });
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                await uM.Ps(e, t), this.setState({ editingPayment: null });
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, uF.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, f.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 362111));
                return (t) => (0, p.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, uV.ET)();
                },
                onCloseRequest: Q.tEg,
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, p.jsxs)("div", {
            className: u7.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, p.jsxs)("div", {
                          className: u7.z8,
                          children: [
                              (0, p.jsx)(M.E, { variant: "text-sm/normal", children: g.intl.string(g.t.aRHpAB) }),
                              (0, p.jsx)("div", { className: u7.Sv, children: g.intl.string(g.t.o9bOIl) }),
                          ],
                      })
                    : null,
                (0, p.jsx)(eh.$, { onClick: this.handleAddPaymentMethod, text: g.intl.string(g.t.CpOiEO) }),
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
            u = eR()
                .values(n)
                .sort((e, t) => (e.id === i ? -1 : t.id === i ? 1 : uz.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof uw.LQ)),
            c = u.filter((e) => e instanceof uw.LQ),
            m = this.state.editingPayment,
            A = d.findIndex((e) => e.id === m),
            h = d.map((e, t) =>
                (0, p.jsx)(
                    u9,
                    {
                        locale: l,
                        paymentSource: e,
                        isDefault: i === e.id,
                        onCancel: this.handleCancel,
                        onDelete: this.handleDelete,
                        isForSubscription: e.id === a,
                        hideDivider: 0 === t || A === t - 1,
                        onSubmit: this.handleSubmit,
                        submitting: r,
                        removing: s,
                        isEditing: m === e.id,
                        onEditClick: this.handleEditClick,
                    },
                    e.id,
                ),
            );
        return (
            (e =
                c.length > 0
                    ? c.map((e, t) =>
                          (0, p.jsx)(
                              de,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || A === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: l,
                                  onRedeemClick: () =>
                                      (0, uk.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page" }),
                              },
                              e.id,
                          ),
                      )
                    : (0, p.jsx)(de, {
                          hideDivider: 0 === d.length || A === d.length - 1,
                          isForSubscription: !1,
                          locale: l,
                          onRedeemClick: () =>
                              (0, uk.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page" }),
                      })),
            (0, p.jsxs)(p.Fragment, {
                children: [
                    t
                        ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsxs)(eA.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, p.jsx)(uG.X, { size: "sm", className: u7.hz }),
                                          " ",
                                          g.intl.string(g.t.W26xGQ),
                                      ],
                                  }),
                                  (0, p.jsx)(M.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: g.intl.string(g.t.h6V3uK),
                                  }),
                              ],
                          })
                        : null,
                    h,
                    o && e,
                    A !== d.length - 1 || (o && c.length > 0) ? (0, p.jsx)(iL.c, {}) : null,
                    this.renderFooter(),
                ],
            })
        );
    }
}
var di = i(459357),
    dn = i(295405),
    dl = i(166403),
    ds = i(773669),
    dr = i(243156);
let da = (0, o.E2)(u.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                i = (0, O.bG)([uK.A], () => uK.A.isSyncing),
                n = (0, O.bG)([dn.A], () => dn.A.paymentSources),
                l = (0, O.bG)([dn.A], () => dn.A.defaultPaymentSourceId),
                s = (0, O.bG)([ds.default], () => ds.default.locale),
                r = (0, O.bG)([dl.A], () => dl.A.getPremiumTypeSubscription()),
                a = (0, O.bG)([uK.A], () => uK.A.isRemovingPaymentSource),
                o = (0, O.bG)([uK.A], () => uK.A.isUpdatingPaymentSource),
                { enabled: u } = (0, di.c)({ location: "UserSettingsBilling" });
            return (N.useEffect(() => {
                uM.$o(), uM.hP();
            }, []),
            i && 0 === Object.keys(n).length)
                ? (0, p.jsx)("div", { className: dr.o, children: (0, p.jsx)(uP.y, {}) })
                : (0, p.jsx)(dt, {
                      showHeader: t,
                      paymentSources: n,
                      defaultPaymentSourceId: l,
                      premiumSubscriptionPaymentSourceId:
                          null != r && r.status !== Q.Dmq.CANCELED ? r.paymentSourceId : null,
                      locale: s,
                      removing: a,
                      submitting: o,
                      showGiftCards: u,
                  });
        },
        useSearchTerms: () => [g.intl.string(g.t.W26xGQ)],
    }),
    du = (0, o.zZ)(u.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.W26xGQ),
        icon: uG.X,
        useSubtitle: () => g.intl.string(g.t.h6V3uK),
        buildLayout: () => [da],
    });
var dd = i(546605),
    dc = i(500380),
    dg = i(518977),
    dm = i(223784);
function dA(e) {
    let { country: t, countryName: i, ...n } = e,
        { onClose: l } = n,
        s = N.useCallback(
            () => (null == t ? null : (0, p.jsx)("img", { alt: "", className: dm.b, src: (0, dc.t)(t) })),
            [t],
        ),
        r = null != i && null != t ? { text: i, leadingIcon: s } : (i ?? void 0),
        a = N.useCallback(() => {
            window.open("https://support.discord.com/hc/articles/39799791912087", "_blank"), l();
        }, [l]);
    return (0, p.jsx)(sG.Modal, {
        ...n,
        title: g.intl.string(g.t.PuB1W7),
        subtitle: r,
        actions: [{ text: g.intl.string(g.t.PuB1W7), onClick: a, variant: "primary" }],
        children: (0, p.jsx)(M.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: g.intl.string(g.t["21skUa"]),
        }),
    });
}
var dh = i(949677);
let dE = (0, o.E2)(u.X.BILLING_STORE_COUNTRY, {
        Component: function () {
            let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.storeCountry),
                t = N.useCallback(() => {
                    var t;
                    let i;
                    (i = null != (t = e?.country ?? null) ? (0, dg.Gw)(t) : null),
                        (0, f.openModal)((e) => (0, p.jsx)(dA, { ...e, country: t, countryName: i }));
                }, [e?.country]);
            if (null == e) return null;
            let i = (0, dg.Gw)(e.country),
                n = null != e.setAt ? g.intl.format(g.t.ZkWzXG, { date: new Date(e.setAt) }) : null;
            return (0, p.jsxs)("div", {
                className: dh.OO,
                children: [
                    (0, p.jsxs)("div", {
                        className: dh.wI,
                        children: [
                            (0, p.jsx)("div", {
                                className: dh.Gh,
                                children: (0, p.jsx)("img", { alt: "", className: dh.MY, src: (0, dc.t)(e.country) }),
                            }),
                            (0, p.jsxs)("div", {
                                className: dh.d0,
                                children: [
                                    (0, p.jsx)(M.E, { variant: "text-md/semibold", children: i }),
                                    null != n
                                        ? (0, p.jsx)(M.E, {
                                              variant: "text-sm/normal",
                                              color: "text-subtle",
                                              children: n,
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                    (0, p.jsx)(eh.$, { variant: "secondary", size: "sm", text: g.intl.string(g.t.PuB1W7), onClick: t }),
                ],
            });
        },
        useSearchTerms: () => [g.intl.string(g.t["3pIjBH"])],
    }),
    dT = (0, o.zZ)(u.X.BILLING_STORE_COUNTRY_CATEGORY, {
        usePredicate: () => {
            let e, t;
            return (
                (e = (0, dd.vg)("StoreCountrySetting")),
                (t = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.storeCountry != null)),
                e && t
            );
        },
        useTitle: () => g.intl.string(g.t["3pIjBH"]),
        buildLayout: () => [dE],
    });
var dS = i(549363),
    dx = i(545075);
let dp = (0, o.E2)(u.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            let e = (0, O.bG)([ds.default], () => ds.default.locale);
            return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(dx.kb, {}), (0, p.jsx)(dS.A, { locale: e })] });
        },
        useSearchTerms: () => [g.intl.string(g.t.obLrcK)],
    }),
    dN = (0, o.zZ)(u.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => g.intl.string(g.t.obLrcK),
        buildLayout: () => [dp],
    }),
    d_ = (0, o.t_)(u.X.BILLING_PANEL, {
        useTitle: () => g.intl.string(g.t.oeUm2s),
        buildLayout: () => [du, dT, dN],
        useObscuredNotice: uD.L,
    }),
    df = (0, o.i4)(u.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.oeUm2s),
        icon: uL.B,
        buildLayout: () => [d_],
    });
var db = i(597770),
    dC = i(35587),
    dI = i(86379),
    dv = i(532446),
    dj = i(869038),
    dy = i(499454),
    dO = i(45938);
class dR extends N.Component {
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
                    await (0, uk.Qp)(i),
                        (0, uk.HF)({ initialCode: i, withRedemptionSuccessModal: !0 }),
                        this.setState({ codeInput: "" });
                    return;
                } catch {}
            let e = (0, dO.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let n = await dj.A.resolveGiftCode(e);
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
                (0, dy.h)({ processedCode: e }),
                this.setState({ codeInput: "" });
        } catch (e) {
            this.setState({ hasError: !0 });
        } finally {
            this.setState({ submitting: !1 });
        }
    };
    render() {
        let { obscureInput: e } = this.props,
            { codeInput: t, submitting: i, hasError: n, isPromoCode: l } = this.state;
        return (0, p.jsx)(ia.n, {
            label: g.intl.string(g.t["il+VCo"]),
            children: (0, p.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, p.jsxs)(dv.M, {
                    children: [
                        (0, p.jsx)(sP.k, {
                            label: g.intl.string(g.t.SeKIoS),
                            type: e ? "password" : "text",
                            value: t,
                            onChange: this.handleChange,
                            placeholder: "WUMP-AAAAA-BBBBB-CCCCC",
                            error: !l && n ? g.intl.string(g.t.Y11a2u) : null,
                            helperText: l
                                ? g.intl.format(g.t.gPt3PE, {
                                      promoLink: () => {
                                          window.open(`https://discord.com/billing/promotions/${t}`);
                                      },
                                  })
                                : null,
                            fullWidth: !0,
                        }),
                        (0, p.jsx)(eh.$, {
                            variant: "primary",
                            text: g.intl.string(g.t.KIpp7M),
                            type: "submit",
                            loading: i,
                        }),
                    ],
                }),
            }),
        });
    }
}
let dL = (0, o.E2)(u.X.GIFT_CODE_REDEMPTION_SETTING, {
    Component: function () {
        let { enabled: e } = (0, di.c)({ location: "UserSettingsBilling" }),
            t = N.useContext(X.AnalyticsContext),
            i = (0, O.bG)([ef.A], () => ef.A.enabled);
        return (0, p.jsx)(dR, { analyticsContext: t, obscureInput: i, acceptGiftCardRedemption: e });
    },
    usePredicate: () => !(0, dI.Hp)(),
    useSearchTerms: () => [g.intl.string(g.t["jcSP+g"]), g.intl.string(g.t["il+VCo"])],
});
var dD = i(725570),
    dG = i(707554),
    dP = i(339048),
    dU = i(736653),
    dV = i(46054);
let dM = rb().duration(30, "days");
var dk = i(264779),
    dw = i(416052),
    dB = i(961302);
function dF(e) {
    let { onClose: t, transitionState: i } = e;
    return (0, p.jsx)(sG.Modal, {
        title: "",
        size: "md",
        input: (0, p.jsx)("div", { className: dB.aR }),
        onClose: async () => await t(),
        actions: [{ text: g.intl.string(g.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: i,
        children: (0, p.jsxs)("div", {
            className: dB.t4,
            children: [
                (0, p.jsx)(eA.D, { variant: "heading-xl/semibold", children: g.intl.string(g.t.iufib1) }),
                (0, p.jsx)(M.E, { variant: "text-md/normal", className: dB.G3, children: g.intl.string(g.t.eAn6z2) }),
            ],
        }),
    });
}
let dz = function (e) {
    let { onClose: t, onClaim: i, code: n, outboundPromotion: l, transitionState: s } = e,
        [r, a] = N.useState(null),
        o = (0, lp.GV)(),
        { analyticsLocations: u } = (0, nU.Ay)(eV.A.USER_SETTINGS_GIFT_INVENTORY);
    return (N.useEffect(() => {
        null == n &&
            (0, dk.kd)({ promotionId: l.id, analyticsLocations: u })
                .then((e) => i(e))
                .catch((e) => a(e?.body?.code));
    }, [n, l.id, i, u]),
    null != r)
        ? (0, p.jsx)(dF, { onClose: t, transitionState: s })
        : null == n
          ? (0, p.jsx)(uP.y, { className: dB.Lq })
          : (0, p.jsx)(sG.Modal, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, p.jsxs)("div", {
                    className: dB.N1,
                    children: [
                        (0, p.jsx)("div", { className: dB.Qw }),
                        (0, p.jsx)(eA.D, { variant: "heading-xl/semibold", children: g.intl.string(g.t["23BfZh"]) }),
                        (0, p.jsx)(M.E, {
                            variant: "text-md/normal",
                            className: dB.G3,
                            children: l.outboundRedemptionModalBody,
                        }),
                    ],
                }),
                actions: [
                    { text: g.intl.string(g.t.TulDPl), variant: "secondary", onClick: async () => await t() },
                    {
                        text: g.intl.string(g.t["+zx47d"]),
                        variant: "primary",
                        onClick: () => {
                            let e = (0, dk.kc)(n, l);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: s,
                "aria-label": o,
                children: (0, p.jsxs)("div", {
                    children: [
                        (0, p.jsx)(iL.c, { className: dB.M5 }),
                        (0, p.jsx)(lO.D, {
                            label: g.intl.string(g.t.s9LFQh),
                            helperText: g.intl.string(g.t["F+nFTZ"]),
                            children: (0, p.jsx)(dw.A, {
                                value: n,
                                buttonColor: aE.$n.Colors.BRAND,
                                buttonLook: aE.$n.Looks.FILLED,
                                delay: 1e3,
                            }),
                        }),
                    ],
                }),
            });
};
var dX = i(725807),
    dY = i(212168),
    dH = i(469778),
    dK = i(109802),
    dW = i(503787);
let dZ = (e) => {
        let { children: t, className: i, splashArtURL: n } = e;
        return (0, p.jsxs)(sk.A, {
            className: ew()(dW.wx, i),
            align: sk.A.Align.CENTER,
            children: [
                (0, p.jsx)("div", { className: dW.Bn, style: null != n ? { backgroundImage: `url(${n})` } : void 0 }),
                t,
            ],
        });
    },
    dQ = (e) => {
        let { children: t, className: i } = e;
        return (0, p.jsx)("div", { className: ew()(dW.rf, i), children: t });
    };
class dq extends N.PureComponent {
    static Header = dZ;
    static Body = dQ;
    render() {
        let { children: e, className: t, onMouseEnter: i, onMouseLeave: n } = this.props;
        return (0, p.jsx)("div", { className: ew()(dW.Nr, t), onMouseEnter: i, onMouseLeave: n, children: e });
    }
}
var dJ = i(75825),
    d$ = i(871123),
    d0 = i(366523),
    d1 = i(495544),
    d2 = i(30793),
    d3 = i(97352),
    d4 = i(67480),
    d5 = i(147925),
    d8 = i(957565),
    d6 = i(615396),
    d7 = i(233385);
class d9 extends N.PureComponent {
    _copyModeTimeout = new oi.Ep();
    state = { copyMode: dK.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case dK.q.SUCCESS:
                return g.intl.string(g.t.XVvPjU);
            case dK.q.ERROR:
                return g.intl.string(g.t.i4GM3L);
            default:
                return g.intl.string(g.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        dj.A.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: i } = this.props;
        (0, dO.AK)(t, i),
            (0, d8.C)(
                e,
                () => this.setState({ copyMode: dK.q.SUCCESS }),
                () => this.setState({ copyMode: dK.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: dK.q.DEFAULT });
            });
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: i } = this.state;
        return (0, p.jsxs)(sk.A, {
            direction: sk.A.Direction.VERTICAL,
            className: d7.Gj,
            children: [
                (0, p.jsx)(dK.e, {
                    className: d7.ph,
                    value: (0, dO.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: i,
                    supportsCopy: d8.p5,
                    hideMessage: e ? g.intl.string(g.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: aE.XD.BRAND,
                    buttonLook: aE.pR.FILLED,
                }),
                (0, p.jsxs)("div", {
                    className: d7.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, p.jsxs)(N.Fragment, {
                                  children: [
                                      g.intl.format(g.t.ltVZcJ, { hours: t.expiresAt.diff(rb()(), "h") }),
                                      " —\xa0",
                                  ],
                              })
                            : null,
                        (0, p.jsx)(V.D, {
                            tag: "a",
                            onClick: () => this.handleRevoke(t.code),
                            children: g.intl.string(g.t.v6Yazx),
                        }),
                    ],
                }),
            ],
        });
    }
}
class ce extends N.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: i, giftStyle: n } = this.props;
        this.setState({ isCreating: !0 }),
            await dj.A.createGiftCode(t, i, n),
            this.setState({ isCreating: !1, isOpen: !0 });
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: i } = this.props,
            n = !this.state.isOpen;
        (null == i || null == this._loadedAt || i < this._loadedAt) && n && dj.A.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen });
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: i } = this.props;
        return (0, d$.bF)(e)
            ? (0, p.jsx)(d0.e, { shape: "square", sku: e, containerClassName: d7.ez })
            : null != t
              ? (0, p.jsx)(dJ.A, { giftStyle: t, className: d7.ez, shouldAnimate: this.state.isHovered })
              : (0, p.jsx)(e6.A, { game: i, size: e6.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: i } = this.props;
        return (0, d$.bF)(e)
            ? (0, p.jsxs)("div", {
                  className: ew()(d7.Oc, d7.ic),
                  children: [
                      (0, p.jsx)(e6.A, { game: i, size: e6.M.XSMALL, skuId: e.id, className: d7._u }),
                      g.intl.format(g.t["6plpZi"], { applicationName: i.name, copies: t.length }),
                  ],
              })
            : (0, p.jsx)("div", { className: d7.Oc, children: g.intl.format(g.t.zMcvcA, { copies: t.length }) });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: i, giftCodeBatchId: n } = this.props;
        return (
            (e =
                n === l_.FB
                    ? g.intl.string(g.t.odsU6W)
                    : n === l_.Bu && null != i
                      ? g.intl.formatToPlainString(i.interval === l_.WT.MONTH ? g.t.uZjpiJ : g.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: i.intervalCount,
                        })
                      : null == i
                        ? t.name
                        : g.intl.formatToPlainString(i.interval === l_.WT.MONTH ? g.t.rCJvqo : g.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: i.intervalCount,
                          })),
            (0, p.jsx)("div", { className: d7.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, p.jsxs)(sk.A, {
            justify: sk.A.Justify.BETWEEN,
            align: sk.A.Align.CENTER,
            className: d7.pe,
            children: [
                (0, p.jsx)(M.E, { variant: "text-md/normal", children: g.intl.string(g.t.lELyPj) }),
                (0, p.jsx)(eh.$, {
                    variant: "primary",
                    size: "sm",
                    text: g.intl.string(g.t.Q3Qguo),
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
        return (0, p.jsxs)(dq, {
            className: n,
            children: [
                (0, p.jsx)(V.D, {
                    onClick: this.handleToggleOpen,
                    className: d7.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, p.jsx)(dq.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, p.jsxs)("div", {
                            className: d7.MY,
                            children: [
                                (0, p.jsxs)(sk.A, {
                                    align: sk.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, p.jsxs)("div", {
                                            className: d7.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, p.jsx)(d5.A, {
                                    direction: a ? d5.A.Directions.UP : d5.A.Directions.DOWN,
                                    className: d7.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, p.jsx)(dq.Body, {
                          children: s
                              ? (0, p.jsx)(uP.y, { className: d7.u1 })
                              : (0, p.jsxs)(N.Fragment, {
                                    children: [
                                        i.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        i.map((e) => (0, p.jsx)(d9, { giftCode: e, sku: l, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let ct = O.Ay.connectStores([d4.A, ef.A, d2.A, eW.A, d3.A, d1.default], (e) => {
    let { skuId: t, subscriptionPlanId: i, giftStyle: n } = e,
        l = d4.A.get(t);
    if (null == l) throw Error("SKU was unavailable while rendering gift.");
    let s = d2.A.getForGifterSKUAndPlan(d1.default.getId(), t, i)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === n);
    return {
        sku: l,
        hideCodes: ef.A.enabled,
        isFetching: d2.A.getUserGiftCodesFetchingForSKUAndPlan(t, i),
        loadedAt: d2.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, i),
        application: eW.A.getApplication(l.applicationId),
        subscriptionPlan: null != i ? (0, d6.c9)(i) : null,
        giftCodes: s,
    };
})(ce);
var ci = i(479913);
function cn(e) {
    let t,
        { outboundPromotion: i, code: n, addClaimedOutboundPromotionCode: l, disabled: s } = e,
        [r, a] = N.useState(!1),
        [o, u] = N.useState(!1),
        d = () => a((e) => !e),
        c = (0, dU.Ay)(),
        m = (0, dk.WD)(i.id, c),
        A = null != n,
        h = N.useMemo(
            () =>
                (0, rC.i$)(
                    A
                        ? null != i.outboundRedemptionEndDate
                            ? rb()(i.outboundRedemptionEndDate)
                            : rb()(i.endDate).add(dM)
                        : rb()(i.endDate),
                    "LL",
                ),
            [i, A],
        );
    A && r
        ? (t = g.intl.format(g.t.pkxVx6, { endDate: h, onClickDetails: d }))
        : A && !r
          ? (t = g.intl.format(g.t["4sFeob"], { endDate: h, onClickDetails: d }))
          : !A && r
            ? (t = g.intl.format(g.t["RBnE+l"], { endDate: h, onClickDetails: d }))
            : A || r || (t = g.intl.format(g.t["57+7Qn"], { endDate: h, onClickDetails: d }));
    let E = A ? g.intl.string(g.t["2cHUti"]) : g.intl.string(g.t.O13yhz),
        T = N.useCallback(() => u(!1), []),
        { outboundTitle: S, outboundTermsAndConditions: x } = i;
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsxs)("div", {
                className: ew()(ci.uI, ci.AX),
                children: [
                    (0, p.jsxs)("div", {
                        className: ci.gE,
                        children: [
                            (0, p.jsxs)("div", {
                                className: ci.At,
                                children: [
                                    (0, p.jsx)("div", {
                                        className: ci.$G,
                                        children: (0, p.jsx)("img", { alt: "", src: m, className: ci.IJ }),
                                    }),
                                    (0, p.jsxs)("div", {
                                        children: [
                                            (0, p.jsx)(eA.D, { variant: "heading-md/semibold", children: S }),
                                            (0, p.jsx)(M.E, {
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                className: ci.__invalid_promotionText,
                                                children: t,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            !s && (0, p.jsx)(eh.$, { text: E, onClick: () => u(!0), disabled: s, size: "sm" }),
                        ],
                    }),
                    r &&
                        (0, p.jsx)(M.E, {
                            className: ci.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: dV.A.parse(x, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            o &&
                (0, p.jsx)(dD.aF, {
                    renderModal: (e) => (0, p.jsx)(dz, { ...e, onClose: T, onClaim: l, code: n, outboundPromotion: i }),
                    onCloseRequest: T,
                }),
        ],
    });
}
let cl = (0, o.E2)(u.X.GIFT_INVENTORY_LIST_SETTING, {
        Component: function () {
            let e = (0, O.yK)([dH.A], () => dH.A.getGiftable()),
                [t, i] = eR().partition(e, (e) => {
                    let { giftCodeBatchId: t } = e;
                    return null == t;
                }),
                n = (0, O.bG)([t3.default], () =>
                    oG.Ay.isPremiumExactly(t3.default.getCurrentUser(), l_.PremiumTypes.TIER_2),
                ),
                l = (0, O.bG)([t3.default], () => !oG.Ay.isPremium(t3.default.getCurrentUser())),
                s = eR().groupBy(t, (e) => (0, dO.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
                [r, a] = N.useState(!1);
            N.useEffect(() => {
                n4.h.wait(() => {
                    (0, dP.XJ)().then(() => a(!0));
                });
            }, []);
            let {
                    promotionsLoaded: o,
                    activeOutboundPromotions: d,
                    claimedEndedOutboundPromotions: c,
                    claimedOutboundPromotionCodeMap: m,
                    addClaimedOutboundPromotionCode: A,
                } = (0, dC.y7)(),
                h = d.length + c.length > 0,
                E = l && h;
            return r && o
                ? (0, p.jsxs)(p.Fragment, {
                      children: [
                          (function () {
                              let e = i.find((e) => e.giftCodeBatchId === l_.FB && !e.consumed),
                                  t = i.filter((e) => e.giftCodeBatchId === l_.Bu && !e.consumed) ?? [],
                                  [l, s] = eR().partition(t, (e) => {
                                      let { subscriptionPlanId: t } = e;
                                      return t === l_.gD.PREMIUM_YEAR_TIER_2;
                                  }),
                                  r = (0, p.jsx)(eA.D, {
                                      variant: "heading-md/semibold",
                                      children: h ? g.intl.string(g.t.wFsj3B) : void 0,
                                  }),
                                  a = E
                                      ? (0, p.jsxs)("div", {
                                            className: ci.uo,
                                            children: [
                                                (0, p.jsx)(oC.t, {
                                                    size: "md",
                                                    color: w.A.colors
                                                        .REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                                                    className: ci.PC,
                                                }),
                                                (0, p.jsx)(M.E, {
                                                    variant: "text-md/normal",
                                                    className: ci.Qw,
                                                    children: g.intl.format(g.t.G4fwxK, {
                                                        onClick: () => {
                                                            (0, lT.default)(), (0, lR.pX)(Q.BVt.APPLICATION_STORE);
                                                        },
                                                    }),
                                                }),
                                                (0, p.jsx)(dX.A, {
                                                    showGradient: !0,
                                                    className: ci.aA,
                                                    subscriptionTier: l_.pe.TIER_2,
                                                    textOptions: { textOverride: g.intl.string(g.t.mr4K7D) },
                                                }),
                                            ],
                                        })
                                      : null;
                              return (0, p.jsxs)("div", {
                                  children: [
                                      r,
                                      h ? (0, p.jsx)(iL.c, { className: ci.yF }) : null,
                                      (0, p.jsx)(dY.A, {
                                          className: ci.Yj,
                                          isShown: E,
                                          type: dY.i.PREMIUM,
                                          hasBackground: !0,
                                          children: (0, p.jsxs)("div", {
                                              className: ew()({ [ci.sW]: !E }),
                                              children: [
                                                  a,
                                                  c.map((e) => {
                                                      let { code: t, promotion: i } = e;
                                                      return (0, p.jsx)(
                                                          cn,
                                                          {
                                                              outboundPromotion: i,
                                                              code: t,
                                                              addClaimedOutboundPromotionCode: A,
                                                              disabled: !n,
                                                          },
                                                          i.id,
                                                      );
                                                  }),
                                                  d.map((e) =>
                                                      (0, p.jsx)(
                                                          cn,
                                                          {
                                                              outboundPromotion: e,
                                                              code: m[e.id],
                                                              addClaimedOutboundPromotionCode: A,
                                                              disabled: !n,
                                                          },
                                                          e.id,
                                                      ),
                                                  ),
                                                  null != e
                                                      ? (0, p.jsx)(
                                                            ct,
                                                            {
                                                                className: ci.uI,
                                                                skuId: e.skuId,
                                                                subscriptionPlanId: e.subscriptionPlanId,
                                                                entitlements: [e],
                                                                giftCodeBatchId: l_.FB,
                                                            },
                                                            (0, dO.Kx)(e.skuId, e.subscriptionPlanId),
                                                        )
                                                      : null,
                                                  l.length > 0
                                                      ? (0, p.jsx)(
                                                            ct,
                                                            {
                                                                className: ci.uI,
                                                                skuId: l[0].skuId,
                                                                subscriptionPlanId: l[0].subscriptionPlanId,
                                                                entitlements: l,
                                                                giftCodeBatchId: l_.Bu,
                                                            },
                                                            (0, dO.Kx)(l[0].skuId, l[0].subscriptionPlanId),
                                                        )
                                                      : null,
                                                  s.length > 0
                                                      ? (0, p.jsx)(
                                                            ct,
                                                            {
                                                                className: ci.uI,
                                                                skuId: s[0].skuId,
                                                                subscriptionPlanId: s[0].subscriptionPlanId,
                                                                entitlements: s,
                                                                giftCodeBatchId: l_.Bu,
                                                            },
                                                            (0, dO.Kx)(s[0].skuId, s[0].subscriptionPlanId),
                                                        )
                                                      : null,
                                              ],
                                          }),
                                      }),
                                  ],
                              });
                          })(),
                          (0, p.jsx)("div", {
                              className: ci.sW,
                              children: (0, p.jsxs)(dG.F, {
                                  component: (0, p.jsx)(eA.D, {
                                      variant: "heading-md/semibold",
                                      children: g.intl.string(g.t["9KeUbY"]),
                                  }),
                                  children: [
                                      (0, p.jsx)(iL.c, { className: ci.yF }),
                                      0 === Object.keys(s).length
                                          ? (0, p.jsxs)("div", {
                                                className: ci.p$,
                                                children: [
                                                    (0, p.jsx)("div", { className: ci.QT }),
                                                    (0, p.jsx)(dG.H, {
                                                        className: ci.ks,
                                                        children: g.intl.string(g.t.B1qgZn),
                                                    }),
                                                    (0, p.jsx)("p", {
                                                        className: ci.WO,
                                                        children: g.intl.format(g.t.HezvJ8, {
                                                            onClick: function () {
                                                                (0, ej.openUserSettings)(u.X.NITRO_PANEL);
                                                            },
                                                        }),
                                                    }),
                                                ],
                                            })
                                          : eR()
                                                .keys(s)
                                                .map((e) => {
                                                    let {
                                                        skuId: t,
                                                        subscriptionPlanId: i,
                                                        giftStyle: n,
                                                    } = (0, dO.X6)(e);
                                                    return (0, p.jsx)(
                                                        ct,
                                                        {
                                                            className: ci.uI,
                                                            skuId: t,
                                                            subscriptionPlanId: i,
                                                            entitlements: s[e],
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
                : (0, p.jsx)(uP.y, { className: ci.Lq });
        },
        usePredicate: () => !(0, dI.Hp)(),
        useSearchTerms: () => [g.intl.string(g.t["jcSP+g"]), g.intl.string(g.t["9KeUbY"])],
    }),
    cs = (0, o.E2)(u.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: dx.uK,
        usePredicate: () => (0, dI.Hp)(),
        useSearchTerms: () => [g.intl.string(g.t.vwMEHS)],
    }),
    cr = (0, o.zZ)(u.X.GIFT_INVENTORY_CATEGORY, { buildLayout: () => [dL, cl, cs] }),
    ca = (0, o.t_)(u.X.GIFT_PANEL, { useTitle: () => g.intl.string(g.t["jcSP+g"]), buildLayout: () => [cr] }),
    co = (0, o.i4)(u.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["jcSP+g"]),
        icon: db.o,
        usePersistentBadge: function () {
            return N.useMemo(() => ({ badgeType: e_.Xi.COUNT, useCount: () => (0, dC.IO)().length }), []);
        },
        buildLayout: () => [ca],
    });
var cu = i(949302),
    cd = i(332434),
    cc = i(422253);
let cg = (0, o.E2)(u.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
            return (0, oG.YE)(e, l_.PremiumTypes.TIER_2) ? (0, p.jsx)(cc.A, {}) : (0, p.jsx)(cd.A, {});
        },
        useSearchTerms: () => [g.intl.string(g.t.Ipxkog)],
    }),
    cm = (0, o.zZ)(u.X.NITRO_CATEGORY, { buildLayout: () => [cg] }),
    cA = (0, o.t_)(u.X.NITRO_PANEL, {
        useTitle: () => g.intl.string(g.t.Ipxkog),
        useObscuredNotice: uD.L,
        buildLayout: () => [cm],
    }),
    ch = (0, o.i4)(u.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.Ipxkog),
        icon: oC.t,
        usePersistentBadge: function (e) {
            return N.useMemo(
                () => ({ badgeType: e_.Xi.STRONGLY_DISCOURAGED_CUSTOM, useCustomBadge: () => (0, cu.e)(e) }),
                [e],
            );
        },
        buildLayout: () => [cA],
    });
var cE = i(104510),
    cT = i(820739),
    cS = i(73825),
    cx = i(160946);
let cp = (0, i(250105).Ay)({
    name: "2026-03-boosting-settings-refresh",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var cN = i(859241),
    c_ = i(531260),
    cf = i(369163),
    cb = i(179866),
    cC = i(926268),
    cI = i(106529),
    cv = i(93364);
function cj(e) {
    let { className: t, icon: i, children: n } = e;
    return (0, p.jsxs)("li", {
        className: ew()(cI.Nr, t),
        children: [
            (0, p.jsx)(i, { className: cI.Kk }),
            (0, p.jsx)(M.E, { className: cI.__invalid_description, variant: "text-sm/medium", children: n }),
        ],
    });
}
let cy = function (e) {
    let { cardClassName: t } = e;
    return (0, p.jsxs)("div", {
        className: cI.iE,
        children: [
            (0, p.jsxs)("div", {
                className: cI.Qs,
                children: [
                    (0, p.jsx)(eA.D, {
                        className: cI.R_,
                        color: "always-white",
                        variant: "heading-xxl/bold",
                        children: g.intl.string(g.t.IzKs3o),
                    }),
                    (0, p.jsxs)("ul", {
                        className: cI.kR,
                        children: [
                            (0, p.jsx)(cj, { className: t, icon: cf.v, children: g.intl.string(g.t.TZigSO) }),
                            (0, p.jsx)(cj, {
                                className: t,
                                icon: (e) =>
                                    (0, p.jsx)("img", { className: ew()(e.className, cI.Dp), src: cv, alt: "" }),
                                children: g.intl.string(g.t.hjQuV2),
                            }),
                            (0, p.jsx)(cj, { className: t, icon: cb.i, children: g.intl.string(g.t["2RUcaM"]) }),
                            (0, p.jsx)(cj, { className: t, icon: cC.C, children: g.intl.string(g.t.bJoZKV) }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)("div", { className: cI.JP }),
        ],
    });
};
var cO = i(834040),
    cR = i(307301),
    cL = i(811227);
let cD = [
        { getQuestion: () => g.intl.string(g.t.C4J8UB), getAnswer: () => g.intl.string(g.t.nhkk6k) },
        {
            getQuestion: () => g.intl.string(g.t.ai4ym2),
            getAnswer: () =>
                g.intl.format(g.t["8zlqlD"], { helpCenterUrl: ta.A.getArticleURL(Q.MVz.GUILD_BOOSTING_FAQ) }),
        },
        { getQuestion: () => g.intl.string(g.t.kMVGsC), getAnswer: () => g.intl.string(g.t["Vz/SCQ"]) },
        { getQuestion: () => g.intl.string(g.t.kYmXWF), getAnswer: () => g.intl.string(g.t["+OURPp"]) },
        { getQuestion: () => g.intl.string(g.t["LsX/vb"]), getAnswer: () => g.intl.string(g.t["3TeauK"]) },
        { getQuestion: () => g.intl.string(g.t.fRlnXU), getAnswer: () => g.intl.string(g.t.bTRacj) },
        { getQuestion: () => g.intl.string(g.t["8Mu5Q9"]), getAnswer: () => g.intl.string(g.t["2T5iPo"]) },
        { getQuestion: () => g.intl.string(g.t["6EN+TZ"]), getAnswer: () => g.intl.string(g.t.NZax1u) },
        { getQuestion: () => g.intl.string(g.t.f5B4EW), getAnswer: () => g.intl.string(g.t.Aje8Pb) },
    ],
    cG = function (e) {
        let { className: t } = e,
            [i, n] = N.useState(null);
        return (0, p.jsxs)("div", {
            className: ew()(cL.iE, t),
            children: [
                (0, p.jsx)(eA.D, {
                    className: cL.R_,
                    variant: "heading-xxl/bold",
                    children: g.intl.string(g.t.HPJ6Nj),
                }),
                (0, p.jsx)("ul", {
                    className: cL.p_,
                    children: cD.map((e, t) => {
                        let l = i === t;
                        return (0, p.jsxs)(
                            "div",
                            {
                                className: cL.Aw,
                                children: [
                                    (0, p.jsxs)(V.D, {
                                        className: ew()(cL.k7, { [cL.lo]: l }),
                                        onClick: () => n((e) => (e === t ? null : t)),
                                        tag: "li",
                                        children: [
                                            (0, p.jsx)(M.E, {
                                                className: cL.b1,
                                                variant: "text-lg/normal",
                                                children: e.getQuestion(),
                                            }),
                                            l
                                                ? (0, p.jsx)(cO.Q, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: cL.q4,
                                                  })
                                                : (0, p.jsx)(cR.j, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: cL.q4,
                                                  }),
                                        ],
                                    }),
                                    l &&
                                        (0, p.jsx)(M.E, {
                                            className: cL.ZF,
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
var cP = i(462887),
    cU = i(933832),
    cV = i(789645),
    cM = i(116891),
    ck = i(416676);
let cw = [
    {
        getPerkHeading: () => g.intl.string(g.t.tIiwuj),
        getPerkPreviewLightTheme: () => i(604203),
        getPerkPreviewDarkTheme: () => i(878515),
        getTier0Value: () => l_.TG[Q.TVA.NONE].limits.emoji,
        getTier1Value: () => l_.TG[Q.TVA.TIER_1].limits.emoji,
        getTier2Value: () => l_.TG[Q.TVA.TIER_2].limits.emoji,
        getTier3Value: () => l_.TG[Q.TVA.TIER_3].limits.emoji,
    },
    {
        getPerkHeading: () => g.intl.string(g.t["3iccet"]),
        getPerkPreviewLightTheme: () => i(105732),
        getPerkPreviewDarkTheme: () => i(857020),
        getTier0Value: () => l_.TG[Q.TVA.NONE].limits.stickers,
        getTier1Value: () => l_.TG[Q.TVA.TIER_1].limits.stickers,
        getTier2Value: () => l_.TG[Q.TVA.TIER_2].limits.stickers,
        getTier3Value: () => l_.TG[Q.TVA.TIER_3].limits.stickers,
    },
    {
        getPerkHeading: () => g.intl.string(g.t["+smCv9"]),
        getPerkPreviewLightTheme: () => i(597890),
        getPerkPreviewDarkTheme: () => i(297642),
        getTier0Value: () => l_.TG[Q.TVA.NONE].limits.soundboardSounds,
        getTier1Value: () => l_.TG[Q.TVA.TIER_1].limits.soundboardSounds,
        getTier2Value: () => l_.TG[Q.TVA.TIER_2].limits.soundboardSounds,
        getTier3Value: () => l_.TG[Q.TVA.TIER_3].limits.soundboardSounds,
    },
    {
        getPerkHeading: () => g.intl.string(g.t.SMYauD),
        getPerkPreviewLightTheme: () => i(323091),
        getPerkPreviewDarkTheme: () => i(261835),
        getTier0Value: () =>
            g.intl.formatToPlainString(g.t.zZ6Rdi, {
                resolution: l_.TG[Q.TVA.NONE].limits.screenShareQualityResolution,
                framerate: l_.TG[Q.TVA.NONE].limits.screenShareQualityFramerate,
            }),
        getTier1Value: () =>
            g.intl.formatToPlainString(g.t.zZ6Rdi, {
                resolution: l_.TG[Q.TVA.TIER_1].limits.screenShareQualityResolution,
                framerate: l_.TG[Q.TVA.TIER_1].limits.screenShareQualityFramerate,
            }),
        getTier2Value: () =>
            g.intl.formatToPlainString(g.t.zZ6Rdi, {
                resolution: (0, cM.eT)("GuildBoostingMarketingTierComparisonTable"),
                framerate: l_.TG[Q.TVA.TIER_2].limits.screenShareQualityFramerate,
            }),
        getTier3Value: () =>
            g.intl.formatToPlainString(g.t.zZ6Rdi, {
                resolution: (0, cM.eT)("GuildBoostingMarketingTierComparisonTable"),
                framerate: l_.TG[Q.TVA.TIER_3].limits.screenShareQualityFramerate,
            }),
    },
    {
        getPerkHeading: () => g.intl.string(g.t["/79IDj"]),
        getPerkPreviewLightTheme: () => i(913997),
        getPerkPreviewDarkTheme: () => i(95781),
        getTier0Value: () =>
            g.intl.formatToPlainString(g.t.w1gmLt, { bitrate: l_.TG[Q.TVA.NONE].limits.bitrate / 1e3 }),
        getTier1Value: () =>
            g.intl.formatToPlainString(g.t.w1gmLt, { bitrate: l_.TG[Q.TVA.TIER_1].limits.bitrate / 1e3 }),
        getTier2Value: () =>
            g.intl.formatToPlainString(g.t.w1gmLt, { bitrate: l_.TG[Q.TVA.TIER_2].limits.bitrate / 1e3 }),
        getTier3Value: () =>
            g.intl.formatToPlainString(g.t.w1gmLt, { bitrate: l_.TG[Q.TVA.TIER_3].limits.bitrate / 1e3 }),
    },
    {
        getPerkHeading: () => g.intl.string(g.t.R1U2xC),
        getPerkPreviewLightTheme: () => i(389833),
        getPerkPreviewDarkTheme: () => i(754561),
        getTier0Value: () =>
            g.intl.formatToPlainString(g.t.pIn7Af, { size: l_.TG[Q.TVA.NONE].limits.fileSize / 1048576 }),
        getTier1Value: () =>
            g.intl.formatToPlainString(g.t.pIn7Af, { size: l_.TG[Q.TVA.TIER_1].limits.fileSize / 1048576 }),
        getTier2Value: () =>
            g.intl.formatToPlainString(g.t.pIn7Af, { size: l_.TG[Q.TVA.TIER_2].limits.fileSize / 1048576 }),
        getTier3Value: () =>
            g.intl.formatToPlainString(g.t.pIn7Af, { size: l_.TG[Q.TVA.TIER_3].limits.fileSize / 1048576 }),
    },
    {
        getPerkHeading: () => g.intl.string(g.t.f6vfso),
        getPerkPreviewLightTheme: () => i(735669),
        getPerkPreviewDarkTheme: () => i(283517),
        getTier0Value: () => l_.TG[Q.TVA.NONE].limits.stageVideoUsers,
        getTier1Value: () => l_.TG[Q.TVA.TIER_1].limits.stageVideoUsers,
        getTier2Value: () => l_.TG[Q.TVA.TIER_2].limits.stageVideoUsers,
        getTier3Value: () => l_.TG[Q.TVA.TIER_3].limits.stageVideoUsers,
    },
    {
        getPerkHeading: () => g.intl.string(g.t.qDqUME),
        getPerkPreviewLightTheme: () => i(970770),
        getPerkPreviewDarkTheme: () => i(416378),
        getTier0Value: () => !1,
        getTier1Value: () => !0,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkHeading: () => g.intl.string(g.t.uwqgbu),
        getPerkPreviewLightTheme: () => i(243580),
        getPerkPreviewDarkTheme: () => i(975940),
        getTier0Value: () => !1,
        getTier1Value: () => !0,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkHeading: () => g.intl.string(g.t.zxsDxc),
        getPerkPreviewLightTheme: () => i(435748),
        getPerkPreviewDarkTheme: () => i(978380),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => g.intl.string(g.t["2TNS3n"]),
        getTier3Value: () => g.intl.string(g.t["l+S46U"]),
    },
    {
        getPerkHeading: () => g.intl.string(g.t["bHa+Ee"]),
        getPerkPreviewLightTheme: () => i(329312),
        getPerkPreviewDarkTheme: () => i(800120),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkHeading: () => g.intl.string(g.t.QV6MZQ),
        getPerkPreviewLightTheme: () => i(463384),
        getPerkPreviewDarkTheme: () => i(258963),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => !1,
        getTier3Value: () => !0,
    },
];
function cB(e) {
    let { children: t, className: i, tier: n } = e,
        l = n === Q.TVA.NONE ? "text-muted" : "text-strong",
        s = n === Q.TVA.NONE || null == n ? "heading-xl/normal" : "heading-xl/bold";
    return (0, p.jsxs)("th", {
        className: ew()(ck.PG, i),
        scope: "col",
        children: [
            (0, p.jsx)(eA.D, { color: l, variant: s, children: t }),
            null != n &&
                (0, p.jsx)(M.E, {
                    color: l,
                    variant: "text-md/normal",
                    children: g.intl.format(g.t["pob/cL"], { subscriptions: Q.M2T[n] }),
                }),
        ],
    });
}
function cF(e) {
    let t,
        { className: i, textVariant: n = "text-md/bold", value: l } = e;
    if ("boolean" == typeof l) {
        let e = ew()(ck.Jk, { [ck.I$]: l });
        t = l
            ? (0, p.jsx)(cU.A, { size: "md", color: "currentColor", className: e })
            : (0, p.jsx)(cV.P, { size: "md", color: "currentColor", className: e });
    } else t = (0, p.jsx)(M.E, { color: "interactive-text-active", variant: n, children: l });
    return (0, p.jsx)("td", { className: ew()(ck.xR, i), children: t });
}
function cz(e) {
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
        : (0, p.jsx)("div", {
              className: ew()(ck.ER, { [ck.GH]: i === Q.TVA.TIER_2, [ck.z5]: i === Q.TVA.TIER_3 }),
              children: (0, p.jsx)(M.E, {
                  className: ck.uQ,
                  color: "always-white",
                  variant: "text-xs/bold",
                  children: t === Q.TVA.TIER_3 ? g.intl.string(g.t.d849Up) : g.intl.string(g.t.dZeX1z),
              }),
          });
}
function cX(e) {
    let { isFocused: t, handleFocus: i, handleRowBlur: n, theme: l, row: s, hideTier0: r } = e,
        a = N.useRef(null);
    return (0, p.jsxs)("tr", {
        className: ck.__invalid_tableRow,
        children: [
            (0, p.jsx)("th", {
                className: ew()(ck.xR, ck.uB),
                scope: "row",
                children: (0, p.jsx)(V.D, {
                    className: ew()(ck.VC, ck.xR, ck.Rk),
                    onFocus: i,
                    onBlur: n,
                    onMouseEnter: i,
                    onMouseLeave: n,
                    children: (0, p.jsx)(G.Y, {
                        targetElementRef: a,
                        align: "center",
                        disablePointerEvents: !0,
                        nudgeAlignIntoViewport: !0,
                        position: "bottom",
                        renderPopout: () =>
                            (0, p.jsx)("img", {
                                className: ck.Mz,
                                src: (0, cP.M)(l) ? s.getPerkPreviewDarkTheme() : s.getPerkPreviewLightTheme(),
                                alt: "",
                            }),
                        shouldShow: t,
                        spacing: 16,
                        children: () =>
                            (0, p.jsx)(M.E, { variant: "text-md/normal", ref: a, children: s.getPerkHeading() }),
                    }),
                }),
            }),
            !r && (0, p.jsx)(cF, { textVariant: "text-md/normal", value: s.getTier0Value() }),
            (0, p.jsx)(cF, { value: s.getTier1Value() }),
            (0, p.jsx)(cF, { value: s.getTier2Value() }),
            (0, p.jsx)(cF, { value: s.getTier3Value() }),
        ],
    });
}
let cY = function (e) {
    let t = (0, dU.Ay)(),
        [i, n] = N.useState(null),
        { className: l, guild: s, hideHeading: r, hideTier0: a } = e;
    function o() {
        n(null);
    }
    return (0, p.jsxs)("div", {
        className: l,
        children: [
            !r &&
                (0, p.jsx)(eA.D, {
                    className: ck.R_,
                    variant: "heading-xxl/extrabold",
                    children: g.intl.string(g.t["9GGb9k"]),
                }),
            (0, p.jsxs)("div", {
                className: ck.wY,
                children: [
                    null != s && (0, p.jsx)(cz, { currentTier: s.premiumTier }),
                    (0, p.jsxs)("table", {
                        className: ck.tp,
                        cellPadding: 0,
                        cellSpacing: 0,
                        children: [
                            (0, p.jsx)("thead", {
                                children: (0, p.jsxs)("tr", {
                                    className: ck.__invalid_tableRow,
                                    children: [
                                        (0, p.jsx)(cB, { className: ck.VC, children: g.intl.string(g.t.F5MY0k) }),
                                        !a && (0, p.jsx)(cB, { tier: Q.TVA.NONE, children: g.intl.string(g.t.mx8j2m) }),
                                        (0, p.jsx)(cB, { tier: Q.TVA.TIER_1, children: g.intl.string(g.t.nzXtaS) }),
                                        (0, p.jsx)(cB, { tier: Q.TVA.TIER_2, children: g.intl.string(g.t["h33/uW"]) }),
                                        (0, p.jsx)(cB, { tier: Q.TVA.TIER_3, children: g.intl.string(g.t.BfF6ED) }),
                                    ],
                                }),
                            }),
                            (0, p.jsx)("tbody", {
                                className: ck.__invalid_tableBody,
                                children: cw.map((e, l) => {
                                    let s = i === l;
                                    return void 0 === e.predicate
                                        ? (0, p.jsx)(
                                              cX,
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
var cH = i(338548),
    cK = i(776096),
    cW = i(178368),
    cZ = i(123924),
    cQ = i(866323),
    cq = i(530005),
    cJ = i(443865),
    c$ = i(473145);
function c0(e) {
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
                label: null != t.premiumGuildSubscription ? g.intl.string(g.t["PR0n//"]) : g.intl.string(g.t["+fmEYG"]),
                subtext: t.isOnCooldown() ? g.intl.string(g.t.XnB8M0) : null,
                disabled: t.isOnCooldown(),
            },
            cancel: { label: g.intl.string(g.t.twFU3R), subtext: l ? null : g.intl.string(g.t.oQ9lOh), disabled: !l },
            uncancel: { label: g.intl.string(g.t["2glQNp"]), subtext: null, disabled: !1 },
        };
    switch (s.status) {
        case Q.Dmq.PAST_DUE:
            (o.cancel.disabled = !0), (o.cancel.subtext = g.intl.string(g.t.WnL6DV)), (o.uncancel.disabled = !0);
            break;
        case Q.Dmq.PAUSE_PENDING:
        case Q.Dmq.PAUSED:
            a === l_.xc.NONE &&
                ((o.transfer.disabled = !0),
                (o.transfer.subtext = g.intl.string(g.t.LiLRRT)),
                (o.cancel.subtext = g.intl.string(g.t["1ywaWL"])),
                (o.cancel.disabled = !0),
                (o.uncancel.disabled = !0));
    }
    let d = N.useMemo(
        () =>
            s.isPausedOrPausePending && a === l_.xc.NONE
                ? (0, p.jsx)(U.Dr, {
                      id: "manage-subscription",
                      label: g.intl.string(g.t.obRG6Y),
                      action: () => (0, ej.openUserSettings)(u.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: cJ.x,
                      leadingAccessory: { type: "icon", icon: cJ.x },
                  })
                : null,
        [a, s],
    );
    return (0, p.jsxs)(P.W, {
        "data-menu-migrated-auto": !0,
        onSelect: r,
        navId: "subscription-context",
        variant: "fixed",
        "aria-label": g.intl.string(g.t.ogxXGq),
        onClose: n,
        children: [
            (0, p.jsx)(U.Dr, {
                id: "apply",
                label: o.transfer.label,
                subtext: o.transfer.subtext,
                action: function () {
                    (0, f.openModalLazy)(async () => {
                        let { default: e } = await Promise.resolve().then(i.bind(i, 724624));
                        return (i) =>
                            (0, p.jsx)(e, { ...i, guildBoostSlots: [t], locationSection: Q.JJy.SETTINGS_PREMIUM });
                    });
                },
                disabled: o.transfer.disabled,
            }),
            (0, c$.I5)(t)
                ? (0, p.jsx)(U.Dr, {
                      id: "uncancel",
                      label: o.uncancel.label,
                      subtext: o.uncancel.subtext,
                      action: function () {
                          (0, f.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(i.bind(i, 342744));
                              return (i) => (0, p.jsx)(e, { ...i, guildBoostSlotId: t.id });
                          });
                      },
                      disabled: o.uncancel.disabled,
                  })
                : (0, p.jsx)(U.Dr, {
                      id: "cancel",
                      label: o.cancel.label,
                      subtext: o.cancel.subtext,
                      action: function () {
                          (0, f.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(i.bind(i, 983511));
                              return (i) => (0, p.jsx)(e, { ...i, guildBoostSlot: t });
                          });
                      },
                      disabled: o.cancel.disabled,
                      color: "danger",
                  }),
            d,
        ],
    });
}
var c1 = i(545934),
    c2 = i(496431);
let c3 = function (e) {
    let { className: t, cooldown: i } = e,
        n = (0, c2.A)(i);
    return (0, p.jsx)(M.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, rC.uN)(n, { days: g.t.WUTPDc, hours: g.t.c1qodV, minutes: g.t["2+A3dv"] }),
    });
};
var c4 = i(550070);
let c5 = function (e) {
    let { className: t, imageClassName: n, boostInCooldown: l, useReducedMotion: s } = e;
    return (0, p.jsx)("div", {
        className: ew()(c4.h4, t, { [c4.K2]: l }),
        children: (0, p.jsx)("img", {
            className: ew()(c4.Sl, n, { [c4.x8]: l }),
            src: l
                ? i(791128)
                : s
                  ? i(757871)
                  : "https://cdn.discordapp.com/assets/content/86fd98fc22283647a8be93d0c503646b53c84e3cb25ca6562a38cecb84327e58.gif",
            alt: "",
        }),
    });
};
var c8 = i(280582);
let c6 = function (e) {
    let { className: t, hasCooldown: n, isCanceled: l, useReducedMotion: s } = e;
    return (0, p.jsxs)("div", {
        className: ew()(c8.sn, t),
        children: [
            l
                ? (0, p.jsx)("img", { className: ew()(c8.$J, c8.qX), src: i(66469), alt: "" })
                : (0, p.jsx)(c5, { className: c8.$J, boostInCooldown: n, useReducedMotion: s }),
            !l && n && (0, p.jsx)("img", { className: c8.De, src: i(994937), alt: "" }),
        ],
    });
};
var c7 = i(548118),
    c9 = i(509536),
    ge = i(721923),
    gt = i(864310),
    gi = i(44112);
let gn = function (e) {
    let { className: t, guildId: i, boostingVariant: n } = e,
        l = (0, uE.bG)([H.A], () => H.A.getGuild(i), [i]),
        s = (0, gt.A)(l?.id).total;
    return null == l
        ? (0, p.jsx)("div", {
              className: ew()(t, gi.bo),
              children: (0, p.jsx)("div", {
                  className: gi.$g,
                  children: (0, p.jsx)(M.E, { variant: "text-lg/bold", children: g.intl.string(g.t["6Kwwuo"]) }),
              }),
          })
        : (0, p.jsxs)("div", {
              className: ew()(t, gi.bo),
              children: [
                  (0, p.jsx)(c7.Ay, { className: gi.__invalid_guildIcon, guild: l, size: c7.Ay.Sizes.LARGER }),
                  (0, p.jsxs)("div", {
                      className: gi.$g,
                      children: [
                          (0, p.jsx)(M.E, { variant: "text-lg/bold", children: l.name }),
                          (0, p.jsxs)("div", {
                              className: gi.TZ,
                              children: [
                                  (0, p.jsx)(cE._, {
                                      color: w.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                      className: gi.Me,
                                  }),
                                  (0, p.jsx)(M.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: g.intl.format(g.t["pob/cL"], { subscriptions: s }),
                                  }),
                                  (0, p.jsx)("div", { className: gi.me }),
                                  (0, p.jsx)(M.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: (0, c$.gb)(l.premiumTier, { useLevels: !1 }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  n
                      ? (0, p.jsx)(ge.A, {
                            guild: l,
                            analyticsLocation: {
                                page: Q.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                section: Q.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                object: Q.ZSU.BUTTON_CTA,
                                objectType: Q.AnalyticsObjectTypes.BUY,
                            },
                            pauseAnimation: !0,
                            size: aE.$n.Sizes.MEDIUM,
                            color: aE.$n.Colors.PRIMARY,
                            buttonText: g.intl.string(g.t.aBHecF),
                        })
                      : (0, p.jsx)(eh.$, {
                            variant: "secondary",
                            text: g.intl.string(g.t.KLOhbO),
                            onClick: () => {
                                (0, lT.default)(),
                                    (0, c9.K4)({
                                        guildId: l.id,
                                        location: { section: Q.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA },
                                    });
                            },
                        }),
              ],
          });
};
var gl = i(930988);
function gs(e) {
    let {
            guildTier: t,
            guildBoostSlot: i,
            showAltText: n,
            isCanceled: l,
            premiumSubscription: s,
            fractionalPremiumInfo: r,
        } = e,
        a = N.useMemo(() => {
            if (l) {
                let e = s.currentPeriodEnd;
                return (
                    s.isPausedForFractionalPremium && (e = r.endsAt.toDate()), g.intl.format(g.t.Z4ULRD, { date: e })
                );
            }
            let e = null != i.premiumGuildSubscription ? uz.default.extractTimestamp(i.premiumGuildSubscription.id) : 0;
            return g.intl.formatToPlainString(g.t.lY2Bur, { date: new Date(e) });
        }, [i, l, s, r]),
        o = N.useMemo(
            () =>
                (function (e) {
                    if (null == e || e === Q.TVA.NONE) return "";
                    let t = [
                        g.intl.formatToPlainString(g.t["dLlKX/"], { numEmojiSlots: l_.TG[e].limits.emoji }),
                        g.intl.formatToPlainString(g.t["+ANIfv"], { numStickerSlots: l_.TG[e].limits.stickers }),
                        g.intl.formatToPlainString(g.t["4gt60b"], {
                            numSoundboardSlots: l_.TG[e].limits.soundboardSounds,
                        }),
                        g.intl.formatToPlainString(g.t.XahSjZ, {
                            resolution: l_.TG[e].limits.screenShareQualityResolution,
                            framerate: l_.TG[e].limits.screenShareQualityFramerate,
                        }),
                        g.intl.formatToPlainString(g.t.NbNs7S, { bitrate: l_.TG[e].limits.bitrate / 1e3 }),
                        g.intl.formatToPlainString(g.t.VVKcpn, { filesize: l_.TG[e].limits.fileSize / 1024 / 1024 }),
                        g.intl.formatToPlainString(g.t.TbpCvv, { numVideoStageSeats: l_.TG[e].limits.stageVideoUsers }),
                        g.intl.string(g.t.LDyX3i),
                        g.intl.string(g.t.YtGlPW),
                    ];
                    e >= Q.TVA.TIER_2 && (t.push(g.intl.string(g.t.SztbtN)), t.push(g.intl.string(g.t["3GK91n"]))),
                        e >= Q.TVA.TIER_3 && t.push(g.intl.string(g.t["XUUJd+"]));
                    let i = t[Math.floor(Math.random() * t.length)];
                    return g.intl.format(g.t["/dOAmQ"], { perk: i });
                })(t),
            [t],
        ),
        u = (0, cQ.p)(n, { from: { opacity: 0 }, enter: { opacity: 1 }, leave: { opacity: 0 } }, "animate-always");
    return l || t === Q.TVA.NONE
        ? (0, p.jsx)("div", {
              className: gl.xm,
              children: (0, p.jsx)(M.E, { variant: "text-sm/medium", color: "text-muted", children: a }),
          })
        : u((e, t) =>
              (0, p.jsx)(cZ.animated.div, {
                  style: e,
                  className: gl.xm,
                  children: (0, p.jsx)(M.E, { variant: "text-sm/medium", color: "text-muted", children: t ? o : a }),
              }),
          );
}
function gr(e) {
    let {
            guildTier: t,
            guildBoostSlot: i,
            premiumSubscription: n,
            hasCancelableGuildBoostSlot: l,
            showAltText: s,
            isLastGuildBoostSlot: r,
        } = e,
        a = (0, uE.bG)([iW.A], () => iW.A.useReducedMotion),
        o = N.useMemo(() => (null != i.cooldownEndsAt ? new Date(i.cooldownEndsAt) : null), [i]),
        u = N.useMemo(() => null != o && o > new Date(), [o]),
        d = (0, c$.I5)(i),
        c = (0, c_.A)(),
        m = N.useRef(null);
    return (0, p.jsxs)("div", {
        className: gl.PW,
        children: [
            (0, p.jsxs)("div", {
                className: gl.$U,
                children: [
                    (0, p.jsx)(c6, { isCanceled: d, hasCooldown: u, useReducedMotion: a }),
                    (0, p.jsx)("div", {
                        className: gl.vh,
                        children:
                            null != o && u && !d
                                ? (0, p.jsx)(c3, { className: gl.xm, cooldown: o.getTime() })
                                : (0, p.jsx)(gs, {
                                      guildTier: t,
                                      guildBoostSlot: i,
                                      showAltText: s,
                                      isCanceled: d,
                                      premiumSubscription: n,
                                      fractionalPremiumInfo: c,
                                  }),
                    }),
                    (0, p.jsx)(G.Y, {
                        targetElementRef: m,
                        renderPopout: function (e) {
                            let { closePopout: t } = e;
                            return (0, p.jsx)(c0, {
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
                            (0, p.jsx)(V.D, {
                                ...e,
                                innerRef: m,
                                "aria-label": g.intl.string(g.t.PdRCRg),
                                className: gl.oU,
                                children: (0, p.jsx)(cq.F, { size: "md", color: "currentColor" }),
                            }),
                    }),
                ],
            }),
            !r && (0, p.jsx)("div", { className: gl.eX }),
        ],
    });
}
function ga(e) {
    let {
            guildId: t,
            guildBoostSlotRecords: i,
            premiumSubscription: n,
            hasCancelableGuildBoostSlot: l,
            showAltText: s,
        } = e,
        r = (0, uE.bG)([H.A], () => H.A.getGuild(t), [t]);
    return (0, p.jsxs)("div", {
        className: gl.ag,
        children: [
            (0, p.jsx)(gn, { guildId: t, boostingVariant: !1 }),
            i.map((e, t) =>
                (0, p.jsx)(
                    gr,
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
function go(e) {
    let { guildId: t, appliedGuildBoosts: i, premiumSubscription: n } = e,
        l = (0, uE.bG)([H.A], () => H.A.getGuild(t), [t]),
        s = uz.default.fromTimestamp(Date.now());
    if (
        (i.forEach((e) => {
            (null == s || 0 > uz.default.compare(e.id, s)) && (s = e.id);
        }),
        null == s)
    )
        return null;
    let r = c1.A.createFromServer(
        {
            id: uz.default.fromTimestamp(Date.now()),
            subscription_id: n.id,
            canceled: !1,
            premium_guild_subscription: { id: s, guild_id: t },
            cooldown_ends_at: null,
        },
        n,
    );
    return (0, p.jsxs)("div", {
        className: gl.ag,
        children: [
            (0, p.jsx)(gn, { guildId: t, boostingVariant: !1 }),
            i.map((e, t) =>
                (0, p.jsx)(
                    gr,
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
function gu(e) {
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
        : (0, p.jsxs)("div", {
              className: gl.iE,
              children: [
                  (0, p.jsx)("div", {
                      className: gl.kL,
                      children: uz.default
                          .keys(n)
                          .map((e) =>
                              (0, p.jsx)(go, { guildId: e, premiumSubscription: i, appliedGuildBoosts: n[e] }, e),
                          ),
                  }),
                  (0, p.jsx)("div", { className: gl.vK }),
              ],
          });
}
function gd(e) {
    let { guildBoostSlots: t, premiumSubscription: i } = e,
        [n, l] = N.useState(!1);
    N.useEffect(() => {
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
    let { boostsByGuildId: s, numActiveGuildBoostSlots: r } = N.useMemo(() => {
        let e = 0,
            i = {};
        return (
            Object.keys(t).forEach((n) => {
                let l = t[n];
                if ((!(0, c$.I5)(l) && e++, null != l.premiumGuildSubscription)) {
                    let e = l.premiumGuildSubscription.guildId;
                    e in i || (i[e] = []), i[e].push(l);
                }
            }),
            { boostsByGuildId: i, numActiveGuildBoostSlots: e }
        );
    }, [t]);
    if (null == i || 0 === Object.keys(s).length) return null;
    let a = r > oG.Ay.getNumIncludedPremiumGuildSubscriptionSlots(i.planId);
    return (0, p.jsxs)("div", {
        className: gl.iE,
        children: [
            (0, p.jsx)("div", {
                className: gl.kL,
                children: uz.default
                    .keys(s)
                    .map((e) =>
                        (0, p.jsx)(
                            ga,
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
            (0, p.jsx)("div", { className: gl.vK }),
        ],
    });
}
var gc = i(581796);
let gg = function (e) {
    let { hasGuildBoostSlots: t, hasAppliedGuildBoosts: n, hasBoostPerk: l, canAddBoosts: s } = e;
    return (0, p.jsxs)("div", {
        className: gc.iE,
        children: [
            (0, p.jsx)("div", {
                className: gc.bj,
                children: (0, p.jsx)("img", { alt: "", className: gc.KV, src: i(757871) }),
            }),
            (0, p.jsxs)("div", {
                className: gc.D7,
                children: [
                    (0, p.jsx)(eA.D, {
                        variant: "display-md",
                        className: gc.R_,
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
                                        ? g.intl.format(g.t.s9zQyG, {})
                                        : g.intl.format(g.t.Rb8Jhs, {})
                                    : g.intl.string(g.t["2rh0by"])
                                : g.intl.format(g.t.Rb8Jhs, {});
                        })({ hasGuildBoostSlots: t, hasBoostPerk: l, hasAppliedGuildBoosts: n, canAddBoosts: s }),
                    }),
                    (0, p.jsx)("svg", {
                        viewBox: "0 0 660 210",
                        className: gc.Mz,
                        children: (0, p.jsx)("path", {
                            d: "M101.3,45.5C57.5,45.9,15.9,82.2,0,99.5V210h660V53.5c-164-137-265.2,32.4-385.8,33.6  C177.7,88.1,158.1,45,101.3,45.5z",
                        }),
                    }),
                ],
            }),
        ],
    });
};
var gm = i(757240),
    gA = i(168482);
function gh() {
    return (0, p.jsxs)("div", {
        className: gm.iE,
        children: [
            (0, p.jsx)("img", { className: gm.Kk, alt: "", src: gA }),
            (0, p.jsxs)("div", {
                className: gm.pq,
                children: [
                    (0, p.jsx)(M.E, { variant: "text-lg/bold", children: g.intl.string(g.t.ZHNSYf) }),
                    (0, p.jsx)(M.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: g.intl.string(g.t.kCj5ps),
                    }),
                ],
            }),
            (0, p.jsx)(eh.$, {
                variant: "secondary",
                text: g.intl.string(g.t.JFlifp),
                onClick: () => {
                    (0, lR.pX)(Q.BVt.GUILD_DISCOVERY), (0, lT.default)();
                },
            }),
        ],
    });
}
var gE = i(502572),
    gT = i(614820),
    gS = i(987144),
    gx = i(43985);
let gp = function () {
    let e = N.useRef(null),
        { analyticsLocations: t } = (0, nU.Ay)(),
        { fractionalState: n } = (0, c_.A)();
    function l(i) {
        null != e.current && (0, f.closeModal)(e.current),
            (0, gS.g)({
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
    async function s() {
        e.current = await (0, f.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 770101));
                return (t) => (0, p.jsx)(e, { ...t, onSelectGuild: l });
            },
            {
                onCloseRequest: () => {
                    null != e.current && (0, f.closeModal)(e.current);
                },
            },
        );
    }
    let r = (0, c$.Nc)({ fractionalState: n });
    return (0, p.jsxs)("div", {
        className: gx.iE,
        children: [
            (0, p.jsx)(cE._, { color: w.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: gx.$J }),
            (0, p.jsx)(M.E, {
                className: gx.C,
                color: "text-default",
                variant: "text-sm/medium",
                children: g.intl.format(g.t.kqC5vq, {
                    boostAnyGuildHook: (e, t) => {
                        let i = null != r,
                            n = (0, gT.O)(e),
                            l = (0, p.jsx)("div", {
                                className: gx.lO,
                                children: (0, p.jsx)(
                                    B.Q,
                                    { variant: "primary", onClick: i ? void 0 : s, text: n, disabled: i },
                                    t,
                                ),
                            });
                        return i
                            ? (0, p.jsx)(
                                  gE.A,
                                  {
                                      text: r,
                                      "aria-label": r.toString(),
                                      children: (e) => (0, p.jsx)("span", { ...e, children: l }),
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
var gN = i(212824);
let g_ = function (e) {
    let { canAddBoosts: t, canApplyBoosts: i } = e,
        n = (0, O.bG)([cK.A], () => cK.A.affinities),
        l = (0, O.bG)([K.Ay], () => K.Ay.getFlattenedGuildIds()),
        s = N.useMemo(() => {
            let e = n.slice(0, 3).map((e) => e.guildId);
            for (let t = 0; t < l.length && !(e.length >= 3); t++) {
                let i = l[t];
                e.includes(i) || e.push(i);
            }
            return e;
        }, [n, l]);
    return 0 === s.length
        ? null
        : (0, p.jsxs)("div", {
              className: gN.iE,
              children: [
                  t &&
                      (0, p.jsx)(eA.D, {
                          variant: "heading-lg/semibold",
                          className: gN.wx,
                          children: g.intl.string(g.t.r90Wgo),
                      }),
                  s.map((e) => (0, p.jsx)(gn, { className: gN.ZS, guildId: e, boostingVariant: !0 }, e)),
                  l.length > 3 && i && (0, p.jsx)(gp, {}),
              ],
          });
};
var gf = i(342933);
let gb = function (e) {
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
                    flavor: g.intl.format(g.t.doslJu, {
                        onClick: () => (0, ej.openUserSettings)(u.X.SUBSCRIPTIONS_PANEL),
                    }),
                };
            if (!n) return { subtitle: g.intl.string(g.t.oiWYAc) };
            if (t)
                return {
                    subtitle: g.intl.string(g.t.W5rDjW),
                    flavor: g.intl.format(g.t.cUHcaQ, {
                        helpdeskArticle: ta.A.getArticleURL(Q.MVz.GUILD_SUBSCRIPTIONS),
                    }),
                };
            let s = l_.hd[l_.gD.PREMIUM_MONTH_GUILD],
                r = oG.Ay.getDefaultPrice(s.id, i),
                a = (0, uB.CE)((0, uB.$g)(r.amount, r.currency), s.interval, s.intervalCount);
            return {
                subtitle: i ? g.intl.string(g.t.bhPzXR) : g.intl.string(g.t.Zs9h9Z),
                flavor: g.intl.formatToPlainString(g.t.PGgTdA, { monthlyGuildBoostPrice: a }),
            };
        })({
            hasAppliedGuildBoosts: t,
            hasBoostPerk: i,
            hasGuildAffinitiesOrInGuild: n,
            subscriptionIsPausedOrPausePending: l,
        });
    return (0, p.jsxs)("div", {
        className: gf.i,
        children: [
            (0, p.jsx)(eA.D, { variant: "heading-lg/bold", className: gf.V, children: s }),
            null != r && (0, p.jsx)(M.E, { variant: "text-sm/normal", children: r }),
        ],
    });
};
var gC = i(724624),
    gI = i(983511),
    gv = i(342744),
    gj = i(87719),
    gy = i(929570);
function gO(e) {
    let {
            guildBoostSlot: t,
            isCancellable: i,
            onCancel: n,
            onUncancel: l,
            premiumSubscription: s,
            useReducedMotion: r,
            fractionalState: a,
        } = e,
        o = N.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t]),
        u = (0, c$.I5)(t),
        d = s?.isPaused === !0 && a === l_.xc.NONE,
        c = g.intl.string(g.t.mOWsF1);
    return (0, p.jsxs)(
        "li",
        {
            className: gy.Hp,
            children: [
                (0, p.jsxs)("div", {
                    className: gy.YL,
                    children: [
                        (0, p.jsx)(c6, {
                            className: gy.W6,
                            hasCooldown: t.isOnCooldown(),
                            isCanceled: u,
                            useReducedMotion: r,
                        }),
                        u && null != s
                            ? (0, p.jsx)(M.E, {
                                  color: "text-muted",
                                  variant: "text-sm/medium",
                                  children: g.intl.format(g.t.Z4ULRD, { date: s.currentPeriodEnd }),
                              })
                            : t.isOnCooldown() && null != o
                              ? (0, p.jsx)(c3, { cooldown: o.getTime() })
                              : (0, p.jsx)(M.E, {
                                    className: gy.__invalid_unappliedGuildBoostSlotDescription,
                                    color: "text-muted",
                                    variant: "text-sm/medium",
                                    children: g.intl.string(g.t["2mcafz"]),
                                }),
                    ],
                }),
                (0, p.jsxs)("div", {
                    className: gy.E7,
                    children: [
                        i &&
                            !u &&
                            (0, p.jsx)(gE.A, {
                                shouldShow: d,
                                text: c,
                                "aria-label": c.toString(),
                                children: (e) =>
                                    (0, p.jsx)("div", {
                                        className: gy.LB,
                                        children: (0, p.jsx)(B.Q, {
                                            ...e,
                                            variant: "primary",
                                            text: g.intl.string(g.t.twFU3R),
                                            onClick: () => n(t),
                                            disabled: d,
                                            size: "sm",
                                        }),
                                    }),
                            }),
                        u &&
                            (0, p.jsx)(gE.A, {
                                shouldShow: d,
                                text: c,
                                "aria-label": c.toString(),
                                children: (e) =>
                                    (0, p.jsx)("div", {
                                        className: gy.LB,
                                        children: (0, p.jsx)(B.Q, {
                                            ...e,
                                            variant: "primary",
                                            text: g.intl.string(g.t["2glQNp"]),
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
function gR(e) {
    (0, f.openModalLazy)(async () => (t) => (0, p.jsx)(gI.default, { ...t, guildBoostSlot: e }));
}
function gL(e) {
    (0, f.openModalLazy)(async () => (t) => (0, p.jsx)(gv.default, { ...t, guildBoostSlotId: e.id }));
}
let gD = function (e) {
    let t,
        i,
        n,
        { guildBoostSlots: l } = e,
        s = (0, O.bG)([dl.A], () => dl.A.getPremiumTypeSubscription()),
        r = s?.isPausedOrPausePending === !0,
        { fractionalState: a } = (0, c_.A)(),
        o = (0, O.bG)([iW.A], () => iW.A.useReducedMotion),
        u = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
        d = a === l_.xc.FP_SUB_PAUSED,
        c = r && !d,
        {
            appliedGuildBoostSlots: m,
            unappliedGuildBoostSlots: A,
            numActiveGuildBoostSlots: h,
            hasCooldownBoosts: E,
            allGuildBoostsAreOnCooldown: T,
        } = N.useMemo(() => {
            let e = [],
                t = [],
                i = 0,
                n = !1,
                s = !0;
            return (
                l.forEach((l) => {
                    !(0, c$.I5)(l) && i++,
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
        S = null != s ? oG.Ay.getNumIncludedPremiumGuildSubscriptionSlots(s.planId) : 0,
        x = Math.max(0, S - m.length),
        _ = h > S,
        b = S === l.length,
        C = b ? x : 1,
        I = N.useMemo(() => {
            let e = [];
            for (let t = 0; t < C; t++) e.push((0, p.jsx)(c5, { className: gy.YA, useReducedMotion: o }, t));
            return e;
        }, [C, o]),
        v = N.useMemo(() => A.find((e) => e.isAvailable()), [A]);
    if (0 === A.length) return null;
    let j = A.length;
    if (
        ((t = b
            ? g.intl.formatToPlainString(T ? g.t["3DW6Dc"] : g.t["/u15Qc"], { numUnappliedGuildBoostSlots: j })
            : g.intl.formatToPlainString(T ? g.t["3DW6Dc"] : g.t.BPadnO, { numUnappliedGuildBoostSlots: j })),
        oG.Ay.isPremium(u))
    ) {
        let e = (e, t) =>
            (0, p.jsx)(
                V.D,
                {
                    className: gy.nw,
                    tag: "span",
                    onClick: () => {
                        (0, gj.e)();
                    },
                    children: e,
                },
                t,
            );
        i = T
            ? g.intl.format(g.t.omcpSE, { learnMoreHook: e })
            : g.intl.format(g.t["5mAkVi"], { numUnappliedGuildBoostSlots: j, learnMoreHook: e });
    } else
        i = T
            ? g.intl.string(g.t["8pcUZi"])
            : g.intl.formatToPlainString(g.t.Kaw82o, { numUnappliedGuildBoostSlots: j });
    return (
        (n = r && a === l_.xc.NONE ? g.intl.string(g.t.mOWsF1) : g.intl.string(g.t.xr4m5B)),
        (0, p.jsx)("div", {
            className: gy.iE,
            children: (0, p.jsxs)("div", {
                className: ew()(gy.Qs, [gy.Yq]),
                children: [
                    (0, p.jsxs)("div", {
                        className: gy.wx,
                        children: [
                            (0, p.jsxs)("div", {
                                className: gy.RW,
                                children: [
                                    (0, p.jsx)("div", { className: gy.PS, children: I }),
                                    (0, p.jsxs)("div", {
                                        className: gy.__invalid_headerCopy,
                                        children: [
                                            (0, p.jsx)(eA.D, {
                                                className: gy.gg,
                                                variant: "heading-lg/bold",
                                                children: t,
                                            }),
                                            (0, p.jsx)(M.E, {
                                                className: gy.__invalid_headerSubheading,
                                                color: "text-strong",
                                                variant: "text-sm/normal",
                                                children: i,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, p.jsx)("div", {
                                className: gy.di,
                                children: (0, p.jsx)(gE.A, {
                                    shouldShow: null == v || c,
                                    text: n,
                                    "aria-label": n.toString(),
                                    children: (e) =>
                                        (0, p.jsx)(eh.$, {
                                            variant: "primary",
                                            text: g.intl.string(g.t.BMx1iy),
                                            ...e,
                                            disabled: null == v || c,
                                            onClick:
                                                null != v
                                                    ? () => {
                                                          (0, f.openModalLazy)(
                                                              async () => (e) =>
                                                                  (0, p.jsx)(gC.default, {
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
                    (!b || E) &&
                        (0, p.jsx)("ul", {
                            className: gy.LU,
                            children: A.map((e) =>
                                (0, p.jsx)(
                                    gO,
                                    {
                                        guildBoostSlot: e,
                                        isCancellable: _,
                                        onCancel: gR,
                                        onUncancel: gL,
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
var gG = i(669561);
function gP(e) {
    let { premiumSubscription: t } = e,
        i = (0, O.bG)([cW.A], () => cW.A.boostSlots),
        n = N.useMemo(() => Object.values(i), [i]),
        l = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
        s = oG.Ay.isPremium(l, l_.PremiumTypes.TIER_2),
        r = (0, O.bG)([cK.A], () => cK.A.affinities),
        a = (0, O.bG)([K.Ay], () => K.Ay.getFlattenedGuildIds()),
        o = r.length > 0 || a.length > 0,
        u = n.length > 0,
        d = N.useMemo(() => n.filter((e) => null != e.premiumGuildSubscription), [n]),
        c = d.length > 0,
        g = n.length > d.length,
        m = (0, O.bG)([cN.A], () => cN.A.getCurrentUserAppliedBoosts()),
        { fractionalState: A } = (0, c_.A)({ forceFetch: !0 }),
        h = l?.isPremiumGroupMember(),
        E = t?.isPausedOrPausePending === !0 && A === l_.xc.NONE,
        T = t?.isPausedOrPausePending !== !0 && A === l_.xc.NONE && !h,
        S = s && A === l_.xc.FP_SUB_PAUSED,
        x = A === l_.xc.NONE && !h;
    return (0, p.jsxs)("div", {
        className: gG.GO,
        children: [
            (0, p.jsx)(dx.kb, { className: gG.ek }),
            (0, p.jsx)(gg, { hasGuildBoostSlots: u, hasAppliedGuildBoosts: c, hasBoostPerk: S, canAddBoosts: T }),
            x &&
                (0, p.jsx)(gb, {
                    hasAppliedGuildBoosts: c,
                    hasBoostPerk: S,
                    hasGuildAffinitiesOrInGuild: o,
                    subscriptionIsPausedOrPausePending: E,
                }),
            h && (0, p.jsx)(cH.A, {}),
            !o && (0, p.jsx)(gh, {}),
            t?.isPaused && A !== l_.xc.FP_SUB_PAUSED
                ? (0, p.jsx)(gu, { appliedGuildBoosts: m, premiumSubscription: t })
                : (0, p.jsx)(gd, { guildBoostSlots: i, premiumSubscription: t }),
            (0, p.jsx)(gD, { guildBoostSlots: n, fractionalPremiumState: A }),
            (0, p.jsx)(g_, { canAddBoosts: c && T, canApplyBoosts: g }),
            (0, p.jsx)(cY, { className: gG.e4, hideHeading: !0, hideTier0: !0 }),
            (0, p.jsx)(cy, { cardClassName: gG.KW }),
            (0, p.jsx)(cG, { className: gG.JL }),
        ],
    });
}
var gU = i(527113),
    gV = i(365199),
    gM = i(102320);
function gk(e) {
    let { guild: t, className: i } = e,
        { total: n } = (0, gt.A)(t.id);
    return (0, p.jsxs)("div", {
        className: i ?? gM.OA,
        children: [
            (0, p.jsx)(c7.Ay, { className: gM.$f, guild: t, size: c7.Ay.Sizes.MEDIUM }),
            (0, p.jsxs)("div", {
                className: gM.gI,
                children: [
                    (0, p.jsx)(M.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, p.jsxs)("div", {
                        className: gM.ew,
                        children: [
                            (0, p.jsxs)("div", {
                                className: gM.QW,
                                children: [
                                    (0, p.jsx)(cE._, {
                                        className: gM.Wz,
                                        color: w.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                                    }),
                                    (0, p.jsx)(M.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: g.intl.format(g.t["pob/cL"], { subscriptions: n }),
                                    }),
                                ],
                            }),
                            t.premiumTier !== Q.TVA.NONE &&
                                (0, p.jsxs)(p.Fragment, {
                                    children: [
                                        (0, p.jsx)("div", { className: gM.zk }),
                                        (0, p.jsx)(M.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, c$.gb)(t.premiumTier, { useLevels: !1 }),
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
function gw(e) {
    let { guildId: t } = e,
        i = (0, O.bG)([H.A], () => H.A.getGuild(t), [t]);
    return null == i
        ? null
        : (0, p.jsxs)("div", {
              className: gM.Nr,
              children: [
                  (0, p.jsx)(gk, { guild: i }),
                  (0, p.jsx)(eh.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: cE._,
                      text: g.intl.string(g.t.aBHecF),
                      onClick: () => {
                          (0, gS.g)({
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
var gB = i(538888);
let gF =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function gz(e) {
    let { slot: t, guildTier: i, premiumSubscription: n, hasCancelableSlots: l, isLast: s } = e,
        r = N.useRef(null),
        a = (0, c$.I5)(t),
        o = N.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, c_.A)(),
        c = N.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === Q.TVA.NONE) return "";
                    let i = [
                        g.intl.formatToPlainString(g.t["dLlKX/"], { numEmojiSlots: l_.TG[e].limits.emoji }),
                        g.intl.formatToPlainString(g.t["+ANIfv"], { numStickerSlots: l_.TG[e].limits.stickers }),
                        g.intl.formatToPlainString(g.t["4gt60b"], {
                            numSoundboardSlots: l_.TG[e].limits.soundboardSounds,
                        }),
                        g.intl.formatToPlainString(g.t.XahSjZ, {
                            resolution: l_.TG[e].limits.screenShareQualityResolution,
                            framerate: l_.TG[e].limits.screenShareQualityFramerate,
                        }),
                        g.intl.formatToPlainString(g.t.NbNs7S, { bitrate: l_.TG[e].limits.bitrate / 1e3 }),
                        g.intl.formatToPlainString(g.t.VVKcpn, { filesize: l_.TG[e].limits.fileSize / 1024 / 1024 }),
                        g.intl.formatToPlainString(g.t.TbpCvv, { numVideoStageSeats: l_.TG[e].limits.stageVideoUsers }),
                        g.intl.string(g.t.LDyX3i),
                        g.intl.string(g.t.YtGlPW),
                    ];
                    e >= Q.TVA.TIER_2 && (i.push(g.intl.string(g.t.SztbtN)), i.push(g.intl.string(g.t["3GK91n"]))),
                        e >= Q.TVA.TIER_3 && i.push(g.intl.string(g.t["XUUJd+"]));
                    let n = 0;
                    for (let e = 0; e < t.length; e++) n = (31 * n + t.charCodeAt(e)) | 0;
                    let l = i[Math.abs(n) % i.length];
                    return g.intl.formatToPlainString(g.t["/dOAmQ"], { perk: l });
                })(i, t.id),
            [i, t.id],
        ),
        m = N.useMemo(() => {
            if ("" !== c) return c;
            let e = null != t.premiumGuildSubscription ? uz.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return g.intl.formatToPlainString(g.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        A = N.useMemo(
            () => (a ? (n.isPausedForFractionalPremium ? d.endsAt.toDate() : n.currentPeriodEnd) : null),
            [a, n, d],
        );
    return (0, p.jsxs)("div", {
        className: ew()(gB.iq, { [gB.Mt]: s }),
        children: [
            (0, p.jsxs)("div", {
                className: gB.kd,
                children: [
                    (0, p.jsx)("img", { alt: "", className: gB.bB, src: gF }),
                    a && null != A
                        ? (0, p.jsx)(M.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: g.intl.format(g.t.Z4ULRD, { date: A }),
                          })
                        : (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(M.E, { variant: "text-sm/medium", color: "text-subtle", children: m }),
                                  u &&
                                      null != o &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)("div", { className: gB.zk }),
                                              (0, p.jsx)(M.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-info",
                                                  children: g.intl.formatToPlainString(g.t.YJlswH, {
                                                      date: o.toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  !u &&
                                      null != n.trialEndsAt &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)("div", { className: gB.zk }),
                                              (0, p.jsx)(M.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-warning",
                                                  children: g.intl.formatToPlainString(g.t.OdPSpk, {
                                                      date: new Date(n.trialEndsAt).toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                              ],
                          }),
                ],
            }),
            (0, p.jsx)(G.Y, {
                targetElementRef: r,
                renderPopout: (e) => {
                    let { closePopout: i } = e;
                    return (0, p.jsx)(c0, {
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
                    (0, p.jsx)(V.D, {
                        innerRef: r,
                        "aria-label": g.intl.string(g.t.PdRCRg),
                        className: gB.Mj,
                        ...e,
                        children: (0, p.jsx)(gV.j, { size: "xs", color: w.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                    }),
            }),
        ],
    });
}
function gX(e) {
    let { guildId: t, slots: i, premiumSubscription: n, hasCancelableSlots: l } = e,
        s = (0, O.bG)([H.A], () => H.A.getGuild(t), [t]);
    return (0, p.jsxs)("div", {
        className: gB.Nr,
        children: [
            (0, p.jsx)("div", {
                className: gB.MY,
                children:
                    null != s
                        ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(gk, { guild: s, className: gB.OA }),
                                  (0, p.jsx)(eh.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: g.intl.string(g.t.KLOhbO),
                                      onClick: () => {
                                          (0, lT.default)(),
                                              (0, c9.K4)({
                                                  guildId: s.id,
                                                  location: {
                                                      section: Q.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA,
                                                  },
                                              });
                                      },
                                  }),
                              ],
                          })
                        : (0, p.jsx)("div", {
                              className: gB.OA,
                              children: (0, p.jsx)(eA.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: g.intl.string(g.t["6Kwwuo"]),
                              }),
                          }),
            }),
            i.map((e, t) =>
                (0, p.jsx)(
                    gz,
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
function gY(e) {
    let { guildBoostSlots: t, premiumSubscription: i, pausedAppliedGuildBoosts: n, isPaused: l } = e,
        { boostsByGuildId: s, numActiveSlots: r } = N.useMemo(() => {
            if (l && null != i)
                return {
                    boostsByGuildId: (function (e, t) {
                        let i = {};
                        for (let t of e) t.guildId in i || (i[t.guildId] = []), i[t.guildId].push(t);
                        let n = {};
                        for (let e of Object.keys(i)) {
                            let l = i[e];
                            n[e] = l.map((i) =>
                                c1.A.createFromServer(
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
                if ((!(0, c$.I5)(n) && e++, null != n.premiumGuildSubscription)) {
                    let e = n.premiumGuildSubscription.guildId;
                    e in s || (s[e] = []), s[e].push(n);
                }
            }
            return { boostsByGuildId: s, numActiveSlots: e };
        }, [t, l, n, i]);
    if (null == i || 0 === Object.keys(s).length) return null;
    let a = r > oG.Ay.getNumIncludedPremiumGuildSubscriptionSlots(i.planId);
    return (0, p.jsx)("div", {
        className: gB.kR,
        children: uz.default
            .keys(s)
            .map((e) => (0, p.jsx)(gX, { guildId: e, slots: s[e], premiumSubscription: i, hasCancelableSlots: a }, e)),
    });
}
var gH = i(100345);
function gK(e) {
    let { guildBoostSlots: t, fractionalPremiumState: n } = e,
        l = (0, O.bG)([dl.A], () => dl.A.getPremiumTypeSubscription()),
        { unappliedSlots: s, numActiveSlots: r } = N.useMemo(() => {
            let e = [],
                i = 0;
            for (let n of t) !(0, c$.I5)(n) && i++, null == n.premiumGuildSubscription && e.push(n);
            return { unappliedSlots: e, numActiveSlots: i };
        }, [t]),
        a = r > (null != l ? oG.Ay.getNumIncludedPremiumGuildSubscriptionSlots(l.planId) : 0),
        o = l?.isPausedOrPausePending === !0 && n === l_.xc.NONE;
    return 0 === s.length
        ? null
        : (0, p.jsxs)("div", {
              className: gH.Nr,
              children: [
                  (0, p.jsxs)("div", {
                      className: gH.MY,
                      children: [
                          (0, p.jsxs)("div", {
                              className: gH._L,
                              children: [
                                  (0, p.jsxs)("div", {
                                      className: gH.MD,
                                      children: [
                                          (0, p.jsx)("img", { alt: "", className: gH.F8, src: gF }),
                                          (0, p.jsx)("div", {
                                              className: ew()(gH.qS, "theme-dark"),
                                              children: (0, p.jsx)("span", { className: gH.Vv, children: s.length }),
                                          }),
                                      ],
                                  }),
                                  (0, p.jsxs)("div", {
                                      className: gH.Qp,
                                      children: [
                                          (0, p.jsx)(M.E, {
                                              variant: "heading-md/semibold",
                                              color: "text-default",
                                              tag: "span",
                                              children: g.intl.format(g.t.BPadnO, {
                                                  numUnappliedGuildBoostSlots: s.length,
                                              }),
                                          }),
                                          (0, p.jsx)(M.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-subtle",
                                              children: g.intl.format(g.t.Kaw82o, {
                                                  numUnappliedGuildBoostSlots: s.length,
                                              }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, p.jsx)(gE.A, {
                              shouldShow: o,
                              text: g.intl.string(g.t.mOWsF1),
                              "aria-label": g.intl.string(g.t.mOWsF1),
                              children: (e) =>
                                  (0, p.jsx)(eh.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: cE._,
                                      text: g.intl.string(g.t.BMx1iy),
                                      disabled: o,
                                      onClick: () => {
                                          (0, f.openModalLazy)(async () => {
                                              let { default: e } = await Promise.resolve().then(i.bind(i, 770101));
                                              return (t) =>
                                                  (0, p.jsx)(e, {
                                                      ...t,
                                                      onSelectGuild: (e) => {
                                                          t.onClose(),
                                                              (0, gS.g)({
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
                  s.map((e, t) =>
                      (0, p.jsx)(
                          gW,
                          {
                              slot: e,
                              isLast: t === s.length - 1,
                              isCancelable: a && !(0, c$.I5)(e),
                              isCanceled: (0, c$.I5)(e),
                              premiumSubscription: l,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function gW(e) {
    let t,
        { slot: i, isLast: n, isCancelable: l, isCanceled: s, premiumSubscription: r, modificationsDisabled: a } = e,
        o = N.useRef(null),
        u = N.useMemo(() => (null != i.cooldownEndsAt ? new Date(i.cooldownEndsAt) : null), [i.cooldownEndsAt]);
    t =
        s && null != r
            ? (0, p.jsx)(M.E, {
                  variant: "text-sm/medium",
                  color: "text-subtle",
                  children: g.intl.format(g.t.Z4ULRD, { date: r.currentPeriodEnd }),
              })
            : i.isOnCooldown() && null != u
              ? (0, p.jsx)(c3, { cooldown: u.getTime() })
              : (0, p.jsx)(M.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: g.intl.string(g.t["2mcafz"]),
                });
    let d = l || s;
    return (0, p.jsxs)("div", {
        className: ew()(gH.iq, { [gH.Mt]: n }),
        children: [
            (0, p.jsxs)("div", {
                className: gH.kd,
                children: [(0, p.jsx)("img", { alt: "", className: gH.bB, src: gF }), t],
            }),
            d &&
                (0, p.jsx)(G.Y, {
                    targetElementRef: o,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, p.jsxs)(P.W, {
                            navId: "unapplied-boost-actions",
                            "aria-label": g.intl.string(g.t.ogxXGq),
                            onSelect: void 0,
                            onClose: t,
                            children: [
                                l &&
                                    (0, p.jsx)(U.Dr, {
                                        id: "cancel-boost",
                                        label: g.intl.string(g.t.twFU3R),
                                        color: "danger",
                                        disabled: a,
                                        subtext: a ? g.intl.string(g.t.mOWsF1) : void 0,
                                        action: () => {
                                            t(),
                                                (0, f.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, p.jsx)(gI.default, { ...e, guildBoostSlot: i }),
                                                );
                                        },
                                    }),
                                s &&
                                    (0, p.jsx)(U.Dr, {
                                        id: "uncancel-boost",
                                        label: g.intl.string(g.t["2glQNp"]),
                                        disabled: a,
                                        subtext: a ? g.intl.string(g.t.mOWsF1) : void 0,
                                        action: () => {
                                            t(),
                                                (0, f.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, p.jsx)(gv.default, { ...e, guildBoostSlotId: i.id }),
                                                );
                                        },
                                    }),
                            ],
                        });
                    },
                    align: "right",
                    position: "bottom",
                    children: (e) =>
                        (0, p.jsx)(V.D, {
                            innerRef: o,
                            "aria-label": g.intl.string(g.t["UKOtz+"]),
                            className: gH.Mj,
                            ...e,
                            children: (0, p.jsx)(gV.j, { size: "xs", color: w.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                        }),
                }),
        ],
    });
}
var gZ = i(800955);
function gQ(e) {
    let {
            guildBoostSlots: t,
            guildBoostSlotsByGuildId: i,
            premiumSubscription: n,
            pausedAppliedGuildBoosts: l,
            fractionalPremiumState: s,
        } = e,
        r = ta.A.getArticleURL(Q.MVz.GUILD_BOOSTING_FAQ),
        a = n?.isPaused === !0 && s !== l_.xc.FP_SUB_PAUSED,
        o = t.some((e) => null == e.premiumGuildSubscription),
        u = a && l.length > 0,
        d = a ? u : t.some((e) => null != e.premiumGuildSubscription);
    return o || d
        ? (0, p.jsxs)("div", {
              className: gZ.i,
              children: [
                  (0, p.jsxs)("div", {
                      className: gZ.b,
                      children: [
                          (0, p.jsx)(eA.D, { variant: "heading-md/semibold", children: g.intl.string(g.t.W5rDjW) }),
                          (0, p.jsx)(M.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: g.intl.format(g.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, p.jsx)(gY, {
                      guildBoostSlots: i,
                      premiumSubscription: n,
                      pausedAppliedGuildBoosts: l,
                      isPaused: a,
                  }),
                  (0, p.jsx)(gK, { guildBoostSlots: t, fractionalPremiumState: s }),
              ],
          })
        : null;
}
var gq = i(917064),
    gJ = i(598259);
function g$() {
    return (0, p.jsxs)("div", {
        className: gJ.iE,
        children: [
            (0, p.jsx)(eA.D, { variant: "heading-xl/normal", children: g.intl.string(g.t.IzKs3o) }),
            (0, p.jsx)("div", {
                className: gJ.kR,
                children: gq.s.map((e, t) => {
                    let i = e.icon;
                    return (0, p.jsxs)(
                        "div",
                        {
                            className: gJ.Nr,
                            children: [
                                (0, p.jsx)(i, { className: gJ.Kk }),
                                (0, p.jsx)(M.E, {
                                    className: gJ.h_,
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
var g0 = i(232122),
    g1 = i(420469);
function g2() {
    let [e, t] = N.useState(null),
        [i, n] = N.useState(null);
    return (0, p.jsxs)("div", {
        className: g1.iE,
        children: [
            (0, p.jsx)(eA.D, { variant: "heading-xl/normal", children: g.intl.string(g.t.HPJ6Nj) }),
            (0, p.jsx)("ul", {
                className: g1.p_,
                children: g0.m.map((l, s) => {
                    let r = e === s,
                        a = i === s,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, p.jsxs)(
                        V.D,
                        {
                            tag: "li",
                            className: ew()(g1.Aw, { [g1.$K]: r }),
                            onClick: () => t((e) => (e === s ? null : s)),
                            onMouseEnter: () => n(s),
                            onMouseLeave: () => n(null),
                            children: [
                                (0, p.jsxs)("div", {
                                    className: g1.k7,
                                    children: [
                                        (0, p.jsx)(M.E, {
                                            className: g1.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: l.getQuestion(),
                                        }),
                                        (0, p.jsx)(k.a, {
                                            size: "sm",
                                            color: w.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: g1.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, p.jsx)(M.E, {
                                        className: g1.ZF,
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
var g3 = i(182859),
    g4 = i(853513),
    g5 = i(849744);
function g8() {
    let e = ta.A.getArticleURL(Q.MVz.GUILD_SUBSCRIPTIONS);
    return (0, p.jsxs)("div", {
        className: g5.wx,
        children: [
            (0, p.jsxs)("div", {
                className: g5.Qs,
                children: [
                    (0, p.jsxs)("div", {
                        className: g5.B5,
                        children: [
                            (0, p.jsx)("img", { alt: "", className: g5.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, p.jsx)(eA.D, {
                                variant: "heading-xl/normal",
                                children: g.intl.string(g4.default.hjvcLO),
                            }),
                        ],
                    }),
                    (0, p.jsx)(M.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: g.intl.format(g.t.TUHyoA, { helpdeskArticle: e }),
                    }),
                ],
            }),
            (0, p.jsx)(g3.A, {
                variant: "member",
                className: g5.iO,
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
var g6 = i(315629),
    g7 = i(397384);
function g9() {
    let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
    if (null == e || oG.Ay.hasFreeBoosts(e)) return null;
    let t = ta.A.getArticleURL(Q.MVz.GUILD_BOOSTING_FAQ);
    return (0, p.jsxs)(g6.h, {
        color: "nitro-pink",
        className: g7.vK,
        children: [
            (0, p.jsxs)("div", {
                className: g7.nw,
                children: [
                    (0, p.jsx)("img", { alt: "", className: g7.q3, src: gF }),
                    (0, p.jsxs)("div", {
                        className: g7.Tm,
                        children: [
                            (0, p.jsx)(M.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: g.intl.format(g.t.Idh1Vs, { count: l_.M4, boostCount: l_.M4 }),
                            }),
                            (0, p.jsxs)("div", {
                                className: g7.xv,
                                children: [
                                    (0, p.jsx)(oC.t, { className: g7.nE }),
                                    (0, p.jsx)(M.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: g.intl.format(g.t["6UAu+f"], {
                                            count: l_.M4,
                                            boostCount: l_.M4,
                                            helpdeskArticle: t,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)(eh.$, {
                variant: "expressive",
                size: "sm",
                icon: oC.t,
                text: g.intl.string(g.t["8x0jKT"]),
                onClick: gj.e,
            }),
        ],
    });
}
var me = i(942300);
function mt() {
    let e = (0, O.bG)([cK.A], () => cK.A.affinities),
        t = (0, O.bG)([K.Ay], () => K.Ay.getFlattenedGuildIds()),
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
        : (0, p.jsxs)("div", {
              className: me.i,
              children: [
                  (0, p.jsx)(eA.D, { variant: "heading-md/semibold", children: g.intl.string(g.t.r90Wgo) }),
                  (0, p.jsx)("div", { className: me.k, children: i.map((e) => (0, p.jsx)(gw, { guildId: e }, e)) }),
              ],
          });
}
var mi = i(901851);
function mn(e) {
    let { count: t, disabledReason: n } = e,
        l = ta.A.getArticleURL(Q.MVz.GUILD_BOOSTING_FAQ);
    return (0, p.jsxs)(g6.h, {
        color: "nitro-pink",
        className: mi.vK,
        children: [
            (0, p.jsxs)("div", {
                className: mi.nw,
                children: [
                    (0, p.jsxs)("div", {
                        className: mi.MD,
                        children: [
                            (0, p.jsx)("img", { alt: "", className: mi.F8, src: gF }),
                            (0, p.jsx)("div", {
                                className: ew()(mi.qS, "theme-dark"),
                                children: (0, p.jsx)("span", { className: mi.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, p.jsxs)("div", {
                        className: mi.Tm,
                        children: [
                            (0, p.jsx)(M.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: g.intl.format(g.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, p.jsxs)("div", {
                                className: mi.xv,
                                children: [
                                    (0, p.jsx)(oC.t, { className: mi.nE }),
                                    (0, p.jsx)(M.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: g.intl.format(g.t["6UAu+f"], {
                                            count: l_.M4,
                                            boostCount: l_.M4,
                                            helpdeskArticle: l,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)(gE.A, {
                shouldShow: null != n,
                text: n ?? "",
                "aria-label": n,
                children: (e) =>
                    (0, p.jsx)(eh.$, {
                        ...e,
                        variant: "primary",
                        size: "sm",
                        icon: cE._,
                        text: g.intl.string(g.t.BMx1iy),
                        disabled: null != n,
                        onClick: () => {
                            (0, f.openModalLazy)(async () => {
                                let { default: e } = await Promise.resolve().then(i.bind(i, 770101));
                                return (t) =>
                                    (0, p.jsx)(e, {
                                        ...t,
                                        onSelectGuild: (e) => {
                                            t.onClose(),
                                                (0, gS.g)({
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
function ml(e) {
    let { premiumSubscription: t } = e,
        i = (0, O.bG)([cW.A], () => cW.A.boostSlots),
        n = N.useMemo(() => Object.values(i), [i]),
        l = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
        s = (0, O.bG)([cK.A], () => cK.A.affinities),
        r = (0, O.bG)([K.Ay], () => K.Ay.getFlattenedGuildIds()),
        a = s.length > 0 || r.length > 0,
        o = N.useMemo(() => n.filter((e) => null != e.premiumGuildSubscription), [n]).length,
        u = (0, O.bG)([cN.A], () => cN.A.getCurrentUserAppliedBoosts()),
        { fractionalState: d } = (0, c_.A)({ forceFetch: !0 }),
        c = l?.isPremiumGroupMember(),
        m = t?.isPausedOrPausePending === !0 && d === l_.xc.NONE,
        A = N.useMemo(() => n.some((e) => null == e.premiumGuildSubscription && e.isAvailable()), [n]),
        h = m ? g.intl.string(g.t.mOWsF1) : A ? void 0 : g.intl.string(g.t.xr4m5B),
        E = N.useMemo(() => {
            if (null == t) return 0;
            let e = oG.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== n.length ? 0 : Math.max(0, e - o);
        }, [t, n.length, o]);
    return (0, p.jsxs)("div", {
        className: gG.GO,
        children: [
            (0, p.jsx)(dx.kb, { className: gG.ek }),
            (0, p.jsx)(g8, {}),
            (0, p.jsx)(g9, {}),
            E > 0 && (0, p.jsx)(mn, { count: E, disabledReason: h }),
            c && (0, p.jsx)(cH.A, {}),
            !a && (0, p.jsx)(gh, {}),
            (0, p.jsxs)("div", {
                className: gG.C_,
                children: [
                    (0, p.jsx)(gQ, {
                        guildBoostSlots: n,
                        guildBoostSlotsByGuildId: i,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: u,
                        fractionalPremiumState: d,
                    }),
                    (0, p.jsx)(mt, {}),
                    (0, p.jsx)(gU.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, p.jsx)(g$, {}),
                    (0, p.jsx)(g2, {}),
                ],
            }),
        ],
    });
}
var ms = i(752606);
let mr = (0, o.E2)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            let e = cp.useConfig({ location: "UserSettingsPremiumGuildSubscriptions" }).enabled;
            N.useEffect(() => {
                n4.h.wait(() => {
                    uM.hP(), uM.$o(), (0, cT.CD)(), (0, cS.zS)(null, null, Q.tF5.DISCOVERY), (0, cT.tO)(!0);
                });
            }, []);
            let { hasFetchedSubscriptions: t, premiumSubscription: i } = (0, O.cf)([dl.A], () => ({
                    hasFetchedSubscriptions: dl.A.hasFetchedSubscriptions(),
                    premiumSubscription: dl.A.getPremiumTypeSubscription(),
                })),
                n = (0, cx.Y)(),
                l = (0, O.bG)([dn.A], () => dn.A.hasFetchedPaymentSources),
                s = (0, O.bG)([cN.A], () => cN.A.isFetchingCurrentUserAppliedBoosts),
                r = !t || !n || !l || s,
                [a, o] = N.useState(!1);
            return (r || a || o(!0), r && !a)
                ? (0, p.jsx)("div", { className: ew()(ms.kL, ms.Lq), children: (0, p.jsx)(uP.y, {}) })
                : (0, p.jsxs)("div", {
                      className: ms.kL,
                      children: [
                          (0, p.jsx)("div", { className: ms.Tp }),
                          (0, p.jsx)("div", {
                              className: ms.Qs,
                              children: e
                                  ? (0, p.jsx)(ml, { premiumSubscription: i })
                                  : (0, p.jsx)(gP, { premiumSubscription: i }),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [g.intl.string(g.t["+CbP2v"]), g.intl.string(g.t.Nn1lJy)],
    }),
    ma = (0, o.zZ)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [mr] }),
    mo = (0, o.t_)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => g.intl.string(g.t["+CbP2v"]),
        buildLayout: () => [ma],
    }),
    mu = (0, o.i4)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["+CbP2v"]),
        icon: cE._,
        buildLayout: () => [mo],
    });
var md = i(153659),
    mc = i(155984),
    mg = i(262077),
    mm = i(696986),
    mA = i(819411);
function mh(e) {
    let { onClickManageSubscription: t, count: i } = e;
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsx)(eA.D, { variant: "heading-md/bold", children: g.intl.string(g.t["KzCF/6"]) }),
            (0, p.jsx)(mm.h, { size: 4 }),
            (0, p.jsx)(M.E, { variant: "text-md/normal", className: mA.yV, children: g.intl.string(g.t["3D7qCu"]) }),
            (0, p.jsx)(mm.h, { size: 24 }),
            (0, p.jsxs)("div", {
                className: mA.Nr,
                children: [
                    (0, p.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: mA.RI }),
                    (0, p.jsxs)("div", {
                        className: mA.FS,
                        children: [
                            (0, p.jsx)(eA.D, {
                                variant: "heading-xl/semibold",
                                className: mA.wx,
                                children: g.intl.string(g.t["KzCF/6"]),
                            }),
                            (0, p.jsx)(M.E, {
                                variant: "text-md/normal",
                                className: mA.h_,
                                children: g.intl.format(g.t["m+pcOO"], { numSubscriptions: i }),
                            }),
                        ],
                    }),
                    (0, p.jsx)(eh.$, {
                        size: "sm",
                        variant: "overlay-primary",
                        text: g.intl.string(g.t["3a8Xxj"]),
                        onClick: t,
                    }),
                ],
            }),
        ],
    });
}
var mE = i(872351),
    mT = i(9113),
    mS = i(599941),
    mx = i(384684),
    mp = i(2242);
let mN = [];
var m_ = i(912851),
    mf = i(369176);
let mb = (e) => {
    let { label: t, onClick: i, submitting: n } = e;
    return (0, p.jsx)(V.D, {
        onClick: n ? void 0 : i,
        className: mf.x6,
        children: (0, p.jsxs)("div", {
            className: mf.hQ,
            children: [
                n
                    ? (0, p.jsx)(uP.y, { type: uP.y.Type.PULSING_ELLIPSIS, className: mf.__invalid_spinner })
                    : (0, p.jsx)(M.E, { variant: "text-md/medium", className: mf.Pf, children: t }),
                (0, p.jsx)(k.a, { size: "md", color: "currentColor", className: mf.UE }),
            ],
        }),
    });
};
var mC = i(465932),
    mI = i(543767),
    mv = i(420139),
    mj = i(790284),
    my = i(636194),
    mO = i(624456),
    mR = i(710144),
    mL = i(815332),
    mD = i(817649),
    mG = i(969389);
let mP = (e) => {
    let { transitionState: t, groupListing: i, listing: n, subscription: l, onClose: s } = e,
        r = (0, lp.GV)(),
        { analyticsLocations: a } = (0, nU.Ay)(eV.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: o,
            error: u,
            submitting: d,
        } = ((e) => {
            let [t, i] = N.useState(!1),
                [n, l] = N.useState(null);
            return {
                cancelSubscription: async (t) => {
                    try {
                        return i(!0), await uM.M2(t, e), !0;
                    } catch (e) {
                        l(e);
                    } finally {
                        i(!1);
                    }
                },
                error: n,
                submitting: t,
            };
        })(a),
        c = async () => {
            (await o(l.id)) && s();
        },
        m = n.role_benefits.benefits.filter((e) => e.ref_type === mp.bN.CHANNEL),
        A = n.role_benefits.benefits.filter((e) => e.ref_type === mp.bN.INTANGIBLE),
        h = rb()(l.currentPeriodEnd).format("MMMM Do, YYYY"),
        E = g.intl.formatToPlainString(g.t.KsMRP5, {
            numChannels: m.length,
            numAdditionalBenefits: A.length,
            subscriptionEndDate: h,
        });
    return (0, p.jsx)(sG.Modal, {
        transitionState: t,
        "aria-labelledby": r,
        actions: [
            { text: g.intl.string(g.t.EP6EPb), variant: "secondary", onClick: s },
            { variant: "critical-primary", text: g.intl.string(g.t.F6lUDF), onClick: c, loading: d },
        ],
        title: g.intl.string(g.t.O6l5tM),
        subtitle: E,
        onClose: s,
        children: (0, p.jsxs)(R.B, {
            gap: 8,
            children: [
                null != u ? (0, p.jsx)(y.w, { type: "critical", children: u.message }) : null,
                (0, p.jsx)(mD.x, { listingId: n.id, guildId: i.guild_id, className: mG.P }),
            ],
        }),
    });
};
var mU = i(319225),
    mV = i(746080),
    mM = i(47685);
let mk = (e) => {
        let { label: t, value: i, showInfoIcon: n, infoIconTooltipText: l } = e;
        return (0, p.jsxs)("div", {
            className: mM.L0,
            children: [
                (0, p.jsxs)("div", {
                    className: mM.a5,
                    children: [
                        (0, p.jsx)(eA.D, { variant: "heading-deprecated-12/semibold", className: mM.HU, children: t }),
                        n &&
                            (0, p.jsx)(e0.m, {
                                text: l,
                                children: (0, p.jsx)(sN.m, { size: "xs", color: "currentColor", className: mM.Mo }),
                            }),
                    ],
                }),
                (0, p.jsx)(eA.D, { variant: "heading-xl/semibold", className: mM.sx, children: i }),
            ],
        });
    },
    mw = (e) => {
        let { subscription: t } = e,
            { analyticsLocations: i } = (0, nU.Ay)(),
            [n] = (0, mI.Kq)({
                subscriptionId: t.id,
                renewal: !0,
                analyticsLocations: i,
                analyticsLocation: eV.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
            }),
            l = (0, O.bG)([dn.A], () => dn.A.hasFetchedPaymentSources);
        return null != n && l
            ? (0, p.jsx)(mv.A, { subscription: t, currentInvoicePreview: n, dropdownClassName: mM.Nw })
            : (0, p.jsx)(uP.y, {});
    },
    mB = (e) => {
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
            : (0, p.jsx)(lO.D, {
                  label: g.intl.string(g.t["4neDM+"]),
                  children: (0, p.jsx)("div", {
                      className: mM.__invalid_rowButtons,
                      children: i
                          ? (0, p.jsx)(eh.$, {
                                variant: "primary",
                                text: g.intl.string(g.t.y3mAE4),
                                onClick: r,
                                loading: n,
                            })
                          : (0, p.jsxs)(p.Fragment, {
                                children: [
                                    !t && !l && (0, p.jsx)(mb, { label: g.intl.string(g.t.FRbWR8), onClick: a }),
                                    (0, p.jsx)(mb, { label: g.intl.string(g.t.Dx0lF7), onClick: s }),
                                ],
                            }),
                  }),
              });
    },
    mF = (e) => {
        let { subscription: t } = e,
            {
                listing: i,
                groupListing: n,
                guild: l,
                expanded: s,
                handleToggleExpanded: r,
                subscriptionInfo: a,
            } = (function (e) {
                let t = (0, mO.M)(e),
                    i = (0, O.bG)([my.A], () => my.A.getSubscriptionListingForPlan(t)),
                    n = (0, O.bG)([my.A], () =>
                        null != i ? my.A.getSubscriptionGroupListingForSubscriptionListing(i.id) : null,
                    ),
                    l = (0, O.bG)([H.A], () => H.A.getGuild(n?.guild_id)),
                    [s, r] = N.useState(!1),
                    { fetchSubscriptionsSettings: a } = (0, mS.XE)();
                N.useEffect(() => {
                    s && null != l && null == my.A.getSubscriptionSettings(l.id) && a(l.id);
                }, [s, l, a]);
                let o =
                    null == i
                        ? void 0
                        : (function (e) {
                              let { subscription: t } = e,
                                  i = rb()(t.currentPeriodEnd).format("M/D/YY"),
                                  n = null != t.price ? (0, uB.$g)(t.price, t.currency) : "",
                                  l = rb()(t.createdAt).format("M/D/YY"),
                                  s = t.status === Q.Dmq.CANCELED,
                                  r = t.status === Q.Dmq.PAST_DUE,
                                  a = t.hasActiveTrial;
                              return {
                                  memberSince: l,
                                  nextRenewalDate: i,
                                  nextRenewalLabel: s ? g.intl.string(g.t.UAfot2) : g.intl.string(g.t.CVjLcM),
                                  subscriptionPrice: n,
                                  isCancelled: s,
                                  isPastDue: r,
                                  isTrial: a,
                              };
                          })({ subscription: e });
                return {
                    guild: l,
                    expanded: s,
                    handleToggleExpanded: () => r((e) => !e),
                    listing: i,
                    groupListing: n,
                    subscriptionInfo: o,
                };
            })(t),
            [o, d] = N.useState(!1),
            c = (0, lp.GV)(),
            { analyticsLocations: m } = (0, nU.Ay)(),
            { shouldHideGuildPurchaseEntryPoints: A } = (0, mC.MH)(l?.id),
            h = t?.isPurchasedViaAppleGeneric;
        if (null == n || null == i || null == a) return null;
        let E = async () => {
                try {
                    d(!0),
                        await uM.QP(t, m),
                        (0, mU.E)({ title: g.intl.string(g.t.oPV2cy), body: g.intl.string(g.t.DdRizV) });
                } finally {
                    d(!1);
                }
            },
            {
                isCancelled: T,
                isPastDue: S,
                subscriptionPrice: x,
                memberSince: _,
                nextRenewalDate: b,
                nextRenewalLabel: C,
                isTrial: I,
            } = a,
            v = i.soft_deleted || null == l || h;
        return (0, p.jsxs)("div", {
            className: mM.kL,
            children: [
                (0, p.jsx)(mR.A, {
                    onClick: r,
                    className: mM.N1,
                    children: (e) => {
                        let { areaRef: t, handleStopPropagation: n } = e;
                        return (0, p.jsxs)(p.Fragment, {
                            children: [
                                null != l && (0, p.jsx)(c7.Ay, { guild: l, active: !0, size: c7.Ay.Sizes.MEDIUM }),
                                (0, p.jsxs)("div", {
                                    className: mM.if,
                                    children: [
                                        (0, p.jsx)(M.E, {
                                            variant: "text-md/medium",
                                            className: mM.J5,
                                            children: null != l ? l.name : g.intl.string(g.t["He+cmd"]),
                                        }),
                                        (0, p.jsxs)("div", {
                                            className: mM.xp,
                                            children: [
                                                (0, p.jsx)(M.E, {
                                                    variant: "text-sm/normal",
                                                    className: mM.KR,
                                                    children: i.name,
                                                }),
                                                T
                                                    ? (0, p.jsx)(n7.Lp, { text: g.intl.string(g.t["7uFZGt"]) })
                                                    : I
                                                      ? (0, p.jsx)(n7.Lp, {
                                                            text: g.intl.string(g.t["6anton"]),
                                                            color: w.A.unsafe_rawColors.BRAND_500.css,
                                                        })
                                                      : S
                                                        ? (0, p.jsx)(e0.m, {
                                                              text: g.intl.string(g.t.eSuJE2),
                                                              children: (0, p.jsx)("div", {
                                                                  children: (0, p.jsx)(n7.Lp, {
                                                                      className: mM.qc,
                                                                      text: g.intl.string(g.t.NrRwIl),
                                                                      color: w.A.unsafe_rawColors.YELLOW_300.css,
                                                                  }),
                                                              }),
                                                          })
                                                        : null,
                                                h
                                                    ? (0, p.jsx)(e0.m, {
                                                          text: g.intl.string(g.t.nv1IqK),
                                                          children: (0, p.jsx)("div", {
                                                              children: (0, p.jsx)(n7.Lp, {
                                                                  text: g.intl.string(g.t["sBl3X/"]),
                                                                  color: w.A.colors.BACKGROUND_MOD_MUTED.css,
                                                              }),
                                                          }),
                                                      })
                                                    : null,
                                            ],
                                        }),
                                    ],
                                }),
                                (0, p.jsx)(V.D, {
                                    onClick: n(r),
                                    "aria-label": g.intl.string(g.t.e5eQOy),
                                    "aria-controls": c,
                                    "aria-expanded": s,
                                    focusProps: { ringTarget: t },
                                    children: (0, p.jsx)(k.a, {
                                        size: "md",
                                        color: "currentColor",
                                        className: ew()(mM.D6, { [mM.S7]: s }),
                                    }),
                                }),
                            ],
                        });
                    },
                }),
                s
                    ? (0, p.jsxs)("div", {
                          id: c,
                          children: [
                              (0, p.jsx)("div", { className: mM.yF }),
                              (0, p.jsx)(mL.A, { groupListingId: n.id, subscription: t, className: mM.kE }),
                              (0, p.jsxs)("div", {
                                  className: mM.Zx,
                                  children: [
                                      (0, p.jsx)(mk, { label: C, value: b }),
                                      (0, p.jsx)(mk, {
                                          label: g.intl.string(g.t.dltUMH),
                                          value: x,
                                          showInfoIcon: I,
                                          infoIconTooltipText: I ? g.intl.string(g.t["/q6fpa"]) : void 0,
                                      }),
                                      (0, p.jsx)(mk, { label: g.intl.string(g.t.AOcwWB), value: _ }),
                                  ],
                              }),
                              (0, p.jsx)(mm.h, { size: 16 }),
                              !T &&
                                  !h &&
                                  (0, p.jsx)(lO.D, {
                                      label: g.intl.string(g.t.wmMFvA),
                                      children: (0, p.jsx)(mw, { subscription: t }),
                                  }),
                              !v &&
                                  (0, p.jsx)(mB, {
                                      isTrial: I,
                                      isCancelled: T,
                                      isResubscribing: o,
                                      shouldHideRoleSubscriptionEntryPoints: A,
                                      onCancelSubscriptionClick: () => {
                                          if (null != l) {
                                              var e;
                                              (e = { groupListing: n, listing: i, subscription: t }),
                                                  (0, f.openModal)((t) => (0, p.jsx)(mP, { ...t, ...e }));
                                          }
                                      },
                                      onChangePlanClick: () => {
                                          null != l &&
                                              ((0, lR.pX)(Q.BVt.CHANNEL(l.id, mV.VV.ROLE_SUBSCRIPTIONS)),
                                              (0, lT.default)(),
                                              m_.A.show(
                                                  Q.kqX.BACK_TO_PREVIOUS_SCREEN,
                                                  void 0,
                                                  g.intl.string(g.t.DvbaM4),
                                                  () => {
                                                      mj.A.setState({ subsection: nv.nR }),
                                                          (0, ej.openUserSettings)(u.X.SUBSCRIPTIONS_PANEL);
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
var mz = i(170272);
let mX = (e) => {
    let { onGoBack: t } = e,
        i = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, O.bG)([mx.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [mx.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                i = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (i = !0);
                            }),
                            i)
                                ? mp.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? mp.M_.NONE
                                  : mp.M_.IN_SUBSCRIPTION_SERVER;
                        })([mx.A]),
                    ) === mp.M_.SUBSCRIBED,
                i = (0, O.bG)([dl.A], () => dl.A.getActiveGuildSubscriptions()),
                n = N.useRef(!1);
            return (
                N.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: i, hasRoleSubscriptions: n } = e,
                            l = dl.A.getActiveGuildSubscriptions();
                        return (
                            ((l?.length ?? 0) === 0 && !!n) || (!!t && !i) || (!i && !dl.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: n.current }) &&
                        ((n.current = !0), uM.hP());
                }, [e, t]),
                i ?? mN
            );
        })(),
        { loading: n } = (0, mS.eb)(i);
    return ((0, mT.A)(uX.Fr ? "role-subscriptions-user-setting" : void 0), n)
        ? (0, p.jsx)(uP.y, {})
        : 0 === i.length
          ? null
          : (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(eh.$, { text: g.intl.string(g.t.hqyhKQ), icon: mE.z, variant: "secondary", onClick: t }),
                    (0, p.jsx)(mm.h, { size: 10 }),
                    (0, p.jsx)(ia.n, {
                        label: g.intl.string(g.t["KzCF/6"]),
                        description: g.intl.string(g.t["Y+ucR7"]),
                        children: (0, p.jsx)("div", {
                            className: mz.A,
                            children: i.map((e) => (0, p.jsx)(mF, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var mY = i(327479),
    mH = i(334335);
function mK(e) {
    let { onClickManageSubscription: t, count: i } = e;
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsx)(eA.D, { variant: "heading-md/bold", children: g.intl.string(g.t["48ywCu"]) }),
            (0, p.jsx)(mm.h, { size: 4 }),
            (0, p.jsx)(M.E, { variant: "text-md/normal", className: mH.yV, children: g.intl.string(g.t.VWxmSo) }),
            (0, p.jsx)(mm.h, { size: 24 }),
            (0, p.jsxs)("div", {
                className: mH.Nr,
                children: [
                    (0, p.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: mH._e }),
                    (0, p.jsxs)("div", {
                        className: mH.FS,
                        children: [
                            (0, p.jsx)(eA.D, {
                                variant: "heading-xl/semibold",
                                className: mH.wx,
                                children: g.intl.string(g.t["48ywCu"]),
                            }),
                            (0, p.jsx)(M.E, {
                                variant: "text-md/normal",
                                className: mH.h_,
                                children: g.intl.format(g.t["/esXLj"], { numSubscriptions: i }),
                            }),
                        ],
                    }),
                    (0, p.jsx)(mY.A, { onClick: t, text: g.intl.string(g.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var mW = i(548411),
    mZ = i(417098),
    mQ = i(143582),
    mq = i(915043),
    mJ = i(920087);
function m$(e) {
    let { className: t, header: i, headerClassName: n, children: l } = e,
        s = N.useMemo(() => {
            let e = !1;
            return (
                N.Children.forEach(l, (t) => {
                    null != t && (e = !0);
                }),
                e
            );
        }, [l]);
    return (0, p.jsxs)("div", {
        className: ew()(mJ.iE, t),
        children: [
            (0, p.jsx)("div", { className: ew()(mJ.wx, n), children: i }),
            s && (0, p.jsx)("div", { className: mJ.Qs, children: l }),
        ],
    });
}
var m0 = i(885996),
    m1 = i(144165),
    m2 = i(664121),
    m3 = i(950305),
    m4 = i(943775),
    m5 = i(123791),
    m8 = i(900797),
    m6 = i(632510);
let m7 = N.createContext({ isOpen: !1, toggleOpen: () => {} });
function m9(e) {
    let { children: t } = e,
        [i, n] = N.useReducer((e) => !e, !1),
        l = N.useMemo(() => ({ isOpen: i, toggleOpen: n }), [i]);
    return (0, p.jsx)(m7.Provider, { value: l, children: t(i) });
}
m9.Toggle = function (e) {
    let { className: t, text: i } = e,
        { isOpen: n, toggleOpen: l } = N.useContext(m7),
        s = n ? m8.t : k.a,
        r = null != i ? i : n ? g.intl.string(g.t.fgq1gs) : g.intl.string(g.t.XJuakA);
    return (0, p.jsxs)(V.D, {
        className: ew()(m6.L, t),
        onClick: l,
        children: [
            (0, p.jsx)(M.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, p.jsx)(s, { size: "sm", color: "currentColor" }),
        ],
    });
};
var Ae = i(627363),
    At = i(243217),
    Ai = i(328968),
    An = i(163437),
    Al = i(3432);
function As(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var Ar = i(184451),
    Aa = (((l = {})[(l.LOADING = 0)] = "LOADING"), (l[(l.DONE = 1)] = "DONE"), (l[(l.ERROR = 2)] = "ERROR"), l);
function Ao(e) {
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
            renewalPlan: E,
        } = (0, O.cf)([d3.A, d4.A, Ai.A, H.A], () => {
            let e,
                i = d3.A.get(r),
                n = null != i ? d4.A.get(i.skuId) : void 0,
                a = n?.applicationId,
                o = null != i ? Ai.A.getForSKU(i.skuId) : null,
                u = null != o && (0, An.PJ)(o.skuFlags),
                d = u && null != l ? H.A.getGuild(l) : void 0,
                c = (0, An.Uo)(t, n),
                g = u && null != l && null == d;
            if (!1 === c && null != s && s.items.length > 0) {
                let t = s.items[0];
                e = d3.A.get(t.planId) ?? void 0;
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
        { data: T } = (0, Ae.YY)(a),
        S = N.useMemo(() => (null != T ? (0, m4.A)(T, 100) : null), [T]),
        x = m?.deleted ?? !1,
        _ = null != m && (0, An.Se)(m),
        f = t.status === Q.Dmq.PAST_DUE,
        { analyticsLocations: b } = (0, nU.Ay)(),
        [C] = (0, mI.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: b,
            analyticsLocation: eV.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        I = As(t.currentPeriodEnd),
        v = 0 === n;
    return (0, p.jsxs)(m$, {
        headerClassName: Ar.dL,
        header:
            !1 === v
                ? (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsxs)("div", {
                              className: Ar.VW,
                              children: [
                                  null != S &&
                                      (0, p.jsx)(m1._, { src: S.href, imageClassName: Ar.Z2, width: 40, height: 40 }),
                                  (0, p.jsxs)("div", {
                                      className: Ar.aF,
                                      children: [
                                          (0, p.jsx)(eA.D, {
                                              variant: "heading-md/semibold",
                                              lineClamp: 1,
                                              children: T?.name ?? g.intl.string(g.t["7kqy7W"]),
                                          }),
                                          (0, p.jsx)(M.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              lineClamp: 1,
                                              children: o?.name ?? g.intl.string(g.t.sqkbMK),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, p.jsx)("div", {
                              className: Ar.Pz,
                              children:
                                  null != T &&
                                  null != u &&
                                  null != m &&
                                  (0, p.jsx)(Am, {
                                      subscription: t,
                                      app: T,
                                      guild: c,
                                      sku: m,
                                      storeListing: u,
                                      isCancelled: A,
                                      isOrphanedGuildSubscription: h,
                                      navigateToSwitchPlan: i,
                                      renewalSkuId: E?.skuId,
                                  }),
                          }),
                      ],
                  })
                : (0, p.jsx)(uP.y, { type: uP.t.PULSING_ELLIPSIS }),
        children: [
            A &&
                (0, p.jsx)(Ag, {
                    type: "warning",
                    title: _
                        ? g.intl.formatToPlainString(g.t.QOnM1y, { subscriptionPeriodEnd: I })
                        : g.intl.formatToPlainString(g.t.HOaZu8, { subscriptionPeriodEnd: I }),
                }),
            !A && h && (0, p.jsx)(Ag, { type: "warning", title: g.intl.string(g.t.SmSP8Q) }),
            f && (0, p.jsx)(Ag, { type: "danger", title: g.intl.string(g.t.fvOqBo) }),
            (0, p.jsxs)("div", {
                className: Ar.zH,
                children: [
                    (0, p.jsx)(Ac, {
                        title: g.intl.string(g.t["5D/KEH"]),
                        content: d
                            ? (0, p.jsxs)(p.Fragment, {
                                  children: [
                                      (0, p.jsxs)("span", {
                                          className: Ar.yW,
                                          children: [(0, p.jsx)(m2.R, { size: "xs" }), g.intl.string(g.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, p.jsxs)("span", {
                                              className: Ar._t,
                                              children: [
                                                  (0, p.jsx)(M.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: g.intl.format(g.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, p.jsx)(c7.Ay, { guild: c, size: c7.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, p.jsxs)("span", {
                                  className: Ar.yW,
                                  children: [(0, p.jsx)(m3.n, { size: "xs" }), g.intl.string(g.t["6anEVv"])],
                              }),
                    }),
                    (0, p.jsx)(Au, { invoicePreview: C, subscriptionPlan: o }),
                    (0, p.jsx)(Ac, {
                        title: g.intl.string(g.t.dnUzb6),
                        content: As(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, p.jsx)(Ad, { isCancelled: A, subscriptionPeriodEnd: I, renewalPlan: E }),
                ],
            }),
            (0, p.jsx)(Ah, {
                subscription: t,
                currentInvoicePreview: C,
                loadingState: n,
                isDeleted: x,
                isCancelled: A,
            }),
            null != T &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, p.jsx)(AA, { appId: T.id, listingBenefits: u.benefits }),
        ],
    });
}
function Au(e) {
    let { subscriptionPlan: t, invoicePreview: i } = e;
    if (null == t) return (0, p.jsx)(Ac, { title: g.intl.string(g.t.KI7ERx), content: "" });
    let n = (0, uB.CE)((0, uB.$g)(t.price, t.currency), t.interval, t.intervalCount),
        l = i?.findInvoiceItemByPlanId(t.id);
    if (null == l) return (0, p.jsx)(Ac, { title: g.intl.string(g.t.KI7ERx), content: n });
    let s = (0, uB.CE)((0, uB.$g)(l.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, p.jsx)(Ac, {
        title: g.intl.string(g.t.KI7ERx),
        content: (0, p.jsxs)(p.Fragment, {
            children: [
                (0, p.jsx)(M.E, { variant: "text-sm/semibold", children: s }),
                s !== n &&
                    (0, p.jsx)(e0.m, {
                        text: g.intl.format(g.t["6DoE57"], { listPrice: n }),
                        position: "bottom",
                        children: (0, p.jsx)(M.E, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: (0, p.jsx)("s", { children: n }),
                        }),
                    }),
            ],
        }),
    });
}
function Ad(e) {
    let { isCancelled: t, subscriptionPeriodEnd: i, renewalPlan: n } = e;
    if (null != n) {
        let e = (0, uB.CE)((0, uB.$g)(n.price, n.currency), n.interval, n.intervalCount);
        return (0, p.jsx)(Ac, {
            title: g.intl.string(g.t.hIhAM3),
            content: (0, p.jsxs)(p.Fragment, {
                children: [
                    (0, p.jsx)(M.E, { variant: "text-sm/medium", children: i }),
                    (0, p.jsx)(M.E, {
                        variant: "text-sm/normal",
                        children: g.intl.format(g.t.MCLbvj, { planName: n.name, price: e }),
                    }),
                ],
            }),
        });
    }
    return (0, p.jsx)(Ac, { title: t ? g.intl.string(g.t.enxcAl) : g.intl.string(g.t["Ms+6Zq"]), content: i });
}
function Ac(e) {
    let { title: t, content: i } = e;
    return (0, p.jsxs)("div", {
        className: Ar.nM,
        children: [
            (0, p.jsx)(M.E, { variant: "text-sm/medium", children: t }),
            (0, p.jsx)(M.E, { variant: "text-sm/medium", className: Ar.u4, children: i }),
        ],
    });
}
function Ag(e) {
    let { type: t, title: i } = e;
    return (0, p.jsx)(tr.p, {
        messageType: "warning" === t ? tr.Y.WARNING : tr.Y.ERROR,
        className: Ar.Xm,
        children: (0, p.jsx)(M.E, { variant: "text-sm/normal", children: i }),
    });
}
function Am(e) {
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
        c = (0, An.Se)(l),
        { analyticsLocations: m } = (0, nU.Ay)(),
        [A, h] = N.useState(!1),
        E = (0, m5.C)(t.id),
        T = (0, O.bG)([d4.A], () => d4.A.getParentSKU(n.skuId), [n.skuId]),
        S = N.useMemo(() => {
            var e, t;
            let i;
            return null == T
                ? []
                : ((e = n.id),
                  (t = E.subscriptions),
                  (i = new Set(T.bundledSkuIds)),
                  t.filter((t) => t.id !== e && i.has(t.skuId)));
        }, [n.id, E, T]),
        x = 0 !== S.length,
        _ = async () => {
            try {
                h(!0);
                let { subscription: e } = await (0, uM.QP)(s, m);
                if (null == e) return;
                (0, f.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([i.e("47869"), i.e("52396")]).then(i.bind(i, 115623));
                    return (i) => (0, p.jsx)(t, { ...i, storeListing: n, subscription: At.A.createFromServer(e) });
                });
            } finally {
                h(!1);
            }
        };
    return (0, p.jsxs)("div", {
        className: Ar.fw,
        children: [
            c || (r && a)
                ? null
                : r
                  ? (0, p.jsx)(eh.$, {
                        variant: "secondary",
                        size: "sm",
                        text: g.intl.string(g.t.QtMnkW),
                        onClick: _,
                        loading: A,
                    })
                  : (0, p.jsx)(eh.$, {
                        variant: "secondary",
                        size: "sm",
                        text: g.intl.string(g.t["E8G/tr"]),
                        onClick: () => {
                            (0, f.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([i.e("1426"), i.e("22800")]).then(
                                    i.bind(i, 301139),
                                );
                                return (i) =>
                                    (0, p.jsx)(e, { ...i, application: t, storeListing: n, subscription: s, guild: o });
                            });
                        },
                    }),
            x &&
                null != T &&
                !1 === r &&
                !1 === a &&
                (0, p.jsx)(eh.$, {
                    variant: "primary",
                    size: "sm",
                    text: g.intl.string(g.t.R74ZBR),
                    onClick: () => {
                        d({
                            currentSubscription: s,
                            alternativeListings: S,
                            app: t,
                            subscriptionGroup: T,
                            currentListing: n,
                            renewalSkuId: u,
                        });
                    },
                }),
        ],
    });
}
function AA(e) {
    let { appId: t, listingBenefits: i } = e;
    return (0, p.jsx)(m9, {
        children: (e) =>
            (0, p.jsxs)("div", {
                className: Ar.PX,
                children: [
                    (0, p.jsxs)("div", {
                        className: Ar.wV,
                        children: [
                            e && (0, p.jsx)(M.E, { variant: "text-sm/semibold", children: g.intl.string(g.t.mORL67) }),
                            (0, p.jsx)(m9.Toggle, {
                                className: Ar.Bh,
                                text: e ? g.intl.string(g.t.gsbFAw) : g.intl.string(g.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? i.map((e) => {
                              let { id: i, name: n, description: l, icon: s } = e;
                              return (0, p.jsx)(m0.FY, { header: n, icon: (0, Al.N)(t, s), description: l }, i);
                          })
                        : null,
                ],
            }),
    });
}
function Ah(e) {
    let { subscription: t, currentInvoicePreview: i, loadingState: n, isDeleted: l, isCancelled: s } = e;
    return null == i
        ? null
        : 0 === n
          ? (0, p.jsx)("div", {
                className: Ar.Ji,
                children: (0, p.jsx)(lO.D, {
                    label: g.intl.string(g.t.azZaZa),
                    children: (0, p.jsx)(uP.y, { type: uP.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === n
            ? (0, p.jsx)("div", {
                  className: Ar.Ji,
                  children: (0, p.jsxs)(mZ.$T, {
                      color: mZ.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          g.intl.format(g.t.IIHUUF, { subscriptionId: t.id }),
                          (0, p.jsx)("br", {}),
                          g.intl.format(g.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, p.jsx)("div", {
                  className: Ar.Ji,
                  children: (0, p.jsx)(lO.D, {
                      label: g.intl.string(g.t.azZaZa),
                      children: (0, p.jsx)(mv.A, { subscription: t, currentInvoicePreview: i, disabled: l || s }),
                  }),
              });
}
var AE = (((s = {}).HOME = "HOME"), (s.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), s);
i(938796);
var AT = i(38405);
let AS = (0, O.UT)(d3.A, {
    getQueryId: Q.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = d3.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && AT.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, cS.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var Ax = i(240248),
    Ap = i(237218),
    AN = i(988325);
function A_(e) {
    let { children: t, lineClamp: i = 2, ...n } = e,
        [l, s] = N.useState(!1),
        [r, a] = N.useState(null),
        o =
            null != r &&
            (0, p.jsx)("button", {
                className: AN.x6,
                onClick: () => s((e) => !e),
                children: (0, p.jsxs)(M.E, {
                    className: AN.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        l ? g.intl.string(g.t["JQX/Pb"]) : g.intl.string(g.t.Fbrd8J),
                        l
                            ? (0, p.jsx)(m8.t, { color: w.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, p.jsx)(k.a, { color: w.A.colors.TEXT_BRAND, size: "xs" }),
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
    let m = "auto";
    return (
        null != r && (m = l ? `${r.expandedHeight}px` : `${r.truncatedHeight}px`),
        (0, p.jsxs)("div", {
            children: [
                (0, p.jsx)(M.E, {
                    ...n,
                    className: AN.Qs,
                    lineClamp: l ? void 0 : i,
                    ref: d,
                    style: { height: m },
                    children: t,
                }),
                o,
            ],
        })
    );
}
var Af = i(827991);
function Ab(e) {
    let { cta: t, storeListing: i, className: n } = e,
        { applicationId: l, benefits: s, description: r } = i,
        a = N.useMemo(() => (null == i.thumbnail ? null : (0, Ap.t)(l, i.thumbnail, 256)), [l, i.thumbnail]),
        { data: o } = AS(i.skuId),
        u = N.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, uB._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, p.jsxs)(m$, {
              className: ew()(Af.iE, n),
              header: (0, p.jsxs)(p.Fragment, {
                  children: [
                      (0, p.jsxs)("div", {
                          className: Af.qd,
                          children: [
                              null != a &&
                                  (0, p.jsx)(m1._, { src: a.href, imageClassName: Af.rW, width: 48, height: 48 }),
                              (0, p.jsxs)("div", {
                                  children: [
                                      (0, p.jsx)(eA.D, { variant: "heading-md/bold", children: i.summary }),
                                      (0, p.jsx)(M.E, { variant: "text-md/medium", children: u }),
                                  ],
                              }),
                          ],
                      }),
                      t,
                  ],
              }),
              children: [
                  !(0, Ax.uJ)(r) &&
                      (0, p.jsx)("div", {
                          className: Af.h_,
                          children: (0, p.jsx)(A_, { variant: "text-sm/medium", children: r }),
                      }),
                  null != s &&
                      s.length > 0 &&
                      (0, p.jsx)("div", {
                          className: Af.PX,
                          children: s.map((e) => {
                              let { id: t, name: i, description: n, icon: s } = e;
                              return (0, p.jsx)(m0.FY, { header: i, icon: (0, Al.N)(l, s), description: n }, t);
                          }),
                      }),
              ],
          });
}
var AC = i(185438),
    AI = i(386011);
function Av(e) {
    let {
            app: t,
            currentSubscription: i,
            currentListing: n,
            alternativeListings: l,
            navigateToHome: s,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, m4.A)(t, 100),
        u = (0, An.PJ)(r.flags),
        d = u ? m2.R : m3.n,
        c = u ? g.intl.string(g.t["46YF2D"]) : g.intl.string(g.t.fFyGiA),
        m = i.metadata?.application_subscription_guild_id,
        A = (0, O.bG)([H.A], () => (u && null != m ? H.A.getGuild(m) : void 0), [m, u]),
        h = (0, O.bG)([d4.A], () => {
            if (null != a) return d4.A.get(a);
        }, [a]),
        E = As(i.currentPeriodEnd);
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsxs)("div", {
                className: AI.wx,
                children: [
                    null != o && (0, p.jsx)(m1._, { src: o.href, imageClassName: AI.Z2, width: 48, height: 48 }),
                    (0, p.jsxs)("div", {
                        children: [
                            (0, p.jsx)(eA.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, p.jsxs)("div", {
                                className: AI.p4,
                                children: [
                                    (0, p.jsxs)(eA.D, {
                                        variant: "heading-md/normal",
                                        className: AI.N4,
                                        children: [(0, p.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != A &&
                                        (0, p.jsxs)(p.Fragment, {
                                            children: [
                                                (0, p.jsx)(M.E, { variant: "text-md/normal", children: "•" }),
                                                (0, p.jsxs)("span", {
                                                    className: AI.vP,
                                                    children: [
                                                        (0, p.jsx)(c7.Ay, { guild: A, size: c7.Ay.Sizes.SMOL }),
                                                        (0, p.jsx)(eA.D, {
                                                            variant: "heading-md/semibold",
                                                            color: "text-muted",
                                                            children: g.intl.format(g.t["7ZD8p1"], {
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
            (0, p.jsx)(m9, {
                children: (e) =>
                    (0, p.jsxs)("div", {
                        className: AI._B,
                        children: [
                            (0, p.jsx)(M.E, { variant: "text-md/normal", children: g.intl.string(g.t["goe+hk"]) }),
                            e &&
                                (0, p.jsxs)(p.Fragment, {
                                    children: [
                                        (0, p.jsx)(M.E, {
                                            variant: "text-md/normal",
                                            children: g.intl.format(g.t["Q8qJ+5"], {}),
                                        }),
                                        (0, p.jsx)(M.E, {
                                            variant: "text-md/normal",
                                            children: g.intl.format(g.t.sqowYz, {}),
                                        }),
                                    ],
                                }),
                            (0, p.jsx)(m9.Toggle, {
                                text: e ? g.intl.string(g.t["1Rkq/E"]) : g.intl.string(g.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, p.jsxs)("div", {
                className: AI.x0,
                children: [
                    (0, p.jsx)(Ab, {
                        storeListing: n,
                        className: AI.o3,
                        cta: (0, p.jsxs)("div", {
                            className: AI.cJ,
                            children: [
                                (0, p.jsx)(M.E, {
                                    variant: "eyebrow",
                                    color: "text-brand",
                                    children: g.intl.string(g.t.fHIpOY),
                                }),
                                null != h &&
                                    (0, p.jsx)(M.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: g.intl.format(g.t["OQk+jr"], { endDate: E }),
                                    }),
                            ],
                        }),
                    }),
                    l.map((e) =>
                        e.skuId === a
                            ? (0, p.jsx)(
                                  Ab,
                                  {
                                      storeListing: e,
                                      cta: (0, p.jsx)(M.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-subtle",
                                          children: g.intl.format(g.t.nn88hB, { startDate: E }),
                                      }),
                                  },
                                  e.id,
                              )
                            : (0, p.jsx)(Aj, { storeListing: e, guildId: m, navigateToHome: s }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function Aj(e) {
    let { storeListing: t, guildId: i, navigateToHome: n } = e,
        { openModal: l } = (0, AC.A)({
            analyticsLocation: Q.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: i,
            disableGuildSelector: !0,
            onComplete: n,
        });
    return (0, p.jsx)(Ab, {
        storeListing: t,
        cta: (0, p.jsx)(eh.$, { variant: "primary", size: "sm", text: g.intl.string(g.t["+KwmBt"]), onClick: l }),
    });
}
class Ay extends N.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, p.jsxs)(mZ.$T, {
                  color: mZ.Hv.DANGER,
                  style: { borderRadius: 0 },
                  children: [
                      g.intl.format(g.t.IIHUUF, { subscriptionId: this.props.subscription.id }),
                      " ",
                      g.intl.format(g.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                  ],
              })
            : this.props.children;
    }
}
function AO(e) {
    let { subscriptions: t, updateHeader: i } = e,
        [n, l] = N.useState({ route: AE.HOME }),
        { route: s } = n,
        r = () => {
            l({ route: AE.HOME });
        },
        a = (e) => {
            l({ route: AE.SWITCH_APP_PLANS, ...e }), i(g.intl.string(g.t.VFqtkP), r);
        },
        [o, u] = N.useState({});
    N.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: Aa.LOADING })),
                (0, mQ._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: Aa.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: Aa.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, mq.E)(),
        c = d !== mq.mJ.LOADED;
    switch (s) {
        case AE.HOME:
            return (0, p.jsx)(p.Fragment, {
                children: t.map((e) =>
                    (0, p.jsx)(
                        Ay,
                        {
                            subscription: e,
                            children: (0, p.jsx)(Ao, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? Aa.LOADING : (o[e.id] ?? Aa.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case AE.SWITCH_APP_PLANS:
            let { route: m, ...A } = n;
            return (0, p.jsx)(Av, { ...A, navigateToHome: r });
        default:
            (0, t4.xb)(s);
    }
}
var AR = i(470464);
function AL(e) {
    let { onGoBack: t } = e,
        i = (0, O.yK)(
            [dl.A],
            () =>
                dl.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [n, l] = N.useState();
    return (
        null == n && (n = (0, p.jsx)(AD, { onBack: t, title: g.intl.string(g.t["DB/m9a"]) })),
        (0, p.jsxs)("div", {
            children: [
                n,
                (0, p.jsx)("div", {
                    className: AR.A,
                    children: (0, p.jsx)(AO, {
                        subscriptions: i,
                        updateHeader: (e, t) => {
                            l(
                                (0, p.jsx)(AD, {
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
function AD(e) {
    let { onBack: t, title: i } = e;
    return (0, p.jsxs)("div", {
        className: AR.D,
        children: [
            (0, p.jsx)(sx.K, {
                "aria-label": g.intl.string(g.t["13/7kX"]),
                icon: () => (0, p.jsx)(mW.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, p.jsx)(eA.D, { variant: "heading-lg/semibold", children: i }),
        ],
    });
}
var AG = i(881489),
    AP = i(366999),
    AU = i(466919),
    AV = i(441924);
function AM(e) {
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
        ? ((t = g.intl.string(AU.default["/S02sx"])), (i = g.intl.string(AU.default.OPJNST)))
        : n
          ? ((t = g.intl.string(g.t["hT6i/0"])),
            (i = null != a ? g.intl.format(g.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = g.intl.string(g.t["3G0CTC"])),
            (i = r === l_.xc.FP_SUB_PAUSED ? g.intl.format(g.t.MMvaIG, { resumeDate: s.toDate() }) : null));
    let u = ew()({ [AV.Hs]: n, [AV.mT]: !n }),
        d = ew()({ [AV.CQ]: n, [AV.ZM]: !n }),
        c = ew()({ [AV.EM]: !n });
    return (0, p.jsxs)("div", {
        className: AV.r6,
        children: [
            (0, p.jsxs)("div", {
                className: AV.Nv,
                children: [
                    (0, p.jsx)(eA.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== i && (0, p.jsx)(M.E, { variant: "text-sm/normal", children: i }),
                ],
            }),
            !o &&
                (0, p.jsx)("div", {
                    className: AV.ZS,
                    children: (0, p.jsx)("div", {
                        className: u,
                        children: (0, p.jsx)(M.E, { variant: "text-sm/semibold", className: d, children: l }),
                    }),
                }),
        ],
    });
}
let Ak = function (e) {
    let { fractionalPremiumInfo: t, className: i, activationDate: n, hasPremiumGroup: l } = e,
        s = (0, oG.kX)(t),
        r = s.length > 0,
        a = (0, AP.Ay)(t.endsAt, AP.yE.SHORT_TIME),
        o = r ? s : a;
    return (0, p.jsx)("div", {
        children: (0, p.jsxs)("div", {
            className: ew()(i, AV.f8),
            children: [
                (0, p.jsx)("div", {
                    className: AV.J_,
                    children: (0, p.jsxs)("div", {
                        className: AV.Bh,
                        children: [
                            (0, p.jsx)("div", {
                                className: AV.xt,
                                children: (0, p.jsx)(oC.t, { size: "md", color: "white", className: AV.T8 }),
                            }),
                            (0, p.jsx)("div", {
                                className: AV.pt,
                                children: (0, p.jsx)(eA.D, {
                                    variant: "heading-md/semibold",
                                    children: g.intl.string(g.t.DFMPWS),
                                }),
                            }),
                            (0, p.jsx)(M.E, {
                                className: AV.PJ,
                                variant: "text-md/semibold",
                                children: s.length > 0 ? s : g.intl.string(g.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, p.jsx)(AM, {
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
var Aw = i(868942);
function AB(e) {
    let t,
        {
            user: i,
            planId: n,
            count: l,
            userPremiumSubscription: s,
            unconsumedFractionalPremiumUnits: r = [],
            hasPremiumGroup: a,
        } = e,
        [o, u] = (0, O.yK)([d3.A], () => [d3.A.get(n), null != s ? d3.A.get(s.planId) : null]);
    if (null == o || oG.Ay.getInterval(n).intervalType !== l_.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        c = o.skuId === d,
        m = oG.Ay.getDisplayName(n);
    if (a) t = g.intl.string(AU.default["5asczk"]);
    else if (c && null != s) {
        let e;
        e = new Date(s.status === Q.Dmq.PAUSED && null != s.pauseEndsAt ? s.pauseEndsAt : s.currentPeriodEnd);
        let i = (0, oG._e)(e, r);
        t = g.intl.formatToPlainString(g.t["5CNRRA"], { date: i ?? 0 });
    } else t = g.intl.formatToPlainString(g.t.eNXZ5O, { planName: m });
    let A = i.hasFreePremium() || (null != s && s.isPurchasedExternally);
    return (0, p.jsxs)("div", {
        className: AV.Bh,
        children: [
            (0, p.jsx)("div", {
                className: ew()({
                    [AV.sr]: o.skuId === l_.pe.TIER_0,
                    [AV.lP]: o.skuId === l_.pe.TIER_1,
                    [AV.eb]: o.skuId === l_.pe.TIER_2,
                }),
                children: (0, p.jsx)(oC.t, { size: "md", color: "currentColor", className: AV.Kk }),
            }),
            (0, p.jsxs)("div", {
                className: AV.pt,
                children: [
                    (0, p.jsx)(eA.D, {
                        variant: "heading-md/semibold",
                        children: g.intl.format(g.t.LzobT9, { planName: m }),
                    }),
                    !A &&
                        (0, p.jsx)(eA.D, {
                            className: AV.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, p.jsx)(M.E, {
                className: AV.PJ,
                variant: "text-md/semibold",
                children: g.intl.format(g.t["ess/xl"], { count: l }),
            }),
        ],
    });
}
let AF = function (e) {
    let { className: t, entitlements: i } = e,
        n = eR()(Array.from(i))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: i, consumed: n } = e;
                return null != t && null != i && !n;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        l = (0, O.yK)([dH.A], () => dH.A.getUnactivatedFractionalPremiumUnits()),
        s = (0, O.bG)([dl.A], () => dl.A.getPremiumSubscription()),
        r = (0, O.bG)([dl.A], () => null == dl.A.getPremiumTypeSubscription()),
        a = Object.keys(n).some((e) => e === l_.gD.PREMIUM_MONTH_TIER_1),
        o = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsx)("div", {
                className: ew()(t, AV.xF, AV.J_),
                children: Object.keys(n).map((e) =>
                    (0, p.jsx)(
                        AB,
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
                (0, p.jsxs)("div", {
                    children: [
                        (0, p.jsx)(M.E, {
                            className: AV.eT,
                            variant: "text-md/normal",
                            children: g.intl.string(g.t["VNr4+O"]),
                        }),
                        (0, p.jsx)(Aw.i, {}),
                    ],
                }),
        ],
    });
};
var Az = i(50919);
function AX(e) {
    let t,
        { subscription: i, withOverheadSeparator: n } = e,
        { analyticsLocations: l } = (0, nU.Ay)(),
        [s] = (0, mI.Kq)({
            subscriptionId: i.id,
            renewal: !0,
            analyticsLocations: l,
            analyticsLocation: eV.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == s) return null;
    let r = n ? Az.r : Az.a,
        a = s.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, oG.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = d3.A.get(o);
    ty()(null != u, "Missing plan");
    let d = (0, uB.$g)(s.total, s.currency);
    return (
        u.interval === l_.WT.YEAR
            ? (t = g.intl.format(g.t["jPz/39"], {
                  price: d,
                  termsUrl: Q.X7G.TERMS,
                  paidURL: Q.X7G.PAID_TERMS,
                  privacyUrl: Q.X7G.PRIVACY,
              }))
            : u.interval === l_.WT.MONTH &&
              (t =
                  1 === u.intervalCount
                      ? g.intl.format(g.t.m27GpI, {
                            price: d,
                            termsUrl: Q.X7G.TERMS,
                            paidURL: Q.X7G.PAID_TERMS,
                            privacyUrl: Q.X7G.PRIVACY,
                        })
                      : g.intl.format(g.t["9xf5Vx"], {
                            price: d,
                            termsUrl: Q.X7G.TERMS,
                            paidURL: Q.X7G.PAID_TERMS,
                            privacyUrl: Q.X7G.PRIVACY,
                            intervalCount: u.intervalCount,
                        })),
        (0, p.jsx)(M.E, { color: "text-muted", className: r, variant: "text-xs/normal", children: t })
    );
}
function AY(e) {
    let { subscription: t, withOverheadSeparator: i } = e;
    return t.status === Q.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, p.jsx)(AX, { subscription: t, withOverheadSeparator: i });
}
var AH = i(536008),
    AK = i(558808);
let AW = { [nv.nR]: "role_subscriptions_panel", [nv.PZ]: "application_subscriptions_panel" };
function AZ() {
    return (0, p.jsx)(er.Z, {
        className: AK.wb,
        type: er.Z.Types.CUSTOM,
        children: (0, p.jsxs)(sk.A, {
            align: sk.A.Align.CENTER,
            children: [
                (0, p.jsx)(e6.A, { game: null, size: e6.M.SMALL, className: AK.pV }),
                (0, p.jsx)("span", { className: AK.O, children: g.intl.string(g.t["jy/hyj"]) }),
            ],
        }),
    });
}
function AQ() {
    let e = (0, O.bG)([dH.A], () => dH.A.getForApplication(l_.tv));
    return (
        N.useEffect(() => {
            (0, dP.LM)(l_.tv);
        }, []),
        (0, p.jsx)(ia.n, {
            label: g.intl.string(g.t["2GKrvn"]),
            description: g.intl.string(g.t.kNEjGm),
            children:
                null != e && oG.Ay.hasAccountCredit(e)
                    ? (0, p.jsx)(AF, { className: AK.fX, entitlements: e })
                    : (0, p.jsx)(AZ, {}),
        })
    );
}
function Aq() {
    return (0, p.jsx)("hr", { className: AK.hr });
}
let AJ = function () {
        var e;
        let t = (0, O.bG)([dl.A], () => dl.A.getPremiumTypeSubscription()),
            i = (0, mg.A)({ subscriptionFilter: (e) => AH.Hy.has(e.status) }),
            n = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
            l = i.length > 1,
            s = (0, O.bG)(
                [dn.A],
                () => (null != t && null != t.paymentSourceId ? dn.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, O.bG)([dl.A], () => dl.A.hasFetchedSubscriptions()),
            a = (0, O.bG)([uK.A], () => uK.A.isBusy),
            o = (0, cx.Y)(),
            d = mj.A.useField("subsection");
        N.useEffect(() => {
            (0, rE._)(null != d ? AW[d] : u.X.SUBSCRIPTIONS_PANEL);
        }, [d]);
        let c = (0, O.bG)([dl.A], () => dl.A.getActiveApplicationSubscriptions()?.length ?? 0),
            m = (0, O.bG)(
                [dl.A],
                () =>
                    Object.values(dl.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === Q.rzx.GUILD)
                        .filter((e) => e.status !== Q.Dmq.ENDED).length,
            ),
            A = (0, c_.A)({ forceFetch: !0 }),
            h = (0, AG.ds)(),
            E = null !== t ? t.currentPeriodEnd : void 0,
            T =
                !(h && !(A.unactivatedUnits.length > 0)) &&
                (A.fractionalState !== l_.xc.NONE || A.unactivatedUnits.length > 0);
        return (N.useEffect(
            () => (
                n4.h.wait(() => {
                    (0, cS.zS)(), uM.hP(), (0, cT.CD)(), uM.$o();
                }),
                function () {
                    mj.A.resetState();
                }
            ),
            [],
        ),
        ef.A.enabled)
            ? (0, p.jsx)(uD.A, {})
            : r && o
              ? d === nv.nR
                  ? (0, p.jsx)(mX, { onGoBack: () => mj.A.setState({ subsection: null }) })
                  : d === nv.PZ
                    ? (0, p.jsx)(AL, { onGoBack: () => mj.A.setState({ subsection: null }) })
                    : (0, p.jsx)("div", {
                          className: AK.kL,
                          children: (0, p.jsxs)("div", {
                              className: AK.Qs,
                              children: [
                                  l ? (0, p.jsx)(AH.Sb, {}) : null,
                                  null != t
                                      ? (0, p.jsx)(AH.Ay, {
                                            subscription: t,
                                            paymentSource: s,
                                            busy: a,
                                            subscriptions: i,
                                        })
                                      : (0, p.jsx)(AH.TC, {}),
                                  T &&
                                      ((e = !!n?.isPremiumWithPremiumGroup()),
                                      (0, p.jsxs)("section", {
                                          children: [
                                              (0, p.jsx)(eA.D, {
                                                  variant: "heading-md/bold",
                                                  className: AK.HL,
                                                  children: g.intl.string(g.t.Obre8v),
                                              }),
                                              (0, p.jsx)(M.E, {
                                                  variant: "text-md/normal",
                                                  className: AK.JU,
                                                  children: g.intl.format(g.t["7Zi06b"], {
                                                      helpCenterLink: ta.A.getArticleURL(
                                                          Q.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, p.jsx)(Ak, {
                                                  className: AK.fX,
                                                  fractionalPremiumInfo: A,
                                                  activationDate: E,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, p.jsx)(AQ, {}),
                                  m > 0 &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)(Aq, {}),
                                              (0, p.jsx)(mh, {
                                                  count: m,
                                                  onClickManageSubscription: () => mj.A.setState({ subsection: nv.nR }),
                                              }),
                                          ],
                                      }),
                                  c > 0 &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)(Aq, {}),
                                              (0, p.jsx)(mK, {
                                                  count: c,
                                                  onClickManageSubscription: () => {
                                                      mj.A.setState({ subsection: nv.PZ }),
                                                          X.default.track(
                                                              Q.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                          );
                                                  },
                                              }),
                                          ],
                                      }),
                                  (0, p.jsx)(Aq, {}),
                                  null != t ? (0, p.jsx)(AY, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, p.jsx)("div", { className: ew()(AK.kL, AK.Lq), children: (0, p.jsx)(uP.y, {}) });
    },
    A$ = (0, o.E2)(u.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [g.intl.string(g.t.trSpHX), g.intl.string(g.t["2GKrvn"])],
        Component: () => (0, p.jsx)(AJ, {}),
    }),
    A0 = (0, o.zZ)(u.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [g.intl.string(g.t.trSpHX), g.intl.string(g.t["2GKrvn"])],
        buildLayout: () => [A$],
    }),
    A1 = (0, o.t_)(u.X.SUBSCRIPTIONS_PANEL, { useTitle: () => g.intl.string(g.t.trSpHX), buildLayout: () => [A0] }),
    A2 = (0, o.i4)(u.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.trSpHX),
        icon: md.L,
        usePersistentBadge: function () {
            return N.useMemo(
                () => ({
                    badgeType: e_.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    useCustomBadge: () =>
                        (0, mc.l)() ? (0, p.jsx)(sj.E, { size: "xs", color: w.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [],
            );
        },
        buildLayout: () => [A1],
    }),
    A3 = (0, o.WI)(u.X.BILLING_SECTION, {
        useTitle: () => g.intl.string(g.t["4uOdGr"]),
        buildLayout: () => [ch, mu, A2, co, df],
    });
var A4 = i(540999),
    A5 = i(306471),
    A8 = i(964355),
    A6 = i(172272);
let A7 = (0, o.zD)(u.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, O.bG)([aG.default], () => aG.default.isAxeEnabled),
        setValue: (e) => (0, aD.x)({ axeEnabled: e }),
    }),
    A9 = (0, o.zD)(u.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, O.bG)([aG.default], () => aG.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, aD.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var he = i(53705),
    ht = i(354328);
let hi = (0, o.zD)(u.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, ht.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, he.L)("highlight_mana_components", e);
        },
    }),
    hn = (0, o.zD)(u.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, ht.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, he.L)("highlight_void_toggleables", e);
        },
    }),
    hl = (0, o.sN)(u.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, O.bG)([aG.default], () => aG.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: A6.YR,
        markers: Array.from({ length: A6.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => A6.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            A6.Or.getState().setHorizontalSpacing(e);
        },
    }),
    hs = (0, o.zD)(u.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, O.bG)([aG.default], () => aG.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, aD.x)({ layoutDebuggingEnabled: e });
        },
    }),
    hr = (0, o.sN)(u.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, O.bG)([aG.default], () => aG.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: A6.YR,
        markers: Array.from({ length: A6.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => A6.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            A6.Or.getState().setVerticalSpacing(e);
        },
    }),
    ha = (0, o.zZ)(u.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [A9, hs, hl, hr, hi, hn, A7],
    }),
    ho = (0, o.zD)(u.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => c.HZ.useSetting(),
        setValue: (e) => {
            c.HZ.updateSetting(e);
        },
    });
var hu = i(173936),
    hd = i(260598),
    hc = i(148810),
    hg = i(380610),
    hm = i(986238),
    hA = i(851645),
    hh = i(274446);
let hE = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    hT = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function hS(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class hx extends N.Component {
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
        return (0, p.jsxs)(sk.A, {
            direction: sk.A.Direction.VERTICAL,
            className: ew()(hA.oS, ib.SX, hh.N, hA.nM),
            children: [
                (0, p.jsx)(iA.A, {
                    className: ew()(hA.lL, { [hA.zi]: n }),
                    onClick: n ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, p.jsxs)(sk.A, {
                    className: ib.QB,
                    children: [
                        (0, p.jsx)(sk.A.Child, {
                            basis: "50%",
                            children: (0, p.jsx)(sS.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: hT,
                                onSelectionChange: this.handleOverrideTypeChanged,
                                value: t,
                                disabled: n,
                            }),
                        }),
                        (0, p.jsx)(sk.A.Child, {
                            wrap: !0,
                            basis: "50%",
                            children: (0, p.jsx)(sP.k, {
                                label: "branch" === t ? "Branch Name" : "Commit SHA",
                                value: i,
                                onChange: this.handleOverrideIdChanged,
                                disabled: n,
                            }),
                        }),
                    ],
                }),
                (0, p.jsxs)(sk.A.Child, {
                    children: [
                        null != l &&
                            "" !== l &&
                            (0, p.jsx)(M.E, {
                                className: hA.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: l,
                            }),
                        (0, p.jsxs)(M.E, {
                            variant: "text-sm/normal",
                            className: hA.AS,
                            children: [
                                "This controls the build that will be served for the ",
                                (0, p.jsx)("code", { children: e }),
                                " project.",
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
}
class hp extends N.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, hg.bD)();
        this.setState({ loading: !1, buildOverrides: e, loadedBuildOverrides: eR().cloneDeep(e), errors: {} });
    }
    isDirty() {
        let { buildOverrides: e, loadedBuildOverrides: t } = this.state;
        return !eR().isEqual(e, t);
    }
    componentDidMount() {
        this.refreshBuildOverrides();
    }
    getAvailableProjects() {
        let { buildOverrides: e } = this.state;
        if (null == e) return [];
        let t = Object.keys(e);
        return eR().without(hE, ...t);
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
        this.setState({ buildOverrides: eR().cloneDeep(this.state.loadedBuildOverrides), errors: {}, didSave: !1 });
    };
    handleSaveChanges = async () => {
        let { buildOverrides: e } = this.state;
        if (null == e) return;
        this.setState({ saving: !0 });
        let t = await (0, hc.Zk)(e);
        if (200 === t.status) {
            let e = t.body;
            this.setState({
                buildOverrides: e,
                loadedBuildOverrides: eR().cloneDeep(e),
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
        (0, f.openModal)((t) => (0, p.jsx)(hN, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, p.jsx)(ir.pp, {
            theme: iu.A.theme,
            className: ew()(ib.eT, ib.SX),
            children: (0, p.jsx)(ir.SG, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: i } = this.state;
        return null == e
            ? null
            : eR().map(e, (e, n) =>
                  (0, p.jsx)(
                      hx,
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
            : (0, p.jsx)(eh.$, { variant: "secondary", text: "Reload App", onClick: () => location.reload() });
    }
    renderLinkButton() {
        let { buildOverrides: e } = this.state;
        return null == e || 0 === Object.keys(e).length
            ? null
            : (0, p.jsx)(e0.m, {
                  text: "Generate Public Link",
                  children: (0, p.jsx)(sx.K, {
                      variant: "secondary",
                      icon: hu.q,
                      "aria-label": "Generate Public Link",
                      onClick: this.handleLinkGeneration,
                  }),
              });
    }
    renderSaveButton() {
        if (!this.isDirty()) return null;
        let { saving: e, buildOverrides: t } = this.state;
        return (0, p.jsxs)(p.Fragment, {
            children: [
                (0, p.jsx)(eh.$, {
                    variant: "critical-primary",
                    text: "Discard Changes",
                    onClick: this.handleDiscardChanges,
                    disabled: e,
                }),
                (0, p.jsx)(eh.$, {
                    variant: "primary",
                    text: "Save Build Overrides",
                    disabled: hS(t ?? {}),
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
            ? (0, p.jsx)(uP.y, { className: ib.QX })
            : null != n && 0 === Object.keys(n).length
              ? this.renderEmpty()
              : this.renderItems();
        let l = !i && !t && this.getAvailableProjects().length > 0,
            s =
                hS(n ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, p.jsx)(M.E, {
                          color: "text-feedback-critical",
                          variant: "text-md/normal",
                          children:
                              "Mobile build overrides must be generated using the desktop/web stable client for now!",
                      })
                    : null;
        return (0, p.jsx)(ia.n, {
            children: (0, p.jsxs)(R.B, {
                gap: 16,
                children: [
                    (0, p.jsx)(sS.l, {
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
                    (0, p.jsxs)(aS.e, {
                        justify: "end",
                        children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                    }),
                ],
            }),
        });
    }
}
class hN extends N.Component {
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
        e.key === iE.dh.ENTER && this.handleAddAllowedVersion();
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
            t = await (0, hc.SB)(e);
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
        return hS(this.props.buildOverrides ?? {});
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
            d = hm.fL.find((t) => t.value === e),
            c = l.map((e) => ({ id: e, label: e, value: e }));
        return (0, p.jsxs)(R.B, {
            gap: 20,
            children: [
                (0, p.jsx)(sS.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: hm.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, p.jsx)(sS.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: hm.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, p.jsxs)(R.B, {
                          gap: 20,
                          children: [
                              (0, p.jsx)(sP.k, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: s,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: r,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: { icon: cR.j, onClick: this.handleAddAllowedVersion, "aria-label": "Add" },
                              }),
                              (0, p.jsx)(sS.l, {
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
                    : (0, p.jsx)(hd.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: i,
                          error: n,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                (0, p.jsx)(hd.f, {
                    label: "Client Experiment Override",
                    description:
                        "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.",
                    value: o,
                    error: u,
                    onChange: this.handleExperiments,
                    placeholder: '{"2022-01_threads":1}',
                }),
                (0, p.jsx)(L.d, { label: "Allow logged out users", checked: a, onChange: this.handleAllowLoggedOut }),
            ],
        });
    }
    renderHelpMessage() {
        let { statusText: e, status: t } = this.state;
        if (null == e) return (0, p.jsx)("div", {});
        let i = tr.Y.INFO;
        switch (t) {
            case 0:
                i = tr.Y.ERROR;
                break;
            case 1:
                i = tr.Y.WARNING;
        }
        return (0, p.jsx)(tr.p, { messageType: i, children: e });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props,
            { publicLink: i } = this.state;
        return (0, p.jsx)(sG.Modal, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, p.jsx)(dw.A, { value: i }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let h_ = (0, o.E2)(u.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: hp });
var hf = i(256311),
    hb = i(883600);
let hC = (0, o.E2)(u.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, O.bG)([hb.A], () => hb.A.overrideId()),
            t = async (e) => {
                let t = hb.A.getChangelog(e, "en-US");
                return null != t ? t : ((await hf.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
            };
        return (0, p.jsx)(hw, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => hf.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var hI = i(506774);
let hv = new Date("2018-01-01"),
    hj = (0, o.Tf)(u.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => c.pK.useSetting() === uz.default.fromTimestamp(hv.getTime()),
        onClick: () => (hI.w.set("lastChangeLogDate", hv), c.pK.updateSetting(uz.default.fromTimestamp(hv.getTime()))),
    }),
    hy = (0, o.zD)(u.X.DISABLE_APP_COLLECTIONS_CACHE, {
        useTitle: () => "Disable Application Collections Cache",
        useSubtitle: () => "Forces application collection updates to be shown immediately.",
        useDisabled: () => (0, O.bG)([aG.default], () => aG.default.onlyShowPreviewAppCollections),
        useValue: () =>
            (0, O.bG)(
                [aG.default],
                () => aG.default.disableAppCollectionsCache || aG.default.onlyShowPreviewAppCollections,
            ),
        setValue: (e) => (0, aD.x)({ disableAppCollectionsCache: e }),
    }),
    hO = (0, o.zD)(u.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, O.bG)([aG.default], () => aG.default.isForcedCanary),
        setValue: (e) => {
            (0, aD.x)({ canary: e });
        },
    }),
    hR = (0, o.zD)(u.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, O.bG)([aG.default], () => aG.default.sourceMapsEnabled),
        setValue: (e) => (0, aD.x)({ sourceMapsEnabled: e }),
    }),
    hL = (0, o.zD)(u.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, O.bG)([aG.default], () => aG.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, aD.x)({ onlyShowPreviewAppCollections: e }),
    });
var hD = i(10094),
    hG = i(683760);
let hP = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: l_.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: l_.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: l_.PremiumTypes.TIER_2 },
    ],
    hU = (0, o.Hn)(u.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => hP,
        clearable: !0,
        useValue: () =>
            (0, O.bG)([hG.A], () => {
                let e = hG.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, hD.O)(null, void 0)
                : null === e
                  ? (0, hD.O)(void 0, void 0)
                  : (0, hD.O)(0 === e ? null : e, void 0);
        },
    });
var hV = i(246605),
    hM = i(274184);
let hk = (0, o.E2)(u.X.SURVEY_OVERRIDE, {
    useSearchTerms: () => ["survey override"],
    Component: function () {
        let e = (0, O.bG)([hM.Ay], () => hM.Ay.getSurveyOverride());
        return (0, p.jsx)(hw, {
            label: "Survey Override",
            description: "Provide a survey ID to override the survey shown to this user.",
            placeholder: "Enter Survey ID...",
            overrideId: e ?? null,
            setOverride: (e) => hV.xr(e),
            fetchOverride: (e) => hV.BC(e, !0) ?? null,
        });
    },
});
function hw(e) {
    let { label: t, description: i, placeholder: n, overrideId: l, setOverride: s, fetchOverride: r } = e,
        [a, o] = N.useState(l ?? ""),
        u = N.useRef(null),
        [d, c] = N.useState(0),
        g = () => {
            null != u.current && (clearTimeout(u.current), (u.current = null));
        };
    return (
        N.useEffect(() => g, []),
        (0, p.jsx)(lO.D, {
            layout: "horizontal-responsive",
            label: t,
            description: i,
            children: (0, p.jsx)(sP.k, {
                placeholder: n,
                error: 2 === d ? "Failed to fetch override" : void 0,
                successMessage: 3 === d ? "Override applied" : void 0,
                value: a,
                onChange: (e) => {
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
let hB = (0, o.zZ)(u.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [hU, hk, hC, hj, hO, ho, hL, hy, hR, h_],
        useInlineNotice: () => ({
            type: e_.lT.INLINE_NOTICE,
            noticeType: "info",
            useText: () => g.intl.format(g.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    hF = (0, o.zD)(u.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, O.bG)([aG.default], () => aG.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, aD.x)({ logAnalyticsEvents: e }),
    }),
    hz = (0, o.zD)(u.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, O.bG)([aG.default], () => aG.default.isLoggingGatewayEvents),
        setValue: (e) => (0, aD.x)({ logGatewayEvents: e }),
    }),
    hX = (0, o.zD)(u.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, O.bG)([aG.default], () => aG.default.preventPopoutClose),
        setValue: (e) => (0, aD.x)({ preventPopoutClose: e }),
    }),
    hY = (0, o.zD)(u.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, O.bG)([aG.default], () => aG.default.logKeyboardMismatches),
        setValue: (e) => (0, aD.x)({ logKeyboardMismatches: e }),
    }),
    hH = (0, o.zD)(u.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, O.bG)([aG.default], () => aG.default.isLoggingOverlayEvents),
        setValue: (e) => (0, aD.x)({ logOverlayEvents: e }),
    }),
    hK = (0, o.zD)(u.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, O.bG)([aG.default], () => aG.default.isLoggingQuestEvents),
        setValue: (e) => (0, aD.x)({ logQuestEvents: e }),
    }),
    hW = (0, o.zD)(u.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, O.bG)([aG.default], () => aG.default.isTracingRequests),
        setValue: (e) => (0, aD.x)({ trace: e }),
    }),
    hZ = (0, o.zZ)(u.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [hz, hH, hW, hF, hY, hX, hK] }),
    hQ = (0, o.t_)(u.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [hB, hZ, ha],
    }),
    hq = (0, o.i4)(u.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: A5.V,
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
                    disableAppCollectionsCache: g,
                } = (0, O.cf)([aG.default, A4.A], () => ({
                    layoutDebuggingEnabled: aG.default.layoutDebuggingEnabled,
                    isDeveloper: A4.A.isDeveloper,
                    isLoggingGatewayEvents: aG.default.isLoggingGatewayEvents,
                    isLoggingOverlayEvents: aG.default.isLoggingOverlayEvents,
                    isLoggingAnalyticsEvents: aG.default.isLoggingAnalyticsEvents,
                    isTracingRequests: aG.default.isTracingRequests,
                    isForcedCanary: aG.default.isForcedCanary,
                    isSourceMapsEnabled: aG.default.sourceMapsEnabled,
                    isAxeEnabled: aG.default.isAxeEnabled,
                    preventPopoutClose: aG.default.preventPopoutClose,
                    onlyShowPreviewAppCollections: aG.default.onlyShowPreviewAppCollections,
                    disableAppCollectionsCache: aG.default.disableAppCollectionsCache,
                })),
                { horizontalSpacing: m, verticalSpacing: A } = (0, A6.Or)(),
                { setHorizontalSpacing: h, setVerticalSpacing: E } = A6.Or.getState(),
                T = c.HZ.useSetting();
            return t
                ? [
                      (0, p.jsxs)(
                          U.Dr,
                          {
                              id: "overrides",
                              label: "Overrides",
                              action: () => {
                                  (0, ej.openUserSettings)(u.X.DEV_OVERRIDES);
                              },
                              children: [
                                  (0, p.jsx)(
                                      U.sL,
                                      {
                                          id: "always-deliver",
                                          label: "Always Deliver Ads",
                                          checked: T,
                                          action: () => {
                                              c.HZ.updateSetting(!T);
                                          },
                                      },
                                      "always-deliver",
                                  ),
                                  (0, p.jsx)(
                                      U.sL,
                                      {
                                          id: "forced-canary",
                                          label: "Forced Canary",
                                          checked: r,
                                          action: () => {
                                              (0, aD.x)({ canary: !r });
                                          },
                                      },
                                      "forced-canary",
                                  ),
                                  (0, p.jsx)(
                                      U.sL,
                                      {
                                          id: "preview-collections",
                                          label: "Preview Unpublished Collections",
                                          checked: d,
                                          action: () => {
                                              (0, aD.x)({ onlyShowPreviewAppCollections: !d });
                                          },
                                      },
                                      "preview-collections",
                                  ),
                                  (0, p.jsx)(
                                      U.sL,
                                      {
                                          id: "disable-collections-cache",
                                          label: "Disable Collections Cache",
                                          checked: g,
                                          action: () => {
                                              (0, aD.x)({ disableAppCollectionsCache: !g });
                                          },
                                      },
                                      "disable-collections-cache",
                                  ),
                              ],
                          },
                          "overrides",
                      ),
                      (0, p.jsxs)(
                          U.Dr,
                          {
                              id: "logging",
                              label: "Logging",
                              action: () => {
                                  (0, ej.openUserSettings)(u.X.LOGGING);
                              },
                              children: [
                                  (0, p.jsx)(
                                      U.sL,
                                      {
                                          id: "gateway-events",
                                          label: "Gateway Events",
                                          checked: i,
                                          action: () => {
                                              (0, aD.x)({ logGatewayEvents: !i });
                                          },
                                      },
                                      "gateway-events",
                                  ),
                                  (0, p.jsx)(
                                      U.sL,
                                      {
                                          id: "overlay-events",
                                          label: "Overlay RPC Events",
                                          checked: n,
                                          action: () => {
                                              (0, aD.x)({ logOverlayEvents: !n });
                                          },
                                      },
                                      "overlay-events",
                                  ),
                                  (0, p.jsx)(
                                      U.sL,
                                      {
                                          id: "analytics-events",
                                          label: "Analytics Events",
                                          checked: l,
                                          action: () => {
                                              (0, aD.x)({ logAnalyticsEvents: !l });
                                          },
                                      },
                                      "analytics-events",
                                  ),
                                  (0, p.jsx)(
                                      U.sL,
                                      {
                                          id: "tracing-requests",
                                          label: "Tracing Requests",
                                          checked: s,
                                          action: () => {
                                              (0, aD.x)({ trace: !s });
                                          },
                                      },
                                      "tracing-requests",
                                  ),
                                  (0, p.jsx)(
                                      U.sL,
                                      {
                                          id: "prevent-popout-close",
                                          label: "Prevent Popouts From Closing",
                                          checked: o,
                                          action: () => {
                                              (0, aD.x)({ preventPopoutClose: !o });
                                          },
                                      },
                                      "prevent-popout-close",
                                  ),
                              ],
                          },
                          "logging",
                      ),
                      (0, p.jsxs)(
                          U.Dr,
                          {
                              id: "design-tools",
                              label: "Design/A11y Tools",
                              action: () => {
                                  (0, ej.openUserSettings)(u.X.DESIGN_TOOLS);
                              },
                              children: [
                                  (0, p.jsx)(
                                      U.sL,
                                      {
                                          id: "accessibility-auditing",
                                          label: "Accessibility Auditing",
                                          checked: a,
                                          action: () => {
                                              (0, aD.x)({ axeEnabled: !a });
                                          },
                                      },
                                      "accessibility-auditing",
                                  ),
                                  (0, p.jsx)(
                                      U.sL,
                                      {
                                          id: "layout-debugging",
                                          label: "Enable Layout Debugging",
                                          checked: e,
                                          action: () => {
                                              (0, aD.x)({ layoutDebuggingEnabled: !e });
                                          },
                                      },
                                      "layout-debugging",
                                  ),
                                  e &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)(
                                                  U.aK,
                                                  {
                                                      id: "horizontal-spacing",
                                                      label: "Horizontal Spacing",
                                                      control: (e, t) =>
                                                          (0, p.jsx)(A8.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: m,
                                                              minValue: 0,
                                                              maxValue: A6.YR,
                                                              onChange: (e) => h(e),
                                                              renderValue: (e) => `${Math.round(e)}px`,
                                                              "aria-label": "Horizontal Spacing",
                                                          }),
                                                  },
                                                  "horizontal-spacing",
                                              ),
                                              (0, p.jsx)(
                                                  U.aK,
                                                  {
                                                      id: "vertical-spacing",
                                                      label: "Vertical Spacing",
                                                      control: (e, t) =>
                                                          (0, p.jsx)(A8.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: A,
                                                              minValue: 0,
                                                              maxValue: A6.YR,
                                                              onChange: (e) => E(e),
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
                  ]
                : null;
        },
        buildLayout: () => [hQ],
    });
var hJ = i(127062),
    h$ = i(84654),
    h0 = i(80703),
    h1 = i(691540),
    h2 = i(857250),
    h3 = i(97483),
    h4 = i(100392),
    h5 = i(102609),
    h8 = i(271478),
    h6 = i(736056),
    h7 = i(386976),
    h9 = i(257433),
    Ee = i(32523),
    Et = i(222735),
    Ei = i(688151),
    En = i(491210);
function El(e) {
    let { experiment: t, experimentId: i, overrideInfo: n, defaultOpen: l } = e,
        [s, r] = N.useState(l),
        [a, o] = N.useState(!1),
        u = N.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, O.bG)([d1.default], () => d1.default.getId()),
        c = (0, O.bG)([d1.default], () => {
            let e = d1.default.getInstallationForTracking();
            return null == e ? null : (0, h0.v)(e);
        }),
        g = "installation" === t.kind && null != c ? c : d,
        m = (0, h9.iN)(t, g),
        A = (0, h9.Fm)(t, g),
        h = (0, O.yK)([h6.A], () =>
            eR()
                .sortBy(h6.A.getRecentExposures(Ei.Vh.USER, i), (e) => {
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
                (0, d8.C)((0, h4.yA)(i), () => {
                    (0, h1.P0)({
                        id: "experiment-link-copied",
                        message: "Copied experiment link",
                        type: h3.Ck.SUCCESS,
                    }),
                        e.preventDefault(),
                        e.stopPropagation();
                });
            },
            [i],
        ),
        T = (0, p.jsx)(eB.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, p.jsxs)(M.E, {
                variant: "text-md/medium",
                className: En.DD,
                children: [
                    (0, p.jsxs)("div", {
                        children: [
                            (0, p.jsxs)(R.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    t.title,
                                    " ",
                                    d8.p5 &&
                                        (0, p.jsx)(V.D, { onClick: E, children: (0, p.jsx)(hu.q, { size: "xs" }) }),
                                ],
                            }),
                            (0, p.jsx)(M.E, { color: "text-muted", variant: "text-sm/normal", children: i }),
                        ],
                    }),
                    (0, p.jsx)("span", {
                        className: En.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!s) return (0, p.jsx)("div", { className: En.Os, children: T });
    let S = "";
    return (
        (S =
            t.system === h5.l5.LEGACY
                ? `Currently assigned to bucket ${m ?? Ei.RE.NOT_ELIGIBLE}`
                : null != m
                  ? `Currently assigned to variant ${m}`
                  : "Currently unassigned"),
        (0, p.jsxs)("div", {
            className: En.Os,
            children: [
                T,
                (0, p.jsx)("div", {
                    children: (0, p.jsx)(h8.g, {
                        label: t.system === h5.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: S,
                        experiment: t,
                        experimentId: i,
                        overrideInfo: n,
                    }),
                }),
                (0, p.jsx)("div", {
                    className: En.h_,
                    children:
                        null == A
                            ? (0, p.jsx)(M.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children:
                                      'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.',
                              })
                            : null,
                }),
                a
                    ? (0, p.jsxs)("div", {
                          children: [
                              (0, p.jsx)(M.E, {
                                  variant: "text-lg/medium",
                                  className: En.id,
                                  children: "Server Descriptor",
                              }),
                              (0, p.jsx)(M.E, {
                                  variant: "code",
                                  className: En.AS,
                                  children: null == A ? "None" : JSON.stringify(A, void 0, 2),
                              }),
                              (0, p.jsx)(M.E, {
                                  variant: "text-lg/medium",
                                  className: En.id,
                                  children: "Override Descriptor",
                              }),
                              (0, p.jsx)(M.E, {
                                  variant: "code",
                                  className: En.AS,
                                  children:
                                      n?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(n.originalDescriptor, void 0, 2),
                              }),
                              (0, p.jsx)(M.E, {
                                  variant: "text-lg/medium",
                                  className: En.id,
                                  children: "Recent Exposures",
                              }),
                              (0, p.jsx)(M.E, {
                                  variant: "code",
                                  className: En.AS,
                                  children: 0 === h.length ? "None" : h.join("\n"),
                              }),
                          ],
                      })
                    : (0, p.jsx)("div", {
                          className: En.id,
                          children: (0, p.jsx)(B.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, p.jsx)(iL.c, { className: En.yF }),
            ],
        })
    );
}
function Es(e) {
    let { experiment: t, experimentId: i, overrideInfo: n } = e,
        [l, s] = N.useState(null != n),
        [r, a] = N.useState(!1),
        o = N.useCallback(() => {
            s((e) => !e);
        }, []),
        u = (0, O.bG)([h6.A], () => h6.A.getLoadedGuildExperiment(i)),
        d = (0, O.yK)([h6.A], () =>
            eR()
                .sortBy(h6.A.getRecentExposures(Ei.Vh.GUILD, i), (e) => {
                    let [t, i] = e;
                    return -i;
                })
                .map((e) => {
                    let [t, i] = e;
                    return `${new Date(i).toLocaleString()} (${t})`;
                }),
        ),
        [c, g] = (0, O.yK)([H.A, h6.A], () => {
            let e = eR().sortBy(H.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                t = {},
                n = [];
            for (let l of e) {
                let e = h6.A.getGuildExperimentDescriptor(i, l.id),
                    s = e?.bucket ?? Ei.RE.NOT_ELIGIBLE;
                s in t || (t[s] = 0), t[s]++, n.push(`${l.name}: ${s}`);
            }
            let l = eR()(t)
                .keys()
                .map(Number)
                .sort()
                .map((e) => `${t[e]} guilds in bucket ${e}`)
                .join(", ");
            return [n.join("\n"), l];
        }),
        m = (0, p.jsx)(V.D, {
            onClick: o,
            children: (0, p.jsxs)(M.E, {
                variant: "text-md/medium",
                className: En.DD,
                children: [
                    (0, p.jsxs)("div", {
                        children: [
                            (0, p.jsx)("span", { children: t.title }),
                            (0, p.jsx)(M.E, { color: "text-muted", variant: "text-sm/normal", children: i }),
                        ],
                    }),
                    (0, p.jsx)("span", { className: En.km, children: "Guild" }),
                ],
            }),
        });
    return l
        ? (0, p.jsxs)("div", {
              className: En.Os,
              children: [
                  m,
                  (0, p.jsx)(h8.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${g}`,
                      experiment: t,
                      experimentId: i,
                      overrideInfo: n,
                  }),
                  (0, p.jsx)("div", {
                      className: En.h_,
                      children:
                          null == u
                              ? (0, p.jsx)(M.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children:
                                        'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.',
                                })
                              : null,
                  }),
                  r
                      ? (0, p.jsxs)("div", {
                            children: [
                                (0, p.jsx)(M.E, {
                                    variant: "text-lg/medium",
                                    className: En.id,
                                    children: "Guild Assignments",
                                }),
                                (0, p.jsx)(M.E, { variant: "code", className: En.AS, children: c }),
                                (0, p.jsx)(M.E, {
                                    variant: "text-lg/medium",
                                    className: En.id,
                                    children: "Server Descriptor",
                                }),
                                (0, p.jsx)(M.E, {
                                    variant: "code",
                                    className: En.AS,
                                    children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                }),
                                (0, p.jsx)(M.E, {
                                    variant: "text-lg/medium",
                                    className: En.id,
                                    children: "Override Descriptor",
                                }),
                                (0, p.jsx)(M.E, {
                                    variant: "code",
                                    className: En.AS,
                                    children:
                                        n?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(n.originalDescriptor, void 0, 2),
                                }),
                                (0, p.jsx)(M.E, {
                                    variant: "text-lg/medium",
                                    className: En.id,
                                    children: "Recent Exposures",
                                }),
                                (0, p.jsx)(M.E, {
                                    variant: "code",
                                    className: En.AS,
                                    children: 0 === d.length ? "None" : d.join("\n"),
                                }),
                            ],
                        })
                      : (0, p.jsx)("div", {
                            className: En.id,
                            children: (0, p.jsx)(B.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, p.jsx)(iL.c, { className: En.yF }),
              ],
          })
        : (0, p.jsx)("div", { className: En.Os, children: m });
}
let Er = (0, o.E2)(u.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, h7.op)(),
                { experiments: i, overridesInfo: n } = (0, Ee.hI)(),
                l = N.useMemo(() => ({ ...i, ...e }), [i, e]),
                s = N.useMemo(() => ({ ...n, ...t }), [n, t]),
                r = (0, O.bG)([d1.default], () => {
                    let e = d1.default.getInstallationForTracking();
                    return null == e ? null : (0, h0.v)(e);
                }),
                [a, o] = N.useState(""),
                u = (0, Et.oC)((0, Et.R3)((0, Et.Fm)(l), s), a);
            return (0, p.jsxs)("div", {
                "data-mtctest-ignore": "true",
                children: [
                    null != r &&
                        (0, p.jsxs)(R.B, {
                            style: { gap: 8, marginBottom: 16 },
                            children: [
                                (0, p.jsxs)(M.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: ["Installation ID: ", r],
                                }),
                                d8.p5 &&
                                    (0, p.jsx)(B.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, d8.C)(r, () => {
                                                (0, h1.P0)((0, h2.o)("Installation ID copied!", h3.Ck.SUCCESS));
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, p.jsx)(D.I, { placeholder: "Search experiments", query: a, onChange: o, onClear: () => o("") }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? Es : El;
                              return (0, p.jsx)(
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
                        : (0, p.jsx)("div", {
                              className: En.p$,
                              children: (0, p.jsx)(eA.D, {
                                  variant: "heading-md/semibold",
                                  children: "No Experiments Found",
                              }),
                          }),
                ],
            });
        },
        useSearchTerms: () => ["Experiments", "Bucket Override", "Variant Override"],
    }),
    Ea = (0, o.zZ)(u.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [Er] }),
    Eo = (0, o.t_)(u.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [Ea] }),
    Eu = (0, o.i4)(u.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: hJ.c,
        useMenu: h$.A,
        buildLayout: () => [Eo],
    }),
    Ed = (0, o.WI)(u.X.DEVELOPER_SECTION, {
        useTitle: () => g.intl.string(g.t.CbItOL),
        usePredicate: () => A4.A.isDeveloper,
        buildLayout: () => [Eu, hq],
    });
var Ec = i(631670),
    Eg = i(252452),
    Em = i(47360),
    EA = i(836602),
    Eh = i(591179),
    EE = i(854627),
    ET = i(975732),
    ES = i(761508),
    Ex = i(83257),
    Ep = i(159001),
    EN = i(344346),
    E_ = i(919395),
    Ef = i(233641);
function Eb(e) {
    let { title: t, children: i } = e;
    return (0, p.jsxs)("div", {
        children: [(0, p.jsx)(eA.D, { variant: "text-md/medium", className: Ef.Vf, children: t }), i],
    });
}
function EC(e) {
    let {
        children: t,
        className: i,
        layoutClassName: n,
        profilePreview: l,
        profilePreviewTitle: s,
        nameplatePreview: r,
        stickyPreview: a = !0,
    } = e;
    return (0, p.jsx)("div", {
        className: ew()(Ef.UA, i),
        children: (0, p.jsxs)("div", {
            className: ew()(Ef.yt, n),
            children: [
                (0, p.jsx)("div", {
                    className: ew()(Ef.Fp, a && Ef.Oz),
                    children: (0, p.jsxs)(p.Fragment, {
                        children: [
                            (0, p.jsx)(Eb, { title: s ?? g.intl.string(g.t.Zb06yP), children: l }),
                            null != r ? (0, p.jsx)(Eb, { title: g.intl.string(g.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, p.jsx)("div", { className: Ef.oB, children: t }),
            ],
        }),
    });
}
var EI = i(986687),
    Ev = i(101058),
    Ej = i(841595),
    Ey = i(696451),
    EO = i(10478);
function ER() {
    return (0, p.jsxs)("div", {
        className: EO.p$,
        children: [
            (0, p.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: EO.Sl }),
            (0, p.jsx)(eA.D, {
                className: EO.h8,
                variant: "heading-lg/extrabold",
                children: g.intl.string(g.t.Z1OZCV),
            }),
            (0, p.jsx)(M.E, { className: EO.h8, variant: "text-md/normal", children: g.intl.string(g.t.ZSt4Tt) }),
            (0, p.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: EO.h8,
                children: (0, p.jsx)(eh.$, {
                    variant: "primary",
                    text: g.intl.string(g.t.jQ3pqt),
                    onClick: () => {
                        (0, lR.pX)(Q.BVt.GUILD_DISCOVERY), (0, lT.default)();
                    },
                }),
            }),
        ],
    });
}
var EL = i(81400),
    ED = i(757036),
    EG = i(252732),
    EP = i(355622),
    EU = i(408018),
    EV = i(201349),
    EM = i(158983);
let Ek = (0, lp.Ld)(),
    Ew = (0, t0.createChannelRecord)({ id: "1", type: Q.rbe.DM }),
    EB = (0, lp.Ld)();
function EF(e) {
    let {
            sectionTitle: t,
            errors: i,
            onBioChange: n,
            pendingBio: l,
            placeholder: s,
            currentBio: r,
            disabled: a = !1,
        } = e,
        [o, u] = N.useState(l ?? r),
        [d, c] = N.useState((0, EU.x7)(o)),
        m = N.useRef(r),
        A = N.useRef(!1);
    return (
        N.useEffect(() => {
            if (m.current !== r) {
                let e = (0, EU.x7)(r);
                u(r), c(e);
            }
            m.current = r;
        }, [r]),
        N.useEffect(() => {
            void 0 !== l || o === r || A.current || (u(r), c((0, EU.x7)(r)));
        }, [l, r, o]),
        (0, p.jsxs)(oj.A, {
            title: t,
            titleId: Ek,
            description: g.intl.string(g.t.Bbw6Ac),
            errors: i,
            disabled: a,
            children: [
                (0, p.jsx)(EV.Ay, {
                    "aria-describedby": EB,
                    "aria-labelledby": Ek,
                    className: EM.i,
                    innerClassName: EM.Z,
                    maxCharacterCount: Q.NA2,
                    onChange: function (e, t, i) {
                        t !== o && (u(t), c(i), n(t));
                    },
                    placeholder: s,
                    channel: Ew,
                    textValue: o,
                    richValue: d,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: ej.USER_SETTINGS_MODAL_KEY,
                    type: EP.oU.PROFILE_BIO_INPUT,
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
                (0, p.jsx)(F.A, { id: EB, children: g.intl.format(g.t["+DFxLc"], { maxLength: Q.NA2 }) }),
            ],
        })
    );
}
var Ez = i(930861),
    EX = i(821956),
    EY = i(562819),
    EH = i(84540),
    EK = i(408919);
function EW(e) {
    let { user: t, guild: i, className: n, sectionTitle: l, forcedDivider: s = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, nU.Ay)(),
        o = (0, E_.a4)({ user: t, guildId: i?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, E_.CP)(i?.id),
        c = r ? Ez.wL : aE.$n;
    return (0, p.jsx)(oj.A, {
        className: n,
        forcedDivider: s,
        hasBackground: !0,
        title: l,
        errors: d,
        children: (0, p.jsxs)("div", {
            className: EK.NC,
            children: [
                (0, p.jsx)(c, {
                    size: aE.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, EY.L)({ analyticsLocations: a, guild: i });
                    },
                    className: ew()({ [EK.yj]: r }),
                    children: g.intl.string(g.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: EK.DT,
                        children: (0, p.jsx)(eh.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, EX.uZ)(t, i) ? g.intl.string(g.t.CHf9iJ) : g.intl.string(g.t.OrokWm),
                            onClick: () => {
                                (0, EH.p)({ guildId: i?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var EZ = i(339984),
    EQ = i(114077);
let Eq = [{ name: "gif", extensions: ["gif"] }];
function EJ(e) {
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
        { newestAnalyticsLocation: m } = (0, nU.Ay)(),
        A = c ? Ez.wL : aE.$n,
        h = N.useCallback(() => {
            (0, EG.XD)({
                uploadType: EZ.HL.AVATAR,
                analyticsSource: m,
                filters: u ? Eq : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, m, u]);
    return (0, p.jsx)(oj.A, {
        className: a,
        title: l,
        errors: i,
        disabled: o,
        forcedDivider: d,
        children: (0, p.jsxs)("div", {
            className: EQ.NC,
            children: [
                (0, p.jsx)(A, {
                    className: ew()({ [EQ.yj]: c }),
                    size: aE.$n.Sizes.SMALL,
                    onClick: h,
                    children: s ?? g.intl.string(g.t["4OynCD"]),
                }),
                t &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: EQ.DT,
                        children: (0, p.jsx)(eh.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != r ? g.intl.string(g.t.TDjKDm) : g.intl.string(g.t.twB3fz),
                            onClick: () => n(null),
                        }),
                    }),
            ],
        }),
    });
}
var E$ = i(152103);
function E0(e) {
    let { user: t, guildId: i, className: n } = e,
        l = oG.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: s } = (0, nU.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, E_.B0)(t, i),
        d = (0, N.useCallback)(() => {
            X.default.track(Q.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS), (0, nV.L)({ analyticsLocations: s, guildId: i });
        }, [s, i]),
        c = (0, N.useCallback)(() => {
            (0, EH.p)({ displayNameStyles: null }), X.default.track(Q.HAw.DISPLAY_NAME_STYLES_REMOVED);
        }, []),
        m = (0, N.useCallback)(() => {
            (0, EH.p)({ guildId: i, displayNameStyles: null });
        }, [i]),
        A = void 0 !== o || (null != i ? null != a : null != r);
    return (0, p.jsx)(oj.A, {
        title: g.intl.string(nM.default["86GtGH"]),
        className: n,
        showPremiumIcon: l,
        errors: u,
        children: (0, p.jsxs)("div", {
            className: E$.N,
            children: [
                (0, p.jsx)(eh.$, {
                    variant: "primary",
                    size: "sm",
                    text: g.intl.string(nM.default.vJqrIg),
                    onClick: d,
                }),
                null == i &&
                    A &&
                    (0, p.jsx)(eh.$, {
                        variant: "secondary",
                        size: "sm",
                        text: g.intl.string(nM.default.ymq8WQ),
                        onClick: c,
                    }),
                null != i &&
                    null != (void 0 !== o ? o : a) &&
                    (0, p.jsx)(eh.$, {
                        variant: "secondary",
                        size: "sm",
                        text: g.intl.string(nM.default["j/KRxc"]),
                        onClick: m,
                    }),
            ],
        }),
    });
}
var E1 = i(637193),
    E2 = i(727369);
function E3(e) {
    let { user: t, guild: i, titleIcon: n } = e,
        { analyticsLocations: l } = (0, nU.Ay)(),
        s = null != i,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, E_.rv)(t, i?.id),
        d = N.useCallback(() => {
            (0, E1.p)({ analyticsLocations: l, guildId: i?.id });
        }, [l, i?.id]),
        c = N.useCallback(() => {
            (0, EH.p)({ guildId: i?.id, nameplate: null });
        }, [i?.id]);
    return (0, p.jsx)(oj.A, {
        title: g.intl.string(g.t.x5CoXR),
        titleIcon: n,
        errors: u,
        children: (0, p.jsxs)("div", {
            className: E2.u,
            children: [
                (0, p.jsx)(eh.$, { variant: "primary", size: "sm", text: g.intl.string(g.t.BwdeM1), onClick: d }),
                (void 0 === o ? (s ? a : r) != null : null != o) &&
                    (0, p.jsx)(eh.$, {
                        variant: "secondary",
                        size: "sm",
                        text: s ? g.intl.string(g.t.CHf9iJ) : g.intl.string(g.t["9zwziY"]),
                        onClick: c,
                    }),
            ],
        }),
    });
}
var E4 = i(33023);
function E5(e) {
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
        { newestAnalyticsLocation: c } = (0, nU.Ay)(),
        m = d ? Ez.wL : aE.$n;
    return (0, p.jsx)(oj.A, {
        className: s,
        title: g.intl.string(g.t.Vgdusv),
        showPremiumIcon: a,
        errors: i,
        disabled: r,
        forcedDivider: u,
        children: (0, p.jsxs)("div", {
            className: E4.NC,
            children: [
                (0, p.jsx)(m, {
                    className: ew()({ [E4.yj]: d }),
                    size: aE.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, EG.XD)({ uploadType: EZ.HL.BANNER, analyticsSource: c, guildId: l, isTryItOut: o }),
                    children: g.intl.string(g.t.N0bC3P),
                }),
                t &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: E4.DT,
                        children: (0, p.jsx)(eh.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != l ? g.intl.string(g.t.jHlJNS) : g.intl.string(g.t.tT9n7D),
                            onClick: () => n(null),
                        }),
                    }),
            ],
        }),
    });
}
var E8 = i(617061),
    E6 = i(872246);
function E7(e) {
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
        { analyticsLocations: u } = (0, nU.Ay)(),
        d = oG.Ay.canUsePremiumProfileCustomization(t),
        c = (0, E_.N2)({ user: t, guildId: i?.id }),
        { pendingProfileEffect: m, errors: A } = (0, E_.nZ)(i?.id);
    N.useEffect(() => {
        d &&
            X.default.track(Q.HAw.PREMIUM_UPSELL_VIEWED, {
                type: l_.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            });
    }, [d, u]);
    let h = a ? Ez.wL : aE.$n;
    return (0, p.jsx)(oj.A, {
        forcedDivider: r,
        borderType: dY.i.PREMIUM,
        hasBackground: !0,
        title: s,
        showBorder: o,
        errors: A,
        className: l,
        children: (0, p.jsxs)("div", {
            className: E6.NC,
            children: [
                (0, p.jsx)(h, {
                    size: aE.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, E8.W)({ analyticsLocations: u, guild: i, initialSelectedEffect: n });
                    },
                    className: ew()({ [E6.yj]: a }),
                    children: g.intl.string(g.t["/dRfCf"]),
                }),
                (void 0 === m ? null != c : null != m) &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: E6.DT,
                        children: (0, p.jsx)(eh.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != i ? g.intl.string(g.t.CHf9iJ) : g.intl.string(g.t.uMuafO),
                            onClick: () => {
                                (0, EH.p)({ guildId: i?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var E9 = i(13875),
    Te = i(515727),
    Tt = i(238780);
function Ti(e) {
    let { user: t, guild: i, sectionTitle: n } = e,
        { analyticsLocations: l } = (0, nU.Ay)(),
        s = (0, E9.sk)("ProfileFrameSection"),
        r = (0, E_.Xf)({ user: t, guildId: i?.id }),
        { pendingProfileFrame: a, errors: o } = (0, E_.Tu)(i?.id),
        [u, d] = (0, eT.kn)([eE.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        c = u === eE.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return s
        ? (0, p.jsx)(oj.A, {
              showBorder: c,
              borderType: c ? dY.i.NEW_UPSELL : dY.i.PREMIUM,
              hasBackground: c,
              title: n,
              titleBadge: c ? (0, p.jsx)(n7.Lp, { text: g.intl.string(g.t.y2b7CA), className: Tt.Ad }) : void 0,
              description: c ? g.intl.string(g.t.yMoMAt) : void 0,
              errors: o,
              children: (0, p.jsxs)("div", {
                  className: Tt.NC,
                  children: [
                      (0, p.jsx)(eh.$, {
                          variant: "primary",
                          size: "sm",
                          text: g.intl.string(g.t["9/hmle"]),
                          onClick: () => {
                              (0, Te.w)({ analyticsLocations: l, guild: i }), d(t7.i.TAKE_ACTION);
                          },
                      }),
                      (void 0 === a ? null != r : null != a) &&
                          (0, p.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: Tt.DT,
                              children: (0, p.jsx)(eh.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: null != i ? g.intl.string(g.t.CHf9iJ) : g.intl.string(g.t.nQBruk),
                                  onClick: () => {
                                      (0, EH.p)({ guildId: i?.id, profileFrame: null });
                                  },
                              }),
                          }),
                  ],
              }),
          })
        : null;
}
var Tn = i(33851),
    Tl = i.n(Tn),
    Ts = i(602853),
    Tr = i(654107),
    Ta = i(999291),
    To = i(101928),
    Tu = i(132500),
    Td = i(317097),
    Tc = i(508274),
    Tg = i(919796),
    Tm = i(773431);
function TA(e) {
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
        d = N.useRef(null),
        c = (0, Ts.r)(w.A.colors.BACKGROUND_BASE_LOW).hex(),
        m = w.A.colors.BACKGROUND_MOD_MUTED.css,
        A = (0, EG.sN)(n),
        h = (0, Td.Hl)(n),
        E = h === c ? m : h,
        T = A ? w.A.unsafe_rawColors.WHITE.css : w.A.unsafe_rawColors.PRIMARY_530.css,
        S = (0, Tg.A)(a),
        x = (0, Tg.A)(o),
        [_, f] = N.useState((0, Tu.A)());
    return (
        N.useEffect(() => {
            (S !== a || x !== o) && f((0, Tu.A)());
        }, [o, a, x, S]),
        (0, p.jsx)(G.Y, {
            targetElementRef: d,
            positionKey: _,
            renderPopout: (e) =>
                (0, p.jsx)(Tc.VN, {
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
                return (0, p.jsxs)("div", {
                    ref: d,
                    className: ew()(Tm.oP, { [Tm.r9]: s }),
                    children: [
                        (0, p.jsx)(V.D, {
                            ...i,
                            tabIndex: s ? -1 : 0,
                            onClick: s ? Q.tEg : t,
                            style: { backgroundColor: h, borderColor: E },
                            className: Tm.nf,
                            "aria-label": g.intl.string(g.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, p.jsx)(oD.R, {
                                size: "custom",
                                className: Tm.BW,
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
var Th = i(362656);
function TE(e) {
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
        c = (0, Ta.Ay)(t.id, r),
        { primaryColor: m, secondaryColor: A } = (0, To.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: n,
            isPreview: !0,
        }),
        h = oG.Ay.canUsePremiumProfileCustomization(t),
        E = null != i ? i : t.getAvatarURL(r, 80),
        T = (0, Ts.r)(w.A.unsafe_rawColors.PRIMARY_530).hex(),
        S = (0, Tr.rh)(E, T, !1);
    if (null == m || null == A) return null;
    let x = (e) => {
        l(Tl()(e, c?.themeColors) ? void 0 : e);
    };
    return (0, p.jsx)(oj.A, {
        title: g.intl.string(g.t.DMeO2X),
        disabled: !h && !s,
        className: ew()(Th.__invalid_profileThemesSection, a),
        showPremiumIcon: o,
        forcedDivider: d,
        children: (0, p.jsxs)("div", {
            className: Th.hd,
            children: [
                (0, p.jsx)("div", {
                    className: Th.YX,
                    children: (0, p.jsx)(TA, {
                        onChange: (e) => x([e, A]),
                        color: m,
                        suggestedColors: S,
                        showEyeDropper: !0,
                        label: (0, p.jsx)(M.E, {
                            className: Th.yz,
                            color: "text-default",
                            variant: "text-xs/normal",
                            "aria-hidden": !0,
                            children: g.intl.string(g.t.C3KTQk),
                        }),
                    }),
                }),
                (0, p.jsx)("div", {
                    className: Th.YX,
                    children: (0, p.jsx)(TA, {
                        onChange: (e) => x([m, e]),
                        color: A,
                        suggestedColors: S,
                        showEyeDropper: !0,
                        label: (0, p.jsx)(M.E, {
                            className: Th.yz,
                            color: "text-default",
                            variant: "text-xs/normal",
                            "aria-hidden": !0,
                            children: g.intl.string(g.t["8elvy6"]),
                        }),
                    }),
                }),
                u &&
                    null != r &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Th.WA,
                        children: (0, p.jsx)(eh.$, {
                            variant: "secondary",
                            size: "sm",
                            text: g.intl.string(g.t["L+GmoR"]),
                            onClick: () => x([null, null]),
                        }),
                    }),
            ],
        }),
    });
}
function TT(e) {
    let {
        sectionTitle: t,
        errors: i,
        onPronounsChange: n,
        pendingPronouns: l,
        placeholder: s,
        currentPronouns: r,
        disabled: a = !1,
    } = e;
    return (0, p.jsx)(oj.A, {
        title: t,
        errors: i,
        disabled: a,
        children: (0, p.jsx)(sP.k, {
            placeholder: s ?? g.intl.string(g.t.NPEUUu),
            maxLength: 40,
            value: l ?? r,
            onChange: function (e) {
                n(e === r ? void 0 : e);
            },
            disabled: a,
        }),
    });
}
var TS = i(427262),
    Tx = i(576705),
    Tp = i(376294);
function TN(e) {
    let { errors: t, pendingNick: i, currentNick: n, username: l, user: s, guild: r } = e,
        a = (0, O.bG)([Tx.A], () => Tx.A.can(Q.xBc.CHANGE_NICKNAME, r) || Tx.A.can(Q.xBc.MANAGE_NICKNAMES, r)),
        o = (0, ED.L)(l_.PremiumTypes.TIER_2);
    return (0, p.jsxs)(oj.A, {
        title: g.intl.string(g.t.me1lRk),
        errors: t,
        children: [
            (0, p.jsx)(sP.k, {
                value: i ?? n ?? "",
                placeholder: l,
                maxLength: Q.d0r,
                onChange: function (e) {
                    (0, EH.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : g.intl.string(g.t.gzjxQi),
            }),
            o && (0, p.jsx)(E0, { user: s, guildId: r.id, className: Tp.F }),
        ],
    });
}
var T_ = i(574173);
let Tf = "/assets/b25da78aa7949feb.png";
function Tb(e) {
    let { user: t, showOverlay: i, children: n } = e,
        l = (0, dU.Ay)(),
        { analyticsLocations: s } = (0, nU.Ay)(eV.A.PREMIUM_UPSELL_OVERLAY);
    return (N.useEffect(() => {
        i &&
            X.default.track(Q.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: s,
                type: l_.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            });
    }, [i, s]),
    i)
        ? (0, p.jsxs)("div", {
              className: T_.ry,
              children: [
                  (0, p.jsx)("div", { children: n }),
                  (0, p.jsxs)("div", {
                      className: T_.Wc,
                      children: [
                          (0, p.jsx)("img", {
                              className: T_.Tn,
                              alt: g.intl.string(g.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case Q.NJ8.DARK:
                                      case Q.NJ8.DARKER:
                                      case Q.NJ8.MIDNIGHT:
                                          return Tf;
                                      case Q.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return Tf;
                                  }
                              })(l),
                          }),
                          (0, p.jsxs)("div", {
                              className: T_._9,
                              children: [
                                  (0, p.jsx)(M.E, {
                                      variant: "text-lg/semibold",
                                      color: "always-white",
                                      children: g.intl.string(g.t.dMaDFX),
                                  }),
                                  (0, p.jsx)(M.E, {
                                      variant: "text-sm/normal",
                                      color: "always-white",
                                      children: g.intl.string(g.t.F7sgFH),
                                  }),
                              ],
                          }),
                          (0, p.jsx)(dX.A, {
                              size: aE.$n.Sizes.LARGE,
                              color: aE.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: oG.Ay.isPremium(t)
                                      ? g.intl.string(g.t.AfRWI8)
                                      : g.intl.string(g.t.nkdUym),
                              },
                              subscriptionTier: l_.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : n;
}
var TC = i(887267);
function TI() {
    var e;
    let t = (0, O.bG)([t3.default], () => {
            let e = t3.default.getCurrentUser();
            return ty()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        i = (0, ED.L)(l_.PremiumTypes.TIER_2),
        n = (0, O.bG)([EA.A, H.A], () => H.A.getGuild(EA.A.selectedGuildId));
    ty()(null != n, "guild should not be null");
    let {
            pendingAvatar: l,
            pendingNickname: s,
            pendingBanner: r,
            pendingBio: a,
            pendingPronouns: o,
            pendingThemeColors: u,
            errors: d,
        } = (0, O.cf)([EA.A], () => ({ ...EA.A.getPendingChanges(n.id), errors: EA.A.getErrors(n.id) })),
        c = (0, Ev.V7)({ userId: t.id, image: l }),
        m = (0, EL.EC)(n.id),
        A = (0, O.bG)([Ey.Ay], () => (null == n.id ? null : Ey.Ay.getMember(n.id, t.id))),
        h = (0, O.bG)([Ej.A], () => Ej.A.getGuildMemberProfile(t.id, n.id)),
        E = oG.Ay.canUsePremiumProfileCustomization(t),
        T = (0, E_.z5)(l, A?.avatar),
        S = (0, E_.Ac)(r, h?.banner),
        x = ((e = h?.themeColors), void 0 === u ? null != e : u?.[0] != null && u?.[1] != null),
        N = h?.bio ?? "",
        _ = h?.pronouns ?? "";
    return (0, p.jsxs)("div", {
        className: TC.Q,
        children: [
            (0, p.jsx)(
                TN,
                {
                    errors: d?.nick ?? m?.nick,
                    username: TS.Ay.getName(t),
                    pendingNick: s,
                    currentNick: A?.nick,
                    user: t,
                    guild: n,
                },
                "nick",
            ),
            (0, p.jsx)(
                TT,
                {
                    sectionTitle: g.intl.string(g.t["+T3RI/"]),
                    errors: d?.pronouns,
                    onPronounsChange: (e) => (0, EH.p)({ guildId: n.id, pronouns: e }),
                    pendingPronouns: o,
                    currentPronouns: _,
                },
                "pronouns",
            ),
            (0, p.jsxs)(Tb, {
                user: t,
                showOverlay: !E,
                children: [
                    (0, p.jsx)(
                        EJ,
                        {
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [
                                    g.intl.string(g.t.lqaIxI),
                                    (0, p.jsx)(e0.m, {
                                        text: g.intl.string(g.t["5AFxuK"]),
                                        children: (0, p.jsx)(oC.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: TC.a,
                                        }),
                                    }),
                                ],
                            }),
                            showRemoveAvatarButton: T,
                            onAvatarChange: (e) =>
                                (0, EG.rM)(e, A?.avatar, (e) => (0, EH.p)({ guildId: n.id, avatar: e })),
                            errors: d?.avatar,
                            guildId: n.id,
                            disabled: !E,
                        },
                        "avatar",
                    ),
                    (0, p.jsx)(
                        EW,
                        {
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [
                                    g.intl.string(g.t["7v0T9P"]),
                                    (0, p.jsx)(e0.m, {
                                        text: g.intl.string(g.t["5AFxuK"]),
                                        children: (0, p.jsx)(oC.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: TC.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: t,
                            guild: n,
                        },
                        "decoration",
                    ),
                    !i && (0, p.jsx)(E0, { user: t, guildId: n.id }),
                    (0, p.jsx)(
                        E3,
                        {
                            user: t,
                            guild: n,
                            titleIcon: (0, p.jsx)(e0.m, {
                                text: g.intl.string(g.t["5AFxuK"]),
                                children: (0, p.jsx)(oC.t, { size: "md", color: "currentColor", className: TC.a }),
                            }),
                        },
                        "nameplate",
                    ),
                    (0, p.jsx)(
                        E7,
                        {
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [
                                    g.intl.string(g.t.wR5wOo),
                                    (0, p.jsx)(e0.m, {
                                        text: g.intl.string(g.t["5AFxuK"]),
                                        children: (0, p.jsx)(oC.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: TC.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: t,
                            guild: n,
                        },
                        "effect",
                    ),
                    (0, p.jsx)(Ti, { user: t, guild: n, sectionTitle: g.intl.string(g.t.GWrZOd) }, "frame"),
                    (0, p.jsx)(
                        E5,
                        {
                            showRemoveBannerButton: S,
                            errors: d?.banner,
                            onBannerChange: (e) =>
                                (0, EG.rM)(e, h?.banner, (e) => (0, EH.p)({ guildId: n.id, banner: e })),
                            guildId: n.id,
                            disabled: !E,
                        },
                        "banner",
                    ),
                    (0, p.jsx)(TE, {
                        user: t,
                        pendingAvatarSrc: c,
                        pendingColors: u,
                        onThemeColorsChange: (e) => (0, EH.p)({ guildId: n.id, themeColors: e }),
                        guildId: n.id,
                        showResetThemeButton: x,
                    }),
                    (0, p.jsx)(
                        EF,
                        {
                            placeholder: g.intl.string(g.t["/7NKgv"]),
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [
                                    g.intl.string(g.t.ZzAR2Y),
                                    (0, p.jsx)(e0.m, {
                                        text: g.intl.string(g.t["5AFxuK"]),
                                        children: (0, p.jsx)(oC.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: TC.a,
                                        }),
                                    }),
                                ],
                            }),
                            onBioChange: (e) => (0, EH.p)({ guildId: n.id, bio: e }),
                            errors: d?.bio ?? m?.bio,
                            pendingBio: a,
                            currentBio: N,
                            disabled: !E,
                        },
                        "about",
                    ),
                ],
            }),
        ],
    });
}
var Tv = i(405318);
function Tj(e) {
    (0, f.openModalLazy)(async () => {
        let { default: t } = await Promise.all([i.e("2125"), i.e("66901"), i.e("61129")]).then(i.bind(i, 475312));
        return (i) => (0, p.jsx)(t, { source: { ...e, page: Q.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...i });
    });
}
function Ty(e) {
    let { selectedGuild: t, onGuildChange: i } = e,
        { analyticsLocations: n } = (0, nU.Ay)(eV.A.USER_SETTINGS_GUILD_PROFILE),
        l = (0, O.bG)([t3.default], () => {
            let e = t3.default.getCurrentUser();
            return ty()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        s = (0, O.bG)([Ey.Ay], () => (null != t ? Ey.Ay.getMember(t.id, l.id) : null)),
        r = (0, O.bG)([Ej.A], () => !Ej.A.isFetchingProfile(l.id, t?.id)),
        a = (0, O.bG)([ef.A], () => ef.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, O.cf)([EA.A], () => EA.A.getPendingChanges(t?.id)),
        c = (0, Ev.V7)({ userId: l.id, image: o }),
        m = (0, E_.lw)({
            pendingValue: u,
            userValue: l?.collectibles?.nameplate,
            guildValue: s?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: A } = (0, E_.B0)(l, t?.id);
    return (N.useEffect(() => () => n4.h.wait(Ep.IM), []), a)
        ? (0, p.jsx)(uD.A, {})
        : r
          ? (0, p.jsxs)(nU.f5, {
                value: n,
                children: [
                    (0, p.jsx)(M.E, {
                        variant: "text-sm/normal",
                        children: g.intl.format(g.t["/PTB2E"], {
                            helpCenterLink: ta.A.getArticleURL(Q.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(ov.A, { guildId: t.id, onChange: i }),
                                  (0, p.jsx)(EC, {
                                      profilePreviewTitle: (0, p.jsx)(eA.D, {
                                          variant: "heading-md/medium",
                                          className: Tv.Y,
                                          children: g.intl.formatToPlainString(g.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, p.jsx)(EI.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: A,
                                          user: l,
                                          guild: t,
                                          canUsePremiumCustomization: oG.Ay.canUsePremiumProfileCustomization(l),
                                          onUpsellClick: Tj,
                                      }),
                                      nameplatePreview: (0, p.jsx)(EN.A, {
                                          ...d,
                                          pendingDisplayNameStyles: A,
                                          user: l,
                                          guildId: t?.id,
                                          nameplate: m,
                                          className: null == m ? Tv.t : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, p.jsx)(TI, {}),
                                  }),
                              ],
                          })
                        : (0, p.jsx)(ER, {}),
                ],
            })
          : (0, p.jsx)(uP.y, {});
}
var TO = i(576622),
    TR = i(913403);
let TL = (e) => {
    let { children: t, notice: i } = e;
    return (0, p.jsxs)("div", { className: TR.r, children: [i, (0, p.jsx)("div", { children: t })] });
};
var TD = i(230109),
    TG = i(823092),
    TP = i(693477),
    TU = i(379197),
    TV = i(488430),
    TM = i(457421),
    Tk = i(940622),
    Tw = i(559474),
    TB = i(144030);
let TF = () => {
    let e,
        t,
        i,
        n,
        { analyticsLocations: l } = (0, nU.Ay)(eV.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        s = N.useRef(null),
        {
            asset: r,
            popoutAsset: a,
            title: o,
            body: u,
            version: d,
            revertTextColor: c,
        } = ((e = (0, Tk.mb)(Tw.RN.UPSELL_BANNER)),
        (t = (0, Tk.mb)(Tw.RN.UPSELL_BANNER_POPOUT)),
        (i = (0, O.bG)([TM.A], () => TM.A.getMarketingBySurface(TU.R.EDIT_PROFILE_SETTINGS))),
        (n = N.useMemo(
            () =>
                null != i
                    ? i
                    : {
                          asset: "/assets/30e2c68819facd98.png",
                          popoutAsset: "/assets/c6d55507d7473057.png",
                          title: g.intl.string(g.t.QZVVBh),
                          body: g.intl.string(g.t.sajmAq),
                          version: 0,
                          revertTextColor: !1,
                      },
            [i],
        )),
        N.useMemo(
            () => ({ ...n, type: TV.G.BANNER, asset: e ?? n.asset, popoutAsset: t ?? n.popoutAsset }),
            [e, t, n],
        )),
        { navigateWithValidation: m } = (0, TG.L_)();
    return (
        N.useEffect(() => {
            X.default.track(Q.HAw.PREMIUM_UPSELL_VIEWED, {
                type: l_.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: l,
                version: d,
            });
        }, [l, d]),
        (0, p.jsxs)("div", {
            ref: s,
            className: TB.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, p.jsx)("div", {
                    className: TB.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, p.jsx)("img", { src: a, className: TB.Qw, alt: "" }),
                }),
                (0, p.jsxs)("div", {
                    className: TB.Em,
                    children: [
                        (0, p.jsx)(eA.D, {
                            variant: "heading-lg/extrabold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: TB.DD,
                            children: o,
                        }),
                        (0, p.jsx)(M.E, {
                            variant: "text-sm/normal",
                            color: c ? "text-overlay-dark" : "currentColor",
                            children: u,
                        }),
                    ],
                }),
                (0, p.jsx)(eh.$, {
                    onClick: () => {
                        m(() =>
                            (0, TP.Cz)({
                                analyticsLocations: l,
                                analyticsSource: eV.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                            }),
                        );
                    },
                    variant: "overlay-primary",
                    text: g.intl.string(g.t.fYfGgK),
                }),
            ],
        })
    );
};
var Tz = i(451909),
    TX = i(959249),
    TY = i(400669),
    TH = i(835071),
    TK = i(422936),
    TW = i(234419),
    TZ = i(590180),
    TQ = i(898461),
    Tq = i(207803),
    TJ = i(508425),
    T$ = i(559949);
let T0 = {
        above_the_clouds: {
            preset: "above_the_clouds",
            themeColors: [752280, 9215590],
            avatarDecorationSkuId: "1144059132517826601",
            displayNameStyles: { fontId: T$.x.CHICLE, effectId: TJ.z.POP, colors: [959694] },
            getName: () => g.intl.string(g.t["TFc+iF"]),
            getHeaderSrc: () => i(702051).A,
            getBannerSrc: (e) => (e ? i(735161).A : i(887e3).A),
        },
        cyberpunk: {
            preset: "cyberpunk",
            themeColors: [1967991, 742532],
            avatarDecorationSkuId: null,
            displayNameStyles: { fontId: T$.x.PIXELIFY, effectId: TJ.z.NEON, colors: [2949343] },
            getName: () => g.intl.string(g.t["4g+5bq"]),
            getHeaderSrc: () => i(272017).A,
            getBannerSrc: (e) => (e ? i(735271).A : i(208574).A),
        },
        shadow_realm: {
            preset: "shadow_realm",
            themeColors: [0, 4458504],
            avatarDecorationSkuId: "1144058522808614923",
            displayNameStyles: { fontId: T$.x.NEO_CASTEL, effectId: TJ.z.TOON, colors: [0xff0000] },
            getName: () => g.intl.string(g.t.ycg1xj),
            getHeaderSrc: () => i(863653).A,
            getBannerSrc: (e) => (e ? i(538263).A : i(576974).A),
        },
        starlit_dream: {
            preset: "starlit_dream",
            themeColors: [5123751, 590625],
            avatarDecorationSkuId: "1144058844004233369",
            displayNameStyles: { fontId: T$.x.CHERRY_BOMB, effectId: TJ.z.TOON, colors: [3343795] },
            getName: () => g.intl.string(g.t["9WLHvr"]),
            getHeaderSrc: () => i(434361).A,
            getBannerSrc: (e) => (e ? i(700309).A : i(135572).A),
        },
        neon_space: {
            preset: "neon_space",
            themeColors: [6094952, 1007678],
            avatarDecorationSkuId: null,
            displayNameStyles: { fontId: T$.x.MUSEO_MODERNO, effectId: TJ.z.NEON, colors: [28737] },
            getName: () => g.intl.string(g.t.UdNuqi),
            getHeaderSrc: () => i(301928).A,
            getBannerSrc: (e) => (e ? i(285974).A : i(775627).A),
        },
    },
    T1 = (e) => T0[e],
    T2 = Object.keys(T0),
    T3 = (e) => {
        let t = null == e ? T2 : T2.filter((t) => t !== e);
        return t[Math.floor(Math.random() * t.length)];
    };
var T4 = i(201805),
    T5 = i(674253);
function T8(e) {
    let { preset: t, onShuffle: i } = e,
        n = (0, O.bG)([iW.A], () => iW.A.useReducedMotion),
        l = (0, T4.Xf)({ useReducedMotion: n }),
        { name: s, header: r } = N.useMemo(() => {
            let e = T1(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, p.jsxs)("div", {
        className: T5.kL,
        children: [
            (0, p.jsx)(V.D, {
                onClick: () => {
                    i(), l.startAnimation(!1);
                },
                className: T5.x6,
                "aria-label": g.intl.string(g.t["44yJxh"]),
                children: l.render(),
            }),
            (0, p.jsxs)(V.D, {
                onClick: () => {
                    i(), l.startAnimation(!1);
                },
                "aria-label": `${s}: ${g.intl.string(g.t["44yJxh"])}`,
                className: T5.Lt,
                children: [
                    (0, p.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: T5.L_ }),
                    (0, p.jsx)(M.E, { className: T5._e, variant: "text-sm/bold", color: "always-white", children: s }),
                ],
            }),
        ],
    });
}
var T6 = i(511484),
    T7 = i(811611),
    T9 = i(515718),
    Se = i(507553);
function St(e, t) {
    let i = Se.A.useField("scrollPosition"),
        n = (0, O.bG)([iW.A], () => iW.A.useReducedMotion);
    (0, N.useEffect)(() => {
        let l = e.current;
        if (null == l || i !== t) return;
        let s = requestAnimationFrame(() => {
            l.scrollIntoView({ behavior: n ? "auto" : "smooth" }), Se.A.setState({ scrollPosition: null });
        });
        return () => cancelAnimationFrame(s);
    }, [e, t, i, n]);
}
var Si = i(844222),
    Sn = i(314649);
function Sl(e) {
    let { user: t, disabledInputs: n, containerClassName: l } = e,
        { reducedMotion: s } = N.useContext(Si.C),
        {
            pendingAvatar: r,
            pendingBanner: a,
            pendingAvatarDecoration: o,
            pendingProfileEffect: u,
            pendingDisplayNameStyles: d,
            pendingThemeColors: c,
            pendingPronouns: g,
            pendingBio: m,
            tryItOutThemeColors: A,
            tryItOutAvatar: h,
            tryItOutBanner: E,
            tryItOutAvatarDecoration: T,
            tryItOutDisplayNameStyles: S,
        } = (0, O.cf)([EA.A], () => {
            let e = EA.A.getPendingChanges(),
                t = EA.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        x = (0, Ev.V7)({ userId: t.id, image: h ?? r });
    return (0, p.jsx)(EI.A, {
        containerClassName: l,
        user: t,
        pendingPronouns: g,
        pendingBio: m,
        pendingBanner: E ?? a ?? i(636763),
        pendingDisplayNameStyles: S ?? d,
        pendingAvatar: x,
        pendingThemeColors: A ?? c,
        pendingAvatarDecoration: void 0 !== T ? T : o,
        pendingProfileEffect: u,
        avatarClassName: null != h || null != r || s.enabled ? void 0 : Sn.W,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        disabledInputs: n,
        hideExampleButton: !0,
    });
}
var Ss = i(461414);
function Sr(e) {
    let { user: t, isVisible: i, shouldShow: n } = e,
        l = oG.Ay.isPremium(t),
        s = oG.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, O.cf)([EA.A], () => {
            let e = EA.A.getPendingChanges(),
                t = EA.A.getErrors(),
                i = EA.A.getTryItOutChanges();
            return { ...e, ...i, errors: t };
        }),
        { preset: c, onShuffle: m } = (function () {
            let e = (0, O.bG)([iW.A], () => iW.A.useReducedMotion),
                [t, i] = (0, N.useState)(T3()),
                {
                    banner: n,
                    themeColors: l,
                    avatarDecorationSkuId: s,
                    displayNameStyles: r,
                } = (0, N.useMemo)(() => {
                    let i = T1(t);
                    return {
                        banner: i.getBannerSrc(e),
                        themeColors: i.themeColors,
                        avatarDecorationSkuId: i.avatarDecorationSkuId,
                        displayNameStyles: i.displayNameStyles,
                    };
                }, [t, e]),
                a = (0, O.bG)([TZ.A], () => {
                    let e = TZ.A.getProduct(s);
                    return (0, TQ.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, N.useEffect)(() => {
                (0, Tq.w5)({ banner: n, themeColors: l, avatarDecoration: a, displayNameStyles: r });
            }, [n, l, a, r]);
            let o = (0, N.useCallback)(() => {
                let e = T3(t);
                i(e), X.default.track(Q.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: e });
            }, [t]);
            return { preset: t, onShuffle: o };
        })(),
        A = N.useRef(null);
    St(A, nv._F.TRY_IT_OUT);
    let { analyticsLocations: h, sourceAnalyticsLocations: E } = (0, nU.Ay)(eV.A.USER_SETTINGS_TRY_OUT_PREMIUM),
        T = (e) => {
            e &&
                (d?.startsWith("https:") === !0
                    ? fetch(d)
                          .then((e) => e.blob())
                          .then((e) => (0, T9.We)(e))
                          .then((e) => {
                              (0, EH.p)({ avatar: u, themeColors: o, banner: e });
                          })
                          .catch(() => {
                              (0, EH.p)({ avatar: u, themeColors: o });
                          })
                    : null != d
                      ? (0, EH.p)({ avatar: u, themeColors: o, banner: d })
                      : (0, EH.p)({ avatar: u, themeColors: o }),
                X.default.track(Q.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
        };
    N.useEffect(() => {
        i &&
            X.default.track(Q.HAw.PREMIUM_UPSELL_VIEWED, {
                type: l_.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: Q.liQ.USER_SETTINGS },
                location_stack: E,
            });
    }, [E, t, i]);
    let S = (0, TW.V)()?.subscription_trial?.sku_id === l_.pe.TIER_2,
        x = (0, TK.O)(),
        _ = (0, T6.U9)(x, l_.pe.TIER_2);
    return n
        ? (0, p.jsx)(nU.f5, {
              value: h,
              children: (0, p.jsxs)(dY.A, {
                  ref: A,
                  className: Ss.MT,
                  type: dY.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, p.jsx)(EC, {
                          stickyPreview: !1,
                          layoutClassName: Ss.th,
                          profilePreviewTitle: (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(oC.t, { size: "md", color: "currentColor", className: Ss.PC }),
                                  g.intl.string(g.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, p.jsxs)(p.Fragment, {
                              children: [(0, p.jsx)(T8, { preset: c, onShuffle: m }), (0, p.jsx)(Sl, { user: t })],
                          }),
                          children: (0, p.jsxs)("div", {
                              className: Ss.EN,
                              children: [
                                  (0, p.jsxs)("div", {
                                      children: [
                                          (0, p.jsx)(eA.D, {
                                              variant: "heading-xl/extrabold",
                                              children: g.intl.string(g.t["2zGdAW"]),
                                          }),
                                          (0, p.jsx)(M.E, {
                                              className: Ss.h_,
                                              variant: "text-sm/normal",
                                              children: g.intl.string(g.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, p.jsx)(TE, {
                                      className: Ss.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, Ev.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: Tq.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, p.jsx)(E5, {
                                      className: Ss.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: Tq.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !s &&
                                      (0, p.jsx)(EJ, {
                                          className: Ss.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: Tq.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: g.intl.string(g.t["7z0D1c"]),
                                          sectionTitle: g.intl.string(g.t.vtFfPX),
                                      }),
                                  (0, p.jsx)(E0, { user: t, className: Ss.fz }),
                                  !S &&
                                      (0, p.jsx)(M.E, {
                                          variant: "text-sm/normal",
                                          children: g.intl.string(g.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !S &&
                          (0, p.jsx)(TX.d, {
                              onSubscribeModalClose: T,
                              className: Ss.Kv,
                              showUpsell: !0,
                              text: g.intl.format(g.t.TmfgI2, {
                                  onClick: () => {
                                      (0, TH.K)({ onSubscribeFinish: T });
                                  },
                              }),
                              button: l
                                  ? g.intl.string(g.t.AfRWI8)
                                  : _
                                    ? g.intl.formatToPlainString(g.t.bkQ4bH, { percent: x?.discount.amount })
                                    : g.intl.string(g.t.pj0XBN),
                              position: "inline",
                          }),
                      S &&
                          (0, p.jsxs)("div", {
                              children: [
                                  (0, p.jsx)("div", { className: Ss.BU }),
                                  (0, p.jsx)(T7.Ay, {
                                      type: l_.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: l_.pe.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
var Sa = i(814390),
    So = i(909536),
    Su = i(843282),
    Sd = i(145497),
    Sc = i(685073),
    Sg = i(534400),
    Sm = i(581781),
    SA = i(743981),
    Sh = i(51358);
let SE = (0, lp.Ld)(),
    ST = N.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: i, onChange: n } = e,
            l = N.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            s = (0, O.bG)([t3.default], () => (0, Sc.Zo)(t3.default.getCurrentUser()?.primaryGuild).guildId),
            r = void 0 !== i ? i : s,
            a = N.useMemo(
                () => t.reduce((e, t) => (t.profile?.tag != null && e.push({ label: t.name, value: t.id }), e), []),
                [t],
            ),
            o = N.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = l.get(e.value);
                    if (null == t) return null;
                    let i = t.profile?.tag;
                    return null == i
                        ? null
                        : (0, p.jsx)(Sm.A, {
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
            u = N.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = l.get(e.value);
                    return null == t || null == t.profile?.tag
                        ? null
                        : (0, p.jsx)(Sd.j, {
                              guildId: t.id,
                              guildName: t.name,
                              guildIcon: t.icon,
                              iconSize: 32,
                              animate: !1,
                          });
                },
                [l],
            ),
            d = N.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = l.get(e.value);
                    if (null == t) return null;
                    let i = t.profile?.tag;
                    return null == i
                        ? null
                        : (0, p.jsx)(Sg.o9, {
                              guildId: t.id,
                              guildTag: i,
                              guildBadge: t.profile?.badge ?? void 0,
                              badgeSize: SA.Sl.SIZE_16,
                              textColor: "interactive-text-default",
                              textVariant: "text-sm/semibold",
                          });
                },
                [l],
            ),
            c = N.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, p.jsx)(p.Fragment, { children: o(t) });
                },
                [o],
            ),
            m = N.useCallback(
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
            T = N.useRef(null);
        return (
            St(T, nv._F.GUILD_TAG),
            (0, p.jsxs)(oj.A, {
                title: g.intl.string(g.t.Pdd1nd),
                titleId: SE,
                ref: T,
                children: [
                    (0, p.jsx)(M.E, {
                        className: Sh.VA,
                        variant: "text-sm/normal",
                        children: g.intl.string(g.t.mlZ6Jx),
                    }),
                    (0, p.jsx)(Su.Pw, {
                        className: Sh.Lt,
                        optionClassName: Sh.S0,
                        isSelected: A,
                        options: a,
                        select: m,
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
var SS = i(556729);
function Sx(e) {
    let t = (0, ED.L)(l_.PremiumTypes.TIER_2);
    return (0, p.jsxs)(oj.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: g.intl.string(g.t["9AjdkD"]),
        children: [
            (0, p.jsx)("div", {
                children: (0, p.jsx)(sP.k, {
                    placeholder: e.placeholder,
                    maxLength: Q.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, p.jsx)(E0, { user: e.user, className: SS.F }),
        ],
    });
}
function Sp(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: i } = e,
        n = c.m$.useSetting(),
        l = void 0 !== i ? i : n;
    return (0, p.jsx)(L.d, {
        label: g.intl.string(g.t["3cWDuO"]),
        description: l ? null : g.intl.formatToPlainString(g.t.aYhclf, { username: t }),
        checked: !l,
        onChange: (e) => {
            !e === n ? (0, Ec._e)() : (0, EH.p)({ legacyUsernameDisabled: !e });
        },
    });
}
function SN(e) {
    let { user: t, savedUserColor: i, pendingColor: n, setPendingAccentColor: l } = e,
        s = t.getAvatarURL(null, 80),
        r = (0, Ts.r)(w.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, Tr.rh)(s, r, !1),
        o = (0, Td.LX)(a[0]);
    return (0, p.jsx)(oj.A, {
        title: g.intl.string(g.t["/X3fkf"]),
        children: (0, p.jsx)(TA, { onChange: (e) => l(e), color: n ?? i ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var S_ = i(518477);
let Sf = () => {
    let e = (0, O.bG)([d1.default], () => d1.default.getId());
    return (0, p.jsx)(oj.A, {
        title: g.intl.string(g.t.Jzj9q4),
        children: (0, p.jsx)(eh.$, {
            text: g.intl.string(g.t.Geikwq),
            onClick: () => {
                (0, ET.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [eV.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: S_.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var Sb = i(289299);
function SC() {
    let e = (0, O.bG)([t3.default], () => {
            let e = t3.default.getCurrentUser();
            return ty()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e;
        }),
        t = (0, O.bG)([Ej.A], () => Ej.A.getUserProfile(e.id)),
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
        } = (0, O.cf)([EA.A], () => {
            let e = EA.A.getPendingChanges(),
                t = EA.A.getErrors();
            return { ...e, errors: t };
        }),
        m = (0, Ev.V7)({ userId: e.id, image: i }),
        A = (0, EL.EC)(),
        h = oG.Ay.canUsePremiumProfileCustomization(e),
        E = (0, E_.z5)(i, e.avatar),
        T = (0, E_.Ac)(l, t?.banner),
        S = (0, Ta.Ay)(e.id),
        x = S?.getLegacyUsername(),
        N = (c.global_name?.length ?? 0) > 0 ? c.global_name : (A?.nick ?? []),
        _ = (c.bio?.length ?? 0) > 0 ? c.bio : (A?.bio ?? []),
        f = (0, O.yK)([H.A, Ey.Ay], () =>
            H.A.getGuildsArray().filter(
                (e) => (0, Sc.Rg)(e) && Ey.Ay.getSelfMember(e.id)?.joinedAt != null && e.profile?.tag != null,
            ),
        );
    return (0, p.jsxs)("div", {
        className: Sb.Q,
        children: [
            (0, p.jsx)(Sx, {
                placeholder: e.username,
                errors: N,
                currentGlobalName: e.globalName,
                pendingGlobalName: n,
                onGlobalNameChange: (e) => (0, EH.p)({ globalName: e }),
                user: e,
            }),
            (0, p.jsx)(
                TT,
                {
                    sectionTitle: g.intl.string(g.t["+T3RI/"]),
                    errors: c.pronouns,
                    onPronounsChange: (e) => (0, EH.p)({ pronouns: e }),
                    pendingPronouns: r,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, p.jsx)(Sf, {}),
            (0, p.jsx)(
                EJ,
                {
                    onAvatarChange: (e) => {
                        (0, EH.p)({ avatar: e }), (0, E_.WU)(null == e ? "remove" : "set");
                    },
                    showRemoveAvatarButton: E,
                    errors: c.avatar,
                    sectionTitle: g.intl.string(g.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, p.jsx)(EW, { user: e, sectionTitle: g.intl.string(g.t["7v0T9P"]) }, "decoration"),
            (0, p.jsx)(E3, { user: e }),
            (0, p.jsx)(E7, { user: e, sectionTitle: g.intl.string(g.t.wR5wOo) }, "effect"),
            (0, p.jsx)(Ti, { user: e, sectionTitle: g.intl.string(g.t.GWrZOd) }, "frame"),
            h
                ? (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsx)(
                              E5,
                              {
                                  showRemoveBannerButton: T,
                                  errors: c.banner,
                                  onBannerChange: (e) => (0, EH.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, p.jsx)(TE, {
                              user: e,
                              pendingAvatarSrc: m,
                              pendingColors: o,
                              onThemeColorsChange: (e) => (0, EH.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, p.jsx)(
                      SN,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: a,
                          setPendingAccentColor: (e) => (0, EH.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, p.jsx)(
                EF,
                {
                    sectionTitle: g.intl.string(g.t.ZzAR2Y),
                    errors: _,
                    onBioChange: (e) => (0, EH.p)({ bio: e }),
                    pendingBio: s,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            f.length > 0 &&
                (0, p.jsx)(ST, {
                    availablePrimaryGuilds: f,
                    pendingPrimaryGuildId: d,
                    onChange: (e) => (0, EH.p)({ primaryGuildId: e }),
                }),
            null != x && (0, p.jsx)(Sp, { legacyUsername: x, pendingLegacyUsernameDisabled: u }, "legacy_username"),
        ],
    });
}
var SI = i(780207),
    Sv = i(482549);
function Sj() {
    let e = (0, O.bG)([t3.default], () => {
            let e = t3.default.getCurrentUser();
            return ty()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        t = (0, O.bG)([ef.A], () => ef.A.hidePersonalInformation),
        {
            pendingBio: i,
            pendingAvatar: n,
            pendingNameplate: l,
            showNotice: s,
            ...r
        } = (0, O.cf)([EA.A], () => ({ ...EA.A.getPendingChanges(), showNotice: EA.A.showNotice() })),
        a = (0, Ev.V7)({ userId: e.id, image: n }),
        o = (0, E_.lw)({ pendingValue: l, userValue: e?.collectibles?.nameplate }),
        u = (0, Sa.A)() && null != i ? Tz.Ay.parse(void 0, i).content : i,
        d = oG.Ay.canUsePremiumProfileCustomization(e),
        c = (0, So.St)("edit-profile-upsell"),
        { analyticsLocations: m } = (0, nU.Ay)(eV.A.USER_SETTINGS_USER_PROFILE);
    N.useEffect(() => () => n4.h.wait(Ec.IM), []);
    let [A, h] = N.useState(!1),
        E = !d,
        T = N.useRef(null);
    return t
        ? (0, p.jsx)(uD.A, {})
        : (0, p.jsxs)(nU.f5, {
              value: m,
              children: [
                  (0, p.jsx)(TF, {}),
                  (0, p.jsx)(EC, {
                      profilePreview: (0, p.jsx)(EI.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: SI.A,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                      }),
                      nameplatePreview: (0, p.jsx)(EN.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? Sv.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, p.jsx)(SC, {}),
                  }),
                  (0, p.jsx)(TD.L, {
                      innerRef: T,
                      onChange: (e) => h(e),
                      threshold: 0.25,
                      active: E,
                      children: (0, p.jsx)("div", {
                          ref: T,
                          children: (0, p.jsx)(Sr, { user: e, shouldShow: E, isVisible: A }),
                      }),
                  }),
                  E &&
                      !s &&
                      (0, p.jsx)(TX.d, {
                          className: Sv.EL,
                          showUpsell: !A,
                          text: g.intl.format(g.t.TmfgI2, { onClick: () => (0, TH.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: c
                              ? (0, p.jsx)(TY.l, { size: "md", location: eV.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL })
                              : void 0,
                          button: (0, p.jsx)("div", {
                              className: Sv.Xl,
                              children: (0, p.jsx)(eh.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      X.default.track(Q.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          T?.current?.scrollIntoView({ behavior: "smooth" });
                                  },
                                  text: g.intl.string(g.t.uw9zI7),
                                  icon: oC.t,
                              }),
                          }),
                      }),
              ],
          });
}
var Sy = i(625494),
    SO = i(454078);
let SR = { [nv.Eq.USER_PROFILE]: "main_profile_tab", [nv.Eq.GUILD]: "guild_profile_tab" },
    SL = (0, o.E2)(u.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, O.bG)([sz.A, K.Ay, EA.A], () => {
                    let e = EA.A.selectedGuildId ?? sz.A.getGuildId();
                    return null == e || EA._.has(e) ? K.Ay.getFlattenedGuildIds().find((e) => !EA._.has(e)) : e;
                }),
                t = (0, O.bG)([H.A], () => H.A.getGuild(e)),
                i = (0, O.bG)([EA.A], () => EA.A.showNotice()),
                n = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
                l = Se.A.useField("subsection");
            return (
                N.useEffect(() => {
                    (0, rE._)(SR[l]);
                }, [l]),
                N.useEffect(() => {
                    null != n && t?.id != null && (0, TO.A)(n.id, n.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, n]),
                (0, p.jsxs)(TL, {
                    children: [
                        (0, p.jsxs)(ES.V, {
                            className: SO.$H,
                            type: "top",
                            look: "brand",
                            selectedItem: l,
                            onItemSelect: function (e) {
                                if (l !== e) {
                                    if (i) {
                                        (0, rT.fO)({ duration: 300, intensity: Ex.n3 }),
                                            Sy._.dispatch(Q.jej.EMPHASIZE_NOTICE);
                                        return;
                                    }
                                    e === nv.Eq.GUILD && null != t && (0, Ep.V2)(t.id),
                                        Se.A.setState({ subsection: e });
                                }
                            },
                            children: [
                                (0, p.jsx)(
                                    ES.V.Item,
                                    {
                                        className: SO.YU,
                                        id: nv.Eq.USER_PROFILE,
                                        children: g.intl.string(g.t["2p07FR"]),
                                    },
                                    nv.Eq.USER_PROFILE,
                                ),
                                (0, p.jsx)(
                                    ES.V.Item,
                                    {
                                        className: ew()(SO.YU, SO.HY),
                                        "aria-label": g.intl.string(g.t.kPHroX),
                                        id: nv.Eq.GUILD,
                                        children: g.intl.string(g.t.kPHroX),
                                    },
                                    nv.Eq.GUILD,
                                ),
                            ],
                        }),
                        l === nv.Eq.GUILD
                            ? (0, p.jsx)(Ty, {
                                  selectedGuild: t,
                                  onGuildChange: function (e) {
                                      if (i) {
                                          (0, rT.fO)({ duration: 300, intensity: Ex.n3 }),
                                              Sy._.dispatch(Q.jej.EMPHASIZE_NOTICE);
                                          return;
                                      }
                                      null != e && (0, Ep.JJ)(e.id);
                                  },
                              })
                            : (0, p.jsx)(Sj, {}),
                    ],
                })
            );
        },
        useSearchTerms: () => [
            g.intl.string(g.t["vi7f+q"]),
            g.intl.string(g.t.Ip9nBS),
            g.intl.string(g.t["2p07FR"]),
            g.intl.string(g.t["7vhiqk"]),
            g.intl.string(g.t.kPHroX),
            g.intl.string(g.t.lqaIxI),
            g.intl.string(g.t.Vgdusv),
            g.intl.string(g.t.DMeO2X),
        ],
    }),
    SD = (0, o.zZ)(u.X.PROFILE_CATEGORY, { buildLayout: () => [SL] });
var SG = i(881324);
let SP = () => {
        let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
            { avatarSrc: t, avatarDecorationSrc: i } = (0, EE.A)({ userId: e?.id, size: iK._3.SIZE_48 });
        return null == e
            ? null
            : (0, p.jsxs)("div", {
                  className: SG.a5,
                  children: [
                      (0, p.jsx)(iH.eu, {
                          src: t,
                          avatarDecoration: i,
                          size: iK._3.SIZE_48,
                          "aria-label": g.intl.string(g.t.lqaIxI),
                      }),
                      (0, p.jsxs)("div", {
                          className: SG.FS,
                          children: [
                              (0, p.jsx)(M.E, {
                                  color: "text-strong",
                                  variant: "text-md/medium",
                                  lineClamp: 1,
                                  children: e.globalName ?? e.username,
                              }),
                              (0, p.jsxs)("div", {
                                  className: SG.Fk,
                                  children: [
                                      (0, p.jsx)(M.E, {
                                          variant: "text-sm/normal",
                                          color: "currentColor",
                                          lineClamp: 1,
                                          children: g.intl.string(g.t.Ip9nBS),
                                      }),
                                      (0, p.jsx)(oD.R, { size: "xxs", color: "currentColor" }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
    },
    SU = (0, o.t_)(u.X.PROFILE_PANEL, {
        useTitle: () => g.intl.string(g.t["vi7f+q"]),
        notice: { stores: [EA.A], element: Em.A },
        initialize: () => () =>
            n4.h.wait(() => {
                (0, Ec.F7)(), Eg.A.clearSubsection(Q.nc_.PROFILE_CUSTOMIZATION);
            }),
        buildLayout: () => [SD],
    }),
    SV = (0, o.i4)(u.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["vi7f+q"]),
        icon: Sk,
        StronglyDiscouragedCustomComponent: SP,
        usePredicate: () => !(0, Eh.X)("user_settings_sidebar"),
        buildLayout: () => [SU],
    }),
    SM = (0, o.i4)(u.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => g.intl.string(g.t["vi7f+q"]),
        icon: Sk,
        StronglyDiscouragedCustomComponent: SP,
        usePredicate: () => (0, Eh.X)("user_settings_sidebar"),
        onClick: () => {
            let e = d1.default.getId();
            (0, ET.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function Sk() {
    let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: i } = (0, EE.A)({ userId: e?.id, size: iK._3.SIZE_48 });
    return (0, p.jsx)(iH.eu, { src: t, avatarDecoration: i, size: iK._3.SIZE_20, "aria-hidden": !0 });
}
let Sw = (0, o.WI)(u.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [SV, SM] });
var SB = i(358776),
    SF = i(98207);
function Sz() {
    return (0, p.jsx)(tr.p, { icon: uG.X, messageType: tr.Y.POSITIVE, children: g.intl.string(g.t.FsmBy4) });
}
var SX = i(670492),
    SY = i(579872),
    SH = i(900686),
    SK = i(518142),
    SW = i(662758),
    SZ = i(407186);
function SQ(e) {
    let { backupCodes: t, hasTOTPEnabled: i, currentUser: n } = e,
        l = N.useCallback((e) => {
            (0, f.openModal)((t) => (0, p.jsx)(SK.default, { ...t, password: e }), { stackingBehavior: "stack" });
        }, []),
        s = N.useCallback(() => {
            (0, f.openModal)((e) =>
                (0, p.jsx)(SW.default, {
                    ...e,
                    handleSubmit: (e) =>
                        SF.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                            l(e);
                        }),
                    title: g.intl.string(g.t.PsQmzU),
                    actionText: g.intl.string(g.t.ajkYcF),
                }),
            );
        }, [l]),
        r = N.useCallback(() => {
            let e = t
                    .map((e) => {
                        let { consumed: t, code: i } = e;
                        return `* ${i.substr(0, 4)}-${i.substr(4)} ${t ? "(used)" : ""}`;
                    })
                    .join("\r\n"),
                i = g.intl.formatToPlainString(g.t["uYWwh/"], { email: n.email });
            return `${i}\r
\r
${e}`;
        }, [t, n.email]),
        a = N.useMemo(
            () =>
                t.length > 0
                    ? (0, p.jsx)(SH.A, {
                          fileContents: r,
                          contentType: "text/plain",
                          fileName: "discord_backup_codes.txt",
                          children: (0, p.jsx)(eh.$, {
                              variant: "primary",
                              size: "sm",
                              text: g.intl.string(g.t.qZZUy6),
                          }),
                      })
                    : (0, p.jsx)(eh.$, { variant: "primary", size: "sm", text: g.intl.string(g.t.xZEzbu), onClick: s }),
            [t.length, r, s],
        ),
        o = N.useCallback(() => {
            SY.A.show({
                title: g.intl.string(g.t["D+aE7g"]),
                body: g.intl.string(g.t.EA4ZEk),
                cancelText: g.intl.string(g.t["ETE/oC"]),
                onConfirm: () => SF.A.disable(),
            });
        }, []);
    return (0, p.jsx)(lO.D, {
        label: g.intl.string(g.t.EPVq00),
        description: g.intl.string(g.t.bQwxib),
        children: (0, p.jsxs)(aS.e, {
            size: "sm",
            children: [
                a,
                i &&
                    (0, p.jsx)(eh.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        text: g.intl.string(g.t["D+aE7g"]),
                        onClick: o,
                    }),
                !i &&
                    (0, p.jsx)(eh.$, {
                        variant: "primary",
                        size: "sm",
                        text: g.intl.string(g.t.cDgKte),
                        onClick: SZ.Ay.enableMFA,
                    }),
            ],
        }),
    });
}
var Sq = i(464477);
function SJ() {
    return !Sq.K7;
}
let S$ = (0, o.E2)(u.X.ACCOUNT_TWO_FACTOR_CRYPTO_NOTICE, {
    useSearchTerms: () => [g.intl.string(g.t.m0FidJ)],
    usePredicate: SJ,
    Component: function () {
        return (0, p.jsx)(lO.D, {
            label: g.intl.string(g.t.EPVq00),
            children: (0, p.jsx)(tr.p, { messageType: tr.Y.INFO, children: g.intl.string(g.t.PhHhsj) }),
        });
    },
});
function S0() {
    let e = SJ(),
        t = (0, O.bG)([t3.default], () => {
            let e = t3.default.getCurrentUser();
            return null != e && !e.verified;
        });
    return !e && t;
}
let S1 = (0, o.E2)(u.X.ACCOUNT_UNVERIFIED_USER_NOTICE, {
    useSearchTerms: () => [g.intl.string(g.t.m0FidJ)],
    usePredicate: S0,
    Component: function () {
        return (0, p.jsx)(lO.D, {
            label: g.intl.string(g.t.EPVq00),
            children: (0, p.jsx)(tr.p, { messageType: tr.Y.WARNING, children: g.intl.string(g.t.uggF7o) }),
        });
    },
});
function S2() {
    return (0, O.bG)([t3.default], () => {
        let e = t3.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
let S3 = (0, o.E2)(u.X.ACCOUNT_AUTHENTICATOR_APP_SETTING, {
    useSearchTerms: function () {
        let e = (0, O.bG)([d1.default], () => d1.default.hasTOTPEnabled()),
            t = [g.intl.string(g.t.m0FidJ), g.intl.string(g.t.xZEzbu)];
        return e ? t.push(g.intl.string(g.t["D+aE7g"])) : t.push(g.intl.string(g.t.cDgKte)), t;
    },
    usePredicate: function () {
        let e = SJ(),
            t = S0(),
            i = S2();
        return !e && !t && i;
    },
    Component: function () {
        let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
            t = (0, O.bG)([SX.A], () => SX.A.getBackupCodes()),
            i = (0, O.bG)([d1.default], () => d1.default.hasTOTPEnabled());
        return null == e ? null : (0, p.jsx)(SQ, { backupCodes: t, currentUser: e, hasTOTPEnabled: i });
    },
});
var S4 = i(658675),
    S5 = i(103579);
function S8(e) {
    let {
            code: { code: t, consumed: i },
        } = e,
        n = `${t.substr(0, 4)}-${t.substr(4)}`,
        l = N.useRef(null),
        s = N.useCallback(
            (e) => {
                "c" === e.key &&
                    e.metaKey &&
                    d8.p5 &&
                    (e.preventDefault(), e.stopPropagation(), (0, d8.C)(n), l?.current?.focus());
            },
            [n],
        );
    return (0, p.jsx)("li", {
        className: ib.SX,
        children: (0, p.jsxs)(V.D, {
            innerRef: l,
            className: S5.Uc,
            onKeyDown: s,
            children: [(0, p.jsx)(S4.P, { checked: i }), (0, p.jsx)("span", { className: S5.aY, children: n })],
        }),
    });
}
function S6(e) {
    let { backupCodes: t } = e,
        i = N.useCallback((e) => e.map((e) => (0, p.jsx)(S8, { code: e }, e.code)), []),
        n = N.useCallback(async () => {
            let e = SX.A.getVerificationKey();
            await SF.A.confirmViewBackupCodes(e, !0);
        }, []);
    return (0, p.jsxs)(lO.D, {
        label: g.intl.string(g.t.GfqHPn),
        description: g.intl.format(g.t.OhmvYt, {}),
        children: [
            (0, p.jsxs)(sk.A, {
                children: [
                    (0, p.jsx)(sk.A.Child, {
                        children: (0, p.jsx)("ul", { className: S5.Pm, children: i(t.slice(0, t.length / 2)) }),
                    }),
                    (0, p.jsx)(sk.A.Child, {
                        children: (0, p.jsx)("ul", { className: S5.Pm, children: i(t.slice(t.length / 2)) }),
                    }),
                ],
            }),
            (0, p.jsx)(B.Q, { textVariant: "text-sm/medium", onClick: n, text: g.intl.string(g.t.RIThUu) }),
        ],
    });
}
let S7 = (0, o.E2)(u.X.ACCOUNT_BACKUP_CODES_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.m0FidJ), g.intl.string(g.t.xZEzbu)],
        usePredicate: function () {
            let e = SJ(),
                t = S0(),
                i = S2(),
                n = (0, O.bG)([SX.A], () => SX.A.getBackupCodes().length > 0);
            return !e && !t && i && n;
        },
        Component: function () {
            let e = (0, O.bG)([SX.A], () => SX.A.getBackupCodes());
            return (0, p.jsx)(S6, { backupCodes: e });
        },
    }),
    S9 = (0, o.E2)(u.X.ACCOUNT_ENABLE_MFA_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.m0FidJ)],
        usePredicate: function () {
            let e = SJ(),
                t = S0();
            return (0, O.bG)([t3.default], () => {
                let i = t3.default.getCurrentUser();
                return null != i && !i.mfaEnabled && !e && !t;
            });
        },
        Component: function () {
            return (0, p.jsx)(lO.D, {
                label: g.intl.string(g.t.EPVq00),
                description: g.intl.string(g.t["8aDa1t"]),
                children: (0, p.jsx)(eh.$, {
                    variant: "primary",
                    size: "sm",
                    text: g.intl.string(g.t.cDgKte),
                    onClick: SZ.Ay.enableMFA,
                }),
            });
        },
    });
var xe = i(846017);
let xt = (0, o.Tf)(u.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
        useTitle: () => g.intl.string(g.t["CIGa+7"]),
        useLabel: () => g.intl.string(g.t.bt75uw),
        useAriaLabel: () => g.intl.string(g.t["FRep5/"]),
        useVariant: () => "secondary",
        onClick: () => {
            (0, f.openModal)((e) => (0, p.jsx)(xe.default, { ...e, onSuccess: () => e.onClose() }));
        },
    }),
    xi = (0, o.E2)(u.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t["FRep5/"])],
        Component: function () {
            return (0, p.jsx)(eh.$, {
                variant: "primary",
                size: "sm",
                text: g.intl.string(g.t["FRep5/"]),
                onClick: () => (0, f.openModal)((e) => (0, p.jsx)(xe.default, { ...e, onSuccess: e.onClose })),
            });
        },
    });
var xn = i(557722),
    xl = i(615715);
function xs(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == e
        ? null
        : e.hasAnyStaffLevel()
          ? t
              ? g.intl.string(g.t.YJGvuD)
              : g.intl.string(g.t["3iKih7"])
          : e.hasFlag(Q.nhx.PARTNER)
            ? t
                ? g.intl.string(g.t["9UucjT"])
                : g.intl.string(g.t.Sq6Q1u)
            : null == e.email
              ? t
                  ? g.intl.string(g.t["9VWpT9"])
                  : g.intl.string(g.t.LfCBZG)
              : null;
}
var xr =
    (((r = {}).AVAILABLE = "available"),
    (r.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (r.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    r);
function xa() {
    let e = (0, uE.bG)([t3.default], () => t3.default.getCurrentUser()?.verified);
    return Sq.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function xo() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, uE.bG)([H.A, Tx.A, t3.default], () =>
        t3.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? g.intl.string(g.t.hxf9fX)
                : g.intl.string(g.t["3iKih7"])
            : H.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(Q.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        Tx.A.can(Q.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? g.intl.string(g.t.OYTCUh)
                  : g.intl.string(g.t.HC8uSZ)
              : null,
    );
}
var xu = i(53516);
function xd(e) {
    let t,
        i,
        { currentUser: n, togglingSMS: l } = e,
        [s, r] = N.useState(!1),
        a = N.useCallback(
            (e) => {
                e.preventDefault(), r(!s);
            },
            [s],
        ),
        o = N.useCallback(function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (0, f.openModal)((t) => (0, p.jsx)(xl.default, { reason: xn.d.USER_SETTINGS_UPDATE, ...t, ...e }), {
                modalKey: xu.V,
            });
        }, []),
        u = N.useCallback(() => {
            o();
        }, [o]),
        d = N.useCallback(() => {
            null == n.phone ? o({ onAddedPhone: SF.A.enableSMS }) : SF.A.enableSMS();
        }, [n, o]),
        c = N.useCallback(() => {
            (0, f.openModal)((e) =>
                (0, p.jsx)(SW.default, {
                    ...e,
                    handleSubmit: SF.A.disableSMS,
                    title: g.intl.string(g.t.KLWnit),
                    children: g.intl.string(g.t["W0/Duf"]),
                }),
            );
        }, []),
        m = N.useCallback((e) => (null == e ? "" : `${"*".repeat(e.length - 4)}${e.slice(-4)}`), []),
        A = null != n.phone,
        h = n.hasFlag(Q.nhx.MFA_SMS);
    if (A || h) {
        let e = s ? n.phone : m(n.phone);
        i = (0, p.jsxs)(M.E, {
            variant: "text-sm/normal",
            children: [
                g.intl.format(g.t.PXVoEO, { phoneNumber: e }),
                (0, p.jsx)(uT.Anchor, {
                    onClick: a,
                    className: S5.vN,
                    children: s ? g.intl.string(g.t.FfltIN) : g.intl.string(g.t.llArAg),
                }),
            ],
        });
    }
    if (h)
        t = (0, p.jsx)(eh.$, {
            variant: "critical-secondary",
            size: "sm",
            text: g.intl.string(g.t.KLWnit),
            loading: l,
            onClick: c,
        });
    else {
        let e = xs(n);
        t = (0, p.jsxs)(aS.e, {
            size: "sm",
            children: [
                (0, p.jsx)(eh.$, {
                    variant: "primary",
                    size: "sm",
                    text: e ?? g.intl.string(g.t.DZQe23),
                    onClick: d,
                    loading: l,
                    disabled: null != e,
                }),
                A
                    ? (0, p.jsx)(eh.$, {
                          variant: "secondary",
                          size: "sm",
                          text: g.intl.string(g.t.Ulqq6K),
                          onClick: u,
                      })
                    : null,
            ],
        });
    }
    return (0, p.jsxs)(lO.D, {
        label: g.intl.string(g.t.uHAJ5v),
        description: g.intl.string(g.t.fspJ4H),
        children: [i, t],
    });
}
let xc = (0, o.E2)(u.X.ACCOUNT_SMS_BACKUP_AUTHENTICATION_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.uHAJ5v)],
    usePredicate: function () {
        let e = SJ(),
            t = S0(),
            i = S2(),
            n = (0, O.bG)([d1.default], () => d1.default.hasTOTPEnabled());
        return !e && !t && i && n;
    },
    Component: function () {
        let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
            t = (0, O.bG)([SX.A], () => SX.A.togglingSMS);
        return null == e ? null : (0, p.jsx)(xd, { currentUser: e, togglingSMS: t });
    },
});
var xg = i(328009);
let xm = (0, o.E2)(u.X.ACCOUNT_SECURITY_KEYS_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.vrOCCk), g.intl.string(g.t.y7SXYX)],
    usePredicate: function () {
        let e = SJ(),
            t = S0();
        return !e && !t;
    },
    Component: xg.A,
});
var xA = i(200921),
    xh = i(390310),
    xE = i(766928),
    xT = i(568385),
    xS = i(791606),
    xx = i(646270),
    xp = i(738678);
function xN(e, t) {
    let i = e.client_info?.location ?? e.client_info?.ip,
        n = e.client_info?.platform,
        { text: l, icon: s } = (function (e) {
            switch (e?.toLowerCase().trim()) {
                case null:
                case void 0:
                case "":
                    return { text: g.intl.string(g.t.cDHCNY), icon: e2.k };
                case "ios":
                case "android":
                    return { text: e, icon: xx.u };
                case "horizon os":
                    return { text: e, icon: xp.G };
                default:
                    return { text: e, icon: e2.k };
            }
        })(e.client_info?.os);
    return { location: i, platform: n, os: l, Icon: s, lastActive: t ? null : (0, xh.Y)(e.approx_last_used_time) };
}
var x_ = i(405814);
function xf() {
    return (0, p.jsx)(M.E, { variant: "text-sm/normal", className: x_.h_, children: g.intl.string(g.t.zZp618) });
}
function xb() {
    let { currentSession: e } = (0, xh.r)();
    return null == e
        ? (0, p.jsx)("div", { className: x_.Lq, children: (0, p.jsx)(uP.y, {}) })
        : (0, p.jsx)(ia.n, { label: g.intl.string(g.t.LLS19o), children: (0, p.jsx)(xv, { session: e, current: !0 }) });
}
function xC(e) {
    let { checked: t, otherSessions: i } = e;
    return (0, p.jsx)(lO.D, {
        label: t.size > 0 ? g.intl.string(g.t.mMEmRO) : g.intl.string(g.t.Vij32M),
        description: g.intl.string(g.t.OTXyaf),
        children: (0, p.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: x_.Cn,
            children: (0, p.jsx)(eh.$, {
                variant: "critical-secondary",
                size: "sm",
                text:
                    t.size > 0
                        ? g.intl.formatToPlainString(g.t["83CPLj"], { count: t.size })
                        : g.intl.string(g.t.cLmmeY),
                onClick: () => {
                    t.size > 0 ? (0, xA.U0)(Array.from(t)) : (0, xA.U0)(i.map((e) => e.id_hash));
                },
            }),
        }),
    });
}
function xI() {
    let { currentSession: e, otherSessions: t } = (0, xh.r)(),
        i = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
        [n, l] = N.useState(new Set());
    return (null == e && 0 === t.length) || (0 === t.length && i?.mfaEnabled)
        ? null
        : t.length > 0 || !i?.mfaEnabled
          ? (0, p.jsxs)(p.Fragment, {
                children: [
                    (0, p.jsxs)(ia.n, {
                        label: g.intl.string(g.t.xx1MWc),
                        children: [
                            t.map((e) =>
                                (0, p.jsx)(
                                    xv,
                                    {
                                        session: e,
                                        useChecks: n.size > 0,
                                        checked: n.has(e.id_hash),
                                        setChecked: (t) => {
                                            let i = new Set(n);
                                            t ? i.add(e.id_hash) : i.delete(e.id_hash), l(i);
                                        },
                                    },
                                    e.id_hash,
                                ),
                            ),
                            i?.mfaEnabled ? null : (0, p.jsx)(xj, {}),
                        ],
                    }),
                    t.length > 0 &&
                        (0, p.jsx)("div", {
                            className: x_.wq,
                            children: (0, p.jsx)(xC, { checked: n, otherSessions: t }),
                        }),
                ],
            })
          : null;
}
function xv(e) {
    let { session: t, current: i, setChecked: n, checked: l, useChecks: s } = e,
        { location: r, platform: a, os: o, Icon: u, lastActive: d } = xN(t, i),
        c = [o, a].filter(t4.Vq),
        m = [r, d].filter(t4.Vq);
    return (0, p.jsxs)(
        "div",
        {
            className: ew()(x_.dZ, { [x_.gg]: i }),
            children: [
                (0, p.jsxs)("div", {
                    className: x_.OC,
                    children: [
                        (0, p.jsx)("div", {
                            className: x_.km,
                            children: (0, p.jsx)(u, { size: "md", color: "currentColor" }),
                        }),
                        (0, p.jsxs)("div", {
                            className: x_.F3,
                            children: [
                                (0, p.jsxs)(M.E, {
                                    variant: "eyebrow",
                                    className: x_.nT,
                                    children: [
                                        (0, p.jsx)("span", { children: c[0] }),
                                        c.length > 1 &&
                                            (0, p.jsxs)(p.Fragment, {
                                                children: [
                                                    (0, p.jsx)("span", { children: "\xb7" }),
                                                    (0, p.jsx)("span", { children: c[1] }),
                                                ],
                                            }),
                                    ],
                                }),
                                (0, p.jsxs)(M.E, {
                                    variant: "text-sm/medium",
                                    className: x_.nT,
                                    children: [
                                        (0, p.jsx)("span", { children: m[0] }),
                                        m.length > 1 &&
                                            (0, p.jsxs)(p.Fragment, {
                                                children: [
                                                    (0, p.jsx)("span", { children: "\xb7" }),
                                                    (0, p.jsx)("span", { children: m[1] }),
                                                ],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        i
                            ? null
                            : s
                              ? (0, p.jsx)("div", {
                                    className: x_.GR,
                                    children: (0, p.jsx)(xT.J, {
                                        onChange: (e) => {
                                            n?.(e);
                                        },
                                        checked: l,
                                    }),
                                })
                              : (0, p.jsx)(V.D, {
                                    className: x_.ux,
                                    onClick: (e) => {
                                        e.shiftKey ? n?.(!0) : (0, xA.U0)(t.id_hash);
                                    },
                                    "aria-label": g.intl.string(g.t.E4MJNt),
                                    children: (0, p.jsx)(cV.P, { size: "md", color: "currentColor" }),
                                }),
                    ],
                }),
                !i && (0, p.jsx)(iL.c, { className: x_.O9 }),
            ],
        },
        t.id_hash,
    );
}
function xj() {
    return (0, p.jsxs)("div", {
        className: ew()(x_.dZ, x_.EC),
        children: [
            (0, p.jsxs)("div", {
                className: x_.OC,
                children: [
                    (0, p.jsx)("div", { className: x_.km, children: (0, p.jsx)(xS.A, { width: "32", height: "32" }) }),
                    (0, p.jsxs)("div", {
                        className: x_.F3,
                        children: [
                            (0, p.jsx)(M.E, {
                                variant: "eyebrow",
                                className: x_.nT,
                                color: "text-muted",
                                children: (0, p.jsx)("span", { children: g.intl.string(g.t.iUa0sn) }),
                            }),
                            (0, p.jsx)(M.E, {
                                variant: "text-sm/medium",
                                className: x_.nT,
                                color: "text-muted",
                                children: (0, p.jsx)("span", {
                                    children: g.intl.format(g.t["044+8i"], {
                                        onClick: () =>
                                            (0, ej.openUserSettings)(u.X.ACCOUNT_PANEL, {
                                                analyticsLocations: [eV.A.USER_SETTINGS_SESSIONS],
                                            }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)("div", { className: x_.O9 }),
        ],
    });
}
var xy = i(176524),
    xO = i(583133);
function xR(e) {
    let { icon: t, label: i, subLabel: n, description: l, children: s, muted: r } = e;
    return (0, p.jsxs)(R.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, p.jsx)(xy.A, { Icon: t, color: r ? w.A.colors.ICON_MUTED : "currentColor" }),
            (0, p.jsxs)(R.B, {
                direction: "vertical",
                gap: "xxs",
                children: [
                    (0, p.jsxs)(R.B, {
                        direction: "horizontal",
                        gap: "xs",
                        children: [
                            (0, p.jsx)(M.E, { variant: "text-md/semibold", color: "text-strong", children: i }),
                            null != i &&
                                null != n &&
                                (0, p.jsx)(M.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    "aria-hidden": !0,
                                    children: "•",
                                }),
                            null != n &&
                                (0, p.jsx)(M.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                        ],
                    }),
                    (0, p.jsx)(M.E, { variant: "text-sm/normal", color: "text-muted", children: l }),
                ],
            }),
            s,
        ],
    });
}
function xL(e) {
    let { session: t, current: i } = e,
        { location: n, platform: l, os: s, Icon: r, lastActive: a } = xN(t, i),
        o = [n, a].filter(t4.Vq);
    return (0, p.jsx)(xR, {
        icon: r,
        label: s,
        subLabel: l,
        description: o.join(" \xb7 "),
        children:
            !i &&
            (0, p.jsx)(V.D, {
                className: xO.X,
                onClick: () => (0, xA.U0)(t.id_hash),
                "aria-label": g.intl.string(g.t.E4MJNt),
                children: (0, p.jsx)(cV.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function xD(e) {
    let { title: t, children: i } = e,
        n = N.useId();
    return (0, p.jsxs)(R.B, {
        role: "group",
        "aria-labelledby": n,
        gap: "xl",
        padding: { top: 8, bottom: 8 },
        children: [
            (0, p.jsx)(eA.D, { id: n, variant: "heading-md/semibold", color: "text-muted", children: t }),
            (0, p.jsx)(R.B, { role: "list", gap: "xl", children: i }),
        ],
    });
}
function xG() {
    let { currentSession: e } = (0, xh.r)();
    return null == e
        ? (0, p.jsx)(uP.y, {})
        : (0, p.jsx)(xD, { title: g.intl.string(g.t.LLS19o), children: (0, p.jsx)(xL, { session: e, current: !0 }) });
}
let xP = (0, o.E2)(u.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            return (0, SB._A)("CurrentSessionSetting") ? (0, p.jsx)(xG, {}) : (0, p.jsx)(xb, {});
        },
        useSearchTerms: () => [],
    }),
    xU = (0, o.E2)(u.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = (0, xh.r)();
            return (0, p.jsx)(lO.D, {
                label: g.intl.string(g.t.Vij32M),
                description: g.intl.string(g.t.OTXyaf),
                children: (0, p.jsx)(eh.$, {
                    onClick: () => (0, xA.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: g.intl.string(g.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [g.intl.string(g.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = (0, xh.r)();
            return e.length > 0;
        },
    });
function xV() {
    return (0, p.jsx)(xR, {
        icon: xE.W,
        label: g.intl.string(g.t.iUa0sn),
        description: g.intl.format(g.t["044+8i"], {
            onClick: () =>
                (0, ej.openUserSettings)(u.X.ACCOUNT_PANEL, { analyticsLocations: [eV.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
function xM() {
    let { otherSessions: e } = (0, xh.r)(),
        t = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
    return (0, p.jsxs)(xD, {
        title: g.intl.string(g.t.xx1MWc),
        children: [e.map((e) => (0, p.jsx)(xL, { session: e }, e.id_hash)), t?.mfaEnabled ? null : (0, p.jsx)(xV, {})],
    });
}
let xk = (0, o.E2)(u.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            return (0, SB._A)("OtherSessionsSetting") ? (0, p.jsx)(xM, {}) : (0, p.jsx)(xI, {});
        },
        useSearchTerms: () => [g.intl.string(g.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = (0, xh.r)(),
                t = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    xw = (0, o.zZ)(u.X.SESSIONS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.mEndXM),
        useSubtitle: () => g.intl.string(g.t.b7ZpTM),
        initialize: () => {
            (0, xA.GY)();
        },
        buildLayout: () => [xP, xk, xU],
        useSearchTerms: () => [
            g.intl.string(g.t["+1h0k/"]),
            g.intl.string(g.t.LLS19o),
            g.intl.string(g.t.xx1MWc),
            g.intl.string(g.t.lSWsrd),
        ],
    }),
    xB = (0, o.zZ)(u.X.SESSIONS_CATEGORY, {
        useSearchTerms: () => [
            g.intl.string(g.t["+1h0k/"]),
            g.intl.string(g.t.LLS19o),
            g.intl.string(g.t.xx1MWc),
            g.intl.string(g.t.Vij32M),
            g.intl.string(g.t.lSWsrd),
        ],
        buildLayout: () => [xP, xk],
        initialize: () => (
            (0, xA.GY)(),
            () => {
                (0, xA.ZQ)();
            }
        ),
        useInlineNotice: function () {
            return N.useMemo(() => ({ type: e_.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: xf }), []);
        },
    }),
    xF = (0, o.t_)(u.X.SESSIONS_PANEL, {
        useTitle: () => ((0, SB._A)("SessionsPanel") ? g.intl.string(g.t.mEndXM) : g.intl.string(g.t["+1h0k/"])),
        useObscuredNotice: uD.L,
        buildLayout: () => ((0, SB.pC)("SessionsPanel") ? [xw] : [xB]),
    }),
    xz = (0, o.i4)(u.X.SESSIONS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["+1h0k/"]),
        icon: xE.W,
        usePredicate: () => !(0, SB._A)("SessionsPanel"),
        buildLayout: () => [xF],
    }),
    xX = (0, o.t0)(u.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [xF],
        usePredicate: () => (0, SB._A)("AccountSessionsNestedPanel"),
        initialize: () => {
            (0, xA.GY)();
        },
        useTrailingDecoration: () => ({
            type: e_.xn.TEXT,
            useText: () => {
                let { currentSession: e, otherSessions: t } = (0, xh.r)(),
                    i = t.length + +(null != e);
                return i > 0 ? g.intl.formatToPlainString(g.t.G7zwOk, { count: i }) : g.intl.string(g.t.MKDeyL);
            },
        }),
    }),
    xY = (0, o.zZ)(u.X.ACCOUNT_AUTHENTICATION_CATEGORY, {
        useTitle: () => g.intl.string(g.t.pKSjEj),
        useInlineNotice: function () {
            return (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.mfaEnabled ?? !1)
                ? { type: e_.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: Sz }
                : null;
        },
        buildLayout: () => [
            xi,
            S$,
            S1,
            S9,
            S3,
            S7,
            xc,
            xm,
            ...((0, SB.pC)("AccountAuthenticationCategory") ? [xX] : []),
        ],
    });
i(204925);
var xH = i(818348);
let xK = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, f.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([i.e("40933"), i.e("19623"), i.e("21007")]).then(i.bind(i, 888363));
            return (i) => (0, p.jsx)(t, { claimRequired: e, ...i });
        },
        { onCloseRequest: e ? xH.tE : null, onCloseCallback: t },
    );
};
var xW = i(876696),
    xZ = i(36149),
    xQ = i(207560);
function xq(e) {
    let t = (0, xQ.fk)(),
        i = (0, xZ.b8)(),
        n = (0, xZ.yM)(),
        l = (0, xZ.Y2)();
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
var xJ = i(516761);
function x$() {
    let e = g.intl.string(g.t.XxRj7f);
    return (0, p.jsxs)(M.E, {
        variant: "text-md/medium",
        children: [
            `${e} • `,
            g.intl.format(xJ.default.WM5adV, {
                handleOnHelpUrlHook: () => window.open(ta.A.getArticleURL(Q.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank"),
            }),
        ],
    });
}
let x0 = (0, o.Tf)(u.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, {
        usePredicate: () => xq("edit"),
        useTitle: () => g.intl.string(g.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: e_._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: x$ }),
        useLabel: () => g.intl.string(g.t.bt75uw),
        onClick: function () {
            (0, f.openModalLazy)(async () => {
                let { default: e } = await i.e("45361").then(i.bind(i, 151080));
                return (t) => (0, p.jsx)(e, { ...t });
            });
        },
    }),
    x1 = (0, o.E2)(u.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, {
        usePredicate: () => xq("info"),
        useSearchTerms: () => [g.intl.string(g.t["/52UYy"])],
        Component: function () {
            return (0, p.jsx)(lO.D, {
                label: g.intl.string(g.t["/52UYy"]),
                layout: "horizontal",
                children: (0, p.jsxs)(R.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "end",
                    gap: "md",
                    children: [
                        (0, p.jsx)(M.E, { variant: "text-md/medium", children: g.intl.string(g.t.XxRj7f) }),
                        (0, p.jsx)("div", {
                            style: { visibility: "hidden" },
                            children: (0, p.jsx)(eh.$, {
                                onClick: xH.tE,
                                text: g.intl.string(g.t.bt75uw),
                                "aria-hidden": !0,
                            }),
                        }),
                    ],
                }),
            });
        },
    });
var x2 = i(139716),
    x3 = i(847599);
function x4() {
    return (0, xZ.yM)() ? g.intl.string(g.t.sK0dmH) : g.intl.string(g.t.lKDPGA);
}
let x5 = (0, o.Tf)(u.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, {
        usePredicate: () => xq("verify"),
        useTitle: () => g.intl.string(g.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: e_._1.TEXT, useText: x4 }),
        useLabel: function () {
            return (0, xZ.yM)() ? g.intl.string(g.t["9KiIz6"]) : g.intl.string(g.t.DVywUB);
        },
        onClick: () => x2.A.showAgeVerificationGetStartedModal({ entryPoint: x3.q1.ACCOUNT_AGE_GROUP }),
    }),
    x8 = (0, o.Tf)(u.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => g.intl.string(g.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: e_._1.TEXT, useText: () => g.intl.string(g.t.qxk9zo) }),
        useLabel: () => g.intl.string(g.t.BleMPB),
        onClick: () => xK(),
    });
function x6(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function x7(e) {
    let [t, i] = e.split("@");
    return `${"*".repeat(t.length)}@${i}`;
}
function x9(e) {
    let { text: t, censor: i, revealLabel: n, hideLabel: l, redesign: s = !1 } = e,
        [r, a] = N.useState(!1),
        o = r ? t : i(t);
    return (0, p.jsxs)(R.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        justify: s ? "end" : "start",
        children: [
            s ? (0, p.jsx)(M.E, { variant: "text-md/medium", children: o }) : o,
            (0, p.jsx)(B.Q, {
                variant: "primary",
                textVariant: s ? "text-md/medium" : "text-sm/medium",
                "aria-label": r ? l : n,
                onClick: () => a(!r),
                text: r ? g.intl.string(g.t.fgq1gs) : g.intl.string(g.t.dcztdU),
            }),
        ],
    });
}
function pe() {
    let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.email);
    return null == e
        ? (0, p.jsx)(M.E, { variant: "text-md/medium", children: g.intl.string(g.t["8SfTN/"]) })
        : (0, p.jsx)(x9, {
              text: e,
              censor: x7,
              revealLabel: g.intl.string(g.t["Zvx+yV"]),
              hideLabel: g.intl.string(g.t.nqTD4d),
              redesign: !0,
          });
}
let pt = (0, o.Tf)(u.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => g.intl.string(g.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: e_._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: pe }),
    useLabel: function () {
        return null == (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.email)
            ? g.intl.string(g.t.OYkgVk)
            : g.intl.string(g.t.bt75uw);
    },
    useAriaLabel: function () {
        return null == (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.email)
            ? g.intl.string(g.t["pvBD+W"])
            : g.intl.string(g.t["8peUT0"]);
    },
    onClick: function () {
        (0, f.openModalLazy)(async () => {
            let { default: e } = await Promise.all([i.e("28450"), i.e("20577"), i.e("76660")]).then(i.bind(i, 121343));
            return (t) => (0, p.jsx)(e, { ...t });
        });
    },
});
function pi() {
    let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, p.jsx)(M.E, { variant: "text-md/medium", children: g.intl.string(g.t.I5kDqj) })
        : (0, p.jsx)(R.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, p.jsx)(x9, {
                  text: t,
                  censor: x6,
                  revealLabel: g.intl.string(g.t.eY3xlT),
                  hideLabel: g.intl.string(g.t["jllbv+"]),
                  redesign: !0,
              }),
          });
}
let pn = (0, o.Tf)(u.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => g.intl.string(g.t.kerONq),
    useAriaLabel: function () {
        return null == (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.phone)
            ? g.intl.string(g.t["SfUuE+"])
            : g.intl.string(g.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: e_._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: pi }),
    useLabel: function () {
        return null == (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.phone)
            ? g.intl.string(g.t.OYkgVk)
            : g.intl.string(g.t.bt75uw);
    },
    onClick: function () {
        null == t3.default.getCurrentUser()?.phone
            ? (0, f.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.resolve().then(i.bind(i, 615715));
                      return (t) => (0, p.jsx)(e, { reason: xn.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: xu.V },
              )
            : (0, f.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([i.e("36874"), i.e("89061")]).then(i.bind(i, 359012));
                  return (t) => (0, p.jsx)(e, { ...t });
              });
    },
});
function pl() {
    let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function ps() {
    let e = (0, EL.EC)(),
        t = e?.nick?.[0] ?? null,
        i = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
    if (null == i) return null;
    let n = i.hasUniqueUsername() ? i.username : `${i.username}#${i.discriminator}`;
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsx)(M.E, { variant: "text-md/medium", children: n }),
            null != t &&
                (0, p.jsx)(e0.m, {
                    __unsupportedReactNodeAsText: t,
                    "aria-label": !1,
                    children: (0, p.jsx)(sj.E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: w.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let pr = (0, o.Tf)(u.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => g.intl.string(g.t.qqhR3L),
        useTrailingContent: () => ({ type: e_._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: ps }),
        useLabel: () => g.intl.string(g.t.bt75uw),
        useAriaLabel: () => g.intl.string(g.t.JECa91),
        useSubtitle: () => (pl() ? g.intl.string(g.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: pl,
        onClick: function () {
            (0, f.openModalLazy)(async () => {
                let { default: e } = await Promise.all([i.e("2888"), i.e("20429"), i.e("13161")]).then(
                    i.bind(i, 331632),
                );
                return (t) => (0, p.jsx)(e, { ...t });
            });
        },
    }),
    pa = (0, o.zZ)(u.X.ACCOUNT_INFO_CATEGORY, {
        usePredicate: () => (0, O.bG)([t3.default], () => null != t3.default.getCurrentUser()),
        useTitle: () => g.intl.string(g.t.apNo4l),
        useInlineNotice: function () {
            let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
            return null == e
                ? null
                : e.isClaimed()
                  ? null == e.email || e.verified
                      ? null
                      : {
                            type: e_.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            useTitle: () => g.intl.string(g.t.tuGzBT),
                            useText: () => g.intl.string(g.t.NAzplE),
                            button: { useText: () => g.intl.string(g.t.lm1UKt), onClick: () => (0, xW.S)(e) },
                        }
                  : {
                        type: e_.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        useTitle: () => g.intl.string(g.t["/3qnL/"]),
                        useText: () => g.intl.string(g.t.qKs3vg),
                        button: { useText: () => g.intl.string(g.t["7psymi"]), onClick: () => xK() },
                    };
        },
        buildLayout: () => [pr, x8, pt, pn, x5, x0, x1],
    }),
    po = (0, o.Tf)(u.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => g.intl.string(g.t.lQsY7B),
        useSubtitle: () => xo(!0),
        useDisabled: () => null !== xo(!0),
        useLabel: () => g.intl.string(g.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, O.bG)([d1.default], () => d1.default.hasTOTPEnabled()),
                t = xa() === xr.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, lt.A)({
                title: g.intl.string(g.t["D+aE7g"]),
                subtitle: g.intl.string(g.t.EA4ZEk),
                variant: "critical",
                confirmText: g.intl.string(g.t.N86XcP),
                onConfirm: () => SF.A.disable(),
            }),
    }),
    pu = (0, o.zZ)(u.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => g.intl.string(g.t.RumMFo),
        useSubtitle: () => g.intl.string(g.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, O.bG)([d1.default], () => d1.default.hasTOTPEnabled()),
                t = xa() === xr.AVAILABLE;
            if (!e && t)
                return {
                    type: e_.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: e_.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: g.intl.string(g.t.cTNUeD),
                            onClick: SZ.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (xa()) {
                case xr.UNAVAILABLE_NO_CRYPTO:
                    return { type: e_.lT.INLINE_NOTICE, noticeType: "info", useText: () => g.intl.string(g.t.PhHhsj) };
                case xr.UNAVAILABLE_UNVERIFIED:
                    return {
                        type: e_.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        useText: () => g.intl.string(g.t.uggF7o),
                    };
                case xr.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [po],
    });
var pd = i(32880),
    pc = i(663417);
function pg() {
    (0, f.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(i.bind(i, 662758));
        return (t) =>
            (0, p.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    SF.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                        var t;
                        return (
                            (t = e),
                            void (0, f.openModalLazy)(
                                async () => {
                                    let { default: e } = await Promise.resolve().then(i.bind(i, 518142));
                                    return (i) => (0, p.jsx)(e, { ...i, password: t });
                                },
                                { stackingBehavior: "stack" },
                            )
                        );
                    }),
                title: g.intl.string(g.t.PsQmzU),
                actionText: g.intl.string(g.t.ajkYcF),
            });
    });
}
var pm = i(526122);
function pA(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function ph() {
    let e = SX.A.getVerificationKey();
    try {
        await SF.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, h1.P0)({
            message: e.body?.message ?? g.intl.string(g.t.F8FvUy),
            type: h3.Ck.FAILURE,
            id: "backup-code-regen-failed",
        });
    }
}
function pE(e) {
    let {
            code: { code: t, consumed: i },
        } = e,
        n = pA(t),
        l = N.useRef(null),
        s = (0, p.jsxs)(p.Fragment, {
            children: [(0, p.jsx)(S4.P, { checked: i }), (0, p.jsx)(M.E, { variant: "text-md/normal", children: n })],
        });
    return d8.p5
        ? (0, p.jsx)(V.D, {
              tag: "li",
              className: ew()(pm.aY, pm.vk),
              innerRef: l,
              onKeyDown: (e) => {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, d8.C)(n), l?.current?.focus());
              },
              onClick: () => {
                  (0, d8.C)(n),
                      (0, h1.P0)({ message: g.intl.string(g.t.mGZ66D), type: h3.Ck.SUCCESS, id: "backup-code-copied" });
              },
              children: s,
          })
        : (0, p.jsx)("li", { className: pm.aY, children: s });
}
let pT = (0, o.zZ)(u.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => g.intl.string(g.t.fC9qV0),
        useSubtitle: () =>
            (0, O.bG)([SX.A], () => SX.A.getBackupCodes().length > 0)
                ? g.intl.format(g.t.tp7zEK, {})
                : g.intl.string(g.t.LoOi4S),
        usePredicate: S2,
        buildLayout: () => [pS],
    }),
    pS = (0, o.E2)(u.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.fC9qV0)],
        Component: function () {
            let e = (0, O.bG)([SX.A], () => SX.A.getBackupCodes()),
                t = N.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: i } = e;
                                return `* ${pA(t)}` + (i ? ` (${g.intl.string(g.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, p.jsx)(eh.$, { text: g.intl.string(g.t.Jc2myK), size: "sm", variant: "secondary", onClick: pg })
                : (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsx)("ul", {
                              className: pm.E5,
                              children: e.map((e) => (0, p.jsx)(pE, { code: e }, e.code)),
                          }),
                          (0, p.jsxs)(aS.e, {
                              size: "sm",
                              children: [
                                  (0, p.jsx)(SH.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, p.jsx)(eh.$, {
                                          text: g.intl.string(g.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: pd.s,
                                      }),
                                  }),
                                  (0, p.jsx)(eh.$, {
                                      text: g.intl.string(g.t["3x962E"]),
                                      variant: "secondary",
                                      icon: pc.f,
                                      onClick: ph,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    px = (0, o.Tf)(u.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => g.intl.string(g.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = N.useState(!1),
                i = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.phone);
            return null == i
                ? null
                : g.intl.format(e ? g.t["xDBk/I"] : g.t.bnKdnl, {
                      phone: e ? i : i.slice(-4),
                      toggleButton: () =>
                          (0, p.jsx)(B.Q, {
                              text: e ? g.intl.string(g.t.fgq1gs) : g.intl.string(g.t.dcztdU),
                              onClick: () => t(!e),
                          }),
                  });
        },
        useLabel: () => g.intl.string(g.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.hasFlag(Q.nhx.MFA_SMS) ?? !1),
        onClick: () =>
            void (0, f.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 662758));
                return (t) =>
                    (0, p.jsx)(e, {
                        ...t,
                        handleSubmit: SF.A.disableSMS,
                        title: g.intl.string(g.t.KLWnit),
                        children: g.intl.string(g.t["W0/Duf"]),
                    });
            }),
    }),
    pp = (0, o.zZ)(u.X.SMS_AUTH_CATEGORY, {
        useTitle: () => g.intl.string(g.t.wuHuI5),
        useSubtitle: () => (0, O.bG)([t3.default], () => xs(t3.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.hasFlag(Q.nhx.MFA_SMS) ?? !1),
                t = (0, O.bG)([t3.default], () => null != xs(t3.default.getCurrentUser()));
            if (!e)
                return {
                    type: e_.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: e_.UV.BUTTON,
                            id: "sms-setup-button",
                            text: g.intl.string(g.t.Age7yU),
                            onClick: pN,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = xa(),
                t = S2(),
                i = (0, O.bG)([d1.default], () => d1.default.hasTOTPEnabled());
            return e === xr.AVAILABLE && t && i;
        },
        buildLayout: () => [px],
    });
function pN() {
    let e = t3.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            (t = { reason: xn.d.USER_SETTINGS_UPDATE, onAddedPhone: SF.A.enableSMS }),
                (0, f.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.resolve().then(i.bind(i, 615715));
                        return (i) => (0, p.jsx)(e, { ...i, ...t });
                    },
                    { modalKey: xu.V },
                );
        } else SF.A.enableSMS();
}
var p_ = i(665671),
    pf = i(442433),
    pb = i(917136),
    pC = i(976910),
    pI = i(551386);
function pv(e) {
    let { credential: t } = e;
    return (0, p.jsxs)("li", {
        className: pI.e,
        children: [
            (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(M.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, p.jsx)(M.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: g.intl.format(g.t["7JgxF5"], { lastUsed: (0, xh.Y)(t.last_used) }),
                        }),
                ],
            }),
            (0, p.jsx)(sx.K, {
                icon: gV.j,
                variant: "icon-only",
                size: "sm",
                "aria-label": g.intl.string(g.t["+nrTbK"]),
                onClick: (e) => {
                    (0, pf.L3)(e, async () => {
                        let { default: e } = await i.e("32529").then(i.bind(i, 41e3));
                        return (i) => (0, p.jsx)(e, { credential: t, ...i });
                    });
                },
            }),
        ],
    });
}
let pj = (0, o.zZ)(u.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.IBq4Y3),
        useSubtitle: () => g.intl.string(g.t.yK9edS),
        useHeaderDecoration: function () {
            if (xa() === xr.AVAILABLE)
                return {
                    type: e_.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: e_.UV.BUTTON,
                            id: "add-security-key-button",
                            text: g.intl.string(g.t["Tzs/fw"]),
                            icon: cR.j,
                            onClick: p_.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (xa()) {
                    case xr.UNAVAILABLE_NO_CRYPTO:
                        return {
                            type: e_.lT.INLINE_NOTICE,
                            noticeType: "info",
                            useText: () => g.intl.string(g.t.bWCGI9),
                        };
                    case xr.UNAVAILABLE_UNVERIFIED:
                        return {
                            type: e_.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            useText: () => g.intl.string(g.t.uggF7o),
                        };
                    case xr.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [py],
    }),
    py = (0, o.E2)(u.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [g.intl.string(g.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, O.cf)([pC.A], () => ({
                hasFetchedCredentials: pC.A.hasFetchedCredentials(),
                credentials: pC.A.getCredentials(),
            }));
            return (N.useEffect(() => {
                t || pb.JQ();
            }, [t]),
            t)
                ? (0, p.jsx)(R.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, p.jsx)(pv, { credential: e }, e.id)),
                  })
                : (0, p.jsx)(uP.y, {});
        },
    }),
    pO = (0, o.t_)(u.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => g.intl.string(g.t.m0FidJ),
        buildLayout: () => [pj, pu, pp, pT],
    }),
    pR = (0, o.t0)(u.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => ({
            type: e_.xn.TEXT,
            useText: () => (S2() ? g.intl.string(g.t.lQsY7B) : g.intl.string(g.t.WsUuTt)),
        }),
        buildLayout: () => [pO],
    }),
    pL = (0, o.zZ)(u.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => g.intl.string(g.t["0iH2vc"]),
        buildLayout: () => [xt, pR, xX],
    });
function pD(e) {
    let { currentUser: t } = e;
    return t.isClaimed()
        ? null == t.email
            ? null
            : t.verified
              ? void 0
              : (0, p.jsxs)(y.w, {
                    type: "warning",
                    children: [
                        (0, p.jsx)(eA.D, { variant: "heading-md/medium", children: g.intl.string(g.t.tuGzBT) }),
                        (0, p.jsx)(M.E, {
                            variant: "text-sm/normal",
                            className: S5.PA,
                            children: g.intl.string(g.t.NAzplE),
                        }),
                        (0, p.jsx)(xW.A, { size: "sm", variant: "secondary" }),
                    ],
                })
        : (0, p.jsxs)(y.w, {
              type: "critical",
              children: [
                  (0, p.jsx)(eA.D, { variant: "heading-md/medium", children: g.intl.string(g.t["/3qnL/"]) }),
                  (0, p.jsx)(M.E, { variant: "text-sm/normal", className: S5.PA, children: g.intl.string(g.t.qKs3vg) }),
                  (0, p.jsx)(eh.$, {
                      variant: "secondary",
                      size: "sm",
                      text: g.intl.string(g.t["7psymi"]),
                      onClick: () => xK(),
                  }),
              ],
          });
}
var pG = i(297413),
    pP = i(50268),
    pU = i(922301),
    pV = i(262),
    pM = i(68085),
    pk = i(915614),
    pw = i(475543);
let pB = li.Ay.getEnableHardwareAcceleration() ? iH.Js : iH.eu;
function pF(e) {
    let t = (0, Eh.X)("UserSettingsAccountProfileCard");
    return N.useCallback(() => {
        t ? (0, ET.openUserProfileModal)({ userId: e }) : (0, ej.openUserSettings)(u.X.PROFILE_PANEL);
    }, [t, e]);
}
function pz(e) {
    let { className: t, user: n } = e,
        l = N.useRef(null),
        s = (0, EL.EC)(),
        r = s?.nick?.[0] ?? null,
        [a, o] = N.useState(!1);
    N.useEffect(() => {
        o(null != l.current && l.current.scrollWidth > l.current.clientWidth);
    }, [n.username]);
    let u = !n.isClaimed(),
        d = u ? g.intl.string(g.t["7Ngnyr"]) : void 0;
    return (0, p.jsxs)("div", {
        className: ew()(pw.ZZ, t),
        children: [
            (0, p.jsx)("div", {
                className: pw.NQ,
                children: (0, p.jsxs)("div", {
                    className: pw.Fj,
                    children: [
                        (0, p.jsx)(M.E, {
                            variant: "text-md/medium",
                            className: pw.p9,
                            children: g.intl.string(g.t.qqhR3L),
                        }),
                        (0, p.jsxs)("div", {
                            className: pw.HR,
                            ref: l,
                            children: [
                                (0, p.jsx)(M.E, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: n.username,
                                }),
                                !n.hasUniqueUsername() &&
                                    (0, p.jsxs)(M.E, {
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
                (0, p.jsx)("div", {
                    className: pw.a$,
                    children: (0, p.jsx)(e0.m, {
                        __unsupportedReactNodeAsText: r,
                        "aria-label": !1,
                        children: (0, p.jsx)(sj.E, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: w.A.colors.STATUS_WARNING.css,
                        }),
                    }),
                }),
            (0, p.jsx)(e0.m, {
                text: d,
                children: (0, p.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: pw.pr,
                    children: (0, p.jsx)(eh.$, {
                        variant: "secondary",
                        size: "sm",
                        text: a ? g.intl.string(g.t["16kTw/"]) : g.intl.string(g.t.bt75uw),
                        disabled: u,
                        "aria-label": g.intl.string(g.t.JECa91),
                        onClick: () =>
                            (0, f.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([i.e("2888"), i.e("20429"), i.e("13161")]).then(
                                    i.bind(i, 331632),
                                );
                                return (t) => (0, p.jsx)(e, { ...t });
                            }),
                    }),
                }),
            }),
        ],
    });
}
function pX(e) {
    let { user: t, className: i } = e,
        n = pF(t.id),
        l = (0, EL.EC)(),
        s = l?.nick?.[0] ?? null,
        r = TS.Ay.getGlobalName(t),
        a = N.useRef(null),
        [o, u] = N.useState(!1);
    return (
        N.useEffect(() => {
            u(null != a.current && a.current.scrollWidth > a.current.clientWidth);
        }, [r]),
        (0, p.jsxs)("div", {
            className: ew()(pw.ZZ, i),
            children: [
                (0, p.jsx)("div", {
                    className: pw.NQ,
                    children: (0, p.jsxs)("div", {
                        className: pw.Fj,
                        children: [
                            (0, p.jsx)(M.E, {
                                variant: "text-md/medium",
                                className: pw.p9,
                                children: g.intl.string(g.t["9AjdkD"]),
                            }),
                            (0, p.jsx)("div", {
                                className: pw.HR,
                                ref: a,
                                children: (0, p.jsx)(M.E, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: null == r ? g.intl.string(g.t.ep5kjK) : r,
                                }),
                            }),
                        ],
                    }),
                }),
                null != s &&
                    (0, p.jsx)("div", {
                        className: pw.a$,
                        children: (0, p.jsx)(e0.m, {
                            __unsupportedReactNodeAsText: s,
                            "aria-label": !1,
                            children: (0, p.jsx)(sj.E, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: w.A.colors.STATUS_WARNING.css,
                            }),
                        }),
                    }),
                (0, p.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: pw.pr,
                    children: (0, p.jsx)(eh.$, {
                        variant: "secondary",
                        size: "sm",
                        text: o ? g.intl.string(g.t["16kTw/"]) : g.intl.string(g.t.bt75uw),
                        "aria-label": g.intl.string(g.t.YXeWYM),
                        onClick: n,
                    }),
                }),
            ],
        })
    );
}
function pY(e) {
    let t,
        { className: n, user: l } = e;
    if (l.isClaimed())
        if (null == l.email)
            t = {
                buttonText: g.intl.string(g.t.OYkgVk),
                buttonAriaLabel: g.intl.string(g.t["pvBD+W"]),
                valueMessage: g.intl.string(g.t["8SfTN/"]),
                handleClick: () =>
                    (0, f.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([i.e("28450"), i.e("20577"), i.e("76660")]).then(
                            i.bind(i, 121343),
                        );
                        return (t) => (0, p.jsx)(e, { ...t });
                    }),
            };
        else {
            let { email: e } = l;
            t = {
                buttonText: g.intl.string(g.t.bt75uw),
                buttonAriaLabel: g.intl.string(g.t["8peUT0"]),
                valueMessage: (0, p.jsx)(x9, {
                    text: e,
                    censor: x7,
                    revealLabel: g.intl.string(g.t["Zvx+yV"]),
                    hideLabel: g.intl.string(g.t.nqTD4d),
                }),
                handleClick: () =>
                    (0, f.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([i.e("28450"), i.e("20577"), i.e("76660")]).then(
                            i.bind(i, 121343),
                        );
                        return (t) => (0, p.jsx)(e, { ...t });
                    }),
            };
        }
    else
        t = {
            buttonText: g.intl.string(g.t.BleMPB),
            buttonAriaLabel: g.intl.string(g.t.BleMPB),
            valueMessage: g.intl.string(g.t.qxk9zo),
            handleClick: () => xK(),
        };
    return (0, p.jsxs)("div", {
        className: ew()(pw.ZZ, n),
        children: [
            (0, p.jsx)("div", {
                className: pw.NQ,
                children: (0, p.jsxs)("div", {
                    children: [
                        (0, p.jsx)(M.E, {
                            variant: "text-md/medium",
                            className: pw.p9,
                            children: g.intl.string(g.t.tlZllC),
                        }),
                        (0, p.jsx)("div", {
                            children: (0, p.jsx)(M.E, {
                                tag: "span",
                                color: "text-strong",
                                variant: "text-md/normal",
                                children: t.valueMessage,
                            }),
                        }),
                    ],
                }),
            }),
            (0, p.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: pw.pr,
                children: (0, p.jsx)(eh.$, {
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
function pH(e) {
    let t,
        { className: n, user: l } = e;
    if (!l.isClaimed()) return null;
    let { phone: s, email: r } = l,
        a = null != s;
    return (
        (t = a
            ? (0, p.jsx)(x9, {
                  text: s,
                  censor: x6,
                  revealLabel: g.intl.string(g.t.eY3xlT),
                  hideLabel: g.intl.string(g.t["jllbv+"]),
              })
            : g.intl.string(g.t.I5kDqj)),
        (0, p.jsxs)("div", {
            className: ew()(pw.ZZ, n),
            children: [
                (0, p.jsx)("div", {
                    className: pw.NQ,
                    children: (0, p.jsxs)("div", {
                        children: [
                            (0, p.jsx)(M.E, {
                                variant: "text-md/medium",
                                className: pw.p9,
                                children: g.intl.string(g.t.kerONq),
                            }),
                            (0, p.jsx)("div", {
                                children: (0, p.jsx)(M.E, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: t,
                                }),
                            }),
                        ],
                    }),
                }),
                (0, p.jsxs)("div", {
                    className: pw.PU,
                    children: [
                        a && null != r
                            ? (0, p.jsx)("div", {
                                  className: ew()(pw.pr, pw.DT),
                                  children: (0, p.jsx)(B.Q, {
                                      textVariant: "text-sm/medium",
                                      variant: "secondary",
                                      text: g.intl.string(g.t.N86XcP),
                                      "aria-label": g.intl.string(g.t.Rpn4A3),
                                      onClick: function () {
                                          (0, f.openModal)((e) =>
                                              (0, p.jsx)(SW.default, {
                                                  ...e,
                                                  title: g.intl.string(g.t["3CTiKi"]),
                                                  children: l.hasFlag(Q.nhx.MFA_SMS)
                                                      ? g.intl.string(g.t.jrhJyo)
                                                      : void 0,
                                                  actionText: g.intl.string(g.t.N86XcP),
                                                  handleSubmit: (e) => xn.A.removePhone(e, xn.d.USER_SETTINGS_UPDATE),
                                              }),
                                          );
                                      },
                                  }),
                              })
                            : null,
                        (0, p.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: pw.pr,
                            children: (0, p.jsx)(eh.$, {
                                variant: "secondary",
                                size: "sm",
                                text: a ? g.intl.string(g.t.bt75uw) : g.intl.string(g.t.OYkgVk),
                                "aria-label": a ? g.intl.string(g.t.YDabSe) : g.intl.string(g.t["SfUuE+"]),
                                onClick: function () {
                                    (0, f.openModalLazy)(
                                        async () => {
                                            let { default: e } = await Promise.resolve().then(i.bind(i, 615715));
                                            return (t) => (0, p.jsx)(e, { reason: xn.d.USER_SETTINGS_UPDATE, ...t });
                                        },
                                        { modalKey: xu.V },
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
function pK(e) {
    let { user: t } = e,
        i = (0, pP.A)({ id: t.id, label: g.intl.string(g.t["/AXYnE"]) }),
        n = c.Q_.useSetting(),
        l = N.useRef(null);
    return n && d8.p5
        ? (0, p.jsx)(G.Y, {
              targetElementRef: l,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, p.jsx)(P.W, {
                      "data-menu-migrated": !0,
                      onClose: t,
                      onSelect: void 0,
                      navId: "copy-id",
                      "aria-label": g.intl.string(g.t.RANhlE),
                      children: i,
                  });
              },
              children: (e) =>
                  (0, p.jsx)(V.D, {
                      ...e,
                      innerRef: l,
                      className: pw.SI,
                      "aria-label": g.intl.string(g.t.DEoVWZ),
                      children: (0, p.jsx)(gV.j, { size: "md", color: "currentColor", className: pw.D$ }),
                  }),
          })
        : null;
}
function pW(e) {
    let { className: t } = e,
        n = (0, xZ.b8)(),
        l = (0, xZ.yM)(),
        s = (0, xZ.Y2)(),
        r = !n || l,
        a = g.intl.string(g.t["9KiIz6"]),
        o = g.intl.string(g.t.DVywUB),
        u = g.intl.string(g.t.lKDPGA),
        d = N.useCallback(() => {
            window.open(ta.A.getArticleURL(Q.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank");
        }, []),
        c = N.useCallback(() => {
            (0, f.openModalLazy)(async () => {
                let { default: e } = await i.e("45361").then(i.bind(i, 151080));
                return (t) => (0, p.jsx)(e, { ...t });
            });
        }, []),
        m = N.useMemo(
            () =>
                n
                    ? l
                        ? g.intl.string(g.t.sK0dmH)
                        : s
                          ? g.intl.format(xJ.default.WM5adV, { handleOnHelpUrlHook: d })
                          : g.intl.string(g.t.XxRj7f)
                    : u,
            [n, l, s, u, d],
        ),
        A = n && !l && s;
    return (0, p.jsxs)("div", {
        className: ew()(pw.ZZ, t),
        children: [
            (0, p.jsx)("div", {
                className: pw.NQ,
                children: (0, p.jsxs)("div", {
                    children: [
                        (0, p.jsx)(M.E, {
                            variant: "text-md/medium",
                            className: pw.p9,
                            children: g.intl.string(g.t["/52UYy"]),
                        }),
                        (0, p.jsx)("div", {
                            children: (0, p.jsxs)(M.E, {
                                tag: "span",
                                color: "text-strong",
                                variant: "text-md/normal",
                                children: [s && n && !l ? `${g.intl.string(g.t.XxRj7f)} • ` : null, m],
                            }),
                        }),
                    ],
                }),
            }),
            A &&
                (0, p.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: pw.pr,
                    children: (0, p.jsx)(eh.$, {
                        variant: "secondary",
                        size: "sm",
                        text: g.intl.string(g.t.bt75uw),
                        "aria-label": g.intl.string(g.t.bt75uw),
                        onClick: c,
                    }),
                }),
            r &&
                !A &&
                (0, p.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: pw.pr,
                    children: (0, p.jsx)(eh.$, {
                        variant: "secondary",
                        size: "sm",
                        text: l ? a : o,
                        "aria-label": l ? a : o,
                        onClick: () => x2.A.showAgeVerificationGetStartedModal({ entryPoint: x3.q1.ACCOUNT_AGE_GROUP }),
                    }),
                }),
        ],
    });
}
function pZ(e) {
    let { currentUser: t } = e,
        i = pF(t.id),
        n = (0, Ta.Ay)(t.id),
        l = (0, pV.A)(n),
        s = c.jP.useSetting(),
        r = (0, O.bG)([EA.A], () => EA.A.getErrors()),
        a = r?.avatar?.[0],
        { avatarSrc: o, avatarDecorationSrc: u } = (0, EE.A)({ userId: t?.id, size: iK._3.SIZE_80 }),
        d = (0, xQ.fk)();
    return (0, p.jsxs)("div", {
        className: pw.DM,
        children: [
            (0, p.jsx)(pk.o, {
                user: t,
                displayProfile: n,
                avatarSize: iK._3.SIZE_80,
                avatarOffsetX: 16,
                avatarOffsetY: -22,
                bannerWidth: 696,
                bannerHeight: 100,
                themePadding: 0,
            }),
            (0, p.jsxs)("div", {
                className: pw.eF,
                children: [
                    (0, p.jsx)(pB, {
                        className: pw.my,
                        src: o,
                        avatarDecoration: u,
                        status: s,
                        size: iK._3.SIZE_80,
                        "aria-label": t.username,
                    }),
                    (0, p.jsxs)("div", {
                        children: [
                            (0, p.jsxs)("div", {
                                className: pw.Ib,
                                children: [
                                    (0, p.jsx)(pG.A, {
                                        user: t,
                                        className: pw.a1,
                                        discriminatorClass: pw.D2,
                                        displayNameStylesType: pU.G.STATIC,
                                    }),
                                    (0, p.jsx)(pK, { user: t }),
                                ],
                            }),
                            (0, p.jsx)(pM.A, { badges: l, className: pw.C_, badgeClassName: pw.qS }),
                        ],
                    }),
                    (0, p.jsx)(eh.$, {
                        variant: "primary",
                        size: "sm",
                        text: g.intl.string(g.t["2p2aYz"]),
                        onClick: i,
                    }),
                ],
            }),
            (0, p.jsxs)("div", {
                className: pw.Tp,
                children: [
                    null != a
                        ? (0, p.jsx)(M.E, {
                              className: pw.mx,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: a,
                          })
                        : null,
                    (0, p.jsxs)("div", {
                        className: pw.FL,
                        children: [
                            (0, p.jsx)(pX, { className: pw.mS, user: t }),
                            (0, p.jsx)(pz, { user: t }),
                            (0, p.jsx)(pY, { className: pw.Zr, user: t }),
                            (0, p.jsx)(pH, { className: pw.Zr, user: t }),
                            d && (0, p.jsx)(pW, { className: pw.Zr }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
let pQ = (0, o.E2)(u.X.ACCOUNT_PROFILE_SETTING, {
        useSearchTerms: function () {
            let e = [
                    g.intl.string(g.t.LYju5J),
                    g.intl.string(g.t["9AjdkD"]),
                    g.intl.string(g.t["+JkHPw"]),
                    g.intl.string(g.t.oP5zGA),
                    g.intl.string(g.t.Ulqq6K),
                ],
                t = (0, xQ.fk)(),
                i = (0, xZ.Y2)();
            return (
                t &&
                    (e.push(g.intl.string(g.t["/52UYy"])),
                    e.push(g.intl.string(g.t.sK0dmH)),
                    e.push(g.intl.string(g.t.XxRj7f)),
                    e.push(g.intl.string(g.t.DVywUB)),
                    e.push(g.intl.string(g.t["9KiIz6"])),
                    i &&
                        (e.push(g.intl.string(xJ.default.FTawSP)),
                        e.push(g.intl.string(xJ.default["bD//cU"])),
                        e.push(g.intl.string(xJ.default.SH6Tcv)))),
                e
            );
        },
        Component: function () {
            let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
            return (0, p.jsxs)(R.B, {
                gap: "md",
                children: [
                    null != e && (0, p.jsx)(pD, { currentUser: e }),
                    null != e && (0, p.jsx)(pZ, { currentUser: e }),
                ],
            });
        },
    }),
    pq = (0, o.zZ)(u.X.ACCOUNT_PROFILE_CATEGORY, { buildLayout: () => [pQ] });
var pJ = i(656161);
function p$(e) {
    let { currentUser: t, disabled: i, handleDisableAccount: n, handleDeleteAccount: l } = e,
        s = t.isClaimed();
    return (0, p.jsx)(lO.D, {
        label: g.intl.string(g.t.ZKsIks),
        description: s ? g.intl.string(g.t.TIh3Yj) : g.intl.string(g.t.czsGA8),
        children: (0, p.jsxs)(aS.e, {
            size: "sm",
            className: pJ.U,
            children: [
                s
                    ? (0, p.jsx)(eh.$, {
                          variant: "critical-primary",
                          size: "sm",
                          text: g.intl.string(g.t.jf5GGb),
                          disabled: i,
                          onClick: n,
                      })
                    : null,
                (0, p.jsx)(eh.$, {
                    variant: "critical-secondary",
                    size: "sm",
                    text: g.intl.string(g.t["8lQ2rR"]),
                    disabled: i,
                    onClick: l,
                }),
            ],
        }),
    });
}
var p0 = i(425587);
function p1(e) {
    if (e.body.code === Q.t02.INVALID_PASSWORD) throw e;
    (0, ah.A)({ title: g.intl.string(g.t.LX0nT8), subtitle: e.body.message });
}
async function p2() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = t3.default.getCurrentUser();
    if (null == t) return;
    let i = [];
    try {
        i = (await p0.A.fetchTeams(!0)).body;
    } catch {}
    i.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, ah.A)({
              title: g.intl.string(g.t.UNGZDI),
              subtitle: g.intl.format(g.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : H.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, ah.A)({ title: g.intl.string(g.t.I5UrbV), subtitle: g.intl.string(g.t.UyVVan) })
          : t.isClaimed()
            ? (0, f.openModal)((t) =>
                  (0, p.jsx)(SW.default, {
                      ...t,
                      handleSubmit: (t) => (0, Ec.U_)(t, e).then(Q.tEg, p1),
                      title: e ? g.intl.string(g.t["8lQ2rR"]) : g.intl.string(g.t.jf5GGb),
                      actionText: e ? g.intl.string(g.t["8lQ2rR"]) : g.intl.string(g.t.jf5GGb),
                      variant: "critical-primary",
                      children: e ? g.intl.string(g.t.FB4H1D) : g.intl.string(g.t.gk7h32),
                  }),
              )
            : (0, lt.A)({
                  title: g.intl.string(g.t["8lQ2rR"]),
                  subtitle: g.intl.string(g.t.FB4H1D),
                  confirmText: g.intl.string(g.t["8lQ2rR"]),
                  onConfirm: () => (0, Ec.U_)("", !0),
              });
}
let p3 = (0, o.Tf)(u.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => g.intl.string(g.t["gIpzR+"]),
        useSubtitle: () => g.intl.string(g.t.Bd6dOf),
        useLabel: () => g.intl.string(g.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => p2(!0),
    }),
    p4 = (0, o.Tf)(u.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => g.intl.string(g.t["p/Tjtp"]),
        useSubtitle: () => g.intl.string(g.t.YvDmKb),
        useLabel: () => g.intl.string(g.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => p2(!1),
        usePredicate: () => {
            let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    p5 = (0, o.zZ)(u.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [p4, p3] }),
    p8 = (0, o.E2)(u.X.ACCOUNT_REMOVAL_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.ZKsIks), g.intl.string(g.t.jf5GGb), g.intl.string(g.t["8lQ2rR"])],
        Component: function () {
            let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
            return null == e
                ? null
                : (0, p.jsx)(p$, {
                      currentUser: e,
                      handleDisableAccount: () => p2(!1),
                      handleDeleteAccount: () => p2(!0),
                  });
        },
    }),
    p6 = (0, o.zZ)(u.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [p8] });
var p7 = i(308645),
    p9 = i(271995),
    Ne = i(855267);
let Nt = (0, o.E2)(u.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t["16r9jm"])],
        Component: Ne.A,
    }),
    Ni = (0, o.zZ)(u.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [Nt] }),
    Nn = (0, o.t_)(u.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => g.intl.string(g.t["16r9jm"]),
        buildLayout: () => [Ni],
    }),
    Nl = (0, o.t0)(u.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: p9.$b,
        useSubtitle: p9.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: i } = (0, p9._k)();
            return { type: e_.Xy.ICON, icon: i, color: e, backgroundColor: t };
        },
        initialize: () => {
            p7.Yn();
        },
        buildLayout: () => [Nn],
    }),
    Ns = (0, o.zZ)(u.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: () => g.intl.string(g.t["16r9jm"]),
        buildLayout: () => [Nl],
    }),
    Nr = (0, o.zZ)(u.X.ACCOUNT_STANDING_CATEGORY, { buildLayout: () => [Nt] });
var Na = i(834981),
    No = i(840387),
    Nu = i(177953),
    Nd = i(986922),
    Nc = i(602339);
let Ng = (0, o.E2)(u.X.FAMILY_CENTER_SETTING, {
        Component: Nd.p,
        useSearchTerms: () => [
            g.intl.string(Nc.default.RZqaJn),
            g.intl.string(Nc.default.bdBmqy),
            g.intl.string(Nc.default["gVWG+6"]),
            g.intl.string(Nc.default.ahKIJO),
            g.intl.string(Nc.default["8SLtqb"]),
        ],
    }),
    Nm = (0, o.zZ)(u.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [Ng] }),
    NA = (0, o.t_)(u.X.FAMILY_CENTER_PANEL, {
        useTitle: () => g.intl.string(Nc.default.RZqaJn),
        buildLayout: () => [Nm],
    }),
    Nh = (0, o.i4)(u.X.FAMILY_CENTER_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(Nc.default.RZqaJn),
        icon: Nu.n,
        usePersistentBadge: function () {
            return N.useMemo(() => ({ badgeType: e_.Xi.COUNT, useCount: Na.VT }), []);
        },
        getDismissibleBadges: function () {
            return [{ badgeType: e_.Xi.NEW, dismissibleContent: eE.M.FAMILY_CENTER_NEW_BADGE }];
        },
        buildLayout: () => [NA],
    }),
    NE = (0, o.zZ)(u.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => g.intl.string(Nc.default.RZqaJn),
        buildLayout: () => [NT],
    }),
    NT = (0, o.t0)(u.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, Na.Li)() ? g.intl.string(Nc.default.IcMQUP) : g.intl.string(Nc.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, No.Z)(),
                t = (0, Na.Li)();
            return e
                ? t
                    ? g.intl.string(Nc.default.G8lHFU)
                    : g.intl.string(Nc.default.uOLNEZ)
                : g.intl.string(Nc.default.Z53oSM);
        },
        buildLayout: () => [NA],
    });
var NS = (((a = {}).SECURITY = "SECURITY"), (a.STANDING = "STANDING"), a);
let Nx = (0, o.dT)(u.X.ACCOUNT_STANDING_TAB, {
        getTitle: () => g.intl.string(g.t["Vov/9o"]),
        onItemSelect: () => {
            X.default.track(Q.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: NS.STANDING });
        },
        buildLayout: () => [Nr],
    }),
    Np = (0, o.dT)(u.X.ACCOUNT_SECURITY_TAB, {
        getTitle: () => g.intl.string(g.t.Am9YHi),
        onItemSelect: () => {
            X.default.track(Q.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: NS.SECURITY });
        },
        buildLayout: () => [pq, xY, p6],
    });
function NN() {
    let e = t3.default.getCurrentUser();
    return (
        null == e || (0, SB.pC)("Account") || (0, TO.A)(e.id, e.getAvatarURL(void 0, 80)),
        () => {
            SF.A.clearBackupCodes(), (0, Ec.Uo)();
        }
    );
}
let N_ = (0, o.t_)(u.X.ACCOUNT_PANEL, {
        useTitle: () => g.intl.string(g.t["JAIM/m"]),
        initialize: NN,
        useObscuredNotice: uD.L,
        buildLayout: () => [Np, Nx],
    }),
    Nf = (0, o.t_)(u.X.ACCOUNT_PANEL, {
        useTitle: () => g.intl.string(g.t["ldCE/p"]),
        initialize: NN,
        useObscuredNotice: uD.L,
        buildLayout: () => [pa, pL, Ns, NE, p5],
    }),
    Nb = (0, o.i4)(u.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => ((0, SB.pC)("Account") ? g.intl.string(g.t["ldCE/p"]) : g.intl.string(g.t["JAIM/m"])),
        icon: m3.n,
        buildLayout: () => ((0, SB.pC)("Account") ? [Nf] : [N_]),
    });
var NC = i(323384),
    NI = i(824552),
    Nv = i(161236);
let Nj = (0, o.E2)(u.X.AUTHORIZED_APPS_LIST_SETTING, {
        Component: Nv.Ay,
        useSearchTerms: () => [g.intl.string(g.t["f6kk+r"])],
    }),
    Ny = (0, o.zZ)(u.X.AUTHORIZED_APPS_CATEGORY, {
        buildLayout: () => [Nj],
        initialize: () => (
            NI.A.fetch(),
            () => {
                Nv.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    NO = (0, o.t_)(u.X.AUTHORIZED_APPS_PANEL, {
        useTitle: () => g.intl.string(g.t["f6kk+r"]),
        useObscuredNotice: uD.L,
        buildLayout: () => [Ny],
    }),
    NR = (0, o.i4)(u.X.AUTHORIZED_APPS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["f6kk+r"]),
        icon: NC.k,
        buildLayout: () => [NO],
    });
var NL = i(176781),
    ND = i(611371);
let NG = () =>
    (0, p.jsx)(e0.m, { asContainer: !0, text: g.intl.string(g.t["/fgfWh"]), children: (0, p.jsx)(ND.A, {}) });
var NP = i(274372),
    NU = i(399925),
    NV = i(696016);
let NM = (() => {
        let e = [NV.wN];
        for (let t = 10; t <= NV.qh; t += 10) e.push(t);
        return e[e.length - 1] !== NV.qh && e.push(NV.qh), e;
    })(),
    Nk = (0, o.sN)(u.X.CLIPS_AUTO_CLIP_STORAGE_LIMIT, {
        useTitle: () => g.intl.string(g.t.yfsrDI),
        useSubtitle: () => g.intl.string(g.t.vlDHdC),
        minValue: NV.wN,
        maxValue: NV.qh,
        getInitialValue: () => NP.A.getSettings().maxAutoClips,
        onValueRender: (e) => `${Math.floor(e)}`,
        asValueChanges: (e) => NU.e6(Math.floor(e)),
        markers: NM,
        onMarkerRender: (e) => `${Math.floor(e)}`,
    }),
    Nw = (0, o.zD)(u.X.CLIPS_ENABLE_GAME_SIGNALS, {
        useTitle: () => g.intl.string(g.t.iV6KcI),
        useSubtitle: () => g.intl.string(g.t["dJ2tX+"]),
        useValue: () => (0, O.bG)([NP.A], () => NP.A.getSettings().clipSignals.enableGameSignals),
        setValue: (e) => {
            let t = NP.A.getSettings().clipSignals;
            NU.PW({ ...t, enableGameSignals: e });
        },
    }),
    NB = (0, o.zD)(u.X.CLIPS_ENABLE_PHRASE_SIGNALS, {
        useTitle: () => g.intl.string(g.t.nHsilt),
        useSubtitle: () => g.intl.string(g.t["s6wq+m"]),
        useValue: () => (0, O.bG)([NP.A], () => NP.A.getSettings().clipSignals.enablePhraseSignals),
        setValue: (e) => {
            let t = NP.A.getSettings().clipSignals;
            NU.PW({ ...t, enablePhraseSignals: e });
        },
    }),
    NF = (0, o.E2)(u.X.CLIPS_PHRASES, {
        useSearchTerms: () => [g.intl.string(g.t.JIze0o)],
        usePredicate: () => (0, O.bG)([NP.A], () => NP.A.getSettings().clipSignals).enablePhraseSignals,
        Component: function () {
            let e = (0, O.bG)([NP.A], () => NP.A.getSettings().autoClipPhrases),
                [t, i] = N.useState(""),
                n = N.useMemo(() => e.map((e) => ({ id: e, label: e })), [e]),
                l = N.useCallback((e) => {
                    i(e);
                }, []),
                s = N.useCallback(
                    (n) => {
                        if ("Enter" === n.key || "," === n.key) {
                            n.preventDefault();
                            let l = t.trim().toLowerCase();
                            l.length > 0 && !e.includes(l) && (NU.pM([...e, l]), i(""));
                        } else if ("Backspace" === n.key && "" === t && e.length > 0) {
                            let t = e.slice(0, -1);
                            NU.pM(t);
                        }
                    },
                    [t, e],
                ),
                r = N.useCallback(
                    (t) => {
                        let i = Array.from(t)[0],
                            n = e.filter((e) => e !== i);
                        NU.pM(n);
                    },
                    [e],
                );
            return (0, p.jsx)(sP.k, {
                value: t,
                onChange: l,
                onKeyDown: s,
                placeholder: g.intl.string(g.t.zYUZpt),
                leading: n.length > 0 ? { type: "tags", items: n, onRemove: r } : void 0,
            });
        },
    }),
    Nz = (0, o.zZ)(u.X.CLIPS_AUTOMATIC_CLIPPING_CATEGORY, {
        useTitle: () => g.intl.string(g.t.sA0WKL),
        usePredicate: () => {
            let { enableAdvancedSignals: e } = sC.L_.useConfig({ location: "ClipsAutomaticClippingCategory" });
            return e;
        },
        buildLayout: () => [Nk, Nw, NB, NF],
    });
var NX = i(753070);
let NY = (0, o.Hn)(u.X.CLIPS_FRAME_RATE, {
    useTitle: () => g.intl.string(g.t["2wScL1"]),
    useSubtitle: () => g.intl.string(g.t["Rf9+fy"]),
    useValue: () => (0, O.bG)([NP.A], () => NP.A.getSettings().clipsQuality.frameRate),
    setValue: (e) => {
        let { clipsQuality: t } = NP.A.getSettings();
        NU.GS({ resolution: t.resolution, frameRate: e });
    },
    useOptions: () => [
        { id: "15", value: NX.kn.FPS_15, label: g.intl.formatToPlainString(g.t.Qb44XH, { fps: NX.kn.FPS_15 }) },
        { id: "30", value: NX.kn.FPS_30, label: g.intl.formatToPlainString(g.t.Qb44XH, { fps: NX.kn.FPS_30 }) },
        { id: "60", value: NX.kn.FPS_60, label: g.intl.formatToPlainString(g.t.Qb44XH, { fps: NX.kn.FPS_60 }) },
    ],
});
var NH = i(372684);
let NK = (0, o.E2)(u.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
    useSearchTerms: () => [g.intl.string(g.t.SIxrIF)],
    usePredicate: () => (0, O.bG)([NP.A], () => NP.A.getHardwareClassification()) === NH.k9.BELOW_MINIMUM,
    Component: () => (0, p.jsx)(ln.A, { look: ln.k.WARNING, children: g.intl.string(g.t.SIxrIF) }),
});
var NW = i(239892);
let NZ = (0, o.E2)(u.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [g.intl.string(g.t.pf54EU), g.intl.string(g.t["QyB/jK"])],
        Component: () => {
            let e = (0, O.bG)([eb.Ay], () => eb.Ay.getKeybindForAction(Q.hCu.SAVE_CLIP, !0));
            ty()(null != e, "Save clip keybind unset");
            let t = N.useCallback(
                (t) => {
                    tO.A.setKeybind({ ...e, shortcut: t });
                },
                [e],
            );
            return (0, p.jsx)(lO.D, {
                label: g.intl.string(g.t.pf54EU),
                description: g.intl.string(g.t["QyB/jK"]),
                layout: "horizontal",
                children: (0, p.jsx)("div", {
                    className: NW.g,
                    children: (0, p.jsx)(tR.A, { defaultValue: e.shortcut, onChange: t }),
                }),
            });
        },
    }),
    NQ = (0, o.Hn)(u.X.CLIPS_LENGTH, {
        useTitle: () => g.intl.string(g.t.OgfUio),
        useSubtitle: () => g.intl.string(g.t.H7j4tY),
        useValue: () => (0, O.bG)([NP.A], () => NP.A.getSettings().clipsLength),
        setValue: (e) => NU.h$(e),
        useOptions: () => [
            { id: "30s", value: NV.LX.SECONDS_30, label: g.intl.formatToPlainString(g.t["bTFv/3"], { count: 30 }) },
            { id: "1m", value: NV.LX.MINUTES_1, label: g.intl.formatToPlainString(g.t.ICo9Nk, { count: 1 }) },
            { id: "2m", value: NV.LX.MINUTES_2, label: g.intl.formatToPlainString(g.t.ICo9Nk, { count: 2 }) },
        ],
    }),
    Nq = (0, o.E2)(u.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [g.intl.string(g.t["Z+MfqT"])],
        Component: () => (0, p.jsx)(ln.A, { look: ln.k.INFO, children: g.intl.string(g.t["Z+MfqT"]) }),
    }),
    NJ = (0, o.Hn)(u.X.CLIPS_RESOLUTION, {
        useTitle: () => g.intl.string(g.t.aFudZJ),
        useSubtitle: () => g.intl.string(g.t.nIrkW5),
        useValue: () => (0, O.bG)([NP.A], () => NP.A.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = NP.A.getSettings();
            NU.GS({ resolution: e, frameRate: t.frameRate });
        },
        useOptions: () => [
            {
                id: "480p",
                value: NX.on.RESOLUTION_480,
                label: g.intl.formatToPlainString(g.t.TEOC0I, { resolution: NX.on.RESOLUTION_480 }),
            },
            {
                id: "720p",
                value: NX.on.RESOLUTION_720,
                label: g.intl.formatToPlainString(g.t.TEOC0I, { resolution: NX.on.RESOLUTION_720 }),
            },
            {
                id: "1080p",
                value: NX.on.RESOLUTION_1080,
                label: g.intl.formatToPlainString(g.t.TEOC0I, { resolution: NX.on.RESOLUTION_1080 }),
            },
            {
                id: "1440p",
                value: NX.on.RESOLUTION_1440,
                label: g.intl.formatToPlainString(g.t.TEOC0I, { resolution: NX.on.RESOLUTION_1440 }),
            },
            { id: "source", value: NX.on.RESOLUTION_SOURCE, label: g.intl.string(g.t.XjXqzh) },
        ],
    }),
    N$ = (0, o.E2)(u.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [g.intl.string(g.t["0U/hj7"]), g.intl.string(g.t["5zxkdo"])],
        usePredicate: sC.BW,
        Component: () => {
            let e = (0, O.bG)([eb.Ay], () => eb.Ay.getKeybindForAction(Q.hCu.SAVE_CLIP, !0)),
                t = (0, O.bG)([eb.Ay], () => eb.Ay.getKeybindForAction(Q.hCu.SAVE_SCREENSHOT, !0));
            ty()(null != e, "Save clip keybind unset"), ty()(null != t, "Save screenshot keybind unset");
            let i = N.useCallback(
                (e) => {
                    tO.A.setKeybind({ ...t, shortcut: e });
                },
                [t],
            );
            return (0, p.jsx)(lO.D, {
                label: g.intl.string(g.t["0U/hj7"]),
                description: g.intl.string(g.t["5zxkdo"]),
                layout: "horizontal",
                children: (0, p.jsx)("div", {
                    className: NW.g,
                    children: (0, p.jsx)(tR.A, { defaultValue: t.shortcut, onChange: i }),
                }),
            });
        },
    }),
    N0 = (0, o.E2)(u.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [g.intl.string(g.t.s4773E), g.intl.string(g.t.svjwGh)],
        Component: () => {
            let e = (0, O.bG)([NP.A], () => NP.A.getSettings().storageLocation),
                t = N.useRef(!1),
                i = async () => {
                    if (!t.current) {
                        t.current = !0;
                        try {
                            let e = await l3.A.fileManager.showOpenDialog({
                                properties: ["openDirectory", "createDirectory"],
                            });
                            e.length > 0 && NU.HU(e[0]);
                        } finally {
                            t.current = !1;
                        }
                    }
                };
            return (0, p.jsx)(lO.D, {
                label: g.intl.string(g.t.s4773E),
                description: g.intl.string(g.t.svjwGh),
                layout: "horizontal",
                children: (0, p.jsx)(V.D, {
                    "aria-label": g.intl.formatToPlainString(g.t.iMONTj, { storageLocation: e }),
                    onClick: i,
                    children: (0, p.jsx)(sP.k, { tabIndex: -1, value: e, editable: !1, "aria-hidden": !0 }),
                }),
            });
        },
    });
var N1 = i(572164);
let N2 = (0, o.zD)(u.X.CLIPS_ENABLE, {
    useTitle: () => g.intl.string(g.t.h8rgrK),
    useSubtitle: () => g.intl.string(g.t["4Qw3NO"]),
    useValue: () => (0, N1.Et)(),
    setValue: (e) => NU.yO({ clipsEnabled: e, trackAnalytics: !0 }),
});
var N3 = i(915618);
let N4 = (0, o.zD)(u.X.CLIPS_ENABLE_DECOUPLED_CLIPPING, {
        useTitle: () => g.intl.string(g.t.yXvykv),
        useSubtitle: () => g.intl.string(g.t.YP3ujk),
        useValue: N1.XT,
        setValue: (e) => NU.fd({ enabled: e, trackAnalytics: !0 }),
        usePredicate: () => {
            let e = (0, ev.isWindows)(),
                t = (0, N3.A)(sy.Ay);
            return e && t;
        },
    }),
    N5 = (0, o.zD)(u.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => g.intl.string(g.t["3zwNf6"]),
        useSubtitle: () => g.intl.string(g.t.m4Cjj9),
        useValue: () => (0, O.bG)([NP.A], () => NP.A.getSettings().remindersEnabled),
        setValue: (e) => NU.Mt(e),
    }),
    N8 = (0, o.zZ)(u.X.CLIPS_RECORDING_CATEGORY, {
        useTitle: () => g.intl.string(g.t.iIwmV5),
        buildLayout: () => [Nq, NK, N2, N4, N5, NQ, NJ, NY, NZ, N$, N0],
    }),
    N6 = (0, o.t_)(u.X.CLIPS_PANEL, {
        useTitle: () => g.intl.string(g.t.z2jK6X),
        usePersistentBadge: () => ({
            badgeType: e_.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            useCustomBadge: () => (0, p.jsx)(NG, {}),
        }),
        usePredicate: sC.sw,
        buildLayout: () => [N8, Nz],
    }),
    N7 = (0, o.i4)(u.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.z2jK6X),
        icon: NL.x,
        buildLayout: () => [N6],
    });
var N9 = i(187322),
    _e = i(77468),
    _t = i(289498),
    _i = i(573648),
    _n = i(941314),
    _l = i(681819),
    _s = i(370480),
    _r = i(773952);
let _a = new Set([Q.fg2.XBOX, Q.fg2.PLAYSTATION, Q.fg2.PLAYSTATION_STAGING, Q.fg2.CRUNCHYROLL]);
var _o = i(169869),
    _u = i(30370);
let _d = (0, E.mj)({
    name: "2026-03-crepe",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var _c = i(674567),
    _g = i(237146),
    _m = i(594387),
    _A = i(34934);
function _h() {
    let e,
        t,
        n,
        l,
        { variant: s, showFooter: r } =
            ((e = (0, _c.V)()),
            (t = (function (e) {
                let { enabled: t } = _d.useConfig({ location: e });
                return t;
            })("connectedAccountsBannerFooter")),
            (l = null != (n = (0, O.bG)([_u.A], () => _u.A.getAccount(null, Q.fg2.XBOX))) && !n.revoked),
            e === _c.s.NONE || (e === _c.s.NON_NITRO && 0)
                ? { variant: _c.s.NONE, showFooter: !1 }
                : { variant: e, showFooter: t && e === _c.s.NON_NITRO && !l }),
        { analyticsLocations: a } = (0, nU.Ay)(eV.A.XBOX_CONNECTED_ACCOUNTS_BANNER);
    if (s === _c.s.NONE) return null;
    let o = "",
        u = null;
    return (
        s === _c.s.NITRO
            ? ((o = g.intl.string(_g.default["+QAvQz"])),
              (u = (0, p.jsx)(eh.$, {
                  variant: "secondary",
                  size: "sm",
                  text: g.intl.string(_g.default.CubeLC),
                  onClick: () => {
                      (0, f.openModalLazy)(async () => {
                          let { default: e } = await Promise.all([i.e("16848"), i.e("46101"), i.e("77632")]).then(
                              i.bind(i, 836291),
                          );
                          return (t) => (0, p.jsx)(e, { ...t });
                      });
                  },
              })))
            : s === _c.s.NON_NITRO &&
              ((o = g.intl.string(_g.default.NwkRTZ)),
              (u = (0, p.jsx)(lE.A, {
                  fullWidth: !0,
                  defaultTextOverride: g.intl.string(_g.default["0vY+ie"]),
                  variantOverride: "overlay-primary",
                  size: "sm",
                  subscriptionTier: l_.pe.TIER_2,
              }))),
        (0, p.jsxs)(nU.f5, {
            value: a,
            children: [
                (0, p.jsxs)("div", {
                    className: _A.bV,
                    children: [
                        (0, p.jsx)(eA.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: g.intl.string(g.t.NG1e6l),
                        }),
                        (0, p.jsx)(oC.t, { size: "xs", color: "var(--icon-default)" }),
                    ],
                }),
                (0, p.jsx)(tq.N, {
                    theme: "dark",
                    children: (e) =>
                        (0, p.jsx)("div", {
                            className: e,
                            children: (0, p.jsxs)("div", {
                                className: _A.Nr,
                                style: {
                                    backgroundImage:
                                        "url(https://cdn.discordapp.com/assets/content/6f39ba0aa00a9877bcb4bc67862335d29c21749762ec29fd0248ba734bc2c4b8.png)",
                                },
                                children: [
                                    (0, p.jsx)("div", { className: _A.$h }),
                                    (0, p.jsx)("div", { className: _A.Lw }),
                                    (0, p.jsxs)("div", {
                                        className: _A.Qs,
                                        children: [
                                            (0, p.jsx)("img", {
                                                className: _A.wm,
                                                src: "https://cdn.discordapp.com/assets/content/f3a967ffa662e944346571ea7f2b30b2e40745e2edca294519fbddf971e81fb1.png",
                                                alt: "Xbox Game Pass",
                                            }),
                                            (0, p.jsx)(M.E, {
                                                variant: "text-sm/semibold",
                                                color: "text-strong",
                                                className: _A.DD,
                                                children: o,
                                            }),
                                            (0, p.jsx)("div", { className: _A.lO, children: u }),
                                        ],
                                    }),
                                    r &&
                                        (0, p.jsxs)("div", {
                                            className: _A.qr,
                                            children: [
                                                (0, p.jsx)("div", { className: _A.yF }),
                                                (0, p.jsxs)("div", {
                                                    className: _A.F4,
                                                    children: [
                                                        (0, p.jsx)(db.o, { size: "lg", color: w.A.colors.ICON_STRONG }),
                                                        (0, p.jsx)(M.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-default",
                                                            children: g.intl.format(_m.default.mXY4Rb, {
                                                                onConnect: () => {
                                                                    (0, _r.A)({
                                                                        platformType: Q.fg2.XBOX,
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
        })
    );
}
var _E = i(201718),
    _T = i(321078),
    _S = i(672130),
    _x = i(546183),
    _p = i(379848),
    _N = i(950018);
let __ = (e) => {
        let { markAsDismissed: t } = e;
        return (
            N.useEffect(() => t(t7.i.UNKNOWN), [t]),
            (0, p.jsx)(n7.Lp, { className: _N.Ad, text: g.intl.string(g.t.y2b7CA) })
        );
    },
    _f = (e) => {
        let { title: t, body: i, img: n, newIndicatorDismissibleContent: l, onClick: s } = e;
        return (0, p.jsxs)("div", {
            className: _N.kL,
            children: [
                n,
                (0, p.jsxs)("div", {
                    className: _N.FS,
                    children: [
                        (0, p.jsxs)("div", {
                            className: _N.TK,
                            children: [
                                (0, p.jsx)(_p.Ay, {
                                    contentTypes: [l],
                                    children: (e) => {
                                        let { visibleContent: t, markAsDismissed: i } = e;
                                        return t === l ? (0, p.jsx)(__, { markAsDismissed: i }) : null;
                                    },
                                }),
                                (0, p.jsx)(M.E, { variant: "text-md/semibold", children: t }),
                            ],
                        }),
                        (0, p.jsx)(M.E, { variant: "text-xs/normal", children: i }),
                    ],
                }),
                (0, p.jsx)(eh.$, { text: g.intl.string(g.t.vD60Pv), onClick: s }),
            ],
        });
    },
    _b = () => {
        let e = ta.A.getArticleURL(Q.MVz.PS_CONNECTION);
        return (0, p.jsx)(_f, {
            title: g.intl.string(g.t.v20wwm),
            body: g.intl.format(g.t.lTZBit, { help_article: e }),
            img: (0, p.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
            newIndicatorDismissibleContent: eE.M.PS_ONE_WAY_RECONNECT,
            onClick: () => (0, _r.A)({ platformType: Q.fg2.PLAYSTATION, location: "PS two way upsell" }),
        });
    },
    _C = () => {
        let e = ta.A.getArticleURL(Q.MVz.XBOX_CONNECTION);
        return (0, p.jsx)(_f, {
            title: g.intl.string(g.t["2okkZV"]),
            body: g.intl.format(g.t.OnERSS, { help_article: e }),
            img: (0, p.jsx)("img", { src: "/assets/9df988a227916145.png", width: "auto", height: "45", alt: "" }),
            newIndicatorDismissibleContent: eE.M.XBOX_ONE_WAY_RECONNECT,
            onClick: () => (0, _r.A)({ platformType: Q.fg2.XBOX, location: "Xbox two way upsell" }),
        });
    };
var _I = i(783419),
    _v = i(534952),
    _j = i(838251);
let _y = (e) => {
    let t,
        { integration: i } = e,
        {
            isJoining: n,
            joinErrorMessage: l,
            showJoinErrorMessage: s,
        } = (0, O.cf)(
            [_u.A],
            () => ({
                isJoining: _u.A.isJoining(i.id),
                joinErrorMessage:
                    "" === _u.A.joinErrorMessage(i.id) ? g.intl.string(g.t.j2d6Km) : _u.A.joinErrorMessage(i.id),
                showJoinErrorMessage: void 0 !== _u.A.joinErrorMessage(i.id),
            }),
            [i.id],
        );
    return (
        null != (0, O.bG)([H.A], () => H.A.getGuild(i.guild.id), [i.guild.id]) ||
            (t = (0, p.jsx)(eh.$, {
                size: "sm",
                onClick: function () {
                    _e.A.joinServer(i.id, () => {});
                },
                disabled: n,
                variant: "primary",
                text: n ? g.intl.string(g.t.RXvQQu) : g.intl.string(g.t.XpeFYr),
            })),
        (0, p.jsxs)("div", {
            className: _j.iA,
            children: [
                (0, p.jsxs)("div", {
                    className: _j.XX,
                    children: [
                        (0, p.jsx)(c7.Ay, { size: c7.Ay.Sizes.SMALL, guild: i.guild, className: _j.$f }),
                        (0, p.jsxs)("div", {
                            className: _j.Vn,
                            children: [
                                (0, p.jsx)(M.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: i.guild.name,
                                }),
                                (0, p.jsx)(uT.Anchor, {
                                    href: _i.A.get(i.type)?.getPlatformUserUrl?.(i.account),
                                    children: (0, p.jsx)(M.E, {
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
                    (0, p.jsx)(M.E, {
                        variant: "text-xs/normal",
                        color: "text-feedback-critical",
                        className: _j.R,
                        children: l,
                    }),
            ],
        })
    );
};
function _O(e) {
    let t,
        i,
        n,
        l,
        s,
        r,
        a,
        { onDisconnect: o, account: u, theme: d, locale: c } = e,
        [m, A] = N.useState(u.friendSync),
        [h, E] = N.useState(u.visibility),
        [T, S] = N.useState(u.metadataVisibility),
        [x, _] = N.useState(u.showActivity),
        [b, C] = N.useState(null),
        [I, v] = N.useState(null),
        [j, y] = N.useState(!1),
        [O, R] = N.useState([]),
        D = (0, _l.ML)(u.type),
        G = _i.A.get(D);
    N.useEffect(() => {
        A(u.friendSync), E(u.visibility), S(u.metadataVisibility), _(u.showActivity);
    }, [u]);
    let P = { inProgressVisibility: b, inProgressMetadataVisibility: I },
        U = N.useRef(P);
    return (
        N.useEffect(() => {
            U.current = P;
        }),
        N.useEffect(() => {
            if (!1 === u.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = U.current;
            null != e && (E(e), _e.A.setVisibility(u.type, u.id, e), C(null)),
                null != t && (S(t), _e.A.setMetadataVisibility(u.type, u.id, t), v(null));
        }, [u]),
        (0, p.jsxs)("div", {
            className: _j.FI,
            children: [
                ((t = _i.A.get(u.type)),
                (i = _i.A.get(D)),
                (n = "1" === (u.metadata ?? {})[_I.pK.TWITTER_VERIFIED]),
                (l = null),
                t.type === Q.fg2.TWITTER &&
                    n &&
                    (l = (0, p.jsx)(e0.m, {
                        text: g.intl.string(g.t.Jebrww),
                        children: (0, p.jsx)(e7.A, {
                            color: w.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, p.jsx)(e1.U, { size: "xs", color: w.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, p.jsxs)("div", {
                    className: _j.Il,
                    children: [
                        (0, p.jsx)("img", {
                            alt: i.name,
                            className: _j.gj,
                            src: (0, cP.M)(d) ? i.icon.darkSVG : i.icon.lightSVG,
                        }),
                        (0, p.jsxs)("div", {
                            children: [
                                (0, p.jsxs)("div", {
                                    className: _j.$p,
                                    children: [
                                        (0, p.jsx)(M.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: _j.RW,
                                            children: u.name,
                                        }),
                                        null != l && (0, p.jsx)("div", { className: _j.cG, children: l }),
                                    ],
                                }),
                                (0, p.jsx)(M.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: _j.Au,
                                    children: i.name,
                                }),
                            ],
                        }),
                        (0, p.jsx)(V.D, {
                            className: _j.uH,
                            onClick: function () {
                                let e = _i.A.get(u.type);
                                (0, f.openModal)((t) =>
                                    (0, p.jsx)(sG.Modal, {
                                        title: g.intl.formatToPlainString(g.t.U5x12f, { name: e.name }),
                                        subtitle: g.intl.format(g.t.VgqIPj, { provider: e.name }),
                                        actions: [
                                            {
                                                text: g.intl.string(g.t["ETE/oC"]),
                                                onClick: t.onClose,
                                                variant: "secondary",
                                            },
                                            {
                                                text: g.intl.string(g.t.bsbMVz),
                                                onClick: () => {
                                                    o(), t.onClose();
                                                },
                                                variant: "primary",
                                            },
                                        ],
                                        ...t,
                                        children:
                                            _a.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, p.jsx)(ln.A, {
                                                children: g.intl.format(g.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": g.intl.string(g.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, p.jsx)(cV.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                u.twoWayLink
                    ? null
                    : u.type === Q.fg2.XBOX
                      ? (0, p.jsx)(_C, {})
                      : u.type === Q.fg2.PLAYSTATION
                        ? (0, p.jsx)(_b, {})
                        : null,
                (function (e) {
                    let t = e.metadata ?? {},
                        i = null,
                        n = (0, _s.An)(t[_I.pK.CREATED_AT], c);
                    switch (e.type) {
                        case Q.fg2.REDDIT:
                            i = (0, _o.xE)(t, _j.Nz);
                            break;
                        case Q.fg2.STEAM:
                            i = (0, _o.dy)(t, _j.Nz);
                            break;
                        case Q.fg2.BLUESKY:
                        case Q.fg2.TWITTER:
                        case Q.fg2.MASTODON:
                            i = (0, _o.ED)(t, _j.Nz);
                            break;
                        case Q.fg2.EBAY:
                            i = (0, _o.ub)(t, _j.Nz);
                            break;
                        case Q.fg2.PAYPAL:
                            i = (0, _o.gZ)(t, _j.Nz);
                            break;
                        case Q.fg2.TIKTOK:
                            i = (0, _o.HU)(t, _j.Nz);
                    }
                    null !== n &&
                        (null == i && (i = []),
                        i?.push(
                            (0, p.jsx)(
                                M.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: _j.M4,
                                    children: g.intl.format(g.t["9rfonh"], { date: n }),
                                },
                                "member-since",
                            ),
                        ));
                    let l = O.includes(e.id),
                        s = g.intl.string(g.t.wzzjk9);
                    if (null == i || 0 === i.length)
                        if (!0 !== _i.A.get(e.type).hasMetadata) return null;
                        else
                            (i = [
                                (0, p.jsx)(n7.Lp, { className: _j.Z3, text: g.intl.string(g.t.y2b7CA) }, "badge"),
                                (0, p.jsx)(
                                    M.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: _j.vt,
                                        children: g.intl.format(g.t.Up2ni7, {
                                            helpdeskUrl: ta.A.getArticleURL(Q.MVz.CONNECTION_DETAILS),
                                        }),
                                    },
                                    "label",
                                ),
                            ]),
                                (s = g.intl.string(g.t["LVh3/5"]));
                    return (
                        l && (s = g.intl.string(g.t.i4jeWR)),
                        i.push(
                            (0, p.jsx)(
                                "div",
                                {
                                    className: _j.jy,
                                    children: (0, p.jsx)(eh.$, {
                                        text: s,
                                        variant: "secondary",
                                        size: "sm",
                                        loading: j,
                                        disabled: l,
                                        "aria-label": g.intl.string(g.t.sCkLYH),
                                        onClick: l
                                            ? void 0
                                            : () => {
                                                  y(!0),
                                                      _e.A.refresh(e.type, e.id).finally(() => {
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
                        (0, p.jsx)("div", { className: _j.tJ, children: i })
                    );
                })(u),
                (Q.txh.has(u.type) &&
                    (s = (0, p.jsx)(L.d, {
                        label: g.intl.string(g.t["+KCMSi"]),
                        checked: m,
                        onChange: function (e) {
                            A(e), _e.A.setFriendSync(u.type, u.id, e);
                        },
                    })),
                Q.ewM.has(u.type) &&
                    (r = (0, p.jsx)(L.d, {
                        label: g.intl.format(g.t["6u6J0q"], { platform: G.name }),
                        checked: x,
                        onChange: function (e) {
                            _(e), _e.A.setShowActivity(u.type, u.id, e);
                        },
                    })),
                _i.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, p.jsx)(L.d, {
                        label: g.intl.string(g.t.FYKGsL),
                        checked: 1 === T,
                        onChange: function (e) {
                            let { verified: t } = u,
                                i = +!!e;
                            if (e && !t) {
                                v(i), (0, _r.A)({ platformType: u.type, location: "User Settings" });
                                return;
                            }
                            S(i), _e.A.setMetadataVisibility(u.type, u.id, i);
                        },
                        disabled: 1 !== h || null == u.metadata,
                    })),
                (0, p.jsxs)("div", {
                    className: _j.HZ,
                    children: [
                        (0, p.jsx)(L.d, {
                            label: g.intl.string(g.t.f7yOAX),
                            checked: 1 === h,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    i = +!!e;
                                if (e && !t) {
                                    C(i), (0, _r.A)({ platformType: u.type, location: "User Settings" });
                                    return;
                                }
                                E(i), _e.A.setVisibility(u.type, u.id, i);
                            },
                        }),
                        a,
                        r,
                        s,
                    ],
                })),
                (function () {
                    if (u.revoked || u.integrations.length > 0) return (0, p.jsx)(iL.c, {});
                })(),
                u.revoked
                    ? (0, p.jsx)(tr.p, {
                          messageType: tr.Y.INFO,
                          children: g.intl.format(g.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, _r.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                      })
                    : u.integrations.length > 0
                      ? (0, p.jsx)(lO.D, {
                            label: g.intl.string(g.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, p.jsx)(_y, { integration: e }, e.id)),
                        })
                      : void 0,
                null,
            ],
        })
    );
}
function _R(e) {
    let { appIdentity: t, oauth2Token: i } = e;
    return null == i
        ? null
        : (0, p.jsxs)("div", {
              className: _j.FI,
              children: [
                  (function (e, t) {
                      let { application: i } = t,
                          n = i$.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
                      return (0, p.jsxs)("div", {
                          className: _j.Il,
                          children: [
                              (0, p.jsx)("img", { alt: i.name, className: ew()(_j.gj, _j.sN), src: n }),
                              (0, p.jsxs)("div", {
                                  children: [
                                      (0, p.jsx)("div", {
                                          className: _j.$p,
                                          children: (0, p.jsx)(M.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: _j.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, p.jsx)(M.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: _j.Au,
                                          children: i.name,
                                      }),
                                  ],
                              }),
                              (0, p.jsx)(V.D, {
                                  className: _j.uH,
                                  onClick: () =>
                                      (0, Nv.d1)(i, () => {
                                          NI.A.delete(t.id);
                                      }),
                                  "aria-label": g.intl.string(g.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, p.jsx)(cV.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, i),
                  (0, p.jsx)("div", {
                      className: _j.HZ,
                      children: (0, p.jsx)(L.d, {
                          label: g.intl.string(g.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              _E.A.updateApplicationIdentityConfig(i.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function _L(e) {
    let t = _i.A.get(e);
    (0, _r.A)({ platformType: t.type }),
        X.default.track(Q.HAw.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        });
}
function _D() {
    let e = (0, _l.gn)(),
        t = _n.A.useConfig({ location: "User Settings Connections" }),
        i = (0, eZ.A)(t.enabled ? _v.tX : []);
    return (0, p.jsxs)("div", {
        className: _j.lA,
        children: [
            i.map(
                (e) =>
                    null != e &&
                    (0, p.jsx)(
                        _S.A,
                        { application: e, className: _j.__invalid_accountButton, innerClassName: _j.U$ },
                        e.id,
                    ),
            ),
            e
                .slice(0, 10 - i.length)
                .map((e) =>
                    (0, p.jsx)(
                        _t.A,
                        { type: e.type, className: _j.__invalid_accountButton, innerClassName: _j.U$ },
                        e.type,
                    ),
                ),
            (0, p.jsx)(e0.m, {
                text: g.intl.string(g.t.QqTz8b),
                children: (0, p.jsx)("div", {
                    className: ew()(_j.ej, _j.__invalid_accountButton),
                    children: (0, p.jsx)(N9.vN, {
                        children: (0, p.jsx)("button", {
                            className: ew()(_j.R8, _j.U$),
                            type: "button",
                            onClick: function () {
                                n4.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: _L });
                            },
                            "aria-label": g.intl.string(g.t.Zhcj9X),
                            children: (0, p.jsx)(th._, {
                                color: "currentColor",
                                size: "md",
                                "aria-label": g.intl.string(g.t.QqTz8b),
                            }),
                        }),
                    }),
                }),
            }),
        ],
    });
}
function _G(e) {
    let t,
        { fetching: i, accounts: n, appIdentities: l, authorizedApps: s, theme: r, locale: a } = e;
    return (
        (t = i
            ? (0, p.jsx)(uP.y, { type: uP.y.Type.SPINNING_CIRCLE })
            : 0 === n.length && 0 === l.length
              ? (0, p.jsx)(ir.pp, {
                    theme: r,
                    children: (0, p.jsx)(ir.SG, {
                        note: g.intl.string(g.t.WenGZ2),
                        children: g.intl.string(g.t.aoLS84),
                    }),
                })
              : (0, p.jsxs)(p.Fragment, {
                    children: [
                        l.map((e, t) =>
                            (0, p.jsx)(
                                _R,
                                { appIdentity: e, oauth2Token: s.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        n
                            .filter((e) => _i.A.isSupported(e.type))
                            .map((e, t) =>
                                (0, p.jsx)(
                                    _O,
                                    {
                                        theme: r,
                                        account: e,
                                        locale: a,
                                        onDisconnect: () =>
                                            (function (e) {
                                                let { type: t, id: i } = e;
                                                _e.A.disconnect(t, i);
                                            })(e),
                                    },
                                    `connection-${t}`,
                                ),
                            ),
                    ],
                })),
        (0, p.jsx)("div", { className: _j.V, children: t })
    );
}
let _P = (0, o.E2)(u.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            return (0, p.jsx)(lO.D, {
                label: g.intl.string(g.t.ZeDrUf),
                description: g.intl.format(g.t["oYc+Gz"], { privacyPolicyUrl: Q.X7G.PRIVACY }),
                children: (0, p.jsx)(_D, {}),
            });
        },
        useSearchTerms: () => [
            g.intl.string(g.t.ZeDrUf),
            g.intl.string(g.t.Zhcj9X),
            g.intl.string(g.t.QqTz8b),
            g.intl.string(g.t["+/hZM/"]),
            g.intl.string(g.t.bsbMVz),
            g.intl.string(g.t.f7yOAX),
            g.intl.string(g.t.FYKGsL),
            g.intl.string(g.t["+KCMSi"]),
        ],
    }),
    _U = (0, o.E2)(u.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, O.bG)([ef.A], () => ef.A.hidePersonalInformation),
                t = (0, O.bG)([_u.A], () => _u.A.isFetching()),
                i = (0, O.bG)([_u.A], () => _u.A.getAccounts()),
                { authorizedAppsFetchState: n, authorizedApps: l } = (0, O.cf)([_x.default], () => ({
                    authorizedAppsFetchState: _x.default.getFetchState(),
                    authorizedApps: _x.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: s, filteredAppIdentities: r } = (0, _T.A)(t3.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, dU.Ay)(),
                o = (0, O.bG)([ds.default], () => ds.default.locale);
            return (N.useEffect(() => {
                n === _x.FetchState.NOT_FETCHED && NI.A.fetch();
            }, [n]),
            e)
                ? null
                : (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsx)(_h, {}),
                          (0, p.jsx)(_G, {
                              fetching: t || s || (r.length > 0 && n !== _x.FetchState.FETCHED),
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
            _e.A.fetch();
        },
        useSearchTerms: () => [
            g.intl.string(g.t["+/hZM/"]),
            g.intl.string(g.t.bsbMVz),
            g.intl.string(g.t.f7yOAX),
            g.intl.string(g.t.FYKGsL),
            g.intl.string(g.t["+KCMSi"]),
        ],
    });
var _V = i(46225),
    _M = i(452832);
let _k = [Q.fg2.LEAGUE_OF_LEGENDS, Q.fg2.RIOT_GAMES],
    _w = [{ badgeType: e_.Xi.NEW, dismissibleContent: eE.M.NEW_CRUNCHYROLL_CONNECTION }],
    _B = (0, o.zZ)(u.X.CONNECTIONS_ADD_CONNECTIONS_CATEGORY, {
        buildLayout: () => [_P],
        useInlineNotice: function () {
            let e = (0, O.bG)([_u.A], () => _u.A.getAccounts().find((e) => _k.includes(e.type))?.type),
                t = null != e ? _i.A.get(e) : null,
                i = (0, eZ.h)(t?.replacedBy),
                { canStartAuthorization: n, hasAlreadyLinked: l, fetched: s } = (0, _V.RD)(i),
                r = g.intl.string(_M.default["1S6oAo"]),
                a = _n.A.useConfig({ location: "RiotDeprecationInlineNotice" }).enabled;
            return N.useMemo(
                () =>
                    a && null != t && n && i?.connectionEntrypointUrl != null && !l && s
                        ? {
                              type: e_.lT.INLINE_NOTICE,
                              noticeType: "info",
                              useText: () =>
                                  g.intl.format(_M.default.DeOsIl, {
                                      connectionName: t.name,
                                      applicationName: r,
                                      connectionEntrypointUrl: i.connectionEntrypointUrl,
                                  }),
                          }
                        : null,
                [t, r, i, n, a, l, s],
            );
        },
    }),
    _F = (0, o.zZ)(u.X.CONNECTIONS_CONNECTED_ACCOUNTS_CATEGORY, { buildLayout: () => [_U] }),
    _z = (0, o.t_)(u.X.CONNECTIONS_PANEL, {
        useTitle: () => g.intl.string(g.t["3fe7U5"]),
        useObscuredNotice: uD.L,
        buildLayout: () => [_B, _F],
    }),
    _X = (0, o.i4)(u.X.CONNECTIONS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["3fe7U5"]),
        icon: hu.q,
        getDismissibleBadges: () => _w,
        buildLayout: () => [_z],
    });
var _Y = i(875444);
function _H(e, t) {
    let i = (0, O.bG)([_x.default], () => _x.default.getFetchState()),
        n = (0, O.bG)([_x.default], () =>
            e ? _x.default.getNewestTokensForNonChildrenApplications() : _x.default.getNewestTokens(),
        ),
        l = N.useMemo(
            () => (null == n ? [] : n.filter((e) => (0, _Y.A)(e.application)).map((e) => e.application)),
            [n],
        );
    return (
        N.useEffect(() => {
            t || NI.A.fetch();
        }, [t]),
        { showLoadingIndicator: i !== _x.FetchState.FETCHED && (null == n || 0 === n.length), slayerSdkApplications: l }
    );
}
i(505653);
var _K = i(106148);
i(650832);
var _W = i(628736);
function _Z(e) {
    let { applications: t } = e,
        i = N.useMemo(() => t.sort((e, t) => uz.default.compare(t.id, e.id)), [t]),
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
                ? g.intl.format(g.t.sHFdTg, {
                      gameList: t,
                      plusMoreHook: (e, t) =>
                          (0, p.jsx)(
                              M.E,
                              {
                                  tag: "span",
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: g.intl.format(g.t["EADv+4"], { count: n }),
                              },
                              t,
                          ),
                  })
                : e.join(", ");
        }, [i]),
        l = N.useMemo(() => {
            let e = [];
            for (let t = 0; t < 3; t++) {
                let n = i[t];
                if (null == n) break;
                let { icon: l, name: s, id: r } = n,
                    a = i$.Ay.getApplicationIconURL({ id: r, icon: l });
                e.push(
                    (0, p.jsx)(
                        e0.m,
                        {
                            __unsupportedReactNodeAsText: s,
                            children: (0, p.jsx)("img", { src: a, "aria-label": s, className: _W.Kk }),
                        },
                        r,
                    ),
                );
            }
            let t = i.length - 3;
            return (
                t > 0 &&
                    e.push(
                        (0, p.jsx)(
                            "div",
                            {
                                className: _W.lK,
                                children: (0, p.jsx)(M.E, {
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
    return (0, p.jsxs)("div", {
        className: _W.wx,
        children: [
            (0, p.jsxs)("div", {
                className: _W.kX,
                children: [
                    (0, p.jsx)(M.E, { variant: "text-md/normal", color: "text-strong", children: n }),
                    (0, p.jsxs)(V.D, {
                        onClick: () => {
                            (0, ej.openUserSettings)(u.X.AUTHORIZED_APPS_PANEL);
                        },
                        className: _W.bJ,
                        children: [
                            (0, p.jsx)(M.E, {
                                variant: "text-xs/normal",
                                color: "interactive-text-default",
                                children: g.intl.format(g.t.oYaYOe, {}),
                            }),
                            (0, p.jsx)(th._, {
                                size: "xxs",
                                color: w.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                className: _W.g7,
                            }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)("div", { className: _W.yF }),
            (0, p.jsx)("div", { className: _W.lJ, children: l }),
        ],
    });
}
function _Q() {
    return (0, p.jsxs)("div", {
        className: _W.do,
        children: [
            (0, p.jsx)(M.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: _W.xV,
                children: g.intl.string(g.t["+0U77d"]),
            }),
            (0, p.jsx)(M.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: g.intl.format(g.t.V8wClM, {
                    helpdeskArticle: ta.A.getArticleURL(Q.MVz.SOCIAL_LAYER_CONNECTIONS),
                }),
            }),
        ],
    });
}
function _q(e) {
    let { applications: t } = e;
    return t.length > 0 ? (0, p.jsx)(_Z, { applications: t }) : (0, p.jsx)(_Q, {});
}
let _J = (0, o.E2)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES, {
    useSearchTerms: () => [g.intl.string(g.t.YpCiMt)],
    Component: function () {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = _H(!0);
        return e ? (0, p.jsx)(uP.y, {}) : (0, p.jsx)(_q, { applications: t });
    },
});
function _$() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = _H(!0, !0);
    return !e && t.length > 0;
}
let _0 = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => g.intl.string(g.t.XpBObB),
        useSubtitle: () =>
            g.intl.format(g.t.oZsHTD, { helpdeskArticle: ta.A.getArticleURL(Q.MVz.SLAYER_GAME_FRIENDS) }),
        useSearchTerms: () => [g.intl.string(g.t["Uv/eTx"])],
        useValue: () => c.Zk.useSetting(),
        setValue: (e) => c.Zk.updateSetting(e),
        usePredicate: _$,
    }),
    _1 = (0, o.Qx)(u.X.CONTENT_AND_SOCIAL_IN_GAME_DMS_SETTING, {
        useTitle: () => g.intl.string(g.t["ms+Tme"]),
        useSubtitle: () => g.intl.string(g.t["4NN4+/"]),
        useOptions: () => [
            { name: g.intl.string(g.t.JIFnN9), value: _.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
            { name: g.intl.string(g.t.rRdsk1), value: _.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
            { name: g.intl.string(g.t.AolKwN), value: _.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
        ],
        useValue: () => {
            let e = c.TA.useSetting();
            return e === _.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? _.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e;
        },
        setValue: (e) => c.TA.updateSetting(e),
        usePredicate: _$,
    }),
    _2 = (0, o.zZ)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_CATEGORY, {
        useSearchTerms: () => [g.intl.string(g.t.YpCiMt)],
        buildLayout: () => [_J, _0, _1],
    });
var _3 = i(687123),
    _4 = i(444802),
    _5 = i(558001);
i(866945);
var _8 = i(835002);
function _6() {
    let e = (0, _4.WX)();
    N.useEffect(() => {
        (0, _5.N)(_8.YA.AGE_CONFIRMATION_NOTICE, _8.YX.VIEWED);
    }, []);
    let t = N.useCallback(() => {
            window.open(ta.A.getArticleURL(e), "_blank"), (0, _5.N)(_8.YA.AGE_CONFIRMATION_NOTICE, _8.YX.LEARN_MORE);
        }, [e]),
        i = N.useCallback(() => {
            x2.A.showAgeVerificationGetStartedModal({ entryPoint: x3.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, _5.N)(_8.YA.AGE_CONFIRMATION_NOTICE, _8.YX.CONFIRM_AGE);
        }, []);
    return (0, p.jsx)(tr.p, {
        messageType: tr.Y.INFO,
        action: (0, p.jsx)(B.Q, {
            variant: "secondary",
            size: "sm",
            textVariant: "text-sm/medium",
            text: g.intl.string(g.t.FDSSia),
            onClick: i,
        }),
        children: g.intl.format(g.t.mFgsfg, { hook: (e, i) => (0, p.jsx)(uT.Anchor, { onClick: t, children: e }, i) }),
    });
}
function _7() {
    let e = (0, xQ.aX)(_3.t.REACTIVE_CHECK),
        t = (0, xZ.b8)();
    return N.useMemo(() => {
        if (e && !t) return { type: e_.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: _6 };
    }, [e, t]);
}
var _9 = i(308528),
    fe = i(171316);
function ft() {
    let e = (0, fe.uM)(),
        t = (0, Na.vx)(),
        i = N.useCallback(() => {
            (0, lT.default)(),
                _9.A.openPrivateChannel({ recipientIds: t }),
                (0, _5.N)(_8.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _8.YX.LEARN_MORE);
        }, [t]),
        n = N.useCallback(() => {
            (0, _5.N)(_8.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _8.YX.VIEWED);
        }, []);
    return N.useMemo(() => {
        if (e)
            return {
                type: e_.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: n,
                useText: () =>
                    g.intl.format(Nc.default.i284fU, {
                        hook: (e, t) => (0, p.jsx)(uT.Anchor, { onClick: i, children: e }, t),
                        count: t.length,
                    }),
            };
    }, [i, e, t.length, n]);
}
var fi = i(323073),
    fn = i(264249),
    fl = i(406274);
let fs = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_DM_SETTING, {
        useTitle: () => g.intl.string(g.t.XahVjj),
        useSubtitle: () => g.intl.string(g.t.R9fXyS),
        useValue: fn.hT,
        useDisabled: () => {
            let e = (0, fl.A)() ?? !0,
                t = (0, fi.sP)(),
                i = (0, xZ.yM)();
            return (!t || !!i) && !e;
        },
        setValue: (e) => {
            (0, fi.p5)() && e
                ? x2.A.showAgeVerificationGetStartedModal({ entryPoint: x3.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : c.Qe.updateSetting(e);
        },
    }),
    fr = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => g.intl.string(g.t["L+yTsa"]),
        useSubtitle: () => g.intl.string(g.t.hiM8pU),
        useValue: fn.tI,
        useDisabled: () => {
            let e = (0, fl.A)() ?? !0,
                t = (0, fi.sP)(),
                i = (0, xZ.yM)();
            return N.useMemo(() => (!t || !!i) && !e, [t, e, i]);
        },
        setValue: (e) => {
            (0, fi.p5)() && e
                ? x2.A.showAgeVerificationGetStartedModal({ entryPoint: x3.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : c.Kg.updateSetting(e);
        },
    });
i(667532);
var fa = i(390248),
    fo = i(632119),
    fu = i(945276),
    fd = i(562783),
    fc = i(533517);
function fg() {
    let e,
        t = (0, fu.A)() ?? !0,
        i = (0, fe.uM)(),
        n = (0, fe.uM)(),
        {
            explicitContentGuilds: l,
            explicitContentFriendDm: s,
            explicitContentNonFriendDm: r,
        } = ((e = (0, uE.cf)([oz.A], () => oz.A.settings.textAndImages?.explicitContentSettings ?? (0, fo.C$)())),
        {
            explicitContentGuilds: (0, fo.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, fo.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, fo.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        }),
        a = (e) => {
            let t = Object.values(e);
            (0, fa.hK)() && t.includes(_.TO.SHOW)
                ? x2.A.showAgeVerificationGetStartedModal({ entryPoint: x3.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
                : (0, fo.Jz)(e);
        },
        o = [
            { value: _.TO.BLUR, label: g.intl.string(g.t.S49Uad) },
            { value: _.TO.BLOCK, label: g.intl.string(g.t["D/157Y"]) },
        ],
        u = [{ value: _.TO.BLUR, label: g.intl.string(g.t.S49Uad) }],
        d = { value: _.TO.SHOW, label: g.intl.string(g.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: n, tooltipText: i ? g.intl.string(Nc.default["6Af/cw"]) : void 0 };
    return (0, p.jsxs)(fd.E, {
        description: g.intl.string(g.t.Wnojv1),
        children: [
            (0, p.jsx)(fc.A, {
                title: g.intl.string(g.t["+uI23H"]),
                value: s,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(fc.A, {
                title: g.intl.string(g.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(fc.A, {
                title: g.intl.string(g.t["FP+a42"]),
                value: l,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || n,
                tooltipText: i ? g.intl.string(Nc.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function fm() {
    let e,
        t = (0, fu.A)() ?? !0,
        i = (0, fe.uM)(),
        n = (0, fe.uM)(),
        {
            goreContentGuilds: l,
            goreContentFriendDm: s,
            goreContentNonFriendDm: r,
        } = ((e = (0, uE.cf)([oz.A], () => oz.A.settings.textAndImages?.goreContentSettings ?? (0, _4.T4)())),
        {
            goreContentGuilds: (0, _4.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, _4.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, _4.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        }),
        a = (e) => {
            let t = Object.values(e);
            (0, fa.hK)() && t.includes(_.TO.SHOW)
                ? x2.A.showAgeVerificationGetStartedModal({ entryPoint: x3.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
                : (0, _4.qY)(e);
        },
        o = [
            { value: _.TO.BLUR, label: g.intl.string(g.t.S49Uad) },
            { value: _.TO.BLOCK, label: g.intl.string(g.t["D/157Y"]) },
        ],
        u = [{ value: _.TO.BLUR, label: g.intl.string(g.t.S49Uad) }],
        d = { value: _.TO.SHOW, label: g.intl.string(g.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: n, tooltipText: i ? g.intl.string(Nc.default["6Af/cw"]) : void 0 };
    return (0, p.jsxs)(fd.E, {
        description: g.intl.string(g.t.XgH9eh),
        children: [
            (0, p.jsx)(fc.A, {
                title: g.intl.string(g.t["+uI23H"]),
                value: s,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(fc.A, {
                title: g.intl.string(g.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(fc.A, {
                title: g.intl.string(g.t["FP+a42"]),
                value: l,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || n,
                options: u,
                tooltipText: i ? g.intl.string(Nc.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var fA = i(397620),
    fh = i(759049);
let fE = (0, o.E2)(u.X.CONTENT_AND_SOCIAL_CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, _4.WX)(),
            t = N.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: g.intl.string(g.t.GYpoAq),
                        component: fg,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: g.intl.string(g.t["16/3Bi"]),
                        component: fm,
                        orientation: "vertical",
                    },
                ],
                [],
            ),
            i = N.useCallback((e) => {
                Eg.A.setSection(Q.nc_.CONTENT_AND_SOCIAL, e);
            }, []);
        return (0, p.jsxs)(_K.h, {
            children: [
                (0, p.jsx)(_K._, {
                    header: g.intl.string(g.t["Hj/But"]),
                    description: g.intl.format(g.t.dliU4j, { learnMoreLink: ta.A.getArticleURL(e) }),
                }),
                (0, p.jsx)(fA.A, { tabs: t, onTabChange: i, orientation: "vertical", tabsClassName: fh.v }),
            ],
        });
    },
    useSearchTerms: () => [
        g.intl.string(g.t["Hj/But"]),
        g.intl.string(g.t["N/oRI+"]),
        g.intl.string(g.t.QVdYsK),
        g.intl.string(g.t["aWD+tu"]),
        g.intl.string(g.t["5mnTa7"]),
        g.intl.string(g.t["K0OWP+"]),
    ],
});
var fT = i(639555),
    fS = i(617641),
    fx = i(546140),
    fp = i(406935),
    fN = i(594061);
let f_ = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING, {
    useTitle: () => g.intl.string(g.t.qFsx5q),
    useSubtitle: () => g.intl.format(g.t.lunaRv, { learnMoreLink: ta.A.getArticleURL(Q.MVz.SAFETY_ALERTS) }),
    useValue: fx.L,
    setValue: (e) =>
        fN.wc.updateAsync(
            "privacy",
            (t) => {
                t.inappropriateConversationWarnings = fp._t.create({ value: e });
            },
            fN.Sb.INFREQUENT_USER_ACTION,
        ),
    usePredicate: function () {
        let e = (0, fS.Lc)({ location: "DMSafetyAlertsSetting" }),
            t = (0, fT.Rv)({ location: "DMSafetyAlertsSetting" }),
            i = (0, fu.A)() ?? !0;
        return e && !i && !t;
    },
});
var ff = i(809505),
    fb = i(923457),
    fC = i(656402);
let fI = (0, o.Qx)(u.X.CONTENT_AND_SOCIAL_DM_SPAM_SETTING, {
        useTitle: () => g.intl.string(g.t.tiCXaH),
        useSubtitle: () => g.intl.format(g.t.RvjRRI, { appealLink: ta.A.getArticleURL(Q.MVz.SAFE_DIRECT_MESSAGING) }),
        useValue: function () {
            let e = c.he.useSetting(),
                t = c.cj.useSetting(),
                i = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
                n = (0, xQ.yv)(fb.p.SPAM_FILTERS);
            return e !== _.he.DEFAULT_UNSET
                ? e
                : i?.nsfwAllowed === !1 && n
                  ? _.he.FRIENDS_AND_NON_FRIENDS
                  : (fC.xY.get(t) ?? _.he.NON_FRIENDS);
        },
        setValue: (e) => c.he.updateSetting(e),
        useOptions: function () {
            return N.useMemo(() => (0, ff.YS)(), []);
        },
        useSearchTerms: () => [g.intl.string(g.t.JzaP4h), g.intl.string(g.t.H9XOl3), g.intl.string(g.t.k4W40P)],
    }),
    fv = (0, o.zZ)(u.X.CONTENT_AND_SOCIAL_CONTENT_CATEGORY, {
        useTitle: () => g.intl.string(g.t.xVRG4P),
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
                u = ft(),
                d =
                    ((e = (0, No.Z)()),
                    (t = (0, _4.WX)()),
                    (i = N.useCallback(() => {
                        window.open(ta.A.getArticleURL(t), "_blank"),
                            (0, _5.N)(_8.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _8.YX.LEARN_MORE);
                    }, [t])),
                    (n = N.useCallback(() => {
                        (0, _5.N)(_8.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _8.YX.VIEWED);
                    }, [])),
                    N.useMemo(() => {
                        if (e)
                            return {
                                type: e_.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: n,
                                useText: () =>
                                    g.intl.format(g.t.EUo0yj, {
                                        hook: (e, t) => (0, p.jsx)(uT.Anchor, { onClick: i, children: e }, t),
                                    }),
                            };
                    }, [i, e, n])),
                c =
                    ((l = (0, xQ.SJ)()),
                    (s = (0, xZ.b8)()),
                    (r = l && !s),
                    (a = N.useCallback(() => {
                        x2.A.showAgeVerificationGetStartedModal({ entryPoint: x3.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, _5.N)(_8.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _8.YX.LEARN_MORE);
                    }, [])),
                    (o = N.useCallback(() => {
                        (0, _5.N)(_8.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _8.YX.VIEWED);
                    }, [])),
                    N.useMemo(() => {
                        if (r)
                            return {
                                type: e_.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: o,
                                useText: () =>
                                    g.intl.format(g.t.OX4ybh, {
                                        hook: (e, t) => (0, p.jsx)(uT.Anchor, { onClick: a, children: e }, t),
                                    }),
                            };
                    }, [a, r, o])),
                m = _7();
            return u ?? m ?? c ?? d;
        },
        buildLayout: () => [fE, fI, f_, fs, fr],
    }),
    fj = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_EVERYONE_SETTING, {
        useTitle: () => g.intl.string(g.t["7x9dyE"]),
        useValue: () => {
            let e = c.FA.useSetting();
            return N.useMemo(() => (0, rT.Lx)(e), [e]).all;
        },
        setValue: (e) => {
            c.FA.updateSetting(e ? Q.yKI : Q.yKI & ~Q.dzt.NO_RELATION);
        },
        useDisabled: () => (0, fe.uM)(),
    });
var fy = i(665260);
let fO = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => g.intl.string(g.t.NfeuZ3),
        useValue: () => {
            let e = c.FA.useSetting(),
                t = N.useMemo(() => (0, rT.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: (e) => {
            let t = c.FA.getSetting();
            c.FA.updateSetting(e ? fy.UI(t, Q.dzt.MUTUAL_FRIENDS) : fy.iE(t, Q.dzt.MUTUAL_FRIENDS, Q.dzt.NO_RELATION));
        },
        useDisabled: () => (0, fe.uM)(),
    }),
    fR = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => g.intl.string(g.t.qsMfsH),
        useValue: () => {
            let e = c.FA.useSetting(),
                t = N.useMemo(() => (0, rT.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: (e) => {
            let t = c.FA.getSetting();
            c.FA.updateSetting(e ? fy.UI(t, Q.dzt.MUTUAL_GUILDS) : fy.iE(t, Q.dzt.MUTUAL_GUILDS, Q.dzt.NO_RELATION));
        },
        useDisabled: () => (0, fe.uM)(),
    }),
    fL = (0, o.zZ)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.MNaVwq),
        useInlineNotice: ft,
        buildLayout: () => [fj, fO, fR],
    });
var fD = i(994500),
    fG = i(428678),
    fP = i(49229),
    fU = i(730134),
    fV = i(741304);
function fM(e) {
    let { listType: t, numberOfUsers: i } = e,
        n = "blocked" === t;
    return (0, p.jsxs)("div", {
        className: fV.wx,
        children: [
            (0, p.jsx)("div", { className: fV.zc, children: n ? (0, p.jsx)(fG.K, {}) : (0, p.jsx)(ig.G, {}) }),
            (0, p.jsxs)("div", {
                className: fV.Qq,
                children: [
                    (0, p.jsx)(M.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: g.intl.string(n ? g.t.PFOUKW : g.t["93ZDWE"]),
                    }),
                    (0, p.jsx)(M.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: n
                            ? g.intl.format(g.t["r91W/h"], { numberOfBlockedUsers: i })
                            : g.intl.format(g.t.rXUeOl, { numberOfIgnoredUsers: i }),
                    }),
                ],
            }),
        ],
    });
}
function fk(e) {
    let { userId: t, last: i } = e,
        n = (0, O.bG)([fD.A], () => fD.A.isBlocked(t)),
        l = (0, O.bG)([t3.default], () => t3.default.getUser(t)),
        [s, r] = N.useState(!1),
        a = N.useCallback(() => {
            r(!0),
                n
                    ? fP.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : fP.A.unignoreUser(t, eV.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      });
        }, [n, t]);
    return null == l
        ? null
        : (0, p.jsxs)("div", {
              className: ew()(fV.nM, { [fV.fW]: i }),
              children: [
                  (0, p.jsxs)("div", {
                      className: fV.eF,
                      children: [
                          (0, p.jsx)(fU.A, { user: l, size: iK._3.SIZE_40 }),
                          (0, p.jsxs)("div", {
                              className: fV.Qq,
                              children: [
                                  (0, p.jsx)(M.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: l.globalName ?? l.username,
                                  }),
                                  (0, p.jsx)(M.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: null != l.globalName ? l.username : null,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, p.jsx)(eh.$, {
                      variant: "secondary",
                      text: g.intl.string(n ? g.t.XyHpKH : g.t["8wXU9B"]),
                      onClick: a,
                      loading: s,
                  }),
              ],
          });
}
function fw(e) {
    let { userIds: t, listType: i } = e,
        [n, l] = N.useState(5);
    return (0, p.jsx)(_K.h, {
        children: (0, p.jsxs)("div", {
            className: fV.Nr,
            children: [
                (0, p.jsx)(fM, { listType: i, numberOfUsers: t.length }),
                (0, p.jsx)("div", {
                    className: fV.jS,
                    children: t.slice(0, n).map((e, i) => (0, p.jsx)(fk, { userId: e, last: i === t.length - 1 }, e)),
                }),
                n < t.length
                    ? (0, p.jsx)("div", {
                          className: fV.vM,
                          children: (0, p.jsx)(V.D, {
                              onClick: () => {
                                  l((e) => e + 5);
                              },
                              className: fV.Qf,
                              children: (0, p.jsx)(M.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: g.intl.format(g.t.jULEDr, {
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
let fB = (0, o.E2)(u.X.CONTENT_AND_SOCIAL_BLOCKED_USERS, {
        useSearchTerms: () => [g.intl.string(g.t.PFOUKW)],
        usePredicate: () => (0, O.bG)([fD.A], () => fD.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, O.yK)([fD.A], () => fD.A.getBlockedIDs());
            return (0, p.jsx)(fw, { userIds: e, listType: "blocked" });
        },
    }),
    fF = (0, o.E2)(u.X.CONTENT_AND_SOCIAL_IGNORED_USERS, {
        useSearchTerms: () => [g.intl.string(g.t["93ZDWE"])],
        usePredicate: () => (0, O.bG)([fD.A], () => fD.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, O.yK)([fD.A], () => fD.A.getIgnoredIDs());
            return (0, p.jsx)(fw, { userIds: e, listType: "ignored" });
        },
    }),
    fz = (0, o.zZ)(u.X.CONTENT_AND_SOCIAL_RESTRICTED_USERS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.LVwR56),
        useSubtitle: () =>
            g.intl.format(g.t["0aNQo9"], { helpArticle: ta.A.getArticleURL(Q.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [fB, fF],
        usePredicate: () => {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, O.cf)([fD.A], () => ({
                hasBlockedUsers: fD.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: fD.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var fX = i(612025),
    fY = i(112469),
    fH = i(111159),
    fK = i(152056),
    fW = i(321880);
let fZ = { label: () => g.intl.string(g.t["32u1Dx"]), value: fX.YG };
var fQ = i(542457);
let fq = () => (0, fY.Tx)() !== fX.YG;
function fJ() {
    return g.intl.string(g.t["T+nevN"]);
}
let f$ = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_JOIN_SETTING, {
        useTitle: fJ,
        useSubtitle: () =>
            g.intl.format(g.t.jXKQCu, { helpdeskArticle: ta.A.getArticleURL(Q.MVz.ACTIVITY_STATUS_SETTINGS) }),
        useValue: () => {
            let e = (0, fY.Tx)();
            return !c.pE.useSetting().includes(e);
        },
        setValue: (e) => {
            let t = fX.xk.getState().selectedGuildId,
                i = (0, rT.CN)();
            e ? i.delete(t) : i.add(t),
                c.pE.updateSetting([...i]),
                X.default.track(Q.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: fQ.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
                    ingress: nv.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                });
        },
        usePredicate: fq,
    }),
    f0 = () => (0, fY.Tx)() !== fX.YG;
function f1() {
    return g.intl.string(m.default.WhdCGP);
}
let f2 = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_SHARE_SETTING, {
    useTitle: f1,
    useSubtitle: () => g.intl.string(m.default.UQ9RHJ),
    useValue: () => {
        let e = (0, fY.Tx)();
        return !c.JG.useSetting().includes(e);
    },
    setValue: (e) => {
        let t = fX.xk.getState().selectedGuildId,
            i = (0, rT.Kk)();
        e ? i.delete(t) : i.add(t),
            c.JG.updateSetting([...i]),
            X.default.track(Q.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: fQ.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
                ingress: nv.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    },
    usePredicate: f0,
});
var f3 = i(762183),
    f4 = i(445176),
    f5 = i(137675);
let f8 = () => ((0, f4.e)() ? g.intl.string(g.t.PMsfcH) : g.intl.string(g.t.RAQUSN)),
    f6 = (e, t) => {
        X.default.track(Q.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t,
        });
    },
    f7 = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: f8,
        useSubtitle: () => {
            let e = (0, fY.Tx)(),
                t = (0, fY.q9)(),
                i = (0, f4.e)();
            return e === fX.YG
                ? i
                    ? g.intl.string(g.t.XXGmuB)
                    : g.intl.string(g.t.wbYDfT)
                : t
                  ? g.intl.string(g.t.V0ka0Q)
                  : i
                    ? g.intl.string(g.t.F9WY3f)
                    : g.intl.string(g.t.G7c3Xo);
        },
        useValue: () => {
            let e = (0, fY.Tx)(),
                t = c.$s.useSetting().includes(e),
                i = (0, f3.K)();
            return e === fX.YG ? !i : !t;
        },
        useDisabled: () => {
            let e = (0, fe.uM)();
            return (0, fY.Tx)() === fX.YG && e;
        },
        setValue: (e) => {
            let t = fX.xk.getState().selectedGuildId;
            if (t === fX.YG) {
                var i;
                (i = !e),
                    (0, f5.O)({
                        header: g.intl.string(g.t["uUr+GR"]),
                        body: g.intl.string(g.t.hjGJBp),
                        confirmText: g.intl.string(g.t.gm1Vej),
                        cancelText: g.intl.string(g.t.p89ACt),
                        confirmButtonColor: aE.$n.Colors.BRAND,
                        onConfirm: () => {
                            c.n6.updateSetting(i), f6(i, !1);
                        },
                        onCancel: () => {
                            c.n6.updateSetting(i), c.$s.updateSetting(i ? H.A.getGuildIds() : []), f6(i, !0);
                        },
                    });
            } else {
                let i = (0, rT.Tb)();
                e ? i.delete(t) : i.add(t),
                    c.$s.updateSetting(Array.from(i)),
                    X.default.track(Q.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: fQ.m.DIRECT_MESSAGES_TOGGLE,
                        ingress: nv.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    });
            }
        },
    });
var f9 = i(152076);
let be = (e, t) => {
    X.default.track(Q.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
};
function bt() {
    return g.intl.string(g.t["3o2ojh"]);
}
let bi = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: bt,
        useSubtitle: () =>
            (0, fY.q9)()
                ? g.intl.format(g.t.WpnWLc, { helpdeskArticle: ta.A.getArticleURL(Q.MVz.MESSAGE_REQUESTS) })
                : g.intl.format(g.t.wkm9a3, { helpdeskArticle: ta.A.getArticleURL(Q.MVz.MESSAGE_REQUESTS) }),
        useValue: () => {
            let e = (0, fY.Tx)(),
                t = (0, f3.K)(),
                i = c.$s.useSetting().includes(e),
                n = c.YX.useSetting(),
                l = c.Zr.useSetting().includes(e);
            return e === fX.YG ? !t && !n : !i && !l;
        },
        useDisabled: () => {
            let e = (0, fY.Tx)(),
                t = (0, fe.uM)(),
                i = (0, f3.K)(),
                n = c.$s.useSetting().includes(e);
            return e === fX.YG ? i || t : n;
        },
        setValue: (e) => {
            let t = fX.xk.getState().selectedGuildId;
            if (!e && (0, f9.w)())
                return void x2.A.showAgeVerificationGetStartedModal({ entryPoint: x3.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === fX.YG) {
                var i;
                (i = !e),
                    (0, f5.O)({
                        header: g.intl.string(g.t.yAfu1p),
                        body: g.intl.string(g.t.Ry2z74),
                        confirmText: g.intl.string(g.t.gm1Vej),
                        cancelText: g.intl.string(g.t.p89ACt),
                        confirmButtonColor: aE.$n.Colors.BRAND,
                        onConfirm: () => {
                            c.YX.updateSetting(i), be(i, !1);
                        },
                        onCancel: () => {
                            c.YX.updateSetting(i), c.Zr.updateSetting(i ? H.A.getGuildIds() : []), be(i, !0);
                        },
                    });
            } else {
                let i = (0, rT.xo)();
                e ? i.delete(t) : i.add(t),
                    c.Zr.updateSetting(Array.from(i)),
                    X.default.track(Q.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: fQ.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: nv.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    });
            }
        },
    }),
    bn = (0, o.E2)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            let e = [f8(), bt()],
                t = f1();
            f0() && e.push(t);
            let i = fJ();
            return fq() && e.push(i), e;
        },
        Component: function () {
            let { selectedGuildId: e, setSelectedGuildId: t } = (0, fX.xk)(),
                i = (0, O.bG)([K.Ay], () => K.Ay.getFlattenedGuildIds()),
                n = (0, O.bG)([H.A], () => H.A.getGuilds()),
                l = i[0];
            N.useEffect(
                () =>
                    fK.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, i) => {
                            let n = fX.xk.getState().selectedGuildId;
                            "" === i && "" !== e && n === fX.YG && null != l
                                ? t(l)
                                : "" === e && n !== fX.YG && t(fX.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [l, t],
            );
            let s = N.useMemo(() => {
                let e = [];
                return (
                    e.push({
                        ...fZ,
                        id: fZ.value,
                        label: fZ.label(),
                        leading: (0, p.jsx)("div", {
                            className: fW.KP,
                            children: (0, p.jsx)(fH.p, {
                                size: "sm",
                                color: "white",
                                "aria-hidden": !0,
                                className: fW.cl,
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
                                leading: (0, p.jsx)(c7.Ay, {
                                    className: fW.cl,
                                    guild: i,
                                    size: c7.Ay.Sizes.SMALLER,
                                    active: !0,
                                }),
                            });
                    }),
                    e
                );
            }, [i, n]);
            return (0, p.jsx)(iR.Z, {
                selectionMode: "single",
                onSelectionChange: (e) => {
                    t(e);
                },
                value: e,
                options: s,
            });
        },
    }),
    bl = (0, o.zZ)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.eYaT7L),
        useInlineNotice: function () {
            let e = ft(),
                t = _7();
            if ((0, fY.Tx)() === fX.YG) return e ?? t;
        },
        buildLayout: () => [bn, f7, bi, f2, f$],
    }),
    bs = (0, o.dT)(u.X.CONTENT_AND_SOCIAL_MAIN_TAB, {
        getTitle: () => g.intl.string(g.t["/7xJCF"]),
        buildLayout: () => [fv, bl, fL, fz],
    }),
    br = (0, o.dT)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB, {
        initialize: () => {
            NI.A.fetch();
        },
        getTitle: () => g.intl.string(g.t.YpCiMt),
        buildLayout: () => [_2],
    }),
    ba = (0, o.t_)(u.X.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => g.intl.string(g.t["+o1pDZ"]),
        buildLayout: () => [bs, br],
    }),
    bo = (0, o.i4)(u.X.CONTENT_AND_SOCIAL_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["+o1pDZ"]),
        icon: cb.i,
        buildLayout: () => [ba],
    });
var bu = i(254138),
    bd = i(157559),
    bc = i(975648),
    bg = i(837245);
let bm = (0, o.E2)(u.X.DATA_HARVEST_REQUEST_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.dmBSKo)],
        Component: function () {
            let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
                { currentHarvestType: t, awaitingInitialRequest: n } = (0, O.cf)([bc.A], () => ({
                    currentHarvestType: bc.A.harvestType,
                    awaitingInitialRequest: bc.A.requestingHarvest,
                })),
                [l, s] = N.useState(!1);
            if (null == e) return null;
            let r = (0, rT.Oj)(t, e) || n,
                a = null != t && rb()().diff(rb()(t.created_at), "days") < Q.n83,
                o = r && a,
                u = e.isStaff(),
                d = !e.verified;
            return (0, p.jsxs)(_K.h, {
                children: [
                    (0, p.jsx)(_K._, {
                        header: g.intl.string(g.t.XAHCgJ),
                        description: g.intl.format(g.t.P3kNfr, {
                            helpdeskArticle: ta.A.getArticleURL(Q.MVz.GDPR_REQUEST_DATA),
                        }),
                    }),
                    o
                        ? (0, p.jsx)(er.Z, {
                              className: bg.N,
                              children: (0, p.jsx)(M.E, {
                                  variant: "text-md/normal",
                                  children: g.intl.format(g.t.RNDlV9, {
                                      date: rb()(t.created_at).add(Q.n83, "days").format("MMMM Do YYYY"),
                                  }),
                              }),
                          })
                        : u
                          ? (0, p.jsx)(er.Z, {
                                className: bg.N,
                                children: (0, p.jsx)(M.E, {
                                    variant: "text-md/normal",
                                    children: g.intl.string(g.t.ZPQLH2),
                                }),
                            })
                          : (0, p.jsxs)(p.Fragment, {
                                children: [
                                    d
                                        ? (0, p.jsx)(er.Z, {
                                              className: bg.N,
                                              children: (0, p.jsx)(M.E, {
                                                  variant: "text-md/normal",
                                                  children: g.intl.string(g.t.c1f88z),
                                              }),
                                          })
                                        : null,
                                    (0, p.jsx)("div", {
                                        className: bg.x,
                                        children: (0, p.jsx)(eh.$, {
                                            variant: "primary",
                                            text: g.intl.string(g.t.dmBSKo),
                                            disabled: r,
                                            onClick: () => {
                                                ((e) => {
                                                    let { onConfirm: t } = e;
                                                    (0, f.openModalLazy)(async () => {
                                                        let { default: e } = await i.e("81153").then(i.bind(i, 890904));
                                                        return (i) => (0, p.jsx)(e, { modalProps: i, onConfirm: t });
                                                    });
                                                })({
                                                    onConfirm: (e) => {
                                                        s(!0),
                                                            (0, Ec.$I)(e)
                                                                .then(
                                                                    (e) => (
                                                                        null != e &&
                                                                            null != e.body &&
                                                                            n4.h.dispatch({
                                                                                type: "UPDATE_DATA_HARVEST_TYPE",
                                                                                harvestType: e.body,
                                                                            }),
                                                                        e
                                                                    ),
                                                                )
                                                                .then(
                                                                    (e) => {
                                                                        null != e && null != e.body
                                                                            ? bd.A.show({
                                                                                  title: g.intl.string(g.t.i2iul5),
                                                                                  body: g.intl.string(g.t["6Nmv4i"]),
                                                                              })
                                                                            : bd.A.show({
                                                                                  title: g.intl.string(g.t.OjbtDm),
                                                                                  body: g.intl.string(g.t["0F5Jyt"]),
                                                                              });
                                                                    },
                                                                    (e) => {
                                                                        let t =
                                                                            e?.message ||
                                                                            e?.body?.message ||
                                                                            g.intl.string(g.t["0F5Jyt"]);
                                                                        bd.A.show({
                                                                            title: g.intl.string(g.t.OjbtDm),
                                                                            body: t,
                                                                        });
                                                                    },
                                                                )
                                                                .finally(() => s(!1));
                                                    },
                                                });
                                            },
                                            loading: l || n,
                                        }),
                                    }),
                                ],
                            }),
                ],
            });
        },
    }),
    bA = (0, o.zZ)(u.X.DATA_REQUEST_CATEGORY, {
        useTitle: () => g.intl.string(g.t.VjDjpb),
        initialize: () => {
            n4.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" }),
                n3.Bo.get({ url: Q.Rsh.USER_HARVEST, oldFormErrors: !0, rejectWithError: !1 })
                    .then((e) => {
                        n4.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body });
                    })
                    .catch((e) => {
                        n4.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error: e });
                    });
        },
        buildLayout: () => [bm],
    });
var bh = i(290595),
    bE = i(153488);
let bT = (0, o.zD)(u.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
        useTitle: () => g.intl.string(g.t.AGDDkH),
        useSubtitle: () => g.intl.string(g.t["wW9/zQ"]),
        useValue: () => c.Q$.useSetting(),
        setValue: (e) => NU.eQ({ allowVoiceRecording: e }),
    }),
    bS = (0, o.v_)(u.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => g.intl.string(g.t.D60Gfj),
        useSubtitle: () =>
            g.intl.format(g.t.R5N31P, {
                onClick: () =>
                    (0, ej.openUserSettings)(
                        (0, SB.pC)("DataUsageDisclaimer") ? u.X.ACCOUNT_REMOVAL_CATEGORY : u.X.ACCOUNT_REMOVAL_SETTING,
                    ),
            }),
    }),
    bx = (0, o.zD)(u.X.DATA_USAGE_PERSONALIZATION_SETTING, {
        useTitle: () => g.intl.string(g.t.MNKzyg),
        useSubtitle: () =>
            g.intl.format(g.t["eQL/Mr"], { helpdeskArticle: ta.A.getArticleURL(Q.MVz.DATA_USED_FOR_RECOMMENDED) }),
        useValue: function () {
            return (0, O.bG)([bE.A], () => bE.A.hasConsented(Q.YAq.PERSONALIZATION));
        },
        setValue: function (e) {
            e
                ? (0, bh.U)([Q.YAq.PERSONALIZATION], []).catch(f5.i)
                : (0, f5.O)({
                      header: g.intl.string(g.t["9SNpzv"]),
                      confirmText: g.intl.string(g.t["9g5UGw"]),
                      cancelText: g.intl.string(g.t["+ZLPw9"]),
                      onConfirm: () => {
                          (0, bh.U)([], [Q.YAq.PERSONALIZATION]).catch(f5.i);
                      },
                      body: g.intl.string(g.t.gJvDDh),
                  });
        },
        useDisabled: fe.uM,
    }),
    bp = (0, o.zD)(u.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => g.intl.string(g.t.CyLYKZ),
        useSubtitle: () =>
            g.intl.format(g.t["2QFDU/"], { helpdeskArticle: ta.A.getArticleURL(Q.MVz.QUESTS_PRIVACY_CONTROLS) }),
        useValue: function () {
            return !c.vf.useSetting();
        },
        setValue: function (e) {
            c.vf.updateSetting(!e);
        },
        useDisabled: function () {
            let e = c.H1.useSetting(),
                t = (0, fe.uM)();
            return e || t;
        },
        useSearchTerms: () => [g.intl.string(g.t.CyLYKZ)],
    }),
    bN = (0, o.zD)(u.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => g.intl.string(g.t.sJYh5t),
        useSubtitle: () =>
            g.intl.format(g.t.cf9mvV, { helpdeskArticle: ta.A.getArticleURL(Q.MVz.QUESTS_PRIVACY_CONTROLS) }),
        useValue: function () {
            return !c.H1.useSetting();
        },
        setValue: function (e) {
            c.H1.updateSetting(!e);
        },
        useSearchTerms: () => [g.intl.string(g.t.VkS7Yd)],
        useDisabled: fe.uM,
    }),
    b_ = (0, o.zD)(u.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => g.intl.string(g.t.XuADY2),
        useSubtitle: () =>
            g.intl.format(g.t["igTSG/"], { helpdeskArticle: ta.A.getArticleURL(Q.MVz.DATA_PRIVACY_CONTROLS) }),
        useValue: function () {
            return (0, O.bG)([bE.A], () => bE.A.hasConsented(Q.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, bh.U)([Q.YAq.USAGE_STATISTICS], []).catch(f5.i)
                : (0, f5.O)({
                      header: g.intl.string(g.t.OdPCbN),
                      body: g.intl.string(g.t.MGWabA),
                      confirmText: g.intl.string(g.t["D3+rU4"]),
                      cancelText: g.intl.string(g.t.kYpG0u),
                      onConfirm: () => (0, bh.U)([], [Q.YAq.USAGE_STATISTICS]).catch(f5.i),
                  });
        },
        useSearchTerms: () => [g.intl.string(g.t.XuADY2)],
        useDisabled: fe.uM,
    }),
    bf = (0, o.zZ)(u.X.DATA_USAGE_CATEGORY, {
        useTitle: () => g.intl.string(g.t.bvw42E),
        useInlineNotice: ft,
        initialize: () => {
            bE.A.fetchedConsents || (0, bh.Q)();
        },
        buildLayout: () => [b_, bN, bp, bx, bT, bS],
    });
function bb() {
    let e = c.JG.useSetting();
    return (0, O.bG)([K.Ay, H.A], () => {
        let t = new Set(e);
        return K.Ay.getFlattenedGuildIds().filter((e) => null != H.A.getGuild(e) && !t.has(e));
    }, [e]);
}
let bC = {
        type: e_.wF.STACKED_ICONS,
        useIcons: function () {
            let e = bb(),
                t = (0, O.bG)(
                    [H.A],
                    () =>
                        e
                            .slice(0, 2)
                            .map((e) => H.A.getGuild(e))
                            .filter((e) => null != e),
                    [e],
                );
            return 0 === t.length
                ? null
                : t.length >= 2
                  ? {
                        frontIcon: { icon: (0, p.jsx)(Y.$, { guild: t[0], size: 48 }), shape: e_.NF.SQUIRCLE },
                        backIcon: { icon: (0, p.jsx)(Y.$, { guild: t[1], size: 48 }), shape: e_.NF.SQUIRCLE },
                    }
                  : { frontIcon: { icon: (0, p.jsx)(Y.$, { guild: t[0], size: 48 }), shape: e_.NF.SQUIRCLE } };
        },
    },
    bI = (0, o.AK)(u.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = bb();
            if (0 === e.length) return g.intl.format(g.t.QJIJ5p, {});
            let t = H.A.getGuild(e[0]),
                i = t?.name ?? "",
                n = e.length - 1;
            return 0 === n
                ? g.intl.format(g.t["T+8J4A"], { guildName: i })
                : g.intl.format(g.t["3JyODQ"], { guildName: i, count: n });
        },
        useTrailingDecoration: function () {
            return bC;
        },
        destinationKey: u.X.ACTIVITY_PRIVACY_PANEL,
    }),
    bv = (0, o.gN)(u.X.PROFILE_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [bI] }),
    bj = (0, o.Qx)(u.X.PROFILE_PRIVACY_SETTING, {
        useTitle: () => g.intl.string(g.t.Qnf32C),
        useOptions: () => [
            { name: g.intl.string(g.t.Boxc8R), desc: g.intl.string(g.t["nLj+nc"]), value: _.KP.FRIENDS_AND_ALL_GUILDS },
            { name: g.intl.string(g.t.YOIKBt), desc: g.intl.string(g.t.y0JZ4s), value: _.KP.FRIENDS_AND_SMALL_GUILDS },
            { name: g.intl.string(g.t.u0nlJv), desc: g.intl.string(g.t["4jnKHu"]), value: _.KP.FRIENDS_ONLY },
        ],
        useValue: c.KP.useSetting,
        setValue: function (e) {
            let t = c.KP.getSetting();
            if ((c.KP.updateSetting(e), !(0, T.W1)("ProfilePrivacySetting"))) return;
            let n = (0, b.gS)(t, e);
            null != n &&
                (0, f.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        i.e("92164"),
                        i.e("50554"),
                        i.e("90213"),
                        i.e("99126"),
                        i.e("62041"),
                        i.e("63786"),
                    ]).then(i.bind(i, 413201));
                    return (t) =>
                        (0, p.jsx)(e, {
                            ...t,
                            direction: n.direction,
                            affectedGuildIds: n.affectedGuildIds,
                            settingName: n.settingName,
                            mappedActivityValue: n.mappedActivityValue,
                        });
                });
        },
        useSearchTerms: () => [g.intl.string(g.t.Qnf32C)],
    }),
    by = (0, o.zZ)(u.X.PROFILE_PRIVACY_CATEGORY, {
        usePredicate: () => (0, T.lX)("ProfilePrivacyCategory"),
        useTitle: () => g.intl.string(g.t.ul884f),
        useSubtitle: () => g.intl.string(g.t.J0SFL2),
        buildLayout: () => [bj, bv],
    });
var bO = i(814278),
    bR = i(936388),
    bL = i(714763);
let bD = (0, o.zD)(u.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => g.intl.string(g.t["opi/XK"]),
    useSubtitle: () => g.intl.format(g.t["/T+ZlP"], { helpArticle: (0, bO.Lu)() }),
    useValue: function () {
        return (0, O.bG)([bL.A], () => bL.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        bR.A.updatePersistentCodesEnabled(e);
    },
});
var bG = i(787392);
function bP() {
    return (0, O.yK)([bG.A], () => bG.A.getUserIds());
}
var bU = i(803306),
    bV = i(966327),
    bM = i(882129);
function bk(e) {
    let { userId: t, count: i } = e,
        { analyticsLocations: n } = (0, nU.Ay)(),
        l = (0, O.bG)([t3.default], () => t3.default.getUser(t)),
        s = TS.Ay.getFormattedName(l),
        r = N.useCallback(() => {
            (0, bO.kj)(t);
        }, [t]),
        a = N.useCallback(() => (0, ET.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: n }), [t, n]);
    return (
        N.useEffect(() => {
            (0, bU.wz)(t);
        }, [t]),
        (0, p.jsxs)("div", {
            className: bM.uW,
            children: [
                null != l && (0, p.jsx)(bV.A, { className: bM.my, user: l, size: iK._3.SIZE_40 }),
                (0, p.jsxs)("div", {
                    className: bM.Qq,
                    children: [
                        (0, p.jsx)(V.D, {
                            className: bM.Xh,
                            onClick: a,
                            children: (0, p.jsx)(M.E, {
                                variant: "text-md/semibold",
                                color: "interactive-text-active",
                                children: s,
                            }),
                        }),
                        (0, p.jsx)(M.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: g.intl.format(g.t["/MBjYF"], { count: i }),
                        }),
                    ],
                }),
                (0, p.jsx)(V.D, { onClick: r, className: bM.Qz, children: (0, p.jsx)(sp.u, { size: "xs" }) }),
            ],
        })
    );
}
function bw(e) {
    let { className: t, userId: i, verification: n, index: l } = e,
        s = (0, bO.tC)(n.timestamp),
        r = N.useCallback(() => {
            (0, bO.W0)(i, n.verifiedKey);
        }, [n.verifiedKey, i]);
    return (0, p.jsxs)("div", {
        className: t,
        children: [
            (0, p.jsxs)("div", {
                className: bM.Qq,
                children: [
                    (0, p.jsx)(M.E, {
                        variant: "text-sm/semibold",
                        color: "interactive-text-active",
                        children: g.intl.format(g.t.N4qBBO, { index: l + 1 }),
                    }),
                    (0, p.jsx)(M.E, { variant: "text-sm/medium", color: "text-default", children: s }),
                ],
            }),
            (0, p.jsx)(V.D, {
                className: bM.Kk,
                onClick: r,
                children: (0, p.jsx)(cV.P, { size: "md", color: w.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function bB(e) {
    let { userId: t } = e,
        i = (0, O.yK)([bG.A], () =>
            eR()(bG.A.getUserVerifiedKeys(t))
                .entries()
                .map((e) => {
                    let [t, i] = e;
                    return { verifiedKey: t, timestamp: i };
                })
                .sortBy((e) => -1 * e.timestamp)
                .value(),
        );
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsx)(bk, { userId: t, count: i.length }),
            i.map((e, n) =>
                (0, p.jsxs)(
                    N.Fragment,
                    {
                        children: [
                            (0, p.jsx)(bw, { className: bM.nM, userId: t, index: n, verification: e }),
                            n !== i.length - 1 && (0, p.jsx)("div", { className: bM.yF }),
                        ],
                    },
                    `${n}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var bF = i(691263);
let bz = (0, o.E2)(u.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t["5b3FNI"])],
        usePredicate: function () {
            let e = bP();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = bP();
            return (0, p.jsxs)(_K.h, {
                children: [
                    (0, p.jsx)(_K._, {
                        header: g.intl.string(g.t["5b3FNI"]),
                        description: g.intl.format(g.t.jrTSWU, { helpArticle: (0, bO.dc)() }),
                    }),
                    e.map((e) => (0, p.jsx)("div", { className: bF.A, children: (0, p.jsx)(bB, { userId: e }) }, e)),
                ],
            });
        },
    }),
    bX = (0, o.zZ)(u.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => g.intl.string(g.t.xVk85F),
        useInlineNotice: function () {
            return N.useMemo(
                () => ({
                    type: e_.lT.INLINE_NOTICE,
                    noticeType: "info",
                    useText: () => g.intl.format(g.t["/6sFWa"], { helpArticle: (0, bO.aW)() }),
                }),
                [],
            );
        },
        usePredicate: () => (0, ev.isDesktop)(),
        buildLayout: () => [bD, bz],
    }),
    bY = (0, o.t_)(u.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => g.intl.string(g.t.OAuOHD),
        buildLayout: () => [bf, by, bA, bX],
    }),
    bH = (0, o.i4)(u.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.OAuOHD),
        icon: bu.m,
        buildLayout: () => [bY],
    });
var bK = i(782603);
let bW = (0, o.Hn)(u.X.MOBILE_NOTIFICATION_DELAY, {
        useTitle: () => g.intl.string(g.t["8rHeOr"]),
        useSubtitle: () => g.intl.string(g.t["eJE6+J"]),
        useValue: c.cU.useSetting,
        setValue: c.cU.updateSetting,
        useOptions: () =>
            eO
                .range(1, 11)
                .map((e) => ({
                    id: e.toString(),
                    value: 60 * e,
                    label: g.intl.formatToPlainString(g.t.iXLF9W, { minutes: e }),
                })),
    }),
    bZ = (0, o.zD)(u.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => g.intl.string(g.t["btbS+Z"]),
        useSubtitle: () =>
            g.intl.format(g.t.Q5crhR, { onClick: () => (0, ej.openUserSettings)(u.X.TTS_PLAYBACK_RATE) }),
        useValue: c.on.useSetting,
        setValue: c.on.updateSetting,
    }),
    bQ = (0, o.Qx)(u.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.JZxxGx),
        useSubtitle: () => g.intl.string(g.t.HDLtJl),
        useValue: () => (0, O.bG)([o$.A], () => o$.A.getTTSType()),
        setValue: (e) => o4.default.setTTSType(e),
        useOptions: () => [
            { name: g.intl.string(g.t.B1AGeJ), value: Q.aVn.ALL_CHANNELS },
            { name: g.intl.string(g.t.uzZg9e), value: Q.aVn.SELECTED_CHANNEL },
            { name: g.intl.string(g.t.DYO5Oi), value: Q.aVn.NEVER },
        ],
        usePredicate: () => i6.$j,
    }),
    bq = u.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    bJ = (0, o.bd)(bq, {
        useTitle: (e) => (e ? g.intl.string(g.t.RyimDk) : g.intl.string(g.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return aZ(bq, {
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
        buildLayout: () => [bW, bZ, bQ],
    }),
    b$ = (0, o.zZ)(u.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => g.intl.string(g.t["31DySj"]),
        buildLayout: () => [bJ],
    }),
    b0 = (0, o.zD)(u.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => g.intl.string(g.t.VH8AIJ),
        useSubtitle: () => g.intl.string(g.t["9K4qwX"]),
        useValue: () => (0, O.bG)([o$.A], () => !o$.A.getDisableUnreadBadge()),
        setValue: (e) => o4.default.setDisableUnreadBadge(!e),
    }),
    b1 = (0, o.zZ)(u.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => g.intl.string(g.t.l6w3Vj),
        buildLayout: () => [b0],
    });
var b2 = i(100406),
    b3 = i(878460),
    b4 = i(431144);
let b5 = b4.px.map((e) =>
        (0, o.zD)(`${u.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                ((e) => {
                    let { categories: t } = (0, O.cf)([b3.A], () => b3.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, b2.CA)(e.category, t),
        }),
    ),
    b8 = (0, o.Tf)(u.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => g.intl.string(g.t.Ra9Pwk),
        useSubtitle: () => g.intl.string(g.t.iYjQ8X),
        useLabel: () => g.intl.string(g.t.KT1pBA),
        useDisabled: () => {
            let { categories: e } = (0, O.cf)([b3.A], () => b3.A.getEmailSettings());
            return b4.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, b2.NI)(),
        useVariant: () => "critical-secondary",
    }),
    b6 = (0, o.zZ)(u.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => g.intl.string(g.t["w/qqKK"]),
        initialize: function () {
            let { initialized: e } = b3.A.getEmailSettings();
            e || (0, b2.cR)();
        },
        buildLayout: () => [...b5, b8],
    }),
    b7 = (0, o.zD)(u.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t["/0WCll"]),
        useSubtitle: () => g.intl.string(g.t.wF9ih3),
        useValue: () => (0, O.bG)([o$.A], () => o$.A.getDesktopType()) !== Q.nRU.NEVER,
        setValue: (e) => o4.default.setDesktopType(e ? Q.nRU.ALL : Q.nRU.NEVER),
    });
var b9 = i(832712),
    Ce = i(543465),
    Ct = i(406535),
    Ci = i(790782);
let Cn = (0, o.zD)(u.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => g.intl.string(g.t["k6m/si"]),
    useSubtitle: () => g.intl.string(g.t.LGynPs),
    useValue: () => (0, O.bG)([Ce.Ay], () => Ce.Ay.useNewNotifications),
    setValue: function (e) {
        b9.A.setAccountFlag(Ct.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (hI.w.set("turnedOffNewNotifications", !0),
                X.default.track(Q.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: H.A.getGuildsArray().filter(
                        (e) => Ce.Ay.resolveGuildUnreadSetting(e) === Ci.e.ONLY_MENTIONS,
                    ).length,
                }));
    },
    usePredicate: () =>
        (0, O.bG)(
            [t3.default, Ce.Ay],
            () =>
                t3.default.getCurrentUser()?.isStaff() ||
                t3.default.getCurrentUser()?.isStaffPersonal() ||
                Ce.Ay.useNewNotifications,
        ),
});
var Cl = i(70730);
let Cs = (0, o.zD)(u.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.NjOMvh),
        usePersistentBadge: () => ({ badgeType: e_.Xi.BETA }),
        useValue: c.oz.useSetting,
        setValue: function (e) {
            c.oz.updateSetting(e),
                X.default.track(Q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ct.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                });
        },
        useSearchTerms: () => [g.intl.string(g.t.hi4dSk)],
        usePredicate: () => {
            let { enabled: e, showDmPrompts: t } = Cl.u.getConfig({ location: "FriendAnniversaryNotifications" });
            return e && t;
        },
    }),
    Cr = (0, E.mj)({
        kind: "user",
        name: "2026-03-friend-is-online-v3",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    Ca = (0, o.zD)(u.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.sQQgFj),
        useValue: c.NR.useSetting,
        setValue: function (e) {
            c.NR.updateSetting(e),
                X.default.track(Q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ct.Y.ACCOUNT,
                    friend_online_notifications: e,
                });
        },
        usePredicate: () => Cr.useConfig({ location: "FriendOnlineNotifications" }).showSettingsToggle,
    }),
    Co = (0, E.mj)({
        name: "2026-03-game-update-notification",
        kind: "user",
        defaultConfig: { showToggle: !1 },
        variations: { 0: { showToggle: !1 }, 1: { showToggle: !0 } },
    });
var Cu = i(275007);
let Cd = (0, o.zD)(u.X.GAME_UPDATE_NOTIFICATIONS, {
    useTitle: () => g.intl.string(Cu.default["ZZIP+o"]),
    useValue: c.JV.useSetting,
    setValue: function (e) {
        c.JV.updateSetting(e),
            X.default.track(Q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: Ct.Y.ACCOUNT,
                game_update_notifications: e,
            });
    },
    usePredicate: () => Co.useConfig({ location: "SettingsRendererConfig" }).showToggle,
});
var Cc = i(571524);
let Cg = (0, o.zD)(u.X.GDM_ALL_REACTION_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.nvkXtr),
        useValue: c.c3.useSetting,
        setValue: function (e) {
            c.c3.updateSetting(e),
                X.default.track(Q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ct.Y.ACCOUNT,
                    gdm_all_reaction_notifications: e,
                });
        },
        usePredicate: function () {
            return (0, Cc.h)("GdmAllReactionNotification").showSettingsToggle;
        },
    }),
    Cm = (0, o.zD)(u.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.FSNIvs),
        useValue: c.Yh.useSetting,
        setValue: function (e) {
            c.Yh.updateSetting(e),
                X.default.track(Q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ct.Y.ACCOUNT,
                    go_live_notifications: e,
                });
        },
    }),
    CA = (0, E.mj)({
        kind: "user",
        name: "2026-01-profile-updates-notification",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 0: { showSettingsToggle: !1 }, 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    Ch = (0, o.zD)(u.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.xBLMhQ),
        useValue: c.T3.useSetting,
        setValue: function (e) {
            c.T3.updateSetting(e),
                X.default.track(Q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ct.Y.ACCOUNT,
                    profile_updates_notifications: e,
                });
        },
        usePredicate: () => CA.useConfig({ location: "user_settings.ProfileUpdatesNotifications" }).showSettingsToggle,
    });
var CE = i(815807);
let CT = (0, o.Hn)(u.X.REACTION_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: g.intl.string(g.t["9x/RtT"]), value: _.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: g.intl.string(g.t.fJAbQd), value: _.Tz.ONLY_DMS },
            { id: "disabled", label: g.intl.string(g.t["xu+UDU"]), value: _.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: c.Zp.useSetting,
        setValue: (e) => (0, CE.n4)(e, c.Zp.getSetting()),
    }),
    CS = (0, o.zD)(u.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t["k51K1+"]),
        useValue: c.Qr.useSetting,
        setValue: function (e) {
            c.Qr.updateSetting(e),
                X.default.track(Q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ct.Y.ACCOUNT,
                    server_trending_notifications: e,
                });
        },
        usePredicate: () => !1,
    }),
    Cx = (0, E.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    Cp = (0, o.zD)(u.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.G8NPz6),
        useValue: c.zS.useSetting,
        setValue: function (e) {
            c.zS.updateSetting(e),
                X.default.track(Q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ct.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                });
        },
        usePredicate: () => Cx.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    CN = (0, o.FW)(u.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => g.intl.string(g.t.FEVRDV),
        buildLayout: () => [Cm, Cs, Ca, CS, Cp, Cd, Ch, CT, Cg],
    }),
    C_ = (0, o.zD)(u.X.TASK_BAR_FLASHING, {
        useTitle: () => g.intl.string(g.t.xSmFQG),
        useSubtitle: () => g.intl.string(g.t.bd4j4x),
        useValue: () => (0, O.bG)([o$.A], () => o$.A.taskbarFlash),
        setValue: (e) => o4.default.setTaskbarFlash(e),
        usePredicate: () => (0, le.uF)(),
    }),
    Cf = (0, o.zZ)(u.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => g.intl.string(g.t["/dp6yY"]),
        buildLayout: () => [b7, C_, CN, Cn],
    });
var Cb = i(965957),
    CC = i(312671),
    CI = i(235079);
let Cv = (0, o.zD)(u.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = o0.A.useHolidaySoundpack();
        return null == e ? "" : g.intl.format(g.t["E/OyBr"], { soundpack: g.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, O.bG)([CC.A], () => CC.A.getSoundpack()),
            t = o0.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = o0.A.getHolidaySoundpack();
        ty()(null != t, "predicate should fail if no soundpack is available"), (0, Cb.p)(e ? t : CI.i.CLASSIC);
    },
    usePredicate: o0.A.useIsEligible,
});
var Cj = i(970931);
let Cy = {
        useTitle: () => g.intl.string(g.t.jD1qzM),
        sound: "message1",
        useDisabled: Cj.kB,
        useDisabledMessage: () => ((0, Cj.kB)() ? g.intl.string(g.t.cIRG0s) : void 0),
    },
    CO = { useTitle: () => g.intl.string(g.t.XBrJT6), sound: "call_ringing" },
    CR = (0, o.zD)(u.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.TzjwV9),
        useSubtitle: () => g.intl.format(g.t.OOiGCM, { onClick: () => o6("message3") }),
        useValue: () =>
            (0, O.bG)([o$.A], () => o$.A.getNotifyMessagesInSelectedChannel() && !o$.A.getDisableAllSounds()),
        setValue: (e) => o4.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, O.bG)([o$.A], () => o$.A.getDisableAllSounds()),
    }),
    CL = (0, o.zD)(u.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => g.intl.string(g.t["2ZhCOd"]),
        useSubtitle: () => g.intl.string(g.t.EAKdPr),
        useValue: () => (0, O.bG)([o$.A], () => o$.A.getDisableAllSounds()),
        setValue: (e) => o4.default.toggleDisableAllSounds(e),
    }),
    CD = (0, o.D1)(u.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                o8();
            };
        },
        buildLayout: () => [o7(Cy), CR, o7(CO), CL],
    }),
    CG = (0, o.AK)(u.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => g.intl.string(g.t["MMy+lm"]),
        useSearchTerms: () => [g.intl.string(g.t["MMy+lm"])],
        destinationKey: u.X.SOUNDS_CATEGORY,
    }),
    CP = (0, o.gN)(u.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [CG] }),
    CU = (0, o.zZ)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.LweOYy),
        buildLayout: () => [Cv, CD, CP],
    }),
    CV = (0, o.t_)(u.X.NOTIFICATIONS_PANEL, {
        useTitle: () => g.intl.string(g.t.HcoRu0),
        buildLayout: () => [Cf, CU, b1, b6, b$],
    }),
    CM = (0, o.i4)(u.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.HcoRu0),
        icon: bK.X,
        buildLayout: () => [CV],
    }),
    Ck = (0, o.WI)(u.X.USER_SECTION, {
        useTitle: () => g.intl.string(g.t.cduTBL),
        buildLayout: () => [
            Nb,
            bo,
            bH,
            ...((0, SB.pC)("UserSection") ? [] : [Nh]),
            NR,
            ...((0, SB.pC)("UserSection") ? [] : [xz]),
            _X,
            CM,
            N7,
        ],
    });
var Cw = i(387758),
    CB = i(271866),
    CF = i(147964),
    Cz = i(867099);
let CX = (0, o.zD)(u.X.APPLICATION_TEST_MODE, {
        useTitle: () => g.intl.string(g.t.erOqlh),
        useSubtitle: () => g.intl.string(g.t["52hMnD"]),
        usePredicate: c.Q_.useSetting,
        useValue: () => (0, O.bG)([CF.A], () => null != CF.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, f.openModal)((e) => (0, p.jsx)(Cz.A, { ...e })) : CB.cL();
        },
    }),
    CY = (0, o.zD)(u.X.DEVELOPER_MODE, {
        useTitle: () => g.intl.string(g.t.ObIb1Q),
        useSubtitle: () => g.intl.format(g.t["CY6q/Q"], { apiDocsUrl: Q.X7G.API_DOCS }),
        useValue: c.Q_.useSetting,
        setValue: c.Q_.updateSetting,
        usePredicate: () => d8.p5,
    }),
    CH = (0, o.zZ)(u.X.DEVELOPER_CATEGORY, { buildLayout: () => [CY, CX] }),
    CK = (0, o.t_)(u.X.DEVELOPER_PANEL, { useTitle: () => g.intl.string(g.t["0BRxRp"]), buildLayout: () => [CH] }),
    CW = (0, o.i4)(u.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: Cw.G,
        useTitle: () => g.intl.string(g.t["0BRxRp"]),
        buildLayout: () => [CK],
    });
var CZ = i(70688),
    CQ = i(830215);
let Cq = (0, o.i4)(u.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => g.intl.string(g.t["2jxGer"]),
        icon: CZ.o,
        onClick: () => {
            (0, lt.A)({
                title: g.intl.string(g.t["2jxGer"]),
                subtitle: g.intl.string(g.t.SUnWBB),
                confirmText: g.intl.string(g.t["2jxGer"]),
                onConfirm: () => {
                    CQ.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    CJ = (0, o.WI)(u.X.UTILITY_SECTION, { buildLayout: () => [CW, Cq].filter(t4.Vq) }),
    C$ = (0, o.Hr)({ buildLayout: () => [Sw, Ck, A3, uR, iz, Ed, CJ], analyticsKey: "user_settings" });
